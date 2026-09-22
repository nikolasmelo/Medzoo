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
  Layers,
  FileText
} from 'lucide-react';
import type { LearningLesson, LearningProgress } from '../types/learning';
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

export const LearningHome: React.FC<LearningHomeProps> = ({
  onBackToMainMenu,
  onOpenVademecum,
}) => {
  const [activeLesson, setActiveLesson] = useState<LearningLesson | null>(null);
  const [activeTab, setActiveTab] = useState<'modules' | 'concepts'>('modules');
  const [progress, setProgress] = useState<LearningProgress>(() => loadLearningProgress());

  // Atualiza progresso sempre que o hub ganha foco
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

  // Estatísticas de aprendizado
  const totalCompleted = progress.completedLessons.length;
  const masteryValues = Object.values(progress.conceptMastery);
  const averageMastery = masteryValues.length > 0
    ? Math.round(masteryValues.reduce((acc, curr) => acc + curr.score, 0) / masteryValues.length)
    : 0;
  const conceptsNeedingReview = getConceptsNeedingReview(progress.conceptMastery);

  // Módulo ativo MVP (Farmacologia)
  const pharmaModule = LEARNING_MODULES[0];

  const handleStartLesson = (lesson: LearningLesson) => {
    setActiveLesson(lesson);
  };

  const handleReviewConcept = (conceptId: string) => {
    // Localiza uma lição que cubra esse conceito
    const matched = pharmaModule.lessons.find((l) => l.concepts.includes(conceptId));
    if (matched) {
      setActiveLesson(matched);
    } else {
      setActiveLesson(pharmaModule.lessons[0]);
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
            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                MedZoo Educacional
              </div>
              <h1 className="text-base sm:text-lg font-black text-white leading-tight">
                Modo Aula • Formação Clínica Veterinária
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
              Módulos & Lições
            </button>
            <button
              onClick={() => setActiveTab('concepts')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'concepts'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Mapa de Domínio
            </button>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-8 space-y-8">
        {/* BANNER DE BOAS-VINDAS E STATS */}
        <div className="bg-linear-to-r from-emerald-950/80 via-slate-900 to-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                Método Pedagógico Ativo MedZoo
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Domine o Raciocínio Clínico em Animais Silvestres
              </h2>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                Aprenda a fundamentar cada conduta terapêutica através do ciclo ativo:
                <strong className="text-emerald-300"> Ensinar ➔ Verificar ➔ Praticar ➔ Aplicar ➔ Avaliar</strong>.
                Seu progresso é medido estritamente por competência clínica comprovada em exercícios determinísticos e laboratório sandbox isolado.
              </p>
            </div>

            {/* CARDS DE STATS */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-800/80 border border-slate-700/60 p-4 rounded-2xl text-center space-y-1">
                <div className="text-2xl font-black font-mono text-emerald-400">
                  {totalCompleted} / 3
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
            {/* MÓDULO ATIVO: FARMACOLOGIA */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Syringe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 block">
                      Módulo MVP Disponível
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {pharmaModule.title}
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/40">
                  3 Lições Práticas
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl">
                {pharmaModule.fullDescription}
              </p>

              {/* LISTA DE LIÇÕES DO MÓDULO */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
                {pharmaModule.lessons.map((lesson, idx) => {
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

                        <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {lesson.title}
                        </h4>

                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                          {lesson.subtitle}
                        </p>
                      </div>

                      {/* OBJETIVOS DA LIÇÃO */}
                      <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50 text-[11px] text-slate-300 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                          Objetivos pedagógicos:
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

            {/* MÓDULOS EM BREVE (ROADMAP) */}
            <div className="space-y-4 pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-slate-400 text-xs uppercase font-bold tracking-wider">
                <Layers className="w-4 h-4" />
                Roadmap de Módulos (Em Desenvolvimento)
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {LEARNING_MODULES.slice(1).map((mod) => (
                  <div
                    key={mod.id}
                    className="bg-slate-900/50 border border-slate-800/60 rounded-2xl p-5 space-y-3 opacity-70"
                  >
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="uppercase font-bold tracking-wider">Próximo Módulo</span>
                      <Lock className="w-3.5 h-3.5" />
                    </div>

                    <h4 className="text-sm font-bold text-slate-200">
                      {mod.title}
                    </h4>

                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {mod.shortDescription}
                    </p>

                    <div className="pt-2">
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-800 text-slate-400 border border-slate-700/60">
                        Requer Módulo de Farmacologia
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ABA: MAPA DE DOMÍNIO DE CONCEITOS */}
        {activeTab === 'concepts' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                Matriz de Domínio Conceitual
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Acompanhe o grau de retenção em cada conceito farmacológico. Lembre-se: diálogos com a IA tutora não aumentam estes índices; apenas o acerto comprovado em exercícios eleva sua pontuação.
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
