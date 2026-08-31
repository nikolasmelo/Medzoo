extends Node

func _ready() -> void:
	print("==================================================")
	print("INICIANDO BATERIA DE TESTES INTEGRADOS — MEDZOO 2D ISOMÉTRICO")
	print("==================================================")
	
	if GameState != null:
		GameState.reset_progress()
		
	var cases: Array[CaseData] = CaseRegistry.load_all_cases()
	assert(cases.size() >= 2, "TESTE REGRESSÃO FAIL: Mínimo 2 casos necessários.")
	
	var case1: CaseData = cases[0]
	
	# TESTE 1: Instanciação da sala de preparo 2D (clinic_2d.tscn)
	# Ela deve receber exclusivamente o caso escolhido no painel de carreira.
	GameState.selected_case = case1
	var clinic_2d_scene: PackedScene = load("res://scenes/clinic_2d.tscn")
	assert(clinic_2d_scene != null, "TESTE 1 FAIL: Cena clinic_2d.tscn não encontrada.")
	
	var clinic_2d: Control = clinic_2d_scene.instantiate()
	add_child(clinic_2d)
	
	assert(clinic_2d.has_node("%ClinicBG"), "TESTE 1 FAIL: Fundo isométrico ClinicBG não encontrado.")
	assert(clinic_2d.has_node("%VetSprite"), "TESTE 1 FAIL: Sprite do Veterinário VetSprite não encontrado.")
	assert(clinic_2d.has_node("%PatientCard"), "TESTE 1 FAIL: Card de paciente não encontrado.")
	assert(clinic_2d.has_node("%AttendButton"), "TESTE 1 FAIL: Botão de atendimento não encontrado.")
	print("✓ TESTE 1: Hub 2D Isométrico, Fundo de Clínica, Sprite do Vet e Card de Paciente carregados.")
	
	# TESTE 2: Caso selecionado e bloqueios da carreira são preservados
	assert(clinic_2d.patient_queue.size() == 1, "TESTE 2 FAIL: A sala de preparo carregou casos que não foram selecionados.")
	assert(clinic_2d.patient_name_label.text.begins_with(case1.patient_code), "TESTE 2 FAIL: Código do primeiro paciente incorreto.")
	print("✓ TESTE 2: Caso selecionado e exibição do paciente aprovados.")
	
	# TESTE 3: Disparo da Estação Clínica via Overlay (clinic.tscn)
	clinic_2d._on_attend_pressed()
	assert(clinic_2d.clinical_overlay.visible == true, "TESTE 3 FAIL: Overlay da estação clínica não abriu.")
	assert(clinic_2d.clinic_container.get_child_count() > 0, "TESTE 3 FAIL: clinic.tscn não foi instanciado dentro do container.")
	print("✓ TESTE 3: Disparo da Estação Clínica (clinic.tscn) via Hub 2D 100% Funcional!")
	
	# TESTE 4: Testes de Raciocínio Clínico Unificado no Motor Clínico
	var clinic_scene: PackedScene = load("res://scenes/clinic.tscn")
	var clinic: Control = clinic_scene.instantiate()
	clinic.current_case = case1
	add_child(clinic)
	
	var eval_t1: Dictionary = clinic.evaluate_hypothesis(case1.correct_diagnosis)
	assert(eval_t1.can_confirm == false, "TESTE 4 FAIL: Estado inicial não pode permitir confirmação.")
	
	for region in case1.physical_exam_results.keys():
		if not case1.physical_exam_results[region].is_empty():
			clinic._perform_physical_exam(region, 0.8)
			
	if case1.complementary_exams.size() > 0:
		var ex_key = case1.complementary_exams.keys()[0]
		clinic._request_complementary_exam(ex_key)
		
	var eval_t3: Dictionary = clinic.evaluate_hypothesis(case1.correct_diagnosis)
	assert(eval_t3.level == "ALTA" and eval_t3.can_confirm == true, "TESTE 4 FAIL: Confirmação em ALTA falhou.")
	
	clinic.selected_hypothesis = case1.correct_diagnosis
	clinic._on_confirm_diagnosis_pressed()
	assert(clinic.current_state == clinic.CaseState.DIAGNOSED, "TESTE 4 FAIL: Transição para DIAGNOSED falhou.")
	print("✓ TESTE 4: Motor Clínico profundo 100% preservado dentro do Hub 2D Isométrico.")
	
	# TESTE AUDITORIA DE DESACOPLAMENTO
	var clinic_script: Script = load("res://scenes/clinic.gd")
	var src: String = clinic_script.source_code
	assert(not src.contains("coruja") and not src.contains("jabuti") and not src.contains("owl") and not src.contains("tortoise") and not src.contains("asa") and not src.contains("casco"), "TESTE DESACOPLAMENTO FAIL: clinic.gd contém termos específicos!")
	print("✓ TESTE AUDITORIA: clinic.gd é 100% GENÉRICO (0 termos específicos!).")
	
	print("==================================================")
	print("TODOS OS TESTES DA PIVOTAGEM 2D ISOMÉTRICA PASSARAM COM 100% DE SUCESSO!")
	print("==================================================")
	get_tree().quit()
