extends Control

## Modal de Configurações de Áudio, Vídeo e Navegação do MedZoo.

@onready var modal_panel: PanelContainer = %ModalPanel
@onready var master_slider: HSlider = %MasterSlider
@onready var sfx_slider: HSlider = %SFXSlider
@onready var bgm_slider: HSlider = %BGMSlider
@onready var fullscreen_checkbox: CheckBox = %FullscreenCheckBox
@onready var restart_button: Button = %RestartButton
@onready var menu_button: Button = %MenuButton
@onready var close_button: Button = %CloseButton

var in_clinic_scene: bool = false
var is_syncing_values: bool = false

func _ready() -> void:
	visible = false
	
	UIAnimation.setup_button_hover(close_button)
	UIAnimation.setup_button_hover(restart_button)
	UIAnimation.setup_button_hover(menu_button)
	
	close_button.pressed.connect(close_modal)
	restart_button.pressed.connect(_on_restart_pressed)
	menu_button.pressed.connect(_on_menu_pressed)
	
	master_slider.value_changed.connect(_on_volume_changed)
	sfx_slider.value_changed.connect(_on_volume_changed)
	bgm_slider.value_changed.connect(_on_volume_changed)
	fullscreen_checkbox.toggled.connect(_on_fullscreen_toggled)
	
	_sync_ui_values()

func open_modal(is_clinic: bool = false) -> void:
	in_clinic_scene = is_clinic
	restart_button.visible = in_clinic_scene
	menu_button.visible = in_clinic_scene or get_tree().current_scene.scene_file_path.contains("case_select")
	
	_sync_ui_values()
	UIAnimation.animate_modal_open(self, modal_panel)
	if SoundManager != null:
		SoundManager.play_ui_click()

func close_modal() -> void:
	UIAnimation.animate_modal_close(self, modal_panel)
	if SoundManager != null:
		SoundManager.play_ui_click()

func _sync_ui_values() -> void:
	if GameState == null:
		return
	is_syncing_values = true
	master_slider.value = GameState.master_volume
	sfx_slider.value = GameState.sfx_volume
	bgm_slider.value = GameState.bgm_volume
	fullscreen_checkbox.button_pressed = GameState.fullscreen
	is_syncing_values = false

func _on_volume_changed(_val: float) -> void:
	if GameState == null or is_syncing_values:
		return
	GameState.update_settings(
		master_slider.value,
		sfx_slider.value,
		bgm_slider.value,
		fullscreen_checkbox.button_pressed
	)

func _on_fullscreen_toggled(toggled: bool) -> void:
	if GameState == null or is_syncing_values:
		return
	GameState.update_settings(
		master_slider.value,
		sfx_slider.value,
		bgm_slider.value,
		toggled
	)

func _on_restart_pressed() -> void:
	if SoundManager != null:
		SoundManager.play_ui_click()
	close_modal()
	var current: Node = get_tree().current_scene
	if current != null:
		get_tree().reload_current_scene()

func _on_menu_pressed() -> void:
	if SoundManager != null:
		SoundManager.play_ui_click()
	close_modal()
	get_tree().change_scene_to_file("res://scenes/main_menu.tscn")
