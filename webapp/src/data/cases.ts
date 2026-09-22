import type { CaseData } from '../types';

export const CASE_REGISTRY: CaseData[] = [
  {
    id: 'c1',
    patientCode: 'CB-01',
    speciesName: 'Coruja-buraqueira',
    scientificName: 'Athene cunicularia',
    arrivalReason: 'Laceração de asa',
    weightKg: 0.15,
    caseBudget: 800,
    minimumRank: 'Estagiário',
    imageTexture: '/assets/animals/c1_coruja_buraqueira.jpg',
    isUrgent: false,
    historyText: 'Paciente admitido na emergência apresentando laceração de asa. Necessita de avaliação clínica e conduta terapêutica imediata.',
    vitalSigns: { temp: '40.2°C', hr: 'Taquicardia (280 bpm)', rr: 'Taquipneia', crt: '>2s', mucosa: 'Hipocorada' },
    physicalExamResults: {
      limbs: { region: 'limbs', label: 'Asa Esquerda (Lesão)', pinPos: { x: 38, y: 54 }, text: 'Sensibilidade local elevada e laceração alar profunda com crepitação.', evidenceId: 'ev_fisico', stressCost: 20, timeCost: 10 },
      head: { region: 'head', label: 'Cabeça / Olhos', pinPos: { x: 52, y: 22 }, text: 'Sinais de dor aguda e estresse álgico intenso.', evidenceId: 'ev_fisico', stressCost: 10, timeCost: 5 },
      body: { region: 'body', label: 'Tórax / Peito', pinPos: { x: 54, y: 48 }, text: 'Penas desordenadas e hematoma torácico leve superficial.', stressCost: 15, timeCost: 10 }
    },
    complementaryExams: {
      'rx_01': {
        id: 'rx_01', name: 'Radiografia Digital', description: 'Raio-X de asa.',
        cost: 150, type: 'xray', evidenceId: 'ev_img', hotspot: { x: 50, y: 50, radius: 20 },
        image: '/assets/xrays/xray_avian_wing_c1.svg'
      }
    },
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Laceração alar profunda com contaminação grosseira', category: 'physical', importance: 'critical' },
      'ev_img': { id: 'ev_img', text: 'Descontinuidade cortical em rádio-ulna no Rx', category: 'complementary', importance: 'critical' },
      'ev_hemo': { id: 'ev_hemo', text: 'Leucocitose com heterofilia reativa a trauma', category: 'laboratorial', importance: 'secondary' }
    }, 
    hypotheses: [
      { id: 'h1', title: 'Laceração Alar com Fratura de Rádio-Ulna', description: 'Ruptura dérmico-muscular extensa associada a fratura diafisária alar por impacto.', isCorrect: true, requiredEvidences: ['ev_fisico', 'ev_img'] },
      { id: 'h2', title: 'Fratura Exposta Cominutiva de Úmero', description: 'Fratura umeral proximal com múltiplos estilhaços ósseos penetrantes.', isCorrect: false, requiredEvidences: ['ev_fisico'] },
      { id: 'h3', title: 'Luxação Glenoumeral Traumática sem Fratura', description: 'Deslocamento articular da cintura escapular com integridade óssea apendicular.', isCorrect: false, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Conduta Cirúrgica Indicada', description: 'Limpeza e sutura da ferida.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Tratamento Conservador', description: 'Apenas analgésicos e repouso.', appropriate: false, type: 'oral', cost: 50 }
    ],
    treatmentSequence: [
      { tool: 'syringe', minigame: 'SyringeIrrigationMinigame', damageToVitalsOnMistake: 20 },
      { tool: 'suture_needle', minigame: 'SutureTensionMinigame', damageToVitalsOnMistake: 15 }
    ]
  },
  {
    id: 'c2',
    patientCode: 'JP-02',
    speciesName: 'Jabuti-piranga',
    scientificName: 'Chelonoidis carbonarius',
    arrivalReason: 'Fenda no plastrão',
    weightKg: 5.2,
    caseBudget: 600,
    minimumRank: 'Estagiário',
    imageTexture: '/assets/animals/c2_jabuti_piranga.jpg',
    isUrgent: false,
    historyText: 'Paciente admitido na emergência apresentando fenda no plastrão por atropelamento leve. Necessita de avaliação clínica e reconstrução.',
    vitalSigns: { temp: '28.5°C', hr: 'Normocardia', rr: 'Eupneia', crt: '2s', mucosa: 'Normocorada' },
    physicalExamResults: {
      body: { region: 'body', label: 'Plastrão Ventral', pinPos: { x: 52, y: 58 }, text: 'Fissura estrutural evidente no osso dérmico ventral do plastrão.', evidenceId: 'ev_fisico', stressCost: 15, timeCost: 10 },
      head: { region: 'head', label: 'Cabeça / Entrada da Carapaça', pinPos: { x: 22, y: 38 }, text: 'Retraído para a carapaça; membrana celomática íntegra sem evisceração.', evidenceId: 'ev_celoma', stressCost: 10, timeCost: 5 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Fenda óssea longitudinal no plastrão ventral', category: 'physical', importance: 'critical' },
      'ev_anamnese': { id: 'ev_anamnese', text: 'Histórico de impacto veicular em rodovia', category: 'anamnesis', importance: 'secondary' },
      'ev_celoma': { id: 'ev_celoma', text: 'Integridade da cavidade celomática sem evisceração', category: 'physical', importance: 'critical' }
    }, 
    hypotheses: [
      { id: 'h1', title: 'Fratura Traumática de Plastrão sem Evisceração', description: 'Fissura na carapaça ventral exigindo hemostasia e síntese acrílica protetora.', isCorrect: true, requiredEvidences: ['ev_fisico', 'ev_celoma'] },
      { id: 'h2', title: 'Fratura de Carapaça com Perfuração Pulmonar', description: 'Ruptura das placas dorsais com pneumotórax celomático compressivo.', isCorrect: false, requiredEvidences: ['ev_fisico'] },
      { id: 'h3', title: 'Necrose Infecciosa Crônica de Placas Dérmicas', description: 'Osteomielite bacteriana fúngica crônica de queratina com erosão lenta.', isCorrect: false, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Limpeza Cirúrgica e Reconstrução com Epóxi', description: 'Irrigação antisséptica do leito ósseo seguida de síntese acrílica impermeabilizante.', appropriate: true, type: 'injection', cost: 350 },
      { id: 't_wrong', title: 'Curativo Simples sem Fixação Rígida', description: 'Apenas bandagem superficial mantendo mobilidade dos fragmentos.', appropriate: false, type: 'bandaging', cost: 50 }
    ],
    treatmentSequence: [
      { tool: 'syringe', minigame: 'SyringeIrrigationMinigame', damageToVitalsOnMistake: 20 },
      { tool: 'epoxy_resin', minigame: 'EpoxyResinMinigame', damageToVitalsOnMistake: 25 }
    ]
  },
  {
    id: 'c3',
    patientCode: 'AC-03',
    speciesName: 'Arara-canindé',
    scientificName: 'Ara ararauna',
    arrivalReason: 'Apatia por intoxicação',
    weightKg: 1.1,
    caseBudget: 1200,
    minimumRank: 'Estagiário',
    imageTexture: '/assets/animals/c3_arara_caninde.jpg',
    isUrgent: true,
    historyText: 'Apresenta vômitos e prostração severa suspeita de intoxicação no recinto.',
    vitalSigns: { temp: '41.0°C', hr: 'Taquicardia Severa', rr: 'Dispneia', crt: '>3s', mucosa: 'Cianótica' },
    physicalExamResults: {
      body: { region: 'body', label: 'Inglúvio (Papo)', pinPos: { x: 48, y: 46 }, text: 'Inglúvio distendido e empastado, com refluxo alimentar e dor à palpação cranial.', evidenceId: 'ev_ingluvio', stressCost: 15, timeCost: 10 },
      head: { region: 'head', label: 'Cabeça / Bico', pinPos: { x: 54, y: 22 }, text: 'Ataxia motora severa, pupilas lentas e episódios de vômito esverdeado (biliverdinúria).', evidenceId: 'ev_fisico', stressCost: 10, timeCost: 5 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Ataxia motora severa, fraqueza e vômito esverdeado (biliverdinúria)', category: 'physical', importance: 'critical' },
      'ev_ingluvio': { id: 'ev_ingluvio', text: 'Inglúvio empastado por atonia gastrointestinal e íleo reflexo', category: 'physical', importance: 'critical' },
      'ev_anamnese': { id: 'ev_anamnese', text: 'Histórico de roer fiação metálica e soldas galvanizadas com chumbo/zinco', category: 'anamnesis', importance: 'critical' },
      'ev_hemo': { id: 'ev_hemo', text: 'Anemia hipocrômica com pontilhado basofílico eritrocitário marcante', category: 'laboratorial', importance: 'critical' }
    }, 
    hypotheses: [
      { id: 'h1', title: 'Intoxicação Aguda por Metais Pesados (Zinco/Chumbo)', description: 'Toxicidade sistêmica por partículas metálicas ingeridas; cursa com atonia de inglúvio, ataxia, vômito esverdeado e pontilhado basofílico. Conduta: Lavagem imediata do papo e quelação.', isCorrect: true, requiredEvidences: ['ev_fisico', 'ev_hemo', 'ev_anamnese'] },
      { id: 'h2', title: 'Dilatação Proventricular Viral Aviária (PDD)', description: 'Doença viral crônica neurotrópica por Bornavírus aviário (não justifica o pontilhado basofílico agudo nem histórico de soldas).', isCorrect: false, requiredEvidences: ['ev_fisico'] },
      { id: 'h3', title: 'Candidíase Esofágica com Impacção Primária', description: 'Infecção fúngica pura por Candida albicans (não causa ataxia neurológica severa nem anemia com pontilhado basofílico).', isCorrect: false, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Lavagem e Descontaminação de Inglúvio', description: 'Irrigação com soro fisiológico morno e aspiração completa das partículas tóxicas metálicas retidas no inglúvio.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Antibioticoterapia Empírica Isolada', description: 'Administração de antibióticos sem lavagem gástrica ou remoção mecânica das partículas tóxicas.', appropriate: false, type: 'injection', cost: 100 }
    ],
    treatmentSequence: [
      {
        id: 'step_01_lavagem_ingluvio',
        title: 'Lavagem e Descontaminação de Inglúvio',
        description: 'Irrigue e aspire as toxinas e detritos aderidos à mucosa do inglúvio com soro fisiológico morno.',
        tool: 'syringe',
        instrumentId: 'irrigation_syringe',
        minigameId: 'SyringeIrrigationMinigame',
        required: true,
        prerequisiteStepIds: [],
        damageToVitalsOnMistake: 20
      }
    ]
  },
  {
    id: 'c4',
    patientCode: 'SA-04',
    speciesName: 'Sucuri-amarela',
    scientificName: 'Eunectes notaeus',
    arrivalReason: 'Estomatite necrótica',
    weightKg: 15.0,
    caseBudget: 950,
    minimumRank: 'Estagiário',
    imageTexture: '/assets/animals/c4_sucuri_amarela.jpg',
    isUrgent: false,
    historyText: 'Paciente anoréxico há 4 semanas, apresenta salivação espessa e mau cheiro.',
    vitalSigns: { temp: '29.0°C', hr: 'Bradicardia', rr: 'Bradipneia', crt: '>2s', mucosa: 'Hiperêmica' },
    physicalExamResults: {
      head: { region: 'head', label: 'Cavidade Oral / Mandíbula', pinPos: { x: 36, y: 35 }, text: 'Lesões ulcerativas intensas e placas caseosas orais difusas em gengiva.', evidenceId: 'ev_fisico', stressCost: 10, timeCost: 5 },
      body: { region: 'body', label: 'Região Cervical', pinPos: { x: 62, y: 55 }, text: 'Ptialismo mucopurulento espesso e retração labial bilateral.', evidenceId: 'ev_saliva', stressCost: 15, timeCost: 10 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Placas caseosas e exsudato necrótico em cavidade oral', category: 'physical', importance: 'critical' },
      'ev_saliva': { id: 'ev_saliva', text: 'Ptialismo mucopurulento espesso e retração labial', category: 'physical', importance: 'secondary' },
      'ev_hemo': { id: 'ev_hemo', text: 'Leucocitose com heterofilia tóxica marcante', category: 'laboratorial', importance: 'critical' }
    }, 
    hypotheses: [
      { id: 'h1', title: 'Estomatite Infecciosa Necrótica Ulcerativa Severa', description: 'Infecção bacteriana mista profunda com necrose tecidual e risco iminente de sepse celomática.', isCorrect: true, requiredEvidences: ['ev_fisico', 'ev_hemo'] },
      { id: 'h2', title: 'Carcinoma de Células Escamosas da Mandíbula', description: 'Neoplasia maligna primária de epitélio escamoso com proliferação invasiva.', isCorrect: false, requiredEvidences: ['ev_fisico'] },
      { id: 'h3', title: 'Trauma Mecânico Dentário Isolado por Presa', description: 'Avulsão dentária aguda com sangramento focal sem contaminação purulenta difusa.', isCorrect: false, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Debridamento Mecânico e Irrigação Antisséptica', description: 'Curetagem delicada das placas caseosas e lavagem com clorexidina (cicatrização por segunda intenção).', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Sutura Oclusiva de Mucosa Oral', description: 'Suturar tecidos infectados aprisionando bactérias anaeróbias (contraindicado).', appropriate: false, type: 'oral', cost: 100 }
    ],
    treatmentSequence: [
      { tool: 'syringe', minigame: 'SyringeIrrigationMinigame', damageToVitalsOnMistake: 25 }
    ]
  },
  {
    id: 'c5',
    patientCode: 'HA-05',
    speciesName: 'Harpia',
    scientificName: 'Harpia harpyja',
    arrivalReason: 'Fissura grave de bico',
    weightKg: 7.5,
    caseBudget: 2500,
    minimumRank: 'Residente',
    imageTexture: '/assets/animals/c5_harpia.jpg',
    isUrgent: true,
    historyText: 'Apresenta rachadura profunda após choque contra vidro do recinto.',
    vitalSigns: { temp: '40.5°C', hr: 'Taquicardia', rr: 'Taquipneia', crt: '2s', mucosa: 'Normocorada' },
    physicalExamResults: {
      head: { region: 'head', label: 'Ranfoteca Superior (Bico)', pinPos: { x: 42, y: 38 }, text: 'Rachadura longitudinal grave na ranfoteca superior.', evidenceId: 'ev_fisico', stressCost: 10, timeCost: 5 },
      body: { region: 'body', label: 'Base do Bico / Cera', pinPos: { x: 52, y: 48 }, text: 'Sangramento ativo no leito vascular germinativo subjacente ao bico.', evidenceId: 'ev_sangue', stressCost: 15, timeCost: 10 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Fissura longitudinal grave na ranfoteca superior', category: 'physical', importance: 'critical' },
      'ev_sangue': { id: 'ev_sangue', text: 'Sangramento no leito vascular germinativo subjacente', category: 'physical', importance: 'critical' },
      'ev_alimentar': { id: 'ev_alimentar', text: 'Impossibilidade mecânica de preensão e rasgo de alimento', category: 'anamnesis', importance: 'secondary' }
    }, 
    hypotheses: [
      { id: 'h1', title: 'Fratura Longitudinal de Ranfoteca com Exposição Vascular', description: 'Fratura de queratina com risco de perda do bico, necessitando de síntese e resina odontológica.', isCorrect: true, requiredEvidences: ['ev_fisico', 'ev_sangue'] },
      { id: 'h2', title: 'Avulsão Irreversível de Base Óssea Maxilar', description: 'Desprendimento completo do osso incisivo craniano com perda de suporte esquelético.', isCorrect: false, requiredEvidences: ['ev_fisico'] },
      { id: 'h3', title: 'Lesão Diftérica de Bico por Varíola Aviária', description: 'Lesão proliferativa epitelial viral vesicular por Poxvirus.', isCorrect: false, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Reparo com Resina', description: 'Uso de epóxi odontológico.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Desgaste de Bico', description: 'Apenas lixar as bordas.', appropriate: false, type: 'bandaging', cost: 80 }
    ],
    treatmentSequence: [
      { tool: 'epoxy_resin', minigame: 'EpoxyResinMinigame', damageToVitalsOnMistake: 40 }
    ]
  },
  {
    id: 'c6',
    patientCode: 'OP-06',
    speciesName: 'Onça-pintada',
    scientificName: 'Panthera onca',
    arrivalReason: 'Fratura Cominutiva',
    weightKg: 65.0,
    caseBudget: 4000,
    minimumRank: 'Residente',
    imageTexture: '/assets/animals/c6_onca_pintada.jpg',
    isUrgent: true,
    historyText: 'Atropelamento em rodovia. Membro torácico pendular e creptante.',
    vitalSigns: { temp: '38.5°C', hr: 'Taquicardia Severa', rr: 'Taquipneia', crt: '>3s', mucosa: 'Pálida' },
    physicalExamResults: {
      limbs: { region: 'limbs', label: 'Membro Pélvico (Coxa)', pinPos: { x: 68, y: 62 }, text: 'Crepitação evidente e instabilidade óssea femoral com incapacidade de apoio.', evidenceId: 'ev_fisico', stressCost: 20, timeCost: 10 },
      head: { region: 'head', label: 'Cabeça / Mucosas', pinPos: { x: 28, y: 34 }, text: 'Mucosas normocoradas e pulso femoral palpável preservado distalmente.', evidenceId: 'ev_pulso', stressCost: 10, timeCost: 5 }
    },
    complementaryExams: {
      'rx_01': {
        id: 'rx_01', name: 'Radiografia Digital', description: 'Raio-X de membro.',
        cost: 150, type: 'xray', evidenceId: 'ev_img', hotspot: { x: 50, y: 50, radius: 20 },
        image: '/assets/xrays/xray_feline_pelvis_c6.svg'
      }
    },
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Instabilidade e crepitação óssea com incapacidade de apoio', category: 'physical', importance: 'critical' },
      'ev_img': { id: 'ev_img', text: 'Fratura cominutiva diafisária com esquírolas ósseas no Rx', category: 'complementary', importance: 'critical' },
      'ev_pulso': { id: 'ev_pulso', text: 'Pulso femoral palpável e boa perfusão distal periférica', category: 'physical', importance: 'secondary' }
    }, 
    hypotheses: [
      { id: 'h1', title: 'Fratura Cominutiva Instável de Fêmur', description: 'Fragmentação diafisária severa em ossos longos exigindo fixação rígida interna/placa.', isCorrect: true, requiredEvidences: ['ev_fisico', 'ev_img'] },
      { id: 'h2', title: 'Luxação Coxofemoral Traumática Ilíaca', description: 'Deslocamento da cabeça do fêmur fora do acetábulo sem quebra diafisária.', isCorrect: false, requiredEvidences: ['ev_fisico'] },
      { id: 'h3', title: 'Fratura Fissurária Incompleta em Galho Verde', description: 'Fissura cortical parcial sem perda de alinhamento axial do membro.', isCorrect: false, requiredEvidences: ['ev_img'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Osteossíntese', description: 'Cirurgia ortopédica completa.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Tala Rígida', description: 'Imobilização externa.', appropriate: false, type: 'bandaging', cost: 150 }
    ],
    treatmentSequence: [
      { tool: 'bone_drill', minigame: 'BoneDrillMinigame', damageToVitalsOnMistake: 50 },
      { tool: 'ortho_pin', minigame: 'OrthopedicPinsMinigame', damageToVitalsOnMistake: 45 },
      { tool: 'suture_needle', minigame: 'SutureTensionMinigame', damageToVitalsOnMistake: 20 }
    ]
  },
  {
    id: 'c7',
    patientCode: 'TB-07',
    speciesName: 'Tamanduá-bandeira',
    scientificName: 'Myrmecophaga tridactyla',
    arrivalReason: 'Fratura de fêmur por atropelamento',
    weightKg: 35.0,
    caseBudget: 3200,
    minimumRank: 'Residente',
    imageTexture: '/assets/animals/c7_tamandua_bandeira.jpg',
    isUrgent: true,
    historyText: 'Atropelamento grave em rodovia estadual. Resgatado com dor profunda.',
    vitalSigns: { temp: '37.8°C', hr: 'Taquicardia', rr: 'Taquipneia', crt: '>2s', mucosa: 'Hipocorada' },
    physicalExamResults: {
      limbs: { region: 'limbs', label: 'Pata Posterior Esquerda', pinPos: { x: 65, y: 65 }, text: 'Instabilidade femoral, desvio de eixo e aumento volumétrico por hematoma.', evidenceId: 'ev_fisico', stressCost: 20, timeCost: 10 },
      body: { region: 'body', label: 'Pélvis / Flanco', pinPos: { x: 45, y: 52 }, text: 'Edema pélvico e dor à palpação de membros posteriores por atropelamento.', evidenceId: 'ev_fisico', stressCost: 15, timeCost: 10 }
    },
    complementaryExams: {
      'rx_01': {
        id: 'rx_01', name: 'Radiografia Digital', description: 'Raio-X de pelve e fêmur.',
        cost: 150, type: 'xray', evidenceId: 'ev_img', hotspot: { x: 50, y: 50, radius: 20 },
        image: '/assets/xrays/xray_anteater_femur_c7.svg'
      }
    },
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Hematoma muscular extenso e desvio de eixo em membro posterior', category: 'physical', importance: 'critical' },
      'ev_img': { id: 'ev_img', text: 'Descontinuidade oblíqua com cavalgamento no fêmur no Rx', category: 'complementary', importance: 'critical' },
      'ev_anamnese': { id: 'ev_anamnese', text: 'Histórico de resgate em rodovia por atropelamento', category: 'anamnesis', importance: 'secondary' }
    }, 
    hypotheses: [
      { id: 'h1', title: 'Fratura Oblíqua Completa de Fêmur por Atropelamento', description: 'Descontinuidade femoral instável requerendo alinhamento cirúrgico e pino intramedular.', isCorrect: true, requiredEvidences: ['ev_fisico', 'ev_img'] },
      { id: 'h2', title: 'Ruptura Bilateral de Tendão Patelar sem Fratura', description: 'Secção tendinosa pura com deslocamento proximal de patela e osso íntegro.', isCorrect: false, requiredEvidences: ['ev_fisico'] },
      { id: 'h3', title: 'Fratura Pélvica com Ruptura de Sínfise Púbica', description: 'Trauma concentrado na cintura pélvica com diástase do canal do parto.', isCorrect: false, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Cirurgia Ortopédica', description: 'Pino intramedular e cerclagem.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Amputação do Membro', description: 'Remoção cirúrgica desnecessária.', appropriate: false, type: 'injection', cost: 800 }
    ],
    treatmentSequence: [
      { tool: 'bone_drill', minigame: 'BoneDrillMinigame', damageToVitalsOnMistake: 40 },
      { tool: 'ortho_pin', minigame: 'OrthopedicPinsMinigame', damageToVitalsOnMistake: 40 }
    ]
  },
  {
    id: 'c8',
    patientCode: 'LG-08',
    speciesName: 'Lobo-guará',
    scientificName: 'Chrysocyon brachyurus',
    arrivalReason: 'Mordedura profunda com infecção',
    weightKg: 25.0,
    caseBudget: 1800,
    minimumRank: 'Residente',
    imageTexture: '/assets/animals/c8_lobo_guara.jpg',
    isUrgent: false,
    historyText: 'Briga territorial, ferida com intensa infecção e odor fétido.',
    vitalSigns: { temp: '39.8°C (Febre)', hr: 'Taquicardia', rr: 'Taquipneia', crt: '2s', mucosa: 'Congesta' },
    physicalExamResults: {
      body: { region: 'body', label: 'Flanco / Costelas', pinPos: { x: 52, y: 48 }, text: 'Ferida profunda por caninos drenando secreção purulenta com necrose tecidual.', evidenceId: 'ev_fisico', stressCost: 15, timeCost: 10 },
      head: { region: 'head', label: 'Cabeça / Focinho', pinPos: { x: 25, y: 32 }, text: 'Hipertermia acentuada (39.8°C) e respiração álgica taquipneica.', evidenceId: 'ev_temp', stressCost: 10, timeCost: 5 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Ferimento por caninos com secreção purulenta e necrose tecidual', category: 'physical', importance: 'critical' },
      'ev_hemo': { id: 'ev_hemo', text: 'Neutrofilia com desvio nuclear à esquerda e granulação tóxica', category: 'laboratorial', importance: 'critical' },
      'ev_temp': { id: 'ev_temp', text: 'Hipertermia acentuada (39.8°C) e taquipneia álgica', category: 'physical', importance: 'secondary' }
    }, 
    hypotheses: [
      { id: 'h1', title: 'Ferida Contusa Infectada por Mordedura com Celulite', description: 'Infecção polimicrobiana bacteriana profunda inoculada por dentes carniceiros.', isCorrect: true, requiredEvidences: ['ev_fisico', 'ev_hemo'] },
      { id: 'h2', title: 'Envenenamento Ofídico Crotálico Agudo', description: 'Acidente botrópico/crotálico com rabdomiólise e coagulopatia intravascular.', isCorrect: false, requiredEvidences: ['ev_fisico'] },
      { id: 'h3', title: 'Fascite Necrosante Sistêmica por Streptococcus', description: 'Destruição galopante fulminante de planos aponeuróticos com gasometria crítica.', isCorrect: false, requiredEvidences: ['ev_hemo'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Debridamento Cirúrgico', description: 'Limpeza exaustiva da ferida e sutura.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Sutura Imediata', description: 'Suturar sem limpar (causará abscesso).', appropriate: false, type: 'injection', cost: 100 }
    ],
    treatmentSequence: [
      { tool: 'syringe', minigame: 'SyringeIrrigationMinigame', damageToVitalsOnMistake: 30 },
      { tool: 'suture_needle', minigame: 'SutureTensionMinigame', damageToVitalsOnMistake: 15 }
    ]
  },
  {
    id: 'c9',
    patientCode: 'TT-09',
    speciesName: 'Tucano-toco',
    scientificName: 'Ramphastos toco',
    arrivalReason: 'Quebra de ranfoteca superior',
    weightKg: 0.6,
    caseBudget: 1500,
    minimumRank: 'Residente',
    imageTexture: '/assets/animals/c9_tucano_toco.jpg',
    isUrgent: false,
    historyText: 'Paciente colidiu com cerca, perda de terço distal da ranfoteca.',
    vitalSigns: { temp: '41.2°C', hr: 'Taquicardia', rr: 'Taquipneia', crt: '1s', mucosa: 'Normocorada' },
    physicalExamResults: {
      head: { region: 'head', label: 'Ponta do Bico', pinPos: { x: 81, y: 44 }, text: 'Exposição do osso incisivo por perda traumática de substância da ranfoteca.', evidenceId: 'ev_fisico', stressCost: 10, timeCost: 5 },
      body: { region: 'body', label: 'Base do Bico / Olhos', pinPos: { x: 55, y: 31 }, text: 'Leito trabecular exposto com sangramento e vascularização visível.', evidenceId: 'ev_sangue', stressCost: 15, timeCost: 10 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Perda traumática de segmento do terço médio do bico superior', category: 'physical', importance: 'critical' },
      'ev_sangue': { id: 'ev_sangue', text: 'Leito trabecular exposto com coágulos e sangramento ativo', category: 'physical', importance: 'critical' },
      'ev_lingua': { id: 'ev_lingua', text: 'Integridade de língua penada e fenda palatina preservada', category: 'physical', importance: 'secondary' }
    }, 
    hypotheses: [
      { id: 'h1', title: 'Fratura Parcial de Ranfoteca com Exposição Trabecular', description: 'Quebra traumática do bico exigindo hemostasia de urgência e restauração protética.', isCorrect: true, requiredEvidences: ['ev_fisico', 'ev_sangue'] },
      { id: 'h2', title: 'Fratura Completa Craniofacial com Sinusite Severa', description: 'Colapso dos ossos nasofrontais com penetração de esquírolas na cavidade ocular.', isCorrect: false, requiredEvidences: ['ev_fisico'] },
      { id: 'h3', title: 'Necrose Vascular Trombótica por Aspergilose', description: 'Isquemia crônica fúngica da ponta do bico com necrose de coagulação seca.', isCorrect: false, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Prótese com Resina Acrílica', description: 'Reconstrução bico avariado.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Eutanásia', description: 'Sacrifício desnecessário.', appropriate: false, type: 'injection', cost: 50 }
    ],
    treatmentSequence: [
      { tool: 'epoxy_resin', minigame: 'EpoxyResinMinigame', damageToVitalsOnMistake: 25 }
    ]
  },
  {
    id: 'c10',
    patientCode: 'BP-10',
    speciesName: 'Bicho-preguiça',
    scientificName: 'Bradypus variegatus',
    arrivalReason: 'Queimadura elétrica nas garras',
    weightKg: 4.5,
    caseBudget: 2200,
    minimumRank: 'Residente',
    imageTexture: '/assets/animals/c10_bicho_preguica.jpg',
    isUrgent: true,
    historyText: 'Eletrocutado em fiação de média tensão.',
    vitalSigns: { temp: '34.5°C (Hipotermia)', hr: 'Arritmia', rr: 'Bradipneia', crt: '>3s', mucosa: 'Cianótica' },
    physicalExamResults: {
      limbs: { region: 'limbs', label: 'Garras / Membro Torácico', pinPos: { x: 32, y: 42 }, text: 'Tecido escurecido carbonizado nas garras e coxins por arco elétrico de média tensão.', evidenceId: 'ev_fisico', stressCost: 20, timeCost: 10 },
      head: { region: 'head', label: 'Cabeça / Face', pinPos: { x: 58, y: 28 }, text: 'Bradicardia relativa com ritmo sinusal regular após choque elétrico.', evidenceId: 'ev_cardio', stressCost: 10, timeCost: 5 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Tecido carbonizado de 3º grau nas falanges e almofadas plantares', category: 'physical', importance: 'critical' },
      'ev_anamnese': { id: 'ev_anamnese', text: 'Choque elétrico em fiação aérea de média tensão urbana', category: 'anamnesis', importance: 'critical' },
      'ev_cardio': { id: 'ev_cardio', text: 'Bradicardia relativa com ritmo sinusal preservado', category: 'physical', importance: 'secondary' }
    }, 
    hypotheses: [
      { id: 'h1', title: 'Queimadura Eletrotérmica Acral de 3º Grau', description: 'Lesão térmica induzida por passagem de corrente elétrica de alta voltagem pelas garras.', isCorrect: true, requiredEvidences: ['ev_fisico', 'ev_anamnese'] },
      { id: 'h2', title: 'Pododermatite Úmida Bacteriana Ulcerada', description: 'Infecção por bactérias piogênicas em dígitos decorrente de umidade crônica de cativeiro.', isCorrect: false, requiredEvidences: ['ev_fisico'] },
      { id: 'h3', title: 'Necrose por Constrição Mecânica de Fio de Nylon', description: 'Garroteamento isquêmico vascular acral por linha de cerol ou fita plástica.', isCorrect: false, requiredEvidences: ['ev_anamnese'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Desbridamento e Curativo Especializado com Sulfadiazina', description: 'Irrigação fisiológica abundante, remoção de escaras desvitalizadas e curativo estéril oclusivo.', appropriate: true, type: 'injection', cost: 400 },
      { id: 't_wrong', title: 'Sutura Primária sob Tensão', description: 'Suturar pele necrótica sob tensão em queimadura de 3º grau (leva a isquemia e deiscência).', appropriate: false, type: 'bandaging', cost: 150 }
    ],
    treatmentSequence: [
      { tool: 'syringe', minigame: 'SyringeIrrigationMinigame', damageToVitalsOnMistake: 20 },
      { tool: 'wound_bandage', minigame: 'WoundDressingMinigame', damageToVitalsOnMistake: 20 }
    ]
  },
  {
    id: 'c11',
    patientCode: 'JP-11',
    speciesName: 'Jacaré-do-pantanal',
    scientificName: 'Caiman yacare',
    arrivalReason: 'Ingestão de anzol',
    weightKg: 30.0,
    caseBudget: 2800,
    minimumRank: 'Especialista',
    imageTexture: '/assets/animals/c11_jacare_pantanal.jpg',
    isUrgent: true,
    historyText: 'Anzol pendurado na boca com fio de nylon se estendendo ao estômago.',
    vitalSigns: { temp: '29.5°C', hr: 'Taquicardia', rr: 'Eupneia', crt: '2s', mucosa: 'Normocorada' },
    physicalExamResults: {
      head: { region: 'head', label: 'Comissura Oral (Boca)', pinPos: { x: 32, y: 46 }, text: 'Fio de náilon visível exteriorizado na comissura oral.', evidenceId: 'ev_fisico', stressCost: 10, timeCost: 5 },
      body: { region: 'body', label: 'Ventre / Celoma', pinPos: { x: 68, y: 52 }, text: 'Cavidade celomática sem ascite, líquido livre ou peritonite à palpação.', evidenceId: 'ev_celoma', stressCost: 15, timeCost: 10 }
    },
    complementaryExams: {
      'rx_01': {
        id: 'rx_01', name: 'Radiografia Digital', description: 'Raio-X de celoma.',
        cost: 150, type: 'xray', evidenceId: 'ev_img', hotspot: { x: 50, y: 50, radius: 20 },
        image: '/assets/xrays/xray_reptile_hook_c11.svg'
      }
    },
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Linha monofilamento de pesca exteriorizada na comissura oral', category: 'physical', importance: 'critical' },
      'ev_img': { id: 'ev_img', text: 'Anzol metálico farpado radiopaco em transição esôfago-gástrica no Rx', category: 'complementary', importance: 'critical' },
      'ev_celoma': { id: 'ev_celoma', text: 'Ausência de líquido livre celomático ou perfuração visceral', category: 'physical', importance: 'secondary' }
    }, 
    hypotheses: [
      { id: 'h1', title: 'Ingestão de Corpo Estranho Metálico (Anzol de Pesca)', description: 'Anzol intraluminal farpado retido no trato gastrointestinal anterior exigindo extração endoscópica/cirúrgica.', isCorrect: true, requiredEvidences: ['ev_fisico', 'ev_img'] },
      { id: 'h2', title: 'Perfuração Gástrica com Celomite Fecal Maciça', description: 'Ruptura transmural do estômago com extravasamento de quimo para a cavidade peritoneal.', isCorrect: false, requiredEvidences: ['ev_img'] },
      { id: 'h3', title: 'Gastroenterite Hemorrágica por Parasitas Nematódeos', description: 'Parasitismo gástrico severo erosivo sem presença de corpo estranho radiopaco.', isCorrect: false, requiredEvidences: ['ev_img'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Remoção Endoscópica', description: 'Pinçamento guiado por câmera.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Laxante Oral', description: 'Tentar expelir o anzol pelas fezes.', appropriate: false, type: 'oral', cost: 60 }
    ],
    treatmentSequence: [
      { tool: 'endoscope', minigame: 'EndoscopyMinigame', damageToVitalsOnMistake: 45 }
    ]
  },
  {
    id: 'c12',
    patientCode: 'JG-12',
    speciesName: 'Jaguatirica',
    scientificName: 'Leopardus pardalis',
    arrivalReason: 'Obstrução gástrica',
    weightKg: 12.0,
    caseBudget: 3100,
    minimumRank: 'Especialista',
    imageTexture: '/assets/animals/c12_jaguatirica.jpg',
    isUrgent: true,
    historyText: 'Vômito não responsivo, recusa alimentar profunda.',
    vitalSigns: { temp: '38.0°C', hr: 'Taquicardia', rr: 'Taquipneia', crt: '>2s', mucosa: 'Hipocorada' },
    physicalExamResults: {
      body: { region: 'body', label: 'Abdômen / Ventre', pinPos: { x: 50, y: 68 }, text: 'Abdômen doloroso tenso à palpação em epigástrio e êmese repetida.', evidenceId: 'ev_fisico', stressCost: 15, timeCost: 10 },
      head: { region: 'head', label: 'Cabeça / Mucosas', pinPos: { x: 52, y: 24 }, text: 'Mucosas secas e tempo de preenchimento capilar aumentado por desidratação.', evidenceId: 'ev_fisico', stressCost: 10, timeCost: 5 }
    },
    complementaryExams: {
      'rx_01': {
        id: 'rx_01', name: 'Radiografia Digital', description: 'Raio-X abdominal.',
        cost: 150, type: 'xray', evidenceId: 'ev_img', hotspot: { x: 50, y: 50, radius: 20 },
        image: '/assets/xrays/xray_snake_obstruction_c12.svg'
      }
    },
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Abdômen doloroso tenso à palpação e êmese refratária', category: 'physical', importance: 'critical' },
      'ev_img': { id: 'ev_img', text: 'Massa radiopaca mineralizada com dilatação cranial em alças no Rx', category: 'complementary', importance: 'critical' },
      'ev_hemo': { id: 'ev_hemo', text: 'Alcalose metabólica hipoclorêmica compatível com obstrução alta', category: 'laboratorial', importance: 'secondary' }
    }, 
    hypotheses: [
      { id: 'h1', title: 'Obstrução Gastrointestinal por Corpo Estranho Mineralizado', description: 'Oclusão intraluminal completa impedindo progressão do trânsito digestório e gerando isquemia.', isCorrect: true, requiredEvidences: ['ev_fisico', 'ev_img'] },
      { id: 'h2', title: 'Panleucopenia Viral com Íleo Paralítico Neurogênico', description: 'Atonia gastrointestinal secundária à destruição viral de vilosidades intestinais.', isCorrect: false, requiredEvidences: ['ev_img'] },
      { id: 'h3', title: 'Intussuscepção Intestinal Ileocólica Idiopática', description: 'Invaginação em telescopagem de segmento intestinal sem corpo denso radiopaco.', isCorrect: false, requiredEvidences: ['ev_img'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Endoscopia / Gastrotomia', description: 'Cirurgia ou remoção minimamente invasiva.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Jejum e Observação', description: 'Aguardar trânsito intestinal.', appropriate: false, type: 'oral', cost: 20 }
    ],
    treatmentSequence: [
      { tool: 'endoscope', minigame: 'EndoscopyMinigame', damageToVitalsOnMistake: 40 },
      { tool: 'suture_needle', minigame: 'SutureTensionMinigame', damageToVitalsOnMistake: 20 }
    ]
  },
  {
    id: 'c13',
    patientCode: 'CA-13',
    speciesName: 'Capivara',
    scientificName: 'Hydrochoerus hydrochaeris',
    arrivalReason: 'Miíase severa/bicheira',
    weightKg: 45.0,
    caseBudget: 1500,
    minimumRank: 'Especialista',
    imageTexture: '/assets/animals/c13_capivara.jpg',
    isUrgent: false,
    historyText: 'Ferida extensa nas costas infestada de larvas de mosca.',
    vitalSigns: { temp: '39.5°C', hr: 'Taquicardia', rr: 'Eupneia', crt: '2s', mucosa: 'Normocorada' },
    physicalExamResults: {
      body: { region: 'body', label: 'Dorso / Flanco', pinPos: { x: 55, y: 38 }, text: 'Ferida ulcerada com larvas ativas e odor pútrido necrótico característico.', evidenceId: 'ev_fisico', stressCost: 15, timeCost: 10 },
      limbs: { region: 'limbs', label: 'Região Pélvica / Glútea', pinPos: { x: 74, y: 56 }, text: 'Cavitação muscular dorsal com planos profundos viáveis.', evidenceId: 'ev_musculo', stressCost: 15, timeCost: 10 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Ferida ulcerada com larvas ativas e odor pútrido necrótico', category: 'physical', importance: 'critical' },
      'ev_hemo': { id: 'ev_hemo', text: 'Leucocitose com eosinofilia marcante e neutrofilia', category: 'laboratorial', importance: 'critical' },
      'ev_musculo': { id: 'ev_musculo', text: 'Cavitação muscular dorsal com viabilidade de leito profundo', category: 'physical', importance: 'secondary' }
    }, 
    hypotheses: [
      { id: 'h1', title: 'Miíase Cutânea Traumática com Infecção Bacteriana Secundária', description: 'Infestação cavitária massiva por larvas de dípteros com destruição tecidual e secreção séptica.', isCorrect: true, requiredEvidences: ['ev_fisico', 'ev_hemo'] },
      { id: 'h2', title: 'Carbúnculo Cutâneo Ulcerado por Bacillus anthracis', description: 'Escara negra zoonótica hemorrágica por esporos bacterianos sistêmicos.', isCorrect: false, requiredEvidences: ['ev_hemo'] },
      { id: 'h3', title: 'Fibrossarcoma Ulcerado em Região Interescapular', description: 'Massa tumoral mesenquimal infiltrativa ulcerada sem componente primário parasitário.', isCorrect: false, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Lavagem Exaustiva, Catação de Larvas e Curativo', description: 'Remoção mecânica das larvas sob irrigação sob pressão e curativo protetor repelente cicatrizante.', appropriate: true, type: 'injection', cost: 350 },
      { id: 't_wrong', title: 'Pomada Tópica sem Lavagem Prévia', description: 'Aplicação de pomada sobre larvas ativas e restos necróticos.', appropriate: false, type: 'bandaging', cost: 50 }
    ],
    treatmentSequence: [
      { tool: 'syringe', minigame: 'SyringeIrrigationMinigame', damageToVitalsOnMistake: 20 },
      { tool: 'wound_bandage', minigame: 'WoundDressingMinigame', damageToVitalsOnMistake: 20 }
    ]
  },
  {
    id: 'c14',
    patientCode: 'MP-14',
    speciesName: 'Macaco-prego',
    scientificName: 'Sapajus apella',
    arrivalReason: 'Trauma craniano leve com laceração',
    weightKg: 3.5,
    caseBudget: 3600,
    minimumRank: 'Especialista',
    imageTexture: '/assets/animals/c14_macaco_prego.jpg',
    isUrgent: true,
    historyText: 'Queda de grande altura, corte na cabeça sangrando.',
    vitalSigns: { temp: '38.2°C', hr: 'Taquicardia', rr: 'Taquipneia', crt: '>2s', mucosa: 'Hipocorada' },
    physicalExamResults: {
      head: { region: 'head', label: 'Crânio / Calvária', pinPos: { x: 50, y: 28 }, text: 'Hematoma parietal e laceração aberta profunda de couro cabeludo.', evidenceId: 'ev_fisico', stressCost: 10, timeCost: 5 },
      limbs: { region: 'limbs', label: 'Face / Olhos', pinPos: { x: 52, y: 44 }, text: 'Pupilas isocóricas e fotorreativas com consciência alerta (Glasgow 16/18).', evidenceId: 'ev_neuro', stressCost: 15, timeCost: 10 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Laceração de couro cabeludo parietal com edema perilesional', category: 'physical', importance: 'critical' },
      'ev_neuro': { id: 'ev_neuro', text: 'Pupilas isocóricas e fotorreativas com consciência alerta (Glasgow 16/18)', category: 'physical', importance: 'critical' },
      'ev_anamnese': { id: 'ev_anamnese', text: 'Queda de galho alto após disputa de bando em dossel', category: 'anamnesis', importance: 'secondary' }
    }, 
    hypotheses: [
      { id: 'h1', title: 'Traumatismo Cranioencefálico Leve com Laceração Cutânea', description: 'Contusão craniana grau I com preservação neurológica focal necessitando hemostasia e sutura.', isCorrect: true, requiredEvidences: ['ev_fisico', 'ev_neuro'] },
      { id: 'h2', title: 'Afundamento de Calvária com Hemorragia Subdural Aguda', description: 'Fratura deprimida de crânio com desvio de linha média e anisocoria pupilar.', isCorrect: false, requiredEvidences: ['ev_neuro'] },
      { id: 'h3', title: 'Encefalite Herpética com Déficit Motor Progressivo', description: 'Quadro infeccioso viral primário do SNC de primatas neotropicais com convulsões.', isCorrect: false, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Limpeza e Fechamento', description: 'Sutura craniana sob anestesia.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Bandagem Compressiva', description: 'Apenas fechar com curativo.', appropriate: false, type: 'bandaging', cost: 50 }
    ],
    treatmentSequence: [
      { tool: 'syringe', minigame: 'SyringeIrrigationMinigame', damageToVitalsOnMistake: 35 },
      { tool: 'suture_needle', minigame: 'SutureTensionMinigame', damageToVitalsOnMistake: 25 }
    ]
  },
  {
    id: 'c15',
    patientCode: 'IV-15',
    speciesName: 'Iguana-verde',
    scientificName: 'Iguana iguana',
    arrivalReason: 'Abscesso mandibular severo',
    weightKg: 2.0,
    caseBudget: 1400,
    minimumRank: 'Especialista',
    imageTexture: '/assets/animals/c15_iguana.jpg',
    isUrgent: false,
    historyText: 'Aumento de volume na região da mandíbula.',
    vitalSigns: { temp: '30.1°C', hr: 'Normocardia', rr: 'Eupneia', crt: '2s', mucosa: 'Normocorada' },
    physicalExamResults: {
      head: { region: 'head', label: 'Mandíbula Esquerda', pinPos: { x: 81, y: 29 }, text: 'Massa nodular firme subcutânea mandibular unilateral com secreção caseosa.', evidenceId: 'ev_fisico', stressCost: 10, timeCost: 5 },
      body: { region: 'body', label: 'Região Gular / Papo', pinPos: { x: 83, y: 38 }, text: 'Oclusão gnatológica estável com mucosa oral íntegra e ausência de lise osteolítica grave.', evidenceId: 'ev_oral', stressCost: 15, timeCost: 10 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Massa nodular firme mandibular unilateral com secreção caseosa', category: 'physical', importance: 'critical' },
      'ev_oral': { id: 'ev_oral', text: 'Oclusão gnatológica estável com ausência de lise osteolítica grave', category: 'physical', importance: 'critical' },
      'ev_anamnese': { id: 'ev_anamnese', text: 'Dieta desbalanceada com histórico de hipovitaminose A prévia', category: 'anamnesis', importance: 'secondary' }
    }, 
    hypotheses: [
      { id: 'h1', title: 'Abscesso Mandibular Caseoso Subcutâneo', description: 'Reação granulomatosa encapsulada com pus ressecado típico de répteis desprovidos de mieloperoxidase.', isCorrect: true, requiredEvidences: ['ev_fisico', 'ev_oral'] },
      { id: 'h2', title: 'Doença Osteometabólica com Mandíbula de Borracha', description: 'Hiperparatireoidismo nutricional grave com reabsorção difusa do tecido ósseo compacto.', isCorrect: false, requiredEvidences: ['ev_oral'] },
      { id: 'h3', title: 'Ameloblastoma Neoplásico de Origem Odontogênica', description: 'Neoplasia osteolítica proliferativa de lâmina dentária com invasão medular.', isCorrect: false, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Drenagem Cirúrgica', description: 'Incisão e lavagem.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Antibiótico Oral', description: 'Tentar reduzir o abscesso medicamente.', appropriate: false, type: 'oral', cost: 70 }
    ],
    treatmentSequence: [
      { tool: 'scalpel', minigame: 'SoftTissueIncisionMinigame', damageToVitalsOnMistake: 25 },
      { tool: 'syringe', minigame: 'SyringeIrrigationMinigame', damageToVitalsOnMistake: 20 }
    ]
  },
  {
    id: 'c16',
    patientCode: 'TE-16',
    speciesName: 'Teiú',
    scientificName: 'Salvator merianae',
    arrivalReason: 'Retenção de ovos/Distocia',
    weightKg: 4.0,
    caseBudget: 2600,
    minimumRank: 'Chefe de Clínica',
    imageTexture: '/assets/animals/c16_teiu.jpg',
    isUrgent: true,
    historyText: 'Tentando botar sem sucesso por dias.',
    vitalSigns: { temp: '28.5°C', hr: 'Taquicardia', rr: 'Taquipneia', crt: '>2s', mucosa: 'Pálida' },
    physicalExamResults: {
      body: { region: 'body', label: 'Celoma Caudal / Pélvis', pinPos: { x: 44, y: 62 }, text: 'Aumento expressivo de volume celomático caudal e tenesmo com massas ovulares palpáveis.', evidenceId: 'ev_fisico', stressCost: 15, timeCost: 10 },
      head: { region: 'head', label: 'Cabeça / Focinho', pinPos: { x: 71, y: 54 }, text: 'Paciente desidratado e letárgico devido à distocia obstrutiva prolongada.', evidenceId: 'ev_fisico', stressCost: 10, timeCost: 5 }
    },
    complementaryExams: {
      'rx_01': {
        id: 'rx_01', name: 'Radiografia Digital', description: 'Raio-X de celoma.',
        cost: 150, type: 'xray', evidenceId: 'ev_img', hotspot: { x: 50, y: 50, radius: 20 },
        image: '/assets/xrays/xray_iguana_dystocia_c16.svg'
      }
    },
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Aumento expressivo de volume celomático caudal e tenesmo cloacal', category: 'physical', importance: 'critical' },
      'ev_img': { id: 'ev_img', text: 'Retenção de múltiplos ovos calcificados agrupados no canal pélvico no Rx', category: 'complementary', importance: 'critical' },
      'ev_anamnese': { id: 'ev_anamnese', text: 'Atraso de mais de 3 semanas do período de postura e ausência de ninho', category: 'anamnesis', importance: 'secondary' }
    }, 
    hypotheses: [
      { id: 'h1', title: 'Distocia Celomática Obstrutiva por Retenção de Ovos', description: 'Impossibilidade anatômica ou atônica de expelir a postura reprodutiva com risco de peritonite vitelínica.', isCorrect: true, requiredEvidences: ['ev_fisico', 'ev_img'] },
      { id: 'h2', title: 'Urolitíase Gigante Vesical com Obstrução Urinária', description: 'Cálculo esférico concêntrico de ácido úrico retido no colo da bexiga urinária.', isCorrect: false, requiredEvidences: ['ev_img'] },
      { id: 'h3', title: 'Constipação Severa por Compactação de Substrato (Areia)', description: 'Fecaloma radiopaco intestinal decorrente de geofagia por carência de minerais.', isCorrect: false, requiredEvidences: ['ev_img'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Ovariossalpingectomia', description: 'Retirada cirúrgica.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Massagem Celomática', description: 'Forçar a expulsão mecanicamente.', appropriate: false, type: 'bandaging', cost: 20 }
    ],
    treatmentSequence: [
      { tool: 'scalpel', minigame: 'SoftTissueIncisionMinigame', damageToVitalsOnMistake: 30 },
      { tool: 'suture_needle', minigame: 'SutureTensionMinigame', damageToVitalsOnMistake: 25 }
    ]
  },
  {
    id: 'c17',
    patientCode: 'CM-17',
    speciesName: 'Cachorro-do-mato',
    scientificName: 'Cerdocyon thous',
    arrivalReason: 'Fratura de tíbia em armadilha',
    weightKg: 6.5,
    caseBudget: 4500,
    minimumRank: 'Chefe de Clínica',
    imageTexture: '/assets/animals/c17_cachorro_mato.jpg',
    isUrgent: true,
    historyText: 'Preso em laço de caçador, laceração severa e osso exposto.',
    vitalSigns: { temp: '39.2°C', hr: 'Taquicardia Severa', rr: 'Taquipneia', crt: '>3s', mucosa: 'Hipocorada' },
    physicalExamResults: {
      limbs: { region: 'limbs', label: 'Pata Posterior (Tíbia)', pinPos: { x: 68, y: 68 }, text: 'Membro com edema perilesional, crepitação e instabilidade em diáfise média de tíbia.', evidenceId: 'ev_fisico', stressCost: 20, timeCost: 10 },
      body: { region: 'body', label: 'Tórax / Costelas', pinPos: { x: 46, y: 48 }, text: 'Esgoriações torácicas leves por aprisionamento em laço sem ruptura peritoneal.', evidenceId: 'ev_fisico', stressCost: 15, timeCost: 10 }
    },
    complementaryExams: {
      'rx_01': {
        id: 'rx_01', name: 'Radiografia Digital', description: 'Raio-X de membro.',
        cost: 150, type: 'xray', evidenceId: 'ev_img', hotspot: { x: 50, y: 50, radius: 20 },
        image: '/assets/xrays/xray_canid_tibia_c17.svg'
      }
    },
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Edema perilesional e instabilidade em diáfise média de tíbia', category: 'physical', importance: 'critical' },
      'ev_img': { id: 'ev_img', text: 'Fratura transversa completa em terço médio de tíbia e fíbula no Rx', category: 'complementary', importance: 'critical' },
      'ev_anamnese': { id: 'ev_anamnese', text: 'Resgate em armadilha de laço de aço em mata ciliar', category: 'anamnesis', importance: 'secondary' }
    }, 
    hypotheses: [
      { id: 'h1', title: 'Fratura Transversa de Tíbia e Fíbula por Aprisionamento', description: 'Secção óssea diafisária traumática requerendo osteossíntese com pino intramedular e fixador.', isCorrect: true, requiredEvidences: ['ev_fisico', 'ev_img'] },
      { id: 'h2', title: 'Ruptura do Tendão Calcâneo Comum sem Fratura', description: 'Laceração da fáscia de Aquiles com postura plantígrada e integridade cortical óssea.', isCorrect: false, requiredEvidences: ['ev_img'] },
      { id: 'h3', title: 'Luxação Congênita Medial de Patela Grau IV', description: 'Má-formação do sulco troclear com rotação crônica de crista tibial sem trauma recente.', isCorrect: false, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Fixação e Sutura', description: 'Estabilização óssea e reparo.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Bandagem Robert Jones', description: 'Imobilização simples.', appropriate: false, type: 'bandaging', cost: 120 }
    ],
    treatmentSequence: [
      { tool: 'bone_drill', minigame: 'BoneDrillMinigame', damageToVitalsOnMistake: 50 },
      { tool: 'ortho_pin', minigame: 'OrthopedicPinsMinigame', damageToVitalsOnMistake: 50 },
      { tool: 'suture_needle', minigame: 'SutureTensionMinigame', damageToVitalsOnMistake: 20 }
    ]
  },
  {
    id: 'c18',
    patientCode: 'JC-18',
    speciesName: 'Jiboia-constritora',
    scientificName: 'Boa constrictor',
    arrivalReason: 'Queimadura térmica de terrário',
    weightKg: 3.5,
    caseBudget: 1800,
    minimumRank: 'Chefe de Clínica',
    imageTexture: '/assets/animals/c18_jiboia.jpg',
    isUrgent: false,
    historyText: 'Apreendido. Placa aquecedora defeituosa em terrário queimou a serpente.',
    vitalSigns: { temp: '31.0°C', hr: 'Taquicardia', rr: 'Eupneia', crt: '2s', mucosa: 'Normocorada' },
    physicalExamResults: {
      body: { region: 'body', label: 'Ventre Médio', pinPos: { x: 65, y: 40 }, text: 'Necrose dérmica de escamas ventrais com seroma exsudativo por placa térmica.', evidenceId: 'ev_fisico', stressCost: 15, timeCost: 10 },
      head: { region: 'head', label: 'Cabeça / Olhos', pinPos: { x: 44, y: 53 }, text: 'Membrana celomática e musculatura parietal profunda preservadas.', evidenceId: 'ev_celoma', stressCost: 10, timeCost: 5 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Necrose dérmica de escamas ventrais com seroma exsudativo', category: 'physical', importance: 'critical' },
      'ev_anamnese': { id: 'ev_anamnese', text: 'Placa de aquecimento em terrário desprovida de termostato limitador', category: 'anamnesis', importance: 'critical' },
      'ev_celoma': { id: 'ev_celoma', text: 'Membrana celomática e musculatura parietal profundas integras', category: 'physical', importance: 'secondary' }
    }, 
    hypotheses: [
      { id: 'h1', title: 'Queimadura Térmica por Contato de 2º Grau em Ventre', description: 'Necrose de escamas e derme ventral por contato térmico prolongado necessitando debridamento e curativos.', isCorrect: true, requiredEvidences: ['ev_fisico', 'ev_anamnese'] },
      { id: 'h2', title: 'Dermatite Micótica Ulcerativa por Ophidiomyces', description: 'Infecção fúngica disseminada contagiosa com hiperqueratose vesicular crônica.', isCorrect: false, requiredEvidences: ['ev_anamnese'] },
      { id: 'h3', title: 'Dissecamento Folicular por Ecdise Retida (Dysecdysis)', description: 'Retenção benigna de camada de estrato córneo antigo sem lesão dérmica exsudativa.', isCorrect: false, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Irrigação Antisséptica e Curativo Biológico', description: 'Descontaminação do leito ventral com clorexidina diluída e curativo não aderente com sulfadiazina de prata.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Curativo Seco Desidratante', description: 'Gaze seca sem umectação (resseca escamas e aprofunda lesão).', appropriate: false, type: 'bandaging', cost: 50 }
    ],
    treatmentSequence: [
      { tool: 'syringe', minigame: 'SyringeIrrigationMinigame', damageToVitalsOnMistake: 20 },
      { tool: 'wound_bandage', minigame: 'WoundDressingMinigame', damageToVitalsOnMistake: 20 }
    ]
  },
  {
    id: 'c19',
    patientCode: 'ST-19',
    speciesName: 'Sagui-de-tufo-branco',
    scientificName: 'Callithrix jacchus',
    arrivalReason: 'Fratura de rádio-ulna',
    weightKg: 0.35,
    caseBudget: 4200,
    minimumRank: 'Chefe de Clínica',
    imageTexture: '/assets/animals/c19_sagui.jpg',
    isUrgent: true,
    historyText: 'Caiu de fiação elétrica e fraturou bracinho.',
    vitalSigns: { temp: '38.9°C', hr: 'Taquicardia (>250 bpm)', rr: 'Taquipneia', crt: '>2s', mucosa: 'Hipocorada' },
    physicalExamResults: {
      limbs: { region: 'limbs', label: 'Braço / Antebraço', pinPos: { x: 44, y: 51 }, text: 'Membro torácico caído com crepitação, dor e deformidade em diáfise do antebraço.', evidenceId: 'ev_fisico', stressCost: 20, timeCost: 10 },
      head: { region: 'head', label: 'Cabeça / Região Facial', pinPos: { x: 40, y: 44 }, text: 'Extremidades aquecidas com reflexo de preensão e perfusão distal preservados.', evidenceId: 'ev_vascular', stressCost: 10, timeCost: 5 }
    },
    complementaryExams: {
      'rx_01': {
        id: 'rx_01', name: 'Radiografia Digital', description: 'Raio-X torácico.',
        cost: 150, type: 'xray', evidenceId: 'ev_img', hotspot: { x: 50, y: 50, radius: 20 },
        image: '/assets/xrays/xray_harpy_wing_c19.svg'
      }
    },
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Membro torácico caído com crepitação e dor em antebraço', category: 'physical', importance: 'critical' },
      'ev_img': { id: 'ev_img', text: 'Fratura completa com desvio angular em diáfise de rádio e ulna no Rx', category: 'complementary', importance: 'critical' },
      'ev_vascular': { id: 'ev_vascular', text: 'Perfusão e reflexo de preensão das garras preservados', category: 'physical', importance: 'secondary' }
    }, 
    hypotheses: [
      { id: 'h1', title: 'Fratura Diafisária Fechada de Rádio e Ulna com Desvio', description: 'Quebra de ossos do antebraço exigindo redução e estabilização ortopédica para preservação de voo/escalada.', isCorrect: true, requiredEvidences: ['ev_fisico', 'ev_img'] },
      { id: 'h2', title: 'Luxação Traumatica de Cotovelo com Ruptura Ligamentar', description: 'Incongruência articular úmero-rádio-ulnar pura sem ruptura da diáfise óssea.', isCorrect: false, requiredEvidences: ['ev_img'] },
      { id: 'h3', title: 'Avulsão Radicular do Plexo Braquial sem Lesão Óssea', description: 'Neuropraxia ou neurotmesis de raízes nervosas cervicais com membro flácido anestésico.', isCorrect: false, requiredEvidences: ['ev_img'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Micro-osteossíntese', description: 'Uso de pinos delicados.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Tala de Palito', description: 'Imobilização externa artesanal.', appropriate: false, type: 'bandaging', cost: 20 }
    ],
    treatmentSequence: [
      { tool: 'bone_drill', minigame: 'BoneDrillMinigame', damageToVitalsOnMistake: 60 },
      { tool: 'ortho_pin', minigame: 'OrthopedicPinsMinigame', damageToVitalsOnMistake: 60 }
    ]
  },
  {
    id: 'c20',
    patientCode: 'AN-20',
    speciesName: 'Anta',
    scientificName: 'Tapirus terrestris',
    arrivalReason: 'Laceração abdominal profunda',
    weightKg: 180.0,
    caseBudget: 5500,
    minimumRank: 'Chefe de Clínica',
    imageTexture: '/assets/animals/c20_anta.jpg',
    isUrgent: true,
    historyText: 'Atropelada por caminhão. Risco grave de peritonite e evisceração.',
    vitalSigns: { temp: '39.8°C', hr: 'Taquicardia Severa', rr: 'Taquipneia', crt: '>3s', mucosa: 'Cianótica' },
    physicalExamResults: {
      body: { region: 'body', label: 'Flanco Abdominal', pinPos: { x: 62, y: 50 }, text: 'Laceração incisa profunda de 25cm com exposição de planos musculares abdominais.', evidenceId: 'ev_fisico', stressCost: 15, timeCost: 10 },
      limbs: { region: 'limbs', label: 'Membro Pélvico Posterior', pinPos: { x: 76, y: 70 }, text: 'Exploração anatômica cuidadosa confirma peritônio parietal íntegro sem evisceração.', evidenceId: 'ev_peritonio', stressCost: 20, timeCost: 10 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Laceração incisa profunda de 25cm com exposição de parede abdominal', category: 'physical', importance: 'critical' },
      'ev_sangue': { id: 'ev_sangue', text: 'Sangramento venoso moderado contido e leito tecidual viável', category: 'physical', importance: 'critical' },
      'ev_peritonio': { id: 'ev_peritonio', text: 'Peritônio parietal íntegro sem evisceração de alças entéricas', category: 'physical', importance: 'critical' }
    }, 
    hypotheses: [
      { id: 'h1', title: 'Laceração Abdominal Extensa com Preservação Peritoneal', description: 'Solução de continuidade dérmica e fascial em cerca de arame sem ruptura da cavidade celômica visceral.', isCorrect: true, requiredEvidences: ['ev_fisico', 'ev_peritonio'] },
      { id: 'h2', title: 'Hérnia Abdominal Traumática com Evisceração Intestinal', description: 'Ruptura transmural da parede abdominal com exposição externa de alças intestinais necrosadas.', isCorrect: false, requiredEvidences: ['ev_peritonio'] },
      { id: 'h3', title: 'Perfuração por Arma de Fogo com Lesão Intraperitoneal', description: 'Projétil balístico perfurante com penetração cavitária profunda e peritonite aguda.', isCorrect: false, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Fechamento em Planos', description: 'Cirurgia complexa de sutura e limpeza.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Bandagem de Flanco', description: 'Apenas curativo externo.', appropriate: false, type: 'bandaging', cost: 150 }
    ],
    treatmentSequence: [
      { tool: 'syringe', minigame: 'SyringeIrrigationMinigame', damageToVitalsOnMistake: 40 },
      { tool: 'suture_needle', minigame: 'SutureTensionMinigame', damageToVitalsOnMistake: 30 },
      { tool: 'wound_bandage', minigame: 'WoundDressingMinigame', damageToVitalsOnMistake: 20 }
    ]
  }
];
