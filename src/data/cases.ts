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
    imageTexture: 'https://loremflickr.com/800/600/owl',
    isUrgent: false,
    historyText: 'Paciente admitido na emergência apresentando laceração de asa. Necessita de avaliação clínica e conduta terapêutica imediata.',
    vitalSigns: { temp: '40.2°C', hr: 'Taquicardia (280 bpm)', rr: 'Taquipneia', crt: '>2s', mucosa: 'Hipocorada' },
    physicalExamResults: {
      head: { region: 'head', text: 'Sinais de dor e estresse agudo.', stressCost: 10, timeCost: 5 },
      body: { region: 'body', text: 'Achados consistentes com o trauma relatado.', stressCost: 15, timeCost: 10 },
      limbs: { region: 'limbs', text: 'Sensibilidade local elevada.', stressCost: 20, timeCost: 10 }
    },
    complementaryExams: {
      'rx_01': {
        id: 'rx_01', name: 'Radiografia Digital', description: 'Raio-X de asa.',
        cost: 150, type: 'xray', evidenceId: 'ev_img', hotspot: { x: 50, y: 50, radius: 20 },
        image: 'https://placehold.co/800x600/111111/dddddd?text=Raio-X+Asa'
      }
    },
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Laceração aberta com sujidade', category: 'physical', importance: 'critical' }
    },
    hypotheses: [
      { id: 'h1', title: 'Laceração Tecidual Profunda', description: 'Ruptura de tecidos moles com alto risco de infecção.', isCorrect: true, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Conduta Cirúrgica Indicada', description: 'Limpeza e sutura da ferida.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Tratamento Conservador', description: 'Apenas analgésicos e repouso.', appropriate: false, type: 'oral', cost: 50 }
    ],
    treatmentSequence: [
      { tool: 'syringe', minigame: 'SyringeIrrigationMinigame', damageToVitalsOnMistake: 20 },
      { tool: 'suture_needle', minigame: 'SutureMinigame', damageToVitalsOnMistake: 15 }
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
    imageTexture: 'https://loremflickr.com/800/600/tortoise',
    isUrgent: false,
    historyText: 'Paciente admitido na emergência apresentando fenda no plastrão por atropelamento leve. Necessita de avaliação clínica e reconstrução.',
    vitalSigns: { temp: '28.5°C', hr: 'Normocardia', rr: 'Eupneia', crt: '2s', mucosa: 'Normocorada' },
    physicalExamResults: {
      head: { region: 'head', text: 'Retraído para a carapaça.', stressCost: 10, timeCost: 5 },
      body: { region: 'body', text: 'Fissura estrutural evidente no osso dérmico ventral.', stressCost: 15, timeCost: 10 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Fenda óssea no plastrão', category: 'physical', importance: 'critical' }
    },
    hypotheses: [
      { id: 'h1', title: 'Fratura de Plastrão', description: 'Fissura na carapaça ventral exigindo reconstrução sintética.', isCorrect: true, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Reconstrução com Resina', description: 'Selamento da fenda com epóxi.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Curativo Simples', description: 'Bandagem superficial.', appropriate: false, type: 'bandaging', cost: 50 }
    ],
    treatmentSequence: [
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
    imageTexture: 'https://loremflickr.com/800/600/macaw',
    isUrgent: true,
    historyText: 'Apresenta vômitos e prostração severa suspeita de intoxicação no recinto.',
    vitalSigns: { temp: '41.0°C', hr: 'Taquicardia Severa', rr: 'Dispneia', crt: '>3s', mucosa: 'Cianótica' },
    physicalExamResults: {
      body: { region: 'body', text: 'Inglúvio empastado, paciente não reage bem à palpação.', stressCost: 15, timeCost: 10 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Vômito e apatia severa', category: 'physical', importance: 'critical' }
    },
    hypotheses: [
      { id: 'h1', title: 'Intoxicação por Metais Pesados', description: 'Ingestão de material tóxico, lavagem de inglúvio indicada.', isCorrect: true, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Lavagem de Inglúvio', description: 'Limpeza de toxinas com soro morno.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Antibioticoterapia', description: 'Tratamento com antibióticos de amplo espectro.', appropriate: false, type: 'injection', cost: 100 }
    ],
    treatmentSequence: [
      { tool: 'syringe', minigame: 'SyringeIrrigationMinigame', damageToVitalsOnMistake: 30 }
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
    imageTexture: 'https://loremflickr.com/800/600/anaconda',
    isUrgent: false,
    historyText: 'Paciente anoréxico há 4 semanas, apresenta salivação espessa e mau cheiro.',
    vitalSigns: { temp: '29.0°C', hr: 'Bradicardia', rr: 'Bradipneia', crt: '>2s', mucosa: 'Hiperêmica' },
    physicalExamResults: {
      head: { region: 'head', text: 'Lesões ulcerativas intensas na cavidade oral.', stressCost: 10, timeCost: 5 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Placas caseosas na boca', category: 'physical', importance: 'critical' }
    },
    hypotheses: [
      { id: 'h1', title: 'Estomatite Infecciosa Severa', description: 'Necrose cavidade oral.', isCorrect: true, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Limpeza e Debridamento', description: 'Remoção cirúrgica de placas.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Analgésico Oral', description: 'Manejo apenas da dor.', appropriate: false, type: 'oral', cost: 30 }
    ],
    treatmentSequence: [
      { tool: 'syringe', minigame: 'SyringeIrrigationMinigame', damageToVitalsOnMistake: 20 },
      { tool: 'suture_needle', minigame: 'SutureMinigame', damageToVitalsOnMistake: 20 }
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
    imageTexture: 'https://loremflickr.com/800/600/eagle',
    isUrgent: true,
    historyText: 'Apresenta rachadura profunda após choque contra vidro do recinto.',
    vitalSigns: { temp: '40.5°C', hr: 'Taquicardia', rr: 'Taquipneia', crt: '2s', mucosa: 'Normocorada' },
    physicalExamResults: {
      head: { region: 'head', text: 'Rachadura longitudinal na ranfoteca.', stressCost: 10, timeCost: 5 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Rachadura longitudinal no bico', category: 'physical', importance: 'critical' }
    },
    hypotheses: [
      { id: 'h1', title: 'Fratura de Ranfoteca', description: 'Fissura no bico comprometendo alimentação.', isCorrect: true, requiredEvidences: ['ev_fisico'] }
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
    imageTexture: 'https://loremflickr.com/800/600/jaguar',
    isUrgent: true,
    historyText: 'Atropelamento em rodovia. Membro torácico pendular e creptante.',
    vitalSigns: { temp: '38.5°C', hr: 'Taquicardia Severa', rr: 'Taquipneia', crt: '>3s', mucosa: 'Pálida' },
    physicalExamResults: {
      limbs: { region: 'limbs', text: 'Crepitação evidente.', stressCost: 20, timeCost: 10 }
    },
    complementaryExams: {
      'rx_01': {
        id: 'rx_01', name: 'Radiografia Digital', description: 'Raio-X de membro.',
        cost: 150, type: 'xray', evidenceId: 'ev_img', hotspot: { x: 50, y: 50, radius: 20 },
        image: 'https://placehold.co/800x600/111111/dddddd?text=Raio-X+Fratura+Cominutiva'
      }
    },
    evidenceData: {
      'ev_img': { id: 'ev_img', text: 'Múltiplos fragmentos ósseos no Rx', category: 'complementary', importance: 'critical' }
    },
    hypotheses: [
      { id: 'h1', title: 'Fratura Cominutiva de Rádio', description: 'Fratura em múltiplos fragmentos necessitando pinos.', isCorrect: true, requiredEvidences: ['ev_img'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Osteossíntese', description: 'Cirurgia ortopédica completa.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Tala Rígida', description: 'Imobilização externa.', appropriate: false, type: 'bandaging', cost: 150 }
    ],
    treatmentSequence: [
      { tool: 'bone_drill', minigame: 'BoneDrillMinigame', damageToVitalsOnMistake: 50 },
      { tool: 'ortho_pin', minigame: 'OrthopedicPinsMinigame', damageToVitalsOnMistake: 45 },
      { tool: 'suture_needle', minigame: 'SutureMinigame', damageToVitalsOnMistake: 20 }
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
    imageTexture: 'https://loremflickr.com/800/600/anteater',
    isUrgent: true,
    historyText: 'Atropelamento grave em rodovia estadual. Resgatado com dor profunda.',
    vitalSigns: { temp: '37.8°C', hr: 'Taquicardia', rr: 'Taquipneia', crt: '>2s', mucosa: 'Hipocorada' },
    physicalExamResults: {
      limbs: { region: 'limbs', text: 'Instabilidade femoral e aumento de volume.', stressCost: 20, timeCost: 10 }
    },
    complementaryExams: {
      'rx_01': {
        id: 'rx_01', name: 'Radiografia Digital', description: 'Raio-X de pelve e fêmur.',
        cost: 150, type: 'xray', evidenceId: 'ev_img', hotspot: { x: 50, y: 50, radius: 20 },
        image: 'https://placehold.co/800x600/111111/dddddd?text=Raio-X+Fêmur'
      }
    },
    evidenceData: {
      'ev_img': { id: 'ev_img', text: 'Descontinuidade óssea femoral', category: 'complementary', importance: 'critical' }
    },
    hypotheses: [
      { id: 'h1', title: 'Fratura Oblíqua de Fêmur', description: 'Trauma contuso grave.', isCorrect: true, requiredEvidences: ['ev_img'] }
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
    imageTexture: 'https://loremflickr.com/800/600/wolf',
    isUrgent: false,
    historyText: 'Briga territorial, ferida com intensa infecção e odor fétido.',
    vitalSigns: { temp: '39.8°C (Febre)', hr: 'Taquicardia', rr: 'Taquipneia', crt: '2s', mucosa: 'Congesta' },
    physicalExamResults: {
      body: { region: 'body', text: 'Ferida drenando pus.', stressCost: 15, timeCost: 10 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Secreção purulenta e necrose', category: 'physical', importance: 'critical' }
    },
    hypotheses: [
      { id: 'h1', title: 'Ferida Contaminada', description: 'Infecção tecidual profunda por mordida.', isCorrect: true, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Debridamento Cirúrgico', description: 'Limpeza exaustiva da ferida e sutura.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Sutura Imediata', description: 'Suturar sem limpar (causará abscesso).', appropriate: false, type: 'injection', cost: 100 }
    ],
    treatmentSequence: [
      { tool: 'syringe', minigame: 'SyringeIrrigationMinigame', damageToVitalsOnMistake: 30 },
      { tool: 'suture_needle', minigame: 'SutureMinigame', damageToVitalsOnMistake: 15 }
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
    imageTexture: 'https://loremflickr.com/800/600/toucan',
    isUrgent: false,
    historyText: 'Paciente colidiu com cerca, perda de terço distal da ranfoteca.',
    vitalSigns: { temp: '41.2°C', hr: 'Taquicardia', rr: 'Taquipneia', crt: '1s', mucosa: 'Normocorada' },
    physicalExamResults: {
      head: { region: 'head', text: 'Exposição do osso incisivo.', stressCost: 10, timeCost: 5 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Perda de segmento do bico superior', category: 'physical', importance: 'critical' }
    },
    hypotheses: [
      { id: 'h1', title: 'Avulsão Parcial de Bico', description: 'Ruptura na queratina da ranfoteca.', isCorrect: true, requiredEvidences: ['ev_fisico'] }
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
    imageTexture: 'https://loremflickr.com/800/600/sloth',
    isUrgent: true,
    historyText: 'Eletrocutado em fiação de média tensão.',
    vitalSigns: { temp: '34.5°C (Hipotermia)', hr: 'Arritmia', rr: 'Bradipneia', crt: '>3s', mucosa: 'Cianótica' },
    physicalExamResults: {
      limbs: { region: 'limbs', text: 'Tecido escurecido, odor de queimado.', stressCost: 20, timeCost: 10 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Tecido carbonizado nas falanges', category: 'physical', importance: 'critical' }
    },
    hypotheses: [
      { id: 'h1', title: 'Queimadura de 3º Grau', description: 'Dano tecidual severo por eletrocussão.', isCorrect: true, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Amputação / Debridamento', description: 'Remoção de necrose.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Pomada Cicatrizante', description: 'Apenas tratamento tópico suave.', appropriate: false, type: 'bandaging', cost: 40 }
    ],
    treatmentSequence: [
      { tool: 'syringe', minigame: 'SyringeIrrigationMinigame', damageToVitalsOnMistake: 35 },
      { tool: 'suture_needle', minigame: 'SutureMinigame', damageToVitalsOnMistake: 20 }
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
    imageTexture: 'https://loremflickr.com/800/600/alligator',
    isUrgent: true,
    historyText: 'Anzol pendurado na boca com fio de nylon se estendendo ao estômago.',
    vitalSigns: { temp: '29.5°C', hr: 'Taquicardia', rr: 'Eupneia', crt: '2s', mucosa: 'Normocorada' },
    physicalExamResults: {
      head: { region: 'head', text: 'Fio de nylon visível', stressCost: 10, timeCost: 5 }
    },
    complementaryExams: {
      'rx_01': {
        id: 'rx_01', name: 'Radiografia Digital', description: 'Raio-X de celoma.',
        cost: 150, type: 'xray', evidenceId: 'ev_img', hotspot: { x: 50, y: 50, radius: 20 },
        image: 'https://placehold.co/800x600/111111/dddddd?text=Raio-X+Anzol'
      }
    },
    evidenceData: {
      'ev_img': { id: 'ev_img', text: 'Artefato radiopaco (anzol) no estômago', category: 'complementary', importance: 'critical' }
    },
    hypotheses: [
      { id: 'h1', title: 'Corpo Estranho Gástrico', description: 'Anzol retido no estômago.', isCorrect: true, requiredEvidences: ['ev_img'] }
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
    imageTexture: 'https://loremflickr.com/800/600/ocelot',
    isUrgent: true,
    historyText: 'Vômito não responsivo, recusa alimentar profunda.',
    vitalSigns: { temp: '38.0°C', hr: 'Taquicardia', rr: 'Taquipneia', crt: '>2s', mucosa: 'Hipocorada' },
    physicalExamResults: {
      body: { region: 'body', text: 'Abdomen tenso, dor aguda.', stressCost: 15, timeCost: 10 }
    },
    complementaryExams: {
      'rx_01': {
        id: 'rx_01', name: 'Radiografia Digital', description: 'Raio-X abdominal.',
        cost: 150, type: 'xray', evidenceId: 'ev_img', hotspot: { x: 50, y: 50, radius: 20 },
        image: 'https://placehold.co/800x600/111111/dddddd?text=Raio-X+Obstrução'
      }
    },
    evidenceData: {
      'ev_img': { id: 'ev_img', text: 'Dilatação gástrica com material radiopaco', category: 'complementary', importance: 'critical' }
    },
    hypotheses: [
      { id: 'h1', title: 'Obstrução Intestinal/Gástrica', description: 'Risco iminente de necrose gástrica.', isCorrect: true, requiredEvidences: ['ev_img'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Endoscopia / Gastrotomia', description: 'Cirurgia ou remoção minimamente invasiva.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Jejum e Observação', description: 'Aguardar trânsito intestinal.', appropriate: false, type: 'oral', cost: 20 }
    ],
    treatmentSequence: [
      { tool: 'endoscope', minigame: 'EndoscopyMinigame', damageToVitalsOnMistake: 40 },
      { tool: 'suture_needle', minigame: 'SutureMinigame', damageToVitalsOnMistake: 20 }
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
    imageTexture: 'https://loremflickr.com/800/600/capybara',
    isUrgent: false,
    historyText: 'Ferida extensa nas costas infestada de larvas de mosca.',
    vitalSigns: { temp: '39.5°C', hr: 'Taquicardia', rr: 'Eupneia', crt: '2s', mucosa: 'Normocorada' },
    physicalExamResults: {
      body: { region: 'body', text: 'Movimentação tecidual, tecido necrótico.', stressCost: 15, timeCost: 10 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Larvas ativas em ferida profunda', category: 'physical', importance: 'critical' }
    },
    hypotheses: [
      { id: 'h1', title: 'Miíase Cavitária Extensa', description: 'Infestação avançada por larvas.', isCorrect: true, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Limpeza Exaustiva', description: 'Remoção mecânica e irrigação.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Antibiótico Tópico', description: 'Apenas pomada na ferida.', appropriate: false, type: 'bandaging', cost: 45 }
    ],
    treatmentSequence: [
      { tool: 'syringe', minigame: 'SyringeIrrigationMinigame', damageToVitalsOnMistake: 30 }
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
    imageTexture: 'https://loremflickr.com/800/600/monkey',
    isUrgent: true,
    historyText: 'Queda de grande altura, corte na cabeça sangrando.',
    vitalSigns: { temp: '38.2°C', hr: 'Taquicardia', rr: 'Taquipneia', crt: '>2s', mucosa: 'Hipocorada' },
    physicalExamResults: {
      head: { region: 'head', text: 'Hematoma periorbital, ferida aberta.', stressCost: 10, timeCost: 5 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Ferida contusa na região parietal', category: 'physical', importance: 'critical' }
    },
    hypotheses: [
      { id: 'h1', title: 'TCE Leve e Laceração', description: 'Edema e ferida aberta em couro cabeludo.', isCorrect: true, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Limpeza e Fechamento', description: 'Sutura craniana sob anestesia.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Bandagem Compressiva', description: 'Apenas fechar com curativo.', appropriate: false, type: 'bandaging', cost: 50 }
    ],
    treatmentSequence: [
      { tool: 'syringe', minigame: 'SyringeIrrigationMinigame', damageToVitalsOnMistake: 35 },
      { tool: 'suture_needle', minigame: 'SutureMinigame', damageToVitalsOnMistake: 25 }
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
    imageTexture: 'https://loremflickr.com/800/600/iguana',
    isUrgent: false,
    historyText: 'Aumento de volume na região da mandíbula.',
    vitalSigns: { temp: '30.1°C', hr: 'Normocardia', rr: 'Eupneia', crt: '2s', mucosa: 'Normocorada' },
    physicalExamResults: {
      head: { region: 'head', text: 'Nódulo flutuante, aderido a planos profundos.', stressCost: 10, timeCost: 5 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Aumento de volume flutuante na mandíbula', category: 'physical', importance: 'critical' }
    },
    hypotheses: [
      { id: 'h1', title: 'Osteomielite/Abscesso', description: 'Coleção purulenta encapsulada.', isCorrect: true, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Drenagem Cirúrgica', description: 'Incisão e lavagem.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Antibiótico Oral', description: 'Tentar reduzir o abscesso medicamente.', appropriate: false, type: 'oral', cost: 70 }
    ],
    treatmentSequence: [
      { tool: 'scalpel', minigame: 'IncisionMinigame', damageToVitalsOnMistake: 25 },
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
    imageTexture: 'https://loremflickr.com/800/600/lizard',
    isUrgent: true,
    historyText: 'Tentando botar sem sucesso por dias.',
    vitalSigns: { temp: '28.5°C', hr: 'Taquicardia', rr: 'Taquipneia', crt: '>2s', mucosa: 'Pálida' },
    physicalExamResults: {
      body: { region: 'body', text: 'Celoma distendido, massas palpáveis firmes.', stressCost: 15, timeCost: 10 }
    },
    complementaryExams: {
      'rx_01': {
        id: 'rx_01', name: 'Radiografia Digital', description: 'Raio-X de celoma.',
        cost: 150, type: 'xray', evidenceId: 'ev_img', hotspot: { x: 50, y: 50, radius: 20 },
        image: 'https://placehold.co/800x600/111111/dddddd?text=Raio-X+Ovos+Retidos'
      }
    },
    evidenceData: {
      'ev_img': { id: 'ev_img', text: 'Múltiplos ovos retidos no celoma', category: 'complementary', importance: 'critical' }
    },
    hypotheses: [
      { id: 'h1', title: 'Distocia Pós-Ovulatória', description: 'Incapacidade de oviposição.', isCorrect: true, requiredEvidences: ['ev_img'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Ovariossalpingectomia', description: 'Retirada cirúrgica.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Massagem Celomática', description: 'Forçar a expulsão mecanicamente.', appropriate: false, type: 'bandaging', cost: 20 }
    ],
    treatmentSequence: [
      { tool: 'scalpel', minigame: 'IncisionMinigame', damageToVitalsOnMistake: 30 },
      { tool: 'suture_needle', minigame: 'SutureMinigame', damageToVitalsOnMistake: 25 }
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
    imageTexture: 'https://loremflickr.com/800/600/fox',
    isUrgent: true,
    historyText: 'Preso em laço de caçador, laceração severa e osso exposto.',
    vitalSigns: { temp: '39.2°C', hr: 'Taquicardia Severa', rr: 'Taquipneia', crt: '>3s', mucosa: 'Hipocorada' },
    physicalExamResults: {
      limbs: { region: 'limbs', text: 'Membro garroteado, osso quebrado com infecção inicial.', stressCost: 20, timeCost: 10 }
    },
    complementaryExams: {
      'rx_01': {
        id: 'rx_01', name: 'Radiografia Digital', description: 'Raio-X de membro.',
        cost: 150, type: 'xray', evidenceId: 'ev_img', hotspot: { x: 50, y: 50, radius: 20 },
        image: 'https://placehold.co/800x600/111111/dddddd?text=Raio-X+Tíbia'
      }
    },
    evidenceData: {
      'ev_img': { id: 'ev_img', text: 'Fratura transversa e edema de tecidos moles', category: 'complementary', importance: 'critical' }
    },
    hypotheses: [
      { id: 'h1', title: 'Fratura Exposta de Tíbia', description: 'Lesão isquêmica e fratura por laço.', isCorrect: true, requiredEvidences: ['ev_img'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Fixação e Sutura', description: 'Estabilização óssea e reparo.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Bandagem Robert Jones', description: 'Imobilização simples.', appropriate: false, type: 'bandaging', cost: 120 }
    ],
    treatmentSequence: [
      { tool: 'bone_drill', minigame: 'BoneDrillMinigame', damageToVitalsOnMistake: 50 },
      { tool: 'ortho_pin', minigame: 'OrthopedicPinsMinigame', damageToVitalsOnMistake: 50 },
      { tool: 'suture_needle', minigame: 'SutureMinigame', damageToVitalsOnMistake: 20 }
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
    imageTexture: 'https://loremflickr.com/800/600/snake',
    isUrgent: false,
    historyText: 'Apreendido. Placa aquecedora defeituosa em terrário queimou a serpente.',
    vitalSigns: { temp: '31.0°C', hr: 'Taquicardia', rr: 'Eupneia', crt: '2s', mucosa: 'Normocorada' },
    physicalExamResults: {
      body: { region: 'body', text: 'Pele ressecada e descamando irregularmente em face ventral.', stressCost: 15, timeCost: 10 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Bolhas e necrose na face ventral', category: 'physical', importance: 'critical' }
    },
    hypotheses: [
      { id: 'h1', title: 'Queimadura Ventral Extensa', description: 'Dano dérmico por placa aquecedora.', isCorrect: true, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Terapia Tópica', description: 'Lavagem profunda e desbridamento.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Curativo Seco', description: 'Tentar ressecar a bolha.', appropriate: false, type: 'bandaging', cost: 30 }
    ],
    treatmentSequence: [
      { tool: 'syringe', minigame: 'SyringeIrrigationMinigame', damageToVitalsOnMistake: 35 }
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
    imageTexture: 'https://loremflickr.com/800/600/marmoset',
    isUrgent: true,
    historyText: 'Caiu de fiação elétrica e fraturou bracinho.',
    vitalSigns: { temp: '38.9°C', hr: 'Taquicardia (>250 bpm)', rr: 'Taquipneia', crt: '>2s', mucosa: 'Hipocorada' },
    physicalExamResults: {
      limbs: { region: 'limbs', text: 'Braço dobrado em ângulo impossível.', stressCost: 20, timeCost: 10 }
    },
    complementaryExams: {
      'rx_01': {
        id: 'rx_01', name: 'Radiografia Digital', description: 'Raio-X torácico.',
        cost: 150, type: 'xray', evidenceId: 'ev_img', hotspot: { x: 50, y: 50, radius: 20 },
        image: 'https://placehold.co/800x600/111111/dddddd?text=Raio-X+Rádio-ulna'
      }
    },
    evidenceData: {
      'ev_img': { id: 'ev_img', text: 'Fratura de rádio e ulna', category: 'complementary', importance: 'critical' }
    },
    hypotheses: [
      { id: 'h1', title: 'Fratura de Membro Torácico', description: 'Ossos muito finos, alto risco iatrogênico.', isCorrect: true, requiredEvidences: ['ev_img'] }
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
    imageTexture: 'https://loremflickr.com/800/600/tapir',
    isUrgent: true,
    historyText: 'Atropelada por caminhão. Risco grave de peritonite e evisceração.',
    vitalSigns: { temp: '39.8°C', hr: 'Taquicardia Severa', rr: 'Taquipneia', crt: '>3s', mucosa: 'Cianótica' },
    physicalExamResults: {
      body: { region: 'body', text: 'Abertura gigante no flanco direito.', stressCost: 15, timeCost: 10 }
    },
    complementaryExams: {},
    evidenceData: {
      'ev_fisico': { id: 'ev_fisico', text: 'Laceração de 30cm atingindo musculatura', category: 'physical', importance: 'critical' }
    },
    hypotheses: [
      { id: 'h1', title: 'Ferida Perfurocontusa Penetrante', description: 'Risco de peritonite e evisceração.', isCorrect: true, requiredEvidences: ['ev_fisico'] }
    ],
    treatmentOptions: [
      { id: 't_correct', title: 'Fechamento em Planos', description: 'Cirurgia complexa de sutura e limpeza.', appropriate: true, type: 'injection', cost: 300 },
      { id: 't_wrong', title: 'Bandagem de Flanco', description: 'Apenas curativo externo.', appropriate: false, type: 'bandaging', cost: 150 }
    ],
    treatmentSequence: [
      { tool: 'syringe', minigame: 'SyringeIrrigationMinigame', damageToVitalsOnMistake: 40 },
      { tool: 'suture_needle', minigame: 'SutureMinigame', damageToVitalsOnMistake: 30 },
      { tool: 'suture_needle', minigame: 'SutureMinigame', damageToVitalsOnMistake: 30 }
    ]
  }
];
