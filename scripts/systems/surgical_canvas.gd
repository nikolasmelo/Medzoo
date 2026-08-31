extends Node2D
class_name SurgicalCanvas

## Canvas Tático de Incisão, Hemorragia e Sutura em Camadas
## Gerencia diérese por plano anatômico, taxa de sangramento, aspiração/cautério e nó de sutura.

signal layer_dissected(layer_index: int, layer_name: String)
signal hemorrhage_started(rate_ml_s: float)
signal hemorrhage_controlled()
signal suture_applied(knot_pos: Vector2, result_status: String)

enum AnatomyLayer {
	EPIDERMIS = 0,
	SUBCUTIS = 1,
	FASCIA = 2,
	MUSCLE = 3,
	PERIOSTEUM = 4,
	BONE = 5
}

const LAYER_NAMES: Array[String] = [
	"Epiderme/Derme",
	"Subcutâneo",
	"Fáscia Muscular",
	"Músculo",
	"Periósteo",
	"Estrutura Óssea/Orgânica"
]

@export var current_layer: AnatomyLayer = AnatomyLayer.EPIDERMIS
@export var hemorrhage_rate_ml_s: float = 0.0
@export var accumulated_blood_ml: float = 0.0
@export var is_cauterized: bool = false

var incised_cuts: Array[Dictionary] = []
var active_sutures: Array[Dictionary] = []

func _process(delta: float) -> void:
	if hemorrhage_rate_ml_s > 0.0 and not is_cauterized:
		accumulated_blood_ml += hemorrhage_rate_ml_s * delta

## Executa incisão cirúrgica com bisturi na camada anatômica atual.
func apply_incise(start_pos: Vector2, end_pos: Vector2, target_layer: AnatomyLayer) -> Dictionary:
	var cut_length: float = start_pos.distance_to(end_pos)
	if cut_length < 5.0:
		return { "success": false, "reason": "Incisão muito curta" }

	current_layer = target_layer
	var layer_name: String = LAYER_NAMES[int(current_layer)]

	# Incisão em músculo ou subcutâneo vascular gera sangramento procedural
	if current_layer == AnatomyLayer.SUBCUTIS:
		hemorrhage_rate_ml_s += 1.5
		is_cauterized = false
		hemorrhage_started.emit(hemorrhage_rate_ml_s)
	elif current_layer == AnatomyLayer.MUSCLE:
		hemorrhage_rate_ml_s += 4.0
		is_cauterized = false
		hemorrhage_started.emit(hemorrhage_rate_ml_s)

	var cut_data: Dictionary = {
		"start": start_pos,
		"end": end_pos,
		"layer": current_layer,
		"length": cut_length
	}
	incised_cuts.append(cut_data)
	layer_dissected.emit(int(current_layer), layer_name)

	return {
		"success": true,
		"layer": current_layer,
		"layer_name": layer_name,
		"cut_length": cut_length,
		"hemorrhage_rate": hemorrhage_rate_ml_s
	}

## Aplica aspiração cirúrgica para remover sangue acumulado no campo.
func apply_suction(amount_ml: float) -> float:
	var sucked: float = min(accumulated_blood_ml, amount_ml)
	accumulated_blood_ml -= sucked
	return sucked

## Aplica eletrocautério na ferida para estancar a hemorragia.
func apply_electrocautery(pos: Vector2) -> bool:
	if hemorrhage_rate_ml_s > 0.0:
		hemorrhage_rate_ml_s = 0.0
		is_cauterized = true
		hemorrhage_controlled.emit()
		if SoundManager != null:
			SoundManager.play_sfx_tone(800.0, 0.15, 0.3, "square")
		return true
	return false

## Avalia e aplica nó de sutura baseado em tensão (g).
## Tensão < 50g -> Frouxo (Risco de deiscência)
## Tensão 50g - 150g -> Perfeito (Cicatriz primária)
## Tensão > 150g -> Apertado (Risco de Isquemia/Necrose)
func apply_suture(knot_pos: Vector2, tension_grams: float) -> Dictionary:
	var status: String = ""
	var is_effective: bool = false

	if tension_grams < 50.0:
		status = "FROUXO (Risco de Deiscência de Ferida)"
		is_effective = false
	elif tension_grams <= 150.0:
		status = "PERFEITO (Aposição Adequada de Bordas)"
		is_effective = true
	else:
		status = "ISQUÊMICO (Tensão Excessiva / Risco de Necrose)"
		is_effective = false

	var suture_entry: Dictionary = {
		"position": knot_pos,
		"tension": tension_grams,
		"status": status,
		"is_effective": is_effective
	}
	active_sutures.append(suture_entry)
	suture_applied.emit(knot_pos, status)

	return {
		"status": status,
		"is_effective": is_effective,
		"tension_grams": tension_grams,
		"total_sutures": active_sutures.size()
	}

func clear_canvas() -> void:
	current_layer = AnatomyLayer.EPIDERMIS
	hemorrhage_rate_ml_s = 0.0
	accumulated_blood_ml = 0.0
	is_cauterized = false
	incised_cuts.clear()
	active_sutures.clear()
