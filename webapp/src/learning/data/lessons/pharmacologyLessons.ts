// src/learning/data/lessons/pharmacologyLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const PHARMACOLOGY_EXERCISES: Record<string, LearningExercise> = {
  ex_pharma_01: {
    id: 'ex_pharma_01',
    conceptId: 'concept_therapeutic_window',
    type: 'multiple_choice',
    prompt: 'Um gato doméstico adulto de 4 kg recebe acidentalmente por via oral um comprimido humano de Paracetamol (Acetaminofeno) de 500 mg (dose recebida: 125 mg/kg). Poucas horas depois, o felino apresenta letargia, taquipneia, cianose com sangue marrom-chocolate, edema facial e hipotermia. Qual é a particularidade farmacocinética da espécie felina que explica essa toxicidade letal hiperaguda e qual o antídoto específico de urgência?',
    options: [
      {
        id: 'opt_1',
        text: 'Deficiência congênita na enzima glicuroniltransferase (UGT1A6): desvio do metabolismo para a via do citocromo P450 gerando acúmulo do metabólito tóxico NAPQI, que depele glutationa e oxida o ferro da hemoglobina em meta-hemoglobina. Antídoto: N-Acetilcisteína (NAC).',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Felinos possuem deficiência fisiológica na glicuronidação hepática. Sem glicuroniltransferase suficiente, o paracetamol é desviado para oxidação pelo CYP450, gerando NAPQI em quantidades que esgotam a glutationa celular. O NAPQI oxida o ferro da hemoglobina a íon férrico Fe3+ (meta-hemoglobinemia marrom com hipóxia anóxica) e destrói os hepatócitos. O antídoto padrão é a N-Acetilcisteína (fornece cisteína para ressintetizar glutationa).',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Superativação da fosfatase alcalina intestinal com precipitação de cristais de oxalato no miocárdio. Antídoto: Furosemida venosa em alta dosagem.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A toxicidade do paracetamol é hepática e hematológica mediada por NAPQI e depleção de glutationa, e não precipitados no miocárdio.',
        conceptualErrorCategory: 'mechanism_confusion'
      },
      {
        id: 'opt_3',
        text: 'Bloqueio seletivo dos receptores muscarínicos cardíacos gerando parada sinusal reversível com Atropina.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Paracetamol não é agente parassimpaticolítico e Atropina não tem efeito sobre meta-hemoglobinemia ou necrose hepática por NAPQI.',
        conceptualErrorCategory: 'drug_class_misattribution'
      },
      {
        id: 'opt_4',
        text: 'Eliminação renal hiper-rápida sem qualquer metabolização hepática. Antídoto: Bicarbonato de sódio para alcalinizar a urina.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A falha na excreção e o acúmulo do metabólito reativo NAPQI ocorrem exatamente pela incapacidade do fígado felino de glicuronidar o fármaco.',
        conceptualErrorCategory: 'elimination_misconception'
      }
    ],
    pedagogicalExplanation: 'A farmacologia felina possui deficiências de conjugação de Fase II (especialmente glicuronidação), tornando a espécie hipersensível a fenóis, paracetamol e salicilatos. A N-acetilcisteína é o antídoto que regenera a glutationa.',
    causalChain: {
      cause: 'Ingestão de paracetamol em espécie felina deficiente em glicuroniltransferase',
      mechanism: 'Sobrecarga da via citocromo P450 com produção maciça de NAPQI e depleção de glutationa',
      effect: 'Oxidação da hemoglobina a meta-hemoglobina (sangue marrom) e necrose centrilobular hepática',
      clinicalMeaning: 'Hipóxia anóxica grave, cianose, edema facial e morte fulminante por falência hepatorrespiratória'
    }
  },

  ex_pharma_02: {
    id: 'ex_pharma_02',
    conceptId: 'concept_volume_calc',
    type: 'multiple_choice',
    prompt: 'Um Lobo-guará (Chrysocyon brachyurus) pesando 24,0 kg admitido no hospital veterinário com celulite bacteriana necessita de Enrofloxacina na dose terapêutica de 5,0 mg/kg por via intramuscular. O frasco hospitalar disponível no estoque é de Enrofloxacina a 10% (100 mg/mL). Qual o volume exato (em mL) que o clínico deve aspirar na seringa?',
    options: [
      {
        id: 'opt_1',
        text: '1,20 mL (Cálculo: Massa Total = 24 kg × 5 mg/kg = 120 mg. Concentração a 10% = 100 mg/mL. Volume = 120 mg ÷ 100 mg/mL = 1,20 mL).',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! Pela regra áurea, 10% equivale a 100 mg/mL (10 × 10). A massa necessária para 24 kg a 5 mg/kg é de 120 mg. Dividindo 120 mg por 100 mg/mL obtém-se exatamente 1,20 mL. Um cálculo impecável que garante eficácia bactericida sem neurotoxicidade.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: '12,0 mL (Cálculo considerando que 10% equivale a 10 mg/mL).',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e perigoso! 10% equivale a 100 mg/mL, e não a 10 mg/mL. Administrar 12 mL representaria uma sobredose de 10 vezes (1.200 mg!), podendo deflagrar convulsões graves e cegueira por retinopatia.',
        conceptualErrorCategory: 'concentration_conversion_error'
      },
      {
        id: 'opt_3',
        text: '0,12 mL (Cálculo com erro de fator decimal na divisão da concentração).',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. 0,12 mL forneceria apenas 12 mg de fármaco (subdose de 10 vezes), permitindo a rápida seleção de linhagens bacterianas resistentes.',
        conceptualErrorCategory: 'decimal_error'
      },
      {
        id: 'opt_4',
        text: '2,40 mL (Cálculo baseado no dobro da dose sem ajuste pelo frasco comercial).',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. 2,4 mL administraria 240 mg (10 mg/kg), ultrapassando a dose prescrita.',
        conceptualErrorCategory: 'dosage_calculation_error'
      }
    ],
    pedagogicalExplanation: 'A fórmula canônica da prescrição é V = (P × D) ÷ C. Frascos em porcentagem são convertidos multiplicando-se a porcentagem por 10 para obter mg/mL.',
    causalChain: {
      cause: 'Aplicação do cálculo rigoroso V = (24 × 5) / 100 = 1,20 mL',
      mechanism: 'Atingimento rápido do pico sérico (Cmax) superior a 10 vezes a Concentração Inibitória Mínima',
      effect: 'Inibição bactericida da DNA-girase (topoisomerase II) bacteriana',
      clinicalMeaning: 'Resolução da infecção tecidual profunda sem risco de toxicidade articular ou retiniana'
    }
  },

  ex_pharma_03: {
    id: 'ex_pharma_03',
    conceptId: 'concept_pharmacology_analgesia_nsaids_opioids',
    type: 'multiple_choice',
    prompt: 'Um cão desidratado e hipotenso por atropelamento recebe uma injeção de Cetoprofeno (AINE não-seletivo) na dose máxima de bula para dor aguda. Quarenta e oito horas depois, o animal entra em oligúria, com Creatinina = 5,8 mg/dL e ureia = 180 mg/dL. Qual o mecanismo farmacológico que deflagrou a Lesão Renal Aguda (LRA) intrínseca nesse paciente?',
    options: [
      {
        id: 'opt_1',
        text: 'Inibição da síntese de Prostaglandina E2 (PGE2) e Prostaciclina (PGI2) renais mediada por COX-1 e COX-2: em hipovolemia, essas prostaglandinas são essenciais para vasodilatar a arteríola aferente glomerular. Seu bloqueio provocou vasoconstrição severa, isquemia medular e necrose tubular aguda.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Em animais euvolêmicos e hidratados, a filtração glomerular independe das prostaglandinas. Porém, em situações de choque, hipotensão ou desidratação, o organismo libera angiotensina II e noradrenalina para vasoconstrição sistêmica. Os rins só sobrevivem produzindo PGE2 e PGI2 para manter a arteríola aferente dilatada. O AINE bloqueia essa proteção, causando isquemia renal hiperaguda!',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Estimulação massiva da aldosterona nos ductos coletores provocando perda imediata de néfrons viáveis.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Os AINEs não estimulam a aldosterona; a patogênese renal é hemodinâmica microvascular por ausência de vasodilatação prostaglandínica aferente.',
        conceptualErrorCategory: 'endocrine_confusion'
      },
      {
        id: 'opt_3',
        text: 'Precipitação física direta de cristais insolúveis de Cetoprofeno que ocluíram os ureteres bilateralmente.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A insuficiência renal por AINE é pré-renal/renal isquêmica por hipoperfusão glomerular, e não nefrolitíase obstrutiva pós-renal.',
        conceptualErrorCategory: 'obstructive_misattribution'
      },
      {
        id: 'opt_4',
        text: 'Conversão do Cetoprofeno em morfina endógena que paralisou a musculatura lisa da bexiga.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e absurdo. AINEs não se transformam em opioides e a lesão documentada foi necrose renal parenquimatosa.',
        conceptualErrorCategory: 'pharmacological_class_confusion'
      }
    ],
    pedagogicalExplanation: 'AINEs são rigorosamente contraindicados em pacientes hipotensos, hipovolêmicos ou desidratados. A analgesia em emergências com choque deve ser iniciada exclusivamente com OPIOIDES puros (Morfina, Fentanil, Metadona), que não lesam a perfusão renal.',
    causalChain: {
      cause: 'Administração de AINE em paciente com hipovolemia e hipotensão arterial prévia',
      mechanism: 'Bloqueio da síntese compensatória intrarrenal de PGE2 e PGI2 vasodilatadoras',
      effect: 'Vasoconstrição intensa e descontrolada da arteríola aferente com colapso do fluxo plasmático renal',
      clinicalMeaning: 'Necrose tubular aguda isquêmica, anúria, retenção de escórias nitrogenadas e morte por LRA'
    }
  },

  ex_pharma_04: {
    id: 'ex_pharma_04',
    conceptId: 'concept_pharmacology_pk_pd_antimicrobials',
    type: 'multiple_choice',
    prompt: 'Na terapia antimicrobiana de uma infecção bacteriana grave por Pseudomonas aeruginosa em cão internado, o clínico prescreve Amicacina (aminoglicosídeo). Para otimizar a eficácia bactericida e minimizar a nefrotoxicidade e ototoxicidade dessa classe, qual estratégia de administração baseada em PK/PD é o padrão-ouro recomendado pela literatura veterinária?',
    options: [
      {
        id: 'opt_1',
        text: 'Dose única diária total (SID / Once-Daily Dosing): por ser um fármaco concentração-dependente com marcante Efeito Pós-Antibiótico (EPA), a dose única atinge um pico sérico alto (Cmax/CMI > 10 a 12) maximizando a taxa bactericida, permitindo que a concentração caia a níveis basais seguros para clearance tubular renal.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! Os aminoglicosídeos são clássicos antimicrobianos concentração-dependentes: quanto maior o pico Cmax em relação à CMI, maior e mais rápida a lise bacteriana. Além disso, a captação de aminoglicosídeos pelas células tubulares proximais renais é saturável. A dose única diária (SID) satura temporariamente a captação e permite longos períodos com concentrações séricas residuais baixas, protegendo os rins!',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Infusão contínua em taxa constante (CRI) em bomba de infusão durante 24 horas ininterruptas.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e nefrotóxico! A infusão contínua de aminoglicosídeos mantém concentrações séricas constantes que ultrapassam o limiar de nefrotoxicidade continuamente, promovendo acúmulo intracelular e necrose tubular.',
        conceptualErrorCategory: 'continuous_infusion_misconception'
      },
      {
        id: 'opt_3',
        text: 'Fracionar a dose diária a cada 6 horas (QID) em microporções para manter a concentração sempre no limiar.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O fracionamento frequente (TID/QID) reduz o pico Cmax (diminuindo a morte bacteriana) e eleva a concentração de vale (aumentando a nefrotoxicidade). É a pior conduta para aminoglicosídeos.',
        conceptualErrorCategory: 'fractionation_error'
      },
      {
        id: 'opt_4',
        text: 'Administrar exclusivamente associado a bicarbonato de sódio para impedir qualquer absorção tecidual.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A eficácia depende da distribuição tecidual da molécula no sítio de infecção.',
        conceptualErrorCategory: 'interaction_confusion'
      }
    ],
    pedagogicalExplanation: 'Antimicrobianos concentração-dependentes (Aminoglicosídeos e Fluoroquinolonas) exigem picos elevados (Cmax/CMI > 10-12), sendo administrados em dose única diária. Já os tempo-dependentes (Beta-lactâmicos) dependem da porcentagem do tempo em que a droga permanece acima da CMI (%T > CMI), exigindo administrações frequentes.',
    causalChain: {
      cause: 'Administração de aminoglicosídeo em regime posológico de Dose Única Diária (SID)',
      mechanism: 'Pico plasmático elevado gerando pico Cmax/CMI > 10 associado a longo período com vale plasmático < 2 mcg/mL',
      effect: 'Lise bacteriana imediata por bloqueio da subunidade ribossômica 30S e saturação transitória dos carreadores renais',
      clinicalMeaning: 'Erradicação da infecção bacteriana multirresistente com preservação da integridade renal e auditiva'
    }
  },

  ex_pharma_05: {
    id: 'ex_pharma_05',
    conceptId: 'concept_pharmacology_clinical_toxicology',
    type: 'multiple_choice',
    prompt: 'Um cão Pastor Alemão de 30 kg foi encontrado no quintal em convulsões e salivação profusa após o vizinho aplicar inseticida agrícola. No exame de emergência, apresenta miose puntiforme bilateral, hipersalivação, broncorreia, estertores úmidos difusos, bradicardia extrema (44 bpm) e fasciculações musculares esqueléticas difusas. Qual é a síndrome toxicológica, o grupo farmacológico envolvido e o protocolo antídoto de emergência?',
    options: [
      {
        id: 'opt_1',
        text: 'Síndrome Colinérgica Aguda por Organofosforados/Carbamatos: inibição da acetilcolinesterase com acúmulo massivo de acetilcolina nos receptores muscarínicos e nicotínicos. Conduta: Sulfato de Atropina (0,2 a 0,5 mg/kg IV/IM, sendo 1/4 IV e restante IM/SC até atropinização/midríase e secagem de secreções) associado a Pralidoxima (reativador enzimático).',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! Os organofosforados e carbamatos fosforilam/carbamilam a enzima acetilcolinesterase, impedindo a degradação da acetilcolina. O excesso de ACh em receptores muscarínicos deflagra o clássico mnemônico SLUDGE (Salivação, Lacrimejamento, Micção, Defecção, Gastrointestinal e Êmese) + Broncorreia e Bradicardia. A Atropina bloqueia competitivamente os receptores muscarínicos salvando o animal de asfixia por edema/secreção pulmonar; a Pralidoxima desfosforila a colinesterase antes do envelhecimento da ligação.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Intoxicação por Anticoagulantes Cumarínicos: inibição da vitamina K epóxido-redutase. Conduta: Fitomenadiona (Vitamina K1) oral.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Anticoagulantes cumarínicos (rodenticidas) causam sangramentos cavitários (hemotórax, hemoperitônio) após 48-72h, e não síndrome colinérgica imediata com salivação, miose e broncorreia.',
        conceptualErrorCategory: 'rodenticide_confusion'
      },
      {
        id: 'opt_3',
        text: 'Intoxicação por Estricnina com bloqueio dos receptores de glicina medulares. Conduta: Flumazenil intravenoso.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A estricnina causa espasmos tetânicos reflexos e midríase sem hipersalivação muscarínica exuberante; Flumazenil é antídoto de benzodiazepínicos.',
        conceptualErrorCategory: 'strychnine_confusion'
      },
      {
        id: 'opt_4',
        text: 'Sobredose de Ivermectina em cão homozigoto mutante ABCB1 (MDR1). Conduta: Naloxona venosa contínua.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A neurotoxicidade por ivermectina causa ataxia, cegueira e coma por abertura de canais GABA, sem fasciculações esqueléticas colinérgicas ou miose.',
        conceptualErrorCategory: 'ivermectin_confusion'
      }
    ],
    pedagogicalExplanation: 'A síndrome colinérgica por organofosforados é tratada pela titulação de Atropina até cessação da broncorreia e midríase, acompanhada de Pralidoxima nas primeiras 24 horas.',
    causalChain: {
      cause: 'Absorção dérmica ou oral de inseticida organofosforado com inibição irreversível da acetilcolinesterase',
      mechanism: 'Hiperestimulação contínua dos receptores muscarínicos viscerais e nicotínicos da junção neuromuscular',
      effect: 'Broncorreia e broncoespasmo severo associado a bradicardia extrema e fasciculações musculares',
      clinicalMeaning: 'Asfixia respiratória aguda, colapso circulatório e morte iminente se não houver atropinização'
    }
  }
};

export const PHARMACOLOGY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_pharma_01',
    moduleId: 'mod_pharmacology',
    title: 'Farmacocinética Aplicada & Parâmetros ADME',
    subtitle: 'Absorção, distribuição tecidual, metabolismo hepático (CYP450 vs Fase II em felinos) e excreção.',
    estimatedMinutes: 20,
    objectives: [
      'Compreender os quatro processos canônicos da farmacocinética: Absorção, Distribuição, Metabolismo e Eliminação (ADME)',
      'Identificar as deficiências de glicuronidação em felinos e a toxicidade do paracetamol e salicilatos',
      'Definir Volume de Distribuição (Vd), Meia-vida (t1/2), Clearance e a Janela Terapêutica'
    ],
    concepts: ['concept_therapeutic_window', 'concept_toxicity_overdose'],
    sections: [
      {
        id: 'sec_pharma_adme_01',
        type: 'theory',
        title: 'Cinética Farmacológica e Particularidades Metabólicas de Espécie',
        contentMarkdown: `# Aula Universitária: Farmacocinética — Processos ADME & Janela Terapêutica

> 📖 Referência Canônica: Spinosa, H. S.; Górniak, S. L.; Bernardi, M. M. *Farmacologia Aplicada à Medicina Veterinária*, 6ª ed. Guanabara Koogan. Plumb, D. C. *Veterinary Drug Handbook*, 9th ed. Wiley-Blackwell. Papich, M. G. *Saunders Handbook of Veterinary Drugs*, 5th ed. Elsevier.

A farmacocinética quantifica o que o organismo do animal faz com o fármaco ao longo do tempo, desde sua entrada até a eliminação completa:

### 1. Os Quatro Pilares do ADME
1. **Absorção ($F$ - Biodisponibilidade):** Fração do fármaco administrado que atinge a circulação sistêmica na sua forma ativa e inalterada. Na via intravenosa (IV), $F = 100%$. Na via oral (VO), sofre perdas por pH gástrico e pelo **Efeito de Primeira Passagem Hepático**.
2. **Distribuição ($V_d$ - Volume de Distribuição):** Espaço aparente no qual o fármaco se dilui no organismo. Fármacos lipossolúveis (ex.: anestésicos voláteis, propofol, fluoroquinolonas) possuem alto $V_d$ e penetram no SNC e tecidos gordurosos. Fármacos hidrossolúveis ou muito ligados a proteínas plasmáticas (ex.: aminoglicosídeos, heparina) possuem baixo $V_d$ e ficam restritos ao leito vascular e extracelular.
3. **Metabolismo (Biotransformação Hepática):**
   - *Fase I (Oxirredução e Hidrólise):* Mediada pelo complexo enzimático do **Citocromo P450 (CYP450)** no retículo endoplasmático liso. Torna as moléculas mais polares.
   - *Fase II (Conjugação):* Adição de compostos endógenos polares (Ácido Glicurônico, Glutationa, Sulfato) para excreção biliar ou renal.
4. **Excreção ($Cl$ - Clearance Sistêmico):** Remoção irreversível da substância do sangue pelos rins (filtração glomerular e secreção tubular) e pelo fígado (bile/fezes).

---

### 2. O Pecado Farmacológico Felino: A Deficiência de Glicuroniltransferase
- Os felinos domésticos e silvestres (onças, jaguatiricas, gatos) apresentam **pseudogenização funcional do gene UGT1A6**, resultando em expressão mínima ou ausente de **UDP-Glicuroniltransferase**.
- **O Desastre do Paracetamol (Acetaminofeno):**
  - Em canídeos e primatas, 95% do paracetamol é eliminado por glicuronidação direta e sulfatação.
  - No gato, a via é saturada instantaneamente, desviando o fármaco para a CYP450, que produz **NAPQI (N-acetil-p-benzoquinona imina)**, um metabólito eletrofílico altamente citotóxico.
  - O NAPQI depele a glutationa intracelular dos eritrócitos e hepatócitos, oxidando o ferro ferroso ($Fe^{2+}$) da hemoglobina a férrico ($Fe^{3+}$), gerando **Meta-hemoglobinemia (sangue cor de chocolate)** e lise oxidativa (Corpúsculos de Heinz).

\`\`\`mermaid
flowchart TD
    A["Ingestão de Paracetamol pelo Felino"] --> B["Incapacidade de Glicuronidação (Deficiência UGT1A6)"]
    B --> C["Desvio Massivo para Citocromo P450"]
    C --> D["Acúmulo Tóxico de NAPQI"]
    D --> E["Depleção Completa da Glutationa Hepática e Eritrocitária"]
    E --> F["Oxidação da Hemoglobina em Meta-hemoglobina (Fe3+)"]
    E --> G["Necrose Centrilobular de Hepatócitos"]
    F --> H["Sangue Marrom-Chocolate, Hipóxia Anóxica e Óbito"]
\`\`\``,
        causalChain: {
          cause: 'Administração acidental de paracetamol a felino doméstico',
          mechanism: 'Incapacidade de glicuronidação com acúmulo de NAPQI oxidante e depleção de glutationa',
          effect: 'Oxidação da hemoglobina a meta-hemoglobina e necrose hepatocitária maciça',
          clinicalMeaning: 'Hipóxia anóxica tecidual, coloração marrom do sangue venoso, edema facial e morte fulminante'
        }
      },
      {
        id: 'sec_pharma_adme_02',
        type: 'exercise',
        title: 'Caso Clínico: A Intoxicação por Paracetamol no Felino e o Resgate por NAC',
        exerciseId: 'ex_pharma_01'
      }
    ]
  },

  {
    id: 'lesson_pharma_02',
    moduleId: 'mod_pharmacology',
    title: 'Cálculo Posológico & Tríade da Prescrição Hospitalar',
    subtitle: 'A fórmula canônica V = (P × D) ÷ C, conversão de porcentagem para mg/mL e titulação em seringa.',
    estimatedMinutes: 20,
    objectives: [
      'Diferenciar miligramas de princípio ativo (mg) de volume de solução administrável (mL)',
      'Converter porcentagens de formulações veterinárias em mg/mL pela Regra dos 10',
      'Calcular volumes de micro-doses em animais de pequeno porte e espécies silvestres'
    ],
    concepts: ['concept_weight_dose', 'concept_concentration', 'concept_volume_calc'],
    sections: [
      {
        id: 'sec_pharma_calc_01',
        type: 'theory',
        title: 'A Matemática Rigorosa da Farmacotécnica Hospitalar',
        contentMarkdown: `# Aula Universitária: Cálculo de Dosagens & A Tríade da Prescrição

> 📖 Referência Canônica: Spinosa, H. S. et al. *Farmacologia Aplicada à Medicina Veterinária*. Plumb, D. C. *Veterinary Drug Handbook*.

No ambiente hospitalar e ambulatorial veterinário, não existem "doses médias" ou "uma colher empírica". Animais variam de um beija-flor de 3 gramas a um cavalo de 600 kg:

### 1. A Tríade da Prescrição
Para calcular a medicação com exatidão matemática, integramos três variáveis:
1. **Peso Vivo ($P$ em kg):** Aferido em balança calibrada de precisão.
2. **Dose Recomendada ($D$ em mg/kg):** Quantidade terapêutica de princípio ativo por quilograma de peso vivo.
3. **Concentração Comercial ($C$ em mg/mL):** Quantidade de fármaco dissolvida por unidade de volume do frasco.

$$Massa Necessária (mg)} = P  (kg)} \times D  (mg/kg)}$$
$$V  (mL)} = \frac{P \times D}{C}$$

---

### 2. A Regra Áurea de Conversão de Porcentagem (%)
Muitos fármacos veterinários trazem a concentração expressa em porcentagem. Por definição:
$$1% = 1 g / 100 mL = 1000 mg / 100 mL = 10 mg/mL$$
> 💡 **Regra dos 10:** Para saber a concentração em mg/mL de qualquer solução, **multiplique o valor da porcentagem por 10**:
> - **Meloxicam 0,2%** $-> 0,2 \times 10 = 2,0 mg/mL}$
> - **Meloxicam 2,0%** $-> 2,0 \times 10 = 20,0 mg/mL}$
> - **Enrofloxacina 10%** $-> 10 \times 10 = 100,0 mg/mL}$
> - **Xilazina 2%** $-> 2 \times 10 = 20,0 mg/mL}$`,
        causalChain: {
          cause: 'Confusão na conversão entre frascos a 0,2% e frascos a 2,0%',
          mechanism: 'Diferença de fator de 10 vezes na concentração real de princípio ativo fornecido',
          effect: 'Administração de sobredose de 10x de anti-inflamatório em paciente pequeno',
          clinicalMeaning: 'Necrose de papila renal, ulceração péptica perfurante e morte iatrogênica'
        }
      },
      {
        id: 'sec_pharma_calc_02',
        type: 'exercise',
        title: 'Desafio Numérico: Cálculo Posológico de Enrofloxacina no Lobo-guará',
        exerciseId: 'ex_pharma_02'
      },
      {
        id: 'sec_pharma_calc_03',
        type: 'lab',
        title: 'Laboratório Interativo Sandbox: Titulação com Seringa de Precisão',
        description: 'Pratique a aspiração da seringa com um paciente didático simulado. Ajuste o êmbolo no volume exato para evitar subdose e sobredose fatal.',
        labType: 'pharmacology_syringe',
        labConfig: {
          patientName: 'Arara-canindé (Caso Didático)',
          weightKg: 1.2,
          drugId: 'meloxicam_02',
          drugName: 'Meloxicam 0,2% (2 mg/mL)',
          concentrationMgMl: 2.0,
          targetDoseMgKg: 1.0,
          targetVolumeMl: 0.60,
          instructions: 'Aspire na seringa de 1 mL o volume exato correspondente a 0,60 mL para este psitacídeo.'
        }
      }
    ]
  },

  {
    id: 'lesson_pharma_03',
    moduleId: 'mod_pharmacology',
    title: 'Analgesia Multimodal: AINEs vs Opioides',
    subtitle: 'Cascata inflamatória do ácido araquidônico, COX-1 vs COX-2 e receptores opioides mu/kappa/delta.',
    estimatedMinutes: 24,
    objectives: [
      'Diferenciar a função fisiológica da COX-1 constitutiva da COX-2 inflamatória induzível',
      'Compreender o mecanismo da nefrotoxicidade e ulceração gástrica por AINEs em pacientes hipotensos',
      'Classificar os opioides (morfina, metadona, fentanil, tramadol, butorfanol) e explorar o efeito poupador'
    ],
    concepts: ['concept_pharmacology_analgesia_nsaids_opioids', 'concept_therapeutic_window'],
    sections: [
      {
        id: 'sec_pharma_analg_01',
        type: 'theory',
        title: 'Farmacodinâmica da Dor e Inflamação na Prática Clínica',
        contentMarkdown: `# Aula Universitária: Analgesia Multimodal — AINEs & Sistema Opioide

> 📖 Referência Canônica: Lamont, L. A. *Multimodal Pain Management in Veterinary Medicine*, Vet Clin North Am Small Anim Pract. Mathews, K. et al. *WSAVA Guidelines for recognition, assessment and treatment of pain*, J Small Anim Pract.

A dor não tratada eleva os níveis séricos de cortisol e catecolaminas, promove catabolismo proteico, imunossupressão e retardo grave na cicatrização. A analgesia multimodal atua em diferentes pontos da via nociceptiva:

### 1. A Cascata do Ácido Araquidônico e os AINEs
Quando a membrana celular é lesada, a Fosfolipase A2 cliva fosfolipídios gerando **Ácido Araquidônico**, que é metabolizado pela enzima **Cicloxigenase (COX)**:
- **COX-1 (Constitutiva / Protetora):** Produz **Tromboxano A2** (agregação plaquetária), **PGI2 (Prostaciclina)** e **PGE2** na mucosa gástrica (estimulam secreção de muco e bicarbonato e diminuem secreção ácida) e nos rins (mantêm vasodilatação da arteríola aferente).
- **COX-2 (Induzível / Inflamatória):** Expressa em macrófagos, neutrófilos e sinoviócitos sob estímulo de citocinas inflamatórias, produzindo prostanoides que causam dor periférica (hiperalgesia), vasodilatação inflamatória e febre hipotalâmica.
- **Risco Vital dos AINEs:** Em pacientes hipotensos, desidratados ou com choque prévio, a inibição da síntese intrarrenal de PGE2/PGI2 causa vasoconstrição aguda da arteríola aferente, levando a **Necrose Tubular Aguda Isquêmica**!

---

### 2. O Sistema Opioide e os Receptores Centrais
Os opioides atuam em receptores acoplados à proteína Gi/o na substância gelatinosa do corno dorsal da medula e no encéfalo:
- **Receptores $µ$ (Mu):** Promovem analgesia somática e visceral profunda, sedação, depressão respiratória e diminuição da motilidade digestiva (ex.: **Morfina, Metadona, Fentanil** — agonistas puros $µ$).
- **Receptores $kappa$ (Kappa):** Analgesia visceral moderada e sedação leve (ex.: **Butorfanol** — agonista $kappa$ e antagonista $µ$).
- **Efeito Poupador de Anestésicos:** A administração preventiva de opioides reduz em até 40% a 60% a necessidade de agentes indutores intravenosos e a CAM de anestésicos inalatórios (isoflurano/sevoflurano).`,
        causalChain: {
          cause: 'Aplicação de AINE não-seletivo em paciente chocado ou desidratado',
          mechanism: 'Inibição das prostaglandinas vasodilatadoras compensatórias da arteríola aferente renal',
          effect: 'Queda crítica na pressão de filtração glomerular com isquemia medular renal',
          clinicalMeaning: 'Lesão renal aguda oligúrica/anúrica iatrogênica e uremia fatal'
        }
      },
      {
        id: 'sec_pharma_analg_02',
        type: 'exercise',
        title: 'Caso Clínico: O AINE no Paciente Hipotenso e o Colapso Renal',
        exerciseId: 'ex_pharma_03'
      }
    ]
  },

  {
    id: 'lesson_pharma_04',
    moduleId: 'mod_pharmacology',
    title: 'Uso Racional de Antimicrobianos & Índices PK/PD',
    subtitle: 'Drogas concentração-dependentes vs tempo-dependentes, combate a superbactérias e antibiograma.',
    estimatedMinutes: 24,
    objectives: [
      'Diferenciar os perfis farmacodinâmicos: Concentração-dependentes (Cmax/CMI) vs Tempo-dependentes (%T > CMI)',
      'Justificar cientificamente a administração em Dose Única Diária (SID) para Aminoglicosídeos',
      'Interpretar laudos de Antibiograma (CIM) e prevenir resistência bacteriana em ambiente hospitalar'
    ],
    concepts: ['concept_pharmacology_pk_pd_antimicrobials'],
    sections: [
      {
        id: 'sec_pharma_pkpd_01',
        type: 'theory',
        title: 'Farmacocinética e Farmacodinâmica (PK/PD) de Antimicrobianos',
        contentMarkdown: `# Aula Universitária: Antimicrobianos & Modelagem PK/PD

> 📖 Referência Canônica: Giguère, S. et al. *Antimicrobial Therapy in Veterinary Medicine*, 5th ed. Wiley-Blackwell. CLSI *Performance Standards for Antimicrobial Disk and Dilution Susceptibility Tests for Bacteria Isolated from Animals*.

A prescrição empírica sem fundamentação PK/PD é o principal motor de seleção de superbactérias multirresistentes (MRSA, MRSP e enterobactérias produtoras de ESBL):

### 1. Classificação Farmacodinâmica dos Antimicrobianos

\`\`\`mermaid
flowchart TD
    A["Classes de Antimicrobianos"] --> B["Concentração-Dependentes"]
    A --> C["Tempo-Dependentes"]
    
    B --> D["Fluorquinolonas (Enrofloxacina, Marbofloxacina)"]
    B --> E["Aminoglicosídeos (Amicacina, Gentamicina)"]
    D --> F["Alvo PK/PD: Cmax / CMI > 10 a 12"]
    E --> F
    
    C --> G["Beta-lactâmicos (Penicilinas, Cefalosporinas, Carbapenêmicos)"]
    C --> H["Alvo PK/PD: %T > CMI por mais de 50% a 70% do intervalo"]
\`\`\`

---

### 2. A Ciência da Dose Única Diária de Aminoglicosídeos
- Os aminoglicosídeos ligam-se à subunidade ribossômica 30S bacteriana. A taxa e a velocidade de morte bacteriana dependem da altura do pico sérico atingido ($C_max$).
- Possuem prolongado **Efeito Pós-Antibiótico (EPA)**: a bactéria continua com o crescimento inibido por horas mesmo após as concentrações plasmáticas caírem abaixo da CMI.
- **Prevenção da Nefrotoxicidade:** A captação do aminoglicosídeo pelos túbulos renais proximais é um processo carreador-saturável. Quando administrado em **dose única diária (SID)**, o pico alto satura rapidamente a absorção renal e, nas 18 a 20 horas seguintes, as concentrações plasmáticas caem a níveis mínimos (vale $< 2 µg/mL$), permitindo o efluxo e clearance celular, reduzindo drasticamente a necrose tubular!`,
        causalChain: {
          cause: 'Aplicação de regime posológico de aminoglicosídeo em Dose Única Diária (SID)',
          mechanism: 'Atingimento de pico Cmax/CMI > 10 com longo período de concentrações plasmáticas de vale seguras',
          effect: 'Morte bacteriana hiperaguda com saturação transitória dos carreadores tubulares renais',
          clinicalMeaning: 'Erradicação eficaz da infecção com proteção total contra insuficiência renal intrínseca'
        }
      },
      {
        id: 'sec_pharma_pkpd_02',
        type: 'exercise',
        title: 'Verificação PK/PD: A Estratégia de Dose Única na Terapia com Aminoglicosídeos',
        exerciseId: 'ex_pharma_04'
      }
    ]
  },

  {
    id: 'lesson_pharma_05',
    moduleId: 'mod_pharmacology',
    title: 'Toxicologia Clínica Veterinária & Emergências Antídotas',
    subtitle: 'Organofosforados, carbamatos, piretroides, rodenticidas anticoagulantes e antagonistas específicos.',
    estimatedMinutes: 24,
    objectives: [
      'Reconhecer a síndrome colinérgica aguda por organofosforados e carbamatos (miose, hipersalivação, broncorreia)',
      'Executar o protocolo de atropinização e uso de pralidoxima em intoxicações por inibidores da colinesterase',
      'Dominar a farmacoterapia das coagulopatias por rodenticidas antivitamina K com fitomenadiona (vitamina K1)'
    ],
    concepts: ['concept_pharmacology_clinical_toxicology', 'concept_toxicity_overdose'],
    sections: [
      {
        id: 'sec_pharma_tox_01',
        type: 'theory',
        title: 'Emergências Toxicológicas e Terapêutica Antídota Hospitalar',
        contentMarkdown: `# Aula Universitária: Toxicologia Clínica — Síndromes e Antídotos Específicos

> 📖 Referência Canônica: Peterson, M. E.; Talcott, P. A. *Small Animal Toxicology*, 3rd ed. Elsevier. Spinosa, H. S. et al. *Toxicologia Aplicada à Medicina Veterinária*.

Nas emergências toxicológicas, o reconhecimento das grandes síndromes farmacológicas dita a administração imediata de antídotos específicos que salvam vidas:

### 1. Síndrome Colinérgica (Organofosforados & Carbamatos)
- **Mecanismo:** Inibem a enzima **Acetilcolinesterase (AChE)** por fosforilação ou carbamilação. A acetilcolina acumula-se nas fendas sinápticas.
- **Sinais Muscarínicos (Mnemônico SLUDGE-BBB):**
  - **S**alivação profusa, **L**acrimejamento, **U**rinação involuntária, **D**iarreia/Defecação, **G**astrointestinal (êmese), **E**nese (miose puntiforme).
  - **B**roncorreia (pulmão cheio de líquido espumoso), **B**roncoespasmo e **B**radicardia.
- **Sinais Nicotínicos:** Fasciculações musculares em músculos da face e membros, fraqueza e paralisia diafragmática.
- **Protocolo Antídoto:**
  1. **Sulfato de Atropina:** $0,2 a }0,5 mg/kg}$ ($1/4$ da dose IV lenta e o restante IM ou SC). O objetivo **NÃO é dilatar a pupila**, mas sim **secar as secreções brônquicas e elevar a FC**. Repetir conforme necessário.
  2. **Pralidoxima (2-PAM):** $20 mg/kg}$ IV lenta em 30 min nas primeiras 24 horas para desfosforilar a AChE antes do envelhecimento químico da ligação.

---

### 2. Rodenticidas Anticoagulantes (Cumarínicos: Brodifacoum, Bromadiolona)
- **Mecanismo:** Inibem irreversivelmente a enzima **Vitamina K1 2,3-epóxido-redutase**.
- **Fisiopatologia:** Sem a regeneração da Vitamina K1 reduzida hidroquinona, os fatores da coagulação dependentes de vitamina K (**Fatores II, VII, IX e X**) não sofrem gama-carboxilação de resíduos de ácido glutâmico, perdendo a capacidade de quelar cálcio e fixar-se aos fosfolipídios plaquetários.
- **Quadro Clínico:** Sangramentos cavitários silenciosos maciços (hemotórax, hemoperitônio) após 48 a 72 horas (tempo de consumo dos fatores pré-formados).
- **Antídoto Canônico:** **Vitamina K1 (Fitomenadiona)** na dose de $2,5 a }5,0 mg/kg}$ por via oral durante 28 a 30 dias (tempo de meia-vida dos cumarínicos de 2ª geração).`,
        causalChain: {
          cause: 'Ingestão de inseticida organofosforado com inibição irreversível da acetilcolinesterase',
          mechanism: 'Acúmulo maciço de acetilcolina com estimulação descontrolada dos receptores muscarínicos pulmonares',
          effect: 'Hipersecreção brônquica exuberante e broncoconstrição mecânica com bradicardia sinusal severa',
          clinicalMeaning: 'Asfixia respiratória hipóxica aguda e parada cardiorrespiratória reversível por Atropina'
        }
      },
      {
        id: 'sec_pharma_tox_02',
        type: 'exercise',
        title: 'Desafio Emergencial: A Síndrome Colinérgica e o Protocolo de Atropinização',
        exerciseId: 'ex_pharma_05'
      }
    ]
  }
];
