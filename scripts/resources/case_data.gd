class_name CaseData
extends Resource

## Define a estrutura de dados para um caso clínico veterinário.
## Herdando de Resource, permitindo salvar cada caso como um arquivo .tres configurável.

@export var case_id: String = ""
@export var species_name: String = ""
@export var scientific_name: String = ""
@export var patient_code: String = ""
@export var image_texture: Texture2D
@export_multiline var arrival_reason: String = ""
@export_multiline var physical_description: String = ""
@export_multiline var initial_behavior: String = ""
@export_multiline var physical_exam_notes: String = ""

@export var initial_evidence_ids: Array[String] = ["wing_left_drooping"]
@export_multiline var recovery_notes: String = "Favorável (estabilização bem sucedida, redução de estresse e pronta reabilitação em recinto apropriado)."

## Configurações de Gamificação e Simulação
@export var initial_stress: float = 25.0
@export var stress_rate_per_exam: float = 12.0
@export var case_budget: float = 300.0
@export var exam_cost: float = 80.0
@export var xray_hotspot: Vector2 = Vector2(240, 110)
@export var xray_hotspot_radius: float = 50.0

## Configurações de Carreira e Desbloqueio
@export var career_order: int = 0
@export var required_stars: int = 0
@export var minimum_rank: int = 0
@export var required_equipment: Array[String] = []
@export var required_certifications: Array[String] = []
@export var required_reputation: int = 0
@export var chapter: int = 1
@export var reputation_reward: int = 250
@export var difficulty: int = 1
@export var shift_priority: int = 0 # 0 = Normal, 1 = Importante, 2 = Urgentes

## Estruturas de Raciocínio Clínico e Aprendizado Contextual (Etapa 15)
@export var clinical_problems: Array[Dictionary] = []
@export var differential_diagnoses: Array[Dictionary] = []
@export var educational_notes: Dictionary = {}
## Registro centralizado de evidências clínicas (ID interno -> dados/texto da evidência).
@export var evidence_data: Dictionary = {
	"wing_left_drooping": {
		"text": "Asa esquerda mantida abaixo da posição habitual (caída)."
	},
	"wing_left_pain": {
		"text": "O animal demonstra reação de dor durante a manipulação da asa esquerda."
	},
	"xray_left_wing_fracture": {
		"text": "Observa-se alteração compatível com fratura óssea na asa esquerda."
	}
}

## Resultados do exame físico por região do corpo associados ao ID da evidência (ou vazio se normal).
@export var physical_exam_results: Dictionary = {
	"Cabeça": "",
	"Olhos": "",
	"Bico": "",
	"Asa esquerda": "wing_left_pain",
	"Asa direita": "",
	"Tórax": "",
	"Abdômen": "",
	"Pernas": "",
	"Plumagem": ""
}

## Exames complementares disponíveis para este caso clínico.
## Chave: ID do exame (ex: "xray_left_wing") -> Valor: dados do exame e ID da evidência associada.
@export var complementary_exams: Dictionary = {
	"xray_left_wing": {
		"name": "Raio-X da asa esquerda",
		"description": "Avaliação radiográfica do membro anterior esquerdo.",
		"evidence_id": "xray_left_wing_fracture"
	}
}

## Diagnóstico correto do caso (mantido oculto até a confirmação do jogador).
@export var correct_diagnosis: String = "Fratura da asa esquerda"

## Lista de hipóteses diagnósticas possíveis que o jogador pode avaliar.
@export var possible_diagnoses: Array[String] = [
	"Fratura da asa esquerda",
	"Luxação da asa esquerda",
	"Lesão muscular",
	"Contusão da asa"
]

## Mapeamento de hipóteses para os IDs de evidências que as fundamentam.
## Chave: Nome da hipótese -> Valor: Array de IDs de evidência.
@export var hypothesis_evidence_map: Dictionary = {
	"Fratura da asa esquerda": [
		"wing_left_drooping",
		"wing_left_pain",
		"xray_left_wing_fracture"
	],
	"Luxação da asa esquerda": [
		"wing_left_drooping",
		"wing_left_pain"
	],
	"Lesão muscular": [
		"wing_left_pain"
	],
	"Contusão da asa": [
		"wing_left_pain"
	]
}

## Opções de conduta/tratamento médico disponíveis para o paciente.
## Cada dicionário contém: "id", "name", "description", "appropriate" (bool).
@export var treatment_options: Array[Dictionary] = [
	{
		"id": "pain_control",
		"name": "Controle da dor",
		"description": "Proporcionar analgesia apropriada conforme avaliação veterinária.",
		"appropriate": true
	},
	{
		"id": "wing_stabilization",
		"name": "Estabilização da lesão",
		"description": "Realizar estabilização adequada da asa afetada, quando indicada.",
		"appropriate": true
	},
	{
		"id": "rest_habitat",
		"name": "Repouso em recinto adequado",
		"description": "Manter o animal em recinto acolhedor, reduzindo movimentação e estresse.",
		"appropriate": true
	},
	{
		"id": "clinical_monitoring",
		"name": "Monitoramento constante",
		"description": "Acompanhar a evolução clínica e condição da lesão durante a recuperação.",
		"appropriate": true
	},
	{
		"id": "immediate_release",
		"name": "Liberar imediatamente para voo",
		"description": "Soltar o animal na natureza sem período de reabilitação ou cicatrização.",
		"appropriate": false
	},
	{
		"id": "intense_activity",
		"name": "Estimular atividade física intensa",
		"description": "Forçar o animal a se exercitar para testar o membro lesionado.",
		"appropriate": false
	},
	{
		"id": "ignore_pain",
		"name": "Ignorar sinais de dor",
		"description": "Não gerenciar o estresse nem administrar analgesia ao animal.",
		"appropriate": false
	}
]
