// src/learning/data/lessons/agrostologyLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const AGROSTOLOGY_EXERCISES: Record<string, LearningExercise> = {
  ex_agro_01: {
    id: 'ex_agro_01',
    conceptId: 'concept_forage_botany',
    type: 'multiple_choice',
    prompt: 'Uma Anta brasileira (Tapirus terrestris, 220 kg — herbívoro fermentador pós-gástrico cecocólico) teve sua dieta alterada abruptamente: o feno fibroso de Tifton (FDN 65%) foi substituído por forragem verde tenra muito jovem (FDN 35%, rica em carboidratos solúveis). O animal desenvolveu timpanismo agudo, dor em cólica e fezes pastosas fétidas. Qual é a causa fisiopatológica desse distúrbio?',
    options: [
      {
        id: 'opt_1',
        text: 'Fermentação cecal hiperaguda dos carboidratos solúveis com queda rápida do pH cecocólico, disbiose e acúmulo excessivo de gás.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A FDN (Fibra em Detergente Neutro) é a guardiã do trânsito digestivo em herbívoros monogástricos. Forragens muito tenras com baixo FDN e excesso de amido/açúcares solúveis chegam ao ceco em grande quantidade, provocando fermentação bacteriana explosiva, acidose cecal láctica e timpanismo por sobrecarga de gases.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Obstrução mecânica do esôfago causada pelo comprimento excessivo das folhas.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Folhas tenras jovens são macias e facilmente mastigadas; a patologia é fermentativa cecocólica e não mecânica esofágica.',
        conceptualErrorCategory: 'mechanical_misattribution'
      },
      {
        id: 'opt_3',
        text: 'Deficiência primária de cálcio que paralisou a motilidade do estômago pré-cecal.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A hipocalcemia aguda causa atonia generalizada, mas a apresentação clássica pós-mudança para forragem jovem é a disbiose fermentativa cecal.',
        conceptualErrorCategory: 'mineral_confusion'
      },
      {
        id: 'opt_4',
        text: 'Intoxicação aguda por taninos condensados presentes na gramínea jovem.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Gramíneas tenras de pastagem cultivada não contêm teores letais de taninos condensados; o fator desencadeante foi a deficiência de fibra estrutural efetiva (FDN).',
        conceptualErrorCategory: 'toxic_misattribution'
      }
    ],
    pedagogicalExplanation: 'A Fibra em Detergente Neutro (FDN) regula o enchimento físico e a taxa de passagem digestiva. Herbívoros silvestres requerem um mínimo de fibra estrutural para manter o epitélio e a microbiota cecocólica saudáveis.',
    causalChain: {
      cause: 'Fornecimento de forragem tenra com FDN excessivamente baixo e carboidratos não-estruturais elevados',
      mechanism: 'Aporte massivo de substrato fermentável ao ceco ultrapassando a capacidade tampão fisiológica',
      effect: 'Proliferação de bactérias amilolíticas produtoras de D-lactato com queda do pH cecal e lise da flora gram-negativa',
      clinicalMeaning: 'Timpanismo cecocólico, cólica dolorosa, translocação de endotoxinas e risco iminente de choque séptico'
    }
  },

  ex_agro_02: {
    id: 'ex_agro_02',
    conceptId: 'concept_grazing_management',
    type: 'multiple_choice',
    prompt: 'Em um piquete de Panicum maximum cv. Mombaça manejado sob pastejo rotacionado com novilhos de corte, o gerente da fazenda permitiu que os animais entrassem com dossel de 125 cm (altura crítica recomendada: 90 cm) e saíssem com resíduo de 20 cm (altura recomendada de resíduo: 40-50 cm). Quais são as consequências agronômicas e nutricionais imediatas desse superpastejo com desfolha excessiva?',
    options: [
      {
        id: 'opt_1',
        text: 'Redução drástica das reservas de carboidratos solúveis na base dos colmos, eliminação de meristemas apicais com atraso no rebrote e perda do valor nutricional pela lignificação do estrato inferior.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! O capim Mombaça atinge o IAF crítico (95% de interceptação luminosa) aos 90 cm. Ao ultrapassar esse ponto, as folhas basais amarelecem e lignificam. O resíduo excessivamente baixo (20 cm) remove as gemas basais e exaure os carboidratos de reserva do colmo, atrasando o rebrote e permitindo infestação por invasoras.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Aumento expressivo do ganho médio diário por estimulação do crescimento de novas leguminosas espontâneas.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O superpastejo severo reduz a massa de forragem de qualidade e estressa a pastagem, diminuindo o ganho em peso dos animais.',
        conceptualErrorCategory: 'productivity_misconception'
      },
      {
        id: 'opt_3',
        text: 'Inibição imediata da fotossíntese por acúmulo excessivo de gás carbônico na camada de ar superficial.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A inibição do rebrote decorre da destruição de área foliar remanescente e gemas vegetativas, não de concentração atmosférica gasosa.',
        conceptualErrorCategory: 'photosynthesis_confusion'
      },
      {
        id: 'opt_4',
        text: 'Prevenção de laminite e timpanismo sem qualquer efeito sobre a longevidade do capim.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O superpastejo prolongado degrada a pastagem em poucos ciclos, expondo o solo à erosão e compactação mecânica.',
        conceptualErrorCategory: 'pasture_persistence_error'
      }
    ],
    pedagogicalExplanation: 'O manejo da desfolha deve respeitar a altura de entrada (IAF crítico de 95% de interceptação luminosa) e a altura de saída (resíduo que preserva reservas de colmo e meristemas de rebrote).',
    causalChain: {
      cause: 'Rebaixamento forçado do capim Mombaça para resíduo de 20 cm associado à entrada tardia aos 125 cm',
      mechanism: 'Depleção severa dos carboidratos não-estruturais de reserva e destruição de gemas meristemáticas',
      effect: 'Atraso na velocidade de rebrotação foliar e queda no teor de proteína bruta da dieta pelo consumo de colmos velhos',
      clinicalMeaning: 'Queda do ganho de peso corporal do lote, degradação do estande de forragem e invasão por plantas indesejáveis'
    }
  },

  ex_agro_03: {
    id: 'ex_agro_03',
    conceptId: 'concept_agrostology_toxic_plants',
    type: 'multiple_choice',
    prompt: 'Durante a movimentação de um lote de 40 bovinos em uma fazenda no Mato Grosso, alguns animais que pastavam próximo à cerca de uma mata ciliar subitamente apresentam tremores musculares, queda em decúbito lateral, mugidos, opistótono, movimentos de pedalagem e morrem em menos de 10 minutos após serem tocados. Na necropsia preliminar não há lesões macroscópicas marcantes, exceto discreto ingurgitamento venoso. Perto da cerca encontram-se arbustos de Palicourea marcgravii ("cafezinho") desfolhados. Qual o princípio ativo tóxico e seu mecanismo bioquímico letal?',
    options: [
      {
        id: 'opt_1',
        text: 'Monofluoroacetato de Sódio: atua como substrato suicida que se condensa com oxaloacetato formando fluorcitrato, o qual bloqueia irreversivelmente a enzima aconitase no ciclo de Krebs mitocondrial, cessando a síntese de ATP celular.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A Palicourea marcgravii é a planta tóxica mais importante do Brasil, causadora de "morte súbita" em bovinos. O monofluoroacetato forma fluorcitrato que inibe a aconitase mitocondrial. Ao exercitarem-se (como no toque do rebanho), a demanda energética de ATP do miocárdio não é suprida e os animais entram em fibrilação ventricular e colapso cardíaco agudo.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Glicosídeos cianogênicos que oxidam o ferro da hemoglobina a íon férrico Fe3+, gerando meta-hemoglobinemia marrom-chocolate.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A meta-hemoglobinemia marrom é causada por nitratos/nitritos; Palicourea não contém glicosídeos cianogênicos e seu mecanismo é o bloqueio do ciclo de Krebs pelo fluoroacetato.',
        conceptualErrorCategory: 'mechanism_confusion'
      },
      {
        id: 'opt_3',
        text: 'Alcaloides pirrolizidínicos que causam megalocitose hepatocitária crônica e ascite por hipertensão portal.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Alcaloides pirrolizidínicos (Senecio spp.) causam doença hepática crônica de curso lento ao longo de semanas/meses, e não morte súbita em 10 minutos.',
        conceptualErrorCategory: 'chronic_vs_acute_toxic'
      },
      {
        id: 'opt_4',
        text: 'Esporidesmina fúngica que oclui mecanicamente a artéria pulmonar principal.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A esporidesmina causa colangite hepática e fotossensibilização, não tendo relação com a morte súbita cardíaca da Palicourea.',
        conceptualErrorCategory: 'pathology_misattribution'
      }
    ],
    pedagogicalExplanation: 'A Palicourea marcgravii possui toxicidade extrema e efeito cumulativo. A morte súbita é deflagrada pelo esforço físico, quando o coração falha por ausência de ATP decorrente do bloqueio da aconitase pelo fluorcitrato.',
    causalChain: {
      cause: 'Ingestão de folhas jovens de Palicourea marcgravii ("cafezinho") contendo ácido monofluoroacético',
      mechanism: 'Síntese letal de fluorcitrato que inibe competitivamente a enzima aconitase no ciclo do ácido cítrico',
      effect: 'Paralisação da fosforilação oxidativa mitocondrial com depleção aguda de ATP no miocárdio sob esforço',
      clinicalMeaning: 'Arritmia ventricular fulminante, convulsão, colapso circulatório e morte súbita em minutos'
    }
  },

  ex_agro_04: {
    id: 'ex_agro_04',
    conceptId: 'concept_pasture_toxicology',
    type: 'multiple_choice',
    prompt: 'Um lote de 60 borregos desmamados mantido em pasto maduro de Brachiaria decumbens com acúmulo de palhada morta e umidade elevada apresenta apatia, icterícia conjuntival, edema facial exuberante e dermatite necrosante em orelhas e focinho despigmentados. Na bioquímica sérica: GGT = 320 U/L (ref: 20-50 U/L) e Bilirrubina Total = 4,2 mg/dL. Qual a patogenia da fotossensibilização hepatógena secundária nesse cenário?',
    options: [
      {
        id: 'opt_1',
        text: 'Esporidesmina do fungo saprófita Pithomyces chartarum causa colangioepatite necrosante; a retenção biliar impede a eliminação de filoeritrina, que se acumula no sangue e reage com a luz solar na derme despigmentada.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! A filoeritrina é um metabólito normal da clorofila gerado pelos micróbios ruminais e excretado exclusivamente na bile. A micotoxina esporidesmina provoca necrose e oclusão dos ductos biliares (colangite), fazendo a filoeritrina transbordar para a circulação periférica. Ao atingir a pele clara sob raios ultravioleta solares, a filoeritrina ativa radicais livres citotóxicos, causando dermatite fotodinâmica com necrose tecidual.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Ação primária de substâncias fluorescentes fotoativas absorvidas diretamente da folha que reagem na pele sem envolvimento hepático.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A fotossensibilização primária (ex: Hypericum perforatum) não causa colangite nem elevação de GGT e bilirrubina; no caso da Brachiaria, a lesão é secundária (hepatógena).',
        conceptualErrorCategory: 'primary_vs_secondary_photosensitization'
      },
      {
        id: 'opt_3',
        text: 'Reação alérgica mediada por IgE contra a proteína do pólen da gramínea com liberação de histamina.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A lesão não é alérgica dérmica; a icterícia marcante e elevação drástica de GGT comprovam dano biliar prévio à necrose solar.',
        conceptualErrorCategory: 'allergic_confusion'
      },
      {
        id: 'opt_4',
        text: 'Intoxicação por chumbo metálico acumulado nas raízes da pastagem que precipita na derme.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O quadro de dermatite solar restrita a áreas brancas com colangite é patognomônico de fotossensibilização hepatógena por filoeritrina.',
        conceptualErrorCategory: 'heavy_metal_confusion'
      }
    ],
    pedagogicalExplanation: 'A fotossensibilização hepatógena secundária requer: digestão de clorofila (gerando filoeritrina) + lesão colestática obstrutiva (esporidesmina/protodioscina) + radiação solar UV em pele despigmentada.',
    causalChain: {
      cause: 'Ingestão de esporidesmina de Pithomyces chartarum presente na serapilheira úmida de Brachiaria',
      mechanism: 'Necrose inflamatória dos ductos biliares intra-hepáticos com colestase severa',
      effect: 'Incapacidade hepática de excretar filoeritrina com depósito dérmico de moléculas fotossensibilizantes',
      clinicalMeaning: 'Dermatite solar necrosante, prurido doloroso, icterícia colestática e morte por falência hepatobiliar'
    }
  },

  ex_agro_05: {
    id: 'ex_agro_05',
    conceptId: 'concept_pasture_toxicology',
    type: 'multiple_choice',
    prompt: 'Durante um período de rebrota rápida de pastagem de Sorghum bicolor após seca prolongada, vários animais começam a cair em convulsões 20 minutos após o início do pastejo. O veterinário faz punção venosa e o sangue tem coloração VERMELHO-CEREJA VIVO. Qual teste laboratorial rápido de campo confirma a suspeita de Ácido Cianídrico (HCN) na forrageira e qual o mecanismo bioquímico do antídoto de eleição?',
    options: [
      {
        id: 'opt_1',
        text: 'Teste do Papel de Picro-sódico (Guignard): o papel amarelo vira vermelho-tijolo na presença de HCN gasoso. O tratamento é Nitrito de Sódio (gera meta-hemoglobina que atrai o cianeto) seguido de Tiossulfato de Sódio (enzima rodanase converte em tiocianato atóxico).',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! O teste de Guignard usa papel de filtro impregnado com ácido pícrico e carbonato de sódio; o cianeto volátil reduz o picrato amarelo a isopurpurato vermelho-tijolo em minutos. O antídoto clássico associa Nitrito de Sódio 20% (10-20 mg/kg IV) e Tiossulfato de Sódio 20% (500 mg/kg IV), regenerando a citocromo oxidase mitocondrial.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Teste de azul de metileno em lâmina: o sangue torna-se incolor. O antídoto de eleição é vitamina C oral em alta dosagem.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O azul de metileno a 1% é o tratamento de meta-hemoglobinemia por nitritos (sangue marrom), e não o teste de bancada ou antídoto primário para cianeto.',
        conceptualErrorCategory: 'antidote_misattribution'
      },
      {
        id: 'opt_3',
        text: 'Teste da urease de Conway: precipita cristais de estruvita. O antídoto é ácido clorídrico diluído por via ruminal.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Conway avalia nitrogênio amoniacal no timpanismo ou intoxicação por ureia, sem relação com cianogênese.',
        conceptualErrorCategory: 'ammonia_confusion'
      },
      {
        id: 'opt_4',
        text: 'Cromatografia de camada delgada para aflatoxinas. O antídoto é sulfato de atropina em dose cumulativa.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Aflatoxinas causam dano hepático subagudo/crônico; atropina é antídoto de organofosforados/carbamatos e não tem eficácia sobre asfixia por HCN.',
        conceptualErrorCategory: 'toxicology_class_confusion'
      }
    ],
    pedagogicalExplanation: 'O cianeto inibe a citocromo c oxidase mitocondrial, impedindo as células de utilizarem o oxigênio que permanece retido no sangue venoso (vermelho-cereja). O teste de Guignard confirma a liberação de HCN e a associação nitrito + tiossulfato é a terapia antídota salvadora.',
    causalChain: {
      cause: 'Ingestão de broto tenro de sorgo contendo o glicosídeo cianogênico dhurrina',
      mechanism: 'Liberação de HCN livre que inibe a citocromo c oxidase na cadeia respiratória mitocondrial',
      effect: 'Incapacidade celular de extrair O2 com sangue venoso superoxigenado e asfixia tecidual generalizada',
      clinicalMeaning: 'Taquipneia paroxística, convulsão e óbito por parada cardiorrespiratória em menos de 1 hora'
    }
  }
};

export const AGROSTOLOGY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_agrostology_bromatology',
    moduleId: 'mod_agrostology',
    title: 'Morfologia de Forrageiras & Análise de Van Soest (FDN/FDA)',
    subtitle: 'Gramíneas vs Leguminosas, fisiologia C3/C4 e o papel vital da fibra estrutural efetiva.',
    estimatedMinutes: 20,
    objectives: [
      'Diferenciar morfologicamente e nutricionalmente Gramíneas (Poaceae) e Leguminosas (Fabaceae)',
      'Dominar o sistema analítico de Van Soest: FDN, FDA, celulose, hemicelulose e lignina',
      'Prevenir acidose e timpanismo cecocólico por déficit de fibra estrutural em herbívoros'
    ],
    concepts: ['concept_forage_botany'],
    sections: [
      {
        id: 'sec_agro_brom_01',
        type: 'theory',
        title: 'Morfologia Forrageira e Fisiologia Fotossintética C3 vs C4',
        contentMarkdown: `# Aula Universitária: Bromatologia Forrageira & Fracionamento de Fibras

> 📖 Referência Canônica: Van Soest, P. J. *Nutritional Ecology of the Ruminant*, 2nd ed. Cornell University Press. McDonald, P. et al. *Animal Nutrition*, 8th ed. Pearson. Radostits, O. M. et al. *Clínica Veterinária*, 9ª ed. Guanabara Koogan.

Na nutrição e agrostologia de herbívoros (tanto ruminantes domésticos quanto silvestres monogástricos cecocólicos como antas e capivaras), a forragem é o alicerce metabólico de sustentação da microbiota simbiótica.

### 1. Plantas C3 vs Plantas C4
- **Plantas C3 (Leguminosas como Alfafa, Trevo e gramíneas de clima temperado como Azevém e Aveia):** Realizam o ciclo de Calvin direto. Possuem menor proporção de tecidos de sustentação esclerosados, folhas com menor teor de parede celular (FDN 35% a 50%) e alta densidade de proteína bruta (PB > 18% a 24%).
- **Plantas C4 (Gramíneas tropicais como *Brachiaria*, *Panicum*, *Cynodon*, *Andropogon*):** Apresentam anatomia foliar do tipo *Kranz* com bainha vascular espessa. Adaptadas a altas temperaturas e radiação solar, possuem maior taxa de conversão fotossintética, mas acumulam maiores teores de parede celular fibrosa (FDN frequentemente > 60% a 75%), requerendo maior mastigação e ruminação.

---

### 2. O Sistema Van Soest de Fracionamento de Fibras

\`\`\`mermaid
flowchart TD
    A["Massa Seca da Forrageira"] --> B["Conteúdo Celular (Açúcares Solúveis, Amido, Proteína Verdadeira - Digestão >90%)"]
    A --> C["Parede Celular: FDN (Fibra em Detergente Neutro)"]
    C --> D["Hemicelulose (Digestível por Bactérias Celulolíticas)"]
    C --> E["FDA (Fibra em Detergente Ácido)"]
    E --> F["Celulose (Digestibilidade Variável)"]
    E --> G["Lignina (Polímero Fenólico Totalmente Indigestível)"]
\`\`\`

> [!IMPORTANT]
> **A Dinâmica da FDN e FDA na Clínica Nutricional:**
> - **FDN (Fibra em Detergente Neutro):** Correlaciona-se inversamente com o **Consumo Voluntário de Alimento**. Se o FDN for excessivamente elevado (> 70%), o rúmen ou ceco atinge repleção física precoce, limitando o consumo de energia.
> - **FDA (Fibra em Detergente Ácido):** Correlaciona-se inversamente com a **Digestibilidade Real**. Quanto maior o FDA (rico em lignina), menor a proporção de energia digestível aproveitada pelo animal.
> - **FDNef (FDN Efetivo):** Fração da fibra com tamanho de partícula superior a 1,2-2,0 cm que estimula a mastigação, a ruminação e a secreção salivar rica em tampões bicarbonato e fosfato ($pH > 6,2$).`,
        causalChain: {
          cause: 'Fornecimento de pastagem excessivamente jovem com FDN < 35% sem fibra estrutural longa',
          mechanism: 'Aporte explosivo de carboidratos solúveis ao ceco/rúmen com queda abrupta do pH (< 5,5)',
          effect: 'Proliferação de Streptococcus bovis produtor de D-lactato e lise de bactérias celulolíticas',
          clinicalMeaning: 'Acidose láctica aguda, atonia motora, timpanismo cecal/ruminal e choque endotóxico'
        }
      },
      {
        id: 'sec_agro_brom_02',
        type: 'exercise',
        title: 'Verificação Conceitual: O Timpanismo Cecal da Anta Brasileira',
        exerciseId: 'ex_agro_01'
      }
    ]
  },

  {
    id: 'lesson_agrostology_grazing_management',
    moduleId: 'mod_agrostology',
    title: 'Manejo de Pastagens & Fisiologia do Pastejo',
    subtitle: 'Curva de acúmulo de biomassa, IAF crítico, lotação rotacionada e conservação (silagem e fenação).',
    estimatedMinutes: 22,
    objectives: [
      'Analisar a curva sigmoide de crescimento forrageiro e identificar o ponto ótimo de colheita',
      'Definir alturas críticas de entrada e saída (resíduo) para gramíneas forrageiras tropicais',
      'Compreender os princípios de conservação por fenação (umidade < 15%) e ensilagem (fermentação láctica)'
    ],
    concepts: ['concept_grazing_management'],
    sections: [
      {
        id: 'sec_agro_graz_01',
        type: 'theory',
        title: 'Fisiologia da Desfolha e Dinâmica do Dóssel Forrageiro',
        contentMarkdown: `# Aula Universitária: Manejo de Pastagens, Dóssel Forrageiro & Conservação

> 📖 Referência Canônica: Hodgson, J. *Grazing Management: Science into Practice*, Longman. Da Silva, S. C. et al. *Manejo de Pastagens Baseado em Conceitos Ecofisiológicos*, ESALQ/USP.

O manejo eficiente da pastagem busca interceptar a máxima quantidade de radiação solar antes que as folhas inferiores comecem a morrer por senescência:

### 1. O Conceito de Índice de Área Foliar (IAF) Crítico
- Quando o dossel atinge **95% de interceptação luminosa (IL 95%)**, a pastagem alcança o ápice de produção de tecido foliar novo com alta digestibilidade e teor proteico ótimo.
- Se o pastejo for postergado além desse ponto, ocorre auto-sombreamento das folhas inferiores, acelerando a **senescência, amarelecimento e lignificação** do estrato inferior, com acúmulo de colmos fibrosos e queda acentuada do ganho de peso.

\`\`\`mermaid
flowchart LR
    A["Rebrotação Inicial: Mobilização de Reservas de Carboidratos do Colmo"] --> B["Fase Exponencial: IAF Ótimo (IL 95%) -> PONTO IDEAL DE ENTRADA"]
    B --> C["Fase de Platô: Auto-sombreamento Basal, Lignificação e Senescência"]
    C --> D["Pastejo Desregulador: Queda na Taxa de Lotação e Desgaste das Touceiras"]
\`\`\`

---

### 2. Alturas de Entrada e Resíduo para as Principais Gramíneas Tropicais

| Espécie Forrageira | Altura de Entrada (cm) | Altura de Resíduo/Saída (cm) | Justificativa Fisiológica |
|---|---|---|---|
| **Panicum maximum cv. Mombaça** | 90 cm | 40-50 cm | Touceira ereta; resíduo alto preserva gemas basais e evita degradação |
| **Panicum maximum cv. Tanzânia** | 70 cm | 30-35 cm | Porte intermediário; alta proporção de folhas |
| **Brachiaria brizantha cv. Marandu** | 30-35 cm | 15-20 cm | Hábito cespitoso; excelente resistência sob pastejo rotacionado |
| **Brachiaria decumbens** | 20-25 cm | 10-15 cm | Hábito decumbente; tolera pastejo mais baixo e solos ácidos |
| **Cynodon dactylon (Tifton 85)** | 20-25 cm | 10 cm | Estolonífera rizomatosa; altíssima densidade foliar |

---

### 3. Fenação vs Ensilagem: As Regras de Ouro da Conservação
- **Fenação (Feno):** Desidratação rápida no campo até atingir **umidade inferior a 15%**. Se enfardado com umidade superior a 18-20%, ocorrem aquecimento espontâneo (reação de Maillard com perda de lisina) e proliferação de fungos micotoxigênicos (*Aspergillus flavus*).
- **Ensilagem (Silagem):** Conservação por anaerobiose estrita e fermentação bacteriana láctica. Requer picagem adequada (1 a 2 cm), compactação densa (> 600 kg/m³) e fechamento hermético para rápida queda do pH para **3,8 a 4,2**.`,
        causalChain: {
          cause: 'Superpastejo severo com resíduo abaixo de 10 cm em capim cespitoso de porte alto',
          mechanism: 'Remoção forçada das gemas de rebrotação basais e esgotamento total dos carboidratos não-estruturais',
          effect: 'Queda drástica no vigor vegetativo com aparecimento de manchas de solo exposto',
          clinicalMeaning: 'Degradação da pastagem, erosão do solo, proliferação de invasoras e subnutrição crônica do plantel'
        }
      },
      {
        id: 'sec_agro_graz_02',
        type: 'exercise',
        title: 'Desafio Prático: Superpastejo e Desfolha Excessiva no Capim Mombaça',
        exerciseId: 'ex_agro_02'
      }
    ]
  },

  {
    id: 'lesson_agrostology_toxic_plants',
    moduleId: 'mod_agrostology',
    title: 'Plantas Tóxicas de Ação Rápida & Morte Súbita',
    subtitle: 'Palicourea marcgravii (Monofluoroacetato), Sorgo cianogênico e toxicose por Nitratos/Nitritos.',
    estimatedMinutes: 25,
    objectives: [
      'Compreender a fisiopatologia do monofluoroacetato de sódio na Palicourea marcgravii',
      'Diferenciar asfixia histotóxica por Cianeto (HCN) de meta-hemoglobinemia por Nitritos',
      'Reconhecer o padrão macroscópico da coloração de sangue venoso para conduta emergencial'
    ],
    concepts: ['concept_agrostology_toxic_plants', 'concept_pasture_toxicology'],
    sections: [
      {
        id: 'sec_agro_toxplants_01',
        type: 'theory',
        title: 'Morte Súbita e Asfixias Toxicológicas em Pastagens',
        contentMarkdown: `# Aula Universitária: Toxicologia de Pastagens — Asfixia Celular e Morte Súbita

> 📖 Referência Canônica: Tokarnia, C. H. et al. *Plantas Tóxicas do Brasil*, 2ª ed. Editora Helianthus. Riet-Correa, F. et al. *Doenças de Ruminantes e Equinos*, 3ª ed. Pallotti. Radostits, O. M. *Veterinary Medicine*, 10th ed. Saunders.

As intoxicações por plantas representam uma das principais causas de perdas econômicas e mortes súbitas em ruminantes e equinos a pasto no Brasil:

### 1. *Palicourea marcgravii* ("Cafezinho", "Erva-de-rato"): A Campeã de Mortes
- **Princípio Ativo:** **Monofluoroacetato de Sódio**. Altamente estável, solúvel e potente.
- **Mecanismo Fisiopatológico (Síntese Suicida):**
  1. O monofluoroacetato é ativado a fluoroacetil-CoA e entra no Ciclo de Krebs mitocondrial.
  2. A enzima citrato-sintase condensa fluoroacetil-CoA com oxaloacetato, gerando **Fluorcitrato**.
  3. O fluorcitrato liga-se irreversivelmente ao sítio ativo da enzima **Aconitase**, bloqueando a conversão de citrato em isocitrato.
  4. Bloqueio total da fosforilação oxidativa mitocondrial e depleção imediata de ATP nos tecidos de alta demanda (coração e encéfalo).
- **Quadro Clínico:** Morte súbita desencadeada pelo exercício físico! O animal parece sadio enquanto descansa, mas ao ser tocado ou movimentado, desenvolve tremores, taquicardia extrema, mugidos, decúbito com movimentos de pedalagem e óbito por fibrilação ventricular em 5 a 15 minutos.

---

### 2. Diagnóstico Diferencial Toxicológico Visual do Sangue

\`\`\`mermaid
flowchart TD
    A["Suspeita de Asfixia Toxicológica em Pastagem"] --> B{"Inspeção Visual da Coloração do Sangue Venoso"}
    B -->|Sangue VERMELHO-CEREJA Brilhante| C["Intoxicação por Ácido Cianídrico (HCN)"]
    B -->|Sangue MARROM-ESCURO Cor de Chocolate| D["Intoxicação por Nitratos e Nitritos"]
    
    C --> E["Mecanismo: HCN liga-se ao Fe3+ da Citocromo Oxidase; O2 permanece preso à hemoglobina sem ser consumido pelas células"]
    D --> F["Mecanismo: Nitrito oxida o Fe2+ da Hemoglobina a Fe3+ (Meta-hemoglobina), incapacitada de transportar O2"]
\`\`\`

> [!WARNING]
> **Condutas Emergenciais e Antídotos Específicos:**
> - **Cianeto (HCN):** Associação de **Nitrito de Sódio 20%** (10 a 20 mg/kg IV lenta) + **Tiossulfato de Sódio 20%** (500 mg/kg IV). O nitrito forma meta-hemoglobina que sequestra o cianeto; o tiossulfato fornece enxofre para a enzima hepática rodanase converter cianeto em tiocianato atóxico excretado na urina.
> - **Nitratos/Nitritos:** **Azul de Metileno a 1%** (1 a 2 mg/kg IV em solução salina lenta). O azul de metileno atua como carreador eletrônico que reduz a meta-hemoglobina ($Fe^{3+}$) de volta a hemoglobina funcional ($Fe^{2+}$).`,
        causalChain: {
          cause: 'Ingestão acidental de Palicourea marcgravii associada ao estresse de movimentação do rebanho',
          mechanism: 'Formação de fluorcitrato mitocondrial com inibição irreversível da enzima aconitase no ciclo de Krebs',
          effect: 'Depleção aguda de ATP com falência eletromecânica dos cardiomiócitos ventriculares',
          clinicalMeaning: 'Arritmia ventricular fulminante, colapso circulatório agudo e morte súbita em minutos'
        }
      },
      {
        id: 'sec_agro_toxplants_02',
        type: 'exercise',
        title: 'Caso Clínico: A Morte Súbita pelo Cafezinho na Mata Ciliar',
        exerciseId: 'ex_agro_03'
      }
    ]
  },

  {
    id: 'lesson_agrostology_toxicology',
    moduleId: 'mod_agrostology',
    title: 'Complexo Brachiaria & Fotossensibilização Hepatógena',
    subtitle: 'Esporidesmina do Pithomyces chartarum, saponinas litogênicas e a retenção dérmica de filoeritrina.',
    estimatedMinutes: 24,
    objectives: [
      'Compreender a cascata patogênica da fotossensibilização hepatógena secundária',
      'Distinguir o papel da esporidesmina fúngica e das saponinas esteroidais (protodioscina) da Brachiaria',
      'Manejar lotes acometidos retirando-os do sol e administrando protetores hepáticos e suporte'
    ],
    concepts: ['concept_pasture_toxicology', 'concept_agrostology_brachiaria_complex'],
    sections: [
      {
        id: 'sec_agro_tox_01',
        type: 'theory',
        title: 'A Fisiopatologia da Fotossensibilização Hepatógena Secundária',
        contentMarkdown: `# Aula Universitária: O Complexo Brachiaria e a Fotossensibilização Hepatógena

> 📖 Referência Canônica: Kaneko, J. J. et al. *Clinical Biochemistry of Domestic Animals*, 6th ed. Academic Press. Riet-Correa, F. et al. *Doenças de Ruminantes*, 3ª ed. Tokarnia, C. H. et al. *Plantas Tóxicas do Brasil*.

A fotossensibilização em pastagens tropicais é uma das enfermidades de maior impacto zootécnico e clínico no Centro-Oeste e Sudeste do Brasil, acometendo ovinos, caprinos e bovinos jovens:

### 1. A Tríade Fisiopatológica Obrigatória
Para ocorrer a dermatite fotodinâmica secundária, três elementos devem coincidir:
1. **Fonte Dietética de Clorofila:** A clorofila ingerida é convertida pela microbiota ruminal em **Filoeritrina** (uma porfirina fluorescente lipossolúvel).
2. **Lesão Hepatobiliar Obstrutiva:** O fígado normal excreta 100% da filoeritrina na bile. Na colangite, a filoeritrina é retida e transborda para os capilares sistêmicos.
3. **Radiação Ultravioleta Solar em Pele Clara/Despigmentada:** A luz solar UV incide sobre as áreas brancas desprovidas de melanina (focinho, pálpebras, orelhas, úbere).

\`\`\`mermaid
flowchart TD
    A["Degradação Normal da Clorofila no Rúmen"] --> B["Produção de Filoeritrina"]
    B --> C["Absorção para a Veia Porta Hepática"]
    D["Esporidesmina (Pithomyces) + Saponinas (Protodioscina)"] --> E["Colangite Necrosante e Cristais Biliares Litogênicos"]
    E --> F["Bloqueio Biliar: Fígado Incapaz de Excretar Filoeritrina"]
    C --> G["Filoeritrina Transborda para a Circulação Sanguínea Geral"]
    F --> G
    G --> H["Depósito nos Capilares da Pele Despigmentada"]
    I["Exposição à Radiação Ultravioleta (UV) Solar"] --> J["Ativação Fotodinâmica com Liberação de Radicais Livres de Oxigênio"]
    H --> J
    J --> K["Necrose Isquêmica Cutânea, Crostas, Edema Facial e Morte"]
\`\`\`

---

### 2. A Interação Sinergética: Esporidesmina vs Protodioscina
- **Pithomyces chartarum:** Fungo saprófita que prolifera na serapilheira e folhas mortas de *Brachiaria decumbens* em épocas quentes e úmidas. Produz a toxina **Esporidesmina**, que gera colangite necrosante intra-hepática com fibrose periductal obstrutiva.
- **Saponinas Esteroidais (Protodioscina):** Presentes naturalmente em altas concentrações na planta jovem de *Brachiaria decumbens* e *B. brizantha*. No rúmen, são hidrolisadas a sapogeninas (diosgenina e epismilagenina), que se conjugam com ácido glicurônico e precipitam com cálcio nos ductos biliares, formando **cristais birrefringentes litogênicos** que obstruem os canalículos biliares.

---

### 3. Protocolo Terapêutico Hospitalar e de Campo
1. **Recolhimento Imediato para Galpão Coberto:** Bloquear 100% do acesso à luz solar direta. Animais protegidos na sombra interrompem a ativação dos radicais livres.
2. **Troca da Dieta:** Suspender imediatamente a *Brachiaria* verde e fornecer feno de boa qualidade de gramíneas não-braquiárias (*Tifton*) associado a concentrado energético.
3. **Terapia de Suporte:** Fluidoterapia balanceada com glicose, anti-inflamatórios não-esteroidais (Meloxicam ou Flunixin meglumine) para dor extrema, pomadas cicatrizantes e antibioticoterapia sistêmica preventiva contra infecções bacterianas secundárias das feridas abertas.`,
        causalChain: {
          cause: 'Pastejo de ovinos em Brachiaria decumbens madura com serapilheira colonizada por Pithomyces chartarum',
          mechanism: 'Ação combinada de esporidesmina e saponinas induzindo colangite estenosante com colestase intra-hepática',
          effect: 'Depósito cutâneo de filoeritrina ativada por radiação solar ultravioleta com peroxidação lipídica',
          clinicalMeaning: 'Edema facial grave ("cabeça inchada"), necrose cutânea desprendendo orelhas, cegueira e sepse'
        }
      },
      {
        id: 'sec_agro_tox_02',
        type: 'exercise',
        title: 'Caso Clínico: O Borrego Ictérico com Pele Descamando ao Sol',
        exerciseId: 'ex_agro_04'
      }
    ]
  },

  {
    id: 'lesson_agrostology_inspection_lab',
    moduleId: 'mod_agrostology',
    title: 'Inspeção Botânica, Avaliação Bromatológica & Bancada Laboratorial',
    subtitle: 'Triagem na prática: teste de Guignard para HCN, câmara de esporos de Pithomyces e controle de feno.',
    estimatedMinutes: 25,
    objectives: [
      'Executar o Teste do Picrato de Sódio (Papel de Guignard) para detecção de HCN em forragens',
      'Quantificar conídios de Pithomyces chartarum por grama de pasto para predição de surtos',
      'Operar a bancada interativa de agrostologia e bromatologia para aprovar ou embargar lotes'
    ],
    concepts: ['concept_grazing_management', 'concept_pasture_toxicology'],
    sections: [
      {
        id: 'sec_agro_lab_01',
        type: 'theory',
        title: 'Procedimentos Laboratoriais e Quarentena de Alimentos Volumosos',
        contentMarkdown: `# Aula Universitária: Métodos Laboratoriais de Triagem Forrageira e Micotoxinas

> 📖 Referência Canônica: AOAC International *Official Methods of Analysis*. Kaneko, J. J. *Clinical Biochemistry of Domestic Animals*. Thrall, M. A. et al. *Veterinary Hematology and Clinical Chemistry*.

A inspeção bromatológica e toxicológica de campo e bancada é a barreira técnica que impede a entrada de lotes letais de forragem na rotina hospitalar ou pecuária:

### 1. Teste de Guignard (Papel Picro-Sódico para HCN)
1. Macera-se 5 a 10 g de folhas de forrageira verde fresca em tubo de ensaio com algumas gotas de água e clorofórmio (que rompe as membranas celulares).
2. Suspende-se uma tira de papel de filtro previamente embebida em solução de ácido pícrico a 0,5% e carbonato de sódio a 5% na boca do tubo, vedando firmemente com rolha de borracha.
3. Incuba-se a 37-40 °C por 10 a 30 minutos:
   - **Reação Negativa:** O papel permanece **amarelo brilhante**.
   - **Reação Positiva (HCN Liberado):** O ácido cianídrico volátil reduz o picrato de sódio a isopurpurato alcalino, mudando a cor do papel para **vermelho-tijolo a castanho-avermelhado escuro** em menos de 10 minutos!

---

### 2. Contagem de Esporos de *Pithomyces chartarum* (Técnica do Lavado Foliar)
- Amostras de pastagem de diferentes pontos do piquete são coletadas rente ao solo (zona da palhada morta).
- Pesa-se 100 g de capim e agita-se vigorosamente em 500 mL de água com surfactante.
- Alíquotas são lidas em **Câmara de Neubauer (Hemocitômetro)** sob microscópio óptico (aumento 100x/400x).
- **Interpretação Epidemiológica:**
  - *< 20.000 esporos/g de pasto:* Risco baixo.
  - *20.000 a 50.000 esporos/g:* Risco moderado (monitorar rebanho e GGT sérico).
  - *> 100.000 esporos/g de pasto:* **RISCO EXTREMO DE SURTO FULMINANTE!** Interditar imediatamente o piquete.`,
        causalChain: {
          cause: 'Recebimento de feno com umidade > 18% ou pastejo em piquete com > 100.000 esporos de Pithomyces/g',
          mechanism: 'Proliferação massiva de hifas fúngicas com biossíntese contínua de micotoxinas termoestáveis',
          effect: 'Aporte tóxico diário contínuo sobrecarregando os sistemas de detoxificação de citocromo P450 hepáticos',
          clinicalMeaning: 'Surto coletivo de fotossensibilização ou hepatopatia crônica com alta letalidade no plantel'
        }
      },
      {
        id: 'sec_agro_lab_02',
        type: 'exercise',
        title: 'Verificação Laboratorial: Teste de Guignard e Terapia Antídota no Sorgo',
        exerciseId: 'ex_agro_05'
      },
      {
        id: 'sec_agro_lab_03',
        type: 'lab',
        title: 'Laboratório Interativo: Bancada de Bromatologia & Toxicologia de Pastagens',
        description: 'Assuma a bancada de análise forrageira. Inspecione amostras de Tifton, Brachiaria, Sorgo, Alfafa e Feno Mofado utilizando o microscópio e os testes bioquímicos. Interdite os lotes perigosos e aprove as forragens salubres para salvar o plantel.',
        labType: 'agrostology_botany_bench',
        labConfig: {
          targetSpecies: 'Herbívoros Silvestres Neotropicais e Ruminantes'
        }
      }
    ]
  }
];
