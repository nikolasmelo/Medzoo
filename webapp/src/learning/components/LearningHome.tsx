// src/learning/components/LearningHome.tsx
import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  GraduationCap,
  Sparkles,
  Award,
  Clock,
  CheckCircle2,
  Lock,
  ChevronRight,
  Syringe,
  Activity,
  Apple,
  Wheat,
  HeartPulse,
  GitFork,
  Scan,
  Layers,
  FileText,
  Microscope,
  Bug,
  Stethoscope,
  Dna,
  Bone,
  Brain,
  Droplets,
  ShieldAlert,
  GitBranch,
  Crosshair,
  Milk,
  Trophy,
  Egg,
  Compass,
  ShieldCheck,
  AlertTriangle,
  ThermometerSnowflake,
  Heart,
  Trees,
  Feather,
  Scissors,
  Cross,
  Wind,
  Baby,
  Filter
} from 'lucide-react';
import type { CurricularCycle, LearningLesson, LearningProgress } from '../types/learning';
import { LEARNING_MODULES } from '../data/modules';
import { CONCEPTS } from '../data/concepts';
import { loadLearningProgress } from '../storage/learningStorage';
import { getConceptsNeedingReview } from '../engine/learningEngine';
import { LessonRunner } from './LessonRunner';
import { ConceptMasteryCard } from './ConceptMasteryCard';
import { ReviewRecommendation } from './ReviewRecommendation';

interface LearningHomeProps {
  onBackToMainMenu: () => void;
  onOpenVademecum?: () => void;
}

type CycleFilter = 'all' | CurricularCycle;

const renderModuleIcon = (icon: string, className = "w-4 h-4 text-emerald-300") => {
  switch (icon) {
    case 'Microscope': return <Microscope className={className} />;
    case 'Stethoscope': return <Stethoscope className={className} />;
    case 'Bug': return <Bug className={className} />;
    case 'Apple': return <Apple className={className} />;
    case 'Activity': return <Activity className={className} />;
    case 'Wheat': return <Wheat className={className} />;
    case 'HeartPulse': return <HeartPulse className={className} />;
    case 'GitFork': return <GitFork className={className} />;
    case 'Scan': return <Scan className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'FileText': return <FileText className={className} />;
    case 'Dna': return <Dna className={className} />;
    case 'Bone': return <Bone className={className} />;
    case 'Brain': return <Brain className={className} />;
    case 'Droplets': return <Droplets className={className} />;
    case 'ShieldAlert': return <ShieldAlert className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'GitBranch': return <GitBranch className={className} />;
    case 'Crosshair': return <Crosshair className={className} />;
    case 'Milk': return <Milk className={className} />;
    case 'Trophy': return <Trophy className={className} />;
    case 'Egg': return <Egg className={className} />;
    case 'Compass': return <Compass className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'AlertTriangle': return <AlertTriangle className={className} />;
    case 'ThermometerSnowflake': return <ThermometerSnowflake className={className} />;
    case 'Heart': return <Heart className={className} />;
    case 'Trees': return <Trees className={className} />;
    case 'Feather': return <Feather className={className} />;
    case 'Scissors': return <Scissors className={className} />;
    case 'Cross': return <Cross className={className} />;
    case 'Wind': return <Wind className={className} />;
    case 'Baby': return <Baby className={className} />;
    case 'Syringe':
    default:
      return <Syringe className={className} />;
  }
};

const getCycleBadge = (cycle?: CurricularCycle) => {
  switch (cycle) {
    case 'basic':
      return { text: 'Ciclo Básico', color: 'bg-blue-950/70 text-blue-300 border-blue-500/40' };
    case 'pre_clinical':
      return { text: 'Pré-Clínico & Produção', color: 'bg-amber-950/70 text-amber-300 border-amber-500/40' };
    case 'clinical':
      return { text: 'Clínico & Cirúrgico', color: 'bg-emerald-950/70 text-emerald-300 border-emerald-500/40' };
    default:
      return { text: 'Veterinária', color: 'bg-slate-800 text-slate-300 border-slate-700' };
  }
};

export const LearningHome: React.FC<LearningHomeProps> = ({
  onBackToMainMenu,
  onOpenVademecum,
}) => {
  // ATENÇÃO: Todos os React hooks devem ser mantidos estritamente no topo
  const [activeLesson, setActiveLesson] = useState<LearningLesson | null>(null);
  const [activeTab, setActiveTab] = useState<'modules' | 'concepts'>('modules');
  const [selectedCycle, setSelectedCycle] = useState<CycleFilter>('all');
  const [progress, setProgress] = useState<LearningProgress>(() => loadLearningProgress());

  // Módulos ativos e próximos
  const allActiveModules = LEARNING_MODULES.filter((m) => m.status === 'active_mvp');
  const [selectedModuleId, setSelectedModuleId] = useState<string>(allActiveModules[0]?.id || 'mod_semiology');

  // Atualiza progresso sempre que o hub ganha foco
  useEffect(() => {
    setProgress(loadLearningProgress());
  }, [activeLesson]);

  // Se uma lição está aberta, renderiza o LessonRunner
  if (activeLesson) {
    return (
      <LessonRunner
        lesson={activeLesson}
        onExit={() => {
          setActiveLesson(null);
          setProgress(loadLearningProgress());
        }}
        onLessonCompleted={() => {
          setProgress(loadLearningProgress());
        }}
      />
    );
  }

  // Filtragem por ciclo curricular
  const filteredActiveModules = allActiveModules.filter(
    (m) => selectedCycle === 'all' || m.cycle === selectedCycle
  );
  const filteredUpcomingModules = LEARNING_MODULES.filter(
    (m) => m.status !== 'active_mvp' && (selectedCycle === 'all' || m.cycle === selectedCycle)
  );

  // Módulo ativo em exibição
  const selectedModule =
    filteredActiveModules.find((m) => m.id === selectedModuleId) ||
    filteredActiveModules[0] ||
    allActiveModules[0];

  // Estatísticas de aprendizado
  const totalCompleted = progress.completedLessons.length;
  const masteryValues = Object.values(progress.conceptMastery);
  const averageMastery = masteryValues.length > 0
    ? Math.round(masteryValues.reduce((acc, curr) => acc + curr.score, 0) / masteryValues.length)
    : 0;
  const conceptsNeedingReview = getConceptsNeedingReview(progress.conceptMastery);
  const totalLessonsCount = allActiveModules.reduce((acc, m) => acc + m.lessons.length, 0);

  const handleStartLesson = (lesson: LearningLesson) => {
    setActiveLesson(lesson);
  };

  const handleReviewConcept = (conceptId: string) => {
    for (const mod of allActiveModules) {
      const matched = mod.lessons.find((l) => l.concepts.includes(conceptId));
      if (matched) {
        setSelectedModuleId(mod.id);
        setActiveLesson(matched);
        return;
      }
    }
    setActiveLesson(allActiveModules[0].lessons[0]);
  };

  const handleSelectCycle = (cycle: CycleFilter) => {
    setSelectedCycle(cycle);
    const inCycle = allActiveModules.filter((m) => cycle === 'all' || m.cycle === cycle);
    if (inCycle.length > 0 && !inCycle.some((m) => m.id === selectedModuleId)) {
      setSelectedModuleId(inCycle[0].id);
    }
  };

  return (
    <div className="w-full flex-1 min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* HEADER SUPERIOR */}
      <header className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-md border-b border-emerald-500/20 px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToMainMenu}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Menu Principal</span>
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                MedZoo Educacional
              </div>
              <h1 className="text-base sm:text-lg font-black text-white leading-tight">
                Matriz Curricular • Medicina Veterinária Completa
              </h1>
            </div>
          </div>
        </div>

        {/* NAVEGAÇÃO DE TOPO */}
        <div className="flex items-center gap-3">
          {onOpenVademecum && (
            <button
              onClick={onOpenVademecum}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-colors cursor-pointer border border-slate-700/60"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Consultar Vademecum</span>
            </button>
          )}

          <div className="flex bg-slate-800/80 p-1 rounded-xl border border-slate-700">
            <button
              onClick={() => setActiveTab('modules')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'modules'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Grade & Lições ({allActiveModules.length} Ativos)
            </button>
            <button
              onClick={() => setActiveTab('concepts')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'concepts'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Mapa de Domínio ({Object.keys(CONCEPTS).length})
            </button>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-8 space-y-8">
        {/* BANNER DE BOAS-VINDAS E STATS */}
        <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                Currículo Veterinário Universitário Integrado
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Domine da Propedêutica à Cirurgia Veterinária
              </h2>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                Grade organizada nos 3 ciclos da graduação:
                <strong className="text-blue-300"> Básico</strong>,
                <strong className="text-amber-300"> Pré-Clínico & Produção</strong> e
                <strong className="text-emerald-300"> Clínico & Cirúrgico</strong>.
                Cada módulo traz simuladores didáticos interativos (Ausculta PAM-T, Mesa de Necropsia, Câmara McMaster, ECG, Monitor Vital e Balanço Nutricional).
              </p>
            </div>

            {/* CARDS DE STATS */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-800/80 border border-slate-700/60 p-4 rounded-2xl text-center space-y-1">
                <div className="text-2xl font-black font-mono text-emerald-400">
                  {totalCompleted} / {totalLessonsCount}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">Lições Concluídas</div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/60 p-4 rounded-2xl text-center space-y-1">
                <div className="text-2xl font-black font-mono text-teal-400">
                  {averageMastery}%
                </div>
                <div className="text-[11px] text-slate-400 font-medium">Média de Maestria</div>
              </div>
            </div>
          </div>
        </div>

        {/* RECOMENDAÇÃO ADAPTATIVA DE REVISÃO */}
        <ReviewRecommendation
          conceptsNeedingReview={conceptsNeedingReview}
          conceptsMap={CONCEPTS}
          masteryMap={progress.conceptMastery}
          onStartReview={handleReviewConcept}
        />

        {/* ABA: MÓDULOS E LIÇÕES */}
        {activeTab === 'modules' && (
          <div className="space-y-8">
            {/* SELETOR DE CICLO CURRICULAR */}
            <div className="space-y-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5 text-emerald-400" />
                  Filtrar por Ciclo Curricular da Graduação:
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  {LEARNING_MODULES.length} disciplinas mapeadas
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  onClick={() => handleSelectCycle('all')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-between border ${
                    selectedCycle === 'all'
                      ? 'bg-slate-800 text-white border-emerald-500/50 shadow-sm'
                      : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  <span>Todos os Ciclos</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-slate-700/60 text-slate-300">
                    {LEARNING_MODULES.length}
                  </span>
                </button>

                <button
                  onClick={() => handleSelectCycle('basic')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-between border ${
                    selectedCycle === 'basic'
                      ? 'bg-blue-950/70 text-blue-200 border-blue-500/60 shadow-sm'
                      : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  <span>1. Ciclo Básico</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-blue-900/50 text-blue-300">
                    {LEARNING_MODULES.filter((m) => m.cycle === 'basic').length}
                  </span>
                </button>

                <button
                  onClick={() => handleSelectCycle('pre_clinical')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-between border ${
                    selectedCycle === 'pre_clinical'
                      ? 'bg-amber-950/70 text-amber-200 border-amber-500/60 shadow-sm'
                      : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  <span>2. Pré-Clínico & Prod.</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-amber-900/50 text-amber-300">
                    {LEARNING_MODULES.filter((m) => m.cycle === 'pre_clinical').length}
                  </span>
                </button>

                <button
                  onClick={() => handleSelectCycle('clinical')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-between border ${
                    selectedCycle === 'clinical'
                      ? 'bg-emerald-950/70 text-emerald-200 border-emerald-500/60 shadow-sm'
                      : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  <span>3. Clínico & Cirúrgico</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-emerald-900/50 text-emerald-300">
                    {LEARNING_MODULES.filter((m) => m.cycle === 'clinical').length}
                  </span>
                </button>
              </div>
            </div>

            {/* SELETOR DE MÓDULOS ATIVOS DISPONÍVEIS */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block">
                  Disciplinas Disponíveis para Estudo Prático ({filteredActiveModules.length})
                </span>
                <span className="text-[11px] text-emerald-400 font-medium">
                  Com simulador didático e exercícios
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {filteredActiveModules.map((mod) => {
                  const isSelected = selectedModule.id === mod.id;
                  const cycleBadge = getCycleBadge(mod.cycle);

                  return (
                    <button
                      key={mod.id}
                      onClick={() => setSelectedModuleId(mod.id)}
                      className={`p-3.5 rounded-2xl font-bold text-left transition-all cursor-pointer flex flex-col justify-between space-y-3 border ${
                        isSelected
                          ? 'bg-emerald-950/70 border-emerald-400 text-white shadow-lg shadow-emerald-900/30'
                          : 'bg-slate-900/90 hover:bg-slate-800/90 text-slate-300 border-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                          isSelected ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-emerald-400'
                        }`}>
                          {renderModuleIcon(mod.icon, "w-4 h-4")}
                        </div>
                        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${cycleBadge.color}`}>
                          {cycleBadge.text}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-xs sm:text-sm font-bold line-clamp-2 leading-snug">
                          {mod.title}
                        </h4>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800/60">
                        <span className="font-mono text-emerald-400">{mod.lessons.length} Lições</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* MÓDULO SELECIONADO & SUAS LIÇÕES */}
            <div className="space-y-4 bg-slate-900/60 p-6 rounded-3xl border border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-md">
                    {renderModuleIcon(selectedModule.icon, "w-6 h-6 text-emerald-400")}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                        Disciplina em Foco
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getCycleBadge(selectedModule.cycle).color}`}>
                        {getCycleBadge(selectedModule.cycle).text}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {selectedModule.title}
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-full border border-emerald-800/40">
                  {selectedModule.lessons.length} Lições Práticas
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                {selectedModule.fullDescription}
              </p>

              {/* LISTA DE LIÇÕES DO MÓDULO */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-3">
                {selectedModule.lessons.map((lesson, idx) => {
                  const isCompleted = progress.completedLessons.includes(lesson.id);

                  return (
                    <div
                      key={lesson.id}
                      className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-5 shadow-lg transition-all flex flex-col justify-between space-y-4 group"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-emerald-400 font-bold font-mono">
                            Lição 0{idx + 1}
                          </span>
                          <span className="text-slate-400 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            ~{lesson.estimatedMinutes} min
                          </span>
                        </div>

                        <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                          {lesson.title}
                        </h4>

                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                          {lesson.subtitle}
                        </p>
                      </div>

                      {/* OBJETIVOS DA LIÇÃO */}
                      <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50 text-[11px] text-slate-300 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                          Competências desenvolvidas:
                        </span>
                        {lesson.objectives.slice(0, 2).map((obj, oIdx) => (
                          <div key={oIdx} className="truncate flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span>{obj}</span>
                          </div>
                        ))}
                      </div>

                      {/* BOTÃO DE AÇÃO */}
                      <button
                        onClick={() => handleStartLesson(lesson)}
                        className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          isCompleted
                            ? 'bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-500/30'
                            : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20'
                        }`}
                      >
                        {isCompleted ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            Concluída • Praticar Novamente
                          </>
                        ) : (
                          <>
                            Iniciar Lição
                            <ChevronRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* MÓDULOS EM BREVE (ROADMAP DA GRADE COMPLETA) */}
            {filteredUpcomingModules.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-slate-400 text-xs uppercase font-bold tracking-wider">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-emerald-400" />
                    <span>Disciplinas da Grade em Expansão ({filteredUpcomingModules.length})</span>
                  </div>
                  <span className="text-[11px] font-normal lowercase">em desenvolvimento com novos casos clínicos</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredUpcomingModules.map((mod) => {
                    const cycleBadge = getCycleBadge(mod.cycle);
                    return (
                      <div
                        key={mod.id}
                        className="bg-slate-900/50 border border-slate-800/60 rounded-2xl p-4 space-y-2.5 opacity-80 hover:opacity-100 transition-opacity"
                      >
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${cycleBadge.color}`}>
                            {cycleBadge.text}
                          </span>
                          <Lock className="w-3.5 h-3.5" />
                        </div>

                        <div className="flex items-center gap-2.5 pt-1">
                          <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                            {renderModuleIcon(mod.icon, "w-3.5 h-3.5 text-slate-400")}
                          </div>
                          <h4 className="text-xs font-bold text-slate-200 line-clamp-1">
                            {mod.title}
                          </h4>
                        </div>

                        <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                          {mod.shortDescription}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ABA: MAPA DE DOMÍNIO DE CONCEITOS */}
        {activeTab === 'concepts' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                Matriz de Domínio Conceitual Integrado
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Acompanhe o grau de retenção em cada conceito veterinário (Farmacologia, Fisiologia, Semiologia, Patologia, Parasitologia, Nutrição, Agrostologia, Cardiologia). Lembre-se: diálogos com a IA tutora não aumentam estes índices; apenas o acerto comprovado em exercícios eleva sua pontuação.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.values(CONCEPTS).map((concept) => (
                <ConceptMasteryCard
                  key={concept.id}
                  concept={concept}
                  mastery={progress.conceptMastery[concept.id]}
                  onReviewConcept={handleReviewConcept}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
