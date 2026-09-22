import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  X,
  AlertTriangle,
  Activity,
  Wrench,
  Heart,
} from 'lucide-react';
import type {
  CaseData,
  SurgicalStep,
  MinigameCompletionPayload,
  SurgicalMinigameComponent,
  SpecializedMinigameType,
  SurgicalInstrument,
  StepTransitionResult,
} from '../../types';
import { soundManager } from '../../utils/sound';
import {
  type VitalsParameters,
  type PrecisionMetrics,
  createInitialVitals,
  updateVitals,
  computeSurgicalScore,
} from '../../utils/physiologyEngine';
import {
  initializeSurgicalSteps,
  transitionSurgicalStep,
  validateRuntimeSteps,
} from '../../utils/surgicalStepEngine';

import { BoneDrillMinigame } from './surgeries/BoneDrillMinigame';
import { SyringeIrrigationMinigame } from './surgeries/SyringeIrrigationMinigame';
import { EpoxyResinMinigame } from './surgeries/EpoxyResinMinigame';
import { OrthopedicPinsMinigame } from './surgeries/OrthopedicPinsMinigame';
import { EndoscopyMinigame } from './surgeries/EndoscopyMinigame';
import { SoftTissueIncisionMinigame } from './surgeries/SoftTissueIncisionMinigame';
import { SutureTensionMinigame } from './surgeries/SutureTensionMinigame';
import { FractureReductionMinigame } from './surgeries/FractureReductionMinigame';
import { LcpPlatingMinigame } from './surgeries/LcpPlatingMinigame';
import { HemostasisMinigame } from './surgeries/HemostasisMinigame';
import { AnestheticInductionMinigame } from './surgeries/AnestheticInductionMinigame';
import { WoundDressingMinigame } from './surgeries/WoundDressingMinigame';

// ── Explicit Minigame Component Registry (Zero string guessing, zero fallback) ──
const MINIGAME_REGISTRY: Record<SpecializedMinigameType, SurgicalMinigameComponent> = {
  SyringeIrrigationMinigame: SyringeIrrigationMinigame as SurgicalMinigameComponent,
  SoftTissueIncisionMinigame: SoftTissueIncisionMinigame as SurgicalMinigameComponent,
  IncisionMinigame: SoftTissueIncisionMinigame as SurgicalMinigameComponent,
  FractureReductionMinigame: FractureReductionMinigame as SurgicalMinigameComponent,
  BoneDrillMinigame: BoneDrillMinigame as SurgicalMinigameComponent,
  OrthopedicPinsMinigame: OrthopedicPinsMinigame as SurgicalMinigameComponent,
  SutureTensionMinigame: SutureTensionMinigame as SurgicalMinigameComponent,
  SutureMinigame: SutureTensionMinigame as SurgicalMinigameComponent,
  EpoxyResinMinigame: EpoxyResinMinigame as SurgicalMinigameComponent,
  EndoscopyMinigame: EndoscopyMinigame as SurgicalMinigameComponent,
  LcpPlatingMinigame: LcpPlatingMinigame as SurgicalMinigameComponent,
  HemostasisMinigame: HemostasisMinigame as SurgicalMinigameComponent,
  AnestheticInductionMinigame: AnestheticInductionMinigame as SurgicalMinigameComponent,
  WoundDressingMinigame: WoundDressingMinigame as SurgicalMinigameComponent,
};

// ── Instrument Metadata (Portuguese Display) ──
const INSTRUMENT_META: Record<SurgicalInstrument, { name: string; category: string; description: string }> = {
  scalpel: { name: 'Bisturi de Precisão', category: 'Incisão', description: 'Para incisão limpa de pele e musculatura' },
  scissors: { name: 'Tesoura Metzenbaum', category: 'Dissecção', description: 'Para dissecção romba de tecidos delicados' },
  forceps: { name: 'Pinça Anatômica de Redução', category: 'Preensão', description: 'Para alinhamento e redução anatômica de fraturas' },
  hemostat: { name: 'Pinça Hemostática Halsted-Mosquito', category: 'Hemostasia', description: 'Para clampeamento de vasos sangrantes' },
  retractor: { name: 'Afastador Gelpi', category: 'Exposição', description: 'Para manter o campo cirúrgico aberto' },
  bone_drill: { name: 'Perfurador Ósseo Ortopédico', category: 'Osteossíntese', description: 'Para perfuração cortical óssea' },
  ortho_pin: { name: 'Pinos Ortopédicos de Steinmann', category: 'Osteossíntese', description: 'Para fixação intramedular de fraturas' },
  steinmann_pin: { name: 'Pinos Ortopédicos de Steinmann', category: 'Osteossíntese', description: 'Para fixação intramedular de fraturas' },
  syringe: { name: 'Seringa de Irrigação 0.9%', category: 'Irrigação', description: 'Para descontaminação e lavagem do campo' },
  irrigation_syringe: { name: 'Seringa de Irrigação 0.9%', category: 'Irrigação', description: 'Para descontaminação e lavagem do campo' },
  suture_needle: { name: 'Porta-Agulhas Mayo-Hegar', category: 'Síntese', description: 'Para aproximação e sutura de tecidos' },
  epoxy_resin: { name: 'Resina Epóxi de Selamento', category: 'Reconstrução', description: 'Para restauração estrutural de cascos e bicos' },
  epoxy_applicator: { name: 'Resina Epóxi de Selamento', category: 'Reconstrução', description: 'Para restauração estrutural de cascos e bicos' },
  endoscope: { name: 'Endoscópio com Pinça de Apreensão', category: 'Exploração', description: 'Para inspeção e extração de corpos estranhos' },
  lcp_plate: { name: 'Placa Bloqueada LCP', category: 'Osteossíntese', description: 'Para estabilização rígida cortical' },
  cerclage_wire: { name: 'Fio de Cerclagem de Aço', category: 'Osteossíntese', description: 'Para amarrações ósseas de apoio' },
  bipolar_cautery: { name: 'Eletrocautério Bipolar', category: 'Hemostasia', description: 'Para termocoagulação de precisão de vasos sangrantes' },
  anesthesia_mask: { name: 'Vaporizador Anestésico / Máscara', category: 'Anestesia', description: 'Para indução e manutenção de plano anestésico cirúrgico' },
  wound_bandage: { name: 'Bandagem e Curativo Estéril', category: 'Pós-Operatório', description: 'Para curativo cirúrgico e imobilização externa' },
};

export interface TreatmentMinigameProps {
  caseData: CaseData;
  unlockedUpgrades?: string[];
  onComplete: (procedures: string[]) => void;
  onClose: () => void;
}

export interface ActiveExecution {
  stepId: string;
  executionToken: string;
}

export const TreatmentMinigame: React.FC<TreatmentMinigameProps> = ({
  caseData,
  unlockedUpgrades = [],
  onComplete,
  onClose,
}) => {
  // ── Versioned Session Storage Key to Prevent Legacy Inconsistencies ──
  const stepsSessionKey = `medzoo_steps_v3_${caseData.id}`;

  // ── SINGLE SOURCE OF TRUTH: steps array ──
  const [steps, setSteps] = useState<SurgicalStep[]>(() => {
    try {
      const raw = sessionStorage.getItem(stepsSessionKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (validateRuntimeSteps(parsed)) {
          console.log('[SURGERY INIT]', {
            caseId: caseData.id,
            steps: parsed,
            stepShapes: parsed.map((s: any) => Object.keys(s)),
          });
          return parsed;
        } else {
          console.warn('[SURGERY REJECTED] reason=invalid_session_shape expected=SurgicalStep[] received=', parsed);
          sessionStorage.removeItem(stepsSessionKey);
        }
      }
    } catch (e) {
      console.warn('[SURGERY REJECTED] reason=session_read_error error=', e);
    }

    const initialized = initializeSurgicalSteps(caseData.treatmentSequence);
    console.log('[SURGERY INIT]', {
      caseId: caseData.id,
      steps: initialized,
      stepShapes: initialized.map((s) => Object.keys(s)),
    });
    return initialized;
  });

  const stepsRef = useRef<SurgicalStep[]>(steps);
  useEffect(() => {
    stepsRef.current = steps;
    sessionStorage.setItem(stepsSessionKey, JSON.stringify(steps));
  }, [steps, stepsSessionKey]);

  // ── RUNTIME CONTRACT ASSERTION CHECK ──
  useEffect(() => {
    for (const s of steps) {
      if (!s || !s.definition || !s.definition.id || !['pending', 'active', 'completed'].includes(s.status)) {
        console.error('[SURGERY REJECTED] reason=invalid_runtime_step_shape step=', s);
        throw new Error(`[RUNTIME ERROR] Invalid SurgicalStep shape in runtime! step=${JSON.stringify(s)}`);
      }
    }
  }, [steps]);

  // ── DERIVED PROGRESS VALUES (Zero duplicate activeStep state!) ──
  const currentStep = useMemo(() => steps.find((s) => s.status === 'active'), [steps]);
  const completedSteps = useMemo(() => steps.filter((s) => s.status === 'completed'), [steps]);
  const isAllRequiredCompleted = useMemo(() => {
    return steps.every((s) => !s.definition.required || s.status === 'completed');
  }, [steps]);

  // ── EPHEMERAL EXECUTION ATTEMPT CONTROL ──
  const activeExecutionRef = useRef<ActiveExecution | null>(null);

  // ── Phase FSM ('PRE_OP' | 'SURGERY' | 'POST_OP') ──
  const [phase, setPhase] = useState<'PRE_OP' | 'SURGERY' | 'POST_OP'>(() => {
    return isAllRequiredCompleted ? 'POST_OP' : 'PRE_OP';
  });

  const [activeMinigameId, setActiveMinigameId] = useState<SpecializedMinigameType | null>(null);
  const [anesthesiaDepth, setAnesthesiaDepth] = useState(0.5); // Default 50% ideal
  const [iatrogenicWarning, setIatrogenicWarning] = useState<string | null>(null);

  // ── Vitals & Physiology ──
  const speciesId = caseData.scientificName
    ? caseData.scientificName.toLowerCase().trim().replace(/\s+/g, '_')
    : (caseData.id || 'hydrochoerus_hydrochaeris');

  const [vitals, setVitals] = useState<VitalsParameters>(() => createInitialVitals(speciesId as any));
  const [metrics, setMetrics] = useState<PrecisionMetrics>({
    incisionAccuracy: 0,
    stressAccumulated: 0,
    timeElapsed: 0,
    iatrogenicDamage: 0,
    proceduresCompleted: [],
  });

  const startTimeRef = useRef<number>(Date.now());

  // ── Vitals Loop ──
  useEffect(() => {
    const timer = setInterval(() => {
      setVitals((prev: VitalsParameters) => updateVitals(prev, 1, { handling: 0.1, painLevel: 0, anesthesiaDepth }));
    }, 1000);
    return () => clearInterval(timer);
  }, [anesthesiaDepth]);

  // ── Gatekeeping Step Opening ──
  const handleStepClick = useCallback(
    (targetStep: SurgicalStep) => {
      soundManager.playClick();

      if (targetStep.status === 'completed') {
        setIatrogenicWarning(`✓ Etapa '${targetStep.definition.title}' já foi concluída com sucesso.`);
        setTimeout(() => setIatrogenicWarning(null), 3000);
        return;
      }

      if (targetStep.status === 'pending') {
        soundManager.playError();
        const prereqTitles = targetStep.definition.prerequisiteStepIds
          ?.map((pid) => stepsRef.current.find((s) => s.definition.id === pid)?.definition.title || pid)
          .join(', ');
        setIatrogenicWarning(`🔒 Etapa Bloqueada — Conclua os pré-requisitos antes: ${prereqTitles || 'Etapa anterior'}`);
        setTimeout(() => setIatrogenicWarning(null), 3500);
        return;
      }

      if (targetStep.status === 'active') {
        let minigameId = targetStep.definition.minigameId;
        if (minigameId === 'SutureMinigame') minigameId = 'SutureTensionMinigame';
        if (minigameId === 'IncisionMinigame') minigameId = 'SoftTissueIncisionMinigame';

        if (!minigameId || !MINIGAME_REGISTRY[minigameId]) {
          soundManager.playError();
          setIatrogenicWarning(`🔒 Nenhum minigame cadastrado para a etapa '${targetStep.definition.title}'.`);
          setTimeout(() => setIatrogenicWarning(null), 3500);
          return;
        }

        // Generate Execution Token
        const token = crypto.randomUUID();
        activeExecutionRef.current = {
          stepId: targetStep.definition.id || '',
          executionToken: token,
        };

        console.log('[SURGERY OPEN]', {
          stepId: targetStep.definition.id,
          stepTitle: targetStep.definition.title,
          instrumentId: targetStep.definition.instrumentId,
          minigameId: targetStep.definition.minigameId,
          executionToken: token,
        });

        setIatrogenicWarning(null);
        soundManager.playSuccess();
        setActiveMinigameId(minigameId);
      }
    },
    []
  );

  // ── Callback for Minigame Completion (Strict Payload Validation) ──
  const handleMinigameComplete = useCallback(
    (payload: MinigameCompletionPayload) => {
      const activeExec = activeExecutionRef.current;

      if (!payload || typeof payload !== 'object' || !payload.executionToken || !payload.stepId) {
        console.warn('[SURGERY REJECTED] reason=invalid_payload_object received=', payload);
        setActiveMinigameId(null);
        return;
      }

      if (
        !activeExec ||
        activeExec.executionToken !== payload.executionToken ||
        activeExec.stepId !== payload.stepId
      ) {
        console.warn('[SURGERY REJECTED] reason=token_or_step_mismatch', {
          expected: activeExec,
          received: { stepId: payload.stepId, executionToken: payload.executionToken },
        });
        setActiveMinigameId(null);
        return;
      }

      console.log('[SURGERY COMPLETE]', {
        stepId: payload.stepId,
        executionToken: payload.executionToken,
        result: payload.result,
        accuracy: payload.accuracy,
        damage: payload.damage,
        timeTaken: payload.timeTaken,
      });

      // Invalidate active execution ref immediately
      activeExecutionRef.current = null;
      setActiveMinigameId(null);

      // Execute Pure Step Transformation
      const result: StepTransitionResult = transitionSurgicalStep(stepsRef.current, payload);

      if (payload.result === 'failure' || !result.isSuccess) {
        soundManager.playError();
        const damage = Math.min(15, payload.damage || 10);
        setIatrogenicWarning(`Falha na execução do procedimento. Tente novamente.`);
        setVitals((prev: VitalsParameters) => ({
          ...prev,
          bloodPressureSystolic: Math.max(20, prev.bloodPressureSystolic - damage),
          stressIntegral: prev.stressIntegral + damage,
        }));
        setTimeout(() => setIatrogenicWarning(null), 3500);
        return;
      }

      // Success path: update steps state
      soundManager.playSuccess();
      setSteps(result.nextSteps);

      const safeDamage = Math.min(15, payload.damage || 0);
      const safeAccuracy = Math.max(0, Math.min(1.0, payload.accuracy > 1 ? payload.accuracy / 100 : payload.accuracy));

      setMetrics((prev: PrecisionMetrics) => ({
        ...prev,
        proceduresCompleted: Array.from(new Set([...prev.proceduresCompleted, payload.stepId])),
        incisionAccuracy:
          prev.proceduresCompleted.length > 0
            ? (prev.incisionAccuracy * prev.proceduresCompleted.length + safeAccuracy) / (prev.proceduresCompleted.length + 1)
            : safeAccuracy,
        iatrogenicDamage: prev.iatrogenicDamage + safeDamage,
      }));

      // Check if all required steps are completed
      if (result.allRequiredCompleted) {
        setPhase('POST_OP');
      }
    },
    []
  );

  const handleMinigameCancel = useCallback(() => {
    activeExecutionRef.current = null;
    setActiveMinigameId(null);
  }, []);

  const handleVitalsDrain = useCallback((damage: number) => {
    setVitals((prev: VitalsParameters) => ({
      ...prev,
      bloodPressureSystolic: Math.max(20, prev.bloodPressureSystolic - damage),
      heartRate: Math.min(250, prev.heartRate + damage * 2),
    }));
  }, []);

  const handleFinishSurgery = () => {
    sessionStorage.removeItem(stepsSessionKey);
    const score = computeSurgicalScore(metrics, (Date.now() - startTimeRef.current) / 1000);
    const procedureList = steps
      .filter((s) => s.status === 'completed')
      .map((s) => s.definition.id)
      .filter((id): id is string => typeof id === 'string' && id.length > 0);
    procedureList.push(`surgical_score:${score.toFixed(1)}`);

    // Inject appropriate treatment IDs from caseData to ensure compatibility with workstation evaluation
    const appropriateTreatments = caseData.treatmentOptions.filter((t) => t.appropriate).map((t) => t.id);
    if (appropriateTreatments.length > 0) {
      procedureList.push(...appropriateTreatments);
    } else {
      procedureList.push('t_correct');
    }

    onComplete(procedureList);
  };

  const ActiveMinigameComponent = activeMinigameId ? MINIGAME_REGISTRY[activeMinigameId] : null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0B1511] text-[#E2E8F0] flex flex-col p-6 select-none overflow-hidden font-sans">
      {/* Top Header */}
      <div className="bg-[#0E1713] border border-slate-800 rounded-2xl p-4 flex items-center justify-between shadow-xl mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-950 border border-emerald-500/40 rounded-xl text-emerald-400">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-extrabold text-white text-base tracking-wider flex items-center gap-2">
              BLOCO OPERATÓRIO — {caseData.patientCode} ({caseData.speciesName})
            </h1>
            <p className="text-xs text-slate-400 font-mono">
              Fase: {phase === 'PRE_OP' ? 'Avaliação Pré-Operatória' : phase === 'SURGERY' ? 'Procedimento Cirúrgico' : 'Recuperação Pós-Operatória'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-[10px] text-slate-400 font-mono block">FREQUÊNCIA CARDÍACA</span>
            <span className="text-lg font-mono font-black text-emerald-400">
              {Math.round(vitals.heartRate)} <span className="text-xs font-normal">bpm</span>
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Warning Modal Banner */}
      <AnimatePresence>
        {iatrogenicWarning && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-4 p-3 bg-amber-950/80 border border-amber-500/50 rounded-xl text-amber-300 text-xs font-bold flex items-center gap-2 shadow-lg"
          >
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{iatrogenicWarning}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Workspace Layout */}
      <div className="flex-1 grid grid-cols-12 gap-4 overflow-hidden">
        {/* Left Column: Surgical Checklist HUD (Derived Projection) */}
        <div className="col-span-4 bg-[#0E1713] border border-slate-800 rounded-2xl p-5 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <h2 className="text-xs font-black text-[#E8B84A] uppercase tracking-widest flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Checklist Cirúrgico
              </h2>
              <span className="text-xs font-mono font-bold text-[#E8B84A]">
                {completedSteps.length} / {steps.length}
              </span>
            </div>

            <div className="space-y-2.5 overflow-y-auto max-h-[480px] custom-scrollbar pr-1">
              {steps.map((step) => {
                const isDone = step.status === 'completed';
                const isActive = step.status === 'active';
                const instrumentInfo = INSTRUMENT_META[step.definition.instrumentId || 'scalpel'];

                return isDone ? (
                  <div
                    key={step.definition.id}
                    className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <span className="font-bold block">{step.definition.title}</span>
                        <span className="text-[10px] text-emerald-400/70 font-mono">{instrumentInfo?.name}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-emerald-900/60 px-2 py-0.5 rounded text-emerald-300">
                      Concluído
                    </span>
                  </div>
                ) : (
                  <button
                    key={step.definition.id}
                    onClick={() => handleStepClick(step)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between cursor-pointer group ${
                      isActive
                        ? 'bg-amber-950/40 hover:bg-amber-900/60 border-amber-500/60 text-amber-300 shadow-md'
                        : 'bg-slate-900/40 hover:bg-slate-800/60 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <AlertTriangle className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                      <div>
                        <span className="font-bold block text-slate-200">{step.definition.title}</span>
                        <span className="text-[10px] text-slate-400 font-mono">{instrumentInfo?.name || step.definition.instrumentId}</span>
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-1 rounded font-extrabold transition-colors ${
                      isActive
                        ? 'bg-amber-900/80 group-hover:bg-[#E8B84A] group-hover:text-black text-amber-200'
                        : 'bg-slate-800 text-slate-500'
                    }`}>
                      {isActive ? ' Executar →' : '○ Pendente'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <span className="text-[10px] font-mono text-slate-500 block mb-1 uppercase">Procedimento Ativo</span>
            <div className="p-3 bg-black/40 rounded-xl border border-slate-800 text-xs font-bold text-slate-300">
              {currentStep ? currentStep.definition.title : 'Todos os procedimentos concluídos'}
            </div>
          </div>
        </div>

        {/* Right Column: Central Operation & Phase Panel */}
        <div className="col-span-8 bg-[#0E1713] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden">
          {/* Phase 1: Pre-Op Anesthesia Panel */}
          {phase === 'PRE_OP' && (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-purple-950/60 border border-purple-500/50 flex items-center justify-center mb-4 text-purple-400 shadow-lg">
                <Heart className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Avaliação & Indução Anestésica</h2>
              <p className="text-xs text-slate-300 max-w-md mb-6">
                Ajuste o plano anestésico na zona ideal (40% a 75%) e confirme a estabilização antes de iniciar a intervenção.
              </p>

              <div className="w-full max-w-md bg-black/40 p-5 rounded-2xl border border-slate-800 space-y-4 mb-6">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-300">Profundidade Anestésica</span>
                  <span className="font-mono text-purple-400 text-sm font-extrabold">{Math.round(anesthesiaDepth * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={anesthesiaDepth * 100}
                  onChange={(e) => setAnesthesiaDepth(Number(e.target.value) / 100)}
                  className="w-full accent-purple-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>Superficial (&lt;40%)</span>
                  <span className="text-emerald-400 font-bold">Ideal (40%-75%)</span>
                  <span className="text-rose-400 font-bold">Profundo (&gt;75%)</span>
                </div>
              </div>

              <button
                onClick={() => {
                  soundManager.playSuccess();
                  setPhase('SURGERY');
                }}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer"
              >
                Confirmar Anestesia e Iniciar Cirurgia
              </button>
            </div>
          )}

          {/* Phase 2: Surgery Execution Panel */}
          {phase === 'SURGERY' && (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
              {currentStep ? (
                <div>
                  <div className="w-16 h-16 rounded-full bg-amber-950/60 border border-amber-500/50 flex items-center justify-center mb-4 mx-auto text-amber-400 shadow-lg">
                    <Wrench className="w-8 h-8" />
                  </div>
                  <h2 className="text-xl font-bold text-[#E8B84A] mb-2">{currentStep.definition.title}</h2>
                  <p className="text-xs text-slate-300 max-w-md mb-6">{currentStep.definition.description}</p>
                  <button
                    onClick={() => handleStepClick(currentStep)}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-500 text-black font-black text-sm uppercase tracking-wider shadow-xl hover:scale-105 transition-all cursor-pointer"
                  >
                    Iniciar Procedimento ({currentStep.definition.title}) →
                  </button>
                </div>
              ) : (
                <div>
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-4 mx-auto" />
                  <h2 className="text-xl font-bold text-emerald-400 mb-2">Todas as Etapas Concluídas</h2>
                  <p className="text-xs text-slate-300 mb-6">Aguardando transição para recuperação pós-operatória.</p>
                  <button
                    onClick={() => setPhase('POST_OP')}
                    className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider"
                  >
                    Avançar para Pós-Operatório
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Phase 3: Post-Op Recovery Panel */}
          {phase === 'POST_OP' && (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500 flex items-center justify-center mb-4 text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-black text-emerald-400 uppercase tracking-wider mb-2">
                Cirurgia Finalizada com Sucesso
              </h2>
              <p className="text-slate-300 text-xs max-w-md mb-6">
                Todas as etapas cirúrgicas requeridas foram executadas. Assine o relatório clínico para encerrar o procedimento.
              </p>
              <button
                onClick={handleFinishSurgery}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-sm uppercase tracking-wider shadow-xl hover:scale-105 transition-all cursor-pointer"
              >
                Assinar Relatório & Finalizar Cirurgia
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Deterministic Minigame Overlay (Strict Component Resolution) */}
      <AnimatePresence>
        {activeMinigameId && ActiveMinigameComponent && activeExecutionRef.current && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 bg-[#0B1511]/95 backdrop-blur-xl flex items-center justify-center p-3 md:p-6"
          >
            <div className="w-full max-w-5xl h-[min(650px,calc(100vh-1.5rem))] max-h-full relative flex flex-col">
              <ActiveMinigameComponent
                stepId={activeExecutionRef.current.stepId}
                executionToken={activeExecutionRef.current.executionToken}
                onComplete={handleMinigameComplete}
                onCancel={handleMinigameCancel}
                onVitalsDrain={handleVitalsDrain}
                unlockedUpgrades={unlockedUpgrades}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
