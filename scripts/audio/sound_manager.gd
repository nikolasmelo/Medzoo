extends Node



## Gerenciador de Áudio Global do MedZoo.
## Produz efeitos procedurais via AudioStreamWAV, imunes a ausência de arquivos de áudio externos.

var master_volume: float = 1.0
var sfx_volume: float = 1.0
var bgm_volume: float = 0.6

var bgm_player: AudioStreamPlayer

func _ready() -> void:
	process_mode = PROCESS_MODE_ALWAYS
	_setup_bgm_player()

func _setup_bgm_player() -> void:
	bgm_player = AudioStreamPlayer.new()
	bgm_player.name = "BGMPlayer"
	bgm_player.bus = "Master"
	add_child(bgm_player)
	_generate_ambient_bgm()

func _generate_ambient_bgm() -> void:
	var sample_rate: int = 22050
	var duration: float = 8.0
	var num_samples: int = int(sample_rate * duration)
	var stream: AudioStreamWAV = AudioStreamWAV.new()
	stream.format = 0
	stream.mix_rate = sample_rate
	stream.stereo = false
	stream.loop_mode = AudioStreamWAV.LOOP_FORWARD
	stream.loop_end = num_samples
	
	var data: PackedByteArray = PackedByteArray()
	data.resize(num_samples)
	
	var base_freqs: Array[float] = [220.0, 277.18, 329.63, 440.0] # Acorde Lá Maior Suave
	for i in range(num_samples):
		var t: float = float(i) / sample_rate
		var freq_idx: int = int(t / 2.0) % base_freqs.size()
		var freq: float = base_freqs[freq_idx]
		var val: float = sin(2.0 * PI * freq * t) * 0.12
		var byte_val: int = int(clamp((val + 1.0) * 127.5, 0, 255))
		data[i] = byte_val
		
	stream.data = data
	bgm_player.stream = stream
	bgm_player.volume_db = linear_to_db(bgm_volume * master_volume * 0.25)
	bgm_player.play()

func play_sfx_tone(frequency: float, duration: float, volume: float = 0.5, wave_type: String = "sine") -> void:
	if sfx_volume <= 0.001 or master_volume <= 0.001:
		return
		
	var player: AudioStreamPlayer = AudioStreamPlayer.new()
	add_child(player)
	
	var sample_rate: int = 22050
	var num_samples: int = int(sample_rate * duration)
	var stream: AudioStreamWAV = AudioStreamWAV.new()
	stream.format = 0
	stream.mix_rate = sample_rate
	stream.stereo = false
	
	var data: PackedByteArray = PackedByteArray()
	data.resize(num_samples)
	
	for i in range(num_samples):
		var t: float = float(i) / sample_rate
		var envelope: float = 1.0 - (t / duration)
		var val: float = 0.0
		
		if wave_type == "square":
			val = 1.0 if sin(2.0 * PI * frequency * t) > 0 else -1.0
		else:
			val = sin(2.0 * PI * frequency * t)
			
		val *= volume * envelope * sfx_volume * master_volume
		var byte_val: int = int(clamp((val + 1.0) * 127.5, 0, 255))
		data[i] = byte_val
		
	stream.data = data
	player.stream = stream
	player.play()
	
	player.finished.connect(func(): player.queue_free())

# --- Nomes de Funções de Conveniência ---
func play_click() -> void:
	play_sfx_tone(600.0, 0.04, 0.3, "sine")

func play_ui_click() -> void:
	play_click()

func play_toast() -> void:
	play_sfx_tone(880.0, 0.12, 0.4, "sine")

func play_evidence_discovered() -> void:
	play_toast()

func play_beep() -> void:
	play_sfx_tone(1046.5, 0.08, 0.4, "sine")

func play_exam() -> void:
	play_sfx_tone(440.0, 0.07, 0.3, "sine")

func play_xray_found() -> void:
	play_sfx_tone(987.77, 0.15, 0.5, "sine")

func play_success() -> void:
	play_sfx_tone(523.25, 0.1, 0.4, "sine")
	get_tree().create_timer(0.1).timeout.connect(func(): if is_instance_valid(self): play_sfx_tone(659.25, 0.15, 0.5, "sine"))

func play_fail() -> void:
	play_sfx_tone(220.0, 0.25, 0.4, "square")

func play_error() -> void:
	play_fail()

func play_case_complete() -> void:
	play_fanfare()

func play_fanfare() -> void:
	play_sfx_tone(523.25, 0.1, 0.5, "sine")
	get_tree().create_timer(0.1).timeout.connect(func(): if is_instance_valid(self): play_sfx_tone(659.25, 0.1, 0.5, "sine"))
	get_tree().create_timer(0.2).timeout.connect(func(): if is_instance_valid(self): play_sfx_tone(783.99, 0.1, 0.5, "sine"))
	get_tree().create_timer(0.3).timeout.connect(func(): if is_instance_valid(self): play_sfx_tone(1046.5, 0.3, 0.6, "sine"))

func set_master_volume(val: float) -> void:
	master_volume = clamp(val, 0.0, 1.0)
	if bgm_player:
		bgm_player.volume_db = linear_to_db(bgm_volume * master_volume * 0.25)

func set_sfx_volume(val: float) -> void:
	sfx_volume = clamp(val, 0.0, 1.0)

func set_bgm_volume(val: float) -> void:
	bgm_volume = clamp(val, 0.0, 1.0)
	if bgm_player:
		bgm_player.volume_db = linear_to_db(bgm_volume * master_volume * 0.25)

func play_bgm(track_name: String = "") -> void:
	if bgm_player != null and not bgm_player.playing:
		bgm_player.play()

## Produz vocalizações procedurais características de cada espécie da fauna silvestre
func play_species_vocal(species_name: String) -> void:
	var name_lower: String = species_name.to_lower()
	if name_lower.contains("coruja"):
		# Coruja-buraqueira: Pio duplo agudo descendente (880Hz -> 660Hz)
		play_sfx_tone(880.0, 0.12, 0.4, "sine")
		get_tree().create_timer(0.15).timeout.connect(func(): if is_instance_valid(self): play_sfx_tone(660.0, 0.18, 0.5, "sine"))
	elif name_lower.contains("jabuti"):
		# Jabuti-piranga: Sopro/ar celomático grave (220Hz -> 140Hz)
		play_sfx_tone(220.0, 0.35, 0.35, "square")
	elif name_lower.contains("tucano"):
		# Tucano-toco: Canto staccato (440Hz -> 520Hz)
		play_sfx_tone(440.0, 0.08, 0.4, "sine")
		get_tree().create_timer(0.10).timeout.connect(func(): if is_instance_valid(self): play_sfx_tone(520.0, 0.12, 0.45, "sine"))
	elif name_lower.contains("capivara"):
		# Capivara: Assobio vocal fino ascendente (1100Hz -> 1400Hz)
		play_sfx_tone(1100.0, 0.1, 0.35, "sine")
		get_tree().create_timer(0.11).timeout.connect(func(): if is_instance_valid(self): play_sfx_tone(1400.0, 0.15, 0.4, "sine"))
	elif name_lower.contains("tamanduá") or name_lower.contains("tamandua"):
		# Tamanduá-bandeira: Bufado de focinho (180Hz -> 100Hz)
		play_sfx_tone(180.0, 0.25, 0.4, "square")
	elif name_lower.contains("lobo"):
		# Lobo-guará: Uivo ressonante crescente/decrescente (320Hz -> 550Hz -> 380Hz)
		play_sfx_tone(320.0, 0.12, 0.4, "sine")
		get_tree().create_timer(0.12).timeout.connect(func(): if is_instance_valid(self): play_sfx_tone(550.0, 0.20, 0.5, "sine"))
		get_tree().create_timer(0.32).timeout.connect(func(): if is_instance_valid(self): play_sfx_tone(380.0, 0.25, 0.35, "sine"))
	elif name_lower.contains("jaguatirica"):
		# Jaguatirica: Miau/rosnado silvestre vibrato (480Hz -> 680Hz)
		play_sfx_tone(480.0, 0.15, 0.4, "sine")
		get_tree().create_timer(0.15).timeout.connect(func(): if is_instance_valid(self): play_sfx_tone(680.0, 0.22, 0.5, "sine"))
	elif name_lower.contains("arara"):
		# Arara-azul-grande: Grito estridente psitaciforme (950Hz -> 1250Hz -> 750Hz)
		play_sfx_tone(950.0, 0.1, 0.45, "sine")
		get_tree().create_timer(0.11).timeout.connect(func(): if is_instance_valid(self): play_sfx_tone(1250.0, 0.14, 0.5, "sine"))
	elif name_lower.contains("mico"):
		# Mico-leão-dourado: Trinado agudo de primata neotropical (1300Hz -> 1600Hz)
		play_sfx_tone(1300.0, 0.08, 0.4, "sine")
		get_tree().create_timer(0.09).timeout.connect(func(): if is_instance_valid(self): play_sfx_tone(1600.0, 0.12, 0.45, "sine"))
	elif name_lower.contains("jacaré") or name_lower.contains("jacare"):
		# Jacaré-do-pantanal: Sopro/rosnado gutural reptiliano grave (150Hz -> 90Hz)
		play_sfx_tone(150.0, 0.35, 0.4, "square")
	elif name_lower.contains("boto"):
		# Boto-cor-de-rosa: Assobio/estalo ecolocalizador cetáceo (1400Hz -> 1800Hz)
		play_sfx_tone(1400.0, 0.1, 0.35, "sine")
		get_tree().create_timer(0.11).timeout.connect(func(): if is_instance_valid(self): play_sfx_tone(1800.0, 0.18, 0.4, "sine"))
	else:
		play_sfx_tone(500.0, 0.15, 0.3, "sine")


