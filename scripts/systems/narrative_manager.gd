extends Node

## Gerenciador Narrativo do MedZoo (Etapa 17).
## Controla capítulos, documentos, personagens, diálogos, eventos e flags narrativas sem acoplar clinic.gd.

signal document_unlocked(doc_data: DocumentData)
signal chapter_unlocked(chapter_data: ChapterData)
signal dialogue_triggered(character_data: CharacterData, dialogue_text: String)

var current_chapter_order: int = 1
var completed_chapter_ids: Array[String] = []
var unlocked_document_ids: Array[String] = []
var known_character_ids: Array[String] = []
var character_relationships: Dictionary = {} # character_id -> int
var narrative_flags: Dictionary = {}

var chapters: Array[ChapterData] = []
var characters: Array[CharacterData] = []
var documents: Array[DocumentData] = []

func _ready() -> void:
	_load_database()

func _load_database() -> void:
	chapters.clear()
	characters.clear()
	documents.clear()
	
	_load_default_narrative_content()

func _load_default_narrative_content() -> void:
	# --- PERSONAGENS RECORRENTES ---
	var dr_augusto: CharacterData = CharacterData.new()
	dr_augusto.character_id = "dr_augusto"
	dr_augusto.name = "Dr. Augusto Mendes"
	dr_augusto.role = "Coordenador Clínico do CARFS"
	dr_augusto.description = "Veterinário sênior com vasta experiência em manejo de fauna silvestre e reabilitação."
	dr_augusto.avatar_icon = "👨‍⚕️"
	dr_augusto.relationship_value = 75
	dr_augusto.introduction_chapter = 1
	characters.append(dr_augusto)
	character_relationships["dr_augusto"] = 75
	
	var camila: CharacterData = CharacterData.new()
	camila.character_id = "camila_tech"
	camila.name = "Camila Santos"
	camila.role = "Técnica em Enfermagem Veterinária"
	camila.description = "Especialista em apoio diagnóstico, contenção física segura e monitoramento intensivo."
	camila.avatar_icon = "👩‍⚕️"
	camila.relationship_value = 80
	camila.introduction_chapter = 1
	characters.append(camila)
	character_relationships["camila_tech"] = 80
	
	var lucas: CharacterData = CharacterData.new()
	lucas.character_id = "lucas_bio"
	lucas.name = "Lucas Nogueira"
	lucas.role = "Biólogo & Coordenador de Resgates"
	lucas.description = "Responsável pela triagem de campo e recepção de animais recolhidos em apreensões e resgates."
	lucas.avatar_icon = "🧢"
	lucas.relationship_value = 60
	lucas.introduction_chapter = 2
	characters.append(lucas)
	character_relationships["lucas_bio"] = 60
	
	# --- DOCUMENTOS & MEMORANDOS ---
	var doc1: DocumentData = DocumentData.new()
	doc1.document_id = "memo_01"
	doc1.title = "MEMO-2026-01: Protocolos de Recepção no CARFS"
	doc1.category = "MEMORANDO INTERNO"
	doc1.date_text = "10/01/2026"
	doc1.author = "Direção Clínica — CARFS"
	doc1.content = "Bem-vindo ao Centro de Atendimento e Reabilitação de Fauna Silvestre (CARFS).\n\n" + \
		"A partir desta data, todos os recém-chegados devem passar por triagem física completa antes da solicitação de exames complementares.\n" + \
		"Lembre-se: o uso consciente dos recursos garante a viabilidade orçamentária dos nossos plantões."
	doc1.chapter_unlocked = 1
	documents.append(doc1)
	
	var doc2: DocumentData = DocumentData.new()
	doc2.document_id = "rel_01"
	doc2.title = "REL-2026-04: Notificação de Triagem — Região Norte"
	doc2.category = "RELATÓRIO DE CAMPO"
	doc2.date_text = "14/03/2026"
	doc2.author = "Lucas Nogueira — Equipe de Resgate"
	doc2.content = "Registramos um aumento atípico no resgate de espécimes silvestres provenientes do setor de contenção da Região Norte.\n\n" + \
		"Os relatórios de apreensão apresentam certas discrepâncias no histórico de traumas prévios. Recomenda-se atenção redobrada na investigação física dos pacientes oriundos dessa área."
	doc2.chapter_unlocked = 2
	documents.append(doc2)
	
	# --- CAPÍTULOS DE CAMPANHA ---
	var cap1: ChapterData = ChapterData.new()
	cap1.chapter_id = "cap_01"
	cap1.title = "Capítulo 1: Primeiro Plantão no CARFS"
	cap1.subtitle = "Adaptação à Rotina e Fundamentos Clínicos"
	cap1.description = "Familiarize-se com a estrutura do CARFS, realize seus primeiros atendimentos e conheça a equipe multiprofissional."
	cap1.chapter_order = 1
	cap1.required_rank = 0
	cap1.required_cases = 0
	cap1.required_reputation = 0
	cap1.unlocked_document_ids = ["memo_01"]
	chapters.append(cap1)
	
	var cap2: ChapterData = ChapterData.new()
	cap2.chapter_id = "cap_02"
	cap2.title = "Capítulo 2: Responsabilidade & Autonomia"
	cap2.subtitle = "Pressão Profissional e Exames Complementares"
	cap2.description = "Assuma maior responsabilidade nos diagnósticos diferenciais e observe os primeiros relatórios de campo da Região Norte."
	cap2.chapter_order = 2
	cap2.required_rank = 1
	cap2.required_cases = 1
	cap2.required_reputation = 150
	cap2.unlocked_document_ids = ["rel_01"]
	chapters.append(cap2)
	
	var cap3: ChapterData = ChapterData.new()
	cap3.chapter_id = "cap_03"
	cap3.title = "Capítulo 3: Sinais Incomuns"
	cap3.subtitle = "Padrões Atípicos e Investigação Contextual"
	cap3.description = "Analise correlações entre atendimentos recentes e identifique inconsistências nos prontuários institucionais."
	cap3.chapter_order = 3
	cap3.required_rank = 2
	cap3.required_cases = 2
	cap3.required_reputation = 400
	chapters.append(cap3)

func get_current_chapter() -> ChapterData:
	for cap in chapters:
		if cap.chapter_order == current_chapter_order:
			return cap
	if chapters.size() > 0:
		return chapters[0]
	return ChapterData.new()

func get_unlocked_documents() -> Array[DocumentData]:
	var result: Array[DocumentData] = []
	for doc in documents:
		if unlocked_document_ids.has(doc.document_id):
			result.append(doc)
	return result

func unlock_document(doc_id: String) -> bool:
	if not unlocked_document_ids.has(doc_id):
		unlocked_document_ids.append(doc_id)
		var doc: DocumentData = get_document_by_id(doc_id)
		if doc != null:
			document_unlocked.emit(doc)
		return true
	return false

func get_document_by_id(doc_id: String) -> DocumentData:
	for doc in documents:
		if doc.document_id == doc_id:
			return doc
	return null

func get_character_by_id(char_id: String) -> CharacterData:
	for c in characters:
		if c.character_id == char_id:
			return c
	return null

func set_flag(flag_name: String, value: bool = true) -> void:
	narrative_flags[flag_name] = value

func get_flag(flag_name: String, default_value: bool = false) -> bool:
	return narrative_flags.get(flag_name, default_value)

func adjust_relationship(char_id: String, delta: int) -> int:
	var cur_val: int = character_relationships.get(char_id, 50)
	var new_val: int = clampi(cur_val + delta, 0, 100)
	character_relationships[char_id] = new_val
	
	var c_data: CharacterData = get_character_by_id(char_id)
	if c_data != null:
		c_data.relationship_value = new_val
	return new_val

func check_chapter_progression(total_cases: int, reputation: int, rank_index: int) -> Dictionary:
	var current_cap: ChapterData = get_current_chapter()
	var next_cap: ChapterData = null
	
	for cap in chapters:
		if cap.chapter_order == current_chapter_order + 1:
			next_cap = cap
			break
			
	if next_cap != null:
		if total_cases >= next_cap.required_cases and reputation >= next_cap.required_reputation and rank_index >= next_cap.required_rank:
			current_chapter_order = next_cap.chapter_order
			if not completed_chapter_ids.has(current_cap.chapter_id):
				completed_chapter_ids.append(current_cap.chapter_id)
				
			for doc_id in next_cap.unlocked_document_ids:
				unlock_document(doc_id)
				
			chapter_unlocked.emit(next_cap)
			return {"promoted": true, "chapter": next_cap}
			
	return {"promoted": false, "chapter": current_cap}

func reset_narrative_state() -> void:
	current_chapter_order = 1
	completed_chapter_ids.clear()
	unlocked_document_ids.clear()
	known_character_ids.clear()
	character_relationships = {
		"dr_augusto": 75,
		"camila_tech": 80,
		"lucas_bio": 60
	}
	narrative_flags.clear()
	
	# Desbloqueia documento inicial do capítulo 1
	unlock_document("memo_01")
	known_character_ids.append("dr_augusto")
	known_character_ids.append("camila_tech")

func save_narrative_data(config: ConfigFile) -> void:
	config.set_value("narrative", "current_chapter_order", current_chapter_order)
	config.set_value("narrative", "completed_chapter_ids", completed_chapter_ids)
	config.set_value("narrative", "unlocked_document_ids", unlocked_document_ids)
	config.set_value("narrative", "known_character_ids", known_character_ids)
	config.set_value("narrative", "character_relationships", character_relationships)
	config.set_value("narrative", "narrative_flags", narrative_flags)

func load_narrative_data(config: ConfigFile) -> void:
	current_chapter_order = config.get_value("narrative", "current_chapter_order", 1)
	
	var raw_comp = config.get_value("narrative", "completed_chapter_ids", [])
	completed_chapter_ids.clear()
	for item in raw_comp:
		completed_chapter_ids.append(String(item))
		
	var raw_docs = config.get_value("narrative", "unlocked_document_ids", ["memo_01"])
	unlocked_document_ids.clear()
	for item in raw_docs:
		unlocked_document_ids.append(String(item))
		
	var raw_chars = config.get_value("narrative", "known_character_ids", ["dr_augusto", "camila_tech"])
	known_character_ids.clear()
	for item in raw_chars:
		known_character_ids.append(String(item))
		
	character_relationships = config.get_value("narrative", "character_relationships", {
		"dr_augusto": 75,
		"camila_tech": 80,
		"lucas_bio": 60
	})
	narrative_flags = config.get_value("narrative", "narrative_flags", {})
