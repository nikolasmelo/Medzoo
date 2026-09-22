// src/learning/storage/learningStorage.ts
import type { LearningProgress, ExerciseAttempt } from '../types/learning';
import { updateConceptMastery } from '../engine/learningEngine';
import { supabase } from '../../lib/supabase';

const STORAGE_KEY = 'medzoo_learning_progress_v1';

export const defaultLearningProgress: LearningProgress = {
  completedLessons: [],
  activeLessonId: 'lesson_pharma_01',
  activeSectionIndex: 0,
  conceptMastery: {},
  exerciseHistory: [],
  lastUpdated: new Date().toISOString()
};

/**
 * Carrega o progresso de estudo do aluno, isolado de CareerState.
 */
export function loadLearningProgress(): LearningProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...defaultLearningProgress,
        ...parsed,
        conceptMastery: parsed.conceptMastery || {},
        completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [],
        exerciseHistory: Array.isArray(parsed.exerciseHistory) ? parsed.exerciseHistory : []
      };
    }
  } catch (err) {
    console.warn('[LearningStorage] Erro ao ler progresso do localStorage, usando padrão:', err);
  }
  return { ...defaultLearningProgress };
}

/**
 * Salva o progresso no localStorage e tenta sincronização silenciosa com Supabase.
 */
export function saveLearningProgress(progress: LearningProgress): void {
  try {
    const payload = {
      ...progress,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));

    // Sincronização em background se o usuário estiver autenticado (sem bloquear)
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user?.id) {
        supabase
          .from('learning_progress')
          .upsert({
            user_id: session.user.id,
            completed_lessons: payload.completedLessons,
            concept_mastery: payload.conceptMastery,
            exercise_history: payload.exerciseHistory,
            last_updated: payload.lastUpdated
          }, { onConflict: 'user_id' })
          .then(
            ({ error }) => {
              if (error) {
                // Silencioso: falha remota não afeta a sessão local
                console.debug('[LearningStorage] Sincronização remota pendente ou tabela não criada:', error.message);
              }
            },
            () => {}
          );
      }
    }).catch(() => {});
  } catch (err) {
    console.error('[LearningStorage] Falha ao persistir no localStorage:', err);
  }
}

/**
 * Registra a tentativa de um exercício e recalcula a maestria dos conceitos envolvidos.
 */
export function recordExerciseAttempt(
  current: LearningProgress,
  attempt: ExerciseAttempt,
  scoreDelta: number
): LearningProgress {
  const updatedMastery = updateConceptMastery(
    current.conceptMastery,
    attempt,
    scoreDelta
  );

  const updatedProgress: LearningProgress = {
    ...current,
    conceptMastery: updatedMastery,
    exerciseHistory: [attempt, ...current.exerciseHistory].slice(0, 100), // Mantém histórico recente
    lastUpdated: new Date().toISOString()
  };

  saveLearningProgress(updatedProgress);
  return updatedProgress;
}

/**
 * Marca uma lição como concluída.
 */
export function markLessonCompleted(
  current: LearningProgress,
  lessonId: string
): LearningProgress {
  if (current.completedLessons.includes(lessonId)) {
    return current;
  }

  const updated: LearningProgress = {
    ...current,
    completedLessons: [...current.completedLessons, lessonId],
    lastUpdated: new Date().toISOString()
  };

  saveLearningProgress(updated);
  return updated;
}
