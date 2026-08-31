class_name ChapterData
extends Resource

## Define os dados de um Capítulo Narrativo no MedZoo.

@export var chapter_id: String = ""
@export var title: String = ""
@export var subtitle: String = ""
@export_multiline var description: String = ""
@export var chapter_order: int = 1
@export var required_rank: int = 0
@export var required_cases: int = 0
@export var required_reputation: int = 0

@export var intro_dialogue: Array[Dictionary] = []
@export var unlocked_knowledge: Array[String] = []
@export var unlocked_document_ids: Array[String] = []
