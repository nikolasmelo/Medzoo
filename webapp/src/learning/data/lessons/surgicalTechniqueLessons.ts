// src/learning/data/lessons/surgicalTechniqueLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const SURGICAL_TECHNIQUE_EXERCISES: Record<string, LearningExercise> = {
  ex_surg_01: {
    id: 'ex_surg_01',
    conceptId: 'concept_surgical_asepsis_prep',
    type: 'multiple_choice',
    prompt: 'Durante a preparação da equipe cirúrgica para uma osteossíntese femoral estéril em um cão, o residente realiza a degermação das mãos e antebraços. Qual é a técnica padronizada pela cirurgia canônica quanto ao tempo, agente antisséptico e fluxo direcional de escovação/enxágue para evitar a contaminação das mãos pelas bactérias residentes dos cotovelos?',
    options: [
      {
        id: 'opt_1',
        text: 'Escovação/fricção com Clorexidina Degermante 2% por 3 a 5 minutos, mantendo sempre as mãos posicionadas mais altas que os cotovelos, enxaguando no sentido estrito das pontas dos dedos para os cotovelos em fluxo unidirecional sem retorno.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! As mãos são a área de maior criticidade asséptica. Ao mantê-las elevadas acima do nível dos cotovelos e enxaguar no sentido mãos -> cotovelos em fluxo unidirecional contínuo, a água suja e a espuma com resíduos bacterianos escorrem para os cotovelos e a pia, sem refluir jamais para as mãos limpas.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Lavar rapidamente com sabão neutro comum por 30 segundos, sacudindo as mãos vigorosamente no ar para secagem rápida.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e contaminante. Sabão comum não reduz a microbiota residente; sacudir as mãos no ar contamina as extremidades com aerossóis do ambiente.',
        conceptualErrorCategory: 'asepsis_violation'
      },
      {
        id: 'opt_3',
        text: 'Enxaguar no sentido dos cotovelos em direção às pontas dos dedos para garantir que as unhas recebam o máximo de água.',
        isCorrect: false,
        pedagogicalFeedback: 'Catastrófico! Enxaguar dos cotovelos para as mãos arrasta bactérias da pele menos limpa do braço diretamente para as mãos e dedos, destruindo a assepsia operatória.',
        conceptualErrorCategory: 'reverse_flow_error'
      },
      {
        id: 'opt_4',
        text: 'Utilizar exclusivamente álcool 70% líquido diretamente sobre as mãos sujas com matéria orgânica sem enxágue prévio.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A presença de sujidade e gordura inativa o álcool; a fricção com agentes degermantes ou alcoólicos requer ausência prévia de resíduos visíveis.',
        conceptualErrorCategory: 'organic_matter_interference'
      }
    ],
    pedagogicalExplanation: 'A degermação cirúrgica das mãos utiliza Clorexidina Degermante 2% ou PVPI degermante com fricção regrada e enxágue unidirecional dedos -> cotovelos, mantendo as mãos sempre acima do nível da cintura.',
    causalChain: {
      cause: 'Enxágue retrógrado ou mãos posicionadas abaixo dos cotovelos durante a lavagem cirúrgica',
      mechanism: 'Escoamento de água contaminada do antebraço e cotovelo em direção aos dedos enluvados',
      effect: 'Carreamento de bactérias da microbiota cutânea residente para o campo estéril se houver microfuro de luva',
      clinicalMeaning: 'Infecção profunda de sítio cirúrgico (osteomielite pós-operatória) e falha do implante ortopédico'
    }
  },

  ex_surg_02: {
    id: 'ex_surg_02',
    conceptId: 'concept_surgical_instrumentation',
    type: 'multiple_choice',
    prompt: 'Durante uma celiotomia exploratória, o cirurgião necessita dissecar delicadamente as aderências de fibrina entre duas alças de jejuno viáveis e, em seguida, apreender a borda da fáscia da linha alba para tração firme sem rasgar o tecido conjuntivo. Quais instrumentos cirúrgicos específicos correspondem, respectivamente, a essas duas manobras operatórias?',
    options: [
      {
        id: 'opt_1',
        text: 'Dissecção delicada: Tesoura de Metzenbaum curva atraumática. Tração firme de fáscia: Pinça de Allis ou pinça dente-de-rato forte (Kocher).',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! A Tesoura de Metzenbaum possui hastes longas e lâminas curtas e delicadas com pontas rombas, sendo o instrumento de eleição para dissecção fina de tecidos moles e serosas sem risco de perfuração. Para tracionar tecidos densos e resistentes como a fáscia aponeurótica da linha alba, utilizam-se pinças de preensão firme com dentes como Allis ou Kocher (as quais seriam esmagantes e proibidas no intestino viável!).',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Dissecção delicada: Tesoura de Mayo reta cortante. Tração de fáscia: Pinça hemostática Halsted-Mosquito delicada.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A Tesoura de Mayo reta destina-se a cortar fios e tecidos densos como tendões; a pinça mosquito é hemostática para pequenos vasos e quebra se forçar tração na linha alba.',
        conceptualErrorCategory: 'instrument_misallocation'
      },
      {
        id: 'opt_3',
        text: 'Dissecção delicada: Pinça de Kocher forte com dente afiado. Tração de fáscia: Pinça de Adson sem dente.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e traumático! Usar pinça de Kocher em alça entérica causaria perfuração e peritonite séptica imediata; a pinça de Adson sem dente escorregaria na fáscia sob tração.',
        conceptualErrorCategory: 'tissue_damage_confusion'
      },
      {
        id: 'opt_4',
        text: 'Dissecção delicada: Cabo de bisturi 4 com lâmina 22 reta. Tração de fáscia: Pinça de Backhaus de campo.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Cabo 4 com lâmina 22 é instrumento grosseiro de incisão de grandes animais; pinça de Backhaus é exclusiva para fixação de campos cirúrgicos na pele.',
        conceptualErrorCategory: 'gross_instrument_confusion'
      }
    ],
    pedagogicalExplanation: 'Os tempos cirúrgicos fundamentais exigem instrumentos especializados para cada densidade tecidual: diérese fina (Metzenbaum), hemostasia (Halsted/Kelly), preensão atraumática (Babcock) e preensão firme (Allis/Kocher).',
    causalChain: {
      cause: 'Uso de tesoura grosseira de Mayo ou pinça denteada agressiva em alças intestinais delicadas',
      mechanism: 'Esmagamento tecidual com microperfuração da serosa e muscular entérica',
      effect: 'Fístula entérica oculta para a cavidade peritoneal pós-operatória',
      clinicalMeaning: 'Peritonite química e bacteriana hiperaguda com choque séptico'
    }
  },

  ex_surg_03: {
    id: 'ex_surg_03',
    conceptId: 'concept_surgical_halsted_principles',
    type: 'multiple_choice',
    prompt: 'Durante a ressecção de um volumoso lipoma subcutâneo de 12 cm no flanco de um cão Labrador de 35 kg, formou-se uma grande cavidade residual após a remoção da massa. Segundo os princípios de Halsted, qual a manobra cirúrgica primordial para prevenir a formação de um volumoso seroma compressivo?',
    options: [
      {
        id: 'opt_1',
        text: 'Obliteração metódica do espaço morto através de pontos de adesão (pontos de caminhada de Quénu/Mayo) ancorando o tecido subcutâneo na fáscia muscular profunda com fio absorvível.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A obliteração do espaço morto impede o acúmulo de fluido sero-hemorrágico nos planos clivados, garantindo aposição das superfícies e reduzindo a tensão sob a linha de sutura cutânea.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Apenas fechar a pele com nós extremamente apertados para comprimir a ferida por fora, sem suturar o subcutâneo.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Nós apertados na pele causam isquemia e necrose das bordas dérmicas sem eliminar o espaço morto profundo, resultando em seroma maciço e deiscência.',
        conceptualErrorCategory: 'strangulation_error'
      },
      {
        id: 'opt_3',
        text: 'Preencher toda a cavidade com pó de talco e gaze embebida em álcool para cauterizar quimicamente as paredes.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e lesivo. O talco e o álcool induzem necrose celular grave, reação inflamatória granulomatosa severa e choque por dor.',
        conceptualErrorCategory: 'chemical_irritation_error'
      },
      {
        id: 'opt_4',
        text: 'Deixar a ferida completamente aberta em segunda intenção para que sangre livremente para o exterior.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Uma ferida cirúrgica limpa deve ser sintetizada em primeira intenção com controle de espaço morto e drenos se necessário.',
        conceptualErrorCategory: 'second_intention_misconception'
      }
    ],
    pedagogicalExplanation: 'Os princípios de William Stewart Halsted enfatizam a obliteração do espaço morto para restabelecer a drenagem linfática tecidual e evitar acúmulos cavitários que funcionam como meio de cultura bacteriano.',
    causalChain: {
      cause: 'Espaço morto residual não obliterado após exérese tumoral extensa',
      mechanism: 'Acúmulo de transudato seroso nos planos anatômicos descolados',
      effect: 'Formação de seroma com elevação da tensão mecânica sobre as suturas superficiais',
      clinicalMeaning: 'Deiscência de ferida operatória, dor e risco de infecção bacteriana secundária'
    }
  },

  ex_surg_04: {
    id: 'ex_surg_04',
    conceptId: 'concept_suture_materials_selection',
    type: 'multiple_choice',
    prompt: 'Em uma cadela da raça Rottweiler de 38 kg submetida a laparotomia exploratória, qual é a escolha biomaterial mais adequada para o fechamento da linha alba (fáscia aponeurótica da bainha do músculo reto abdominal)?',
    options: [
      {
        id: 'opt_1',
        text: 'Fio monofilamentar sintético de absorção lenta (Polidioxanona / PDS II) de calibre 0 ou 2-0 com agulha cilíndrica atraumática.',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! A linha alba é composta por tecido conjuntivo denso e aponeurótico de cicatrização lenta (requer 42 a 60 dias para recuperar 60-80% de sua força tênsil original). O PDS mantém resistência tênsil por até 6 semanas e, sendo monofilamentar, desliza sem serração tecidual e com capilaridade bacteriana nula.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Categute cromado 1 com agulha cortante, pois é de origem biológica e degrada em menos de 10 dias.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e perigoso. O categute perde a maior parte de sua resistência mecânica aos 7-14 dias por fagocitose enzimática, momento em que a fáscia abdominal ainda não cicatrizou, levando invariavelmente a hérnias incisionais e evisceração fatal.',
        conceptualErrorCategory: 'catgut_misconception'
      },
      {
        id: 'opt_3',
        text: 'Fio de seda trançada 3-0, pois é multifilamentar macio e não machuca as mãos do cirurgião.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A seda trançada tem alta capilaridade bacteriana, gera intensa reação de corpo estranho e perde força precocemente, além do calibre 3-0 ser inadequado para sustentar o peso abdominal de 38 kg.',
        conceptualErrorCategory: 'silk_braided_error'
      },
      {
        id: 'opt_4',
        text: 'Fio de algodão hospitalar com nó cego e agulha reta de costura.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O algodão é material não padronizado para cirurgia interna e desencadeia granulomas de corpo estranho volumosos e fístulas crônicas.',
        conceptualErrorCategory: 'unstandardized_material_error'
      }
    ],
    pedagogicalExplanation: 'A linha alba exige fios sintéticos absorvíveis de longa duração (PDS II) ou inabsorvíveis (Polipropileno/Nylon) em calibres proporcionais ao peso corpóreo do animal.',
    causalChain: {
      cause: 'Uso de fio de absorção rápida (categute) na síntese da aponeurose muscular da linha alba',
      mechanism: 'Degradação biológica do fio aos 10 dias antes que a fáscia atinja resistência colágena madura',
      effect: 'Ruptura da linha de sutura pelo aumento da pressão intra-abdominal',
      clinicalMeaning: 'Hérnia incisional transfixante com evisceração intestinal aguda e choque séptico'
    }
  },

  ex_surg_05: {
    id: 'ex_surg_05',
    conceptId: 'concept_suture_patterns_synthesis',
    type: 'multiple_choice',
    prompt: 'Um residente veterinário propôs utilizar o padrão invaginante de Cushing contínuo para realizar o fechamento da pele após uma mastectomia em uma cadela. Por que essa conduta é contraindicada pela técnica cirúrgica?',
    options: [
      {
        id: 'opt_1',
        text: 'Porque padrões invaginantes na pele viram os bordos epidérmicos para dentro, colocando queratina em contato com queratina e impedindo a adesão derme-derme e a neovascularização epitelial, causando deiscência garantida.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! A pele necessita obrigatoriamente de síntese aposicional estrita (derme contra derme e epiderme alinhada). Inverter as bordas isola as camadas profundas e bloqueia o trânsito de fibroblastos e capilares. Padrões invaginantes (Cushing/Lembert) são exclusivos de vísceras ocas!',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Porque o padrão de Cushing só pode ser realizado em ossos longos fraturados.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O padrão de Cushing é exclusivo de tecidos moles e vísceras ocas (estômago, bexiga, útero) e jamais utilizado em ossos.',
        conceptualErrorCategory: 'bone_application_confusion'
      },
      {
        id: 'opt_3',
        text: 'Porque o padrão de Cushing exige o dobro de tempo para ser confeccionado em comparação a um simples separado.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O Cushing é contínuo e rápido; o problema não é o tempo cirúrgico, mas sim a biomecânica de invaginação e retardo biológico de cicatrização.',
        conceptualErrorCategory: 'speed_misattribution'
      },
      {
        id: 'opt_4',
        text: 'Porque padrões invaginantes aumentam a pressão arterial sistêmica do paciente sob anestesia.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O padrão de sutura cutânea não altera a pressão arterial sistêmica.',
        conceptualErrorCategory: 'hemodynamic_misattribution'
      }
    ],
    pedagogicalExplanation: 'A pele humana e veterinária deve ser suturada em estrita aposição anatômica (Simples Separado, Wolff, Cruciado ou Intradérmico). Padrões invaginantes colocam queratina na linha de cicatrização, gerando deiscência obrigatória.',
    causalChain: {
      cause: 'Uso de padrão invaginante (Cushing ou Lembert) na sutura da pele',
      mechanism: 'Inversão das bordas epiteliais com barreira mecânica queratinizada entre as camadas dérmicas',
      effect: 'Incapacidade de ponte de fibrina e neovascularização endotelial cruzada',
      clinicalMeaning: 'Deiscência completa da ferida operatória, fístula exsudativa e cicatriz atrófica defeituosa'
    }
  }
};

export const SURGICAL_TECHNIQUE_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_surg_asepsis',
    moduleId: 'mod_surgical_technique',
    title: 'Paramentação, Antissepsia & Assepsia Cirúrgica',
    subtitle: 'Preparo da equipe cirúrgica, escovação das mãos, tricotomia, antissepsia e campos fenestrados.',
    estimatedMinutes: 20,
    objectives: [
      'Executar a degermação cirúrgica com clorexidina degermante 2% respeitando o fluxo unidirecional mãos -> cotovelos',
      'Vestir o capote cirúrgico estéril e calçar luvas pela técnica fechada sem tocar na face externa estéril',
      'Preparar o paciente: tricotomia ampla, antissepsia em espiral concêntrica e colocação de campos de quatro quadrantes'
    ],
    concepts: ['concept_surgical_asepsis_prep', 'concept_surgical_halsted_principles'],
    sections: [
      {
        id: 'sec_surg_asep_01',
        type: 'theory',
        title: 'As Barreiras Estéreis no Bloco Cirúrgico Veterinário',
        contentMarkdown: `# Aula Universitária: Assepsia, Antissepsia & Paramentação Cirúrgica

> 📖 Referência Canônica: Fossum, T. W. *Small Animal Surgery*, 5th ed. Elsevier, Cap. 2: Surgical Principles and Aseptic Technique. Tobias, K. M.; Johnston, S. A. *Veterinary Surgery: Small Animal*, 2nd ed. Elsevier.

A infecção de sítio cirúrgico é prevenida pela manutenção de barreiras físicas e químicas intransponíveis entre a microbiota ambiente/cutânea e a cavidade cruenta:

### 1. Degermação Cirúrgica das Mãos e Antebraços
- **Princípio:** Reduzir a microbiota transitória a zero e diminuir substancialmente a microbiota residente profunda (estafilococos, corinebactérias).
- **Agentes Padrão-Ouro:** **Gliconato de Clorexidina Degermante a 2%** com surfactante ou PVPI degermante a 10%.
- **Técnica Padronizada:**
  1. Limpeza subungueal com espátula plástica estéril sob água corrente.
  2. Fricção metódica por **3 a 5 minutos** em todas as quatro faces de cada dedo, palma, dorso e antebraços até 5 cm acima dos cotovelos.
  3. **Posição e Enxágue:** As mãos devem ser mantidas **estritamente acima do nível dos cotovelos**. O enxágue é realizado em fluxo unidirecional: entra a ponta dos dedos e sai no cotovelo, sem jamais recuar as mãos pela água!
  4. **Secagem:** Com toalha estéril dobrada: um lado da toalha para a mão e antebraço esquerdo; dobra-se e usa-se o lado oposto para o braço direito, sempre da mão para o cotovelo.

\`\`\`mermaid
flowchart TD
    A["Limpeza Subungueal sob Água Corrente"] --> B["Fricção com Clorexidina Degermante 2% por 3 a 5 min"]
    B --> C["Posicionamento: Mãos SEMPRE Acima dos Cotovelos"]
    C --> D["Enxágue Unidirecional Dedos -> Cotovelos sem Retorno"]
    D --> E["Secagem com Compressa Estéril (Mão para Cotovelo)"]
    E --> F["Paramentação Fechada com Avental Impermeável e Luvas"]
\`\`\`

---

### 2. Preparo do Paciente no Bloco
1. **Tricotomia Ampla:** Mínimo de 15 cm ao redor da incisão projetada, realizada preferencialmente fora da sala de cirurgia para evitar aerossóis de pelos.
2. **Antissepsia de Pele:** Fricção com gaze estéril embebida em Clorexidina Alcoólica 0,5% partindo **do centro da incisão proposta em círculos concêntricos para a periferia**. A gaze que atinge a borda externa nunca mais volta para o centro!
3. **Campos Cirúrgicos de Quatro Quadrantes:** Fixação com pinças de Backhaus na pele, garantindo isolamento impermeável absoluto.`,
        causalChain: {
          cause: 'Enxágue bidirecional ou abaixamento das mãos abaixo da cintura após degermação',
          mechanism: 'Contaminação das mãos por escorrimento de bactérias dos cotovelos ou toque acidental em superfícies não-estéreis',
          effect: 'Inoculação inadvertida de Staphylococcus pseudintermedius no leito operatório profundo',
          clinicalMeaning: 'Infecção incisional purulenta, deiscência de sutura e necessidade de antibioticoterapia prolongada'
        }
      },
      {
        id: 'sec_surg_asep_02',
        type: 'exercise',
        title: 'Verificação Técnica: Degermação Cirúrgica e Fluxo de Enxágue',
        exerciseId: 'ex_surg_01'
      }
    ]
  },

  {
    id: 'lesson_surg_instrumentation',
    moduleId: 'mod_surgical_technique',
    title: 'Instrumental Cirúrgico & Tempos Operatórios',
    subtitle: 'Diérese, Hemostasia, Preensão e Síntese: anatomia funcional e manejo atraumático.',
    estimatedMinutes: 22,
    objectives: [
      'Classificar os instrumentos cirúrgicos nos 4 tempos canônicos da técnica cirúrgica',
      'Diferenciar bisturis (cabos 3 vs 4) e tesouras (Metzenbaum delicada vs Mayo resistente)',
      'Selecionar pinças hemostáticas e de preensão adequadas para cada tipo de tecido'
    ],
    concepts: ['concept_surgical_instrumentation', 'concept_surgical_halsted_principles'],
    sections: [
      {
        id: 'sec_surg_inst_01',
        type: 'theory',
        title: 'Os Quatro Tempos Operatórios e a Caixa Cirúrgica',
        contentMarkdown: `# Aula Universitária: Tempos Operatórios & Instrumental Cirúrgico

> 📖 Referência Canônica: Fossum, T. W. *Small Animal Surgery*, 5th ed. Slatter, D. *Textbook of Small Animal Surgery*, 3rd ed. Saunders.

A instrumentação cirúrgica organiza o ato operatório em quatro fases sequenciais universais:

### 1. Diérese (Divisão Tecidual)
- **Cabos de Bisturi:**
  - *Cabo 3:* Menor e delicado. Utiliza lâminas **10** (pele geral pequenos animais), **11** (punção pontiaguda / drenagem de abscessos) e **15** (microcirurgia oftálmica e cirurgias delicadas).
  - *Cabo 4:* Maior e robusto. Utiliza lâminas **20, 21 e 22** para grandes incisões em equinos, bovinos e animais pesados.
- **Tesouras Cirúrgicas:**
  - *Tesoura de Metzenbaum:* Hastes longas e lâminas curtas, finas e curvas com pontas rombas. **Instrumento exclusivo para dissecção atraumática de tecidos moles e planos delicados.** PROIBIDA para cortar fios cirúrgicos ou tecidos densos!
  - *Tesoura de Mayo:* Robusta e espessa, reta ou curva. Projetada para incisar fáscias resistentes, tendões e seccionar fios cirúrgicos.

---

### 2. Hemostasia (Controle do Sangramento)
- **Pinça Halsted-Mosquito:** Ranhuras transversais em toda a extensão das garras; muito delicada. Indicada para vasos puntiformes capilares.
- **Pinça de Kelly:** Ranhuras transversais ocupando apenas a metade distal da garra; excelente para feixes vasculares médios.
- **Pinça de Crile:** Ranhuras em toda a extensão da garra, mais forte que a mosquito.
- **Pinça de Rochester-Carmalt:** Ranhuras longitudinais com travas transversais na ponta; padrão-ouro para clampeamento de grandes pedículos vasculares (pedículo ovariano e uterino em OSH).

---

### 3. Preensão & Exposição
- **Pinças de Dissecção (Manuseio com a mão não-dominante):**
  - *Pinça de Adson com Dente-de-rato (1x2 dentes):* Preensão firme de bordas de pele e fáscias sem esmagamento excessivo.
  - *Pinça Anatômica sem Dente (Serrilhada):* Para segurar compressas ou tecidos friáveis.
- **Pinças de Tecidos Orgânicos:**
  - *Pinça de Babcock:* Garras largas e triangulares atraumáticas fenestradas; padrão-ouro para segurar bexiga e alças intestinais sem perfuração.
  - *Pinça de Allis:* Dentes múltiplos agressivos de encaixe; **traumática**, indicada exclusivamente para fáscias aponeuróticas ou tecidos que serão extirpados.

---

### 4. Síntese (Reconstituição Anatômica)
- **Porta-Agulhas Mayo-Hegar:** Trava de cremalheira manual; versátil para a maioria das cirurgias.
- **Porta-Agulhas Mathieu:** Trava por mola na empunhadura palmar; permite rápida liberação com a palma da mão.`,
        causalChain: {
          cause: 'Uso de tesoura delicada de Metzenbaum para seccionar fios de sutura espessos ou telas',
          mechanism: 'Desalinhamento mecânico do eixo articular das lâminas de corte',
          effect: 'Perda do corte afiado do instrumento e esgarçamento tecidual em dissecções subsequentes',
          clinicalMeaning: 'Trauma tecidual desnecessário, prolongamento do tempo operatório e sangramento capilar'
        }
      },
      {
        id: 'sec_surg_inst_02',
        type: 'exercise',
        title: 'Verificação Operatória: Escolha de Instrumentos para Dissecção e Tração',
        exerciseId: 'ex_surg_02'
      }
    ]
  },

  {
    id: 'lesson_surg_halsted',
    moduleId: 'mod_surgical_technique',
    title: 'Princípios de Halsted & Hemostasia Preventiva',
    subtitle: 'Os 7 mandamentos de Halsted, pontos de adesão de Quénu e controle metódico de espaço morto.',
    estimatedMinutes: 22,
    objectives: [
      'Dominar os 7 princípios canônicos de William Stewart Halsted aplicados à cirurgia veterinária',
      'Executar pontos de adesão (quilting sutures / Quénu) para obliteração biológica de espaço morto',
      'Prevenir seromas compressivos pós-operatórios e deiscências por manipulação isquemiante'
    ],
    concepts: ['concept_surgical_halsted_principles'],
    sections: [
      {
        id: 'surg_halsted_sec_1',
        type: 'theory',
        title: 'Os 7 Mandamentos de Halsted no Centro Cirúrgico',
        contentMarkdown: `# Aula Universitária: Princípios de Halsted & Hemostasia Cirúrgica

> 📖 Referência Canônica: Fossum, T. W. *Small Animal Surgery*, 5th ed. Slatter, D. *Textbook of Small Animal Surgery*. Bojrab, M. J. *Current Techniques in Small Animal Surgery*, 5th ed. Teton NewMedia.

No final do século XIX, William Stewart Halsted revolucionou a cirurgia ao demonstrar que a cicatrização e a sobrevivência do paciente dependem da preservação biológica dos tecidos manipulados:

### Os Sete Princípios Canônicos de Halsted:
1. **Manipulação Delicada dos Tecidos:** O esmagamento de tecido adiposo e muscular libera cininas inflamatórias, gerando necrose asséptica e retardando a fibroplasia.
2. **Hemostasia Rigorosa e Meticulosa:** Coágulos no leito operatório funcionam como meio de cultura bacteriano e barreira física mecânica entre as bordas celulares em proliferação.
3. **Preservação do Suprimento Sanguíneo:** Dissecções anatômicas limpas respeitando os pedículos vasculares nutridores. Não esqueletizar vasos desnecessariamente.
4. **Assepsia Estrita:** Controle bacteriológico de todo o ambiente, instrumental e paramentação da equipe.
5. **Aproximação Anatômica sem Tensão:** A isquemia tecidual induzida por nós cirúrgicos estrangulantes é a principal causa de deiscência precoce. *"Aproxime as bordas, não as estrangule!"*
6. **Obliteração Metódica do Espaço Morto:** O descolamento de planos teciduais sem suturas de ancoragem favorece o acúmulo de transudato sero-hemorrágico (seroma) que distende a ferida e predispõe à infecção.
7. **Repouso Pós-Operatório:** Imobilização tecidual e proteção mecânica contra automutilação (colar elizabetano).

\`\`\`mermaid
flowchart TD
    A["Grande Exérese de Tecidos (Mastectomia / Lipoma)"] --> B["Criação de Volumoso Espaço Morto Residual"]
    B -->|Sem Pontos de Adesão| C["Acúmulo de Transudato Sero-hemorrágico: SEROMA"]
    C --> D["Tensão Mecânica sobre as Bordas da Pele + Risco de Infecção"]
    C --> E["Deiscência de Sutura no 4º a 7º Dia Pós-Operatório"]
    
    B -->|Com Pontos de Caminhada de Quénu| F["Ancoragem do Subcutâneo à Fáscia Muscular Profunda"]
    F --> G["Adesão Precoce de Superfícies por Fibrina em 24h"]
    G --> H["Cicatrização Fisiológica sem Necessidade de Drenos"]
\`\`\``,
        causalChain: {
          cause: 'Tensão excessiva nos nós cirúrgicos e esmagamento de tecido adiposo',
          mechanism: 'Compressão da microvasculatura capilar dérmica com isquemia local e necrose asséptica de bordas',
          effect: 'Ruptura das fibras de colágeno nos orifícios de passagem da agulha',
          clinicalMeaning: 'Deiscência precoce de ferida operatória (3º a 5º dia pós-op) com evisceração ou infecção profunda'
        }
      },
      {
        id: 'surg_halsted_sec_2',
        type: 'exercise',
        title: 'Caso Clínico: Prevenção de Seroma em Exérese de Neoplasia',
        exerciseId: 'ex_surg_03'
      }
    ]
  },

  {
    id: 'lesson_surg_suture_materials',
    moduleId: 'mod_surgical_technique',
    title: 'Biomateriais: Fios Monofilamentares vs Multifilamentares',
    subtitle: 'Capilaridade, reação tecidual, taxas de absorção e escolha precisa do fio por plano anatômico.',
    estimatedMinutes: 24,
    objectives: [
      'Diferenciar fios monofilamentares e multifilamentares (trançados) quanto ao risco bacteriano e atrito',
      'Correlacionar a taxa de absorção de PDS, Vicryl, Monocryl e Categute com a cicatrização tecidual',
      'Prescrever o biomaterial e calibre seguro para pele, tecido subcutâneo, linha alba e vísceras ocas'
    ],
    concepts: ['concept_suture_materials_selection'],
    sections: [
      {
        id: 'surg_materials_sec_1',
        type: 'theory',
        title: 'Propriedades Físicas e Biológicas dos Fios Cirúrgicos',
        contentMarkdown: `# Aula Universitária: Biomateriais & Fios de Sutura na Cirurgia Veterinária

> 📖 Referência Canônica: Fossum, T. W. *Small Animal Surgery*, 5th ed. Tobias, K. M.; Johnston, S. A. *Veterinary Surgery: Small Animal*, 2nd ed.

O sucesso da síntese tecidual depende da compatibilidade biomecânica e temporal entre a resistência tênsil do fio e a velocidade de cicatrização do tecido:

### 1. Estrutura Física: Monofilamento vs Multifilamento
- **Monofilamentares (Nylon, PDS II, Monocryl, Polipropileno):** Superfície lisa, baixo atrito e **capilaridade nula**. Não abrigam bactérias nos interstícios de fibras. Padrão-ouro para pele, áreas contaminadas e vísceras ocas infectadas. Possuem maior "memória" física, exigindo 4 a 5 seminós para segurança do nó.
- **Multifilamentares Trançados (Poliglactina 910/Vicryl, Seda, Algodão):** Fios macios com excelente maleabilidade e segurança no nó, porém possuem **alta capilaridade**. Agem como pavios que transportam bactérias e fluidos corporais por capilaridade. **PROIBIDOS no trato urinário e gastrointestinal contaminado!**

---

### 2. Tabela de Biomateriais Cirúrgicos Veterinários

| Fio Cirúrgico | Estrutura | Destino Biológico | Perda de Força Tênsil / Absorção | Indicação Principal |
|---|---|---|---|---|
| **Nylon (Poliamida)** | Monofilamentar | Inabsorvível | Mantém força indefinidamente | Padrão-ouro para sutura de pele |
| **PDS II (Polidioxanona)** | Monofilamentar | Absorvível sintético lento | 50% de força aos 28 dias; absorção 180-210 dias | Linha alba, bexiga, intestino e grandes vasos |
| **Vicryl (Poliglactina 910)** | Multifilamentar trançado | Absorvível sintético médio | Perde força aos 21 dias; absorção 56-70 dias | Tecido subcutâneo, hemostasia de pedículos |
| **Monocryl (Poliglecaprone 25)** | Monofilamentar | Absorvível sintético rápido | Perde força aos 7-14 dias; absorção 90-120 dias | Sutura intradérmica estética |
| **Categute Cromado** | Multifilamentar torcido | Absorvível biológico | Imprevisível (7-10 dias por lise fagocítica) | Em desuso pela intensa reação de corpo estranho |

> [!WARNING]
> **Alerta de Linha Alba:** A linha alba leva de 6 a 8 semanas para recuperar força mecânica. Usar Categute nela causa deiscência certa em 10 dias com hérnia incisional e evisceração fatal!`,
        causalChain: {
          cause: 'Uso de fio multifilamentar trançado ou categute em sutura de bexiga ou linha alba',
          mechanism: 'Capilaridade favorece ascensão bacteriana na bexiga; rápida degradação do categute precede o depósito de colágeno maduro na fáscia',
          effect: 'Perda precoce da resistência mecânica antes dos 21-42 dias necessários para síntese fascial',
          clinicalMeaning: 'Deiscência de cistorrafia com uroperitônio ou hérnia incisional de linha alba com evisceração'
        }
      },
      {
        id: 'surg_materials_sec_2',
        type: 'exercise',
        title: 'Desafio Posológico: Fechamento Seguro de Linha Alba na Cadela Grande',
        exerciseId: 'ex_surg_04'
      }
    ]
  },

  {
    id: 'lesson_surg_patterns',
    moduleId: 'mod_surgical_technique',
    title: 'Padrões de Sutura & Bancada Virtual de Síntese',
    subtitle: 'Técnicas aposicionais, invaginantes de vísceras ocas e laboratório de centro cirúrgico.',
    estimatedMinutes: 25,
    objectives: [
      'Executar padrões aposicionais anatômicos: Simples Separado, Wolff (U horizontal) e Intradérmico',
      'Compreender os padrões invaginantes de vísceras ocas: Cushing e Lembert seromusculares',
      'Treinar na Bancada Virtual de Síntese a passagem e o tensionamento correto de nós de cirurgião'
    ],
    concepts: ['concept_suture_patterns_synthesis'],
    sections: [
      {
        id: 'surg_patterns_sec_1',
        type: 'theory',
        title: 'Classificação Funcional e Biomecânica dos Padrões de Síntese',
        contentMarkdown: `# Aula Universitária: Padrões de Sutura — Aposição vs Invaginação

> 📖 Referência Canônica: Fossum, T. W. *Small Animal Surgery*, 5th ed. Bojrab, M. J. *Current Techniques in Small Animal Surgery*, 5th ed.

A correta interação mecânica entre as bordas teciduais define a velocidade de epitelização e a estanqueidade dos órgãos ocos:

### 1. Padrões Aposicionais (Borda com Borda)
- **Ponto Simples Separado:** Padrão mais versátil e seguro. Se um ponto romper, os demais mantêm a ferida íntegra. Indicado para pele, linha alba e anastomoses intestinais.
- **Ponto em U Horizontal (Wolff):** Padrão de sustentação que distribui a tensão lateralmente, prevenindo deiscência em feridas sob tensão moderada.
- **Ponto em Cruz / Cruciado (X):** Rápido, resistente e hemostático para bordas musculares.
- **Sutura Intradérmica Contínua:** Feita na derme com fio absorvível monofilamentar (Monocryl 3-0/4-0). Excelente resultado cosmético sem pontos externos visíveis.

---

### 2. Padrões Invaginantes (Bordas voltadas para dentro)
- **Objetivo Biológico:** Em vísceras ocas (estômago, bexiga, útero), colocar **serosa contra serosa**. A serosa deposita fibrina adesiva em menos de **2 a 4 horas**, selando hermeticamente o órgão contra extravasamento de líquidos e bactérias.
- **Padrão de Cushing:** Contínuo, paralelo à incisão, penetrando serosa e muscular até a submucosa (NÃO perfura a mucosa).
- **Padrão de Lembert:** Perpendicular à linha de incisão, seromuscular invaginante. Usado isolado ou como segunda camada de reforço sobre uma sutura aposicional em vísceras ocas.

> [!CAUTION]
> **PROIBIÇÃO ABSOLUTA NA PELE:** Padrões invaginantes (Cushing/Lembert) são **terminantemente proibidos na pele**! A invaginação cutânea coloca epiderme queratinizada contra epiderme queratinizada, impedindo a neovascularização derme-derme e causando deiscência obrigatória.`,
        causalChain: {
          cause: 'Aplicação de sutura invaginante na pele queratinizada',
          mechanism: 'Inversão das bordas epiteliais com barreira mecânica queratinizada entre as camadas dérmicas',
          effect: 'Incapacidade de formação de ponte de fibrina e neovascularização cruzada',
          clinicalMeaning: 'Deiscência completa da ferida operatória, fístula e necessidade de reintervenção'
        }
      },
      {
        id: 'surg_patterns_sec_2',
        type: 'exercise',
        title: 'Verificação Biomecânica: Erro Crítico na Síntese Cutânea',
        exerciseId: 'ex_surg_05'
      },
      {
        id: 'surg_patterns_sec_3',
        type: 'lab',
        title: 'Bancada do Centro Cirúrgico: Laboratório de Síntese Virtual',
        labType: 'surgical_center_bench',
        labConfig: {
          mode: 'suture_bench',
          defaultTissue: 'linea_alba',
          targetTension: 'balanced'
        }
      }
    ]
  }
];
