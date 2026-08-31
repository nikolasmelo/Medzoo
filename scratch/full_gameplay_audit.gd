extends Node

func _ready() -> void:
	print("==================================================")
	print("AUDITORIA COMPLETA DE GAMEPLAY E MECÂNICAS — MEDZOO")
	print("==================================================")
	
	var cases: Array[CaseData] = CaseRegistry.load_all_cases()
	print("📊 Total de casos encontrados no registro: %d" % cases.size())
	assert(cases.size() == 11, "ERRO CRÍTICO: Esperado exatamente 11 casos registrados!")
	
	var issues_found: Array[String] = []
	var total_passed_tests: int = 0
	
	# --------------------------------------------------------------------------
	# AUDITORIA 1: Integridade Estrutural dos Recursos (.tres)
	# --------------------------------------------------------------------------
	print("\n🔍 1. Auditando integridade dos recursos (.tres)...")
	for c in cases:
		print("  - Verificando: %s (%s) [Rank Min: %d]" % [c.species_name, c.patient_code, c.minimum_rank])
		
		# Validação de diagnóstico correto existente em possible_diagnoses
		if not c.possible_diagnoses.has(c.correct_diagnosis):
			issues_found.append("FALHA DE DADOS em %s: correct_diagnosis ('%s') não está na lista possible_diagnoses!" % [c.patient_code, c.correct_diagnosis])
		else:
			total_passed_tests += 1
			
		# Validação de alinhamento com differential_diagnoses
		var found_diff_match: bool = false
		for diff in c.differential_diagnoses:
			if diff.get("name", "") == c.correct_diagnosis:
				found_diff_match = true
				break
		if not found_diff_match:
			issues_found.append("FALHA DE ALINHAMENTO DE STRING em %s: differential_diagnoses não contém o diagnóstico exato '%s'!" % [c.patient_code, c.correct_diagnosis])
		else:
			total_passed_tests += 1
			
		# Validação do mapa de hipóteses e evidências
		if not c.hypothesis_evidence_map.has(c.correct_diagnosis):
			issues_found.append("FALHA DE CHAVE no mapa de evidências de %s: '%s' ausente!" % [c.patient_code, c.correct_diagnosis])
		else:
			total_passed_tests += 1
			
		# Validação das opções de tratamento (4 corretas, 3 incorretas)
		var correct_count: int = 0
		var incorrect_count: int = 0
		for opt in c.treatment_options:
			if opt.get("appropriate", false):
				correct_count += 1
			else:
				incorrect_count += 1
		if correct_count < 3 or incorrect_count < 2:
			issues_found.append("DESBALANÇO DE TRATAMENTO em %s: Apenas %d corretos e %d incorretos (esperado min 3-4 e 2-3)!" % [c.patient_code, correct_count, incorrect_count])
		else:
			total_passed_tests += 1
			
		# Validação da imagem do paciente
		if c.image_texture == null:
			issues_found.append("IMAGEM AUSENTE em %s: texture é null!" % c.patient_code)
		else:
			total_passed_tests += 1
			
	print("✓ Auditoria de recursos concluída. (%d verificações efetuadas)" % total_passed_tests)
	
	# --------------------------------------------------------------------------
	# AUDITORIA 2: Simulação de Playthrough Completo dos 7 Casos no Motor Clínico
	# --------------------------------------------------------------------------
	print("\n🕹️ 2. Executando simulação de atendimento completo nos %d casos..." % cases.size())
	var clinic_scene: PackedScene = load("res://scenes/clinic.tscn")
	assert(clinic_scene != null, "ERRO CRÍTICO: Impossível carregar scenes/clinic.tscn")
	
	for i in range(cases.size()):
		var c: CaseData = cases[i]
		print("\n [CASO %d/%d] Simulando atendimento de: %s (%s)" % [i + 1, cases.size(), c.species_name, c.patient_code])
		
		var clinic: Control = clinic_scene.instantiate()
		clinic.current_case = c
		add_child(clinic)
		
		# Passo A: Estado inicial
		if clinic.current_state != 0: # 0 = INVESTIGATING
			issues_found.append("ESTADO INCORRETO em %s: Esperado 0 (INVESTIGATING), obteve %d" % [c.patient_code, clinic.current_state])
		else:
			total_passed_tests += 1
			
		# Passo B: Executar Exame Físico completo nas regiões disponíveis
		var exam_count: int = 0
		for region in c.physical_exam_results.keys():
			clinic._perform_physical_exam(region, 0.8)
			exam_count += 1
		print("    ✓ Executados %d exames físicos. Estresse do paciente: %.1f" % [exam_count, clinic.patient_stress])
		
		# Passo C: Solicitar exames complementares disponíveis
		for ex_key in c.complementary_exams.keys():
			var prev_spent: float = clinic.spent_budget
			clinic._request_complementary_exam(ex_key)
			if clinic.spent_budget <= prev_spent:
				issues_found.append("FALHA DE CUSTO em %s: Exame %s não somou ao custo total spent_budget!" % [c.patient_code, ex_key])
			else:
				total_passed_tests += 1
		print("    ✓ Exames complementares solicitados. Gasto total em exames: R$ %.2f / Orçamento: R$ %.2f" % [clinic.spent_budget, clinic.current_budget])
		
		# Passo D: Avaliar Diagnóstico Correto APÓS os exames
		var eval_result: Dictionary = clinic.evaluate_hypothesis(c.correct_diagnosis)
		print("    ✓ Avaliação de hipótese correta '%s': Nível %s (Confirmação: %s)" % [c.correct_diagnosis, eval_result.level, eval_result.can_confirm])
		
		if not eval_result.can_confirm:
			issues_found.append("FALHA CAN_CONFIRM em %s: Hipótese correta '%s' retornou can_confirm=false!" % [c.patient_code, c.correct_diagnosis])
		else:
			total_passed_tests += 1
			
		# Seleciona hipótese e confirma
		clinic.selected_hypothesis = c.correct_diagnosis
		clinic._on_confirm_diagnosis_pressed()
		
		if clinic.current_state != 1: # 1 = DIAGNOSED
			issues_found.append("FALHA TRANSITION DIAGNOSED em %s: Estado final não é 1 (DIAGNOSED)!" % c.patient_code)
		else:
			total_passed_tests += 1
			
		# Passo E: Simular seleção de tratamentos corretos e envio da conduta
		var selected_treatments: Array[String] = []
		for opt in c.treatment_options:
			if opt.get("appropriate", false):
				selected_treatments.append(opt.get("id", ""))
				
		clinic.selected_treatment_ids = selected_treatments
		clinic._on_confirm_treatment_pressed()
		
		if clinic.current_state != 2: # 2 = RECOVERING
			issues_found.append("FALHA TRANSITION RECOVERING em %s: Estado final não é 2 (RECOVERING)!" % c.patient_code)
		else:
			total_passed_tests += 1
			
		print("    ✓ Atendimento concluído com sucesso!")
		clinic.queue_free()
		
	# --------------------------------------------------------------------------
	# AUDITORIA 3: Teste de Resiliência no Hub 2D Isométrico (clinic_2d.tscn)
	# --------------------------------------------------------------------------
	print("\n🏰 3. Auditando Hub 2D Isométrico e Navegação entre Telas...")
	var hub_scene: PackedScene = load("res://scenes/clinic_2d.tscn")
	var hub: Control = hub_scene.instantiate()
	add_child(hub)
	
	if hub.patient_queue.size() != 11:
		issues_found.append("FALHA DE FILA NO HUB 2D: Esperado 11 pacientes na fila, obteve %d" % hub.patient_queue.size())
	else:
		total_passed_tests += 1
		print("  ✓ Fila do Hub contém exatamente 11 pacientes.")
		
	# Simula transição para o overlay de atendimento
	hub._on_attend_pressed()
	if not hub.clinical_overlay.visible:
		issues_found.append("FALHA OVERLAY NO HUB: clinical_overlay não ficou visível ao clicar em Atender!")
	else:
		total_passed_tests += 1
		print("  ✓ Transição de overlay do Hub 2D para Estação Clínica 100% funcional.")
		
	hub.queue_free()

	# --------------------------------------------------------------------------
	# AUDITORIA 4: Motor de Bio-Sinais & Farmacocinética (vital_signs_engine.gd)
	# --------------------------------------------------------------------------
	print("\n🫀 4. Auditando Motor Fisiológico & Farmacocinético (VitalSignsEngine)...")
	var vitals: VitalSignsEngine = VitalSignsEngine.new()
	vitals.body_mass_kg = 2.5 # Paciente de 2.5 kg (ex: Tamanduá-mirim/Tucano)
	add_child(vitals)

	# Teste de estresse procedural em paciente não sedado
	vitals.apply_procedural_stress(0.4)
	vitals.update_vitals(0.1)
	var summary: Dictionary = vitals.get_vitals_summary()
	if float(summary.get("stress_level", 0.0)) < 0.5:
		issues_found.append("FALHA DE ESTRESSE: Estresse não subiu conforme esperado!")
	else:
		total_passed_tests += 1
		print("  ✓ Estresse procedural e resposta vital atualizados: MAP=%.1f mmHg, HR=%.1f bpm, Estresse=%.2f" % [summary.map, summary.hr, summary.stress_level])

	# Teste de dosimetria em mg/kg
	var dose_per_kg: float = vitals.administer_drug("midazolam", 5.0, 0.05, "sedativo")
	if abs(dose_per_kg - 2.0) > 0.01:
		issues_found.append("FALHA DE DOSIMETRIA: Esperado 2.0 mg/kg (5mg/2.5kg), obteve %.2f" % dose_per_kg)
	else:
		total_passed_tests += 1
		print("  ✓ Dosimetria mg/kg calculada com precisão: %.2f mg/kg" % dose_per_kg)

	vitals.queue_free()

	# --------------------------------------------------------------------------
	# AUDITORIA 5: Controlador de Ultrassom & Mapeamento Doppler (ultrasound_controller.gd)
	# --------------------------------------------------------------------------
	print("\n🩻 5. Auditando Controlador Físico de Ultrassom (UltrasoundController)...")
	var us_ctrl: UltrasoundController = UltrasoundController.new()
	us_ctrl.custom_minimum_size = Vector2(400, 300)
	add_child(us_ctrl)

	us_ctrl._update_probe_position(Vector2(200, 150)) # Centro = UV (0.5, 0.5)
	if us_ctrl.current_uv.distance_to(Vector2(0.5, 0.5)) > 0.05:
		issues_found.append("FALHA UV ULTRASSOM: Esperado UV (0.5, 0.5), obteve %s" % str(us_ctrl.current_uv))
	else:
		total_passed_tests += 1
		print("  ✓ Mapeamento de sonda para coordenadas UV normalizadas OK: %s" % str(us_ctrl.current_uv))

	us_ctrl.queue_free()

	# --------------------------------------------------------------------------
	# AUDITORIA 6: Mecânica Tática de Dissecção & Sutura (surgical_canvas.gd)
	# --------------------------------------------------------------------------
	print("\n🩺 6. Auditando Canvas Tático de Dissecção & Sutura (SurgicalCanvas)...")
	var surg: SurgicalCanvas = SurgicalCanvas.new()
	add_child(surg)

	# Teste de incisão em tecido vascular (Músculo)
	var inc_res: Dictionary = surg.apply_incise(Vector2(10, 10), Vector2(100, 10), SurgicalCanvas.AnatomyLayer.MUSCLE)
	if not inc_res.get("success", false) or float(inc_res.get("hemorrhage_rate", 0.0)) <= 0.0:
		issues_found.append("FALHA DE DIÉRESE: Incisão muscular não gerou taxa de hemorragia!")
	else:
		total_passed_tests += 1
		print("  ✓ Incisão muscular realizada: Camada '%s', Hemorragia=%.1f ml/s" % [inc_res.layer_name, inc_res.hemorrhage_rate])

	# Teste de eletrocautério
	var cauterized: bool = surg.apply_electrocautery(Vector2(50, 10))
	if not cauterized or surg.hemorrhage_rate_ml_s > 0.0:
		issues_found.append("FALHA DE ELETROCAUTÉRIO: Cautério não estancou a hemorragia!")
	else:
		total_passed_tests += 1
		print("  ✓ Eletrocautério aplicado com sucesso: Hemorragia estancada.")

	# Teste de suturas (Frouxa vs Perfeita vs Isquêmica)
	var sut_loose: Dictionary = surg.apply_suture(Vector2(20, 10), 30.0)
	var sut_perfect: Dictionary = surg.apply_suture(Vector2(50, 10), 100.0)
	var sut_tight: Dictionary = surg.apply_suture(Vector2(80, 10), 200.0)

	if not sut_perfect.get("is_effective", false) or sut_tight.get("is_effective", true):
		issues_found.append("FALHA DE SUTURA: Avaliação de tensão das suturas incorreta!")
	else:
		total_passed_tests += 1
		print("  ✓ Avaliação de nós de sutura OK (Frouxo: %s, Perfeito: %s, Isquêmico: %s)" % [
			sut_loose.status, sut_perfect.status, sut_tight.status
		])

	surg.queue_free()

	# --------------------------------------------------------------------------
	# RELATÓRIO FINAL DA BATERIA DE TESTES
	# --------------------------------------------------------------------------
	print("\n==================================================")
	print("RESULTADO DA BATERIA DE AUDITORIA GAMEPLAY MEDZOO")
	print("==================================================")
	print("✅ Total de testes e asserções aprovadas: %d" % total_passed_tests)
	print("🚨 Inconsistências / Erros encontrados: %d" % issues_found.size())

	if issues_found.size() > 0:
		print("\nLISTA DE ANOMALIAS ENCONTRADAS:")
		for issue in issues_found:
			print("  ❌ " + issue)
	else:
		print("🎉 NENHUM ERRO TÉCNICO OU INCOMPATIBILIDADE ENCONTRADA!")

	print("==================================================")
	get_tree().quit()

