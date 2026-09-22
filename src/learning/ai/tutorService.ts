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
  private lastProvider: 'openai' | 'local' | 'fallback' = 'openai';

  /**
   * Executa uma chamada com timeout para evitar travamento da UI
   */
  private async withTimeout<T>(promise: Promise<T>, timeoutMs = 8000): Promise<T> {
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
        const response = await this.withTimeout(this.remoteTutor.ask(context, question));
        this.lastProvider = response.provider || 'openai';
        return response;
      } catch (err) {
        console.warn('[TutorService] Fallback para LocalKnowledgeTutor:', err);
      }
    }
    this.lastProvider = 'local';
    const localRes = await this.localTutor.ask(context, question);
    return {
      ...localRes,
      provider: 'local'
    };
  }

  async getHint(context: TutorContext, level: 1 | 2 | 3): Promise<TutorResponse> {
    if (this.useRemote && typeof navigator !== 'undefined' && navigator.onLine) {
      try {
        const response = await this.withTimeout(this.remoteTutor.getHint(context, level));
        this.lastProvider = response.provider || 'openai';
        return response;
      } catch (err) {
        console.warn('[TutorService] Fallback para LocalKnowledgeTutor no hint:', err);
      }
    }
    this.lastProvider = 'local';
    const localRes = await this.localTutor.getHint(context, level);
    return {
      ...localRes,
      provider: 'local'
    };
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

  getLastProvider(): 'openai' | 'local' | 'fallback' {
    return this.lastProvider;
  }

  setUseRemote(enabled: boolean) {
    this.useRemote = enabled;
  }
}

export const tutorService = new TutorService();
