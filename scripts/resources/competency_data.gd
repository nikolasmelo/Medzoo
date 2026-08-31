class_name CompetencyData
extends Resource

## Define uma Competência / Certificação Profissional no MedZoo (Etapa 18).

@export var competency_id: String = ""
@export var title: String = ""
@export var category: String = "Diagnóstico por Imagem" # Diagnóstico por Imagem, Medicina de Aves, Medicina de Répteis, Emergência
@export_multiline var description: String = ""
@export var required_rank: int = 1
@export var required_reputation: int = 150
@export var required_chapter: int = 1

@export var unlocked_equipment_id: String = ""
@export var unlocked_permission: String = ""

@export_multiline var training_content: String = ""
@export_multiline var evaluation_question: String = ""
@export var evaluation_options: Array[String] = []
@export var correct_option_index: int = 0
@export_multiline var educational_explanation: String = ""
