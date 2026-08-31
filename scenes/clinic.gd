extends Control

## Estação Clínica & Raciocínio Veterinário do MedZoo (HOTFIX Etapa 20).
## Avaliação Clínica Unificada (Single Source of Truth) de Raciocínio, Confiança e Suficiência.
## 100% Desacoplado: Zero termos hardcoded de espécies ou anatomia em código!

enum CaseState { INVESTIGATING, DIAGNOSED, RECOVERING, COMPLETED }
enum StressState { CALM, RESTLESS, STRESSED, CRITICAL, EMERGENCY }
enum WorkstationTab { ANAMNESE = 0, PHYSICAL_EXAM = 1, COMPLEMENTARY = 2, REASONING = 3, CONDUCT = 4 }

# `true` só é emitido após a conduta correta. Assim, o hub não confunde
# desistência com atendimento concluído.
signal case_completed(successfully: bool)

@export var current_case: CaseData

var current_state: CaseState = CaseState.INVESTIGATING
var current_stress_state: StressState = StressState.CALM
var current_tab: WorkstationTab = WorkstationTab.ANAMNESE

# Registro de evidências coletadas na consulta
var discovered_evidence_ids: Array[String] = []
var requested_exams: Array[String] = []
var examined_regions: Array[String] = []
var selected_hypothesis: String = ""
var selected_treatment_ids: Array[String] = []
var is_transitioning: bool = false

# Gamificação & Estado de Simulação
var patient_stress: float = 25.0
var shift_minutes: int = 510 # 08:30
var current_budget: float = 350.0
var spent_budget: float = 0.0
var wrong_diagnosis_attempts: int = 0
var hotspot_found: bool = false
var perfect_palpations_count: int = 0

# Controle de Estresse & Recinto Escuro (Anti-Spam)
var is_dark_room_active: bool = false
var is_in_emergency: bool = false
var dark_room_recovery_timer: float = 0.0

# Horários de clique para o mini-game de palpação
var exam_button_press_times: Dictionary = {}

# Referências do Header
@onready var clock_label: Label = %ClockLabel
@onready var budgets_label: Label = %BudgetsLabel
@onready var reliability_header_label: Label = %ReliabilityHeaderLabel
@onready var patient_code_label: Label = %PatientCodeLabel
@onready var back_button: Button = %BackButton

# Referências de Abas / Naves Contextuais
@onready var tab_anamnese_btn: Button = %TabAnamneseBtn
@onready var tab_physical_btn: Button = %TabPhysicalBtn
@onready var tab_complementary_btn: Button = %TabComplementaryBtn
@onready var tab_reasoning_btn: Button = %TabReasoningBtn
@onready var tab_conduct_btn: Button = %TabConductBtn

@onready var view_anamnese_panel: Control = %ViewAnamnesePanel
@onready var view_physical_panel: Control = %ViewPhysicalPanel
@onready var view_complementary_panel: Control = %ViewComplementaryPanel
@onready var view_reasoning_panel: Control = %ViewReasoningPanel
@onready var view_conduct_panel: Control = %ViewConductPanel

# Referências de Estresse & Paciente (Painel Esquerdo)
@onready var species_name_label: Label = %SpeciesNameLabel
@onready var scientific_name_label: Label = %ScientificNameLabel
@onready var patient_image: TextureRect = %PatientImageRect
@onready var status_badge_label: Label = %StatusBadge
@onready var stress_value_label: Label = %StressValueLabel
@onready var stress_progress_bar: ProgressBar = %StressProgressBar
@onready var stress_state_badge: Label = %StressStateBadge
@onready var calm_patient_button: Button = %CalmPatientButton
@onready var discoveries_list_label: Label = %DiscoveriesListLabel

# Referências da Anamnese (Aba 1)
@onready var arrival_text_label: Label = %ArrivalTextLabel
@onready var physical_text_label: Label = %PhysicalTextLabel
@onready var behavior_text_label: Label = %BehaviorTextLabel

# Referências do Exame Físico (Aba 2)
@onready var exam_buttons_container: GridContainer = %ExamButtonsContainer
@onready var exam_result_label: Label = %ExamResultLabel

# Referências dos Exames Complementares (Aba 3)
@onready var xray_title_label: Label = %XRayTitleLabel
@onready var xray_desc_label: Label = %XRayDescLabel
@onready var xray_request_button: Button = %XRayRequestButton

# Referências de Raciocínio Clínico & Diagnóstico (Aba 4)
@onready var hypotheses_buttons_container: VBoxContainer = %HypothesesButtonsContainer
@onready var hypothesis_evidence_list_label: Label = %HypothesisEvidenceListLabel
@onready var confidence_badge_label: Label = %ConfidenceBadgeLabel
@onready var confirm_diagnosis_button: Button = %ConfirmDiagnosisButton

# Referências do Plano de Tratamento (Aba 5)
@onready var treatment_lock_label: Label = %TreatmentLockLabel
@onready var treatment_checkboxes_container: VBoxContainer = %TreatmentCheckboxesContainer
@onready var confirm_treatment_button: Button = %ConfirmTreatmentButton

# Referências dos Modais
@onready var exam_result_modal: Control = %ExamResultModal
@onready var modal_panel: Control = $ExamResultModal/CenterContainer/ModalPanel
@onready var modal_title_label: Label = %ModalTitleLabel
@onready var modal_image_rect: TextureRect = %ModalImageRect
@onready var modal_text_label: Label = %ModalTextLabel
@onready var modal_close_button: Button = %ModalCloseButton
@onready var hotspot_feedback_label: Label = %HotspotFeedbackLabel

@onready var feedback_modal: Control = %FeedbackModal
@onready var feedback_panel: Control = $FeedbackModal/CenterContainer/ModalPanel
@onready var feedback_title_label: Label = %FeedbackTitleLabel
@onready var feedback_text_label: Label = %FeedbackTextLabel
@onready var feedback_close_button: Button = %FeedbackCloseButton

@onready var conclusion_modal: Control = %ConclusionModal
@onready var conclusion_panel: Control = $ConclusionModal/CenterContainer/ModalPanel
@onready var conclusion_title_label: Label = %ConclusionTitleLabel
@onready var rating_stars_label: Label = %RatingStarsLabel
@onready var breakdown_text_label: Label = %BreakdownTextLabel
@onready var close_case_button: Button = %CloseCaseButton

func _ready() -> void:
	if GameState != null and GameState.selected_case != null:
		current_case = GameState.selected_case
		
	if current_case == null:
		push_warning("Clinic: Nenhum caso selecionado. Carregando caso padrão...")
		var cases = CaseRegistry.load_all_cases()
		if cases.size() > 0:
			current_case = cases[0]
			
	_setup_ui_interactions()
	_load_case_data()
	_switch_tab(WorkstationTab.ANAMNESE)

func _process(delta: float) -> void:
	if dark_room_recovery_timer > 0.0:
		dark_room_recovery_timer -= delta
		if dark_room_recovery_timer <= 0.0:
			is_dark_room_active = false
			_update_stress_ui()

func _setup_ui_interactions() -> void:
	UIAnimation.setup_button_hover(back_button)
	UIAnimation.setup_button_hover(calm_patient_button)
	UIAnimation.setup_button_hover(confirm_diagnosis_button)
	UIAnimation.setup_button_hover(confirm_treatment_button)
	UIAnimation.setup_button_hover(modal_close_button)
	UIAnimation.setup_button_hover(feedback_close_button)
	UIAnimation.setup_button_hover(close_case_button)
	
	UIAnimation.setup_button_hover(tab_anamnese_btn)
	UIAnimation.setup_button_hover(tab_physical_btn)
	UIAnimation.setup_button_hover(tab_complementary_btn)
	UIAnimation.setup_button_hover(tab_reasoning_btn)
	UIAnimation.setup_button_hover(tab_conduct_btn)
	
	tab_anamnese_btn.pressed.connect(func(): _switch_tab(WorkstationTab.ANAMNESE))
	tab_physical_btn.pressed.connect(func(): _switch_tab(WorkstationTab.PHYSICAL_EXAM))
	tab_complementary_btn.pressed.connect(func(): _switch_tab(WorkstationTab.COMPLEMENTARY))
	tab_reasoning_btn.pressed.connect(func(): _switch_tab(WorkstationTab.REASONING))
	tab_conduct_btn.pressed.connect(func(): _switch_tab(WorkstationTab.CONDUCT))
	
	back_button.pressed.connect(_on_back_pressed)
	calm_patient_button.pressed.connect(_on_calm_patient_pressed)
	confirm_diagnosis_button.pressed.connect(_on_confirm_diagnosis_pressed)
	confirm_treatment_button.pressed.connect(_on_confirm_treatment_pressed)
	modal_close_button.pressed.connect(_on_modal_close_pressed)
	feedback_close_button.pressed.connect(_on_feedback_close_pressed)
	close_case_button.pressed.connect(_on_close_case_pressed)
	
	modal_image_rect.gui_input.connect(_on_modal_image_gui_input)

func _switch_tab(target_tab: WorkstationTab) -> void:
	if SoundManager != null:
		SoundManager.play_ui_click()
		
	current_tab = target_tab
	
	view_anamnese_panel.visible = (current_tab == WorkstationTab.ANAMNESE)
	view_physical_panel.visible = (current_tab == WorkstationTab.PHYSICAL_EXAM)
	view_complementary_panel.visible = (current_tab == WorkstationTab.COMPLEMENTARY)
	view_reasoning_panel.visible = (current_tab == WorkstationTab.REASONING)
	view_conduct_panel.visible = (current_tab == WorkstationTab.CONDUCT)
	
	# Estilização de alto contraste para as abas
	var tabs: Array[Button] = [tab_anamnese_btn, tab_physical_btn, tab_complementary_btn, tab_reasoning_btn, tab_conduct_btn]
	for i in range(tabs.size()):
		var btn: Button = tabs[i]
		if btn != null:
			var is_active: bool = (i == int(current_tab))
			var style: StyleBoxFlat = StyleBoxFlat.new()
			if is_active:
				style.bg_color = Color(0.12, 0.25, 0.20, 1.0)
				style.border_width_left = 3
				style.border_width_top = 3
				style.border_width_right = 3
				style.border_color = Color(0.788, 0.604, 0.239, 1.0)
				btn.add_theme_color_override("font_color", Color(0.98, 0.98, 0.95))
			else:
				style.bg_color = Color(0.72, 0.68, 0.60, 0.9)
				btn.add_theme_color_override("font_color", Color(0.12, 0.15, 0.14))
			style.corner_radius_top_left = 8
			style.corner_radius_top_right = 8
			style.content_margin_left = 12
			style.content_margin_right = 12
			style.content_margin_top = 8
			style.content_margin_bottom = 8
			btn.add_theme_stylebox_override("normal", style)

	# Orientação contextual curta: mantém a tela clínica densa, mas deixa
	# claro qual ação faz sentido sem entregar a resposta do caso.
	match current_tab:
		WorkstationTab.ANAMNESE:
			UIAnimation.show_toast(self, Label.new(), "Etapa 1 de 5: registre a queixa, o histórico e o comportamento inicial.")
		WorkstationTab.PHYSICAL_EXAM:
			UIAnimation.show_toast(self, Label.new(), "Etapa 2 de 5: clique e segure por 0,3–1,2 s para uma palpação precisa e menos estressante.")
		WorkstationTab.COMPLEMENTARY:
			UIAnimation.show_toast(self, Label.new(), "Etapa 3 de 5: peça exames apenas quando um achado físico justificar o custo.")
		WorkstationTab.REASONING:
			UIAnimation.show_toast(self, Label.new(), "Etapa 4 de 5: compare evidências favoráveis e conflitantes antes de confirmar.")
		WorkstationTab.CONDUCT:
			UIAnimation.show_toast(self, Label.new(), "Etapa 5 de 5: selecione somente as condutas compatíveis com o diagnóstico confirmado.")

func _load_case_data() -> void:
	if current_case == null:
		return
		
	species_name_label.text = current_case.species_name
	scientific_name_label.text = "(" + current_case.scientific_name + ")"
	patient_code_label.text = "PRONTUÁRIO: " + current_case.patient_code
	
	if current_case.image_texture != null:
		patient_image.texture = current_case.image_texture
		
	arrival_text_label.text = current_case.arrival_reason
	physical_text_label.text = current_case.physical_description
	behavior_text_label.text = current_case.initial_behavior
	
	patient_stress = current_case.initial_stress
	current_budget = current_case.case_budget
	spent_budget = 0.0
	
	for ev_id in current_case.initial_evidence_ids:
		if not discovered_evidence_ids.has(ev_id):
			discovered_evidence_ids.append(ev_id)
			
	_setup_physical_exam_buttons()
	_setup_complementary_exams()
	_setup_hypotheses_buttons()
	_setup_treatment_options()
	
	_update_discoveries_log_ui()
	_update_simulation_header()
	_update_stress_ui()
	_update_state_ui()
	
	if SoundManager != null and SoundManager.has_method("play_species_vocal"):
		SoundManager.play_species_vocal(current_case.species_name)

func _update_simulation_header() -> void:
	if GameState != null:
		clock_label.text = "🕒 PLANTÃO: " + GameState.get_formatted_shift_time(shift_minutes)
		var rel_info: Dictionary = GameState.get_reliability_status()
		reliability_header_label.text = "🛡️ " + str(int(rel_info.reliability)) + "%"
		reliability_header_label.add_theme_color_override("font_color", rel_info.color)
	else:
		clock_label.text = "🕒 08:30"
		reliability_header_label.text = "🛡️ 100%"
		
	var remaining: float = max(0.0, current_budget - spent_budget)
	budgets_label.text = "💰 ORÇAMENTO: R$ " + str(int(remaining)) + " / R$ " + str(int(current_budget))

func _update_discoveries_log_ui() -> void:
	if current_case == null:
		return
		
	var lines: Array[String] = []
	for ev_id in discovered_evidence_ids:
		var txt: String = ev_id
		if current_case.evidence_data.has(ev_id):
			txt = current_case.evidence_data[ev_id].get("text", ev_id)
		lines.append("• " + txt)
		
	if lines.is_empty():
		discoveries_list_label.text = "Nenhuma alteração registrada ainda."
	else:
		discoveries_list_label.text = "\n".join(lines)

# --- MAQUINA DE ESTRESSE & BEM-ESTAR DO PACIENTE ---

func _update_stress_ui() -> void:
	patient_stress = clamp(patient_stress, 0.0, 100.0)
	stress_value_label.text = str(int(patient_stress)) + "%"
	stress_progress_bar.value = patient_stress
	
	if patient_stress >= 100.0 and not is_in_emergency:
		_trigger_patient_emergency()
		return
		
	if patient_stress >= 81.0:
		current_stress_state = StressState.CRITICAL
		stress_state_badge.text = "🚨 CRÍTICO (Risco de Colapso)"
		stress_state_badge.add_theme_color_override("font_color", Color(0.95, 0.3, 0.3))
	elif patient_stress >= 61.0:
		current_stress_state = StressState.STRESSED
		stress_state_badge.text = "🟠 ESTRESSADO (Sensibilidade Elevada)"
		stress_state_badge.add_theme_color_override("font_color", Color(0.95, 0.65, 0.25))
	elif patient_stress >= 41.0:
		current_stress_state = StressState.RESTLESS
		stress_state_badge.text = "🟡 INQUIETO (Reação Moderada)"
		stress_state_badge.add_theme_color_override("font_color", Color(0.9, 0.8, 0.3))
	else:
		current_stress_state = StressState.CALM
		stress_state_badge.text = "🟢 CALMO (Estado Estável)"
		stress_state_badge.add_theme_color_override("font_color", Color(0.4, 0.85, 0.5))
		
	if is_dark_room_active:
		calm_patient_button.text = "🌿 RECUPERANDO (" + str(int(dark_room_recovery_timer)) + "s)"
		calm_patient_button.disabled = true
	else:
		calm_patient_button.text = "🌿 RECINTO ESCURO (-25% Estresse)"
		calm_patient_button.disabled = false

	UIAnimation.animate_patient_idle(patient_image, patient_stress)

func _trigger_patient_emergency() -> void:
	is_in_emergency = true
	current_stress_state = StressState.EMERGENCY
	stress_state_badge.text = "🚨 EMERGÊNCIA CLÍNICA"
	stress_state_badge.add_theme_color_override("font_color", Color(1.0, 0.2, 0.2))
	
	if SoundManager != null:
		SoundManager.play_fail()
		
	shift_minutes += 20
	spent_budget += 40.0
	patient_stress = 50.0
	
	if GameState != null and current_case != null:
		GameState.record_clinical_occurrence(GameState.ErrorSeverity.LIGHT, "Evento de estresse crítico e emergência clínica ocorrido durante o manejo", current_case)
		
	_update_simulation_header()
	_update_stress_ui()
	
	_show_feedback_modal(
		"🚨 EMERGÊNCIA VETERINÁRIA — COLAPSO POR ESTRESSE",
		"O nível de estresse do paciente atingiu 100%. A equipe de apoio realizou procedimentos emergenciais de contenção e oxigenoterapia (+20 min, R$ 40).\n\nO paciente foi estabilizado em nível seguro (50%). Gerencie a manipulação física e utilize o Recinto Escuro para evitar novas complicações."
	)
	is_in_emergency = false

func _on_calm_patient_pressed() -> void:
	if is_dark_room_active:
		UIAnimation.shake_node(calm_patient_button, 6.0)
		return
		
	if SoundManager != null:
		SoundManager.play_ui_click()
		
	is_dark_room_active = true
	dark_room_recovery_timer = 8.0
	patient_stress = max(0.0, patient_stress - 25.0)
	shift_minutes += 15
	
	_update_simulation_header()
	_update_stress_ui()
	
	if SoundManager != null and SoundManager.has_method("play_species_vocal") and current_case != null:
		SoundManager.play_species_vocal(current_case.species_name)
		
	UIAnimation.show_toast(self, Label.new(), "🌿 PACIENTE ACOMODADO EM RECINTO ESCURO (-25% Estresse, +15 min)")

# --- EXAME FÍSICO & MANIPULAÇÃO (ABA 2) ---

func _setup_physical_exam_buttons() -> void:
	if current_case == null:
		return
		
	for child in exam_buttons_container.get_children():
		child.queue_free()
		
	for region_name in current_case.physical_exam_results.keys():
		var btn: Button = Button.new()
		btn.text = region_name
		btn.custom_minimum_size = Vector2(160, 36)
		
		UIAnimation.setup_button_hover(btn)
		
		btn.gui_input.connect(func(event: InputEvent):
			if event is InputEventMouseButton and event.button_index == MOUSE_BUTTON_LEFT:
				if event.pressed:
					exam_button_press_times[region_name] = Time.get_ticks_msec()
				else:
					var press_duration: float = 0.0
					if exam_button_press_times.has(region_name):
						press_duration = float(Time.get_ticks_msec() - exam_button_press_times[region_name]) / 1000.0
					_perform_physical_exam(region_name, press_duration)
		)
		
		exam_buttons_container.add_child(btn)

func _perform_physical_exam(region_name: String, press_duration: float = 0.0) -> void:
	if current_case == null:
		return
		
	if not examined_regions.has(region_name):
		examined_regions.append(region_name)
		
	var evidence_id: String = current_case.physical_exam_results.get(region_name, "")
	var feedback_text: String = ""
	
	var stress_added: float = 5.0
	var time_added: int = 8
	var duration_quality: String = ""
	
	if press_duration < 0.3:
		stress_added = 3.0
		time_added = 5
		duration_quality = " (Inspeção Visual Rápida)"
	elif press_duration <= 1.2:
		stress_added = 6.0
		time_added = 10
		perfect_palpations_count += 1
		duration_quality = " ✨ (Palpação Adequada e Precisa)"
	elif press_duration <= 2.5:
		stress_added = 14.0
		time_added = 15
		duration_quality = " ⚠ (Manipulação Prolongada — Leve Desconforto)"
	else:
		stress_added = 25.0
		time_added = 22
		duration_quality = " 🚨 (Manipulação Excessiva — Reação de Dor/Estresse)"
		
	patient_stress += stress_added
	shift_minutes += time_added
	_update_simulation_header()
	_update_stress_ui()
	UIAnimation.animate_patient_exam_punch(patient_image)
	
	if not evidence_id.is_empty():
		if not discovered_evidence_ids.has(evidence_id):
			discovered_evidence_ids.append(evidence_id)
			_update_discoveries_log_ui()
			
		var ev_text: String = evidence_id
		if current_case.evidence_data.has(evidence_id):
			ev_text = current_case.evidence_data[evidence_id].get("text", evidence_id)
			
		feedback_text = "✓ " + region_name + ": " + ev_text + duration_quality
		if SoundManager != null:
			SoundManager.play_success()
	else:
		feedback_text = "✓ " + region_name + ": Sem alterações clínicas dignas de nota." + duration_quality
		if SoundManager != null:
			SoundManager.play_ui_click()
			
	exam_result_label.text = feedback_text
	_update_state_ui()
	_update_hypothesis_evidence_ui()

# --- EXAMES COMPLEMENTARES (ABA 3) ---

func _setup_complementary_exams() -> void:
	if current_case == null:
		return
		
	if current_case.complementary_exams.size() > 0:
		var exam_keys = current_case.complementary_exams.keys()
		var first_exam_key = exam_keys[0]
		var exam_info: Dictionary = current_case.complementary_exams[first_exam_key]
		
		xray_title_label.text = exam_info.get("name", "Exame Complementar") + " (R$ " + str(int(current_case.exam_cost)) + ")"
		xray_desc_label.text = exam_info.get("description", "Exame complementar investigativo.")
		
		xray_request_button.pressed.connect(func(): _request_complementary_exam(first_exam_key))
		UIAnimation.setup_button_hover(xray_request_button)

func _request_complementary_exam(exam_id: String) -> void:
	if current_case == null:
		return
		
	var exam_info: Dictionary = current_case.complementary_exams.get(exam_id, {})
	var req_ev: String = exam_info.get("required_evidence_id", "")
	
	if not req_ev.is_empty() and not discovered_evidence_ids.has(req_ev):
		UIAnimation.shake_node(xray_request_button, 6.0)
		if SoundManager != null:
			SoundManager.play_fail()
		_show_feedback_modal(
			"🔒 EXAME BLOQUEADO",
			"Você precisa realizar o Exame Físico da região afetada e identificar uma alteração prévia antes de solicitar este exame complementar."
		)
		return
		
	if spent_budget + current_case.exam_cost > current_budget:
		UIAnimation.shake_node(xray_request_button, 6.0)
		if SoundManager != null:
			SoundManager.play_fail()
		_show_feedback_modal("💰 ORÇAMENTO INSUFICIENTE", "O custo deste exame ultrapassa o orçamento disponível para esta consulta.")
		return
		
	if not requested_exams.has(exam_id):
		requested_exams.append(exam_id)
		spent_budget += current_case.exam_cost
		patient_stress += 12.0
		shift_minutes += 30
		_update_simulation_header()
		_update_stress_ui()
		
		var ev_id: String = exam_info.get("evidence_id", "")
		if not ev_id.is_empty() and not discovered_evidence_ids.has(ev_id):
			discovered_evidence_ids.append(ev_id)
			_update_discoveries_log_ui()
			
	if SoundManager != null:
		SoundManager.play_success()
		
	_show_exam_result_modal(exam_info)
	_update_state_ui()
	_update_hypothesis_evidence_ui()

func _show_exam_result_modal(exam_info: Dictionary) -> void:
	modal_title_label.text = exam_info.get("name", "LAUDO DO EXAME COMPLEMENTAR").to_upper()
	
	var ev_id: String = exam_info.get("evidence_id", "")
	var report_text: String = "Exame complementar sem alterações significativas."
	if current_case != null and current_case.evidence_data.has(ev_id):
		report_text = current_case.evidence_data[ev_id].get("text", report_text)
		
	modal_text_label.text = "LAUDO DA INSPEÇÃO:\n" + report_text
	
	var res_img: Texture2D = exam_info.get("image", null)
	if res_img != null:
		modal_image_rect.texture = res_img
		modal_image_rect.visible = true
	else:
		modal_image_rect.visible = false
		
	hotspot_feedback_label.text = "🔍 Clique sobre a imagem para inspeção aprofundada (Bônus de Precisão)!"
	exam_result_modal.visible = true
	UIAnimation.animate_modal_open(exam_result_modal, modal_panel)

func _on_modal_image_gui_input(event: InputEvent) -> void:
	if event is InputEventMouseButton and event.pressed and event.button_index == MOUSE_BUTTON_LEFT:
		if current_case == null:
			return
		var local_pos: Vector2 = event.position
		var dist: float = local_pos.distance_to(current_case.xray_hotspot)
		
		if dist <= current_case.xray_hotspot_radius:
			if not hotspot_found:
				hotspot_found = true
				if SoundManager != null:
					SoundManager.play_success()
				hotspot_feedback_label.text = "✨ INSPEÇÃO APROFUNDADA REALIZADA COM PRECISÃO! (+Bônus de Avaliação)"
		else:
			if SoundManager != null:
				SoundManager.play_ui_click()

func _on_modal_close_pressed() -> void:
	if SoundManager != null:
		SoundManager.play_ui_click()
	UIAnimation.animate_modal_close(exam_result_modal, modal_panel)

# --- AVALIAÇÃO CLÍNICA UNIFICADA (SINGLE SOURCE OF TRUTH — HOTFIX ETAPA 20) ---

## Fonte Única de Verdade para Raciocínio Clínico, Confiança e Suficiência Diagnóstica.
func evaluate_hypothesis(hyp_name: String) -> Dictionary:
	if current_case == null or hyp_name.is_empty():
		return {
			"level": "BAIXA",
			"badge": "BAIXA 🔴 (Seleção Pendente)",
			"can_confirm": false,
			"is_correct": false,
			"supporting": [],
			"conflicting": [],
			"has_exam": false,
			"reason": "Por favor, selecione uma hipótese diagnóstica antes de confirmar."
		}
		
	var is_correct: bool = (hyp_name == current_case.correct_diagnosis)
	
	# Busca dados da hipótese nos diagnósticos diferenciais do caso
	var diff_data: Dictionary = {}
	for diff in current_case.differential_diagnoses:
		if diff.get("name", "") == hyp_name:
			diff_data = diff
			break
			
	var sup_ids: Array = diff_data.get("supporting_evidence", [])
	if sup_ids.is_empty() and current_case.hypothesis_evidence_map.has(hyp_name):
		sup_ids = current_case.hypothesis_evidence_map[hyp_name]
		
	var conf_ids: Array = diff_data.get("conflicting_evidence", []).duplicate()
	var useful_exams: Array = diff_data.get("useful_exams", [])
	
	# REGRA DE CONFLITO CLÍNICO INTEGRADA: Se um exame complementar foi realizado e gerou
	# evidência confirmatória da hipótese CORRETA, essa evidência do exame atua como
	# achado CONFLITANTE para todas as OUTRAS hipóteses!
	if not is_correct:
		for ex_id in requested_exams:
			var ex_info: Dictionary = current_case.complementary_exams.get(ex_id, {})
			var ev_id: String = ex_info.get("evidence_id", "")
			if not ev_id.is_empty() and discovered_evidence_ids.has(ev_id):
				if not sup_ids.has(ev_id) and not conf_ids.has(ev_id):
					conf_ids.append(ev_id)
					
	var supporting_found: Array[String] = []
	var conflicting_found: Array[String] = []
	
	for id in discovered_evidence_ids:
		if sup_ids.has(id):
			var txt: String = current_case.evidence_data.get(id, {}).get("text", id)
			supporting_found.append(txt)
		elif conf_ids.has(id):
			var txt_conf: String = current_case.evidence_data.get(id, {}).get("text", id)
			conflicting_found.append(txt_conf)
			
	var has_useful_exam: bool = false
	for ex_id in requested_exams:
		if useful_exams.has(ex_id) or useful_exams.is_empty():
			has_useful_exam = true
			break
			
	var level: String = "BAIXA"
	var badge: String = "BAIXA 🔴 (Evidências Insuficientes)"
	var can_confirm: bool = false
	var reason: String = ""
	
	# MATRIZ ÚNICA E UNIFICADA DE DECISÃO:
	if not conflicting_found.is_empty():
		level = "BAIXA"
		badge = "BAIXA 🔴 (Descartada — Achados Conflitantes Presentes)"
		can_confirm = false
		reason = "As evidências obtidas no exame entram em conflito direto com esta hipótese."
	elif is_correct:
		if supporting_found.size() >= 2 and (has_useful_exam or current_case.complementary_exams.is_empty()):
			level = "ALTA"
			badge = "ALTA 🟢 (Achados Físicos + Exame Confirmatório)"
			can_confirm = true
			reason = "Achados físicos e exames complementares sustentam com segurança a hipótese."
		elif supporting_found.size() >= 1:
			level = "MODERADA"
			badge = "MODERADA 🟡 (Sinais Físicos Presentes, Aguardando Exame)"
			can_confirm = false
			reason = "Exame físico indicou alteração, mas a investigação complementar é necessária para confirmar."
		else:
			level = "BAIXA"
			badge = "BAIXA 🔴 (Evidências Insuficientes)"
			can_confirm = false
			reason = "Realize o exame físico para investigar os sinais clínicos do paciente."
	else:
		# Hipótese incorreta sem evidências conflitantes ativas ainda
		if has_useful_exam and supporting_found.size() >= 2:
			level = "ALTA"
			badge = "ALTA 🟢 (Plausível — Sujeita à Validação Final)"
			can_confirm = true
			reason = "Sinais clínicos preliminares compatíveis."
		elif supporting_found.size() >= 1:
			level = "MODERADA"
			badge = "MODERADA 🟡 (Sinais Não Específicos Compartilhados)"
			can_confirm = false
			reason = "Sinais físicos não específicos. Realize o exame complementar para diferenciar as hipóteses."
		else:
			level = "BAIXA"
			badge = "BAIXA 🔴 (Sem Suporte no Prontuário)"
			can_confirm = false
			reason = "Sem dados no prontuário que sustentem esta hipótese."
			
	return {
		"level": level,
		"badge": badge,
		"can_confirm": can_confirm,
		"is_correct": is_correct,
		"supporting": supporting_found,
		"conflicting": conflicting_found,
		"has_exam": has_useful_exam,
		"reason": reason
	}

func _get_confidence_level_for_hypothesis(hyp_name: String) -> Dictionary:
	return evaluate_hypothesis(hyp_name)

func _setup_hypotheses_buttons() -> void:
	if current_case == null:
		return
		
	for child in hypotheses_buttons_container.get_children():
		child.queue_free()
		
	var hyp_names: Array[String] = []
	# Inclui TODAS as hipóteses de possible_diagnoses para garantir que a resposta correta esteja sempre presente
	if current_case.possible_diagnoses.size() > 0:
		for hyp in current_case.possible_diagnoses:
			hyp_names.append(hyp)
	elif current_case.differential_diagnoses.size() > 0:
		for diff in current_case.differential_diagnoses:
			hyp_names.append(diff.get("name", ""))
			
	for hypothesis in hyp_names:
		var btn: Button = Button.new()
		btn.text = hypothesis
		btn.custom_minimum_size = Vector2(0, 38)
		btn.alignment = HORIZONTAL_ALIGNMENT_LEFT
		
		# Estilização de alto contraste (texto escuro legível em fundo claro)
		var style_norm: StyleBoxFlat = StyleBoxFlat.new()
		style_norm.bg_color = Color(0.92, 0.90, 0.84, 1.0)
		style_norm.border_width_left = 3
		style_norm.border_color = Color(0.5, 0.5, 0.5, 1.0)
		style_norm.corner_radius_top_left = 6
		style_norm.corner_radius_top_right = 6
		style_norm.corner_radius_bottom_left = 6
		style_norm.corner_radius_bottom_right = 6
		style_norm.content_margin_left = 12
		style_norm.content_margin_right = 12
		style_norm.content_margin_top = 8
		style_norm.content_margin_bottom = 8
		btn.add_theme_stylebox_override("normal", style_norm)
		btn.add_theme_color_override("font_color", Color(0.12, 0.15, 0.14))
		
		UIAnimation.setup_button_hover(btn)
		btn.pressed.connect(func(): _select_hypothesis(hypothesis, btn))
		hypotheses_buttons_container.add_child(btn)

func _select_hypothesis(hypothesis: String, selected_btn: Button) -> void:
	if SoundManager != null:
		SoundManager.play_ui_click()
	selected_hypothesis = hypothesis
	
	for child in hypotheses_buttons_container.get_children():
		if child is Button:
			if child == selected_btn:
				var style_sel: StyleBoxFlat = StyleBoxFlat.new()
				style_sel.bg_color = Color(0.173, 0.478, 0.369, 1.0)
				style_sel.border_width_left = 4
				style_sel.border_color = Color(0.788, 0.604, 0.239, 1.0)
				style_sel.corner_radius_top_left = 6
				style_sel.corner_radius_top_right = 6
				style_sel.corner_radius_bottom_left = 6
				style_sel.corner_radius_bottom_right = 6
				style_sel.content_margin_left = 12
				style_sel.content_margin_right = 12
				style_sel.content_margin_top = 8
				style_sel.content_margin_bottom = 8
				child.add_theme_stylebox_override("normal", style_sel)
				child.add_theme_color_override("font_color", Color(1.0, 1.0, 1.0))
			else:
				var style_norm: StyleBoxFlat = StyleBoxFlat.new()
				style_norm.bg_color = Color(0.92, 0.90, 0.84, 1.0)
				style_norm.border_width_left = 3
				style_norm.border_color = Color(0.5, 0.5, 0.5, 1.0)
				style_norm.corner_radius_top_left = 6
				style_norm.corner_radius_top_right = 6
				style_norm.corner_radius_bottom_left = 6
				style_norm.corner_radius_bottom_right = 6
				style_norm.content_margin_left = 12
				style_norm.content_margin_right = 12
				style_norm.content_margin_top = 8
				style_norm.content_margin_bottom = 8
				child.add_theme_stylebox_override("normal", style_norm)
				child.add_theme_color_override("font_color", Color(0.12, 0.15, 0.14))
			
	_update_hypothesis_evidence_ui()

func _update_hypothesis_evidence_ui() -> void:
	if selected_hypothesis.is_empty() or current_case == null:
		hypothesis_evidence_list_label.text = "Selecione uma hipótese à esquerda para analisar o raciocínio."
		confidence_badge_label.text = "CONFIANÇA: PENDENTE"
		return
		
	var eval_info: Dictionary = evaluate_hypothesis(selected_hypothesis)
	confidence_badge_label.text = "CONFIANÇA: " + eval_info.get("badge", "")
	
	var lines: Array[String] = []
	lines.append("👉 HIPÓTESE EM ANÁLISE: " + selected_hypothesis)
	
	lines.append("\n✓ SINAIS DE SUPORTE NO PRONTUÁRIO:")
	var sup_list: Array = eval_info.get("supporting", [])
	if sup_list.is_empty():
		lines.append("  (Nenhuma evidência de suporte registrada ainda)")
	else:
		for ev in sup_list:
			lines.append("  • " + String(ev))
			
	var conf_list: Array = eval_info.get("conflicting", [])
	if not conf_list.is_empty():
		lines.append("\n⚠ SINAIS CONFLITANTES ENCONTRADOS:")
		for ev_c in conf_list:
			lines.append("  • " + String(ev_c))
			
	if current_case.educational_notes.has("why_hypothesis"):
		lines.append("\n💡 RACIONALIDADE VETERINÁRIA:")
		lines.append("  " + current_case.educational_notes["why_hypothesis"])
		
	hypothesis_evidence_list_label.text = "\n".join(lines)

func _on_confirm_diagnosis_pressed() -> void:
	if selected_hypothesis.is_empty():
		UIAnimation.shake_node(confirm_diagnosis_button, 6.0)
		if SoundManager != null:
			SoundManager.play_fail()
		_show_feedback_modal("⚠️ SELEÇÃO PENDENTE", "Por favor, selecione uma hipótese diagnóstica antes de confirmar.")
		return
		
	if current_case == null:
		return
		
	var eval_data: Dictionary = evaluate_hypothesis(selected_hypothesis)
	if not eval_data.get("can_confirm", false):
		UIAnimation.shake_node(confirm_diagnosis_button, 6.0)
		if SoundManager != null:
			SoundManager.play_fail()
		_show_feedback_modal(
			"🔎 INVESTIGAÇÃO AINDA INSUFICIENTE",
			String(eval_data.get("reason", "Colete mais evidências antes de confirmar.")) + "\n\nUse a aba de Exame Físico e, quando indicado, solicite o exame complementar."
		)
		return
	
	# Hipóteses plausíveis ainda podem ser confirmadas no modo de simulação;
	# as incorretas mantêm consequências profissionais claras.
	if eval_data.get("is_correct", false):
		if SoundManager != null:
			SoundManager.play_success()
		current_state = CaseState.DIAGNOSED
		_update_state_ui()
		UIAnimation.animate_treatment_unlock(treatment_lock_label, treatment_checkboxes_container)
		
		_show_feedback_modal(
			"✓ DIAGNÓSTICO CORRETO!",
			"Parabéns! Você identificou corretamente o diagnóstico de:\n\n👉 " + selected_hypothesis + "\n\nO Plano de Cuidados Médicos foi liberado na Aba 5 (Conduta)!"
		)
		_switch_tab(WorkstationTab.CONDUCT)
	else:
		UIAnimation.shake_node(confirm_diagnosis_button, 8.0)
		if SoundManager != null:
			SoundManager.play_fail()
		wrong_diagnosis_attempts += 1
		if GameState != null:
			GameState.record_clinical_occurrence(GameState.ErrorSeverity.RELEVANT, "Hipótese diagnóstica incorreta confirmada: " + selected_hypothesis, current_case)
		
		# Permite avançar mesmo com o erro registrado para permitir que o jogador erre e veja a consequência
		current_state = CaseState.DIAGNOSED
		_update_state_ui()
		UIAnimation.animate_treatment_unlock(treatment_lock_label, treatment_checkboxes_container)
		
		_show_feedback_modal(
			"⚠️ DIAGNÓSTICO INCORRETO CONFIRMADO",
			"Você confirmou a hipótese de '" + selected_hypothesis + "', mas ela é INCORRETA/INCOMPATÍVEL com a queixa do paciente.\n\nUma ocorrência de erro clínico e penalidade de reputação foram registradas no seu histórico profissional!\n\nO Plano de Conduta foi liberado."
		)
		_switch_tab(WorkstationTab.CONDUCT)

# --- PLANO DE TRATAMENTO & CONDUTA (ABA 5) ---

func _setup_treatment_options() -> void:
	if current_case == null:
		return
		
	for child in treatment_checkboxes_container.get_children():
		child.queue_free()
		
	selected_treatment_ids.clear()
	
	for option in current_case.treatment_options:
		var checkbox: CheckBox = CheckBox.new()
		checkbox.text = option.get("name", "") + " — " + option.get("description", "")
		# Estilização de alto contraste para leitura perfeita das opções de conduta
		checkbox.add_theme_color_override("font_color", Color(0.12, 0.15, 0.14))
		checkbox.add_theme_color_override("font_pressed_color", Color(0.08, 0.35, 0.22))
		checkbox.add_theme_color_override("font_hover_color", Color(0.05, 0.25, 0.15))
		checkbox.add_theme_color_override("font_hover_pressed_color", Color(0.05, 0.25, 0.15))
		
		var opt_id: String = option.get("id", "")
		checkbox.toggled.connect(func(toggled: bool): _on_treatment_option_toggled(opt_id, toggled))
		treatment_checkboxes_container.add_child(checkbox)

func _on_treatment_option_toggled(opt_id: String, toggled: bool) -> void:
	if SoundManager != null:
		SoundManager.play_ui_click()
	if toggled:
		if not selected_treatment_ids.has(opt_id):
			selected_treatment_ids.append(opt_id)
			var opt_name: String = opt_id
			if current_case != null:
				for option in current_case.treatment_options:
					if option.get("id", "") == opt_id:
						opt_name = option.get("name", opt_id)
						break
			UIAnimation.show_toast(self, Label.new(), "🩺 CONDUTA SELECIONADA: " + opt_name)
	else:
		selected_treatment_ids.erase(opt_id)

func _on_confirm_treatment_pressed() -> void:
	if current_state != CaseState.DIAGNOSED:
		UIAnimation.shake_node(confirm_treatment_button, 6.0)
		if SoundManager != null:
			SoundManager.play_fail()
		_show_feedback_modal("🔒 PLANO BLOQUEADO", "Confirme o diagnóstico correto na Aba 4 (Raciocínio) antes de prescrever a conduta.")
		return
		
	if current_case == null:
		return
		
	var is_valid: bool = true
	for option in current_case.treatment_options:
		var opt_id: String = option.get("id", "")
		var is_appropriate: bool = option.get("appropriate", false)
		
		if is_appropriate and not selected_treatment_ids.has(opt_id):
			is_valid = false
		elif not is_appropriate and selected_treatment_ids.has(opt_id):
			is_valid = false
			
	if is_valid:
		if SoundManager != null:
			SoundManager.play_success()
		current_state = CaseState.RECOVERING
		_update_state_ui()
		_show_case_conclusion_modal()
	else:
		UIAnimation.shake_node(confirm_treatment_button, 8.0)
		if SoundManager != null:
			SoundManager.play_fail()
		if GameState != null:
			GameState.record_clinical_occurrence(GameState.ErrorSeverity.RELEVANT, "Plano de cuidados inadequado selecionado", current_case)
		_show_feedback_modal(
			"⚠ CONDUTA NÃO ADEQUADA",
			"A combinação de condutas selecionada não é compatível com o manejo esperado para este caso.\n\nRevise suas escolhas e tente novamente."
		)

func _calculate_score_and_rating() -> Dictionary:
	var dx_precision: int = 1000 - (wrong_diagnosis_attempts * 250) + (250 if hotspot_found else 0) + (perfect_palpations_count * 50)
	var welfare_score: int = 1000 - int(patient_stress * 8.0)
	var efficiency_score: int = 1000 - int(spent_budget * 2.0)
	
	dx_precision = clampi(dx_precision, 0, 1000)
	welfare_score = clampi(welfare_score, 0, 1000)
	efficiency_score = clampi(efficiency_score, 0, 1000)
	
	var total_score: int = dx_precision + welfare_score + efficiency_score
	
	var stars: int = 5
	if total_score < 1500:
		stars = 1
	elif total_score < 2000:
		stars = 2
	elif total_score < 2400:
		stars = 3
	elif total_score < 2750:
		stars = 4
		
	return {
		"total_score": total_score,
		"stars": stars,
		"dx_precision": dx_precision,
		"welfare_score": welfare_score,
		"efficiency_score": efficiency_score
	}

func _show_case_conclusion_modal() -> void:
	var eval_res: Dictionary = _calculate_score_and_rating()
	var stars_count: int = eval_res.stars
	
	rating_stars_label.text = "★".repeat(stars_count) + "☆".repeat(5 - stars_count)
	
	var time_spent: int = shift_minutes - 510
	var record_result: Dictionary = {}
	if GameState != null and current_case != null:
		record_result = GameState.record_case_completion(current_case, stars_count, eval_res, time_spent, spent_budget)
		
	var lines: Array[String] = []
	lines.append("✓ DIAGNÓSTICO: " + current_case.correct_diagnosis)
	lines.append("✓ ESTRESSE FINAL DO PACIENTE: " + str(int(patient_stress)) + "%")
	lines.append("✓ ORÇAMENTO UTILIZADO: R$ " + str(int(spent_budget)) + " / R$ " + str(int(current_budget)))
	lines.append("✓ TEMPO DE CONSULTA: " + str(time_spent) + " min")
	lines.append("\nPONTUAÇÃO PROFISSIONAL: " + str(eval_res.total_score) + " pts")
	
	var xp_earned: int = record_result.get("xp_earned", current_case.reputation_reward)
	var rep_gained: int = record_result.get("rep_gained", int(current_case.reputation_reward * 0.7))
	lines.append("\nRECOMPENSAS CONCEDIDAS:")
	lines.append("  + " + str(xp_earned) + " XP PROFISSIONAL")
	lines.append("  + " + str(rep_gained) + " REPUTAÇÃO INSTITUCIONAL")
	
	if current_case.educational_notes.has("why_treatment"):
		lines.append("\n💡 CAMINHO CLÍNICO & RACIONALIDADE:")
		lines.append("  " + current_case.educational_notes["why_treatment"])
		
	breakdown_text_label.text = "\n".join(lines)
	
	# Adiciona botão de impressão/cópia de prontuário no modal de conclusão
	var btn_parent: Node = close_case_button.get_parent()
	if btn_parent != null and not btn_parent.has_node("CopyReportButton"):
		var copy_btn: Button = Button.new()
		copy_btn.name = "CopyReportButton"
		copy_btn.text = "📋  IMPRIMIR / COPIAR PRONTUÁRIO"
		copy_btn.custom_minimum_size = Vector2(220, 42)
		UIAnimation.setup_button_hover(copy_btn)
		copy_btn.pressed.connect(_on_copy_clinical_report_pressed)
		btn_parent.add_child(copy_btn)
		btn_parent.move_child(copy_btn, 0)
		
	conclusion_modal.visible = true
	UIAnimation.animate_modal_open(conclusion_modal, conclusion_panel)

func _on_copy_clinical_report_pressed() -> void:
	if current_case == null:
		return
		
	var eval_res: Dictionary = _calculate_score_and_rating()
	var stars_count: int = eval_res.stars
	
	var report_lines: Array[String] = []
	report_lines.append("==================================================")
	report_lines.append("PRONTUÁRIO CLÍNICO VETERINÁRIO — MEDZOO")
	report_lines.append("==================================================")
	report_lines.append("CÓDIGO PACIENTE: " + current_case.patient_code)
	report_lines.append("ESPÉCIE: " + current_case.species_name + " (" + current_case.scientific_name + ")")
	report_lines.append("DIAGNÓSTICO CONFIRMADO: " + current_case.correct_diagnosis)
	report_lines.append("AVALIAÇÃO DO ATENDIMENTO: " + "★".repeat(stars_count) + "☆".repeat(5 - stars_count) + " (" + str(eval_res.total_score) + " pts)")
	report_lines.append("ESTRESSE FINAL: " + str(int(patient_stress)) + "% | ORÇAMENTO UTILIZADO: R$ " + str(int(spent_budget)) + " / R$ " + str(int(current_budget)))
	report_lines.append("\nCONDUTAS MÉDICAS PRESCRITAS:")
	
	for opt in current_case.treatment_options:
		var opt_id: String = opt.get("id", "")
		if selected_treatment_ids.has(opt_id):
			report_lines.append("  • " + opt.get("name", "") + " — " + opt.get("description", ""))
			
	report_lines.append("==================================================")
	
	var full_text: String = "\n".join(report_lines)
	DisplayServer.clipboard_set(full_text)
	
	if SoundManager != null:
		SoundManager.play_toast()
		
	UIAnimation.show_toast(self, Label.new(), "📋 PRONTUÁRIO CLÍNICO COPIADO PARA A ÁREA DE TRANSFERÊNCIA!")

func _update_state_ui() -> void:
	match current_state:
		CaseState.INVESTIGATING:
			status_badge_label.text = "🔍 EM INVESTIGAÇÃO"
			status_badge_label.add_theme_color_override("font_color", Color(0.9, 0.8, 0.3))
			treatment_lock_label.text = "🔒 Confirme uma hipótese com evidências suficientes para liberar a conduta."
			confirm_treatment_button.disabled = true
		CaseState.DIAGNOSED:
			status_badge_label.text = "✓ DIAGNOSTICADO"
			status_badge_label.add_theme_color_override("font_color", Color(0.4, 0.85, 0.5))
			treatment_lock_label.text = "✓ Diagnóstico confirmado. Revise todas as escolhas antes de prescrever."
			confirm_treatment_button.disabled = false
		CaseState.RECOVERING:
			status_badge_label.text = "💊 EM TRATAMENTO"
			status_badge_label.add_theme_color_override("font_color", Color(0.4, 0.8, 0.95))
			confirm_treatment_button.disabled = true
		CaseState.COMPLETED:
			status_badge_label.text = "🏁 CONCLUÍDO"
			status_badge_label.add_theme_color_override("font_color", Color(0.95, 0.8, 0.3))

func _show_feedback_modal(title: String, message: String) -> void:
	feedback_title_label.text = title
	feedback_text_label.text = message
	feedback_modal.visible = true
	UIAnimation.animate_modal_open(feedback_modal, feedback_panel)

func _on_feedback_close_pressed() -> void:
	if SoundManager != null:
		SoundManager.play_ui_click()
	UIAnimation.animate_modal_close(feedback_modal, feedback_panel)

func _on_close_case_pressed() -> void:
	if is_transitioning:
		return
	is_transitioning = true
	
	if SoundManager != null:
		SoundManager.play_ui_click()
		
	var tween: Tween = create_tween()
	tween.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_IN)
	tween.tween_property(self, "modulate:a", 0.0, 0.25)
	tween.tween_callback(func():
		emit_signal("case_completed", true)
		if get_parent() != null and (get_parent().name == "ClinicContainer" or get_parent().name == "ClinicalOverlay"):
			queue_free()
		else:
			get_tree().change_scene_to_file("res://scenes/clinic_2d.tscn")
	)

func _on_back_pressed() -> void:
	if is_transitioning:
		return
	is_transitioning = true
	
	if SoundManager != null:
		SoundManager.play_ui_click()
		
	var tween: Tween = create_tween()
	tween.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_IN)
	tween.tween_property(self, "modulate:a", 0.0, 0.25)
	tween.tween_callback(func():
		emit_signal("case_completed", false)
		if get_parent() != null and (get_parent().name == "ClinicContainer" or get_parent().name == "ClinicalOverlay"):
			queue_free()
		else:
			get_tree().change_scene_to_file("res://scenes/clinic_2d.tscn")
	)
