// src/learning/data/lessons/cardiologyLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const CARDIOLOGY_EXERCISES: Record<string, LearningExercise> = {
  ex_cardio_01: {
    id: 'ex_cardio_01',
    conceptId: 'concept_cardiology_action_potential',
    type: 'multiple_choice',
    prompt: 'Durante a fase 2 (platô) do potencial de ação de um cardiomiócito ventricular contrátil de resposta rápida, qual corrente iônica transmembrana é responsável por manter a despolarização sustentada e ativar o acoplamento excitação-contração celular?',
    options: [
      {
        id: 'opt_1',
        text: 'Influxo lento de íons Cálcio através de canais de Cálcio tipo L (ICa-L), balanceado pelo efluxo de íons Potássio (IK), estimulando a liberação maciça de Cálcio do retículo sarcoplasmático via receptores de rianodina (RyR2).',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A Fase 2 (platô) é a característica distintiva do potencial de ação cardíaco: a entrada lenta de Ca2+ pelos canais tipo L contrabalança a saída de K+. Esse influxo de cálcio ("trigger calcium") ativa os receptores de rianodina tipo 2 (RyR2) no retículo sarcoplasmático, liberando cálcio estocado para os sarcômeros e desencadeando a contração mecânica dos miofilamentos de actina e miosina.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Influxo maciço hiperagudo de Sódio através de canais rápidos dependentes de voltagem gerando despolarização em agulha.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O influxo rápido de Na+ é o evento da Fase 0 (despolarização rápida inicial), e não do platô da Fase 2.',
        conceptualErrorCategory: 'phase_confusion'
      },
      {
        id: 'opt_3',
        text: 'Ativação exclusiva da bomba de Na+/K+ ATPase transportando 3 íons potássio para fora da célula.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A bomba Na+/K+ restabelece o gradiente na Fase 4 (repouso) transportando 3 Na+ para fora e 2 K+ para dentro.',
        conceptualErrorCategory: 'pump_direction_error'
      },
      {
        id: 'opt_4',
        text: 'Entrada de Cloreto provocando hiperpolarização protetora contra fibrilação.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A corrente transitória de cloreto e potássio atua na Fase 1 (repolarização inicial rápida), sem manter o platô contrátil sustentado.',
        conceptualErrorCategory: 'ionic_misattribution'
      }
    ],
    pedagogicalExplanation: 'A Fase 2 (platô) dura centenas de milissegundos devido ao influxo de Ca2+ via canais L, garantindo um longo período refratário absoluto que impede o coração de sofrer contrações tetânicas sustentadas.',
    causalChain: {
      cause: 'Abertura de canais de cálcio dependentes de voltagem tipo L na membrana do sarcolema',
      mechanism: 'Influxo de Ca2+ desencadeia a liberação de cálcio induzida por cálcio via receptores RyR2',
      effect: 'Ligação do cálcio à troponina C com deslizamento das pontes cruzadas de miosina sobre a actina',
      clinicalMeaning: 'Sístole ventricular mecânica eficaz com bombeamento do volume sistólico para a aorta'
    }
  },

  ex_cardio_02: {
    id: 'ex_cardio_02',
    conceptId: 'concept_cardiology_ecg_fundamentals',
    type: 'multiple_choice',
    prompt: 'No traçado eletrocardiográfico de um cão posicionado em decúbito lateral direito padronizado (calibração: 10 mm/mV e velocidade de 50 mm/s), o examinador observa: onda P positiva em DII medindo 0,04 s de duração e 0,2 mV de amplitude, intervalo P-R de 0,10 s constante, complexo QRS estreito (0,05 s) com onda R alta (2,2 mV) e frequência cardíaca de 110 bpm com discreta oscilação fásica regular associada à respiração. Como esse ritmo é classificado pela eletrocardiografia canônica?',
    options: [
      {
        id: 'opt_1',
        text: 'Arritmia Sinusal Respiratória Fisiológica: ritmo originado no nó sinoatrial (toda onda P conduz e é positiva em DII) cuja frequência oscila ciclicamente com os movimentos respiratórios devido à modulação do tônus do nervo vago (parassimpático).',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! Em cães (ao contrário de felinos e humanos), a Arritmia Sinusal Respiratória é o ritmo fisiológico normal em repouso e indica excelente tônus vagal e saúde cardiovascular. A frequência cardíaca acelera discretamente durante a inspiração (inibição vagal reflexa pelo reflexo de Hering-Breuer) e desacelera na expiração, mantendo ondas P normais e intervalos P-R constantes.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Bloqueio Atrioventricular de 1º Grau patológico por retardo na propagação do nó AV.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O intervalo P-R normal em cães varia de 0,06 a 0,13 s; 0,10 s é perfeitamente normal e não configura prolongamento patológico.',
        conceptualErrorCategory: 'normal_interval_misattribution'
      },
      {
        id: 'opt_3',
        text: 'Fibrilação Atrial Paroxística com falência da sístole atrial coordenada.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Na fibrilação atrial não existem ondas P e o ritmo é caótico ("irregularmente irregular"); na arritmia sinusal respiratória as ondas P são perfeitas e a variação é fásica e suave.',
        conceptualErrorCategory: 'arrhythmia_confusion'
      },
      {
        id: 'opt_4',
        text: 'Sobrecarga Ventricular Direita Severa por estenose da valva pulmonar.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A sobrecarga ventricular direita geraria onda S profunda em DII e desvio do eixo elétrico para a direita; uma onda R alta em DII é normal para o ventrículo esquerdo canino.',
        conceptualErrorCategory: 'hypertrophy_misattribution'
      }
    ],
    pedagogicalExplanation: 'A arritmia sinusal respiratória é um achado normal em cães hígidos. Caracteriza-se por ondas P de morfologia uniforme precedendo todos os QRS e variação periódica do intervalo P-P síncrona com os ciclos de ventilação.',
    causalChain: {
      cause: 'Flutuação cíclica fisiológica do tônus eferente do nervo vago durante a expansão torácica inspiratória',
      mechanism: 'Modulação parassimpática transitória sobre os canais iônicos do nó sinoatrial',
      effect: 'Variação periódica suave dos intervalos R-R mantendo a sequência normal de despolarização cardíaca',
      clinicalMeaning: 'Ritmo sinusal perfeitamente saudável em repouso que desaparece com exercício ou atropina'
    }
  },

  ex_cardio_03: {
    id: 'ex_cardio_03',
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

  ex_cardio_04: {
    id: 'ex_cardio_04',
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
      cause: 'Dilatação atrial crônica gerando heterogeneidade no período refratário miocárdico',
      mechanism: 'Múltiplos microcircuitos de microrreentrada nos átrios despolarizando a 400-600 bpm com condução AV variável',
      effect: 'Perda do "kick" atrial mecânico e intervalos diastólicos ventriculares marcadamente encurtados e variáveis',
      clinicalMeaning: 'Déficit de pulso femoral, colapso hemodinâmico, hipotensão sistêmica e progressão para insuficiência cardíaca congestiva'
    }
  },

  ex_cardio_05: {
    id: 'ex_cardio_05',
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
    id: 'lesson_cardiology_action_potential',
    moduleId: 'mod_cardiology',
    title: 'Eletrofisiologia Celular Cardíaca & Potencial de Ação',
    subtitle: 'Canais iônicos Na+, Ca2+, K+, fases 0 a 4 do potencial de ação e períodos refratários miocárdicos.',
    estimatedMinutes: 20,
    objectives: [
      'Analisar a cinética de canais iônicos nas 5 fases do potencial de ação ventricular (Fases 0 a 4)',
      'Diferenciar o potencial de ação de resposta rápida (cardiomiócitos) da resposta lenta (nós sinusal e AV)',
      'Compreender o acoplamento excitação-contração e o papel protetor do período refratário absoluto'
    ],
    concepts: ['concept_cardiology_action_potential'],
    sections: [
      {
        id: 'sec_cardio_pot_01',
        type: 'theory',
        title: 'As Correntes Iônicas que Regem a Eletrofisiologia Cardíaca',
        contentMarkdown: `# Aula Universitária: Eletrofisiologia Cardíaca & Potencial de Ação Celular

> 📖 Referência Canônica: Cunningham, J. G.; Klein, B. G. *Tratado de Fisiologia Veterinária*, 5ª ed. Elsevier. Ettinger, S. J. et al. *Textbook of Veterinary Internal Medicine*, 8th ed. Elsevier.

O coração é um sincício eletromecânico perfeitamente sincronizado. Para que ocorra a ejeção ventricular uniforme, cada miócito depende de um fluxo de correntes iônicas altamente orquestrado:

### 1. As Cinco Fases do Potencial de Ação de Resposta Rápida (Miócitos Ventriculares)
- **Fase 0 (Despolarização Rápida):** Estimulação atinge o potencial limiar (-70 mV). Abertura explosiva de **canais de Sódio rápidos dependentes de voltagem (INa)**, levando o potencial a +20 ou +30 mV em milissegundos.
- **Fase 1 (Repolarização Precoce):** Inativação rápida dos canais de Na+ associada à abertura transitória de canais de Potássio Ito (corrente transitória de efluxo de K+).
- **Fase 2 (Platô Sustentado - 150 a 300 ms):** Abertura de **canais de Cálcio tipo L lentos (ICa-L)**. A entrada de Ca2+ equilibra a saída de K+ pelos canais de repolarização retardada (IKr, IKs). O Ca2+ intracelular ativa a liberação de mais cálcio do retículo sarcoplasmático via **receptores de rianodina (RyR2)**, gerando a contração muscular.
- **Fase 3 (Repolarização Rápida Tardia):** Fechamento dos canais de Ca2+ e efluxo maciço de K+ (correntes retificadoras tardias e anômalas), retornando a membrana ao potencial de repouso (-90 mV).
- **Fase 4 (Potencial de Membrana de Repouso Diastólico):** Manutenção do potencial estável pela bomba Na+/K+ ATPase (3 Na+ para fora, 2 K+ para dentro) e pelo trocador Na+/Ca2+ (NCX).

---

### 2. Células Marcapasso (Resposta Lenta: Nó Sinusal e Nó AV)
- Não possuem canais rápidos de Na+.
- Apresentam despolarização diastólica espontânea de Fase 4 mediada pela **corrente "funny" (If)** de influxo de sódio e cálcio ativada por hiperpolarização.
- Quando o potencial atinge cerca de -40 mV, abrem-se **canais de cálcio tipo T e tipo L**, gerando a despolarização ascendente suave da Fase 0 (mais lenta que nos miócitos ventriculares).

\`\`\`mermaid
flowchart TD
    A["Potencial de Repouso Diastólico (-90 mV)"] --> B["Fase 0: Influxo Rápido de Na+ (Despolarização em Espícula)"]
    B --> C["Fase 1: Inativação de Na+ e Efluxo Transitório de K+"]
    C --> D["Fase 2: PLATÔ DE CÁLCIO (Influxo Ca2+ Tipo L balanceado com K+)"]
    D --> E["Acoplamento Excitação-Contração via Receptores RyR2 do Retículo"]
    E --> F["Fase 3: Efluxo Maciço de K+ (Repolarização Rápida)"]
    F --> G["Fase 4: Restauração pela Na+/K+ ATPase e Trocador Na+/Ca2+"]
\`\`\``,
        causalChain: {
          cause: 'Abertura de canais de cálcio dependentes de voltagem tipo L durante a Fase 2',
          mechanism: 'Influxo de íons Ca2+ desencadeia a liberação maciça de cálcio do retículo sarcoplasmático via RyR2',
          effect: 'Ligação do cálcio à troponina C com encurtamento síncrono dos sarcômeros miocárdicos',
          clinicalMeaning: 'Sístole ventricular potente sem tetania muscular graças ao longo período refratário absoluto'
        }
      },
      {
        id: 'sec_cardio_pot_02',
        type: 'exercise',
        title: 'Verificação Eletrofisiológica: O Platô de Cálcio da Fase 2',
        exerciseId: 'ex_cardio_01'
      }
    ]
  },

  {
    id: 'lesson_cardiology_ecg_fundamentals',
    moduleId: 'mod_cardiology',
    title: 'Fundamentos do ECG & Vetorcardiografia no Plano Frontal',
    subtitle: 'Triângulo de Einthoven, derivações I a aVF, calibração padronizada e morfologia das ondas.',
    estimatedMinutes: 22,
    objectives: [
      'Compreender os fundamentos físicos do Triângulo de Einthoven e o cálculo do Eixo Elétrico Médio',
      'Configurar a calibração eletrocardiográfica padronizada: 10 mm/mV (tensão) e 25 ou 50 mm/s (tempo)',
      'Mensurar e interpretar clinicamente a onda P, intervalo P-R, complexo QRS, segmento S-T e onda T'
    ],
    concepts: ['concept_cardiology_ecg_fundamentals'],
    sections: [
      {
        id: 'sec_cardio_fund_01',
        type: 'theory',
        title: 'O Triângulo de Einthoven e as Derivações Eletrocardiográficas',
        contentMarkdown: `# Aula Universitária: Fundamentos do ECG & Eixo Elétrico no Plano Frontal

> 📖 Referência Canônica: Tilley, L. P. *Essentials of Canine and Feline Electrocardiography*, 4th ed. Wiley-Blackwell. Ettinger, S. J. et al. *Cardiovascular System*.

O eletrocardiograma de superfície registra a soma vetorial das correntes elétricas que se propagam pelo miocárdio em direção aos eletrodos colocados na pele do paciente:

### 1. As Seis Derivações do Plano Frontal
Posicionamento padrão em decúbito lateral direito:
- **Eletrodo Vermelho (Braço Direito):** Membro anterior direito.
- **Eletrodo Amarelo (Braço Esquerdo):** Membro anterior esquerdo.
- **Eletrodo Verde (Perna Esquerda):** Membro posterior esquerdo.
- **Eletrodo Preto (Neutro/Terra):** Membro posterior direito.

**Derivações Bipolares:**
- **Derivação I:** Braço direito (-) para Braço esquerdo (+). Ângulo: $0°$.
- **Derivação II (DII):** Braço direito (-) para Perna esquerda (+). Ângulo: $+60°$ (Derivação padrão universal de monitorização em carnívoros).
- **Derivação III:** Braço esquerdo (-) para Perna esquerda (+). Ângulo: $+120°$.

**Derivações Unipolares Aumentadas:**
- **aVR:** Aponta para o braço direito ($-150°$).
- **aVL:** Aponta para o braço esquerdo ($-30°$).
- **aVF:** Aponta diretamente para as patas posteriores ($+90°$).

---

### 2. A Matemática do Papel Milimetrado
- **Velocidade do Papel a 50 mm/s:**
  - Cada quadradinho de $1\text{ mm} = 0,02 s$ ($20\text{ ms}$).
  - Um quadrado grande de $5\text{ mm} = 0,10 s$ ($100\text{ ms}$).
- **Calibração de Tensão a 10 mm/mV (1 N):**
  - Cada quadradinho vertical de $1\text{ mm} = 0,1 mV$.
  - Um quadrado grande de $5\text{ mm} = 0,5 mV$.

---

### 3. As Ondas e Intervalos no Cão Normal
- **Onda P:** Despolarização dos átrios direito e esquerdo ($< 0,04\text{ s}$ e $< 0,4\text{ mV}$ em cães).
- **Intervalo P-R:** Tempo de condução do nó sinusal através do nó AV e feixe de His ($0,06\text{ a }0,13\text{ s}$).
- **Complexo QRS:** Despolarização síncrona dos ventrículos ($< 0,05\text{ s}$ em cães pequenos; $< 0,06\text{ s}$ em cães gigantes; altura de R até $2,5-3,0\text{ mV}$ em DII).
- **Segmento S-T e Onda T:** Repolarização ventricular. Supradesnivelamento ou infradesnivelamento de ST $> 0,15-0,2\text{ mV}$ sugere isquemia ou hipóxia miocárdica.`,
        causalChain: {
          cause: 'Posicionamento correto dos eletrodos nos membros com calibração estrita a 50 mm/s e 10 mm/mV',
          mechanism: 'Captação fidedigna do dipolo elétrico cardíaco sem artefatos mecânicos de tremores',
          effect: 'Registro nítido das ondas P, QRS e T com medidas temporais e milivoltímetricas exatas',
          clinicalMeaning: 'Diagnóstico precoce de sobrecargas de câmaras, distúrbios eletrolíticos e arritmias'
        }
      },
      {
        id: 'sec_cardio_fund_02',
        type: 'exercise',
        title: 'Verificação Propedêutica: A Arritmia Sinusal Respiratória Canina',
        exerciseId: 'ex_cardio_02'
      }
    ]
  },

  {
    id: 'lesson_cardiology_morphology',
    moduleId: 'mod_cardiology',
    title: 'Eletrocardiografia Comparada: Tipo A vs Tipo B & Répteis',
    subtitle: 'Carnívoros vs Aves/Ungulados: despolarização transmural profunda e a onda rS negativa fisiológica.',
    estimatedMinutes: 22,
    objectives: [
      'Diferenciar o sistema de condução Tipo A (cães/gatos) do Tipo B (aves, ungulados e suínos)',
      'Identificar o complexo rS/QS profundamente negativo em DII como achado 100% normal em aves',
      'Compreender a dinâmica do coração tricavitário em répteis e a modulação ectotérmica do ritmo'
    ],
    concepts: ['concept_wild_ecg_morphology'],
    sections: [
      {
        id: 'sec_cardio_morph_01',
        type: 'theory',
        title: 'O Paradigma Vetorial da Ativação Ventricular Comparada',
        contentMarkdown: `# Aula Universitária: Eletrocardiografia Comparada — Tipo A vs Tipo B

> 📖 Referência Canônica: Ettinger, S. J. et al. *Textbook of Veterinary Internal Medicine*, 8th ed. Tilley, L. P. *Essentials of Canine and Feline Electrocardiography*. Doneley, B. *Avian Medicine and Surgery in Practice*, 2nd ed. CRC Press.

Na medicina veterinária, o ECG não pode ser interpretado como na medicina humana. A arquitetura das fibras de Purkinje varia radicalmente entre os grupos filogenéticos:

### 1. Mamíferos Carnívoros (Cães, Gatos, Lobo-guará, Onça-pintada) — Categoria Tipo A
- As células condutoras de Purkinje limitam-se estritamente ao **subendocárdio**.
- A onda de ativação precisa atravessar a parede miocárdica de dentro para fora (do endocárdio para o epicárdio) através do miocárdio comum.
- Em **Derivação II (DII)**, o eletrodo positivo caudal no membro posterior esquerdo vê a onda de despolarização descendo em direção ao ápice: o complexo QRS é predominantemente **POSITIVO (onda R alta e estreita)**.

---

### 2. Aves e Grandes Ungulados (Bovinos, Equinos, Ovinos, Psitacídeos) — Categoria Tipo B
- As ramificações de Purkinje penetram **profundamente por toda a espessura da parede miocárdica ventricular**.
- A despolarização ocorre quase de forma **simultânea e transmural**, propagando-se em direção à base dos grandes vasos (sentido ápice $\rightarrow$ base).
- O vetor elétrico cardíaco resultante médio projeta-se **cranialmente, dorsalmente e para a direita**.
- **Resultado Eletrocardiográfico em DII:** Como o vetor afasta-se do eletrodo caudal positivo, o complexo ventricular é marcadamente **NEGATIVO (onda rS profunda ou QS puro)**!

\`\`\`mermaid
flowchart TD
    A["Nó Sinusal Atrial"] --> B["Onda P Positiva em DII"]
    B --> C["Nó AV & Feixe de Purkinje Transmural Profundo (Tipo B)"]
    C --> D["Ativação Quase Simultânea: Vetor Apicobasilar Craniodorsal"]
    D --> E["Vetor afasta-se do Eletrodo Positivo Caudal de DII"]
    E --> F["Complexo rS ou QS Negativo Profundo em DII (Fisiológico em Aves/Cavalos!)"]
\`\`\`

> [!IMPORTANT]
> **Pérola de Medicina de Animais Silvestres:**
> Jamais lauda-se "isquemia", "bloqueio de ramo" ou "inversão de cabos" ao encontrar um complexo QRS predominantemente negativo em DII em araras, gaviões ou equinos! Essa é a morfologia normal e universal do sistema Purkinje Tipo B.`,
        causalChain: {
          cause: 'Ramificação transmural profunda do sistema de condução Purkinje nas aves (Tipo B)',
          mechanism: 'Despolarização quase simultânea com vetor elétrico médio direcionado para a base cranial',
          effect: 'Afastamento do vetor em relação ao eletrodo explorador inferior em Derivação II',
          clinicalMeaning: 'Complexo rS ou QS predominantemente negativo em DII, estritamente fisiológico na espécie'
        }
      },
      {
        id: 'sec_cardio_morph_02',
        type: 'exercise',
        title: 'Caso Silvestre: O ECG da Arara-canindé e o Vetor Tipo B',
        exerciseId: 'ex_cardio_03'
      }
    ]
  },

  {
    id: 'lesson_cardiology_arrhythmias',
    moduleId: 'mod_cardiology',
    title: 'Arritmias Cardíacas & Condução Atrioventricular',
    subtitle: 'Bloqueios AV (1º, 2º e 3º grau), Fibrilação Atrial com déficit de pulso e Taquicardia Ventricular.',
    estimatedMinutes: 24,
    objectives: [
      'Classificar os Bloqueios Atrioventriculares: BAV 1º, BAV 2º (Mobitz I vs Mobitz II) e BAV 3º total',
      'Diagnosticar Fibrilação Atrial no ECG e correlacionar clinicamente com o déficit de pulso arterial',
      'Identificar complexos ventriculares prematuros (CVP) e taquicardia ventricular com risco de PCR'
    ],
    concepts: ['concept_cardiac_arrhythmias'],
    sections: [
      {
        id: 'sec_cardio_arrh_01',
        type: 'theory',
        title: 'Mecanismos Fisiopatológicos das Arritmias Cardíacas',
        contentMarkdown: `# Aula Universitária: Arritmias Cardíacas — Bloqueios AV & Fibrilação Atrial

> 📖 Referência Canônica: Tilley, L. P. *Essentials of Canine and Feline Electrocardiography*. Ettinger, S. J. et al. *Cardiovascular Disorders*.

As arritmias cardíacas decorrem de alterações na **geração do impulso** (automatismo anormal ou atividade deflagrada) ou na **condução do impulso** (bloqueio anatômico ou reentrada):

### 1. Bloqueios Atrioventriculares (BAV)
- **BAV de 1º Grau:** Retardo fixo na condução nodal. O intervalo P-R é prolongado além do normal da espécie, mas **todas as ondas P são conduzidas** gerando um QRS correspondente. Benigno.
- **BAV de 2º Grau Mobitz I (Wenckebach):** O intervalo P-R vai aumentando progressivamente a cada batimento até que uma onda P é bloqueada e não gera QRS. Comum sob alto tônus vagal em equinos em repouso.
- **BAV de 2º Grau Mobitz II:** O intervalo P-R dos batimentos conduzidos permanece **estritamente fixo**, mas periodicamente uma onda P é subitamente bloqueada sem aviso prévio. Indica lesão estrutural orgânica no feixe de His com alto risco de progressão.
- **BAV de 3º Grau (Completo / Dissociação AV):** Bloqueio anatômico total entre átrios e ventrículos. As ondas P marcham no seu próprio ritmo sinusal rápido e os ventrículos assumem um ritmo de escape idioventricular bradicárdico independente com QRS alargado e aberrante. Requer implante de marca-passo definitivo!

---

### 2. Fibrilação Atrial (FA)
- **Mecanismo:** Múltiplos microcircuitos de microrreentrada nos átrios dilatados despolarizando a 400 a 600 batimentos por minuto.
- **Achados Eletrocardiográficos Clássicos:**
  1. Ausência absoluta de ondas P organizadas.
  2. Linha de base ondulada por pequenas deflexões caóticas e irregulares (**ondas "f"**).
  3. Intervalos R-R completamente caóticos e irregulares ("irregularmente irregular").
  4. Frequência ventricular geralmente taquicárdica (160 a 240 bpm em carnívoros).
- **Déficit de Pulso:** Na ausculta cardíaca simultânea à palpação do pulso femoral, há batimentos cardíacos que não produzem pulso palpável porque a diástole encurtada não permitiu enchimento ventricular mecânico suficiente!`,
        causalChain: {
          cause: 'Dilatação atrial avançada por doença valvar ou miocardiopatia gerando microcircuitos de reentrada',
          mechanism: 'Bombardeio caótico do nó atrioventricular com contrações atriais mecânicas nulas',
          effect: 'Perda do "atrial kick" mecânico associada a ciclos cardíacos de enchimento ventricular erráticos',
          clinicalMeaning: 'Déficit de pulso femoral, queda severa do débito cardíaco e choque cardiogênico'
        }
      },
      {
        id: 'sec_cardio_arrh_02',
        type: 'exercise',
        title: 'Caso Clínico: O Ritmo Caótico e o Déficit de Pulso da Onça-pintada',
        exerciseId: 'ex_cardio_04'
      }
    ]
  },

  {
    id: 'lesson_cardiology_heart_failure_lab',
    moduleId: 'mod_cardiology',
    title: 'Insuficiência Cardíaca, Inodilatadores & Bancada de ECG Virtual',
    subtitle: 'Farmacoterapia da ICC (Pimobendan, IECA, Furosemida) e laboratório osciloscópico de ECG.',
    estimatedMinutes: 25,
    objectives: [
      'Diferenciar o mecanismo inodilatador do Pimobendan (troponina C + PDE-III) dos digitálicos tradicionais',
      'Estruturar a terapia quádrupla da ICC descompensada: Pimobendan, IECA, Furosemida e Espironolactona',
      'Operar o osciloscópio de ECG com calíper virtual para mensurar intervalos e laudar traçados em tempo real'
    ],
    concepts: ['concept_heart_failure_therapy', 'concept_cardiac_arrhythmias'],
    sections: [
      {
        id: 'sec_cardio_hf_01',
        type: 'theory',
        title: 'A Cascata Fisiopatológica da ICC e a Terapêutica Inotrópica Moderna',
        contentMarkdown: `# Aula Universitária: Insuficiência Cardíaca Congestiva & Farmacoterapia Inodilatadora

> 📖 Referência Canônica: Keene, B. W. et al. *ACVIM consensus guidelines for the diagnosis and treatment of myxomatous mitral valve disease in dogs*, J Vet Intern Med. Ettinger, S. J. et al. *Textbook of Veterinary Internal Medicine*, 8th ed.

A Insuficiência Cardíaca Congestiva (ICC) é a via final comum das cardiopatias crônicas (Endocardiose Mitral e Cardiomiopatia Dilatada):

### 1. O Círculo Vicioso Neuro-hormonal
Quando o débito cardíaco cai:
1. **Ativação Simpática:** Disparo de noradrenalina que gera taquicardia e vasoconstrição arterial periférica (aumenta a pós-carga contra a qual o ventrículo insuficiente deve empurrar o sangue).
2. **Ativação do Sistema Renina-Angiotensina-Aldosterona (SRAA):** Angiotensina II promove remodelação miocárdica e fibrose; Aldosterona retém sódio e água, elevando a pré-carga venocapilar até extravasar fluido para os alvéolos (**Edema Pulmonar Agudo**).

---

### 2. A Superioridade do Pimobendan sobre a Digoxina
- **Digoxina (Inotrópico Tradicional):** Inibe a bomba Na+/K+ ATPase, forçando o acúmulo de cálcio citosólico livre. Esse excesso de cálcio intracelular consome quantidades astronômicas de ATP, eleva a demanda de oxigênio do miocárdio e gera pós-potenciais tardios com arritmias ventriculares potencialmente fatais.
- **Pimobendan (Inodilatador de Escolha):**
  1. **Sensibilizador de Cálcio:** Não aumenta o cálcio livre intracelular, mas altera a conformação da **Troponina C**, permitindo maior força contrátil sistólica com a mesma concentração de cálcio fisiológico existente, sem gasto excessivo de ATP!
  2. **Inibidor da Fosfodiesterase III (PDE-III):** Impede a degradação de AMPc na musculatura lisa dos vasos arteriais e venosos, promovendo potente vasodilatação mista que alivia a pós-carga e a pré-carga.

\`\`\`mermaid
flowchart TD
    A["Insuficiência Cardíaca Descompensada (Estágio C)"] --> B["Queda de Força Contrátil Sistólica"]
    A --> C["Vasoconstrição Periférica Excessiva (Pós-carga Alta)"]
    A --> D["Congestão Venocapilar Pulmonar (Pré-carga Alta)"]
    
    B --> E["PIMOBENDAN: Sensibilização de Troponina C"]
    C --> F["PIMOBENDAN: Inibição de PDE-III + ENALAPRIL (IECA)"]
    D --> G["FUROSEMIDA: Bloqueio Na+/K+/2Cl- na Alça de Henle"]
    
    E --> H["Aumento da Contratilidade sem Arritmias Fatais"]
    F --> I["Vasodilatação Sistêmica com Queda da Resistência"]
    G --> J["Diurese Rápida com Resolução do Edema Pulmonar"]
\`\`\``,
        causalChain: {
          cause: 'Cardiomiopatia dilatada com fração de encurtamento < 15% e edema pulmonar agudo',
          mechanism: 'Inodilatação balanceada promovida por sensibilização de troponina C associada a inibição de PDE-III',
          effect: 'Elevação da força contrátil sistólica ventricular sem sobrecarga energética de ATP',
          clinicalMeaning: 'Aumento imediato do débito cardíaco, redução do edema pulmonar e sobrevida expressiva'
        }
      },
      {
        id: 'sec_cardio_hf_02',
        type: 'exercise',
        title: 'Verificação Farmacológica: O Inodilatador no Lobo-guará com CMD',
        exerciseId: 'ex_cardio_05'
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
