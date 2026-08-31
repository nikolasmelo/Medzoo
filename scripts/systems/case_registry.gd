class_name CaseRegistry
extends Node

## Sistema responsável por descobrir, carregar e organizar os casos clínicos disponíveis.
## Varre automaticamente o diretório res://data/cases/*.tres sem hardcode.

const CASES_DIR: String = "res://data/cases/"

static func load_all_cases() -> Array[CaseData]:
	var cases: Array[CaseData] = []
	var dir: DirAccess = DirAccess.open(CASES_DIR)
	
	if dir == null:
		push_warning("CaseRegistry: Não foi possível abrir a pasta de casos: " + CASES_DIR)
		return cases
		
	dir.list_dir_begin()
	var file_name: String = dir.get_next()
	
	while file_name != "":
		if not dir.current_is_dir():
			# Considera apenas arquivos .tres (evitando .backup ou .import)
			if file_name.ends_with(".tres") and not file_name.contains(".backup"):
				var full_path: String = CASES_DIR + file_name
				var res = ResourceLoader.load(full_path)
				
				if res is CaseData:
					var case_obj: CaseData = res as CaseData
					if case_obj.case_id.is_empty():
						case_obj.case_id = file_name.get_basename()
					cases.append(case_obj)
				else:
					push_warning("CaseRegistry: Recurso inválido encontrado em " + full_path + ". Esperado CaseData.")
					
		file_name = dir.get_next()
		
	dir.list_dir_end()
	
	# Ordena os casos pelo valor de career_order para manter a progressão consistente
	cases.sort_custom(func(a: CaseData, b: CaseData) -> bool:
		return a.career_order < b.career_order
	)
	
	return cases

static func get_case_by_id(target_id: String) -> CaseData:
	var all_cases: Array[CaseData] = load_all_cases()
	for c in all_cases:
		if c.case_id == target_id:
			return c
	return null
