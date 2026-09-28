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
  },
  {
    id: 'physiology_vitals_triad',
    title: 'Tríade Vital Silvestre & Leis Alométricas',
    keywords: ['triade', 'tríade', 'vital', 'fc', 'fr', 'frequencia', 'frequência', 'bpm', 'temperatura', 'alométrica', 'kleiber'],
    content: 'Tríade Vital: Aves possuem FC normal de 250 a 400 bpm e temp de 40 a 41,5 °C (FC < 200 bpm é bradicardia crítica!). Répteis ectotérmicos têm FC de 15 a 40 bpm e suportam apneias longas. Mamíferos (Lobo-guará) têm FC de 70 a 140 bpm. Animais menores consomem proporcionalmente mais oxigênio e perdem calor rapidamente.'
  },
  {
    id: 'capture_myopathy',
    title: 'Fisiopatologia da Miopatia de Captura',
    keywords: ['miopatia', 'captura', 'estresse', 'rabdomiolise', 'rabdomiólise', 'mioglobina', 'urina marrom', 'lobo-guará', 'hipertermia'],
    content: 'Miopatia de Captura: Tempestade simpática por contenção forçada que gera glicólise anaeróbica exaustiva, acidose láctica extrema, hipertermia (> 41 °C) e lise de miócitos (rabdomiólise). A mioglobina liberada causa urina marrom-escura e necrose tubular renal anúrica com mortalidade > 80%.'
  },
  {
    id: 'cpr_recover_wildlife',
    title: 'Protocolo de RCP & Emergências Anestésicas',
    keywords: ['rcp', 'recover', 'reanimação', 'parada', 'pcr', 'apneia', 'bradicardia', 'isoflurano', 'atropina', 'adrenalina', 'epinefrina', 'doxapram'],
    content: 'Protocolo RECOVER Silvestre: 1. Cortar imediatamente o vaporizador de isoflurano (0%) e abrir O2 puro a 100%. 2. Ventilação manual com balão (IPPV) a cada 3-5s (pressão < 15 cmH2O em aves). 3. Atropina (0,02-0,04 mg/kg) para bradicardia severa; Epinefrina (0,01-0,02 mg/kg diluída 1:10.000) para assistolia/PCR; Doxapram (2-5 mg/kg) para estímulo de centro respiratório bulbar.'
  },
  {
    id: 'nutrition_bmr_mer_kleiber',
    title: 'Nutrição Silvestre: Lei de Kleiber e BMR/MER',
    keywords: ['nutricao', 'nutrição', 'kleiber', 'bmr', 'mer', 'caloria', 'alométrica', 'energia', 'metabolica', 'metabólica'],
    content: 'Taxa Metabólica Basal (BMR) = K × P^0,75 (kcal/dia). Constante K: Mamíferos Placentários ≈ 70; Aves Não-Passeriformes ≈ 78; Aves Passeriformes ≈ 129; Répteis a 30 °C ≈ 10. A Exigência de Manutenção (MER) = BMR × Fator de Atividade/Estresse (1,2 a 1,5 em cativeiro; 1,8 a 2,5 para filhotes em crescimento; 1,5 a 2,0 em sepse/trauma).'
  },
  {
    id: 'nutrition_cap_ratio_mbd',
    title: 'Balanço Mineral Ca:P e Prevenção de MBD',
    keywords: ['calcio', 'cálcio', 'fosforo', 'fósforo', 'ca:p', 'mbd', 'osteodistrofia', 'hiperparatireoidismo', 'casco', 'borracha', 'quelonio', 'quelônio', 'jabuti'],
    content: 'Relação Cálcio:Fósforo (Ca:P) Segura: O ideal na dieta de répteis e aves é de 1,5:1 a 2,0:1 (com exposição a UVB para síntese de vitamina D3). Relações invertidas (< 1,0:1, comuns em dietas de sementes, alface ou carne sem osso) causam hipocalcemia, hipersecreção crônica de PTH e reabsorção osteoclástica massiva, gerando a Doença Osteometabólica (MBD/osteodistrofia fibrosa e casco de borracha).'
  },
  {
    id: 'nutrition_psittacine_fatty_liver',
    title: 'Erros Nutricionais: Sementes de Girassol e Carne Desossada',
    keywords: ['girassol', 'semente', 'esteatose', 'lipidose', 'figado', 'fígado', 'arara', 'papagaio', 'psitacideo', 'psitacídeo', 'carne', 'osso', 'presa'],
    content: 'Sementes de Girassol possuem ~50% de gordura e relação Ca:P de 1:8. O consumo exclusivo causa Lipidose Hepática (Esteatose), carência de Vitamina A, bico distrófico e morte súbita. Em carnívoros selvagens, fornecer carne de primeira sem ossos fornece Ca:P de 1:20, provocando fraturas patológicas por raquitismo/MBD; a presa deve ser ingerida inteira ou suplementada com carbonato de cálcio.'
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

function getSpeciesVitals(args: { species: string }) {
  const s = (args.species || '').toLowerCase();
  if (s.includes('arara') || s.includes('psitac') || s.includes('tucano') || s.includes('ave')) {
    return {
      group: 'Aves Silvestres (Araras, Tucanos)',
      normalHR_bpm: '250 a 400',
      criticalBradycardiaThreshold: '< 200 bpm',
      normalRR_mpm: '20 a 40',
      normalSpO2_percent: '> 92%',
      targetTemp_C: '39.5 a 41.5',
      anestheticNotes: 'Alta taxa metabólica e propensão a hipotermia fulminante. Apneia sob isoflurano requer corte imediato e IPPV manual com pressão < 15 cmH2O.'
    };
  }
  if (s.includes('lobo') || s.includes('mamifero') || s.includes('tamandua') || s.includes('onca') || s.includes('macaco')) {
    return {
      group: 'Mamíferos Silvestres Neotropicais',
      normalHR_bpm: '70 a 140 (filhotes/primatas até 180)',
      criticalBradycardiaThreshold: '< 60 bpm',
      normalRR_mpm: '14 a 30',
      normalSpO2_percent: '> 94%',
      targetTemp_C: '37.5 a 39.0',
      anestheticNotes: 'Suscetíveis a Miopatia de Captura se contidos sob luta prolongada. Em caso de bradicardia sob anestesia, avaliar reflexo pupilar e profundidade.'
    };
  }
  if (s.includes('jabuti') || s.includes('reptil') || s.includes('tartaruga') || s.includes('jiboia')) {
    return {
      group: 'Répteis Ectotérmicos (Quelônios, Serpentes)',
      normalHR_bpm: '15 a 40 (temperatura-dependente)',
      criticalBradycardiaThreshold: '< 10 bpm',
      normalRR_mpm: '4 a 12 (toleram apneias fisiológicas prolongadas)',
      normalSpO2_percent: '> 85%',
      targetTemp_C: '28.0 a 32.0 (Faixa de Temperatura Ótima Preferida)',
      anestheticNotes: 'Coração tricameral com shunt intracardíaco direito-esquerdo. A recuperação anestésica pode levar horas se a temperatura estiver abaixo de 28 °C.'
    };
  }
  return {
    group: 'Fauna Silvestre Geral',
    normalHR_bpm: 'Consulte a classe taxonômica específica',
    normalSpO2_percent: '> 90%',
    warning: 'Aplicar a regra alométrica: animais menores possuem frequências cardíacas exponencialmente maiores.'
  };
}

function calculateEmergencyDose(args: { species?: string; patientWeightKg: number; drug: string }) {
  const { species = '', patientWeightKg, drug } = args;
  if (!patientWeightKg || patientWeightKg <= 0) {
    return { error: 'Peso do paciente inválido para cálculo de emergência.' };
  }

  const d = (drug || '').toLowerCase();
  if (d.includes('atropina')) {
    const doseMgKg = 0.04;
    const totalMassMg = Number((patientWeightKg * doseMgKg).toFixed(4));
    const isSmall = patientWeightKg < 2.0;
    const concentrationUsed = isSmall ? 1.0 : 10.0;
    const volumeMl = Number((totalMassMg / concentrationUsed).toFixed(4));
    return {
      drug: 'Sulfato de Atropina 1%',
      patientWeightKg,
      doseMgKg,
      totalMassMg,
      volumeMl,
      concentrationUsedMgMl: concentrationUsed,
      dilutionRecommended: isSmall ? 'Diluição 1:10 em Solução Fisiológica (resultando em 1,0 mg/mL)' : 'Puro 10 mg/mL',
      indication: 'Bradicardia sinusal severa por tônus vagal',
      administrationRoute: 'IV, IO ou IM profunda'
    };
  }

  if (d.includes('epinefrina') || d.includes('adrenalina')) {
    const doseMgKg = 0.015;
    const totalMassMg = Number((patientWeightKg * doseMgKg).toFixed(4));
    const concentrationUsed = 0.1;
    const volumeMl = Number((totalMassMg / concentrationUsed).toFixed(4));
    return {
      drug: 'Epinefrina (Adrenalina)',
      patientWeightKg,
      doseMgKg,
      totalMassMg,
      volumeMl,
      concentrationUsedMgMl: concentrationUsed,
      dilutionRecommended: 'Diluir 1 mL da ampola 1:1000 em 9 mL de salina para obter 1:10.000 (0,1 mg/mL)',
      indication: 'Parada Cardiorrespiratória (PCR), assistolia ou dissociação eletromecânica',
      administrationRoute: 'IV, IO ou intratraqueal'
    };
  }

  if (d.includes('doxapram')) {
    const doseMgKg = 3.0;
    const totalMassMg = Number((patientWeightKg * doseMgKg).toFixed(4));
    const concentrationUsed = 20.0;
    const volumeMl = Number((totalMassMg / concentrationUsed).toFixed(4));
    return {
      drug: 'Cloridrato de Doxapram (Dopram)',
      patientWeightKg,
      doseMgKg,
      totalMassMg,
      volumeMl,
      concentrationUsedMgMl: concentrationUsed,
      dilutionRecommended: 'Solução padrão 20 mg/mL',
      indication: 'Estimulação do drive respiratório em apneia induzida por halogenados',
      administrationRoute: 'IV lento ou sublingual'
    };
  }

  return { error: `Droga de emergência '${drug}' não reconhecida. Opções: atropina, epinefrina, doxapram.` };
}

function calculateCaPRatio(args: { calciumMg: number; phosphorusMg: number }) {
  const { calciumMg, phosphorusMg } = args;
  if (calciumMg < 0 || phosphorusMg < 0) {
    return { error: 'Valores de cálcio e fósforo não podem ser negativos.' };
  }
  if (!phosphorusMg || phosphorusMg <= 0) {
    return {
      calciumMg,
      phosphorusMg: 0,
      ratio: calciumMg > 0 ? 99 : 0,
      status: calciumMg > 0 ? 'excess_calcium' : 'zero_minerals',
      interpretation: 'Fósforo nulo ou ausente. A relação mineral não pode ser calculada sem fósforo.'
    };
  }
  const ratio = Number((calciumMg / phosphorusMg).toFixed(2));
  const isSevereRiskMbd = ratio < 1.0;
  const isSuboptimal = ratio >= 1.0 && ratio < 1.5;
  const isBalanced = ratio >= 1.5 && ratio <= 2.2;
  const isExcessCalcium = ratio > 2.2;

  let interpretation = 'Relação Ca:P balanceada (1,5:1 a 2,2:1). Ideal para mineralização esquelética e homeostase.';
  if (isSevereRiskMbd) {
    interpretation = `Risco crítico de Doença Osteometabólica (MBD / Casco de Borracha): Razão Ca:P invertida (${ratio}:1 < 1:1). Excesso de fósforo induz hiperparatireoidismo secundário e lise óssea.`;
  } else if (isSuboptimal) {
    interpretation = `Relação sub-ótima (${ratio}:1). Recomenda-se adicionar fontes de cálcio assimilável (couve ou carbonato de cálcio) para atingir no mínimo 1,5:1.`;
  } else if (isExcessCalcium) {
    interpretation = `Excesso de cálcio (${ratio}:1). Risco de sobrecarga de filtração renal e quelação de outros oligoelementos (zinco, ferro).`;
  }

  return {
    calciumMg,
    phosphorusMg,
    ratio,
    status: isBalanced ? 'balanced' : isSevereRiskMbd ? 'mbd_risk' : isSuboptimal ? 'suboptimal' : 'excess_calcium',
    interpretation,
    safeZone: '1.5:1 a 2.0:1'
  };
}

function calculateMetabolicRate(args: { speciesOrTaxa: string; weightKg: number; activityFactor?: number }) {
  const { speciesOrTaxa, weightKg, activityFactor = 1.3 } = args;
  if (!weightKg || weightKg <= 0) {
    return { error: 'Peso do paciente deve ser um número positivo em kg.' };
  }

  const s = (speciesOrTaxa || '').toLowerCase();
  let k = 70; // mamífero padrão
  let group = 'Mamífero Placentário';

  if (s.includes('passer') || s.includes('canario') || s.includes('trinca') || s.includes('sabia') || s.includes('beija-flor')) {
    k = 129;
    group = 'Ave Passeriforme / Pequeno Porte (Metabolismo Altíssimo)';
  } else if (s.includes('ave') || s.includes('arara') || s.includes('tucano') || s.includes('gaviao') || s.includes('papagaio') || s.includes('coruja')) {
    k = 78;
    group = 'Ave Não-Passeriforme';
  } else if (s.includes('reptil') || s.includes('jabuti') || s.includes('tartaruga') || s.includes('jiboia') || s.includes('lagarto') || s.includes('serpente')) {
    k = 10;
    group = 'Réptil Ectotérmico (a 30 °C)';
  } else if (s.includes('marsupial') || s.includes('gambá') || s.includes('gamba')) {
    k = 49;
    group = 'Marsupial Neotropical';
  }

  const bmrKcal = Number((k * Math.pow(weightKg, 0.75)).toFixed(2));
  const merKcal = Number((bmrKcal * activityFactor).toFixed(2));

  return {
    speciesOrTaxa,
    taxonomicGroup: group,
    weightKg,
    kleiberConstantK: k,
    activityFactor,
    bmrKcalPerDay: bmrKcal,
    merKcalPerDay: merKcal,
    formula: `BMR = ${k} × (${weightKg})^0.75 = ${bmrKcal} kcal/dia; MER = ${bmrKcal} × ${activityFactor} = ${merKcal} kcal/dia`
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
  },
  {
    type: 'function',
    function: {
      name: 'getSpeciesVitals',
      description: 'Consulta as faixas de referência de frequência cardíaca (FC), respiratória (FR), oximetria de pulso (SpO2) e temperatura corporal central para espécies silvestres (aves, répteis e mamíferos).',
      parameters: {
        type: 'object',
        properties: {
          species: { type: 'string', description: 'Nome da espécie ou grupo (ex: arara, jabuti, lobo-guará, macaco).' }
        },
        required: ['species'],
        additionalProperties: false
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'calculateEmergencyDose',
      description: 'Calcula determinísticamente a dose, volume e protocolo de diluição para drogas de emergência em animais silvestres (Atropina, Epinefrina 1:10.000 e Doxapram).',
      parameters: {
        type: 'object',
        properties: {
          species: { type: 'string', description: 'Espécie do paciente.' },
          patientWeightKg: { type: 'number', description: 'Peso do paciente em kg.' },
          drug: { type: 'string', description: 'Nome da droga de emergência: atropina, epinefrina ou doxapram.' }
        },
        required: ['patientWeightKg', 'drug'],
        additionalProperties: false
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'calculateCaPRatio',
      description: 'Calcula determinísticamente a relação Cálcio:Fósforo (Ca:P) de uma dieta a partir de miligramas de Cálcio e Fósforo, avaliando o risco de Doença Osteometabólica (MBD/casco de borracha).',
      parameters: {
        type: 'object',
        properties: {
          calciumMg: { type: 'number', description: 'Massa total de cálcio em miligramas (mg).' },
          phosphorusMg: { type: 'number', description: 'Massa total de fósforo em miligramas (mg).' }
        },
        required: ['calciumMg', 'phosphorusMg'],
        additionalProperties: false
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'calculateMetabolicRate',
      description: 'Calcula a Taxa Metabólica Basal (BMR) e Exigência de Manutenção (MER) em kcal/dia pela Equação de Kleiber para animais silvestres (aves, répteis, mamíferos).',
      parameters: {
        type: 'object',
        properties: {
          speciesOrTaxa: { type: 'string', description: 'Espécie ou grupo taxonômico do paciente (ex: arara, jabuti, lobo-guará, canário, tamanduá).' },
          weightKg: { type: 'number', description: 'Peso corporal do paciente em quilogramas (kg).' },
          activityFactor: { type: 'number', description: 'Fator multiplicador de atividade/estresse (padrão: 1.3 para cativeiro calmo; 1.8-2.5 para filhotes).' }
        },
        required: ['speciesOrTaxa', 'weightKg'],
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
    case 'getSpeciesVitals':
      return getSpeciesVitals(args);
    case 'calculateEmergencyDose':
      return calculateEmergencyDose(args);
    case 'calculateCaPRatio':
      return calculateCaPRatio(args);
    case 'calculateMetabolicRate':
      return calculateMetabolicRate(args);
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
   - Em modo "socratic", NUNCA dê a resposta mastigada. Faça uma pergunta que oriente o raciocínio do aluno sobre grandezas (Peso, Dose, Concentração, Parâmetros Vitais).
   - Em modo "examiner", você NUNCA dá a resposta correta de uma avaliação. Apenas instrui o aluno a refletir sobre os dados disponíveis.
2. PRECISÃO MATEMÁTICA E PROTOCOLOS DE EMERGÊNCIA:
   - NUNCA faça cálculos de cabeça ou invente valores numéricos de doses.
   - SEMPRE use as ferramentas determinísticas disponíveis: 'calculateVolume', 'calculateDose', 'calculateDeviation', 'getDrugInformation', 'getSpeciesVitals', 'calculateEmergencyDose', 'calculateCaPRatio', 'calculateMetabolicRate'.
   - Se o aluno perguntar sobre parâmetros normais de uma espécie, chame 'getSpeciesVitals'.
   - Se for uma emergência (apneia, PCR, bradicardia), chame 'calculateEmergencyDose' para indicar a diluição rigorosa.
   - Se a questão envolver balanceamento de dieta, cálcio, fósforo ou MBD, use 'calculateCaPRatio'.
   - Se a questão envolver energia diária, calorias, filhotes ou taxa metabólica basal, use 'calculateMetabolicRate'.
3. LIMITES DE CONHECIMENTO CANÔNICO:
   - Se o aluno perguntar sobre um medicamento ou dado não presente na base canônica do MedZoo, declare educadamente que a informação não faz parte do módulo atual. Não invente dosagens para animais reais sem validação.
4. ESTILO DE COMUNICAÇÃO:
   - Linguagem médica acessível, profissional, encorajadora e precisa.
   - Use formatação markdown limpa (negritos, listas e fórmulas claras).
   - Ao final, quando apropriado, sugira 2 perguntas curtas de continuidade.

MODO ATUAL: ${mode.toUpperCase()}
${context?.telemetry ? `TELEMETRIA DO MONITOR ANESTÉSICO EM TEMPO REAL:
- FC / HR: ${context.telemetry.hr} bpm
- SpO2: ${context.telemetry.spo2}%
- FR / RR: ${context.telemetry.rr} mpm
- Temperatura: ${context.telemetry.temp} °C
- Vaporizador Isoflurano: ${context.telemetry.isoflurane}%
` : ''}
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
    const messagesInput = Array.isArray(body.messages) ? body.messages : [];
    const lastUserMessage = messagesInput.slice().reverse().find((m: any) => m.role === 'user')?.content || '';
    const {
      action = (body.action || (lastUserMessage ? 'ask' : undefined)),
      context = {},
      question = body.question || lastUserMessage || '',
      level = 1,
      studentAnswer = '',
      history = body.history || (messagesInput.length > 1 ? messagesInput.slice(0, -1) : [])
    } = body;

    const apiKey = (globalThis as any).Deno?.env?.get('GROQ_API_KEY') || (globalThis as any).Deno?.env?.get('OPENAI_API_KEY');
    const isGroq = apiKey?.startsWith('gsk_') || Boolean((globalThis as any).Deno?.env?.get('GROQ_API_KEY'));
    const defaultModel = isGroq ? 'openai/gpt-oss-120b' : 'gpt-4o-mini';
    const model = (globalThis as any).Deno?.env?.get('GROQ_MODEL') || (globalThis as any).Deno?.env?.get('OPENAI_MODEL') || defaultModel;
    const defaultBaseUrl = isGroq ? 'https://api.groq.com/openai/v1' : 'https://api.openai.com/v1';
    const baseUrl = (globalThis as any).Deno?.env?.get('AI_BASE_URL') || defaultBaseUrl;
    const providerName: 'groq' | 'openai' = isGroq ? 'groq' : 'openai';

    // RAG: Obter chunks relevantes
    const relevantChunks = retrieveRelevantChunks(question || studentAnswer, context.conceptIds || []);
    const systemPrompt = buildSystemPrompt(context, relevantChunks);

    // Se não houver chave configurada, retornar resposta informativa estruturada
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          provider: 'fallback',
          message:
            'Nenhuma chave de IA (GROQ_API_KEY ou OPENAI_API_KEY) está configurada na Supabase Edge Function. O MedZoo ativou o modo de contingência local com a base canônica homologada. Lembre-se: V = (Peso × Dose) ÷ Concentração.',
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

    // Chamada inicial à IA com tools
    let openAiRes = await fetch(`${baseUrl}/chat/completions`, {
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
      console.error('[tutor-ai] Erro Provedor IA:', errText);
      throw new Error(`API de IA erro ${openAiRes.status}: ${errText}`);
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
      const followUpRes = await fetch(`${baseUrl}/chat/completions`, {
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
        provider: providerName,
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

declare const Deno: any;
if (typeof Deno !== 'undefined' && typeof Deno.serve === 'function') {
  Deno.serve(handler);
}

