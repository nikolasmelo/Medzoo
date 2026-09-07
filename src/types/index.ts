export interface EvidenceData {
  id: string;
  text: string;
  category: 'physical' | 'complementary' | 'anamnesis';
  importance: 'critical' | 'secondary';
}

export interface PhysicalExamResult {
  region: string;
  evidenceId?: string;
  text: string;
  stressCost: number;
  timeCost: number;
  pinPos?: { x: number; y: number };
}

export interface ComplementaryExam {
  id: string;
  name: string;
  description: string;
  cost: number;
  type: 'xray' | 'ultrasound';
  requiredEvidenceId?: string;
  evidenceId: string;
  image?: string;
  hotspot: { x: number; y: number; radius: number };
}

export interface HypothesisData {
  id: string;
  title: string;
  description: string;
  isCorrect: boolean;
  requiredEvidences: string[];
}

export interface TreatmentOption {
  id: string;
  title: string;
  description: string;
  appropriate: boolean;
  type: 'injection' | 'bandaging' | 'oral' | 'surgery';
  cost: number;
}

export type MinigameType = 
  | 'IncisionMinigame' 
  | 'BoneDrillMinigame' 
  | 'SyringeIrrigationMinigame' 
  | 'EpoxyResinMinigame' 
  | 'OrthopedicPinsMinigame' 
  | 'EndoscopyMinigame'
  | 'SutureMinigame'
  | 'None';

export interface SurgicalStep {
  tool: string; // SurgicalInstrument ID
  minigame: MinigameType;
  damageToVitalsOnMistake?: number;
}

export interface CaseData {
  id: string;
  patientCode: string;
  speciesName: string;
  scientificName: string;
  arrivalReason: string;
  weightKg: number;
  caseBudget: number;
  minimumRank: 'Estagiário' | 'Residente' | 'Especialista' | 'Chefe de Clínica';
  imageTexture: string;
  isUrgent?: boolean;
  historyText: string;
  vitalSigns: {
    temp: string;
    hr: string;
    rr: string;
    crt: string;
    mucosa: string;
  };
  physicalExamResults: Record<string, PhysicalExamResult>;
  complementaryExams: Record<string, ComplementaryExam>;
  hypotheses: HypothesisData[];
  treatmentOptions: TreatmentOption[];
  evidenceData: Record<string, EvidenceData>;
  treatmentSequence?: SurgicalStep[];
}

export interface CareerState {
  money: number;
  reliability: number;
  shiftMinutes: number;
  xp: number;
  rank: string;
  completedCaseIds: string[];
}
