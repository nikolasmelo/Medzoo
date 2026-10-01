// src/learning/data/lessons/pathologyLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const PATHOLOGY_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_path_01',
    conceptId: 'concept_pathology_cell_injury_necrosis',
    type: 'multiple_choice',
    prompt: 'Durante a necrópsia de um ovino com histórico de emagrecimento progressivo, o linfonodo pré-escapular apresenta-se hipertrofiado e, ao corte transversal com bisturi, revela uma massa encapsulada esbranquiçada, seca, friável e laminada em anéis concêntricos (aspecto clássico de "casca de cebola" ou "queijo curado"). Qual o tipo de necrose tecidual e seu mecanismo fisiopatológico?',
    options: [
      {
        id: 'opt_1',
        text: 'Necrose Caseosa: induzida por infecção bacteriana crônica intracelular (Corynebacterium pseudotuberculosis / Linfadenite Caseosa), na qual macrófagos e neutrófilos lisados formam uma massa granular acelular amorfa rica em lipídios bacterianos que resiste à liquefação completa.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A Necrose Caseosa é a marca registrada de infecções por bactérias com parede celular rica em lipídios (Corynebacterium e Mycobacterium). Os tecidos perdem completamente sua arquitetura celular original e formam uma massa amorfa granular esbranquiçada e seca (caseosa), circundada por cápsula fibrosa e reação granulomatosa.'
      },
      {
        id: 'opt_2',
        text: 'Necrose de Coagulação Isquêmica: preservação temporária dos contornos arquiteturais das células fantasmas por desnaturação proteica.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A necrose de coagulação é típica de infartos isquêmicos (rim, baço, miocárdio) onde a arquitetura tecidual básica é preservada por dias; no linfonodo caseoso há destruição arquitetural total em massa amorfa.'
      },
      {
        id: 'opt_3',
        text: 'Necrose de Liquefação Rápida: digestão enzimática purulenta hiperaguda por neutrófilos com formação de pus líquido fluido.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A necrose liquefativa gera pus líquido fluido (como em abscessos agudos por Staphylococcus ou no encéfalo); a lesão descrita é seca, friável e laminada (caseosa).'
      },
      {
        id: 'opt_4',
        text: 'Esteatonecrose (Necrose Gordurosa) por saponificação de sais de cálcio no tecido adiposo.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A esteatonecrose ocorre no mesentério ou gordura peripancreática pela ação de lipases pancreáticas extravasadas em pancreatites agudas.'
      }
    ]
  },

  {
    id: 'ex_path_02',
    conceptId: 'concept_pathology_circulatory_disturbances',
    type: 'multiple_choice',
    prompt: 'Na necrópsia de um cão que foi a óbito com ascite grave e histórico de cardiomiopatia dilatada (insuficiência cardíaca congestiva direita), o fígado apresenta-se marcadamente aumentado de volume (hepatomegalia), com bordas arredondadas e superfície de corte mosqueada, alternando pontos vermelho-escuros deprimidos com zonas marrom-amareladas salientes (aspecto clássico de "noz-moscada"). Qual é a cascata hemodinâmica subjacente?',
    options: [
      {
        id: 'opt_1',
        text: 'Congestão Passiva Crônica Hepática: a falência cardíaca direita gera hipertensão retrógrada na veia cava e veias centrolobulares, causando estase sanguínea e atrofia/necrose por hipóxia na região centrolobular (vermelha) com esteatose gordurosa nos hepatócitos periportais viáveis (amarelos).',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! O aspecto de "fígado em noz-moscada" é o clássico padrão da congestão passiva crônica: o sangue retido sob alta pressão dilata as veias centrolobulares e sinusoides centrais, asfixiando os hepatócitos da zona 3 (que morrem e geram áreas escuras de hemorragia/necrose). A zona 1 periférica ainda recebe oxigênio da tríade portal, mas sob hipóxia moderada acumula triglicerídeos (esteatose amarelada).'
      },
      {
        id: 'opt_2',
        text: 'Hiperemia ativa fisiológica induzida por digestão pós-prandial exuberante com vasodilatação arteriolar.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A hiperemia ativa é um processo arterial localizado e transitório (ex.: inflamação aguda ou digestão), sem estase venosa crônica, atrofia centrolobular ou ascite.'
      },
      {
        id: 'opt_3',
        text: 'Trombose completa da artéria hepática gerando infarto isquêmico anêmico transmural de todo o lobo.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A trombose arterial causaria infarto anêmico localizado pálido cuneiforme com base na cápsula, e não padrão mosqueado difuso uniforme em noz-moscada.'
      },
      {
        id: 'opt_4',
        text: 'Depósito hepático difuso de amiloide secundário a processo inflamatório crônico de pele.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A amiloidose produz fígado pálido, ceroso, amarelado e muito quebradiço, sem a estagnação venosa centrolobular em noz-moscada.'
      }
    ]
  },

  {
    id: 'ex_path_03',
    conceptId: 'concept_pathology_necropsy_technique',
    type: 'multiple_choice',
    prompt: 'Durante a necrópsia sistemática de um cavalo Crioulo de 7 anos que veio a óbito após quadro de cólica refratária hiperaguda, o patologista inspeciona a artéria mesentérica cranial. Observa-se dilatação aneurismática da parede vascular, proliferação intimal rugosa e um grande trombo oclusivo aderido ao endotélio, entremeado por larvas avermelhadas de 1,5 a 2,0 cm. O cólon maior exibe segmento de 2 metros com coloração vermelho-escura / enegrecida, parede espessada e edemaciada e conteúdo sanguinolento com odor fétido. Qual o diagnóstico anatomopatológico e sua etiologia parasitária?',
    options: [
      {
        id: 'opt_1',
        text: 'Arterite e tromboembolismo da artéria mesentérica cranial por larvas L4 de Strongylus vulgaris, resultando em infarto hemorrágico transmural e gangrena isquêmica do cólon maior.',
        isCorrect: true,
        pedagogicalFeedback: 'Excelente! A clássica "cólica tromboembólica equina" ocorre quando larvas L4 de Strongylus vulgaris migram pela luz das artérias mesentéricas, provocando endarterite parasitária, lesão endotelial, formação de aneurisma vermótico e tromboembolismo. A oclusão arterial interrompe a perfusão do cólon, que sofre infarto hemorrágico por incompetência circulatória colateral, necrose gangrenosa e translocação bacteriana letal.'
      },
      {
        id: 'opt_2',
        text: 'Vólvulo de intestino delgado primário com compressão extrínseca da veia porta sem qualquer envolvimento larval.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A presença do trombo arterial com larvas de nematódeo na artéria mesentérica cranial confirma inequivocamente a etiologia parasitária por Strongylus vulgaris.'
      },
      {
        id: 'opt_3',
        text: 'Intoxicação aguda por plantas cianogênicas provocando vasodilatação paralítica pura do intestino grosso.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O cianeto causa asfixia celular histotóxica sem trombos aneurismáticos em vasos mesentéricos nem infarto gangrenoso localizado de alças intestinais.'
      },
      {
        id: 'opt_4',
        text: 'Úlcera gástrica perfurada por Gasterophilus intestinalis com peritonite séptica difusa isolada.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. As larvas de Gasterophilus fixam-se na mucosa gástrica; o trombo parasitário na artéria mesentérica é a marca patognomônica da migração de Strongylus vulgaris.'
      }
    ]
  },

  {
    id: 'ex_path_04',
    conceptId: 'concept_pathology_inflammation_repair',
    type: 'multiple_choice',
    prompt: 'Em um cão com peritonite séptica aguda após deiscência de anastomose entérica, a citologia do líquido peritoneal revela neutrófilos degenerados fagocitando bactérias em meio a malhas de fibrina. Em contrapartida, na lesão granulomatosa crônica da tuberculose bovina (Mycobacterium bovis), o infiltrado é composto por macrófagos ativados (células epitelioides), células gigantes multinucleadas de Langhans e deposição periférica de colágeno. Qual é a cascata de mediadores e a dinâmica celular que governa a transição entre o influxo agudo neutrofílico e a inflamação granulomatosa crônica com fibrose tecidual?',
    options: [
      {
        id: 'opt_4_1',
        text: 'O influxo neutrofílico agudo é orquestrado por histamina, leucotrieno B4 (LTB4) e quimiocinas (CXCL8/IL-8) com extravasamento de fibrinogênio; a persistência de antígenos intracelulares indigeríveis recruta linfócitos Th1 que secretam IFN-gama, ativando macrófagos M1 (que se fundem em células gigantes de Langhans), e macrófagos M2 que secretam TGF-beta e PDGF estimulando fibroblastos a depositarem colágeno cicatricial',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A inflamação aguda depende da resposta vascular rápida e quimiotaxia neutrofílica por LTB4, C5a e IL-8. Quando o agente lesivo não é depurado (como bactérias intracelulares com parede lipídica), a imunidade adaptativa Th1 é ativada: o IFN-gama transforma monócitos em macrófagos epitelioides ativados e células gigantes de Langhans (núcleos em ferradura). Subsequentemente, a via de ativação alternativa (macrófagos M2) secreta TGF-beta e PDGF, que recrutam miofibroblastos e induzem fibrose tecidual cicatricial.'
      },
      {
        id: 'opt_4_2',
        text: 'A inflamação crônica granulomatosa é mediada exclusivamente por histamina e heparina secretadas por mastócitos dérmicos sem qualquer participação de linfócitos T',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A histamina e heparina são mediadores da fase aguda e de reações anafiláticas imediatas de tipo I. O granuloma é uma reação imune celular crônica orquestrada por linfócitos T e macrófagos.'
      },
      {
        id: 'opt_4_3',
        text: 'Os neutrófilos se transformam espontaneamente em células gigantes de Langhans quando expostos a temperaturas acima de 39°C',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Células gigantes de Langhans se originam da fusão de macrófagos (linhagem monocítica), não de neutrófilos, estimulados por IFN-gama.'
      },
      {
        id: 'opt_4_4',
        text: 'O TGF-beta destrói os fibroblastos e impede a síntese de colágeno, mantendo a ferida cirúrgica em permanente liquefação purulenta',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O TGF-beta é o mais potente indutor profibrótico do organismo, estimulando ativamente a produção de colágeno e matriz extracelular pelos fibroblastos no reparo tecidual.'
      }
    ]
  },

  {
    id: 'ex_path_05',
    conceptId: 'concept_pathology_oncology_neoplasms',
    type: 'multiple_choice',
    prompt: 'Na biópsia excisional de um nódulo cutâneo ulcerado de 4 cm no membro pélvico de um Boxer de 8 anos, o laudo histopatológico descreve: proliferação infiltrativa na derme profunda e hipoderme de células redondas pleomórficas com grânulos citoplasmáticos metacromáticos evidenciados por Azul de Toluidina, presença de 9 figuras de mitose por 10 campos de grande aumento (CGA / 2,37 mm²), células multinucleadas atípicas e invasão neoplásica em vasos linfáticos peritumorais. Segundo os critérios prognósticos de Kiupel e Patnaik para Mastocitoma Canino, qual é a classificação histopatológica, o potencial biológico e a conduta oncológica indicada?',
    options: [
      {
        id: 'opt_5_1',
        text: 'Mastocitoma de Alto Grau (segundo Kiupel) / Grau III (segundo Patnaik), com alto potencial metastático linfonodal e visceral, exigindo estadiamento sistêmico completo (linfonodos regionais, ultrassom abdominal de baço/fígado e pesquisa de mutação do gene c-KIT), margens cirúrgicas tridimensionais amplas e quimioterapia adjuvante com inibidores de tirosina quinase (Toceranib / Masitinib) ou lomustina',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Pelos critérios de Kiupel (2011), a presença de >= 7 figuras de mitose em 10 CGA, ou >= 3 células multinucleadas, ou cariomegalia marcada define inequivocamente um Mastocitoma de Alto Grau (sobrevida mediana < 4 meses sem terapia adjuvante). A invasão linfática e acometimento hipodérmico profundo correspondem ao Grau III de Patnaik. O estadiamento de linfonodos e órgãos abdominais com aspirado guiado é mandatório, associado à pesquisa de mutação no éxon 11 do proto-oncogene c-KIT para direcionar inibidores de tirosina quinase.'
      },
      {
        id: 'opt_5_2',
        text: 'Mastocitoma de Baixo Grau benigno sem risco metastático, sem necessidade de estadiamento ou ampliação de margens cirúrgicas',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Com 9 mitoses por 10 CGA e invasão linfática vascular, trata-se de um tumor altamente agressivo com prognóstico reservado e letalidade elevada se não tratado agressivamente.'
      },
      {
        id: 'opt_5_3',
        text: 'Carcinoma de células escamosas metastático que deve ser tratado unicamente com antibióticos de amplo espectro por 10 dias',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A presença de grânulos metacromáticos com Azul de Toluidina é a assinatura diagnóstica patognomônica de mastócitos neoplásicos (grânulos de histamina e heparina), confirmando mastocitoma e não carcinoma.'
      },
      {
        id: 'opt_5_4',
        text: 'Fibroma benigno originado de fibroblastos maduros que regride espontaneamente com suplementação de vitamina C',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Trata-se de uma neoplasia de células redondas maligna de linhagem hematopoiética (mastócitos), sem relação histogenética com fibromas fusocelulares benignos.'
      }
    ]
  }
];

export const PATHOLOGY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_pathology_cell_injury',
    moduleId: 'mod_pathology',
    title: 'Patologia Geral: Lesão Celular Reversível, Necrose & Apoptose',
    shortDescription: 'Fisiopatologia do dano celular: depleção de ATP, influxo de cálcio, degeneração hidrópica e esteatose vs tipos de necrose.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_pathology_cell_injury_necrosis'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_path_cell_01',
        type: 'theory',
        title: 'Fisiopatologia da Morte Celular: Necrose vs Apoptose',
        contentMarkdown: `### 1. Fisiopatologia Molecular: Da Queda do ATP ao Colapso da Membrana

Todas as afecções clínicas em Medicina Veterinária — desde uma isquemia tromboembólica em um equino até uma intoxicação exógena ou choque hipovolêmico em pequenos animais — iniciam-se no microcosmo celular e molecular:

1. **Fase Reversível (Degeneração Hidrópica & Esteatose):**
   - **Mecanismo Bioquímico:** A hipóxia suprime a fosforilação oxidativa mitocondrial → depleção rápida de trifosfato de adenosina (ATP).
   - **Consequência Iônica:** Sem ATP suficiente, ocorre a paralisia imediata da bomba **Na⁺/K⁺ ATPase** da membrana citoplasmática.
   - **Efeito Citológico:** O sódio entra passivamente na célula acompanhado osmoticamente por água, enquanto o potássio difunde-se para o interstício. Ocorre tumefação celular difusa (*degeneração hidrópica*), dilatação das cisternas do retículo endoplasmático rugoso (RER) e desprendimento de ribossomos, reduzindo a síntese proteica. Se o oxigênio for prontamente restabelecido, os mecanismos celulares restauram o equilíbrio.

2. **O Ponto de Não Retorno (Transição para a Morte Irreversível):**
   - **Gatilho Crítico:** Perda da homeostase do cálcio com abertura do **Poro de Transição de Permeabilidade Mitocondrial (MPTP)** e influxo citosólico maciço de **Ca²⁺ livre** a partir do meio extracelular e dos estoques do retículo sarcoplasmático.
   - **Ativação Enzimática Catabólica:** O cálcio em concentração patológica atua como cofator de ativação de 4 famílias de enzimas letais:
     - **Fosfolipases:** Degradação hidrolítica dos fosfolipídios de membrana, provocando lise da membrana plasmática e perda irreversível do gradiente eletroquímico.
     - **Proteases Neutras (Calpaínas e Caspases):** Clivagem das proteínas estruturais do citoesqueleto celular (tubulina, actina, espectrina).
     - **Endonucleases Nucleares:** Fragmentação do DNA genômico e cromatina em padrões histológicos de **picnose** (condensação escura e retração do núcleo), **cariorrexe** (fragmentação nuclear) e **cariólise** (dissolução da basofilia nuclear por desoxirribonucleases).
     - **ATPases:** Esgotamento terminal das moléculas residuais de ATP.

\`\`\`mermaid
flowchart TD
    A["Agente Agressor (Isquemia, Toxina, Choque, Bactéria)"] --> B["Falência Mitocondrial & Esgotamento Rápido de ATP"]
    B --> C["Paralisia da Bomba Na+/K+ ATPase: Degeneração Hidrópica"]
    C --> D["Abertura do Poro MPTP: Sobrecarga Maciça de Ca2+ Citosólico"]
    D --> E["Ativação de Fosfolipases, Proteases e Endonucleases Líticas"]
    E --> F["Ruptura Irreversível de Membranas e Lise Celular"]
    F --> G["NECROSE PATOLÓGICA (Com Reação Inflamatória Estromal)"]
    G --> H["Necrose de Coagulação (Isquemia em Rins, Fígado e Miocárdio)"]
    G --> I["Necrose de Liquefação (Abscessos Purulentos e Encéfalo)"]
    G --> J["Necrose Caseosa (Bactérias Intracelulares: Corynebacterium/TB)"]
    G --> K["Necrose Gordurosa / Esteatonecrose (Pancreatite Aguda Canina)"]
\`\`\`

---

### 2. Tabela Diferencial Canônica das Necroses em Medicina Veterinária

| Tipo de Necrose | Fisiopatologia Molecular | Aspecto Macroscópico | Aspecto Histopatológico (HE) | Espécies & Exemplos Canônicos |
| :--- | :--- | :--- | :--- | :--- |
| **Coagulação** | Desnaturação proteica térmica/ácida superando a proteólise enzimática | Área pálida, firme, delimitada, preservando a forma anatômica básica do órgão | "Células fantasmas" (arquitetura tecidual básica mantida por dias, perda de núcleos) | Infarto renal anêmico em cães, infarto do miocárdio em ruminantes |
| **Liquefação** | Digestão enzimática rápida por hidrolases de neutrófilos ou lipídios do SNC | Líquido viscoso, cremoso, purulento ou cavidade cística cavitária | Perda total da citoarquitetura, debris celulares amorfos e neutrófilos degenerados | Abscessos por *Staphylococcus aureus*, Poliencefalomalácia em bovinos |
| **Caseosa** | Destruição de macrófagos por lipídios da parede celular bacteriana resistente | Massa seca, esbranquiçada/amarelada, friável, aspecto de "queijo curado" em anéis concêntricos | Massa granular amorfa eosinofílica acelular circundada por células epitelioides, células gigantes e fibrose | Linfadenite Caseosa (*C. pseudotuberculosis*) em ovinos; Tuberculose bovina (*M. bovis*) |
| **Gordurosa (Esteatonecrose)** | Liberação de lipases pancreáticas e esterases que saponificam triglicerídeos | Placas opacas, esbranquiçadas, firmes, aspecto de "gotas de vela" no mesentério | Adipócitos sem núcleos preenchidos por material granular basofílico amorfo (sais de cálcio) | Pancreatite necrosante aguda em cães obesos; traumatismo perirrenal em vacas |
| **Gangrenosa** | Necrose isquêmica primária seguida de dessecação (seca) ou invasão por *Clostridium* (úmida/gasosa) | Tecido enegrecido, putrefato, crepitante à palpação, com odor fétido sui generis | Necrose de coagulação associada a liquefação bacteriana, bolhas de gás e hemólise maciça | Carbúnculo Sintomático (*Clostridium chauvoei*) em bovinos; ergotismo em pastagens |

> 📖 Referência Canônica: Bases da Patologia em Veterinária (McGavin & Zachary, 6ª ed., Elsevier) & Patologia Veterinária (Santos & Alessi, 2ª ed., Roca).

> 💡 Pérola Clínica / Residência: Necrose vs. Apoptose: A necrose é sempre patológica, acomete grupos de células contíguas com lise de membrana e SEMPRE desencadeia resposta inflamatória exuberante nos tecidos adjacentes. A apoptose é programada, retrai a célula isolada formando corpos apoptóticos sem romper a membrana e NUNCA deflagra reação inflamatória!`
      },
      {
        id: 'sec_path_cell_lab',
        type: 'lab',
        title: 'Prontuário & Simulação Patológica: Borrego Dorper (Linfadenite Caseosa)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Diagnóstico Anatomopatológico de Lesão de Linfonodo em Ovino de Cabanha',
          patient: {
            name: 'Borrego 42',
            species: 'Ovino',
            breed: 'Dorper',
            age: '10 meses',
            weightKg: 42.0,
            habitatOrEnvironment: 'Aprisco semi-intensivo com histórico de tosquia mecânica recente'
          },
          vitals: {
            heartRateBpm: 84,
            respiratoryRateRpm: 24,
            temperatureCelsius: 39.0,
            mucousMembranes: 'Normocoradas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Animal apresentando aumento de volume nodular firme e indolor de 6 cm de diâmetro na região pré-escapular esquerda após tosquia. Sem sinais de febre ou dispneia, mas com queda no ganho de peso nos últimos 45 dias.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Aspirado com Agulha Fina e Análise Macroscópica da Lesão',
              findings: 'Colheita de material pastoso esbranquiçado e avaliação anatomopatológica da peça cirúrgica.',
              abnormalValues: [
                { parameter: 'Aspecto Macroscópico da Massa', value: 'Massa seca, friável em anéis concêntricos ("casca de cebola")', reference: 'Linfonodo normal homogêneo', status: 'critical' },
                { parameter: 'Citologia com Gram', value: 'Bacilos pleomórficos Gram-positivos intracelulares em macrófagos', reference: 'Ausente', status: 'critical' },
                { parameter: 'Cultura Microbiológica', value: 'Isolamento de Corynebacterium pseudotuberculosis', reference: 'Estéril', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com a confirmação de Linfadenite Caseosa ("mal do caroço"), qual a conduta sanitária e cirúrgica padrão para evitar contaminação do rebanho?',
          decisionOptions: [
            {
              id: 'opt_dec_path1_1',
              label: 'Excisão cirúrgica completa do linfonodo encapsulado em local isolado com incineração do material ou drenagem com cauterização química (solução de iodo a 10%) em ambiente fechado desinfetável',
              description: 'Remover o foco infeccioso sem romper a cápsula no pasto ou nas baias.',
              isOptimal: true,
              consequenceText: 'Conduta exemplar em sanidade de pequenos ruminantes! A ruptura acidental do abscesso caseoso no aprisco libera bilhões de bactérias que sobrevivem por meses no solo e madeira, contaminando os demais ovinos através de microtraumatismos na tosquia.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Isolamento e remoção cirúrgica com cápsula íntegra e descarte biológico seguro',
                mechanism: 'Bloqueio da disseminação bacteriana ambiental de Corynebacterium pseudotuberculosis',
                effect: 'Prevenção de novas infecções no rebanho e cura do animal acometido',
                clinicalMeaning: 'Erradicação do foco da enfermidade e preservação da carcaça do plantel'
              }
            },
            {
              id: 'opt_dec_path1_2',
              label: 'Drenar o linfonodo na baia coletiva com bisturi e lavar o chão com água sem desinfetante',
              description: 'Romper a massa purulenta caseosa dentro do aprisco comunitário.',
              isOptimal: false,
              consequenceText: 'Erro sanitário gravíssimo! A drenagem direta no aprisco espalha o material caseoso viável por todas as baias, infectando todo o lote de animais jovens durante a tosquia e manejo de rotina.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Drenagem de necrose caseosa infecciosa em ambiente coletivo',
                mechanism: 'Contaminação em massa de cochos, cercas e esteios com C. pseudotuberculosis',
                effect: 'Surtos de linfadenite caseosa em múltiplos animais do rebanho',
                clinicalMeaning: 'Prejuízo zootécnico massivo e desvalorização do rebanho de elite'
              }
            },
            {
              id: 'opt_dec_path1_3',
              label: 'Administrar antibiótico oral por 3 dias sem mexer no nódulo',
              description: 'Tentar curar a massa caseosa espessa apenas com antimicrobiano sistêmico.',
              isOptimal: false,
              consequenceText: 'Inadequado e ineficaz! A massa necrótica caseosa é completamente avascular e circundada por uma cápsula fibrosa espessa; antimicrobianos sistêmicos não atingem concentrações terapêuticas no interior do núcleo caseoso.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Uso de antibiótico isolado para lesão caseosa avascular encapsulada',
                mechanism: 'Incapacidade de penetração do fármaco no interior acelular da massa',
                effect: 'Persistência bacteriana crônica com fistulização espontânea futura',
                clinicalMeaning: 'Falha terapêutica completa e contaminação inadvertida do ambiente'
              }
            }
          ],
          learningTakeaways: [
            'A necrose caseosa combina destruição celular maciça com lipídios bacterianos que impedem a liquefação fluida.',
            'O aspecto em casca de cebola decorre de episódios sucessivos de necrose e encapsulamento fibroso.',
            'Lesões caseosas maduras são avasculares e exigem resolução mecânica ou cirúrgica protegida.'
          ]
        }
      },
      {
        id: 'sec_path_cell_02',
        type: 'exercise',
        title: 'Desafio Clínico: O "Queijo Curado" do Linfonodo Ovino',
        exerciseId: 'ex_path_01'
      }
    ]
  },

  {
    id: 'lesson_pathology_circulatory',
    moduleId: 'mod_pathology',
    title: 'Patologia Geral: Distúrbios Circulatórios & Hemodinâmicos em Órgãos',
    shortDescription: 'Hiperemia ativa vs congestão passiva crônica (fígado em noz-moscada), infartos isquêmicos vs hemorrágicos e trombose.',
    estimatedMinutes: 14,
    order: 2,
    concepts: ['concept_pathology_circulatory_disturbances'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_path_circ_01',
        type: 'theory',
        title: 'Fisiopatologia dos Distúrbios Circulatórios Sistêmicos',
        contentMarkdown: `### 1. Hemodinâmica da Estase Venosa & O Fígado em Noz-Moscada

A perfusão adequada de órgãos depende do equilíbrio estrito entre o débito cardíaco, a resistência arteriolar e o retorno venoso desimpedido:

1. **Hiperemia Ativa vs. Congestão Passiva:**
   - **Hiperemia Ativa:** Processo arterial ativo com vasodilatação arteriolar simpática ou química (histamina, bradicinina, óxido nítrico). Ocorre em tecidos em alta atividade metabólica (músculo em exercício, mucosa gástrica pós-prandial) ou nas fases iniciais da inflamação aguda. O tecido fica vermelho vivo, quente e turgente.
   - **Congestão Passiva:** Processo venoso passivo decorrente de redução do fluxo de drenagem venosa. Pode ser local (torção gástrica, hérnia estrangulada) ou sistêmica (falência ventricular cardíaca direita ou esquerda). O tecido adquire coloração cianótica (arroxeada/azulada) pelo acúmulo de sangue desoxigenado rico em desoxi-hemoglobina.

2. **A Fisiopatologia Anatômica do Fígado em Noz-Moscada (*Nutmeg Liver*):**
   - Na insuficiência cardíaca congestiva direita (secundária a cardiomiopatia dilatada, dirofilariose ou estenose pulmonar), a pressão venosa central na veia cava caudal eleva-se substancialmente.
   - Essa hipertensão retrógrada transmite-se para as veias hepáticas e sinusoides centrolobulares (Zona 3 do ácino de Rappaport).
   - Como os hepatócitos da **Zona 3 (centrolobular)** já são os mais distantes da tríade portal (menor teor basal de O₂), a estase venosa crônica desencadeia hipóxia isquêmica severa, atrofia das traves celulares e necrose hemorrágica dos hepatócitos centrais (gerando pontos deprimidos vermelho-escuros).
   - Concomitantemente, os hepatócitos da **Zona 1 (periportal)**, situados adjacentes aos ramos da artéria hepática na tríade portal, recebem aporte mínimo de O₂ suficiente para evitar a necrose, mas insuficiente para manter a oxidação lipídica mitocondrial completa, sofrendo acúmulo de triglicerídeos e **esteatose gordurosa** (gerando áreas amareladas salientes).
   - O contraste morfológico alternado entre as zonas de necrose hemorrágica escura e esteatose amarelada produz o aspecto clássico patognomônico de **fígado em noz-moscada**.

\`\`\`mermaid
flowchart TD
    A["Insuficiência Cardíaca Congestiva Direita (CMD / Dirofilariose)"] --> B["Hipertensão Retrógrada na Veia Cava Caudal e Veias Hepáticas"]
    B --> C["Estase Sangüínea Severa nos Sinusoides da Zona 3 Centrolobular"]
    C --> D["Anóxia Isquêmica Extrema: Necrose Hemorrágica Centrolobular (Vermelha)"]
    B --> E["Hipóxia Intermediária na Zona 1 Periportal"]
    E --> F["Sobrecarga Lipídica Intracelular: Esteatose Reversível (Amarela)"]
    D --> G["PADRÃO RETICULADO ANATOMOPATOLÓGICO: FÍGADO EM NOZ-MOSCADA"]
    F --> G
    G --> H["Hipertensão Portal Secundária, Ascite Transudativa & Óbito"]
\`\`\`

---

### 2. Tabela Diferencial: Infarto Anêmico (Branco) vs. Infarto Hemorrágico (Vermelho)

| Parâmetro Diagnóstico | Infarto Anêmico (Branco / Isquêmico) | Infarto Hemorrágico (Vermelho) |
| :--- | :--- | :--- |
| **Arquitetura Vascular do Órgão** | Órgãos sólidos com circulação arterial terminal única sem anastomoses colaterais | Órgãos com dupla circulação (pulmão com artéria pulmonar e brônquica) ou tecidos frouxos esponjosos com ricas redes anastomóticas |
| **Órgãos Alvo Principais** | Rins, Coração (miocárdio), Baço | Pulmões, Alças de Intestino Delgado, Cólon maior, Fígado |
| **Aspecto Macroscópico** | Área triangular/cuneiforme pálida, branco-acinzentada, firme, bem delimitada por halo inflamatório hiperêmico | Área tumefeita, vermelho-escura a enegrecida, friável, com abundante extravasamento sanguíneo |
| **Histopatologia Típica** | Necrose de coagulação pura com preservação temporária dos contornos celulares ("células fantasmas") e perda de coloração nuclear | Infiltração maciça de eritrócitos entremeados por necrose tecidual e liquefação |
| **Exemplo Clínico Canônico** | Tromboembolismo da artéria renal por endocardiose mitral em cães; infarto esplênico na peste suína | Cólica tromboembólica em equinos por *Strongylus vulgaris*; torção de lobo pulmonar em cães |

> 📖 Referência Canônica: Bases da Patologia em Veterinária (McGavin & Zachary, 6ª ed., Elsevier) & Clínica Veterinária: Um Tratado de Doenças (Radostits et al., 9ª ed.).`
      },
      {
        id: 'sec_path_circ_02',
        type: 'exercise',
        title: 'Desafio Clínico: O Fígado em Noz-Moscada do Paciente Cardiopata',
        exerciseId: 'ex_path_02'
      }
    ]
  },

  {
    id: 'lesson_pathology_inflammation_repair',
    moduleId: 'mod_pathology',
    title: 'Patologia Geral: Inflamação Aguda vs. Crônica, Mediadores & Reparo',
    shortDescription: 'Cinética de neutrófilos, mediadores químicos (LTB4, histamina, TNF), granulomas epitelioides e reparo por fibrose.',
    estimatedMinutes: 14,
    order: 3,
    concepts: ['concept_pathology_inflammation_repair'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_path_inflam_01',
        type: 'theory',
        title: 'Cinética Vascular, Recrutamento Leucocitário & O Granuloma',
        contentMarkdown: `### 1. A Resposta Inflamatória Aguda: Eventos Vasculares e Celulares

A inflamação é a resposta protetora primordial do tecido conjuntivo vascularizado contra agentes agressores (trauma, microrganismos patogênicos, substâncias químicas e necrose):

1. **Alterações Hemodinâmicas Iniciais:**
   - **Vasoconstrição Reflexa Transitória:** Dura segundos, mediada por reflexo neurogênico simpático e endotelina.
   - **Vasodilatação Arteriolar Persistente:** Mediada precocemente por **histamina** (mastócitos) e **óxido nítrico** (endotélio), resultando em hiperemia ativa (rubor e calor).
   - **Aumento da Permeabilidade Vascular:** Contração das células endoteliais pós-capilares com abertura de fendas intercelulares, permitindo o extravasamento de plasma rico em proteínas (exsudato inflamatório rico em fibrinogênio, gerando edema e tumor).

2. **A Cascata de Migração dos Leucócitos (Extravasamento):**
   - **Marginação e Rolamento:** A estase circulatória aproxima os neutrófilos da parede vascular. As **Selectinas** (L-selectina nos leucócitos, E- e P-selectina no endotélio ativado por TNF-alfa e IL-1) ligam-se a carboidratos sialilados com baixa afinidade, fazendo o neutrófilo rolar pela superfície endotelial.
   - **Adesão Firme:** Quimiocinas endoteliais ativam as **Integrinas** do neutrófilo (LFA-1 e Mac-1), que se fixam com altíssima afinidade às imunoglobulinas endoteliais **ICAM-1** e **VCAM-1**.
   - **Diapedese (Transmigração):** Mediada por **PECAM-1 (CD31)** nas junções interendoteliais. O neutrófilo emite pseudópodes e atravessa a membrana basal com auxílio de colagenases.
   - **Quimiotaxia Direcionada:** Migração ao longo de um gradiente químico em direção ao foco lesional, impulsionada por **Leucotrieno B4 (LTB4)**, fração **C5a do complemento**, peptídeos bacterianos formilados (fMLP) e quimiocinas como **CXCL8 (IL-8)**.

\`\`\`mermaid
flowchart TD
    A["Agente Agressor / Injúria Tecidual"] --> B["Liberação de Histamina, LTB4 e TNF-alfa"]
    B --> C["Vasodilatação & Aumento da Permeabilidade Vascular (Exsudato)"]
    C --> D["Rolamento via Selectinas -> Adesão Firme via Integrinas (ICAM-1)"]
    D --> E["Diapedese Transendotelial & Quimiotaxia (LTB4 / C5a / IL-8)"]
    E --> F["Fagocitose Neutrofílica Aguda (Degeneração Purulenta)"]
    F --> G{"Agente Eliminado com Sucesso?"}
    G -- Sim --> H["Resolução Completa ou Reparo por Tecido de Granulação / Fibrose"]
    G -- Não (Persistência) --> I["Transição para Inflamação Crônica Granulomatosa"]
    I --> J["Infiltração de Linfócitos Th1 (IFN-gama) + Macrófagos Epitelioides"]
    J --> K["Células Gigantes Multinucleadas de Langhans & Cápsula Fibrótica"]
\`\`\`

---

### 2. A Inflamação Crônica Granulomatosa

Quando o agente infeccioso é resistente à degradação enzimática intracelular (ex.: *Mycobacterium bovis*, *Corynebacterium pseudotuberculosis*, *Histoplasma capsulatum*) ou diante de corpos estranhos inertes (fios de sutura não absorvíveis, espinhos de plantas):
* Ocorre transição da resposta inata neutrofílica para a resposta imune celular adaptativa mediada por **Linfócitos Th1**.
* Os linfócitos T sensibilizados liberam **Interferon-gama (IFN-γ)** de forma continuada.
* O IFN-γ ativa os macrófagos, que se transformam em **Células Epitelioides** (células poligonais com citoplasma eosinofílico abundante, limites imprecisos e núcleos vesiculosos ovais semelhantes a células epiteliais).
* Pela ação prolongada de citocinas, múltiplos macrófagos fundem suas membranas plasmáticas, originando **Células Gigantes Multinucleadas**:
  * **Células de Langhans:** Núcleos arranjados em ferradura ou semicírculo na periferia celular (típicas da Tuberculose).
  * **Células de Corpo Estranho:** Núcleos distribuídos aleatoriamente e desordenadamente por todo o citoplasma.

---

### 3. Fases do Reparo Tecidual e Cicatrização

1. **Inflamação:** Coágulo de fibrina e depuração de debris celulares por neutrófilos e macrófagos M1.
2. **Tecido de Granulação (Proliferação):**
   - **Angiogênese Exuberante:** Formação de novos capilares guiada pelo Fator de Crescimento Endotelial Vascular (**VEGF**) e FGF.
   - **Fibroplasia:** Migração e proliferação de fibroblastos sob estímulo de **PDGF** e **TGF-β**, sintetizando proteoglicanos e colágeno tipo III frouxo.
3. **Remodelação e Maturação:**
   - O colágeno tipo III imaturo é clivado e substituído por **Colágeno tipo I** maduro e resistente por ação de Metaloproteinases da Matriz (**MMPs** dependentes de Zinco).
   - Os miofibroblastos contraem a ferida cirúrgica, aproximando as bordas e formando a cicatriz fibrosa definitiva.

> 📖 Referência Canônica: Bases da Patologia em Veterinária (McGavin & Zachary, 6ª ed., Elsevier) & Patologia: Bases Patológicas das Doenças (Robbins & Cotran, 9ª ed.).`
      },
      {
        id: 'sec_path_inflam_lab',
        type: 'lab',
        title: 'Prontuário & Simulação Patológica: Rex (Boxer com Peritonite e Granuloma Cirúrgico)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Diagnóstico Diferencial entre Peritonite Fibrinopurulenta Aguda e Granuloma de Corpo Estranho',
          patient: {
            name: 'Rex',
            species: 'Canino',
            breed: 'Boxer',
            age: '5 anos',
            weightKg: 28.0,
            habitatOrEnvironment: 'Pós-operatório de enterectomia há 6 dias'
          },
          vitals: {
            heartRateBpm: 155,
            respiratoryRateRpm: 38,
            temperatureCelsius: 39.8,
            mucousMembranes: 'Congestas / Hiperêmicas (SIRS)',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'Cão submetido a enterectomia por corpo estranho há 6 dias começou há 24h a apresentar dor abdominal intensa à palpação, febre, letargia profunda e líquido livre peritoneal visualizado em ultrassom FAST abdominal.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Abdominocentese e Citologia do Fluido Peritoneal',
              findings: 'Avaliação de fluido turvo purulento evidenciando deiscência e translocação.',
              abnormalValues: [
                { parameter: 'Aspecto do Fluido Peritoneal', value: 'Turvo, exsudato purulento com flocos de fibrina', reference: 'Límpido, citrino incolor', status: 'critical' },
                { parameter: 'Proteína Total no Fluido', value: '4.8 g/dL', reference: '< 2.5 g/dL', status: 'critical' },
                { parameter: 'Contagem de Células Nucleadas', value: '48.000 /uL (Neutrófilos degenerados)', reference: '< 3.000 /uL', status: 'critical' },
                { parameter: 'Glicose no Fluido vs Sangue', value: 'Glicose peritoneal 22 mg/dL (Sangue: 110 mg/dL - Diferença > 20)', reference: 'Diferença < 20 mg/dL', status: 'critical' },
                { parameter: 'Presença Bacteriana Intracelular', value: 'Bastonetes e cocos fagocitados por neutrófilos', reference: 'Ausente', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com gradiente de glicose diagnóstica para peritonite séptica ativa e fibrina exuberante, qual a conduta cirúrgica emergencial mandatória?',
          decisionOptions: [
            {
              id: 'opt_dec_path4_1',
              label: 'Laparotomia exploratória de emergência imediata + Identificação da deiscência da anastomose + Lavagem peritoneal profusa com ringer lactato morno e drenagem tubular aberta/fechada',
              description: 'Intervir cirurgicamente para conter o foco séptico antes do colapso por choque distributivo.',
              isOptimal: true,
              consequenceText: 'Conduta salvadora exemplar! A presença de bactérias fagocitadas por neutrófilos degenerados e a diferença de glicose > 20 mg/dL entre o sangue e o fluido peritoneal confirmam peritonite séptica por deiscência. O reparo cirúrgico imediato e a lavagem peritoneal são a única forma de evitar o choque séptico fatal.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Desbridamento cirúrgico da deiscência e remoção do exsudato séptico',
                mechanism: 'Cessação do influxo contínuo de bactérias entéricas e endotoxinas no peritônio',
                effect: 'Redução da tempestade de citocinas inflamatórias e restauração da perfusão microvascular',
                clinicalMeaning: 'Reversão da SIRS e sobrevida do paciente crítico'
              }
            },
            {
              id: 'opt_dec_path4_2',
              label: 'Administrar anti-inflamatório esteroidal (Dexametasona) e aguardar 48 horas para cicatrização natural',
              description: 'Tentar suprimir o exsudato inflamatório com corticoide em dose alta sem reoperar.',
              isOptimal: false,
              consequenceText: 'Erro letal absoluto! O corticoide anula a fagocitose neutrofílica, inibe a fibroplasia regenerativa e potencializa a translocação de bactérias entéricas, precipitando choque séptico fulminante e óbito em poucas horas.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de corticoide em sepse peritoneal não controlada',
                mechanism: 'Supressão da imunidade inata e da barreira biológica de fibrina',
                effect: 'Disseminação bacteriana hematogênica descontrolada e falência de múltiplos órgãos',
                clinicalMeaning: 'Evolução fulminante para choque refratário e morte'
              }
            },
            {
              id: 'opt_dec_path4_3',
              label: 'Apenas prescrever antibiótico oral e liberar o cão para casa',
              description: 'Manejo ambulatorial sem internação.',
              isOptimal: false,
              consequenceText: 'Contraindicado! Peritonite séptica com líquido purulento livre é uma emergência cirúrgica grau 1 de UTI. O cão irá a óbito em domicílio.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Negligência de foco cirúrgico abdominal ativo',
                mechanism: 'Absorção contínua de endotoxinas LPS pela membrana peritoneal altamente vascularizada',
                effect: 'Vasodilatação sistêmica refratária com colapso do débito cardíaco',
                clinicalMeaning: 'Óbito domiciliar por choque distributivo séptico'
              }
            }
          ],
          learningTakeaways: [
            'A inflamação aguda peritoneal caracteriza-se por exsudato rico em neutrófilos degenerados e fibrina.',
            'A diferença de glicose > 20 mg/dL entre sangue e líquido peritoneal é critério diagnóstico padrão-ouro para sepse abdominal.',
            'O reparo cirúrgico precoce e lavagem peritoneal são cruciais para permitir o início do reparo tecidual fibroblástico.'
          ]
        }
      },
      {
        id: 'sec_path_inflam_02',
        type: 'exercise',
        title: 'Desafio Clínico: Dinâmica Celular da Inflamação Aguda vs. Crônica',
        exerciseId: 'ex_path_04'
      }
    ]
  },

  {
    id: 'lesson_pathology_oncology_neoplasms',
    moduleId: 'mod_pathology',
    title: 'Patologia Geral: Oncologia Geral, Neoplasias & Metástases',
    shortDescription: 'Neoplasias benignas vs malignas, critérios de anaplasia celular, mastocitoma canino (Kiupel/Patnaik) e metástases.',
    estimatedMinutes: 16,
    order: 4,
    concepts: ['concept_pathology_oncology_neoplasms'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_path_onco_01',
        type: 'theory',
        title: 'Nomenclatura Oncológica, Critérios de Malignidade & Mastocitomas',
        contentMarkdown: `### 1. Nomenclatura Oncológica Veterinária & Histogênese

As neoplasias são proliferações clonais anormais de células cujo crescimento excede e não é coordenado com o dos tecidos normais:

* **Neoplasias Epiteliais:**
  * Benignas: Adenoma (glandular), Papiloma (epitélio de revestimento estratificado).
  * Malignas: **Carcinoma** (origem em epitélio de revestimento), **Adenocarcinoma** (origem em epitélio glandular).
* **Neoplasias Mesenquimais (Tecido conjuntivo, muscular, ósseo e vascular):**
  * Benignas: Sufixo *-oma* precedido do tecido (Fibroma, Lipoma, Osteoma, Hemangioma, Leiomioma).
  * Malignas: **Sarcoma** (Fibrossarcoma, Osteossarcoma, Hemangiossarcoma, Leiomiossarcoma).
* **Neoplasias de Células Redondas (Hematopoiéticas / Imunes):**
  * Mastocitoma, Linfoma (Linfossarcoma), Histiocitoma / Sarcoma Histiocítico, Plasmocitoma / Mieloma Múltiplo e Tumor Venéreo Transmissível (TVT).

---

### 2. Tabela de Critérios de Diferenciação: Benigno vs. Maligno

| Parâmetro Patológico | Neoplasia Benigna | Neoplasia Maligna |
| :--- | :--- | :--- |
| **Diferenciação Celular** | Bem diferenciada, muito semelhante ao tecido de origem maduro | De moderada a indiferenciada (**anaplasia celular**) |
| **Pleomorfismo Celular & Nuclear** | Células e núcleos uniformes em tamanho e forma | **Pleomorfismo acentuado** (anisocitose e anisocariose marcadas) |
| **Relação Núcleo:Citoplasma (N:C)** | Baixa (1:4 a 1:6) | **Elevada (1:1 a 1:2)** por aumento de cromatina |
| **Figuras de Mitose** | Raras ou ausentes, invariavelmente mitoses bipolares normais | **Frequentes**, incluindo **mitoses atípicas** (tripolares, anormais) |
| **Padrão de Crescimento** | Expansivo, lento, encapsulado por estroma fibroso delimitado | **Infiltrativo, invasivo, destrutivo**, sem limites nítidos |
| **Invasão Vascular & Linfática** | Ausente | Frequentemente presente em vasos sanguíneos e linfáticos |
| **Metástases à Distância** | **NUNCA produz metástase** | **Capacidade de metastatizar** via linfática ou hematógena |

\`\`\`mermaid
flowchart TD
    A["Célula Neoplásica Inicial com Mutações Somáticas Acumuladas"] --> B["Proliferação Descontrolada & Perda de Inibição por Contato"]
    B --> C["Secreção de Angiogênese Tumoral (VEGF / bFGF)"]
    C --> D["Desprendimento Celular: Perda de Caderinas-E"]
    D --> E["Degradação da Matriz Extracelular por Metaloproteinases (MMP-2 e MMP-9)"]
    E --> F["Intravasamento em Capilares Linfáticos e Sanguíneos"]
    F --> G["Sobrevivência em Circulação (Embolia Tumoral com Plaquetas)"]
    G --> H["Extravasamento e Colonização em Órgão-Alvo (Linfonodo / Pulmão / Fígado)"]
    H --> I["METÁSTASE DISTANTE CONSUMADA"]
\`\`\`

---

### 3. O Paradigma do Mastocitoma Canino: Sistemas de Patnaik vs. Kiupel

O Mastocitoma é a neoplasia cutânea maligna mais frequente no cão:
* **Origem Celular:** Mastócitos dérmicos ricos em grânulos citoplasmáticos de histamina, heparina e proteases que exibem **metacromasia** (coram-se em púrpura/violeta com Azul de Toluidina).
* **Sistemas de Gradação Histopatológica:**
  * **Sistema de Patnaik (1984 - 3 Graus):**
    * *Grau I (Bem diferenciado):* Células confinadas à derme, sem atipias marcadas, mitoses raras. Bom prognóstico.
    * *Grau II (Intermediário):* Invasão da derme profunda e tecido subcutâneo, atipias nucleares moderadas. Comportamento biológico imprevisível.
    * *Grau III (Pouco diferenciado):* Invasão hipodérmica e muscular, pleomorfismo severo, alta taxa de mitoses, ulceração e metástases frequentes.
  * **Sistema de 2 Níveis de Kiupel (2011 - Padrão Moderno):**
    * Cria uma divisão binária objetiva para eliminar a incerteza do Grau II de Patnaik:
    * **Alto Grau (High Grade):** Presença de pelo menos **um** dos seguintes critérios:
      1. Pelo menos **7 figuras de mitose** em 10 Campos de Grande Aumento (CGA);
      2. Pelo menos **3 células multinucleadas** (>= 3 núcleos) em 10 CGA;
      3. Pelo menos **3 núcleos atípicos bizarros** em 10 CGA;
      4. **Cariomegalia** em >= 10% das células tumorais.
    * *Sobrevida:* Baixo Grau apresenta mediana de sobrevida superior a 2 anos; Alto Grau apresenta mediana inferior a 4 meses sem terapia adjuvante agressiva!

> 📖 Referência Canônica: Withrow and MacEwen's Small Animal Clinical Oncology (Vail, Thamm & Liptak, 6ª ed., Elsevier) & Veterinary Pathology (Slauson & Cooper, 4ª ed.).

> 💡 Pérola Clínica / Oncologia: Fenômeno de Darier no Mastocitoma: A palpação vigorosa ou aspiração por agulha fina (PAAF) de um mastocitoma pode desencadear a degranulação massiva de histamina, provocando eritema local, edema urticariforme agudo, hipotensão sistêmica e ulceração gástrica secundária severa (via receptores H2 em células parietais). Sempre pré-medique o paciente com anti-histamínicos (Difenidramina) e bloqueadores H2/IBP (Omeprazol) antes de biópsias ou cirurgias de mastocitoma!`
      },
      {
        id: 'sec_path_onco_lab',
        type: 'lab',
        title: 'Prontuário & Simulação Oncológica: Thor (Boxer com Mastocitoma Recidivante)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Conduta Cirúrgica e Estadiamento de Mastocitoma de Alto Grau',
          patient: {
            name: 'Thor',
            species: 'Canino',
            breed: 'Boxer',
            age: '8 anos',
            weightKg: 32.0,
            habitatOrEnvironment: 'Residência urbana com quintal'
          },
          vitals: {
            heartRateBpm: 110,
            respiratoryRateRpm: 24,
            temperatureCelsius: 38.8,
            mucousMembranes: 'Normocoradas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Cão apresentando nódulo subcutâneo de 4.5 cm de diâmetro na face lateral da coxa esquerda, ulcerado e aderido a planos profundos, com aumento marcado do linfonodo poplíteo ipsilateral. O tutor relata episódios intermitentes de vômito e fezes escuras pastosas (melena).',
          exams: [
            {
              category: 'laboratorial',
              title: 'Histopatologia, PAAF de Linfonodo e Painel Molecular c-KIT',
              findings: 'Avaliação oncológica completa demonstrando alto grau de malignidade e metástase regional.',
              abnormalValues: [
                { parameter: 'Índice Mitótico Histológico', value: '11 mitoses por 10 CGA', reference: '< 7 mitoses por 10 CGA', status: 'critical' },
                { parameter: 'Classificação de Kiupel', value: 'ALTO GRAU (High-Grade)', reference: 'Baixo Grau', status: 'critical' },
                { parameter: 'Citologia Linfonodo Poplíteo', value: 'Metástase de mastócitos atípicos agrupados', reference: 'Linfonodo reativo normal', status: 'critical' },
                { parameter: 'Mutação do Gene c-KIT (Éxon 11)', value: 'POSITIVO (Duplicação interna)', reference: 'Negativo / Selvagem', status: 'critical' },
                { parameter: 'Endoscopia / Sangramento', value: 'Úlcera gástrica focal induzida por histamina', reference: 'Mucosa gástrica íntegra', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com mastocitoma de Alto Grau (Kiupel), metástase confirmada em linfonodo sentinela e mutação positiva de c-KIT, qual é o protocolo de tratamento integrado de escolha?',
          decisionOptions: [
            {
              id: 'opt_dec_path5_1',
              label: 'Ressecção cirúrgica ampla tridimensional com margem lateral de 2-3 cm e um plano fascial profundo limpo + Linfadenectomia do poplíteo + Terapia-alvo com inibidor de tirosina quinase (Toceranib / Masitinib) associado a Omeprazol e Difenidramina',
              description: 'Combinar cirurgia oncológica de margens limpas, excisão do linfonodo metastático e inibição molecular específica de KIT.',
              isOptimal: true,
              consequenceText: 'Conduta oncológica padrão-ouro internacional! Em mastocitomas de alto grau com metástase linfonodal e mutação ativadora de c-KIT, a cirurgia com margens tridimensionais associada à linfadenectomia sentinela reduz a carga tumoral, e o inibidor de tirosina quinase (Toceranib) atua diretamente bloqueando a sinalização mitogênica aberrante do receptor mutado.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Ressecção com margens cirúrgicas limpas e bloqueio molecular com Toceranib',
                mechanism: 'Extirpação do tumor primário e inibição seletiva da fosforilação desregulada de c-KIT',
                effect: 'Interrupção da proliferação clonal de mastócitos e controle de metástases viscerais',
                clinicalMeaning: 'Prolongamento substancial da sobrevida livre de doença com alta qualidade de vida'
              }
            },
            {
              id: 'opt_dec_path5_2',
              label: 'Remover apenas o nódulo com margem estreita de 2 milímetros sem retirar o linfonodo e liberar sem medicação',
              description: 'Excisão marginal simples de nódulo sem margens de segurança.',
              isOptimal: false,
              consequenceText: 'Erro oncológico gravíssimo! Margens estreitas em mastocitoma de alto grau deixam células neoplásicas infiltradas nos tecidos profundos, resultando em recidiva local agressiva em menos de 30 dias e disseminação visceral fatal pelo linfonodo não extirpado.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Cirurgia marginal incompleta em neoplasia infiltrativa de alto grau',
                mechanism: 'Persistência de ninhos de mastócitos neoplásicos nas bordas cirúrgicas e linfonodo',
                effect: 'Recidiva tumoral fulminante e metástase hematógena para baço e fígado',
                clinicalMeaning: 'Evolução rápida para mastocitose sistêmica fatal em poucas semanas'
              }
            },
            {
              id: 'opt_dec_path5_3',
              label: 'Prescrever apenas antibiótico e pomada cicatrizante na úlcera da pele',
              description: 'Tratar a lesão neoplásica ulcerada como dermatite bacteriana simples.',
              isOptimal: false,
              consequenceText: 'Erro diagnóstico e clínico imperdoável! A ulceração cutânea decorre da necrose tumoral e liberação de enzimas de mastócitos; pomadas não tratam neoplasias e retardam o tratamento oncológico curativo.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Tratamento de neoplasia maligna agressiva como afecção dermatológica benigna',
                mechanism: 'Atraso crítico na intervenção oncológica com progressão do estadiamento',
                effect: 'Disseminação metastática irreversível para linfonodos e medula óssea',
                clinicalMeaning: 'Perda irreparável da janela cirúrgica com desfecho letal'
              }
            }
          ],
          learningTakeaways: [
            'O sistema de Kiupel classifica mastocitomas em Baixo ou Alto Grau com base em critérios objetivos de mitoses e atipias.',
            'O estadiamento do linfonodo regional sentinela é obrigatório em qualquer mastocitoma de moderado a alto grau.',
            'A detecção da mutação de c-KIT direciona com alta eficácia o uso de inibidores de tirosina quinase (Toceranib).'
          ]
        }
      },
      {
        id: 'sec_path_onco_02',
        type: 'exercise',
        title: 'Desafio Clínico: Mastocitoma Canino & Critérios de Malignidade',
        exerciseId: 'ex_path_05'
      }
    ]
  },

  {
    id: 'lesson_pathology_necropsy_bench',
    moduleId: 'mod_pathology',
    title: 'Patologia Geral: Técnica de Necrópsia Sistemática & Diagnóstico Cadavérico',
    shortDescription: 'Inspeção in situ, decúbitos padronizados por espécie, fixação correta em formol 10% e lesões em órgãos vitais.',
    estimatedMinutes: 16,
    order: 5,
    concepts: ['concept_pathology_necropsy_technique', 'concept_pathology_circulatory_disturbances'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_path_bench_01',
        type: 'theory',
        title: 'O Rito da Necrópsia Veterinária Sistemática',
        contentMarkdown: `### 1. O Rito Metódico da Necrópsia Veterinária

A necrópsia não é um ato de mutilação, mas o exame anatomopatológico complementar supremo da Medicina Veterinária. O erro em não realizar o exame de forma sistemática impede o esclarecimento da *causa mortis* e pode acarretar prejuízos sanitários catastróficos a plantéis de produção ou riscos zoonóticos a seres humanos:

1. **Decúbito Padronizado por Espécie:**
   - **Ruminantes e Equinos:** O cadáver é posicionado invariavelmente em **decúbito lateral direito**, de modo que o lado esquerdo fique exposto para o patologista. Isso é indispensável em ruminantes para que a massa volúmica gigantesca do rúmen não oculte as demais vísceras abdominais e torácicas durante a abertura.
   - **Caninos, Felinos e Suínos:** O posicionamento canônico é em **decúbito dorsal**, permitindo acesso bilateral uniforme às articulações escapulares, pélvicas e cavidades torácica e peritoneal.
   - **Aves:** Decúbito dorsal com fixação das asas e desarticulação das articulações coxofemorais.

2. **Ectoscopia & Fenômenos Cadavéricos:**
   - Avaliação meticulosa da condição corporal (caquexia vs. obesidade), pelos/pelagem, orifícios naturais (sangramentos sem coagulação podem indicar Carbúnculo Hemático por *Bacillus anthracis* — contraindicação absoluta de abertura cadavérica!).
   - Diferenciação entre lesões ante-mortem e alterações post-mortem:
     - **Rigor mortis (rigidez cadavérica):** Contração muscular pós-morte por depleção total de ATP, impedindo o desacoplamento de actina e miosina. Inicia-se na cabeça (mandíbula) e progride caudadalmente, desfazendo-se posteriormente pela autólise enzimática bacteriana.
     - **Livor mortis (hipóstase cadavérica):** Congestão passiva gravitacional do sangue nos tecidos situados na porção mais baixa do cadáver.
     - **Pseudomelanose:** Coloração esverdeada na parede abdominal causada pela combinação do sulfeto de hidrogênio ($H_2S$) bacteriano com o ferro da hemoglobina livre, formando sulfeto de ferro ($FeS$).

3. **Regra Áurea de Fixação para Histopatologia:**
   - **Fixador Canônico:** Formol tamponado com fosfatos a 10% (pH neutro 7.0 a 7.2) para evitar a formação de pigmento de formalina (grânulos birrefringentes escuros de hematoidina ácida que mascaram a histologia).
   - **Proporção Obrigatória:** **10 partes de fixador para 1 parte de tecido (10:1)**. O fragmento deve ter no máximo 0,5 cm de espessura para assegurar penetração tecidual completa (a formalina difunde cerca de 1 mm por hora).
   - Coletar sempre a **área de transição** entre o tecido lesionado e o parênquima saudável viável.

> 📖 Referência Canônica: Patologia Veterinária (Santos & Alessi, 2ª ed., Roca) & The Necropsy Book (King et al., 4ª ed., Cornell University).

> ⚠️ Alerta Crítico / Biossegurança: Se um bovino for encontrado morto com meteorismo timpânico hiperagudo, ausência completa de rigidez cadavérica e sangue escuro incoagulável fluindo por narinas, boca e ânus, **NÃO ABRA O CADÁVER**. Trata-se de suspeita de Antrax (*Bacillus anthracis*). A abertura da carcaça induz a esporulação das bactérias pelo contato com o oxigênio do ar, contaminando a pastagem e o solo por décadas e gerando risco de morte humana imediata por antrax pulmonar/cutâneo. Realize esfregaço de sangue periférico da ponta de orelha!`
      },
      {
        id: 'sec_path_bench_lab',
        type: 'lab',
        title: 'Prontuário & Mesa de Necrópsia: Cavalo Crioulo (Cólica Tromboembólica)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Diagnóstico da Causa Mortis na Mesa de Necrópsia Equina',
          patient: {
            name: 'Pangaré',
            species: 'Equino',
            breed: 'Crioulo',
            age: '7 anos',
            weightKg: 440,
            habitatOrEnvironment: 'Pasto nativo sem histórico de vermifugação há 2 anos'
          },
          vitals: {
            heartRateBpm: 0,
            respiratoryRateRpm: 0,
            temperatureCelsius: 36.0,
            mucousMembranes: 'Cianóticas com halo endotoxêmico escuro',
            capillaryRefillTimeSec: 0
          },
          anamnesis: 'Animal veio a óbito na baia após 14 horas de cólica hiperaguda refratária a analgésicos e fluidoterapia. O proprietário solicitou necrópsia sistemática para esclarecer a causa mortis e investigar possível envenenamento criminoso alegado por vizinhos.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Exame Necroscópico in situ e Dissecação Vascular',
              findings: 'Achados anatomopatológicos conclusivos de infarto hemorrágico por arterite vermótica.',
              abnormalValues: [
                { parameter: 'Líquido Peritoneal', value: '4 litros de fluido turvo vermelho-escuro (achocolatado) com fibrina', reference: '< 200 mL citrino', status: 'critical' },
                { parameter: 'Artéria Mesentérica Cranial', value: 'Dilatação aneurismática com trombo oclusivo e larvas de Strongylus vulgaris', reference: 'Lúmen arterial livre e liso', status: 'critical' },
                { parameter: 'Segmento Cólico Afetado', value: 'Infarto transmural gangrenoso de 2 metros de cólon maior', reference: 'Parede rosada elástica', status: 'critical' },
                { parameter: 'Investigação Toxicológica', value: 'Negativa para pesticidas organofosforados e estricnina', reference: 'Negativo', status: 'normal' }
              ]
            }
          ],
          challengePrompt: 'Com base nas evidências anatomopatológicas in situ, qual é o laudo da causa mortis primária para entrega ao proprietário?',
          decisionOptions: [
            {
              id: 'opt_dec_path3_1',
              label: 'Causa mortis: Choque endotoxêmico distributivo secundário a infarto hemorrágico e necrose gangrenosa transmural de cólon maior, decorrente de tromboembolismo parasitário da artéria mesentérica cranial por Strongylus vulgaris',
              description: 'Formular o laudo anatomopatológico definitivo relacionando a lesão primária à falência sistêmica.',
              isOptimal: true,
              consequenceText: 'Laudo necroscópico irretocável e fundamentado! A necrópsia sistemática esclarece inequivocamente que a morte decorreu de verminose arterial negligenciada (Strongylus vulgaris), descartando a suspeita de envenenamento e orientando a adoção urgente de vermifugação estratégica no haras.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Laudo conclusivo fundamentado na dissecação da artéria mesentérica cranial',
                mechanism: 'Demonstração física do trombo vermótico e do infarto transmural da víscera',
                effect: 'Elucidação legal da causa mortis e orientação do manejo sanitário do haras',
                clinicalMeaning: 'Fechamento ético e científico do caso e proteção do restante dos cavalos'
              }
            },
            {
              id: 'opt_dec_path3_2',
              label: 'Laudo inconclusivo atribuindo a morte a parada cardiorrespiratória por causa desconhecida',
              description: 'Emitir laudo vago sem correlacionar as lesões vasculares encontradas.',
              isOptimal: false,
              consequenceText: 'Inaceitável! Toda morte culmina em parada cardiorrespiratória; o papel do patologista é identificar a doença de base e a causa mortis primária que deflagrou o colapso, que no caso estava claramente evidente na artéria mesentérica.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Emissão de laudo omisso e superficial',
                mechanism: 'Falta de correlação entre as alterações macroscópicas e a fisiopatologia clínica',
                effect: 'Insegurança do proprietário e perpetuação do manejo sanitário falho no haras',
                clinicalMeaning: 'Risco de novos óbitos por cólica vermótica no mesmo plantel'
              }
            },
            {
              id: 'opt_dec_path3_3',
              label: 'Confirmar envenenamento criminoso por veneno de rato sem qualquer prova toxicológica',
              description: 'Atender às alegações leigas sem suporte científico na mesa de necrópsia.',
              isOptimal: false,
              consequenceText: 'Erro ético e pericial gravíssimo! O patologista veterinário responde legalmente por seus laudos. Afirmar envenenamento com lesões patognomônicas de Strongylus vulgaris e toxicologia negativa constitui falta ética grave.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Conclusão pericial falsa e desprovida de embasamento técnico',
                mechanism: 'Desconsideração dos achados patognomônicos de tromboembolismo parasitário',
                effect: 'Instauração indevida de litígio judicial entre vizinhos',
                clinicalMeaning: 'Infração ética profissional perante o Conselho de Medicina Veterinária'
              }
            }
          ],
          learningTakeaways: [
            'A necrópsia sistemática de equinos em decúbito lateral direito permite exposição desimpedida das vísceras abdominais.',
            'O trombo vermótico com dilatação aneurismática da artéria mesentérica é marca patognomônica de S. vulgaris.',
            'O laudo anatomopatológico deve correlacionar com clareza a lesão primária, o mecanismo patogênico e a causa mortis.'
          ]
        }
      },
      {
        id: 'sec_path_bench_02',
        type: 'exercise',
        title: 'Desafio Clínico: O Trombo Vermótico na Artéria Mesentérica do Cavalo',
        exerciseId: 'ex_path_03'
      }
    ]
  }
];
