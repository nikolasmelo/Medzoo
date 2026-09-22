// src/learning/data/modules.ts
import type { LearningModule } from '../types/learning';
import { PHARMACOLOGY_LESSONS } from './lessons/pharmacologyLessons';

export const LEARNING_MODULES: LearningModule[] = [
  {
    id: 'mod_pharmacology',
    title: 'Farmacologia & Terapêutica Silvestre',
    shortDescription: 'Cálculos posológicos, titulação por peso corporal, margem terapêutica e prevenção de toxicidade iatrogênica.',
    fullDescription: 'Domine a arte da posologia veterinária em aves, répteis e mamíferos selvagens. Aprenda a converter concentrações, deduzir volumes rigorosos e antecipar reações adversas fulminantes antes de tocar no paciente.',
    icon: 'Syringe',
    status: 'active_mvp',
    lessons: PHARMACOLOGY_LESSONS,
  },
  {
    id: 'mod_physiology',
    title: 'Fisiologia & Choque Hemodinâmico',
    shortDescription: 'A tríade hemodinâmica (FC, PA, SpO2), hipóxia em aves e répteis, e a fisiopatologia da Miopatia de Captura.',
    fullDescription: 'Entenda os mecanismos de autorregulação cardiovascular e respiratória. Observe em tempo real como hemorragias agudas e planos anestésicos profundos desestabilizam o equilíbrio vital de animais selvagens.',
    icon: 'Activity',
    status: 'coming_soon',
    lessons: [],
    prerequisites: ['mod_pharmacology'],
  },
  {
    id: 'mod_diagnostics',
    title: 'Raciocínio Diagnóstico & Semiologia',
    shortDescription: 'Da anamnese ao sinal clínico: conectando evidências para formular diagnósticos diferenciais sólidos.',
    fullDescription: 'Aprenda a pensar como um médico veterinário investigativo. Transforme dados históricos e achados táteis de palpação em evidências fundamentadas para isolar a etiologia verdadeira.',
    icon: 'GitFork',
    status: 'coming_soon',
    lessons: [],
    prerequisites: ['mod_physiology'],
  },
  {
    id: 'mod_radiology',
    title: 'Radiologia Digital de Fauna Silvestre',
    shortDescription: 'Interpretação de negatoscópio, identificação de densidades radiográficas, traços de fratura e corpos estranhos.',
    fullDescription: 'Explore chapas radiográficas reais de espécies da fauna brasileira. Aprenda a reconhecer a anatomia esquelética de aves de rapina, grandes felinos e quelônios em projeções ortogonais.',
    icon: 'Scan',
    status: 'coming_soon',
    lessons: [],
    prerequisites: ['mod_diagnostics'],
  },
];
