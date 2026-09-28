// src/learning/data/lessons/semiologyLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const SEMIOLOGY_EXERCISES: Record<string, LearningExercise> = {
  ex_semio_01: {
    id: 'ex_semio_01',
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
      effect: 'Redução da elasticidade cutânea por perda de turgor intersticial e retardo no enchimento capilar capilar (> 3s)',
      clinicalMeaning: 'Desidratação de 8-10% com hipovolemia crítica exigindo reposição imediata com cristaloides balanceados'
    }
  },

  ex_semio_02: {
    id: 'ex_semio_02',
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

  ex_semio_03: {
    id: 'ex_semio_03',
    conceptId: 'concept_semiology_clinical_reasoning',
    type: 'multiple_choice',
    prompt: 'Um bezerro Nelore de 3 meses apresenta prostração, febre (40,5 °C), secreção nasal mucopurulenta bilateral, taquipneia superficial e respiração com abdução de cotovelos. Na ausculta pulmonar dos campos cranioventrais de ambos os hemitórax, auscultam-se estertores crepitantes úmidos (som de bolhas estourando / velcro) e áreas com ausência de murmúrio vesicular associadas a som maciço à percussão pleximétrica. Qual a correlação fisiopatológica e hipótese diagnóstica primária?',
    options: [
      {
        id: 'opt_1',
        text: 'Broncopneumonia bacteriana exsudativa com consolidação pulmonar cranioventral: alvéolos preenchidos por exsudato inflamatório purulento impedem a aeração normal, substituindo a ressonância pulmonar clara por macicez percussória.',
        isCorrect: true,
        pedagogicalFeedback: 'Excelente raciocínio! O pulmão normal é preenchido por ar e gera som claro pulmonar à percussão e murmúrio vesicular suave à ausculta. Quando bactérias (ex: Pasteurella multocida, Mannheimia haemolytica) colonizam as vias inferiores, os alvéolos são preenchidos por fibrina, neutrófilos e muco (hepatização/consolidação). A água/pus conduz som maciço à percussão e estertores crepitantes à entrada de ar.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Pneumotórax hipertensivo bilateral gerando colapso pulmonar com som timpânico e hiper-ressonância.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O pneumotórax cursa com acúmulo de ar livre na cavidade pleural, gerando som hiper-ressonante ou timpânico à percussão, e não macicez por consolidação tecidual.',
        conceptualErrorCategory: 'pneumothorax_confusion'
      },
      {
        id: 'opt_3',
        text: 'Timpanismo ruminal primário (espumoso) com compressão mecânica exclusiva do diafragma.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O timpanismo causa distensão dorsal do flanco esquerdo com som timpânico no rúmen; estertores crepitantes e secreção mucopurulenta nasal são sinais patognomônicos de infecção pulmonar primária.',
        conceptualErrorCategory: 'ruminal_misattribution'
      },
      {
        id: 'opt_4',
        text: 'Estenose congênita de traqueia com sibilos musicais expiratórios contínuos isolados.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Estenose de vias aéreas superiores causa estridor laríngeo ou sibilos na traqueia cervical, sem febre de 40,5 °C ou macicez cranioventral pulmonar.',
        conceptualErrorCategory: 'upper_airway_confusion'
      }
    ],
    pedagogicalExplanation: 'A semiologia respiratória correlaciona o som à física do meio: ar gera ressonância; líquido ou tecido consolidado gera macicez. Estertores crepitantes refletem a abertura abrupta de alvéolos colapsados e umedecidos por exsudato.',
    causalChain: {
      cause: 'Infecção por bactérias patogênicas do complexo respiratório bovino (Mannheimia/Pasteurella)',
      mechanism: 'Exsudação alveolar maciça de fibrina e neutrófilos com colapso do parênquima aéreo cranioventral',
      effect: 'Perda do som claro pulmonar (macicez à percussão) e ruídos adventícios crepitantes à ausculta',
      clinicalMeaning: 'Pneumonia consolidativa aguda com hipóxia grave exigindo antibioticoterapia e anti-inflamatório urgentes'
    }
  }
};

export const SEMIOLOGY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_semiology_general_exam',
    moduleId: 'mod_semiology',
    title: 'Exame Físico Geral, Nível de Consciência & Mucosas',
    subtitle: 'A base da medicina veterinária: como extrair evidências irrefutáveis da inspeção e palpação.',
    estimatedMinutes: 12,
    objectives: [
      'Executar o exame físico geral sistemático crânio-caudal',
      'Estimar o grau de desidratação integrando turgor cutâneo, TPC e enoftalmia',
      'Diferenciar as colorações das mucosas aparentes e seus significados patológicos'
    ],
    concepts: ['concept_semiology_general_exam'],
    sections: [
      {
        id: 'sec_semio_gen_01',
        type: 'theory',
        title: 'Propedêutica Geral: A Janela Sistêmica do Paciente',
        contentMarkdown: `### O Método Semiológico Sistemático

A semiologia é a gramática da medicina veterinária. Diante de qualquer animal (cão, gato, cavalo, vaca ou animal silvestre), a avaliação começa **à distância** (inspeção visual sem tocar no paciente) e progride para o **exame físico direto**.

\`\`\`mermaid
flowchart TD
    A["Inspeção à Distância: Nível de Consciência, Postura e Escore Corporal"] --> B["Exame Físico Próximo Crânio-Caudal"]
    B --> C["Mucosas Aparentes & Tempo de Preenchimento Capilar (TPC)"]
    B --> D["Linfonodos Palpáveis (Mandibulares, Pré-escapulares, Poplíteos)"]
    B --> E["Hidratação: Turgor Cutâneo e Enoftalmia"]
    B --> F["Tríade Vital: Frequência Cardíaca, Respiratória e Temperatura"]
\`\`\`

---

### Diagnóstico Semiológico pelas Mucosas Aparentes

| Coloração da Mucosa | Mecanismo Fisiopatológico | Hipóteses Clínicas Principais |
| :--- | :--- | :--- |
| **Normocorada (Rósea)** | Perfusão microvascular adequada | Homeostase hemodinâmica |
| **Pálida / Anêmica (Branca)** | Queda drástica de hemoglobina ou vasoconstrição periférica extrema | Anemia hemolítica (Babesia/Mycoplasma), hemorragia aguda, choque hipovolêmico |
| **Ictérica (Amarela)** | Depósito tecidual de bilirrubina (> 2 mg/dL no soro) | Hemólise intravascular maciça (pré-hepática), hepatite/lipidose (hepática), obstrução biliar (pós-hepática) |
| **Cianótica (Azul/Roxa)** | Concentração de desoxi-hemoglobina > 5 g/dL nos capilares | Insuficiência respiratória severa, obstrução de vias aéreas, edema agudo de pulmão |
| **Congesta / Hiperêmica (Tijolo)** | Vasodilatação capilar estagnada por endotoxinas | Choque séptico / endotoxemia (fase hiperdinâmica), golpe de calor |

> [!IMPORTANT]
> **Tempo de Preenchimento Capilar (TPC):**
> Pressione a gengiva firmemente com o polegar por 2 segundos e solte:
> - **Normal:** O retorno à cor rósea deve ocorrer em **1 a 2 segundos**.
> - **Prolongado (> 2,5 segundos):** Indica má perfusão periférica, vasoconstrição compensatória ou choque hipovolêmico/desidratação.
        `,
        causalChain: {
          cause: 'Hemorragia ativa ou lise eritrocitária massiva por hemoparasitas',
          mechanism: 'Queda na concentração total de hemoglobina circulante e vasoconstrição dérmica simpática',
          effect: 'Esvaziamento do leito capilar com perda da coloração rósea da lâmina própria mucosa',
          clinicalMeaning: 'Mucosa pálida / porcelana com risco iminente de colapso de oxigenação tecidual e óbito'
        }
      },
      {
        id: 'sec_semio_gen_02',
        type: 'exercise',
        title: 'Desafio Clínico: O Paciente Desidratado e o Tempo de TPC',
        exerciseId: 'ex_semio_01'
      }
    ]
  },

  {
    id: 'lesson_semiology_auscultation',
    moduleId: 'mod_semiology',
    title: 'Propedêutica Cardiorrespiratória & Ausculta Sistemática',
    subtitle: 'Focos cardíacos PAM-T, graduação de sopros e diferenciação de ruídos pulmonares adventícios.',
    estimatedMinutes: 14,
    objectives: [
      'Localizar anatomicamente os focos de ausculta valvar cardíaca em pequenos e grandes animais',
      'Classificar sopros cardíacos quanto ao tempo (sistólico/diastólico) e intensidade (graus I a VI)',
      'Identificar estertores crepitantes, sibilos e som maciço à percussão pulmonar'
    ],
    concepts: ['concept_semiology_auscultation'],
    sections: [
      {
        id: 'sec_semio_ausc_01',
        type: 'theory',
        title: 'A Topografia dos Sons Vitais: Tórax e Focos Valvares',
        contentMarkdown: `### A Regra Mnemônica Canônica: PAM-T

Para auscultar o coração de forma rigorosa, nunca coloque o estetoscópio "no meio do peito". O coração veterinário possui focos de máxima projeção acústica bem definidos:

\`\`\`mermaid
flowchart LR
    subgraph Hemitórax Esquerdo
        P["Foco Pulmonar: 3º EIC ventral"]
        A["Foco Aórtico: 4º EIC dorsal"]
        M["Foco Mitral (Ápice): 5º EIC ventral"]
    end
    subgraph Hemitórax Direito
        T["Foco Tricúspide: 4º EIC médio"]
    end
\`\`\`

---

### Classificação Internacional de Intensidade dos Sopros (Levine I a VI)

- **Grau I:** Sopro muito tênue, auscultado apenas após minutos em ambiente silencioso.
- **Grau II:** Sopro suave, audível imediatamente no foco específico.
- **Grau III:** Sopro de intensidade moderada, facilmente audível.
- **Grau IV:** Sopro intenso, propagando-se para hemitórax oposto, **sem frêmito precordial**.
- **Grau V:** Sopro muito intenso, associado a **frêmito precordial palpável** (vibração mecânica palpável com a palma da mão na parede torácica).
- **Grau VI:** Sopro estrondoso com frêmito palpável, audível mesmo com o estetoscópio **levemente desencostado da pele**.

---

### Ruídos Pulmonares Adventícios

1. **Estertores Crepitantes Úmidos (Crepitações):** Som descontinuo que lembra plástico bolha ou velcro abrindo. Causado pela passagem de ar através de líquido em alvéolos e bronquíolos colapsados (edema de pulmão, pneumonia bacteriana).
2. **Sibilos (Chiados):** Sons contínuos agudos musicais. Causados pela passagem de ar em alta velocidade através de vias aéreas estreitadas por broncoespasmo ou muco intraluminal (asma felina, bronquite crônica).
3. **Atrito Pleural:** Som áspero de couro raspando, auscultado na pleurite seca inflamatória.
        `,
        causalChain: {
          cause: 'Insuficiência crônica da valva atrioventricular mitral com falha de coaptação dos folhetos',
          mechanism: 'Turbulência do jato de regurgitação sistólico ventricular em alta velocidade',
          effect: 'Sopro sistólico holossistólico no 5º espaço intercostal esquerdo',
          clinicalMeaning: 'Endocardiose mitral com sobrecarga volumétrica progressiva de átrio esquerdo'
        }
      },
      {
        id: 'sec_semio_ausc_02',
        type: 'exercise',
        title: 'Desafio Clínico: O Sopro Mitral do Canino Idoso',
        exerciseId: 'ex_semio_02'
      },
      {
        id: 'sec_semio_ausc_03',
        type: 'exercise',
        title: 'Desafio Clínico: A Macicez Pulmonar do Bezerro Nelore',
        exerciseId: 'ex_semio_03'
      }
    ]
  },

  {
    id: 'lesson_semiology_exam_bench',
    moduleId: 'mod_semiology',
    title: 'Semiologia Especial & Bancada de Exame Físico Virtual',
    subtitle: 'Simulador interativo de exame físico: fonendoscópio virtual, palpação de linfonodos e raciocínio clínico.',
    estimatedMinutes: 16,
    objectives: [
      'Operar o fonendoscópio virtual posicionando-o nos focos PAM-T e campos pulmonares',
      'Avaliar linfonodos reativos vs normais na palpação física',
      'Correlacionar achados propedêuticos com diagnósticos anatômicos e formular condutas'
    ],
    concepts: ['concept_semiology_clinical_reasoning', 'concept_semiology_auscultation'],
    sections: [
      {
        id: 'sec_semio_bench_01',
        type: 'theory',
        title: 'O Raciocínio Clínico Orientado por Problemas (POMR)',
        contentMarkdown: `### Da Queixa Principal ao Diagnóstico Definitivo

O médico veterinário competente não adivinha diagnósticos; ele constrói uma cadeia lógica fundamentada em evidências:

1. **Lista de Problemas Mestres:** Identificar os sinais clínicos objetivos (ex.: *Problema 1: Dispneia expiratória; Problema 2: Estertores crepitantes; Problema 3: Febre*).
2. **Localização Anatômica da Lesão:** Vias aéreas superiores vs vias inferiores parenquimatosas vs espaço pleural.
3. **Mecanismo Fisiopatológico:** Infeccioso, inflamatório, hemorrágico, neoplásico ou tóxico.
4. **Plano Diagnóstico Racional:** Escolha criteriosa de exames (hemograma, radiografia torácica, toracocentese) com base nas hipóteses mais prováveis.
        `,
        causalChain: {
          cause: 'Investigação semiológica metódica e posicionamento anatômico rigoroso do estetoscópio',
          mechanism: 'Detecção precoce de ruídos patológicos antes do desfecho irreversível',
          effect: 'Isolamento precoce da fisiopatologia subjacente',
          clinicalMeaning: 'Intervenção médica precisa que salva o paciente de colapso respiratório ou choque'
        }
      },
      {
        id: 'sec_semio_bench_02',
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
