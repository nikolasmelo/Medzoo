// src/learning/data/lessons/semiologyLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const SEMIOLOGY_EXERCISES: Record<string, LearningExercise> = {
  ex_semio_01: {
    id: 'ex_semio_01',
    conceptId: 'concept_semiology_general_exam',
    type: 'multiple_choice',
    prompt: 'Ao examinar um felino doméstico macho de 4 anos com histórico de agressividade por dor decorrente de trauma pélvico, qual abordagem semiológica e método de contenção física inicial é preconizado para garantir a segurança da equipe e evitar agravamento de lesões ósseas e musculares do paciente?',
    options: [
      {
        id: 'opt_1',
        text: 'Abordagem "Cat-Friendly" em ambiente calmo e silencioso, utilizando toalha grossa para técnica de "burrito" felino (enrolamento corporal que imobiliza as quatro patas mantendo o dorso protegido) ou luvas de couro macias sem torção espinhal.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A semiologia felina moderna exige técnicas de baixo estresse ("Cat Friendly"). A contenção com toalha em formato de "burrito" permite expor seletivamente a cabeça ou os membros para punção venosa e aferição de parâmetros, sem exercer pressão lesiva sobre a pelve fraturada e prevenindo mordeduras e arranhaduras.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Contenção estrita pelo "scruffing" (pinçamento com força máxima da pele da nuca com elevação do gato no ar pelas quatro patas).',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e desaconselhado. O "scruffing" agressivo eleva os níveis de cortisol e adrenalina, intensifica o pânico e pode agravar fraturas de pelve e coluna vertebral pelo arqueamento forçado do corpo.',
        conceptualErrorCategory: 'scruffing_misconception'
      },
      {
        id: 'opt_3',
        text: 'Amarrar as patas dianteiras e traseiras juntas com corda de náilon e deitar o animal diretamente sobre o chão frio de concreto.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e antiético. A contenção física deve ser humanitária, atraumática e proteger a estabilidade biomecânica do paciente traumatizado.',
        conceptualErrorCategory: 'traumatic_restraint_error'
      },
      {
        id: 'opt_4',
        text: 'Iniciar o exame físico pela abertura forçada da boca com pinça de ferro antes de qualquer inspeção visual à distância.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O exame semiológico sempre progride do menos invasivo (inspeção à distância em repouso) para o mais invasivo; abrir a boca de um gato traumatizado sem tranquilização provocará reação violenta imediata.',
        conceptualErrorCategory: 'order_of_examination_error'
      }
    ],
    pedagogicalExplanation: 'A semiotécnica de contenção deve equilibrar a segurança do examinador com a integridade física e o bem-estar do animal, priorizando métodos de baixo estresse em espécies de alta reatividade.',
    causalChain: {
      cause: 'Contenção inadequada por pinçamento forçado da nuca em felino com fratura pélvica',
      mechanism: 'Disparo adrenérgico extremo com contração espasmódica da musculatura lombossacra',
      effect: 'Deslocamento de fragmentos ósseos ilíacos com risco de laceração da uretra ou vasos ilíacos',
      clinicalMeaning: 'Choque neurogênico por dor, hemorragia interna e colapso hemodinâmico agudo'
    }
  },

  ex_semio_02: {
    id: 'ex_semio_02',
    conceptId: 'concept_semiology_general_exam',
    type: 'multiple_choice',
    prompt: 'Durante o exame físico geral de um cão com histórico de vômitos profusos e diarreia, a pele da região interescapular permanece em prega por 4 segundos após pinçamento (turgor cutâneo diminuído), o Tempo de Preenchimento Capilar (TPC) é de 3,5 segundos, os globos oculares apresentam enoftalmia leve e a mucosa gengival está opaca e ressecada. Qual é a estimativa percentual de desidratação e sua fisiopatologia hemodinâmica?',
    options: [
      {
        id: 'opt_1',
        text: 'Desidratação Moderada a Grave (8% a 10%): perda de líquido intersticial e intravascular com hipovolemia, provocando vasoconstrição periférica reflexa para manter a pressão arterial central, o que retarda o TPC e resseca o tecido dérmico.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O exame físico geral quantifica a desidratação através de marcadores clínicos: < 5% é indetectável no exame físico; 5-6% apresenta discreta perda de turgor; 8-10% exibe turgor prolongado (> 3s), TPC lentificado (> 2-3s), enoftalmia e mucosas secas; > 12% cursa com choque hipovolêmico iminente.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Desidratação Subclínica Leve (< 4%): a retenção hídrica compensatória renal impede alterações significativas na derme ou no leito vascular.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Desidratação < 5% não gera perda detectável de turgor cutâneo nem enoftalmia; sinais evidentes como turgor de 4s e TPC de 3.5s representam perdas volêmicas graves (8-10%).',
        conceptualErrorCategory: 'underestimation_error'
      },
      {
        id: 'opt_3',
        text: 'Hiper-hidratação Iatrogênica com retenção de líquido e extravasamento no espaço pericapilar dérmico.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A hiper-hidratação causaria turgor gelatinoso imediato, quemose, mucosas hiperemiadas úmidas e estertores pulmonares, oposto do quadro ressecado e enoftálmico.',
        conceptualErrorCategory: 'opposite_pathology_confusion'
      },
      {
        id: 'opt_4',
        text: 'Hipotermia acidental isolada sem qualquer distúrbio de balanço hídrico corporal.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Embora o frio atrase o TPC, ele não induz enoftalmia nem perda persistente do turgor elástico dérmico.',
        conceptualErrorCategory: 'hypothermia_misattribution'
      }
    ],
    pedagogicalExplanation: 'A avaliação semiológica da hidratação integra turgor cutâneo, TPC, umidade de mucosas e posição do globo ocular. Identificar o grau exato orienta a fluidoterapia de reposição em volume e velocidade.',
    causalChain: {
      cause: 'Perda aguda maciça de fluidos e eletrólitos pelo trato gastrintestinal (êmese e diarreia)',
      mechanism: 'Depleção do volume hídrico extracelular e intravascular com ativação simpática vasoconstritora periférica',
      effect: 'Redução da elasticidade cutânea por perda de turgor intersticial e retardo no enchimento capilar (> 3s)',
      clinicalMeaning: 'Desidratação de 8-10% com hipovolemia crítica exigindo reposição imediata com cristaloides balanceados'
    }
  },

  ex_semio_03: {
    id: 'ex_semio_03',
    conceptId: 'concept_semiology_auscultation',
    type: 'multiple_choice',
    prompt: 'Na ausculta cardíaca de um cão idoso no hemitórax esquerdo, no 5º espaço intercostal ventral (foco mitral / ápice cardíaco), ausculta-se um ruído áspero de intensidade IV/VI que ocupa toda a sístole (entre a primeira bulha B1 e a segunda bulha B2) e mascara o fechamento da valva mitral. Não há frêmito precordial palpável. Qual a interpretação semiológica desse achado?',
    options: [
      {
        id: 'opt_1',
        text: 'Sopro sistólico holossistólico/pansistólico de regurgitação no foco mitral, característico de degeneração mixomatosa da valva atrioventricular esquerda (endocardiose mitral).',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! No foco mitral (5º espaço intercostal esquerdo), um sopro que se estende do início de B1 até B2 indica fluxo turbulento retrógrado do ventrículo esquerdo para o átrio esquerdo durante a sístole ventricular mecânica, marca registrada da insuficiência mitral crônica.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Sopro diastólico aórtico precoce em foco da base cardíaca esquerda (4º espaço intercostal dorsal).',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O sopro foi auscultado no 5º EIC ventral (foco mitral) e ocorre na sístole (entre B1 e B2), não na diástole (após B2).',
        conceptualErrorCategory: 'cardiac_phase_confusion'
      },
      {
        id: 'opt_3',
        text: 'Atrito pericárdico contínuo independente do ciclo cardíaco causado por acúmulo de fibrina.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O atrito pericárdico é tipicamente trifásico (sístole atrial, sístole ventricular e início da diástole), soa como couro novo raspando e não varia com os focos valvares clássicos.',
        conceptualErrorCategory: 'pericardial_confusion'
      },
      {
        id: 'opt_4',
        text: 'Terceira bulha cardíaca (B3) protodiastólica indicando ritmo de galope fisiológico juvenil.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Bulhas são ruídos curtos transitórios; um ruído áspero que preenche todo o intervalo B1-B2 em cão idoso é um sopro sistólico patológico verdadeiro.',
        conceptualErrorCategory: 'heart_sound_misattribution'
      }
    ],
    pedagogicalExplanation: 'Os focos de ausculta no hemitórax esquerdo seguem a regra mnemônica PAM (Pulmonar no 3º EIC, Aórtico no 4º EIC, Mitral no 5º EIC) e Tricúspide no hemitórax direito (4º EIC). O tempo no ciclo (sístole vs diástole) e o foco de máxima intensidade definem a lesão valvar.',
    causalChain: {
      cause: 'Degeneração mixomatosa dos folhetos da valva mitral com coaptação incompleta na sístole',
      mechanism: 'Refluxo turbulento de sangue em alta velocidade do ventrículo esquerdo para o átrio esquerdo',
      effect: 'Vibração dos tecidos intracardíacos gerando ruído acústico audível entre B1 e B2 (sopro sistólico)',
      clinicalMeaning: 'Sobrecarga volumétrica de átrio esquerdo com risco de dilatação atrial, edema pulmonar e tosse cardiogênica'
    }
  },

  ex_semio_04: {
    id: 'ex_semio_04',
    conceptId: 'concept_semiology_rumen_abdominal',
    type: 'multiple_choice',
    prompt: 'Uma vaca Holandesa de alta produção (35 L/dia), no 15º dia pós-parto, apresenta anorexia para concentrado, fezes escassas e queda abrupta da lactação. Na ausculta do flanco esquerdo com percussão digital simultânea (percussão auscultatória) ao longo de uma linha imaginária entre a tuberosidade coxal e o 9º espaço intercostal, ausculta-se um som ressonante agudo metálico característico ("ping" timpânico de alta frequência, comparável a uma gota de água caindo em um balde vazio ou moeda em azulejo). O que esse som patognomônico indica?',
    options: [
      {
        id: 'opt_1',
        text: 'Deslocamento de Abomaso à Esquerda (LDA): o abomaso atônico e distendido por gás e líquido migrou da sua posição ventral fisiológica direita para o espaço entre o rúmen e a parede abdominal esquerda.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! O "ping" de flanco esquerdo associado à ausculta e percussão combinada é o sinal patognomônico clássico de LDA em vacas leiteiras de transição. A atonia abomasal por hipocalcemia subclínica e excesso de concentrado permite o acúmulo de gás; o órgão sobe pelo lado esquerdo comprimindo o rúmen.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Timpanismo ruminal espumoso agudo generalizado ocupando ambos os lados da cavidade.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O timpanismo ruminal produz distensão dorsal difusa de toda a fossa paralombar esquerda com som timpânico abafado à percussão simples, e não o "ping" sonoro e metálico pontual circunscrito do LDA.',
        conceptualErrorCategory: 'ruminal_bloat_confusion'
      },
      {
        id: 'opt_3',
        text: 'Reticuloperitonite Traumática Aguda (RPT) com perfuração diafragmática por corpo estranho metálico.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A RPT cursa com xifoidalgia, dor à prova do beliscamento de cernelha ou teste do bastão e febre, sem "ping" metálico de víscera migrada.',
        conceptualErrorCategory: 'rpt_confusion'
      },
      {
        id: 'opt_4',
        text: 'Estenose congênita do piloro sem alteração de posição de vísceras abdominais.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A estenose pilórica congênita manifesta-se em bezerros jovens com vômitos/refluxo pós-mamada, e não em vacas adultas recém-paridas.',
        conceptualErrorCategory: 'congenital_pyloric_error'
      }
    ],
    pedagogicalExplanation: 'A percussão auscultatória detecta a interface ar-líquido sob tensão mecânica dentro de uma víscera oca deslocada. O ping esquerdo confirma LDA e requer resolução cirúrgica (omentopexia/abomasopexia) ou rolamento.',
    causalChain: {
      cause: 'Atonia abomasal no periparto associada a hipocalcemia subclínica e dieta rica em concentrados',
      mechanism: 'Fermentação e produção de gás com migração do abomaso sob o saco ventral do rúmen para o flanco esquerdo',
      effect: 'Aprisionamento de bolsa de gás entre a parede costal esquerda e o rúmen gerando interface acústica',
      clinicalMeaning: 'Som de ping metálico à percussão auscultatória, hipocloridemia, alcalose metabólica e perda produtiva'
    }
  },

  ex_semio_05: {
    id: 'ex_semio_05',
    conceptId: 'concept_semiology_pulse_perfusion',
    type: 'multiple_choice',
    prompt: 'Durante a avaliação emergencial de um equino Puro Sangue Inglês de 500 kg com síndrome cólica aguda grave, o veterinário palpa a artéria facial externa sobre a face lateral da mandíbula e nota pulso arterial extremamente fraco, rápido (frequência de 88 bpm) e filiforme (quase imperceptível). Simultaneamente, o TPC é de 4,0 segundos e as mucosas orais apresentam coloração vermelho-escura com halo arroxeado ao redor das bordas gengivais ("linha tóxica"). Qual o estado hemodinâmico do paciente e a conduta prioritária?',
    options: [
      {
        id: 'opt_1',
        text: 'Choque endotóxico / distributivo descompensado por isquemia intestinal: a linha tóxica indica endotoxemia grave por LPS bacteriano, gerando vasodilatação periférica estagnada, falência de retorno venoso e colapso do débito cardíaco. Conduta: ressuscitação volêmica vigorosa imediata com cristaloides balanceados em fluxo contínuo e anti-inflamatório antitóxico (Flunixin meglumine).',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A combinação de pulso filiforme (baixa amplitude por queda crítica do volume sistólico), taquicardia (> 80 bpm), TPC > 3-4s e "linha tóxica" gengival é a clássica apresentação do choque séptico endotóxico do cavalo com cólica estrangulativa. O endotélio microvascular colapsa sob ação do LPS, exigindo fluidoterapia massiva e preparo para celiotomia exploratória de urgência.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Condição atlética normal em repouso com excelente tônus vagal e hiperperfusão capilar.',
        isCorrect: false,
        pedagogicalFeedback: 'Absurdo. A frequência normal do equino adulto é 28 a 40 bpm; 88 bpm com pulso filiforme e linha tóxica representa choque em estágio crítico com risco iminente de morte.',
        conceptualErrorCategory: 'vagal_misattribution'
      },
      {
        id: 'opt_3',
        text: 'Hipertensão arterial sistêmica primária por feocromocitoma secretor de adrenalina.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A hipertensão geraria pulso saltão/duro e não filiforme colapsado, além de ser patologia extremamente rara em equinos.',
        conceptualErrorCategory: 'hypertension_confusion'
      },
      {
        id: 'opt_4',
        text: 'Hipotermia leve isolada que deve ser tratada exclusivamente com secador de cabelo térmico.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O quadro é uma emergência hemodinâmica e cirúrgica abdominal grave com endotoxemia sistêmica.',
        conceptualErrorCategory: 'hypothermia_misconception'
      }
    ],
    pedagogicalExplanation: 'A palpação de pulso arterial reflete o volume sistólico e a pressão de pulso (diferença entre pressão sistólica e diastólica). Pulso filiforme com taquicardia extrema é a marca registrada do choque distributivo/hipovolêmico avançado.',
    causalChain: {
      cause: 'Torção intestinal com infarto isquêmico e translocação massiva de lipopolissacarídeos (LPS) de bactérias gram-negativas',
      mechanism: 'Liberação sistêmica de óxido nítrico e citocinas com sequestro microvascular e paralisia endotelial',
      effect: 'Queda catastrófica do retorno venoso com diminuição do volume sistólico e pulso arterial filiforme',
      clinicalMeaning: 'Choque endotóxico com hipóxia celular generalizada, linha tóxica gengival e risco imediato de óbito'
    }
  }
};

export const SEMIOLOGY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_semiology_general_exam',
    moduleId: 'mod_semiology',
    title: 'Contenção Segura, Anamnese & Exame Físico Geral',
    subtitle: 'A semiotécnica canônica: abordagem por espécie, semiogênese e avaliação primária crânio-caudal.',
    estimatedMinutes: 20,
    objectives: [
      'Executar contenção física e abordagem humanitária e segura em cães, gatos, equinos e bovinos',
      'Estruturar anamnese dirigida distinguindo queixa principal, evolução temporal e histórico pregresso',
      'Realizar a inspeção crânio-caudal sistemática: escore corporal, nível de consciência e hidratação'
    ],
    concepts: ['concept_semiology_general_exam'],
    sections: [
      {
        id: 'sec_semio_gen_01',
        type: 'theory',
        title: 'Princípios da Semiogênese e da Propedêutica Geral',
        contentMarkdown: `# Aula Universitária: Propedêutica Veterinária — Contenção, Anamnese & Exame Geral

> 📖 Referência Canônica: Feitosa, F. L. F. *Semiologia Veterinária: A Arte do Diagnóstico*, 4ª ed. Roca. Radostits, O. M. et al. *Exame Clínico e Diagnóstico em Veterinária*, Guanabara Koogan. Smith, B. P. *Large Animal Internal Medicine*, 6th ed. Elsevier.

A semiologia é a gramática universal da medicina. Sem um exame físico sistemático e minucioso, qualquer exame complementar torna-se um mero gerador de incertezas e custos desnecessários:

### 1. A Abordagem e Contenção por Espécie
- **Caninos:** Abordagem lateral sem contato visual direto ameaçador; mordaça de fita ou de náilon se houver risco de dor aguda ou agressividade.
- **Felinos:** Filosofia *Cat-Friendly*. Uso de toalhas macias para técnica de "burrito", feromônios sintéticos (Feliway) e redução drástica de ruídos metálicos. Evitar o "scruffing" traumatizante.
- **Equinos:** Abordagem pelo lado esquerdo (lado de montaria) na altura da espádua. Contenção com cabresto e guia; se necessário para procedimentos breves de dor, cachimbo labial superior (*twitch*) ou peia de membros.
- **Bovinos:** Tronco de contenção mecânico com pescoceira acolchoada. Contenção manual com pegador nasal (sem perfuração de septo) ou laço em oito de membros posteriores.

---

### 2. A Estrutura Racional da Anamnese
A anamnese deve investigar:
1. **Queixa Principal (QP):** O motivo exato que levou o tutor ou produtor a solicitar atendimento ("O cavalo está rolando de cólica há 2 horas").
2. **Histórico da Doença Atual (HDA):** Início dos sinais (súbito vs insidioso), evolução, tratamentos prévios realizados na fazenda ou clínica e resposta obtida.
3. **Histórico Sanitário e de Manejo:** Vacinações atualizadas, vermifugações, tipo de alimentação (volumoso vs concentrado), ambiente e histórico de outros animais acometidos no mesmo lote.

\`\`\`mermaid
flowchart TD
    A["Inspeção à Distância: Nível de Consciência, Marcha, Postura e Escore Corporal"] --> B["Exame Físico Próximo Crânio-Caudal"]
    B --> C["Mucosas Aparentes e Tempo de Preenchimento Capilar (TPC)"]
    B --> D["Linfonodos Palpáveis Superficiais"]
    B --> E["Hidratação: Turgor Cutâneo e Enoftalmia"]
    B --> F["Tríade Vital: Frequência Cardíaca, Frequência Respiratória e Temperatura"]
\`\`\``,
        causalChain: {
          cause: 'Contenção estressante e dolorosa em paciente felino traumatizado',
          mechanism: 'Descarga massiva de adrenalina e noradrenalina simpática endógena',
          effect: 'Elevação artificial de frequência cardíaca (> 240 bpm), temperatura e pressão arterial',
          clinicalMeaning: 'Falseamento completo dos parâmetros vitais e risco de choque descompensatório'
        }
      },
      {
        id: 'sec_semio_gen_02',
        type: 'exercise',
        title: 'Verificação Prática: Contenção Cat-Friendly e Abordagem Segura',
        exerciseId: 'ex_semio_01'
      }
    ]
  },

  {
    id: 'lesson_semiology_vitals_hydration',
    moduleId: 'mod_semiology',
    title: 'Parâmetros Vitais, Mucosas & Avaliação da Desidratação',
    subtitle: 'Aferição comparada de FC, FR e temperatura retal, colorações de mucosas e escalas de perda volêmica.',
    estimatedMinutes: 22,
    objectives: [
      'Aferir e comparar os parâmetros vitais normais entre pequenos animais, equinos e ruminantes',
      'Interpretar as alterações patológicas das mucosas aparentes (palidez, icterícia, cianose, congestão)',
      'Classificar com precisão milimétrica a desidratação clínica de 5% a 12% para cálculo de fluidoterapia'
    ],
    concepts: ['concept_semiology_general_exam'],
    sections: [
      {
        id: 'sec_semio_vit_01',
        type: 'theory',
        title: 'Parâmetros Fisiológicos e Semiótica das Mucosas e da Hidratação',
        contentMarkdown: `# Aula Universitária: Parâmetros Vitais, Mucosas & Balanço Hídrico

> 📖 Referência Canônica: Feitosa, F. L. F. *Semiologia Veterinária*, 4ª ed. Cunningham, J. G. *Tratado de Fisiologia Veterinária*, 5ª ed. Elsevier.

A aferição dos parâmetros vitais fornece o mapa hemodinâmico instantâneo do paciente:

### 1. Parâmetros Vitais Fisiológicos em Repouso Comparados

| Espécie | Frequência Cardíaca (bpm) | Frequência Respiratória (mpm) | Temperatura Retal (°C) |
|---|---|---|---|
| **Cão Adulto** | 70 a 140 (porte grande a pequeno) | 18 a 34 | 37,5 a 39,2 °C |
| **Gato Adulto** | 140 a 220 | 20 a 40 | 38,0 a 39,2 °C |
| **Equino Adulto** | 28 a 40 | 8 a 16 | 37,2 a 38,3 °C |
| **Bovino Adulto** | 60 a 80 | 15 a 35 | 38,0 a 39,3 °C |
| **Ovino / Caprino** | 70 a 90 | 15 a 30 | 38,5 a 40,0 °C |

---

### 2. Semiótica das Mucosas Aparentes
A lâmina própria das mucosas conjuntival, oral (gengival), genital e anal reflete a microcirculação:
- **Normocorada (Rósea):** Perfusão capilar saudável.
- **Pálida / Porcelana:** Vasoconstrição simpática grave, anemia hemolítica (*Babesia*, *Mycoplasma*, *Haemonchus*) ou choque hipovolêmico grave.
- **Ictérica (Amarela):** Depósito tecidual de bilirrubina ($> 2,0\text{ mg/dL}$). Hemólise intravascular (pré-hepática), colangite/lipidose (hepática) ou obstrução do ducto colédoco (pós-hepática).
- **Cianótica (Azul/Roxa):** Concentração de desoxi-hemoglobina $> 5\text{ g/dL}$ nos capilares periféricos. Insuficiência ventilatória severa, pneumotórax ou choque séptico terminal.
- **Congesta / Hiperêmica (Tijolo):** Vasodilatação inflamatória ou endotoxemia (fase hiperdinâmica do choque).
- **Linha Tóxica:** Halo arroxeado de 2-3 mm na borda dos dentes incisivos em equinos, patognomônico de absorção de endotoxina (LPS) de gram-negativos.

---

### 3. Escala Semiológica da Desidratação

| Desidratação (%) | Achados Semiológicos Objetivos | Conduta de Reposição |
|---|---|---|
| **< 5% (Subclínica)** | Sem alterações clínicas detectáveis; histórico de perdas | Manutenção eletrolítica |
| **5% a 6% (Leve)** | Discreta perda de elasticidade da pele (turgor volta em 1-2s), mucosas levemente pegajosas | Cristaloides 50 mL/kg/dia |
| **8% a 10% (Moderada/Grave)** | Turgor cutâneo nítido (> 3s), TPC prolongado (3-4s), enoftalmia leve, mucosas secas | Reidratação rápida em 4-6h |
| **10% a 12% (Severa/Crítica)** | Pele não retorna (prega persistente), TPC > 4s, olhos encovados, extremidades frias | Expansão volêmica de choque imediata |
| **> 12% (Choque Iminente)** | Colapso cardiovascular, pulso filiforme, coma, risco imediato de óbito | Prova de carga com Ringer Lactato |`,
        causalChain: {
          cause: 'Perda profusa de água e eletrólitos por diarreia secretora e vômitos repetidos',
          mechanism: 'Depleção do volume hídrico extracelular com aumento da osmolaridade plasmática e hipovolemia',
          effect: 'Vasoconstrição reflexa periférica para preservação do fluxo cerebral e coronariano',
          clinicalMeaning: 'Turgor cutâneo lentificado, TPC prolongado (> 3s), enoftalmia e choque hipovolêmico'
        }
      },
      {
        id: 'sec_semio_vit_02',
        type: 'exercise',
        title: 'Verificação Clínica: Estimativa de Desidratação e Fisiopatologia Hemodinâmica',
        exerciseId: 'ex_semio_02'
      }
    ]
  },

  {
    id: 'lesson_semiology_auscultation',
    moduleId: 'mod_semiology',
    title: 'Ausculta PAM-T, Ritmos & Propedêutica Respiratória',
    subtitle: 'Focos valvares anatômicos, bulhas cardíacas B1 a B4, classificação de sopros de Levine e ruídos pulmonares.',
    estimatedMinutes: 24,
    objectives: [
      'Localizar anatomicamente os focos de ausculta valvar cardíaca PAM-T em pequenos e grandes animais',
      'Diferenciar bulhas fisiológicas (B1, B2) de ritmos de galope patológicos (B3, B4)',
      'Classificar sopros pela escala de Levine (I a VI) e diagnosticar estertores crepitantes vs sibilos'
    ],
    concepts: ['concept_semiology_auscultation'],
    sections: [
      {
        id: 'sec_semio_ausc_01',
        type: 'theory',
        title: 'Topografia e Mecânica da Ausculta Cardiorrespiratória',
        contentMarkdown: `# Aula Universitária: Propedêutica Cardiorrespiratória & Focos de Ausculta

> 📖 Referência Canônica: Feitosa, F. L. F. *Semiologia Veterinária*, 4ª ed. Ettinger, S. J. et al. *Textbook of Veterinary Internal Medicine*, 8th ed. Elsevier.

A ausculta torácica exige ambiente silencioso e posicionamento anatômico rigoroso da campânula e do diafragma do estetoscópio:

### 1. A Mnemônica Canônica PAM-T dos Focos Valvares
No **Hemitórax Esquerdo**, com o membro anterior tracionado cranialmente:
- **P (Foco Pulmonar):** 3º espaço intercostal (EIC) ventral, imediatamente acima do esterno.
- **A (Foco Aórtico):** 4º EIC, ligeiramente mais dorsal (nível da articulação escápulo-umeral).
- **M (Foco Mitral / Ápice Cardíaco):** 5º EIC ventral (área de choque precordial máximo).

No **Hemitórax Direito**:
- **T (Foco Tricúspide):** 4º EIC médio (nível da junção costocondral).

\`\`\`mermaid
flowchart LR
    subgraph Hemitórax Esquerdo
        P["Foco Pulmonar (3º EIC ventral)"]
        A["Foco Aórtico (4º EIC dorsal)"]
        M["Foco Mitral (5º EIC ventral / Ápice)"]
    end
    subgraph Hemitórax Direito
        T["Foco Tricúspide (4º EIC médio)"]
    end
\`\`\`

---

### 2. Bulhas Cardíacas Normais e Sons Adicionais
- **Primeira Bulha (B1 - "TUM"):** Fechamento das valvas atrioventriculares (Mitral e Tricúspide) no início da sístole mecânica. Som grave e prolongado.
- **Segunda Bulha (B2 - "TÁ"):** Fechamento das valvas semilunares (Aórtica e Pulmonar) no início da diástole mecânica. Som mais agudo e curto.
- **Terceira e Quarta Bulhas (B3 e B4):** Fisiológicas em equinos em repouso (enchimento ventricular rápido e sístole atrial). Em cães e gatos, são estritamente **PATOLÓGICAS**, compondo o **Ritmo de Galope** (marca registrada de miocardiopatia dilatada e sobrecarga diastólica grave).

---

### 3. A Escala de Levine para Graduação de Sopros Cardíacos (I a VI)
- **Grau I:** Sopro muito sutil, requer vários minutos em sala completamente silenciosa para ser percebido.
- **Grau II:** Sopro suave e discreto, mas audível imediatamente no foco específico.
- **Grau III:** Sopro de intensidade moderada, facilmente auscultado.
- **Grau IV:** Sopro intenso e ruidoso, que se irradia para o hemitórax contralateral, mas **SEM frêmito precordial palpável**.
- **Grau V:** Sopro muito intenso associado a **frêmito precordial palpável** (vibração física detectada pela palma da mão na parede torácica).
- **Grau VI:** Sopro estrondoso com frêmito evidente, audível mesmo com o estetoscópio **levemente afastado da pele**.`,
        causalChain: {
          cause: 'Degeneração mixomatosa da valva atrioventricular mitral com falha de coaptação sistólica',
          mechanism: 'Jato de regurgitação retrógrado em alta velocidade do ventrículo para o átrio esquerdo',
          effect: 'Sopro sistólico holossistólico áspero audível no 5º EIC esquerdo',
          clinicalMeaning: 'Sobrecarga volumétrica atrial com risco progressivo de edema pulmonar agudo cardiogênico'
        }
      },
      {
        id: 'sec_semio_ausc_02',
        type: 'exercise',
        title: 'Verificação Auscultatória: O Sopro Mitral do Canino Idoso',
        exerciseId: 'ex_semio_03'
      }
    ]
  },

  {
    id: 'lesson_semiology_rumen_abdominal',
    moduleId: 'mod_semiology',
    title: 'Propedêutica Digestiva de Grandes Animais (Rúmen & Cólica Equina)',
    subtitle: 'Dinâmica ruminal, estratificação, prova do "ping" no LDA/RDA e sondagem nasogástrica descompressiva.',
    estimatedMinutes: 24,
    objectives: [
      'Avaliar a motilidade e estratificação do rúmen por ausculta, palpação e percussão de flanco esquerdo',
      'Executar e interpretar a percussão auscultatória com som de "ping" metálico em LDA e RDA',
      'Dominar a técnica de sondagem nasogástrica em equinos com descompressão e avaliação de refluxo gástrico'
    ],
    concepts: ['concept_semiology_rumen_abdominal'],
    sections: [
      {
        id: 'sec_semio_rumen_01',
        type: 'theory',
        title: 'Semiologia do Sistema Digestório de Ruminantes e Equinos',
        contentMarkdown: `# Aula Universitária: Propedêutica de Grandes Animais — Rúmen & Abdômen Agudo

> 📖 Referência Canônica: Radostits, O. M. et al. *Clínica Veterinária*, 9ª ed. Dirksen, G. et al. *Exame Clínico dos Bovinos*, 3ª ed. Guanabara Koogan. White, N. A. *The Equine Acute Abdomen*, Lea & Febiger.

O exame do aparelho digestório de grandes animais exige semiotécnicas físicas estruturadas:

### 1. Avaliação do Rúmen (Flanco Esquerdo)
- **Ausculta Ruminal:** Estetoscópio posicionado na fossa paralombar esquerda. O rúmen normal apresenta **2 a 3 ciclos de contração a cada 2 minutos**, ouvidos como o som de uma trovoada distante ou cachoeira suave.
- **Estratificação Fisiológica:** À palpação com punho cerrado e percussão da fossa paralombar:
  - *Dorsal:* Camada de gás (som timpânico elástico).
  - *Médio:* Camada sólida de forragem fibrosa (resistência esponjosa elástica).
  - *Ventral:* Camada líquida com partículas densas e microorganismos (som submaciço).
- **Atonia Ruminal:** Parada total dos movimentos em casos de acidose láctica severa ($pH < 5,0$), hipocalcemia clínica (febre do leite) e peritonite difusa.

---

### 2. A Prova do "Ping" Metálico (Percussão Auscultatória)
Realiza-se percutindo com a ponta dos dedos ou martelo pleximétrico enquanto se ausculta com o estetoscópio:
- **Ping no Flanco Esquerdo (entre a 9ª e 13ª costelas):** Indica **Deslocamento de Abomaso à Esquerda (LDA)**. O abomaso distendido por gás migrou para o lado esquerdo, interpondo-se entre o rúmen e a parede costal.
- **Ping no Flanco Direito:** Indica **Deslocamento de Abomaso à Direita (RDA)** ou Torção de Abomaso (volvo abomasal), dilatação cecal ou pneumoperitônio. O RDA com torção é uma emergência cirúrgica hiperaguda com isquemia estrangulativa.

---

### 3. Sondagem Nasogástrica em Equinos com Cólica
O equino é **anatomicamente incapaz de vomitar** devido ao esfíncter cárdico hipertrofiado e à inserção oblíqua do esôfago no estômago.
- **Conduta Obrigatória na Cólica:** A sondagem nasogástrica através do meato nasal ventral até o estômago é diagnóstica e **terapêutica descompressiva salvadora**.
- **Refluxo Gástrico Positivo (> 2 a 5 litros):** Indica obstrução mecânica no intestino delgado (estrangulamento, hérnia, intussuscepção) ou íleo paralítico grave. A descompressão imediata impede a **ruptura gástrica fatal**!`,
        causalChain: {
          cause: 'Atonia abomasal no periparto associada a hipocalcemia subclínica e dieta rica em concentrados',
          mechanism: 'Fermentação e produção de gás com migração do abomaso sob o saco ventral do rúmen para o flanco esquerdo',
          effect: 'Aprisionamento de bolsa de gás entre a parede costal esquerda e o rúmen gerando interface acústica',
          clinicalMeaning: 'Som de ping metálico à percussão auscultatória, alcalose metabólica hipoclorêmica e desidratação'
        }
      },
      {
        id: 'sec_semio_rumen_02',
        type: 'exercise',
        title: 'Caso Clínico: O "Ping" Metálico do Flanco Esquerdo na Vaca Leiteira',
        exerciseId: 'ex_semio_04'
      }
    ]
  },

  {
    id: 'lesson_semiology_exam_bench',
    moduleId: 'mod_semiology',
    title: 'Pulso Arterial, Perfusão & Bancada de Exame Físico Virtual',
    subtitle: 'Palpação comparada de pulso, reconhecimento de choque descompensado e simulador de propedêutica.',
    estimatedMinutes: 25,
    objectives: [
      'Localizar e palpar o pulso arterial comparado (femoral, facial externa, digital palmar e coccígea)',
      'Diferenciar as características do pulso: frequência, ritmo e amplitude (cheio, filiforme, celer)',
      'Operar a bancada interativa de exame físico virtual identificando achados propedêuticos patológicos'
    ],
    concepts: ['concept_semiology_pulse_perfusion', 'concept_semiology_clinical_reasoning'],
    sections: [
      {
        id: 'sec_semio_bench_01',
        type: 'theory',
        title: 'Fisiopatologia do Pulso Arterial e Perfusão Periférica no Choque',
        contentMarkdown: `# Aula Universitária: Pulso Arterial & Perfusão Microvascular no Choque

> 📖 Referência Canônica: Feitosa, F. L. F. *Semiologia Veterinária*, 4ª ed. Silverstein, D. C.; Hopper, K. *Small Animal Critical Care Medicine*, 3rd ed. Elsevier.

A onda de pulso arterial reflete diretamente a contração do ventrículo esquerdo, o volume sistólico ejetado e a elasticidade das grandes artérias:

### 1. Artérias de Palpação por Espécie
- **Pequenos Animais (Cão e Gato):** **Artéria Femoral** na face medial da coxa (sulco femoral).
- **Equinos:** **Artéria Facial / Maxilar Externa** contornando a incisura vascular da mandíbula; **Artérias Digitais Palmares/Plantares** nos boletos (pulso digital aumentado com calor nos cascos é patognomônico de **Laminite Aguda**).
- **Bovinos:** **Artéria Coccígea Média** na face ventral da base da cauda; **Artéria Maxilar Externa**.

---

### 2. Qualidades Semiológicas do Pulso Arterial
1. **Frequência e Ritmo:** Síncrono batimento a batimento com a ausculta cardíaca. Se houver batimentos auscultados sem pulso arterial correspondente, diagnostica-se **Déficit de Pulso** (marca registrada de arritmias como Fibrilação Atrial e Extrassístoles Ventriculares).
2. **Amplitude (Altura da Onda de Pulso):**
   - *Pulso Cheio e Forte:* Volume sistólico adequado e pressão arterial mantida.
   - *Pulso Fraco / Filiforme:* Volume sistólico criticamente deprimido por choque hipovolêmico, hemorrágico ou cardiogênico.
   - *Pulso Celer / Saltão (Martelo d'água):* Subida e descida abruptas de alta amplitude, típico de Persistência do Ducto Arterioso (PDA) ou regurgitação aórtica severa.

---

### 3. Fases do Choque Circulatório e Reconhecimento Beira-Leito
- **Fase Compensada (Hiperdinâmica):** Taquicardia, mucosas hiperêmicas tijolo, TPC muito rápido ($< 1\text{ segundo}$), extremidades quentes e pulso arterial amplo e saltão.
- **Fase Descompensada (Hipodinâmica):** Hipotensão sistêmica, taquicardia extrema com pulso filiforme/fraco, TPC lentificado ($> 3\text{ a }4\text{ segundos}$), mucosas pálidas e descoradas, extremidades frias e depressão profunda do nível de consciência.`,
        causalChain: {
          cause: 'Choque séptico endotóxico descompensado com sequestro microvascular e paralisia vasomotora',
          mechanism: 'Queda extrema da resistência vascular periférica e redução crítica do retorno venoso ao coração',
          effect: 'Colapso do volume sistólico com pulso arterial filiforme imperceptível e TPC > 4 segundos',
          clinicalMeaning: 'Falência de perfusão celular generalizada com anóxia tecidual e morte se não houver infusão agressiva'
        }
      },
      {
        id: 'sec_semio_bench_02',
        type: 'exercise',
        title: 'Caso Crítico: O Pulso Filiforme e a Linha Tóxica na Cólica Equina',
        exerciseId: 'ex_semio_05'
      },
      {
        id: 'sec_semio_bench_03',
        type: 'lab',
        title: 'Laboratório Interativo: Bancada de Exame Físico & Propedêutica (Semiology Bench)',
        description: 'Assuma o papel do clínico de plantão. Selecione suas ferramentas (estetoscópio, termômetro, lanterna clínica, plexímetro e palpação) e examine pacientes caninos, bovinos e equinos. Identifique focos PAM-T, estertores, linfadenopatia e mucosas patológicas para acertar o laudo!',
        labType: 'semiology_exam_bench',
        labConfig: {
          targetPatient: 'Canino / Bovino / Equino'
        }
      }
    ]
  }
];
