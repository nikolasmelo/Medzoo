import type { SpeciesTaxonomy } from '../utils/physiologyEngine';

export interface DrugBottle {
  drugId: string;
  name: string;
  description: string;
  concentrationMgPerMl: number; 
  bottleColor: string;
  category: 'analgesic' | 'antibiotic' | 'emergency';
  indication: string;
}

export interface VademecumEntry {
  drugId: string;
  targetSpecies: SpeciesTaxonomy[] | 'ALL';
  doseMgPerKg: number; 
  route: 'IM' | 'IV' | 'SC' | 'PO';
  contraindications: string[];
  indication: string;
  category: 'analgesic' | 'antibiotic' | 'emergency';
}

export const DRUG_BOTTLES: Record<string, DrugBottle> = {
  'meloxicam_02': {
    drugId: 'meloxicam_02',
    name: 'Meloxicam 0.2%',
    description: 'AINE. Analgesia e anti-inflamatório para aves, répteis e mamíferos pequenos.',
    concentrationMgPerMl: 2.0, // 0.2% = 2mg/mL
    bottleColor: 'bg-amber-600',
    category: 'analgesic',
    indication: 'Analgesia pré/pós-traumática em animais de menor porte, aves e répteis.',
  },
  'meloxicam_20': {
    drugId: 'meloxicam_20',
    name: 'Meloxicam 2%',
    description: 'AINE Alta concentração. Analgesia pós-cirúrgica para mamíferos de médio/grande porte.',
    concentrationMgPerMl: 20.0, // 2% = 20mg/mL
    bottleColor: 'bg-amber-800',
    category: 'analgesic',
    indication: 'Analgesia e anti-inflamatório para mamíferos de médio e grande porte (>10 kg).',
  },
  'enrofloxacin_05': {
    drugId: 'enrofloxacin_05',
    name: 'Enrofloxacina 5%',
    description: 'Antimicrobiano fluoroquinolona de amplo espectro para profilaxia e combate infeccioso.',
    concentrationMgPerMl: 50.0, // 5% = 50mg/mL
    bottleColor: 'bg-cyan-600',
    category: 'antibiotic',
    indication: 'Profilaxia antimicrobiana em fraturas expostas, mordeduras e feridas purulentas.',
  },
  'atropine_1': {
    drugId: 'atropine_1',
    name: 'Sulfato de Atropina 1%',
    description: 'Anticolinérgico parassimpaticolítico para bradicardia severa e suporte cirúrgico.',
    concentrationMgPerMl: 10.0, // 1% = 10mg/mL
    bottleColor: 'bg-rose-600',
    category: 'emergency',
    indication: 'Bradicardia extrema induzida por anestesia ou choque vagal.',
  },
  'epinephrine_1': {
    drugId: 'epinephrine_1',
    name: 'Adrenalina/Epinefrina 1:1000',
    description: 'Agonista adrenérgico de reanimação para parada cardiorrespiratória e anafilaxia.',
    concentrationMgPerMl: 1.0, // 1mg/mL
    bottleColor: 'bg-red-700',
    category: 'emergency',
    indication: 'Parada cardiorrespiratória (PCR) ou choque circulatório profundo.',
  }
};

export const VADEMECUM_ENTRIES: VademecumEntry[] = [
  {
    drugId: 'meloxicam_02',
    targetSpecies: 'ALL',
    doseMgPerKg: 1.0,
    route: 'IM',
    contraindications: ['Desidratação severa', 'Hemorragia ativa'],
    category: 'analgesic',
    indication: 'Analgesia e controle inflamatório em aves, répteis e pequenos silvestres.',
  },
  {
    drugId: 'meloxicam_20',
    targetSpecies: ['hydrochoerus_hydrochaeris', 'chrysocyon_brachyurus', 'leopardus_pardalis'],
    doseMgPerKg: 0.2,
    route: 'SC',
    contraindications: ['Falência renal'],
    category: 'analgesic',
    indication: 'Controle de dor musculoesquelética em mamíferos carnívoros e herbívoros de grande porte.',
  },
  {
    drugId: 'enrofloxacin_05',
    targetSpecies: 'ALL',
    doseMgPerKg: 10.0,
    route: 'IM',
    contraindications: ['Filhotes (artropatia em crescimento)'],
    category: 'antibiotic',
    indication: 'Combate a infecções bacterianas gram-negativas e profilaxia de sepse em feridas abertas.',
  },
  {
    drugId: 'atropine_1',
    targetSpecies: 'ALL',
    doseMgPerKg: 0.04,
    route: 'IV',
    contraindications: ['Taquicardia preexistente'],
    category: 'emergency',
    indication: 'Reversão de bradicardia sinusal severa ou colapso autonômico.',
  },
  {
    drugId: 'epinephrine_1',
    targetSpecies: 'ALL',
    doseMgPerKg: 0.01,
    route: 'IV',
    contraindications: ['Nenhuma contraindicação absoluta em vigência de PCR'],
    category: 'emergency',
    indication: 'Ressuscitação cardiopulmonar (PCR) para estímulo inotrópico e vasoconstrição periférica.',
  }
];

export function administerDrug(patientWeightKg: number, drugId: string, playerInputMl: number) {
  const bottle = Object.values(DRUG_BOTTLES).find(d => d.drugId === drugId);
  const doseEntry = VADEMECUM_ENTRIES.find(d => d.drugId === drugId);

  if (!bottle || !doseEntry) return { status: 'ERROR', therapeuticEffect: 0, toxicity: 0, correctMl: 0 };

  const correctMl = (patientWeightKg * doseEntry.doseMgPerKg) / bottle.concentrationMgPerMl;
  
  if (correctMl === 0) return { status: 'ERROR', therapeuticEffect: 0, toxicity: 0, correctMl: 0 };

  const absoluteDiff = Math.abs(playerInputMl - correctMl);
  const marginOfError = absoluteDiff / correctMl;

  // Realistic therapeutic tolerance in veterinary medicine:
  // 1. Up to 10% relative margin of error (standard therapeutic safety margin)
  // 2. OR absolute difference <= 0.006 mL (tuberculin/insulin syringe graduation limit for small exotics)
  if (marginOfError <= 0.10 || absoluteDiff <= 0.006) {
    return { status: 'SUCCESS', therapeuticEffect: 1.0, toxicity: 0.0, correctMl };
  } else if (playerInputMl < correctMl) {
    return { status: 'SUBDOSE', therapeuticEffect: 0.2, toxicity: 0.0, correctMl };
  } else {
    // Exponential penalty for overdose
    return { status: 'OVERDOSE', therapeuticEffect: 1.0, toxicity: Math.min(100, Math.exp(marginOfError * 2)), correctMl };
  }
}
