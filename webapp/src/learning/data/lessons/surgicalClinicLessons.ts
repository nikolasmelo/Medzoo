// src/learning/data/lessons/surgicalClinicLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const SURGICAL_CLINIC_EXERCISES: Record<string, LearningExercise> = {
  ex_surg_clin_01: {
    id: 'ex_surg_clin_01',
    conceptId: 'concept_surgical_exploratory_celiotomy',
    type: 'multiple_choice',
    prompt: 'Durante uma celiotomia exploratória em uma cadela com febre de origem obscura, perda de peso e dor abdominal difusa, o cirurgião instala o afastador autoestático de Balfour. Segundo a técnica cirúrgica padronizada de exploração cavitária metódica dos quatro quadrantes, qual é a sequência anatômica canônica e os pontos de inspeção obrigatórios para não omitir afecções ocultas?',
    options: [
      {
        id: 'opt_1',
        text: 'Inspeção metódica crânio-caudal dos 4 quadrantes: 1º Cranial direito (lobo caudado do fígado, vesícula biliar, rim direito, adrenal direita e duodeno descendente com pâncreas); 2º Cranial esquerdo (estômago, baço, rim esquerdo, adrenal esquerda e lobo esquerdo do pâncreas); 3º Central (todas as alças de jejuno da flexura duodenojejunal ao ceco e linfonodos mesentéricos); 4º Caudal (bexiga, próstata/útero, cólon descendente e anéis inguinais).',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A laparotomia exploratória só é verdadeiramente exploratória se todo o abdômen for inspecionado de maneira sistemática e padronizada. O uso do duodeno descendente como "guia retrátil" para expor o espaço peritoneal direito e do mesocólon descendente para o espaço esquerdo permite inspecionar rins e adrenais sem omitir patologias retroperitoneais ou no lobo pancreático profundo.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Olhar apenas o estômago e fechar rapidamente a parede abdominal em menos de 5 minutos se não houver sangue livre visível.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e negligente. A exploração superficial omite neoplasias de adrenal, corpos estranhos no íleo terminal e abscessos pancreáticos.',
        conceptualErrorCategory: 'superficial_examination_error'
      },
      {
        id: 'opt_3',
        text: 'Retirar o baço e ambos os rins profilaticamente para melhorar a visão do assoalho pélvico.',
        isCorrect: false,
        pedagogicalFeedback: 'Catastrófico! A remoção de órgãos nobres saudáveis sem indicação patológica é iatrogenia gravíssima.',
        conceptualErrorCategory: 'unjustified_organ_removal'
      },
      {
        id: 'opt_4',
        text: 'Abrir o lúmen de todas as alças intestinais a cada 5 centímetros para palpação interna da mucosa com o dedo.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e contaminante. Enterotomias múltiplas desnecessárias provocam contaminação peritoneal massiva com fezes e alto risco de deiscência.',
        conceptualErrorCategory: 'unjustified_enterotomy'
      }
    ],
    pedagogicalExplanation: 'A exploração cavitária regrada dos quatro quadrantes utilizando o duodeno e o mesocólon como cortinas anatômicas garante a visualização completa do abdômen cranial, médio, caudal e retroperitônio.',
    causalChain: {
      cause: 'Exploração cavitária desorganizada e assistemática na celiotomia de emergência',
      mechanism: 'Omissão de lesões no lobo direito do pâncreas ou perfuração oculta no íleo terminal retroperitoneal',
      effect: 'Persistência do foco infeccioso/inflamatório no pós-operatório',
      clinicalMeaning: 'Piora clínica do paciente, sepse peritoneal e necessidade de relaparotomia com alta taxa de mortalidade'
    }
  },

  ex_surg_clin_02: {
    id: 'ex_surg_clin_02',
    conceptId: 'concept_surgical_gi_anastomosis',
    type: 'multiple_choice',
    prompt: 'Após realizar uma enterectomia término-terminal com padrão simples separado em um cão acometido por corpo estranho obstrutivo, qual manobra semiotécnica intraoperatória é obrigatória para certificar que a linha de sutura não apresenta microvazamentos antes de fechar o abdômen?',
    options: [
      {
        id: 'opt_1',
        text: 'Oclusão digital delicada de 8 a 10 cm do segmento contendo a anastomose, injeção intraluminal de 10 a 15 mL de solução salina estéril com agulha fina (25-26G) e observação de estanqueidade sob leve distensão fisiológica (teste hidrostático).',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O teste hidrostático de extravasamento permite detectar fístulas mínimas entre os nós antes da reposição das alças no abdômen. Se houver gotejamento, um ponto seromuscular adicional corrige a falha imediatamente, prevenindo peritonite séptica pós-operatória.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Encher a cavidade abdominal inteira com 5 litros de água sanitária e ligar um aspirador de sucção forte.',
        isCorrect: false,
        pedagogicalFeedback: 'Completamente incorreto e fatal. O uso de desinfetantes no peritônio causa peritonite química letal imediata.',
        conceptualErrorCategory: 'chemical_peritonitis_error'
      },
      {
        id: 'opt_3',
        text: 'Apertar a alça intestinal com força máxima com uma pinça de dente-de-rato para espremer o conteúdo.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Esmagar a alça rompe a anastomose recém-feita e necrosa a parede intestinal.',
        conceptualErrorCategory: 'crushing_trauma_error'
      },
      {
        id: 'opt_4',
        text: 'Não realizar nenhum teste e dar alta hospitalar com ração seca dura após 1 hora da cirurgia.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Sem o teste hidrostático, fístulas passam despercebidas com risco de óbito por sepse.',
        conceptualErrorCategory: 'omission_error'
      }
    ],
    pedagogicalExplanation: 'O teste de estanqueidade salina é o padrão-ouro de segurança para validar suturas em vísceras ocas gastrointestinais antes da omentopexia e do fechamento abdominal.',
    causalChain: {
      cause: 'Omissão do teste hidrostático intraoperatório na anastomose intestinal',
      mechanism: 'Microfístula entre pontos seromusculares adjacentes não é diagnosticada na mesa cirúrgica',
      effect: 'Extravasamento progressivo de conteúdo entérico com bactérias gram-negativas para o peritônio',
      clinicalMeaning: 'Peritonite bacteriana fulminante, sepse distributiva e necessidade de reintervenção de emergência'
    }
  },

  ex_surg_clin_03: {
    id: 'ex_surg_clin_03',
    conceptId: 'concept_surgical_urinary_cystotomy',
    type: 'multiple_choice',
    prompt: 'Um gato macho castrado de 5 anos apresenta obstrução uretral recorrente por urólitos de estruvita refratária ao tratamento clínico e cateterismos repetidos que causaram estenose cicatricial irreversível da uretra peniana distal. Qual procedimento cirúrgico definitivo é indicado e qual o detalhe técnico anatômico crucial para garantir um estoma largo que não sofra estenose pós-operatória?',
    options: [
      {
        id: 'opt_1',
        text: 'Uretrostomia Perineal (Técnica de Wilson & Harrison): dissecção meticulosa e liberação proximal do pênis até as Glândulas Bulbouretrais, onde a uretra se alarga consideravelmente (diâmetro luminal 3 a 4 vezes maior), permitindo sutura mucocutânea sem tensão.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! A uretra peniana do gato é extremamente estreita no terço distal. A uretrostomia perineal só atinge sucesso definitivo se o cirurgião dissecar os ligamentos isquiocavernosos e as inserções do músculo retrator do pênis até alcançar a altura das Glândulas Bulbouretrais (uretra pélvica/isquiática), cujo lúmen é largo o suficiente para permitir a passagem livre de uma sonda de 8 a 10 Fr.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Nefrectomia bilateral completa com desvio do fluxo urinário para a vesícula biliar.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e absurdo. A remoção dos dois rins causa anúria imediata e óbito por uremia em menos de 48 horas.',
        conceptualErrorCategory: 'fatal_procedure_error'
      },
      {
        id: 'opt_3',
        text: 'Sutura simples da glande do pênis com categute 1 sem dissecção muscular.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Suturar a glande causaria oclusão uretral total mecânica aguda.',
        conceptualErrorCategory: 'occlusive_error'
      },
      {
        id: 'opt_4',
        text: 'Amputação da bexiga com exteriorização direta dos ureteres na pele abdominal.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A uretrostomia perineal preserva a bexiga urinária e os esfíncteres nervosos continentes, modificando apenas a saída uretral terminal.',
        conceptualErrorCategory: 'radical_misattribution'
      }
    ],
    pedagogicalExplanation: 'A uretrostomia perineal felina exige dissecção proximal até as glândulas bulbouretrais para anastomosar a porção larga da uretra à pele perineal com fio monofilamentar 4-0 ou 5-0.',
    causalChain: {
      cause: 'Falha na dissecção proximal até as glândulas bulbouretrais na uretrostomia perineal',
      mechanism: 'Sutura da pele na porção ainda estreita da uretra peniana sob tensão mecânica',
      effect: 'Fibrose cicatricial circunferencial exuberante com estenose secundária do estoma',
      clinicalMeaning: 'Reobstrução urinária precoce com retenção vesical, azotemia pós-renal e necessidade de uretrostomia pré-púbica'
    }
  },

  ex_surg_clin_04: {
    id: 'ex_surg_clin_04',
    conceptId: 'concept_surgical_emergency_colic',
    type: 'multiple_choice',
    prompt: 'Durante a laparotomia exploratória de emergência em um cavalo Quarto de Milha com cólica por torção de cólon maior de 360°, a alça exteriorizada apresenta coloração violácea escura e edema da parede. Após o cirurgião desrotacionar o órgão e irrigar com salina aquecida, qual sinal clínico-patológico confirma que o tecido está viável e que NÃO será necessária a enterectomia/ressecção de emergência?',
    options: [
      {
        id: 'opt_1',
        text: 'A cor escura gradualmente clareia para vermelho-vivo/róseo, os pulsos arteriais mesentéricos retornam à palpação digital e ondas peristálticas espontâneas voltam a ocorrer na alça desrotacionada.',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! A restauração da circulação após o desfazimento do estrangulamento promove reperfusão. O retorno da coloração rósea, a pulsação arterial periférica e a motilidade espontânea atestam que a barreira mucosa e a camada muscular estão salvas.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'A alça adquire coloração verde-musgo fosca com cheiro de putrefação e descamação completa da serosa.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Verde-musgo fosco e odor fétido indicam necrose transmural irreversível e gangrena, exigindo ressecção cirúrgica imediata sob risco de sepse.',
        conceptualErrorCategory: 'necrosis_misattribution'
      },
      {
        id: 'opt_3',
        text: 'A alça fica totalmente empedrada e rígida como um pedaço de madeira sem nenhum movimento.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Rigidez cadavérica em alça intestinal indica trombose mesentérica maciça e infarto isquêmico irreversível.',
        conceptualErrorCategory: 'infarction_confusion'
      },
      {
        id: 'opt_4',
        text: 'A pressão arterial do cavalo cai a zero no monitor anestésico.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Pressão arterial zero indica parada cardiorrespiratória e não viabilidade intestinal.',
        conceptualErrorCategory: 'cardiac_arrest_confusion'
      }
    ],
    pedagogicalExplanation: 'A avaliação cuidadosa dos 4 critérios de viabilidade (cor, pulso, motilidade e brilho da serosa) após 10-15 minutos de reperfusão define se a ressecção de alça é mandatória.',
    causalChain: {
      cause: 'Descompressão e desrotação precoce de cólon estrangulado antes da necrose transmural',
      mechanism: 'Restauração do fluxo arterial e drenagem venosa mesentérica com reoxigenação celular',
      effect: 'Retorno da motilidade ativa e recoloração rósea da serosa',
      clinicalMeaning: 'Preservação do órgão sem necessidade de ressecção complexa, com excelente prognóstico'
    }
  },

  ex_surg_clin_05: {
    id: 'ex_surg_clin_05',
    conceptId: 'concept_surgical_wildlife_peculiarities',
    type: 'multiple_choice',
    prompt: 'Em uma celiotomia de emergência para ovocentese e extração de ovo retido em uma Arara-canindé de 1,1 kg sob anestesia inalatória, o anestesista assistente conecta o circuito e realiza ventilação por pressão positiva intermitente (IPPV) atingindo pressões de pico de 25 a 30 cmH2O no manômetro respiratório. Qual a consequência biomecânica imediata e potencialmente fatal dessa manobra nesta espécie?',
    options: [
      {
        id: 'opt_1',
        text: 'Barotrauma com ruptura das paredes avasculares delgadas dos sacos aéreos, resultando em enfisema subcutâneo difuso, perda do fluxo unidirecional parabrônquico e parada respiratória por asfixia mecânica.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! As aves possuem sistema respiratório único com sacos aéreos sem septos alveolares espessos e sem diafragma muscular. Pressões de pico acima de 12-15 cmH2O rompem as membranas dos sacos aéreos como balões de festa estourando, causando colapso da respiração parabrônquica contínua.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Crescimento imediato de penas na cavidade celomática do animal.',
        isCorrect: false,
        pedagogicalFeedback: 'Absurdo. A ventilação mecânica não estimula folículos de penas na cavidade interna.',
        conceptualErrorCategory: 'absurd_misattribution'
      },
      {
        id: 'opt_3',
        text: 'Aumento instantâneo da capacidade de voo da arara por enchimento de ar nas asas.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O enfisema subcutâneo e a ruptura celomática causam dor extrema e asfixia letal.',
        conceptualErrorCategory: 'fantasy_misconception'
      },
      {
        id: 'opt_4',
        text: 'Queda do bico córneo da ave por excesso de oxigênio nas narinas.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A queratina ranfoteca do bico não se desprende por alterações de pressão respiratória.',
        conceptualErrorCategory: 'beak_detachment_confusion'
      }
    ],
    pedagogicalExplanation: 'Aves requerem ventilação mecânica de altíssima delicadeza com pressão de pico estritamente limitada a 10-15 cmH2O devido à fragilidade dos sacos aéreos.',
    causalChain: {
      cause: 'Pressão ventilatória excessiva (> 15 cmH2O) aplicada aos pulmões e sacos aéreos de aves',
      mechanism: 'Ruptura mecânica da membrana unicelular dos sacos aéreos celomáticos',
      effect: 'Extravasamento maciço de gás anestésico para a cavidade peritoneal e tecido subcutâneo',
      clinicalMeaning: 'Enfisema subcutâneo grave, perda de ventilação parabrônquica e óbito por asfixia aguda'
    }
  }
};

export const SURGICAL_CLINIC_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_surg_clin_celiotomy',
    moduleId: 'mod_surgical_clinic',
    title: 'Celiotomia Exploratória em Pequenos Animais & Inventário',
    subtitle: 'Acesso xifopúbico, afastador Balfour e varredura metódica dos quatro quadrantes abdominais.',
    estimatedMinutes: 24,
    objectives: [
      'Executar a celiotomia pela linha média ventral xifopúbica com hemostasia metódica',
      'Instalar o afastador autoestático de Balfour e realizar o inventário completo dos 4 quadrantes',
      'Realizar biópsias hepáticas em guilhotina e biópsias intestinais de espessura total'
    ],
    concepts: ['concept_surgical_exploratory_celiotomy', 'concept_surgical_halsted_principles'],
    sections: [
      {
        id: 'sec_surg_celio_01',
        type: 'theory',
        title: 'Técnica Cirúrgica da Celiotomia Exploratória Sistemática',
        contentMarkdown: `# Aula Universitária: Celiotomia Exploratória & Inventário Cavitário Metódico

> 📖 Referência Canônica: Fossum, T. W. *Small Animal Surgery*, 5th ed. Elsevier, Cap. 18: Surgery of the Abdominal Cavity. Tobias, K. M.; Johnston, S. A. *Veterinary Surgery: Small Animal*, 2nd ed.

A laparotomia ou celiotomia exploratória é o procedimento cirúrgico diagnóstico e terapêutico definitivo do abdômen agudo e de massas cavitárias em cães e gatos:

### 1. Abertura da Cavidade Abdominal
1. **Posicionamento:** Decúbito dorsal estrito em calha cirúrgica com membros fixados.
2. **Incisão da Pele e Subcutâneo:** Incisão pela linha média ventral do processo xifoide até o púbis. Em machos caninos, realiza-se a incisão parapeniana contornando o prepúcio e ligando os ramos da artéria e veia epigástricas caudais superficiais.
3. **Diérese da Linha Alba:** Pinçamento com pinça dente-de-rato e tração ventral da fáscia para elevar a parede (manobra de segurança que impede a perfuração acidental do baço ou bexiga distendida). Pequena incisão inicial com lâmina de bisturi voltada para cima, seguida de extensão cranial e caudal com tesoura de Mayo.
4. **Instalação do Afastador de Balfour:** As lâminas laterais afastam as paredes musculares e a lâmina central retrátil traciona o púbis caudoventralmente.

---

### 2. O Inventário Canônico dos Quatro Quadrantes
Para não omitir lesões em órgãos profundos, o cirurgião executa a varredura anatômica obrigatória:
- **1º Quadrante Cranial Direito:** Usando o duodeno descendente como cortina para afastar as vísceras para a esquerda: inspeciona-se o lobo caudado do fígado, vesícula biliar, ducto colédoco, rim direito, glândula adrenal direita e o lobo direito do pâncreas.
- **2º Quadrante Cranial Esquerdo:** Usando o mesocólon descendente como cortina para afastar as vísceras para a direita: inspeciona-se estômago (cárdia, fundo, corpo e antro), baço, rim esquerdo, adrenal esquerda e lobo esquerdo do pâncreas.
- **3º Quadrante Central (Trato Gastrointestinal):** Exteriorização metódica e palpação digital contínua da flexura duodenojejunal, todas as alças de jejuno, íleo terminal, ceco e linfonodos mesentéricos.
- **4º Quadrante Caudal (Pélvico):** Bexiga urinária, trígono vesical com inserção dos ureteres, próstata em machos / útero em fêmeas, cólon descendente, reto e anéis inguinais internos.`,
        causalChain: {
          cause: 'Incisão celiotômica curta e omissão da inspeção do quadrante cranial retroperitoneal',
          mechanism: 'Falha em identificar microperfuração isquêmica na porção cranial do duodeno',
          effect: 'Extravasamento silencioso de bile e suco pancreático para o omento e retroperitônio',
          clinicalMeaning: 'Peritonite química e séptica grave após a alta hospitalar e choque distributivo fatal'
        }
      },
      {
        id: 'sec_surg_celio_02',
        type: 'exercise',
        title: 'Verificação Operatória: Inventário Sistemático dos Quatro Quadrantes',
        exerciseId: 'ex_surg_clin_01'
      }
    ]
  },

  {
    id: 'lesson_surg_clin_enterectomy',
    moduleId: 'mod_surgical_clinic',
    title: 'Técnica de Enterectomia & Anastomose Gastrointestinal',
    subtitle: 'Isquemia transmural, ressecção em cunha, sutura de alça e teste hidrostático de estanqueidade.',
    estimatedMinutes: 25,
    objectives: [
      'Avaliar a viabilidade tecidual de alças intestinais por pulsação mesentérica, cor e peristaltismo',
      'Realizar ligadura de arcadas mesentéricas com preservação do suprimento vascular das bordas',
      'Executar anastomose término-terminal aposicional e teste hidrostático de extravasamento'
    ],
    concepts: ['concept_surgical_gi_anastomosis'],
    sections: [
      {
        id: 'surg_clin_ent_sec_1',
        type: 'theory',
        title: 'Princípios da Ressecção & Anastomose Intestinal',
        contentMarkdown: `# Aula Universitária: Enterectomia & Anastomose Intestinal Término-Terminal

> 📖 Referência Canônica: Fossum, T. W. *Small Animal Surgery*, 5th ed. Tobias, K. M.; Johnston, S. A. *Veterinary Surgery: Small Animal*, 2nd ed.

A enterectomia é indicada em corpos estranhos obstrutivos com necrose transmural, intussuscepções irredutíveis e neoplasias intestinais:

### 1. Critérios de Viabilidade da Alça Intestinal
Antes de decidir pela ressecção, avalie os 4 sinais clínicos:
1. **Coloração:** Róbusta/rósea indica viabilidade. Púrpura escura, verde-acinzentada ou preta indica necrose irreversível.
2. **Pulsação Arterial Mesentérica:** Palpação digital de pulso nas pequenas artérias da arcada mesentérica adjacente.
3. **Peristaltismo:** Estimulação mecânica suave (pinçamento atraumático) desencadeia onda motora se o tecido estiver vivo.
4. **Espessura e Brilho da Serosa:** Tecido necrótico perde o brilho seroso, torna-se aveludado, fino e friável.

---

### 2. Técnica da Anastomose Término-Terminal
- **Incisão Oblíqua:** Seccionar as bordas com leve angulação oblíqua (removendo mais tecido na borda antimesentérica do que na mesentérica). Isso garante excelente vascularização da margem livre e iguala diâmetros luminais desiguais.
- **Sutura Aposicional:** Pontos simples separados com **Polidioxanona (PDS) ou Monocryl 3-0 ou 4-0** com agulha cilíndrica atraumática, espaçados de 2 a 3 mm da borda e 2 a 3 mm entre si.
- **Camada Crítica:** A **submucosa** é a única camada intestinal rica em colágeno fibrilar capaz de reter os pontos. A agulha DEVE transfixar a submucosa!
- **Teste Hidrostático de Extravasamento:** Ocluir 10 cm de alça contendo a anastomose com os dedos indicador e médio. Injetar 10 a 15 mL de solução salina 0,9% com seringa e agulha 25G até distender a alça sob pressão fisiológica. Não pode haver vazamento de líquido entre os pontos!
- **Omentopexia:** Envolver a linha de sutura com o omento maior (*epíplon*), que deposita fibrina em 2 horas e fornece rica neovascularização protetora.`,
        causalChain: {
          cause: 'Falha em capturar a camada submucosa na sutura entérica ou aperto excessivo dos pontos com isquemia',
          mechanism: 'As bordas da mucosa se separam e a falta de colágeno da submucosa permite o corte das fibras pelo fio',
          effect: 'Abertura de microfístula anastomótica no 3º a 5º dia pós-operatório com extravasamento de fezes',
          clinicalMeaning: 'Peritonite séptica generalizada hiperaguda, choque séptico distributivo e óbito se não houver laparotomia imediata'
        }
      },
      {
        id: 'surg_clin_ent_sec_2',
        type: 'exercise',
        title: 'Desafio Operatório: Validação Hidrostática da Anastomose',
        exerciseId: 'ex_surg_clin_02'
      }
    ]
  },

  {
    id: 'lesson_surg_clin_urology',
    moduleId: 'mod_surgical_clinic',
    title: 'Cirurgia do Trato Urinário: Cistotomia & Uretrostomia Perineal',
    subtitle: 'Extração de urólitos, cistorrafia aposicional monofilamentar e técnica de Wilson & Harrison em felinos.',
    estimatedMinutes: 25,
    objectives: [
      'Executar a cistotomia ventral com hidrolavagem retrógrada e anterógrada e cistorrafia hermética',
      'Descrever a técnica de uretrostomia perineal felina com dissecção até as glândulas bulbouretrais',
      'Prevenir fístulas de urina (uroperitônio) e estenoses cicatriciais uretrais pós-operatórias'
    ],
    concepts: ['concept_surgical_urinary_cystotomy', 'concept_suture_patterns_synthesis'],
    sections: [
      {
        id: 'sec_surg_uro_01',
        type: 'theory',
        title: 'Cirurgia da Bexiga e Uretra em Pequenos Animais',
        contentMarkdown: `# Aula Universitária: Cirurgia Urológica — Cistotomia & Uretrostomia Perineal

> 📖 Referência Canônica: Fossum, T. W. *Small Animal Surgery*, 5th ed. Slatter, D. *Textbook of Small Animal Surgery*.

As afecções obstrutivas do trato urinário inferior são emergências frequentes que requerem abordagem anatômica rigorosa:

### 1. Cistotomia para Remoção de Cálculos Vesicais
1. **Acesso:** Celiotomia retro-umbilical até o púbis.
2. **Exteriorização:** A bexiga é isolada com compressas estéreis úmidas e mantida em posição com dois **pontos de sustentação (pontos de reparo)** com fio monofilamentar no ápice vesical.
3. **Incisão Ventral:** Incisão longitudinal na face ventral da bexiga (área avascular e de fácil acesso, longe dos ureteres e do colo vesical).
4. **Lavagem Uretral Normógrada e Retrógrada:** Passagem de sonda uretral flexível com lavagem vigorosa sob pressão com salina morna para empurrar todos os cálculos alojados na uretra de volta para o lúmen da bexiga (uretrohidropropulsão cirúrgica).
5. **Cistorrafia:** Padrão contínuo ou interrompido aposicional na camada seromuscular com **PDS II ou Monocryl 3-0 ou 4-0** com agulha atraumática. **O fio NÃO deve penetrar na mucosa vesical**, pois o contato do material de sutura com a urina atua como núcleo de precipitação mineral e recorrência de urólitos!

---

### 2. Uretrostomia Perineal Felina (Técnica de Wilson & Harrison)
Indicada em machos com obstruções uretrais recorrentes ou necrose da uretra peniana pós-cateterismo:
- **O Ponto Crítico da Cirurgia:** A uretra peniana do gato é extremamente estreita. O cirurgião deve dissecar os músculos isquiocavernosos, isquiobulbares e o ligamento suspensor do pênis, liberando o órgão até atingir as **Glândulas Bulbouretrais**.
- Na altura dessas glândulas, a uretra transita para a porção pélvica/isquiática, onde o **diâmetro luminal é 3 a 4 vezes mais largo**.
- Realiza-se a abertura longitudinal da uretra dorsalmente e a sutura mucocutânea na pele do períneo com pontos simples separados de **Nylon ou Monocryl 4-0 ou 5-0** com agulha cortante delicada.`,
        causalChain: {
          cause: 'Dissecção incompleta na uretrostomia perineal felina parando antes das glândulas bulbouretrais',
          mechanism: 'Sutura mucocutânea executada na uretra peniana ainda estreita sob tensão elástica',
          effect: 'Formação de tecido de granulação cicatricial exuberante com estenose concêntrica do estoma',
          clinicalMeaning: 'Reobstrução urinária grave, retenção vesical dolorosa e azotemia pós-renal recorrente'
        }
      },
      {
        id: 'sec_surg_uro_02',
        type: 'exercise',
        title: 'Caso Clínico: A Uretrostomia Perineal Felina e as Glândulas Bulbouretrais',
        exerciseId: 'ex_surg_clin_03'
      }
    ]
  },

  {
    id: 'lesson_surg_clin_colic',
    moduleId: 'mod_surgical_clinic',
    title: 'Cirurgia Abdominal de Urgência & Síndrome Cólica',
    subtitle: 'Laparotomia exploratória pela linha alba em equinos, exteriorização visceral e choque endotóxico.',
    estimatedMinutes: 25,
    objectives: [
      'Reconhecer as indicações cirúrgicas absolutas de abdômen agudo em equinos',
      'Compreender a laparotomia exploratória pela linha média ventral de 30-40 cm em decúbito dorsal',
      'Manejar a descompressão do cólon maior, volvo de 360° e profilaxia de endotoxemia'
    ],
    concepts: ['concept_surgical_emergency_colic'],
    sections: [
      {
        id: 'surg_clin_colic_sec_1',
        type: 'theory',
        title: 'Abordagem Cirúrgica Emergencial da Cólica Equina',
        contentMarkdown: `# Aula Universitária: Laparotomia Exploratória em Equinos & Síndrome Cólica

> 📖 Referência Canônica: Auer, J. A.; Stick, J. A. *Equine Surgery*, 5th ed. Elsevier. White, N. A. et al. *The Equine Acute Abdomen*, Wiley-Blackwell.

A síndrome cólica em cavalos é a principal emergência médica e cirúrgica da espécie. A decisão entre tratamento clínico e laparotomia exploratória deve ser tomada nas primeiras horas:

### Indicações de Cirurgia Imediata:
1. Dor intratável refratária a analgésicos potentes (Flunixin Meglumine e Xilazina).
2. Refluxo gástrico espontâneo contínuo (> 5 a 8 litros com odor fétido).
3. Linha tóxica arroxeada na gengiva com TPC > 3,5s e frequência cardíaca > 60-70 bpm.
4. Paracentese abdominal com líquido peritoneal turvo/alaranjado, proteínas > 3,5 g/dL e lactato peritoneal > 2x o lactato sérico.

### Tempos Cirúrgicos Fundamentais:
- **Incisão da Linha Média Ventral:** Incisão xifopúbica de 30 a 40 cm através da linha alba em equino sob anestesia inalatória em decúbito dorsal.
- **Varredura e Exteriorização Metódica:** O cirurgião localiza o ceco como ponto de referência anatômica (tênias e haustros) e exterioriza a flexura pélvica do cólon maior sobre uma mesa estéril de cólica com lavagem contínua com salina aquecida.
- **Pelvic Flexure Enterotomy (Enterotomia da Flexura Pélvica):** Esvaziamento de impactações por hidrolavagem.
- **Torções e Volvos (180° a 360°):** Desrotação manual delicada após descompressão de gases para aliviar o retorno venoso mesentérico.`,
        causalChain: {
          cause: 'Atraso na intervenção cirúrgica de torção de cólon maior com isquemia estrangulativa',
          mechanism: 'Trombose microvascular com lise da barreira mucosa intestinal e translocação massiva de LPS para o peritônio',
          effect: 'Tempestade de citocinas inflamatórias, coagulopatia intravascular disseminada (CIVD) e laminite aguda de apoio',
          clinicalMeaning: 'Colapso cardiovascular endotóxico irreversível na mesa de cirurgia ou perda funcional dos cascos'
        }
      },
      {
        id: 'surg_clin_colic_sec_2',
        type: 'exercise',
        title: 'Conduta de Campo: Avaliação de Isquemia Cólica Reversível no Equino',
        exerciseId: 'ex_surg_clin_04'
      }
    ]
  },

  {
    id: 'lesson_surg_clin_wildlife',
    moduleId: 'mod_surgical_clinic',
    title: 'Particularidades Cirúrgicas em Aves e Répteis Silvestres',
    subtitle: 'Barotrauma de sacos aéreos, hemostasia miniaturizada e sutura de pele aviar.',
    estimatedMinutes: 20,
    objectives: [
      'Adaptar os tempos cirúrgicos à ausência de diafragma muscular em aves e répteis',
      'Prevenir o barotrauma dos sacos aéreos por ventilação com pressão controlada',
      'Utilizar instrumentação microcirúrgica, eletrocirurgia bipolar e fios 4-0/5-0'
    ],
    concepts: ['concept_surgical_wildlife_peculiarities'],
    sections: [
      {
        id: 'surg_clin_wild_sec_1',
        type: 'theory',
        title: 'Cirurgia em Espécies Não-Convencionais',
        contentMarkdown: `# Aula Universitária: Cirurgia de Animais Selvagens — Aves e Répteis

> 📖 Referência Canônica: Doneley, B. *Avian Medicine and Surgery in Practice*, 2nd ed. CRC Press. Mader, D. R. *Reptile Medicine and Surgery*, 2nd ed. Elsevier.

Animais silvestres não são "pequenos cães". A anatomia comparada dita regras cirúrgicas exclusivas:

### 1. Aves Silvestres (Psitacídeos, Rapinantes, Passeriformes):
- **Sistema Respiratório Avançado sem Diafragma:** Pulmões rígidos conectados a 9 sacos aéreos de paredes transparentes extremamente finas. A ventilação mecânica assistida (IPPV) deve ter pressão de pico **rigorosamente inferior a 12 a 15 cmH2O**. Pressões maiores causam ruptura de sacos aéreos, enfisema subcutâneo grave e pneumotórax.
- **Pele Ultrafina e Avascular:** A derme das aves tem espessura de papel celofane e pouca elasticidade. Deve ser suturada com fios monofilamentares ultrafinos (Monocryl ou PDS 4-0 ou 5-0) com agulha cilíndrica delicada.
- **Tolerância Hemorrágica:** Uma ave de 100g (calopsita) possui volume sanguíneo total de apenas 10 mL. A perda de míseros 1 mL de sangue representa 10% da volemia total (choque hipovolêmico crítico). Uso obrigatório de **eletrocautério bipolar miniaturizado** ou hemoclipes.

### 2. Répteis (Quelônios e Serpentes):
- **Plastrotomia em Jabutis/Tartarugas:** Abertura do plastrão ósseo com serra oscilante para acesso celomático. A síntese requer fixação da janela óssea com resina acrílica odontológica ou placas de titânio.
- **Cicatrização Ectotérmica Lenta:** A produção de colágeno em répteis depende da temperatura corporal; a remoção de pontos cirúrgicos ocorre apenas após 4 a 6 semanas (em contraste com 10 a 14 dias em mamíferos).`,
        causalChain: {
          cause: 'Pressão ventilatória excessiva (> 15 cmH2O) aplicada aos pulmões e sacos aéreos de aves',
          mechanism: 'Ruptura mecânica da membrana unicelular dos sacos aéreos celomáticos',
          effect: 'Extravasamento maciço de gás anestésico para a cavidade peritoneal e tecido subcutâneo',
          clinicalMeaning: 'Enfisema subcutâneo grave, perda de ventilação parabrônquica e óbito por asfixia aguda'
        }
      },
      {
        id: 'surg_clin_wild_sec_2',
        type: 'exercise',
        title: 'Emergência Respiratória Aviar em Celiotomia',
        exerciseId: 'ex_surg_clin_05'
      }
    ]
  }
];
