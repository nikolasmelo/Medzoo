// src/learning/ai/tutorService.ts
import type {
  TutorAIProvider,
  TutorContext,
  TutorResponse,
  TutorEvaluation,
} from '../types/learning';
import { LocalKnowledgeTutor } from './localKnowledgeTutor';
import { RemoteAITutor } from './remoteAITutor';

class TutorService implements TutorAIProvider {
  private localTutor = new LocalKnowledgeTutor();
  private remoteTutor = new RemoteAITutor();
  private useRemote = true;

  /**
   * Executa uma chamada com timeout para evitar travamento da UI
   */
  private async withTimeout<T>(promise: Promise<T>, timeoutMs = 4000): Promise<T> {
    return Promise.race([
      promise,
      new Promise<T>((_, reject) =>
        setTimeout(() => reject(new Error('Timeout ao conectar com Tutor Remoto')), timeoutMs)
      ),
    ]);
  }

  async ask(context: TutorContext, question: string): Promise<TutorResponse> {
    if (this.useRemote && typeof navigator !== 'undefined' && navigator.onLine) {
      try {
        return await this.withTimeout(this.remoteTutor.ask(context, question));
      } catch (err) {
        console.warn('[TutorService] Fallback para LocalKnowledgeTutor:', err);
      }
    }
    return this.localTutor.ask(context, question);
  }

  async getHint(context: TutorContext, level: 1 | 2 | 3): Promise<TutorResponse> {
    if (this.useRemote && typeof navigator !== 'undefined' && navigator.onLine) {
      try {
        return await this.withTimeout(this.remoteTutor.getHint(context, level));
      } catch (err) {
        console.warn('[TutorService] Fallback para LocalKnowledgeTutor no hint:', err);
      }
    }
    return this.localTutor.getHint(context, level);
  }

  async evaluate(context: TutorContext, studentAnswer: string): Promise<TutorEvaluation> {
    if (this.useRemote && typeof navigator !== 'undefined' && navigator.onLine) {
      try {
        return await this.withTimeout(this.remoteTutor.evaluate(context, studentAnswer));
      } catch (err) {
        console.warn('[TutorService] Fallback para LocalKnowledgeTutor na avaliação:', err);
      }
    }
    return this.localTutor.evaluate(context, studentAnswer);
  }

  setUseRemote(enabled: boolean) {
    this.useRemote = enabled;
  }
}

export const tutorService = new TutorService();
