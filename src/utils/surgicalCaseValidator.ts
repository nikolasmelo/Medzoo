import type { CaseData, SurgicalInstrument } from '../types';

export interface SurgicalStepDefinition {
  id: string;
  title: string;
  instrumentId: SurgicalInstrument;
  minigameId?: string;
  required?: boolean; // Default: true
  prerequisiteStepIds?: string[];
  damageToVitalsOnMistake?: number;
}

export interface CaseValidationError {
  caseId: string;
  caseTitle: string;
  severity: 'error' | 'warning';
  code:
    | 'DUPLICATE_STEP_ID'
    | 'INVALID_INSTRUMENT_ID'
    | 'INVALID_MINIGAME_ID'
    | 'BROKEN_PREREQUISITE_REF'
    | 'PREREQUISITE_CYCLE'
    | 'UNREACHABLE_STEP'
    | 'NO_REQUIRED_STEPS'
    | 'MULTIPLE_INITIAL_STEPS'
    | 'NO_INITIAL_STEP'
    | 'MISSING_COMPLETION_MECHANISM'
    | 'OPTIONAL_BLOCKS_REQUIRED'
    | 'ENGLISH_TECHNICAL_TITLE_LEAK'
    | 'SEQUENCE_ANESTHESIA_MISSING';
  message: string;
  stepId?: string;
}

const KNOWN_INSTRUMENTS: Set<SurgicalInstrument> = new Set([
  'scalpel',
  'scissors',
  'forceps',
  'hemostat',
  'retractor',
  'bone_drill',
  'ortho_pin',
  'steinmann_pin',
  'syringe',
  'irrigation_syringe',
  'suture_needle',
  'epoxy_resin',
  'epoxy_applicator',
  'endoscope',
  'lcp_plate',
  'cerclage_wire',
  'bipolar_cautery',
  'anesthesia_mask',
  'wound_bandage',
]);

const KNOWN_MINIGAMES: Set<string> = new Set([
  'BoneDrillMinigame',
  'SyringeIrrigationMinigame',
  'EpoxyResinMinigame',
  'OrthopedicPinsMinigame',
  'EndoscopyMinigame',
  'SoftTissueIncisionMinigame',
  'SutureTensionMinigame',
  'FractureReductionMinigame',
  'PharmacologyMinigame',
  'LcpPlatingMinigame',
  'HemostasisMinigame',
  'AnestheticInductionMinigame',
  'WoundDressingMinigame',
  'SutureMinigame',
  'IncisionMinigame',
  'drill',
  'resin',
  'pins',
  'irrigation',
  'incision',
  'suture',
  'reduction',
  'endoscopy',
  'pharmacology',
  'plating',
  'hemostasis',
  'anesthesia',
  'dressing',
  'None',
]);

/**
 * Validates the structural integrity of surgical case definitions.
 */
export function validateSurgicalCases(cases: CaseData[]): CaseValidationError[] {
  const errors: CaseValidationError[] = [];

  for (const c of cases) {
    const rawSequence = c.treatmentSequence || [];
    if (rawSequence.length === 0) continue; // Non-surgical case

    // Cast raw sequence items to SurgicalStepDefinition
    const steps: SurgicalStepDefinition[] = rawSequence.map((item: any, idx: number) => {
      const stepId = item.id || `step_${String(idx + 1).padStart(2, '0')}`;
      return {
        id: stepId,
        title: item.title || item.tool || `Etapa ${idx + 1}`,
        instrumentId: (item.instrumentId || item.tool) as SurgicalInstrument,
        minigameId: item.minigameId || item.minigame,
        required: item.required !== false,
        prerequisiteStepIds: item.prerequisiteStepIds || (idx > 0 ? [(rawSequence[idx - 1] as any).id || `step_${String(idx).padStart(2, '0')}`] : []),
        damageToVitalsOnMistake: item.damageToVitalsOnMistake,
      };
    });

    const caseTitle = (c as any).title || c.speciesName;
    const stepIdSet = new Set<string>();
    const requiredSteps = steps.filter((s) => s.required !== false);

    if (requiredSteps.length === 0) {
      errors.push({
        caseId: c.id,
        caseTitle,
        severity: 'warning',
        code: 'NO_REQUIRED_STEPS',
        message: `O caso '${caseTitle}' não possui nenhuma etapa cirúrgica marcada como obrigatória.`,
      });
    }

    // 1. Check duplicate step IDs & instrument validity
    for (const step of steps) {
      if (stepIdSet.has(step.id)) {
        errors.push({
          caseId: c.id,
          caseTitle,
          severity: 'error',
          code: 'DUPLICATE_STEP_ID',
          message: `ID de etapa duplicado '${step.id}' encontrado no caso '${caseTitle}'.`,
          stepId: step.id,
        });
      }
      stepIdSet.add(step.id);

      // Check for English technical string leak in title
      if (
        step.title.includes('_') ||
        KNOWN_INSTRUMENTS.has(step.title as any) ||
        step.title === step.instrumentId
      ) {
        errors.push({
          caseId: c.id,
          caseTitle,
          severity: 'error',
          code: 'ENGLISH_TECHNICAL_TITLE_LEAK',
          message: `Vazamento de string técnica em inglês '${step.title}' na etapa '${step.id}' do caso '${caseTitle}'.`,
          stepId: step.id,
        });
      }

      // Check minigame registered
      if (step.minigameId && !KNOWN_MINIGAMES.has(step.minigameId)) {
        errors.push({
          caseId: c.id,
          caseTitle,
          severity: 'error',
          code: 'INVALID_MINIGAME_ID',
          message: `Minigame não registrado '${step.minigameId}' na etapa '${step.id}' do caso '${caseTitle}'.`,
          stepId: step.id,
        });
      }

      // Check instrument known
      if (step.instrumentId && !KNOWN_INSTRUMENTS.has(step.instrumentId)) {
        errors.push({
          caseId: c.id,
          caseTitle,
          severity: 'error',
          code: 'INVALID_INSTRUMENT_ID',
          message: `Instrumento cirúrgico desconhecido '${step.instrumentId}' na etapa '${step.id}' do caso '${caseTitle}'.`,
          stepId: step.id,
        });
      }
    }

    // 2. Check for self-dependency and nonexistent prerequisites
    for (const step of steps) {
      if (step.prerequisiteStepIds) {
        for (const prereqId of step.prerequisiteStepIds) {
          if (prereqId === step.id) {
            errors.push({
              caseId: c.id,
              caseTitle,
              severity: 'error',
              code: 'PREREQUISITE_CYCLE',
              message: `A etapa '${step.id}' refere a si mesma como pré-requisito no caso '${caseTitle}'.`,
              stepId: step.id,
            });
          } else if (!stepIdSet.has(prereqId)) {
            errors.push({
              caseId: c.id,
              caseTitle,
              severity: 'error',
              code: 'BROKEN_PREREQUISITE_REF',
              message: `A etapa '${step.id}' faz referência a um pré-requisito inexistente '${prereqId}' no caso '${caseTitle}'.`,
              stepId: step.id,
            });
          }
        }
      }
    }

    // 3. Check for initial step and graph reachability
    const initialSteps = steps.filter(
      (s) => !s.prerequisiteStepIds || s.prerequisiteStepIds.length === 0
    );

    if (initialSteps.length === 0 && steps.length > 0) {
      errors.push({
        caseId: c.id,
        caseTitle,
        severity: 'error',
        code: 'NO_INITIAL_STEP',
        message: `O caso '${caseTitle}' não possui nenhuma etapa inicial elegível (todas possuem pré-requisitos).`,
      });
    }

    // Reachability simulation from initial steps
    const reachable = new Set<string>();
    const queue = initialSteps.map((s) => s.id);
    queue.forEach((id) => reachable.add(id));

    while (queue.length > 0) {
      queue.shift();
      for (const step of steps) {
        if (!reachable.has(step.id) && step.prerequisiteStepIds) {
          const allPrereqsMet = step.prerequisiteStepIds.every((p) => reachable.has(p));
          if (allPrereqsMet) {
            reachable.add(step.id);
            queue.push(step.id);
          }
        }
      }
    }

    for (const step of steps) {
      if (step.required !== false && !reachable.has(step.id)) {
        errors.push({
          caseId: c.id,
          caseTitle,
          severity: 'error',
          code: 'UNREACHABLE_STEP',
          message: `A etapa obrigatória '${step.id}' (${step.title}) é inalcançável a partir do estado inicial no caso '${caseTitle}'.`,
          stepId: step.id,
        });
      }
    }
  }

  return errors;
}
