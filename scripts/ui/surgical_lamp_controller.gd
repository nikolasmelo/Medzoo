extends Control
class_name SurgicalLampController

## Controlador do Refletor Cirúrgico Interativo & Efeitos 2.5D
## Rastreia a lâmpada cirúrgica em tempo real, atualiza o Shader PBR 2.5D e spawna partículas.

signal lamp_moved(uv_position: Vector2)
signal particle_effect_triggered(effect_type: String, pos: Vector2)

@export var target_display: TextureRect
@export var is_lamp_enabled: bool = true
@export var lamp_intensity: float = 1.4
@export var lamp_radius: float = 0.65

var target_uv: Vector2 = Vector2(0.5, 0.3)
var current_uv: Vector2 = Vector2(0.5, 0.3)
var blood_pool_level: float = 0.0

func _ready() -> void:
	if target_display != null and target_display.material is ShaderMaterial:
		var mat: ShaderMaterial = target_display.material as ShaderMaterial
		mat.set_shader_parameter("lamp_intensity", lamp_intensity)
		mat.set_shader_parameter("lamp_radius", lamp_radius)

func _process(delta: float) -> void:
	if not is_lamp_enabled:
		return

	# Suavização CUBIC da posição do refletor cirúrgico
	current_uv = current_uv.lerp(target_uv, delta * 8.0)
	_update_shader_lamp_position()

func _gui_input(event: InputEvent) -> void:
	if event is InputEventMouseMotion:
		_on_mouse_moved(event.position)

func _on_mouse_moved(local_pos: Vector2) -> void:
	var rect_size: Vector2 = get_rect().size
	if rect_size.x <= 0.0 or rect_size.y <= 0.0:
		return

	target_uv = Vector2(
		clamp(local_pos.x / rect_size.x, 0.0, 1.0),
		clamp(local_pos.y / rect_size.y, 0.0, 1.0)
	)
	lamp_moved.emit(target_uv)

func _update_shader_lamp_position() -> void:
	if target_display != null and target_display.material is ShaderMaterial:
		var mat: ShaderMaterial = target_display.material as ShaderMaterial
		mat.set_shader_parameter("lamp_position_uv", current_uv)

## Atualiza a quantidade de sangue acumulado no shader (Decal procedural)
func set_blood_pool_level(level: float) -> void:
	blood_pool_level = clamp(level, 0.0, 1.0)
	if target_display != null and target_display.material is ShaderMaterial:
		var mat: ShaderMaterial = target_display.material as ShaderMaterial
		mat.set_shader_parameter("blood_pool_amount", blood_pool_level)

## Dispara faíscas do eletrocautério ou borrifos de soro no ponto cirúrgico
func trigger_tool_particle(effect_type: String, local_pos: Vector2) -> void:
	particle_effect_triggered.emit(effect_type, local_pos)
	if SoundManager != null:
		if effect_type == "cautery":
			SoundManager.play_sfx_tone(900.0, 0.12, 0.35, "square")
		elif effect_type == "suction":
			SoundManager.play_sfx_tone(300.0, 0.15, 0.25, "sine")
