// src/learning/data/lessons/basicSciencesLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

// ==========================================
// 1. BIOQUÍMICA CLÍNICA & METABÓLICA VETERINÁRIA
// ==========================================
export const BIOCHEMISTRY_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_biochem_01',
    conceptId: 'concept_biochemistry_ketosis_gluconeogenesis',
    type: 'multiple_choice',
    prompt: 'Em ruminantes de alta produção leiteira, a glicose livre absorvida no intestino delgado é praticamente nula. Qual é o principal substrato precursor hepático da gliconeogênese em vacas e qual enzima mitocondrial-citossólica chave canaliza esse esqueleto de carbono para a síntese de glicose?',
    options: [
      {
        id: 'opt_biochem_1',
        text: 'Ácido Graxo Volátil Propionato, que é ativado a propionil-CoA, carboxilado a metilmalonil-CoA e convertido a succinil-CoA, adentrando o ciclo de Krebs para formar oxaloacetato, o qual é convertido a fosfoenolpiruvato pela PEP-Carboxiquinase (PEPCK)',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O propionato absorvido pelas papilas ruminais é o único AGV glicogênico em quantidade expressiva no ruminante. No fígado, ele ingressa no ciclo de Krebs como succinil-CoA, gerando oxaloacetato. A fosfoenolpiruvato-carboxiquinase (PEPCK) catalisa a etapa limitante da gliconeogênese hepática para suprir a demanda massiva de lactose pela glândula mamária.'
      },
      {
        id: 'opt_biochem_2',
        text: 'Acetato e butirato, que são oxidados diretamente a glicose através da enzima acetil-CoA carboxilase',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Acetato e butirato geram acetil-CoA de dois carbonos. Em animais, os dois carbonos do acetil-CoA são perdidos como CO2 no ciclo de Krebs; portanto, eles são cetogênicos e lipogênicos, nunca glicogênicos.'
      },
      {
        id: 'opt_biochem_3',
        text: 'Glicerol e ácidos graxos livres (NEFA), que geram 95% da glicose circulante na vaca em lactação',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O glicerol (da lipólise) fornece uma fração modesta (< 5-10%) de glicose; a vasta maioria (> 85%) provém do propionato ruminal.'
      },
      {
        id: 'opt_biochem_4',
        text: 'Amido não degradável no rúmen, que se transforma em frutose livre no abomaso ácido',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O abomaso realiza digestão ácida péptica de proteínas, não gliconeogênese ou conversão química de amido em frutose.'
      }
    ]
  },
  {
    id: 'ex_biochem_02',
    conceptId: 'concept_biochem_ketosis_neb',
    type: 'multiple_choice',
    prompt: 'Uma vaca Holandesa de alta produção (42 L/dia), no 21º dia pós-parto, apresenta hiporexia seletiva (recusa concentrado, come apenas feno), queda brusca na produção de leite e hálito adocicado de acetona. Qual é a via metabólica descompensada e o achado laboratorial confirmatório?',
    options: [
      {
        id: 'opt_biochem_2_1',
        text: 'Balanço energético negativo (BEN) com lipólise maciça de adipócitos, elevação de ácidos graxos não esterificados (NEFA) e desvio de acetil-CoA para síntese de corpos cetônicos (beta-hidroxibutirato BHB > 1.4 mmol/L) por carência de oxaloacetato hepático',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! No pico de lactação, a demanda de glicose pela glândula mamária supera a ingestão de matéria seca. A mobilização lipídica excessiva sobrecarrega a beta-oxidação hepática; faltando oxaloacetato derivado do propionato para condensar com o acetil-CoA no ciclo de Krebs, o acetil-CoA acumula-se e é desviado para a cetogênese (acetoacetato e BHB).'
      },
      {
        id: 'opt_biochem_2_2',
        text: 'Acidose lática ruminal aguda com produção excessiva de ácido D-lático no rúmen',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A acidose lática decorre de sobrecarga aguda de carboidratos rapidamente fermentáveis (amido), não de balanço energético negativo com recusa de concentrado e hálito cetônico.'
      },
      {
        id: 'opt_biochem_2_3',
        text: 'Insuficiência renal primária com retenção de ureia e creatinina séricas',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Embora a desidratação secundária possa causar leve azotemia pré-renal, a queixa patognomônica de hálito cetônico e queda de lactação no periparto aponta diretamente para cetose metabólica.'
      },
      {
        id: 'opt_biochem_2_4',
        text: 'Deficiência primária de tiamina (Vitamina B1) provocando polioencefalomalácia',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A deficiência de tiamina leva a sintomas neurológicos severos (opistótono, cegueira cortical e nistagmo), e não à síndrome cetonêmica clássica de transição.'
      }
    ]
  },
  {
    id: 'ex_biochem_03',
    conceptId: 'concept_biochem_urea_ammonia',
    type: 'multiple_choice',
    prompt: 'Um lote de 40 novilhos Nelore em confinamento recebeu acidentalmente ração concentrada com excesso de ureia pecuária (sem período prévio de adaptação). Duas horas após o trato, 12 animais apresentam sialorreia profusa, tremores musculares intensos, incoordenação motora, timpanismo e dispneia com colapso em decúbito. O pH ruminal mensurado é de 7.9. Qual é o mecanismo bioquímico da intoxicação e o antídoto de campo imediato?',
    options: [
      {
        id: 'opt_biochem_3_1',
        text: 'A urease microbiana hidrolisa a ureia em amônia (NH3) mais rápido do que a microbiota consegue assimilar em proteína microbiana; sob pH ruminal alcalino (> 7.0), a amônia não-ionizada lipossolúvel (NH3) é absorvida em massa para a circulação portal, sobrecarregando o ciclo da ureia hepático e inibindo o ciclo de Krebs neuronal; o antídoto imediato é ácido acético a 5% (vinagre frasco de 4-6 L) e água fria via sonda nasorruminal para acidificar o rúmen e converter NH3 em NH4+ impermeável',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! Em pH alcalino, o equilíbrio desloca-se para a amônia livre gasosa não-ionizada (NH3), que atravessa avidamente o epitélio ruminal por difusão simples. No sangue, a hiperamonemia bloqueia a enzima alfa-cetoglutarato desidrogenase no ciclo de Krebs do SNC, privando os neurônios de ATP. A administração de ácido acético (vinagre comercial) protona a amônia transformando-a no íon amônio (NH4+), que é hidrofílico e não consegue atravessar a barreira mucosal ruminal, enquanto a água fria reduz a temperatura e inibe a urease bacteriana.'
      },
      {
        id: 'opt_biochem_3_2',
        text: 'A ureia inibe a fosfofrutoquinase causando acidose lática grave; o tratamento exige bicarbonato de sódio a 8.4% intrarruminal',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Bicarbonato alcalinizaria ainda mais o rúmen (pH > 8.0), aumentando a proporção de NH3 tóxico e matando os animais em minutos.'
      },
      {
        id: 'opt_biochem_3_3',
        text: 'O excesso de ureia precipita cálcio nos túbulos renais; o tratamento é gluconato de cálcio a 10% IV',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A fisiopatologia da intoxicação por ureia é uma encefalopatia metabólica hiperamonêmica aguda, e não hipocalcemia por precipitação renal.'
      },
      {
        id: 'opt_biochem_3_4',
        text: 'Trata-se de hipomagnesemia aguda (tetania das pastagens); o tratamento é sulfato de magnésio subcutâneo',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O histórico de ingestão aguda de concentrado com ureia e pH ruminal 7.9 define formalmente a intoxicação por amônia/NNP.'
      }
    ]
  },
  {
    id: 'ex_biochem_04',
    conceptId: 'concept_biochem_liver_enzymes',
    type: 'multiple_choice',
    prompt: 'Um cão Labrador de 9 anos sob terapia crônica com fenobarbital e prednisona realiza exames de rotina: Fosfatase Alcalina (FA) 1.450 U/L (ref: 20-156 U/L), Gama-Glutamiltransferase (GGT) 85 U/L (ref: 1-10 U/L), ALT 48 U/L (ref: 10-100 U/L), AST 32 U/L (ref: 0-50 U/L), Bilirrubinas normais e Ácidos Biliares séricos pré e pós-prandiais normais. Como o médico veterinário patologista clínico interpreta esse perfil enzimático?',
    options: [
      {
        id: 'opt_biochem_4_1',
        text: 'Indução enzimática farmacológica da isoenzima de FA induzida por corticoide (C-ALP) e fenobarbital na membrana canalicular hepatobiliar, sem necrose hepatocelular ativa (ALT e AST normais) e com função de síntese e excreção hepática preservada (bilirrubinas e ácidos biliares normais)',
        isCorrect: true,
        pedagogicalFeedback: 'Excelente interpretação laboratorial! Em cães (espécie única nesse aspecto), tanto corticosteroides exógenos/endógenos quanto barbitúricos induzem transcricionalmente a síntese de isoenzimas de membrana da FA (especialmente a isoenzima C-ALP induzida por glicocorticoide) e GGT. A ausência de elevação de ALT (enzima citossólica de extravasamento por lise celular) e a normalidade dos ácidos biliares confirmam que os hepatócitos estão íntegros e que a função metabólica do órgão está mantida.'
      },
      {
        id: 'opt_biochem_4_2',
        text: 'Insuficiência hepática aguda fulminante por necrose maciça de mais de 90% do parênquima hepático',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Na necrose aguda fulminante a ALT e AST atingem milhares de U/L e há icterícia com elevação maciça de bilirrubinas e ácidos biliares.'
      },
      {
        id: 'opt_biochem_4_3',
        text: 'Shunt portossistêmico congênito com hipoplasia microvascular hepática severa',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Shunts portossistêmicos cursam obrigatoriamente com elevação marcante de ácidos biliares pós-prandiais (> 80-100 umol/L) e hiperamonemia.'
      },
      {
        id: 'opt_biochem_4_4',
        text: 'Ruptura traumática de vesícula biliar com peritonite biliar generalizada',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A ruptura de vesícula cursa com abdômen agudo grave, icterícia clínica intensa, elevação de bilirrubinas e líquido peritoneal com bilirrubina maior que a sérica.'
      }
    ]
  },
  {
    id: 'ex_biochem_05',
    conceptId: 'concept_biochem_renal_biomarkers',
    type: 'multiple_choice',
    prompt: 'Um gato Siamês de 14 anos com perda progressiva de peso apresenta atrofia muscular generalizada (sarcopenia severa). O perfil bioquímico revela: Creatinina sérica 1.3 mg/dL (ref: 0.8-2.4 mg/dL), Dimetilarginina Simétrica (SDMA) 24 mcg/dL (ref: 0-14 mcg/dL), Densidade Urinária (DU) 1.018 (isostenúria) e Razão Proteína:Creatinina Urinária (UPC) 0.65 (proteinúrico). Qual é a explicação bioquímica para a discrepância entre a Creatinina e o SDMA e qual é o estadiamento IRIS do paciente?',
    options: [
      {
        id: 'opt_biochem_5_1',
        text: 'A creatinina sérica é subestimada pela severa perda de massa muscular esquelética (baixa produção de fosfocreatina), mascarando a perda real de TFG; o SDMA é derivado da metilação proteica intracelular, não sofre influência da massa muscular e eleva-se precocemente quando há perda de 25-40% da TFG; o paciente classifica-se em Doença Renal Crônica IRIS Estágio 2 com proteinúria',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A creatinina é um produto do catabolismo não enzimático da fosfocreatina muscular; animais sarcopênicos produzem pouca creatinina, o que gera concentrações séricas "falsamente normais" mesmo com destruição renal avançada. O SDMA independe de massa muscular e reflete fielmente a TFG. Pelo consenso IRIS (International Renal Interest Society), um SDMA persistentemente > 18 mcg/dL com DU < 1.035 reclassifica o felino para Estágio 2, e o UPC > 0.4 confirma proteinúria renal com pior prognóstico se não tratada.'
      },
      {
        id: 'opt_biochem_5_2',
        text: 'O SDMA está falsamente elevado devido à desidratação pré-renal transitória e a creatinina de 1.3 mg/dL descarta qualquer lesão renal crônica',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A densidade urinária de 1.018 em um gato desidratado confirma perda da capacidade de concentração medular (isostenúria), descartando etiologia pré-renal pura.'
      },
      {
        id: 'opt_biochem_5_3',
        text: 'A creatinina é secretada ativamente nos túbulos coletores do gato, tornando-a inútil para avaliar filtração glomerular',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Em gatos, a creatinina é filtrada quase exclusivamente pelos glomérulos sem secreção tubular significativa.'
      },
      {
        id: 'opt_biochem_5_4',
        text: 'O paciente tem Doença Renal Crônica IRIS Estágio 4 terminal com indicação imediata de eutanásia humanitária',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O estágio 4 exige creatinina > 5.0 mg/dL ou SDMA > 45 mcg/dL com sintomas urêmicos refratários.'
      }
    ]
  }
];

export const BIOCHEMISTRY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_biochem_01_gluconeogenesis',
    moduleId: 'mod_biochemistry',
    title: 'Gliconeogênese Comparada & Cinética do Propionato Ruminal',
    shortDescription: 'Bioquímica da síntese de glicose em ruminantes: vias do propionato, piruvato carboxilase, PEPCK e demanda de lactose.',
    estimatedMinutes: 14,
    order: 1,
    concepts: ['concept_biochemistry_ketosis_gluconeogenesis'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_biochem_th1',
        type: 'theory',
        title: 'Morfofisiologia Metabólica: A Dependência Absoluta da Gliconeogênese no Ruminante',
        contentMarkdown: `### A Singularidade Bioquímica dos Ruminantes

Diferente dos animais monogástricos (caninos, felinos, suínos e equinos), que absorvem monossacarídeos diretamente no duodeno e jejuno a partir da digestão enzimática do amido e dissacarídeos dietéticos, os ruminantes adultos **absorvem praticamente zero glicose livre** no trato intestinal. 

A microbiota bacteriana e protozoária do retículo-rúmen fermenta avidamente quase todo carboidrato solúvel ou estrutural em **Ácidos Graxos Voláteis (AGVs)**:
* **Acetato (C2):** 60 a 70% do total molar; lipogênico, precursor primordial dos lipídios corporais e da gordura do leite.
* **Propionato (C3):** 15 a 25% do total molar; **o único AGV verdadeiramente glicogênico** em quantidades biologicamente relevantes.
* **Butirato (C4):** 10 a 15% do total molar; convertido em beta-hidroxibutirato (BHB) já no epitélio ruminal durante a absorção.

---

### A Cascata Enzimática da Síntese de Glicose Hepática

O propionato absorvido pelas papilas ruminais é carreado pela veia porta diretamente aos sinusoides hepáticos, onde sofre uma sequência enzimática altamente especializada:

$$\\text{Propionato} \\xrightarrow{\\text{Propionil-CoA Sintetase}} \\text{Propionil-CoA} \\xrightarrow{\\text{Propionil-CoA Carboxilase (Biotina)}} \\text{D-Metilmalonil-CoA}$$

$$\\text{D-Metilmalonil-CoA} \\xrightarrow{\\text{Racemase}} \\text{L-Metilmalonil-CoA} \\xrightarrow{\\text{Metilmalonil-CoA Mutase (Vit. B12)}} \\text{Succinil-CoA}$$

1. **Ingresso no Ciclo de Krebs:** O succinil-CoA entra no ciclo do ácido cítrico, gerando malato e, subsequentemente, **oxaloacetato**.
2. **Saída Mitocondrial & PEPCK:** O oxaloacetato é convertido em fosfoenolpiruvato pela **Fosfoenolpiruvato-Carboxiquinase (PEPCK)**, que atua como o principal marca-passo alostérico e transcricional da gliconeogênese hepática.
3. **Desfosforilação Final:** A glicose-6-fosfatase no retículo endoplasmático libera glicose livre na circulação sistêmica.

\`\`\`mermaid
flowchart TD
    A["Propionato Ruminal (C3)"] --> B["Propionil-CoA"]
    B --> C["Metilmalonil-CoA (Biotina)"]
    C --> D["Succinil-CoA (Dependente de Cobalamina / B12)"]
    D --> E["Ciclo de Krebs: Oxaloacetato"]
    E --> F["PEPCK (Fosfoenolpiruvato)"]
    F --> G["Glicose Livre Hepática"]
    G --> H["Glândula Mamária: Síntese de Lactose"]
\`\`\`

---

### Demanda Mamária de Lactose & O Custo Energético

A glândula mamária de uma vaca leiteira de alta produção é uma drenagem contínua e insaciável de glicose. A enzima **lactose sintase** (formada pelo complexo galactosiltransferase + alfa-lactalbumina) polimeriza UDP-galactose e glicose em **lactose**:
* Cada litro de leite bovino contém em média 48 g de lactose.
* Como a lactose é o principal osmorregulador do leite (atrai água para o lúmen alveolar mamário), a síntese de 45 litros de leite diários exige a extração irreversível de **mais de 3,2 kg de glicose pura por dia** pelo parênquima mamário!
* Se o aporte de propionato ruminal for insuficiente, o fígado é forçado a utilizar aminoácidos glicogênicos (como alanina e glutamina) e glicerol do tecido adiposo, gerando balanço nitrogenado negativo.

> 📖 Referência Canônica: Kaneko, Harvey & Bruss, *Clinical Biochemistry of Domestic Animals*, 6th ed., Academic Press; Cunningham, *Tratado de Fisiologia Veterinária*, 5ª ed., Elsevier.

> 💡 Pérola de Residência: A deficiência primária de Cobalto em pastagens impede que a microbiota ruminal sintetize Cobalamina (Vitamina B12). Sem a B12 como cofator da enzima *Metilmalonil-CoA Mutase*, ocorre acúmulo de metilmalonato e colapso gliconeogênico, quadro clínico clássico conhecido como Doença da Debilidade Costeira ou Deficiência de Cobalto em ruminantes.

> ⚠️ Alerta Clínico: Monogástricos como cães e gatos sob inanição ativam gliconeogênese a partir de aminoácidos e glicerol; já o ruminante realiza gliconeogênese no ápice da alimentação, exatamente quando a taxa de absorção de propionato ruminal atinge o pico.`
      },
      {
        id: 'sec_biochem_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Mimosa (Girolando)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo do Déficit Glicogênico Precoce no Pós-Parto',
          patient: {
            name: 'Mimosa',
            species: 'Bovino',
            breed: 'Girolando (3/4 Holandês)',
            age: '4 anos (2ª lactação)',
            weightKg: 540,
            habitatOrEnvironment: 'Semi-confinamento com pastejo rotacionado de Brachiaria e ração no cocho'
          },
          vitals: {
            heartRateBpm: 64,
            respiratoryRateRpm: 22,
            temperatureCelsius: 38.5,
            mucousMembranes: 'Normocoradas',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Vaca pariu há 12 dias bezerro saudável. Produção leiteira subiu rapidamente para 32 kg/dia, mas a ingestão de concentrado caiu levemente. O produtor nota que a vaca urina com frequência aumentada e perdeu visivelmente cobertura muscular lombar nos últimos 5 dias.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Painel Glicêmico & Metabólico Inicial',
              findings: 'Glicemia em sangue total mensurada por glicosímetro validado e dosagem de propionato ruminal indireto.',
              abnormalValues: [
                { parameter: 'Glicemia Sérica', value: '34 mg/dL', reference: '45 - 75 mg/dL', status: 'low' },
                { parameter: 'Beta-hidroxibutirato (BHB)', value: '1.1 mmol/L', reference: '< 1.2 mmol/L', status: 'normal' },
                { parameter: 'NEFA (Ácidos Graxos Livres)', value: '0.48 mEq/L', reference: '< 0.40 mEq/L', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Mimosa apresenta hipoglicemia de transição com NEFA em ascensão, mas ainda sem cetose clínica (BHB < 1.2 mmol/L). Qual intervenção impede a evolução para esteatose e cetose?',
          decisionOptions: [
            {
              id: 'opt_dec_bio1_1',
              label: 'Administrar drench com propilenoglicol (300 mL/dia VO) + suplementação com cobalto e complexo B',
              description: 'Fornecer precursor de propionato diretamente absorvível no rúmen com cofatores enzimáticos para acelerar a gliconeogênese.',
              isOptimal: true,
              consequenceText: 'Conduta profilática perfeita! O propilenoglicol é convertido no rúmen em propionato e piruvato, restaurando o substrato de oxaloacetato hepático e suprimindo a lipólise antes que o BHB ultrapasse o limiar patológico.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Oferta direta de propilenoglicol e cobalto',
                mechanism: 'Ativação da PEPCK e metilmalonil-CoA mutase com rápida síntese de oxaloacetato',
                effect: 'Elevação da glicemia para 55 mg/dL e queda de NEFA para 0.25 mEq/L',
                clinicalMeaning: 'Prevenção total da cetose clínica e estabilização do pico de lactação'
              }
            },
            {
              id: 'opt_dec_bio1_2',
              label: 'Suspender totalmente o volumoso e fornecer 100% de farelo de trigo com ureia pura',
              description: 'Tentar forçar energia elevando compostos nitrogenados sem fibra efetiva.',
              isOptimal: false,
              consequenceText: 'Erro perigoso! Reduzir a fibra efetiva compromete a ruminação e pode disparar acidose ruminal subclínica (SARA), além de risco agudo de intoxicação por amônia.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Retirada de fibra e excesso de nitrogênio solúvel',
                mechanism: 'Queda do pH ruminal e redução da população bacteriana celulolítica',
                effect: 'Interrupção da motilidade ruminal e colapso na absorção de AGVs',
                clinicalMeaning: 'Acidose ruminal aguda com agravamento da anorexia'
              }
            },
            {
              id: 'opt_dec_bio1_3',
              label: 'Não intervir clinicamente, pois o BHB sérico ainda está em faixa normal',
              description: 'Aguardar o animal atingir o 30º dia de lactação para reavaliar.',
              isOptimal: false,
              consequenceText: 'Subótimo. O NEFA elevado (0.48 mEq/L) com glicemia de 34 mg/dL sinaliza mobilização lipídica em aceleração. Sem intervenção precoce, a vaca desenvolverá cetose clínica em menos de 72 horas.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Conduta expectante passiva em balanço energético negativo incipiente',
                mechanism: 'Esgotamento progressivo de oxaloacetato mitocondrial no hepatócito',
                effect: 'Desvio de acetil-CoA para corpos cetônicos',
                clinicalMeaning: 'Queda na produção de leite e perda severa de escore de condição corporal'
              }
            }
          ],
          learningTakeaways: [
            'O propionato é o substrato limitante da gliconeogênese hepática nos ruminantes.',
            'A vitamina B12 (sintetizada a partir de cobalto dietético) é cofator obrigatório da metilmalonil-CoA mutase.',
            'A intervenção precoce com drench de propilenoglicol interrompe o ciclo do balanço energético negativo antes da lesão hepática.'
          ]
        }
      },
      {
        id: 'sec_biochem_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Bioquímica da Gliconeogênese Ruminante',
        exerciseId: 'ex_biochem_01'
      }
    ]
  },
  {
    id: 'lesson_biochem_02_ketosis_neb',
    moduleId: 'mod_biochemistry',
    title: 'Fisiopatologia da Cetose, Mobilização de NEFA & Esteatose Hepática',
    shortDescription: 'Balanço Energético Negativo (BEN): lipólise maciça, sobrecarga de beta-oxidação, esteatose e acúmulo de BHB.',
    estimatedMinutes: 14,
    order: 2,
    concepts: ['concept_biochem_ketosis_neb'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_biochem_th2',
        type: 'theory',
        title: 'A Cascata Patológica do Balanço Energético Negativo (BEN)',
        contentMarkdown: `### O Desafio Metabólico do Periparto Leiteiro

No início da lactação, a vaca de alta aptidão genética enfrenta uma encruzilhada fisiológica: a demanda energética para produzir de 35 a 60 kg de leite diários dobra ou triplica em 14 dias, enquanto o consumo voluntário de matéria seca (CMS) permanece fisiologicamente deprimido em até 30% devido à compressão física pelo útero gravídico e às alterações hormonais periparturientes.

Essa lacuna entre ingestão e gasto define o **Balanço Energético Negativo (BEN)**:

\`\`\`mermaid
flowchart TD
    BEN["Balanço Energético Negativo (Pós-Parto)"] --> DropInsulin["Queda de Insulina & Pico de Hormônio do Crescimento (GH)"]
    DropInsulin --> ActHSL["Ativação da Lípase Hormônio-Sensível (LHS) no Adipócito"]
    ActHSL --> MobilizNEFA["Liberação Maciça de NEFA (AGNE) no Sangue"]
    MobilizNEFA --> HepaticUptake["Captação Hepática Desenfreada de NEFA"]
    HepaticUptake --> BetaOx["Sobrecarga da Beta-Oxidação Mitocondrial"]
    BetaOx --> OxaloDrop["Falta de Oxaloacetato (Déficit de Propionato)"]
    OxaloDrop --> ExcessAcetyl["Acúmulo Crítico de Acetil-CoA"]
    ExcessAcetyl --> Ketogenesis["Síntese de Corpos Cetônicos: BHB, Acetoacetato e Acetona"]
    HepaticUptake --> Triglycerides["Reesterificação em Triglicerídeos"]
    Triglycerides --> Lipidosis["Baixa Exportação de VLDL -> Esteatose Hepática (Fígado Gorduroso)"]
\`\`\`

---

### Cinética dos Corpos Cetônicos & Diagnóstico Laboratorial

1. **Ácidos Graxos Não Esterificados (NEFA / AGNE):**
   * Marcador de **mobilização lipídica ativa**.
   * Normal no periparto: < 0.4 mEq/L.
   * Valores > 0.7 mEq/L no pré-parto ou > 1.0 mEq/L no pós-parto indicam lipólise patológica e alto risco de retenção de placenta e deslocamento de abomaso.
2. **Beta-hidroxibutirato (BHB):**
   * O corpo cetônico mais estável e abundante no sangue de ruminantes.
   * **Cetose Subclínica:** BHB sérico entre **1.2 e 2.9 mmol/L**.
   * **Cetose Clínica:** BHB sérico **≥ 3.0 mmol/L** (associada a hiporexia, fezes secas mucosas, hálito cetônico e queda de lactação).
3. **Fragilidade da Exportação de VLDL em Ruminantes:**
   * Diferente de humanos e roedores, os hepatócitos de bovinos possuem uma taxa extremamente vagarosa de síntese e secreção de Lipoproteínas de Muito Baixa Densidade (VLDL), devido à baixa expressão constitutiva da apolipoproteína B-100 e fosfatidilcolina.
   * O excesso de NEFA que não é oxidado é reesterificado em triacilglicerol, acumulando-se no citoplasma dos hepatócitos e gerando **lipidose hepática (esteatose)** em poucos dias.

> 📖 Referência Canônica: Radostits et al., *Veterinary Medicine: A textbook of the diseases of cattle, horses, sheep, pigs and goats*, 10th ed., Saunders; Kaneko et al., *Clinical Biochemistry of Domestic Animals*, Academic Press.

> 💡 Pérola Clínica: A hiporexia na cetose é **seletiva**: o animal recusa grãos e ração balanceada, mas mantém interesse por feno grosseiro e forragem seca. Isso ocorre porque o BHB atua diretamente nos receptores de saciedade do hipotálamo ventromedial e a acidose ruminal é inexistente (o pH ruminal na cetose costuma estar neutro a discretamente alcalino por estase).`
      },
      {
        id: 'sec_biochem_lab2',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Estrela (Holandesa P.O.)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Metabólico da Cetose Clínica em Bovino Leiteiro',
          patient: {
            name: 'Estrela',
            species: 'Bovino',
            breed: 'Holandesa P.O.',
            age: '5 anos (3ª lactação)',
            weightKg: 620,
            habitatOrEnvironment: 'Free-stall intensivo com dieta total misturada (TMR)'
          },
          vitals: {
            heartRateBpm: 68,
            respiratoryRateRpm: 24,
            temperatureCelsius: 38.6,
            mucousMembranes: 'Rosadas com leve icterícia subconjuntival',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Vaca pariu há 18 dias. Produção caiu de 45 para 20 L/dia. Recusa o concentrado há 48h, consome apenas feno. Fezes secas e com muco. Hálito com odor de acetona.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Painel Bioquímico & Cetonêmico',
              findings: 'Mensuração imediata de BHB por fita eletroquímica e perfil hepático sérico.',
              abnormalValues: [
                { parameter: 'Beta-hidroxibutirato (BHB)', value: '3.6 mmol/L', reference: '< 1.2 mmol/L', status: 'critical' },
                { parameter: 'Glicemia Sérica', value: '26 mg/dL', reference: '45 - 75 mg/dL', status: 'critical' },
                { parameter: 'NEFA', value: '1.35 mEq/L', reference: '< 0.40 mEq/L', status: 'critical' },
                { parameter: 'GGT', value: '82 U/L', reference: '15 - 40 U/L', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Estrela está em cetose clínica severa com esteatose incipiente. Qual protocolo restaura o equilíbrio metabólico?',
          decisionOptions: [
            {
              id: 'opt_dec_bio2_1',
              label: 'Propilenoglicol oral (300 g 12/12h) + Glicose 50% IV lenta (500 mL) + Vitamina B12 e Fósforo orgânico',
              description: 'Cessar a lipólise imediatamente com glicose IV e ofertar precursor contínuo de propionato e cofatores para o ciclo de Krebs.',
              isOptimal: true,
              consequenceText: 'Excelente conduta! A glicose 50% IV eleva a insulinemia e freia a lípase hormônio-sensível periférica. O propilenoglicol fornece propionato constante para restabelecer o oxaloacetato hepático, drenando o excesso de acetil-CoA para o ciclo de Krebs.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Infusão de glicose hipertônica combinada com propilenoglicol oral',
                mechanism: 'Bloqueio da lipólise periférica e restauração de oxaloacetato no fígado',
                effect: 'Queda do BHB sérico (< 1.4 mmol/L) em 48h e normalização do apetite',
                clinicalMeaning: 'Recuperação clínica completa sem necessidade de descarte'
              }
            },
            {
              id: 'opt_dec_bio2_2',
              label: 'Bicarbonato de sódio a 8.4% intravenoso (1.000 mL) e esvaziamento ruminal',
              description: 'Tratar sob suspeita de acidose lática ruminal aguda.',
              isOptimal: false,
              consequenceText: 'Erro diagnóstico grave! A vaca não tem acidose; seu pH ruminal está alcalino pela anorexia. A infusão de bicarbonato causará alcalose metabólica severa e hipocalcemia iatrogênica.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de bicarbonato em paciente sem acidemia',
                mechanism: 'Alcalinização sistêmica com redução de cálcio ionizado',
                effect: 'Tetania, colapso circulatório e manutenção da cetogênese',
                clinicalMeaning: 'Evolução para decúbito e coma cetonêmico'
              }
            },
            {
              id: 'opt_dec_bio2_3',
              label: 'Injeção de dexametasona em alta dose sem suporte glicídico',
              description: 'Utilizar corticoide isolado para induzir hiperglicemia.',
              isOptimal: false,
              consequenceText: 'Inadequado. Embora os corticoides estimulem gliconeogênese, em vacas já esteatóticas a dexametasona sem suporte de precursores e glicose pode aumentar a lipólise periférica e piorar a infiltração gordurosa hepática, além de causar queda súbita da produção de leite.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Corticoide em monoterapia sem substrato precursor',
                mechanism: 'Imunossupressão e catabolismo muscular sem oxaloacetato suficiente',
                effect: 'Persistência da cetose e risco de mastite infecciosa',
                clinicalMeaning: 'Agravamento do quadro e risco de esteatose fulminante'
              }
            }
          ],
          learningTakeaways: [
            'BHB sérico ≥ 3.0 mmol/L confirma cetose clínica em vacas leiteiras.',
            'O ruminante exporta VLDL muito lentamente, tornando o fígado altamente vulnerável à esteatose.',
            'A associação de glicose IV hipertônica e propilenoglicol oral é o padrão-ouro de tratamento.'
          ]
        }
      },
      {
        id: 'sec_biochem_ex2',
        type: 'exercise',
        title: 'Exercício Clínico: Cetose & Lipólise em Ruminantes',
        exerciseId: 'ex_biochem_02'
      }
    ]
  },
  {
    id: 'lesson_biochem_03_urea_cycle',
    moduleId: 'mod_biochemistry',
    title: 'Ciclo da Ureia, Hiperamonemia & Toxicidade por NNP',
    shortDescription: 'Metabolismo hepático de amônia, cinética da urease ruminal e fisiopatologia da intoxicação por ureia.',
    estimatedMinutes: 15,
    order: 3,
    concepts: ['concept_biochem_urea_ammonia'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_biochem_th3',
        type: 'theory',
        title: 'O Metabolismo do Nitrogênio Não Proteico & O Ciclo da Ureia',
        contentMarkdown: `### O Nitrogênio Não Proteico (NNP) na Nutrição de Ruminantes

Ruminantes possuem a extraordinária capacidade de converter compostos nitrogenados simples, como a **ureia pecuária** [CO(NH2)2], em proteína microbiana de alto valor biológico. A enzima bacteriana **urease** hidrolisa a ureia no rúmen em amônia (NH3) e dióxido de carbono:

$$\\text{CO(NH}_2\\text{)}_2 + \\text{H}_2\\text{O} \\xrightarrow{\\text{Urease Bacteriana}} 2\\,\\text{NH}_3 + \\text{CO}_2$$

Para que essa amônia seja incorporada em esqueletos de carbono bacterianos, os microrganismos ruminais necessitam de **energia prontamente fermentável** (amido ou açúcares solúveis).

---

### A Equação de Henderson-Hasselbalch da Amônia Ruminal

O fator crítico que separa a nutrição zootécnica eficiente da intoxicação fulminante é o **pH ruminal**:

$$\\text{NH}_4^+ \\longleftrightarrow \\text{NH}_3 + \\text{H}^+ \\quad (\\text{p}K_a \\approx 9.25)$$

* **Íon Amônio (NH4+):** Forma ionizada, polar e hidrofílica. Não consegue atravessar as membranas lipídicas das papilas ruminais por difusão simples.
* **Amônia Livre (NH3):** Gás não ionizado, altamente lipossolúvel. Atravessa instantaneamente a barreira epitelial ruminal e ganha a veia porta.
* Quando a hidrólise da ureia é muito rápida, a liberação de íons hidroxila eleva o pH ruminal para valores acima de 7.5 - 8.0, deslocando a reação massivamente para a forma de **NH3 livre**, disparando absorção torrencial de amônia.

\`\`\`mermaid
flowchart TD
    Urea["Ingestão Excessiva de Ureia Sem Adaptação"] --> Urease["Urease Ruminal Converte em Amônia"]
    Urease --> HighPH["Alcalinização do Fluido Ruminal (pH > 7.5)"]
    HighPH --> NH3_Lipophilic["Formação Maciça de NH3 (Gás Lipossolúvel)"]
    NH3_Lipophilic --> PortalFlux["Difusão Rápida para a Veia Porta"]
    PortalFlux --> LiverOverload["Colapso da Capacidade do Ciclo da Ureia Hepático"]
    LiverOverload --> SystemicAmmonia["Hiperamonemia Sistêmica"]
    SystemicAmmonia --> BrainInhibition["Bloqueio do Ciclo de Krebs Neuronal (Depleção de alfa-cetoglutarato)"]
    BrainInhibition --> Tremors["Tremores, Sialorreia, Timpanismo & Morte"]
\`\`\`

---

### O Ciclo da Ureia Hepático & Neurotoxicidade da Amônia

No fígado de mamíferos, a amônia é convertida em ureia atóxica através de cinco etapas enzimáticas compartimentalizadas:
1. **Carbamoil-Fosfato Sintetase I (CPS-I):** Mitocondrial; consome 2 ATPs e amônia livre.
2. **Ornitina Transcarbamilase (OTC):** Mitocondrial; condensa carbamoil-fosfato com ornitina formando citrulina.
3. **Argininossuccinato Sintetase:** Citossólica; condensa citrulina com aspartato.
4. **Argininossuccinato Liase:** Citossólica; cliva em arginina e fumarato.
5. **Arginase:** Citossólica; libera ureia e regenera ornitina.

Quando o influxo portal supera a velocidade máxima da CPS-I, a amônia atinge a circulação arterial e alcança os astrócitos cerebrais:
* Os astrócitos detoxificam amônia combinando-a com glutamato pela enzima **glutamina sintetase**, gerando **glutamina**.
* A glutamina intraintracelular atua como osmolito potente, atraindo água e causando **edema cerebral citotóxico**.
* Além disso, a conversão massiva de amônia consome **alfa-cetoglutarato**, desativando o ciclo de Krebs cerebral e colapsando a síntese de ATP neuronal.

> 📖 Referência Canônica: Kaneko et al., *Clinical Biochemistry of Domestic Animals*, 6th ed.; Thrall et al., *Veterinary Hematology and Clinical Chemistry*, 2nd ed., Wiley-Blackwell.

> 💡 Protocolo de Resgate Emergencial: Em campo, o antídoto para intoxicação por ureia em bovinos consiste na administração via sonda ororruminal de **4 a 6 litros de ácido acético a 5% (vinagre comercial comum)** misturados em **20 a 30 litros de água gelada**. O ácido acético acidifica o rúmen (pH < 6.0), convertendo imediatamente o NH3 tóxico no íon NH4+ impermeável, enquanto a água fria inibe termicamente a enzima urease bacteriana.`
      },
      {
        id: 'sec_biochem_lab3',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Lote 14 (Confinamento Nelore)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Emergência Toxicológica: Intoxicação por Nitrogênio Não Proteico',
          patient: {
            name: 'Novilho 402',
            species: 'Bovino',
            breed: 'Nelore',
            age: '22 meses',
            weightKg: 410,
            habitatOrEnvironment: 'Piquete de confinamento intensivo'
          },
          vitals: {
            heartRateBpm: 108,
            respiratoryRateRpm: 56,
            temperatureCelsius: 39.4,
            mucousMembranes: 'Congestas e cianóticas',
            capillaryRefillTimeSec: 3.5
          },
          anamnesis: 'Duas horas após o fornecimento da ração da manhã, 8 novilhos de um lote de 50 apresentaram sialorreia espumosa profusa, espasmos musculares, incoordenação motora e timpanismo gasoso moderado. Dois animais colapsaram em decúbito lateral com opistótono.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Avaliação Ruminal e Gasometria de Campo',
              findings: 'Paracentese ruminal imediata e teste com fita de pH.',
              abnormalValues: [
                { parameter: 'pH do Fluido Ruminal', value: '8.2', reference: '6.2 - 6.8', status: 'critical' },
                { parameter: 'Odor Ruminal', value: 'Amônia pungente forte', reference: 'Aromático normal', status: 'critical' },
                { parameter: 'Amônia Sérica Estimada', value: '> 1.500 mcg/dL', reference: '< 150 mcg/dL', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com pH ruminal de 8.2 e sinais neurológicos agudos de hiperamonemia, qual é a conduta salvadora imediata?',
          decisionOptions: [
            {
              id: 'opt_dec_bio3_1',
              label: 'Administrar imediatamente 5 L de vinagre comercial (ácido acético 5%) diluídos em 20 L de água gelada via sonda esofágica',
              description: 'Acidificar o lúmen ruminal para transformar NH3 em NH4+ impermeável e inibir a atividade da urease com água fria.',
              isOptimal: true,
              consequenceText: 'Conduta salvadora impecável! O ácido acético reduz o pH ruminal para abaixo de 6.0 em minutos. Nessa faixa, todo o NH3 livre é protonado para íon amônio (NH4+), cessando a absorção vascular. A água gelada derruba a temperatura ruminal e paralisa a urease.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Infusão de ácido acético e água fria no rúmen',
                mechanism: 'Protonação da amônia (NH3 -> NH4+) e inibição enzimática térmica',
                effect: 'Interrupção imediata do fluxo portal de amônia livre e reativação do ATP neuronal',
                clinicalMeaning: 'Cessação dos tremores em 20 minutos e sobrevivência de 100% dos animais tratados precocemente'
              }
            },
            {
              id: 'opt_dec_bio3_2',
              label: 'Administrar bicarbonato de sódio a 8.4% intravenoso e ringer lactato',
              description: 'Tratar sob suspeita errônea de acidose lática de confinamento.',
              isOptimal: false,
              consequenceText: 'Erro letal! O bicarbonato alcaliniza ainda mais o ambiente ruminal e sistêmico, potencializando a formação de NH3 livre. Os animais entrarão em convulsão fulminante e morrerão em poucos minutos.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de bicarbonato em intoxicação por amônia',
                mechanism: 'Elevação do pH com deslocamento maciço de NH4+ para NH3 gasoso',
                effect: 'Absorção torrencial de amônia para o sistema nervoso central',
                clinicalMeaning: 'Edema cerebral agudo, parada cardiorrespiratória e óbito imediato'
              }
            },
            {
              id: 'opt_dec_bio3_3',
              label: 'Aplicar antibiótico de amplo espectro intramuscular e aguardar absorção espontânea',
              description: 'Tratar com ceftiofur ou penicilina sem manobra ruminal.',
              isOptimal: false,
              consequenceText: 'Ineficaz e fatal. A intoxicação por ureia é hiperaguda (curso de 1 a 3 horas). Antibióticos não alteram a atividade da urease já presente no rúmen e o animal morrerá por colapso neurológico antes de qualquer efeito.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Omissão de intervenção mecânica e química no rúmen',
                mechanism: 'Manutenção da hiperamonemia contínua sobrecarregando os hepatócitos',
                effect: 'Esgotamento energético no córtex e tronco encefálico',
                clinicalMeaning: 'Morte de animais em decúbito por falência respiratória central'
              }
            }
          ],
          learningTakeaways: [
            'A intoxicação por ureia decorre da elevação do pH ruminal (> 7.5), que favorece a absorção de NH3 livre não ionizado.',
            'O antídoto específico de campo é o ácido acético (vinagre a 5%) associado a grandes volumes de água gelada.',
            'Jamais administre bicarbonato de sódio em suspeitas de intoxicação por amônia/NNP.'
          ]
        }
      },
      {
        id: 'sec_biochem_ex3',
        type: 'exercise',
        title: 'Exercício Clínico: Intoxicação por Amônia & Ciclo da Ureia',
        exerciseId: 'ex_biochem_03'
      }
    ]
  },
  {
    id: 'lesson_biochem_04_hepatic_enzymes',
    moduleId: 'mod_biochemistry',
    title: 'Enzimologia Hepática Comparada: Lesão Hepatocelular vs. Colestase',
    shortDescription: 'Cinética enzimática de ALT, AST, SDH, FA, GGT e teste funcional de ácidos biliares em carnívoros e grandes animais.',
    estimatedMinutes: 14,
    order: 4,
    concepts: ['concept_biochem_liver_enzymes'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_biochem_th4',
        type: 'theory',
        title: 'Diferenciação Bioquímica: Enzimas de Extravasamento vs. Enzimas de Indução',
        contentMarkdown: `### Princípios Gerais da Enzimologia Clínica

As enzimas séricas utilizadas na avaliação hepatobiliar dividem-se em duas categorias mecanísticas fundamentais:
1. **Enzimas de Extravasamento (Leakage):** Moléculas citossólicas ou mitocondriais que só escapam para o plasma quando ocorre alteração da permeabilidade da membrana celular ou necrose do hepatócito.
2. **Enzimas de Indução / Membrana:** Proteínas ancoradas à membrana celular ou canalículo biliar cuja síntese celular é ativada por estímulos químicos, estase de bile ou fármacos.

---

### Tabela Comparativa de Enzimas Hepáticas por Espécie

| Enzima | Localização Celular | Especificidade em Cães/Gatos | Especificidade em Cavalos/Ruminantes | Significado Clínico Principal |
| :--- | :--- | :--- | :--- | :--- |
| **ALT (Alanina Aminotransferase)** | Citoplasma do hepatócito | **Alta (Específica)** | **Inútil** (baixa atividade no fígado de grandes) | Injúria, hipóxia ou necrose hepatocelular aguda |
| **AST (Aspartato Aminotransferase)** | Citoplasma e Mitocôndria | Baixa (presente em músculo e hemácias) | Moderada (requer CK paralela para descartar miopatia) | Necrose hepatocelular grave e/ou lesão muscular |
| **SDH (Sorbitol Desidrogenase)** | Citoplasma | Alta | **Padrão-Ouro (Altamente específica)** | Injúria hepatocelular aguda em equinos e bovinos (muito lábil) |
| **FA (Fosfatase Alcalina)** | Membrana canalicular biliar | Moderada (isoenzimas óssea, placentária e induzida por corticoide em cães) | Baixa (ampla faixa de referência) | Colestase, obstrução biliar e indução farmacológica |
| **GGT (Gama-Glutamiltransferase)** | Membrana canalicular e epitélio ductal | Alta para colestase | **Padrão-Ouro para Colestase em Grandes** | Doença biliar, colangite, colangio-hepatite e esteatose |

\`\`\`mermaid
flowchart TD
    HepaticDamage["Suspeita de Enfermidade Hepatobiliar"] --> EvalLeakage["Avaliação de Extravasamento"]
    HepaticDamage --> EvalInduction["Avaliação de Colestase / Indução"]
    EvalLeakage --> CarnivoresALT["Carnívoros: ALT (citossólica) e AST"]
    EvalLeakage --> LargeAnimalsSDH["Equinos/Ruminantes: SDH (específica) e AST + CK"]
    EvalInduction --> FA_ALP["Fosfatase Alcalina (Isoenzima C-ALP em cães)"]
    EvalInduction --> GGT["GGT: Canalicular e Ductal Biliar"]
    FA_ALP --> FuncTest["Avaliação de Função Real: Ácidos Biliares Pré/Pós-prandiais, Bilirrubinas & Albumina"]
    GGT --> FuncTest
\`\`\`

---

### Teste de Ácidos Biliares & Capacidade Funcional Hepática

As enzimas séricas avaliam **dano celular**, mas **não medem função hepática**. Um paciente com cirrose em estágio terminal pode ter ALT e FA normais simplesmente porque quase não restam hepatócitos para lisar!

Para mensurar a função e a circulação entero-hepática, utiliza-se o **Teste de Tolerância aos Ácidos Biliares**:
* **Fisiologia:** Os ácidos biliares são sintetizados pelo fígado a partir do colesterol, excretados na bile para emulsificar gorduras no duodeno, e mais de 95% são reabsorvidos no íleo terminal retornando pela veia porta (circulação entero-hepática).
* **Protocolo:** Dosagem em jejum de 12h (basal) seguida de dosagem 2 horas após alimentação com dieta rica em lipídios (estímulo contrátil da vesícula pela colecistocinina - CCK).
* **Interpretação:** Valores pós-prandiais marcadamente elevados (> 80-100 umol/L em cães) confirmam falência na depuração portal (insuficiência hepática grave) ou desvio da veia porta para a circulação cava (**Shunt Portossistêmico Congênito ou Adquirido**).

> 📖 Referência Canônica: Thrall et al., *Veterinary Hematology and Clinical Chemistry*, 2nd ed.; Stockham & Scott, *Fundamentals of Veterinary Clinical Pathology*, 2nd ed., Wiley-Blackwell.

> 💡 Pérola Laboratorial: A isoenzima de FA induzida por corticoide (C-ALP) é uma exclusividade dos cães. Em felinos, qualquer elevação discreta de FA é clinicamente relevante, pois a meia-vida da FA felina é de apenas 6 horas (vs. 72 horas no cão) e felinos não produzem isoenzima induzida por corticoide.`
      },
      {
        id: 'sec_biochem_lab4',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Thor (Golden Retriever)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Interpretação de Enzimologia Hepática & Indução Farmacológica',
          patient: {
            name: 'Thor',
            species: 'Canino',
            breed: 'Golden Retriever',
            age: '8 anos',
            weightKg: 36,
            habitatOrEnvironment: 'Domicílio urbano'
          },
          vitals: {
            heartRateBpm: 84,
            respiratoryRateRpm: 20,
            temperatureCelsius: 38.3,
            mucousMembranes: 'Rosadas, hidratadas e sem icterícia',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Paciente epiléptico idiopático controlado há 2 anos com fenobarbital oral (3 mg/kg BID) e recebendo prednisona oral há 3 semanas devido a dermatite atópica sazonal. O cão está ativo, sem êmese, com polidipsia e poliúria moderadas.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Perfil Bioquímico Hepático Completo',
              findings: 'Painel sérico de triagem com perfil de extravasamento, indução e função hepática.',
              abnormalValues: [
                { parameter: 'Fosfatase Alcalina (FA)', value: '1.680 U/L', reference: '20 - 156 U/L', status: 'critical' },
                { parameter: 'Gama-Glutamiltransferase (GGT)', value: '94 U/L', reference: '1 - 10 U/L', status: 'high' },
                { parameter: 'ALT', value: '52 U/L', reference: '10 - 100 U/L', status: 'normal' },
                { parameter: 'AST', value: '30 U/L', reference: '0 - 50 U/L', status: 'normal' },
                { parameter: 'Bilirrubina Total', value: '0.2 mg/dL', reference: '0.1 - 0.4 mg/dL', status: 'normal' },
                { parameter: 'Ácidos Biliares Pós-Prandiais', value: '12 umol/L', reference: '< 25 umol/L', status: 'normal' }
              ]
            }
          ],
          challengePrompt: 'Com FA em 1.680 U/L e ALT normal com ácidos biliares normais, qual é a interpretação patológica correta?',
          decisionOptions: [
            {
              id: 'opt_dec_bio4_1',
              label: 'Indução enzimática benigna da isoenzima C-ALP e GGT estimulada por glicocorticoide e fenobarbital, sem necrose celular ou falência funcional',
              description: 'Reconhecer a indução medicamentosa típica da espécie canina, mantendo o controle epiléptico e reduzindo gradualmente a prednisona.',
              isOptimal: true,
              consequenceText: 'Interpretação perfeita! A elevação isolada colossal de FA associada à GGT sem elevação de ALT descarta necrose hepatocelular. Ácidos biliares normais comprovam função excretora e circulação portal intactas. A causa é a indução transcricional exercida pela prednisona e fenobarbital.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Indução da transcrição do gene da C-ALP por corticoide e fenobarbital',
                mechanism: 'Produção massiva de fosfatase alcalina de membrana sem ruptura celular',
                effect: 'Níveis de ALT basais e ácidos biliares normais',
                clinicalMeaning: 'Evita biópsias hepáticas desnecessárias e suspensão precipitada de anticonvulsivante'
              }
            },
            {
              id: 'opt_dec_bio4_2',
              label: 'Insuficiência hepática aguda grave e indicação de laparotomia imediata para ressecção de lobo hepático',
              description: 'Tratar a FA > 1.500 U/L como indicativo cirúrgico urgente de necrose fulminante.',
              isOptimal: false,
              consequenceText: 'Erro médico grosseiro! A FA não é enzima de necrose e o cão não tem insuficiência (ácidos biliares e bilirrubina normais). Submeter esse animal a cirurgia causaria riscos anestésicos severos sem qualquer lesão passível de remoção.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Interpretação errônea de enzima de indução como lesão cirúrgica',
                mechanism: 'Estresse cirúrgico desnecessário em paciente sem necrose',
                effect: 'Risco de hipotensão, hemorragia e descompensação epiléptica',
                clinicalMeaning: 'Morbidade iatrogênica injustificada'
              }
            },
            {
              id: 'opt_dec_bio4_3',
              label: 'Suspender imediatamente o fenobarbital sem desmame e prescrever antibioticoterapia de amplo espectro',
              description: 'Cortar a medicação anticonvulsivante por receio de toxicidade.',
              isOptimal: false,
              consequenceText: 'Conduta perigosíssima! A retirada abrupta de fenobarbital induz estado de mal epiléptico por hiperexcitabilidade de rebote no SNC, com risco de convulsões contínuas e óbito por hipertermia maligna.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Suspensão brusca de barbitúrico sem evidência de hepatotoxicidade real',
                mechanism: 'Queda súbita dos níveis séricos de fenobarbital e hiperexpressão de receptores GABA',
                effect: 'Crises epilépticas em salvas e status epilepticus',
                clinicalMeaning: 'Risco iminente de morte por estado convulsivo prolongado'
              }
            }
          ],
          learningTakeaways: [
            'A ALT avalia extravasamento de membrana de hepatócitos, enquanto a FA e GGT avaliam indução e colestase.',
            'Cães possuem a isoenzima única C-ALP, altamente sensível a corticosteroides e barbitúricos.',
            'A função hepática real é mensurada por ácidos biliares, amônia e capacidade de síntese de albumina, não pelo valor numérico isolado de FA.'
          ]
        }
      },
      {
        id: 'sec_biochem_ex4',
        type: 'exercise',
        title: 'Exercício Clínico: Cinética de Enzimas Hepáticas',
        exerciseId: 'ex_biochem_04'
      }
    ]
  },
  {
    id: 'lesson_biochem_05_renal_biomarkers',
    moduleId: 'mod_biochemistry',
    title: 'Biomarcadores Renais & Avaliação de Filtração Glomerular',
    shortDescription: 'Creatinina sérica, SDMA, taxa de filtração glomerular (TFG), densidade urinária e razão UPC.',
    estimatedMinutes: 15,
    order: 5,
    concepts: ['concept_biochem_renal_biomarkers'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_biochem_th5',
        type: 'theory',
        title: 'Bioquímica da Filtração Glomerular & Limitações da Creatinina Sérica',
        contentMarkdown: `### A Cinética da Creatinina Sérica

A **creatinina** é um metabólito originado da degradação espontânea e não enzimática da **fosfocreatina** no tecido muscular esquelético:
* Em indivíduos saudáveis, sua taxa de produção diária é constante e proporcional à massa muscular total do animal.
* Ela é eliminada do organismo quase que exclusivamente por **filtração glomerular**, sem reabsorção ou secreção tubular expressiva na maioria das espécies domésticas.

No entanto, a relação entre creatinina sérica e a **Taxa de Filtração Glomerular (TFG)** não é linear, mas hiperbólica:

\`\`\`mermaid
flowchart TD
    Loss["Destruição Progressiva de Néfrons"] --> EarlyStage["Perda de 25% a 40% da TFG"]
    EarlyStage --> SDMA_Early["Elevação Precoce do SDMA (> 14 mcg/dL)"]
    EarlyStage --> Creat_Blind["Creatinina Permanece Falsamente Normal (Zona Cega)"]
    Loss --> MidStage["Perda de 66% da Capacidade Tubular"]
    MidStage --> UrineConcentration["Perda da Concentração Urinária: Isostenúria (1.008 - 1.012)"]
    Loss --> LateStage["Perda de 75% da TFG Total"]
    LateStage --> Creat_Late["Azotemia Tardia: Creatinina Sobe Acima da Referência"]
    SDMA_Early --> IRIS["Diagnóstico e Estadiamento IRIS Precoce"]
    Creat_Late --> IRIS
\`\`\`

---

### O Papel do SDMA (Dimetilarginina Simétrica)

A **Dimetilarginina Simétrica (SDMA)** é um aminoácido metilado liberado no plasma durante a proteólise intranuclear celular contínua:
1. **Independência de Massa Muscular:** Ao contrário da creatinina, o SDMA não sofre qualquer interferência da caquexia ou sarcopenia. Em felinos idosos que perderam 40% de massa muscular, a creatinina pode estar em 1.2 mg/dL ("falsamente saudável"), enquanto o SDMA aponta 24 mcg/dL (doença renal avançada).
2. **Sensibilidade Precoce:** O SDMA eleva-se quando há perda de **25 a 40% da TFG**, permitindo intervenção clínica nefroprotetora meses a anos antes da creatinina ultrapassar o limite laboratorial.
3. **Consenso IRIS (International Renal Interest Society):** Se a creatinina indicar Estágio 1, mas o SDMA estiver persistentemente > 18 mcg/dL, o paciente deve ser reclassificado e manejado terapeuticamente como **Estágio 2**.

---

### Avaliação Urinária: Densidade & Razão UPC

A interpretação da função renal exige **sempre** a análise simultânea da urina (urinálise completa tipo 1):

* **Densidade Urinária (DU):**
  * Capacidade de concentrar a urina em resposta à desidratação:
    * Cão: normal > 1.030.
    * Gato: normal > 1.035.
    * Ruminantes e equinos: normal > 1.025.
  * **Isostenúria (1.008 - 1.012):** O rim perdeu a capacidade de concentrar ou diluir o ultrafiltrado glomerular (a densidade da urina é idêntica à do plasma desproteinizado).
* **Razão Proteína:Creatinina Urinária (UPC):**
  * O padrão-ouro para quantificar proteinúria de origem renal (após descartar hemorragia ou inflamação no sedimento urinário ativo).
  * Felinos: Não proteinúrico (< 0.2), Limítrofe (0.2 - 0.4), **Proteinúrico (> 0.4)**.
  * Caninos: Não proteinúrico (< 0.2), Limítrofe (0.2 - 0.5), **Proteinúrico (> 0.5)**.
  * A proteinúria persistente acelera a fibrose tubulointersticial e é o fator isolado de pior prognóstico para sobrevida na Doença Renal Crônica.

> 📖 Referência Canônica: Thrall et al., *Veterinary Hematology and Clinical Chemistry*, 2nd ed.; *IRIS Staging Guidelines for CKD in Dogs and Cats* (www.iris-kidney.com).

> 💡 Pérola de Residência: Jamais feche diagnóstico de "Azotemia Pré-renal por Desidratação" em um cão ou gato desidratado se a Densidade Urinária estiver em 1.015. Se o paciente estivesse funcionalmente íntegro do ponto de vista renal, a hipovolemia dispararia secreção máxima de ADH e aldosterona, concentrando a urina para > 1.040. Uma DU < 1.030 num animal hipovolêmico comprova falência renal primária intrínseca!`
      },
      {
        id: 'sec_biochem_lab5',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Frajola (Persa Sarcopênico)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Diagnóstico & Estadiamento Precoce da Doença Renal Crônica Felina',
          patient: {
            name: 'Frajola',
            species: 'Felino',
            breed: 'Persa',
            age: '14 anos',
            weightKg: 2.8,
            habitatOrEnvironment: 'Apartamento telado exclusivo'
          },
          vitals: {
            heartRateBpm: 180,
            respiratoryRateRpm: 28,
            temperatureCelsius: 38.1,
            mucousMembranes: 'Rosadas e secas (desidratação estimada em 6%)',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'Tutor relata perda progressiva de peso há 6 meses, com perda evidente de massa muscular epaxial (coluna palpável com facilidade). Apresenta polidipsia e a caixa de areia está sempre encharcada. A creatinina foi considerada "normal" em clínica anterior.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Painel Renal Sanguíneo & Urinário',
              findings: 'Colheita simultânea de sangue e urina por cistocentese ecoguiada estéril.',
              abnormalValues: [
                { parameter: 'Creatinina Sérica', value: '1.4 mg/dL', reference: '0.8 - 2.4 mg/dL', status: 'normal' },
                { parameter: 'SDMA', value: '25 mcg/dL', reference: '0 - 14 mcg/dL', status: 'critical' },
                { parameter: 'Densidade Urinária (DU)', value: '1.016', reference: '> 1.035 (em desidratação)', status: 'low' },
                { parameter: 'Sedimento Urinário', value: 'Inativo (sem bactérias ou hemácias)', reference: 'Inativo', status: 'normal' },
                { parameter: 'Razão UPC Urinária', value: '0.68', reference: '< 0.20', status: 'critical' },
                { parameter: 'Pressão Arterial Sistólica', value: '175 mmHg (Doppler)', reference: '< 140 mmHg', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'A creatinina de 1.4 mg/dL é compatível com a gravidade do quadro clínico de Frajola? Como estadiar e conduzir o paciente segundo as diretrizes IRIS?',
          decisionOptions: [
            {
              id: 'opt_dec_bio5_1',
              label: 'Reclassificar para Doença Renal Crônica IRIS Estágio 2 (baseado no SDMA de 25 mcg/dL), subestadiado como Proteinúrico e Hipertenso, iniciando telmisartana e dieta renal nefroprotetora',
              description: 'Reconhecer que a sarcopenia severa subestima a creatinina sérica e instituir bloqueio do SRAA para controlar a proteinúria e hipertensão glomerular.',
              isOptimal: true,
              consequenceText: 'Conduta nefrológica magistral! Em gatos caquéticos, a perda muscular severa mascara a retenção de creatinina. O SDMA reflete fielmente a queda de mais de 45% da TFG. A telmisartana (bloqueador do receptor AT1 de angiotensina II) reduz a hipertensão intraglomerular, estanca a proteinúria e prolonga a sobrevida.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Uso de SDMA para estadiamento e prescrição de telmisartana',
                mechanism: 'Vasodilatação da arteríola eferente renal com redução da pressão de filtração capilar',
                effect: 'Queda do UPC para < 0.3 e controle da pressão arterial sistólica (< 140 mmHg)',
                clinicalMeaning: 'Interrupção da fibrose nefronal progressiva e estabilização do paciente'
              }
            },
            {
              id: 'opt_dec_bio5_2',
              label: 'Dar alta com segurança afirmando que a função renal está intacta, pois a creatinina está dentro da faixa de normalidade laboratorial',
              description: 'Ignorar o SDMA, a densidade urinária e a proteinúria baseando-se apenas na creatinina de 1.4 mg/dL.',
              isOptimal: false,
              consequenceText: 'Erro negligente fatal! A densidade de 1.016 num gato desidratado prova falência tubular e o SDMA de 25 mcg/dL confirma perda substancial de TFG. Deixar o paciente sem tratamento acelerará o colapso renal para estágio terminal urêmico.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Confiança cega na creatinina em paciente sarcopênico',
                mechanism: 'Ausência de intervenção contra hipertensão e proteinúria lesiva',
                effect: 'Aceleração da glomeruloesclerose e necrose tubular crônica',
                clinicalMeaning: 'Crise urêmica fulminante com necessidade de internação em curto prazo'
              }
            },
            {
              id: 'opt_dec_bio5_3',
              label: 'Prescrever apenas fluidoterapia subcutânea diária sem controlar a proteinúria ou a pressão arterial',
              description: 'Tratar a desidratação sem intervir no sistema renina-angiotensina-aldosterona.',
              isOptimal: false,
              consequenceText: 'Subótimo. A hidratação alivia a azotemia pré-renal sobreposta, mas manter uma pressão arterial sistólica de 175 mmHg e proteinúria UPC 0.68 sem medicação antiproteinúrica levará à perda contínua e rápida de néfrons remanescentes.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Manejo exclusivo com fluidoterapia sem bloqueio do SRAA',
                mechanism: 'Persistência de hiperfiltração e proteinúria tóxica tubular',
                effect: 'Manutenção da esclerose glomerular crônica',
                clinicalMeaning: 'Declínio acelerado da TFG e sobrevida encurtada'
              }
            }
          ],
          learningTakeaways: [
            'A creatinina sérica depende estritamente da massa muscular esquelética e subestima a perda de TFG em animais sarcopênicos.',
            'O SDMA é derivado da metilação proteica nuclear, independe da musculatura e detecta perdas de TFG a partir de 25%.',
            'Uma densidade urinária isostenúrica (< 1.035 no gato) em vigência de desidratação clínica confirma perda de função renal intrínseca.'
          ]
        }
      },
      {
        id: 'sec_biochem_ex5',
        type: 'exercise',
        title: 'Exercício Clínico: Biomarcadores Renais & Estadiamento IRIS',
        exerciseId: 'ex_biochem_05'
      }
    ]
  }
];

// ==========================================
// 2. SISTEMA TEGUMENTAR, ESQUELÉTICO & LOCOMOTOR
// ==========================================
export const LOCOMOTOR_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_locomotor_01',
    conceptId: 'concept_locomotor_laminitis_hoof',
    type: 'multiple_choice',
    prompt: 'Um cavalo Quarto de Milha com sobrecarga acidental de ração apresenta relutância extrema em caminhar, postura de alívio com os membros anteriores estendidos para frente e apoio sobre os talões, pulso digital palpável com forte intensidade e cascos quentes. Ao exame radiográfico em projeção lateromedial, qual é a alteração biomecânica temida?',
    options: [
      {
        id: 'opt_loco_1',
        text: 'Perda do paralelismo entre a parede dorsal do casco e a terceira falange (P3), caracterizando rotação ou afundamento de P3',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! A degradação enzimática das lâminas suspensórias do casco por metaloproteinases rompe a interdigitação derme-epiderme. A forte tração contínua exercida pelo tendão flexor digital profundo puxa a ponta de P3 para baixo em direção à sola.'
      },
      {
        id: 'opt_loco_2',
        text: 'Luxação completa da articulação do boleto com ruptura do ligamento suspensor',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A postura de apoio nos talões com pulso digital forte nos cascos anteriores é a apresentação clássica da fase aguda de laminite (aguamento), não lesão de ligamento suspensor.'
      },
      {
        id: 'opt_loco_3',
        text: 'Fratura cominutiva transversa de osso sesamoide proximal',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Fraturas sesamóideas costumam ser unilaterais agudas em treinos de corrida com efusão articular marcada, não bilaterais em anteriores após sobrecarga de ração.'
      },
      {
        id: 'opt_loco_4',
        text: 'Osteocondrose dissecante (OCD) da articulação tibiotársica',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A OCD é uma afecção de desenvolvimento articular típica de jarretes ou babos em animais jovens, sem calor no casco nem pulso digital em anteriores.'
      }
    ]
  },
  {
    id: 'ex_locomotor_02',
    conceptId: 'concept_locomotor_bone_biomechanics',
    type: 'multiple_choice',
    prompt: 'Em uma fratura diafisária transversa de tíbia em um canino estabilizada cirurgicamente com placa de compressão dinâmica (DCP) com compressão interfragmentar rígida e gap de fratura inferior a 0.01 mm (deformação mecânica / strain < 2%), qual é o padrão biológico de consolidação óssea esperado segundo a Lei de Wolff e os princípios AO/ASIF?',
    options: [
      {
        id: 'opt_loco_2_1',
        text: 'Consolidação óssea primária (direta por contato ou fenda), caracterizada pela formação de cones de corte osteoclásticos seguidos por deposição osteoblástica de ósteons longitudinais (remodelação haversiana direta), sem formação de calo ósseo periosteal visível',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! A consolidação óssea primária requer fixação interna absolutamente rígida (strain < 2%) e contato anatômico milimétrico. Sem micromovimento interfragmentar, não há estímulo para calo cartilaginoso; os osteoclastos perfuram túneis através da linha de fratura (cutting cones) e os osteoblastos depositam novos sistemas de Havers diretamente unindo os cotos corticais.'
      },
      {
        id: 'opt_loco_2_2',
        text: 'Consolidação óssea secundária com calo cartilaginoso exuberante e ossificação endocondral induzida por alta mobilidade da placa',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A consolidação secundária ocorre sob fixação biológica elástica (strain entre 2% e 10%), gerando calo externo cartilaginoso intermediário. Com placa rígida comprimida, a consolidação é direta primária.'
      },
      {
        id: 'opt_loco_2_3',
        text: 'Não união atrófica imediata com reabsorção dos topos ósseos devido à ausência total de circulação perióstea',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A placa rígida bem alinhada propicia contato ósseo íntimo e contato direto celular, não pseudartrose atrófica.'
      },
      {
        id: 'opt_loco_2_4',
        text: 'Metaplasia óssea com deposição primária de osteoide acelular mediada por fibroblastos da fáscia profunda',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A regeneração cortical primária é orquestrada por cones osteoclásticos de remodelamento haversiano celular, não por metaplasia fascial acelular.'
      }
    ]
  },
  {
    id: 'ex_locomotor_03',
    conceptId: 'concept_locomotor_synovial_fluid',
    type: 'multiple_choice',
    prompt: 'A artrocentese diagnóstica da articulação fêmoro-tíbio-patelar de um cão com claudicação aguda sem apoio revela líquido sinovial com coloração turva amarelada, teste de filância (viscosidade) < 0.5 cm, contagem de células nucleadas de 68.000 células/uL com 90% de neutrófilos íntegros e degenerados contendo cocos intracelulares e proteína total de 5.4 g/dL. Qual é o diagnóstico e o mecanismo fisiopatológico do colapso da viscoelasticidade articular?',
    options: [
      {
        id: 'opt_loco_3_1',
        text: 'Artrite séptica bacteriana aguda; o colapso da viscosidade decorre da degradação proteolítica do ácido hialurônico (hialuronano) e da lubricina pelas hialuronidases bacterianas e enzimas lisossomais (elastase, colagenase) liberadas pelos neutrófilos em degranulação',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O líquido sinovial normal é límpido, transparente, acelular (< 3.000 cél/uL, predominantemente mononucleadas) e altamente viscoso (filância > 2.5 cm) devido às longas cadeias poliméricas de hialuronano sintetizadas por sinoviócitos tipo B. Na artrite séptica bacteriana, o influxo massivo de neutrófilos e bactérias degrada enzimaticamente o polímero de ácido hialurônico, liquidificando o fluido sinovial e destruindo a cartilagem articular por condrólise enzimática.'
      },
      {
        id: 'opt_loco_3_2',
        text: 'Osteoartrite degenerativa de baixo grau secundária à ruptura de ligamento cruzado cranial, sem componente inflamatório',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Na osteoartrite a contagem celular situa-se tipicamente entre 3.000 e 5.000 cél/uL, com predomínio mononuclear e sem bactérias intracelulares.'
      },
      {
        id: 'opt_loco_3_3',
        text: 'Hemartrose traumática aguda pura com diluição plasmática simples por sangramento subcondral',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A hemartrose apresenta líquido hemorrágico homogêneo que não coagula (líquido xantocrômico após centrifugação) e relação eritrócitos/leucócitos semelhante à do sangue periférico.'
      },
      {
        id: 'opt_loco_3_4',
        text: 'Artrite imunomediada não erosiva sem consumo de complemento nem ativação neutrofílica',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A presença de cocos bacterianos fagocitados por neutrófilos confirma etiologia infecciosa séptica direta, excluindo artrite imunomediada estéril.'
      }
    ]
  },
  {
    id: 'ex_locomotor_04',
    conceptId: 'concept_locomotor_equine_hoof_biomechanics',
    type: 'multiple_choice',
    prompt: 'Durante a fase de apoio na locomoção do cavalo, qual é a sequência hemodinâmica e mecânica descrita pela teoria da bomba vascular e mecanismo elástico do casco equino para absorver o impacto e bombear o sangue venoso de volta ao membro proximal?',
    options: [
      {
        id: 'opt_loco_4_1',
        text: 'O impacto inicial da ranilha e dos talões no solo comprime o coxim digital fibroelástico e empurra as cartilagens ungulares abaxialmente; essa deformação elástica comprime os plexos venosos coronário e podovaginal, ejetando sangue proximalmente através de veias avalvuladas em direção às veias digitais',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! O mecanismo fisiológico do casco equino depende do contato do terço caudal (ranilha e talões) com o solo. Ao receber o peso corporal, o coxim digital expande-se lateralmente contra as cartilagens alares da terceira falange, forçando a expansão dos talões e comprimindo os densos plexos venosos microvasculares sem válvulas do casco, impulsionando centenas de mililitros de sangue venoso de volta ao coração a cada passada (bomba digital periférica).'
      },
      {
        id: 'opt_loco_4_2',
        text: 'A muralha dorsal do casco sofre contração concêntrica rígida, fechando as artérias digitais para evitar extravasamento sob a sola',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A muralha do casco é viscoelástica e expande-se nos talões (abaxialmente); o fluxo sanguíneo é impulsionado no retorno venoso e não bloqueado arterialmente.'
      },
      {
        id: 'opt_loco_4_3',
        text: 'A terceira falange é empurrada para cima contra o osso navicular, desativando completamente a bursa podotroclear durante o trote',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. P3 apoia sobre o aparato laminar dorsal e a sola; o osso navicular atua como polia de deslizamento para o TFDP mantendo a integridade da bursa podotroclear.'
      },
      {
        id: 'opt_loco_4_4',
        text: 'A linha branca atua como articulação esferoide absorvendo o choque vertical através de rotação axial da ranilha',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A linha branca (zona alba) é a junção anatômica entre a muralha do casco e a sola córnea, sem mobilidade esferoide independente.'
      }
    ]
  },
  {
    id: 'ex_locomotor_05',
    conceptId: 'concept_locomotor_conformation_gait',
    type: 'multiple_choice',
    prompt: 'Um potro Puro Sangue Inglês de 4 meses apresenta desvio angular de carpo valgo moderado a severo (desvio lateral do membro distal ao carpo > 12 graus). A radiografia confirma assimetria de crescimento na fise distal do rádio. Considerando a cronologia de fechamento fisário e a biomecânica esquelética, qual é o princípio cirúrgico e a janela de oportunidade para correção bem-sucedida?',
    options: [
      {
        id: 'opt_loco_5_1',
        text: 'A fise distal do rádio permanece ativa até os 6-9 meses de idade; a correção exige hemitransecção e elevação periosteal no lado côncavo (lateral) para acelerar o crescimento ou transfixação com ponte em fio/parafuso no lado convexo (medial) para restringir temporariamente o crescimento até o alinhamento do eixo',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Em desvios angulares (valgo/varo), a manipulação cirúrgica do crescimento fisário (modulação do crescimento) só funciona enquanto a cartilagem da fise da fise correspondente estiver biologicamente ativa. No rádio distal o fechamento ocorre em torno de 6 a 9 meses (no boleto ocorre bem mais cedo, aos 3-4 meses). No carpo valgo (desvio para fora), o lado medial cresce mais rápido que o lateral; aplica-se retardamento temporário medial (bridging) ou estímulo periosteal lateral (hemicircumferential periosteal transection).'
      },
      {
        id: 'opt_loco_5_2',
        text: 'Aguardar o fechamento completo de todas as fises aos 24 meses para realizar osteotomia corretiva em cunha',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Aguardar 2 anos causará artrose precoce incurável das articulações carpianas e perda irreparável da janela cirúrgica de modulação fisária minimamente invasiva.'
      },
      {
        id: 'opt_loco_5_3',
        text: 'A fise radial fecha aos 45 dias de vida, tornando qualquer intervenção esquelética inútil',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A fise distal do rádio é a que fecha mais tardiamente no membro torácico distal (6-9 meses), permitindo ampla janela de tratamento no potro de 4 meses.'
      },
      {
        id: 'opt_loco_5_4',
        text: 'Colocação de gesso compressivo imobilizando o carpo por 6 meses contínuos sem fisioterapia',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Imobilização rígida prolongada com gesso em potros causa osteopenia por desuso, atrofia tendínea severa e anquilose articular permanente.'
      }
    ]
  }
];

export const LOCOMOTOR_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_locomotor_01_laminitis',
    moduleId: 'mod_locomotor',
    title: 'Fisiopatologia da Laminite Equina & Biomecânica do Casco',
    shortDescription: 'Do gatilho endotóxico à rotação da terceira falange: isquemia laminar, metaloproteinases e manejo ortopédico.',
    estimatedMinutes: 14,
    order: 1,
    concepts: ['concept_locomotor_laminitis_hoof'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_locomotor_th1',
        type: 'theory',
        title: 'A Arquitetura Laminar do Casco & A Catástrofe da Desconexão',
        contentMarkdown: `### Como a Terceira Falange Fica Suspensa no Casco

O equino apoia seu peso corporal sobre a **terceira falange (P3)**. No entanto, P3 não fica simplesmente "apoiada" na sola. Ela fica **literalmente suspensa** dentro da caixa córnea por um engate microscópico magnífico:
* **Lâminas Dérmicas (vivas e vascularizadas)** que se interdigitam firmemente com as **Lâminas Epidérmicas (córneas e insensíveis)**.
* Essa área de superfície interdigitada equivale a quase 1 metro quadrado por casco!

---

### A Cascata Patológica da Laminite Aguda

$$\\text{Sobrecarga de Amido} \\longrightarrow \\text{Morte de Gram-positivos no Ceco} \\longrightarrow \\text{Absorção de Endotoxinas (LPS)} \\longrightarrow \\text{Ativação de MMPs}$$

1. **Gatilho Sistêmico:** Endotoxinas e exotoxinas ativam **Metaloproteinases de Matriz (MMP-2 e MMP-9)**.
2. **Lise da Membrana Basal:** As MMPs degradam as pontes de hemidesmossomos que unem a epiderme à derme laminar.
3. **Isquemia & Trombose:** Vasoconstrição digital intensa gera hipóxia e dor excruciante (pulso digital martelante).
4. **Força Biomecânica Deformante:** O **Tendão Flexor Digital Profundo (TFDP)**, inserido na face flexora de P3, exerce tração mecânica constante para trás. Como as lâminas dorsais estão desfeitas, a ponta de P3 gira dorsalmente e comprime o plexo solar vascular.

\`\`\`mermaid
flowchart TD
    Trig["Sobrecarga de Carboidratos / Cólica / Endotoxemia"] --> LPS["Absorção Sistêmica de Endotoxinas (LPS)"]
    LPS --> MMP["Ativação Enzimática de Metaloproteinases (MMP-2 / MMP-9)"]
    MMP --> BasalLysis["Degradação dos Hemidesmossomos da Membrana Basal"]
    BasalLysis --> Uncoupling["Desconexão entre Lâminas Dérmicas e Epidérmicas"]
    Uncoupling --> TFDP_Pull["Tração Contínua do Tendão Flexor Digital Profundo (TFDP)"]
    TFDP_Pull --> P3_Rotation["Rotação Ventral da Ponta da Terceira Falange (P3)"]
    P3_Rotation --> SolarNecrosis["Compressão do Plexo Solar & Risco de Perfuração da Sola"]
\`\`\`

> 📖 Referência Canônica: Adams and Stashak's Lameness in Horses (Baxter, 7ª ed., Wiley-Blackwell) & Equine Surgery (Auer & Stick, 5ª ed., Elsevier).

> 💡 Pérola Clínica / Prova de Residência: A Crioterapia Distal Contínua (imersão dos membros em água e gelo a 0-4 °C até o carpo/jarrete) iniciada antes da perda estrutural das lâminas reduz a taxa metabólica laminar em 50% e é a única intervenção profilática com nível de evidência I para prevenir a ativação de MMPs endotóxicas.

> ⚠️ Alerta Crítico: Jamais force o equino em crise aguda a caminhar! A marcha quadruplica o torque exercido pelo TFDP sobre a terceira falange, acelerando a rotação de P3 e podendo culminar na perfuração irreversível da sola córnea.`
      },
      {
        id: 'sec_locomotor_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Campeão (Quarto de Milha)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Emergência Podal: Manejo Imediato da Fase Aguda de Laminite',
          patient: {
            name: 'Campeão',
            species: 'Equino',
            breed: 'Quarto de Milha',
            age: '6 anos',
            weightKg: 510,
            habitatOrEnvironment: 'Baia com cama de maravalha'
          },
          vitals: {
            heartRateBpm: 64,
            respiratoryRateRpm: 28,
            temperatureCelsius: 38.3,
            mucousMembranes: 'Rosadas com leve linha tóxica avermelhada',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'O tratador esqueceu a porta do depósito aberta e Campeão consumiu cerca de 12 kg de ração concentrada rica em melaço há aproximadamente 14 horas. Agora encontra-se deitado, reluta bravamente em levantar. Quando forçado a ficar em pé, joga os membros anteriores para frente e apoia nos talões (postura de esquiador). Pulso da artéria digital comum muito amplo bilateralmente nos anteriores.',
          exams: [
            {
              category: 'physical_exam',
              title: 'Exame Podológico e Pinça de Casco',
              findings: 'Calor acentuado na pinça dos cascos anteriores. Resposta de dor extrema à compressão com pinça de casco na região da ponta da ranilha e pinça dorsal.',
              abnormalValues: [
                { parameter: 'Pulso Digital Palpável', value: '4+ (Martelante)', reference: '1+ (Discreto)', status: 'critical' },
                { parameter: 'Teste de Pinça de Casco', value: 'Hiperalgia em pinça', reference: 'Negativo', status: 'critical' }
              ]
            },
            {
              category: 'imaging',
              title: 'Radiografia Lateromedial dos Cascos Anteriores',
              findings: 'Espessamento do tecido mole laminar dorsal (18 mm vs normal 14 mm). Ângulo de rotação de P3 incipiente em 3 graus em relação à muralha.',
              abnormalValues: [
                { parameter: 'Ângulo de Rotação de P3', value: '3.5°', reference: '0° (Paralelo)', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Qual é o protocolo emergencial de resgate para impedir a rotação catastrófica de P3?',
          decisionOptions: [
            {
              id: 'opt_dec_loco_1',
              label: 'Crioterapia contínua imersiva dos dígitos em gelo + Flunixina Meglumina + Cama espessa',
              description: 'Manter membros imersos em água e gelo até o boleto por 48h, AINE potente para endotoxemia e elevação de talões para relaxar o TFDP.',
              isOptimal: true,
              consequenceText: 'Conduta perfeita e embasada pela ciência podológica! A crioterapia contínua (temperatura digital < 10°C) causa vasoconstrição fisiológica protetora e reduz drasticamente a atividade das metaloproteinases (MMPs), salvando o aparato laminar da digestão enzimática.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Crioterapia digital intensiva e flunixina em dose antiendotóxica',
                mechanism: 'Inibição termossensível da atividade de metaloproteinases e bloqueio de eicosanoides inflamatórios',
                effect: 'Preservação da membrana basal e das pontes de interdigitação laminar',
                clinicalMeaning: 'Estabilização de P3 sem progressão de rotação, alívio da dor e preservação da vida atlética do equino'
              }
            },
            {
              id: 'opt_dec_loco_2',
              label: 'Exercitar o animal ao trote na guia para ativar a circulação podal',
              description: 'Forçar caminhadas e trote para supostamente "bombear o sangue estagnado do casco".',
              isOptimal: false,
              consequenceText: 'Desastre iatrogênico fatal! Forçar um equino em fase aguda de laminite a andar rompe imediatamente as poucas lâminas sobreviventes. A força de tração do TFDP arrancará P3 da muralha e a ponta do osso perfurará a sola do casco (sole drop).',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Exercício forçado em lâminas desfeitas e fragilizadas',
                mechanism: 'Impacto mecânico somado à tração violenta do flexor digital profundo',
                effect: 'Ruptura completa do aparelho suspensor de P3 e perfuração de sola',
                clinicalMeaning: 'Necrose por exposição óssea de P3 com necessidade de eutanásia humanitária'
              }
            },
            {
              id: 'opt_dec_loco_3',
              label: 'Administrar apenas antibiótico intramuscular de amplo espectro',
              description: 'Prescrever penicilina com estreptomicina e aguardar sem crioterapia ou AINE.',
              isOptimal: false,
              consequenceText: 'Inadequado. A laminite aguda não é uma infecção bacteriana do casco, mas uma resposta endotóxica e inflamatória sistêmica. Sem crioterapia e sem anti-inflamatório, o aparato suspensor sucumbirá.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Foco exclusivo em antibioticoterapia desnecessária',
                mechanism: 'Ausência de controle da inflamação laminar e da atividade enzimática destrutiva',
                effect: 'Progressão da separação mecânica entre lâminas dérmicas e epidérmicas',
                clinicalMeaning: 'Aumento do ângulo de rotação de P3 e dor crônica incapacitante'
              }
            }
          ],
          learningTakeaways: [
            'A crioterapia distal contínua iniciada precocemente é a única intervenção que comprovadamente impede a falência laminar estrutural.',
            'O tendão flexor digital profundo é o grande vetor de força que traciona P3 para baixo quando a fixação laminar dorsal se rompe.',
            'Nunca movimente um cavalo com dor aguda de laminite: o repouso absoluto com cama espessa e suporte mecânico de ranilha é obrigatório.'
          ]
        }
      },
      {
        id: 'sec_locomotor_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Biomecânica & Laminite',
        exerciseId: 'ex_locomotor_01'
      }
    ]
  },
  {
    id: 'lesson_locomotor_02_bone_biomechanics',
    moduleId: 'mod_locomotor',
    title: 'Biomecânica Óssea, Lei de Wolff & Consolidação de Fraturas',
    shortDescription: 'Estrutura trabecular e cortical, teoria da deformação (strain) de Perren, cicatrização primária vs. secundária.',
    estimatedMinutes: 14,
    order: 2,
    concepts: ['concept_locomotor_bone_biomechanics'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_locomotor_th2',
        type: 'theory',
        title: 'Física & Biologia do Tecido Ósseo: A Lei de Wolff & Teoria do Strain',
        contentMarkdown: `### A Estrutura Bifásica do Osso

O osso é um material compósito anisotrópico formado por:
* **Matriz Orgânica (35%):** Predominantemente colágeno tipo I e proteoglicanos, conferindo resistência à **tração e flexão**.
* **Matriz Inorgânica (65%):** Cristais de hidroxiapatita [Ca10(PO4)6(OH)2], conferindo rigidez e resistência à **compressão**.

---

### A Lei de Wolff & O Mecanóstato de Frost

A **Lei de Wolff** estabelece que o osso se remodela adaptativamente em resposta às cargas mecânicas que sofre:
1. Sob carga fisiológica, microdeformações ósseas geram potenciais elétricos (piezoeletricidade) e fluxo de fluido canalicular detectado pelos **osteócitos** (os verdadeiros mecanossensores).
2. Se a tensão mecânica for elevada (sem ultrapassar a resistência plástica), os osteoblastos depositam nova matriz lamelar, espessando a cortical.
3. Se a carga mecânica for nula (desuso ou proteção excessiva por placas ultra-rígidas), ocorre osteopenia por reabsorção osteoclástica (**stress shielding**).

---

### Teoria do Strain Interfragmentar de Perren

A deformação do tecido de reparo no foco de fratura (**strain** $\\varepsilon$) dita o tipo de tecido capaz de sobreviver entre os fragmentos:

$$\\varepsilon = \\frac{\\Delta L}{L}$$

* **Strain > 100%:** Nenhum tecido se forma (não-união / pseudartrose).
* **Strain entre 10% e 100%:** Apenas tecido fibroso de granulação sobrevive.
* **Strain entre 2% e 10%:** Tecido cartilaginoso tolera essa deformação, permitindo a **Consolidação Secundária (Indireta)** com formação de calo cartilaginoso e posterior ossificação endocondral.
* **Strain < 2% (com gap < 0.01 mm):** Condição de estabilidade absoluta obtida por compressão rígida (DCP/parafuso lag). O osso lamelar é capaz de atravessar o gap diretamente sem calo: **Consolidação Primária (Direta por contato ou fenda)**.

\`\`\`mermaid
flowchart TD
    Fracture["Fratura Cortical Diafisária"] --> FixChoice["Escolha da Estabilidade Mecânica"]
    FixChoice --> AbsStab["Estabilidade Absoluta (Strain < 2%, Gap < 0.01 mm)"]
    FixChoice --> RelStab["Estabilidade Relativa (Strain 2-10%, Fixação Elástica)"]
    AbsStab --> CutCones["Cones de Corte Osteoclásticos Atravessam a Fratura"]
    CutCones --> DirectHealing["Consolidação Primária: Ósteons Diretos Sem Calo"]
    RelStab --> CartCallus["Formação de Calo Cartilaginoso Periosteal"]
    CartCallus --> EndoOssif["Ossificação Endocondral & Remodelação Tardia"]
\`\`\`

> 📖 Referência Canônica: Fossum et al., *Small Animal Surgery*, 5th ed., Elsevier; Brinker, Piermattei and Flo's *Handbook of Small Animal Orthopedics and Fracture Repair*, 5th ed.`
      },
      {
        id: 'sec_locomotor_lab2',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Rex (Pastor Alemão)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Planejamento Biomecânico de Fixação Rígida vs. Biológica',
          patient: {
            name: 'Rex',
            species: 'Canino',
            breed: 'Pastor Alemão',
            age: '2 anos',
            weightKg: 34,
            habitatOrEnvironment: 'Casa com quintal'
          },
          vitals: {
            heartRateBpm: 110,
            respiratoryRateRpm: 32,
            temperatureCelsius: 38.8,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Atropelado há 3 horas. Apresenta fratura transversa simples fechada de terço médio da diáfise tibial direita. Extremidade do membro aquecida e com pulso pedioso palpável.',
          exams: [
            {
              category: 'imaging',
              title: 'Radiografia Ortogonal de Tíbia e Fíbula Direitas',
              findings: 'Fratura transversa simples de diáfise tibial média (Classificação AO 42-A3) com 100% de contato cortical possível.',
              abnormalValues: [
                { parameter: 'Linha de Fratura', value: 'Transversa simples', reference: 'Osso íntegro', status: 'critical' },
                { parameter: 'Desvio Angular', value: '25° craniolateral', reference: '0°', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Para uma fratura transversa simples em cão jovem com excelente contato cortical, qual método de fixação e conceito biomecânico oferece consolidação anatômica ideal?',
          decisionOptions: [
            {
              id: 'opt_dec_loco2_1',
              label: 'Redução anatômica aberta com placa DCP em modo de compressão dinâmica para alcançar estabilidade absoluta (strain < 2%) e consolidação primária',
              description: 'Comprimir rigidamente os cotos corticais, eliminando o gap de fratura e permitindo remodelação haversiana direta sem calo.',
              isOptimal: true,
              consequenceText: 'Excelente decisão cirúrgica! Fraturas transversas simples toleram e se beneficiam enormemente da compressão interfragmentar. O strain fica reduzido a menos de 2%, permitindo que os cones de corte osteoclásticos cruzem a linha de fratura diretamente, proporcionando apoio funcional precoce.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Compressão rígida interfragmentar com placa DCP',
                mechanism: 'Redução do strain local para < 2% e restauração da estabilidade cortical',
                effect: 'Consolidação primária direta sem calo periosteal exuberante',
                clinicalMeaning: 'Retorno precoce da função com alinhamento articular perfeito'
              }
            },
            {
              id: 'opt_dec_loco2_2',
              label: 'Colocação de pino intramedular único frouxo sem qualquer fixação de rotação',
              description: 'Introduzir um pino de Steinmann fino preenchendo apenas 30% do canal medular.',
              isOptimal: false,
              consequenceText: 'Erro biomecânico grave! Um pino intramedular isolado não resiste a forças de torção, cisalhamento ou colapso axial. O strain excederá 100%, gerando instabilidade perpétua, não-união e migração dolorosa do pino.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de pino frouxo que não neutraliza forças de torção',
                mechanism: 'Strain interfragmentar excessivo com cisalhamento contínuo',
                effect: 'Fibrose cicatricial sem mineralização e colapso do alinhamento',
                clinicalMeaning: 'Pseudartrose dolorosa e claudicação permanente'
              }
            },
            {
              id: 'opt_dec_loco2_3',
              label: 'Tratamento puramente conservador com tala de Robert Jones por 12 semanas',
              description: 'Tentar imobilizar externamente a tíbia sem cirurgia.',
              isOptimal: false,
              consequenceText: 'Inadequado para um cão ativo de 34 kg. A tíbia proximal e a fíbula sofrerão rotação dentro da bandagem, resultando em desvio angular, encurtamento do membro e contratura muscular do quadríceps.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Imobilização externa instável em paciente de grande porte',
                mechanism: 'Micromovimentação rotacional descontrolada no foco de fratura',
                effect: 'Consolidação viciosa em valgo ou pseudartrose fibrocartilaginosa',
                clinicalMeaning: 'Deformidade óssea permanente e osteoartrite precoce do joelho'
              }
            }
          ],
          learningTakeaways: [
            'A consolidação óssea primária requer redução anatômica e estabilidade absoluta com strain < 2%.',
            'Fraturas transversas simples são a indicação clássica de placas em modo de compressão.',
            'Pinos intramedulares isolados não neutralizam forças de torção e jamais devem ser usados como método único em fraturas diafisárias.'
          ]
        }
      },
      {
        id: 'sec_locomotor_ex2',
        type: 'exercise',
        title: 'Exercício Clínico: Biomecânica da Consolidação Óssea',
        exerciseId: 'ex_locomotor_02'
      }
    ]
  },
  {
    id: 'lesson_locomotor_03_synovial_joints',
    moduleId: 'mod_locomotor',
    title: 'Fisiologia Articular, Membrana Sinovial & Análise de Líquido Sinovial',
    shortDescription: 'Sinoviócitos tipo A/B, viscoelasticidade do ácido hialurônico, artrocentese e diferenciação de artrite séptica vs. osteoartrite.',
    estimatedMinutes: 14,
    order: 3,
    concepts: ['concept_locomotor_synovial_fluid'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_locomotor_th3',
        type: 'theory',
        title: 'Citologia & Bioquímica do Líquido Sinovial',
        contentMarkdown: `### Morfologia da Membrana Sinovial

A membrana sinovial reveste a face interna da cápsula articular (exceto sobre a cartilagem articular) e é composta por duas camadas:
1. **Íntima Sinovial:** Formada por 1 a 3 camadas de células especializadas chamadas **sinoviócitos**:
   * **Sinoviócitos Tipo A (Macrofágicos):** Células fagocíticas derivadas da medula óssea responsáveis pela depuração de detritos articulares.
   * **Sinoviócitos Tipo B (Fibroblásticos):** Células secretoras responsáveis pela síntese ativa de **Ácido Hialurônico (Hialuronano)** e **Lubricina (PRG4)**.
2. **Subíntima Sinovial:** Tecido conjuntivo vascularizado e inervado que fornece suporte nutricional.

---

### Origem & Propriedades Biofísicas do Líquido Sinovial

O líquido sinovial normal é um **ultrafiltrado plasmático** modificado pela adição de macromoléculas sintetizadas pelos sinoviócitos tipo B:
* **Hialuronano:** Polímero gigante de glicosaminoglicanos que confere **viscoelasticidade não newtoniana** ao fluido (em repouso ou movimentos lentos atua como lubrificante viscoso; sob impactos rápidos e de alta frequência de cisalhamento, atua como amortecedor elástico).
* **Lubricina:** Glicoproteína que reveste diretamente a superfície da cartilagem, proporcionando lubrificação de contorno (boundary lubrication) com coeficiente de atrito menor que o do gelo sobre o gelo!

---

### Tabela de Interpretação Artrocentética Comparativa

| Parâmetro | Articulação Normal | Osteoartrite (Degenerativa) | Artrite Imunomediada (IMPA) | Artrite Séptica Bacteriana |
| :--- | :--- | :--- | :--- | :--- |
| **Aparência / Cor** | Transparente / Incolor a amarelo-palha | Transparente a levemente turvo | Turvo a serossanguinolento | **Opaco / Turvo / Purulento** |
| **Viscosidade / Filância** | Alta (> 2.5 cm em fita contínua) | Moderada a normal | Baixa | **Colapsada (< 0.5 cm, goteja como água)** |
| **Coágulo de Mucina** | Firme / Coeso em ácido acético | Firme a friável | Friável | **Grumoso ou ausente** |
| **Proteína Total** | < 2.5 g/dL | 2.5 - 3.5 g/dL | > 3.5 g/dL | **> 4.5 g/dL** |
| **Células Nucleadas** | < 3.000 / uL | 3.000 - 5.000 / uL | 5.000 - 20.000 / uL | **> 40.000 - 100.000 / uL** |
| **Diferencial Citológico** | > 90% Células mononucleadas | > 85% Mononucleadas / macrófagos | > 50-70% Neutrófilos não degenerados | **> 85-95% Neutrófilos degenerados com bactérias** |

\`\`\`mermaid
flowchart TD
    SynovialPuncture["Artrocentese com Agulha Fina"] --> AssessColor["Avaliação Macroscópica: Cor, Turbidez e Filância"]
    AssessColor --> NormalVisc["Viscosidade Alta (> 2.5 cm) & Claro -> Normal ou Trauma Inicial"]
    AssessColor --> DegradedVisc["Viscosidade Colapsada (< 0.5 cm) & Turvo"]
    DegradedVisc --> CytologyLab["Citocentrifugação & Contagem Celular"]
    CytologyLab --> LowCells["< 5.000 cél/uL (Mononucleares) -> Doença Articular Degenerativa (DJD)"]
    CytologyLab --> HighPoly["5.000 - 20.000 cél/uL (Neutrófilos Íntegros) -> Poliartrite Imunomediada"]
    CytologyLab --> SepticCrush["> 40.000 cél/uL (Neutrófilos Degenerados + Bactérias) -> Artrite Séptica Emergencial"]
\`\`\`

> 📖 Referência Canônica: Thrall et al., *Veterinary Hematology and Clinical Chemistry*, 2nd ed.; Auer & Stick, *Equine Surgery*, 5th ed., Elsevier.

> ⚠️ Alerta de Emergência: A artrite séptica é uma emergência ortopédica absoluta. As enzimas lisossomais dos neutrófilos destroem a cartilagem hialina de forma irreversível em menos de 48 a 72 horas. O tratamento requer lavagem articular copiosa sob anestesia e antibioticoterapia imediata.`
      },
      {
        id: 'sec_locomotor_lab3',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Trovão (Quarto de Milha)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Artrocentético da Efusão Fêmorotibial Aguda',
          patient: {
            name: 'Trovão',
            species: 'Equino',
            breed: 'Quarto de Milha',
            age: '5 anos',
            weightKg: 490,
            habitatOrEnvironment: 'Haras / Piquete com cerca de madeira'
          },
          vitals: {
            heartRateBpm: 60,
            respiratoryRateRpm: 24,
            temperatureCelsius: 39.2,
            mucousMembranes: 'Rosadas e úmidas',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Cavalo sofreu ferimento perfurante lacerado na face medial do joelho (solda da cerca) há 24h. Apresenta claudicação grau 5/5 no membro pélvico esquerdo (sem apoio de peso). A articulação femorotibial está visivelmente distendida, flutuante e muito quente.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Análise do Líquido Sinovial Articular',
              findings: 'Artrocentese em condições estéreis na bursa femorotibial medial.',
              abnormalValues: [
                { parameter: 'Aspecto', value: 'Turvo / Purulento', reference: 'Transparente incolor', status: 'critical' },
                { parameter: 'Viscosidade', value: 'Colapso total (aquoso)', reference: '> 2.5 cm contínuo', status: 'critical' },
                { parameter: 'Contagem de Leucócitos', value: '82.000 / uL', reference: '< 1.000 / uL em equinos', status: 'critical' },
                { parameter: 'Neutrófilos Degenerados', value: '94%', reference: '< 10%', status: 'critical' },
                { parameter: 'Proteína Total Sinovial', value: '5.8 g/dL', reference: '< 2.0 g/dL', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com líquido purulento e 82.000 neutrófilos/uL confirmando sepse articular, qual conduta cirúrgica preserva a articulação?',
          decisionOptions: [
            {
              id: 'opt_dec_loco3_1',
              label: 'Lavagem articular endoscópica/artroscópica imediata com grande volume (10 a 20 L de ringer lactato estéril) + perfusão regional intravenosa com amicacina',
              description: 'Remover debris necróticos e enzimas colagenolíticas por diluição forçada e concentrar antibiótico no tecido sinovial.',
              isOptimal: true,
              consequenceText: 'Conduta salvadora padrão-ouro da medicina equina! A lavagem sob pressão remove as bactérias, fibrina e proteases dos neutrófilos antes que a cartilagem sofra condrólise completa. A perfusão regional alcança concentrações de amicacina na membrana sinovial 50 vezes superiores à via sistêmica.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Lavagem articular em alto volume e perfusão com amicacina',
                mechanism: 'Remoção mecânica de proteases neutrofílicas e erradicação de biofilme bacteriano',
                effect: 'Preservação da matriz cartilaginosa e restauração da viscosidade sinovial',
                clinicalMeaning: 'Cura da infecção articular com recuperação da vida atlética do equino'
              }
            },
            {
              id: 'opt_dec_loco3_2',
              label: 'Injetar 100 mg de acetato de triancinolona intrarticular para cessar a dor e a inflamação',
              description: 'Aplicar corticosteroide de depósito potente diretamente dentro da articulação séptica.',
              isOptimal: false,
              consequenceText: 'Desastre iatrogênico gravíssimo! Administrar corticosteroide dentro de uma articulação infectada suprime a fagocitose residual, potencializa a proliferação bacteriana geométrica e causa destruição total da articulação em 48 horas.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Injeção de corticoide em cavidade articular infectada',
                mechanism: 'Imunossupressão intra-articular total com aceleração da lise cartilaginosa',
                effect: 'Osteomielite subcondral e luxação patelar destrutiva',
                clinicalMeaning: 'Artrite séptica fulminante intratável com indicação de eutanásia'
              }
            },
            {
              id: 'opt_dec_loco3_3',
              label: 'Manter apenas anti-inflamatório sistêmico e aguardar 7 dias pelo resultado do antibiograma sem lavagem',
              description: 'Tratar com fenilbutazona oral aguardando cultura.',
              isOptimal: false,
              consequenceText: 'Conduta negligente. Em 7 dias de sepse articular não lavada, a hialuronidase e a colagenase neutrofílica destruirão 100% da espessura da cartilagem hialina, levando a anquilose dolorosa permanente.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Demora na intervenção mecânica de lavagem',
                mechanism: 'Ação contínua de enzimas lisossomais sobre proteoglicanos da cartilagem',
                effect: 'Erosão subcondral óssea irreversível',
                clinicalMeaning: 'Claudicação permanente incapacitante'
              }
            }
          ],
          learningTakeaways: [
            'A artrite séptica cursa com colapso da viscosidade (filância < 0.5 cm) e contagem celular > 40.000 cél/uL com neutrófilos degenerados.',
            'A lavagem articular imediata em alto volume é mandatória para evacuar as enzimas líticas antes da condrólise.',
            'Nunca injete corticosteroides intrarticulares sem descartar categoricamente infecção prévia por artrocentese.'
          ]
        }
      },
      {
        id: 'sec_locomotor_ex3',
        type: 'exercise',
        title: 'Exercício Clínico: Citologia & Patologia Sinovial',
        exerciseId: 'ex_locomotor_03'
      }
    ]
  },
  {
    id: 'lesson_locomotor_04_hoof_anatomy',
    moduleId: 'mod_locomotor',
    title: 'Morfologia Funcional & Mecanismo Biomecânico do Casco Equino',
    shortDescription: 'Estrutura tridimensional do casco, coxim digital, ranilha, cartilagens alares e bomba vascular hemodinâmica.',
    estimatedMinutes: 14,
    order: 4,
    concepts: ['concept_locomotor_equine_hoof_biomechanics'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_locomotor_th4',
        type: 'theory',
        title: 'Arquitetura Tridimensional & Hemodinâmica do Estojo Córneo',
        contentMarkdown: `### Anatomia Regional do Casco

O casco equino é uma estrutura dermoepidérmica altamente modificada adaptada para suportar forças de impacto de várias toneladas durante o salto ou corrida em alta velocidade:
* **Muralha Córnea (Estrato Médio):** Composta por túbulos córneos paralelos imersos em matriz intertubular rica em queratina de alto teor de cisteína e pontes dissulfeto.
* **Linha Branca (Zona Alba):** Junção interdigitada visível na face solar que une a muralha à sola, atuando como amortecedor de cisalhamento.
* **Ranilha (Cunha Córnea):** Estrutura em formato de "V" elástica e rica em água (40-50% de umidade), essencial para o contato com o solo e sensação proprioceptiva.
* **Coxim Digital:** Massa fibrocartilaginosa e adiposa localizada acima da ranilha e entre as cartilagens ungulares (colaterais alares).

---

### O Mecanismo Biomecânico de Amortecimento & Expansão

A marcha do cavalo não é um impacto rígido sobre os ossos, mas um processo dinâmico de dissipação elástica de energia:
1. **Aterrissagem com os Talões:** O cavalo saudável apoia primeiramente a porção caudal do casco (ranilha e talões).
2. **Compressão do Coxim Digital:** A ranilha transfere a pressão do solo para o coxim digital, empurrando as **cartilagens ungulares abaxialmente (para fora)**.
3. **Expansão dos Talões:** O estojo córneo abre-se lateralmente na região dos quartos e talões (afastamento de 2 a 5 mm a cada passada), absorvendo até 70% da energia de impacto.
4. **Bomba Vascular Podal:** Esse movimento de expansão comprime e descomprime os plexos venosos podovaginais desprovidos de válvulas, empurrando o sangue em direção ascendente pelas veias digitais (mecanismo que substitui a ação da musculatura da panturrilha inexistente na porção distal do membro equino).

\`\`\`mermaid
flowchart TD
    HeelStrike["Impacto do Casco: Aterrissagem com os Talões no Solo"] --> FrogLoad["Pressão Mecânica na Ranilha & Coxim Digital"]
    FrogLoad --> AbaxialSplay["Afastamento Abaxial das Cartilagens Ungulares Alares"]
    AbaxialSplay --> HeelExpand["Expansão dos Talões e Parede dos Quartos (2-5 mm)"]
    HeelExpand --> ShockAbsorb["Dissipação Elástica de 70% da Energia Cinética"]
    HeelExpand --> VenousCompress["Compressão dos Plexos Venosos Digitais"]
    VenousCompress --> BloodPump["Retorno Venoso Ascendente em Direção ao Coração"]
\`\`\`

> 📖 Referência Canônica: Adams and Stashak's *Lameness in Horses*, 7th ed.; Pollitt, *The Illustrated Guide to the Foot of the Horse*, Manson Publishing.

> 💡 Pérola Podológica: Ferraduras que fecham excessivamente os talões ou cravos colocados atrás do ponto de maior largura do casco (linha de curvatura máxima) bloqueiam a expansão fisiológica do casco. Isso gera atrofia de ranilha, casco encastelado (contraído) e sobrecarga crônica do osso navicular e bursa podotroclear.`
      },
      {
        id: 'sec_locomotor_lab4',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Sultão (Mangalarga Marchador)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Podológico de Casco Contraído & Síndrome Navicular',
          patient: {
            name: 'Sultão',
            species: 'Equino',
            breed: 'Mangalarga Marchador',
            age: '8 anos',
            weightKg: 460,
            habitatOrEnvironment: 'Baia com piso de cimento'
          },
          vitals: {
            heartRateBpm: 44,
            respiratoryRateRpm: 16,
            temperatureCelsius: 37.8,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Animal apresenta passos curtos, relutância em descer ladeiras e claudicação intermitente que piora em círculos fechados sobre solo duro. Ao exame dos cascos anteriores, nota-se pinça excessivamente longa, talões baixos colapsados e ranilhas atróficas sem contato com o solo.',
          exams: [
            {
              category: 'physical_exam',
              title: 'Exame de Casqueamento e Eixo Podofalângico',
              findings: 'Eixo podofalângico quebrado caudalmente (ângulo do casco 44° vs normal 52°). Teste de extensão em cunha positivo para dor na região de bursa navicular.',
              abnormalValues: [
                { parameter: 'Ângulo de Casco em Pinça', value: '44°', reference: '50° - 54°', status: 'low' },
                { parameter: 'Comprimento da Pinça', value: '11.5 cm', reference: '< 9.0 cm', status: 'high' },
                { parameter: 'Largura de Talões', value: 'Estreita / Contraída', reference: 'Ampla e simétrica', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Qual protocolo de casqueamento e ferrageamento corretivo restaura a biomecânica fisiológica e o amortecimento?',
          decisionOptions: [
            {
              id: 'opt_dec_loco4_1',
              label: 'Recuo da pinça (breakover facilitado) com restauração do alinhamento do eixo podofalângico e ferradura com suporte caudal de ranilha (bar shoe ou palmilha de silicone)',
              description: 'Aliviar a tensão do tendão flexor digital profundo, elevar os talões colapsados e devolver o contato da ranilha com o solo para reativar o coxim digital.',
              isOptimal: true,
              consequenceText: 'Excelente conduta podológica! O recuo do breakover diminui o braço de alavanca dorsal na decolagem do passo, reduzindo a pressão do TFDP sobre o osso navicular. O suporte caudal estimula a expansão dos talões e reativa a circulação venosa podal.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Casqueamento funcional com recuo de breakover e suporte de ranilha',
                mechanism: 'Alinhamento do eixo podofalângico e descompressão da bursa podotroclear',
                effect: 'Redução da força de compressão sobre o osso navicular e expansão dos talões',
                clinicalMeaning: 'Eliminação da claudicação e recuperação da amplitude da passada'
              }
            },
            {
              id: 'opt_dec_loco4_2',
              label: 'Rebaixar ainda mais os talões para obrigar o cavalo a apoiar apenas na pinça',
              description: 'Aumentar o comprimento da pinça para esticar o tendão.',
              isOptimal: false,
              consequenceText: 'Erro desastroso! Rebaixar os talões agrava o eixo quebrado caudalmente, aumentando exponencialmente a tração do flexor digital profundo e esmagando o osso navicular contra a segunda falange.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Aumento da alavanca de pinça e redução de talões',
                mechanism: 'Tensão máxima contínua no TFDP comprimindo o osso navicular',
                effect: 'Erosão fibrocartilaginosa do navicular e fraturas por avulsão ligamentar',
                clinicalMeaning: 'Claudicação intratável de grau elevado'
              }
            },
            {
              id: 'opt_dec_loco4_3',
              label: 'Neurectomia digital palmar imediata bilateral sem casqueamento corretivo',
              description: 'Seccionar os nervos digitais palmares para eliminar a dor sem corrigir o casco.',
              isOptimal: false,
              consequenceText: 'Conduta contraindicada e perigosa como primeira linha. A neurectomia sem alinhamento mecânico mascara a lesão; o animal continuará traumatizando o navicular e corre alto risco de ruptura do TFDP e neuroma de coto doloroso.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Denervação sensitiva mantendo o defeito biomecânico destrutivo',
                mechanism: 'Perda da propriocepção protetora com impacto traumático cego continuado',
                effect: 'Degeneração óssea acelerada oculta',
                clinicalMeaning: 'Complicações graves a longo prazo e perda de função esportiva'
              }
            }
          ],
          learningTakeaways: [
            'O contato da ranilha e a expansão dos talões são indispensáveis para a bomba hemodinâmica podal.',
            'A conformação pinça longa/talão baixo sobrecarrega criticamente o osso navicular e a bursa podotroclear.',
            'O casqueamento balanceado com recuo de breakover é a base do tratamento da síndrome navicular.'
          ]
        }
      },
      {
        id: 'sec_locomotor_ex4',
        type: 'exercise',
        title: 'Exercício Clínico: Biomecânica do Casco Equino',
        exerciseId: 'ex_locomotor_04'
      }
    ]
  },
  {
    id: 'lesson_locomotor_05_conformation_gait',
    moduleId: 'mod_locomotor',
    title: 'Avaliação Conformativa, Dinâmica de Aprumos & Podologia Balanceada',
    shortDescription: 'Eixos podofalângicos, desvios angulares (valgo/varo) e flexurais em potros e bezerros, cronologia de fechamento fisário.',
    estimatedMinutes: 15,
    order: 5,
    concepts: ['concept_locomotor_conformation_gait'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_locomotor_th5',
        type: 'theory',
        title: 'Semiologia dos Aprumos & Deformidades Angulares e Flexurais',
        contentMarkdown: `### Avaliação Estática e Dinâmica dos Membros

O exame conformativo dos membros locomotores é realizado com o animal em estação sobre piso plano e uniforme, observando-o de frente, de perfil e por trás, seguido pela avaliação ao passo e ao trote em linha reta e em círculos:
* **Eixo Podofalângico:** Linha reta contínua que deve passar paralelamente através do eixo longitudinal da primeira falange (P1), segunda falange (P2) e terceira falange (P3).
* **Desvios Angulares:**
  * **Valgo (Valgus):** Desvio lateral do membro distal em relação à articulação afetada (ex: carpo valgo, "joelho para dentro e pés para fora").
  * **Varo (Varus):** Desvio medial do membro distal em relação à articulação afetada (ex: carpo varo, "cambota").

---

### Cronologia do Fechamento Fisário & Janela Terapêutica

A cartilagem de crescimento (fise) é a única responsável pelo crescimento ósseo longitudinal. Qualquer manipulação corretiva ortopédica em potros deve respeitar a janela biológica de atividade fisária:

| Articulação / Fise | Desvio Típico | Janela Ótima para Manejo | Fechamento Fisiológico Completo |
| :--- | :--- | :--- | :--- |
| **Fise Distal do Terceiro Metacárpico/Metatársico (MC3/MT3)** | Boleto valgo / varo | **Primeiras 4 a 6 semanas de vida** | **3 a 4 meses** (janela muito curta!) |
| **Fise Distal da Tíbia** | Jarrete valgo / varo | **Até 3 a 4 meses** | **6 a 8 meses** |
| **Fise Distal do Rádio** | Carpo valgo / varo | **Até 4 a 6 meses** | **6 a 9 meses** |

\`\`\`mermaid
flowchart TD
    AngularDev["Detecção de Deformidade Angular em Potro Jovem"] --> AgeCheck{"Idade do Paciente & Localização Fisária"}
    AgeCheck -- "Boleto (< 2 meses)" --> FetlockWindow["Fise Distal de MC3 Ativa: Resposta Rápida"]
    AgeCheck -- "Boleto (> 4 meses)" --> ClosedPhysis["Fise Fechada: Resta Apenas Osteotomia em Cunha"]
    AgeCheck -- "Carpo (< 6 meses)" --> CarpalWindow["Fise Distal do Rádio Ativa: Excelente Janela"]
    CarpalWindow --> MildDev["Desvio Leve (< 8°): Casqueamento Corretivo & Repouso em Baia"]
    CarpalWindow --> SevereDev["Desvio Severo (> 10°): Modulação Fisária Cirúrgica (Bridging / Transecção Periosteal)"]
\`\`\`

---

### Cirurgia de Modulação Fisária

1. **Aceleração do Crescimento (Hemitransecção Periosteal):** Realizada no lado de crescimento mais lento (**lado côncavo**). A liberação da tensão do periósteo estimula uma onda transitória de crescimento na fise subjacente.
2. **Retardamento Temporário (Transfixação com Fio ou Parafuso / Bridging):** Realizada no lado de crescimento acelerado (**lado convexo**). Uma ponte metálica rígida impede o avanço desse lado enquanto o lado contralateral cresce e alcança o alinhamento. Os implantes **devem ser removidos** imediatamente assim que o membro atingir a retidão para evitar hipercorreção inversa!

> 📖 Referência Canônica: Auer & Stick, *Equine Surgery*, 5th ed., Elsevier; Baxter, *Adams and Stashak's Lameness in Horses*, 7th ed.`
      },
      {
        id: 'sec_locomotor_lab5',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Relâmpago (Thoroughbred Foal)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Cirúrgico de Deformidade Angular do Carpo',
          patient: {
            name: 'Relâmpago',
            species: 'Equino',
            breed: 'Puro Sangue Inglês (PSI)',
            age: '75 dias (2.5 meses)',
            weightKg: 140,
            habitatOrEnvironment: 'Piquete de maternidade com baia'
          },
          vitals: {
            heartRateBpm: 68,
            respiratoryRateRpm: 22,
            temperatureCelsius: 38.6,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Potro nascido com carpo valgo bilateral moderado que vinha sendo manejado apenas com extensão de resina na sola. Nos últimos 20 dias o desvio no membro torácico esquerdo piorou sensivelmente, com o boleto desviando 14 graus abaxialmente em relação ao eixo do antebraço.',
          exams: [
            {
              category: 'imaging',
              title: 'Radiografia Dorsopalmar do Carpo Esquerdo em Apoio',
              findings: 'Alinhamento ósseo com convergência das linhas fisárias. Desvio em valgo centrado na fise distal do rádio com ângulo de 14.5°.',
              abnormalValues: [
                { parameter: 'Ângulo de Carpo Valgo', value: '14.5°', reference: '< 4°', status: 'critical' },
                { parameter: 'Ossificação dos Ossos Carpianos', value: 'Completa e homogênea', reference: 'Completa', status: 'normal' },
                { parameter: 'Atividade Fisária no Rádio', value: 'Aberta e ativa', reference: 'Aberta', status: 'normal' }
              ]
            }
          ],
          challengePrompt: 'Com 14.5° de valgo aos 2.5 meses e fise radial amplamente aberta, qual é a intervenção ortopédica com maior índice de sucesso funcional?',
          decisionOptions: [
            {
              id: 'opt_dec_loco5_1',
              label: 'Ponte de crescimento temporária no lado medial (parafuso e fio em oito ou placa pequena) associada a repouso controlado em baia',
              description: 'Restringir o crescimento excessivo na borda medial da fise do rádio permitindo que o lado lateral se nivele rapidamente.',
              isOptimal: true,
              consequenceText: 'Excelente decisão cirúrgica! A transfixação medial da fise com fio em figura de 8 é o método mais potente para desvios > 12 graus no potro jovem. Como a fise radial está em pico de atividade, o alinhamento é restaurado em 3 a 5 semanas, momento no qual os implantes são retirados para evitar reversão em varo.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Bridging medial da fise distal do rádio',
                mechanism: 'Compressão mecânica temporária da cartilagem de crescimento medial',
                effect: 'Crescimento lateral compensatório com alinhamento axial perfeito',
                clinicalMeaning: 'Prevenção de artrose do carpo e preservação da carreira de corrida do atleta'
              }
            },
            {
              id: 'opt_dec_loco5_2',
              label: 'Aguardar até os 12 meses de idade sem intervir para verificar se o cavalo "corrige naturalmente no pasto"',
              description: 'Manter manejo puramente expectante sem controle de exercício.',
              isOptimal: false,
              consequenceText: 'Erro negligente imperdoável! Aos 12 meses a fise distal do rádio já estará totalmente fundida e fechada. O potro terá uma deformidade permanente grave com osteoartrite erosiva do carpo, tornando-se inapto para qualquer atividade esportiva.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Omissão de tratamento durante a janela de abertura fisária',
                mechanism: 'Fechamento fisário definitivo com deformidade angular consolidada',
                effect: 'Distribuição assimétrica destrutiva de carga na articulação carpiana',
                clinicalMeaning: 'Artrose precoce e descarte atlético precoce'
              }
            },
            {
              id: 'opt_dec_loco5_3',
              label: 'Amputação do membro e protetização mecânica imediata',
              description: 'Conduta radical e sem qualquer indicação técnica.',
              isOptimal: false,
              consequenceText: 'Conduta inaceitável. O desvio é passível de 100% de correção biológica com cirurgia minimamente invasiva.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Cirurgia mutiladora para condição totalmente tratável',
                mechanism: 'Perda do membro sem base médica',
                effect: 'Morbidade extrema e eutanásia forçada',
                clinicalMeaning: 'Erro ético e técnico fatal'
              }
            }
          ],
          learningTakeaways: [
            'O sucesso da correção de desvios angulares depende estritamente da cronologia de fechamento fisário (rádio distal: até 6 meses).',
            'Desvios graves (> 12 graus) respondem melhor à ponte de retardo temporário (bridging) no lado convexo.',
            'Implantes de modulação fisária devem ser removidos imediatamente ao atingir o alinhamento axial para evitar hipercorreção em varo.'
          ]
        }
      },
      {
        id: 'sec_locomotor_ex5',
        type: 'exercise',
        title: 'Exercício Clínico: Deformidades Angulares & Aprumos em Potros',
        exerciseId: 'ex_locomotor_05'
      }
    ]
  }
];
// ==========================================
// 3. SISTEMA NERVOSO & NEUROANATOMIA FUNCIONAL
// ==========================================
export const NERVOUS_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_nervous_01',
    conceptId: 'concept_nervous_neurolocalization',
    type: 'multiple_choice',
    prompt: 'Um cão Dachshund de 5 anos apresenta paraplegia aguda nos membros pélvicos (não se sustenta em pé atrás), enquanto os membros torácicos estão absolutamente normais. Ao teste neurológico, os reflexos patelar e ciático nos membros pélvicos estão exacerbados (hiperreflexia) e o tônus muscular está rígido (hipertonia). Qual é a neurolocalização anatômica da lesão medular?',
    options: [
      {
        id: 'opt_neuro_1',
        text: 'Segmentos medulares T3 - L3 (Neurônio Motor Superior para membros pélvicos)',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! Membros torácicos normais descartam lesões cervicais (C1-C5 e C6-T2). Membros pélvicos com sinais de Neurônio Motor Superior (hiperreflexia e hipertonia) indicam que a intumescência lombossacra (L4-S3) está intacta, situando a compressão nos segmentos toracolombares T3-L3 (típico de hérnia de disco Hansen Tipo I).'
      },
      {
        id: 'opt_neuro_2',
        text: 'Segmentos medulares L4 - S3 (Neurônio Motor Inferior para membros pélvicos)',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Se a lesão fosse em L4-S3 (intumescência lombar), haveria sinais de Neurônio Motor Inferior: hiporreflexia ou arreflexia patelar e flacidez muscular, e não hiperreflexia.'
      },
      {
        id: 'opt_neuro_3',
        text: 'Segmentos medulares C6 - T2 (Intumescência Cervical)',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Uma lesão em C6-T2 causaria sinais de Neurônio Motor Inferior nos membros torácicos (fraqueza flácida dianteira) e NMS nos pélvicos. Aqui os membros anteriores estão normais.'
      },
      {
        id: 'opt_neuro_4',
        text: 'Lesão vestibular periférica unilateral no ouvido interno',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A síndrome vestibular manifesta-se por head tilt (inclinação de cabeça), nistagmo e ataxia proprioceptiva assimétrica, não por paraplegia toracolombar com hiperreflexia.'
      }
    ]
  },
  {
    id: 'ex_nervous_02',
    conceptId: 'concept_nervous_pathways_tracts',
    type: 'multiple_choice',
    prompt: 'Na neuroanatomia comparada dos animais domésticos quadrúpedes (cães, gatos, equinos e bovinos), qual sistema motor descendente desempenha o papel primordial na postura antigravitacional, marcha rítmica e tônus extensor, contrastando com o papel dominante do trato corticoespinhal piramidal em primatas?',
    options: [
      {
        id: 'opt_neuro_2_1',
        text: 'Sistema Extrapiramidal, liderado pelos tratos rubroespinal, reticuloespinal (pontino e bulbar) e vestibuloespinal originados no tronco encefálico, que coordenam o tônus muscular postural involuntário e os padrões geradores de marcha',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Em animais quadrúpedes, o trato corticoespinhal (piramidal) é relativamente pouco desenvolvido e comanda apenas movimentos voluntários finos aprendidos de extremidades distais. A sustentação postural antigravitacional, a corrida e a marcha rítmica dependem maciçamente das vias extrapiramidais do tronco encefálico (núcleo rubro, formação reticular e núcleos vestibulares).'
      },
      {
        id: 'opt_neuro_2_2',
        text: 'Trato espinotalâmico lateral piramidal, que transmite impulsos de contração muscular direta sem passar pelo cerebelo',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O trato espinotalâmico é uma via ascendente estritamente sensorial (dor e temperatura), e não uma via motora descendente.'
      },
      {
        id: 'opt_neuro_2_3',
        text: 'Fascículo grácil e cuneiforme, que excitam diretamente a membrana pós-sináptica da placa motora',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Os tratos do cordão dorsal (grácil e cuneiforme) são vias proprioceptivas ascendentes que conduzem tato discriminativo e propriocepção consciente ao córtex parietal.'
      },
      {
        id: 'opt_neuro_2_4',
        text: 'Trato tectoespinal ventral exclusivo, que inerva exclusivamente a musculatura dos membros pélvicos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O trato tectoespinal é responsável por reflexos visuais e auditivos de orientação da cabeça e pescoço, sem papel dominante na locomoção locomotora dos 4 membros.'
      }
    ]
  },
  {
    id: 'ex_nervous_03',
    conceptId: 'concept_nervous_nms_nmi_syndromes',
    type: 'multiple_choice',
    prompt: 'Um cão Labrador de 9 anos apresenta paresia pélvica progressiva com dificuldade de se levantar. Ao exame, apresenta reflexos patelar e flexor pélvicos ausentes (arreflexia bilateral), hipotonia muscular severa ("membros de pano"), atrofia muscular neurogênica acentuada do quadríceps e bíceps femoral evidente em 10 dias e bexiga neurogênica atônica flácida que vaza por transbordamento e é fácil de esvaziar manualmente à palpação. Qual é a síndrome motora e a neurolocalização correspondente?',
    options: [
      {
        id: 'opt_neuro_3_1',
        text: 'Síndrome do Neurônio Motor Inferior (NMI) localizada na intumescência lombossacra (segmentos medulares L4 - S3 / Cauda Equina)',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! A tétrade clássica de Neurônio Motor Inferior (NMI) reúne: hipo/arreflexia, hipotonia/flacidez muscular, atrofia neurogênica precoce e rápida (por perda dos fatores tróficos axonais no músculo desnervado) e bexiga de NMI (esfíncter uretral flácido com fácil esvaziamento por compressão manual externa). Isso situa a lesão diretamente nos corpos celulares dos neurônios motores em L4-S3 ou suas raízes periféricas (n. femoral, ciático, pudendo e pélvico).'
      },
      {
        id: 'opt_neuro_3_2',
        text: 'Síndrome do Neurônio Motor Superior (NMS) com lesão em C1 - C5',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Lesões em C1-C5 causariam hiperreflexia, hipertonia e espasticidade nos 4 membros, sem atrofia muscular rápida.'
      },
      {
        id: 'opt_neuro_3_3',
        text: 'Síndrome vestibular paradoxal central com envolvimento dos núcleos vestibulares',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A síndrome vestibular não cursa com arreflexia espinhal nem flacidez de membros pélvicos com atrofia muscular regional.'
      },
      {
        id: 'opt_neuro_3_4',
        text: 'Lesão exclusiva no córtex motor parietal com reflexos espinhais intactos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Lesões no córtex motor mantêm o arco reflexo espinhal intacto e normal, sem arreflexia periférica nem desnervação muscular.'
      }
    ]
  },
  {
    id: 'ex_nervous_04',
    conceptId: 'concept_nervous_reflexes_schiff_sherrington',
    type: 'multiple_choice',
    prompt: 'Um cão atropelado chega à emergência veterinária em decúbito lateral apresentando hiperextensão tônica rígida exuberante de ambos os membros torácicos ("patas duras como tábuas"), enquanto os membros pélvicos estão em paraplegia flácida. Ao teste clínico, o cão apresenta sensibilidade cutânea normal nos membros torácicos e locomoção coordenada quando apoiado. Qual é a denominação dessa alteração postural e qual o mecanismo neurofisiológico subjacente?',
    options: [
      {
        id: 'opt_neuro_4_1',
        text: 'Postura de Schiff-Sherrington; decorre de lesão medular aguda grave entre T3 e L3 com interrupção das fibras inibitórias ascendentes das células de Border (situadas em L1-L4), que normalmente inibem tonicamente os neurônios motores extensores na intumescência cervical (C6-T2)',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! As células de Border (ou Cooper-Sherrington) localizadas na substância cinzenta da medula lombar cranial projetam axônios longos ascendentes pelo fascículo próprio ventral até a intumescência cervical, liberando glicina para inibir os neurônios motores extensores dos membros anteriores. Uma secção aguda grave em T3-L3 desconecta essa via inibitória, gerando hiperextensão torácica por desinibição. Isso NÃO significa lesão cervical e NÃO altera o prognóstico por si só (diferente da rigidez de descerebração).'
      },
      {
        id: 'opt_neuro_4_2',
        text: 'Rigidez de descerebração por herniação tentorial e compressão mesencefálica com coma profundo',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Na rigidez de descerebração há hiperextensão dos 4 membros, opistótono grave e alteração profunda do nível de consciência (estupor ou coma), enquanto no Schiff-Sherrington o estado mental e os membros anteriores têm controle voluntário preservado.'
      },
      {
        id: 'opt_neuro_4_3',
        text: 'Fratura de atlas e axis (C1-C2) com colapso do canal vertebral cervical',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Se houvesse lesão cervical alta grave, o animal apresentaria tetraplegia com insuficiência respiratória iminente por paralisia do nervo frênico, e não membros torácicos com motilidade voluntária.'
      },
      {
        id: 'opt_neuro_4_4',
        text: 'Crise de tétano generalizado por toxina tetanospasmina bloqueando receptores GABA no cerebelo',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O tétano cursa com riso sardônico facial, trismo mandibular, protrusão de terceira pálpebra e rigidez nos 4 membros simultaneamente, e não paraplegia pélvica flácida pós-atropelamento.'
      }
    ]
  },
  {
    id: 'ex_nervous_05',
    conceptId: 'concept_nervous_spinal_emergencies',
    type: 'multiple_choice',
    prompt: 'Um Dachshund de 4 anos com hérnia discal aguda toracolombar (L2-L3) é trazido à clínica. O animal não caminha há 6 horas. Ao exame físico neurológico, o examinador aperta firmemente os dígitos dos membros pélvicos com uma pinça hemostática travada até o osso: o cão não vocaliza, não vira a cabeça em direção ao estímulo, não dilata as pupilas e não tenta morder, embora o membro flexione por reflexo de retirada local. Qual é a graduação da escala neurológica espinhal, a distinção entre reflexo e nocicepção e a janela cirúrgica recomendada?',
    options: [
      {
        id: 'opt_neuro_5_1',
        text: 'Grau 5 de disfunção medular (paraplegia sem dor profunda); o reflexo flexor de retirada é um circuito segmentar puramente espinhal que independe do encéfalo, enquanto a dor profunda exige que o estímulo chegue ao córtex sensorial (reação comportamental consciente); como as fibras nociceptivas amielínicas são as mais profundas e resistentes, sua perda indica isquemia grave e exige cirurgia descompressiva (hemilaminectomia) idealmente nas primeiras 24 a 48 horas',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A maior armadilha diagnóstica em neurologia espinhal é confundir reflexo de retirada com percepção de dor profunda. A flexão da pata depende apenas do arco reflexo medular segmentar em L4-S1. A verdadeira sensibilidade à dor profunda exige resposta consciente do paciente (latir, dilatar pupilas, virar a cabeça). As fibras de dor profunda (fibras C amielínicas) estão no centro da substância branca medular; quando elas perdem condução, significa que todas as vias mais superficiais (propriocepção, marcha e dor superficial) já foram destruídas. Se a descompressão cirúrgica não for realizada em 24-48 horas, o índice de recuperação cai para menos de 5% e o risco de mielomalácia progressiva ascendente fatal dispara.'
      },
      {
        id: 'opt_neuro_5_2',
        text: 'Grau 2 de disfunção medular; o reflexo flexor prova que a dor profunda está intacta e a cirurgia pode ser postergada por até 30 dias',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A presença do reflexo flexor não avalia dor profunda; o paciente não tem percepção consciente, configurando Grau 5 de emergência cirúrgica máxima.'
      },
      {
        id: 'opt_neuro_5_3',
        text: 'Grau 4 de disfunção com dor superficial ausente, mas com bom prognóstico garantido apenas com altas doses de dexametasona oral',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O uso de dexametasona em alta dose em hérnias discais não melhora o prognóstico neurológico e induz úlceras gastrointestinais perfurantes fatais.'
      },
      {
        id: 'opt_neuro_5_4',
        text: 'Mielomalácia hemorrágica já consolidada com óbito inevitável em 2 horas, sem qualquer indicação de intervenção',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Embora o risco exista, a ausência de dor profunda recente (< 24h) com tônus preservado e sem avanço cranial de dor cutânea ainda confere chance de recuperação cirúrgica se operado de imediato.'
      }
    ]
  }
];

export const NERVOUS_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_nervous_01_neurolocalization',
    moduleId: 'mod_nervous',
    title: 'Semiologia Neurológica: Neurolocalização de Lesões Medulares',
    shortDescription: 'Regra de ouro da neuroclínica: diferenciação de Neurônio Motor Superior (NMS) vs. Inferior (NMI) e exame de reflexos espinhais.',
    estimatedMinutes: 14,
    order: 1,
    concepts: ['concept_nervous_neurolocalization'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_nervous_th1',
        type: 'theory',
        title: 'A Lógica Sagrada da Neurolocalização Medular',
        contentMarkdown: `### A Regra Fundamental: NMS vs. NMI

A medula espinhal atua como uma via expressa conectando o encéfalo aos músculos periféricos através de dois neurônios fundamentais:
* **Neurônio Motor Superior (NMS):** Localizado no encéfalo e vias descendentes da medula. Sua função é **inibir e modular** o reflexo espinhal para produzir movimentos suaves e coordenados.
* **Neurônio Motor Inferior (NMI):** O corpo celular fica na substância cinzenta da medula (intumescências) e seu axônio vai diretamente até a placa motora do músculo.

| Característica | Lesão de NMS | Lesão de NMI |
| :--- | :--- | :--- |
| **Reflexos Espinhais** | Exacerbados (Hiperreflexia) | Diminuídos ou Ausentes (A/Hiporreflexia) |
| **Tônus Muscular** | Rígido (Hipertonia / Espasticidade) | Flácido (Hipotonia / Flacidez) |
| **Atrofia Muscular** | Lenta por desuso crônico | Rápida e severa por desnervação (10 dias) |
| **Bexiga Neurogênica** | Bexiga espástica (turgida, difícil expressão manual) | Bexiga flácida (atônica, fácil expressão com extravasamento) |

---

### Os 4 Grandes Segmentos Medulares

1. **C1 - C5:** Tetraparesia/plegia com **NMS nos 4 membros** (todos hiper-reflexos e espásticos).
2. **C6 - T2 (Intumescência Cervical):** **NMI nos membros torácicos** (flácidos) e **NMS nos pélvicos** (espásticos).
3. **T3 - L3:** **Membros torácicos 100% normais** e **NMS nos membros pélvicos** (paraplegia espástica, patelar exaltado).
4. **L4 - S3 (Intumescência Lombar):** Membros torácicos normais e **NMI nos membros pélvicos** (paraplegia flácida, reflexos patelar e ciático abolidos).

\`\`\`mermaid
flowchart TD
    Patient["Paciente com Déficit Motor / Claudicação Neurológica"] --> CheckForelimbs{"Membros Torácicos Afetados?"}
    CheckForelimbs -- "SIM" --> CheckTypeFore{"Tipo de Lesão nos Torácicos?"}
    CheckTypeFore -- "NMS (Espástico / Hiper-reflexo)" --> C1_C5["Segmentos Medulares C1 - C5"]
    CheckTypeFore -- "NMI (Flácido / Hipo-reflexo)" --> C6_T2["Intumescência Cervical C6 - T2"]
    CheckForelimbs -- "NÃO (Normais)" --> CheckTypeHind{"Tipo de Lesão nos Pélvicos?"}
    CheckTypeHind -- "NMS (Espástico / Hiper-reflexo)" --> T3_L3["Segmentos Toracolombares T3 - L3"]
    CheckTypeHind -- "NMI (Flácido / Arreflexo)" --> L4_S3["Intumescência Lombossacra L4 - S3 / Cauda Equina"]
\`\`\`

> 📖 Referência Canônica: de Lahunta's *Veterinary Neuroanatomy and Clinical Neurology*, 5th ed., Elsevier; Lorenz, Coates & Kent, *Handbook of Veterinary Neurology*, 5th ed.

> 💡 Pérola Clínica / Prova de Residência: O teste de propriocepção postural (posicionamento proprioceptivo ou "knuckling") é o primeiro teste a se alterar em qualquer compressão medular porque as fibras proprioceptivas do cordão dorsal são grossas, mielinizadas e superficiais. Se a propriocepção estiver 100% normal, é improvável que haja compressão medular significativa!`
      },
      {
        id: 'sec_nervous_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Salsicha (Dachshund)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Investigação e Neurolocalização em Paraplegia Aguda',
          patient: {
            name: 'Salsicha',
            species: 'Canino',
            breed: 'Dachshund Teckel',
            age: '5 anos',
            weightKg: 8.2,
            habitatOrEnvironment: 'Casa térrea com degraus'
          },
          vitals: {
            heartRateBpm: 120,
            respiratoryRateRpm: 32,
            temperatureCelsius: 38.6,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Tutor relata que o cão pulou do sofá há 4 horas, soltou um ganido estridente de dor lombar e arrastou imediatamente os membros traseiros. Não urinou desde o evento.',
          exams: [
            {
              category: 'physical_exam',
              title: 'Exame Neurológico Padronizado',
              findings: 'Membros torácicos normais. Membros pélvicos com paraplegia não ambulatória. Reflexo patelar 3+ (hiper-reflexia), reflexo flexor pélvico presente. Dor profunda positiva bilateralmente.',
              abnormalValues: [
                { parameter: 'Locomoção Pélvica', value: 'Paraplegia', reference: 'Ambulatório normal', status: 'critical' },
                { parameter: 'Reflexo Patelar', value: '3+ (Hiperreflexia)', reference: '2+ (Normal)', status: 'high' },
                { parameter: 'Posicionamento Proprioceptivo Pélvico', value: 'Abolido bilateralmente', reference: 'Imediato (< 1s)', status: 'critical' },
                { parameter: 'Percepção à Dor Profunda', value: 'Presente (vocaliza ao pinçamento)', reference: 'Presente', status: 'normal' }
              ]
            }
          ],
          challengePrompt: 'Com base no padrão NMS pélvico e membros torácicos preservados, qual é a neurolocalização anatômica da lesão e conduta inicial?',
          decisionOptions: [
            {
              id: 'opt_dec_neuro1_1',
              label: 'Neurolocalização em T3 - L3 (extrusão discal toracolombar provável), repouso absoluto em caixa/gaiola e solicitação imediata de Tomografia Computadorizada / Ressonância Magnética',
              description: 'Localizar a lesão entre T3 e L3 pelo padrão NMS e preparar estudo de imagem avançado antes de qualquer piora motora.',
              isOptimal: true,
              consequenceText: 'Perfeito raciocínio neurológico! A intumescência lombar (L4-S3) está intacta (daí a hiperreflexia por perda de inibição cranial). A TC demonstrará a extrusão em disco toracolombar típica de condrodistróficos, permitindo hemilaminectomia precoce.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Neurolocalização correta em T3-L3 e imagem precoce',
                mechanism: 'Descompressão cirúrgica rápida do parênquima medular',
                effect: 'Restauração da perfusão da substância cinzenta e branca',
                clinicalMeaning: 'Recuperação funcional completa da marcha em 14 a 21 dias'
              }
            },
            {
              id: 'opt_dec_neuro1_2',
              label: 'Neurolocalização em L4 - S3 e administração de dexametasona em alta dose',
              description: 'Considerar lesão de intumescência lombar e usar dose imunossupressora de corticoide.',
              isOptimal: false,
              consequenceText: 'Erro duplo gravíssimo! A presença de hiperreflexia refuta lesão em L4-S3 (onde haveria arreflexia). O uso de dexametasona em alta dose não reverte hérnias discais e causa hemorragia gastrointestinal maciça.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Diagnóstico topográfico equivocado e corticoterapia tóxica',
                mechanism: 'Perfuração de mucosa gástrica e atraso na descompressão cirúrgica',
                effect: 'Peritonite séptica por úlcera perfurada e perda de dor profunda',
                clinicalMeaning: 'Óbito por choque séptico e peritonite aguda'
              }
            },
            {
              id: 'opt_dec_neuro1_3',
              label: 'Tratar como luxação patelar congênita bilateral e liberar para caminhadas em esteira aquática',
              description: 'Confundir a paraplegia neurológica com alteração ortopédica e forçar exercícios.',
              isOptimal: false,
              consequenceText: 'Erro perigoso! Forçar movimentação em um animal com hérnia discal aguda pode causar extrusão adicional do núcleo pulposo calcificado, destruindo as vias nociceptivas e transformando o caso em perda irreversível de dor profunda.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Confusão com patologia ortopédica e fisioterapia precoce intempestiva',
                mechanism: 'Compressão mecânica cumulativa sobre a medula espinhal',
                effect: 'Mielomalácia hemorrágica progressiva',
                clinicalMeaning: 'Paralisia respiratória ascendente fatal'
              }
            }
          ],
          learningTakeaways: [
            'Membros torácicos normais com membros pélvicos espásticos (hiper-reflexos) localizam a lesão inequivocamente em T3-L3.',
            'O reflexo patelar exaltado comprova que o nervo femoral e os segmentos L4-L6 estão funcionais.',
            'O confinamento rigoroso em gaiola é mandatório para prevenir extrusões discais adicionais durante a fase aguda.'
          ]
        }
      },
      {
        id: 'sec_nervous_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Neurolocalização Espinhal',
        exerciseId: 'ex_nervous_01'
      }
    ]
  },
  {
    id: 'lesson_nervous_02_pathways_tracts',
    moduleId: 'mod_nervous',
    title: 'Vias Neurais Ascendentes & Tratos Motores Piramidais/Extrapiramidais',
    shortDescription: 'Fascículo grácil/cuneiforme, tratos espinocerebelares, sistema extrapiramidal do tronco encefálico e motricidade voluntária comparada.',
    estimatedMinutes: 14,
    order: 2,
    concepts: ['concept_nervous_pathways_tracts'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_nervous_th2',
        type: 'theory',
        title: 'Neuroarquitetura dos Cordões Medulares: Vias Sensoriais & Motoras',
        contentMarkdown: `### Organização Topográfica da Substância Branca Medular

A substância branca da medula espinhal divide-se em três pares de cordões (funículos) que contêm vias organizadas com extrema precisão somatotópica:

1. **Cordão Dorsal (Sensorial Ascendente):**
   * **Fascículo Grácil (Medial):** Conduz propriocepção consciente e tato discriminativo provenientes dos membros pélvicos e cauda.
   * **Fascículo Cuneiforme (Lateral):** Conduz propriocepção consciente dos membros torácicos e região cervical cranial.
2. **Cordão Lateral (Misto Sensorial e Motor):**
   * **Trato Espinocerebelar Dorsal e Ventral (Periférico):** Transmitem propriocepção inconsciente diretamente ao córtex cerebelar para coordenação motora de marcha.
   * **Trato Rubroespinal (Motor Extrapiramidal):** O principal trato motor voluntário em animais domésticos quadrúpedes; origina-se no núcleo rubro do mesencéfalo e decussa no tronco, ativando neurônios motores flexores.
   * **Trato Corticoespinhal Lateral (Piramidal):** Origina-se no córtex cerebral motor e termina nos cornos ventrais, responsável por movimentos isolados de dígitos em felinos e caninos.
3. **Cordão Ventral (Motor Descendente):**
   * **Trato Vestibuloespinal Lateral:** Origina-se nos núcleos vestibulares e descende ipsilateralmente, exercendo facilitação contínua sobre os **neurônios motores extensores (antigravitacionais)**.
   * **Trato Reticuloespinal Pontino e Bulbar:** Modula o tônus axial e integra reflexos posturais e autonômicos.

\`\`\`mermaid
flowchart TD
    SensoryInput["Estímulo Sensorial Periférico"] --> DorsalColumn["Cordão Dorsal: Fascículo Grácil & Cuneiforme"]
    DorsalColumn --> ConsciousProprio["Tálamo & Córtex Parietal: Propriocepção Consciente"]
    SensoryInput --> SpinoCerebellar["Cordão Lateral: Tratos Espinocerebelares"]
    SpinoCerebellar --> InconsciousCoord["Cerebelo: Propriocepção Inconsciente & Coordenação"]
    MotorCommand["Planejamento Motor Encefálico"] --> ExtraPyramidal["Tronco Encefálico: Núcleo Rubro & Núcleos Vestibulares"]
    ExtraPyramidal --> RubroSpinal["Trato Rubroespinal (Flexores) & Vestibuloespinal (Extensores)"]
    RubroSpinal --> VentralHorn["Neurônio Motor Inferior (Placa Motora no Músculo)"]
\`\`\`

> 📖 Referência Canônica: de Lahunta, Glass & Kent, *Veterinary Neuroanatomy and Clinical Neurology*, 5th ed.; Thomson & Hahn, *Veterinary Neuroanatomy: A Clinical Approach*, Elsevier.

> 💡 Pérola Neuroanatômica: A suscetibilidade das vias axonais medulares à compressão extrínseca obedece rigorosamente a dois fatores biofísicos: diâmetro axonal e localização anatômica periférica. Vias mais grossas e superficiais (propriocepção) colapsam primeiro; vias mais finas, amielínicas e centrais (dor profunda) colapsam por último.`
      },
      {
        id: 'sec_nervous_lab2',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Apolo (Doberman Pinscher)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Miopatia vs. Ataxia Proprioceptiva em Espondilomielopatia Cervical',
          patient: {
            name: 'Apolo',
            species: 'Canino',
            breed: 'Doberman Pinscher',
            age: '7 anos',
            weightKg: 38,
            habitatOrEnvironment: 'Quintal gramado'
          },
          vitals: {
            heartRateBpm: 88,
            respiratoryRateRpm: 20,
            temperatureCelsius: 38.4,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Animal apresenta andar oscilante com passadas excessivamente largas nos membros traseiros ("marcha de bêbado"), tropeçando nos próprios dígitos. Ao descer rampas, apresenta hipermetria (passada flutuante). O tutor suspeitou inicialmente de fraqueza muscular por displasia coxofemoral.',
          exams: [
            {
              category: 'physical_exam',
              title: 'Avaliação Neurológica da Marcha e Propriocepção',
              findings: 'Ataxia proprioceptiva marcada nos 4 membros (pior nos pélvicos). Ao dobrar o dorso da pata no chão, o cão demora 3 segundos para corrigir nos anteriores e não corrige nos posteriores. Reflexos espinhais pélvicos hiperativos (3+). Dor à flexão cervical dorsal.',
              abnormalValues: [
                { parameter: 'Posicionamento Proprioceptivo Membros Pélvicos', value: 'Ausente (> 3s)', reference: '< 1s', status: 'critical' },
                { parameter: 'Posicionamento Proprioceptivo Membros Torácicos', value: 'Retardado (2-3s)', reference: '< 1s', status: 'high' },
                { parameter: 'Reflexo Patelar', value: '3+ (Hiperreflexia)', reference: '2+', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Com ataxia proprioceptiva nos 4 membros e reflexos NMS pélvicos em cão de grande porte, qual é o diagnóstico neuroanatômico e sindrômico?',
          decisionOptions: [
            {
              id: 'opt_dec_neuro2_1',
              label: 'Compressão medular cervical caudal (C6-T2 ou C5-C6) compatível com Síndrome de Wobbler (Espondilomielopatia Cervical Caudal)',
              description: 'Reconhecer que a ataxia proprioceptiva nos 4 membros associada a reflexos pélvicos exaltados decorre de compressão das vias proprioceptivas e tratos motores descendentes cervicais.',
              isOptimal: true,
              consequenceText: 'Diagnóstico exato e elegante! A compressão cervical por hipertrofia ligamentar ou má-formação vertebral comprime primeiramente os tratos proprioceptivos dorsais e espinocerebelares superficiais, gerando a clássica marcha atáxica oscilante (ataxia sensorial), com reflexos pélvicos NMS devido à interrupção dos tratos inibitórios encefálicos.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Compressão crônica cervical caudal em Doberman',
                mechanism: 'Isquemia axonal dos fascículos proprioceptivos e tratos rubroespinais',
                effect: 'Déficit de propriocepção consciente nos 4 membros com hipermetria',
                clinicalMeaning: 'Indicação precisa de Ressonância Magnética cervical e descompressão'
              }
            },
            {
              id: 'opt_dec_neuro2_2',
              label: 'Displasia coxofemoral bilateral pura com indicação de prótese total de quadril imediata',
              description: 'Atribuir a ataxia à dor articular coxofemoral.',
              isOptimal: false,
              consequenceText: 'Erro diagnóstico grave! A displasia causa dor e claudicação mecânica, mas **nunca** déficit de posicionamento proprioceptivo nem reflexos hiperativos. Operar o quadril deixará o paciente tetraparético.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Confusão entre lesão ortopédica articular e déficit proprioceptivo neurológico',
                mechanism: 'Cirurgia articular invasiva desnecessária',
                effect: 'Progressão da compressão medular cervical sem tratamento',
                clinicalMeaning: 'Evolução para tetraplegia não ambulatória'
              }
            },
            {
              id: 'opt_dec_neuro2_3',
              label: 'Lesão exclusiva de nervo ciático bilateral na pelve',
              description: 'Considerar lesão de nervo periférico como causa da marcha oscilante.',
              isOptimal: false,
              consequenceText: 'Incorreto. A lesão de nervo ciático causaria hiporreflexia e fraqueza de flexão estritamente pélvica, sem acometer os membros torácicos.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Atribuição a nervo periférico isolado',
                mechanism: 'Incapacidade de explicar os déficits proprioceptivos torácicos',
                effect: 'Atraso na investigação por imagem cervical',
                clinicalMeaning: 'Piora gradual da estabilidade de marcha'
              }
            }
          ],
          learningTakeaways: [
            'A propriocepção consciente viaja pelo cordão dorsal (grácil e cuneiforme) e é a via mais suscetível à compressão.',
            'O sistema extrapiramidal (tratos rubroespinal e reticuloespinal) comanda a marcha e sustentação postural nos quadrúpedes.',
            'A presença de déficits proprioceptivos descarta categoricamente problemas ortopédicos isolados como displasia.'
          ]
        }
      },
      {
        id: 'sec_nervous_ex2',
        type: 'exercise',
        title: 'Exercício Clínico: Tratos Motores & Vias Sensoriais',
        exerciseId: 'ex_nervous_02'
      }
    ]
  },
  {
    id: 'lesson_nervous_03_nms_nmi_syndromes',
    moduleId: 'mod_nervous',
    title: 'Síndromes do Neurônio Motor Superior vs. Inferior na Prática Clínica',
    shortDescription: 'Fisiopatologia dos reflexos miotáticos, atrofia neurogênica vs. desuso, disfunção miccional e bexiga neurogênica.',
    estimatedMinutes: 14,
    order: 3,
    concepts: ['concept_nervous_nms_nmi_syndromes'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_nervous_th3',
        type: 'theory',
        title: 'Mecanismos Celulares: Desnervação Motora & Disfunções Esfincterianas',
        contentMarkdown: `### O Arco Reflexo Miotático Monossináptico

O reflexo patelar exemplifica o circuito elementar do **Neurônio Motor Inferior (NMI)**:
1. O golpe no ligamento patelar estira os **fusos neuromusculares** intrafusais do músculo quadríceps.
2. Fibras aferentes sensoriais Ia entram na raiz dorsal medular e fazem sinapse direta excitatória com o neurônio motor alfa no corno ventral de L4-L6.
3. O neurônio motor alfa dispara potencial de ação pelo nervo femoral, provocando contração reflexa rápida do quadríceps e extensão do joelho.

---

### Por Que a Lesão de NMS Causa Hiperreflexia?

Os axônios descendentes das vias superiores (reticuloespinal e rubroespinal) liberam neurotransmissores inibitórios (GABA e glicina) através de **interneurônios inibitórios de Renshaw** para moderar o arco reflexo. Quando uma lesão destrói a via de NMS:
* O arco reflexo monossináptico fica **desinibido**.
* O limiar de disparo cai e qualquer estímulo mínimo desencadeia contração explosiva (**Hiperreflexia / Clonus**).
* O tônus muscular de repouso aumenta permanentemente (**Hipertonia Espástica**).

---

### Dinâmica da Bexiga Neurogênica

O controle da micção depende da integração parassimpática, simpática e somática:

| Parâmetro | Bexiga de NMS (Lesão Cranial a L4) | Bexiga de NMI (Lesão em L7 - S3 / Cauda Equina) |
| :--- | :--- | :--- |
| **Origem Anatômica** | Tratos reticuloespinais descendentes interrompidos | Lesão no centro parassimpático sacral (n. pélvico) e somático (n. pudendo) |
| **Tônus do Esfíncter Uretral** | **Hipertônico / Espástico** (fechado com alta resistência) | **Flácido / Atônico** (baixa resistência) |
| **Turgidez Vesical** | Bexiga repleta, rígida e de difícil esvaziamento manual | Bexiga repleta, flácida e de fácil esvaziamento manual |
| **Sintoma Miccional** | Retenção urinária com micção por transbordamento forçado | Incontinência urinária contínua com gotejamento passivo ("pico de vazamento") |

\`\`\`mermaid
flowchart TD
    SpinalLesion["Nível da Lesão Medular"] --> DecisionNode{"Segmento Medular Afetado?"}
    DecisionNode -- "Cranial a L4 (Ex: T3 - L3)" --> NMS_Bladder["Bexiga Neurogênica de NMS"]
    NMS_Bladder --> TightSphincter["Esfíncter Uretral Espástico & Fechado"]
    TightSphincter --> ManualHard["Esvaziamento Manual Difícil: Risco de Ruptura se Forçado!"]
    DecisionNode -- "Segmentos S1 - S3 / Sacrais" --> NMI_Bladder["Bexiga Neurogênica de NMI"]
    NMI_Bladder --> LooseSphincter["Esfíncter Uretral Flácido & Sem Tônus"]
    LooseSphincter --> ManualEasy["Esvaziamento Manual Fácil: Urina Sai com Leve Pressão"]
\`\`\`

> 📖 Referência Canônica: Lorenz, Coates & Kent, *Handbook of Veterinary Neurology*, 5th ed.; Sharp & Wheeler, *Small Animal Spinal Disorders: Diagnosis and Surgery*, 2nd ed., Mosby.

> ⚠️ Alerta Clínico: Jamais aperte com força excessiva uma bexiga neurogênica de NMS! Como o esfíncter uretral está em espasmo rígido, a compressão manual violenta pode romper a parede vesical inflamada, provocando uroperitônio fulminante. Use bloqueadores alfa-1 (prazosina) para relaxar a uretra antes de tentar esvaziar.`
      },
      {
        id: 'sec_nervous_lab3',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Boris (Pastor de Shetland)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo de Bexiga Neurogênica e Síndrome de Cauda Equina',
          patient: {
            name: 'Boris',
            species: 'Canino',
            breed: 'Pastor de Shetland',
            age: '8 anos',
            weightKg: 11,
            habitatOrEnvironment: 'Casa com quintal'
          },
          vitals: {
            heartRateBpm: 92,
            respiratoryRateRpm: 22,
            temperatureCelsius: 38.5,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Animal atropelado na bacia há 48h. Apresenta paresia de cauda (cauda caída imóvel), perda de sensibilidade no períneo (ânus entreaberto sem reflexo perineal) e perda constante de urina em gotas.',
          exams: [
            {
              category: 'physical_exam',
              title: 'Exame de Reflexos Perineais e Tônus Vesical',
              findings: 'Reflexo perineal ausente (estimulação com pinça não causa contração do esfíncter anal nem flexão da cauda). Bexiga moderadamente distendida e muito flácida à palpação abdominal caudal; ao pressionar levemente, a urina flui facilmente pela uretra.',
              abnormalValues: [
                { parameter: 'Reflexo Perineal', value: 'Abolido (0)', reference: 'Presente (2+)', status: 'critical' },
                { parameter: 'Tônus do Esfíncter Anal', value: 'Flácido e dilatado', reference: 'Contraído normal', status: 'critical' },
                { parameter: 'Tônus Vesical', value: 'Bexiga de NMI flácida', reference: 'Contrátil normal', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Com arreflexia perineal, ânus hipotônico e bexiga flácida de fácil compressão, qual é a neurolocalização e protocolo de manejo?',
          decisionOptions: [
            {
              id: 'opt_dec_neuro3_1',
              label: 'Neurolocalização nos segmentos sacrais S1-S3 / nervos pudendo e pélvico (Síndrome de NMI sacral), instituindo esvaziamento manual delicado da bexiga a cada 6-8 horas e analgesia',
              description: 'Tratar a retenção por atonia com esvaziamento profilático para evitar cistite secundária e estiramento irreversível do músculo detrusor.',
              isOptimal: true,
              consequenceText: 'Excelente conduta! Boris tem lesão de NMI sacral. O esvaziamento regular a cada 6-8 horas impede o estiramento excessivo das junções comunicantes das fibras do músculo detrusor, mantendo a viabilidade de recuperação da contratilidade vesical.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Esvaziamento manual metódico de bexiga flácida',
                mechanism: 'Preservação da integridade das miofibrilas do detrusor',
                effect: 'Prevenção de infecção urinária ascendente e atonia miogênica permanente',
                clinicalMeaning: 'Recuperação funcional completa com retorno da continência'
              }
            },
            {
              id: 'opt_dec_neuro3_2',
              label: 'Administrar altas doses de betanecol oral imediatamente sem avaliar desobstrução',
              description: 'Prescrever agonista colinérgico potente no início do trauma.',
              isOptimal: false,
              consequenceText: 'Subótimo e arriscado. O betanecol na fase aguda pode causar cólicas abdominais severas, hipotensão e salivação profusa, devendo ser reservado para a fase de reabilitação motora.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Uso precipitado de agonista colinérgico sistêmico',
                mechanism: 'Estimulação parassimpática descontrolada com efeitos muscarínicos adversos',
                effect: 'Bradicardia, êmese e dor visceral',
                clinicalMeaning: 'Desconforto clínico sem melhora do tônus esfincteriano'
              }
            },
            {
              id: 'opt_dec_neuro3_3',
              label: 'Prescrever apenas antibiótico e não esvaziar a bexiga, deixando o animal urinar passivamente por transbordamento',
              description: 'Ignorar a atonia vesical confiando no gotejamento passivo.',
              isOptimal: false,
              consequenceText: 'Erro negligente grave! O gotejamento passivo apenas remove o excesso; a bexiga permanece sob distensão máxima crônica. As pontes de actina e miosina do músculo detrusor sofrerão necrose por estiramento, resultando em atonia vesical definitiva intratável.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Acúmulo de volume urinário sem drenagem ativa',
                mechanism: 'Ruptura das junções mioelétricas do detrusor e cistite bacteriana grave',
                effect: 'Perda definitiva da contratilidade vesical (bexiga miogênica atônica)',
                clinicalMeaning: 'Incontinência urinária incurável para o resto da vida'
              }
            }
          ],
          learningTakeaways: [
            'A lesão sacral (S1-S3) destrói os neurônios motores inferiores, gerando arreflexia anal e bexiga flácida de NMI.',
            'O esvaziamento manual periódico precoce é vital para evitar o colapso miogênico por estiramento do detrusor.',
            'Bexigas de NMI esvaziam-se facilmente à compressão manual, enquanto bexigas de NMS exigem relaxantes esfincterianos.'
          ]
        }
      },
      {
        id: 'sec_nervous_ex3',
        type: 'exercise',
        title: 'Exercício Clínico: Síndromes de NMS vs. NMI & Bexiga Neurogênica',
        exerciseId: 'ex_nervous_03'
      }
    ]
  },
  {
    id: 'lesson_nervous_04_reflexes_schiff_sherrington',
    moduleId: 'mod_nervous',
    title: 'Arcos Reflexos Medulares & Síndrome de Schiff-Sherrington',
    shortDescription: 'Circuitos segmentares, células inibitórias de Border da intumescência lombar e diferenciação de rigidez de descerebração.',
    estimatedMinutes: 14,
    order: 4,
    concepts: ['concept_nervous_reflexes_schiff_sherrington'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_nervous_th4',
        type: 'theory',
        title: 'Fisiologia da Desinibição: As Células de Border & A Rigidez Extensora',
        contentMarkdown: `### As Células de Border (Células de Cooper-Sherrington)

Na substância cinzenta dos segmentos medulares lombares craniais (especialmente L1 a L4), reside uma população especializada de neurônios motores chamados **Células de Border**:
* Essas células emitem axônios longos que ascendem pelo cordão ventral e lateral da medula até a **intumescência cervical (C6-T2)**.
* Sua função fisiológica é liberar **glicina** (neurotransmissor inibitório) nos neurônios motores extensores dos membros torácicos, equilibrando o tônus extensor com a marcha dos membros posteriores.

---

### Fisiopatologia da Síndrome de Schiff-Sherrington

Quando ocorre uma lesão aguda focal severa nos segmentos medulares toracolombares (**T3 a L3**):
1. Os axônios ascendentes das células de Border são bruscamente rompidos.
2. A intumescência cervical perde sua inibição glicinérgica tônica ascendente.
3. Os neurônios motores extensores dos membros torácicos entram em estado de **desinibição excitatória**.
4. O animal manifesta **hipertonia extensora rígida e sustentada dos membros torácicos** em decúbito lateral.

\`\`\`mermaid
flowchart TD
    AcuteTrauma["Trauma Medular Agudo Severo em T3 - L3"] --> AxonSever["Secção dos Axônios Ascendentes das Células de Border"]
    AxonSever --> LossGlycine["Cessação do Aporte de Glicina na Intumescência Cervical (C6 - T2)"]
    LossGlycine --> Disinhibition["Desinibição dos Neurônios Motores Extensores Torácicos"]
    Disinhibition --> SchiffSign["Postura de Schiff-Sherrington: Membros Torácicos Rígidos em Extensão"]
    AcuteTrauma --> ParaPelvic["Paraplegia dos Membros Pélvicos por Bloqueio Descendente"]
\`\`\`

---

### Diagnóstico Diferencial Crítico de Posturas Anormais

| Postura | Localização Anatômica | Membros Torácicos | Membros Pélvicos | Estado Mental | Prognóstico Típico |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Schiff-Sherrington** | **Medula Espinhal T3 - L3** | Rígidos em extensão (mas com motilidade e sensibilidade preservadas) | Paraplégicos | **100% Alerta / Consciente** | Depende da dor profunda pélvica |
| **Rigidez de Descerebração** | **Mesencéfalo rostral** | Rígidos em extensão | Rígidos em extensão | **Comatoso / Estuporado** | Gravíssimo (risco de herniação tentorial) |
| **Rigidez de Descerebelação** | **Cerebelo / Pedúnculos** | Rígidos em extensão | Flexionados sob o corpo (ou estendidos) | Consciente a deprimido | Reservado |

> 📖 Referência Canônica: de Lahunta's *Veterinary Neuroanatomy and Clinical Neurology*, 5th ed.; Dewey & da Costa, *Practical Guide to Canine and Feline Neurology*, 3rd ed., Wiley-Blackwell.

> 💡 Pérola Prova de Título: A postura de Schiff-Sherrington **NÃO piora o prognóstico** de uma hérnia discal toracolombar por si só! O único parâmetro isolado com valor prognóstico verdadeiro é a presença ou ausência de percepção consciente de **dor profunda** nos membros pélvicos.`
      },
      {
        id: 'sec_nervous_lab4',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Thor (Rottweiler Jovem)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Diferenciação Emergencial: Schiff-Sherrington vs. Lesão Encefálica',
          patient: {
            name: 'Thor',
            species: 'Canino',
            breed: 'Rottweiler',
            age: '18 meses',
            weightKg: 42,
            habitatOrEnvironment: 'Sítio / Estrada vicinal'
          },
          vitals: {
            heartRateBpm: 104,
            respiratoryRateRpm: 26,
            temperatureCelsius: 38.7,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Animal atropelado por caminhonete há 1 hora. Apresenta-se em decúbito lateral permanente com os dois braços dianteiros esticados rigidamente para a frente. O veterinário plantonista inicial suspeitou de traumatismo cranioencefálico com lesão de tronco encefálico e sugeriu eutanásia.',
          exams: [
            {
              category: 'physical_exam',
              title: 'Exame Neurológico de Emergência',
              findings: 'Estado mental plenamente consciente e alerta (acompanha o examinador com o olhar, abana a cauda levemente). Pares cranianos intactos (reflexo pupilar à luz e ameaça normais). Membros torácicos com hipertonia extensora em decúbito, mas quando o animal é colocado em estação com suporte pélvico, ele apoia e caminha com os membros anteriores! Membros pélvicos com paraplegia e dor profunda positiva.',
              abnormalValues: [
                { parameter: 'Postura Torácica em Decúbito', value: 'Hipertonia extensora rígida', reference: 'Relaxado', status: 'critical' },
                { parameter: 'Locomoção Torácica Apoiada', value: 'Funcional e voluntária', reference: 'Normal', status: 'normal' },
                { parameter: 'Estado Mental', value: 'Alerta e responsivo', reference: 'Alerta', status: 'normal' },
                { parameter: 'Dor Profunda Pélvica', value: 'Presente bilateralmente', reference: 'Presente', status: 'normal' }
              ]
            }
          ],
          challengePrompt: 'Com estado mental alerta e motricidade torácica preservada em estação, como você corrige a conduta do plantonista e define o caso?',
          decisionOptions: [
            {
              id: 'opt_dec_neuro4_1',
              label: 'Diagnosticar Postura de Schiff-Sherrington secundária a trauma medular em T3-L3 (com dor profunda preservada, conferindo bom prognóstico cirúrgico), cancelando a eutanásia e indicando imagem medular de urgência',
              description: 'Reconhecer que a consciência preservada descarta rigidez de descerebração e que a dor profunda preservada indica taxa de recuperação cirúrgica > 85-90%.',
              isOptimal: true,
              consequenceText: 'Decisão clínica brilhante que salvou a vida do paciente! O plantonista havia confundido Schiff-Sherrington com rigidez de descerebração encefálica. A consciência intacta e a presença de dor profunda pélvica garantem excelente prognóstico de recuperação após estabilização de fratura/hérnia toracolombar.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Reconhecimento correto da síndrome de Schiff-Sherrington',
                mechanism: 'Preservação de dor profunda comprovando viabilidade axonal',
                effect: 'Cancelamento de eutanásia injustificada e cirurgia toracolombar bem-sucedida',
                clinicalMeaning: 'Recuperação completa da locomoção e alta hospitalar funcional'
              }
            },
            {
              id: 'opt_dec_neuro4_2',
              label: 'Concordar com o diagnóstico de rigidez de descerebração e proceder imediatamente à eutanásia humanitária',
              description: 'Assumir que a rigidez dos membros torácicos decorre de lesão terminal de tronco encefálico.',
              isOptimal: false,
              consequenceText: 'Erro médico fatal e injustificável! Na rigidez de descerebração o paciente estaria em coma profundo ou estupor grave com pupilas dilatadas irresponsivas. O cão de 18 meses com consciência alerta e dor profunda tinha prognóstico favorável.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Interpretação semiológica errônea de rigidez postural',
                mechanism: 'Eutanásia de animal com alto potencial de cura',
                effect: 'Perda irreversível da vida do paciente',
                clinicalMeaning: 'Erro deontológico e negligência diagnóstica grave'
              }
            },
            {
              id: 'opt_dec_neuro4_3',
              label: 'Administrar manitol a 20% intravenoso em bólus repetidos considerando hipertensão intracraniana isolada',
              description: 'Tratar o encéfalo ignorando a lesão toracolombar.',
              isOptimal: false,
              consequenceText: 'Inadequado. O paciente não apresenta hipertensão intracraniana (estado mental alerta e reflexos cranianos normais). O manitol causará desidratação e hipotensão sem tratar a compressão medular toracolombar.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Medicação desnecessária para TCE em paciente com trauma espinhal puro',
                mechanism: 'Depleção volêmica com risco de isquemia medular sobreposta',
                effect: 'Hipotensão arterial sistêmica',
                clinicalMeaning: 'Atraso na estabilização cirúrgica da coluna vertebral'
              }
            }
          ],
          learningTakeaways: [
            'No Schiff-Sherrington, a consciência está preservada e os membros torácicos apresentam controle voluntário em estação.',
            'A rigidez extensora torácica decorre da perda de inibição ascendente das células de Border da medula lombar cranial.',
            'O Schiff-Sherrington não confere prognóstico negativo; o parâmetro preditivo é a sensibilidade à dor profunda.'
          ]
        }
      },
      {
        id: 'sec_nervous_ex4',
        type: 'exercise',
        title: 'Exercício Clínico: Reflexos Espinhais & Schiff-Sherrington',
        exerciseId: 'ex_nervous_04'
      }
    ]
  },
  {
    id: 'lesson_nervous_05_spinal_emergencies',
    moduleId: 'mod_nervous',
    title: 'Emergências Espinhais: Hérnias Discais Hansen Tipo I/II & Perda de Dor Profunda',
    shortDescription: 'Fisiopatologia da extrusão vs. protrusão discal, graduação neurológica (1 a 5), critérios cirúrgicos e risco de mielomalácia.',
    estimatedMinutes: 15,
    order: 5,
    concepts: ['concept_nervous_spinal_emergencies'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_nervous_th5',
        type: 'theory',
        title: 'Fisiopatologia da Doença Discal Intervertebral (DDIV) & Mielomalácia',
        contentMarkdown: `### Hansen Tipo I (Extrusão) vs. Hansen Tipo II (Protrusão)

A degeneração do disco intervertebral divide-se em duas categorias canônicas:

1. **Hansen Tipo I (Metaplasia Condroide):**
   * Típica de **raças condrodistróficas** (Dachshund, Basset Hound, Buldogue Francês, Beagle, Shih Tzu).
   * O núcleo pulposo sofre dessecação, mineralização precoce por deposição de hidroxiapatita e transformação cartilaginosa hialina ainda no primeiro ano de vida.
   * **Mecanismo:** Ruptura aguda completa do anel fibroso dorsal com **extrusão explosiva** do núcleo pulposo calcificado para o interior do canal vertebral, gerando contusão violenta e compressão medular imediata.
2. **Hansen Tipo II (Metaplasia Fibróide):**
   * Típica de **raças não condrodistróficas de grande porte** (Pastor Alemão, Labrador, Boxer, Doberman) em idade madura/idosa.
   * Degeneração progressiva do anel fibroso que se torna hipertrofiado e espessado, protruindo lentamente para o canal vertebral (**protrusão discal crônica** sem ruptura total do anel).

---

### Escala de Graduação Neurológica Espinhal (1 a 5)

A classificação da gravidade orienta o tratamento médico vs. cirúrgico e o prognóstico:

| Grau | Sinais Clínicos | Indicação Terapêutica | Prognóstico de Recuperação |
| :--- | :--- | :--- | :--- |
| **Grau 1** | Dor espinhal pura (hiperestesia), sem déficits neurológicos | Tratamento conservador (gaiola 4-6 sem + analgesia) | Excelente (> 95%) |
| **Grau 2** | Paresia não ambulatória leve a moderada (propriocepção retardada, deambula com dificuldade) | Conservador ou Cirúrgico se refratário | Excelente (> 90%) |
| **Grau 3** | Paresia não ambulatória severa (não sustenta o peso, movimentos voluntários débeis) | Cirurgia descompressiva precoce | Muito bom (> 85-90%) |
| **Grau 4** | Paraplegia completa (ausência total de movimentos voluntários), **dor profunda PRESENTE** | Cirurgia descompressiva de urgência (hemilaminectomia) | Bom (> 80-85%) |
| **Grau 5** | Paraplegia completa, **dor profunda AUSENTE** | **Emergência Cirúrgica Máxima (< 24-48h)** | **Reservado (50-60% se < 24h; < 5% se > 48h)** |

\`\`\`mermaid
flowchart TD
    Degeneration["Degeneração Condroide do Disco"] --> RuptureRing["Ruptura do Anel Fibroso Dorsal (Hansen Tipo I)"]
    RuptureRing --> Extrusion["Extrusão Violenta do Núcleo Mineralizado no Canal"]
    Extrusion --> PrimaryTrauma["Trauma Primário: Contusão & Isquemia Vascular Imediata"]
    PrimaryTrauma --> SecondaryCascade["Cascata Secundária: Liberação de Glutamato, Radicais Livres & Hipóxia"]
    SecondaryCascade --> CheckPain{"Sensibilidade à Dor Profunda (Fibras C)?"}
    CheckPain -- "Presente (Graus 1 a 4)" --> DecompressFast["Hemilaminectomia: Descompressão Rápida (> 85% Sucesso)"]
    CheckPain -- "Ausente (< 24h - Grau 5)" --> EmergencyWindow["Emergência Imediata: Janela Cirúrgica de Resgate (50% Sucesso)"]
    CheckPain -- "Ausente (> 48h - Grau 5)" --> MyelomalaciaRisk["Risco Elevado de Mielomalácia Ascendente Progressiva Fatal"]
\`\`\`

---

### O Pesadelo da Mielomalácia Progressiva Ascendente/Descendente

Em cerca de 10 a 15% dos pacientes com paraplegia Grau 5 (sem dor profunda), a contusão medular deflagra uma necrose isquêmica hemorrágica auto-sustentada chamada **Mielomalácia Progressiva**:
* A destruição enzimática e liquefação da substância medular propaga-se no sentido cranial e caudal ao longo de 3 a 7 dias.
* **Sinais Clínicos de Alarme:** Atonia esfincteriana anal progressiva, perda reflexa cranial ascendente da musculatura cutânea do tronco (panniculus reflex) e flacidez dos membros torácicos.
* Ao atingir os segmentos cervicais C3-C5, ocorre destruição dos corpos celulares dos nervos frênicos, culminando em **parada respiratória fatal por paralisia diafragmática**. Não há tratamento curativo uma vez iniciada a mielomalácia ascendente.

> 📖 Referência Canônica: Sharp & Wheeler, *Small Animal Spinal Disorders*, 2nd ed.; Fossum et al., *Small Animal Surgery*, 5th ed., Elsevier.

> 💡 Pérola Prática: Para testar a dor profunda, aperte a articulação interfalângica com pinça hemostática travada. O teste é POSITIVO apenas se houver resposta comportamental consciente (animal olha, tenta morder, dilata pupila, geme). Puxar a perna é apenas reflexo de retirada medular autônomo!`
      },
      {
        id: 'sec_nervous_lab5',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Otto (Buldogue Francês)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Emergência Cirúrgica de Hérnia Discal Hansen Tipo I Grau 5',
          patient: {
            name: 'Otto',
            species: 'Canino',
            breed: 'Buldogue Francês',
            age: '3 anos',
            weightKg: 13,
            habitatOrEnvironment: 'Apartamento'
          },
          vitals: {
            heartRateBpm: 130,
            respiratoryRateRpm: 34,
            temperatureCelsius: 38.8,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Animal apresentou dor há 18 horas e evoluiu com perda súbita e completa da função dos membros pélvicos há 8 horas. Encontra-se paraplégico sem se levantar.',
          exams: [
            {
              category: 'physical_exam',
              title: 'Exame Neurológico de Nocicepção Profunda',
              findings: 'Paraplegia espástica em membros pélvicos. Ao clampear a falange distal com pinça hemostática de Kocher no 3º dente de cremalheira, o cão apresenta flexão reflexa da perna (reflexo de retirada presente), mas permanece com expressão facial neutra, não olha para o membro, não tenta retirar a pata ativamente nem vocaliza.',
              abnormalValues: [
                { parameter: 'Sensibilidade à Dor Profunda', value: 'Ausente bilateralmente', reference: 'Presente', status: 'critical' },
                { parameter: 'Classificação de Grau', value: 'Grau 5', reference: 'Grau 0 (Normal)', status: 'critical' },
                { parameter: 'Reflexo Flexor Local', value: 'Presente (reflexo puro)', reference: 'Presente', status: 'normal' }
              ]
            }
          ],
          challengePrompt: 'Otto tem extrusão discal aguda Grau 5 com perda de dor profunda há 8 horas. Qual conduta preserva a chance de recuperação motora?',
          decisionOptions: [
            {
              id: 'opt_dec_neuro5_1',
              label: 'Encaminhamento cirúrgico imediato em caráter de emergência absoluta para tomografia e hemilaminectomia descompressiva nas próximas horas',
              description: 'Aproveitar a janela dourada (< 24h) antes que a isquemia das fibras axonais profundas se torne irreversível e surja mielomalácia.',
              isOptimal: true,
              consequenceText: 'Decisão impecável que representa o limiar da sobrevivência neurológica! Com perda de dor profunda recente de 8 horas, a descompressão cirúrgica de urgência ainda confere cerca de 50 a 60% de chances de retorno da marcha voluntária. Adiar o procedimento selaria o destino do animal em paralisia permanente ou mielomalácia.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Hemilaminectomia precoce em menos de 12 horas da perda de dor profunda',
                mechanism: 'Alívio da pressão mecânica sobre os vasos centrais da substância cinzenta',
                effect: 'Restabelecimento do fluxo arterial medular e preservação dos axônios nociceptivos',
                clinicalMeaning: 'Chance real de recuperação da marcha e continência urinária'
              }
            },
            {
              id: 'opt_dec_neuro5_2',
              label: 'Internar em repouso e iniciar dexametasona com gabapentina por 5 dias antes de cogitar cirurgia',
              description: 'Aguardar redução do edema com corticoterapia clínica.',
              isOptimal: false,
              consequenceText: 'Erro médico fatal! Pacientes Grau 5 submetidos a manejo clínico perdem definitivamente qualquer chance de retorno da marcha e desenvolvem mielomalácia em alta proporção. A cirurgia não pode esperar.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Adiamento de cirurgia em paciente com perda de dor profunda',
                mechanism: 'Isquemia axonal contínua e necrose tecidual irreversível',
                effect: 'Perda permanente e definitiva de função motora',
                clinicalMeaning: 'Paraplegia irreversível permanente'
              }
            },
            {
              id: 'opt_dec_neuro5_3',
              label: 'Indicar eutanásia imediata alegando que a ausência de dor profunda tem 100% de mortalidade',
              description: 'Julgar o paciente como incurável no primeiro exame.',
              isOptimal: false,
              consequenceText: 'Incorreto e antiético. Embora o prognóstico seja reservado, animais operados dentro das primeiras 24 horas ainda apresentam mais de 50% de taxa de sucesso funcional.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Desconhecimento da taxa de recuperação em cirurgias precoces de Grau 5',
                mechanism: 'Eutanásia precipitada de paciente com janela cirúrgica aberta',
                effect: 'Morte evitável do animal',
                clinicalMeaning: 'Falha ética e diagnóstica'
              }
            }
          ],
          learningTakeaways: [
            'A ausência de percepção consciente à dor profunda classifica o paciente como Grau 5 de emergência cirúrgica máxima.',
            'A flexão da pata durante o teste é apenas o reflexo de retirada segmentar e não comprova sensibilidade nociceptiva consciente.',
            'A janela ótima para hemilaminectomia em pacientes Grau 5 é de até 24 a 48 horas após a perda de dor profunda.'
          ]
        }
      },
      {
        id: 'sec_nervous_ex5',
        type: 'exercise',
        title: 'Exercício Clínico: Hérnias Discais & Perda de Dor Profunda',
        exerciseId: 'ex_nervous_05'
      }
    ]
  }
];
// ==========================================
// 4. DIGESTÓRIO & GLÂNDULAS ANEXAS COMPARADAS
// ==========================================
export const DIGESTIVE_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_digestive_01',
    conceptId: 'concept_digestive_rumen_microbiome',
    type: 'multiple_choice',
    prompt: 'Qual é o principal tampão fisiológico que impede a queda abrupta do pH ruminal durante a digestão normal de forragens em ruminantes e qual a sua fonte primária?',
    options: [
      {
        id: 'opt_dig_1',
        text: 'Bicarbonato de sódio e fosfatos secretados em grande volume pela saliva durante a mastigação e ruminação',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! Uma vaca leiteira adulta produz entre 150 e 200 litros de saliva alcalina por dia rica em bicarbonato (NaHCO3) e fosfatos, que neutralizam continuamente a enorme quantidade de ácidos graxos voláteis gerados pela fermentação ruminal.'
      },
      {
        id: 'opt_dig_2',
        text: 'Secreção de ácido clorídrico e pepsina pelas células parietais do rúmen',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O rúmen, retículo e omaso são pré-estômagos revestidos por epitélio estratificado pavimentoso não-glandular (não produzem secreções gástricas nem HCl; isso ocorre apenas no abomaso).'
      },
      {
        id: 'opt_dig_3',
        text: 'Bile secretada diretamente pelo ducto colédoco no interior do retículo',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A bile é desembocada no duodeno cranial através da papila duodenal, atuando na emulsificação de lipídios no intestino delgado, e jamais no retículo-rúmen.'
      },
      {
        id: 'opt_dig_4',
        text: 'Absorção passiva de água no ceco e cólon transverso',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A absorção no intestino grosso atua na conservação hidroeletrolítica terminal, sem capacidade de tamponamento do ecossistema pré-gástrico.'
      }
    ]
  },
  {
    id: 'ex_digestive_02',
    conceptId: 'concept_digestive_gastric_mucosa_barrier',
    type: 'multiple_choice',
    prompt: 'Na Síndrome da Úlcera Gástrica Equina (EGUS), qual é a distinção anatomofisiológica entre a mucosa escamosa (ESGD) e a mucosa glandular (EGGD) em relação ao margo plicatus e qual é o papel das prostaglandinas (PGE2 e PGI2) na barreira protetora glandular?',
    options: [
      {
        id: 'opt_dig_2_1',
        text: 'A mucosa escamosa (proximal ao margo plicatus) é destituída de glândulas e não secreta muco nem bicarbonato, dependendo apenas do efeito tampão do alimento e saliva contra o HCl; já a mucosa glandular (distal) possui fossetas gástricas protegidas por uma camada contínua de muco-bicarbonato e fluxo sanguíneo microvascular sustentado constitutivamente por PGE2 e PGI2 via COX-1',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! O estômago equino é dividido pelo margo plicatus em duas metades: a porção escamosa estratificada (sem muco protetor, altamente vulnerável ao salpicamento de ácido clorídrico e ácidos graxos voláteis durante o jejum ou exercício) e a porção glandular (rica em células parietais que secretam HCl e células mucosas que secretam a barreira de muco/bicarbonato). O uso crônico de anti-inflamatórios não esteroidais (AINEs) inibe a COX-1, colapsando os níveis de PGE2/PGI2, reduzindo o fluxo sanguíneo da lâmina própria e desencadeando úlceras na mucosa glandular (EGGD).'
      },
      {
        id: 'opt_dig_2_2',
        text: 'A mucosa escamosa produz grandes quantidades de gastrina que protegem o margo plicatus contra o ácido acético',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A mucosa escamosa é completamente aglandular e não sintetiza gastrina; as células G secretoras de gastrina localizam-se exclusivamente no antro pilórico da mucosa glandular.'
      },
      {
        id: 'opt_dig_2_3',
        text: 'O margo plicatus impede a entrada de bile na vesícula biliar do cavalo através de um esfíncter muscular liso',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O cavalo não possui vesícula biliar; a bile é secretada continuamente diretamente no duodeno pelo ducto hepático.'
      },
      {
        id: 'opt_dig_2_4',
        text: 'As prostaglandinas estimulam diretamente as células parietais a produzir mais ácido clorídrico com pH < 1.0',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Pelo contrário: as prostaglandinas E2 e I2 inibem alostericamente a secreção ácida parietal via proteína Gi acoplada à adenilil-ciclase e aumentam a secreção de bicarbonato e fluxo sanguíneo.'
      }
    ]
  },
  {
    id: 'ex_digestive_03',
    conceptId: 'concept_digestive_vfa_motility',
    type: 'multiple_choice',
    prompt: 'Durante a motilidade retículo-ruminal fisiológica em bovinos, como se distinguem o ciclo primário (de mistura) e o ciclo secundário (de eructação), e qual nervo craniano e centro bulbar coordenam essas contrações sincronizadas?',
    options: [
      {
        id: 'opt_dig_3_1',
        text: 'O ciclo primário inicia com contração bifásica do retículo seguida por onda sequencial de contração nos sacos dorsal e ventral do rúmen (mistura e estratificação do bolo); o ciclo secundário ocorre independentemente do retículo e envolve contração dos sacos cegos caudais impulsionando a bolha de gás em direção à cárdia para eructação; ambos são coordenados pelo Centro Gástrico Medular através do Nervo Vago (X par craniano)',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O ciclo primário (mistura) ocorre a uma frequência de 1 a 2 contrações por minuto e tem início no retículo (contração bifásica que joga o alimento groseiro para o saco dorsal e o líquido para o omaso). O ciclo secundário (eructação) ocorre aproximadamente a cada dois ciclos primários: o retículo fica relaxado enquanto os sacos caudais contraem, empurrando o bolsão gasoso de metano e CO2 em direção ao orifício cárdico para eructação reflexa. A vagotomia ou compressão do nervo vago (como na reticuloperitonite traumática) abole esses ciclos, gerando indigestão vagal com atonia e timpanismo.'
      },
      {
        id: 'opt_dig_3_2',
        text: 'O ciclo primário promove a eructação do metano e o secundário bombeia o bolo para o intestino grosso sob controle do nervo hipoglosso',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O ciclo primário é de mistura mecânica e estratificação, não de eructação; e o nervo hipoglosso (XII) inerva a musculatura da língua, não os pré-estômagos.'
      },
      {
        id: 'opt_dig_3_3',
        text: 'Ambos os ciclos são automáticos e controlados puramente pelo plexo mioentérico local sem qualquer conexão com o sistema nervoso central',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Diferente do intestino delgado, a motilidade retículo-ruminal depende obrigatoriamente do arco reflexo central vagal no tronco encefálico (vago-vagal).'
      },
      {
        id: 'opt_dig_3_4',
        text: 'O ciclo secundário comprime o abomaso contra o diafragma estimulando o vômito fisiológico de ruminantes',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Ruminantes adultos não vomitam fisiologicamente; o ciclo secundário destina-se estritamente à eructação gasosa reflexa silenciosa.'
      }
    ]
  },
  {
    id: 'ex_digestive_04',
    conceptId: 'concept_digestive_hindgut_equine',
    type: 'multiple_choice',
    prompt: 'Um cavalo de salto consome dieta excessivamente rica em grãos com alta carga de amido em uma única refeição (> 2 g de amido/kg por refeição), excedendo a capacidade de digestão enzimática da amilase pancreática no intestino delgado. Qual é a sequência de eventos bioquímicos e microbiológicos que ocorre no ceco e cólon maior?',
    options: [
      {
        id: 'opt_dig_4_1',
        text: 'O amido não digerido extravasa para o ceco, sofrendo rápida fermentação por bactérias amilolíticas (Streptococcus bovis / equinus e Lactobacillus spp.), com produção massiva de ácido láctico e queda do pH intraluminal (< 6.0); a acidez provoca morte e lise de bactérias celulolíticas Gram-negativas, liberando grandes quantidades de endotoxinas (LPS) que permeiam a mucosa colônica danificada em direção à circulação portal',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! O intestino delgado do cavalo tem capacidade limitada de secreção de amilase pancreática. Quando a oferta de amido ultrapassa 2 g/kg por refeição, o excedente atinge a câmara de fermentação pós-gástrica (ceco e cólon maior). A proliferação desgovernada de bactérias produtoras de ácido láctico reduz drasticamente o pH cecal, destruindo a flora simbiótica celulolítica. A lise de Gram-negativos inunda o lúmen com lipopolissacarídeo (LPS endotóxico). A mucosa perde a integridade da barreira de oclusão e o LPS ganha a circulação, provocando endotoxemia sistêmica, colite e laminite.'
      },
      {
        id: 'opt_dig_4_2',
        text: 'O amido se cristaliza no ceco formando enterólitos de fosfato de amônio e magnésio em 4 horas',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Os enterólitos são concreções minerais crônicas que levam meses a anos para se formar (em cólon menor/maior), não um evento agudo por sobrecarga de amido.'
      },
      {
        id: 'opt_dig_4_3',
        text: 'O amido inibe completamente a secreção de ácido clorídrico no estômago, transformando o ceco em um órgão aeróbico',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O ceco é e permanece estritamente anaeróbico; a patogênese decorre da proliferação de bactérias ácido-tolerantes anaeróbicas facultativas.'
      },
      {
        id: 'opt_dig_4_4',
        text: 'O excesso de carboidrato no ceco é absorvido como glicose livre pelas microvilosidades do cólon dorsal direito',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O epitélio do ceco e cólon do equino não possui transportadores SGLT-1 de glicose; monossacarídeos são obrigatoriamente fermentados em AGVs e lactato.'
      }
    ]
  },
  {
    id: 'ex_digestive_05',
    conceptId: 'concept_digestive_hepatobiliary_enterohepatic',
    type: 'multiple_choice',
    prompt: 'Quando o quimo ácido e gorduroso atinge o lúmen duodenal proveniente do estômago, quais hormônios enteroendócrinos são liberados pela mucosa intestinal e quais respostas fisiológicas coordenadas eles desencadeiam no pâncreas exócrino, vesícula biliar e circulação entero-hepática?',
    options: [
      {
        id: 'opt_dig_5_1',
        text: 'A secretina (células S) estimula a secreção pancreática de água e bicarbonato para neutralizar o ácido; a colecistocinina / CCK (células I) estimula a contração da vesícula biliar, relaxamento do esfíncter de Oddi e liberação de zimogênios pancreáticos acinares (tripsinogênio, lipase, amilase); mais de 95% dos sais biliares são subsequentemente reabsorvidos no íleo terminal e reciclados via veia porta',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A digestão intestinal é orquestrada pela dupla de hormônios enteroendócrinos: a Secretina (ativada pelo pH ácido < 4.5) aciona os ductos pancreáticos para secretar solução aquosa rica em HCO3-, restabelecendo o pH neutro ótimo para a ação enzimática. A Colecistocinina (CCK, ativada por lipídios e peptídeos) contrai a vesícula e secreta as enzimas digestivas na forma inativa de pró-enzimas. No íleo terminal, transportadores ativos de sódio (ASBT) captam > 95% dos ácidos biliares, retornando-os ao fígado na circulação entero-hepática.'
      },
      {
        id: 'opt_dig_5_2',
        text: 'A gastrina e o glucagon estimulam a secreção de ácido clorídrico dentro da luz duodenal para acelerar a ação da bile',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O duodeno precisa neutralizar o ácido para não inativar as enzimas pancreáticas e não sofrer erosão ulcerativa.'
      },
      {
        id: 'opt_dig_5_3',
        text: 'A somatostatina fecha permanentemente o esfíncter de Oddi para evitar que a bile contamine o jejuno proximal',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A bile precisa entrar no jejuno para formar micelas lipídicas e permitir a absorção de triglicerídeos e vitaminas lipossolúveis (A, D, E, K).'
      },
      {
        id: 'opt_dig_5_4',
        text: 'A insulina é secretada no ducto de Wirsung para emulsificar as gorduras em gotas de quilotórax',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A insulina é um hormônio endócrino secretado na circulação pelas células beta das ilhotas de Langerhans, sem atuação na luz digestiva exócrina.'
      }
    ]
  }
];

export const DIGESTIVE_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_digestive_01_rumen_fermentation',
    moduleId: 'mod_digestive',
    title: 'Fisiologia Digestiva Comparada: O Ecossistema do Rúmen',
    shortDescription: 'Simbiose ruminal, dinâmica de fermentação de celulose vs. amido, tampão salivar e absorção epitelial de AGVs.',
    estimatedMinutes: 14,
    order: 1,
    concepts: ['concept_digestive_rumen_microbiome'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_digestive_th1',
        type: 'theory',
        title: 'A Cuba Fermentativa Pré-Gástrica dos Ruminantes',
        contentMarkdown: `### O Ruminante Alimenta Bactérias; As Bactérias Alimentam o Ruminante

O rúmen é uma imensa câmara de fermentação anaeróbica que abriga uma microbiota densa ($10^{10}$ bactérias/mL, $10^6$ protozoários ciliados e fungos celulolíticos).

Os mamíferos não possuem genes para codificar a enzima **celulase**. São as bactérias ruminais (ex: *Fibrobacter succinogenes*, *Ruminococcus albus*) que quebram as ligações $\\beta\\text{-1,4-glicosídicas}$ da celulose e hemicelulose vegetal.

---

### A Tríade dos Ácidos Graxos Voláteis (AGVs)

A quebra da fibra e do amido resulta na produção de três ácidos principais que são absorvidos pelas **papilas ruminais**:
1. **Acetato ($C_2$):** Representa 60-70% dos AGVs em dietas com forragem. Precursor da síntese de gordura da carcaça e do leite.
2. **Propionato ($C_3$):** Representa 15-30%. Principal precursor da gliconeogênese no fígado.
3. **Butirato ($C_4$):** Representa 10-15%. Metabolizado pelo próprio epitélio ruminal em beta-hidroxibutirato para fornecer energia ao crescimento e manutenção das papilas ruminais.

\`\`\`mermaid
flowchart TD
    Forage["Forragem Vegetal (Celulose / Hemicelulose)"] --> CelluloBac["Bactérias Celulolíticas (Fibrobacter, Ruminococcus)"]
    CelluloBac --> Acetate["Acetato C2: 65% (Lipogênese & Gordura do Leite)"]
    Starch["Amido & Concentrado Solúvel"] --> AmyloBac["Bactérias Amilolíticas (Streptococcus bovis, Prevotella)"]
    AmyloBac --> Propionate["Propionato C3: 20% (Gliconeogênese Hepática)"]
    CelluloBac & AmyloBac --> Butyrate["Butirato C4: 15% (Energia para Papilas Ruminais)"]
    Acetate & Propionate & Butyrate --> PapillaeAbsorb["Absorção Transepitelial pelas Papilas Ruminais"]
\`\`\`

> 📖 Referência Canônica: Cunningham's *Textbook of Veterinary Physiology*, 6th ed., Elsevier; Dukes' *Physiology of Domestic Animals*, 13th ed., Wiley.

> 💡 Pérola Clínica / Prova de Residência: Relação Acetato:Propionato no Rúmen: Em dietas volumosas sadias, a proporção de AGVs mantém relação Acetato:Propionato > 3:1. Quando o excesso de carboidratos solúveis (amido de milho) derruba a relação para < 2.2:1, ocorre a Síndrome da Queda de Gordura do Leite (Milk Fat Depression) devido à formação de isômeros trans-10 de ácidos graxos que inibem a lipogênese mamária.

> ⚠️ Alerta Crítico: Transições bruscas para dietas ricas em grãos provocam proliferação explosiva de Streptococcus bovis e síntese maciça de ácido D-lático. O pH ruminal cai abaixo de 5.0, lisando bactérias celulolíticas e protozoários ciliados, gerando rumenites químicas ulcerativas, desidratação osmótica hiperaguda e translocação bacteriana para a veia porta com abscessos hepáticos secundários por Fusobacterium necrophorum.`
      },
      {
        id: 'sec_digestive_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Touro Brutus (Nelore)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Acidose Ruminal Lática Aguda por Sobrecarga de Grãos',
          patient: {
            name: 'Brutus',
            species: 'Bovino',
            breed: 'Nelore P.O.',
            age: '3 anos',
            weightKg: 580,
            habitatOrEnvironment: 'Piquete de confinamento de terminação'
          },
          vitals: {
            heartRateBpm: 96,
            respiratoryRateRpm: 36,
            temperatureCelsius: 37.8,
            mucousMembranes: 'Congestas com linha tóxica avermelhada',
            capillaryRefillTimeSec: 3.0
          },
          anamnesis: 'Brutus arrombou a porteira do silo de grãos de milho moído e ingeriu aproximadamente 15 kg de concentrado há 12 horas. O animal apresenta diarreia profusa amarelada, aquosa e de odor ácido acentuado. Rúmen completamente atônico (0 movimentos/3 min), com sensação de "chapinhar" de líquido à palpação profunda na fossa paralombar esquerda.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Análise do Fluido Ruminal (Sondagem Orogástrica)',
              findings: 'Líquido ruminal de coloração leitosa/amarelada, odor azedo característico e ausência de protozoários ciliados móveis à microscopia óptica.',
              abnormalValues: [
                { parameter: 'pH do Suco Ruminal', value: '4.8', reference: '6.2 - 6.8', status: 'critical' },
                { parameter: 'Motilidade de Protozoários Ciliados', value: '0% (Morte maciça)', reference: '> 80% móveis', status: 'critical' },
                { parameter: 'L-lactato Sérico', value: '6.8 mmol/L', reference: '< 1.5 mmol/L', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Qual é a estratégia emergencial para salvar o ecossistema ruminal e reverter o choque endotóxico de Brutus?',
          decisionOptions: [
            {
              id: 'opt_dec_dig_1',
              label: 'Lavagem ruminal por sonda orogástrica + Transfaunação ruminal com suco de doador sadio + Bicarbonato IV',
              description: 'Remover o amido fermentado e ácido lático residual, transfundir microbiota ativa e corrigir a desidratação e acidose sistêmica.',
              isOptimal: true,
              consequenceText: 'Conduta magistral! A lavagem ruminal remove o substrato tóxico antes que ele continue a ser fermentado por Streptococcus bovis. A transfaunação com 5 a 10 litros de fluido ruminal fresco de um doador sadio repovoa imediatamente a flora simbiótica e os protozoários ciliados vitais.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Esvaziamento do amido lático e transfaunação de suco ruminal sadio',
                mechanism: 'Restauração do pH ruminal para > 6.0 e reintrodução de bactérias e protozoários celulolíticos',
                effect: 'Cessação da absorção de ácido D-lático e reversão da desidratação osmótica intraluminal',
                clinicalMeaning: 'Retorno da motilidade ruminal normal, cicatrização do epitélio ruminal e prevenção de abscesso hepático metastático'
              }
            },
            {
              id: 'opt_dec_dig_2',
              label: 'Administrar apenas purgante salino de sulfato de magnésio e liberar para pasto',
              description: 'Tentar fazer o amido passar mais rápido pelo trato gastrointestinal.',
              isOptimal: false,
              consequenceText: 'Conduta desastrosa! O sulfato de magnésio é um laxativo hiperosmótico. Em um animal com acidose que já está severamente desidratado (com líquido sequestrado no rúmen), isso causará choque hipovolêmico fulminante.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Administração de laxante salino hipertônico em rúmen já hipertônico',
                mechanism: 'Atração maciça de água do espaço vascular para o lúmen intestinal',
                effect: 'Colapso hemodinâmico, hipotensão refratária e insuficiência renal aguda pré-renal',
                clinicalMeaning: 'Morte do animal em choque hipovolêmico e acidótico'
              }
            },
            {
              id: 'opt_dec_dig_3',
              label: 'Fornecer apenas feno seco e água à vontade no cocho',
              description: 'Aguardar o animal se alimentar sozinho de fibra longa.',
              isOptimal: false,
              consequenceText: 'Inadequado. Com pH 4.8, o epitélio ruminal está sofrendo queimação química (rumenite lática) e a motilidade está paralisada. Sem lavagem e sem correção da acidose sistêmica, o quadro evoluirá para septicemia.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Abordagem expectante em acidose química severa',
                mechanism: 'Erosão da barreira mucosal ruminal com translocação bacteriana (Fusobacterium necrophorum)',
                effect: 'Migração bacteriana pela circulação portal para o fígado',
                clinicalMeaning: 'Formação de múltiplos abscessos hepáticos e endocardite bacteriana em 30-60 dias'
              }
            }
          ],
          learningTakeaways: [
            'O pH ruminal abaixo de 5.0 mata os protozoários ciliados e causa rumenite química descolativa.',
            'A transfaunação de suco ruminal de um animal doador saudável é a ferramenta terapêutica mais eficaz para restabelecer a digestão pré-gástrica.',
            'O sequestro osmótico de água para dentro do rúmen gera desidratação sistêmica severa e choque.'
          ]
        }
      },
      {
        id: 'sec_digestive_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Fermentação Ruminal & Acidose Lática',
        exerciseId: 'ex_digestive_01'
      }
    ]
  },
  {
    id: 'lesson_digestive_02_gastric_mucosa_barrier',
    moduleId: 'mod_digestive',
    title: 'Fisiologia Gástrica Monogástrica, Barreira Mucosa & EGUS',
    shortDescription: 'Células parietais (bomba H+/K+ ATPase), barreira muco-bicarbonato, prostaglandinas E2/I2 e gastropatia por AINEs.',
    estimatedMinutes: 14,
    order: 2,
    concepts: ['concept_digestive_gastric_mucosa_barrier'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_digestive_th2',
        type: 'theory',
        title: 'Secreção de Cloridrato & Os Elementos da Citoproteção Gástrica',
        contentMarkdown: `### A Célula Parietal & A Bomba de Prótons

A secreção de **ácido clorídrico (HCl)** pelas células parietais do estômago atinge concentrações de hidrogênio até 1 milhão de vezes superiores às do plasma sanguíneo (pH luminal de 1.5 a 2.0).

A etapa final comum é catalisada pela **H+/K+ ATPase (Bomba de Prótons)** na membrana apical:
* **Estimuladores Fisiológicos:**
  1. **Acetilcolina (Via Parassimpática / Nervo Vago):** Atua em receptores muscarínicos M3, elevando cálcio intracelular.
  2. **Gastrina (Células G do Antro):** Atua em receptores CCK-2 na célula parietal e nas células enterocromafim-símile (ECL).
  3. **Histamina (Células ECL):** O mais potente amplificador; liga-se a receptores **H2**, ativando a via do AMPc.
* **Inibidor Farmacológico Padrão-Ouro:** O **Omeprazol** inibe irreversivelmente a H+/K+ ATPase por ligação covalente às pontes dissulfeto da enzima.

---

### A Barreira de Mucosa Gástrica: O Escudo de Muco-Bicarbonato

Para sobreviver ao próprio ácido e pepsina, a mucosa gástrica glandular conta com três linhas de defesa estritamente dependentes de **Prostaglandina E2 (PGE2) e Prostaciclina (PGI2)** geradas constitutivamente pela **Cicloxigenase-1 (COX-1)**:
1. **Gel de Muco e Bicarbonato Pré-Epitelial:** Um gradiente contínuo de pH (pH 2 no lúmen vs. pH 7 junto à superfície celular epitelial).
2. **Junções de Oclusão Epiteliais & Fosfolipídios:** Membranas apicais impermeáveis a cátions H+.
3. **Fluxo Sanguíneo Microvascular da Lâmina Própria:** Remove os prótons que porventura vazem e fornece oxigênio e nutrientes para a regeneração celular contínua (restituição epitelial em 24-48 horas).

\`\`\`mermaid
flowchart TD
    ParietalStim["Estímulo: Vago (M3), Gastrina (CCK-2) & Histamina (H2)"] --> ProtonPump["Ativação da H+/K+ ATPase na Membrana Apical"]
    ProtonPump --> HClRelease["Secreção de Ácido Clorídrico (pH 1.5 - 2.0)"]
    COX1["Cicloxigenase-1 Constitutiva"] --> PG["Síntese de Prostaglandina E2 & I2"]
    PG --> MucusBicarb["Camada Protetora de Muco-Bicarbonato"]
    PG --> MicroVascFlow["Vasodilatação & Fluxo Sanguíneo da Mucosa"]
    NSAIDs["Uso Inadvertido de AINEs (Bloqueio de COX-1)"] --> PGLoss["Colapso de PGE2"]
    PGLoss --> MucusLoss["Destruição do Muco & Isquemia Microvascular"]
    HClRelease --> AcidBackDiffusion["Retrodifusão de H+ para a Lâmina Própria"]
    AcidBackDiffusion --> Ulceration["Úlcera Gástrica Perfurante, Hemorragia & Melena"]
\`\`\`

> 📖 Referência Canônica: Cunningham's *Textbook of Veterinary Physiology*, 6th ed.; Andrews et al., *Equine Gastric Ulcer Syndrome: Recommendations from the European College of Equine Internal Medicine (ECEIM)*, J Vet Intern Med.

> ⚠️ Alerta Farmacológico Crítico: AINEs administrados em pacientes desidratados ou a associação criminosa de AINE com Corticosteroide colapsa a síntese de prostaglandinas em mais de 90%, provocando úlceras agudas perfurantes com hematêmese, melena e óbito por peritonite em cães e equinos.`
      },
      {
        id: 'sec_digestive_lab2',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Tornado (Cavalo de CCE)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Gastroendoscópico de EGUS em Cavalo Atleta',
          patient: {
            name: 'Tornado',
            species: 'Equino',
            breed: 'Brasileiro de Hipismo (BH)',
            age: '7 anos',
            weightKg: 520,
            habitatOrEnvironment: 'Centro de treinamento hípico em baia'
          },
          vitals: {
            heartRateBpm: 46,
            respiratoryRateRpm: 18,
            temperatureCelsius: 37.9,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Animal sob treinamento intenso de salto apresenta perda de apetite para ração concentrada, bruxismo (ranger de dentes após as refeições), sensibilidade acentuada ao apertar a cilha na sela e queda de rendimento esportivo.',
          exams: [
            {
              category: 'imaging',
              title: 'Gastroscopia com Tubo de 3 Metros',
              findings: 'Avaliação após jejum alimentar de 16 horas. Visualização completa do estômago e margo plicatus.',
              abnormalValues: [
                { parameter: 'Mucosa Escamosa Dorsal ao Margo Plicatus', value: 'Úlceras confluentes profundas com fibrina (Grau 3/4)', reference: 'Grau 0 (Íntegra)', status: 'critical' },
                { parameter: 'Mucosa Glandular Antral', value: 'Hiperemia multifocal discreta', reference: 'Lisa e íntegra', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Com úlceras escamosas confluentes Grau 3 confirmadas em gastroscopia, qual é o protocolo terapêutico de escolha?',
          decisionOptions: [
            {
              id: 'opt_dec_dig2_1',
              label: 'Omeprazol oral tamponado (4 mg/kg 24/24h pela manhã em jejum) por 28 dias + feno de alfafa fracionado antes do exercício',
              description: 'Inibir covalentemente a bomba de prótons para manter o pH gástrico > 4.0 e fornecer o efeito tampão de cálcio da alfafa.',
              isOptimal: true,
              consequenceText: 'Conduta impecável respaldada pelas diretrizes internacionais do ECEIM! O omeprazol suprime a produção ácida nas células parietais, permitindo que a mucosa escamosa cicatrize por reepitelização em 28 dias. O feno de alfafa, rico em cálcio e proteína, atua como tampão natural que neutraliza o ácido residual antes do treino.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Inibição seletiva da H+/K+ ATPase com omeprazol associada a feno de alfafa',
                mechanism: 'Manutenção sustentada de pH gástrico > 4.0 durante todo o dia',
                effect: 'Cicatrização completa das úlceras escamosas e alívio do bruxismo',
                clinicalMeaning: 'Retorno do apetite, ganho de peso e recuperação do rendimento atlético'
              }
            },
            {
              id: 'opt_dec_dig2_2',
              label: 'Administrar antiácido líquido simples (hidróxido de alumínio 50 mL uma vez por semana)',
              description: 'Usar antiácido fraco em dose espaçada.',
              isOptimal: false,
              consequenceText: 'Totalmente ineficaz! O esvaziamento gástrico do cavalo é extremamente rápido (menos de 60 a 90 minutos para líquidos). Uma dose de hidróxido de alumínio neutraliza o ácido por apenas 30 minutos e sua aplicação semanal não tem qualquer efeito cicatrizante.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de dose subterapêutica espaçada de antiácido de ação curta',
                mechanism: 'Persistência do banho ácido clorídrico sobre a mucosa desprotegida',
                effect: 'Aprofundamento das úlceras escamosas em direção à submucosa vascular',
                clinicalMeaning: 'Hemorragia gástrica, cólica recorrente crônica e anemia'
              }
            },
            {
              id: 'opt_dec_dig2_3',
              label: 'Aumentar a ração de grãos e suspender o feno para evitar dilatação do estômago',
              description: 'Fornecer apenas concentrado de alta densidade calórica.',
              isOptimal: false,
              consequenceText: 'Desastre biológico! Grãos fermentam rapidamente em ácidos graxos voláteis solúveis que, em meio ácido, tornam-se não ionizados e penetram nas células escamosas, destruindo suas mitocôndrias e acelerando a necrose da parede gástrica.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Dieta hiperglicídica sem volumoso para cavalo com úlcera',
                mechanism: 'Produção maciça de AGVs e ácido clorídrico sem o efeito tampão salivar do feno',
                effect: 'Perfuração da parede gástrica e peritonite séptica fulminante',
                clinicalMeaning: 'Óbito do paciente por peritonite química e choque'
              }
            }
          ],
          learningTakeaways: [
            'A mucosa escamosa do estômago equino não possui camada de muco protetor e depende do pH neutro mantido pelo alimento e saliva.',
            'O omeprazol (4 mg/kg/dia por 28 dias) é o padrão-ouro de cicatrização para ESGD.',
            'O feno de alfafa fornece excelente tamponamento biológico graças ao seu alto teor de cálcio e magnésio.'
          ]
        }
      },
      {
        id: 'sec_digestive_ex2',
        type: 'exercise',
        title: 'Exercício Clínico: Fisiologia Gástrica & Síndrome de Úlcera Equina',
        exerciseId: 'ex_digestive_02'
      }
    ]
  },
  {
    id: 'lesson_digestive_03_vfa_motility',
    moduleId: 'mod_digestive',
    title: 'Cinética dos Ácidos Graxos Voláteis & Ciclos de Motilidade Retículo-Ruminal',
    shortDescription: 'Absorção de acetato/propionato/butirato pelas papilas, ciclo primário (mistura) vs. secundário (eructação) e indigestão vagal.',
    estimatedMinutes: 14,
    order: 3,
    concepts: ['concept_digestive_vfa_motility'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_digestive_th3',
        type: 'theory',
        title: 'Mecânica Motora Retículo-Ruminal & Transporte de AGVs',
        contentMarkdown: `### A Dinâmica dos Ciclos de Motilidade

O retículo-rúmen não descansa: ele executa uma coreografia motora ininterrupta coordenada pelos ramos ventral e dorsal do **Nervo Vago (X par craniano)** originados no centro gástrico do bulbo:

1. **Ciclo Primário (Mistura e Triagem):**
   * **Contração Reticular Bifásica:**
     * 1ª fase: Contração fraca que mistura o conteúdo fluido e esvazia partículas pequenas pelo orifício retículo-omasal.
     * 2ª fase: Contração vigorosa que ejeta o bolo grosseiro não fermentado em direção ao saco dorsal do rúmen.
   * **Onda Contrária Ruminal:** O saco dorsal contrai cranialmente para caudalmente, seguido pela contração do saco ventral. Isso cria uma circulação interna que estratifica o conteúdo em três camadas:
     * **Topo:** Bolha de gases de fermentação (CO2 e CH4).
     * **Meio:** "Colchão de forragem" (fibras longas boiando que estimulam mecanicamente a ruminação).
     * **Fundo:** Fração líquida com partículas densas e pesadas prontas para avançar ao omaso.
2. **Ciclo Secundário (Eructação Gasosa):**
   * Ocorre aproximadamente uma vez a cada dois ciclos primários.
   * O retículo permanece relaxado; o saco ventral e os sacos cegos caudais contraem vigorosamente para frente, empurrando o bolsão de gás em direção à cárdia desobstruída. A cárdia se abre e o gás é propelido pelo esôfago até a faringe (onde 80% do gás é inspirado para os pulmões antes de ser expelido, evitando emissão odorífera para predadores).

---

### Cinética Transepitelial de Absorção dos AGVs

As papilas ruminais são revestidas por epitélio estratificado escamoso com 4 camadas (estrato basal, espinhoso, granuloso e córneo). A absorção dos AGVs é um processo biofísico de alta eficiência:
* **Forma Não Ionizada (Lipofílica - R-COOH):** Em pH ruminal levemente ácido (6.2 a 6.8), parte dos AGVs encontra-se protonada e atravessa passivamente a membrana plasmática por difusão simples.
* **Forma Dissociada / Ionizada (R-COO-):** A vasta maioria dos AGVs é transportada por antiportadores anion-bicarbonato ($AGV^- / HCO_3^-$), que simultaneamente secretam bicarbonato para o lúmen ruminal, neutralizando a acidez local.

\`\`\`mermaid
flowchart TD
    BulbarCenter["Centro Gástrico Bulbar (Tronco Encefálico)"] --> VagusNerve["Nervo Vago (X Par Craniano)"]
    VagusNerve --> PrimaryCycle["Ciclo Primário (Mistura / 1 a 2 por min)"]
    PrimaryCycle --> ReticBiphasic["Contração Bifásica do Retículo"]
    ReticBiphasic --> DorsalVentralWave["Onda nos Sacos Dorsal & Ventral do Rúmen"]
    DorsalVentralWave --> Stratification["Estratificação do Conteúdo Ruminal"]
    VagusNerve --> SecondaryCycle["Ciclo Secundário (Eructação / 1 a cada 2 min)"]
    SecondaryCycle --> CaudalSacs["Contração dos Sacos Cegos Caudais"]
    CaudalSacs --> GasToCardia["Impulsão da Bolha de Gás (CO2 / CH4) até a Cárdia"]
    GasToCardia --> Eructation["Abertura da Cárdia & Eructação Silenciosa"]
\`\`\`

> 📖 Referência Canônica: Cunningham's *Textbook of Veterinary Physiology*, 6th ed.; Radostits et al., *Veterinary Medicine*, 10th ed.

> 💡 Pérola Prova de Título: A **Síndrome de Hoflund (Indigestão Vagal)** decorre de lesão traumática ou inflamatória nos ramos do nervo vago (frequente após reticuloperitonite por corpo estranho pérfuro-cortante). O animal apresenta distensão crônica bilateral do abdômen em forma de "maçã e pera" (saco dorsal do rúmen dilatado à esquerda e abomaso atônico repleto à direita), com bradicardia paradoxal e atonia reticular.`
      },
      {
        id: 'sec_digestive_lab3',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Princesa (Vaca Girolando)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Investigação de Indigestão Vagal & Timpanismo Gasoso Recorrente',
          patient: {
            name: 'Princesa',
            species: 'Bovino',
            breed: 'Girolando',
            age: '6 anos',
            weightKg: 560,
            habitatOrEnvironment: 'Pastagem de Brachiaria com histórico de reforma de cerca'
          },
          vitals: {
            heartRateBpm: 52,
            respiratoryRateRpm: 20,
            temperatureCelsius: 38.3,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Animal apresenta histórico de timpanismo gasoso recidivante nos últimos 15 dias, aliviado temporariamente com sonda orogástrica, mas que retorna em 24h. Apresenta perda de escore corporal e fezes escassas pastosas com partículas de forragem não digerida de comprimento > 4 cm.',
          exams: [
            {
              category: 'physical_exam',
              title: 'Ausculta Ruminal & Teste do Dorso',
              findings: 'Ausência total de ciclos primários normais à ausculta da fossa paralombar esquerda (0 contrações/3 min). Bradicardia sinusal em repouso (52 bpm). Teste do beliscamento no garrote positivo (animal geme e reluta em abaixar a coluna).',
              abnormalValues: [
                { parameter: 'Frequência de Movimentos Ruminais', value: '0 / 3 minutos (Atonia)', reference: '2 a 3 / 2 minutos', status: 'critical' },
                { parameter: 'Frequência Cardíaca', value: '52 bpm (Bradicardia paradoxal)', reference: '60 - 80 bpm', status: 'low' },
                { parameter: 'Metal Detector / Detector de Metais', value: 'Positivo sobre o retículo ventral', reference: 'Negativo', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com atonia ruminal, bradicardia e sinal positivo de metal no retículo indicando reticuloperitonite traumática com compressão vagal, qual é a conduta diagnóstica e cirúrgica indicada?',
          decisionOptions: [
            {
              id: 'opt_dec_dig3_1',
              label: 'Laparotomia exploratória pelo flanco esquerdo com Rumenotomia para remoção do corpo estranho metálico reticular e lavagem de aderências peritoneais',
              description: 'Acessar cirurgicamente o saco dorsal do rúmen, esvaziar parcialmente o conteúdo, explorar o retículo manualmente e extrair o arame/prego antes que ocorra pericardite traumática.',
              isOptimal: true,
              consequenceText: 'Excelente decisão cirúrgica! A rumenotomia pelo flanco esquerdo sob anestesia local em L invertido ou paravertebral é a técnica definitiva. A palpação manual do retículo permite extrair o corpo estranho transfixante e desbridar o abscesso que estava comprimindo o ramo ventral do vago.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Rumenotomia e extração mecânica do corpo estranho reticular',
                mechanism: 'Descompressão do nervo vago e drenagem do foco inflamatório peritoneal',
                effect: 'Retorno gradual dos ciclos de motilidade primário e secundário',
                clinicalMeaning: 'Cura da indigestão vagal e restauração permanente da ruminação e eructação'
              }
            },
            {
              id: 'opt_dec_dig3_2',
              label: 'Prescrever apenas antiflatulento (simeticona oral) diário e manter o animal solto',
              description: 'Tratar apenas o timpanismo gasoso como dispepsia dietética simples.',
              isOptimal: false,
              consequenceText: 'Erro negligente grave! O timpanismo é secundário à falência do ciclo de eructação por compressão do nervo vago. Sem remover o metal, o corpo estranho continuará migrando em direção ao pericárdio, culminando em reticulopericardite séptica fatal.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Manejo puramente paliativo de sintoma secundário',
                mechanism: 'Migração mecânica do arame através do diafragma até o saco pericárdico',
                effect: 'Pericardite traumática com tamponamento cardíaco e pulso jugular positivo',
                clinicalMeaning: 'Óbito inevitável por choque cardiogênico séptico'
              }
            },
            {
              id: 'opt_dec_dig3_3',
              label: 'Realizar trocarteamento do rúmen e deixar o trocarte fixado indefinidamente',
              description: 'Manter fístula ruminal aberta permanente com trocarte de campo.',
              isOptimal: false,
              consequenceText: 'Inadequado. O trocarte de alívio rápido é para emergências asfixiantes. Mantê-lo fixado causa necrose de parede abdominal, peritonite fibrinopurulenta difusa e não soluciona a atonia vagal.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Fistulação crônica com trocarte não projetado para permanência',
                mechanism: 'Vazamento contínuo de suco ruminal para a cavidade peritoneal',
                effect: 'Peritonite química e bacteriana generalizada',
                clinicalMeaning: 'Deterioração clínica grave e sepse'
              }
            }
          ],
          learningTakeaways: [
            'A motilidade retículo-ruminal é dependente da inervação vagal central para os ciclos primário e secundário.',
            'A reticuloperitonite traumática comprime o nervo vago, gerando indigestão vagal com atonia e timpanismo recorrente.',
            'A rumenotomia pelo flanco esquerdo é a intervenção cirúrgica curativa de escolha para remoção de corpos estranhos reticulares.'
          ]
        }
      },
      {
        id: 'sec_digestive_ex3',
        type: 'exercise',
        title: 'Exercício Clínico: Motilidade Retículo-Ruminal & Indigestão Vagal',
        exerciseId: 'ex_digestive_03'
      }
    ]
  },
  {
    id: 'lesson_digestive_04_hindgut_equine',
    moduleId: 'mod_digestive',
    title: 'Digestão Pós-Gástrica nos Herbívoros: Fermentação Cecocolônica Equina',
    shortDescription: 'Ecologia microbiana do ceco e cólon maior, digestão de fibras, trânsito colônico e fisiopatologia da acidose cecal por amido.',
    estimatedMinutes: 15,
    order: 4,
    concepts: ['concept_digestive_hindgut_equine'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_digestive_th4',
        type: 'theory',
        title: 'A Cuba Fermentativa Pós-Gástrica: Anatomia & Fisiologia do Intestino Grosso Equino',
        contentMarkdown: `### Compartimentalização do Trato Digestório Equino

O cavalo é um **fermentador pós-gástrico estrito** (hindgut fermenter). Essa estratégia evolutiva combina:
* **Digestão Pré-Cecal (Estômago e Intestino Delgado):** Digestão enzimática rápida e absorção de proteínas, carboidratos solúveis (açúcares simples), gorduras e minerais.
* **Fermentação Pós-Cecal (Ceco e Cólon Maior):** Uma câmara fermentativa de volume impressionante (100 a 140 litros) que abriga bactérias celulolíticas e protozoários semelhantes aos do rúmen.

---

### O Circuito Anatômico do Cólon Maior e os Pontos Críticos de Impactação

O cólon ascendente (maior) é dobrado sobre si mesmo em forma de ferradura dupla, apresentando estreitamentos anatômicos marcantes onde a taxa de fluxo diminui drasticamente:

$$\\text{Ceco} \\longrightarrow \\text{Cólon Ventral Direito} \\longrightarrow \\text{Flexura Esternal} \\longrightarrow \\text{Cólon Ventral Esquerdo}$$

$$\\text{Cólon Ventral Esquerdo} \\xrightarrow{\\textbf{Flexura Pélvica}} \\text{Cólon Dorsal Esquerdo} \\longrightarrow \\text{Flexura Diafragmática} \\longrightarrow \\text{Cólon Dorsal Direito}$$

* **A Flexura Pélvica:** O diâmetro do lúmen reduz-se bruscamente de cerca de 30 cm (no cólon ventral esquerdo) para apenas 8-10 cm (no cólon dorsal esquerdo), com uma curva em "U" de 180 graus. É o sítio mais comum de **impactação alimentar por desidratação** ou forragem de má qualidade.
* **Absorção de Água e Eletrólitos:** Mais de 95% do imenso volume hídrico secretado pelo trato digestivo cranial é reabsorvido no cólon ventral e dorsal direito.

\`\`\`mermaid
flowchart TD
    Ingestion["Ingestão de Fibra & Volumoso"] --> StomachSmallInt["Digestão Pré-Cecal Enzimática (Estômago/ID)"]
    StomachSmallInt --> Cecum["Ingresso no Ceco: Início da Fermentação Celulolítica"]
    Cecum --> VentralColon["Cólon Ventral Esquerdo (Grande Diâmetro)"]
    VentralColon --> PelvicFlexure["Flexura Pélvica: Estreitamento para 8-10 cm & Curva em U"]
    PelvicFlexure --> DorsalColon["Cólon Dorsal Esquerdo & Direito"]
    DorsalColon --> SmallColon["Cólon Menor: Formação das Bolas de Fezes (Pelotas Córneas)"]
\`\`\`

> 📖 Referência Canônica: Cunningham's *Textbook of Veterinary Physiology*, 6th ed.; Auer & Stick, *Equine Surgery*, 5th ed., Elsevier.

> 💡 Pérola Prática / Exame de Cólica: Na palpação retal de um equino com cólica por impactação de flexura pélvica, a mão do examinador introduzida na cavidade pélvica esquerda palpa com facilidade uma estrutura tubular com consistência de massa de modelar ou bola de boliche indentável, localizada logo na entrada da bacia pélvica esquerda.`
      },
      {
        id: 'sec_digestive_lab4',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Barão (Cavalo Crioulo)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Clínico de Impactação de Flexura Pélvica Equina',
          patient: {
            name: 'Barão',
            species: 'Equino',
            breed: 'Crioulo',
            age: '9 anos',
            weightKg: 440,
            habitatOrEnvironment: 'Piquete com pastagem madura seca e bebedouro distante'
          },
          vitals: {
            heartRateBpm: 54,
            respiratoryRateRpm: 18,
            temperatureCelsius: 37.7,
            mucousMembranes: 'Rosadas e secas',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Animal apresenta dor abdominal leve e intermitente há 18 horas (olha para o flanco, esgravata o chão e deita-se calmamente). Não defeca há 14 horas. Acesso à água foi restrito nos últimos 2 dias devido a congelamento do encanamento.',
          exams: [
            {
              category: 'physical_exam',
              title: 'Palpação Retal & Sondagem Nasogástrica',
              findings: 'Sondagem nasogástrica com refluxo espontâneo nulo (líquido < 0.5 L). À palpação retal profunda no quadrante caudoventral esquerdo, identifica-se a flexura pélvica recheada de conteúdo alimentar firme e indentável (consistência de argila dura), medindo cerca de 25 cm de diâmetro.',
              abnormalValues: [
                { parameter: 'Palpação da Flexura Pélvica', value: 'Massa indentável aumentada', reference: 'Flexível e vazia', status: 'critical' },
                { parameter: 'Motilidade Cecocolônica', value: 'Hipomotilidade (1 borborigmo/2 min)', reference: '2 a 4 borborigmos/min', status: 'high' },
                { parameter: 'Volume de Refluxo Gástrico', value: 'Zero', reference: '< 1 L', status: 'normal' }
              ]
            }
          ],
          challengePrompt: 'Com impactação de flexura pélvica sem refluxo gástrico e FC de 54 bpm, qual protocolo clínico desfaz a massa obstrutiva?',
          decisionOptions: [
            {
              id: 'opt_dec_dig4_1',
              label: 'Fluidoterapia enteral hipotônica via sonda nasogástrica (5 a 8 L de água morna com sulfato de magnésio ou dioctilsulfossuccinato / DSS) a cada 2-4 horas + analgesia com dipirona ou flunixina meglumina',
              description: 'Hidratar diretamente a massa fecal impactada intraluminalmente sem forçar peristaltismo violento, permitindo que a fibra amoleça e progrida.',
              isOptimal: true,
              consequenceText: 'Conduta clínica perfeita e consagrada! Como não há refluxo gástrico obstrutivo cranial, a sonda nasogástrica é a melhor via para administrar grandes volumes de líquido diretamente ao cólon. O sulfato de magnésio atua como laxativo osmótico que atrai água para dentro da massa impactada, amolecendo-a em 12 a 24 horas.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Hidratação enteral intraluminal contínua e analgesia com AINE',
                mechanism: 'Amolecimento progressivo da ingesta impactada na flexura pélvica',
                effect: 'Restauração da motilidade propulsiva e passagem do bolo para o cólon dorsal',
                clinicalMeaning: 'Eliminação espontânea de fezes amolecidas em 18 horas e resolução completa da cólica sem cirurgia'
              }
            },
            {
              id: 'opt_dec_dig4_2',
              label: 'Administrar altas doses de neostigmina intravenosa contínua para forçar a contração espasmódica do cólon',
              description: 'Usar pró-cinético colinérgico potente contra uma massa obstrutiva sólida.',
              isOptimal: false,
              consequenceText: 'Erro médico fatal! Administrar agentes pró-cinéticos espasmódicos contra uma obstrução mecânica luminal fechada aumenta violentamente a pressão intraluminal cranial à impactação, provocando ruptura da parede do cólon e morte por peritonite fecal.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de procinético espasmódico em cólon impactado',
                mechanism: 'Contração violenta da musculatura lisa contra resistência fixa',
                effect: 'Ruptura transmural da flexura pélvica com extravasamento de fezes no abdômen',
                clinicalMeaning: 'Choque séptico hiperagudo e morte em poucas horas'
              }
            },
            {
              id: 'opt_dec_dig4_3',
              label: 'Encaminhar para laparotomia exploratória imediata de urgência sem qualquer tentativa clínica prévia',
              description: 'Submeter o cavalo a anestesia geral e cirurgia sem tentar hidratação por sonda.',
              isOptimal: false,
              consequenceText: 'Conduta excessivamente invasiva e precipitada. Mais de 90% das impactações simples de flexura pélvica com FC < 55 bpm e sem refluxo gástrico resolvem-se com sucesso pelo tratamento clínico conservador bem conduzido.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Indicação cirúrgica precoce em condição puramente médica',
                mechanism: 'Exposição desnecessária a riscos de anestesia geral e enterotomia',
                effect: 'Custo financeiro exorbitante e morbidade de incisão cirúrgica',
                clinicalMeaning: 'Recuperação lenta que poderia ter sido obtida por sondagem simples'
              }
            }
          ],
          learningTakeaways: [
            'A flexura pélvica é o sítio mais frequente de impactação alimentar devido ao seu estreitamento anatômico para 8-10 cm.',
            'A ausência de refluxo nasogástrico espontâneo permite o uso seguro de hidratação enteral por sonda nasogástrica.',
            'Nunca utilize fármacos pró-cinéticos espasmódicos (neostigmina) contra uma obstrução mecânica sólida no trato gastrointestinal.'
          ]
        }
      },
      {
        id: 'sec_digestive_ex4',
        type: 'exercise',
        title: 'Exercício Clínico: Digestão Cecocolônica & Impactação de Flexura Pélvica',
        exerciseId: 'ex_digestive_04'
      }
    ]
  },
  {
    id: 'lesson_digestive_05_hepatobiliary_enterohepatic',
    moduleId: 'mod_digestive',
    title: 'Fisiologia Hepatobiliar, Circulação Entero-Hepática & Secreção Pancreática',
    shortDescription: 'Síntese de ácidos biliares, reciclagem ileal (ASBT), colecistocinina, secretina e zimogênios pancreáticos exócrinos.',
    estimatedMinutes: 14,
    order: 5,
    concepts: ['concept_digestive_hepatobiliary_enterohepatic'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_digestive_th5',
        type: 'theory',
        title: 'A Dupla Hepato-Pancreática na Digestão Intestinal',
        contentMarkdown: `### Síntese & Circulação Entero-Hepática dos Ácidos Biliares

Os **ácidos biliares primários** (ácido cólico e quenodesoxicólico) são sintetizados pelos hepatócitos a partir do colesterol via enzima microssomal limitante **colesterol 7-alfa-hidroxilase (CYP7A1)**:
1. **Conjugação e Excreção:** Antes da secreção nos canalículos biliares, são conjugados a **taurina** ou **glicina** (tornando-se sais biliares anfipáticos hidrossolúveis). Felinos conjugam quase exclusivamente com taurina.
2. **Formação de Micelas:** No duodeno, os sais biliares emulsificam gotas de gordura insolúveis, formando **micelas mistas** que facilitam a ação da lipase e colipase pancreáticas.
3. **Reciclagem Ileal Eficiente:** Ao atingirem o íleo terminal, mais de **95% dos ácidos biliares são reabsorvidos ativamente** pelo transportador apical sódio-dependente (ASBT), retornando ao fígado via veia porta (circulação entero-hepática). Apenas 5% são perdidos nas fezes, o que estimula a síntese hepática compensatória basal.

---

### Secreção Pancreática Exócrina: Células Acinares vs. Ductaiss

O pâncreas exócrino funciona através de duas unidades celulares funcionais coordenadas hormonalmente:
* **Células Acinares (Estimuladas por Colecistocinina - CCK):** Sintetizam e secretam as **enzimas digestivas** armazenadas em grânulos de zimogênio:
  * **Tripsinogênio:** A enzima-chave mestra. Ao atingir o duodeno, a **enteropeptidase (enterocinase)** da borda em escova cliva o tripsinogênio em **tripsina ativa**, que por sua vez ativa todas as outras pró-enzimas (quimiotripsinogênio, pró-carboxipeptidase, pró-elastase).
  * **Lipase e Amilase Pancreáticas:** Secretadas já em forma ativa.
* **Células Ductaiss (Estimuladas por Secretina):** Respondem à chegada de íons H+ no duodeno secretando uma solução aquosa rica em **Bicarbonato (HCO3-)**, mediada pelo trocador Cl-/HCO3- e pelo canal CFTR, neutralizando a acidez gástrica e elevando o pH duodenal para 6.5 - 7.5.

\`\`\`mermaid
flowchart TD
    ChymeEnter["Quimo Ácido & Gorduroso Entra no Duodeno"] --> StimS["Estímulo de Células S Duodenais"]
    ChymeEnter --> StimI["Estímulo de Células I Duodenais"]
    StimS --> Secretin["Liberação de Secretina no Sangue"]
    Secretin --> PancreatDucts["Células Ductaiss: Secreção Maciça de Água & HCO3-"]
    PancreatDucts --> NeutralizeAcid["Neutralização do Ácido Gástrico no Duodeno (pH 7.0)"]
    StimI --> CCK["Liberação de Colecistocinina (CCK)"]
    CCK --> Gallbladder["Contração da Vesícula Biliar & Abertura de Oddi"]
    CCK --> PancreatAcini["Células Acinares: Exocitose de Tripsinogênio, Lipase & Amilase"]
    Gallbladder --> BileEmulsion["Emulsificação Micelar de Gorduras"]
    BileEmulsion & PancreatAcini --> OptimalDigestion["Digestão Intestinal Ótima"]
    OptimalDigestion --> IlealASBT["Reabsorção Ativa de 95% dos Sais Biliares no Íleo"]
    IlealASBT --> PortalVein["Retorno ao Fígado pela Veia Porta (Circulação Entero-Hepática)"]
\`\`\`

> 📖 Referência Canônica: Cunningham's *Textbook of Veterinary Physiology*, 6th ed.; Thrall et al., *Veterinary Hematology and Clinical Chemistry*, 2nd ed.

> 💡 Pérola Fisiopatológica: Na **Pancreatite Aguda**, ocorre falha na barreira de isolamento celular: o tripsinogênio é ativado precocemente em tripsina **dentro do próprio ácino pancreático** (por colocalização com hidrolases lisossomais como catepsina B). A tripsina intracelular ativa a cascata enzimática no interior do órgão, gerando **autodigestão proteolítica e necrose gordurosa peripancreática aguda**.`
      },
      {
        id: 'sec_digestive_lab5',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Toby (Schnauzer Miniatura)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Fisiopatológico da Pancreatite Necrosante Aguda',
          patient: {
            name: 'Toby',
            species: 'Canino',
            breed: 'Schnauzer Miniatura',
            age: '6 anos',
            weightKg: 8.5,
            habitatOrEnvironment: 'Casa interna'
          },
          vitals: {
            heartRateBpm: 140,
            respiratoryRateRpm: 38,
            temperatureCelsius: 39.5,
            mucousMembranes: 'Congestas e ressecadas',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'Tutor ofereceu sobras de churrasco (gordura de picanha) há 24 horas. Toby apresentou êmese incoercível alimentar e biliar, recusa alimentar completa e postura de "prece maometana" (dor abdominal cranial intensa com cotovelos no chão e pélvis elevada).',
          exams: [
            {
              category: 'laboratorial',
              title: 'Painel Específico Pancreático & Inflamatório',
              findings: 'Colheita sérica imediata na emergência.',
              abnormalValues: [
                { parameter: 'Lipase Pancreática Canina Específica (Spec cPL)', value: '1.250 mcg/L', reference: '< 200 mcg/L', status: 'critical' },
                { parameter: 'Proteína C-Reativa (PCR)', value: '128 mg/L', reference: '< 10 mg/L', status: 'critical' },
                { parameter: 'Triglicerídeos Séricos', value: '680 mg/dL', reference: '30 - 150 mg/dL', status: 'high' },
                { parameter: 'Ultrassonografia Abdominal', value: 'Pâncreas espessado e hipoecogênico com gordura peripancreática hiperecogênica (esteatonecrose)', reference: 'Normal', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com Spec cPL > 1.000 mcg/L confirmando pancreatite aguda necrosante com dor severa, qual protocolo fisiológico reverte a hipoperfusão tecidual e estabiliza o pâncreas?',
          decisionOptions: [
            {
              id: 'opt_dec_dig5_1',
              label: 'Fluidoterapia balanceada vigorosa com Ringer Lactato IV + analgesia multimodal intensiva (opioide como metadona) + maropitant e nutrição enteral precoce por sonda tão logo cessem os vômitos',
              description: 'Restaurar a microcirculação pancreática isquêmica, controlar a dor severa e alimentar os enterócitos para evitar translocação bacteriana.',
              isOptimal: true,
              consequenceText: 'Conduta padrão-ouro perfeita! A pancreatite aguda gera trombose capilar e isquemia no parênquima; a fluidoterapia rápida restaura a perfusão microvascular, limitando a necrose. Ao contrário do mito antigo do "jejum zero absoluto prolongado", a nutrição enteral precoce pós-êmese mantém a barreira epitelial intestinal íntegra, reduzindo a mortalidade e o risco de sepse.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Restauração volêmica e analgesia com opioide puro associada à nutrição precoce',
                mechanism: 'Preservação da perfusão microvascular dos ácinos e prevenção de translocação bacteriana',
                effect: 'Queda da Spec cPL e PCR em 72h com estancamento da esteatonecrose',
                clinicalMeaning: 'Recuperação clínica completa sem progressão para sepse ou choque'
              }
            },
            {
              id: 'opt_dec_dig5_2',
              label: 'Jejum alimentar e hídrico absoluto por 10 dias seguidos sem fluidoterapia venosa',
              description: 'Manter "o pâncreas em repouso absoluto" sem qualquer suporte calórico ou hídrico.',
              isOptimal: false,
              consequenceText: 'Erro retrógrado fatal! O jejum hídrico em um cão desidratado com vômitos agrava a isquemia pancreática, acelerando a necrose ácinar. O jejum alimentar por 10 dias atrofia as vilosidades do intestino delgado, desencadeando translocação bacteriana em massa e sepse fatal.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Jejum forçado extremo e desidratação não corrigida',
                mechanism: 'Colapso microvascular pancreático e quebra da barreira mucosal ileal',
                effect: 'Necrose pancreática hemorrágica difusa e sepse por E. coli',
                clinicalMeaning: 'Choque séptico e óbito inevitável'
              }
            },
            {
              id: 'opt_dec_dig5_3',
              label: 'Prescrever anti-inflamatório não esteroidal (meloxicam em alta dose) para cessar a dor',
              description: 'Utilizar AINE como analgésico primário na pancreatite.',
              isOptimal: false,
              consequenceText: 'Contraindicado e perigoso! Em um cão desidratado e com pancreatite, o AINE inibe a COX-1/COX-2 renal e gástrica, precipitando necrose de papila renal com insuficiência renal aguda e úlceras gástricas perfurantes hemorrágicas.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Administração de AINE em paciente hemodinamicamente comprometido',
                mechanism: 'Isquemia da arteríola aferente renal e mucosa gástrica',
                effect: 'Lesão Renal Aguda intrínseca e gastrite ulcerativa hemorrágica',
                clinicalMeaning: 'Falência múltipla de órgãos (MODS)'
              }
            }
          ],
          learningTakeaways: [
            'A pancreatite aguda decorre da ativação precoce do tripsinogênio em tripsina dentro dos ácinos pancreáticos.',
            'A fluidoterapia intravenosa agressiva precoce é essencial para combater a trombose da microcirculação pancreática.',
            'O conceito moderno preconiza nutrição enteral precoce assim que os vômitos forem controlados, evitando atrofia de vilosidades intestinais.'
          ]
        }
      },
      {
        id: 'sec_digestive_ex5',
        type: 'exercise',
        title: 'Exercício Clínico: Secreção Pancreática & Fisiopatologia da Pancreatite',
        exerciseId: 'ex_digestive_05'
      }
    ]
  }
];
// ==========================================
// 5. SISTEMA GENITURINÁRIO & FISIOLOGIA RENAL
// ==========================================
export const UROGENITAL_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_urogenital_01',
    conceptId: 'concept_urogenital_gfr_renal_failure',
    type: 'multiple_choice',
    prompt: 'Um gato macho castrado de 4 anos apresenta estrangúria (esforço doloroso para urinar) há 36 horas. Na palpação abdominal, a bexiga está extremamente distendida, firme e do tamanho de uma laranja (obstrução uretral mecânica por plugue mucoso). O traçado de ECG na admissão revela bradicardia (FC 90 bpm), ondas T pontiagudas e simétricas ("em tenda"), ausência de ondas P e alargamento do complexo QRS. Qual é o distúrbio eletrolítico iminente de risco de morte?',
    options: [
      {
        id: 'opt_uro_1',
        text: 'Hipercalemia severa (K+ > 7.5 mEq/L) com toxicidade miocárdica despolarizante aguda',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A incapacidade de excretar urina retém potássio no organismo. Níveis de K+ acima de 7-8 mEq/L despolarizam o potencial de membrana das células do miocárdio, inativando canais de sódio, gerando achatamento e perda de onda P, ondas T apiculadas e risco iminente de parada cardiorrespiratória em assistolia.'
      },
      {
        id: 'opt_uro_2',
        text: 'Hipocalemia profunda com hiperpolarização das fibras de Purkinje',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A obstrução pós-renal impede a excreção tubular de potássio, levando a hipercalemia (acúmulo) e nunca à hipocalemia.'
      },
      {
        id: 'opt_uro_3',
        text: 'Hipocalcemia puerperal aguda por tetania de lactação',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O paciente é um felino macho castrado obstruído, não uma fêmea no pico de lactação.'
      },
      {
        id: 'opt_uro_4',
        text: 'Hipercloremia isolada com alcalose metabólica respiratória',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A retenção urinária produz acidose metabólica uremica e retenção de sulfatos e fosfatos, não alcalose.'
      }
    ]
  },
  {
    id: 'ex_urogenital_02',
    conceptId: 'concept_urogenital_tubular_transport',
    type: 'multiple_choice',
    prompt: 'Em um cão recebendo furosemida para manejo de edema pulmonar cardiogênico, em qual segmento tubular do néfron e sobre qual cotransportador apical específico esse fármaco atua, e por que seu bloqueio colapsa o gradiente osmótico medular de contracorrente?',
    options: [
      {
        id: 'opt_uro_2_1',
        text: 'Atua no ramo ascendente espesso da alça de Henle, bloqueando o cotransportador apical Na+/K+/2Cl- (NKCC2); ao impedir a reabsorção ativa de solutos para o interstício medular, dissipa a hipertonicidade medular necessária para a reabsorção de água mediada por ADH nos ductos coletores',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! O ramo ascendente espesso da alça de Henle (TALH) é impermeável à água, mas reabsorve ativamente sódio, potássio e cloreto através do carreador NKCC2 na membrana luminal. Esse transporte gera a hipertonicidade medular que alimenta o mecanismo multiplicador de contracorrente. A furosemida inibe reversivelmente o sítio de cloreto do NKCC2, retendo eletrólitos e água no lúmen tubular, provocando diurese maciça e reduzindo a capacidade de concentrar a urina.'
      },
      {
        id: 'opt_uro_2_2',
        text: 'Atua no túbulo proximal inibindo o transportador SGLT-2 de glicose e aminoácidos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O SGLT-2 é o cotransportador de sódio-glicose no túbulo contorcido proximal (alvo de gliflozinas), não da furosemida.'
      },
      {
        id: 'opt_uro_2_3',
        text: 'Atua no glomérulo aumentando a pressão oncótica capilar por bloqueio da podocina',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A furosemida é um diurético tubular de alça e não atua destruindo podócitos glomerulares.'
      },
      {
        id: 'opt_uro_2_4',
        text: 'Atua nos ductos coletores antagonizando diretamente os receptores V2 de vasopressina (ADH)',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Os antagonistas de receptor V2 são os vaptanos (aquavéticos), e não a furosemida.'
      }
    ]
  },
  {
    id: 'ex_urogenital_03',
    conceptId: 'concept_urogenital_aki_vs_ckd',
    type: 'multiple_choice',
    prompt: 'Um cão Pastor Alemão de 5 anos é admitido com azotemia severa aguda (Creatinina 9.4 mg/dL, Ureia 240 mg/dL). Quais critérios clínicos, laboratoriais e ultrassonográficos diferenciam de forma categórica uma Injúria Renal Aguda (IRA/AKI Grau 4) por nefrotoxicidade de uma Doença Renal Crônica (DRC IRIS Estágio 4 terminal)?',
    options: [
      {
        id: 'opt_uro_3_1',
        text: 'Na IRA: histórico hiperagudo (< 48-72h), escore corporal preservado sem sarcopenia, rins normais ou aumentados de tamanho (nefropatia inflamatória/edematosa com halo medular hiperecogênico), hematócrito normal (sem tempo para anemia arregenerativa por carência de EPO) e sedimento urinário ativo com células tubulares e cilindros granulosos celulares',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A diferenciação entre IRA e DRC é crucial para prognóstico e conduta: a DRC cursa com história de semanas a meses de poliúria/polidipsia, perda acentuada de peso e sarcopenia, rins pequenos, irregulares e fibróticos ao ultrassom, anemia arregenerativa normocítica normocrômica (por falência de eritropoietina) e sedimento inativo com cilindros céreos largos. Na IRA, a lesão é recente, o hematócrito é normal (ou elevado por desidratação), os rins estão tumefeitos e o sedimento é rico em debris e cilindros granulosos frescos.'
      },
      {
        id: 'opt_uro_3_2',
        text: 'Na IRA os rins sempre medem menos de 2 cm ao ultrassom com calcificação difusa da bexiga',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Rins atróficos e pequenos são a marca registrada da DRC crônica em estágio terminal, não da IRA.'
      },
      {
        id: 'opt_uro_3_3',
        text: 'A DRC cursa com leucocitose com desvio à esquerda e febre alta de 41 °C em todos os casos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A DRC é uma doença crônica esclerótica afebril na ausência de pielonefrite aguda sobreposta.'
      },
      {
        id: 'opt_uro_3_4',
        text: 'Na IRA a creatinina sérica nunca ultrapassa 2.0 mg/dL devido ao mecanismo de compensação hepática',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Na IRA anúrica ou oligúrica a creatinina sérica sobe de 2 a 5 mg/dL por dia, atingindo frequentemente valores superiores a 10 mg/dL.'
      }
    ]
  },
  {
    id: 'ex_urogenital_04',
    conceptId: 'concept_urogenital_hhg_axis',
    type: 'multiple_choice',
    prompt: 'Na neuroendocrinologia da reprodução de fêmeas mamíferas, qual é o mecanismo molecular pelo qual as kisspeptinas hipotalâmicas e o estrogênio folicular coordenam a transição do feedback negativo para o feedback positivo desencadeador do pico pré-ovulatório de LH?',
    options: [
      {
        id: 'opt_uro_4_1',
        text: 'Concentrações basais moderadas de estradiol exercem feedback negativo sobre o centro tônico hipotalâmico; quando o folículo dominante atinge a maturação e sustenta altos níveis de estradiol (> 36 horas), o feedback inverte-se para positivo sobre os neurônios de kisspeptina no centro de pico (AVPV / AVP), gerando liberação torrencial em pulso de GnRH que estimula as células gonadotróficas hipofisárias a liberar o pico pré-ovulatório de LH',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! Os neurônios secretores de GnRH não possuem receptores funcionais para estradiol; a sinalização estrogênica é mediada exclusivamente pelos neurônios produtores de Kisspeptina (Kiss1) expressando receptores ER-alfa. No centro de onda/pico (área pré-óptica anteroventral - AVPV), altas concentrações de estradiol ativam a transcrição de kisspeptina, que se liga ao receptor KISS1R/GPR54 nos neurônios de GnRH, disparando o pico maciço de GnRH que culmina na liberação de LH para a ovulação.'
      },
      {
        id: 'opt_uro_4_2',
        text: 'A progesterona secretada pelo folículo imaturo induz a destruição das células da teca interna no ovário',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O folículo produz estrogênio a partir de andrógenos tecais; a progesterona só é sintetizada em larga escala pelo corpo lúteo após a ovulação e luteinização.'
      },
      {
        id: 'opt_uro_4_3',
        text: 'O GnRH é secretado no lobo posterior da hipófise através dos axônios do trato supraóptico-hipofisário',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O GnRH é liberado no sistema porta-hipofisário na eminência média para atingir a adeno-hipófise (lobo anterior); o lobo posterior secreta ocitocina e vasopressina.'
      },
      {
        id: 'opt_uro_4_4',
        text: 'O pico de LH ocorre apenas quando a prolactina suprime totalmente os receptores de FSH no endométrio',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A prolactina atua na manutenção da lactação e luteólise em algumas espécies, sem relação com o gatilho pré-ovulatório de LH estrogênio-dependente.'
      }
    ]
  },
  {
    id: 'ex_urogenital_05',
    conceptId: 'concept_urogenital_comparative_estrus',
    type: 'multiple_choice',
    prompt: 'Em relação à fisiologia comparada do ciclo estral em animais domésticos, como se diferenciam a vaca, a égua, a cadela e a gata quanto à frequência cíclica, estacionalidade e mecanismo ovulatório?',
    options: [
      {
        id: 'opt_uro_5_1',
        text: 'Vaca: poliéstrica contínua anual com ovulação espontânea; Égua: poliéstrica estacional de dias longos (primavera/verão) com ovulação espontânea; Cadela: monoéstrica não estacional (1-2 ciclos/ano) com diestro luteal obrigatório prolongado (~60 dias); Gata: poliéstrica estacional de dias longos com ovulação induzida / reflexa estimulada pela cópula mecânica',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Essa classificação comparada é a base da reprodução veterinária: bovinos ciclam a cada 21 dias o ano inteiro; equinos entram em anestro estacional no outono/inverno (dias curtos) mediado pela melatonina pineal; cadelas apresentam estro seguido por diestro lúteo idêntico quer haja prenhez ou não (pseudoprenhez fisiológica); e felinas são ovuladoras reflexas (as espículas do pênis estimulam a vagina, enviando estímulo sensorial espinhal que desencadeia o pico de LH e ovulação apenas após a cópula).'
      },
      {
        id: 'opt_uro_5_2',
        text: 'Todas as espécies domésticas compartilham ciclo menstrual idêntico com descamação endometrial hemorrágica cíclica a cada 28 dias',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Apenas primatas superiores apresentam ciclo menstrual com descamação tecidual. Animais domésticos apresentam ciclo estral, no qual o endométrio é reabsorvido se não houver fecundação.'
      },
      {
        id: 'opt_uro_5_3',
        text: 'A cadela ovula exclusivamente por reflexo copulatório e a gata possui diestro obrigatório sem anestro',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A cadela tem ovulação espontânea e a gata tem ovulação induzida.'
      },
      {
        id: 'opt_uro_5_4',
        text: 'A égua é poliéstrica de dias curtos estimulada por altas concentrações de melatonina no inverno',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Pequenos ruminantes (ovelhas e cabras) são poliéstricos de dias curtos (outono); a égua é poliéstrica de dias longos (fotoperíodo positivo na primavera).'
      }
    ]
  }
];

export const UROGENITAL_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_urogenital_01_gfr_failure',
    moduleId: 'mod_urogenital',
    title: 'Fisiologia Renal: Filtração Glomerular & Emergência Pós-Renal',
    shortDescription: 'Taxa de Filtração Glomerular (TFG), azotemia pré-renal vs. renal vs. pós-renal e manejo da hipercalemia obstrutiva.',
    estimatedMinutes: 14,
    order: 1,
    concepts: ['concept_urogenital_gfr_renal_failure'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_urogenital_th1',
        type: 'theory',
        title: 'A Dinâmica da TFG & A Diferenciação das Três Azotemias',
        contentMarkdown: `### O Glomérulo Renal & A Hemodinâmica de Filtração

A **Taxa de Filtração Glomerular (TFG)** depende da pressão hidrostática nos capilares glomerulares, finamente controlada por:
* **Arteríola Aferente:** Vasodilatada por prostaglandinas ($PGE_2$) para manter o fluxo plasmático renal.
* **Arteríola Eferente:** Vasoconstringida por Angiotensina II para manter a pressão de filtração transglomerular.

---

### Diagnóstico Diferencial de Azotemia (Aumento de Ureia e Creatinina)

1. **Azotemia Pré-Renal:** Hipovolemia ou desidratação severa. Os rins estão íntegros, mas não recebem perfusão suficiente. A densidade urinária é **alta e hiperconcentrada** ($> 1.030$ em cães, $> 1.035$ em gatos).
2. **Azotemia Renal Primária:** Perda de $\\ge 75\\%$ dos néfrons funcionais. Os rins perderam a capacidade de concentrar a urina. Densidade urinária **isostenúrica (1.008 a 1.012)**.
3. **Azotemia Pós-Renal:** Obstrução mecânica do fluxo urinário (cálculos, plugues uretrais) ou ruptura de vias urinárias (uroperitônio). A pressão retrógrada anula a filtração glomerular e bloqueia a excreção de potássio ($K^+$) e hidrogênio ($H^+$).

\`\`\`mermaid
flowchart TD
    Azotemia["Paciente Azotêmico: Aumento de Ureia & Creatinina"] --> AssessUrine{"Exame da Densidade Urinária (DU) & Anamnese"}
    AssessUrine -- "DU Alta (> 1.035 Gato / > 1.030 Cão) + Desidratação" --> PreRenal["Azotemia Pré-Renal (Hipoperfusão / Responde a Fluidoterapia)"]
    AssessUrine -- "DU Isostenúrica (1.008 - 1.012) + Poliúria / Isostenúria" --> Renal["Azotemia Renal Intrínseca (Perda > 75% dos Néfrons)"]
    AssessUrine -- "Bexiga Repleta Rígida / Anúria Obstrutiva" --> PostRenal["Azotemia Pós-Renal (Obstrução Uretral / Risco de Hipercalemia)"]
    PostRenal --> ECGCheck["ECG Imediato: Ondas T em Tenda, Perda de P & Alargamento de QRS"]
    ECGCheck --> CalciumGluconate["Estabilização Miocárdica: Gluconato de Cálcio 10% IV Lento"]
\`\`\`

> 📖 Referência Canônica: DiBartola, *Fluid, Electrolyte, and Acid-Base Disorders in Small Animal Practice*, 5th ed., Elsevier; Ettinger et al., *Textbook of Veterinary Internal Medicine*, 9th ed.

> 💡 Pérola Clínica / Emergência: A Tríade Eletrocardiográfica da Hipercalemia Felina ($K^+ > 7.5$ mEq/L): 1. Ondas T apiculadas, altas e simétricas; 2. Prolongamento do intervalo P-R e achatamento progressivo da onda P até seu desaparecimento (parada atrial com condução sino-ventricular); 3. Alargamento acentuado do complexo QRS antecedendo assistolia ou fibrilação ventricular. O Gluconato de Cálcio 10% IV (0.5 a 1.0 mL/kg lento em 5-10 min sob monitorização ECG) antagoniza o efeito cardiotóxico em menos de 5 minutos ao estabilizar o potencial de limiar de membrana, sem alterar o nível sérico de potássio.

> ⚠️ Alerta Crítico: O uso inadvertido de Anti-inflamatórios Não-Esteroidais (AINEs como meloxicam ou cetoprofeno) em animais hipovolêmicos ou obstruídos bloqueia as prostaglandinas renais vasodilatadoras ($PGE_2$ e $PGI_2$) na arteríola aferente, precipitando necrose de papila renal e colapso irreversível da taxa de filtração glomerular.`
      },
      {
        id: 'sec_urogenital_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Tom (Felino Doméstico)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Desobstrução Uretral Felina & Cardioproteção na Hipercalemia',
          patient: {
            name: 'Tom',
            species: 'Felino',
            breed: 'Shorthair (SRD)',
            age: '4 anos',
            weightKg: 4.8,
            habitatOrEnvironment: 'Casa interna exclusivamente'
          },
          vitals: {
            heartRateBpm: 92,
            respiratoryRateRpm: 22,
            temperatureCelsius: 36.4,
            mucousMembranes: 'Pálidas e frias',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'Tutor notou Tom entrando na caixa de areia repetidas vezes nas últimas 24 horas, vocalizando de dor ao tentar urinar e lambendo excessivamente a ponta do pênis. Agora encontra-se apático e hipotérmico. À palpação, bexiga rígida, repleta e dolorosa.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Eletrólitos e Gasometria em Sangue Total',
              findings: 'Avaliação laboratorial rápida antes de qualquer sedação para procedimento.',
              abnormalValues: [
                { parameter: 'Potássio Sérico (K+)', value: '8.4 mEq/L', reference: '3.5 - 5.2 mEq/L', status: 'critical' },
                { parameter: 'Creatinina Sérica', value: '7.8 mg/dL', reference: '0.8 - 1.8 mg/dL', status: 'critical' },
                { parameter: 'Ureia Sérica', value: '180 mg/dL', reference: '30 - 65 mg/dL', status: 'critical' },
                { parameter: 'pH Sanguíneo', value: '7.12', reference: '7.35 - 7.45', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com FC 92 bpm e K+ de 8.4 mEq/L, qual é a prioridade médica ABSOLUTA antes de anestesiar para sondagem?',
          decisionOptions: [
            {
              id: 'opt_dec_uro_1',
              label: 'Gluconato de Cálcio 10% IV lento (0.5 a 1.0 mL/kg) com monitorização eletrocardiográfica',
              description: 'Cardioproteção imediata: o cálcio antagoniza o efeito tóxico do potássio na membrana do cardiomiócito sem alterar a concentração sérica de K+.',
              isOptimal: true,
              consequenceText: 'Conduta salvadora de vidas! O cálcio intravenoso restaura o limiar de potencial de ação da membrana celular cardíaca, neutralizando o risco de fibrilação ventricular ou assistolia em minutos. Somente após estabilizar o ritmo cardíaco é seguro sedar e desobstruir a uretra com sonda tomcat.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Infusão lenta de gluconato de cálcio 10% intravenoso',
                mechanism: 'Estabilização do potencial elétrico transmembrana dos cardiomiócitos',
                effect: 'Normalização do ritmo sinusal e da frequência cardíaca no traçado de ECG',
                clinicalMeaning: 'Prevenção da parada cardiorrespiratória e estabilização para anestesia e sondagem'
              }
            },
            {
              id: 'opt_dec_uro_2',
              label: 'Sedação profunda imediata com cetamina e xilazina para passar a sonda uretral',
              description: 'Priorizar a passagem rápida da sonda sem corrigir os eletrólitos.',
              isOptimal: false,
              consequenceText: 'Erro médico fatal! A xilazina é um agonista alfa-2 que potencializa a bradicardia e induz bloqueio atrioventricular de alto grau. Em um animal com K+ de 8.4 mEq/L, essa combinação provocará parada cardíaca imediata em assistolia na indução anestésica.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de alfa-2 agonista em hipercalemia severa não estabilizada',
                mechanism: 'Sinergismo cardiodepressor entre o potássio tóxico e o bloqueador alfa-2',
                effect: 'Parada sinusal com bloqueio AV total e fibrilação ventricular',
                clinicalMeaning: 'Óbito anestésico imediato do paciente'
              }
            },
            {
              id: 'opt_dec_uro_3',
              label: 'Administrar furosemida intramuscular em alta dose e aguardar micção espontânea',
              description: 'Tentar forçar a produção de urina com diurético.',
              isOptimal: false,
              consequenceText: 'Conduta ineficaz e perigosíssima! Furosemida em via urinária mecanicamente obstruída aumentará a pressão hidrostática retrógrada nos túbulos e ureteres, podendo causar ruptura da bexiga ou hidronefrose aguda fulminante.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Diurético de alça administrado contra obstrução uretral mecânica fechada',
                mechanism: 'Aumento do volume de filtração contra resistência intraluminal infinita',
                effect: 'Ruptura vesical com uroperitônio ou necrose papilar renal aguda',
                clinicalMeaning: 'Agravamento do choque e peritonite urinária'
              }
            }
          ],
          learningTakeaways: [
            'A hipercalemia severa (K+ > 7.5 mEq/L) é uma emergência cardiotóxica que antecede qualquer manipulação uretral.',
            'O gluconato de cálcio 10% não reduz o potássio sérico, mas protege o coração estabilizando o limiar de membrana.',
            'Nunca utilize agonistas alfa-2 (xilazina/dexmedetomidina) em felinos obstruídos sem antes estabilizar os eletrólitos.'
          ]
        }
      },
      {
        id: 'sec_urogenital_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Emergência Pós-Renal & Hipercalemia Felina',
        exerciseId: 'ex_urogenital_01'
      }
    ]
  },
  {
    id: 'lesson_urogenital_02_tubular_transport',
    moduleId: 'mod_urogenital',
    title: 'Mecanismos de Transporte Tubular & Equilíbrio Hidroeletrolítico Renal',
    shortDescription: 'Túbulo proximal (SGLT2 e anidrase carbônica), alça de Henle (NKCC2), aldosterona (ENaC) e aquaporinas-2 sob controle de ADH.',
    estimatedMinutes: 14,
    order: 2,
    concepts: ['concept_urogenital_tubular_transport'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_urogenital_th2',
        type: 'theory',
        title: 'Arquitetura dos Transportadores Tubulares do Néfron',
        contentMarkdown: `### A Jornada do Ultrafiltrado Tubular

O glomérulo filtra cerca de 20% do fluxo plasmático renal, gerando um ultrafiltrado desproteinizado que sofre modificações contínuas ao longo dos segmentos tubulares especializados:

1. **Túbulo Contorcido Proximal (TCP):**
   * Reabsorve cerca de **65% do sódio, cloreto e água**, 100% da glicose (via cotransportador **SGLT-2**) e aminoácidos, e 85-90% do bicarbonato (mediado pela enzima **anidrase carbônica IV luminal e II intracelular**).
   * Se a glicemia ultrapassar o limiar renal (~180 mg/dL no cão, ~280 mg/dL no gato), o SGLT-2 satura-se, provocando **glicosúria e diurese osmótica** (poliúria do diabetes mellitus).
2. **Alça de Henle (Mecanismo Multiplicador de Contracorrente):**
   * **Ramo Descendente Fino:** Altamente permeável à água (reabsorção passiva por aquaporinas-1), impermeável a solutos.
   * **Ramo Ascendente Espesso (TALH):** Impermeável à água, mas reabsorve ativamente eletrólitos pelo cotransportador **NKCC2 (Na+/K+/2Cl-)**, gerando o gradiente hiperosmótico no interstício medular profundo (até 1.200 - 2.000 mOsm/L).
3. **Túbulo Contorcido Distal & Ducto Coletor:**
   * **Células Principais:** Sob controle da **Aldosterona**, ativam os canais epiteliais de sódio (**ENaC**) e secretam potássio no lúmen através de canais ROMK.
   * **Ducto Coletor Medular:** Sob controle do **Hormônio Antidiurético (ADH / Vasopressina)** via receptores V2 e AMPc, vesículas citoplasmáticas contendo **Aquaporinas-2 (AQP2)** fundem-se à membrana apical, permitindo reabsorção máxima de água e concentração da urina.

\`\`\`mermaid
flowchart TD
    TCP["Túbulo Proximal: 65% Reabsorção de Na+/H2O, 100% Glicose (SGLT2) & Bicarbonato"] --> HenleThin["Ramo Descendente da Alça: Reabsorção Passiva de Água"]
    HenleThin --> HenleThick["Ramo Ascendente Espesso (TALH): Reabsorção Ativa via NKCC2 (Alvo da Furosemida)"]
    HenleThick --> MedullaryHyper["Geração de Hipertonicidade no Interstício Medular"]
    MedullaryHyper --> DistalTubule["Túbulo Distal & Coletor: Ação de Aldosterona nos Canais ENaC"]
    DistalTubule --> ADHAction["Liberação de ADH: Inserção de Aquaporinas-2 na Membrana"]
    ADHAction --> FinalConcentration["Reabsorção Final de Água: Urina Concentrada e Equilíbrio Hidroeletrolítico"]
\`\`\`

> 📖 Referência Canônica: Cunningham's *Textbook of Veterinary Physiology*, 6th ed., Elsevier; DiBartola, *Fluid, Electrolyte, and Acid-Base Disorders in Small Animal Practice*, 5th ed.

> 💡 Pérola Prova de Residência: O Diabetes Insípido Central decorre da falta de síntese de ADH pela neuro-hipófise, enquanto o Diabetes Insípido Nefrogênico decorre da incapacidade das células do ducto coletor responderem ao ADH (mutações no receptor V2 ou destruição do gradiente medular por piometra/E. coli, hipercalcemia ou hipocalemia). Em ambos os casos a densidade urinária é marcadamente hipostenúrica (< 1.008).`
      },
      {
        id: 'sec_urogenital_lab2',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Cindy (Caniche com Diabetes Insípido)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Diagnóstico & Desafio de Concentração no Ducto Coletor',
          patient: {
            name: 'Cindy',
            species: 'Canino',
            breed: 'Poodle Toy',
            age: '6 anos',
            weightKg: 4.5,
            habitatOrEnvironment: 'Apartamento'
          },
          vitals: {
            heartRateBpm: 100,
            respiratoryRateRpm: 24,
            temperatureCelsius: 38.3,
            mucousMembranes: 'Rosadas e secas',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Tutor relata consumo de água compulsivo de quase 1 litro por dia (> 200 mL/kg/dia) e poliúria extrema há 3 semanas. A urina parece água cristalina sem odor. Glicemia de jejum perfeitamente normal (88 mg/dL).',
          exams: [
            {
              category: 'laboratorial',
              title: 'Urinálise & Osmolalidade Urinária',
              findings: 'Amostra de urina por micção espontânea límpida e incolor.',
              abnormalValues: [
                { parameter: 'Densidade Urinária (DU)', value: '1.003 (Hipostenúria)', reference: '1.015 - 1.045', status: 'critical' },
                { parameter: 'Glicosúria', value: 'Negativa', reference: 'Negativa', status: 'normal' },
                { parameter: 'Proteinúria', value: 'Negativa', reference: 'Negativa', status: 'normal' },
                { parameter: 'Osmolalidade Urinária', value: '110 mOsm/kg', reference: '> 800 mOsm/kg', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com hipostenúria marcante (DU 1.003) e glicemia normal, qual teste diagnóstico diferencia Diabetes Insípido Central de Nefrogênico?',
          decisionOptions: [
            {
              id: 'opt_dec_uro2_1',
              label: 'Teste de resposta ao análogo sintético de ADH (Desmopressina / DDAVP ocular ou SC) com monitorização horária da densidade urinária',
              description: 'Se a densidade subir para > 1.020, confirma Diabetes Insípido Central (ausência de secreção hipofisária de ADH); se permanecer < 1.008, confirma Diabetes Insípido Nefrogênico.',
              isOptimal: true,
              consequenceText: 'Conduta endocrinológica e nefrológica impecável! A desmopressina fornece o agonista V2 exógeno. Como os ductos coletores de Cindy estão funcionais, a administração de DDAVP promoveu a imediata inserção de aquaporinas-2 na membrana apical, elevando a densidade urinária para 1.028 em 2 horas e cessando a sede compulsiva.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Administração de desmopressina exógena (DDAVP)',
                mechanism: 'Ligação aos receptores V2 nos ductos coletores e exocitose de Aquaporina-2',
                effect: 'Reabsorção maciça de água livre do lúmen tubular para o interstício hiperosmótico',
                clinicalMeaning: 'Confirmação de Diabetes Insípido Central e início de reposição hormonal contínua com DDAVP'
              }
            },
            {
              id: 'opt_dec_uro2_2',
              label: 'Privação hídrica abrupta de 48 horas em ambiente quente sem supervisão médica',
              description: 'Restringir 100% da água do animal em casa para "forçar os rins a concentrar".',
              isOptimal: false,
              consequenceText: 'Erro médico fatal! Pacientes com Diabetes Insípido perdem água livre incontrolavelmente. A restrição hídrica abrupta causará hipernatremia grave (> 175 mEq/L), choque hipovolêmico e desidratação cerebral aguda com coma e convulsão em poucas horas.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Privação hídrica não monitorizada em paciente incapaz de secretar ADH',
                mechanism: 'Diurese persistente sem reposição hídrica gerando colapso volêmico',
                effect: 'Hipernatremia extrema e hemorragia subaracnóidea por retração encefálica',
                clinicalMeaning: 'Choque hipovolêmico grave e óbito por parada cardiorrespiratória'
              }
            },
            {
              id: 'opt_dec_uro2_3',
              label: 'Prescrever insulina regular injetável considerando diabetes mellitus atípico sem hiperglicemia',
              description: 'Tratar com insulina apesar da glicemia normal de 88 mg/dL.',
              isOptimal: false,
              consequenceText: 'Desastre iatrogênico! Administrar insulina a um animal normoglicêmico induz choque hipoglicêmico fulminante com coma, convulsões generalizadas e morte encefálica.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de insulina em paciente normoglicêmico',
                mechanism: 'Depleção aguda de glicose sérica (< 20 mg/dL)',
                effect: 'Neuroglicopenia severa com convulsões refratárias',
                clinicalMeaning: 'Morte encefálica por hipoglicemia iatrogênica'
              }
            }
          ],
          learningTakeaways: [
            'A hipostenúria (DU < 1.008) indica que o rim é capaz de diluir o filtrado, descartando insuficiência renal crônica.',
            'O teste com Desmopressina (DDAVP) diferencia a carência central de ADH da resistência nefrogênica.',
            'Nunca restrinja água a um paciente com poliúria extrema sem monitorização estrita do peso e eletrólitos.'
          ]
        }
      },
      {
        id: 'sec_urogenital_ex2',
        type: 'exercise',
        title: 'Exercício Clínico: Fisiologia Tubular Renal & Mecanismo do ADH',
        exerciseId: 'ex_urogenital_02'
      }
    ]
  },
  {
    id: 'lesson_urogenital_03_aki_vs_ckd',
    moduleId: 'mod_urogenital',
    title: 'Fisiopatologia da Injúria Renal Aguda vs. Doença Renal Crônica',
    shortDescription: 'Necrose tubular aguda isquêmica/tóxica, esclerose nefronal progressiva, estadiamento IRIS e cilindrúria patológica.',
    estimatedMinutes: 15,
    order: 3,
    concepts: ['concept_urogenital_aki_vs_ckd'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_urogenital_th3',
        type: 'theory',
        title: 'Bases Fisiopatológicas: Colapso Agudo dos Túbulos vs. Fibrose Crônica dos Néfrons',
        contentMarkdown: `### A Encruzilhada Nefrológica: IRA (AKI) vs. DRC (CKD)

A distinção entre lesão renal aguda e crônica é o divisor de águas prognóstico mais crítico da clínica médica de pequenos e grandes animais:

1. **Injúria Renal Aguda (IRA / AKI):**
   * **Gatilho:** Isquemia renal súbita (choque, sepse, anestesia hipotensiva) ou agressão nefrotóxica direta (etilenoglicol, gentamicina, lírios em gatos, AINEs).
   * **Patologia:** **Necrose Tubular Aguda (NTA)**. As células tubulares perdem a polaridade apical/basolateral, descamam para o lúmen formando tampões obstrutivos de detritos (**cilindros celulares e granulosos grossos**) e o filtrado vaza de volta para o interstício (**back-leak**).
   * **Potencial Biológico:** As células tubulares possuem alta capacidade de regeneração epitelial sobre a membrana basal intacta se o suporte dialítico ou hemodinâmico for mantido durante a tempestade aguda.
2. **Doença Renal Crônica (DRC / CKD):**
   * **Gatilho:** Perda progressiva e irreversível de néfrons por glomerulonefrite crônica, nefrite intersticial, pielonefrite ou doença policística.
   * **Patologia:** Sobrecarga hemodinâmica adaptativa dos néfrons remanescentes (hipertensão intraglomerular e hiperfiltração) mediada por Angiotensina II, deflagrando glomeruloesclerose, proteinúria tóxica tubular e deposição irreversível de colágeno intersticial (**fibrose renal terminal**).

---

### Tabela de Diagnóstico Diferencial Clínico-Patológico

| Critério Avaliado | Injúria Renal Aguda (IRA) | Doença Renal Crônica (DRC) |
| :--- | :--- | :--- |
| **Duração dos Sinais** | Horas a poucos dias (hiperagudo) | Semanas a meses (progressivo) |
| **Histórico Prévio de PU/PD** | Ausente (oligúria ou anúria súbita comum) | Presente há meses |
| **Escore Corporal / Massa** | Preservado (sem tempo para sarcopenia) | Caquexia, perda muscular lombar acentuada |
| **Hematócrito (Eritrograma)** | Normal ou Hemoconcentrado (desidratação) | **Anemia arregenerativa normocítica normocrômica** |
| **Morfologia Ultrassonográfica** | Rins normais a aumentados, lisos, edemaciados | **Rins diminuídos, contorno irregular, perda de diferenciação córtico-medular** |
| **Sedimento Urinário** | Ativo (cilindros granulosos, células epiteliais tubulares) | Inativo (cilindros céreos largos ou sedimento pobre) |

\`\`\`mermaid
flowchart TD
    KidneyInsult["Insulto Renal: Isquemia / Toxina / Imunomediado"] --> AcutePath["Injúria Renal Aguda (IRA)"]
    KidneyInsult --> ChronicPath["Doença Renal Crônica (DRC)"]
    AcutePath --> TubNecrosis["Necrose Tubular Aguda (NTA) & Obstrução por Cilindros"]
    TubNecrosis --> Oliguria["Oligúria / Anúria & Rins Aumentados Edematosos"]
    TubNecrosis --> RegenPotential["Potencial de Regeneração Epitelial se Suportado"]
    ChronicPath --> NephronLoss["Perda Crônica Irreversível de > 75% dos Néfrons"]
    NephronLoss --> GlomeruloSclerosis["Hiperfiltração Compensatória & Fibrose Tubulointersticial"]
    GlomeruloSclerosis --> ScarredKidney["Rins Pequenos, Irregulares & Anemia Arregenerativa (Falta de EPO)"]
\`\`\`

> 📖 Referência Canônica: Ettinger's *Textbook of Veterinary Internal Medicine*, 9th ed., 2024; Cowgill & Langston, *Acute Kidney Injury*, Vet Clin North Am Small Anim Pract.

> ⚠️ Alerta de Nefrotoxicidade: Gentamicina e amicacina acumulam-se nos lisossomos das células do túbulo contorcido proximal. O aparecimento de cilindros granulosos no sedimento urinário durante a antibioticoterapia com aminoglicosídeos é o sinal precoce de necrose tubular iminente, exigindo suspensão imediata do fármaco antes da elevação da creatinina!`
      },
      {
        id: 'sec_urogenital_lab3',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Mel (Labrador com IRA Nefrotóxica)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Intensivo de Injúria Renal Aguda Oligúrica por Etilenoglicol',
          patient: {
            name: 'Mel',
            species: 'Canino',
            breed: 'Labrador Retriever',
            age: '4 anos',
            weightKg: 30,
            habitatOrEnvironment: 'Garagem de residência'
          },
          vitals: {
            heartRateBpm: 120,
            respiratoryRateRpm: 36,
            temperatureCelsius: 38.0,
            mucousMembranes: 'Rosadas com desidratação estimada em 7%',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Animal encontrou um frasco quebrado de aditivo de radiador (aditivo anticongelante - etilenoglicol) há cerca de 18 horas. Apresentou vômitos, embriaguez transitória e agora evoluiu com anúria total (não urinou nada nas últimas 12 horas apesar de fluidoterapia prévia).',
          exams: [
            {
              category: 'laboratorial',
              title: 'Painel Renal & Urinálise de Emergência',
              findings: 'Colheita estéril por cistocentese ecoguiada (bexiga com apenas 5 mL de urina).',
              abnormalValues: [
                { parameter: 'Creatinina Sérica', value: '8.6 mg/dL', reference: '0.6 - 1.4 mg/dL', status: 'critical' },
                { parameter: 'Ureia Sérica', value: '235 mg/dL', reference: '20 - 55 mg/dL', status: 'critical' },
                { parameter: 'Débito Urinário', value: '0.1 mL/kg/h (Oligúria severa)', reference: '1.0 - 2.0 mL/kg/h', status: 'critical' },
                { parameter: 'Sedimento Urinário', value: 'Cristais de oxalato de cálcio mono-hidratados em agulha ("halteres") em abundância e cilindros granulosos', reference: 'Ausentes', status: 'critical' },
                { parameter: 'Ultrassom Renal', value: 'Rins aumentados com halo cortical hiperecogênico pronunciado', reference: 'Dimensões normais', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Mel apresenta IRA oligúrica por etilenoglicol com cristais de oxalato e creatinina em 8.6 mg/dL. Qual é a conduta salvadora para depuração de toxinas e suporte de vida?',
          decisionOptions: [
            {
              id: 'opt_dec_uro3_1',
              label: 'Indicação imediata de Terapia de Substituição Renal Contínua (Hemodiálise Intermitente / CRRT) associada a antídoto (Fomepizol / 4-metilpirazol ou etanol)',
              description: 'Remover o etilenoglicol e seus metabólitos tóxicos (glicolaldeído, ácido glicólico e oxálico) por diálise e reverter a hipercalcemia e uremia enquanto os túbulos se regeneram.',
              isOptimal: true,
              consequenceText: 'Conduta de suporte avançado padrão-ouro que salva vidas! Na IRA oligúrica com creatinina > 8.0 mg/dL por etilenoglicol, o tratamento conservador medicamentoso tem mortalidade > 95%. A hemodiálise de urgência remove os metabólitos nefrotóxicos em circulação, corrige a acidose metabólica uremica e mantém o paciente estável até que o epitélio tubular possa se recompor.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Instituição precoce de hemodiálise extracorpórea e bloqueio da álcool desidrogenase',
                mechanism: 'Depuração extracorpórea de ácido glicólico/ureia e restauração do equilíbrio ácido-base',
                effect: 'Estabilização metabólica sistêmica sem sobrecarga de volume hídrico',
                clinicalMeaning: 'Recuperação progressiva da função renal em 10 a 14 dias com sobrevivência do paciente'
              }
            },
            {
              id: 'opt_dec_uro3_2',
              label: 'Infundir 10 litros de Ringer Lactato contínuo em 12 horas associado a furosemida sem monitorar débito urinário',
              description: 'Tentar "empurrar a urina" pelo excesso de volume em paciente oligúrico.',
              isOptimal: false,
              consequenceText: 'Desastre iatrogênico fatal! Em um animal anúrico/oligúrico que não produz urina, infundir fluidoterapia maciça sem capacidade de excreção gerará hipervolemia catastrófica, com edema pulmonar fulminante, efusão pleural e morte por hipóxia asfixiante.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Sobrecarga de fluido maciça em rins que não excretam urina',
                mechanism: 'Aumento maciço da pressão hidrostática capilar pulmonar',
                effect: 'Edema agudo de pulmão com extravasamento alveolar de líquido',
                clinicalMeaning: 'Morte do paciente por parada respiratória hipóxica aguda'
              }
            },
            {
              id: 'opt_dec_uro3_3',
              label: 'Prescrever apenas antibiótico oral e liberar para internação domiciliar',
              description: 'Tratar a condição como uma cistite infecciosa simples.',
              isOptimal: false,
              consequenceText: 'Erro negligente imperdoável. A intoxicação por etilenoglicol com anúria é 100% fatal em 24 a 48 horas se não houver internação intensiva e diálise.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Omissão de suporte médico intensivo em IRA grau 4',
                mechanism: 'Hipercalemia progressiva, acidose metabólica intratável e uremia terminal',
                effect: 'Parada cardíaca por hipercalemia despolarizante',
                clinicalMeaning: 'Óbito domiciliar inevitável'
              }
            }
          ],
          learningTakeaways: [
            'A presença de cristais de oxalato de cálcio mono-hidratados em formato de agulha/halter no sedimento confirma intoxicação por etilenoglicol.',
            'A fluidoterapia excessiva em pacientes oligúricos/anúricos é letal devido ao edema pulmonar agudo.',
            'A hemodiálise precoce é a única modalidade terapêutica capaz de salvar cães em IRA oligúrica severa nefrotóxica.'
          ]
        }
      },
      {
        id: 'sec_urogenital_ex3',
        type: 'exercise',
        title: 'Exercício Clínico: Injúria Renal Aguda vs. Doença Crônica',
        exerciseId: 'ex_urogenital_03'
      }
    ]
  },
  {
    id: 'lesson_urogenital_04_hhg_axis',
    moduleId: 'mod_urogenital',
    title: 'Neuroendocrinologia da Reprodução: Eixo Hipotálamo-Hipófise-Gônadas',
    shortDescription: 'Kisspeptina, pulsatilidade de GnRH, gonadotrofinas (FSH/LH), feedback de estradiol/progesterona e esteroidogênese gonadal.',
    estimatedMinutes: 14,
    order: 4,
    concepts: ['concept_urogenital_hhg_axis'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_urogenital_th4',
        type: 'theory',
        title: 'O Circuito Mestre: Kisspeptina, GnRH & As Gonadotrofinas',
        contentMarkdown: `### A Hierarquia Neuroendócrina Reprodutiva

A atividade reprodutiva de mamíferos machos e fêmeas é orquestrada pelo **Eixo Hipotálamo-Hipófise-Gônadas (HHG)**:

1. **Neurônios de Kisspeptina (O Interruptor Mestre):**
   * Localizam-se em dois centros hipotalâmicos: o **núcleo arqueado (ARC)** (centro tônico) e o **núcleo pré-óptico anteroventral (AVPV)** (centro de onda/pico pré-ovulatório).
   * A kisspeptina liga-se ao receptor **KISS1R (GPR54)** nos corpos dos neurônios de GnRH, ditando a frequência e amplitude de disparo.
2. **GnRH (Hormônio Liberador de Gonadotrofinas):**
   * Decapeptídeo secretado em pulsos no sistema porta-hipofisário.
   * **Pulsos de Alta Frequência:** Estimulam preferencialmente a síntese e secreção de **LH (Hormônio Luteinizante)** pelas células gonadotróficas adeno-hipofisárias.
   * **Pulsos de Baixa Frequência:** Estimulam preferencialmente a secreção de **FSH (Hormônio Folículo-Estimulante)**.
3. **Esteroidogênese Gonadal Compartimentalizada (A Teoria de Duas Células):**
   * **No Ovário:**
     * **Células da Teca Interna (Receptores de LH):** Captam colesterol e sintetizam androstenediona e testosterona.
     * **Células da Granulosa (Receptores de FSH):** Expressam a enzima **aromatase (CYP19A1)**, que converte os andrógenos tecais em **17-beta-estradiol**.
   * **No Testículo:**
     * **Células de Leydig (Receptores de LH):** Sintetizam testosterona.
     * **Células de Sertoli (Receptores de FSH):** Sintetizam proteína ligadora de andrógeno (ABP) e inibina, mantendo a espermatogênese e o suporte à barreira hematotesticular.

\`\`\`mermaid
flowchart TD
    KissArc["Kisspeptina Hipotalâmica (Núcleo Arqueado / AVPV)"] --> GnRHNeurons["Disparo Pulsátil de GnRH no Sistema Porta-Hipofisário"]
    GnRHNeurons --> Pituitary["Adeno-hipófise (Células Gonadotróficas)"]
    Pituitary --> FSH["FSH: Recrutamento Folicular (Fêmea) / Células de Sertoli (Macho)"]
    Pituitary --> LH["LH: Maturação, Ovulação & Teca (Fêmea) / Células de Leydig (Macho)"]
    LH --> Theca["Célula da Teca: Síntese de Androstenediona"]
    FSH & Theca --> Granulosa["Célula da Granulosa: Aromatase Converte em Estradiol"]
    Granulosa --> SustainedE2["Estradiol Sustentado em Pico (> 36h)"]
    SustainedE2 --> PositiveFeedback["Inversão para Feedback Positivo no AVPV"]
    PositiveFeedback --> LHSurge["Pico Pré-Ovulatório de LH & Ovulação"]
\`\`\`

> 📖 Referência Canônica: Senger, *Pathways to Pregnancy and Parturition*, 3rd ed., Current Conceptions; Noakes et al., *Arthur's Veterinary Reproduction and Obstetrics*, 10th ed., Saunders.

> 💡 Pérola Biotecnológica: Protocolos modernos de IATF (Inseminação Artificial em Tempo Fixo) manipulam diretamente a pulsatilidade desse eixo: o implante de Progesterona (P4) mimetiza o corpo lúteo e bloqueia a frequência de pulsos de LH via feedback negativo. Ao retirar o implante e aplicar eCG/PGF2a, o eixo é bruscamente desinibido, disparando o crescimento do folículo dominante e ovulação sincronizada.`
      },
      {
        id: 'sec_urogenital_lab4',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Jade (Égua Quarto de Milha em Anestro)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Modulação Fotoperiódica e Hormonal do Eixo Reprodutivo em Égua',
          patient: {
            name: 'Jade',
            species: 'Equino',
            breed: 'Quarto de Milha',
            age: '5 anos',
            weightKg: 480,
            habitatOrEnvironment: 'Haras no sul do Brasil durante o mês de junho (inverno)'
          },
          vitals: {
            heartRateBpm: 40,
            respiratoryRateRpm: 14,
            temperatureCelsius: 37.6,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Criador comprou a matriz para a temporada de monta precoce de primavera, mas a égua não apresenta manifestação de estro (anestro de inverno). Ao exame ginecológico com ultrassom transretal, ambos os ovários medem apenas 2.5 x 2.0 cm, com múltiplos folículos pequenos com diâmetro < 10 mm e ausência total de corpo lúteo ou edema endometrial.',
          exams: [
            {
              category: 'imaging',
              title: 'Ultrassonografia Reprodutiva Transretal',
              findings: 'Ovários pequenos e firmes, ausência de folículos dominantes e útero flácido sem edema (Grau 0 de edema).',
              abnormalValues: [
                { parameter: 'Maior Diâmetro Folicular', value: '8 mm', reference: '> 35 mm (pré-ovulatório)', status: 'low' },
                { parameter: 'Edema Endometrial', value: 'Grau 0 (Inativo)', reference: 'Grau 3 (Estro)', status: 'low' },
                { parameter: 'Progesterona Sérica', value: '< 0.2 ng/mL', reference: '> 1.0 ng/mL (Fase lútea)', status: 'low' }
              ]
            }
          ],
          challengePrompt: 'Jade encontra-se em anestro estacional fisiológico de inverno por fotoperíodo negativo. Qual intervenção antecipa a ciclicidade fértil para agosto?',
          decisionOptions: [
            {
              id: 'opt_dec_uro4_1',
              label: 'Programa de fotoperíodo artificial com 16 horas de luz contínua diária iniciado 60 a 70 dias antes da data desejada de cobertura',
              description: 'A luz captada pela retina inibe a secreção de melatonina pineal, desinibindo os neurônios de kisspeptina e reativando a pulsatilidade de GnRH e FSH/LH.',
              isOptimal: true,
              consequenceText: 'Decisão endocrinológica de precisão zootécnica! Como a égua é uma espécie de dias longos, a melatonina atua como inibidor do eixo HHG no inverno. O fornecimento de luz artificial suplementar (lâmpada de 100W na baia estendendo a iluminação até as 23h) suprime a melatonina, estimulando a síntese de kisspeptina e reativando as ondas foliculares em 60 dias.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Fotoperíodo artificial com 16 horas de luz diária',
                mechanism: 'Supressão da síntese de melatonina pela glândula pineal',
                effect: 'Desinibição da secreção pulsátil de GnRH e elevação de FSH e LH',
                clinicalMeaning: 'Emergência de folículo pré-ovulatório fértil e ciclicidade normal em agosto'
              }
            },
            {
              id: 'opt_dec_uro4_2',
              label: 'Administrar uma dose única de prostaglandina F2-alfa (Dinoprost) imediatamente',
              description: 'Tentar induzir o cio aplicando luteolítico em ovários em anestro.',
              isOptimal: false,
              consequenceText: 'Erro fisiológico grosseiro! A prostaglandina atua lisando o corpo lúteo funcional. Como a égua está em anestro estacional sem corpo lúteo (P4 < 0.2 ng/mL), a PGF2a não terá absolutamente nenhum efeito biológico, gerando apenas sudorese e cólica transitória.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Aplicação de PGF2a sem corpo lúteo presente',
                mechanism: 'Ausência de tecido-alvo responsivo nos ovários em anestro',
                effect: 'Efeitos adversos de sudorese sem indução de estro',
                clinicalMeaning: 'Permanência da égua em anestro inativo'
              }
            },
            {
              id: 'opt_dec_uro4_3',
              label: 'Realizar ovariotomia bilateral cirúrgica para "estimular os hormônios adrenais"',
              description: 'Extirpar cirurgicamente as gônadas da matriz.',
              isOptimal: false,
              consequenceText: 'Conduta mutiladora inaceitável! A remoção dos ovários esteriliza definitivamente a reprodutora, destruindo seu valor zootécnico.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Ovariectomia em reprodutora',
                mechanism: 'Perda anatômica definitiva das gônadas',
                effect: 'Infertilidade permanente irreversível',
                clinicalMeaning: 'Prejuízo zootécnico total'
              }
            }
          ],
          learningTakeaways: [
            'A melatonina secretada durante noites longas inibe o eixo hipotálamo-hipófise-gônadas na égua.',
            'O programa de luz artificial (16 horas de luz/dia por 60 dias) é a ferramenta de escolha para antecipar a estação reprodutiva equina.',
            'A PGF2-alfa requer a presença obrigatória de um corpo lúteo funcional para ter eficácia clínica.'
          ]
        }
      },
      {
        id: 'sec_urogenital_ex4',
        type: 'exercise',
        title: 'Exercício Clínico: Neuroendocrinologia do Eixo HHG & Fotoperíodo',
        exerciseId: 'ex_urogenital_04'
      }
    ]
  },
  {
    id: 'lesson_urogenital_05_comparative_estrus',
    moduleId: 'mod_urogenital',
    title: 'Fisiologia Comparada do Ciclo Estral em Animais Domésticos',
    shortDescription: 'Dinâmica hormonal comparada: vaca, égua, cadela e gata. Fases de proestro, estro, metaestro e diestro; ovulação espontânea vs. induzida.',
    estimatedMinutes: 15,
    order: 5,
    concepts: ['concept_urogenital_comparative_estrus'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_urogenital_th5',
        type: 'theory',
        title: 'Morfofisiologia Comparada: A Diversidade dos Ciclos Reprodutivos',
        contentMarkdown: `### As Quatro Fases Canônicas do Ciclo Estral

O ciclo estral divide-se em duas fases funcionais dependentes da estrutura dominante no ovário:
* **Fase Folicular (Proestro e Estro):** O folículo dominante secreta altas concentrações de **Estradiol**, promovendo hiperemia genital, secreção de muco transparente e comportamento de receptividade sexual (aceitação do macho).
* **Fase Lútea (Metaestro e Diestro):** O corpo lúteo secreta **Progesterona (P4)**, bloqueando a receptividade sexual, fechando a cérvix e preparando o endométrio para a gestação.

---

### Matriz Comparativa Interespecífica

| Espécie | Tipo de Ciclo | Duração Média | Duração do Estro | Momento da Ovulação | Mecanismo de Ovulação |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Vaca** | Poliéstrica contínua | 21 dias (18-24d) | 12 a 18 horas | **10 a 12 horas APÓS o fim do estro** | Espontânea |
| **Égua** | Poliéstrica estacional de dias longos | 21 dias (19-24d) | 5 a 7 dias | **24 a 48 horas ANTES do fim do estro** | Espontânea |
| **Cadela** | Monoéstrica não estacional | 6 a 8 meses | 9 dias (3-21d) | **Dias 2 a 3 do estro (ovula oócito primário!)** | Espontânea |
| **Gata** | Poliéstrica estacional de dias longos | 14 a 21 dias | 6 a 7 dias | **24 a 36 horas após a cópula mecânica** | **Induzida / Reflexa** |

\`\`\`mermaid
flowchart TD
    Proestrus["Proestro: Queda de P4 & Ascensão de Estradiol pelos Folículos"] --> Estrus["Estro: Pico de Estradiol & Receptividade Sexual ao Macho"]
    Estrus --> OvulationMechanism{"Mecanismo Ovulatório da Espécie"}
    OvulationMechanism -- "Vaca / Égua / Cadela" --> SpontaneousOv["Ovulação Espontânea Disparada pelo Pico de LH"]
    OvulationMechanism -- "Gata (Felinos) / Camelo" --> InducedOv["Ovulação Reflexa: Estimulação Vaginal por Espículas Penianas Dispara LH"]
    SpontaneousOv & InducedOv --> Metestrus["Metaestro: Formação do Corpo Hemorrágico & Início da Síntese de P4"]
    Metestrus --> Diestrus["Diestro: Corpo Lúteo Maduro com Progesterona Alta Sustentada"]
    Diestrus --> CheckPreg{"Gestação Confirmada?"}
    CheckPreg -- "NÃO" --> PGF2aLysis["Liberação Uterina de PGF2a: Luteólise & Retorno ao Proestro"]
    CheckPreg -- "SIM" --> MaternalRecognition["Reconhecimento Materno da Gestação (Interferon-tau / Estrogênio Embrionário)"]
\`\`\`

> 📖 Referência Canônica: Senger, *Pathways to Pregnancy and Parturition*, 3rd ed.; Noakes et al., *Arthur's Veterinary Reproduction and Obstetrics*, 10th ed.

> 💡 Pérola Singular da Canina: A cadela é a **única espécie doméstica** que ovula um **oócito primário imaturo** (interrompido em prófase I). O oócito canino necessita de 48 a 72 horas no oviduto para completar a primeira divisão meiótica e expelir o primeiro corpúsculo polar, tornando-se um oócito secundário fertilizável. Por isso, a fertilização ocorre dias após a ovulação e os espermatozoides caninos sobrevivem até 5 a 7 dias no trato reprodutor da fêmea!`
      },
      {
        id: 'sec_urogenital_lab5',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Belinha (Golden Retriever)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Citologia Vaginal & Dosagem de Progesterona para Momento Ótimo de Cobertura',
          patient: {
            name: 'Belinha',
            species: 'Canino',
            breed: 'Golden Retriever',
            age: '4 anos',
            weightKg: 31,
            habitatOrEnvironment: 'Casa urbana'
          },
          vitals: {
            heartRateBpm: 88,
            respiratoryRateRpm: 20,
            temperatureCelsius: 38.4,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Criador trouxe a cadela para determinação da data exata de inseminação artificial com sêmen congelado valioso importado. Apresentou corrimento vaginal sanguinolento há 10 dias que agora tornou-se serossanguinolento claro. A fêmea aceita o macho com desvio lateral de cauda (reflexo de tolerância).',
          exams: [
            {
              category: 'laboratorial',
              title: 'Citologia Vaginal Exfoliativa & Progesterona Sérica',
              findings: 'Esfregaço colhido da porção dorsal da vagina cranial corado por panótico rápido e dosagem imunoenzimática de progesterona.',
              abnormalValues: [
                { parameter: 'Células Anucleadas Superficiais / Queratinizadas', value: '92%', reference: '< 20% em diestro', status: 'critical' },
                { parameter: 'Neutrófilos no Esfregaço', value: 'Ausentes', reference: 'Ausentes no estro pleno', status: 'normal' },
                { parameter: 'Progesterona Sérica', value: '5.2 ng/mL', reference: 'Basal < 1.0 ng/mL', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Com 92% de células superficiais cornificadas e progesterona atingindo 5.2 ng/mL (indicando ovulação ocorrendo hoje), qual é o cronograma de inseminação com sêmen congelado?',
          decisionOptions: [
            {
              id: 'opt_dec_uro5_1',
              label: 'Realizar a inseminação intrauterina cirúrgica ou transcervical (TCI) 48 a 72 horas após a ovulação (quando a progesterona estiver entre 10 e 15 ng/mL)',
              description: 'Aguardar a maturação dos oócitos primários em oócitos secundários fertilizáveis no oviduto, considerando que o sêmen congelado tem viabilidade curta (< 12-24h).',
              isOptimal: true,
              consequenceText: 'Planejamento reprodutivo de excelência máxima! A ovulação na cadela ocorre quando a progesterona sérica atinge entre 4.0 e 8.0 ng/mL (pico de LH ocorre aos 2.0 ng/mL). Como o oócito canino necessita de 48 a 72 horas para sofrer maturação meiótica na tuba uterina e o sêmen congelado sobrevive poucas horas pós-descongelamento, a inseminação realizada exatamente 2 a 3 dias pós-ovulação garante taxas de concepção superiores a 85%.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Inseminação no momento de maturação meiótica do oócito canino',
                mechanism: 'Sincronização da sobrevida do sêmen congelado com oócitos secundários viáveis',
                effect: 'Fertilização ovidutal bilateral em alta taxa',
                clinicalMeaning: 'Gestação confirmada aos 28 dias com ninhada homogênea de 8 a 10 filhotes'
              }
            },
            {
              id: 'opt_dec_uro5_2',
              label: 'Inseminar imediatamente neste momento e não repetir mais nenhuma dose',
              description: 'Inseminar no mesmo minuto em que a progesterona atinge 5.0 ng/mL.',
              isOptimal: false,
              consequenceText: 'Subótimo e falho. Hoje os oócitos acabaram de ser ovulados e encontram-se em prófase I imatura. O sêmen congelado morrerá em 12 horas antes que os oócitos atinjam a maturação meiótica fertilizável, resultando em taxa de prenhez zero.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Inseminação precoce com sêmen de curta viabilidade',
                mechanism: 'Morte dos espermatozoides antes da maturação do oócito primário',
                effect: 'Falha completa na fertilização',
                clinicalMeaning: 'Cadela vazia com perda de sêmen importado valioso'
              }
            },
            {
              id: 'opt_dec_uro5_3',
              label: 'Aguardar 14 dias até que o esfregaço vaginal volte a ter 100% de células basais com neutrófilos',
              description: 'Esperar a entrada no diestro avançado para inseminar.',
              isOptimal: false,
              consequenceText: 'Erro negligente grave! O retorno de células parabasais e neutrófilos marca a entrada abrupta no Diestro (D1 do diestro). Nesse momento, os oócitos já degeneraram e a cérvix está rigidamente fechada.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Tentativa de inseminação no diestro luteal',
                mechanism: 'Cérvix impermeável e oócitos já inviáveis ou reabsorvidos',
                effect: 'Ausência total de fecundação e risco de endometrite iatrogênica',
                clinicalMeaning: 'Falha reprodutiva completa'
              }
            }
          ],
          learningTakeaways: [
            'A cadela ovula oócitos primários que exigem 48 a 72 horas para maturação meiótica fertilizável.',
            'A ovulação coincide com níveis séricos de progesterona entre 4.0 e 8.0 ng/mL.',
            'O sêmen congelado deve ser depositado intrauterinamente 48 a 72 horas pós-ovulação devido à sua curta sobrevida.'
          ]
        }
      },
      {
        id: 'sec_urogenital_ex5',
        type: 'exercise',
        title: 'Exercício Clínico: Citologia Vaginal & Fisiologia do Ciclo Estral Canino',
        exerciseId: 'ex_urogenital_05'
      }
    ]
  }
];
// ==========================================
// 6. BACTERIOLOGIA & IMUNOLOGIA VETERINÁRIA
// ==========================================
export const BACTERIOLOGY_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_bacteriology_01',
    conceptId: 'concept_bacteriology_antibiogram_immunity',
    type: 'multiple_choice',
    prompt: 'Ao realizar a coloração de Gram a partir de uma secreção purulenta de piodermite profunda canina, o veterinário visualiza ao microscópio sob imersão (1000x) cocos agrupados em cachos corados em roxo/azul-escuro. Qual é a interpretação bacteriana e o mecanismo de retenção do corante?',
    options: [
      {
        id: 'opt_bact_1',
        text: 'Bactérias Gram-positivas (provável Staphylococcus pseudintermedius), cuja parede espessa de peptideoglicano retém o complexo cristal violeta-iodo',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! As bactérias Gram-positivas possuem uma parede celular espessa e homogênea de peptideoglicano (mureína) sem membrana externa. Durante a descoloração com álcool-acetona, a parede se desidrata e encolhe seus poros, retendo o cristal violeta e impedindo a entrada da fucsina/safranina secundária.'
      },
      {
        id: 'opt_bact_2',
        text: 'Bactérias Gram-negativas (provável Pseudomonas aeruginosa) com dupla membrana fosfolipídica',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. As bactérias Gram-negativas coram-se em vermelho/rosa porque sua fina camada de peptideoglicano perde o cristal violeta durante a lavagem alcoólica e absorve a safranina de contraste.'
      },
      {
        id: 'opt_bact_3',
        text: 'Micobactérias álcool-ácido resistentes (BAAR) com parede de ácidos micólicos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Micobactérias não coram confiavelmente pela técnica de Gram devido ao alto teor de ceras e ácidos micólicos na parede, exigindo coloração especial de Ziehl-Neelsen.'
      },
      {
        id: 'opt_bact_4',
        text: 'Esporos bacterianos livres de Clostridium tetani resistentes ao calor',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Os esporos são estruturas refratárias que aparecem como áreas claras não coradas no Gram, necessitando de métodos como Wirtz-Conklin.'
      }
    ]
  },
  {
    id: 'ex_bacteriology_02',
    conceptId: 'concept_bacteriology_cell_wall_virulence',
    type: 'multiple_choice',
    prompt: 'Em um quadro hiperagudo de choque séptico e endotoxemia em suínos e bezerros infectados por enterobactérias Gram-negativas (como Escherichia coli ou Salmonella enterica), qual porção bioquímica da membrana celular externa atua como o ligante endotóxico canônico para os receptores TLR4 do hospedeiro, e qual a contrapartida imunoestimuladora nos Gram-positivos via TLR2?',
    options: [
      {
        id: 'opt_bact_2_1',
        text: 'O Lipopolissacarídeo (LPS), cuja porção conservada hidrofóbica Lipídeo A é o ligante específico do complexo CD14/TLR4/MD2, disparando tempestade de citocinas (TNF-alfa, IL-1 e IL-6); enquanto nos Gram-positivos os ácidos lipoteicoicos (LTA) e peptideoglicano ativam primordialmente o TLR2',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! O LPS das bactérias Gram-negativas é composto por antígeno O variável, cerne de oligossacarídeos e o Lipídeo A. O Lipídeo A é a verdadeira endotoxina: quando a bactéria se divide ou sofre lise, o Lipídeo A liga-se à proteína ligadora de LPS (LBP), que o transfere para o receptor CD14 e TLR4 na membrana de macrófagos, desencadeando sinalização via NF-kB e choque endotóxico. Nos Gram-positivos (que não possuem LPS), a resposta pró-inflamatória é estimulada pelo ácido lipoteicoico e peptideoglicano através do receptor Toll-like 2 (TLR2).'
      },
      {
        id: 'opt_bact_2_2',
        text: 'A cápsula de ácido hialurônico, que ativa diretamente os canais de sódio voltagem-dependentes',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A cápsula bacteriana (antígeno K) é um fator de evasão antifagocitária, mas não é a endotoxina ligante de TLR4.'
      },
      {
        id: 'opt_bact_2_3',
        text: 'As porinas da membrana externa, que clivam a trombina plasmática em fibrinogênio solúvel',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. As porinas são canais proteicos de difusão hidrofílica na membrana externa, sem atividade endotóxica direta de choque.'
      },
      {
        id: 'opt_bact_2_4',
        text: 'Os flagelos com proteína flagelina, que atuam exclusivamente através do receptor de insulina',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A flagelina é reconhecida pelo receptor TLR5, e não por receptores hormonais metabólicos.'
      }
    ]
  },
  {
    id: 'ex_bacteriology_03',
    conceptId: 'concept_bacteriology_susceptibility_mic',
    type: 'multiple_choice',
    prompt: 'Por que a determinação da Concentração Inibitória Mínima (CIM / MIC) quantitativa por microdiluição em caldo é superior ao teste de disco-difusão de Kirby-Bauer ao planejar o tratamento de infecções graves em tecidos de difícil penetração (como osteomielite bacteriana, meningite ou prostatite crônica)?',
    options: [
      {
        id: 'opt_bact_3_1',
        text: 'Porque a CIM fornece a concentração numérica exata (em mcg/mL) necessária para inibir o crescimento bacteriano, permitindo correlacioná-la com os parâmetros farmacocinéticos e farmacodinâmicos (PK/PD) do antimicrobiano no tecido-alvo (como Cmax/CIM ou T>CIM) para garantir que a concentração livre tecidual ultrapasse o limiar bactericida',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O teste de disco-difusão de Kirby-Bauer é meramente semiquantitativo (classifica em Sensível, Intermediário ou Resistente com base no diâmetro do halo). Para tecidos com barreiras anatômicas (como a barreira hemato-prostática ou o osso cortical hipovascularizado), a concentração de fármaco que chega ao tecido é frequentemente uma fração da concentração sérica. Conhecendo a CIM exata (ex: 0.25 mcg/mL vs 2.0 mcg/mL), o veterinário consegue calcular doses que mantenham a fração livre tecidual acima da CIM (para betalactâmicos - T > CIM) ou atinjam picos de 8 a 10 vezes a CIM (para aminoglicosídeos e fluoroquinolonas - Cmax/CIM).'
      },
      {
        id: 'opt_bact_3_2',
        text: 'Porque o Kirby-Bauer avalia apenas bactérias anaeróbicas obrigatórias, enquanto a CIM avalia exclusivamente micoplasmas',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O Kirby-Bauer padrão CLSI é validado para bactérias aeróbicas e anaeróbicas facultativas de crescimento rápido.'
      },
      {
        id: 'opt_bact_3_3',
        text: 'Porque a CIM altera o genoma bacteriano tornando o patógeno sensível a qualquer antibiótico',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A CIM é um ensaio diagnóstico fenotípico in vitro e não uma terapia que modifique o DNA do patógeno.'
      },
      {
        id: 'opt_bact_3_4',
        text: 'Porque a CIM não necessita de incubação em estufa nem de meio de cultura, saindo em 2 minutos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A microdiluição em caldo requer incubação padrão em caldo Mueller-Hinton por 18 a 24 horas a 35 °C.'
      }
    ]
  },
  {
    id: 'ex_bacteriology_04',
    conceptId: 'concept_bacteriology_mrsp_esbl_superbugs',
    type: 'multiple_choice',
    prompt: 'Qual é a base genética e enzimática da resistência aos antimicrobianos betalactâmicos observada em Staphylococcus pseudintermedius resistente à meticilina (MRSP) em comparação com enterobactérias produtoras de Betalactamases de Espectro Estendido (ESBL)?',
    options: [
      {
        id: 'opt_bact_4_1',
        text: 'O MRSP expressa o gene mecA que codifica uma proteína ligadora de penicilina alterada (PBP2a) com afinidade insignificante por todos os betalactâmicos (penicilinas, cefalosporinas e carbapenêmicos); enquanto as bactérias ESBL produzem enzimas plasmidiais que hidrolisam o anel betalactâmico de cefalosporinas de 3ª e 4ª geração e monobactâmicos, sendo tipicamente sensíveis a carbapenêmicos e inibidores como clavulanato',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! No MRSP/MRSA a resistência é estrutural no alvo: a proteína PBP2a não se liga aos betalactâmicos, permitindo que a bactéria sintetize sua parede celular mesmo na presença de cefalosporinas modernas (cefalexina, cefovecina, ceftiofur). Já as cepas produtoras de ESBL (como E. coli e Klebsiella pneumoniae portadoras de genes blaCTX-M, blaSHV ou blaTEM) secretam enzimas que quebram ativamente a ligação amida do anel betalactâmico, inativando o antibiótico antes que ele atinja as PBPs da membrana celular.'
      },
      {
        id: 'opt_bact_4_2',
        text: 'O MRSP destrói os antibióticos por secreção de ácido lático concentrado no biofilme',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A resistência é mediada pela enzima transpeptidase modificada PBP2a codificada por mecA, não por acidez lática.'
      },
      {
        id: 'opt_bact_4_3',
        text: 'As enterobactérias ESBL perdem sua membrana externa e tornam-se bactérias Gram-positivas esporuladas',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Bactérias Gram-negativas não se convertem em Gram-positivas; a resistência ESBL é enzimática e transferível por plasmídeos horizontais.'
      },
      {
        id: 'opt_bact_4_4',
        text: 'O gene mecA é ativado exclusivamente por luz solar e destrói apenas a vancomicina',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O mecA é expresso constitutivamente ou induzido por betalactâmicos, conferindo resistência a penicilinas e cefalosporinas, enquanto a vancomicina atua por mecanismo diferente (D-Ala-D-Ala).'
      }
    ]
  },
  {
    id: 'ex_bacteriology_05',
    conceptId: 'concept_bacteriology_vaccinology_adjuvants',
    type: 'multiple_choice',
    prompt: 'Na imunologia comparada de vacinas veterinárias, por que vacinas atenuadas (modificadas vivas - MLV) estimulam tanto a imunidade celular citotóxica (linfócitos T CD8+ via MHC de classe I) quanto a humoral sem necessidade de adjuvantes químicos, enquanto bacterinas inativadas exigem adjuvantes minerais (sais de alumínio ou emulsões oleosas), e qual é a complicação felina associada a esses adjuvantes?',
    options: [
      {
        id: 'opt_bact_5_1',
        text: 'Microrganismos atenuados infectam transitoriamente as células hospedeiras e sintetizam antígenos no citoplasma, que são processados pelo proteassoma e apresentados via MHC classe I a linfócitos T CD8+ (resposta celular duradoura); antígenos inativados são exógenos e processados apenas via endossomos/MHC classe II para CD4+ (humoral), necessitando de adjuvantes para criar depósito e ativar TLRs; em felinos, a inflamação granulomatosa crônica induzida por adjuvantes de alumínio é o principal gatilho do Sarcoma de Aplicação Felino (FISS)',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A via clássica de apresentação antigênica dita o perfil da resposta: antígenos endógenos sintetizados intracelularmente por vírus/bactérias atenuadas são apresentados via MHC-I a linfócitos T citotóxicos CD8+, gerando imunidade celular robusta. Antígenos mortos (bacterinas) dependem de fagocitose por macrófagos/células dendríticas e apresentação via MHC-II a linfócitos T auxiliares CD4+, gerando quase exclusivamente anticorpos humorais. Os adjuvantes (hidróxido de alumínio) são necessários para retardar a liberação e atrair o sistema imune inato. Em gatos, a inflamação tecidual crônica por adjuvantes estimula a transformação neoplásica de fibroblastos, originando o temido Sarcoma de Sítio de Injeção Felino (FISS).'
      },
      {
        id: 'opt_bact_5_2',
        text: 'As vacinas atenuadas produzem toxinas que destroem a medula óssea dos animais vacinados',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Vacinas atenuadas são modificadas para não causar lesão tecidual severa em animais imunocompetentes.'
      },
      {
        id: 'opt_bact_5_3',
        text: 'Os adjuvantes de alumínio agem esterilizando o sangue do animal e eliminando a produção de anticorpos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Os adjuvantes aumentam a resposta imune humoral através de efeito de depósito e ativação do inflamassomo NLRP3.'
      },
      {
        id: 'opt_bact_5_4',
        text: 'Bacterinas inativadas induzem apenas imunidade mediada por células Natural Killer sem produção de imunoglobulinas',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. As bacterinas estimulam principalmente a resposta humoral (IgG e IgM) via linfócitos B e plasmócitos.'
      }
    ]
  }
];

export const BACTERIOLOGY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_bacteriology_01_antibiogram',
    moduleId: 'mod_bacteriology_immunology',
    title: 'Bacteriologia Clínica: Parede Celular, Coloração de Gram & Antibiograma',
    shortDescription: 'Mecanismos de parede celular de Gram-positivos vs. Gram-negativos, teste de Kirby-Bauer e combate a superbactérias.',
    estimatedMinutes: 14,
    order: 1,
    concepts: ['concept_bacteriology_antibiogram_immunity'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_bacteriology_th1',
        type: 'theory',
        title: 'A Parede Celular Bacteriana como Alvo Farmacológico e Diagnóstico',
        contentMarkdown: `### A Diferença Estrutural que Decide a Terapêutica

A resposta aos antibióticos depende primariamente da arquitetura do envoltório bacteriano:
* **Gram-Positivos (Roxo):** Parede com até 40 camadas de **peptideoglicano** e ácidos teicoicos/lipoteicoicos. São tipicamente mais sensíveis a penicilinas e cefalosporinas que inibem as enzimas transpeptidases (PBPs).
* **Gram-Negativos (Vermelho/Rosa):** Possuem uma camada delgada de peptideoglicano protegida externamente por uma **membrana externa assimétrica** contendo **Lipopolissacarídeo (LPS / Endotoxina)** e porinas. Essa barreira impede a entrada de muitas moléculas hidrofóbicas.

---

### O Princípio do Antibiograma (CIM vs. Kirby-Bauer)

O antibiograma por disco-difusão (Kirby-Bauer) mede o halo de inibição em ágar Mueller-Hinton. 

\`\`\`mermaid
flowchart TD
    InfectionSite["Foco Infeccioso Purulento (Piodermite / Otite / Artrite)"] --> GramStain["Coloração de Gram: Cristal Violeta, Lugol, Descolorante & Fucsina"]
    GramStain --> GramPositive["Gram-Positivo (Roxo): Parede Espessa de Peptideoglicano"]
    GramStain --> GramNegative["Gram-Negativo (Rosa): Membrana Externa com Lipopolissacarídeo (LPS)"]
    GramPositive & GramNegative --> CultureTSA["Cultura Pura & Antibiograma por Disco-Difusão (Kirby-Bauer)"]
    CultureTSA --> MeasureHalos["Mensuração Milimétrica dos Halos de Inibição"]
    MeasureHalos --> InterpretCLSI["Interpretação Baseada em Pontos de Corte (CLSI / BrCAST)"]
    InterpretCLSI --> TargetedRx["Prescrição Antimicrobiana Racional de Alvo Específico"]
\`\`\`

> 📖 Referência Canônica: Quinn et al., *Veterinary Microbiology and Microbial Disease*, 2nd ed., Wiley-Blackwell; Markey et al., *Clinical Veterinary Microbiology*, 2nd ed., Elsevier.

> 🔬 Histopatologia & Lâmina: Etapas da Coloração de Gram: 1. Cristal violeta (corante básico primário); 2. Solução de Lugol (mordente que forma o complexo insolúvel iodo-cristal violeta); 3. Descoloração com álcool-acetona: nos Gram-positivos, a espessa parede de peptideoglicano desidrata e fecha os poros retendo o roxo; nos Gram-negativos, o solvente dissolve os lipídeos da membrana externa lavando o corante; 4. Fucsina ou Safranina (contracorante) que cora os Gram-negativos em rosa/vermelho.

> 💡 Pérola Clínica / Prova de Residência: O maior halo no disco de Kirby-Bauer nem sempre é o melhor fármaco no animal vivo! Deve-se analisar a Concentração Inibitória Mínima (CIM) em relação à farmacocinética tecidual do fármaco (capacidade de penetrar próstata, osso, epitélio alveolar ou atravessar a barreira hematoencefálica).

> ⚠️ Alerta Crítico / One Health: O uso empírico e indiscriminado de fluoroquinolonas (Enrofloxacino) ou cefalosporinas de amplo espectro em infecções dérmicas simples seleciona cepas multirresistentes de MRSP (*Staphylococcus pseudintermedius* resistente à meticilina portador do gene mecA) e enterobactérias produtoras de betalactamases de espectro estendido (ESBL), transferíveis entre animais e tutores.`
      },
      {
        id: 'sec_bacteriology_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Spike (Bulldog Francês)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo de Piodermite Recidivante por Staphylococcus Resistente',
          patient: {
            name: 'Spike',
            species: 'Canino',
            breed: 'Bulldog Francês',
            age: '3 anos',
            weightKg: 13.2,
            habitatOrEnvironment: 'Casa com acesso a gramado'
          },
          vitals: {
            heartRateBpm: 110,
            respiratoryRateRpm: 24,
            temperatureCelsius: 38.9,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Spike vem sendo tratado há 6 meses com múltiplos cursos empíricos de cefalexina e amoxicilina com clavulanato para piodermite folicular. As lesões agora pioraram: pústulas coalescentes, colaretes epidérmicos e crostas hemorrágicas com exsudato purulento fétido no dorso e abdômen.',
          exams: [
            {
              category: 'microbiology',
              title: 'Cultura Bacteriana com Antibiograma (TSA)',
              findings: 'Isolamento de Staphylococcus pseudintermedius resistente à meticilina (MRSP).',
              abnormalValues: [
                { parameter: 'Cefalexina', value: 'Resistente (CIM > 16)', reference: 'Sensível', status: 'critical' },
                { parameter: 'Amoxicilina + Clavulanato', value: 'Resistente (CIM > 32)', reference: 'Sensível', status: 'critical' },
                { parameter: 'Doxiciclina', value: 'Sensível (Halo 26 mm)', reference: 'Sensível', status: 'normal' },
                { parameter: 'Clindamicina', value: 'Resistente (Induzida)', reference: 'Sensível', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Diante de um quadro de MRSP em cão atópico, qual é a melhor conduta terapêutica?',
          decisionOptions: [
            {
              id: 'opt_dec_bact_1',
              label: 'Terapia tópica intensiva com clorexidina 3-4% banhos 3x/semana + Doxiciclina oral guiada pelo antibiograma',
              description: 'Combinar descolonização tópica com antisséptico para quebrar biofilme e administrar apenas o antimicrobiano com sensibilidade comprovada.',
              isOptimal: true,
              consequenceText: 'Excelente conduta médica alinhada ao One Health! A terapia tópica com clorexidina remove fisicamente a carga bacteriana e o biofilme cutâneo sem induzir resistência gênica mediada por mecA. O uso da Doxiciclina respeita rigorosamente a sensibilidade do laudo.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Uso de antibiótico estritamente guiado por cultura somado à antissepsia tópica',
                mechanism: 'Inibição ribossomal da síntese proteica bacteriana e rompimento de membrana bacteriana pela clorexidina',
                effect: 'Eliminação da infecção estafilocócica sem pressionar cepas multirresistentes',
                clinicalMeaning: 'Cicatrização das pústulas, reepitelização cutânea e prevenção de disseminação zoonótica de MRSP'
              }
            },
            {
              id: 'opt_dec_bact_2',
              label: 'Aumentar a dose da cefalexina para o dobro e adicionar enrofloxacino empiricamente',
              description: 'Dobrar dose de betalactâmico e associar fluoroquinolona sem checar o laudo.',
              isOptimal: false,
              consequenceText: 'Conduta desastrosa! Cepas MRSP possuem o gene mecA que altera a proteína ligadora de penicilina (PBP2a), tornando a bactéria resistente a TODOS os betalactâmicos (não importa a dose). Além disso, fluoroquinolonas induzem mutações de resistência rápida.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso empírico de betalactâmico em bactéria com gene mecA mutado',
                mechanism: 'Ausência total de afinidade farmacológica pela PBP2a modificada',
                effect: 'Proliferação descontrolada do patógeno e destruição da barreira cutânea',
                clinicalMeaning: 'Evolução da piodermite para furunculose profunda com cicatrizes e bacteremia'
              }
            },
            {
              id: 'opt_dec_bact_3',
              label: 'Suspender todos os remédios e aplicar corticoide oral para cessar a coceira',
              description: 'Focar na supressão do prurido ignorando a infecção bacteriana ativa.',
              isOptimal: false,
              consequenceText: 'Erro grave. O corticoide suprime a imunidade inata dos neutrófilos, transformando uma infecção cutânea em celulite infecciosa generalizada.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Imunossupressão iatrogênica em sítio bacteriano ativo',
                mechanism: 'Inibição da quimiotaxia e fagocitose neutrofílica',
                effect: 'Invasão bacteriana profunda nos tecidos subcutâneos',
                clinicalMeaning: 'Formação de fístulas drenantes hemopurulentas e febre séptica'
              }
            }
          ],
          learningTakeaways: [
            'Bactérias Gram-positivas retêm o cristal violeta devido à camada espessa de peptideoglicano.',
            'Cepa MRSP é resistente a TODOS os betalactâmicos (cefalexina, amoxicilina, ceftriaxona) devido à mutação mecA na PBP2a.',
            'O tratamento tópico antisséptico é a pedra angular contra superbactérias dermatológicas.'
          ]
        }
      },
      {
        id: 'sec_bacteriology_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Parede Bacteriana & Resistência Antimicrobiana',
        exerciseId: 'ex_bacteriology_01'
      }
    ]
  },
  {
    id: 'lesson_bacteriology_02_cell_wall_virulence',
    moduleId: 'mod_bacteriology_immunology',
    title: 'Arquitetura da Parede Bacteriana & Fatores de Patogenicidade',
    shortDescription: 'Peptideoglicano, ácidos teicoicos, membrana externa com lipopolissacarídeo (LPS), biofilmes e adesinas patogênicas.',
    estimatedMinutes: 14,
    order: 2,
    concepts: ['concept_bacteriology_cell_wall_virulence'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_bacteriology_th2',
        type: 'theory',
        title: 'Biologia Molecular da Parede Celular & Os PAMPs Bacterianos',
        contentMarkdown: `### Ultraestrutura da Parede Celular Bacteriana

A parede celular bacteriana não apenas protege contra a lise osmótica interna (pressão de turgor de até 20 atm), mas abriga os principais **Padrões Moleculares Associados a Patógenos (PAMPs)** que ativam o sistema imune inato:

1. **Envelope Gram-Positivo:**
   * Uma espessa malha tridimensional de **peptideoglicano (mureína)** polimerizado por cadeias alternadas de N-acetilglicosamina (NAG) e ácido N-acetilmurâmico (NAM), unidas por pontes peptídicas catalisadas por transpeptidases (PBPs).
   * **Ácidos Teicoicos e Lipoteicoicos (LTA):** Polímeros de glicerol/ribitol fosfato ancorados à membrana plasmática que atuam como adesinas e ativam os receptores **TLR2** dos macrófagos.
2. **Envelope Gram-Negativo:**
   * Camada fina de peptideoglicano imersa no **espaço periplasmático** (onde residem enzimas como as betalactamases).
   * **Membrana Externa Assimétrica:** O folheto interno é formado por fosfolipídios; o folheto externo é composto por **Lipopolissacarídeo (LPS)**:
     * **Lipídeo A:** Fosfolipídeo glicosaminídico hidrofóbico altamente conservado. É o centro tóxico (**Endotoxina**) que se liga ao receptor **TLR4**.
     * **Cerano Central (Core):** Oligossacarídeo conservado contendo KDO (ácido 2-ceto-3-desoxioctônico).
     * **Antígeno O:** Cadeia polissacarídica repetitiva hidrofílica externa, responsável pela variabilidade sorológica (sorotipagem de *Salmonella* e *E. coli*).

\`\`\`mermaid
flowchart TD
    GramNegLysis["Lise de Bacilos Gram-Negativos (E. coli, Salmonella)"] --> FreeLPS["Liberação de Lipopolissacarídeo (LPS / Endotoxina)"]
    FreeLPS --> LBP["Ligação à Proteína Carreadora LBP no Plasma"]
    LBP --> TLR4Complex["Complexo Receptor CD14 / TLR4 / MD-2 nos Macrófagos"]
    TLR4Complex --> MyD88["Cascata de Sinalização MyD88 / NF-kB"]
    MyD88 --> CytokineStorm["Tempestade de Citocinas: TNF-alfa, IL-1beta & IL-6"]
    CytokineStorm --> EndothelialShock["Vasodilatação Sistêmica, Aumento de Permeabilidade & Choque Séptico"]
\`\`\`

> 📖 Referência Canônica: Quinn et al., *Veterinary Microbiology and Microbial Disease*, 2nd ed.; Tizard, *Veterinary Immunology*, 10th ed., Elsevier.

> 💡 Pérola Microbiológica: O biofilme bacteriano (*biofilm*) é uma matriz extracelular de exopolissacarídeos (EPS), proteínas e DNA extracelular secretada por colônias de bactérias (como *Pseudomonas aeruginosa* e *Staphylococcus aureus* em implantes ortopédicos e cateteres). O biofilme aumenta a tolerância aos antimicrobianos em até 1.000 vezes, exigindo desbridamento cirúrgico ou remoção do implante para cura clínica.`
      },
      {
        id: 'sec_bacteriology_lab2',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Leitão 48 (Granja Intensiva)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Choque Endotóxico por Colibacilose Neonatal Suína',
          patient: {
            name: 'Leitão 48',
            species: 'Suíno',
            breed: 'Landrace x Large White',
            age: '4 dias',
            weightKg: 1.6,
            habitatOrEnvironment: 'Maternidade suinícola intensiva em gaiola de parto'
          },
          vitals: {
            heartRateBpm: 210,
            respiratoryRateRpm: 50,
            temperatureCelsius: 36.2,
            mucousMembranes: 'Cianóticas com extremidades de orelhas e cauda arroxeadas',
            capillaryRefillTimeSec: 3.5
          },
          anamnesis: 'Ninhada inteira de 12 leitões apresentou diarreia aquosa profusa amarelada, desidratação severa e fraqueza progressiva há 18 horas. Três animais morreram em coma hipotérmico.',
          exams: [
            {
              category: 'necropsy',
              title: 'Necrópsia & Isolamento Microbiológico',
              findings: 'Alças do intestino delgado repletas de fluido seroso amarelado com congestão vascular mesentérica intensa. Isolamento puro em ágar MacConkey de bacilos fermentadores de lactose.',
              abnormalValues: [
                { parameter: 'Cultura Intestinal', value: 'Escherichia coli Enterotoxigênica (ETEC F4 / K88)', reference: 'Microbiota equilibrada', status: 'critical' },
                { parameter: 'Lactato Sérico', value: '7.8 mmol/L (Choque hipovolêmico/séptico)', reference: '< 2.0 mmol/L', status: 'critical' },
                { parameter: 'Glicemia Sérica', value: '32 mg/dL', reference: '60 - 100 mg/dL', status: 'low' }
              ]
            }
          ],
          challengePrompt: 'Com septicemia e choque endotóxico por E. coli ETEC na leitegada, qual é a intervenção de reidratação e bloqueio de mortalidade em massa?',
          decisionOptions: [
            {
              id: 'opt_dec_bact2_1',
              label: 'Reidratação hidroeletrolítica por via intraperitoneal/oral com solução de eletrólitos e glicose + aquecimento térmico com lâmpada infravermelha + antibioticoterapia do lote guiada',
              description: 'Restaurar a volemia imediatamente combatendo a hipotermia (fator letal) e neutralizando a diarreia secretora mediada por enterotoxinas LT/ST.',
              isOptimal: true,
              consequenceText: 'Conduta salvadora impecável! Em leitões neonatos com diarreia colibacilar, a causa primária de morte é a hipovolemia hipotérmica com hipoglicemia induzida pela endotoxemia. O aquecimento térmico restaura a perfusão periférica e a hidratação intraperitoneal absorve rapidamente, revertendo o choque.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Hidratação balanceada intraperitoneal associada a aquecimento ambiental a 32 °C',
                mechanism: 'Restauração da volemia e reversão do colapso metabólico por endotoxina LPS',
                effect: 'Recuperação do reflexo de mamada e elevação da temperatura retal',
                clinicalMeaning: 'Queda da mortalidade da leitegada de 80% para menos de 10%'
              }
            },
            {
              id: 'opt_dec_bact2_2',
              label: 'Banhar todos os leitões em água fria com desinfetante para limpar a diarreia',
              description: 'Tentar desinfetar a pele com água fria.',
              isOptimal: false,
              consequenceText: 'Erro desastroso fatal! Os leitões neonatos já estão com hipotermia severa (36.2 °C). O banho frio induzirá choque hipotérmico irreversível com morte de 100% dos animais em poucos minutos.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Exposição ao frio de animais em choque endotóxico',
                mechanism: 'Queda fulminante da temperatura corporal central (< 34 °C)',
                effect: 'Parada cardiorrespiratória por assistolia hipotérmica',
                clinicalMeaning: 'Mortalidade de 100% da leitegada'
              }
            },
            {
              id: 'opt_dec_bact2_3',
              label: 'Administrar apenas vermífugo oral (ivermectina) em toda a leitegada',
              description: 'Prescrever anti-helmíntico para diarreia neonatal bacteriana.',
              isOptimal: false,
              consequenceText: 'Totalmente incorreto. Leitões de 4 dias de vida não apresentam helmintíases intestinais patogênicas. O fármaco é inútil contra E. coli e os animais morrerão de choque endotóxico.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Erro diagnóstico total ao confundir bactéria com nematódeo',
                mechanism: 'Ausência de intervenção contra a desidratação e o LPS',
                effect: 'Morte contínua dos leitões por acidose e hipovolemia',
                clinicalMeaning: 'Perda econômica e sanitária severa'
              }
            }
          ],
          learningTakeaways: [
            'O Lipídeo A do LPS de bactérias Gram-negativas é a molécula responsável pelo choque endotóxico via TLR4.',
            'Na colibacilose neonatal, a hipotermia acelera o óbito e o suporte térmico é tão vital quanto a hidratação.',
            'O antígeno F4 (K88) permite a adesão das fímbrias da E. coli aos enterócitos do intestino delgado.'
          ]
        }
      },
      {
        id: 'sec_bacteriology_ex2',
        type: 'exercise',
        title: 'Exercício Clínico: PAMPs Bacterianos & Fatores de Patogenicidade',
        exerciseId: 'ex_bacteriology_02'
      }
    ]
  },
  {
    id: 'lesson_bacteriology_03_susceptibility_mic',
    moduleId: 'mod_bacteriology_immunology',
    title: 'Avaliação Laboratorial de Suscetibilidade: Disco-Difusão & CIM',
    shortDescription: 'Padronização CLSI/BrCAST, halo de inibição em ágar Mueller-Hinton, microdiluição em caldo e índices PK/PD de eficácia.',
    estimatedMinutes: 14,
    order: 3,
    concepts: ['concept_bacteriology_susceptibility_mic'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_bacteriology_th3',
        type: 'theory',
        title: 'Metodologias de Teste de Sensibilidade aos Antimicrobianos (TSA)',
        contentMarkdown: `### Padronização Internacional (CLSI & BrCAST)

O isolamento de uma bactéria em cultura clínica exige um teste de sensibilidade padronizado para guiar a escolha antimicrobiana racional:

1. **Disco-Difusão (Técnica de Kirby-Bauer):**
   * Semeadura uniforme de suspensão bacteriana ajustada na **escala 0.5 de McFarland** ($1.5 \times 10^8$ UFC/mL) em placa de **Ágar Mueller-Hinton** (com profundidade rigorosa de 4 mm).
   * Discos de papel impregnados com concentrações fixas de fármacos são aplicados sobre o ágar.
   * O antibiótico difunde-se radialmente; após 18 a 24 horas de incubação a 35 °C, mede-se o **diâmetro do halo de inibição** em milímetros com paquímetro.
   * **Limitação:** É um teste qualitativo (S, I, R) e não informa a concentração numérica de fármaco necessária para erradicação.
2. **Concentração Inibitória Mínima (CIM / MIC):**
   * O padrão-ouro quantitativo realizado por **microdiluição em placas de 96 poços**.
   * A bactéria é exposta a diluições seriadas na base 2 do antibiótico (ex: 0.25, 0.5, 1, 2, 4, 8, 16 mcg/mL).
   * A **CIM** é a menor concentração de antimicrobiano capaz de **inibir completamente o crescimento visível a olho nu** do microrganismo.

---

### Os Três Perfis Farmacodinâmicos (PK/PD)

| Perfil PK/PD | Classes de Antimicrobianos | Índice Preditor de Cura Clínica | Meta Farmacodinâmica Recomendada |
| :--- | :--- | :--- | :--- |
| **Tempo-Dependente** | Penicilinas, Cefalosporinas, Carbapenêmicos | **% T > CIM** (Tempo que a concentração livre permanece acima da CIM) | % T > CIM deve ser de **pelo menos 50% a 70% do intervalo entre doses** |
| **Concentração-Dependente** | Aminoglicosídeos (Gentamicina, Amicacina) | **Cmax / CIM** (Pico plasmático dividido pela CIM) | Pico sérico deve atingir **8 a 10 vezes a CIM** |
| **Exposição / Área sob a Curva** | Fluoroquinolonas, Azitromicina, Doxiciclina | **AUC24 / CIM** (Área sob a curva em 24h dividida pela CIM) | AUC24 / CIM > 100-125 para Gram-negativos |

\`\`\`mermaid
flowchart TD
    Isolate["Isolamento Bacteriano Puro em Placa"] --> SusceptibilityMethod{"Escolha da Metodologia de TSA"}
    SusceptibilityMethod -- "Triagem Rápida Semiquantitativa" --> KirbyBauer["Disco-Difusão Kirby-Bauer: Mensuração do Halo em mm"]
    SusceptibilityMethod -- "Infecção Grave / Tecido Profundo" --> MIC_Plate["Microdiluição em Caldo: Determinação da CIM (mcg/mL)"]
    MIC_Plate --> PKPD_Integration["Integração PK/PD com a Concentração Livre no Tecido-Alvo"]
    PKPD_Integration -- "Betalactâmicos" --> TimeDep["Tempo-Dependente: Garantir T > CIM > 60% do Intervalo"]
    PKPD_Integration -- "Aminoglicosídeos" --> ConcDep["Concentração-Dependente: Garantir Cmax / CIM > 8-10x"]
\`\`\`

> 📖 Referência Canônica: Clinical and Laboratory Standards Institute (CLSI), *Performance Standards for Antimicrobial Disk and Dilution Susceptibility Tests for Bacteria Isolated from Animals*, VET01; Giguère et al., *Antimicrobial Therapy in Veterinary Medicine*, 5th ed., Wiley.

> 💡 Pérola Prática: Em infecções por bactérias sensíveis com CIM no limiar intermediário, para antibióticos tempo-dependentes (como cefalexina ou ampicilina), a melhor estratégia terapêutica NÃO é dobrar a dose isolada, mas sim **encurtar o intervalo de administração** (ex: passar de 12/12h para 8/8h), mantendo a concentração sanguínea continuamente acima da CIM!`
      },
      {
        id: 'sec_bacteriology_lab3',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Negão (Cão com Osteomielite Pós-Cirúrgica)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Interpretação de CIM & Planejamento PK/PD em Osteomielite Estafilocócica',
          patient: {
            name: 'Negão',
            species: 'Canino',
            breed: 'Labrador x Fila',
            age: '5 anos',
            weightKg: 35,
            habitatOrEnvironment: 'Casa com quintal'
          },
          vitals: {
            heartRateBpm: 96,
            respiratoryRateRpm: 22,
            temperatureCelsius: 39.1,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Animal submetido a osteossíntese de fêmur há 4 semanas com placa e parafusos. Apresenta fístula drenante com exsudato purulento na linha de incisão, claudicação grau 4/5 e dor intensa à palpação local.',
          exams: [
            {
              category: 'microbiology',
              title: 'Cultura Óssea Profunda & Microdiluição de CIM',
              findings: 'Amostra obtida por curetagem cirúrgica estéril profunda do foco de fratura.',
              abnormalValues: [
                { parameter: 'Agente Isolado', value: 'Staphylococcus aureus meticilina-sensível (MSSA)', reference: 'Estéril', status: 'critical' },
                { parameter: 'Cefazolina CIM', value: '0.5 mcg/mL', reference: 'Sensível <= 2.0', status: 'normal' },
                { parameter: 'Gentamicina CIM', value: '1.0 mcg/mL', reference: 'Sensível <= 4.0', status: 'normal' },
                { parameter: 'Radiografia de Fêmur', value: 'Reação periosteal lítica ao redor dos parafusos proximais (osteomielite)', reference: 'Consolidação óssea normal', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Para erradicar MSSA no tecido ósseo cortical hipovascularizado com CIM de 0.5 mcg/mL para cefazolina, qual é a conduta farmacotécnica correta?',
          decisionOptions: [
            {
              id: 'opt_dec_bact3_1',
              label: 'Desbridamento cirúrgico da fístula com remoção de sequestros ósseos + Cefazolina intravenosa a cada 6-8 horas (ou Cefalexina 30 mg/kg 8/8h) para manter o % T > CIM acima de 70% no osso',
              description: 'Combinar a limpeza mecânica do foco avascular com a manutenção de concentrações tempo-dependentes contínuas no tecido ósseo.',
              isOptimal: true,
              consequenceText: 'Conduta impecável! Em osteomielites, os antimicrobianos não penetram no osso necrótico sem suprimento vascular (sequestro ósseo). O desbridamento mecânico remove o biofilme e o tecido desvitalizado, permitindo que a cefalosporina administrada no intervalo correto de 8 em 8 horas mantenha a concentração óssea livre permanentemente acima da CIM de 0.5 mcg/mL.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Desbridamento cirúrgico associado à dosagem respeitando o perfil tempo-dependente',
                mechanism: 'Remoção de biofilme avascular e manutenção de níveis ósseos T > CIM contínuos',
                effect: 'Erradicação completa do Staphylococcus aureus nas lacunas ósseas',
                clinicalMeaning: 'Fechamento da fístula, cicatrização do fêmur e consolidação óssea'
              }
            },
            {
              id: 'opt_dec_bact3_2',
              label: 'Administrar uma dose única semanal de cefalexina sem desbridamento cirúrgico',
              description: 'Usar dose única maciça para tentar economizar aplicações.',
              isOptimal: false,
              consequenceText: 'Erro farmacológico crasso! Os betalactâmicos são fármacos tempo-dependentes com meia-vida curta (1 a 2 horas). Administrar uma dose semanal deixa a concentração tecidual abaixo da CIM por 95% do tempo, selecionando rapidamente cepas mutantes hiper-resistentes.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Subdosagem temporal com intervalo excessivamente longo',
                mechanism: 'Queda dos níveis ósseos para zero por dias seguidos',
                effect: 'Proliferação descontrolada do biofilme bacteriano e frouxidão dos implantes',
                clinicalMeaning: 'Falência da osteossíntese e perda do membro por osteomielite crônica'
              }
            },
            {
              id: 'opt_dec_bact3_3',
              label: 'Prescrever apenas pomada cicatrizante tópica sobre o orifício da fístula cutânea',
              description: 'Tratar a osteomielite como lesão dérmica superficial.',
              isOptimal: false,
              consequenceText: 'Conduta totalmente ineficaz. A pomada tópica não atinge o córtex femoral profundo e a infecção continuará destruindo o osso trabecular.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Abordagem superficial de infecção óssea profunda',
                mechanism: 'Persistência bacteriana nas interfaces dos parafusos',
                effect: 'Lise óssea contínua com risco de fratura patológica',
                clinicalMeaning: 'Instabilidade ortopédica grave'
              }
            }
          ],
          learningTakeaways: [
            'A CIM indica a concentração quantitativa exata necessária para inibir o microrganismo.',
            'Para betalactâmicos (tempo-dependentes), o parâmetro preditor de cura é o % T > CIM, exigindo intervalos curtos entre doses.',
            'Nenhum antibiótico penetra em sequestros ósseos avasculares; o desbridamento cirúrgico é indispensável.'
          ]
        }
      },
      {
        id: 'sec_bacteriology_ex3',
        type: 'exercise',
        title: 'Exercício Clínico: Determinação de CIM & Perfis PK/PD',
        exerciseId: 'ex_bacteriology_03'
      }
    ]
  },
  {
    id: 'lesson_bacteriology_04_mrsp_esbl_superbugs',
    moduleId: 'mod_bacteriology_immunology',
    title: 'Superbactérias Veterinárias: MRSP, MRSA & Enterobactérias ESBL',
    shortDescription: 'Genética de resistência: cassete estafilocócico SCCmec (PBP2a), plasmídeos blaCTX-M, biofilmes e biosseguridade One Health.',
    estimatedMinutes: 15,
    order: 4,
    concepts: ['concept_bacteriology_mrsp_esbl_superbugs'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_bacteriology_th4',
        type: 'theory',
        title: 'Mecanismos Genéticos de Resistência Antimicrobiana em Pequenos e Grandes Animais',
        contentMarkdown: `### A Crise Global da Resistência Antimicrobiana (One Health)

A medicina veterinária enfrenta o avanço alarmante de patógenos resistentes aos antimicrobianos de importância crítica para a saúde humana e animal:

1. **MRSP & MRSA (Staphylococcus Resistentes à Meticilina):**
   * *Staphylococcus pseudintermedius* é o principal comensal e patógeno oportunista da pele canina; *S. aureus* é zoonótico e prevalente em humanos, equinos e mastite bovina.
   * **Base Genética:** Aquisição do elemento genético móvel **SCCmec (Staphylococcal Cassette Chromosome mec)**, que transporta o gene **mecA** (ou *mecC*).
   * **Mecanismo:** O gene codifica a proteína **PBP2a (Penicillin-Binding Protein 2a)**. Enquanto as PBPs normais são inativadas pela ligação dos betalactâmicos, a PBP2a possui conformação tridimensional que impede a ligação de **todas as penicilinas, cefalosporinas (1ª a 4ª geração) e carbapenêmicos**.
2. **Enterobactérias Produtoras de ESBL (Betalactamases de Espectro Estendido):**
   * *Escherichia coli*, *Klebsiella pneumoniae* e *Enterobacter* spp.
   * **Base Genética:** Plasmídeos conjugativos de alta transmissibilidade contendo genes da família **blaCTX-M**, **blaTEM** ou **blaSHV**.
   * **Mecanismo:** Enzimas secretadas no espaço periplasmático que hidrolisam ativamente penicilinas, cefalosporinas de 3ª geração (ceftiofur, cefotaxima, ceftriaxona) e monobactâmicos (aztreonam).

\`\`\`mermaid
flowchart TD
    SCCmec["Aquisição do Cassete SCCmec (Gene mecA)"] --> PBP2a["Expressão da Transpeptidase PBP2a Alterada"]
    PBP2a --> AllBetaLactamResist["Resistência Cruzada a TODAS as Penicilinas, Cefalosporinas & Carbapenêmicos"]
    ESBL_Plasmids["Plasmídeo Conjugativo com Genes blaCTX-M"] --> ESBL_Enzymes["Secreção de Betalactamases de Espectro Estendido"]
    ESBL_Enzymes --> HydrolyzeCeph["Hidrólise Enzimática Ativa de Cefalosporinas de 3ª & 4ª Geração"]
    AllBetaLactamResist & HydrolyzeCeph --> OneHealthThreat["Ameaça One Health: Transmissão Zoonótica entre Pets, Tutores & Ambiente"]
\`\`\`

> 📖 Referência Canônica: Weese et al., *Antimicrobial Resistance in Animals and the Environment*, CABI; Sykes, *Greene's Infectious Diseases of the Dog and Cat*, 5th ed.

> ⚠️ Alerta de Biosseguridade Clínica: Pacientes colonizados ou infectados por MRSP ou enterobactérias ESBL devem ser manejados sob **Precauções de Contato Estritas**: uso obrigatório de luvas, avental descartável, desinfecção de estetoscópios e superfícies com peróxido de hidrogênio acelerado ou hipoclorito, e isolamento em baia dedicada para prevenir surtos nosocomiais no hospital veterinário.`
      },
      {
        id: 'sec_bacteriology_lab4',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Luna (Gata com Cistite por ESBL)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo de Infecção Urinária Complicada por E. coli Produtora de ESBL',
          patient: {
            name: 'Luna',
            species: 'Felino',
            breed: 'Siamês',
            age: '8 anos',
            weightKg: 3.8,
            habitatOrEnvironment: 'Apartamento com múltiplos gatos'
          },
          vitals: {
            heartRateBpm: 180,
            respiratoryRateRpm: 26,
            temperatureCelsius: 38.6,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Paciente diabética bem controlada com insulina glargina apresenta hematúria, polaciúria e periúria (urina fora da caixa de areia) há 10 dias. Já foi tratada empiricamente com enrofloxacino e cefalotina sem qualquer melhora clínica.',
          exams: [
            {
              category: 'microbiology',
              title: 'Urocultura por Cistocentese & Teste Fenotípico de Sinergismo de Duplo Disco',
              findings: 'Isolamento de Escherichia coli em contagem > 100.000 UFC/mL com teste de aproximação de disco positivo para ESBL.',
              abnormalValues: [
                { parameter: 'Agente Etiológico', value: 'Escherichia coli produtora de ESBL', reference: 'Urina estéril', status: 'critical' },
                { parameter: 'Cefotaxima', value: 'Resistente (Halo 8 mm)', reference: 'Sensível >= 26 mm', status: 'critical' },
                { parameter: 'Ciprofloxacino', value: 'Resistente (Halo 6 mm)', reference: 'Sensível >= 21 mm', status: 'critical' },
                { parameter: 'Nitrofurantoína', value: 'Sensível (Halo 22 mm / CIM 16)', reference: 'Sensível', status: 'normal' },
                { parameter: 'Fosfomicina Trometamol', value: 'Sensível (Halo 28 mm / CIM 8)', reference: 'Sensível', status: 'normal' }
              ]
            }
          ],
          challengePrompt: 'Com E. coli resistente a todas as cefalosporinas e quinolonas por produção de ESBL em gata diabética, qual protocolo garante cura clínica sem selecionar superbactérias hospitalares?',
          decisionOptions: [
            {
              id: 'opt_dec_bact4_1',
              label: 'Prescrever Nitrofurantoína oral (4 mg/kg 8/8h) ou Fosfomicina baseada no laudo por 10 dias + manejo rigoroso de desinfecção da liteira',
              description: 'Utilizar antimicrobiano de concentração urinária seletiva que mantém eficácia contra ESBL sem utilizar drogas de reserva crítica humana como meropenem.',
              isOptimal: true,
              consequenceText: 'Excelente conduta médica e exemplar compromisso com a administração racional de antimicrobianos (Stewardship)! A nitrofurantoína atinge concentrações urinárias centenas de vezes superiores à sérica e não sofre clivagem pelas betalactamases de espectro estendido, erradicando a infecção bacteriana na bexiga sem necessidade de recorrer a carbapenêmicos de uso restrito hospitalar.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Uso de fármaco com concentração urinária seletiva guiado por antibiograma',
                mechanism: 'Inibição de múltiplos sistemas enzimáticos bacterianos pela nitrofurantoína',
                effect: 'Esterilização da urina e alívio completo da hematúria em 72h',
                clinicalMeaning: 'Urocultura de controle negativa em 14 dias com preservação da barreira vesical'
              }
            },
            {
              id: 'opt_dec_bact4_2',
              label: 'Prescrever ceftriaxona intramuscular em dose tripla associada a cefovecina injetável',
              description: 'Tentar vencer a resistência da betalactamase com cefalosporinas injetáveis de alta potência.',
              isOptimal: false,
              consequenceText: 'Erro farmacológico gravíssimo! As enzimas ESBL hidrolisam ativamente a ceftriaxona e cefovecina com afinidade catalítica máxima. Aumentar a dose não terá nenhum efeito e induzirá disbiose intestinal severa e falência terapêutica.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de cefalosporina de 3ª geração contra bactéria produtora de ESBL',
                mechanism: 'Hidrólise enzimática imediata do anel betalactâmico do fármaco',
                effect: 'Sobrevivência e ascensão bacteriana da bexiga para os rins',
                clinicalMeaning: 'Evolução para pielonefrite séptica aguda com azotemia renal'
              }
            },
            {
              id: 'opt_dec_bact4_3',
              label: 'Prescrever meropenem contínuo sem indicação prévia e sem precauções de biosseguridade',
              description: 'Utilizar carbapenêmico de reserva humana de primeira linha sem tentar alternativas mais seguras.',
              isOptimal: false,
              consequenceText: 'Conduta eticamente questionável e contrária às diretrizes globais do One Health. O meropenem é fármaco de última reserva em medicina humana; seu uso veterinário deve ser restrito exclusivamente a infecções sistêmicas com risco de morte e sem nenhuma opção sensível no laudo.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Uso de antibiótico de reserva crítica humana para cistite não complicada com opções viáveis',
                mechanism: 'Pressão seletiva para surgimento de enterobactérias resistentes a carbapenêmicos (CRE)',
                effect: 'Risco de disseminação de superbactérias intratáveis para o ambiente',
                clinicalMeaning: 'Quebra de diretrizes internacionais de Stewardship'
              }
            }
          ],
          learningTakeaways: [
            'As betalactamases de espectro estendido (ESBL) inativam penicilinas e cefalosporinas de 1ª a 4ª geração.',
            'O teste de sinergismo de duplo disco confirma fenotipicamente a produção de ESBL.',
            'Opções como nitrofurantoína e fosfomicina representam estratégias seguras para poupar carbapenêmicos de reserva humana.'
          ]
        }
      },
      {
        id: 'sec_bacteriology_ex4',
        type: 'exercise',
        title: 'Exercício Clínico: Superbactérias Veterinárias & Mecanismos mecA/ESBL',
        exerciseId: 'ex_bacteriology_04'
      }
    ]
  },
  {
    id: 'lesson_bacteriology_05_vaccinology_adjuvants',
    moduleId: 'mod_bacteriology_immunology',
    title: 'Imunologia Aplicada, Vacinologia Veterinária & Mecanismos de Adjuvantes',
    shortDescription: 'Vacinas atenuadas (MHC-I / CD8+) vs. inativadas bacterinas (MHC-II / CD4+), adjuvantes de alumínio e sarcoma de aplicação felino.',
    estimatedMinutes: 14,
    order: 5,
    concepts: ['concept_bacteriology_vaccinology_adjuvants'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_bacteriology_th5',
        type: 'theory',
        title: 'Princípios Imunológicos da Vacinologia Comparada',
        contentMarkdown: `### Como o Sistema Imune Processa Diferentes Formulações Vacinais

A proteção conferida por uma vacina depende de como os antígenos são processados e apresentados aos linfócitos T pelo sistema imunológico do animal hospedeiro:

1. **Vacinas Vivas Modificadas / Atenuadas (MLV):**
   * O vírus ou bactéria atenuada replica-se intracelularmente de forma limitada sem causar a doença clínica clássica.
   * **Via Endógena (MHC Classe I):** Proteínas sintetizadas no citosol são clivadas pelo proteassoma, transportadas pelo TAP e apresentadas no **MHC de Classe I** para **Linfócitos T Citotóxicos CD8+**.
   * **Resultado:** Desencadeia uma resposta imune celular de memória vigorosa e duradoura, além de imunidade humoral (anticorpos neutralizantes IgG e IgA mucosa), geralmente sem necessitar de adjuvantes químicos.
2. **Vacinas Inativadas / Mortas (Bacterinas):**
   * O patógeno é morto por calor, formol ou beta-propiolactona.
   * **Via Exógena (MHC Classe II):** Os antígenos mortos são fagocitados por Células Apresentadoras de Antígenos (APCs: macrófagos e células dendríticas), processados em fagolisossomos e apresentados no **MHC de Classe II** para **Linfócitos T Auxiliares CD4+ (Th2)**.
   * **Resultado:** Estimulam primordialmente a produção de anticorpos circulantes (imunidade humoral), mas geram resposta celular citotóxica CD8+ muito fraca ou nula.

---

### Mecanismos de Ação dos Adjuvantes & A Patogênese do FISS

Como as bacterinas inativadas possuem baixa imunogenicidade intrínseca, elas exigem **Adjuvantes Imunológicos**:
* **Sais Minerais (Hidróxido / Fosfato de Alumínio):** Criam um efeito de depósito com liberação lenta do antígeno no sítio de injeção e ativam o **inflamassomo NLRP3** em macrófagos, liberando IL-1beta e estimulando quimiotaxia local.
* **O Perigo em Felinos (Sarcoma de Sítio de Aplicação Felino - FISS):**
  * Gatos possuem uma resposta inflamatória tecidual única a adjuvantes de alumínio e vacinas com adjuvantes (especialmente raiva inativada e FeLV inativada).
  * A inflamação granulomatosa crônica persistente induz hipermutações somáticas e superexpressão de fatores de crescimento (PDGF e TGF-beta), provocando a transformação maligna de fibroblastos da hipoderme em **Fibrossarcoma altamente invasivo**.
  * **Diretriz da AAFP (American Association of Feline Practitioners):**
    * Vacinas devem ser administradas em **locais distais nos membros** (ex: Tríplice felina no membro torácico direito abaixo do cotovelo, Raiva no membro pélvico direito abaixo do joelho, FeLV no membro pélvico esquerdo abaixo do joelho) para permitir **amputação cirúrgica curativa com margem de 5 cm** caso um sarcoma se desenvolva!

\`\`\`mermaid
flowchart TD
    AntigenType{"Tipo de Antígeno Vacinal"} --> AttenuatedMLV["Atenuado / Vivo Modificado"]
    AntigenType --> InactivatedBact["Inativado / Bacterina Morta"]
    AttenuatedMLV --> IntracellularRep["Replicação Citoplasmática Endógena"]
    IntracellularRep --> MHC1["Apresentação via MHC Classe I -> Linfócitos T CD8+ Citotóxicos"]
    MHC1 --> RobustCellImmunity["Imunidade Celular Robusta & Memória Duradoura Sem Adjuvante"]
    InactivatedBact --> ExtracellularPhago["Fagocitose Exógena por Células Dendríticas"]
    ExtracellularPhago --> MHC2["Apresentação via MHC Classe II -> Linfócitos T CD4+ Auxiliares"]
    ExtracellularPhago --> RequiresAdjuvant["Necessidade Obrigatória de Adjuvante (Sais de Alumínio)"]
    RequiresAdjuvant --> NLRP3Inflam["Ativação do Inflamassomo NLRP3 & Efeito Depósito"]
    RequiresAdjuvant -- "Predisposição Felina" --> FISS["Inflamação Crônica Granulomatosa -> Risco de Fibrossarcoma (FISS)"]
\`\`\`

> 📖 Referência Canônica: Day & Schultz, *Veterinary Immunology: Principles and Practice*, 2nd ed., CRC Press; Tizard, *Veterinary Immunology*, 10th ed.; *AAFP Feline Vaccination Advisory Panel Guidelines*.

> 💡 Regra 3-2-1 da AAFP para Biópsia em Gatos: Uma massa no local de vacinação deve ser biopsiada se: 1. Persistir por mais de **3 meses** após a injeção; 2. Tiver diâmetro maior que **2 centímetros**; ou 3. Continuar crescendo após **1 mês** da aplicação!`
      },
      {
        id: 'sec_bacteriology_lab5',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Mingau (Felino com Nódulo Pós-Vacinal)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo e Rastreamento de Nódulo Pós-Vacinal segundo a Regra 3-2-1',
          patient: {
            name: 'Mingau',
            species: 'Felino',
            breed: 'Siamês',
            age: '5 anos',
            weightKg: 4.2,
            habitatOrEnvironment: 'Casa interna'
          },
          vitals: {
            heartRateBpm: 170,
            respiratoryRateRpm: 24,
            temperatureCelsius: 38.4,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Tutor relata o aparecimento de nódulo subcutâneo firme, aderido aos tecidos profundos, medindo 2.8 cm de diâmetro na região do membro pélvico direito distal, onde o gato recebeu vacina contra Raiva inativada com adjuvante há 14 semanas (3.5 meses).',
          exams: [
            {
              category: 'imaging',
              title: 'Exame Físico Palpatório e Ultrassonografia de Partes Moles',
              findings: 'Nódulo de 2.8 x 2.4 cm com limites infiltrativos na fáscia muscular crural.',
              abnormalValues: [
                { parameter: 'Tempo de Permanência do Nódulo', value: '14 semanas (> 3 meses)', reference: '< 4 semanas', status: 'critical' },
                { parameter: 'Diâmetro do Nódulo', value: '2.8 cm (> 2 cm)', reference: '< 1.0 cm', status: 'critical' },
                { parameter: 'Consistência e Mobilidade', value: 'Firme e aderida aos planos profundos', reference: 'Móvel superficial', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Mingau preenche 2 critérios da Regra 3-2-1 da AAFP para suspeita de Fibrossarcoma de Aplicação (FISS). Qual é a conduta diagnóstica e cirúrgica mandante?',
          decisionOptions: [
            {
              id: 'opt_dec_bact5_1',
              label: 'Realizar biópsia incisional por punch ou tru-cut para diagnóstico histopatológico definitivo com planejamento de ressecção cirúrgica com margens amplas de 3 a 5 cm (ou amputação do membro distal se confirmado sarcoma)',
              description: 'Confirmar a linhagem celular maligna sem violar as margens e planejar ressecção radical precoce antes de infiltração na bacia.',
              isOptimal: true,
              consequenceText: 'Conduta oncológica perfeita alinhada às diretrizes internacionais da AAFP e VOS! Como a vacina foi aplicada no membro distal (conforme protocolo moderno de vacinação felina), o cirurgião consegue planejar a amputação do membro pélvico com margens oncológicas de 5 cm com altíssima taxa de cura, salvando a vida do paciente.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Aplicação da regra 3-2-1 e biópsia diagnóstica precoce de nódulo em membro distal',
                mechanism: 'Identificação histológica de proliferação fusocelular atípica antes de metástase',
                effect: 'Ressecção cirúrgica radical com margens histológicas livres',
                clinicalMeaning: 'Cura oncológica do FISS e sobrevida prolongada com excelente qualidade de vida'
              }
            },
            {
              id: 'opt_dec_bact5_2',
              label: 'Realizar apenas massagens com pomada analgésica tópica e aguardar mais 1 ano para verificar se regride',
              description: 'Ignorar o tempo de 3.5 meses e a adesão profunda da massa.',
              isOptimal: false,
              consequenceText: 'Erro negligente gravíssimo! Em 1 ano o fibrossarcoma terá invadido o periósteo ósseo, a musculatura da coxa e metastatizado para os pulmões, tornando-se completamente inoperável e fatal.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Atraso inaceitável na investigação de massa aderida suspeita',
                mechanism: 'Infiltração neoplásica microscópica profunda e disseminação metastática hematógena',
                effect: 'Sarcoma gigante ulcerado invasivo e metástase pulmonar difusa',
                clinicalMeaning: 'Condição terminal com indicação de eutanásia humanitária'
              }
            },
            {
              id: 'opt_dec_bact5_3',
              label: 'Aplicar injeção intralesional de corticosteroide de depósito para desinflamar o nódulo',
              description: 'Injetar triancinolona dentro da massa tumoral.',
              isOptimal: false,
              consequenceText: 'Contraindicado e desastroso! Injetar corticoide dentro de um sarcoma não reverte a neoplasia, induz imunossupressão local que acelera a proliferação neoplásica e contamina planos fasciais adjacentes.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Injeção intralesional de corticoide em tumor mesenquimal maligno',
                mechanism: 'Disseminação mecânica de células malignas ao longo do trajeto da agulha',
                effect: 'Aceleração da progressão tumoral e contaminação de margens',
                clinicalMeaning: 'Recidiva tumoral agressiva e perda de margem cirúrgica'
              }
            }
          ],
          learningTakeaways: [
            'A vacinação com antígenos atenuados induz resposta celular citotóxica CD8+ via MHC-I.',
            'As bacterinas inativadas exigem adjuvantes químicos para ativar o inflamassomo NLRP3 e criar efeito de depósito.',
            'A regra 3-2-1 da AAFP orienta a biópsia mandatória de nódulos pós-vacinais felinos para diagnóstico precoce de FISS.'
          ]
        }
      },
      {
        id: 'sec_bacteriology_ex5',
        type: 'exercise',
        title: 'Exercício Clínico: Vacinologia Veterinária & Imunidade Celular vs. Humoral',
        exerciseId: 'ex_bacteriology_05'
      }
    ]
  }
];
// ==========================================
// 7. VIROLOGIA & MICOLOGIA VETERINÁRIA
// ==========================================
export const VIROLOGY_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_virology_01',
    conceptId: 'concept_virology_viral_tropism_fungal',
    type: 'multiple_choice',
    prompt: 'Por que o Parvovírus Canino (CPV-2) tem tropismo específico pelas células das criptas intestinais e pela medula óssea, poupando os enterócitos maduros do topo das vilosidades?',
    options: [
      {
        id: 'opt_vir_1',
        text: 'Porque é um vírus de DNA fita simples sem envelope que necessita de células em altíssima taxa de replicação mitótica (fase S) para utilizar a DNA polimerase celular do hospedeiro',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O Parvovírus não codifica sua própria polimerase de DNA e necessita estritamente da maquinaria de replicação de células em rápida divisão mitótica celular (fase S do ciclo). As criptas intestinais de Lieberkühn e as linhagens hematopoiéticas da medula óssea são os tecidos mais mitóticos do corpo, explicando a diarreia hemorrágica por descamação de criptas e a panleucopenia aguda.'
      },
      {
        id: 'opt_vir_2',
        text: 'Porque ele infecta apenas células quiescentes em fase G0 do ciclo celular',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Células em fase G0 não realizam replicação de DNA e são completamente refratárias à proliferação do parvovírus.'
      },
      {
        id: 'opt_vir_3',
        text: 'Porque ele secreta exotoxinas proteolíticas diretamente no lúmen do cólon',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Vírus não possuem metabolismo autônomo nem sintetizam/secretam toxinas enzimáticas como bactérias.'
      },
      {
        id: 'opt_vir_4',
        text: 'Porque sua cápsula lipídica se funde apenas à queratina madura da epiderme',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O parvovírus é um vírus não-envelopado (vírus nu), o que confere enorme resistência físico-química ambiental a desinfetantes comuns.'
      }
    ]
  },
  {
    id: 'ex_virology_02',
    conceptId: 'concept_virology_parvovirus_coronavirus_pathogenesis',
    type: 'multiple_choice',
    prompt: 'Ao comparar a fisiopatologia entérica da Parvovirose Canina (CPV-2) com a Coronavirose Entérica Canina (CCoV), qual diferença fundamental no sítio de infecção epitelial e na capacidade regenerativa tecidual explica o desfecho hemorrágico fulminante na parvovirose versus a diarreia tipicamente autolimitada e sem destruição do estroma na coronavirose?',
    options: [
      {
        id: 'opt_vir_2_1',
        text: 'O CPV-2 ataca seletivamente as células-tronco precursoras nas criptas de Lieberkühn impedindo a renovação epitelial e colapsando toda a vilosidade com exposição vascular da lâmina própria; enquanto o CCoV infecta exclusivamente os enterócitos maduros absortivos do terço apical das vilosidades, preservando as criptas basais intactas para rápida reepitelização em 3 a 5 dias',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A chave patogenética reside no compartimento epitelial atingido. O CCoV (Coronavirose) causa atrofia vilosa superficial ao esfoliar os enterócitos diferenciados apicais; as criptas basais hiperplásicas preservadas rapidamente produzem novos enterócitos, resultando em diarreia osmótica/má-absortiva transitória sem leucopenia. No CPV-2 (Parvovirose), a destruição lítica das criptas elimina a fábrica celular regenerativa, levando ao denudamento total da mucosa, hemorragia fétida e sepse bacteriana secundária agravada pela panleucopenia.'
      },
      {
        id: 'opt_vir_2_2',
        text: 'O CCoV destrói os vasos sanguíneos da submucosa via formação de trombos microvasculares, enquanto o CPV-2 causa apenas hipersecreção de muco mediada por AMPc',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. É o parvovírus que promove colapso e exposição dos vasos da lâmina própria com hemorragia profusa. O CCoV gera apenas diarreia de má absorção sem lesão vascular.'
      },
      {
        id: 'opt_vir_2_3',
        text: 'O CPV-2 coloniza exclusivamente o cólon descendente e reto, enquanto o CCoV possui tropismo gástrico provocando úlceras pépticas perfurantes',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Ambos acometem primordialmente o intestino delgado (duodeno, jejuno e íleo), diferindo na profundidade celular atingida (criptas vs. ápice das vilosidades).'
      },
      {
        id: 'opt_vir_2_4',
        text: 'O CCoV destrói as células hematopoiéticas medulares gerando neutropenia abaixo de 500/uL, enquanto o CPV-2 causa leucocitose com desvio à esquerda regenerativo',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. É o Parvovírus (CPV-2) que promove panleucopenia severa por destruição de precursores na medula óssea. O Coronavírus não infecta a medula óssea.'
      }
    ]
  },
  {
    id: 'ex_virology_03',
    conceptId: 'concept_virology_rabies_distemper_neurotropism',
    type: 'multiple_choice',
    prompt: 'Um cão jovem com histórico de secreção oculonasal mucopurulenta desenvolve mioclonias rítmicas involuntárias contínuas nos membros pélvicos que persistem durante o sono e hiperqueratose digital ("hardpad disease"). Em contraste, um bovino com agressividade, hipersalivação espumosa e paralisia ascendente é suspeito de Raiva. Qual alternativa descreve com exatidão a rota neurotrópica, o mecanismo lesional no SNC e o achado histopatológico de inclusão patognomônico de cada patógeno?',
    options: [
      {
        id: 'opt_vir_3_1',
        text: 'O Lyssavirus rábico ascende por transporte axonal retrógrado (via dineínas) até o SNC sem fase virêmica apreciável, formando Corpúsculos de Negri intracitoplasmáticos eosinofílicos no hipocampo e cerebelo; enquanto o vírus da Cinomose (CDV - Morbillivirus) dissemina-se por viremia primária/secundária pós-linfoide, desencadeia desmielinização multifocal primária e imunomediada (com mioclonias por lesão de motoneurônios), e produz Corpúsculos de Lentz intracitoplasmáticos e intranucleares',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A Raiva não faz viremia detectável; liga-se a receptores nicotínicos de acetilcolina (nAchR) na junção neuromuscular e ascende por fluxo axoplasmático retrógrado até os neurônios encefálicos, formando os Corpúsculos de Negri intracitoplasmáticos (acúmulos de ribonucleoproteínas). A Cinomose (CDV) faz replicação linfoide massiva (receptor SLAM/CD150), invade epitélios e o SNC (receptor Nectina-4), causando desmielinização por lise direta de oligodendrócitos e agressão imunomediada crônica com os clássicos Corpúsculos de Lentz.'
      },
      {
        id: 'opt_vir_3_2',
        text: 'O vírus da Raiva realiza viremia livre pelo plasma ligando-se a eritrócitos e produz Corpúsculos de Lentz no córtex pré-frontal, enquanto o CDV ascende apenas por via linfática retrógrada formando Corpúsculos de Negri em glândulas salivares',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O Lyssavirus não faz viremia nem produz inclusões de Lentz; seu trânsito é estritamente neural retrógrado até o SNC e anterógrado para a saliva.'
      },
      {
        id: 'opt_vir_3_3',
        text: 'A Cinomose é causada por um Rhabdovirus que destrói a substância negra mesencefálica, enquanto a Raiva é um Paramixovírus que desmieliniza o nervo ciático',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Famílias invertidas: o vírus da Cinomose pertence à família Paramyxoviridae (gênero Morbillivirus) e o da Raiva à família Rhabdoviridae (gênero Lyssavirus).'
      },
      {
        id: 'opt_vir_3_4',
        text: 'Ambos os vírus infectam exclusivamente a glia periférica sem penetrar a barreira hematoencefálica, causando paralisia flácida sem inclusões citoplasmáticas detectáveis',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Ambos penetram no neuroeixo central com severo acometimento parenquimatoso e inclusões patognomônicas (Negri e Lentz).'
      }
    ]
  },
  {
    id: 'ex_virology_04',
    conceptId: 'concept_virology_dermatophytes_wood_lamp',
    type: 'multiple_choice',
    prompt: 'Em um gatil com filhotes Persas apresentando lesões alopécicas anulares descamativas na face e orelhas, o clínico utiliza a Lâmpada de Wood (365 nm), realiza exame direto com KOH e inocula escamas pilosas em Ágar DTM (Dermatophyte Test Medium). Qual é a interpretação físico-química e microbiológica correta dessas três etapas diagnósticas?',
    options: [
      {
        id: 'opt_vir_4_1',
        text: 'A Lâmpada de Wood detecta fluorescência verde-maçã emitida por metabólitos de pteridina produzidos por cepas de Microsporum canis; o KOH a 10-20% digere a queratina hospedeira revelando artroconídios ectothrix na bainha do pelo; e o ágar DTM vira precocemente de amarelo para vermelho porque dermatófitos metabolizam preferencialmente proteínas/peptonas liberando amônia alcalina antes de consumir carboidratos',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A fluorescência verde-brilhante é gerada por pteridinas de Microsporum canis (presente em 50-70% das cepas clínicas). O clareamento com KOH digere a matriz proteica córnea sem lisar a parede de quitina fúngica, evidenciando o arranjo ectothrix de esporos ao redor do pelo. No ágar DTM, o indicador vermelho de fenol vira de amarelo para vermelho concomitantemente ao crescimento fúngico porque os dermatófitos hidrolisam proteínas primeiro (gerando amônia básica), enquanto fungos contaminantes ambientais saprófitas utilizam carboidratos primeiro (gerando ácidos e só alcalinizando tardiamente).'
      },
      {
        id: 'opt_vir_4_2',
        text: 'A fluorescência na Lâmpada de Wood ocorre por autofluorescência da queratina dérmica normal e o DTM torna-se vermelho devido à produção de ácido lático via fermentação fúngica anaeróbica',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A viragem para o vermelho no DTM indica elevação do pH (alcalinização por amônia), não acidificação. Ácido deixaria o meio amarelo.'
      },
      {
        id: 'opt_vir_4_3',
        text: 'A Lâmpada de Wood é patognomônica para Trichophyton verrucosum em 100% dos casos e o KOH é utilizado para cultivar o fungo em meio líquido enriquecido',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Trichophyton geralmente não fluoresce à Lâmpada de Wood (apenas M. canis e raramente M. audouinii). O KOH é uma base cáustica que mataria o fungo, servindo apenas para clareamento no exame direto sob microscopia.'
      },
      {
        id: 'opt_vir_4_4',
        text: 'O meio DTM vira para azul em presença de leveduras e a Lâmpada de Wood emite radiação gama que esteriliza o folículo piloso acometido',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O indicador é o vermelho de fenol (vira para vermelho, não azul) e a lâmpada emite luz ultravioleta A (UVA ~365 nm), sem ação esterilizante por radiação gama.'
      }
    ]
  },
  {
    id: 'ex_virology_05',
    conceptId: 'concept_virology_deep_systemic_mycoses',
    type: 'multiple_choice',
    prompt: 'Um felino macho não castrado com acesso à rua apresenta nódulos ulcerados com crostas purulentas no plano nasal ("nariz de palhaço") e membros torácicos, acompanhados de linfangite nodular ascendente. O tutor relata ter sido arranhado na mão e apresenta pápula ulcerada com cordão linfático inflamatório no antebraço. A citopatologia por imprint da lesão felina corada por Panótico Rápido revela abundantes leveduras pleomórficas intracitoplasmáticas em macrófagos com formato em charuto (cigar-shaped). Qual é o agente etiológico, o fenômeno de adaptação morfológica e a conduta preconizada?',
    options: [
      {
        id: 'opt_vir_5_1',
        text: 'Sporothrix brasiliensis (esporotricose felina zoonótica), fungo com dimorfismo térmico (filamentoso saprofítico no ambiente a 25°C e leveduriforme parasitário a 37°C no tecido animal); a conduta exige isolamento do animal, tratamento prolongado com Itraconazol (10-15 mg/kg/dia), EPI de proteção contra unhadas, notificação compulsória ao órgão de vigilância e encaminhamento urgente do tutor ao serviço médico',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O Sporothrix brasiliensis é o agente da hiperendemia de esporotricose zoonótica no Brasil. Trata-se de fungo termodimórfico: na temperatura ambiente (25°C) é filamentoso com conídios em flor de margarida; no tecido vivo (37°C) converte-se na fase leveduriforme em charuto (cigar-shaped) ou naveta. Os gatos apresentam carga fúngica maciça nas úlceras e garras, transmitindo facilmente por inoculação traumática. O tratamento de escolha é o Itraconazol via oral mantido por 30 a 60 dias após a cura clínica, com mandatórias medidas de biossegurança e notificação compulsória.'
      },
      {
        id: 'opt_vir_5_2',
        text: 'Cryptococcus neoformans, levedura capsulada transmitida por mordedura canina tratada exclusivamente com vacinação subcutânea adjuvada',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Cryptococcus apresenta cápsula polissacarídica espessa refringente (evidenciada por Tinta da China) e células esféricas brotantes, sem o aspecto em charuto e sem transmissão zoonótica típica por arranhadura felina.'
      },
      {
        id: 'opt_vir_5_3',
        text: 'Histoplasma capsulatum, fungo filamentoso estrito que ataca apenas aves aquáticas sem qualquer risco de contágio humano',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Histoplasma é dimórfico, inalado de solos com guano de morcegos e aves, e apresenta leveduras minúsculas (2-4 um) arredondadas dentro de macrófagos, acometendo o sistema monocítico-fagocitário.'
      },
      {
        id: 'opt_vir_5_4',
        text: 'Candida albicans, que produz pseudohifas exclusivamente no epitélio cornificado da pele e não responde a antifúngicos azólicos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Candida é levedura comensal oportunista que forma pseudohifas em mucosas úmidas, não causando o quadro de esporotricose linfocutânea ascendente com leveduras em charuto.'
      }
    ]
  }
];

export const VIROLOGY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_virology_01_viral_tropism',
    moduleId: 'mod_virology_mycology',
    title: 'Virologia Veterinária: Tropismo Celular & Parvovirose Canina',
    shortDescription: 'Patogênese molecular do Parvovírus (CPV-2), destruição de criptas de Lieberkühn, panleucopenia e quebra de barreira.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_virology_viral_tropism_fungal'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_virology_th1',
        type: 'theory',
        title: 'A Biologia Molecular do Parvovírus Canino (CPV-2)',
        contentMarkdown: `### O Tropismo Mitótico do Parvovírus

O Parvovírus Canino é um vírus de **DNA de fita simples linear (ssDNA)**, icosaédrico e **não-envelopado**. Por não possuir envelope fosfolipídico, ele é extremamente resistente no meio ambiente, sobrevivendo por mais de 6 meses a 1 ano no solo.

$$\\text{Ingestão Fecal-Oral} \\longrightarrow \\text{Tecido Linfoide Orofaríngeo} \\longrightarrow \\text{Viremia} \\longrightarrow \\text{Criptas Intestinais + Medula Óssea}$$

\`\`\`mermaid
graph TD
    A["Ingestão de Partículas Virais (Fecal-Oral)"] --> B["Replicação em Tonsilas & Placas de Peyer"]
    B --> C["Viremia Sistêmica (Dia 3 a 5 pós-infecção)"]
    C --> D["Destruição de Células Germinativas das Criptas"]
    C --> E["Lise de Precursores Hematopoiéticos Medulares"]
    D --> F["Colapso Vilositário Completo & Hemorragia Fétida"]
    E --> G["Panleucopenia Profunda (< 1.500 leucócitos/uL)"]
    F & G --> H["Translocação Bacteriana Intestinal & Choque Séptico"]
\`\`\`

---

### Por que a Diarreia da Parvovirose é Tão Agressiva?

* Em viroses como o Rotavírus ou Coronavírus, o vírus ataca os **enterócitos maduros do topo das vilosidades** (as criptas proliferativas preservadas conseguem regenerar o epitélio em poucos dias).
* No **Parvovírus (CPV-2)**, o vírus tem tropismo obrigatório pelas **células em rápida mitose das Criptas de Lieberkühn** e da **medula óssea** (panleucopenia profunda).
* Sem novas células para repor o epitélio que descama naturalmente, as vilosidades colapsam inteiras, expondo a lâmina própria vascularizada (hemorragia fétida maciça) e permitindo **translocação bacteriana maciça para a circulação sistêmica com sepse**.

> 📖 Referência Canônica: Fenner's Veterinary Virology (MacLachlan & Dubovi, 5ª ed., Academic Press) & Greene's Infectious Diseases of the Dog and Cat (Sykes, 5ª ed., Elsevier).

> 💡 Pérola Clínica / Prova de Residência: Suscetibilidade Genética Racial: Por que filhotes de Rottweiler, Doberman, American Pit Bull Terrier e Pastor Alemão apresentam taxa de mortalidade desproporcionalmente maior? Estudos imunogenéticos comprovam menor taxa de soroconversão aos antígenos de cápside VP2 e resposta de células T citotóxicas retardada ("black and tan puppy syndrome"), exigindo reforço vacinal até a 18ª-20ª semana de vida!

> 🔬 Histopatologia: Colapso de criptas intestinais: corte histológico evidencia necrose epitelial lítica de criptas com dilatação cística, fusão atrófica de vilosidades e debris celulares basofílicos no lúmen, além de atrofia linfoide em placas de Peyer.

> ⚠️ Alerta Crítico: O CPV-2 é um vírus nu resistente a álcool 70%, clorexidina e amônia quaternária comum! Apenas o Hipoclorito de Sódio a 1:30 (com tempo de contato mínimo de 15 minutos em superfície pré-lavada) ou monopersulfato de potássio garantem a destruição do capsídeo viral no ambiente!`
      },
      {
        id: 'sec_virology_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Bob (Filhote de Rottweiler)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Intensivo da Enterite Parvoviral Aguda com Panleucopenia',
          patient: {
            name: 'Bob',
            species: 'Canino',
            breed: 'Rottweiler',
            age: '3 meses',
            weightKg: 8.0,
            habitatOrEnvironment: 'Quintal com terra batida'
          },
          vitals: {
            heartRateBpm: 160,
            respiratoryRateRpm: 40,
            temperatureCelsius: 39.7,
            mucousMembranes: 'Pálidas e secas (Desidratação 8-10%)',
            capillaryRefillTimeSec: 3.0
          },
          anamnesis: 'Filhote sem histórico vacinal iniciou há 36h quadro de prostração severa, vômitos incoercíveis e diarreia líquida hemorrágica abundante com odor adocicado e fétido patognomônico. Não tolera água ou alimento via oral.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Hemograma Completo e Teste Imunocromatográfico Rápido',
              findings: 'Avaliação hematológica demonstrando imunossupressão medular catastrófica.',
              abnormalValues: [
                { parameter: 'Leucócitos Totais', value: '1.200 /uL', reference: '6.000 - 17.000 /uL', status: 'critical' },
                { parameter: 'Neutrófilos Segmentados', value: '450 /uL', reference: '3.000 - 11.500 /uL', status: 'critical' },
                { parameter: 'Hematócrito', value: '52%', reference: '37 - 55% (Hemoconcentração)', status: 'high' },
                { parameter: 'Antígeno Fecal CPV-2', value: 'POSITIVO FORTE', reference: 'Negativo', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com neutropenia severa (< 500/uL) e perda maciça de integridade intestinal, qual é o pilar terapêutico salvador?',
          decisionOptions: [
            {
              id: 'opt_dec_vir_1',
              label: 'Fluidoterapia balanceada IV vigorosa + Antibioticoterapia profilática parenteral de amplo espectro + Antiemético central',
              description: 'Restaurar volume intravascular, prevenir choque séptico por translocação bacteriana intestinal e controlar vômitos com Maropitant.',
              isOptimal: true,
              consequenceText: 'Conduta exemplar em medicina intensiva! Em pacientes com parvovirose, o que mata o filhote não é o vírus diretamente, mas sim o choque hipovolêmico por perda de fluidos e a sepse bacteriana por translocação entérica facilitada pela neutropenia severa.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Ressuscitação volêmica guiada e cobertura antibiótica parenteral de amplo espectro',
                mechanism: 'Restauração do débito cardíaco e bloqueio da sepse bacteriana por enterobactérias translocadas',
                effect: 'Manutenção da perfusão tecidual até a medula óssea reiniciar a produção de neutrófilos',
                clinicalMeaning: 'Recuperação da volemia, interrupção das perdas hidroeletrolíticas e sobrevida do filhote'
              }
            },
            {
              id: 'opt_dec_vir_2',
              label: 'Prescrever soro caseiro oral e vermífugo em dose dobrada',
              description: 'Tentar hidratar via oral com soro e desverminar imediatamente.',
              isOptimal: false,
              consequenceText: 'Erro grosseiro e letal! Com êmese ativa e atrofia completa de vilosidades intestinais, qualquer líquido oral provocará vômito imediato, aspiração pulmonar e morte por desidratação.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Oferta hídrica oral em paciente com vilosidades destruídas e êmese',
                mechanism: 'Intolerância gástrica e incapacidade de absorção entérica',
                effect: 'Vômito incoercível, broncoaspiração e piora do choque hipovolêmico',
                clinicalMeaning: 'Pneumonia aspirativa associada a colapso circulatório fatal'
              }
            },
            {
              id: 'opt_dec_vir_3',
              label: 'Aplicar vacina décupla (V10) imediatamente como tratamento',
              description: 'Tentar imunizar o cão durante a fase aguda da doença.',
              isOptimal: false,
              consequenceText: 'Contraindicação total! A vacinação em animal já infectado e imunossuprimido não tem valor terapêutico e consome os poucos anticorpos circulantes.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Vacinação em paciente virêmico com panleucopenia',
                mechanism: 'Formação de imunocomplexos circulantes sem estímulo protetor eficaz',
                effect: 'Sobrecarga imune inútil e piora do estresse fisiológico',
                clinicalMeaning: 'Aceleração do choque séptico'
              }
            }
          ],
          learningTakeaways: [
            'O Parvovírus tem tropismo estrito por células com alta taxa de mitose (criptas intestinais e medula óssea).',
            'A causa mortal primária da parvovirose é o choque hipovolêmico somado à sepse por translocação bacteriana.',
            'A neutropenia acentuada no hemograma é o marcador prognóstico mais fidedigno da agressividade da infecção.'
          ]
        }
      },
      {
        id: 'sec_virology_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Virologia Básica & Parvovirose Canina',
        exerciseId: 'ex_virology_01'
      }
    ]
  },
  {
    id: 'lesson_virology_02_parvovirus_coronavirus',
    moduleId: 'mod_virology_mycology',
    title: 'Enterites Virais Comparadas: Parvovirose (CPV-2) vs. Coronavirose (CCoV)',
    shortDescription: 'Fisiopatologia de criptas vs. ápice de vilosidades, quebra de barreira, diarreia osmótica e sinergismo viral.',
    estimatedMinutes: 14,
    order: 2,
    concepts: ['concept_virology_parvovirus_coronavirus_pathogenesis'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_virology_th2',
        type: 'theory',
        title: 'Compartimentalização Epitelial: Criptas de Lieberkühn vs. Terço Apical dos Vilos',
        contentMarkdown: `### Arquitetura da Mucosa Intestinal e Tropismo Viral Divergente

A compreensão das enterites virais veterinárias depende da polaridade funcional do epitélio do intestino delgado:
* **Criptas de Lieberkühn (Compartimento Proliferativo):** Células-tronco e enteroblastos com índice mitótico extremamente acelerado (fase S do ciclo celular). Responsáveis pela renovação celular contínua (o epitélio intestinal inteiro é renovado a cada 48-72 horas).
* **Vilosidades Intestinais (Compartimento Diferenciado):** Enterócitos absortivos maduros com borda em escova rica em dissacaridases (maltase, lactase) e transportadores de sódio-glicose (SGLT-1). Células quiescentes sem mitose ativa.

\`\`\`mermaid
graph TD
    subgraph Coronavirose ["Coronavirose Canina (CCoV - Envelopado)"]
        A1["Infeccao dos Enterocitos Maduros no Apice do Vilo"] --> B1["Esfoliacao e Lise Superficial"]
        B1 --> C1["Perda de Borda em Escova (Deficit de Lactase/SGLT-1)"]
        C1 --> D1["Diarreia Osmotica / Mal-absortiva Autolimitada"]
        C1 --> E1["Criptas Basais Intactas -> Proliferacao Compensatoria"]
        E1 --> F1["Reepitelizacao Rapida em 3 a 5 Dias"]
    end
    subgraph Parvovirose ["Parvovirose Canina (CPV-2 - Nao Envelopado)"]
        A2["Tropismo por Celulas em Mitose das Criptas (Fase S)"] --> B2["Necrose Litica dos Enteroblastos Germinativos"]
        B2 --> C2["Impossibilidade de Reposicao Celular"]
        C2 --> D2["Colapso Vilositario Completo (Denudamento da Mucosa)"]
        D2 --> E2["Hemorragia Profusa da Lamina Propria Vascular"]
        D2 --> F2["Translocacao Bacteriana Massiva + Panleucopenia Medular"]
    end
\`\`\`

---

### Tabela Comparativa de Patogênese & Clínica

| Característica | Parvovirose Canina (CPV-2) | Coronavirose Canina (CCoV) |
| :--- | :--- | :--- |
| **Genoma & Estrutura** | ssDNA linear, não-envelopado (muito resistente) | +ssRNA envelopado com espículas S (frágil a detergentes) |
| **Alvo Celular** | Células mitóticas das criptas e medula óssea | Enterócitos absortivos maduros do ápice dos vilos |
| **Padrão da Diarreia** | Hemorrágica fétida, aquosa, profusa | Mucosa, pastosa a aquosa amarelada, raramente hemorrágica |
| **Quadro Hematológico** | Panleucopenia severa (< 2.000 leucócitos/uL) | Leucograma normal ou discreto desvio inflamatório |
| **Capacidade Regenerativa** | Tardia (demora semanas para regenerar criptas) | Rápida (reepitelização em 72 a 120 horas pelas criptas intactas) |
| **Desinfecção Ambiental** | Hipoclorito de sódio 1:30 ou monopersulfato de K | Detergentes comuns, clorexidina, álcool 70% |

> 📖 Referência Canônica: Infectious Diseases of the Dog and Cat (Sykes, 5ª ed., Saunders Elsevier) & Veterinary Pathology (Slauson & Cooper, 4ª ed.).

> 💡 Pérola Clínica / Sinergismo CCoV + CPV-2: A infecção concomitante por Coronavírus e Parvovírus canino resulta em mortalidade três a cinco vezes superior à infecção isolada por qualquer um dos dois. Por quê? A agressão inicial do CCoV aos enterócitos apicais força as criptas de Lieberkühn a entrarem em hiperplasia mitótica regenerativa desesperada. Esse surto mitótico fornece uma avalanche de células em fase S, atuando como o combustível metabólico perfeito para a replicação exponencial devastadora do CPV-2!

> ⚠️ Alerta de Biossegurança: A estabilidade do CPV-2 em fômites decorre da ausência de envelope lipídico. Em canis com surtos de diarreia, calçados de funcionários, bandejas e frestas de alvenaria contaminadas com parvovírus permanecem infecciosas por até 1 ano se não submetidas à lavagem mecânica vigorosa com água e sabão seguida de contato úmido com água sanitária (hipoclorito) por 15 minutos!`
      },
      {
        id: 'sec_virology_lab2',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Max (Labrador com Enterite de Canil)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Diferenciação Diagnóstica e Isolamento em Surto de Enterite Aguda',
          patient: {
            name: 'Max',
            species: 'Canino',
            breed: 'Labrador Retriever',
            age: '4 meses',
            weightKg: 12.0,
            habitatOrEnvironment: 'Canil de reprodução comercial (lote com 8 filhotes)'
          },
          vitals: {
            heartRateBpm: 128,
            respiratoryRateRpm: 26,
            temperatureCelsius: 38.6,
            mucousMembranes: 'Róseas e úmidas (Sem choque hemodinâmico)',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Filhote apresentou há 48h início de fezes pastosas a líquidas amareladas com muco, sem estrias de sangue e sem odor necrótico pútrido. O filhote ingeriu sachê úmido pela manhã e bebe água voluntariamente. Dois irmãos de ninhada apresentam fezes semelhantes.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Painel Hematológico & Teste Rápido Antigênico Fezes',
              findings: 'Avaliação de leucócitos preservados e identificação viral específica.',
              abnormalValues: [
                { parameter: 'Leucócitos Totais', value: '11.800 /uL', reference: '6.000 - 17.000 /uL', status: 'normal' },
                { parameter: 'Neutrófilos Segmentados', value: '7.500 /uL', reference: '3.000 - 11.500 /uL', status: 'normal' },
                { parameter: 'Hematócrito', value: '41%', reference: '37 - 55%', status: 'normal' },
                { parameter: 'Antígeno Fecal CPV-2 (Parvovírus)', value: 'NEGATIVO', reference: 'Negativo', status: 'normal' },
                { parameter: 'Antígeno Fecal CCoV (Coronavírus)', value: 'POSITIVO', reference: 'Negativo', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com diagnóstico confirmado de Coronavirose Canina (CCoV) isolada, sem leucopenia e com enterócitos apicais esfoliados, qual a conduta clínica e sanitária adequada?',
          decisionOptions: [
            {
              id: 'opt_dec_vir2_1',
              label: 'Suporte hidroeletrolítico via oral com solução balanceada + Dieta hipoalergênica de alta digestibilidade + Probióticos entéricos + Isolamento sanitário do lote',
              description: 'Manter hidratação enquanto as criptas basais regeneram os vilos e isolar para conter disseminação viral entre os filhotes.',
              isOptimal: true,
              consequenceText: 'Excelente conduta médica! Como as criptas de Lieberkühn estão intactas, o epitélio se regenerará em poucos dias. A hidratação oral guiada e dieta de fácil assimilação protegem a função absortiva sem necessidade de internação intensiva ou uso abusivo de antibióticos sistêmicos.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Preservação da proliferação nas criptas e suporte hídrico entérico',
                mechanism: 'Diferenciação acelerada de novos enterócitos compensando a esfoliação apical',
                effect: 'Restauração da borda em escova e da atividade de dissacaridases em 4 a 5 dias',
                clinicalMeaning: 'Remissão espontânea da diarreia sem quebra de barreira vascular e sem sepse'
              }
            },
            {
              id: 'opt_dec_vir2_2',
              label: 'Prescrever quimioterapia com antimicrobianos injetáveis de terceira geração e jejum hídrico absoluto (NPO) por 5 dias',
              description: 'Submeter o cão a jejum forçado prolongado e antibióticos intravenosos pesados.',
              isOptimal: false,
              consequenceText: 'Conduta inadequada! O jejum alimentar prolongado priva os enterócitos de glutamina e ácidos graxos luminais, induzindo atrofia vilositária iatrogênica e piorando a diarreia. Sem neutropenia nem quebra vascular, antibióticos de amplo espectro desregulam a microbiota comensal benéfica.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Jejum absoluto prolongado em enterite superficial',
                mechanism: 'Deprivação de nutrientes luminais tróficos para a renovação de enterócitos',
                effect: 'Atrofia induzida da mucosa e disbiose grave por antimicrobianos desnecessários',
                clinicalMeaning: 'Cronificação da diarreia e desnutrição aguda no filhote'
              }
            },
            {
              id: 'opt_dec_vir2_3',
              label: 'Aplicar anti-inflamatório esteroidal (Dexametasona) para cessar a inflamação intestinal',
              description: 'Usar corticoide em dose alta para inibir a diarreia.',
              isOptimal: false,
              consequenceText: 'Grave erro! Corticosteroides induzem imunossupressão sistêmica, aumentam a replicação do coronavírus e abrem a porta para a proliferação secundária fulminante de Clostridium perfringens ou parvovírus.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Administração de corticoide em infecção viral intestinal ativa',
                mechanism: 'Imunossupressão e retardo da resposta inflamatória adaptativa mucosa',
                effect: 'Aumento da carga viral e predisposição a úlceras gastrointestinais',
                clinicalMeaning: 'Agravamento do quadro para diarreia hemorrágica e risco de perfuração'
              }
            }
          ],
          learningTakeaways: [
            'O CCoV acomete enterócitos maduros apicais, preservando as criptas e permitindo rápida recuperação epitelial.',
            'A ausência de panleucopenia e de sangue digerido ajuda a diferenciar a coronavirose da parvovirose canina.',
            'O suporte nutricional precoce fornece substratos tróficos essenciais para os enterócitos regenerativos.'
          ]
        }
      },
      {
        id: 'sec_virology_ex2',
        type: 'exercise',
        title: 'Exercício Clínico: Patogênese Comparada das Enterites Virais',
        exerciseId: 'ex_virology_02'
      }
    ]
  },
  {
    id: 'lesson_virology_03_rabies_distemper',
    moduleId: 'mod_virology_mycology',
    title: 'Neurovirologia Comparada: Patogênese da Raiva vs. Cinomose Canina (CDV)',
    shortDescription: 'Transporte axonal retrógrado, corpúsculos de Negri e Lentz, desmielinização multifocal e patognomonia do mioclono.',
    estimatedMinutes: 15,
    order: 3,
    concepts: ['concept_virology_rabies_distemper_neurotropism'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_virology_th3',
        type: 'theory',
        title: 'Rotas de Invasão do Sistema Nervoso Central: Neurótropos Estritos vs. Pantrópicos',
        contentMarkdown: `### Invasão Centrípeda Axonal (Raiva) vs. Disseminação Virêmica Pantrópica (Cinomose)

A neurovirologia veterinária possui dois modelos patogenéticos clássicos de neurotropismo:

\`\`\`mermaid
graph TD
    subgraph Raiva ["Vírus da Raiva (Lyssavirus - Família Rhabdoviridae)"]
        R1["Mordedura / Inoculação Muscular Profunda"] --> R2["Ligação a Receptores Nicotínicos de Acetilcolina (nAchR)"]
        R2 --> R3["Transporte Axonal Retrógrado (50-100 mm/dia via Dineínas)"]
        R3 --> R4["Entrada no Corno Dorsal da Medula -> Ascensão ao Tronco Encefálico"]
        R4 --> R5["Multiplicação Neuronal no Sistema Límbico & Hipocampo"]
        R5 --> R6["Corpúsculos de Negri Intracitoplasmáticos Eosinofílicos"]
        R5 --> R7["Disseminação Centrífuga Anterógrada para Glândulas Salivares"]
    end
    subgraph Cinomose ["Vírus da Cinomose Canina (CDV - Gênero Morbillivirus)"]
        C1["Inalação de Aerossóis / Gotículas Respiratórias"] --> C2["Replicação em Macrófagos Alveolares via Receptor SLAM/CD150"]
        C2 --> C3["Viremia Primária com Lise Linfoide Severa (Linfopenia)"]
        C3 --> C4["Invasão Epitelial via Nectina-4 (Coxins, Espelho Nasal, Pulmão)"]
        C4 --> C5["Invasão do SNC via Plexo Coroide / Monócitos Infectados"]
        C5 --> C6["Fase Aguda: Desmielinização Não-Inflamatória (Lise de Oligodendrócitos)"]
        C5 --> C7["Fase Crônica: Encefalite Desmielinizante Imunomediada (Mioclono)"]
        C5 --> C8["Corpúsculos de Lentz Intracitoplasmáticos & Intranucleares"]
    end
\`\`\`

---

### Diagnóstico Anatomopatológico: Negri vs. Lentz

* **Corpúsculos de Negri (Raiva):**
  * Inclusões estritamente **intracitoplasmáticas**, redondas ou ovais, eosinofílicas, com grânulos basofílicos internos característicos.
  * Localização anatômica preferencial: **Neurônios piramidais do Corno de Ammon (Hipocampo)** em carnívoros e **Células de Purkinje do Cerebelo** em herbívoros (bovinos e equinos).
  * Compostas por agregados de ribonucleoproteínas virais e maquinaria de transcrição celular.
* **Corpúsculos de Lentz (Cinomose):**
  * Inclusões pleomórficas eosinofílicas que podem ser **tanto intracitoplasmáticas quanto intranucleares**.
  * Encontradas em neurônios, astrócitos, células epiteliais do trato respiratório e células do urotélio vesical (podendo ser triadas em esfregaço de sedimento urinário corado por Giemsa na fase aguda).

> 📖 Referência Canônica: de Lahunta's Veterinary Neuroanatomy and Clinical Neurology (5ª ed., Elsevier) & Fenner's Veterinary Virology (5ª ed.).

> 💡 Pérola Neurológica / Fisiopatologia do Mioclono: O mioclonus rítmico involuntário e persistente (que não cessa mesmo durante o sono de ondas lentas ou anestesia superficial) é o sinal clínico mais patognomônico da infecção prévia ou ativa pelo CDV. Resulta de danos desmielinizantes focais e hiperexcitabilidade de marcapassos intrínsecos de neurônios motores inferiores (NMIs) nos cornos ventrais da medula espinhal ou núcleos motores de nervos cranianos no tronco encefálico!

> ⚠️ Alerta de Biossegurança & Zoonose Fatal: O vírus da Raiva é uma zoonose com letalidade próxima de 100%. Em animais com alteração de comportamento, paralisia de mandíbula, agressividade súbita ou salivação excessiva, é terminantemente proibido introduzir mãos na cavidade oral ou tentar administrar medicações forçadas. Qualquer suspeita clínica impõe isolamento imediato e notificação compulsória ao serviço oficial de Defesa Sanitária Animal!`
      },
      {
        id: 'sec_virology_lab3',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Thor (Pastor Alemão com Distúrbio Neurotrópico)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Abordagem Neurológica de Encefalomielite com Mioclonias Rítmicas',
          patient: {
            name: 'Thor',
            species: 'Canino',
            breed: 'Pastor Alemão',
            age: '8 meses',
            weightKg: 26.0,
            habitatOrEnvironment: 'Residência urbana com quintal cimentado'
          },
          vitals: {
            heartRateBpm: 108,
            respiratoryRateRpm: 30,
            temperatureCelsius: 39.2,
            mucousMembranes: 'Normocoradas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Animal resgatado sem vacinação. Teve histórico de secreção purulenta nos olhos e tosse há 3 semanas, tratada com colírio caseiro. Há 4 dias começou a apresentar espasmos musculares rítmicos na perna esquerda e mandíbula que continuam durante o sono, além de espessamento áspero nos coxins dos 4 membros ("hardpad disease").',
          exams: [
            {
              category: 'laboratorial',
              title: 'Análise de Líquor Cefalorraquidiano (LCR) e Citologia de Sedimento Urinário',
              findings: 'Pleocitose mononuclear no LCR e identificação de inclusões virais características.',
              abnormalValues: [
                { parameter: 'Pleocitose LCR (Células Mononucleares)', value: '38 /uL', reference: '< 5 /uL', status: 'critical' },
                { parameter: 'Proteína Total no LCR', value: '75 mg/dL', reference: '< 30 mg/dL', status: 'high' },
                { parameter: 'RT-qPCR para Cinomose (CDV) no LCR', value: 'POSITIVO FORTE', reference: 'Negativo', status: 'critical' },
                { parameter: 'Inclusões Eosinofílicas em Urotélio (Sedimento)', value: 'Corpúsculos de Lentz presentes', reference: 'Ausente', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com encefalomielite desmielinizante ativa por Cinomose (CDV) e mioclonias motoras, qual é o manejo terapêutico de suporte indicado?',
          decisionOptions: [
            {
              id: 'opt_dec_vir3_1',
              label: 'Neuroproteção e controle de espasmos com Levetiracetam/Gabapentina + Complexo Vitamínico B + Fisioterapia motora e isolamento sanitário estrito',
              description: 'Modular excitabilidade neuronal anormal, dar suporte de mielinização e prevenir atrofia muscular por desuso.',
              isOptimal: true,
              consequenceText: 'Conduta médica correta e humanitária! O levetiracetam e a gabapentina auxiliam no controle da hiperexcitabilidade das vias motoras periféricas e centrais associadas ao mioclono, enquanto o suporte de enfermagem e reabilitação previnem úlceras de decúbito e contraturas articulares.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Modulação farmacológica de canais neuronais e fisioterapia motora',
                mechanism: 'Atenuação da despolarização repetitiva de motoneurônios e suporte glial',
                effect: 'Redução da intensidade das mioclonias e preservação do tônus musculoesquelético',
                clinicalMeaning: 'Melhora substancial da qualidade de vida e prevenção de sequelas neurológicas irreversíveis'
              }
            },
            {
              id: 'opt_dec_vir3_2',
              label: 'Administrar altas doses de Dexametasona por via IV contínua para eliminar as inclusões virais',
              description: 'Aplicar corticoterapia imunossupressora agressiva na fase ativa da infecção.',
              isOptimal: false,
              consequenceText: 'Erro grave! Corticoides em altas doses durante a fase de replicação e eliminação do vírus da cinomose anulam a resposta de linfócitos T citotóxicos e aceleram a proliferação viral no parênquima cerebral, frequentemente precipitando estado de mal epiléptico.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Imunossupressão esteroidal em fase de viremia/replicação neural ativa',
                mechanism: 'Paralisia da imunidade mediada por células contra o vírus CDV',
                effect: 'Disseminação viral descontrolada nos oligodendrócitos e astrócitos',
                clinicalMeaning: 'Evolução fulminante para convulsões generalizadas e coma'
              }
            },
            {
              id: 'opt_dec_vir3_3',
              label: 'Vacinar o cão com vacina viva atenuada para neutralizar o vírus cerebral',
              description: 'Tentar imunizar o paciente com a vacina padrão durante a doença neurológica.',
              isOptimal: false,
              consequenceText: 'Contraindicado! Vacinas são instrumentos preventivos em indivíduos sadios. Inocular vírus atenuado em um hospedeiro com depleção linfoide e imunossupressão não gera proteção e pode adicionar carga antigênica deletéria.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Inoculação vacinal em paciente infectado sintomático',
                mechanism: 'Incapacidade do sistema linfoide esgotado em produzir resposta vacinal adequada',
                effect: 'Estresse imunitário inútil sem benefício sobre o vírus selvagem',
                clinicalMeaning: 'Ausência de efeito curativo com piora da sobrecarga imune'
              }
            }
          ],
          learningTakeaways: [
            'O mioclono persistente na cinomose decorre de lesão focal em motoneurônios inferiores e não cessa durante o sono.',
            'Corpúsculos de Lentz podem ser detectados em células uroteliais durante a fase virêmica secundária.',
            'O Lyssavirus rábico utiliza transporte axonal retrógrado por dineínas, evitando o sistema imune vascular durante a fase de incubação.'
          ]
        }
      },
      {
        id: 'sec_virology_ex3',
        type: 'exercise',
        title: 'Exercício Clínico: Neurovirologia Comparada & Patogênese do SNC',
        exerciseId: 'ex_virology_03'
      }
    ]
  },
  {
    id: 'lesson_virology_04_dermatophytes',
    moduleId: 'mod_virology_mycology',
    title: 'Micologia Dermatológica: Dermatófitos, Lâmpada de Wood & Tricograma',
    shortDescription: 'Invasão ectothrix folicular, emissão de fluorescência por pteridina, cultivo DTM e microscopia de colônias.',
    estimatedMinutes: 13,
    order: 4,
    concepts: ['concept_virology_dermatophytes_wood_lamp'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_virology_th4',
        type: 'theory',
        title: 'Biologia dos Fungos Queratinofílicos & Sequência Diagnóstica',
        contentMarkdown: `### Dermatófitos: Especialistas na Digestão de Queratina

Os dermatófitos são fungos filamentosos que possuem ceratinases potentes capazes de degradar e assimilar a queratina presente no estrato córneo da pele, pelos e unhas/garras de mamíferos.
* **Microsporum canis:** Fungo zoofílico cosmopolita, tendo o felino doméstico como principal reservatório (muitas vezes assintomático em raças de pelo longo como Persas).
* **Trichophyton mentagrophytes:** Fungo zoofílico com reservatório em roedores silvestres e sinantrópicos; em cães e gatos, induz lesões altamente inflamatórias (querion).
* **Microsporum gypseum:** Fungo geofílico encontrado no solo; acomete animais que cavam a terra.

\`\`\`mermaid
graph TD
    A["Esporo de M. canis (Artroconídio) adere ao Folículo Piloso"] --> B["Germinação de Hifas & Produção de Ceratinases"]
    B --> C["Descida pela Bainha Folicular até a Franja de Adamson"]
    C --> D["Invasão Ectothrix: Manto de Artroconídios ao Redor da Haste"]
    D --> E["Fragilização Mecânica do Pelo -> Fratura Pilosa (Alopecia Circular)"]
    E --> F["Lâmpada de Wood: Fluorescência Verde-Maçã por Pteridina"]
    E --> G["Exame Direto KOH: Artroconídios em Mosaico"]
    E --> H["Cultivo em Ágar DTM: Viragem Precoce de Amarelo para Vermelho"]
\`\`\`

---

### Os Três Pilares do Diagnóstico Micológico Dermatológico

1. **Lâmpada de Wood (UVA 365 nm):**
   * Emissão de fluorescência verde-esmeralda/verde-maçã brilhante ao longo das hastes pilosas infectadas.
   * Causada pelo acúmulo de **pteridina**, metabólito sintetizado por cerca de 50% a 70% das cepas de *Microsporum canis*.
   * *Atenção aos falsos-positivos:* Escamas de sebo, pomadas com petrolato e biofilmes bacterianos (*Pseudomonas*) emitem fluorescência amarelada ou azulada difusa. Apenas o brilho verde na haste pilosa individual é indicativo!
2. **Exame Direto do Pelo / Tricograma (Clarificação com KOH 10-20%):**
   * Os pelos retirados pela raiz são montados em lâmina com solução clarificante de KOH aquecida suavemente.
   * O álcali degrada a ceratina epidérmica sem lisar a parede fúngica rica em glicanos e quitina.
   * Revela bainhas de **artroconídios ectothrix** (pequenas esferas dispostas em mosaico circundando a haste do pelo destruída).
3. **Cultura Fúngica em Ágar DTM (Dermatophyte Test Medium):**
   * Meio seletivo contendo ciclo-heximida (inibe fungos saprófitas), gentamicina/cloranfenicol (inibe bactérias) e o indicador de pH **Vermelho de Fenol**.
   * **Mecanismo da Viragem:** Os dermatófitos preferem utilizar **proteínas e peptonas** como primeira fonte energética, liberando metabólitos alcalinos (amônia). Isso eleva o pH e faz o meio mudar de **amarelo para vermelho simultaneamente ao surgimento da colônia branca**.
   * Fungos contaminantes saprófitas consom carboidratos primeiro (gerando subprodutos ácidos) e só alcalinizam o meio semanas depois, quando a colônia já é escura (verde, preta ou marrom).

> 📖 Referência Canônica: Muller & Kirk's Small Animal Dermatology (Miller, Griffin & Campbell, 7ª ed., Elsevier) & Clinical Veterinary Microbiology (Markey et al., 2ª ed.).

> 💡 Pérola Laboratorial / Macroconídios de M. canis: Na microscopia da colônia fúngica corada com Azul de Lactofenol, os macroconídios de *Microsporum canis* são inconfundíveis: possuem formato fusiforme alongado (em canoa ou folha), paredes celulares grossas e equinuladas (com espículas na superfície), terminando em uma ponta afilada ligeiramente encurvada, contendo invariavelmente **mais de seis septos internos** (6 a 12 lóculos).

> ⚠️ Alerta de Saúde Única: A dermatofitose é uma das zoonoses mais prevalentes em lares urbanos. Crianças e idosos desenvolvem lesões circulares anulares intensamente pruriginosas no tronco e braços ("tinea corporis"). Todos os contatos humanos e animais devem ser triados, e o ambiente deve ser aspirado exaustivamente para remover escamas de pelos contendo artroconídios que sobrevivem viáveis por até 18 meses!`
      },
      {
        id: 'sec_virology_lab4',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Mia (Gata Persa de Gatil com Tinea)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Clínico e Ambiental de Surto de Dermatofitose em Gatil',
          patient: {
            name: 'Mia',
            species: 'Felino',
            breed: 'Persa',
            age: '1 ano',
            weightKg: 3.2,
            habitatOrEnvironment: 'Gatil fechado com 14 gatos de pelo longo'
          },
          vitals: {
            heartRateBpm: 180,
            respiratoryRateRpm: 24,
            temperatureCelsius: 38.3,
            mucousMembranes: 'Normocoradas',
            capillaryRefillTimeSec: 1.0
          },
          anamnesis: 'Gata jovem com áreas focais de alopecia circular de expansão centrífuga, com descamação e pelos quebrados na borda da orelha direita, periocular e focinho. Não apresenta prurido intenso. O tutor desenvolveu lesões circulares eritematosas pruriginosas nos dois antebraços há 1 semana.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Lâmpada de Wood, Tricograma Direto e Cultura em Ágar DTM',
              findings: 'Evidência definitiva de invasão ectothrix por Microsporum canis.',
              abnormalValues: [
                { parameter: 'Lâmpada de Wood (365 nm)', value: 'Fluorescência verde-maçã em hastes pilosas', reference: 'Ausente', status: 'critical' },
                { parameter: 'Tricograma com KOH 20%', value: 'Artroconídios ectothrix abundantes ao redor do córtex piloso', reference: 'Pelos íntegros sem artroconídios', status: 'critical' },
                { parameter: 'Ágar DTM (Dia 5 de Incubação)', value: 'Colônia branca/cotonosa com viragem do meio de amarelo para VERMELHO', reference: 'Sem crescimento / Sem viragem', status: 'critical' },
                { parameter: 'Morfologia em Azul de Lactofenol', value: 'Macroconídios fusiformes de paredes grossas equinuladas (> 6 septos)', reference: 'Não aplicável', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com dermatofitose confirmada por M. canis e transmissão zoonótica aos humanos da casa, qual é a conduta integrada de tratamento?',
          decisionOptions: [
            {
              id: 'opt_dec_vir4_1',
              label: 'Itraconazol sistêmico (5-10 mg/kg/dia ou em pulsos) + Banhos semanais com xampu de Clorexidina 2% e Miconazol 2% + Aspiração ambiental diária e desinfecção com hipoclorito',
              description: 'Combinar terapia antifúngica oral para atingir o bulbo folicular com terapia tópica esterilizante de artroconídios e descontaminação do ambiente.',
              isOptimal: true,
              consequenceText: 'Conduta impecável padrão-ouro! A dermatofitose em animais de pelo longo não responde à monoterapia tópica. O itraconazol atinge concentrações elevadas e persistentes na queratina folicular, o banho medicamentoso inativa os artroconídios da superfície corporal prevenindo disseminação, e a limpeza com hipoclorito destrói os esporos ambientais.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Associação de antifúngico azólico sistêmico com banho tópico queratolítico e desinfecção ambiental',
                mechanism: 'Inibição da síntese de ergosterol na membrana fúngica e eliminação de esporos viáveis na pelagem',
                effect: 'Interrupção do ciclo de artroconídios e repilação completa das áreas alopécicas',
                clinicalMeaning: 'Cura microbiológica do animal e bloqueio definitivo da transmissão zoonótica'
              }
            },
            {
              id: 'opt_dec_vir4_2',
              label: 'Prescrever pomada de Betametasona associada a Neomicina para aliviar a descamação',
              description: 'Usar corticoide tópico para reduzir a inflamação e clarear a pele.',
              isOptimal: false,
              consequenceText: 'Erro desastroso! Corticosteroides tópicos reduzem a imunidade local mediada por células T e criam o clássico quadro de "Tinea incognito", no qual o fungo se multiplica sem controle, invadindo a derme profunda e formando nódulos piogranulomatosos (querion).',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Aplicação tópica de corticoide em infecção fúngica ativa',
                mechanism: 'Supressão da fagocitose neutrofílica e da migração de linfócitos T na derme',
                effect: 'Proliferação fúngica desinibida e invasão folicular profunda com fistulização',
                clinicalMeaning: 'Transformação de lesão anular superficial em querion furunculoso grave'
              }
            },
            {
              id: 'opt_dec_vir4_3',
              label: 'Realizar tosa total de todos os animais sem qualquer medicação e aguardar cura espontânea',
              description: 'Apenas tosar os gatos e não administrar fármacos.',
              isOptimal: false,
              consequenceText: 'Contraindicado! A lâmina de tosa causa microtraumatismos na epiderme que disseminam os artroconídios por todo o corpo do animal e aerossolizam esporos infectantes por toda a casa.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Tosa mecânica agressiva sem controle prévio da carga esporal',
                mechanism: 'Microlesões no estrato córneo e aerossolização de artroconídios no ambiente',
                effect: 'Disseminação generalizada das lesões fúngicas na pele do animal e contágio familiar',
                clinicalMeaning: 'Agravamento do surto no gatil e aumento da transmissão zoonótica'
              }
            }
          ],
          learningTakeaways: [
            'A Lâmpada de Wood emite fluorescência verde por pteridina em 50-70% dos casos de Microsporum canis.',
            'O ágar DTM vira para vermelho precocemente porque os dermatófitos metabolizam proteínas gerando amônia.',
            'O manejo da dermatofitose exige o tripé: antifúngico sistêmico + terapia tópica com miconazol + controle ambiental.'
          ]
        }
      },
      {
        id: 'sec_virology_ex4',
        type: 'exercise',
        title: 'Exercício Clínico: Micologia Cutânea & Identificação de Dermatófitos',
        exerciseId: 'ex_virology_04'
      }
    ]
  },
  {
    id: 'lesson_virology_05_deep_systemic_mycoses',
    moduleId: 'mod_virology_mycology',
    title: 'Micoses Profundas & Zoonoses: Esporotricose Felina, Criptococose & Histoplasmose',
    shortDescription: 'Dimorfismo térmico, esporotricose zoonótica (S. brasiliensis), cápsula de glucuronoxilomanana e citopatologia.',
    estimatedMinutes: 16,
    order: 5,
    concepts: ['concept_virology_deep_systemic_mycoses'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_virology_th5',
        type: 'theory',
        title: 'Fungos Dimórficos e Leveduras Capsuladas de Importância Médica Veterinária',
        contentMarkdown: `### O Conceito de Dimorfismo Térmico

Os fungos causadores de micoses subcutâneas e sistêmicas são, em sua maioria, **termicamente dimórficos**:
* **Fase Saprofítica / Ambiental (25°C):** Apresentam-se como **fungos filamentosos** (micélio com hifas septadas e conídios infectantes no solo, matéria orgânica em decomposição ou vegetais).
* **Fase Parasitária / Tecidual (37°C):** Ao penetrarem no hospedeiro vertebrado por inoculação traumática ou inalação, convertem-se na **fase leveduriforme** adaptada para evasão da imunidade inata.

\`\`\`mermaid
graph TD
    subgraph Esporotricose ["Esporotricose Zoonótica (Sporothrix brasiliensis)"]
        E1["Inoculação Traumática por Mordida / Arranhadura de Gato"] --> E2["Transição para Fase Leveduriforme a 37°C"]
        E2 --> E3["Carga Fúngica Maciça em Felinos (Fase Th1 Incompleta)"]
        E3 --> E4["Úlceras Cutâneas Nodulares Fétidas com Secreção Sanguinolenta"]
        E4 --> E5["Citologia: Leveduras em 'Charuto' (Cigar-Shaped) em Macrófagos"]
        E5 --> E6["Tratamento Longo com Itraconazol + Notificação Zoonótica"]
    end
    subgraph Criptococose ["Criptococose (Cryptococcus neoformans / gattii)"]
        C1["Inalação de Basidiósporos de Excretas de Pombos / Eucaliptos"] --> C2["Colonização Nasal e Seios Paranasais ('Nariz de Palhaço')"]
        C2 --> C3["Fator de Virulência Maior: Cápsula Espessa de Glicuronoxilomanana (GXM)"]
        C3 --> C4["Disseminação Hematógena para o SNC (Meningoencefalite / Cegueira)"]
        C4 --> C5["Diagnóstico: Tinta da China (Nanquim) com Halo Refringente Cápsular"]
    end
\`\`\`

---

### Diagnóstico Diferencial Citológico das Micoses Profundas

| Fungo Patogênico | Morfologia Tecidual Típica | Coloração / Técnica Chave | Fonte de Infecção / Epidemiologia |
| :--- | :--- | :--- | :--- |
| **Sporothrix brasiliensis** | Leveduras pleomórficas em forma de charuto (*cigar-shaped*) ou naveta (3-5 µm), intra e extracelulares | Panótico Rápido, Giemsa, PAS, Grocott (GMS) | Gatos semidomiciliados, arranhaduras e brigas territoriais felinas |
| **Cryptococcus neoformans** | Células leveduriformes esféricas com brotamento único em base estreita e **espessa cápsula gelatinosa não corada** | **Tinta da China (Nanquim)** evidenciando fundo escuro com halo cápsular | Excretas secas de pombos urbanos, ocos de eucaliptos (*C. gattii*) |
| **Histoplasma capsulatum** | Pequenas leveduras ovoides (2-4 µm) agrupadas aos montes **dentro do citoplasma de macrófagos**, com halo claro ao redor do núcleo | Giemsa, Wright, PAS | Solo enriquecido com fezes de morcegos (cavernas) ou aves |
| **Blastomyces dermatitidis** | Grandes leveduras esféricas (8-15 µm) de parede birrefringente espessa e **brotamento em base larga** | Exame a fresco, Grocott (GMS) | Solos úmidos próximos a rios e cursos d'água |

> 📖 Referência Canônica: Greene's Infectious Diseases of the Dog and Cat (Sykes, 5ª ed., Elsevier) & Clinical Veterinary Microbiology (Markey et al., 2ª ed.).

> 💡 Pérola Zoonótica / Epidemia Brasileira de Sporothrix: A espécie *Sporothrix brasiliensis* possui uma virulência marcadamente superior à espécie clássica de jardineiros (*Sporothrix schenckii*). Ela produz melanina em altas concentrações, resiste à fagocitose e gera uma carga parasitária exuberante na pele e leito ungueal de felinos, tornando o gato o hospedeiro amplificador definitivo da cadeia de transmissão urbana para seres humanos e cães.

> ⚠️ Alerta de Biossegurança e Defesa Sanitária: Ao conter um gato suspeito de esporotricose com lesões ulceradas faciais ou secreção respiratória, NUNCA utilize luvas finas de procedimento cirúrgico como única barreira mecânica! É obrigatório o uso de luvas de raspa de couro ou toalha grossa de contenção física, óculos de proteção e máscara N95. O descarte de cadáveres de animais que vão a óbito por esporotricose deve ser feito EXCLUSIVAMENTE por cremação lacrada; enterrar o corpo no solo perpetua a sobrevivência do fungo no meio ambiente!`
      },
      {
        id: 'sec_virology_lab5',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Tom (Gato Macho Inteiro com Lesões Faciais)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Abordagem Diagnóstica e Biossegurança na Esporotricose Zoonótica Felina',
          patient: {
            name: 'Tom',
            species: 'Felino',
            breed: 'SRD (Sem Raça Definida)',
            age: '3 anos',
            weightKg: 4.0,
            habitatOrEnvironment: 'Acesso livre à rua, histórico frequente de brigas territoriais'
          },
          vitals: {
            heartRateBpm: 195,
            respiratoryRateRpm: 34,
            temperatureCelsius: 39.1,
            mucousMembranes: 'Pálidas (Anemia inflamatória crônica)',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Animal semidomiciliado não castrado apresenta há 3 semanas feridas no plano nasal que iniciaram como pápulas endurecidas e evoluíram para crateras ulceradas exsudativas fétidas ("nariz de palhaço"), além de lesões crostosas nos membros torácicos e linfadenomegalia submandibular. O tutor relata que levou uma arranhadura na mão há 10 dias e está desenvolvendo um nódulo avermelhado ulcerado com inchaço no braço.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Citopatologia de Lesão Nasal por Imprint e Teste Rápido FIV/FeLV',
              findings: 'Avaliação citológica revelando reação piogranulomatosa rica em leveduras características.',
              abnormalValues: [
                { parameter: 'Citologia com Panótico Rápido', value: 'Numerosas leveduras em forma de charuto (cigar-shaped) livres e em macrófagos', reference: 'Ausente', status: 'critical' },
                { parameter: 'Sorologia FIV (Vírus da Imunodeficiência)', value: 'POSITIVO', reference: 'Negativo', status: 'critical' },
                { parameter: 'Sorologia FeLV (Vírus da Leucemia)', value: 'Negativo', reference: 'Negativo', status: 'normal' },
                { parameter: 'Linfonodo Submandibular', value: 'Linfadenite reativa piogranulomatosa com carga fúngica', reference: 'Normal', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com diagnóstico citológico conclusivo de Esporotricose Zoonótica (S. brasiliensis) associada a coinfecção por FIV e lesão transmissível no tutor, qual o plano de manejo terapêutico e sanitário imediato?',
          decisionOptions: [
            {
              id: 'opt_dec_vir5_1',
              label: 'Instituir Itraconazol oral (10-15 mg/kg/dia) com refeição gordurosa até 30-60 dias após a cura clínica total + Isolamento domiciliar indoor estrito do gato + Encaminhamento urgente do tutor ao serviço médico do SUS e Notificação Compulsória ao CCZ/Zoonoses',
              description: 'Tratar o paciente com o antifúngico azólico de eleição, interromper o trânsito do gato na rua, proteger a família humana e notificar a autoridade sanitária pública.',
              isOptimal: true,
              consequenceText: 'Conduta médica exemplar e responsável em Saúde Única (One Health)! O Itraconazol absorvido com alimento gorduroso atinge níveis plasmáticos e teciduais fungistáticos ideais. O isolamento sem acesso à rua corta a transmissão entre gatos de rua e humanos, e o encaminhamento do tutor para a rede de saúde garante o tratamento imediato da linfangite nodular ascendente.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Terapia prolongada com Itraconazol combinada a bloqueio de circulação externa e biossegurança',
                mechanism: 'Bloqueio da síntese de ergosterol na membrana fúngica e contenção da eliminação de leveduras viáveis',
                effect: 'Involução progressiva das úlceras faciais, cicatrização tecidual e proteção da saúde pública',
                clinicalMeaning: 'Cura clínica sustentada do felino e erradicação do foco de contaminação zoonótica'
              }
            },
            {
              id: 'opt_dec_vir5_2',
              label: 'Prescrever anti-inflamatório esteroidal (Prednisolona) associado a pomada de cetoconazol e liberar o gato para o quintal',
              description: 'Tentar acelerar a cicatrização da pele com corticoide sistêmico e tratamento tópico leve.',
              isOptimal: false,
              consequenceText: 'Erro gravíssimo! A corticoterapia em paciente com infecção por Sporothrix e coinfecção por FIV colapsa os poucos mecanismos de defesa imune celular (Th1), levando à disseminação sistêmica fulminante com acometimento osteoarticular, respiratório e morte do animal, além de expor a comunidade vizinha ao contágio.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de corticoide em micose profunda com imunodeficiência felina associada',
                mechanism: 'Ablação da resposta de macrófagos ativados e neutrófilos teciduais',
                effect: 'Disseminação hematogênica das leveduras para pulmões, ossos e fígado',
                clinicalMeaning: 'Evolução para choque micótico fulminante e óbito do felino'
              }
            },
            {
              id: 'opt_dec_vir5_3',
              label: 'Indicar eutanásia sumária imediata sem tentativa de tratamento e enterrar o corpo no quintal',
              description: 'Eutanasiar o animal no primeiro atendimento e descartar na terra da residência.',
              isOptimal: false,
              consequenceText: 'Conduta inaceitável técnica e ambientalmente! A esporotricose felina é perfeitamente curável com itraconazol, inclusive em animais FIV positivos. Além disso, enterrar o corpo no quintal contamina o solo com a fase filamentosa saprofítica do fungo, perpetuando o risco zoonótico ambiental por anos.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Descarte inadequado de carcaça contaminada por Sporothrix no solo residencial',
                mechanism: 'Manutenção do fungo em fase saprofítica na matéria orgânica e terra do quintal',
                effect: 'Criação de reservatório ambiental permanente para outros animais e humanos da casa',
                clinicalMeaning: 'Perpetuação endêmica da esporotricose no ambiente domiciliar'
              }
            }
          ],
          learningTakeaways: [
            'O Sporothrix brasiliensis é um fungo termodimórfico com leveduras em charuto (cigar-shaped) observáveis em citologia.',
            'O felino doméstico é a principal fonte zoonótica urbana por concentrar altíssima carga fúngica em lesões e garras.',
            'O tratamento de escolha é o Itraconazol administrado com alimento por no mínimo 30 a 60 dias além da cura clínica.'
          ]
        }
      },
      {
        id: 'sec_virology_ex5',
        type: 'exercise',
        title: 'Exercício Clínico: Micoses Subcutâneas & Esporotricose Zoonótica Felina',
        exerciseId: 'ex_virology_05'
      }
    ]
  }
];

// ==========================================
// 8. MELHORAMENTO GENÉTICO ANIMAL & BIOMETRIA
// ==========================================
export const GENETICS_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_genetics_01',
    conceptId: 'concept_genetics_dep_selection',
    type: 'multiple_choice',
    prompt: 'Em um sumário de touros da raça Nelore, o Touro A apresenta DEP para Peso à Desmama (PD-ED) de +12.0 kg com Acurácia de 0.85, enquanto o Touro B apresenta DEP de +2.0 kg com Acurácia de 0.90. Ao acasalar ambos com fêmeas de mérito genético idêntico e mesmo ambiente, o que se espera dos filhos do Touro A em comparação aos do Touro B?',
    options: [
      {
        id: 'opt_gen_1',
        text: 'Os bezerros filhos do Touro A pesarão em média 10.0 kg a mais na desmama do que os filhos do Touro B',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A Diferença Esperada na Prole (DEP) prediz a superioridade genética que o reprodutor transmite aos seus descendentes. A diferença entre os touros é direta: (+12.0 kg) - (+2.0 kg) = +10.0 kg a mais em média por bezerro na desmama sob manejo equivalente.'
      },
      {
        id: 'opt_gen_2',
        text: 'O Touro A gerará bezerros que pesam exatamente 12 kg na desmama',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A DEP não indica o peso absoluto do animal (que pode ser de 210-240 kg), mas sim o diferencial genético em relação à base do rebanho.'
      },
      {
        id: 'opt_gen_3',
        text: 'O Touro B é superior porque sua acurácia de 0.90 é maior que a de 0.85',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A acurácia mede o grau de confiança/certeza da estimativa (baseada no número de filhos avaliados), mas o valor genético de ganho de peso do Touro A (+12 kg) é expressivamente superior ao do Touro B (+2 kg).'
      },
      {
        id: 'opt_gen_4',
        text: 'Os genes paternos determinam 100% do fenótipo de ganho de peso sem influência da mãe',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O bezerro herda 50% de sua carga genética da mãe e 50% do pai, além do forte impacto do efeito do ambiente e da habilidade materna de produção de leite da vaca.'
      }
    ]
  },
  {
    id: 'ex_genetics_02',
    conceptId: 'concept_genetics_quantitative_variance',
    type: 'multiple_choice',
    prompt: 'Na genética quantitativa aplicada ao melhoramento de rebanhos, a variância fenotípica total é decomposta em componentes genéticos e ambientais (Vp = Vg + Ve + Vgxe, onde Vg = Va + Vd + Vi). Por que a seleção individual/massal baseada no valor genético aditivo (Va) gera progresso genético cumulativo permanente entre gerações, enquanto os ganhos obtidos pela variância de dominância (Vd) e epistasia (Vi) não são transmitidos de forma intacta na reprodução sexuada?',
    options: [
      {
        id: 'opt_gen_2_1',
        text: 'Porque os gametas transmitem apenas alelos isolados aos descendentes através da segregação meiótica, desfazendo as combinações genotípicas de dominância intralocos (Vd) e de interação epistática interlocos (Vi), as quais não passam intactas pelos gametas e são exploradas comercialmente por cruzamento (heterose)',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A segregação meiótica na espermatogênese e oogênese separa os pares de alelos homólogos. O gameta carrega um único alelo por loco (efeito aditivo médio de substituição alélica, Va). Como as interações de dominância (Vd, alelo A com a no mesmo loco) e de epistasia (Vi, loco A interagindo com loco B) dependem de genótipos diploides combinados, elas se desfazem a cada geração reprodutiva. Portanto, apenas o valor genético aditivo (Va) é transmissível e cumulativo através da seleção intrarraça!'
      },
      {
        id: 'opt_gen_2_2',
        text: 'Porque a variância aditiva é controlada exclusivamente por genes mitocondriais de herança materna imutável',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A variância aditiva decorre de genes cromossômicos nucleares que segregam mendelianamente com efeitos somatórios.'
      },
      {
        id: 'opt_gen_2_3',
        text: 'Porque a dominância intralocos gera mutações deletérias letais em todos os gametas haploides masculinos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A dominância é uma interação fisiológica normal entre alelos no estado diploide e não induz mutações gaméticas.'
      },
      {
        id: 'opt_gen_2_4',
        text: 'Porque a epistasia só ocorre em animais clonados e a variância ambiental permanente é transferida pelo DNA espermático',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Epistasia ocorre naturalmente em qualquer organismo e o ambiente permanente (VeP) não altera a sequência de nucleotídeos transmitida pelo espermatozoide.'
      }
    ]
  },
  {
    id: 'ex_genetics_03',
    conceptId: 'concept_genetics_heritability_repeatability',
    type: 'multiple_choice',
    prompt: 'Um rebanho de bovinos de corte apresenta peso médio ao sobreano de 360 kg com desvio-padrão fenotípico de 40 kg. O zootecnista seleciona como reprodutores touros com peso médio de 420 kg (diferencial de seleção S = +60 kg). Sabendo que a herdabilidade no sentido restrito para o peso ao sobreano é h² = 0.35 e o intervalo médio de gerações é L = 3 anos, qual é a resposta à seleção por geração (R) e o ganho genético anual esperado (Delta G)?',
    options: [
      {
        id: 'opt_gen_3_1',
        text: 'Resposta por geração R = 21.0 kg (0.35 x 60 kg) e Ganho genético anual Delta G = 7.0 kg/ano (21.0 / 3 anos)',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Pela clássica Equação do Criador: R = h² x S. Com diferencial de seleção S = 420 - 360 = 60 kg e h² = 0.35, temos R = 0.35 x 60 = 21.0 kg de ganho genético por geração. Para calcular o ganho genético anual, divide-se a resposta pelo intervalo de gerações: Delta G = R / L = 21.0 / 3 = 7.0 kg de ganho genético por ano.'
      },
      {
        id: 'opt_gen_3_2',
        text: 'Resposta por geração R = 60.0 kg e Ganho genético anual Delta G = 20.0 kg/ano',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Esse cálculo desconsidera a herdabilidade (assume h² = 1.0), supondo incorretamente que 100% da superioridade dos pais seria herdável aditivamente.'
      },
      {
        id: 'opt_gen_3_3',
        text: 'Resposta por geração R = 10.5 kg e Ganho genético anual Delta G = 3.5 kg/ano',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Esse erro divide a herdabilidade indevidamente por 2, confundindo a fórmula da resposta à seleção fenotípica (R = h² x S) com o cálculo de DEP individual.'
      },
      {
        id: 'opt_gen_3_4',
        text: 'Resposta por geração R = 147.0 kg e Ganho genético anual Delta G = 49.0 kg/ano',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Multiplicou h² pelo peso absoluto total de 420 kg em vez de aplicar o diferencial de seleção S (diferença entre os selecionados e a média).'
      }
    ]
  },
  {
    id: 'ex_genetics_04',
    conceptId: 'concept_genetics_inbreeding_heterosis',
    type: 'multiple_choice',
    prompt: 'Em um programa de cruzamento industrial no Centro-Oeste, matrizes zebuínas puras Nelore com peso à desmama médio de 190 kg são inseminadas por touros taurinos puros Aberdeen Angus cuja progênie pura na mesma condição atinge média de 210 kg. Os bezerros cruzados F1 (1/2 Angus + 1/2 Nelore) desmamam com peso médio de 230 kg. Qual é o valor da heterose absoluta (H), a porcentagem de heterose (%H) expressa por essa progênie e seu fundamento biológico?',
    options: [
      {
        id: 'opt_gen_4_1',
        text: 'Heterose absoluta H = +30 kg; Porcentagem de heterose %H = 15.0%; fundamentada na restauração máxima da heterozigose em locos previamente homozigotos divergentes, encobrindo alelos deletérios recessivos e promovendo efeitos de dominância e sobredominância',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A média dos genitores puros é (190 + 210) / 2 = 200 kg. A progênie cruzada F1 atingiu 230 kg. Portanto, a heterose absoluta H = 230 - 200 = +30 kg. Em porcentagem: %H = (30 / 200) x 100 = 15.0%. O cruzamento entre duas subespécies distantes (Bos indicus x Bos taurus) maximiza a heterozigose, anulando os alelos deletérios recessivos e gerando vigor híbrido máximo para ganho de peso e rusticidade.'
      },
      {
        id: 'opt_gen_4_2',
        text: 'Heterose absoluta H = +40 kg; Porcentagem de heterose %H = 21.0%; explicada pela fixação de alelos homozigotos letais no cromossomo Y',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A heterose mede a diferença em relação à média dos pais (200 kg), não em relação ao pior genitor isolado, e decorre de heterozigose, não de homozigose.'
      },
      {
        id: 'opt_gen_4_3',
        text: 'Heterose absoluta H = 0 kg; Porcentagem de heterose %H = 0%; pois animais F1 expressam exclusivamente a média matemática estrita de seus genitores',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Se expressassem estritamente a média dos genitores (200 kg), a heterose seria zero. O ganho real de 230 kg evidencia vigor híbrido positivo de +30 kg (15%).'
      },
      {
        id: 'opt_gen_4_4',
        text: 'Heterose absoluta H = -20 kg; Porcentagem de heterose %H = -10.0%; resultante da depressão por consanguinidade do cruzamento',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Cruzamento entre raças divergentes não gera consanguinidade; pelo contrário, anula a consanguinidade (F = 0) e maximiza a heterozigose.'
      }
    ]
  },
  {
    id: 'ex_genetics_05',
    conceptId: 'concept_genetics_genomic_selection_snps',
    type: 'multiple_choice',
    prompt: 'Na pecuária moderna, a seleção genômica ampla (GWS - Genomic-Wide Selection) revolucionou os programas de melhoramento animal substituindo grande parte dos testes de progênie tradicionais de touros jovens. Considerando a Equação do Ganho Genético Anual (Delta G = [r_TI * i * sigma_A] / L), qual é o impacto biométrico primário da predição de Valores Genéticos Genômicos (GEBVs) a partir de chips de SNPs (50k a 770k) em animais jovens recém-nascidos?',
    options: [
      {
        id: 'opt_gen_5_1',
        text: 'Redução drástica do intervalo de gerações (L) de 5 a 6 anos para 1 a 2 anos, alcançando acurácia moderada a alta (r_TI de 0.65 a 0.75) logo após o nascimento sem precisar aguardar anos pelo nascimento e avaliação de filhas em lactação ou abate',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! No teste de progênie tradicional (especialmente em gado leiteiro), um touro precisava de 5 a 6 anos para ter filhas em lactação e obter acurácia confiável. Na seleção genômica, a genotipagem por chips de SNPs ao nascimento prediz o GEBV com acurácia de 0.65-0.75 via desequilíbrio de ligação com QTLs causais. Como o intervalo de gerações (L) cai de 5 para 1.5-2 anos (no denominador da fórmula do ganho anual), a taxa de progresso genético anual (Delta G) dobra ou triplica!'
      },
      {
        id: 'opt_gen_5_2',
        text: 'Aumento do intervalo de gerações (L) para mais de 10 anos ao exigir biópsias seriadas de órgãos vitais durante a vida adulta',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A genômica encurta radicalmente o intervalo de gerações, bastando uma amostra de pelo da cauda ou cartilagem auricular ao nascimento.'
      },
      {
        id: 'opt_gen_5_3',
        text: 'Eliminação completa da necessidade de mensurar fenótipos em campo e extinção das populações de referência de rebanhos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A genômica depende criticamente de grandes populações de referência com fenótipos continuamente mensurados em campo para calibrar as equações de predição dos efeitos de cada SNP.'
      },
      {
        id: 'opt_gen_5_4',
        text: 'A seleção genômica funciona apenas para características com herdabilidade h² = 1.0, sendo ineficaz em características poligênicas complexas',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O grande trunfo da seleção genômica reside justamente em características poligênicas complexas com dezenas de milhares de locos de pequeno efeito e de difícil mensuração fenotípica precoce (eficiência alimentar, longevidade, fertilidade).'
      }
    ]
  }
];

export const GENETICS_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_genetics_01_dep_selection',
    moduleId: 'mod_genetics',
    title: 'Melhoramento Genético: Interpretação de DEPs & Seleção Zootécnica',
    shortDescription: 'Genética quantitativa na prática: DEPs, acurácia, herdabilidade (h²) e prevenção de consanguinidade em rebanhos comerciais.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_genetics_dep_selection'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_genetics_th1',
        type: 'theory',
        title: 'O Fenótipo: Genética, Ambiente & Interação',
        contentMarkdown: `### A Equação Fundamental do Melhoramento

$$P = G + E + (G \\times E)$$

Onde o **Fenótipo ($P$)** observado no animal (ex: 220 kg à desmama) é o resultado do seu **Genótipo ($G$)**, somado ao **Ambiente ($E$ - pastagem, sanidade, manejo)** e à interação entre ambos.

\`\`\`mermaid
graph TD
    A["Fenótipo Individual (P)"] --> B["Genótipo (G)"]
    A --> C["Ambiente (E)"]
    A --> D["Interação Genótipo x Ambiente (G x E)"]
    B --> E["Valor Genético Aditivo (Va) -> Transmissível aos Filhos (DEP)"]
    B --> F["Dominância (Vd) & Epistasia (Vi) -> Combinações não-aditivas"]
    C --> G["Ambiente Permanente (Ep) & Temporário (Et)"]
\`\`\`

---

### O Que é a Diferença Esperada na Prole (DEP)?

A DEP é a ferramenta mais precisa para seleção de reprodutores na pecuária moderna:
* Estima a metade do valor genético aditivo do indivíduo (já que o pai transmite apenas metade de seus alelos através do espermatozoide).
* **Acurácia (AC):** Varia de 0 a 1. Valores acima de 0.80 indicam que o touro possui muitos filhos avaliados em múltiplos rebanhos, com baixíssimo risco de flutuação no valor da DEP.
* **Herdabilidade ($h^2$):** Proporção da variância fenotípica atribuível aos genes aditivos:
  * *Baixa ($h^2 < 0.20$):* Características reprodutivas (taxa de prenhez, intervalo entre partos) — respondem melhor a melhorias de manejo e nutrição do que à seleção direta.
  * *Alta ($h^2 > 0.40$):* Características de carcaça (Área de Olho de Lombo - AOL, acabamento de gordura) — respondem com saltos rápidos à seleção genética.

> 📖 Referência Canônica: Understanding Animal Breeding (Bourdon, 2ª ed., Pearson) & Melhoramento Genético Aplicado em Bovinos de Corte (Pereira, FEALQ/USP).

> 💡 Pérola Zootécnica / Seleção de Touros: Acurácia vs. Risco: Uma DEP de Peso ao Desmame de +14 kg com Acurácia 0.35 (touro jovem genômico sem progênie) possui intervalo de confiança amplo (sua DEP real pode oscilar entre +8 kg e +20 kg). Já um touro provado com Acurácia 0.95 garante que sua progênie expressará com rigor estatístico a média esperada em qualquer fazenda comercial sob manejo adequado.

> ⚠️ Alerta Crítico: Seleção unilateral agressiva para apenas uma característica (ex: Peso Adulto extremo sem balancear com DEP de Facilidade de Parto ou Peso ao Nascer) eleva dramaticamente as taxas de distocia fetal, cesarianas de emergência e mortalidade neonatal em novilhas de primeira cria!`
      },
      {
        id: 'sec_genetics_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Fazenda Santa Maria',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Seleção Genética de Touro Nelore para Cruzamento Industrial',
          patient: {
            name: 'Rebanho Santa Maria',
            species: 'Bovino de Corte',
            breed: 'Nelore Comercial',
            age: 'Matrizes de 1º e 2º cria',
            weightKg: 450,
            habitatOrEnvironment: 'Pastagem de Brachiaria brizantha rotacionada'
          },
          vitals: {
            heartRateBpm: 60,
            respiratoryRateRpm: 20,
            temperatureCelsius: 38.5,
            mucousMembranes: 'Normocoradas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Produtor rural com 500 novilhas Nelore deseja selecionar um touro para IATF. Seu foco comercial prioritário é desmamar bezerros mais pesados para venda em leilão, mas ele está extremamente receoso com distocias (partos difíceis) em primíparas.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Comparativo de Sumário de Touros Líderes (ANCP/Embrapa)',
              findings: 'Análise de DEPs de dois touros líderes disponíveis na central de sêmen.',
              abnormalValues: [
                { parameter: 'Touro A: DEP Peso Desmama (PD)', value: '+14.5 kg (AC 0.88)', reference: 'Média da Raça: +4.0 kg', status: 'high' },
                { parameter: 'Touro A: DEP Peso ao Nascer (PN)', value: '+0.4 kg (AC 0.85)', reference: 'Média da Raça: +0.6 kg', status: 'low' },
                { parameter: 'Touro B: DEP Peso Desmama (PD)', value: '+16.0 kg (AC 0.82)', reference: 'Média da Raça: +4.0 kg', status: 'high' },
                { parameter: 'Touro B: DEP Peso ao Nascer (PN)', value: '+3.8 kg (AC 0.84)', reference: 'Média da Raça: +0.6 kg', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Qual touro deve ser recomendado para as novilhas de primeira cria do produtor?',
          decisionOptions: [
            {
              id: 'opt_dec_gen_1',
              label: 'Touro A (Alto ganho na desmama + Baixa DEP de Peso ao Nascer para parto fácil)',
              description: 'Garante bezerros vigorosos e pesados à desmama sem risco de partos distócicos nas novilhas jovens.',
              isOptimal: true,
              consequenceText: 'Decisão zootécnica de alta precisão! Para novilhas de primeira cria, a DEP de Peso ao Nascer (PN) moderada ou negativa é mandatória para evitar distocia e cesarianas de emergência. O Touro A une segurança no parto com excelente ganho genético na desmama.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Seleção de reprodutor com baixa DEP para Peso ao Nascer e alta DEP para Peso à Desmama',
                mechanism: 'Bezerros nascem com porte anatômico compatível com a bacia óssea da novilha',
                effect: 'Partos eutócicos espontâneos seguidos de alta curva de crescimento pós-natal',
                clinicalMeaning: 'Mortalidade perinatal zero de bezerros e máxima lucratividade no peso da desmama'
              }
            },
            {
              id: 'opt_dec_gen_2',
              label: 'Touro B apenas por ter a maior DEP de desmama (+16 kg)',
              description: 'Priorizar o peso máximo absoluto sem levar em conta a DEP de peso ao nascer.',
              isOptimal: false,
              consequenceText: 'Erro perigoso! A DEP de Peso ao Nascer do Touro B (+3.8 kg) é excessivamente alta para novilhas de primeira cria. Bezerros muito grandes causarão distocia fetal, atonia uterina e morte de matrizes e crias.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de touro com DEP de PN extremamente positiva em novilhas primíparas',
                mechanism: 'Incompatibilidade feto-pélvica mecânica durante o estágio 2 do parto',
                effect: 'Distocia obstrutiva, anóxia fetal e lacerações do canal do parto',
                clinicalMeaning: 'Alta taxa de bezerros natimortos e necessidade de intervenções cesarianas'
              }
            },
            {
              id: 'opt_dec_gen_3',
              label: 'Não usar IATF e colocar qualquer touro jovem sem avaliação genética',
              description: 'Utilizar monta natural com touro não avaliado por sumário.',
              isOptimal: false,
              consequenceText: 'Inadequado. Touros sem avaliação de DEP apresentam acurácia zero, gerando desuniformidade no lote de bezerros e risco desconhecido de partos difíceis.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Falta de seleção genética e acurácia nula',
                mechanism: 'Variabilidade fenotípica descontrolada na prole',
                effect: 'Perda do ganho genético acumulado do rebanho',
                clinicalMeaning: 'Bezerros desuniformes e perda de valor agregado de mercado'
              }
            }
          ],
          learningTakeaways: [
            'A DEP é a estimativa mais confiável da transmissão genética para a progênie.',
            'Em novilhas primíparas, a DEP de Peso ao Nascer (PN) é o parâmetro de segurança mais crítico para prevenir distocias.',
            'Acurácia alta (> 0.80) confere estabilidade aos valores genéticos estimados.'
          ]
        }
      },
      {
        id: 'sec_genetics_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Interpretação de DEPs & Seleção Zootécnica',
        exerciseId: 'ex_genetics_01'
      }
    ]
  },
  {
    id: 'lesson_genetics_02_quantitative_variance',
    moduleId: 'mod_genetics',
    title: 'Genética Quantitativa: Decomposição da Variância Fenotípica (Vp = Vg + Ve)',
    shortDescription: 'Variância aditiva (Va), dominância (Vd), epistasia (Vi) e a interação genótipo x ambiente (G x E).',
    estimatedMinutes: 14,
    order: 2,
    concepts: ['concept_genetics_quantitative_variance'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_genetics_th2',
        type: 'theory',
        title: 'A Arquitetura Poligênica e os Componentes da Variabilidade Fenotípica',
        contentMarkdown: `### O Modelo Infinitesimal de Herança Quantitativa

A maioria das características zootécnicas de importância econômica (produção de leite, ganho em peso, conformação de carcaça) possui distribuição contínua governed por centenas a milhares de locos gênicos (poligenes) com pequeno efeito individual, modulados pelo meio ambiente.

$$\\mathbf{V_P = V_G + V_E + V_{G \\times E}}$$

\`\`\`mermaid
graph TD
    VP["Variância Fenotípica Total (Vp)"] --> VG["Variância Genética Total (Vg)"]
    VP --> VE["Variância Ambiental (Ve)"]
    VP --> VGXE["Interação Genótipo x Ambiente (V gxe)"]
    
    VG --> VA["Variância Aditiva (Va) -> Herdável & Cumulativa"]
    VG --> VD["Variância de Dominância (Vd) -> Não-aditiva (Desfeita na Meiose)"]
    VG --> VI["Variância Epistática (Vi) -> Interlocos"]
    
    VE --> VEP["Ambiente Permanente (Vep) -> Lesão Mamária Crônica"]
    VE --> VET["Ambiente Temporário (Vet) -> Seca Estacional / Clima do Dia"]
\`\`\`

---

### Por que Apenas a Variância Aditiva ($V_A$) Importa para a Seleção Intrarraça?

1. **Variância Genética Aditiva ($V_A$):**
   * Representa o efeito independente de substituição alélica média.
   * É a **única fração da variabilidade genética transmitida fielmente através dos gametas haploides** (espermatozoide e oócito) aos filhos.
   * Constitui a base do **Valor Genético Aditivo ($BV$)** e das DEPs.
2. **Variâncias Não-Aditivas ($V_D$ e $V_I$):**
   * **Dominância ($V_D$):** Interação entre alelos no mesmo loco gênico (intralocos).
   * **Epistasia ($V_I$):** Interação entre alelos em locos cromossômicos diferentes (interlocos).
   * Ambas dependem de combinações genotípicas diploides específicas que se desintegram na recombinação meiótica. São exploradas não pela seleção massal intrarraça, mas sim pelo **Cruzamento Industrial (Heterose)**!
3. **Interação Genótipo $\times$ Ambiente ($V_{G \times E}$):**
   * Ocorre quando a diferença de desempenho entre genótipos varia dependendo do ambiente em que são criados.
   * *Exemplo clássico:* Touros Holandeses selecionados para ultra-produção em galpões climatizados dos EUA cujas filhas colapsam sob o calor tropical úmido e pasto fibroso no Brasil.

> 📖 Referência Canônica: Introduction to Quantitative Genetics (Falconer & Mackay, 4ª ed., Longman) & Understanding Animal Breeding (Bourdon, 2ª ed., Pearson).

> 💡 Pérola Zootécnica / Efeito G x E: A interação Genótipo x Ambiente manifesta-se como mudança de ordenamento de touros (re-ranking). O touro número 1 em sumários de confinamento nos EUA pode cair para as últimas posições em rebanhos a pasto no Brasil Central se suas progênies não possuírem genes de rusticidade e adaptação ao calor (termotolerância do gene Slick Hair).

> ⚠️ Alerta Crítico: Desconsiderar a variância de ambiente permanente ($V_{Ep}$) em vacas leiteiras: Se uma novilha perde um quarto mamário funcional por mastite neonatal, todas as suas lactações futuras sofrerão uma redução artificial e permanente no volume de leite. Essa perda não é genética, mas sim ambiental permanente ($V_{Ep}$), e deve ser devidamente corrigida nos modelos lineares mistos (BLUP) para não subestimar o verdadeiro mérito genético da matriz!`
      },
      {
        id: 'sec_genetics_lab2',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Fazenda Bela Vista (Gado Leiteiro)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Bioclimático e Genético da Interação G x E em Rebanho Leiteiro',
          patient: {
            name: 'Rebanho Bela Vista',
            species: 'Bovino Leiteiro',
            breed: 'Holandês Puro de Origem (PO)',
            age: 'Matrizes em 1ª e 2ª lactação',
            weightKg: 580,
            habitatOrEnvironment: 'Pastagem de Brachiaria decumbens a pleno sol, região Centro-Oeste'
          },
          vitals: {
            heartRateBpm: 88,
            respiratoryRateRpm: 72,
            temperatureCelsius: 39.6,
            mucousMembranes: 'Congestas (Estresse térmico severo - ITU > 79)',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'A fazenda importou sêmen de touros Holandeses líderes de sumário internacional para produção de leite (> +1.200 kg de leite na lactação). No entanto, as filhas geradas na fazenda apresentaram queda de 45% em relação à produção estimada, anestro prolongado pós-parto (> 180 dias de período de serviço) e alta mortalidade por anaplasmose transmitida por carrapatos.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Auditoria Zootécnica de Variância Fenotípica e Parâmetros Fisiológicos',
              findings: 'Severo comprometimento produtivo decorrente da inadequação bioclimática da raça europeia pura a pasto.',
              abnormalValues: [
                { parameter: 'Índice de Temperatura e Umidade (ITU)', value: '81 (Estresse Grave)', reference: '< 68 (Zona de Conforto Térmico)', status: 'critical' },
                { parameter: 'Produção Média Real por Lactação', value: '3.800 kg', reference: 'Expectativa Genética: 8.500 kg', status: 'critical' },
                { parameter: 'Taxa de Concepção na 1ª IATF', value: '18%', reference: 'Mínimo Aceitável: 35-40%', status: 'low' },
                { parameter: 'Infestação por Rhipicephalus microplus', value: 'Alta carga de carrapatos', reference: 'Ausente / Baixa', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com a severa quebra de desempenho explicada pela forte interação negativa G x E no gado puro a pasto, qual a estratégia zootécnica de médio e longo prazo mais rentável?',
          decisionOptions: [
            {
              id: 'opt_dec_gen2_1',
              label: 'Migrar a estratégia reprodutiva para a formação de linhagens sintéticas adaptadas (ex: F1 Girolando 1/2 Holandês + 1/2 Gir Leiteiro) para aliar potencial leiteiro com termotolerância e resistência a ectoparasitas',
              description: 'Explorar a rusticidade zebuína com a produtividade europeia via heterose adaptativa.',
              isOptimal: true,
              consequenceText: 'Decisão zootécnica brilhante! O animal cruzado Girolando expressa heterose máxima, herdando a termotolerância, sudorese eficiente e rusticidade contra carrapatos do Gir Leiteiro, somadas à capacidade de síntese de leite do Holandês, viabilizando a pecuária leiteira tropical a pasto.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Cruzamento com Zebuíno leiteiro gerando progênie Girolando adaptada',
                mechanism: 'Redução do estresse térmico endócrino e resistência cutânea imunológica a carrapatos',
                effect: 'Normalização do consumo de matéria seca e estabilização da lactação a pasto',
                clinicalMeaning: 'Aumento da taxa de prenhez, queda drástica dos custos sanitários e sustentabilidade zootécnica'
              }
            },
            {
              id: 'opt_dec_gen2_2',
              label: 'Continuar inseminando com touros Holandeses puros de maior DEP absoluta e instalar ventiladores no pasto aberto',
              description: 'Insistir na genética pura sem modificar a estrutura do sistema de pastejo.',
              isOptimal: false,
              consequenceText: 'Inviável e anti-econômico! Ventiladores a céu aberto são totalmente ineficazes para mitigar estresse calórico sob radiação solar direta. A insistência na raça europeia pura desadaptada perpetuará o colapso reprodutivo e o prejuízo financeiro.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Manutenção de genótipo não-adaptado sob radiação solar tropical intensa',
                mechanism: 'Hipertermia sustentada com desvio de fluxo sanguíneo para a pele e hipoperfusão uterina',
                effect: 'Falha de implantação embrionária e degeneração precoce do folículo ovariano',
                clinicalMeaning: 'Infertilidade endêmica no rebanho e descarte involuntário em massa de vacas'
              }
            },
            {
              id: 'opt_dec_gen2_3',
              label: 'Substituir toda a alimentação de pasto por ração concentrada pura para suprimir a produção de calor corporal',
              description: 'Oferecer apenas grãos concentrados sem fibra.',
              isOptimal: false,
              consequenceText: 'Erro zootécnico e clínico letal! A ausência de fibra efetiva colapsa a ruminação e a produção de saliva com bicarbonato, induzindo acidose ruminal aguda severa com laminite metabólica e morte.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Eliminação da fibra longa e sobrecarga de amido fermentável',
                mechanism: 'Produção massiva de ácido D-lático no rúmen com queda do pH para < 5.0',
                effect: 'Necrose da mucosa ruminal, rumenite química e translocação de endotoxinas',
                clinicalMeaning: 'Choque endotóxico com laminite aguda em vacas em lactação'
              }
            }
          ],
          learningTakeaways: [
            'O fenótipo é o produto da genética somada ao ambiente e à interação entre ambos (G x E).',
            'Apenas a variância genética aditiva (Va) é transmitida aos filhos pela meiose.',
            'Ambientes tropicais exigem genótipos rústicos com termotolerância e resistência a ectoparasitas.'
          ]
        }
      },
      {
        id: 'sec_genetics_ex2',
        type: 'exercise',
        title: 'Exercício Clínico: Decomposição da Variância & Interação G x E',
        exerciseId: 'ex_genetics_02'
      }
    ]
  },
  {
    id: 'lesson_genetics_03_heritability_repeatability',
    moduleId: 'mod_genetics',
    title: 'Herdabilidade (h²), Repetibilidade & Equação Fundamental do Ganho Genético',
    shortDescription: 'Herdabilidade restrita (Va/Vp), repetibilidade de mensurações e a Equação do Criador (Delta G = [h² x S] / L).',
    estimatedMinutes: 15,
    order: 3,
    concepts: ['concept_genetics_heritability_repeatability'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_genetics_th3',
        type: 'theory',
        title: 'Herdabilidade no Sentido Restrito ($h^2$) e a Velocidade do Progresso Genético',
        contentMarkdown: `### Definição Matemática e Biológica da Herdabilidade

A **Herdabilidade no Sentido Restrito ($h^2$)** expressa a proporção da variância fenotípica total de uma população que é diretamente atribuível aos genes aditivos:

$$h^2 = \\frac{V_A}{V_P}$$

\`\`\`mermaid
graph TD
    A["Equação do Ganho Genético Anual: Delta G = (r_TI * i * sigma_A) / L"] --> B["Intensidade de Seleção (i)"]
    A --> C["Acurácia da Seleção (r_TI)"]
    A --> D["Desvio Genético Aditivo (sigma_A)"]
    A --> E["Intervalo de Gerações (L) -> No Denominador!"]
    
    F["Grau de Herdabilidade (h²)"] --> G["Baixa (h² < 0.15): Reprodução & Longevidade"]
    F --> H["Moderada (0.20 <= h² <= 0.35): Peso ao Desmame & Crescimento"]
    F --> I["Alta (h² > 0.40): Carcaça (AOL), Gordura & Espessura de Toucinho"]
\`\`\`

---

### A Escala de Herdabilidade das Características Zootécnicas

| Categoria | Características Exemplares | Faixa de $h^2$ | Resposta à Seleção Direta | Estratégia de Melhoramento Prioritária |
| :--- | :--- | :--- | :--- | :--- |
| **Reprodutivas / Sobrevivência** | Intervalo entre partos, taxa de concepção, viabilidade neonatal | **Baixa** ($h^2 < 0.15$) | Muito lenta por seleção massal | **Manejo, Nutrição, Sanidade & Heterose (Cruzamento)** |
| **Crescimento / Produção** | Peso ao desmame, peso ao sobreano, produção de leite | **Moderada** ($0.20 - 0.35$) | Moderada e contínua | **Seleção massal combinada com DEPs provadas** |
| **Carcaça / Qualidade** | Área de Olho de Lombo (AOL), acabamento de gordura, rendimento de carcaça | **Alta** ($h^2 > 0.40$) | Muito rápida | **Seleção fenotípica direta e ultrassom de carcaça** |

---

### Repetibilidade ($r$): O Limite Superior da Herdabilidade

A **Repetibilidade ($r$)** mensura a correlação entre medidas sucessivas da mesma característica no mesmo animal ao longo da vida (ex: produção de leite na 1ª, 2ª e 3ª lactações; peso ao desmame dos sucessivos filhos de uma mesma matriz):

$$r = \\frac{V_A + V_D + V_I + V_{Ep}}{V_P} \\ge h^2$$

* Como a repetibilidade inclui todas as fontes genéticas ($V_G$) mais o ambiente permanente ($V_{Ep}$), **a repetibilidade é sempre maior ou igual à herdabilidade** ($r \\ge h^2$).
* *Aplicação zootécnica direta:* Permite ao produtor descartar precocemente fêmeas que apresentaram péssimo desempenho na primeira lactação ou primeira cria com alta segurança estatística de que não melhorarão nas próximas safras!

---

### A Equação Fundamental do Ganho Genético Anual (Equação do Criador)

$$\\Delta G = \\frac{h^2 \\times S}{L} = \\frac{r_{TI} \\cdot i \\cdot \\sigma_A}{L}$$

* $S$ = Diferencial de Seleção (Média dos reprodutores selecionados - Média geral do rebanho).
* $L$ = **Intervalo de Gerações** (idade média dos pais quando sua progênie de reposição nasce).
* *Pérola Biocientífica:* Como $L$ está no **denominador**, qualquer tecnologia que encurte a idade de reprodução dos pais (IATF precoce aos 14 meses em novilhas e uso de sêmen de touros jovens genômicos) impulsiona diretamente o ganho genético anual!

> 📖 Referência Canônica: Genetics and Analysis of Quantitative Traits (Lynch & Walsh, Sinauer) & Understanding Animal Breeding (Bourdon, 2ª ed.).

> 💡 Pérola Zootécnica / Seleção para Fertilidade: Por que a herdabilidade de prenhez é baixa ($h^2 \\approx 0.10$)? A fertilidade foi submetida a milhares de gerações de seleção natural implacável (animais inférteis não deixavam descendentes). Isso exauriu a variância genética aditiva ($V_A$) na população! As diferenças fenotípicas observadas em fazendas hoje decorrem primordialmente do ambiente (manejo, escore corporal e sanidade).`
      },
      {
        id: 'sec_genetics_lab3',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Confinamento Estrela do Sul',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Auditoria e Aceleração do Ganho Genético Anual em Garrotes de Confinamento',
          patient: {
            name: 'Rebanho Estrela do Sul',
            species: 'Bovino de Corte',
            breed: 'Nelore Comercial',
            age: 'Garrotes de recria (14 a 18 meses)',
            weightKg: 380,
            habitatOrEnvironment: 'Confinamento intensivo com dieta de alto grão'
          },
          vitals: {
            heartRateBpm: 68,
            respiratoryRateRpm: 24,
            temperatureCelsius: 38.6,
            mucousMembranes: 'Normocoradas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'A diretoria da fazenda deseja elevar o Ganho Médio Diário (GMD) dos animais terminados. O rebanho base atual apresenta GMD médio de 1.100 g/dia (desvio-padrão de 200 g/dia). O zootecnista selecionou como reprodutores apenas os machos superiores com GMD de 1.500 g/dia. A herdabilidade do GMD no confinamento é h² = 0.35 e o intervalo de gerações histórico é de 4 anos.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Cálculo Biométrico de Diferencial de Seleção e Resposta Genética',
              findings: 'Determinação precisa do ganho esperado por geração e ganho anual.',
              abnormalValues: [
                { parameter: 'Diferencial de Seleção (S)', value: '+400 g/dia (1.500 - 1.100 g/dia)', reference: 'Diferencial Mínimo Recomendado: +200 g/dia', status: 'high' },
                { parameter: 'Herdabilidade do GMD (h²)', value: '0.35 (Moderada)', reference: '0.25 - 0.40', status: 'normal' },
                { parameter: 'Resposta por Geração (R = h² x S)', value: '140 g/dia (0.35 x 400 g/dia)', reference: 'Não aplicável', status: 'high' },
                { parameter: 'Ganho Genético Anual Atual (Delta G)', value: '35 g/dia por ano (140 / 4 anos)', reference: 'Meta: > 60 g/dia/ano', status: 'low' }
              ]
            }
          ],
          challengePrompt: 'Para dobrar a taxa de ganho genético anual (Delta G) sem perder a qualidade dos reprodutores, qual modificação zootécnica no sistema deve ser implementada?',
          decisionOptions: [
            {
              id: 'opt_dec_gen3_1',
              label: 'Reduzir o intervalo de gerações (L) de 4 para 2 anos utilizando novilhas precoces precocemente inseminadas aos 14 meses e sêmen de touros jovens provados genomicamente',
              description: 'Atuar no denominador da equação do criador para acelerar o progresso genético por unidade de tempo.',
              isOptimal: true,
              consequenceText: 'Excelente decisão zootécnica! Como Delta G = R / L, cortar o intervalo de gerações pela metade (de 4 para 2 anos) dobra automaticamente a resposta anual de 35 g/dia/ano para 70 g/dia/ano, antecipando o progresso genético do rebanho em anos.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Encurtamento do intervalo de gerações através de reprodutores precoces',
                mechanism: 'Redução do tempo de permanência de animais mais velhos com genética desatualizada',
                effect: 'Renovação rápida do pool gênico com animais de maior mérito aditivo',
                clinicalMeaning: 'Salto imediato no ganho médio diário dos lotes terminados em confinamento'
              }
            },
            {
              id: 'opt_dec_gen3_2',
              label: 'Manter touros velhos até os 10 anos de idade para garantir que transmitam mais experiência de pastejo',
              description: 'Prolongar a vida reprodutiva dos mesmos touros aumentando o intervalo de gerações.',
              isOptimal: false,
              consequenceText: 'Erro zootécnico elementar! Manter touros até os 10 anos eleva o intervalo de gerações (L = 6-7 anos), afundando o ganho genético anual. Além disso, "experiência de pastejo" é comportamento adquirido, não transmissão genética.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Aumento do intervalo de gerações com reprodutores envelhecidos',
                mechanism: 'Diluição temporal do ganho genético com estagnação do valor aditivo médio',
                effect: 'Queda drástica do ganho genético anual e envelhecimento do rebanho',
                clinicalMeaning: 'Perda de competitividade comercial e prejuízo no confinamento'
              }
            },
            {
              id: 'opt_dec_gen3_3',
              label: 'Abandonar a seleção para GMD e selecionar apenas para taxa de prenhez por seleção fenotípica direta',
              description: 'Tentar selecionar características de fertilidade com baixa herdabilidade.',
              isOptimal: false,
              consequenceText: 'Conduta inadequada! Características de fertilidade têm herdabilidade muito baixa (h² < 0.10). A resposta à seleção direta será mínima (< 1% por década), enquanto o ganho em peso de carcaça (h² = 0.35) será completamente negligenciado.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Seleção direta massal focada apenas em característica de baixa herdabilidade',
                mechanism: 'Fração insignificante de variância genética aditiva para resposta fenotípica rápida',
                effect: 'Progresso genético estagnado sem ganho na terminação de carne',
                clinicalMeaning: 'Ausência de retorno financeiro sobre o investimento em seleção'
              }
            }
          ],
          learningTakeaways: [
            'A herdabilidade no sentido restrito (h²) quantifica a proporção da variância fenotípica governada por genes aditivos.',
            'A resposta por geração é R = h² x S, e o ganho genético anual é Delta G = R / L.',
            'Reduzir o intervalo de gerações (L) é uma das formas mais eficazes de acelerar o progresso genético anual.'
          ]
        }
      },
      {
        id: 'sec_genetics_ex3',
        type: 'exercise',
        title: 'Exercício Clínico: Herdabilidade & Equação do Criador',
        exerciseId: 'ex_genetics_03'
      }
    ]
  },
  {
    id: 'lesson_genetics_04_inbreeding_heterosis',
    moduleId: 'mod_genetics',
    title: 'Consanguinidade (Endogamia), Coeficiente F de Wright & Heterose em Cruzamentos',
    shortDescription: 'Cálculo de F de Wright, depressão consanguínea, heterose máxima no F1 Nelore x Angus e cruzamento terminal.',
    estimatedMinutes: 15,
    order: 4,
    concepts: ['concept_genetics_inbreeding_heterosis'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_genetics_th4',
        type: 'theory',
        title: 'Endogamia vs. Cruzamento: Os Dois Extremos da Homozigose e Heterozigose',
        contentMarkdown: `### O Coeficiente de Endogamia ($F$ de Wright)

A **Endogamia (Consanguinidade)** é o acasalamento entre indivíduos mais aparentados que a média da população. O **Coeficiente de Endogamia ($F$)** mensura a probabilidade de que dois alelos em qualquer loco gênico sejam **Idênticos por Descendência (IBD)**:

$$F_X = \\sum \\left[ \\left(\\frac{1}{2}\\right)^{n_1 + n_2 + 1} \\times (1 + F_A) \\right]$$

* **Pai $\times$ Filha ou Irmão $\times$ Irmã Plena:** $F = 0.25$ (25% de homozigose adicional).
* **Meio-Irmãos:** $F = 0.125$ (12.5%).
* **Primos-Irmãos:** $F = 0.0625$ (6.25%).

\`\`\`mermaid
graph TD
    subgraph Endogamia ["Endogamia / Consanguinidade"]
        E1["Acasalamento entre Parentes Próximos"] --> E2["Aumento da Homozigose Alélica Geral"]
        E2 --> E3["Fixação & Expressão de Genes Recessivos Deletérios"]
        E3 --> E4["Depressão Consanguínea: Queda de Fertilidade, Imunidade & Vigor"]
        E4 --> E5["Anomalias Congênitas (Atresia de Cólon, Nanismo, Natimortos)"]
    end
    subgraph Heterose ["Heterose / Cruzamento Industrial F1"]
        H1["Acasalamento de Raças Divergentes (Nelore x Angus)"] --> H2["Restauração Máxima da Heterozigose (F = 0)"]
        H2 --> H3["Encobrimento de Alelos Deletérios Recessivos"]
        H3 --> H4["Sobredominância & Sinergismo Gênico"]
        H4 --> H5["Vigor Híbrido: Ganho de Peso Superior (+15-20%) & Precocidade Sexual"]
    end
\`\`\`

---

### A Depressão por Endogamia (Inbreeding Depression)

Quando a homozigose se eleva:
* Alelos recessivos deletérios que estavam ocultos pela dominância manifestam-se no fenótipo.
* Ocorre **queda drástica nas características de valor adaptativo**: fertilidade, sobrevivência embrionária e neonatal, resistência imunológica a patógenos e vigor geral.
* Cada incremento de 1% em $F$ provoca redução média de 0.6% no peso ao nascer e retarda a puberdade em bovinos.

---

### Heterose (Vigor Híbrido) no Cruzamento Industrial

A **Heterose ($H$)** é o fenômeno inverso da depressão consanguínea: é a superioridade fenotípica média da progênie cruzada ($F_1$) em relação à média de seus pais puros:

$$H = \\bar{X}_{F1} - \\frac{\\bar{X}_{P1} + \\bar{X}_{P2}}{2}$$

$$\\%H = \\frac{\\bar{X}_{F1} - \\bar{X}_{\\text{Pais Médios}}}{\\bar{X}_{\\text{Pais Médios}}} \\times 100$$

* **Cruzamento Industrial Nelore ($B. indicus$) $\times$ Angus ($B. taurus$):**
  * As duas subespécies divergiram há centenas de milhares de anos, acumulando alelos distintos.
  * A progênie $F_1$ expressa **100% da heterose potencial direta**: reúne a rusticidade, termotolerância e resistência a carrapatos do Zebu com a maciez de carne, taxa de crescimento e precocidade sexual do Europeu.
* **A Fêmea $F_1$ e a Heterose Materna no Cruzamento Terminal (Tricross):**
  * A novilha $F_1$ Nelore $	imes$ Angus possui heterose na fertilidade e habilidade materna: desmama bezerros até 20-25% mais pesados devido à maior produção de leite.
  * Ao ser inseminada com uma terceira raça pura (ex: Brangus ou Senepol), todos os produtos tricross são destinados ao abate comercial com máxima eficiência bioeconômica.

> 📖 Referência Canônica: Understanding Animal Breeding (Bourdon, 2ª ed.) & Animal Breeding: Principles and Selected Topics (Van Vleck et al.).

> 💡 Pérola Zootécnica / Por que não cruzar F1 com F1? O acasalamento de animais $F_1 \times F_1$ gera uma geração $F_2$ com **perda de 50% da heterose original** devido à segregação e recombinação gênica, além de produzir uma desuniformidade fenotípica inaceitável no lote de abate (alguns bezerros nascem com pelo fino sem rusticidade, outros com carcaça zebuína tardia). Os reprodutores utilizados em cruzamentos devem ser sempre puros ou de compostos estabilizados!

> ⚠️ Alerta de Manejo em Haras e Canis: A consanguinidade intencional estreita (linebreeding excessivo para fixar um campeão de pista) sem descarte rigoroso é a principal causa do surgimento de cardiopatias congênitas, atrofia progressiva de retina e displasias severas em cães e cavalos de raça pura!`
      },
      {
        id: 'sec_genetics_lab4',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Agropecuária Santa Helena',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Resgate Genético de Rebanho Consanguíneo via Choque de Sangue e IATF F1',
          patient: {
            name: 'Rebanho Santa Helena',
            species: 'Bovino de Corte',
            breed: 'Nelore Comercial',
            age: 'Matrizes pluríparas',
            weightKg: 460,
            habitatOrEnvironment: 'Pastagem extensiva de cerrado, Mato Grosso do Sul'
          },
          vitals: {
            heartRateBpm: 64,
            respiratoryRateRpm: 22,
            temperatureCelsius: 38.6,
            mucousMembranes: 'Normocoradas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'A propriedade reteve touros próprios ao longo de 4 gerações consecutivas para reduzir custos de aquisição de reprodutores, resultando em acasalamento reiterado de pais com filhas e irmãs. Nos últimos 3 anos, o índice de bezerros natimortos saltou de 1.8% para 8.5%, surgiram casos de atresia de cólon congênita e o peso à desmama caiu de 205 kg para 175 kg.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Auditoria Genealógica e Coeficiente de Endogamia Médio do Rebanho',
              findings: 'Severa depressão consanguínea decorrente de parentesco fechado crônico.',
              abnormalValues: [
                { parameter: 'Coeficiente Médio de Endogamia (F de Wright)', value: '0.165 (16.5%)', reference: 'Mínimo Aceitável: < 0.05 (5.0%)', status: 'critical' },
                { parameter: 'Mortalidade Perinatal / Natimortos', value: '8.5%', reference: '< 2.5%', status: 'critical' },
                { parameter: 'Peso Médio à Desmama (7 Meses)', value: '175 kg', reference: 'Média Regional: > 210 kg', status: 'low' },
                { parameter: 'Taxa de Prenhez Anual', value: '62%', reference: '> 80%', status: 'low' }
              ]
            }
          ],
          challengePrompt: 'Para reverter a depressão consanguínea e maximizar a lucratividade na safra de bezerros, qual é o plano genético imediato?',
          decisionOptions: [
            {
              id: 'opt_dec_gen4_1',
              label: 'Descartar touros da própria fazenda e instituir IATF com sêmen de touros Aberdeen Angus provados (Cruzamento Industrial F1), zerando a consanguinidade na progênie (F = 0) e capturando 100% de heterose',
              description: 'Choque de sangue com raça divergente restaurando o vigor híbrido total e peso na desmama.',
              isOptimal: true,
              consequenceText: 'Decisão impecável! A introdução de touros puros de outra subespécie (Angus) anula imediatamente a endogamia nos bezerros (F = 0). O bezerro F1 expressará vigor híbrido máximo (+15% a +20% em peso na desmama), sanando a mortalidade neonatal e adicionando até 35 kg a mais por bezerro desmamado.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Interrupção do acasalamento consanguíneo e introdução de cruzamento industrial F1',
                mechanism: 'Restauração da heterozigose em todos os locos cromossômicos homozigotos deletérios',
                effect: 'Eliminação de natimortos por defeitos recessivos e ativação de heterose no ganho em peso',
                clinicalMeaning: 'Recuperação imediata do índice de desmama (> 225 kg) e restauração da viabilidade econômica'
              }
            },
            {
              id: 'opt_dec_gen4_2',
              label: 'Continuar usando os mesmos touros da própria fazenda mas oferecer vitaminas injetáveis no parto',
              description: 'Tentar compensar defeitos genéticos consanguíneos com suplementos vitamínicos.',
              isOptimal: false,
              consequenceText: 'Erro grosseiro! Vitaminas não alteram o genoma. A continuidade da endogamia elevará F para mais de 25%, fixando alelos letais recessivos e inviabilizando completamente a reprodução da fazenda.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Manutenção de acasalamentos consanguíneos cumulativos',
                mechanism: 'Fixação de mutações recessivas letais em homozigose',
                effect: 'Aumento contínuo da taxa de natimortos, atresia anal e atresia de cólon',
                clinicalMeaning: 'Colapso produtivo irreversível do rebanho comercial'
              }
            },
            {
              id: 'opt_dec_gen4_3',
              label: 'Acasalar as fêmeas F1 geradas de volta com os mesmos touros consanguíneos da fazenda',
              description: 'Retrofundir a progênie F1 nos touros endogâmicos ancestrais.',
              isOptimal: false,
              consequenceText: 'Retrocesso genético! O retrocruzamento em touros aparentados reintroduz a consanguinidade e perde metade da heterose alcançada, gerando bezerros fracos e desuniformes.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Retrocruzamento com genitor endogâmico consanguíneo',
                mechanism: 'Perda de heterozigose e reexpressão de alelos deletérios',
                effect: 'Redução do vigor híbrido e ressurgimento de anomalias',
                clinicalMeaning: 'Prejuízo no lote e perda dos benefícios do cruzamento industrial'
              }
            }
          ],
          learningTakeaways: [
            'O coeficiente F de Wright quantifica a probabilidade de alelos serem idênticos por descendência.',
            'A depressão consanguínea afeta primordialmente características reprodutivas e de sobrevivência.',
            'O cruzamento industrial entre subespécies divergentes maximiza a heterose e eleva o peso da desmama.'
          ]
        }
      },
      {
        id: 'sec_genetics_ex4',
        type: 'exercise',
        title: 'Exercício Clínico: Coeficiente de Wright & Heterose no Cruzamento Industrial',
        exerciseId: 'ex_genetics_04'
      }
    ]
  },
  {
    id: 'lesson_genetics_05_genomic_selection',
    moduleId: 'mod_genetics',
    title: 'Seleção Genômica Ampla (GWS), Painéis de SNPs & Predição de GEBVs',
    shortDescription: 'Chips de SNPs (50k a 770k), desequilíbrio de ligação (LD), matriz genômica G e acurácia precoce ao nascimento.',
    estimatedMinutes: 16,
    order: 5,
    concepts: ['concept_genetics_genomic_selection_snps'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_genetics_th5',
        type: 'theory',
        title: 'A Revolução da Genômica: Da Matriz Genealógica A para a Matriz Real G',
        contentMarkdown: `### O Que São SNPs e Como Viabilizam a Seleção Genômica?

Um **SNP (Single Nucleotide Polymorphism)** é a variação de uma única base nitrogenada ($A, T, C, G$) na sequência de DNA entre indivíduos de uma mesma espécie.
* Na pecuária de precisão, não sequenciamos o genoma inteiro de cada bezerro rotineiramente; utilizamos **Chips / Painéis de Genotipagem de Alta Densidade** contendo de 50.000 (50k) a mais de 770.000 marcadores SNPs (HD - High Density) distribuídos uniformemente pelos 30 pares de cromossomos bovinos.

\`\`\`mermaid
graph TD
    A["Amostra Biológica ao Nascimento (Bulbo Piloso da Cauda / Cartilagem)"] --> B["Extração de DNA & Hibridização em Chip de SNPs (GGP Bovine 50k)"]
    B --> C["Identificação de 50.000 Polimorfismos Nucleotídicos"]
    C --> D["Matriz de Parentesco Genômico Real (Matriz G via ssGBLUP)"]
    D --> E["Associação com População de Referência Fenotípica Calibrada"]
    E --> F["Predição de GEBV (Genomic Estimated Breeding Value)"]
    F --> G["Acurácia Imediata de 0.65 a 0.75 aos 2 Meses de Idade"]
    G --> H["Encurtamento do Intervalo de Gerações (L de 5 para 1.5 anos)"]
\`\`\`

---

### O Princípio do Desequilíbrio de Ligação (Linkage Disequilibrium - LD)

Como um SNP prevê ganho de peso ou produção de leite se ele próprio pode estar em uma região não codificadora?
* **Desequilíbrio de Ligação (LD):** É a associação não-aleatória entre alelos em locos diferentes no mesmo cromossomo.
* Devido à **proximidade física extrema** no filamento de DNA, o marcador SNP viaja junto com a mutação causal verdadeira presente no **QTL (Quantitative Trait Locus)** durante o crossing-over meiótico ao longo de gerações. O SNP atua como uma "etiqueta fluorescente" rastreadora do gene produtivo!

---

### Do Teste de Progênie Tradicional à Seleção Genômica Precoce

| Parâmetro | Teste de Progênie Tradicional (Pedigree BLUP) | Seleção Genômica Ampla (ssGBLUP / GEBV) |
| :--- | :--- | :--- |
| **Idade do Reprodutor para Alta Acurácia** | 5 a 6 anos (aguardar nascimento e lactação das filhas) | **Ao nascimento / Desmame** (dias a meses de vida) |
| **Acurácia Inicial ($r_{TI}$)** | Baixa ($0.25 - 0.35$ baseada apenas na média dos pais) | **Moderada a Alta ($0.65 - 0.75$)** |
| **Intervalo de Gerações ($L$)** | Longo ($L = 5 \text{ a } 6 \text{ anos}$) | **Curto ($L = 1.5 \text{ a } 2 \text{ anos}$)** |
| **Taxa de Ganho Genético Anual ($\\Delta G$)** | Lenta e de alto custo por reprodutor testado | **Duas a três vezes mais rápida** |
| **Parentesco entre Irmãos Próprios** | Considera parentesco fixo teórico de 50% ($A_{ij} = 0.50$) | **Mede o parentesco genômico real ($G_{ij} = 0.35 \text{ a } 0.65$)** |

> 📖 Referência Canônica: Genomic Selection in Animals (Hayes & Goddard) & Understanding Animal Breeding (Bourdon, 2ª ed.).

> 💡 Pérola Zootécnica / A Matriz G Revela o Irmão Superior: Pelo pedigree clássico, dois irmãos plenos (filhos do mesmo pai e da mesma mãe) possuem coeficiente de parentesco teórico de exatamente 50% ($A = 0.50$). Contudo, devido à segregação meiótica aleatória dos cromossomos e crossing-over, um irmão pode herdar 62% dos genes superiores da mãe e o outro apenas 38%! A genômica lê a Matriz $G$ real e identifica com precisão qual irmão herdou os melhores blocos cromossômicos logo aos 30 dias de vida, evitando o gasto de recriar animais medíocres!

> ⚠️ Alerta Crítico: Validação Específica por Raça: Equações genômicas treinadas na raça Holandesa perdem acurácia se aplicadas diretamente no Nelore ou Gir Leiteiro! O desequilíbrio de ligação entre o SNP e o QTL varia entre raças divergentes devido a diferentes históricos evolutivos de mutação e recombinação. É mandatório possuir populações de referência fenotípicas próprias e robustas para cada programa de melhoramento!`
      },
      {
        id: 'sec_genetics_lab5',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Cabanha Terra Roxa (Genômica Precoce)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Avaliação Genômica Precoce de Bezerro Nelore Elite para Central de Sêmen',
          patient: {
            name: 'Titã FIV da Terra Roxa',
            species: 'Bovino de Corte',
            breed: 'Nelore PO (Puro de Origem)',
            age: '2 meses',
            weightKg: 88,
            habitatOrEnvironment: 'Piquete maternidade com creep-feeding'
          },
          vitals: {
            heartRateBpm: 110,
            respiratoryRateRpm: 24,
            temperatureCelsius: 38.8,
            mucousMembranes: 'Normocoradas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Bezerro produto de FIV de doadora de elite acasalada com o touro líder de sumário. A cabanha precisa decidir se comercializa o animal em leilão de desmame aos 7 meses por valor comercial padrão ou se o retém para investir no envio a uma central de coleta e congelamento de sêmen aos 14 meses.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Painel de Genotipagem de Alta Densidade (GGP Bovine 50k) e GEBVs',
              findings: 'Valores genéticos genômicos estimados com acurácia precoce excepcional.',
              abnormalValues: [
                { parameter: 'GEBV Peso ao Sobreano (PS-ED)', value: '+28.4 kg (Top 0.1%)', reference: 'Média da Raça: +6.0 kg', status: 'high' },
                { parameter: 'Acurácia Genômica aos 2 Meses', value: '0.74 (Excelente para a idade)', reference: 'Pedigree Sem Genômica: 0.32', status: 'high' },
                { parameter: 'GEBV Área de Olho de Lombo (AOL)', value: '+4.5 cm² (Top 0.5%)', reference: 'Média da Raça: +0.8 cm²', status: 'high' },
                { parameter: 'Haplótipos Letais Recessivos', value: 'Não portador (Livre de taras genéticas)', reference: 'Não portador', status: 'normal' }
              ]
            }
          ],
          challengePrompt: 'Com a comprovação genômica de mérito genético Top 0.1% e acurácia de 0.74 aos 2 meses de idade, qual a melhor destinação zootécnica para o bezerro?',
          decisionOptions: [
            {
              id: 'opt_dec_gen5_1',
              label: 'Reter o animal, realizar manejo nutricional para desenvolvimento testicular e contratá-lo com central de sêmen para coleta aos 14 meses, comercializando dezenas de milhares de doses de sêmen jovem',
              description: 'Monetizar o mérito genômico superior de ponta e antecipar o uso em massa de sêmen jovem provado.',
              isOptimal: true,
              consequenceText: 'Decisão estratégica de alto impacto econômico! A seleção genômica com acurácia de 0.74 aos 2 meses confere segurança para utilizar o animal como reprodutor jovem aos 14 meses, reduzindo o intervalo de gerações e gerando retorno financeiro milionário com venda de sêmen.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Predição genômica confiável precoce com painel de 50k SNPs',
                mechanism: 'Identificação precoce de blocos cromossômicos superiores herdados dos genitores',
                effect: 'Contratação em central de IA com 14 meses e distribuição maciça de sêmen',
                clinicalMeaning: 'Aceleração do ganho genético na pecuária nacional e máxima rentabilidade para o criador'
              }
            },
            {
              id: 'opt_dec_gen5_2',
              label: 'Vender o bezerro no desmame sem certificado genômico como gado de engorda comum',
              description: 'Tratar o animal como um garrote comum sem valor genético agregado.',
              isOptimal: false,
              consequenceText: 'Erro financeiro e zootécnico imperdoável! Desperdiçar um reprodutor Top 0.1% com acurácia 0.74 comprovada como gado comum de corte destrói um valor genético agregado inestimável.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Ignorar o valor genômico estimado comprovado por biologia molecular',
                mechanism: 'Subutilização de genes aditivos superiores raros na população',
                effect: 'Perda de receita financeira expressiva e estagnação da cabanha',
                clinicalMeaning: 'Destruição de patrimônio genético de alta linhagem'
              }
            },
            {
              id: 'opt_dec_gen5_3',
              label: 'Aguardar o bezerro completar 6 anos em regime de pasto extensivo para iniciar a primeira coleta de sêmen',
              description: 'Ignorar a genômica e esperar o teste de progênie tardio à moda antiga.',
              isOptimal: false,
              consequenceText: 'Inadequado! Esperar 6 anos sem necessidade atrasa o intervalo de gerações (L), reduz o ganho genético anual e faz o reprodutor perder valor comercial para os novos jovens genômicos que nascem a cada ano.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Atraso desnecessário de 4 a 5 anos no início da vida reprodutiva do touro',
                mechanism: 'Aumento severo do intervalo de gerações no rebanho',
                effect: 'Desvalorização do reprodutor perante as novas gerações genotipadas',
                clinicalMeaning: 'Perda da janela de oportunidade econômica em centrais de inseminação'
              }
            }
          ],
          learningTakeaways: [
            'Chips de SNPs avaliam dezenas a centenas de milhares de marcadores genômicos simultaneamente.',
            'O desequilíbrio de ligação (LD) permite que SNPs rastreiem QTLs causais por proximidade física.',
            'A seleção genômica reduz o intervalo de gerações (L) pela metade, acelerando drasticamente o ganho genético anual.'
          ]
        }
      },
      {
        id: 'sec_genetics_ex5',
        type: 'exercise',
        title: 'Exercício Clínico: Seleção Genômica Ampla & Predição de GEBV',
        exerciseId: 'ex_genetics_05'
      }
    ]
  }
];

