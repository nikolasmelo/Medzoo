// src/learning/data/lessons/nutritionLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const NUTRITION_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_nutri_01',
    conceptId: 'concept_bmr_mer_allometry',
    type: 'multiple_choice',
    prompt: 'Por que um Beija-flor (5 g) consome proporcionalmente muito mais energia por grama de peso corporal do que uma Anta (250 kg)?',
    options: [
      {
        id: 'opt_1',
        text: 'Porque animais menores têm maior relação superfície-volume e taxa metabólica de Kleiber exponencialmente mais alta.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! De acordo com a Lei Alométrica de Kleiber (BMR = K x P^0,75), animais de menor massa corpórea dissipam calor rapidamente pela sua grande área de superfície em relação ao volume, necessitando de uma taxa metabólica basal muito superior por grama de tecido.'
      },
      {
        id: 'opt_2',
        text: 'Porque beija-flores têm digestão exclusivamente anaeróbica no papo.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Aves realizam respiração aeróbica com taxa oxidativa altíssima; a digestão anaeróbica ocorre em câmaras de fermentação de herbívoros.'
      },
      {
        id: 'opt_3',
        text: 'Porque grandes herbívoros não possuem taxa metabólica basal mensurável.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Todos os seres vivos endotérmicos e ectotérmicos possuem BMR; nos grandes herbívoros, o valor absoluto em calorias é grande, mas a taxa por grama de tecido é muito menor.'
      },
      {
        id: 'opt_4',
        text: 'Apenas devido ao tipo de dieta rica em açúcares simples do néctar.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A dieta rica em carboidratos sustenta essa demanda, mas a causa primária é a física alométrica de perda de calor e consumo de O2.'
      }
    ]
  },

  {
    id: 'ex_nutri_02',
    conceptId: 'concept_cap_ratio_mbd',
    type: 'multiple_choice',
    prompt: 'Um filhote de Jabuti-piranga (Chelonoidis carbonarius) de 400 g é alimentado apenas com alface americana, tomate e sementes. O tutor nota que o casco está "mole como borracha" e os membros anteriores estão arqueados. Qual mecanismo patológico explica este quadro?',
    options: [
      {
        id: 'opt_1',
        text: 'Hiperparatireoidismo Nutricional Secundário (MBD) induzido por dieta com relação Ca:P invertida (< 1:1) e carência de cálcio assimilável.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! O alface e o tomate são pobres em cálcio e desbalanceados. Quando o cálcio plasmático cai, as paratireoides secretam PTH em excesso, reabsorvendo o cálcio dos ossos e da carapaça para manter o coração batendo, resultando em osteodistrofia fibrosa (casco de borracha).'
      },
      {
        id: 'opt_2',
        text: 'Deficiência primária de vitamina C causando escorbuto do plastrão.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Répteis sintetizam ácido ascórbico nos rins ou fígado; a carapaça amolecida com arqueamento ósseo é a apresentação clássica da Doença Osteometabólica por falta de cálcio e vitamina D3/UVB.'
      },
      {
        id: 'opt_3',
        text: 'Intoxicação por excesso de fósforo inorgânico levando à calcificação metastática do casco.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A calcificação metastática tornaria os tecidos rígidos e mineralizados (como rins e artérias), e não um casco desmineralizado e flexível.'
      },
      {
        id: 'opt_4',
        text: 'Desidratação celular aguda decorrente de baixa umidade no terrário.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A desidratação causa afundamento de olhos e ressecamento tegumentar, mas não perda da matriz mineral óssea.'
      }
    ]
  },

  {
    id: 'ex_nutri_03',
    conceptId: 'concept_wild_diet_formulation',
    type: 'multiple_choice',
    prompt: 'Uma Arara-canindé (Ara ararauna) de 10 anos mantida em cativeiro com dieta composta de 90% sementes de girassol apresenta bico hipertrofiado com descamação, abdômen abaulado e letargia. O exame ultrassonográfico revela fígado hiperecogênico aumentado. Qual é o diagnóstico nutricional?',
    options: [
      {
        id: 'opt_1',
        text: 'Esteatose Hepática (Lipidose Hepática) crônica decorrente da alta densidade lipídica (50% de gordura) das sementes de girassol.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! As sementes de girassol possuem cerca de 45% a 50% de gordura e são extremamente viciantes para psitacídeos. O consumo contínuo sobrecarrega os hepatócitos com triglicerídeos, causando infiltração gordurosa maciça, hepatomegalia e perda da função hepática.'
      },
      {
        id: 'opt_2',
        text: 'Hepatite infecciosa por circovírus decorrente da falta de fibra alimentar.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Embora infecções possam ocorrer, a apresentação clássica de arara alimentada com girassol com fígado gorduroso é a Lipidose Hepática nutricional.'
      },
      {
        id: 'opt_3',
        text: 'Gota úrica visceral por excesso de proteína vegetal nas sementes.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O girassol não é excessivamente rico em purinas ou proteínas; seu principal desbalanço é a enorme concentração de lipídios e fósforo com ausência quase total de cálcio e vitamina A.'
      },
      {
        id: 'opt_4',
        text: 'Deficiência proteico-calórica por desnutrição crônica avançada.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O animal consome excesso de calorias gordurosas, apresentando obesidade e deposição adiposa visceral.'
      }
    ]
  },

  {
    id: 'ex_nutri_04',
    conceptId: 'concept_nutrition_lactation_transition',
    type: 'multiple_choice',
    prompt: 'No período de transição de vacas leiteiras de alta produção (3 semanas pré-parto a 3 semanas pós-parto), a súbita demanda de glicose para síntese de lactose mamária associada à redução fisiológica do consumo de matéria seca (CMS) deflagra o Balanço Energético Negativo (BEN). Qual cascata neuroendócrina e hepática explica a mobilização de NEFA e a cetogênese excessiva, e qual intervenção nutricional preventiva é indicada?',
    options: [
      {
        id: 'opt_4_1',
        text: 'A hipoglicemia e o hipoinsulinismo ativam a Lipase Hormônio-Sensível (LHS) no tecido adiposo, liberando Ácidos Graxos Não Esterificados (NEFA) na circulação; no fígado, a sobrecarga de NEFA excede a capacidade de beta-oxidação completa no ciclo de Krebs (por escassez de oxaloacetato desviado para gliconeogênese), desviando o acetil-CoA para síntese de corpos cetônicos (BHB e acetoacetato) e esteatose hepática; a prevenção exige precursores glicogênicos (propionato ruminal, propilenoglicol) e nutrientes lipotrópicos (colina e metionina protegidas)',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A chave bioquímica do BEN é a falta de oxaloacetato hepático: a glândula mamária consome até 80% de toda a glicose circulante para sintetizar lactose (via transportadores GLUT1 independentes de insulina). Sob baixa insulina, a LHS adiposa hidrolisa triglicerídeos liberando NEFA. No fígado, o oxaloacetato é avidamente drenado para produzir glicose, impedindo que o acetil-CoA gerado pela beta-oxidação entre no ciclo de Krebs; o excesso de acetil-CoA condensa-se formando corpos cetônicos (cetose clínica/subclínica). Além disso, a baixa taxa de síntese de VLDL em ruminantes faz os triglicerídeos se acumularem nos hepatócitos (síndrome do fígado gorduroso).'
      },
      {
        id: 'opt_4_2',
        text: 'A hiperglicemia severa estimula secreção maciça de glucagon que bloqueia a queima de gordura nos adipócitos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. No BEN ocorre hipoglicemia severa e queda de insulina, o que remove o freio inibitório da lipase tecidual.'
      },
      {
        id: 'opt_4_3',
        text: 'O BEN é causado pela falta de água no pós-parto que paralisa a digestão de proteínas no omaso',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A etiologia é um descompasso metabólico entre a demanda energética da lactação e a ingestão de energia da matéria seca.'
      },
      {
        id: 'opt_4_4',
        text: 'A cetogênese é um processo exclusivamente bacteriano que ocorre dentro do ceco por fermentação de amido indigesto',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A cetogênese patológica do BEN ocorre nas mitocôndrias dos hepatócitos a partir da oxidação incompleta de ácidos graxos mobilizados do tecido adiposo.'
      }
    ]
  },

  {
    id: 'ex_nutri_05',
    conceptId: 'concept_nutrition_acid_base_sid',
    type: 'multiple_choice',
    prompt: 'Para prevenir a Hipocalcemia Puerperal (Paresia Puerperal / "Febre do Leite") em vacas de alta produção no pré-parto imediato, nutricionistas utilizam dietas aniônicas para modular a Diferença Catiônica-Aniônica da Dieta (DCAD = [Na+ + K+] - [Cl- + S2-]). Qual é a alteração ácido-base induzida por uma DCAD negativa (-50 a -150 mEq/kg de MS) e como ela sensibiliza os receptores de Paratormônio (PTH)?',
    options: [
      {
        id: 'opt_5_1',
        text: 'Induz uma acidose metabólica hiperclorêmica subclínica controlada (pH urinário cai para 6.0 a 6.8), a qual altera a conformação estereoquímica dos receptores teciduais de PTH, tornando os osteoclastos ósseos e células renais altamente responsivos ao hormônio, ativando prontamente a reabsorção de cálcio e a síntese de calcitriol (1,25-(OH)2-D3) no momento do parto',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Em dietas catiônicas ricas em potássio (K+), o sangue sofre alcalose metabólica subclínica, o que dessensibiliza a conformação dos receptores de PTH nas células-alvo; quando o parto ocorre e a demanda de cálcio salta para o colostro, o PTH é secretado mas os tecidos não respondem (hipocalcemia aguda). O fornecimento de sais aniônicos (cloretos e sulfatos) reduz a DCAD para valores negativos, induzindo leve acidose metabólica; a acidose sensibiliza os receptores de PTH, permitindo rápida reabsorção óssea de cálcio e ativação renal da 1-alfa-hidroxilase para produzir calcitriol, mantendo a calcemia estável.'
      },
      {
        id: 'opt_5_2',
        text: 'Induz uma alcalose respiratória severa que precipita o cálcio nas veias mamárias para enriquecer o leite',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Dietas com DCAD negativa causam acidose metabólica leve, não alcalose respiratória.'
      },
      {
        id: 'opt_5_3',
        text: 'Elimina todo o cálcio da dieta obrigando o animal a absorver magnésio em substituição no miocárdio',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A dieta aniônica requer fornecimento adequado de cálcio e magnésio, modulando o equilíbrio de íons fortes para resposta hormonal eficiente.'
      },
      {
        id: 'opt_5_4',
        text: 'Eleva o pH da urina para > 8.5 para inativar a excreção renal de sódio e potássio',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A DCAD negativa acidifica a urina (pH alvo 6.0 - 6.8 em Holandesas e 5.5 - 6.5 em Jerseys). Um pH urinário > 8.2 indica falha na acidificação e alto risco de febre do leite.'
      }
    ]
  }
];

export const NUTRITION_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_nutrition_bmr',
    moduleId: 'mod_nutrition',
    title: 'Nutrição Comparada: Taxa Metabólica Basal & Exigência Alométrica',
    shortDescription: 'A física da energia: por que animais de pequeno porte necessitam de muito mais calorias por grama de tecido pela Lei de Kleiber.',
    estimatedMinutes: 10,
    order: 1,
    concepts: ['concept_bmr_mer_allometry'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_nutri_bmr_01',
        type: 'theory',
        title: 'A Lei Alométrica de Kleiber',
        contentMarkdown: `### A Equação Fundamental da Vida

Na natureza, um Lobo-guará (25 kg) não consome a mesma quantidade de energia relativa que 25 animais de 1 kg. A relação entre a massa corporal ($P$ em kg) e o consumo de energia basal não é linear — ela segue a **Equação de Kleiber**:

$$\\mathbf{BMR = K \\times P^{0,75}}$$

Onde **$K$** é a constante metabólica do grupo taxonômico:
* **Mamíferos Placentários (Lobo, Tamanduá, Onça, Cão):** $K \\approx 70\\text{ kcal/dia}$
* **Aves Não-Passeriformes (Araras, Tucanos, Rapinantes):** $K \\approx 78\\text{ kcal/dia}$
* **Aves Passeriformes (Canários, Trinca-ferros):** $K \\approx 129\\text{ kcal/dia}$ *(altíssima demanda!)*
* **Répteis Ectotérmicos a 30 °C (Jabutis, Serpentes):** $K \\approx 10\\text{ kcal/dia}$ *(metabolismo brando)*

\`\`\`mermaid
graph TD
    A["Massa Corporal Reduzida"] --> B["Maior Razão Superfície / Volume"]
    B --> C["Dissipação Rápida de Calor para o Meio Ambiente"]
    C --> D["Taxa Metabólica Basal Exponencialmente Alta por Grama (P^0.75)"]
    D --> E["Exigência Calórica Diária e Frequência Alimentar Elevadas"]
    E --> F["Prevenção de Hipoglicemia e Hipotermia Fulminante"]
\`\`\`

---

### Da Energia Basal (BMR) à Manutenção (MER)

O $BMR$ representa o paciente em repouso térmico e jejum absoluto. No dia a dia de um hospital ou recinto de reabilitação, multiplicamos o $BMR$ pelo **Fator de Atividade/Estresse**:

$$\\mathbf{MER = BMR \\times \\text{Fator}}$$

| Estado do Paciente | Fator Multiplicador |
| :--- | :--- |
| **Manutenção em cativeiro calmo** | **1,2 a 1,5** |
| **Crescimento / Filhote** | **1,8 a 2,5** |
| **Trauma grave / Sepse / Cirurgia** | **1,5 a 2,0** |
| **Répteis em jejum fisiológico** | **0,8 a 1,0** |

> 📖 Referência Canônica: Animal Nutrition (McDonald et al., 7ª ed., Prentice Hall) & Zoo Animal and Wildlife Immobilization and Anesthesia (West, Heard & Caulkett).`
      },
      {
        id: 'sec_nutri_bmr_02',
        type: 'exercise',
        title: 'Desafio Prático: Decodificando a Demanda Energética',
        exerciseId: 'ex_nutri_01'
      }
    ]
  },

  {
    id: 'lesson_nutrition_lactation_transition',
    moduleId: 'mod_nutrition',
    title: 'Nutrição no Periparto: Lactação & Balanço Energético Negativo (BEN)',
    shortDescription: 'Fisiopatologia do periparto, demanda de glicose mamária, mobilização de NEFA, cetogênese e prevenção do fígado gorduroso.',
    estimatedMinutes: 14,
    order: 2,
    concepts: ['concept_nutrition_lactation_transition'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_nutri_lact_01',
        type: 'theory',
        title: 'A Revolução Metabólica do Periparto & Mobilização Lipídica',
        contentMarkdown: `### 1. A Demanda Mamária de Glicose & O Desafio do BEN

No momento do parto e início da lactação em vacas leiteiras de alta produção e fêmeas de alta exigência, a demanda de glicose pela glândula mamária quadruplica para sustentar a síntese de lactose (o principal osmorregulador do volume do leite).

* A captação de glicose pela glândula mamária ocorre via transportadores **GLUT1**, que **independem de insulina**.
* Como o consumo voluntário de matéria seca (CMS) cai de 20% a 30% nas semanas pré-parto devido à compressão uterina e alterações hormonais (pico de estrogênio), o animal entra obrigatoriamente em **Balanço Energético Negativo (BEN)**.

\`\`\`mermaid
graph TD
    A["Início da Lactação + Queda do Consumo de Matéria Seca (CMS)"] --> B["Balanço Energético Negativo Severo (BEN)"]
    B --> C["Hipoglicemia & Queda da Insulina Plasmática"]
    C --> D["Ativação da Lipase Hormônio-Sensível (LHS) no Tecido Adiposo"]
    D --> E["Mobilização Maciça de Ácidos Graxos Não Esterificados (NEFA)"]
    E --> F["Sobrecarga Hepática de NEFA"]
    F --> G["Drenagem de Oxaloacetato para Gliconeogênese"]
    G --> H["Acúmulo de Acetil-CoA -> Síntese de Corpos Cetônicos (BHB)"]
    F --> I["Baixa Taxa de VLDL em Ruminantes -> Esteatose Hepática (Fígado Gorduroso)"]
\`\`\`

---

### 2. Estratégias Nutricionais de Prevenção

1. **Precursores Glicogênicos:**
   * Fornecimento de **Propilenoglicol** via oral (300 a 500 mL/dia no periparto): absorvido diretamente no rúmen e convertido em piruvato e oxaloacetato no fígado.
   * Manejo do teor de amido na dieta pré-parto (amido de alta fermentabilidade ruminal gera ácido propiônico, o precursor natural da gliconeogênese).
2. **Nutrientes Lipotrópicos Protegidos:**
   * **Colina Protegida da Degradação Ruminal:** Fornece fosfatidilcolina essencial para a montagem das partículas de VLDL no retículo endoplasmático hepático, permitindo exportar triglicerídeos e desengordurar o fígado.
   * **Metionina Protegida:** Aminoácido limitante para síntese de apolipoproteína B-100.

> 📖 Referência Canônica: Nutritional Ecology of the Ruminant (Van Soest, 2ª ed., Cornell University Press) & Dairy Cattle Feeding and Nutrition (Miller & O'Connor).`
      },
      {
        id: 'sec_nutri_lact_lab',
        type: 'lab',
        title: 'Prontuário & Simulação Metabólica: Mimosa (Vaca Holandesa em BEN)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Terapêutico e Nutricional da Cetose Clínica Pós-Parto',
          patient: {
            name: 'Mimosa',
            species: 'Bovino Leiteiro',
            breed: 'Holandês Puro de Origem (PO)',
            age: '5 anos (4ª lactação)',
            weightKg: 620,
            habitatOrEnvironment: 'Galpão compost barn com dieta TMR'
          },
          vitals: {
            heartRateBpm: 76,
            respiratoryRateRpm: 22,
            temperatureCelsius: 38.5,
            mucousMembranes: 'Normocoradas a discretamente ictéricas',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Vaca parida há 14 dias apresenta recusa súbita de ração concentrada no cocho (ingere apenas feno), queda de 35% na produção diária de leite e perda de escore de condição corporal (ECC caiu de 3.5 para 2.5). O ordenhador relata hálito com odor doce característico (acetona).',
          exams: [
            {
              category: 'laboratorial',
              title: 'Painel Metabólico Sanguíneo e Urinário de Corpos Cetônicos',
              findings: 'Severa hiperlactatemia e cetonemia característica de cetose clínica tipo I.',
              abnormalValues: [
                { parameter: 'Beta-hidroxibutirato Sanguíneo (BHB)', value: '2.8 mmol/L (Cetose Clínica)', reference: '< 1.2 mmol/L (Subclínica: 1.2-1.4)', status: 'critical' },
                { parameter: 'Glicemia de Jejum', value: '28 mg/dL (Hipoglicemia)', reference: '45 - 75 mg/dL', status: 'critical' },
                { parameter: 'Ácidos Graxos Não Esterificados (NEFA)', value: '1.2 mEq/L', reference: '< 0.4 mEq/L', status: 'critical' },
                { parameter: 'Ultrassom Hepático (10º EIC)', value: 'Padrão hiperecogênico difuso com atenuação profunda (Esteatose)', reference: 'Parênquima homogêneo normal', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com glicemia crítica de 28 mg/dL e BHB de 2.8 mmol/L, qual é o protocolo emergencial e nutricional de resgate?',
          decisionOptions: [
            {
              id: 'opt_dec_nutri4_1',
              label: 'Administrar Glicose a 50% IV lenta (500 mL) + Propilenoglicol via drench oral (300 mL a cada 12h por 3-5 dias) + Complexo de Vitamina B12 e Colina protegida',
              description: 'Restabelecer glicemia imediata, fornecer substrato glicogênico contínuo e estimular a exportação de gordura hepática.',
              isOptimal: true,
              consequenceText: 'Conduta exemplar em clínica médica de ruminantes! O bólus de glicose 50% eleva prontamente a glicemia, estimula a secreção de insulina e desliga a lipase hormônio-sensível no tecido adiposo, cessando a inundação de NEFA. O propilenoglicol oral fornece substrato glicogênico sustentado ao fígado, recompondo o oxaloacetato e curando a cetose.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Oferta de glicose parenteral associada a propilenoglicol oral e colina',
                mechanism: 'Estímulo da secreção de insulina com frenamento da lipólise periférica e restauração do oxaloacetato',
                effect: 'Redução do BHB de 2.8 para 0.8 mmol/L em 48 horas e retomada do consumo de concentrado',
                clinicalMeaning: 'Cura da cetose clínica, recuperação da curva de lactação e proteção hepática'
              }
            },
            {
              id: 'opt_dec_nutri4_2',
              label: 'Prescrever óleo vegetal puro (óleo de soja 2 litros) na sonda para aumentar as calorias da vaca',
              description: 'Fornecer grande volume de gordura vegetal líquida na tentativa de combater a perda de peso.',
              isOptimal: false,
              consequenceText: 'Erro desastroso! Fornecer gordura livre no rúmen recobre as bactérias celulolíticas e anula a digestão de fibras. Além disso, inunda o fígado com mais lipídios, acelerando o colapso por esteatose hepática terminal.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Sobrecarga de lipídios livres em paciente com esteatose hepática severa',
                mechanism: 'Toxicidade para a microbiota ruminal e aumento da sobrecarga de gordura nos hepatócitos',
                effect: 'Parada total da motilidade ruminal e colapso hepático agudo',
                clinicalMeaning: 'Evolução fulminante para coma hepático e descarte involuntário da matriz'
              }
            },
            {
              id: 'opt_dec_nutri4_3',
              label: 'Suspender totalmente o feno e fornecer apenas farelo de trigo puro à vontade',
              description: 'Retirar a forragem da dieta de uma vaca com cetose.',
              isOptimal: false,
              consequenceText: 'Contraindicado! A retirada da fibra longa paralisa a ruminação e a produção de tampões salivares, provocando acidose ruminal aguda associada à cetose e deslocamento de abomaso à esquerda.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Ablação da fibra efetiva em animal com consumo deprimido',
                mechanism: 'Queda do pH ruminal e hipotonia abomasal por acúmulo de gases',
                effect: 'Deslocamento de abomaso à esquerda (DAE) com indicação cirúrgica de emergência',
                clinicalMeaning: 'Necessidade de intervenção cirúrgica em paciente metabolicamente instável'
              }
            }
          ],
          learningTakeaways: [
            'A glândula mamária consome até 80% da glicose circulante de forma independente de insulina.',
            'O propilenoglicol oral é o precursor glicogênico de eleição para o tratamento da cetose.',
            'O bólus de glicose 50% estimula a insulina e freia a mobilização de NEFA do tecido adiposo.'
          ]
        }
      },
      {
        id: 'sec_nutri_lact_02',
        type: 'exercise',
        title: 'Desafio Prático: Balanço Energético Negativo & Cetose',
        exerciseId: 'ex_nutri_04'
      }
    ]
  },

  {
    id: 'lesson_nutrition_mbd',
    moduleId: 'mod_nutrition',
    title: 'Nutrição Mineral: Balanço Ca:P & Doença Osteometabólica (MBD)',
    shortDescription: 'A razão de ouro 1,5:1 a 2:1 entre Cálcio e Fósforo: prevenção de hipocalcemia, osteodistrofia fibrosa e casco de borracha.',
    estimatedMinutes: 14,
    order: 3,
    concepts: ['concept_cap_ratio_mbd', 'concept_bmr_mer_allometry'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_nutri_mbd_01',
        type: 'theory',
        title: 'A Relação de Ouro Cálcio:Fósforo (Ca:P)',
        contentMarkdown: `### Por que o Cálcio é tão Crítico na Fauna?

O cálcio é o mineral mais abundante do organismo, essencial não apenas para os ossos e a carapaça dos quelônios, mas para:
1. **Contração muscular cardíaca e esquelética;**
2. **Coagulação sanguínea;**
3. **Transmissão sináptica neuronal;**
4. **Formação da casca dos ovos em aves e répteis.**

O corpo precisa manter o cálcio sérico em níveis milimétricos. Se a dieta não fornece cálcio suficiente em relação ao fósforo, o organismo não hesita: **ele dissolve os próprios ossos para manter o coração batendo.**

\`\`\`mermaid
graph TD
    A["Dieta com relação Ca:P invertida (< 1:1)"] --> B["Queda do Cálcio Iônico no Plasma (Hipocalcemia)"]
    B --> C["Estímulo Direto nas Glândulas Paratireoides"]
    C --> D["Hipersecreção de Paratormônio (PTH)"]
    D --> E["Ativação dos Osteoclastos nos Ossos e Carapaça"]
    E --> F["Reabsorção da Matriz Mineral Óssea + Substituição por Tecido Fibroso"]
    F --> G["Osteodistrofia Fibrosa: Casco de Borracha, Fraturas Espontâneas e Morte"]
\`\`\`

---

### A Regra da Razão Ca:P Segura

* **Ideal / Homologado:** $\\mathbf{1,5:1 \\text{ a } 2,0:1}$ (para cada 2 partes de cálcio, 1 parte de fósforo).
* **Inaceitável / Risco de MBD:** Menor que $1,0:1$ (ex.: sementes e carnes puras têm até $1:8$ a $1:20$!).

> 📖 Referência Canônica: Reptile Medicine and Surgery (Mader, 2ª ed., Saunders) & Avian Medicine and Surgery (Tully, Dorrestein & Jones).`
      },
      {
        id: 'sec_nutri_mbd_02',
        type: 'exercise',
        title: 'Desafio Prático: Investigação de Casco de Borracha',
        exerciseId: 'ex_nutri_02'
      }
    ]
  },

  {
    id: 'lesson_nutrition_acid_base_sid',
    moduleId: 'mod_nutrition',
    title: 'Nutrição Clínica & UTI: DCAD, SID & Suporte Enteral Escalonado',
    shortDescription: 'Cálculo de DCAD para prevenção de hipocalcemia pré-parto, SID de rações e suporte nutricional enteral na lipidose felina.',
    estimatedMinutes: 15,
    order: 4,
    concepts: ['concept_nutrition_acid_base_sid'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_nutri_sid_01',
        type: 'theory',
        title: 'O Balanço Eletrolítico da Dieta & O Resgate Enteral em UTI',
        contentMarkdown: `### 1. A Diferença Catiônica-Aniônica da Dieta (DCAD / Dietary Cation-Anion Difference)

Na nutrição de ruminantes, a DCAD é uma ferramenta matemática e fisiológica poderosa para manipular o estado ácido-base sistêmico através dos minerais ingeridos:

$$\\mathbf{DCAD (mEq/kg) = ([Na^+] + [K^+]) - ([Cl^-] + [S^{2-}])}$$

* **O Problema da Dieta Catiônica Tradicional:** Forragens verdes tropicais são ricas em Potássio ($K^+$). O excesso de cátions induz **alcalose metabólica subclínica**, a qual altera a conformação tridimensional dos receptores de PTH nas células ósseas e renais, tornando os tecidos refratários ao hormônio. No parto, a vaca não consegue mobilizar cálcio e desenvolve **Paresia Puerperal (Febre do Leite)**.
* **A Estratégia da DCAD Negativa (-50 a -150 mEq/kg):**
  * Suplementação com **sais aniônicos** (Sulfato de Magnésio, Cloreto de Amônio, Cloreto de Cálcio) durante os últimos 21 dias de gestação.
  * O excesso de ânions fortes absorvíveis ($Cl^-$ e $SO_4^{2-}$) induz **acidose metabólica hiperclorêmica leve e controlada**.
  * A acidose restaura a sensibilidade dos receptores de PTH, mantendo os osteoclastos ativados para reabsorver cálcio e os rins sintetizando calcitriol.
  * **Monitoramento Biológico Canônico:** O **pH urinário** deve ser medido semanalmente: em vacas Holandesas deve situar-se entre **6.0 e 6.8** (abaixo de 5.5 indica acidose excessiva; acima de 7.5 indica falha da dieta aniônica).

\`\`\`mermaid
graph TD
    A["Dieta Pré-Parto com Sais Aniônicos (DCAD Negativa: -50 a -150 mEq/kg)"] --> B["Absorção de Ânions Fortes (Cl- e SO4 2-) Excedendo Cátions"]
    B --> C["Indução de Acidose Metabólica Subclínica Controlada (pH Urina: 6.0 - 6.8)"]
    C --> D["Sensibilização Alostérica dos Receptores de PTH nos Osteoclastos"]
    D --> E["Mobilização Imediata de Cálcio Ósseo & Síntese Renal de Calcitriol"]
    E --> F["Prevenção Efetiva da Hipocalcemia Puerperal (Febre do Leite)"]
\`\`\`

---

### 2. Suporte Nutricional Enteral em UTI Veterinária

Em pacientes críticos (como felinos com lipidose hepática ou cães em pós-operatório séptico), a regra áurea é: **"Se o trato gastrointestinal funciona, use-o!"**

1. **Vias de Acesso Enteral:**
   * *Sonda Nasoesofágica (curto prazo, 3-5 dias):* Fácil inserção sem anestesia, restrita a dietas líquidas fluidas.
   * *Sonda de Esofagostomia (médio a longo prazo, semanas a meses):* Calibre maior (12-14 Fr), permite dietas pastosas batidas e medicação oral em casa.
2. **Prevenção da Síndrome de Realimentação (Refeeding Syndrome):**
   * Em pacientes anoréxicos por mais de 3 a 5 dias, a oferta abrupta de carboidratos estimula pico de insulina.
   * A insulina força a entrada maciça de **Glicose, Fósforo e Potássio** para dentro das células.
   * Ocorre **hipofosfatemia aguda severa (< 1.5 mg/dL)**, provocando hemólise intravascular aguda, fraqueza muscular respiratória e parada cardíaca.
   * **Protocolo Escalonado Seguro:** Dia 1: 33% da RER; Dia 2: 66% da RER; Dia 3: 100% da RER fracionada em 4 a 6 refeições diárias!

> 📖 Referência Canônica: Small Animal Critical Care Medicine (Silverstein & Hopper, 2ª ed., Elsevier) & Dairy Cattle Feeding and Nutrition (Miller & O'Connor).`
      },
      {
        id: 'sec_nutri_sid_lab',
        type: 'lab',
        title: 'Prontuário & Simulação Nutricional: Luna (Gata Persa com Lipidose)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo de Suporte Nutricional Enteral e Prevenção de Refeeding Syndrome',
          patient: {
            name: 'Luna',
            species: 'Felino',
            breed: 'Persa',
            age: '4 anos',
            weightKg: 3.5,
            habitatOrEnvironment: 'Domicílio estrito'
          },
          vitals: {
            heartRateBpm: 185,
            respiratoryRateRpm: 28,
            temperatureCelsius: 37.8,
            mucousMembranes: 'Ictéricas / Amareladas francas',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Gata previamente obesa (5.2 kg) que parou de comer há 6 dias após mudança de residência do tutor. Apresenta icterícia intensa de pele e esclera, vômitos esporádicos e fraqueza cervical (ventroflexão de pescoço por hipocalemia).',
          exams: [
            {
              category: 'laboratorial',
              title: 'Bioquímica Hepática, Eletrólitos e Ultrassom Abdominal',
              findings: 'Severo acometimento hepatobiliar colestático compatível com lipidose hepática idiopática felina.',
              abnormalValues: [
                { parameter: 'Fosfatase Alcalina (FA)', value: '620 U/L (Marcadamente Elevada)', reference: '20 - 90 U/L', status: 'critical' },
                { parameter: 'GGT Hepática', value: '2.5 U/L (Normal / Discreta)', reference: '1 - 5 U/L (Dissociação FA/GGT)', status: 'normal' },
                { parameter: 'Bilirrubina Total', value: '4.2 mg/dL (Hiperbilirrubinemia)', reference: '0.1 - 0.5 mg/dL', status: 'critical' },
                { parameter: 'Potássio Sérico (K+)', value: '3.1 mEq/L (Hipocalemia)', reference: '3.5 - 5.5 mEq/L', status: 'low' },
                { parameter: 'Fósforo Sérico Basal', value: '3.0 mg/dL', reference: '2.5 - 6.0 mg/dL', status: 'normal' }
              ]
            }
          ],
          challengePrompt: 'Com diagnóstico de Lipidose Hepática Felina e jejum de 6 dias, qual o plano de suporte nutricional e monitorização laboratorial imediata?',
          decisionOptions: [
            {
              id: 'opt_dec_nutri5_1',
              label: 'Implantação cirúrgica de sonda de esofagostomia + Início de nutrição enteral escalonada (Dia 1: 33% da RER fracionada em 5 refeições diárias) associada a reposição de potássio na fluidoterapia e monitorização diária do fósforo sérico',
              description: 'Alimentar o paciente por via digestiva protegida evitando a síndrome de realimentação fatal.',
              isOptimal: true,
              consequenceText: 'Conduta nutricional e intensiva impecável! Em gatos com lipidose, a nutrição enteral precoce é o único tratamento comprovadamente curativo para reverter a esteatose. A progressão escalonada (33% no dia 1) e o monitoramento estrito de fósforo previnem a queda catastrófica por realimentação (Refeeding Syndrome), garantindo alta taxa de cura.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Instituição de alimentação enteral por sonda de esofagostomia com cálculo escalonado de RER',
                mechanism: 'Aporte de aminoácidos e energia para síntese hepática de lipoproteínas de exportação',
                effect: 'Clareamento progressivo dos vacúolos de gordura nos hepatócitos e redução das enzimas',
                clinicalMeaning: 'Reversão completa da lipidose hepática e recuperação voluntária do apetite'
              }
            },
            {
              id: 'opt_dec_nutri5_2',
              label: 'Administrar 100% da MER com ração hipercalórica rica em carboidratos em bólus único na seringa forçada via oral',
              description: 'Alimentação forçada imediata na boca com alta carga calórica.',
              isOptimal: false,
              consequenceText: 'Erro gravíssimo! A alimentação forçada na boca em gatos com lipidose gera aversão alimentar permanente e pneumonia aspirativa fatal. Além disso, fornecer 100% da energia em paciente em jejum prolongado dispara pico insulínico e hipofosfatemia fulminante (Refeeding Syndrome).',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Sobrecarga calórica abrupta pós-jejum associada a alimentação forçada oral',
                mechanism: 'Pico de insulina com influxo maciço de fósforo para o meio intracelular e broncoaspiração',
                effect: 'Hipofosfatemia severa (< 1.0 mg/dL), hemólise intravascular aguda e hipóxia',
                clinicalMeaning: 'Parada cardiorrespiratória e morte por síndrome de realimentação'
              }
            },
            {
              id: 'opt_dec_nutri5_3',
              label: 'Apenas prescrever estimulante de apetite (Mirtazapina) em casa sem colocar sonda',
              description: 'Confiar apenas em orexígeno oral em paciente com 6 dias de anorexia e icterícia.',
              isOptimal: false,
              consequenceText: 'Insuficiente e negligente! Gatos com lipidose hepática clínica e icterícia instalada raramente respondem a estimulantes de apetite isolados. A demora em alimentar o animal consolida a necrose hepática e o óbito.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Monoterapia com orexígeno sem suporte enteral em lipidose avançada',
                mechanism: 'Continuidade da lipólise periférica descontrolada com sobrecarga hepática',
                effect: 'Progressão da insuficiência hepática e encefalopatia metabólica',
                clinicalMeaning: 'Evolução para choque hepático e óbito do paciente'
              }
            }
          ],
          learningTakeaways: [
            'A nutrição enteral precoce por sonda é a única intervenção verdadeiramente curativa na lipidose felina.',
            'A progressão escalonada (33% -> 66% -> 100% da RER) previne a hipofosfatemia da Síndrome de Realimentação.',
            'A dissociação FA elevada com GGT normal é característica bioquímica típica da lipidose hepática felina.'
          ]
        }
      },
      {
        id: 'sec_nutri_sid_02',
        type: 'exercise',
        title: 'Desafio Prático: DCAD & Suporte Enteral em UTI',
        exerciseId: 'ex_nutri_05'
      }
    ]
  },

  {
    id: 'lesson_nutrition_diets',
    moduleId: 'mod_nutrition',
    title: 'Nutrição Aplicada: Formulação de Dietas Práticas & Erros Frequentes',
    shortDescription: 'O perigo do girassol em psitacídeos e a armadilha da carne desossada sem cálcio em carnívoros neotropicais.',
    estimatedMinutes: 12,
    order: 5,
    concepts: ['concept_wild_diet_formulation', 'concept_cap_ratio_mbd'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_nutri_diet_01',
        type: 'theory',
        title: 'Os 2 Maiores Crimes Nutricionais na Fauna Silvestre',
        contentMarkdown: `### 1. O Vício da Semente de Girassol em Psitacídeos

Muitos tutores e criadouros alimentam araras e papagaios quase que exclusivamente com sementes de girassol porque "as aves adoram". 

**A Realidade Nutricional da Semente de Girassol:**
* **Lipídios:** ~48% a 52% *(equivale a um humano almoçar batata frita todos os dias)*;
* **Relação Ca:P:** **1:8** *(catastrófica para o esqueleto)*;
* **Vitamina A:** Praticamente **zero** *(induzindo metaplasia escamosa respiratória)*;
* **Consequência:** **Lipidose Hepática (Esteatose)** com falência hepática, bico quebrado e morte súbita por ruptura de fígado gorduroso.

---

### 2. A Ilusão do Filé Bovino em Carnívoros

Alimentar um Lobo-guará, Onça ou Gavião apenas com "carne de primeira" (músculo desossado de boi ou frango) é um erro gravíssimo:
* O tecido muscular é rico em fósforo e extremamente pobre em cálcio (razão Ca:P de **1:20**!);
* Na natureza, o carnívoro ingere a **presa inteira** (vísceras, pelos/penas como fibra estrutural e, crucialmente, os **ossos triturados**, que fornecem todo o cálcio necessário).
* **Sem ossos ou suplementação de carbonato de cálcio, filhotes de carnívoros desenvolvem fraturas patológicas espontâneas ao simplesmente tentar caminhar.**

> 📖 Referência Canônica: Fowler's Zoo and Wild Animal Medicine (Miller, Fowler & Lamberski) & Clinical Avian Medicine (Harrison & Lightfoot).`
      },
      {
        id: 'sec_nutri_diet_02',
        type: 'exercise',
        title: 'Desafio Prático: Investigação de Esteatose Hepática',
        exerciseId: 'ex_nutri_03'
      }
    ]
  }
];
