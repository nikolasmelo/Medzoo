// src/learning/data/lessons/surgicalTechniqueLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const SURGICAL_TECHNIQUE_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_surg_halsted',
    moduleId: 'mod_surgical_technique',
    title: 'Princípios de Halsted & Diérese Atraumática',
    subtitle: 'Manuseio tecidual delicado, hemostasia meticulosa e obliteração de espaço morto.',
    estimatedMinutes: 20,
    objectives: [
      'Dominar os 7 princípios canônicos de William Stewart Halsted aplicados à cirurgia veterinária',
      'Distinguir instrumentos de diérese (bisturis cabos 3 e 4) e pinças de hemostasia (Halsted-Mosquito vs. Kelly)',
      'Prevenir seromas pós-operatórios e deiscências por manipulação tecidual isquemiante'
    ],
    concepts: ['concept_surgical_halsted_principles'],
    sections: [
      {
        id: 'surg_halsted_sec_1',
        type: 'theory',
        title: 'Os 7 Mandamentos de Halsted no Centro Cirúrgico',
        contentMarkdown: `A cirurgia moderna baseia-se nos princípios preconizados por William Stewart Halsted no final do século XIX, cujo objetivo primordial é minimizar o trauma cirúrgico e favorecer a cicatrização fisiológica:

1. **Manipulação Delicada dos Tecidos:** O uso inadequado de pinças dente-de-rato ou tração excessiva esmaga adipócitos e miócitos, liberando cininas inflamatórias e criando focos de necrose tecidual.
2. **Hemostasia Rigorosa e Meticulosa:** O sangue acumulado no leito operatório atua como meio de cultura bacteriano de alta riqueza e impede o contato íntimo entre as bordas teciduais. Hemostasia preventiva com pinça mosquito hemostática e ligaduras precisas.
3. **Preservação do Suprimento Vascular:** Dissecar apenas os planos anatômicos estritamente necessários. A esqueletização vascular desprovida de adventícia leva à isquemia isquêmica segmentar e necrose de retalhos.
4. **Assepsia Estrita & Esterilização:** Barreira física estéril, paramentação cirúrgica com avental impermeável, luvas sem talco e antissepsia clorexidina alcoólica 0,5%.
5. **Aproximação Anatômica sem Tensão:** A isquemia tecidual induzida por nós cirúrgicos excessivamente apertados é a principal causa de deiscência em pequenos e grandes animais. *"Aproxime, não estrangule!"*
6. **Obliteração de Espaço Morto:** O descolamento tecidual sem suturas de ancoragem favorece o acúmulo de transudato sero-hemorrágico (seroma) que tensiona a ferida e predispõe à infecção.
7. **Repouso Pós-Operatório & Proteção:** Imobilização tecidual e proteção física (colar elizabetano ou roupas cirúrgicas anatômicas).`,
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
        exerciseId: 'ex_surg_01'
      }
    ]
  },
  {
    id: 'lesson_surg_suture_materials',
    moduleId: 'mod_surgical_technique',
    title: 'Biomateriais: Fios Monofilamentares vs. Multifilamentares',
    subtitle: 'Capilaridade, reação tecidual, taxas de absorção e escolha precisa do fio por plano anatômico.',
    estimatedMinutes: 25,
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
        contentMarkdown: `A escolha do fio cirúrgico dita o sucesso da síntese tecidual. Um erro na seleção do biomaterial pode levar à perda catastrófica da integridade da ferida:

### 1. Estrutura Física: Monofilamento vs. Multifilamento (Trançado)
- **Monofilamentares (Nylon, PDS, Monocryl, Polipropileno):** Superfície lisa, baixo atrito tecidual e **capilaridade nula**. Não abrigam bactérias nos interstícios de fibras. Ideais para áreas contaminadas, vísceras ocas e pele. Possuem maior "memória" (tendência a desatar nós se não forem dados seminós adicionais).
- **Multifilamentares Trançados (Poliglactina 910/Vicryl, Seda, Algodão):** Maleáveis, excelente segurança no nó, porém possuem **alta capilaridade**. Agem como pavios que transportam bactérias e fluidos corporais por capilaridade. **PROIBIDOS em vísceras ocas infectadas (bexiga, intestino)!**

### 2. Destino Biológico: Absorvíveis vs. Inabsorvíveis
- **Categute Cromado (Origem Animal):** Absorção por fagocitose enzimática maciça. Degradação imprevisível (perde até 80% da resistência em 7 a 10 dias). Causa intensa reação inflamatória granulomatosa. **Substituído na medicina moderna por polímeros sintéticos.**
- **Polidioxanona (PDS II - Sintético Monofilamentar):** Absorção lenta por hidrólise (180 a 210 dias). Mantém mais de 50% da resistência tênsil aos 28 dias. **Padrão-ouro para Linha Alba (fáscia muscular de cicatrização lenta) e cirurgia gastrointestinal.**
- **Poliglactina 910 (Vicryl - Sintético Trançado):** Absorção por hidrólise (56 a 70 dias). Perde força em 21 dias. Ótimo para tecido subcutâneo e ligaduras vasculares.
- **Nylon / Poliamida (Inabsorvível Monofilamentar):** Altíssima resistência, inerte e sem capilaridade. **Padrão-ouro universal para sutura de pele.**`,
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
        title: 'Desafio Posológico: Fechamento Seguro de Linha Alba',
        exerciseId: 'ex_surg_02'
      }
    ]
  },
  {
    id: 'lesson_surg_patterns',
    moduleId: 'mod_surgical_technique',
    title: 'Padrões de Sutura & Bancada de Síntese',
    subtitle: 'Técnicas aposicionais, invaginantes e eversantes aplicadas no Centro Cirúrgico.',
    estimatedMinutes: 30,
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
        title: 'Classificação Funcional dos Padrões de Síntese',
        contentMarkdown: `Os padrões de sutura determinam como as bordas da incisão interagem biomecanicamente:

### 1. Padrões Aposicionais (Borda com Borda)
Aproximam anatomicamente as camadas correspondentes sem sobreposição.
- **Ponto Simples Separado:** Padrão mais versátil e seguro. Se um ponto romper, os demais mantêm a ferida íntegra. Indicado para pele, linha alba e anastomoses.
- **Ponto em U Horizontal (Wolff):** Distribui a tensão lateralmente. Muito usado em pele sob moderada tensão e fixação de drenos.
- **Ponto em Cruz / Cruciado (X):** Mais rápido que o simples separado, boa hemostasia de borda e resistência à tração.
- **Sutura Intradérmica Contínua:** Feita na derme com fio absorvível monofilamentar (Monocryl ou PDS 3-0/4-0). Excelente estética, sem pontos externos para o animal morder.

### 2. Padrões Invaginantes (Bordas voltadas para dentro)
Projetam as bordas epiteliais/mucosas para o interior do lúmen, garantindo contato serosa-serosa que sela hermeticamente a víscera oca por deposição rápida de fibrina em 2 a 4 horas.
- **Padrão de Cushing:** Contínuo, paralelo à linha de incisão, penetrando na serosa e muscular até a submucosa (NÃO perfura a mucosa). Hermético e ideal para bexiga, estômago e útero.
- **Padrão de Lembert:** Perpendicular à incisão, invaginante seromuscular. Usado isolado ou como segunda camada de reforço sobre uma sutura aposicional em vísceras ocas.

> **ALERTA CIRÚRGICO CRÍTICO:** Padrões invaginantes (Cushing/Lembert) são **RIGOROSAMENTE PROIBIDOS na pele**. A invaginação dérmica coloca epiderme queratinizada contra epiderme, impedindo a neovascularização cicatricial e gerando deiscência obrigatória!`,
        causalChain: {
          cause: 'Aplicação de sutura invaginante na pele ou sutura mucosa-perfurante com fio trançado no intestino',
          mechanism: 'Falta de aposição celular no primeiro caso e translocação intraluminal de coliformes com fístula no segundo',
          effect: 'Retardo de cicatrização dérmica ou peritonite bacteriana por vazamento entérico',
          clinicalMeaning: 'Deiscência de ferida operatória, sepse peritoneal e necessidade de reintervenção emergencial'
        }
      },
      {
        id: 'surg_patterns_sec_2',
        type: 'lab',
        title: 'Bancada do Centro Cirúrgico: Laboratório de Síntese',
        labType: 'surgical_center_bench',
        labConfig: {
          mode: 'suture_bench',
          defaultTissue: 'linea_alba',
          targetTension: 'balanced'
        }
      },
      {
        id: 'surg_patterns_sec_3',
        type: 'exercise',
        title: 'Avaliação Prática: Erro Crítico na Síntese Cutânea',
        exerciseId: 'ex_surg_03'
      }
    ]
  }
];

export const SURGICAL_TECHNIQUE_EXERCISES: Record<string, LearningExercise> = {
  ex_surg_01: {
    id: 'ex_surg_01',
    conceptId: 'concept_surgical_halsted_principles',
    type: 'multiple_choice',
    prompt: 'Durante a ressecção de um volumoso lipoma subcutâneo de 12 cm no flanco de um cão Labrador de 35 kg, formou-se uma grande cavidade residual após a remoção da massa. Segundo os princípios de Halsted, qual a manobra cirúrgica primordial para prevenir a formação de um volumoso seroma compressivo?',
    options: [
      {
        id: 'opt_surg_1_a',
        text: 'Obliteração metódica do espaço morto através de pontos de adesão (pontos de caminhada de Quénu/Mayo) ancorando o subcutâneo na fáscia muscular profunda com fio absorvível.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A obliteração do espaço morto impede o acúmulo de fluido sero-hemorrágico nos planos clivados, garantindo aposição das superfícies e reduzindo a tensão sob a linha de sutura cutânea.'
      },
      {
        id: 'opt_surg_1_b',
        text: 'Apenas fechar a pele com nós extremamente apertados para comprimir a ferida por fora, sem suturar o subcutâneo.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Nós apertados na pele causam isquemia e necrose das bordas dérmicas sem eliminar o espaço morto profundo, resultando em seroma maciço e deiscência.'
      },
      {
        id: 'opt_surg_1_c',
        text: 'Preencher toda a cavidade com pó de talco e gaze embebida em álcool para cauterizar quimicamente as paredes.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e lesivo. O talco e o álcool induzem necrose celular grave, reação inflamatória granulomatosa severa e choque por dor.'
      },
      {
        id: 'opt_surg_1_d',
        text: 'Deixar a ferida completamente aberta em segunda intenção para que sangre livremente para o exterior.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Uma ferida cirúrgica limpa deve ser sintetizada em primeira intenção com controle de espaço morto e drenos se necessário.'
      }
    ],
    causalChain: {
      cause: 'Espaço morto residual não obliterado após exérese tumoral extensa',
      mechanism: 'Acúmulo de transudato seroso nos planos anatômicos descolados',
      effect: 'Formação de seroma com elevação da tensão mecânica sobre as suturas superficiais',
      clinicalMeaning: 'Deiscência de ferida operatória, dor e risco de infecção bacteriana secundária'
    },
    pedagogicalExplanation: 'Os princípios de Halsted enfatizam a eliminação meticulosa do espaço morto como barreira física contra acúmulo de fluidos estéreis ou contaminados.'
  },
  ex_surg_02: {
    id: 'ex_surg_02',
    conceptId: 'concept_suture_materials_selection',
    type: 'multiple_choice',
    prompt: 'Em uma cadela da raça Rottweiler de 38 kg submetida a laparotomia exploratória, qual é a escolha biomaterial mais adequada para o fechamento da linha alba (fáscia aponeurótica da bainha do músculo reto abdominal)?',
    options: [
      {
        id: 'opt_surg_2_a',
        text: 'Fio monofilamentar sintético de absorção lenta (Polidioxanona / PDS II) de calibre 0 ou 2-0 com agulha cilíndrica atraumática.',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! A linha alba é composta por tecido conjuntivo denso e aponeurótico de cicatrização lenta (requer 42 a 60 dias para recuperar 60-80% de sua força tênsil original). O PDS mantém resistência tênsil por até 6 semanas e, sendo monofilamentar, desliza sem serração tecidual.'
      },
      {
        id: 'opt_surg_2_b',
        text: 'Categute cromado 1 com agulha cortante, pois é de origem biológica e degrada em menos de 10 dias.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e perigoso. O categute perde a maior parte de sua resistência mecânica aos 7-14 dias por fagocitose enzimática, momento em que a fáscia abdominal ainda não cicatrizou, levando invariavelmente a hérnias incisionais e evisceração fatal.'
      },
      {
        id: 'opt_surg_2_c',
        text: 'Fio de seda trançada 3-0, pois é multifilamentar macio e não machuca as mãos do cirurgião.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A seda trançada tem alta capilaridade bacteriana, gera intensa reação de corpo estranho e perde força precocemente, além do calibre 3-0 ser inadequado para sustentar o peso abdominal de 38 kg.'
      },
      {
        id: 'opt_surg_2_d',
        text: 'Fio de algodão hospitalar com nó cego e agulha reta de costura.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O algodão é material não estandardizado para cirurgia interna e desencadeia granulomas de corpo estranho volumosos e fístulas crônicas.'
      }
    ],
    causalChain: {
      cause: 'Uso de fio de absorção rápida (categute) na síntese da aponeurose muscular da linha alba',
      mechanism: 'Degradação biológica do fio aos 10 dias antes que a fáscia atinja resistência colágena madura',
      effect: 'Ruptura da linha de sutura pelo aumento da pressão intra-abdominal',
      clinicalMeaning: 'Hérnia incisional transfixante com evisceração intestinal aguda e choque séptico'
    },
    pedagogicalExplanation: 'A linha alba exige fios sintéticos absorvíveis de longa duração (PDS II) ou inabsorvíveis (Polipropileno/Nylon) em calibres proporcionais ao peso corpóreo do animal.'
  },
  ex_surg_03: {
    id: 'ex_surg_03',
    conceptId: 'concept_suture_patterns_synthesis',
    type: 'multiple_choice',
    prompt: 'Um residente veterinário propôs utilizar o padrão invaginante de Cushing contínuo para realizar o fechamento da pele após uma mastectomia em uma cadela. Por que essa conduta é contraindicada pela técnica cirúrgica?',
    options: [
      {
        id: 'opt_surg_3_a',
        text: 'Porque padrões invaginantes na pele viram os bordos epidérmicos para dentro, colocando queratina em contato com queratina e impedindo a adesão derme-derme e a neovascularização epitelial, causando deiscência garantida.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! A pele necessita obrigatoriamente de síntese aposicional estrita (derme contra derme e epiderme alinhada). Inverter as bordas isola as camadas profundas e bloqueia o trânsito de fibroblastos e capilares.'
      },
      {
        id: 'opt_surg_3_b',
        text: 'Porque o padrão de Cushing só pode ser realizado em ossos longos fraturados.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O padrão de Cushing é exclusivo de tecidos moles e vísceras ocas (estômago, bexiga, útero) e jamais utilizado em ossos.'
      },
      {
        id: 'opt_surg_3_c',
        text: 'Porque o padrão de Cushing exige o dobro de tempo para ser confeccionado em comparação a um simples separado.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O Cushing é contínuo e rápido; o problema não é o tempo cirúrgico, mas sim a biomecânica de invaginação e retardo biológico de cicatrização.'
      },
      {
        id: 'opt_surg_3_d',
        text: 'Porque padrões invaginantes aumentam a pressão arterial sistêmica do paciente sob anestesia.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O padrão de sutura cutânea não altera a pressão arterial sistêmica.'
      }
    ],
    causalChain: {
      cause: 'Uso de padrão invaginante (Cushing ou Lembert) na sutura da pele',
      mechanism: 'Inversão das bordas epiteliais com barreira mecânica queratinizada entre as camadas dérmicas',
      effect: 'Incapacidade de ponte de fibrina e neovascularização endotelial cruzada',
      clinicalMeaning: 'Deiscência completa da ferida operatória, fístula exsudativa e cicatriz atrófica defeituosa'
    },
    pedagogicalExplanation: 'A pele humana e veterinária deve ser suturada em estrita aposição anatômica (Simples Separado, Wolff, Cruciado ou Intradérmico).'
  }
};
