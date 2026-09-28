// src/learning/data/modules.ts
import type { LearningModule } from '../types/learning';
import { PHARMACOLOGY_LESSONS } from './lessons/pharmacologyLessons';
import { PHYSIOLOGY_LESSONS } from './lessons/physiologyLessons';
import { NUTRITION_LESSONS } from './lessons/nutritionLessons';
import { AGROSTOLOGY_LESSONS } from './lessons/agrostologyLessons';

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
    status: 'active_mvp',
    lessons: PHYSIOLOGY_LESSONS,
    prerequisites: ['mod_pharmacology'],
  },
  {
    id: 'mod_nutrition',
    title: 'Nutrição Animal Silvestre & Manejo Alimentar',
    shortDescription: 'Cálculo alométrico de BMR/MER, balanço mineral Ca:P, prevenção de MBD e dietas hospitalares.',
    fullDescription: 'Domine a ciência da nutrição para animais silvestres e exóticos. Aprenda a calcular demandas energéticas alométricas pela Lei de Kleiber, balancear a razão Cálcio:Fósforo para prevenir osteodistrofia fibrosa e formular dietas hospitalares seguras evitando esteatose hepática e deficiências fatais.',
    icon: 'Apple',
    status: 'active_mvp',
    lessons: NUTRITION_LESSONS,
    prerequisites: ['mod_pharmacology'],
  },
  {
    id: 'mod_agrostology',
    title: 'Agrostologia & Forrageiras Veterinárias',
    shortDescription: 'Identificação de gramíneas e leguminosas, valor bromatológico (FDN/FDA) e toxicologia botânica de pastagens.',
    fullDescription: 'Aprofunde-se no manejo nutricional de pastagens e forrageiras para megaherbívoros e ruminantes silvestres. Avaliação bromatológica de matéria seca, fibra e prevenção de intoxicações botânicas agudas na fauna de pastejo.',
    icon: 'Wheat',
    status: 'active_mvp',
    lessons: AGROSTOLOGY_LESSONS,
    prerequisites: ['mod_nutrition'],
  },
  {
    id: 'mod_cardiology',
    title: 'Cardiologia Veterinária Comparada',
    shortDescription: 'Eletrocardiografia de aves e répteis, morfologia cardíaca comparada e manejo de insuficiência cardíaca congestiva.',
    fullDescription: 'Estudo aprofundado do sistema cardiovascular comparado em répteis (corações tricavitários com shunt intracardíaco), aves e mamíferos. Interpretação eletrocardiográfica avançada, choque cardiogênico e farmacoterapia inotrópica.',
    icon: 'HeartPulse',
    status: 'coming_soon',
    lessons: [],
    prerequisites: ['mod_physiology'],
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
