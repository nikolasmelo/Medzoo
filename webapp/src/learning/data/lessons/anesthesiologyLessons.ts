// src/learning/data/lessons/anesthesiologyLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const ANESTHESIOLOGY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_anes_premed_asa',
    moduleId: 'mod_anesthesiology',
    title: 'Avaliação de Risco ASA & MPA Multimodal',
    subtitle: 'Estratificação pré-operatória, neuroleptoanalgesia e farmacologia da indução anestésica.',
    estimatedMinutes: 20,
    objectives: [
      'Classificar pacientes de acordo com a escala de risco cirúrgico ASA (I a V e Emergência)',
      'Formular protocolos de Medicação Pré-Anestésica (MPA) combinando sedativos e opioides',
      'Compreender o efeito poupador de CAM (Concentração Alveolar Mínima) pela analgesia multimodal'
    ],
    concepts: ['concept_anesthesia_premed_asa'],
    sections: [
      {
        id: 'anes_premed_sec_1',
        type: 'theory',
        title: 'Classificação de Risco Físico da American Society of Anesthesiologists (ASA)',
        contentMarkdown: `Antes de qualquer administração medicamentosa, o médico veterinário deve estratificar a vulnerabilidade biológica do paciente:

| Grau ASA | Definição Clínica | Exemplo Veterinário |
|---|---|---|
| **ASA I** | Paciente hígido sem patologia sistêmica | Cão/Gato jovem para orquiectomia eletiva |
| **ASA II** | Doença sistêmica leve a moderada, compensada | Animal obeso, hérnia umbilical simples, dermatite |
| **ASA III** | Doença sistêmica grave, mas não incapacitante | Insuficiência cardíaca compensada, anemia crônica |
| **ASA IV** | Doença sistêmica grave com risco iminente de vida | Piometra em choque endotóxico, uremia obstrutiva |
| **ASA V** | Moribundo; expectativa de óbito em 24h sem cirurgia | Torção gástrica em choque cardiogênico refratário |
| **Sufixo E** | Adicionado para procedimentos de Emergência | Cólica equina estrangulativa (ASA IV-E) |

### Neuroleptoanalgesia Multimodal:
Combina um tranquilizante/sedativo (Acepromazina, Dexmedetomidina ou Midazolam) com um analgésico opioide (Morfina, Metadona, Tramadol ou Butorfanol).
- **Vantagem Clínica:** O sinergismo farmacológico reduz a ansiedade de contenção e diminui em até 40-60% a necessidade de agentes indutores (Propofol) e a CAM de anestésicos inalatórios (Isoflurano), estabilizando a pressão arterial.
- **Contraindicações Vitais:**
  - *Agonistas Alfa-2 Adrenérgicos (Xilazina, Dexmedetomidina):* Provocam vasoconstrição periférica intensa, hipertensão inicial seguida de hipotensão e **bradicardia reflexa severa com redução de 50% no débito cardíaco**. **PROIBIDOS em pacientes cardiopatas graves!**
  - *Fenotiazínicos (Acepromazina):* Promovem bloqueio alfa-1 com vasodilatação prolongada. **PROIBIDOS em choque hipovolêmico e desidratação.**`,
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
    id: 'lesson_anes_inhalation',
    moduleId: 'mod_anesthesiology',
    title: 'Circuitos Anestésicos & Dinâmica da Cal Sodada',
    subtitle: 'Sistemas com e sem reinalação, fluxo de gases frescos e reações de neutralização de CO2.',
    estimatedMinutes: 25,
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
        contentMarkdown: `# Aula Universitária: Aparelhos de Anestesia Inalatória, Circuitos & Absorção de CO₂

> 📖 Referência Canônica: Tranquilli, W. J.; Thurmon, J. C.; Grimm, K. A. *Lumb & Jones' Veterinary Anesthesia and Analgesia*, 5th ed. Wiley-Blackwell, Cap. 18: Inhalation Anesthesia Systems. Fantoni, D. T.; Cortopassi, S. R. G. *Anestesia em Cães e Gatos*, 2ª ed. Roca.

O aparelho de anestesia inalatória entrega oxigênio e anestésico volátil (Isoflurano/Sevoflurano) ao paciente enquanto remove o gás carbônico exalado:

### 1. Sistema Sem Reinalação (Não-Reinalatório / Valveless - Ex: Baraka, T de Ayre, Bain)
- Indicado para pacientes com menos de 7 a 10 kg (aves, filhotes, gatos e pequenos cães).
- **Sem Cal Sodada:** O CO2 exalado é empurrado para a atmosfera pelo próprio fluxo contínuo de gás fresco (FGF alto: 200 a 300 mL/kg/min).
- Baixíssima resistência mecânica à respiração, poupando a musculatura diafragmática de animais pequenos.

### 2. Sistema Com Reinalação (Reinalatório / Valvular em Círculo)
- Indicado para pacientes com mais de 7 a 10 kg (cães médios e grandes, equinos, ruminantes).
- O gás exalado passa por válvulas unidirecionais inspiratória e expiratória e é forçado através do **canister de Cal Sodada**.
- **A Química da Cal Sodada:** Composta por Hidróxido de Cálcio [Ca(OH)2] e pequenas quantidades de NaOH.
  $$\text{CO}_2 + \text{H}_2\text{O} \longrightarrow \text{H}_2\text{CO}_3$$
  $$\text{H}_2\text{CO}_3 + 2\text{NaOH} \longrightarrow \text{Na}_2\text{CO}_3 + 2\text{H}_2\text{O} + \text{Calor}$$
  $$\text{Na}_2\text{CO}_3 + \text{Ca(OH)}_2 \longrightarrow \text{CaCO}_3 \downarrow + 2\text{NaOH}$$
- **Indicador de Exaustão (Violeta de Etila):** Quando o pH da cal sodada cai abaixo de 10,3 pelo consumo dos álcalis, os grânulos mudam de **branco para violeta/azulado**.
- **Sinal Patognomônico no Monitor:** Aumento do $InCO_2$ ($CO_2$ inspiratório) acima de 3 a 5 mmHg na linha de base da capnografia. O animal está reinalando o próprio gás carbônico!`,
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
        title: 'Conduta de Emergência: Cal Sodada Saturada Transoperatória',
        exerciseId: 'ex_anes_02'
      }
    ]
  },
  {
    id: 'lesson_anes_capnography',
    moduleId: 'mod_anesthesiology',
    title: 'Capnografia Avançada & Curvas de EtCO2',
    subtitle: 'Interpretação gráfica das fases do capnograma e diagnóstico precoce de paradas respiratórias.',
    estimatedMinutes: 30,
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
        contentMarkdown: `A capnografia mensura continuamente a pressão parcial de $CO_2$ nos gases respiratórios ao final da expiração ($EtCO_2$).

### A Onda Normal (Padrão Retangular):
1. **Fase I (Linha de Base Inspiratória):** Representa o início da expiração com gás do espaço morto anatômico (traqueia e brônquios), desprovido de $CO_2$. O valor deve ser rigorosamente zero ($InCO_2 = 0$ mmHg).
2. **Fase II (Subida Expiratória Rápida):** Mistura rápida do gás do espaço morto com o gás alveolar rico em $CO_2$.
3. **Fase III (Platô Alveolar):** Exalação contínua do gás alveolar puro. Apresenta inclinação suave ascendente. O ponto mais alto ao final desta fase é o **EtCO2** (Valores normais: **35 a 45 mmHg** em mamíferos; **25 a 35 mmHg** em aves).
4. **Fase IV (Descida Inspiratória Abrupta):** Início da inspiração de gás fresco, retornando a linha de base para zero instantaneamente.

### Alterações Patológicas Patognomônicas:
- **Barbatana de Tubarão (Shark-Fin):** Perda do platô horizontal e subida lenta e arredondada na Fase II e III. Indica **aumento da resistência de vias aéreas** (broncoespasmo, asma felina ou cânula traqueal dobrada/obstruída por muco).
- **Linha de Base Elevada ($InCO_2 > 5$ mmHg):** A curva não toca o zero. Indica **reinalação de $CO_2$** (cal sodada exausta ou falha na válvula unidirecional).
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
        type: 'lab',
        title: 'Centro Cirúrgico: Estação de Capnografia & Anestesia',
        labType: 'surgical_center_bench',
        labConfig: {
          mode: 'capnography_bench',
          defaultScenario: 'canine_normal'
        }
      },
      {
        id: 'anes_capno_sec_3',
        type: 'exercise',
        title: 'Diagnóstico Gráfico: Reconhecimento da Barbatana de Tubarão',
        exerciseId: 'ex_anes_03'
      }
    ]
  }
];

export const ANESTHESIOLOGY_EXERCISES: Record<string, LearningExercise> = {
  ex_anes_01: {
    id: 'ex_anes_01',
    conceptId: 'concept_anesthesia_premed_asa',
    type: 'multiple_choice',
    prompt: 'Um cão Maltês de 12 anos e 4,5 kg com histórico de sopro sistólico mitral grau V/VI e tosse noturna (ASA IV) necessita ser anestesiado para limpeza de tártaro e extração dentária de emergência. Qual dos seguintes agentes é RIGOROSAMENTE CONTRAINDICADO na medicação pré-anestésica deste paciente e por qual mecanismo hemodinâmico?',
    options: [
      {
        id: 'opt_anes_1_a',
        text: 'Dexmedetomidina (Agonista Alfa-2 adrenérgico), pois causa vasoconstrição periférica severa com aumento drástico da pós-carga ventricular esquerda e bradicardia reflexa, podendo desencadear edema agudo de pulmão.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Em cães com endocardiose de mitral, o aumento súbito da resistência vascular sistêmica gerado pelo agonista alfa-2 impede o esvaziamento ventricular pela aorta e aumenta brutalmente a regurgitação mitral para o átrio esquerdo, colapsando o débito cardíaco.'
      },
      {
        id: 'opt_anes_1_b',
        text: 'Metadona (Opioide puro mu), pois os opioides são proibidos na anestesia de cardiopatas.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A metadona e os opioides em geral são a base mais segura para anestesiar cardiopatas devido à excelente estabilidade hemodinâmica e analgesia sem inotropismo negativo marcante.'
      },
      {
        id: 'opt_anes_1_c',
        text: 'Midazolam (Benzodiazepínico), pois causa taquicardia ventricular grave em cães idosos.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O midazolam é o sedativo de eleição para cães cardiopatas ou idosos por manter o débito cardíaco praticamente inalterado.'
      },
      {
        id: 'opt_anes_1_d',
        text: 'Atropina, pois é indicada apenas para cavalos atletas.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A atropina é um anticolinérgico amplamente utilizado em cães para reversão de bradicardias vagais severas.'
      }
    ],
    causalChain: {
      cause: 'Uso de agonista alfa-2 (xilazina/dexmedetomidina) em paciente com insuficiência mitral crônica',
      mechanism: 'Vasoconstrição periférica potente eleva a pós-carga e a pressão intraventricular esquerda',
      effect: 'Aumento maciço do volume de sangue regurgitante para o átrio esquerdo e veias pulmonares',
      clinicalMeaning: 'Edema agudo de pulmão hiperagudo, hipoxemia fulminante e óbito peroperatório'
    },
    pedagogicalExplanation: 'Pacientes com doença valvar mitral requerem vasodilatação equilibrada ou manutenção da pós-carga baixa, sendo os agonistas alfa-2 proscritos.'
  },
  ex_anes_02: {
    id: 'ex_anes_02',
    conceptId: 'concept_anesthesia_inhalation_circuits',
    type: 'multiple_choice',
    prompt: 'Durante uma osteossíntese femoral em um cavalo de 450 kg conectado a um sistema anestésico valvular em círculo, o anestesista nota que a cal sodada no canister adquiriu coloração violeta intensa e o monitor acusa InCO2 de 8 mmHg (linha de base não toca o zero). Qual a conduta imediata para proteger o animal da reinalação de gás carbônico enquanto se prepara a substituição da cal sodada?',
    options: [
      {
        id: 'opt_anes_2_a',
        text: 'Aumentar temporariamente o Fluxo de Gases Frescos (FGF de oxigênio) para níveis altos (sistema semi-aberto de lavagem), permitindo que o excesso de CO2 seja eliminado pela válvula pop-off.',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! Ao aumentar substancialmente o fluxo de oxigênio fresco, o anestesista transforma temporariamente o circuito em um sistema de lavagem rápida, expulsando o CO2 exalado pela válvula de alívio (pop-off) e impedindo sua reinalação enquanto a equipe providencia a troca rápida do canister.'
      },
      {
        id: 'opt_anes_2_b',
        text: 'Fechar totalmente a válvula pop-off e desligar o fornecimento de oxigênio para economizar gás.',
        isCorrect: false,
        pedagogicalFeedback: 'Catastrófico! Fechar a válvula pop-off gerará barotrauma explosivo nos alvéolos pulmonares por hiperpressurização do circuito, além de asfixia imediata.'
      },
      {
        id: 'opt_anes_2_c',
        text: 'Aumentar a porcentagem de Isoflurano no vaporizador para 5% para deprimir a respiração e produzir menos CO2.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Aumentar o isoflurano aprofundará o plano anestésico para parada cardíaca por vasodilatação periférica e hipotensão severa.'
      },
      {
        id: 'opt_anes_2_d',
        text: 'Desconectar o cavalo e deixá-lo respirar ar ambiente deitado na mesa cirúrgica sem tubo orotraqueal.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O animal acordará no meio da cirurgia ou entrará em hipóxia e atelectasia pulmonar grave devido ao peso corporal comprimindo os pulmões em decúbito.'
      }
    ],
    causalChain: {
      cause: 'Elevação do InCO2 > 5 mmHg por saturação dos grânulos de cal sodada no canister',
      mechanism: 'Aumento imediato do fluxo de gás fresco (FGF) dilui o circuito e lava o gás exalado',
      effect: 'Expulsão do CO2 pela pop-off sem depender da absorção química esgotada',
      clinicalMeaning: 'Prevenção de acidose respiratória transoperatória aguda até a troca segura do absorvedor'
    },
    pedagogicalExplanation: 'O aumento do fluxo de oxigênio fresco é a manobra de resgate clássica para reinalação de CO2 em circuitos fechados.'
  },
  ex_anes_03: {
    id: 'ex_anes_03',
    conceptId: 'concept_capnography_etco2_interpretation',
    type: 'multiple_choice',
    prompt: 'Durante a monitorização anestésica de uma gata de 3 anos, o traçado retangular da capnografia perdeu subitamente o platô horizontal da Fase III, apresentando uma subida lenta e arredondada em formato característico de "barbatana de tubarão" (shark-fin). Qual o diagnóstico fisiopatológico e a intervenção recomendada?',
    options: [
      {
        id: 'opt_anes_3_a',
        text: 'Aumento da resistência expiratória das vias aéreas (broncoespasmo ou secreção/dobra na sonda endotraqueal); verificar desobstrução da sonda e considerar broncodilatador inalatório (salbutamol) ou corticoide se houver hiper-reatividade brônquica.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A morfologia em barbatana de tubarão é patognomônica de obstrução expiratória. Como o ar sai com extrema dificuldade dos bronquíolos constritos ou da cânula parcialmente ocluída, o esvaziamento alveolar é heterogêneo e lento, impedindo a formação do platô reto da Fase III.'
      },
      {
        id: 'opt_anes_3_b',
        text: 'Parada cardíaca súbita; iniciar imediatamente massagem cardíaca externa.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Na parada cardíaca, o EtCO2 cai abruptamente ou exponencialmente para valores próximos de zero devido à cessação do transporte de sangue aos pulmões, e não em formato de barbatana de tubarão.'
      },
      {
        id: 'opt_anes_3_c',
        text: 'Esgotamento da cal sodada no aparelho de anestesia.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A cal sodada esgotada eleva a linha de base (InCO2 > 0 mmHg), mas preserva o platô retangular da Fase III.'
      },
      {
        id: 'opt_anes_3_d',
        text: 'Desconexão do tubo endotraqueal com o circuito anestésico.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Se o tubo desconectar, o sensor capnográfico não capta mais fluxo e a linha cai instantaneamente a zero absoluto, sem desenhar curvas.'
      }
    ],
    causalChain: {
      cause: 'Constrição da musculatura lisa bronquiolar ou acúmulo de muco na cânula traqueal',
      mechanism: 'Aumento da constante de tempo expiratória com liberação heterogênea do ar alveolar',
      effect: 'Eliminação da inclinação plana da Fase III com traçado em rampa ("barbatana de tubarão")',
      clinicalMeaning: 'Aprisionamento aéreo (auto-PEEP), hipoventilação e retenção progressiva de CO2'
    },
    pedagogicalExplanation: 'A morfologia de barbatana de tubarão no capnograma alerta imediatamente o anestesista sobre broncoconstrição mecânica ou reacional.'
  }
};
