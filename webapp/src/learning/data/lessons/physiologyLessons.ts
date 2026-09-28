// src/learning/data/lessons/physiologyLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const PHYSIOLOGY_EXERCISES: Record<string, LearningExercise> = {
  ex_physio_01: {
    id: 'ex_physio_01',
    conceptId: 'concept_vitals_triad',
    type: 'multiple_choice',
    prompt: 'Durante a monitorização anestésica de uma Arara-canindé (Ara ararauna) de 1,2 kg mantida sob Isoflurano, o monitor indica: FC = 135 bpm, SpO2 = 83%, FR = 0 mpm e Temp = 35,2 °C. Como esse quadro fisiológico deve ser classificado?',
    options: [
      {
        id: 'opt_1',
        text: 'Plano anestésico cirúrgico adequado para psitacídeos de grande porte.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Aves possuem taxa metabólica altíssima; a FC normal de uma arara varia de 250 a 400 bpm. Uma FC de 135 bpm associada à apneia é uma bradicardia profunda crítica com risco iminente de parada cardiorrespiratória.',
        conceptualErrorCategory: 'species_heart_rate_underestimation'
      },
      {
        id: 'opt_2',
        text: 'Depressão cardiorrespiratória profunda com apneia e bradicardia crítica por sobredose relativa de anestésico inalatório.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Em aves, a frequência cardíaca abaixo de 200 bpm acompanhada de SpO2 < 90% e ausência de movimentos respiratórios indica plano anestésico perigosamente profundo por depressão bulbar.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_3',
        text: 'Reflexo de mergulho fisiológico idêntico ao observado em répteis aquáticos.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Araras são aves continentais arbóreas e não realizam adaptações hemodinâmicas de mergulho como quelônios ou crocodilianos.',
        conceptualErrorCategory: 'physiological_extrapolation_error'
      },
      {
        id: 'opt_4',
        text: 'Bradicardia vagal leve decorrente apenas da temperatura ambiente.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Embora a hipotermia (35,2 °C) deprima a função sinusal, a apneia completa com hipóxia (SpO2 83%) aponta para intoxicação por halogenado que requer intervenção imediata no vaporizador.',
        conceptualErrorCategory: 'isolated_temperature_focus'
      }
    ],
    pedagogicalExplanation: 'Aves possuem corações proporcionalmente maiores e taxas metabólicas elevadíssimas. Frequências cardíacas inferiores a 200 bpm em psitacídeos indicam descompensação hemodinâmica grave.',
    causalChain: {
      cause: 'Vaporizador de Isoflurano mantido em concentração excessiva (> 3,0%) sem ventilação assistida',
      mechanism: 'Depressão profunda dos centros respiratório e vasomotor bulbares com redução do tônus simpático',
      effect: 'Apneia aguda, hipoxemia (SpO2 83%) e bradicardia severa por perda de contratilidade miocárdica',
      clinicalMeaning: 'Parada cardiorrespiratória e óbito em menos de 3 minutos caso o anestésico não seja suspenso e o paciente ventilado'
    }
  },

  ex_physio_02: {
    id: 'ex_physio_02',
    conceptId: 'concept_capture_myopathy',
    type: 'multiple_choice',
    prompt: 'Um Lobo-guará (Chrysocyon brachyurus) de 25 kg foi contido fisicamente por 45 minutos após ser resgatado de uma cerca. No hospital, apresenta hipertermia (41,8 °C), taquipneia extrema, rigidez muscular e urina com coloração marrom-escura avermelhada. Qual é a etiologia dessa coloração urinária?',
    options: [
      {
        id: 'opt_1',
        text: 'Hematúria macroscópica decorrente de ruptura traumática da bexiga durante a fuga.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A ruptura vesical causa uroperitônio e anúria, e não urina marrom por pigmentos musculares com hipertermia sustentada.',
        conceptualErrorCategory: 'trauma_misattribution'
      },
      {
        id: 'opt_2',
        text: 'Mioglobinúria decorrente de rabdomiólise aguda por esforço físico e hipertermia na Miopatia de Captura.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! O estresse agudo e a glicólise anaeróbica extrema provocam necrose de fibras musculares esqueléticas. A mioglobina liberada na circulação é filtrada pelos glomérulos e se precipita nos túbulos renais sob pH ácido, conferindo cor marrom-escura e risco de necrose tubular aguda.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_3',
        text: 'Bilirrubinúria causada por hepatite tóxica aguda induzida por picada de serpente.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A anamnese de contenção física prolongada e rigidez com hipertermia aponta diretamente para rabdomiólise e mioglobinúria.',
        conceptualErrorCategory: 'liver_pathology_confusion'
      },
      {
        id: 'opt_4',
        text: 'Hemoglobinúria fisiológica esperada após corrida de longa distância em canídeos.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A degradação muscular com liberação de mioglobina nunca é um evento fisiológico; é uma emergência clínica com risco de falência renal anúrica.',
        conceptualErrorCategory: 'underestimating_severity'
      }
    ],
    pedagogicalExplanation: 'A miopatia de captura decorre da ativação simpatoadrenal descontrolada. Ocorre depleção de ATP, acúmulo massivo de lactato e lise celular de miócitos com extravasamento de mioglobina e potássio.',
    causalChain: {
      cause: 'Contenção física prolongada e estresse agudo descontrolado em animal selvagem',
      mechanism: 'Metabolismo anaeróbico massivo, acidose láctica severa e necrose de fibras musculares (rabdomiólise)',
      effect: 'Liberação em massa de mioglobina e potássio no plasma com sobrecarga de filtração glomerular',
      clinicalMeaning: 'Necrose tubular aguda anúrica, hipercalemia fatal e choque endotóxico hipovolêmico'
    }
  },

  ex_physio_03: {
    id: 'ex_physio_03',
    conceptId: 'concept_cpr_emergency_drugs',
    type: 'dose_calculation',
    prompt: 'Um filhote de Macaco-prego (Sapajus libidinosus) pesando 800 g (0,80 kg) entra em bradicardia sinusal severa (FC = 45 bpm, normal > 180 bpm) sob anestesia. O protocolo determina a administração imediata de Atropina 1% (10 mg/mL) na dose de 0,04 mg/kg. Para segurança, a equipe realizou uma diluição prévia 1:10 em solução fisiológica, obtendo uma concentração de 1,0 mg/mL. Qual o volume exato (em mL) da solução diluída que você deve administrar?',
    contextData: {
      patientSpecies: 'Macaco-prego (Sapajus libidinosus)',
      patientWeightKg: 0.80,
      drugName: 'Atropina diluída (1 mg/mL)',
      drugConcentrationMgMl: 1.0,
      targetDoseMgKg: 0.04,
      unit: 'mL'
    },
    correctNumericValue: 0.032,
    numericTolerance: 0.005,
    pedagogicalExplanation: 'Massa necessária: 0,80 kg × 0,04 mg/kg = 0,032 mg de Atropina. Na concentração diluída de 1,0 mg/mL: V = 0,032 mg ÷ 1,0 mg/mL = 0,032 mL (32 microlitros, mensuráveis com seringa de insulina de 0,3 ou 0,5 mL). Se usada a solução original de 10 mg/mL, o volume seria 0,0032 mL, impossível de dosar sem diluição!',
    causalChain: {
      cause: 'Administração de 0,032 mL de Atropina diluída (1 mg/mL) em seringa de precisão',
      mechanism: 'Bloqueio competitivo dos receptores muscarínicos M2 atriais pelo sulfato de atropina',
      effect: 'Supressão da estimulação vagal com aceleração do automatismo do nó sinoatrial e elevação da FC',
      clinicalMeaning: 'Restauração do débito cardíaco e perfusão tecidual antes do colapso circulatório'
    }
  }
};

export const PHYSIOLOGY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_vitals_triad',
    moduleId: 'mod_physiology',
    title: 'Tríade Vital & Monitorização Anestésica Comparada',
    subtitle: 'Frequência cardíaca, respiração, oximetria de pulso e temperatura: as regras fisiológicas entre aves, répteis e mamíferos.',
    estimatedMinutes: 12,
    objectives: [
      'Identificar as faixas fisiológicas normais de FC, FR, SpO2 e Temperatura por classe taxonômica',
      'Reconhecer que frequências cardíacas abaixo de 200 bpm em aves configuram emergência nível vermelho',
      'Compreender a tríade de depressão induzida por agentes anestésicos inalatórios (isoflurano)'
    ],
    concepts: ['concept_vitals_triad', 'concept_anesthetic_apnea'],
    sections: [
      {
        id: 'sec_vitals_01',
        type: 'theory',
        title: 'As Leis Alométricas da Tríade Vital',
        contentMarkdown: `### Por que o tamanho do animal muda tudo?

Em medicina veterinária de animais silvestres, **não existe uma frequência cardíaca padrão universal**. A taxa metabólica basal de uma espécie segue a **Lei Alométrica de Kleiber**: quanto menor o corpo, maior a taxa de consumo de oxigênio por grama de tecido.

| Classe / Espécie | Peso Típico | FC Normal (bpm) | FR Normal (mpm) | SpO2 Segura | Temp. Alvo |
|---|---|---|---|---|---|
| **Aves (Arara-canindé)** | 1,0 – 1,5 kg | **250 – 400** | **20 – 40** | > 92% | **39,5 – 41,5 °C** |
| **Mamíferos (Lobo-guará)** | 20 – 30 kg | **70 – 120** | **14 – 24** | > 94% | **37,5 – 39,0 °C** |
| **Répteis (Jabuti-piranga)** | 2,0 – 6,0 kg | **15 – 40** | **4 – 12** | > 85% | **28,0 – 32,0 °C (POM)** |

> [!IMPORTANT]
> **O Erro Frequente da Bradicardia em Aves:**
> Uma frequência cardíaca de **100 bpm** em um cão ou humano é normal. Na Arara-canindé, **100 bpm representa bradicardia extrema de emergência nível vermelho**! Se o monitor acusar menos de 200 bpm em um psitacídeo, o paciente está a instantes da parada cardiorrespiratória.

---

### O Efeito Depressor do Isoflurano

O anestésico inalatório **Isoflurano** promove relaxamento muscular e hipnose dose-dependente, mas também causa:
1. **Depressão do centro respiratório bulbar:** perda precoce dos movimentos respiratórios espontâneos (apneia);
2. **Vasodilatação periférica:** queda da Pressão Arterial Média (PAM);
3. **Inibição do reflexo barorreceptor:** o coração não consegue compensar a vasodilatação aumentando o débito.`,
        causalChain: {
          cause: 'Sobredose relativa de Isoflurano (> 3%) em ave de pequeno porte',
          mechanism: 'Inibição seletiva de canais iônicos bulbares e supressão do drive respiratório nos sacos aéreos',
          effect: 'Apneia aguda, hipoxemia (SpO2 83%) e bradicardia severa por perda de contratilidade miocárdica',
          clinicalMeaning: 'Acidose respiratória hiperaguda, bradicardia miocárdica e colapso circulatório'
        }
      },
      {
        id: 'sec_vitals_02',
        type: 'exercise',
        title: 'Desafio Prático: Decodificando o Alarme Vital',
        exerciseId: 'ex_physio_01'
      },
      {
        id: 'sec_vitals_03',
        type: 'lab',
        title: 'Laboratório Interativo: Monitor Multiparamétrico em Tempo Real',
        description: 'Experimente operar o monitor cirúrgico: monitore as curvas de ECG e oximetria de pulso da Arara-canindé e intervenha ajustando o vaporizador e a ventilação.',
        labType: 'physiology_vital_loop',
        labConfig: {
          patientSpecies: 'Arara-canindé (Ara ararauna)',
          patientWeightKg: 1.2,
          baselineHR: 310,
          baselineSpO2: 95,
          baselineRR: 28,
          baselineTemp: 40.2,
          initialIsoflurane: 2.5
        }
      }
    ]
  },

  {
    id: 'lesson_capture_myopathy',
    moduleId: 'mod_physiology',
    title: 'Miopatia de Captura & Rabdomiólise',
    subtitle: 'A tempestade metabólica em animais silvestres: quando a contenção física desencadeia acidose láctica fulminante.',
    estimatedMinutes: 14,
    objectives: [
      'Compreender a fisiopatologia da lesão muscular aguda induzida por estresse de contenção',
      'Identificar os sinais clínicos clássicos da miopatia: hipertermia, paralisia e mioglobinúria',
      'Correlacionar a precipitação de mioglobina tubular com a necrose tubular renal anúrica'
    ],
    concepts: ['concept_capture_myopathy', 'concept_vitals_triad'],
    sections: [
      {
        id: 'sec_myopathy_01',
        type: 'theory',
        title: 'A Cascata Fisiopatológica do Estresse Agudo',
        contentMarkdown: `### O que é a Miopatia de Captura?

A **Miopatia de Captura** é uma síndrome não infecciosa hiperaguda devastadora que acomete mamíferos silvestres (especialmente canídeos como o Lobo-guará, ungulados como cervos e antas) e aves de pernas longas (emas, guarás).

Ela é desencadeada por:
- Perseguição prolongada;
- Contenção física forçada sem sedação química precoce;
- Transporte em caixas hiperaquecidas ou mal ventiladas;
- Luta exaustiva em redes ou cambões.

---

### A Cadeia Causal da Lesão Muscular

1. **Estresse Extremo & Medo** $\\rightarrow$ Descarga Maciça de Catecolaminas (Adrenalina / Cortisol);
2. **Vasoconstrição Periférica Severa & Isquemia Muscular** $\\rightarrow$ Glicólise Anaeróbica Exaustiva;
3. **Acúmulo de Ácido Láctico** $\\rightarrow$ Acidose Metabólica Grave;
4. **Hipertermia Maligna (> 41 °C) & Lise de Miócitos (Rabdomiólise)** $\\rightarrow$ Extravasamento Maciço de Mioglobina & Potássio;
5. **Necrose Tubular Renal Aguda** $\\rightarrow$ Arritmias Ventriculares Fatais e Colapso Anúrico.

### Tríade Diagnóstica Clássica:
1. **Hipertermia Extrema:** Temperatura corporal ultrapassa 41 °C devido à termogênese contrátil descontrolada;
2. **Rigidez e Paralisia Muscular:** Perda de relaxamento celular por esgotamento de ATP;
3. **Mioglobinúria:** Urina marrom-escura ("café torrado"), que bloqueia e oxida os túbulos contorcidos renais.

> [!WARNING]
> **Prevenção é o Único Tratamento Eficaz:**
> Quando a mioglobinúria e a hipertermia se instalam, a taxa de mortalidade ultrapassa **80%**. A melhor prática médica é abortar contenções físicas com mais de **10 a 15 minutos** de luta e instituir sedação farmacológica precoce com agonistas alfa-2 e dissociativos.`,
        causalChain: {
          cause: 'Contenção física estressante prolongada com esforço muscular isquêmico',
          mechanism: 'Metabolismo anaeróbico exaustivo, acidose láctica sistêmica e ruptura de sarcolema',
          effect: 'Liberação maciça de mioglobina circulante e hipercalemia extracelular',
          clinicalMeaning: 'Insuficiência renal aguda por tamponamento intratubular de mioglobina e PCR'
        }
      },
      {
        id: 'sec_myopathy_02',
        type: 'exercise',
        title: 'Desafio Prático: Investigação de Rabdomiólise',
        exerciseId: 'ex_physio_02'
      }
    ]
  },

  {
    id: 'lesson_anesthetic_emergencies',
    moduleId: 'mod_physiology',
    title: 'Parada Cardiorrespiratória & Protocolos de RCP',
    subtitle: 'Algoritmo de reanimação cardiopulmonar veterinária (RECOVER) aplicado à fauna silvestre: manobras e drogas de resgate.',
    estimatedMinutes: 15,
    objectives: [
      'Executar a sequência ABC de ressuscitação cardiopulmonar veterinária em espécies selvagens',
      'Compreender as particularidades da ventilação com pressão positiva intermitente (IPPV) em aves',
      'Calcular e diluir com segurança drogas de emergência como Atropina, Epinefrina 1:10.000 e Doxapram'
    ],
    concepts: ['concept_cpr_emergency_drugs', 'concept_anesthetic_apnea', 'concept_volume_calc'],
    sections: [
      {
        id: 'sec_cpr_01',
        type: 'theory',
        title: 'Algoritmo de Emergência: O Protocolo ABC Silvestre',
        contentMarkdown: `### Passo a Passo da Reanimação em Animais Silvestres

Quando o paciente entra em colapso anestésico (SpO2 despenca, FC cai drasticamente ou atinge linha reta), a regra de ouro é **agir em segundos**:

#### 1. "A" — Aparelho & Vias Aéreas (Airway)
- **CORTE IMEDIATAMENTE O ISOFLURANO:** Zere o botão do vaporizador anestésico!
- Abra o fluxo de **Oxigênio puro a 100%**.
- Realize o *flush* de oxigênio do sistema respiratório para expulsar qualquer gás anestésico residual do circuito.

#### 2. "B" — Ventilação Assistida (Breathing)
- Em aves e pequenos animais, a apneia precede a parada cardíaca em vários minutos.
- Inicie ventilação manual com balão reservatório (IPPV): **1 ventilação a cada 3 a 5 segundos**.
- **Atenção à pressão de pico:** Em aves com sacos aéreos frágeis, nunca ultrapasse **12 a 15 cmH2O** de pressão para não romper sacos aéreos torácicos.

#### 3. "C" — Circulação & Farmácia de Reanimação (Circulation & Drugs)
Se a bradicardia não responder à ventilação ou se houver assistolia:

| Droga | Indicação | Dose Silvestre | Cuidados Críticos de Diluição |
|---|---|---|---|
| **Sulfato de Atropina** | Bradicardia sinusal severa por tônus vagal | 0,02 a 0,04 mg/kg IV / IM / IO | Em animais < 2 kg, **sempre diluir 1:10 em salina** para permitir medição em seringa de 1 mL |
| **Epinefrina (Adrenalina)** | PCR, assistolia, ritmo idioventricular | 0,01 a 0,02 mg/kg IV / IO | O frasco padrão 1:1000 (1 mg/mL) deve ser **diluído para 1:10.000 (0,1 mg/mL)** em pequenos animais |
| **Doxapram (Dopram)** | Estimulação do centro respiratório bulbar na apneia | 2 a 5 mg/kg IV / sublingual | Estimula quimiorreceptores carotídeos para reativar o drive ventilatório |
| **Atipamezol** | Reversão específica de agonistas alfa-2 (Dexmedetomidina) | Dose equimolar ao volume da sedação | Restaura a frequência cardíaca instantaneamente |`,
        causalChain: {
          cause: 'Corte imediato do vaporizador + ventilação manual com O2 puro a 100%',
          mechanism: 'Eliminação alveolar ativa das moléculas de halogenado e oxigenação forçada dos tecidos miocárdicos',
          effect: 'Restauração da oxigenação cerebral e recuperação espontânea do automatismo sinusal',
          clinicalMeaning: 'Reversão bem-sucedida do colapso anestésico sem lesão hipóxica neurológica residual'
        }
      },
      {
        id: 'sec_cpr_02',
        type: 'exercise',
        title: 'Desafio Prático: Titulação de Droga de Emergência',
        exerciseId: 'ex_physio_03'
      },
      {
        id: 'sec_cpr_03',
        type: 'lab',
        title: 'Simulador de Crise Anestésica: Manejo de Bradicardia & Apneia',
        description: 'Enfrente um cenário em tempo real: paciente entra em apneia sob isoflurano. Controle o vaporizador, realize ventilação assistida IPPV e consulte a Dra. Millena para titular a dose de resgate.',
        labType: 'physiology_vital_loop',
        labConfig: {
          patientSpecies: 'Jabuti-piranga (Chelonoidis carbonarius)',
          patientWeightKg: 3.5,
          baselineHR: 26,
          baselineSpO2: 89,
          baselineRR: 8,
          baselineTemp: 29.5,
          initialIsoflurane: 3.0,
          scenarioCrisis: 'severe_bradycardia_apnea'
        }
      }
    ]
  }
];
