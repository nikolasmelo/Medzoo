// src/learning/data/lessons/cardiologyLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const CARDIOLOGY_EXERCISES: Record<string, LearningExercise> = {
  ex_cardio_01: {
    id: 'ex_cardio_01',
    conceptId: 'concept_wild_ecg_morphology',
    type: 'multiple_choice',
    prompt: 'Durante o eletrocardiograma de rotina de uma Arara-canindé (Ara ararauna, 1,1 kg) posicionada em decúbito dorsal sem sedação, o traçado na Derivação II (DII) revela frequência cardíaca de 320 bpm e um complexo QRS predominantemente NEGATIVO com onda "rS" profunda (ou QS puro), sem onda R alta positiva. Um estagiário sugere que a ave está com infarto do miocárdio ou inversão de cabos. Qual a explicação eletrofisiológica verdadeira?',
    options: [
      {
        id: 'opt_1',
        text: 'É a morfologia fisiológica normal das aves: a ativação ventricular tipo B (transmural profunda simultânea) gera um vetor resultante médio apicobasilar direcionado cranialmente e para a direita, afastando-se do eletrodo positivo de DII.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! As aves (assim como equinos e ruminantes) possuem sistema de Purkinje com arborização transmural profunda (Tipo B). A onda de despolarização caminha do ápice para a base simultaneamente através de toda a espessura da parede livre ventricular. Por isso, o vetor elétrico médio aponta para cima (cranial) e para a direita, gerando um complexo rS ou QS marcadamente negativo em DII — achado estritamente normal em aves!',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Indica infarto transmural da parede anterior do ventrículo esquerdo com necrose isquêmica aguda.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Infarto isquêmico do miocárdio espontâneo é raríssimo em psitacídeos jovens e cursaria com supradesnivelamento de ST ou arritmias graves, não apenas morfologia negativa típica de espécie.',
        conceptualErrorCategory: 'ischemia_misattribution'
      },
      {
        id: 'opt_3',
        text: 'Inversão acidental entre o eletrodo do membro anterior direito (vermelho) e o posterior esquerdo (verde).',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Se os eletrodos estivessem invertidos, a onda P também estaria invertida (negativa). Em aves hígidas em DII, a onda P é habitualmente positiva enquanto o complexo rS é negativo.',
        conceptualErrorCategory: 'lead_inversion_confusion'
      },
      {
        id: 'opt_4',
        text: 'Dextrocardia congênita com rotação axial horária do ápice cardíaco para o hemitórax direito.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Aves têm o coração localizado medianamente no celoma entre os lobos hepáticos; a negatividade de DII é universal para a classe Aves devido ao padrão Purkinje Tipo B.',
        conceptualErrorCategory: 'congenital_misattribution'
      }
    ],
    pedagogicalExplanation: 'Aves possuem ativação ventricular Tipo B com células de Purkinje que penetram toda a espessura miocárdica. O vetor ventricular resultante é oposto ao dos cães e gatos (Tipo A), resultando em deflexão ventricular negativa (rS/QS) normal em DII.',
    causalChain: {
      cause: 'Ramificação transmural profunda do sistema de condução especializado de Purkinje (coração aviário Tipo B)',
      mechanism: 'Despolarização quase simultânea da massa ventricular no sentido ápice -> base e endo -> epicárdio',
      effect: 'Vetor elétrico cardíaco médio direcionado no sentido craniodorsal e para a direita',
      clinicalMeaning: 'Complexo rS ou QS predominantemente negativo em DII, o qual é 100% fisiológico em aves hígidas'
    }
  },

  ex_cardio_02: {
    id: 'ex_cardio_02',
    conceptId: 'concept_cardiac_arrhythmias',
    type: 'multiple_choice',
    prompt: 'Uma Onça-pintada (Panthera onca, fêmea idosa, 68 kg) resgatada com desidratação e letargia apresenta no ECG em DII: ritmo com intervalos R-R completamente caóticos e irregulares ("irregularmente irregular"), ausência total de ondas P organizadas, presença de ondulações basais finas e caóticas ("ondas f") e frequência ventricular elevada (188 bpm). Na ausculta, nota-se déficit de pulso (frequência cardíaca > pulso femoral palpável). Qual o diagnóstico eletrocardiográfico e sua repercussão hemodinâmica?',
    options: [
      {
        id: 'opt_1',
        text: 'Fibrilação Atrial (FA): múltiplos microcircuitos de reentrada nos átrios provocam perda da contração atrial coordenada ("kick atrial") e enchimento ventricular ineficaz, gerando queda no volume sistólico e déficit de pulso.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! A Fibrilação Atrial caracteriza-se pela ausência de ondas P, linha de base com ondas "f" rápidas e irregulares, e condução aleatória pelo nó atrioventricular (intervalos R-R caóticos). Sem a sístole atrial coordenada ("atrial kick", que responde por até 25-30% do enchimento ventricular), os batimentos mais curtos não ejetam volume suficiente de sangue para gerar onda de pulso palpável (déficit de pulso).',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Arritmia Sinusal Respiratória Marcada com tônus vagal hiper-reativo protetor.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A arritmia sinusal respiratória possui ondas P idênticas precedendo todo complexo QRS e varia com os movimentos respiratórios; a ausência de onda P com ondas "f" caóticas é a marca da Fibrilação Atrial.',
        conceptualErrorCategory: 'vagal_misattribution'
      },
      {
        id: 'opt_3',
        text: 'Bloqueio Atrioventricular de 3º Grau com dissociação AV completa e ritmo de escape sinusal.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. No BAV de 3º grau há ondas P regulares com frequência atrial maior que a ventricular e intervalos R-R regulares (ritmo de escape bradicárdico), e não traçado caótico com taquicardia.',
        conceptualErrorCategory: 'av_block_confusion'
      },
      {
        id: 'opt_4',
        text: 'Taquicardia Supraventricular Paroxística por reentrada nodal com condução 1:1 estrita.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Na TSV os intervalos R-R são rigorosamente regulares e não caóticos como na Fibrilação Atrial.',
        conceptualErrorCategory: 'regular_tachycardia_confusion'
      }
    ],
    pedagogicalExplanation: 'A fibrilação atrial destrói a coordenação mecânica dos átrios. A alta frequência de bombardeio do nó AV causa enchimento diastólico errático, hipotensão arterial e risco de edema pulmonar agudo em felídeos carnívoros.',
    causalChain: {
      cause: 'Dilatação atrial crônica (por cardiomiopatia ou sobrecarga volêmica) gerando heterogeneidade no período refratário',
      mechanism: 'Múltiplos microcircuitos de microrreentrada nos átrios despolarizando a 400-600 bpm com condução AV variável',
      effect: 'Perda do "kick" atrial mecânico e intervalos diastólicos ventriculares marcadamente encurtados e variáveis',
      clinicalMeaning: 'Déficit de pulso femoral, colapso hemodinâmico, hipotensão sistêmica e progressão para insuficiência cardíaca congestiva'
    }
  },

  ex_cardio_03: {
    id: 'ex_cardio_03',
    conceptId: 'concept_heart_failure_therapy',
    type: 'multiple_choice',
    prompt: 'Um Lobo-guará (Chrysocyon brachyurus, macho adulto, 26 kg) é diagnosticado com Cardiomiopatia Dilatada (CMD) em estágio C de insuficiência cardíaca congestiva (fração de encurtamento miocárdico de apenas 14%, dilatação de ventrículo esquerdo e edema pulmonar incipiente). O clínico prescreve Pimobendan (0,25 mg/kg VO BID). Qual é o duplo mecanismo farmacológico dessa droga e sua principal vantagem clínica sobre os digitálicos (Digoxina)?',
    options: [
      {
        id: 'opt_1',
        text: 'Inodilatador: sensibiliza a troponina C ao cálcio (aumenta o inotropismo sem elevar o cálcio intracelular livre nem o consumo miocárdico de O2) e inibe a PDE-III (promovendo vasodilatação arterial e venosa balanceada, reduzindo pré e pós-carga).',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O Pimobendan é um inodilatador de primeira linha: (1) Por ser sensibilizador de cálcio na troponina C, eleva a força de contração sistólica do sarcômero sem superaquecer o consumo de ATP e sem acumular cálcio iônico que causaria arritmias letais (ao contrário da Digoxina); (2) Por inibir a fosfodiesterase III (PDE-III), preserva AMPc na musculatura lisa vascular, gerando vasodilatação sistêmica que alivia a pós-carga do coração exausto.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Inibe a bomba de Na+/K+ ATPase gerando influxo massivo de cálcio citoplasmático com potente efeito vasoconstritor arterial.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Esse é o mecanismo da Digoxina (glicosídeo cardiotônico tradicional), que aumenta o cálcio citosólico livre e eleva significativamente o risco de arritmias ventriculares fatais e consumo de oxigênio.',
        conceptualErrorCategory: 'digitalis_confusion'
      },
      {
        id: 'opt_3',
        text: 'Bloqueia competitivamente os receptores beta-1 adrenérgicos promovendo redução do tônus simpático e bradicardia protetora imediata.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Bloqueadores beta (ex: atenolol, carvedilol) reduzem a contratilidade cardíaca aguda (inotropismo negativo) e são contraindicados no choque cardiogênico ou edema pulmonar descompensado agudo.',
        conceptualErrorCategory: 'beta_blocker_confusion'
      },
      {
        id: 'opt_4',
        text: 'Atua exclusivamente nos túbulos renais inibindo o carreador Na+/K+/2Cl- para rápida depleção volêmica.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A inibição do co-transportador Na+/K+/2Cl- na alça de Henle é o mecanismo da Furosemida (diurético de alça), não do Pimobendan.',
        conceptualErrorCategory: 'diuretic_confusion'
      }
    ],
    pedagogicalExplanation: 'O Pimobendan combina inotropismo positivo não-arritmogênico (sensibilização de troponina C) com vasodilatação periférica mista (inibição de PDE-III), revolucionando o tratamento da cardiomiopatia dilatada em canídeos silvestres.',
    causalChain: {
      cause: 'Cardiomiopatia dilatada com perda de cardiomiócitos viáveis e falência de contratilidade miocárdica',
      mechanism: 'Sensibilização da troponina C ao cálcio associada à inibição da fosfodiesterase III (aumento de AMPc vascular)',
      effect: 'Aumento da força contrátil sistólica associado a redução drástica das resistências vasculares periféricas',
      clinicalMeaning: 'Melhora imediata do débito cardíaco, redução da pressão venocapilar pulmonar e alívio do edema com menor risco pró-arrítmico'
    }
  }
};

export const CARDIOLOGY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_cardiology_morphology',
    moduleId: 'mod_cardiology',
    title: 'Morfologia Eletrocardiográfica Comparada',
    subtitle: 'Aves vs Répteis vs Mamíferos: despolarização Tipo B e a onda rS profunda que não é patológica.',
    estimatedMinutes: 12,
    objectives: [
      'Diferenciar a ativação ventricular tipo A (mamíferos carnívoros) da ativação tipo B (aves e ungulados)',
      'Identificar o complexo rS/QS normal em Derivação II nas aves silvestres',
      'Compreender a fisiologia do coração tricavitário em répteis e a dinâmica do shunt intracardíaco'
    ],
    concepts: ['concept_wild_ecg_morphology'],
    sections: [
      {
        id: 'sec_cardio_morph_01',
        type: 'theory',
        title: 'Eletrofisiologia Comparada: O Paradigma da Ativação Ventricular',
        contentMarkdown: `### Por que o ECG de uma Ave é Tão Diferente do ECG de um Canídeo?

Na eletrocardiografia veterinária de mamíferos carnívoros (cão, lobo-guará, gato, onça), o sistema de Purkinje é classificado como **Tipo A**:
- As fibras de condução limitam-se ao subendocárdio.
- A onda de ativação precisa atravessar a parede miocárdica de dentro para fora (do endocárdio para o epicárdio) através do miocárdio comum, relativamente lento.
- Em **Derivação II (DII)**, o eletrodo explorador caudal no membro posterior esquerdo vê a onda de despolarização se aproximando do ápice: o complexo QRS é predominantemente **POSITIVO (onda R alta)**.

---

# Aula Universitária: Eletrocardiografia Comparada & Morfologia Vetorial

> 📖 Referência Canônica: Ettinger, S. J.; Feldman, E. C.; Côté, E. *Textbook of Veterinary Internal Medicine*, 8th ed. Elsevier, Section VII: Cardiovascular System. Tilley, L. P. *Essentials of Canine and Feline Electrocardiography*, 4th ed. Wiley-Blackwell.

### O Padrão Aviário & Ungulado (Tipo B)

Nas aves (Psittaciformes, Falconiformes, Passeriformes) e também em ungulados silvestres e domésticos:
1. As ramificações de Purkinje penetram **profundamente por toda a espessura da parede livre ventricular**.
2. A despolarização dos ventrículos ocorre de forma quase **simultânea e transmural**, propagando-se em direção à base dos grandes vasos (sentido ápice → base).
3. O vetor elétrico cardíaco resultante médio projeta-se **cranialmente, dorsalmente e para a direita**.

\`\`\`mermaid
flowchart TD
    A["Nó Sinusal no Átrio Direito"] --> B["Onda P Positiva (Despolarização Atrial em DII)"]
    B --> C["Nó AV & Feixe de Condução Rápido de Purkinje"]
    C --> D["Purkinje Penetra Toda a Parede Miocárdica (Tipo B)"]
    D --> E["Ativação Transmural Quase Simultânea: Vetor Apicobasilar"]
    E --> F["Vetor Médio afasta-se do Eletrodo Caudal em DII"]
    F --> G["Complexo rS ou QS Negativo Profundo em DII (100% Fisiológico!)"]
\`\`\`

> [!IMPORTANT]
> **Pérola Clínica de Fauna Silvestre:**
> Em aves hígidas, um complexo **rS profundo** (ou QS) com polaridade negativa em DII é o **padrão fisiológico normal**. Nunca interprete essa deflexão negativa como "bloqueio de ramo", "isquemia" ou "inversão de cabos" em araras, tucanos ou falcões!

---

### O Coração Tricavitário dos Répteis

Répteis não-crocodilianos (quelônios, lagartos, serpentes) possuem:
- Dois átrios e **um único ventrículo funcionalmente dividido** em três cavidades comunicantes (*cavum venosum*, *cavum arteriosum* e *cavum pulmonale*).
- O fluxo sanguíneo intracardíaco é modulado por resistências vasculares periféricas, permitindo o fenômeno do **shunt intracardíaco (direita-esquerda ou esquerda-direita)**.
- O ECG em répteis apresenta frequências cardíacas baixas (15 a 45 bpm a 25-30 °C), intervalos P-R e Q-T fisiologicamente longos e dependentes da temperatura corporal (ectotermia).
        `,
        causalChain: {
          cause: 'Arborização transmural profunda das células de condução de Purkinje na massa miocárdica de aves (Tipo B)',
          mechanism: 'Despolarização quase síncrona com vetor de base superior cranial afastando-se do eletrodo inferior',
          effect: 'Inversão da polaridade elétrica vetorial ventricular em relação aos mamíferos convencionais',
          clinicalMeaning: 'Complexo rS/QS predominantemente negativo em DII em aves normais sem sinal de cardiopatia'
        }
      },
      {
        id: 'sec_cardio_morph_02',
        type: 'exercise',
        title: 'Desafio Clínico: O ECG da Arara-canindé e a Polaridade Invertida',
        exerciseId: 'ex_cardio_01'
      }
    ]
  },

  {
    id: 'lesson_cardiology_arrhythmias',
    moduleId: 'mod_cardiology',
    title: 'Arritmias Cardíacas & Condução Atrioventricular',
    subtitle: 'Fisiopatologia de bloqueios atrioventriculares, fibrilação atrial e taquiarritmias em animais silvestres.',
    estimatedMinutes: 14,
    objectives: [
      'Reconhecer e classificar Bloqueios Atrioventriculares (BAV de 1º, 2º e 3º grau)',
      'Identificar Fibrilação Atrial (FA) e compreender o conceito de déficit de pulso',
      'Distinguir extrassístoles ventriculares benignas de taquicardia ventricular maligna'
    ],
    concepts: ['concept_cardiac_arrhythmias'],
    sections: [
      {
        id: 'sec_cardio_arrh_01',
        type: 'theory',
        title: 'Fisiopatologia e Diagnóstico Eletrocardiográfico das Arritmias',
        contentMarkdown: `### O Eixo de Condução Cardíaco e suas Interrupções

A sincronia cardíaca depende do retardo fisiológico no nó atrioventricular (nó AV), garantindo que a sístole atrial complete o enchimento ventricular antes da sístole mecânica dos ventrículos.

\`\`\`mermaid
flowchart TD
    A["Nó Sinoatrial"] -->|Condução Normal| B["Nó Atrioventricular (Retardo Fisiológico: PR)"]
    B -->|Condução Normal| C["Feixe de His e Ramos"]
    C -->|Condução Normal| D["Complexo QRS Estreito e Síncrono"]
    
    B -->|Atraso Fixo > Limite Normal| E["BAV de 1º Grau (PR longo, todas P conduzem)"]
    B -->|Bloqueio Intermitente de P| F["BAV de 2º Grau (Mobitz I wenckebach vs Mobitz II fixo)"]
    B -->|Bloqueio Total de Transmissão| G["BAV de 3º Grau (Dissociação AV: P e QRS independentes)"]
\`\`\`

---

### Diagnóstico Diferencial Rápido de Ritmos Patológicos

| Arritmia | Onda P | Intervalo P-R | Complexo QRS | Repercussão Hemodinâmica |
| :--- | :--- | :--- | :--- | :--- |
| **Ritmo Sinusal** | Presente, positiva em DII | Fixo e normal | Normal da espécie | Débito estável |
| **BAV 2º Grau (Mobitz II)** | Presente, mas algumas ondas P não conduzem | Fixo nos batimentos que conduzem | Normal quando conduz | Queda de débito dependente da frequência de bloqueio |
| **BAV 3º Grau (Total)** | Presente, desvinculada do QRS (mais rápida) | Variável (sem relação) | Alargado e bizarro (escape idioventricular lento) | Bradicardia crítica, síncope e choque cardiogênico |
| **Fibrilação Atrial (FA)** | Ausente (substituída por ondas "f" caóticas) | Inexistente | Normal ou variável, R-R caótico | Déficit de pulso, perda de 30% do débito, ICC |
| **Taquicardia Ventricular (TV)** | Dissociada ou não visível | Não há condução AV normal | Alargado, aberrante e em salvas rápidas | Emergência extrema: risco de PCR por FV |

> [!WARNING]
> **BAV Mobitz II vs BAV 3º Grau:**
> No BAV de 2º grau tipo Mobitz II, o intervalo P-R dos batimentos conduzidos permanece **estritamente constante** antes do bloqueio súbito da onda P. Já no BAV de 3º grau, não há **nenhuma condução** entre átrios e ventrículos: átrios batem no seu próprio ritmo sinusal rápido e os ventrículos assumem um ritmo de escape independente e bradicárdico.
        `,
        causalChain: {
          cause: 'Fibrose nodal degenerativa, isquemia, intoxicação digitálica ou hipercalemia severa',
          mechanism: 'Falência de propagação do potencial de ação no nó AV ou sistema de His-Purkinje',
          effect: 'Bloqueio da contração ventricular coordenada e bradiarritmia grave de escape',
          clinicalMeaning: 'Hipotensão arterial sistêmica, síncope recorrente, colapso de perfusão e parada cardíaca'
        }
      },
      {
        id: 'sec_cardio_arrh_02',
        type: 'exercise',
        title: 'Desafio Clínico: O Déficit de Pulso e o Ritmo Caótico da Onça-pintada',
        exerciseId: 'ex_cardio_02'
      }
    ]
  },

  {
    id: 'lesson_cardiology_heart_failure_lab',
    moduleId: 'mod_cardiology',
    title: 'Insuficiência Cardíaca, Terapêutica Inotrópica & Bancada ECG',
    subtitle: 'Farmacologia hemodinâmica da ICC e bancada eletrocardiográfica de monitorização em tempo real.',
    estimatedMinutes: 16,
    objectives: [
      'Compreender o papel do Pimobendan como inodilatador na cardiomiopatia dilatada (CMD)',
      'Diferenciar fármacos inotrópicos, vasodilatadores e diuréticos no manejo da ICC',
      'Operar o osciloscópio de ECG com calíper virtual para diagnosticar ritmos e arritmias na fauna'
    ],
    concepts: ['concept_heart_failure_therapy', 'concept_cardiac_arrhythmias'],
    sections: [
      {
        id: 'sec_cardio_hf_01',
        type: 'theory',
        title: 'Hemodinâmica da Insuficiência Cardíaca Congestiva (ICC)',
        contentMarkdown: `# Aula Universitária: Fisiopatologia da Insuficiência Cardíaca & Terapêutica Inotrópica

> 📖 Referência Canônica: Ettinger, S. J.; Feldman, E. C.; Côté, E. *Textbook of Veterinary Internal Medicine*, 8th ed. Elsevier, Cap. 241: Heart Failure: Pathophysiology and Therapy. Keene, B. W. et al. *ACVIM Consensus Guidelines for the Diagnosis and Treatment of Myxomatous Mitral Valve Disease in Dogs*. J Vet Intern Med.

### O Círculo Vicioso da Falência Miocárdica

Quando o miocárdio ventricular perde força contrátil (como na Cardiomiopatia Dilatada ou degeneração mixomatosa avançada):
1. **Queda do Débito Cardíaco:** Ativa reflexamente o Sistema Nervoso Simpático (vasoconstrição + taquicardia) e o Sistema Renina-Angiotensina-Aldosterona (SRAA).
2. **Aumento Excessivo da Pós-Carga:** A vasoconstrição arterial periférica eleva a resistência contra a qual o ventrículo doente precisa ejetar sangue.
3. **Congestão Retrógrada:** O sangue acumula-se no átrio esquerdo e nos capilares pulmonares → extravasamento de líquido para o interstício e alvéolos → **Edema Pulmonar Agudo**.

---

### A Tríade Terapêutica Canônica na ICC Silvestre

\`\`\`mermaid
flowchart TD
    A["Insuficiência Cardíaca Descompensada"] --> B["Inotropismo Prejudicado"]
    A --> C["Resistência Vascular Elevada (Pós-carga)"]
    A --> D["Congestão Volêmica Pulmonar (Pré-carga)"]
    
    B --> E["PIMOBENDAN (Inodilatador)"]
    C --> E
    C --> F["ENALAPRIL / BENAZEPRIL (IECA)"]
    D --> G["FUROSEMIDA (Diurético de Alça)"]
    
    E --> H["Aumento da Força Contrátil sem Gasto Excessivo de O2 + Vasodilatação"]
    F --> I["Inibe SRAA: Bloqueia Remodelamento e Vasoconstrição"]
    G --> J["Depleção de Volume: Alívio Rápido do Edema Pulmonar"]
\`\`\`

> [!TIP]
> **Por que o Pimobendan é Superior à Digoxina?**
> - **Digoxina:** Aumenta a força inibindo a bomba Na+/K+ ATPase, forçando o acúmulo de cálcio livre intracelular. Isso consome muito ATP, eleva a demanda de oxigênio miocárdico e possui índice terapêutico extremamente estreito com alto risco de arritmias ventriculares fatais.
> - **Pimobendan:** É um **sensibilizador de cálcio**: não aumenta a concentração tóxica de cálcio livre intracelular, mas sim a sensibilidade dos miofilamentos (troponina C) ao cálcio já presente. Além disso, inibe a PDE-III gerando vasodilatação periférica. Maior contratilidade com menor pós-carga e sem sobreaquecimento metabólico!
        `,
        causalChain: {
          cause: 'Cardiomiopatia dilatada com perda de contratilidade e elevação crônica de pressão venocapilar',
          mechanism: 'Inodilatação por sensibilização de troponina C associada a inibição da PDE-III',
          effect: 'Aumento do volume sistólico sem incremento na demanda de O2 miocárdico e redução da pós-carga',
          clinicalMeaning: 'Remissão do edema pulmonar, estabilização do débito cardíaco e prolongamento expressivo da sobrevida'
        }
      },
      {
        id: 'sec_cardio_hf_02',
        type: 'exercise',
        title: 'Desafio Clínico: O Inodilatador no Lobo-guará com Cardiomiopatia Dilatada',
        exerciseId: 'ex_cardio_03'
      },
      {
        id: 'sec_cardio_hf_03',
        type: 'lab',
        title: 'Laboratório Interativo: Bancada de Eletrocardiografia Comparada (ECG Bench)',
        description: 'Assuma a bancada de análise eletrocardiográfica. Opere o osciloscópio em tempo real com calíper virtual de milissegundos e seletores de ganho/velocidade (25 e 50 mm/s). Analise os traçados do Lobo-guará, Arara-canindé, Onça-pintada, Tamanduá-bandeira e Macaco-prego, confirmando os diagnósticos e orientando a conduta.',
        labType: 'cardiology_ecg_bench',
        labConfig: {
          targetTaxa: 'Fauna Comparada'
        }
      }
    ]
  }
];
