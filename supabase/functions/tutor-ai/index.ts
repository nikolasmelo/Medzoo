// supabase/functions/tutor-ai/index.ts
// Supabase Edge Function: Dra. Millena — Tutora de IA Generativa Real do MedZoo
// Executa no Deno runtime da Supabase. Nunca expõe OPENAI_API_KEY ao cliente.

export interface CausalChain {
  cause: string;
  mechanism: string;
  effect: string;
  clinicalMeaning: string;
}

export interface DrugFact {
  id: string;
  name: string;
  concentrationString: string;
  concentrationMgMl: number;
  class: string;
  primaryIndication: string;
  usualDoseSilvestres: string;
  contraindications: string;
  toxicityChain: CausalChain;
}

// ── RAG: BASE ESTRUTURADA DE CHUNKS CANÔNICOS DO MEDZOO ──
const PHARMACOLOGY_FACTS: Record<string, DrugFact> = {
  meloxicam_02: {
    id: 'meloxicam_02',
    name: 'Meloxicam 0,2%',
    concentrationString: '0,2% (2 mg/mL)',
    concentrationMgMl: 2.0,
    class: 'Anti-inflamatório Não Esteroidal (AINE) inibidor preferencial de COX-2',
    primaryIndication: 'Analgesia e controle inflamatório em aves, répteis e pequenos mamíferos.',
    usualDoseSilvestres: '0,5 a 1,0 mg/kg (Aves/Répteis requerem doses proporcionalmente maiores devido à alta taxa metabólica e depuração renal).',
    contraindications: 'Pacientes desidratados, com insuficiência renal pré-existente ou sangramento digestivo ativo.',
    toxicityChain: {
      cause: 'Sobredose de Meloxicam (> 2x a dose recomendada)',
      mechanism: 'Inibição não seletiva de COX-1 com perda de prostaglandinas protetoras (PGE2 e PGI2) renais e gástricas',
      effect: 'Vasoconstrição da arteríola aferente renal e erosão da barreira de muco gástrico',
      clinicalMeaning: 'Necrose papilar renal aguda, úlceras gastrointestinais hemorrágicas e falência renal anúrica'
    }
  },
  meloxicam_20: {
    id: 'meloxicam_20',
    name: 'Meloxicam 2,0%',
    concentrationString: '2,0% (20 mg/mL)',
    concentrationMgMl: 20.0,
    class: 'AINE concentrado',
    primaryIndication: 'Mamíferos silvestres de médio e grande porte (onça, anta, lobo-guará). NUNCA usar em aves de pequeno porte sem diluição prévia devido ao risco de sobredose por erro de volume.',
    usualDoseSilvestres: '0,2 a 0,4 mg/kg em carnívoros e grandes ungulados.',
    contraindications: 'Uso não diluído em animais com peso menor que 5 kg.',
    toxicityChain: {
      cause: 'Uso acidental de formulação 2% em animal pequeno',
      mechanism: 'Volume aspirado carrega 10 vezes mais princípio ativo do que a formulação 0,2%',
      effect: 'Concentração sérica fulminante acima da capacidade de depuração hepática',
      clinicalMeaning: 'Insuficiência renal hiperaguda e óbito por intoxicação iatrogênica em poucas horas'
    }
  },
  enrofloxacino_50: {
    id: 'enrofloxacino_50',
    name: 'Enrofloxacina 5,0%',
    concentrationString: '5,0% (50 mg/mL)',
    concentrationMgMl: 50.0,
    class: 'Fluoroquinolona bactericida de amplo espectro',
    primaryIndication: 'Infecções bacterianas graves respiratórias, cutâneas e pós-operatórias.',
    usualDoseSilvestres: '10 mg/kg a cada 12 ou 24 horas.',
    contraindications: 'Animais em crescimento rápido (risco de artropatia e lesão de cartilagem) e fêmeas prenhes.',
    toxicityChain: {
      cause: 'Subdose repetida de Enrofloxacina',
      mechanism: 'Concentração tecidual permanece abaixo da CMI (Concentração Inibitória Mínima)',
      effect: 'Bactérias sobreviventes adquirem mutações de resistência na DNA girase',
      clinicalMeaning: 'Falha terapêutica completa, choque séptico refratário e disseminação de cepas multirresistentes'
    }
  },
  atropina_10: {
    id: 'atropina_10',
    name: 'Sulfato de Atropina 1%',
    concentrationString: '1,0% (10 mg/mL)',
    concentrationMgMl: 10.0,
    class: 'Anticolinérgico parassimpaticolítico (bloqueador muscarínico)',
    primaryIndication: 'Bradicardia vagal profunda, PCR iminente e intoxicação por organofosforados.',
    usualDoseSilvestres: '0,02 a 0,04 mg/kg IV ou IM de emergência.',
    contraindications: 'Taquiarritmias pré-existentes, glaucoma e hipertermia grave.',
    toxicityChain: {
      cause: 'Sobredose de Atropina',
      mechanism: 'Bloqueio parassimpático absoluto e desinibição simpática atrial extrema',
      effect: 'Taquicardia ventricular grave, redução crítica do tempo de enchimento diastólico e hipertermia anidrótica',
      clinicalMeaning: 'Colapso hemodinâmico, fibrilação ventricular e morte súbita'
    }
  }
};

const KNOWLEDGE_CHUNKS = [
  {
    id: 'formula_volume',
    title: 'Fórmula Canônica de Volume',
    keywords: ['formula', 'fórmula', 'calculo', 'cálculo', 'volume', 'seringa', 'peso', 'dose', 'concentracao', 'concentração'],
    content: 'Fórmula Canônica: V = (P × D) ÷ C, onde P = Peso em kg, D = Dose em mg/kg, C = Concentração em mg/mL e V = Volume em mL. A massa total necessária é P × D (em mg).'
  },
  {
    id: 'percent_conversion',
    title: 'Conversão de Porcentagem para mg/mL',
    keywords: ['porcentagem', '%', 'conversão', 'converter', 'mg/ml', 'concentração', 'regra'],
    content: 'Regra de Ouro: % × 10 = mg/mL. Exemplo: 0,2% = 2 mg/mL; 2,0% = 20 mg/mL; 5,0% = 50 mg/mL; 1,0% = 10 mg/mL.'
  },
  {
    id: 'therapeutic_window',
    title: 'Janela Terapêutica e Margem de Segurança',
    keywords: ['janela', 'terapeutica', 'terapêutica', 'margem', 'segurança', 'cmi', 'toxico', 'subdose', 'sobredose'],
    content: 'A Janela Terapêutica é o intervalo entre a Concentração Mínima Eficaz (CMI) e a Concentração Máxima Tolerada. Em animais silvestres, essa margem é estreita devido a particularidades de filtração glomerular e depuração hepática.'
  },
  {
    id: 'overdose_subdose_causal',
    title: 'Causalidade de Erros de Posologia',
    keywords: ['risco', 'erro', 'desvio', 'perigo', 'consequência', 'rim', 'resistencia', 'morte'],
    content: 'Subdose leva à falha de tratamento e seleção de bactérias resistentes. Sobredose sobrecarrega néfrons e hepatócitos, provocando falência orgânica hiperaguda.'
  }
];

// ── FUNÇÕES DETERMINÍSTICAS (TOOLS) ──
function calculateVolume(args: { patientWeightKg: number; doseMgKg: number; concentrationMgMl: number }) {
  const { patientWeightKg, doseMgKg, concentrationMgMl } = args;
  if (!patientWeightKg || patientWeightKg <= 0 || !doseMgKg || doseMgKg <= 0 || !concentrationMgMl || concentrationMgMl <= 0) {
    return { error: 'Valores inválidos. Peso, dose e concentração devem ser números positivos.' };
  }
  const totalMassMg = patientWeightKg * doseMgKg;
  const volumeMl = Number((totalMassMg / concentrationMgMl).toFixed(4));
  return {
    patientWeightKg,
    doseMgKg,
    concentrationMgMl,
    totalMassMg: Number(totalMassMg.toFixed(4)),
    volumeMl,
    formula: `(${patientWeightKg} kg × ${doseMgKg} mg/kg) ÷ ${concentrationMgMl} mg/mL = ${volumeMl} mL`
  };
}

function calculateDose(args: { patientWeightKg: number; volumeMl: number; concentrationMgMl: number }) {
  const { patientWeightKg, volumeMl, concentrationMgMl } = args;
  if (!patientWeightKg || patientWeightKg <= 0 || !volumeMl || volumeMl <= 0 || !concentrationMgMl || concentrationMgMl <= 0) {
    return { error: 'Valores inválidos para cálculo de dose.' };
  }
  const totalMassMg = volumeMl * concentrationMgMl;
  const doseMgKg = Number((totalMassMg / patientWeightKg).toFixed(4));
  return {
    patientWeightKg,
    volumeMl,
    concentrationMgMl,
    totalMassMg: Number(totalMassMg.toFixed(4)),
    doseMgKg,
    formula: `(${volumeMl} mL × ${concentrationMgMl} mg/mL) ÷ ${patientWeightKg} kg = ${doseMgKg} mg/kg`
  };
}

function calculateDeviation(args: { administeredVolumeMl: number; targetVolumeMl: number }) {
  const { administeredVolumeMl, targetVolumeMl } = args;
  if (!targetVolumeMl || targetVolumeMl <= 0) {
    return { error: 'O volume alvo deve ser maior que zero.' };
  }
  const diff = administeredVolumeMl - targetVolumeMl;
  const deviationPercentage = Number(((diff / targetVolumeMl) * 100).toFixed(2));
  const isSubdose = deviationPercentage < -5;
  const isOverdose = deviationPercentage > 5;
  const isSafe = !isSubdose && !isOverdose;

  let interpretation = 'Dose dentro da margem de segurança operacional (±5%).';
  if (isSubdose) {
    interpretation = `Subdose detectada: desvio de ${deviationPercentage}%. Risco de ineficácia terapêutica e seleção de resistência bacteriana se for antimicrobiano.`;
  } else if (isOverdose) {
    interpretation = `Sobredose detectada: desvio de +${deviationPercentage}%. Risco de intoxicação iatrogênica e sobrecarga renal/hepática aguda.`;
  }

  return {
    administeredVolumeMl,
    targetVolumeMl,
    deviationPercentage,
    isSafe,
    isSubdose,
    isOverdose,
    interpretation
  };
}

function getDrugInformation(args: { drugNameOrId: string }) {
  const query = (args.drugNameOrId || '').toLowerCase().trim();
  const matchedKey = Object.keys(PHARMACOLOGY_FACTS).find((key) => {
    const item = PHARMACOLOGY_FACTS[key];
    return key.toLowerCase().includes(query) || item.name.toLowerCase().includes(query);
  });

  if (matchedKey) {
    const drug = PHARMACOLOGY_FACTS[matchedKey];
    return {
      found: true,
      drug: {
        id: drug.id,
        name: drug.name,
        concentration: drug.concentrationString,
        concentrationMgMl: drug.concentrationMgMl,
        class: drug.class,
        indication: drug.primaryIndication,
        usualDose: drug.usualDoseSilvestres,
        contraindications: drug.contraindications,
        toxicityChain: drug.toxicityChain
      }
    };
  }

  return {
    found: false,
    message: `Medicamento '${args.drugNameOrId}' não catalogado no módulo atual de Farmacologia do MedZoo.`
  };
}

// ── ESQUEMA DE TOOLS PARA A OPENAI ──
const OPENAI_TOOLS = [
  {
    type: 'function',
    function: {
      name: 'calculateVolume',
      description: 'Calcula determinísticamente o volume (em mL) a ser aspirado na seringa a partir do peso do animal, dose prescrita e concentração do frasco.',
      parameters: {
        type: 'object',
        properties: {
          patientWeightKg: { type: 'number', description: 'Peso do paciente em quilogramas (kg).' },
          doseMgKg: { type: 'number', description: 'Dose terapêutica em mg por kg (mg/kg).' },
          concentrationMgMl: { type: 'number', description: 'Concentração da solução em mg por mL (mg/mL).' }
        },
        required: ['patientWeightKg', 'doseMgKg', 'concentrationMgMl'],
        additionalProperties: false
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'calculateDose',
      description: 'Calcula determinísticamente a dose efetiva (mg/kg) recebida a partir do volume aspirado, concentração e peso.',
      parameters: {
        type: 'object',
        properties: {
          patientWeightKg: { type: 'number', description: 'Peso do paciente em kg.' },
          volumeMl: { type: 'number', description: 'Volume aspirado/administrado em mL.' },
          concentrationMgMl: { type: 'number', description: 'Concentração do frasco em mg/mL.' }
        },
        required: ['patientWeightKg', 'volumeMl', 'concentrationMgMl'],
        additionalProperties: false
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'calculateDeviation',
      description: 'Calcula o desvio percentual entre um volume administrado e o volume alvo exato, classificando se houve subdose ou sobredose.',
      parameters: {
        type: 'object',
        properties: {
          administeredVolumeMl: { type: 'number', description: 'Volume que o aluno ou operador aspirou (mL).' },
          targetVolumeMl: { type: 'number', description: 'Volume alvo estritamente correto (mL).' }
        },
        required: ['administeredVolumeMl', 'targetVolumeMl'],
        additionalProperties: false
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'getDrugInformation',
      description: 'Obtém a ficha técnica canônica de um medicamento homologado no MedZoo (Meloxicam 0,2%, Meloxicam 2%, Enrofloxacina 5%, Atropina 1%).',
      parameters: {
        type: 'object',
        properties: {
          drugNameOrId: { type: 'string', description: 'Nome ou identificador do medicamento (ex: meloxicam, atropina, enrofloxacino).' }
        },
        required: ['drugNameOrId'],
        additionalProperties: false
      }
    }
  }
];

function executeLocalTool(name: string, args: any) {
  switch (name) {
    case 'calculateVolume':
      return calculateVolume(args);
    case 'calculateDose':
      return calculateDose(args);
    case 'calculateDeviation':
      return calculateDeviation(args);
    case 'getDrugInformation':
      return getDrugInformation(args);
    default:
      return { error: `Ferramenta desconhecida: ${name}` };
  }
}

// ── RETRIEVAL DE CHUNKS RAG ──
function retrieveRelevantChunks(query: string, conceptIds: string[] = []): string[] {
  const q = (query || '').toLowerCase();
  const matchedChunks: string[] = [];

  for (const chunk of KNOWLEDGE_CHUNKS) {
    const isKeywordMatch = chunk.keywords.some((kw) => q.includes(kw));
    const isConceptMatch = conceptIds.some((cid) => chunk.id.includes(cid.replace('concept_', '')));
    if (isKeywordMatch || isConceptMatch) {
      matchedChunks.push(`[${chunk.title}]: ${chunk.content}`);
    }
  }

  // Verificar se há menção a fármacos
  for (const [key, fact] of Object.entries(PHARMACOLOGY_FACTS)) {
    if (q.includes(key) || q.includes(fact.name.toLowerCase().split(' ')[0])) {
      matchedChunks.push(
        `[Ficha Farmacológica - ${fact.name}]: Concentração: ${fact.concentrationString}. Indicação: ${fact.primaryIndication} Dose usual: ${fact.usualDoseSilvestres}. Contraindicações: ${fact.contraindications}. Cadeia Causal de Toxicidade: Causa: ${fact.toxicityChain.cause} -> Mecanismo: ${fact.toxicityChain.mechanism} -> Efeito: ${fact.toxicityChain.effect} -> Significado Clínico: ${fact.toxicityChain.clinicalMeaning}`
      );
    }
  }

  if (matchedChunks.length === 0) {
    matchedChunks.push(`[Fórmula Canônica]: V = (P × D) ÷ C. Regra de conversão: % × 10 = mg/mL.`);
  }

  return matchedChunks;
}

// ── SYSTEM PROMPT DA DRA. MILLENA ──
function buildSystemPrompt(context: any, relevantChunks: string[]): string {
  const mode = context?.mode || 'teacher';
  return `Você é a Dra. Millena, Médica Veterinária Especialista em Animais Silvestres e Tutora Pedagógica Oficial do MedZoo.
Sua missão é ensinar farmacologia e medicina veterinária com rigor científico, empatia e método pedagógico ativo.

DIRETRIZES FUNDAMENTAIS:
1. PENSAMENTO SOCRÁTICO E CAUSAL:
   - Toda explicação de erro ou mecanismo DEVE seguir a cadeia causal: Causa -> Mecanismo -> Efeito -> Consequência Clínica no paciente.
   - Em modo "socratic", NUNCA dê a resposta mastigada. Faça uma pergunta que oriente o raciocínio do aluno sobre grandezas (Peso, Dose, Concentração).
   - Em modo "examiner", você NUNCA dá a resposta correta de uma avaliação. Apenas instrui o aluno a refletir sobre os dados disponíveis.
2. PRECISÃO MATEMÁTICA ABSOLUTA:
   - NUNCA faça cálculos de cabeça ou invente valores numéricos de doses.
   - SEMPRE use as ferramentas determinísticas disponíveis: 'calculateVolume', 'calculateDose', 'calculateDeviation', 'getDrugInformation'.
   - Se o aluno perguntar um volume ou cálculo, chame 'calculateVolume' primeiro e use o resultado verificado para responder.
3. LIMITES DE CONHECIMENTO CANÔNICO:
   - Se o aluno perguntar sobre um medicamento ou dado não presente na base canônica do MedZoo, declare educadamente que a informação não faz parte do módulo atual de Farmacologia. Não invente dosagens para animais reais sem validação.
4. ESTILO DE COMUNICAÇÃO:
   - Linguagem médica acessível, profissional, encorajadora e precisa.
   - Use formatação markdown limpa (negritos, listas e fórmulas claras).
   - Ao final, quando apropriado, sugira 2 perguntas curtas de continuidade.

MODO ATUAL: ${mode.toUpperCase()}
BASE DE CONHECIMENTO HOMOLOGADA DO MEDZOO:
${relevantChunks.map((c) => `- ${c}`).join('\n')}
`;
}

// ── HANDLER PRINCIPAL ──
export default async function handler(req: Request): Promise<Response> {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const { action, context = {}, question = '', level = 1, studentAnswer = '', history = [] } = body;

    const apiKey = (globalThis as any).Deno?.env?.get('OPENAI_API_KEY');
    const model = (globalThis as any).Deno?.env?.get('OPENAI_MODEL') || 'gpt-4o-mini';

    // RAG: Obter chunks relevantes
    const relevantChunks = retrieveRelevantChunks(question || studentAnswer, context.conceptIds || []);
    const systemPrompt = buildSystemPrompt(context, relevantChunks);

    // Se não houver chave OpenAI configurada, retornar resposta informativa estruturada
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          provider: 'fallback',
          message:
            'A chave OPENAI_API_KEY não está configurada na Supabase Edge Function. O MedZoo ativou o modo de contingência local com a base canônica homologada. Lembre-se: V = (Peso × Dose) ÷ Concentração.',
          mode: context.mode || 'teacher',
          isDirectAnswer: false,
          citedChunks: relevantChunks,
          toolCallsExecuted: []
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      );
    }

    // Montar histórico de mensagens para a OpenAI
    const openAiMessages: any[] = [
      { role: 'system', content: systemPrompt }
    ];

    // Incluir mensagens anteriores se houver
    if (Array.isArray(history) && history.length > 0) {
      for (const msg of history.slice(-6)) {
        if (msg.role === 'user' || msg.role === 'assistant') {
          openAiMessages.push({ role: msg.role, content: msg.content });
        }
      }
    }

    // Incluir input atual baseado na ação
    if (action === 'ask') {
      openAiMessages.push({ role: 'user', content: question });
    } else if (action === 'hint') {
      openAiMessages.push({
        role: 'user',
        content: `Preciso de uma dica de nível ${level} (1=leve, 2=direcionada, 3=passo a passo) para resolver este exercício de farmacologia. Não entregue a resposta pronta.`
      });
    } else if (action === 'evaluate') {
      openAiMessages.push({
        role: 'user',
        content: `Avalie pedagogicamente a seguinte resposta do aluno: "${studentAnswer}". Diga se está correta, aponte eventuais falhas na cadeia causal (Causa -> Mecanismo -> Efeito) e encoraje o progresso.`
      });
    }

    const toolCallsExecuted: any[] = [];

    // Chamada inicial à OpenAI com tools
    let openAiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: openAiMessages,
        tools: OPENAI_TOOLS,
        tool_choice: 'auto',
        temperature: 0.3
      })
    });

    if (!openAiRes.ok) {
      const errText = await openAiRes.text();
      console.error('[tutor-ai] Erro OpenAI:', errText);
      throw new Error(`OpenAI API erro ${openAiRes.status}: ${errText}`);
    }

    let completion = await openAiRes.json();
    let choice = completion.choices?.[0];
    let assistantMessage = choice?.message;

    // Loop de Tool Calling (suporta até 2 iterações de tools se a IA chamar)
    let iterations = 0;
    while (assistantMessage?.tool_calls && assistantMessage.tool_calls.length > 0 && iterations < 2) {
      iterations++;
      openAiMessages.push(assistantMessage);

      for (const toolCall of assistantMessage.tool_calls) {
        const functionName = toolCall.function.name;
        let functionArgs: any = {};
        try {
          functionArgs = JSON.parse(toolCall.function.arguments);
        } catch {
          functionArgs = {};
        }

        const toolResult = executeLocalTool(functionName, functionArgs);
        toolCallsExecuted.push({
          toolName: functionName,
          args: functionArgs,
          result: toolResult
        });

        openAiMessages.push({
          role: 'tool',
          tool_call_id: toolCall.id,
          content: JSON.stringify(toolResult)
        });
      }

      // Requisitar resposta final após envio dos resultados das tools
      const followUpRes = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model,
          messages: openAiMessages,
          temperature: 0.3
        })
      });

      if (!followUpRes.ok) {
        break;
      }

      completion = await followUpRes.json();
      choice = completion.choices?.[0];
      assistantMessage = choice?.message;
    }

    const finalReply = assistantMessage?.content || 'Olá! Como posso ajudar você no cálculo farmacológico agora?';

    // Extrair possíveis perguntas sugeridas
    const suggestedQuestions: string[] = [];
    if (finalReply.includes('1.') || finalReply.includes('?')) {
      const lines = finalReply.split('\n').filter((l: string) => l.trim().endsWith('?'));
      if (lines.length > 0) {
        suggestedQuestions.push(...lines.slice(0, 2).map((l: string) => l.replace(/^[-*0-9.)\s]+/, '').trim()));
      }
    }

    return new Response(
      JSON.stringify({
        provider: 'openai',
        message: finalReply,
        mode: context.mode || 'teacher',
        isDirectAnswer: context.mode !== 'socratic' && context.mode !== 'examiner',
        relevantConcepts: context.conceptIds || [],
        citedChunks: relevantChunks,
        toolCallsExecuted,
        suggestedQuestions: suggestedQuestions.length > 0 ? suggestedQuestions : undefined
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    );
  } catch (error: any) {
    console.error('[tutor-ai] Exceção na Edge Function:', error);
    return new Response(
      JSON.stringify({
        provider: 'fallback',
        error: error.message || 'Erro interno na Edge Function',
        message:
          'Dra. Millena está em contingência de rede local. Utilize a fórmula universal: V = (Peso × Dose) ÷ Concentração.'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    );
  }
}
