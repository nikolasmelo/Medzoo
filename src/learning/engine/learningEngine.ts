// src/learning/engine/learningEngine.ts
import type {
  LearningExercise,
  ExerciseAttempt,
  ConceptMastery,
  CausalChain,
} from '../types/learning';

export interface ExerciseEvaluationResult {
  isCorrect: boolean;
  scoreDelta: number;
  feedback: string;
  conceptualErrorCategory?: string;
  causalChain?: CausalChain;
  suggestedAction?: 'advance' | 'retry' | 'review_theory';
}

/**
 * Avaliação estritamente DETERMINÍSTICA de exercícios do Modo Aula.
 * Sem dependência de LLM/IA para cálculo de números ou escolhas objetivas.
 */
export function evaluateExercise(
  exercise: LearningExercise,
  studentAnswer: string | number
): ExerciseEvaluationResult {
  // 1. CÁLCULO DE DOSE
  if (exercise.type === 'dose_calculation') {
    const numericAns = typeof studentAnswer === 'number' ? studentAnswer : parseFloat(String(studentAnswer).replace(',', '.'));
    const expected = exercise.correctNumericValue ?? 0;
    const tolerance = exercise.numericTolerance ?? 0.01;

    if (isNaN(numericAns)) {
      return {
        isCorrect: false,
        scoreDelta: -5,
        feedback: '⚠️ Valor numérico inválido. Digite um número positivo com ponto ou vírgula decimal (ex: 0.15).',
        conceptualErrorCategory: 'invalid_number_format',
        suggestedAction: 'retry'
      };
    }

    // Diagnóstico de erro conceitual comum
    const ctx = exercise.contextData;
    if (ctx && ctx.patientWeightKg && ctx.targetDoseMgKg && ctx.drugConcentrationMgMl) {
      const { patientWeightKg: P, targetDoseMgKg: D, drugConcentrationMgMl: C } = ctx;

      // Erro 1: Aluno multiplicou em vez de dividir por concentração: (P * D) * C
      const multConc = (P * D) * C;
      if (Math.abs(numericAns - multConc) <= tolerance * 2) {
        return {
          isCorrect: false,
          scoreDelta: -10,
          feedback: `❌ Erro Conceitual: Você multiplicou pela concentração (${C} mg/mL) em vez de dividir! Lembre-se: Concentração é a densidade de princípio ativo por mL. Para saber quantos mL contêm a massa necessária em mg, devemos DIVIDIR a massa pela concentração: V = (Peso × Dose) ÷ Concentração.`,
          conceptualErrorCategory: 'multiplied_by_concentration',
          causalChain: exercise.causalChain,
          suggestedAction: 'retry'
        };
      }

      // Erro 2: Aluno esqueceu de multiplicar pelo peso: D / C
      const forgotWeight = D / C;
      if (Math.abs(numericAns - forgotWeight) <= tolerance) {
        return {
          isCorrect: false,
          scoreDelta: -10,
          feedback: `❌ Erro Conceitual: Você esqueceu de considerar o peso do paciente (${P} kg)! A dose prescrita em mg/kg é por cada quilograma. Pacientes silvestres variam de gramas a dezenas de quilos; a dose total deve sempre ser multiplicada pelo peso corporal: Massa (mg) = ${P} kg × ${D} mg/kg.`,
          conceptualErrorCategory: 'forgot_patient_weight',
          causalChain: exercise.causalChain,
          suggestedAction: 'retry'
        };
      }

      // Erro 3: Inversão da fórmula: C / (P * D)
      const inverted = C / (P * D);
      if (Math.abs(numericAns - inverted) <= tolerance) {
        return {
          isCorrect: false,
          scoreDelta: -10,
          feedback: `❌ Erro Conceitual: Você inverteu a fração! Dividiu a concentração pelo produto de peso e dose. A fórmula correta é: Volume (mL) = (Peso [kg] × Dose [mg/kg]) ÷ Concentração [mg/mL].`,
          conceptualErrorCategory: 'inverted_fraction',
          causalChain: exercise.causalChain,
          suggestedAction: 'retry'
        };
      }
    }

    // Verificação da tolerância aceitável
    const diff = Math.abs(numericAns - expected);
    if (diff <= tolerance) {
      return {
        isCorrect: true,
        scoreDelta: 20,
        feedback: `✅ Exato! ${numericAns.toFixed(2)} mL é o volume correto. ${exercise.pedagogicalExplanation}`,
        causalChain: exercise.causalChain,
        suggestedAction: 'advance'
      };
    }

    // Subdose vs Sobredose
    const isSubdose = numericAns < expected;
    const deviationPercent = Math.round(Math.abs((numericAns - expected) / expected) * 100);
    return {
      isCorrect: false,
      scoreDelta: -10,
      feedback: isSubdose
        ? `⚠️ Subdose detectada! Você prescreveu ${numericAns.toFixed(2)} mL (${deviationPercent}% abaixo do ideal de ${expected.toFixed(2)} mL). Em fauna silvestre, doses subterapêuticas falham no controle da patologia e induzem resistência microbiana.`
        : `🚨 Sobredose perigosa! Você prescreveu ${numericAns.toFixed(2)} mL (${deviationPercent}% acima do ideal de ${expected.toFixed(2)} mL). Risco agudo de toxicidade iatrogênica renal ou hepática severa!`,
      conceptualErrorCategory: isSubdose ? 'subdose_error' : 'overdose_error',
      causalChain: exercise.causalChain,
      suggestedAction: 'retry'
    };
  }

  // 2. MÚLTIPLA ESCOLHA & CASO CLÍNICO
  if (exercise.type === 'multiple_choice' || exercise.type === 'clinical_case_choice') {
    const selectedOpt = exercise.options?.find(o => o.id === String(studentAnswer));
    if (!selectedOpt) {
      return {
        isCorrect: false,
        scoreDelta: 0,
        feedback: 'Por favor, selecione uma das alternativas apresentadas.',
        suggestedAction: 'retry'
      };
    }

    return {
      isCorrect: selectedOpt.isCorrect,
      scoreDelta: selectedOpt.isCorrect ? 20 : -10,
      feedback: selectedOpt.pedagogicalFeedback || (selectedOpt.isCorrect ? '✅ Resposta correta!' : '❌ Incorreto.'),
      conceptualErrorCategory: selectedOpt.conceptualErrorCategory,
      causalChain: exercise.causalChain,
      suggestedAction: selectedOpt.isCorrect ? 'advance' : 'retry'
    };
  }

  // Fallback padrão
  return {
    isCorrect: true,
    scoreDelta: 10,
    feedback: 'Resposta registrada com sucesso.',
    suggestedAction: 'advance'
  };
}

/**
 * Atualiza o mapa de maestria do aluno com base EXCLUSIVAMENTE em evidências
 * pedagógicas comprovadas (exercícios, avaliações, metas de laboratório).
 * 
 * REGRA RIGOROSA: Diálogos de chat com o tutor NUNCA chamam esta função.
 */
export function updateConceptMastery(
  currentMap: Record<string, ConceptMastery>,
  attempt: ExerciseAttempt,
  scoreDelta: number
): Record<string, ConceptMastery> {
  const conceptId = attempt.conceptId;
  const prev = currentMap[conceptId] || {
    conceptId,
    score: 0,
    attempts: 0,
    correctAttempts: 0,
    commonMistakes: [],
    lastReviewedAt: undefined
  };

  const newScore = Math.max(0, Math.min(100, prev.score + scoreDelta));
  const newAttempts = prev.attempts + 1;
  const newCorrectAttempts = prev.correctAttempts + (attempt.isCorrect ? 1 : 0);

  const updatedMistakes = [...prev.commonMistakes];
  if (!attempt.isCorrect && attempt.feedbackGiven) {
    const shortCategory = attempt.feedbackGiven.slice(0, 50);
    if (!updatedMistakes.includes(shortCategory)) {
      updatedMistakes.push(shortCategory);
    }
  }

  return {
    ...currentMap,
    [conceptId]: {
      conceptId,
      score: newScore,
      attempts: newAttempts,
      correctAttempts: newCorrectAttempts,
      commonMistakes: updatedMistakes,
      lastReviewedAt: new Date().toISOString()
    }
  };
}

/**
 * Analisa as fragilidades do aluno e identifica conceitos que necessitam de revisão.
 */
export function getConceptsNeedingReview(
  masteryMap: Record<string, ConceptMastery>
): string[] {
  return Object.values(masteryMap)
    .filter(m => m.attempts > 0 && (m.score < 60 || m.commonMistakes.length >= 2))
    .map(m => m.conceptId);
}
