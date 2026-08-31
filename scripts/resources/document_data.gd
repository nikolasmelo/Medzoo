class_name DocumentData
extends Resource

## Define um Documento / Memorando Institucional no MedZoo.

@export var document_id: String = ""
@export var title: String = ""
@export var category: String = "MEMORANDO" # MEMORANDO, RELATÓRIO, COMUNICADO, PRONTUÁRIO
@export_multiline var content: String = ""
@export var date_text: String = "15/04/2026"
@export var chapter_unlocked: int = 1
@export var author: String = "CARFS — Direção Clínica"
