class_name CareerData
extends Node

## Base de Dados Configurável para Cargos, Permissões e Equipamentos de Carreira.

static func get_all_ranks() -> Array[Dictionary]:
	return [
		{
			"index": 0,
			"id": "intern",
			"title": "Estagiário de Fauna Silvestre",
			"required_xp": 0,
			"required_reputation": 0,
			"required_cases": 0,
			"description": "Período de formação e observação de atendimentos clínicos iniciais.",
			"permissions": ["CAN_PERFORM_BASIC_EXAMS"],
			"unlocked_equipment": ["basic_exams"]
		},
		{
			"index": 1,
			"id": "junior_vet",
			"title": "Veterinário Júnior",
			"required_xp": 500,
			"required_reputation": 200,
			"required_cases": 1,
			"description": "Autonomia para atendimentos de baixa complexidade e exames radiográficos.",
			"permissions": ["CAN_PERFORM_BASIC_EXAMS", "CAN_REQUEST_RADIOGRAPHY"],
			"unlocked_equipment": ["basic_exams", "radiography"]
		},
		{
			"index": 2,
			"id": "vet",
			"title": "Veterinário",
			"required_xp": 1200,
			"required_reputation": 500,
			"required_cases": 2,
			"description": "Capacidade plena de diagnóstico, ultrassonografia e condutas terapêuticas.",
			"permissions": ["CAN_PERFORM_BASIC_EXAMS", "CAN_REQUEST_RADIOGRAPHY", "CAN_REQUEST_ULTRASOUND"],
			"unlocked_equipment": ["basic_exams", "radiography", "ultrasound"]
		},
		{
			"index": 3,
			"id": "senior_vet",
			"title": "Veterinário Sênior",
			"required_xp": 2200,
			"required_reputation": 1000,
			"required_cases": 4,
			"description": "Especialista em casos complexos e monitoramento intensivo de fauna.",
			"permissions": ["CAN_PERFORM_BASIC_EXAMS", "CAN_REQUEST_RADIOGRAPHY", "CAN_REQUEST_ULTRASOUND", "CAN_HANDLE_COMPLEX_CASES"],
			"unlocked_equipment": ["basic_exams", "radiography", "ultrasound", "advanced_monitoring"]
		},
		{
			"index": 4,
			"id": "specialist",
			"title": "Especialista em Fauna Silvestre",
			"required_xp": 3500,
			"required_reputation": 1800,
			"required_cases": 7,
			"description": "Referência clínica e cirúrgica para espécies silvestres e exóticas.",
			"permissions": ["CAN_PERFORM_BASIC_EXAMS", "CAN_REQUEST_RADIOGRAPHY", "CAN_REQUEST_ULTRASOUND", "CAN_HANDLE_COMPLEX_CASES", "CAN_PERFORM_SURGERY_PREP"],
			"unlocked_equipment": ["basic_exams", "radiography", "ultrasound", "advanced_monitoring", "surgical_suite"]
		},
		{
			"index": 5,
			"id": "coordinator",
			"title": "Coordenador Clínico",
			"required_xp": 5000,
			"required_reputation": 3000,
			"required_cases": 10,
			"description": "Liderança médica da clínica e gestão integral dos plantões.",
			"permissions": ["ALL_PERMISSIONS"],
			"unlocked_equipment": ["basic_exams", "radiography", "ultrasound", "advanced_monitoring", "surgical_suite", "icu_unit"]
		}
	]

static func get_rank_by_index(idx: int) -> Dictionary:
	var ranks: Array[Dictionary] = get_all_ranks()
	idx = clamp(idx, 0, ranks.size() - 1)
	return ranks[idx]

static func get_equipment_info(eq_id: String) -> Dictionary:
	var equipments: Dictionary = {
		"basic_exams": {
			"name": "Exames Físicos Básicos",
			"description": "Palpação, ausculta e inspeção geral de estresse.",
			"icon": "🩺"
		},
		"radiography": {
			"name": "Radiografia Digital",
			"description": "Exames de imagem para anomalias ósseas e anatômicas.",
			"icon": "🦴"
		},
		"ultrasound": {
			"name": "Ultrassonografia Celomática",
			"description": "Avaliação ultrassonográfica de órgãos internos e tecidos moles.",
			"icon": "📻"
		},
		"advanced_monitoring": {
			"name": "Monitoramento Intensivo",
			"description": "Oxigenoterapia e suporte cardiorrespiratório avançado.",
			"icon": "🫀"
		},
		"surgical_suite": {
			"name": "Centro Cirúrgico de Fauna",
			"description": "Infraestrutura para procedimentos cirúrgicos complexos.",
			"icon": "🏥"
		},
		"icu_unit": {
			"name": "Unidade UTI Silvestre",
			"description": "Internamento de alta complexidade e isolamento bioclimático.",
			"icon": "⚡"
		}
	}
	return equipments.get(eq_id, {"name": eq_id, "description": "", "icon": "📦"})
