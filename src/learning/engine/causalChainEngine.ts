// src/learning/engine/causalChainEngine.ts
import type { CausalChain } from '../types/learning';

/**
 * Validador e formatador pedagógico de cadeias de causa e efeito.
 * Assegura que toda explicação siga a estrutura canônica:
 * Causa -> Mecanismo -> Efeito -> Consequência Clínica
 */
export function formatCausalExplanation(chain: CausalChain): string {
  return [
    `🔹 **Causa Inicial:** ${chain.cause}`,
    `⚙️ **Mecanismo Farmacológico/Fisiológico:** ${chain.mechanism}`,
    `📊 **Efeito Mensurável:** ${chain.effect}`,
    `🩺 **Consequência Clínica:** ${chain.clinicalMeaning}`
  ].join('\n\n');
}

/**
 * Retorna uma pergunta reflexiva socrática baseada na cadeia causal.
 */
export function generateSocraticQuestionFromChain(chain: CausalChain): string {
  return `Se ocorrer ${chain.cause.toLowerCase()}, qual é o mecanismo que leva a ${chain.effect.toLowerCase()} e o que isso significa para a vida do animal?`;
}
