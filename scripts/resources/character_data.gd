class_name CharacterData
extends Resource

## Define um Personagem Recorrente no MedZoo.

@export var character_id: String = ""
@export var name: String = ""
@export var role: String = ""
@export_multiline var description: String = ""
@export var relationship_value: int = 50 # 0 a 100
@export var avatar_icon: String = "👤"
@export var introduction_chapter: int = 1
