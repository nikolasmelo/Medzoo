// src/learning/types/learning.ts
/**
 * MEDZOO — TIPOS E INTERFACES DO MODO AULA
 * Sistema Educacional + Tutor de IA
 */

export interface CausalChain {
  cause: string;            // Causa inicial (ex: "Subdose de Meloxicam")
  mechanism: string;        // Mecanismo fisiológico/farmacológico (ex: "Inibição de COX-2 insuficiente para suprimir prostaglandinas")
  effect: string;           // Efeito biológico mensurável (ex: "Manutenção do processo inflamatório e dor articular")
  clinicalMeaning: string;  // Consequência clínica no paciente (ex: "Apatia contínua, anorexia e recusa alimentar na ave")
}

export type ConceptDifficulty = 'introductory' | 'intermediate' | 'advanced';

export interface LearningConcept {
  id: string;
  title: string;
  description: string;
  category: 'pharmacology' | 'physiology' | 'diagnostics' | 'radiology';
  difficulty: ConceptDifficulty;
  prerequisites?: string[];
}

export type LessonSectionType =
  | 'theory'
  | 'interactive_demo'
  | 'lab'
  | 'exercise'
  | 'reflection'
  | 'assessment';

export interface LessonSection {
  id: string;
  type: LessonSectionType;
  title: string;
  description?: string;
  contentMarkdown?: string;
  causalChain?: CausalChain;
  labType?: 'pharmacology_syringe' | 'physiology_vital_loop' | 'diagnostic_board' | 'xray_inspection';
  labConfig?: Record<string, any>;
  exerciseId?: string;
}

export type ExerciseType =
  | 'dose_calculation'
  | 'multiple_choice'
  | 'causal_order'
  | 'clinical_case_choice';

export interface ExerciseOption {
  id: string;
  text: string;
  isCorrect: boolean;
  pedagogicalFeedback: string;
  conceptualErrorCategory?: string;
}

export interface LearningExercise {
  id: string;
  conceptId: string;
  type: ExerciseType;
  prompt: string;
  contextData?: {
    patientSpecies?: string;
    patientWeightKg?: number;
    drugName?: string;
    drugConcentrationMgMl?: number;
    targetDoseMgKg?: number;
    unit?: string;
  };
  correctNumericValue?: number;
  numericTolerance?: number; // Ex: 0.01 mL
  options?: ExerciseOption[];
  causalChain?: CausalChain;
  pedagogicalExplanation: string;
}

export interface LearningLesson {
  id: string;
  moduleId: string;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  objectives: string[];
  concepts: string[];
  sections: LessonSection[];
  prerequisites?: string[];
}

export interface LearningModule {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  status: 'active_mvp' | 'coming_soon';
  lessons: LearningLesson[];
  prerequisites?: string[];
}

export interface ConceptMastery {
  conceptId: string;
  score: number; // 0 a 100
  attempts: number;
  correctAttempts: number;
  commonMistakes: string[];
  lastReviewedAt?: string;
}

export interface ExerciseAttempt {
  exerciseId: string;
  conceptId: string;
  timestamp: string;
  isCorrect: boolean;
  submittedAnswer: string | number;
  feedbackGiven: string;
  hintLevelUsed?: number;
}

export interface LearningProgress {
  completedLessons: string[];
  activeLessonId?: string;
  activeSectionIndex?: number;
  conceptMastery: Record<string, ConceptMastery>;
  exerciseHistory: ExerciseAttempt[];
  lastUpdated: string;
}

// ── TUTOR DE IA CONTRATOS ──

export type TutorMode =
  | 'teacher'
  | 'socratic'
  | 'hint'
  | 'reviewer'
  | 'examiner';

export interface TutorContext {
  moduleId: string;
  lessonId: string;
  sectionIndex: number;
  sectionType: LessonSectionType;
  conceptIds: string[];
  mode: TutorMode;
  exerciseId?: string;
  allowDirectAnswer: boolean;
  studentMistakeCount?: number;
}

export interface TutorResponse {
  message: string;
  mode: TutorMode;
  suggestedQuestions?: string[];
  isDirectAnswer: boolean;
  relevantConcepts?: string[];
  causalChain?: CausalChain;
}

export interface TutorEvaluation {
  isCorrect: boolean;
  feedback: string;
  detectedMisconceptions: string[];
  encouragement: string;
}

export interface TutorAIProvider {
  ask(context: TutorContext, question: string): Promise<TutorResponse>;
  getHint(context: TutorContext, level: 1 | 2 | 3): Promise<TutorResponse>;
  evaluate(context: TutorContext, studentAnswer: string): Promise<TutorEvaluation>;
}
