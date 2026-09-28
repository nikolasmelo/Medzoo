// src/learning/data/lessons/pathologyLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const PATHOLOGY_EXERCISES: Record<string, LearningExercise> = {
  ex_path_01: {
    id: 'ex_path_01',
    conceptId: 'concept_pathology_cell_injury_necrosis',
    type: 'multiple_choice',
    prompt: 'Durante a necrópsia de um ovino com histórico de emagrecimento progressivo, o linfonodo pré-escapular apresenta-se hipertrofiado e, ao corte transversal com bisturi, revela uma massa encapsulada esbranquiçada, seca, friável e laminada em anéis concêntricos (aspecto clássico de "casca de cebola" ou "queijo curado"). Qual o tipo de necrose tecidual e seu mecanismo fisiopatológico?',
    options: [
      {
        id: 'opt_1',
        text: 'Necrose Caseosa: induzida por infecção bacteriana crônica intracelular (Corynebacterium pseudotuberculosis / Linfadenite Caseosa), na qual macrófagos e neutrófilos lisados formam uma massa granular acelular amorfa rica em lipídios bacterianos que resiste à liquefação completa.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A Necrose Caseosa é a marca registrada de infecções por bactérias com parede celular rica em lipídios (Corynebacterium e Mycobacterium). Os tecidos perdem completamente sua arquitetura celular original e formam uma massa amorfa granular esbranquiçada e seca (caseosa), circundada por cápsula fibrosa e reação granulomatosa.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Necrose de Coagulação Isquêmica: preservação temporária dos contornos arquiteturais das células fantasmas por desnaturação proteica.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A necrose de coagulação é típica de infartos isquêmicos (rim, baço, miocárdio) onde a arquitetura tecidual básica é preservada por dias; no linfonodo caseoso há destruição arquitetural total em massa amorfa.',
        conceptualErrorCategory: 'coagulative_confusion'
      },
      {
        id: 'opt_3',
        text: 'Necrose de Liquefação Rápida: digestão enzimática purulenta hiperaguda por neutrófilos com formação de pus líquido fluido.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A necrose liquefativa gera pus líquido fluido (como em abscessos agudos por Staphylococcus ou no encéfalo); a lesão descrita é seca, friável e laminada (caseosa).',
        conceptualErrorCategory: 'liquefactive_confusion'
      },
      {
        id: 'opt_4',
        text: 'Esteatonecrose (Necrose Gordurosa) por saponificação de sais de cálcio no tecido adiposo.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A esteatonecrose ocorre no mesentério ou gordura peripancreática pela ação de lipases pancreáticas extravasadas em pancreatites agudas.',
        conceptualErrorCategory: 'fat_necrosis_misattribution'
      }
    ],
    pedagogicalExplanation: 'Os tipos de necrose diferenciam-se pelo balanço entre desnaturação proteica (coagulação) e digestão enzimática (liquefação). A necrose caseosa combina destruição celular maciça com lipídios micobacterianos/corinebacterianos que impedem a drenagem.',
    causalChain: {
      cause: 'Infecção por Corynebacterium pseudotuberculosis através de feridas de tosquia em ovinos',
      mechanism: 'Sobrevivência intracelular em macrófagos com liberação de fosfolipase D e endotoxinas citolíticas',
      effect: 'Morte celular maciça com acúmulo de debris celulares amorfos e insolúveis ricos em lipídios',
      clinicalMeaning: 'Linfadenite caseosa crônica ("mal do caroço"), perda zootécnica e condenação de carcaças'
    }
  },

  ex_path_02: {
    id: 'ex_path_02',
    conceptId: 'concept_pathology_circulatory_disturbances',
    type: 'multiple_choice',
    prompt: 'Na necrópsia de um cão que foi a óbito com ascite grave e histórico de cardiomiopatia dilatada (insuficiência cardíaca congestiva direita), o fígado apresenta-se marcadamente aumentado de volume (hepatomegalia), com bordas arredondadas e superfície de corte mosqueada, alternando pontos vermelho-escuros deprimidos com zonas marrom-amareladas salientes (aspecto clássico de "noz-moscada"). Qual é a cascata hemodinâmica subjacente?',
    options: [
      {
        id: 'opt_1',
        text: 'Congestão Passiva Crônica Hepática: a falência cardíaca direita gera hipertensão retrógrada na veia cava e veias centrolobulares, causando estase sanguínea e atrofia/necrose por hipóxia na região centrolobular (vermelha) com esteatose gordurosa nos hepatócitos periportais viáveis (amarelos).',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! O aspecto de "fígado em noz-moscada" é o clássico padrão da congestão passiva crônica: o sangue retido sob alta pressão dilata as veias centrolobulares e sinusoides centrais, asfixiando os hepatócitos da zona 3 (que morrem e geram áreas escuras de hemorragia/necrose). A zona 1 periférica ainda recebe oxigênio da tríade portal, mas sob hipóxia moderada acumula triglicerídeos (esteatose amarelada).',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Hiperemia ativa fisiológica induzida por digestão pós-prandial exuberante com vasodilatação arteriolar.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A hiperemia ativa é um processo arterial localizado e transitório (ex.: inflamação aguda ou digestão), sem estase venosa crônica, atrofia centrolobular ou ascite.',
        conceptualErrorCategory: 'active_hyperemia_confusion'
      },
      {
        id: 'opt_3',
        text: 'Trombose completa da artéria hepática gerando infarto isquêmico anêmico transmural de todo o lobo.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A trombose arterial causaria infarto anêmico localizado pálido cuneiforme com base na cápsula, e não padrão mosqueado difuso uniforme em noz-moscada.',
        conceptualErrorCategory: 'infarction_confusion'
      },
      {
        id: 'opt_4',
        text: 'Depósito hepático difuso de amiloide secundário a processo inflamatório crônico de pele.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A amiloidose produz fígado pálido, ceroso, amarelado e muito quebradiço, sem a estagnação venosa centrolobular em noz-moscada.',
        conceptualErrorCategory: 'amyloidosis_misattribution'
      }
    ],
    pedagogicalExplanation: 'A congestão passiva decorre do comprometimento da drenagem venosa. No fígado, a anatomia vascular zonada (centrolobular vs periportal) gera o clássico padrão reticulado em noz-moscada.',
    causalChain: {
      cause: 'Insuficiência cardíaca congestiva direita ou obstrução mecânica da veia cava caudal',
      mechanism: 'Aumento da pressão venosa central transmitida às veias hepáticas e sinusoides centrolobulares',
      effect: 'Necrose e atrofia dos hepatócitos da zona 3 associada a esteatose compensatória na zona 1',
      clinicalMeaning: 'Fígado em noz-moscada, hipertensão portal, ascite transudativa crônica e falência hepática congestiva'
    }
  },

  ex_path_03: {
    id: 'ex_path_03',
    conceptId: 'concept_pathology_necropsy_technique',
    type: 'multiple_choice',
    prompt: 'Durante a necrópsia sistemática de um cavalo Crioulo de 7 anos que veio a óbito após quadro de cólica refratária hiperaguda, o patologista inspeciona a artéria mesentérica cranial. Observa-se dilatação aneurismática da parede vascular, proliferação intimal rugosa e um grande trombo oclusivo aderido ao endotélio, entremeado por larvas avermelhadas de 1,5 a 2,0 cm. O cólon maior exibe segmento de 2 metros com coloração vermelho-escura / enegrecida, parede espessada e edemaciada e conteúdo sanguinolento com odor fétido. Qual o diagnóstico anatomopatológico e sua etiologia parasitária?',
    options: [
      {
        id: 'opt_1',
        text: 'Arterite e tromboembolismo da artéria mesentérica cranial por larvas L4 de Strongylus vulgaris, resultando em infarto hemorrágico transmural e gangrena isquêmica do cólon maior.',
        isCorrect: true,
        pedagogicalFeedback: 'Excelente! A clássica "cólica tromboembólica equina" ocorre quando larvas L4 de Strongylus vulgaris migram pela luz das artérias mesentéricas, provocando endarterite parasitária, lesão endotelial, formação de aneurisma vermótico e tromboembolismo. A oclusão arterial interrompe a perfusão do cólon, que sofre infarto hemorrágico por incompetência circulatória colateral, necrose gangrenosa e translocação bacteriana letal.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Vólvulo de intestino delgado primário com compressão extrínseca da veia porta sem qualquer envolvimento larval.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A presença do trombo arterial com larvas de nematódeo na artéria mesentérica cranial confirma inequivocamente a etiologia parasitária por Strongylus vulgaris.',
        conceptualErrorCategory: 'volvulus_confusion'
      },
      {
        id: 'opt_3',
        text: 'Intoxicação aguda por plantas cianogênicas provocando vasodilatação paralítica pura do intestino grosso.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O cianeto causa asfixia celular histotóxica sem trombos aneurismáticos em vasos mesentéricos nem infarto gangrenoso localizado de alças intestinais.',
        conceptualErrorCategory: 'toxic_misattribution'
      },
      {
        id: 'opt_4',
        text: 'Úlcera gástrica perfurada por Gasterophilus intestinalis com peritonite séptica difusa isolada.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. As larvas de Gasterophilus fixam-se na mucosa gástrica; o trombo parasitário na artéria mesentérica é a marca patognomônica da migração de Strongylus vulgaris.',
        conceptualErrorCategory: 'parasite_site_confusion'
      }
    ],
    pedagogicalExplanation: 'A necrópsia veterinária revela a história patológica gravada nos tecidos. O trombo arterial vermótico de Strongylus vulgaris é o clássico exemplo de infarto hemorrágico por oclusão vascular em medicina equina.',
    causalChain: {
      cause: 'Migração transmural de larvas de 4º estágio (L4) de Strongylus vulgaris na parede arterial',
      mechanism: 'Endarterite inflamatória, lesão endotelial com ativação da cascata de coagulação e trombose',
      effect: 'Isquemia aguda do leito vascular mesentérico com infarto hemorrágico e necrose da parede intestinal',
      clinicalMeaning: 'Cólica tromboembólica fulminante, choque endotoxêmico distributivo e óbito cadavérico'
    }
  }
};

export const PATHOLOGY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_pathology_cell_injury',
    moduleId: 'mod_pathology',
    title: 'Lesão Celular Reversível, Necrose & Apoptose',
    subtitle: 'Da queda do ATP à morte celular: compreendendo as assinaturas macro e microscópicas dos tecidos.',
    estimatedMinutes: 12,
    objectives: [
      'Diferenciar lesão celular reversível (degeneração) de irreversível (necrose e apoptose)',
      'Identificar os tipos canônicos de necrose tecidual: coagulação, liquefação, caseosa e gordurosa',
      'Reconhecer a necrose caseosa na Linfadenite Caseosa e tuberculose animal'
    ],
    concepts: ['concept_pathology_cell_injury_necrosis'],
    sections: [
      {
        id: 'sec_path_cell_01',
        type: 'theory',
        title: 'Fisiopatologia da Morte Celular: Necrose vs Apoptose',
        contentMarkdown: `### O Ponto de Não Retorno da Célula

Toda patologia começa no nível celular e molecular:
1. **Fase Reversível (Degeneração Hidrópica e Esteatose):** Hipóxia $\to$ falência da bomba $Na^+/K^+$ ATPase por falta de ATP $\to$ retenção intracelular de sódio e água $\to$ tumefação turva do citoplasma. Se o oxigênio for restaurado a tempo, a célula sobrevive.
2. **O Ponto de Não Retorno:** Influxo maciço de cálcio ($Ca^{2+}$) no citosol $\to$ ativação de fosfolipases, proteases e endonucleases lisossomais $\to$ ruptura irreversível das membranas mitocondriais e plasmática.

\`\`\`mermaid
flowchart TD
    A["Agente Agressor (Isquemia, Toxina, Bactéria)"] --> B["Falência Mitocondrial e Queda de ATP"]
    B --> C["Sobrecarga de Cálcio Citosólico Livre"]
    C --> D["Ativação Enzimática Catabólica: Lise de Membranas"]
    D --> E["NECROSE: Morte Celular Patológica"]
    
    E --> F["Necrose de Coagulação (Isquemia: Rim, Fígado, Miocárdio)"]
    E --> G["Necrose de Liquefação (SNC e Abscessos Purulentos)"]
    E --> H["Necrose Caseosa (Bactérias Intracelulares: Casca de Cebola)"]
    E --> I["Necrose Gordurosa / Saponificação (Pancreatite Aguda)"]
\`\`\`

---

### Tabela Diferencial Canônica dos Tipos de Necrose

| Tipo de Necrose | Causa Principal | Aspecto Macroscópico | Exemplo Veterinário |
| :--- | :--- | :--- | :--- |
| **Coagulação** | Isquemia arterial aguda | Área pálida, firme, contorno celular preservado na histologia | Infarto renal anêmico, infarto do miocárdio |
| **Liquefação** | Enzimas líticas de neutrófilos ou tecido rico em lipídios | Líquido viscoso cremoso (pus) ou cavidade cística | Malácia no cérebro, abscessos por *Staphylococcus* |
| **Caseosa** | Micobactérias / *Corynebacterium* | Massa seca, esbranquiçada friável, "queijo curado" | Linfadenite Caseosa em ovinos, Tuberculose bovina |
| **Gordurosa** | Liberação de lipases pancreáticas | Placas esbranquiçadas opacas ("gotas de vela") | Pancreatite necrosante em cães obesos |
| **Gangrenosa** | Necrose isquêmica + invasão por saprófitas / *Clostridium* | Tecido negro, friável, com gás fétido crepitante | Carbúnculo sintomático (*Clostridium chauvoei*) |
        `,
        causalChain: {
          cause: 'Sobrevivência intracelular de Corynebacterium pseudotuberculosis em macrófagos ovinos',
          mechanism: 'Lise contínua de células inflamatórias sem digestão enzimática fluida',
          effect: 'Formação de massa necrótica caseosa acelular granular laminada',
          clinicalMeaning: 'Linfadenite caseosa encapsulada crônica com destruição do parênquima linfonodal'
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
    title: 'Distúrbios Circulatórios & Hemodinâmicos em Órgãos',
    subtitle: 'Da estase venosa retrógrada ao infarto: lendo as lesões vasculares em órgãos vitais.',
    estimatedMinutes: 14,
    objectives: [
      'Diferenciar hiperemia ativa de congestão passiva crônica',
      'Compreender a fisiopatologia do fígado em "noz-moscada" na insuficiência cardíaca direita',
      'Correlacionar trombose arterial parasitária com infartos e cólica equina'
    ],
    concepts: ['concept_pathology_circulatory_disturbances'],
    sections: [
      {
        id: 'sec_path_circ_01',
        type: 'theory',
        title: 'Fisiopatologia dos Distúrbios Circulatórios Sistêmicos',
        contentMarkdown: `### Hemodinâmica da Estase e do Infarto

Os órgãos dependem de fluxo sanguíneo ininterrupto. Quando o circuito falha, lesões anatômicas características emergem:

\`\`\`mermaid
flowchart TD
    A["Falha Cardíaca Direita (CMD / Dirofilariose)"] --> B["Hipertensão na Veia Cava Caudal"]
    B --> C["Estase Sangüínea nas Veias Hepáticas e Centrolobulares"]
    C --> D["Hipóxia dos Hepatócitos da Zona 3 (Centrolobular)"]
    D --> E["Necrose Hemorrágica Centrolobular (Pontos Vermelhos Escuros)"]
    C --> F["Hepatócitos da Zona 1 Periportal Sofrem Hipóxia Moderada"]
    F --> G["Acúmulo de Triglicerídeos: Esteatose (Áreas Amareladas)"]
    E --> H["PADRÃO MOSQUEADO: FÍGADO EM NOZ-MOSCADA"]
    G --> H
\`\`\`

---

### Infarto Anêmico (Branco) vs Infarto Hemorrágico (Vermelho)

1. **Infarto Anêmico / Branco:**
   - Ocorre em **órgãos sólidos** com circulação arterial terminal única (ex.: **Rins, Coração, Baço**).
   - O trombo oclui a artéria terminal $\to$ a área privada de sangue sofre necrose de coagulação $\to$ como não há vasos colaterais suficientes, a área necrótica descolore e assume formato cuneiforme (em cunha ou triângulo com ápice voltado para o vaso ocluído e base voltada para a cápsula externa).
2. **Infarto Hemorrágico / Vermelho:**
   - Ocorre em **órgãos frouxos** ou com **dupla circulação** ou leitos venosos anastomóticos (ex.: **Pulmão, Intestino Delgado, Cólon**).
   - Ocorre extravasamento contínuo de sangue de vasos vizinhos para dentro do tecido necrótico, tornando o órgão arroxeado-escuro, edematoso e friável.
        `,
        causalChain: {
          cause: 'Insuficiência cardíaca congestiva crônica com hipertensão venosa retrógrada',
          mechanism: 'Congestão passiva dos sinusoides hepáticos com estase venosa centrolobular',
          effect: 'Necrose centrolobular associada à esteatose periportal com padrão reticulado',
          clinicalMeaning: 'Fígado em noz-moscada com insuficiência hepática congestiva e ascite'
        }
      },
      {
        id: 'sec_path_circ_02',
        type: 'exercise',
        title: 'Desafio Clínico: O Fígado em Noz-Moscada do Paciente Cardiopata',
        exerciseId: 'ex_path_02'
      },
      {
        id: 'sec_path_circ_03',
        type: 'exercise',
        title: 'Desafio Clínico: O Trombo Vermótico na Artéria Mesentérica do Cavalo',
        exerciseId: 'ex_path_03'
      }
    ]
  },

  {
    id: 'lesson_pathology_necropsy_bench',
    moduleId: 'mod_pathology',
    title: 'Técnica de Necrópsia & Reconhecimento de Lesões em Órgãos',
    subtitle: 'A mesa de necrópsia como tribunal da verdade: correlacionando lesões anatômicas com a causa mortis.',
    estimatedMinutes: 16,
    objectives: [
      'Executar a sequência metódica de abertura cadavérica e inspeção in situ',
      'Identificar peças anatomopatológicas e reconhecer lesões macroscópicas em órgãos vitais',
      'Elaborar diagnósticos anatomopatológicos e formular a causa mortis primária'
    ],
    concepts: ['concept_pathology_necropsy_technique', 'concept_pathology_circulatory_disturbances'],
    sections: [
      {
        id: 'sec_path_bench_01',
        type: 'theory',
        title: 'O Rito da Necrópsia Veterinária Sistemática',
        contentMarkdown: `### O Protocolo Canônico de Necrópsia

A necrópsia é o exame complementar supremo da medicina veterinária:
1. **Posicionamento e Ectoscopia:** Decúbito lateral direito (em ruminantes e equinos) ou decúbito dorsal (em caninos e felinos). Avaliação rigorosa de orifícios naturais, rigidez cadavérica (*rigor mortis*), hipóstase cadavérica (*livor mortis*) e estado nutricional.
2. **Abertura em Arco:** Dissecção da pele, desarticulação das cinturas escapular e pélvica, abertura do abdômen pela linha média e rebatimento da grelha costal para inspeção das cavidades peritoneal e pleural *in situ*.
3. **Inspeção e Coleta:** Exame minucioso da cor, tamanho, consistência, peso e superfície de corte de cada órgão antes da colheita de fragmentos em formol tamponado a 10% para histopatologia.
        `,
        causalChain: {
          cause: 'Necrópsia metódica e colheita correta de órgãos fixados em formol tamponado a 10%',
          mechanism: 'Preservação da citoarquitetura tecidual impedindo a autólise post-mortem',
          effect: 'Identificação inequívoca da lesão primária nos tecidos sob microscopia óptica',
          clinicalMeaning: 'Esclarecimento definitivo da causa mortis e proteção sanitária do restante do plantel'
        }
      },
      {
        id: 'sec_path_bench_02',
        type: 'lab',
        title: 'Laboratório Interativo: Mesa de Necrópsia & Diagnóstico Anatomopatológico (Necropsy Bench)',
        description: 'Assuma o bisturi na sala de necrópsia. Examine peças patológicas de coração, fígado, rins, pulmões e intestinos. Execute cortes transversais com o bisturi, observe a superfície de corte e selecione a lâmina histopatológica correspondente para desvendar a causa mortis de cada caso!',
        labType: 'pathology_necropsy_bench',
        labConfig: {
          targetScenario: 'Análise de Órgãos Cadavéricos'
        }
      }
    ]
  }
];
