extends Node
class_name VitalSignsEngine

## Motor Fisiológico & Farmacocinético do MedZoo
## Simula hemodinâmica integrada, dosimetria (mg/kg), absorção/decaimento e estresse procedural.

signal vitals_updated(vitals_dict: Dictionary)
signal cardiac_arrest_triggered(reason: String)
signal stress_threshold_exceeded(stress_level: float)
signal drug_administered(drug_id: String, dose_per_kg: float)

@export var body_mass_kg: float = 1.0
@export var base_map: float = 85.0       # Pressão Arterial Média baseline (mmHg)
@export var base_hr: float = 120.0       # Frequência Cardíaca baseline (bpm)
@export var base_spo2: float = 98.0      # Saturação de O2 baseline (%)
@export var base_etco2: float = 38.0     # CO2 Expirado baseline (mmHg)
@export var base_temp: float = 38.0      # Temperatura Central (°C)

var map: float = 85.0
var hr: float = 120.0
var spo2: float = 98.0
var etco2: float = 38.0
var core_temp: float = 38.0
var stress_level: float = 0.2           # 0.0 (Calmo) a 1.0 (Pânico/Choque)

var is_in_cardiac_arrest: bool = false
var active_drugs: Dictionary = {}         # drug_id -> { "conc": float, "decay_k": float, "effect": String }

func _ready() -> void:
	reset_vitals()

func reset_vitals() -> void:
	map = base_map
	hr = base_hr
	spo2 = base_spo2
	etco2 = base_etco2
	core_temp = base_temp
	stress_level = 0.2
	is_in_cardiac_arrest = false
	active_drugs.clear()
	_emit_vitals()

func _process(delta: float) -> void:
	update_vitals(delta)

## Atualiza a simulação fisiológica a cada frame.
func update_vitals(delta: float) -> void:
	if is_in_cardiac_arrest:
		map = max(0.0, map - 15.0 * delta)
		hr = max(0.0, hr - 20.0 * delta)
		spo2 = max(0.0, spo2 - 10.0 * delta)
		_emit_vitals()
		return

	# 1. Decaimento Exponencial de Fármacos C(t) = C0 * e^(-k * dt)
	var keys_to_remove: Array[String] = []
	for drug_id in active_drugs.keys():
		var drug_info: Dictionary = active_drugs[drug_id]
		var k: float = float(drug_info.get("decay_k", 0.05))
		var cur_conc: float = float(drug_info.get("conc", 0.0))
		var new_conc: float = cur_conc * exp(-k * delta)
		
		if new_conc < 0.001:
			keys_to_remove.append(drug_id)
		else:
			drug_info["conc"] = new_conc

	for k_rem in keys_to_remove:
		active_drugs.erase(k_rem)

	# 2. Avaliação de Efeitos Farmacológicos
	var sedative_effect: float = get_drug_effect("sedativo")
	var analgesic_effect: float = get_drug_effect("analgesico")
	var toxic_effect: float = get_drug_effect("toxico")

	# Sedativos e analgésicos reduzem o estresse
	stress_level = clamp(stress_level - (sedative_effect + analgesic_effect * 0.5) * 0.2 * delta, 0.0, 1.0)

	# 3. Cálculo Dinâmico das Variáveis Fisiológicas
	# Estresse aumenta HR e MAP
	var stress_hr_mod: float = stress_level * 40.0
	var stress_map_mod: float = stress_level * 25.0

	# Depressão respiratória por excesso de sedativo/toxicidade reduz SpO2
	var resp_depression: float = max(0.0, (sedative_effect - 1.5) * 8.0) + (toxic_effect * 15.0)
	spo2 = clamp(base_spo2 - resp_depression - (stress_level * 5.0), 30.0, 100.0)

	# Hipóxia severa (SpO2 < 80%) derruba MAP e altera Frequência Cardíaca
	var hypoxia_penalty: float = 0.0
	if spo2 < 85.0:
		hypoxia_penalty = (85.0 - spo2) * 2.0

	map = clamp(base_map + stress_map_mod - hypoxia_penalty, 0.0, 180.0)
	hr = clamp(base_hr + stress_hr_mod - (hypoxia_penalty * 1.2), 0.0, 250.0)
	etco2 = clamp(base_etco2 + (resp_depression * 0.5), 10.0, 70.0)

	# 4. Verificação de Condições Limite & Gatilhos de Colapso
	if stress_level >= 0.95:
		stress_threshold_exceeded.emit(stress_level)

	if (map < 45.0 or spo2 < 70.0) and not is_in_cardiac_arrest:
		is_in_cardiac_arrest = true
		var reason: String = "Choque Hipóxico (SpO2 < 70%)" if spo2 < 70.0 else "Choque Hipovolêmico/Hipotensivo (MAP < 45 mmHg)"
		cardiac_arrest_triggered.emit(reason)

	_emit_vitals()

## Administra medicamento com cálculo exato de dosagem em mg/kg.
func administer_drug(drug_id: String, dose_mg: float, decay_k: float = 0.05, effect_type: String = "sedativo") -> float:
	if body_mass_kg <= 0.0:
		body_mass_kg = 1.0
	
	var dose_per_kg: float = dose_mg / body_mass_kg
	
	var cur_conc: float = 0.0
	if active_drugs.has(drug_id):
		cur_conc = float(active_drugs[drug_id].get("conc", 0.0))
	
	active_drugs[drug_id] = {
		"conc": cur_conc + dose_per_kg,
		"decay_k": decay_k,
		"effect": effect_type
	}
	
	drug_administered.emit(drug_id, dose_per_kg)
	return dose_per_kg

## Retorna a soma das concentrações ativas de uma classe de efeito.
func get_drug_effect(effect_type: String) -> float:
	var total: float = 0.0
	for d in active_drugs.values():
		if String(d.get("effect", "")) == effect_type:
			total += float(d.get("conc", 0.0))
	return total

## Adiciona estresse mecânico ao paciente.
func apply_procedural_stress(amount: float) -> void:
	var sedative_protection: float = get_drug_effect("sedativo")
	var effective_stress: float = amount * max(0.1, 1.0 - (sedative_protection * 0.4))
	stress_level = clamp(stress_level + effective_stress, 0.0, 1.0)
	if stress_level >= 0.95:
		stress_threshold_exceeded.emit(stress_level)

## Retorna dicionário formatado com todos os parâmetros vitais.
func get_vitals_summary() -> Dictionary:
	return {
		"map": map,
		"hr": hr,
		"spo2": spo2,
		"etco2": etco2,
		"core_temp": core_temp,
		"stress_level": stress_level,
		"is_in_cardiac_arrest": is_in_cardiac_arrest,
		"active_drugs_count": active_drugs.size()
	}

func _emit_vitals() -> void:
	vitals_updated.emit(get_vitals_summary())
