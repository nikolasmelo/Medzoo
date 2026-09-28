// src/learning/data/lessons/parasitologyLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const PARASITOLOGY_EXERCISES: Record<string, LearningExercise> = {
  ex_para_01: {
    id: 'ex_para_01',
    conceptId: 'concept_parasite_morphology_life_cycles',
    type: 'multiple_choice',
    prompt: 'Em um rebanho de ovinos Santa Inês no semiárido, vários cordeiros desmamados apresentam apatia profunda, mucosas conjuntivais brancas como porcelana (FAMACHA grau 5), edema gravitacional submandibular ("papo mole") e retardo no crescimento. Na necrópsia do abomaso de um animal recém-morto, observam-se milhares de pequenos vermes filiformes (1,5 a 3 cm) fixados à mucosa, cujas fêmeas exibem faixas espirais brancas (útero com ovos) entrelaçadas sobre o trato digestivo vermelho repleto de sangue (aspecto clássico de "poste de barbeiro"). Qual a identificação e patogenia desse helminto?',
    options: [
      {
        id: 'opt_1',
        text: 'Haemonchus contortus: nematódeo trichostrongilídeo com dente lanceta no abomaso. Cada parasita ingere até 0,05 mL de sangue por dia, provocando anemia hemorrágica espoliadora hipoalbuminêmica severa com queda na pressão oncótica e edema submandibular.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Haemonchus contortus é o parasita mais patogênico e letal da ovinocultura tropical. O formato de "poste de barbeiro" (barberpole worm) nas fêmeas adultas é inconfundível. Eles laceram a mucosa do abomaso com sua lanceta bucal para sugar sangue ativamente, levando à perda massiva de hemácias e proteínas plasmáticas (albumina), gerando edema de declive ("papo mole") e óbito por hipóxia anêmica.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Toxocara canis provocando ascaridíase obstrutiva mecânica no lúmen do abomaso.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Toxocara canis é nematódeo ascarídeo de cães (não de ovinos), não possui aspecto de poste de barbeiro e habita o intestino delgado, não o abomaso.',
        conceptualErrorCategory: 'species_host_confusion'
      },
      {
        id: 'opt_3',
        text: 'Fasciola hepatica: trematódeo achatado em forma de folha fixado aos canalículos biliares hepáticos.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A Fasciola hepatica é um trematódeo foliáceo que parasita o fígado e ductos biliares (provocando colangite crônica), e não nematódeo filiforme no abomaso.',
        conceptualErrorCategory: 'trematode_morphology_confusion'
      },
      {
        id: 'opt_4',
        text: 'Moniezia expansa: cestódeo em fita segmentado por proglotes que causa anemia hipercrômica pura.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Moniezia é uma tênia (cestódeo) longa e achatada que habita o intestino delgado e raramente causa anemia letal com papo mole.',
        conceptualErrorCategory: 'cestode_confusion'
      }
    ],
    pedagogicalExplanation: 'Haemonchus contortus possui boca armada com lanceta cortante e tropismo estrito pelo abomaso de ruminantes. A hematofagia voraz é a causa primária da anemia severa e hipoproteinemia.',
    causalChain: {
      cause: 'Ingestão de larvas infectantes (L3) de Haemonchus contortus nas pastagens úmidas',
      mechanism: 'Fixação de milhares de adultos na mucosa abomasal com lanceta bucal lacerando vasos submucosos',
      effect: 'Espoliação crônica massiva de eritrócitos e albumina sérica com queda da pressão oncótica plasmática',
      clinicalMeaning: 'Anemia grave (mucosa porcelana), edema submandibular em "papo mole" e óbito por hipóxia anóxica'
    }
  },

  ex_para_02: {
    id: 'ex_para_02',
    conceptId: 'concept_coproparasitology_diagnostics',
    type: 'multiple_choice',
    prompt: 'Para avaliar a carga parasitária de um rebanho caprino, o veterinário realiza a técnica de Gordon & Whitlock em Câmara de McMaster: pesa 2 gramas de fezes e dilui em 58 mL de solução hipersaturada de cloreto de sódio (densidade 1,20 g/mL). Ao examinar os dois retículos quadriculados da câmara sob objetiva de 10x no microscópio, conta um total de 36 ovos típicos de estrongilídeos (elípticos, casca lisa e fina com mórula interna). Qual é o resultado do OPG (Ovos por Grama de Fezes) e sua interpretação clínica?',
    options: [
      {
        id: 'opt_1',
        text: 'OPG = 1.800 (Cálculo: 36 ovos × fator 50). Representa carga parasitária alta e crítica (> 1.000 OPG em caprinos), indicativa de verminose clínica com alto risco de descompensação e contaminação extrema da pastagem.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! No protocolo canônico de McMaster com 2 g de fezes em 58 mL (volume total 60 mL) e dois retículos de 0,15 mL cada (volume total lido = 0,3 mL): Fator multiplicador = 60 / (2 × 0,3) = 50. Portanto: 36 × 50 = 1.800 OPG. Em pequenos ruminantes tropicais, contagens > 1.000 OPG indicam infecção clínica de alto risco exigindo intervenção estratégica imediata.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'OPG = 360 (Cálculo: 36 ovos × fator 10). Carga parasitária baixa e fisiológica sem risco para o rebanho.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O fator multiplicador padrão para 2g / 60mL em dois retículos é 50, e não 10; subestimar a contagem para 360 retardaria o tratamento de um rebanho criticamente infestado.',
        conceptualErrorCategory: 'calculation_factor_error'
      },
      {
        id: 'opt_3',
        text: 'OPG = 3.600 (Cálculo: 36 ovos × fator 100). Erro por contagem de apenas um retículo da câmara.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O fator 100 seria utilizado caso tivesse sido lido apenas um dos retículos da câmara; com a leitura de ambos os retículos somados, o fator é 50.',
        conceptualErrorCategory: 'grid_count_confusion'
      },
      {
        id: 'opt_4',
        text: 'OPG = 36 (Contagem direta sem necessidade de multiplicar pelo volume de diluição da câmara).',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O número de ovos vistos nos retículos representa uma alíquota microscópica de 0,3 mL e deve ser corrigido para a massa de 1 grama de fezes.',
        conceptualErrorCategory: 'raw_count_misattribution'
      }
    ],
    pedagogicalExplanation: 'A técnica de McMaster baseia-se na flutuação de ovos leves em solução densa e na contagem sob grade volumétrica padronizada. O cálculo de OPG = (ovos contados nos dois retículos) × 50.',
    causalChain: {
      cause: 'Presença de alta carga de fêmeas adultas férteis de nematódeos no trato digestivo de caprinos',
      mechanism: 'Eliminação fecal de milhares de ovos embrionados em mórula flutuantes em solução hipersaturada',
      effect: 'Contagem de 36 ovos na câmara de McMaster correspondendo a 1.800 OPG de fezes',
      clinicalMeaning: 'Infestação parasitária severa com alta contaminação do piquete e necessidade de vermifugação seletiva'
    }
  },

  ex_para_03: {
    id: 'ex_para_03',
    conceptId: 'concept_anthelmintic_resistance_management',
    type: 'multiple_choice',
    prompt: 'Em uma fazenda de ovinos com histórico de uso contínuo de Ivermectina 1% a cada 30 dias em 100% dos animais durante 5 anos seguidos, o rebanho continuou apresentando mortes por anemia. O veterinário realizou o Teste de Redução da Contagem de OPG Fecal (FECRT): a média pré-tratamento era de 2.200 OPG e, 14 dias após a aplicação de Ivermectina, a média foi de 1.950 OPG (redução de apenas 11,3%). Qual o diagnóstico epidemiológico e a conduta racional imediata?',
    options: [
      {
        id: 'opt_1',
        text: 'Resistência anti-helmíntica severa às lactonas macrocíclicas pela erradicação da população de refúgio. Conduta: suspender imediatamente a ivermectina, realizar teste com outras classes químicas (Levamisol ou Monepantel), adotar tratamento seletivo pelo método FAMACHA e rotação de piquetes.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! De acordo com a WAAVP, considera-se resistência anti-helmíntica quando a redução do OPG fecal (FECRT) aos 14 dias pós-tratamento for inferior a 95%. Vermifugar 100% do rebanho repetidamente destrói a "população em refúgio" (parasitas sensíveis que não foram expostos à droga), selecionando mutantes resistentes homozygous. A salvação do rebanho exige troca de princípio ativo testado e tratamento seletivo via FAMACHA (tratar apenas graus 4 e 5).',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Subdosagem acidental: a conduta correta é dobrar a dose de Ivermectina para 400 mcg/kg semanalmente.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Aumentar a dose de uma droga com eficácia comprovada de apenas 11% não reverte a resistência genética estabelecida e gera toxicidade desnecessária nos animais.',
        conceptualErrorCategory: 'escalation_misconception'
      },
      {
        id: 'opt_3',
        text: 'Reinfecção imediata em menos de 48 horas no pasto com larvas que já produziram ovos adultos no dia seguinte.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O período pré-patente (tempo da ingestão da L3 até a postura de ovos por fêmeas adultas) de Haemonchus é de aproximadamente 18 a 21 dias; ovos presentes aos 14 dias comprovam sobrevivência dos vermes ao tratamento.',
        conceptualErrorCategory: 'prepatent_period_confusion'
      },
      {
        id: 'opt_4',
        text: 'Falso-positivo causado por coprofagia natural de fezes de aves contendo coccídeos.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Ovos de estrongilídeos têm morfologia típica e o teste FECRT comprovou a ineficácia terapêutica das lactonas macrocíclicas na população de nematódeos do rebanho.',
        conceptualErrorCategory: 'coccidia_confusion'
      }
    ],
    pedagogicalExplanation: 'A resistência anti-helmíntica é um dos maiores desafios mundiais da medicina veterinária. O teste FECRT (< 95% de redução) diagnostica a falência da droga e o método FAMACHA preserva o refúgio genético de cepas sensíveis.',
    causalChain: {
      cause: 'Vermifugação indiscriminada supressiva de 100% do plantel com a mesma base farmacológica por anos',
      mechanism: 'Eliminação seletiva de vermes suscetíveis e eliminação total da população em refúgio',
      effect: 'Sobrevivência exclusiva de nematódeos com mutações genéticas de canais de cloro resistentes a avermectinas',
      clinicalMeaning: 'Eficácia do vermífugo cai para 11%, perpetuação de mortalidade no rebanho e necessidade de manejo integrado'
    }
  }
};

export const PARASITOLOGY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_parasitology_morphology',
    moduleId: 'mod_parasitology',
    title: 'Helmintos Gastrintestinais & Ciclos Biológicos',
    subtitle: 'Nematódeos, Cestódeos e Trematódeos: identificando as armas e ciclos de transmissão dos parasitas.',
    estimatedMinutes: 12,
    objectives: [
      'Diferenciar morfologicamente os três grandes filos de helmintos de interesse veterinário',
      'Identificar o Haemonchus contortus e compreender sua hematofagia voraz no abomaso',
      'Entender os ciclos biológicos diretos (monoxenos) vs indiretos (heteroxenos com hospedeiros intermediários)'
    ],
    concepts: ['concept_parasite_morphology_life_cycles'],
    sections: [
      {
        id: 'sec_para_morph_01',
        type: 'theory',
        title: 'Morfologia Comparada e Tropismo dos Helmintos Veterinários',
        contentMarkdown: `### O Triunfo dos Parasitas no Reino Animal

Os helmintos veterinários dividem-se em três grandes grupos taxonômicos:

\`\`\`mermaid
flowchart TD
    A["Helmintos de Importância Veterinária"] --> B["Nematódeos (Vermes Cilíndricos)"]
    A --> C["Platelmintos (Vermes Achatados)"]
    
    B --> D["Haemonchus contortus (Abomaso de Ruminantes: Hematófago)"]
    B --> E["Ancylostoma caninum (Intestino Delgado de Cães: Anemia)"]
    B --> F["Toxocara canis / cati (Ascarídeos com Migração Larval)"]
    
    C --> G["Cestódeos (Tênias em Fita: Proglotes)"]
    C --> H["Trematódeos (Foliáceos: Ventosas)"]
    
    G --> I["Dipylidium caninum (Hospedeiro intermediário: Pulga)"]
    G --> J["Moniezia expansa (Ácaros oribatídeos em pastos)"]
    H --> K["Fasciola hepatica (Ductos biliares: Caramujo Lymnaea)"]
\`\`\`

---

### O Flagelo do Abomaso: Haemonchus contortus

- **Localização:** Mucosa do abomaso de ovinos, caprinos e bovinos.
- **Características:** Fêmea com aspecto de poste de barbeiro (*barberpole*): o útero repleto de ovos enrola-se em espiral branca ao redor do intestino vermelho de sangue fresco.
- **Patogenia:** Cada verme adulto consome até **0,05 mL de sangue por dia**. Um ovino jovem com 2.000 vermes perde **100 mL de sangue diariamente**, evoluindo para anemia microcítica hipocrômica hiperaguda, perda de albumina sérica e acúmulo de líquido no espaço extravascular dependente da gravidade (**Edema Submandibular / Papo Mole**).
        `,
        causalChain: {
          cause: 'Pastoreio contínuo em áreas contaminadas por larvas L3 de Haemonchus contortus',
          mechanism: 'Laceracao mecânica contínua da mucosa abomasal e hematofagia voraz',
          effect: 'Anemia hemorrágica e hipoproteinemia acentuada com queda da pressão oncótica',
          clinicalMeaning: 'Edema submandibular, mucosas descoradas e óbito por falência anêmica'
        }
      },
      {
        id: 'sec_para_morph_02',
        type: 'exercise',
        title: 'Desafio Clínico: O "Poste de Barbeiro" e o Papo Mole do Cordeiro',
        exerciseId: 'ex_para_01'
      }
    ]
  },

  {
    id: 'lesson_parasitology_copro',
    moduleId: 'mod_parasitology',
    title: 'Diagnóstico Coproparasitológico & Contagem de OPG',
    subtitle: 'A ciência da câmara de McMaster: decifrando densidades, flutuação e contagens quantitativas.',
    estimatedMinutes: 14,
    objectives: [
      'Diferenciar métodos qualitativos (Willis e Hoffman) de métodos quantitativos (McMaster)',
      'Executar o cálculo de OPG (Ovos por Grama de Fezes) aplicando o fator de diluição correto',
      'Interpretar a carga parasitária para tomada de decisão terapêutica'
    ],
    concepts: ['concept_coproparasitology_diagnostics'],
    sections: [
      {
        id: 'sec_para_copro_01',
        type: 'theory',
        title: 'Metodologias Laboratoriais em Coproparasitologia',
        contentMarkdown: `### Flutuação vs Sedimentação: O Princípio Físico da Densidade

A identificação de formas parasitárias nas fezes depende da **densidade da solução utilizada**:
- **Solução Saturada de NaCl:** Densidade $\approx 1,20$ g/mL. Como a maioria dos ovos de nematódeos (estrongilídeos, ancilostomídeos) possui densidade entre $1,05$ e $1,15$ g/mL, eles **flutuam para o menisco superior** da solução (Técnica de Willis e McMaster).
- **Ovos Pesados (Trematódeos):** Ovos de *Fasciola hepatica* são operculados e muito densos ($> 1,30$ g/mL), não flutuando em salmoura comum. Devem ser diagnosticados por **Sedimentação Natural (Técnica de Hoffman, Pons & Janer)** ou centrifugo-flutuação com sulfato de zinco pesado.

---

### A Matemática da Câmara de McMaster

\`\`\`mermaid
flowchart LR
    A["2 gramas de Fezes"] --> B["Adição de 58 mL de Solução Hipersaturada (NaCl 1,20)"]
    B --> C["Volume Total da Suspensão: 60 mL"]
    C --> D["Homogeneização e Filtragem em Peneira / Gaze"]
    D --> E["Preenchimento dos 2 Retículos da Câmara de McMaster (0,3 mL total)"]
    E --> F["Contagem ao Microscópio em 10x"]
    F --> G["Fórmula: OPG = (Ovos Contados nos 2 Retículos) × 50"]
\`\`\`

> [!IMPORTANT]
> **Interpretação Sanitária do OPG em Pequenos Ruminantes:**
> - **OPG < 500:** Carga leve (animal convivendo com tolerância imunológica).
> - **OPG 500 a 1.000:** Carga moderada (monitorar FAMACHA e taxa de ganho de peso).
> - **OPG > 1.000:** Carga alta / clínica (risco iminente de descompensação e contaminação extrema dos piquetes).
        `,
        causalChain: {
          cause: 'Eliminação diária de ovos fecais por fêmeas férteis de nematódeos gastrintestinais',
          mechanism: 'Flutuação seletiva dos ovos elípticos de casca fina na câmara quadriculada de McMaster',
          effect: 'Contagem representativa do número de ovos por grama de fezes excretada',
          clinicalMeaning: 'Quantificação da carga parasitária para embasar o tratamento seletivo'
        }
      },
      {
        id: 'sec_para_copro_02',
        type: 'exercise',
        title: 'Desafio Laboratorial: A Contagem de OPG na Câmara de McMaster',
        exerciseId: 'ex_para_02'
      },
      {
        id: 'sec_para_copro_03',
        type: 'exercise',
        title: 'Desafio Epidemiológico: O Fracasso da Ivermectina e o Refúgio Genético',
        exerciseId: 'ex_para_03'
      }
    ]
  },

  {
    id: 'lesson_parasitology_fecal_bench',
    moduleId: 'mod_parasitology',
    title: 'Manejo Antiparasitário Estratégico & Bancada Coproparasitológica',
    subtitle: 'Laboratório interativo: ajustando o microscópio, contando ovos na câmara de McMaster e salvando o plantel.',
    estimatedMinutes: 16,
    objectives: [
      'Operar o microscópio óptico e focar ovos de parasitas nos retículos da câmara de McMaster',
      'Calcular o OPG em tempo real a partir de amostras de fezes ovinas, equinas e caninas',
      'Aplicar o escore FAMACHA (graus 1 a 5) e selecionar os animais prioritários para tratamento'
    ],
    concepts: ['concept_anthelmintic_resistance_management', 'concept_coproparasitology_diagnostics'],
    sections: [
      {
        id: 'sec_para_bench_01',
        type: 'theory',
        title: 'O Método FAMACHA© e o Conceito de Refúgio',
        contentMarkdown: `### Como Salvar os Anti-helmínticos da Inutilidade

O uso indiscriminado de vermífugos em calendário cego (ex.: "tratar todo mundo a cada 30 dias") exterminou a eficácia das lactonas macrocíclicas e benzimidazóis em propriedades do mundo todo.

**O Conceito de Refúgio:**
- A **população em refúgio** é a fração de parasitas que **NÃO foi exposta ao medicamento** (larvas no pasto + vermes em animais que não foram tratados).
- Esses parasitas mantêm os genes normais de suscetibilidade aos anti-helmínticos. Quando cruzam com os raros vermes resistentes sobreviventes, diluem os alelos de resistência e preservam a droga viável por décadas!

---

### A Escala do Cartão FAMACHA©

\`\`\`mermaid
flowchart TD
    A["Eversão da Mucosa Conjuntival Ocular Inferior Sob Luz Natural"] --> B["Comparação com o Cartão de Cores FAMACHA (1 a 5)"]
    B --> C["Grau 1: Vermelho-Vivo Ótimo (Hematócrito > 28%) -> NÃO TRATAR"]
    B --> D["Grau 2: Róseo-Vermelho Normal (Hematócrito 23-27%) -> NÃO TRATAR"]
    B --> E["Grau 3: Róseo Pálido Limítrofe (Hematócrito 18-22%) -> OBSERVAR"]
    B --> F["Grau 4: Pálido Anêmico (Hematócrito 13-17%) -> TRATAR COM ANTI-HELMÍNTICO"]
    B --> G["Grau 5: Branco Porcelana Crítico (Hematócrito < 12%) -> TRATAR IMEDIATAMENTE + SUPORTE"]
\`\`\`
        `,
        causalChain: {
          cause: 'Adoção do tratamento seletivo direcionado pelo método FAMACHA em rebanhos',
          mechanism: 'Tratamento exclusivo de indivíduos anêmicos (graus 4 e 5), poupando animais resilientes (graus 1 e 2)',
          effect: 'Preservação da população de parasitas sensíveis em refúgio no pasto',
          clinicalMeaning: 'Prevenção sustentável da resistência anti-helmíntica e controle sanitário eficaz'
        }
      },
      {
        id: 'sec_para_bench_02',
        type: 'lab',
        title: 'Laboratório Interativo: Bancada de Microscopia Coproparasitológica & OPG (Parasitology Bench)',
        description: 'Assuma o microscópio coproparasitológico. Navegue pelos campos da Câmara de McMaster, foque nos ovos de Haemonchus, Toxocara e Ancylostoma, conte os ovos nos retículos para deduzir o OPG e defina o tratamento seletivo com base no cartão FAMACHA!',
        labType: 'parasitology_fecal_bench',
        labConfig: {
          chamberType: 'McMaster Dupla (0.15 mL + 0.15 mL)'
        }
      }
    ]
  }
];
