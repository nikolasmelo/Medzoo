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
  },
  {
    id: 'agrostology_bromatology_fibers',
    title: 'Bromatologia Forrageira: FDN, FDA e Digestibilidade',
    keywords: ['forragem', 'agrostologia', 'feno', 'fdn', 'fda', 'fibra', 'celulose', 'lignina', 'anta', 'capivara', 'ruminante'],
    content: 'Frações Bromatológicas Van Soest: FDN (Fibra em Detergente Neutro = Hemicelulose + Celulose + Lignina) mede a parede celular vegetal e regula a saciedade física / consumo voluntário de matéria seca. FDA (Fibra em Detergente Ácido = Celulose + Lignina) mede a fração de difícil digestão; quanto maior o FDA, menor a energia digestível. Herbívoros silvestres monogástricos cecocólicos (Anta, Capivara) necessitam de FDN entre 55% e 65% para manter o tônus motor e evitar timpanismo por sobrecarga de carboidratos solúveis.'
  },
  {
    id: 'agrostology_toxic_pastures',
    title: 'Toxicologia de Pastagens: Esporidesmina, Cianeto e Fotossensibilização',
    keywords: ['brachiaria', 'pithomyces', 'esporidesmina', 'fotossensibilizacao', 'fotossensibilização', 'filoeritrina', 'sorgo', 'cianeto', 'hcn', 'nitrato', 'nitrito', 'toxica', 'tóxica'],
    content: 'Plantas Tóxicas em Pastagens: 1. Brachiaria decumbens + Pithomyces chartarum (esporidesmina): causa colangioepatite e colestase; a filoeritrina (metabólito da clorofila) acumula-se no sangue e causa dermatite necrosante fotodinâmica e icterícia ao sol. 2. Sorgo jovem (Sorghum bicolor < 40 cm): contém dhurrina que libera Ácido Cianídrico (HCN), inibindo a citocromo c oxidase mitocondrial; asfixia histotóxica fulminante com sangue venoso vermelho-cereja vivo. 3. Nitratos/Nitritos: formam meta-hemoglobina gerando sangue cor de chocolate.'
  },
  {
    id: 'agrostology_mycotoxins_hay',
    title: 'Manejo de Feno e Micotoxinas (Aflatoxinas)',
    keywords: ['aflatoxina', 'aspergillus', 'mofo', 'feno', 'umidade', 'micotoxina', 'hepatotoxico', 'hepatotóxico'],
    content: 'Controle de Feno em Zoológicos: Umidade máxima permitida < 15%. Fardos armazenados com umidade elevada (> 18%) sofrem aquecimento e proliferação de Aspergillus flavus e Aspergillus parasiticus, sintetizadores de Aflatoxinas B1, B2, G1 e G2. Aflatoxina B1 é um potente hepatotóxico e hepatocarcinógeno, causando necrose centrolobular, falência hepática, imunossupressão e coagulopatias hemorrágicas graves.'
  },
  {
    id: 'cardiology_wild_ecg_morphology',
    title: 'Morfologia Eletrocardiográfica Comparada (Aves, Répteis, Mamíferos)',
    keywords: ['cardio', 'ecg', 'eletrocardiograma', 'onda r', 'onda s', 'rs', 'qs', 'purkinje', 'tipo b', 'tipo a', 'ave', 'arara', 'reptil', 'quelonio', 'dii'],
    content: 'Morfologia ECG Comparada: 1. Aves e ungulados silvestres possuem sistema Purkinje Tipo B (ramificação transmural profunda simultânea). O vetor elétrico ventricular médio é apicobasilar (cranial e para a direita), gerando complexo rS ou QS predominantemente NEGATIVO em Derivação II (DII) — padrão 100% normal e fisiológico. 2. Carnívoros mamíferos (Lobo-guará, Onça) possuem Tipo A (despolarização endocárdio -> epicárdio), gerando complexo QRS positivo (onda R alta em DII). 3. Répteis possuem corações tricavitários com três cavidades comunicantes e shunt intracardíaco regulável por pressões vasculares, com FC normal baixa (15 a 45 bpm a 30 °C) e longos intervalos PR e QT.'
  },
  {
    id: 'cardiology_arrhythmias_wildlife',
    title: 'Arritmias Cardíacas e Condução AV na Fauna',
    keywords: ['arritmia', 'fibrilacao', 'fibrilação', 'fa', 'bav', 'bloqueio', 'mobitz', 'dissociacao', 'dissociação', 'taquicardia', 'ventricular', 'tv', 'deficit de pulso', 'déficit de pulso', 'wenckebach'],
    content: 'Arritmias Clínicas em Animais Silvestres: 1. Fibrilação Atrial (FA): ausência de ondas P, presença de ondas "f" caóticas, intervalos R-R marcadamente irregulares e déficit de pulso femoral (perda do kick atrial mecânico que responde por 25-30% do enchimento ventricular). 2. BAV de 1º grau: prolongamento fixo do PR sem perda de QRS. 3. BAV de 2º grau: Mobitz I (Wenckebach) com PR que alonga progressivamente até falhar QRS; Mobitz II com PR fixo antes do bloqueio súbito de P. 4. BAV de 3º grau: dissociação AV completa onde átrios e ventrículos batem independentemente com escape idioventricular bradicárdico e síncope. 5. Taquicardia Ventricular (TV): salvas de complexos aberrantes largos (> 200 bpm), emergência crítica com risco de fibrilação ventricular.'
  },
  {
    id: 'cardiology_heart_failure_inodilators',
    title: 'ICC, Cardiomiopatia Dilatada e Farmacoterapia (Pimobendan, Enalapril, Furosemida)',
    keywords: ['insuficiencia', 'insuficiência', 'cardiomiopatia', 'cmd', 'icc', 'pimobendan', 'inodilatador', 'enalapril', 'benazepril', 'furosemida', 'digoxina', 'edema pulmonar', 'inotrópico'],
    content: 'Tratamento da Insuficiência Cardíaca Congestiva (ICC) e CMD: 1. Pimobendan (0,2 a 0,3 mg/kg VO BID): inodilatador de escolha. Duplo mecanismo: sensibilizador da troponina C ao cálcio (aumenta contratilidade sistólica sem elevar cálcio livre citosólico, consumo de ATP ou arritmias, superando a Digoxina) + inibidor da PDE-III (promove vasodilatação periférica reduzindo pré e pós-carga). 2. Inibidores da ECA (Enalapril 0,5 mg/kg VO BID): bloqueiam a enzima conversora de angiotensina, mitigando o remodelamento cardíaco e vasoconstrição do SRAA. 3. Furosemida (1 a 4 mg/kg IV/IM/VO): diurético de alça inibidor do co-transportador Na+/K+/2Cl- para rápida redução da congestão pulmonar.'
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

function getForageProfile(args: { forageNameOrScientific: string }) {
  const q = (args.forageNameOrScientific || '').toLowerCase().trim();
  if (q.includes('tifton') || q.includes('cynodon') || q.includes('bermuda')) {
    return {
      name: 'Feno de Tifton 85 (Cynodon dactylon)',
      family: 'Poaceae (Gramínea)',
      crudeProteinPercent: 14.5,
      ndfPercent: 64.0,
      adfPercent: 31.0,
      safetyStatus: 'Seguro / Homologado',
      recommendation: 'Excelente para herbívoros silvestres e megafauna (Anta, Cervídeos, Capivara). FDN ideal para motilidade digestiva sem risco fermentativo.'
    };
  }
  if (q.includes('brachiaria') || q.includes('braquiaria') || q.includes('decumbens') || q.includes('brizantha')) {
    return {
      name: 'Brachiaria decumbens / Brizantha',
      family: 'Poaceae (Gramínea)',
      crudeProteinPercent: 5.5,
      ndfPercent: 73.0,
      adfPercent: 44.0,
      safetyStatus: 'Alto Risco Toxicológico em Pastagens Degradadas',
      toxicRisks: 'Esporidesmina (Pithomyces chartarum) e Saponinas Protodioscinas. Provoca colangite intra-hepática e fotossensibilização hepatógena por retenção de filoeritrina em áreas expostas ao sol.',
      recommendation: 'Evitar pastagem de Brachiaria pura para cervídeos neotropicais e capivaras, principalmente durante e logo após estações chuvosas com palha acumulada.'
    };
  }
  if (q.includes('sorgo') || q.includes('sorghum')) {
    return {
      name: 'Sorgo Forrageiro Jovem (Sorghum bicolor)',
      family: 'Poaceae (Gramínea)',
      crudeProteinPercent: 16.0,
      ndfPercent: 52.0,
      adfPercent: 26.0,
      safetyStatus: 'Perigo Letal Iminente (em brotos < 40 cm ou pós-seca)',
      toxicRisks: 'Glicosídeo cianogênico dhurrina que hidrolisa em Ácido Cianídrico (HCN). Inibe a respiração mitocondrial com sangue venoso vermelho-cereja vivo e asfixia histotóxica.',
      recommendation: 'PROIBIDO fornecer brotos tenros jovens de sorgo para animais silvestres. A forragem só deve ser utilizada após corte, murchamento e altura superior a 80 cm, ou ensilada.'
    };
  }
  if (q.includes('alfafa') || q.includes('medicago')) {
    return {
      name: 'Feno de Alfafa Nobre (Medicago sativa)',
      family: 'Fabaceae (Leguminosa)',
      crudeProteinPercent: 21.0,
      ndfPercent: 41.0,
      adfPercent: 28.0,
      calciumPercent: 1.4,
      safetyStatus: 'Seguro / Nobre',
      recommendation: 'Rico em proteína e cálcio. Deve ser dosado com cuidado para não causar ganho de peso excessivo ou timpanismo espumoso se oferecido verde em excesso.'
    };
  }
  return {
    forageNameOrScientific: args.forageNameOrScientific,
    message: 'Forrageira consultada não listada na base rápida. Avaliar FDN (> 55% e < 70%), FDA (< 35%), ausência de mofo (umidade < 15%) e ausência de conídios fúngicos.'
  };
}

function checkPastureToxicity(args: { plantOrFeed: string; clinicalSigns?: string }) {
  const p = (args.plantOrFeed || '').toLowerCase();
  const s = (args.clinicalSigns || '').toLowerCase();

  if (p.includes('brachiaria') || p.includes('braquiaria') || s.includes('fotossensibiliz') || s.includes('sol') || s.includes('icteric') || s.includes('orelha')) {
    return {
      suspectedDiagnosis: 'Fotossensibilização Hepatógena Secundária por Esporidesmina (Pithomyces chartarum) e Saponinas da Brachiaria',
      mechanism: 'Colangite intra-hepática necrosante -> Bloqueio de excreção biliar de filoeritrina -> Filoeritrina circulante ativada por radiação UV solar -> Necrose cutânea e dermatite exsudativa',
      criticalActions: [
        '1. Retirar imediatamente todos os animais afetados para abrigo com SOMBRA TOTAL (bloquear 100% de luz solar direta)',
        '2. Trocar imediatamente a forragem de Brachiaria por feno salubre de gramínea nobre (Tifton ou Coastcross)',
        '3. Terapia de suporte: fluido isotônica, protetor hepático (silimarina/SAMe) e anti-inflamatório (meloxicam)'
      ],
      pathognomonicSign: 'Icterícia associada a lesões necróticas restritas a áreas despigmentadas e expostas ao sol'
    };
  }

  if (p.includes('sorgo') || p.includes('sorghum') || s.includes('vermelho-cereja') || s.includes('cereja') || s.includes('convuls') || s.includes('cianeto')) {
    return {
      suspectedDiagnosis: 'Intoxicação Hiperaguda por Ácido Cianídrico (HCN / Dhurrina)',
      mechanism: 'Bloqueio do complexo IV (citocromo c oxidase) da cadeia respiratória mitocondrial -> Células não conseguem captar O2 -> Anóxia histotóxica fulminante',
      criticalActions: [
        '1. Emergência médica veterinária: administrar imediatamente Nitrito de Sódio (10 a 20 mg/kg IV lento) para induzir meta-hemoglobina que sequestra o cianeto',
        '2. Seguido de Tiossulfato de Sódio 20% (300 a 500 mg/kg IV) para converter o cianeto em tiocianato atóxico excretado pelos rins',
        '3. Ventilação assistida com oxigênio a 100%'
      ],
      pathognomonicSign: 'Sangue venoso vermelho-cereja brilhante com asfixia respiratória grave'
    };
  }

  if (p.includes('mofo') || p.includes('aspergillus') || p.includes('aflatoxina') || s.includes('bolor')) {
    return {
      suspectedDiagnosis: 'Aflatoxicose Alimentar por Feno Mofado (Aspergillus flavus)',
      mechanism: 'Aflatoxina B1 metabolizada em epóxido hepatotóxico -> Inibição de RNA polimerase e síntese proteica -> Necrose hepática aguda e esteatose',
      criticalActions: [
        '1. Interditar e descartar imediatamente todo o lote de feno úmido/mofado',
        '2. Fornecer adsorventes de micotoxinas (carvão ativado ou glucomananos esterificados) na dieta',
        '3. Monitorar enzimas hepáticas (ALT, AST, GGT) e tempo de protrombina (TP)'
      ],
      pathognomonicSign: 'Fluorescência esverdeada sob lâmpada de Wood (365 nm) e necrose centrolobular'
    };
  }

  return {
    plantOrFeed: args.plantOrFeed,
    clinicalSigns: args.clinicalSigns,
    differentialAssessment: 'Sintomatologia inespecífica. Considerar exames de função hepática (GGT, FA, Bilirrubinas), dosagem de meta-hemoglobina e análise microscópica da forragem.'
  };
}

function analyzeECGIntervals(args: {
  bpm: number;
  prSec?: number;
  qrsSec?: number;
  lead?: string;
  species?: string;
}) {
  const { bpm, prSec, qrsSec, lead = 'DII', species = 'Fauna Silvestre' } = args;
  if (!bpm || bpm <= 0) {
    return { error: 'Frequência cardíaca (bpm) deve ser informada e maior que zero.' };
  }

  const s = species.toLowerCase();
  let rateAssessment = 'Frequência dentro dos padrões fisiológicos esperados.';
  let isTachycardia = false;
  let isBradycardia = false;

  if (s.includes('ave') || s.includes('arara') || s.includes('tucano') || s.includes('papagaio')) {
    if (bpm < 200) { isBradycardia = true; rateAssessment = 'Bradicardia crítica para ave (< 200 bpm). Risco de PCR!'; }
    else if (bpm > 450) { isTachycardia = true; rateAssessment = 'Taquicardia extrema (> 450 bpm). Investigar estresse de contenção ou choque.'; }
    else { rateAssessment = 'Frequência sinusal fisiológica para ave (200-450 bpm).'; }
  } else if (s.includes('reptil') || s.includes('jabuti') || s.includes('tartaruga') || s.includes('jiboia')) {
    if (bpm < 12) { isBradycardia = true; rateAssessment = 'Bradicardia severa / hipotermia para réptil (< 12 bpm a 25-30 °C).'; }
    else if (bpm > 60) { isTachycardia = true; rateAssessment = 'Taquicardia para réptil (> 60 bpm). Investigar hipertermia ou dor.'; }
    else { rateAssessment = 'Frequência sinusal basal normal para réptil ectotérmico (15-45 bpm).'; }
  } else {
    // Mamífero carnívoro médio/grande (Lobo-guará, Onça)
    if (bpm < 60) { isBradycardia = true; rateAssessment = 'Bradicardia (< 60 bpm). Avaliar bloqueio AV ou tônus vagal.'; }
    else if (bpm > 160) { isTachycardia = true; rateAssessment = 'Taquicardia (> 160 bpm). Investigar dor, sepse, FA ou taquiarritmia ventricular.'; }
    else { rateAssessment = 'Frequência cardíaca dentro da faixa de referência para mamífero carnívoro (60-140 bpm).'; }
  }

  const findings: string[] = [];
  if (prSec !== undefined && prSec !== null) {
    if (prSec > 0.13) {
      findings.push(`Intervalo PR prolongado (${(prSec * 1000).toFixed(0)} ms > 130 ms): Bloqueio Atrioventricular (BAV) de 1º Grau ou atraso de condução nodal.`);
    } else if (prSec === 0) {
      findings.push('Intervalo PR ausente ou não mensurável: Fibrilação Atrial, Taquicardia Ventricular ou dissociação AV.');
    } else {
      findings.push(`Intervalo PR normal (${(prSec * 1000).toFixed(0)} ms).`);
    }
  }

  if (qrsSec !== undefined && qrsSec !== null) {
    if (qrsSec > 0.07) {
      findings.push(`Complexo QRS alargado (${(qrsSec * 1000).toFixed(0)} ms > 70 ms): Despolarização ectópica ventricular (TV), bloqueio de ramo ou CMD severa.`);
    } else {
      findings.push(`Complexo QRS estreito e síncrono (${(qrsSec * 1000).toFixed(0)} ms).`);
    }
  }

  let morphologyNote = 'Condução Purkinje Tipo A com despolarização endocárdio -> epicárdio.';
  if (s.includes('ave') || s.includes('arara') || s.includes('tucano')) {
    morphologyNote = 'Condução Purkinje Tipo B: ativação transmural profunda simultânea. Complexo rS ou QS profundamente negativo em DII é 100% fisiológico em aves.';
  } else if (s.includes('reptil') || s.includes('jabuti')) {
    morphologyNote = 'Coração tricavitário com ventrículo funcionalmente único e septação incompleta. Shunt intracardíaco regulado hemodinamicamente.';
  }

  return {
    species,
    lead,
    bpm,
    rateAssessment,
    isBradycardia,
    isTachycardia,
    morphologyNote,
    findings,
    clinicalImpression: findings.join(' ') + ' ' + rateAssessment
  };
}

function getCardiacDrugInfo(args: { drugName: string }) {
  const d = (args.drugName || '').toLowerCase().trim();

  if (d.includes('pimo') || d.includes('pimobendan') || d.includes('vetmedin')) {
    return {
      drug: 'Pimobendan (Vetmedin)',
      pharmacologicalClass: 'Inodilatador (Sensibilizador de Cálcio + Inibidor de PDE-III)',
      mechanismOfAction: '1. Aumenta a afinidade da Troponina C pelo cálcio miocárdico, promovendo inotropismo positivo potente sem elevar cálcio livre citosólico, sem consumo excessivo de ATP e sem o risco arritmogênico fatal da digoxina. 2. Inibe a fosfodiesterase III vascular, preservando AMPc e promovendo vasodilatação balanceada arteríolo-venosa (redução de pré e pós-carga).',
      primaryIndications: 'Cardiomiopatia Dilatada (CMD) e Insuficiência Cardíaca Congestiva (ICC) estágios B2, C e D em canídeos e felídeos silvestres.',
      doseSilvestres: '0,25 mg/kg (faixa 0,2 a 0,3 mg/kg) VO a cada 12 horas (BID), administrado 1 hora antes da refeição para absorção ótima.',
      precautions: 'Contraindicado em casos de estenose aórtica anatômica ou cardiomiopatia hipertrófica obstrutiva.',
      clinicalSuperiority: 'Muito superior aos digitálicos tradicionais (Digoxina), pois não esgota a bioenergética mitocondrial nem induz fibrilação ventricular.'
    };
  }

  if (d.includes('enala') || d.includes('enalapril') || d.includes('bena') || d.includes('benazepril')) {
    return {
      drug: 'Maleato de Enalapril / Cloridrato de Benazepril',
      pharmacologicalClass: 'Inibidor da Enzima Conversora de Angiotensina (IECA)',
      mechanismOfAction: 'Bloqueia a síntese de Angiotensina II, inibindo a vasoconstrição periférica e a secreção de aldosterona no SRAA. Mitiga o remodelamento miocárdico fibrótico crônico.',
      primaryIndications: 'Insuficiência cardíaca congestiva, hipertensão arterial sistêmica e nefropatia com proteinúria.',
      doseSilvestres: '0,5 mg/kg VO a cada 12 ou 24 horas (monitorando função renal).',
      precautions: 'Monitorar creatinina sérica e eletrólitos; risco de hipotensão e piora da taxa de filtração se associado a hipovolemia por diuréticos.'
    };
  }

  if (d.includes('furo') || d.includes('furosemida') || d.includes('lasix')) {
    return {
      drug: 'Furosemida (Lasix)',
      pharmacologicalClass: 'Diurético de Alça de Alta Potência',
      mechanismOfAction: 'Inibe seletivamente o co-transportador Na+/K+/2Cl- no ramo ascendente espesso da alça de Henle. Promove rápida venodilatação pulmonar reflexa pré-diurese.',
      primaryIndications: 'Edema agudo de pulmão cardiogênico, efusão pleural e ascite por ICC descompensada.',
      doseSilvestres: 'Crise aguda de edema: 2 a 4 mg/kg IV ou IM a cada 2-4 horas até remissão da dispneia; Manutenção: 1 a 2 mg/kg VO BID.',
      precautions: 'Risco de desidratação, hipocalemia (que agrava arritmias) e azotemia pré-renal.'
    };
  }

  if (d.includes('lido') || d.includes('lidocaina') || d.includes('lidocaína') || d.includes('xylocaina')) {
    return {
      drug: 'Cloridrato de Lidocaína sem vasoconstritor (1% ou 2%)',
      pharmacologicalClass: 'Antiarrítmico Classe Ib (Bloqueador de Canais de Sódio)',
      mechanismOfAction: 'Bloqueia os canais rápidos de sódio dependentes de voltagem no miocárdio ventricular. Suprime focos ectópicos de automatismo anormal e reentrada.',
      primaryIndications: 'Tratamento de emergência de Taquicardia Ventricular (TV) monomórfica e salvas de extrassístoles ventriculares (CVPs) malignas.',
      doseSilvestres: 'Canídeos silvestres: bolus lento de 2 mg/kg IV (até 6-8 mg/kg cumulativo) seguido de infusão contínua CRI (25-50 mcg/kg/min). CUIDADO EXTREMO em felídeos: dose máxima não deve exceder 0,25-0,5 mg/kg IV lento sob risco de convulsão.',
      precautions: 'Contraindicado em BAV total ou ritmo de escape idioventricular protetor.'
    };
  }

  return {
    drugName: args.drugName,
    message: 'Fármaco cardiovascular não listado na triagem rápida. Principais opções disponíveis: Pimobendan, Enalapril, Furosemida, Lidocaína.'
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
  },
  {
    type: 'function',
    function: {
      name: 'getForageProfile',
      description: 'Consulta os dados bromatológicos canônicos (PB %, FDN %, FDA %), perfil nutricional e segurança de uma forrageira (Tifton, Brachiaria, Sorgo, Alfafa) para herbívoros silvestres.',
      parameters: {
        type: 'object',
        properties: {
          forageNameOrScientific: { type: 'string', description: 'Nome comum ou científico da forrageira (ex: tifton, brachiaria, sorgo, alfafa, cynodon).' }
        },
        required: ['forageNameOrScientific'],
        additionalProperties: false
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'checkPastureToxicity',
      description: 'Avalia determinísticamente a toxicologia de pastagens, diagnosticando fotossensibilização por esporidesmina/Brachiaria, asfixia histotóxica por cianeto/sorgo ou aflatoxinas de feno mofado.',
      parameters: {
        type: 'object',
        properties: {
          plantOrFeed: { type: 'string', description: 'Nome da planta, feno ou forragem suspeita.' },
          clinicalSigns: { type: 'string', description: 'Sinais clínicos observados no herbívoro (ex: icterícia, sol, lesão na orelha, sangue vermelho-cereja, mofo).' }
        },
        required: ['plantOrFeed'],
        additionalProperties: false
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'analyzeECGIntervals',
      description: 'Analisa traçados eletrocardiográficos comparados (frequência cardíaca bpm, intervalos PR e QRS, derivação e espécie), diagnosticando particularidades fisiológicas aviárias (Tipo B/rS profundo), répteis ou arritmias patológicas (FA, BAV 1/2/3, TV).',
      parameters: {
        type: 'object',
        properties: {
          bpm: { type: 'number', description: 'Frequência cardíaca observada no ECG em batimentos por minuto (bpm).' },
          prSec: { type: 'number', description: 'Duração do intervalo PR em segundos (ex: 0.11 para 110 ms; 0 se ausente/fibrilação).' },
          qrsSec: { type: 'number', description: 'Duração do complexo QRS em segundos (ex: 0.05 para 50 ms; > 0.07 indica alargamento).' },
          lead: { type: 'string', description: 'Derivação analisada (ex: DII / Derivação II).' },
          species: { type: 'string', description: 'Espécie ou grupo taxonômico do animal (ex: Lobo-guará, Arara-canindé, Onça-pintada, Jabuti).' }
        },
        required: ['bpm'],
        additionalProperties: false
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'getCardiacDrugInfo',
      description: 'Consulta diretrizes farmacológicas completas de drogas cardiovasculares de uso em fauna silvestre: Pimobendan (inodilatador), Enalapril (IECA), Furosemida (diurético) e Lidocaína (antiarrítmico).',
      parameters: {
        type: 'object',
        properties: {
          drugName: { type: 'string', description: 'Nome do fármaco cardíaco (ex: pimobendan, enalapril, furosemida, lidocaína).' }
        },
        required: ['drugName'],
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
    case 'getForageProfile':
      return getForageProfile(args);
    case 'checkPastureToxicity':
      return checkPastureToxicity(args);
    case 'analyzeECGIntervals':
      return analyzeECGIntervals(args);
    case 'getCardiacDrugInfo':
      return getCardiacDrugInfo(args);
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
   - SEMPRE use as ferramentas determinísticas disponíveis: 'calculateVolume', 'calculateDose', 'calculateDeviation', 'getDrugInformation', 'getSpeciesVitals', 'calculateEmergencyDose', 'calculateCaPRatio', 'calculateMetabolicRate', 'getForageProfile', 'checkPastureToxicity'.
   - Se o aluno perguntar sobre parâmetros normais de uma espécie, chame 'getSpeciesVitals'.
   - Se for uma emergência (apneia, PCR, bradicardia), chame 'calculateEmergencyDose' para indicar a diluição rigorosa.
   - Se a questão envolver balanceamento de dieta, cálcio, fósforo ou MBD, use 'calculateCaPRatio'.
   - Se a questão envolver energia diária, calorias, filhotes ou taxa metabólica basal, use 'calculateMetabolicRate'.
   - Se a questão envolver forragens, FDN, FDA, pastagens ou feno (Tifton, Brachiaria, Sorgo, Alfafa), use 'getForageProfile'.
   - Se a questão envolver intoxicações por plantas, fotossensibilização, esporidesmina, cianeto ou aflatoxinas, use 'checkPastureToxicity'.
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

