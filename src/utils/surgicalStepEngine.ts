import type {
  SurgicalStepDefinition,
  SurgicalStep,
  MinigameCompletionPayload,
  StepTransitionResult,
  SurgicalInstrument,
  SpecializedMinigameType,
} from '../types';

/**
 * Strict Runtime Validator: Ensures that any array of steps (whether initialized,
 * transformed, or restored from sessionStorage) conforms 100% to SurgicalStep[].
 */
export function validateRuntimeSteps(steps: any): steps is SurgicalStep[] {
  if (!Array.isArray(steps) || steps.length === 0) return false;
  for (const s of steps) {
    if (!s || typeof s !== 'object') return false;
    if (!s.definition || typeof s.definition !== 'object') return false;
    if (typeof s.definition.id !== 'string' || !s.definition.id) return false;
    if (typeof s.definition.title !== 'string' || !s.definition.title) return false;
    if (typeof s.definition.instrumentId !== 'string' || !s.definition.instrumentId) return false;
    if (typeof s.definition.required !== 'boolean') return false;
    if (!['pending', 'active', 'completed'].includes(s.status)) return false;
  }
  return true;
}

/**
 * Initializes runtime SurgicalStep[] from static SurgicalStepDefinition[].
 * If no sequence is provided, returns default fallback steps.
 */
export function initializeSurgicalSteps(
  sequence?: SurgicalStepDefinition[]
): SurgicalStep[] {
  if (!sequence || sequence.length === 0) {
    const defaultDefs: SurgicalStepDefinition[] = [
      {
        id: 'step_01_irrigation',
        title: 'Irrigação e Descontaminação',
        description: 'Lave o leito cirúrgico com solução salina 0.9%',
        instrumentId: 'irrigation_syringe',
        minigameId: 'SyringeIrrigationMinigame',
        required: true,
        prerequisiteStepIds: [],
        damageToVitalsOnMistake: 15,
      },
      {
        id: 'step_02_suture',
        title: 'Síntese Tecidual e Sutura',
        description: 'Aproxime as bordas e execute a síntese',
        instrumentId: 'suture_needle',
        minigameId: 'SutureTensionMinigame',
        required: true,
        prerequisiteStepIds: ['step_01_irrigation'],
        damageToVitalsOnMistake: 15,
      },
    ];

    return defaultDefs.map((def, idx) => ({
      definition: def,
      status: idx === 0 ? 'active' : 'pending',
    }));
  }

  let firstActiveSet = false;

  return sequence.map((def, idx) => {
    const rawPrereqs = def.prerequisiteStepIds || (idx > 0 && sequence[idx - 1].id ? [sequence[idx - 1].id as string] : []);
    const prereqs: string[] = rawPrereqs.filter((p): p is string => typeof p === 'string' && p.length > 0);
    let minigame = (def.minigameId || (def as any).minigame) as SpecializedMinigameType;
    if ((minigame as string) === 'SutureMinigame') minigame = 'SutureTensionMinigame';
    if ((minigame as string) === 'IncisionMinigame') minigame = 'SoftTissueIncisionMinigame';

    const DEFAULT_TITLES: Record<string, string> = {
      SyringeIrrigationMinigame: 'Irrigação e Lavagem do Campo',
      SoftTissueIncisionMinigame: 'Incisão e Acesso Cirúrgico',
      IncisionMinigame: 'Incisão e Acesso Cirúrgico',
      SutureTensionMinigame: 'Sutura e Síntese Tecidual',
      SutureMinigame: 'Sutura e Síntese Tecidual',
      BoneDrillMinigame: 'Perfuração Óssea Ortopédica',
      FractureReductionMinigame: 'Redução Anatômica da Fratura',
      OrthopedicPinsMinigame: 'Inserção de Pinos Ortopédicos',
      EpoxyResinMinigame: 'Fixação e Modelagem com Resina',
      EndoscopyMinigame: 'Inspeção Endoscópica do Trato',
      LcpPlatingMinigame: 'Fixação Rígida com Placa LCP',
      HemostasisMinigame: 'Hemostasia e Termocoagulação',
      AnestheticInductionMinigame: 'Indução Anestésica Inalatória',
      WoundDressingMinigame: 'Curativo e Bandagem Protetora',
    };

    const title = def.title && !def.title.startsWith('Etapa ')
      ? def.title
      : (DEFAULT_TITLES[minigame] || def.title || `Etapa ${idx + 1}`);

    const cleanDef: SurgicalStepDefinition = {
      ...def,
      id: def.id || `step_${String(idx + 1).padStart(2, '0')}`,
      title,
      instrumentId: (def.instrumentId || (def as any).tool || 'scalpel') as SurgicalInstrument,
      minigameId: minigame,
      required: def.required !== false,
      prerequisiteStepIds: prereqs,
      damageToVitalsOnMistake: def.damageToVitalsOnMistake || 15,
    };

    let status: 'pending' | 'active' | 'completed' = 'pending';
    if (!firstActiveSet && (prereqs.length === 0 || idx === 0)) {
      status = 'active';
      firstActiveSet = true;
    }

    return {
      definition: cleanDef,
      status,
    };
  });
}

/**
 * Pure Transformer: Takes current steps array and minigame result payload,
 * and produces the new SurgicalStep[] state along with transition metadata.
 */
export function transitionSurgicalStep(
  prevSteps: SurgicalStep[],
  payload: MinigameCompletionPayload
): StepTransitionResult {
  if (payload.result === 'failure') {
    const allReqDone = prevSteps.every(
      (s) => !s.definition.required || s.status === 'completed'
    );
    return {
      nextSteps: prevSteps,
      allRequiredCompleted: allReqDone,
      isSuccess: false,
    };
  }

  // Success path: mark target step as completed
  const targetStepId = payload.stepId;
  const nextSteps = prevSteps.map((step) => {
    if (step.definition.id === targetStepId) {
      return { ...step, status: 'completed' as const };
    }
    return step;
  });

  const completedIds = new Set(
    nextSteps.filter((s) => s.status === 'completed').map((s) => s.definition.id)
  );

  // Activate the next eligible pending step whose prerequisites are met
  let nextActivatedId: string | undefined = undefined;
  let hasActiveAlready = nextSteps.some((s) => s.status === 'active');

  const updatedSteps = nextSteps.map((step) => {
    if (!hasActiveAlready && step.status === 'pending') {
      const prereqs = step.definition.prerequisiteStepIds || [];
      const prereqsMet = prereqs.every((pid) => completedIds.has(pid));
      if (prereqsMet) {
        hasActiveAlready = true;
        nextActivatedId = step.definition.id;
        return { ...step, status: 'active' as const };
      }
    }
    return step;
  });

  const allRequiredCompleted = updatedSteps.every(
    (s) => !s.definition.required || s.status === 'completed'
  );

  return {
    nextSteps: updatedSteps,
    allRequiredCompleted,
    completedStepId: targetStepId,
    nextStepId: nextActivatedId,
    isSuccess: true,
  };
}
