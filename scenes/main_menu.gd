extends Control

## Controla o Menu Principal do MedZoo com animações, navegação da carreira e áudio.

@onready var career_button: Button = %CareerButton
@onready var cases_button: Button = %CasesButton
@onready var settings_button: Button = %SettingsButton
@onready var quit_button: Button = %QuitButton
@onready var settings_modal: Control = $SettingsModal

var is_transitioning: bool = false

func _ready() -> void:
	modulate.a = 0.0
	var tween: Tween = create_tween()
	tween.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_OUT)
	tween.tween_property(self, "modulate:a", 1.0, 0.3)
	
	UIAnimation.setup_button_hover(career_button)
	UIAnimation.setup_button_hover(cases_button)
	UIAnimation.setup_button_hover(settings_button)
	UIAnimation.setup_button_hover(quit_button)
	
	UIAnimation.animate_panel_entry(career_button, 0.05)
	UIAnimation.animate_panel_entry(cases_button, 0.10)
	UIAnimation.animate_panel_entry(settings_button, 0.15)
	UIAnimation.animate_panel_entry(quit_button, 0.20)
	
	career_button.pressed.connect(_on_career_pressed)
	cases_button.pressed.connect(_on_cases_pressed)
	settings_button.pressed.connect(_on_settings_pressed)
	quit_button.pressed.connect(_on_quit_pressed)


func _on_career_pressed() -> void:
	if is_transitioning:
		return
	is_transitioning = true
	
	if SoundManager != null:
		SoundManager.play_ui_click()
		
	var tween: Tween = create_tween()
	tween.set_trans(Tween.TRANS_CUBIC).set_ease(Tween.EASE_IN)
	tween.tween_property(self, "modulate:a", 0.0, 0.25)
	tween.tween_callback(func():
		# O plantão começa no painel de carreira, onde o jogador escolhe um
		# caso desbloqueado e vê as consequências da sua progressão.
		get_tree().change_scene_to_file("res://scenes/case_select.tscn")
	)

func _on_cases_pressed() -> void:
	_on_career_pressed()

func _on_settings_pressed() -> void:
	if SoundManager != null:
		SoundManager.play_ui_click()
	if settings_modal != null and settings_modal.has_method("open_modal"):
		settings_modal.open_modal(false)

func _on_quit_pressed() -> void:
	if is_transitioning:
		return
	if SoundManager != null:
		SoundManager.play_ui_click()
	get_tree().quit()
