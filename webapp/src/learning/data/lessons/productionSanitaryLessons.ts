// src/learning/data/lessons/productionSanitaryLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

// ==========================================
// 1. PROTOZOOLOGIA & ECTOPARASITOLOGIA
// ==========================================
export const PROTOZOOLOGY_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_protozoo_01',
    conceptId: 'concept_protozoology_tp_bovina',
    type: 'multiple_choice',
    prompt: 'Um bezerro Nelore de 8 meses em pastagem com alta infestação de carrapatos Rhipicephalus microplus apresenta febre alta (41.2°C), anemia severa com mucosas branco-porcelana, icterícia flavínica e urina cor de "café forte" (hemoglobinúria maciça). Ao esfregaço sanguíneo de ponta de orelha corado com Giemsa, observam-se inclusões piriformes aos pares em ângulo agudo ocupando grande parte do eritrócito. Qual é o agente etiológico, a razão da cor escura da urina e a conduta terapêutica de escolha?',
    options: [
      {
        id: 'opt_proto1_1',
        text: 'Babesia bigemina; a lise intravascular de hemácias satura a haptoglobina plasmática, permitindo que a hemoglobina livre atinja o filtrado glomerular e gere hemoglobinúria; tratar com Diaceturato de Diminazeno (3.5 mg/kg IM) associado a suporte hemoterápico se hematócrito < 12-14%',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A Babesia bigemina causa hemólise intravascular massiva. O excesso de hemoglobina livre ultrapassa a capacidade carreadora da haptoglobina e precipita nos túbulos renais, exteriorizando-se como urina escura (hemoglobinúria). O tratamento específico é o Diaceturato de Diminazeno, exigindo transfusão de sangue total em anemias críticas para evitar óbito por anóxia miocárdica.'
      },
      {
        id: 'opt_proto1_2',
        text: 'Anaplasma marginale; a bactéria produz melanina que é excretada diretamente pela urina; tratar exclusivamente com enrofloxacino',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Anaplasma marginale provoca hemólise extravascular fagocitária no baço e NÃO cursa com hemoglobinúria. A urina permanece de coloração âmbar normal.'
      },
      {
        id: 'opt_proto1_3',
        text: 'Babesia bovis na forma neurológica; o parasita bloqueia os néfrons renais impedindo a filtração de água; tratar apenas com furosemida',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Babesia bovis causa sequestro microvascular cerebral com ataxia e convulsões, e o tratamento mandatório exige babesicidas específicos.'
      },
      {
        id: 'opt_proto1_4',
        text: 'Fasciola hepatica; o trematódeo migra para a bexiga urinária causando hematúria por trauma mecânico de espinhos cuticulares',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Fasciola parasita os ductos biliares do fígado e não causa hemoglobinúria por lise intraeritrocitária.'
      }
    ]
  },
  {
    id: 'ex_protozoo_02',
    conceptId: 'concept_protozoology_canine_equine_hemoparasites',
    type: 'multiple_choice',
    prompt: 'Um cão Pastor Alemão de 3 anos dá entrada na emergência com epistaxe bilateral espontânea profusa, petéquias na mucosa oral, linfadenomegalia generalizada e febre (39.8°C). O hemograma revela trombocitopenia crítica (18.000 plaquetas/µL) e anemia normocítica normocrômica. No esfregaço de capa leucocitária, visualizam-se mórulas basofílicas intracitoplasmáticas no interior de monócitos. Qual é o diagnóstico e o protocolo quimioterápico preconizado pelas diretrizes internacionais?',
    options: [
      {
        id: 'opt_proto2_1',
        text: 'Erliquiose Monocítica Canina (Ehrlichia canis transmitida por Rhipicephalus sanguineus); tratar com Doxiciclina (10 mg/kg VO a cada 24 horas por 28 dias consecutivos)',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! Ehrlichia canis tem tropismo específico por células mononucleares (monócitos e macrófagos), replicando-se em vacúolos citoplasmáticos formando as inclusões patognomônicas chamadas "mórulas". A trombocitopenia severa decorre de destruição imunomediada periférica e sequestro esplênico. O protocolo de ouro estabelecido pelo ACVIM exige Doxiciclina na dose de 10 mg/kg uma vez ao dia durante 28 dias completos para erradicar a bacteriemia e prevenir a progressão para a fase crônica com aplasia medular.'
      },
      {
        id: 'opt_proto2_2',
        text: 'Leishmaniose visceral aguda pura; tratar exclusivamente com vacina viva atenuada em dose única',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A presença de mórulas em monócitos associada a resposta à doxiciclina caracteriza a erliquiose monocítica canina.'
      },
      {
        id: 'opt_proto2_3',
        text: 'Intoxicação por rodenticida cumarínico que causa inclusões falsas em monócitos; tratar apenas com Vitamina K1 por 5 dias',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Cumarínicos inibem a síntese de fatores de coagulação (vitamina K-dependentes) e não geram mórulas bacterianas em monócitos.'
      },
      {
        id: 'opt_proto2_4',
        text: 'Babesia canis; tratar exclusivamente com sulfadiazina e trimetoprima por 3 dias',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Babesia é um protozoário intraeritrocitário que habita hemácias, e não monócitos, e responde a imidocarb ou diminazeno.'
      }
    ]
  },
  {
    id: 'ex_protozoo_03',
    conceptId: 'concept_protozoology_enteric_zoonotic_protozoa',
    type: 'multiple_choice',
    prompt: 'Um filhote de Bulldog Francês de 4 meses apresenta histórico de diarreia crônica intermitente, caracterizada por fezes amareladas, pastosas, de aspecto brilhante/oleoso (esteatorreia) e odor intensamente fétido, com emagrecimento progressivo apesar do apetite voraz. No exame coproparasitológico de centrífugo-flutuação com Sulfato de Zinco (d = 1.18 g/mL), visualizam-se estruturas ovóides birrefringentes com 4 núcleos e resquícios de axonemas flagelares. Qual é o agente, mecanismo da má absorção e terapia de primeira escolha?',
    options: [
      {
        id: 'opt_proto3_1',
        text: 'Giardia duodenalis (sin. G. lamblia); os trofozoítos aderem ao epitélio enterocítico duodenal pelo disco suctório ventral, causando achatamento de microvilosidades, deficiência de dissacaridases e bloqueio físico da absorção lipídica; tratar com Fenbendazol (50 mg/kg VO a cada 24h por 3 a 5 dias)',
        isCorrect: true,
        pedagogicalFeedback: 'Excelente! A Giardia duodenalis fixa-se na borda em escova dos enterócitos através do disco adesivo ventral, gerando dano celular direto e barreira mecânica que impede a emulsificação e absorção de lipídios e vitaminas lipossolúveis (esteatorreia). O método de centrífugo-flutuação em sulfato de zinco a 33% é a técnica de eleição para não colapsar os cistos. O Fenbendazol é o fármaco de primeira linha por sua alta eficácia (> 90%) e ausência dos efeitos neurotóxicos associados ao metronidazol.'
      },
      {
        id: 'opt_proto3_2',
        text: 'Cystoisospora canis; oocisto causa necrose transmural do ceco; tratar com ivermectina injetável',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Coccídios como Isospora formam oocistos esféricos com esporocistos e não exibem axonemas flagelares de protozoários diplomonados como Giardia.'
      },
      {
        id: 'opt_proto3_3',
        text: 'Cryptosporidium parvum; protozoário que invade os macrófagos alveolares pulmonares; tratar com enrofloxacino',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Cryptosporidium acomete a membrana apical intracelular/extracitoplasmática do enterócito, e a morfologia descrita com 4 núcleos e axonemas é típica de cisto de Giardia.'
      },
      {
        id: 'opt_proto3_4',
        text: 'Entamoeba histolytica; o trofozoíto calcifica a mucosa gástrica e exige cirurgia de gastrectomia parcial',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Amebíase clínica em cães é rara e a apresentação clínica e microscópica detalhada corresponde inequivocamente à giardíase canina.'
      }
    ]
  },
  {
    id: 'ex_protozoo_04',
    conceptId: 'concept_protozoology_ixodology_acaricide_resistance',
    type: 'multiple_choice',
    prompt: 'Em uma propriedade de bovinocultura de corte no interior de São Paulo, o produtor relata que a aplicação de banhos de aspersão com Cipermetrina não está mais controlando a infestação por Rhipicephalus microplus. O médico-veterinário colhe 150 teleóginas ingurgitadas no rebanho e encaminha ao laboratório para o Biocarrapaticidograma (Teste de Imersão de Teleóginas Adultas / Teste de Drummond). O laudo revela Índice de Eficácia Reprodutiva (IER) de 14% para Cipermetrina e 98% para a associação Organofosforado + Fluazuron. Qual é o mecanismo molecular da falha da cipermetrina e a interpretação zootécnica do IER?',
    options: [
      {
        id: 'opt_proto4_1',
        text: 'A falha da Cipermetrina decorre de seleção de carrapatos com mutação pontual no gene do canal de sódio voltagem-dependente (mutação kdr - knockdown resistance) e superexpressão de enzimas desintoxicantes; o IER de 14% comprova resistência severa (limiar de eficácia oficial é IER ≥ 95%), sendo a troca para o inibidor de síntese de quitina (Fluazuron) plenamente indicada para quebrar o ciclo biológico',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! O uso repetido e incorreto de piretroides seleciona alelos mutantes no canal de sódio axonal dos artrópodes (mecanismo kdr), impedindo o fechamento normal do canal e gerando insensibilidade total ao inseticida. No Teste de Drummond, o IER avalia a inibição da postura e da eclosão larval; índices abaixo de 95% indicam ineficácia comercial e exigem substituição imediata da base química. O Fluazuron é um inibidor do desenvolvimento da cutícula (quitina), esterilizando teleóginas e impedindo mudas das fases imaturas na pastagem.'
      },
      {
        id: 'opt_proto4_2',
        text: 'Os carrapatos tornaram-se imunes porque aprenderam a se esconder sob a cauda do animal durante a pulverização, sem qualquer base genética ou molecular',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A resistência aos acaricidas tem base genética e molecular consagrada (mutações em canais de sódio, AChE, receptores octopaminérgicos).'
      },
      {
        id: 'opt_proto4_3',
        text: 'A cipermetrina falhou porque o carrapato Rhipicephalus microplus é um parasita trioxeno que realiza suas mudas exclusivamente em capivaras no solo',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Rhipicephalus microplus é estritamente monoxeno, passando toda a sua fase parasitária (21 dias) no mesmo hospedeiro bovino.'
      },
      {
        id: 'opt_proto4_4',
        text: 'O IER de 14% significa que 86% dos carrapatos morreram instantaneamente, comprovando que o produto é de excelência comercial',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O IER de 14% significa que o produto inibiu apenas 14% da reprodução do carrapato, permitindo que 86% das larvas eclodam livremente.'
      }
    ]
  },
  {
    id: 'ex_protozoo_05',
    conceptId: 'concept_protozoology_mange_mites_ectoparasites',
    type: 'multiple_choice',
    prompt: 'Na dermatologia veterinária de pequenos animais, a diferenciação diagnóstica entre a Sarna Sarcóptica (Sarcoptes scabiei) e a Sarna Demodécica (Demodex canis) é crucial para a conduta terapêutica e o prognóstico. Quais são as características biológicas, clínicas e farmacológicas que distinguem essas duas enfermidades parasitárias?',
    options: [
      {
        id: 'opt_proto5_1',
        text: 'Sarcoptes scabiei é um ácaro redondo escavador de túneis na epiderme que provoca prurido incoercível, reflexo oto-podal positivo e é zoonótico; Demodex canis é um ácaro comensal alongado em formato de "charuto" que habita folículos pilosos, proliferando por imunodeficiência celular T (habitualmente não pruriginoso puro). Ambas são tratadas com altíssima eficácia pelas modernas Isoxazolinas orais (Fluralaner, Sarolaner, Afoxolaner), que bloqueiam os canais de cloreto GABAérgicos dos artrópodes',
        isCorrect: true,
        pedagogicalFeedback: 'Excelente síntese acadêmica! Sarcoptes escava túneis na epiderme superficial (estrato córneo/granuloso), desencadeando hipersensibilidade alérgica extrema com prurido violento e lesões em pontas de orelhas, cotovelos e abdômen ventral, sendo altamente contagioso e zoonótico. Demodex é parte da microbiota normal do folículo piloso canino; sua multiplicação descontrolada decorre de defeito na imunidade celular T (sem prurido primário, apresentando alopecia periocular, comedões e pododermatite). As Isoxazolinas revolucionaram o tratamento de ambas as sarnas ao atuar como antagonistas seletivos de canais de cloreto dependentes de GABA e glutamato no sistema nervoso dos ácaros.'
      },
      {
        id: 'opt_proto5_2',
        text: 'Demodex canis é uma bactéria transmitida por pulgas que causa prurido severo na cauda; Sarcoptes é um nematódeo intestinal que migra para os pulmões',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Ambos são ácaros microscópicos pertencentes à classe Arachnida, subclasse Acari.'
      },
      {
        id: 'opt_proto5_3',
        text: 'A sarna sarcóptica é assintomática e não causa coceira, enquanto a sarna demodécica sempre é contagiosa para humanos e causa feridas ulceradas no pescoço',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Sarcoptes é extremamente pruriginoso e zoonótico; Demodex canis é espécie-específico de cães e não infecta humanos hígidos.'
      },
      {
        id: 'opt_proto5_4',
        text: 'O tratamento de escolha para sarna demodécica em filhotes é a administração contínua de corticoides imunossupressores em doses cavalares por 6 meses',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Corticosteroides agravam dramaticamente a demodicose por deprimir ainda mais a imunidade celular T, permitindo a proliferação catastrófica dos ácaros.'
      }
    ]
  }
];

export const PROTOZOOLOGY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_protozoo_01_tp_bovina',
    moduleId: 'mod_protozoology_ectoparasites',
    title: 'Protozoologia Veterinária: Tristeza Parasitária Bovina (TPB)',
    shortDescription: 'Diferenciação clínica e microscópica entre Babesia bovis, Babesia bigemina e Anaplasma marginale.',
    estimatedMinutes: 20,
    order: 1,
    concepts: ['concept_protozoology_tp_bovina'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_protozoo_th1',
        type: 'theory',
        title: 'O Complexo da Tristeza Parasitária Bovina (Babesiose & Anaplasmose)',
        contentMarkdown: `### O Complexo da Tristeza Parasitária Bovina (TPB)

A TPB é o maior entrave sanitário e econômico da pecuária bovina tropical, transmitida pelo carrapato-do-boi (*Rhipicephalus microplus*):
1. **Babesia bigemina:** Hemoprotozoário de grande porte (pares piriformes em ângulo agudo dentro do eritrócito). Promove **hemólise intravascular maciça** por replicação binária e lise da membrana eritrocitária → hemoglobinemia, hemoglobinúria severa (urina escura cor de café forte) e insuficiência renal aguda pigmentar por deposição de cilindros de hemoglobina.
2. **Babesia bovis:** Hemoprotozoário de menor porte (pares em ângulo obtuso). Promove adesão de eritrócitos infectados ao endotélio vascular de capilares cerebrais mediada por antígenos VESA-1 → sequestro microvascular encefálico, estase circulatória, anóxia cerebral e **Babesiose Cerebral** (ataxia, convulsões, pedalagem e agressividade extrema).
3. **Anaplasma marginale:** Bactéria gram-negativa da família Anaplasmataceae (corpúsculos de inclusão esféricos na borda periférica da hemácia). Causa **hemólise extravascular no sistema monocítico-fagocítico (baço e fígado)** → anemia profunda, icterícia flavínica e esplenomegalia marcante, **sem hemoglobinúria** (a urina mantém coloração ambarina normal).

\`\`\`mermaid
flowchart TD
    A["Picada de Rhipicephalus microplus com Inoculação de Esporozoítos ou Rickettsias"] --> B{"Agente Etiológico Identificado"}
    B -->|"Babesia bigemina"| C["Hemólise Intravascular Maciça + Saturação de Haptoglobina + Hemoglobinúria"]
    B -->|"Babesia bovis"| D["Citoaderência Vascular Encefálica via VESA-1 + Isquemia e Sinais Nervosos"]
    B -->|"Anaplasma marginale"| E["Hemólise Extravascular Esplênica/Hepática + Icterícia Flavínica sem Hemoglobinúria"]
    C --> F["Terapêutica: Diaceturato de Diminazeno (3.5 mg/kg IM) + Transfusão se VG < 12%"]
    D --> F
    E --> G["Terapêutica: Oxitetraciclina LA (20 mg/kg IM) ou Dipropionato de Imidocarb"]
\`\`\``
      },
      {
        id: 'sec_protozoo_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Bezerro Sultão (Guzerá)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Clínico de Tristeza Parasitária Aguda em Bezerro',
          patient: {
            name: 'Sultão',
            species: 'Bovino',
            breed: 'Guzerá',
            age: '8 meses',
            weightKg: 180,
            habitatOrEnvironment: 'Pasto de braquiária com histórico de carrapato em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 120,
            respiratoryRateRpm: 48,
            temperatureCelsius: 41.2,
            mucousMembranes: 'Branco-amareladas (anemia e icterícia graves)',
            capillaryRefillTimeSec: 3.5
          },
          anamnesis: 'Sultão foi encontrado afastado do lote na pastagem, de cabeça baixa, respiração ofegante e taquicardia extrema. Ao urinar, expeliu urina marrom-escura e espumosa. Apresenta centenas de teleóginas de carrapato na barbela e períneo.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Esfregaço Sanguíneo de Capilar Periférico (Orelha) + Hematócrito',
              findings: 'Esfregaço corado por Giemsa revelando inclusões intraeritrocitárias pareadas.',
              abnormalValues: [
                { parameter: 'Hematócrito (VG)', value: '11%', reference: '24 - 46%', status: 'critical' },
                { parameter: 'Presença de Babesia bigemina', value: 'POSITIVO (8% hemácias)', reference: 'Negativo', status: 'critical' },
                { parameter: 'Hemoglobinúria', value: '4+ (Positiva)', reference: 'Ausente', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com hematócrito de 11% e parasitemia ativa, qual é a intervenção de emergência?',
          decisionOptions: [
            {
              id: 'opt_dec_prot_1',
              label: 'Diaceturato de Diminazeno (3.5 mg/kg IM) + Transfusão de sangue total de doador sadio (3 a 4 Litros)',
              description: 'Eliminar o protozoário com o babesicida específico e restaurar imediatamente a capacidade de transporte de oxigênio com hemoterapia.',
              isOptimal: true,
              consequenceText: 'Conduta salvadora impecável! Com hematócrito em 11%, o bezerro está à beira da anóxia miocárdica e cerebral. A transfusão sanguínea estabiliza a oxigenação celular enquanto o diaceturato de diminazeno elimina a parasitemia em 24 horas.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Administração de Diaceturato de Diminazeno associada a transfusão de sangue',
                mechanism: 'Morte do parasita por inibição da síntese de DNA e reposição imediata de hemácias circulantes',
                effect: 'Interrupção da hemólise intravascular e normalização do transporte de oxigênio tecidual',
                clinicalMeaning: 'Queda da febre, recuperação do hematócrito para > 20% e alta clínica'
              }
            },
            {
              id: 'opt_dec_prot_2',
              label: 'Banho de aspersão com amitraz concentrado imediatamente no animal febril',
              description: 'Priorizar a morte dos carrapatos do corpo do bezerro com acaricida.',
              isOptimal: false,
              consequenceText: 'Erro grave! Banhar um animal com 11% de hematócrito e febre de 41.2°C gera estresse térmico agudo, colapso hemodinâmico e absorção tóxica do acaricida em pele hiperêmica.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Banho carrapaticida em animal severamente anêmico e hipotérmico/febril',
                mechanism: 'Estresse agudo de contenção com aumento súbito da demanda miocárdica de O2',
                effect: 'Parada cardiorrespiratória por anóxia miocárdica durante o banho',
                clinicalMeaning: 'Morte imediata do paciente'
              }
            },
            {
              id: 'opt_dec_prot_3',
              label: 'Aplicar apenas antibiótico Oxitetraciclina de longa ação e esperar',
              description: 'Tratar empiricamente para Anaplasmose sem administrar babesicida.',
              isOptimal: false,
              consequenceText: 'Falha terapêutica. A oxitetraciclina é ativa contra Anaplasma, mas tem eficácia mínima contra Babesia bigemina. A hemólise continuará até o óbito.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de antibacteriano em infecção por protozoário hemolítico',
                mechanism: 'Ausência de ação contra a proliferação intraeritrocitária de Babesia',
                effect: 'Progressão da hemólise intravascular maciça com falência renal aguda pigmentar',
                clinicalMeaning: 'Morte por nefrose hemoglobinúrica e hipóxia celular anóxica'
              }
            }
          ],
          learningTakeaways: [
            'A presença de hemoglobinúria (urina cor de vinho/café) diferencia a Babesiose da Anaplasmose.',
            'Hematócrito abaixo de 12-14% em bezerros com TPB exige transfusão sanguínea urgente de sangue total.',
            'O Diaceturato de Diminazeno é o princípio ativo específico para eliminação de Babesia bovis e B. bigemina.'
          ]
        }
      },
      {
        id: 'sec_protozoo_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Tristeza Parasitária Bovina',
        exerciseId: 'ex_protozoo_01'
      }
    ]
  },
  {
    id: 'lesson_protozoo_02_canine_equine_hemoparasites',
    moduleId: 'mod_protozoology_ectoparasites',
    title: 'Hemoparasitoses Caninas e Equinas: Ehrlichia canis, Babesia vogeli e Piroplasmose',
    shortDescription: 'Patogenia de E. canis, mórulas monocíticas, trombocitopenia imune, Babesia canis e piroplasmose equina (Theileria equi).',
    estimatedMinutes: 20,
    order: 2,
    concepts: ['concept_protozoology_canine_equine_hemoparasites'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_protozoo_02_th1',
        type: 'theory',
        title: 'Erliquiose Monocítica Canina, Babesiose e Piroplasmose Equina',
        contentMarkdown: `### Erliquiose Monocítica Canina (*Ehrlichia canis*)

A erliquiose canina é uma das principais hemoparasitoses da clínica de pequenos animais no Brasil, transmitida pelo carrapato vermelho do cão (*Rhipicephalus sanguineus*):
* **Fisiopatologia Celular:** A bactéria rickettsial intracelular obrigatória invade monócitos e macrófagos circulantes. No fagossomo, inibe a fusão lisossomal e multiplica-se por fissão binária, originando colônias bacterianas compactas chamadas **mórulas monocíticas**.
* **As 3 Fases Clínicas:**
  1. *Fase Aguda (1 a 3 semanas):* Febre alta, anorexia, linfoadenomegalia generalizada, esplenomegalia e **trombocitopenia imune severa (< 50.000 plaquetas/µL)** decorrente de sequestro esplênico e anticorpos antiplaquetários. Manifesta-se por petéquias, equimoses e epistaxe espontânea profusa.
  2. *Fase Subclínica (meses a anos):* O cão parece clinicamente recuperado, mas a bactéria persiste sequesterada no baço. Persiste trombocitopenia leve e hipergamaglobulinemia policlonal marcante.
  3. *Fase Crônica Severa:* Hipoplasia e aplasia medular com pancitopenia irreversível (anemia arregenerativa grave, leucopenia e trombocitopenia extrema), hemorragias retinais, glomerulonefrite por imunocomplexos e alta letalidade.
* **Terapia Canônica do ACVIM:** **Doxiciclina (10 mg/kg VO a cada 24 horas por 28 dias consecutivos)**.

---

### Piroplasmose Equina (*Theileria equi* e *Babesia caballi*)

* **Relevância Sanitária Internacional:** Transmitida pelos carrapatos *Dermacentor nitens* e *Amblyomma sculptum*. A infecção gera portadores subclínicos crônicos. O status sorológico negativo em testes oficiais (c-ELISA) é exigência compulsória de trânsito internacional para os EUA, Europa e eventos hípicos olímpicos.
* **Morfologia Comparada:**
  * *Theileria equi:* Pequenos merozoítos intraeritrocitários arranjados em cruz de Malta (tétrade de 4 parasitas piriformes unidos pelo ápice).
  * *Babesia caballi:* Merozoítos grandes piriformes pareados em ângulo agudo.
* **Tratamento de Eliminação:** Dipropionato de Imidocarb em doses elevadas (4.0 mg/kg IM a cada 72h por 4 aplicações para *T. equi*), exigindo pré-medicação com anticolinérgicos (Atropina ou Escopolamina) para prevenir cólica severa por hiperatividade muscarínica intestinal.`
      },
      {
        id: 'sec_protozoo_02_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Zeus (Pastor Alemão com Epistaxe e Trombocitopenia)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Clínico de Erliquiose Canina Aguda com Trombocitopenia Crítica',
          patient: {
            name: 'Zeus',
            species: 'Canina',
            breed: 'Pastor Alemão',
            age: '3 anos',
            weightKg: 34,
            habitatOrEnvironment: 'Residência com canil e acesso a jardim com histórico de carrapatos em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 130,
            respiratoryRateRpm: 34,
            temperatureCelsius: 39.9,
            mucousMembranes: 'Pálidas com petéquias e equimoses na mucosa jugal e prepucial',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'Cão atendido em caráter de emergência devido a sangramento nasal contínuo (epistaxe bilateral ativa) há 6 horas. O tutor relata que há 5 dias o animal apresentava prostração, febre e perda de apetite. Ao exame físico: petéquias em abdômen ventral, linfoadenomegalia submandibular e poplítea bilateral moderada.',
          exams: [
            {
              category: 'hematologia_laboratorial',
              title: 'Hemograma Completo e Análise de Capa Leucocitária',
              findings: 'Avaliação de plaquetas e citologia de esfregaço de ponta de agulha.',
              abnormalValues: [
                { parameter: 'Contagem de Plaquetas', value: '16.000 /uL (Trombocitopenia crítica com risco de hemorragia espontânea)', reference: '200.000 - 500.000 /uL', status: 'critical' },
                { parameter: 'Hematócrito (VG)', value: '26%', reference: '37 - 55%', status: 'critical' },
                { parameter: 'Esfregaço de Capa Leucocitária', value: 'Presença de mórulas intracitoplasmáticas basofílicas em 3 monócitos', reference: 'Ausente', status: 'critical' },
                { parameter: 'Proteínas Plasmáticas Totais', value: '8.8 g/dL (Hiperglobulinemia)', reference: '5.5 - 7.5 g/dL', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com epistaxe ativa, plaquetas em 16.000/µL e mórulas de Ehrlichia canis em monócitos, qual é o plano terapêutico emergencial e ambulatorial?',
          decisionOptions: [
            {
              id: 'opt_dec_prot2_1',
              label: 'Compressa gelada nasal e adrenalina tópica para estancar epistaxe + Doxiciclina (10 mg/kg VO a cada 24h por 28 dias) + Dexametasona em dose anti-inflamatória única (0.1 mg/kg IV) para mitigar destruição imune de plaquetas + Repouso absoluto',
              description: 'Controle hemostático imediato, bloqueio da destruição periférica imunomediada de plaquetas e protocolo de ouro para erradicação de Ehrlichia canis.',
              isOptimal: true,
              consequenceText: 'Excelente conduta médica! A hemostasia tópica conteve a hemorragia nasal enquanto a dose anti-inflamatória baixa de corticoide reduziu a remoção esplênica de plaquetas opsonizadas. O ciclo completo de 28 dias de Doxiciclina impediu a transição para a fase crônica e restabeleceu as plaquetas normais em 14 dias.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Doxiciclina por 28 dias com suporte hemostático e modulação imune aguda de plaquetas',
                mechanism: 'Inibição da síntese proteica bacteriana na subunidade ribossomal 30S e cessação da lise imune',
                effect: 'Elevação progressiva das plaquetas (> 200.000/µL em 10 dias) e desaparecimento da epistaxe',
                clinicalMeaning: 'Cura microbiológica completa e prevenção da aplasia de medula óssea'
              }
            },
            {
              id: 'opt_dec_prot2_2',
              label: 'Prescrever Doxiciclina por apenas 5 dias e liberar o animal para exercícios de guarda intensos',
              description: 'Subtratamento com curso antimicrobiano insuficiente que predispõe à cronicidade.',
              isOptimal: false,
              consequenceText: 'Falha terapêutica grave! Cursos curtos de doxiciclina (< 21-28 dias) não eliminam E. canis dos macrófagos teciduais esplênicos. O animal evolui para a fase crônica grave com aplasia irreversível de medula óssea e óbito por hemorragia visceral.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Duração insuficiente de antibioticoterapia em infecção intracelular obrigatória',
                mechanism: 'Persistência de nichos bacterianos no baço e medula óssea',
                effect: 'Progressão para hipoplasia medular e pancitopenia terminal',
                clinicalMeaning: 'Evolução para fase crônica fatal com hemorragia interna maciça'
              }
            },
            {
              id: 'opt_dec_prot2_3',
              label: 'Administrar aspirina oral (AAS) e cetoprofeno para diminuir a febre e as dores corporais',
              description: 'Uso de AINEs antiagregantes plaquetários em cão com 16.000 plaquetas/µL.',
              isOptimal: false,
              consequenceText: 'Erro médico letal! Administrar AINEs (especialmente ácido acetilsalicílico) em um cão com 16.000 plaquetas bloqueia a agregação das poucas plaquetas funcionais restantes, provocando hemorragia gastrointestinal maciça e choque hipovolêmico fatal em poucas horas.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Indicação de fármacos antiagregantes plaquetários em vigência de trombocitopenia crítica',
                mechanism: 'Inibição irreversível da ciclooxigenase-1 (COX-1) e do tromboxano A2 plaquetário',
                effect: 'Sangramento digestivo e pulmonar incontrolável por perda total da hemostasia primária',
                clinicalMeaning: 'Óbito iatrogênico rápido do paciente por choque hemorrágico'
              }
            }
          ],
          learningTakeaways: [
            'Ehrlichia canis infecta monócitos e macrófagos, provocando trombocitopenia severa de base imuno-mediada.',
            'O protocolo de ouro preconizado pelo ACVIM exige Doxiciclina (10 mg/kg uma vez ao dia) por 28 dias consecutivos.',
            'Fármacos anti-inflamatórios não esteroidais com ação antiplaquetária (AAS) são formalmente contraindicados em cães trombocitopênicos.'
          ]
        }
      },
      {
        id: 'sec_protozoo_02_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Hemoparasitoses Caninas & Trombocitopenia',
        exerciseId: 'ex_protozoo_02'
      }
    ]
  },
  {
    id: 'lesson_protozoo_03_enteric_zoonotic_protozoa',
    moduleId: 'mod_protozoology_ectoparasites',
    title: 'Protozoários Entéricos e Zoonóticos: Giardíase, Coccidiose e Toxoplasmose',
    shortDescription: 'Morfologia de cistos e trofozoítos de Giardia, disco adesivo, esteatorreia, ciclo de Toxoplasma gondii e Saúde Única.',
    estimatedMinutes: 20,
    order: 3,
    concepts: ['concept_protozoology_enteric_zoonotic_protozoa'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_protozoo_03_th1',
        type: 'theory',
        title: 'Giardíase Canina, Fisiopatologia da Má Absorção e Toxoplasmose Comparada',
        contentMarkdown: `### Morfofisiologia da *Giardia duodenalis* e Mecanismos de Diarreia

A *Giardia duodenalis* (sinônimos: *Giardia lamblia*, *Giardia intestinalis*) é um protozoário flagelado cosmopolita que parasita o intestino delgado de cães, gatos e seres humanos:
* **As Duas Formas Biológicas:**
  1. *Trofozoíto (Forma Vegetativa Ativa):* Formato piriforme achatado ("rosto de palhaço"), medindo 12 a 18 µm, com 2 núcleos simétricos e 4 pares de flagelos. Possui na face ventral o **disco suctório adesivo (disco ventral)** composto por microtúbulos e giardina. Habita a luz do duodeno e jejuno proximal, fixando-se intimamente ao glicocálice dos enterócitos.
  2. *Cisto (Forma de Resistência e Transmissão):* Estrutura elíptica/oval (8 a 12 µm) com parede espessa e refringente contendo 4 núcleos e restos de axonemas flagelares. É excretado nas fezes e possui resistência notável à cloração da água potável e a variações ambientais, permanecendo infectante em água fria e solo úmido por meses.
* **Cascata Fisiopatológica da Má Absorção:**
  1. O acoplamento mecânico de milhares de trofozoítos pelo disco suctório provoca atrofia das microvilosidades enterocíticas e dano às junções oclusivas (*tight junctions*).
  2. Redução drástica da atividade das enzimas da borda em escova (dissacaridases: lactase, maltase e sacarase), com acúmulo de carboidratos não digeridos na luz entérica que atraem água por osmose.
  3. Desconjugação de sais biliares pelas bactérias intestinais secundárias e inibição da lípase pancreática, impedindo a formação de micelas e a digestão de gorduras → **esteatorreia profusa** (fezes volumosas, pálidas, pastosas, brilhantes/gordurosas e fétidas).

---

### *Toxoplasma gondii* e a Relação One Health (Gatos vs. Gestantes)

\`\`\`mermaid
flowchart TD
    A["Felídeo Doméstico ou Silvestre (Único Hospedeiro Definitivo)"] --> B["Ciclo Sexuado Enteroepitelial com Formação e Eliminação de Oocistos Não Esporulados"]
    B --> C["Oocistos nas Fezes Recém-Defecadas: NÃO Infectantes (Exigem 1 a 5 Dias para Esporular)"]
    C --> D["Esporulação no Solo com Formação de 2 Esporocistos com 4 Esporozoítos cada"]
    D --> E["Ingestão por Hospedeiros Intermediários (Homem, Suíno, Bovino, Aves)"]
    E --> F["Formação de Cistos Teciduais com Bradizoítos em Músculos e Cérebro"]
    F --> G["Consumo de Carne Crua/Malcozida ou Hortaliças Irrigadas com Água Contaminada"]
    G --> H["Infecção Zoonótica Humana: Risco Teratogênico na Primoinfecção Gestacional"]
\`\`\`

* **O Papel Real do Gato na Transmissão:** O gato infectado elimina oocistos durante apenas **1 a 3 semanas em toda a sua vida** (após a primoinfecção). Além disso, os oocistos recém-eliminados nas fezes **NÃO são infectantes**, exigindo obrigatoriamente de **1 a 5 dias no ambiente** com oxigênio e temperatura adequada para esporular.
* **Prevenção Racional Zoonótica:** A remoção diária das fezes da caixa de areia elimina o risco de infecção antes da esporulação. A principal via de contaminação de mulheres grávidas no Brasil é a **ingestão de carne bovina/ovina/suína crua ou malpassada** contendo cistos teciduais com bradizoítos e hortaliças cruas irrigadas com água contaminada por oocistos esporulados.`
      },
      {
        id: 'sec_protozoo_03_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Pierre (Bulldog Francês com Giardíase)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Diagnóstico Coproparasitológico e Manejo Terapêutico da Giardíase Canina',
          patient: {
            name: 'Pierre',
            species: 'Canina',
            breed: 'Bulldog Francês',
            age: '4 meses',
            weightKg: 4.8,
            habitatOrEnvironment: 'Apartamento com saídas diárias em praças públicas de Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 120,
            respiratoryRateRpm: 26,
            temperatureCelsius: 38.6,
            mucousMembranes: 'Róseas e úmidas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Filhote adquirido há 3 semanas apresentando episódios contínuos de fezes amolecidas, amareladas e brilhantes, com odor rançoso desagradável e presença de muco. O tutor relata que o animal come com voracidade extrema, mas não ganha peso e tem o abdômen distendido por gases (meteorismo e borborigmos frequentes).',
          exams: [
            {
              category: 'coproparasitologia_especializada',
              title: 'Centrífugo-Flutuação em Sulfato de Zinco 33% (d = 1.18 g/mL)',
              findings: 'Pesquisa específica de cistos de protozoários em amostras fecais seriadas.',
              abnormalValues: [
                { parameter: 'Presença de Cistos de Giardia duodenalis', value: 'POSITIVO RELEVANTE (Múltiplos cistos ovais com 4 núcleos por campo)', reference: 'Ausente', status: 'critical' },
                { parameter: 'Aspecto Fecal', value: 'Fezes pastosas amareladas com gotas de gordura (Esteatorreia)', reference: 'Fezes cilíndricas castanhas moldadas', status: 'critical' },
                { parameter: 'Coproantígeno ELISA Giardia', value: 'POSITIVO', reference: 'Negativo', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com diagnóstico confirmado de giardíase intestinal em filhote de 4 meses, qual é a conduta farmacológica de primeira escolha e o manejo higiênico ambiental?',
          decisionOptions: [
            {
              id: 'opt_dec_prot3_1',
              label: 'Fenbendazol (50 mg/kg VO a cada 24h por 5 dias consecutivos) + Higienização do piso com água fervente ou amônio quaternário + Banho com xampu no filhote no 5º dia de tratamento para remover cistos aderidos ao pelo perianal',
              description: 'Terapia de primeira linha de altíssima segurança para filhotes, sem neurotoxicidade, associada ao controle mecânico de reinfecção.',
              isOptimal: true,
              consequenceText: 'Excelente conduta médica! O Fenbendazol eliminou a infecção com eficácia superior a 95% sem provocar os efeitos colaterais neurotóxicos (nistagmo/ataxia) do metronidazol. O banho no 5º dia removeu os cistos aderidos ao pelame da região perineal, impedindo a clássica autoinfecção por lambedura e garantindo a cura definitiva.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Fenbendazol por 5 dias associado a banho profilático perianal e higienização térmica',
                mechanism: 'Despolimerização dos microtúbulos de tubulina dos trofozoítos e remoção de cistos externos',
                effect: 'Normalização da integridade da borda em escova enterocítica e cessação da esteatorreia',
                clinicalMeaning: 'Recuperação do ganho ponderal e eliminação do risco de reinfecção'
              }
            },
            {
              id: 'opt_dec_prot3_2',
              label: 'Administrar Metronidazol na dose de 60 mg/kg BID por 14 dias contínuos sem realizar limpeza ambiental',
              description: 'Superdosagem tóxica de metronidazol com risco imediato de neurotoxicidade grave.',
              isOptimal: false,
              consequenceText: 'Intoxicação medicamentosa severa! A dose de 60 mg/kg de metronidazol ultrapassa largamente a margem terapêutica segura em filhotes (máx 20-25 mg/kg), provocando neurotoxicidade cerebelar e vestibular com nistagmo vertical, ataxia severa, rigidez extensora e convulsões.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Superdosagem tóxica de metronidazol por tempo prolongado',
                mechanism: 'Bloqueio de receptores GABAérgicos no cerebelo e tronco encefálico',
                effect: 'Síndrome vestibular e cerebelar aguda com perda de equilíbrio e convulsões',
                clinicalMeaning: 'Emergência neurológica iatrogênica com risco de dano permanente'
              }
            },
            {
              id: 'opt_dec_prot3_3',
              label: 'Apenas prescrever ração hipoalergênica e proibir qualquer contato com gatos por acreditar que o cão pegou giardíase do felino',
              description: 'Erro de diagnóstico etiológico e desconhecimento da transmissão da giardíase.',
              isOptimal: false,
              consequenceText: 'Conduta ineficaz! Giardia duodenalis é transmitida pela ingestão de cistos em água e alimentos contaminados, e não pelo contato direto com gatos. Sem o tratamento com fenbendazol, a má absorção persiste com atrofia das vilosidades e retardo de crescimento do filhote.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Falta de tratamento protozoocida específico e estigmatização incorreta de animais',
                mechanism: 'Manutenção da replicação de trofozoítos e destruição enzimática no duodeno',
                effect: 'Progressão da diarreia crônica com emaciação e déficit de desenvolvimento',
                clinicalMeaning: 'Falha clínica no manejo de parasitose entérica clássica'
              }
            }
          ],
          learningTakeaways: [
            'A Giardia duodenalis causa má absorção e esteatorreia por aderência do disco suctório aos enterócitos duodenais.',
            'O método diagnóstico padrão é a centrífugo-flutuação em Sulfato de Zinco (d = 1.18 g/mL), que não colapsa a parede cística.',
            'O Fenbendazol (50 mg/kg/dia por 3 a 5 dias) é o tratamento de primeira escolha; banhar o animal no último dia remove cistos perianais prevenindo autoinfecção.'
          ]
        }
      },
      {
        id: 'sec_protozoo_03_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Protozoários Entéricos & Saúde Única',
        exerciseId: 'ex_protozoo_03'
      }
    ]
  },
  {
    id: 'lesson_protozoo_04_ixodology_acaricide_resistance',
    moduleId: 'mod_protozoology_ectoparasites',
    title: 'Ixodologia Veterinária, Rhipicephalus microplus e Resistência a Acaricidas',
    shortDescription: 'Biologia do carrapato monoxeno, ciclo de 21 dias no hospedeiro, bioensaio de Drummond (IER) e mecanismos moleculares de resistência.',
    estimatedMinutes: 20,
    order: 4,
    concepts: ['concept_protozoology_ixodology_acaricide_resistance'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_protozoo_04_th1',
        type: 'theory',
        title: 'Biologia Comparada dos Carrapatos, Dinâmica de Pastagem e Genética da Resistência',
        contentMarkdown: `### O Ciclo Biológico do *Rhipicephalus microplus* (Carrapato-do-Boi)

O *Rhipicephalus microplus* é o ectoparasita de maior impacto econômico na pecuária brasileira, causando perdas anuais estimadas em mais de 3 bilhões de dólares em espoliação sanguínea, transmissão de hemoparasitas (TPB) e danos ao couro:
* **Espécie Monoxena Estrita:** Realiza todo o seu ciclo parasitário (de larva a teleógina) sobre um único indivíduo bovino:
  1. *Fase Parasitária (Exatamente 21 dias):*
     * *Dias 1 a 7:* A larva ingere sangue e linfa, sofrendo ecdise para **ninfa** aos 7 dias.
     * *Dias 7 a 14:* A ninfa alimenta-se e muda para **adulto (macho ou fêmea)** aos 14 dias.
     * *Dias 14 a 21:* Ocorre a cópula no corpo do bovino. A fêmea fecundada realiza a refeição sanguínea massiva e ingurgita-se nas últimas 24 a 48 horas, transformando-se na **teleógina ingurgitada** (~0.25 g) que se desprende espontaneamente e cai na pastagem no 21º dia.
  2. *Fase de Vida Livre (Não Parasitária - no solo e pasto):*
     * A teleógina caminha para a base da touceira de capim em busca de microclima úmido (> 80% UR) e temperatura amena, iniciando a postura de **3.000 a 4.500 ovos** e morrendo em seguida.
     * Após um período de incubação de 20 a 45 dias, eclodem as **larvas de vida livre (*micuins*)**, que migram ativamente para o topo das folhas de capim (*geotropismo negativo e fototropismo positivo*) à espera da passagem de um bovino.
* **Importância Epidemiológica:** Em qualquer momento, **apenas 5% da população total de carrapatos da fazenda está sobre o corpo dos bovinos; 95% da população encontra-se na pastagem** sob a forma de ovos e larvas de vida livre!

---

### Mecanismos Moleculares de Resistência Genética a Acaricidas

O uso empírico e repetitivo de banhos carrapaticidas com subdosagens gerou resistência generalizada em todo o Brasil:

\`\`\`mermaid
flowchart TD
    A["Aplicação Repetitiva de Acaricidas Químicos em Subdose no Rebanho"] --> B["Sobrevivência de Indivíduos Portadores de Mutações Genéticas Raras"]
    B --> C{"Classe Química Utilizada"}
    C -->|"Piretroides (Cipermetrina/Deltametrina)"| D["Mutação kdr no Canal de Sódio Axonal: Bloqueio do Fechamento Ineficaz"]
    C -->|"Organofosforados (Clorpirifós)"| E["Mutação Estrutural na Acetilcolinesterase + Hiperprodução de Esterases"]
    C -->|"Formamidinas (Amitraz)"| F["Mutação no Receptor de Octopamina do Sistema Nervoso do Carrapato"]
    C -->|"Lactonas (Ivermectina)"| G["Superexpressão de Bombas de Efluxo P-glicoproteína (P-gp)"]
    D --> H["População Rebanho Torna-se 100% Resistente com Falha de Controle no Campo"]
    E --> H
    F --> H
    G --> H
    H --> I["Colheita de Teleóginas para Biocarrapaticidograma Oficial (Teste de Drummond)"]
    I --> J["Cálculo do Índice de Eficácia Reprodutiva (IER): Base Eficaz se IER >= 95%"]
\`\`\`

* **O Biocarrapaticidograma (Teste de Drummond):** Colheita de 150 teleóginas ingurgitadas no gado para teste de imersão laboratorial em diferentes acaricidas comerciais. Mede-se a inibição da oviposição e a eclodibilidade dos ovos para deduzir o **Índice de Eficácia Reprodutiva (IER)**. Bases com IER < 95% devem ser imediatamente descartadas do manejo da fazenda.`
      },
      {
        id: 'sec_protozoo_04_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Fazenda Boa Esperança (Gestão da Resistência)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Interpretação de Biocarrapaticidograma e Manejo Integrado de Rhipicephalus microplus',
          patient: {
            name: 'Rebanho de Cria e Recria (800 Bovinos Nelore e Cruzados)',
            species: 'Bovina',
            breed: 'Nelore e Angus x Nelore',
            age: 'Lotes de desmame e novilhas de 12 a 24 meses',
            weightKg: 320,
            habitatOrEnvironment: 'Pastos degradados de Brachiaria brizantha em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 78,
            respiratoryRateRpm: 24,
            temperatureCelsius: 38.8,
            mucousMembranes: 'Róseas pálidas',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'O pecuarista relata que está aplicando banhos de aspersão com Cipermetrina a cada 14 dias há 6 meses, mas a infestação por carrapatos só aumenta. Os animais de cruzamento industrial apresentam centenas de teleóginas na barbela, entrepernas e virilha, com queda acentuada no ganho de peso diário (GMD) e lesões ulceradas na pele decorrentes de prurido e miíases secundárias.',
          exams: [
            {
              category: 'parasitologia_laboratorial',
              title: 'Laudo Oficial do Biocarrapaticidograma (Teste de Drummond com 150 Teleóginas)',
              findings: 'Avaliação comparativa da taxa de inibição reprodutiva (IER) das bases químicas comerciais.',
              abnormalValues: [
                { parameter: 'Cipermetrina 15% (Piretroide)', value: 'IER = 12% (Resistência Extrema comprovada)', reference: 'IER ≥ 95% (Base Eficaz)', status: 'critical' },
                { parameter: 'Clorpirifós 50% (Organofosforado puro)', value: 'IER = 78% (Resistência Intermediária)', reference: 'IER ≥ 95%', status: 'critical' },
                { parameter: 'Amitraz 12.5% (Formamidina)', value: 'IER = 84% (Eficácia Insuficiente)', reference: 'IER ≥ 95%', status: 'critical' },
                { parameter: 'Clorpirifós + Cipermetrina + Fluazuron (Associação com Inibidor de Quitina)', value: 'IER = 99.2% (Alta Eficácia Acaricida)', reference: 'IER ≥ 95%', status: 'normal' }
              ]
            }
          ],
          challengePrompt: 'Com base no laudo do biocarrapaticidograma revelando falha absoluta dos piretroides (IER de 12%) e eficácia do Fluazuron + Organofosforado (99.2%), qual é a estratégia de controle a ser implantada?',
          decisionOptions: [
            {
              id: 'opt_dec_prot4_1',
              label: 'Suspender imediatamente o uso de piretroides na fazenda + Adotar a formulação pour-on de Organofosforado associado a Fluazuron (inibidor da síntese de quitina) no início da primavera/verão + Calibração dos equipamentos e rotação de pastagens',
              description: 'Conduta baseada em bioensaio laboratorial fidedigno, substituindo a base resistente por inibidor de crescimento que quebra o ciclo biológico na pastagem.',
              isOptimal: true,
              consequenceText: 'Decisão zootécnica de altíssimo impacto e sucesso econômico! A substituição do piretroide ineficaz eliminou os gastos inúteis com produtos sem efeito. O Fluazuron esterilizou as teleóginas e impediu que as larvas na pastagem formassem exoesqueleto de quitina nas mudas, limpando a carga parasitária dos pastos em 60 dias e elevando o ganho de peso do lote.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Descarte da Cipermetrina resistente e adoção de Fluazuron guiada pelo Biocarrapaticidograma',
                mechanism: 'Bloqueio da polimerização de N-acetilglicosamina (quitina) nas fases de muda do carrapato',
                effect: 'Redução drástica (> 95%) da carga de larvas infestantes na pastagem e no rebanho',
                clinicalMeaning: 'Recuperação do ganho ponderal e proteção contra surtos de Tristeza Parasitária'
              }
            },
            {
              id: 'opt_dec_prot4_2',
              label: 'Dobrar a concentração de Cipermetrina na calda de pulverização e realizar banhos semanais para forçar a morte dos carrapatos resistentes',
              description: 'Aumento abusivo da dose de piretroide selecionando carrapatos supermutantes e gerando risco de intoxicação.',
              isOptimal: false,
              consequenceText: 'Desastre sanitário e ambiental! Carrapatos com mutação kdr no canal de sódio não respondem à cipermetrina em nenhuma concentração. Dobrar a dose gera intoxicação nos bovinos por absorção cutânea, resíduos ilegais de pesticida na carne e contaminação do lençol freático.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Superdosagem empírica de base química com resistência molecular comprovada',
                mechanism: 'Intoxicação por piretroides no gado e persistência da infestação parasitária',
                effect: 'Queda na imunidade dos bovinos com estresse químico e perda de peso continuada',
                clinicalMeaning: 'Prejuízo financeiro multiplicado com risco toxicológico grave'
              }
            },
            {
              id: 'opt_dec_prot4_3',
              label: 'Parar todo e qualquer carrapaticida e deixar a seleção natural eliminar os carrapatos sem intervenção',
              description: 'Omissão de controle em rebanho infestado de alta suscetibilidade.',
              isOptimal: false,
              consequenceText: 'Mortalidade em massa! Em animais de cruzamento industrial (Angus/Nelore), a ausência de controle do carrapato provoca espoliação sanguínea de até 1 a 2 litros de sangue por animal/semana, desencadeando surto generalizado de Tristeza Parasitária com dezenas de mortes.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Abandono negligente do controle de ectoparasitas em raças taurinas e cruzadas',
                mechanism: 'Espoliação sanguínea severa associada à transmissão massiva de Babesia e Anaplasma',
                effect: 'Surto fulminante de Tristeza Parasitária Bovina com anemia aguda e óbitos',
                clinicalMeaning: 'Devastação do plantel com mortalidade catastrófica'
              }
            }
          ],
          learningTakeaways: [
            'O Rhipicephalus microplus é um carrapato monoxeno que passa 21 dias no bovino, enquanto 95% da população reside no pasto sob a forma de ovos e larvas.',
            'O Biocarrapaticidograma (Teste de Drummond) mede o Índice de Eficácia Reprodutiva (IER); valores abaixo de 95% indicam descarte imediato da base química por resistência.',
            'Inibidores do desenvolvimento de quitina (Fluazuron) atuam bloqueando as mudas dos carrapatos, sendo fundamentais para saneamento da pastagem.'
          ]
        }
      },
      {
        id: 'sec_protozoo_04_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Ixodologia & Resistência a Acaricidas',
        exerciseId: 'ex_protozoo_04'
      }
    ]
  },
  {
    id: 'lesson_protozoo_05_mange_mites_ectoparasites',
    moduleId: 'mod_protozoology_ectoparasites',
    title: 'Sarnas e Ectoparasitoses: Sarcoptes, Demodex, Ctenocephalides e a Farmacologia das Isoxazolinas',
    shortDescription: 'Diferencial entre Sarcoptes e Demodex, raspado profundo com orvalho sanguíneo, DAPP e mecanismo de ação das Isoxazolinas (Sarolaner/Fluralaner).',
    estimatedMinutes: 20,
    order: 5,
    concepts: ['concept_protozoology_mange_mites_ectoparasites'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_protozoo_05_th1',
        type: 'theory',
        title: 'Morfobiologia das Sarnas, Diagnóstico Dermatológico e Farmacologia das Isoxazolinas',
        contentMarkdown: `### Diagnóstico Diferencial Clínico e Microscópico das Sarnas Caninas

A dermatologia parasitária de pequenos animais é dominada por dois grandes ácaros microscópicos com comportamentos biológicos opostos:

| Parâmetro | Sarna Sarcóptica (*Sarcoptes scabiei* var. *canis*) | Sarna Demodécica (*Demodex canis*) |
| :--- | :--- | :--- |
| **Habitat Cutâneo** | Epiderme superficial (escavador de túneis na camada córnea e granulosa) | Interior do folículo piloso e glândulas sebáceas |
| **Morfologia do Ácaro** | Corpo arredondado globoso com estrias e espinhos triangulares dorsais; patas curtas | Corpo alongado e afilado em formato de **"charuto"** com 4 pares de patas curtas anteriores |
| **Prurido** | **Intenso, incoercível e violento** (hipersensibilidade Tipo I e IV a fezes e saliva do ácaro) | **Ausente a discreto** (prurido só surge se houver piodermite bacteriana secundária associada) |
| **Distribuição Típica** | Bordas das orelhas, cotovelos, jarretes e abdômen ventral | Periocular ("olhar de óculos"), focinho, queixo e patas (**pododemodicose**) |
| **Reflexo Oto-Podal** | **Positivo em > 80% dos casos** (coceira involuntária com pata traseira ao friccionar a orelha) | Negativo |
| **Transmissibilidade** | **Altamente contagiosa e Zoonótica** (causa pápulas pruriginosas nos braços e abdômen de humanos) | **Não contagiosa e Não zoonótica** (ácaro comensal; prolifera por defeito na imunidade celular T) |
| **Técnica de Raspado** | Raspado superficial e extenso com lâmina embebida em óleo mineral | **Raspado cutâneo profundo com pinçamento prévio até obter orvalho sanguíneo** |

---

### A Revolução Terapêutica das Isoxazolinas no Século XXI

\`\`\`mermaid
flowchart TD
    A["Administração Oral de Isoxazolina (Fluralaner, Sarolaner, Afoxolaner, Lotilaner)"] --> B["Absorção Gastrointestinal Rápida e Ligação Altamente Específica a Proteínas Plasmáticas"]
    B --> C["Distribuição em Níveis Terapêuticos Prolongados no Fluido Tecidual e Pele"]
    C --> D["Picada/Ingestão de Tecido Cutâneo por Pulgas, Carrapatos, Sarcoptes ou Demodex"]
    D --> E["Bloqueio Alostérico Não Competitivo de Canais de Cloreto Dependentes de GABA e Glutamato"]
    E --> F["Impedimento da Entrada de Cloreto: Perda do Efeito Hiperpolarizante Inibitório nos Neurônios do Artrópode"]
    F --> G["Hiperexcitabilidade Descontrolada do Sistema Nervoso do Parasita com Paralisia Espástica"]
    G --> H["Morte Rápida dos Ectoparasitas em Poucas Horas com Eficácia > 99% e Altíssima Segurança"]
\`\`\`

* **Mecanismo de Ação Farmacológico das Isoxazolinas:** Atuam como antagonistas seletivos dos canais de cloreto dependentes de ácido gama-aminobutírico (GABA) e receptores de glutamato no sistema nervoso de insetos e ácaros. Como possuem afinidade **1.000 vezes maior** pelos receptores de artrópodes em relação aos receptores de mamíferos, oferecem margem terapêutica extraordinária, curando casos severos de sarna demodécica generalizada que antigamente exigiam banhos tóxicos repetidos com amitraz.`
      },
      {
        id: 'sec_protozoo_05_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Babi (Bulldog com Sarna Demodécica Generalizada)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Diagnóstico Parasitológico de Demodicose Canina e Terapia com Isoxazolinas',
          patient: {
            name: 'Babi',
            species: 'Canina',
            breed: 'Bulldog Inglês',
            age: '10 meses',
            weightKg: 21.5,
            habitatOrEnvironment: 'Residência urbana em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 110,
            respiratoryRateRpm: 24,
            temperatureCelsius: 38.7,
            mucousMembranes: 'Róseas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Fêmea jovem de Bulldog Inglês apresentando perda progressiva de pelos ao redor de ambos os olhos ("olhar de óculos"), comedões e espessamento hiperpigmentado no queixo e focinho, além de descamação e eritema interdigital nas 4 patas (pododermatite). O tutor relata que a cadela praticamente não se coça, mas exala odor seborreico rançoso acentuado. Um profissional anterior prescreveu prednisona oral para "alergia", o que fez as lesões se espalharem por todo o dorso em duas semanas.',
          exams: [
            {
              category: 'dermatologia_parasitologica',
              title: 'Raspado Cutâneo Profundo com Pinçamento Prévio e Orvalho Sanguíneo',
              findings: 'Microscopia direta sob objetiva de 10x e 40x com óleo mineral.',
              abnormalValues: [
                { parameter: 'Microscopia de Raspado Cutâneo', value: 'POSITIVO MASSIVO (> 40 ácaros de Demodex canis em formato de charuto por campo, incluindo ovos fusiformes e formas imaturas)', reference: 'Ausente ou raríssimo ácaro isolado', status: 'critical' },
                { parameter: 'Citologia por Fita Adesiva (Interdigital)', value: 'Presença moderada de cocos Gram-positivos (Foliculite/Piodermite bacteriana secundária)', reference: 'Ausência de bactérias aderidas', status: 'critical' },
                { parameter: 'Reflexo Oto-Podal', value: 'NEGATIVO', reference: 'Negativo', status: 'normal' }
              ]
            }
          ],
          challengePrompt: 'Confirmada a Sarna Demodécica Juvenil Generalizada com piodermite secundária exacerbada pelo uso iatrogênico de prednisona, qual é o protocolo terapêutico curativo e as recomendações de manejo reprodutivo?',
          decisionOptions: [
            {
              id: 'opt_dec_prot5_1',
              label: 'Suspender imediatamente a prednisona + Administrar Isoxazolina oral (Sarolaner ou Fluralaner em dose única com repetição conforme bula) + Xampu terapêutico à base de Clorexidina a 3% para piodermite secundária + Orientar castração por se tratar de defeito hereditário da imunidade celular',
              description: 'Terapia moderna de primeira linha com isoxazolinas, controle de infecção secundária e aconselhamento genético reprodutivo.',
              isOptimal: true,
              consequenceText: 'Excelente conduta dermatológica! O bloqueio imediato do corticoide permitiu a recuperação parcial da imunidade de células T. A Isoxazolina eliminou a população de Demodex canis em 30 dias com cura microscópica completa no raspado de controle. A castração preveniu a transmissão hereditária da suscetibilidade imunológica para as futuras gerações.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Suspensão de imunossupressor, administração de Isoxazolina e antissepsia tópica',
                mechanism: 'Paralisia espástica dos ácaros por bloqueio de canais GABAérgicos e restauração folicular',
                effect: 'Remissão completa da alopecia periocular, negativação do raspado e repilação total',
                clinicalMeaning: 'Cura clínica definitiva e eliminação da perpetuação genética da afecção'
              }
            },
            {
              id: 'opt_dec_prot5_2',
              label: 'Aumentar a dose de Prednisona para 2 mg/kg/dia para conter a descamação e aplicar pomada de iodo nas patas',
              description: 'Uso continuado e agressivo de corticosteroide em demodicose generalizada.',
              isOptimal: false,
              consequenceText: 'Deterioração clínica gravíssima! Aumentar a dose de corticoide aniquila a imunidade celular do paciente, permitindo que os ácaros Demodex se multipliquem em milhões, provocando foliculite pustulosa profunda, sepse bacteriana e desfecho potencialmente fatal.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Imunossupressão extrema com corticoide em ácaro dependente de imunodeficiência',
                mechanism: 'Proliferação descontrolada de Demodex canis nos folículos com rotura folicular (furunculose)',
                effect: 'Piodermite bacteriana profunda com celulite e risco de sepse sistêmica',
                clinicalMeaning: 'Evolução para caso refratário mutilante com risco de eutanásia'
              }
            },
            {
              id: 'opt_dec_prot5_3',
              label: 'Banhar o cão em óleo queimado de trator misturado com enxofre em pó a cada 3 dias',
              description: 'Prática empírica arcaica de alta toxicidade e crueldade animal.',
              isOptimal: false,
              consequenceText: 'Intoxicação química grave! Banhos com óleo de motor queimado contêm metais pesados (chumbo, cádmio) e hidrocarbonetos aromáticos altamente cancerígenos que causam dermatite de contato ulcerativa, insuficiência hepática e intoxicação sistêmica por absorção cutânea.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Aplicação tópica de substâncias cáusticas industriais tóxicas',
                mechanism: 'Destruição da barreira epidérmica e absorção sistêmica de hidrocarbonetos pesados',
                effect: 'Hepatotoxicidade aguda e necrose química da pele do animal',
                clinicalMeaning: 'Infração ética e intoxicação iatrogênica com risco de morte'
              }
            }
          ],
          learningTakeaways: [
            'Sarcoptes scabiei escava a epiderme superficial, provocando prurido feroz, reflexo oto-podal positivo e contágio zoonótico.',
            'Demodex canis é um ácaro folicular em formato de charuto que prolifera por defeito genético ou adquirido na imunidade celular T; o uso de corticoides é formalmente contraindicado.',
            'As Isoxazolinas (Fluralaner, Sarolaner, Afoxolaner) revolucionaram a dermatologia veterinária ao curar com altíssima eficácia tanto a sarna demodécica quanto a sarcóptica.'
          ]
        }
      },
      {
        id: 'sec_protozoo_05_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Sarnas & Farmacologia das Isoxazolinas',
        exerciseId: 'ex_protozoo_05'
      }
    ]
  }
];

// ==========================================
// 2. BOVINOCULTURA DE CORTE & LEITE
// ==========================================
export const BOVINE_PROD_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_bovine_01',
    conceptId: 'concept_bovine_feedlot_sara_laminitis',
    type: 'multiple_choice',
    prompt: 'Em um confinamento de gado de corte com dieta de alto grão (85% concentrado), qual é a cascata fisiopatológica que conecta a Acidose Ruminal Subaguda (SARA) ao aparecimento de claudicação e laminite asséptica nos animais?',
    options: [
      {
        id: 'opt_bov_1_1',
        text: 'A fermentação acelerada de amido reduz o pH ruminal (< 5.5), provocando morte e lise de bactérias Gram-negativas com liberação de lipopolissacarídeo (LPS) e histamina; absorvidos pela mucosa ruminal lesionada, esses mediadores causam vasoconstrição, estase microvascular no cório laminar do casco e degradação da membrana basal dérmico-epidérmica.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A queda sustentada do pH ruminal (< 5.5 por mais de 3-5h/dia) provoca a morte em massa de bactérias Gram-negativas celulolíticas. Ocorre liberação torrencial de endotoxina (LPS) associada à histamina formada pela descarboxilação de aminoácidos por bactérias tolerantes a ácido. A absorção sistêmica pela parede ruminal inflamada desencadeia disfunção endotelial no leito capilar das lâminas podais, ativando metaloproteinases e levando ao descolamento da terceira falange.'
      },
      {
        id: 'opt_bov_1_2',
        text: 'O excesso de carboidratos solúveis se converte diretamente em cristais de ácido úrico que se precipitam nas articulações dos membros pélvicos, gerando gota articular semelhante à humana.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Bovinos são ruminantes com ciclo da ureia funcional eficiente e não acumulam ácido úrico articular; a laminite é uma pododermatite asséptica difusa vascular e inflamatória.'
      },
      {
        id: 'opt_bov_1_3',
        text: 'A acidez ruminal destrói a absorção de vitamina C no omaso, provocando escorbuto bovino com fragilidade dos cascos.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Bovinos sintetizam sua própria vitamina C nos hepatócitos a partir da glicose e não dependem de absorção omasal.'
      },
      {
        id: 'opt_bov_1_4',
        text: 'O amido não digerido passa intacto para o cólon e é fermentado por fungos que produzem esporos neurotóxicos que paralisam a marcha do boi.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Embora ocorra fermentação no intestino grosso, a lesão podal é primariamente vasoativa e endotóxica desencadeada pela lise bacteriana e liberação de histamina/LPS.'
      }
    ]
  },
  {
    id: 'ex_bovine_02',
    conceptId: 'concept_bovine_transition_ketosis_hypocalcemia',
    type: 'multiple_choice',
    prompt: 'No período de transição de vacas leiteiras de alta produção (3 semanas pré a 3 semanas pós-parto), por que dietas pré-parto ricas em potássio e sódio (DCAD positivo) predispõem criticamente à ocorrência de Hipocalcemia Puerperal (Febre do Leite)?',
    options: [
      {
        id: 'opt_bov_2_1',
        text: 'Porque o excesso de cátions induz uma leve alcalose metabólica sistêmica no sangue da vaca, promovendo uma alteração conformacional no receptor de paratormônio (PTH-R) nos ossos e túbulos renais, tornando os tecidos refratários à ação do PTH para mobilizar o cálcio.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! Em sangue alcalino (induzido por excesso de cátions K⁺ e Na⁺ nas forragens), a ligação do PTH ao seu receptor tecidual ósseo e renal é prejudicada biofisicamente. Assim, no momento do parto, quando a demanda de cálcio para o colostro explode em poucas horas, a vaca é incapaz de mobilizar o pool de cálcio dos ossos ou aumentar a reabsorção renal, despencando o cálcio ionizado sérico.'
      },
      {
        id: 'opt_bov_2_2',
        text: 'Porque o potássio quelata o cálcio no rúmen formando sabões insolúveis que são eliminados nas fezes sem absorção.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. São os lipídios insaturados livres em excesso que formam sabões insolúveis com cálcio e magnésio no rúmen, e não o potássio iônico.'
      },
      {
        id: 'opt_bov_2_3',
        text: 'Porque o excesso de sódio faz o úbere secretar todo o cálcio da circulação na urina antes do parto.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A excreção urinária de cálcio é regulada pelo PTH nos néfrons distais, e o úbere secreta cálcio exclusivamente para o colostro/leite.'
      },
      {
        id: 'opt_bov_2_4',
        text: 'Porque a alcalose metabólica destrói as glândulas paratireoides por autólise enzimática aguda no momento do parto.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. As paratireoides permanecem intactas e até hipersecretam PTH; o defeito é puramente a refratariedade periférica dos receptores sob pH sanguíneo alcalino.'
      }
    ]
  },
  {
    id: 'ex_bovine_03',
    conceptId: 'concept_bovine_milk_ccs_cmt_diagnostics',
    type: 'multiple_choice',
    prompt: 'Na rotina de ordenha mecânica de uma fazenda leiteira, qual é o teste diário rápido realizado ao pé da vaca para detectar mastite subclínica e qual o princípio de reação do reagente com o leite?',
    options: [
      {
        id: 'opt_bov_3_1',
        text: 'California Mastitis Test (CMT); o detergente alquil-aril-sulfonato lisa a membrana dos leucócitos (células somáticas), liberando DNA que forma um gel viscoso proporcional à inflamação.',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! O reagente do CMT contém um surfactante que rompe as membranas celulares das células somáticas (leucócitos neutrófilos atraídos pela infecção). O DNA desoxirribonucleico livre se desdobra e polimeriza com o reagente formando um gel espesso. Quanto maior a contagem de células somáticas (CCS), mais viscoso o gel (+ a ++++).'
      },
      {
        id: 'opt_bov_3_2',
        text: 'Teste da caneca de fundo escuro para detectar mastite subclínica nos primeiros jatos.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A caneca de fundo preto/estriado detecta mastite CLÍNICA (grumos, pus, fibrina ou sangue nos primeiros jatos), sendo incapaz de identificar mastite subclínica sem alterações visuais.'
      },
      {
        id: 'opt_bov_3_3',
        text: 'Teste do alizarol a 72°GL para avaliar acidez e contagem inflamatória por quarto mamário.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O alizarol avalia a estabilidade térmica das caseínas e acidez da amostra (leite ácido ou leite instável não-ácido LINA), não a contagem inflamatória por quarto mamário.'
      },
      {
        id: 'opt_bov_3_4',
        text: 'Cromatografia líquida de alta performance (HPLC) ao pé da vaca na ordenha.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. HPLC é uma técnica analítica laboratorial complexa para detecção de resíduos químicos e antibióticos, e não um teste de triagem diário na sala de ordenha.'
      }
    ]
  },
  {
    id: 'ex_bovine_04',
    conceptId: 'concept_bovine_mastitis_contagious_environmental',
    type: 'multiple_choice',
    prompt: 'Qual a conduta profilática e sanitária consagrada para conter a disseminação de Staphylococcus aureus (mastite contagiosa crônica) em um rebanho leiteiro e por que o tratamento antibacteriano intramamário durante a lactação apresenta baixa taxa de sucesso?',
    options: [
      {
        id: 'opt_bov_4_1',
        text: 'Adoção rigorosa de Linha de Ordenha (vacas sadias primeiro, infectadas por último) associada a pós-dipping barreira; a baixa eficácia na lactação (< 15-20%) decorre da formação de microabscessos intramamários fibrosos e biofilmes bacterianos que impedem a penetração do antimicrobiano.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O Staphylococcus aureus coloniza profundamente o parênquima mamário e induz fibrose focal intensa (microabscessos) com sobrevivência facultativa intracelular em neutrófilos e macrófagos. Por isso, aplicar antimicrobianos intramamários durante a lactação tem baixíssima taxa de cura, gera resíduos no leite e alto custo. A segregação em linha de ordenha impede a contaminação cruzada pelas teteiras mecânicas, devendo o tratamento ser planejado para a Terapia de Vaca Seca (TVS).'
      },
      {
        id: 'opt_bov_4_2',
        text: 'Aplicar antibiótico parenteral de amplo espectro em 100% das vacas lactantes e permitir que as infectadas sejam ordenhadas primeiro para "limpar as teteiras".',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e desastroso! Ordenhar vacas infectadas antes das sadias contamina todas as teteiras mecânicas, disseminando o patógeno para o rebanho inteiro.'
      },
      {
        id: 'opt_bov_4_3',
        text: 'Apenas lavar os tetos com água da torneira sem secar com papel, pois a umidade impede a adesão das bactérias ao esfíncter.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Acoplar teteiras em tetos úmidos faz a água contaminada com matéria orgânica escorrer para o interior do conjunto, causando uma explosão de mastites.'
      },
      {
        id: 'opt_bov_4_4',
        text: 'O S. aureus é uma bactéria ambiental do esterco e barro que não se transmite pela ordenhadeira mecânica.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. S. aureus é o patógeno arquetípico de mastite CONTAGIOSA, cujo reservatório primário é o próprio úbere infectado de outras vacas do rebanho.'
      }
    ]
  },
  {
    id: 'ex_bovine_05',
    conceptId: 'concept_bovine_iatf_reproduction_economics',
    type: 'multiple_choice',
    prompt: 'No protocolo clássico de Inseminação Artificial em Tempo Fixo (IATF) de 3 manejos em vacas de corte e leite, qual é o papel hormonal do Benzoato de Estradiol no Dia 0 e da Prostaglandina F2α (PGF2α) no Dia 8?',
    options: [
      {
        id: 'opt_bov_5_1',
        text: 'No D0, o Benzoato de Estradiol associado à Progesterona promove regressão do folículo dominante antigo por feedback negativo e induz a emergência síncrona de uma nova onda folicular cerca de 4 dias depois; no D8, a PGF2α induz a luteólise do corpo lúteo, permitindo a queda da progesterona e o crescimento final do novo folículo pré-ovulatório.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! No Dia 0, a combinação de P4 com Benzoato de Estradiol suprime os pulsos de LH e FSH, forçando a atresia de folículos pré-existentes e disparando a emergência de uma nova onda folicular perfeitamente homogênea. No Dia 8, a retirada do implante de P4 somada à PGF2α garante a lise total do tecido lúteo funcional, permitindo que o novo folículo dominante atinja a ovulação sincronizada 48 horas depois (D10).'
      },
      {
        id: 'opt_bov_5_2',
        text: 'No D0, o Benzoato de Estradiol provoca ovulação imediata do óvulo maduro; no D8, a PGF2α mantém o corpo lúteo ativo para sustentar a prenhez.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. No D0 com dispositivo de P4 de alta concentração, o estrógeno NÃO induz ovulação (pois o pico de LH está bloqueado pela progesterona), mas sim atresia e sincronização de onda. No D8, a PGF2α causa luteólise (morte do corpo lúteo), e não manutenção.'
      },
      {
        id: 'opt_bov_5_3',
        text: 'O Benzoato de Estradiol atua dilatando a cérvix para passagem da pipeta, enquanto a PGF2α estimula a produção de leite no úbere.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A passagem da pipeta só ocorre no D10 durante a inseminação; no D0 a cérvix não é manipulada para sêmen, e a PGF2α é um potente agente luteolítico.'
      },
      {
        id: 'opt_bov_5_4',
        text: 'O protocolo de IATF dispensa hormônios, utilizando apenas luz artificial e bioestimulação com touro rufião.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A IATF baseia-se na sincronização farmacológica rigorosa da ovulação com progestágenos, estrógenos e prostaglandinas para inseminação em horário pré-determinado sem observação de estro.'
      }
    ]
  }
];

export const BOVINE_PROD_LESSONS: LearningLesson[] = [
  // ==========================================
  // AULA 1: SARA & LAMINITE EM CONFINAMENTO
  // ==========================================
  {
    id: 'lesson_bovine_01_feedlot_sara',
    moduleId: 'mod_bovine_prod',
    title: 'Confinamento de Corte: Fisiopatologia da Acidose Ruminal (SARA) & Laminite',
    shortDescription: 'Dietas de alto grão, transição alimentar, queda do pH ruminal (< 5.5), endotoxinas (LPS), histamina e pododermatite asséptica difusa.',
    estimatedMinutes: 15,
    order: 1,
    concepts: ['concept_bovine_feedlot_sara_laminitis', 'concept_bovine_milk_transition_mastitis'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_bov_01_th1',
        type: 'theory',
        title: 'Microbiota Ruminal, Dinâmica de Fermentação de Alto Grão e a Cascata da Laminite',
        contentMarkdown: `# Aula Universitária: Nutrição de Confinamento — Da Acidose Subaguda ao Colapso Podal

> 📖 Referência Canônica: Radostits, O. M. et al. *Clínica Veterinária: Um Tratado das Doenças dos Bovinos, Ovinos, Suínos, Caprinos e Equinos*, 9ª ed. Guanabara Koogan, Cap. 8: Enfermidades do Sistema Digestório dos Ruminantes. Dirk, G. et al. *Bovine Medicine: Diseases and Husbandry of Cattle*, 3rd ed. Wiley-Blackwell. NRC — *Nutrient Requirements of Beef Cattle*, 8th rev. ed. National Academies Press.

### A Revolução dos Confinamentos & O Desafio Ruminal

Na moderna pecuária de corte brasileira (com grande concentração de confinamentos intensivos nos polos do Noroeste e Centro-Oeste Paulista), a busca por encurtamento do ciclo de abate elevou as dietas para patamares extremos de concentrado (75% a 88% de grãos como milho moído, sorgo e subprodutos energéticos). Essa estratégia nutricional desafia a estabilidade biológica da câmara de fermentação do rúmen.

---

### A Dinâmica da Acidose Ruminal: Aguda vs. Subaguda (SARA)

A microbiota ruminal opera sob equilíbrio simbiótico entre três grandes grupos:
* **Microbiota Celulolítica (Fibrolítica):** *Fibrobacter succinogenes*, *Ruminococcus albus*. Degrada forragem e celulose, produzindo predominantemente **Ácido Acético** (precursor de gordura). Requer pH neutro (6.2 a 6.8). Quando o pH cai abaixo de 6.0, essas bactérias paralisam sua atividade metabólica.
* **Microbiota Amilolítica:** *Streptococcus bovis*, *Succinimonas amylolytica*. Degrada amido e açúcares solúveis, produzindo **Ácido Propiônico** (precursor da gliconeogênese hepática).
* **Bactérias Produtoras de Lactato:** Em sobrecarga repentina de concentrado, *Streptococcus bovis* e *Lactobacillus spp.* replicam-se exponencialmente, gerando ácido lático (isômeros D e L), que é 10 vezes mais forte que os ácidos graxos voláteis (AGVs).

| Parâmetro | Rúmen Fisiológico | Acidose Ruminal Subaguda (SARA) | Acidose Lática Aguda Clínica |
|---|---|---|---|
| **pH Ruminal** | 6.2 a 6.8 | **5.0 a 5.5** (por > 3 a 5 horas/dia) | **< 5.0** (persistente) |
| **Predomínio de AGV** | Acetato > Propionato > Butirato | Aumento agudo de Propionato | Acúmulo de D- e L-Lactato |
| **Consumo de Alimento** | Constante e regular | Consumo em "dentes de serra" (oscilação diária) | Anorexia total |
| **Aspecto das Fezes** | Pastosas homogêneas com anéis concêntricos | Fezes heterogêneas fluidas, amareladas e espumosas | Diarreia aquosa profusa fétida com fibrina |
| **Desfecho Sistêmico** | Ganho de peso ótimo | Rumenite crônica, abscessos hepáticos e **laminite** | Choque hipovolêmico osmótico, atonia e morte |

---

### A Cascata Patológica da Laminite Ruminal

A laminite associada à SARA não é uma infecção bacteriana do casco, mas uma **pododermatite asséptica difusa de origem metabólica e vascular**:

\`\`\`mermaid
flowchart TD
    A["Dieta com Sobrecarga de Concentrado / Falta de Fibra Efetiva"] --> B["Fermentação Excessiva de Amido e Queda de pH Ruminal (< 5.5)"]
    B --> C["Morte e Lise em Massa de Bactérias Gram-Negativas Celulolíticas"]
    C --> D["Liberação Torrencial de Endotoxinas (LPS) e Histamina Livre"]
    D --> E["Rumenite Química com Microerosões e Quebra da Barreira Epitelial"]
    E --> F["Absorção Sistêmica de LPS/Histamina para a Circulação Sanguínea"]
    F --> G["Disfunção Microvascular no Cório Laminar do Casco"]
    G --> H["Isquemia, Ativação de Metaloproteinases e Descolamento da Terceira Falange (P3)"]
\`\`\`

1. **Lise Bacteriana e Liberação de Mediadores:** A queda do pH abaixo de 5.5 provoca a lise massiva da parede celular das bactérias Gram-negativas sensíveis ao ácido, liberando gigantescas quantidades de **Lipopolissacarídeo (LPS ou Endotoxina)**. Simultaneamente, a descarboxilação bacteriana do aminoácido histidina em meio ácido gera **Histamina livre**.
2. **Absorção Transmucosa:** O ácido lático e os AGVs não dissociados lesionam o estrato córneo das papilas ruminais (**rumenite química**), permitindo que LPS e histamina extravasem diretamente para os capilares da veia porta.
3. **Lesão Microvascular Podal:** Ao atingir o leito arteriolar do cório laminar do casco bovino, esses mediadores causam vasoconstrição inicial violenta seguida de dilatação capilar e estase microvascular com trombose.
4. **Colapso Estrutural:** O edema isquêmico ativa metaloproteinases de matriz que degradam as fibras colágenas que fixam a membrana basal das lâminas dérmicas às lâminas epidérmicas do casco. Sob o peso corporal imenso do boi, a **terceira falange (P3) sofre rotação e afundamento**, comprimindo o plexo solar contra o estojo córneo inferior, resultando em dor extrema, sola delgada, úlcera de sola e hemorragia na linha branca.

> 💡 Pérola Clínica / Prova de Residência: O conceito zootécnico de **Fibra Fisicamente Efetiva (peNDF)** é a barreira mecânica que previne a SARA. O rúmen exige partículas de fibra longa (> 1.2 a 1.9 cm, mensuráveis pela Peneira de Penn State) para estimular a mastigação e o reflexo de **ruminação**, que conduz à secreção diária de até **150 a 180 litros de saliva rica em Bicarbonato de Sódio e Fosfato**, os principais agentes tamponantes endógenos do rúmen!`
      },
      {
        id: 'sec_bov_01_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Nutricional: Lote 12 - Boi Tornado (Nelore)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Zootécnico e Clínico de SARA e Laminite em Confinamento Intensivo',
          patient: {
            name: 'Boi Tornado (Lote 12)',
            species: 'Bovino de Corte',
            breed: 'Nelore Inteiro',
            age: '24 meses',
            weightKg: 480,
            habitatOrEnvironment: 'Confinamento intensivo a céu aberto com pista de trato automatizada em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 88,
            respiratoryRateRpm: 28,
            temperatureCelsius: 38.8,
            mucousMembranes: 'Rosadas com leve congestão episcleral',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Lote de 120 garrotes Nelore foi transicionado de pastagem degradada para dieta com 85% de concentrado (milho moído fino + farelo de soja + polpa cítrica) em apenas 5 dias devido a atraso no cronograma da fazenda. Há 3 dias os animais apresentam oscilação de consumo de matéria seca (dias comem tudo, dias deixam sobra no cocho). Hoje pela manhã, vários animais foram vistos relutantes a caminhar até a pista de alimentação, com arqueamento dorsal e passos curtos ("caminhar sobre ovos"). Fezes do lote estão amareladas, aquosas e com bolhas de gás.',
          exams: [
            {
              category: 'physical_nutritional',
              title: 'Rumenocentese Guiada (pH Ruminal) + Escore Fecal e Podal',
              findings: 'Colheita estéril de fluido ruminal por punção do flanco esquerdo 4 horas após o trato matinal.',
              abnormalValues: [
                { parameter: 'pH do Fluido Ruminal', value: '5.2 (Acidose Subaguda)', reference: '6.2 - 6.8', status: 'critical' },
                { parameter: 'Motilidade Ruminal', value: '1 contração fraca / 2 min', reference: '2 a 3 contrações vigorosas / 2 min', status: 'low' },
                { parameter: 'Escore de Fezes (Escala 1 a 5)', value: 'Escore 1.5 (Fezes líquidas e espumosas com grãos de milho intactos)', reference: 'Escore 3.0 (Pastosa com anel central)', status: 'critical' },
                { parameter: 'Escore de Locomoção (Escala 1 a 5)', value: 'Escore 3 (Claudicação moderada com dorso arqueado)', reference: 'Escore 1 (Passada normal)', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Identificado quadro de SARA e laminite subclínica em lote confinado com pH ruminal de 5.2, qual é a intervenção nutricional e corretiva prioritária?',
          decisionOptions: [
            {
              id: 'opt_dec_bov1_1',
              label: 'Reestruturação gradual da dieta: elevar a Fibra Fisicamente Efetiva (peNDF com feno picado grosso a 15-20% da MS) + Adicionar Bicarbonato de Sódio (0.75-1.0% da MS) e Monensina Sódica (25-30 ppm)',
              description: 'Restabelecer a motilidade ruminal pela estimulação mecânica da mastigação, neutralizar o excesso de íons H⁺ com tamponante químico e modular a fermentação de amido com ionóforo.',
              isOptimal: true,
              consequenceText: 'Conduta nutricional e zootécnica perfeita! O aumento da fibra efetiva estimula a ruminação imediata com produção de saliva rica em bicarbonato. O bicarbonato adicionado estabiliza o pH acima de 5.8 em 48 horas, e a monensina sódica inibe seletivamente as bactérias amilolíticas produtoras de lactato (Streptococcus bovis), interrompendo a liberação de LPS podotóxico.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Aumento da fibra efetiva, adição de tampão alcalinizante e ionóforo',
                mechanism: 'Estímulo da salivação endógena, estabilização do pH ruminal > 6.0 e inibição de bactérias Gram-positivas produtoras de ácido',
                effect: 'Cessação da lise bacteriana celulolítica, interrupção da liberação de LPS/histamina e restauração da perfusão laminar do casco',
                clinicalMeaning: 'Recuperação do consumo homogêneo de MS, remissão da claudicação do lote e ganho de peso diário sustentado'
              }
            },
            {
              id: 'opt_dec_bov1_2',
              label: 'Aumentar a quantidade de milho moído para 95% para os bois comerem mais rápido e aplicar antibiótico no lote',
              description: 'Subir ainda mais o teor energético para compensar as sobras de cocho.',
              isOptimal: false,
              consequenceText: 'Desastre nutricional absoluto! Elevar o concentrado causará acidose lática aguda hiperaguda (pH < 4.5), atonia ruminal total, rumenite necrotizante, choque hipovolêmico por atração osmótica de água para o rúmen e mortalidade em massa de bois no lote.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Sobrecarga hiperglicídica de concentrado em rúmen já acidótico',
                mechanism: 'Explosão populacional de Lactobacillus acidófilos com produção maciça de ácido lático',
                effect: 'Desidratação osmótica sistêmica severa e necrose por desnudamento da mucosa do rúmen',
                clinicalMeaning: 'Morte de dezenas de animais por acidose metabólica descompensada e choque'
              }
            },
            {
              id: 'opt_dec_bov1_3',
              label: 'Apenas lavar os cascos dos animais com água e não mexer na composição do cocho',
              description: 'Tratar a afecção como problema mecânico de casco sem intervir na causa primária ruminal.',
              isOptimal: false,
              consequenceText: 'Erro grosseiro de manejo. A causa primária da laminite bovina em confinamento é 100% metabólica/ruminal. Ignorar a dieta fará os animais desenvolverem úlceras de sola severas com descarte precoce e prejuízo financeiro irreparável.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Omissão de correção da acidose ruminal da dieta',
                mechanism: 'Perpetuação da liberação endotóxica contínua no leito vascular do casco',
                effect: 'Avanço do afundamento da terceira falange e perfuração da sola pelo ápice ósseo de P3',
                clinicalMeaning: 'Claudicação crônica irreversível com condenação de carcaças no frigorífico'
              }
            }
          ],
          learningTakeaways: [
            'A SARA ocorre quando o pH ruminal oscila entre 5.0 e 5.5 por períodos acumulados superiores a 3 a 5 horas diárias.',
            'A laminite ruminal é uma pododermatite asséptica difusa vascular mediada por LPS bacteriano e histamina livre absorvidos pela mucosa ruminal lesionada.',
            'A fibra fisicamente efetiva (peNDF) é inegociável em dietas de alto concentrado para garantir salivação tamponante e estabilidade ruminal.'
          ]
        }
      },
      {
        id: 'sec_bov_01_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Fisiopatologia da Acidose Ruminal & Laminite',
        exerciseId: 'ex_bovine_01'
      }
    ]
  },

  // ==========================================
  // AULA 2: PERÍODO DE TRANSIÇÃO, CETOSE & FEBRE DO LEITE
  // ==========================================
  {
    id: 'lesson_bovine_02_transition_metabolism',
    moduleId: 'mod_bovine_prod',
    title: 'Período de Transição Bovino: Balanço Energético Negativo, Cetose & Febre do Leite',
    shortDescription: 'Metabolismo periparto (3 semanas pré a 3 pós), mobilização de NEFA, carência de oxaloacetato, BHB, esteatose hepática, DCAD e hipocalcemia.',
    estimatedMinutes: 15,
    order: 2,
    concepts: ['concept_bovine_transition_ketosis_hypocalcemia', 'concept_bovine_milk_transition_mastitis'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_bov_02_th1',
        type: 'theory',
        title: 'A Batalha Metabólica do Periparto: Lipólise, Cetogênese e a Fisiologia do Cálcio',
        contentMarkdown: `# Aula Universitária: O Período de Transição da Vaca Leiteira — Da Cetose à Hipocalcemia

> 📖 Referência Canônica: Goff, J. P. *The monitoring, prevention, and treatment of milk fever and subclinical hypocalcemia in dairy cows*. Vet. J. 2008. Herdt, T. H. *Metabolic diseases of dairy cattle: Ketosis and fatty liver*. Vet. Clin. North Am. Food Anim. Pract. Kaneko, J. J.; Harvey, J. W.; Bruss, M. L. *Clinical Biochemistry of Domestic Animals*, 6th ed. Academic Press, Cap. 3: Carbohydrate Metabolism.

### A Janela Crítica das 6 Semanas (O Período de Transição)

O período de transição estende-se de **3 semanas antes do parto (pré-parto) até 3 semanas após o parto (pós-parto)**. É nessa janela temporal que ocorrem mais de 80% das enfermidades metabólicas, infecciosas e reprodutivas que determinam o sucesso econômico da lactação de uma vaca leiteira.
* **O Paradoxo Fisiológico do Parto:** No pré-parto imediato, o útero gravídico volumoso comprime fisicamente o rúmen e os níveis elevados de estrogênio inibem o apetite, provocando uma queda fisiológica de **30% a 35% no Consumo de Matéria Seca (CMS)**.
* **A Explosão da Demanda:** No dia do parto, a síntese de colostro e leite exige subitamente **3 vezes mais glicose e 9 vezes mais cálcio** do que a vaca utilizava no período seco, enquanto a ingestão de alimento demora de 4 a 6 semanas para atingir o pico pós-parto.

---

### Balanço Energético Negativo (BEN), Esteatose e Cetose

Diante do déficit glicídico agudo, a vaca entra em **Balanço Energético Negativo (BEN)** severo e dispara a lipólise neuroendócrina (adrenalina e GH ativam a lipase hormônio-sensível no tecido adiposo):

\`\`\`mermaid
flowchart TD
    A["Queda de CMS no Pré-Parto + Pico Súbito de Lactação no Parto"] --> B["Balanço Energético Negativo (BEN) e Queda de Propionato"]
    B --> C["Mobilização Maciça de Gordura Corporal (NEFA Elevado no Sangue)"]
    C --> D["Captação Hepática de NEFA Supera a Capacidade de Exportação de VLDL"]
    D --> E["Acúmulo Intracelular de Triglicerídeos nos Hepatócitos (Lipidose Hepática)"]
    D --> F["Carência de Oxaloacetato: Desvio de Acetil-CoA para Cetogênese"]
    F --> G["Hiperacetonemia e Hipercetonúria (Elevação de BHB Sérico > 1.4 mmol/L)"]
    G --> H["Cetose Clínica: Anorexia Seletiva, Hálito Cetônico, Fezes Secas e Queda de Produção"]
\`\`\`

1. **Inundação de NEFA:** O tecido adiposo libera quantidades colossais de **Ácidos Graxos Não Esterificados (NEFA)** na circulação sanguínea.
2. **O Gargalo Hepático Bovino:** Ao chegarem ao fígado, os NEFA são oxidados ou reesterificados em triglicerídeos. Para exportar triglicerídeos, os hepatócitos necessitam empacotá-los em lipoproteínas de densidade muito baixa (**VLDL**). Entretanto, **a espécie bovina possui uma taxa de síntese de VLDL geneticamente muito lenta**. O excesso de gordura não exportada acumula-se no citoplasma dos hepatócitos, originando a **Lipidose Hepática (Fígado Gorduroso)**, que compromete a capacidade gliconeogênica do órgão.
3. **A Cetogênese:** A oxidação de gordura gera excesso de Acetil-CoA. Normalmente, a Acetil-CoA entraria no ciclo de Krebs reagindo com o **oxaloacetato**. Porém, em vacas com BEN, todo o oxaloacetato disponível é desviado para a síntese de glicose (**gliconeogênese**). Sem oxaloacetato suficiente, a Acetil-CoA acumulada é desviada para a síntese hepática de **corpos cetônicos**: **$eta$-Hidroxibutirato (BHB)**, Acetoacetato e Acetona.
4. **Cetose Subclínica vs. Clínica:** Considera-se cetose subclínica quando o BHB sérico ultrapassa **1.2 a 1.4 mmol/L**. Na cetose clínica (BHB > 3.0 mmol/L), a vaca apresenta anorexia seletiva (recusa concentrado e come apenas feno), perda de peso acelerada, fezes secas escuras com muco e hálito doce característico de acetona.

---

### Hipocalcemia Puerperal (Febre do Leite) & O Mecanismo da Dieta Aniônica (DCAD)

A cada litro de colostro produzido, a vaca exporta cerca de 2.0 a 2.3 gramas de cálcio. Uma vaca que produz 10 litros de colostro no primeiro dia perde **mais de 20 gramas de cálcio**, o que equivale a quase **7 vezes todo o cálcio ionizado circulante no seu sangue** (cerca de 3 gramas).
* **Fisiopatologia da Refratariedade ao PTH:** O paratormônio (PTH), secretado pelas paratireoides, atua nos ossos estimulando a reabsorção osteoclástica e nos túbulos renais ativando a 1-$lpha$-hidroxilase (que produz vitamina D ativa - Calcitriol). Contudo, **se a vaca consome forragens ricas em potássio e sódio no pré-parto**, o sangue torna-se discretamente alcalino (alcalose metabólica). Em meio alcalino, os receptores de PTH sofrem alteração estérica e **perdem a sensibilidade ao hormônio**, impedindo a mobilização de cálcio ósseo no momento crítico do parto!
* **A Revolução do DCAD Negativo (Dieta Aniônica):** O manejo padrão-ouro internacional baseia-se no cálculo da **Diferença Cátion-Ânion da Dieta (DCAD)**:

$$	ext{DCAD (mEq/kg)} = (	ext{Na}^+ + 	ext{K}^+) - (	ext{Cl}^- + 	ext{S}^{2-})$$

No pré-parto (últimos 21 dias), fornecem-se **sais aniônicos** (cloreto de amônio, cloreto de cálcio, sulfato de magnésio) para alcançar um DCAD negativo entre **-50 e -150 mEq/kg de MS**. Isso induz uma acidose metabólica subclínica compensada, verificada pelo **pH urinário entre 6.0 e 6.8**, restaurando a conformação ótima do receptor de PTH e garantindo mobilização óssea imediata no momento do parto!`
      },
      {
        id: 'sec_bov_02_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Vaca Estrela (Hipocalcemia Puerperal)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Atendimento Emergencial de Febre do Leite e Cetose Tipo II no Pós-Parto',
          patient: {
            name: 'Estrela',
            species: 'Bovino Leiteiro',
            breed: 'Holandesa P.O.',
            age: '5 anos (4ª lactação)',
            weightKg: 620,
            habitatOrEnvironment: 'Piquete maternidade com histórico de pastagem rica em capim-elefante (alto potássio)'
          },
          vitals: {
            heartRateBpm: 96,
            respiratoryRateRpm: 16,
            temperatureCelsius: 37.1,
            mucousMembranes: 'Rosadas e secas; extremidades corporais e base dos chifres frias',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'Vaca pariu gêmeos há 16 horas sem assistência. O tratador a encontrou caída na baia de maternidade em decúbito esternal permanente, incapaz de se levantar. A cabeça está fletida para trás repousando sobre o flanco direito (postura patognomônica de pescoço em "S"). Apresenta atonia ruminal completa, ausência de fezes no reto e pupilas dilatadas (midríase). T = 37.1°C (hipotermia severa).',
          exams: [
            {
              category: 'laboratorial_metabolic',
              title: 'Bioquímica Metabólica Rápida ao Pé da Vaca',
              findings: 'Avaliação de cálcio ionizado capilar e dosagem de BHB sérico.',
              abnormalValues: [
                { parameter: 'Cálcio Ionizado Sérico', value: '0.55 mmol/L (Estágio II de Hipocalcemia)', reference: '1.05 - 1.30 mmol/L', status: 'critical' },
                { parameter: 'BHB Sanguíneo (Corpos Cetônicos)', value: '2.8 mmol/L (Cetose Moderada)', reference: '< 1.2 mmol/L', status: 'critical' },
                { parameter: 'Glicemia Capilar', value: '38 mg/dL', reference: '45 - 75 mg/dL', status: 'low' },
                { parameter: 'Temperatura Retal', value: '37.1 °C (Hipotermia)', reference: '38.0 - 39.2 °C', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com cálcio ionizado crítico de 0.55 mmol/L, decúbito com pescoço em "S", hipotermia e BHB de 2.8 mmol/L, qual é o protocolo de intervenção de emergência?',
          decisionOptions: [
            {
              id: 'opt_dec_bov2_1',
              label: 'Infusão IV LENTA de Gluconato de Cálcio 23% (500 mL) sob ausculta cardíaca rigorosa contínua + Fornecimento oral de Propilenoglicol (300 g/dia) para suporte gliconeogênico',
              description: 'Restaurar imediatamente o cálcio ionizado da placa motora miocárdica e muscular com cálcio intravenoso aquecido à temperatura corporal e fornecer substrato para o ciclo de Krebs combater a cetose.',
              isOptimal: true,
              consequenceText: 'Decisão impecável de emergência metabólica! A infusão de cálcio intravenosa lenta (ao longo de 15 a 20 minutos) restaura a contratilidade das fibras musculares esqueléticas e cardíacas. A ausculta contínua previne arritmias fatais e parada cardíaca em sístole. Durante a infusão, a vaca arrota, defeca fezes retidas, aquece as extremidades e se levanta em poucos minutos.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Infusão venosa lenta de cálcio e administração de precursor de propionato (propilenoglicol)',
                mechanism: 'Restauração do limiar de excitabilidade da placa motora e fornecimento de oxaloacetato ao fígado',
                effect: 'Recuperação do tônus muscular esquelético, elevação da temperatura corporal e queima metabólica de corpos cetônicos',
                clinicalMeaning: 'A vaca se levanta da baia, normaliza a motilidade ruminal e previne complicações de decúbito prolongado (síndrome da vaca caída)'
              }
            },
            {
              id: 'opt_dec_bov2_2',
              label: 'Injetar 500 mL de Gluconato de Cálcio em bolus intravenoso ultrarrápido em 1 minuto para agir mais rápido',
              description: 'Infundir o frasco inteiro de cálcio com pressão máxima da mangueira.',
              isOptimal: false,
              consequenceText: 'Erro iatrogênico fatal! O cálcio injetado em bolus rápido provoca hipercalcemia aguda violenta no miocárdio, despolarizando o nó sinusal e induzindo arritmias ventriculares fulminantes e fibrilação cardíaca irreversível em parada em sístole na frente do proprietário.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Infusão intravenosa rápida de sais de cálcio concentrado',
                mechanism: 'Espasmo tetânico dos sarcômeros do miocárdio por sobrecarga iônica súbita',
                effect: 'Arritmia ventricular severa e fibrilação ventricular',
                clinicalMeaning: 'Óbito iatrogênico imediato durante o procedimento'
              }
            },
            {
              id: 'opt_dec_bov2_3',
              label: 'Aplicar anti-inflamatório Dexametasona e oferecer feno seco esperando a vaca se levantar sozinha',
              description: 'Usar corticoide para desinflamar e aguardar recuperação passiva.',
              isOptimal: false,
              consequenceText: 'Conduta inaceitável. A paralisia flácida e o pescoço em "S" são decorrentes puramente da ausência de cálcio nas sinapses neuromusculares. Sem cálcio, a vaca permanece em decúbito, desenvolve necrose isquêmica dos músculos da coxa (compressão nervosa isquiática) e morre por choque e timpanismo secundário.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Omissão de reposição iônica de cálcio em decúbito por hipocalcemia',
                mechanism: 'Paralisia flácida contínua do diafragma e rúmen com compressão tecidual prolongada',
                effect: 'Síndrome da vaca caída irreversível com necrose muscular do compartimento posterior',
                clinicalMeaning: 'Eutanásia inevitável após 48 horas de decúbito permanente'
              }
            }
          ],
          learningTakeaways: [
            'A febre do leite no Estágio II cursa com paralisia flácida, decúbito com pescoço em "S", atonia ruminal e hipotermia.',
            'A infusão de gluconato de cálcio intravenosa DEVE ser administrada lentamente (15-20 min) sob ausculta cardíaca rigorosa contínua para prevenir fibrilação cardíaca.',
            'O uso de dietas aniônicas (DCAD negativo entre -50 e -150 mEq/kg) no pré-parto previne a hipocalcemia ao sensibilizar os receptores teciduais de PTH.'
          ]
        }
      },
      {
        id: 'sec_bov_02_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Balanço Energético & Fisiopatologia da Hipocalcemia',
        exerciseId: 'ex_bovine_02'
      }
    ]
  },

  // ==========================================
  // AULA 3: FISIOLOGIA MAMÁRIA, CCS & TESTE DE CMT
  // ==========================================
  {
    id: 'lesson_bovine_03_milk_quality_ccs',
    moduleId: 'mod_bovine_prod',
    title: 'Fisiologia Mamária & Qualidade do Leite: CMT, Dinâmica de CCS e CBT',
    shortDescription: 'Esfíncter do teto, migração de leucócitos (células somáticas), reação do detergente no CMT, contagem microbiológica e padrões normativos da IN 76/77.',
    estimatedMinutes: 15,
    order: 3,
    concepts: ['concept_bovine_milk_ccs_cmt_diagnostics', 'concept_bovine_milk_transition_mastitis'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_bov_03_th1',
        type: 'theory',
        title: 'Anatomia da Glândula Mamária, Barreira do Teto e o Fundamento Bioquímico do CMT',
        contentMarkdown: `# Aula Universitária: Qualidade do Leite & Contagem de Células Somáticas (CCS)

> 📖 Referência Canônica: Philpot, W. N.; Nickerson, S. C. *Vencendo a Luta Contra a Mastite*. Margeta. Ministério da Agricultura e Pecuária (MAPA) — *Instruções Normativas nº 76 e 77/2018 (Regulamentos Técnicos de Qualidade e Boas Práticas do Leite)*. National Mastitis Council (NMC) — *Current Concepts of Bovine Mastitis*, 5th ed.

### O Úbere Bovino: Quatro Glândulas Totalmente Independentes

A anatomia da glândula mamária bovina é composta por quatro quartos mamários (dois anteriores e dois posteriores) completamente separados por ligamentos suspensores e septos teciduais impermeáveis. Não existe circulação ductal cruzada de leite entre um quarto e outro: **uma infecção em um quarto mamário é um evento anatomoclinicamente isolado**.

---

### As Três Barreiras de Defesa do Teto

Para que uma bactéria invada a cisterna do leite, ela precisa superar três defesas primárias:
1. **O Esfíncter Muscular Liso:** Músculo circular localizado na ponta do teto que mantém o óstio ocluso. Durante a ordenha mecânica ou sucção do bezerro, o esfíncter se distende sob o vácuo. Ao término da ordenha, **o canal do teto permanece aberto e relaxado por 30 a 45 minutos**.
2. **O Tampão de Queratina:** O estrato córneo do canal do teto descama continuamente uma substância rica em **ácidos graxos de cadeia média (ácido mirístico, láurico e palmítico)** e proteínas catiônicas que exercem potente ação bacteriostática e bactericida física contra coliformes e estafilococos.
3. **Células Somáticas e Sistema Fagocitário:** Na ausência de inflamação, o leite possui menos de 100.000 células somáticas por mililitro (compostas por cerca de 60% de macrófagos, 25% de linfócitos e menos de 10% de neutrófilos). Quando bactérias vencem o esfíncter e atingem o epitélio secretor, os macrófagos alveolares reconhecem antígenos e liberam citocinas pró-inflamatórias (IL-1, IL-8, TNF-α). Isso deflagra uma **migração torrencial de leucócitos neutrófilos** dos capilares sanguíneos para a luz alveolar, fazendo os neutrófilos representarem mais de 90% a 95% das células somáticas no leite mastítico.

---

### O Princípio Bioquímico do California Mastitis Test (CMT)

O CMT é o exame prático diário mais importante da bacia leiteira mundial para diagnosticar a **mastite subclínica** (quando o leite parece visualmente normal na caneca de fundo escuro, mas a inflamação microscópica está destruindo as células secretoras):

\`\`\`mermaid
flowchart TD
    A["Infecção Bacteriana Subclínica na Cisterna Alveolar"] --> B["Quimiotaxia e Diapedese Maciça de Neutrófilos (> 800.000 céls/mL)"]
    B --> C["Adição do Reagente CMT (Lauril Sulfato de Sódio a 3%)"]
    C --> D["Surfactante Lisa as Membranas Celulares dos Neutrófilos"]
    D --> E["Liberação e Desdobramento dos Filamentos de DNA Nuclear"]
    E --> F["Polimerização Macromolecular do DNA com o Reagente"]
    F --> G["Formação de Gel Viscoso Proporcional à Concentração de Células (Score 1+ a 3+)"]
\`\`\`

* **Composição do Reagente:** Tensoativo aniônico (alquilaril sulfonato ou lauril sulfato de sódio a 3%) adicionado do corante indicador de pH púrpura de bromocresol (ajuda a identificar aumento de pH decorrente de extravasamento de plasma sanguíneo alcalino).
* **Mecanismo:** O detergente dissolve as bicamadas lipídicas das membranas dos neutrófilos presentes no leite colhido na raquete de quatro poços. O DNA nuclear livre se desdobra em longas cadeias moleculares que se entrelaçam e polimerizam com o reagente. Quanto maior a quantidade de leucócitos (CCS), mais densa, espessa e viscosa torna-se a formação do gel (desde escore traços até escore 3+ com gel consistente tipo clara de ovo).

---

### Os Padrões Normativos Oficiais (IN MAPA 76 e 77/2018)

No Brasil, os laticínios fiscalizados pelo SIF operam sob os parâmetros estabelecidos pelas Instruções Normativas 76 e 77:
* **Contagem de Células Somáticas (CCS) do Tanque:** Limite máximo normativo de **400.000 céls/mL** (média geométrica trimestral).
* **Contagem Bacteriana Total (CBT) do Tanque:** Limite máximo normativo de **100.000 UFC/mL** (mensura a contaminação microbiológica decorrente de falhas de limpeza dos equipamentos de ordenha e resfriamento deficiente abaixo de 4.0°C).
* **Impacto Tecnológico da Alta CCS:** Leites com CCS > 400.000 apresentam altas concentrações de plasmina e lipases que quebram caseína e gordura, **reduzindo o rendimento na fabricação de queijos em até 15% a 20%** e causando defeitos de sabor rançoso e menor vida de prateleira no leite fluido pasteurizado e UHT.`
      },
      {
        id: 'sec_bov_03_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Lote de Lactação (Fazenda Santa Cecília)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Mapeamento Sanitário de CCS e Teste de CMT em Rebanho Leiteiro',
          patient: {
            name: 'Rebanho Santa Cecília (Vaca 142 - Holandesa)',
            species: 'Bovino Leiteiro',
            breed: 'Holandesa 31/32',
            age: '4 anos',
            weightKg: 580,
            habitatOrEnvironment: 'Free Stall com camas de areia e ordenha mecânica espinha de peixe (Ourinhos/SP)'
          },
          vitals: {
            heartRateBpm: 68,
            respiratoryRateRpm: 22,
            temperatureCelsius: 38.6,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'O produtor recebeu notificação de penalização do laticínio porque a média trimestral do tanque comunitário de 3.000 litros atingiu 790.000 céls/mL de CCS, com desconto de R$ 0,12 por litro entregue. Nenhuma vaca apresenta mastite clínica com grumos na caneca de fundo escuro. Você inicia o diagnóstico com a aplicação do teste de CMT individual em todos os animais do lote.',
          exams: [
            {
              category: 'milk_quality_diagnostics',
              title: 'Teste de CMT por Quarto Mamário Individual na Vaca 142',
              findings: 'Avaliação dos 4 poços da raquete plástica de CMT após ordenha dos primeiros jatos.',
              abnormalValues: [
                { parameter: 'CMT Quarto Anterior Direito (AD)', value: 'Score 3+ (Gel gelatinoso espesso que adere ao fundo)', reference: 'Negativo (Líquido homogêneo)', status: 'critical' },
                { parameter: 'CMT Quarto Posterior Direito (PD)', value: 'Score 2+ (Viscosidade evidente sem gel central rígido)', reference: 'Negativo', status: 'high' },
                { parameter: 'CMT Quartos Esquedos (AE e PE)', value: 'Negativo (Sem formação de gel)', reference: 'Negativo', status: 'normal' },
                { parameter: 'Estimativa de CCS no Quarto AD', value: '> 5.000.000 céls/mL', reference: '< 200.000 céls/mL', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com quartos positivos em CMT (Score 3+ e 2+) em vacas sem grumos visíveis, qual é a conduta diagnóstica e sanitária de escolha?',
          decisionOptions: [
            {
              id: 'opt_dec_bov3_1',
              label: 'Coleta asséptica de leite dos quartos reagentes para Cultura Microbiológica e Antibiograma + Mapeamento de todo o rebanho para linha de ordenha temporária',
              description: 'Identificar a espécie bacteriana exata antes de qualquer tratamento, evitando uso cego de antibióticos e contaminação do tanque com resíduos.',
              isOptimal: true,
              consequenceText: 'Decisão impecável de medicina veterinária baseada em evidências! A cultura microbiológica revela se o patógeno é contagioso (ex: Staphylococcus aureus) ou ambiental (Streptococcus uberis), permitindo definir se o controle exigirá linha de ordenha permanente ou intervenção na higiene das camas de areia. Além disso, evita o descarte prematuro e desnecessário de leite com resíduos de inibidores.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Diagnóstico microbiológico asséptico direcionado por quarto mamário',
                mechanism: 'Identificação etiológica do agente causal e determinação do perfil de sensibilidade',
                effect: 'Eliminação do uso empírico ineficaz de antimicrobianos e contenção da transmissão cruzada',
                clinicalMeaning: 'Queda progressiva da CCS do rebanho para < 350.000 céls/mL e recuperação da bonificação financeira do laticínio'
              }
            },
            {
              id: 'opt_dec_bov3_2',
              label: 'Infundir tubos intramamários de cefalosporina em todos os 4 quartos de todas as vacas do rebanho hoje mesmo',
              description: 'Realizar tratamento em massa com antibiótico em lactação sem exame microbiológico.',
              isOptimal: false,
              consequenceText: 'Conduta desastrosa e antiética! Tratar o rebanho inteiro em lactação gera um prejuízo astronômico pelo descarte de milhares de litros de leite por resíduos químicos. Além disso, se a bactéria for S. aureus em microabscessos ou leveduras/Mycoplasma, a taxa de cura com antibióticos comerciais é nula.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso indiscriminado e massivo de antimicrobianos em vacas lactantes',
                mechanism: 'Presença de inibidores no leite do tanque comunitário e seleção de cepas resistentes',
                effect: 'Contaminação total da carga de leite com descarte sumário pelo caminhão do laticínio',
                clinicalMeaning: 'Prejuízo financeiro catastrófico de dezenas de milhares de reais sem controle da doença'
              }
            },
            {
              id: 'opt_dec_bov3_3',
              label: 'Ignorar o resultado do CMT, pois como não há grumos na caneca de fundo escuro o leite pode ser comercializado normalmente',
              description: 'Não tomar nenhuma ação porque a mastite não é clínica visível.',
              isOptimal: false,
              consequenceText: 'Erro primário de gestão sanitária! A mastite subclínica não tratada é a maior ladra silenciosa de lucros da fazenda: uma vaca com CMT 3+ perde até 20% da sua capacidade produtiva, e a persistência de quartos infectados contamina as vacas sadias pelas teteiras durante a ordenha.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Negligência diagnóstica perante mastite subclínica crônica',
                mechanism: 'Disseminação horizontal contínua de bactérias pelas teteiras mecânicas',
                effect: 'Aumento generalizado da CCS do tanque para > 1.000.000 céls/mL',
                clinicalMeaning: 'Suspensão da coleta do leite pelo laticínio por descumprimento da IN 76/77 do MAPA'
              }
            }
          ],
          learningTakeaways: [
            'O teste de CMT lisa as membranas das células somáticas com detergente, liberando DNA que forma gel proporcional à inflamação.',
            'A IN 76/77 do MAPA estabelece o limite máximo de 400.000 céls/mL para CCS e 100.000 UFC/mL para CBT no tanque.',
            'Quartos mamários positivos no CMT devem ser submetidos à cultura microbiológica asséptica para guiar o manejo e a terapia.'
          ]
        }
      },
      {
        id: 'sec_bov_03_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: CMT & Gestão de Células Somáticas',
        exerciseId: 'ex_bovine_03'
      }
    ]
  },

  // ==========================================
  // AULA 4: MASTITE CONTAGIOSA VS. AMBIENTAL & TVS
  // ==========================================
  {
    id: 'lesson_bovine_04_mastitis_contagious_env',
    moduleId: 'mod_bovine_prod',
    title: 'Mastite Bovina: Diferenciação Contagiosa vs. Ambiental & Terapia de Vaca Seca',
    shortDescription: 'Etiopatogenia de Staphylococcus aureus vs Escherichia coli, linha de ordenha, desinfecção de tetos (pré e pós-dipping) e terapia de vaca seca (TVS).',
    estimatedMinutes: 15,
    order: 4,
    concepts: ['concept_bovine_mastitis_contagious_environmental', 'concept_bovine_milk_transition_mastitis'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_bov_04_th1',
        type: 'theory',
        title: 'Etiopatogenia Comparada da Mastite, Choque Coliforme e a Terapia de Vaca Seca',
        contentMarkdown: `# Aula Universitária: Mastite Bovina — Contagiosa vs. Ambiental & Terapia de Secagem

> 📖 Referência Canônica: Radostits, O. M. et al. *Clínica Veterinária*, 9ª ed. Cap. 10: Doenças da Glândula Mamária. Philpot, W. N.; Nickerson, S. C. *Mastitis: Countermeasures for an Epidemic*. National Mastitis Council (NMC) — *Laboratory Handbook on Bovine Mastitis*, 3rd ed.

### O Duelo Microbiológico: Onde Cada Inimigo se Esconde

A mastite bovina manifesta-se sob duas dinâmicas epidemiológicas completamente distintas, exigindo estratégias de controle antagônicas:

\`\`\`mermaid
flowchart TD
    subgraph Contagiosa["MASTITE CONTAGIOSA"]
        A1["Reservatório: Úbere de Vacas Infectadas"] --> B1["Transmissão: Teteiras e Mãos do Ordenhador"]
        B1 --> C1["Patógenos: Staphylococcus aureus, Streptococcus agalactiae"]
        C1 --> D1["Controle Ouro: Linha de Ordenha + Pós-Dipping Barreira"]
    end
    subgraph Ambiental["MASTITE AMBIENTAL"]
        A2["Reservatório: Fezes, Barro e Camas Orgânicas Úmidas"] --> B2["Transmissão: Penetração pelo Esfíncter Relaxado entre Ordenhas"]
        B2 --> C2["Patógenos: Escherichia coli, Klebsiella pneumoniae, Strep. uberis"]
        C2 --> D2["Controle Ouro: Higiene de Instalações + Pré-Dipping e Secagem"]
    end
\`\`\`

---

### Mastite Contagiosa (*Staphylococcus aureus*): A Infecção Silenciosa e Crônica

* **Mecanismo de Evasão:** O *Staphylococcus aureus* possui proteína A (que se liga à porção Fc dos anticorpos neutralizando a fagocitose), produz biofilmes densos e induz a formação de **microabscessos fibróticos profundos** no parênquima mamário, além de penetrar intracelularmente em neutrófilos e macrófagos.
* **Por que a Taxa de Cura na Lactação é Menor que 15-20%?** A fibrose ao redor dos microabscessos impede que os antibióticos intramamários atinjam concentrações bactericidas mínimas (CIM) nos focos da infecção. Tratar vacas em lactação resulta em gastar fortunas com tubos intramamários e descarte de leite sem obter a cura bacteriológica.
* **Medida de Controle Mandatória:** 
  1. **Linha de Ordenha Rigorosa:** Ordenhar 1º novilhas primíparas sadias; 2º vacas multíparas sem histórico de mastite; 3º vacas com histórico prévio curadas; 4º vacas crônicas infectadas por *S. aureus* (as teteiras mecânicas NUNCA devem tocar uma vaca sadia após ter ordenhado uma infectada sem desinfecção de choque com ácido peracético).
  2. **Pós-Dipping com Barreira:** Imediatamente após a retirada do conjunto de teteiras, mergulhar o teto em solução viscosa de iodo ativo (0.5 a 1.0%) com formadores de filme polimérico para selar o orifício.

---

### Mastite Ambiental (*Escherichia coli*): O Choque Endotóxico Hiperagudo

* **A Transmissão:** Ocorre entre as ordenhas, quando a vaca deita no esterco, barro ou cama de compostagem úmida enquanto o esfíncter do teto ainda está relaxado e aberto.
* **A Fisiopatologia do Choque Coliforme:**
  - A *E. coli* prolifera em poucas horas na cisterna do teto. O sistema imune da vaca reage enviando milhões de neutrófilos que fagocitam e lisam as bactérias.
  - A destruição das bactérias Gram-negativas libera **quantidades massivas de Lipopolissacarídeo (LPS)**. O LPS é absorvido pelos vasos linfáticos mamários e atinge a circulação sistêmica, ativando macrófagos pulmonares e hepáticos.
  - Ocorre liberação explosiva de citocinas pirógenas e vasodilatadoras (TNF-α, IL-1, óxido nítrico), desencadeando **Choque Séptico/Endotóxico**: taquicardia (> 100 bpm), pulso filiforme fraco, hipotermia (< 37.5°C), desidratação severa (enoftalmia com olhos afundados na órbita), diarreia profusa e secreção do quarto mamário serosa amarelo-palha com grumos de fibrina ("água de carne ou cerveja choca").
* **Tratamento de Emergência:** Não basta aplicar antibiótico no quarto! O tratamento visa salvar a vida da vaca: **Fluidoterapia hipervolêmica intravenosa** (solução salina hipertônica a 7.2% seguida de 40 a 60 litros de Ringer Lactato oral/venoso), **AINE Flunixina Meglumina** (1.1 a 2.2 mg/kg IV para neutralizar a tempestade de tromboxano e prostaglandinas), **esvaziamento frequente do quarto mamário a cada 2 a 3 horas com auxílio de Ocitocina (10 a 20 UI IM)** para remover a carga de endotoxina física da glândula.

---

### A Terapia de Vaca Seca (TVS): A Oportunidade de Ouro da Cura

O período de secagem (60 dias antes da data prevista do parto) é o momento zootécnico e médico ideal para curar infecções crônicas e prevenir novas infecções no periparto:
* **Infusão de Antimicrobiano de Ação Prolongada:** Tubo intramamário formulado com veículos de liberação lenta (ex: cloxacilina benzatina ou cefalônio) que mantém concentrações terapêuticas bactericidas por até **30 a 45 dias no úbere involuído sem descarte comercial de leite**.
* **O Selante Interno de Teto:** Infusão de uma pasta inerte atóxica à base de **Subnitrato de Bismuto**. Ela se acomoda na cisterna do teto sem ser absorvida, mimetizando artificialmente o tampão de queratina natural da vaca durante todo o período seco, impedindo fisicamente a ascensão de bactérias ambientais.`
      },
      {
        id: 'sec_bov_04_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Vaca Mimosa 204 (Mastite Coliforme Hiperaguda)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Emergencial do Choque Endotóxico por Mastite Ambiental Coliforme',
          patient: {
            name: 'Mimosa 204',
            species: 'Bovino Leiteiro',
            breed: 'Holandesa P.O.',
            age: '4 anos',
            weightKg: 610,
            habitatOrEnvironment: 'Lote de alta produção alojado em piquete com lama pós-chuvas em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 115,
            respiratoryRateRpm: 44,
            temperatureCelsius: 37.2,
            mucousMembranes: 'Congestas vermelho-escuras (mucosas tóxicas) com TPC prolongado',
            capillaryRefillTimeSec: 3.5
          },
          anamnesis: 'Vaca produziu 42 kg de leite no dia anterior. Hoje pela manhã foi encontrada em decúbito esternal no piquete, gemente, olhos fundos (desidratação estimada em 9%), extremidades frias e recusa total de alimento. O quarto mamário posterior direito está hiperêmico, tenso, doloroso ao toque, secretando um líquido seroso amarelo-avermelhado com grumos de fibrina ("água de carne").',
          exams: [
            {
              category: 'clinical_pathology',
              title: 'Exame Físico da Glândula Mamária + Citologia de Secreção',
              findings: 'Avaliação clínica urgente na baia de isolamento e esgotamento do quarto.',
              abnormalValues: [
                { parameter: 'Pressão Arterial Sistólica (PAS)', value: '75 mmHg (Choque Distributivo)', reference: '110 - 130 mmHg', status: 'critical' },
                { parameter: 'Frequência Cardíaca', value: '115 bpm (Taquicardia severa)', reference: '60 - 80 bpm', status: 'critical' },
                { parameter: 'Temperatura Corporal', value: '37.2 °C (Hipotermia por colapso endotóxico)', reference: '38.0 - 39.2 °C', status: 'critical' },
                { parameter: 'Coloração da Secreção Mamária', value: 'Serossanguinolenta tipo água de carne', reference: 'Leite branco homogêneo', status: 'critical' },
                { parameter: 'Cultura Microbiológica Rápida', value: 'Isolamento de Escherichia coli Gram-negativa', reference: 'Estéril', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com choque endotóxico por E. coli, desidratação severa e hipotensão de 75 mmHg, qual é o protocolo de ressuscitação de emergência?',
          decisionOptions: [
            {
              id: 'opt_dec_bov4_1',
              label: 'Ressuscitação com NaCl 7.2% hipertônica (4 mL/kg = 2.4 L IV rápido) seguida de fluidoterapia isotônica abundante + AINE Flunixina Meglumina (2.2 mg/kg IV) + Esvaziamento do quarto a cada 2h com Ocitocina + Antimicrobiano sistêmico (Ceftiofur/Marbofloxacino)',
              description: 'Restaurar a pressão arterial por atração osmótica, bloquear a tempestade inflamatória de prostaglandinas e drenar fisicamente a endotoxina do quarto mamário.',
              isOptimal: true,
              consequenceText: 'Conduta salvadora de padrão ouro em medicina bovina de alta produção! A salina hipertônica puxa líquidos para o leito intravascular instantaneamente, reativando a filtração glomerular e salvando a vaca do colapso circulatório. A flunixina neutraliza o choque endotóxico e o esgotamento frequente com ocitocina remove as endotoxinas que causariam necrose do úbere.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Expansão volêmica rápida com salina hipertônica associada a anti-endotóxico e drenagem mamária',
                mechanism: 'Restauração da volemia e pressão arterial média com neutralização da tempestade de citocinas',
                effect: 'Queda da frequência cardíaca de 115 para 78 bpm, reaquecimento das extremidades e proteção do parênquima',
                clinicalMeaning: 'Reversão do choque séptico, sobrevivência da vaca de alta produção e preservação funcional do úbere'
              }
            },
            {
              id: 'opt_dec_bov4_2',
              label: 'Apenas aplicar uma pomada de antibiótico intramamário no quarto e fechar o teto sem tirar o líquido podre',
              description: 'Focar apenas no tratamento tópico intramamário sem ressuscitação volêmica.',
              isOptimal: false,
              consequenceText: 'Erro médico fatal! Fechar o teto mantém bilhões de moléculas de endotoxina LPS presas dentro do quarto sob pressão, acelerando sua absorção para a circulação sistêmica. A vaca morrerá de choque endotóxico irreversível nas próximas 6 horas.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Retenção de exsudato purulento rico em endotoxina sem suporte hemodinâmico',
                mechanism: 'Absorção massiva contínua de LPS pela rede linfática do úbere edemaciado',
                effect: 'Vasodilatação periférica descompensada, coagulação intravascular e anóxia tecidual',
                clinicalMeaning: 'Parada cardiorrespiratória por choque séptico refratário'
              }
            },
            {
              id: 'opt_dec_bov4_3',
              label: 'Oferecer água fria no balde e aplicar cálcio subcutâneo achando que é febre do leite',
              description: 'Confundir o decúbito de choque com hipocalcemia puerperal sem examinar a mama.',
              isOptimal: false,
              consequenceText: 'Falha diagnóstica grosseira! O animal em choque endotóxico não tem febre do leite primária; o cálcio subcutâneo em animal mal perfundido não é absorvido e forma necrose tecidual no ponto de injeção.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Erro diagnóstico sem exame semiótico do sistema mamário',
                mechanism: 'Permanência da hipoperfusão sistêmica grave e desidratação',
                effect: 'Falência de múltiplos órgãos secundária à sepse coliforme',
                clinicalMeaning: 'Óbito do animal em poucas horas por negligência semiótica'
              }
            }
          ],
          learningTakeaways: [
            'A mastite ambiental por coliformes (E. coli) libera LPS e induz choque endotóxico grave com hipotermia e hipotensão.',
            'O tratamento prioritário da mastite coliforme hiperaguda é a ressuscitação volêmica vigorosa, o uso de Flunixina Meglumina e a ordenha frequente com Ocitocina.',
            'A Terapia de Vaca Seca (TVS) com antibiótico de longa ação associado ao selante interno de bismuto é a ferramenta mais eficaz de prevenção.'
          ]
        }
      },
      {
        id: 'sec_bov_04_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Mastite Contagiosa vs. Ambiental & TVS',
        exerciseId: 'ex_bovine_04'
      }
    ]
  },

  // ==========================================
  // AULA 5: ECONOMIA DO LEITE & PROTOCOLOS DE IATF
  // ==========================================
  {
    id: 'lesson_bovine_05_repro_iatf_economics',
    moduleId: 'mod_bovine_prod',
    title: 'Economia da Qualidade do Leite & Biotecnologia Reprodutiva (IATF)',
    shortDescription: 'Impacto econômico da qualidade do leite, bonificações de laticínios, fisiologia folicular e protocolos hormonais de IATF (P4, Benzoato/Cipionato de Estradiol, PGF2α e eCG).',
    estimatedMinutes: 15,
    order: 5,
    concepts: ['concept_bovine_iatf_reproduction_economics', 'concept_bovine_milk_transition_mastitis'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_bov_05_th1',
        type: 'theory',
        title: 'Gestão Econômica da Fazenda Leiteira e a Fisiologia Hormonal da IATF',
        contentMarkdown: `# Aula Universitária: Economia da Produção Leiteira & Biotecnologia Reprodutiva (IATF)

> 📖 Referência Canônica: Bó, G. A. et al. *Technologies for fixed-time artificial insemination in beef and dairy cattle in South America*. Anim. Reprod. 2016. Wiltbank, M. C. et al. *Novel hormonal treatments to improve fertility in dairy cattle*. J. Dairy Sci. Ministério da Agricultura e Pecuária (MAPA) — *Indicadores de Gestão Sanitária e Reprodutiva na Pecuária*.

### O Impacto Econômico da Qualidade do Leite no Agronegócio

Na cadeia produtiva do leite, a rentabilidade do produtor é determinada pela fórmula:

$$	ext{Receita Líquida} = 	ext{Volume Entregue (Litros)} 	imes (	ext{Preço Base} + 	ext{Bonificações} - 	ext{Penalizações}) - 	ext{Custos Operacionais}$$

1. **A Tabela de Bonificações e Descontos do Laticínio:**
   * **Bônus por Sólidos:** Pagamento adicional por teores de Gordura (> 3.5% a 3.8%) e Proteína Bruta (> 3.1% a 3.3%).
   * **Penalizações por Qualidade Sanitária:** Descontos severos para leites com CCS > 400.000 céls/mL ou CBT > 100.000 UFC/mL (que podem reduzir o valor por litro em até 10% a 18%).
2. **As Perdas Invisíveis da Mastite Subclínica:** 
   * Estudos internacionais comprovam que para cada aumento de 100.000 céls/mL na CCS do tanque acima de 200.000, **a fazenda perde de 1.5% a 2.5% do seu potencial diário de leite**, devido à destruição irreversível dos alvéolos secretores substituídos por tecido conjuntivo fibroso cicatricial.
3. **O Risco Letal dos Resíduos de Antibióticos:**
   * O teste rápido de SNAP de $eta$-lactâmicos é realizado em todo caminhão-tanque na entrada do laticínio. A presença de um único frasco de antibiótico ordenhado inadvertidamente gera a contaminação e a condenação de cargas inteiras de 10.000 a 15.000 litros, cujo custo de descarte e indenização recai integralmente sobre o pecuarista infrator.

---

### A Revolução da Inseminação Artificial em Tempo Fixo (IATF)

A reprodução é o motor primário da produção de leite: para produzir leite com alta persistência de lactação, a vaca precisa parir regularmente com um **Intervalo entre Partos (IEP) ideal de 12 a 13 meses** (Período de Serviço de 85 a 115 dias).
Em rebanhos de alta produção ou gado zebuíno em confinamento/pasto tropical, a **detecção visual de cio** falha em mais de 50% dos casos (devido a cios noturnos curtos, estresse por calor e anestro pós-parto). A **IATF** eliminou a necessidade de observar cio, permitindo inseminar 100% dos animais em um dia e horário matematicamente pré-agendados.

---

### O Protocolo Clássico de IATF de 3 Manejos (P4 + Estrógeno)

\`\`\`mermaid
flowchart TD
    A["Dia 0: Inserção de Dispositivo Intravaginal de P4 + Injeção de 2.0 mg de Benzoato de Estradiol"] --> B["Supressão de LH/FSH por Feedback Negativo e Regressão do Folículo Dominante Antigo"]
    B --> C["Emergência Síncrona de uma Nova Onda de Crescimento Folicular (Dia 4)"]
    C --> D["Dia 8: Retirada do Implante de P4 + Aplicação de PGF2α + 1.0 mg de Cipionato de Estradiol + 300 UI de eCG"]
    D --> E["Luteólise do Corpo Lúteo Residual e Queda Rápida da Progesterona Sérica"]
    E --> F["Dia 10 (48h pós-retirada de P4): Inseminação Artificial em Tempo Fixo (IATF)"]
    F --> G["Pico Pré-Ovulatório de LH Induzido pelo Cipionato e Ovulação 65-70h pós-D8 com Alta Fertilidade"]
\`\`\`

1. **Dia 0 (D0 - Início do Protocolo):**
   * Colocação do **Dispositivo Intravaginal impregnado com Progesterona (P4)** (libera progesterona contínua simulando uma fase lútea artificial).
   * Aplicação IM de **2.0 mg de Benzoato de Estradiol (BE)**: O estrógeno associado à P4 bloqueia os pulsos de LH e FSH na hipófise, provocando a atresia e regressão de qualquer folículo dominante velho ou persistente.
   * Resultado fisiológico: **Cerca de 4 dias depois (Dia 4), emerge uma nova onda folicular homogênea em 100% das vacas tratadas**.
2. **Dia 8 (D8 - Retirada e Indução de Luteólise):**
   * Retirada do dispositivo intravaginal de P4.
   * Aplicação IM de **Prostaglandina F2α (Dinoprost ou D-Cloprostenol)**: Induz a lise estrutural e funcional de qualquer Corpo Lúteo (CL) residual preexistente, despencando a progesterona para níveis basais (< 1 ng/mL).
   * Aplicação IM de **1.0 mg de Cipionato de Estradiol (ECP)**: Atua como indutor de ovulação. Devido à sua cadeia éster mais longa, é metabolizado lentamente pelo fígado, promovendo o pico pré-ovulatório de LH de forma precisa cerca de 40 a 48 horas após sua aplicação.
   * Aplicação IM de **300 a 400 UI de eCG (Gonadotrofina Coriônica Equina)**: Fornece suporte hormonal gonadotrófico adicional (efeito FSH e LH-like), estimulando o crescimento folicular terminal e a síntese de estradiol em vacas com balanço energético negativo ou vacas zebuínas com anestro pós-parto.
3. **Dia 10 (D10 - Inseminação em Tempo Fixo):**
   * Realizada exatamente **48 horas após a retirada do implante de P4** (no período da manhã).
   * Não se observa cio: todas as vacas do lote são inseminadas com sêmen descongelado a 35-37°C por 30 segundos, depositando o sêmen no corpo do útero. A ovulação sincronizada ocorrerá entre 16 e 24 horas após a inseminação, garantindo que os espermatozoides já estejam capacitados na ampola da tuba uterina no momento da liberação do oócito!`
      },
      {
        id: 'sec_bov_05_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Fazenda Bela Vista (Planejamento de IATF)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Planejamento Reprodutivo e Econômico de IATF em Rebanho Leiteiro/Misto',
          patient: {
            name: 'Lote 01 de Matrizes (Fazenda Bela Vista)',
            species: 'Bovino Misto',
            breed: 'Girolando e Nelore Comercial',
            age: 'Matrizes multíparas com 60 a 90 dias pós-parto',
            weightKg: 490,
            habitatOrEnvironment: 'Pastagem de braquiária com suplementação mineral proteinada em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 65,
            respiratoryRateRpm: 20,
            temperatureCelsius: 38.5,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'A fazenda apresenta intervalo entre partos (IEP) prolongado de 15.5 meses (meta < 13 meses) e taxa de serviço baixa (< 35%) decorrente da dificuldade de visualização de cio pelos vaqueiros durante o pastejo. O produtor deseja implantar IATF em um lote de 60 matrizes para concentrar os partos na época de melhor oferta de forragem e melhorar a genética com sêmen sexado.',
          exams: [
            {
              category: 'ultrasonography_ginecological',
              title: 'Exame Ginecológico Ultrassonográfico Pré-Protocolo (D-10)',
              findings: 'Avaliação ovariana por ultrassonografia transretal com sonda linear de 7.5 MHz.',
              abnormalValues: [
                { parameter: 'Presença de Corpo Lúteo Funcional', value: 'Presente em apenas 40% das vacas (60% em anestro anovulatório)', reference: 'Ciclicidade > 75%', status: 'high' },
                { parameter: 'Escore de Condição Corporal (ECC 1 a 5)', value: 'Média 2.75 (Marginal)', reference: '3.0 - 3.5', status: 'low' },
                { parameter: 'Período de Serviço Atual', value: '145 dias', reference: '85 - 110 dias', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com 60% das vacas em anestro anovulatório e ECC marginal (2.75), qual é a estrutura hormonal ideal do protocolo de IATF para garantir alta taxa de concepção?',
          decisionOptions: [
            {
              id: 'opt_dec_bov5_1',
              label: 'Protocolo de 3 manejos: D0 com Implante P4 + 2 mg Benzoato de Estradiol; D8 retirada de P4 + PGF2α + 1 mg Cipionato de Estradiol + 300 UI de eCG obrigatório; D10 IATF 48h após',
              description: 'Sincronizar a emergência da nova onda, promover a luteólise e usar obrigatoriamente a gonadotrofina eCG para estimular o crescimento do folículo dominante nas vacas em anestro.',
              isOptimal: true,
              consequenceText: 'Decisão zootécnica de alta performance! Em rebanhos com vacas em anestro e ECC marginal (2.75), o uso de eCG no Dia 8 é o grande divisor de águas: ele fornece o estímulo gonadotrófico que mimetiza o LH/FSH hipofisário, promovendo o crescimento do folículo dominante e aumentando a taxa de prenhez em até 10 a 15 pontos percentuais (atingindo mais de 50-55% de concepção no lote).',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Uso de protocolo hormonal completo com inclusão estratégica de eCG no D8',
                mechanism: 'Estímulo esteroidogênico do folículo pré-ovulatório e ovulação síncrona com corpo lúteo de alta produção de P4',
                effect: 'Aumento exponencial da taxa de prenhez no lote mesmo em animais com anestro prévio',
                clinicalMeaning: 'Encurtamento do Intervalo entre Partos para 12.5 meses, desmame de bezerros mais pesados e aumento do lucro líquido'
              }
            },
            {
              id: 'opt_dec_bov5_2',
              label: 'Não usar eCG nem Cipionato no D8 para economizar e colocar um touro no pasto no D10 sem inseminar',
              description: 'Retirar hormônios indutores de ovulação para baratear o custo do protocolo.',
              isOptimal: false,
              consequenceText: 'Erro antieconômico grave! Sem o Cipionato no D8 para disparar o pico de LH e sem o eCG para estimular as vacas em anestro, a maioria dos folículos sofre atresia sem ovular, resultando em taxa de prenhez desastrosa (< 15-20%) e prejuízo de todo o investimento em implantes de progesterona.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Supressão dos indutores de ovulação e suporte gonadotrófico em vacas em anestro',
                mechanism: 'Ausência do pico pré-ovulatório de LH e falha na maturação do oócito',
                effect: 'Anovulação em massa e atresia de folículos dominantes',
                clinicalMeaning: 'Fracasso completo da estação de monta com desperdício financeiro total'
              }
            },
            {
              id: 'opt_dec_bov5_3',
              label: 'Inseminar as vacas imediatamente no Dia 0 logo após colocar o implante de progesterona',
              description: 'Inseminar no início do protocolo para agilizar o processo.',
              isOptimal: false,
              consequenceText: 'Erro conceitual primário e absurdo! No Dia 0, a vaca está sob bloqueio de progesterona e estrógeno, sem folículo pré-ovulatório maduro. O sêmen depositado será destruído sem nenhum óvulo para fertilizar (0% de concepção).',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Inseminação em fase de bloqueio hormonal e ausência de ovulação',
                mechanism: 'Incompatibilidade temporal biológica absoluta entre espermatozoides e gameta feminino',
                effect: 'Morte de 100% das doses de sêmen descongeladas',
                clinicalMeaning: 'Taxa de prenhez rigorosamente zero e perda financeira dos insumos genéticos'
              }
            }
          ],
          learningTakeaways: [
            'A IATF sincroniza o crescimento folicular e a ovulação, permitindo inseminar 100% dos animais sem necessidade de observação visual de cio.',
            'O eCG no Dia 8 é indispensável em vacas com escore corporal marginal ou em anestro pós-parto para garantir o desenvolvimento do folículo dominante.',
            'A redução da CCS do rebanho e a melhoria reprodutiva com IATF são os dois maiores pilares de lucratividade e sustentabilidade da pecuária moderna.'
          ]
        }
      },
      {
        id: 'sec_bov_05_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Biotecnologia de IATF & Fisiologia Folicular',
        exerciseId: 'ex_bovine_05'
      }
    ]
  }
];
// ==========================================
// 3. EQUIDEOCULTURA & MANEJO DE CAVALOS
// ==========================================
export const EQUINE_PROD_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_equine_01',
    conceptId: 'concept_equine_athletic_nutrition_shoeing',
    type: 'multiple_choice',
    prompt: 'Por que fornecer grandes refeições de grãos concentrados (mais de 2.0 a 2.5 kg por refeição para um cavalo de 500 kg) predispõe criticamente o atleta à cólica e acidose cecal, e qual a recomendação para dias de descanso?',
    options: [
      {
        id: 'opt_eq1_1',
        text: 'Porque o estômago possui capacidade restrita (8 a 15 L) e o intestino delgado tem capacidade enzimática finita de amilase; o amido excedente sofre fermentação acelerada no ceco gerando ácido lático e endotoxinas. Nos dias de descanso, o concentrado deve ser reduzido em 50% para prevenir rabdomiólise.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O cavalo é um herbívoro monogástrico com fermentação pós-gástrica. O estômago esvazia rapidamente e a digestão enzimática delgada satura com mais de 0.4-0.5 kg de ração/100 kg PV por trato. O amido não digerido deságua no ceco, fermentando rapidamente por bactérias amilolíticas e derrubando o pH cecal. Nos dias de descanso sem treino, manter a cota energética plena sobrecarrega os miócitos com glicogênio anormal, desencadeando miopatia por esforço (doença da segunda-feira).'
      },
      {
        id: 'opt_eq1_2',
        text: 'Porque o cavalo rumina o concentrado durante o descanso noturno, causando regurgitação para a traqueia e asfixia mecânica.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Equinos são monogástricos e anatômica e fisiologicamente incapazes de ruminar ou vomitar devido à forte constrição tônica do cárdia e ao ângulo oblíquo de inserção esofágica.'
      },
      {
        id: 'opt_eq1_3',
        text: 'Porque os grãos inibem completamente a secreção de ácido clorídrico no ceco, provocando alcalose metabólica severa.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O ácido clorídrico é sintetizado pelas células parietais exclusivamente no estômago, nunca no ceco.'
      },
      {
        id: 'opt_eq1_4',
        text: 'Porque o excesso de carboidratos satura a vesícula biliar equina, impedindo a digestão de fibras volumosas.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A espécie equina é naturalmente desprovida de vesícula biliar anatômica; a bile hepática é secretada de forma contínua diretamente no duodeno.'
      }
    ]
  },
  {
    id: 'ex_equine_02',
    conceptId: 'concept_equine_colic_pathophysiology_management',
    type: 'multiple_choice',
    prompt: 'Na abordagem de uma emergência de cólica equina, quais achados no exame físico e na paracentese abdominal indicam prioritariamente a necessidade imediata de laparotomia exploratória de urgência?',
    options: [
      {
        id: 'opt_eq2_1',
        text: 'FC persistente > 60-80 bpm, refluxo nasogástrico espontâneo profuso e líquido peritoneal serossanguinolento com proteína total > 2.5 g/dL e lactato peritoneal 2x a 3x superior ao lactato plasmático',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! Taquicardia sustentada (> 60-80 bpm), ausência de resposta a analgésicos convencionais, refluxo gástrico volumoso (> 2-5 L) e alteração hemodinâmica do líquido peritoneal (turvação hemorrágica, hiperproteinemia e hiperlactatemia peritoneal sobrepujando o sangue) são os marcadores clássicos e inequívocos de isquemia/estrangulamento parietal de alça intestinal, exigindo celiotomia exploratória imediata.'
      },
      {
        id: 'opt_eq2_2',
        text: 'FC de 36 bpm, borborigmos hipercinéticos nos 4 quadrantes e líquido peritoneal límpido amarelo-palha com proteína total de 1.2 g/dL',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Esses achados caracterizam parâmetros fisiológicos normais de um abdômen hígido ou cólica espasmódica transitória hipercinética com resolução médica favorável.'
      },
      {
        id: 'opt_eq2_3',
        text: 'Ausculta de borborigmo cecal a cada 30 segundos, ausência de refluxo gástrico e eliminação de fezes com consistência pastosa normal',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A atividade cecal preservada e a passagem de fezes normais sem dor indicam trânsito funcional desprovido de indicação cirúrgica.'
      },
      {
        id: 'opt_eq2_4',
        text: 'Presença de dente de lobo na arcada dentária maxilar e fezes ligeiramente ressecadas no chão da baia',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Dente de lobo é uma afecção odontológica da cavidade bucal, não constituindo emergência cirúrgica abdominal.'
      }
    ]
  },
  {
    id: 'ex_equine_03',
    conceptId: 'concept_equine_stud_biosecurity_immunization',
    type: 'multiple_choice',
    prompt: 'Qual é o fundamento biológico da "Desverminação Estratégica Seletiva baseada em OPG (McMaster)" em haras, e qual o papel do conceito de "Refúgia" no combate à resistência aos anti-helmínticos?',
    options: [
      {
        id: 'opt_eq3_1',
        text: 'Cerca de 80% dos ovos são excretados por apenas 15-20% dos cavalos (altos eliminadores); ao tratar apenas esses animais, preservam-se parasitas sensíveis não expostos no pasto (refúgia), cujos alelos diluem os genes resistentes na população',
        isCorrect: true,
        pedagogicalFeedback: 'Excelente! A distribuição binomial negativa dos parasitas faz com que a minoria do plantel contamine a maior parte da pastagem. A vermifugação em massa cega a cada 60 dias elimina os alelos sensíveis e seleciona rapidamente linhagens super-resistentes. Manter uma população em refúgia (parasitas que não sofreram pressão farmacológica) garante que a progênie mantenha a sensibilidade terapêutica aos fármacos.'
      },
      {
        id: 'opt_eq3_2',
        text: 'A refúgia consiste em manter os cavalos trancados em baias escuras para que os vermes migrem espontaneamente para fora do reto',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Refúgia é um conceito genético-populacional da parasitologia, que designa os parasitas livres de pressão de seleção química no ambiente ou nos hospedeiros não tratados.'
      },
      {
        id: 'opt_eq3_3',
        text: 'O método de McMaster foi desenhado para eliminar 100% dos parasitas do hospedeiro equino sem necessitar de medicamentos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A câmara de McMaster é um método diagnóstico quantitativo laboratorial de flotação em câmara para contagem de Ovos por Grama de Fezes (OPG).'
      },
      {
        id: 'opt_eq3_4',
        text: 'Todos os cavalos de um haras devem receber doses duplas de ivermectina a cada 30 dias para erradicar permanentemente os ciatóstomos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Esse manejo de submissão química abusiva e frequente é a causa raiz primária da falência e perda irreversível de eficácia dos anti-helmínticos modernos.'
      }
    ]
  },
  {
    id: 'ex_equine_04',
    conceptId: 'concept_equine_dentistry_masticatory_biomechanics',
    type: 'multiple_choice',
    prompt: 'Devido à anatomia hipsodonte e à condição de arcada anisognata dos equinos, onde se formam predominantemente as pontas de esmalte dentário que causam úlceras orais, e qual a manifestação clínica de "quidding"?',
    options: [
      {
        id: 'opt_eq4_1',
        text: 'As pontas formam-se na borda vestibular (externa) dos dentes superiores e borda lingual (interna) dos inferiores; quidding é o ato de cuspir bolos de feno parcialmente mastigados devido à dor bucal e falha de trituração',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A maxila é cerca de 20-25% mais larga que a mandíbula (anisognatia). Durante os movimentos mastigatórios laterais, o atrito incompleto preserva esmalte cortante na face bucal/vestibular superior e face lingual inferior. As lacerações da bochecha e língua levam à mastigação dolorosa e queda/expulsão de bolotas de feno mastigado ("quidding"), aumentando o risco de impactação esofágica e cólica cólica.'
      },
      {
        id: 'opt_eq4_2',
        text: 'As pontas formam-se exclusivamente na face palatina dos dentes incisivos superiores; quidding é a inflamação dos seios nasais por fungos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Pontas de esmalte formam-se nos dentes molares e pré-molares (bochecha), e quidding refere-se à queda mecânica de bolos de alimento da boca.'
      },
      {
        id: 'opt_eq4_3',
        text: 'As pontas afetam apenas a mandíbula inferior externa; quidding é o ronco respiratório emitido durante o galope',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Na mandíbula inferior, o desgaste incompleto ocorre na borda lingual (medial/interna), e o ronco respiratório associa-se a hemiplegia laríngea.'
      },
      {
        id: 'opt_eq4_4',
        text: 'As pontas de esmalte inexistem em equinos com dentes braquidontes que nunca sofrem erupção contínua ao longo da vida',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Cavalos são animais com dentes hipsodontes de coroa longa e erupção contínua (2 a 3 mm ao ano).'
      }
    ]
  },
  {
    id: 'ex_equine_05',
    conceptId: 'concept_equine_podology_biomechanics_navicular',
    type: 'multiple_choice',
    prompt: 'Na podologia esportiva equina, qual é a consequência biomecânica e patológica gerada pela conformação de "Pinça Longa e Talões Baixos/Escorridos" (Long Toe - Low Heel), e como corrigir o equilíbrio podal?',
    options: [
      {
        id: 'opt_eq5_1',
        text: 'Provoca atraso mecânico no ponto de quebra da passada (breakover tardio) e hiperflexão da articulação interfalângica distal com tensão extrema sobre o TFDP, gerando compressão e lise do osso navicular; a correção exige recuo do breakover da pinça e suporte de talão com ferradura em ovo ou chanfro dorsal',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! A pinça longa cria uma alavanca longa desfavorável que retarda o rolamento do casco (breakover tardio), enquanto os talões colapsados sobrecarregam o Tendão Flexor Digital Profundo (TFDP), que comprime a bursa podotroclear contra o osso navicular. A intervenção corretiva consiste em casqueamento balanceado com encurtamento/recuo da pinça e aplicação de ferrageamento ortopédico (egg bar, rolled toe) para reestabelecer o eixo podofalângico reto.'
      },
      {
        id: 'opt_eq5_2',
        text: 'Gera afundamento imediato da primeira falange para dentro do canal carpal, exigindo amputação do casco',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A alteração envolve o dígito distal (P3, navicular e bursa podotroclear), e amputação de dígito é inviável e incompatível com a sobrevivência da espécie equina.'
      },
      {
        id: 'opt_eq5_3',
        text: 'Acelera o breakover de forma que o cavalo voa sem tocar os membros torácicos no solo',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Pinças compridas atrasam (retardam) o ponto de rolamento, exigindo mais esforço para descolar o casco do chão.'
      },
      {
        id: 'opt_eq5_4',
        text: 'Provoca atrofia congênita da tireoide por excesso de biotina nos cascos dianteiros',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O distúrbio é puramente mecânico-ortopédico e osteotendíneo distal.'
      }
    ]
  }
];

export const EQUINE_PROD_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_equine_01_athletic_nutrition',
    moduleId: 'mod_equine_prod',
    title: 'Equideocultura: Fisiologia Digestiva do Atleta & Manejo Nutricional',
    shortDescription: 'Fisiologia gástrica de herbívoro monogástrico, limitação de concentrado e prevenção da rabdomiólise por esforço ("doença da segunda-feira").',
    estimatedMinutes: 18,
    order: 1,
    concepts: ['concept_equine_athletic_nutrition_shoeing'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_eq_01_th1',
        type: 'theory',
        title: 'A Fisiologia Digestiva do Herbívoro Monogástrico & o Metabolismo do Atleta',
        contentMarkdown: `### Um Estômago Pequeno para Pastejo Contínuo

Na natureza, o cavalo caminha até 16 horas por dia ingerindo pequenas porções de capim fibroso. Sua anatomia reflete essa especialização evolutiva:
* **Capacidade Estomacal Reduzida:** O estômago possui apenas **8 a 15 litros de capacidade** em um equino adulto de 500 kg (menos de 8-10% do trato gastrointestinal total). Ele esvazia rapidamente quando 2/3 da sua capacidade é atingida.
* **Incapacidade Absoluta de Vômito:** O ângulo oblíquo agudo com que o esôfago penetra no cárdia, aliado a um esfíncter cárdico muscular extremamente espesso e tonicamente contraído, impede qualquer refluxo ou êmese. Em quadros de sobrecarga gástrica ou dilatação gasosa aguda, a pressão intraluminal cresce exponencialmente até a **ruptura da grande curvatura do estômago**, provocando choque séptico fulminante e óbito!
* **A Separação Mucosa e o Margo Plicatus:** O estômago é dividido em duas metades distintas separadas pela linha do *margo plicatus*:
  1. *Porção Escamosa Aglandular (superior):* Revestida por epitélio estratificado pavimentoso desprovido de glúten ou muco protetor contra o ácido clorídrico. É a sede primária da **Síndrome da Úlcera Gástrica Equina (EGUS)** quando o animal fica em jejum prolongado sem o tamponamento contínuo da saliva rica em bicarbonato.
  2. *Porção Glandular (inferior):* Secreta ácido clorídrico, pepsinogênio e muco protetor contínuos.

---

### Digestão Enzimática Pré-Cecal vs. Fermentação Pós-Gástrica

O equino depende de duas etapas digestivas funcionais em série:
1. **Fase Enzimática (Intestino Delgado - Duodeno, Jejuno, Íleo):** Digestão e absorção pré-cecal de carboidratos não estruturais (amido e açúcares solúveis), proteínas e lipídios pela amilase, tripsina e lipase.
   > ⚠️ Limite Enzimático Crítico: A capacidade de produção de amilase pancreática no cavalo é baixa quando comparada a suínos ou humanos. A capacidade máxima de digestão de amido no intestino delgado é de cerca de **2.0 g de amido por kg de peso vivo por refeição** (o que corresponde a cerca de **0.4 a 0.5 kg de ração concentrada por 100 kg de peso vivo por trato**, ou um limite estrito de **2.0 a 2.5 kg de concentrado** por refeição para um equino de 500 kg).
2. **Fase Fermentativa Microbiana (Intestino Grosso - Ceco e Cólon Maior):** O ceco (30 L) e o cólon maior (80-100 L) abrigam uma microbiota estritamente anaeróbia de bactérias celulolíticas e protozoários que convertem a fibra vegetal (celulose, hemicelulose e pectina) em **Ácidos Graxos Voláteis (AGVs: Acetato, Butirato e Propionato)**, fornecendo até 70% da energia basal de manutenção.

---

### A Fisiopatologia da Rabdomiólise por Esforço ("Doença da Segunda-Feira")

Em cavalos de esporte mantidos em cocheiras com alta cota diária de ração concentrada (6 a 8 kg/dia), a interrupção do treinamento em dias de folga (como domingos) sem a redução correspondente da energia da dieta desencadeia distúrbios graves de armazenamento de substratos:

\`\`\`mermaid
flowchart TD
    A["Dieta Hiperenergética com Alta Carga de Amido em Dias de Repouso"] --> B["Síntese e Armazenamento Excessivo de Glicogênio nos Miócitos Esqueléticos"]
    B --> C["Retomada Abrupta do Exercício Intenso na Segunda-Feira"]
    C --> D["Falha na Homeostase do Cálcio Intracelular no Retículo Sarcoplasmático"]
    D --> E["Contratura Espástica Tetânica Sustentada e Hipóxia Muscular Aguda"]
    E --> F["Ruptura de Sarcômeros e Necrose de Fibras Musculares (Rabdomiólise)"]
    F --> G["Liberação Torrencial de Creatina Quinase (CK > 20.000 U/L) e Mioglobina"]
    G --> H["Filtração Glomerular de Mioglobina Livre com Precipitação Tubular e Lesão Renal Aguda"]
\`\`\`

1. **Armazenamento de Glicogênio Anômalo:** Durante os dias de descanso na baia, a glicose sérica resultante dos grãos é estocada intensamente na musculatura glútea e lombar (Miopatia por Acúmulo de Polissacarídeos - PSSM ou Rabdomiólise Recorrente por Esforço - RER).
2. **Espasmo Isquêmico:** Ao retornar subitamente ao trabalho anaeróbico intenso, o miócito esgota suas vias normais, ocorrendo despolarização contínua com influxo descontrolado de cálcio e contratura tetânica permanente.
3. **Mionecrose e Mioglobinúria:** As membranas celulares dos miócitos se rompem, liberando a enzima **Creatina Quinase (CK)** e a proteína transportadora **Mioglobina** na corrente sanguínea. Ao atingir os glomérulos renais, a mioglobina precipita nos túbulos coletores sob pH ácido, formando cilindros que bloqueiam o néfron e provocam necrose tubular aguda (NTA) oligúrica fatal.`
      },
      {
        id: 'sec_eq_01_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Eclipse (Puro Sangue Inglês)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Nutricional e Prevenção de Rabdomiólise ("Tying-up")',
          patient: {
            name: 'Eclipse',
            species: 'Equino Atleta',
            breed: 'Puro Sangue Inglês (PSI)',
            age: '5 anos',
            weightKg: 490,
            habitatOrEnvironment: 'Cocheira de hipódromo em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 74,
            respiratoryRateRpm: 34,
            temperatureCelsius: 38.9,
            mucousMembranes: 'Congestas e sudorese profusa em pescoço e flancos',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Eclipse ficou de folga no domingo recebendo sua cota integral de ração rica em amido (6 kg/dia). Na segunda-feira pela manhã, após 15 minutos de galope na pista, travou completamente a passada, recusando-se a dar um único passo à frente. Musculatura da garupa e lombo dura como pedra (tétano muscular doloroso), tremores de membros pélvicos e urina emitida espontaneamente com coloração castanho-escura (cor de refrigerante de cola).',
          exams: [
            {
              category: 'laboratorial',
              title: 'Perfil Enzimático Muscular e Urina',
              findings: 'Avaliação de enzimas de lesão de miócitos esqueléticos.',
              abnormalValues: [
                { parameter: 'Creatina Quinase (CK)', value: '45.000 U/L', reference: '< 350 U/L', status: 'critical' },
                { parameter: 'Aspartato Aminotransferase (AST)', value: '3.800 U/L', reference: '< 400 U/L', status: 'critical' },
                { parameter: 'Mioglobinúria', value: 'POSITIVA 4+', reference: 'Negativo', status: 'critical' },
                { parameter: 'Creatinina Sérica', value: '2.4 mg/dL', reference: '1.0 - 1.8 mg/dL', status: 'elevated' }
              ]
            }
          ],
          challengePrompt: 'Em plena crise aguda de rabdomiólise por esforço no meio da pista de treinamento, qual é a conduta prioritária imediata?',
          decisionOptions: [
            {
              id: 'opt_dec_eq1_1',
              label: 'Parar o exercício imediatamente no local + Não forçar caminhada + Fluidoterapia IV maciça (60-80 mL/kg/dia) + Acepromazina microdose + AINE',
              description: 'Interromper tração muscular para evitar mais lise, expandir volume plasmático para lavar a mioglobina dos néfrons e promover vasodilatação e analgesia.',
              isOptimal: true,
              consequenceText: 'Excelente conduta médica! Forçar o animal a caminhar até a cocheira romperia milhares de fibras musculares adicionais. A fluidoterapia intravenosa rápida previne a nefrose mioglobinúrica obstrutiva fatal, a acepromazina (0.02 mg/kg IV) alivia o espasmo microvascular e o AINE (Flunixina meglumina 1.1 mg/kg IV) cessa o ciclo inflamatório.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Interrupção do movimento, fluidoterapia de alto volume e vasodilatação periférica',
                mechanism: 'Preservação da perfusão renal e clareamento da mioglobina nefrotóxica circulante',
                effect: 'Queda progressiva da CK sérica e relaxamento do espasmo muscular dos glúteos',
                clinicalMeaning: 'Prevenção de insuficiência renal aguda anúrica e restauração da integridade dos sarcômeros'
              }
            },
            {
              id: 'opt_dec_eq1_2',
              label: 'Bater no cavalo com relho para fazê-lo marchar até a baia e aplicar banho de ducha com água gelada na garupa',
              description: 'Forçar o animal a andar para "aquecer e descolar" os músculos e jogar água gelada.',
              isOptimal: false,
              consequenceText: 'Erro brutal e incapacitante! A água fria e o exercício forçado agravam o espasmo muscular isquêmico, causam desprendimento massivo de fibras musculares, choque neurogênico por dor e falência renal irreversível.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Exercício forçado e choque térmico com água gelada em músculo em espasmo',
                mechanism: 'Vasoconstrição reflexa somada à quebra mecânica de membranas de sarcômeros',
                effect: 'Rabdomiólise catastrófica com liberação torrencial de mioglobina e potássio',
                clinicalMeaning: 'Insuficiência renal aguda oligoanúrica e decúbito permanente'
              }
            },
            {
              id: 'opt_dec_eq1_3',
              label: 'Fornecer mais 3 kg de ração rica em melaço na baia para repor o glicogênio gasto',
              description: 'Oferecer mais concentrado para suposta reposição calórica imediata.',
              isOptimal: false,
              consequenceText: 'Conduta contraindicada! A etiologia da doença da segunda-feira decorre exatamente do excesso de glicogênio armazenado durante os dias de repouso sem diminuição do concentrado.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Sobrecarga de carboidratos em animal com disfunção metabólica de armazenamento',
                mechanism: 'Piora do acúmulo de intermediários glicolíticos anormais no miócito',
                effect: 'Recidiva imediata de crises espásticas ao menor esforço',
                clinicalMeaning: 'Incapacidade atlética crônica e perda zootécnica do animal'
              }
            }
          ],
          learningTakeaways: [
            'Nos dias de repouso ou folga do cavalo atleta, a cota de ração concentrada DEVE ser reduzida pela metade (50%).',
            'Cavalo em crise de rabdomiólise ("travado") NÃO PODE ser forçado a caminhar: transporte-o em reboque ou trate-o no local.',
            'A fluidoterapia intravenosa rápida em alto volume é o pilar vital para prevenir o bloqueio tubular e necrose renal por mioglobina.'
          ]
        }
      },
      {
        id: 'sec_eq_01_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Nutrição & Rabdomiólise Equina',
        exerciseId: 'ex_equine_01'
      }
    ]
  },
  {
    id: 'lesson_equine_02_colic_pathophysiology',
    moduleId: 'mod_equine_prod',
    title: 'Fisiopatologia & Conduta Clínica em Cólica Equina',
    shortDescription: 'Cascata da sobrecarga de amido, acidose cecal, impactação de flexura pélvica e critérios de indicação cirúrgica de urgência.',
    estimatedMinutes: 20,
    order: 2,
    concepts: ['concept_equine_colic_pathophysiology_management'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_eq_02_th1',
        type: 'theory',
        title: 'A Anatomia Vulnerável do Intestino Equino & a Cascata da Cólica',
        contentMarkdown: `### Particularidades Anatômicas Predisponentes

O trato gastrointestinal do cavalo possui pontos anatômicos de estreitamento e livre mobilidade que o tornam altamente suscetível a obstruções mecânicas, deslocamentos e torções:
1. **A Flexura Pélvica:** O cólon ventral esquerdo dobra-se em 180 graus para originar o cólon dorsal esquerdo na entrada da cavidade pélvica. Neste ponto, o diâmetro luminal sofre uma redução abrupta de cerca de **50 cm para meros 8 a 10 cm**. É o ponto anatômico mais frequente de **impactação alimentar por ingesta dessecada**.
2. **O Cólon Maior Flutuante:** Os cólons ventrais e dorsais esquerdos não possuem fixação ligamentar à parede abdominal parietal, mantendo-se livres e móveis na cavidade. Isso permite que se desloquem lateralmente sobre o ligamento néfro-esplênico (deslocamento dorsal à esquerda) ou sofram torção de 360° sobre o próprio eixo (volvo de cólon maior).
3. **A Junção Ileocecal e a Base do Ceco:** Outro ponto de transição com grande alteração de calibre e motilidade estocástica.

---

### A Cascata da Sobrecarga de Amido & Acidose Cecal

A alimentação desequilibrada com excesso de grãos e déficit de forragem é o detonador fisiopatológico primário da síndrome cólica:

\`\`\`mermaid
flowchart TD
    A["Sobrecarga de Ração Concentrada ou Restrição Hídrica Súbita"] --> B["Transbordamento de Amido não Digerido para o Ceco"]
    B --> C["Fermentação Amilolítica Acelerada com Queda de pH Cecal (< 5.8)"]
    C --> D["Morte de Celulolíticas Gram-Negativas e Liberação de Endotoxinas (LPS)"]
    D --> E["Íleo Funcional, Estase Intestinal e Reabsorção Excessiva de Água"]
    E --> F["Impactação de Ingesta Dessecada no Estreitamento da Flexura Pélvica"]
    F --> G["Distensão Abdominal Retrógrada, Isquemia Mural e Dor Visceral Aguda"]
    G --> H["Elevação da FC, Ausência de Borborigmos e Risco de Choque Endotóxico"]
\`\`\`

1. **Transbordamento Ileal:** Quando a ingestão de amido excede a capacidade da amilase no intestino delgado (> 2.0 g/kg PV), grandes massas de glicose não digerida chegam ao ceco.
2. **Proliferação de Streptococcus bovis e Lactobacillus:** Essas bactérias amilolíticas multiplicam-se vertiginosamente, fermentando o amido em grandes quantidades de ácido lático (D- e L-lactato), despencando o pH cecal para menos de 5.8.
3. **Lise de Bactérias Gram-Negativas e Liberação de LPS:** O ambiente hiperácido mata a microbiota celulolítica benéfica Gram-negativa, liberando maciças doses de **Lipopolissacarídeo (LPS/Endotoxina)**.
4. **Endotoxemia e Íleo:** O LPS destrói as junções oclusivas do epitélio intestinal, entra na circulação porta e desencadeia a Síndrome de Resposta Inflamatória Sistêmica (SIRS). A liberação de prostaglandinas inflamatórias inibe o plexo mioentérico, gerando atonia muscular intestinal (íleo paralítico).
5. **Impactação e Desidratação da Ingesta:** Com o trânsito paralisado, a água intraluminal continua a ser absorvida pelos enterócitos, compactando o quimo vegetal na flexura pélvica até formar uma massa cilíndrica endurecida que obstrui o trânsito.

---

### Propedêutica de Emergência: Decisão Clínica vs. Cirúrgica

Na avaliação de um cavalo em cólica, o objetivo primário do médico veterinário não é fechar o nome anatômico exato da lesão, mas sim responder imediatamente: **este caso é de resolução clínica conservadora ou exige cirurgia (celiotomia) de emergência?**

| Parâmetro | Obstrução Simples / Médica | Obstrução Estrangulativa / Cirúrgica |
| :--- | :--- | :--- |
| **Frequência Cardíaca (FC)** | 40 a 55 bpm (responde a analgésicos) | **> 60 a 80+ bpm sustentada** (dor refratária) |
| **Dor Visceral** | Intermitente, cede com AINE/espasmolítico | **Contínua, violenta, refratária** (animal se atira ao chão) |
| **Sondagem Nasogástrica** | Sem refluxo espontâneo ou < 2 L | **Refluxo profuso espontâneo (> 2 a 5 L)**, fétido/amarelo |
| **Palpação Transretal** | Massa pastosa na flexura pélvica | Alças delgadas distendidas ("em salsicha"), cólon teso |
| **Líquido Peritoneal (Abdominocentese)** | Límpido, amarelo-palha, PT < 2.0 g/dL, Lactato < 1.5 mmol/L | **Turvo, serossanguinolento, PT > 3.0 g/dL, Lactato peritoneal > 2x sérico** |`
      },
      {
        id: 'sec_eq_02_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Hércules (Quarto de Milha)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Abordagem Diagnóstica e Conduta na Impactação de Flexura Pélvica',
          patient: {
            name: 'Hércules',
            species: 'Equino de Trabalho/Esporte',
            breed: 'Quarto de Milha (QM)',
            age: '6 anos',
            weightKg: 520,
            habitatOrEnvironment: 'Piquete com cocheira de alvenaria em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 56,
            respiratoryRateRpm: 26,
            temperatureCelsius: 38.1,
            mucousMembranes: 'Róseo-pálidas com tempo de preenchimento capilar de 2.0s',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Hércules apresentou início de desconforto abdominal há 8 horas: cava o chão com o membro torácico, deita e rola de forma controlada, olha para os flancos frequentemente e exibe reflexo de Flehmen. O proprietário relata que trocou o feno de coastcross verde por um feno de tifton seco e fibroso há 3 dias e que a boia do bebedouro automático da baia travou fechada, reduzindo o consumo de água.',
          exams: [
            {
              category: 'fisico_especifico',
              title: 'Ausculta Abdominal, Sondagem e Palpação Retal',
              findings: 'Avaliação clínica minuciosa do trato digestivo.',
              abnormalValues: [
                { parameter: 'Borborigmos Intestinais', value: 'Abolidos nos 4 quadrantes (hipomotilidade severa)', reference: '1 a 3 contrações/minuto', status: 'critical' },
                { parameter: 'Sondagem Nasogástrica', value: 'Refluxo espontâneo negativo; 200 mL de líquido claro', reference: 'Ausência de refluxo', status: 'normal' },
                { parameter: 'Palpação Transretal', value: 'Massa cilíndrica pastosa firme de 25 cm na entrada pélvica esquerda', reference: 'Flexura pélvica vazia e flácida', status: 'critical' },
                { parameter: 'Abdominocentese (Líquido Peritoneal)', value: 'Amarelo límpido, PT 1.8 g/dL, Lactato 1.2 mmol/L', reference: 'Límpido, PT < 2.0, Lactato < 1.5', status: 'normal' }
              ]
            }
          ],
          challengePrompt: 'Com a confirmação de impactação de flexura pélvica sem sinais de isquemia ou estrangulamento parietal, qual é a conduta terapêutica conservadora correta?',
          decisionOptions: [
            {
              id: 'opt_dec_eq2_1',
              label: 'Hidratação enteral contínua com água e eletrólitos via sonda nasogástrica (6-8 L a cada 2h) + Sulfato de Magnésio (1 g/kg) + Analgesia controlada + Jejum de concentrado',
              description: 'Usar a hidratação enteral e catárticos osmóticos para reidratar o fecaloma da flexura pélvica, suspendendo sólidos e controlando a dor com dipirona ou flunixina.',
              isOptimal: true,
              consequenceText: 'Conduta perfeita baseada em evidências! A infusão enteral de água e soluções eletrolíticas amolece e desidrata o fecaloma diretamente no lúmen do cólon, muito superior a fluidoterapia IV isolada. O sulfato de magnésio atua como laxante osmótico retendo água no lúmen. O jejum alimentar impede que mais ingesta chegue à obstrução.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Hidratação enteral osmótica via sonda nasogástrica e laxante intraluminal',
                mechanism: 'Reidratação direta e dissolução do bolo fecal compactado na flexura pélvica',
                effect: 'Progressão mecânica do bolo fecal em direção ao cólon dorsal e eliminação fecal em 24h',
                clinicalMeaning: 'Resolução completa da cólica simples sem necessidade de laparotomia invasiva'
              }
            },
            {
              id: 'opt_dec_eq2_2',
              label: 'Encaminhar imediatamente para celiotomia exploratória e aplicar doses maciças de morfina para sedação profunda',
              description: 'Indicar cirurgia aberta sem tentativa médica e usar opioides que paralisam a motilidade.',
              isOptimal: false,
              consequenceText: 'Conduta errônea! O paciente não apresenta sinais de alça desvitalizada ou estrangulamento (lactato peritoneal normal, FC moderada, sem refluxo). Celiotomia desnecessária encarece o tratamento e traz morbidade. Opioides puros causam íleo paralisante e pioram a atonia.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Indicação cirúrgica precoce inadequada e uso de opioides paralisantes de motilidade',
                mechanism: 'Inibição farmacológica do plexo mioentérico e trauma cirúrgico desnecessário',
                effect: 'Piora catastrófica da atonia intestinal com risco de timpanismo secundário',
                clinicalMeaning: 'Atraso na recuperação e elevação dos riscos de complicações pós-operatórias'
              }
            },
            {
              id: 'opt_dec_eq2_3',
              label: 'Aplicar 20 L de óleo lubrificante automotivo via retal com mangueira de jardim e manter ração no cocho',
              description: 'Uso de substâncias industriais tóxicas por via retrógrada sem controle técnico.',
              isOptimal: false,
              consequenceText: 'Erro gravíssimo e letal! Óleos industriais provocam proctite química severa, choque e perfuração de reto fatal. Manter alimento no cocho empilharia mais massa sobre a obstrução.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Introdução de hidrocarbonetos tóxicos na mucosa retal e alimentação durante obstrução',
                mechanism: 'Necrose química da mucosa cólica e ruptura transmural por sobrecarga de massa',
                effect: 'Peritonite fecal aguda hiperaguda e choque séptico letal',
                clinicalMeaning: 'Eutanásia compulsória por ruptura de cólon'
              }
            }
          ],
          learningTakeaways: [
            'A ausência de refluxo gástrico associada a líquido peritoneal límpido (lactato normal) aponta para cólica obstrutiva simples de manejo médico.',
            'A hidratação enteral por sonda nasogástrica fracionada é a melhor técnica para dissolver fecalomas na flexura pélvica.',
            'A taquicardia severa (> 60-80 bpm persistente) com dor intratável e líquido peritoneal serossanguinolento é o divisor de águas que exige laparotomia imediata.'
          ]
        }
      },
      {
        id: 'sec_eq_02_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Semiologia & Conduta na Cólica Equina',
        exerciseId: 'ex_equine_02'
      }
    ]
  },
  {
    id: 'lesson_equine_03_stud_biosecurity',
    moduleId: 'mod_equine_prod',
    title: 'Biossegurança em Haras, Quarentena & Desverminação Seletiva',
    shortDescription: 'Protocolos de isolamento, calendário de vacinação essencial vs risco e manejo antiparasitário seletivo (McMaster) com foco em refúgia.',
    estimatedMinutes: 20,
    order: 3,
    concepts: ['concept_equine_stud_biosecurity_immunization'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_eq_03_th1',
        type: 'theory',
        title: 'Biosseguridade, Imunização Estratégica & o Combate à Resistência Anti-helmíntica',
        contentMarkdown: `### Arquitetura Sanitária & Fluxo de Quarentena em Haras

A concentração de equinos atletas de alto valor zootécnico e contínuo trânsito interestadual (feiras, leilões, provas de salto, laço e tambor) exige rigorosos protocolos de biossegurança:
1. **Quarentenário de Isolamento:** Os animais recém-adquiridos ou que retornam de eventos externos devem ser alojados em baias de isolamento localizadas a no mínimo **30 a 50 metros** do complexo principal das cocheiras.
2. **Período Mínimo de 21 a 30 Dias:** Tempo necessário para que patógenos com período de incubação prolongado (como o vírus da Influenza Equina, o Herpesvírus Equino EHV-1/4 e o *Streptococcus equi* - agente do Garrotilho) manifestem sinais clínicos antes de ter contato com o restante do plantel.
3. **Manejo de Barreiras:** Aferição de temperatura retal duas vezes ao dia (qualquer pico > 38.5°C sinaliza infecção respiratória aguda), uso de baldes, cabrestos e escovas de uso estritamente exclusivo e pedilúvio com amônia quaternária ou glutaraldeído ativo na entrada do pavilhão.

---

### Calendário Vacinal Racional: Vacinas Core vs. Baseadas em Risco

Segundo as diretrizes internacionais da AAEP (American Association of Equine Practitioners):
* **Vacinas Essenciais ("Core"):** Devem ser aplicadas anualmente a 100% dos equinos, sem exceção:
  1. *Tétano (Clostridium tetani):* Toxoide tetânico anual. Éguas prenhes devem receber reforço com 30 a 45 dias antes do parto para assegurar colostro hiperimune. Em casos de ferimentos penetrantes ou cirurgias em animais com histórico vacinal incerto, aplica-se **Soro Antitetânico (1.500 a 3.000 UI)** profilático associado ao Toxoide em sítios musculares separados.
  2. *Raiva dos Herbívoros:* Vacina inativada anual, fundamental no interior de São Paulo devido à espoliação contínua por morcegos hematófagos (*Desmodus rotundus*).
  3. *Encefalomielite Equina (Leste/Oeste - EEE/WEE):* Vacinação anual antes do pico sazonal de insetos hematófagos vetores (*Culex*, *Aedes*).
* **Vacinas Baseadas em Risco ("Risk-Based"):**
  1. *Influenza Equina (EIV tipos 1 e 2):* Semestral para animais em trânsito e competição esportiva.
  2. *Herpesvírus Equino (EHV-1 e EHV-4):* Vacinação semestral em animais de esporte para prevenir rinopneumonite e mieloencefalopatia; em éguas gestantes, aplica-se vacina inativada no **5º, 7º e 9º mês de gestação** para bloquear o "aborto a vírus do herpes equino".
  3. *Garrotilho (Streptococcus equi subsp. equi):* Recomendada em haras endêmicos ou com histórico recente da doença.

---

### O Fim da Vermifugação Cega & o Novo Paradigma da "Refúgia"

O manejo antiquado de "desverminar todo o rebanho a cada 60 dias alternando princípios ativos" causou o colapso farmacológico mundial: cepas de pequenos estrôngilos (**Ciatostomíneos**) desenvolveram resistência irreversível a benzimidazóis (fenbendazol, oxibendazol) e perda progressiva de eficácia das avermectinas (ivermectina).

\`\`\`mermaid
flowchart TD
    A["Plantel de Haras com Manejo Histórico de Vermifugação Cega a Cada 60 Dias"] --> B["Coleta de Fezes Individual e Exame Coproparasitológico Quantitativo (McMaster)"]
    B --> C["Estratificação do Rebanho Equino Adulto segundo OPG"]
    C --> D["Baixos Eliminadores: OPG < 200 (60-70% do Plantel) - NÃO Tratar"]
    C --> E["Altos Eliminadores: OPG > 500 (15-20% do Plantel) - Tratar com Molécula Eficaz"]
    D --> F["Preservação da População em Refúgia (Parasitas Sensíveis nas Pastagens)"]
    E --> G["Eliminação dos Grandes Contaminadores de Pasto e Redução da Carga Ambiental"]
    F & G --> H["Diluição de Genes de Resistência, Preservação da Eficácia dos Fármacos e Sustentabilidade"]
\`\`\`

1. **A Regra dos 80/20 (Distribuição Binomial Negativa):** Cerca de **80% da contaminação parasitária das pastagens é originada por apenas 15% a 20% dos cavalos adultos** do plantel ("altos eliminadores"). A maioria dos cavalos adultos saudáveis possui imunidade adaptativa robusta e mantém contagens baixas de ovos naturalmente.
2. **Estratificação por OPG (Método de McMaster):**
   * *Baixo Eliminador (OPG < 200):* Não deve receber anti-helmíntico na rotina (apenas 1 tratamento anual no final do outono com foco em larvas de *Gasterophilus* e tênias com praziquantel).
   * *Médio Eliminador (OPG 200 a 500):* Monitorar ou tratar estrategicamente.
   * *Alto Eliminador (OPG > 500):* Tratar pontualmente com fármaco de eficácia comprovada.
3. **O Conceito de Refúgia:** É a população de parasitas que não são expostos ao princípio ativo anti-helmíntico (larvas livres nas pastagens e parasitas nos animais não tratados). Como eles não sofrem pressão de seleção química, **seus genes continuam sensíveis**. Quando esses vermes sensíveis se reproduzem com os raros sobreviventes resistentes, os genes suscetíveis predominam, impedindo a fixação genética de cepas super-resistentes no haras.
4. **Teste de Redução de Contagem de Ovos nas Fezes (FECRT):** Avalia-se o OPG no Dia 0 e repete-se aos 14 dias pós-tratamento. Uma redução inferior a **90% a 95%** atesta formalmente a presença de resistência anti-helmíntica na fazenda.`
      },
      {
        id: 'sec_eq_03_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Haras Vale Dourado (Manejo Parasitológico)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Auditoria Sanitária e Reestruturação Antiparasitária em Haras de Reprodução',
          patient: {
            name: 'Plantel Haras Vale Dourado',
            species: 'Equino de Reprodução',
            breed: 'Puro Sangue Lusitano (PSL)',
            age: 'Plantel de 40 éguas adultas e 12 potros',
            weightKg: 540,
            habitatOrEnvironment: 'Piquetes de Tífton irrigados em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 40,
            respiratoryRateRpm: 16,
            temperatureCelsius: 37.8,
            mucousMembranes: 'Róseas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'O administrador do haras relata que vermifuga 100% dos animais a cada 60 dias pontualmente com pasta oral de ivermectina 1% há mais de 5 anos consecutivos. Apesar disso, várias éguas apresentam escore corporal abaixo do ideal (ECC 2.5/5), pelagem desbotada sem brilho e episódios frequentes de fezes amolecidas.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Coproparasitológico McMaster e Teste FECRT',
              findings: 'Avaliação da carga parasitária do lote e eficácia do anti-helmíntico.',
              abnormalValues: [
                { parameter: 'OPG Médio Inicial do Plantel (Dia 0)', value: '780 OPG', reference: '< 200 OPG', status: 'critical' },
                { parameter: 'OPG aos 14 dias pós-Ivermectina (FECRT)', value: '510 OPG', reference: 'Redução > 95%', status: 'critical' },
                { parameter: 'Percentual de Redução FECRT da Ivermectina', value: '34.6% de redução (Resistência Severa)', reference: '> 95% de eficácia', status: 'critical' },
                { parameter: 'Estratificação OPG dos 40 animais', value: '8 éguas com OPG > 1.200; 24 éguas com OPG < 150', reference: 'Distribuição binomial típica', status: 'elevated' }
              ]
            }
          ],
          challengePrompt: 'Com a comprovação inequívoca de falência terapêutica da ivermectina (eficácia de apenas 34.6%) e contaminação das pastagens, qual é o plano de reestruturação sanitária correto?',
          decisionOptions: [
            {
              id: 'opt_dec_eq3_1',
              label: 'Suspender desverminação indiscriminada + Testar FECRT para outras classes (Pirantel / Moxidectina) + Tratar apenas éguas > 300-500 OPG + Recolher fezes dos piquetes 2x/semana',
              description: 'Identificar droga efetiva por FECRT, adotar tratamento seletivo focado nos altos eliminadores para preservar refúgia e reduzir carga ambiental por manejo físico.',
              isOptimal: true,
              consequenceText: 'Excelente conduta técnica! A suspensão da vermifugação em massa cessa a pressão seletiva sobre a população parasitária. Tratar apenas as 8 éguas altas contaminadoras reduz 80% do descarte de ovos no pasto, enquanto as 24 éguas baixas eliminadoras deixam de receber químicos desnecessários, salvaguardando a refúgia e prolongando a vida útil dos anti-helmínticos restantes.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Desverminação seletiva baseada em OPG somada à remoção mecânica de fezes das pastagens',
                mechanism: 'Preservação de alelos sensíveis em refúgia e redução da ingestão de larvas infectantes L3',
                effect: 'Queda do OPG ambiental para menos de 100 sem selecionar mutantes super-resistentes',
                clinicalMeaning: 'Recuperação do escore corporal do plantel e sustentabilidade parasitológica definitiva'
              }
            },
            {
              id: 'opt_dec_eq3_2',
              label: 'Quadruplicar a dose de ivermectina e passar a aplicá-la a cada 15 dias em todos os animais para vencer a resistência',
              description: 'Aumentar frequência e dose do mesmo fármaco ineficaz.',
              isOptimal: false,
              consequenceText: 'Erro desastroso! Aumentar a dose de um princípio ativo que já falhou acelera a destruição completa da refúgia, seleciona 100% de ciatóstomos homozigotos resistentes e pode induzir toxicidade neurológica no hospedeiro equino.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Pressão química contínua e massiva com molécula ineficaz',
                mechanism: 'Eliminação de todo e qualquer parasita sensível com fixação irreversível de genes resistentes',
                effect: 'Colapso total do controle parasitário da propriedade',
                clinicalMeaning: 'Ciatostomose larval severa refratária com cólica e enteropatia perdedora de proteínas'
              }
            },
            {
              id: 'opt_dec_eq3_3',
              label: 'Proibir as éguas de comerem pasto para sempre e mantê-las 24h trancadas em baias escuras sem água',
              description: 'Privação alimentar extrema e confinamento impróprio.',
              isOptimal: false,
              consequenceText: 'Conduta inaceitável que viola completamente o bem-estar animal e induz cólica por desidratação e úlceras gástricas severas.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Privação hídrica e alimentar com estresse de confinamento permanente',
                mechanism: 'Desidratação sistêmica aguda e perda de tamponamento salivar gástrico',
                effect: 'Úlcera gástrica perfurada e choque hipovolêmico',
                clinicalMeaning: 'Mortalidade no plantel'
              }
            }
          ],
          learningTakeaways: [
            'A vermifugação em massa cega a cada 60 dias é uma prática arcaica e danosa que destrói a eficácia das moléculas antiparasitárias.',
            'A Desverminação Seletiva baseada no exame de McMaster foca no tratamento dos animais altos eliminadores (> 500 OPG), preservando a refúgia.',
            'O teste FECRT aos 14 dias pós-aplicação é mandatório para comprovar se um anti-helmíntico ainda é ativo na fazenda.'
          ]
        }
      },
      {
        id: 'sec_eq_03_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Biossegurança em Haras & Desverminação Seletiva',
        exerciseId: 'ex_equine_03'
      }
    ]
  },
  {
    id: 'lesson_equine_04_dentistry_mastication',
    moduleId: 'mod_equine_prod',
    title: 'Odontologia Equina, Arcada Anisognata & Biomecânica da Mastigação',
    shortDescription: 'Dentes hipsodontes, anisognatia, formação de pontas de esmalte molares, quidding, dor ao freio e extração do dente de lobo.',
    estimatedMinutes: 20,
    order: 4,
    concepts: ['concept_equine_dentistry_masticatory_biomechanics'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_eq_04_th1',
        type: 'theory',
        title: 'Anatomia Hipsodonte, Anisognatia & Repercussões Sistêmicas',
        contentMarkdown: `### Dentes Hipsodontes & Erupção Contínua

Ao contrário dos carnívoros e primatas que possuem dentes braquidontes (com coroa curta e erupção finalizada na juventude), os equinos desenvolveram **dentes hipsodontes**:
* **Coroa de Reserva Longa:** A maior parte do dente fica embutida dentro dos alvéolos ósseos da maxila e da mandíbula.
* **Taxa de Erupção Contínua:** Os dentes sofrem erupção lenta e progressiva de **2 a 3 mm por ano** ao longo de quase toda a vida do cavalo (até cerca de 20 a 25 anos de idade, quando a coroa de reserva é finalmente consumida).
* **Compensação pelo Atrito:** Essa erupção contínua foi moldada evolutivamente para compensar o desgaste mecânico severo decorrente da mastigação contínua de forragens ásperas ricas em fitólitos de sílica mineral.

---

### O Enigma da Arcada Anisognata & as Pontas de Esmalte Cortantes

A cavidade oral equina possui uma particularidade biomecânica determinante:
* **Arcada Anisognata:** A **maxila (arcada superior) é cerca de 20% a 25% mais larga** no plano transverso do que a **mandíbula (arcada inferior)**.
* **Mesa Oclusal Angulada:** A superfície oclusal dos dentes da bochecha (pré-molares e molares) possui uma inclinação fisiológica oblíqua de cerca de 10 a 15 graus.
* **A Mastigação em "Oito":** Para triturar forragens, o cavalo realiza uma excursão mastigatória lateral elíptica. Contudo, quando os cavalos são estabulados e consomem rações concentradas peletizadas ou trituradas, a excursão lateral diminui drasticamente, passando a movimentos quase puramente verticais de esmagamento.

\`\`\`mermaid
flowchart TD
    A["Anisognatia Fisiológica: Maxila 20-25% mais Larga que a Mandíbula"] --> B["Dieta Rica em Grãos que Diminui a Excursão Mastigatória Lateral em Oito"]
    B --> C["Erupção Contínua sem Desgaste das Bordas Dentárias Opostas"]
    C --> D["Formação de Pontas de Esmalte Vestibulares Superiores e Linguais Inferiores"]
    D --> E["Lacerações e Úlceras Profundas na Mucosa Jugal das Bochechas e na Língua"]
    E --> F["Mastigação Dolorosa Incompleta com Queda de Alimento ('Quidding')"]
    F --> G["Deglutição de Fibras Longas sem Quebra da Parede Celular Vegetal"]
    G --> H["Predisposição a Impactações de Flexura Pélvica, Perda de Peso e Dor ao Freio/Bridão"]
\`\`\`

> 💡 Regra Mnemônica Canônica das Pontas de Esmalte:
> * **Borda VESTIBULAR (Lateral/Bucal):** Dentes SUPERIORES (Maxilares - atritam e cortam a bochecha).
> * **Borda LINGUAL (Medial/Interna):** Dentes INFERIORES (Mandibulares - atritam e cortam a língua).

---

### Manifestações Clínicas & a Síndrome do "Quidding"

Quando as pontas de esmalte atingem proporções afiadas como navalhas, surgem desdobramentos graves:
1. **Quidding:** O animal tenta mastigar o feno, mas a dor das lacerações na bochecha o impede de completar o ciclo; ele enrola o bolo forrageiro com a língua e o cospe babado no cocho ou na cama da baia (bolas com formato de charuto).
2. **Deglutição de Fibras Grosseiras (> 2-3 cm):** As fibras não trituradas chegam intactas ao trato gastrointestinal, predispondo à **obstrução esofágica ("engasgo/choke")** e **impactação mecânica da flexura pélvica**.
3. **Dente de Lobo (1º Pré-molar Vestigial - Triadan 105/205):** Localizado imediatamente cranial ao segundo pré-molar nas barras interdentais superiores. Embora pequeno, o dente de lobo fica exatamente na área de apoio da embocadura (bridão ou freio metálico). O contato do ferro esmaga a mucosa contra a raiz pontiaguda do dente de lobo, provocando cabeceio violento, dor, agitação e rebeldia esportiva.
4. **Odontoplastia Corretiva:** Realizada com cavalo contido em tronco, sedado (detomidina + butorfanol), com abridor bucal articulado de Hausmann e iluminação frontal. Utilizam-se grosas elétricas rotatórias com irrigação hídrica constante para nivelar as cristas afiadas sem superaquecer a polpa dental (evitando necrose pulpar térmica).`
      },
      {
        id: 'sec_eq_04_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Zafira (Quarto de Milha)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Exame Odontológico, Odontoplastia e Exodontia de Dente de Lobo',
          patient: {
            name: 'Zafira',
            species: 'Equino de Prova',
            breed: 'Quarto de Milha (QM de Três Tambores)',
            age: '7 anos',
            weightKg: 460,
            habitatOrEnvironment: 'Centro de Treinamento Equestre em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 38,
            respiratoryRateRpm: 14,
            temperatureCelsius: 37.9,
            mucousMembranes: 'Róseas e brilhantes',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Zafira perdeu cerca de 35 kg nos últimos 2 meses. O treinador notou que ela demora o dobro do tempo para comer a ração, derrama grãos no chão e deixa dezenas de "charutos" de feno babados e mastigados pela metade na cama da baia (quidding). Além disso, durante os treinos com bridão de argola, a égua cabeceia com violência ao ser tracionada para o lado esquerdo, recusando o contorno dos tambores.',
          exams: [
            {
              category: 'odontologico_especifico',
              title: 'Inspeção Buco-Dentária com Abridor de Hausmann e Espelho',
              findings: 'Avaliação da mesa oclusal e estruturas moles adjacentes sob sedação.',
              abnormalValues: [
                { parameter: 'Bordas Vestibulares Superiores (106-111 e 206-211)', value: 'Pontas de esmalte cortantes de até 5 mm com úlceras longitudinais na mucosa jugal', reference: 'Superfície oclusal nivelada sem arestas afiadas', status: 'critical' },
                { parameter: 'Bordas Linguais Inferiores (306-311 e 406-411)', value: 'Arestas cortantes com laceração superficial da borda lingual lateral', reference: 'Bordas lisas e atraumáticas', status: 'critical' },
                { parameter: 'Dentes de Lobo (Triadan 105 e 205)', value: 'Presentes bilateralmente na maxila, proeminentes e com mucosa hiperêmica adjacente', reference: 'Ausência ou extraídos previamente à doma', status: 'elevated' }
              ]
            }
          ],
          challengePrompt: 'Qual é o plano de intervenção odontocirúrgico integral para Zafira recuperar seu rendimento e cessar a dor bucal?',
          decisionOptions: [
            {
              id: 'opt_dec_eq4_1',
              label: 'Odontoplastia oclusal com grosa diamantada rotatória sob irrigação hídrica + Exodontia dos dentes de lobo 105 e 205 com luxador sob bloqueio local + Repouso de embocadura por 14 dias',
              description: 'Nivelar as pontas de esmalte para cicatrizar as úlceras, extrair o dente de lobo com descolamento periodontal delicado e afastar bridões metálicos durante a cicatrização.',
              isOptimal: true,
              consequenceText: 'Excelente planejamento cirúrgico e odontológico! O nivelamento controlado das pontas remove o trauma abrasivo nas bochechas e língua sem lesar a polpa dentária. A extração dos dentes de lobo 105 e 205 sob bloqueio anestésico local infiltrativo elimina a dor crônica ao bridão. O repouso com feno picado e sem embocadura permite reepitelização integral da mucosa oral.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Desgaste odontológico das pontas e exodontia dos dentes vestigiais causadores de dor',
                mechanism: 'Cessação imediata do trauma mecânico sobre a mucosa jugal e barras interdentais',
                effect: 'Cicatrização das úlceras, restauração da mastigação eficiente e fim do quidding',
                clinicalMeaning: 'Recuperação do ganho de peso, melhora do rendimento esportivo e receptividade ao bridão'
              }
            },
            {
              id: 'opt_dec_eq4_2',
              label: 'Extrair todos os 24 dentes molares da égua para garantir que nunca mais se formem pontas de esmalte',
              description: 'Exodontia total de dentes mastigatórios.',
              isOptimal: false,
              consequenceText: 'Erro monstruoso e mutilador! A extração de dentes funcionais impossibilita a apreensão e mastigação de forragem, levando à inanição, fratura mandibular e eutanásia.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Mutilação cirúrgica desnecessária e extração de dentes vitais hipsodontes',
                mechanism: 'Perda absoluta da capacidade mastigatória de volumosos',
                effect: 'Inanição progressiva e colapso metabólico',
                clinicalMeaning: 'Morte ou eutanásia do animal'
              }
            },
            {
              id: 'opt_dec_eq4_3',
              label: 'Colocar um freio mais pesado e apertar o focinho com arame para impedir que ela abra a boca',
              description: 'Manejo coercitivo desprovido de qualquer fundamentação técnica e que agrava o sofrimento.',
              isOptimal: false,
              consequenceText: 'Conduta abusiva que agrava exponencialmente o trauma na mucosa oral e pode fraturar as barras mandibulares da égua.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Aumento da tração mecânica de embocadura sobre dentes afiados e úlceras ativas',
                mechanism: 'Esmagamento tecidual contínuo e fratura alveolar',
                effect: 'Osteomielite mandibular e desvios comportamentais perigosos ao cavaleiro',
                clinicalMeaning: 'Destruição do cavalo de prova'
              }
            }
          ],
          learningTakeaways: [
            'A anisognatia anatômica determina pontas de esmalte constantes na face vestibular superior e lingual inferior.',
            'O quidding (queda de bolotas de feno mastigado) é o sinal clássico de dor mastigatória crônica por pontas de esmalte.',
            'A exodontia de dente de lobo profilática previne reações defensivas ao contato metálico da embocadura esportiva.'
          ]
        }
      },
      {
        id: 'sec_eq_04_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Odontologia & Biomecânica da Mastigação',
        exerciseId: 'ex_equine_04'
      }
    ]
  },
  {
    id: 'lesson_equine_05_podology_navicular',
    moduleId: 'mod_equine_prod',
    title: 'Casqueamento Balanceado, Podologia Esportiva & Síndrome Navicular',
    shortDescription: 'Biomecânica do estojo córneo, conformação pinça longa/talão baixo, etiopatogenia da podotroclite e ferrageamento ortopédico.',
    estimatedMinutes: 22,
    order: 5,
    concepts: ['concept_equine_podology_biomechanics_navicular'],
    xpReward: 160,
    sections: [
      {
        id: 'sec_eq_05_th1',
        type: 'theory',
        title: 'Biomecânica do Casco Equino, Eixo Podofalângico & a Doença Podotroclear',
        contentMarkdown: `### O Casco Dinâmico & a Bomba Hemodinâmica Digital

O estojo córneo do cavalo é uma estrutura viscoelástica viva dotada de notável engenharia biomecânica:
* **Absorção de Impacto e Expansão de Talões:** No momento do pouso da passada, a ranilha e os talões entram em contato inicial com o solo. O impacto comprime o coxim digital fibroelástico e as cartilagens alares da terceira falange (P3), provocando uma **expansão lateral de 2 a 5 mm nos talões**.
* **A Bomba Venosa Digital:** Os membros distais equinos são desprovidos de feixes musculares para atuar no retorno venoso contra a gravidade. A compressão rítmica do plexo venoso podal pelo coxim digital a cada passada atua como uma verdadeira **bomba hemodinâmica** que ejeta o sangue venoso desprovido de válvulas de volta para a circulação proximal.

---

### O Eixo Podofalângico & a Síndrome "Pinça Longa - Talões Baixos" (Long Toe - Low Heel)

O balanceamento do casco baseia-se no alinhamento tridimensional entre as falanges proximal (P1 - quartela), média (P2 - coroa) e distal (P3 - osso do casco):
* **Alinhamento Reto Normal:** Em vista lateral, o eixo da quartela e a inclinação da parede dorsal do casco devem formar uma linha reta ininterrupta (com ângulo de **50° a 54° nos membros torácicos**).
* **O Desbalanceamento "Pinça Longa e Talões Escorridos":**
  1. A pinça excessivamente comprida age como um braço de alavanca mecânico aumentado.
  2. O momento em que o casco precisa deixar o solo é retardado (**Ponto de Quebra da Passada ou Breakover Atrasado**).
  3. Para completar o passo com o breakover atrasado, a articulação interfalângica distal sofre hiperextensão severa, exercendo **tensão mecânica colossal sobre o Tendão Flexor Digital Profundo (TFDP)**.

\`\`\`mermaid
flowchart TD
    A["Conformação de Pinça Excessivamente Longa e Talões Baixos Colapsados"] --> B["Atraso Significativo no Ponto de Quebra da Passada (Breakover Tardio)"]
    B --> C["Tensão Mecânica Extrema Contínua sobre o Tendão Flexor Digital Profundo (TFDP)"]
    C --> D["Compressão Isquêmica Crônica do TFDP contra o Osso Navicular e Bursa Podotroclear"]
    D --> E["Sinovite da Bursa Navicular, Erosão de Fibrocartilagem e Esclerose Óssea com Lise"]
    E --> F["Claudicação Crônica Bilateral de Anteriores com Apoio em Pinça e Tropeços"]
    F --> G["Casqueamento Ortopédico com Recuo do Breakover + Ferradura de Ovo + Bisfosfonato"]
    G --> H["Restauração do Eixo Podofalângico, Alívio da Tensão do TFDP e Retorno Esportivo"]
\`\`\`

---

### A Fisiopatologia da Síndrome do Navicular (Podotroclite / Doença Podotroclear)

O **Osso Sesamoide Distal (Navicular)** localiza-se na face palmar da articulação interfalângica distal, servindo de roldana anatômica sobre a qual o TFDP desliza, intermediado pela **Bursa Podotroclear (Navicular)**.
1. **Compressão Isquêmica Crônica:** Sob a conformação de pinça longa e talões colapsados, o TFDP exerce compressão esmagadora constante sobre o osso navicular a cada impacto.
2. **Degeneração e Esclerose Óssea:** O atrito lesiona a fibrocartilagem da face flexora, provocando sinovite exsudativa da bursa navicular, esclerose do osso subcondral e proliferação de entesófitos nas bordas do navicular.
3. **Alargamento dos Canais Sinoviais:** Os canais vasculares e sinoviais na borda distal do osso navicular sofrem dilatação cística (visíveis na radiografia como formato em "cone" ou "pirulito").
4. **Quadro Clínico Clássico:**
   * Claudicação insidiosa e progressiva, quase sempre **bilateral de membros torácicos**.
   * O cavalo tenta fugir da dor nos talões e passa a apoiar primeiro com a pinça (**marcha em pinça**, passadas curtas e tropeços contínuos).
   * Em repouso na baia, o animal "aponta" um dos membros à frente de forma alternada.
   * **Teste da Pinça de Casco:** Resposta álgica positiva ao comprimir o terço médio da ranilha e a fossa dos talões.
   * **Bloqueio Anestésico do Nervo Digital Palmar (Papeano Baixo / Abaxial):** Dessensibiliza o terço caudal do casco. A claudicação do membro bloqueado cede quase 100%, frequentemente desmascarando a dor no membro contralateral!
5. **Conduta Ortopédica e Podológica:**
   * *Casqueamento Corretivo:* Encurtar e recuar a pinça dorsal, trazendo o ponto de quebra (*breakover*) de volta para cerca de **6 a 8 mm à frente do ápice da ranilha funcional**, aliviando a alavanca.
   * *Ferrageamento Terapêutico:* Ferradura tipo "ovo" (*egg bar*) ou com barra reta nos talões para estender o plano de apoio caudalmente, com chanfro dorsal na pinça (*rolled toe*), combinada a palmilha de cunha (2° a 3°) e silicone de ranilha.
   * *Farmacoterapia:* Anti-inflamatório oral seletivo para COX-2 (Firocoxib a 0.1 mg/kg/dia) e bisfosfonatos intravenosos (Ácido Clodrônico / Tildronato) para inibir a reabsorção osteoclástica navicular.`
      },
      {
        id: 'sec_eq_05_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Titan (Brasileiro de Hipismo)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Abordagem Podológica e Terapêutica da Síndrome do Navicular',
          patient: {
            name: 'Titan',
            species: 'Equino de Salto',
            breed: 'Brasileiro de Hipismo (BH)',
            age: '8 anos',
            weightKg: 580,
            habitatOrEnvironment: 'Hípica de Salto Clássico em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 42,
            respiratoryRateRpm: 16,
            temperatureCelsius: 37.9,
            mucousMembranes: 'Róseas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Titan é um cavalo de salto de 1.30 m que vem apresentando perda gradual de rendimento esportivo, recusas em obstáculos de duplo e claudicação crônica intermitente nos dois membros dianteiros há 4 meses. O cavalo tropeça com frequência em pisos de cascalho e no círculo à esquerda o trote é curto e rígido. Na baia, costuma descansar mantendo o casco dianteiro esquerdo apontado para a frente.',
          exams: [
            {
              category: 'podologico_e_imagem',
              title: 'Exame de Claudicação, Pinça de Casco, Bloqueio e Radiografias',
              findings: 'Investigação do aparelho locomotor distal.',
              abnormalValues: [
                { parameter: 'Conformação Podal', value: 'Pinça longa com talões escorridos colapsados e quebra caudal do eixo podofalângico', reference: 'Eixo axial podofalângico reto', status: 'critical' },
                { parameter: 'Teste da Pinça de Casco', value: 'Positivo acentuado sobre o terço médio da ranilha em ambos os anteriores', reference: 'Indolor em toda a sola e ranilha', status: 'critical' },
                { parameter: 'Bloqueio do Nervo Digital Palmar (Membro Esquerdo)', value: 'Melhora de 85% na claudicação do membro esquerdo com desmascaramento de claudicação grau 2/5 no membro direito', reference: 'Sem alteração de padrão de marcha', status: 'critical' },
                { parameter: 'Radiografia Digital (Incidência Skyline e 65°)', value: 'Esclerose da cavidade medular e 4 canais sinoviais císticos dilatados na borda distal do navicular esquerdo', reference: 'Osso navicular homogêneo com canais delgados', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Qual é o plano terapêutico e ortopédico integrado para a recuperação biomecânica de Titan?',
          decisionOptions: [
            {
              id: 'opt_dec_eq5_1',
              label: 'Casqueamento com recuo do breakover + Ferradura tipo Egg Bar com chanfro de pinça + Palmilha com almofada de silicone + Firocoxib oral + Clodronato IV',
              description: 'Aliviar a tensão mecânica do TFDP sobre o navicular recuando o breakover, conferir suporte aos talões e inibir reabsorção óssea com bisfosfonato.',
              isOptimal: true,
              consequenceText: 'Conduta padrão-ouro em medicina esportiva equina! O casqueamento corretivo com recuo do breakover da pinça encurta a alavanca da passada, reduzindo drasticamente a tração do TFDP sobre o navicular. A ferradura em ovo (egg bar) redistribui as forças para trás dos talões colapsados. O firocoxib cessa a sinovite da bursa e o bisfosfonato (clodronato) estabiliza a lise óssea osteoclástica.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Recuo do breakover, suporte ortopédico de talões com ferradura de ovo e bisfosfonato',
                mechanism: 'Alívio da compressão mecânica do TFDP e inibição da reabsorção óssea navicular',
                effect: 'Remissão da claudicação ao trote, desaparecimento dos tropeços e preservação articular',
                clinicalMeaning: 'Retorno seguro ao treinamento atlético de salto após 60 dias de reabilitação'
              }
            },
            {
              id: 'opt_dec_eq5_2',
              label: 'Deixar as pinças ainda mais compridas para aumentar a alavanca do salto e aplicar injeção de querosene nos talões',
              description: 'Piora biomecânica deliberada associada a prática empírica nociva.',
              isOptimal: false,
              consequenceText: 'Erro gravíssimo! Aumentar a pinça amplifica exponencialmente o estresse de cisalhamento sobre o TFDP, podendo provocar ruptura de tendão e necrose química severa por injeção de solvente.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Piora da alavanca de pinça e injeção de substância cáustica',
                mechanism: 'Sobrecarga de tensão máxima no TFDP com celulite química nos tecidos profundos',
                effect: 'Ruptura do TFDP e luxação da falange distal',
                clinicalMeaning: 'Aposentadoria imediata ou eutanásia por perda do suporte esquelético'
              }
            },
            {
              id: 'opt_dec_eq5_3',
              label: 'Realizar neurectomia digital bilateral cega sem casqueamento corretivo e forçar o cavalo a competir no dia seguinte',
              description: 'Cortar os nervos para retirar a dor sem corrigir a patologia primária.',
              isOptimal: false,
              consequenceText: 'Prática antiética e perigosa! A neurectomia sem correção mecânica faz com que o cavalo sem sensibilidade continue a destruir o tendão e o osso já desvitalizados até a ruptura completa do TFDP ou fratura catastrófica do navicular em competição.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Dessensibilização cirúrgica isolada sem correção mecânica e retorno precoce ao impacto',
                mechanism: 'Perda dos reflexos proprioceptivos de proteção contra sobrecarga mecânica',
                effect: 'Fratura avulsiva do osso navicular e ruptura do tendão flexor profundo',
                clinicalMeaning: 'Catástrofe ortopédica irreversível'
              }
            }
          ],
          learningTakeaways: [
            'A conformação de pinça longa e talões colapsados atrasa o breakover e multiplica a tensão do TFDP sobre o navicular.',
            'A Síndrome do Navicular é predominantemente bilateral; o bloqueio anestésico de um membro frequentemente revela claudicação no membro oposto.',
            'O casqueamento ortopédico com recuo da pinça associado a ferraduras de suporte caudal (egg bar) é a base de todo o sucesso terapêutico.'
          ]
        }
      },
      {
        id: 'sec_eq_05_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Casqueamento & Síndrome Navicular',
        exerciseId: 'ex_equine_05'
      }
    ]
  }
];
// ==========================================
// 4. SUINOCULTURA & AVICULTURA INDUSTRIAL
// ==========================================
export const SWINE_POULTRY_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_swine_poultry_01',
    conceptId: 'concept_swine_poultry_biosecurity_ambience',
    type: 'multiple_choice',
    prompt: 'Em galpões avícolas climatizados por pressão negativa tipo túnel (Dark House), qual é o mecanismo físico e biológico do efeito "Wind Chill" (resfriamento pelo vento) sobre frangos de corte na fase final de engorda durante dias de calor intenso?',
    options: [
      {
        id: 'opt_sp1_1',
        text: 'A velocidade linear do ar de 2.5 a 3.0 m/s remove continuamente a camada de ar estagnada quente e úmida retida entre as penas, aumentando a perda de calor por convecção e reduzindo a sensação térmica percebida em 4°C a 6°C sem molhar as aves',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Aves não possuem glândulas sudoríparas dérmicas e sua termorregulação sensível depende de convecção e radiação. O fluxo uniforme de vento em alta velocidade rompe a camada limite de ar microclimático isolante preso na plumagem, dissipando o calor corporal e prevenindo a ofegação excessiva e a alcalose respiratória fatal.'
      },
      {
        id: 'opt_sp1_2',
        text: 'O vento forte faz as aves suarem copiosamente pela pele da cabeça, produzindo suor salino que refrigera o corpo',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Aves não possuem glândulas sudoríparas em nenhuma parte do tegumento corporal.'
      },
      {
        id: 'opt_sp1_3',
        text: 'A ventilação por pressão negativa converte o nitrogênio do ar em oxigênio puro que resfria a circulação pulmonar',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A ventilação não altera a composição dos gases atmosféricos; apenas renova o ar e gera velocidade convectiva de troca térmica.'
      },
      {
        id: 'opt_sp1_4',
        text: 'O sistema tipo túnel serve unicamente para empurrar as aves para o fundo do galpão para facilitar a apanha no abate',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A função primordial da ventilação tipo túnel é o controle bioclimático rigoroso de temperatura, umidade relativa, CO2 e amônia.'
      }
    ]
  },
  {
    id: 'ex_swine_poultry_02',
    conceptId: 'concept_swine_poultry_biosecurity_all_in_all_out',
    type: 'multiple_choice',
    prompt: 'Qual é o fundamento epidemiológico do manejo "All-In, All-Out" (Todos Dentro, Todos Fora) associado ao período de Vazio Sanitário (10 a 14 dias mínimos) em núcleos de suínos ou aves?',
    options: [
      {
        id: 'opt_sp2_1',
        text: 'Alojamento e expedição simultâneos de lotes unietários seguidos de limpeza profunda, desinfecção e descanso hermético para dessecação e quebra do ciclo biológico de patógenos persistentes (como Salmonella, vírus de Gumboro e circovírus)',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! No sistema All-In, All-Out, a desocupação total e o vazio sanitário impedem que patógenos adaptados e excretados por animais mais velhos passem diretamente para animais jovens e imunologicamente imaturos, rompendo a cadeia epidemiológica entre ciclos de produção.'
      },
      {
        id: 'opt_sp2_2',
        text: 'Misturar leitões de diferentes semanas de vida no mesmo galpão para que os maiores ensinem os menores a comer ração',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Essa prática ("produção contínua") é o oposto do All-In, All-Out e é a causa número um de transmissão enzoótica de doenças como pneumonia enzoótica e circovirose.'
      },
      {
        id: 'opt_sp2_3',
        text: 'Manter o galpão com animais velhos durante o vazio sanitário para limpar as sobras de ração dos comedouros',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Vazio sanitário exige ausência total e absoluta de animais vivos nas instalações.'
      },
      {
        id: 'opt_sp2_4',
        text: 'Reduzir o tempo entre lotes para menos de 24 horas para evitar que os vírus sintam falta dos hospedeiros',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Intervalos menores que 10-14 dias preservam cargas maciças de patógenos viáveis no ambiente, contaminando o lote seguinte no primeiro dia de vida.'
      }
    ]
  },
  {
    id: 'ex_swine_poultry_03',
    conceptId: 'concept_swine_poultry_nutrition_feed_conversion',
    type: 'multiple_choice',
    prompt: 'Por que a manutenção da umidade da cama de aviário acima de 30% a 35% predispõe à pododermatite de coxim plantar (footpad dermatitis), e qual o impacto econômico na indústria de exportação?',
    options: [
      {
        id: 'opt_sp3_1',
        text: 'A umidade excessiva acelera a proliferação bacteriana que decompõe o ácido úrico em amônia cáustica, provocando queimaduras químicas e ulcerações no coxim plantar das patas ("paws"), resultando em condenação do corte de alto valor exportado à Ásia',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O ácido úrico das excretas avícolas é convertido em amônia livre por bactérias uricolíticas sob alta umidade e calor. O contato constante com a amônia cáustica destrói o estrato córneo das almofadas plantares, gerando pododermatite ulcerativa (graus 2 e 3) e condenação total dos pezinhos pelo SIF.'
      },
      {
        id: 'opt_sp3_2',
        text: 'A cama úmida faz as unhas das galinhas crescerem para dentro do pulmão, causando asfixia aguda',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A afecção é podal e tegumentar, restrita ao coxim e articulações distais do dígito.'
      },
      {
        id: 'opt_sp3_3',
        text: 'A umidade da cama transforma a maravalha em ração concentrada, provocando obesidade extrema nas aves',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A maravalha é celulose indigestível e nunca substitui a ração formulada.'
      },
      {
        id: 'opt_sp3_4',
        text: 'A pododermatite melhora a qualidade da carne de peito e valoriza as carcaças nos leilões internacionais',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A pododermatite causa dor intensa, reduz o ganho de peso e condena peças nobres de exportação.'
      }
    ]
  },
  {
    id: 'ex_swine_poultry_04',
    conceptId: 'concept_swine_poultry_mass_vaccination_immunology',
    type: 'multiple_choice',
    prompt: 'Na auditoria sorológica de um lote avícola vacinado em massa contra o vírus da Doença de Gumboro (IBDV), o que significa encontrar um Título Médio satisfatório acompanhado de um Coeficiente de Variação (CV) superior a 60%?',
    options: [
      {
        id: 'opt_sp4_1',
        text: 'Indica falha operacional grave na aplicação da vacina (desuniformidade), demonstrando que parte do lote recebeu subdose ou vacina inativada (ex: por cloro na água), restando aves totalmente desprotegidas e suscetíveis a surtos',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! Em medicina de populações, a média isolada é enganosa. Um CV > 60% revela grande dispersão de títulos: enquanto algumas aves atingiram altos títulos, uma fração expressiva do lote permaneceu soronegativa (título zero), atuando como janela biológica aberta para a circulação de cepas virulentas de campo.'
      },
      {
        id: 'opt_sp4_2',
        text: 'Indica que 100% das aves estão com imunidade estéril perpétua e nunca mais precisarão de vacinas',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Um CV alto indica exatamente o oposto: extrema desuniformidade de imunidade com animais desprotegidos.'
      },
      {
        id: 'opt_sp4_3',
        text: 'Comprova que a vacina se transformou em hormônio de crescimento dentro das aves',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Vacinas atenuadas estimulam síntese de anticorpos humorais e imunidade celular, sem qualquer relação hormonal.'
      },
      {
        id: 'opt_sp4_4',
        text: 'Significa que o sangue foi coletado de bovinos por engano no laboratório',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O exame sorológico ELISA é espécie-específico com reagentes calibrados para soro aviário.'
      }
    ]
  },
  {
    id: 'ex_swine_poultry_05',
    conceptId: 'concept_swine_poultry_pathology_notifiable_diseases',
    type: 'multiple_choice',
    prompt: 'Ao inspecionar um galpão de postura com mortalidade fulminante de 40% em 24h, aves com cianose severa de crista e barbelas, edema cefálico e sufusões hemorrágicas nas pernas (suspeita de IAAP / Newcastle), qual é a conduta mandante obrigatória do médico veterinário?',
    options: [
      {
        id: 'opt_sp5_1',
        text: 'NÃO realizar necropsia no local para evitar emissão de aerossóis infectantes, interditar o trânsito da propriedade e notificar imediatamente o Serviço Veterinário Oficial (CDA-SP / MAPA)',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito e mandatório! A abertura de carcaças com suspeita de Influenza Aviária de Alta Patogenicidade (IAAP) ou Newcastle velogênica gera aerossóis com trilhões de vírions viáveis que o vento dispersa por quilômetros, além de gerar risco zoonótico de infecção humana. A conduta legal absoluta é interditar o acesso e aguardar os fiscais agropecuários oficiais paramentados em EPI nível 3.'
      },
      {
        id: 'opt_sp5_2',
        text: 'Abrir 30 carcaças na porta do galpão para coletar o proventrículo e descartar os restos no lixo comum',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e criminoso. Abrir carcaças em campo promove a disseminação explosiva de um patógeno de notificação compulsória imediata internacional.'
      },
      {
        id: 'opt_sp5_3',
        text: 'Misturar ciprofloxacino na água de bebida e esperar 15 dias para ver se as aves param de morrer',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Além de antibióticos não terem ação antiviral, atrasar a notificação oficial causa a devastação do polo avícola e violação grave da legislação de defesa sanitária.'
      },
      {
        id: 'opt_sp5_4',
        text: 'Vender as carcaças para alimentação de suínos em granjas vizinhas para minimizar prejuízos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Essa conduta constitui crime sanitário gravíssimo e disseminação intencional de epizootia.'
      }
    ]
  }
];

export const SWINE_POULTRY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_swine_poultry_01_ambience',
    moduleId: 'mod_swine_poultry',
    title: 'Ambiência, Conforto Térmico & Ventilação em Pressão Negativa',
    shortDescription: 'Termorregulação em monogástricos industriais, ventilação tipo túnel, efeito Wind Chill e controle do estresse calórico.',
    estimatedMinutes: 18,
    order: 1,
    concepts: ['concept_swine_poultry_biosecurity_ambience'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_sp_01_th1',
        type: 'theory',
        title: 'Termorregulação em Aves e Suínos & a Física do Túnel de Vento',
        contentMarkdown: `### A Vulnerabilidade Térmica dos Monogástricos Industriais

Aves e suínos modernos possuem taxas metabólicas altíssimas decorrentes de seleção genética para ganho de peso acelerado. Contudo, compartilham uma limitação fisiológica crucial:
* **Ausência de Glândulas Sudoríparas Funcionais:** Nenhum dos dois grupos transpira pela pele. A perda de calor corporal para o meio ambiente depende de:
  1. *Vias Sensíveis (Gradiente Térmico):* Condução, convecção e radiação (eficientes apenas quando a temperatura ambiente está abaixo da temperatura da pele).
  2. *Via Evaporativa Latente (Ofegação / Polipneia Térmica):* Quando a temperatura ambiente atinge 28°C a 32°C, as vias sensíveis saturam e o animal depende exclusivamente da evaporação de água pelas mucosas do trato respiratório.

---

### A Cascata Fatal do Estresse por Calor & Alcalose Respiratória

Nas aves (temperatura corporal basal de **41.0°C a 42.0°C**), a polipneia térmica extrema provoca distúrbios hemodinâmicos imediatos:

\`\`\`mermaid
flowchart TD
    A["Onda de Calor Súbita (> 34°C) em Galpão de Aves no Final do Lote (38 Dias)"] --> B["Aumento Exponencial da Polipneia Térmica para Perda de Calor Latente"]
    B --> C["Hiperventilação Extrema com Expulsão Maciça de CO2 Alveolar"]
    C --> D["Instalação de Alcalose Respiratória Aguda com Queda do Cálcio Ionizado"]
    D --> E["Ativação do Sistema de Pressão Negativa com Velocidade de Vento a 2.8 m/s"]
    E --> F["Efeito Wind Chill com Remoção da Camada Limite de Calor das Penas"]
    F --> G["Redução da Sensação Térmica em 5°C e Retorno da FR para Parâmetros Seguros"]
\`\`\`

1. **Hiperventilação:** A frequência respiratória salta de 25-30 rpm para mais de 160-200 rpm (aves ofegantes, com bicos escancarados e asas abertas para expor a pele desprovida de penas).
2. **Lavagem de CO2 e Alcalose:** A hiperventilação expulsa dióxido de carbono ($CO_2$) em excesso do sangue, gerando **Alcalose Respiratória Severa** (pH sérico > 7.55).
3. **Queda do Cálcio Ionizado e Tetania:** A alcalose aumenta a ligação do cálcio à albumina, derrubando o cálcio ionizado livre ($Ca^{2+}$), provocando disfunção contrátil cardíaca, atonia neuromuscular e óbito por colapso cardiovascular e hipertermia ("morte por calor").

---

### A Engenharia dos Galpões Climatizados Tipo Túnel (Dark House)

* **Pressão Estática (20 a 35 Pascal):** Grandes exaustores axiais na extremidade posterior retiram o ar interno, gerando vácuo parcial.
* **O Efeito Wind Chill (Resfriamento Sensível pelo Vento):** A velocidade do ar é mantida entre **2.5 e 3.0 m/s**, removendo continuamente a camada estagnada de ar quente e úmido retida entre as penas das aves, reduzindo a sensação térmica em **4°C a 6°C** sem molhar o animal.
* **Resfriamento Evaporativo (Painéis de Celulose - Pad Cooling):** O ar que entra passa por placas de celulose umedecidas. A evaporação absorve calor do ar externo, resfriando-o em até 6°C a 8°C.
  > ⚠️ O Risco da Umidade Elevada: Se a umidade relativa externa ultrapassar 75-80%, a água do pad cooling satura o galpão de vapor, impedindo a ofegação das aves. Nesses momentos, desliga-se a irrigação do pad e opera-se exclusivamente na velocidade máxima dos exaustores!`
      },
      {
        id: 'sec_sp_01_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Granja Bela Vista (Ambiência)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Emergencial de Ambiência sob Onda de Calor Extrema em Aves de Corte',
          patient: {
            name: 'Lote 08 (Galpão 3 Dark House)',
            species: 'Aves de Corte',
            breed: 'Cobb 500',
            age: '39 dias (Fase final pré-abate)',
            weightKg: 2.75,
            habitatOrEnvironment: 'Galpão Dark House com 34.000 aves em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 380,
            respiratoryRateRpm: 190,
            temperatureCelsius: 43.1,
            mucousMembranes: 'Crestas e barbelas arroxeadas (cianóticas)',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'Às 14h de um dia de janeiro com temperatura externa de 37°C e umidade de 74%, o alarme de temperatura disparou. O lote de 34.000 frangos de 2.75 kg está deitado sobre a cama com asas abertas, pescoços estendidos e ofegando violentamente. Nas últimas duas horas, 85 aves morreram por asfixia calórica. No painel, a velocidade do ar estava em apenas 1.1 m/s (correias frouxas em 3 exaustores) e a umidade interna atingiu 82% com a bomba do pad cooling ligada ininterruptamente.',
          exams: [
            {
              category: 'parametros_ambientais',
              title: 'Auditoria de Painel de Climatização e Gases',
              findings: 'Medições técnicas de pressão, velocidade e microclima interno.',
              abnormalValues: [
                { parameter: 'Velocidade do Vento Interno', value: '1.1 m/s', reference: '2.5 a 3.0 m/s', status: 'critical' },
                { parameter: 'Umidade Relativa Interna', value: '82%', reference: '55% a 65%', status: 'critical' },
                { parameter: 'Temperatura Interna do Ar', value: '33.8°C', reference: '21.0°C a 23.0°C', status: 'critical' },
                { parameter: 'Frequência Respiratória das Aves', value: '190 rpm (Ofegação extrema)', reference: '25 a 35 rpm', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Em pleno colapso térmico com risco de morte em massa de milhares de aves por alcalose respiratória e hipertermia, qual é a intervenção imediata de ambiência?',
          decisionOptions: [
            {
              id: 'opt_dec_sp1_1',
              label: 'Desligar imediatamente as bombas de água do pad cooling + Acionar gerador e todos os exaustores reservas para atingir velocidade de vento > 2.8 m/s + Ajustar pressão estática',
              description: 'Cessar o aporte de umidade que impede a ofegação, elevar a velocidade do ar para ativar o resfriamento convectivo por vento (Wind Chill) e desobstruir os fluxos.',
              isOptimal: true,
              consequenceText: 'Excelente conduta de engenharia de ambiência! Desligar a bomba do pad cooling é vital: com umidade interna em 82%, mais água no ar sufoca a evaporação respiratória das aves. Ao acionar todos os exaustores e recuperar a velocidade do ar para 2.8 m/s, o efeito Wind Chill reduz imediatamente a sensação térmica para 28°C, resgatando as aves da alcalose respiratória e cessando a mortalidade.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Interrupção da umidificação e elevação da velocidade do vento para 2.8 m/s',
                mechanism: 'Remoção por convecção forçada da camada de ar limite retida na plumagem',
                effect: 'Queda de 5°C na sensação térmica e estabilização da frequência respiratória',
                clinicalMeaning: 'Prevenção de mortandade em massa e preservação do lote de abate'
              }
            },
            {
              id: 'opt_dec_sp1_2',
              label: 'Abrir todas as cortinas laterais do galpão Dark House e desligar todos os exaustores',
              description: 'Destruir a pressão negativa no momento mais quente do dia.',
              isOptimal: false,
              consequenceText: 'Catástrofe zootécnica! Abrir as cortinas em um dia de 37°C faz o ar externo escaldante e sem vento invadir o galpão, eliminando qualquer velocidade do ar. Em menos de 30 minutos, mais de 10.000 aves morreriam asfixiadas pelo calor.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Perda absoluta da pressão negativa e anulação da velocidade do vento',
                mechanism: 'Acúmulo térmico massivo com cessação de trocas de calor',
                effect: 'Hipertermia maligna generalizada e parada cardiorrespiratória',
                clinicalMeaning: 'Perda total do galpão comercial'
              }
            },
            {
              id: 'opt_dec_sp1_3',
              label: 'Molhar as aves diretamente por cima com mangueira de jardim com água morna',
              description: 'Jogar água sobre as penas das aves confinadas.',
              isOptimal: false,
              consequenceText: 'Erro primário! Molhar as penas de aves pesadas sem fluxo de vento intenso faz a plumagem encharcar e colar no corpo, criando uma capa que aprisiona o calor e aumenta a umidade relativa do ar para 100%, acelerando a morte por choque térmico.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Encharcamento de penas em ambiente saturado de vapor dágua',
                mechanism: 'Bloqueio total da termólise sensível e latente',
                effect: 'Pico hipertérmico terminal com convulsões e óbito',
                clinicalMeaning: 'Mortalidade explosiva'
              }
            }
          ],
          learningTakeaways: [
            'O efeito Wind Chill decorre da velocidade do ar (2.5 a 3.0 m/s), que retira a camada limite de ar quente entre as penas.',
            'Em umidade relativa elevada (> 75-80%), o resfriamento evaporativo (pad cooling) deve ser desligado para não saturar o ar.',
            'A alcalose respiratória aguda decorre da hiperventilação térmica com perda maciça de CO2 pulmonar.'
          ]
        }
      },
      {
        id: 'sec_sp_01_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Ambiência & Climatização de Precisão',
        exerciseId: 'ex_swine_poultry_01'
      }
    ]
  },
  {
    id: 'lesson_swine_poultry_02_biosecurity_all_in_all_out',
    moduleId: 'mod_swine_poultry',
    title: 'Zonas de Biosseguridade, Vazio Sanitário & Sistema All-In-All-Out',
    shortDescription: 'Bioexclusão, biocontenção, protocolos de desinfecção, vazio sanitário e controle da Salmonella em produção integrada.',
    estimatedMinutes: 20,
    order: 2,
    concepts: ['concept_swine_poultry_biosecurity_all_in_all_out'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_sp_02_th1',
        type: 'theory',
        title: 'As Três Linhas de Defesa da Biosseguridade & o Vazio Sanitário',
        contentMarkdown: `### Como Proteger 50.000 Animais Confinados em um Galpão

Em sistemas industriais de aves e suínos com altíssima densidade populacional, a introdução de uma única cepa bacteriana ou viral virulenta pode disseminar-se em poucas horas. A biosseguridade divide-se em:
1. **Bioexclusão (Defesa Externa):** Impedir que patógenos entrem na granja:
   * *Cercamento Duplo:* Isolamento do perímetro com tela antipássaros (malha ≤ 1 polegada) para impedir contato com aves silvestres portadoras de vírus respiratórios.
   * *Arco de Desinfecção:* Pulverização obrigatória de 100% dos caminhões de ração, maravalha e gás com desinfetante bactericida/virucida de amplo espectro (amônia quaternária + glutaraldeído).
2. **Biocontenção (Defesa Interna):** Impedir que patógenos presentes em um setor passem para os demais:
   * *Vestiário com Barreira Suja/Limpa:* Banho obrigatório com sabonete antisséptico na entrada, troca completa de roupas e uso de calçados exclusivos de cada galpão.
   * *Pedilúvios / Rodilúvios:* Desinfecção de calçados na soleira de cada galpão com troca diária da solução ativa.
3. **Manejo "Todos Dentro, Todos Fora" (All-In, All-Out):** Lotes com animais da mesma idade cronológica, alojados simultaneamente e despachados juntos para o frigorífico, impedindo o contato biológico entre gerações sucessivas.

---

### O Protocolo Canônico do Vazio Sanitário (10 a 14 Dias)

\`\`\`mermaid
flowchart TD
    A["Saída Completa do Lote de Frangos para o Abatedouro (Dia 0)"] --> B["Remoção Mecânica de Poeira, Crostas e Restos de Cama"]
    B --> C["Lavagem com Detergente Alcalino para Remoção de Biofilme"]
    C --> D["Desinfecção Química Virucida com Glutaraldeído + Amônia Quaternária"]
    D --> E["Flamejamento do Concreto com Lança-Chamas contra Oocistos de Eimeria"]
    E --> F["Período de Vazio Sanitário Hermético com Galpão Fechado por 14 Dias"]
    F --> G["Quebra Definitiva do Ciclo de Salmonella, Gumboro e Vírus Respiratórios"]
    G --> H["Alojamento Seguro de Novo Lote com Máximo Desempenho e Imunidade Hígida"]
\`\`\`

1. **Remoção Mecânica de Matéria Orgânica:** Varrição rigorosa de crostas de fezes e poeira acumulada em tubulações e exaustores. Nenhum desinfetante químico é eficaz sobre camadas de matéria orgânica.
2. **Lavagem com Detergente Alcalino:** Solubiliza gorduras e biofilmes bacterianos aderidos ao concreto e bebedouros.
3. **Desinfecção Química sob Alta Pressão:** Aplicação de desinfetante com tempo mínimo de contato de 30 a 60 minutos.
4. **Flamejamento do Concreto (Lança-Chamas):** O calor da chama destrói mecanicamente oocistos de *Eimeria* (coccidiose) e ovos de helmintos que possuem paredes lipídicas impermeáveis a desinfetantes químicos.
5. **Descanso Sanitário Hermético:** O galpão é mantido desocupado e fechado por no mínimo **10 a 14 dias**. A ausência de hospedeiros vivos promove a dessecação e morte dos patógenos residuais (quebra definitiva da cadeia epidemiológica).`
      },
      {
        id: 'sec_sp_02_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Granja São Bento (Biossegurança)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Gestão de Foco de Salmonelose em Galpão de Frangos de Corte',
          patient: {
            name: 'Lote 04 (Galpão 2)',
            species: 'Aves de Corte',
            breed: 'Cobb 500',
            age: '28 dias',
            weightKg: 1.4,
            habitatOrEnvironment: 'Galpão Dark House com pressão negativa em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 320,
            respiratoryRateRpm: 60,
            temperatureCelsius: 41.8,
            mucousMembranes: 'Crestas e barbelas pálidas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Mortalidade diária saltou de 0.05% para 0.8% ao dia nas últimas 48h. Aves amontoadas sob os comedouros, penas eriçadas, diarreia amarelada espumosa com empastamento da cloaca. O tratador admitiu ter permitido a entrada de caminhão de ração sem passar pelo arco de desinfecção há 5 dias e que o lote anterior teve vazio sanitário de apenas 4 dias.',
          exams: [
            {
              category: 'microbiology',
              title: 'Necrópsia Sistemática de Aves Mortas + PCR',
              findings: 'Fígado com hepatomegalia, coloração bronzeada e múltiplos focos miliares necróticos esbranquiçados ("necrose em céu estrelado"). Tiflite com cilindros caseosos cecais.',
              abnormalValues: [
                { parameter: 'Cultura de Ceco e Fígado', value: 'Isolamento de Salmonella enterica subsp. enterica', reference: 'Negativo', status: 'critical' },
                { parameter: 'Mortalidade Acumulada', value: '3.8%', reference: '< 1.5% ao lote', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Confirmada contaminação por Salmonella em aves industriais decorrente de falha de biosseguridade, qual é o protocolo mandatório?',
          decisionOptions: [
            {
              id: 'opt_dec_sp2_1',
              label: 'Notificação técnica à integradora + Acidificação da água de bebida (ácidos orgânicos) + Reforço total de barreiras + Vazio sanitário estendido para 15 dias pós-abate',
              description: 'Reduzir pH intestinal com ácidos orgânicos para suprimir proliferação bacteriana e planejar vazio sanitário estendido com desinfecção total pós-saída.',
              isOptimal: true,
              consequenceText: 'Excelente conduta técnica alinhada à segurança dos alimentos! O uso de ácidos orgânicos (fórmico e propiônico) na água baixa o pH do papo e moela, criando um ambiente hostil à Salmonella sem selecionar superbactérias com antibióticos de uso humano. O vazio estendido subsequente desinfeta o núcleo.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Acidificação da água com ácidos graxos de cadeia curta e auditoria de biosseguridade',
                mechanism: 'Desestabilização da homeostase do pH intracelular da Salmonella e bloqueio de fômites',
                effect: 'Redução da excreção fecal e contenção da disseminação no aviário',
                clinicalMeaning: 'Estabilização da mortalidade, prevenção de contaminação no abatedouro e conformidade sanitária'
              }
            },
            {
              id: 'opt_dec_sp2_2',
              label: 'Administrar Enrofloxacino na água de bebida de todo o plantel para mascarar os sintomas',
              description: 'Usar fluoroquinolona de amplo espectro preventivamente.',
              isOptimal: false,
              consequenceText: 'Infração sanitária gravíssima! O uso profilático de quinolonas em avicultura é estritamente proibido pelos órgãos reguladores mundiais devido ao risco intolerável de gerar Salmonella e Campylobacter resistentes em carne para consumo humano.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso irregular de antibióticos de importância crítica para medicina humana',
                mechanism: 'Pressão seletiva gerando resistência cruzada em bactérias zoonóticas',
                effect: 'Presença de resíduos na carcaça e embargo comercial internacional do lote',
                clinicalMeaning: 'Interdição da granja pelo Ministério da Agricultura e risco de surto em humanos'
              }
            },
            {
              id: 'opt_dec_sp2_3',
              label: 'Apenas retirar as aves mortas e encurtar o vazio sanitário para 2 dias para acelerar o faturamento',
              description: 'Reduzir o tempo de galpão vazio para alojar o próximo lote mais rápido.',
              isOptimal: false,
              consequenceText: 'Catástrofe de manejo! Um vazio sanitário de 2 dias garante que a cama e os bebedouros continuarão infectados com Salmonella viável, contaminando o lote seguinte já no primeiro dia de vida.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Supressão do tempo biológico de dessecação e desinfecção no vazio sanitário',
                mechanism: 'Persistência ambiental maciça de Salmonella protegida por matéria orgânica',
                effect: 'Contaminação precoce de pintinhos com sistema imune imaturo',
                clinicalMeaning: 'Mortalidade explosiva no lote subsequente e quebra sanitária da integração'
              }
            }
          ],
          learningTakeaways: [
            'O sistema "All-In, All-Out" combinado com vazio sanitário adequado (> 10-14 dias) é a fundação da avicultura moderna.',
            'O uso preventivo ou indiscriminado de antibióticos de importância médica humana é proibido na cadeia avícola.',
            'A acidificação da água com ácidos orgânicos é uma ferramenta padrão de biosseguridade entérica.'
          ]
        }
      },
      {
        id: 'sec_sp_02_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Biosseguridade & Sanidade Avícola',
        exerciseId: 'ex_swine_poultry_02'
      }
    ]
  },
  {
    id: 'lesson_swine_poultry_03_nutrition_feed_conversion',
    moduleId: 'mod_swine_poultry',
    title: 'Nutrição de Precisão, Conversão Alimentar & Saúde Podal',
    shortDescription: 'Conceito de proteína ideal, aminoácidos industriais sintéticos, fitase exógena e manejo de cama para prevenção de pododermatite.',
    estimatedMinutes: 20,
    order: 3,
    concepts: ['concept_swine_poultry_nutrition_feed_conversion'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_sp_03_th1',
        type: 'theory',
        title: 'O Conceito de Proteína Ideal, Enzimas Exógenas & a Dinâmica da Cama',
        contentMarkdown: `### O Conceito de Proteína Ideal em Monogástricos

Formular dietas industriais baseando-se apenas na Proteína Bruta (PB) total gera desperdício econômico e sobrecarga metabólica:
* **Gasto Energético com Excreção:** O excesso de nitrogênio proteico ingerido deve ser desaminado no fígado e excretado na forma de **ácido úrico pelas aves** e **ureia pelos suínos**, consumindo energia metabólica que deveria ser direcionada ao ganho de peso.
* **O Modelo da Proteína Ideal:** Baseia-se no atendimento exato das necessidades biológicas de cada aminoácido essencial em relação a um aminoácido referencial fixado em **100%: a L-Lisina Digestível Ileal Estandardizada (SID)**.
* **Relações de Aminoácidos Essenciais:**
  * *Metionina + Cistina:* ~72% a 75% da Lisina (primeiro aminoácido limitante em dietas à base de milho e soja para aves).
  * *Treonina:* ~65% a 67% da Lisina (essencial para a síntese da mucina protetora da barreira intestinal).
  * *Triptofano:* ~17% a 19% da Lisina.
* **Uso de Aminoácidos Sintéticos Industriais:** A suplementação de L-Lisina HCl, DL-Metionina e L-Treonina purificadas permite reduzir a Proteína Bruta da ração em 2 a 3 pontos percentuais, melhorando a conversão alimentar e reduzindo em até 25% a excreção de amônia no ambiente.

---

### Enzimas Exógenas: A Revolução da Fitase

Cerca de 65% a 75% do fósforo presente no milho e farelo de soja vegetal está aprisionado sob a forma de **Ácido Fítico (Fitato)**:
* O fitato é um potente fator antinutricional: é resistente às enzimas endógenas dos monogástricos e atua como quelante químico de cátions bivalentes ($Ca^{2+}$, $Zn^{2+}$, $Fe^{2+}$) e proteínas digestíveis.
* **Ação da Fitase Exógena:** Cliva as ligações éster-fosfato do anel mio-inositol, liberando fósforo orgânico diretamente assimilável pelo animal. Reduz a necessidade de adicionar fosfato bicálcico inorgânico (insumo caro) e diminui o descarte poluidor de fósforo nas excretas.

---

### Cama de Aviário & Pododermatite de Coxim Plantar (Footpad Dermatitis)

\`\`\`mermaid
flowchart TD
    A["Vazamento em Bebedouros Nipple ou Alta Umidade Relativa do Galpão"] --> B["Umidade da Cama de Aviário Ultrapassa 35% com Compactação"]
    B --> C["Bactérias Degradam o Ácido Úrico das Excretas em Amônia Livre (NH3)"]
    C --> D["Ação Cáustica da Amônia Alcalina Úmida sobre a Pele do Coxim Plantar"]
    D --> E["Erosão Epidérmica, Necrose por Contato e Pododermatite de Coxim (Grau 2/3)"]
    E --> F["Dor Locomotora, Relutância ao Comedouro e Piora da Conversão Alimentar"]
    F --> G["Condenação das Patas ('Paws') na Linha de Inspeção do Frigorífico SIF"]
\`\`\`

1. **A Faixa Crítica de Umidade:** A cama de maravalha deve ser mantida com **20% a 25% de umidade**. Quando ultrapassa **35%**, ela empasta e forma uma crosta plástica impermeável.
2. **Formação de Amônia Cáustica:** A microbiota do aviário decompõe o ácido úrico fecal em **amônia líquida e gasosa ($NH_3$)**. Sob pH alcalino e umidade alta, o contato contínuo queima a pele queratinizada das patas das aves.
3. **Pododermatite de Coxim Plantar:** Lesões necróticas marrom-escuras e úlceras profundas na almofada plantar.
4. **Impacto Econômico Internacional:** As patas de frango (*paws*) são um dos cortes de maior rentabilidade exportados pelo Brasil para a China e sudeste asiático. Lotes com lesões severas (Grau 2 e 3) sofrem condenação total no frigorífico pelo Serviço de Inspeção Federal (SIF), gerando prejuízos expressivos ao avicultor.`
      },
      {
        id: 'sec_sp_03_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Granja Ouro Verde (Nutrição e Pés)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Auditoria de Bem-Estar e Pododermatite de Coxim Plantar Pré-Abate',
          patient: {
            name: 'Lote 11 (Galpão 1)',
            species: 'Aves de Corte',
            breed: 'Ross 308',
            age: '35 dias',
            weightKg: 2.35,
            habitatOrEnvironment: 'Galpão Dark House com bebedouros nipple em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 340,
            respiratoryRateRpm: 32,
            temperatureCelsius: 41.6,
            mucousMembranes: 'Róseas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Na auditoria prévia ao abate, o fiscal identificou que 45% das aves amostradas apresentavam lesões ulceradas necróticas graves no coxim plantar (pododermatite grau 2 e 3). Na vistoria do galpão, a cama de maravalha estava empastada e com consistência barrenta sob a linha dos bebedouros nipple (umidade medida em 42%), exalando forte odor de amônia (> 28 ppm no nível dos pintos). As redutoras de pressão dos nipples estavam descalibradas com alta pressão de coluna de água.',
          exams: [
            {
              category: 'podologia_e_cama',
              title: 'Avaliação de Escores Podais e Umidade de Cama',
              findings: 'Inspeção zootécnica de patas e medição higrométrica da cama.',
              abnormalValues: [
                { parameter: 'Índice de Pododermatite Severa (Grau 2 e 3)', value: '45% das aves', reference: '< 10%', status: 'critical' },
                { parameter: 'Umidade da Cama de Maravalha', value: '42%', reference: '20% a 25%', status: 'critical' },
                { parameter: 'Pressão da Coluna de Água dos Nipples', value: '38 cm de coluna dágua (gotejamento)', reference: '20 a 25 cm', status: 'elevated' },
                { parameter: 'Amônia Aérea no Nível das Aves', value: '28 ppm', reference: '< 15 a 20 ppm', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Qual é a conduta corretiva técnica imediata e de médio prazo para cessar as condenações por pododermatite?',
          decisionOptions: [
            {
              id: 'opt_dec_sp3_1',
              label: 'Regular imediatamente a pressão dos nipples para cessar gotejamento + Adicionar maravalha seca e cal virgem nas áreas empastadas + Aumentar ventilação de renovação mínima para secagem',
              description: 'Eliminar a fonte contínua de vazamento de água, neutralizar e secar quimicamente a cama empastada e acelerar a remoção de amônia pela ventilação de túnel.',
              isOptimal: true,
              consequenceText: 'Excelente conduta zootécnica! A regulagem da pressão dos bebedouros nipple cessa o vazamento contínuo sobre a maravalha. A cal virgem associada à maravalha seca absorve a umidade e a ventilação mínima remove o vapor e os gases de amônia, interrompendo a agressão química sobre os coxins plantares.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Ajuste de pressão hidráulica, reposição de maravalha seca e aumento da taxa de renovação de ar',
                mechanism: 'Cessação do aporte hídrico excessivo e desidratação da camada superficial da cama',
                effect: 'Queda da umidade da cama para menos de 25% e redução da amônia para < 10 ppm',
                clinicalMeaning: 'Cessação do avanço das lesões podais e recuperação dos índices zootécnicos do lote'
              }
            },
            {
              id: 'opt_dec_sp3_2',
              label: 'Cortar as patas de todas as aves antes do carregamento para que o fiscal não veja as úlceras',
              description: 'Prática criminosa de ocultação de defeitos com mutilação de aves vivas.',
              isOptimal: false,
              consequenceText: 'Infração inaceitável e ato de crueldade hedionda contra os animais! Mutilação pré-abate é crime federal e causa choque hipovolêmico e morte maciça.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Mutilação deliberada de animais vivos',
                mechanism: 'Hemorragia maciça, choque hipovolêmico e dor extrema',
                effect: 'Morte agonizante e processo criminal',
                clinicalMeaning: 'Prisão em flagrante dos infratores'
              }
            },
            {
              id: 'opt_dec_sp3_3',
              label: 'Fechar os exaustores e jogar água com sal no chão para tentar dissolver a crosta',
              description: 'Aumentar a umidade e suspender a ventilação.',
              isOptimal: false,
              consequenceText: 'Conduta desastrosa! Jogar mais água na cama transforma o galpão em um lamaçal cáustico de amônia e o fechamento dos exaustores gera asfixia por calor e gases tóxicos.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Aporte hídrico adicional com sal somado à asfixia por retenção de gases',
                mechanism: 'Piora da toxicidade da amônia e edema pulmonar',
                effect: 'Necrose podal generalizada e mortalidade por estresse térmico e amônia',
                clinicalMeaning: 'Condenação de 100% das patas e embargo do lote'
              }
            }
          ],
          learningTakeaways: [
            'A umidade da cama acima de 35% acelera a degradação de ácido úrico em amônia cáustica.',
            'A pododermatite de coxim plantar (footpad dermatitis) acarreta perdas expressivas por condenação de patas de exportação pelo SIF.',
            'O conceito de Proteína Ideal (Lisina Digestível como 100%) permite reduzir a proteína bruta da dieta e a excreção de nitrogênio no ambiente.'
          ]
        }
      },
      {
        id: 'sec_sp_03_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Nutrição de Precisão & Saúde Podal',
        exerciseId: 'ex_swine_poultry_03'
      }
    ]
  },
  {
    id: 'lesson_swine_poultry_04_mass_vaccination_immunology',
    moduleId: 'mod_swine_poultry',
    title: 'Vacinação em Massa & Imunologia de Populações',
    shortDescription: 'Biotecnologia in ovo aos 18 dias, vacinação em massa via água de bebida e spray, monitoramento por ELISA e Coeficiente de Variação.',
    estimatedMinutes: 20,
    order: 4,
    concepts: ['concept_swine_poultry_mass_vaccination_immunology'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_sp_04_th1',
        type: 'theory',
        title: 'Imunização Populacional, Vacinação In Ovo & Métodos Massivos',
        contentMarkdown: `### O Desafio da Imunização em Grande Escala

Em plantéis com centenas de milhares de indivíduos, a vacinação individual com seringa é zootecnicamente inviável. A sanidade depende de biotecnologias de **imunização em massa**:
1. **Vacinação In Ovo (Incubatórios Comerciais):**
   * Realizada aos **18 a 19 dias de incubação embrionária**, momento em que os ovos são transferidos das incubadoras para as bandejas de nascedouro.
   * Máquinas automatizadas multipontos injetam a vacina diretamente no líquido amniótico ou músculo embrionário através da câmara de ar.
   * Padronização de 100% da dose, zero estresse pós-eclosão e proteção imune precoce contra a **Doença de Marek** e a **Doença de Gumboro (IBDV)** com vacinas vetoradas recombinantes (HVT).
2. **Vacinação Via Água de Bebida:**
   * Utilizada para vacinas vivas atenuadas entéricas e respiratórias (Gumboro, Bronquite Infecciosa, Encefalomielite).
   * O cloro residual da água encanada inativa vírus vacinais vivos em minutos! É obrigatório neutralizar o cloro com **leite em pó desnatado (2 a 3 g/L)** ou neutralizadores comerciais 20 minutos antes de dissolver a vacina.
   * Adiciona-se **corante azul alimentício**: após 1 hora da abertura dos bebedouros, examinam-se 100 pintos para checar a presença de língua e papo corados de azul (meta: **> 95% do lote vacinado**).
3. **Vacinação Via Spray / Aerossolização:**
   * Método de eleição para o trato respiratório (Bronquite Infecciosa e Newcastle).
   * *Gota Grossa (80 a 120 micras):* Deposita-se nas vias respiratórias superiores sem penetrar nos alvéolos profundos, evitando reações vacinais respiratórias severas em pintinhos de 1 dia.

---

### Monitoramento Sorológico & o Coeficiente de Variação (CV)

A eficiência da vacinação populacional não pode ser avaliada apenas pela média aritmética do título de anticorpos por ELISA:

\`\`\`mermaid
flowchart TD
    A["Vacinação em Massa Via Água de Bebida aos 14 Dias de Vida"] --> B["Coleta de Soro aos 28 Dias de 25 Aves para ELISA de Gumboro"]
    B --> C["Cálculo do Título Médio e do Coeficiente de Variação: CV = (DP / Média) * 100"]
    C --> D["CV < 35%: Distribuição Homogênea com 100% de Aves Imunizadas e Protegidas"]
    C --> E["CV > 60%: Desuniformidade Severa com Aves Soronegativas (Falha de Aplicação/Cloro)"]
    E --> F["Subpopulação Desprotegida Vulnerável a Cepas Virulentas de Campo e Surto"]
\`\`\`

* **O Conceito Estatístico:** CV (%) = (Desvio Padrão / Título Médio) × 100.
* **Interpretação:**
  * *CV < 30% a 35%:* Excelente uniformidade. Todas as aves consumiram a vacina e desenvolveram títulos humorais semelhantes.
  * *CV > 60%:* Desuniformidade crítica. Metade do lote recebeu dose inadequada ou água clorada inativadora, permanecendo com título zero (aves suscetíveis a surtos).`
      },
      {
        id: 'sec_sp_04_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Granja Progresso (Auditoria Sorológica)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Auditoria Sorológica e Investigação de Desuniformidade Imune pós-Vacinação',
          patient: {
            name: 'Lote 12 (Recria)',
            species: 'Aves de Postura Comercial',
            breed: 'Hy-Line Brown',
            age: '10 semanas de vida',
            weightKg: 0.95,
            habitatOrEnvironment: 'Galpão de recria automatizado em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 310,
            respiratoryRateRpm: 30,
            temperatureCelsius: 41.5,
            mucousMembranes: 'Róseas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Auditoria sorológica de rotina aos 70 dias para verificar a imunização contra o vírus de Gumboro (IBDV). O lote havia sido vacinado via água de bebida aos 14 dias de idade. O produtor informou que utilizou água da rede clorada automaticamente e que a vacina demorou mais de 5 horas para ser consumida sob calor de 32°C.',
          exams: [
            {
              category: 'sorologia_elisa',
              title: 'Painel Sorológico ELISA para IBDV (Gumboro)',
              findings: 'Amostragem de 25 aves para cálculo de título médio e dispersão.',
              abnormalValues: [
                { parameter: 'Título Médio de Anticorpos ELISA', value: '2.840', reference: '3.000 a 5.000', status: 'elevated' },
                { parameter: 'Desvio Padrão dos Títulos', value: '2.210', reference: '< 800', status: 'critical' },
                { parameter: 'Coeficiente de Variação (CV)', value: '77.8% (Desuniformidade Extrema)', reference: '< 35%', status: 'critical' },
                { parameter: 'Aves Soronegativas no Lote', value: '36% das amostras com título zero', reference: '0% de soronegativas', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com um CV alarmante de 77.8% e mais de 1/3 do lote soronegativo para Gumboro devido ao cloro e calor, qual é a conduta corretiva?',
          decisionOptions: [
            {
              id: 'opt_dec_sp4_1',
              label: 'Revacinação imediata do lote com neutralização prévia do cloro (leite em pó desnatado ou neutralizador comercial) + Corante azul indicador + Consumo rápido em 1.5 a 2 horas',
              description: 'Neutralizar o cloro ativo para proteger a vacina viva, gerar sede prévia curta e usar corante azul para auditar ingestão superior a 95% do lote.',
              isOptimal: true,
              consequenceText: 'Excelente conduta técnica em imunologia de populações! A presença de cloro livre na água de bebida destrói vírus vacinais atenuados em minutos, explicando por que 36% das aves ficaram desprotegidas. A neutralização da água, o jejum hídrico prévio curto e o corante indicador asseguram que 100% das aves consumam a vacina viável dentro da janela ideal de 2 horas.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Neutralização do cloro, adição de corante e sincronização do consumo vacinal',
                mechanism: 'Preservação da viabilidade viral da vacina e estímulo uniforme da bursa de Fabricius',
                effect: 'Soroconversão de 100% do plantel e queda do CV para menos de 30%',
                clinicalMeaning: 'Proteção sólida e homogênea do lote contra desafios virulentos de Gumboro em campo'
              }
            },
            {
              id: 'opt_dec_sp4_2',
              label: 'Ignorar a sorologia porque a média numérica é aceitável e aplicar antibiótico no cocho',
              description: 'Confiar na média aritmética sem analisar a dispersão e usar antibiótico contra vírus.',
              isOptimal: false,
              consequenceText: 'Erro primário grave! O título médio é uma armadilha estatística: esconde que 36% das aves têm título zero e que qualquer cepa de campo de Gumboro destruirá a bursa desses animais. Antibiótico não tem ação contra vírus.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Negligência do coeficiente de variação e uso desnecessário de antimicrobiano',
                mechanism: 'Manutenção de uma subpopulação virgem de imunidade dentro do mesmo galpão',
                effect: 'Surtos explosivos de Gumboro de campo com imunossupressão severa',
                clinicalMeaning: 'Mortalidade tardia e perda da viabilidade do lote de postura'
              }
            },
            {
              id: 'opt_dec_sp4_3',
              label: 'Aumentar a cloração da água para 50 ppm durante a vacinação para limpar os vírus',
              description: 'Adicionar desinfetante potente no momento da vacina viva.',
              isOptimal: false,
              consequenceText: 'Erro absurdo e contraindicado! O cloro a 50 ppm esteriliza a água e inativa 100% do vírus vacinal vivo instantaneamente.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Cloração excessiva em momento de aplicação de imunógeno atenuado',
                mechanism: 'Inativação fotoquímica imediata dos vírus vacinais vivos',
                effect: 'Zero imunização e toxicidade química nas aves',
                clinicalMeaning: 'Fracasso vacinal absoluto'
              }
            }
          ],
          learningTakeaways: [
            'O cloro residual da água inativa vacinas virais vivas atenuadas em instantes; a neutralização com leite em pó desnatado ou protetores é obrigatória.',
            'O Coeficiente de Variação (CV < 35%) é o indicador mais confiável da homogeneidade da vacinação em massa.',
            'A vacinação in ovo aos 18-19 dias confere proteção precoce e uniforme antes mesmo da eclosão do pintinho.'
          ]
        }
      },
      {
        id: 'sec_sp_04_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Vacinação em Massa & Imunologia Populacional',
        exerciseId: 'ex_swine_poultry_04'
      }
    ]
  },
  {
    id: 'lesson_swine_poultry_05_notifiable_diseases',
    moduleId: 'mod_swine_poultry',
    title: 'Patologias Notificáveis: Circovirose, IBV, IAAP & Newcastle',
    shortDescription: 'Circovirose suína (PCV-2 / PMWS), Bronquite Infecciosa Aviária (IBV) e diagnóstico diferencial de emergência entre Influenza Aviária e Doença de Newcastle.',
    estimatedMinutes: 24,
    order: 5,
    concepts: ['concept_swine_poultry_pathology_notifiable_diseases'],
    xpReward: 160,
    sections: [
      {
        id: 'sec_sp_05_th1',
        type: 'theory',
        title: 'Patologias Sistêmicas Industriais, Circovirose & o Protocolo de Emergência para IAAP',
        contentMarkdown: `### Circovirose Suína (PCV-2) & a Síndrome do Definhamento (PMWS)

O Circovírus Suíno tipo 2 (PCV-2) é um vírus de DNA fita simples circular sem envelope, de extrema resistência aos desinfetantes comuns:
* **Fisiopatologia & Tropismo Monocítico:** O vírus replica-se em monócitos e macrófagos, provocando **depleção linfocitária generalizada** nos linfonodos, tonsilas e baço, substituindo a arquitetura folicular por infiltração de histiócitos.
* **Achado Histopatológico Clássico:** Corpúsculos de inclusão intracitoplasmáticos anfofílicos/basofílicos em macrófagos de linfonodos mesentéricos e inguinais aumentados.
* **Manifestação Clínica:** Leitões na fase de creche e terminação (6 a 16 semanas) apresentam palidez de pele, perda de peso progressiva ("leitões refugos"), dispneia e aumento bilateral palpável dos linfonodos inguinais superficiais.
* **Prevenção Padrão-Ouro:** Vacinação universal de leitões aos 21 dias com vacinas de subunidade baseadas na proteína Capsídeo (ORF2) expressa em baculovírus.

---

### Bronquite Infecciosa das Galinhas (IBV)

Causada por um Gammacoronavirus de RNA envelopado:
* **Tropismo Múltiplo:** Traqueíte com exsudato catarral, nefrite com dilatação de túbulos por depósitos de uratos esbranquiçados, e infecção do oviduto em frangas jovens com formação de cistos ovarianos ("falsa poedeira"), além de ovos com casca deformada, ondulada e clara aquosa.

---

### Diagnóstico Diferencial de Emergência Sanitária: IAAP vs. Newcastle

A **Influenza Aviária de Alta Patogenicidade (IAAP - vírus Influenza A, subtipos H5 e H7)** e a **Doença de Newcastle Velogênica (Paramyxovirus Aviário tipo 1 - APMV-1)** representam as maiores ameaças sanitárias mundiais à avicultura comercial:

| Parâmetro | Influenza Aviária de Alta Patogenicidade (IAAP) | Doença de Newcastle (Velogênica Viscerotrópica) |
| :--- | :--- | :--- |
| **Agente Etiológico** | Orthomyxoviridae (Influenza A - H5N1, H5N2, H7) | Paramyxoviridae (Orthoavulavirus 1 / APMV-1) |
| **Mortalidade** | **Extremamente alta (90 a 100%) em 24 a 48 horas** | Muito alta (70 a 100%) em 48 a 72 horas |
| **Sinais Clínicos** | Cianose intensa de crista e barbelas, edema severo de cabeça e pescoço ("cabeça inchada"), petéquias nas pernas | Sinais respiratórios agudos somados a **sinais nervosos (torcicolo, opistótono, paresia de asas e pernas)** |
| **Lesões de Necropsia** | Hemorragias petequiais no proventrículo, epicárdio, serosas e subcutâneo; edema pulmonar | **Úlceras e hemorragias necróticas em botoeiras** no proventrículo, cecos e placas de Peyer |
| **Impacto Sanitário** | **Notificação compulsória IMEDIATA ao MAPA/OIE; zoonose potencial** | Notificação compulsória IMEDIATA; menor potencial zoonótico |

\`\`\`mermaid
flowchart TD
    A["Mortalidade Fulminante Súbita (> 50-80% em 24h) com Cianose de Crista e Edema Cefálico"] --> B["Suspeita Crítica de Emergência Sanitária Nacional: IAAP vs Newcastle"]
    B --> C["Ação Imediata: INTERDIÇÃO TOTAL DO NÚCLEO E PROIBIÇÃO DE SAÍDA DE AVES/CAMINHÕES"]
    C --> D["PROIBIDO ABRIR CARCAÇAS OU FAZER NECROPSIA DE CAMPO (Evitar Disseminação por Aerossol)"]
    D --> E["Notificação Obrigatória IMEDIATA ao Serviço Veterinário Oficial (SVO / MAPA / CDA-SP)"]
    E --> F["Equipe Oficial em Paramentação de Biossegurança Nível 3 Coleta Swabs de Traqueia e Cloaca"]
    F --> G["Diagnóstico Molecular por RT-qPCR em Laboratório Federal de Referência (LFDA)"]
    G --> H["Confirmação Positiva: Sacrifício Sanitário do Raio de Foco (3 km) e Vigilância em 10 km"]
\`\`\`

> ⚠️ Protocolo Legal Mandatório de Biossegurança:
> Ao se deparar com um galpão comercial apresentando mortalidade explosiva com cianose de cristas, barbelas ou torcicolo, o médico veterinário **NUNCA DEVE REALIZAR NECROPSIA OU ABRIR AVES NO LOCAL**. O desprendimento de penas e secreções traqueais contendo vírions de IAAP em aerossóis pode contaminar outros núcleos e expor trabalhadores ao risco zoonótico. A única conduta permitida por lei é **interditar o trânsito da propriedade e notificar imediatamente o Serviço Veterinário Oficial (MAPA ou Defesa Agropecuária Estadual)** para colheita oficial para RT-qPCR no LFDA.`
      },
      {
        id: 'sec_sp_05_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Sítio Primavera (Investigação de Foco)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Atendimento de Emergência Sanitária de Alta Mortalidade em Aves',
          patient: {
            name: 'Granja Matriz Sul (Galpão 3)',
            species: 'Aves de Produção Comercial',
            breed: 'Lohmann Selected Leghorn',
            age: '44 semanas',
            weightKg: 1.7,
            habitatOrEnvironment: 'Galpão de postura automatizado próximo a represa com aves migratórias em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 0,
            respiratoryRateRpm: 0,
            temperatureCelsius: 0,
            mucousMembranes: 'Cianóticas e arroxeadas',
            capillaryRefillTimeSec: 0
          },
          anamnesis: 'Às 06h da manhã, o tratador encontrou mais de 1.800 aves mortas subitamente de um total de 20.000 galinhas no galpão 3 (mortalidade de 9% nas primeiras horas da manhã, subindo para 35% ao meio-dia). As aves sobreviventes apresentam prostração comatosa extrema, cabeça inchada com edema subcutâneo, cristas e barbelas roxo-escuras (cianose severa) e sufusões hemorrágicas nos tarsos e patas.',
          exams: [
            {
              category: 'clinico_epidemiologico',
              title: 'Inspeção Sanitária Externa & Avaliação de Risco',
              findings: 'Constatação de quadro agudo compatível com Síndrome Respiratória e Nervosa das Aves.',
              abnormalValues: [
                { parameter: 'Mortalidade em 12 horas', value: '35% do plantel e evoluindo', reference: '< 0.05% ao dia', status: 'critical' },
                { parameter: 'Cristas e Barbelas', value: 'Cianose intensa, edema gelatinoso de face e bico', reference: 'Vermelhas brilhantes sem edema', status: 'critical' },
                { parameter: 'Hemorragias Cutâneas', value: 'Petéquias e sufusões ao longo da canela e pernas', reference: 'Escamas dérmicas íntegras', status: 'critical' },
                { parameter: 'Histórico de Contato', value: 'Patos silvestres migratórios avistados na represa vizinha há 3 dias', reference: 'Isolamento total de avifauna silvestre', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Diante desse quadro hiperagudo com alta letalidade sugestivo de Influenza Aviária de Alta Patogenicidade (IAAP) ou Newcastle, qual é a conduta mandante obrigatória do médico veterinário?',
          decisionOptions: [
            {
              id: 'opt_dec_sp5_1',
              label: 'Não abrir carcaças nem necropsiar + Interditar imediatamente o trânsito da granja + Notificar com urgência o Serviço Veterinário Oficial (CDA-SP / MAPA)',
              description: 'Evitar aerolização do vírus patogênico ou zoonótico, bloquear a saída de veículos/aves e aguardar a chegada dos auditores fiscais oficiais para colheita diagnóstica e medidas de contenção.',
              isOptimal: true,
              consequenceText: 'Conduta impecável e exemplar de Defesa Sanitária Animal! Abrir carcaças no galpão dispersaria trilhões de partículas virais de IAAP por aerossol e pelas penas, disseminando a praga pelo vento e expondo trabalhadores a risco de infecção respiratória zoonótica grave. A interdição e notificação imediata ao MAPA aciona o Plano de Contingência Nacional, salvaguardando a saúde pública e o patrimônio da avicultura brasileira.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Interdição rigorosa, não violação de carcaças e notificação imediata ao SVO',
                mechanism: 'Bloqueio da emissão de aerossóis infectantes e contenção perimetral no foco',
                effect: 'Mobilização de biossegurança de nível 3 para coleta oficial de swabs traqueais para PCR',
                clinicalMeaning: 'Prevenção de disseminação geográfica da catástrofe sanitária e preservação do status sanitário do país'
              }
            },
            {
              id: 'opt_dec_sp5_2',
              label: 'Abrir 50 aves mortas no meio do galpão com tesoura de jardinagem para olhar o coração e tentar vender as aves restantes para o açougue da cidade',
              description: 'Realizar necropsia improvisada sem paramentação e comercializar clandestinamente aves de foco.',
              isOptimal: false,
              consequenceText: 'Crime contra a saúde pública e contra a economia nacional! A necropsia improvisada sem pressão negativa espalha vírus por quilômetros via aerossol, e a venda clandestina de aves infectadas dispersa um patógeno letal e potencialmente zoonótico para a cadeia alimentar humana.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Dispersão criminosa de patógeno exótico de alta patogenicidade',
                mechanism: 'Aerolização massiva de vírions viáveis e introdução na cadeia alimentar',
                effect: 'Disseminação da doença por todo o município com contaminação humana',
                clinicalMeaning: 'Embargo sanitário internacional imediato contra o Brasil e prisão dos responsáveis'
              }
            },
            {
              id: 'opt_dec_sp5_3',
              label: 'Prescrever tilosina e dipirona na água para tentar baixar a febre do lote e aguardar 10 dias',
              description: 'Tentar tratar clinicamente uma suspeita de emergência viral notificável.',
              isOptimal: false,
              consequenceText: 'Erro médico imperdoável! Nenhuma medicação antibacteriana tem efeito sobre IAAP ou Newcastle. O atraso na notificação causará 100% de mortalidade no plantel e dispersão descontrolada para granjas vizinhas.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Tentativa de tratamento empírico e omissão de notificação sanitária oficial',
                mechanism: 'Proliferação descontrolada do vírus pantrópico velogênico',
                effect: 'Morte de 100% do rebanho em 48 horas e contaminação de núcleos vizinhos',
                clinicalMeaning: 'Destruição do polo avícola regional por negligência técnica'
              }
            }
          ],
          learningTakeaways: [
            'Suspeita de IAAP ou Doença de Newcastle exige NÃO ABRIR carcaças e NOTIFICAR imediatamente o MAPA.',
            'A cianose de crista e barbelas com edema facial e mortalidade explosiva é a apresentação cardinal de emergência sanitária avícola.',
            'A Circovirose Suína (PCV-2) caracteriza-se por definhamento progressivo com depleção linfocitária nos linfonodos inguinais em leitões de creche/terminação.'
          ]
        }
      },
      {
        id: 'sec_sp_05_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Patologias Notificáveis & Emergência Sanitária',
        exerciseId: 'ex_swine_poultry_05'
      }
    ]
  }
];
// ==========================================
// 5. CAPRINOCULTURA & OVINOCULTURA
// ==========================================
export const SMALL_RUMINANTS_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_small_rum_01',
    conceptId: 'concept_small_ruminants_grazing_facilities',
    type: 'multiple_choice',
    prompt: 'Qual é a diferença etológica e alimentar crucial entre ovinos e caprinos em pastoreio, e como ela determina o risco de parasitismo por Haemonchus contortus e o dimensionamento de instalações?',
    options: [
      {
        id: 'opt_sr1_1',
        text: 'Ovinos são pastadores de estrato baixo (rente ao solo), ingerindo a forragem a menos de 5-10 cm do chão onde se concentram 80% das larvas L3 de Haemonchus; caprinos são ramoneadores (browsers) que preferem folhas e brotos aéreos, necessitando de cochos suspensos a 40-50 cm do solo e cercas teladas para conter saltos',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Aves e ruminantes possuem comportamentos distintos. O lábio leporino móvel do ovino permite pastejo rente à superfície do solo, a zona de máxima densidade de larvas infectantes L3. Já os caprinos evoluíram ramoneando em postura bípede sobre arbustos e não possuem boa imunidade para pastejo rasteiro contaminado. Os cochos elevados evitam contaminação fecal/urinária por oocistos de Eimeria e larvas.'
      },
      {
        id: 'opt_sr1_2',
        text: 'Ovinos alimentam-se exclusivamente de raízes subterrâneas, enquanto caprinos comem apenas carne e insetos voadores',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Ambos são herbívoros ruminantes estritos; ovinos pastam gramíneas e caprinos ramoneiam forragens arbustivas.'
      },
      {
        id: 'opt_sr1_3',
        text: 'Caprinos não têm boca e absorvem nutrientes pelos cascos ao caminhar na lama',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Caprinos são mamíferos ruminantes com anatomia digestiva poligástrica completa.'
      },
      {
        id: 'opt_sr1_4',
        text: 'Ovinos devem ser criados em gaiolas suspensas no teto para evitar que pulem cercas de 3 metros',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Ovinos são animais gregários de chão mantidos em pastagens ou piquetes; quem possui habilidade notável de salto e escalada são os caprinos.'
      }
    ]
  },
  {
    id: 'ex_small_rum_02',
    conceptId: 'concept_small_ruminants_toxemia_pasture',
    type: 'multiple_choice',
    prompt: 'Uma ovelha Dorper no último mês de gestação (carregando fetos gêmeos) apresenta isolamento, cegueira aparente, ranger de dentes, tremores e decúbito, com cetonúria intensa (4+). Qual é a fisiopatologia e o protocolo emergencial de resgate?',
    options: [
      {
        id: 'opt_sr2_1',
        text: 'Toxemia da Prenhez Ovina; causada pela demanda fetal massiva de glicose (> 70%) somada à compressão física ruminal pelo útero duplo, gerando lipólise excessiva e encefalopatia cetonêmica; o tratamento exige propilenoglicol oral, solução de glicose IV e indução de parto ou cesariana',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! No terço final, os fetos ovinos ganham mais de 70% do peso corporal, esgotando a glicose materna. A compressão ruminal reduz o consumo de forragem em até 30%. A hipoglicemia severa desencadeia lipólise em massa, esteatose hepática e acúmulo de Beta-Hidroxibutirato (BHB > 3.0 mmol/L) neurotóxico. O resgate exige precursores glicogênicos e interrupção da gestação para salvar a mãe.'
      },
      {
        id: 'opt_sr2_2',
        text: 'Febre aftosa hiperaguda com necessidade imediata de banho de água fria e vacinação imediata',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Febre aftosa é uma doença vesicular viral de notificação obrigatória que causa vesículas na cavidade oral e cascos, sem correlação fisiopatológica com gestações gemelares.'
      },
      {
        id: 'opt_sr2_3',
        text: 'Toxinfecção alimentar por excesso de sal mineral com hipernatremia pura',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O quadro de cegueira cortical com cetonúria 4+ em ovelha no periparto é o arquétipo clássico da Toxemia da Prenhez.'
      },
      {
        id: 'opt_sr2_4',
        text: 'Pneumonia aspirativa que deve ser tratada exclusivamente com vermífugo em pasta',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Trata-se de um colapso metabólico primário do metabolismo glicídico e lipídico materno.'
      }
    ]
  },
  {
    id: 'ex_small_rum_03',
    conceptId: 'concept_small_ruminants_caseous_lymphadenitis',
    type: 'multiple_choice',
    prompt: 'Em relação à Linfadenite Caseosa ("Mal do Caroço" / Corynebacterium pseudotuberculosis) em caprinos e ovinos, qual é a lesão patognomônica nos linfonodos e qual a conduta sanitária correta diante de um abscesso maduro?',
    options: [
      {
        id: 'opt_sr3_1',
        text: 'Abscesso encapsulado com pus caseoso espesso inodoro disposto em camadas concêntricas ("casca de cebola"); a drenagem deve ser cirúrgica e asséptica em local lavável, recolhendo e queimando o pus, com cauterização capsular com iodo a 10% para não contaminar o pasto',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Corynebacterium pseudotuberculosis é uma bactéria intracelular facultativa rica em lipídios de parede e exotoxina fosfolipase D. Produz piogranulomas concêntricos crônicos. Drenar o abscesso no chão do curral espalha bilhões de bactérias que sobrevivem por meses no solo, perpetuando o foco no rebanho.'
      },
      {
        id: 'opt_sr3_2',
        text: 'Nódulos cheios de gás inflamável que devem ser explodidos com isqueiro no meio do rebanho',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e absurdo. O conteúdo do abscesso é caseoso e pastoso, e qualquer incisão deve ser feita sob rigorosa contenção biológica.'
      },
      {
        id: 'opt_sr3_3',
        text: 'Lesão purulenta líquida com odor fétido de peixe podre que desaparece espontaneamente com banho de chuva',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O pus da linfadenite caseosa é espesso, firme e inodoro, e a cápsula fibrosa espessa impede cura espontânea.'
      },
      {
        id: 'opt_sr3_4',
        text: 'Trata-se de um tumor benigno hereditário que melhora aumentando o volumoso no cocho',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. É uma afecção bacteriana infecciosa e altamente contagiosa causada por Corynebacterium pseudotuberculosis.'
      }
    ]
  },
  {
    id: 'ex_small_rum_04',
    conceptId: 'concept_small_ruminants_infectious_footrot',
    type: 'multiple_choice',
    prompt: 'Qual é o mecanismo microbiológico de sinergismo bacteriano responsável pela Pododermatite Infecciosa Ovina (Footrot) e qual o protocolo padrão de pedilúvio curativo/preventivo?',
    options: [
      {
        id: 'opt_sr4_1',
        text: 'A maceração pela umidade permite invasão inicial por Fusobacterium necrophorum (dermatite interdigital/scald), que abre caminho para Dichelobacter nodosus penetrar e secretar proteases ceratolíticas potentes que digerem a queratina e descolam a sola com odor fétido; o manejo exige pedilúvio de Sulfato de Zinco a 10% por 10-15 minutos e casqueamento',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! F. necrophorum causa necrose epidérmica superficial que fornece o microambiente anaeróbio ideal para D. nodosus proliferar e produzir elastases que descolam o estojo córneo. O sulfato de zinco a 10% com tempo de contato de 10-15 minutos atua profundamente na queratina, esterilizando a lesão sem queimar o tecido como o formol.'
      },
      {
        id: 'opt_sr4_2',
        text: 'A infecção decorre de vírus transmitidos por carrapatos que dissolvem o osso fêmur dos ovinos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O footrot é uma doença estritamente bacteriana e podal causada pelo sinergismo entre F. necrophorum e D. nodosus.'
      },
      {
        id: 'opt_sr4_3',
        text: 'O casqueamento radical deve amputar os dois dedos do casco da ovelha para que ela ande sobre a quartela',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O casqueamento deve ser apenas curativo, removendo o estojo córneo descolado e necrótico para expor as bactérias ao oxigênio e ao pedilúvio.'
      },
      {
        id: 'opt_sr4_4',
        text: 'O footrot cura-se sozinho em dias de chuva torrencial mantendo as ovelhas em atoleiros de lama',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Ambientes encharcados e lama são exatamente os fatores ambientais desencadeantes e propagadores primários da doença.'
      }
    ]
  },
  {
    id: 'ex_small_rum_05',
    conceptId: 'concept_small_ruminants_body_score_carcass',
    type: 'multiple_choice',
    prompt: 'Por que o Escore de Condição Corporal (ECC) de ovinos deve ser avaliado por palpação tátil das vértebras lombares e não apenas visualmente, e qual o risco frigorífico de abater cordeiros desprovidos de gordura de acabamento (cold shortening)?',
    options: [
      {
        id: 'opt_sr5_1',
        text: 'A lã esconde a magreza do animal, exigindo palpação dos processos espinhosos e transversos lombares (L1-L6); carcaças magras desprovidas de 2 a 4 mm de gordura subcutânea sofrem resfriamento rápido na câmara fria com contratura muscular irreversível (cold shortening), tornando a carne dura e sem maciez',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A lã impede a avaliação visual da musculatura, tornando a palpação lombar do músculo Longissimus dorsi e dos processos vertebrais indispensável (escala 1 a 5). No frigorífico, carcaças magras resfriam muito rápido antes de atingir o pH post-mortem de 5.5-5.8, gerando o fenômeno de "cold shortening" (encurtamento pelo frio com endurecimento irreversível da carne).'
      },
      {
        id: 'opt_sr5_2',
        text: 'A lã reflete raios ultravioleta que queimam os olhos do veterinário se ele olhar para o lombo',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A inspeção visual falha porque a cobertura de velo mascara a atrofia muscular e a perda de gordura.'
      },
      {
        id: 'opt_sr5_3',
        text: 'Carcaças magras são preferidas pelos frigoríficos porque viram presunto de peru instantaneamente',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Carcaças sem acabamento de gordura perdem peso por dessecação na câmara e sofrem cold shortening com carne dura.'
      },
      {
        id: 'opt_sr5_4',
        text: 'O ECC é medido contando o número de dentes molares que o cordeiro perdeu durante a tosquia',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O ECC avalia a reserva energética corporal (gordura e músculo) e não a cronologia dentária.'
      }
    ]
  }
];

export const SMALL_RUMINANTS_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_small_rum_01_pregnancy_toxemia',
    moduleId: 'mod_small_ruminants',
    title: 'Toxemia da Prenhez Ovina & Metabolismo de Gestação Gemelar',
    shortDescription: 'Metabolismo da gestação múltipla em ovelhas e cabras, compressão física ruminal, cetose materna e terapia intensiva.',
    estimatedMinutes: 20,
    order: 1,
    concepts: ['concept_small_ruminants_toxemia_pasture'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_sr_01_th1',
        type: 'theory',
        title: 'A Batalha Energética no Final da Gestação Ovina & a Encefalopatia Cetonêmica',
        contentMarkdown: `### Por que as Ovelhas com Gêmeos são as Primeiras a Sucumbir?

Nas últimas 4 a 6 semanas de gestação, os fetos ovinos ganham **mais de 70% do seu peso final de nascimento**. Isso cria uma armadilha fisiológica dramática na ovelha multípara:
* **Demanda Inflexível por Glicose:** O tecido fetal não realiza gliconeogênese eficiente; os fetos consomem entre **30 a 40 gramas de glicose por dia por concepto** diretamente do sangue materno via transportadores GLUT-1 e GLUT-3 na placenta.
* **Capacidade Ruminal Esmagada:** O útero gravídico volumoso (contendo 2 a 3 fetos somados aos anexos fetais) ocupa a maior parte da cavidade abdominal, empurrando e comprimindo fisicamente o rúmen. O consumo voluntário de matéria seca (MS) da ovelha **cai entre 25% e 35%** no momento de maior exigência nutricional!

---

### A Cascata Patológica da Toxemia da Prenhez

\`\`\`mermaid
flowchart TD
    A["Gestação Gemelar no Terço Final + Queda de Consumo por Compressão Ruminal"] --> B["Balanço Energético Negativo Severo e Hipoglicemia Materna (< 30 mg/dL)"]
    B --> C["Mobilização Maciça de Tecido Adiposo com Liberação de Ácidos Graxos Livres (NEFA)"]
    C --> D["Sobrecarga Hepática com Esteatose Difusa e Esgotamento do Oxaloacetato"]
    D --> E["Desvio Metabólico para Cetogênese: Acúmulo de Beta-Hidroxibutirato (BHB > 3.0 mmol/L)"]
    E --> F["Passagem de BHB pela Barreira Hematoencefálica e Encefalopatia Cetonêmica"]
    F --> G["Cegueira Cortical, Tremores de Cabeça, Bruxismo, Decúbito e Coma"]
    G --> H["Morte Fetal com Autólise Uterina, Choque Endotóxico e Óbito Materno"]
\`\`\`

1. **Hipoglicemia Aguda:** Com a queda de propionato ruminal (principal precursor gliconeogênico) e drenagem fetal contínua, a glicemia sérica despenca para **< 20 a 30 mg/dL** (VR: 50 a 80 mg/dL).
2. **Lipólise em Massa & Esteatose Hepática:** A hipoglicemia estimula a lipase hormônio-sensível, liberando torrentes de ácidos graxos não esterificados (NEFA). O fígado capta os NEFAs, mas, sem oxaloacetato suficiente para o ciclo de Krebs, ocorre infiltração gordurosa maciça (**fígado amarelo graxo de esteatose**) e desvio para a síntese acelerada de corpos cetônicos (**Beta-Hidroxibutirato - BHB, Acetoacetato e Acetona**).
3. **Encefalopatia Cetonêmica:** O BHB ultrapassa 3.0 a 5.0 mmol/L e penetra no sistema nervoso central. Privados de glicose e intoxicados por cetonas, os neurônios corticais entram em falência funcional, desencadeando cegueira aparente, tremores musculares na face, bruxismo (ranger de dentes contínuo), ataxia e decúbito com hipotermia e coma.

---

### Protocolo de Resgate Emergencial

* **Precursores Gliconeogênicos Orais:** Administração de **Propilenoglicol (60 a 100 mL VO a cada 12 horas)** ou Glicerol oral. É absorvido diretamente pela parede ruminal e convertido em glicose no fígado sem depender de fermentação microbiana.
* **Fluidoterapia & Glicose IV:** Infusão intravenosa contínua de Solução de Glicose a 5% a 10% (500 a 1.000 mL/dia) associada a vitaminas do complexo B (especialmente tiamina e B12).
* **Indução de Parto ou Cesariana de Emergência:** Se a ovelha não responder ao tratamento clínico em 24 a 48h, a interrupção da gestação é a única forma de cessar a drenagem fetal de glicose e salvar a vida da matriz. Em gestações acima de 135-140 dias, administra-se **Dexametasona (16 a 20 mg IM)** para acelerar a maturação pulmonar dos cordeiros e induzir o parto em 36 a 48 horas.`
      },
      {
        id: 'sec_sr_01_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Ovelha Princesa (Dorper)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo de Emergência da Toxemia da Prenhez em Ovelha Gemelar',
          patient: {
            name: 'Princesa',
            species: 'Ovino',
            breed: 'Dorper P.O.',
            age: '3 anos',
            weightKg: 72,
            habitatOrEnvironment: 'Piquete de maternidade com pastagem de Tifton em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 110,
            respiratoryRateRpm: 45,
            temperatureCelsius: 38.0,
            mucousMembranes: 'Pálidas e hálito adocicado característico de acetona',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'Princesa está prenha de fetos gêmeos aos 138 dias de gestação (comprovado por ultrassonografia). Há dois dias parou de comer a forragem, isolou-se no canto da cerca e ontem começou a trombar nos mourões como se estivesse cega. Hoje amanheceu deitada em decúbito esternal com a cabeça virada para o flanco, ranger de dentes contínuo e tremores musculares de lábios e orelhas.',
          exams: [
            {
              category: 'laboratorial_metabolico',
              title: 'Glicemia, Cetonemia e Urinálise de Emergência',
              findings: 'Avaliação bioquímica da homeostase energética materna.',
              abnormalValues: [
                { parameter: 'Glicemia Sérica', value: '22 mg/dL (Hipoglicemia Crítica)', reference: '50 a 80 mg/dL', status: 'critical' },
                { parameter: 'Beta-Hidroxibutirato Sérico (BHB)', value: '4.6 mmol/L', reference: '< 0.8 mmol/L', status: 'critical' },
                { parameter: 'Cetonúria em Fita Reagente', value: 'POSITIVA 4+ (Coloração púrpura intensa)', reference: 'Negativo', status: 'critical' },
                { parameter: 'Cálcio Ionizado Livre', value: '0.85 mmol/L (Hipocalcemia associada)', reference: '1.15 a 1.30 mmol/L', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com encefalopatia cetonêmica severa, hipoglicemia de 22 mg/dL e fetos vivos aos 138 dias, qual é o protocolo de resgate?',
          decisionOptions: [
            {
              id: 'opt_dec_sr1_1',
              label: 'Propilenoglicol oral (80 mL a cada 12h) + Glicose IV a 10% lenta com Gluconato de Cálcio + Dexametasona (16 mg IM) para indução do parto em 36h',
              description: 'Fornecer substrato gliconeogênico oral e parenteral imediato, corrigir hipocalcemia associada e induzir o parto para eliminar a drenagem fetal de glicose.',
              isOptimal: true,
              consequenceText: 'Excelente conduta médica baseada em fisiopatologia! O propilenoglicol oral e a glicose IV elevam a glicemia imediatamente, suprimindo a lipólise adiposa e a cetogênese no fígado. A dexametasona induz a maturação surfactante pulmonar dos cordeiros e desencadeia o parto em 36 a 48h, eliminando a demanda energética fetal que estava matando a mãe.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Precursores gliconeogênicos contínuos somados à indução hormonal do parto',
                mechanism: 'Restauração da glicemia cerebral e eliminação definitiva do dreno fetal de glicose',
                effect: 'Queda progressiva do BHB sérico para < 1.0 mmol/L e recuperação do reflexo de sucção',
                clinicalMeaning: 'Sobrevivência da ovelha matriz e nascimento de cordeiros viáveis'
              }
            },
            {
              id: 'opt_dec_sr1_2',
              label: 'Forçar a ovelha a comer 5 kg de farelo de milho cru e deixá-la sem medicação na chuva',
              description: 'Sobrecarga de concentrado em animal em atonia ruminal e exposição a intempéries.',
              isOptimal: false,
              consequenceText: 'Erro letal! O rúmen está paralisado e hipomóvel. Forçar milho causa acidose lática aguda hiperaguda com timpanismo, que associada à toxemia provoca morte em poucas horas.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Ingestão forçada de carboidratos solúveis em rúmen em atonia',
                mechanism: 'Fermentação ácida explosiva com queda de pH ruminal para < 4.5',
                effect: 'Acidose lática sistêmica sobreposta à toxemia da prenhez',
                clinicalMeaning: 'Óbito da ovelha e dos fetos em menos de 12 horas'
              }
            },
            {
              id: 'opt_dec_sr1_3',
              label: 'Aplicar apenas vermífugo injetável e aguardar a ovelha levantar espontaneamente',
              description: 'Ignorar o distúrbio metabólico e medicar apenas parasitas.',
              isOptimal: false,
              consequenceText: 'Conduta omissa e fatal! A ovelha não morre por vermes nesta fase aguda, mas por falência cerebral hipoglicêmica e cetonêmica.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Omissão de suporte glicêmico e hormonal em colapso metabólico',
                mechanism: 'Morte fetal intrauterina por anóxia com toxemia cadavérica',
                effect: 'Choque séptico materno e parada respiratória',
                clinicalMeaning: 'Perda total da matriz'
              }
            }
          ],
          learningTakeaways: [
            'A demanda fetal de glicose no terço final associada à compressão física ruminal é a causa raiz da toxemia da prenhez.',
            'O BHB sérico acima de 3.0 mmol/L com cetonúria 4+ confirma o diagnóstico de emergência.',
            'O propilenoglicol oral e a glicose IV aliados à indução do parto com dexametasona salvam a matriz e os cordeiros.'
          ]
        }
      },
      {
        id: 'sec_sr_01_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Toxemia da Prenhez & Cetose Ovina',
        exerciseId: 'ex_small_rum_02'
      }
    ]
  },
  {
    id: 'lesson_small_rum_02_grazing_facilities',
    moduleId: 'mod_small_ruminants',
    title: 'Comportamento Alimentar, Pastejo & Instalações de Ovinos e Caprinos',
    shortDescription: 'Etologia comparada de pastejo (grazers vs browsers), instalações para caprinos e ovinos e controle preventivo de endoparasitas.',
    estimatedMinutes: 18,
    order: 2,
    concepts: ['concept_small_ruminants_grazing_facilities'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_sr_02_th1',
        type: 'theory',
        title: 'Pastejo de Estrato Baixo vs. Ramoneio Aéreo & a Engenharia das Instalações',
        contentMarkdown: `### Etologia Forrageira Comparada: Ovelhas vs. Cabras

Embora pertençam à mesma subfamília (Caprinae), ovinos e caprinos desenvolveram estratégias alimentares distintas:
* **Ovinos (Pastadores Estritos / "Grazers"):**
  * Possuem lábio leporino com fenda mediana profunda e dentes incisivos voltados para a frente, permitindo cortar a forragem a **menos de 3 a 5 cm da superfície do solo**.
  * *O Risco Parasitário Fatal:* Mais de 80% das larvas infectantes de terceiro estágio (L3) de **Haemonchus contortus** residem no orvalho e na base do capim nos primeiros 5 a 10 cm do solo. O pastejo raso expõe o ovino a cargas parasitárias gigantescas se a pastagem não for rotacionada com descanso sanitário.
* **Caprinos (Ramoneadores / "Browsers"):**
  * Possuem hábito alimentar aéreo: preferem arbustos, folhas de árvores, cascas e brotos florais, frequentemente adotando postura bípede sobre as patas traseiras para forragear a **1.0 a 1.5 metro de altura**.
  * *Vulnerabilidade a Verminoses:* Como evoluíram comendo forragem aérea não contaminada por fezes, os caprinos possuem **menor imunidade celular adquirida contra helmintos** do que os ovinos. Quando forçados a pastar grama baixa em pastos degradados, sucumbem à verminose muito mais rapidamente.

---

### Instalações de Manejo & Biossegurança

\`\`\`mermaid
flowchart TD
    A["Hábito Alimentar de Caprinos e Ovinos"] --> B["Cochos no Chão: Contaminação com Urina e Fezes com Oocistos de Eimeria"]
    B --> C["Surto de Coccidiose e Alta Mortalidade em Cabritos e Cordeiros"]
    A --> D["Instalação de Cochos e Fenoiteiras Suspensas a 45-50 cm do Piso"]
    D --> E["Preservação da Higiene da Forragem e Interrupção da Rota Fecal-Oral"]
    E --> F["Redução Drástica de Reinfecções Parasitárias e Máximo Aproveitamento Nutricional"]
\`\`\`

1. **Cochos e Fenoiteiras Suspensas:** Devem ser instalados a **40 a 50 cm do piso** com grelhas de proteção anti-pisoteio. Isso impede que cabritos e cordeiros subam, defequem ou urinem dentro da comida, bloqueando a transmissão de **oocistos de Eimeria (coccidiose)** e bactérias entéricas.
2. **Dimensionamento de Cercas Perimetrais:**
   * Ovinos são contidos satisfatoriamente com cercas de 6 a 8 fios de arame liso.
   * Caprinos possuem extraordinária habilidade de salto e escalada: exigem cercas teladas tipo mangueirão (altura mínima de 1.30 a 1.50 m) ou cercas de **8 a 10 fios com espaçamento inferior de 10 cm** nos primeiros 50 cm do solo para impedir passagens por baixo.`
      },
      {
        id: 'sec_sr_02_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Cabanha Santa Luzia (Instalações)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Reestruturação de Manejo de Piquetes e Instalações para Ovinos e Caprinos',
          patient: {
            name: 'Rebanho Cabanha Santa Luzia',
            species: 'Pequenos Ruminantes Mistos',
            breed: 'Ovinos Santa Inês e Caprinos Boer',
            age: 'Lote misto de 140 animais',
            weightKg: 55,
            habitatOrEnvironment: 'Pasto degradado de braquiária com cochos rasteiros de madeira em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 88,
            respiratoryRateRpm: 24,
            temperatureCelsius: 38.6,
            mucousMembranes: 'Hipocoradas (FAMACHA grau 4 nos caprinos)',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'O produtor mantinha ovinos e caprinos no mesmo piquete baixo e fornecia silagem em cochos rasteiros no chão. Nos últimos dois meses, 18 cabritos jovens apresentaram diarreia escura fétida com sangue e desidratação (coccidiose confirmada por OPG com mais de 35.000 oocistos/g), além de anemia grave nos ovinos por verminose abomasal.',
          exams: [
            {
              category: 'parasitologico_e_instalacoes',
              title: 'Coproparasitológico e Auditoria de Piquete',
              findings: 'Inspeção do ambiente e carga parasitária.',
              abnormalValues: [
                { parameter: 'Contagem de Oocistos de Eimeria nos Cabritos', value: '38.000 OPG (Infecção Maciça)', reference: '< 2.000 OPG', status: 'critical' },
                { parameter: 'Grau FAMACHA Médio dos Caprinos', value: 'Grau 4 (Anemia Severa)', reference: 'Grau 1 ou 2', status: 'critical' },
                { parameter: 'Altura dos Cochos de Alimentação', value: 'No chão (0 cm - fezes e urina misturadas à ração)', reference: '40 a 50 cm suspenso', status: 'critical' },
                { parameter: 'Altura de Pastejo da Forragem', value: '3 cm (Superpastejo extremo com sobrecarga de L3)', reference: '> 10 a 15 cm', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Qual é o plano zootécnico e estrutural mandatório para estancar as perdas sanitárias?',
          decisionOptions: [
            {
              id: 'opt_dec_sr2_1',
              label: 'Suspender cochos rasteiros e instalar cochos suspensos a 45 cm do piso com grelhas + Separar piquetes por espécie + Adotar descanso de pasto de 35 dias para quebra de L3',
              description: 'Interromper a contaminação fecal de alimentos por Eimeria com cochos elevados, manejar espécies conforme hábito de forrageamento e permitir a dessecação de larvas no pasto.',
              isOptimal: true,
              consequenceText: 'Excelente conduta técnica! A elevação dos cochos para 45 cm cessa o ciclo fecal-oral de oocistos de Eimeria que estava matando os cabritos. A rotação de pastagens respeitando altura de entrada (> 15 cm) e saída (> 8 cm) reduz drasticamente a ingestão de larvas L3 de Haemonchus contortus pelos ovinos.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Adequação física de comedouros suspensos e manejo de pasto rotacionado com resíduo alto',
                mechanism: 'Bloqueio da ingestão de fezes na comida e redução de larvas L3 na forragem',
                effect: 'Queda do OPG de Eimeria para < 1.000 e recuperação progressiva do índice FAMACHA',
                clinicalMeaning: 'Erradicação dos surtos de coccidiose e sustentabilidade sanitária do rebanho'
              }
            },
            {
              id: 'opt_dec_sr2_2',
              label: 'Deixar todos os animais no mesmo pasto e aplicar formicida em pó na boca de cada cabrito',
              description: 'Uso de defensivo agrícola tóxico por via oral sem qualquer embasamento.',
              isOptimal: false,
              consequenceText: 'Ato criminoso! Formicidas são organofosforados ou fenilpirazóis altamente letais que provocam intoxicação neurotóxica fulminante em pequenos ruminantes.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Administração de veneno químico agropecuário',
                mechanism: 'Inibição irreversível da acetilcolinesterase com crise colinérgica',
                effect: 'Salivação profusa, convulsões e óbito imediato de todo o plantel',
                clinicalMeaning: 'Envenenamento em massa'
              }
            },
            {
              id: 'opt_dec_sr2_3',
              label: 'Reduzir a cerca para 30 cm de altura para os animais pularem e fazerem exercício',
              description: 'Destruição das barreiras perimetrais.',
              isOptimal: false,
              consequenceText: 'Erro primário! Cercas de 30 cm permitem a fuga total dos animais para estradas vizinhas e facilitam o ataque de cães errantes e predadores silvestres.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Remoção de contenção perimetral adequada',
                mechanism: 'Fuga descontrolada e exposição à predação',
                effect: 'Ataque por predadores e acidentes rodoviários',
                clinicalMeaning: 'Perdas patrimoniais catastróficas'
              }
            }
          ],
          learningTakeaways: [
            'Ovinos pastam rente ao solo ingerindo larvas L3; caprinos preferem forragear aéreo e têm menor imunidade a parasitas de chão.',
            'Cochos e fenoiteiras suspensas a 45-50 cm impedem que oocistos de Eimeria contaminem os alimentos.',
            'O controle da coccidiose em cabritos jovens baseia-se prioritariamente na higiene de comedouros e bebedouros.'
          ]
        }
      },
      {
        id: 'sec_sr_02_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Comportamento Forrageiro & Instalações',
        exerciseId: 'ex_small_rum_01'
      }
    ]
  },
  {
    id: 'lesson_small_rum_03_caseous_lymphadenitis',
    moduleId: 'mod_small_ruminants',
    title: 'Linfadenite Caseosa (Mal do Caroço) & Sanidade de Rebanho',
    shortDescription: 'Patogênese de Corynebacterium pseudotuberculosis, abscessos em casca de cebola, contaminação na tosquia e drenagem cirúrgica.',
    estimatedMinutes: 20,
    order: 3,
    concepts: ['concept_small_ruminants_caseous_lymphadenitis'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_sr_03_th1',
        type: 'theory',
        title: 'Corynebacterium pseudotuberculosis, Abscessos em Casca de Cebola & Manejo Sanitário',
        contentMarkdown: `### O Agente Etiológico & a Resistência Intracelular

A Linfadenite Caseosa (popularmente "Mal do Caroço") é uma infecção crônica causada pela bactéria Gram-positiva **Corynebacterium pseudotuberculosis**:
* **Armadura Lipídica de Parede:** Possui uma cápsula rica em ácidos micólicos e ceras lipídicas de cadeia longa, semelhante ao bacilo da tuberculose. Essa parede impermeável confere **resistência absoluta aos mecanismos bactericidas dos macrófagos**, permitindo que a bactéria sobreviva e replique livremente no citoplasma dos fagócitos hospedeiros.
* **Exotoxina Fosfolipase D (PLD):** Secretada pela bactéria, atua degradando a esfingomielina das membranas endoteliais dos vasos sanguíneos e linfáticos, provocando aumento de permeabilidade vascular e necrose tissular, facilitando a disseminação linfática para os linfonodos regionais e órgãos internos.

---

### A Lesão Patognomônica em "Casca de Cebola"

\`\`\`mermaid
flowchart TD
    A["Microlesão Cutânea de Tosquia ou Perfuração por Espinho no Pasto"] --> B["Penetração de Corynebacterium pseudotuberculosis na Epiderme"]
    B --> C["Fagocitose por Macrófagos e Sobrevivência Intracelular via Fosfolipase D"]
    C --> D["Drenagem Linfática para Linfonodo Regional (Parotídeo, Submandibular, Pré-Escapular)"]
    D --> E["Necrose Tecidual Central e Formação de Cápsula Fibrosa Construtora"]
    E --> F["Reagudização Periódica com Deposição de Camadas Concêntricas ('Casca de Cebola')"]
    F --> G["Pus Caseoso Espesso Inodoro Esbranquiçado a Esverdeado sob Alta Tensão"]
    G --> H["Ruptura Espontânea no Curral com Contaminação Persistente do Solo por Anos"]
\`\`\`

1. **Patologia Concêntrica:** O organismo do ruminante tenta isolar o foco de necrose formando uma cápsula fibrosa espessa de colágeno. Conforme a bactéria continua a se multiplicar lentamente no interior, novas ondas de necrose e fibrose são depositadas em torno do núcleo, gerando o aspecto característico de **camadas concêntricas lamelares ("casca de cebola")**.
2. **Aspecto do Pus:** O exsudato é espesso, pastoso, esbranquiçado a esverdeado e **praticamente inodoro** (diferenciando-se de abscessos fétidos por bactérias anaeróbias).
3. **Formas Clínicas:**
   * *Forma Cutânea / Superficial:* Afeta linfonodos palpáveis (parotídeos, submandibulares, retrofaríngeos, pré-escapulares e pré-crurais).
   * *Forma Visceral ("Síndrome da Ovelha Magra"):* Abscessos ocultos nos linfonodos mediastínicos, parênquima pulmonar, fígado e rins, levando à caquexia crônica progressiva, tosse e perda zootécnica sem nódulos externos visíveis.

---

### Protocolo de Biossegurança e Drenagem Segura

* **O Erro Clássico de Manejo:** Jamais drene um abscesso no chão de terra do curral ou no pasto! O pus contém bilhões de bactérias viáveis que permanecem infecciosas no solo e nas fezes por **mais de 8 a 12 meses**.
* **Conduta Padrão-Ouro:**
  1. Conter o animal em local calçado, cimentado e de fácil desinfecção, afastado dos outros animais.
  2. Tricotomia ampla e antissepsia local com álcool iodado.
  3. Incisão cirúrgica vertical ampla no ponto de flutuação mais baixo do nódulo para garantir drenagem por gravidade.
  4. **Coleta Integral do Pus em Recipiente Fechado:** Todo o exsudato e gazes contaminadas devem ser **incinerados ou enterrados a mais de 1 metro de profundidade com cal virgem**.
  5. Cauterização química da cavidade capsular com **Tintura de Iodo a 10%** embebida em gaze para cauterizar as paredes internas.
  6. Manter o animal isolado até a cicatrização completa da ferida operatória.`
      },
      {
        id: 'sec_sr_03_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Fazenda Três Morrinhos (Mal do Caroço)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Abordagem Cirúrgica e Sanitária de Foco de Linfadenite Caseosa',
          patient: {
            name: 'Lote de Matrizes Três Morrinhos',
            species: 'Ovino de Corte',
            breed: 'Santa Inês',
            age: 'Matrizes multíparas de 2 a 4 anos',
            weightKg: 62,
            habitatOrEnvironment: 'Curral de manejo e pastagem em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 76,
            respiratoryRateRpm: 20,
            temperatureCelsius: 38.8,
            mucousMembranes: 'Róseas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'O produtor notou nódulos firmes e volumosos (de 6 a 12 cm de diâmetro) na região submandibular e parotídea de 12 ovelhas após a tosquia da lã realizada há 4 meses. O funcionário da fazenda tinha o hábito de furar os caroços com arame no meio do mangueiro e lavar com mangueira de água no chão de terra batida. Três animais do lote apresentam emagrecimento progressivo sem nódulos externos (suspeita de forma visceral).',
          exams: [
            {
              category: 'clinico_e_microbiologico',
              title: 'Punção Aspirativa e Avaliação de Nódulos',
              findings: 'Avaliação física dos linfonodos aumentados e exame direto.',
              abnormalValues: [
                { parameter: 'Linfonodos Submandibulares e Parotídeos', value: 'Nódulos de 8 a 10 cm, consistência firme a flutuante, alopecicos na superfície', reference: 'Impalpáveis ou delgados (< 1.5 cm)', status: 'critical' },
                { parameter: 'Citologia do Exsudato Punção', value: 'Bastonetes pleomórficos Gram-positivos intra e extracelulares em paliçada com detritos caseosos', reference: 'Ausência de bactérias', status: 'critical' },
                { parameter: 'Cultura Bacteriológica', value: 'Isolamento puro de Corynebacterium pseudotuberculosis', reference: 'Negativo', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Qual é a conduta cirúrgica e o plano sanitário definitivo para controlar a doença no rebanho?',
          decisionOptions: [
            {
              id: 'opt_dec_sr3_1',
              label: 'Isolar animais acometidos + Drenagem cirúrgica em piso cimentado com recolhimento e incineração total do pus + Cauterização capsular com iodo a 10% + Descarte de ovelhas caquéticas',
              description: 'Evitar contaminação ambiental, desinfectar a cavidade capsular quimicamente e eliminar matrizes com suspeita de linfadenite visceral crônica.',
              isOptimal: true,
              consequenceText: 'Excelente conduta médica veterinária e sanitária! Conter a drenagem em local lavável e incinerar o pus caseoso impede que bilhões de bactérias atinjam o solo do curral. A cauterização com iodo a 10% destrói a microflora capsular e induz tecido de granulação hígido. O descarte das ovelhas emagrecidas elimina a fonte contínua de disseminação broncopulmonar.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Drenagem asséptica controlada, queima de exsudato purulento e cauterização com iodo',
                mechanism: 'Eliminação física e química do reservatório bacteriano sem contaminação do ambiente',
                effect: 'Cicatrização da ferida em 14 dias sem contágio de animais sadios no curral',
                clinicalMeaning: 'Bloqueio da cadeia de transmissão de Corynebacterium no rebanho'
              }
            },
            {
              id: 'opt_dec_sr3_2',
              label: 'Espremer os caroços no meio do rebanho para que as outras ovelhas se lambam e adquiram imunidade',
              description: 'Prática de contaminação intencional maciça.',
              isOptimal: false,
              consequenceText: 'Erro devastador! A inoculação oral direta de C. pseudotuberculosis contamina 100% dos animais e perpetua a contaminação do solo por décadas.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Dispersão de material purulento vivo sobre o rebanho e fômites',
                mechanism: 'Penetração transmucosa e transcutânea maciça de bactérias capsuladas',
                effect: 'Surto hiperendêmico de linfadenite caseosa em todo o plantel',
                clinicalMeaning: 'Condenação sanitária e depreciação total do rebanho'
              }
            },
            {
              id: 'opt_dec_sr3_3',
              label: 'Administrar antibiótico comum na ração e esperar o caroço dissolver sozinho',
              description: 'Tratamento oral sistêmico para abscesso encapsulado.',
              isOptimal: false,
              consequenceText: 'Falha terapêutica completa! Antibióticos sistêmicos não penetram na cápsula fibrosa espessa e avascular do abscesso caseoso, gerando apenas desperdício financeiro e resíduos na carne.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Uso de antimicrobianos sistêmicos em lesões capsuladas e avasculares',
                mechanism: 'Incapacidade da droga de atingir concentração inibitória mínima dentro do pus',
                effect: 'Persistência do abscesso até ruptura espontânea e contaminação do solo',
                clinicalMeaning: 'Ineficácia terapêutica absoluta'
              }
            }
          ],
          learningTakeaways: [
            'C. pseudotuberculosis forma abscessos concêntricos em "casca de cebola" protegidos por cápsula fibrosa avascular.',
            'O pus caseoso NUNCA deve ser drenado no solo: deve ser incinerado ou enterrado profundamente.',
            'A tosquia e lesões de pele são as principais vias de infecção no rebanho.'
          ]
        }
      },
      {
        id: 'sec_sr_03_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Linfadenite Caseosa & Biossegurança',
        exerciseId: 'ex_small_rum_03'
      }
    ]
  },
  {
    id: 'lesson_small_rum_04_infectious_footrot',
    moduleId: 'mod_small_ruminants',
    title: 'Pododermatite Infecciosa Ovina (Footrot) & Sinergismo Bacteriano',
    shortDescription: 'Sinergismo entre Fusobacterium necrophorum e Dichelobacter nodosus, descolamento de sola e muralha, e pedilúvio curativo.',
    estimatedMinutes: 20,
    order: 4,
    concepts: ['concept_small_ruminants_infectious_footrot'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_sr_04_th1',
        type: 'theory',
        title: 'O Sinergismo Bacteriano do Footrot & o Colapso do Estojo Córneo',
        contentMarkdown: `### A Etiopatogenia do Footrot: Um Ataque em Duas Fases

A Pododermatite Infecciosa dos Ovinos (*Footrot*) é uma enfermidade podal altamente contagiosa e debilitante, resultante do sinergismo estrito entre duas espécies bacterianas anaeróbias:
1. **O Invasor Primário Oportunista (Fusobacterium necrophorum):**
   * Habitante normal do trato gastrointestinal e do solo úmido.
   * Quando o solo do piquete permanece alagado, com lama e umidade constante, a pele do espaço interdigital dos ovinos sofre **maceração tecidual** e perde sua barreira queratinizada.
   * *F. necrophorum* penetra na epiderme macerada e secreta uma potente **leucocidina**, causando necrose superficial inflamatória da pele interdigital (**dermatite interdigital ou "scald"**).
2. **O Invasor Secundário Mandatório (Dichelobacter nodosus):**
   * É o verdadeiro patógeno transmissível do footrot. Possui **fímbrias polares de aderência (pili)** que se fixam na matriz celular inflamada por *F. necrophorum*.
   * **Secreção de Proteases Ceratolíticas:** *D. nodosus* secreta elastases e proteases ácidas que **digerem enzimaticamente a queratina da lâmina lamelar e da sola do casco**, promovendo a separação e o descolamento da cápsula córnea a partir dos talões e da linha branca.
   * **Odor Pútrido Patognomônico:** O exsudato necrótico cinzento-escuro exala um odor fétido pungente característico.

\`\`\`mermaid
flowchart TD
    A["Pasto Alagado e Lama com Maceração da Pele Interdigital Ovina"] --> B["Invasão Primária por Fusobacterium necrophorum com Dermatite Interdigital (Scald)"]
    B --> C["Criação de Microambiente Anaeróbio Favorável para Dichelobacter nodosus"]
    C --> D["D. nodosus Adere via Fímbrias e Secreta Proteases Ceratolíticas Digestivas"]
    D --> E["Digestão da Queratina com Descolamento Completo da Parede e Sola do Casco"]
    E --> F["Exsudato Cinzento Pútrido Fétido e Claudicação Extrema de Múltiplos Membros"]
    F --> G["Animais Pastando de Joelhos (Apoio nos Carpos) com Perda Maciça de Peso"]
    G --> H["Casqueamento Curativo + Pedilúvio com Sulfato de Zinco a 10% por 15 Minutos"]
\`\`\`

---

### Manifestações Clínicas & Impacto Produtivo

* **Graus de Lesão:** Desde inflamação interdigital leve (Grau 1) até o descolamento completo de todo o estojo córneo com exposição do cório vascular sensível sangrante (Grau 4 e 5).
* **Comportamento Cardinal:** Como a dor podal é bilateral ou afeta múltiplos membros torácicos, as ovelhas recusam-se a ficar em pé e **passam a pastar de joelhos (apoiadas sobre os carpos)**.
* **Perdas Econômicas:** Queda rápida de 30% a 50% no escore de condição corporal, interrupção da produção de leite, abortos induzidos pelo estresse da dor e miíases por *Cochliomyia hominivorax*.

---

### Manejo Terapêutico & Erradicação no Rebanho

1. **Casqueamento Curativo Radical:** Todo o tecido córneo solto, descolado ou necrótico deve ser cuidadosamente aparado com tesoura de casco para **expor o foco bacteriano ao oxigênio do ar** (as bactérias são anaeróbias estritas).
2. **Pedilúvio de Sulfato de Zinco a 10%:** É a substância de escolha internacional:
   * O **Sulfato de Zinco a 10%** (com adição de surfactante ou sabão neutro para penetração) possui ação ceratoplástica e antibacteriana profunda.
   * *Tempo de Contato Obrigatório:* Os animais devem permanecer contidos dentro do pedilúvio por no mínimo **10 a 15 minutos** para absorção efetiva.
3. **Antibioticoterapia Sistêmica:** Casos graves (Grau 3 a 5) exigem **Oxitetraciclina de Longa Ação (20 mg/kg IM)** em dose única.
4. **Vazio Sanitário de Pastagens (14 Dias):** *Dichelobacter nodosus* não sobrevive no pasto ou no solo por mais de **10 a 14 dias** na ausência de cascos ovinos infectados. Transferir o rebanho tratado para piquetes secos que descansaram por 14 dias quebra a reinfecção!`
      },
      {
        id: 'sec_sr_04_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Rebanho Esperança (Surto de Footrot)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Controle de Emergência de Surto de Pododermatite Infecciosa (Footrot)',
          patient: {
            name: 'Rebanho de Matrizes Esperança',
            species: 'Ovino',
            breed: 'Suffolk e Ile de France',
            age: 'Lote de 90 ovelhas adultas',
            weightKg: 68,
            habitatOrEnvironment: 'Pasto de baixada úmido em época de chuvas em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 92,
            respiratoryRateRpm: 28,
            temperatureCelsius: 39.2,
            mucousMembranes: 'Róseo-pálidas',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Após três semanas de chuvas torrenciais e alagamento do piquete de várzea, 34 das 90 ovelhas começaram a mancar intensamente. O tratador notou 15 matrizes pastando de joelhos com as patas dobradas e relutantes em se deslocar até o cocho. Ao pegar as patas, sente-se odor fétido pútrido insuportável e os cascos estão descolando da sola com exsudato cinzento.',
          exams: [
            {
              category: 'podologia_e_microbiologia',
              title: 'Exame Podológico dos Dígitos e Esfregaço de Exsudato',
              findings: 'Avaliação clínica minuciosa do estojo córneo.',
              abnormalValues: [
                { parameter: 'Descolamento de Parede Córnea e Sola (Grau 3 e 4)', value: '34 ovelhas com descolamento extenso e tecido sensível exposto', reference: 'Cascos hígidos sem descolamento', status: 'critical' },
                { parameter: 'Odor Podal', value: 'Pútrido fétido intenso característico de Dichelobacter nodosus', reference: 'Inodoro', status: 'critical' },
                { parameter: 'Microscopia de Gram do Exsudato', value: 'Presença de bacilos retos e curvos Gram-negativos com dilatação terminal em fímbria', reference: 'Ausência de microflora invasora', status: 'critical' },
                { parameter: 'Comportamento Postural', value: 'Pastando ajoelhadas sobre os carpos por dor extrema nos membros torácicos', reference: 'Estação quadrúpede normal', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Qual é o protocolo integrado de erradicação de footrot a ser implementado imediatamente?',
          decisionOptions: [
            {
              id: 'opt_dec_sr4_1',
              label: 'Casqueamento curativo para remover casco descolado + Pedilúvio estático de Sulfato de Zinco a 10% por 15 min + Oxitetraciclina LA (20 mg/kg IM) nos casos graves + Mudança para pasto seco descansado por 14 dias',
              description: 'Expor o ambiente anaeróbio ao oxigênio, esterilizar com sulfato de zinco com tempo de retenção adequado, medicar sistemicamente e alocar em piquete livre de patógenos.',
              isOptimal: true,
              consequenceText: 'Conduta perfeita padrão-ouro internacional! A remoção cirúrgica do tecido descolado cessa o refúgio anaeróbio. O sulfato de zinco a 10% retido por 15 minutos penetra na derme podal e destrói o D. nodosus. A oxitetraciclina LA combate a invasão profunda e a rotação para pasto seco que descansou por 14 dias assegura que os animais não pisarão em solo contaminado.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Casqueamento curativo, imersão em sulfato de zinco por 15 min e pasto descansado',
                mechanism: 'Morte de Dichelobacter nodosus por aeração, quelação química e quebra de ciclo no solo',
                effect: 'Regeneração do estojo córneo, cicatrização da derme e cessação imediata da claudicação',
                clinicalMeaning: 'Erradicação do footrot no rebanho e recuperação da capacidade de pastejo'
              }
            },
            {
              id: 'opt_dec_sr4_2',
              label: 'Passar as ovelhas correndo por pedilúvio com formol a 40% em menos de 2 segundos e mantê-las no mesmo atoleiro de lama',
              description: 'Uso de produto químico cáustico sem tempo de contato e retorno à fonte de infecção.',
              isOptimal: false,
              consequenceText: 'Erro desastroso! Formol a 40% causa queimadura química severa na pele macerada, piorando a dor e a necrose. Passar correndo em 2 segundos impede qualquer penetração terapêutica e mantê-las na lama garante reinfecção instantânea.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Queimadura cáustica por formol e manutenção em ambiente macerado',
                mechanism: 'Desnaturação celular da derme e facilitação de infecções secundárias anaeróbias',
                effect: 'Necrose podal destrutiva com perda de dígitos e artrite séptica',
                clinicalMeaning: 'Eutanásia de matrizes por dor intratável'
              }
            },
            {
              id: 'opt_dec_sr4_3',
              label: 'Aplicar graxa de caminhão nos cascos para segurar as bactérias lá dentro',
              description: 'Selar o foco anaeróbio com graxa automotiva tóxica.',
              isOptimal: false,
              consequenceText: 'Conduta irracional e letal! A graxa veda o oxigênio, criando o ambiente anaeróbio absoluto perfeito para a proliferação explosiva de D. nodosus e bactérias do tétano.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Selamento da ferida com hidrocarbonetos e ausência de oxigênio',
                mechanism: 'Proliferação anaeróbia descontrolada',
                effect: 'Gangrena do pé e tétano ascendente',
                clinicalMeaning: 'Morte dos animais acometidos'
              }
            }
          ],
          learningTakeaways: [
            'O footrot depende do sinergismo entre F. necrophorum (lesão inicial) e D. nodosus (digestão ceratolítica de queratina).',
            'O casqueamento curativo deve retirar todo o casco solto para aerar o leito podal e permitir ação do pedilúvio.',
            'O pedilúvio de Sulfato de Zinco a 10% exige tempo de retenção mínimo de 10 a 15 minutos para penetração efetiva.'
          ]
        }
      },
      {
        id: 'sec_sr_04_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Pododermatite Infecciosa & Footrot',
        exerciseId: 'ex_small_rum_04'
      }
    ]
  },
  {
    id: 'lesson_small_rum_05_body_score_carcass',
    moduleId: 'mod_small_ruminants',
    title: 'Escore de Condição Corporal (ECC) & Rendimento de Carcaça Ovina',
    shortDescription: 'Palpação tátil das vértebras lombares (escala 1 a 5), flushing nutricional e prevenção do cold shortening no frigorífico.',
    estimatedMinutes: 20,
    order: 5,
    concepts: ['concept_small_ruminants_body_score_carcass'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_sr_05_th1',
        type: 'theory',
        title: 'Avaliação Tátil do ECC Lombar & a Tecnologia de Carcaça Ovina de Corte',
        contentMarkdown: `### Por que o Olho Não Enxerga a Gordura da Ovelha?

Em ovinos lanados ou com lã densa, a inspeção visual é uma armadilha diagnóstica: o velo esconde a perda de massa muscular e a atrofia de reservas energéticas. O Escore de Condição Corporal (ECC) **DEVE ser avaliado exclusivamente por palpação tátil bidigital** da região lombar (vértebras lombares L1 a L6, entre a última costela e a tuberosidade coxal):
* **Escala Padrão Internacional (1 a 5 com frações de 0.5):**
  * *ECC 1 (Caquética):* Processos espinhosos dorsais proeminentes e afiados como lâmina de faca; processos transversos palpáveis em toda a sua extensão com passagem livre dos dedos por baixo; músculo *Longissimus dorsi* profundamente atrófico.
  * *ECC 2 (Magra):* Processos espinhosos destacados mas com pontas arredondadas; processos transversos sentidos com pouca pressão; cobertura muscular rasa.
  * *ECC 3 (Ideal / Moderada):* Processos espinhosos sentidos como ondulações suaves apenas com pressão firme dos dedos; processos transversos arredondados e bem cobertos por músculo e camada fina de gordura subcutânea.
  * *ECC 4 (Gorda):* Processos espinhosos palpáveis apenas como uma linha arredondada com grande esforço; processos transversos não detectáveis; camada espessa de gordura sobre o lombo.
  * *ECC 5 (Obesa):* Depressão dorsal central circundada por grossas almofadas de gordura lombar e na base da cauda.

---

### Aplicação Reprodutiva: O Flushing Nutricional

\`\`\`mermaid
flowchart TD
    A["Palpação Tátil Lombar dos Processos Espinhosos e Transversos das Vértebras L1-L6"] --> B["Classificação do ECC do Rebanho de Matrizes (Escala 1 a 5)"]
    B --> C["Ovelhas em ECC 2.0 a 2.5: Submissão ao Manejo de Flushing Nutricional"]
    C --> D["Aumento da Insulina e IGF-1 Séricos com Estímulo aos Foliculos Ovarianos"]
    D --> E["Elevação da Taxa de Ovulação (+20% de Gestações Múltiplas)"]
    B --> F["Abate de Cordeiros com 38 kg e ECC 3.5: Rendimento de Carcaça > 48%"]
    F --> G["Espessura de Gordura Subcutânea de 3 mm: Prevenção do Cold Shortening"]
    G --> H["Garantia de Maciez, Suculência e Valor Agregado no Mercado Gastronômico"]
\`\`\`

* **O Manejo de Flushing:** Fornecer um aporte suplementar concentrado rico em energia e proteína (300 a 400 g de grãos por dia) **2 a 3 semanas antes do início da estação de monta** para fêmeas com ECC entre 2.0 e 2.5.
* **Mecanismo Endócrino:** O pico de glicose e aminoácidos estimula a secreção de insulina e IGF-1 pelo fígado, promovendo recrutamento folicular ovariano aumentado e elevando a taxa de ovulações duplas em **15% a 25%**, maximizando a safra de cordeiros.

---

### Rendimento de Carcaça & o Fenômeno do "Cold Shortening"

No abate de cordeiros precoces (35 a 42 kg de peso vivo com 120 a 150 dias):
* **Rendimento de Carcaça (RC %):**
  RC (%) = (Peso de Carcaça Fria / Peso Vivo em Jejum) × 100
  Em cordeiros especializados das raças Dorper, Santa Inês e Texel, varia de **47% a 52%**.
* **Acabamento de Gordura Subcutânea (Grau 1 a 5):**
  * O padrão comercial de excelência é o **Grau 3 (Gordura Mediana Uniforme - espessura de 2 a 4 mm sobre o lombo)**.
* **O Encurtamento pelo Frio (Cold Shortening):**
  * Se o cordeiro for abatido muito magro (Grau 1 ou 2, desprovido de capa de gordura isolante), a carcaça resfria bruscamente na câmara fria (**temperatura interna despenca para < 10°C enquanto o pH ainda está acima de 6.0-6.2**).
  * Sob frio prematuro na presença de ATP residual, as bombas de cálcio do retículo sarcoplasmático colapsam e liberam cálcio descontrolado no sarcoplasma, gerando **contratura máxima irreversível dos sarcômeros**.
  * A carne resultante torna-se extremamente dura, ressecada e fibrosa, gerando rejeição pelo consumidor e desvalorização do produto gourmet.`
      },
      {
        id: 'sec_sr_05_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Cordeiro Nobre (Tipificação de Carcaça)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Auditoria Frigorífica de Tipificação de Carcaça e Qualidade da Carne',
          patient: {
            name: 'Lote de Cordeiros Confinados',
            species: 'Ovino de Corte',
            breed: 'Cruza Dorper x Santa Inês',
            age: '135 dias de vida',
            weightKg: 38.5,
            habitatOrEnvironment: 'Confinamento de terminação de alto grão em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 0,
            respiratoryRateRpm: 0,
            temperatureCelsius: 0,
            mucousMembranes: 'Normal pós-abate',
            capillaryRefillTimeSec: 0
          },
          anamnesis: 'Abate de lote de 60 cordeiros terminados em confinamento. O produtor selecionou os animais na fazenda por pesagem e palpação do ECC lombar (meta: ECC 3.5). Na linha de abate do frigorífico sob inspeção SIF, as carcaças foram pesadas, mensuradas quanto à espessura de toucinho no músculo Longissimus dorsi e encaminhadas para resfriamento a 2°C.',
          exams: [
            {
              category: 'tipificacao_frigorifica',
              title: 'Métricas de Carcaça, Espessura de Gordura e Queda de pH',
              findings: 'Avaliação biométrica post-mortem das carcaças.',
              abnormalValues: [
                { parameter: 'Peso Médio de Carcaça Fria', value: '18.9 kg', reference: '17.0 a 20.0 kg', status: 'normal' },
                { parameter: 'Rendimento de Carcaça Fria (RCF)', value: '49.1%', reference: '47% a 51%', status: 'normal' },
                { parameter: 'Espessura de Gordura Subcutânea (EGS)', value: '3.1 mm (Grau 3 - Mediana Uniforme)', reference: '2.0 a 4.0 mm', status: 'normal' },
                { parameter: 'pH às 24 horas pós-abate', value: '5.62', reference: '5.50 a 5.80', status: 'normal' }
              ]
            }
          ],
          challengePrompt: 'Com base nas métricas zootécnicas obtidas (RCF 49.1%, EGS 3.1 mm e pH final 5.62), como correlacionar esses parâmetros com o manejo na fazenda e a maciez da carne?',
          decisionOptions: [
            {
              id: 'opt_dec_sr5_1',
              label: 'Certificar o lote com padrão gourmet de excelência: a capa de gordura de 3.1 mm atuou como isolante térmico prevenindo o cold shortening, assegurando glicólise post-mortem hígida e maciez máxima',
              description: 'Confirmar que a reserva energética no abate garantiu queda lenta de temperatura e glicólise completa até pH 5.62 sem endurecimento dos sarcômeros.',
              isOptimal: true,
              consequenceText: 'Excelente domínio de zootecnia e tecnologia de carnes! A espessura de gordura de 3.1 mm impediu a perda rápida de temperatura na câmara fria, permitindo que o glicogênio muscular fosse convertido em ácido lático de forma gradual até o pH 5.62. Isso garantiu ausência de encurtamento pelo frio (cold shortening) e conferiu maciez, retenção de água e marmoreio ideais.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Terminação nutricional adequada em ECC 3.5 com capa de gordura de 3.1 mm',
                mechanism: 'Isolamento térmico na refrigeração e glicólise post-mortem equilibrada',
                effect: 'Prevenção do cold shortening com pH final de 5.62 e relaxamento de sarcômeros',
                clinicalMeaning: 'Maciez excepcional certificada e máxima bonificação por carcaça no frigorífico'
              }
            },
            {
              id: 'opt_dec_sr5_2',
              label: 'Condenar todas as carcaças porque carcaça de ovino nunca deve ter gordura externa',
              description: 'Exigir carcaça 100% magra sem gordura de cobertura.',
              isOptimal: false,
              consequenceText: 'Erro técnico primário! Carcaça sem gordura externa sofre cold shortening inevitável, ressecamento e queima pelo frio, tornando a carne dura e intragável.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Rejeição indevida do acabamento de gordura protetora',
                mechanism: 'Exposição das fibras musculares ao choque térmico precoce',
                effect: 'Endurecimento severo das carcaças',
                clinicalMeaning: 'Prejuízo comercial irreparável'
              }
            },
            {
              id: 'opt_dec_sr5_3',
              label: 'Mergulhar as carcaças em água fervente antes de resfriar para cozinhar a gordura',
              description: 'Destruição térmica da carcaça na linha de abate.',
              isOptimal: false,
              consequenceText: 'Prática absurda que cozinha a carne superficialmente, desnatura mioglobina e provoca contaminação bacteriana severa.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Tratamento térmico impróprio em linha de inspeção de carne fresca',
                mechanism: 'Desnaturação proteica massiva e proliferação bacteriana',
                effect: 'Putrefação acelerada da carne',
                clinicalMeaning: 'Condenação sanitária total pelo SIF'
              }
            }
          ],
          learningTakeaways: [
            'O ECC em ovinos deve ser mensurado por palpação bidigital dos processos espinhosos e transversos lombares.',
            'O acabamento de gordura subcutânea de 2 a 4 mm (Grau 3) previne o encurtamento pelo frio (cold shortening).',
            'O flushing nutricional antes da estação de monta eleva a taxa ovulatória e as gestações gemelares.'
          ]
        }
      },
      {
        id: 'sec_sr_05_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: ECC & Qualidade de Carcaça Ovina',
        exerciseId: 'ex_small_rum_05'
      }
    ]
  }
];
// ==========================================
// 6. PREVENTIVA & DEFESA SANITÁRIA ANIMAL (MAPA)
// ==========================================
export const PREVENTIVE_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_preventive_01',
    conceptId: 'concept_preventive_mapa_surveillance',
    type: 'multiple_choice',
    prompt: 'No âmbito do Sistema Unificado de Atenção à Sanidade Agropecuária (SUASA) e das diretrizes da OMSA/OIE, qual é a divisão de competências federativas entre a União (MAPA), os Estados (Defesa Estadual) e os Municípios na vigilância sanitária e comércio de produtos?',
    options: [
      {
        id: 'opt_prev1_1',
        text: 'A União (MAPA) coordena a regulação nacional, fronteiras internacionais e certificação zoossanitária de exportação; os Estados executam a vigilância epidemiológica de campo, controle de trânsito, focos e vacinações; e os Municípios inspecionam o abate e produtos para consumo estritamente local (SIM)',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A defesa sanitária agropecuária brasileira é descentralizada sob o SUASA. O MAPA normatiza e responde perante a Organização Mundial de Saúde Animal (OMSA) e países importadores. Os órgãos estaduais (como a CDA-SP) executam a vigilância ativa nos municípios, controlam o trânsito com a emissão e fiscalização de GTAs e intervêm nos focos epizoóticos. O SIM atua na inspeção de produtos locais.'
      },
      {
        id: 'opt_prev1_2',
        text: 'Os municípios têm poder exclusivo de interditar as fronteiras do Brasil com o exterior e emitir passaportes humanos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Controle de fronteiras internacionais e relações exteriores são competências exclusivas federais da União.'
      },
      {
        id: 'opt_prev1_3',
        text: 'O MAPA atua apenas na distribuição gratuita de vacinas para animais de zoológico, sem relação com gado de corte',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O MAPA é o ministério federal que comanda toda a política de saúde animal, agronegócio e inspeção de carnes do país.'
      },
      {
        id: 'opt_prev1_4',
        text: 'A defesa sanitária animal foi extinta e qualquer fazendeiro pode transportar animais doentes sem documentação',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O trânsito de animais é rigidamente regulamentado por lei com exigência compulsória de Guia de Trânsito Animal (GTA).'
      }
    ]
  },
  {
    id: 'ex_preventive_02',
    conceptId: 'concept_preventive_pncebt_brucellosis',
    type: 'multiple_choice',
    prompt: 'No Programa Nacional de Controle e Erradicação da Brucelose e Tuberculose (PNCEBT), qual é a regulamentação estrita sobre a vacinação de fêmeas e machos contra Brucelose com as vacinas B19 e RB51?',
    options: [
      {
        id: 'opt_prev2_1',
        text: 'A vacina B19 é obrigatória para fêmeas de 3 a 8 meses com marcação a ferro quente na face esquerda (último dígito do ano); fêmeas com mais de 8 meses não vacinadas devem receber RB51 (marcada com V); e a vacinação com B19 é expressamente PROIBIDA em machos em qualquer idade',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! A B19 (amostra lisa viva atenuada de Brucella abortus) induz imunidade sólida, mas gera anticorpos aglutinantes. Em fêmeas adultas, esses anticorpos persistem e dão falso-positivo nas provas sorológicas oficiais (por isso usa-se RB51, que é rugosa e não interfere no teste de AAT). Em machos, a B19 é proibida por lei porque causa orquite/epididimite e persistência de títulos vacinais, inviabilizando o diagnóstico andrológico e sorológico.'
      },
      {
        id: 'opt_prev2_2',
        text: 'A vacina B19 deve ser aplicada mensalmente em todos os touros reprodutores até a puberdade',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A vacinação de machos com B19 é expressamente proibida pelo MAPA em todo o território nacional.'
      },
      {
        id: 'opt_prev2_3',
        text: 'A vacina RB51 é obrigatória exclusivamente para cavalos e porcos reprodutores',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O PNCEBT é um programa específico para a espécie bovina e bubalina.'
      },
      {
        id: 'opt_prev2_4',
        text: 'Vacas reagentes positivas no teste confirmatório de 2-Mercaptoetanol devem receber dose tripla de B19 para curar a bactéria',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Animais positivos confirmados são marcados com "P" na face direita e sacrificados obrigatoriamente em até 30 dias; vacina não cura animais infectados.'
      }
    ]
  },
  {
    id: 'ex_preventive_03',
    conceptId: 'concept_preventive_pncebt_tuberculosis',
    type: 'multiple_choice',
    prompt: 'Na execução e interpretação do Teste Cervical Comparado (TCC) para diagnóstico da Tuberculose Bovina (Mycobacterium bovis) segundo o PNCEBT, quando um animal é classificado como reagente POSITIVO?',
    options: [
      {
        id: 'opt_prev3_1',
        text: 'Quando, na leitura milimétrica com cutímetro de mola exatamente 72 ± 6 horas pós-inoculação das tuberculinas aviária (sítio superior) e bovina (sítio inferior), o incremento da dobra bovina supera o aviário em 4.0 mm ou mais (ΔB - ΔA ≥ 4.0 mm)',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O TCC baseia-se na hipersensibilidade celular retardada (Tipo IV). A PPD aviária é inoculada no ponto superior e a PPD bovina 12-15 cm abaixo. Como micobactérias atípicas ambientais causam reações inespecíficas, a subtração do delta aviário do delta bovino (ΔB - ΔA) isola a imunidade específica para M. bovis. Se a diferença for ≥ 4.0 mm, o animal é positivo e deve ser sacrificado em até 30 dias.'
      },
      {
        id: 'opt_prev3_2',
        text: 'Quando a pele do animal brilha no escuro após 5 minutos da injeção',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A tuberculinização depende de leitura milimétrica com cutímetro de mola da espessura da dobra cutânea aos 72 ± 6 horas.'
      },
      {
        id: 'opt_prev3_3',
        text: 'Quando a reação aviária for 10 vezes maior do que a bovina, comprovando que o boi virou galinha',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Se a reação aviária supera a bovina (ΔB < ΔA), o animal é negativo para M. bovis (apenas sensibilizado por micobactérias ambientais atípicas).'
      },
      {
        id: 'opt_prev3_4',
        text: 'O teste é lido 15 minutos após a injeção ouvindo o som do batimento cardíaco da orelha',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A reação é de hipersensibilidade do tipo IV (tardia mediada por células), exigindo exatamente 72 ± 6 horas para recrutamento e infiltrado linfocitário máximo.'
      }
    ]
  },
  {
    id: 'ex_preventive_04',
    conceptId: 'concept_preventive_pncrh_rabies_control',
    type: 'multiple_choice',
    prompt: 'Qual é a metodologia oficial regulamentada pelo PNCRH/MAPA para o controle populacional de morcegos hematófagos (Desmodus rotundus) e qual o protocolo de colheita de encéfalo para diagnóstico laboratorial?',
    options: [
      {
        id: 'opt_prev4_1',
        text: 'Captura seletiva com redes de neblina e aplicação dorsal de pasta vampiricida (varfarina), que por aliciamento mútuo (grooming) elimina de 15 a 20 morcegos por indivíduo tratado; a colheita de encéfalo deve ser feita via forame magno para evitar aerossóis de serra e o material deve ser enviado resfriado a 4°C',
        isCorrect: true,
        pedagogicalFeedback: 'Excelente! O controle populacional baseia-se no hábito gregário de lambedura da pelagem dos morcegos na colônia, onde o anticoagulante se espalha seletivamente. A colheita de tronco e cerebelo pelo forame magno sem serra óssea evita a formação de aerossóis contendo partículas virais de Lyssavirus altamente infectantes para o profissional.'
      },
      {
        id: 'opt_prev4_2',
        text: 'Dinamitar todas as cavernas e matas do município com explosivos plásticos para eliminar todos os animais silvestres',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e criminoso. A dinamitação destrói morcegos insetívoros e frugívoros benéficos e o patrimônio espeleológico, violando a legislação ambiental.'
      },
      {
        id: 'opt_prev4_3',
        text: 'O cérebro do bovino com raiva deve ser fervido em óleo de fritura antes de ser enviado pelo correio',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O calor ferve e destrói o antígeno viral e o tecido encefálico, inviabilizando a imunofluorescência direta (IFD).'
      },
      {
        id: 'opt_prev4_4',
        text: 'Morcegos hematófagos devem ser vacinados contra raiva com comprimidos mastigáveis deixados na grama',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Morcegos hematófagos alimentam-se exclusivamente de sangue de animais vivos e não ingerem iscas orais.'
      }
    ]
  },
  {
    id: 'ex_preventive_05',
    conceptId: 'concept_preventive_gta_surveillance_outbreaks',
    type: 'multiple_choice',
    prompt: 'Qual é a finalidade zoossanitária e jurídica da Guia de Trânsito Animal (GTA), e qual a obrigação legal inadiável do médico veterinário diante da suspeita clínica de uma doença da Categoria 1 (como Febre Aftosa ou IAAP)?',
    options: [
      {
        id: 'opt_prev5_1',
        text: 'A GTA é o documento oficial obrigatório para qualquer movimentação animal, garantindo rastreabilidade e cumprimento de sanidade; diante de suspeita de doença da Categoria 1, o veterinário TEM A OBRIGAÇÃO LEGAL de notificar o SVO em até 24 horas e interditar cautelarmente o trânsito da fazenda',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! A GTA é a base da rastreabilidade sanitária nacional. Diante de suspeita clínica ou epidemiológica de qualquer doença de notificação obrigatória imediata (Febre Aftosa, IAAP, Newcastle, Peste Suína Clássica), o veterinário executor tem o dever legal e ético de notificar o SVO em menos de 24 horas, bloqueando a saída de animais para prevenir a disseminação de epidemias nacionais.'
      },
      {
        id: 'opt_prev5_2',
        text: 'A GTA é um comprovante de pedágio rodoviário que só precisa ser mostrado se o pneu furar',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A GTA é o instrumento oficial de controle de defesa sanitária animal e rastreabilidade epidemiológica do país.'
      },
      {
        id: 'opt_prev5_3',
        text: 'O veterinário deve esperar 6 meses e tentar curar a febre aftosa com banho de ervas antes de avisar o MAPA',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A omissão de notificação sanitária imediata (prazo máximo de 24h) é infração sanitária grave e crime federal contra a economia pública.'
      },
      {
        id: 'opt_prev5_4',
        text: 'Animais com suspeita de febre aftosa devem ser enviados imediatamente para leilão interestadual para acelerar a venda',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Essa conduta constitui crime sanitário gravíssimo de disseminação de epizootia com graves sanções penais.'
      }
    ]
  }
];

export const PREVENTIVE_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_preventive_01_mapa_programs',
    moduleId: 'mod_preventive_medicine',
    title: 'Defesa Sanitária Oficial, Estrutura MAPA/OIE & SUASA',
    shortDescription: 'Arquitetura do SUASA, competências federativas, auditorias internacionais da OMSA e vigilância de fronteiras zoossanitárias.',
    estimatedMinutes: 18,
    order: 1,
    concepts: ['concept_preventive_mapa_surveillance'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_prev_01_th1',
        type: 'theory',
        title: 'Arquitetura da Defesa Sanitária Brasileira: O SUASA & a Inserção Global',
        contentMarkdown: `### O Sistema Unificado de Atenção à Sanidade Agropecuária (SUASA)

O Brasil é uma das maiores potências agropecuárias do planeta, liderando as exportações globais de carne bovina e frango. A sustentabilidade desse mercado repousa na credibilidade do seu sistema de defesa sanitária:
* **Competências Federativas Descentralizadas:**
  1. *Esfera Federal (MAPA / Departamento de Saúde Animal - DSA):* Coordena as diretrizes nacionais, elabora as instruções normativas dos Programas Sanitários Oficiais, gerencia os acordos bilaterais de equivalência sanitária com blocos internacionais (União Europeia, China, EUA) e fiscaliza portos, aeroportos e fronteiras internacionais (Vigiagro).
  2. *Esfera Estadual (Órgãos Estaduais de Sanidade Agropecuária - ex: CDA em SP, IMA em MG, ADAB na BA):* Responsável pela execução direta da vigilância epidemiológica ativa e passiva nos municípios, fiscalização do trânsito de animais em barreiras sanitárias móveis e fixas, controle de cadastros de rebanhos e emissão/bloqueio de GTAs, e interdição cautelar imediata de focos de doenças epizoóticas.
  3. *Esfera Municipal (Serviço de Inspeção Municipal - SIM):* Responsável pela inspeção higiênico-sanitária de estabelecimentos que processam produtos de origem animal com comercialização restrita ao município.

---

### A OMSA (Organização Mundial de Saúde Animal) & o Status Sanitário

A OMSA (antiga OIE) classifica os países segundo o risco zoossanitário para patologias críticas:
* **Status Sanitário como Ativo Comercial:** A manutenção de status como **"Zona Livre de Febre Aftosa sem Vacinação"** ou **"Risco Desprezível para Encefalopatia Espongiforme Bovina (BSE)"** abre mercados de altíssimo valor e impede barreiras sanitárias não-tarifárias protecionistas.
* **Compartimentação Sanitária:** Estratégia de biosseguridade reconhecida internacionalmente em que granjas de reprodução de aves ou suínos mantêm barreiras biológicas de nível máximo, permitindo a continuidade das exportações mesmo se o país registrar focos em aves de subsistência ou fauna silvestre em outras regiões.

\`\`\`mermaid
flowchart TD
    A["Notificação de Suspeita Epizoótica de Categoria 1 (Ex: Lesão Vesicular / Mortalidade Alta)"] --> B["Ação Imediata do Serviço Veterinário Estadual com Interdição Cautelar da Fazenda"]
    B --> C["Coleta Oficial de Amostras Biológicas por Médicos Veterinários Oficiais"]
    C --> D["Envio ao Laboratório Federal de Defesa Agropecuária (LFDA) para Diagnóstico Molecular"]
    D --> E["Confirmação Positiva: Notificação Compulsória Imediata à OMSA em até 24 Horas"]
    E --> F["Ativação do Plano de Contingência com Estabelecimento de Zona de Foco (3 km) e Vigilância (10 km)"]
    F --> G["Sacrifício Sanitário / Abate com Desinfecção Profunda e Vazio Sanitário"]
    G --> H["Preservação do Status Zoossanitário Nacional e Proteção da Saúde Pública e Comércio"]
\`\`\``
      },
      {
        id: 'sec_prev_01_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Fiscal: Frigorífico Boi Gordo (Auditoria Oficial)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Fiscalização Sanitária de Desembarque e Gestão de Suspeita Vesicular',
          patient: {
            name: 'Lote de Bovinos Interceptados',
            species: 'Bovino de Corte',
            breed: 'Nelore Comercial',
            age: 'Novilhos de 24 a 30 meses',
            weightKg: 520,
            habitatOrEnvironment: 'Carretas boiadeiras no pátio do Frigorífico SIF em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 80,
            respiratoryRateRpm: 28,
            temperatureCelsius: 39.4,
            mucousMembranes: 'Congestas com sialorreia abundante ("baba em espelho")',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Durante a inspeção ante-mortem obrigatória no desembarque de duas carretas com 80 novilhos procedentes de outro estado, o auditor fiscal federal do MAPA constatou divergência nos dados da GTA (rota incompatível). Ao examinar os animais no brete de recepção, notou 3 novilhos com intensa salivação espumosa pendente, estalido característico de boca e claudicação evidente de ambos os membros torácicos.',
          exams: [
            {
              category: 'inspecao_oficial',
              title: 'Exame Clínico Minucioso da Cavidade Bucal e Coroa do Casco',
              findings: 'Avaliação das lesões epiteliais sob luz adequada.',
              abnormalValues: [
                { parameter: 'Cavidade Oral (Língua e Gengiva)', value: 'Erosões ulceradas avermelhadas com bordas descoladas (vesículas rompidas) de 3 a 5 cm na ponta da língua', reference: 'Mucosa íntegra e lisa', status: 'critical' },
                { parameter: 'Banda Coronária dos Cascos', value: 'Vesículas intactas com líquido translúcido tenso na junção pele-casco interdigital', reference: 'Pele e casco íntegros', status: 'critical' },
                { parameter: 'Comportamento no Desembarque', value: 'Claudicação intensa e prostração por dor podal', reference: 'Deambulação normal', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Diante de lesões vesiculares e erosivas agudas com sialorreia em bovinos (suspeita clínica de Febre Aftosa ou Estomatite Vesicular), qual é a conduta mandante obrigatória do auditor fiscal do MAPA?',
          decisionOptions: [
            {
              id: 'opt_dec_prev1_1',
              label: 'Paralisar imediatamente o desembarque + Interditar o pátio do frigorífico e as carretas + Notificar com urgência a Divisão de Febre Aftosa do DSA/MAPA + Colheita oficial de epitélio e líquido vesicular para RT-qPCR no LFDA',
              description: 'Bloquear qualquer trânsito de animais e veículos, acionar a rede nacional de emergência zoossanitária e enviar amostras viáveis para diagnóstico molecular diferencial.',
              isOptimal: true,
              consequenceText: 'Conduta exemplar e legalmente irretocável! Lesões vesiculares com salivação em ruminantes constituem a maior prioridade de emergência sanitária nacional. Interditar cautelarmente o frigorífico e reter os caminhões impede que um eventual foco de Febre Aftosa se dissemine pelas carretas ou currais. A colheita de epitélio de vesículas em tampão oficial para análise no LFDA esclarece se o agente é vírus da Estomatite Vesicular ou Febre Aftosa.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Interdição cautelar imediata, contenção do lote e notificação ao Sistema de Emergência',
                mechanism: 'Bloqueio total da transmissão de vírions vesiculares por fômites ou aerossóis',
                effect: 'Mobilização de biossegurança de nível máximo e confirmação laboratorial oficial',
                clinicalMeaning: 'Prevenção de desastre sanitário e proteção do patrimônio agropecuário nacional'
              }
            },
            {
              id: 'opt_dec_prev1_2',
              label: 'Liberar os animais para abate rápido na linha comum para que as carnes fiquem congeladas antes da fiscalização saber',
              description: 'Ocultar a lesão vesicular e misturar carcaças potencialmente infectadas.',
              isOptimal: false,
              consequenceText: 'Crime hediondo contra a saúde animal e economia pública! Abater animais com suspeita vesicular contamina toda a planta do frigorífico, dispersa vírions em carnes desossadas e resulta no embargo total imediato de todas as exportações de carne do Brasil.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Ocultação dolosa de doença epizoótica de notificação obrigatória imediata',
                mechanism: 'Disseminação industrial de patógeno altamente contagioso na cadeia de frio',
                effect: 'Contaminação de subprodutos e embargo comercial mundial contra o país',
                clinicalMeaning: 'Destruição da credibilidade zoossanitária internacional e prisão dos envolvidos'
              }
            },
            {
              id: 'opt_dec_prev1_3',
              label: 'Mandar as carretas voltarem para o estado de origem pela rodovia sem avisar ninguém',
              description: 'Devolver animais doentes para a estrada.',
              isOptimal: false,
              consequenceText: 'Infração sanitária gravíssima! Devolver animais vesiculares para a estrada espalha o vírus por postos de abastecimento, pastagens lindeiras e pedágios por centenas de quilômetros.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Trânsito irregular de animais em período de viremia e eliminação viral ativa',
                mechanism: 'Aerolização e disseminação ambiental de vírions ao longo de rodovias interestaduais',
                effect: 'Surgimento de dezenas de focos secundários em múltiplos municípios',
                clinicalMeaning: 'Propagação incontrolável de epizootia'
              }
            }
          ],
          learningTakeaways: [
            'O MAPA normatiza e certifica a sanidade internacional, enquanto os órgãos estaduais executam a vigilância de campo e trânsito.',
            'Qualquer suspeita de doença vesicular exige interdição cautelar imediata e notificação ao SVO em menos de 24 horas.',
            'A compartimentação sanitária garante a continuidade do comércio internacional mesmo diante de focos em populações não industriais.'
          ]
        }
      },
      {
        id: 'sec_prev_01_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Estrutura MAPA & Defesa Oficial',
        exerciseId: 'ex_preventive_01'
      }
    ]
  },
  {
    id: 'lesson_preventive_02_pncebt_brucellosis',
    moduleId: 'mod_preventive_medicine',
    title: 'PNCEBT: Normativas de Controle & Diagnóstico da Brucelose Bovina',
    shortDescription: 'Vacinação obrigatória com B19 vs RB51, marcação a ferro quente na face esquerda, proibição em machos e triagem sorológica com AAT.',
    estimatedMinutes: 20,
    order: 2,
    concepts: ['concept_preventive_pncebt_brucellosis'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_prev_02_th1',
        type: 'theory',
        title: 'Brucella abortus, Imunoprofilaxia Oficial & Testes Sorológicos',
        contentMarkdown: `### O Patógeno & a Zoonose no Rebanho

A Brucelose Bovina é causada pela bactéria Gram-negativa intracelular facultativa **Brucella abortus**:
* **Patogênese em Fêmeas:** A bactéria possui afinidade por tecidos ricos em **Eritritol** (um polialcool de 4 carbonos sintetizado em abundância pela placenta e útero gravídico de ruminantes). Multiplica-se maciçamente nas células trofoblásticas e no lúmen das glândulas endometriais, provocando **placentite necrosante difusa com exsudato marrom ("queijo suíço") e aborto característico no terço final da gestação (7º ao 9º mês)**, seguido de retenção de placenta e endometrite crônica com infertilidade permanente.
* **Patogênese em Machos:** Provoca orquite purulenta, epididimite com dilatação cística, atrofia testicular irreversível e descarte andrológico.
* **Impacto Zoonótico:** Em humanos, causa a severa **Febre Ondulante (Febre de Malta)**, acompanhada de sudorese noturna fétida profusa, artralgias migratórias incapacitantes, osteomielite e fadiga crônica, transmitida pelo consumo de leite cru, queijos frescos não pasteurizados e contato ocupacional de veterinários com restos placentários de abortos.

---

### O Pilar Imunoprofilático do PNCEBT: B19 vs. RB51

\`\`\`mermaid
flowchart TD
    A["Bezerras Fêmeas de 3 a 8 Meses de Idade"] --> B["Vacinação Obrigatória com Amostra Viva Atenuada B19"]
    B --> C["Marcação com Ferro em Brasa na Face Esquerda da Mandíbula com Último Dígito do Ano"]
    D["Fêmeas com Mais de 8 Meses Não Vacinadas na Janela Oficial"] --> E["Vacinação Compulsória com Amostra Rugosa RB51 (Não Induz Anticorpos de Cadeia O)"]
    E --> F["Marcação na Face Esquerda da Mandíbula com a Letra 'V'"]
    G["Machos Bovinos de Qualquer Faixa Etária"] --> H["PROIBIÇÃO ABSOLUTA E LEGAL DE VACINAÇÃO COM B19 (Causa Orquite e Invalida Sorologia)"]
    I["Rebanho Adulto em Saneamento: Triagem com Antígeno Acidificado Tamponado (AAT)"] --> J["Reagentes no AAT Submetidos ao Teste Confirmatório de 2-Mercaptoetanol (2-ME)"]
    J --> K["Confirmados Reagentes: Marcação com 'P' na Face Direita e Sacrifício Sanitário em 30 Dias"]
\`\`\`

1. **Vacina B19 (Amostra Lisa Atenuada):**
   * *Obrigatoriedade:* Todas as fêmeas bovinas e bubalinas devem ser vacinadas entre **3 e 8 meses de idade** sob responsabilidade de médico veterinário credenciado.
   * *Marcação a Ferro Quente:* Na face esquerda da mandíbula com o **algarismo final do ano da vacinação** (ex: o número "4" para vacinações em 2024).
   * *Proibição em Machos:* **ESTRITAMENTE PROIBIDA EM MACHOS**. Provoca colonização testicular com orquite crônica e induz persistência de anticorpos que invalidam o diagnóstico sorológico oficial.
   * *Proibição em Fêmeas > 8 Meses:* Se aplicada tardiamente, os anticorpos vacinais persistem por anos, causando resultados falso-positivos nas provas sorológicas de aglutinação.
2. **Vacina RB51 (Amostra Rugosa Atenuada):**
   * Desprovida da cadeia polissacarídica O do Lipopolissacarídeo (LPS). Confere imunidade celular sólida sem induzir os anticorpos aglutinantes contra o antígeno O que os testes diagnósticos convencionais detectam.
   * *Indicação:* Fêmeas com mais de 8 meses não vacinadas entre 3 e 8 meses, ou em rebanhos endêmicos para revacinação de adultas.
   * *Marcação:* Letra **"V"** a ferro em brasa na face esquerda da mandíbula.

---

### Diagnóstico Sorológico Oficial

* **Triagem de Rebanho:** **Teste do Antígeno Acidificado Tamponado (AAT)** em placa de vidro. Rápido, de alta sensibilidade.
* **Monitoramento Leiteiro:** **Teste do Anel em Leite (TAL)** realizado diretamente nos tanques comunitários de leite cru das propriedades.
* **Confirmação:** Amostras reagentes no AAT devem ser submetidas ao **Teste do 2-Mercaptoetanol (2-ME)** ou **Fixação de Complemento (FC)** em laboratório oficial. O 2-ME quebra as pontes dissulfeto dos anticorpos da classe IgM (que causam reações falso-positivas inespecíficas), dosando estritamente os anticorpos da classe IgG1 específicos de infecção ativa.
* **Destino dos Reagentes:** Animais positivos no 2-ME são marcados a ferro quente com a letra **"P" na face direita da mandíbula** e devem ser sacrificados sob supervisão oficial em até **30 dias**.`
      },
      {
        id: 'sec_prev_02_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Fiscal: Fazenda Rio Pardo (Saneamento de Brucelose)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Gestão Sorológica e Sanitária de Foco de Brucelose em Gado Leiteiro',
          patient: {
            name: 'Rebanho Leiteiro Fazenda Rio Pardo',
            species: 'Bovino Leiteiro',
            breed: 'Girolando 5/8',
            age: 'Lote de 140 matrizes em lactação',
            weightKg: 580,
            habitatOrEnvironment: 'Pasto de braquiária com ordenha mecânica canalizada em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 68,
            respiratoryRateRpm: 22,
            temperatureCelsius: 38.6,
            mucousMembranes: 'Róseas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Na auditoria mensal de rotina do laticínio regional, o Teste do Anel em Leite (TAL) realizado no tanque de expansão comunitário da fazenda resultou intensamente positivo (formação de anel azul profundo de aglutinação na interface creme-leite). O veterinário credenciado pelo PNCEBT realizou a triagem individual de todas as 140 vacas com o Teste do Antígeno Acidificado Tamponado (AAT): 6 matrizes de alta produção apresentaram aglutinação nítida (positivas no AAT). O proprietário relata histórico de dois abortos no 8º mês de gestação nos últimos 90 dias.',
          exams: [
            {
              category: 'sorologia_oficial',
              title: 'Triagem com AAT e Teste Confirmatório de 2-Mercaptoetanol (2-ME)',
              findings: 'Painel sorológico oficial regulamentado pelo MAPA.',
              abnormalValues: [
                { parameter: 'Teste do Anel em Leite (TAL) no Tanque', value: 'POSITIVO (Anel azul nítido na camada de creme)', reference: 'Negativo (Coluna branca homogênea)', status: 'critical' },
                { parameter: 'Triagem Individual com AAT (6 vacas)', value: 'POSITIVO com aglutinação macroscópica em 4 minutos', reference: 'Ausência de aglutinação (Negativo)', status: 'critical' },
                { parameter: 'Teste Confirmatório 2-ME das 6 vacas', value: '4 matrizes com título ≥ 1:100 (Positivas Definitivas); 2 matrizes com título < 1:25 (Negativas)', reference: 'Título < 1:25', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com a confirmação inequívoca de 4 vacas reagentes positivas no teste confirmatório de 2-ME pelo PNCEBT, qual é a conduta técnica e legal obrigatória?',
          decisionOptions: [
            {
              id: 'opt_dec_prev2_1',
              label: 'Marcar as 4 vacas positivas com ferro quente na face direita com a letra "P" + Isolar os animais imediatamente + Providenciar o sacrifício sanitário ou abate sob SIF em até 30 dias + Retestar o rebanho restante a cada 60-90 dias',
              description: 'Cumprir as determinações do PNCEBT para eliminação de focos, marcação indelével para evitar comércio ilegal e saneamento contínuo até dois testes negativos consecutivos.',
              isOptimal: true,
              consequenceText: 'Excelente aplicação das normativas sanitárias oficiais! A marcação com a letra "P" na face direita da mandíbula é uma exigência legal para impedir que animais brucélicos sejam vendidos ilegalmente para outros produtores. O sacrifício sanitário em até 30 dias elimina a fonte biológica de eliminação da bactéria no leite e nos restos placentários. O saneamento quinzenal/mensal sucessivo garante a certificação do rebanho como livre.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Marcação com "P", sacrifício em 30 dias e retestagem sistemática do lote',
                mechanism: 'Extirpação física dos animais infectados eliminadores de Brucella abortus',
                effect: 'Eliminação da contaminação do leite cru e bloqueio da transmissão venérea e horizontal',
                clinicalMeaning: 'Saneamento sanitário da propriedade e conformidade plena com o MAPA'
              }
            },
            {
              id: 'opt_dec_prev2_2',
              label: 'Aplicar a vacina B19 nas vacas positivas adultas e em todos os touros para curar a infecção e vender o leite sem pasteurizar',
              description: 'Prática ilegal que causa orquite em touros e espalha zoonose pelo leite.',
              isOptimal: false,
              consequenceText: 'Erro gravíssimo com consequências penais! Vacina B19 não cura animais já infectados, é formalmente proibida em machos e a venda de leite com Brucella viva constitui crime contra a saúde pública por disseminação de Febre Ondulante em seres humanos.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Vacinação ilegal de animais adultos/machos e comercialização de leite contaminado',
                mechanism: 'Persistência da infecção zoonótica com risco de contágio de consumidores',
                effect: 'Surto de Febre Ondulante em humanos e destruição do aparelho reprodutor dos touros',
                clinicalMeaning: 'Interdição judicial da propriedade e perda do registro profissional'
              }
            },
            {
              id: 'opt_dec_prev2_3',
              label: 'Raspar a marcação da GTA e enviar as 4 vacas para um leilão de matrizes em outro município',
              description: 'Comercialização dolosa de animais infectados com falsificação de documentos.',
              isOptimal: false,
              consequenceText: 'Crime federal contra a defesa sanitária e estelionato! Disseminar animais brucélicos deliberadamente acarreta prisão em flagrante e cassação definitiva da inscrição estadual da fazenda.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Comercialização criminosa de animais reagentes positivos para Brucelose',
                mechanism: 'Introdução da bactéria zoonótica em plantéis indenes da região',
                effect: 'Disseminação de surtos de aborto em rebanhos vizinhos',
                clinicalMeaning: 'Processo-crime federal e indenização civil milionária'
              }
            }
          ],
          learningTakeaways: [
            'A B19 é exclusiva para bezerras de 3 a 8 meses; sua aplicação em machos é estritamente proibida por lei.',
            'A vacina RB51 é a alternativa oficial para fêmeas adultas por não interferir nos testes sorológicos de aglutinação.',
            'Animais reagentes positivos no 2-ME devem ser marcados com "P" na face direita e sacrificados sob supervisão oficial em até 30 dias.'
          ]
        }
      },
      {
        id: 'sec_prev_02_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: PNCEBT & Controle da Brucelose',
        exerciseId: 'ex_preventive_02'
      }
    ]
  },

  {
    id: 'lesson_preventive_03_pncebt_tuberculosis',
    moduleId: 'mod_preventive_medicine',
    title: 'PNCEBT: Vigilância e Diagnóstico da Tuberculose Bovina (Mycobacterium bovis)',
    shortDescription: 'Etiologia, provas de tuberculinização intradérmica (TCS, TPC, TCC), cutimetria de mola, anergia imunológica e abate sanitário.',
    estimatedMinutes: 20,
    order: 3,
    concepts: ['concept_preventive_pncebt_tuberculosis'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_prev_03_th1',
        type: 'theory',
        title: 'Bases Imunológicas, Fisiopatologia e Diagnóstico da Tuberculose Bovina',
        contentMarkdown: `### Etiologia e Dinâmica de Infecção do *Mycobacterium bovis*

A tuberculose bovina é uma antropozoonose crônica e debilitante provocada pelo *Mycobacterium bovis*, bacilo álcool-ácido resistente (BAAR) com parede celular extraordinariamente lipídica, rica em **ácidos micólicos**:
* **Vias de Transmissão:**
  1. *Aerógena (Respiratória):* Principal via em bovinos confinados ou semiconfinados, mediante inalação de aerossóis e gotículas contendo bacilos viáveis eliminados por animais doentes com tosse.
  2. *Digestiva:* Ingestão de leite cru, colostro ou água contaminada com fezes ou secreções infectadas. Principal via de transmissão para bezerros lactentes e para a espécie humana (consumo de queijos e leite não pasteurizado).
* **Fisiopatologia Imune e Granuloma Tuberculóide:**
  1. O bacilo é fagocitado por macrófagos alveolares, mas resiste à destruição intracelular ao inibir a fusão fago-lisossomal.
  2. Instala-se uma resposta imune celular mediada por **linfócitos Th1**, com liberação de IFN-gama e TNF-alfa, que recrutam monócitos adicionais e induzem sua transformação em **células epitelioides** e **células gigantes multinucleadas de Langhans**.
  3. Forma-se o **Complexo Primário de Ghon** (lesão pulmonar circunscrita e linfadenite satélite nos linfonodos retrofaríngeos, bronquiais ou mediastínicos), com necrose caseosa central ("tubérculo") circundada por uma cápsula de tecido conjuntivo fibroso e eventual calcificação distrófica.
  4. Animais em estado avançado ou com coinfecções imunossupressoras sofrem liquefação do caseum e disseminação hematógena/miliar, entrando em estado de **anergia imunológica** (ausência de resposta celular cutânea a antígenos).

---

### Provas Tuberculínicas Oficiais do PNCEBT (IN MAPA nº 19/2016)

O diagnóstico oficial baseia-se na indução de uma reação de **Hipersensibilidade Tardia (Tipo IV de Gell e Coombs)** provocada pela injeção intradérmica de Derivado Proteico Purificado (PPD):

| Prova Tuberculínica | Rebanho Indicado | Antígeno & Local de Aplicação | Regra de Interpretação (72 ± 6h) |
| :--- | :--- | :--- | :--- |
| **Teste Cervical Simples (TCS)** | Triagem e confirmação em gado de leite e corte | PPD Bovina (0.1 mL intradérmica) na tábua do pescoço | $Δ < 2.0{ mm}$: Negativo<br>$2.0 ≤ Δ ≤ 3.9{ mm}$: Inconclusivo<br>$Δ ≥ 4.0{ mm}$: Positivo |
| **Teste da Prega Caudal (TPC)** | Exclusivo para triagem em rebanhos de corte | PPD Bovina (0.1 mL intradérmica) no terço médio da prega caudal interna | Palpação/visualização: Qualquer aumento palpável ou visível é considerado Reagente |
| **Teste Cervical Comparativo (TCC)** | Confirmação de inconclusivos do TCS, reatores no TPC e certificação livre | PPD Aviária (superior, 0.1 mL) + PPD Bovina (inferior, 12-15 cm abaixo, 0.1 mL) no pescoço | Negativo: $Δ B < 2.0{ mm}$ ou $Δ B < Δ A$<br>Inconclusivo: $2.0 ≤ Δ B ≤ 3.9{ mm}$ e $(Δ B - Δ A) < 2.0{ mm}$<br>**Positivo:** $Δ B - Δ A ≥ 4.0{ mm}$ |

* **Regra de Ouro da Janela Biológica (Prevenção de Falsos-Negativos por Dessensibilização):** Qualquer reteste tuberculínico intradérmico deve respeitar um intervalo mínimo obrigatório de **60 a 90 dias** após a prova anterior. Inoculações em intervalos menores encontram os clones de linfócitos T de memória depletados no tecido conjuntivo cutâneo, gerando anergia iatrogênica transitória.
* **Proibição Absoluta de Tratamento:** É estritamente vedado pelo MAPA o tratamento quimioterápico da tuberculose em animais de produção (uso de isoniazida, rifampicina ou estreptomicina), em decorrência do risco crítico de emergência de cepas multirresistentes transmissíveis à população humana e geração de resíduos tóxicos no leite e na carne.
* **Destino dos Animais Reagentes:** Marcação compulsória a ferro em brasa no lado direito da cara com a letra **"T"** inscrita em um círculo de 8 cm de diâmetro. Isolamento imediato do lote e **sacrifício sanitário compulsório em até 30 dias** em frigorífico sob inspeção federal/estadual com condenação total ou parcial da carcaça e vísceras conforme o nível de disseminação das lesões caseosas.

\`\`\`mermaid
flowchart TD
    A["Inalação de Mycobacterium bovis ou Ingestão de Leite Cru Infectado"] --> B["Fagocitose por Macrófagos Alveolares sem Lise Fago-lisossomal"]
    B --> C["Resposta Celular Th1 com Granuloma Tuberculóide e Necrose Caseosa Central"]
    C --> D["Animal Sensibilizado com Linfócitos T de Memória Circulantes"]
    D --> E["Inoculação Intradérmica Oficial de PPD Bovina e Aviária (TCC)"]
    E --> F["Leitura Cutimétrica de Mola Rigorosa aos 72 ± 6 Horas"]
    F --> G{"Diferença Delta B - Delta A"}
    G -->|"Delta B - Delta A < 2.0 mm"| H["Negativo ou Sensibilização por Micobactérias Ambientais Atípicas"]
    G -->|"2.0 mm <= Delta B - Delta A < 4.0 mm"| I["Inconclusivo: Quarentena e Reteste Obrigatório após 60-90 Dias"]
    G -->|"Delta B - Delta A >= 4.0 mm"| J["Positivo: Marcação 'T' na Face Direita e Abate Sanitário em 30 Dias"]
\`\`\``
      },
      {
        id: 'sec_prev_03_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Fiscal: Fazenda Santa Tereza (Cutimetria do TCC)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Interpretação Oficial de Teste Cervical Comparativo (TCC) e Diagnóstico de Tuberculose Bovina',
          patient: {
            name: 'Mimosa da Colina (Matriz Girolando 7/8)',
            species: 'Bovino Leiteiro',
            breed: 'Girolando',
            age: '5 anos e 8 meses',
            weightKg: 580,
            habitatOrEnvironment: 'Galpão compost barn na Fazenda Santa Tereza em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 76,
            respiratoryRateRpm: 32,
            temperatureCelsius: 39.1,
            mucousMembranes: 'Pálidas com tempo de preenchimento capilar normal',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Vaca de alta lactação (140 DEL) apresentando emaciação crônica progressiva (escore corporal 2.25/5.0), tosse produtiva seca intermitente aos esforços e polipneia. Há 70 dias, o Teste Cervical Simples (TCS) acusou aumento de espessura de 2.8 mm (resultado inconclusivo). O animal foi isolado em piquete sanitário aguardando a janela regulamentar de 60 dias para realização do Teste Cervical Comparativo (TCC) pelo Médico Veterinário Habilitado.',
          exams: [
            {
              category: 'tuberculinizacao_oficial',
              title: 'Cutimetria de Mola no Teste Cervical Comparativo (72 ± 6 horas)',
              findings: 'Inoculação intradérmica de 0.1 mL de PPD Aviária (sítio superior) e 0.1 mL de PPD Bovina (sítio inferior, 13 cm de distância).',
              abnormalValues: [
                { parameter: 'PPD Aviária: Medida Basal (A0) vs 72h (A72)', value: 'A0 = 6.2 mm | A72 = 7.4 mm -> ΔA = 1.2 mm', reference: 'ΔA < 2.0 mm', status: 'normal' },
                { parameter: 'PPD Bovina: Medida Basal (B0) vs 72h (B72)', value: 'B0 = 6.4 mm | B72 = 12.0 mm -> ΔB = 5.6 mm', reference: 'ΔB < 2.0 mm', status: 'critical' },
                { parameter: 'Diferença Diagnóstica do TCC (ΔB - ΔA)', value: 'ΔB - ΔA = 4.4 mm (Faixa de Positividade: ≥ 4.0 mm)', reference: 'ΔB - ΔA < 2.0 mm (Negativo)', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com base nas leituras cutimétricas regulamentadas pela IN MAPA nº 19/2016 (ΔB - ΔA = 4.4 mm ≥ 4.0 mm), qual é a classificação sanitária do animal e a conduta oficial legal obrigatória?',
          decisionOptions: [
            {
              id: 'opt_dec_prev3_1',
              label: 'Classificar como Reagente Positivo + Marcar a face direita com a letra "T" em brasa + Isolar a matriz e notificar o órgão estadual + Encaminhar para abate sanitário sob SIF em até 30 dias',
              description: 'Cumprir rigorosamente a IN MAPA 19/2016 com eliminação da fonte de Mycobacterium bovis e inspeção post-mortem oficial.',
              isOptimal: true,
              consequenceText: 'Decisão impecável e plenamente alinhada com o PNCEBT! O aumento diferencial de 4.4 mm comprova hipersensibilidade específica ao M. bovis. A marcação com a letra "T" na face direita é mandatória para impedir a venda clandestina do animal. O sacrifício sanitário em até 30 dias elimina a fonte de eliminação de bacilos no leite e aerossóis, preservando a saúde do rebanho e a saúde pública.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Identificação e confirmação fidedigna do TCC (ΔB - ΔA = 4.4 mm ≥ 4.0 mm)',
                mechanism: 'Retirada e marcação oficial da vaca infectada com abate sanitário em 30 dias',
                effect: 'Eliminação da contaminação do leite cru e bloqueio de transmissão aerógena',
                clinicalMeaning: 'Saneamento epidemiológico do rebanho leiteiro e proteção da saúde pública'
              }
            },
            {
              id: 'opt_dec_prev3_2',
              label: 'Prescrever Isoniazida (10 mg/kg VO por 6 meses) associada a Rifampicina para curar a vaca e evitar o abate de um animal de alta produção',
              description: 'Tratamento quimioterápico proibido por lei no Brasil.',
              isOptimal: false,
              consequenceText: 'Crime sanitário gravíssimo! O tratamento quimioterápico de bovinos com fármacos tuberculostáticos é expressamente proibido pelo MAPA devido ao risco extremo de indução de cepas multirresistentes transmissíveis ao ser humano e resíduos no leite e carne.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Prescrição ilícita de quimioterápicos antituberculose em animal de produção',
                mechanism: 'Manutenção de animal bacilífero no plantel com indução de resistência bacteriana',
                effect: 'Contaminação do leite comercial e risco de surto zoonótico com superbactérias',
                clinicalMeaning: 'Infração sanitária gravíssima, cassação da habilitação no PNCEBT e processo criminal'
              }
            },
            {
              id: 'opt_dec_prev3_3',
              label: 'Classificar como inconclusivo por haver reação também à PPD aviária e agendar novo TCC para daqui a 7 dias',
              description: 'Erro técnico duplo: ignora o cálculo do delta e desrespeita o intervalo biológico para reteste.',
              isOptimal: false,
              consequenceText: 'Erro técnico grosseiro! A positividade do TCC é dada pelo delta diferencial (ΔB - ΔA = 4.4 mm ≥ 4.0 mm). Além disso, repetir a prova cutânea após 7 dias resulta em falso-negativo por anergia dos linfócitos de memória (janela mínima obrigatória de 60 a 90 dias), permitindo que um animal bacilífero continue na linha de ordenha.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Interpretação errônea dos cortes e desconhecimento da anergia cutânea por retestagem precoce',
                mechanism: 'Liberação indevida de vaca infectada para a ordenha mecânica',
                effect: 'Disseminação da tuberculose para outros animais e bezerros através do leite',
                clinicalMeaning: 'Falha grave de vigilância sanitária com ampliação do foco na bacia leiteira'
              }
            }
          ],
          learningTakeaways: [
            'No TCC, o diagnóstico de animal positivo é determinado pela fórmula matemática: ΔB - ΔA ≥ 4.0 mm.',
            'A reação à PPD aviária reflete contato com micobactérias atípicas/ambientais; o TCC discrimina com precisão a hipersensibilidade específica ao M. bovis.',
            'O tratamento de bovinos com tuberculostáticos é estritamente proibido; animais reagentes devem receber a marca "T" em brasa na face direita e serem sacrificados em até 30 dias.'
          ]
        }
      },
      {
        id: 'sec_prev_03_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: PNCEBT & Provas Tuberculínicas',
        exerciseId: 'ex_preventive_03'
      }
    ]
  },
  {
    id: 'lesson_preventive_04_pncrh_rabies_control',
    moduleId: 'mod_preventive_medicine',
    title: 'PNCRH: Profilaxia da Raiva dos Herbívoros e Controle do Desmodus rotundus',
    shortDescription: 'Patogenia neurotrópica, apresentação paralítica em bovinos, morcego hematófago, colheita via forame magno com EPI e pasta vampiricida.',
    estimatedMinutes: 20,
    order: 4,
    concepts: ['concept_preventive_pncrh_rabies_control'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_prev_04_th1',
        type: 'theory',
        title: 'Vigilância, Fisiopatologia e Profilaxia da Raiva dos Herbívoros (PNCRH)',
        contentMarkdown: `### O Vírus Rábico e o Ciclo Silvestre Desmodino

A raiva dos herbívoros é uma zoonose letal de curso agudo causada por um **Lyssavirus** (família *Rhabdoviridae*), vírus de genoma de RNA fita simples envelopado com alta afinidade pelas células do sistema nervoso:
* **Vetor Primário na Pecuária Brasileira:** O morcego hematófago ***Desmodus rotundus***. Habita cavernas naturais, bueiros sob rodovias, minas desativadas, ocos de árvores e túneis ferroviários.
  * Hábito alimentar estritamente noturno e hematófago estrito (ingere de 20 a 30 mL de sangue por noite).
  * Possui incisivos afiadíssimos que realizam mordeduras indolores em formato de cratera ou meia-lua na tábua do pescoço, garupa, vassoura da cauda ou barbela dos bovinos e equinos.
  * A saliva do morcego contém **draculina**, uma glicoproteína com potente ação anticoagulante e anestésica local, além de excretar altas cargas de partículas virais quando o quiróptero está infectado.

---

### Patogenia Neurotrópica e Apresentação Clínica em Ruminantes

Diferente de carnívoros (cães e gatos), nos quais a apresentação furiosa é frequente, em bovinos e ovinos a afecção manifesta-se quase invariavelmente sob a forma de **Raiva Paralítica**:
1. **Inoculação e Centripetação Axonal:** O vírus inoculado na derme/músculo liga-se a receptores nicotínicos de acetilcolina na placa motora e penetra nas terminações nervosas periféricas.
2. **Propagação Retrógrada:** Desloca-se por fluxo axoplasmático retrógrado em direção aos cornos dorsais da medula espinhal e ao tronco encefálico na velocidade média de **1 a 3 mm/hora**, escapando da vigilância do sistema imune humoral sistêmico.
3. **Replicação no SNC:** Ao atingir o encéfalo, replica-se maciçamente nos neurônios do hipocampo (corno de Amon), tálamo e células de Purkinje do cerebelo, formando inclusões intracitoplasmáticas eosinofílicas patognomônicas: os **Corpúsculos de Negri**.
4. **Sinais Clínicos Característicos:**
   * Isolamento do rebanho, hiperestesia e midríase pupilar bilateral.
   * **Ptialismo Profuso (Sialorreia):** Saliva espumosa abundante escorrendo pela comissura labial, resultante da **paralisia dos músculos da deglutição (faringe e laringe)**, e não de hiperprodução salivar.
   * Atonia ruminal e **tenesmo retal** com eliminação de fezes secas e escurecidas em cíbalas.
   * **Incoordenação e Paraplegia:** Andar cambaleante com cruzamento dos membros pélvicos ("andar ébrio"), perda de tônus da cauda, decúbito esternal com desvio lateral do pescoço, progredindo para decúbito lateral com movimentos espásticos de pedalagem e opistótono.
   * Óbito inexorável por paralisia dos centros respiratórios e vasomotores no bulbo em **3 a 7 dias** após o início dos sintomas.

---

### Biossegurança na Necropsia, Diagnóstico Oficial e Ações do PNCRH (MAPA)

* **Risco Biológico e EPI Nível 3:** A colheita de encéfalo em suspeita de raiva exige vacinação pré-exposição do operador com titulação protetora (> 0.5 UI/mL), além de macacão impermeável, protetor facial com máscara PFF2/N95 e luvas de malha de aço sob luvas de borracha nitrílica.
* **Técnica de Coleta sem Serrar o Crânio:** Deve-se desarticular a cabeça na articulação atlanto-occipital e extrair fragmentos de cerebelo, bulbo e córtex **através do forame magno** utilizando colher de sobremesa descartável ou espátula sanitária, sem o uso de serras elétricas ou manuais, eliminando o risco fatal de dispersão de aerossóis contendo vírus rábico viável.
* **Provas Laboratoriais de Referência:** A amostra fresca (refrigerada a 4°C em caixa isotérmica com gelo reciclável, nunca congelada ou em formol) é submetida à **Imunofluorescência Direta (IFD)** e à **Prova Biológica de Inoculação em Camundongos (PBIC)** ou RT-qPCR em laboratório credenciado.
* **Controle Seletivo do Vetor (*Desmodus rotundus*):**
  1. *Pasta Vampiricida à Base de Varfarina 1%:* A aplicação de pasta anticoagulante no dorso de morcegos capturados em redes de neblina (mist nets) pelas equipes oficiais aproveita o comportamento de **lambedura social mútuo (grooming)** na colônia. Um quiróptero tratado é capaz de intoxicar e eliminar de **10 a 20 outros indivíduos** ao retornar ao abrigo.
  2. *Aplicação Tópica em Mordeduras Frescas:* Em fazendas com alto índice de mordeduras, a pasta pode ser aplicada cuidadosamente ao redor das lesões recentes no gado antes do anoitecer.
* **Vacinação Compulsória em Foco e Perifoco:** Confirmação de caso de raiva desencadeia vacinação obrigatória de todos os herbívoros (bovinos, equinos, asininos, ovinos e caprinos) em um **raio mínimo de 3 a 5 km** ao redor do foco epizoótico, com revacinação semestral ou anual sistemática.

\`\`\`mermaid
flowchart TD
    A["Mordedura Hematófaga por Desmodus rotundus com Vírus Rábico na Saliva"] --> B["Entrada em Terminações Nervosas e Centripetação Axonal Retrógrada"]
    B --> C["Ascensão pela Medula Espinhal em Direção ao Tronco Encefálico (1-3 mm/h)"]
    C --> D["Replicação Neuronal no Encéfalo com Formação de Corpúsculos de Negri"]
    D --> E["Paralisia de Nervos Cranianos: Paralisia Bulbar, Disfagia e Sialorreia Espumosa"]
    E --> F["Ataxia Proprioceptiva, Paraplegia dos Membros Pélvicos e Decúbito com Pedalagem"]
    F --> G["Óbito do Bovino por Paralisia Respiratória em 3 a 7 Dias"]
    G --> H["Colheita de Encéfalo via Forame Magno com EPI Nível 3 sem Uso de Serra"]
    H --> I["Confirmação por Imunofluorescência Direta (IFD) no Laboratório Oficial"]
    I --> J["Medidas do PNCRH: Pasta Vampiricida (Varfarina) em Abrigos + Vacinação em Raio de 3-5 km"]
\`\`\``
      },
      {
        id: 'sec_prev_04_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Fiscal: Fazenda Barreiro Alto (Abordagem de Raiva)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Abordagem de Suspeita de Raiva Bovina, Biossegurança na Necropsia e Intervenção do PNCRH',
          patient: {
            name: 'Garrote Campeiro (Nelore PO)',
            species: 'Bovino de Corte',
            breed: 'Nelore',
            age: '16 meses',
            weightKg: 390,
            habitatOrEnvironment: 'Pastagem de braquiária com capão de mata e bueiros de rodovia em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 92,
            respiratoryRateRpm: 18,
            temperatureCelsius: 38.3,
            mucousMembranes: 'Secas com abundante saliva viscosa escorrendo pela boca',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'Garrote Nelore encontrado em decúbito esternal com apoio da cabeça no flanco, olhar fixo, midríase bilateral e sialorreia espumosa contínua decorrente de paralisia dos músculos da deglutição. Apresenta tenesmo retal com fezes secas em cíbalas e atonia ruminal completa. O vaqueiro relata histórico de mordeduras recentes por morcegos na garupa e pescoço. O animal evolui para decúbito lateral com movimentos espásticos involuntários de pedalagem e vem a óbito poucas horas após o início do exame clínico.',
          exams: [
            {
              category: 'necropsia_biosseguranca',
              title: 'Inspeção Post-Mortem e Colheita do Sistema Nervoso Central',
              findings: 'Protocolo de contenção de risco biológico nível 3 para zoonose letal.',
              abnormalValues: [
                { parameter: 'Inspeção Externa da Pele', value: 'Cicatrizes e feridas circulares com crostas serossanguinolentas na tábua do pescoço (mordedura de morcego)', reference: 'Pele íntegra', status: 'critical' },
                { parameter: 'Sinais Neurológicos Prematuros', value: 'Paralisia laringofaríngea, paraplegia do trem posterior e pedalagem', reference: 'Tônus motor e reflexos preservados', status: 'critical' },
                { parameter: 'Técnica de Acesso ao Encéfalo', value: 'Desarticulação atlanto-occipital e colheita via forame magno com espátula descartável (sem serra)', reference: 'Ausência de bioaerossóis infectantes', status: 'normal' }
              ]
            }
          ],
          challengePrompt: 'Confirmada a morte com sintomatologia clássica de raiva paralítica bovina e mordeduras de morcego, qual é a conduta de biossegurança de colheita e as medidas oficiais do PNCRH a serem adotadas?',
          decisionOptions: [
            {
              id: 'opt_dec_prev4_1',
              label: 'EPI nível 3 (PFF2/N95, protetor facial, luvas anticorte) + Extração de encéfalo via forame magno sem uso de serra + Envio refrigerado a 4°C para IFD no LFDA + Notificação oficial com vacinação de herbívoros num raio de 3-5 km e controle de abrigos com pasta de varfarina',
              description: 'Protocolo perfeito de biossegurança ocupacional e defesa sanitária conforme as diretrizes do PNCRH/MAPA.',
              isOptimal: true,
              consequenceText: 'Conduta exemplar de altíssima segurança e eficácia sanitária! A extração via forame magno sem uso de serra impediu a formação de bioaerossóis com vírus rábico viável, protegendo a equipe médica. O envio refrigerado garantiu o diagnóstico preciso por Imunofluorescência Direta (IFD). A vacinação em raio de 3 a 5 km e a captura com aplicação de pasta vampiricida de varfarina 1% no dorso de Desmodus rotundus interromperam a cadeia de transmissão na região.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Biossegurança nível 3, extração via forame magno e ativação imediata do PNCRH',
                mechanism: 'Preservação de amostra diagnóstica viável com contenção de exposição ocupacional humana',
                effect: 'Confirmação diagnóstica célere e bloqueio vacinal territorial de rebanhos susceptíveis',
                clinicalMeaning: 'Eliminação do risco de óbito humano por raiva e contenção do foco epizoótico na região'
              }
            },
            {
              id: 'opt_dec_prev4_2',
              label: 'Serrar o crânio ao ar livre sem máscara de proteção respiratória, colocar o cérebro em formol a 10% e vacinar apenas o piquete do animal',
              description: 'Grave violação de biossegurança ocupacional e erro na conservação de amostra para virologia.',
              isOptimal: false,
              consequenceText: 'Erro gravíssimo de biossegurança! Serrar a calota craniana em caso de raiva dispersa aerossóis com vírus viável, com altíssimo risco de inalação ou contaminação conjuntival fatal para a equipe. Além disso, a fixação de todo o encéfalo em formol inviabiliza a prova padrão de Imunofluorescência Direta (IFD), exigindo amostra fresca refrigerada.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de serra em tecido nervoso rábico e fixação incorreta em formalina',
                mechanism: 'Dispersão de bioaerossóis letais e desnaturação de epitopos virais para a IFD',
                effect: 'Exposição letal de profissionais de saúde e anulação do diagnóstico virológico padrão',
                clinicalMeaning: 'Infração sanitária gravíssima com risco iminente de óbito de profissionais e familiares'
              }
            },
            {
              id: 'opt_dec_prev4_3',
              label: 'Enterrar o animal superficialmente no pasto sem colher amostras e aguardar o aparecimento de novos casos para chamar o serviço oficial',
              description: 'Omissão de notificação e descarte irregular de carcaça com patógeno de alta virulência.',
              isOptimal: false,
              consequenceText: 'Conduta omissa inaceitável! O enterro superficial permite que carnívoros silvestres e cães desenterrem a carcaça e se contaminem, enquanto a ausência de notificação e diagnóstico impede o bloqueio vacinal, resultando na perda de dezenas de outros animais na vizinhança.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Omissão de diagnóstico e enterramento clandestino de carcaça',
                mechanism: 'Exposição de carnívoros à carcaça e atraso na imunização em massa do perifoco',
                effect: 'Proliferação descontrolada do foco epizoótico com mortalidade em massa de bovinos',
                clinicalMeaning: 'Responsabilização penal por crime de omissão sanitária e prejuízo econômico devastador'
              }
            }
          ],
          learningTakeaways: [
            'A apresentação clássica da raiva nos herbívoros é a forma paralítica, caracterizada por ptialismo por disfagia laringofaríngea, tenesmo retal e paraplegia progressiva.',
            'A colheita de encéfalo para pesquisa de raiva deve ser realizada pelo forame magno sem uso de serras elétricas ou manuais para eliminar a formação de aerossóis infectantes.',
            'O controle oficial de Desmodus rotundus envolve captura seletiva e aplicação dorsal de pasta vampiricida de varfarina 1%, explorando o mutualismo de autolimpeza (grooming) da colônia.'
          ]
        }
      },
      {
        id: 'sec_prev_04_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: PNCRH & Profilaxia da Raiva',
        exerciseId: 'ex_preventive_04'
      }
    ]
  },
  {
    id: 'lesson_preventive_05_gta_surveillance_outbreaks',
    moduleId: 'mod_preventive_medicine',
    title: 'Guia de Trânsito Animal (GTA), Notificação Compulsória e Gestão de Focos Epizoóticos',
    shortDescription: 'Regulamentação de trânsito, emissão da e-GTA, doenças de notificação compulsória (Categoria 1 em < 24h) e plano de contingência para focos.',
    estimatedMinutes: 20,
    order: 5,
    concepts: ['concept_preventive_gta_surveillance_outbreaks'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_prev_05_th1',
        type: 'theory',
        title: 'A Guia de Trânsito Animal (GTA) e a Intervenção Oficial em Focos Epizoóticos',
        contentMarkdown: `### A Guia de Trânsito Animal (GTA): O Alicerce da Rastreabilidade Sanitária

A **Guia de Trânsito Animal (GTA)** é o documento oficial e obrigatório para a movimentação intraestadual e interestadual de qualquer espécie animal no território brasileiro (bovinos, búfalos, equídeos, suínos, aves, caprinos, ovinos, animais aquáticos e fauna silvestre):
* **Finalidades do Trânsito Registradas:** Abate imediato, engorda/recria, reprodução, exposição, leilão, esporte ou quarentena.
* **Elementos Jurídicos e Sanitários Fundamentais:**
  1. *Origem e Destino Georreferenciados:* Código de cadastro dos estabelecimentos no sistema informatizado estadual (ex: GEDAVE em SP, SIDASC em SC, SIAPEC em MT).
  2. *Discriminação do Lote:* Espécie, faixa etária, sexo e quantidade exata de animais embarcados.
  3. *Comprovação Sanitária Vinculada:* Exigência de vacinações obrigatórias registradas e dentro do prazo de validade (ex: brucelose para fêmeas de 3 a 8 meses; febre aftosa quando aplicável) e laudos de exames negativos oficiais anexos (ex: AIE e Mormo para equídeos válidos por 60 dias; Tuberculose e Brucelose para reprodutores).
  4. *Veículo e Lacre:* Identificação do transportador, placa do veículo rodoviário e numeração dos lacres sanitários apostos na carroceria boiadeira.
* **Emissão Informatizada (e-GTA):** Emitida exclusivamente por Médicos Veterinários do Serviço Veterinário Oficial (SVO) ou por Médicos Veterinários Habilitados da iniciativa privada devidamente credenciados junto à Superintendência Federal de Agricultura (SFA/MAPA). O trânsito com GTA vencida, adulterada ou inexistente configura infração sanitária grave sujeita à apreensão da carga, auto de infração e sacrifício cautelar.

---

### Classificação de Notificação Compulsória (Instrução Normativa MAPA nº 50/2013)

O Brasil adota a classificação epidemiológica internacional preconizada pela OMSA para doenças de notificação compulsória:
* **Categoria 1 (Notificação Imediata à Qualquer Suspeita - Prazo Máximo de 24 Horas):**
  * Doenças exóticas, erradicadas ou com gravíssimo impacto no patrimônio pecuário, comércio internacional ou saúde pública.
  * *Exemplos Críticos:* **Febre Aftosa** (qualquer síndrome vesicular), **Peste Suína Clássica (PSC)** e **Peste Suína Africana (PSA)**, **Influenza Aviária de Alta Patogenicidade (IAAP)**, **Doença de Newcastle velogênica**, **Mormo (*Burkholderia mallei*)**, **Encefalopatia Espongiforme Bovina (EEB / Mal da Vaca Louca)**.
  * A mera suspeita clínica ou lesional obriga o Médico Veterinário (público ou autônomo) a comunicar o fato ao SVO no prazo de até 24 horas. A omissão de notificação constitui crime tipificado no Art. 259 do Código Penal.
* **Categoria 2 (Notificação Imediata após Confirmação Diagnóstica):** Patologias endêmicas sob programas nacionais de controle ou erradicação (Brucelose, Tuberculose, Raiva dos herbívoros, Anemia Infecciosa Equina, Doença de Aujeszky).

---

### Protocolo de Contingência e Gestão de um Foco Epizoótico

\`\`\`mermaid
flowchart TD
    A["Identificação de Suspeita Clínica de Categoria 1 (Ex: Lesão Vesicular / Síndrome Hemorrágica)"] --> B["Notificação Imediata Compulsória ao Serviço Veterinário Oficial (SVO) em < 24h"]
    B --> C["Interdição Cautelar da Fazenda e Bloqueio Automático de Todas as GTAs no Sistema"]
    C --> D["Atendimento de Emergência em até 12 Horas por Médicos Veterinários Oficiais"]
    D --> E["Colheita Oficial de Material Biológico e Envio ao Laboratório Federal de Defesa Agropecuária (LFDA)"]
    E --> F["Delimitação Geoespacial: Zona de Proteção/Foco (3 km) e Zona de Vigilância (10 km)"]
    F --> G["Rastreabilidade Retrospectiva de Entradas e Saídas nos Últimos 30 a 60 Dias"]
    G --> H{"Confirmação Positiva no LFDA"}
    H -->|"Positivo"| I["Stamping Out (Abate Sanitário / Eutanásia In Loco) + Destruição em Fossa Sanitária com Cal"]
    H -->|"Negativo"| J["Desinterdição Oficial e Restabelecimento das Atividades da Propriedade"]
    I --> K["Desinfecção com Viricidas Homologados + Vazio Sanitário e Introdução de Sentinelas"]
\`\`\`

* **Ações Imediatas de Contenção de Foco:**
  1. *Interdição Cautelar:* Proibição terminante de trânsito de animais, produtos de origem animal, cama, esterco, alimentos, máquinas e pessoas sem autorização oficial expressa.
  2. *Zonificação Geoespacial:*
     * **Zona de Proteção (Raio de 3 km):** Quarentena absoluta, inspeção clínica diária de 100% dos animais e desinfecção veicular em postos de bloqueio com rodolúvio e arco de aspersão.
     * **Zona de Vigilância (Raio de 10 km):** Suspensão de feiras, leilões e aglomerações; censo pecuário cadastral e vigilância sorológica ativa.
  3. *Sacrifício Sanitário ('Stamping Out'):* Para agentes de altíssima transmissibilidade (ex: Febre Aftosa, IAAP), o SVO realiza o abate humanitário emergencial de todos os animais infectados e contatos, seguido de destruição por queima ou sepultamento em trincheira sanitária profunda selada com cal virgem (*óxido de cálcio*).`
      },
      {
        id: 'sec_prev_05_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Fiscal: Confinamento Estrela do Vale (Síndrome Vesicular)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Emergência Zoossanitária: Gestão de Foco de Síndrome Vesicular e Auditoria de GTA',
          patient: {
            name: 'Lote Confinamento Setor B (450 Bovinos de Corte)',
            species: 'Bovino de Corte',
            breed: 'Nelore e Cruzamento Industrial',
            age: '24 a 30 meses',
            weightKg: 520,
            habitatOrEnvironment: 'Confinamento intensivo com 5.000 bovinos em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 84,
            respiratoryRateRpm: 30,
            temperatureCelsius: 40.8,
            mucousMembranes: 'Congestas com intensa salivação filamentosa e erosões mucosas',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Médico Veterinário Responsável Técnico do confinamento constata 14 novilhos com salivação profusa ("baba em fios contínuos"), dor intensa ao caminhar, claudicação severa e prostração. Ao inspecionar os animais na seringa de manejo, constata vesículas rompidas com colarete epitelial esbranquiçado na língua e mucosa gengival, além de lesões erosivas na banda coronária dos cascos e no espaço interdigital. Os animais apresentam hipertermia de 40.8°C. O proprietário preparava o embarque de 3 carretas boiadeiras para um frigorífico de exportação e pressiona para que as GTAs sejam emitidas imediatamente.',
          exams: [
            {
              category: 'inspecao_sindromica',
              title: 'Inspeção Clínica de Síndrome Vesicular Aguda',
              findings: 'Quadro clínico patognomônico de síndrome vesicular (suspeita de Febre Aftosa ou Estomatite Vesicular).',
              abnormalValues: [
                { parameter: 'Mucosa Oral (Língua e Almofada Dental)', value: 'Erosões ulceradas avermelhadas com restos de epitélio descolado (vesículas rompidas) de 4 a 6 cm', reference: 'Mucosa íntegra, rósea e úmida', status: 'critical' },
                { parameter: 'Banda Coronária e Espaço Interdigital', value: 'Vesículas intactas e rompidas com dor extrema e claudicação de sustentação', reference: 'Pele e cascos hígidos', status: 'critical' },
                { parameter: 'Temperatura Retal', value: '40.8°C (Hipertermia acentuada)', reference: '38.0°C a 39.3°C', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Diante de uma suspeita inequívoca de patologia vesicular de Categoria 1 (notificação obrigatória em até 24 horas), qual é a postura ética, legal e técnica mandatória do Médico Veterinário Responsável Técnico?',
          decisionOptions: [
            {
              id: 'opt_dec_prev5_1',
              label: 'Recusar taxativamente a emissão das GTAs + Interditar cautelarmente o confinamento para qualquer trânsito + Notificar compulsoriamente o Serviço Veterinário Oficial (SVO) em menos de 24 horas + Colheita oficial de epitélio para o LFDA',
              description: 'Postura impecável e corajosa em defesa do patrimônio agropecuário nacional e da legalidade sanitária.',
              isOptimal: true,
              consequenceText: 'Decisão que salvou a pecuária nacional! A recusa imediata de GTA e a interdição cautelar impediram que o vírus fosse disseminado por caminhões até o frigorífico de exportação. O fiscal estadual colheu epitélio vesicular em solução tamponada com glicerina a 50% para análise no LFDA. O diagnóstico confirmou Estomatite Vesicular e descartou Febre Aftosa, permitindo o isolamento do foco e a rápida desinterdição sem danos ao comércio exterior do Brasil.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Recusa irrevogável de emissão de GTA e notificação compulsória imediata em menos de 24h',
                mechanism: 'Contenção no foco primário e acionamento do protocolo oficial de emergência zoossanitária',
                effect: 'Prevenção da disseminação catastrófica de patógeno vesicular pelas carretas frigoríficas',
                clinicalMeaning: 'Manutenção da idoneidade da defesa sanitária brasileira perante os mercados internacionais'
              }
            },
            {
              id: 'opt_dec_prev5_2',
              label: 'Emitir as GTAs de abate imediato e liberar os caminhões sob o pretexto de que o calor do cozimento industrial esteriliza a carne',
              description: 'Infração criminosa contra a sanidade agropecuária e comércio internacional.',
              isOptimal: false,
              consequenceText: 'Desastre sanitário criminoso! O desembarque de animais com lesões vesiculares ativas contamina a planta do frigorífico e resulta no bloqueio automático de todas as exportações de carne bovina do Brasil pelo SIF e organismos internacionais. O veterinário é preso em flagrante por crime contra a saúde pública (Art. 259 do CP) e tem seu registro cassado.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Emissão dolosa de GTA para animais com síndrome vesicular de notificação compulsória',
                mechanism: 'Disseminação massiva de agente viral exótico/crítico em carretas e currais de espera do frigorífico',
                effect: 'Bloqueio sanitário internacional das exportações de carne bovina do Brasil',
                clinicalMeaning: 'Prisão em flagrante do Médico Veterinário, processo ético e cassação definitiva do CRMV'
              }
            },
            {
              id: 'opt_dec_prev5_3',
              label: 'Aplicar anti-inflamatório (flunixina meglumina) e oxitetraciclina para mascarar as feridas na boca e reavaliar o lote após 15 dias sem avisar ninguém',
              description: 'Tentativa ilícita de mascaramento de doença de notificação compulsória.',
              isOptimal: false,
              consequenceText: 'Crime de omissão de notificação sanitária! Tratar com anti-inflamatórios apenas mascara temporariamente o desconforto, enquanto a multiplicação viral e a transmissão aerógena explodem para os 5.000 bovinos do confinamento, tornando o foco incontrolável e punível criminalmente.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Omissão de notificação compulsória de patologia de Categoria 1 e tratamento empírico',
                mechanism: 'Proliferação descontrolada do vírus vesicular para os 5.000 bovinos do confinamento e propriedades vizinhas',
                effect: 'Contaminação de todo o município com decretação de Estado de Emergência Zoossanitária',
                clinicalMeaning: 'Responsabilização civil e penal por dano irreparável à pecuária nacional'
              }
            }
          ],
          learningTakeaways: [
            'Qualquer manifestação de síndrome vesicular (lesões em boca, focinho, tetos ou cascos) enquadra-se na Categoria 1 e exige notificação compulsória imediata ao SVO em até 24 horas.',
            'É terminantemente proibido emitir GTA ou autorizar o trânsito de animais procedentes de lotes ou propriedades sob suspeita sanitária até parecer conclusivo do SVO.',
            'A Guia de Trânsito Animal (GTA) é o instrumento legal que garante a rastreabilidade da pecuária e a defesa sanitária das fronteiras agrícolas do Brasil.'
          ]
        }
      },
      {
        id: 'sec_prev_05_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: GTA, Notificação Compulsória e Gestão de Focos',
        exerciseId: 'ex_preventive_05'
      }
    ]
  }
];

// ==========================================
// 7. CONTROLE DE ZOONOSES & SAÚDE PÚBLICA (ONE HEALTH)
// ==========================================
export const ZOONOSES_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_zoonoses_01',
    conceptId: 'concept_zoonoses_fmb_leishmaniose',
    type: 'multiple_choice',
    prompt: 'Em áreas endêmicas do interior paulista, a compreensão da dinâmica do vetor Amblyomma sculptum é fundamental para o bloqueio da transmissão da Febre Maculosa Brasileira (FMB). Assinale a alternativa CORRETA sobre os mecanismos ecoepidemiológicos e patogênicos desta zoonose:',
    options: [
      {
        id: 'opt_zoo_1_1',
        text: 'A FMB induz vasculite generalizada por replicação intraendotelial da bactéria; ademais, o carrapato necessita permanecer fixado ao hospedeiro em repasto sanguíneo por no mínimo 4 a 6 horas para reativar e inocular a riquétsia infectante.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A Rickettsia rickettsii invade ativamente as células endoteliais vasculares, evadindo o fagolisossomo e causando necrose lítica das junções intercelulares, o que resulta em vasculite difusa, perda plasmática e consumo plaquetário severo. O repasto sanguíneo por pelo menos 4 a 6 horas é biologicamente indispensável para a reativação metabólica do patógeno nas glândulas salivares do carrapato.'
      },
      {
        id: 'opt_zoo_1_2',
        text: 'A remoção mecânica do carrapato por meio de esmagamento com as unhas contra a pele do hospedeiro é um método altamente eficaz profilaticamente, visto que a hemolinfa do vetor atua neutralizando o patógeno de forma autóloga.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e de altíssimo risco! O esmagamento do carrapato asperge hemolinfa repleta de riquétsias viáveis, que penetram por microfissuras da pele ou mucosas oculares do manipulador.'
      },
      {
        id: 'opt_zoo_1_3',
        text: 'As capivaras são hospedeiras definitivas reservatórios, mantendo a Rickettsia rickettsii em latência intracelular crônica ao longo de toda a sua vida produtiva, infectando carrapatos continuamente sem demonstrar imunidade.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Capivaras adultas adquirem imunidade duradoura e eliminam a bactéria após bacteremia transitória de 10 a 14 dias; o ciclo é mantido pelo nascimento contínuo de filhotes imunologicamente ingênuos.'
      },
      {
        id: 'opt_zoo_1_4',
        text: 'O diagnóstico laboratorial rápido e inequívoco das riquetsioses baseia-se na presença de formas amastigotas isoladas do interior de macrófagos do baço, achado considerado patognomônico para a FMB.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Formas amastigotas intracelulares em macrófagos caracterizam a Leishmaniose Visceral (Leishmania infantum), e não uma infecção bacteriana rickettsial.'
      }
    ]
  },
  {
    id: 'ex_zoonoses_02',
    conceptId: 'concept_zoonoses_rabies_paralytic',
    type: 'multiple_choice',
    prompt: 'A Raiva é uma encefalomielite viral aguda com letalidade de praticamente 100%. Relativo à dinâmica ecoepidemiológica, patogênese e profilaxia da doença em carnívoros e herbívoros, é CORRETO afirmar que:',
    options: [
      {
        id: 'opt_zoo_2_1',
        text: 'O período de observação de 10 dias aplicado a cães e gatos agressores justifica-se pelo fato de que a excreção viral na saliva do animal precede em apenas 2 a 5 dias o início dos sinais neurológicos, seguida de óbito rápido; se o animal permanecer hígido nesse período, descarta-se a transmissão no momento da mordedura.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! O vírus rábico atinge as glândulas salivares por transporte centrífugo pouco tempo antes da eclosão da sintomatologia clínica encefálica. A morte do animal ocorre invariavelmente em até 7 a 10 dias após a excreção salivar. Assim, se o cão ou gato permanecer saudável por 10 dias, ele comprovadamente não estava eliminando vírus no momento do evento de agressão.'
      },
      {
        id: 'opt_zoo_2_2',
        text: 'A viremia primária no sangue sistêmico é a fase crucial para a dispersão do vírus para os rins e subsequente eliminação na urina, sendo esta a principal forma de contágio humano durante ordenhas em fazendas.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O Lyssavirus é estritamente neurotrópico e NÃO causa viremia significativa; ele migra pelos axônios periféricos até o SNC e depois para as glândulas salivares.'
      },
      {
        id: 'opt_zoo_2_3',
        text: 'O vírus da raiva utiliza o transporte axonal anterógrado para chegar inicialmente ao cérebro, onde realiza rápida lise celular com intensa inflamação supurativa aguda no líquido cefalorraquidiano.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A ascensão até o sistema nervoso central ocorre via transporte axonal RETRÓGRADO motor (mediado por dineína), e a infecção caracteriza-se por replicação com Corpúsculos de Negri e disfunção sináptica sem lise celular massiva precoce.'
      },
      {
        id: 'opt_zoo_2_4',
        text: 'A vacinação de herbívoros contra a Raiva não é recomendada pelo MAPA sob nenhuma circunstância, sendo apenas um mecanismo voluntário sem respaldo no PNCRH.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O Programa Nacional de Controle da Raiva dos Herbívoros (PNCRH/MAPA) estabelece a vacinação obrigatória ou estratégica de bovinos e equídeos em áreas de foco ou com presença confirmada de abrigos de Desmodus rotundus.'
      }
    ]
  },
  {
    id: 'ex_zoonoses_03',
    conceptId: 'concept_zoonoses_leptospirosis_weil',
    type: 'multiple_choice',
    prompt: 'A Leptospirose canina demanda uma abordagem clínica emergencial não apenas pelo agravo à saúde do paciente, mas pelo alto risco zoonótico ao tutor e à equipe veterinária. Qual das alternativas abaixo apresenta a conduta e justificativa farmacológica e sanitária adequada?',
    options: [
      {
        id: 'opt_zoo_3_1',
        text: 'Penicilinas (como Ampicilina sódica IV) são a escolha primária em pacientes hospitalizados na fase aguda por eliminarem rapidamente a leptospiremia sistêmica; contudo, a Doxiciclina posterior (por 14 a 21 dias) é obrigatória para erradicar a colonização dos túbulos renais e bloquear a excreção urinária crônica.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A Ampicilina sódica parenteral cessa a replicação bacteriana no sangue e tecidos durante a fase crítica da internação e é bem tolerada por pacientes com náuseas/vômitos e uremia. Entretanto, betalactâmicos não atingem concentrações bactericidas satisfatórias na luz dos túbulos contorcidos renais, exigindo a sequência obrigatória de Doxiciclina para negativar o animal como portador e eliminador ambiental de Leptospira.'
      },
      {
        id: 'opt_zoo_3_2',
        text: 'O tratamento inicial de escolha durante a falência renal aguda anúrica grave é a Doxiciclina intravenosa em altas doses (20 mg/kg), pois esta molécula possui excreção exclusivamente biliar, não sobrecarregando o sistema renal comprometido.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Doses elevadas de tetraciclinas intravenosas são altamente irritantes, nefrotóxicas e inadequadas na fase hiperazotêmica com êmese incoercível, devendo ser reservadas para administração oral após estabilização clínica.'
      },
      {
        id: 'opt_zoo_3_3',
        text: 'Como a principal via de contágio é através de aerossóis e gotículas respiratórias entre caninos e humanos (ex: espirros), o uso de máscaras N95 pela equipe é mais importante do que a desinfecção de gaiolas e o uso de luvas durante o manuseio de urina.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A via clássica e de maior risco da leptospirose é o contato com urina infectada através de mucosas ou pele lesionada; a biossegurança no manuseio de excretas e urina (luvas, óculos, avental e desinfecção com cloro) é a prioridade número um.'
      },
      {
        id: 'opt_zoo_3_4',
        text: 'A ausência de hiperbilirrubinemia (icterícia) afasta sumariamente o diagnóstico de Leptospirose, devendo o clínico concentrar-se na pesquisa exclusiva de Babesiose caso o paciente apresente apenas hiperazotemia.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A leptospirose canina frequentemente apresenta a forma anictérica (principalmente por sorovares como Canicola), manifestando-se primordialmente como nefrite intersticial aguda e LRA oligúrica sem icterícia evidente.'
      }
    ]
  },
  {
    id: 'ex_zoonoses_04',
    conceptId: 'concept_zoonoses_sporotrichosis_cat',
    type: 'multiple_choice',
    prompt: 'A crise sanitária da Esporotricose Zoonótica na região Centro-Sul do Brasil exige uma orientação clínica veterinária impecável. Sobre a epidemiologia, conduta terapêutica e prevenção da doença, assinale a alternativa INCORRETA:',
    options: [
      {
        id: 'opt_zoo_4_1',
        text: 'O diagnóstico citológico imediato na clínica veterinária é impossível em felinos, uma vez que as lesões de esporotricose felina possuem carga fúngica ("inóculo") incrivelmente escassa e de difícil visualização, requerendo sempre cultura estendida de 30 dias em laboratórios sentinela para qualquer decisão.',
        isCorrect: true,
        pedagogicalFeedback: 'Esta é a alternativa INCORRETA (e portanto o gabarito)! Ao contrário dos humanos e cães (que possuem lesões paucibacilares com poucos fungos), os felinos albergam uma quantidade mastodôntica de leveduras em suas úlceras e exsudatos. A citopatologia por aposição (imprint) corada por panótico rápido na rotina da clínica revela prontamente numerosas leveduras em formato de charuto intra e extracelulares em minutos.'
      },
      {
        id: 'opt_zoo_4_2',
        text: 'O Sporothrix brasiliensis adaptou-se a uma transmissão direta e eficiente através de arranhaduras e mordeduras felinas, não necessitando mais do solo como fonte primária da maioria das infecções em humanos urbanos na atual epidemia.',
        isCorrect: false,
        pedagogicalFeedback: 'Correto (afirmativa verdadeira). O S. brasiliensis consolidou o ciclo zoonótico urbano interespécies direto entre felinos e humanos, com alta carga fúngica em garras e cavidade oral.'
      },
      {
        id: 'opt_zoo_4_3',
        text: 'O abandono do animal não resolve o problema epidemiológico; o felino deve ser submetido à terapia prolongada com Itraconazol oral, o qual não deve ser suspenso no dia exato da cicatrização da ferida, e sim estendido por semanas além da cura clínica aparente.',
        isCorrect: false,
        pedagogicalFeedback: 'Correto (afirmativa verdadeira). Interromper o itraconazol precocemente causa recidiva imediata das lesões profundas; a recomendação técnica é manter por 30 a 60 dias adicionais.'
      },
      {
        id: 'opt_zoo_4_4',
        text: 'Tutores que possuam lesões infligidas por felinos doentes devem ser imediatamente encaminhados ao serviço médico para terapia específica (geralmente também com Itraconazol), evitando o uso de pomadas de corticoides na ferida humana.',
        isCorrect: false,
        pedagogicalFeedback: 'Correto (afirmativa verdadeira). Corticoides suprimem a imunidade celular local e promovem a disseminação fúngica grave na pele humana.'
      }
    ]
  },
  {
    id: 'ex_zoonoses_05',
    conceptId: 'concept_zoonoses_surveillance_sinan',
    type: 'multiple_choice',
    prompt: 'A notificação compulsória de epizootias e zoonoses constitui a engrenagem principal da Saúde Única (One Health), integrando os médicos veterinários ao Ministério da Saúde. Assinale a alternativa que expressa CORRETAMENTE a dinâmica legal e epidemiológica das Unidades de Vigilância em Zoonoses (UVZ) e do SINAN no Brasil:',
    options: [
      {
        id: 'opt_zoo_5_1',
        text: 'As Unidades de Vigilância de Zoonoses (UVZ) não recolhem animais saudáveis para eutanásia de controle populacional, dedicando-se a recolher espécimes biológicos para diagnóstico, avaliar risco à saúde pública, intervir sobre vetores ambientais (flebotomíneos, carrapatos, triatomíneos) e promover inquéritos em animais positivos para doenças como Raiva, FMB e Leishmaniose.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Desde as diretrizes modernas do Ministério da Saúde e do SUS, as antigas práticas de "carrocinha" e eutanásia indiscriminada foram extintas. A missão precípua das UVZs é a vigilância ativa, entomologia de campo (armadilhas CDC), diagnóstico laboratorial e bloqueio de transmissão em focos sob o paradigma One Health.'
      },
      {
        id: 'opt_zoo_5_2',
        text: 'Ao diagnosticar um cão positivo para Leishmaniose Visceral, o clínico de pequenos animais pode iniciar tratamento com drogas específicas (ex: Miltefosina) de forma indiscriminada sem qualquer comunicação à rede pública, posto que o cão é protegido por sigilo absoluto paciente-médico.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A Leishmaniose Visceral é agravo de notificação compulsória obrigatória aos órgãos de saúde pública; omitir a notificação é infração ética perante o CFMV e infração sanitária perante o Ministério da Saúde.'
      },
      {
        id: 'opt_zoo_5_3',
        text: 'Ao constatar que um equino de 15 anos foi positivo ao Teste Cervical Comparativo (TCC) para Brucelose (PNCEBT), o sistema SINAN de vigilância humana é acionado, enviando equipes do Ministério da Saúde para vacinar os humanos ao redor com a vacina B19.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e absurdo! O TCC é um teste para TUBERCULOSE em bovinos/bubalinos (não equinos), e a vacina B19 é uma cepa viva atenuada exclusiva para bezerras de 3 a 8 meses, sendo patogênica e contraindicada em humanos.'
      },
      {
        id: 'opt_zoo_5_4',
        text: 'A Esporotricose é estritamente notificada devido ao seu papel na contaminação generalizada dos solos pelas fezes de morcegos; os veterinários acionam a equipe de endemias para nebulização química das ruas adjacentes onde o felino infectado defecou.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Fezes de morcegos transmitem Histoplasmose (Histoplasma capsulatum), enquanto a esporotricose felina é causada por Sporothrix brasiliensis transmitido por arranhadura/mordedura, sem indicação de nebulização química ambiental.'
      }
    ]
  }
];

export const ZOONOSES_LESSONS: LearningLesson[] = [
  // ==========================================
  // AULA 1: FEBRE MACULOSA & LEISHMANIOSE
  // ==========================================
  {
    id: 'lesson_zoonoses_01_fmb_leishmaniose',
    moduleId: 'mod_zoonoses',
    title: 'Febre Maculosa & Leishmaniose: Ecoepidemiologia e Patogênese Vetorial',
    shortDescription: 'Rickettsia rickettsii, amplificação em capivaras, parasitismo por Amblyomma sculptum, vasculite endotelial e leishmaniose visceral (Lutzomyia/DPP).',
    estimatedMinutes: 15,
    order: 1,
    concepts: ['concept_zoonoses_fmb_leishmaniose', 'concept_zoonoses_one_health_surveillance'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_zoo_01_th1',
        type: 'theory',
        title: 'Ecoepidemiologia e Patogênese da Febre Maculosa e Leishmaniose Visceral',
        contentMarkdown: `# Aula Universitária: Doenças Zoonóticas Transmitidas por Vetores no Interior Paulista

> 📖 Referência Canônica: Ministério da Saúde (SVS) — *Diretrizes para Vigilância, Prevenção e Controle da Febre Maculosa no Brasil*. Greene, C. E. *Infectious Diseases of the Dog and Cat*, 5th ed. Elsevier, Cap. 28: Rickettsial Infections & Cap. 73: Leishmaniasis. SUCEN/CVE-SP — *Manual de Vigilância e Controle da Leishmaniose Visceral no Estado de São Paulo*.

### O Ecótono do Interior Paulista & As Zoonoses Vetoriais

O processo acelerado de urbanização, desmatamento de matas ciliares e fragmentação florestal transformou os vales fluviais do interior do estado de São Paulo (notadamente as bacias do Rio Paranapanema, Rio Pardo e Rio Tietê) em ecótonos de altíssimo risco sanitário. A integração entre a fauna silvestre sinantrópica, os artrópodes vetores e a população humana e canina constitui o epicentro do paradigma de Saúde Única (One Health).

---

### Febre Maculosa Brasileira (FMB): A Rickettsiose Endotelial

A FMB é uma infecção aguda devastadora causada pela alfaproteobactéria intracelular obrigatória **Rickettsia rickettsii**:
1. **O Vetor Primário:** O carrapato-estrela (*Amblyomma sculptum*, do complexo *Amblyomma cajennense*). Apresenta ciclo trioxeno (troca de hospedeiro a cada estádio de desenvolvimento: larva, ninfa e adulto). Suas formas imaturas (ninfas), popularmente chamadas de "micuins", possuem baixíssima especificidade parasitária, fixando-se com voracidade em cães, cavalos e seres humanos.
2. **O Hospedeiro Amplificador:** A capivara (*Hydrochoerus hydrochaeris*). Quando parasitada por carrapatos infectados, a capivara desenvolve bacteremia transitória de **10 a 14 dias**. Durante essa janela crítica de amplificação, até 25% a 30% dos carrapatos não infectados que nela realizam repasto adquirem a bactéria. Após esse período, o animal adulto desenvolve imunidade humoral sólida e esteriliza o sangue; contudo, a prolificidade reprodutiva da espécie garante ninhadas frequentes de filhotes imunologicamente ingênuos que sustentam perpetuamente a circulação enzoótica do patógeno.

> 💡 Pérola Clínica / Prova de Residência: Para que ocorra a inoculação efetiva da *Rickettsia rickettsii*, o carrapato necessita permanecer fixado em repasto sanguíneo contínuo por no mínimo **4 a 6 horas**. Este intervalo de tempo é metabolicamente mandatório para que as bactérias avirulentas (dormentes nas glândulas salivares) sejam "reativadas" pelo aquecimento corporal do hospedeiro e pela composição do sangue ingerido, sintetizando novas proteínas de invasão.

---

### A Cascata Patológica da Vasculite Rickettsial

A patogênese da FMB não resulta de toxinas secretadas, mas da invasão bacteriana direta e lise celular mecânica:

\`\`\`mermaid
flowchart TD
    A["Capivara Jovem Suscetível"] --> B["Bacteremia Transitória (10 a 14 dias)"]
    B --> C["Amplificação para Ninfas de Amblyomma sculptum"]
    C --> D["Parasitismo Acidental em Humano ou Cão"]
    D --> E["Repasto Sanguíneo Prolongado (> 4 a 6 horas)"]
    E --> F["Invasão e Replicação no Endotélio Vascular"]
    F --> G["Vasculite Necrotizante e Hiperconsumo Plaquetário"]
    G --> H["Edema Pulmonar, Choque Distributivo e Falência de Múltiplos Órgãos"]
\`\`\`

* **Invasão Endotelial:** A bactéria liga-se às integrinas da célula endotelial, força sua endocitose, rompe a membrana do fagossomo por fosfolipases e replica-se livremente no citosol e núcleo.
* **Necrose Celular e Perda de Junções Oclusivas:** A saída das bactérias por caudas de actina polimerizada lisa a membrana celular, gerando desnudamento endotelial e fendas vasculares.
* **Trombocitopenia de Consumo e Diátese Hemorrágica:** A exposição do colágeno subendotelial ativa maciçamente a cascata de coagulação e a agregação plaquetária nos capilares periféricos, consumindo plaquetas em ritmo frenético e provocando petéquias, sufusões, epistaxe e choque distributivo hipovolêmico.

> ⚠️ Alerta Crítico: O carrapato vetor NUNCA deve ser removido mediante esmagamento com as unhas! A ruptura do exoesqueleto promove a aspersão de hemolinfa repleta de riquétsias viáveis, que penetram ativamente pela pele através de microfissuras pré-existentes ou pela mucosa ocular por aerossóis de raspagem.

---

### Leishmaniose Visceral Canina (LVC): O Reservatório Urbano

A Leishmaniose Visceral, provocada pelo protozoário intracelular *Leishmania infantum* (sin. *L. chagasi*), tem no cão doméstico o seu mais expressivo reservatório epidemiológico urbano no interior de São Paulo.
* **O Vetor:** O flebotomíneo *Lutzomyia longipalpis* ("mosquito-palha" ou "birigui"). Diferentemente do mosquito da dengue, suas larvas não se desenvolvem em água limpa, mas na matéria orgânica úmida em fermentação (esterco de galinheiros, folhas podres, solo sombreado).
* **Diagnóstico Laboratorial Oficial:** A triagem em inquéritos sorológicos oficiais da vigilância sanitária é conduzida pelo **Teste Rápido DPP (Dual Path Platform)** Bio-Manguinhos, com confirmação obrigatória por **Ensaio Imunoenzimático (ELISA)**. O diagnóstico parasitológico padrão-ouro baseia-se na visualização de **formas amastigotas** no interior do citoplasma de macrófagos em aspirados de medula óssea, linfonodos ou baço corados por Giemsa.`
      },
      {
        id: 'sec_zoo_01_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Cão Apolo (FMB Aguda)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Abordagem Emergencial da Suspeita de Febre Maculosa em Cão',
          patient: {
            name: 'Apolo',
            species: 'Canino',
            breed: 'SRD',
            age: '4 anos',
            weightKg: 22,
            habitatOrEnvironment: 'Sítio ribeirinho contíguo ao Rio Pardo (Ourinhos/SP) com presença de capivaras'
          },
          vitals: {
            heartRateBpm: 145,
            respiratoryRateRpm: 36,
            temperatureCelsius: 40.2,
            mucousMembranes: 'Hipocoradas com petéquias e sufusões na mucosa oral e peniana',
            capillaryRefillTimeSec: 3.0
          },
          anamnesis: 'Cão vive solto no sítio e nada na mata ciliar onde capivaras pastam. O tutor retirou dezenas de ninfas ("micuins") das orelhas há 7 dias. Há 48 horas o cão apresenta prostração profunda, recusa alimentar, claudicação em membros pélvicos e episódios de epistaxe unilateral discreta. PAS = 85 mmHg (hipotensão).',
          exams: [
            {
              category: 'laboratorial',
              title: 'Hemograma Completo com Contagem Plaquetária Manual + Bioquímica Hepatorrenal',
              findings: 'Análise automatizada confirmada por esfregaço em câmara de Neubauer.',
              abnormalValues: [
                { parameter: 'Hematócrito (Ht)', value: '31%', reference: '37 - 55%', status: 'low' },
                { parameter: 'Plaquetas', value: '42.000 /uL', reference: '175.000 - 500.000 /uL', status: 'critical' },
                { parameter: 'ALT (TGP)', value: '210 U/L', reference: '10 - 125 U/L', status: 'high' },
                { parameter: 'Fosfatase Alcalina (FA)', value: '380 U/L', reference: '23 - 212 U/L', status: 'high' },
                { parameter: 'Pressão Arterial Sistólica', value: '85 mmHg', reference: '110 - 140 mmHg', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com trombocitopenia crítica (42.000/uL), petéquias, hipotensão e histórico de ninfas de Amblyomma em área de capivaras, qual é a conduta médica e terapêutica prioritária?',
          decisionOptions: [
            {
              id: 'opt_dec_zoo1_1',
              label: 'Ressuscitação volêmica (Ringer Lactato 20 mL/kg = 440 mL IV em 15 min) + Doxiciclina hiclato (5 mg/kg VO q12h = 110 mg/dose por 21 dias) + Dipirona + Notificação à UVZ',
              description: 'Estabilizar a volemia capilar, instituir imediatamente o antibacteriano rickettsicida de escolha sem esperar sorologia e comunicar a vigilância de zoonoses.',
              isOptimal: true,
              consequenceText: 'Conduta salvadora exemplar! Na Febre Maculosa, a antibioticoterapia com Doxiciclina deve ser instituída imediatamente com base na presunção clínico-epidemiológica. Aguardar o resultado da RIFI (que exige pareamento com 14 dias) resulta em óbito por falência vascular irreversível. O microdesafio de fluidos restaura a pressão perfusional.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Instituição precoce de Doxiciclina e suporte volêmico cristaloide',
                mechanism: 'Inibição da síntese proteica ribossomal (subunidade 30S) da Rickettsia rickettsii e recuperação da pressão oncótica microvascular',
                effect: 'Cessação da necrose endotelial, recuperação gradual da contagem plaquetária e regressão da febre',
                clinicalMeaning: 'Remissão da vasculite, alta médica sem sequelas renais e alerta epidemiológico ativado no município'
              }
            },
            {
              id: 'opt_dec_zoo1_2',
              label: 'Prescrever Prednisona em alta dose imunossupressora (2 mg/kg) suspeitando de Trombocitopenia Imunomediada idiopática sem antibiótico',
              description: 'Supor etiologia autoimune isolada para a trombocitopenia e usar corticoterapia em dose alta.',
              isOptimal: false,
              consequenceText: 'Erro médico fatal! O uso de corticoterapia imunossupressora isolada em paciente com infecção rickettsial ativa bloqueia a resposta fagocítica e os linfócitos T, provocando replicação bacteriana fulminante no endotélio, choque distributivo e morte em 48 horas.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Imunossupressão com corticosteroide em rickettsiose ativa',
                mechanism: 'Paralisia das defesas celulares do hospedeiro com proliferação bacteriana intravascular descontrolada',
                effect: 'Ruptura endotelial em múltiplos órgãos, hemorragia pulmonar maciça e coagulação intravascular disseminada',
                clinicalMeaning: 'Óbito do paciente por choque refratário'
              }
            },
            {
              id: 'opt_dec_zoo1_3',
              label: 'Realizar banho carrapaticida com organofosforado concentrado imediatamente e aguardar exames em casa',
              description: 'Banhar o animal prostrado para matar carrapatos remanescentes e não aplicar antimicrobiano.',
              isOptimal: false,
              consequenceText: 'Conduta desastrosa! Submeter um cão febril, hipotenso (PAS 85 mmHg) e com vasculite a banho estressante e absorção percutânea de inseticida organofosforado precipita colapso cardiovascular e intoxicação aguda colinérgica.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Estresse térmico e intoxicação acaricida em paciente chocado',
                mechanism: 'Inibição da acetilcolinesterase somada à vasodilatação rickettsial preexistente',
                effect: 'Bradicardia profunda, broncoconstrição e colapso circulatório irreversível',
                clinicalMeaning: 'Parada cardiorrespiratória na sala de banho'
              }
            }
          ],
          learningTakeaways: [
            'A antibioticoterapia com Doxiciclina na suspeita de FMB deve ser iniciada IMEDIATAMENTE, sem aguardar resultado sorológico confirmatório (RIFI).',
            'O carrapato Amblyomma sculptum necessita de 4 a 6 horas de repasto fixado para reativar as riquétsias e transmitir a infecção.',
            'Capivaras atuam como amplificadores biológicos transitórios (bacteremia por 10 a 14 dias), transmitindo para ninfas de carrapatos.'
          ]
        }
      },
      {
        id: 'sec_zoo_01_ex1',
        type: 'exercise',
        title: 'Exercício de Fixação: Dinâmica Vetorial da Febre Maculosa',
        exerciseId: 'ex_zoonoses_01'
      }
    ]
  },

  // ==========================================
  // AULA 2: RAIVA URBANA E SILVESTRE
  // ==========================================
  {
    id: 'lesson_zoonoses_02_raiva',
    moduleId: 'mod_zoonoses',
    title: 'Raiva Urbana e Silvestre: Ciclos de Transmissão, Neurotropismo e Profilaxia',
    shortDescription: 'Lyssavirus, morcegos hematófagos (Desmodus rotundus), transporte axonal retrógrado, raiva paralítica em herbívoros e observação de 10 dias.',
    estimatedMinutes: 15,
    order: 2,
    concepts: ['concept_zoonoses_rabies_paralytic', 'concept_zoonoses_one_health_surveillance'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_zoo_02_th1',
        type: 'theory',
        title: 'Virologia, Transporte Axonal Retrógrado e Protocolos Oficiais Antirrábicos',
        contentMarkdown: `# Aula Universitária: Raiva Urbana e Silvestre — Do Lyssavirus à Defesa Sanitária Animal

> 📖 Referência Canônica: Ministério da Agricultura e Pecuária (MAPA) — *Manual Técnico de Controle da Raiva dos Herbívoros (PNCRH)*. Ministério da Saúde — *Normas Técnicas de Profilaxia da Raiva Humana*. Greene, C. E. *Infectious Diseases of the Dog and Cat*, 5th ed. Cap. 20: Rabies and Other Lyssaviruses. Instituto Pasteur de São Paulo — *Manuais e Orientações Técnicas*.

### O Vírus e os Ciclos Epidemiológicos Contemporâneos

O vírus da Raiva é um membro do gênero *Lyssavirus*, família Rhabdoviridae. Trata-se de um vírus envelopado de RNA fita simples de sentido negativo, com morfologia característica em projétil cilíndrico (bala de revólver):
* **Sucesso na Eliminação das Variantes 1 e 2:** Historicamente, os ciclos urbanos eram mantidos por cães e gatos domésticos (variantes caninas 1 e 2). O êxito histórico das campanhas públicas anuais de vacinação em massa no Brasil reduziu drasticamente essa circulação nas últimas décadas.
* **Predomínio dos Ciclos Silvestres (Variante 3 e Quirópteros):** O cenário epidemiológico contemporâneo no estado de São Paulo é dominado pelo morcego hematófago *Desmodus rotundus* (transmissor primário da **Raiva Paralítica dos Herbívoros**) e por morcegos insetívoros/frugívoros que habitam forros e árvores urbanas, albergando variantes que podem infectar felinos domésticos que tentam caçá-los.

---

### Neurotropismo & Transporte Axonal Retrógrado

A Raiva não circula na corrente sanguínea (ausência de viremia relevante). Sua trajetória é estritamente neuroanatômica:

\`\`\`mermaid
flowchart TD
    A["Mordedura por Morcego ou Carnívoro Infectado"] --> B["Inoculação de Saliva Rica em Lyssavirus no Músculo"]
    B --> C["Ligação Viral aos Receptores Nicotínicos de ACh (Placa Motora)"]
    C --> D["Transporte Axonal Retrógrado Centrípeto (8 a 20 mm/dia)"]
    D --> E["Entrada no Corno Ventral da Medula e Ascensão ao Tronco Encefálico"]
    E --> F["Replicação Maciça no SNC e Formação de Corpúsculos de Negri"]
    F --> G["Disseminação Centrífuga por Nervos Cranianos para Glândulas Salivares"]
    G --> H["Disfagia, Sialorreia Espumosa, Paralisia Ascendente e Óbito"]
\`\`\`

1. **Inóculo Muscular:** O vírus replica-se discretamente nos miócitos locais antes de ligar-se aos receptores nicotínicos de acetilcolina (AChR) e moléculas de adesão neural (NCAM) na junção neuromuscular.
2. **Ascensão Axonal:** Utilizando o motor molecular da dineína, os vírions sobem pelos axônios motores em direção retrógrada a uma velocidade média de **8 a 20 mm/dia**. A duração do período de incubação é diretamente proporcional à distância entre o ponto da mordida e o sistema nervoso central (mordeduras na face ou patas anteriores incubam muito mais rápido que na cauda ou membros pélvicos).
3. **Replicação no Encéfalo:** Ao atingir o tronco encefálico, hipocampo e células de Purkinje do cerebelo, ocorre replicação torrencial com agregação de ribonucleoproteínas formando inclusões intracitoplasmáticas patognomônicas: os **Corpúsculos de Negri**.
4. **Disseminação Centrífuga Salivar:** Pelas vias eferentes autonômicas dos nervos cranianos (glossofaríngeo, facial e trigêmeo), o vírus migra do cérebro diretamente para as células acinares das glândulas salivares, sendo eliminado em altas titulações na saliva.

---

### O Racional Biológico da Observação de 10 Dias em Cães e Gatos

> 💡 Pérola Clínica / Prova de Residência: O período oficial de isolamento e observação clínica de **10 dias** para cães e gatos agressores fundamenta-se em um fato biológico estrito: **a eliminação de Lyssavirus na saliva do animal precede em apenas 2 a 5 dias o surgimento dos primeiros sintomas neurológicos claros**, e o animal invariavelmente morre em até 7 a 10 dias após o início da excreção viral. Portanto, se o animal agressor permanecer vivo e clinicamente sadio ao término do 10º dia de observação, descarta-se categoricamente a possibilidade de que ele estivesse transmitindo o vírus da raiva no momento da mordida!

---

### A Raiva Paralítica dos Herbívoros & Biossegurança Sanitária

Em bovinos e equinos, a doença manifesta-se quase exclusivamente sob a forma paralítica:
* **Quadro Clínico:** Isolamento do rebanho, apatia, marcha cambaleante ("andar de ébrio"), tenesmo retal, hipotonia da cauda e reflexo anal abolido. Rapidamente evolui para sialorreia abundante espumosa e **disfagia severa** (paralisia dos nervos glossofaríngeo e vago). O animal entra em decúbito esternal permanente e morre por parada respiratória em 3 a 6 dias.
* **O Perigo do "Engasgo":** Com frequência fatal para vaqueiros e médicos veterinários, a disfagia e sialorreia são confundidas com obstrução esofágica mecânica por caroço de manga ou espiga de milho. O profissional ou tratador introduz a mão na cavidade oral sem luvas e sofre microtraumatismos dentários, inoculando a saliva infectante diretamente na corrente nervosa.

> ⚠️ Alerta Crítico de Biossegurança: Jamais abra o crânio de um animal suspeito de raiva com serra manual ou serra elétrica oscilante sem cabine de fluxo biológico! A serragem óssea gera aerossóis de parênquima encefálico que infectam a mucosa ocular e respiratória dos presentes. No campo, a coleta oficial de amostras encefálicas pelo veterinário da Defesa Agropecuária é realizada por introdução de cânula plástica rígida ou colher de plástico estéril **via forame magno** após desarticulação atlanto-occipital, sem serrar ossos.`
      },
      {
        id: 'sec_zoo_02_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Sanitária: Vaca Mimosa (Raiva Paralítica)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Abordagem Sanitária Oficial de Suspeita de Raiva Bovina',
          patient: {
            name: 'Vaca Mimosa',
            species: 'Bovino',
            breed: 'Nelore',
            age: '3 anos',
            weightKg: 450,
            habitatOrEnvironment: 'Pasto de braquiária com áreas de mata e cavernas em Ourinhos/SP (sem histórico vacinal antirrábico)'
          },
          vitals: {
            heartRateBpm: 65,
            respiratoryRateRpm: 22,
            temperatureCelsius: 39.5,
            mucousMembranes: 'Rosadas com intensa salivação espumosa labial',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Há 48 horas o tratador notou a novilha isolada, sem conseguir engolir água ou capim, babando muito. O vaqueiro achou que ela estava engasgada com mandioca e tentou "desentalar" com as mãos nuas. Hoje o animal amanheceu caído em decúbito esternal permanente, incapaz de se levantar, com arreflexia caudal e anal. Na tábua do pescoço, observam-se duas crostas sanginolentas típicas de mordedura de morcego hematófago.',
          exams: [
            {
              category: 'necropsy_pathology',
              title: 'Exame Clínico Neurológico Oficial e Coleta de Encefalo via Forame Magno',
              findings: 'Paralisia flácida progressiva de trem posterior, reflexo cutâneo diminuído e sialorreia profusa.',
              abnormalValues: [
                { parameter: 'Motilidade Ruminal', value: 'Abolida (0 mov/3 min)', reference: '2 a 3 mov/2 min', status: 'critical' },
                { parameter: 'Reflexo Esfíncter Anal', value: 'Ausente (Hipotonia anal)', reference: 'Contratilidade normal', status: 'critical' },
                { parameter: 'Imunofluorescência Direta (IFD - Instituto Pasteur)', value: 'POSITIVO (Inclusões de Corpúsculos de Negri)', reference: 'Negativo', status: 'critical' },
                { parameter: 'RT-qPCR para Lyssavirus', value: 'POSITIVO (Variante 3 - Desmodus rotundus)', reference: 'Negativo', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Confirmada a suspeita de Raiva Paralítica dos Herbívoros em novilha com decúbito e vaqueiro exposto à saliva, qual é a conduta técnico-sanitária obrigatória?',
          decisionOptions: [
            {
              id: 'opt_dec_zoo2_1',
              label: 'Isolar o animal + Notificação imediata à Defesa Agropecuária (CDA-SP) + Eutanásia oficial e coleta encefálica via forame magno para o Instituto Pasteur + Encaminhamento URGENTE do vaqueiro para Profilaxia Pós-Exposição (Soro + Vacina no SUS)',
              description: 'Cumprir as normativas do PNCRH/MAPA e do Ministério da Saúde: diagnóstico oficial seguro e atendimento antirrábico humano profilático imediato.',
              isOptimal: true,
              consequenceText: 'Decisão impecável e ética em Saúde Única! A eutanásia humanitária oficial evita o sofrimento e permite a coleta encefálica asséptica sem aerossóis. O encaminhamento do vaqueiro ao SUS para receber soro heterólogo e esquema vacinal no mesmo dia salva sua vida antes que o vírus atinja a placa motora de suas mãos.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Notificação compulsória ao Serviço Oficial e encaminhamento imediato do trabalhador rural',
                mechanism: 'Neutralização precoce do Lyssavirus por anticorpos do soro antirrábico antes da invasão dos axônios periféricos',
                effect: 'Bloqueio total da ascensão neurotrópica no humano e confirmação laboratorial da cepa para controle de morcegos',
                clinicalMeaning: 'Prevenção de morte humana 100% fatal, mapeamento do foco pelo MAPA e vacinação dos rebanhos vizinhos'
              }
            },
            {
              id: 'opt_dec_zoo2_2',
              label: 'Prescrever anti-inflamatório Flunixina Meglumina e tentar desobstruir o esôfago com sonda orogástrica',
              description: 'Tratar sintomaticamente para cólica ou engasgo mecânico sem notificar órgãos oficiais.',
              isOptimal: false,
              consequenceText: 'Erro perigosíssimo e infração sanitária! Passar sonda em animal com raiva espalha saliva infectante e não reverte a paralisia bulbar viral, expondo o veterinário e ajudantes à contaminação fatal.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Manipulação orofaríngea desprotegida em animal com raiva paralítica',
                mechanism: 'Inoculação mecânica de saliva rica em Lyssavirus na pele arranhada do profissional',
                effect: 'Início do transporte retrógrado motor em direção ao sistema nervoso central',
                clinicalMeaning: 'Risco iminente de óbito humano por encefalomielite rábica'
              }
            },
            {
              id: 'opt_dec_zoo2_3',
              label: 'Indicar o abate emergencial da vaca para consumo da carne na propriedade e enterrar apenas as vísceras',
              description: 'Aproveitar a carcaça bovina antes que o animal morra deitada no pasto.',
              isOptimal: false,
              consequenceText: 'Crime contra a saúde pública! O consumo de carne ou manipulação de carcaças de animais com suspeita de raiva é formalmente proibido pelo MAPA devido ao risco extremo de corte acidental com contaminação pelos nervos infectados.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Desossa e manipulação clandestina de animal acometido por zoonose letal',
                mechanism: 'Exposição maciça de múltiplos trabalhadores a tecidos neurais ricos em partículas virais',
                effect: 'Contaminação humana múltipla e interdição judicial da propriedade',
                clinicalMeaning: 'Emergência de saúde pública e processo criminal para os responsáveis'
              }
            }
          ],
          learningTakeaways: [
            'Sialorreia e disfagia em bovinos em áreas enzoóticas de morcegos são sinais clássicos de raiva paralítica, JAMAIS devendo ser exploradas oralmente sem luvas.',
            'O período de observação de 10 dias é exclusivo para cães e gatos, pois herbívoros não transmitem rotineiramente por mordedura mas oferecem risco salivar imenso aos cuidadores.',
            'A coleta de encéfalo para diagnóstico rábico deve ser feita via forame magno para evitar dispersão de aerossóis ósseos com serra.'
          ]
        }
      },
      {
        id: 'sec_zoo_02_ex1',
        type: 'exercise',
        title: 'Exercício de Fixação: Dinâmica Ecoepidemiológica da Raiva',
        exerciseId: 'ex_zoonoses_02'
      }
    ]
  },

  // ==========================================
  // AULA 3: LEPTOSPIROSE ZOONÓTICA & WEIL
  // ==========================================
  {
    id: 'lesson_zoonoses_03_leptospirose',
    moduleId: 'mod_zoonoses',
    title: 'Leptospirose Zoonótica: Enchentes, Nefrite Intersticial e Síndrome de Weil',
    shortDescription: 'Leptospira interrogans, roedores reservatórios, penetração cutânea, vasculite, icterícia colestática, LRA e terapia combinada Ampicilina + Doxiciclina.',
    estimatedMinutes: 15,
    order: 3,
    concepts: ['concept_zoonoses_leptospirosis_weil', 'concept_zoonoses_one_health_surveillance'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_zoo_03_th1',
        type: 'theory',
        title: 'Ecoepidemiologia Hídrica, Fisiopatologia Renal e Racional Farmacológico de Ouro',
        contentMarkdown: `# Aula Universitária: Leptospirose Canina & Humana — A Zoonose do Saneamento Ambiental

> 📖 Referência Canônica: Ministério da Saúde — *Leptospirose: Diagnóstico e Manejo Clínico*. Greene, C. E. *Infectious Diseases of the Dog and Cat*, 5th ed. Cap. 43: Leptospirosis. DiBartola, S. P. *Fluid, Electrolyte, and Acid-Base Disorders in Small Animal Practice*, 4th ed. Elsevier, Cap. 18: Acute Renal Failure.

### O Patógeno e a Sobrevivência Ambiental

A Leptospirose é provocada por bactérias helicoidais Gram-negativas da espécie patogênica **Leptospira interrogans** (dividida em diversos sorogrupos como *Icterohaemorrhagiae*, *Canicola*, *Pomona*, *Grippotyphosa* e *Copenhageni*).
* **Morfologia & Motilidade:** Apresentam corpo espiralado filamentoso fino com ganchos nas extremidades e flagelos periplasmáticos que conferem rápida rotação em saca-rolhas, facilitando a penetração tissular ativa.
* **Persistência no Meio Aquático:** Sobrevivem por semanas e até meses em solos úmidos e poças d'água com pH neutro a ligeiramente alcalino (6.8 a 8.0). Em águas ácidas (pH < 6.0) ou ambientes expostos a dessecação e luz solar direta, as bactérias morrem em poucas horas.
* **O Reservatório Roedor:** Ratazanas de esgoto (*Rattus norvegicus*) e camundongos urbanos albergam a bactéria cronicamente na luz dos túbulos contorcidos renais sem apresentar manifestação clínica. Pela urina, excretam continuamente bilhões de leptospiras viáveis no ambiente urbano e pluvial.

---

### Transmissão em Eventos de Enchente & Síndrome de Weil

Durante inundações ou chuvas torrenciais (frequentes nas várzeas e bairros periféricos sem saneamento da calha do Paranapanema), as tocas dos roedores são lavadas e a água pluvial transborda carregando as leptospiras.
* **Vias de Penetração:** A infecção ocorre quando seres humanos ou cães entram em contato com a água ou lama contaminada: a bactéria penetra por mucosas íntegras (conjuntival, oral) ou através de pele macerada e escarificada por microfissuras.
* **Fisiopatologia da Síndrome de Weil (Forma Grave):**

\`\`\`mermaid
flowchart TD
    A["Roedor Sinantrópico Portador Renal (Urina Infectante)"] --> B["Transbordamento de Galerias Pluviais / Enchentes"]
    B --> C["Penetração Transcutânea em Cão ou Humano"]
    C --> D["Leptospiremia Aguda Sistêmica (Dias 1 a 7)"]
    D --> E["Produção de Esfingomielinases e Hemolisinas Endoteliais"]
    E --> F["Vasculite Generalizada com Aumento da Permeabilidade"]
    F --> G["Nefrite Intersticial Aguda e Lesão Renal Aguda Isostenúrica"]
    F --> H["Colestase Intra-hepática por Descolamento Canalicular (Icterícia)"]
    G & H --> I["Síndrome Íctero-Hemorrágica de Weil e Risco de Choque"]
\`\`\`

1. **Leptospiremia Inicial:** A bactéria multiplica-se na corrente circulatória e nos órgãos nobres nos primeiros 4 a 7 dias, secretando lipopolissacarídeos (LPS), esfingomielinases e toxinas formadoras de poros no endotélio capilar.
2. **Nefrite Intersticial Aguda & LRA:** A colonização das células do epitélio tubular renal e do interstício gera infiltrado inflamatório mononuclear severo, edema intersticial renal, isquemia medular e colapso da filtração glomerular, culminando em **Lesão Renal Aguda (LRA)** com isostenúria (densidade urinária fixada entre 1.008 e 1.012), oligúria e rápida elevação de ureia e creatinina.
3. **Colestase Intra-hepática:** Ao invadir o parênquima hepático, a *Leptospira* desorganiza as junções de adesão entre os hepatócitos contíguos aos canalículos biliares, provocando extravasamento de bile para os sinusoides sem necrose hepatocelular massiva inicial. O resultado laboratorial clássico é a **icterícia colestática flavínica**, com elevação desproporcional da Fosfatase Alcalina e Bilirrubina Total em relação à ALT.

---

### Diagnóstico & Racional Farmacológico de Ouro em Duas Fases

* **Diagnóstico Sorológico Padrão-Ouro:** A **Soroaglutinação Microscópica (SAM)**. Exige titulações pareadas (fase aguda e após 14 dias) evidenciando aumento de 4 vezes nos títulos, ou título único elevado (> 1:800) em animais não vacinados com sintomas compatíveis.
* **O Protocolo Antimicrobiano Combinado:**
  1. **Fase Aguda Hospitalar (Bacterêmica):** **Ampicilina sódica** na dose de **20 mg/kg, IV, a cada 8 horas** (ou Penicilina G Cristalina). Seu objetivo imediato é esterilizar a circulação sistêmica e os órgãos vitais, interrompendo a produção de toxinas e salvando o paciente em estado crítico e êmico (que não tolera medicamentos orais).
  2. **Fase Convalescente (Erradicação Renal do Portador):** Betalactâmicos NÃO eliminam a bactéria na luz dos túbulos renais! Logo após a reversão dos vômitos e estabilização da azotemia, é **mandatório prescrever Doxiciclina (5 mg/kg, VO, a cada 12 horas, por 14 a 21 dias ininterruptos)**. A Doxiciclina atinge concentrações bactericidas nas células tubulares e na urina, eliminando o estado de portador e impedindo que o cão continue eliminando leptospiras no quintal de casa para sempre.`
      },
      {
        id: 'sec_zoo_03_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Cão Thor (LRA e Icterícia)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Intensivo de Lesão Renal Aguda e Icterícia por Leptospirose Canina',
          patient: {
            name: 'Thor',
            species: 'Canino',
            breed: 'Pitbull',
            age: '2 anos',
            weightKg: 30,
            habitatOrEnvironment: 'Pátio periurbano contíguo a armazém de grãos com grande infestação de ratazanas (Ourinhos/SP)'
          },
          vitals: {
            heartRateBpm: 138,
            respiratoryRateRpm: 32,
            temperatureCelsius: 39.2,
            mucousMembranes: 'Mucosa oral e escleras com icterícia flavínica intensa (amarelo ouro)',
            capillaryRefillTimeSec: 3.0
          },
          anamnesis: 'Animal costuma caçar ratos no pátio e bebe água de poças após temporais. Há 3 dias apresenta apatia progressiva, vômitos biliosos incoercíveis ao menor contato com água, hiporexia total e melena. O tutor relata que nas últimas 24 horas o cão não urinou nenhuma gota no pátio (anúria aguda). Dor severa à palpação renal sublombar.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Perfil Bioquímico Hepatorrenal + Hemograma + Urinálise por Sondagem',
              findings: 'Avaliação laboratorial na internação evidenciando falência renal e colestase.',
              abnormalValues: [
                { parameter: 'Creatinina Sérica', value: '8.5 mg/dL', reference: '0.5 - 1.5 mg/dL', status: 'critical' },
                { parameter: 'Ureia Sérica (BUN)', value: '250 mg/dL', reference: '15 - 40 mg/dL', status: 'critical' },
                { parameter: 'Bilirrubina Total', value: '6.0 mg/dL', reference: '0.0 - 0.5 mg/dL', status: 'critical' },
                { parameter: 'Fosfatase Alcalina (FA)', value: '850 U/L', reference: '20 - 156 U/L', status: 'critical' },
                { parameter: 'Leucócitos Totais', value: '28.000 /uL (Neutrofilia com desvio)', reference: '6.000 - 17.000 /uL', status: 'critical' },
                { parameter: 'Densidade Urinária', value: '1.010 (Isostenúria fixa)', reference: '1.015 - 1.045', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com creatinina em 8.5 mg/dL, anúria, icterícia flavínica e vômitos refratários em área de roedores, qual é o protocolo de ressuscitação e tratamento intensivo?',
          decisionOptions: [
            {
              id: 'opt_dec_zoo3_1',
              label: 'Sondagem vesical fechada (monitorar débito urinário) + Fluidoterapia vigorosa NaCl 0.9% (repor déficit de 8% = 2400 mL em 6h) + Ampicilina sódica IV (20 mg/kg q8h = 600 mg) + Doxiciclina posterior oral por 14 dias + EPI estrito para a equipe',
              description: 'Restabelecer a perfusão renal, desobstruir fluxo urinário, neutralizar a bacteremia com betalactâmico parenteral e garantir biossegurança biológica contra a urina infectante.',
              isOptimal: true,
              consequenceText: 'Conduta impecável de medicina intensiva e saúde única! A reposição hidroeletrolítica calculada e monitorada por débito urinário (> 2 mL/kg/h) reverte a isquemia tubular antes da necrose cortical. A ampicilina intravenosa elimina a bacteremia sem agredir o estômago êmico, e a doxiciclina posterior garante que o cão não seja um eliminador perene de Leptospira.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Expansão volêmica rápida, antibioticoterapia venosa escalonada e contenção de urina',
                mechanism: 'Desobstrução do fluxo tubular intrarrenal, lise da Leptospira circulante e barreira biológica com EPI',
                effect: 'Restauração da diurese (> 2 mL/kg/h), queda contínua da creatinina para < 2.0 mg/dL e cura da icterícia',
                clinicalMeaning: 'Reversão completa da LRA, proteção da equipe clínica contra zoonose e recuperação total do animal'
              }
            },
            {
              id: 'opt_dec_zoo3_2',
              label: 'Administrar Doxiciclina oral em alta dose (20 mg/kg) via sonda alimentar e não passar sonda uretral para evitar trauma',
              description: 'Tentar erradicar logo a bactéria do rim por via oral e não monitorar débito urinário.',
              isOptimal: false,
              consequenceText: 'Erro perigoso e ineficaz! Fornecer doxiciclina oral em animal urêmico com vômitos provoca esofagite cáustica e vômito imediato. Sem fluidoterapia venosa calculada e sem sonda vesical para monitorar débito urinário, a LRA evolui para anúria permanente e edema agudo de pulmão.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de antibiótico oral irritante sem suporte volêmico intravenoso',
                mechanism: 'Agravamento da desidratação e hipoperfusão glomerular renal contínua',
                effect: 'Necrose tubular aguda isquêmica irreversível e uremia terminal',
                clinicalMeaning: 'Óbito do paciente por falência renal aguda'
              }
            },
            {
              id: 'opt_dec_zoo3_3',
              label: 'Aplicar anti-inflamatório Flunixina Meglumina e Dexametasona para desinflamar o fígado e rim',
              description: 'Priorizar anti-inflamatórios potentes para combater a inflamação dos órgãos.',
              isOptimal: false,
              consequenceText: 'Conduta desastrosa! AINEs em pacientes com LRA e desidratação bloqueiam as prostaglandinas renais vasodilatadoras, provocando infarto da medula renal, além de gerar hemorragia gástrica letal na presença de uremia.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Inibição de COX renal por AINE em animal hipovolêmico e azotêmico',
                mechanism: 'Vasoconstrição severa da arteríola aferente renal com isquemia glomerular total',
                effect: 'Cessação absoluta da taxa de filtração glomerular e hemorragia digestiva alta',
                clinicalMeaning: 'Morte iatrogênica rápida por choque hipovolêmico e insuficiência renal anúrica'
              }
            }
          ],
          learningTakeaways: [
            'A fluidoterapia guiada por débito urinário (> 2 mL/kg/h) é a chave para reverter a LRA isostenúrica antes que se instale necrose tubular permanente.',
            'A Ampicilina elimina a leptospiremia aguda na UTI, enquanto a Doxiciclina é insubstituível para erradicar a colonização dos túbulos renais e bloquear a excreção urinária crônica.',
            'Todo paciente com suspeita de Leptospirose deve ter sua urina rotulada como biohazard zoonótico de alto risco para o corpo de enfermagem e tutores.'
          ]
        }
      },
      {
        id: 'sec_zoo_03_ex1',
        type: 'exercise',
        title: 'Exercício de Fixação: Farmacoterapia e Manejo da Leptospirose',
        exerciseId: 'ex_zoonoses_03'
      }
    ]
  },

  // ==========================================
  // AULA 4: ESPOROTRICOSE ZOONÓTICA FELINA
  // ==========================================
  {
    id: 'lesson_zoonoses_04_esporotricose',
    moduleId: 'mod_zoonoses',
    title: 'Esporotricose Zoonótica Felina: O Fenômeno Urbano e Transmissão Direta',
    shortDescription: 'Sporothrix brasiliensis, hipervirulência em felinos, transmissão por arranhadura/mordedura, citologia em charuto e protocolo estendido de Itraconazol.',
    estimatedMinutes: 15,
    order: 4,
    concepts: ['concept_zoonoses_sporotrichosis_cat', 'concept_zoonoses_one_health_surveillance'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_zoo_04_th1',
        type: 'theory',
        title: 'Epidemiologia Felina de Sporothrix brasiliensis, Diagnóstico Rápido e Terapêutica Estendida',
        contentMarkdown: `# Aula Universitária: Esporotricose Zoonótica Felina — A Epidemia Subcutânea Brasileira

> 📖 Referência Canônica: Fundação Oswaldo Cruz (FIOCRUZ) — *Protocolo de Vigilância e Manejo da Esporotricose Zoonótica no Brasil*. Scott, D. W.; Miller, W. H.; Griffin, C. E. *Muller & Kirk's Small Animal Dermatology*, 7th ed. Saunders, Cap. 5: Fungal Skin Diseases. Barros, M. B. L. et al. *Sporotrichosis: an overview of the disease and its epidemic in Rio de Janeiro and São Paulo*. Med. Mycol.

### A Transição Epidemiológica: Do Espinho de Rosa às Garras do Felino

Historicamente, a esporotricose clássica (*Sporothrix schenckii*) era uma micose ocupacional benigna e esporádica de agricultores e jardineiros ("doença do cultivador de roseiras"), transmitida pela inoculação traumática de solo contaminado, palha ou cascas de árvores.
Nas últimas duas décadas, o Brasil vivencia a maior epidemia de esporotricose zoonótica do planeta, impulsionada por uma espécie hipervirulenta emergente: o **Sporothrix brasiliensis**.
* **O Nicho Felino:** O *S. brasiliensis* adaptou-se perfeitamente aos felinos domésticos e errantes. Os gatos não são simples vítimas acidentais: eles albergam uma **carga fúngica colossal** em suas lesões cutâneas, cavidade nasal, mucosa oral e nas unhas (devido ao hábito constante de auto-limpeza por lambedura das úlceras).
* **Transmissão Direta:** A transmissão prescindiu da presença do solo: tornou-se uma zoonose urbana direta transmitida de gato para gato e de gato para humanos através de **arranhaduras, mordeduras** ou contato de mucosas/pele lesionada com o exsudato purulento.

---

### Dimorfismo Térmico & Fisiopatologia

O *Sporothrix* é um fungo térmicamente dimórfico:
* **Fase Saprofítica (Ambiente / 25°C):** Desenvolve-se como hifas delgadas septadas com conidióforos típicos em flor (margarida).
* **Fase Parasítica (Hospedeiro / 37°C):** Converte-se em leveduras unicelulares invasivas, adaptadas para resistir ao calor biológico.

\`\`\`mermaid
flowchart TD
    A["Felino Macho Não-Castrado com Úlcera Exsudativa"] --> B["Briga Territorial ou Arranhadura em Humano/Cão"]
    B --> C["Inoculação de Sporothrix brasiliensis no Subcutâneo"]
    C --> D["Transição Térmica para Fase Leveduriforme a 37°C"]
    D --> E["Expressão de Melanina na Parede e Proteases Extracelulares"]
    E --> F["Formação de Infiltrado Piogranulomatoso com Supuração"]
    F --> G["Linfangite Ascendente Nodular em Cordão (Trajeto Linfático)"]
    G --> H["Úlceras Crônicas Secretantes e Nariz de Palhaço"]
\`\`\`

* **Evasão Fagocítica:** O *S. brasiliensis* expressa altos teores de melanina na parede celular e secreta proteases e adesinas que inibem o estresse oxidativo dos macrófagos, perpetuando a infecção no subcutâneo.
* **Disseminação Linfocutânea:** A infecção ascende pela drenagem linfática regional, originando nódulos subcutâneos que amolecem, fistulizam e formam feridas com aspecto de goma ulcerada ao longo do membro (linfangite nodular ascendente).

---

### Diagnóstico Citopatológico Rápido (Imprint)

> 💡 Pérola Clínica / Prova de Residência: Nos cães e nos seres humanos, a esporotricose é tipicamente paucibacilar (raríssimas leveduras, exigindo biópsia e cultivo). **Nos felinos, a esporotricose é exuberantemente multibacilar!** A simples realização de um *imprint* citológico (pressionar uma lâmina de vidro limpa diretamente sobre o exsudato da úlcera desnudada), seguido de coloração rápida tipo Panótico ou Giemsa, revela em 5 minutos ao microscópio óptico (objetiva de imersão 1000x) **inúmeras estruturas leveduriformes ovoides ou em formato clássico de charuto ("cigar-shaped")**, com halo claro perinuclear, tanto livres no fundo protéico quanto aglomeradas no citoplasma de macrófagos e neutrófilos degenerados.

---

### Protocolo Terapêutico & Mitos da Eutanásia

1. **Fármaco de Escolha:** **Itraconazol** na dose de **10 a 20 mg/kg, VO, a cada 24 horas (SID)**, administrado impreterivelmente junto a uma refeição rica em gordura para garantir solubilização e absorção intestinal ótima.
2. **A Regra de Ouro da Cura Clínica:** O tratamento **NUNCA DEVE SER INTERROMPIDO NO DIA DO FECHAMENTO DA FERIDA!** A medicação deve ser sustentada ininterruptamente por pelo menos **30 a 60 dias APÓS a cicatrização clínica e resolução citológica total de todas as lesões**, a fim de aniquilar os reservatórios fúngicos dérmicos profundos e impedir recidivas recidivantes refratárias.
3. **Casos Refratários:** A associação com **Iodeto de Potássio** (solução saturada ou cápsulas) promove efeito imunomodulador adjuvante espetacular em gatos que não respondem ao itraconazol isolado.

> ⚠️ Alerta Crítico em Saúde Pública: 
> * **Corticosteroides são ESTRITAMENTE PROIBIDOS:** A prescrição de pomadas ou injeções de corticoides em lesões suspeitas de esporotricose (seja no animal ou na pele do tutor arranhado) suprime a imunidade celular, gerando liquefação fulminante do tecido e disseminação sistêmica fatal do fungo.
> * **Eutanásia NÃO é Solução de Saúde Pública:** O abandono ou eutanásia de animais com esporotricose é cientificamente equivocado e contraindicado pelas diretrizes do SUS e da OMS. Os felinos respondem magnificamente ao tratamento médico quando isolados em casa e medicados adequadamente.`
      },
      {
        id: 'sec_zoo_04_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Gato Félix (Esporotricose Zoonótica)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Clínico Integrado de Esporotricose Felina e Zoonose Domiciliar',
          patient: {
            name: 'Félix',
            species: 'Felino',
            breed: 'SRD Macho Não-Castrado',
            age: '3 anos',
            weightKg: 4.5,
            habitatOrEnvironment: 'Acesso diário livre às ruas de Ourinhos/SP (histórico de brigas com outros gatos)'
          },
          vitals: {
            heartRateBpm: 180,
            respiratoryRateRpm: 32,
            temperatureCelsius: 38.8,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Félix retornou da rua há 2 meses com pequeno arranhão no nariz que não cicatrizou e virou uma cratera ulcerada com crostas purulentas e aumento de volume do focinho ("nariz de palhaço"). Há 2 semanas surgiram nódulos ulcerados no membro torácico esquerdo em trajeto ascendente. A tutora idosa apresenta há 15 dias uma úlcera indolor com bordas avermelhadas na ponta do dedo indicador direito após ter sido arranhada enquanto limpava o gato.',
          exams: [
            {
              category: 'cytopathology',
              title: 'Citopatologia por Imprint Direto da Lesão Nasal (Panótico Rápido)',
              findings: 'Lâmina de aposição corada em 3 minutos e examinada sob imersão a 1000x.',
              abnormalValues: [
                { parameter: 'Presença de Leveduras em Charuto', value: 'POSITIVO INTENSO (Numerosíssimas)', reference: 'Ausente', status: 'critical' },
                { parameter: 'Padrão Inflamatório', value: 'Piogranulomatoso supurativo', reference: 'Ausente', status: 'critical' },
                { parameter: 'Cultura Fúngica em Ágar Sabouraud (25°C e 37°C)', value: 'Crescimento de colônias dimórficas de Sporothrix', reference: 'Negativo', status: 'critical' },
                { parameter: 'Linfonodos Submandibulares', value: 'Reativos aumentados (2+)', reference: 'Normais', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Confirmada a esporotricose felina multibacilar e lesão zoonótica na tutora idosa, qual é a conduta integrada (One Health)?',
          decisionOptions: [
            {
              id: 'opt_dec_zoo4_1',
              label: 'Prescrever Itraconazol oral para o gato (10 mg/kg SID = 50 mg/dia com comida gordurosa) por 60 dias além da cura clínica + Confinamento domiciliar estrito + Encaminhamento URGENTE da tutora ao infectologista do SUS com relatório da lâmina',
              description: 'Tratar o felino com o protocolo antifúngico curativo, orientar biossegurança intradomiciliar (luvas) e garantir assistência médica humana imediata à tutora no SUS.',
              isOptimal: true,
              consequenceText: 'Conduta perfeita sob o olhar da Saúde Única! O Itraconazol é curativo e o confinamento domiciliar interrompe a transmissão na vizinhança. O encaminhamento ágil da tutora ao SUS impede que a úlcera digital humana progrida para a cadeia linfática profunda do braço, demonstrando a nobreza da atuação interdisciplinar do veterinário.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Terapia antifúngica direcionada no felino e encaminhamento médico da tutora',
                mechanism: 'Inibição da síntese de ergosterol na membrana do Sporothrix e bloqueio de novos inóculos por isolamento',
                effect: 'Remissão gradual das úlceras, cicatrização do focinho e epitelização da lesão digital da tutora',
                clinicalMeaning: 'Cura completa do paciente felino sem recidivas e preservação da integridade da saúde da família'
              }
            },
            {
              id: 'opt_dec_zoo4_2',
              label: 'Indicar a eutanásia imediata do gato e dizer para a tutora passar pomada de corticoide (Dexametasona) no dedo',
              description: 'Sacrificar o gato sem tratamento e orientar anti-inflamatório esteroidal na lesão humana.',
              isOptimal: false,
              consequenceText: 'Erro médico e crime sanitário gravíssimo! A eutanásia é terminantemente desnecessária, pois o animal responde muito bem à farmacoterapia. Além disso, aplicar corticoide na pele humana acelera a proliferação do fungo e causa disseminação fúngica sistêmica com risco de necrose extensa.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Corticoterapia tópica em micose zoonótica ativa',
                mechanism: 'Supressão da resposta imune celular mediada por linfócitos Th1 necessária para conter o fungo',
                effect: 'Disseminação fúngica fulminante no membro torácico da paciente humana',
                clinicalMeaning: 'Esporotricose cutâneo-linfática grave com internação hospitalar e dor crônica'
              }
            },
            {
              id: 'opt_dec_zoo4_3',
              label: 'Prescrever antibiótico Cefalexina para o gato e liberar para continuar saindo à rua desde que use colar protetor',
              description: 'Tratar como piodermite bacteriana e não impedir as saídas noturnas do felino.',
              isOptimal: false,
              consequenceText: 'Falha diagnóstica completa! Cefalexina é um antibacteriano e não tem absolutamente nenhuma ação contra fungos dimórficos. Permitir que o gato continue nas ruas disseminará o fungo para dezenas de outros felinos por disputas territoriais.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Prescrição inadequada de antibacteriano e negligência do isolamento',
                mechanism: 'Proliferação desimpedida do Sporothrix brasiliensis e inoculação por arranhões em outros animais',
                effect: 'Explosão de casos de esporotricose no bairro com surgimento de novo polo endêmico',
                clinicalMeaning: 'Surto comunitário de zoonose com prejuízo coletivo à saúde pública'
              }
            }
          ],
          learningTakeaways: [
            'A esporotricose felina por Sporothrix brasiliensis tem cura médica com Itraconazol oral prolongado; a eutanásia é terminantemente desnecessária e prejudicial à saúde pública.',
            'O tratamento antifúngico deve ser mantido por pelo menos 30 a 60 dias após o desaparecimento completo de todas as crostas e úlceras.',
            'Corticoides tópicos ou orais são terminantemente proibidos em feridas por Sporothrix, pois suprimem a imunidade celular e aceleram a necrose e disseminação do fungo.'
          ]
        }
      },
      {
        id: 'sec_zoo_04_ex1',
        type: 'exercise',
        title: 'Exercício de Fixação: Manejo Integrado da Esporotricose Zoonótica',
        exerciseId: 'ex_zoonoses_04'
      }
    ]
  },

  // ==========================================
  // AULA 5: VIGILÂNCIA, SINAN & GESTÃO DE SURTOS
  // ==========================================
  {
    id: 'lesson_zoonoses_05_vigilancia_sinan',
    moduleId: 'mod_zoonoses',
    title: 'Vigilância Epidemiológica, SINAN & Gestão de Surtos Zoonóticos (One Health)',
    shortDescription: 'Notificação compulsória em < 24h, atuação da UVZ, armadilhas luminosas CDC para flebotomíneos, inquérito canino censitário e manejo de focos urbanos.',
    estimatedMinutes: 15,
    order: 5,
    concepts: ['concept_zoonoses_surveillance_sinan', 'concept_zoonoses_one_health_surveillance'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_zoo_05_th1',
        type: 'theory',
        title: 'Sistemas de Informação em Saúde (SINAN), Entomologia de Campo e Bloqueio de Surtos',
        contentMarkdown: `# Aula Universitária: Vigilância em Saúde Única — O Médico Veterinário como Agente do SUS

> 📖 Referência Canônica: Ministério da Saúde (SVS) — *Guia de Vigilância em Saúde*, 6ª ed., Brasília, 2024. Portaria de Consolidação GM/MS nº 4/2017 (Lista Nacional de Notificação Compulsória). World Health Organization (WHO) — *One Health Joint Plan of Action (2022–2026)*. Conselho Federal de Medicina Veterinária (CFMV) — *Resolução nº 1.138: Código de Ética do Médico Veterinário*.

### O Papel Constitucional do Médico Veterinário na Saúde Pública

A Medicina Veterinária no Brasil está organicamente inserida no **Sistema Único de Saúde (SUS)** desde a promulgação da Lei nº 8.080/1990 e resoluções do Conselho Nacional de Saúde. O médico veterinário não atua apenas no curativismo biomédico individual de consultório, mas como a barreira sanitária primária que protege a população humana contra enfermidades emergentes e reemergentes: mais de **60% dos patógenos humanos conhecidos e 75% dos agentes infecciosos emergentes possuem origem zoonótica animal**.

---

### O SINAN & Os Prazos Oficiais de Notificação Compulsória

O **Sistema de Informação de Agravos de Notificação (SINAN)** centraliza a captação e o processamento de dados sobre doenças e epizootias de interesse da saúde pública nacional:
1. **Notificação Compulsória Imediata (Prazo Máximo de 24 Horas):**
   * Exigida para eventos de altíssimo potencial de disseminação rápida, letalidade elevada ou impacto internacional: **Raiva (humana ou animal suspeito)**, **Febre Maculosa Brasileira**, **Influenza Aviária de Alta Patogenicidade (IAAP)**, **Antraz (Carbúnculo hemático)** e **Peste**.
   * O fluxo de alerta deve ser emitido por telefone ou sistema eletrônico prioritário diretamente à Secretaria Municipal de Saúde, que repassa em cadeia para o Centro de Vigilância Epidemiológica Estadual (CVE) e Ministério da Saúde.
2. **Notificação Compulsória Semanal:**
   * Doenças de caráter endêmico crônico: **Leishmaniose Visceral Humana e Canina**, **Leptospirose**, **Tuberculose zoonótica** e **Brucelose humana**.

> 💡 Pérola Clínica / Prova de Residência: O dever de notificação de zoonoses e epizootias pelo médico veterinário clínico privado NÃO É OPCIONAL! O Artigo 269 do Código Penal Brasileiro tipifica como crime ("Omissão de notificação de doença") deixar o médico ou veterinário de denunciar à autoridade pública doença cuja notificação é compulsória, com pena de detenção e multa, além de processo ético-disciplinar com cassação de registro perante o CRMV/CFMV.

---

### Ações de Campo e Bloqueio de Focos pela UVZ

Quando um caso de zoonose grave é notificado, a **Unidade de Vigilância de Zoonoses (UVZ)** deflagra a Investigação Ecoepidemiológica Integrada:

\`\`\`mermaid
flowchart TD
    A["Diagnóstico Suspeito ou Confirmação Zoonótica no Consultório"] --> B["Preenchimento da Ficha de Notificação Compulsória do SINAN"]
    B --> C["Transmissão Imediata em < 24 Horas à Vigilância Epidemiológica / UVZ"]
    C --> D["Delimitação do Local Provável de Infecção (LPI) e Raio Focal (500m)"]
    D --> E["Entomologia de Campo: Instalação de Armadilhas Luminosas tipo CDC"]
    D --> F["Inquérito Sorológico Canino Censitário com Triagem Rápida DPP"]
    E & F --> G["Saneamento Ambiental e Encoleiramento com Deltametrina a 4%"]
    G --> H["Bloqueio do Surto e Interrupção da Cadeia de Transmissão Humana"]
\`\`\`

1. **Delimitação do Local Provável de Infecção (LPI):** Mapeamento do endereço onde a infecção ocorreu (residência do paciente, mata ciliar, áreas de pastagem ou trabalho).
2. **Entomologia de Campo & Armadilhas Luminosas CDC:** 
   * As armadilhas **CDC (Centers for Disease Control)** utilizam uma fonte de luz incandescente de 6 volts e uma ventoinha de sucção instalada sobre um recipiente de malha fina.
   * Na investigação de Leishmaniose, as armadilhas são instaladas no início do crepúsculo (18h) e retiradas pela manhã (6h) por três noites consecutivas no peridomicílio (galinheiros, chiqueiros, depósitos de matéria orgânica) para mensurar a densidade e dispersão do vetor *Lutzomyia longipalpis*.
3. **Inquérito Sorológico Canino Censitário:**
   * Coleta de amostras de sangue de **100% dos cães domiciliados no raio de 300 a 500 metros** ao redor do caso índice.
   * Triagem com **TR-DPP Bio-Manguinhos** e confirmação obrigatória de todos os reagentes por **ELISA** no laboratório central de saúde pública (Instituto Adolfo Lutz).
4. **Manejo Ambiental no Paradigma One Health:**
   * O mosquito-palha NÃO procria em água limpa (diferença crucial em relação ao mosquito da dengue, *Aedes aegypti*). Ele deposita seus ovos na **matéria orgânica úmida sombreada** em decomposição (folhas secas caídas, esterco acumulado, restos de comida animal).
   * A intervenção primordial é a **limpeza e poda de árvores** para permitir insolação direta do solo, remoção do esterco, telamento com malha fina (1 mm) em canis e colocação de **coleiras repelentes impregnadas com Deltametrina a 4%** em toda a população canina do raio focal, reduzindo o contato vetor-hospedeiro sem necessidade de eutanásia de animais saudáveis.`
      },
      {
        id: 'sec_zoo_05_lab1',
        type: 'lab',
        title: 'Prontuário de Saúde Pública: Gestão de Surto de Leishmaniose em Ourinhos',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Gestão de Surto e Investigação Epidemiológica de Leishmaniose em Ourinhos',
          patient: {
            name: 'Território Sanitário - Bairro Vila Brasil (Ourinhos/SP)',
            species: 'Saúde Populacional / Cães & Humanos',
            breed: 'Comunidade Periurbana contígua à mata ciliar do Rio Paranapanema',
            age: 'Caso Índice Humano: Criança de 4 anos internada com LVH',
            weightKg: 0,
            habitatOrEnvironment: 'Residências com quintais úmidos, galinheiros, solo sombreado com acúmulo de matéria orgânica'
          },
          vitals: {
            heartRateBpm: 0,
            respiratoryRateRpm: 0,
            temperatureCelsius: 0,
            mucousMembranes: 'Caso humano com hepatoesplenomegalia e pancitopenia severa confirmada por mielograma',
            capillaryRefillTimeSec: 0
          },
          anamnesis: 'A Vigilância Epidemiológica de Ourinhos foi notificada pelo Hospital Regional sobre a internação de uma menina de 4 anos com diagnóstico de Leishmaniose Visceral Humana (LVH). Como Médico Veterinário Coordenador da Unidade de Vigilância de Zoonoses (UVZ), você assume a liderança da investigação de campo no território para conter o foco e interromper o surto comunitário.',
          exams: [
            {
              category: 'field_surveillance',
              title: 'Entomologia de Campo com Armadilhas CDC + Inquérito Sorológico Canino Censitário',
              findings: 'Instalação de armadilhas luminosas CDC por 3 noites consecutivas e testagem dos cães em raio de 500 metros.',
              abnormalValues: [
                { parameter: 'Captura de Vetores (Armadilhas CDC)', value: '150 exemplares de Lutzomyia longipalpis (Alta infestação)', reference: 'Zero ou < 5 exemplares', status: 'critical' },
                { parameter: 'Inquérito Canino TR-DPP Biomanguinhos', value: '3 cães reagentes de 65 testados (Soro enviado ao Adolfo Lutz)', reference: 'Negativo', status: 'critical' },
                { parameter: 'Presença de Matéria Orgânica Úmida Peridomiciliar', value: 'Crítica em 8 quintais contíguos a galinheiros', reference: 'Ausente', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Com a presença massiva de Lutzomyia longipalpis no bairro, caso infantil humano grave e cães positivos, qual é o plano de intervenção integrado (One Health) imediato?',
          decisionOptions: [
            {
              id: 'opt_dec_zoo5_1',
              label: 'Notificação imediata ao SINAN + Mutirão de saneamento ambiental (remoção de matéria orgânica e poda para insolação do solo) + Borrifação residual com inseticida nos abrigos de animais + Encoleiramento dos cães com coleiras de Deltametrina 4% + Encaminhamento dos cães reagentes para contraprova oficial (ELISA)',
              description: 'Executar o protocolo moderno e humanizado do Ministério da Saúde: ataque ao nicho do vetor, bloqueio de transmissão com inseticida repelente e manejo ético dos cães.',
              isOptimal: true,
              consequenceText: 'Decisão de mestre em Saúde Única! Atacar a matéria orgânica e associar coleiras impregnadas com Deltametrina a 4% nos cães derruba a transmissão vetorial imediatamente sem causar comoção social. O respeito ao protocolo oficial de dupla testagem (DPP + ELISA) garante segurança diagnóstica jurídica e epidemiológica aos tutores.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Mobilização intersetorial com controle ambiental, químico e repelência em reservatórios',
                mechanism: 'Eliminação dos sítios de ovoposição das larvas do flebotomíneo e mortalidade/repelência das fêmeas hematófagas',
                effect: 'Queda de 95% na densidade de Lutzomyia longipalpis nas armadilhas CDC e bloqueio de novos casos humanos',
                clinicalMeaning: 'Extinção do foco comunitário de leishmaniose visceral e consolidação do território como protegido'
              }
            },
            {
              id: 'opt_dec_zoo5_2',
              label: 'Determinar a apreensão forçada e eutanásia sumária imediata de todos os 65 cães do bairro sem realizar testes confirmatórios e sem mexer no ambiente',
              description: 'Eliminar preventivamente toda a população canina do raio focal para tentar erradicar o reservatório.',
              isOptimal: false,
              consequenceText: 'Conduta retrógrada, ineficaz e cientificamente reprovada! A eutanásia em massa de cães saudáveis não reduz a transmissão de leishmaniose se o mosquito-palha continuar procriando na matéria orgânica dos quintais. Além disso, gera revolta social e ocultação de animais pelos tutores.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Tentativa de controle focada unicamente na eliminação canina sem controle vetorial',
                mechanism: 'Persistência de bilhões de flebotomíneos infectados que migram para picar humanos na ausência de cães',
                effect: 'Aumento paradoxal na taxa de infecção de crianças e mulheres no bairro',
                clinicalMeaning: 'Agravamento do surto humano com novos casos graves de leishmaniose visceral'
              }
            },
            {
              id: 'opt_dec_zoo5_3',
              label: 'Aplicar larvicida em caixas d água e tambores de água da comunidade e ignorar os galinheiros e folhas caídas',
              description: 'Tratar a água parada do bairro imaginando que o mosquito da leishmaniose procria como o da dengue.',
              isOptimal: false,
              consequenceText: 'Erro técnico primário imperdoável! O Lutzomyia longipalpis NÃO se reproduz em água estagnada ou caixas d água. Despejar larvicida na água desperdiça recursos públicos e deixa os verdadeiros criadouros orgânicos do vetor intocados.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Confusão biológica entre Aedes aegypti e flebotomíneos',
                mechanism: 'Manutenção integral dos criadouros de matéria orgânica onde as larvas de Lutzomyia prosperam',
                effect: 'Proliferação desimpedida do vetor transmissor no peridomicílio',
                clinicalMeaning: 'Fracasso completo da vigilância ambiental e avanço contínuo do surto'
              }
            }
          ],
          learningTakeaways: [
            'O flebotomíneo Lutzomyia longipalpis reproduz-se exclusivamente em matéria orgânica úmida sombreada, e não em água limpa estagnada.',
            'A eutanásia indiscriminada de cães saudáveis é cientificamente ineficaz e eticamente inaceitável; o controle moderno baseia-se em encoleiramento repelente com Deltametrina, saneamento ambiental e manejo de casos positivos com diagnóstico oficial duplo (DPP + ELISA).',
            'A notificação compulsória no SINAN em menos de 24 horas deflagra a mobilização coordenada entre medicina humana, veterinária e saneamento ambiental (Saúde Única).'
          ]
        }
      },
      {
        id: 'sec_zoo_05_ex1',
        type: 'exercise',
        title: 'Exercício de Fixação: Vigilância Epidemiológica & Diretrizes da UVZ',
        exerciseId: 'ex_zoonoses_05'
      }
    ]
  }
];
// ==========================================
// 8. MOLÉSTIAS INFECCIOSAS & ORNITOPATOLOGIA
// ==========================================
export const INFECTIOUS_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_infectious_01',
    conceptId: 'concept_infectious_parvovirus_coronavirus',
    type: 'multiple_choice',
    prompt: 'Um filhote canino de 3 meses, sem histórico vacinal, dá entrada no pronto-atendimento com diarreia sanguinolenta em jato de odor fétido sui generis, vômitos incoercíveis, hipotermia (36.9°C), TPC de 4 segundos e hemograma evidenciando leucócitos totais de 1.100/µL com 350 neutrófilos/µL (panleucopenia severa). Qual é a fisiopatologia celular primária que explica simultaneamente a enterite hemorrágica e a neutropenia profunda?',
    options: [
      {
        id: 'opt_inf1_1',
        text: 'O Parvovírus Canino (CPV-2) possui tropismo estrito por células de alta taxa mitótica dependentes do receptor de transferrina (TfR1), provocando lise das células progenitoras nas criptas de Lieberkühn (impedindo a renovação epitelial e causando colapso das vilosidades) e necrose de precursores granulocíticos na medula óssea, abrindo portas para a sepse por translocação de Gram-negativos entéricos',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O CPV-2 não se replica em enterócitos maduros diferenciados das vilosidades, mas sim nas células progenitoras indiferenciadas em mitose ativa das criptas intestinais. A lise das criptas colapsa toda a arquitetura vilositária, desnudando a mucosa intestinal. Simultaneamente, o vírus ataca o tecido linfóide e a medula óssea hematopoiética, gerando neutropenia crítica que facilita a bacteriemia e choque endotóxico por LPS.'
      },
      {
        id: 'opt_inf1_2',
        text: 'O vírus coloniza exclusivamente as placas de Peyer e produz uma neurotoxina pré-formada que paralisa os esfíncteres anais sem afetar a medula óssea',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O parvovírus não produz enterotoxinas nem neurotoxinas pré-formadas; sua ação é citolítica direta sobre células em divisão mitótica ativa.'
      },
      {
        id: 'opt_inf1_3',
        text: 'A diarreia ocorre por hipersecreção mediada por AMP cíclico estimulado pela toxina colérica bacteriana, enquanto a neutropenia é um erro laboratorial por agregação plaquetária',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A patogenia da parvovirose é de má absorção osmótica e exsudativa grave por desnudamento epitelial, e a neutropenia é real, decorrente de aplasia medular transitória e consumo massivo de neutrófilos.'
      },
      {
        id: 'opt_inf1_4',
        text: 'Trata-se de uma reação alérgica alimentar aguda a proteínas lácteas com desgranulação difusa de mastócitos restrita ao cólon descendente',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Alergia alimentar não gera panleucopenia severa de 1.100 leucócitos/µL nem colapso necrótico de criptas com diarreia em jato fétida.'
      }
    ]
  },
  {
    id: 'ex_infectious_02',
    conceptId: 'concept_infectious_canine_distemper',
    type: 'multiple_choice',
    prompt: 'Na cinomose canina (Canine Morbillivirus), cães que sobrevivem à fase catarral/respiratória inicial podem apresentar semanas depois a fase neurológica com mioclonias rítmicas involuntárias e hiperqueratose de coxins plantares ("Hard Pad Disease"). Qual é o mecanismo fisiopatológico subjacente a esses achados clínicos?',
    options: [
      {
        id: 'opt_inf2_1',
        text: 'O vírus utiliza o receptor Nectina-4 em células basais epidérmicas para induzir proliferação ceratocítica e hiperqueratose; no SNC, a invasão de oligodendrócitos e a resposta imune mediada por células desencadeiam encefalite desmielinizante inflamatória crônica, originando descargas ectópicas motoras que mantêm as mioclonias mesmo durante o sono profundo',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! O Morbillivirus utiliza CD150 (SLAM) na fase linfotrópica precoce e Nectina-4 para invadir epitélios e células gliais. Nos coxins e plano nasal, causa proliferação anômala e queratinização (hard pad). No SNC, a desmielinização primária (viral) e secundária (ataque imunomediado contra a mielina) danifica os tratos motores do tronco encefálico e medula espinhal, manifestando-se como contrações rítmicas involuntárias contínuas (mioclonias) que não cessam no sono.'
      },
      {
        id: 'opt_inf2_2',
        text: 'As mioclonias são reflexos puramente psiquiátricos secundários ao estresse de isolamento hospitalar, sem qualquer substrato neuropatológico encefálico',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. As mioclonias da cinomose têm base neuropatológica orgânica comprovada de encefalite desmielinizante e lesão de neurônios motores centrais.'
      },
      {
        id: 'opt_inf2_3',
        text: 'O vírus induz hipocalcemia severa que precipita cristais de oxalato no cerebelo e causa tétano ascendente nos quatro membros',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A patogenia da cinomose não envolve desequilíbrio de cálcio nem oxalatos no cerebelo.'
      },
      {
        id: 'opt_inf2_4',
        text: 'A hiperqueratose é provocada por carência exclusiva de zinco e a mioclonia resulta de luxação congênita da patela',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A "Hard Pad Disease" é induzida diretamente pela replicação do Canine Morbillivirus nos ceratinócitos.'
      }
    ]
  },
  {
    id: 'ex_infectious_03',
    conceptId: 'concept_infectious_strangles_equine',
    type: 'multiple_choice',
    prompt: 'Em um haras, um cavalo de 4 anos que se recuperou de Garrotilho (Streptococcus equi subsp. equi) há 3 semanas desenvolve subitamente febre (39.8°C), edema firme e doloroso com cacifo profundo em membros torácicos, pélvicos, focinho e bainha prepucial, acompanhado de petéquias e equimoses na mucosa oral e nasal. Qual é o diagnóstico fisiopatológico e a conduta terapêutica de urgência?',
    options: [
      {
        id: 'opt_inf3_1',
        text: 'Púrpura Hemorrágica (Vasculite Leucocitoclástica Asséptica por Hipersensibilidade Tipo III); deposição de imunocomplexos antígeno-anticorpo (SeM - IgA/IgG) no endotélio vascular ativando complemento; tratar com Dexametasona em doses decrescentes, hidroterapia, faixas compressivas e suporte podal',
        isCorrect: true,
        pedagogicalFeedback: 'Excelente! A púrpura hemorrágica é uma complicação imunomediada clássica pós-garrotilho ou pós-vacinação. Altos títulos de anticorpos contra a proteína de superfície SeM ligam-se a antígenos residuais, formando imunocomplexos circulantes que se depositam nas paredes vasculares. Ocorre ativação do complemento, recrutamento neutrofílico e necrose fibrinoide vascular com extravasamento maciço de plasma (edema em cacifo simétrico) e hemácias (petéquias/equimoses). O tratamento exige corticosteroides para interromper a vasculite imunomediada.'
      },
      {
        id: 'opt_inf3_2',
        text: 'Insuficiência cardíaca congestiva direita pura por ruptura de cordoalha da válvula tricúspide; tratar com furosemida e exercício intenso',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A presença de petéquias, histórico recente de garrotilho e edema inflamatório facial/podal agudo caracterizam vasculite imunomediada, e não falência cardíaca primária.'
      },
      {
        id: 'opt_inf3_3',
        text: 'Infecção fúngica disseminada por Aspergillus fumigatus; administrar anfotericina B em altas doses sem anti-inflamatórios',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O quadro é uma complicação estreptocócica imunomediada típica pós-garrotilho.'
      },
      {
        id: 'opt_inf3_4',
        text: 'Picada múltipla de abelhas africanas com choque anafilático tipo I mediado por IgE; tratar apenas com adrenalina em bolus contínuo',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O curso subagudo com lesões purpúricas 3 semanas após infecção estreptocócica define a hipersensibilidade do tipo III da púrpura hemorrágica.'
      }
    ]
  },
  {
    id: 'ex_infectious_04',
    conceptId: 'concept_infectious_newcastle_disease',
    type: 'multiple_choice',
    prompt: 'Qual é o determinante molecular e fisiopatológico que diferencia as cepas velogênicas de alta virulência daquelas lentogênicas ou vacinais do Paramyxovírus Aviário Tipo 1 (APMV-1), agente da Doença de Newcastle?',
    options: [
      {
        id: 'opt_inf4_1',
        text: 'A sequência de aminoácidos no sítio de clivagem proteolítica da Proteína F (F0 em F1+F2): cepas velogênicas contêm múltiplos aminoácidos básicos clivados por furinas intracelulares ubíquas em todos os tecidos (replicação sistêmica fatal com hemorragias no proventrículo e torcicolo), enquanto cepas lentogênicas possuem sítio monobásico clivado apenas por proteases do tipo tripsina no trato respiratório/digestivo',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! A clivagem da proteína F0 é essencial para a fusão viral com a célula da ave. Cepas lentogênicas dependem de proteases extracelulares restritas aos epitélios respiratório e entérico. Já as cepas velogênicas possuem múltiplos resíduos básicos (arginina e lisina) no sítio de clivagem, permitindo que furinas intracelulares ativas no complexo de Golgi de praticamente todos os tecidos e células endoteliais ativem o vírus, gerando infecção sistêmica fulminante com mortalidade de até 100%.'
      },
      {
        id: 'opt_inf4_2',
        text: 'A presença de uma cápsula de polissacarídeo que impede a lise osmótica em água destilada, permitindo que a bactéria sobreviva sem clivagem proteica',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Newcastle é causada por um vírus de RNA envelopado da família Paramyxoviridae, e não por uma bactéria capsulada.'
      },
      {
        id: 'opt_inf4_3',
        text: 'O número de segmentos de RNA genômico: cepas velogênicas possuem 24 fragmentos cromossômicos e lentogênicas apenas 1',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O genoma do APMV-1 é de fita simples contínua e não segmentada.'
      },
      {
        id: 'opt_inf4_4',
        text: 'A capacidade exclusiva de produzir esporos termo-resistentes no solo que infectam apenas aves canoras silvestres',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Vírus não formam esporos bacterianos e o APMV-1 infecta galinhas, perus e diversas outras aves industriais e silvestres.'
      }
    ]
  },
  {
    id: 'ex_infectious_05',
    conceptId: 'concept_infectious_avian_influenza',
    type: 'multiple_choice',
    prompt: 'Na Influenza Aviária de Alta Patogenicidade (IAAP H5N1), qual é a base fisiopatológica que explica a mortalidade fulminante de até 100% em 48-72 horas, acompanhada de cianose arroxeada severa de crista e barbelas e sufusões hemorrágicas nas pernas?',
    options: [
      {
        id: 'opt_inf5_1',
        text: 'O sítio de clivagem polibásico da hemaglutinina (HA) permite clivagem ubíqua por furina e replicação viral direta nas células endoteliais vasculares, gerando lise endotelial maciça, tempestade de citocinas, trombose microvascular difusa, isquemia periférica e falência orgânica múltipla por CIVD',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A inserção de resíduos de aminoácidos básicos no sítio de clivagem da HA habilita a replicação do vírus da IAAP nas células endoteliais de todo o corpo da ave. A replicação intraendotelial provoca descolamento, necrose vascular e trombose generalizada. O bloqueio do fluxo microvascular nos apêndices cefálicos produz a cianose arroxeada patognomônica de cristas e barbelas, enquanto a fragilidade capilar severa origina as petéquias nas canelas e hemorragias viscerais maciças.'
      },
      {
        id: 'opt_inf5_2',
        text: 'O vírus secreta uma potente neurotoxina que bloqueia os receptores muscarínicos cardíacos, causando bradicardia imediata sem atingir o endotélio',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Vírus influenza não produzem toxinas; a lesão é citopática endotelial direta e imunomediada por citocinas.'
      },
      {
        id: 'opt_inf5_3',
        text: 'A destruição exclusiva das hemácias adultas pelo baço leva a uma anemia ferropriva crônica que demora meses para manifestar sinais clínicos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A IAAP H5N1 tem curso hiperagudo a agudo com mortalidade explosiva em 48 a 72 horas por choque endotelial e dano multiorgânico.'
      },
      {
        id: 'opt_inf5_4',
        text: 'A afecção decorre de hipercalcemia iatrogênica alimentar que calcifica a traqueia e asfixia as aves por obstrução mecânica de cartilagens',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Trata-se de uma infecção viral sistêmica com tropismo endotelial letal e emergência sanitária global.'
      }
    ]
  }
];

export const INFECTIOUS_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_infectious_01_parvovirus_coronavirus',
    moduleId: 'mod_infectious_diseases',
    title: 'Parvovirose e Coronavirose Canina: Enterite Hemorrágica, Panleucopenia e Choque Séptico',
    shortDescription: 'Tropismo por criptas de Lieberkühn, colapso vilositário, translocação de Gram-negativos, sepse endotóxica e reposição volêmica guiada por metas.',
    estimatedMinutes: 22,
    order: 1,
    concepts: ['concept_infectious_parvovirus_coronavirus'],
    xpReward: 160,
    sections: [
      {
        id: 'sec_inf_01_th1',
        type: 'theory',
        title: 'Fisiopatologia Celular, Quebra de Barreira Entérica e Terapia Intensiva no CPV-2',
        contentMarkdown: `### Etiologia e Resistência Ambiental do Parvovírus Canino (CPV-2)

O Parvovírus Canino tipo 2 (CPV-2, variantes CPV-2a, 2b e 2c) é um dos patógenos virais mais contagiosos e devastadores da clínica médica de pequenos animais:
* **Estrutura Viral:** Vírus DNA de fita simples, não envelopado e de cápside icosaédrica. Sua ausência de envelope lipídico confere resistência extraordinária no ambiente: sobrevive por meses ou mais de 1 ano em pisos, roupas, gaiolas e solo, tolerando grande parte dos desinfetantes hospitalares comuns (quaternários de amônio e álcool 70%).
* **Agente Desinfetante de Escolha:** O **Hipoclorito de Sódio a 1:30** (solução de água sanitária a 0.5% - 1% de cloro livre) com tempo de contato mínimo de 15 minutos é o agente químico comprovado para desinfecção do fômites e instalações.
* **Sinergismo com o Coronavírus Canino (CCoV):** Enquanto o CPV-2 ataca a base proliferativa das criptas, o CCoV replica-se nos enterócitos maduros do terço apical das vilosidades intestinais. A coinfecção CPV + CCoV provoca destruição anatômica de ponta a ponta da vilosidade, deflagrando desidratação hiperaguda e mortalidade superior a 80% sem suporte intensivo.

---

### A Cascata Patológica: Da Cripta à Sepse por Translocação Bacteriana

O CPV-2 requer a maquinaria enzimática de células em intensa síntese de DNA e divisão mitótica para replicar seu genoma, ligando-se a **receptores de transferrina tipo 1 (TfR1)**:

1. **Lise das Células das Criptas de Lieberkühn:** No intestino delgado (especialmente jejuno e íleo), a destruição das células-tronco e progenitoras nas criptas interrompe o fluxo contínuo de migração celular para as vilosidades.
2. **Colapso Vilositário e Desnudamento Mucoso:** À medida que os enterócitos senescentes descamam naturalmente no ápice das vilosidades e não são repostos, as vilosidades sofrem colapso e encurtamento estrutural acentuado (*villus blunting*). A lâmina própria fica completamente desnudada, com vasos capilares e linfáticos rotos vertendo plasma e sangue diretamente na luz intestinal (**enterite hemorrágica difusa** com odor pútrido característico por decomposição bacteriana).
3. **Panleucopenia Crítica e Aplasia Medular:** O vírus infecta e lisa precursores mielóides e eritroides na medula óssea hematopoiética e linfócitos nas placas de Peyer, timo e linfonodos mesentéricos. Instala-se **panleucopenia aguda** com neutropenia severa (frequentemente < 500 neutrófilos/µL).
4. **Translocação Bacteriana e Choque Endotóxico:** A quebra mecânica e imunológica da barreira hematoentérica permite a invasão de bactérias comensais Gram-negativas (*Escherichia coli*, *Klebsiella*) e anaeróbias (*Clostridium perfringens*) para a corrente sanguínea mesentérica. Ocorre liberação massiva de lipopolissacarídeo (LPS / endotoxina), ativando receptores TLR-4 em macrófagos, desencadeando a tempestade de citocinas (TNF-α, IL-1β, IL-6), vasodilatação sistêmica, hipotensão refratária e choque séptico.

\`\`\`mermaid
flowchart TD
    A["Infecção Oronasal por CPV-2 e Ligação aos Receptores de Transferrina (TfR1)"] --> B["Destruição das Células-Tronco Indiferenciadas nas Criptas de Lieberkühn"]
    B --> C["Colapso e Atrofia Vilositária Maciça com Desnudamento da Lâmina Própria"]
    C --> D["Enterite Hemorrágica: Perda Hidroeletrolítica, Hipoalbuminemia e Diarreia em Jato"]
    A --> E["Lise de Precursores Hematopoiéticos Medulares e Linfócitos em Placas de Peyer"]
    E --> F["Panleucopenia Severa com Neutropenia Absoluta Crítica (< 500/uL)"]
    D --> G["Translocação de Bactérias Gram-Negativas Entéricas (E. coli / Clostridium)"]
    F --> G
    G --> H["Endotoxemia Maciça por LPS com Ativação de TLR-4 e Tempestade de Citocinas"]
    H --> I["Choque Séptico/Endotóxico, Hipotermia, Hipotensão Refratária e Óbito"]
\`\`\``
      },
      {
        id: 'sec_inf_01_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Thor (Filhote com Parvovirose e Choque Séptico)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Ressuscitação Hemodinâmica, Terapia Intensiva e Controle de Sepse na Parvovirose Canina',
          patient: {
            name: 'Thor (Pitbull Terrier Americano)',
            species: 'Canina',
            breed: 'Pitbull',
            age: '3 meses e meio',
            weightKg: 8.5,
            habitatOrEnvironment: 'Residência urbana em Ourinhos/SP com acesso a quintal de terra'
          },
          vitals: {
            heartRateBpm: 185,
            respiratoryRateRpm: 48,
            temperatureCelsius: 36.8,
            mucousMembranes: 'Branco-acinzentadas com ressecamento e pegajosas',
            capillaryRefillTimeSec: 3.5
          },
          anamnesis: 'Filhote adquirido há 10 dias sem nenhuma vacina ética administrada. Há 48 horas iniciou vômitos alimentares que evoluíram para êmese biliosa incoercível, prostração extrema e recusa alimentar total. Há 24 horas apresenta diarreia hemorrágica líquida contínua com coágulos e odor pútrido fétido insuportável. O tutor tentou fornecer água e soro caseiro por via oral, mas o animal vomita imediatamente. Ao exame clínico: decúbito lateral forçado, pulso femoral filiforme fraco, hipotermia (36.8°C), enoftalmia acentuada e turgor cutâneo > 4 segundos (desidratação estimada em 10-12%).',
          exams: [
            {
              category: 'laboratorial_intensivo',
              title: 'Painel Hemodinâmico, Gasometria e Hemograma de Urgência',
              findings: 'Avaliação de parâmetros de perfusão tecidual e série leucocitária.',
              abnormalValues: [
                { parameter: 'Leucócitos Totais', value: '850 /uL (Panleucopenia extrema)', reference: '6.000 - 17.000 /uL', status: 'critical' },
                { parameter: 'Neutrófilos Segmentados', value: '320 /uL', reference: '3.000 - 11.500 /uL', status: 'critical' },
                { parameter: 'Lactato Sanguíneo', value: '5.8 mmol/L (Hipoperfusão / Acidose metabólica)', reference: '< 2.0 mmol/L', status: 'critical' },
                { parameter: 'Potássio Sérico (K+)', value: '2.7 mEq/L (Hipocalemia severa por perdas entéricas)', reference: '3.8 - 5.5 mEq/L', status: 'critical' },
                { parameter: 'Albumina Sérica', value: '1.7 g/dL (Hipoalbuminemia crítica)', reference: '2.6 - 4.0 g/dL', status: 'critical' },
                { parameter: 'Teste Imunocromatográfico CPV Fezes', value: 'POSITIVO FORTE', reference: 'Negativo', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com base na hipotermia (36.8°C), hiperlactatemia severa (5.8 mmol/L), hipocalemia (2.7 mEq/L) e neutropenia crítica (320/µL), qual é a conduta prioritária e emergencial de suporte de UTI?',
          decisionOptions: [
            {
              id: 'opt_dec_inf1_1',
              label: 'Acesso venoso periférico calibroso + Bolus aquecido de Ringer Lactato (20-30 mL/kg em 20 min) reavaliando lactato e pulso + Correção de hipocalemia com KCl infundido (máx 0.5 mEq/kg/h) + Ampicilina/Sulbactam IV + Maropitant IV e aquecimento ativo',
              description: 'Ressuscitação hemodinâmica guiada por metas para choque séptico e hipovolêmico, proteção antimicrobiana parenteral de amplo espectro e correção hidroeletrolítica.',
              isOptimal: true,
              consequenceText: 'Excelente conduta de medicina intensiva! A rápida restauração da volemia com cristaloide balanceado aquecido melhorou o débito cardíaco e a perfusão microvascular, reduzindo o lactato para 2.4 mmol/L em 3 horas. A suplementação de potássio preveniu arritmias ventriculares e íleo adinâmico. A antibioticoterapia parenteral protegeu o paciente desprovido de neutrófilos contra a sepse fulminante por translocação de E. coli.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Expansão volêmica rápida aquecida, reposição de KCl e cobertura antibacteriana parenteral',
                mechanism: 'Restauração do volume circulante efetivo e bloqueio da sepse translocacional',
                effect: 'Clareamento de lactato sérico, normalização térmica e restauração da pressão de perfusão',
                clinicalMeaning: 'Reversão do choque endotóxico e sobrevivência do filhote crítico'
              }
            },
            {
              id: 'opt_dec_inf1_2',
              label: 'Administrar Dexametasona (2 mg/kg IV) em dose imunossupressora para cessar a inflamação intestinal e forçar papinha hipercalórica oral',
              description: 'Uso de corticoide em sepse viral ativa e forçamento de alimentação em estômago atônico.',
              isOptimal: false,
              consequenceText: 'Desfecho fatal acelerado! O uso de corticoides exacerba a imunossupressão do paciente neutropênico, potencializa a ulceração gástrica e favorece a proliferação bacteriana sistêmica. Forçar alimentação oral em paciente com íleo e vômitos incoercíveis induz broncoaspiração massiva e morte por parada cardiorrespiratória em poucos minutos.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Imunossupressão iatrogênica com corticoide e sobrecarga oral forçada',
                mechanism: 'Inibição de fagócitos residuais com broncoaspiração de conteúdo gástrico ácido',
                effect: 'Pneumonia aspirativa associada a colapso circulatório séptico irreversível',
                clinicalMeaning: 'Óbito iatrogênico rápido do paciente'
              }
            },
            {
              id: 'opt_dec_inf1_3',
              label: 'Prescrever sulfametoxazol com trimetoprima em suspensão oral e vermífugo em pasta para tratar em casa',
              description: 'Tratamento ambulatorial oral em cão com colapso cardiovascular e êmese.',
              isOptimal: false,
              consequenceText: 'Erro gravíssimo de imperícia! Medicamentos por via oral em cães com enterite hemorrágica por parvovirose e vômitos são imediatamente expelidos ou não absorvidos devido à necrose da mucosa. Sem reposição fluídica venosa imediata, o paciente entra em choque hipovolêmico irreversível e morre em menos de 12 horas.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Indicação de via oral em paciente com perda de barreira mucosa e vômitos refratários',
                mechanism: 'Ausência total de reposição das perdas volêmicas e absorção nula do fármaco',
                effect: 'Progressão ininterrupta do choque hipovolêmico e desidratação letal',
                clinicalMeaning: 'Falecimento do animal por negligência terapêutica'
              }
            }
          ],
          learningTakeaways: [
            'O CPV-2 induz necrose das criptas intestinais de Lieberkühn e da medula óssea, provocando o binômio fatal enterite hemorrágica e panleucopenia.',
            'A causa mortis principal na parvovirose não é a replicação viral isolada, mas a sepse bacteriana e o choque endotóxico secundários à translocação de Gram-negativos entéricos pela mucosa desnudada.',
            'A terapia de choque baseia-se em reposição fluídica venosa agressiva guiada por metas (lactato, TPC, pressão arterial), correção precoce de hipocalemia e antibioticoterapia parenteral bactericida.'
          ]
        }
      },
      {
        id: 'sec_inf_01_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Patofisiologia & Terapia Intensiva no CPV-2',
        exerciseId: 'ex_infectious_01'
      }
    ]
  },
  {
    id: 'lesson_infectious_02_canine_distemper',
    moduleId: 'mod_infectious_diseases',
    title: 'Cinomose Canina: Imunopatogênese, Fases Sistêmicas e Encefalite Desmielinizante',
    shortDescription: 'Receptores CD150 e Nectina-4, tropismo epitelial e neurotrópico, mioclonias patognomônicas, quimioluminescência e imunomodulação.',
    estimatedMinutes: 22,
    order: 2,
    concepts: ['concept_infectious_canine_distemper'],
    xpReward: 160,
    sections: [
      {
        id: 'sec_inf_02_th1',
        type: 'theory',
        title: 'Morbillivirus Canino: Receptores Moleculares, Fases Clínicas e Neuropatologia',
        contentMarkdown: `### O Canine Morbillivirus e a Dinâmica de Receptores Celulares

O vírus da cinomose canina (CDV) pertence ao gênero *Morbillivirus* da família *Paramyxoviridae*. É um vírus envelopado de RNA de fita simples senso negativo que orquestra uma infecção bifásica altamente agressiva:
* **Receptor CD150 (SLAM - Signaling Lymphocytic Activation Molecule):** Utilizado na **Fase Linfotrópica Inicial**. O vírus inalado em aerossóis infecta macrófagos alveolares e células dendríticas no trato respiratório superior, migrando para linfonodos regionais e baço. Provoca apoptose maciça de linfócitos B e T (CD4+ e CD8+), resultando em imunodeficiência transitória profunda e linfopenia acentuada.
* **Receptor Nectina-4 (PVRL4):** Utilizado na **Fase Epitelial Secundária**. Expresso na membrana basolateral de células epiteliais do trato respiratório, gastrointestinal, urinário e epiderme. A invasão epitelial manifesta-se por:
  1. *Fase Respiratória:* Rinite serosa que evolui para corrimento mucopurulento espesso bilateral, tosse e broncopneumonia bacteriana secundária (*Bordetella bronchiseptica*, *Streptococcus spp.*).
  2. *Fase Gastrointestinal:* Vômito, diarreia aquosa mucóide e anorexia.
  3. *Fase Oftálmica:* Ceratoconjuntivite seca (KCS) por adenite necrotizante da glândula lacrimal e neurite óptica.
  4. *Fase Dermatológica Patognomônica:* Pústulas abdominais assépticas e a clássica **"Hard Pad Disease"** (hiperqueratose espessa e fissurada do espelho nasal e coxins plantares por hiperplasia ceratocítica induzida pela infecção persistente).

---

### A Neuropatologia da Cinomose: Desmielinização e as Mioclonias Rítmicas

\`\`\`mermaid
flowchart TD
    A["Inalação de Gotículas com Canine Morbillivirus e Ligação ao Receptor CD150 (SLAM)"] --> B["Depleção Linfocitária em Tonsilas e Linfonodos com Linfopenia Severa Inicial"]
    B --> C["Viremia e Disseminação Epitelial via Receptor Nectina-4 (Vias Aéreas, TGI e Pele)"]
    C --> D["Hiperqueratose de Coxins (Hard Pad) + Secreção Oculonasal Mucopurulenta"]
    C --> E["Invasão do SNC via Plexo Coroide ou Transmissão Axonal pelo Nervo Olfatório"]
    E --> F["Desmielinização Primária Viral Aguda com Replicação em Células Gliais"]
    F --> G["Resposta Imunomediada Crônica com Fagocitose da Mielina por Micróglia e Macrófagos"]
    G --> H["Lesão de Neurônios Motores em Tronco Encefálico e Cornos Ventrais da Medula"]
    H --> I["Descargas Ectópicas Rítmicas Involuntárias: Mioclonias que Persistem no Sono"]
\`\`\`

* **Encefalite Desmielinizante Aguda (Cão Jovem / Sem Imunidade):** Ocorre invasão viral direta de oligodendrócitos e astrócitos no parênquima cerebral, gerando desmielinização primária não inflamatória rápida, com crises convulsivas focais tipo *chewing gum fits* (movimentos rítmicos de mastigação em falso), ataxia e paralisia ascendente.
* **Encefalite Desmielinizante Crônica Imunomediada:** Em cães com resposta humoral intermediária, o vírus persiste no SNC e deflagra uma reação de hipersensibilidade do tipo II/III. Células microgliais e macrófagos ativados fagocitam a bainha de mielina em resposta a imunocomplexos e citocinas inflamatórias.
* **O Sinal Patognomônico das Mioclonias:** Contrações musculares rítmicas, repetitivas e involuntárias (frequência de 1 a 2 Hz) de grupos musculares isolados (masseteres, músculos temporais ou membros flexores). **Marco fisiológico fundamental:** as mioclonias decorrem de focos ectópicos de despolarização neuronal espontânea no tronco encefálico e medula, **persistindo ininterruptamente mesmo durante o sono profundo e sob anestesia leve**, diferenciando-se de abalos musculares de origem cortical.`
      },
      {
        id: 'sec_inf_02_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Lobo (SRD Resgatado com Fase Neurológica)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Terapêutico e Suporte Neuroprotetor na Fase Neurológica da Cinomose Canina',
          patient: {
            name: 'Lobo (SRD Resgatado)',
            species: 'Canina',
            breed: 'SRD',
            age: '7 meses',
            weightKg: 11.5,
            habitatOrEnvironment: 'Abrigo de acolhimento de animais em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 125,
            respiratoryRateRpm: 32,
            temperatureCelsius: 39.4,
            mucousMembranes: 'Congestas com crostas purulentas perioculares',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Cão jovem resgatado há 2 semanas de via pública com histórico prévio de tosse seca e secreção ocular purulenta. Há 4 dias começou a apresentar espessamento rígido e rachaduras nos coxins das 4 patas e espelho nasal. Há 48 horas desenvolveu contrações espasmódicas rítmicas involuntárias do músculo temporal esquerdo (movimento mastigatório em falso) e mioclonias no membro torácico esquerdo que permanecem ativas sem cessar, inclusive quando o animal dorme profundamente. Apresenta febre intermitente de 39.4°C.',
          exams: [
            {
              category: 'laboratorial_neurologico',
              title: 'Painel Molecular e Citológico para Morbillivirus Canino',
              findings: 'Detecção do genoma viral e avaliação de liquor e sangue.',
              abnormalValues: [
                { parameter: 'RT-qPCR para Cinomose em Urina e Swab Ocular', value: 'POSITIVO (Carga viral elevada)', reference: 'Negativo', status: 'critical' },
                { parameter: 'Linfócitos Totais em Sangue Periférico', value: '580 /uL (Linfopenia severa)', reference: '1.000 - 4.800 /uL', status: 'critical' },
                { parameter: 'Teste de Schirmer (Olho Esquerdo e Direito)', value: '5 mm/min (Ceratoconjuntivite Seca)', reference: '15 - 25 mm/min', status: 'critical' },
                { parameter: 'Exame de Coxins Plantares', value: 'Hiperqueratose espessa com fissuras (Hard Pad)', reference: 'Almofadas plantares elásticas e íntegras', status: 'critical' },
                { parameter: 'Abalos Rítmicos Temporais', value: 'Mioclonia involuntária contínua a 1.5 Hz', reference: 'Ausente', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Na fase neurológica com mioclonias ativas, linfopenia severa e KCS secundária, qual é o protocolo de estabilização neurofuncional e isolamento adequado?',
          decisionOptions: [
            {
              id: 'opt_dec_inf2_1',
              label: 'Isolamento estrito com desinfecção por hipoclorito 1:30 + Controle de excitabilidade neuronal com Levetiracetam (20 mg/kg TID) associado a Gabapentina (10 mg/kg BID/TID) + Neuroproteção com N-Acetilcisteína e Vitamina E + Pomada oftálmica lubrificante e imunomoduladora (Ciclosporina)',
              description: 'Manejo focado em controle das descargas ectópicas motoras, alívio da dor neuropática, neuroproteção antioxidante e preservação da superfície ocular.',
              isOptimal: true,
              consequenceText: 'Excelente conduta médica baseada em evidências! A associação de Levetiracetam e Gabapentina reduziu significativamente a intensidade das mioclonias e a hiperestesia espinhal sem causar a depressão respiratória ou hepatotoxicidade extrema de barbitúricos em altas doses. O isolamento rigoroso preveniu a contaminação dos 40 outros filhotes do abrigo, e o suporte lacrimal evitou úlceras corneanas de perfuração.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Modulação de excitotoxicidade por glutamato com Levetiracetam/Gabapentina e suporte antioxidante',
                mechanism: 'Estabilização de membranas neuronais e atenuação do estresse oxidativo glial',
                effect: 'Atenuação da dor neuropática, controle de crises convulsivas focais e preservação ocular',
                clinicalMeaning: 'Estabilização clínica satisfatória com oportunidade de reabilitação neurofuncional'
              }
            },
            {
              id: 'opt_dec_inf2_2',
              label: 'Prescrever Dexametasona (1 mg/kg IV) em dose imunossupressora para interromper as mioclonias imediatamente',
              description: 'Uso de corticosteroide em paciente com replicação viral e linfopenia ativa.',
              isOptimal: false,
              consequenceText: 'Erro perigoso e contraindicado! O paciente já apresenta linfopenia severa (580 linfócitos/µL). A imunossupressão iatrogênica por corticoide reativa a replicação do vírus da cinomose no córtex cerebral, acelerando a necrose neuronal e convertendo mioclonias focais em status epilepticus fatal em poucas horas.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Administração de corticoide imunossupressor na fase virêmica ativa',
                mechanism: 'Ablação da imunidade citotóxica antiviral com explosão de replicação no parênquima encefálico',
                effect: 'Progressão fulminante para encefalite necrosante generalizada e coma',
                clinicalMeaning: 'Deterioração neurológica catastrófica e óbito do paciente'
              }
            },
            {
              id: 'opt_dec_inf2_3',
              label: 'Liberar o cão de volta para a baia coletiva do abrigo por considerar que a fase neurológica não é contagiosa',
              description: 'Quebra primária de biossegurança institucional em ambiente coletivo.',
              isOptimal: false,
              consequenceText: 'Desastre sanitário em abrigo! O cão na fase neurológica continua eliminando partículas viáveis de Canine Morbillivirus na urina e secreções por semanas a meses. A ausência de isolamento contamina os outros animais jovens do abrigo, gerando um surto epidêmico institucional devastador.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Inobservância do período de eliminação viral em secreções e urina',
                mechanism: 'Disseminação aerógena e por fômites para cães susceptíveis do abrigo',
                effect: 'Surto de cinomose em massa com dezenas de novos infectados',
                clinicalMeaning: 'Infração grave de biossegurança e mortalidade coletiva evitável'
              }
            }
          ],
          learningTakeaways: [
            'O vírus da cinomose canina atua primariamente via receptores CD150 (linfócitos) e Nectina-4 (epitélios respiratório, digestivo, tegumentar e glia).',
            'A mioclonia rítmica involuntária que persiste durante o sono profundo é patognomônica de desmielinização e lesão em tronco encefálico/medula espinhal.',
            'Corticosteroides são contraindicados na fase ativa virêmica, sendo o suporte focado em anticonvulsivantes modernos (Levetiracetam), analgésicos neuropáticos (Gabapentina) e isolamento rigoroso.'
          ]
        }
      },
      {
        id: 'sec_inf_02_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Neuropatologia & Manejo da Cinomose',
        exerciseId: 'ex_infectious_02'
      }
    ]
  },
  {
    id: 'lesson_infectious_03_strangles_equine',
    moduleId: 'mod_infectious_diseases',
    title: 'Garrotilho Equino: Streptococcus equi, Empiema de Bolsas Guturais e Formas Atípicas',
    shortDescription: 'Patogenia de S. equi subsp. equi, proteína SeM, lise de linfonodos retrofaríngeos, condroides em bolsas guturais, púrpura hemorrágica e garrotilho bastardo.',
    estimatedMinutes: 22,
    order: 3,
    concepts: ['concept_infectious_strangles_equine'],
    xpReward: 160,
    sections: [
      {
        id: 'sec_inf_03_th1',
        type: 'theory',
        title: 'Morfofisiopatologia do Streptococcus equi, Bolsas Guturais e Complicações Imunomediadas',
        contentMarkdown: `### Etiologia e Mecanismos de Virulência do *Streptococcus equi* subsp. *equi*

O Garrotilho (ou Adenite Equina) é uma afecção bacteriana contagiosa aguda que acomete o trato respiratório superior de equídeos, provocada pelo *Streptococcus equi* subsp. *equi*, bactéria Gram-positiva em cadeias, beta-hemolítica pertencente ao Grupo C de Lancefield:
* **Fatores Críticos de Virulência:**
  1. *Proteína SeM (Streptococcal M-like protein):* Fibrilas protéicas de superfície antifagocitárias que se ligam ao fibrinogênio do plasma e inibem a deposição de C3b da cascata do complemento, bloqueando a opsonização por neutrófilos.
  2. *Cápsula de Ácido Hialurônico:* Idêntica ao ácido hialurônico da matriz extracelular do cavalo, atuando como camuflagem imunológica contra o sistema de defesa inato.
  3. *Estreptolisina S e Hialuronidase:* Causam citólise e degradação de matriz conjuntiva, facilitando a penetração bacteriana nos tecidos linfáticos profundos.
  4. *Superantígenos / Exotoxinas Pirogênicas (SePE-H, SePE-I):* Ativam clones inespecíficos de linfócitos T, induzindo picos febris agudos de 39.5°C a 41.5°C.

---

### Patogênese da Forma Típica e o Garroteamento Faríngeo

A transmissão ocorre por contato oronasal direto entre cavalos ou fômites contaminados (baldes de água, cochos, embocaduras, baias):
1. Adesão bacteriana aos receptores das células epiteliais da mucosa da nasofaringe e tonsilas orofaríngeas em menos de 3 horas após a inalação.
2. Drenagem rápida pelos vasos linfáticos aferentes em direção aos **Linfonodos Submandibulares e Retrofaríngeos (mediais e laterais)**.
3. Formação de abscessos supurativos sob alta tensão com necrose de liquefação neutrofílica no interior das cápsulas linfonodais.
4. **O Garroteamento Anatômico:** O edema e aumento maciço dos linfonodos retrofaríngeos causam compressão dorsoventral extrínseca da faringe e laringe, produzindo **estridor inspiratório marcado ("ronquido estridente")**, dispneia severa e disfagia acentuada com regurgitação de água e saliva pelas narinas.

\`\`\`mermaid
flowchart TD
    A["Inalação/Ingestão de S. equi subsp. equi com Adesão à Mucosa Nasofaríngea"] --> B["Invasão Linfática Rápida dos Linfonodos Submandibulares e Retrofaríngeos"]
    B --> C["Ação da Proteína SeM Antifagocitária e Recrutamento Neutrofílico Maciço"]
    C --> D["Formação de Abscessos Tensos com Febre Alta (40-41°C) e Corrimento Mucopurulento"]
    D --> E["Compressão Extrínseca da Laringe/Faringe: Estridor Inspiratório ('Garrotilho') e Disfagia"]
    D --> F{"Ruptura Dorsal de Linfonodos Retrofaríngeos"}
    F -->|"Drenagem para Divertículo da Tuba Auditiva"| G["Empiema de Bolsas Guturais com Dessecação Purulenta e Condroides"]
    G --> H["Equino Carreador Crônico Assintomático ('Cavalo de Troia' no Haras)"]
    D --> I{"Deposição de Imunocomplexos SeM-IgA/IgG em Vasos (2 a 4 Semanas Pós-Infecção)"| J["Púrpura Hemorrágica: Vasculite Leucocitoclástica com Edema e Petéquias"]
\`\`\`

---

### Complicações Sistêmicas Graves: Bolsas Guturais, Condroides e Púrpura Hemorrágica

* **Empiema de Bolsas Guturais e Formação de Condroides:** A drenagem natural dos abscessos retrofaríngeos rompe o septo ventral das bolsas guturais. O pus acumula-se no divertículo e, ao não ser expelido pelo orifício faríngeo da tuba auditiva, resseca e se mineraliza progressivamente, transformando-se em estruturas ovais endurecidas denominadas **condroides** (dezenas a centenas de cálculos de pus). O cavalo torna-se um **portador crônico carreador assintomático** que elimina *S. equi* intermitentemente por meses a anos, sendo a principal fonte biológica de reintrodução de surtos em plantéis hígidos.
* **Púrpura Hemorrágica (Vasculite Leucocitoclástica Imunomediada):** Complicação de hipersensibilidade do tipo III observada de 2 a 4 semanas após a infecção ou após vacinação de animais previamente sensibilizados. A deposição de imunocomplexos circulantes (antígeno SeM + anticorpos específicos) no endotélio capilar recruta neutrófilos e ativa o complemento, gerando necrose fibrinoide das paredes vasculares.
  * *Sinais:* Edema difuso simétrico severo com cacifo acentuado em membros, cabeça (focinho) e ventre, petéquias e sufusões em mucosas, necrose isquêmica da pele e cólica por isquemia intestinal.
* **Garrotilho Bastardo (Metastático):** Disseminação hematógena ou linfática com formação de abscessos em órgãos internos: linfonodos mesentéricos (cólica recorrente crônica, perda de peso severa), baço, rins, fígado, pulmão ou cérebro.`
      },
      {
        id: 'sec_inf_03_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Trovão Negro (Garrotilho, Empiema e Condroides)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Clínico de Adenite Equina Avançada, Empiema de Bolsas Guturais e Remoção de Condroides',
          patient: {
            name: 'Trovão Negro (Quarto de Milha)',
            species: 'Equina',
            breed: 'Quarto de Milha',
            age: '3 anos',
            weightKg: 465,
            habitatOrEnvironment: 'Haras de cavalos de vaquejada em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 64,
            respiratoryRateRpm: 28,
            temperatureCelsius: 40.2,
            mucousMembranes: 'Hiperêmicas com secreção nasal mucopurulenta bilateral abundante',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'Potro de alto valor atlético com histórico de introdução de 3 cavalos novos no haras há 20 dias sem isolamento de quarentena. O animal apresenta anorexia, tosse, cabeça estendida para respirar e ruído inspiratório audível em repouso (estridor laringofaríngeo). Apresenta tumefação submandibular tensa, quente e com ponto de flutuação evidente, associada a regurgitação de feno e saliva pelas narinas durante a tentativa de ingestão alimentar.',
          exams: [
            {
              category: 'endoscopia_laboratorial',
              title: 'Videoendoscopia Respiratória Superior e Lavado de Bolsas Guturais',
              findings: 'Avaliação da patência laringofaríngea e mucosa das bolsas guturais.',
              abnormalValues: [
                { parameter: 'Teto da Faringe e Laringe', value: 'Compressão ventral acentuada por linfoadenomegalia retrofaríngea com estenose da luz faríngea', reference: 'Luz faríngea ampla e patente', status: 'critical' },
                { parameter: 'Interior da Bolsa Gutural Medial Esquerda', value: 'Empiema exuberante com presença de 6 condroides arredondados endurecidos flutuando no exsudato', reference: 'Cavidade livre de secreções com membrana mucosa transparente', status: 'critical' },
                { parameter: 'PCR em Tempo Real (gene sem)', value: 'POSITIVO para Streptococcus equi subsp. equi', reference: 'Negativo', status: 'critical' },
                { parameter: 'Fibrinogênio Plasmático', value: '850 mg/dL (Hiperfibrinogenemia inflamatória aguda)', reference: '200 - 400 mg/dL', status: 'critical' },
                { parameter: 'Leucograma', value: '19.800 leucócitos/µL com 16.200 neutrófilos/µL e desvio regenerativo', reference: '5.500 - 12.500 /µL', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Diante de estridor respiratório obstrutivo, empiema de bolsas guturais com condroides formados e abscesso submandibular em ponto de flutuação, qual é a conduta clínico-cirúrgica e sanitária mandatória?',
          decisionOptions: [
            {
              id: 'opt_dec_inf3_1',
              label: 'Maturação e drenagem cirúrgica cuidadosa do abscesso submandibular + Remoção endoscópica dos condroides da bolsa gutural com cesta de Dormia + Lavagem diária da bolsa com Ringer Lactato e infusão tópica de gel de penicilina + Flunixina Meglumina + Quarentena com 3 PCRs negativos semanais',
              description: 'Conduta impecável de esvaziamento mecânico do foco supurativo, extirpação do estado de carreador crônico e isolamento epidemiológico.',
              isOptimal: true,
              consequenceText: 'Excelente execução técnico-cirúrgica! A drenagem do abscesso submandibular e a remoção minuciosa dos condroides pela via endoscópica desobstruíram a via aérea faríngea, eliminando o estridor e a disfagia em 48 horas. A eliminação dos condroides extirpou o reservatório persistente de S. equi, impedindo que o cavalo continuasse infectando o haras, e as lavagens com penicilina tópica esterilizaram a bolsa gutural.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Drenagem cirúrgica orientada, extração mecânica dos condroides e infusão de penicilina tópica',
                mechanism: 'Descompressão da luz faríngea e erradicação dos nichos de biofilme e bactérias viáveis',
                effect: 'Restauração da mecânica respiratória, normalização febril e corte da transmissão de S. equi',
                clinicalMeaning: 'Cura clínica completa e saneamento do plantel com preservação da vida do animal'
              }
            },
            {
              id: 'opt_dec_inf3_2',
              label: 'Administrar altas doses de Penicilina G Potássica sistêmica por via intravenosa sem realizar drenagem nem mexer na bolsa gutural para secar a infecção por dentro',
              description: 'Uso isolado de antibióticos sistêmicos em abscessos encapsulados e condroides.',
              isOptimal: false,
              consequenceText: 'Falha terapêutica grave! Antibióticos sistêmicos não penetram na cápsula fibrótica espessa de abscessos maduros nem no interior mineralizado de condroides em bolsas guturais. O uso precoce de penicilina sem drenagem prolonga o curso da doença, suprime a resposta imune humoral natural e favorece a disseminação metastática para órgãos internos (Garrotilho Bastardo fatal).',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Tentativa de quimioterapia sistêmica isolada em abscessos cavitários volumosos',
                mechanism: 'Penetração nula do fármaco na massa de condroides com pressão interna crescente',
                effect: 'Ruptura interna do abscesso para a carótida interna ou disseminação mesentérica fatal',
                clinicalMeaning: 'Piora clínica severa com risco iminente de garrotilho bastardo ou asfixia'
              }
            },
            {
              id: 'opt_dec_inf3_3',
              label: 'Prescrever anti-inflamatório oral e soltar o cavalo no piquete coletivo com os outros animais para pastejar e abaixar a cabeça para drenar espontaneamente',
              description: 'Conduta omissa com disseminação epidêmica garantida no haras.',
              isOptimal: false,
              consequenceText: 'Desastre epidemiológico no haras! Cavalos com empiema e condroides eliminam bilhões de bactérias pela secreção nasal em cochos, cercas e água de bebida. Soltar o animal infectado no lote contaminará praticamente 100% dos cavalos susceptíveis do haras em poucos dias.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Omissão de medidas de contenção e ruptura do isolamento sanitário',
                mechanism: 'Contaminação massiva de bebedouros e cochos por descargas nasais repletas de S. equi',
                effect: 'Surto explosivo de adenite equina no plantel com dezenas de cavalos doentes',
                clinicalMeaning: 'Colapso operacional e econômico do haras com penalização ética do profissional'
              }
            }
          ],
          learningTakeaways: [
            'O Streptococcus equi subsp. equi coloniza linfonodos regionais e bolsas guturais, gerando compressão faríngea mecânica e empiema.',
            'Condroides em bolsas guturais funcionam como reservatórios protegidos de bactérias viáveis; sua remoção mecânica/endoscópica é indispensável para evitar o estado de carreador assintomático crônico.',
            'A púrpura hemorrágica é uma vasculite imunomediada (hipersensibilidade tipo III) pós-infecção por S. equi que exige corticoterapia com Dexametasona e suporte vascular intensivo.'
          ]
        }
      },
      {
        id: 'sec_inf_03_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Garrotilho Equino & Complicações Sistêmicas',
        exerciseId: 'ex_infectious_03'
      }
    ]
  },
  {
    id: 'lesson_infectious_04_newcastle_disease',
    moduleId: 'mod_infectious_diseases',
    title: 'Doença de Newcastle: Patótipos APMV-1, Síndrome Viscerotrópica e Neurotrópica',
    shortDescription: 'Genoma paramixoviral, clivagem da proteína F como determinante de patogenicidade, hemorragias no proventrículo, torcicolo e biossegurança oficial.',
    estimatedMinutes: 22,
    order: 4,
    concepts: ['concept_infectious_newcastle_disease'],
    xpReward: 160,
    sections: [
      {
        id: 'sec_inf_04_th1',
        type: 'theory',
        title: 'Bases Moleculares da Virulência, Patotipificação e Lesões Anatomopatológicas do APMV-1',
        contentMarkdown: `### Etiologia e Classificação dos Patótipos de Newcastle

A Doença de Newcastle é uma enfermidade viral hiperaguda de aves de notificação compulsória imediata (Categoria 1 do MAPA e OMSA), causada pelo *Orthoavulavirus javaense* (antigo Paramyxovírus Aviário Tipo 1 - APMV-1), vírus de genoma de RNA de fita simples senso negativo, não segmentado e envelopado:
* **O Determinante Molecular da Virulência (A Proteína F):**
  * A **Proteína de Fusão (Proteína F)** medeia a penetração viral pela fusão do envelope lipídico viral com a membrana plasmática da célula da ave. Ela é traduzida na forma de um precursor inativo (**F0**) que obrigatoriamente precisa sofrer clivagem proteolítica enzimática em duas subunidades conectadas por pontes dissulfeto (**F1 e F2**) para se tornar infectiva.
  * **Cepas Lentogênicas e Mesogênicas (Baixa Virulência / Vacinais):** O sítio de clivagem possui apenas resíduos monobásicos isolados (ex: leucina-arginina). A clivagem restringe-se a proteases extracelulares do tipo tripsina, secretadas exclusivamente nos tratos respiratório e entérico.
  * **Cepas Velogênicas (Alta Patogenicidade):** Apresentam uma inserção de múltiplos resíduos básicos (polibásico: arginina e lisina). Esse padrão molecular é reconhecido e clivado por **furinas intracelulares ubíquas** presentes no complexo de Golgi de praticamente todas as células e do endotélio vascular de todo o organismo, permitindo a disseminação sistêmica fulminante com necrose multiorgânica e morte de até 100% do lote em poucos dias.

---

### Os Grandes Patótipos Clínicos e as Lesões Patognomônicas na Necropsia

1. **Velogênico Viscerotrópico (Forma de Doyle):**
   * Apresentação digestiva hiperaguda: diarreia aquosa esverdeada brilhante profusa com ácido úrico, depressão profunda, edema de cabeça e face, e mortalidade superior a 90%.
   * *Achados Patognomônicos de Necropsia:* **Hemorragias petequiais exuberantes e sufusões na mucosa do proventrículo** (especialmente ao redor dos ápices das papilas das glândulas gástricas), **úlceras hemorrágico-necróticas em formato de "botão" nas tonsilas cecais (placas de Peyer cecais)** e ao longo do duodeno e íleo, traqueíte hemorrágica e esplenomegalia.
2. **Velogênico Neurotrópico (Forma de Beach):**
   * Sintomas respiratórios agudos (estertores, tosse, dispneia com bico aberto - *gasping*) seguidos rapidamente por sinais neurológicos graves: tremores musculares, paresia e paralisia assimétrica das asas e pernas, **torcicolo severo (cabeça invertida entre os membros ou voltada dorsalmente para trás)**, andar em círculos e opistótono terminal.
3. **Mesogênico (Forma de Beaudette):**
   * Doença respiratória moderada, mortalidade baixa em aves adultas (< 10%), mas com queda severa de 50% a 80% na produção de ovos com cascas finas, despigmentadas e deformadas.
4. **Lentogênico (Forma de Hitchner):**
   * Infecção respiratória muito branda ou subclínica, amplamente utilizada na fabricação de vacinas vivas atenuadas (cepas LaSota e B1).

\`\`\`mermaid
flowchart TD
    A["Inalação ou Ingestão de APMV-1 Velogênico em Galpão de Postura ou Corte"] --> B["Reconhecimento da Proteína F0 pelo Sítio Polibásico por Furinas Ubíquas"]
    B --> C["Clivagem Intracelular Contínua em F1 e F2 com Fusão de Membranas e Replicação Sistêmica"]
    C --> D["Replicação em Endotélio Vascular e Tecido Linfoide Entérico"]
    D --> E["Hemorragias Petequiais nas Papilas do Proventrículo e Necrose em Tonsilas Cecais"]
    C --> F["Invasão Viral do Sistema Nervoso Central com Encefalomielite Necrosante"]
    F --> G["Sinais Neurotrópicos: Paralisia de Asas, Tremores e Torcicolo Marcado (Cabeça Invertida)"]
    E --> H["Mortalidade de 90% a 100% com Queda Total de Produção de Ovos"]
    H --> I["Notificação Compulsória Imediata ao MAPA em < 24h: Diferencial Mandatório com IAAP"]
\`\`\``
      },
      {
        id: 'sec_inf_04_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Granja Ouro Branco (Surto de Síndrome Respiratória e Nervosa)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Diagnóstico Diferencial Oficial, Necropsia e Biossegurança em Suspeita de Newcastle Velogênico',
          patient: {
            name: 'Galpão 03 - Poedeiras Comerciais (38.000 Aves)',
            species: 'Aves de Produção (Galinhas de Postura)',
            breed: 'Lohmann Brown',
            age: '40 semanas de vida',
            weightKg: 1.85,
            habitatOrEnvironment: 'Galpão automatizado de postura comercial em Ourinhos/SP'
          },
          vitals: {
            heartRateBpm: 380,
            respiratoryRateRpm: 65,
            temperatureCelsius: 43.1,
            mucousMembranes: 'Cianóticas com abundante secreção mucosa traqueal',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'O responsável técnico da granja avícola é chamado com urgência: a mortalidade diária normal do galpão, que era de 4 a 6 aves/dia, subiu repentinamente para 520 aves mortas nas últimas 24 horas. As aves ainda vivas mostram-se profundamente prostradas com asas caídas, diarreia aquosa esbranquiçada e esverdeada brilhante no esterco, sons respiratórios gorgolejantes (*râles*) e dispneia acentuada. Aproximadamente 15% das aves apresentam torcicolo severo com torção cervical de 180 graus (olhando para cima ou para trás) e incapacidade de locomoção. A postura de ovos caiu 65% em dois dias.',
          exams: [
            {
              category: 'necropsia_biosseguranca_oficial',
              title: 'Inspeção Post-Mortem Oficial de 6 Aves Recém-Mortas com EPI Nível 3',
              findings: 'Protocolo de necropsia para doenças respiratórias de notificação compulsória imediata.',
              abnormalValues: [
                { parameter: 'Mucosa do Proventrículo', value: 'Petéquias e equimoses hemorrágicas confluentes nas papilas secretoras gástricas', reference: 'Mucosa glandular pálida e íntegra', status: 'critical' },
                { parameter: 'Tonsilas Cecais e Íleo', value: 'Placas necróticas ulceradas com bordas hemorrágicas salientes na junção ileocecal', reference: 'Tecido linfoide cecal sem hiperemia', status: 'critical' },
                { parameter: 'Traqueia e Sacos Aéreos', value: 'Traqueíte hemorrágica difusa com aerosaculite exsudativa turva', reference: 'Mucosa traqueal clara e sacos transparentes', status: 'critical' },
                { parameter: 'Sistema Nervoso Central', value: 'Congestão meníngea acentuada com edema cerebral', reference: 'Meninges translúcidas e vasos hígidos', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com mortalidade explosiva, hemorragias no proventrículo, necrose de tonsilas cecais e torcicolo, qual é a conduta mandante perante o MAPA e o PNSA?',
          decisionOptions: [
            {
              id: 'opt_dec_inf4_1',
              label: 'Suspeita fundamentada de Categoria 1 (Doença de Newcastle velogênica vs IAAP) + Interdição imediata da granja com bloqueio total de veículos, ovos e esterco + Notificação compulsória imediata ao Serviço Veterinário Oficial (SVO) em < 24h + Envio oficial de traqueia e baço refrigerados para RT-qPCR e sequenciamento do sítio de clivagem da proteína F no LFDA',
              description: 'Conduta técnica e legal exemplar em conformidade estrita com o Plano Nacional de Sanidade Avícola (PNSA).',
              isOptimal: true,
              consequenceText: 'Postura sanitária impecável! Diferenciar clinicamente Doença de Newcastle velogênica de Influenza Aviária de Alta Patogenicidade é biologicamente impossível apenas por sinais clínicos e lesões macroscópicas. A interdição imediata impediu a disseminação do vírus pelas esteiras de ovos e carretas de adubo. O sequenciamento no LFDA comprovou APMV-1 velogênico, e a pronta resposta do plano de contingência conteve o foco sem alastrar-se para o parque avícola nacional.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Interdição cautelar imediata, notificação ao SVO em menos de 24h e RT-qPCR oficial no LFDA',
                mechanism: 'Contenção estrita de fômites no núcleo infectado e diagnóstico molecular de alta precisão',
                effect: 'Identificação imediata da sequência do sítio de clivagem da proteína F do APMV-1',
                clinicalMeaning: 'Bloqueio de epidemia nacional e preservação dos acordos bilaterais de exportação avícola'
              }
            },
            {
              id: 'opt_dec_inf4_2',
              label: 'Prescrever fosfomicina na água de bebida e revacinar emergencialmente todo o galpão com vacina viva LaSota aerosolizada',
              description: 'Uso de antibiótico contra infecção viral velogênica e vacinação em lote virêmico.',
              isOptimal: false,
              consequenceText: 'Erro desastroso! Antibióticos não exercem nenhuma ação contra paramixovírus. Além disso, a aplicação de vacinas vivas por aerossol em galpão com vírus velogênico ativo em replicação causa aerossolização de partículas de alta virulência, acelera a mortalidade de 100% do lote e dispersa o patógeno pelos exaustores industriais para as granjas vizinhas.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Indicação de quimioterapia ineficaz e dispersão viral forçada por aerossolização vacinal',
                mechanism: 'Exaustão forçada de vírions velogênicos viáveis para a atmosfera externa',
                effect: 'Contaminação de todas as granjas avícolas de corte e postura em um raio de 15 km',
                clinicalMeaning: 'Catástrofe sanitária regional e perda do status sanitário do estado'
              }
            },
            {
              id: 'opt_dec_inf4_3',
              label: 'Vender rapidamente as aves vivas para abatedouro clandestino e queimar as mortas nos fundos da fazenda sem avisar a defesa agropecuária',
              description: 'Crime doloso contra a sanidade agropecuária e economia pública.',
              isOptimal: false,
              consequenceText: 'Crime federal contra a defesa agropecuária! O transporte e abate clandestino de aves com Doença de Newcastle velogênica dissemina carcaças e vísceras infectadas no comércio informal, contaminando granjas de subsistência e desencadeando processos criminais com prisão em flagrante dos infratores.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Ocultação dolosa de foco de Categoria 1 e comercialização ilegal de aves infectadas',
                mechanism: 'Disseminação massiva de vírions por veículos de transporte e vísceras na cadeia alimentar',
                effect: 'Foco incontrolável de Newcastle e embargo internacional da carne de frango brasileira',
                clinicalMeaning: 'Prejuízo de bilhões de dólares, interdição judicial e prisão penal dos responsáveis'
              }
            }
          ],
          learningTakeaways: [
            'A patogenicidade velogênica do APMV-1 é determinada pela presença de múltiplos aminoácidos básicos no sítio de clivagem da Proteína F, clivável por furinas ubíquas em todo o corpo.',
            'O quadro lesional do Newcastle velogênico (hemorragias no proventrículo, úlceras em tonsilas cecais e torcicolo) é indistinguível clinicamente da Influenza Aviária, exigindo RT-qPCR e sequenciamento oficial no LFDA.',
            'Qualquer suspeita clínica com mortalidade aguda em aves deve ser comunicada compulsoriamente ao Serviço Veterinário Oficial em no máximo 24 horas.'
          ]
        }
      },
      {
        id: 'sec_inf_04_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Doença de Newcastle & Virulência Molecular',
        exerciseId: 'ex_infectious_04'
      }
    ]
  },
  {
    id: 'lesson_infectious_05_avian_influenza',
    moduleId: 'mod_infectious_diseases',
    title: 'Influenza Aviária de Alta Patogenicidade (IAAP H5N1): Tropismo Endotelial, Pandemias e Contingência',
    shortDescription: 'Subtipos H e N, clivagem da hemaglutinina, apoptose endotelial, cianose de crista e barbelas, biossegurança nível 3 e protocolo de stamping out.',
    estimatedMinutes: 22,
    order: 5,
    concepts: ['concept_infectious_avian_influenza'],
    xpReward: 160,
    sections: [
      {
        id: 'sec_inf_05_th1',
        type: 'theory',
        title: 'Bases Moleculares, Apoptose Endotelial, Risco Zoonótico e Plano de Contingência da IAAP',
        contentMarkdown: `### O Vírus da Influenza Aviária e a Diversidade Genômica

O vírus da Influenza Aviária pertence ao gênero *Alphainfluenzavirus*, da família *Orthomyxoviridae*. É um vírus envelopado cujo genoma é composto por **8 segmentos independentes de RNA de fita simples senso negativo**:
* **Glicoproteínas de Superfície Críticas:**
  * **Hemaglutinina (HA / H1 a H18):** Responsável pelo acoplamento inicial aos receptores celulares de ácido siálico na superfície do hospedeiro. Em aves, liga-se preferencialmente a ligações glicosídicas **alfa-2,3-galactose**, enquanto no trato respiratório superior humano predomina a conformação **alfa-2,6-galactose**.
  * **Neuraminidase (NA / N1 a N11):** Enzima sialidase essencial que cliva os resíduos de ácido siálico para permitir o brotamento e a liberação de vírions maduros da célula infectada.
* **Mecanismos de Evolução e Plasticidade Genética:**
  1. *Antigenic Drift (Deriva Antigênica):* Mutações pontuais contínuas nos sítios antigênicos da HA e NA por ausência de atividade de revisão da RNA-polimerase viral, gerando escape imunológico parcial.
  2. *Antigenic Shift (Salto Antigênico / Reassortimento):* Ocorre quando uma única célula hospedeira (ex: suínos ou aves aquáticas) é coinfectada simultaneamente por dois vírus de origens distintas. Os segmentos genômicos são empacotados aleatoriamente, gerando novas combinações quiméricas completas com potencial de deflagrar pandemias humanas.

---

### A Base Molecular da Alta Patogenicidade: Tropismo Endotelial e CIVD

\`\`\`mermaid
flowchart TD
    A["Contato com Secreções de Aves Aquáticas Silvestres Migratórias (Anseriformes)"] --> B["Penetração de Vírus Influenza A H5N1 de Alta Patogenicidade (HPAI)"]
    B --> C["Presença de Sítio Polibásico na Hemaglutinina (Múltiplas Argininas e Lisinas)"]
    C --> D["Clivagem Intracelular Ubíqua por Furinas Ativas em Todas as Células do Organismo"]
    D --> E["Replicação Viral Direta em Células Endoteliais de Toda a Malha Microvascular"]
    E --> F["Apoptose Endotelial Maciça + Tempestade de Citocinas Inflamatórias (TNF-a, IL-6)"]
    F --> G["Coagulação Intravascular Disseminada (CIVD) e Trombose Microvascular Difusa"]
    G --> H["Isquemia Terminal: Cianose Azul-Arroxeada Severa de Crista e Barbelas"]
    G --> I["Extravasamento Capilar: Hemorragias Petequiais em Canelas e Morte em até 48-72h"]
    I --> J["Ativação do Plano de Emergência: Stamping Out Humanitário e Notificação em < 24h"]
\`\`\`

* **A Fronteira Molecular entre LPAI e HPAI:**
  * *LPAI (Baixa Patogenicidade):* O sítio de clivagem da HA contém um único resíduo de arginina (monobásico), reconhecido apenas por proteases do tipo tripsina restritas ao epitélio respiratório e digestivo superficial.
  * *HPAI (Alta Patogenicidade - IAAP):* Apresenta inserção de múltiplos aminoácidos básicos contíguos no sítio de clivagem. É clivado por **furinas intracelulares e convertases ubíquas**, conferindo **tropismo sistêmico fulminante**.
* **Fisiopatologia do Colapso Microvascular:**
  * O vírus replica-se avidamente no **endotélio dos capilares sanguíneos** de órgãos vitais (coração, cérebro, baço, rins, pâncreas).
  * A lise endotelial generalizada combinada à tempestade de citocinas pró-inflamatórias culmina em **Coagulação Intravascular Disseminada (CIVD)** e perda irreversível da barreira vascular.
  * *Achados Patognomônicos:*
    1. **Edema e Cianose Azul-Arroxeada Intensa de Crista e Barbelas:** Resultante de isquemia microvascular e trombose nos apêndices cefálicos.
    2. **Hemorragias Petequiais e Sufusões nas Canelas e Pés:** Petéquias subcutâneas bem demarcadas na pele desprovida de penas das pernas e articulações tarsometatársicas por fragilidade capilar aguda.
    3. **Hemorragias Petequiais no Epicárdio, Gordura Abdominal e Proventrículo.**
    4. **Mortalidade de 90% a 100%** observada no lote em um intervalo de 48 a 72 horas.

---

### Biossegurança Oficial e Protocolo de Erradicação (Stamping Out)

* **Notificação Compulsória Imediata (Categoria 1):** Comunicação obrigatória ao Serviço Veterinário Oficial (SVO) estadual/federal em prazo máximo de 24 horas.
* **EPI Nível 3 Obrigatório:** Máscara PFF3/N95, macacão impermeável com capuz hermético (Tyvek), protetor facial, luvas duplas de borracha nitrílica e botas de borracha descontamináveis para prevenir transmissão zoonótica aos técnicos.
* **Protocolo de Stamping Out (Despovoamento Sanitário):** Sacrifício sanitário humanitário in loco de 100% das aves do núcleo infectado (via dióxido de carbono - CO2 ou espuma de alta expansão).
* **Destruição Segura das Carcaças:** Compostagem controlada em leira fechada sob monitoramento termofílico diário (> 55°C por 14 dias seguidos para inativação térmica do vírus) ou sepultamento em trincheira sanitária com cal virgem. Vazio sanitário mínimo de 30 dias após desinfecção profunda e monitoramento sorológico sentinela antes da desinterdição.`
      },
      {
        id: 'sec_inf_05_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Granja Matrizes Avícolas São Pedro (Emergência de IAAP H5N1)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Plano de Contingência de Emergência Zoossanitária e Gestão de Foco de Influenza Aviária',
          patient: {
            name: 'Granja Matrizes Avícolas São Pedro (60.000 Matrizes)',
            species: 'Aves de Produção (Matrizes Pesadas)',
            breed: 'Cobb 500',
            age: '35 semanas de vida',
            weightKg: 3.4,
            habitatOrEnvironment: 'Galpões de matrizes de corte em Ourinhos/SP, próximos a lagoa de aves migratórias'
          },
          vitals: {
            heartRateBpm: 410,
            respiratoryRateRpm: 75,
            temperatureCelsius: 43.8,
            mucousMembranes: 'Intensamente cianóticas com exsudato serossanguinolento oral',
            capillaryRefillTimeSec: 3.0
          },
          anamnesis: 'Granja núcleo de reprodução localizada a 1.200 metros de corpo d água natural com histórico de presença de marrecas silvestres e batuíras migratórias. Em menos de 36 horas, o galpão 02 registrou 2.100 mortes súbitas inexplicáveis. As aves restantes encontram-se em choque endotóxico, prostração extrema, asas caídas e recusa total de água e ração. Apresentam cabeça inchada, cristas e barbelas com coloração púrpura-escura quase negra (cianose severa) e múltiplos focos purpúricos avermelhados na pele das pernas e dedos (tarsometatarsos). Secreção mucosa sanguinolenta escorre pelo bico.',
          exams: [
            {
              category: 'necropsia_biosseguranca_pnsa',
              title: 'Necropsia Oficial com EPI Nível 3 e Painel Molecular no LFDA',
              findings: 'Protocolo de contenção máxima de patógeno exótico com risco pandêmico.',
              abnormalValues: [
                { parameter: 'Crista e Barbelas', value: 'Edema difuso com necrose isquêmica e cianose azul-escura generalizada', reference: 'Cristas vermelhas límpidas e túrgidas', status: 'critical' },
                { parameter: 'Pele dos Tarsometatarsos (Canelas)', value: 'Petéquias e sufusões hemorrágicas subcutâneas confluentes', reference: 'Pele amarelada íntegra sem sufusões', status: 'critical' },
                { parameter: 'Epicárdio e Gordura Cavitária', value: 'Hemorragias petequiais extensas em "pinceladas" no miocárdio e proventrículo', reference: 'Superfícies serosas brilhantes sem petéquias', status: 'critical' },
                { parameter: 'RT-qPCR em Tempo Real (LFDA de Campinas)', value: 'POSITIVO com amplificação de gene M e subtipo H5 com sequência polibásica', reference: 'Negativo', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Confirmada a amplificação de vírus H5 com sítio de clivagem polibásico (Influenza Aviária de Alta Patogenicidade H5N1), qual é a conduta mandante legal internacional e operacional?',
          decisionOptions: [
            {
              id: 'opt_dec_inf5_1',
              label: 'Interdição cautelar imediata do estabelecimento + Estabelecimento de Zona de Proteção (raio 3 km) e Zona de Vigilância (raio 10 km) + Execução humanitária do Stamping Out (abate sanitário in loco por CO2) de 100% das aves do núcleo + Destruição por compostagem termofílica monitorada (> 55°C por 14 dias) + Notificação à OMSA pelo MAPA',
              description: 'Plano de ação e erradicação padrão ouro da Defesa Agropecuária em consonância com as normas internacionais da OMSA.',
              isOptimal: true,
              consequenceText: 'Decisão de extrema coragem e rigor sanitário que salvaguardou o status livre de IAAP na avicultura comercial brasileira! O despovoamento sanitário imediato eliminou a fonte de replicação do vírus antes que ele pudesse escapar pelas aves de subsistência e fauna da região. A compostagem termofílica monitorada inativou 100% das partículas virais na cama e carcaças. O bloqueio georreferenciado em raio de 3 e 10 km manteve as exportações avícolas dos demais polos do país protegidas.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Interdição cautelar, Stamping Out imediato e destruição termofílica monitorada',
                mechanism: 'Extirpação biológica total da carga viral replicante com bloqueio geoespacial',
                effect: 'Contenção estrita do foco dentro do raio de proteção de 3 km sem transmissão secundária',
                clinicalMeaning: 'Prevenção de catástrofe econômica e eliminação do risco de spillover pandêmico'
              }
            },
            {
              id: 'opt_dec_inf5_2',
              label: 'Vacinar emergencialmente todas as 60.000 galinhas da granja com vacina inativada contra gripe e comercializar os ovos normalmente após lavagem com cloro',
              description: 'Tentativa ilícita de vacinação em foco ativo e comercialização de produtos infectados.',
              isOptimal: false,
              consequenceText: 'Crime contra a saúde pública e sanidade animal! No Brasil, a vacinação contra IAAP em aves comerciais é estritamente proibida por lei para não mascarar a circulação viral. A vacinação em foco virêmico cria aves portadoras que continuam eliminando o vírus H5N1 no ambiente, e a comercialização de ovos contamina caminhões e centros de distribuição por centenas de quilômetros.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Vacinação ilegal em foco de IAAP e distribuição de produtos infectados',
                mechanism: 'Mascaramento sorológico da infecção com perpetuação da eliminação de vírions viáveis',
                effect: 'Disseminação interestadual da IAAP e embargo comercial planetário à carne de frango do Brasil',
                clinicalMeaning: 'Prejuízo econômico devastador de dezenas de bilhões de dólares e prisão do RT'
              }
            },
            {
              id: 'opt_dec_inf5_3',
              label: 'Cobrir as aves mortas com lona plástica no pátio e aguardar 7 dias para ver se o restante do lote desenvolve imunidade natural',
              description: 'Inércia letal com exposição ambiental massiva de carcaças a urubus e fauna silvestre.',
              isOptimal: false,
              consequenceText: 'Desastre biológico gravíssimo! Carcaças de aves com IAAP expostas no pátio atraem urubus, gaviões e mamíferos carnívoros, que se infectam e espalham o vírus para a fauna silvestre de todo o estado, além de representarem risco iminente de infecção zoonótica fatal em humanos.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Exposição de carcaças com alta carga viral de IAAP ao ar livre',
                mechanism: 'Disseminação mecânica e biológica do H5N1 por aves necrófagas e carnívoros',
                effect: 'Amplificação do foco para populações silvestres e risco de óbito humano por infecção zoonótica',
                clinicalMeaning: 'Emergência de saúde pública internacional e responsabilização criminal'
              }
            }
          ],
          learningTakeaways: [
            'A alta patogenicidade da IAAP decorre do sítio de clivagem polibásico da hemaglutinina, clivado por furinas intracelulares ubíquas, permitindo tropismo endotelial multissistêmico.',
            'As lesões características de cianose de crista/barbelas e sufusões nos tarsos refletem apoptose endotelial, trombose microvascular e CIVD difusa.',
            'O protocolo oficial de erradicação baseia-se no Stamping Out sanitário humanitário com interdição perimetral (3 km e 10 km) e biossegurança de nível 3 para prevenir emergência zoonótica pandêmica.'
          ]
        }
      },
      {
        id: 'sec_inf_05_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Influenza Aviária & Biossegurança Global',
        exerciseId: 'ex_infectious_05'
      }
    ]
  }
];

