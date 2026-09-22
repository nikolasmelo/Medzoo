export interface EvidenceData {
  id: string;
  text: string;
  category: 'physical' | 'complementary' | 'anamnesis' | 'laboratorial';
  importance: 'critical' | 'secondary';
}

export interface PhysicalExamResult {
  region: string;
  label?: string;
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

export type SurgicalInstrument =
  | 'scalpel'
  | 'scissors'
  | 'forceps'
  | 'hemostat'
  | 'retractor'
  | 'bone_drill'
  | 'ortho_pin'
  | 'steinmann_pin'
  | 'syringe'
  | 'irrigation_syringe'
  | 'suture_needle'
  | 'epoxy_resin'
  | 'epoxy_applicator'
  | 'endoscope'
  | 'lcp_plate'
  | 'cerclage_wire'
  | 'bipolar_cautery'
  | 'anesthesia_mask'
  | 'wound_bandage';

export type SpecializedMinigameType =
  | 'SyringeIrrigationMinigame'
  | 'SoftTissueIncisionMinigame'
  | 'IncisionMinigame'
  | 'FractureReductionMinigame'
  | 'BoneDrillMinigame'
  | 'OrthopedicPinsMinigame'
  | 'SutureTensionMinigame'
  | 'SutureMinigame'
  | 'EpoxyResinMinigame'
  | 'EndoscopyMinigame'
  | 'LcpPlatingMinigame'
  | 'HemostasisMinigame'
  | 'AnestheticInductionMinigame'
  | 'WoundDressingMinigame';

export interface SurgicalStepDefinition {
  id?: string;
  title?: string;
  description?: string;
  instrumentId?: SurgicalInstrument;
  tool?: string;
  minigameId?: SpecializedMinigameType;
  minigame?: string;
  required?: boolean;
  prerequisiteStepIds?: string[];
  damageToVitalsOnMistake?: number;
}

export interface SurgicalStep {
  definition: SurgicalStepDefinition;
  status: 'pending' | 'active' | 'completed';
}

export interface MinigameCompletionPayload {
  stepId: string;
  executionToken: string;
  result: 'success' | 'failure';
  accuracy: number;
  damage: number;
  timeTaken?: number;
}

export interface StepTransitionResult {
  nextSteps: SurgicalStep[];
  allRequiredCompleted: boolean;
  completedStepId?: string;
  nextStepId?: string;
  isSuccess: boolean;
}

export interface SurgicalMinigameProps {
  stepId: string;
  executionToken: string;
  onComplete: (payload: MinigameCompletionPayload) => void;
  onCancel: () => void;
  onVitalsDrain?: (damage: number) => void;
  unlockedUpgrades?: string[];
}

export type SurgicalMinigameComponent = React.ComponentType<SurgicalMinigameProps>;

export interface SurgicalPathConfig {
  patternType: 'linear_longitudinal' | 'curved_pectoral' | 'angular_plastron' | 'scalpel_delicate' | 'interscale';
  customControlPoints?: { x: number; y: number }[]; // relative coordinates (0.0 to 1.0)
  sutureType: 'interrupted' | 'continuous' | 'epoxy_seal';
  drapeType: 'avian_featherless' | 'reptile_scales' | 'mammal_shaved';
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
  treatmentSequence?: SurgicalStepDefinition[];
  surgicalPathConfig?: SurgicalPathConfig;
}

export interface CareerState {
  money: number;
  reliability: number;
  shiftMinutes: number;
  xp: number;
  rank: string;
  completedCaseIds: string[];
  unlockedUpgrades?: string[];
}

export interface HospitalUpgrade {
  id: string;
  title: string;
  category: 'instrument' | 'diagnostics' | 'monitoring' | 'surgical';
  description: string;
  cost: number;
  requiredRank: 'Estagiário' | 'Residente' | 'Especialista' | 'Chefe de Clínica';
  icon: string;
  perkDescription: string;
}
