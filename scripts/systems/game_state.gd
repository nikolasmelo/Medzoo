extends Node

## Singleton responsável pelo gerenciamento de estado global, modo carreira, progressão profissional,
## estrutura de plantão, consequências profissionais, advertências, confiabilidade e persistência (Save/Load).
## Salva automaticamente em user://medzoo_save.cfg.

const SAVE_PATH: String = "user://medzoo_save.cfg"

# Constantes de Balanceamento da Carreira & Consequências (Etapa 16)
const RELIABILITY_START: float = 100.0
const MINOR_ERROR_PENALTY: float = 2.0
const RELEVANT_ERROR_PENALTY: float = 5.0
const MAJOR_ERROR_PENALTY: float = 12.0
const CRITICAL_ERROR_PENALTY: float = 25.0
const RELIABILITY_RECOVERY_RATE: float = 2.5
const WARNING_RELIABILITY_THRESHOLD: float = 60.0
const TERMINATION_RELIABILITY_THRESHOLD: float = 35.0

# Enumeração de Severidade de Erros Clínicos
enum ErrorSeverity { NONE = 0, LIGHT = 1, RELEVANT = 2, MAJOR = 3, CRITICAL = 4 }

var selected_case: CaseData = null

# Dados da Carreira Profissional
var career_xp: int = 0
var rank_index: int = 0
var reputation: int = 0
var stars_per_case: Dictionary = {} # case_id (String) -> stars (int)
var completed_cases: Array[String] = []
var warnings: int = 0
var career_history: Array[Dictionary] = []

# Consequências Profissionais & Confiabilidade (Etapa 16)
var professional_reliability: float = 100.0
var warning_records: Array[Dictionary] = []
var recent_performances: Array[Dictionary] = []
var praise_records: Array[Dictionary] = []
var career_archive: Array[Dictionary] = []
var is_career_over: bool = false
var last_termination_data: Dictionary = {}

# Competências, Certificações & Equipamentos (Etapa 18)
var completed_certifications: Array[String] = []
var unlocked_equipment: Array[String] = ["physical_exam_basic"]
var unlocked_permissions: Array[String] = ["basic_triage"]

# Estado do Plantão Atual (Shift State)
var current_shift: Dictionary = {
	"active": false,
	"start_time_mins": 450, # 07:30
	"current_time_mins": 450, # 07:30
	"cases_completed_today": 0,
	"cases_attended": [],
	"xp_gained_today": 0,
	"rep_gained_today": 0,
	"budget_spent_today": 0.0,
	"total_time_spent_mins": 0,
	"stars_list": [],
	"last_completed_case_summary": {}
}

# Configurações de Áudio e Tela
var master_volume: float = 1.0
var sfx_volume: float = 1.0
var bgm_volume: float = 0.6
var fullscreen: bool = false

func _ready() -> void:
	process_mode = PROCESS_MODE_ALWAYS
	load_game()

# --- CONFIABILIDADE & STATUS PROFISSIONAL ---

func get_reliability_status() -> Dictionary:
	var title: String = "Excelente / Confiável"
	var color: Color = Color(0.4, 0.85, 0.5)
	
	if professional_reliability < 35.0:
		title = "🚨 Risco Iminente de Desligamento"
		color = Color(0.95, 0.25, 0.25)
	elif professional_reliability < 60.0:
		title = "⚠️ Sob Observação Institucional"
		color = Color(0.95, 0.65, 0.25)
	elif professional_reliability < 85.0:
		title = "📋 Desempenho Satisfatório"
		color = Color(0.85, 0.85, 0.4)
		
	return {
		"reliability": professional_reliability,
		"title": title,
		"color": color,
		"warnings_count": warnings
	}

func is_educational_protection_active(case: CaseData) -> bool:
	if case == null:
		return false
	# Proteção educacional ativa se o caso for do Capítulo 1 e o jogador estiver no Rank 0 (Estagiário)
	return case.chapter == 1 and rank_index == 0 and completed_cases.size() < 2

func record_clinical_occurrence(severity: ErrorSeverity, reason: String, case: CaseData = null) -> Dictionary:
	var is_protected: bool = is_educational_protection_active(case)
	var penalty: float = 0.0
	var warning_issued: bool = false
	var warning_info: Dictionary = {}
	
	match severity:
		ErrorSeverity.LIGHT:
			penalty = MINOR_ERROR_PENALTY if not is_protected else 0.5
		ErrorSeverity.RELEVANT:
			penalty = RELEVANT_ERROR_PENALTY if not is_protected else 1.0
		ErrorSeverity.MAJOR:
			if is_protected:
				penalty = 2.0 # Reduzido em fase de aprendizado
			else:
				penalty = MAJOR_ERROR_PENALTY
				if professional_reliability - penalty < WARNING_RELIABILITY_THRESHOLD or warnings > 0:
					warning_info = issue_warning("Ocorrência Grave: " + reason, case.case_id if case != null else "")
					warning_issued = true
		ErrorSeverity.CRITICAL:
			if is_protected:
				penalty = 4.0
			else:
				penalty = CRITICAL_ERROR_PENALTY
				warning_info = issue_warning("Ocorrência Crítica: " + reason, case.case_id if case != null else "")
				warning_issued = true
				
	professional_reliability = clamp(professional_reliability - penalty, 0.0, 100.0)
	
	var occurrence_record: Dictionary = {
		"severity": severity,
		"reason": reason,
		"penalty": penalty,
		"reliability_after": professional_reliability,
		"is_protected": is_protected,
		"warning_issued": warning_issued,
		"case_id": case.case_id if case != null else ""
	}
	
	career_history.append({
		"type": "occurrence",
		"title": "Ocorrência Clínica",
		"description": reason,
		"severity": severity,
		"timestamp_unix": Time.get_unix_time_from_system()
	})
	
	var term_check: Dictionary = check_termination_conditions()
	save_game()
	
	return {
		"occurrence": occurrence_record,
		"warning": warning_info,
		"termination": term_check
	}

func issue_warning(reason: String, case_id: String = "") -> Dictionary:
	warnings += 1
	var warning_level: int = warnings
	var warning_title: String = "ADVERTÊNCIA PROFISSIONAL"
	
	if warning_level == 2:
		warning_title = "ÚLTIMA ADVERTÊNCIA PROFISSIONAL"
	elif warning_level >= 3:
		warning_title = "NOTIFICAÇÃO DE DESLIGAMENTO INSTITUCIONAL"
		
	var record: Dictionary = {
		"id": "warn_" + str(warnings) + "_" + str(int(Time.get_unix_time_from_system())),
		"level": warning_level,
		"title": warning_title,
		"reason": reason,
		"case_id": case_id,
		"reliability_at_time": professional_reliability,
		"rank_title": get_current_rank().get("title", ""),
		"timestamp_unix": Time.get_unix_time_from_system()
	}
	warning_records.append(record)
	
	career_history.append({
		"type": "warning",
		"title": warning_title,
		"description": reason,
		"timestamp_unix": Time.get_unix_time_from_system()
	})
	
	return record

func check_termination_conditions() -> Dictionary:
	if is_career_over:
		return {"terminated": true, "data": last_termination_data}
		
	if professional_reliability < TERMINATION_RELIABILITY_THRESHOLD and warnings >= 2:
		return terminate_career("Desempenho clínico e confiabilidade profissional abaixo dos padrões mínimos institucionais após advertências formais.")
	return {"terminated": false}

func terminate_career(reason: String) -> Dictionary:
	is_career_over = true
	var current_r: Dictionary = get_current_rank()
	
	last_termination_data = {
		"terminated": true,
		"reason": reason,
		"final_rank_title": current_r.get("title", "Estagiário"),
		"final_xp": career_xp,
		"final_reputation": reputation,
		"total_cases_attended": completed_cases.size(),
		"total_warnings": warnings,
		"final_reliability": professional_reliability,
		"timestamp_unix": Time.get_unix_time_from_system()
	}
	
	career_archive.append(last_termination_data)
	save_game()
	return last_termination_data

func start_new_career() -> void:
	career_xp = 0
	rank_index = 0
	reputation = 0
	warnings = 0
	professional_reliability = RELIABILITY_START
	is_career_over = false
	last_termination_data = {}
	
	stars_per_case.clear()
	completed_cases.clear()
	career_history.clear()
	warning_records.clear()
	recent_performances.clear()
	praise_records.clear()
	
	completed_certifications.clear()
	unlocked_equipment = ["physical_exam_basic"]
	unlocked_permissions = ["basic_triage"]
	
	current_shift = {
		"active": false,
		"start_time_mins": 450,
		"current_time_mins": 450,
		"cases_completed_today": 0,
		"cases_attended": [],
		"xp_gained_today": 0,
		"rep_gained_today": 0,
		"budget_spent_today": 0.0,
		"total_time_spent_mins": 0,
		"stars_list": [],
		"last_completed_case_summary": {}
	}
	if NarrativeManager != null:
		NarrativeManager.reset_narrative_state()
	save_game()

# --- CARGOS, COMPETÊNCIAS, PERMISSÕES E DESBLOQUEIO ---

func get_current_rank() -> Dictionary:
	return CareerData.get_rank_by_index(rank_index)

func get_next_rank() -> Dictionary:
	return CareerData.get_rank_by_index(rank_index + 1)

func can_promote() -> bool:
	var all_ranks: Array[Dictionary] = CareerData.get_all_ranks()
	if rank_index + 1 >= all_ranks.size():
		return false
		
	var next_r: Dictionary = get_next_rank()
	var req_xp: int = next_r.get("required_xp", 0)
	var req_rep: int = next_r.get("required_reputation", 0)
	var req_cases: int = next_r.get("required_cases", 0)
	
	return career_xp >= req_xp and reputation >= req_rep and completed_cases.size() >= req_cases and professional_reliability >= 50.0

func check_and_apply_promotion() -> Dictionary:
	if can_promote():
		var prev_rank: Dictionary = get_current_rank()
		rank_index += 1
		var new_rank: Dictionary = get_current_rank()
		
		# Bônus de Confiabilidade na promoção
		professional_reliability = clamp(professional_reliability + 10.0, 0.0, 100.0)
		
		praise_records.append({
			"type": "promotion",
			"title": "PROMOÇÃO DE CARGO: " + new_rank.get("title", ""),
			"timestamp_unix": Time.get_unix_time_from_system()
		})
		
		save_game()
		return {
			"promoted": true,
			"previous_rank": prev_rank,
			"new_rank": new_rank
		}
	return {"promoted": false}

func has_certification(cert_id: String) -> bool:
	return completed_certifications.has(cert_id)

func has_equipment(eq_id: String) -> bool:
	if unlocked_equipment.has(eq_id):
		return true
	var cur_rank: Dictionary = get_current_rank()
	var unlocked_eq: Array = cur_rank.get("unlocked_equipment", [])
	return unlocked_eq.has(eq_id)

func has_permission(perm_id: String) -> bool:
	if unlocked_permissions.has(perm_id):
		return true
	var cur_rank: Dictionary = get_current_rank()
	var perms: Array = cur_rank.get("permissions", [])
	return perms.has(perm_id) or perms.has("ALL_PERMISSIONS")

func complete_certification(cert_id: String) -> Dictionary:
	if not completed_certifications.has(cert_id):
		completed_certifications.append(cert_id)
		
		var comp_info: CompetencyData = null
		if CertificationManager != null:
			comp_info = CertificationManager.get_competency_by_id(cert_id)
			
		if comp_info != null:
			if not comp_info.unlocked_equipment_id.is_empty() and not unlocked_equipment.has(comp_info.unlocked_equipment_id):
				unlocked_equipment.append(comp_info.unlocked_equipment_id)
			if not comp_info.unlocked_permission.is_empty() and not unlocked_permissions.has(comp_info.unlocked_permission):
				unlocked_permissions.append(comp_info.unlocked_permission)
				
		reputation += 50
		praise_records.append({
			"type": "certification",
			"title": "CERTIFICAÇÃO CONCLUÍDA: " + (comp_info.title if comp_info != null else cert_id),
			"timestamp_unix": Time.get_unix_time_from_system()
		})
		
		save_game()
		return {"success": true, "certification": cert_id}
	return {"success": false, "reason": "Já certificado."}

# --- PLANTÃO (SHIFT SYSTEM) ---

func is_shift_active() -> bool:
	return current_shift.get("active", false)

func start_shift() -> void:
	current_shift["active"] = true
	current_shift["start_time_mins"] = 450 # 07:30
	current_shift["current_time_mins"] = 450
	current_shift["cases_completed_today"] = 0
	current_shift["cases_attended"] = []
	current_shift["xp_gained_today"] = 0
	current_shift["rep_gained_today"] = 0
	current_shift["budget_spent_today"] = 0.0
	current_shift["total_time_spent_mins"] = 0
	current_shift["stars_list"] = []
	current_shift["last_completed_case_summary"] = {}
	save_game()

func get_formatted_shift_time(mins_val: int) -> String:
	var hours: int = mins_val / 60
	var mins: int = mins_val % 60
	return "%02d:%02d" % [hours, mins]

func clear_last_completed_case_summary() -> void:
	current_shift["last_completed_case_summary"] = {}

func get_shift_summary() -> Dictionary:
	var start_mins: int = current_shift.get("start_time_mins", 450)
	var cur_mins: int = current_shift.get("current_time_mins", 450)
	var cases_count: int = current_shift.get("cases_completed_today", 0)
	var stars: Array = current_shift.get("stars_list", [])
	
	var avg_stars: float = 5.0
	if stars.size() > 0:
		var sum_s: float = 0.0
		for s in stars:
			sum_s += float(s)
		avg_stars = sum_s / float(stars.size())
		
	var perf_title: String = "Excelente"
	if avg_stars < 3.0:
		perf_title = "Regular"
	elif avg_stars < 4.2:
		perf_title = "Satisfatório"
		
	return {
		"start_time_text": get_formatted_shift_time(start_mins),
		"end_time_text": get_formatted_shift_time(cur_mins),
		"cases_attended": cases_count,
		"cases_completed": cases_count,
		"avg_stars": avg_stars,
		"xp_earned": current_shift.get("xp_gained_today", 0),
		"rep_earned": current_shift.get("rep_gained_today", 0),
		"budget_spent": current_shift.get("budget_spent_today", 0.0),
		"total_time_mins": current_shift.get("total_time_spent_mins", 0),
		"performance_title": perf_title,
		"reliability": professional_reliability
	}

func end_shift() -> Dictionary:
	var summary: Dictionary = get_shift_summary()
	current_shift["active"] = false
	current_shift["last_completed_case_summary"] = {}
	save_game()
	return summary

# --- DESBLOQUEIO DE CASOS ---

func is_case_unlocked(case: CaseData) -> bool:
	return get_case_lock_reason(case).is_empty()

func get_case_lock_reason(case: CaseData) -> String:
	if case == null:
		return "Caso nulo."
		
	if case.career_order > 0:
		var all_cases: Array[CaseData] = CaseRegistry.load_all_cases()
		var previous_case: CaseData = null
		
		for c in all_cases:
			if c.career_order == case.career_order - 1:
				previous_case = c
				break
				
		if previous_case != null:
			var prev_stars: int = get_stars_for_case(previous_case.case_id)
			if prev_stars < case.required_stars:
				return "🔒 Requer " + str(case.required_stars) + "★ no Caso Anterior"
				
	if rank_index < case.minimum_rank:
		var req_rank_info: Dictionary = CareerData.get_rank_by_index(case.minimum_rank)
		return "🔒 Requer Cargo: " + req_rank_info.get("title", "Superior")
		
	if reputation < case.required_reputation:
		return "🔒 Requer Reputação: " + str(case.required_reputation) + " XP"
		
	for cert_id in case.required_certifications:
		if not has_certification(cert_id):
			var cert_name: String = cert_id
			if CertificationManager != null:
				var c_info: CompetencyData = CertificationManager.get_competency_by_id(cert_id)
				if c_info != null:
					cert_name = c_info.title
			return "🔒 Requer Certificação: " + cert_name
			
	for eq_id in case.required_equipment:
		if not has_equipment(eq_id):
			var eq_info: Dictionary = CareerData.get_equipment_info(eq_id)
			return "🔒 Requer Equipamento: " + eq_info.get("name", eq_id)
			
	return ""

func get_stars_for_case(case_id: String) -> int:
	return stars_per_case.get(case_id, 0)

# --- CONSTITUIÇÃO DE ATENDIMENTO E PERSISTÊNCIA ---

func record_case_completion(case: CaseData, stars_earned: int, score_info: Dictionary = {}, time_spent_mins: int = 40, cost_spent: float = 0.0) -> Dictionary:
	if case == null:
		return {"xp_earned": 0, "promotion": {"promoted": false}}
		
	var cid: String = case.case_id
	var previous_stars: int = get_stars_for_case(cid)
	
	var base_reward: int = case.reputation_reward
	var total_score: int = score_info.get("total_score", 1500)
	var xp_earned: int = base_reward + int(total_score / 20.0)
	
	career_xp += xp_earned
	
	var is_first_completion: bool = not completed_cases.has(cid)
	var rep_gained: int = 0
	
	if is_first_completion:
		completed_cases.append(cid)
		rep_gained = case.reputation_reward
		reputation += rep_gained
	elif stars_earned > previous_stars:
		rep_gained = (stars_earned - previous_stars) * 50
		reputation += rep_gained
		
	if stars_earned > previous_stars:
		stars_per_case[cid] = stars_earned
		
	# Recuperação ou ajuste de confiabilidade por consistência no atendimento
	if stars_earned >= 4:
		professional_reliability = clamp(professional_reliability + RELIABILITY_RECOVERY_RATE, 0.0, 100.0)
		if stars_earned == 5:
			praise_records.append({
				"title": "Elogio por Atendimento de Excelência",
				"description": "Excelente precisão diagnóstica e manejo de bem-estar para " + case.species_name,
				"timestamp_unix": Time.get_unix_time_from_system()
			})
	elif stars_earned <= 2:
		record_clinical_occurrence(ErrorSeverity.RELEVANT, "Atendimento com desempenho abaixo do esperado para " + case.species_name, case)
		
	# Registra no histórico recente (últimos 5 atendimentos)
	recent_performances.append({
		"case_id": cid,
		"stars": stars_earned,
		"score": total_score,
		"reliability_after": professional_reliability,
		"timestamp_unix": Time.get_unix_time_from_system()
	})
	if recent_performances.size() > 5:
		recent_performances.pop_front()
		
	# Atualiza estatísticas do plantão
	current_shift["cases_completed_today"] = current_shift.get("cases_completed_today", 0) + 1
	current_shift["xp_gained_today"] = current_shift.get("xp_gained_today", 0) + xp_earned
	current_shift["rep_gained_today"] = current_shift.get("rep_gained_today", 0) + rep_gained
	current_shift["budget_spent_today"] = current_shift.get("budget_spent_today", 0.0) + cost_spent
	current_shift["total_time_spent_mins"] = current_shift.get("total_time_spent_mins", 0) + time_spent_mins
	current_shift["current_time_mins"] = current_shift.get("current_time_mins", 450) + time_spent_mins
	
	var s_list: Array = current_shift.get("stars_list", [])
	s_list.append(stars_earned)
	current_shift["stars_list"] = s_list
	
	var case_summary: Dictionary = {
		"case_id": cid,
		"species_name": case.species_name,
		"stars": stars_earned,
		"xp_earned": xp_earned,
		"rep_gained": rep_gained,
		"time_spent": time_spent_mins,
		"cost_spent": cost_spent
	}
	current_shift["last_completed_case_summary"] = case_summary
	
	career_history.append({
		"type": "completion",
		"case_id": cid,
		"species_name": case.species_name,
		"stars": stars_earned,
		"xp_earned": xp_earned,
		"rep_gained": rep_gained,
		"rank_title": get_current_rank().get("title", ""),
		"timestamp_unix": Time.get_unix_time_from_system()
	})
	
	var promo_result: Dictionary = check_and_apply_promotion()
	save_game()
	
	return {
		"xp_earned": xp_earned,
		"rep_gained": rep_gained,
		"case_summary": case_summary,
		"promotion": promo_result
	}

func save_game() -> void:
	var config: ConfigFile = ConfigFile.new()
	
	config.set_value("career", "career_xp", career_xp)
	config.set_value("career", "rank_index", rank_index)
	config.set_value("career", "reputation", reputation)
	config.set_value("career", "stars_per_case", stars_per_case)
	config.set_value("career", "completed_cases", completed_cases)
	config.set_value("career", "warnings", warnings)
	config.set_value("career", "career_history", career_history)
	config.set_value("career", "current_shift", current_shift)
	
	# Etapa 16: Consequências & Confiabilidade
	config.set_value("career", "professional_reliability", professional_reliability)
	config.set_value("career", "warning_records", warning_records)
	config.set_value("career", "recent_performances", recent_performances)
	config.set_value("career", "praise_records", praise_records)
	config.set_value("career", "career_archive", career_archive)
	config.set_value("career", "is_career_over", is_career_over)
	config.set_value("career", "last_termination_data", last_termination_data)
	
	# Etapa 18: Competências & Equipamentos
	config.set_value("career", "completed_certifications", completed_certifications)
	config.set_value("career", "unlocked_equipment", unlocked_equipment)
	config.set_value("career", "unlocked_permissions", unlocked_permissions)
	
	# Etapa 17: Narrativa
	if NarrativeManager != null:
		NarrativeManager.save_narrative_data(config)
		
	# Configurações
	config.set_value("settings", "master_volume", master_volume)
	config.set_value("settings", "sfx_volume", sfx_volume)
	config.set_value("settings", "bgm_volume", bgm_volume)
	config.set_value("settings", "fullscreen", fullscreen)
	
	var err = config.save(SAVE_PATH)
	if err != OK:
		push_error("GameState: Falha ao salvar jogo em " + SAVE_PATH + " (Erro: " + str(err) + ")")

func load_game() -> void:
	var config: ConfigFile = ConfigFile.new()
	var err = config.load(SAVE_PATH)
	
	if err != OK:
		return
		
	career_xp = config.get_value("career", "career_xp", 0)
	rank_index = config.get_value("career", "rank_index", 0)
	reputation = config.get_value("career", "reputation", 0)
	warnings = config.get_value("career", "warnings", 0)
	stars_per_case = config.get_value("career", "stars_per_case", {})
	
	professional_reliability = config.get_value("career", "professional_reliability", RELIABILITY_START)
	is_career_over = config.get_value("career", "is_career_over", false)
	last_termination_data = config.get_value("career", "last_termination_data", {})
	
	var saved_cert = config.get_value("career", "completed_certifications", [])
	completed_certifications.clear()
	for c_item in saved_cert:
		completed_certifications.append(String(c_item))
		
	var saved_eq = config.get_value("career", "unlocked_equipment", ["physical_exam_basic"])
	unlocked_equipment.clear()
	for e_item in saved_eq:
		unlocked_equipment.append(String(e_item))
		
	var saved_perm = config.get_value("career", "unlocked_permissions", ["basic_triage"])
	unlocked_permissions.clear()
	for p_item in saved_perm:
		unlocked_permissions.append(String(p_item))
	
	var saved_completed = config.get_value("career", "completed_cases", [])
	completed_cases.clear()
	for item in saved_completed:
		completed_cases.append(String(item))
		
	var saved_history = config.get_value("career", "career_history", [])
	career_history.clear()
	for h_item in saved_history:
		if h_item is Dictionary:
			career_history.append(h_item)
			
	var saved_warnings = config.get_value("career", "warning_records", [])
	warning_records.clear()
	for w_item in saved_warnings:
		if w_item is Dictionary:
			warning_records.append(w_item)
			
	var saved_recent = config.get_value("career", "recent_performances", [])
	recent_performances.clear()
	for r_item in saved_recent:
		if r_item is Dictionary:
			recent_performances.append(r_item)
			
	var saved_praises = config.get_value("career", "praise_records", [])
	praise_records.clear()
	for p_item in saved_praises:
		if p_item is Dictionary:
			praise_records.append(p_item)
			
	var saved_archive = config.get_value("career", "career_archive", [])
	career_archive.clear()
	for a_item in saved_archive:
		if a_item is Dictionary:
			career_archive.append(a_item)
			
	var saved_shift = config.get_value("career", "current_shift", {})
	if saved_shift is Dictionary and not saved_shift.is_empty():
		current_shift = saved_shift
		
	if NarrativeManager != null:
		NarrativeManager.load_narrative_data(config)
		
	master_volume = config.get_value("settings", "master_volume", 1.0)
	sfx_volume = config.get_value("settings", "sfx_volume", 1.0)
	bgm_volume = config.get_value("settings", "bgm_volume", 0.6)
	fullscreen = config.get_value("settings", "fullscreen", false)
	
	_apply_settings()

func _apply_settings() -> void:
	if SoundManager != null:
		SoundManager.set_master_volume(master_volume)
		SoundManager.set_sfx_volume(sfx_volume)
		SoundManager.set_bgm_volume(bgm_volume)
		
	if fullscreen:
		DisplayServer.window_set_mode(DisplayServer.WINDOW_MODE_FULLSCREEN)
	else:
		DisplayServer.window_set_mode(DisplayServer.WINDOW_MODE_WINDOWED)

func update_settings(master_val: float, sfx_val: float, bgm_val: float, is_full: bool) -> void:
	master_volume = master_val
	sfx_volume = sfx_val
	bgm_volume = bgm_val
	fullscreen = is_full
	_apply_settings()
	save_game()

func reset_progress() -> void:
	start_new_career()
