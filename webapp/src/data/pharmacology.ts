import type { SpeciesTaxonomy } from '../utils/physiologyEngine';

export interface DrugBottle {
  drugId: string;
  name: string;
  description: string;
  concentrationMgPerMl: number; 
  bottleColor: string;
}

export interface VademecumEntry {
  drugId: string;
  targetSpecies: SpeciesTaxonomy[] | 'ALL';
  doseMgPerKg: number; 
  route: 'IM' | 'IV' | 'SC' | 'PO';
  contraindications: string[];
}

export const DRUG_BOTTLES: Record<string, DrugBottle> = {
  'meloxicam_02': {
    drugId: 'meloxicam_02',
    name: 'Meloxicam 0.2%',
    description: 'AINE. Analgesia e anti-inflamatório.',
    concentrationMgPerMl: 2.0, // 0.2% = 2mg/mL
    bottleColor: 'bg-amber-600',
  },
  'meloxicam_20': {
    drugId: 'meloxicam_20',
    name: 'Meloxicam 2%',
    description: 'AINE Alta concentração. Risco de overdose em animais pequenos.',
    concentrationMgPerMl: 20.0, // 2% = 20mg/mL
    bottleColor: 'bg-amber-800',
  },
  'enrofloxacin_05': {
    drugId: 'enrofloxacin_05',
    name: 'Enrofloxacina 5%',
    description: 'Antimicrobiano de amplo espectro.',
    concentrationMgPerMl: 50.0, // 5% = 50mg/mL
    bottleColor: 'bg-cyan-600',
  },
  'atropine_1': {
    drugId: 'atropine_1',
    name: 'Sulfato de Atropina 1%',
    description: 'Anticolinérgico de emergência para bradicardia severa.',
    concentrationMgPerMl: 10.0, // 1% = 10mg/mL
    bottleColor: 'bg-rose-600',
  },
  'epinephrine_1': {
    drugId: 'epinephrine_1',
    name: 'Adrenalina/Epinefrina 1:1000',
    description: 'Simpatomimético de emergência para parada cardíaca ou choque anafilático.',
    concentrationMgPerMl: 1.0, // 1mg/mL
    bottleColor: 'bg-red-700',
  }
};

export const VADEMECUM_ENTRIES: VademecumEntry[] = [
  {
    drugId: 'meloxicam_02',
    targetSpecies: 'ALL', // Simplificação; na vida real varia
    doseMgPerKg: 1.0, // Dose média para aves/répteis (costuma ser maior que cães)
    route: 'IM',
    contraindications: ['Desidratação severa', 'Hemorragia ativa'],
  },
  {
    drugId: 'meloxicam_20',
    targetSpecies: ['hydrochoerus_hydrochaeris', 'chrysocyon_brachyurus', 'leopardus_pardalis'], // Mamíferos maiores
    doseMgPerKg: 0.2, // Dose para mamíferos
    route: 'SC',
    contraindications: ['Falência renal'],
  },
  {
    drugId: 'enrofloxacin_05',
    targetSpecies: 'ALL',
    doseMgPerKg: 10.0,
    route: 'IM',
    contraindications: ['Filhotes (artropatia)'],
  },
  {
    drugId: 'atropine_1',
    targetSpecies: 'ALL',
    doseMgPerKg: 0.04, // Dose emergencial comum
    route: 'IV',
    contraindications: ['Taquicardia'],
  },
  {
    drugId: 'epinephrine_1',
    targetSpecies: 'ALL',
    doseMgPerKg: 0.01, // Dose emergencial para ressuscitação
    route: 'IV',
    contraindications: ['Nenhuma em PCR'],
  }
];

export function administerDrug(patientWeightKg: number, drugId: string, playerInputMl: number) {
  const bottle = Object.values(DRUG_BOTTLES).find(d => d.drugId === drugId);
  const doseEntry = VADEMECUM_ENTRIES.find(d => d.drugId === drugId);

  if (!bottle || !doseEntry) return { status: 'ERROR', therapeuticEffect: 0, toxicity: 0, correctMl: 0 };

  const correctMl = (patientWeightKg * doseEntry.doseMgPerKg) / bottle.concentrationMgPerMl;
  
  if (correctMl === 0) return { status: 'ERROR', therapeuticEffect: 0, toxicity: 0, correctMl: 0 };

  const marginOfError = Math.abs(playerInputMl - correctMl) / correctMl;

  if (marginOfError <= 0.05) { // 5% margin of error
    return { status: 'SUCCESS', therapeuticEffect: 1.0, toxicity: 0.0, correctMl };
  } else if (playerInputMl < correctMl) {
    return { status: 'SUBDOSE', therapeuticEffect: 0.2, toxicity: 0.0, correctMl };
  } else {
    // Exponencial penalty for overdose
    return { status: 'OVERDOSE', therapeuticEffect: 1.0, toxicity: Math.min(100, Math.exp(marginOfError * 2)), correctMl };
  }
}
