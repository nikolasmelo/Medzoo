class_name UIAnimation
extends Node

## Sistema Global de Microanimações, Transições e Feedback Visual do MedZoo.
## Implementa animações de entrada escalonada, barras dinâmicas, efeitos de orçamento,
## pulsos de estresse, tremores de erro e transições de cena premium.

static func setup_button_hover(btn: Button, scale_hover: float = 1.02, scale_pressed: float = 0.98) -> void:
	if btn == null:
		return
		
	btn.pivot_offset = btn.size / 2.0
	btn.resized.connect(func(): if is_instance_valid(btn): btn.pivot_offset = btn.size / 2.0)
	
	btn.mouse_entered.connect(func():
		if is_instance_valid(btn) and not btn.disabled:
			var tween: Tween = btn.create_tween()
			tween.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_OUT)
			tween.tween_property(btn, "scale", Vector2(scale_hover, scale_hover), 0.1)
	)
	
	btn.mouse_exited.connect(func():
		if is_instance_valid(btn):
			var tween: Tween = btn.create_tween()
			tween.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_OUT)
			tween.tween_property(btn, "scale", Vector2.ONE, 0.1)
	)
	
	btn.button_down.connect(func():
		if is_instance_valid(btn) and not btn.disabled:
			var tween: Tween = btn.create_tween()
			tween.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_OUT)
			tween.tween_property(btn, "scale", Vector2(scale_pressed, scale_pressed), 0.08)
	)
	
	btn.button_up.connect(func():
		if is_instance_valid(btn):
			var tween: Tween = btn.create_tween()
			tween.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_OUT)
			var target_scale: Vector2 = Vector2(scale_hover, scale_hover) if btn.is_hovered() else Vector2.ONE
			tween.tween_property(btn, "scale", target_scale, 0.08)
	)

static func animate_modal_open(modal: Control, panel: Control) -> void:
	if modal == null or panel == null:
		return
		
	modal.visible = true
	modal.modulate.a = 0.0
	
	panel.pivot_offset = panel.size / 2.0
	panel.scale = Vector2(0.92, 0.92)
	
	var tween: Tween = modal.create_tween().set_parallel(true)
	tween.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_OUT)
	tween.tween_property(modal, "modulate:a", 1.0, 0.22)
	tween.tween_property(panel, "scale", Vector2.ONE, 0.25)

static func animate_modal_close(modal: Control, panel: Control, on_complete: Callable = Callable()) -> void:
	if modal == null or panel == null:
		if on_complete.is_valid():
			on_complete.call()
		return
		
	panel.pivot_offset = panel.size / 2.0
	
	var tween: Tween = modal.create_tween().set_parallel(true)
	tween.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_IN)
	tween.tween_property(modal, "modulate:a", 0.0, 0.18)
	tween.tween_property(panel, "scale", Vector2(0.92, 0.92), 0.18)
	
	tween.chain().tween_callback(func():
		modal.visible = false
		panel.scale = Vector2.ONE
		if on_complete.is_valid():
			on_complete.call()
	)

static func show_toast(parent_node: Control, _unused_label: Label, message: String) -> void:
	if parent_node == null:
		return
		
	var toast_banner: PanelContainer = PanelContainer.new()
	toast_banner.mouse_filter = Control.MOUSE_FILTER_IGNORE
	
	var style: StyleBoxFlat = StyleBoxFlat.new()
	style.bg_color = Color(0.12, 0.22, 0.18, 0.95)
	style.border_width_left = 3
	style.border_color = Color(0.4, 0.8, 0.5, 1.0)
	style.corner_radius_top_left = 8
	style.corner_radius_top_right = 8
	style.corner_radius_bottom_left = 8
	style.corner_radius_bottom_right = 8
	style.content_margin_left = 16
	style.content_margin_top = 10
	style.content_margin_right = 16
	style.content_margin_bottom = 10
	toast_banner.add_theme_stylebox_override("panel", style)
	
	var lbl: Label = Label.new()
	lbl.text = message
	lbl.add_theme_color_override("font_color", Color(0.95, 0.95, 0.92))
	lbl.add_theme_font_size_override("font_size", 13)
	toast_banner.add_child(lbl)
	
	parent_node.add_child(toast_banner)
	
	# Posiciona centralizado no topo do container
	toast_banner.anchor_left = 0.5
	toast_banner.anchor_right = 0.5
	toast_banner.anchor_top = 0.0
	toast_banner.offset_top = 60.0
	toast_banner.grow_horizontal = Control.GROW_DIRECTION_BOTH
	
	toast_banner.modulate.a = 0.0
	var tween_in: Tween = toast_banner.create_tween()
	tween_in.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_OUT)
	tween_in.tween_property(toast_banner, "modulate:a", 1.0, 0.3)
	
	var timer: SceneTreeTimer = parent_node.get_tree().create_timer(2.6)
	timer.timeout.connect(func():
		if is_instance_valid(toast_banner):
			var tween_out: Tween = toast_banner.create_tween()
			tween_out.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_IN)
			tween_out.tween_property(toast_banner, "modulate:a", 0.0, 0.3)
			tween_out.tween_callback(func(): toast_banner.queue_free())
	)

# --- NOVAS ANIMAÇÕES & FEEDBACKS DA ETAPA 12 ---

static func animate_panel_entry(node: Control, delay: float = 0.0) -> void:
	if node == null:
		return

	# Containers do Godot controlam a posição dos filhos.
	# Por isso, não devemos alterar position/position:y aqui.
	# Usamos apenas modulate + scale para evitar conflito com VBoxContainer/HBoxContainer.

	node.modulate.a = 0.0
	node.scale = Vector2(0.97, 0.97)

	# Garante que a escala aconteça a partir do centro.
	node.pivot_offset = node.size / 2.0

	var tween: Tween = node.create_tween().set_parallel(true)
	tween.set_trans(Tween.TRANS_CUBIC)
	tween.set_ease(Tween.EASE_OUT)

	var tw_alpha: PropertyTweener = tween.tween_property(
		node,
		"modulate:a",
		1.0,
		0.28
	)

	var tw_scale: PropertyTweener = tween.tween_property(
		node,
		"scale",
		Vector2.ONE,
		0.30
	)

	if delay > 0.0:
		tw_alpha.set_delay(delay)
		tw_scale.set_delay(delay)


static func animate_staggered_entrance(container: Control, delay_step: float = 0.06) -> void:
	if container == null:
		return
		
	var idx: int = 0
	for child in container.get_children():
		if child is Control:
			animate_panel_entry(child as Control, idx * delay_step)
			idx += 1

static func animate_stress_bar(progress_bar: ProgressBar, from_val: float, to_val: float) -> void:
	if progress_bar == null:
		return
		
	var tween: Tween = progress_bar.create_tween()
	tween.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_OUT)
	tween.tween_method(func(v: float):
		progress_bar.value = v
		
		# Atualiza cor do StyleBoxFlat de acordo com o nível
		var fill_style: StyleBoxFlat = StyleBoxFlat.new()
		fill_style.corner_radius_top_left = 4
		fill_style.corner_radius_top_right = 4
		fill_style.corner_radius_bottom_right = 4
		fill_style.corner_radius_bottom_left = 4
		
		if v <= 40.0:
			fill_style.bg_color = Color(0.37, 0.49, 0.38) # Verde Tranquilo
		elif v <= 75.0:
			fill_style.bg_color = Color(0.78, 0.60, 0.23) # Amarelo Dourado Atenção
		else:
			fill_style.bg_color = Color(0.66, 0.29, 0.26) # Vermelho Alerta
			
		progress_bar.add_theme_stylebox_override("fill", fill_style)
	, from_val, to_val, 0.4)

static func animate_clock_change(clock_label: Label, from_mins: int, to_mins: int) -> void:
	if clock_label == null:
		return
		
	var tween: Tween = clock_label.create_tween()
	tween.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_OUT)
	tween.tween_method(func(m: float):
		var mins_int: int = int(m)
		var hours: int = mins_int / 60
		var mins: int = mins_int % 60
		clock_label.text = "🕒 " + "%02d:%02d" % [hours, mins]
	, float(from_mins), float(to_mins), 0.35)

static func show_floating_budget_deduction(parent_node: Control, amount: float) -> void:
	if parent_node == null:
		return
		
	var float_label: Label = Label.new()
	float_label.text = "- R$ " + str(int(amount))
	float_label.add_theme_font_size_override("font_size", 14)
	float_label.add_theme_color_override("font_color", Color(0.9, 0.3, 0.3))
	
	parent_node.add_child(float_label)
	float_label.position = Vector2(10, -20)
	
	var tween: Tween = float_label.create_tween().set_parallel(true)
	tween.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_OUT)
	tween.tween_property(float_label, "position:y", -45.0, 0.7)
	tween.tween_property(float_label, "modulate:a", 0.0, 0.7)
	
	tween.chain().tween_callback(func(): float_label.queue_free())

static func animate_dark_room_effect(overlay: ColorRect) -> void:
	if overlay == null:
		return
		
	overlay.visible = true
	overlay.color = Color(0.02, 0.04, 0.06, 0.0)
	
	var tween: Tween = overlay.create_tween()
	tween.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_OUT)
	tween.tween_property(overlay, "color:a", 0.65, 0.25)
	tween.tween_property(overlay, "color:a", 0.0, 0.35)
	tween.tween_callback(func(): overlay.visible = false)

static func shake_node(node: Control, intensity: float = 8.0, duration: float = 0.25) -> void:
	if node == null:
		return
		
	var orig_pos: Vector2 = node.position
	var tween: Tween = node.create_tween()
	var steps: int = 5
	var step_dur: float = duration / float(steps)
	
	for i in range(steps):
		var offset: Vector2 = Vector2(
			randf_range(-intensity, intensity),
			randf_range(-intensity, intensity)
		)
		tween.tween_property(node, "position", orig_pos + offset, step_dur)
		
	tween.tween_property(node, "position", orig_pos, step_dur)

static func animate_treatment_unlock(lock_label: Control, container: Control) -> void:
	if lock_label == null or container == null:
		return
		
	var tween: Tween = lock_label.create_tween()
	tween.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_IN)
	tween.tween_property(lock_label, "modulate:a", 0.0, 0.2)
	tween.tween_callback(func():
		lock_label.visible = false
		container.visible = true
		animate_staggered_entrance(container, 0.05)
	)

static func update_stepper_ui(steps: Array, current_step_idx: int) -> void:
	var idx: int = 0
	for step in steps:
		if step is Label and is_instance_valid(step):
			if idx < current_step_idx:
				step.add_theme_color_override("font_color", Color(0.17, 0.45, 0.25))
			elif idx == current_step_idx:
				step.add_theme_color_override("font_color", Color(0.173, 0.29, 0.243))
			else:
				step.add_theme_color_override("font_color", Color(0.43, 0.46, 0.43))
		idx += 1

static func animate_dark_room_overlay(node: Control) -> void:
	if node == null:
		return
	var tween: Tween = node.create_tween()
	tween.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_OUT)
	tween.tween_property(node, "modulate", Color(0.8, 0.8, 0.95), 0.2)
	tween.tween_property(node, "modulate", Color.WHITE, 0.3)

# --- NOVAS ANIMAÇÕES DINÂMICAS DO PACIENTE & UX TOQUE (ETAPA 21) ---

static func animate_patient_idle(node: TextureRect, stress_level: float = 25.0) -> void:
	if node == null or not is_instance_valid(node):
		return
		
	node.pivot_offset = node.size / 2.0
	
	# Cancela tweens anteriores no nó para evitar acúmulo
	if node.has_meta("idle_tween"):
		var existing_tween: Tween = node.get_meta("idle_tween")
		if existing_tween != null and existing_tween.is_valid():
			existing_tween.kill()
		
	var idle_tween: Tween = node.create_tween().set_loops()
	node.set_meta("idle_tween", idle_tween)
	
	# Velocidade da respiração varia conforme estresse (1.8s calmo -> 0.7s estressado)
	var breath_duration: float = clamp(2.0 - (stress_level / 100.0) * 1.2, 0.6, 2.0)
	var breath_scale: float = 1.02 + (stress_level / 100.0) * 0.02
	
	idle_tween.set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_IN_OUT)
	idle_tween.tween_property(node, "scale", Vector2(1.01, breath_scale), breath_duration)
	idle_tween.tween_property(node, "scale", Vector2(1.0, 1.0), breath_duration)

static func animate_patient_exam_punch(node: TextureRect) -> void:
	if node == null or not is_instance_valid(node):
		return
		
	node.pivot_offset = node.size / 2.0
	
	var tween: Tween = node.create_tween().set_parallel(true)
	tween.set_trans(Tween.TRANS_BACK).set_ease(Tween.EASE_OUT)
	
	node.scale = Vector2(1.08, 1.08)
	node.modulate = Color(1.3, 1.3, 1.3, 1.0)
	
	tween.tween_property(node, "scale", Vector2.ONE, 0.3)
	tween.tween_property(node, "modulate", Color.WHITE, 0.3)


