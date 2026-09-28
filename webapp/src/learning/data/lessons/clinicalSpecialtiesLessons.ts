// src/learning/data/lessons/clinicalSpecialtiesLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

// ==========================================
// 1. FISIOPATOLOGIA MÉDICA APLICADA
// ==========================================
export const PATHOPHYSIOLOGY_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_pathophys_01',
    conceptId: 'concept_pathophysiology_sirs_dic_shock',
    type: 'multiple_choice',
    prompt: 'Uma cadela não-castrada de 8 anos com piometra de colo fechado apresenta hipotensão severa (PAS 65 mmHg), taquicardia (FC 170 bpm), mucosas hiperêmicas com tempo de preenchimento capilar < 1s (hiperdinâmico inicial) e petéquias cutâneas no abdômen. O coagulograma revela Tempo de Protrombina (TP) e TTPa marcadamente prolongados com trombocitopenia severa (35.000 plaquetas/uL) e elevação de Dímero-D. Qual é o mecanismo fisiopatológico subjacente à coagulopatia?',
    options: [
      {
        id: 'opt_patho_1',
        text: 'Coagulação Intravascular Disseminada (CIVD) desencadeada pela liberação maciça de Fator Tecidual e citocinas pró-inflamatórias (SIRS séptica), consumindo plaquetas e fatores de coagulação com fibrinólise secundária',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Na sepse por piometra bacteriana (geralmente por E. coli e endotoxinas LPS), a ativação endotelial generalizada e liberação de citocinas (TNF-alfa, IL-1, IL-6) expressam Fator Tecidual em larga escala. Isso gera trombose microvascular disseminada, exaurindo todos os fatores de coagulação circulantes e plaquetas (coagulopatia de consumo) e ativando a plasmina com degradação de fibrina (Dímero-D elevado).'
      },
      {
        id: 'opt_patho_2',
        text: 'Insuficiência hepática aguda fulminante por intoxicação por paracetamol',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Embora o fígado produza fatores de coagulação, o gatilho clássico da cadela com piometra e petéquias é a CIVD induzida por sepse uterina.'
      },
      {
        id: 'opt_patho_3',
        text: 'Hemofilia A congênita por deficiência do Fator VIII',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A hemofilia é uma doença hereditária ligada ao cromossomo X que se manifesta nos primeiros meses de vida em machos, e afeta isoladamente o TTPa (o TP e as plaquetas são normais).'
      },
      {
        id: 'opt_patho_4',
        text: 'Deficiência alimentar primária de Vitamina K por carência de forragem',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A deficiência de vitamina K não causa trombocitopenia de 35.000 nem elevação de dímeros-D típicos de trombose e lise microvascular da CIVD.'
      }
    ]
  }
];

export const PATHOPHYSIOLOGY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_pathophys_01_sirs_dic',
    moduleId: 'mod_pathophysiology',
    title: 'Fisiopatologia da Sepse, Choque Distributivo & CIVD',
    shortDescription: 'Da ativação endotelial à falência de múltiplos órgãos: tempestade de citocinas, choque séptico e coagulopatia de consumo.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_pathophysiology_sirs_dic_shock'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_pathophys_th1',
        type: 'theory',
        title: 'A Tempestade Inflamatória Sistêmica (SIRS & Sepse)',
        contentMarkdown: `# Aula Universitária: Fisiopatologia da SIRS, Choque Séptico & Coagulação Intravascular Disseminada (CIVD)

> 📖 Referência Canônica: Silverstein, D. C.; Hopper, K. *Small Animal Critical Care Medicine*, 2nd ed. Elsevier, Section IV: Shock and Sepsis. Ettinger, S. J.; Feldman, E. C. *Tratado de Medicina Interna Veterinária*, 8ª ed. Guanabara Koogan.

### Quando a Resposta do Hospedeiro se Torna o Inimigo

A inflamação local é protetora. No entanto, quando os mediadores transbordam para a circulação sistêmica, instala-se a **Síndrome da Resposta Inflamatória Sistêmica (SIRS)**:

$$\text{LPS / Bactérias} \longrightarrow \text{Monócitos & Endotélio} \longrightarrow \text{TNF-}\alpha + \text{IL-1} \longrightarrow \text{Óxido Nítrico (iNOS)} \longrightarrow \text{Vasoplegia Severa}$$

---

### A Fisiopatologia da CIVD (A Morte por Trombose & Hemorragia)

A CIVD não é uma doença primária, mas a manifestação final de uma catástrofe inflamatória descontrolada:
1. **Fase Trombótica Inicial:** A exposição maciça do Fator Tecidual (FT) pelos macrófagos e endotélio lesado ativa a cascata extrínseca. Microtrombos de fibrina disseminados ocluem capilares renais, hepáticos e pulmonares → **Falência de Múltiplos Órgãos (MODS)**.
2. **Coagulopatia de Consumo:** Os fatores de coagulação primordiais (I, II, V, VIII) e as plaquetas são todos exauridos na formação dos microtrombos intravasculares.
3. **Fase Hemorrágica Terminal:** Com a hemostasia exaurida e a hiperfibrinólise sistêmica ativada pela plasmina, o sangue perde completamente a capacidade de coagular → petéquias, equimoses, hemorragias intracavitárias e sufusões fatais.

> 💡 Pérola Clínica / Residência: Na suspeita de CIVD, o achado de **esquizócitos** (eritrócitos fragmentados por cisalhamento mecânico nas redes de fibrina capilares) no esfregaço sanguíneo, associado a trombocitopenia acentuada, prolongamento do TP/TTPa e elevação de Dímero-D, confirma o diagnóstico hematológico de catástrofe microvascular!`
      },
      {
        id: 'sec_pathophys_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Princesa (Poodle)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo de Emergência da Sepse Grave com CIVD Incipiente',
          patient: {
            name: 'Princesa',
            species: 'Canino',
            breed: 'Poodle Toy',
            age: '9 anos',
            weightKg: 5.5,
            habitatOrEnvironment: 'Casa interna'
          },
          vitals: {
            heartRateBpm: 175,
            respiratoryRateRpm: 44,
            temperatureCelsius: 39.9,
            mucousMembranes: 'Vermelho-escuras (congestão séptica) com petéquias gengivais',
            capillaryRefillTimeSec: 1.0
          },
          anamnesis: 'Cadela inteira apresentou corrimento vulvar purulento fétido há 4 dias que cessou subitamente ontem. Hoje entrou em prostração com respiração rápida e abdômen distendido e doloroso à palpação (piometra de colo fechado com translocação bacteriana). Surgiram manchinhas roxas (petéquias) na pele do ventre nas últimas 6 horas.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Hemograma, Coagulograma e Gasometria Arterial',
              findings: 'Painel hematológico indicando coagulopatia de consumo ativa por sepse.',
              abnormalValues: [
                { parameter: 'Plaquetas', value: '38.000 /uL', reference: '200.000 - 500.000 /uL', status: 'critical' },
                { parameter: 'Tempo de Protrombina (TP)', value: '18.5 s', reference: '11 - 15 s', status: 'high' },
                { parameter: 'TTPa', value: '26.0 s', reference: '15 - 20 s', status: 'high' },
                { parameter: 'Lactato Sanguíneo', value: '5.2 mmol/L', reference: '< 2.0 mmol/L', status: 'critical' },
                { parameter: 'Pressão Arterial Média (PAM)', value: '55 mmHg', reference: '70 - 100 mmHg', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Em sepse uterina descompensada com CIVD ativa, qual é a conduta integrada de estabilização?',
          decisionOptions: [
            {
              id: 'opt_dec_path_1',
              label: 'Ressuscitação volêmica vigorosa com Ringer Lactato IV + Antibióticos bactericidas IV de amplo espectro + Plasma Fresco Congelado + OSH de emergência imediata após estabilizar',
              description: 'Restaurar perfusão com cristaloides, neutralizar a sepse, repor fatores de coagulação consumidos via plasma e remover cirurgicamente o foco infeccioso (útero purulento).',
              isOptimal: true,
              consequenceText: 'Conduta de excelência em medicina intensiva e cirúrgica! Sem a reposição de fatores pelo plasma e ressuscitação volêmica, o paciente sangraria até a morte durante a anestesia. A ovarioisterectomia de emergência elimina a fonte de endotoxinas, quebrando o ciclo vicioso da SIRS.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Ressuscitação volêmica guiada, plasma fresco e remoção cirúrgica do útero infectado',
                mechanism: 'Restauração da pressão de perfusão capilar e eliminação da liberação contínua de Fator Tecidual bacteriano',
                effect: 'Queda do lactato, estancamento da coagulopatia de consumo e recuperação da PAM > 70 mmHg',
                clinicalMeaning: 'Reversão do choque distributivo, interrupção das hemorragias e alta hospitalar'
              }
            },
            {
              id: 'opt_dec_path_2',
              label: 'Administrar apenas heparina em alta dose para "dissolver os trombos"',
              description: 'Tratar com anticoagulante pleno ignorando o choque séptico e a trombocitopenia.',
              isOptimal: false,
              consequenceText: 'Erro médico letal! A cadela já está na fase hemorrágica da CIVD com 38.000 plaquetas e petéquias. Administrar heparina plena causará hemorragia interna maciça fatal.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de heparina não fracionada em paciente em fase hemorrágica com plaquetopenia extrema',
                mechanism: 'Bloqueio total da trombina residual sem reposição de fatores hemostáticos',
                effect: 'Hemorragia intra-abdominal e pulmonar incoercível',
                clinicalMeaning: 'Óbito por choque hipovolêmico hemorrágico em menos de 1 hora'
              }
            },
            {
              id: 'opt_dec_path_3',
              label: 'Esperar o colo do útero abrir espontaneamente aplicando compressas mornas',
              description: 'Abordagem não invasiva aguardando drenagem natural.',
              isOptimal: false,
              consequenceText: 'Conduta negligente. A piometra de colo fechado com sepse tem 100% de mortalidade se não houver intervenção de ressuscitação e ovarioisterectomia.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Omissão cirúrgica diante de foco séptico fechado',
                mechanism: 'Ruptura do corno uterino necrotizado por pressão intraluminal purulenta',
                effect: 'Peritonite fecalóide/purulenta aguda com sepse refratária',
                clinicalMeaning: 'Parada cardiorrespiratória irreversível por choque séptico'
              }
            }
          ],
          learningTakeaways: [
            'A sepse é a causa mais comum de CIVD e choque distributivo na clínica de pequenos animais.',
            'A CIVD cursa primeiro com trombose microvascular oculta e depois com hemorragias graves por consumo de fatores.',
            'O controle da fonte séptica (remoção cirúrgica do foco ou drenagem) é indispensável para interromper a cascata de SIRS.'
          ]
        }
      },
      {
        id: 'sec_pathophys_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Fisiopatologia da Sepse & CIVD',
        exerciseId: 'ex_pathophys_01'
      }
    ]
  }
];

// ==========================================
// 2. DIAGNÓSTICO POR IMAGEM (RX, USG & TC)
// ==========================================
export const IMAGING_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_imaging_01',
    conceptId: 'concept_imaging_xray_afast_ultrasound',
    type: 'multiple_choice',
    prompt: 'Na avaliação radiográfica torácica de um cão com tosse crônica e sopro cardíaco, qual é o método objetivo consagrado para mensurar o aumento da silhueta cardíaca e qual é o valor limite superior da normalidade para a maioria das raças?',
    options: [
      {
        id: 'opt_img_1',
        text: 'Vertebral Heart Scale (VHS); soma-se o eixo longo (da carina até o ápice) com o eixo curto (perpendicular no terço médio) e projeta-se o comprimento a partir da borda cranial da vértebra T4. O valor normal é de até 10.5 vértebras',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! O método de Buchanan (VHS) indexa o tamanho da silhueta cardíaca com a coluna vertebral do próprio animal, eliminando a distorção do formato torácico entre raças distintas. Valores de VHS > 10.5 vértebras (ou > 11.5 em braquicefálicos) indicam cardiomegalia objetiva.'
      },
      {
        id: 'opt_img_2',
        text: 'Medição da distância entre o coração e o diafragma em centímetros',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A distância linear em centímetros é dependente do porte do animal (um Chihuahua vs. um Dogue Alemão) e da fase respiratória, não sendo um critério padronizado.'
      },
      {
        id: 'opt_img_3',
        text: 'Contagem de costelas sobrepostas à traqueia',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A posição da traqueia varia com flexão de pescoço e conformação anatômica, não mensurando o volume ventricular.'
      },
      {
        id: 'opt_img_4',
        text: 'Avaliação da densidade metálica do esterno',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O osso esterno possui densidade óssea/mineral, não tendo relação com a mensuração volumétrica do miocárdio.'
      }
    ]
  }
];

export const IMAGING_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_imaging_01_xray_afast',
    moduleId: 'mod_imaging_diagnostics',
    title: 'Diagnóstico por Imagem: Padrões de RX & Protocolo AFAST de Emergência',
    shortDescription: 'As 5 densidades radiográficas, mensuração do VHS cardíaco e detecção ultrassonográfica de líquido livre abdominal (AFAST).',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_imaging_xray_afast_ultrasound'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_imaging_th1',
        type: 'theory',
        title: 'A Física das Densidades Radiográficas & O Protocolo AFAST',
        contentMarkdown: `### As 5 Densidades Radiográficas Fundamentais

Na radiografia, os tecidos aparecem do mais escuro (radiotransparente) ao mais claro (radiopaco) dependendo da absorção dos fótons de raios-X:
1. **Ar/Gás (Preto):** Pulmões arejados, lúmen gástrico.
2. **Gordura (Cinza-escuro):** Gordura falciforme, retroperitoneal (essencial para conferir contraste aos órgãos).
3. **Água / Partes Moles (Cinza-claro):** Fígado, baço, rins, bexiga cheia, sangue, transudatos.
4. **Mineral / Osso (Branco):** Esqueleto ósseo, cálculos de oxalato de cálcio.
5. **Metal (Branco brilhante):** Projéteis, agulhas, microchips.

---

### O Protocolo Ultrassonográfico de Emergência AFAST

Criado para detectar **líquido livre (hemorragia ou uroperitônio)** em pacientes traumatizados em menos de 3 minutos, avaliando 4 pontos acústicos:
1. **Ponto Diafragmático-Hepático (DH):** Efusão pericárdica ou líquido entre lobos hepáticos.
2. **Ponto Esplenorrenal (SR):** Fundo de saco entre rim esquerdo e baço.
3. **Ponto Hepatorrenal (HR):** Bolsa de Morrison entre rim direito e fígado.
4. **Ponto Cistocólico (CC):** Região caudo-ventral ao redor da bexiga urinária.`
      },
      {
        id: 'sec_imaging_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Imaginológica: Max (Labrador)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Avaliação de Trauma Abdominal Fechado (Atropelamento)',
          patient: {
            name: 'Max',
            species: 'Canino',
            breed: 'Labrador Retriever',
            age: '4 anos',
            weightKg: 32.0,
            habitatOrEnvironment: 'Casa com quintal'
          },
          vitals: {
            heartRateBpm: 155,
            respiratoryRateRpm: 38,
            temperatureCelsius: 37.5,
            mucousMembranes: 'Muito pálidas (isquemia periférica)',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'Max foi atropelado por um automóvel há 30 minutos na rua. Conseguiu se arrastar para a calçada, mas agora não levanta mais. Apresenta taquipneia, dor abdominal difusa e abdômen abaulado com onda fluida positiva.',
          exams: [
            {
              category: 'imaging',
              title: 'Ultrassonografia AFAST Focalizada de Emergência',
              findings: 'Varredura rápida dos 4 sítios acústicos abdominais.',
              abnormalValues: [
                { parameter: 'Ponto Esplenorrenal (SR)', value: 'Líquido anecoico abundante (+)', reference: 'Sem líquido', status: 'critical' },
                { parameter: 'Ponto Cistocólico (CC)', value: 'Líquido anecoico entre alças (+)', reference: 'Sem líquido', status: 'critical' },
                { parameter: 'Ponto Hepatorrenal (HR)', value: 'Líquido anecoico livre (+)', reference: 'Sem líquido', status: 'critical' },
                { parameter: 'AFAST Fluid Score', value: '4/4 (Hemoabdômen grave)', reference: '0/4', status: 'critical' }
              ]
            },
            {
              category: 'laboratorial',
              title: 'Abdominocentese Guiada por USG',
              findings: 'Punção de líquido não coagulável da cavidade peritoneal.',
              abnormalValues: [
                { parameter: 'Hematócrito do Líquido Abdominal', value: '28% (Sangue total)', reference: 'Ausente', status: 'critical' },
                { parameter: 'Hematócrito Periférico Sanguíneo', value: '20% (Em queda rápida)', reference: '37 - 55%', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com AFAST 4/4 e hemoabdômen ativo por ruptura de baço ou fígado, qual é a conduta prioritária?',
          decisionOptions: [
            {
              id: 'opt_dec_img_1',
              label: 'Ressuscitação hemostática hipotensiva (PAM 60-70 mmHg) com sangue total/concentrado + Enfaixamento abdominal compressivo + Laparotomia exploratória de urgência',
              description: 'Estabilizar o choque hipovolêmico sem romper coágulos frágeis com pressão excessiva, e operar imediatamente para hemostasia do órgão lacerado.',
              isOptimal: true,
              consequenceText: 'Conduta de cirurgião de trauma de altíssimo nível! A ressuscitação hipotensiva permissiva (alvo de PAS 80-90 mmHg) previne que a pressão alta desloque os trombos hemostáticos imaturos no baço enquanto o paciente é preparado para a esplenectomia de emergência.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Diagnóstico por AFAST em 2 minutos seguido de controle cirúrgico de hemoabdômen',
                mechanism: 'Identificação imediata da perda de sangue intraperitoneal e ligadura vascular cirúrgica',
                effect: 'Cessação da hemorragia interna e restauração da volemia efetiva',
                clinicalMeaning: 'Prevenção de óbito por choque hemorrágico hipovolêmico e recuperação total'
              }
            },
            {
              id: 'opt_dec_img_2',
              label: 'Administrar 4 litros de soro fisiológico em bolus rápido para elevar a pressão arterial a 160 mmHg',
              description: 'Infundir volume maciço com alta pressão imediatamente.',
              isOptimal: false,
              consequenceText: 'Erro mortal conhecido como "Pop the Clot"! A infusão excessiva de cristaloides dilui os fatores de coagulação (coagulopatia dilucional) e o pico de pressão rompe os coágulos frágeis que estavam contendo o sangramento esplênico, levando a hemorragia exsanguinante.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Ressuscitação agressiva com hipertensão induzida e hemodiluição',
                mechanism: 'Deslocamento hidrostático mecânico de trombos esplênicos (descoagulação)',
                effect: 'Aceleração violenta do sangramento intraperitoneal',
                clinicalMeaning: 'Exsanguinação rápida e parada cardíaca hipovolêmica irreversível'
              }
            },
            {
              id: 'opt_dec_img_3',
              label: 'Mandar para casa com analgésico e pedir para retornar em 3 dias para ultrassom eletivo',
              description: 'Tratar apenas a dor pós-trauma e aguardar.',
              isOptimal: false,
              consequenceText: 'Negligência fatal. Um paciente com hemoabdômen AFAST 4/4 e hematócrito em 20% evolui para parada cardíaca em poucas horas sem intervenção cirúrgica e suporte.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Omissão de intervenção em hemorragia interna ativa',
                mechanism: 'Esgotamento da pré-carga cardíaca com anóxia tecidual generalizada',
                effect: 'Acidose lática terminal e colapso circulatório',
                clinicalMeaning: 'Morte do paciente durante a madrugada'
              }
            }
          ],
          learningTakeaways: [
            'O protocolo AFAST é a ferramenta padrão-ouro para detectar líquido livre abdominal em pacientes traumatizados em minutos.',
            'O sangue livre intracavitário não coagula (o peritônio consome os fatores de fibrina durante o movimento).',
            'Na hemorragia interna ativa, pratica-se ressuscitação hemostática permissiva para evitar que a alta pressão rompa coágulos (pop the clot).'
          ]
        }
      },
      {
        id: 'sec_imaging_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Diagnóstico por Imagem & Protocolo AFAST',
        exerciseId: 'ex_imaging_01'
      }
    ]
  }
];

// ==========================================
// 3. CLÍNICA MÉDICA DE PEQUENOS ANIMAIS
// ==========================================
export const SMALL_ANIMALS_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_small_anim_01',
    conceptId: 'concept_small_animals_ckd_endocrinology',
    type: 'multiple_choice',
    prompt: 'Um felino idoso de 14 anos com Doença Renal Crônica (DRC) é estadiado de acordo com as diretrizes internacionais da International Renal Interest Society (IRIS). Quais são os dois biomarcadores séricos primários utilizados para definir o estágio da DRC (Estágios 1 a 4) e quais são os dois subestadiamentos obrigatórios?',
    options: [
      {
        id: 'opt_sa_1',
        text: 'Creatinina sérica estável e Dimetilarginina Simétrica (SDMA); com subestadiamento obrigatório por Pressão Arterial Sistólica (PAS) e Relação Proteína:Creatinina Urinária (RPCU)',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A diretriz IRIS utiliza creatinina sérica e SDMA (marcador precoce que não sofre interferência da perda de massa muscular do idoso) para classificar o paciente do Estágio 1 (não azotêmico) ao 4 (azotemia severa terminal). Em seguida, todo paciente deve ser subestadiado quanto à proteinúria (RPCU) e hipertensão arterial sistêmica (PAS), pois ambas são fatores de progressão renal direta.'
      },
      {
        id: 'opt_sa_2',
        text: 'Apenas a glicemia de jejum e contagem de plaquetas com subestadiamento por peso',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A glicemia avalia metabolismo de carboidratos/diabetes, não sendo o parâmetro do estadiamento renal IRIS.'
      },
      {
        id: 'opt_sa_3',
        text: 'Níveis de ALT hepática e Fosfatase Alcalina com subestadiamento por ecografia',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. ALT e FA são enzimas de lesão e colestase hepatobiliar, sem relação com a taxa de filtração glomerular renal.'
      },
      {
        id: 'opt_sa_4',
        text: 'pH do suco gástrico e teste de Schirmer',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Teste de Schirmer avalia produção de lágrima (ceratoconjuntivite seca) em oftalmologia.'
      }
    ]
  }
];

export const SMALL_ANIMALS_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_small_anim_01_ckd_iris',
    moduleId: 'mod_small_animals_clinic',
    title: 'Clínica de Pequenos: Doença Renal Crônica (Estadiamento IRIS)',
    shortDescription: 'Fisiopatologia dos néfrons remanescentes, SDMA vs. creatinina, controle de proteinúria, hiperfosfatemia e hipertensão.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_small_animals_ckd_endocrinology'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_small_anim_th1',
        type: 'theory',
        title: 'A Teoria do Néfron Intacto & A Espiral de Dano Renal',
        contentMarkdown: `# Aula Universitária: Doença Renal Crônica (DRC) em Cães e Gatos & Diretrizes IRIS

> 📖 Referência Canônica: International Renal Interest Society (IRIS) — *Staging of CKD in Dogs and Cats (2023 Guidelines)*. Polzin, D. J. *Chronic Kidney Disease in Dogs and Cats*. Vet Clin North Am Small Anim Pract. Nelson, R. W.; Couto, C. G. *Medicina Interna de Pequenos Animais*, 5ª ed. Elsevier, Cap. 41.

### A Progressão Inexorável da DRC

Quando os néfrons são destruídos por insultos crônicos, os néfrons sobreviventes sofrem **hipertrofia e hiperfiltração compensatória**:
* Para filtrar o mesmo volume de sangue, a arteríola eferente contrai-se violentamente por ação da Angiotensina II, gerando **hipertensão intraglomerular severa**.
* Essa alta pressão contínua lesiona mecanicamente a barreira de podócitos, permitindo o extravasamento patológico de albumina para o filtrado primário → **Proteinúria renal**.
* A albumina reabsorvida pelos túbulos renais deflagra resposta inflamatória e fibrose intersticial secundária, destruindo progressivamente mais néfrons em um ciclo vicioso de deterioração renal.

---

### Os Três Pilares Terapêuticos Renoprotetores

1. **Dieta Renal Terapêutica Restrita em Fósforo:** A retenção de fósforo deflagra hiperparatireoidismo secundário renal e calcificação metastática mineral em tecidos moles e parênquima renal.
2. **Bloqueio Farmacológico do SRAA (IECA / BRA):** Telmisartana (0.5 a 1.0 mg/kg/dia) ou Benazepril promovem dilatação seletiva da arteríola eferente, reduzindo a pressão intraglomerular capilar e suprimindo a proteinúria (alvo: RPCU < 0.4 em felinos).
3. **Controle Rigoroso da Pressão Arterial Sistólica (PAS):** A hipertensão sistêmica (PAS > 160 mmHg) acelera a esclerose glomerular e predispõe o paciente a descolamento hemorrágico de retina e acidentes vasculares encefálicos.`
      },
      {
        id: 'sec_small_anim_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Frajola (Siamês Idoso)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Terapêutico de Gato com DRC IRIS Estágio 3 Proteinúrico',
          patient: {
            name: 'Frajola',
            species: 'Felino',
            breed: 'Siamês',
            age: '13 anos',
            weightKg: 3.2,
            habitatOrEnvironment: 'Casa interna'
          },
          vitals: {
            heartRateBpm: 190,
            respiratoryRateRpm: 26,
            temperatureCelsius: 38.2,
            mucousMembranes: 'Rosadas e secas (Grau de desidratação 6%)',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Tutor relata poliúria e polidipsia (bebe água sem parar e urina muito) há meses, acompanhado de perda de peso progressiva (perdeu 1.5 kg no último ano) e episódios frequentes de vômitos matinais de líquido espumoso claro.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Painel Renal Completo, Urinálise & Pressão Arterial',
              findings: 'Avaliação laboratorial para estadiamento de acordo com a IRIS.',
              abnormalValues: [
                { parameter: 'Creatinina Sérica', value: '3.6 mg/dL (Estágio 3 IRIS)', reference: '0.8 - 1.8 mg/dL', status: 'critical' },
                { parameter: 'SDMA Sérico', value: '32 ug/dL', reference: '< 14 ug/dL', status: 'critical' },
                { parameter: 'Fósforo Sérico', value: '7.8 mg/dL (Hiperfosfatemia)', reference: '2.5 - 5.0 mg/dL', status: 'critical' },
                { parameter: 'Relação Proteína:Creatinina Urinária (RPCU)', value: '0.72 (Proteinúrico)', reference: '< 0.20 Não-proteinúrico', status: 'critical' },
                { parameter: 'Pressão Arterial Sistólica (Doppler)', value: '185 mmHg (Hipertenso)', reference: '< 140 mmHg', status: 'critical' },
                { parameter: 'Densidade Urinária', value: '1.014 (Isostenúria)', reference: '> 1.035 em gatos', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Frajola é um felino com DRC Estágio 3, hipertenso e proteinúrico. Qual é a conduta integrada?',
          decisionOptions: [
            {
              id: 'opt_dec_sa_1',
              label: 'Dieta renal com quelante entérico de fósforo (Carbonato de Lantânio/Quitosana) + Telmisartana oral (BRA) + Amlodipina se PAS > 160 mmHg + Fluidoterapia SC periódica',
              description: 'Quelar fósforo da refeição, reduzir pressão intraglomerular e proteinúria com bloqueador de receptor de angiotensina e controlar a hipertensão sistêmica.',
              isOptimal: true,
              consequenceText: 'Conduta médica de altíssima precisão nefrológica! A telmisartana controla tanto a proteinúria glomerular quanto a hipertensão renal. A restrição de fósforo evita a osteodistrofia fibrosa e retarda a perda de néfrons, dobrando a expectativa de vida do felino com excelente qualidade.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Uso de telmisartana, quelante de fósforo e dieta renal específica',
                mechanism: 'Bloqueio seletivo do receptor AT1 da angiotensina II e redução do produto cálcio x fósforo sérico',
                effect: 'Queda da proteinúria para RPCU < 0.20 e estabilização da pressão arterial sistólica < 140 mmHg',
                clinicalMeaning: 'Interrupção da fibrose túbulo-intersticial progressiva e sobrevida prolongada com apetite recuperado'
              }
            },
            {
              id: 'opt_dec_sa_2',
              label: 'Administrar anti-inflamatório Meloxicam em dose alta para aliviar as dores articulares do idoso',
              description: 'Tratar a dor com AINE sem atentar para a função renal.',
              isOptimal: false,
              consequenceText: 'Erro gravíssimo e fulminante! Em animais com DRC e desidratação, a TFG é mantida pela dilatação da arteríola aferente mediada por prostaglandinas. Administrar um AINE inibe essas prostaglandinas, fecha a arteríola aferente e induz Injúria Renal Aguda anúrica terminal.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Administração de AINE em paciente com DRC hipovolêmica',
                mechanism: 'Inibição da síntese de PGE2 com vasoconstrição aguda da arteríola aferente',
                effect: 'Queda súbita da filtração glomerular a zero e necrose de papila renal',
                clinicalMeaning: 'Uremia terminal aguda, anúria e óbito em 48-72h'
              }
            },
            {
              id: 'opt_dec_sa_3',
              label: 'Estimular a ingestão de carne vermelha crua pura para recuperar a massa muscular',
              description: 'Fornecer dieta hiperproteica com alta carga de fósforo.',
              isOptimal: false,
              consequenceText: 'Conduta catastrófica! Carne vermelha crua é riquíssima em fósforo e proteína. Isso causará uma explosão de toxinas urêmicas no sangue e calcificação vascular metastática dos rins.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Oferta de dieta rica em fósforo e sobrecarga nitrogenada',
                mechanism: 'Elevação exponencial do produto cálcio-fósforo e hiperparatireoidismo severo',
                effect: 'Mineralização do parênquima renal remanescente e gastrite urêmica hemorrágica',
                clinicalMeaning: 'Vômitos incoercíveis, úlceras orais e piora drástica do escore IRIS'
              }
            }
          ],
          learningTakeaways: [
            'O SDMA permite o diagnóstico precoce da DRC em felinos quando ainda resta 60% da massa renal (creatinina só sobe aos 75% de perda).',
            'O controle rigoroso do fósforo sérico é o fator isolado com maior impacto na sobrevida de cães e gatos renais crônicos.',
            'AINEs são contraindicados em pacientes desidratados com DRC devido ao risco de colapso hemodinâmico glomerular.'
          ]
        }
      },
      {
        id: 'sec_small_anim_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Nefrologia & DRC em Pequenos Animais',
        exerciseId: 'ex_small_anim_01'
      }
    ]
  }
];

// ==========================================
// 4. CLÍNICA MÉDICA DE GRANDES ANIMAIS
// ==========================================
export const LARGE_ANIMALS_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_large_anim_01',
    conceptId: 'concept_large_animals_colic_rumen_acidosis',
    type: 'multiple_choice',
    prompt: 'Ao atender um cavalo Mangalarga com dor abdominal aguda (cólica) há 6 horas, o veterinário passa uma sonda nasogástrica até o estômago e obtém 14 litros de líquido amarelo-acastanhado fétido sob pressão contínua (refluxo enterogástrico positivo). Imediatamente após a drenagem, a frequência cardíaca do cavalo reduz de 88 para 64 bpm. Qual é a conduta farmacológica PROIBIDA antes de passar a sonda e qual o significado clínico do refluxo?',
    options: [
      {
        id: 'opt_la_1',
        text: 'É PROIBIDO administrar analgésicos potentes sem antes passar a sonda nasogástrica para descompressão mecânica; refluxo > 2 litros indica obstrução mecânica ou funcional do intestino delgado (risco iminente de ruptura gástrica)',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Cavalos são anatomicamente incapazes de vomitar. A passagem de sonda nasogástrica descompressiva é a PRIMEIRA e mais vital manobra no atendimento da cólica. Mascarar a dor com analgésicos sem descomprimir o estômago pode resultar em ruptura gástrica fatal, pois o líquido do intestino delgado continua refluindo para dentro de uma cavidade estomacal não elástica.'
      },
      {
        id: 'opt_la_2',
        text: 'Deve-se administrar óleo mineral pela sonda antes de verificar o refluxo',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. NUNCA se introduz óleo mineral ou qualquer medicamento em um estômago que acabou de drenar refluxo, sob risco grave de regurgitação e pneumonia por aspiração fatal.'
      },
      {
        id: 'opt_la_3',
        text: 'O refluxo de 14 litros é um achado fisiológico normal de esvaziamento diário do cavalo',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Em condições fisiológicas normais, obtém-se menos de 1 a 2 litros de resíduo estomacal pela sonda.'
      },
      {
        id: 'opt_la_4',
        text: 'A conduta de escolha imediata é fazer paracentese torácica',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A paracentese torácica (toracocentese) é para efusão pleural, não para síndrome cólica abdominal.'
      }
    ]
  }
];

export const LARGE_ANIMALS_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_large_anim_01_colic_approach',
    moduleId: 'mod_large_animals_clinic',
    title: 'Clínica de Grandes: Exame Clínico da Síndrome Cólica Equina',
    shortDescription: 'Protocolo de emergência a campo: sondagem nasogástrica, palpação retal, abdominocentese e decisão clínica vs. cirúrgica.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_large_animals_colic_rumen_acidosis'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_large_anim_th1',
        type: 'theory',
        title: 'O Algoritmo Sistemático de Emergência na Cólica Equina',
        contentMarkdown: `# Aula Universitária: Exame Clínico & Decisão Cirúrgica na Cólica Equina

> 📖 Referência Canônica: Radostits, O. M. et al. *Clínica Veterinária: Um Tratado de Doenças dos Bovinos, Equinos, Ovinos, Suínos e Caprinos*, 9ª ed. Guanabara Koogan, Cap. 7: Doenças do Trato Digestivo dos Equinos. White, N. A.; Edwards, G. B. *The Equine Acute Abdomen*. Lea & Febiger. Adams & Stashak's *Lameness in Horses*.

### O Estômago Equino Não Vomita!

A conformação anatômica da cárdia equina (esfíncter hipertrofiado com prega mucosa oblíqua) impede mecanicamente o vômito. Por isso, qualquer acúmulo retrógrado de líquido ou gás decorrente de obstrução no intestino delgado resulta em distensão progressiva e ruptura gástrica espontânea fatal.

---

### A Sequência Padronizada de Avaliação Clínica

$$\text{Exame Físico (FC & Mucosas)} \longrightarrow \text{Sondagem Nasogástrica Imediata} \longrightarrow \text{Palpação Retal Metódica} \longrightarrow \text{Abdominocentese Diagnóstica}$$

1. **Frequência Cardíaca (FC) como Barômetro de Dor e Choque:**
   * $\text{FC } 40 - 60\text{ bpm:}$ Dor leve a moderada (cólica por timpanismo cecal ou hipermotilidade espasmódica).
   * $\text{FC } 60 - 80\text{ bpm:}$ Compactação de cólon maior ou obstrução intestinal física moderada.
   * $\text{FC } > 80 - 100\text{ bpm:}$ Lesão estrangulativa hiperaguda (vólvulo, torção, intussuscepção, encarceramento forame epiploico) com isquemia transmural, endotoxemia e colapso de perfusão.
2. **Abdominocentese Diagnóstica (Líquido Peritoneal):**
   * *Normal:* Líquido amarelo-citrino translúcido e límpido, proteína total $< 2.0\text{ g/dL}$, leucócitos $< 5.000/\mu\text{L}$, lactato peritoneal $\le$ lactato sérico.
   * *Obstrução Simples / Íleo:* Líquido ligeiramente turvo, proteína total $2.5 - 3.5\text{ g/dL}$.
   * *Lesão Estrangulativa / Infarto Transmural:* Líquido avermelhado/sanguinolento (*serossanguinolento* a achocolatado), fétido, proteína $> 4.0\text{ g/dL}$ e **lactato peritoneal $\ge 2\times$ o lactato sérico** → **Indicação cirúrgica imediata (laparotomia exploratória)!**

> ⚠️ Alerta Crítico / Risco Fatal: Em cavalos com cólica, a descompressão gástrica através de **sondagem nasogástrica calibrosa** deve preceder qualquer administração de fármacos sedativos ou espasmolíticos. Se o estômago contiver 10 a 15 litros de refluxo fétido alcalino e não for esvaziado, a administração de flunixin meglumine mascara a dor enquanto o estômago se rompe!`
      },
      {
        id: 'sec_large_anim_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Trovão (Mangalarga Marchador)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Decisão Clínica vs. Cirúrgica em Cólica Estrangulativa',
          patient: {
            name: 'Trovão',
            species: 'Equino',
            breed: 'Mangalarga Marchador',
            age: '7 anos',
            weightKg: 460,
            habitatOrEnvironment: 'Haras com piquete de coastcross'
          },
          vitals: {
            heartRateBpm: 84,
            respiratoryRateRpm: 34,
            temperatureCelsius: 38.0,
            mucousMembranes: 'Vermelho-escuras com halo endotóxico violáceo nas margens gengivais',
            capillaryRefillTimeSec: 3.5
          },
          anamnesis: 'Trovão começou a cavar o chão, olhar para o flanco e deitar e rolar violentamente há 5 horas. Recebeu uma dose de dipirona com hioscina aplicada pelo tratador sem melhora. À ausculta abdominal, silêncio absoluto nos 4 quadrantes (íleo paralítico completo).',
          exams: [
            {
              category: 'physical_exam',
              title: 'Sondagem Nasogástrica Descompressiva',
              findings: 'Passagem imediata de sonda nasogástrica de lúmen amplo pelo meato ventral.',
              abnormalValues: [
                { parameter: 'Volume de Refluxo Enterogástrico', value: '11 Litros (Fétido)', reference: '< 2 Litros', status: 'critical' },
                { parameter: 'Queda da Frequência Cardíaca Pós-Sonda', value: 'De 84 para 68 bpm', reference: 'Alívio mecânico', status: 'high' }
              ]
            },
            {
              category: 'laboratorial',
              title: 'Paracentese Abdominal (Abdominocentese)',
              findings: 'Punção com agulha 40x12 na linha média ventral após tricotomia e assepsia cirúrgica.',
              abnormalValues: [
                { parameter: 'Aspecto Físico do Líquido', value: 'Turvo Serossanguinolento (Vinho tinto)', reference: 'Amarelo citrino límpido', status: 'critical' },
                { parameter: 'Proteína Total no Líquido', value: '4.8 g/dL', reference: '< 2.0 g/dL', status: 'critical' },
                { parameter: 'Lactato Peritoneal', value: '6.4 mmol/L (Lactato Sérico: 2.8)', reference: '< 2.0 mmol/L', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com refluxo espontâneo e líquido peritoneal serossanguinolento com lactato alto, qual é a conduta mandatória?',
          decisionOptions: [
            {
              id: 'opt_dec_la_1',
              label: 'Encaminhamento urgente para Laparotomia Exploratória em centro cirúrgico com fluidoterapia IV de alto volume contínua',
              description: 'Líquido peritoneal sanguinolento com lactato elevado diagnostica isquemia/estrangulamento de alça. Somente cirurgia desobstrui ou resseca o segmento necrótico.',
              isOptimal: true,
              consequenceText: 'Decisão cirúrgica brilhante e salvadora! A coloração serossanguinolenta do líquido peritoneal reflete a diapedese de hemácias através de paredes intestinais isquêmicas desvitalizadas (hérnia inguinal encarcerada, torção de mesentério ou vólvulo). Cada hora de atraso reduz as chances de sobrevida do cavalo.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Indicação cirúrgica precoce baseada na abdominocentese',
                mechanism: 'Correção do estrangulamento vascular mecânico e ressecção de alça necrótica antes da perfuração',
                effect: 'Interrupção da translocação de endotoxinas para a corrente sanguínea portal',
                clinicalMeaning: 'Prevenção de choque endotóxico fatal e salvamento do paciente'
              }
            },
            {
              id: 'opt_dec_la_2',
              label: 'Administrar 4 litros de óleo mineral pela sonda e esperar 24 horas para ver se o intestino desobstrui',
              description: 'Tentar laxante oleoso via sonda em alça com refluxo positivo.',
              isOptimal: false,
              consequenceText: 'Erro médico grosseiro e fatal! Introduzir óleo em estômago que está apresentando refluxo entérico causará sobrecarga de volume, refluxo para as vias aéreas com pneumonia lipoide fulminante ou ruptura gástrica.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Administração de óleo mineral em paciente com íleo adinâmico e refluxo gástrico',
                mechanism: 'Impossibilidade de progressão do óleo com aspiração traqueobrônquica e ruptura gástrica',
                effect: 'Peritonite química fecal aguda e insuficiência respiratória asfíxica',
                clinicalMeaning: 'Óbito doloroso em choque séptico terminal'
              }
            },
            {
              id: 'opt_dec_la_3',
              label: 'Aplicar Flunixina Meglumina em dose dobrada e soltar no pasto',
              description: 'Mascarar a dor severa com anti-inflamatório potente sem indicar cirurgia.',
              isOptimal: false,
              consequenceText: 'Conduta desastrosa. A flunixina mascarará os sinais clínicos da dor enquanto a alça intestinal continua necrosando silenciosamente dentro do abdômen até a ruptura.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Mascaramento farmacológico de dor cirúrgica',
                mechanism: 'Progressão da gangrena isquêmica transmural da alça intestinal',
                effect: 'Perfuração de cólon ou íleo com extravasamento de ingesta na cavidade peritoneal',
                clinicalMeaning: 'Peritonite fecal fulminante irreversível'
              }
            }
          ],
          learningTakeaways: [
            'A passagem de sonda nasogástrica é a primeira manobra terapêutica na cólica para evitar ruptura gástrica.',
            'Líquido peritoneal de cor vermelho-vinhosa com lactato elevado indica lesão estrangulativa cirúrgica.',
            'Nunca administre líquidos ou laxantes em estômagos com refluxo enterogástrico positivo.'
          ]
        }
      },
      {
        id: 'sec_large_anim_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Abordagem da Cólica Equina',
        exerciseId: 'ex_large_anim_01'
      }
    ]
  }
];

// ==========================================
// 5. MANEJO & CLÍNICA DE ANIMAIS SILVESTRES
// ==========================================
export const WILDLIFE_CLINIC_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_wildlife_01',
    conceptId: 'concept_wildlife_handling_anesthesia_zoo',
    type: 'multiple_choice',
    prompt: 'Ao realizar a contenção física e anestesia inalatória em uma Arara-canindé (Ara ararauna) de 1.1 kg, qual é a particularidade fisiológica e anatômica mais crítica que o médico veterinário de fauna silvestre deve respeitar para evitar a asfixia ou barotrauma fatal?',
    options: [
      {
        id: 'opt_wild_1',
        text: 'Aves possuem anéis traqueais completos (cartilagens fechadas), de modo que o tubo endotraqueal NUNCA deve ser com cuff (balonete) inflado, para não causar necrose isquêmica por pressão na traqueia; além de ventilação mecânica com pressão de pico rigorosamente abaixo de 12-15 cmH2O para não romper sacos aéreos',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Aves têm anéis traqueais cartilaginosos completos em 360° (ao contrário dos mamíferos, que têm forma de C). Inflar o cuff em uma traqueia não expansível comprime a mucosa contra a cartilagem rígida, gerando necrose e estenose traqueal pós-operatória tardia fatal. Além disso, os sacos aéreos não suportam pressões inspiratórias superiores a 12-15 cmH2O.'
      },
      {
        id: 'opt_wild_2',
        text: 'Aves possuem diafragma muscular hipertrofiado que exige pressão positiva de 40 cmH2O',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Aves NÃO possuem diafragma; a respiração é impulsionada pelos músculos da caixa torácica que movem o esterno para ventilar os sacos aéreos.'
      },
      {
        id: 'opt_wild_3',
        text: 'Aves devem ser intubadas exclusivamente pelo esôfago',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A intubação é endotraqueal na glote situada na base da língua. O esôfago conduz ao inglúvio (papo).'
      },
      {
        id: 'opt_wild_4',
        text: 'Aves toleram jejum hídrico e alimentar de 48 horas antes da cirurgia',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Devido à sua taxa metabólica extremamente acelerada, jejuns prolongados induzem hipoglicemia severa em aves (o jejum em psitacídeos é de no máximo 2 a 4 horas).'
      }
    ]
  }
];

export const WILDLIFE_CLINIC_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_wildlife_01_avian_anesthesia',
    moduleId: 'mod_wildlife_clinic',
    title: 'Clínica de Silvestres: Particularidades Anatômicas & Anestesia em Aves',
    shortDescription: 'Fisiologia respiratória das aves, ausência de diafragma, anéis traqueais completos e prevenção de barotrauma de sacos aéreos.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_wildlife_handling_anesthesia_zoo'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_wildlife_th1',
        type: 'theory',
        title: 'A Maravilha do Sistema Respiratório Aviário',
        contentMarkdown: `### O Fluxo Unidirecional de Ar Mais Eficiente da Natureza

As aves não possuem pulmões elásticos que se expandem como os dos mamíferos:
* Seus pulmões são **estruturas rígidas** com parabrônquios, onde o sangue e o ar fluem em sistema contracorrente cruzado de altíssima eficiência.
* A movimentação do ar é realizada pelos **Sacos Aéreos (cervicais, claviculares, torácicos e abdominais)**, que funcionam como foles de foleiro.

---

### Os 3 Mandamentos da Anestesia e Cirurgia em Aves

1. **Nunca aperte a quilha (esterno):** Como a ave não tem diafragma, ela depende do movimento do esterno para expandir os sacos aéreos. Conter uma ave apertando seu peito causa **asfixia mecânica em menos de 60 segundos**.
2. **Tubos Traqueais Sem Cuff:** Anéis traqueais completos sofrem necrose se o balonete for insuflado.
3. **Limite de Pressão de Pico ($PIP < 12 - 15\text{ cmH}_2\text{O}$):** Romper um saco aéreo por excesso de pressão na ventilação manual gera enfisema subcutâneo generalizado e óbito imediato.`
      },
      {
        id: 'sec_wildlife_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Jade (Tucano-toco)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Anestésico e Osteossíntese de Bico em Ramphastos toco',
          patient: {
            name: 'Jade',
            species: 'Ave Silvestre',
            breed: 'Tucano-toco (Ramphastos toco)',
            age: 'Jovem adulto',
            weightKg: 0.65,
            habitatOrEnvironment: 'Centro de Triagem de Animais Silvestres (CETAS)'
          },
          vitals: {
            heartRateBpm: 310,
            respiratoryRateRpm: 46,
            temperatureCelsius: 40.8,
            mucousMembranes: 'Rosadas (mucosa oral e coana)',
            capillaryRefillTimeSec: 1.0
          },
          anamnesis: 'Tucano resgatado de atropelamento com fratura oblíqua da maxila rostral (bico superior fraturado com sangramento ativo da derme interna vascularizada). Necessita de anestesia geral inalatória para hemostasia e fixação cirúrgica do bico com resina odontológica autopolimerizável.',
          exams: [
            {
              category: 'physical_exam',
              title: 'Exame Físico Específico de Fauna Aviária',
              findings: 'Avaliação da cavidade oral, coana respiratória e ausculta cardiopulmonar.',
              abnormalValues: [
                { parameter: 'Temperatura Cloacal', value: '40.8 °C (Hipotermia incipiente para tucano)', reference: '41.5 - 42.5 °C', status: 'low' },
                { parameter: 'Fratura de Ramfoteca Superior', value: 'Instável e hemorrágica', reference: 'Íntegra', status: 'critical' },
                { parameter: 'Escore de Condição Corporal', value: '2/5 (Quilha proeminente)', reference: '3/5', status: 'low' }
              ]
            }
          ],
          challengePrompt: 'Para intubação traqueal e manutenção anestésica de Jade, qual é o protocolo de máxima segurança?',
          decisionOptions: [
            {
              id: 'opt_dec_wild_1',
              label: 'Indução com Isoflurano em máscara + Tubo endotraqueal sem cuff (tamanho 2.5-3.0 mm) + Manta térmica ativa + Ventilação manual com PIP < 12 cmH2O',
              description: 'Utilizar cânula sem cuff para proteger os anéis cartilaginosos, aquecimento para evitar hipotermia rápida e monitorar rigorosamente a pressão ventilatória.',
              isOptimal: true,
              consequenceText: 'Conduta perfeita e especializada em medicina de animais selvagens! O aquecimento ativo é crucial porque aves de pequeno porte perdem calor corporal vertiginosamente sob anestésicos inalatórios. A cânula sem balonete protege a traqueia de estenoses fatais.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Intubação com cânula sem cuff, controle estrito de pressão de via aérea e suporte térmico',
                mechanism: 'Preservação da integridade da mucosa traqueal e manutenção da termorregulação metabólica',
                effect: 'Plano anestésico estável sem depressão cardiorrespiratória por hipotermia',
                clinicalMeaning: 'Recuperação anestésica suave em menos de 8 minutos, sem estenose traqueal tardia'
              }
            },
            {
              id: 'opt_dec_wild_2',
              label: 'Usar tubo com cuff e inflar com 2 mL de ar para vedar hermeticamente a traqueia',
              description: 'Inflar o balonete traqueal para evitar escape de gás halogenado.',
              isOptimal: false,
              consequenceText: 'Erro gravíssimo com dano iatrogênico permanente! A insuflação do cuff contra anéis traqueais completos causa isquemia da mucosa, necrose cartilaginosa e estenose obstrutiva traqueal progressiva que levará a ave à morte por asfixia 2 semanas após a cirurgia.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Insuflação de cuff traqueal em traqueia de ave com anéis completos',
                mechanism: 'Isquemia por compressão microvascular da mucosa contra o anel cartilaginoso rígido',
                effect: 'Necrose tecidual e cicatrização estenosante da luz traqueal',
                clinicalMeaning: 'Morte tardia da ave por asfixia traqueal obstrutiva'
              }
            },
            {
              id: 'opt_dec_wild_3',
              label: 'Não fornecer aquecimento térmico porque o clima da clínica é agradável (22°C)',
              description: 'Manter a ave sobre o inox cirúrgico sem colchão térmico.',
              isOptimal: false,
              consequenceText: 'Conduta perigosa. A temperatura normal de um tucano é de 41.5°C a 42.5°C. Deixar a ave a 22°C induz hipotermia severa (< 35°C), bradicardia profunda, atraso de metabolização de drogas e óbito no pós-operatório imediato.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Hipotermia transoperatória por perda de calor por condução e radiação',
                mechanism: 'Desaceleração enzimática hepática e depressão da condução miocárdica',
                effect: 'Arritmias cardíacas severas e incapacidade de acordar da anestesia',
                clinicalMeaning: 'Parada cardiorrespiratória em recuperação'
              }
            }
          ],
          learningTakeaways: [
            'Aves possuem anéis traqueais completos de 360°: tubos com cuff inflado são formalmente proibidos.',
            'Nunca comprima a quilha ou caixa torácica de uma ave: ela precisa movimentar o esterno para respirar.',
            'A hipotermia é o maior carrasco anestésico na clínica de aves: o suporte térmico ativo é obrigatório desde a indução até a recuperação total.'
          ]
        }
      },
      {
        id: 'sec_wildlife_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Particularidades da Medicina de Silvestres',
        exerciseId: 'ex_wildlife_01'
      }
    ]
  }
];

// ==========================================
// 6. BIOTECNOLOGIA DA REPRODUÇÃO & OBSTETRÍCIA
// ==========================================
export const BIOTECH_OBSTETRICS_EXERCISES: LearningExercise[] = [
  {
    id: 'ex_biotech_01',
    conceptId: 'concept_biotech_iatf_dystocia_cesarean',
    type: 'multiple_choice',
    prompt: 'Em um protocolo clássico de Inseminação Artificial em Tempo Fixo (IATF) de 3 manejos em vacas de corte (Protocolo à base de Progesterona e Benzoato de Estradiol), qual é o evento hormonal induzido no Dia 0 (D0) com a inserção do implante intravaginal de progesterona e aplicação de Benzoato de Estradiol?',
    options: [
      {
        id: 'opt_bio_1',
        text: 'Atresia e regressão do folículo dominante pré-existente e bloqueio de pulsos de LH, provocando a emergência sincronizada de uma nova onda de crescimento folicular cerca de 3 a 4 dias depois',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A combinação de progesterona com ésteres de estrógeno (Benzoato de Estradiol) no D0 promove um feedback negativo sobre a hipófise anterior, suprimindo o LH e o FSH. Isso induz a atresia de qualquer folículo dominante velho ou persistente no ovário, permitindo que uma nova onda folicular homogênea emerja sincronizadamente em todas as vacas do lote.'
      },
      {
        id: 'opt_bio_2',
        text: 'Ovulação imediata de todos os folículos presentes no ovário em até 2 horas',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A progesterona alta bloqueia a ovulação, e o Benzoato no D0 visa sincronizar a emergência de nova onda folicular, e não ovular folículos velhos.'
      },
      {
        id: 'opt_bio_3',
        text: 'Destruição irreversível do endométrio para impedir a implantação embrionária',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O protocolo de IATF visa maximizar a fertilidade uterina para permitir a prenhez.'
      },
      {
        id: 'opt_bio_4',
        text: 'Liberação de ocitocina pela neuro-hipófise para estimular a descida do leite',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A ocitocina atua no miométrio no parto e nas células mioepiteliais da glândula mamária, não na sincronização folicular ovariana da IATF.'
      }
    ]
  }
];

export const BIOTECH_OBSTETRICS_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_biotech_01_iatf_protocol',
    moduleId: 'mod_biotech_obstetrics',
    title: 'Biotecnologia da Reprodução: Protocolos de IATF & Fisiologia Ovariana',
    shortDescription: 'Dinâmica das ondas foliculares, protocolos hormonais P4 + E2 + PGF2alfa + eCG e manobras obstétricas em distocias.',
    estimatedMinutes: 12,
    order: 1,
    concepts: ['concept_biotech_iatf_dystocia_cesarean'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_biotech_th1',
        type: 'theory',
        title: 'A Engenharia Endócrina da Inseminação Artificial em Tempo Fixo (IATF)',
        contentMarkdown: `# Aula Universitária: Biotecnologia da Reprodução & Sincronização Ovariana por IATF

> 📖 Referência Canônica: Baruselli, P. S. et al. *Bovine Reproduction: Manipulation of Follicular and Luteal Dynamics for Timed Artificial Insemination (TAI)*. Anim Reprod. Hafez, E. S. E. *Reprodução Animal*, 7ª ed. Manole. Bó, G. A. et al. *Technologies for Fixed-time Artificial Insemination in Beef and Dairy Cattle*.

### Como Inseminar 1.000 Vacas no Mesmo Minuto sem Observar Cio

A IATF revolucionou a pecuária mundial ao eliminar a dependência da detecção visual de estro (que falhava em mais de 50% dos casos a campo). O protocolo padrão de 3 manejos baseia-se no controle farmacológico das ondas foliculares:

1. **Dia 0 (D0 - Início do Protocolo):** Inserção do dispositivo intravaginal de **Progesterona (P4)** + Administração intramuscular de **Benzoato de Estradiol (2.0 mg BE)** → Atresia forçada do folículo dominante antigo e sincronização da emergência da nova onda de crescimento folicular cerca de 4 dias depois.
2. **Dia 8 ou 9 (D8/D9 - Retirada & Lise Lútea):** Retirada do implante de P4 + Injeção de **Prostaglandina $PGF_{2\alpha}$ (Dinoprost ou D-Cloprostenol)** para induzir a luteólise completa + **Cipionato de Estradiol (0.5 a 1.0 mg ECP)** como indutor da ovulação + **Gonadotrofina Coriônica Equina (300 a 400 UI eCG)** para sustentar o crescimento folicular em matrizes em anestro nutricional pós-parto.
3. **Dia 10 ou 11 (D10/D11 - 48 a 54 horas após retirada de P4):** Inseminação Artificial em Tempo Fixo (IATF) com sêmen descongelado no corpo do útero, coincidindo exatamente com o pico ovulatório sincronizado.`
      },
      {
        id: 'sec_biotech_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Lote 12 (Fazenda Primavera)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Otimização de Protocolo de IATF em Vacas Nelore Paridas em Anestro',
          patient: {
            name: 'Lote 12 (Matrizes com Bezerro ao Pé)',
            species: 'Bovino de Corte',
            breed: 'Nelore Comercial',
            age: 'Multíparas (4 a 6 anos)',
            weightKg: 460,
            habitatOrEnvironment: 'Pastagem de braquiária com ECC 2.5/5 (Anestro pós-parto)'
          },
          vitals: {
            heartRateBpm: 60,
            respiratoryRateRpm: 18,
            temperatureCelsius: 38.6,
            mucousMembranes: 'Normocoradas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Lote de 200 vacas Nelore com bezerros de 45 dias ao pé. Devido à seca e amamentação contínua, os animais apresentam escore de condição corporal moderado a baixo (ECC 2.5) e a ultrassonografia ovariana prévia revelou ausência de corpo lúteo funcional (anestro pós-parto profundo). O produtor quer taxa de prenhez acima de 50%.',
          exams: [
            {
              category: 'imaging',
              title: 'Ultrassonografia Reprodutiva Transretal no D8 (Retirada de P4)',
              findings: 'Avaliação do diâmetro do folículo dominante no momento da retirada do implante intravaginal.',
              abnormalValues: [
                { parameter: 'Diâmetro Médio do Folículo no D8', value: '8.2 mm (Crescimento lento)', reference: '> 9.5 mm', status: 'low' },
                { parameter: 'Presença de Corpo Lúteo', value: 'Ausente (Anestro acentuado)', reference: 'Cíclica', status: 'low' }
              ]
            }
          ],
          challengePrompt: 'Para vacas paridas em anestro com bezerro ao pé e folículos em crescimento lento no D8, qual molécula hormonal é obrigatória?',
          decisionOptions: [
            {
              id: 'opt_dec_bio_1',
              label: 'Adicionar Gonadotrofina Coriônica Equina (eCG / 300 UI IM) na retirada do dispositivo de P4 no D8 + PGF2alfa + Cipionato de Estradiol',
              description: 'A eCG mimetiza a ação de FSH e LH, estimulando o crescimento folicular final e elevando a produção de estradiol e a taxa de ovulação em vacas com bezerro.',
              isOptimal: true,
              consequenceText: 'Decisão reprodutiva de altíssimo impacto econômico! A inclusão da eCG no momento da retirada do dispositivo de P4 compensa a baixa pulsatilidade de LH causada pela amamentação do bezerro. O folículo cresce vigorosamente até 12-14 mm, gerando corpo lúteo robusto com alta taxa de prenhez.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Administração de eCG na retirada do implante de progesterona',
                mechanism: 'Ligação aos receptores ovarianos de FSH e LH nas células da granulosa e teca',
                effect: 'Aceleração da taxa de crescimento do folículo dominante e elevação da síntese de estradiol',
                clinicalMeaning: 'Aumento da taxa de ovulação e concepção de 35% para mais de 55% no lote'
              }
            },
            {
              id: 'opt_dec_bio_2',
              label: 'Não aplicar eCG nem cipionato de estradiol e apenas inseminar as vacas que apresentarem muco no chão',
              description: 'Retirar o P4 e esperar manifestação espontânea de cio em vacas em anestro.',
              isOptimal: false,
              consequenceText: 'Fracasso completo! Vacas de corte com bezerro ao pé em anestro praticamente não manifestam cio espontâneo. Sem o indutor de ovulação (cipionato) e sem eCG, a taxa de prenhez despencará para menos de 15%.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Omissão de indutores de ovulação em protocolo de IATF',
                mechanism: 'Incapacidade de deflagrar o pico pré-ovulatório de LH',
                effect: 'Atresia folicular sem ovulação sincronizada',
                clinicalMeaning: 'Prejuízo financeiro maciço com sêmen desperdiçado e lote vazio'
              }
            },
            {
              id: 'opt_dec_bio_3',
              label: 'Dobrar a dose de Progesterona no D8 deixando o implante por mais 15 dias',
              description: 'Prolongar o período de P4 para 23 dias.',
              isOptimal: false,
              consequenceText: 'Erro técnico grave. Manter implantes de progesterona por mais de 9 a 10 dias gera o chamado "folículo persistente" envelhecido, com oócito degenerado e fertilidade nula.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Exposição excessivamente prolongada a níveis subliminares de progesterona',
                mechanism: 'Envelhecimento e senescência oocitária intrafolicular',
                effect: 'Fertilização falha ou morte embrionária precoce',
                clinicalMeaning: 'Queda drástica na taxa de prenhez final'
              }
            }
          ],
          learningTakeaways: [
            'O Benzoato de Estradiol associado à Progesterona no D0 promove a regressão folicular e início de nova onda.',
            'A eCG é indispensável em vacas com bezerro ao pé e ECC baixo para estimular o crescimento do folículo final.',
            'O Cipionato de Estradiol aplicado no D8 garante o pico de LH e ovulação sincronizada 48 horas depois.'
          ]
        }
      },
      {
        id: 'sec_biotech_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Protocolos Hormonais de IATF',
        exerciseId: 'ex_biotech_01'
      }
    ]
  }
];
