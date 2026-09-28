// src/learning/data/knowledge/pharmacologyKnowledge.ts
import type { CausalChain } from '../../types/learning';

export interface DrugFact {
  id: string;
  name: string;
  concentrationString: string;
  concentrationMgMl: number;
  class: string;
  primaryIndication: string;
  usualDoseSilvestres: string;
  contraindications: string;
  toxicityChain: CausalChain;
}

export const PHARMACOLOGY_FACTS: Record<string, DrugFact> = {
  meloxicam_02: {
    id: 'meloxicam_02',
    name: 'Meloxicam 0,2%',
    concentrationString: '0,2% (2 mg/mL)',
    concentrationMgMl: 2.0,
    class: 'Anti-inflamatório Não Esteroidal (AINE) inibidor preferencial de COX-2',
    primaryIndication: 'Analgesia e controle inflamatório em aves, répteis e pequenos mamíferos.',
    usualDoseSilvestres: '0,5 a 1,0 mg/kg (Aves/Répteis requerem doses proporcionalmente maiores devido à alta taxa de excreção renal/metabólica).',
    contraindications: 'Pacientes desidratados, com insuficiência renal pré-existente ou sangramento digestivo ativo.',
    toxicityChain: {
      cause: 'Sobredose de Meloxicam (> 2x a dose recomendada)',
      mechanism: 'Inibição não seletiva de COX-1 com perda de prostaglandinas protetoras (PGE2 e PGI2) renais e gástricas',
      effect: 'Vasoconstrição da arteríola aferente renal e erosão da barreira de muco gástrico',
      clinicalMeaning: 'Necrose papilar renal aguda, úlceras gastrointestinais hemorrágicas e falência renal anúrica'
    }
  },
  meloxicam_20: {
    id: 'meloxicam_20',
    name: 'Meloxicam 2,0%',
    concentrationString: '2,0% (20 mg/mL)',
    concentrationMgMl: 20.0,
    class: 'AINE concentrado',
    primaryIndication: 'Mamíferos silvestres de médio e grande porte (onça, anta, lobo-guará). NUNCA usar em aves de pequeno porte sem diluição prévia devido ao risco de sobredose por erro de volume.',
    usualDoseSilvestres: '0,2 a 0,4 mg/kg em carnívoros e grandes ungulados.',
    contraindications: 'Uso não diluído em animais com peso menor que 5 kg.',
    toxicityChain: {
      cause: 'Uso acidental de formulação 2% em animal pequeno',
      mechanism: 'Volume aspirado carrega 10 vezes mais princípio ativo do que a formulação 0,2%',
      effect: 'Concentração sérica fulminante acima da capacidade de depuração hepática',
      clinicalMeaning: 'Insuficiência renal hiperaguda e óbito por intoxicação iatrogênica em poucas horas'
    }
  },
  enrofloxacino_50: {
    id: 'enrofloxacino_50',
    name: 'Enrofloxacina 5,0%',
    concentrationString: '5,0% (50 mg/mL)',
    concentrationMgMl: 50.0,
    class: 'Fluoroquinolona bactericida de amplo espectro',
    primaryIndication: 'Infecções bacterianas graves respiratórias, cutâneas e pós-operatórias.',
    usualDoseSilvestres: '10 mg/kg a cada 12 ou 24 horas.',
    contraindications: 'Animais em crescimento rápido (risco de artropatia e lesão de cartilagem de crescimento) e fêmeas prenhes.',
    toxicityChain: {
      cause: 'Subdose repetida de Enrofloxacina',
      mechanism: 'Concentração tecidual permanece abaixo da CMI (Concentração Inibitória Mínima)',
      effect: 'Bactérias sobreviventes adquirem mutações de resistência na DNA girassol',
      clinicalMeaning: 'Falha terapêutica completa, choque séptico refratário e disseminação de cepas multirresistentes'
    }
  },
  atropina_10: {
    id: 'atropina_10',
    name: 'Sulfato de Atropina 1%',
    concentrationString: '1,0% (10 mg/mL)',
    concentrationMgMl: 10.0,
    class: 'Anticolinérgico parassimpaticolítico (bloqueador de receptores muscarínicos)',
    primaryIndication: 'Bradicardia vagal profunda, PCR iminente e intoxicação por organofosforados.',
    usualDoseSilvestres: '0,02 a 0,04 mg/kg IV ou IM de emergência.',
    contraindications: 'Taquiarritmias pré-existentes, glaucoma e hipertermia grave.',
    toxicityChain: {
      cause: 'Sobredose de Atropina',
      mechanism: 'Bloqueio parassimpático absoluto e desinibição simpática atrial extrema',
      effect: 'Taquicardia ventricular grave, redução crítica do tempo de enchimento diastólico e hipertermia anidrótica',
      clinicalMeaning: 'Colapso hemodinâmico, fibrilação ventricular e morte súbita'
    }
  }
};

export const CORE_FORMULA_EXPLANATION = {
  formula: 'V = (P × D) ÷ C',
  variables: [
    { name: 'V', label: 'Volume (mL)', description: 'Quantidade líquida que você deve aspirar na seringa graduada.' },
    { name: 'P', label: 'Peso Corporal (kg)', description: 'Massa do animal pesado na balança veterinária calibrada.' },
    { name: 'D', label: 'Dose Terapêutica (mg/kg)', description: 'Quantidade de miligramas necessária para cada 1 kg de paciente.' },
    { name: 'C', label: 'Concentração (mg/mL)', description: 'Quantos miligramas de princípio ativo existem dissolvidos em cada 1 mL do frasco.' }
  ],
  conversionRules: [
    'Para converter porcentagem (%) em mg/mL: multiplique a porcentagem por 10. Exemplo: 0,2% = 0,2 × 10 = 2 mg/mL. Outro exemplo: 5% = 5 × 10 = 50 mg/mL.',
    'Nunca injete sem calcular antes o volume total de princípio ativo (Massa Total em mg = Peso em kg × Dose em mg/kg).'
  ]
};
