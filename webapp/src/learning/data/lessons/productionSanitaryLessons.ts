// src/learning/data/lessons/productionSanitaryLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

// ==========================================
// 1. PROTOZOOLOGIA & ECTOPARASITOLOGIA
// ==========================================
export const PROTOZOOLOGY_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_protozoo_01',
    conceptId: 'concept_protozoology_hemoparasites_vectors',
    type: 'multiple_choice',
    prompt: 'Um bezerro Nelore de 8 meses em pastagem com alta infestação de carrapatos Rhipicephalus microplus apresenta febre alta (40.8°C), anemia severa com mucosas branco-porcelana, icterícia e urina cor de "café forte" (hemoglobinúria). Ao esfregaço de ponta de orelha corado com Giemsa, observam-se intraeritrocitariamente corpúsculos piriformes aos pares. Qual é o agente etiológico e a conduta terapêutica de escolha?',
    options: [
      {
        id: 'opt_proto_1',
        text: 'Babesia bigemina (Tristeza Parasitária Bovina); tratar com Diaceturato de Diminazeno (3.5 mg/kg IM) + Suporte hemoterápico',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Os trofozoítos piriformes pareados dentro das hemácias são característicos de Babesia bigemina. A lise intravascular massiva de eritrócitos libera hemoglobina livre na circulação que satura a haptoglobina e atinge o filtrado glomerular, gerando a clássica hemoglobinúria escura.'
      },
      {
        id: 'opt_proto_2',
        text: 'Anaplasma marginale; tratar exclusivamente com enrofloxacino',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Anaplasma é uma bactéria intraeritrocitária rickettsial que se apresenta como corpúsculos puntiformes na margem da hemácia e causa lise extravascular (baço), NÃO cursando com hemoglobinúria.'
      },
      {
        id: 'opt_proto_3',
        text: 'Trypanosoma vivax; tratar apenas com vermífugo Ivermectina',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Ivermectina não possui nenhuma atividade contra hemoprotozoários como Babesia ou Trypanosoma.'
      },
      {
        id: 'opt_proto_4',
        text: 'Fasciola hepatica; tratar com albendazol oral',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Fasciola é um trematódeo dos ductos biliares do fígado, não um hemoparasita eritrocitário transmitido por carrapatos.'
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
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_protozoology_hemoparasites_vectors'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_protozoo_th1',
        type: 'theory',
        title: 'O Complexo da Tristeza Parasitária Bovina (TPB)',
        contentMarkdown: `# Aula Universitária: O Complexo da Tristeza Parasitária Bovina (Babesiose & Anaplasmose)

> 📖 Referência Canônica: Taylor, M. A.; Coop, R. L.; Wall, R. L. *Veterinary Parasitology*, 4th ed. Wiley-Blackwell, Cap. 2: Protozoology. Radostits, O. M. et al. *Clínica Veterinária*, 9ª ed. Guanabara Koogan. Kessler, R. H.; Schenk, M. A. M. *Tristeza Parasitária dos Bovinos*. Embrapa Gado de Corte.

### O Vetor & A Diferenciação dos Três Agentes

A TPB é o maior entrave sanitário e econômico da pecuária bovina tropical, transmitida pelo carrapato-do-boi (*Rhipicephalus microplus*):
1. **Babesia bigemina:** Hemoprotozoário de grande porte (pares piriformes em ângulo agudo dentro do eritrócito). Promove **hemólise intravascular maciça** por replicação binária e lise da membrana eritrocitária → hemoglobinemia, hemoglobinúria severa (urina escura cor de café forte) e insuficiência renal aguda pigmentar por deposição de cilindros de hemoglobina.
2. **Babesia bovis:** Hemoprotozoário de menor porte (pares em ângulo obtuso). Promove adesão de eritrócitos infectados ao endotélio vascular de capilares cerebrais mediada por antígenos VESA-1 → sequestro microvascular encefálico, estase circulatória, anóxia cerebral e **Babesiose Cerebral** (ataxia, convulsões, pedalagem e agressividade extrema).
3. **Anaplasma marginale:** Bactéria gram-negativa da família Anaplasmataceae (corpúsculos de inclusão esféricos na borda periférica da hemácia). Causa **hemólise extravascular no sistema monocítico-fagocítico (baço e fígado)** → anemia profunda, icterícia flavínica e esplenomegalia marcante, **sem hemoglobinúria** (a urina mantém coloração ambarina normal).`
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
            habitatOrEnvironment: 'Pasto de braquiária com histórico de carrapato'
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
  }
];

// ==========================================
// 2. BOVINOCULTURA DE CORTE & LEITE
// ==========================================
export const BOVINE_PROD_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_bovine_01',
    conceptId: 'concept_bovine_milk_transition_mastitis',
    type: 'multiple_choice',
    prompt: 'Na rotina de ordenha mecânica de uma fazenda leiteira, qual é o teste diário rápido realizado ao pé da vaca para detectar mastite subclínica e qual o princípio de reação do reagente com o leite?',
    options: [
      {
        id: 'opt_bov_1',
        text: 'California Mastitis Test (CMT); o detergente alquil-aril-sulfonato lisa a membrana dos leucócitos (células somáticas), liberando DNA que forma um gel viscoso proporcional à inflamação',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! O reagente do CMT contém um surfactante que rompe as membranas celulares das células somáticas (leucócitos neutrófilos atraídos pela infecção). O DNA desoxirribonucleico livre se desdobra e polimeriza com o reagente formando um gel espesso. Quanto maior a contagem de células somáticas (CCS), mais viscoso o gel (+ a ++++).'
      },
      {
        id: 'opt_bov_2',
        text: 'Teste da caneca de fundo escuro para detectar mastite subclínica',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A caneca de fundo preto/estriado detecta mastite CLÍNICA (grumos, pus, fibrina ou sangue nos primeiros jatos), sendo incapaz de identificar mastite subclínica sem alterações visuais.'
      },
      {
        id: 'opt_bov_3',
        text: 'Teste do alizarol a 72°GL para avaliar acidez e mastite',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O alizarol avalia a estabilidade térmica das caseínas e acidez da amostra (leite ácido ou leite instável não-ácido LINA), não a contagem inflamatória por quarto mamário.'
      },
      {
        id: 'opt_bov_4',
        text: 'Cromatografia líquida de alta performance (HPLC)',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. HPLC é uma técnica analítica laboratorial complexa para detecção de resíduos químicos e antibióticos, e não um teste de triagem diário na sala de ordenha.'
      }
    ]
  }
];

export const BOVINE_PROD_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_bovine_01_transition_mastitis',
    moduleId: 'mod_bovine_prod',
    title: 'Bovinocultura de Leite: Manejo de Mastite & Qualidade do Leite',
    shortDescription: 'Linha de ordenha, mastite clínica vs. subclínica, teste de CMT, pré e pós-dipping e controle de CCS.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_bovine_milk_transition_mastitis'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_bovine_th1',
        type: 'theory',
        title: 'A Glândula Mamária & Os Dois Grandes Tipos de Mastite',
        contentMarkdown: `### O Esfíncter do Teto: A Barreira Mecânica Primária

Após a ordenha, o canal do teto permanece **aberto por 30 a 45 minutos**. É nesse intervalo crítico que as bactérias do ambiente ou das teteiras podem ascender e colonizar a cisterna mamária.

---

### Mastite Contagiosa vs. Ambiental

| Tipo de Mastite | Principais Patógenos | Reservatório Principal | Manejo Preventivo Chave |
|---|---|---|---|
| **Contagiosa** | *Staphylococcus aureus*, *Streptococcus agalactiae* | O próprio úbere de vacas infectadas | **Linha de ordenha** (ordenhar vacas sadias primeiro, infectadas por último) e **Pós-dipping** com barreira desinfetante (iodo/cloro). |
| **Ambiental** | *Escherichia coli*, *Streptococcus uberis*, *Klebsiella* | Fezes, barro, camas orgânicas úmidas | **Higiene das instalações**, troca de areia/maravalha, **Pré-dipping** com secagem rigorosa com papel toalha descartável.`
      },
      {
        id: 'sec_bovine_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Vaca Mimosa (Girolando)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Investigação de Surtos de Mastite Subclínica em Rebanho Leiteiro',
          patient: {
            name: 'Lote de Lactação (Mimosa)',
            species: 'Bovino Leiteiro',
            breed: 'Girolando 5/8',
            age: '4 anos',
            weightKg: 540,
            habitatOrEnvironment: 'Compost Barn com cama de serragem'
          },
          vitals: {
            heartRateBpm: 66,
            respiratoryRateRpm: 22,
            temperatureCelsius: 38.6,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'O tanque comunitário da fazenda foi penalizado pelo laticínio devido a uma CCS média de 850.000 céls/mL (limite máximo normativo é 400.000). As vacas não apresentam quartos quentes ou leite com grumos na caneca de fundo escuro, mas a produção caiu 15% nas últimas semanas.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Teste de CMT por Quarto Mamário + Cultura em Ágar Sangue',
              findings: 'Realização de CMT nos 4 tetos de Mimosa e envio de amostras assépticas para microbiologia.',
              abnormalValues: [
                { parameter: 'CMT Quarto Anterior Direito (AD)', value: 'Score 3+ (Gel espesso)', reference: 'Negativo (Sem gel)', status: 'critical' },
                { parameter: 'CMT Quarto Posterior Esquerdo (PE)', value: 'Score 2+ (Viscosidade média)', reference: 'Negativo', status: 'high' },
                { parameter: 'Cultura Microbiológica', value: 'Isolamento de Staphylococcus aureus', reference: 'Estéril', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Identificado S. aureus em vacas com mastite subclínica, qual é o protocolo de manejo do rebanho?',
          decisionOptions: [
            {
              id: 'opt_dec_bov_1',
              label: 'Segregar os animais em Linha de Ordenha rigorosa (ordenhar infectadas por último) + Descarte de crônicas + Terapia de Vaca Seca',
              description: 'Interromper a transmissão pelas teteiras ordenhando as sadias antes, usar pós-dipping barreira e planejar cura no período seco.',
              isOptimal: true,
              consequenceText: 'Decisão impecável de manejo sanitário leiteiro! O Staphylococcus aureus é uma bactéria que forma microabscessos no tecido mamário com baixíssima taxa de cura durante a lactação (< 15-20%). A segregação em linha de ordenha impede a contaminação cruzada pelas teteiras mecânicas.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Implementação de linha de ordenha e pós-dipping com desinfetante iodado',
                mechanism: 'Eliminação da contaminação cruzada de tetos sadios via conjunto de ordenha',
                effect: 'Queda na taxa de novas infecções intramamárias e redução da CCS do tanque',
                clinicalMeaning: 'Recuperação da qualidade do leite, bonificação no pagamento por litro e controle do surto'
              }
            },
            {
              id: 'opt_dec_bov_2',
              label: 'Aplicar antibiótico intramamário em todas as vacas do rebanho durante a lactação',
              description: 'Tratar 100% das vacas lactantes com tubos intramamários indiscriminadamente.',
              isOptimal: false,
              consequenceText: 'Conduta desastrosa e antieconômica! Aplicar antibióticos em vacas em lactação causa descarte massivo de leite por resíduos químicos (prejuízo astronômico) e cura raramente o S. aureus intracelular.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Tratamento antimicrobiano em massa em lactação sem segregação',
                mechanism: 'Presença de resíduos de inibidores no tanque comunitário e reinfecção contínua',
                effect: 'Rejeição de toda a carga de leite pelo laticínio e seleção de cepas resistentes',
                clinicalMeaning: 'Prejuízo financeiro catastrófico sem resolução do foco biológico'
              }
            },
            {
              id: 'opt_dec_bov_3',
              label: 'Apenas lavar os tetos com água da mangueira e não secar antes de colocar a teteira',
              description: 'Acelerar a ordenha usando água abundante sem secagem com papel.',
              isOptimal: false,
              consequenceText: 'Erro grave de higiene! Colocar teteiras em tetos molhados faz a água suja com fezes escorrer para o bocal da teteira, provocando uma explosão de mastite ambiental por coliformes.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Ordenha com tetos úmidos e sem secagem individual',
                mechanism: 'Refluxo de água contaminada para o óstio do teto durante a pulsação do vácuo',
                effect: 'Colonização maciça por Escherichia coli com liberação de endotoxinas',
                clinicalMeaning: 'Surgimento de mastites clínicas superagudas com choque séptico'
              }
            }
          ],
          learningTakeaways: [
            'O teste de CMT é a ferramenta fundamental para detectar mastite subclínica e mensurar indiretamente a CCS.',
            'Staphylococcus aureus é uma mastite contagiosa crônica: o controle baseia-se em linha de ordenha e pós-dipping.',
            'Nunca acople o conjunto de ordenha em tetos úmidos: a secagem individual com papel toalha descartável é inegociável.'
          ]
        }
      },
      {
        id: 'sec_bovine_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Qualidade do Leite & Mastite Bovina',
        exerciseId: 'ex_bovine_01'
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
    prompt: 'Por que fornecer grandes refeições de grãos concentrados (mais de 2.5 kg a 3.0 kg por refeição) para cavalos atletas predispõe criticamente à cólica por sobrecarga e acidose cecal?',
    options: [
      {
        id: 'opt_eq_1',
        text: 'Porque o estômago do equino é pequeno (8 a 15 L) e a capacidade enzimática de amilase no intestino delgado é limitada, permitindo que o excesso de amido não digerido extravase para o ceco, onde sofre fermentação lática acelerada',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O cavalo é um herbívoro monogástrico com fermentação pós-gástrica. O estômago esvazia rapidamente e o intestino delgado possui capacidade enzimática finita para digerir amido. O excesso de carboidratos solúveis atinge o ceco e cólon maior, servindo de banquete para bactérias amilolíticas que produzem ácido lático, despencam o pH cecal, matam a microbiota celulolítica e liberam endotoxinas.'
      },
      {
        id: 'opt_eq_2',
        text: 'Porque o cavalo rumina o concentrado durante a noite, regurgitando o amido',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Equinos são estritamente monogástricos e anatômica e fisiologicamente incapazes de regurgitar ou vomitar devido à forte válvula cárdica e ângulo do esôfago.'
      },
      {
        id: 'opt_eq_3',
        text: 'Porque os grãos destroem a secreção de ácido clorídrico no ceco',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O ácido clorídrico é produzido exclusivamente no estômago (glândulas fúndicas), e jamais no ceco.'
      },
      {
        id: 'opt_eq_4',
        text: 'Porque o amido se transforma em bile no fígado do cavalo',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A bile é sintetizada a partir do colesterol e sais biliares, e o cavalo nem sequer possui vesícula biliar (secreção contínua).'
      }
    ]
  }
];

export const EQUINE_PROD_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_equine_01_athletic_nutrition',
    moduleId: 'mod_equine_prod',
    title: 'Equideocultura: Fisiologia Digestiva do Atleta & Prevenção de Cólica',
    shortDescription: 'Manejo nutricional do cavalo atleta: proporção volumoso:concentrado, fracionamento de ração e podologia esportiva.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_equine_athletic_nutrition_shoeing'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_equine_th1',
        type: 'theory',
        title: 'A Fisiologia Peculiar do Trato Gastrointestinal Equino',
        contentMarkdown: `### Um Estômago Pequeno para Pastejo Contínuo

Na natureza, o cavalo caminha até 16 horas por dia ingerindo pequenas porções de capim fibroso. Sua anatomia reflete isso:
* **Estômago Reduzido:** Apenas 8 a 15 litros de capacidade. Quando recebe uma sobrecarga de concentrado, o alimento passa rapidamente sem sofrer digestão enzimática completa.
* **Incúria Cárdica:** A musculatura do cárdia e o ângulo de inserção do esôfago impedem o vômito. Se o estômago sofrer dilatação gasosa excessiva, ele se rompe antes de o cavalo conseguir vomitar!

---

### A Regra de Ouro da Nutrição Equina

1. **Volumoso Primeiro:** O cavalo DEVE consumir no mínimo **1.5% a 2.0% do seu peso vivo em matéria seca de volumoso de boa qualidade (feno/pasto)** por dia para manter a motilidade e hidratação do cólon.
2. **Fracionamento do Concentrado:** Nunca fornecer mais de **0.4 a 0.5 kg de ração por 100 kg de peso vivo em uma única refeição** (máximo de 2.0 - 2.5 kg por trato para um cavalo de 500 kg).`
      },
      {
        id: 'sec_equine_lab1',
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
            habitatOrEnvironment: 'Cocheira de hipódromo'
          },
          vitals: {
            heartRateBpm: 72,
            respiratoryRateRpm: 32,
            temperatureCelsius: 38.9,
            mucousMembranes: 'Congestas e sudorese profusa',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Eclipse ficou de folga no domingo recebendo sua cota integral de ração rica em amido (6 kg/dia). Na segunda-feira pela manhã, após 15 minutos de galope na pista, travou completamente a passada, recusando-se a dar um único passo à frente. Musculatura da garupa e lombo dura como pedra (tétano muscular doloroso) e urina emitida marrom-avermelhada.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Perfil Enzimático Muscular e Urina',
              findings: 'Avaliação de enzimas de lesão de miócitos esqueléticos.',
              abnormalValues: [
                { parameter: 'Creatina Quinase (CK)', value: '45.000 U/L', reference: '< 350 U/L', status: 'critical' },
                { parameter: 'Aspartato Aminotransferase (AST)', value: '3.800 U/L', reference: '< 400 U/L', status: 'critical' },
                { parameter: 'Mioglobinúria', value: 'POSITIVA 4+', reference: 'Negativo', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Em plena crise aguda de rabdomiólise por esforço (segunda-feira), qual é a conduta prioritária?',
          decisionOptions: [
            {
              id: 'opt_dec_eq_1',
              label: 'Parar o exercício imediatamente no local + Fluidoterapia IV vigorosa + Analgesia (Acepromazina microdose + AINE)',
              description: 'Não forçar caminhada, proteger os túbulos renais contra necrose por mioglobina com fluidos e promover vasodilatação muscular.',
              isOptimal: true,
              consequenceText: 'Conduta perfeita de medicina esportiva equina! Forçar o animal a caminhar até a baia destruiria mais milhares de fibras musculares. A fluidoterapia intravenosa rápida previne a precipitated mioglobínica nos túbulos renais (necrose tubular aguda fatal).',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Interrupção do movimento, fluidoterapia de alto volume e vasodilatação periférica',
                mechanism: 'Preservação da perfusão renal e clareamento da mioglobina nefrotóxica circulante',
                effect: 'Queda progressiva da CK sérica e relaxamento do espasmo muscular dos glúteos',
                clinicalMeaning: 'Prevenção de insuficiência renal aguda anúrica e recuperação da integridade muscular'
              }
            },
            {
              id: 'opt_dec_eq_2',
              label: 'Bater no cavalo para fazê-lo marchar até a cocheira e dar uma ducha gelada na garupa',
              description: 'Forçar o cavalo a andar para supostamente "esfriar a musculatura".',
              isOptimal: false,
              consequenceText: 'Erro brutal e incapacitante! A água fria e o exercício forçado agravam o espasmo muscular isquêmico, causam ruptura massiva de feixes musculares e necrose renal irreversível.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Exercício forçado e choque térmico com água gelada em músculo em espasmo',
                mechanism: 'Vasoconstrição reflexa somada à quebra mecânica de membranas de sarcômeros',
                effect: 'Rabdomiólise catastrófica com liberação torrencial de mioglobina e potássio',
                clinicalMeaning: 'Insuficiência renal aguda oligoanúrica e decúbito permanente'
              }
            },
            {
              id: 'opt_dec_eq_3',
              label: 'Aumentar a ração na baia para repor o glicogênio gasto',
              description: 'Oferecer mais concentrado para repor calorias.',
              isOptimal: false,
              consequenceText: 'Contraindicação total. A doença da segunda-feira decorre exatamente do excesso de glicogênio armazenado durante os dias de repouso sem diminuição da ração.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Sobrecarga de carboidratos em animal com disfunção de armazenamento de glicogênio',
                mechanism: 'Piora do acúmulo de intermediários glicolíticos anormais no miócito',
                effect: 'Recidiva imediata de crises espásticas ao menor esforço',
                clinicalMeaning: 'Incapacidade atlética crônica'
              }
            }
          ],
          learningTakeaways: [
            'Nos dias de repouso ou folga do cavalo atleta, a cota de concentrado DEVE ser reduzida pela metade.',
            'Cavalo com rabdomiólise ("travado") NÃO PODE ser forçado a caminhar.',
            'A fluidoterapia de alto volume é obrigatória para proteger os rins contra o efeito nefrotóxico da mioglobina.'
          ]
        }
      },
      {
        id: 'sec_equine_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Nutrição & Rabdomiólise Equina',
        exerciseId: 'ex_equine_01'
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
    prompt: 'Em um sistema industrial de produção avícola de corte (frangos de corte), qual é o conceito sanitário e operacional de "Vazio Sanitário" e qual sua finalidade indispensável?',
    options: [
      {
        id: 'opt_sp_1',
        text: 'Período obrigatório de descanso e desocupação total do galpão (mínimo de 10 a 14 dias) após a retirada das aves, limpeza mecânica e desinfecção química, para quebrar o ciclo de transmissão de patógenos entre lotes sucessivos',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! No modelo "all-in, all-out" (todos dentro, todos fora), o vazio sanitário permite que agentes virais e bacterianos (como Salmonella, vírus de Gumboro e coccídeas) sofram dessecação e morte sem hospedeiros vivos suscetíveis, impedindo que o lote novo seja infectado pela carga residual do lote anterior.'
      },
      {
        id: 'opt_sp_2',
        text: 'Espaço vazio deixado no meio do galpão para os pintinhos brincarem',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A avicultura industrial opera com densidade uniforme controlada por metro quadrado com divisórias de pinteiro e aquecimento homogêneo.'
      },
      {
        id: 'opt_sp_3',
        text: 'Período em que as aves ficam sem beber água antes do abate',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A suspensão pré-abate é o jejum alimentar de ração (8 a 12h) para esvaziamento do papo, mantendo acesso à água até a apanha.'
      },
      {
        id: 'opt_sp_4',
        text: 'Instalação de exaustores de teto sem cortinas laterais',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Isso diz respeito à ambiência e ventilação por pressão negativa tipo túnel, e não ao protocolo sanitário de desinfecção e quebra de ciclo.'
      }
    ]
  }
];

export const SWINE_POULTRY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_swine_poultry_01_biosecurity',
    moduleId: 'mod_swine_poultry',
    title: 'Produção Intensiva: Biosseguridade & Manejo All-In-All-Out',
    shortDescription: 'Barreiras sanitárias de granja, vazio sanitário, manejo de ambiência térmica e controle de Salmonella e Influenza.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_swine_poultry_biosecurity_ambience'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_swine_poultry_th1',
        type: 'theory',
        title: 'As Três Linhas de Defesa da Biosseguridade Industrial',
        contentMarkdown: `### Como Proteger 50.000 Animais Confinados em um Galpão

Em plantéis com alta densidade, a introdução de um único patógeno viral ou bacteriano pode dizimar o lote em 48 horas. A biosseguridade estrutura-se em:
1. **Bioexclusão (Linha de Cerca Externa):** Arco de desinfecção obrigatório para pneus de caminhões, quarentena de insumos e proibição rigorosa de visitas.
2. **Biocontenção (Vestiário Barreira Suja/Limpa):** Banho obrigatório na entrada, troca completa de roupas e calçados exclusivos do setor.
3. **Manejo Todos Dentro, Todos Fora (All-in, All-out):** Lotes com animais da mesma idade cronológica, alojados e despachados juntos para abate simultâneo, seguido de **Vazio Sanitário rigoroso**.`
      },
      {
        id: 'sec_swine_poultry_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Granja São Bento',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Gestão de Foco de Salmonelose em Galpão de Frangos de Corte',
          patient: {
            name: 'Lote 04 (Galpão 2)',
            species: 'Aves de Corte',
            breed: 'Cobb 500',
            age: '28 dias',
            weightKg: 1.4,
            habitatOrEnvironment: 'Galpão Dark House com pressão negativa'
          },
          vitals: {
            heartRateBpm: 320,
            respiratoryRateRpm: 60,
            temperatureCelsius: 41.8,
            mucousMembranes: 'Crestas e barbelas pálidas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Mortalidade diária saltou de 0.05% para 0.8% ao dia nas últimas 48h. Aves amontoadas sob os comedouros, penas eriçadas, diarreia amarelada espumosa com empastamento da cloaca. O tratador admitiu ter permitido a entrada do caminhão de ração sem passar pelo arco de desinfecção há 5 dias.',
          exams: [
            {
              category: 'microbiology',
              title: 'Necrópsia Sistemática de Aves Mortas + PCR',
              findings: 'Fígado com hepatomegalia, coloração bronzeada e múltiplos focos miliares necróticos esbranquiçados ("necrose em céu estrelado"). Tiflite com cilindros caseosos cecais.',
              abnormalValues: [
                { parameter: 'Cultura de Ceco e Fígado', value: 'Isolamento de Salmonella enterica', reference: 'Negativo', status: 'critical' },
                { parameter: 'Mortalidade Acumulada', value: '3.8%', reference: '< 1.5% ao lote', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Confirmada contaminação por Salmonella em aves industriais, qual é o protocolo mandatório de biosseguridade?',
          decisionOptions: [
            {
              id: 'opt_dec_sp_1',
              label: 'Notificação e investigação epidemiológica + Acidificação da água de bebida (ácidos orgânicos) + Reforço total de barreiras',
              description: 'Reduzir pH intestinal com ácidos orgânicos para dificultar proliferação bacteriana, auditar o fornecedor de ração e planejar vazio sanitário estendido.',
              isOptimal: true,
              consequenceText: 'Excelente conduta técnica alinhada à legislação sanitária e segurança dos alimentos! O uso de ácidos orgânicos (fórmico e propiônico) na água baixa o pH do papo e moela, criando um ambiente hostil à Salmonella sem selecionar superbactérias com antibióticos de uso humano.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Acidificação da água com ácidos graxos de cadeia curta e auditoria de biosseguridade',
                mechanism: 'Desestabilização da homeostase do pH intracelular da Salmonella e bloqueio de fômites',
                effect: 'Redução da excreção fecal e contenção da disseminação no aviário',
                clinicalMeaning: 'Estabilização da mortalidade, prevenção de contaminação cruzada no abatedouro e conformidade sanitária'
              }
            },
            {
              id: 'opt_dec_sp_2',
              label: 'Administrar Enrofloxacino na água de bebida de todo o plantel para mascarar o problema',
              description: 'Usar fluoroquinolona de amplo espectro para abafar os sintomas.',
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
              id: 'opt_dec_sp_3',
              label: 'Apenas retirar as aves mortas e encurtar o vazio sanitário para 3 dias',
              description: 'Reduzir o tempo de galpão vazio para alojar o próximo lote mais rápido.',
              isOptimal: false,
              consequenceText: 'Catástrofe de manejo! Um vazio sanitário de 3 dias garante que a cama e os bebedouros continuarão altamente infectados com Salmonella viável, contaminando o lote seguinte já no primeiro dia de vida.',
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
            'O uso preventivo ou indiscriminado de antibióticos de uso humano é proibido na cadeia avícola.',
            'A acidificação da água com ácidos orgânicos é uma ferramenta padrão de biosseguridade entérica.'
          ]
        }
      },
      {
        id: 'sec_swine_poultry_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Biosseguridade & Sanidade Avícola',
        exerciseId: 'ex_swine_poultry_01'
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
    conceptId: 'concept_small_ruminants_toxemia_pasture',
    type: 'multiple_choice',
    prompt: 'Uma ovelha Santa Inês no último mês de gestação (carregando fetos gêmeos confirmados por ultrassom) apresenta isolamento do rebanho, cegueira aparente, ranger de dentes, tremores musculares na cabeça e decúbito com incapacidade de se levantar. Ao teste urinário com fita reagente, observa-se cetonúria intensa (4+). Qual é a patologia metabólica e sua causa primária?',
    options: [
      {
        id: 'opt_sr_1',
        text: 'Toxemia da Prenhez Ovina (Cetose da Gestação); causada pelo aumento exponencial da demanda fetal por glicose nas últimas 4-6 semanas associado à restrição de espaço ruminal pelo útero gravídico',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Fetos gemelares em ovelhas demandam mais de 70% da glicose circulante da mãe. Simultaneamente, o útero volumoso comprime fisicamente o rúmen, reduzindo o consumo de forragem e forçando uma lipólise materna devastadora que gera corpos cetônicos e encefalopatia hipoglicêmica.'
      },
      {
        id: 'opt_sr_2',
        text: 'Hipocalcemia aguda puerperal (Febre do Leite) no momento exato do parto',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A ovelha ainda não pariu (está no terço final da gestação) e a cetonúria maciça aponta diretamente para o distúrbio do metabolismo glicídico da toxemia da prenhez.'
      },
      {
        id: 'opt_sr_3',
        text: 'Tétano clínico por contaminação de ferida',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O tétano causa paralisia espástica com prolapso de terceira pálpebra e postura de cavalete, sem cetonúria de gestação.'
      },
      {
        id: 'opt_sr_4',
        text: 'Intoxicação aguda por sal mineral',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A intoxicação por sal decorre de privação de água seguida de consumo excessivo, sem correlação específica com gestações gemelares tardias.'
      }
    ]
  }
];

export const SMALL_RUMINANTS_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_small_rum_01_pregnancy_toxemia',
    moduleId: 'mod_small_ruminants',
    title: 'Pequenos Ruminantes: Toxemia da Prenhez & Manejo Periparto',
    shortDescription: 'Metabolismo da gestação gemelar em ovelhas e cabras, compressão ruminal, cetose materna e terapia intensiva.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_small_ruminants_toxemia_pasture'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_small_rum_th1',
        type: 'theory',
        title: 'A Batalha Energética no Final da Gestação Ovina',
        contentMarkdown: `### Por que as Ovelhas com Gêmeos são as Primeiras a Sucumbir?

Nas últimas 4 semanas de gestação, os fetos ovinos ganham **mais de 70% do seu peso final de nascimento**. 

Isso cria uma armadilha fisiológica perfeita:
1. **Demanda Inflexível:** Os fetos consomem quase toda a glicose circulante da mãe via difusão facilitada pela placenta.
2. **Capacidade Ruminal Esmagada:** O útero gravídico duplo empurra o saco ventral do rúmen, reduzindo o volume de alimento que a ovelha consegue ingerir em até 30%.
3. **Colapso Cerebral:** Sem glicose suficiente para os neurônios maternos e com o sangue intoxicado por corpos cetônicos (BHB), a ovelha desenvolve **encefalopatia hipoglicêmica** com cegueira, tremores e coma.`
      },
      {
        id: 'sec_small_rum_lab1',
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
            weightKg: 65,
            habitatOrEnvironment: 'Piquete com pastagem nativa e cocho'
          },
          vitals: {
            heartRateBpm: 104,
            respiratoryRateRpm: 40,
            temperatureCelsius: 38.4,
            mucousMembranes: 'Rosadas com leve icterícia',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Ovelha parindo pela 2ª vez, gestação gemelar de 140 dias (parto previsto para 147 dias). O criador a encontrou imóvel encostada na cerca, não responde a estímulos sonoros, com a cabeça estendida e marcha cambaleante. O hálito apresenta odor forte de acetona.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Glicemia Capilar e Fita de Urina',
              findings: 'Avaliação metabólica imediata ao lado da ovelha no curral.',
              abnormalValues: [
                { parameter: 'Glicemia', value: '22 mg/dL', reference: '50 - 80 mg/dL', status: 'critical' },
                { parameter: 'Cetonúria (Urina)', value: '4+ (Fortemente positiva)', reference: 'Negativo', status: 'critical' },
                { parameter: 'BHB Sanguíneo', value: '4.8 mmol/L', reference: '< 0.8 mmol/L', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com encefalopatia hipoglicêmica e fetos a 7 dias do termo, qual é a conduta médica combinada?',
          decisionOptions: [
            {
              id: 'opt_dec_sr_1',
              label: 'Infusão IV de glicose hipertônica + Propilenoglicol oral + Cesariana de emergência ou indução de parto (Dexametasona)',
              description: 'Restabelecer a glicemia cerebral imediatamente, fornecer precursores de propionato e remover o dreno fetal que está consumindo a vida da matriz.',
              isOptimal: true,
              consequenceText: 'Decisão cirúrgica e médica perfeita! Em estágios avançados de toxemia da prenhez com decúbito, a sobrevida da matriz depende da interrupção imediata da demanda energética fetal. A cesariana ou indução com glicose salva a vida da ovelha e permite retirar cordeiros viáveis.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Correção da hipoglicemia e remoção cirúrgica/induzida do feto',
                mechanism: 'Cessação imediata do desvio de glicose para a placenta e restauração da glicemia neuronal',
                effect: 'Queda vertiginosa da produção hepática de corpos cetônicos',
                clinicalMeaning: 'Reversão do coma neurológico materno e salvamento da matriz e dos cordeiros'
              }
            },
            {
              id: 'opt_dec_sr_2',
              label: 'Oferecer água com açúcar em balde e aguardar o parto natural',
              description: 'Tentar suporte caseiro esperando a ovelha entrar em trabalho de parto sozinha.',
              isOptimal: false,
              consequenceText: 'Conduta inaceitável. Ovelhas em estágio neurológico de toxemia não bebem voluntariamente e morrem em 24 a 48h por esteatose hepática irreversível e morte fetal com autólise uterina.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Espera passiva diante de hipoglicemia cerebral e cetose grave',
                mechanism: 'Morte fetal intrauterina por anóxia com liberação de toxinas sépticas',
                effect: 'Metrite tóxica sobreposta à lipidose hepática fulminante',
                clinicalMeaning: 'Óbito da ovelha e dos fetos'
              }
            },
            {
              id: 'opt_dec_sr_3',
              label: 'Aplicar apenas cálcio injetável suspeitando de febre do leite',
              description: 'Tratar com cálcio sem administrar glicose ou propilenoglicol.',
              isOptimal: false,
              consequenceText: 'Falha diagnóstica. Embora uma leve hipocalcemia possa ser secundária, o defeito metabólico central é a falta de glicose e excesso de corpos cetônicos.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Terapia focada em cálcio sem corrigir o déficit glicídico',
                mechanism: 'Manutenção da carência de oxaloacetato no fígado',
                effect: 'Persistência do BHB em níveis neurotóxicos',
                clinicalMeaning: 'Progressão do coma hipoglicêmico'
              }
            }
          ],
          learningTakeaways: [
            'Ovelhas com gestações gemelares no terço final são o grupo de risco clássico para toxemia da prenhez.',
            'O feto é um dreno biológico inflexível de glicose que não respeita o esgotamento energético da mãe.',
            'Em animais em decúbito que não respondem à glicose e propilenoglicol, a cesariana de urgência é mandatória para salvar a matriz.'
          ]
        }
      },
      {
        id: 'sec_small_rum_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Toxemia da Prenhez em Ovinos',
        exerciseId: 'ex_small_rum_01'
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
    prompt: 'No âmbito do Programa Nacional de Controle e Erradicação da Brucelose e Tuberculose Animal (PNCEBT) do MAPA, qual é a vacina viva atenuada obrigatória para bezerras de 3 a 8 meses contra a Brucelose e qual a sua exigência legal em machos?',
    options: [
      {
        id: 'opt_prev_1',
        text: 'Vacina B19 (amostra atenuada de Brucella abortus); obrigatória em fêmeas e ESTRITAMENTE PROIBIDA em machos (pois causa orquite e títulos vacinais falso-positivos)',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A B19 confere imunidade duradoura às fêmeas quando aplicada entre 3 e 8 meses de idade, com marcação a ferro quente com o dígito do ano na face esquerda. Em machos, é formalmente proibida pela legislação porque coloniza os testículos, gera orquite/epididimite e induz persistência de anticorpos que invalidam o diagnóstico sorológico oficial.'
      },
      {
        id: 'opt_prev_2',
        text: 'Vacina B19 deve ser aplicada anualmente em todos os touros reprodutores',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A vacinação de machos com B19 é proibida por lei pelo PNCEBT do MAPA.'
      },
      {
        id: 'opt_prev_3',
        text: 'Vacina RB51 é a única permitida por lei e não exige controle oficial',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A RB51 (amostra rugosa que não induz anticorpos contra LPS O) é uma opção para fêmeas adultas não vacinadas com B19, mas a B19 continua sendo a vacina oficial clássica para bezerras jovens.'
      },
      {
        id: 'opt_prev_4',
        text: 'A brucelose bovina não possui vacina, sendo controlada apenas por banhos acaricidas',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A vacinação oficial é o pilar mais importante de imunoprofilaxia sanitária do Brasil.'
      }
    ]
  }
];

export const PREVENTIVE_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_preventive_01_mapa_programs',
    moduleId: 'mod_preventive_medicine',
    title: 'Defesa Sanitária Oficial: O Programa Nacional PNCEBT (MAPA)',
    shortDescription: 'Regulamentação federal da Brucelose e Tuberculose, teste cervical comparado, trânsito animal (GTA) e notificação compulsória.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_preventive_mapa_surveillance'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_preventive_th1',
        type: 'theory',
        title: 'A Atuação do Médico Veterinário como Agente Sanitário Oficial',
        contentMarkdown: `# Aula Universitária: Defesa Sanitária Animal & Diagnóstico do PNCEBT

> 📖 Referência Canônica: Ministério da Agricultura e Pecuária (MAPA) — *Manual Técnico do Programa Nacional de Controle e Erradicação da Brucelose e da Tuberculose Animal (PNCEBT)*. Instrução Normativa nº 10/2017. World Organisation for Animal Health (WOAH) — *Manual of Diagnostic Tests and Vaccines for Terrestrial Animals*.

### O Papel do PNCEBT na Saúde Pública e Comércio Internacional

A Brucelose (*Brucella abortus*) e a Tuberculose (*Mycobacterium bovis*) são **zoonoses crônicas de notificação compulsória** que impactam diretamente a saúde humana e causam embargos de exportação de carne e lácteos.

---

### Diagnóstico Oficial da Tuberculose Bovina

O teste confirmatório padrão oficial é o **Teste Cervical Comparado (TCC)**:
* Inocula-se **Derivado Proteico Purificado de M. avium (PPD aviária)** no sítio cranial e **M. bovis (PPD bovina)** no sítio caudal da tábua do pescoço (via intradérmica estrita, com seringas calibradas de 0.1 mL).
* Leitura oficial com cutímetro de mola após exatamente **$72 \pm 6$ horas**.
* Se o aumento da espessura da pele no ponto da PPD bovina for pelo menos $4.0\text{ mm}$ maior que a reação na PPD aviária ($\Delta \text{Bovina} - \Delta \text{Aviária} \ge 4.0\text{ mm}$) → animal considerado **POSITIVO (Reagente)**.
* **Destino Legal Obrigatório do Reagente:** Notificação imediata ao Serviço Veterinário Oficial (SVO) estadual/federal, marcação a fogo com a letra "P" no lado direito da cara e **sacrifício sanitário obrigatório** em até 30 dias em estabelecimento sob inspeção oficial (SIF), sem direito à indenização pelo Estado.`
      },
      {
        id: 'sec_preventive_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Sanitária: Fazenda Esperança',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Interpretação do Teste Cervical Comparado e Certificação Sanitária',
          patient: {
            name: 'Vaca 104 (Rebanho Esperança)',
            species: 'Bovino Leiteiro',
            breed: 'Holandesa',
            age: '4 anos',
            weightKg: 580,
            habitatOrEnvironment: 'Fazenda em processo de certificação livre de Tuberculose'
          },
          vitals: {
            heartRateBpm: 64,
            respiratoryRateRpm: 20,
            temperatureCelsius: 38.5,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Propriedade leiteira está realizando o saneamento do plantel para obtenção do certificado de Propriedade Livre de Brucelose e Tuberculose. O veterinário habilitado realizou a inoculação intradérmica comparada com PPD bovina e PPD aviária há exatamente 72 horas.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Leitura com Cutímetro Analógico de Alta Precisão (72 horas pós-inoculação)',
              findings: 'Mensuração da dobra da pele cervical com paquímetro cutâneo calibrado.',
              abnormalValues: [
                { parameter: 'Espessura Inicial PPD Bovina (H0)', value: '6.0 mm', reference: 'Baseline', status: 'low' },
                { parameter: 'Espessura Final PPD Bovina (H72)', value: '14.5 mm (Aumento Delta = +8.5 mm)', reference: '< 2.0 mm', status: 'critical' },
                { parameter: 'Aumento na PPD Aviária (Delta A)', value: '+1.5 mm', reference: 'Baseline', status: 'low' },
                { parameter: 'Diferença Relativa (Delta B - Delta A)', value: '+7.0 mm (Reação Positiva)', reference: '< 2.0 mm Negativo', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com Delta B - Delta A = 7.0 mm (> 4.0 mm), qual é a obrigação legal do médico veterinário habilitado?',
          decisionOptions: [
            {
              id: 'opt_dec_prev_1',
              label: 'Laudar Vaca 104 como POSITIVA, isolar o animal e notificar imediatamente o órgão de defesa estadual para abate sanitário',
              description: 'Cumprir a regulamentação do PNCEBT: animal reagente deve ser isolado do rebanho e sacrificado sanitariamente sem aproveitamento de carcaça.',
              isOptimal: true,
              consequenceText: 'Conduta ética e legal perfeita! O teste comparado positivo em propriedade de saneamento é definitivo. Não é permitido "esperar para ver" nem repetir o teste antes de 60 a 90 dias (devido à anergia imunológica pós-teste). A notificação oficial protege a saúde pública e os demais animais.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Notificação oficial do animal reagente e isolamento imediato',
                mechanism: 'Eliminação da fonte bacteriana de Mycobacterium bovis eliminada por aerossóis e leite cru',
                effect: 'Quebra da cadeia de transmissão horizontal no rebanho e proteção dos trabalhadores',
                clinicalMeaning: 'Erradicação do foco sanitário e avanço rumo ao status de Rebanho Livre Certificado'
              }
            },
            {
              id: 'opt_dec_prev_2',
              label: 'Prescrever Isoniazida e Rifampicina e continuar tirando leite para consumo',
              description: 'Tentar tratamento com antibióticos para tuberculose humana no animal.',
              isOptimal: false,
              consequenceText: 'Crime contra a saúde pública! O tratamento de animais diagnosticados com tuberculose bovina é formalmente PROIBIDO por lei no Brasil, pois não elimina a bactéria, seleciona cepas resistentes e dissemina a doença pelo leite aos consumidores.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Tratamento medicamentoso clandestino proibido de tuberculose bovina',
                mechanism: 'Permanência de animais bacilíferos com eliminação ativa em leite',
                effect: 'Contaminação de seres humanos com tuberculose zoonótica extrapulmonar',
                clinicalMeaning: 'Processo ético-profissional no CRMV e processo criminal por crime contra a saúde pública'
              }
            },
            {
              id: 'opt_dec_prev_3',
              label: 'Repetir o teste amanhã de manhã para confirmar',
              description: 'Reaplicar a tuberculina imediatamente 24h após a primeira leitura.',
              isOptimal: false,
              consequenceText: 'Erro técnico grosseiro. A inoculação recente esgota os receptores de hipersensibilidade tardia (reação de tipo IV), gerando falso-negativo se repetido antes de 60 dias.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Repetição precoce do teste tuberculínico',
                mechanism: 'Dessensibilização temporária dos linfócitos T de memória',
                effect: 'Leitura falso-negativa que mantém um animal contaminador no rebanho',
                clinicalMeaning: 'Disseminação silenciosa da doença para todo o lote de animais sadios'
              }
            }
          ],
          learningTakeaways: [
            'O Teste Cervical Comparado (TCC) é o padrão oficial para diferenciar reações cruzadas por micobactérias atípicas.',
            'O tratamento de bovinos com tuberculose é rigorosamente proibido pela legislação do MAPA.',
            'A vacina B19 de Brucelose é restrita a fêmeas de 3 a 8 meses e terminantemente proibida em machos.'
          ]
        }
      },
      {
        id: 'sec_preventive_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Legislação Sanitária & PNCEBT',
        exerciseId: 'ex_preventive_01'
      }
    ]
  }
];

// ==========================================
// 7. CONTROLE DE ZOONOSES & SAÚDE PÚBLICA
// ==========================================
export const ZOONOSES_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_zoonoses_01',
    conceptId: 'concept_zoonoses_one_health_surveillance',
    type: 'multiple_choice',
    prompt: 'Um gato com histórico de brigas de rua apresenta lesões ulceradas e crostosas no focinho ("nariz de palhaço") e nódulos que acompanham o trajeto linfático na face e patas. O tutor que cuidava das feridas apresenta agora lesões ulceradas idênticas no antebraço. Qual é a zoonose fúngica de transmissão direta e o método diagnóstico rápido de eleição?',
    options: [
      {
        id: 'opt_zoo_1',
        text: 'Esporotricose felina e humana (Sporothrix schenckii complex); diagnóstico por exame citopatológico por aposição (imprint) corado por Panótico/Giemsa revelando leveduras pleomórficas em "charuto"',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A esporotricose é uma zoonose hiperendêmica no Brasil. O gato é um reservatório de altíssima carga fúngica em suas lesões cutâneas e unhas. A citologia por aposição revela fagócitos repletos de estruturas leveduriformes redondas, ovais ou em formato de charuto intra e extracelulares.'
      },
      {
        id: 'opt_zoo_2',
        text: 'Raiva urbana por mordedura de quirópteros',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A raiva é uma encefalomielite viral aguda com alterações neurológicas severas e hidrofobia em humanos, sem padrão de úlceras crônicas em trajeto linfático.'
      },
      {
        id: 'opt_zoo_3',
        text: 'Leptospirose ictero-hemorrágica',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A leptospirose é transmitida por urina de roedores e cursa com insuficiência renal e hepatonefrite aguda febril, não com nódulos gomosos em pele.'
      },
      {
        id: 'opt_zoo_4',
        text: 'Sarna sarcóptica zoonótica de cães',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A escabiose causa prurido intenso em borda de orelha e cotovelos com pápulas eritematosas no homem, sem ulcerações gomosas linfáticas com células em charuto.'
      }
    ]
  }
];

export const ZOONOSES_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_zoonoses_01_one_health',
    moduleId: 'mod_zoonoses',
    title: 'Saúde Única (One Health): Vigilância de Esporotricose & Raiva',
    shortDescription: 'Abordagem multidisciplinar de zoonoses urbanas: epidemiologia felina, biossegurança do tratador e notificação ao SUS.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_zoonoses_one_health_surveillance'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_zoonoses_th1',
        type: 'theory',
        title: 'A Interseção da Saúde Humana, Animal e Ambiental',
        contentMarkdown: `### O Conceito de One Health na Prática

Mais de **60% dos patógenos humanos conhecidos são de origem zoonótica** (transmitidos por animais). O médico veterinário atua na linha de frente do Sistema Único de Saúde (SUS):
* **Raiva Urbana & Silvestre:** Vírus do gênero *Lyssavirus*. Mortalidade de quase 100%. A vacinação de cães e gatos em massa cria um cordão sanitário imunológico que protege a população humana contra vírus transmitidos por morcegos hematófagos (*Desmodus rotundus*).
* **Esporotricose Zoonótica:** O fungo *Sporothrix brasiliensis* adaptou-se aos felinos, que carreiam bilhões de propágulos em exsudatos cutâneos, transmitindo diretamente ao homem por arranhadura, mordedura ou contato com pele lesionada.`
      },
      {
        id: 'sec_zoonoses_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Epidemiológica: Gato Mingau & Tutora',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Clínico e Sanitário de Esporotricose Felina Zoonótica',
          patient: {
            name: 'Mingau',
            species: 'Felino',
            breed: 'SRD Macho não-castrado',
            age: '2 anos',
            weightKg: 3.5,
            habitatOrEnvironment: 'Acesso livre à rua (semi-domiciliado)'
          },
          vitals: {
            heartRateBpm: 180,
            respiratoryRateRpm: 30,
            temperatureCelsius: 38.6,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Mingau voltou da rua há 3 semanas com feridas que não cicatrizam. Apresenta focinho edemaciado com úlcera central purulenta ("nariz de palhaço") e úlceras na cauda. A tutora idosa apresenta três nódulos avermelhados ulcerados no antebraço direito que surgiram após ser arranhada enquanto limpava o gato.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Citopatologia por Imprint Direto da Lesão de Focinho',
              findings: 'Lâmina corada por panótico rápido examinada sob objetiva de imersão (1000x).',
              abnormalValues: [
                { parameter: 'Presença de Leveduras em Charuto', value: 'POSITIVO INTENSO (Numerosas)', reference: 'Ausente', status: 'critical' },
                { parameter: 'Carga Fúngica nas Lesões', value: 'Alta (Exsudação purulenta)', reference: 'Negativo', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Confirmada a esporotricose felina e infecção na tutora, qual é a conduta integrada (One Health)?',
          decisionOptions: [
            {
              id: 'opt_dec_zoo_1',
              label: 'Prescrever Itraconazol oral para o gato (100 mg/dia) com luvas no manejo + Encaminhar tutora imediatamente ao serviço médico do SUS + Castração futura',
              description: 'Tratar o paciente animal com antifúngico de escolha por meses, orientar uso de EPI (luvas de borracha) e encaminhar a tutora ao infectologista.',
              isOptimal: true,
              consequenceText: 'Conduta perfeita sob o olhar da Saúde Única! A esporotricose felina é curável com itraconazol oral continuado por pelo menos 30 dias após a cura clínica completa. O encaminhamento da tutora ao SUS garante o início do tratamento humano antes que as lesões atinjam a circulação linfática profunda.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Terapia antifúngica com itraconazol no animal e encaminhamento médico da tutora',
                mechanism: 'Inibição da síntese de ergosterol na membrana fúngica e interrupção do ciclo epidemiológico',
                effect: 'Cicatrização das úlceras e eliminação da carga infectante das garras e focinho',
                clinicalMeaning: 'Cura do animal, cura da tutora e bloqueio de novos casos na vizinhança'
              }
            },
            {
              id: 'opt_dec_zoo_2',
              label: 'Indicar a eutanásia imediata do gato e dizer para a tutora passar pomada de corticoide no braço',
              description: 'Sacrificar o gato sem tentar tratamento e orientar corticoide na humana.',
              isOptimal: false,
              consequenceText: 'Erro gravíssimo! A eutanásia em esporotricose é estritamente desnecessária, pois o animal responde muito bem ao tratamento antifúngico. Além disso, passar corticoide na pele humana acelera a proliferação do fungo e causa disseminação fúngica sistêmica fatal.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Indicação de corticoide tópico em lesão fúngica zoonótica ativa',
                mechanism: 'Supressão da imunidade celular local necessária para contenção do Sporothrix',
                effect: 'Disseminação fúngica fulminante na paciente humana',
                clinicalMeaning: 'Esporotricose linfocutânea disseminada grave com risco de óbito'
              }
            },
            {
              id: 'opt_dec_zoo_3',
              label: 'Prescrever antibiótico Cefalexina para o gato e liberar para continuar saindo à rua',
              description: 'Tratar como piodermite bacteriana e não restringir saídas à rua.',
              isOptimal: false,
              consequenceText: 'Falha completa. Antibacterianos não têm nenhum efeito em fungos dimórficos. Permitir que o gato saia à rua infectado disseminará o patógeno para todos os felinos da vizinhança por brigas territoriais.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Erro diagnóstico com prescrição de antibiótico e permissão de vida livre',
                mechanism: 'Inoculação contínua de Sporothrix por mordeduras e arranhões em outros animais',
                effect: 'Eclosão de surto endêmico no bairro',
                clinicalMeaning: 'Multiplicação geométrica de casos animais e humanos na comunidade'
              }
            }
          ],
          learningTakeaways: [
            'A esporotricose felina é uma zoonose de notificação compulsória curável com Itraconazol oral prolongado.',
            'O gato não deve ser sacrificado: o isolamento domiciliar e o uso de luvas durante a medicação são suficientes para a segurança da família.',
            'Corticosteroides são formalmente contraindicados em lesões suspeitas de esporotricose.'
          ]
        }
      },
      {
        id: 'sec_zoonoses_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Saúde Pública & Esporotricose Zoonótica',
        exerciseId: 'ex_zoonoses_01'
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
    conceptId: 'concept_infectious_distemper_avian_flu',
    type: 'multiple_choice',
    prompt: 'Um cão jovem de 6 meses resgatado das ruas apresenta hiperqueratose acentuada nos coxins plantares e espelho nasal ("hard pad disease"), secreção oculonasal mucopurulenta, tosse e mioclonia rítmica involuntária da musculatura temporal e dos membros mesmo durante o sono. Qual é a etiologia viral e a razão biológica das contrações mioclônicas involuntárias?',
    options: [
      {
        id: 'opt_inf_1',
        text: 'Vírus da Cinomose Canina (Canine Morbillivirus); a invasão viral e desmielinização primária no sistema nervoso central lesionam os neurônios motores e tratos motores descendentes, provocando descargas elétricas ectópicas rítmicas e mioclonias',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O vírus da cinomose (família Paramyxoviridae) possui tropismo epitelial e neurotrópico. No SNC, a replicação viral inicial nas células gliais e o subsequente ataque imunomediado contra a mielina causam encefalite desmielinizante. O sinal clínico clássico de contrações musculares rítmicas repetitivas (mioclonias) que persistem durante o sono é patognomônico de lesão viral no tronco cerebral e medula.'
      },
      {
        id: 'opt_inf_2',
        text: 'Vírus da Hepatite Infecciosa Canina (Adenovírus Canino Tipo 1) que ataca as células de Kupffer',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O CAV-1 causa necrose hepática centrolobular e uveíte anterior com edema de córnea ("blue eye"), não cursando com hiperqueratose de coxins e mioclonias.'
      },
      {
        id: 'opt_inf_3',
        text: 'Tétano por esporos de Clostridium perfringens nos pulmões',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O tétano decorre de C. tetani em feridas profundas anaeróbicas e causa tetania sustentada (rigidez em cavalete), sem secreção catarral nem hard pad.'
      },
      {
        id: 'opt_inf_4',
        text: 'Infecção fúngica sistêmica por Candida albicans',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A candidíase é oportunista de mucosas e não gera o complexo neurológico e hiperceratósico da cinomose canina.'
      }
    ]
  }
];

export const INFECTIOUS_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_infectious_01_distemper_phases',
    moduleId: 'mod_infectious_diseases',
    title: 'Moléstias Infecciosas: Fisiopatologia da Cinomose Canina',
    shortDescription: 'As fases catarral, digestiva, dermatológica e neurológica da cinomose: desmielinização, mioclonias e suporte neuroprotetor.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_infectious_distemper_avian_flu'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_infectious_th1',
        type: 'theory',
        title: 'A Progressão Bifásica do Vírus da Cinomose',
        contentMarkdown: `### O Morbillivirus e a Evasão do Sistema Imune

A infecção por Cinomose ocorre por inalação de aerossóis contendo o vírus, que se liga aos receptores **CD150 (SLAM)** em macrófagos e linfócitos da cavidade orofaríngea.

---

### As 4 Fases Clínicas da Cinomose

$$\text{Inalação} \longrightarrow \text{Linfopenia & Febre Bifásica} \longrightarrow \text{Fase Catarral} \longrightarrow \text{Fase Neurológica}$$

1. **Fase Epitelial/Respiratória e Digestiva:** Secreção oculonasal purulenta, broncopneumonia bacteriana secundária, vômitos e diarreia.
2. **Fase Dermatológica:** Pústulas abdominais assépticas e **Hiperqueratose de coxins e plano nasal (Hard Pad Disease)** por replicação viral nas células basais epidérmicas.
3. **Fase Neurológica (Grave):** Desmielinização imune no SNC. Manifesta-se por **mioclonias rítmicas** de grupos musculares, convulsões tipo *chewing gum fits* (mastigação em falso), ataxia e paresia.`
      },
      {
        id: 'sec_infectious_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Lobo (SRD Resgatado)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Clínico e Terapêutico de Cinomose em Fase Neurológica',
          patient: {
            name: 'Lobo',
            species: 'Canino',
            breed: 'SRD',
            age: '7 meses',
            weightKg: 11.5,
            habitatOrEnvironment: 'Abrigo de resgate de animais'
          },
          vitals: {
            heartRateBpm: 125,
            respiratoryRateRpm: 32,
            temperatureCelsius: 39.4,
            mucousMembranes: 'Congestas com crostas purulentas nasais',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Cão resgatado há 10 dias com histórico de tosse e conjuntivite purulenta tratada empiricamente. Há 48 horas começou a apresentar contrações rítmicas involuntárias do músculo masseter (movimentos constantes de mastigação) e espasmos da pata dianteira esquerda que não cessam nem durante o sono profundo. Coxins plantares ressecados e rachados.',
          exams: [
            {
              category: 'laboratorial',
              title: 'PCR em Tempo Real (RT-qPCR) para Cinomose em Urina e Sangue',
              findings: 'Detecção do RNA viral e análise do hemograma.',
              abnormalValues: [
                { parameter: 'RT-qPCR Cinomose', value: 'POSITIVO (Carga Alta)', reference: 'Negativo', status: 'critical' },
                { parameter: 'Linfócitos Absolutos', value: '620 /uL (Linfopenia severa)', reference: '1.000 - 4.800 /uL', status: 'critical' },
                { parameter: 'Mioclonia Temporal', value: 'Presente contínua', reference: 'Ausente', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Na fase neurológica com mioclonia ativa e linfopenia, qual é o protocolo de suporte neuroprotetor?',
          decisionOptions: [
            {
              id: 'opt_dec_inf_1',
              label: 'Suporte neuroprotetor (Levetiracetam/Fenobarbital para crises) + Ribavirina/Dimetilsulfóxido + Complexo B e isolamento estrito',
              description: 'Controlar atividade convulsiva cerebral, modular inflamação neurológica, manter nutrição hipercalórica e isolamento para não infectar outros cães do abrigo.',
              isOptimal: true,
              consequenceText: 'Conduta adequada e compassiva! Não existe antiviral específico com cura mágica para o SNC, mas o controle rigoroso da hiperexcitabilidade neuronal com anticonvulsivantes modernos (como Levetiracetam), suporte vitamínico e proteção contra pneumonia secundária estabiliza muitos pacientes.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Controle de descargas ectópicas centrais e suporte intensivo',
                mechanism: 'Bloqueio da cascata excitatória mediada por glutamato no córtex cerebral',
                effect: 'Redução da frequência de crises convulsivas e preservação de parênquima encefálico',
                clinicalMeaning: 'Estabilização clínica e possibilidade de reabilitação e qualidade de vida'
              }
            },
            {
              id: 'opt_dec_inf_2',
              label: 'Aplicar megadose de corticosteroide imunossupressor para parar a mioclonia',
              description: 'Usar dexametasona em alta dose para desinflamar a medula.',
              isOptimal: false,
              consequenceText: 'Erro perigoso! O vírus da cinomose já produz uma imunodeficiência profunda de linfócitos T. A administração de corticoides nessa fase reativa a replicação viral sistêmica, acelerando a necrose neuronal.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Imunossupressão com corticoides em paciente com replicação viral ativa',
                mechanism: 'Paralisia dos linfócitos T citotóxicos que combatiam o Morbillivirus',
                effect: 'Disseminação descontrolada do vírus no parênquima cerebral',
                clinicalMeaning: 'Evolução fulminante para status epilepticus irreversível'
              }
            },
            {
              id: 'opt_dec_inf_3',
              label: 'Colocar o cão de volta na baia coletiva do abrigo sem isolamento',
              description: 'Manter contato com os outros cães do abrigo por falta de espaço.',
              isOptimal: false,
              consequenceText: 'Desastre sanitário inaceitável! O vírus da cinomose é altamente contagioso por via aerógena. Manter o cão na baia coletiva contaminará todos os animais jovens e não vacinados do abrigo.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Quebra de biossegurança e ausência de quarentena',
                mechanism: 'Disseminação de partículas virais por aerossóis e gotículas respiratórias',
                effect: 'Surto epidêmico hospitalar/abrigar em cadeia',
                clinicalMeaning: 'Mortalidade em massa de dezenas de filhotes no abrigo'
              }
            }
          ],
          learningTakeaways: [
            'A mioclonia rítmica involuntária que persiste durante o sono é a marca clínica registrada da fase neurológica da cinomose.',
            'Corticoides são contraindicados na fase virêmica devido à exacerbação da linfopenia e replicação viral.',
            'O isolamento estrito de pacientes com suspeita de cinomose é indispensável para evitar surtos institucionais.'
          ]
        }
      },
      {
        id: 'sec_infectious_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Patogênese & Manejo da Cinomose',
        exerciseId: 'ex_infectious_01'
      }
    ]
  }
];
