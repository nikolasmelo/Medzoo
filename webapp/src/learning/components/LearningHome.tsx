// src/learning/components/LearningHome.tsx
import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  GraduationCap,
  Sparkles,
  Award,
  Clock,
  CheckCircle2,
  ChevronRight,
  Syringe,
  Activity,
  Apple,
  Wheat,
  HeartPulse,
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
  Filter,
  Search,
  BookOpen
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
    case 'Activity': return <Activity className={className} />;
    case 'Dna': return <Dna className={className} />;
    case 'Bone': return <Bone className={className} />;
    case 'Brain': return <Brain className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'Droplets': return <Droplets className={className} />;
    case 'ShieldAlert': return <ShieldAlert className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'GitBranch': return <GitBranch className={className} />;
    case 'Stethoscope': return <Stethoscope className={className} />;
    case 'Syringe': return <Syringe className={className} />;
    case 'Bug': return <Bug className={className} />;
    case 'Crosshair': return <Crosshair className={className} />;
    case 'Apple': return <Apple className={className} />;
    case 'Wheat': return <Wheat className={className} />;
    case 'Milk': return <Milk className={className} />;
    case 'Trophy': return <Trophy className={className} />;
    case 'Egg': return <Egg className={className} />;
    case 'Compass': return <Compass className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'AlertTriangle': return <AlertTriangle className={className} />;
    case 'ThermometerSnowflake': return <ThermometerSnowflake className={className} />;
    case 'HeartPulse': return <HeartPulse className={className} />;
    case 'FileText': return <FileText className={className} />;
    case 'Scan': return <Scan className={className} />;
    case 'Heart': return <Heart className={className} />;
    case 'Trees': return <Trees className={className} />;
    case 'Feather': return <Feather className={className} />;
    case 'Scissors': return <Scissors className={className} />;
    case 'Wind': return <Wind className={className} />;
    case 'Cross': return <Cross className={className} />;
    case 'Baby': return <Baby className={className} />;
    default: return <BookOpen className={className} />;
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
  const [activeLesson, setActiveLesson] = useState<LearningLesson | null>(null);
  const [activeTab, setActiveTab] = useState<'modules' | 'concepts'>('modules');
  const [selectedCycle, setSelectedCycle] = useState<CycleFilter>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [progress, setProgress] = useState<LearningProgress>(() => loadLearningProgress());

  // Módulos ativos
  const allActiveModules = LEARNING_MODULES.filter((m) => m.status === 'active_mvp');
  const [selectedModuleId, setSelectedModuleId] = useState<string>(allActiveModules[0]?.id || 'mod_semiology');

  useEffect(() => {
    setProgress(loadLearningProgress());
  }, [activeLesson]);

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

  // Filtragem por ciclo e busca
  const filteredActiveModules = allActiveModules.filter((m) => {
    const matchesCycle = selectedCycle === 'all' || m.cycle === selectedCycle;
    const matchesSearch = searchQuery.trim() === '' || 
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.fullDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCycle && matchesSearch;
  });

  const selectedModule =
    filteredActiveModules.find((m) => m.id === selectedModuleId) ||
    filteredActiveModules[0] ||
    allActiveModules[0];

  const conceptsNeedingReview = getConceptsNeedingReview(progress.conceptMastery);

  const handleStartLesson = (lesson: LearningLesson) => {
    setActiveLesson(lesson);
  };

  const handleReviewConcept = (conceptId: string) => {
    for (const mod of allActiveModules) {
      const matched = mod.lessons.find((l) => l.concepts?.includes(conceptId));
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
                Grade Universitária Completa • Medicina Veterinária
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
              33 Disciplinas Ativas
            </button>
            <button
              onClick={() => setActiveTab('concepts')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'concepts'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Domínio de Conceitos
            </button>
          </div>
        </div>
      </header>

      {/* ÁREA DE CONTEÚDO PRINCIPAL */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-6 space-y-6">
        {/* BANNER DE REVISÃO ESPAÇADA */}
        {conceptsNeedingReview.length > 0 && activeTab === 'modules' && (
          <ReviewRecommendation
            conceptsNeedingReview={conceptsNeedingReview}
            conceptsMap={CONCEPTS}
            masteryMap={progress.conceptMastery}
            onStartReview={handleReviewConcept}
          />
        )}

        {/* BARRA DE FILTRO POR CICLO & BUSCA INSTANTÂNEA */}
        {activeTab === 'modules' && (
          <div className="space-y-4">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Ciclos Curriculares da Graduação:
                  </span>
                </div>

                {/* BUSCA RÁPIDA */}
                <div className="relative w-full md:w-80">
                  <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar matéria (ex: cólica, raio-x, bovino)..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-white"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* BOTÕES DE CICLO */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  onClick={() => handleSelectCycle('all')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-between border ${
                    selectedCycle === 'all'
                      ? 'bg-slate-800 text-white border-emerald-500/60 shadow-sm'
                      : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  <span>Todos os Ciclos</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
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

            {/* GRID DE MÓDULOS DISPONÍVEIS */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block">
                  Disciplinas da Graduação Disponíveis ({filteredActiveModules.length})
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Liberadas com Laboratório Clínico
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-h-[460px] overflow-y-auto pr-1">
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
                        <span className="font-mono text-emerald-400">{mod.lessons.length} Lições Práticas</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* MÓDULO SELECIONADO & SUAS LIÇÕES */}
            {selectedModule && (
              <div className="space-y-4 bg-slate-900/80 p-6 rounded-3xl border border-slate-800 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-md">
                      {renderModuleIcon(selectedModule.icon, "w-6 h-6 text-emerald-400")}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Disciplina em Foco
                        </span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getCycleBadge(selectedModule.cycle).color}`}>
                          {getCycleBadge(selectedModule.cycle).text}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-white">
                        {selectedModule.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                      {selectedModule.lessons.length} Lições Práticas
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
                  {selectedModule.fullDescription}
                </p>

                {/* LISTA DE LIÇÕES DO MÓDULO */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {selectedModule.lessons.map((lesson) => {
                    const isCompleted = progress.completedLessons.includes(lesson.id);

                    return (
                      <div
                        key={lesson.id}
                        className={`p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                          isCompleted
                            ? 'bg-slate-950/70 border-emerald-500/40 shadow-sm'
                            : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs text-slate-400">
                            <span className="font-mono text-emerald-400 font-bold">
                              Lição {lesson.order}
                            </span>
                            <span className="flex items-center gap-1 font-mono text-[11px]">
                              <Clock className="w-3.5 h-3.5" />
                              {lesson.estimatedMinutes} min
                            </span>
                          </div>

                          <h4 className="text-sm font-bold text-white line-clamp-2 leading-snug">
                            {lesson.title}
                          </h4>

                          <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                            {lesson.shortDescription}
                          </p>
                        </div>

                        <button
                          onClick={() => handleStartLesson(lesson)}
                          className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
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
            )}

            {/* BANNER INFORMATIVO DA GRADE 100% ATIVA */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-blue-950/40 border border-emerald-500/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    Grade Universitária 100% Desbloqueada & Operacional
                  </h4>
                  <p className="text-[11px] text-slate-300">
                    Todas as 33 disciplinas do currículo de Medicina Veterinária contam com lições interativas, casos clínicos e suporte de inteligência pedagógica da Dra. Millena.
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                33/33 Ativas
              </span>
            </div>
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
                Acompanhe o grau de retenção em cada conceito veterinário da grade universitária. Lembre-se: diálogos com a IA tutora não aumentam estes índices; apenas o acerto comprovado em exercícios eleva sua pontuação.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.values(CONCEPTS).map((concept) => (
                <ConceptMasteryCard
                  key={concept.id}
                  concept={concept}
                  mastery={progress.conceptMastery[concept.id]}
                  onReviewConcept={() => handleReviewConcept(concept.id)}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
