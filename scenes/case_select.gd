extends Control

## Tela de Seleção de Casos, Plantão Veterinário, Carreira, Consequências, Lore e Competências (Etapa 18).
## Gerencia a rotina do plantão, capítulos, documentos, competências profissionais, treinamentos e certificações.

@onready var cards_container: HBoxContainer = %CardsContainer
@onready var reputation_label: Label = %ReputationLabel
@onready var stats_label: Label = %StatsLabel
@onready var shift_time_label: Label = %ShiftTimeLabel
@onready var reliability_label: Label = %ReliabilityLabel
@onready var warnings_label: Label = %WarningsLabel
@onready var chapter_label: Label = %ChapterLabel

# Referências do Painel de Carreira & Plantão
@onready var rank_title_label: Label = %RankTitleLabel
@onready var xp_progress_bar: ProgressBar = %XPProgressBar
@onready var xp_text_label: Label = %XPTextLabel
@onready var next_rank_requirements_label: Label = %NextRankRequirementsLabel
@onready var equipment_label: Label = %EquipmentLabel
@onready var shift_status_label: Label = %ShiftStatusLabel
@onready var start_shift_button: Button = %StartShiftButton
@onready var end_shift_button: Button = %EndShiftButton

# Referências dos Modais Existentes
@onready var case_return_modal: Control = %CaseReturnModal
@onready var return_details_label: Label = %ReturnDetailsLabel
@onready var return_gains_label: Label = %ReturnGainsLabel
@onready var return_stats_label: Label = %ReturnStatsLabel
@onready var continue_shift_button: Button = %ContinueShiftButton
@onready var finish_shift_now_button: Button = %FinishShiftNowButton

@onready var shift_summary_modal: Control = %ShiftSummaryModal
@onready var summary_time_label: Label = %SummaryTimeLabel
@onready var summary_text_label: Label = %SummaryTextLabel
@onready var close_shift_summary_button: Button = %CloseShiftSummaryButton

@onready var promotion_modal: Control = %PromotionModal
@onready var rank_transition_label: Label = %RankTransitionLabel
@onready var promo_details_label: Label = %PromoDetailsLabel
@onready var unlocks_label: Label = %UnlocksLabel
@onready var close_promotion_button: Button = %ClosePromotionButton

@onready var termination_modal: Control = %TerminationModal
@onready var termination_text_label: Label = %TerminationTextLabel
@onready var start_new_career_button: Button = %StartNewCareerButton
@onready var return_menu_term_button: Button = %ReturnMenuTermButton

# Modais da Etapa 17 (Lore & Arquivo)
@onready var archive_button: Button = %ArchiveButton
@onready var archive_modal: Control = %ArchiveModal
@onready var doc_list_vbox: VBoxContainer = %DocListVBox
@onready var doc_category_label: Label = %DocCategoryLabel
@onready var doc_title_label: Label = %DocTitleLabel
@onready var doc_meta_label: Label = %DocMetaLabel
@onready var doc_body_label: Label = %DocBodyLabel
@onready var close_archive_button: Button = %CloseArchiveButton

@onready var dialogue_modal: Control = %DialogueModal
@onready var speaker_avatar_label: Label = %SpeakerAvatarLabel
@onready var speaker_name_label: Label = %SpeakerNameLabel
@onready var speaker_role_label: Label = %SpeakerRoleLabel
@onready var dialogue_text_label: Label = %DialogueTextLabel
@onready var close_dialogue_button: Button = %CloseDialogueButton

# Modais da Etapa 18 (Competências & Certificações)
@onready var competencies_button: Button = %CompetenciesButton
@onready var competency_modal: Control = %CompetencyModal
@onready var comp_list_vbox: VBoxContainer = %CompListVBox
@onready var selected_comp_title_label: Label = %SelectedCompTitleLabel
@onready var selected_comp_status_label: Label = %SelectedCompStatusLabel
@onready var comp_desc_label: Label = %CompDescLabel
@onready var eval_options_container: VBoxContainer = %EvalOptionsContainer
@onready var start_training_button: Button = %StartTrainingButton
@onready var close_comp_button: Button = %CloseCompButton

# Botões do Cabeçalho
@onready var menu_button: Button = %MenuButton
@onready var settings_button: Button = %SettingsButton
@onready var settings_modal: Control = $SettingsModal

var is_transitioning: bool = false
var selected_doc: DocumentData = null
var selected_comp: CompetencyData = null
var is_evaluating: bool = false

# Toast reutilizável da tela de seleção
var toast_container: PanelContainer = null
var toast_label: Label = null


func _ready() -> void:
	_setup_toast_ui()

	self.modulate.a = 0.0

	var tween: Tween = create_tween()
	tween.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_OUT)
	tween.tween_property(self, "modulate:a", 1.0, 0.3)

	UIAnimation.setup_button_hover(menu_button)
	UIAnimation.setup_button_hover(settings_button)
	UIAnimation.setup_button_hover(archive_button)
	UIAnimation.setup_button_hover(competencies_button)
	UIAnimation.setup_button_hover(start_shift_button)
	UIAnimation.setup_button_hover(end_shift_button)
	UIAnimation.setup_button_hover(continue_shift_button)
	UIAnimation.setup_button_hover(finish_shift_now_button)
	UIAnimation.setup_button_hover(close_shift_summary_button)
	UIAnimation.setup_button_hover(close_promotion_button)
	UIAnimation.setup_button_hover(start_new_career_button)
	UIAnimation.setup_button_hover(return_menu_term_button)
	UIAnimation.setup_button_hover(close_archive_button)
	UIAnimation.setup_button_hover(close_dialogue_button)
	UIAnimation.setup_button_hover(start_training_button)
	UIAnimation.setup_button_hover(close_comp_button)

	menu_button.pressed.connect(_on_menu_pressed)
	settings_button.pressed.connect(_on_settings_pressed)
	archive_button.pressed.connect(_on_archive_pressed)
	competencies_button.pressed.connect(_on_competencies_pressed)
	start_shift_button.pressed.connect(_on_start_shift_pressed)
	end_shift_button.pressed.connect(_on_end_shift_pressed)
	continue_shift_button.pressed.connect(_on_continue_shift_pressed)
	finish_shift_now_button.pressed.connect(_on_end_shift_pressed)
	close_shift_summary_button.pressed.connect(_on_close_shift_summary_pressed)
	close_promotion_button.pressed.connect(_on_close_promotion_pressed)
	start_new_career_button.pressed.connect(_on_start_new_career_pressed)
	return_menu_term_button.pressed.connect(_on_menu_pressed)
	close_archive_button.pressed.connect(_on_close_archive_pressed)
	close_dialogue_button.pressed.connect(_on_close_dialogue_pressed)
	start_training_button.pressed.connect(_on_start_training_pressed)
	close_comp_button.pressed.connect(_on_close_comp_pressed)

	case_return_modal.visible = false
	shift_summary_modal.visible = false
	promotion_modal.visible = false
	termination_modal.visible = false
	archive_modal.visible = false
	dialogue_modal.visible = false
	competency_modal.visible = false

	_update_header_stats()
	_update_career_ui()
	_populate_case_cards()

	_check_chapter_progression()
	_check_return_from_case()
	_check_pending_promotion()
	_check_career_termination()


func _setup_toast_ui() -> void:
	if is_instance_valid(toast_container):
		return

	toast_container = PanelContainer.new()
	toast_container.name = "RuntimeToastContainer"
	toast_container.mouse_filter = Control.MOUSE_FILTER_IGNORE
	toast_container.visible = false
	toast_container.z_index = 100

	toast_container.set_anchors_preset(Control.PRESET_CENTER_TOP)
	toast_container.position = Vector2(-220, 28)
	toast_container.size = Vector2(440, 56)

	var panel_style := StyleBoxFlat.new()
	panel_style.bg_color = Color(0.06, 0.10, 0.09, 0.96)
	panel_style.border_width_left = 1
	panel_style.border_width_top = 1
	panel_style.border_width_right = 1
	panel_style.border_width_bottom = 1
	panel_style.border_color = Color(0.37, 0.49, 0.38, 0.9)
	panel_style.corner_radius_top_left = 10
	panel_style.corner_radius_top_right = 10
	panel_style.corner_radius_bottom_left = 10
	panel_style.corner_radius_bottom_right = 10
	panel_style.content_margin_left = 18
	panel_style.content_margin_right = 18
	panel_style.content_margin_top = 10
	panel_style.content_margin_bottom = 10

	toast_container.add_theme_stylebox_override("panel", panel_style)
	add_child(toast_container)

	toast_label = Label.new()
	toast_label.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	toast_label.vertical_alignment = VERTICAL_ALIGNMENT_CENTER
	toast_label.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
	toast_label.add_theme_font_size_override("font_size", 14)
	toast_label.add_theme_color_override("font_color", Color(0.94, 0.92, 0.84))
	toast_label.mouse_filter = Control.MOUSE_FILTER_IGNORE

	toast_container.add_child(toast_label)


func _show_case_select_toast(message: String) -> void:
	if not is_instance_valid(toast_container) or not is_instance_valid(toast_label):
		_setup_toast_ui()

	UIAnimation.show_toast(toast_container, toast_label, message)


func _update_header_stats() -> void:
	if GameState == null:
		return

	reputation_label.text = "🏆 REPUTAÇÃO: " + str(GameState.reputation) + " XP"

	var completed_count: int = GameState.current_shift.get("cases_completed_today", 0)
	var total_cases: int = CaseRegistry.load_all_cases().size()
	stats_label.text = "📋 ATENDIMENTOS: " + str(completed_count) + " / " + str(total_cases)

	var rel_info: Dictionary = GameState.get_reliability_status()
	reliability_label.text = "🛡 CONFIABILIDADE: " + str(int(rel_info.reliability)) + "%"
	reliability_label.add_theme_color_override("font_color", rel_info.color)

	warnings_label.text = "⚠ ADVERTÊNCIAS: " + str(GameState.warnings) + " / 3"
	if GameState.warnings >= 2:
		warnings_label.add_theme_color_override("font_color", Color(0.95, 0.3, 0.3))
	else:
		warnings_label.add_theme_color_override("font_color", Color(0.9, 0.7, 0.4))

	if GameState.is_shift_active():
		var cur_mins: int = GameState.current_shift.get("current_time_mins", 450)
		shift_time_label.text = "🕒 PLANTÃO: " + GameState.get_formatted_shift_time(cur_mins)
	else:
		shift_time_label.text = "🕒 FORA DE PLANTÃO"

	if NarrativeManager != null:
		var cur_cap: ChapterData = NarrativeManager.get_current_chapter()
		chapter_label.text = "📖 " + cur_cap.title.to_upper()


func _update_career_ui() -> void:
	if GameState == null:
		return

	var cur_rank: Dictionary = GameState.get_current_rank()
	var rank_title: String = cur_rank.get("title", "Estagiário")
	rank_title_label.text = "🏅 CARGO: " + rank_title

	var next_rank: Dictionary = GameState.get_next_rank()
	var cur_xp: int = GameState.career_xp
	var req_xp: int = next_rank.get("required_xp", cur_xp)

	xp_progress_bar.max_value = float(max(1, req_xp))
	xp_progress_bar.value = float(cur_xp)
	xp_text_label.text = "XP PROFISSIONAL: " + str(cur_xp) + " / " + str(req_xp) + " XP"

	if next_rank.get("title", "") != rank_title:
		var n_title: String = next_rank.get("title", "")
		var n_xp: int = next_rank.get("required_xp", 0)
		var n_rep: int = next_rank.get("required_reputation", 0)
		var n_cases: int = next_rank.get("required_cases", 0)
		next_rank_requirements_label.text = n_title + " (Requer " + str(n_xp) + " XP, " + str(n_rep) + " Rep, " + str(n_cases) + " Casos)"
	else:
		next_rank_requirements_label.text = "Cargo Máximo Atingido (Coordenador Clínico)"

	var eq_ids: Array = cur_rank.get("unlocked_equipment", [])
	for eq in GameState.unlocked_equipment:
		if not eq_ids.has(eq):
			eq_ids.append(eq)

	var eq_names: Array[String] = []
	for eq in eq_ids:
		var info: Dictionary = CareerData.get_equipment_info(String(eq))
		eq_names.append(info.get("icon", "📦") + " " + info.get("name", eq))

	equipment_label.text = "EQUIPAMENTOS: " + " | ".join(eq_names)

	if GameState.is_shift_active():
		var cur_mins: int = GameState.current_shift.get("current_time_mins", 450)
		shift_status_label.text = "🟢 PLANTÃO ATIVO (" + GameState.get_formatted_shift_time(cur_mins) + ")"
		shift_status_label.add_theme_color_override("font_color", Color(0.4, 0.8, 0.5))
		start_shift_button.text = "📋 PLANTÃO EM ANDAMENTO"
		start_shift_button.disabled = true
		end_shift_button.visible = true
	else:
		shift_status_label.text = "⚪ PLANTÃO PENDENTE"
		shift_status_label.add_theme_color_override("font_color", Color(0.8, 0.7, 0.4))
		start_shift_button.text = "🩺 INICIAR PLANTÃO"
		start_shift_button.disabled = false
		end_shift_button.visible = false


func _on_start_shift_pressed() -> void:
	if SoundManager != null:
		SoundManager.play_ui_click()

	if not GameState.is_shift_active():
		GameState.start_shift()
		_show_case_select_toast("🩺 PLANTÃO INICIADO COM SUCESSO!")
		_update_header_stats()
		_update_career_ui()
		_populate_case_cards()
		_trigger_start_shift_dialogue()


func _trigger_start_shift_dialogue() -> void:
	if NarrativeManager == null:
		return

	if not NarrativeManager.get_flag("seen_intro_dialogue"):
		NarrativeManager.set_flag("seen_intro_dialogue", true)
		_show_dialogue("dr_augusto", "Bem-vindo ao seu plantão no CARFS. Lembre-se: priorize a triagem física rigorosa e o bem-estar dos pacientes antes de qualquer conduta.")


func _check_chapter_progression() -> void:
	if NarrativeManager == null or GameState == null:
		return

	var prog: Dictionary = NarrativeManager.check_chapter_progression(
		GameState.completed_cases.size(),
		GameState.reputation,
		GameState.rank_index
	)

	if prog.get("promoted", false):
		var cap: ChapterData = prog.get("chapter")
		_show_case_select_toast("📖 " + cap.title.to_upper() + " DESBLOQUEADO!")
		_update_header_stats()


func _check_return_from_case() -> void:
	if GameState == null:
		return

	var last_summary: Dictionary = GameState.current_shift.get("last_completed_case_summary", {})

	if not last_summary.is_empty():
		var sp_name: String = last_summary.get("species_name", "Paciente")
		var stars: int = last_summary.get("stars", 5)
		var xp: int = last_summary.get("xp_earned", 0)
		var rep: int = last_summary.get("rep_gained", 0)
		var t_spent: int = last_summary.get("time_spent", 40)
		var c_spent: float = last_summary.get("cost_spent", 0.0)

		return_details_label.text = "PACIENTE: " + sp_name.to_upper() + "\nAVALIAÇÃO: " + "★".repeat(stars) + "☆".repeat(5 - stars)
		return_gains_label.text = "+" + str(xp) + " XP PROFISSIONAL   |   +" + str(rep) + " REPUTAÇÃO"
		return_stats_label.text = "Tempo de Atendimento: " + str(t_spent) + " min   |   Custo: R$ " + str(int(c_spent))

		case_return_modal.visible = true
		var modal_panel: Control = $CaseReturnModal/CenterContainer/ModalPanel
		UIAnimation.animate_modal_open(case_return_modal, modal_panel)


func _on_continue_shift_pressed() -> void:
	if SoundManager != null:
		SoundManager.play_ui_click()

	GameState.clear_last_completed_case_summary()

	var modal_panel: Control = $CaseReturnModal/CenterContainer/ModalPanel
	UIAnimation.animate_modal_close(case_return_modal, modal_panel, func():
		_check_chapter_progression()
		_update_header_stats()
		_update_career_ui()
		_populate_case_cards()
	)


func _on_end_shift_pressed() -> void:
	if SoundManager != null:
		SoundManager.play_ui_click()

	if case_return_modal.visible:
		var ret_panel: Control = $CaseReturnModal/CenterContainer/ModalPanel
		UIAnimation.animate_modal_close(case_return_modal, ret_panel, func():
			_show_shift_summary()
		)
	else:
		_show_shift_summary()


func _show_shift_summary() -> void:
	var summary: Dictionary = GameState.end_shift()

	var s_time: String = summary.get("start_time_text", "07:30")
	var e_time: String = summary.get("end_time_text", "12:00")
	summary_time_label.text = "TURNO DE TRABALHO: " + s_time + " ➔ " + e_time

	var cases_count: int = summary.get("cases_attended", 0)
	var avg_s: float = summary.get("avg_stars", 5.0)
	var xp_tot: int = summary.get("xp_earned", 0)
	var rep_tot: int = summary.get("rep_earned", 0)
	var budget_tot: float = summary.get("budget_spent", 0.0)
	var perf: String = summary.get("performance_title", "Excelente")
	var rel: float = summary.get("reliability", 100.0)

	var lines: Array[String] = []
	lines.append("Casos Atendidos: " + str(cases_count) + "   |   Desempenho: " + perf)
	lines.append("Média de Avaliação: " + str(snapped(avg_s, 0.1)) + " ★")
	lines.append("Confiabilidade Final do Turno: " + str(int(rel)) + "%")
	lines.append("\nRESULTADOS ACUMULADOS NO PLANTÃO:")
	lines.append(" + " + str(xp_tot) + " XP PROFISSIONAL")
	lines.append(" + " + str(rep_tot) + " REPUTAÇÃO")
	lines.append(" Orçamento Utilizado: R$ " + str(int(budget_tot)))

	summary_text_label.text = "\n".join(lines)

	shift_summary_modal.visible = true
	var sum_panel: Control = $ShiftSummaryModal/CenterContainer/ModalPanel
	UIAnimation.animate_modal_open(shift_summary_modal, sum_panel)


func _on_close_shift_summary_pressed() -> void:
	if SoundManager != null:
		SoundManager.play_ui_click()

	var sum_panel: Control = $ShiftSummaryModal/CenterContainer/ModalPanel
	UIAnimation.animate_modal_close(shift_summary_modal, sum_panel, func():
		_check_chapter_progression()
		_update_header_stats()
		_update_career_ui()
		_populate_case_cards()
	)


func _check_pending_promotion() -> void:
	if GameState == null:
		return

	var promo: Dictionary = GameState.check_and_apply_promotion()
	if promo.get("promoted", false):
		_show_promotion_modal(promo)


func _show_promotion_modal(promo_data: Dictionary) -> void:
	if SoundManager != null:
		SoundManager.play_case_complete()

	var prev_rank: Dictionary = promo_data.get("previous_rank", {})
	var new_rank: Dictionary = promo_data.get("new_rank", {})

	rank_transition_label.text = prev_rank.get("title", "") + " ➔ " + new_rank.get("title", "")
	promo_details_label.text = new_rank.get("description", "Parabéns pela sua evolução profissional na fauna silvestre!")

	var unlocks: Array = new_rank.get("unlocked_equipment", [])
	var unlock_lines: Array[String] = ["NOVAS PERMISSÕES & EQUIPAMENTOS:"]

	for eq_id in unlocks:
		var info: Dictionary = CareerData.get_equipment_info(String(eq_id))
		unlock_lines.append("✓ " + info.get("icon", "📦") + " " + info.get("name", eq_id))

	unlocks_label.text = "\n".join(unlock_lines)

	promotion_modal.visible = true
	var modal_panel: Control = $PromotionModal/CenterContainer/ModalPanel
	UIAnimation.animate_modal_open(promotion_modal, modal_panel)


func _on_close_promotion_pressed() -> void:
	if SoundManager != null:
		SoundManager.play_ui_click()

	var modal_panel: Control = $PromotionModal/CenterContainer/ModalPanel
	UIAnimation.animate_modal_close(promotion_modal, modal_panel, func():
		_update_career_ui()
		_populate_case_cards()
	)


func _check_career_termination() -> void:
	if GameState == null:
		return

	var term: Dictionary = GameState.check_termination_conditions()
	if term.get("terminated", false):
		_show_termination_modal(term.get("data", {}))


func _show_termination_modal(data: Dictionary) -> void:
	if SoundManager != null:
		SoundManager.play_fail()

	var r_title: String = data.get("final_rank_title", "Veterinário")
	var cases_c: int = data.get("total_cases_attended", 0)
	var warn_c: int = data.get("total_warnings", 0)
	var rel_c: float = data.get("final_reliability", 0.0)
	var reason: String = data.get("reason", "Incompatibilidade profissional.")

	var lines: Array[String] = []
	lines.append("Seu vínculo profissional com a instituição foi encerrado.")
	lines.append("\nESTATÍSTICAS FINAIS DA CARREIRA:")
	lines.append(" • Cargo Final: " + r_title)
	lines.append(" • Casos Concluídos: " + str(cases_c))
	lines.append(" • Advertências Formais: " + str(warn_c))
	lines.append(" • Confiabilidade Final: " + str(int(rel_c)) + "%")
	lines.append("\nMOTIVO INSTITUCIONAL:")
	lines.append("  " + reason)

	termination_text_label.text = "\n".join(lines)

	termination_modal.visible = true
	var term_panel: Control = $TerminationModal/CenterContainer/ModalPanel
	UIAnimation.animate_modal_open(termination_modal, term_panel)


func _on_start_new_career_pressed() -> void:
	if SoundManager != null:
		SoundManager.play_ui_click()

	GameState.start_new_career()

	var term_panel: Control = $TerminationModal/CenterContainer/ModalPanel
	UIAnimation.animate_modal_close(termination_modal, term_panel, func():
		_update_header_stats()
		_update_career_ui()
		_populate_case_cards()
	)


# --- SISTEMA DE ARQUIVO INSTITUCIONAL & DIÁLOGOS (ETAPA 17) ---

func _on_archive_pressed() -> void:
	if SoundManager != null:
		SoundManager.play_ui_click()

	_populate_archive_docs()
	archive_modal.visible = true

	var panel: Control = $ArchiveModal/CenterContainer/ModalPanel
	UIAnimation.animate_modal_open(archive_modal, panel)


func _on_close_archive_pressed() -> void:
	if SoundManager != null:
		SoundManager.play_ui_click()

	var panel: Control = $ArchiveModal/CenterContainer/ModalPanel
	UIAnimation.animate_modal_close(archive_modal, panel)


func _populate_archive_docs() -> void:
	for child in doc_list_vbox.get_children():
		child.queue_free()

	if NarrativeManager == null:
		return

	var unlocked: Array[DocumentData] = NarrativeManager.get_unlocked_documents()

	if unlocked.is_empty():
		doc_category_label.text = ""
		doc_title_label.text = "Nenhum documento descoberto"
		doc_meta_label.text = ""
		doc_body_label.text = "Continue seus atendimentos no plantão para desbloquear registros institucionais e memorandos de triagem."
		return

	for doc in unlocked:
		var btn: Button = Button.new()
		btn.text = doc.title
		btn.custom_minimum_size = Vector2(0, 36)
		btn.alignment = HORIZONTAL_ALIGNMENT_LEFT
		UIAnimation.setup_button_hover(btn)
		btn.pressed.connect(func(): _display_document(doc))
		doc_list_vbox.add_child(btn)

	if unlocked.size() > 0:
		_display_document(unlocked[0])


func _display_document(doc: DocumentData) -> void:
	selected_doc = doc
	doc_category_label.text = doc.category.to_upper()
	doc_title_label.text = doc.title
	doc_meta_label.text = "Autor: " + doc.author + " | Data: " + doc.date_text
	doc_body_label.text = doc.content


func _show_dialogue(char_id: String, dialogue_text: String) -> void:
	if NarrativeManager == null:
		return

	var c_data: CharacterData = NarrativeManager.get_character_by_id(char_id)
	if c_data == null:
		return

	speaker_avatar_label.text = c_data.avatar_icon
	speaker_name_label.text = c_data.name
	speaker_role_label.text = c_data.role
	dialogue_text_label.text = dialogue_text

	dialogue_modal.visible = true
	var panel: Control = $DialogueModal/CenterContainer/ModalPanel
	UIAnimation.animate_modal_open(dialogue_modal, panel)


func _on_close_dialogue_pressed() -> void:
	if SoundManager != null:
		SoundManager.play_ui_click()

	var panel: Control = $DialogueModal/CenterContainer/ModalPanel
	UIAnimation.animate_modal_close(dialogue_modal, panel)


# --- SISTEMA DE COMPETÊNCIAS & CERTIFICAÇÕES (ETAPA 18) ---

func _on_competencies_pressed() -> void:
	if SoundManager != null:
		SoundManager.play_ui_click()

	is_evaluating = false
	_populate_competencies_list()
	competency_modal.visible = true

	var panel: Control = $CompetencyModal/CenterContainer/ModalPanel
	UIAnimation.animate_modal_open(competency_modal, panel)


func _on_close_comp_pressed() -> void:
	if SoundManager != null:
		SoundManager.play_ui_click()

	var panel: Control = $CompetencyModal/CenterContainer/ModalPanel
	UIAnimation.animate_modal_close(competency_modal, panel, func():
		_update_career_ui()
		_populate_case_cards()
	)


func _populate_competencies_list() -> void:
	for child in comp_list_vbox.get_children():
		child.queue_free()

	if CertificationManager == null:
		return

	var list: Array[CompetencyData] = CertificationManager.get_all_competencies()

	for comp in list:
		var btn: Button = Button.new()
		var is_cert: bool = GameState.has_certification(comp.competency_id)
		var is_unlocked: bool = CertificationManager.is_competency_unlocked_for_training(
			comp,
			GameState.rank_index,
			GameState.reputation,
			NarrativeManager.current_chapter_order
		)

		if is_cert:
			btn.text = "✓ " + comp.title
		elif is_unlocked:
			btn.text = "📚 " + comp.title
		else:
			btn.text = "🔒 " + comp.title

		btn.custom_minimum_size = Vector2(0, 36)
		btn.alignment = HORIZONTAL_ALIGNMENT_LEFT
		UIAnimation.setup_button_hover(btn)
		btn.pressed.connect(func(): _display_competency_details(comp))
		comp_list_vbox.add_child(btn)

	if list.size() > 0:
		_display_competency_details(list[0])


func _display_competency_details(comp: CompetencyData) -> void:
	selected_comp = comp
	is_evaluating = false
	selected_comp_title_label.text = comp.title

	var is_cert: bool = GameState.has_certification(comp.competency_id)
	var is_unlocked: bool = CertificationManager.is_competency_unlocked_for_training(
		comp,
		GameState.rank_index,
		GameState.reputation,
		NarrativeManager.current_chapter_order
	)

	for child in eval_options_container.get_children():
		child.queue_free()

	if is_cert:
		selected_comp_status_label.text = "✓ CERTIFICAÇÃO OBTIDA (Equipamento & Permissão Concedidos)"
		selected_comp_status_label.add_theme_color_override("font_color", Color(0.4, 0.85, 0.6))
		comp_desc_label.text = comp.description + "\n\n" + comp.training_content
		start_training_button.visible = false

	elif is_unlocked:
		selected_comp_status_label.text = "📚 TREINAMENTO E AVALIAÇÃO DISPONÍVEIS"
		selected_comp_status_label.add_theme_color_override("font_color", Color(0.95, 0.8, 0.3))
		comp_desc_label.text = comp.description + "\n\n" + comp.training_content
		start_training_button.visible = true
		start_training_button.text = "📝 INICIAR AVALIAÇÃO DE TREINAMENTO"

	else:
		selected_comp_status_label.text = "🔒 BLOQUEADO (Requer Requisitos de Carreira)"
		selected_comp_status_label.add_theme_color_override("font_color", Color(0.85, 0.45, 0.45))

		var req_r_info: Dictionary = CareerData.get_rank_by_index(comp.required_rank)
		comp_desc_label.text = comp.description + "\n\nREQUISITOS DE CAPACITAÇÃO:\n" \
			+ " • Cargo Mínimo: " + req_r_info.get("title", "") + "\n" \
			+ " • Reputação: " + str(comp.required_reputation) + " XP\n" \
			+ " • Capítulo da Campanha: " + str(comp.required_chapter)

		start_training_button.visible = false


func _on_start_training_pressed() -> void:
	if selected_comp == null:
		return

	if SoundManager != null:
		SoundManager.play_ui_click()

	is_evaluating = true
	start_training_button.visible = false
	selected_comp_status_label.text = "📝 AVALIAÇÃO EM ANDAMENTO"
	selected_comp_status_label.add_theme_color_override("font_color", Color(0.4, 0.85, 0.95))

	comp_desc_label.text = selected_comp.evaluation_question

	for child in eval_options_container.get_children():
		child.queue_free()

	var idx: int = 0

	for opt in selected_comp.evaluation_options:
		var btn: Button = Button.new()
		btn.text = opt
		btn.custom_minimum_size = Vector2(0, 36)
		btn.alignment = HORIZONTAL_ALIGNMENT_LEFT
		UIAnimation.setup_button_hover(btn)

		var current_idx: int = idx
		btn.pressed.connect(func(): _on_eval_option_selected(current_idx))
		eval_options_container.add_child(btn)
		idx += 1


func _on_eval_option_selected(option_index: int) -> void:
	if selected_comp == null or not is_evaluating:
		return

	if option_index == selected_comp.correct_option_index:
		if SoundManager != null:
			SoundManager.play_success()

		GameState.complete_certification(selected_comp.competency_id)
		_show_case_select_toast("📜 CERTIFICAÇÃO CONCLUÍDA: " + selected_comp.title.to_upper())

		_display_competency_details(selected_comp)
		_populate_competencies_list()
		_update_career_ui()
		_populate_case_cards()

		_show_dialogue(
			"dr_augusto",
			"Parabéns pela certificação em " + selected_comp.title + ". Você agora está autorizado a utilizar o novo equipamento nos plantões do CARFS."
		)

	else:
		if SoundManager != null:
			SoundManager.play_fail()

		_show_case_select_toast("💡 REAVALIAÇÃO NECESSÁRIA (Sem penalidade)")
		comp_desc_label.text = "⚠ RESPOSTA INCORRETA:\n\n" + selected_comp.educational_explanation + "\n\nRevise as recomendações e tente a avaliação novamente!"


# --- POPULAÇÃO DE CARDS DE CASOS ---

func _populate_case_cards() -> void:
	for child in cards_container.get_children():
		child.queue_free()

	var cases: Array[CaseData] = CaseRegistry.load_all_cases()

	cases.sort_custom(func(a: CaseData, b: CaseData):
		return a.shift_priority > b.shift_priority
	)

	var idx: int = 0

	for case_item in cases:
		var card: PanelContainer = _create_card_for_case(case_item)
		cards_container.add_child(card)
		UIAnimation.animate_panel_entry(card, idx * 0.08)
		idx += 1


func _create_card_for_case(case: CaseData) -> PanelContainer:
	var card: PanelContainer = PanelContainer.new()
	card.custom_minimum_size = Vector2(348, 540)

	var lock_reason: String = GameState.get_case_lock_reason(case)
	var is_unlocked: bool = lock_reason.is_empty()
	var stars: int = GameState.get_stars_for_case(case.case_id)

	var style: StyleBoxFlat = StyleBoxFlat.new()
	style.corner_radius_top_left = 16
	style.corner_radius_top_right = 16
	style.corner_radius_bottom_right = 16
	style.corner_radius_bottom_left = 16
	style.shadow_size = 14
	style.shadow_offset = Vector2(0, 5)
	style.shadow_color = Color(0.0, 0.0, 0.0, 0.38)

	if is_unlocked:
		style.bg_color = Color(0.075, 0.115, 0.15, 0.97)
		style.border_width_left = 2
		style.border_width_top = 2
		style.border_width_right = 2
		style.border_width_bottom = 2
		style.border_color = _get_priority_color(case.shift_priority, 0.82)
	else:
		style.bg_color = Color(0.055, 0.065, 0.08, 0.95)
		style.border_width_left = 1
		style.border_width_top = 1
		style.border_width_right = 1
		style.border_width_bottom = 1
		style.border_color = Color(0.18, 0.2, 0.25)

	card.add_theme_stylebox_override("panel", style)

	var margin: MarginContainer = MarginContainer.new()
	margin.add_theme_constant_override("margin_left", 18)
	margin.add_theme_constant_override("margin_top", 16)
	margin.add_theme_constant_override("margin_right", 18)
	margin.add_theme_constant_override("margin_bottom", 16)
	card.add_child(margin)

	var vbox: VBoxContainer = VBoxContainer.new()
	vbox.add_theme_constant_override("separation", 9)
	margin.add_child(vbox)

	var triage_label: Label = Label.new()
	triage_label.text = "FICHA DE TRIAGEM  •  " + case.patient_code
	triage_label.add_theme_font_size_override("font_size", 10)
	triage_label.add_theme_color_override("font_color", Color(0.5, 0.68, 0.74))
	triage_label.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	vbox.add_child(triage_label)

	var priority_badge: Label = Label.new()
	priority_badge.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	priority_badge.add_theme_font_size_override("font_size", 10)
	priority_badge.add_theme_stylebox_override("normal", _make_chip_style(_get_priority_color(case.shift_priority, 0.18), _get_priority_color(case.shift_priority, 0.72)))

	if case.shift_priority == 2:
		priority_badge.text = "🔴 PRIORIDADE ALTA — URGÊNCIA CLÍNICA"
		priority_badge.add_theme_color_override("font_color", Color(1.0, 0.4, 0.4))
	elif case.shift_priority == 1:
		priority_badge.text = "🟠 PRIORIDADE MÉDIA — CASO IMPORTANTE"
		priority_badge.add_theme_color_override("font_color", Color(1.0, 0.7, 0.3))
	else:
		priority_badge.text = "🟢 PRIORIDADE NORMAL — FLUXO REGULAR"
		priority_badge.add_theme_color_override("font_color", Color(0.5, 0.85, 0.6))

	vbox.add_child(priority_badge)

	var badge: Label = Label.new()
	badge.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	badge.add_theme_font_size_override("font_size", 11)

	if not is_unlocked:
		badge.text = lock_reason
		badge.add_theme_color_override("font_color", Color(0.96, 0.56, 0.5))
	elif stars > 0:
		badge.text = "✓ CONCLUÍDO (" + "★".repeat(stars) + "☆".repeat(5 - stars) + ")"
		badge.add_theme_color_override("font_color", Color(0.4, 0.8, 0.5))
	else:
		badge.text = "📋 AGUARDANDO ATENDIMENTO"
		badge.add_theme_color_override("font_color", Color(0.4, 0.7, 1.0))

	vbox.add_child(badge)

	var image_frame: PanelContainer = PanelContainer.new()
	image_frame.custom_minimum_size = Vector2(0, 152)
	image_frame.add_theme_stylebox_override("panel", _make_image_frame_style(is_unlocked))
	vbox.add_child(image_frame)

	var img_rect: TextureRect = TextureRect.new()
	img_rect.custom_minimum_size = Vector2(0, 152)
	img_rect.expand_mode = TextureRect.EXPAND_IGNORE_SIZE
	img_rect.stretch_mode = TextureRect.STRETCH_KEEP_ASPECT_COVERED

	if case.image_texture != null:
		img_rect.texture = case.image_texture
	else:
		var placeholder: Label = Label.new()
		placeholder.text = "🐾\nIMAGEM CLÍNICA\nEM ATUALIZAÇÃO"
		placeholder.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
		placeholder.vertical_alignment = VERTICAL_ALIGNMENT_CENTER
		placeholder.add_theme_font_size_override("font_size", 12)
		placeholder.add_theme_color_override("font_color", Color(0.49, 0.66, 0.66))
		placeholder.mouse_filter = Control.MOUSE_FILTER_IGNORE
		img_rect.add_child(placeholder)

	image_frame.add_child(img_rect)

	var species_label: Label = Label.new()
	species_label.text = case.species_name
	species_label.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	species_label.add_theme_font_size_override("font_size", 17)
	species_label.add_theme_color_override("font_color", Color(0.95, 0.97, 1.0))
	vbox.add_child(species_label)

	var sci_label: Label = Label.new()
	sci_label.text = "(" + case.scientific_name + ")"
	sci_label.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	sci_label.add_theme_font_size_override("font_size", 11)
	sci_label.add_theme_color_override("font_color", Color(0.65, 0.72, 0.82))
	vbox.add_child(sci_label)

	var sep: HSeparator = HSeparator.new()
	vbox.add_child(sep)

	var info_box: VBoxContainer = VBoxContainer.new()
	info_box.add_theme_constant_override("separation", 3)

	var diff_stars: String = "★".repeat(case.difficulty) + "☆".repeat(max(0, 5 - case.difficulty))
	var min_rank_info: Dictionary = CareerData.get_rank_by_index(case.minimum_rank)

	info_box.add_child(_create_info_row("Cargo Mínimo:", min_rank_info.get("title", "Estagiário")))
	info_box.add_child(_create_info_row("Dificuldade:", diff_stars))
	info_box.add_child(_create_info_row("Orçamento:", "R$ " + str(int(case.case_budget))))
	info_box.add_child(_create_info_row("Recompensa Base:", "+" + str(case.reputation_reward) + " XP"))

	vbox.add_child(info_box)

	var spacer: Control = Control.new()
	spacer.size_flags_vertical = Control.SIZE_EXPAND_FILL
	vbox.add_child(spacer)

	var action_btn: Button = Button.new()
	action_btn.custom_minimum_size = Vector2(0, 46)
	_apply_case_action_style(action_btn, is_unlocked)

	if is_unlocked:
		if GameState.is_shift_active():
			action_btn.text = "🩺 ATENDER PACIENTE"
		else:
			action_btn.text = "🩺 INICIAR PLANTÃO PARA ATENDER"

		UIAnimation.setup_button_hover(action_btn)
		action_btn.pressed.connect(func(): _start_selected_case(case))
	else:
		action_btn.text = lock_reason
		action_btn.disabled = true

	vbox.add_child(action_btn)

	return card


func _get_priority_color(priority: int, alpha: float = 1.0) -> Color:
	if priority >= 2:
		return Color(0.96, 0.35, 0.28, alpha)
	if priority == 1:
		return Color(0.96, 0.66, 0.22, alpha)
	return Color(0.25, 0.72, 0.57, alpha)


func _make_chip_style(background: Color, border: Color) -> StyleBoxFlat:
	var style := StyleBoxFlat.new()
	style.bg_color = background
	style.border_width_left = 1
	style.border_width_top = 1
	style.border_width_right = 1
	style.border_width_bottom = 1
	style.border_color = border
	style.corner_radius_top_left = 6
	style.corner_radius_top_right = 6
	style.corner_radius_bottom_left = 6
	style.corner_radius_bottom_right = 6
	style.content_margin_top = 5
	style.content_margin_bottom = 5
	return style


func _make_image_frame_style(is_unlocked: bool) -> StyleBoxFlat:
	var style := StyleBoxFlat.new()
	style.bg_color = Color(0.025, 0.045, 0.055, 0.95)
	style.border_width_left = 1
	style.border_width_top = 1
	style.border_width_right = 1
	style.border_width_bottom = 1
	style.border_color = Color(0.24, 0.53, 0.49, 0.8) if is_unlocked else Color(0.22, 0.25, 0.29, 0.9)
	style.corner_radius_top_left = 10
	style.corner_radius_top_right = 10
	style.corner_radius_bottom_left = 10
	style.corner_radius_bottom_right = 10
	style.content_margin_left = 1
	style.content_margin_top = 1
	style.content_margin_right = 1
	style.content_margin_bottom = 1
	return style


func _apply_case_action_style(button: Button, is_unlocked: bool) -> void:
	var normal := StyleBoxFlat.new()
	normal.corner_radius_top_left = 10
	normal.corner_radius_top_right = 10
	normal.corner_radius_bottom_left = 10
	normal.corner_radius_bottom_right = 10
	normal.content_margin_top = 10
	normal.content_margin_bottom = 10
	var hover := normal.duplicate() as StyleBoxFlat
	if is_unlocked:
		normal.bg_color = Color(0.12, 0.52, 0.41, 1.0)
		hover.bg_color = Color(0.18, 0.66, 0.51, 1.0)
		button.add_theme_color_override("font_color", Color.WHITE)
	else:
		normal.bg_color = Color(0.18, 0.2, 0.23, 1.0)
		hover.bg_color = normal.bg_color
		button.add_theme_color_override("font_color", Color(0.55, 0.58, 0.62))
	button.add_theme_stylebox_override("normal", normal)
	button.add_theme_stylebox_override("hover", hover)
	button.add_theme_font_size_override("font_size", 13)


func _create_info_row(label_text: String, val_text: String) -> HBoxContainer:
	var hbox: HBoxContainer = HBoxContainer.new()

	var lbl: Label = Label.new()
	lbl.text = label_text
	lbl.add_theme_font_size_override("font_size", 11)
	lbl.add_theme_color_override("font_color", Color(0.65, 0.72, 0.8))
	lbl.size_flags_horizontal = Control.SIZE_EXPAND_FILL
	hbox.add_child(lbl)

	var val: Label = Label.new()
	val.text = val_text
	val.add_theme_font_size_override("font_size", 11)
	val.add_theme_color_override("font_color", Color(0.9, 0.95, 1.0))
	hbox.add_child(val)

	return hbox


func _start_selected_case(case: CaseData) -> void:
	if is_transitioning:
		return

	is_transitioning = true

	if SoundManager != null:
		SoundManager.play_ui_click()

	if GameState != null:
		GameState.selected_case = case

		if not GameState.is_shift_active():
			GameState.start_shift()

	var tween: Tween = create_tween()
	tween.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_IN)
	tween.tween_property(self, "modulate:a", 0.0, 0.25)
	tween.tween_callback(func():
		# A clínica isométrica é a sala de preparo do caso escolhido. Ela não
		# deve montar uma fila paralela nem ignorar os bloqueios da carreira.
		get_tree().change_scene_to_file("res://scenes/clinic_2d.tscn")
	)


func _on_menu_pressed() -> void:
	if is_transitioning:
		return

	is_transitioning = true

	if SoundManager != null:
		SoundManager.play_ui_click()

	var tween: Tween = create_tween()
	tween.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_IN)
	tween.tween_property(self, "modulate:a", 0.0, 0.25)
	tween.tween_callback(func():
		get_tree().change_scene_to_file("res://scenes/main_menu.tscn")
	)


func _on_settings_pressed() -> void:
	if settings_modal != null and settings_modal.has_method("open_modal"):
		settings_modal.open_modal(false)
