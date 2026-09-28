// src/learning/data/lessons/nutritionLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const NUTRITION_EXERCISES: Record<string, LearningExercise> = {
  ex_nutri_01: {
    id: 'ex_nutri_01',
    conceptId: 'concept_bmr_mer_allometry',
    type: 'multiple_choice',
    prompt: 'Por que um Beija-flor (5 g) consome proporcionalmente muito mais energia por grama de peso corporal do que uma Anta (250 kg)?',
    options: [
      {
        id: 'opt_1',
        text: 'Porque animais menores têm maior relação superfície-volume e taxa metabólica de Kleiber exponencialmente mais alta.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! De acordo com a Lei Alométrica de Kleiber (BMR = K × P^0,75), animais de menor massa corpórea dissipam calor rapidamente pela sua grande área de superfície em relação ao volume, necessitando de uma taxa metabólica basal muito superior por grama de tecido.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Porque beija-flores têm digestão exclusivamente anaeróbica no papo.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Aves realizam respiração aeróbica com taxa oxidativa altíssima; a digestão anaeróbica ocorre em câmaras de fermentação de herbívoros.',
        conceptualErrorCategory: 'wrong_digestive_physiology'
      },
      {
        id: 'opt_3',
        text: 'Porque grandes herbívoros não possuem taxa metabólica basal mensurável.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Todos os seres vivos endotérmicos e ectotérmicos possuem BMR; nos grandes herbívoros, o valor absoluto em calorias é grande, mas a taxa por grama de tecido é muito menor.',
        conceptualErrorCategory: 'biological_impossibility'
      },
      {
        id: 'opt_4',
        text: 'Apenas devido ao tipo de dieta rica em açúcares simples do néctar.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A dieta rica em carboidratos sustenta essa demanda, mas a causa primária é a física alométrica de perda de calor e consumo de O2.',
        conceptualErrorCategory: 'confusing_diet_with_cause'
      }
    ],
    pedagogicalExplanation: 'A alometria nutricional dita que a dose de energia e de medicamentos nunca deve ser calculada de forma linear simples. Animais pequenos consomem calorias a uma velocidade dezenas de vezes superior à de grandes mamíferos.',
    causalChain: {
      cause: 'Redução da massa corpórea em animais endotérmicos',
      mechanism: 'Aumento exponencial da proporção entre área superficial e volume corporal total',
      effect: 'Dissipação contínua e acelerada de calor para o meio ambiente',
      clinicalMeaning: 'Exigência de densidade calórica e frequência alimentar muito mais intensas para evitar hipoglicemia e choque hipotérmico'
    }
  },

  ex_nutri_02: {
    id: 'ex_nutri_02',
    conceptId: 'concept_cap_ratio_mbd',
    type: 'multiple_choice',
    prompt: 'Um filhote de Jabuti-piranga (Chelonoidis carbonarius) de 400 g é alimentado apenas com alface americana, tomate e sementes. O tutor nota que o casco está "mole como borracha" e os membros anteriores estão arqueados. Qual mecanismo patológico explica este quadro?',
    options: [
      {
        id: 'opt_1',
        text: 'Hiperparatireoidismo Nutricional Secundário (MBD) induzido por dieta com relação Ca:P invertida (< 1:1) e carência de cálcio assimilável.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! O alface e o tomate são pobres em cálcio e desbalanceados. Quando o cálcio plasmático cai, as paratireoides secretam PTH em excesso, reabsorvendo o cálcio dos ossos e da carapaça para manter o coração batendo, resultando em osteodistrofia fibrosa (casco de borracha).',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Deficiência primária de vitamina C causando escorbuto do plastrão.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Répteis sintetizam ácido ascórbico nos rins ou fígado; a carapaça amolecida com arqueamento ósseo é a apresentação clássica da Doença Osteometabólica por falta de cálcio e vitamina D3/UVB.',
        conceptualErrorCategory: 'vitamin_confusion'
      },
      {
        id: 'opt_3',
        text: 'Intoxicação por excesso de fósforo inorgânico levando à calcificação metastática do casco.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A calcificação metastática tornaria os tecidos rígidos e mineralizados (como rins e artérias), e não um casco desmineralizado e flexível.',
        conceptualErrorCategory: 'opposite_clinical_sign'
      },
      {
        id: 'opt_4',
        text: 'Desidratação celular aguda decorrente de baixa umidade no terrário.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A desidratação causa afundamento de olhos e ressecamento tegumentar, mas não perda da matriz mineral óssea.',
        conceptualErrorCategory: 'dehydration_confusion'
      }
    ],
    pedagogicalExplanation: 'A proporção fisiológica ideal de Cálcio para Fósforo (Ca:P) na dieta de répteis herbívoros deve ser mantida entre 1,5:1 e 2,0:1, acompanhada de radiação ultravioleta B (UVB) para síntese endógena de calcitriol.',
    causalChain: {
      cause: 'Dieta monótona pobre em cálcio e com relação Ca:P invertida (< 1:1)',
      mechanism: 'Hipocalcemia crônica estimulando secreção contínua de Paratormônio (PTH)',
      effect: 'Reabsorção osteoclástica massiva da matriz mineral óssea e dos escudos córneos da carapaça',
      clinicalMeaning: 'Doença Osteometabólica (MBD), fraturas patológicas, deformidades esqueléticas irreversíveis e anorexia'
    }
  },

  ex_nutri_03: {
    id: 'ex_nutri_03',
    conceptId: 'concept_wild_diet_formulation',
    type: 'multiple_choice',
    prompt: 'Uma Arara-canindé (Ara ararauna) de 10 anos mantida em cativeiro com dieta composta de 90% sementes de girassol apresenta bico hipertrofiado com descamação, abdômen abaulado e letargia. O exame ultrassonográfico revela fígado hiperecogênico aumentado. Qual é o diagnóstico nutricional?',
    options: [
      {
        id: 'opt_1',
        text: 'Esteatose Hepática (Lipidose Hepática) crônica decorrente da alta densidade lipídica (50% de gordura) das sementes de girassol.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! As sementes de girassol possuem cerca de 45% a 50% de gordura e são extremamente viciantes para psitacídeos. O consumo contínuo sobrecarrega os hepatócitos com triglicerídeos, causando infiltração gordurosa maciça, hepatomegalia e perda da função hepática.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Hepatite infecciosa por circovírus decorrente da falta de fibra alimentar.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Embora infecções possam ocorrer, a apresentação clássica de arara alimentada com girassol com fígado gorduroso é a Lipidose Hepática nutricional.',
        conceptualErrorCategory: 'infectious_confusion'
      },
      {
        id: 'opt_3',
        text: 'Gota úrica visceral por excesso de proteína vegetal nas sementes.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O girassol não é excessivamente rico em purinas ou proteínas; seu principal desbalanço é a enorme concentração de lipídios e fósforo com ausência quase total de cálcio e vitamina A.',
        conceptualErrorCategory: 'gout_confusion'
      },
      {
        id: 'opt_4',
        text: 'Deficiência proteico-calórica por desnutrição crônica avançada.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O animal consome excesso de calorias gordurosas, apresentando obesidade e deposição adiposa visceral.',
        conceptualErrorCategory: 'caloric_underestimation'
      }
    ],
    pedagogicalExplanation: 'A transição alimentar para ração extrusada canônica balanceada é mandatória para reverter a sobrecarga lipídica antes que ocorra cirrose hepática ou colapso vascular.',
    causalChain: {
      cause: 'Ingestão crônica de dieta baseada em sementes oleaginosas (girassol com ~50% de lipídios)',
      mechanism: 'Aporte de ácidos graxos livres ultrapassa a capacidade de oxidação e exportação lipoproteica hepática',
      effect: 'Acúmulo intracelular de vacúolos de triglicerídeos nos hepatócitos (esteatose hepática)',
      clinicalMeaning: 'Hepatomegalia compressiva, redução de fatores de coagulação, bico distrófico e insuficiência hepática terminal'
    }
  }
};

export const NUTRITION_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_nutrition_bmr',
    moduleId: 'mod_nutrition',
    title: 'Taxa Metabólica Basal & Exigência Alométrica',
    subtitle: 'A física da energia: por que animais silvestres de pequeno porte necessitam de muito mais calorias por grama de tecido.',
    estimatedMinutes: 10,
    objectives: [
      'Compreender a Lei Alométrica de Kleiber e o cálculo da Taxa Metabólica Basal (BMR)',
      'Diferenciar energia basal de exigência de manutenção (MER) e fatores de crescimento/doença',
      'Calcular as necessidades calóricas diárias em kcal/dia para aves, répteis e mamíferos'
    ],
    concepts: ['concept_bmr_mer_allometry'],
    sections: [
      {
        id: 'sec_nutri_bmr_01',
        type: 'theory',
        title: 'A Lei Alométrica de Kleiber',
        contentMarkdown: `### A Equação Fundamental da Vida

Na natureza, um Lobo-guará (25 kg) não consome a mesma quantidade de energia relativa que 25 animais de 1 kg. A relação entre a massa corporal ($P$ em kg) e o consumo de energia basal não é linear — ela segue a **Equação de Kleiber**:

$$\\mathbf{BMR = K \\times P^{0,75}}$$

Onde **$K$** é a constante metabólica do grupo taxonômico:
- **Mamíferos Placentários (Lobo, Tamanduá, Onça):** $K \\approx 70\\text{ kcal/dia}$
- **Aves Não-Passeriformes (Araras, Tucanos, Rapinantes):** $K \\approx 78\\text{ kcal/dia}$
- **Aves Passeriformes (Canários, Trinca-ferros):** $K \\approx 129\\text{ kcal/dia}$ *(altíssima demanda!)*
- **Répteis Ectotérmicos a 30 °C (Jabutis, Serpentes):** $K \\approx 10\\text{ kcal/dia}$ *(metabolismo brando)*

---

### Da Energia Basal (BMR) à Manutenção (MER)

O $BMR$ representa o paciente em repouso térmico e jejum absoluto. No dia a dia de um hospital ou recinto de reabilitação, multiplicamos o $BMR$ pelo **Fator de Atividade/Estresse**:

$$\\mathbf{MER = BMR \\times \\text{Fator}}$$

| Estado do Paciente | Fator Multiplicador |
|---|---|
| **Manutenção em cativeiro calmo** | **1,2 a 1,5** |
| **Crescimento / Filhote** | **1,8 a 2,5** |
| **Trauma grave / Sepse / Cirurgia** | **1,5 a 2,0** |
| **Répteis em jejum fisiológico** | **0,8 a 1,0** |
        `,
        causalChain: {
          cause: 'Subestimação alométrica da taxa metabólica de filhotes ou animais de pequeno porte',
          mechanism: 'Fornecimento calórico diário inferior ao consumo metabólico basal (BMR)',
          effect: 'Catabolismo acelerado de proteínas musculares e glicogênio hepático',
          clinicalMeaning: 'Hipoglicemia fulminante, hipotermia e perda de peso crítica em 24 a 48 horas'
        }
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
    id: 'lesson_nutrition_mbd',
    moduleId: 'mod_nutrition',
    title: 'Balanço Mineral Ca:P & Doença Osteometabólica',
    subtitle: 'A razão de ouro 1,5:1 a 2:1 entre Cálcio e Fósforo: prevenção de hipocalcemia e casco de borracha.',
    estimatedMinutes: 14,
    objectives: [
      'Entender a importância fisiológica da relação Cálcio:Fósforo (Ca:P) na dieta de animais silvestres',
      'Reconhecer a cascata hormonal do Paratormônio (PTH) na Doença Osteometabólica (MBD)',
      'Operar a Balança Nutricional Ca:P interativa para formular um prato seguro sem risco de osteodistrofia'
    ],
    concepts: ['concept_cap_ratio_mbd', 'concept_bmr_mer_allometry'],
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

---

### A Cascata do Hiperparatireoidismo Nutricional Secundário (MBD)

\`\`\`mermaid
flowchart TD
    A["Dieta com relação Ca:P invertida (< 1:1)"] --> B["Queda do Cálcio Iônico no Plasma (Hipocalcemia)"]
    B --> C["Estímulo Direto nas Glândulas Paratireoides"]
    C --> D["Hipersecreção de Paratormônio (PTH)"]
    D --> E["Ativação dos Osteoclastos nos Ossos e Carapaça"]
    E --> F["Reabsorção da Matriz Mineral Óssea + Substituição por Tecido Fibroso"]
    F --> G["Osteodistrofia Fibrosa: Casco de Borracha, Fraturas Espontâneas e Morte"]
\`\`\`

> [!IMPORTANT]
> **A Regra da Razão Ca:P Segura:**
> - **Ideal / Homologado:** $\\mathbf{1,5:1 \\text{ a } 2,0:1}$ (para cada 2 partes de cálcio, 1 parte de fósforo).
> - **Inaceitável / Risco de MBD:** Menor que $1,0:1$ (ex.: sementes e carnes puras têm até $1:8$!).
        `,
        causalChain: {
          cause: 'Fornecimento contínuo de alimentos ricos em fósforo e pobres em cálcio',
          mechanism: 'Aumento sustentado de PTH que esgota os depósitos de hidroxiapatita esquelética',
          effect: 'Desmineralização óssea progressiva com deposição compensatória de colágeno fibroso',
          clinicalMeaning: 'Carapaça de borracha em quelônios, deformidades angulares de membros e tetania hipocalcêmica'
        }
      },
      {
        id: 'sec_nutri_mbd_02',
        type: 'exercise',
        title: 'Desafio Prático: Investigação de Casco de Borracha',
        exerciseId: 'ex_nutri_02'
      },
      {
        id: 'sec_nutri_mbd_03',
        type: 'lab',
        title: 'Laboratório Interativo: Balança Nutricional Ca:P em Tempo Real',
        description: 'Monte a dieta para um filhote de Jabuti combinando ingredientes reais (couve, sementes, ração extrusada, frutas e carbonato de cálcio). Observe o ponteiro da razão Ca:P e equilibre o prato na zona verde para salvar o paciente de MBD.',
        labType: 'nutrition_diet_balance',
        labConfig: {
          patientSpecies: 'Jabuti-piranga (Chelonoidis carbonarius)',
          patientWeightKg: 0.8,
          targetDailyCaloriesKcal: 45,
          minSafeRatio: 1.5,
          maxSafeRatio: 2.2
        }
      }
    ]
  },

  {
    id: 'lesson_nutrition_diets',
    moduleId: 'mod_nutrition',
    title: 'Formulação de Dietas Práticas & Erros Frequentes',
    subtitle: 'O perigo do girassol em psitacídeos e a armadilha da carne desossada em carnívoros selvagens.',
    estimatedMinutes: 12,
    objectives: [
      'Identificar o mecanismo da Esteatose Hepática por dietas de sementes oleaginosas',
      'Compreender o papel da presa inteira versus carne desossada em carnívoros neotropicais',
      'Estruturar planos de transição alimentar segura para animais em cativeiro'
    ],
    concepts: ['concept_wild_diet_formulation', 'concept_cap_ratio_mbd'],
    sections: [
      {
        id: 'sec_nutri_diet_01',
        type: 'theory',
        title: 'Os 2 Maiores Crimes Nutricionais na Fauna Silvestre',
        contentMarkdown: `### 1. O Vício da Semente de Girassol em Psitacídeos

Muitos tutores e criadouros alimentam araras e papagaios quase que exclusivamente com sementes de girassol porque "as aves adoram". 

**A Realidade Nutricional da Semente de Girassol:**
- **Lipídios:** ~48% a 52% *(equivale a um humano almoçar batata frita todos os dias)*;
- **Relação Ca:P:** **1:8** *(catastrófica para o esqueleto)*;
- **Vitamina A:** Praticamente **zero** *(induzindo metaplasia escamosa respiratória)*;
- **Consequência:** **Lipidose Hepática (Esteatose)** com falência hepática, bico quebrado e morte súbita por ruptura de fígado gorduroso.

---

### 2. A Ilusão do Filé Bovino em Carnívoros

Alimentar um Lobo-guará, Onça ou Gavião apenas com "carne de primeira" (músculo desossado de boi ou frango) é um erro gravíssimo:
- O tecido muscular é rico em fósforo e extremamente pobre em cálcio (razão Ca:P de **1:20**!);
- Na natureza, o carnívoro ingere a **presa inteira** (vísceras, pelos/penas como fibra estrutural e, crucialmente, os **ossos triturados**, que fornecem todo o cálcio necessário).
- **Sem ossos ou suplementação de carbonato de cálcio, filhotes de carnívoros desenvolvem fraturas espontâneas ao simplesmente tentar caminhar.**
        `,
        causalChain: {
          cause: 'Administração de dietas monótonas ricas em lipídios (girassol) ou músculo estrito sem ossos',
          mechanism: 'Sobrecarga de triglicerídeos hepáticos associada a balanço de cálcio intensamente negativo',
          effect: 'Infiltração gordurosa de órgãos nobres e perda de sustentação mecânica esquelética',
          clinicalMeaning: 'Insuficiência hepática crônica, plumagem distrófica e fraturas patológicas de membros'
        }
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
