// src/learning/data/lessons/anesthesiologyLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const ANESTHESIOLOGY_EXERCISES: Record<string, LearningExercise> = {
  ex_anes_01: {
    id: 'ex_anes_01',
    conceptId: 'concept_anesthesia_premed_asa',
    type: 'multiple_choice',
    prompt: 'Um cão Maltês de 12 anos e 4,5 kg com histórico de sopro sistólico mitral grau V/VI e tosse noturna (ASA IV) necessita ser anestesiado para limpeza de tártaro e extração dentária de emergência. Qual dos seguintes agentes é RIGOROSAMENTE CONTRAINDICADO na medicação pré-anestésica deste paciente e por qual mecanismo hemodinâmico?',
    options: [
      {
        id: 'opt_1',
        text: 'Dexmedetomidina (Agonista Alfa-2 adrenérgico), pois causa vasoconstrição periférica severa com aumento drástico da pós-carga ventricular esquerda e bradicardia reflexa, podendo desencadear edema agudo de pulmão.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Em cães com endocardiose de mitral, o aumento súbito da resistência vascular sistêmica gerado pelo agonista alfa-2 impede o esvaziamento ventricular pela aorta e aumenta brutalmente a regurgitação mitral para o átrio esquerdo, colapsando o débito cardíaco.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Metadona (Opioide puro mu), pois os opioides são proibidos na anestesia de cardiopatas.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A metadona e os opioides em geral são a base mais segura para anestesiar cardiopatas devido à excelente estabilidade hemodinâmica e analgesia sem inotropismo negativo marcante.',
        conceptualErrorCategory: 'opioid_misconception'
      },
      {
        id: 'opt_3',
        text: 'Midazolam (Benzodiazepínico), pois causa taquicardia ventricular grave em cães idosos.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O midazolam é o sedativo de eleição para cães cardiopatas ou idosos por manter o débito cardíaco praticamente inalterado.',
        conceptualErrorCategory: 'benzodiazepine_confusion'
      },
      {
        id: 'opt_4',
        text: 'Atropina, pois é indicada apenas para cavalos atletas.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A atropina é um anticolinérgico amplamente utilizado em cães para reversão de bradicardias vagais severas.',
        conceptualErrorCategory: 'atropine_confusion'
      }
    ],
    pedagogicalExplanation: 'Pacientes com doença valvar mitral requerem pós-carga baixa ou equilibrada; agonistas alfa-2 causam vasoconstrição periférica potente e bradicardia reflexa profunda, sendo proscritos.',
    causalChain: {
      cause: 'Uso de agonista alfa-2 (xilazina/dexmedetomidina) em paciente com insuficiência mitral crônica',
      mechanism: 'Vasoconstrição periférica potente eleva a pós-carga e a pressão intraventricular esquerda',
      effect: 'Aumento maciço do volume de sangue regurgitante para o átrio esquerdo e veias pulmonares',
      clinicalMeaning: 'Edema agudo de pulmão hiperagudo, hipoxemia fulminante e óbito peroperatório'
    }
  },

  ex_anes_02: {
    id: 'ex_anes_02',
    conceptId: 'concept_anesthesia_induction_maintenance',
    type: 'multiple_choice',
    prompt: 'Durante a indução anestésica de uma gata jovem para ovariosalpingohisterectomia, o cirurgião administra Propofol intravenoso lento até perda do reflexo laringotraqueal. Ao tentar passar a sonda orotraqueal com laringoscópio, as cartilagens aritenoides da laringe se fecham espasmodicamente em adução forçada, bloqueando totalmente a entrada da traqueia (laringoespasmo felino). Qual a conduta anestésica preventiva e terapêutica preconizada para essa intercorrência?',
    options: [
      {
        id: 'opt_1',
        text: 'Aplicação prévia de 0,1 mL de Lidocaína 2% sem vasoconstritor instilada sobre a glote e cartilagens aritenoides com cateter sem agulha 30 a 60 segundos antes da intubação para dessensibilizar os receptores sensoriais laríngeos.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! A espécie felina possui uma laringe extremamente hiper-reativa com rica inervação sensitiva via nervo laríngeo recorrente. A instilação tópica de lidocaína 2% sobre as aritenoides dessensibiliza a mucosa local, relaxando as cordas vocais e permitindo a passagem suave da cânula endotraqueal com guia flexível sem traumatismo.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Forçar a sonda endotraqueal com força máxima através das aritenoides fechadas até romper a cartilagem cricóide.',
        isCorrect: false,
        pedagogicalFeedback: 'Catastrófico! Forçar a sonda provocará laceração traqueal, enfisema subcutâneo mediastinal e ruptura de vias aéreas com pneumotórax fatal em felinos.',
        conceptualErrorCategory: 'mechanical_force_violation'
      },
      {
        id: 'opt_3',
        text: 'Desligar todo o oxigênio e deixar o animal acordar imediatamente para desobstrução voluntária.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O animal em apneia por propofol entrará em hipóxia e parada cardíaca se for deixado sem oxigênio sob espasmo laríngeo.',
        conceptualErrorCategory: 'hypoxia_negligence'
      },
      {
        id: 'opt_4',
        text: 'Administrar adrenalina intracardíaca para induzir tosse mecânica imediata.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e perigoso. Adrenalina intracardíaca causa taquicardia ventricular e infarto, não tendo efeito relaxante sobre o laringoespasmo mecânico.',
        conceptualErrorCategory: 'epinephrine_misattribution'
      }
    ],
    pedagogicalExplanation: 'O laringoespasmo é a principal complicação de vias aéreas em gatos sob indução anestésica. A lidocaína tópica preventiva abole o reflexo sensitivo, permitindo intubação segura.',
    causalChain: {
      cause: 'Tentativa de intubação orotraqueal em felino sem dessensibilização tópica da glote',
      mechanism: 'Estímulo mecânico sobre receptores sensoriais laríngeos desencadeia arco reflexo vagal adutor espasmódico',
      effect: 'Fechamento hermético das cordas vocais e aritenoides impedindo a passagem da sonda',
      clinicalMeaning: 'Hipoxemia hiperaguda, dessaturação de oxigênio (SpO2 < 80%) e risco de parada cardiorrespiratória'
    }
  },

  ex_anes_03: {
    id: 'ex_anes_03',
    conceptId: 'concept_anesthesia_inhalation_circuits',
    type: 'multiple_choice',
    prompt: 'Durante uma osteossíntese femoral em um cavalo de 450 kg conectado a um sistema anestésico valvular em círculo, o anestesista nota que a cal sodada no canister adquiriu coloração violeta intensa e o monitor acusa InCO2 de 8 mmHg (linha de base não toca o zero). Qual a conduta imediata para proteger o animal da reinalação de gás carbônico enquanto se prepara a substituição da cal sodada?',
    options: [
      {
        id: 'opt_1',
        text: 'Aumentar temporariamente o Fluxo de Gases Frescos (FGF de oxigênio) para níveis altos (sistema semi-aberto de lavagem rápida), permitindo que o excesso de CO2 seja eliminado continuamente pela válvula pop-off.',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! Ao elevar substancialmente o fluxo de oxigênio fresco, o anestesista transforma temporariamente o circuito em um sistema de lavagem rápida, expulsando o CO2 exalado pela válvula de alívio (pop-off) e impedindo sua reinalação enquanto a equipe providencia a troca rápida do canister.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Fechar totalmente a válvula pop-off e desligar o fornecimento de oxigênio para economizar gás.',
        isCorrect: false,
        pedagogicalFeedback: 'Catastrófico! Fechar a válvula pop-off gerará barotrauma explosivo nos alvéolos pulmonares por hiperpressurização do circuito, além de asfixia imediata.',
        conceptualErrorCategory: 'barotrauma_violation'
      },
      {
        id: 'opt_3',
        text: 'Aumentar a porcentagem de Isoflurano no vaporizador para 5% para deprimir a respiração e produzir menos CO2.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Aumentar o isoflurano aprofundará o plano anestésico para colapso cardiovascular por vasodilatação periférica e choque hipotensivo severo.',
        conceptualErrorCategory: 'overdose_misconception'
      },
      {
        id: 'opt_4',
        text: 'Desconectar o cavalo e deixá-lo respirar ar ambiente deitado na mesa cirúrgica sem tubo orotraqueal.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O animal acordará no meio da cirurgia ou entrará em hipóxia e atelectasia pulmonar grave devido ao peso corporal comprimindo os pulmões em decúbito.',
        conceptualErrorCategory: 'extubation_error'
      }
    ],
    pedagogicalExplanation: 'A elevação do FGF para níveis não-reinalatórios expulsa o CO2 exalado pela válvula pop-off aberta, sendo a manobra de resgate padronizada em caso de exaustão química da cal sodada.',
    causalChain: {
      cause: 'Elevação do InCO2 > 5 mmHg por saturação dos grânulos alcalinos de cal sodada no canister',
      mechanism: 'Aumento imediato do fluxo de gás fresco (FGF) dilui o circuito e lava o gás exalado',
      effect: 'Expulsão contínua do CO2 pela válvula pop-off sem depender da absorção química esgotada',
      clinicalMeaning: 'Prevenção de acidose respiratória transoperatória aguda até a troca segura do absorvedor'
    }
  },

  ex_anes_04: {
    id: 'ex_anes_04',
    conceptId: 'concept_anesthesia_monitoring_recovery',
    type: 'multiple_choice',
    prompt: 'Durante um procedimento cirúrgico ortopédico em um cão de 20 kg mantido sob anestesia inalatória com Isoflurano, o monitor multiparamétrico acusa Pressão Arterial Média (PAM) de 48 mmHg (valor normal mínimo seguro: PAM >= 60-70 mmHg), frequência cardíaca de 84 bpm e saturação de SpO2 de 98%. Qual a sequência lógica escalonada de intervenções anestésicas recomendadas para corrigir essa hipotensão arterial e preservar a taxa de filtração glomerular?',
    options: [
      {
        id: 'opt_1',
        text: '1º) Reduzir a fração inspirada de Isoflurano (diminuir a vasodilatação induzida pelo anestésico inalatório); 2º) Administrar um bolus de cristaloides aquecidos (10 mL/kg em 15 min); 3º) Se a PAM persistir < 60 mmHg, iniciar infusão contínua de inotrópico positivo (Dobutamina 2 a 5 mcg/kg/min).',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O protocolo de manejo da hipotensão é rigorosamente escalonado: primeiro remove-se a causa vasodilatadora primária (redução da CAM do anestésico inalatório, suplementando analgesia se necessário); segundo, expande-se a volemia com bolus de cristaloides; terceiro, caso a contratilidade miocárdica continue deprimida pelo anestésico, entra-se com Dobutamina (agonista beta-1 adrenérgico inotrópico positivo) para elevar o volume sistólico e restaurar a PAM acima de 60-70 mmHg.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Aumentar imediatamente o Isoflurano para 4% e aplicar diurético de alça (Furosemida) intravenoso rápido.',
        isCorrect: false,
        pedagogicalFeedback: 'Catastrófico! Aumentar o isoflurano dilata ainda mais as arteríolas periféricas e a furosemida depele volume intravascular, levando a parada cardíaca em choque hipovolêmico.',
        conceptualErrorCategory: 'contraindicated_escalation'
      },
      {
        id: 'opt_3',
        text: 'Desligar o oxigênio e colocar o paciente em posição de Trendelenburg invertida com a cabeça elevada a 90 graus.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e lesivo. Elevar a cabeça colapsaria a perfusão arterial cerebral e desligar o oxigênio provocaria hipóxia celular generalizada.',
        conceptualErrorCategory: 'postural_perfusion_error'
      },
      {
        id: 'opt_4',
        text: 'Infundir 5 litros de solução glicosada a 50% sem alterar os parâmetros ventilatórios ou o vaporizador.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Solução glicosada hipertônica em excesso causa hiperglicemia extrema, diurese osmótica desidratante e edema cerebral.',
        conceptualErrorCategory: 'fluid_selection_error'
      }
    ],
    pedagogicalExplanation: 'A PAM < 60 mmHg compromete a autorregulação do fluxo sanguíneo renal e cerebral. O algoritmo canônico preconiza redução do anestésico volátil, desafio volêmico com cristaloide e inotrópicos (Dobutamina).',
    causalChain: {
      cause: 'Vasodilatação periférica arterial e depressão miocárdica induzidas pela CAM de Isoflurano',
      mechanism: 'Queda na resistência vascular sistêmica gerando PAM < 50 mmHg com perda da autorregulação renal',
      effect: 'Redução drástica da pressão de filtração glomerular com isquemia tubular aguda',
      clinicalMeaning: 'Hipotensão peroperatória severa com risco de lesão renal aguda e despertar prolongado'
    }
  },

  ex_anes_05: {
    id: 'ex_anes_05',
    conceptId: 'concept_capnography_etco2_interpretation',
    type: 'multiple_choice',
    prompt: 'Durante a monitorização anestésica de uma gata de 3 anos, o traçado retangular da capnografia perdeu subitamente o platô horizontal da Fase III, apresentando uma subida lenta e arredondada em formato característico de "barbatana de tubarão" (shark-fin). Qual o diagnóstico fisiopatológico e a intervenção recomendada?',
    options: [
      {
        id: 'opt_1',
        text: 'Aumento da resistência expiratória das vias aéreas (broncoespasmo ou secreção/dobra na sonda endotraqueal); verificar desobstrução da sonda e considerar broncodilatador inalatório (salbutamol) ou corticoide se houver hiper-reatividade brônquica.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A morfologia em barbatana de tubarão é patognomônica de obstrução expiratória. Como o ar sai com extrema dificuldade dos bronquíolos constritos ou da cânula parcialmente ocluída, o esvaziamento alveolar é heterogêneo e lento, impedindo a formação do platô reto da Fase III.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Parada cardíaca súbita; iniciar imediatamente massagem cardíaca externa.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Na parada cardíaca, o EtCO2 cai abruptamente ou exponencialmente para valores próximos de zero devido à cessação do transporte de sangue aos pulmões, e não em formato de barbatana de tubarão.',
        conceptualErrorCategory: 'cardiac_arrest_confusion'
      },
      {
        id: 'opt_3',
        text: 'Esgotamento da cal sodada no aparelho de anestesia.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A cal sodada esgotada eleva a linha de base (InCO2 > 0 mmHg), mas preserva o platô retangular da Fase III.',
        conceptualErrorCategory: 'soda_lime_confusion'
      },
      {
        id: 'opt_4',
        text: 'Desconexão do tubo endotraqueal com o circuito anestésico.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Se o tubo desconectar, o sensor capnográfico não capta mais fluxo e a linha cai instantaneamente a zero absoluto, sem desenhar curvas.',
        conceptualErrorCategory: 'disconnection_confusion'
      }
    ],
    pedagogicalExplanation: 'A morfologia de barbatana de tubarão no capnograma alerta imediatamente o anestesista sobre broncoconstrição mecânica ou reacional, orientando a checagem física da sonda e terapia broncodilatadora.',
    causalChain: {
      cause: 'Constrição da musculatura lisa bronquiolar ou acúmulo de muco na cânula traqueal',
      mechanism: 'Aumento da constante de tempo expiratória com liberação heterogênea do ar alveolar',
      effect: 'Eliminação da inclinação plana da Fase III com traçado em rampa ("barbatana de tubarão")',
      clinicalMeaning: 'Aprisionamento aéreo (auto-PEEP), hipoventilação e retenção progressiva de CO2'
    }
  }
};

export const ANESTHESIOLOGY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_anes_premed_asa',
    moduleId: 'mod_anesthesiology',
    title: 'Avaliação de Risco ASA & MPA Multimodal',
    subtitle: 'Estratificação pré-operatória, neuroleptoanalgesia e farmacologia comparada dos sedativos.',
    estimatedMinutes: 20,
    objectives: [
      'Classificar pacientes de acordo com a escala de risco cirúrgico ASA (I a V e Emergência)',
      'Formular protocolos de Medicação Pré-Anestésica (MPA) balanceada combinando sedativos e opioides',
      'Compreender as contraindicações vitais dos agonistas alfa-2 em cardiopatas e fenotiazínicos no choque'
    ],
    concepts: ['concept_anesthesia_premed_asa'],
    sections: [
      {
        id: 'anes_premed_sec_1',
        type: 'theory',
        title: 'Classificação de Risco Físico da American Society of Anesthesiologists (ASA)',
        contentMarkdown: `# Aula Universitária: Avaliação Pré-Anestésica & Farmacologia da MPA

> 📖 Referência Canônica: Tranquilli, W. J.; Thurmon, J. C.; Grimm, K. A. *Lumb & Jones' Veterinary Anesthesia and Analgesia*, 5th ed. Wiley-Blackwell. Fantoni, D. T.; Cortopassi, S. R. G. *Anestesia em Cães e Gatos*, 2ª ed. Roca.

Antes de qualquer indução anestésica, o médico veterinário deve estratificar a vulnerabilidade biológica do paciente:

### 1. A Escala de Estado Físico ASA
- **ASA I:** Paciente hígido sem patologia sistêmica (ex.: castração eletiva de cão jovem).
- **ASA II:** Doença sistêmica leve a moderada compensada sem impacto funcional (ex.: animal idoso hígido, obesidade leve, hérnia umbilical simples).
- **ASA III:** Doença sistêmica grave, mas não incapacitante (ex.: insuficiência cardíaca congestiva compensada, anemia crônica estável).
- **ASA IV:** Doença sistêmica grave descompensada que ameaça constantemente a vida (ex.: piometra com choque endotóxico, uremia obstrutiva anúrica).
- **ASA V:** Moribundo; expectativa de óbito nas próximas 24 horas com ou sem cirurgia (ex.: torção gástrica em choque cardiogênico refratário).
- **Sufixo E (Emergência):** Adicionado a qualquer grau quando o procedimento cirúrgico não pode ser postergado (ex.: cólica estrangulativa equina: ASA IV-E).

---

### 2. A Neuroleptoanalgesia Multimodal
Combinação de um sedativo com um analgésico opioide para contenção química atraumática:
- **Vantagem Clínica:** Reduz o estresse da contenção mecânica e diminui em até 40% a 60% a dose de indutores intravenosos (Propofol) e a CAM de anestésicos inalatórios.
- **Destaques Farmacológicos:**
  - *Agonistas Alfa-2 Adrenérgicos (Dexmedetomidina, Xilazina):* Causam vasoconstrição periférica intensa inicial, hipertensão transitória seguida de hipotensão e **bradicardia reflexa severa com redução de 50% no débito cardíaco**. **RIGOROSAMENTE PROIBIDOS em pacientes com cardiopatias dilatadas ou valvares!**
  - *Fenotiazínicos (Acepromazina):* Promovem bloqueio alfa-1 adrenérgico com vasodilatação periférica prolongada. **PROIBIDOS em choque hipovolêmico, hemorragia ativa e desidratação.**
  - *Benzodiazepínicos (Midazolam):* Moduladores alostéricos do GABAA; estabilidade hemodinâmica máxima em pacientes idosos, cardiopatas ou graves.`,
        causalChain: {
          cause: 'Administração de agonista alfa-2 em paciente com cardiopatia dilatada ou choque hipovolêmico',
          mechanism: 'Aumento abrupto da pós-carga vascular associado a bradiarritmia extrema e colapso do débito cardíaco',
          effect: 'Queda crítica da perfusão miocárdica e cerebral com edema agudo de pulmão',
          clinicalMeaning: 'Parada cardiorrespiratória irreversível na indução anestésica'
        }
      },
      {
        id: 'anes_premed_sec_2',
        type: 'exercise',
        title: 'Tomada de Decisão: Escolha de MPA em Paciente Cardiopata',
        exerciseId: 'ex_anes_01'
      }
    ]
  },

  {
    id: 'lesson_anes_induction',
    moduleId: 'mod_anesthesiology',
    title: 'Indução Anestésica & Manejo de Vias Aéreas',
    subtitle: 'Propofol, Cetamina dissociativa, intubação orotraqueal e prevenção do laringoespasmo felino.',
    estimatedMinutes: 22,
    objectives: [
      'Diferenciar os agentes indutores: Propofol (GABAA), Cetamina (antagonista NMDA) e Etomidato',
      'Dominar a técnica de intubação orotraqueal com seleção do diâmetro da cânula e teste do balonete',
      'Executar a prevenção e reversão do laringoespasmo em felinos utilizando lidocaína tópica'
    ],
    concepts: ['concept_anesthesia_induction_maintenance'],
    sections: [
      {
        id: 'sec_anes_ind_01',
        type: 'theory',
        title: 'Farmacologia da Indução e Técnica Segura de Intubação',
        contentMarkdown: `# Aula Universitária: Indução Anestésica Intravenosa & Intubação Orotraqueal

> 📖 Referência Canônica: Grimm, K. A. et al. *Veterinary Anesthesia and Analgesia*. Fantoni, D. T. *Anestesia em Cães e Gatos*.

A indução anestésica transita o paciente do estado de sedação para a anestesia geral inconsciente, permitindo o controle seguro da via aérea:

### 1. Fármacos Indutores Intravenosos
- **Propofol:** Alquilfenol que potencializa o neurotransmissor inibitório GABA no receptor GABAA. Indução suave e ultrarrápida com despertar de excelente qualidade por redistribuição lipídica. *Efeitos adversos:* Apneia pós-indução dependente da velocidade de injeção (administrar em bólus fracionados ao longo de 60 a 90 segundos) e vasodilatação periférica.
- **Cetamina:** Anestésico dissociativo antagonista não-competitivo dos receptores glutamatérgicos NMDA. Mantém os reflexos laríngeos e tônus simpático (eleva FC e pressão arterial). Deve ser sempre associada a um miorrelaxante (Midazolam) para evitar rigidez muscular e mioclonias.
- **Etomidato:** Derivado imidazólico de eleição para cardiopatas críticos graves (ASA IV e V); preserva o débito cardíaco e a contratilidade miocárdica sem causar vasodilatação.

---

### 2. A Técnica de Intubação Orotraqueal e o Laringoespasmo Felino
1. **Posicionamento:** Decúbito esternal com o pescoço e a cabeça estendidos em linha reta; um assistente traciona a maxila para cima enquanto o anestesista abaixa a mandíbula com compressa estéril.
2. **Visualização Direta com Laringoscópio:** A lâmina do laringoscópio pressiona a base da língua, deprimindo a epiglote e expondo as cartilagens aritenoides e a fenda glótica.
3. **Prevenção do Laringoespasmo em Gatos:** Instilar **0,1 mL de Lidocaína a 2% sem vasoconstritor** diretamente sobre as aritenoides com cateter flexível 30 a 60 segundos antes da intubação. A lidocaína dessensibiliza a mucosa e abole o reflexo de fechamento espasmódico das cordas vocais.
4. **Insuflação do Balonete (Cuff):** Insuflar o balonete com ar com uma seringa apenas até cessar o ruído audível de escape de gás durante uma ventilação manual sob pressão de 15 a 20 cmH2O (técnica do volume mínimo oclusivo).`,
        causalChain: {
          cause: 'Tentativa forçada de intubação orotraqueal em felino sem dessensibilização com lidocaína tópica',
          mechanism: 'Disparo de arco reflexo nociceptivo vagal com espasmo adutor das cartilagens aritenoides',
          effect: 'Fechamento hermético das cordas vocais bloqueando a passagem de oxigênio',
          clinicalMeaning: 'Laringoespasmo hiperagudo, hipoxemia arterial severa (SpO2 < 75%) e parada cardíaca anóxica'
        }
      },
      {
        id: 'sec_anes_ind_02',
        type: 'exercise',
        title: 'Caso Clínico: O Laringoespasmo Felino e a Conduta de Urgência',
        exerciseId: 'ex_anes_02'
      }
    ]
  },

  {
    id: 'lesson_anes_inhalation',
    moduleId: 'mod_anesthesiology',
    title: 'Circuitos Anestésicos & Dinâmica da Cal Sodada',
    subtitle: 'Sistemas com e sem reinalação, fluxo de gases frescos (FGF) e absorção química de CO2.',
    estimatedMinutes: 24,
    objectives: [
      'Diferenciar circuitos com reinalação (valvulares em círculo) de circuitos sem reinalação (Baraka / Bain)',
      'Identificar o esgotamento químico da cal sodada e suas manifestações no capnógrafo',
      'Calcular o fluxo de gases frescos (FGF) por quilograma de peso vivo'
    ],
    concepts: ['concept_anesthesia_inhalation_circuits'],
    sections: [
      {
        id: 'anes_inhalation_sec_1',
        type: 'theory',
        title: 'Fisiopatologia dos Sistemas Anestésicos Inalatórios',
        contentMarkdown: `# Aula Universitária: Aparelhos de Anestesia Inalatória, Circuitos & Absorção de CO2

> 📖 Referência Canônica: Tranquilli, W. J. et al. *Lumb & Jones' Veterinary Anesthesia*, 5th ed. Fantoni, D. T. *Anestesia em Cães e Gatos*, 2ª ed.

O aparelho de anestesia inalatória entrega oxigênio e anestésico volátil (Isoflurano/Sevoflurano) ao paciente enquanto remove o gás carbônico exalado:

### 1. Sistema Sem Reinalação (Não-Reinalatório / Valveless - Ex: Baraka, T de Ayre, Bain)
- Indicado para pacientes com menos de 7 a 10 kg (aves, filhotes, gatos e pequenos cães).
- **Sem Cal Sodada:** O CO2 exalado é empurrado para a atmosfera pelo próprio fluxo contínuo de gás fresco (FGF alto: 200 a 300 mL/kg/min).
- Baixíssima resistência mecânica à respiração, poupando a musculatura diafragmática de animais pequenos.

---

### 2. Sistema Com Reinalação (Reinalatório / Valvular em Círculo)
- Indicado para pacientes com mais de 7 a 10 kg (cães médios e grandes, equinos, ruminantes).
- O gás exalado passa por válvulas unidirecionais inspiratória e expiratória e é forçado através do **canister de Cal Sodada**.
- **A Química da Cal Sodada:** Composta por Hidróxido de Cálcio [Ca(OH)2] e pequenas quantidades de NaOH:
  $$\text{CO}_2 + \text{H}_2\text{O} -> \text{H}_2\text{CO}_3$$
  $$\text{H}_2\text{CO}_3 + 2\text{NaOH} -> \text{Na}_2\text{CO}_3 + 2\text{H}_2\text{O} + \text{Calor}$$
  $$\text{Na}_2\text{CO}_3 + \text{Ca(OH)}_2 -> \text{CaCO}_3 (pp) + 2\text{NaOH}$$
- **Indicador de Exaustão (Violeta de Etila):** Quando o pH da cal sodada cai abaixo de 10,3 pelo consumo dos álcalis, os grânulos mudam de **branco para violeta/azulado**.
- **Sinal Patognomônico no Monitor:** Aumento do InCO2 (CO2 inspiratório) acima de 3 a 5 mmHg na linha de base da capnografia. O animal está reinalando o próprio gás carbônico!`,
        causalChain: {
          cause: 'Cal sodada exausta mantida no circuito em círculo durante procedimento cirúrgico prolongado',
          mechanism: 'Incapacidade química de fixar o gás carbônico exalado, que retorna aos pulmões na fase inspiratória',
          effect: 'Elevação contínua do InCO2 na capnografia com hipercapnia arterial sistêmica',
          clinicalMeaning: 'Acidose respiratória grave, taquicardia ventricular reflexa e vasodilatação cerebral com hipertensão intracraniana'
        }
      },
      {
        id: 'anes_inhalation_sec_2',
        type: 'exercise',
        title: 'Conduta de Emergência: Cal Sodada Saturada Transoperatória no Cavalo',
        exerciseId: 'ex_anes_03'
      }
    ]
  },

  {
    id: 'lesson_anes_monitoring',
    moduleId: 'mod_anesthesiology',
    title: 'Monitorização Hemodinâmica & Manejo da Hipotensão',
    subtitle: 'Pressão arterial (PAM >= 60 mmHg), oximetria de pulso (SpO2) e farmacoterapia com inotrópicos.',
    estimatedMinutes: 24,
    objectives: [
      'Interpretar a oximetria de pulso (SpO2) e a curva de dissociação da oxi-hemoglobina',
      'Monitorar a Pressão Arterial Média (PAM) invasiva e não-invasiva prevenindo falência renal',
      'Aplicar o algoritmo escalonado para tratamento de hipotensão transoperatória (ajuste de CAM, volume, dobutamina)'
    ],
    concepts: ['concept_anesthesia_monitoring_recovery', 'concept_anesthesia_induction_maintenance'],
    sections: [
      {
        id: 'sec_anes_mon_01',
        type: 'theory',
        title: 'Parâmetros Hemodinâmicos Vitais sob Anestesia Geral',
        contentMarkdown: `# Aula Universitária: Monitorização Hemodinâmica & Terapêutica da Hipotensão

> 📖 Referência Canônica: Silverstein, D. C.; Hopper, K. *Small Animal Critical Care Medicine*, 3rd ed. Elsevier. Tranquilli, W. J. et al. *Lumb & Jones' Veterinary Anesthesia and Analgesia*.

A anestesia geral deprime a autorregulação circulatória normal. A monitorização contínua orienta correções terapêuticas antes da ocorrência de hipóxia celular irreversível:

### 1. Oximetria de Pulso (SpO2) & Curva de Dissociação
- Mensura a porcentagem de hemoglobina saturada com oxigênio na microcirculação pulsátil (língua, dígitos, prepúcio/vulva).
- **A Regra de Ouro da Oxi-hemoglobina:**
  - $SpO_2 = 98%\text{ a }100%$: Pressão arterial de oxigênio ($PaO_2$) excelente ($> 90-100\text{ mmHg}$).
  - $SpO_2 = 90%$: Ponto de inflexão crítico da curva! Corresponde a uma $PaO_2$ de apenas **60 mmHg** (limiar de hipoxemia arterial grave). Abaixo de 90%, pequenas quedas de saturação refletem colapso catastrófico de oxigênio dissolvido!

---

### 2. Pressão Arterial Média (PAM) & Perfusão Orgânica
- A **Pressão Arterial Média (PAM)** é a força propulsora que garante a perfusão capilar dos órgãos nobres (rins, cérebro, miocárdio).
- **Limiar Crítico:** Em pequenos animais, a PAM deve ser mantida **rigorosamente $>= 60\text{ a }70\text{ mmHg}$**. Em equinos adultos sob anestesia, a PAM deve ser mantida **$>= 70\text{ mmHg}$** para prevenir rabdomiólise isquêmica e miopatia pós-anestésica.
- **Algoritmo de Resgate da Hipotensão:**
  1. *Reduzir o Anestésico Volátil:* O isoflurano/sevoflurano é um potente vasodilatador arteriolar concentração-dependente. Reduzir a porcentagem do vaporizador alivia a vasodilatação sistêmica.
  2. *Desafio Volêmico:* Administrar um bolus de cristaloides aquecidos ($5\text{ a }10\text{ mL/kg}$ em 15 minutos) para otimizar o retorno venoso e a pré-carga.
  3. *Suporte Inotrópico / Vasopressor:* Se a PAM persistir $< 60\text{ mmHg}$, iniciar **Dobutamina** ($2\text{ a }5 µg/kg/min$ em bomba de infusão contínua). Se houver vasodilatação refratária séptica, associar **Noradrenalina** ($0,1\text{ a }0,5 µg/kg/min$).`,
        causalChain: {
          cause: 'PAM transoperatória < 50 mmHg mantida por mais de 30 minutos sob anestesia inalatória',
          mechanism: 'Perda da pressão hidrostática necessária para superar a pressão oncótica e capsular nos glomérulos renais',
          effect: 'Cessação da filtração glomerular e isquemia medular dos túbulos contorcidos renais',
          clinicalMeaning: 'Lesão renal aguda pós-anestésica com anúria, elevação de creatinina e óbito tardio'
        }
      },
      {
        id: 'sec_anes_mon_02',
        type: 'exercise',
        title: 'Verificação Hemodinâmica: Manejo Escalonado da Hipotensão Arterial Transoperatória',
        exerciseId: 'ex_anes_04'
      }
    ]
  },

  {
    id: 'lesson_anes_capnography',
    moduleId: 'mod_anesthesiology',
    title: 'Capnografia Avançada & Curvas de EtCO2',
    subtitle: 'Interpretação gráfica das fases do capnograma e diagnóstico precoce de paradas respiratórias.',
    estimatedMinutes: 25,
    objectives: [
      'Analisar a morfologia das 4 fases da onda de capnografia convencional',
      'Diferenciar hipoventilação alveolar, broncoespasmo obstrutivo e reinalação de gases',
      'Treinar na Estação de Capnografia do Centro Cirúrgico virtual'
    ],
    concepts: ['concept_capnography_etco2_interpretation'],
    sections: [
      {
        id: 'anes_capno_sec_1',
        type: 'theory',
        title: 'As 4 Fases do Capnograma Retangular Normal',
        contentMarkdown: `# Aula Universitária: Capnografia Clínica — Fisiologia e Padrões Gráficos

> 📖 Referência Canônica: Tranquilli, W. J. et al. *Lumb & Jones' Veterinary Anesthesia and Analgesia*. Fantoni, D. T. *Anestesia em Cães e Gatos*.

A capnografia mensura continuamente a pressão parcial de CO2 nos gases respiratórios ao final da expiração (EtCO2):

### A Onda Normal (Padrão Retangular):
1. **Fase I (Linha de Base Inspiratória):** Representa o início da expiração com gás do espaço morto anatômico (traqueia e brônquios), desprovido de CO2. O valor deve ser rigorosamente zero ($InCO_2 = 0\text{ mmHg}$).
2. **Fase II (Subida Expiratória Rápida):** Mistura rápida do gás do espaço morto com o gás alveolar rico em CO2.
3. **Fase III (Platô Alveolar):** Exalação contínua do gás alveolar puro. Apresenta inclinação suave ascendente. O ponto mais alto ao final desta fase é o **EtCO2** (Valores normais: **35 a 45 mmHg** em mamíferos; **25 a 35 mmHg** em aves).
4. **Fase IV (Descida Inspiratória Abrupta):** Início da inspiração de gás fresco, retornando a linha de base para zero instantaneamente.

### Alterações Patológicas Patognomônicas:
- **Barbatana de Tubarão (Shark-Fin):** Perda do platô horizontal e subida lenta e arredondada na Fase II e III. Indica **aumento da resistência de vias aéreas** (broncoespasmo, asma felina ou cânula traqueal dobrada/obstruída por muco).
- **Linha de Base Elevada ($InCO_2 > 5\text{ mmHg}$):** A curva não toca o zero. Indica **reinalação de CO2** (cal sodada exausta ou falha na válvula unidirecional).
- **Queda Súbita a Zero:** Desconexão do circuito, extubação acidental ou oclusão completa da sonda.
- **Queda Exponencial Rápida do EtCO2:** Queda catastrófica do débito cardíaco, choque cardiogênico ou Parada Cardiorrespiratória (PCR iminente).`,
        causalChain: {
          cause: 'Broncoespasmo agudo ou torção mecânica da cânula endotraqueal durante cirurgia',
          mechanism: 'Aumento exponencial da resistência ao fluxo expiratório com esvaziamento alveolar desigual',
          effect: 'Curva capnográfica com subida lenta em rampa sem platô alveolar definido ("barbatana de tubarão")',
          clinicalMeaning: 'Retenção aguda de CO2, hipoxemia arterial e acidose respiratória iminente se não corrigida'
        }
      },
      {
        id: 'anes_capno_sec_2',
        type: 'exercise',
        title: 'Diagnóstico Gráfico: Reconhecimento da Barbatana de Tubarão',
        exerciseId: 'ex_anes_05'
      },
      {
        id: 'anes_capno_sec_3',
        type: 'lab',
        title: 'Centro Cirúrgico: Estação de Capnografia & Anestesia',
        labType: 'surgical_center_bench',
        labConfig: {
          mode: 'capnography_bench',
          defaultScenario: 'canine_normal'
        }
      }
    ]
  }
];
