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
        contentMarkdown: `# Aula Universitária: Lesão Celular, Necrose Tecidual & Apoptose

> 📖 Referência Canônica: McGavin, M. D.; Zachary, J. F. *Bases da Patologia em Veterinária*, 6ª ed. Elsevier, Cap. 1: Respostas Celulares e Teciduais à Lesão. Robbins, S. L.; Cotran, R. S. *Patologia: Bases Patológicas das Doenças*, 9ª ed. Elsevier, Cap. 1-2. Santos, R. L.; Alessi, A. C. *Patologia Veterinária*, 2ª ed. Roca.

### 1. Fisiopatologia Molecular: Da Queda do ATP ao Colapso da Membrana

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

---

### 3. Critérios de Diferenciação: Necrose vs. Apoptose

> 💡 Pérola Clínica / Residência: Em exames anatomopatológicos e provas de residência em Patologia Veterinária, lembre-se:
> • **Necrose** é sempre patológica, afeta grupos contíguos de células, causa edema e lise de membranas com extravasamento de enzimas intracelulares, provocando **reação inflamatória exuberante** nos tecidos vizinhos.
> • **Apoptose** é a morte celular programada (fisiológica ou patológica), afeta células isoladas, retrai a célula sem romper a membrana (formação de corpos apoptóticos fagocitados por macrófagos) e **NUNCA deflagra reação inflamatória**.

> ⚠️ Alerta Crítico / Risco Fatal: Na pancreatite aguda necro-hemorrágica de cães, a esteatonecrose consome avidamente o cálcio ionizado circulante pela reação de saponificação de ácidos graxos com sais de cálcio. Isso deflagra **hipocalcemia aguda severa (< 1.0 mmol/L de Ca²⁺ livre)**, levando o paciente a tremores, espasmos tetânicos, arritmias ventriculares e choque circulatório fulminante! Monitore o cálcio iônico a cada 12 horas.
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
        contentMarkdown: `# Aula Universitária: Distúrbios Circulatórios & Hemodinâmicos em Órgãos Vitais

> 📖 Referência Canônica: McGavin, M. D.; Zachary, J. F. *Bases da Patologia em Veterinária*, 6ª ed. Elsevier, Cap. 2: Distúrbios Vasculares e Trombose. Radostits, O. M. et al. *Clínica Veterinária: Um Tratado de Doenças*, 9ª ed. Guanabara Koogan.

### 1. Hemodinâmica da Estase Venosa & O Fígado em Noz-Moscada

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

---

### 3. A Cólica Tromboembólica Equina por Strongylus vulgaris

> 💡 Pérola Clínica / Residência: Em cavalos com quadro de cólica refratária com descompressão retal de fezes com odor cadavérico, lembre-se da patogenia do *Strongylus vulgaris*:
> As larvas L4 penetram a mucosa intestinal e migram pela camada íntima das artérias mesentéricas até a raiz da **artéria mesentérica cranial**, provocando endarterite parasitária severa, lesão endotelial e formação de **trombos vermóticos com dilatações aneurismáticas**. Fragmentos de fibrina e larvas desprendem-se, ocluindo vasos menores que nutrem o ceco e o cólon maior, culminando em **infarto hemorrágico transmural**, translocação bacteriana maciça de endotoxinas para a circulação e choque séptico.

> 🔬 Histopatologia & Macroscopia: Na necrópsia, a parede do cólon afetado apresentará espessura quadruplicada devido ao edema transmural, mucosa vermelho-escura desprendendo-se facilmente à raspagem e líquido peritoneal de coloração serossanguinolenta a achocolatada, com teor de proteína > 4.0 g/dL e lactato elevado.
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
        contentMarkdown: `# Aula Universitária: Técnica de Necrópsia Sistemática & Diagnóstico Post-Mortem

> 📖 Referência Canônica: Alessi, A. C.; Santos, R. L. *Patologia Veterinária*, 2ª ed. Roca, Cap. 26: Técnica de Necrópsia e Colheita de Amostras. King, J. M. et al. *The Necropsy Book*, 4ª ed. Cornell University.

### 1. O Rito Metódico da Necrópsia Veterinária

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

> ⚠️ Alerta Crítico / Biossegurança: Se um bovino for encontrado morto com meteorismo timpânico hiperagudo, ausência completa de rigidez cadavérica e sangue escuro incoagulável fluindo por narinas, boca e ânus, **NÃO ABRA O CADÁVER**. Trata-se de suspeita de Antrax (*Bacillus anthracis*). A abertura da carcaça induz a esporulação das bactérias pelo contato com o oxigênio do ar, contaminando a pastagem e o solo por décadas e gerando risco de morte humana imediata por antrax pulmonar/cutâneo. Realize esfregaço de sangue periférico da ponta de orelha!
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
