// src/learning/components/LessonRunner.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Bot,
  Trophy,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type {
  LearningLesson,
  LessonSection,
  TutorContext,
  LearningProgress,
  ExerciseAttempt
} from '../types/learning';
import { PHARMACOLOGY_EXERCISES } from '../data/lessons/pharmacologyLessons';
import { SectionRenderer } from './SectionRenderer';
import { ExerciseRenderer } from './ExerciseRenderer';
import { AITutorDrawer } from './AITutorDrawer';
import {
  loadLearningProgress,
  saveLearningProgress,
  recordExerciseAttempt,
  markLessonCompleted
} from '../storage/learningStorage';
import type { ExerciseEvaluationResult } from '../engine/learningEngine';
import { soundManager } from '../../utils/sound';

interface LessonRunnerProps {
  lesson: LearningLesson;
  onExit: () => void;
  onLessonCompleted?: (lessonId: string) => void;
}

export const LessonRunner: React.FC<LessonRunnerProps> = ({
  lesson,
  onExit,
  onLessonCompleted,
}) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const [completedSections, setCompletedSections] = useState<Record<string, boolean>>({});
  const [progress, setProgress] = useState<LearningProgress>(() => loadLearningProgress());
  const [isTutorOpen, setIsTutorOpen] = useState<boolean>(false);
  const [tutorInitialQuestion, setTutorInitialQuestion] = useState<string | undefined>(undefined);
  const [showCompletionModal, setShowCompletionModal] = useState<boolean>(false);

  const sections = lesson.sections;
  const currentSection: LessonSection = sections[currentSectionIndex];

  // Restaura progresso ativo salvo ou inicializa
  useEffect(() => {
    const loaded = loadLearningProgress();
    setProgress(loaded);
    if (loaded.activeLessonId === lesson.id && typeof loaded.activeSectionIndex === 'number') {
      setCurrentSectionIndex(Math.min(loaded.activeSectionIndex, sections.length - 1));
    }
  }, [lesson.id, sections.length]);

  const isCurrentSectionCompleted = Boolean(completedSections[currentSection.id]);

  const handleSectionComplete = () => {
    soundManager.playSuccess();
    setCompletedSections((prev) => ({
      ...prev,
      [currentSection.id]: true,
    }));

    // Se for a última seção, conclui a lição
    if (currentSectionIndex === sections.length - 1) {
      handleFinalizeLesson();
    }
  };

  const handleExerciseCompleted = (
    result: ExerciseEvaluationResult,
    submittedAnswer: string | number
  ) => {
    const exId = currentSection.exerciseId;
    const exercise = exId ? PHARMACOLOGY_EXERCISES[exId] : null;

    if (exercise) {
      const attempt: ExerciseAttempt = {
        exerciseId: exercise.id,
        conceptId: exercise.conceptId,
        timestamp: new Date().toISOString(),
        isCorrect: result.isCorrect,
        submittedAnswer,
        feedbackGiven: result.feedback,
      };

      const updated = recordExerciseAttempt(progress, attempt, result.scoreDelta);
      setProgress(updated);
    }

    handleSectionComplete();
  };

  const handleFinalizeLesson = () => {
    const updated = markLessonCompleted(progress, lesson.id);
    setProgress(updated);
    setShowCompletionModal(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // Ignora se ambiente sem canvas
    }

    onLessonCompleted?.(lesson.id);
  };

  const handleNextSection = () => {
    if (currentSectionIndex < sections.length - 1) {
      const nextIndex = currentSectionIndex + 1;
      setCurrentSectionIndex(nextIndex);
      saveLearningProgress({
        ...progress,
        activeLessonId: lesson.id,
        activeSectionIndex: nextIndex,
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevSection = () => {
    if (currentSectionIndex > 0) {
      const prevIndex = currentSectionIndex - 1;
      setCurrentSectionIndex(prevIndex);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenTutor = (question?: string) => {
    setTutorInitialQuestion(question);
    setIsTutorOpen(true);
  };

  // Contexto para o Tutor
  const tutorContext: TutorContext = {
    moduleId: lesson.moduleId,
    lessonId: lesson.id,
    sectionIndex: currentSectionIndex,
    sectionType: currentSection.type,
    conceptIds: lesson.concepts,
    mode: currentSection.type === 'assessment' ? 'examiner' : 'teacher',
    exerciseId: currentSection.exerciseId,
    allowDirectAnswer: currentSection.type !== 'assessment',
  };

  const currentExercise = currentSection.exerciseId
    ? PHARMACOLOGY_EXERCISES[currentSection.exerciseId]
    : null;

  return (
    <div className="w-full flex-1 min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* BARRA SUPERIOR FIXA */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-emerald-500/20 px-4 sm:px-8 py-3.5 flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Voltar ao Hub</span>
          </button>

          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
              Modo Aula • {lesson.title}
            </div>
            <h1 className="text-sm sm:text-base font-bold text-white truncate max-w-xs sm:max-w-md">
              {currentSection.title}
            </h1>
          </div>
        </div>

        {/* BOTÃO DA TUTORA IA */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleOpenTutor()}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
          >
            <Bot className="w-4 h-4" />
            <span className="hidden sm:inline">Dra. Sophia (Tutora)</span>
          </button>
        </div>
      </header>

      {/* RASTREADOR DE PROGRESSO DAS SEÇÕES */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 sm:px-8 py-2.5 w-full">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {sections.map((sec, idx) => {
            const isCompleted = Boolean(completedSections[sec.id]);
            const isCurrent = idx === currentSectionIndex;
            const canNavigate = isCompleted || idx <= currentSectionIndex;

            return (
              <button
                key={sec.id}
                disabled={!canNavigate}
                onClick={() => setCurrentSectionIndex(idx)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                    : isCompleted
                    ? 'text-slate-300 hover:bg-slate-800'
                    : 'text-slate-600 cursor-not-allowed opacity-60'
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : !canNavigate ? (
                  <Lock className="w-3 h-3 text-slate-600" />
                ) : (
                  <span className="w-3.5 h-3.5 rounded-full border border-slate-500 text-[10px] flex items-center justify-center">
                    {idx + 1}
                  </span>
                )}
                <span>
                  {sec.type === 'theory' && 'Teoria'}
                  {sec.type === 'interactive_demo' && 'Simulador'}
                  {sec.type === 'lab' && 'Lab Sandbox'}
                  {sec.type === 'exercise' && 'Exercício'}
                  {sec.type === 'reflection' && 'Reflexão'}
                  {sec.type === 'assessment' && 'Avaliação'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ÁREA CENTRAL DE CONTEÚDO */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-8 flex flex-col justify-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            {currentSection.type === 'exercise' && currentExercise ? (
              <ExerciseRenderer
                exercise={currentExercise}
                onExerciseCompleted={handleExerciseCompleted}
                onOpenTutor={handleOpenTutor}
                isCompleted={isCurrentSectionCompleted}
              />
            ) : (
              <SectionRenderer
                section={currentSection}
                onComplete={handleSectionComplete}
                isCompleted={isCurrentSectionCompleted}
                onOpenTutor={handleOpenTutor}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* BARRA DE NAVEGAÇÃO INFERIOR */}
      <footer className="bg-slate-900 border-t border-slate-800 px-4 sm:px-8 py-3.5 w-full">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={handlePrevSection}
            disabled={currentSectionIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Anterior
          </button>

          <span className="text-xs text-slate-400 font-mono">
            Passo {currentSectionIndex + 1} de {sections.length}
          </span>

          {currentSectionIndex < sections.length - 1 ? (
            <button
              onClick={handleNextSection}
              disabled={!isCurrentSectionCompleted}
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 disabled:hover:bg-emerald-600 text-white shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
            >
              Próximo
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleFinalizeLesson}
              disabled={!isCurrentSectionCompleted}
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 disabled:opacity-40 text-white shadow-md transition-all cursor-pointer"
            >
              <Trophy className="w-4 h-4" />
              Finalizar Lição
            </button>
          )}
        </div>
      </footer>

      {/* MODAL DE CONCLUSÃO DA LIÇÃO */}
      <AnimatePresence>
        {showCompletionModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                <Trophy className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 block mb-1">
                  Lição Concluída com Sucesso!
                </span>
                <h3 className="text-xl font-black text-white">{lesson.title}</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Você validou seu aprendizado por meio de fundamentação causal, experimentação com a seringa didática e resolução de exercícios determinísticos.
                </p>
              </div>

              <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/60 text-left space-y-2 text-xs">
                <span className="text-slate-400 font-bold block uppercase text-[10px]">
                  Conceitos Fortalecidos:
                </span>
                <div className="space-y-1 text-slate-200">
                  {lesson.concepts.map((cId) => (
                    <div key={cId} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{cId.replace('concept_', '').replace(/_/g, ' ')}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onExit}
                className="w-full py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 transition-all cursor-pointer"
              >
                Retornar ao Hub de Aulas
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* DRAWER DA TUTORA IA */}
      <AITutorDrawer
        isOpen={isTutorOpen}
        onClose={() => setIsTutorOpen(false)}
        context={tutorContext}
        initialQuestion={tutorInitialQuestion}
      />
    </div>
  );
};
