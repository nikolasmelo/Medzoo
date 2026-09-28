// src/learning/data/lessons/index.ts
import { PHARMACOLOGY_EXERCISES, PHARMACOLOGY_LESSONS } from './pharmacologyLessons';
import { PHYSIOLOGY_EXERCISES, PHYSIOLOGY_LESSONS } from './physiologyLessons';
import { NUTRITION_EXERCISES, NUTRITION_LESSONS } from './nutritionLessons';
import type { LearningExercise } from '../../types/learning';

export const ALL_LEARNING_EXERCISES: Record<string, LearningExercise> = {
  ...PHARMACOLOGY_EXERCISES,
  ...PHYSIOLOGY_EXERCISES,
  ...NUTRITION_EXERCISES,
};

export {
  PHARMACOLOGY_LESSONS,
  PHARMACOLOGY_EXERCISES,
  PHYSIOLOGY_LESSONS,
  PHYSIOLOGY_EXERCISES,
  NUTRITION_LESSONS,
  NUTRITION_EXERCISES,
};
