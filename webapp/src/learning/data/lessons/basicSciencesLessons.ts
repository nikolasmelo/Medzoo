// src/learning/data/lessons/basicSciencesLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

// ==========================================
// 1. BIOQUÍMICA CLÍNICA & METABÓLICA VETERINÁRIA
// ==========================================
export const BIOCHEMISTRY_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_biochem_01',
    conceptId: 'concept_biochemistry_ketosis_gluconeogenesis',
    type: 'multiple_choice',
    prompt: 'Uma vaca Holandesa de alta produção (42 L/dia), no 21º dia pós-parto, apresenta hiporexia seletiva (recusa concentrado, come apenas feno), queda brusca na produção de leite e hálito adocicado de acetona. Qual é a via metabólica descompensada e o achado laboratorial confirmatório?',
    options: [
      {
        id: 'opt_biochem_1',
        text: 'Balanço energético negativo com mobilização de AGL/NEFA e elevação de beta-hidroxibutirato (BHB > 1.4 mmol/L)',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! No pico de lactação, a demanda de glicose pela glândula mamária supera a ingestão alimentar. A mobilização lipídica excessiva sobrecarrega o ciclo de Krebs hepático (falta oxaloacetato derivado do propionato), desviando acetil-CoA para a cetogênese.'
      },
      {
        id: 'opt_biochem_2',
        text: 'Acidose lática ruminal aguda com produção excessiva de ácido D-lático no rúmen',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A acidose lática decorre de sobrecarga aguda de carboidratos rapidamente fermentáveis (amido), não de balanço energético negativo com recusa de concentrado e hálito cetônico.'
      },
      {
        id: 'opt_biochem_3',
        text: 'Insuficiência renal primária com retenção de ureia e creatinina séricas',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Embora a desidratação secundária possa causar leve azotemia pré-renal, a queixa patognomônica de hálito cetônico e queda de lactação no periparto aponta diretamente para cetose metabólica.'
      },
      {
        id: 'opt_biochem_4',
        text: 'Deficiência primária de tiamina (Vitamina B1) provocando polioencefalomalácia',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A deficiência de tiamina leva a sintomas neurológicos severos (opistótono, cegueira cortical e nistagmo), e não à síndrome cetonêmica clássica de transição.'
      }
    ]
  }
];

export const BIOCHEMISTRY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_biochem_01_ketosis',
    moduleId: 'mod_biochemistry',
    title: 'Metabolismo Intermediário: Cetogênese & Balanço Energético no Periparto',
    shortDescription: 'Fisiopatologia da cetose em ruminantes: mobilização de NEFA, síntese de beta-hidroxibutirato e esteatose hepática.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_biochemistry_ketosis_gluconeogenesis'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_biochem_th1',
        type: 'theory',
        title: 'Gliconeogênese Comparada & O Ciclo da Cetose Bovina',
        contentMarkdown: `### A Bioquímica Canônica do Ruminante

Diferente dos monogástricos (que absorvem glicose diretamente da dieta no intestino delgado), os ruminantes absorvem praticamente **zero glicose livre**. 

Toda a glicose exigida pelo encéfalo, hemácias e glândula mamária precisa ser **sintetizada pelo fígado (gliconeogênese)** a partir dos Ácidos Graxos Voláteis (AGVs) absorvidos no rúmen:
* **Propionato:** O único AGV estritamente glicogênico (fornece esqueletos de carbono para oxaloacetato).
* **Acetato e Butirato:** AGVs cetogênicos/lipogênicos (utilizados para síntese de gordura no leite e oxidação energética).

---

### A Cascata do Balanço Energético Negativo (BEN)

> ⚠️ **Ponto Crítico:** No início da lactação, a produção leiteira sobe rapidamente enquanto a capacidade de ingestão de matéria seca do rúmen ainda está deprimida.

1. **Mobilização Tecidual:** O organismo recruta triglicerídeos do tecido adiposo em larga escala, liberando **Ácidos Graxos Não-Esterificados (AGNE / NEFA)** no sangue.
2. **Sobrecarga Hepática:** Os NEFAs chegam ao fígado para beta-oxidação. Quando o aporte de propionato é escasso, falta **oxaloacetato** para condensar com o acetil-CoA no ciclo de Krebs.
3. **Desvio Cetonêmico:** O excesso de acetil-CoA é desviado para a síntese hepática de **corpos cetônicos**:
   $$\text{Acetil-CoA} \longrightarrow \text{Acetoacetato} \longleftrightarrow \beta\text{-hidroxibutirato (BHB)} \longrightarrow \text{Acetona}$$
4. **Consequência Clínica:** O acúmulo de BHB suprime ainda mais o apetite no hipotálamo (ciclo vicioso), gerando cetose subclínica/clínica e infiltração gordurosa (esteatose hepática).`
      },
      {
        id: 'sec_biochem_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Vaca Estrela (Holandesa P.O.)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Metabólico da Cetose Clínica em Bovino Leiteiro',
          patient: {
            name: 'Estrela',
            species: 'Bovino',
            breed: 'Holandesa P.O.',
            age: '5 anos (3ª lactação)',
            weightKg: 620,
            habitatOrEnvironment: 'Free-stall intensivo com dieta total misturada (TMR)'
          },
          vitals: {
            heartRateBpm: 68,
            respiratoryRateRpm: 24,
            temperatureCelsius: 38.6,
            mucousMembranes: 'Rosadas com leve icterícia subconjuntival',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Vaca de alta produção pariu há 18 dias. O produtor relata que o animal começou a refugar o farelo concentrado há 48h, comendo apenas feno seco. Houve queda de produção de 45 para 22 L/dia. As fezes estão secas e brilhantes (tipo muco). Ao se aproximar da cabeça da vaca, nota-se odor adocicado típico de esmalte/acetona.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Perfil Metabólico Sérico',
              findings: 'Avaliação de beta-hidroxibutirato portátil em sangue total e enzimas de lesão hepatocelular.',
              abnormalValues: [
                { parameter: 'Beta-hidroxibutirato (BHB)', value: '3.4 mmol/L', reference: '< 1.2 mmol/L', status: 'critical' },
                { parameter: 'Glicemia Sérica', value: '28 mg/dL', reference: '45 - 75 mg/dL', status: 'low' },
                { parameter: 'NEFA (AGNE)', value: '1.2 mEq/L', reference: '< 0.4 mEq/L', status: 'critical' },
                { parameter: 'GGT Hepática', value: '78 U/L', reference: '15 - 40 U/L', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Qual é a conduta terapêutica e metabólica de escolha para reverter a cetose de Estrela?',
          decisionOptions: [
            {
              id: 'opt_dec_bio_1',
              label: 'Propilenoglicol oral (300 g/dia) + Glicose 50% IV lenta + Vitamina B12',
              description: 'Fornecer precursor gliconeogênico direto (propilenoglicol convertido em propionato/piruvato no fígado), restaurar glicemia imediata e ofertar cofatores do ciclo de Krebs.',
              isOptimal: true,
              consequenceText: 'Excelente conduta! A glicose 50% intravenosa interrompe a sinalização de hipoglicemia aguda e a lipólise. O propilenoglicol administrado por sonda drench fornece substrato de propionato contínuo para o oxaloacetato hepático, reativando a queima de acetil-CoA no ciclo de Krebs.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Administração de propilenoglicol e glicose IV hipertônica',
                mechanism: 'Aumento da glicemia sérica e oferta de piruvato/oxaloacetato hepático',
                effect: 'Bloqueio da lipólise periférica e drenagem do excesso de acetil-CoA para o Ciclo de Krebs',
                clinicalMeaning: 'Queda progressiva do BHB sérico (< 1.2 mmol/L), recuperação do apetite e restauração da produção leiteira'
              }
            },
            {
              id: 'opt_dec_bio_2',
              label: 'Administrar bicarbonato de sódio 8.4% IV e esvaziamento ruminal',
              description: 'Tratar como suspeita de acidose láctica ruminal primária.',
              isOptimal: false,
              consequenceText: 'Erro diagnóstico grave! A vaca não tem acidose lática (o pH ruminal na cetose costuma ser normal ou alcalino por anorexia). Administrar bicarbonato causará alcalose metabólica iatrogênica e piorará o quadro clínico.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Confusão com acidose e infusão de bicarbonato',
                mechanism: 'Alcalinização sistêmica sem corrigir o déficit de substrato gliconeogênico',
                effect: 'Manutenção da cetogênese acelerada e alcalose iatrogênica',
                clinicalMeaning: 'Piora da anorexia e avanço para encefalopatia cetonêmica com tremores'
              }
            },
            {
              id: 'opt_dec_bio_3',
              label: 'Aumentar a oferta de silagem de milho e grãos na dieta sem medicação',
              description: 'Tentar forçar a ingestão energética apenas pelo aumento de concentrado no cocho.',
              isOptimal: false,
              consequenceText: 'Conduta ineficaz. O animal com cetose clínica já apresenta hiporexia severa mediada pelo BHB alto no hipotálamo. Ela recusará o concentrado e o quadro evoluirá para lipidose hepática irreversível.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Tentativa dietética passiva sem drench terapêutico',
                mechanism: 'Incapacidade de consumo espontâneo com BHB suprimindo o centro da fome',
                effect: 'Manutenção do balanço energético negativo e esteatose hepática progressiva',
                clinicalMeaning: 'Persistência da hipoglicemia e perda acentuada de escore corporal'
              }
            }
          ],
          learningTakeaways: [
            'O BHB sanguíneo acima de 1.4 mmol/L diagnostica cetose clínica em vacas leiteiras no pós-parto.',
            'O propilenoglicol oral é o tratamento padrão-ouro por fornecer propionato diretamente à gliconeogênese hepática.',
            'Nunca confunda a hiporexia seletiva da cetose com acidose ruminal: na cetose o animal recusa grãos e come feno.'
          ]
        }
      },
      {
        id: 'sec_biochem_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Cetose & Metabolismo Hepático',
        exerciseId: 'ex_biochem_01'
      }
    ]
  }
];

// ==========================================
// 2. SISTEMA TEGUMENTAR, ESQUELÉTICO & LOCOMOTOR
// ==========================================
export const LOCOMOTOR_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_locomotor_01',
    conceptId: 'concept_locomotor_laminitis_hoof',
    type: 'multiple_choice',
    prompt: 'Um cavalo Quarto de Milha com sobrecarga acidental de ração apresenta relutância extrema em caminhar, postura de alívio com os membros anteriores estendidos para frente e apoio sobre os talões, pulso digital palpável com forte intensidade e cascos quentes. Ao exame radiográfico em projeção lateromedial, qual é a alteração biomecânica temida?',
    options: [
      {
        id: 'opt_loco_1',
        text: 'Perda do paralelismo entre a parede dorsal do casco e a terceira falange (P3), caracterizando rotação ou afundamento de P3',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! A degradação enzimática das lâminas suspensórias do casco por metaloproteinases rompe a interdigitação derme-epiderme. A forte tração contínua exercida pelo tendão flexor digital profundo puxa a ponta de P3 para baixo em direção à sola.'
      },
      {
        id: 'opt_loco_2',
        text: 'Luxação completa da articulação do boleto com ruptura do ligamento suspensor',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A postura de apoio nos talões com pulso digital forte nos cascos anteriores é a apresentação clássica da fase aguda de laminite (aguamento), não lesão de ligamento suspensor.'
      },
      {
        id: 'opt_loco_3',
        text: 'Fratura cominutiva transversa de osso sesamoide proximal',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Fraturas sesamóideas costumam ser unilaterais agudas em treinos de corrida com efusão articular marcada, não bilaterais em anteriores após sobrecarga de ração.'
      },
      {
        id: 'opt_loco_4',
        text: 'Osteocondrose dissecante (OCD) da articulação tibiotársica',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A OCD é uma afecção de desenvolvimento articular típica de jarretes ou babos em animais jovens, sem calor no casco nem pulso digital em anteriores.'
      }
    ]
  }
];

export const LOCOMOTOR_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_locomotor_01_laminitis',
    moduleId: 'mod_locomotor',
    title: 'Fisiopatologia da Laminite Equina & Biomecânica do Casco',
    shortDescription: 'Do gatilho endotóxico à rotação da terceira falange: isquemia laminar, metaloproteinases e manejo ortopédico.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_locomotor_laminitis_hoof'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_locomotor_th1',
        type: 'theory',
        title: 'A Arquitetura Laminar do Casco & A Catástrofe da Desconexão',
        contentMarkdown: `### Como a Terceira Falange Fica Suspensa no Casco

O equino apoia seu peso corporal sobre a **terceira falange (P3)**. No entanto, P3 não fica simplesmente "apoiada" na sola. Ela fica **literalmente suspensa** dentro da caixa córnea por um engate microscópico magnífico:
* **Lâminas Dérmicas (vivas e vascularizadas)** que se interdigitam firmemente com as **Lâminas Epidérmicas (córneas e insensíveis)**.
* Essa área de superfície interdigitada equivale a quase 1 metro quadrado por casco!

---

### A Cascata Patológica da Laminite Aguda

$$\\text{Sobrecarga de Amido} \\longrightarrow \\text{Morte de Gram-positivos no Ceco} \\longrightarrow \\text{Absorção de Endotoxinas (LPS)} \\longrightarrow \\text{Ativação de MMPs}$$

1. **Gatilho Sistêmico:** Endotoxinas e exotoxinas ativam **Metaloproteinases de Matriz (MMP-2 e MMP-9)**.
2. **Lise da Membrana Basal:** As MMPs degradam as pontes de hemidesmossomos que unem a epiderme à derme laminar.
3. **Isquemia & Trombose:** Vasoconstrição digital intensa gera hipóxia e dor excruciante (pulso digital martelante).
4. **Força Biomecânica Deformante:** O **Tendão Flexor Digital Profundo (TFDP)**, inserido na face flexora de P3, exerce tração mecânica constante para trás. Como as lâminas dorsais estão desfeitas, a ponta de P3 gira dorsalmente e comprime o plexo solar vascular.

> 📖 Referência Canônica: Adams and Stashak's Lameness in Horses (Baxter, 7ª ed., Wiley-Blackwell) & Equine Surgery (Auer & Stick, 5ª ed., Elsevier).

> 💡 Pérola Clínica / Prova de Residência: A Crioterapia Distal Contínua (imersão dos membros em água e gelo a 0-4 °C até o carpo/jarrete) iniciada antes da perda estrutural das lâminas reduz a taxa metabólica laminar em 50% e é a única intervenção profilática com nível de evidência I para prevenir a ativação de MMPs endotóxicas.

> ⚠️ Alerta Crítico: Jamais force o equino em crise aguda a caminhar! A marcha quadruplica o torque exercido pelo TFDP sobre a terceira falange, acelerando a rotação de P3 e podendo culminar na perfuração irreversível da sola córnea.`
      },
      {
        id: 'sec_locomotor_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Campeão (Quarto de Milha)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Emergência Podal: Manejo Imediato da Fase Aguda de Laminite',
          patient: {
            name: 'Campeão',
            species: 'Equino',
            breed: 'Quarto de Milha',
            age: '6 anos',
            weightKg: 510,
            habitatOrEnvironment: 'Baia com cama de maravalha'
          },
          vitals: {
            heartRateBpm: 64,
            respiratoryRateRpm: 28,
            temperatureCelsius: 38.3,
            mucousMembranes: 'Rosadas com leve linha tóxica avermelhada',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'O tratador esqueceu a porta do depósito aberta e Campeão consumiu cerca de 12 kg de ração concentrada rica em melaço há aproximadamente 14 horas. Agora encontra-se deitado, reluta bravamente em levantar. Quando forçado a ficar em pé, joga os membros anteriores para frente e apoia nos talões (postura de esquiador). Pulso da artéria digital comum muito amplo bilateralmente nos anteriores.',
          exams: [
            {
              category: 'physical_exam',
              title: 'Exame Podológico e Pinça de Casco',
              findings: 'Calor acentuado na pinça dos cascos anteriores. Resposta de dor extrema à compressão com pinça de casco na região da ponta da ranilha e pinça dorsal.',
              abnormalValues: [
                { parameter: 'Pulso Digital Palpável', value: '4+ (Martelante)', reference: '1+ (Discreto)', status: 'critical' },
                { parameter: 'Teste de Pinça de Casco', value: 'Hiperalgia em pinça', reference: 'Negativo', status: 'critical' }
              ]
            },
            {
              category: 'imaging',
              title: 'Radiografia Lateromedial dos Cascos Anteriores',
              findings: 'Espessamento do tecido mole laminar dorsal (18 mm vs normal 14 mm). Ângulo de rotação de P3 incipiente em 3 graus em relação à muralha.',
              abnormalValues: [
                { parameter: 'Ângulo de Rotação de P3', value: '3.5°', reference: '0° (Paralelo)', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Qual é o protocolo emergencial de resgate para impedir a rotação catastrófica de P3?',
          decisionOptions: [
            {
              id: 'opt_dec_loco_1',
              label: 'Crioterapia contínua imersiva dos dígitos em gelo + Flunixina Meglumina + Cama espessa',
              description: 'Manter membros imersos em água e gelo até o boleto por 48h, AINE potente para endotoxemia e elevação de talões para relaxar o TFDP.',
              isOptimal: true,
              consequenceText: 'Conduta perfeita e embasada pela ciência podológica! A crioterapia contínua (temperatura digital < 10°C) causa vasoconstrição fisiológica protetora e reduz drasticamente a atividade das metaloproteinases (MMPs), salvando o aparato laminar da digestão enzimática.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Crioterapia digital intensiva e flunixina em dose antiendotóxica',
                mechanism: 'Inibição termossensível da atividade de metaloproteinases e bloqueio de eicosanoides inflamatórios',
                effect: 'Preservação da membrana basal e das pontes de interdigitação laminar',
                clinicalMeaning: 'Estabilização de P3 sem progressão de rotação, alívio da dor e preservação da vida atlética do equino'
              }
            },
            {
              id: 'opt_dec_loco_2',
              label: 'Exercitar o animal ao trote na guia para ativar a circulação podal',
              description: 'Forçar caminhadas e trote para su supostamente "bombear o sangue estagnado do casco".',
              isOptimal: false,
              consequenceText: 'Desastre iatrogênico fatal! Forçar um equino em fase aguda de laminite a andar rompe imediatamente as poucas lâminas sobreviventes. A força de tração do TFDP arrancará P3 da muralha e a ponta do osso perfurará a sola do casco (sole drop).',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Exercício forçado em lâminas desfeitas e fragilizadas',
                mechanism: 'Impacto mecânico somado à tração violenta do flexor digital profundo',
                effect: 'Ruptura completa do aparelho suspensor de P3 e perfuração de sola',
                clinicalMeaning: 'Necrose por exposição óssea de P3 com necessidade de eutanásia humanitária'
              }
            },
            {
              id: 'opt_dec_loco_3',
              label: 'Administrar apenas antibiótico intramuscular de amplo espectro',
              description: 'Prescrever penicilina com estreptomicina e aguardar sem crioterapia ou AINE.',
              isOptimal: false,
              consequenceText: 'Inadequado. A laminite aguda não é uma infecção bacteriana do casco, mas uma resposta endotóxica e inflamatória sistêmica. Sem crioterapia e sem anti-inflamatório, o aparato suspensor sucumbirá.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Foco exclusivo em antibioticoterapia desnecessária',
                mechanism: 'Ausência de controle da inflamação laminar e da atividade enzimática destrutiva',
                effect: 'Progressão da separação mecânica entre lâminas dérmicas e epidérmicas',
                clinicalMeaning: 'Aumento do ângulo de rotação de P3 e dor crônica incapacitante'
              }
            }
          ],
          learningTakeaways: [
            'A crioterapia distal contínua iniciada precocemente é a única intervenção que comprovadamente impede a falência laminar estrutural.',
            'O tendão flexor digital profundo é o grande vetor de força que traciona P3 para baixo quando a fixação laminar dorsal se rompe.',
            'Nunca movimente um cavalo com dor aguda de laminite: o repouso absoluto com cama espessa e suporte mecânico de ranilha é obrigatório.'
          ]
        }
      },
      {
        id: 'sec_locomotor_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Biomecânica & Laminite',
        exerciseId: 'ex_locomotor_01'
      }
    ]
  }
];

// ==========================================
// 3. SISTEMA NERVOSO & NEUROANATOMIA FUNCIONAL
// ==========================================
export const NERVOUS_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_nervous_01',
    conceptId: 'concept_nervous_neurolocalization',
    type: 'multiple_choice',
    prompt: 'Um cão Dachshund de 5 anos apresenta paraplegia aguda nos membros pélvicos (não se sustenta em pé atrás), enquanto os membros torácicos estão absolutamente normais. Ao teste neurológico, os reflexos patelar e ciático nos membros pélvicos estão exacerbados (hiperreflexia) e o tônus muscular está rígido (hipertonia). Qual é a neurolocalização anatômica da lesão medular?',
    options: [
      {
        id: 'opt_neuro_1',
        text: 'Segmentos medulares T3 - L3 (Neurônio Motor Superior para membros pélvicos)',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! Membros torácicos normais descartam lesões cervicais (C1-C5 e C6-T2). Membros pélvicos com sinais de Neurônio Motor Superior (hiperreflexia e hipertonia) indicam que a intumescência lombossacra (L4-S3) está intacta, situando a compressão nos segmentos toracolombares T3-L3 (típico de hérnia de disco Hansen Tipo I).'
      },
      {
        id: 'opt_neuro_2',
        text: 'Segmentos medulares L4 - S3 (Neurônio Motor Inferior para membros pélvicos)',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Se a lesão fosse em L4-S3 (intumescência lombar), haveria sinais de Neurônio Motor Inferior: hiporreflexia ou arreflexia patelar e flacidez muscular, e não hiperreflexia.'
      },
      {
        id: 'opt_neuro_3',
        text: 'Segmentos medulares C6 - T2 (Intumescência Cervical)',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Uma lesão em C6-T2 causaria sinais de Neurônio Motor Inferior nos membros torácicos (fraqueza flácida dianteira) e NMS nos pélvicos. Aqui os membros anteriores estão normais.'
      },
      {
        id: 'opt_neuro_4',
        text: 'Lesão vestibular periférica unilateral no ouvido interno',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A síndrome vestibular manifesta-se por head tilt (inclinação de cabeça), nistagmo e ataxia proprioceptiva assimétrica, não por paraplegia toracolombar com hiperreflexia.'
      }
    ]
  }
];

export const NERVOUS_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_nervous_01_neurolocalization',
    moduleId: 'mod_nervous',
    title: 'Semiologia Neurológica: Neurolocalização de Lesões Medulares',
    shortDescription: 'Regra de ouro da neuroclínica: diferenciação de Neurônio Motor Superior (NMS) vs. Inferior (NMI) e exame de reflexos espinhais.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_nervous_neurolocalization'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_nervous_th1',
        type: 'theory',
        title: 'A Lógica Sagrada da Neurolocalização Medular',
        contentMarkdown: `### A Regra Fundamental: NMS vs. NMI

A medula espinhal atua como uma via expressa conectando o encéfalo aos músculos periféricos através de dois neurônios fundamentais:
* **Neurônio Motor Superior (NMS):** Localizado no encéfalo e vias descendentes da medula. Sua função é **inibir e modular** o reflexo espinhal para produzir movimentos suaves e coordenados.
* **Neurônio Motor Inferior (NMI):** O corpo celular fica na substância cinzenta da medula (intumescências) e seu axônio vai diretamente até a placa motora do músculo.

| Característica | Lesão de NMS | Lesão de NMI |
|---|---|---|
| **Reflexos Espinhais** | Exacerbados (Hiperreflexia) | Diminuídos ou Ausentes (A/Hiporreflexia) |
| **Tônus Muscular** | Rígido (Hipertonia / Espasticidade) | Flácido (Hipotonia / Flacidez) |
| **Atrofia Muscular** | Lenta por desuso crônico | Rápida e severa por desnervação (10 dias) |

---

### Os 4 Grandes Segmentos Medulares

1. **C1 - C5:** Tetraparesia/plegia com **NMS nos 4 membros** (todos hiper-reflexos e espásticos).
2. **C6 - T2 (Intumescência Cervical):** **NMI nos membros torácicos** (flácidos) e **NMS nos pélvicos** (espásticos).
3. **T3 - L3:** **Membros torácicos 100% normais** e **NMS nos membros pélvicos** (paraplegia espástica, patelar exaltado).
4. **L4 - S3 (Intumescência Lombar):** Membros torácicos normais e **NMI nos membros pélvicos** (paraplegia flácida, reflexos patelar e ciático abolidos).

> 📖 Referência Canônica: de Lahunta's Veterinary Neuroanatomy and Clinical Neurology (de Lahunta, Glass & Kent, 5ª ed., Elsevier) & Handbook of Veterinary Neurology (Lorenz, Coates & Kent).

> 💡 Pérola Clínica / Prova de Residência: Postura de Schiff-Sherrington: hipertonia extensora rígida dos membros torácicos acompanhada de paraplegia flácida dos membros pélvicos. Decorre de lesão medular aguda severa entre T3 e L3 com interrupção dos neurônios inibitórios ascendentes de border celas (células de Cooper-Sherrington). Não confunda com lesão cervical: no Schiff-Sherrington, a locomoção e a força voluntária dos membros torácicos estão preservadas!

> ⚠️ Alerta Crítico: Perda da Dor Profunda (sensibilidade nociceptiva profunda avaliada por pinçamento do periósteo das falanges com pinça hemostática): é o último trato sensitivo a ser perdido nas compressões medulares agudas. Se ausente por mais de 24 a 48 horas, o prognóstico de recuperação motora e continência urinária cai para menos de 5%, exigindo descompressão cirúrgica (hemilaminectomia) emergencial!`
      },
      {
        id: 'sec_nervous_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Salsicha (Dachshund)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Abordagem da Hérnia de Disco Hansen Tipo I Aguda',
          patient: {
            name: 'Salsicha',
            species: 'Canino',
            breed: 'Dachshund (Teckel)',
            age: '5 anos',
            weightKg: 8.5,
            habitatOrEnvironment: 'Apartamento'
          },
          vitals: {
            heartRateBpm: 130,
            respiratoryRateRpm: 32,
            temperatureCelsius: 38.8,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Tutor relata que o animal pulou do sofá pela manhã e gritou de dor. Desde então, perdeu a capacidade de apoiar e movimentar as patas traseiras (arrastando os membros pélvicos). As patas dianteiras estão perfeitas. O animal não urinou espontaneamente desde o evento.',
          exams: [
            {
              category: 'physical_exam',
              title: 'Exame Neurológico Sistemático',
              findings: 'Membros torácicos com propriocepção e reflexo extensor radial normais. Membros pélvicos com propriocepção ausente, reflexo patelar exaltado (3+/4), tônus extensor aumentado e bexiga túrgida de difícil compressão manual (bexiga de NMS com esfíncter hiperativo). Dor intensa na palpação da coluna toracolombar em T12-L1. Dor profunda preservada (responde com choro e tentativa de mordedura à compressão do periósteo do dígito).',
              abnormalValues: [
                { parameter: 'Reflexo Patelar Pélvico', value: '3+ (Hiperreflexo)', reference: '2+ (Normal)', status: 'high' },
                { parameter: 'Sensibilidade à Dor Profunda', value: 'Presente', reference: 'Presente', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Qual é o diagnóstico neurolocalizado e a conduta recomendada para Salsicha?',
          decisionOptions: [
            {
              id: 'opt_dec_neuro_1',
              label: 'Neurolocalização T3-L3: Tomografia de urgência e descompressão cirúrgica (Hemilaminectomia)',
              description: 'Lesão aguda compressiva de NMS em paciente com dor profunda presente. Encaminhar para TC/RM e descompressão cirúrgica de urgência para salvar a medula.',
              isOptimal: true,
              consequenceText: 'Decisão impecável! A presença de dor profunda indica que os tratos nociceptivos espinhais mais profundos e resistentes ainda estão viáveis, conferindo prognóstico cirúrgico excelente (> 90% de chance de deambulação se operado nas primeiras 24-48h).',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Descompressão cirúrgica precoce por hemilaminectomia toracolombar',
                mechanism: 'Remoção do material discal extruso que comprimia o parênquima medular',
                effect: 'Restauração da perfusão microvascular espinhal e da condução axônica nos tratos descendentes',
                clinicalMeaning: 'Recuperação motora voluntária, marcha independente e controle miccional completo'
              }
            },
            {
              id: 'opt_dec_neuro_2',
              label: 'Administrar corticosteroide em megadose (Succinato de Metilprednisolona) e repouso',
              description: 'Tratamento com alta dose de corticoide sem imagem nem cirurgia.',
              isOptimal: false,
              consequenceText: 'Conduta contraindicada e perigosa! Ensaios clínicos demonstraram que a megadose de metilprednisolona não traz benefício na recuperação funcional e causa ulcerações gastrintestinais severas, hemorragia digestiva e perfuração duodenal.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Megadose de corticoide associada à ausência de descompressão mecânica',
                mechanism: 'Lesão isquêmica contínua pela massa discal somada à inibição de prostaglandinas protetoras gástricas',
                effect: 'Persistência da compressão medular e desenvolvimento de úlcera gástrica sangrante',
                clinicalMeaning: 'Melena, hematêmese, anemia aguda e perda permanente da função motora'
              }
            },
            {
              id: 'opt_dec_neuro_3',
              label: 'Esperar 7 dias para ver se a inflamação regride espontaneamente',
              description: 'Manter apenas analgesia e esperar resolução clínica sem investigar compressão.',
              isOptimal: false,
              consequenceText: 'Conduta negligente. A compressão mecânica ativa continuará a causar isquemia e apoptose neuronal. Se o paciente perder a dor profunda durante a espera, a chance de recuperação despenca para menos de 50%.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Atraso na intervenção em lesão compressiva ativa',
                mechanism: 'Hipóxia sustentada no parênquima medular com degeneração walleriana',
                effect: 'Progressão para mielomalácia e perda da dor profunda',
                clinicalMeaning: 'Paraplegia permanente com incontinência urinária definitiva'
              }
            }
          ],
          learningTakeaways: [
            'Membros anteriores normais + membros pélvicos espásticos e hiper-reflexos = lesão em T3-L3.',
            'A presença de dor profunda é o divisor de águas prognóstico em afecções medulares agudas.',
            'Megadoses de corticoides são contraindicadas na mielopatia compressiva devido ao risco maciço de perfuração gástrica.'
          ]
        }
      },
      {
        id: 'sec_nervous_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Exame Neurológico & Segmentos Medulares',
        exerciseId: 'ex_nervous_01'
      }
    ]
  }
];

// ==========================================
// 4. DIGESTÓRIO & GLÂNDULAS ANEXAS COMPARADAS
// ==========================================
export const DIGESTIVE_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_digestive_01',
    conceptId: 'concept_digestive_rumen_microbiome',
    type: 'multiple_choice',
    prompt: 'Qual é o principal tampão fisiológico que impede a queda abrupta do pH ruminal durante a digestão normal de forragens em ruminantes e qual a sua fonte primária?',
    options: [
      {
        id: 'opt_dig_1',
        text: 'Bicarbonato de sódio e fosfatos secretados em grande volume pela saliva durante a mastigação e ruminação',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! Uma vaca leiteira adulta produz entre 150 e 200 litros de saliva alcalina por dia rica em bicarbonato (NaHCO3) e fosfatos, que neutralizam continuamente a enorme quantidade de ácidos graxos voláteis gerados pela fermentação ruminal.'
      },
      {
        id: 'opt_dig_2',
        text: 'Secreção de ácido clorídrico e pepsina pelas células parietais do rúmen',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O rúmen, retículo e omaso são pré-estômagos revestidos por epitélio estratificado pavimentoso não-glandular (não produzem secreções gástricas nem HCl; isso ocorre apenas no abomaso).'
      },
      {
        id: 'opt_dig_3',
        text: 'Bile secretada diretamente pelo ducto colédoco no interior do retículo',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A bile é desembocada no duodeno cranial através da papila duodenal, atuando na emulsificação de lipídios no intestino delgado, e jamais no retículo-rúmen.'
      },
      {
        id: 'opt_dig_4',
        text: 'Absorção passiva de água no ceco e cólon transverso',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A absorção no intestino grosso atua na conservação hidroeletrolítica terminal, sem capacidade de tamponamento do ecossistema pré-gástrico.'
      }
    ]
  }
];

export const DIGESTIVE_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_digestive_01_rumen_fermentation',
    moduleId: 'mod_digestive',
    title: 'Fisiologia Digestiva Comparada: O Ecossistema do Rúmen',
    shortDescription: 'Simbiose ruminal, dinâmica de fermentação de celulose vs. amido, tampão salivar e absorção epitelial de AGVs.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_digestive_rumen_microbiome'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_digestive_th1',
        type: 'theory',
        title: 'A Cuba Fermentativa Pré-Gástrica dos Ruminantes',
        contentMarkdown: `### O Ruminante Alimenta Bactérias; As Bactérias Alimentam o Ruminante

O rúmen é uma imensa câmara de fermentação anaeróbica que abriga uma microbiota densa ($10^{10}$ bactérias/mL, $10^6$ protozoários ciliados e fungos celulolíticos).

Os mamíferos não possuem genes para codificar a enzima **celulase**. São as bactérias ruminais (ex: *Fibrobacter succinogenes*, *Ruminococcus albus*) que quebram as ligações $\\beta\\text{-1,4-glicosídicas}$ da celulose e hemicelulose vegetal.

---

### A Tríade dos Ácidos Graxos Voláteis (AGVs)

A quebra da fibra e do amido resulta na produção de três ácidos principais que são absorvidos pelas **papilas ruminais**:
1. **Acetato ($C_2$):** Representa 60-70% dos AGVs em dietas com forragem. Precursor da síntese de gordura da carcaça e do leite.
2. **Propionato ($C_3$):** Representa 15-30%. Principal precursor da gliconeogênese no fígado.
3. **Butirato ($C_4$):** Representa 10-15%. Metabolizado pelo próprio epitélio ruminal em beta-hidroxibutirato para fornecer energia ao crescimento e manutenção das papilas ruminais.

> 📖 Referência Canônica: Cunningham's Textbook of Veterinary Physiology (Klein, 6ª ed., Elsevier) & Dukes' Physiology of Domestic Animals (Reece et al., 13ª ed., Wiley).

> 💡 Pérola Clínica / Prova de Residência: Relação Acetato:Propionato no Rúmen: Em dietas volumosas sadias, a proporção de AGVs mantém relação Acetato:Propionato > 3:1. Quando o excesso de carboidratos solúveis (amido de milho) derruba a relação para < 2.2:1, ocorre a Síndrome da Queda de Gordura do Leite (Milk Fat Depression) devido à formação de isômeros trans-10 de ácidos graxos que inibem a lipogênese mamária.

> ⚠️ Alerta Crítico: Transições bruscas para dietas ricas em grãos provocam proliferação explosiva de Streptococcus bovis e síntese maciça de ácido D-lático. O pH ruminal cai abaixo de 5.0, lisando bactérias celulolíticas e protozoários ciliados, gerando rumenites químicas ulcerativas, desidratação osmótica hiperaguda e translocação bacteriana para a veia porta com abscessos hepáticos secundários por Fusobacterium necrophorum.`
      },
      {
        id: 'sec_digestive_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Touro Brutus (Nelore)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Acidose Ruminal Lática Aguda por Sobrecarga de Grãos',
          patient: {
            name: 'Brutus',
            species: 'Bovino',
            breed: 'Nelore P.O.',
            age: '3 anos',
            weightKg: 580,
            habitatOrEnvironment: 'Piquete de confinamento de terminação'
          },
          vitals: {
            heartRateBpm: 96,
            respiratoryRateRpm: 36,
            temperatureCelsius: 37.8,
            mucousMembranes: 'Congestas com linha tóxica avermelhada',
            capillaryRefillTimeSec: 3.0
          },
          anamnesis: 'Brutus arrombou a porteira do silo de grãos de milho moído e ingeriu aproximadamente 15 kg de concentrado há 12 horas. O animal apresenta diarreia profusa amarelada, aquosa e de odor ácido acentuado. Rúmen completamente atônico (0 movimentos/3 min), com sensação de "chapinhar" de líquido à palpação profunda na fossa paralombar esquerda.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Análise do Fluido Ruminal (Sondagem Orogástrica)',
              findings: 'Líquido ruminal de coloração leitosa/amarelada, odor azedo característico e ausência de protozoários ciliados móveis à microscopia óptica.',
              abnormalValues: [
                { parameter: 'pH do Suco Ruminal', value: '4.8', reference: '6.2 - 6.8', status: 'critical' },
                { parameter: 'Motilidade de Protozoários Ciliados', value: '0% (Morte maciça)', reference: '> 80% móveis', status: 'critical' },
                { parameter: 'L-lactato Sérico', value: '6.8 mmol/L', reference: '< 1.5 mmol/L', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Qual é a estratégia emergencial para salvar o ecossistema ruminal e reverter o choque endotóxico de Brutus?',
          decisionOptions: [
            {
              id: 'opt_dec_dig_1',
              label: 'Lavagem ruminal por sonda orogástrica + Transfaunação ruminal com suco de doador sadio + Bicarbonato IV',
              description: 'Remover o amido fermentado e ácido lático residual, transfundir microbiota ativa e corrigir a desidratação e acidose sistêmica.',
              isOptimal: true,
              consequenceText: 'Conduta magistral! A lavagem ruminal remove o substrato tóxico antes que ele continue a ser fermentado por Streptococcus bovis. A transfaunação com 5 a 10 litros de fluido ruminal fresco de um doador sadio repovoa imediatamente a flora simbiótica e os protozoários ciliados vitais.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Esvaziamento do amido lático e transfaunação de suco ruminal sadio',
                mechanism: 'Restauração do pH ruminal para > 6.0 e reintrodução de bactérias e protozoários celulolíticos',
                effect: 'Cessação da absorção de ácido D-lático e reversão da desidratação osmótica intraluminal',
                clinicalMeaning: 'Retorno da motilidade ruminal normal, cicatrização do epitélio ruminal e prevenção de abscesso hepático metastático'
              }
            },
            {
              id: 'opt_dec_dig_2',
              label: 'Administrar apenas purgante salino de sulfato de magnésio e liberar para pasto',
              description: 'Tentar fazer o amido passar mais rápido pelo trato gastrointestinal.',
              isOptimal: false,
              consequenceText: 'Conduta desastrosa! O sulfato de magnésio é um laxativo hiperosmótico. Em um animal com acidose que já está severamente desidratado (com líquido sequestrado no rúmen), isso causará choque hipovolêmico fulminante.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Administração de laxante salino hipertônico em rúmen já hipertônico',
                mechanism: 'Atração maciça de água do espaço vascular para o lúmen intestinal',
                effect: 'Colapso hemodinâmico, hipotensão refratária e insuficiência renal aguda pré-renal',
                clinicalMeaning: 'Morte do animal em choque hipovolêmico e acidótico'
              }
            },
            {
              id: 'opt_dec_dig_3',
              label: 'Fornecer apenas feno seco e água à vontade no cocho',
              description: 'Aguardar o animal se alimentar sozinho de fibra longa.',
              isOptimal: false,
              consequenceText: 'Inadequado. Com pH 4.8, o epitélio ruminal está sofrendo queimação química (rumenite lática) e a motilidade está paralisada. Sem lavagem e sem correção da acidose sistêmica, o quadro evoluirá para septicemia.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Abordagem expectante em acidose química severa',
                mechanism: 'Erosão da barreira mucosal ruminal com translocação bacteriana (Fusobacterium necrophorum)',
                effect: 'Migração bacteriana pela circulação portal para o fígado',
                clinicalMeaning: 'Formação de múltiplos abscessos hepáticos e endocardite bacteriana em 30-60 dias'
              }
            }
          ],
          learningTakeaways: [
            'O pH ruminal abaixo de 5.0 mata os protozoários ciliados e causa rumenite química descolativa.',
            'A transfaunação de suco ruminal de um animal doador saudável é a ferramenta terapêutica mais eficaz para restabelecer a digestão pré-gástrica.',
            'O sequestro osmótico de água para dentro do rúmen gera desidratação sistêmica severa e choque.'
          ]
        }
      },
      {
        id: 'sec_digestive_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Fermentação Ruminal & Acidose Lática',
        exerciseId: 'ex_digestive_01'
      }
    ]
  }
];

// ==========================================
// 5. SISTEMA GENITURINÁRIO & FISIOLOGIA RENAL
// ==========================================
export const UROGENITAL_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_urogenital_01',
    conceptId: 'concept_urogenital_gfr_renal_failure',
    type: 'multiple_choice',
    prompt: 'Um gato macho castrado de 4 anos apresenta estrangúria (esforço doloroso para urinar) há 36 horas. Na palpação abdominal, a bexiga está extremamente distendida, firme e do tamanho de uma laranja (obstrução uretral mecânica por plugue mucoso). O traçado de ECG na admissão revela bradicardia (FC 90 bpm), ondas T pontiagudas e simétricas ("em tenda"), ausência de ondas P e alargamento do complexo QRS. Qual é o distúrbio eletrolítico iminente de risco de morte?',
    options: [
      {
        id: 'opt_uro_1',
        text: 'Hipercalemia severa (K+ > 7.5 mEq/L) com toxicidade miocárdica despolarizante aguda',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A incapacidade de excretar urina retém potássio no organismo. Níveis de K+ acima de 7-8 mEq/L despolarizam o potencial de membrana das células do miocárdio, inativando canais de sódio, gerando achatamento e perda de onda P, ondas T apiculadas e risco iminente de parada cardiorrespiratória em assistolia.'
      },
      {
        id: 'opt_uro_2',
        text: 'Hipocalemia profunda com hiperpolarização das fibras de Purkinje',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A obstrução pós-renal impede a excreção tubular de potássio, levando a hipercalemia (acúmulo) e nunca à hipocalemia.'
      },
      {
        id: 'opt_uro_3',
        text: 'Hipocalcemia puerperal aguda por tetania de lactação',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O paciente é um felino macho castrado obstruído, não uma fêmea no pico de lactação.'
      },
      {
        id: 'opt_uro_4',
        text: 'Hipercloremia isolada com alcalose metabólica respiratória',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A retenção urinária produz acidose metabólica uremica e retenção de sulfatos e fosfatos, não alcalose.'
      }
    ]
  }
];

export const UROGENITAL_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_urogenital_01_gfr_failure',
    moduleId: 'mod_urogenital',
    title: 'Fisiologia Renal: Filtração Glomerular & Emergência Pós-Renal',
    shortDescription: 'Taxa de Filtração Glomerular (TFG), azotemia pré-renal vs. renal vs. pós-renal e manejo da hipercalemia obstrutiva.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_urogenital_gfr_renal_failure'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_urogenital_th1',
        type: 'theory',
        title: 'A Dinâmica da TFG & A Diferenciação das Três Azotemias',
        contentMarkdown: `### O Glomérulo Renal & A Hemodinâmica de Filtração

A **Taxa de Filtração Glomerular (TFG)** depende da pressão hidrostática nos capilares glomerulares, finamente controlada por:
* **Arteríola Aferente:** Vasodilatada por prostaglandinas ($PGE_2$) para manter o fluxo plasmático renal.
* **Arteríola Eferente:** Vasoconstringida por Angiotensina II para manter a pressão de filtração transglomerular.

---

### Diagnóstico Diferencial de Azotemia (Aumento de Ureia e Creatinina)

1. **Azotemia Pré-Renal:** Hipovolemia ou desidratação severa. Os rins estão íntegros, mas não recebem perfusão suficiente. A densidade urinária é **alta e hiperconcentrada** ($> 1.030$ em cães, $> 1.035$ em gatos).
2. **Azotemia Renal Primária:** Perda de $\\ge 75\\%$ dos néfrons funcionais. Os rins perderam a capacidade de concentrar a urina. Densidade urinária **isostenúrica (1.008 a 1.012)**.
3. **Azotemia Pós-Renal:** Obstrução mecânica do fluxo urinário (cálculos, plugues uretrais) ou ruptura de vias urinárias (uroperitônio). A pressão retrógrada anula a filtração glomerular e bloqueia a excreção de potássio ($K^+$) e hidrogênio ($H^+$).

> 📖 Referência Canônica: Fluid, Electrolyte, and Acid-Base Disorders in Small Animal Practice (DiBartola, 5ª ed., Elsevier) & Ettinger's Textbook of Veterinary Internal Medicine (9ª ed., 2024).

> 💡 Pérola Clínica / Emergência: A Tríade Eletrocardiográfica da Hipercalemia Felina (K⁺ > 7.5 mEq/L): 1. Ondas T apiculadas, altas e simétricas; 2. Prolongamento do intervalo P-R e achatamento progressivo da onda P até seu desaparecimento (parada atrial com condução sino-ventricular); 3. Alargamento acentuado do complexo QRS antecedendo assistolia ou fibrilação ventricular. O Gluconato de Cálcio 10% IV (0.5 a 1.0 mL/kg lento em 5-10 min sob monitorização ECG) antagoniza o efeito cardiotóxico em menos de 5 minutos ao estabilizar o potencial de limiar de membrana, sem alterar o nível sérico de potássio.

> ⚠️ Alerta Crítico: O uso inadvertido de Anti-inflamatórios Não-Esteroidais (AINEs como meloxicam ou cetoprofeno) em animais hipovolêmicos ou obstruídos bloqueia as prostaglandinas renais vasodilatadoras (PGE₂ e PGI₂) na arteríola aferente, precipitando necrose de papila renal e colapso irreversível da taxa de filtração glomerular.`
      },
      {
        id: 'sec_urogenital_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Tom (Felino Doméstico)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Desobstrução Uretral Felina & Cardioproteção na Hipercalemia',
          patient: {
            name: 'Tom',
            species: 'Felino',
            breed: 'Shorthair (SRD)',
            age: '4 anos',
            weightKg: 4.8,
            habitatOrEnvironment: 'Casa interna exclusivamente'
          },
          vitals: {
            heartRateBpm: 92,
            respiratoryRateRpm: 22,
            temperatureCelsius: 36.4,
            mucousMembranes: 'Pálidas e frias',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'Tutor notou Tom entrando na caixa de areia repetidas vezes nas últimas 24 horas, vocalizando de dor ao tentar urinar e lambendo excessivamente a ponta do pênis. Agora encontra-se apático e hipotérmico. À palpação, bexiga rígida, repleta e dolorosa.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Eletrólitos e Gasometria em Sangue Total',
              findings: 'Avaliação laboratorial rápida antes de qualquer sedação para procedimento.',
              abnormalValues: [
                { parameter: 'Potássio Sérico (K+)', value: '8.4 mEq/L', reference: '3.5 - 5.2 mEq/L', status: 'critical' },
                { parameter: 'Creatinina Sérica', value: '7.8 mg/dL', reference: '0.8 - 1.8 mg/dL', status: 'critical' },
                { parameter: 'Ureia Sérica', value: '180 mg/dL', reference: '30 - 65 mg/dL', status: 'critical' },
                { parameter: 'pH Sanguíneo', value: '7.12', reference: '7.35 - 7.45', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com FC 92 bpm e K+ de 8.4 mEq/L, qual é a prioridade médica ABSOLUTA antes de anestesiar para sondagem?',
          decisionOptions: [
            {
              id: 'opt_dec_uro_1',
              label: 'Gluconato de Cálcio 10% IV lento (0.5 a 1.0 mL/kg) com monitorização eletrocardiográfica',
              description: 'Cardioproteção imediata: o cálcio antagoniza o efeito tóxico do potássio na membrana do cardiomiócito sem alterar a concentração sérica de K+.',
              isOptimal: true,
              consequenceText: 'Conduta salvadora de vidas! O cálcio intravenoso restaura o limiar de potencial de ação da membrana celular cardíaca, neutralizando o risco de fibrilação ventricular ou assistolia em minutos. Somente após estabilizar o ritmo cardíaco é seguro sedar e desobstruir a uretra com sonda tomcat.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Administração intravenosa lenta de Gluconato de Cálcio a 10%',
                mechanism: 'Aumento da voltagem limiar do potencial de ação do miocárdio, neutralizando o efeito despolarizante do K+',
                effect: 'Restauração da condução atrioventricular e normalização da frequência cardíaca',
                clinicalMeaning: 'Prevenção de parada cardíaca súbita e permissão segura para sedação e desobstrução mecânica'
              }
            },
            {
              id: 'opt_dec_uro_2',
              label: 'Administrar anestesia geral com Cetamina e Xilazina para passar a sonda imediatamente',
              description: 'Priorizar a passagem imediata da sonda sob anestesia dissociativa.',
              isOptimal: false,
              consequenceText: 'Erro médico fatal! Pacientes felinos com hipercalemia extrema e bradicardia severa sofrem parada cardiorrespiratória imediata se receberem xilazina ou cetamina sem estabilização prévia do potássio.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Indução anestésica em paciente cardiopata por hipercalemia descompensada',
                mechanism: 'Depressão hemodinâmica sobreposta à inativação miocárdica de canais de sódio',
                effect: 'Assistolia ventricular fulminante no início da sedação',
                clinicalMeaning: 'Óbito do paciente na mesa de exame'
              }
            },
            {
              id: 'opt_dec_uro_3',
              label: 'Apenas aplicar diurético Furosemida na veia para forçar o rim a urinar',
              description: 'Tentar vencer a obstrução química estimulando o néfron a produzir mais volume.',
              isOptimal: false,
              consequenceText: 'Contraindicação absoluta! Se a uretra está mecanicamente ocluída por um tampão de muco e cristais, aumentar a produção de urina com furosemida aumentará brutalmente a pressão intravesical, causando ruptura da bexiga e peritonite urinária.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de diurético de alça em trato urinário completamente obstruído',
                mechanism: 'Aumento súbito da produção de urina contra uma saída mecânica fechada',
                effect: 'Sobredistensão extrema com necrose de parede vesical e ruptura',
                clinicalMeaning: 'Uroperitônio, colapso séptico-químico e peritonite aguda grave'
              }
            }
          ],
          learningTakeaways: [
            'Na obstrução uretral felina com hipercalemia grave, a cardioproteção com Gluconato de Cálcio antecede a própria desobstrução.',
            'O Gluconato de Cálcio não reduz o nível de potássio: ele protege o coração elevando o potencial limiar da célula cardíaca.',
            'Diuréticos são formalmente proibidos enquanto houver obstrução física da uretra.'
          ]
        }
      },
      {
        id: 'sec_urogenital_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Fisiologia Renal & Hipercalemia',
        exerciseId: 'ex_urogenital_01'
      }
    ]
  }
];

// ==========================================
// 6. BACTERIOLOGIA & IMUNOLOGIA VETERINÁRIA
// ==========================================
export const BACTERIOLOGY_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_bacteriology_01',
    conceptId: 'concept_bacteriology_antibiogram_immunity',
    type: 'multiple_choice',
    prompt: 'Ao realizar a coloração de Gram a partir de uma secreção purulenta de piodermite profunda canina, o veterinário visualiza ao microscópio sob imersão (1000x) cocos agrupados em cachos corados em roxo/azul-escuro. Qual é a interpretação bacteriana e o mecanismo de retenção do corante?',
    options: [
      {
        id: 'opt_bact_1',
        text: 'Bactérias Gram-positivas (provável Staphylococcus pseudintermedius), cuja parede espessa de peptideoglicano retém o complexo cristal violeta-iodo',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! As bactérias Gram-positivas possuem uma parede celular espessa e homogênea de peptideoglicano (mureína) sem membrana externa. Durante a descoloração com álcool-acetona, a parede se desidrata e encolhe seus poros, retendo o cristal violeta e impedindo a entrada da fucsina/safranina secundária.'
      },
      {
        id: 'opt_bact_2',
        text: 'Bactérias Gram-negativas (provável Pseudomonas aeruginosa) com dupla membrana fosfolipídica',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. As bactérias Gram-negativas coram-se em vermelho/rosa porque sua fina camada de peptideoglicano perde o cristal violeta durante a lavagem alcoólica e absorve a safranina de contraste.'
      },
      {
        id: 'opt_bact_3',
        text: 'Micobactérias álcool-ácido resistentes (BAAR) com parede de ácidos micólicos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Micobactérias não coram confiavelmente pela técnica de Gram devido ao alto teor de ceras e ácidos micólicos na parede, exigindo coloração especial de Ziehl-Neelsen.'
      },
      {
        id: 'opt_bact_4',
        text: 'Esporos bacterianos livres de Clostridium tetani resistentes ao calor',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Os esporos são estruturas refratárias que aparecem como áreas claras não coradas no Gram, necessitando de métodos como Wirtz-Conklin.'
      }
    ]
  }
];

export const BACTERIOLOGY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_bacteriology_01_antibiogram',
    moduleId: 'mod_bacteriology_immunology',
    title: 'Bacteriologia Clínica: Parede Celular, Coloração de Gram & Antibiograma',
    shortDescription: 'Mecanismos de parede celular de Gram-positivos vs. Gram-negativos, teste de Kirby-Bauer e combate a superbactérias.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_bacteriology_antibiogram_immunity'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_bacteriology_th1',
        type: 'theory',
        title: 'A Parede Celular Bacteriana como Alvo Farmacológico e Diagnóstico',
        contentMarkdown: `### A Diferença Estrutural que Decide a Terapêutica

A resposta aos antibióticos depende primariamente da arquitetura do envoltório bacteriano:
* **Gram-Positivos (Roxo):** Parede com até 40 camadas de **peptideoglicano** e ácidos teicoicos/lipoteicoicos. São tipicamente mais sensíveis a penicilinas e cefalosporinas que inibem as enzimas transpeptidases (PBPs).
* **Gram-Negativos (Vermelho/Rosa):** Possuem uma camada delgada de peptideoglicano protegida externamente por uma **membrana externa assimétrica** contendo **Lipopolissacarídeo (LPS / Endotoxina)** e porinas. Essa barreira impede a entrada de muitas moléculas hidrofóbicas.

---

### O Princípio do Antibiograma (CIM vs. Kirby-Bauer)

O antibiograma por disco-difusão (Kirby-Bauer) mede o halo de inibição em ágar Mueller-Hinton. 

> 📖 Referência Canônica: Veterinary Microbiology and Microbial Disease (Quinn et al., 2ª ed., Wiley-Blackwell) & Clinical Veterinary Microbiology (Markey et al., Elsevier).

> 🔬 Histopatologia & Lâmina: Etapas da Coloração de Gram: 1. Cristal violeta (corante básico primário); 2. Solução de Lugol (mordente que forma o complexo insolúvel iodo-cristal violeta); 3. Descoloração com álcool-acetona: nos Gram-positivos, a espessa parede de peptideoglicano desidrata e fecha os poros retendo o roxo; nos Gram-negativos, o solvente dissolve os lipídeos da membrana externa lavando o corante; 4. Fucsina ou Safranina (contracorante) que cora os Gram-negativos em rosa/vermelho.

> 💡 Pérola Clínica / Prova de Residência: O maior halo no disco de Kirby-Bauer nem sempre é o melhor fármaco no animal vivo! Deve-se analisar a Concentração Inibitória Mínima (CIM) em relação à farmacocinética tecidual do fármaco (capacidade de penetrar próstata, osso, epitélio alveolar ou atravessar a barreira hematoencefálica).

> ⚠️ Alerta Crítico / One Health: O uso empírico e indiscriminado de fluoroquinolonas (Enrofloxacino) ou cefalosporinas de amplo espectro em infecções dérmicas simples seleciona cepas multirresistentes de MRSP (Staphylococcus pseudintermedius resistente à meticilina portador do gene mecA) e enterobactérias produtoras de betalactamases de espectro estendido (ESBL), transferíveis entre animais e tutores.`
      },
      {
        id: 'sec_bacteriology_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Spike (Bulldog Francês)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo de Piodermite Recidivante por Staphylococcus Resistente',
          patient: {
            name: 'Spike',
            species: 'Canino',
            breed: 'Bulldog Francês',
            age: '3 anos',
            weightKg: 13.2,
            habitatOrEnvironment: 'Casa com acesso a gramado'
          },
          vitals: {
            heartRateBpm: 110,
            respiratoryRateRpm: 24,
            temperatureCelsius: 38.9,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Spike vem sendo tratado há 6 meses com múltiplos cursos empíricos de cefalexina e amoxicilina com clavulanato para piodermite folicular. As lesões agora pioraram: pústulas coalescentes, colaretes epidérmicos e crostas hemorrágicas com exsudato purulento fétido no dorso e abdômen.',
          exams: [
            {
              category: 'microbiology',
              title: 'Cultura Bacteriana com Antibiograma (TSA)',
              findings: 'Isolamento de Staphylococcus pseudintermedius resistente à meticilina (MRSP).',
              abnormalValues: [
                { parameter: 'Cefalexina', value: 'Resistente (CIM > 16)', reference: 'Sensível', status: 'critical' },
                { parameter: 'Amoxicilina + Clavulanato', value: 'Resistente (CIM > 32)', reference: 'Sensível', status: 'critical' },
                { parameter: 'Doxiciclina', value: 'Sensível (Halo 26 mm)', reference: 'Sensível', status: 'low' },
                { parameter: 'Clindamicina', value: 'Resistente (Induzida)', reference: 'Sensível', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Diante de um quadro de MRSP em cão atópico, qual é a melhor conduta terapêutica?',
          decisionOptions: [
            {
              id: 'opt_dec_bact_1',
              label: 'Terapia tópica intensiva com clorexidina 3-4% banhos 3x/semana + Doxiciclina oral guiada pelo antibiograma',
              description: 'Combinar descolonização tópica com antisséptico para quebrar biofilme e administrar apenas o antimicrobiano com sensibilidade comprovada.',
              isOptimal: true,
              consequenceText: 'Excelente conduta médica alinhada ao One Health! A terapia tópica com clorexidina remove fisicamente a carga bacteriana e o biofilme cutâneo sem induzir resistência gênica mediada por mecA. O uso da Doxiciclina respeita rigorosamente a sensibilidade do laudo.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Uso de antibiótico estritamente guiado por cultura somado à antissepsia tópica',
                mechanism: 'Inibição ribossomal da síntese proteica bacteriana e rompimento de membrana bacteriana pela clorexidina',
                effect: 'Eliminação da infecção estafilocócica sem pressionar cepas multirresistentes',
                clinicalMeaning: 'Cicatrização das pústulas, reepitelização cutânea e prevenção de disseminação zoonótica de MRSP'
              }
            },
            {
              id: 'opt_dec_bact_2',
              label: 'Aumentar a dose da cefalexina para o dobro e adicionar enrofloxacino empiricamente',
              description: 'Dobrar dose de betalactâmico e associar fluoroquinolona sem checar o laudo.',
              isOptimal: false,
              consequenceText: 'Conduta desastrosa! Cepas MRSP possuem o gene mecA que altera a proteína ligadora de penicilina (PBP2a), tornando a bactéria resistente a TODOS os betalactâmicos (não importa a dose). Além disso, fluoroquinolonas induzem mutações de resistência rápida.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso empírico de betalactâmico em bactéria com gene mecA mutado',
                mechanism: 'Ausência total de afinidade farmacológica pela PBP2a modificada',
                effect: 'Proliferação descontrolada do patógeno e destruição da barreira cutânea',
                clinicalMeaning: 'Evolução da piodermite para furunculose profunda com cicatrizes e bacteremia'
              }
            },
            {
              id: 'opt_dec_bact_3',
              label: 'Suspender todos os remédios e aplicar corticoide oral para cessar a coceira',
              description: 'Focar na supressão do prurido ignorando a infecção bacteriana ativa.',
              isOptimal: false,
              consequenceText: 'Erro grave. O corticoide suprime a imunidade inata dos neutrófilos, transformando uma infecção cutânea em celulite infecciosa generalizada.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Imunossupressão iatrogênica em sítio bacteriano ativo',
                mechanism: 'Inibição da quimiotaxia e fagocitose neutrofílica',
                effect: 'Invasão bacteriana profunda nos tecidos subcutâneos',
                clinicalMeaning: 'Formação de fístulas drenantes hemopurulentas e febre séptica'
              }
            }
          ],
          learningTakeaways: [
            'Bactérias Gram-positivas retêm o cristal violeta devido à camada espessa de peptideoglicano.',
            'Cepa MRSP é resistente a TODOS os betalactâmicos (cefalexina, amoxicilina, ceftriaxona) devido à mutação mecA na PBP2a.',
            'O tratamento tópico antisséptico é a pedra angular contra superbactérias dermatológicas.'
          ]
        }
      },
      {
        id: 'sec_bacteriology_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Parede Bacteriana & Resistência Antimicrobiana',
        exerciseId: 'ex_bacteriology_01'
      }
    ]
  }
];

// ==========================================
// 7. VIROLOGIA & MICOLOGIA VETERINÁRIA
// ==========================================
export const VIROLOGY_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_virology_01',
    conceptId: 'concept_virology_viral_tropism_fungal',
    type: 'multiple_choice',
    prompt: 'Por que o Parvovírus Canino (CPV-2) tem tropismo específico pelas células das criptas intestinais e pela medula óssea, poupando os enterócitos maduros do topo das vilosidades?',
    options: [
      {
        id: 'opt_vir_1',
        text: 'Porque é um vírus de DNA fita simples sem envelope que necessita de células em altíssima taxa de replicação mitótica (fase S) para utilizar a DNA polimerase do hospedeiro',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O Parvovírus não codifica sua própria polimerase de DNA e necessita estritamente da maquinaria de replicação de células em rápida divisão mitótica celular (fase S do ciclo). As criptas intestinais de Lieberkühn e as linhagens hematopoiéticas da medula óssea são os tecidos mais mitóticos do corpo, explicando a diarreia hemorrágica por descamação de criptas e a panleucopenia aguda.'
      },
      {
        id: 'opt_vir_2',
        text: 'Porque ele infecta apenas células quiescentes em fase G0 do ciclo celular',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Células em fase G0 não realizam replicação de DNA e são refratárias à proliferação do parvovírus.'
      },
      {
        id: 'opt_vir_3',
        text: 'Porque ele secreta exotoxinas proteolíticas diretamente no lúmen do cólon',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Vírus não possuem metabolismo autônomo nem secretam toxinas enzimáticas como bactérias.'
      },
      {
        id: 'opt_vir_4',
        text: 'Porque sua cápsula lipídica se funde apenas à queratina madura da epiderme',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O parvovírus é um vírus não-envelopado (sem membrana lipídica), o que confere enorme resistência ambiental a desinfetantes comuns.'
      }
    ]
  }
];

export const VIROLOGY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_virology_01_viral_tropism',
    moduleId: 'mod_virology_mycology',
    title: 'Virologia Veterinária: Tropismo Celular & Parvovirose Canina',
    shortDescription: 'Patogênese molecular do Parvovírus (CPV-2), destruição de criptas de Lieberkühn, panleucopenia e quebra de barreira.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_virology_viral_tropism_fungal'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_virology_th1',
        type: 'theory',
        title: 'A Biologia Molecular do Parvovírus Canino (CPV-2)',
        contentMarkdown: `### O Tropismo Mitótico do Parvovírus

O Parvovírus Canino é um vírus de **DNA de fita simples linear (ssDNA)**, icosaédrico e **não-envelopado**. Por não possuir envelope fosfolipídico, ele é extremamente resistente no meio ambiente, sobrevivendo por mais de 6 meses a 1 ano no solo.

$$\\text{Ingestão Fecal-Oral} \\longrightarrow \\text{Tecido Linfoide Orofaríngeo} \\longrightarrow \\text{Viremia} \\longrightarrow \\text{Criptas Intestinais + Medula Óssea}$$

---

### Por que a Diarreia da Parvovirose é Tão Agressiva?

* Em viroses como o Rotavírus ou Coronavírus, o vírus ataca os **enterócitos maduros do topo das vilosidades** (as criptas proliferativas preservadas conseguem regenerar o epitélio em poucos dias).
* No **Parvovírus (CPV-2)**, o vírus tem tropismo obrigatório pelas **células em rápida mitose das Criptas de Lieberkühn** e da **medula óssea** (panleucopenia profunda).
* Sem novas células para repor o epitélio que descama naturalmente, as vilosidades colapsam inteiras, expondo a lâmina própria vascularizada (hemorragia fétida maciça) e permitindo **translocação bacteriana maciça para a circulação sistêmica com sepse**.

> 📖 Referência Canônica: Fenner's Veterinary Virology (MacLachlan & Dubovi, 5ª ed., Academic Press) & Greene's Infectious Diseases of the Dog and Cat (Sykes, 5ª ed., Elsevier).

> 💡 Pérola Clínica / Prova de Residência: Suscetibilidade Genética Racial: Por que filhotes de Rottweiler, Doberman, American Pit Bull Terrier e Pastor Alemão apresentam taxa de mortalidade desproporcionalmente maior? Estudos imunogenéticos comprovam menor taxa de soroconversão aos antígenos de cápside VP2 e resposta de células T citotóxicas retardada ("black and tan puppy syndrome"), exigindo reforço vacinal até a 18ª-20ª semana de vida!

> 🔬 Histopatologia: Colapso de criptas intestinais: corte histológico evidencia necrose epitelial lítica de criptas com dilatação cística, fusão atrófica de vilosidades e debris celulares basofílicos no lúmen, além de atrofia linfoide em placas de Peyer.

> ⚠️ Alerta Crítico: O CPV-2 é um vírus nu resistente a álcool 70%, clorexidina e amônia quaternária comum! Apenas o Hipoclorito de Sódio a 1:30 (com tempo de contato mínimo de 15 minutos em superfície pré-lavada) ou monopersulfato de potássio garantem a destruição do capsídeo viral no ambiente!`
      },
      {
        id: 'sec_virology_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Bob (Filhote de Rottweiler)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Intensivo da Enterite Parvoviral Aguda com Panleucopenia',
          patient: {
            name: 'Bob',
            species: 'Canino',
            breed: 'Rottweiler',
            age: '3 meses',
            weightKg: 8.0,
            habitatOrEnvironment: 'Quintal com terra batida'
          },
          vitals: {
            heartRateBpm: 160,
            respiratoryRateRpm: 40,
            temperatureCelsius: 39.7,
            mucousMembranes: 'Pálidas e secas (Desidratação 8-10%)',
            capillaryRefillTimeSec: 3.0
          },
          anamnesis: 'Filhote sem histórico vacinal iniciou há 36h quadro de prostração severa, vômitos incoercíveis e diarreia líquida hemorrágica abundante com odor adocicado e fétido patognomônico. Não tolera água ou alimento via oral.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Hemograma Completo e Teste Imunocromatográfico Rápido',
              findings: 'Avaliação hematológica demonstrando imunossupressão medular catastrófica.',
              abnormalValues: [
                { parameter: 'Leucócitos Totais', value: '1.200 /uL', reference: '6.000 - 17.000 /uL', status: 'critical' },
                { parameter: 'Neutrófilos Segmentados', value: '450 /uL', reference: '3.000 - 11.500 /uL', status: 'critical' },
                { parameter: 'Hematócrito', value: '52%', reference: '37 - 55% (Hemoconcentração)', status: 'high' },
                { parameter: 'Antígeno Fecal CPV-2', value: 'POSITIVO FORTE', reference: 'Negativo', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com neutropenia severa (< 500/uL) e perda maciça de integridade intestinal, qual é o pilar terapêutico salvador?',
          decisionOptions: [
            {
              id: 'opt_dec_vir_1',
              label: 'Fluidoterapia balanceada IV vigorosa + Antibioticoterapia profilática parenteral de amplo espectro + Antiemético central',
              description: 'Restaurar volume intravascular, prevenir choque séptico por translocação bacteriana intestinal e controlar vômitos com Maropitant.',
              isOptimal: true,
              consequenceText: 'Conduta exemplar em medicina intensiva! Em pacientes com parvovirose, o que mata o filhote não é o vírus diretamente, mas sim o choque hipovolêmico por perda de fluidos e a sepse bacteriana por translocação entérica facilitada pela neutropenia severa.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Ressuscitação volêmica guiada e cobertura antibiótica parenteral de amplo espectro',
                mechanism: 'Restauração do débito cardíaco e bloqueio da sepse bacteriana por enterobactérias translocadas',
                effect: 'Manutenção da perfusão tecidual até a medula óssea reiniciar a produção de neutrófilos',
                clinicalMeaning: 'Recuperação da volemia, interrupção das perdas hidroeletrolíticas e sobrevida do filhote'
              }
            },
            {
              id: 'opt_dec_vir_2',
              label: 'Prescrever soro caseiro oral e vermífugo em dose dobrada',
              description: 'Tentar hidratar via oral com soro e desverminar imediatamente.',
              isOptimal: false,
              consequenceText: 'Erro grosseiro e letal! Com êmese ativa e atrofia completa de vilosidades intestinais, qualquer líquido oral provocará vômito imediato, aspiração pulmonar e morte por desidratação.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Oferta hídrica oral em paciente com vilosidades destruídas e êmese',
                mechanism: 'Intolerância gástrica e incapacidade de absorção entérica',
                effect: 'Vômito incoercível, broncoaspiração e piora do choque hipovolêmico',
                clinicalMeaning: 'Pneumonia aspirativa associada a colapso circulatório fatal'
              }
            },
            {
              id: 'opt_dec_vir_3',
              label: 'Aplicar vacina décupla (V10) imediatamente como tratamento',
              description: 'Tentar imunizar o cão durante a fase aguda da doença.',
              isOptimal: false,
              consequenceText: 'Contraindicação total! A vacinação em animal já infectado e imunossuprimido não tem valor terapêutico e consome os poucos anticorpos circulantes.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Vacinação em paciente virêmico com panleucopenia',
                mechanism: 'Formação de imunocomplexos circulantes sem estímulo protetor eficaz',
                effect: 'Sobrecarga imune inútil e piora do estresse fisiológico',
                clinicalMeaning: 'Aceleração do choque séptico'
              }
            }
          ],
          learningTakeaways: [
            'O Parvovírus tem tropismo estrito por células com alta taxa de mitose (criptas intestinais e medula óssea).',
            'A causa mortal primária da parvovirose é o choque hipovolêmico somado à sepse por translocação bacteriana.',
            'A neutropenia acentuada no hemograma é o marcador prognóstico mais fidedigno da agressividade da infecção.'
          ]
        }
      },
      {
        id: 'sec_virology_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Virologia Básica & Parvovirose Canina',
        exerciseId: 'ex_virology_01'
      }
    ]
  }
];

// ==========================================
// 8. MELHORAMENTO GENÉTICO ANIMAL & BIOMETRIA
// ==========================================
export const GENETICS_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_genetics_01',
    conceptId: 'concept_genetics_dep_selection',
    type: 'multiple_choice',
    prompt: 'Em um sumário de touros da raça Nelore, o Touro A apresenta DEP para Peso à Desmama (PD-ED) de +12.0 kg com Acurácia de 0.85, enquanto o Touro B apresenta DEP de +2.0 kg com Acurácia de 0.90. Ao acasalar ambos com fêmeas de mérito genético idêntico e mesmo ambiente, o que se espera dos filhos do Touro A em comparação aos do Touro B?',
    options: [
      {
        id: 'opt_gen_1',
        text: 'Os bezerros filhos do Touro A pesarão em média 10.0 kg a mais na desmama do que os filhos do Touro B',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A Diferença Esperada na Prole (DEP) prediz a superioridade genética que o reprodutor transmite aos seus descendentes. A diferença entre os touros é direta: (+12.0 kg) - (+2.0 kg) = +10.0 kg a mais em média por bezerro na desmama sob manejo equivalente.'
      },
      {
        id: 'opt_gen_2',
        text: 'O Touro A gerará bezerros que pesam exatamente 12 kg na desmama',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A DEP não indica o peso absoluto do animal (que pode ser de 210-240 kg), mas sim o diferencial genético em relação à base do rebanho.'
      },
      {
        id: 'opt_gen_3',
        text: 'O Touro B é superior porque sua acurácia de 0.90 é maior que a de 0.85',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A acurácia mede o grau de confiança/certeza da estimativa (baseada no número de filhos avaliados), mas o valor genético de ganho de peso do Touro A (+12 kg) é expressivamente superior ao do Touro B (+2 kg).'
      },
      {
        id: 'opt_gen_4',
        text: 'Os genes paternos determinam 100% do fenótipo de ganho de peso sem influência da mãe',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O bezerro herda 50% de sua carga genética da mãe e 50% do pai, além do forte impacto do efeito do ambiente e da habilidade materna de produção de leite da vaca.'
      }
    ]
  }
];

export const GENETICS_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_genetics_01_dep_selection',
    moduleId: 'mod_genetics',
    title: 'Melhoramento Genético: Interpretação de DEPs & Seleção Zootécnica',
    shortDescription: 'Genética quantitativa na prática: DEPs, acurácia, herdabilidade (h²) e prevenção de consanguinidade em rebanhos comerciais.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_genetics_dep_selection'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_genetics_th1',
        type: 'theory',
        title: 'O Fenótipo: Genética, Ambiente & Interação',
        contentMarkdown: `### A Equação Fundamental do Melhoramento

$$P = G + E + (G \\times E)$$

Onde o **Fenótipo ($P$)** observado no animal (ex: 220 kg à desmama) é o resultado do seu **Genótipo ($G$)**, somado ao **Ambiente ($E$ - pastagem, sanidade, manejo)** e à interação entre ambos.

---

### O Que é a Diferença Esperada na Prole (DEP)?

A DEP é a ferramenta mais precisa para seleção de reprodutores na pecuária moderna:
* Estima a metade do valor genético aditivo do indivíduo (já que o pai transmite apenas metade de seus alelos através do espermatozoide).
* **Acurácia (AC):** Varia de 0 a 1. Valores acima de 0.80 indicam que o touro possui muitos filhos avaliados em múltiplos rebanhos, com baixíssimo risco de flutuação no valor da DEP.
* **Herdabilidade ($h^2$):** Proporção da variância fenotípica atribuível aos genes aditivos:
  * *Baixa ($h^2 < 0.20$):* Características reprodutivas (taxa de prenhez, intervalo entre partos) — respondem melhor a melhorias de manejo e nutrição do que à seleção direta.
  * *Alta ($h^2 > 0.40$):* Características de carcaça (Área de Olho de Lombo - AOL, acabamento de gordura) — respondem com saltos rápidos à seleção genética.

> 📖 Referência Canônica: Understanding Animal Breeding (Bourdon, 2ª ed., Pearson) & Melhoramento Genético Aplicado em Bovinos de Corte (Pereira, FEALQ/USP).

> 💡 Pérola Zootécnica / Seleção de Touros: Acurácia vs. Risco: Uma DEP de Peso ao Desmame de +14 kg com Acurácia 0.35 (touro jovem genômico sem progênie) possui intervalo de confiança amplo (sua DEP real pode oscilar entre +8 kg e +20 kg). Já um touro provado com Acurácia 0.95 garante que sua progênie expressará com rigor estatístico a média esperada em qualquer fazenda comercial sob manejo adequado.

> ⚠️ Alerta Crítico: Seleção unilateral agressiva para apenas uma característica (ex: Peso Adulto extremo sem balancear com DEP de Facilidade de Parto ou Peso ao Nascer) eleva dramaticamente as taxas de distocia fetal, cesarianas de emergência e mortalidade neonatal em novilhas de primeira cria!`
      },
      {
        id: 'sec_genetics_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Fazenda Santa Maria',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Seleção Genética de Touro Nelore para Cruzamento Industrial',
          patient: {
            name: 'Rebanho Santa Maria',
            species: 'Bovino de Corte',
            breed: 'Nelore Comercial',
            age: 'Matrizes de 1º e 2º cria',
            weightKg: 450,
            habitatOrEnvironment: 'Pastagem de Brachiaria brizantha rotacionada'
          },
          vitals: {
            heartRateBpm: 60,
            respiratoryRateRpm: 20,
            temperatureCelsius: 38.5,
            mucousMembranes: 'Normocoradas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Produtor rural com 500 novilhas Nelore deseja selecionar um touro para IATF. Seu foco comercial prioritário é desmamar bezerros mais pesados para venda em leilão, mas ele está extremamente receoso com distocias (partos difíceis) em primíparas.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Comparativo de Sumário de Touros Lideres (ANCP/Embrapa)',
              findings: 'Análise de DEPs de três touros líderes disponíveis na central de sêmen.',
              abnormalValues: [
                { parameter: 'Touro A: DEP Peso Desmama (PD)', value: '+14.5 kg (AC 0.88)', reference: 'Média da Raça: +4.0 kg', status: 'high' },
                { parameter: 'Touro A: DEP Peso ao Nascer (PN)', value: '+0.4 kg (AC 0.85)', reference: 'Média da Raça: +0.6 kg', status: 'low' },
                { parameter: 'Touro B: DEP Peso Desmama (PD)', value: '+16.0 kg (AC 0.82)', reference: 'Média da Raça: +4.0 kg', status: 'high' },
                { parameter: 'Touro B: DEP Peso ao Nascer (PN)', value: '+3.8 kg (AC 0.84)', reference: 'Média da Raça: +0.6 kg', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Qual touro deve ser recomendado para as novilhas de primeira cria do produtor?',
          decisionOptions: [
            {
              id: 'opt_dec_gen_1',
              label: 'Touro A (Alto ganho na desmama + Baixa DEP de Peso ao Nascer para parto fácil)',
              description: 'Garante bezerros vigorosos e pesados à desmama sem risco de partos distócicos nas novilhas jovens.',
              isOptimal: true,
              consequenceText: 'Decisão zootécnica de alta precisão! Para novilhas de primeira cria, a DEP de Peso ao Nascer (PN) moderada ou negativa é mandatória para evitar distocia e cesarianas de emergência. O Touro A une segurança no parto com excelente ganho genético na desmama.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Seleção de reprodutor com baixa DEP para Peso ao Nascer e alta DEP para Peso à Desmama',
                mechanism: 'Bezerros nascem com porte anatômico compatível com a bacia óssea da novilha',
                effect: 'Partos eutócicos espontâneos seguidos de alta curva de crescimento pós-natal',
                clinicalMeaning: 'Mortalidade perinatal zero de bezerros e máxima lucratividade no peso da desmama'
              }
            },
            {
              id: 'opt_dec_gen_2',
              label: 'Touro B apenas por ter a maior DEP de desmama (+16 kg)',
              description: 'Priorizar o peso máximo absoluto sem levar em conta a DEP de peso ao nascer.',
              isOptimal: false,
              consequenceText: 'Erro perigoso! A DEP de Peso ao Nascer do Touro B (+3.8 kg) é excessivamente alta para novilhas de primeira cria. Bezerros muito grandes causarão distocia fetal, atonia uterina e morte de matrizes e crias.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de touro com DEP de PN extremamente positiva em novilhas primíparas',
                mechanism: 'Incompatibilidade feto-pélvica mecânica durante o estágio 2 do parto',
                effect: 'Distocia obstrutiva, anóxia fetal e lacerações do canal do parto',
                clinicalMeaning: 'Alta taxa de bezerros natimortos e necessidade de intervenções cesarianas'
              }
            },
            {
              id: 'opt_dec_gen_3',
              label: 'Não usar IATF e colocar qualquer touro jovem sem avaliação genética',
              description: 'Utilizar monta natural com touro não avaliado por sumário.',
              isOptimal: false,
              consequenceText: 'Inadequado. Touros sem avaliação de DEP apresentam acurácia zero, gerando desuniformidade no lote de bezerros e risco desconhecido de partos difíceis.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Falta de seleção genética e acurácia nula',
                mechanism: 'Variabilidade fenotípica descontrolada na prole',
                effect: 'Perda do ganho genético acumulado do rebanho',
                clinicalMeaning: 'Bezerros desuniformes e perda de valor agregado de mercado'
              }
            }
          ],
          learningTakeaways: [
            'A DEP é a estimativa mais confiável da transmissão genética para a progênie.',
            'Em novilhas primíparas, a DEP de Peso ao Nascer (PN) é o parâmetro de segurança mais crítico para prevenir distocias.',
            'Acurácia alta (> 0.80) confere estabilidade aos valores genéticos estimados.'
          ]
        }
      },
      {
        id: 'sec_genetics_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Interpretação de DEPs & Seleção Zootécnica',
        exerciseId: 'ex_genetics_01'
      }
    ]
  }
];
