// src/learning/ai/localKnowledgeTutor.ts
import type {
  TutorAIProvider,
  TutorContext,
  TutorResponse,
  TutorEvaluation,
} from '../types/learning';
import {
  PHARMACOLOGY_FACTS,
} from '../data/knowledge/pharmacologyKnowledge';

export class LocalKnowledgeTutor implements TutorAIProvider {
  async ask(context: TutorContext, question: string): Promise<TutorResponse> {
    const qLower = question.toLowerCase();

    // REGRA DO MODO EXAMINADOR: Não entrega resposta durante avaliação
    if (context.mode === 'examiner' && !context.allowDirectAnswer) {
      return {
        message: '📝 Modo Avaliador Ativo: Durante o teste, não posso entregar respostas ou cálculos prontos. Lembre-se da fórmula universal: V = (Peso × Dose) ÷ Concentração. Analise os dados do paciente com calma!',
        mode: 'examiner',
        isDirectAnswer: false,
        suggestedQuestions: [
          'Como converter % para mg/mL?',
          'O que significa dose em mg/kg?'
        ]
      };
    }

    // 1. DÚVIDA SOBRE A FÓRMULA GERAL
    if (qLower.includes('formula') || qLower.includes('fórmula') || qLower.includes('como calcula') || qLower.includes('como calcular')) {
      if (context.mode === 'socratic') {
        return {
          message: 'A fórmula é V = (P × D) ÷ C. Mas me responda: se você dobrar o peso do paciente mantendo a mesma dose e concentração, o que deve acontecer com o volume a ser aspirado?',
          mode: 'socratic',
          isDirectAnswer: false,
          suggestedQuestions: [
            'O volume também dobraria?',
            'Por que a concentração divide?'
          ]
        };
      }

      return {
        message: `📐 **Fórmula Canônica de Volume:**\n\n**V = (P × D) ÷ C**\n\n- **P (Peso em kg):** Medido na balança.\n- **D (Dose em mg/kg):** Quantidade de fármaco por quilo.\n- **C (Concentração em mg/mL):** Princípio ativo por mL.\n- **V (Volume em mL):** O líquido que você aspira na seringa.`,
        mode: context.mode,
        isDirectAnswer: true,
        suggestedQuestions: [
          'Como converter porcentagem para mg/mL?',
          'O que acontece se eu errar a dose?'
        ]
      };
    }

    // 2. CONVERSÃO DE PORCENTAGEM
    if (
      qLower.includes('porcentagem') ||
      qLower.includes('converter') ||
      qLower.includes('conversão') ||
      (qLower.includes('%') && (qLower.includes('mg') || qLower.includes('como') || qLower.includes('significa') || qLower.includes('regra')))
    ) {
      return {
        message: `💡 **Regra Áurea de Conversão:**\n\nPara converter porcentagem (%) em mg/mL, basta **multiplicar o valor por 10**:\n\n- 0,2% × 10 = **2 mg/mL** (ex: Meloxicam para aves)\n- 2,0% × 10 = **20 mg/mL** (ex: Meloxicam para grandes mamíferos)\n- 5,0% × 10 = **50 mg/mL** (ex: Enrofloxacina)\n- 1,0% × 10 = **10 mg/mL** (ex: Atropina)`,
        mode: context.mode,
        isDirectAnswer: true,
        suggestedQuestions: [
          'Qual a diferença entre Meloxicam 0,2% e 2%?',
          'Qual a fórmula de volume?'
        ]
      };
    }

    // 3. TOXICIDADE / SOBREDOSE DE MELOXICAM
    if (qLower.includes('meloxicam') && (
      qLower.includes('sobredose') ||
      qLower.includes('toxico') ||
      qLower.includes('tóxico') ||
      qLower.includes('rim') ||
      qLower.includes('renal') ||
      qLower.includes('dose alta') ||
      qLower.includes('dobro') ||
      qLower.includes('excesso') ||
      qLower.includes('overdose')
    )) {
      const fact = PHARMACOLOGY_FACTS.meloxicam_02;
      return {
        message: `🚨 **Cadeia Causal de Sobredose de Meloxicam:**\n\n` +
          `1. **Causa:** ${fact.toxicityChain.cause}.\n` +
          `2. **Mecanismo:** ${fact.toxicityChain.mechanism}.\n` +
          `3. **Efeito:** ${fact.toxicityChain.effect}.\n` +
          `4. **Consequência Clínica:** ${fact.toxicityChain.clinicalMeaning}.`,
        mode: context.mode,
        isDirectAnswer: true,
        causalChain: fact.toxicityChain,
        suggestedQuestions: [
          'O que acontece em caso de subdose?',
          'Qual a dose de Meloxicam em aves?'
        ]
      };
    }

    // 4. SUBDOSE / ENROFLOXACINA
    if (qLower.includes('subdose') || (qLower.includes('enrofloxacina') && qLower.includes('resistencia'))) {
      const fact = PHARMACOLOGY_FACTS.enrofloxacino_50;
      return {
        message: `⚠️ **Cadeia Causal de Subdose de Antimicrobiano:**\n\n` +
          `1. **Causa:** ${fact.toxicityChain.cause}.\n` +
          `2. **Mecanismo:** ${fact.toxicityChain.mechanism}.\n` +
          `3. **Efeito:** ${fact.toxicityChain.effect}.\n` +
          `4. **Consequência Clínica:** ${fact.toxicityChain.clinicalMeaning}.`,
        mode: context.mode,
        isDirectAnswer: true,
        causalChain: fact.toxicityChain,
        suggestedQuestions: [
          'Como calcular a Enrofloxacina para mamíferos?',
          'O que é Janela Terapêutica?'
        ]
      };
    }

    // 5. JANELA TERAPÊUTICA
    if (qLower.includes('janela') || qLower.includes('terapeutica') || qLower.includes('terapêutica')) {
      return {
        message: `🎯 **Janela Terapêutica:** É o intervalo seguro entre a **Concentração Mínima Eficaz** (abaixo dela o tratamento falha) e a **Concentração Máxima Tolerada** (acima dela surgem efeitos tóxicos graves). Em silvestres, essa janela costuma ser muito estreita devido a particularidades de filtração glomerular e depuração hepática.`,
        mode: context.mode,
        isDirectAnswer: true,
        suggestedQuestions: [
          'Como o peso influencia na janela terapêutica?',
          'Qual a fórmula de volume?'
        ]
      };
    }

    // 6. MODO SOCRÁTICO GENÉRICO
    if (context.mode === 'socratic') {
      return {
        message: `Interessante pergunta! Antes de eu explicar, me diga: nesta situação, você acha que a variável limitante é o peso do paciente, a densidade do frasco ou a margem terapêutica do princípio ativo?`,
        mode: 'socratic',
        isDirectAnswer: false,
        suggestedQuestions: [
          'Acho que é o peso.',
          'Acho que é a concentração do frasco.'
        ]
      };
    }

    // 7. REGRA ABSOLUTA: NÃO INVENTAR DADOS FORA DA BASE DA AULA
    return {
      message: `ℹ️ Esta informação específica não consta na base factual desta lição de Farmacologia. Para manter o rigor médico, utilize os conceitos homologados de **Peso (kg)**, **Dose (mg/kg)**, **Concentração (mg/mL)** e a fórmula **V = (P × D) ÷ C**.`,
      mode: 'teacher',
      isDirectAnswer: false,
      suggestedQuestions: [
        'Como calcular o volume da dose?',
        'Como converter % para mg/mL?'
      ]
    };
  }

  async getHint(_context: TutorContext, level: 1 | 2 | 3): Promise<TutorResponse> {
    if (level === 1) {
      return {
        message: '💡 **Pista Leve:** Verifique o peso do paciente em kg e a concentração do frasco em mg/mL. Lembre-se de converter a porcentagem (% × 10).',
        mode: 'hint',
        isDirectAnswer: false,
      };
    }

    if (level === 2) {
      return {
        message: '🔍 **Pista Direcionada:** Calcule primeiro a Massa Total em mg multiplicando Peso × Dose. Depois, divida esse resultado pela Concentração.',
        mode: 'hint',
        isDirectAnswer: false,
      };
    }

    // Level 3: Passo a passo explícito
    return {
      message: '📐 **Fórmula Passo a Passo:**\n1. Massa = Peso (kg) × Dose (mg/kg)\n2. Volume = Massa (mg) ÷ Concentração (mg/mL)\n3. O resultado final é dado em mililitros (mL).',
      mode: 'hint',
      isDirectAnswer: false,
    };
  }

  async evaluate(_context: TutorContext, studentAnswer: string): Promise<TutorEvaluation> {
    // Avaliação conceitual de raciocínio aberto
    const ansLower = studentAnswer.toLowerCase();

    if (ansLower.includes('dividir') && ansLower.includes('concentra')) {
      return {
        isCorrect: true,
        feedback: 'Excelente raciocínio! Você compreendeu que a concentração divide a massa para encontrar o volume de diluição.',
        detectedMisconceptions: [],
        encouragement: 'Muito bem estruturado!'
      };
    }

    return {
      isCorrect: false,
      feedback: 'Atenção ao raciocínio físico-químico: lembre-se que a concentração informa quantos mg existem em cada mL.',
      detectedMisconceptions: ['confused_concentration_operation'],
      encouragement: 'Tente rever a fórmula canônica V = (P × D) ÷ C.'
    };
  }
}
