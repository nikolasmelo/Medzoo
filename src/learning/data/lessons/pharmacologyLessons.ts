// src/learning/data/lessons/pharmacologyLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const PHARMACOLOGY_EXERCISES: Record<string, LearningExercise> = {
  ex_pharma_01: {
    id: 'ex_pharma_01',
    conceptId: 'concept_volume_calc',
    type: 'dose_calculation',
    prompt: 'Calcule o volume exato (em mL) a ser administrado para uma Arara-canindé pesando 1,2 kg que necessita de Meloxicam na dose de 1,0 mg/kg. O frasco disponível no hospital é Meloxicam 0,2% (2,0 mg/mL).',
    contextData: {
      patientSpecies: 'Arara-canindé (Ara ararauna)',
      patientWeightKg: 1.2,
      drugName: 'Meloxicam 0,2%',
      drugConcentrationMgMl: 2.0,
      targetDoseMgKg: 1.0,
      unit: 'mL'
    },
    correctNumericValue: 0.60,
    numericTolerance: 0.02,
    pedagogicalExplanation: 'Massa necessária: 1,2 kg × 1,0 mg/kg = 1,2 mg de princípio ativo. Como a concentração é 2,0 mg/mL, o volume é: V = 1,2 mg ÷ 2,0 mg/mL = 0,60 mL.',
    causalChain: {
      cause: 'Aplicação exata de 0,60 mL de Meloxicam 0,2%',
      mechanism: 'Concentração plasmática atinge a janela terapêutica sem saturação enzimática renal',
      effect: 'Inibição analgésica de COX-2 sustentada por 24 horas',
      clinicalMeaning: 'Alívio da dor do paciente permitindo alimentação voluntária e recuperação'
    }
  },
  ex_pharma_02: {
    id: 'ex_pharma_02',
    conceptId: 'concept_volume_calc',
    type: 'dose_calculation',
    prompt: 'Um Lobo-guará pesando 25,0 kg foi admitido com ferida infectada. Você deve prescrever Enrofloxacina na dose de 10 mg/kg. O frasco hospitalar é Enrofloxacina 5% (50 mg/mL). Qual volume em mL deve ser aspirado?',
    contextData: {
      patientSpecies: 'Lobo-guará (Chrysocyon brachyurus)',
      patientWeightKg: 25.0,
      drugName: 'Enrofloxacina 5%',
      drugConcentrationMgMl: 50.0,
      targetDoseMgKg: 10.0,
      unit: 'mL'
    },
    correctNumericValue: 5.00,
    numericTolerance: 0.1,
    pedagogicalExplanation: 'Massa necessária: 25 kg × 10 mg/kg = 250 mg de Enrofloxacina. Volume: 250 mg ÷ 50 mg/mL = 5,0 mL.',
    causalChain: {
      cause: 'Aplicação correta de 5,0 mL de Enrofloxacina 5%',
      mechanism: 'Pico sérico ultrapassa a Concentração Inibitória Mínima (CMI) em 10 vezes',
      effect: 'Inibição bactericida da DNA-girase bacteriana',
      clinicalMeaning: 'Remissão da infecção cutânea sem indução de resistência bacteriana'
    }
  },
  ex_pharma_03: {
    id: 'ex_pharma_03',
    conceptId: 'concept_concentration',
    type: 'multiple_choice',
    prompt: 'Um frasco de medicamento indica no rótulo: "Solução Injetável a 2,0%". Quantos miligramas (mg) de princípio ativo existem em cada 1 mL dessa solução?',
    options: [
      { id: 'opt_1', text: '0,2 mg/mL', isCorrect: false, pedagogicalFeedback: 'Incorreto. Você dividiu a porcentagem por 10 em vez de multiplicar.', conceptualErrorCategory: 'wrong_conversion_division' },
      { id: 'opt_2', text: '2,0 mg/mL', isCorrect: false, pedagogicalFeedback: 'Incorreto. 1% equivale a 1 g/100 mL, o que corresponde a 10 mg/mL. Logo, 2% não pode ser 2 mg/mL.', conceptualErrorCategory: 'confused_percent_with_mg' },
      { id: 'opt_3', text: '20,0 mg/mL', isCorrect: true, pedagogicalFeedback: 'Exato! A regra áurea é: % × 10 = mg/mL. Portanto, 2,0% × 10 = 20 mg/mL.', conceptualErrorCategory: undefined },
      { id: 'opt_4', text: '200,0 mg/mL', isCorrect: false, pedagogicalFeedback: 'Incorreto. Você multiplicou por 100 em vez de 10.', conceptualErrorCategory: 'wrong_conversion_multiplied_100' }
    ],
    pedagogicalExplanation: 'A porcentagem representa gramas por 100 mL. 2% = 2g / 100mL = 2000mg / 100mL = 20 mg/mL.'
  },
  ex_pharma_04: {
    id: 'ex_pharma_04',
    conceptId: 'concept_toxicity_overdose',
    type: 'clinical_case_choice',
    prompt: 'Durante o plantão, um filhote de Jabuti de 200g (0,2 kg) com trauma de casco recebe por engano 0,5 mL de Meloxicam 2% (20 mg/mL) em vez da formulação 0,2%. O que acontecerá a nível fisiológico?',
    options: [
      { id: 'c1', text: 'O paciente terá analgesia mais prolongada e sem efeitos adversos graves.', isCorrect: false, pedagogicalFeedback: 'Incorreto. A dose aplicada foi de 10 mg (50 mg/kg!), o que representa 50 vezes a dose recomendada.', conceptualErrorCategory: 'underestimated_toxicity' },
      { id: 'c2', text: 'Ocorrerá vasoconstrição renal aguda, necrose tubular e falência renal anúrica rápida.', isCorrect: true, pedagogicalFeedback: 'Correto! A superconcentração de AINE anula as prostaglandinas vasodilatadoras renais, colapsando a filtração glomerular de quelônios.', conceptualErrorCategory: undefined },
      { id: 'c3', text: 'Haverá bradicardia vagal reversível imediatamente com Atropina.', isCorrect: false, pedagogicalFeedback: 'Incorreto. Meloxicam é um AINE, não um agente colinérgico.', conceptualErrorCategory: 'wrong_pharmacological_class' }
    ],
    pedagogicalExplanation: 'Sobredoses extremas de AINEs em répteis causam lesão renal hiperaguda fulminante por isquemia medular renal.',
    causalChain: {
      cause: 'Sobredose de 50x de Meloxicam em quelônio',
      mechanism: 'Bloqueio total de COX-1/COX-2 e cessação de síntese de PGE2 renal',
      effect: 'Necrose isquêmica tubular e anúria',
      clinicalMeaning: 'Óbito por insuficiência renal aguda'
    }
  }
};

export const PHARMACOLOGY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_pharma_01',
    moduleId: 'mod_pharmacology',
    title: 'Cálculo de Volume em Espécies Silvestres',
    subtitle: 'A fórmula canônica: Peso (kg) × Dose (mg/kg) ÷ Concentração (mg/mL)',
    estimatedMinutes: 8,
    objectives: [
      'Compreender a diferença entre massa de princípio ativo (mg) e volume administrável (mL)',
      'Converter porcentagem de frasco (%) para concentração em mg/mL',
      'Aplicar a fórmula V = (P × D) ÷ C com precisão milimétrica em aves e pequenos mamíferos'
    ],
    concepts: ['concept_weight_dose', 'concept_concentration', 'concept_volume_calc'],
    sections: [
      {
        id: 'sec_01_theory_triad',
        type: 'theory',
        title: '1. A Tríade da Prescrição Veterinária',
        contentMarkdown: `Na medicina de animais silvestres, **não existe "uma gota para qualquer ave" ou "meio comprimido para répteis"**. A imensa variação anatômica e metabólica entre espécies exige cálculo posológico rigoroso baseado na massa corporal individual.

Para prescrever com precisão hospitalar, trabalhamos com três grandezas interligadas:

1. **Peso do Paciente ($P$ em kg):** Aferido em balança de precisão calibrada.
2. **Dose Recomendada ($D$ em mg/kg):** Quantidade de substância ativa necessária por cada quilo corporal.
3. **Concentração do Frasco ($C$ em mg/mL):** Quantos miligramas de fármaco estão dissolvidos em cada mililitro de solução.

A multiplicação do **Peso pela Dose** nos dá a **Massa Total em miligramas ($mg$)** que o paciente deve receber:

$$\\text{Massa Total (mg)} = P \\text{ (kg)} \\times D \\text{ (mg/kg)}$$

Para saber quantos mililitros de líquido contêm essa massa, dividimos pela concentração:

$$V \\text{ (mL)} = \\frac{P \\times D}{C}$$`
      },
      {
        id: 'sec_02_demo_interp',
        type: 'interactive_demo',
        title: '2. Regra Áurea de Conversão de Concentração',
        contentMarkdown: `Muitos frascos veterinários expressam sua concentração em porcentagem (**%**). Como transformar isso para **mg/mL** de forma instantânea?

> 💡 **A Regra Áurea dos 10:**  
> Multiplique o valor percentual por **10**.  
> - **Meloxicam 0,2%** $\\rightarrow$ $0,2 \\times 10 = \\mathbf{2\\text{ mg/mL}}$  
> - **Meloxicam 2,0%** $\\rightarrow$ $2,0 \\times 10 = \\mathbf{20\\text{ mg/mL}}$  
> - **Enrofloxacina 5,0%** $\\rightarrow$ $5,0 \\times 10 = \\mathbf{50\\text{ mg/mL}}$  
> - **Atropina 1,0%** $\\rightarrow$ $1,0 \\times 10 = \\mathbf{10\\text{ mg/mL}}$

*Por que isso funciona?* Porque $1\\%$ significa $1\\text{ g em } 100\\text{ mL} = 1000\\text{ mg em } 100\\text{ mL} = 10\\text{ mg/mL}$.`,
        causalChain: {
          cause: 'Confusão entre 0,2% e 2%',
          mechanism: 'Diferença de fator 10x na densidade do princípio ativo',
          effect: 'Administração de 10 vezes mais massa com o mesmo volume líquido',
          clinicalMeaning: 'Sobredose letal iatrogênica em animais pequenos'
        }
      },
      {
        id: 'sec_03_lab_coruja',
        type: 'lab',
        title: '3. Laboratório Didático Sandbox: Titulação com Seringa',
        description: 'Pratique a aspiração da seringa com um paciente didático simulado. O laboratório opera em ambiente estéril sem afetar o hospital.',
        labType: 'pharmacology_syringe',
        labConfig: {
          patientName: 'Coruja-buraqueira (Filhote didático)',
          weightKg: 0.15,
          drugId: 'meloxicam_02',
          drugName: 'Meloxicam 0,2% (2 mg/mL)',
          concentrationMgMl: 2.0,
          targetDoseMgKg: 0.5,
          targetVolumeMl: 0.038, // 0.15 * 0.5 / 2 = 0.0375 mL
          instructions: 'Aspire na micro-seringa de 0.3 mL o volume exato correspondente a 0.04 mL para esta pequena ave.'
        }
      },
      {
        id: 'sec_04_exercise_calc',
        type: 'exercise',
        title: '4. Verificação de Aprendizagem: Arara-canindé',
        description: 'Resolva o cálculo determinístico para validar o conceito.',
        exerciseId: 'ex_pharma_01'
      },
      {
        id: 'sec_05_reflection',
        type: 'reflection',
        title: '5. Reflexão Clínica',
        contentMarkdown: `Parabéns por completar esta primeira lição!

**Lembre-se:** em animais de menos de 1 kg, um desvio de apenas **0,05 mL** pode significar dobrar a dose prescrita. A matemática precisa é a primeira linha de defesa da segurança cirúrgica e ambulatorial.`
      }
    ]
  },
  {
    id: 'lesson_pharma_02',
    moduleId: 'mod_pharmacology',
    title: 'Subdose vs Sobredose na Fauna',
    subtitle: 'A Janela Terapêutica e os Riscos de Falha e Toxicidade',
    estimatedMinutes: 10,
    objectives: [
      'Entender a Janela Terapêutica como a faixa de segurança entre eficácia e dano',
      'Identificar a cascata fisiopatológica da necrose renal induzida por sobredose de AINE',
      'Calcular doses com fármacos concentrados em mamíferos de grande porte'
    ],
    concepts: ['concept_therapeutic_window', 'concept_toxicity_overdose', 'concept_volume_calc'],
    sections: [
      {
        id: 'sec_02_1_theory_window',
        type: 'theory',
        title: '1. A Janela Terapêutica',
        contentMarkdown: `Todo fármaco atua em um intervalo de concentração plasmática chamado **Janela Terapêutica**:

- **Abaixo do Limiar Mínimo (Subdose):** O fármaco não atinge saturação de receptores. O paciente continua com dor, a bactéria cria resistência ou a bradicardia progride para parada.
- **Na Janela Segura (Dose Ideal):** O efeito clínico máximo é alcançado com toxicidade desprezível.
- **Acima do Limiar de Toxicidade (Sobredose):** Os mecanismos de eliminação (hepáticos e renais) saturam, iniciando citotoxicidade direta e colapso de órgãos-alvo.`,
        causalChain: {
          cause: 'Subdose de analgésico em paciente com dor aguda',
          mechanism: 'Inibição nociceptiva insuficiente no corno dorsal da medula',
          effect: 'Liberação contínua de catecolaminas e cortisol por estresse álgico',
          clinicalMeaning: 'Taquicardia severa, estresse metabólico e risco de Miopatia de Captura'
        }
      },
      {
        id: 'sec_02_2_exercise_mc',
        type: 'exercise',
        title: '2. Conversão e Interpretação Farmacêutica',
        exerciseId: 'ex_pharma_03'
      },
      {
        id: 'sec_02_3_exercise_large',
        type: 'exercise',
        title: '3. Exercício Clínico: Lobo-guará com Antimicrobiano',
        exerciseId: 'ex_pharma_02'
      },
      {
        id: 'sec_02_4_case_study',
        type: 'exercise',
        title: '4. Caso Educacional: O Risco com Quelônios',
        exerciseId: 'ex_pharma_04'
      }
    ]
  },
  {
    id: 'lesson_pharma_03',
    moduleId: 'mod_pharmacology',
    title: 'Avaliação de Domínio: Farmacologia Veterinária',
    subtitle: 'Demonstração de Competência Pedagógica e Consolidação de Conceitos',
    estimatedMinutes: 6,
    objectives: [
      'Provar domínio dos conceitos de posologia, concentração e toxicidade',
      'Consolidar pontuação de maestria para liberação dos módulos avançados'
    ],
    concepts: ['concept_weight_dose', 'concept_concentration', 'concept_volume_calc', 'concept_therapeutic_window', 'concept_toxicity_overdose'],
    sections: [
      {
        id: 'sec_03_1_intro',
        type: 'theory',
        title: '1. Instruções da Avaliação',
        contentMarkdown: `Esta avaliação final consolida seu histórico de aprendizado no Módulo de Farmacologia.

Durante a avaliação:
- As respostas serão verificadas de forma **determinística** pelo motor pedagógico.
- Você pode consultar a Tutora para pedir **pistas socráticas**, mas ela não entregará respostas prontas no Modo Avaliador.
- Seu índice de **Maestria de Conceitos** será atualizado ao término.`
      },
      {
        id: 'sec_03_2_assessment_lab',
        type: 'lab',
        title: '2. Prova Prática: Titulação Rápida em Mamífero',
        description: 'Ajuste a seringa para administrar Enrofloxacina em um Tamanduá-bandeira.',
        labType: 'pharmacology_syringe',
        labConfig: {
          patientName: 'Tamanduá-bandeira (Caso de Avaliação)',
          weightKg: 30.0,
          drugId: 'enrofloxacino_50',
          drugName: 'Enrofloxacina 5% (50 mg/mL)',
          concentrationMgMl: 50.0,
          targetDoseMgKg: 10.0,
          targetVolumeMl: 6.00, // 30 * 10 / 50 = 6.0 mL
          instructions: 'Calcule e aspire o volume exato para o tamanduá pesando 30 kg na seringa de 10 mL.'
        }
      },
      {
        id: 'sec_03_3_summary',
        type: 'reflection',
        title: '3. Fechamento de Módulo',
        contentMarkdown: `Parabéns pela dedicação ao estudo da farmacologia silvestre!

Você provou que compreende a relação entre massa do paciente, densidade de fármacos e margem de segurança. Os conceitos aprendidos aqui servirão de esteio direto para o módulo de **Fisiologia e Choque** e para a conduta no **Modo Clínico**!`
      }
    ]
  }
];
