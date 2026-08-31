extends Control

## Clínica 2D Isométrica — Hub Principal do MedZoo
## Gerencia fila de pacientes, navegação visual e abertura do motor clínico existente.
## O motor clínico (clinic.gd) é carregado como overlay fullscreen ao atender um paciente.

# --- Referências do HUD Superior ---
@onready var money_label: Label = %MoneyLabel
@onready var clock_label: Label = %ClockLabel
@onready var reliability_label: Label = %ReliabilityLabel
@onready var rank_label: Label = %RankLabel

# --- Cenário e Personagem ---
@onready var clinic_bg: TextureRect = %ClinicBG
@onready var vet_sprite: TextureRect = %VetSprite
@onready var patient_sprite: TextureRect = %PatientSprite
@onready var patient_name_label: Label = %PatientNameLabel
@onready var patient_species_label: Label = %PatientSpeciesLabel
@onready var patient_reason_label: Label = %PatientReasonLabel

# --- Botões de Ação ---
@onready var attend_button: Button = %AttendButton
@onready var next_patient_btn: Button = %NextPatientBtn
@onready var menu_button: Button = %MenuButton

# --- Fila de Pacientes Visual ---
@onready var queue_container: HBoxContainer = %QueueContainer

# --- Overlay Clínico ---
@onready var clinical_overlay: CanvasLayer = %ClinicalOverlay
@onready var clinic_container: Control = %ClinicContainer

# --- Estado ---
var patient_queue: Array = []
var current_patient_index: int = 0
var is_attending: bool = false

func _ready() -> void:
	# Fade in suave
	modulate.a = 0.0
	var tween_in: Tween = create_tween()
	tween_in.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_OUT)
	tween_in.tween_property(self, "modulate:a", 1.0, 0.4)
	
	# Esta cena é uma sala de preparo para o caso escolhido no painel de
	# carreira. Antes ela carregava todos os casos, ignorando bloqueios,
	# certificações e a escolha do jogador.
	if GameState != null and GameState.selected_case != null:
		patient_queue = [GameState.selected_case]
	else:
		patient_queue = CaseRegistry.load_all_cases()
	
	# Configura botões
	attend_button.pressed.connect(_on_attend_pressed)
	menu_button.pressed.connect(_on_menu_pressed)
	if next_patient_btn != null:
		# A ordem dos casos é decidida no painel de carreira; trocar paciente
		# aqui permitia contornar bloqueios e deixava um botão sem propósito.
		next_patient_btn.visible = false
	
	# Hover de botões
	UIAnimation.setup_button_hover(attend_button)
	UIAnimation.setup_button_hover(menu_button)
	if next_patient_btn != null:
		UIAnimation.setup_button_hover(next_patient_btn)
	
	# Exibe primeiro paciente
	_show_current_patient()
	_update_hud()
	_update_queue_display()
	
	# Animação idle do vet
	_start_vet_idle_animation()

func _process(_delta: float) -> void:
	_update_hud()

# ============================================================================
# EXIBIÇÃO DE PACIENTE
# ============================================================================

func _show_current_patient() -> void:
	if patient_queue.is_empty():
		_show_shift_complete()
		return
		
	if current_patient_index >= patient_queue.size():
		_show_shift_complete()
		return
		
	var c_data: CaseData = patient_queue[current_patient_index]
	
	var rank_tag: String = _get_rank_title_for_index(c_data.minimum_rank)
	patient_name_label.text = c_data.patient_code + "  [" + rank_tag + "]"
	patient_species_label.text = "🐾 " + c_data.species_name + " (" + c_data.scientific_name + ")"
	
	# Motivo da chegada (truncado para preview)
	var reason_text: String = c_data.arrival_reason
	if reason_text.length() > 120:
		reason_text = reason_text.substr(0, 117) + "..."
	patient_reason_label.text = "📋 " + reason_text
	
	# Sprite do paciente
	if c_data.image_texture != null:
		patient_sprite.texture = c_data.image_texture
	
	# Animação de entrada do paciente
	patient_sprite.modulate.a = 0.0
	patient_sprite.scale = Vector2(0.8, 0.8)
	var tween: Tween = create_tween()
	tween.set_trans(Tween.TRANS_BACK).set_ease(Tween.EASE_OUT)
	tween.set_parallel(true)
	tween.tween_property(patient_sprite, "modulate:a", 1.0, 0.3)
	tween.tween_property(patient_sprite, "scale", Vector2(1.0, 1.0), 0.4)
	
	# Info labels animação
	UIAnimation.animate_panel_entry(patient_name_label, 0.05)
	UIAnimation.animate_panel_entry(patient_species_label, 0.10)
	UIAnimation.animate_panel_entry(patient_reason_label, 0.15)
	
	# Habilita botão de atendimento
	attend_button.disabled = false
	attend_button.text = "🩺  ATENDER PACIENTE (" + c_data.species_name + ")"
	
	if SoundManager != null:
		SoundManager.play_ui_click()

func _show_shift_complete() -> void:
	patient_name_label.text = "📋 Nenhum caso selecionado"
	patient_species_label.text = "Escolha um paciente no painel de plantão."
	patient_reason_label.text = "A carreira controla os casos, equipamentos e progressão."
	attend_button.disabled = false
	attend_button.text = "📋  SELECIONAR CASO"

# ============================================================================
# HUD
# ============================================================================

func _update_hud() -> void:
	if GameState != null:
		clock_label.text = "🕒 " + GameState.get_formatted_shift_time(510)
		var rel_info: Dictionary = GameState.get_reliability_status()
		reliability_label.text = "🛡️ " + str(int(rel_info.reliability)) + "%"
		var funds: float = 350.0
		if GameState.selected_case != null:
			funds = GameState.selected_case.case_budget
		money_label.text = "💰 R$ " + str(int(funds))
		
		var rank_info: Dictionary = GameState.get_current_rank()
		rank_label.text = "🎖️ " + rank_info.get("title", "Estagiário(a)")
	else:
		clock_label.text = "🕒 08:30"
		reliability_label.text = "🛡️ 100%"
		money_label.text = "💰 R$ 350"
		rank_label.text = "🎖️ Estagiário(a)"

func _update_queue_display() -> void:
	# Limpa fila visual
	for child in queue_container.get_children():
		child.queue_free()
	
	# Adiciona miniaturas dos pacientes na fila
	for i in range(patient_queue.size()):
		var case_data: CaseData = patient_queue[i]
		var slot: PanelContainer = PanelContainer.new()
		slot.custom_minimum_size = Vector2(64, 64)
		
		var style: StyleBoxFlat = StyleBoxFlat.new()
		if i == current_patient_index:
			style.bg_color = Color(0.173, 0.478, 0.369, 0.9)  # Verde-água ativo
		elif i < current_patient_index:
			style.bg_color = Color(0.4, 0.4, 0.4, 0.5)  # Cinza já atendido
		else:
			style.bg_color = Color(0.2, 0.2, 0.2, 0.7)  # Escuro aguardando
		style.corner_radius_top_left = 8
		style.corner_radius_top_right = 8
		style.corner_radius_bottom_left = 8
		style.corner_radius_bottom_right = 8
		slot.add_theme_stylebox_override("panel", style)
		
		var vbox: VBoxContainer = VBoxContainer.new()
		vbox.alignment = BoxContainer.ALIGNMENT_CENTER
		
		var emoji_label: Label = Label.new()
		emoji_label.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
		if i < current_patient_index:
			emoji_label.text = "✅"
		elif i == current_patient_index:
			emoji_label.text = "🩺"
		else:
			emoji_label.text = "🐾"
		emoji_label.add_theme_font_size_override("font_size", 22)
		vbox.add_child(emoji_label)
		
		var name_lbl: Label = Label.new()
		name_lbl.text = case_data.species_name.get_slice(" ", 0)  # Primeiro nome
		name_lbl.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
		name_lbl.add_theme_font_size_override("font_size", 9)
		name_lbl.add_theme_color_override("font_color", Color(0.85, 0.85, 0.82))
		vbox.add_child(name_lbl)
		
		slot.add_child(vbox)
		queue_container.add_child(slot)

# ============================================================================
# AÇÕES
# ============================================================================

func _on_attend_pressed() -> void:
	if patient_queue.is_empty():
		get_tree().change_scene_to_file("res://scenes/case_select.tscn")
		return
	if is_attending:
		return
	if current_patient_index >= patient_queue.size():
		return
	
	is_attending = true
	var c_data: CaseData = patient_queue[current_patient_index]
	
	if SoundManager != null:
		SoundManager.play_success()
	
	# Configura GameState
	if GameState != null:
		GameState.selected_case = c_data
	
	# Carrega clinic.tscn como overlay
	for child in clinic_container.get_children():
		child.queue_free()
	
	var clinic_scene: PackedScene = load("res://scenes/clinic.tscn")
	if clinic_scene == null:
		is_attending = false
		return
	
	var clinic_inst: Control = clinic_scene.instantiate()
	clinic_inst.current_case = c_data
	
	# Conecta sinal de conclusão se existir
	if clinic_inst.has_signal("case_completed"):
		clinic_inst.case_completed.connect(_on_case_completed)
	
	clinic_container.add_child(clinic_inst)
	clinical_overlay.visible = true

func _on_case_completed(successfully: bool) -> void:
	# Fecha overlay clínico
	clinical_overlay.visible = false
	for child in clinic_container.get_children():
		child.queue_free()
	
	is_attending = false
	if successfully:
		# Recompensas, resumo do atendimento e próximos desbloqueios são
		# apresentados pelo painel de carreira.
		get_tree().change_scene_to_file("res://scenes/case_select.tscn")
	else:
		UIAnimation.show_toast(self, Label.new(), "Atendimento cancelado. O caso continua disponível no plantão.")

func _on_menu_pressed() -> void:
	if SoundManager != null:
		SoundManager.play_ui_click()
	
	var tween: Tween = create_tween()
	tween.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_IN)
	tween.tween_property(self, "modulate:a", 0.0, 0.25)
	tween.tween_callback(func():
		get_tree().change_scene_to_file("res://scenes/main_menu.tscn")
	)

# ============================================================================
# ANIMAÇÕES
# ============================================================================

func _get_rank_title_for_index(r_index: int) -> String:
	match r_index:
		0: return "🎓 Estagiário(a)"
		1: return "🩺 Assistente"
		2: return "🔬 Júnior"
		3: return "⚕️ Pleno"
		4: return "👑 Sênior"
		_: return "⭐ Chefe"

func _start_vet_idle_animation() -> void:
	if vet_sprite == null:
		return
	var idle_tween: Tween = create_tween()
	idle_tween.set_loops()
	idle_tween.set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_IN_OUT)
	idle_tween.tween_property(vet_sprite, "position:y", vet_sprite.position.y - 3.0, 1.2)
	idle_tween.tween_property(vet_sprite, "position:y", vet_sprite.position.y, 1.2)
