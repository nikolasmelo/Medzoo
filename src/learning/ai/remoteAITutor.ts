// src/learning/ai/remoteAITutor.ts
import type {
  TutorAIProvider,
  TutorContext,
  TutorResponse,
  TutorEvaluation,
} from '../types/learning';
import { supabase } from '../../lib/supabase';

/**
 * Adaptador para Supabase Edge Function ('/functions/v1/tutor-ai').
 * NUNCA expõe chaves de API de terceiros no cliente.
 */
export class RemoteAITutor implements TutorAIProvider {
  async ask(context: TutorContext, question: string): Promise<TutorResponse> {
    const { data, error } = await supabase.functions.invoke('tutor-ai', {
      body: {
        action: 'ask',
        context,
        question,
        history: context.history || []
      }
    });

    if (error || !data) {
      throw new Error(`[RemoteAITutor] Falha ao invocar edge function: ${error?.message || 'Sem dados'}`);
    }

    return {
      ...(data as TutorResponse),
      provider: data.provider || 'openai'
    };
  }

  async getHint(context: TutorContext, level: 1 | 2 | 3): Promise<TutorResponse> {
    const { data, error } = await supabase.functions.invoke('tutor-ai', {
      body: {
        action: 'hint',
        context,
        level,
        history: context.history || []
      }
    });

    if (error || !data) {
      throw new Error(`[RemoteAITutor] Falha ao invocar edge function: ${error?.message || 'Sem dados'}`);
    }

    return {
      ...(data as TutorResponse),
      provider: data.provider || 'openai'
    };
  }

  async evaluate(context: TutorContext, studentAnswer: string): Promise<TutorEvaluation> {
    const { data, error } = await supabase.functions.invoke('tutor-ai', {
      body: {
        action: 'evaluate',
        context,
        studentAnswer,
        history: context.history || []
      }
    });

    if (error || !data) {
      throw new Error(`[RemoteAITutor] Falha ao invocar edge function: ${error?.message || 'Sem dados'}`);
    }

    return data as TutorEvaluation;
  }
}
