// src/learning/data/lessons/surgicalClinicLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const SURGICAL_CLINIC_LESSONS: LearningLesson[] = [
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
        contentMarkdown: `A enterectomia é indicada em corpos estranhos obstrutivos com necrose transmural, intussuscepções irredutíveis e neoplasias intestinais:

### 1. Critérios de Viabilidade da Alça Intestinal
Antes de decidir pela ressecção, avalie os 4 sinais clínicos:
1. **Coloração:** Róbusta/rósea indica viabilidade. Púrpura escura, verde-acinzentada ou preta indica necrose irreversível.
2. **Pulsação Arterial Mesentérica:** Palpação digital de pulso nas pequenas artérias da arcada mesentérica adjacente.
3. **Peristaltismo:** Estimulação mecânica suave (pinçamento atraumático) desencadeia onda motora se o tecido estiver vivo.
4. **Espessura e Brilho da Serosa:** Tecido necrótico perde o brilho seroso, torna-se aveludado, fino e friável.

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
        exerciseId: 'ex_surg_clin_01'
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
        contentMarkdown: `A síndrome cólica em cavalos é a principal emergência médica e cirúrgica da espécie. A decisão entre tratamento clínico e laparotomia exploratória deve ser tomada nas primeiras horas:

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
          mechanism: 'Trombose microvascular com lise da barreira mucosa intestinal e translocação massiva de LPS (endotoxina) para o peritônio e veia porta',
          effect: 'Tempestade de citocinas inflamatórias, coagulopatia intravascular disseminada (CIVD) e laminite aguda de apoio',
          clinicalMeaning: 'Colapso cardiovascular endotóxico irreversível na mesa de cirurgia ou perda funcional dos cascos'
        }
      },
      {
        id: 'surg_clin_colic_sec_2',
        type: 'exercise',
        title: 'Conduta de Campo: Avaliação de Isquemia Cólica Reversível',
        exerciseId: 'ex_surg_clin_02'
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
        contentMarkdown: `Animais silvestres não são "pequenos cães". A anatomia comparada dita regras cirúrgicas exclusivas:

### 1. Aves Silvestres (Psitacídeos, Rapinantes, Passeriformes):
- **Sistema Respiratório Avancado sem Diafragma:** Pulmões rígidos conectados a 9 sacos aéreos de paredes transparentes extremamente finas. A ventilação mecânica assistida (IPPV) deve ter pressão de pico **rigorosamente inferior a 12 a 15 cmH2O**. Pressões maiores causam ruptura de sacos aéreos, enfisema subcutâneo grave e pneumotórax.
- **Pele Ultrafina e Avascular:** A derme das aves tem espessura de papel celofane e pouca elasticidade. Deve ser suturada com fios monofilamentares ultrafinos (Monocryl ou PDS 4-0 ou 5-0) com agulha cilíndrica delicada.
- **Tolerância Hemorrágica:** Uma ave de 100g (calopsita) possui volume sanguíneo total de apenas 10 mL. A perda de míseros 1 mL de sangue representa 10% da volemia total (choque hipovolêmico crítico). Uso obrigatório de **eletrocautério bipolar miniaturizado** ou hemoclipes.

### 2. Répteis (Quelônios e Serpentes):
- **Plastrotomia em Jabutis/Tartarugas:** Abertura do plastrão ósseo com serra oscilante para acesso celomático. A síntese requer fixação da janela óssea com resina acrílica odontológica ou placas de titânio.
- **Cicatrização Ectotérmica Lenta:** A produção de colágeno em répteis depende da temperatura corporal; a remoção de pontos cirúrgicos ocorre apenas após 4 a 6 semanas (em contraste com 10 a 14 dias em mamíferos).`,
        causalChain: {
          cause: 'Ventilação manual vigorosa com balão (> 20 cmH2O) em ave anestesiada durante celiotomia',
          mechanism: 'Hiperpressurização pneumática ultrapassa o limiar de elasticidade dos sacos aéreos torácicos',
          effect: 'Ruptura das membranas dos sacos aéreos com extravasamento de gás para a cavidade celomática e tecido subcutâneo',
          clinicalMeaning: 'Enfisema subcutâneo generalizado agudo, perda da dinâmica respiratória parabrônquica e óbito por asfixia mecânica'
        }
      },
      {
        id: 'surg_clin_wild_sec_2',
        type: 'exercise',
        title: 'Emergência Respiratória Aviar em Celiotomia',
        exerciseId: 'ex_surg_clin_03'
      }
    ]
  }
];

export const SURGICAL_CLINIC_EXERCISES: Record<string, LearningExercise> = {
  ex_surg_clin_01: {
    id: 'ex_surg_clin_01',
    conceptId: 'concept_surgical_gi_anastomosis',
    type: 'multiple_choice',
    prompt: 'Após realizar uma enterectomia término-terminal com padrão simples separado em um cão acometido por corpo estranho obstrutivo, qual manobra semiotécnica intraoperatória é obrigatória para certificar que a linha de sutura não apresenta microvazamentos antes de fechar o abdômen?',
    options: [
      {
        id: 'opt_surg_clin_1_a',
        text: 'Oclusão digital delicada de 8 a 10 cm do segmento contendo a anastomose, injeção intraluminal de 10 a 15 mL de solução salina estéril com agulha fina (25-26G) e observação de estanqueidade sob leve distensão fisiológica.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O teste hidrostático de extravasamento permite detectar fístulas mínimas entre os nós antes da reposição das alças no abdômen. Se houver gotejamento, um ponto seromuscular adicional corrige a falha na hora.'
      },
      {
        id: 'opt_surg_clin_1_b',
        text: 'Encher a cavidade abdominal inteira com 5 litros de água sanitária e ligar um aspirador de sucção forte.',
        isCorrect: false,
        pedagogicalFeedback: 'Completamente incorreto e fatal. O uso de desinfetantes no peritônio causa peritonite química letal imediata.'
      },
      {
        id: 'opt_surg_clin_1_c',
        text: 'Apertar a alça intestinal com força máxima com uma pinça de dente-de-rato para espremer o conteúdo.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Esmagar a alça rompe a anastomose recém-feita e necrosa a parede intestinal.'
      },
      {
        id: 'opt_surg_clin_1_d',
        text: 'Não realizar nenhum teste e dar alta hospitalar com ração seca dura após 1 hora da cirurgia.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Sem o teste hidrostático, fístulas passam despercebidas com risco de óbito por sepse.'
      }
    ],
    causalChain: {
      cause: 'Omissão do teste hidrostático intraoperatório na anastomose intestinal',
      mechanism: 'Microfístula entre pontos seromusculares adjacentes não é diagnosticada na mesa cirúrgica',
      effect: 'Extravasamento progressivo de conteúdo alimentar e microbiota entérica para o peritônio',
      clinicalMeaning: 'Peritonite bacteriana fulminante, sepse e necessidade de reintervenção de emergência'
    },
    pedagogicalExplanation: 'O teste de estanqueidade salina é o padrão-ouro de segurança para validar suturas em vísceras ocas gastrointestinais.'
  },
  ex_surg_clin_02: {
    id: 'ex_surg_clin_02',
    conceptId: 'concept_surgical_emergency_colic',
    type: 'multiple_choice',
    prompt: 'Durante a laparotomia exploratória de emergência em um cavalo Quarto de Milha com cólica por torção de cólon maior de 360°, a alça exteriorizada apresenta coloração violácea escura e edema da parede. Após o cirurgião desrotacionar o órgão e irrigar com salina aquecida, qual sinal clínico-patológico confirma que o tecido está viável e que NÃO será necessária a enterectomia/ressecção de emergência?',
    options: [
      {
        id: 'opt_surg_clin_2_a',
        text: 'A cor escura gradualmente clareia para vermelho-vivo/róseo, os pulsos arteriais mesentéricos retornam à palpação digital e ondas peristálticas espontâneas voltam a ocorrer na alça desrotacionada.',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! A restauração da circulação após o desfazimento do estrangulamento promove reperfusão. O retorno da coloração rósea, a pulsação arterial periférica e a motilidade espontânea atestam que a barreira mucosa e a camada muscular estão salvas.'
      },
      {
        id: 'opt_surg_clin_2_b',
        text: 'A alça adquire coloração verde-musgo fosca com cheiro de putrefação e descamação completa da serosa.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Verde-musgo fosco e odor fétido indicam necrose transmural irreversível e gangrena, exigindo ressecção cirúrgica imediata sob risco de sepse.'
      },
      {
        id: 'opt_surg_clin_2_c',
        text: 'A alça fica totalmente empedrada e rígida como um pedaço de madeira sem nenhum movimento.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Rigidez cadavérica em alça intestinal indica trombose mesentérica maciça e infarto isquêmico irreversível.'
      },
      {
        id: 'opt_surg_clin_2_d',
        text: 'A pressão arterial do cavalo cai a zero no monitor anestésico.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Pressão arterial zero indica parada cardiorrespiratória e não viabilidade intestinal.'
      }
    ],
    causalChain: {
      cause: 'Descompressão e desrotação precoce de cólon estrangulado antes da necrose transmural',
      mechanism: 'Restauração do fluxo arterial e drenagem venosa mesentérica com reoxigenação celular',
      effect: 'Retorno da motilidade ativa e recoloração rósea da serosa',
      clinicalMeaning: 'Preservação do órgão sem necessidade de ressecção complexa, com excelente prognóstico'
    },
    pedagogicalExplanation: 'A avaliação cuidadosa dos 4 critérios de viabilidade (cor, pulso, motilidade e brilho da serosa) após 10-15 minutos de reperfusão define se a ressecção é mandatória.'
  },
  ex_surg_clin_03: {
    id: 'ex_surg_clin_03',
    conceptId: 'concept_surgical_wildlife_peculiarities',
    type: 'multiple_choice',
    prompt: 'Em uma celiotomia de emergência para ovocentese e extração de ovo retido em uma Arara-canindé de 1,1 kg sob anestesia inalatória, o anestesista assistente conecta o circuito e realiza ventilação por pressão positiva intermitente (IPPV) atingindo pressões de pico de 25 a 30 cmH2O no manômetro respiratório. Qual a consequência biomecânica imediata e potencialmente fatal dessa manobra nesta espécie?',
    options: [
      {
        id: 'opt_surg_clin_3_a',
        text: 'Barotrauma com ruptura das paredes avasculares delgadas dos sacos aéreos, resultando em enfisema subcutâneo difuso, perda do fluxo unidirecional parabrônquico e parada respiratória por asfixia mecânica.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! As aves possuem sistema respiratório único com sacos aéreos sem septos alveolares espessos e sem diafragma muscular. Pressões de pico acima de 12-15 cmH2O rompem as membranas dos sacos aéreos como balões de festa estourando, causando colapso da respiração parabrônquica contínua.'
      },
      {
        id: 'opt_surg_clin_3_b',
        text: 'Crescimento imediato de penas na cavidade celomática do animal.',
        isCorrect: false,
        pedagogicalFeedback: 'Absurdo. A ventilação não estimula folículos de penas na cavidade interna.'
      },
      {
        id: 'opt_surg_clin_3_c',
        text: 'Aumento instantâneo da capacidade de voo da arara por enchimento de ar nas asas.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O enfisema subcutâneo e a ruptura celomática causam dor extrema e asfixia letal.'
      },
      {
        id: 'opt_surg_clin_3_d',
        text: 'Queda do bico córneo da ave por excesso de oxigênio nas narinas.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A queratina ranfoteca do bico não se desprende por alterações de pressão respiratória.'
      }
    ],
    causalChain: {
      cause: 'Pressão ventilatória excessiva (> 15 cmH2O) aplicada aos pulmões e sacos aéreos de aves',
      mechanism: 'Ruptura mecânica da membrana unicelular dos sacos aéreos celomáticos',
      effect: 'Extravasamento maciço de gás anestésico para a cavidade peritoneal e tecido subcutâneo',
      clinicalMeaning: 'Enfisema subcutâneo grave, perda de ventilação parabrônquica e óbito por asfixia aguda'
    },
    pedagogicalExplanation: 'Aves requerem ventilação mecânica de altíssima delicadeza com pressão estritamente limitada a 10-15 cmH2O.'
  }
};
