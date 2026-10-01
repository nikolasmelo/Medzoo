// src/learning/data/lessons/physiologyLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const PHYSIOLOGY_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_physio_01',
    conceptId: 'concept_vitals_triad',
    type: 'multiple_choice',
    prompt: 'Durante a monitorização anestésica de uma Arara-canindé (Ara ararauna) de 1,2 kg mantida sob Isoflurano, o monitor indica: FC = 135 bpm, SpO2 = 83%, FR = 0 mpm e Temp = 35,2 °C. Como esse quadro fisiológico deve ser classificado?',
    options: [
      {
        id: 'opt_1',
        text: 'Depressão cardiorrespiratória profunda com apneia e bradicardia crítica por sobredose relativa de anestésico inalatório.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Em aves, a taxa metabólica basal alométrica é elevadíssima (FC normal de 250 a 400 bpm). Uma FC abaixo de 200 bpm acompanhada de SpO2 < 90% e ausência de movimentos respiratórios indica plano anestésico perigosamente profundo por depressão bulbar, exigindo suspensão imediata do vaporizador e ventilação manual com O2 puro.'
      },
      {
        id: 'opt_2',
        text: 'Plano anestésico cirúrgico adequado para psitacídeos de grande porte.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Aves possuem taxa metabólica altíssima; a FC normal de uma arara varia de 250 a 400 bpm. Uma FC de 135 bpm associada à apneia é uma bradicardia profunda crítica com risco iminente de parada cardiorrespiratória.'
      },
      {
        id: 'opt_3',
        text: 'Reflexo de mergulho fisiológico idêntico ao observado em répteis aquáticos.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Araras são aves continentais arbóreas e não realizam adaptações hemodinâmicas de mergulho como quelônios ou crocodilianos.'
      },
      {
        id: 'opt_4',
        text: 'Bradicardia vagal leve decorrente apenas da temperatura ambiente.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Embora a hipotermia deprima a condução do nó sinusal, a apneia completa com hipóxia severa (SpO2 83%) indica intoxicação aguda por halogenado que requer intervenção imediata no vaporizador.'
      }
    ]
  },

  {
    id: 'ex_physio_02',
    conceptId: 'concept_capture_myopathy',
    type: 'multiple_choice',
    prompt: 'Um Lobo-guará (Chrysocyon brachyurus) de 25 kg foi contido fisicamente por 45 minutos após ser resgatado de uma cerca. No hospital, apresenta hipertermia (41,8 °C), taquipneia extrema, rigidez muscular e urina com coloração marrom-escura avermelhada ("café torrado"). Qual é a fisiopatologia dessa alteração urinária e seu desfecho sistêmico?',
    options: [
      {
        id: 'opt_1',
        text: 'Mioglobinúria decorrente de rabdomiólise aguda por glicólise anaeróbica exaustiva e hipertermia na Miopatia de Captura, com precipitação intratubular de mioglobina e risco iminente de necrose tubular aguda anúrica.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! O estresse agudo sustentado, a vasoconstrição simpática isquêmica e a glicólise anaeróbica esgotam o ATP e rompem o sarcolema dos miócitos esqueléticos (rabdomiólise). A mioglobina monomérica liberada na circulação é filtrada livremente pelos glomérulos e se precipita nos túbulos contorcidos sob o pH urinário ácido da acidose lática, oxidando o epitélio tubular e causando insuficiência renal aguda por tamponamento mecânico.'
      },
      {
        id: 'opt_2',
        text: 'Hematúria macroscópica decorrente de ruptura traumática da bexiga durante a fuga na cerca.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A ruptura vesical causa uroperitônio com reabsorção de ureia/creatinina e anúria, e não urina marrom por pigmentos musculares liberados por esforço contrátil.'
      },
      {
        id: 'opt_3',
        text: 'Bilirrubinúria causada por colestase hepatobiliar aguda induzida por picada de serpente peçonhenta.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A anamnese de contenção física prolongada de 45 minutos com hipertermia e rigidez muscular aponta diretamente para a miopatia de captura e rabdomiólise.'
      },
      {
        id: 'opt_4',
        text: 'Hemoglobinúria fisiológica esperada após corrida de longa distância em canídeos selvagens adaptados.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A degradação muscular com liberação de mioglobina nunca é um evento fisiológico; trata-se de uma emergência metabólica com letalidade superior a 80% se não revertida precocemente.'
      }
    ]
  },

  {
    id: 'ex_physio_03',
    conceptId: 'concept_cpr_emergency_drugs',
    type: 'multiple_choice',
    prompt: 'Um filhote de Macaco-prego (Sapajus libidinosus) pesando 800 g (0,80 kg) entra em bradicardia sinusal severa (FC = 45 bpm, normal > 180 bpm) sob anestesia. O protocolo determina a administração imediata de Atropina 1% (10 mg/mL) na dose de 0,04 mg/kg. Para segurança, a equipe realizou uma diluição prévia 1:10 em solução fisiológica, obtendo uma concentração de 1,0 mg/mL. Qual o volume exato da solução diluída que deve ser administrado e seu mecanismo fisiológico?',
    options: [
      {
        id: 'opt_1',
        text: 'Volume de 0,032 mL (32 microlitros mensuráveis em seringa de insulina de 0,3 mL ou 0,5 mL), atuando pelo bloqueio competitivo de receptores muscarínicos M2 no nó sinoatrial, anulando o tônus parassimpático vagal.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Cálculo da massa requerida: 0,80 kg x 0,04 mg/kg = 0,032 mg de atropina. Utilizando a solução diluída a 1,0 mg/mL: Volume = 0,032 mg / 1,0 mg/mL = 0,032 mL (32 uL). O sulfato de atropina atua como antagonista competitivo dos receptores muscarínicos colinérgicos M2 no nó sinoatrial e atrioventricular, bloqueando o efeito hiperpolarizante da acetilcolina liberada pelo nervo vago e restabelecendo a frequência cardíaca e o débito cardíaco.'
      },
      {
        id: 'opt_2',
        text: 'Volume de 0,32 mL, que atua como agonista direto dos receptores beta-1 adrenérgicos atriais estimulando o influxo de cálcio intracelular.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Esse volume (0,32 mL) corresponde a 10 vezes a dose necessária (0,32 mg em um filhote de 800 g), provocando taquiarritmia ventricular fatal e midríase extrema. Além disso, a atropina é um anticolinérgico muscarínico, não um agonista beta-1 adrenérgico.'
      },
      {
        id: 'opt_3',
        text: 'Volume de 3,2 mL, que bloqueia os receptores nicotínicos da placa motora esquelética.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Volume de 3,2 mL representa uma overdose de 100 vezes a dose recomendada.'
      },
      {
        id: 'opt_4',
        text: 'Volume de 0,0032 mL, administrado puro sem qualquer diluição através de sonda endotraqueal.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O volume de 0,0032 mL (3,2 uL) não pode ser dosado fisicamente com precisão em nenhuma seringa convencional de rotina sem diluição prévia.'
      }
    ]
  },

  {
    id: 'ex_physio_04',
    conceptId: 'concept_physio_oxygen_transport_hypoxia',
    type: 'multiple_choice',
    prompt: 'Na fisiologia cardiovascular e respiratória comparada, a oferta tecidual de oxigênio (DO2) depende do Débito Cardíaco (DC) e do Conteúdo Arterial de Oxigênio (CaO2). Um felino intoxicado por paracetamol apresenta mucosas com coloração achocolatada e cianose intensa, enquanto um bovino que ingeriu folhas de mandioca-brava (cianeto) apresenta mucosas vermelho-brilhantes e sangue venoso oxigenado. Qual alternativa classifica corretamente os tipos fisiopatológicos de hipóxia celular presentes em cada um desses dois cenários?',
    options: [
      {
        id: 'opt_4_1',
        text: 'No felino intoxicado por paracetamol ocorre Hipóxia Anêmica (formação de meta-hemoglobina com ferro férrico Fe3+ que não se liga ao O2, reduzindo o CaO2 apesar de PaO2 normal); no bovino intoxicado por cianeto ocorre Hipóxia Histotóxica (o cianeto inibe a enzima citocromo c oxidase aa3 da cadeia respiratória mitocondrial, impedindo a célula de consumir O2 apesar de oferta e fluxo normais)',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A classificação de hipóxia celular é um pilar da medicina intensiva: na Hipóxia Anêmica (paracetamol em gatos com deficiência de glicuroniltransferase), o ferro do grupo heme é oxidado a Fe3+ (meta-hemoglobina), tornando a hemoglobina incapaz de transportar O2; a PaO2 dissolvida no plasma está normal, mas o CaO2 e DO2 colapsam. Na Hipóxia Histotóxica (intoxicação por cianeto), a oferta de oxigênio (DO2) está normal, mas a mitocôndria não consegue utilizar o O2 porque a enzima citocromo c oxidase está inibida, fazendo com que o sangue venoso retorne com alta saturação e coloração vermelho-cereja.'
      },
      {
        id: 'opt_4_2',
        text: 'Em ambos os casos ocorre Hipóxia Hipoxêmica pura decorrente de colapso de sacos aéreos e broncoespasmo alérgico agudo',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A hipóxia hipoxêmica decorre de PaO2 arterial diminuída (hipoventilação, descompasso V/Q). Na intoxicação por paracetamol e cianeto, a PaO2 é normal.'
      },
      {
        id: 'opt_4_3',
        text: 'O felino apresenta Hipóxia Estagnante por trombose aórtica e o bovino apresenta Hipóxia Anêmica por hemólise maciça induzida por saponinas',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O cianeto não causa anemia hemolítica, mas sim paralisia da respiração celular mitocondrial (hipóxia histotóxica).'
      },
      {
        id: 'opt_4_4',
        text: 'O cianeto inibe os receptores de insulina musculares enquanto o paracetamol causa hipóxia hipoxêmica por edema alveolar cardiogênico puro',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O alvo do cianeto é a cadeia transportadora de elétrons mitocondrial (citocromo oxidase), e o paracetamol induz meta-hemoglobinemia.'
      }
    ]
  },

  {
    id: 'ex_physio_05',
    conceptId: 'concept_physio_shock_hypovolemic_cardiogenic',
    type: 'multiple_choice',
    prompt: 'Durante a abordagem emergencial de pacientes em choque hemodinâmico, o clínico veterinário deve diferenciar o Choque Hipovolêmico (ex.: hemoperitônio agudo) do Choque Cardiogênico (ex.: cardiomiopatia dilatada com edema agudo). Qual diferença hemodinâmica fundamental dita a conduta de ressuscitação com fluidoterapia intravenosa em cada condição, e qual é o significado prognóstico da cinética de redução do lactato sérico (clearance de lactato)?',
    options: [
      {
        id: 'opt_5_1',
        text: 'No choque hipovolêmico há queda de pré-carga e retorno venoso, sendo mandatória a expansão volêmica vigorosa em bólus com cristaloides balanceados para restabelecer o volume sistólico; no choque cardiogênico a pré-carga está elevada com falência de ejeção, sendo a fluidoterapia contraindicada sob risco de edema pulmonar fatal. Uma redução >= 50% nos níveis de lactato sérico nas primeiras 2 a 4 horas (clearance de lactato) é o marcador mais fidedigno de restauração da perfusão tecidual e sobrevida',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A chave da hemodinâmica é a pré-carga e a contratilidade miocárdica: o choque hipovolêmico decorre de déficit absoluto de volume intravascular; a fluidoterapia rápida restaura o retorno venoso e o débito cardíaco. No choque cardiogênico, o coração não consegue ejetar o sangue que recebe; administrar fluidos sobrecarrega o ventrículo falimentar e inunda os alvéolos pulmonares com edema fulminante (aqui usam-se inotrópicos e diuréticos). O clearance de lactato (queda >= 50% em 2-4h) confirma que a oferta de O2 (DO2) superou o limiar anaeróbico e os tecidos retomaram a respiração celular oxidativa.'
      },
      {
        id: 'opt_5_2',
        text: 'A fluidoterapia vigorosa de 90 mL/kg em bólus é o tratamento padrão-ouro obrigatório tanto no choque cardiogênico quanto no hipovolêmico para lavar os pulmões',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Administrar bólus de fluidos em paciente com choque cardiogênico é um erro médico fatal que precipita edema pulmonar agudo e asfixia imediata.'
      },
      {
        id: 'opt_5_3',
        text: 'O choque hipovolêmico decorre de hipertrofia miocárdica concêntrica e o lactato sérico só se eleva na presença de infecções parasitárias crônicas',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O choque hipovolêmico é causado por perda de sangue ou fluidos, e o lactato é o marcador universal de metabolismo anaeróbico por hipoperfusão celular tecidual.'
      },
      {
        id: 'opt_5_4',
        text: 'No choque cardiogênico o lactato é metabolizado exclusivamente pelo miocárdio como fonte primária de glicose e sua elevação é fisiológica',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Embora o coração possa utilizar lactato como combustível sob certas condições, a hiperlactatemia sistêmica (> 2,5 mmol/L) em pacientes chocados reflete hipoxemia e sofrimento tecidual difuso.'
      }
    ]
  }
];

export const PHYSIOLOGY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_vitals_triad',
    moduleId: 'mod_physiology',
    title: 'Fisiologia Cardiovascular: Tríade Vital & Monitorização Anestésica',
    shortDescription: 'Frequência cardíaca, pressão arterial, oximetria de pulso e leis alométricas de Kleiber entre aves, répteis e mamíferos.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_vitals_triad', 'concept_anesthetic_apnea'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_vitals_01',
        type: 'theory',
        title: 'As Leis Alométricas da Tríade Vital',
        contentMarkdown: `### Por que o tamanho do animal muda tudo?

Em medicina veterinária de animais silvestres e domésticos, **não existe uma frequência cardíaca padrão universal**. A taxa metabólica basal de uma espécie segue a **Lei Alométrica de Kleiber ($M^{0.75}$)**: quanto menor a massa corporal do animal, maior é a sua taxa de consumo de oxigênio por grama de tecido e mais acelerado é o trabalho cardiovascular.

| Classe / Espécie | Peso Típico | FC Normal (bpm) | FR Normal (mpm) | SpO2 Segura | Temp. Alvo |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Aves (Arara-canindé)** | 1,0 – 1,5 kg | **250 – 400** | **20 – 40** | > 92% | **39,5 – 41,5 °C** |
| **Mamíferos Pequenos (Sagui)** | 0,3 – 0,5 kg | **280 – 350** | **40 – 60** | > 94% | **37,0 – 38,5 °C** |
| **Mamíferos Médios (Lobo-guará / Cão)** | 20 – 30 kg | **70 – 120** | **14 – 24** | > 94% | **37,5 – 39,0 °C** |
| **Répteis (Jabuti-piranga)** | 2,0 – 6,0 kg | **15 – 40** | **4 – 12** | > 85% | **28,0 – 32,0 °C (POM)** |

\`\`\`mermaid
graph TD
    A["Lei Alométrica de Kleiber (Taxa Metabólica Proporcional a M^0.75)"] --> B["Menor Massa Corporal -> Maior Frequência Cardíaca Basal"]
    B --> C["Aves e Pequenos Mamíferos: FC Basal > 250 bpm"]
    C --> D["Bradicardia Crítica em Aves: FC < 200 bpm"]
    D --> E["Risco Iminente de Parada Cardiorrespiratória por Isoflurano"]
    E --> F["Suspensão Imediata do Anestésico + Ventilação com O2 Puro (100%)"]
\`\`\`

---

### O Efeito Depressor do Isoflurano

O anestésico inalatório **Isoflurano** promove relaxamento muscular e hipnose dose-dependente, mas também causa:
1. **Depressão do centro respiratório bulbar:** perda precoce dos movimentos respiratórios espontâneos (apneia);
2. **Vasodilatação periférica:** queda da Pressão Arterial Média (PAM) por inibição de canais de cálcio vasculares;
3. **Inibição do reflexo barorreceptor:** o coração não consegue compensar a vasodilatação periférica com taquicardia reflexa.

> 📖 Referência Canônica: Cunningham's Textbook of Veterinary Physiology (Klein, 6ª ed., Elsevier) & Veterinary Anesthesia and Analgesia (Grimm et al., 5ª ed., Wiley-Blackwell).

> 💡 Pérola Clínica / Prova de Residência: O Erro Frequente da Bradicardia em Aves: Uma frequência cardíaca de 100 bpm em um cão ou humano é absolutamente fisiológica. Na Arara-canindé, 100 bpm representa **bradicardia extrema de emergência nível vermelho**! Se o monitor acusar menos de 200 bpm em um psitacídeo, o paciente está a instantes da parada cardiorrespiratória irreversível!`
      },
      {
        id: 'sec_vitals_lab',
        type: 'lab',
        title: 'Prontuário & Simulação Hemodinâmica: Lara (Arara-canindé)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo de Bradicardia Crítica e Apneia Induzida por Anestésico Inalatório',
          patient: {
            name: 'Lara',
            species: 'Ave Silvestre',
            breed: 'Arara-canindé (Ara ararauna)',
            age: '4 anos',
            weightKg: 1.2,
            habitatOrEnvironment: 'Centro de Triagem de Animais Silvestres (CETAS)'
          },
          vitals: {
            heartRateBpm: 135,
            respiratoryRateRpm: 0,
            temperatureCelsius: 35.2,
            mucousMembranes: 'Cianóticas / Azuladas',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'Arara submetida a procedimento cirúrgico ortopédico de osteossíntese de úmero sob anestesia inalatória com Isoflurano a 3.5%. O monitor cirúrgico dispara alarme de apneia há 90 segundos com queda súbita da frequência cardíaca e oximetria de pulso despencando.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Monitorização Multiparamétrica e Oximetria de Pulso',
              findings: 'Depressão cardiorrespiratória bulbar severa por sobredose relativa de halogenado.',
              abnormalValues: [
                { parameter: 'Frequência Cardíaca (Ave)', value: '135 bpm (Bradicardia Extrema)', reference: '250 - 400 bpm', status: 'critical' },
                { parameter: 'Frequência Respiratória', value: '0 mpm (Apneia Completa)', reference: '20 - 40 mpm', status: 'critical' },
                { parameter: 'Saturação de Oxigênio (SpO2)', value: '83%', reference: '> 92%', status: 'critical' },
                { parameter: 'Temperatura Cloacal', value: '35.2 °C (Hipotermia)', reference: '39.5 - 41.5 °C', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com a arara em apneia completa e bradicardia crítica sob vaporizador a 3.5%, qual a sequência imediata de resgate?',
          decisionOptions: [
            {
              id: 'opt_dec_phys1_1',
              label: 'Zerar imediatamente o vaporizador de Isoflurano (0%) + Flush do circuito com O2 a 100% + Iniciar ventilação manual assistida (IPPV) suave a cada 3-5 segundos (pressão de pico < 12-15 cmH2O)',
              description: 'Eliminar o agente depressor, fornecer oxigenação ativa alveolar e proteger os sacos aéreos frágeis contra barotrauma.',
              isOptimal: true,
              consequenceText: 'Conduta exemplar em anestesiologia aviária! A eliminação rápida do isoflurano do circuito e a ventilação manual com pressão controlada (< 15 cmH2O) lavam o anestésico dos alvéolos e sacos aéreos, restabelecendo a hematose sem romper as delicadas membranas pneumáticas e restaurando o automatismo sinusal em segundos.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Interrupção do halogenado associada à ventilação com O2 puro com pressão controlada',
                mechanism: 'Depuração alveolar ativa do anestésico e oxigenação forçada dos tecidos miocárdicos',
                effect: 'Elevação da SpO2 para > 95% e retorno do ritmo sinusal fisiológico (> 280 bpm)',
                clinicalMeaning: 'Reversão completa da crise anestésica sem lesão hipóxica neurológica'
              }
            },
            {
              id: 'opt_dec_phys1_2',
              label: 'Aumentar o Isoflurano para 5% para tentar aprofundar o relaxamento muscular e aguardar retorno espontâneo',
              description: 'Elevar a concentração do anestésico inalatório durante a crise de bradicardia.',
              isOptimal: false,
              consequenceText: 'Erro médico fatal! O aumento da concentração do anestésico inalatório causará colapso imediato da contratilidade cardíaca e parada cardiorrespiratória irreversível em menos de 60 segundos.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Sobredose maciça de isoflurano em paciente em bradicardia crítica',
                mechanism: 'Bloqueio total dos canais de cálcio miocárdicos e ablação do drive vasomotor',
                effect: 'Assistolia ventricular fulminante',
                clinicalMeaning: 'Óbito anestésico imediato do paciente'
              }
            },
            {
              id: 'opt_dec_phys1_3',
              label: 'Ventilar a ave com força máxima sem manômetro de pressão para inflar os pulmões',
              description: 'Ventilar com alta pressão no balão reservatório.',
              isOptimal: false,
              consequenceText: 'Grave erro anatômico! Aves não possuem diafragma e seus sacos aéreos possuem paredes delgadíssimas de uma única camada celular. Pressões > 20 cmH2O causam barotrauma com ruptura de sacos aéreos, enfisema subcutâneo generalizado e morte.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Hiperpressão ventilatória mecânica descontrolada em pulmão aviário',
                mechanism: 'Ruptura iatrogênica de sacos aéreos torácicos e cervicais por barotrauma',
                effect: 'Pneumotórax aviário e enfisema subcutâneo maciço',
                clinicalMeaning: 'Asfixia mecânica aguda e morte do animal'
              }
            }
          ],
          learningTakeaways: [
            'Aves possuem taxa metabólica altíssima; FC < 200 bpm é bradicardia de emergência crítica.',
            'O primeiro passo em depressão anestésica inalatória é zerar o vaporizador e ventilar com O2 a 100%.',
            'A pressão de pico inspiratória em aves nunca deve ultrapassar 12 a 15 cmH2O para evitar barotrauma.'
          ]
        }
      },
      {
        id: 'sec_vitals_02',
        type: 'exercise',
        title: 'Desafio Prático: Decodificando o Alarme Vital',
        exerciseId: 'ex_physio_01'
      }
    ]
  },

  {
    id: 'lesson_physio_oxygen_transport_hypoxia',
    moduleId: 'mod_physiology',
    title: 'Fisiologia do Transporte de O2 (DO2 vs. VO2) & Tipos de Hipóxia',
    shortDescription: 'Equação de DO2 e CaO2, curva de dissociação da oxi-hemoglobina e os 4 tipos de hipóxia: anêmica, hipoxêmica, isquêmica e histotóxica.',
    estimatedMinutes: 14,
    order: 2,
    concepts: ['concept_physio_oxygen_transport_hypoxia'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_physio_o2_01',
        type: 'theory',
        title: 'A Cascata de Oxigênio: Da Atmosfera à Cadeia Respiratória Mitocondrial',
        contentMarkdown: `### 1. A Equação da Oferta Tecidual de Oxigênio ($DO_2$)

A sobrevivência celular de todos os tecidos nobres depende da entrega contínua de oxigênio pela circulação sistêmica:

$$DO_2 = DC \\times CaO_2 = [FC \\times VS] \\times CaO_2$$

Onde:
* **$DC$ = Débito Cardíaco** (Frequência Cardíaca $\\times$ Volume Sistólico de Ejeção);
* **$CaO_2$ = Conteúdo Arterial de Oxigênio**:

$$CaO_2 = (1,34 \\times [Hb] \\times SaO_2) + (0,003 \\times PaO_2)$$

* **Constante 1,34:** Cada grama de hemoglobina saturada transporta 1,34 mL de $O_2$.
* Mais de **98% do oxigênio** no sangue é transportado ligado à hemoglobina nos eritrócitos.
* O oxigênio livre dissolvido no plasma ($0,003 \\times PaO_2$) representa menos de 2% do total! Portanto, mesmo que a $PaO_2$ esteja excelente a 100 mmHg, se o animal tiver anemia severa ([Hb] = 3 g/dL) ou meta-hemoglobina, a oferta tecidual ($DO_2$) estará colapsada!

\`\`\`mermaid
graph TD
    A["Oferta de O2 aos Tecidos: DO2 = DC x CaO2"] --> B["Débito Cardíaco (DC = FC x VS)"]
    A --> C["Conteúdo Arterial (CaO2 = 1.34 x [Hb] x SaO2 + 0.003 x PaO2)"]
    C --> D["> 98% Ligado à Hemoglobina Funcional"]
    C --> E["< 2% Dissolvido Livre no Plasma (PaO2)"]
    
    F["Classificação Fisiopatológica das Hipóxias"] --> G["1. Hipóxia Hipoxêmica: PaO2 baixa (Pneumonia / Shunt)"]
    F --> H["2. Hipóxia Anêmica: Hb disfuncional/reduzida (Meta-hemoglobina / Hemorragia)"]
    F --> I["3. Hipóxia Estagnante/Isquêmica: Fluxo capilar lento (Choque / Trombose)"]
    F --> J["4. Hipóxia Histotóxica: Inibição mitocondrial (Cianeto inibindo Citocromo aa3)"]
\`\`\`

---

### 2. Os 4 Tipos Fisiopatológicos de Hipóxia Tecidual

| Tipo de Hipóxia | $PaO_2$ Arterial | $SaO_2$ Hemoglobina | Conteúdo $CaO_2$ | Fluxo / Débito Cardíaco | Exemplo Clínico Canônico |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hipoxêmica** | **Baixa** (< 60 mmHg) | **Baixa** (< 90%) | **Baixo** | Normal / Aumentado | Pneumonia bacteriana, edema pulmonar agudo, hipoventilação por sedação |
| **Anêmica** | **Normal** (~100 mmHg) | **Normal ou Falsamente Normal** | **Muito Baixo** | Compensatoriamente alto | Intoxicação por paracetamol em gatos (meta-hemoglobina), hemorragia aguda maciça |
| **Estagnante (Isquêmica)** | **Normal** | **Normal** | **Normal** | **Muito Baixo** | Choque cardiogênico, choque hipovolêmico descompensado, trombose arterial |
| **Histotóxica** | **Normal** | **Normal** | **Normal** | **Normal / Elevado** | Intoxicação por cianeto (mandioca-brava) bloqueando o citocromo c oxidase mitocondrial |

> 📖 Referência Canônica: Cunningham's Textbook of Veterinary Physiology (Klein, 6ª ed., Elsevier) & Small Animal Critical Care Medicine (Silverstein & Hopper, 2ª ed.).

> 💡 Pérola Fisiológica / O Paradoxo do Sangue Vermelho-Cereja no Cianeto: Na intoxicação por cianeto (*mandioca-brava* ou *sorgo*), o sangue venoso que retorna ao coração direito apresenta coloração vermelho-brilhante quase idêntica ao sangue arterial. Por quê? Porque as mitocôndrias celulares estão completamente paralisadas pela inativação do citocromo $aa_3$ e não conseguem consumir nenhuma molécula de $O_2$. O oxigênio atravessa os capilares intocado e retorna pelas veias sem ser extraído! Trata-se de hipóxia celular pura com oxigenação tecidual periférica aparente!`
      },
      {
        id: 'sec_physio_o2_lab',
        type: 'lab',
        title: 'Prontuário & Simulação Hemodinâmica: Milo (Gato com Meta-hemoglobinemia)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo de Hipóxia Anêmica Induzida por Paracetamol em Felino',
          patient: {
            name: 'Milo',
            species: 'Felino',
            breed: 'Siamês',
            age: '2 anos',
            weightKg: 3.8,
            habitatOrEnvironment: 'Domicílio urbano estrito'
          },
          vitals: {
            heartRateBpm: 220,
            respiratoryRateRpm: 60,
            temperatureCelsius: 37.0,
            mucousMembranes: 'Achocolatadas / Cianóticas escuras',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'Tutor administrou inadvertidamente meio comprimido de Paracetamol (acetaminofeno 250 mg) há 6 horas após o gato apresentar febre. O animal evoluiu com salivação, taquipneia extrema, prostração e sangue colhido em seringa apresenta coloração marrom-escura tipo calda de chocolate que não avermelha ao contato com o ar.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Gasometria Arterial, Co-oximetria e Esfregaço Sanguíneo',
              findings: 'Severa oxidação da hemoglobina e presença de corpúsculos de inclusão oxidativa.',
              abnormalValues: [
                { parameter: 'Nível de Meta-hemoglobina (MetHb)', value: '48%', reference: '< 1.5%', status: 'critical' },
                { parameter: 'Pressão Parcial de Oxigênio (PaO2)', value: '98 mmHg (Normal)', reference: '85 - 100 mmHg', status: 'normal' },
                { parameter: 'Saturação de O2 Funcional Efetiva', value: '52%', reference: '> 95%', status: 'critical' },
                { parameter: 'Presença de Corpúsculos de Heinz', value: 'Positivo em 65% das hemácias', reference: 'Ausente', status: 'critical' },
                { parameter: 'Lactato Sanguíneo', value: '5.2 mmol/L (Acidose Lática)', reference: '< 2.0 mmol/L', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com diagnóstico de hipóxia celular anêmica por meta-hemoglobinemia induzida por paracetamol, qual o antídoto e suporte farmacológico específico salvador?',
          decisionOptions: [
            {
              id: 'opt_dec_phys2_1',
              label: 'Administrar N-Acetilcisteína (NAC) IV/oral em dose de ataque (140 mg/kg) + Oxigenioterapia umidificada + Suporte de fluidoterapia e antioxidante (S-adenosilmetionina - SAMe / Vitamina C)',
              description: 'Repor glutationa hepática esgotada, conjugar o metabólito tóxico NAPQI e reduzir a meta-hemoglobina de volta a hemoglobina funcional.',
              isOptimal: true,
              consequenceText: 'Conduta farmacológica impecável e salvadora! Gatos possuem deficiência na enzima glicuroniltransferase, acumulando o metabólito reativo NAPQI que esgota a glutationa e oxida o ferro heme a Fe3+ (meta-hemoglobina). A N-acetilcisteína fornece precursores imediatos de cisteína para a regeneração da glutationa, neutralizando o NAPQI e restaurando a capacidade de transporte de O2.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Administração imediata de N-acetilcisteína como doadora de glutationa',
                mechanism: 'Neutralização do metabólito NAPQI e redução enzimática de Fe3+ a Fe2+ na hemoglobina',
                effect: 'Redução da meta-hemoglobina de 48% para < 5% e restauração do CaO2 tecidual',
                clinicalMeaning: 'Cura da hipóxia celular anêmica, queda do lactato e preservação da vida do felino'
              }
            },
            {
              id: 'opt_dec_phys2_2',
              label: 'Prescrever Dexametasona e Furosemida para eliminar o excesso de líquido nos pulmões',
              description: 'Tratar a cianose como edema pulmonar inflamatório com diurético e corticoide.',
              isOptimal: false,
              consequenceText: 'Erro diagnóstico fatal! Os pulmões do paciente estão limpos e a PaO2 é perfeitamente normal (98 mmHg). O problema reside exclusivamente no sangue oxidado. Usar diurético induz hipovolemia desidratante, reduz o débito cardíaco e agrava dramaticamente a hipóxia celular.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de diurético de alça em paciente euvolêmico com hipóxia anêmica',
                mechanism: 'Depleção do volume intravascular e redução severa do débito cardíaco (DC)',
                effect: 'Queda catastrófica da oferta DO2 aos tecidos já desoxigenados',
                clinicalMeaning: 'Choque hipovolêmico iatrogênico sobreposto e óbito imediato'
              }
            },
            {
              id: 'opt_dec_phys2_3',
              label: 'Apenas colocar o gato em caixa de oxigênio a 100% sem administrar qualquer antídoto químico',
              description: 'Fornecer apenas oxigenioterapia isolada.',
              isOptimal: false,
              consequenceText: 'Insuficiente e fatal! O oxigênio inalado aumenta apenas a fração dissolvida no plasma (que representa < 2% do total), mas é totalmente incapaz de se ligar à meta-hemoglobina oxidada com Fe3+. Sem o antídoto N-acetilcisteína para restaurar a hemoglobina funcional, o felino morrerá de hipóxia celular com a caixa de oxigênio ligada.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Monoterapia com oxigênio sem reversão da oxidação molecular da hemoglobina',
                mechanism: 'Incapacidade do O2 dissolvido em suprir o colapso do transporte mediado por eritrócitos',
                effect: 'Manutenção da anóxia tecidual e acúmulo contínuo de ácido lático',
                clinicalMeaning: 'Falência múltipla de órgãos por hipóxia anêmica refratária'
              }
            }
          ],
          learningTakeaways: [
            'O oxigênio dissolvido livre no plasma (PaO2) representa menos de 2% do conteúdo arterial de oxigênio.',
            'A intoxicação por paracetamol em gatos induz meta-hemoglobinemia (Fe3+) e hipóxia anêmica severa.',
            'O antídoto padrão-ouro é a N-Acetilcisteína (NAC), que repõe os estoques de glutationa antioxidante.'
          ]
        }
      },
      {
        id: 'sec_physio_o2_02',
        type: 'exercise',
        title: 'Desafio Prático: Dinâmica das Hipóxias Teciduais',
        exerciseId: 'ex_physio_04'
      }
    ]
  },

  {
    id: 'lesson_physio_shock_hypovolemic_cardiogenic',
    moduleId: 'mod_physiology',
    title: 'Fisiopatologia do Choque: Hipovolêmico vs. Cardiogênico & Lactato',
    shortDescription: 'Colapso de pré-carga vs falência de bomba, mecanismos compensatórios simpatoadrenais e cinética do lactato sanguíneo.',
    estimatedMinutes: 15,
    order: 3,
    concepts: ['concept_physio_shock_hypovolemic_cardiogenic'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_physio_shock_01',
        type: 'theory',
        title: 'A Cascata Hemodinâmica do Choque & O Limiar Anaeróbico',
        contentMarkdown: `### 1. Definição Fisiopatológica do Choque

O choque não é sinônimo de hipotensão arterial; a hipotensão é uma manifestação tardia e descompensada. **Choque é o colapso agudo e profundo da perfusão microvascular sistêmica**, resultando em oferta tecidual de oxigênio ($DO_2$) insuficiente para atender às demandas metabólicas celulares de oxigênio ($VO_2$).

\`\`\`mermaid
graph TD
    A["Queda Crítica da Perfusão Tecidual (DO2 < VO2)"] --> B["Hipóxia Celular Generalizada"]
    B --> C["Paralisia da Fosforilação Oxidativa Mitocondrial"]
    C --> D["Ativação da Glicólise Anaeróbica Emergencial"]
    D --> E["Conversão de Piruvato em L-Lactato via LDH"]
    E --> F["Hiperlactatemia Sérica (> 2.5 mmol/L) & Acidose Metabólica"]
    
    G["Diferenciação Fisiopatológica Chave"] --> H["Choque Hipovolêmico: Pré-Carga Baixa -> Fluidoterapia em Bólus Salva-Vidas"]
    G --> I["Choque Cardiogênico: Pré-Carga Alta & Falência de Bomba -> Fluido É PROIBIDO (Inodilatador)"]
\`\`\`

---

### 2. Choque Hipovolêmico vs. Choque Cardiogênico

| Parâmetro Fisiológico | Choque Hipovolêmico | Choque Cardiogênico |
| :--- | :--- | :--- |
| **Causa Primária** | Hemorragia externa/interna maciça, desidratação grave (> 10%) | Falência miocárdica (CMD, endocardiose com ruptura de cordoalha, arritmias) |
| **Volume Intravascular / Pré-Carga** | **Reduzida criticamente** (PVC baixa, ventrículos vazios) | **Normal ou Aumentada** (hipertensão venosa, PVC elevada) |
| **Ausculta Cardiopulmonar** | Taquicardia sinusal compensatória, pulmões limpos | Sopros cardíacos, galope (S3/S4), crepitações de **edema pulmonar** |
| **Pressão Venosa Central (PVC)** | < 0 a 2 cmH2O | > 10 a 15 cmH2O |
| **Resposta à Fluidoterapia** | **Excelente e Mandatória:** Bólus de cristaloides restaura o débito | **CATASTRÓFICA:** Fluidos afogam os alvéolos em edema agudo fatal |
| **Manejo Farmacológico Chave** | Ringer Lactato (10-20 mL/kg em bólus guiado), sangue total | **Inodilatadores** (Pimobendan, Dobutamina) + Diuréticos (Furosemida) |

---

### 3. A Cinética do Lactato Sanguíneo como Bússola Prognóstica

* **Origem Bioquímica:** Na ausência de $O_2$ mitocondrial, o piruvato não entra no Ciclo de Krebs e é reduzido a **L-lactato** pela lactato desidrogenase (LDH), regenerando $NAD^+$ para manter uma produção basal residual de apenas 2 moléculas de ATP por glicose.
* **Valores de Referência em Pequenos e Grandes Animais:**
  * Normal: $< 2.0	ext{ mmol/L}$.
  * Hiperlactatemia moderada: $2.5 - 5.0	ext{ mmol/L}$.
  * Hiperlactatemia severa: $> 5.0	ext{ mmol/L}$ (risco iminente de disfunção de múltiplos órgãos).
* **Clearance de Lactato:** A redução de **pelo menos 50% nos níveis séricos de lactato nas primeiras 2 a 4 horas** de ressuscitação volêmica guiada por metas é o indicador mais sensível de que a microcirculação foi reperfundida com sucesso e prediz alta sobrevida hospitalar!

> 📖 Referência Canônica: Small Animal Critical Care Medicine (Silverstein & Hopper, 2ª ed., Elsevier) & Textbook of Veterinary Internal Medicine (Ettinger, Feldman & Côté, 8ª ed.).`
      },
      {
        id: 'sec_physio_shock_lab',
        type: 'lab',
        title: 'Prontuário & Simulação Hemodinâmica: Lara (Labrador com Hemoperitônio)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Ressuscitação Volêmica Guiada por Metas em Choque Hipovolêmico Hemorrágico',
          patient: {
            name: 'Lara',
            species: 'Canino',
            breed: 'Labrador Retriever',
            age: '6 anos',
            weightKg: 28.0,
            habitatOrEnvironment: 'Atropelamento por automóvel há 40 minutos'
          },
          vitals: {
            heartRateBpm: 175,
            respiratoryRateRpm: 44,
            temperatureCelsius: 36.8,
            mucousMembranes: 'Pálidas como cera (Despigmentadas)',
            capillaryRefillTimeSec: 3.5
          },
          anamnesis: 'Cadela atropelada chega em decúbito lateral flácido, com abdômen abaulado e pulsos femorais filiformes quase imperceptíveis. Ultrassom POCUS AFAST abdominal revela líquido livre profuso anecoico na bolsa esplenorrenal e retrovesical.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Lactatemia, Abdominocentese e Perfil Hemodinâmico',
              findings: 'Severo colapso circulatório hipovolêmico por hemoperitônio agudo traumático.',
              abnormalValues: [
                { parameter: 'Pressão Arterial Média (PAM)', value: '45 mmHg', reference: '70 - 100 mmHg', status: 'critical' },
                { parameter: 'Lactato Sanguíneo à Admissão', value: '7.8 mmol/L', reference: '< 2.0 mmol/L', status: 'critical' },
                { parameter: 'Hematócrito Abdominal vs Sangue', value: 'Hematócrito líquido peritoneal 38% (Sangue: 24%)', reference: 'Ausente', status: 'critical' },
                { parameter: 'Qualidade do Pulso Arterial', value: 'Filiforme, hipocinético fraco', reference: 'Forte, cheio e simétrico', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com choque hipovolêmico grau 3 descompensado por hemorragia intra-abdominal ativa, qual é a conduta hemodinâmica e cirúrgica imediata?',
          decisionOptions: [
            {
              id: 'opt_dec_phys3_1',
              label: 'Ressuscitação hipotensiva permissiva com cristaloides balanceados (bólus moderados de 15-20 mL/kg) para atingir PAM alvo de 60-65 mmHg + Tipagem sanguínea e transfusão de concentrado de hemácias/sangue total + Laparotomia hemostática de urgência (Esplenectomia)',
              description: 'Restabelecer perfusão coronária e cerebral sem elevar excessivamente a pressão para não romper coágulos pré-formados antes do controle hemostático cirúrgico.',
              isOptimal: true,
              consequenceText: 'Conduta exemplar em trauma e medicina intensiva! A ressuscitação com metas de pressão permissiva (PAM ~60-65 mmHg) garante perfusão de órgãos nobres sem estourar o trombo inicial na laceração esplênica ("pop the clot"), enquanto a cirurgia de urgência interrompe o sangramento ativo.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Ressuscitação volêmica balanceada e hemostasia cirúrgica definitiva do baço lacerado',
                mechanism: 'Restauração da pré-carga e do débito cardíaco sem agravar o sangramento interno',
                effect: 'Redução do lactato de 7.8 para 2.4 mmol/L em 3 horas (clearance > 50%) e elevação da PAM para 75 mmHg',
                clinicalMeaning: 'Reversão do choque hipovolêmico e alta hospitalar sem sequelas isquêmicas renais'
              }
            },
            {
              id: 'opt_dec_phys3_2',
              label: 'Administrar infusão contínua de Furosemida e Dobutamina para induzir diurese e estimular o coração',
              description: 'Tratar o choque com inotrópicos e diuréticos sem repor volume.',
              isOptimal: false,
              consequenceText: 'Erro letal! O coração de Lara está saudável, apenas não possui sangue para bombear por falta de pré-carga. Administrar diurético esvaziará ainda mais os vasos, e inotrópicos em coração vazio provocarão arritmias fatais e colapso circulatório imediato.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de diuréticos e inotrópicos em choque hipovolêmico desidratado',
                mechanism: 'Ablação do volume circulante residual em ventrículos hipovolêmicos vazios',
                effect: 'Assistolia ventricular fulminante por ausência de volume sistólico',
                clinicalMeaning: 'Óbito iatrogênico imediato durante o atendimento'
              }
            },
            {
              id: 'opt_dec_phys3_3',
              label: 'Aguardar 24 horas em observação em gaiola para ver se o sangue abdominal é reabsorvido espontaneamente',
              description: 'Conduta expectante sem fluidos nem cirurgia.',
              isOptimal: false,
              consequenceText: 'Negligência médica fatal! Com lactato de 7.8 mmol/L e PAM de 45 mmHg, a paciente entrará em parada cardiorrespiratória por choque irreversível em menos de 1 a 2 horas.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Inércia clínica perante hemorragia cavitária exsanguinante ativa',
                mechanism: 'Isquemia celular continuada com necrose tecidual e colapso mitocondrial',
                effect: 'Acidose lática extrema refratária e falência de múltiplos órgãos',
                clinicalMeaning: 'Morte do paciente por choque hipovolêmico hemorrágico'
              }
            }
          ],
          learningTakeaways: [
            'Choque é a incapacidade aguda de ofertar O2 suficiente para atender à demanda celular (DO2 < VO2).',
            'No choque hipovolêmico, a pré-carga está colapsada e a reposição volêmica é mandatória; no cardiogênico, fluidos são perigosos.',
            'O clearance de lactato (queda >= 50% em 2-4h) é o marcador mais fidedigno de restauração da microcirculação.'
          ]
        }
      },
      {
        id: 'sec_physio_shock_02',
        type: 'exercise',
        title: 'Desafio Prático: Diferenciação de Choques & Dinâmica do Lactato',
        exerciseId: 'ex_physio_05'
      }
    ]
  },

  {
    id: 'lesson_anesthetic_emergencies',
    moduleId: 'mod_physiology',
    title: 'Fisiologia de Emergência: Parada Cardiorrespiratória & Protocolos de RCP',
    shortDescription: 'Algoritmo de reanimação cardiopulmonar veterinária (RECOVER) aplicado à fauna silvestre: manobras e drogas de resgate.',
    estimatedMinutes: 15,
    order: 4,
    concepts: ['concept_cpr_emergency_drugs', 'concept_anesthetic_apnea', 'concept_volume_calc'],
    xpReward: 140,
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
| :--- | :--- | :--- | :--- |
| **Sulfato de Atropina** | Bradicardia sinusal severa por tônus vagal | 0,02 a 0,04 mg/kg IV / IM / IO | Em animais < 2 kg, **sempre diluir 1:10 em salina** para permitir medição em seringa de 1 mL |
| **Epinefrina (Adrenalina)** | PCR, assistolia, ritmo idioventricular | 0,01 a 0,02 mg/kg IV / IO | O frasco padrão 1:1000 (1 mg/mL) deve ser **diluído para 1:10.000 (0,1 mg/mL)** em pequenos animais |
| **Doxapram (Dopram)** | Estimulação do centro respiratório bulbar na apneia | 2 a 5 mg/kg IV / sublingual | Estimula quimiorreceptores carotídeos para reativar o drive ventilatório |
| **Atipamezol** | Reversão específica de agonistas alfa-2 (Dexmedetomidina) | Dose equimolar ao volume da sedação | Restaura a frequência cardíaca instantaneamente |

> 📖 Referência Canônica: RECOVER Guidelines (Journal of Veterinary Emergency and Critical Care) & Zoo and Wild Animal Medicine (Fowler & Miller).`
      },
      {
        id: 'sec_cpr_02',
        type: 'exercise',
        title: 'Desafio Prático: Titulação de Droga de Emergência',
        exerciseId: 'ex_physio_03'
      }
    ]
  },

  {
    id: 'lesson_capture_myopathy',
    moduleId: 'mod_physiology',
    title: 'Fisiopatologia de Silvestres: Miopatia de Captura & Rabdomiólise',
    shortDescription: 'A tempestade metabólica em animais silvestres: quando a contenção física desencadeia acidose láctica e mioglobinúria.',
    estimatedMinutes: 14,
    order: 5,
    concepts: ['concept_capture_myopathy', 'concept_vitals_triad'],
    xpReward: 150,
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

> ⚠️ Alerta de Manejo de Fauna: Prevenção é o Único Tratamento Eficaz! Quando a mioglobinúria e a hipertermia se instalam, a taxa de mortalidade ultrapassa **80%**. A melhor prática médica é abortar contenções físicas com mais de **10 a 15 minutos** de luta e instituir sedação farmacológica precoce com agonistas alfa-2 e dissociativos.`
      },
      {
        id: 'sec_myopathy_02',
        type: 'exercise',
        title: 'Desafio Prático: Investigação de Rabdomiólise',
        exerciseId: 'ex_physio_02'
      }
    ]
  }
];
