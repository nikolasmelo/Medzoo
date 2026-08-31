extends Control
class_name UltrasoundController

## Controlador Físico da Sonda de Ultrassom & Mapeamento Doppler
## Converte coordenadas de mouse/touch em UV (0..1), atualiza o ShaderMaterial e modula áudio procedural.

signal probe_moved(uv_position: Vector2)
signal doppler_signal_detected(velocity: float, is_arterial: bool)

@export var probe_display: TextureRect
@export var doppler_active: bool = true
@export var pulse_frequency: float = 3.5
@export var acoustic_gain: float = 1.6
@export var doppler_box_size: Vector2 = Vector2(0.3, 0.25)

var current_uv: Vector2 = Vector2(0.5, 0.5)
var is_probe_held: bool = false
var last_velocity: float = 0.0

func _ready() -> void:
	if probe_display != null and probe_display.material is ShaderMaterial:
		var mat: ShaderMaterial = probe_display.material as ShaderMaterial
		mat.set_shader_parameter("doppler_active", doppler_active)
		mat.set_shader_parameter("pulse_frequency", pulse_frequency)
		mat.set_shader_parameter("acoustic_gain", acoustic_gain)
		mat.set_shader_parameter("doppler_box_size", doppler_box_size)

func _gui_input(event: InputEvent) -> void:
	if event is InputEventMouseButton:
		if event.button_index == MOUSE_BUTTON_LEFT:
			is_probe_held = event.pressed
			if is_probe_held:
				_update_probe_position(event.position)
	elif event is InputEventMouseMotion and is_probe_held:
		_update_probe_position(event.position)

func _update_probe_position(local_pos: Vector2) -> void:
	var rect_size: Vector2 = get_rect().size
	if rect_size.x <= 0.0 or rect_size.y <= 0.0:
		return

	# Converter coordenada local para UV normalizado [0.0, 1.0]
	var norm_x: float = clamp(local_pos.x / rect_size.x, 0.0, 1.0)
	var norm_y: float = clamp(local_pos.y / rect_size.y, 0.0, 1.0)
	current_uv = Vector2(norm_x, norm_y)

	# Atualizar o Shader de Ultrassom / Doppler
	if probe_display != null and probe_display.material is ShaderMaterial:
		var mat: ShaderMaterial = probe_display.material as ShaderMaterial
		mat.set_shader_parameter("doppler_box_center", current_uv)

	probe_moved.emit(current_uv)
	_process_doppler_audio(current_uv)

## Simula velocidade do fluxo vascular sob a sonda com base em biomarcadores do bioma.
func _process_doppler_audio(uv: Vector2) -> void:
	# Simula um vaso vascular passando na diagonal central do órgão
	var dist_to_vessel: float = abs((uv.x - 0.5) - (uv.y - 0.5) * 0.5)
	
	if dist_to_vessel < 0.12 and doppler_active:
		var time_sec: float = Time.get_ticks_msec() / 1000.0
		var flow_velocity: float = sin(time_sec * pulse_frequency * 2.0 * PI)
		last_velocity = flow_velocity
		var is_arterial: bool = flow_velocity > 0.0

		doppler_signal_detected.emit(abs(flow_velocity), is_arterial)

		if SoundManager != null:
			var tone_pitch: float = 400.0 + (abs(flow_velocity) * 350.0)
			SoundManager.play_sfx_tone(tone_pitch, 0.08, 0.25, "sine")

func toggle_doppler(active: bool) -> void:
	doppler_active = active
	if probe_display != null and probe_display.material is ShaderMaterial:
		var mat: ShaderMaterial = probe_display.material as ShaderMaterial
		mat.set_shader_parameter("doppler_active", doppler_active)

func set_gain(new_gain: float) -> void:
	acoustic_gain = clamp(new_gain, 0.5, 4.0)
	if probe_display != null and probe_display.material is ShaderMaterial:
		var mat: ShaderMaterial = probe_display.material as ShaderMaterial
		mat.set_shader_parameter("acoustic_gain", acoustic_gain)
