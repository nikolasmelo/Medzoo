extends Node

## Gerenciador de Competências e Certificações do MedZoo (Etapa 18).
## Define a lista de competências profissionais, trilhas de treinamento e avaliações educacionais.

signal certification_unlocked(comp_data: CompetencyData)

var competencies: Array[CompetencyData] = []

func _ready() -> void:
	_load_database()

func _load_database() -> void:
	competencies.clear()
	
	# --- CERTIFICAÇÃO 1: DIAGNÓSTICO POR IMAGEM — NÍVEL I ---
	var comp1: CompetencyData = CompetencyData.new()
	comp1.competency_id = "diagnostic_imaging_1"
	comp1.title = "Diagnóstico por Imagem — Nível I"
	comp1.category = "Diagnóstico por Imagem"
	comp1.description = "Capacitação em indicação radiográfica, princípios de radiopacidade, projeções e segurança diagnóstica em animais silvestres."
	comp1.required_rank = 1 # Veterinário Júnior
	comp1.required_reputation = 150
	comp1.required_chapter = 1
	comp1.unlocked_equipment_id = "xray_digital"
	comp1.unlocked_permission = "can_request_radiography"
	
	comp1.training_content = "CONTEÚDO FORMATIVO — DIAGNÓSTICO POR IMAGEM I\n\n" + \
		"1. INDICAÇÕES CLÍNICAS: A radiografia é indicada quando o exame físico aponta dor localizada, assimetria de membros, crepitação ou suspeita de fraturas ósseas.\n" + \
		"2. PRINCIPIOS DE RADIOPACIDADE: Estruturas ósseas e corpos estranhos opacos absorvem mais radiação (radiopacos), enquanto tecidos moles e ar permitem maior passagem (radiolúcidos).\n" + \
		"3. SEGURANÇA DIAGNÓSTICA: Evite exames desnecessários que aumentem o estresse do paciente ou estourem o orçamento do turno sem justificativa clínica prévia."
		
	comp1.evaluation_question = "Pergunta de Avaliação:\n\nEm qual das situações abaixo a indicação de Radiografia Digital é clinicamente priorizada durante a triagem de um animal silvestre?"
	comp1.evaluation_options = [
		"A) Em todos os pacientes assintomáticos apenas para rotina preventiva.",
		"B) Quando o exame físico revelar assimetria de membro, dor localizada ou suspeita de lesão estrutural óssea.",
		"C) Exclusivamente após a administração prévia de sedativos de alta dosagem.",
		"D) Sempre que o orçamento do plantão estiver acima de R$ 500."
	]
	comp1.correct_option_index = 1 # Opção B
	comp1.educational_explanation = "Correto! Exames de imagem devem responder a dúvidas clínicas específicas identificadas no exame físico (assimetrias, dor ou suspeitas estruturais), otimizando o orçamento e preservando o bem-estar do paciente."
	
	competencies.append(comp1)
	
	# --- CERTIFICAÇÃO 2 (PREPARAÇÃO/FUTURO): DIAGNÓSTICO POR IMAGEM — NÍVEL II ---
	var comp2: CompetencyData = CompetencyData.new()
	comp2.competency_id = "diagnostic_imaging_2"
	comp2.title = "Diagnóstico por Imagem — Nível II"
	comp2.category = "Diagnóstico por Imagem"
	comp2.description = "Ultrassonografia celomática e interpretação radiográfica avançada em répteis e aves de grande porte."
	comp2.required_rank = 2
	comp2.required_reputation = 400
	comp2.required_chapter = 2
	comp2.unlocked_equipment_id = "ultrasound_celomatic"
	comp2.unlocked_permission = "can_request_ultrasound"
	comp2.training_content = "Treinamento avançado em ultrassonografia celomática..."
	comp2.evaluation_question = "Pergunta de Ultrassonografia..."
	comp2.evaluation_options = ["A", "B", "C", "D"]
	comp2.correct_option_index = 0
	comp2.educational_explanation = "Explicação educacional de ultrassonografia..."
	
	competencies.append(comp2)

func get_all_competencies() -> Array[CompetencyData]:
	return competencies

func get_competency_by_id(comp_id: String) -> CompetencyData:
	for comp in competencies:
		if comp.competency_id == comp_id:
			return comp
	return null

func is_competency_unlocked_for_training(comp: CompetencyData, cur_rank: int, reputation: int, current_chapter: int) -> bool:
	if comp == null:
		return false
	return cur_rank >= comp.required_rank and reputation >= comp.required_reputation and current_chapter >= comp.required_chapter
