// src/learning/data/concepts.ts
import type { LearningConcept } from '../types/learning';

export const CONCEPTS: Record<string, LearningConcept> = {
  concept_weight_dose: {
    id: 'concept_weight_dose',
    title: 'Peso Corpóreo e Dose Terapêutica',
    description: 'Entendimento da posologia baseada na massa corpórea em kg e a necessidade de titulação precisa em animais silvestres.',
    category: 'pharmacology',
    difficulty: 'introductory',
  },
  concept_concentration: {
    id: 'concept_concentration',
    title: 'Concentração de Soluções e Diluições',
    description: 'Conversão de porcentagem (%) em massa por volume (mg/mL) e interpretação de rótulos farmacêuticos hospitalares.',
    category: 'pharmacology',
    difficulty: 'introductory',
  },
  concept_volume_calc: {
    id: 'concept_volume_calc',
    title: 'Cálculo de Volume de Aplicação',
    description: 'Dedução matemática e operacional do volume final em mililitros (mL) usando V = (Peso × Dose) ÷ Concentração.',
    category: 'pharmacology',
    difficulty: 'intermediate',
    prerequisites: ['concept_weight_dose', 'concept_concentration'],
  },
  concept_therapeutic_window: {
    id: 'concept_therapeutic_window',
    title: 'Janela Terapêutica e Margem de Erro',
    description: 'A zona de segurança entre a concentração plasmática mínima eficaz e o limiar de toxicidade iatrogênica.',
    category: 'pharmacology',
    difficulty: 'intermediate',
  },
  concept_toxicity_overdose: {
    id: 'concept_toxicity_overdose',
    title: 'Toxicidade por Sobredose e Reações Adversas',
    description: 'Cadeia de lesão orgânica aguda (renal, hepática, cardiovascular) decorrente do extravasamento da dose máxima tolerada.',
    category: 'pharmacology',
    difficulty: 'advanced',
    prerequisites: ['concept_therapeutic_window'],
  },
};
