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
  },
  {
    id: 'ex_pathophys_02',
    conceptId: 'concept_pathophysiology_dic_cascade',
    type: 'multiple_choice',
    prompt: 'Na monitorização hemostática de um cão com pancreatite necro-hemorrágica aguda desenvolvendo CIVD subclínica (fase pró-trombótica), qual biomarcador anticoagulante natural sofre redução sérica precoce devido ao consumo e extravasamento microvascular?',
    options: [
      {
        id: 'opt_dic_1',
        text: 'Antitrombina III (AT-III), cuja queda abaixo de 60-70% da atividade normal correlaciona-se fortemente com hipercoagulabilidade e trombogênese microvascular ativa',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! A Antitrombina III é o principal anticoagulante endógeno circulante, inativando trombina (IIa), Xa, IXa e XIa. Na fase pró-trombótica da CIVD, a AT-III liga-se avidamente à trombina gerada em excesso, sendo consumida rapidamente. Níveis de AT-III < 60% associam-se a prognóstico grave e risco iminente de trombose fatal.'
      },
      {
        id: 'opt_dic_2',
        text: 'Fator de von Willebrand, que desaparece completamente da circulação no início da pancreatite',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O fator de von Willebrand é liberado pelo endotélio ativado como reagente de fase aguda, tendendo a aumentar (e não diminuir) nos estágios iniciais da inflamação sistêmica.'
      },
      {
        id: 'opt_dic_3',
        text: 'Fibrinogênio sérico, que cai para zero nas primeiras 2 horas de pancreatite',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O fibrinogênio é um reagente de fase aguda positivo sintetizado em altas concentrações pelo fígado estimulado por IL-6, podendo estar normal ou até elevado antes de sofrer consumo tardio.'
      },
      {
        id: 'opt_dic_4',
        text: 'Eritropoetina plasmática por sequestro esplênico de hemácias',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A eritropoetina regula a eritropoiese renal e não atua como inibidor fisiológico da cascata de coagulação.'
      }
    ]
  },
  {
    id: 'ex_pathophys_03',
    conceptId: 'concept_pathophysiology_cellular_shock_dysoxia',
    type: 'multiple_choice',
    prompt: 'Em um paciente em choque séptico refratário a altas doses de norepinefrina e infusão volêmica criteriosa, observa-se persistência de hipotensão severa (PAM 48 mmHg) e hiperlactatemia severa (8.2 mmol/L). Qual é o mecanismo fisiopatológico primário que explica a vasoplegia refratária a catecolaminas e a produção celular anaeróbica de lactato?',
    options: [
      {
        id: 'opt_shock_1',
        text: 'Dessensibilização e internalização de receptores adrenérgicos alfa-1 induzida por NO e citocinas, abertura de canais K-ATP na musculatura vascular lisa, e disóxia mitocondrial com inibição do complexo piruvato desidrogenase',
        isCorrect: true,
        pedagogicalFeedback: 'Excelente! No choque séptico prolongado, a expressão de óxido nítrico sintase induzível (iNOS) produz concentrações tóxicas de NO e peroxinitrito, levando à fosforilação e dessensibilização dos receptores alfa-1 adrenérgicos e abertura de canais de potássio sensíveis ao ATP (hiperpolarização e vasodilatação irrestringível). No nível celular, a disfunção mitocondrial (disóxia citopática) inibe a piruvato desidrogenase, forçando o piruvato a se converter em lactato via lactato desidrogenase para regenerar NAD+.'
      },
      {
        id: 'opt_shock_2',
        text: 'Ausência total de síntese de lactato pelos tecidos periféricos devido à hiperventilação compensatória',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A hiperlactatemia clínica (8.2 mmol/L) comprova a massiva glicólise anaeróbica e disóxia celular em curso.'
      },
      {
        id: 'opt_shock_3',
        text: 'Hiperativação dos receptores beta-1 renais levando à retenção excessiva de água livre e vasodilatação',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Os receptores beta-1 renais estimulam a liberação de renina e vasocontrição mediada por angiotensina II, e não vasodilatação periférica generalizada.'
      },
      {
        id: 'opt_shock_4',
        text: 'Espasmo arterial generalizado com aumento da pós-carga e estenose aórtica funcional',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O choque séptico e distributivo cursa com vasoplegia profunda e diminuição dramática da resistência vascular sistêmica, e não espasmo arterial generalizado.'
      }
    ]
  },
  {
    id: 'ex_pathophys_04',
    conceptId: 'concept_pathophysiology_equine_endotoxemia',
    type: 'multiple_choice',
    prompt: 'Durante um quadro de cólica equina estrangulativa por volvo de cólon maior, a quebra da barreira da mucosa intestinal permite o influxo maciço de lipopolissacarídeo (LPS) na veia porta e circulação sistêmica. Qual cascata fisiopatológica conecta a endotoxemia sistêmica à destruição da lâmina própria do casco (Laminite Séptica Equina)?',
    options: [
      {
        id: 'opt_endo_1',
        text: 'Ativação de TLR-4 endotelial e de neutrófilos, liberação maciça de metaloproteinases de matriz (MMP-2 e MMP-9) no tecido laminar digital e colapso mecânico dos hemidesmossomos da membrana basal dermoepidérmica',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A endotoxina (LPS) ativa o receptor TLR4 nos macrófagos e células endoteliais, deflagrando liberação de TNF-alfa, IL-1beta e endotelina-1. Os neutrófilos ativados marginam-se na microcirculação laminar do casco e liberam elastase e ativam pró-metaloproteinases de matriz (MMP-2 e MMP-9). As MMPs clivam o colágeno tipo IV e a laminina da membrana basal que ancora os queratinócitos da lâmina epidérmica às lâminas dérmicas, resultando na perda de sustentação mecânica da falange distal (terceira falange).'
      },
      {
        id: 'opt_endo_2',
        text: 'Infecção bacteriana direta e purulenta das lâminas ungueais por Salmonella enterica carreada pelas veias digitais',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A laminite associada à endotoxemia é um processo imuno-inflamatório e enzimático mediado por toxinas e citocinas, e não uma pioartrite ou infecção bacteriana direta no cório ungueal.'
      },
      {
        id: 'opt_endo_3',
        text: 'Proliferação descontrolada de fibroblastos com anquilose precoce da articulação interfalângica distal',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A laminite aguda causa destruição enzimática das junções dermoepidérmicas e rotação/afundamento da falange, e não fibrose anquilosante articular.'
      },
      {
        id: 'opt_endo_4',
        text: 'Produção anômala de queratina hipertrofiada com espessamento da parede dorsal do casco em menos de 6 horas',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Alterações do crescimento e formato ungueal só ocorrem meses após o insulto inicial na fase crônica, não na fisiopatologia da fase aguda.'
      }
    ]
  },
  {
    id: 'ex_pathophys_05',
    conceptId: 'concept_pathophysiology_mods_organ_failure',
    type: 'multiple_choice',
    prompt: 'Em medicina intensiva veterinária, a Síndrome da Disfunção de Múltiplos Órgãos (MODS) representa o estágio terminal da desregulação inflamatória. No sistema respiratório, qual lesão histopatológica e critério clínico-fisiológico definem a ocorrência da Síndrome do Desconforto Respiratório Agudo (SDRA / ARDS) de origem extrapulmonar?',
    options: [
      {
        id: 'opt_mods_1',
        text: 'Dano alveolar difuso com aumento da permeabilidade capilar alvéolo-intersticial, formação de membranas hialinas e razão PaO2/FiO2 <= 200 em ventilação mecânica com infiltrado pulmonar bilateral não cardiogênico',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! A ARDS (Síndrome do Desconforto Respiratório Agudo) caracteriza-se por lesão endotelial e epitelial alveolar difusa, influxo de exsudato rico em proteínas para o lúmen alveolar (inativação do surfactante pulmonar e membranas hialinas), edema não cardiogênico (pressão de oclusão da artéria pulmonar normal ou ausência de congestão atrial esquerda) e hipoxemia refratária com PaO2/FiO2 <= 200 (ou <= 300 para Lesão Pulmonar Aguda / ALI).'
      },
      {
        id: 'opt_mods_2',
        text: 'Estenose congênita traqueal associada a colapso de brônquios principais em cães jovens',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O colapso traqueal é uma doença anatômica e degenerativa de anéis cartilaginosos, sem relação com a fisiopatologia da ARDS em MODS.'
      },
      {
        id: 'opt_mods_3',
        text: 'Tromboembolismo pulmonar unicamente segmentar sem qualquer inflamação endotelial alveolar',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Embora o tromboembolismo possa coexistir na sepse, a ARDS clássica é definida por dano alveolar difuso e exsudato proteináceo inflamatório bilateral com perda de surfactante.'
      },
      {
        id: 'opt_mods_4',
        text: 'Fibrose intersticial pulmonar idiopática progressiva com calcificação pleural crônica em cães idosos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A fibrose idiopática é uma condição crônica degenerativa (comum no West Highland Terrier), enquanto a ARDS na MODS é um evento fulminante agudo decorrente de sepse ou trauma sistêmico.'
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
    estimatedMinutes: 14,
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

$$\\text{LPS / Bactérias} \\longrightarrow \\text{Monócitos & Endotélio} \\longrightarrow \\text{TNF-}\\alpha + \\text{IL-1} \\longrightarrow \\text{Óxido Nítrico (iNOS)} \\longrightarrow \\text{Vasoplegia Severa}$$

---

### A Fisiopatologia da CIVD (A Morte por Trombose & Hemorragia)

A CIVD não é uma doença primária, mas a manifestação final de uma catástrofe inflamatória descontrolada:
1. **Fase Trombótica Inicial:** A exposição maciça do Fator Tecidual (FT) pelos macrófagos e endotélio lesado ativa a cascata extrínseca. Microtrombos de fibrina disseminados ocluem capilares renais, hepáticos e pulmonares → **Falência de Múltiplos Órgãos (MODS)**.
2. **Coagulopatia de Consumo:** Os fatores de coagulação primordiais (I, II, V, VIII) e as plaquetas são todos exauridos na formação dos microtrombos intravasculares.
3. **Fase Hemorrágica Terminal:** Com a hemostasia exaurida e a hiperfibrinólise sistêmica ativada pela plasmina, o sangue perde completamente a capacidade de coagular → petéquias, equimoses, hemorragias intracavitárias e sufusões fatais.

\`\`\`mermaid
flowchart TD
    SIRS[Insulto Séptico Grave / Piometra / Peritonite] --> LPS[LPS & PAMPs Bacterianos]
    LPS --> Endotelio[Ativação Endotelial & Macrofágica]
    Endotelio --> Citocinas[Tempestade de TNF-alfa, IL-1 e IL-6]
    Citocinas --> iNOS[Indução de iNOS: Hiperprodução de Óxido Nítrico]
    iNOS --> Vasoplegia[Vasoplegia Profunda: PAM < 60 mmHg Choque Distributivo]
    Citocinas --> TF[Expressão Maciça de Fator Tecidual]
    TF --> Trombina[Geração Maciça de Trombina e Deposição de Fibrina]
    Trombina --> Microtrombos[Microtrombose Capilar Disseminada: Isquemia MODS]
    Microtrombos --> Consumo[Exaustão de Fatores de Coagulação e Plaquetas]
    Consumo --> Fibrinolise[Ativação de Plasmina: Hiperfibrinólise & Dímero-D Elevado]
    Fibrinolise --> Hemorragias[Hemorragias Incoercíveis & Petéquias Cutâneas]
\`\`\`

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
              label: 'Administrar apenas heparina em alta dose para dissolver os trombos',
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
  },
  {
    id: 'lesson_pathophys_02_dic_consumption',
    moduleId: 'mod_pathophysiology',
    title: 'Coagulação Intravascular Disseminada: Microtrombose e Coagulopatia de Consumo',
    shortDescription: 'Patogênese da CIVD hipercoagulável à hipocoagulável: consumo de antitrombina III, geração de dímeros-D e esquizocitose.',
    estimatedMinutes: 15,
    order: 2,
    concepts: ['concept_pathophysiology_dic_cascade'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_pathophys_th2',
        type: 'theory',
        title: 'A Dinâmica Bimodal da CIVD: Trombose Oculta vs. Hemorragia Fulminante',
        contentMarkdown: `# Aula Universitária: Coagulação Intravascular Disseminada (CIVD) & Coagulopatia de Consumo

> 📖 Referências Canônicas: DiBartola, S. P. *Fluid, Electrolyte, and Acid-Base Disorders in Small Animal Practice*, 5th ed. Saunders; Silverstein, D. C.; Hopper, K. *Small Animal Critical Care Medicine*, 2nd ed. Elsevier, Cap. 82: Disseminated Intravascular Coagulation.

### A Fisiopatologia Bimodal da CIVD

A Coagulação Intravascular Disseminada (CIVD) é uma síndrome hemostática intermediária adquirida, caracterizada pela ativação desregulada e sistêmica da coagulação intravascular:

1. **Fase Pró-Trombótica (Hipercoagulável / Oculta):**
   - Liberação maciça de Fator Tecidual (FT/CD142) por endotélio lesado, macrófagos ativados ou células neoplásicas.
   - Ativação descontrolada do complexo FT-FVIIa, gerando explosão de trombina.
   - O consumo do inibidor fisiológico principal, a **Antitrombina III (AT-III)**, reduz sua atividade plasmática para níveis inferiores a 60%, suprimindo a capacidade do organismo de frear a coagulação.
   - Deposição difusa de redes de fibrina na microvasculatura capilar dos rins, fígado, miocárdio e pulmões.

2. **Fase de Consumo e Hiperfibrinólise (Hipocoagulável / Hemorrágica):**
   - As plaquetas e fatores da via comum e intrínseca (I, II, V, VIII) são consumidos na formação dos incontáveis microtrombos capilares.
   - As células endoteliais liberam ativador tecidual do plasminogênio (tPA), gerando **plasmina** livre na circulação.
   - A plasmina degrada a fibrina polimerizada e os monômeros de fibrina, gerando altas concentrações de **Produtos de Degradação da Fibrina (PDFs)** e especificamente **Dímeros-D**.
   - Os PDFs exercem potente ação anticoagulante direta, inibindo a agregação plaquetária e a polimerização da fibrina residual.

\`\`\`mermaid
flowchart TD
    Gatilho[Gatilho Séptico / Neoplásico / Pancreático] --> FT[Expressão Maciça de Fator Tecidual]
    FT --> Trombina[Geração Contínua de Trombina Livre]
    Trombina --> ConsumoAT[Esgotamento de Antitrombina III: AT < 60%]
    Trombina --> RedesFibrina[Deposição de Malhas de Fibrina Capilar]
    RedesFibrina --> Cisalhamento[Cisalhamento Mecânico das Hemácias: Esquizócitos]
    RedesFibrina --> Isquemia[Microisquemia Renal, Pulmonar e Hepática]
    Trombina --> ConsumoFatores[Consumo Plasmático de Fibrinogênio, Fator V, VIII e Plaquetas]
    RedesFibrina --> Plasmina[Ativação de Plasmina: Hiperfibrinólise]
    Plasmina --> DimerosD[Elevação Explosiva de Dímeros-D e PDFs]
    DimerosD --> AnticoagulacaoEndogena[Inibição da Hemostasia Residual]
    ConsumoFatores --> DiateseHemorragica[Diátese Hemorrágica: Petéquias, Sangramento em Tratos]
\`\`\`

---

### Diagnóstico Laboratorial Integrado da CIVD

| Marcador Laboratorial | Fase Pró-Trombótica (Precoce) | Fase de Consumo (Avançada) | Significado Fisiopatológico |
| :--- | :--- | :--- | :--- |
| **Antitrombina III (AT-III)** | < 60-70% (Marcador mais sensível) | Indetectável / Exaurida | Perda da defesa anticoagulante natural |
| **Contagem de Plaquetas** | Normal a levemente diminuída | < 50.000 /uL (Trombocitopenia) | Consumo maciço em trombos microvasculares |
| **Dímero-D** | Levemente elevado | Severamente elevado (> 1000 ng/mL) | Lise de fibrina entrelaçada (Cross-linked) |
| **Tempo de Protrombina (TP)** | Normal | Marcado prolongamento (> 25% do ref) | Esgotamento do Fator VII e via comum |
| **TTPa** | Normal ou encurtado | Marcado prolongamento | Exaustão dos Fatores VIII, IX, XI e XII |
| **Morfologia Eritrocitária** | Esquizócitos raros | Esquizocitose evidente (> 2-3 por campo) | Hemólise microangiopática por cisalhamento |`
      },
      {
        id: 'sec_pathophys_lab2',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Thor (Schnauzer)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'CIVD Secundária a Pancreatite Necro-Hemorrágica Aguda',
          patient: {
            name: 'Thor',
            species: 'Canino',
            breed: 'Schnauzer Miniatura',
            age: '7 anos',
            weightKg: 9.2,
            habitatOrEnvironment: 'Casa interna'
          },
          vitals: {
            heartRateBpm: 160,
            respiratoryRateRpm: 38,
            temperatureCelsius: 39.5,
            mucousMembranes: 'Ictéricas com petéquias na gengiva e orelhas',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'Cão ingeriu grande quantidade de gordura de churrasco há 48 horas. Evoluiu com vômitos profusos, dor abdominal em posição de prece (oração) refratária a analgésicos comuns, apatia extrema e surgimento de manchas purpúricas no abdômen ventral nas últimas 8 horas.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Painel Hemostático, Bioquímica e Enzimologia',
              findings: 'Colapso hemostático secundário à autodigestão pancreática e necrose gordurosa.',
              abnormalValues: [
                { parameter: 'Atividade de Antitrombina III', value: '42%', reference: '80 - 120%', status: 'critical' },
                { parameter: 'Dímero-D', value: '2.450 ng/mL', reference: '< 250 ng/mL', status: 'critical' },
                { parameter: 'Plaquetas', value: '45.000 /uL', reference: '200.000 - 500.000 /uL', status: 'critical' },
                { parameter: 'TP', value: '21.0 s', reference: '11 - 15 s', status: 'high' },
                { parameter: 'TTPa', value: '32.0 s', reference: '15 - 20 s', status: 'high' },
                { parameter: 'Lipase Spec cPL', value: '> 1.000 ug/L', reference: '< 200 ug/L', status: 'critical' },
                { parameter: 'Esquizócitos no Esfregaço', value: 'Presentes (4 por campo 100x)', reference: 'Ausentes', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Thor encontra-se na transição para a fase hemorrágica da CIVD induzida por pancreatite necrosante. Qual a conduta hemostática e sistêmica prioritária?',
          decisionOptions: [
            {
              id: 'opt_dec_path2_1',
              label: 'Administração de Plasma Fresco Congelado (PFC, 15 mL/kg) para repor Antitrombina III e fatores de coagulação + Fluidoterapia intensiva com Ringer Lactato + Analgesia multimodal com opioide puro (Metadona) + Heparina de baixo peso molecular sob monitorização',
              description: 'O plasma repõe o substrato anticoagulante deficitário (AT-III) e os fatores consumidos, enquanto a analgesia e perfusão quebram a inflamação pancreática.',
              isOptimal: true,
              consequenceText: 'Excelente conduta médica! A infusão de PFC fornece AT-III funcional (essencial para interromper a formação desgovernada de trombos) e repõe fibrinogênio e fatores de coagulação antes que ocorra hemorragia cavitária letal. A hidratação adequada mantém a microcirculação pancreática viável.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Reposição de AT-III e fatores hemostáticos via Plasma Fresco Congelado associada a controle volêmico e analgesia',
                mechanism: 'Neutralização da trombina livre circulante e atenuação da proteólise sistêmica mediada por tripsina',
                effect: 'Elevação da AT-III para > 70%, estabilização do TP/TTPa e interrupção da hemólise microangiopática',
                clinicalMeaning: 'Bloqueio da transição para choque hemorrágico fatal com recuperação do paciente'
              }
            },
            {
              id: 'opt_dec_path2_2',
              label: 'Administrar apenas ácido tranexâmico em altas doses para inibir completamente a fibrinólise',
              description: 'Interromper a fibrinólise com antifibrinolítico sem repor fatores ou controlar o consumo de antitrombina.',
              isOptimal: false,
              consequenceText: 'Catástrofe fisiológica! Na fase de CIVD com microtrombose ativa e AT-III em 42%, o uso isolado de antifibrinolíticos bloqueia a plasmina, fazendo com que os microtrombos não sejam dissolvidos. O paciente desenvolve necrose cortical renal aguda e infartos pulmonares maciços.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso isolado de antifibrinolítico (ácido tranexâmico) em CIVD com depleção severa de AT-III',
                mechanism: 'Abolição da lise fisiológica de trombos na presença de trombogênese microvascular ativa',
                effect: 'Oclusão trombótica irreversível de leitos capilares vitais',
                clinicalMeaning: 'Insuficiência renal anúrica e óbito por falência de múltiplos órgãos em 24h'
              }
            },
            {
              id: 'opt_dec_path2_3',
              label: 'Prescrever anti-inflamatório não esteroidal (meloxicam) para aliviar a dor pancreática e liberar o animal para jejum domiciliar',
              description: 'Conduta contraindicada em pancreatite com coagulopatia e hipotensão.',
              isOptimal: false,
              consequenceText: 'Erro gravíssimo! AINEs são absolutamente contraindicados em pacientes com perfusão marginal e coagulopatia, precipitando úlcera gastrointestinal perfurante e lesão renal aguda isquêmica.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Administração de AINE em choque hipovolêmico com CIVD',
                mechanism: 'Bloqueio de prostaglandinas vasodilatadoras renais (PGE2/PGI2) e agressão da mucosa gástrica',
                effect: 'Hemorragia digestiva alta torrencial e necrose tubular aguda isquêmica',
                clinicalMeaning: 'Parada circulatória irreversível'
              }
            }
          ],
          learningTakeaways: [
            'A Antitrombina III (AT-III) é o melhor termômetro biológico da fase pró-trombótica da CIVD; sua queda antecede as hemorragias clínicas.',
            'O plasma fresco congelado (PFC) é o pilar terapêutico para repor AT-III e fatores hemostáticos de consumo.',
            'O achado de esquizócitos no sangue periférico comprova que as hemácias estão sendo cortadas por redes de fibrina intravascular.'
          ]
        }
      },
      {
        id: 'sec_pathophys_ex2',
        type: 'exercise',
        title: 'Exercício Clínico: CIVD e Antitrombina III',
        exerciseId: 'ex_pathophys_02'
      }
    ]
  },
  {
    id: 'lesson_pathophys_03_refractory_shock',
    moduleId: 'mod_pathophysiology',
    title: 'Choque Refratário, Disóxia Celular & Falência Bioenergética Mitocondrial',
    shortDescription: 'Do colapso hemodinâmico macrovascular à disóxia citopática: disfunção mitocondrial, vasoplegia refratária e hiperlactatemia tipo A.',
    estimatedMinutes: 15,
    order: 3,
    concepts: ['concept_pathophysiology_cellular_shock_dysoxia'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_pathophys_th3',
        type: 'theory',
        title: 'A Falência Bioenergética Celular no Choque Terminal',
        contentMarkdown: `# Aula Universitária: Choque Refratário, Disóxia Celular & Falência Mitocondrial

> 📖 Referências Canônicas: Vincent, J. L. et al. *Textbook of Critical Care*, 7th ed. Elsevier; Silverstein, D. C.; Hopper, K. *Small Animal Critical Care Medicine*, Section IV: Shock Syndromes.

### A Transição da Hipoperfusão para a Disóxia Citopática

O choque é tradicionalmente definido como a incapacidade do sistema cardiovascular de ofertar oxigênio aos tecidos em quantidade suficiente para suprir a demanda metabólica ($DO_2 < VO_2$). Contudo, no **choque refratário ou distributivo terminal**, a lesão deixa de ser apenas uma limitação de transporte macrovascular e passa a residir na **usina bioenergética da célula: a mitocôndria**:

1. **A Cascata da Disóxia Citopática:**
   - As citocinas pró-inflamatórias (TNF-alfa) e o excesso de óxido nítrico e ânion superóxido formam **peroxinitrito ($ONOO^-$)**.
   - O peroxinitrito inibe irreversivelmente os complexos da cadeia de transporte de elétrons mitocondrial (Complexo I, II e IV - citocromo c oxidase).
   - Ocorre colapso do gradiente eletroquímico transmembrana mitocondrial e abertura do poro de permeabilidade de transição mitocondrial (mPTP), desacoplando a fosforilação oxidativa.
   - A célula perde a capacidade de produzir ATP aeróbico, independentemente de quanto oxigênio arterial ($PaO_2$) esteja dissolvido no sangue!

2. **Glicólise Anaeróbica e Acidose Lática Tipo A:**
   - Com a inibição da piruvato desidrogenase e falta de ATP, o piruvato gerado pela glicólise citosólica não pode ingressar no Ciclo de Krebs.
   - A enzima lactato desidrogenase (LDH) converte piruvato em **ácido lático** para regenerar $NAD^+$ e permitir que a glicólise continue gerando 2 miseráveis moléculas de ATP por glicose.
   - A falha da bomba $Na^+/K^+$ ATPase dependente de ATP provoca influxo maciço de sódio e água para o citoplasma, levando a **tumefação celular patológica (edema celular)** e lise de organelas.

\`\`\`mermaid
flowchart TD
    ChoqueSeptico[Sepse Refratária / Choque Distributivo] --> NO_O2[Produção Excessiva de Óxido Nítrico & Peroxinitrito]
    NO_O2 --> InibicaoMitocondria[Inibição Direta dos Complexos da Cadeia Respiratória]
    InibicaoMitocondria --> QuedaATP[Colapso da Síntese de ATP: Queda de 36 para 2 ATPs]
    QuedaATP --> FalhaBomba[Inibição da Bomba Na+/K+ ATPase]
    FalhaBomba --> EdemaCelular[Influxo de Sódio e Água: Tumefação Celular & Morte Necrótica]
    QuedaATP --> BloqueioKrebs[Inibição do Complexo Piruvato Desidrogenase]
    BloqueioKrebs --> AcumuloPiruvato[Desvio de Piruvato para Lactato via LDH]
    AcumuloPiruvato --> AcidoseLatica[Hiperlactatemia Severa > 5-8 mmol/L & Acidose Metabólica]
    NO_O2 --> DesensibilizacaoAlfa[Dessensibilização dos Receptores Alfa-1 Adrenérgicos]
    DesensibilizacaoAlfa --> VasoplegiaRefrataria[Vasoplegia Refratária a Noradrenalina: PAM < 50 mmHg]
\`\`\`

---

### Mecanismos da Vasoplegia Refratária

No choque séptico tardio, os vasos periféricos tornam-se incapazes de se contrair mesmo sob infusão maciça de catecolaminas (dopamina, noradrenalina, epinefrina):
- **Dessensibilização dos Receptores $\\alpha_1$:** A fosforilação de receptores beta e alfa por cinases induzidas por citocinas causa sua internalização e degradação.
- **Abertura de Canais $K_{ATP}$:** A depleção de ATP intracelular nas células musculares lisas vasculares abre os canais de potássio sensíveis ao ATP, gerando hiperpolarização da membrana celular e impedindo o influxo de cálcio necessário para a contração vascular.
- **Deficiência Absoluta ou Relativa de Vasopressina:** As reservas endógenas de vasopressina na neuro-hipófise esgotam-se nas primeiras horas de choque prolongado.`
      },
      {
        id: 'sec_pathophys_lab3',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Boris (Golden Retriever)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo do Choque Séptico Vasoplégico Refratário a Catecolaminas',
          patient: {
            name: 'Boris',
            species: 'Canino',
            breed: 'Golden Retriever',
            age: '5 anos',
            weightKg: 34.0,
            habitatOrEnvironment: 'Casa com quintal'
          },
          vitals: {
            heartRateBpm: 170,
            respiratoryRateRpm: 46,
            temperatureCelsius: 36.8,
            mucousMembranes: 'Pálidas e acinzentadas, tempo de preenchimento capilar > 3.0s',
            capillaryRefillTimeSec: 3.5
          },
          anamnesis: 'Cão foi operado há 3 dias para ressecção de corpo estranho linear perfurante com peritonite séptica generalizada. Recebeu 60 mL/kg de Ringer Lactato e já está em infusão contínua de Norepinefrina em dose máxima (1.5 ug/kg/min). Apesar disso, a pressão arterial média segue em colapso (PAM 46 mmHg) e o lactato continua escalando.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Monitorização Hemodinâmica e Gasometria Arterial',
              findings: 'Colapso bioenergético celular e choque vasoplégico refratário a agonistas alfa-adrenérgicos.',
              abnormalValues: [
                { parameter: 'Pressão Arterial Média (PAM)', value: '46 mmHg', reference: '70 - 100 mmHg', status: 'critical' },
                { parameter: 'Lactato Sanguíneo', value: '8.4 mmol/L', reference: '< 2.0 mmol/L', status: 'critical' },
                { parameter: 'pH Arterial', value: '7.12', reference: '7.35 - 7.45', status: 'critical' },
                { parameter: 'Bicarbonato (HCO3-)', value: '11.8 mEq/L', reference: '18 - 24 mEq/L', status: 'critical' },
                { parameter: 'Excesso de Base (BE)', value: '-14.2 mmol/L', reference: '-4 a +4 mmol/L', status: 'critical' },
                { parameter: 'Débito Urinário', value: '0.2 mL/kg/h (Oligúria severa)', reference: '> 1.0 mL/kg/h', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Boris apresenta choque vasoplégico refratário com falência mitocondrial iminente. Qual a abordagem farmacológica de resgate recomendada pelas diretrizes internacionais de sepse veterinária?',
          decisionOptions: [
            {
              id: 'opt_dec_path3_1',
              label: 'Iniciar infusão contínua de Vasopressina (0.5 a 2 mU/kg/min) + Hidrocortisona IV em dose fisiológica (1 mg/kg q6h para CIRCI) + Otimizar suporte ventilatório com oxigênio sob pressão positiva',
              description: 'A vasopressina atua via receptores V1 vasculares independentes dos receptores alfa-1 exauridos, fechando canais K-ATP, enquanto o corticoide restaura a sensibilidade vascular às catecolaminas.',
              isOptimal: true,
              consequenceText: 'Decisão impecável de terapia intensiva avançada! A vasopressina é o vasopressor de escolha no choque refratário porque seus receptores V1 não sofrem down-regulation pelas citocinas e funcionam mesmo sob acidose severa, restaurando o tônus vascular. A hidrocortisona trata a Insuficiência Corticoide Relativa ao Estresse Crítico (CIRCI), restaurando a densidade de receptores alfa-adrenérgicos.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Infusão de vasopressina associada à reposição fisiológica de glicocorticoide',
                mechanism: 'Ativação de receptores V1 independentes de catecolaminas e reintegração dos receptores adrenérgicos',
                effect: 'Elevação da PAM para 72 mmHg, restauração do fluxo renal e queda progressiva do lactato para 3.5 mmol/L',
                clinicalMeaning: 'Reversão do choque vasoplégico refratário e preservação da viabilidade celular'
              }
            },
            {
              id: 'opt_dec_path3_2',
              label: 'Administrar mais 90 mL/kg de solução salina hipertônica a 7.5% em bolus rápido para encher o leito vascular',
              description: 'Insistir em expansão volêmica agressiva em paciente que já recebeu volume adequado e apresenta permeabilidade capilar violada.',
              isOptimal: false,
              consequenceText: 'Conduta desastrosa! Em um paciente com extravasamento capilar difuso e vasoplegia, a hipervolemia maciça causa extravasamento alvéolo-intersticial catastrófico, levando a edema pulmonar letal e afogamento por ARDS.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Sobrecarga fluídica excessiva em choque com permeabilidade capilar colapsada',
                mechanism: 'Aumento descontrolado da pressão hidrostática microvascular sem tônus vascular',
                effect: 'Edema pulmonar agudo não cardiogênico e piora da troca gasosa',
                clinicalMeaning: 'Parada respiratória por hipóxia grave'
              }
            },
            {
              id: 'opt_dec_path3_3',
              label: 'Administrar bicarbonato de sódio concentrado em bolus rápido sem suporte vasopressor',
              description: 'Tentar corrigir a acidose metabólica apenas quimicamente com bicarbonato em bolus.',
              isOptimal: false,
              consequenceText: 'Grave erro! O bicarbonato de sódio em bolus gera CO2 livre que difunde para o interior das células cerebrais e miocárdicas com mais facilidade que o bicarbonato, agravando a acidose intracelular paradoxal e diminuindo ainda mais o débito cardíaco.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de bicarbonato em bolus sem correção da causa básica e sem ventilação adequada',
                mechanism: 'Produção rápida de dióxido de carbono livre que permeia a membrana celular',
                effect: 'Acidose intracelular e liquórica paradoxal com depressão miocárdica',
                clinicalMeaning: 'Fibrilação ventricular e colapso cardíaco fulminante'
              }
            }
          ],
          learningTakeaways: [
            'A vasoplegia refratária decorre da dessensibilização dos receptores alfa-1 e da abertura de canais K-ATP nas células vasculares lisas.',
            'A vasopressina resgata a pressão arterial porque atua via receptores V1, que continuam funcionando mesmo na vigência de acidose grave.',
            'A disóxia citopática impede as mitocôndrias de consumirem oxigênio, gerando lactato mesmo sob saturação arterial normal.'
          ]
        }
      },
      {
        id: 'sec_pathophys_ex3',
        type: 'exercise',
        title: 'Exercício Clínico: Disóxia Mitocondrial e Choque Refratário',
        exerciseId: 'ex_pathophys_03'
      }
    ]
  },
  {
    id: 'lesson_pathophys_04_equine_endotoxemia',
    moduleId: 'mod_pathophysiology',
    title: 'Endotoxemia Equina: Quebra da Barreira Intestinal & Laminite Séptica',
    shortDescription: 'Patogênese da endotoxemia em equinos: translocação de LPS luminal, resposta pró-inflamatória e clivagem enzimática das lâminas do casco.',
    estimatedMinutes: 16,
    order: 4,
    concepts: ['concept_pathophysiology_equine_endotoxemia'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_pathophys_th4',
        type: 'theory',
        title: 'A Barreira Mucosa Intestinal e a Cascata Laminar no Cavalo',
        contentMarkdown: `# Aula Universitária: Endotoxemia Equina & Patogênese da Laminite Séptica

> 📖 Referências Canônicas: Smith, B. P. *Large Animal Internal Medicine*, 6th ed. Mosby; Adams and Stashak's *Lameness in Horses*, 7th ed. Wiley-Blackwell; Moore, J. N.; Barton, M. H. *Treatment of Endotoxemia in Horses*.

### A Hiper-Suscetibilidade Equina ao Lipopolissacarídeo (LPS)

Os equinos são a espécie de mamífero mais suscetível do reino animal aos efeitos deletérios do lipopolissacarídeo de bactérias Gram-negativas: doses tão ínfimas quanto **0.1 ng/kg de LPS** são capazes de deflagrar febre, leucopenia e hipotensão sistêmica grave!

1. **A Quebra da Barreira Enterocítica:**
   - Em afecções como **volvo de cólon maior, estrangulamento de intestino delgado por lipoma pediculado ou colite por Salmonella**, a hipóxia tecidual e a lesão de isquemia-reperfusão destroem os desmossomos e as junções de oclusão (*tight junctions*) do epitélio intestinal.
   - O lúmen intestinal equino abriga trilhões de Gram-negativos e centenas de gramas de LPS livre. Com a quebra da integridade mucosa, o LPS transloca em massa para a circulação venosa portal e linfáticos mesentéricos.
   - Superada a capacidade de fagocitose das células de Kupffer hepáticas, o LPS atinge a circulação arterial sistêmica.

2. **Reconhecimento Imunológico e Sinalização Celular:**
   - O LPS liga-se no plasma à **Proteína de Ligação a Lipopolissacarídeos (LBP)**.
   - O complexo LPS-LBP interage com o receptor **CD14** e o co-receptor **TLR-4 (Toll-Like Receptor 4)** na superfície dos macrófagos alveolares, neutrófilos e células endoteliais.
   - A fosforilação intracelular via MyD88 e ativação do fator de transcrição nuclear **NF-\\kappa B** deflagra uma síntese maciça de mediadores:
     - **Tromboxano $A_2$ ($TXA_2$):** Pico precoce aos 30 minutos causando vasoconstrição pulmonar severa e hipertensão pulmonar transitória.
     - **Citocinas ($TNF-\\alpha$, $IL-1\\beta$, $IL-6$):** Ativação endotelial sistêmica, febre e leucopenia por marginação neutrofílica maciça.
     - **Óxido Nítrico e Prostaciclina ($PGI_2$):** Vasodilatação sistêmica tardia, má perfusão periférica e hipovolemia distributiva.

\`\`\`mermaid
flowchart TD
    Isquemia[Isquemia Intestinal / Torção de Cólon] --> RupturaTight[Destruição de Tight Junctions da Mucosa]
    RupturaTight --> TranslocacaoLPS[Translocação Maciça de LPS Gram-Negativo]
    TranslocacaoLPS --> TLR4[Ligação ao Complexo LBP-CD14-TLR4 em Monócitos]
    TLR4 --> NFkB[Translocação Nuclear de NF-kappa-B]
    NFkB --> Citocinas[Liberação de TNF-alfa, IL-1beta e TXA2]
    Citocinas --> Marginacao[Marginação e Ativação Maciça de Neutrófilos]
    Marginacao --> LinhaToxica[Mucosas Hiperêmicas com Halo Tóxico Purpúreo]
    Citocinas --> Casco[Quimiotaxia de Neutrófilos para as Lâminas Digitais]
    Casco --> AtivacaoMMP[Ativação de Metaloproteinases: MMP-2 e MMP-9]
    AtivacaoMMP --> LiseColageno[Degradação da Membrana Basal Dermoepidérmica]
    LiseColageno --> PerdaAncoragem[Perda da Ancoragem da Falange Distal: Laminite Séptica Aguda]
\`\`\`

---

### Do Lúmen Intestinal às Lâminas do Casco: A Laminite Séptica

A complicação mais temida da endotoxemia no cavalo é a **Laminite Séptica**:
- Os neutrófilos ativados marginam-se nos capilares digitais das lâminas do casco, liberando espécies reativas de oxigênio (ROS) e ativando as **pró-metaloproteinases de matriz 2 e 9 (MMP-2 e MMP-9)**.
- As MMPs ativadas clivam enzimaticamente o colágeno tipo IV e a laminina da membrana basal que une a lâmina epidérmica do casco (conectada à muralha externa) à lâmina dérmica (conectada à terceira falange - P3).
- O tendão flexor digital profundo (TFDP) traciona continuamente P3 para trás e para cima. Sem a ancoragem da membrana basal, a falange distal **rotaciona** ou **afunda**, comprimindo o plexo solar e podendo perfurar a sola da sola do casco.`
      },
      {
        id: 'sec_pathophys_lab4',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Tornado (Puro Sangue Inglês)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Endotoxemia Pós-Operatória e Risco de Laminite Séptica',
          patient: {
            name: 'Tornado',
            species: 'Equino',
            breed: 'Puro Sangue Inglês',
            age: '6 anos',
            weightKg: 480.0,
            habitatOrEnvironment: 'Baia de haras'
          },
          vitals: {
            heartRateBpm: 68,
            respiratoryRateRpm: 28,
            temperatureCelsius: 38.9,
            mucousMembranes: 'Congestas com halo endotóxico purpúreo (toxic rim) em torno dos incisivos',
            capillaryRefillTimeSec: 3.0
          },
          anamnesis: 'Garanhão submetido há 12 horas à ressecção e anastomose de 3 metros de jejuno estrangulado por hérnia escrotal. O cavalo apresenta taquicardia persistente, sudorese discreta nos flancos e relutância em se movimentar na baia, transferindo constantemente o peso entre os membros anteriores (shifting weight). O pulso da artéria digital palmar encontra-se amplo e saltatório bilateralmente.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Hemograma Completo e Avaliação Hemodinâmica',
              findings: 'Leucopenia severa por marginação e endotoxemia sistêmica pós-isquêmica.',
              abnormalValues: [
                { parameter: 'Leucócitos Totais', value: '2.800 /uL (Leucopenia acentuada)', reference: '5.500 - 12.500 /uL', status: 'critical' },
                { parameter: 'Neutrófilos Bastonetes', value: '850 /uL (Desvio degenerativo)', reference: '0 - 100 /uL', status: 'critical' },
                { parameter: 'Neutrófilos com Toxicidade Citoplasmática', value: 'Severa (corpúsculos de Döhle)', reference: 'Ausentes', status: 'critical' },
                { parameter: 'Frequência Cardíaca', value: '68 bpm', reference: '28 - 44 bpm', status: 'high' },
                { parameter: 'Pulso Digital Palmar', value: 'Amplo e saltatório (Grau 3/3)', reference: 'Filiforme / Suave', status: 'critical' },
                { parameter: 'Temperatura dos Cascos Anteriores', value: 'Marcadamente aquecidos', reference: 'Levemente frios / mornos', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Tornado apresenta endotoxemia clínica com início fulminante de laminite séptica. Qual é o protocolo integrado de intervenção fisiopatológica imediata?',
          decisionOptions: [
            {
              id: 'opt_dec_path4_1',
              label: 'Crioterapia digital contínua (imersão dos cascos e boletos em gelo e água a 0-4°C) + Polimixina B IV (1.000 a 5.000 UI/kg q12h para neutralizar o LPS) + Flunixin Meglumine em dose anti-endotóxica (0.25 mg/kg IV q8h) + Cama profunda de maravalha',
              description: 'A crioterapia reduz a atividade enzimática das MMPs e a perfusão de mediadores tóxicos no casco, a polimixina B neutraliza quimicamente o lipídeo A da endotoxina e o flunixin inibe os eicosanoides inflamatórios.',
              isOptimal: true,
              consequenceText: 'Conduta de referência padrão-ouro em medicina equina! A crioterapia digital aplicada precocemente reduz drasticamente o metabolismo local e previne a ativação das metaloproteinases de matriz (MMP-2 e 9), protegendo a membrana basal da lise mecânica. A Polimixina B liga-se avidamente ao Lipídeo A do LPS livre no plasma, impedindo sua sinalização via TLR-4.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Imersão em gelo dos membros associada a neutralização de endotoxina por Polimixina B e anti-inflamatório específico',
                mechanism: 'Inibição térmica da clivagem da membrana basal pelas MMPs e bloqueio do reconhecimento do LPS pelo receptor TLR4',
                effect: 'Estabilização da junção dermoepidérmica, ausência de rotação da terceira falange e normalização do pulso digital',
                clinicalMeaning: 'Prevenção da perda atlética permanente e salvamento da vida do animal'
              }
            },
            {
              id: 'opt_dec_path4_2',
              label: 'Administrar glicocorticoides de depósito (dexametasona 0.2 mg/kg IV) em dose imunossupressora para cessar a inflamação',
              description: 'Uso de corticosteroide sistêmico em equino com risco de laminite.',
              isOptimal: false,
              consequenceText: 'Erro médico imperdoável! Glicocorticoides sistêmicos em cavalos provocam ou aceleram catastroficamente a laminite via vasoconstrição laminar, sensibilização a aminas biogênicas e desregulação glicêmica severa.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Administração de dexametasona sistêmica em equino sob estresse endotóxico',
                mechanism: 'Potencialização da isquemia e ruptura vascular laminar nas lâminas do casco',
                effect: 'Rotação aguda severa de 12 graus de P3 com perfuração da sola em 48 horas',
                clinicalMeaning: 'Eutanásia inevitável do animal por dor intratável'
              }
            },
            {
              id: 'opt_dec_path4_3',
              label: 'Forçar o animal a caminhar vigorosamente por 2 horas ao redor da pista para ativar a bomba elástica do casco',
              description: 'Exercício forçado em cavalo com inflamação laminar aguda.',
              isOptimal: false,
              consequenceText: 'Conduta contraindicada e perigosa. Submeter o animal à locomoção com lâminas já enfraquecidas aumenta o estresse mecânico sobre a parede dorsal do casco, acelerando o afundamento e colapso de P3.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Exercício forçado durante a fase aguda da lesão laminar',
                mechanism: 'Sobrecarga mecânica cíclica sobre lâminas com membrana basal clivada',
                effect: 'Descolamento laminar traumático completo e dor incapacitante',
                clinicalMeaning: 'Agravamento do dano mecânico e prognóstico desfavorável'
              }
            }
          ],
          learningTakeaways: [
            'A crioterapia digital é a única intervenção com eficácia cientificamente comprovada para prevenir a destruição laminar na endotoxemia equina.',
            'A Polimixina B neutraliza a endotoxina ligando-se diretamente ao componente tóxico Lipídeo A.',
            'Corticosteroides nunca devem ser administrados em equinos endotóxicos sob risco iminente de laminite.'
          ]
        }
      },
      {
        id: 'sec_pathophys_ex4',
        type: 'exercise',
        title: 'Exercício Clínico: Endotoxemia e Vasculopatia Laminar Equina',
        exerciseId: 'ex_pathophys_04'
      }
    ]
  },
  {
    id: 'lesson_pathophys_05_mods_organ_failure',
    moduleId: 'mod_pathophysiology',
    title: 'Síndrome da Disfunção de Múltiplos Órgãos (MODS) & Morte Celular',
    shortDescription: 'A progressão final da sepse descompensada: dano alveolar difuso (SDRA/ARDS), lesão renal aguda (LRA) e colapso imuno-endotelial.',
    estimatedMinutes: 16,
    order: 5,
    concepts: ['concept_pathophysiology_mods_organ_failure'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_pathophys_th5',
        type: 'theory',
        title: 'A Falência Orgânica Sequencial na Medicina Intensiva',
        contentMarkdown: `# Aula Universitária: Síndrome da Disfunção de Múltiplos Órgãos (MODS)

> 📖 Referências Canônicas: Silverstein, D. C.; Hopper, K. *Small Animal Critical Care Medicine*, 2nd ed. Elsevier, Section IV; Ettinger, S. J.; Feldman, E. C. *Textbook of Veterinary Internal Medicine*, 8th ed.

### A Teoria do "Segundo Golpe" (*Two-Hit Hypothesis*)

A Síndrome da Disfunção de Múltiplos Órgãos (MODS) representa a via final comum da mortalidade em pacientes graves:
1. **Primeiro Golpe (*First Hit*):** Ocorre um insulto inflamatório ou isquêmico inicial (trauma grave, torção gástrica, peritonite séptica, pancreatite necrotizante). O sistema imunológico inato torna-se "imunoprimado" (*primed*), com neutrófilos hiper-reativos e endotélio ativado.
2. **Segundo Golpe (*Second Hit*):** Um evento secundário, muitas vezes considerado menor (hipotensão perioperatória transitória, translocação de pequenas quantidades de bactérias intestinais ou infecção nosocomial), desencadeia uma resposta imune maciça e desproporcional.

---

### Manifestações Orgânicas Específicas da MODS

| Órgão / Sistema | Entidade Fisiopatológica | Marcador Clínico-Laboratorial | Mecanismo Lesional Íntimo |
| :--- | :--- | :--- | :--- |
| **Pulmão** | **SDRA / ARDS** (Dano Alveolar Difuso) | $PaO_2/FiO_2 ≤ 200$, infiltrado alveolar bilateral não cardiogênico | Destruição do endotélio capilar e pneumócitos tipo I; inundação de exsudato rico em fibrina e inativação do surfactante |
| **Rim** | **LRA Séptica** (Necrose Tubular Aguda) | Oligúria (< 1 mL/kg/h), elevação de creatinina e cilindros granulosos | Shunt microvascular peritubular, dano oxidativo mitoproteico e apoptose celular tubular |
| **Fígado** | **Colestase da Sepse** | Hiperbilirrubinemia sem hemólise evidente, elevação de Fosfatase Alcalina e GGT | Desregulação transcricional de transportadores canaliculares de ácidos biliares (BSEP e MRP2) mediada por IL-1 e TNF |
| **Coração** | **Cardiomiopatia Séptica** | Elevação de Troponina I cardíaca (cTnI), hipocinesia miocárdica e arritmias | Fator Depressor Miocárdico (MDF), citocinas pró-inflamatórias inibindo canais de cálcio do retículo sarcoplasmático |

\`\`\`mermaid
flowchart TD
    GatilhoSIRS[SIRS Descontrolada / Sepse Grave] --> ApoptoseEndotelio[Apoptose Endotelial Difusa & Quebra de Barreiras]
    ApoptoseEndotelio --> ARDS[Pulmão: Inundação Alveolar Proteinácea & Membranas Hialinas ARDS]
    ARDS --> HipoxemiaGrave[Hipoxemia Refratária: PaO2/FiO2 < 200]
    ApoptoseEndotelio --> LRA[Rim: Isquemia Microvascular Tubular & Apoptose Tubular LRA]
    LRA --> OliguriaAzotemia[Oligúria Aguda & Uremia Séptica]
    ApoptoseEndotelio --> Colestase[Fígado: Colapso de Transportadores de Bilirrubina BSEP/MRP2]
    Colestase --> IctericiaSeptica[Colestase da Sepse: Hiperbilirrubinemia Direta]
    ApoptoseEndotelio --> DepressaoCardiaca[Coração: Fator Depressor Miocárdico & Troponina I Alta]
    DepressaoCardiaca --> ChoqueMisto[Choque Misto Distributivo-Cardiogênico]
    HipoxemiaGrave & OliguriaAzotemia & ChoqueMisto --> FalenciaSistemica[MODS Estabelecida: Mortalidade > 70%]
\`\`\`

> 💡 Pérola de Terapia Intensiva: O diagnóstico de ARDS segundo as diretrizes de Berlim adaptadas para a medicina veterinária exige: (1) início agudo (< 72h); (2) fatores de risco conhecidos (ex: sepse, pancreatite); (3) infiltrados intersticiais a alveolares bilaterais difusos ao raio-X ou TC de tórax; (4) ausência de hipertensão atrial esquerda (coração de tamanho normal ao ecocardiograma e sem estase venosa pulmonar); e (5) hipoxemia com relação $PaO_2/FiO_2 ≤ 300$ (para ALI) ou $≤ 200$ (para ARDS grave).`
      },
      {
        id: 'sec_pathophys_lab5',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Mimi (Siamês)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo de MODS e ARDS em Paciente Felino com Piotórax Séptico',
          patient: {
            name: 'Mimi',
            species: 'Felino',
            breed: 'Siamês',
            age: '4 anos',
            weightKg: 3.8,
            habitatOrEnvironment: 'Apartamento com acesso à rua'
          },
          vitals: {
            heartRateBpm: 210,
            respiratoryRateRpm: 65,
            temperatureCelsius: 36.4,
            mucousMembranes: 'Cianóticas, extremidades frias',
            capillaryRefillTimeSec: 3.0
          },
          anamnesis: 'Gato apresentou dispneia restritiva severa e apatia há 24h decorrente de piotórax purulento por mordedura de outro gato. Foi submetido à toracocentese de alívio e drenagem torácica. Contudo, nas últimas 6 horas, mesmo com a cavidade pleural esvaziada, evoluiu com taquipneia superficial intensa, estertores crepitantes bilaterais e hipoxemia severa mesmo em máscara de O2 a 100%. O animal urinou apenas 3 mL em 12 horas.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Gasometria Arterial, Ecocardiograma e Bioquímica Renal',
              findings: 'Critérios diagnósticos de ARDS com falência renal aguda sobreposta (MODS de 3 órgãos).',
              abnormalValues: [
                { parameter: 'PaO2 em FiO2 de 100% (1.0)', value: '145 mmHg (Relação PaO2/FiO2 = 145)', reference: '> 400 mmHg (PaO2/FiO2 > 300)', status: 'critical' },
                { parameter: 'Radiografia Torácica Pós-Drenagem', value: 'Infiltrado alveolar difuso bilateral com broncogramas aéreos sem cardiomegalia', reference: 'Campos pulmonares transparentes', status: 'critical' },
                { parameter: 'Ecocardiograma', value: 'Átrio esquerdo normal (relação AE:Ao = 1.2), sem efusão pericárdica', reference: 'AE:Ao < 1.5 (Sem sobrecarga de volume)', status: 'normal' },
                { parameter: 'Creatinina Sérica', value: '4.8 mg/dL', reference: '0.8 - 1.8 mg/dL', status: 'critical' },
                { parameter: 'Débito Urinário', value: '0.06 mL/kg/h (Anúria/Oligúria extrema)', reference: '> 1.0 mL/kg/h', status: 'critical' },
                { parameter: 'Bilirrubina Total', value: '3.2 mg/dL (Colestase da sepse)', reference: '0.1 - 0.4 mg/dL', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Mimi preenche critérios formais para ARDS grave associada à LRA e colestase da sepse (MODS). Qual é a estratégia ventilatória e de manejo intensivo de suporte recomendada?',
          decisionOptions: [
            {
              id: 'opt_dec_path5_1',
              label: 'Ventilação Mecânica Protetora (baixo volume corrente 6 mL/kg, PEEP de 5-8 cmH2O para prevenir colapso alveolar cíclico) + Estratégia restritiva de fluidos para conter o extravasamento pulmonar + Suporte inotrópico com Dobutamina + Ajuste posológico renal de antibióticos',
              description: 'A ventilação protetora previne o volutrauma e barotrauma nos pulmões inflamados, a PEEP mantém alvéolos abertos e a restrição volêmica evita agravar o edema alveolar não cardiogênico.',
              isOptimal: true,
              consequenceText: 'Excelente conduta médica em UTI veterinária avançada! Ventilar um pulmão com ARDS com volumes correntes usuais (10-15 mL/kg) causaria biotrauma e volutrauma por hiperdistensão das poucas áreas alveolares funcionais remanescentes (Baby Lung). A aplicação de PEEP impede a atelectasia de fechamento e reabre alvéolos recrutáveis, melhorando a relação PaO2/FiO2.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Instituição de ventilação mecânica protetora com PEEP e balanço hídrico neutro a negativo',
                mechanism: 'Redução do estresse mecânico sobre a membrana alvéolo-capilar e manutenção da capacidade residual funcional',
                effect: 'Melhora da PaO2/FiO2 para > 220, redução da lesão pulmonar induzida por ventilador (VILI) e preservação orgânica',
                clinicalMeaning: 'Estabilização do paciente crítico em falência de múltiplos órgãos permitindo tempo para os antimicrobianos agirem'
              }
            },
            {
              id: 'opt_dec_path5_2',
              label: 'Administrar bolus vigoroso de 40 mL/kg de solução cristaloide para forçar o rim a urinar e aumentar a pressão de filtração glomerular',
              description: 'Administrar sobrecarga hídrica para forçar a diurese em paciente com ARDS grave instalada.',
              isOptimal: false,
              consequenceText: 'Erro médico letal! Em pacientes com dano alveolar difuso da ARDS, a membrana alvéolo-capilar perdeu completamente sua impermeabilidade a proteínas. Administrar fluidos vigorosos eleva a pressão hidrostática e inunda 100% dos alvéolos pulmonares com líquido, matando o paciente por asfixia em minutos.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Sobrecarga hídrica em vigência de permeabilidade capilar pulmonar aumentada',
                mechanism: 'Extravasamento alveolar maciço de fluidos e transudação pulmonar catastrófica',
                effect: 'Hipoxemia extrema intratável com PaO2/FiO2 < 60',
                clinicalMeaning: 'Parada cardiorrespiratória por hipóxia fulminante'
              }
            },
            {
              id: 'opt_dec_path5_3',
              label: 'Prescrever diurético furosemida em altas doses contínuas sem qualquer suporte ventilatório invasivo',
              description: 'Tentar tratar o edema pulmonar da ARDS apenas com furosemida como se fosse edema cardiogênico.',
              isOptimal: false,
              consequenceText: 'Ineficaz e deletério! A ARDS não é causada por hipertensão venosa atrial esquerda, mas por lesão inflamatória alveolar. O uso indiscriminado de furosemida depletará o volume intravascular do paciente, piorando a perfusão renal e acelerando o choque séptico sem resolver o dano alveolar.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso isolado de altas doses de furosemida em edema inflamatório não cardiogênico',
                mechanism: 'Hipovolemia intravascular aguda sem resolução da lesão endotelial alvéolo-capilar',
                effect: 'Queda do débito cardíaco e necrose tubular renal isquêmica irreversível',
                clinicalMeaning: 'Óbito por choque distributivo e falência circulatória'
              }
            }
          ],
          learningTakeaways: [
            'A ARDS caracteriza-se por edema pulmonar não cardiogênico com permeabilidade capilar violada e relação PaO2/FiO2 <= 200.',
            'A ventilação protetora (baixo volume corrente 6 mL/kg e PEEP) é a pedra angular para impedir a lesão pulmonar induzida pelo ventilador (VILI).',
            'Fluidos excessivos são mortais na ARDS: o objetivo deve ser um balanço neutro a levemente negativo para não encharcar os alvéolos inflamados.'
          ]
        }
      },
      {
        id: 'sec_pathophys_ex5',
        type: 'exercise',
        title: 'Exercício Clínico: Critérios de ARDS e MODS',
        exerciseId: 'ex_pathophys_05'
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
  },
  {
    id: 'ex_imaging_02',
    conceptId: 'concept_imaging_pulmonary_patterns',
    type: 'multiple_choice',
    prompt: 'Na interpretação de radiografias torácicas de pequenos animais, qual achado é patognomônico do Padrão Pulmonar Alveolar e qual a sua base anatômica e física?',
    options: [
      {
        id: 'opt_patt_1',
        text: 'Broncograma aéreo; ocorre quando os alvéolos circundantes são completamente preenchidos por líquido ou células (exsudato, transudato ou sangue), gerando radiopacidade de partes moles que contrasta com a coluna de ar radiotransparente remanescente no interior dos brônquios pérvios',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O broncograma aéreo surge quando o parênquima alveolar perde sua aeração por consolidação (pneumonia, edema pulmonar ou contusão hemorrágica), tornando-se cinza-claro (densidade de partes moles), enquanto o brônquio condutor permanece com ar (preto). Se o brônquio também colapsar ou for preenchido, o broncograma desaparece, restando apenas sinal de silhueta lobar.'
      },
      {
        id: 'opt_patt_2',
        text: 'Sinal de trilhos de trem e donuts; decorre da dilatação dos capilares linfáticos da pleura visceral',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O aspecto em trilhos de trem e donuts (manguitos peribrônquicos) é a marca registrada do Padrão Bronquial (asma/bronquite crônica), não do padrão alveolar.'
      },
      {
        id: 'opt_patt_3',
        text: 'Vidro despolido difuso sem broncogramas com preservação visual dos vasos lobares',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O vidro despolido com visualização de vasos é característico do Padrão Intersticial Não-Estruturado.'
      },
      {
        id: 'opt_patt_4',
        text: 'Dilatação aneurismática das veias pulmonares decorrente de estenose pulmonar congênita',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Trata-se de alteração do Padrão Vascular pulmonar, e não do parênquima alveolar.'
      }
    ]
  },
  {
    id: 'ex_imaging_03',
    conceptId: 'concept_imaging_abdominal_skeletal',
    type: 'multiple_choice',
    prompt: 'Na avaliação radiográfica ortopédica de um cão com claudicação e aumento de volume na metáfise do rádio distal, quais achados radiográficos caracterizam com segurança uma lesão óssea agressiva (como o Osteossarcoma primário) diferenciando-a de uma afecção não agressiva?',
    options: [
      {
        id: 'opt_bone_1',
        text: 'Lise cortical com padrão permeativo ou "roído por traça", reação periosteal espiculada em "raios de sol", formação de Triângulo de Codman e zona de transição ampla e mal delimitada com o osso sadio',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! Os critérios de agressividade óssea incluem: lise cortical permeativa/moteada, reação periosteal irregular (espiculada, lamelar interrompida ou sol radiante), descolamento periosteal agudo com ossificação em ângulo agudo (Triângulo de Codman) e zona de transição ampla/indistinta. Lesões benignas apresentam margens escleróticas bem delimitadas (zona de transição estreita) e reações periosteais contínuas e lisas.'
      },
      {
        id: 'opt_bone_2',
        text: 'Esclerose subcondral uniforme e proliferação óssea restrita às margens articulares (osteófitos)',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Esses achados caracterizam Doença Articular Degenerativa (osteoartrose / osteoartrite), que é uma lesão não agressiva degenerativa.'
      },
      {
        id: 'opt_bone_3',
        text: 'Presença de cisto ósseo solitário unicameral com cortical intacta e zona de transição estritamente demarcada',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Cistos bem delimitados com cortical preservada são lesões benignas não agressivas.'
      },
      {
        id: 'opt_bone_4',
        text: 'Hiperostose cortical contínua e fusiforme decorrente de calo ósseo fisiológico em consolidação',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O calo ósseo normal em cicatrização apresenta reação homogênea com transição suave, sem lise cortical permeativa.'
      }
    ]
  },
  {
    id: 'ex_imaging_04',
    conceptId: 'concept_imaging_ultrasound_physics_doppler',
    type: 'multiple_choice',
    prompt: 'Na física do ultrassom diagnóstico, como se forma o artefato de "Reforço Acústico Posterior" e qual é a sua utilidade diagnóstica fundamental na avaliação de estruturas intracavitárias?',
    options: [
      {
        id: 'opt_us_1',
        text: 'Forma-se porque o feixe de ultrassom atravessa uma estrutura contendo líquido anecoico com mínima atenuação, atingindo o tecido profundo com maior energia do que os feixes vizinhos; é o sinal patognomônico que comprova a natureza fluida/cística de uma estrutura',
        isCorrect: true,
        pedagogicalFeedback: 'Excelente! A atenuação sonora em fluidos livres (urina, bílis, líquido cístico) é praticamente nula em comparação com os tecidos moles sólidos circundantes. Assim, o feixe sônico que passa pela cavidade líquida chega aos tecidos posteriores com muito mais intensidade, gerando uma faixa hiperecogênica (branca) imediatamente abaixo da estrutura, o que diferencia com precisão um cisto/vesícula de uma neoplasia sólida hipoecogênica.'
      },
      {
        id: 'opt_us_2',
        text: 'Ocorre pela absorção de 100% dos ecos sonoros por estruturas de alta impedância como ossos e cálculos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A reflexão/absorção total do feixe por ossos ou cálculos gera a Sombra Acústica Posterior (faixa escura/preta anecoica), o oposto do reforço acústico.'
      },
      {
        id: 'opt_us_3',
        text: 'É gerado pelo atrito mecânico do transdutor sobre a pele sem a utilização de gel condutor',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A ausência de gel causa reflexão acústica total imediata na interface ar-pele, impedindo a entrada do feixe no organismo.'
      },
      {
        id: 'opt_us_4',
        text: 'Trata-se de uma distorção criada pelo Doppler Colorido quando o fluxo sanguíneo ultrapassa o limite de Nyquist',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Esse fenômeno no Doppler chama-se "aliasing" (ambiguidade de velocidade/mosaico de cores), não tendo relação com o reforço acústico posterior em modo B.'
      }
    ]
  },
  {
    id: 'ex_imaging_05',
    conceptId: 'concept_imaging_pocus_fast_emergency',
    type: 'multiple_choice',
    prompt: 'Durante a realização do protocolo TFAST (Thoracic Focused Assessment with Sonography for Trauma) em um cão dispneico após atropelamento, qual achado ultrassonográfico exclui categoricamente a presença de pneumotórax no sítio acústico examinado?',
    options: [
      {
        id: 'opt_fast_1',
        text: 'Presença de deslizamento pleural evidente (Glide Sign) associado a artefatos verticais de cauda de cometa que partem da interface das pleuras visceral e parietal em contato dinâmico',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! O "Glide Sign" (deslizamento do pulmão) e as caudas de cometa que se originam da linha pleural ocorrem unicamente quando a pleura visceral (pulmão) está em contato direto com a pleura parietal (parede torácica). Se houver ar livre interposto no espaço pleural (pneumotórax), o ar bloqueia a visualização da pleura visceral: o deslizamento desaparece completamente e nenhuma cauda de cometa se forma. O Glide Sign presente tem valor preditivo negativo de 100% para pneumotórax naquele ponto acústico.'
      },
      {
        id: 'opt_fast_2',
        text: 'Visualização de múltiplas linhas A horizontais estáticas sem qualquer movimentação respiratória',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Linhas A horizontais estáticas sem deslizamento pleural (sem glide sign) são precisamente o padrão observado no pneumotórax (sinal da estratosfera ou código de barras no modo M).'
      },
      {
        id: 'opt_fast_3',
        text: 'Identificação de líquido anecoico livre entre as folhas pleurais com colapso lobar',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Esse achado define efusão pleural (hidrotórax ou hemotórax), não sendo o critério de exclusão de pneumotórax.'
      },
      {
        id: 'opt_fast_4',
        text: 'Presença de escore de líquido livre AFAST igual a 4/4 na bolsa hepatorrenal',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O escore AFAST refere-se à cavidade peritoneal (abdômen), não avaliando o espaço pleural torácico.'
      }
    ]
  }
];

export const IMAGING_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_imaging_01_densities_physics',
    moduleId: 'mod_imaging_diagnostics',
    title: 'Física Radiológica, Formação da Imagem & As 5 Densidades',
    shortDescription: 'Interação dos raios-X com a matéria, os cinco contrastes radiográficos fundamentais e mensuração objetiva do VHS de Buchanan.',
    estimatedMinutes: 14,
    order: 1,
    concepts: ['concept_imaging_xray_afast_ultrasound'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_imaging_th1',
        type: 'theory',
        title: 'A Física das Densidades Radiográficas & Mensuração do VHS',
        contentMarkdown: `# Aula Universitária: Física dos Raios-X, Formação da Imagem & As 5 Densidades

> 📖 Referência Canônica: Thrall, D. E. *Textbook of Veterinary Diagnostic Radiology*, 7th ed. Elsevier; Kealy, J. K.; McAllister, H.; Graham, J. P. *Diagnostic Radiology and Ultrasonography of the Dog and Cat*, 5th ed.

### Princípios Físicos da Radiologia Diagnóstica

Os raios-X são radiações eletromagnéticas ionizantes geradas pelo impacto de elétrons acelerados contra um ânodo de tungstênio. Ao atravessarem o corpo do paciente animal, os fótons sofrem atenuação diferencial através de dois processos fundamentais:
1. **Efeito Fotoelétrico:** Absorção completa do fóton incidente por um elétron das camadas internas (dependente do número atômico $Z^3$ do tecido). Responsável pelo **contraste radiográfico**.
2. **Espalhamento Compton:** Interação do fóton com elétrons externos, desviando sua trajetória. Gera **radiação secundária espalhada**, que reduz a nitidez da imagem e impõe o uso de grades antidifusoras (bucky) em pacientes com espessura toracoabdominal $> 10-12	ext{ cm}$.

---

### As 5 Densidades Radiográficas Fundamentais

Na película ou detector digital, a radiopacidade é inversamente proporcional ao grau de penetração dos fótons:

| Densidade | Cor Radiográfica | Exemplo Anatômico Típico | Comportamento Físico dos Fótons |
| :--- | :--- | :--- | :--- |
| **1. Ar / Gás** | Preto (*Radiotransparente*) | Lúmen traqueal, pulmões arejados, fundo gástrico | Mínima atenuação; quase todos os fótons atingem o detector |
| **2. Gordura** | Cinza-escuro | Gordura falciforme, retroperitoneal, mediastinal | Absorção leve; fundamental para conferir contraste aos órgãos |
| **3. Água / Partes Moles** | Cinza-claro | Miocárdio, fígado, baço, rins, sangue, bexiga cheia | Atenuação intermediária; silhuetas de órgãos encostados fundem-se |
| **4. Mineral / Osso** | Branco | Esqueleto cortical, cálculos de oxalato, dentina | Alta absorção fotoelétrica pelo Cálcio e Fósforo ($Z$ elevado) |
| **5. Metal** | Branco brilhante (*Radiopaco*) | Projéteis, microchips, agulhas, contraste de Bário | Absorção praticamente total; causa artefatos de faixa na TC |

\`\`\`mermaid
flowchart LR
    Ar["1. Ar (Preto)<br>Mínima Absorção"] --> Gordura["2. Gordura (Cinza-Escuro)<br>Contraste Seroso"]
    Gordura --> PartesMoles["3. Partes Moles / Água (Cinza-Claro)<br>Fígado, Rins, Sangue"]
    PartesMoles --> Osso["4. Osso / Mineral (Branco)<br>Alta Absorção (Cálcio)"]
    Osso --> Metal["5. Metal (Branco Brilhante)<br>Absorção Total (Bário/Projéteis)"]
\`\`\`

---

### Mensuração Objetiva da Silhueta Cardíaca: O Método VHS (Buchanan)

Para eliminar o viés da conformação torácica entre raças distintas (ex: Dachshund vs. Dogue Alemão), Buchanan & Bucheler padronizaram o **Vertebral Heart Scale (VHS)** em projeção Látero-Lateral (LL):
1. **Eixo Longo ($L$):** Mensurado da bifurcação traqueal (carina) até o ápice ventricular cardíaco.
2. **Eixo Curto ($S$):** Mensurado perpendicularmente ao eixo longo no terço médio da silhueta cardíaca (no ponto de maior largura ventricular).
3. **Conversão Vertebral:** Ambas as medidas são transpostas para a coluna torácica a partir da **borda cranial da 4ª vértebra torácica (T4)**, contando o número de corpos vertebrais abrangidos.
4. **Cálculo:** $	ext{VHS} = L + S$.
   - **Valores Normais:** Cães: até $9.7 ± 0.5$ vértebras (limite superior da normalidade: $≤ 10.5$ vértebras; até 11.5 em braquicefálicos). Felinos: $≤ 7.5 - 8.0$ vértebras.`
      },
      {
        id: 'sec_imaging_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Imaginológica: Rex (Boxer)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Avaliação Radiográfica de Cardiomegalia e Dispneia',
          patient: {
            name: 'Rex',
            species: 'Canino',
            breed: 'Boxer',
            age: '8 anos',
            weightKg: 28.5,
            habitatOrEnvironment: 'Casa interna'
          },
          vitals: {
            heartRateBpm: 155,
            respiratoryRateRpm: 42,
            temperatureCelsius: 38.6,
            mucousMembranes: 'Rosadas a pálidas, CRT = 2.0s',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Cão apresenta histórico de tosse seca há 3 semanas, com piora expressiva durante a noite ou após exercícios leves. O tutor relata um episódio de síncope transitória ao passear ontem. À ausculta, ouve-se sopro holossistólico em foco mitral grau IV/VI.',
          exams: [
            {
              category: 'imaging',
              title: 'Estudo Radiográfico Torácico em 3 Projeções (LL direita, LL esquerda e VD)',
              findings: 'Marcado aumento global da silhueta cardíaca com sobrecarga atrial e ventricular esquerda.',
              abnormalValues: [
                { parameter: 'Vertebral Heart Scale (VHS)', value: '12.4 vértebras (Eixo Longo 6.6 + Eixo Curto 5.8)', reference: '8.5 - 10.5 vértebras', status: 'critical' },
                { parameter: 'Brônquio Principal Esquerdo', value: 'Comprimido e deslocado dorsalmente por aumento de átrio esquerdo', reference: 'Pérvio sem deslocamento dorsal', status: 'critical' },
                { parameter: 'Traqueia Torácica', value: 'Deslocamento dorsal acentuado no terço caudal', reference: 'Ângulo normal paralelo à coluna', status: 'high' },
                { parameter: 'Veias Pulmonares Cranioventrais', value: 'Dilatadas em relação às artérias correspondentes (> 1.2x)', reference: 'Diâmetro Veia = Diâmetro Artéria', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Rex apresenta cardiomegalia descompensada com VHS de 12.4 vértebras e sinais radiográficos de estase venosa pré-edema pulmonar. Qual é a conduta diagnóstica e farmacológica prioritária?',
          decisionOptions: [
            {
              id: 'opt_dec_img1_1',
              label: 'Confirmar Estágio B2/C de Doença Mixomatosa com Ecocardiograma transtorácico + Iniciar terapia com Pimobendan (0.25 mg/kg VO q12h) para inotropismo positivo e vasodilatação + Furosemida se crepitações pulmonares auscultadas',
              description: 'O VHS > 10.5 associado à compressão brônquica e dilatação venosa preenche os critérios do estudo EPIC para indicação formal de Pimobendan antes ou no início do edema pulmonar.',
              isOptimal: true,
              consequenceText: 'Conduta de excelência baseada nas diretrizes do ACVIM! O ensaio clínico EPIC comprovou que iniciar Pimobendan em cães com remodelamento cardíaco evidente (VHS > 10.5 e aumento atrial esquerdo ecocardiográfico) prolonga a sobrevida livre de ICC em mais de 15 meses.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Mensuração objetiva do VHS identificando cardiomegalia avançada com instituição precoce de Pimobendan',
                mechanism: 'Sensibilização dos miofilamentos ao cálcio (inotropismo) e inibição da PDE-3 (vasodilatação mista)',
                effect: 'Redução das pressões de enchimento atrial esquerdo e alívio da compressão da carina brônquica',
                clinicalMeaning: 'Cessação da tosse compressiva e prevenção da progressão para edema alveolar agudo'
              }
            },
            {
              id: 'opt_dec_img1_2',
              label: 'Diagnosticar apenas pneumonia bacteriana lobar e prescrever amoxicilina com clavulanato sem cardioprotetores',
              description: 'Interpretar a tosse e o RX como processo infeccioso respiratório isolado ignorando o VHS.',
              isOptimal: false,
              consequenceText: 'Erro diagnóstico grave! A tosse decorre do colapso mecânico do brônquio esquerdo pelo átrio esquerdo dilatado e início de hipertensão venocapilar. Prescrever antibióticos não altera a hemodinâmica cardíaca e Rex evoluirá para edema pulmonar fulminante.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Omissão do diagnóstico cardiológico evidente ao exame radiográfico',
                mechanism: 'Progressão da sobrecarga volumétrica atrial sem intervenção farmacológica',
                effect: 'Ruptura da barreira endotelial capilar pulmonar por hipertensão venosa retrógrada',
                clinicalMeaning: 'Edema pulmonar agudo grave com asfixia em 48 a 72 horas'
              }
            },
            {
              id: 'opt_dec_img1_3',
              label: 'Administrar 40 mL/kg de solução fisiológica IV para melhorar o débito cardíaco após a síncope',
              description: 'Expansão volêmica agressiva em cão com cardiomegalia severa.',
              isOptimal: false,
              consequenceText: 'Conduta letal! Em um coração já sobrecarregado volumetricamente com VHS de 12.4, uma sobrecarga fluídica intravenosa aumentará subitamente a pré-carga, desencadeando edema pulmonar alveolar maciço imediato por afogamento interno.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Infusão de cristaloides em paciente com insuficiência cardíaca congestiva iminente',
                mechanism: 'Elevação descontrolada da pressão hidrostática nos capilares pulmonares',
                effect: 'Inundação alveolar aguda com estertores úmidos e secreção espumosa rósea',
                clinicalMeaning: 'Óbito por insuficiência respiratória hipoxêmica fulminante'
              }
            }
          ],
          learningTakeaways: [
            'O método VHS de Buchanan quantifica o volume cardíaco indexado pela coluna vertebral, com limite superior normal de 10.5 vértebras na maioria dos cães.',
            'O aumento de átrio esquerdo provoca compressão dorsal do brônquio principal esquerdo, desencadeando tosse cardiogênica mecânica.',
            'As veias pulmonares normais têm diâmetro igual ao das artérias pulmonares correspondentes; dilatação venosa sugere congestão e ICC esquerda.'
          ]
        }
      },
      {
        id: 'sec_imaging_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Diagnóstico por Imagem & VHS Cardíaco',
        exerciseId: 'ex_imaging_01'
      }
    ]
  },
  {
    id: 'lesson_imaging_02_pulmonary_patterns',
    moduleId: 'mod_imaging_diagnostics',
    title: 'Padrões Pulmonares Radiográficos: Alveolar, Bronquial & Intersticial',
    shortDescription: 'Diagnóstico diferencial de consolidação com broncograma aéreo, manguitos brônquicos em donut e infiltrado intersticial em vidro despolido.',
    estimatedMinutes: 16,
    order: 2,
    concepts: ['concept_imaging_pulmonary_patterns'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_imaging_th2',
        type: 'theory',
        title: 'A Semiologia Radiográfica dos Padrões Pulmonares',
        contentMarkdown: `# Aula Universitária: Padrões Pulmonares Radiográficos

> 📖 Referência Canônica: Thrall, D. E. *Textbook of Veterinary Diagnostic Radiology*, Cap. 28: The Pulmonary Parenchyma; Suter, P. F.; Lord, P. F. *Thoracic Radiography: A Text Atlas of Thoracic Diseases of the Dog and Cat*.

### Os Quatro Grandes Padrões Pulmonares

A interpretação radiográfica do tórax apoia-se no reconhecimento de quatro padrões arquiteturais patológicos:

1. **Padrão Alveolar (Consolidação Alveolar):**
   - **Mecanismo:** Substituição completa do ar alveolar por líquido (edema cardiogênico ou não cardiogênico), pus (broncopneumonia bacteriana), sangue (contusão pulmonar ou coagulopatia) ou células neoplásicas.
   - **Sinais Patognomônicos:**
     - **Broncograma Aéreo:** Visualização de brônquios escuros (preenchidos por ar) circundados por alvéolos consolidados radiopacos (cinza-claro).
     - **Sinal de Silhueta Lobar:** Apagamento das margens da silhueta cardíaca ou diafragmática quando o lobo consolidado entra em contato direto com essas estruturas.
     - **Sinal da Borda Lobar (*Lobal Sign*):** Transição abrupta e linear entre um lobo consolidado e um lobo adjacente aerado.

2. **Padrão Bronquial:**
   - **Mecanismo:** Espessamento da parede brônquica por hipertrofia glandular, infiltrado eosinofílico/linfoplasmocitário ou acúmulo peribronquial de exsudato.
   - **Achados Radiográficos:**
     - **"Donuts" ou Anéis:** Brônquios vistos em corte transversal (parede espessa radiopaca com lúmen central aéreo).
     - **"Trilhos de Trem" (*Tramlines*):** Duas linhas paralelas radiopacas representando brônquios vistos em corte longitudinal.
     - **Principais Causas:** Asma felina (bronquite alérgica), bronquite crônica canina, broncopneumonia crônica, bronquiectasias.

3. **Padrão Intersticial:**
   - **Não-Estruturado (Reticular / Vidro Despolido):** Aumento homogêneo sutil da radiopacidade pulmonar com aspecto "enevoado", com perda parcial da nitidez dos vasos pulmonares periféricos. Causas: edema pulmonar intersticial precoce, pneumonia intersticial viral, fibrose pulmonar, hipoinflação expiratória.
   - **Estruturado (Nodular / Miliar / Cavitário):** Presença de opacidades esféricas circunscritas.
     - Nodular/Massa: Metástases neoplásicas hematógenas, granulomas fúngicos (Histoplasma, Blastomyces), abcessos.
     - Miliar: Incontáveis micronódulos puntiformes de 1-3 mm difusos ("tempestade de neve").

4. **Padrão Vascular:**
   - Desproporção entre o calibre dos vasos pulmonares pareados (artéria e veia).
   - **Artérias > Veias:** Hipertensão pulmonar, dirofilariose (*Dirofilaria immitis*).
   - **Veias > Artérias:** Congestão venosa pulmonar precoce por insuficiência cardíaca esquerda.
   - **Artérias e Veias Diminuídas:** Hipovolemia severa (choque hipovolêmico, estenose pulmonar congênita, Addison).

\`\`\`mermaid
flowchart TD
    RX[Opacificação Pulmonar Anormal ao RX] --> TesteBroncograma{Presença de Broncogramas Aéreos ou Sinal de Silhueta?}
    TesteBroncograma -- Sim --> Alveolar["Padrão Alveolar<br>Consolidação por Líquido/Células<br>(Pneumonia / Edema / Contusão)"]
    TesteBroncograma -- Não --> TesteDonut{Presença de Donuts e Trilhos de Trem?}
    TesteDonut -- Sim --> Bronquial["Padrão Bronquial<br>Espessamento Peribronquial<br>(Asma Felina / Bronquite Crônica)"]
    TesteDonut -- Não --> TesteVascular{Vasos Pulmonares Proeminentes ou Atenuados?}
    TesteVascular -- Sim --> Vascular["Padrão Vascular<br>(Dirofilariose / Congestão ICC / Hipovolemia)"]
    TesteVascular -- Não --> Intersticial["Padrão Intersticial<br>Não-Estruturado (Vidro Despolido)<br>ou Estruturado (Nódulos / Metástases)"]
\`\`\`

---

### Diagnóstico Diferencial Topográfico do Padrão Alveolar

| Distribuição Anatômica da Consolidação | Diagnóstico Mais Provável | Fisiopatologia Subjacente |
| :--- | :--- | :--- |
| **Caudodorsal bilateral simétrica** | **Edema Pulmonar Cardiogênico** (em cães) | Hipertensão venocapilar retrógrada e extravasamento hidrostático |
| **Cranioventral assimétrica (lobo médio direito)** | **Broncopneumonia por Aspiração / Infecciosa** | Efeito da gravidade canalizando conteúdo gástrico ou secreção |
| **Multifocal assimétrica sem padrão anatômico** | **Contusão Pulmonar Hemorrágica** | Ruptura de capilares alveolares por impacto mecânico fechado |
| **Difusa bilateral em todo o campo pulmonar** | **SDRA / ARDS ou Edema Neuroogênico** | Lesão da permeabilidade alvéolo-capilar ou descarga simpática |`
      },
      {
        id: 'sec_imaging_lab2',
        type: 'lab',
        title: 'Prontuário & Simulação Imaginológica: Mel (Beagle)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Interpretação de Infiltrado Pulmonar Pós-Trauma Fechado',
          patient: {
            name: 'Mel',
            species: 'Canino',
            breed: 'Beagle',
            age: '3 anos',
            weightKg: 12.0,
            habitatOrEnvironment: 'Casa interna'
          },
          vitals: {
            heartRateBpm: 140,
            respiratoryRateRpm: 56,
            temperatureCelsius: 38.4,
            mucousMembranes: 'Rosadas a cianóticas sob esforço',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Mel foi atropelada por um veículo há 2 horas em baixa velocidade. Apresenta taquipneia superficial intensa com respiração paradoxal leve, tosse produtiva com expectoração de muco estriado de sangue (hemoptise discreta). Não há fraturas de costelas evidentes à palpação.',
          exams: [
            {
              category: 'imaging',
              title: 'Radiografia Torácica em Projeções LL Direita e Dorsoventral (DV)',
              findings: 'Presença de opacificação densa do parênquima pulmonar sem efusão pleural detectável.',
              abnormalValues: [
                { parameter: 'Lobo Médio Direito e Cranial Direito', value: 'Padrão alveolar marcado com broncogramas aéreos nítidos', reference: 'Aerado radiotransparente', status: 'critical' },
                { parameter: 'Borda Cardíaca Direita', value: 'Sinal de silhueta positivo (apagamento da margem cardíaca)', reference: 'Contorno cardíaco nítido', status: 'critical' },
                { parameter: 'Silhueta Cardíaca (VHS)', value: '9.6 vértebras (Tamanho normal)', reference: '8.5 - 10.5 vértebras', status: 'normal' },
                { parameter: 'Espaço Pleural', value: 'Sem pneumotórax ou efusão pleural livre', reference: 'Ausente', status: 'normal' }
              ]
            }
          ],
          challengePrompt: 'Mel apresenta padrão alveolar marcado localizado pós-trauma contuso com hemoptise. Qual é o diagnóstico fisiopatológico e o protocolo terapêutico de suporte?',
          decisionOptions: [
            {
              id: 'opt_dec_img2_1',
              label: 'Diagnóstico de Contusão Pulmonar Hemorrágica Grave + Oxigenoterapia em gaiola com FiO2 40-50% + Analgesia sistêmica com Metadona (0.2 mg/kg IV) + Monitorização de oximetria e restrição cautelosa de fluidos IV',
              description: 'A contusão pulmonar causa hemorragia alveolar e edema intersticial secundário. A oxigenoterapia e analgesia controlam a hipoxemia sem encharcar os pulmões com excesso de fluidos.',
              isOptimal: true,
              consequenceText: 'Excelente conduta médica! A contusão pulmonar atinge o pico de gravidade entre 24 e 36 horas pós-trauma. A oxigenoterapia suplementar reverte a hipoxemia decorrente do shunt intrapulmonar, enquanto o opioide alivia a dor torácica permitindo excursão diafragmática adequada. A restrição cautelosa de fluidos evita agravar o edema alveolar nos capilares rompidos.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Reconhecimento do padrão alveolar hemorrágico com suporte oxigenatório e analgesia sem sobrecarga hídrica',
                mechanism: 'Otimização do gradiente alvéolo-arterial de O2 e prevenção do agravamento do extravasamento capilar',
                effect: 'Saturação de O2 recuperada para 97%, redução da frequência respiratória para 28 rpm e reabsorção da hemorragia em 72h',
                clinicalMeaning: 'Resolução completa da contusão sem necessidade de ventilação mecânica invasiva'
              }
            },
            {
              id: 'opt_dec_img2_2',
              label: 'Administrar Furosemida em alta dose (4 mg/kg IV em bolus) acreditando tratar-se de edema pulmonar cardiogênico',
              description: 'Uso de potente diurético de alça em paciente vítima de trauma recente.',
              isOptimal: false,
              consequenceText: 'Erro farmacológico perigoso! O cão é jovem, tem VHS normal e o infiltrado é hemorrágico pós-traumático (contusão), não edema cardiogênico. A furosemida depletará o volume circulante em um paciente traumatizado com potencial sangramento interno, precipitando choque hipovolêmico grave.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso indevido de furosemida em paciente hipovolêmico com hemorragia pulmonar',
                mechanism: 'Diurese maciça com redução aguda do retorno venoso e da pré-carga cardíaca',
                effect: 'Queda da pressão arterial média para 50 mmHg e colapso circulatório',
                clinicalMeaning: 'Choque hipovolêmico iatrogênico com piora clínica imediata'
              }
            },
            {
              id: 'opt_dec_img2_3',
              label: 'Forçar intubação traqueal imediata sob contenção física vigorosa sem qualquer sedação',
              description: 'Procedimento invasivo forçado sob estresse agudo em paciente hipoxêmico.',
              isOptimal: false,
              consequenceText: 'Conduta desastrosa! O estresse físico em animais com contusão pulmonar eleva a demanda de oxigênio do miocárdio e a liberação de catecolaminas, precipitando parada respiratória fatal por exaustão.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Estresse agudo e contenção física forçada em paciente com reserva respiratória comprometida',
                mechanism: 'Aumento descontrolado do consumo metabólico de oxigênio em pulmão consolidado',
                effect: 'Hipoxemia extrema com acidose láctica e bradicardia terminal',
                clinicalMeaning: 'Parada cardiorrespiratória irreversível'
              }
            }
          ],
          learningTakeaways: [
            'O broncograma aéreo e o sinal de silhueta confirmam a presença de Padrão Alveolar (consolidação alveolar).',
            'Na contusão pulmonar traumática, o preenchimento alveolar é hemorrágico; o pico de opacificação ocorre em 24-36h pós-trauma.',
            'Diuréticos como a furosemida são absolutamente contraindicados na contusão pulmonar, pois não secam sangue alveolar e agravam a hipovolemia.'
          ]
        }
      },
      {
        id: 'sec_imaging_ex2',
        type: 'exercise',
        title: 'Exercício Clínico: Padrões Pulmonares e Broncograma Aéreo',
        exerciseId: 'ex_imaging_02'
      }
    ]
  },
  {
    id: 'lesson_imaging_03_abdominal_skeletal',
    moduleId: 'mod_imaging_diagnostics',
    title: 'Radiologia Abdominal & Esquelética: Perda de Detalhe e Lesões Ósseas',
    shortDescription: 'Reconhecimento da perda de detalhe seroso, pneumoperitônio por ruptura de víscera e diferenciação de lesões ósseas agressivas vs. não agressivas.',
    estimatedMinutes: 16,
    order: 3,
    concepts: ['concept_imaging_abdominal_skeletal'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_imaging_th3',
        type: 'theory',
        title: 'Contraste Abdominal, Pneumoperitônio e Agressividade Óssea',
        contentMarkdown: `# Aula Universitária: Radiologia Abdominal e Musculoesquelética Avançada

> 📖 Referência Canônica: Thrall, D. E. *Textbook of Veterinary Diagnostic Radiology*, Caps. 14 (Bone Diseases) e 38 (The Peritoneal Cavity); Dennis, R. et al. *Handbook of Small Animal Radiology and Ultrasound*, 2nd ed.

### O Detalhe Seroso Abdominal e o Pneumoperitônio

1. **A Física do Detalhe Seroso:**
   - Em animais normais, a **gordura falciforme, mesentérica e retroperitoneal** circunda os órgãos viscerais (estômago, fígado, baço, rins, alças intestinais e bexiga).
   - Como a gordura possui menor densidade radiográfica que os tecidos moles/fluidos (cinza-escuro vs. cinza-claro), ela cria uma interface de contraste que desenha a borda serosa de cada órgão.
   - **Perda de Detalhe Seroso ("Aspecto em Vidro Fosco"):**
     - Ocorre quando há fluido livre na cavidade peritoneal (hemoperitônio, uroperitônio, transudato asscítico, exsudato séptico), carcinomatose peritoneal difusa, peritonite química ou escassez fisiológica de gordura corporal (filhotes < 6 meses ou animais severamente caquéticos).

2. **Pneumoperitônio (Gás Livre Abdominal):**
   - Presença de gás fora do lúmen gastrointestinal.
   - **Sinais Radiográficos:** Gás acumulado entre a margem caudal do diafragma e o lobo hepático cranial (em projeção LL ou horizontal); visualização nítida de ambas as superfícies (mucosa e serosa) da parede da alça intestinal (**Sinal de Riggs / Dupla Parede**).
   - **Significado Clínico:** Patognomônico de perfuração de víscera oca gastrintestinal (úlcera perfurada, corpo estranho linear, deiscência de anastomose) ou trauma penetrante da parede abdominal. **Indicação cirúrgica de emergência absoluta!**

---

### Critérios Radiográficos de Agressividade Óssea

Na avaliação de radiografias de extremidades com suspeita de neoplasia primária (ex: Osteossarcoma) vs. infecção ou lesão benigna, avaliam-se cinco critérios fundamentais:

| Critério Radiográfico | Lesão Agressiva (Maligna / Neoplásica) | Lesão Não Agressiva (Benigna / Crônica) |
| :--- | :--- | :--- |
| **Padrão de Lise Óssea** | **Permeativo** (múltiplos orifícios microscópicos) ou **"Roído por Traça"** (*Moth-Eaten*) | **Geográfico** (área lítica única, bem delimitada com bordas escleróticas) |
| **Reação Periosteal** | Irregular, espiculada em **"Raios de Sol"** (*Sunburst*), amorfa ou **Triângulo de Codman** | Lisa, contínua, homogênea e lamelar sólida (fusiforme) |
| **Zona de Transição** | **Ampla e indefinida** (não se sabe exatamente onde termina o tumor e começa o osso são) | **Estreita e bem demarcada** (fronteira nítida entre o osso normal e a lesão) |
| **Integridade Cortical** | Destruição/lise cortical com extensão para tecidos moles | Cortical preservada ou expandida sem fratura lítica |
| **Velocidade de Mudança** | Evolução destrutiva rápida em intervalo de 10 a 20 dias | Estática ou com remodelamento esclerótico lento ao longo de meses |

\`\`\`mermaid
flowchart TD
    LesaoOssea[Lesão Óssea na Metáfise de Osso Longo] --> AvaliacaoLise{Padrão de Lise Cortical?}
    AvaliacaoLise -- Permeativo / Roído por Traça --> Agressivo1[Alta Agressividade]
    AvaliacaoLise -- Geográfico Bem Delimitado --> Benigno1[Baixa Agressividade]
    Agressivo1 --> AvaliacaoPeriosteo{Tipo de Reação Periosteal?}
    AvaliacaoPeriosteo -- Raios de Sol / Triângulo de Codman --> Agressivo2[Suspeita Crítica de Osteossarcoma / Neoplasia Maligna]
    AvaliacaoPeriosteo -- Contínua e Lamelar Lisa --> Infeccioso[Osteomielite ou Calo Ósseo Estável]
    Agressivo2 --> Conduta[Radiografia de Tórax em 3 Projeções para Metástase Pulmonar + Biópsia]
\`\`\`

> 💡 Regra Clássica do Osteossarcoma Canino: Ocorre preferencialmente nas metáfises de ossos longos, obedecendo ao axioma: *"Longe do cotovelo, perto do joelho"* (Rádio Distal, Úmero Proximal, Fêmur Distal e Tíbia Proximal). Raramente cruza a linha da cápsula articular para o osso vizinho!`
      },
      {
        id: 'sec_imaging_lab3',
        type: 'lab',
        title: 'Prontuário & Simulação Imaginológica: Apollo (Rottweiler)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Diagnóstico Diferencial de Claudicação Aguda e Lesão Lítica Óssea',
          patient: {
            name: 'Apollo',
            species: 'Canino',
            breed: 'Rottweiler',
            age: '6 anos',
            weightKg: 46.0,
            habitatOrEnvironment: 'Casa com jardim'
          },
          vitals: {
            heartRateBpm: 125,
            respiratoryRateRpm: 24,
            temperatureCelsius: 38.8,
            mucousMembranes: 'Rosadas, CRT = 1.5s',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Cão de porte gigante apresenta claudicação progressiva de membro torácico esquerdo há 3 semanas, evoluindo para apoio nulo hoje. Há aumento de volume rígido e doloroso à palpação na região cranial do ombro/úmero proximal esquerdo. Não há histórico de brigas ou quedas.',
          exams: [
            {
              category: 'imaging',
              title: 'Radiografia de Membro Torácico Esquerdo (Projeções Médio-Lateral e Crânio-Caudal)',
              findings: 'Marcada alteração arquitetural e lítica na metáfise do úmero proximal.',
              abnormalValues: [
                { parameter: 'Metáfise do Úmero Proximal', value: 'Lise cortical severa com padrão "roído por traça" e zona de transição ampla', reference: 'Cortical óssea lisa e contínua', status: 'critical' },
                { parameter: 'Reação Periosteal', value: 'Espiculada exuberante em "raios de sol" e presença de Triângulo de Codman', reference: 'Ausente', status: 'critical' },
                { parameter: 'Interlinha Articular Escápulo-Umeral', value: 'Preservada (a lesão respeita a articulação e não atinge a escápula)', reference: 'Normal', status: 'normal' },
                { parameter: 'Aumento de Partes Moles', value: 'Massa tumoral estendendo-se além da cortical para a musculatura adjacente', reference: 'Planos fasciais nítidos', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Apollo apresenta achados clássicos de lesão óssea monostótica altamente agressiva no úmero proximal. Qual a conduta diagnóstica e clínica mandatória antes de qualquer procedimento invasivo terapêutico?',
          decisionOptions: [
            {
              id: 'opt_dec_img3_1',
              label: 'Realizar estadiamento oncológico completo com Radiografia de Tórax em 3 Projeções (LL direita, LL esquerda e VD) para pesquisar micrometástases pulmonares + Biópsia óssea / PAF e planejamento de amputação ou limb-sparing com quimioterapia',
              description: 'Mais de 90% dos osteossarcomas caninos já possuem micrometástases no momento do diagnóstico; o estadiamento torácico define o prognóstico e a viabilidade cirúrgica.',
              isOptimal: true,
              consequenceText: 'Decisão impecável de oncologia ortopédica! O osteossarcoma é um tumor maligno agressivo de disseminação hematógena rápida para os pulmões. Três projeções radiográficas do tórax sob máxima inspiração são obrigatórias para detectar nódulos metastáticos (que colapsariam e ficariam ocultos se o animal fizesse apenas 1 projeção).',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Estadiamento oncológico torácico metódico antes do plano de amputação',
                mechanism: 'Identificação precoce de metástases pulmonares e definição de sobrevida real',
                effect: 'Definição precisa do plano terapêutico com amputação desarticular e quimioterapia com Carboplatina',
                clinicalMeaning: 'Manejo correto da dor intratável e extensão da sobrevida com qualidade'
              }
            },
            {
              id: 'opt_dec_img3_2',
              label: 'Aplicar tala de gesso externa rígida no ombro para estabilizar uma provável fissura óssea traumática',
              description: 'Imobilizar externamente uma lesão neoplásica lítica ignorando os critérios de malignidade.',
              isOptimal: false,
              consequenceText: 'Erro perigoso! A lesão é uma lise neoplásica grave que corrói a cortical; colocar uma tala não previne fratura e causa dor intolerável pela compressão do tumor.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Tentativa de imobilização externa de neoplasia óssea lítica ativa',
                mechanism: 'Fragilidade mecânica extrema da cortical roída por traça sob tensão',
                effect: 'Fratura patológica do úmero proximal ao menor movimento do animal',
                clinicalMeaning: 'Dor aguda excruciante e necessidade de intervenção de emergência'
              }
            },
            {
              id: 'opt_dec_img3_3',
              label: 'Prescrever apenas suplemento de cálcio e vitamina D3 por via oral acreditando ser raquitismo ósseo senil',
              description: 'Ignorar a neoplasia agressiva e prescrever cálcio oral.',
              isOptimal: false,
              consequenceText: 'Conduta descabida e negligente. O raquitismo é afecção nutricional de animais jovens em crescimento; em um cão adulto, a lesão focal com triângulo de Codman é neoplásica maligna.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Omissão diagnóstica de tumor ósseo agressivo',
                mechanism: 'Proliferação desgovernada de osteoblastos neoplásicos anaplásicos',
                effect: 'Disseminação metastática maciça para pulmões e fratura patológica espontânea',
                clinicalMeaning: 'Eutanásia inevitável em curto prazo'
              }
            }
          ],
          learningTakeaways: [
            'O Triângulo de Codman e a reação periosteal em "raios de sol" são marcas clássicas de lesões ósseas agressivas (especialmente Osteossarcoma).',
            'O estadiamento torácico em 3 projeções (LL direita, LL esquerda e VD) é obrigatório antes da amputação para detectar metástases pulmonares.',
            'O osteossarcoma respeita tipicamente as cartilagens articulares, raramente cruzando para o osso vizinho da articulação.'
          ]
        }
      },
      {
        id: 'sec_imaging_ex3',
        type: 'exercise',
        title: 'Exercício Clínico: Agressividade Óssea e Triângulo de Codman',
        exerciseId: 'ex_imaging_03'
      }
    ]
  },
  {
    id: 'lesson_imaging_04_ultrasound_physics_artifacts',
    moduleId: 'mod_imaging_diagnostics',
    title: 'Física do Ultrassom, Artefatos & Hemodinâmica Doppler',
    shortDescription: 'Impedância acústica, escolha de transdutores, ecogenicidade tecidual, identificação de artefatos diagnósticos e princípios do Doppler color/pulsado.',
    estimatedMinutes: 16,
    order: 4,
    concepts: ['concept_imaging_ultrasound_physics_doppler'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_imaging_th4',
        type: 'theory',
        title: 'A Física do Som nos Tecidos Vivos e a Formação da Imagem Ultrassonográfica',
        contentMarkdown: `# Aula Universitária: Física do Ultrassom, Artefatos e Doppler

> 📖 Referência Canônica: Penninck, D.; d'Anjou, M. A. *Atlas of Small Animal Ultrasonography*, 2nd ed. Wiley-Blackwell; Nyland, T. G.; Mattoon, J. S. *Small Animal Diagnostic Ultrasound*, 3rd ed. Saunders.

### Princípios da Propagação Acústica nos Tecidos

O ultrassom diagnóstico utiliza ondas sonoras longitudinais de alta frequência (2 a 18 MHz) geradas pelo **efeito piezoelétrico inverso** (deformação mecânica de cristais de titanato de zirconato de chumbo ao receberem impulsos elétricos):
1. **Velocidade de Propagação ($c$):** Nos tecidos moles biológicos dos animais domésticos, a velocidade do som é calibrada convencionalmente em **$1.540	ext{ m/s}$**. No ar, a velocidade é de apenas $330	ext{ m/s}$ e no osso atinge $4.080	ext{ m/s}$.
2. **Impedância Acústica ($Z = 
ho 	imes c$):** É a resistência intrínseca que um meio oferece à passagem da onda sonora. Quando a onda atinge a interface entre dois tecidos com grande diferença de impedância ($ΔZ$ elevado, como na interface **ar-tecido** ou **tecido-osso**), praticamente 100% da onda sonora é refletida de volta, impedindo a penetração do feixe. Daí a necessidade absoluta do **gel acústico condutor** para eliminar microbolhas de ar entre a pele e o transdutor!

---

### Escala de Ecogenicidade e Escolha de Transdutores

- **Transdutor Microconvexo (5 a 8 MHz):** Feixe em leque com pequena pegada acústica (*footprint*), ideal para passar pelos espaços intercostais e explorar o abdômen geral de cães e gatos.
- **Transdutor Linear de Alta Frequência (10 a 18 MHz):** Alta frequência proporciona **excelente resolução axial e espacial**, porém sofre grande atenuação física, penetrando poucos centímetros. Indicado para: olho, tireoide, linfonodos superficiais e alças intestinais de felinos.
- **Transdutor Convexo de Baixa Frequência (2 a 5 MHz):** Menor resolução, porém grande profundidade de penetração ($> 20	ext{ cm}$), essencial para abdômen de bovinos, equinos e cães gigantes.

**Escala Fisiológica de Ecogenicidade Abdominal Canina:**
$$	ext{Líquido/Urina (Anecoica)} < 	ext{Medular Renal} < 	ext{Córtex Renal} ≤ 	ext{Fígado} < 	ext{Baço} < 	ext{Seio Renal / Osso (Hiperecogênica)}$$

\`\`\`mermaid
flowchart LR
    Anecoico["Anecoico (Preto)<br>Bílis, Urina, Cistos"] --> Hipoecoico["Hipoecoico (Cinza-Escuro)<br>Medular Renal, Córtex"]
    Hipoecoico --> Isoecoico["Isoecoico (Cinza-Médio)<br>Fígado vs. Córtex Renal"]
    Isoecoico --> Hiperecoico["Hiperecoico (Cinza-Claro/Branco)<br>Baço, Gordura, Cálculos"]
    Hiperecoico --> Sombra["Sombra Acústica (Preto Posterior)<br>Ossos, Urólitos"]
\`\`\`

---

### Artefatos Diagnósticos Essenciais: Inimigos ou Aliados?

| Artefato | Mecanismo Físico | Significado Clínico Prático |
| :--- | :--- | :--- |
| **Sombra Acústica Posterior** | Reflexão quase total do feixe em estruturas minerais ($Z$ muito alto) | Diagnóstico patognomônico de urólitos (cálculos), fragmentos ósseos ou corpos estranhos densos |
| **Reforço Acústico Posterior** | Feixe atravessa líquido anecoico sem sofrer atenuação; chega aos tecidos profundos mais intenso | Confirma a natureza líquida/cística de uma estrutura (diferencia cisto renal de neoplasia sólida) |
| **Reverberação / Cauda de Cometa** | Reflexão em vaivém entre superfícies altamente reflexivas (gás ou metal) | Identifica presença de gás luminal intestinal, pneumotórax ou projéteis |
| **Imagem em Espelho** | Reflexão na curvatura do diafragma atuando como refletor especular | Falsa imagem de um segundo fígado ou vesícula biliar dentro do tórax |
| **Artefato de Largura de Feixe** | Ecos laterais gerados pela espessura tridimensional do feixe ultrassônico | Falsa "lama biliar" ou sedimento no interior de bexigas ou vesículas normais |`
      },
      {
        id: 'sec_imaging_lab4',
        type: 'lab',
        title: 'Prontuário & Simulação Imaginológica: Billy (Schnauzer)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Diferenciação Ultrassonográfica de Urolitíase e Espessamento Vesical',
          patient: {
            name: 'Billy',
            species: 'Canino',
            breed: 'Schnauzer Miniatura',
            age: '5 anos',
            weightKg: 8.5,
            habitatOrEnvironment: 'Casa interna'
          },
          vitals: {
            heartRateBpm: 120,
            respiratoryRateRpm: 22,
            temperatureCelsius: 38.5,
            mucousMembranes: 'Rosadas, CRT = 1.0s',
            capillaryRefillTimeSec: 1.0
          },
          anamnesis: 'Billy apresenta hematúria intermitente, estrangúria e polaciúria há 2 semanas. A tutora relata que ele tenta urinar diversas vezes durante os passeios, eliminando apenas pequenos pingos sanguinolentos. Não há azotemia nos exames de sangue prévios.',
          exams: [
            {
              category: 'imaging',
              title: 'Ultrassonografia do Trato Urinário com Transdutor Linear de 10 MHz',
              findings: 'Varredura vesical revelando achados característicos de litíase intraluminal.',
              abnormalValues: [
                { parameter: 'Lúmen da Bexiga Urinária', value: 'Estrutura hiperecogênica esférica de 1.4 cm no trígono vesical', reference: 'Lúmen anecoico homogêneo', status: 'critical' },
                { parameter: 'Artefato Acústico Subjacente', value: 'Sombra acústica posterior anecoica nítida e bem delimitada', reference: 'Ausente', status: 'critical' },
                { parameter: 'Mobilidade da Estrutura', value: 'Estrutura desloca-se livremente por gravidade ao mudar o animal de decúbito dorsal para lateral', reference: 'Sem estruturas livres', status: 'critical' },
                { parameter: 'Parede Vesical Ventral', value: 'Espessada irregularmente (3.8 mm) com perda de estratificação', reference: '< 1.5 - 2.0 mm', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'A imagem ultrassonográfica confirma a presença de cálculo intraluminal com sombra acústica posterior limpa e cistite crônica associada. Qual é o manejo terapêutico definitivo indicado?',
          decisionOptions: [
            {
              id: 'opt_dec_img4_1',
              label: 'Realizar Cistotomia cirúrgica para remoção do urólito + Envio do cálculo para análise quantitativa de composição mineral (espectroscopia infravermelha) + Urocultura por cistocentese e antibiograma',
              description: 'A remoção cirúrgica desobstrui o trato e previne obstrução uretral iminente; a análise mineralógica do cálculo é indispensável para prevenir recidivas futuras.',
              isOptimal: true,
              consequenceText: 'Excelente conduta médica! Schnauzers têm forte predisposição a urólitos de oxalato de cálcio e estruvita. A remoção cirúrgica com cistotomia elimina a fonte de irritação mecânica e o risco de obstrução uretral em machos. A análise mineralógica por espectroscopia determinará a dieta preventiva correta.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Confirmação ultrassonográfica de cálculo com sombra acústica e intervenção com cistotomia',
                mechanism: 'Remoção mecânica do cálculo e alívio do processo inflamatório da mucosa vesical',
                effect: 'Eliminação da hematúria, desobstrução completa do fluxo urinário e cura da cistite',
                clinicalMeaning: 'Prevenção da uropatia obstrutiva aguda e preservação da função renal'
              }
            },
            {
              id: 'opt_dec_img4_2',
              label: 'Prescrever apenas ração comercial comum e anti-inflamatório oral esperando que o cálculo de 1.4 cm seja expelido espontaneamente pela uretra',
              description: 'Conduta omissa em cão macho com cálculo volumoso na bexiga.',
              isOptimal: false,
              consequenceText: 'Conduta perigosa e negligente! A uretra do cão macho possui um osso peniano que limita sua distensão a não mais de 2-3 mm. Um cálculo de 14 mm jamais passará espontaneamente e invariavelmente causará obstrução uretral com risco de ruptura vesical.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Expectativa indevida de eliminação espontânea de urólito de grande porte em cão macho',
                mechanism: 'Impactação do cálculo no colo vesical ou uretra pré-escrotal',
                effect: 'Obstrução urinária aguda com retenção urinária e uremia pós-renal com hipercalemia',
                clinicalMeaning: 'Risco de morte por parada cardíaca induzida por hiperpotassemia em 48h'
              }
            },
            {
              id: 'opt_dec_img4_3',
              label: 'Realizar litotripsia por punção percutânea transabdominal com agulha 18G sem controle de resíduos',
              description: 'Procedimento contraindicado que perfura a bexiga e derrama urina infectada no peritônio.',
              isOptimal: false,
              consequenceText: 'Erro cirúrgico grave! Puncionar a bexiga para tentar fraturar o cálculo causa perfuração vesical, vazamento de urina para a cavidade peritoneal e peritonite por uroperitônio grave.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Procedimento invasivo inadequado na parede vesical',
                mechanism: 'Extravasamento contínuo de urina para a cavidade peritoneal',
                effect: 'Uroperitônio e choque endotóxico com azotemia pós-renal',
                clinicalMeaning: 'Necessidade de laparotomia de emergência sob sepse'
              }
            }
          ],
          learningTakeaways: [
            'A sombra acústica posterior limpa é o artefato que comprova que a estrutura reflete e absorve totalmente o som (cálculo mineral ou osso).',
            'O reforço acústico posterior confirma a natureza estritamente líquida de cistos e vesículas.',
            'A mudança de decúbito do paciente é uma manobra fundamental para confirmar se a estrutura ecogênica está solta no lúmen ou aderida à parede (como pólipos ou carcinomas).'
          ]
        }
      },
      {
        id: 'sec_imaging_ex4',
        type: 'exercise',
        title: 'Exercício Clínico: Artefatos Ultrassonográficos e Urolitíase',
        exerciseId: 'ex_imaging_04'
      }
    ]
  },
  {
    id: 'lesson_imaging_05_pocus_fast_emergency',
    moduleId: 'mod_imaging_diagnostics',
    title: 'POCUS, TFAST, AFAST & Vet BLUE no Paciente Crítico',
    shortDescription: 'Ultrassonografia point-of-care orientada a problemas: AFAST com AFS, TFAST para pneumotórax/taponamento e Vet BLUE para edema alveolar.',
    estimatedMinutes: 16,
    order: 5,
    concepts: ['concept_imaging_pocus_fast_emergency'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_imaging_th5',
        type: 'theory',
        title: 'A Revolução do POCUS na Emergência Veterinária',
        contentMarkdown: `# Aula Universitária: Protocolos POCUS (AFAST, TFAST e Vet BLUE) no Paciente Crítico

> 📖 Referência Canônica: Boysen, S. R.; Lisciandro, G. R. *The use of ultrasound for dogs and cats in the emergency room: AFAST and TFAST*. Vet Clin North Am Small Anim Pract; Lisciandro, G. R. *Focused Ultrasound Techniques for the Small Animal Practitioner*, 2nd ed. Wiley-Blackwell.

### O Paradigma da Ultrassonografia Point-of-Care (POCUS)

O POCUS não substitui o exame ultrassonográfico abdominal ou ecocardiográfico detalhado, mas responde a **perguntas binárias rápidas (Sim/Não)** em menos de 3 minutos, sem necessidade de posicionamento estressante ou tricotomia ampla:
- *Há sangue livre no abdômen?* (AFAST)
- *Há líquido no saco pericárdico causando tamponamento?* (TFAST)
- *O pulmão está colapsado por pneumotórax?* (TFAST)
- *O desconforto respiratório decorre de edema alveolar ou tórax "seco"?* (Vet BLUE)

---

### O Protocolo AFAST e o Escore AFS

Avalia quatro sítios acústicos abdominais dependentes de líquido:
1. **Diafragmático-Hepático (DH):** Imediatamente caudal ao apêndice xifoide. Detecta líquido entre lobos hepáticos e visualiza a câmara pericárdica e vesícula biliar.
2. **Esplenorrenal (SR):** No flanco esquerdo, dorsalmente. Detecta líquido entre o polo caudal do rim esquerdo e o baço.
3. **Hepatorrenal (HR):** No flanco direito ("Bolsa de Morrison"). Sítio mais sensível em cães para detectar pequenos volumes de hemoabdômen!
4. **Cistocólico (CC):** No abdômen caudal ventral, sobre a bexiga urinária.

**Escore de Líquido Abdominal (Abdominal Fluid Score - AFS):**
- **AFS 0:** Nenhum ponto positivo. Sem líquido livre detectável.
- **AFS 1 ou 2:** Líquido em 1 ou 2 sítios (Hemoabdômen de pequeno volume; monitorar e repetir AFAST em 2-4 horas).
- **AFS 3 ou 4:** Líquido em 3 ou 4 sítios (Hemoabdômen volumoso grave; alta probabilidade de necessidade de transfusão sanguínea e intervenção cirúrgica).

---

### Protocolo TFAST e o Protocolo Pulmonar Vet BLUE

- **Pneumotórax no TFAST:**
  - Em condições normais, a pleura visceral desliza ativamente sobre a parietal ao ritmo da respiração: **Sinal de Deslizamento Pulmonar (*Glide Sign*) Positivo** + caudas de cometa verticais.
  - No pneumotórax, o ar no espaço pleural separa as pleuras: há **ausência de Glide Sign** e ausência de cauda de cometa. O ponto de transição onde o deslizamento reaparece é o patognomônico **Ponto Pulmonar (*Lung Point*)**.

- **Vet BLUE (Bedside Lung Ultrasound Examination):**
  - Quatro sítios bilaterais: Caudodorsal, Perihilar, Cranioventral e Médio.
  - **Linhas A:** Linhas horizontais equidistantes paralelas à linha pleural (pulmão seco normal ou pneumotórax).
  - **Linhas B ("Foguetes Pulmonares"):** Linhas verticais brancas brilhantes que se originam na linha pleural e vão até o fundo da tela apagando as linhas A.
    - $≥ 3$ Linhas B por espaço acústico indicam **Síndrome Intersticial-Alveolar** (edema cardiogênico na ICC esquerda, contusão pulmonar ou ARDS).

\`\`\`mermaid
flowchart TD
    Emergencia[Paciente Traumatizado ou em Choque na Emergência] --> POCUS[Exame POCUS Imediato à Beira do Leito]
    POCUS --> AFAST{AFAST: Líquido Livre em HR, SR, DH ou CC?}
    AFAST -- Sim (AFS >= 3) --> Hemoabdomen[Hemoabdômen Grave: Abdominocentese + Sangue Total / Cirurgia]
    AFAST -- Não (AFS 0) --> TFAST{TFAST: Efusão Pleural ou Pericárdica?}
    TFAST -- Efusão Pericárdica com Tamponamento --> Pericardiocentese[Pericardiocentese de Emergência Imediata]
    TFAST -- Ausência de Glide Sign --> Pneumotorax[Pneumotórax Confirmado: Toracocentese de Alívio]
    TFAST -- Linhas B Confluentes no Vet BLUE --> EdemaAlveolar[Edema Pulmonar / ARDS: Oxigenoterapia + Furosemida se Cardiogênico]
\`\`\``
      },
      {
        id: 'sec_imaging_lab5',
        type: 'lab',
        title: 'Prontuário & Simulação Imaginológica: Luke (Persa)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo de Emergência da Crise Respiratória Felina via POCUS',
          patient: {
            name: 'Luke',
            species: 'Felino',
            breed: 'Persa',
            age: '7 anos',
            weightKg: 4.2,
            habitatOrEnvironment: 'Casa interna'
          },
          vitals: {
            heartRateBpm: 215,
            respiratoryRateRpm: 68,
            temperatureCelsius: 37.2,
            mucousMembranes: 'Cianóticas, postura ortopneica com membros abduzidos',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'Gato apresenta angústia respiratória aguda iniciada há 3 horas com respiração de boca aberta e recusa a deitar-se. O tutor refere histórico de sopro cardíaco leve assintomático diagnosticado em vacinação há 1 ano. Devido à fragilidade extrema, uma contenção convencional para radiografia torácica oferece risco iminente de óbito por estresse!',
          exams: [
            {
              category: 'imaging',
              title: 'Varredura POCUS Integrada (TFAST e Vet BLUE) em Posição Esternal sem Sedação',
              findings: 'Avaliação point-of-care realizada com suplementação de oxigênio em fluxo livre.',
              abnormalValues: [
                { parameter: 'Sítio CTS TFAST (Tórax Caudal)', value: 'Lâmina fina de líquido anecoico pleural livre bilateral', reference: 'Espaço pleural virtual sem líquido', status: 'high' },
                { parameter: 'Sítio Pericárdico TFAST (PCS)', value: 'Sem efusão pericárdica, átrio esquerdo severamente dilatado', reference: 'Câmaras normais sem efusão', status: 'critical' },
                { parameter: 'Vet BLUE (Quadrantes Caudodorsais e Médios)', value: 'Incontáveis Linhas B coalescentes em foguete ("pulmão branco")', reference: 'Linhas A normais (< 2 linhas B)', status: 'critical' },
                { parameter: 'Glide Sign (Deslizamento Pulmonar)', value: 'Presente bilateralmente (exclui categoricamente pneumotórax)', reference: 'Presente', status: 'normal' }
              ]
            }
          ],
          challengePrompt: 'O POCUS comprova síndrome intersticial-alveolar grave (Linhas B confluentes) associada a aumento de átrio esquerdo e efusão pleural em gato. Qual a intervenção farmacológica de emergência padrão-ouro?',
          decisionOptions: [
            {
              id: 'opt_dec_img5_1',
              label: 'Instalação imediata em caixa/gaiola de Oxigênio (FiO2 40-50%) + Furosemida (2 mg/kg IM ou IV) + Butorfanol (0.2 mg/kg IM para alívio do pânico respiratório) + Postergar radiografias até estabilização completa',
              description: 'O protocolo reduz a pré-carga cardíaca e a angústia respiratória sem estresse adicional que possa deflagrar parada cardíaca por tempestade adrenérgica.',
              isOptimal: true,
              consequenceText: 'Decisão impecável de emergência felina! Submeter um gato nessa condição a posicionamento forçado para radiografia é a principal causa de parada cardiorrespiratória em salas de emergência. O POCUS permitiu diagnosticar com precisão a ICC descompensada (edema alveolar por linhas B e dilatação atrial) em 90 segundos. A furosemida drena o edema e o butorfanol acalma o animal.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Diagnóstico rápido por POCUS sem estresse e instituição precoce de diurético de alça e sedação ansiolítica',
                mechanism: 'Diminuição da pressão hidrostática venocapilar pulmonar e alívio do estresse simpático',
                effect: 'Redução das Linhas B pulmonares, queda da FR para 36 rpm e retorno das mucosas a róseas',
                clinicalMeaning: 'Reversão da crise de edema pulmonar agudo com sobrevivência do paciente'
              }
            },
            {
              id: 'opt_dec_img5_2',
              label: 'Segurar firmemente o gato em decúbito dorsal forçado para radiografia torácica em 3 projeções imediatamente',
              description: 'Exigir radiografia torácica completa em gato ortopneico em crise respiratória.',
              isOptimal: false,
              consequenceText: 'Erro médico letal! A contenção física em decúbito dorsal de um felino em insuficiência respiratória grave com edema alveolar provoca parada cardiorrespiratória fatal por exaustão e hipóxia em menos de 60 segundos.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Contenção forçada em paciente felino com falência respiratória aguda',
                mechanism: 'Disparo adrenérgico extremo com aumento da pós-carga e colapso ventilatório',
                effect: 'Hipoxemia intratável, cianose terminal e bradicardia fulminante',
                clinicalMeaning: 'Óbito na mesa radiográfica antes do disparo do raio-X'
              }
            },
            {
              id: 'opt_dec_img5_3',
              label: 'Administrar infusão contínua de Ringer Lactato a 10 mL/kg/h para manter a hidratação renal',
              description: 'Fluidoterapia IV em paciente em edema pulmonar cardiogênico agudo.',
              isOptimal: false,
              consequenceText: 'Conduta desastrosa! Fluidoterapia em ICC descompensada inunda os pulmões imediatamente com mais líquido por aumento da pressão de enchimento atrial esquerda, causando morte rápida por asfixia.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Administração de fluidos em insuficiência cardíaca congestiva descompensada',
                mechanism: 'Aumento súbito da pré-carga sobre ventrículo esquerdo doente',
                effect: 'Extravasamento alveolar maciço de líquido seroso',
                clinicalMeaning: 'Edema pulmonar asfixiante fulminante'
              }
            }
          ],
          learningTakeaways: [
            'O POCUS (TFAST e Vet BLUE) permite diagnosticar edema cardiogênico e pneumotórax em gatos dispneicos sem o estresse fatal da radiografia convencional.',
            'A presença de ≥ 3 Linhas B ("foguetes pulmonares") por sítio no Vet BLUE diagnostica síndrome intersticial-alveolar (edema pulmonar).',
            'O Glide Sign positivo exclui categoricamente a presença de pneumotórax no espaço acústico examinado.'
          ]
        }
      },
      {
        id: 'sec_imaging_ex5',
        type: 'exercise',
        title: 'Exercício Clínico: POCUS, TFAST e Vet BLUE',
        exerciseId: 'ex_imaging_05'
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
    prompt: 'Um cão filhote com vômitos profusos e diarreia secretora apresenta desidratação clínica estimada em 8%, pesando 10 kg. O potássio sérico revela hipocalemia moderada (2.8 mEq/L). Qual é o volume de fluido de cristaloides necessário unicamente para repor o déficit de hidratação e qual é a taxa máxima segura de infusão contínua de cloreto de potássio (KCl) para evitar fibrilação ventricular iatrogênica?',
    options: [
      {
        id: 'opt_sa_1',
        text: 'Déficit de hidratação = 800 mL (% desidratação × peso × 10); taxa máxima de infusão de potássio = 0.5 mEq/kg/hora',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O cálculo clássico do déficit de hidratação é: Volume (mL) = % Desidratação (em decimal, 0.08) × Peso (10 kg) × 1000 = 800 mL (ou simplificado: 8 × 10 × 10 = 800 mL). A taxa de infusão de potássio JAMAIS deve ultrapassar o limite biológico estrito de 0.5 mEq/kg/hora para evitar parada cardíaca em diástole por hipercalemia fulminante.'
      },
      {
        id: 'opt_sa_2',
        text: 'Déficit de hidratação = 80 mL; taxa máxima de infusão de potássio = 5.0 mEq/kg/hora',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. 80 mL é insuficiente para hidratar um cão de 10 kg com 8% de perda volêmica, e 5 mEq/kg/h de potássio causará morte imediata por fibrilação ventricular.'
      },
      {
        id: 'opt_sa_3',
        text: 'Déficit de hidratação = 2.500 mL; potássio não deve ser administrado por via venosa sob nenhuma hipótese',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. 2.500 mL geraria sobrecarga volêmica aguda com edema pulmonar. A hipocalemia moderada exige sim reposição de KCl parenteral diluído.'
      },
      {
        id: 'opt_sa_4',
        text: 'Déficit de hidratação = 400 mL; a infusão de potássio depende apenas da frequência respiratória',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O déficit para 8% de 10 kg é 800 mL, e a taxa máxima de potássio é de 0.5 mEq/kg/h.'
      }
    ]
  },
  {
    id: 'ex_small_anim_02',
    conceptId: 'concept_small_animals_iris_ckd',
    type: 'multiple_choice',
    prompt: 'Um felino idoso de 14 anos com Doença Renal Crônica (DRC) é estadiado de acordo com as diretrizes internacionais da International Renal Interest Society (IRIS). Quais são os dois biomarcadores séricos primários utilizados para definir o estágio da DRC (Estágios 1 a 4) e quais são os dois subestadiamentos obrigatórios?',
    options: [
      {
        id: 'opt_sa_2_1',
        text: 'Creatinina sérica estável e Dimetilarginina Simétrica (SDMA); com subestadiamento obrigatório por Pressão Arterial Sistólica (PAS) e Relação Proteína:Creatinina Urinária (RPCU)',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A diretriz IRIS utiliza creatinina sérica e SDMA (marcador precoce que não sofre interferência da perda de massa muscular do idoso) para classificar o paciente do Estágio 1 (não azotêmico) ao 4 (azotemia severa terminal). Em seguida, todo paciente deve ser subestadiado quanto à proteinúria (RPCU) e hipertensão arterial sistêmica (PAS), pois ambas são fatores de progressão renal direta.'
      },
      {
        id: 'opt_sa_2_2',
        text: 'Apenas a glicemia de jejum e contagem de plaquetas com subestadiamento por peso',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A glicemia avalia diabetes, não sendo o parâmetro do estadiamento renal IRIS.'
      },
      {
        id: 'opt_sa_2_3',
        text: 'Níveis de ALT hepática e Fosfatase Alcalina com subestadiamento por ecografia',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. ALT e FA avaliam parênquima hepático, sem relação com a taxa de filtração glomerular renal.'
      },
      {
        id: 'opt_sa_2_4',
        text: 'pH do suco gástrico e teste de Schirmer',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Teste de Schirmer avalia produção lacrimal em oftalmologia.'
      }
    ]
  },
  {
    id: 'ex_small_anim_03',
    conceptId: 'concept_small_animals_cushing_addison',
    type: 'multiple_choice',
    prompt: 'Uma cadela de 4 anos é atendida em choque hipovolêmico grave, hipotermia e bradicardia severa inexplicável (FC 50 bpm). O hemograma e ionograma revelam hiponatremia (Na+ 126 mEq/L) e hipercalemia crítica (K+ 8.2 mEq/L), resultando em razão Na:K de 15.3:1. O ECG demonstra ausência de ondas P e ondas T altas e apiculadas. Qual a conduta emergencial imediata para proteger o coração da parada cardíaca iminente e qual fármaco corticoide deve ser escolhido para não invalidar o Teste de Estimulação com ACTH?',
    options: [
      {
        id: 'opt_sa_3_1',
        text: 'Administração IV lenta de Gluconato de Cálcio a 10% sob monitorização de ECG contínua para antagonizar o efeito da hipercalemia no potencial de ação miocárdico; e uso de Dexametasona IV (que não sofre reação cruzada no ensaio de cortisol sérico)',
        isCorrect: true,
        pedagogicalFeedback: 'Excelente raciocínio emergencial! O Gluconato de Cálcio a 10% não reduz o potássio sérico, mas restaura a diferença de voltagem entre o potencial de repouso e o limiar de disparo dos cardiomiócitos, protegendo o coração de fibrilação ventricular imediata. A Dexametasona é o corticoide de escolha na crise addisoniana porque sua estrutura química não é detectada nos ensaios laboratoriais comuns de cortisol, permitindo coletar o cortisol basal e pós-ACTH mesmo após sua administração.'
      },
      {
        id: 'opt_sa_3_2',
        text: 'Administrar bolus de Cloreto de Potássio concentrado e Hidrocortisona pura',
        isCorrect: false,
        pedagogicalFeedback: 'Erro fatal! Injetar mais potássio em um animal com 8.2 mEq/L causará assistolia instantânea. Além disso, a hidrocortisona sofre reação cruzada e invalida o teste de ACTH.'
      },
      {
        id: 'opt_sa_3_3',
        text: 'Administrar Propranolol para diminuir o trabalho do coração e esperar 24 horas',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O paciente já apresenta bradicardia severa por hipercalemia; um betabloqueador pioraria a condução atrioventricular gerando parada imediata.'
      },
      {
        id: 'opt_sa_3_4',
        text: 'Prescrever espironolactona oral e alta para casa',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A espironolactona é um diurético poupador de potássio que agravaria ainda mais a hipercalemia letal.'
      }
    ]
  },
  {
    id: 'ex_small_anim_04',
    conceptId: 'concept_small_animals_diabetic_ketoacidosis',
    type: 'multiple_choice',
    prompt: 'Durante o manejo hospitalar de um cão com Cetoacidose Diabética (CAD) grave sob infusão contínua de Insulina Regular de ação rápida, qual complicação hematológica potencialmente fatal pode ocorrer se não houver suplementação profilática de Fósforo (fosfato de potássio) na fluidoterapia?',
    options: [
      {
        id: 'opt_sa_4_1',
        text: 'Hipofosfatemia severa induzida pelo influxo celular maciço de fósforo carreado pela glicose e insulina, causando depleção crítica de ATP e 2,3-DPG nos eritrócitos com consequente Hemólise Intravascular Aguda fatal',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! A insulina e a correção da acidose forçam o fósforo sérico para dentro das células para a fosforilação da glicose. Quando o fósforo plasmático cai abaixo de 1.5 mg/dL (ou < 1.0 mg/dL), os eritrócitos perdem a capacidade de sintetizar ATP para manter a bomba da membrana celular e sofrem lise osmótica maciça (anemia hemolítica intravascular aguda com hemoglobinúria e icterícia).'
      },
      {
        id: 'opt_sa_4_2',
        text: 'Policitemia absoluta por proliferação desregulada de reticulócitos na medula óssea',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A hipofosfatemia causa hemólise e anemia aguda grave, e não policitemia.'
      },
      {
        id: 'opt_sa_4_3',
        text: 'Calcificação metastática aguda de artérias renais provocando infarto renal fulminante',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A calcificação metastática exige produto Cálcio x Fósforo muito alto (hiperfosfatemia crônica), o oposto do que ocorre na queda aguda do fósforo pela insulina.'
      },
      {
        id: 'opt_sa_4_4',
        text: 'Coagulação intravascular disseminada por ativação plaquetária induzida pelo cálcio livre',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A hipofosfatemia não é ativadora direta da cascata plaquetária, seu risco primordial é a fragilidade mecânica e lise das hemácias.'
      }
    ]
  },
  {
    id: 'ex_small_anim_05',
    conceptId: 'concept_small_animals_hepatopathies_shunts',
    type: 'multiple_choice',
    prompt: 'Um cão filhote da raça Yorkshire Terrier de 6 meses é levado à consulta com histórico de hiporexia, ataxia e episódios de ptialismo e "head pressing" (pressão da cabeça contra a parede) que pioram cerca de 1 hora após as refeições. A urinálise revela cristais marrons esféricos com espículas ("em maçã espinhosa") de biurato de amônio. Qual é o diagnóstico primário mais provável e qual o mecanismo de ação da Lactulose no manejo da Encefalopatia Hepática?',
    options: [
      {
        id: 'opt_sa_5_1',
        text: 'Shunt Portossistêmico Congênito Extra-hepático (EHPSS); a Lactulose é fermentada pela microbiota colônica em ácidos orgânicos, reduzindo o pH intraluminal e convertendo amônia difusível (NH3) no íon amônio não absorvível (NH4+), aprisionando-o nas fezes (ion trapping)',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O Yorkshire tem a maior incidência de shunt portossistêmico extra-hepático congênito. O desvio do sangue portal impede a conversão hepática de amônia em ureia. A amônia cruza a barreira hematoencefálica, causando edema de astrócitos e sinais neuropsiquiátricos pós-prandiais. O excesso de amônia e ácido úrico excretados na urina cristaliza como biurato de amônio. A lactulose acidifica as fezes, transformando NH3 em NH4+ carregado que não consegue ser reabsorvido pela mucosa colônica e é expelido com o trânsito acelerado.'
      },
      {
        id: 'opt_sa_5_2',
        text: 'Doença do Armazenamento de Cobre hepático; a lactulose atua quelando diretamente os íons de cobre no parênquima biliar',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A hepatite por acúmulo de cobre é típica de Bedlington Terriers e Labradores adultos, e seu quelante específico é a D-penicilamina ou Trientina.'
      },
      {
        id: 'opt_sa_5_3',
        text: 'Insuficiência Pancreática Exócrina congênita; a lactulose repõe enzimas tripsina e lípase no lúmen do jejuno',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A IPE cursa com diarreia crônica esteatorreica e apetite voraz (polifagia), sem sinais encefalopáticos pós-prandiais.'
      },
      {
        id: 'opt_sa_5_4',
        text: 'Toxoplasmose encefálica primária; a lactulose exerce efeito bactericida e protozoocida no líquor',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A lactulose é um dissacarídeo sintético não absorvível de ação estritamente no lúmen gastrointestinal.'
      }
    ]
  }
];

export const SMALL_ANIMALS_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_small_01_gastroenteritis_fluid',
    moduleId: 'mod_small_animals_clinic',
    title: 'Gastroenterites Agudas, Desidratação & Fluidoterapia Racional',
    shortDescription: 'Fisiopatologia da diarreia e vômitos, desequilíbrios ácido-básicos e cálculo dinâmico de hidratação e reposição eletrolítica.',
    estimatedMinutes: 15,
    order: 1,
    concepts: ['concept_small_animals_ckd_endocrinology'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_small_th1',
        type: 'theory',
        title: 'Mecanismos de Diarreia, Emese e Cálculos de Fluidoterapia',
        contentMarkdown: `# Aula Universitária: Gastroenterites Agudas e Fluidoterapia Racional em Cães e Gatos

> 📖 Referência Canônica: DiBartola, S. P. *Fluid, Electrolyte, and Acid-Base Disorders in Small Animal Practice*, 5th ed. Saunders; Ettinger, S. J.; Feldman, E. C. *Tratado de Medicina Interna Veterinária*, 8ª ed. Guanabara Koogan.

### A Fisiopatologia das Perdas Digestivas

O trato gastrintestinal é a principal interface de troca hídrica e eletrolítica do organismo animal. As afecções agudas desencadeiam desequilíbrios distintos conforme o segmento anatômico afetado:

1. **Vômitos Gástricos Puros (Obstrução Pilórica ou Gastrite Aguda):**
   - Perda maciça de ácido clorídrico ($HCl$) e cloreto de potássio ($KCl$).
   - Ocorre retenção de bicarbonato ($HCO_3^-$) pelo pâncreas, levando à clássica **Alcalose Metabólica Hipoclorêmica e Hipocalêmica**.
   - Na hipovolemia severa resultante, os rins tentam reabsorver sódio no túbulo distal em troca de íons $H^+$ (devido à falta de potássio intracelular), gerando o fenômeno de **Acidúria Paradoxal**.

2. **Diarreia Aguda e Vômitos Duodenais:**
   - Perda maciça de secreções pancreáticas, biliares e entéricas ricas em bicarbonato e sódio.
   - Instala-se **Acidose Metabólica Hiperclorêmica com Ânion Gap Normal**.

---

### O Cálculo Tripartite da Fluidoterapia

A prescrição diária de fluidos deve cobrir três compartimentos dinâmicos:

$$V_{\text{total (24h)}} = \text{Déficit de Hidratação} + \text{Manutenção Diária} + \text{Perdas Continuadas}$$

1. **Déficit de Hidratação:**
   $$\text{Déficit (mL)} = % \text{Desidratação (em decimal)} \times \text{Peso (kg)} \times 1.000$$
   *(Exemplo: cão de 10 kg com 8% de desidratação: $0.08 \times 10 \times 1000 = 800\text{ mL}$)*.
2. **Volume de Manutenção Diária:**
   $$\text{Manutenção} = 60\text{ mL/kg/dia (em cães)}    \text{ou pela fórmula alométrica: } 70 \times (\text{Peso})^{0.75}$$
3. **Perdas Continuadas:** Estimativa volumétrica de vômitos, diarreia profusa ou poliúria esperados nas próximas 24 horas (geralmente $20-40\text{ mL/kg/dia}$).

\`\`\`mermaid
flowchart TD
    Gastroenterite[Gastroenterite Aguda Severa] --> Vômitos[Vômitos Profusos: Perda de H+, Cl- e K+]
    Vômitos --> Alcalose[Alcalose Metabólica Hipoclorêmica Hipocalêmica]
    Gastroenterite --> Diarreia[Diarreia Exsudativa: Perda de Água, Na+ e HCO3-]
    Diarreia --> Acidose[Acidose Metabólica com Hipovolemia]
    Alcalose & Acidose --> Hipoperfusao[Choque Hipovolêmico com Azotemia Pré-Renal]
    Hipoperfusao --> Fluido[Fluidoterapia Racional Tripartite: Déficit + Manutenção + Perdas]
    Fluido --> ReposicaoK[Suplementação Racional de KCl: Limite Máximo <= 0.5 mEq/kg/h]
\`\`\`

> ⚠️ Regra de Ouro da Segurança em Fluidoterapia: A infusão intravenosa de Potássio ($KCl$) **NUNCA deve ultrapassar $0.5\text{ mEq/kg/hora}$** sob risco de bradicardia terminal e parada cardíaca em diástole por despolarização miocárdica persistente!`
      },
      {
        id: 'sec_small_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Pipoca (Shih-tzu)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Hidroeletrolítico de Gastroenterite Aguda Desidratante',
          patient: {
            name: 'Pipoca',
            species: 'Canino',
            breed: 'Shih-tzu',
            age: '5 meses',
            weightKg: 4.5,
            habitatOrEnvironment: 'Casa interna'
          },
          vitals: {
            heartRateBpm: 165,
            respiratoryRateRpm: 32,
            temperatureCelsius: 38.2,
            mucousMembranes: 'Muito secas e pálidas, CRT = 2.5s',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'Filhote ingeriu restos de comida gordurosa e ossos há 24 horas. Apresenta mais de 8 episódios de vômitos gástricos com bile e diarreia fétida amarelada. Encontra-se apático, com turgor cutâneo persistente por 3 segundos (desidratação estimada em 8%).',
          exams: [
            {
              category: 'laboratorial',
              title: 'Eletrólitos Séricos, Gasometria Venosa e Função Renal',
              findings: 'Painel revelando hipocalemia moderada com hipoperfusão tecidual e azotemia pré-renal.',
              abnormalValues: [
                { parameter: 'Potássio Sérico (K+)', value: '2.7 mEq/L (Hipocalemia)', reference: '3.5 - 5.5 mEq/L', status: 'critical' },
                { parameter: 'Cloreto Sérico (Cl-)', value: '92 mEq/L (Hipoclorêmica)', reference: '105 - 115 mEq/L', status: 'critical' },
                { parameter: 'Hematócrito', value: '54% (Hemoconcentração)', reference: '37 - 55%', status: 'high' },
                { parameter: 'Proteína Plasmática Total', value: '8.4 g/dL', reference: '5.5 - 7.5 g/dL', status: 'high' },
                { parameter: 'Densidade Urinária', value: '1.048 (Rim concentrando adequadamente)', reference: '> 1.030', status: 'normal' }
              ]
            }
          ],
          challengePrompt: 'Pipoca apresenta desidratação de 8% com hipocalemia sintomática e risco de íleo paralítico por falta de potássio. Qual a prescrição de fluidos e protocolo de antiemético recomendada?',
          decisionOptions: [
            {
              id: 'opt_dec_sa1_1',
              label: 'Ressuscitação e reidratação com Ringer Lactato suplementado com KCl (30 mEq/L de solução), infundido respeitando a taxa máxima de 0.4 mEq/kg/h + Antagonista do receptor NK-1 Maropitant (1 mg/kg SC q24h) + Jejum alimentar transitório de 6h seguido de dieta pastosa hiperdigerível',
              description: 'O Ringer Lactato restaura o volume extracelular, a reposição segura de potássio previne arritmias e restaura a motilidade entérica, e o maropitant cessa a emese central e periférica.',
              isOptimal: true,
              consequenceText: 'Excelente conduta médica! A taxa de reposição calculada respeita os limites fisiológicos, prevenindo complicações iatrogênicas. O Maropitant atua no centro do vômito e na substância P, controlando com eficácia a emese sem acelerar o peristaltismo de forma intempestiva se houvesse corpo estranho.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Hidratação equilibrada com reposição controlada de potássio e controle emético via Maropitant',
                mechanism: 'Restauração do volume circulante efetivo e normalização do potencial transmembrana celular',
                effect: 'Normalização do turgor cutâneo, recuperação do potássio sérico para 4.1 mEq/L e cessação dos vômitos',
                clinicalMeaning: 'Recuperação completa do filhote com alta hospitalar em 24 horas'
              }
            },
            {
              id: 'opt_dec_sa1_2',
              label: 'Administrar injeção de Cloreto de Potássio concentrado puro diretamente na veia em bolus rápido para corrigir a hipocalemia imediatamente',
              description: 'Administração de KCl não diluído em bolus venoso.',
              isOptimal: false,
              consequenceText: 'Erro médico instantaneamente letal! A injeção de KCl concentrado puro em bolus IV causa fibrilação ventricular e assistolia fulminante em segundos. O potássio SEMPRE deve ser diluído em fluidos e correr em taxa máxima de 0.5 mEq/kg/h.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Injeção de KCl concentrado em bolus intravenoso',
                mechanism: 'Abolição imediata do gradiente elétrico de repouso dos cardiomiócitos',
                effect: 'Parada cardiorrespiratória irreversível em diástole',
                clinicalMeaning: 'Óbito iatrogênico imediato na mesa de atendimento'
              }
            },
            {
              id: 'opt_dec_sa1_3',
              label: 'Prescrever Metoclopramida em alta dose contínua sem realizar palpação ou radiografia prévia para pesquisar corpo estranho',
              description: 'Uso de pró-cinético em paciente com suspeita de obstrução mecânica por ossos.',
              isOptimal: false,
              consequenceText: 'Conduta contraindicada e perigosa! Se houver um fragmento de osso impactado no piloro ou duodeno, a metoclopramida aumentará as contrações gástricas contra a obstrução, podendo causar necrose de parede e perfuração gastrointestinal com peritonite séptica.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de procinético em abdômen agudo com ingestão de corpo estranho não descartado',
                mechanism: 'Hipermotilidade contra estenose física obstrutiva',
                effect: 'Isquemia de mucosa gástrica e risco de perfuração visceral',
                clinicalMeaning: 'Agravamento do quadro para peritonite séptica'
              }
            }
          ],
          learningTakeaways: [
            'O déficit de hidratação em mL é calculado multiplicando a % de desidratação pelo peso em kg e por 1000.',
            'A velocidade de infusão intravenosa de potássio nunca deve exceder 0.5 mEq/kg/hora para evitar parada cardíaca.',
            'O maropitant é o antiemético de primeira escolha em gastroenterites agudas por atuar centralmente sem efeito pró-cinético obstrutivo.'
          ]
        }
      },
      {
        id: 'sec_small_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Desidratação e Reposição Eletrolítica',
        exerciseId: 'ex_small_anim_01'
      }
    ]
  },
  {
    id: 'lesson_small_02_iris_ckd_staging',
    moduleId: 'mod_small_animals_clinic',
    title: 'Doença Renal Crônica: Estadiamento IRIS & Terapias Renoprotetoras',
    shortDescription: 'Teoria do néfron intacto, SDMA vs. creatinina, controle de proteinúria (RPCU), hiperfosfatemia e hipertensão intraglomerular.',
    estimatedMinutes: 16,
    order: 2,
    concepts: ['concept_small_animals_iris_ckd'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_small_th2',
        type: 'theory',
        title: 'A Teoria do Néfron Intacto & Diretrizes IRIS 2023',
        contentMarkdown: `# Aula Universitária: Doença Renal Crônica (DRC) em Cães e Gatos & Diretrizes IRIS

> 📖 Referência Canônica: International Renal Interest Society (IRIS) — *Staging of CKD in Dogs and Cats (2023 Guidelines)*. Polzin, D. J. *Chronic Kidney Disease in Dogs and Cats*. Vet Clin North Am Small Anim Pract; Nelson, R. W.; Couto, C. G. *Medicina Interna de Pequenos Animais*, 5ª ed. Elsevier.

### A Teoria do Néfron Intacto e a Espiral de Autodestruição Renal

Quando néfrons são destruídos por glomerulonefrites, nefrites túbulo-intersticiais crônicas ou isquemia, os néfrons remanescentes sobreviventes sofrem **hipertrofia e hiperfiltração compensatória**:
1. Para manter a depuração metabólica, a arteríola eferente sofre vasoconstrição mediada por Angiotensina II, elevando a **pressão capilar intraglomerular**.
2. A pressão hidrostática excessiva estira e rompe os pedicelos dos podócitos, provocando extravasamento de macromoléculas de albumina para o filtrado tubular (**Proteinúria Renal**).
3. A reabsorção de proteínas pelas células dos túbulos proximais deflagra liberação de citocinas pró-inflamatórias (TGF-$\beta$), que culminam em **fibrose intersticial irreversível** e morte de novos néfrons, realimentando um ciclo vicioso de deterioração renal.

---

### Estadiamento IRIS da DRC (Valores Estáveis em Jejum)

| Estágio IRIS | Creatinina Canina (mg/dL) | Creatinina Felina (mg/dL) | SDMA Sérico (ug/dL) | Condição Funcional da TFG |
| :--- | :--- | :--- | :--- | :--- |
| **Estágio 1** | $< 1.4$ | $< 1.6$ | $< 18$ | Não-azotêmico; lesão renal inicial presente (perda de densidade urinária, proteinúria ou rins policísticos) |
| **Estágio 2** | $1.4 - 2.8$ | $1.6 - 2.8$ | $18 - 25$ | Azotemia renal leve; sintomas clínicos iniciais (poliúria/polidipsia compensatória) |
| **Estágio 3** | $2.9 - 5.0$ | $2.9 - 5.0$ | $26 - 38$ | Azotemia moderada; uremia clínica evidente, perda ponderal, anemia arregenerativa |
| **Estágio 4** | $> 5.0$ | $> 5.0$ | $> 38$ | Azotemia severa terminal; risco iminente de crise urêmica fatal e hipercalemia |

**Subestadiamentos Obrigatórios:**
1. **Proteinúria (Relação Proteína:Creatinina Urinária - RPCU):**
   - Felinos: $< 0.2$ (Não-proteinúrico); $0.2 - 0.4$ (Limítrofe); $> 0.4$ (Proteinúrico).
   - Caninos: $< 0.2$ (Não-proteinúrico); $0.2 - 0.5$ (Limítrofe); $> 0.5$ (Proteinúrico).
2. **Pressão Arterial Sistólica (PAS):**
   - $< 140\text{ mmHg}$ (Normotenso / Risco mínimo); $140-159$ (Pré-hipertenso); $160-179$ (Hipertenso); $≥ 180\text{ mmHg}$ (Severamente hipertenso / Risco iminente de lesão em órgãos-alvo: descolamento de retina e AVC).

\`\`\`mermaid
flowchart TD
    LesaoRenal[Lesão Renal Inicial Crônica] --> PerdaNefrons[Perda Progressiva de Néfrons Funcionais]
    PerdaNefrons --> SRAA[Ativação Renal do SRAA: Angiotensina II Elevada]
    SRAA --> HipertensaoGlomerular[Constrição da Arteríola Eferente: Hipertensão Intraglomerular]
    HipertensaoGlomerular --> Proteinuria[Ruptura de Podócitos: Proteinúria RPCU > 0.4]
    Proteinuria --> InflamacaoTubular[Reabsorção Tubular de Albumina: Fibrose Intersticial TGF-beta]
    InflamacaoTubular --> PerdaNefrons
    PerdaNefrons --> Hiperfosfatemia[Retenção de Fósforo Sérico: Hiperparatireoidismo Secundário Renal]
    Hiperfosfatemia --> Calcificacao[Calcificação Metastática de Tecidos Moles e Rins]
\`\`\``
      },
      {
        id: 'sec_small_lab2',
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
              id: 'opt_dec_sa2_1',
              label: 'Dieta renal com quelante entérico de fósforo (Carbonato de Lantânio/Quitosana) + Telmisartana oral (BRA) + Amlodipina se PAS > 160 mmHg + Fluidoterapia SC periódica',
              description: 'Quelar fósforo da refeição, reduzir pressão intraglomerular e proteinúria com bloqueador de receptor de angiotensina e controlar a hipertensão sistêmica.',
              isOptimal: true,
              consequenceText: 'Conduta médica de altíssima precisão nefrológica! A telmisartana controla tanto a proteinúria glomerular quanto a hipertensão renal. A restrição de fósforo evita a osteodistrofia fibrosa e retarda a perda de néfrons, dobrando a expectativa de vida do felino com excelente qualidade.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Uso de telmisartana, quelante de fósforo e dieta renal específica',
                mechanism: 'Bloqueio seletivo do receptor AT1 da angiotensina II e redução do produto cálcio x fósforo sérico',
                effect: 'Queda da proteinúria para RPCU < 0.20 e estabilização da pressão arterial sistólica < 140 mmHg',
                clinicalMeaning: 'Interrupção da espiral de dano renal e preservação funcional a longo prazo'
              }
            },
            {
              id: 'opt_dec_sa2_2',
              label: 'Prescrever anti-inflamatório meloxicam para a dor lombar renal e incentivar ingestão de carne vermelha crua',
              description: 'Conduta negligente contraindicada que agrava o dano renal.',
              isOptimal: false,
              consequenceText: 'Erro letal! O meloxicam bloqueia prostaglandinas vasodilatadoras renais, levando a isquemia renal aguda imediata. A carne crua fornece sobrecarga de fósforo e proteína que acelera o hiperparatireoidismo e a uremia terminal.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de AINE e sobrecarga de proteína/fósforo em DRC avançada',
                mechanism: 'Vasoconstrição da arteríola aferente e calcificação metastática renal',
                effect: 'Queda catastrófica da taxa de filtração glomerular com anúria urêmica',
                clinicalMeaning: 'Óbito por uremia terminal e hipercalemia em poucos dias'
              }
            },
            {
              id: 'opt_dec_sa2_3',
              label: 'Administrar apenas antibiótico oral sem alterar dieta ou monitorar pressão arterial',
              description: 'Abordagem passiva que ignora os fatores modificadores de progressão da DRC.',
              isOptimal: false,
              consequenceText: 'Inadequado. A DRC não é uma doença bacteriana primária na maioria dos casos; ignorar a proteinúria e a hipertensão severa causará perda visual e lesão renal progressiva acelerada.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Omissão no controle dos fatores de progressão renal (hipertensão e proteinúria)',
                mechanism: 'Lesão endotelial sistêmica contínua pela hipertensão severa',
                effect: 'Descolamento agudo de retina com cegueira súbita e falência renal',
                clinicalMeaning: 'Perda irreversível da visão e progressão rápida para Estágio 4'
              }
            }
          ],
          learningTakeaways: [
            'O estadiamento IRIS define o estágio funcional pela creatinina sérica estável e SDMA em animal hidratado.',
            'O subestadiamento de proteinúria (RPCU) e hipertensão sistêmica (PAS) é essencial porque ambos são fatores diretos de destruição de néfrons.',
            'O controle da hiperfosfatemia é a medida isolada com maior impacto na sobrevida de cães e gatos com DRC.'
          ]
        }
      },
      {
        id: 'sec_small_ex2',
        type: 'exercise',
        title: 'Exercício Clínico: Estadiamento IRIS e Renoproteção',
        exerciseId: 'ex_small_anim_02'
      }
    ]
  },
  {
    id: 'lesson_small_03_cushing_addison',
    moduleId: 'mod_small_animals_clinic',
    title: 'Endocrinopatias Adrenais: Cushing (HAC) vs. Addison (Crise Adrenal)',
    shortDescription: 'Diagnóstico e diferenciação hormonal: Teste de Supressão com Dexametasona, relação Na:K na crise addisoniana e terapia com Trilostano/DOCP.',
    estimatedMinutes: 16,
    order: 3,
    concepts: ['concept_small_animals_cushing_addison'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_small_th3',
        type: 'theory',
        title: 'A Fisiopatologia Comparativa do Córtex Adrenal',
        contentMarkdown: `# Aula Universitária: Endocrinopatias Adrenais em Pequenos Animais

> 📖 Referência Canônica: Feldman, E. C.; Nelson, R. W.; Reusch, C.; Scott-Moncrieff, J. C. *Canine and Feline Endocrinology*, 4th ed. Saunders; Ettinger, S. J.; Feldman, E. C. *Tratado de Medicina Interna Veterinária*, 8ª ed.

### O Eixo Hipotálamo-Hipófise-Adrenal (HHA) e as Zonas da Adrenal

O córtex adrenal é dividido em três camadas especializadas:
1. **Zona Glomerulosa (Externa):** Produz **Mineralocorticoides (Aldosterona)** sob regulação primária do sistema renina-angiotensina e do potássio sérico. Promove reabsorção de $Na^+$ e água e excreção tubular de $K^+$ e $H^+$.
2. **Zona Fasciculada (Média):** Produz **Glicocorticoides (Cortisol)** sob controle exclusivo do ACTH hipofisário. Regula gliconeogênese, lipólise, resposta ao estresse e tono vascular.
3. **Zona Reticular (Interna):** Produz hormônios sexuais (androgênios e progestinas).

---

### Hiperadrenocorticismo (Síndrome de Cushing)

- **Etiologia:** 85% dependente da hipófise (adenoma hipofisário secretor de ACTH); 15% tumor adrenal primário autônomo secretor de cortisol.
- **Sinais Clínicos Clássicos:** Poliúria e polidipsia (o cortisol inibe a ação do ADH nos túbulos coletores renais), polifagia, alopecia endócrina bilateral e simétrica poupando cabeça e extremidades, atrofia muscular e abdômen pendular ("em barriga de pote" por fraqueza dos retos abdominais e hepatomegalia por esteatose glicogênica).
- **Testes Diagnósticos de Eleição:**
  - **Teste de Supressão com Dexametasona em Baixa Dose (LDDST):** Administra-se $0.01\text{ mg/kg}$ de dexametasona IV. Coleta-se cortisol às 0h, 4h e 8h. Cães normais suprimem o cortisol para $< 1.0\text{ ug/dL}$ às 8h. No HAC hipofisário, pode haver supressão transitória às 4h com escape às 8h; no tumor adrenal, não há supressão em nenhum momento.
- **Tratamento Médico:** **Trilostano** (inibidor competitivo reversível da enzima $3\beta$-hidroxiesteroide desidrogenase), bloqueando a síntese hormonal do cortisol.

---

### Hipoadrenocorticismo (Doença de Addison / "O Grande Imitador")

- **Fisiopatologia da Crise Addisoniana:** Destruição imunomediada de todas as camadas do córtex adrenal. A perda simultânea de aldosterona e cortisol desencadeia uma catástrofe eletrolítica e hemodinâmica:
  - Perda renal de sódio com hiponatremia severa ($Na^+ < 130\text{ mEq/L}$) e incapacidade de excretar potássio, gerando **Hipercalemia Crítica ($K^+ > 7.0-8.5\text{ mEq/L}$)**.
  - **Razão Sódio:Potássio ($Na^+/K^+$):** Em animais normais, a razão é de $27:1$ a $40:1$. Valores **inferiores a $27:1$** (e especialmente $< 20:1$) são altamente sugestivos de hipoadrenocorticismo.
  - **Alterações Eletrocardiográficas da Hipercalemia:** A hipercalemia despolariza a membrana celular em repouso dos cardiomiócitos. Sucessivamente observa-se:
    1. Ondas T altas, estreitas e apiculadas ("em tenda").
    2. Prolongamento do intervalo P-R e achatamento da onda P.
    3. Perda completa da onda P (ritmo sino-ventricular de parada atrial).
    4. Alargamento do complexo QRS e bradicardia sinusal paradoxal diante de choque hipovolêmico!

\`\`\`mermaid
flowchart TD
    DestruicaoAdrenal[Destruição Imunomediada do Córtex Adrenal] --> FaltaAldosterona[Deficiência Absoluta de Aldosterona]
    DestruicaoAdrenal --> FaltaCortisol[Deficiência de Cortisol: Hipoglicemia e Vasoplegia]
    FaltaAldosterona --> PerdaSodio[Perda Renal de Sódio e Água: Hiponatremia e Hipovolemia]
    FaltaAldosterona --> RetencaoPotassio[Retenção Renal Severa de Potássio: Hipercalemia K+ > 7.5 mEq/L]
    PerdaSodio & RetencaoPotassio --> RazaoNaK[Razão Na:K < 20:1 Patognomônica]
    RetencaoPotassio --> ECG[Cardiotoxicidade: Perda de Onda P, Bradicardia e Onda T em Tenda]
    PerdaSodio & FaltaCortisol --> ChoqueAddison[Crise Addisoniana: Choque Hipovolêmico Refratário]
\`\`\``
      },
      {
        id: 'sec_small_lab3',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Maya (Poodle)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo de Emergência da Crise Addisoniana com Hipercalemia Cardiotóxica',
          patient: {
            name: 'Maya',
            species: 'Canino',
            breed: 'Poodle Toy',
            age: '4 anos',
            weightKg: 5.0,
            habitatOrEnvironment: 'Casa interna'
          },
          vitals: {
            heartRateBpm: 52,
            respiratoryRateRpm: 20,
            temperatureCelsius: 36.1,
            mucousMembranes: 'Muito pálidas, tempo de preenchimento capilar > 3.0s',
            capillaryRefillTimeSec: 3.5
          },
          anamnesis: 'Cadela jovem começou com episódios intermitentes de diarreia mucoide, vômitos e tremores musculares há 2 semanas. Hoje desmaiou subitamente em decúbito lateral após retornar do banho e tosa. Encontra-se em colapso vascular profundo, hipotérmica e com pulso arterial extremamente fraco e filiforme, mas surpreendentemente bradicárdica!',
          exams: [
            {
              category: 'laboratorial',
              title: 'Eletrólitos Séricos, Gasometria e Eletrocardiograma (ECG)',
              findings: 'Colapso eletrolítico e ritmo de parada atrial por hipercalemia severa.',
              abnormalValues: [
                { parameter: 'Potássio Sérico (K+)', value: '8.4 mEq/L (Hipercalemia severa)', reference: '3.5 - 5.5 mEq/L', status: 'critical' },
                { parameter: 'Sódio Sérico (Na+)', value: '124 mEq/L (Hiponatremia severa)', reference: '140 - 152 mEq/L', status: 'critical' },
                { parameter: 'Razão Sódio:Potássio (Na:K)', value: '14.7:1 (Criticamente diminuída)', reference: '27:1 a 40:1', status: 'critical' },
                { parameter: 'ECG', value: 'Ausência total de onda P, complexos QRS alargados e ondas T gigantes apiculadas', reference: 'Ritmo sinusal normal com onda P positiva', status: 'critical' },
                { parameter: 'Glicemia', value: '55 mg/dL (Hipoglicemia)', reference: '70 - 110 mg/dL', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Maya está em parada atrial por hiperpotassemia severa decorrente de Crise Addisoniana. Qual é a sequência farmacológica imediata de resgate miocárdico e reposição hormonal?',
          decisionOptions: [
            {
              id: 'opt_dec_sa3_1',
              label: 'Gluconato de Cálcio 10% IV lento (0.5 a 1.0 mL/kg em 10-15 min sob ECG) para estabilização da membrana cardíaca + Expansão rápida com NaCl 0.9% (isento de potássio) + Dexametasona IV imediata (0.2 mg/kg) + Coleta de sangue para teste de estimulação com ACTH',
              description: 'O cálcio antagoniza imediatamente a cardiotoxicidade do potássio sem alterar sua concentração sérica, o soro fisiológico restaura o sódio e a volemia, e a dexametasona trata a insuficiência adrenal sem interferir no teste de cortisol.',
              isOptimal: true,
              consequenceText: 'Conduta impecável e salvadora de vidas! O gluconato de cálcio restabelece o gradiente de limiar do potencial de ação no miocárdio em menos de 5 minutos, revertendo a bradicardia e reaparecendo a onda P no ECG. A escolha da Dexametasona permite diagnosticar formalmente o Addison no laboratório enquanto a vida da cadela é preservada.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Uso de gluconato de cálcio sob monitorização de ECG associado à hidratação com NaCl 0.9% e dexametasona',
                mechanism: 'Estabilização eletrofisiológica miocárdica e expansão da volemia com reposição glicocorticoide',
                effect: 'Reversão da bradicardia (FC subindo para 110 bpm), restauração da onda P e normalização da pressão arterial',
                clinicalMeaning: 'Reversão completa da crise addisoniana de emergência'
              }
            },
            {
              id: 'opt_dec_sa3_2',
              label: 'Administrar solução de Ringer Lactato com Cloreto de Potássio e aplicar Atropina em alta dose para aumentar os batimentos',
              description: 'Administrar fluido contendo potássio e atropina em hipercalemia grave.',
              isOptimal: false,
              consequenceText: 'Erro médico letal! A bradicardia não decorre de hipertonia vagal, mas de paralisia dos canais elétricos cardíacos por excesso de potássio. A atropina é ineficaz e adicionar qualquer potássio adicional levará a assistolia imediata.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de atropina e fluidos com potássio em bloqueio de condução hipercalêmico',
                mechanism: 'Agravamento do bloqueio miocárdico refratário a estimulação vagolítica',
                effect: 'Assistolia ventricular fulminante',
                clinicalMeaning: 'Óbito instantâneo por parada cardíaca irreversível'
              }
            },
            {
              id: 'opt_dec_sa3_3',
              label: 'Tratar como epilepsia idiopática administrando fenobarbital e diazepam em bolus',
              description: 'Interpretar o colapso como crise epiléptica primária ignorando o ionograma.',
              isOptimal: false,
              consequenceText: 'Erro diagnóstico grave! Os anticonvulsivantes deprimem ainda mais a hemodinâmica e Maya morrerá por choque hipovolêmico e parada cardíaca em menos de 1 hora.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Sedação com anticonvulsivante em paciente em choque hipoadrenocortical',
                mechanism: 'Depressão cardiovascular e piora da hipotensão e hipoxemia',
                effect: 'Colapso hemodinâmico terminal',
                clinicalMeaning: 'Parada cardiorrespiratória em poucos minutos'
              }
            }
          ],
          learningTakeaways: [
            'A razão Na:K < 27:1 (e especialmente < 20:1) é o achado laboratorial clássico do hipoadrenocorticismo.',
            'O Gluconato de Cálcio a 10% IV é o cardioprotetor de emergência na hipercalemia com alterações de ECG.',
            'A Dexametasona é o único glicocorticoide que não sofre reação cruzada com os testes imunológicos de dosagem de cortisol sérico.'
          ]
        }
      },
      {
        id: 'sec_small_ex3',
        type: 'exercise',
        title: 'Exercício Clínico: Endocrinopatias Adrenais e Crise Addisoniana',
        exerciseId: 'ex_small_anim_03'
      }
    ]
  },
  {
    id: 'lesson_small_04_diabetic_ketoacidosis',
    moduleId: 'mod_small_animals_clinic',
    title: 'Cetoacidose Diabética (CAD) & Manejo Insulínico Intensivo',
    shortDescription: 'A cascata bioquímica da cetogênese desgovernada, diurese osmótica, protocolo de infusão de insulina regular e reposição de potássio/fósforo.',
    estimatedMinutes: 16,
    order: 4,
    concepts: ['concept_small_animals_diabetic_ketoacidosis'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_small_th4',
        type: 'theory',
        title: 'Bioquímica da Cetogênese e o Protocolo de Resgate na CAD',
        contentMarkdown: `# Aula Universitária: Cetoacidose Diabética (CAD) em Pequenos Animais

> 📖 Referência Canônica: Nelson, R. W.; Couto, C. G. *Small Animal Internal Medicine*, 6th ed. Elsevier, Cap. 48: Disorders of the Endocrine Pancreas; Ettinger, S. J.; Feldman, E. C. *Tratado de Medicina Interna Veterinária*.

### A Fisiopatologia da Descompensação Cetósica

A CAD desenvolve-se quando a **deficiência absoluta ou relativa de insulina** é exacerbada por uma elevação crítica dos **hormônios contra-reguladores** (glucagon, cortisol, epinefrina e GH), tipicamente desencadeada por processos concomitantes (pancreatite aguda, infecção do trato urinário, piometra ou hiperadrenocorticismo):

1. **A Explosão da Lipólise:**
   - A ausência de insulina desinibe a **Lipase Hormônio-Sensível** nos adipócitos, liberando quantidades colossais de Ácidos Graxos Livres (AGL) e glicerol no plasma.
   - No fígado, a queda da concentração de malonil-CoA ativa a enzima **Carnitina Palmitoiltransferase-1 (CPT-1)**, que internaliza os AGLs para a matriz mitocondrial.
   - A $\beta$-oxidação massiva gera um excesso de Acetil-CoA que sobrecarrega o Ciclo de Krebs. O excesso de Acetil-CoA é então desviado para a síntese dos três corpos cetônicos: **Acetoacetato**, **$\beta$-Hidroxibutirato** e **Acetona**.

2. **Acidose Metabólica com Ânion Gap Aumentado e Diurese Osmótica:**
   - O acetoacetato e o $\beta$-hidroxibutirato são ácidos fortes que se dissociam completamente em pH fisiológico, consumindo o bicarbonato sérico e gerando acidose severa ($pH < 7.15$, $HCO_3^- < 12\text{ mEq/L}$).
   - A glicosúria maciça (excedendo o limiar renal de $180\text{ mg/dL}$ em cães e $280\text{ mg/dL}$ em gatos) causa **diurese osmótica obrigatória**, com espoliação severa de água livre, sódio, potássio, fósforo e magnésio.

---

### Protocolo Hospitalar de Insulina Regular e Prevenção da Hipofosfatemia

| Etapa do Manejo | Ação Clínica Prioritária | Justificativa Fisiopatológica |
| :--- | :--- | :--- |
| **Horas 0 a 2** | **Fluidoterapia Exclusiva** (Ringer Lactato ou NaCl 0.9%) | Restaura volemia e TFG; reduz a glicemia em 20-30% apenas por filtração renal |
| **Hora 2 em diante** | Início de **Insulina Regular** ($0.05-0.1\text{ UI/kg/h}$ IV contínua ou IM) | Supressão da lipólise e cetogênese hepática; queda gradual da glicemia ($50-75\text{ mg/dL/h}$) |
| **Monitorização de Fósforo** | Suplementação profilática de **Fosfato de Potássio** | A insulina joga fósforo para dentro das células; hipofosfatemia ($< 1.5\text{ mg/dL}$) causa **hemólise intravascular aguda fatal** |
| **Glicemia $≤ 250\text{ mg/dL}$** | Adicionar **Glicose 5%** ao fluido de infusão | Permite manter a infusão de insulina regular para queimar os corpos cetônicos sem causar hipoglicemia |

\`\`\`mermaid
flowchart TD
    DeficienciaInsulina[Deficiência de Insulina + Pico de Glucagon / Cortisol] --> Lipolise[Desinibição da Lipase Adiposa: Influxo Maciço de AGLs]
    Lipolise --> CPT1[Ativação Hepática de CPT-1 Mitocondrial]
    CPT1 --> Cetogenese[Síntese Maciça de Acetoacetato e beta-Hidroxibutirato]
    Cetogenese --> AcidoseAnionGap[Acidose Metabólica com Ânion Gap Elevado: pH < 7.15]
    DeficienciaInsulina --> Glicosuria[Glicosúria Maciça: Diurese Osmótica Intensa]
    Glicosuria --> Desidratacao[Desidratação Severa + Depleção Corporal Total de K+ e Fósforo]
    AcidoseAnionGap & Desidratacao --> CAD[Cetoacidose Diabética Descompensada]
    CAD --> InsulinaTerapia[Insulina Regular em Baixas Doses + Reposição Obrigatória de K+ e Fósforo]
\`\`\``
      },
      {
        id: 'sec_small_lab4',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Toby (Pinscher)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Intensivo de Cetoacidose Diabética com Hipofosfatemia Iminente',
          patient: {
            name: 'Toby',
            species: 'Canino',
            breed: 'Pinscher Miniatura',
            age: '9 anos',
            weightKg: 5.2,
            habitatOrEnvironment: 'Casa interna'
          },
          vitals: {
            heartRateBpm: 150,
            respiratoryRateRpm: 48,
            temperatureCelsius: 37.8,
            mucousMembranes: 'Secas e avermelhadas, hálito com odor frutado de acetona',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Cão diabético em uso irregular de insulina NPH. Há 48 horas parou de comer, começou com vômitos frequentes e respiração profunda e laboriosa (padrão de Kussmaul). Encontra-se desidratado (8%) e prostrado.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Glicemia, Gasometria Arterial, Eletrólitos e Urinálise',
              findings: 'Critérios diagnósticos completos de Cetoacidose Diabética descompensada.',
              abnormalValues: [
                { parameter: 'Glicemia Sérica', value: '480 mg/dL', reference: '70 - 110 mg/dL', status: 'critical' },
                { parameter: 'Cetonúria (Fita Reativa)', value: '++++ (Acetoacetato maciço)', reference: 'Ausente', status: 'critical' },
                { parameter: 'pH Sanguíneo Venoso', value: '7.12', reference: '7.35 - 7.45', status: 'critical' },
                { parameter: 'Bicarbonato (HCO3-)', value: '11.0 mEq/L', reference: '18 - 24 mEq/L', status: 'critical' },
                { parameter: 'Potássio Sérico', value: '3.6 mEq/L (Normal-baixo antes da insulina)', reference: '3.5 - 5.5 mEq/L', status: 'normal' },
                { parameter: 'Fósforo Sérico', value: '2.1 mg/dL (Próximo ao limiar crítico)', reference: '2.5 - 5.5 mg/dL', status: 'low' }
              ]
            }
          ],
          challengePrompt: 'Toby apresenta CAD com acidose severa e fósforo limítrofe. Qual é a estratégia de ressuscitação e insulinoterapia recomendada nas primeiras horas?',
          decisionOptions: [
            {
              id: 'opt_dec_sa4_1',
              label: 'Hidratação com Ringer Lactato durante as primeiras 2 horas sem insulina + Iniciar infusão contínua de Insulina Regular (0.08 UI/kg/h) na 2ª hora + Suplementação profilática mista de KCl e Fosfato de Potássio no fluido + Adicionar Glicose a 5% quando a glicemia cair para 250 mg/dL',
              description: 'A expansão volêmica prévia restaura a circulação e sensibilidade insulínica, a taxa controlada evita edema cerebral, o fosfato de potássio previne anemia hemolítica aguda e a glicose permite manter a insulina ligada até negativação dos corpos cetônicos.',
              isOptimal: true,
              consequenceText: 'Conduta exemplar de terapia intensiva endócrina! Adiar a insulina por 2 horas reduz a glicemia de forma segura por perfusão renal e previne o colapso vascular súbito pelo influxo de água para as células. A reposição de fosfato evitou a lise eritrocitária letal.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Expansão volêmica inicial seguida de infusão controlada de insulina regular com fosfato de potássio',
                mechanism: 'Bloqueio da lipólise e cetogênese com preservação dos níveis de ATP intracelular eritrocitário',
                effect: 'Queda gradual da glicemia a 60 mg/dL/h, resolução da acidose metabólica e ausência de hemólise',
                clinicalMeaning: 'Reversão completa da CAD com transição segura para insulina basal em 48h'
              }
            },
            {
              id: 'opt_dec_sa4_2',
              label: 'Administrar bolus maciço de Insulina NPH subcutânea (1.5 UI/kg) imediatamente para zerar a glicemia na primeira hora',
              description: 'Uso de insulina lenta em alta dose na emergência da CAD.',
              isOptimal: false,
              consequenceText: 'Erro perigoso! A insulina NPH tem absorção imprevisível e retardada em animais desidratados com vasoconstrição subcutânea. Além disso, tentar derrubar a glicemia bruscamente provoca edema cerebral hipertensivo agudo e hipocalemia letal.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso indevido de insulina de depósito em paciente hipovolêmico',
                mechanism: 'Absorção retardada maciça com hipoglicemia intratável tardia',
                effect: 'Queda desgovernada de potássio e edema cerebral osmótico',
                clinicalMeaning: 'Coma hipoglicêmico irreversível e óbito'
              }
            },
            {
              id: 'opt_dec_sa4_3',
              label: 'Suspender todos os fluidos intravenosos para não agravar a poliúria osmótica e prescrever apenas água via oral',
              description: 'Restrição hídrica em paciente com diurese osmótica severa.',
              isOptimal: false,
              consequenceText: 'Conduta desastrosa! Sem reposição venosa de fluidos, o paciente entrará em choque hipovolêmico anúrico por falência circulatória.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Restrição hídrica em desidratação osmótica ativa',
                mechanism: 'Colapso do volume circulante efetivo',
                effect: 'Choque hipovolêmico hipoperfusivo e necrose tubular renal',
                clinicalMeaning: 'Parada cardiorrespiratória por falência circulatória'
              }
            }
          ],
          learningTakeaways: [
            'Na CAD, a fluidoterapia deve sempre preceder o início da insulina por 2 a 4 horas para restaurar a volemia e a perfusão renal.',
            'A velocidade de redução da glicemia deve ser controlada (50 a 75 mg/dL/h) para evitar o edema cerebral osmótico.',
            'A hipofosfatemia severa induzida pela entrada celular de glicose pode causar hemólise intravascular aguda fatal.'
          ]
        }
      },
      {
        id: 'sec_small_ex4',
        type: 'exercise',
        title: 'Exercício Clínico: Cetoacidose Diabética e Insulina Regular',
        exerciseId: 'ex_small_anim_04'
      }
    ]
  },
  {
    id: 'lesson_small_05_hepatopathies_shunts',
    moduleId: 'mod_small_animals_clinic',
    title: 'Hepatopatias Inflamatórias, Lipidose & Shunt Portossistêmico',
    shortDescription: 'Colangite felina e tríade felina, lipidose hepática e manejo de shunts congênitos (EHPSS vs. IHPSS) e encefalopatia hepática.',
    estimatedMinutes: 16,
    order: 5,
    concepts: ['concept_small_animals_hepatopathies_shunts'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_small_th5',
        type: 'theory',
        title: 'Fisiopatologia Hepatobiliar, Tríade Felina e Shunts Vasculares',
        contentMarkdown: `# Aula Universitária: Hepatopatias Inflamatórias, Lipidose e Shunts Portossistêmicos

> 📖 Referência Canônica: Center, S. A. *Diseases of the Gallbladder and Biliary Tree*. In: Ettinger & Feldman, Textbook of Vet. Internal Medicine; WSAVA Liver Standardization Group Guidelines; Tobias, K. M. *Portosystemic Shunts*.

### A Anatomia Específica Felina e a "Tríade Felina"

Em gatos, o ducto pancreático principal funde-se intimamente com o ducto colédoco comum antes de penetrar no duodeno na papila duodenal maior:
- Como os gatos possuem concentração bacteriana entérica duodenal muito mais alta que os cães, qualquer episódio de vômito crônico ou doença inflamatória intestinal (DII) permite a translocação retrógrada de bactérias entéricas (*E. coli*, *Enterococcus*) pelo esfíncter compartilhado.
- Isso desencadeia a simultaneidade patológica conhecida como **Tríade Felina**:
  $$\text{Colangite Neutrofílica Aguda} + \text{Pancreatite Felina} + \text{Doença Inflamatória Intestinal (DII)}$$

---

### Lipidose Hepática Felina Idiopática (Esteatose Hepática)

Ocorre em gatos com sobrepeso ou obesos submetidos a um período de **anorexia aguda ($> 48-72\text{ horas}$)** desencadeada por estresse, mudança de dieta ou doença dolorosa:
1. A lipólise periférica desgovernada envia centenas de gramas de ácidos graxos ao fígado.
2. Os hepatócitos felinos têm capacidade limitada de sintetizar a apolipoproteína B necessária para empacotar triglicerídeos em lipoproteínas de densidade muito baixa (VLDL) para exportação.
3. Os triglicerídeos acumulam-se no citoplasma dos hepatócitos, causando tumefação celular gordurosa monstruosa e compressão extrínseca dos canalículos biliares (**Colestase Intra-hepática Severa**).
4. **Padrão Laboratorial Clássico:** Marcada elevação da Fosfatase Alcalina (FA, frequentemente $> 1000\text{ U/L}$) com GGT normal ou apenas discretamente elevada, associada a hiperbilirrubinemia e coagulopatia por deficiência de vitamina K.
5. **Tratamento Primordial:** Colocação de **Sonda Esofágica de Alimentação (Esofagostomia)** para fornecer nutrição enteral hiperproteica imediata; a anorexia continuada é invariavelmente fatal!

---

### Desvios Portossistêmicos Congênitos (Shunts)

Anomalias vasculares embriológicas que desviam o sangue venoso esplâncnico portal diretamente para a circulação venosa sistêmica (veia cava caudal ou ázigos), sem passar pelo filtro sinusoidal e de detoxificação hepática:
- **Extra-hepáticos (EHPSS):** 75% dos casos; predominam em **raças miniaturas e pequenas** (Yorkshire Terrier, Poodle Toy, Maltês, Shih-tzu, Schnauzer).
- **Intra-hepáticos (IHPSS):** 25% dos casos; predominam em **raças grandes e gigantes** (Labrador, Golden Retriever, Pastor Alemão, Boiadeiro Bernês), decorrentes da persistência do ducto venoso embrionário.
- **Fisiopatologia da Encefalopatia Hepática (EH):**
  - A amônia ($NH_3$), mercaptanos, ácidos graxos de cadeia curta e agonistas GABA endógenos absorvidos no intestino não são convertidos em ureia pelo fígado hipoplásico.
  - A amônia atravessa a barreira hematoencefálica e é convertida em glutamina nos astrócitos pela glutamina sintetase, provocando influxo osmótico de água, **edema astrocitário** e disfunção neurológica profunda.
  - **Sinais Clínicos:** Ptialismo severo (muito marcante em gatos), ataxia, letargia, amaurose (cegueira transitória), andar compulsivo em círculos e *head pressing* (pressão da cabeça contra paredes), classicamente exacerbados 1 a 2 horas após refeições proteicas.
  - **Cristalúria de Biurato de Amônio:** A alta excreção urinária de amônia e ácido úrico forma urólitos radiotransparentes de biurato de amônio ("em maçã espinhosa").

\`\`\`mermaid
flowchart TD
    ShuntVascular[Shunt Portossistêmico EHPSS / IHPSS] --> DesvioPortal[Desvio de 70-90% do Fluxo Venoso Portal da Veia Cava]
    DesvioPortal --> Microhepatia[Falta de Fatores Hepatotróficos: Microhepatia & Hipoplasia Hepática]
    DesvioPortal --> AmoniaAlta[Falha na Conversão Hepática de Amônia em Ureia]
    AmoniaAlta --> Neurotoxinas[Amônia Livre Sistêmica NH3 Atravessa Barreira Hematoencefálica]
    Neurotoxinas --> EdemaAstrocitos[Conversão em Glutamina: Edema Astrocitário Cerebral]
    EdemaAstrocitos --> Encefalopatia[Encefalopatia Hepática: Ptialismo, Head Pressing e Convulsões]
    AmoniaAlta --> CristaisBiurato[Cristalúria e Urólise Vesical por Biurato de Amônio]
    Encefalopatia --> TerapiaLactulose[Lactulose: Acidificação Colônica & Armadilha Iônica NH4+]
    ShuntVascular --> CirurgiaAmeroide[Oclusão Cirúrgica Gradual com Anel Constritor Ameroide]
\`\`\``
      },
      {
        id: 'sec_small_lab5',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Pipoca (Yorkshire)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Clínico e Cirúrgico de Shunt Portossistêmico Extra-Hepático',
          patient: {
            name: 'Pipoca',
            species: 'Canino',
            breed: 'Yorkshire Terrier',
            age: '8 meses',
            weightKg: 1.6,
            habitatOrEnvironment: 'Casa interna'
          },
          vitals: {
            heartRateBpm: 130,
            respiratoryRateRpm: 24,
            temperatureCelsius: 38.4,
            mucousMembranes: 'Rosadas a pálidas, CRT = 1.0s',
            capillaryRefillTimeSec: 1.0
          },
          anamnesis: 'Cão jovem de porte miniatura apresenta atraso acentuado de crescimento corporal em comparação com os irmãos da ninhada. Os tutores relatam que ele fica letárgico, anda cambaleando em círculos e pressiona a testa contra a parede da sala sempre cerca de 45 minutos após comer ração ou petiscos. Teve uma crise convulsiva generalizada ontem após comer um pedaço de queijo.',
          exams: [
            {
              category: 'laboratorial',
              title: 'Painel Hepático, Ácidos Biliares e Urinálise',
              findings: 'Marcada disfunção da depuração hepática com cristalúria de biurato de amônio.',
              abnormalValues: [
                { parameter: 'Ácidos Biliares Pré-Prandiais', value: '38 umol/L', reference: '< 10 umol/L', status: 'high' },
                { parameter: 'Ácidos Biliares Pós-Prandiais (2h)', value: '148 umol/L (Marcadamente elevados)', reference: '< 25 umol/L', status: 'critical' },
                { parameter: 'Amônia Plasmática de Jejum', value: '165 umol/L', reference: '15 - 60 umol/L', status: 'critical' },
                { parameter: 'Ureia Sérica', value: '12 mg/dL (Diminuída por falha do ciclo da ureia)', reference: '20 - 45 mg/dL', status: 'low' },
                { parameter: 'Sedimento Urinário', value: 'Incontáveis cristais de biurato de amônio (formato esférico espiculado castanho)', reference: 'Ausentes', status: 'critical' },
                { parameter: 'Radiografia Abdominal', value: 'Microhepatia acentuada (eixo gástrico desviado cranialmente)', reference: 'Fígado de tamanho e contorno normais', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Pipoca apresenta Shunt Portossistêmico Congênito Extra-hepático com Encefalopatia Hepática ativa. Qual é a conduta médica pré-operatória mandatória para estabilização antes da cirurgia definitiva?',
          decisionOptions: [
            {
              id: 'opt_dec_sa5_1',
              label: 'Lactulose oral (0.5 mL/kg q8h para atingir 2 a 3 fezes pastosas por dia) + Dieta balanceada com restrição proteica moderada de alta digestibilidade (proteínas lácteas e vegetais) + Metronidazol ou Amoxicilina oral + Planejamento cirúrgico de aposição de Anel Constritor Ameroide',
              description: 'A lactulose aprisiona a amônia nas fezes por acidificação (NH4+), o antibiótico reduz bactérias produtoras de urease e a dieta reduz o substrato amoniacal. O anel ameroide oclui o shunt lentamente em semanas, prevenindo hipertensão portal fatal.',
              isOptimal: true,
              consequenceText: 'Conduta padrão-ouro em medicina interna e cirurgia! A estabilização pré-operatória por 2 a 4 semanas reverte o edema cerebral astrocitário e zera o risco de convulsões pós-operatórias. O anel ameroide higroscópico oclui o vaso ao longo de 4 a 6 semanas, permitindo que a vasculatura hepática intra-hepática se desenvolva sem hipertensão portal aguda.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Uso de lactulose, dieta específica e oclusão gradual via anel constritor ameroide',
                mechanism: 'Armadilha iônica colônica de amônia e remodelamento gradual do fluxo venoso portal para os sinusoides',
                effect: 'Queda da amônia plasmática para níveis normais, desaparecimento dos sinais neurológicos e ganho de peso',
                clinicalMeaning: 'Cura definitiva do shunt com desenvolvimento e expectativa de vida normal'
              }
            },
            {
              id: 'opt_dec_sa5_2',
              label: 'Realizar ligadura cirúrgica completa imediata e abrupta do vaso anômalo com fio inabsorvível de seda sem anel gradual',
              description: 'Ocluir abruptamente o shunt em cirurgia sem graduação.',
              isOptimal: false,
              consequenceText: 'Erro cirúrgico letal! A ligadura aguda total de um shunt extra-hepático em um fígado com vasculatura intra-hepática hipoplásica causa Hipertensão Portal Aguda fulminante, levando a ascite sanguinolenta, isquemia intestinal maciça e morte na mesa cirúrgica em minutos.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Ligadura mecânica total e abrupta de shunt portossistêmico congênito',
                mechanism: 'Hipertensão venosa portal catastrófica por incapacidade de acomodação do leito sinusoidal hipoplásico',
                effect: 'Congestão esplâncnica maciça, choque e necrose intestinal',
                clinicalMeaning: 'Óbito peroperatório inevitável'
              }
            },
            {
              id: 'opt_dec_sa5_3',
              label: 'Suplementar carne bovina crua rica em ferro para acelerar o crescimento hepático do cão',
              description: 'Aumentar proteína animal na encefalopatia hepática descompensada.',
              isOptimal: false,
              consequenceText: 'Catástrofe fisiológica! A sobrecarga de carne vermelha produz enormes quantidades de amônia no cólon, deflagrando coma hepático e estado de mal epiléptico fulminante.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Sobrecarga de proteína cárnea em paciente com shunt portossistêmico',
                mechanism: 'Geração maciça de amônia pelas bactérias entéricas',
                effect: 'Hiperamonemia extrema com herniação cerebral astrocitária',
                clinicalMeaning: 'Coma e parada respiratória irreversível'
              }
            }
          ],
          learningTakeaways: [
            'A microhepatia associada a cristais de biurato de amônio em cães jovens de raças pequenas é fortemente sugestiva de shunt extra-hepático.',
            'A dosagem de ácidos biliares pré e pós-prandiais é o teste funcional de triagem mais sensível para o diagnóstico de anomalias vasculares portais.',
            'O anel constritor ameroide é a técnica de eleição porque fecha o shunt gradualmente em 4-6 semanas, prevenindo hipertensão portal fatal.'
          ]
        }
      },
      {
        id: 'sec_small_ex5',
        type: 'exercise',
        title: 'Exercício Clínico: Shunt Portossistêmico e Encefalopatia Hepática',
        exerciseId: 'ex_small_anim_05'
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
    prompt: 'Durante a avaliação clínica de um equino adulto com Síndrome Cólica aguda, qual conjunto de parâmetros semiológicos indica de forma inequívoca a transição para uma afecção isquêmica estrangulativa grave exigindo encaminhamento cirúrgico imediato para laparotomia exploratória?',
    options: [
      {
        id: 'opt_la_1',
        text: 'Frequência cardíaca persistentemente acima de 70-80 bpm, refluxo nasogástrico espontâneo abundante de odor fétido/alcalino, silêncio absoluto à ausculta nos 4 quadrantes abdominais e dor intratável que recidiva rapidamente após analgesia potente com alfa-2 agonistas',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A frequência cardíaca > 70-80 bpm reflete hipovolemia severa e choque endotóxico precoce. O refluxo espontâneo volumoso denota obstrução mecânica ou funcional do intestino delgado, e o íleo paralítico associado à dor violenta e refratária é a assinatura clínica clássica de estrangulamento vascular intestinal (vólvulo, torção ou hérnia encarcerada).'
      },
      {
        id: 'opt_la_2',
        text: 'Frequência cardíaca de 36 bpm com borborigmos hiperdinâmicos audíveis sem estetoscópio e apetite voraz por feno',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. FC de 36 bpm e borborigmos preservados com apetite indicam normalidade ou espasmo transitório leve, sem indicação cirúrgica.'
      },
      {
        id: 'opt_la_3',
        text: 'Presença de fezes pastosas com muco e temperatura retal de 39.5°C sem qualquer distensão abdominal',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Esse quadro é sugestivo de colite infecciosa (Salmonelose/Clostridiose) de manejo estritamente clínico, e não de cólica estrangulativa cirúrgica.'
      },
      {
        id: 'opt_la_4',
        text: 'Queda de pelos na crina com claudicação grau 1 do membro pélvico esquerdo',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Achados dermatológicos e ortopédicos não guardam relação com a emergência da síndrome cólica.'
      }
    ]
  },
  {
    id: 'ex_large_anim_02',
    conceptId: 'concept_large_animals_nasogastric_peritoneal',
    type: 'multiple_choice',
    prompt: 'Na abordagem semiológica da cólica equina, a análise bioquímica do líquido peritoneal obtido por abdominocentese é um indicador preditivo crucial de viabilidade tecidual. Qual correlação entre o lactato peritoneal e o lactato sérico confirma o infarto transmural da parede intestinal e justifica a laparotomia de emergência?',
    options: [
      {
        id: 'opt_la_2_1',
        text: 'Lactato peritoneal significativamente superior ao lactato sérico (frequentemente ≥ 2 vezes o lactato sérico ou > 4.0 mmol/L), associado a coloração serossanguinolenta turva e proteína total > 3.5 g/dL',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! Em cavalos normais ou com cólica espasmódica simples, o lactato peritoneal é menor ou igual ao lactato sérico. Quando um segmento intestinal sofre estrangulamento vascular, a hipóxia transmural forçada deflagra glicólise anaeróbica intensa na parede do órgão; o lactato gerado transuda diretamente para a cavidade peritoneal antes mesmo de ser detectado em alta concentração na circulação sistêmica. Uma razão lactato peritoneal:sérico > 2:1 possui especificidade superior a 90% para lesão estrangulativa cirúrgica.'
      },
      {
        id: 'opt_la_2_2',
        text: 'Lactato peritoneal rigorosamente zerado com pH peritoneal de 8.5',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O lactato não é zero no fluido biológico peritoneal e pH alcalino no peritônio é incompatível com isquemia tecidual.'
      },
      {
        id: 'opt_la_2_3',
        text: 'Lactato sérico 10 vezes maior que o peritoneal em líquido peritoneal amarelo-cristalino límpido',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Líquido límpido com lactato baixo exclui sofrimento da parede intestinal peritoneal.'
      },
      {
        id: 'opt_la_2_4',
        text: 'Presença de bactérias protozoárias ciliadas móveis no líquido peritoneal com contagem de leucócitos de 200 células/uL',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A presença de protozoários ciliados no líquido peritoneal indica que a agulha de abdominocentese entrou no lúmen do ceco/cólon (enterocentese acidental) e não que há infarto de parede.'
      }
    ]
  },
  {
    id: 'ex_large_anim_03',
    conceptId: 'concept_large_animals_ruminal_acidosis_bloat',
    type: 'multiple_choice',
    prompt: 'Em um confinamento de gado de corte, um lote de novilhos Nelore invade o silo de grãos e consome alta quantidade de milho moído. Horas após, desenvolvem atonia ruminal, fezes diarreicas cinzentas ácidas e desidratação severa. Qual é a cascata microbiológica e físico-química intraruminal que caracteriza a Acidose Ruminal Lática Aguda e qual o mecanismo fisiopatológico do timpanismo espumoso por leguminosas?',
    options: [
      {
        id: 'opt_la_3_1',
        text: 'Proliferação explosiva de Streptococcus bovis e Lactobacillus spp. produzindo ácido D-lático com queda do pH ruminal para < 5.0, morte dos protozoários ciliados e desidratação osmótica; enquanto no timpanismo espumoso proteínas solúveis da pastagem aumentam a viscosidade e aprisionam o gás em microbolhas estáveis que não podem ser eructadas',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A digestão rápida de amido favorece S. bovis, que produz ácido lático. O pH abaixo de 5.0 mata a flora normal celulolítica e os protozoários. A alta osmolaridade do ácido atrai água do sangue para o rúmen por osmose, gerando choque hipovolêmico osmótico. Já no timpanismo espumoso (típico de pastagens de alfafa ou trevo), as proteínas solúveis das folhas atuam como surfactantes que aprisionam o CO2 e CH4 em uma emulsão estável gelatinosa que impede a fusão das bolhas e bloqueia a eructação.'
      },
      {
        id: 'opt_la_3_2',
        text: 'Proliferação de fungos micorrízicos com elevação do pH ruminal para 9.0 com hipercalemia',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A sobrecarga de grãos causa acidose (pH < 5.0), e não alcalose ruminal.'
      },
      {
        id: 'opt_la_3_3',
        text: 'Destruição direta do retículo e omaso por toxinas botulínicas carreadas pela cevada',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O botulismo é uma intoxicação por neurotoxina de Clostridium botulinum que causa paralisia flácida sem acidose lática ruminal.'
      },
      {
        id: 'opt_la_3_4',
        text: 'Bloqueio mecânico imediato da cárdia por fezes desidratadas acumuladas no abomaso',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A cárdia comunica esôfago e rúmen, não tendo relação com fezes no abomaso.'
      }
    ]
  },
  {
    id: 'ex_large_anim_04',
    conceptId: 'concept_large_animals_downer_cow_hypocalcemia',
    type: 'multiple_choice',
    prompt: 'Uma vaca leiteira de alta produção é encontrada em decúbito esternal com o pescoço em "S" voltado para o flanco 24 horas após o parto, com atonia ruminal completa, hipotermia periférica e midríase pupilar. Qual é a base fisiopatológica dessa síndrome e qual cuidado farmacológico e hemodinâmico é estritamente obrigatório durante a infusão intravenosa da solução de Borogluconato de Cálcio a 23%?',
    options: [
      {
        id: 'opt_la_4_1',
        text: 'Hipocalcemia periparto aguda por drenagem massiva de cálcio para o colostro, gerando falha na liberação de acetilcolina na placa motora e atonia muscular lisa e estriada; a infusão de cálcio IV deve ser lenta e acompanhada de ausculta cardíaca contínua devido ao risco iminente de bradiarritmia e parada cardíaca em sístole',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! A Febre Vitular decorre da incapacidade do esqueleto e intestino de suprirem a altíssima demanda de cálcio colostral. Sem cálcio ionizado, a vesícula de acetilcolina não funde na placa motora, causando paralisia flácida e atonia digestiva. A infusão de cálcio IV rápido aumenta agudamente o inotropismo e a contratilidade, podendo induzir fibrilação ventricular ou assistolia em sístole. Se ocorrer bradicardia ou arritmia à ausculta, a infusão deve ser pausada imediatamente!'
      },
      {
        id: 'opt_la_4_2',
        text: 'Lesão traumática da medula espinhal torácica; o cálcio deve ser injetado rapidamente em bolus de 10 segundos diretamente na artéria carótida',
        isCorrect: false,
        pedagogicalFeedback: 'Erro gravíssimo e letal! Injetar cálcio concentrado em bolus arterial causará morte cerebral e parada cardíaca instantânea.'
      },
      {
        id: 'opt_la_4_3',
        text: 'Deficiência congênita de ferro nos músculos intercostais tratada com sulfato ferroso oral',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A paresia puerperal clássica é decorrente de deficiência aguda de cálcio ionizado extracelular.'
      },
      {
        id: 'opt_la_4_4',
        text: 'Desidratação hipernatrêmica por excesso de sal mineral com necessidade de furosemida em altas doses',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O quadro é de hipocalcemia periparto metabólica e diuréticos agravariam a hipocalcemia e causariam colapso hemodinâmico.'
      }
    ]
  },
  {
    id: 'ex_large_anim_05',
    conceptId: 'concept_large_animals_bovine_respiratory_disease',
    type: 'multiple_choice',
    prompt: 'No Complexo Doença Respiratória Bovina (BRD), qual é o fator de virulência chave secretado pela Mannheimia haemolytica que neutraliza a imunidade celular pulmonar primária e qual a justificativa técnica para a intervenção precoce com metafilaxia antibiótica no confinamento?',
    options: [
      {
        id: 'opt_la_5_1',
        text: 'A Leucotoxina (LKT), uma exotoxina RTX que se liga especificamente ao receptor integrina CD11a/CD18 dos leucócitos bovinos, promovendo a lise e necrose de macrófagos alveolares e neutrófilos com liberação de enzimas citotóxicas; a metafilaxia trata em massa animais clinicamente sadios já infectados no período de incubação, interrompendo a consolidação fibrinonecrótica',
        isCorrect: true,
        pedagogicalFeedback: 'Excelente! A Leucotoxina (LKT) é espécie-específica para ruminantes e alvejada ao complexo CD11a/CD18. Em concentrações baixas ativa neutrófilos gerando desgranulação tóxica; em altas concentrações forma poros na membrana plasmática dos macrófagos alveolares e neutrófilos, lisando-os. O extravasamento das enzimas lisossomais digere o parênquima pulmonar, gerando a clássica pleuropneumonia fibrinonecrótica cranioventral. A metafilaxia com macrolídeos de longa ação (ex: Tulitromicina) atinge concentrações pulmonares sustentadas por até 14 dias, abortando a replicação bacteriana antes do colapso tecidual.'
      },
      {
        id: 'opt_la_5_2',
        text: 'Produção de colagenase de parede que impede a cicatrização de anéis traqueais congênitos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A patogênese primária de Mannheimia é mediada pela potente Leucotoxina (LKT) leucocitária, e não colagenase traqueal.'
      },
      {
        id: 'opt_la_5_3',
        text: 'Inativação da bomba de sódio-potássio nos eritrócitos com consequente anemia hemolítica aguda',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A Mannheimia coloniza o trato respiratório inferior, sem causar anemia hemolítica como mecanismo primário.'
      },
      {
        id: 'opt_la_5_4',
        text: 'Síntese de enterotoxinas estafilocócicas que causam diarreia secretora e vômitos no bovino',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Bovinos adultos não vomitam e a BRD é uma síndrome respiratória infecciosa cranioventral.'
      }
    ]
  }
];

export const LARGE_ANIMALS_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_large_01_equine_colic',
    moduleId: 'mod_large_animals_clinic',
    title: 'Síndrome Cólica Equina: Decisão Clínica vs. Cirúrgica',
    shortDescription: 'Fisiopatologia da dor abdominal aguda, ausculta dos 4 quadrantes, palpação retal e parâmetros de indicação cirúrgica imediata.',
    estimatedMinutes: 16,
    order: 1,
    concepts: ['concept_large_animals_colic_rumen_acidosis'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_large_anim_th1',
        type: 'theory',
        title: 'Semiologia Padronizada e Decisão Cirúrgica na Cólica Equina',
        contentMarkdown: `# Aula Universitária: Síndrome Cólica Equina — Decisão Clínica vs. Cirúrgica

> 📖 Referência Canônica: Radostits, O. M. et al. *Clínica Veterinária: Um Tratado de Doenças dos Bovinos, Equinos, Ovinos, Suínos e Caprinos*, 9ª ed. Guanabara Koogan, Cap. 7. White, N. A.; Edwards, G. B. *The Equine Acute Abdomen*. Lea & Febiger. Adams & Stashak's *Lameness in Horses*.

### A Particularidade Anatômica do Cavalo

A conformação anatômica da cárdia equina (esfíncter cárdico hipertrofiado com inserção oblíqua no estômago) impede mecanicamente o reflexo de vômito. Qualquer acúmulo de gás ou fluido decorrente de obstrução intestinal causa distensão progressiva e **ruptura gástrica espontânea fatal** se não houver descompressão nasogástrica imediata!

---

### A Sequência Padronizada de Avaliação Clínica

$$\\text{Exame Físico (FC & Mucosas)} \\longrightarrow \\text{Sondagem Nasogástrica Imediata} \\longrightarrow \\text{Palpação Retal Metódica} \\longrightarrow \\text{Abdominocentese Diagnóstica}$$

1. **Frequência Cardíaca (FC) como Barômetro de Dor e Choque:**
   - $\\text{FC } 40 - 50\text{ bpm:}$ Cólica leve a moderada (espasmo ou timpanismo transitório).
   - $\\text{FC } 50 - 70\text{ bpm:}$ Obstrução física simples (compactação de flexura pélvica ou íleo moderado).
   - $\\text{FC } > 70 - 80\text{ bpm:}$ Lesão estrangulativa hiperaguda (vólvulo, torção de cólon maior ou encarceramento) com isquemia transmural, endotoxemia e indicação cirúrgica provável.

2. **Ausculta Abdominal em 4 Quadrantes:**
   - Flanco Dorsal Direito (FDD): Válvula íleo-cecal (sons de esvaziamento cecal normais a cada 2-3 minutos).
   - Flanco Ventral Direito (FVD): Cólon ventral direito.
   - Flanco Dorsal Esquerdo (FDE): Cólon dorsal esquerdo e intestino delgado.
   - Flanco Ventral Esquerdo (FVE): Cólon ventral esquerdo e flexura pélvica.
   - **Silêncio total nos 4 quadrantes:** Sinal de íleo paralítico grave ou isquemia avançada.

\`\`\`mermaid
flowchart TD
    Colica[Cavalo com Dor Abdominal Aguda: Cavar o Chão, Rolar, Olhar o Flanco] --> FC{Frequência Cardíaca e Grau de Dor?}
    FC -- FC < 50 bpm e Dor Leve --> Clinico[Tratamento Clínico: Caminhadas, Dipirona ou Xilazina Suave]
    FC -- FC > 70 bpm e Dor Violenta --> Sonda[Sondagem Nasogástrica de Alívio pelo Meato Ventral]
    Sonda --> Refluxo{Refluxo Enterogástrico Espontâneo > 4-8 Litros?}
    Refluxo -- Sim (Fétido/Alcalino) --> SuspeitaCirurgica[Alta Suspeita de Obstrução ou Estrangulamento de Delgado]
    Refluxo -- Não --> Palpacao[Palpação Retal: Pesquisar Compactação ou Alças Distendidas]
    SuspeitaCirurgica --> Abdominocentese[Abdominocentese: Avaliar Cor, Proteína e Lactato do Fluido Peritoneal]
    Abdominocentese --> Decisao{Lactato Peritoneal >= 2x Lactato Sérico e Fluido Sanguinolento?}
    Decisao -- Sim --> Laparotomia[Indicação Formal de Laparotomia Exploratória de Emergência]
    Decisao -- Não --> ManejoClinicoIntensivo[Fluidoterapia IV Contínua + Monitorização Rigorosa a Cada 2 Horas]
\`\`\``
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
            weightKg: 460.0,
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
                { parameter: 'Volume de Refluxo Enterogástrico', value: '11 Litros (Fétido alaranjado)', reference: '< 2 Litros', status: 'critical' },
                { parameter: 'Queda da Frequência Cardíaca Pós-Sonda', value: 'De 84 para 70 bpm (Alívio mecânico da distensão gástrica)', reference: 'Normalização', status: 'high' }
              ]
            },
            {
              category: 'laboratorial',
              title: 'Paracentese Abdominal (Abdominocentese)',
              findings: 'Punção com agulha 40x12 na linha média ventral após tricotomia e assepsia cirúrgica.',
              abnormalValues: [
                { parameter: 'Aspecto Físico do Líquido', value: 'Turvo Serossanguinolento (Vinho tinto)', reference: 'Amarelo citrino límpido', status: 'critical' },
                { parameter: 'Proteína Total no Líquido', value: '4.8 g/dL', reference: '< 2.0 g/dL', status: 'critical' },
                { parameter: 'Lactato Peritoneal', value: '6.4 mmol/L (Lactato Sérico: 2.8 mmol/L)', reference: '< 2.0 mmol/L', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com refluxo espontâneo volumoso e líquido peritoneal serossanguinolento com lactato peritoneal 2.3 vezes superior ao sérico, qual é a conduta mandatória?',
          decisionOptions: [
            {
              id: 'opt_dec_la1_1',
              label: 'Encaminhamento urgente para Laparotomia Exploratória em centro cirúrgico com fluidoterapia IV de alto volume contínua',
              description: 'Líquido peritoneal sanguinolento com lactato elevado diagnostica isquemia/estrangulamento de alça. Somente cirurgia desobstrui ou resseca o segmento necrótico.',
              isOptimal: true,
              consequenceText: 'Decisão cirúrgica brilhante e salvadora! A coloração serossanguinolenta do líquido peritoneal reflete a diapedese de hemácias através de paredes intestinais isquêmicas desvitalizadas (hérnia encarcerada, torção de mesentério ou vólvulo). Cada hora de atraso reduz drasticamente as chances de sobrevida do animal.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Indicação cirúrgica precoce baseada na abdominocentese e refluxo volumoso',
                mechanism: 'Correção do estrangulamento vascular mecânico e ressecção de alça necrótica antes da perfuração',
                effect: 'Interrupção da translocação de endotoxinas para a corrente sanguínea portal',
                clinicalMeaning: 'Prevenção de choque endotóxico fatal e salvamento do paciente'
              }
            },
            {
              id: 'opt_dec_la1_2',
              label: 'Administrar 4 litros de óleo mineral pela sonda e esperar 24 horas para ver se o intestino desobstrui',
              description: 'Tentar laxante oleoso via sonda em alça com refluxo positivo.',
              isOptimal: false,
              consequenceText: 'Erro médico grosseiro e fatal! Introduzir óleo em estômago que está apresentando refluxo entérico causará sobrecarga de volume, refluxo para as vias aéreas com pneumonia lipoide fulminante ou ruptura gástrica espontânea.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Administração de óleo mineral em paciente com íleo adinâmico e refluxo gástrico',
                mechanism: 'Impossibilidade de progressão do óleo com aspiração traqueobrônquica e ruptura gástrica',
                effect: 'Peritonite química fecal aguda e insuficiência respiratória asfíxica',
                clinicalMeaning: 'Óbito doloroso em choque séptico terminal'
              }
            },
            {
              id: 'opt_dec_la1_3',
              label: 'Aplicar Flunixina Meglumina em dose dobrada e soltar no piquete',
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
            'A passagem de sonda nasogástrica é a primeira manobra terapêutica na cólica para evitar ruptura gástrica espontânea.',
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
  },
  {
    id: 'lesson_large_02_nasogastric_peritoneal_fluid',
    moduleId: 'mod_large_animals_clinic',
    title: 'Semiologia Avançada da Cólica: Sondagem & Paracentese Abdominal',
    shortDescription: 'Descompressão nasogástrica para prevenção de ruptura gástrica espontânea e análise citológica/bioquímica do fluido peritoneal.',
    estimatedMinutes: 16,
    order: 2,
    concepts: ['concept_large_animals_nasogastric_peritoneal'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_large_th2',
        type: 'theory',
        title: 'Técnica e Interpretação da Sondagem Nasogástrica e Paracentese',
        contentMarkdown: `# Aula Universitária: Sondagem Nasogástrica e Paracentese Abdominal no Cavalo

> 📖 Referência Canônica: Smith, B. P. *Large Animal Internal Medicine*, 6th ed. Mosby; Reed, S. M.; Bayly, W. M.; Sellon, D. C. *Equine Internal Medicine*, 4th ed. Saunders.

### A Técnica Padronizada de Sondagem Nasogástrica

A passagem da sonda nasogástrica não é apenas diagnóstica, mas um **ato terapêutico emergencial de descompressão**:
1. **Trajeto Anatômico:** A sonda deve ser lubrificada com água ou vaselina e introduzida estritamente pelo **meato nasal ventral** (entre a concha nasal ventral e o assoalho da cavidade nasal). A introdução pelos meatos dorsal ou médio colide contra o osso etmoide, causando hemorragia intensa (epistaxe grave).
2. **Confirmação da Posição Esofágica:**
   - Palpação do bulbo da sonda deslizando no esôfago cervical esquerdo ao longo do sulco jugular.
   - Resistência suave à sucção com seringa (pressão negativa criada pelo colapso das paredes esofágicas sobre o orifício da sonda). No trato respiratório, o ar é aspirado livremente sem vácuo!
   - Ausência de fluxo de ar expiratório nos tubos ao ritmo da respiração.
3. **Avaliação do Refluxo Enterogástrico:**
   - Em cavalos normais, recupera-se menos de $1-2\text{ Litros}$ de líquido gástrico esverdeado com pH ácido ($pH < 4.0$).
   - A obtenção de **volume espontâneo $> 4-8\text{ Litros}$**, com coloração amarelada a acastanhada fétida e **pH neutro a alcalino ($pH > 5.0-6.5$)**, confirma refluxo retrógrado do intestino delgado (duodeno e jejuno) por íleo adinâmico ou estrangulamento físico de alça!

---

### Análise e Interpretação do Fluido Peritoneal (Abdominocentese)

| Parâmetro Laboratorial | Fluido Peritoneal Fisiológico | Obstrução Simples / Compactação | Lesão Estrangulativa / Infarto Transmural |
| :--- | :--- | :--- | :--- |
| **Aspecto Físico** | Amarelo-citrino translúcido límpido | Amarelo levemente turvo | **Serossanguinolento a acastanhado fétido** |
| **Proteína Total (PT)** | $< 2.0\text{ g/dL}$ | $2.5 - 3.5\text{ g/dL}$ | **$> 3.5 - 5.0\text{ g/dL}$** (Extravasamento vascular maciço) |
| **Células Nucleadas (CTCN)** | $< 5.000 /uL$ | $5.000 - 10.000 /uL$ | **$> 15.000 - 50.000 /uL$** (Neutrófilos degenerados) |
| **Lactato Peritoneal** | $≤ Lactato Sérico (< 2.0 mmol/L)}$ | Discretamente elevado ($2.0-3.5$) | **$≥ 2×\text{ o Lactato Sérico}$ (ou $> 4.0\text{ mmol/L}$)** |

\`\`\`mermaid
flowchart TD
    Abdominocentese[Abdominocentese Realizada no Ponto Mais Dependente à Direita da Linha Média] --> Cor{Coloração do Fluido Peritoneal?}
    Cor -- Amarelo Límpido Transparente --> Normal[Fluido Fisiológico: Proteína < 2.0 g/dL e Lactato Normal]
    Cor -- Amarelo Turvo --> ObstrucaoSimples[Obstrução Simples / Compactação: Aumento Moderado de Proteína]
    Cor -- Serossanguinolento ou Achocolatado --> Isquemia[Isquemia Transmural da Parede Intestinal]
    Isquemia --> TesteLactato{Lactato Peritoneal vs. Sérico?}
    TesteLactato -- Lactato Peritoneal >= 2x Sérico --> NecroseTransmural[Infarto Intestinal Agudo: Laparotomia Exploratória Imediata]
    Normal & ObstrucaoSimples --> TratamentoClinico[Indicação de Tratamento Clínico com Hidratação e Eletrólitos]
\`\`\``
      },
      {
        id: 'sec_large_lab2',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Barão (Quarto de Milha)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Clínico de Compactação de Cólon Maior (Flexura Pélvica)',
          patient: {
            name: 'Barão',
            species: 'Equino',
            breed: 'Quarto de Milha',
            age: '8 anos',
            weightKg: 510.0,
            habitatOrEnvironment: 'Baia com cama de palha e feno de alfafa'
          },
          vitals: {
            heartRateBpm: 52,
            respiratoryRateRpm: 20,
            temperatureCelsius: 37.8,
            mucousMembranes: 'Rosadas a levemente secas, CRT = 2.0s',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Cavalo atleta começou com desconforto abdominal discreto há 36 horas, raspando o chão esporadicamente e deitando por períodos prolongados. Houve redução expressiva no volume de fezes na baia (fezes secas, escuras e revestidas por muco).',
          exams: [
            {
              category: 'physical_exam',
              title: 'Palpação Retal e Sondagem Nasogástrica',
              findings: 'Avaliação física metódica do trato gastrintestinal.',
              abnormalValues: [
                { parameter: 'Refluxo Nasogástrico Espontâneo', value: '0.5 Litros de fluido esverdeado ácido (pH 3.0)', reference: '< 2 Litros (Sem refluxo patológico)', status: 'normal' },
                { parameter: 'Palpação Retal', value: 'Massa cilíndrica firme indentável de 30 cm de diâmetro na entrada da pelve esquerda (Flexura Pélvica)', reference: 'Flexura pélvica flácida e vazia', status: 'critical' },
                { parameter: 'Ausculta Cecocolônica', value: 'Hipomotilidade discreta a moderada bilateral', reference: '2 a 3 sons/minuto', status: 'low' }
              ]
            },
            {
              category: 'laboratorial',
              title: 'Paracentese Peritoneal',
              findings: 'Líquido obtido por punção abdominal estéril.',
              abnormalValues: [
                { parameter: 'Aspecto Físico', value: 'Amarelo citrino translúcido e límpido', reference: 'Amarelo citrino límpido', status: 'normal' },
                { parameter: 'Proteína Total no Líquido', value: '1.8 g/dL', reference: '< 2.0 g/dL', status: 'normal' },
                { parameter: 'Lactato Peritoneal', value: '1.4 mmol/L (Lactato Sérico: 1.6 mmol/L)', reference: '< 2.0 mmol/L', status: 'normal' }
              ]
            }
          ],
          challengePrompt: 'Barão apresenta compactação confirmada na flexura pélvica sem sofrimento vascular de alça (abdominocentese normal e sem refluxo). Qual é o protocolo de hidratação e desimpactação clínica de eleição?',
          decisionOptions: [
            {
              id: 'opt_dec_la2_1',
              label: 'Fluidoterapia enteral contínua por sonda nasogástrica (solução eletrolítica isotônica a 8-10 L/hora) + Sulfato de Magnésio oral (1 g/kg diluído em 4 L de água q24h) + Fluidoterapia IV com Ringer Lactato + Caminhadas controladas e suspensão do feno',
              description: 'A hidratação enteral direta hidrata o fecaloma de dentro para fora, o sulfato de magnésio atua como laxante osmótico luminal e a caminhada estimula o peristaltismo reflexo.',
              isOptimal: true,
              consequenceText: 'Conduta de excelência em medicina interna equina! A fluidoterapia enteral é superior à fluidoterapia intravenosa isolada para amolecer fecalomas intraluminais na flexura pélvica. O sulfato de magnésio retém água no cólon por efeito osmótico, desfazendo a massa compactada em 24 a 36 horas sem necessidade de cirurgia.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Hidratação enteral vigorosa associada a laxante osmótico e caminhadas leves',
                mechanism: 'Hidratação da ingesta compactada e restauração da motilidade propulsiva do cólon maior',
                effect: 'Eliminação de fezes amolecidas volumosas em 18 horas, alívio completo da dor e esvaziamento da flexura pélvica',
                clinicalMeaning: 'Resolução clínica com 100% de sucesso sem custos ou riscos de laparotomia'
              }
            },
            {
              id: 'opt_dec_la2_2',
              label: 'Indicar laparotomia exploratória imediata com ressecção e anastomose de cólon maior',
              description: 'Indicar cirurgia radical de emergência para uma compactação simples não complicada.',
              isOptimal: false,
              consequenceText: 'Erro de conduta cirúrgica! Mais de 95% das compactações de flexura pélvica são resolvidas clinicamente com hidratação. Submeter o animal a laparotomia desnecessária acarreta alto risco de complicações e custos astronômicos.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Indicação cirúrgica precoce em afecção com indicação estrita de manejo conservador',
                mechanism: 'Estresse anestésico e cirúrgico desnecessário em animal com parâmetros vasculares normais',
                effect: 'Íleo paralítico pós-operatório e dor incisional prolongada',
                clinicalMeaning: 'Complicações iatrogênicas evitáveis'
              }
            },
            {
              id: 'opt_dec_la2_3',
              label: 'Administrar sulfato de neostigmina em altas doses IV para forçar a contração espasmódica do cólon',
              description: 'Uso de colinérgico potente contra segmento impactado.',
              isOptimal: false,
              consequenceText: 'Conduta perigosa! Administrar pró-cinéticos potentes contra uma massa impactada rígida pode causar espasmos violentos e ruptura da parede intestinal.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de colinérgico violento contra obstrução luminal',
                mechanism: 'Hipercontração muscular contra barreira mecânica intransponível',
                effect: 'Ruptura da flexura pélvica e peritonite fecal catastrófica',
                clinicalMeaning: 'Óbito por choque séptico'
              }
            }
          ],
          learningTakeaways: [
            'A ausência de refluxo gástrico associada a fluido peritoneal normal confirma que a compactação não possui estrangulamento vascular.',
            'A fluidoterapia enteral (8-10 L/h) é a ferramenta mais eficaz para reidratar fecalomas intraluminais na flexura pélvica.',
            'A passagem da sonda nasogástrica deve ser feita obrigatoriamente pelo meato ventral para evitar lesão dos cornetos etmoidais.'
          ]
        }
      },
      {
        id: 'sec_large_anim_ex2',
        type: 'exercise',
        title: 'Exercício Clínico: Semiologia da Cólica e Fluido Peritoneal',
        exerciseId: 'ex_large_anim_02'
      }
    ]
  },
  {
    id: 'lesson_large_03_ruminal_acidosis_bloat',
    moduleId: 'mod_large_animals_clinic',
    title: 'Acidose Ruminal Lática Aguda (SARA) & Timpanismos',
    shortDescription: 'Fermentação de carboidratos solúveis por Streptococcus bovis, queda do pH ruminal (< 5.0), desidratação osmótica e diferenciação de timpanismos.',
    estimatedMinutes: 16,
    order: 3,
    concepts: ['concept_large_animals_ruminal_acidosis_bloat'],
    xpReward: 130,
    sections: [
      {
        id: 'sec_large_th3',
        type: 'theory',
        title: 'A Dinâmica Microbiológica da Acidose Ruminal e Timpanismos',
        contentMarkdown: `# Aula Universitária: Acidose Ruminal Lática Aguda e Timpanismos em Bovinos

> 📖 Referência Canônica: Radostits, O. M. et al. *Clínica Veterinária*, 9ª ed. Guanabara Koogan; Dirksen, G. et al. *Medicina Interna e Enfermidades dos Bovinos*, 4ª ed. Guanabara Koogan.

### A Fisiopatologia da Acidose Ruminal Lática Aguda

A ingestão excessiva e abrupta de **carboidratos não estruturais rapidamente fermentáveis** (grãos finamente moídos, milho, sorgo, cevada ou subprodutos amiláceos) deflagra uma quebra catastrófica do ecossistema ruminal:

1. **A Sucessão Bacteriana:**
   - O excesso de amido promove a multiplicação rápida de ***Streptococcus bovis***, que fermenta o substrato produzindo grandes quantidades de ácido láctico (tanto o isômero L quanto o D).
   - O pH ruminal cai de $6.5-7.0$ para **$< 5.5$**, provocando a morte por lise de bactérias celulolíticas benéficas (*Fibrobacter succinogenes*, *Ruminococcus albus*) e de todos os protozoários ciliados ruminais.
   - Quando o pH atinge **$< 5.0$**, o próprio *S. bovis* é inibido, predominando bactérias acidotolerantes (*Lactobacillus spp.*), que geram ácido D-láctico em profusão.

2. **Desidratação Osmótica e Colapso Sistêmico:**
   - O acúmulo de ácido lático eleva a osmolaridade intraruminal de $280-300\text{ mOsm/L}$ para até **$450-500\text{ mOsm/L}$**.
   - Por gradiente osmótico, **enormes volumes de água são atraídos da circulação vascular sistêmica para o lúmen do rúmen**, causando desidratação osmótica severa, hipovolemia, hemoconcentração e choque circulatório.
   - O ácido D-láctico é absorvido para o sangue, mas não pode ser metabolizado pela L-lactato desidrogenase hepática, resultando em **Acidose Metabólica D-Lática Severa**.
   - O ácido corrói o epitélio escamoso estratificado do rúmen (**Rumenite Química**), permitindo a translocação de ***Fusobacterium necrophorum*** e *Trueperella pyogenes* pela veia porta até o fígado, formando **abcessos hepáticos múltiplos**.

---

### Timpanismo Gasoso vs. Timpanismo Espumoso

| Critério | Timpanismo Gasoso (Secundário) | Timpanismo Espumoso (Primário / Pastagem) |
| :--- | :--- | :--- |
| **Fator Causal** | Obstrução esofágica mecânica (engasgo por frutas/tubérculos), tétano ou atonia vagal | Ingestão de leguminosas tenras (alfafa, trevo-branco) ricas em proteínas solúveis ou ração farelada |
| **Estado Físico do Gás** | Gás livre acumulado no topo da cúpula dorsal do rúmen | Gás aprisionado em **bilhões de microbolhas viscosas estáveis** formando espuma gelatinosa |
| **Resposta à Sonda Ruminal** | **Liberação imediata de jato gasoso sob pressão** com descompressão | **Saída apenas de espuma viscosa sem descompressão ruminal** |
| **Tratamento Específico** | Desobstrução esofágica e descompressão por sonda ou trocarte | Administração de tensoativos: **Poloxaleno** ($25-50\text{ g}$) ou óleo mineral ($500-1000\text{ mL}$) |

\`\`\`mermaid
flowchart TD
    IngestaoAmido[Sobrecarga de Carboidratos: Milho Moído / Concentrado] --> ProliferacaoBovis[Proliferação de Streptococcus bovis]
    ProliferacaoBovis --> QuedaPH[Produção Maciça de Ácido Lático: pH Ruminal < 5.0]
    QuedaPH --> MorteProtozoarios[Morte de Bactérias Celulolíticas e Protozoários Ciliados]
    QuedaPH --> Hiperosmolaridade[Hiperosmolaridade Ruminal > 450 mOsm/L]
    Hiperosmolaridade --> Desidratacao[Drenagem Osmótica de Água Vascular: Choque Hipovolêmico Severo]
    QuedaPH --> Rumenite[Rumenite Química Erosiva: Quebra da Mucosa]
    Rumenite --> Fusobacterium[Translocação Portal de Fusobacterium necrophorum]
    Fusobacterium --> AbcessosHepaticos[Abcessos Hepáticos Múltiplos & Síndrome da Veia Cava Caudal]
\`\`\``
      },
      {
        id: 'sec_large_lab3',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Mimosa (Nelore)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo de Acidose Ruminal Lática Aguda por Sobrecarga de Grãos',
          patient: {
            name: 'Mimosa',
            species: 'Bovino',
            breed: 'Nelore',
            age: '18 meses',
            weightKg: 380.0,
            habitatOrEnvironment: 'Confinamento de engorda intensivo'
          },
          vitals: {
            heartRateBpm: 110,
            respiratoryRateRpm: 45,
            temperatureCelsius: 37.6,
            mucousMembranes: 'Muito secas e congestas, tempo de preenchimento capilar > 3.5s',
            capillaryRefillTimeSec: 3.5
          },
          anamnesis: 'Novilha invadiu o depósito de ração concentrada de milho há 14 horas. Apresenta-se profundamente deprimida, atáxica, com diarreia profusa líquida fétida amarelada com grãos inteiros e abdômen distendido bilateralmente com som de líquido chapinhante (splash) à balotação no flanco esquerdo.',
          exams: [
            {
              category: 'physical_exam',
              title: 'Sondagem Ruminal e Avaliação do Fluido',
              findings: 'Passagem de sonda ororruminal de grosso calibre para coleta de suco de rúmen.',
              abnormalValues: [
                { parameter: 'pH do Suco de Rúmen', value: '4.2 (Criticamente ácido)', reference: '6.2 - 7.0', status: 'critical' },
                { parameter: 'Aspecto e Odor do Suco', value: 'Leitoso acinzentado com odor azedo picante', reference: 'Verde-oliva a castanho com odor aromático agradável', status: 'critical' },
                { parameter: 'Microscopia de Protozoários', value: 'Ausência total de protozoários ciliados vivos (100% mortos e lisados)', reference: 'Incontáveis protozoários ciliados com motilidade ativa', status: 'critical' },
                { parameter: 'Hematócrito', value: '52% (Hemoconcentração por desidratação osmótica)', reference: '24 - 40%', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Mimosa apresenta acidose ruminal lática aguda com pH de 4.2 e choque hipovolêmico osmótico grave. Qual é o protocolo de desintoxicação e reabilitação ruminal imediato?',
          decisionOptions: [
            {
              id: 'opt_dec_la3_1',
              label: 'Lavagem ruminal (rumenotomia ou sifonagem volumosa por sonda calibrosa) para remover o substrato fermentativo + Bicarbonato de Sódio IV em solução a 1.3% para corrigir a acidose sistêmica + Anti-ácido intraruminal (Óxido de Magnésio) + Transfaunação com 5 a 10 L de suco de rúmen fresco de doador saudável após tamponamento',
              description: 'A remoção mecânica do milho cessa a produção de ácido, o bicarbonato combate a acidose osmótica e a transfaunação repõe a microbiota celulolítica extinta.',
              isOptimal: true,
              consequenceText: 'Conduta de referência padrão-ouro em clínica de ruminantes! Sem a evacuação da ingesta tóxica e tamponamento sistêmico, a absorção contínua de ácido D-lático causaria morte em poucas horas por colapso circulatório. A transfaunação com líquido ruminal de animal saudável é insubstituível para restaurar a fermentação em 24h.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Esvaziamento ruminal, correção da acidose com bicarbonato e repovoamento microbiológico via transfaunação',
                mechanism: 'Cessação da produção de ácido D-lático e reversão do gradiente osmótico desidratante',
                effect: 'Elevação do pH ruminal para 6.4, reidratação vascular e reaparecimento de movimentos ruminais',
                clinicalMeaning: 'Recuperação completa da novilha e prevenção de laminite e abcessos hepáticos'
              }
            },
            {
              id: 'opt_dec_la3_2',
              label: 'Administrar 5 litros de vinagre de maçã (ácido acético) por via oral para tentar combater a fermentação',
              description: 'Acidificar ainda mais um rúmen com pH 4.2.',
              isOptimal: false,
              consequenceText: 'Erro mortal! Administrar ácido acético em um rúmen com pH 4.2 acelerará a necrose química das papilas e aprofundará a acidose metabólica letal.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Adição de ácido exógeno em vigência de acidose lática crítica',
                mechanism: 'Agravamento do dano erosivo da mucosa ruminal e piora da acidemia',
                effect: 'Queda do pH sanguíneo venoso para < 7.0',
                clinicalMeaning: 'Parada cardiorrespiratória irreversível por choque acidótico'
              }
            },
            {
              id: 'opt_dec_la3_3',
              label: 'Prescrever apenas antibiótico intramuscular e esperar o rúmen digerir o milho naturalmente',
              description: 'Conduta passiva em sobrecarga ruminal com pH 4.2.',
              isOptimal: false,
              consequenceText: 'Conduta negligente. Com pH de 4.2, o epitélio ruminal necrose completamente e a novilha evoluirá para óbito em menos de 12 horas por desidratação osmótica e sepse.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Omissão de intervenção em acidose ruminal grave',
                mechanism: 'Translocação bacteriana maciça e choque hipovolêmico desidratante',
                effect: 'Ruptura da barreira mucosa e acidose sistêmica intratável',
                clinicalMeaning: 'Morte inevitável do animal'
              }
            }
          ],
          learningTakeaways: [
            'O pH ruminal < 5.0 com ausência de protozoários ciliados vivos é diagnóstico definitivo de acidose lática aguda.',
            'A hiperosmolaridade ruminal drena a água dos vasos sanguíneos, matando o animal por desidratação osmótica intravascular severa.',
            'A transfaunação ruminal fornece bactérias celulolíticas e protozoários vivos essenciais para reiniciar a função digestiva após o insulto.'
          ]
        }
      },
      {
        id: 'sec_large_anim_ex3',
        type: 'exercise',
        title: 'Exercício Clínico: Acidose Ruminal e Timpanismo',
        exerciseId: 'ex_large_anim_03'
      }
    ]
  },
  {
    id: 'lesson_large_04_downer_cow_hypocalcemia',
    moduleId: 'mod_large_animals_clinic',
    title: 'Síndrome da Vaca Caída & Hipocalcemia Periparto (Febre Vitular)',
    shortDescription: 'Fisiopatologia da febre do leite, perda de tônus muscular, decúbito com pescoço em "S", infusão de gluconato de cálcio e necrose isquêmica.',
    estimatedMinutes: 16,
    order: 4,
    concepts: ['concept_large_animals_downer_cow_hypocalcemia'],
    xpReward: 140,
    sections: [
      {
        id: 'sec_large_th4',
        type: 'theory',
        title: 'A Fisiopatologia da Febre Vitular e a Síndrome do Esmagamento',
        contentMarkdown: `# Aula Universitária: Hipocalcemia Periparto e Síndrome da Vaca Caída

> 📖 Referência Canônica: Goff, J. P. *Pathophysiology of Calcium and Magnesium Disorders in Cattle*. Vet Clin North Am Food Anim Pract; Constable, P. D. et al. *Veterinary Medicine: A Textbook of the Diseases of Cattle, Horses, Sheep, Pigs and Goats*, 11th ed. Elsevier.

### A Crise Homeostática do Cálcio no Parto

O cálcio ionizado extracelular ($Ca^{2+}$) é o gatilho fisiológico indispensável para a liberação de acetilcolina na placa motora e para o acoplamento excitação-contração nos músculos lisos e estriados:
1. **O Dreno Mamário Colostral:** Com a colostrogênese e início da lactação nas primeiras 48h pós-parto, a vaca direciona mais de $30-50\text{ g}$ de cálcio para a glândula mamária diariamente (9 vezes mais cálcio do que a reserva circulante plasmática total de $3-4\text{ g}$).
2. **A Falha de Adaptação Endócrina:** A resposta óssea ao Paratormônio (PTH) e a absorção intestinal estimulada pela $1,25-(OH)_2\text{-Vitamina D}_3$ demoram de 24 a 48 horas para se tornarem efetivas, gerando uma janela crítica de hipocalcemia aguda severa ($Ca^{2+} < 1.0\text{ mmol/L}$ ou cálcio total $< 5.5\text{ mg/dL}$).

---

### Os Três Estágios Clínicos da Hipocalcemia

- **Estágio 1 (Pré-Decúbito / Hiperexcitabilidade):** Tremores de orelha e flanco, marcha cambaleante rígida e hiperestesia transitória.
- **Estágio 2 (Decúbito Esternal com Pescoço em "S"):**
  - A vaca perde a capacidade de sustentar o peso e assume **decúbito esternal com flexão lateral da cabeça sobre o flanco** (conformação típica em "S" da coluna cervical).
  - Paralisia da musculatura lisa: **atonia ruminal completa** com timpanismo secundário leve, paralisia de esfíncteres com retenção urinária e fezes secas impactadas no reto revestidas de muco.
  - Extremidades frias (orelhas e cascos frios pela hipotermia periférica), pupilas dilatadas (midríase com reflexo pupilar à luz diminuído) e bulhas cardíacas com som metálico abafado.
- **Estágio 3 (Comatoso):** Decúbito lateral flácido completo, depressão profunda do SNC, choque e morte iminente por asfixia decorrente de timpanismo ruminal agudo.

---

### A Síndrome da Vaca Caída (*Downer Cow Syndrome*)

Se uma vaca em decúbito hipocalcêmico permanecer deitada sobre piso duro (concreto) por mais de **6 a 12 horas**, desenvolve-se a Síndrome da Vaca Caída:
- O peso corporal ($600-700\text{ kg}$) comprime o membro pélvico dependente contra a bacia óssea, gerando **isquemia muscular aguda** e necrose por esmagamento nos músculos **semitendíneo, semimembranoso e quadríceps**.
- Ocorre neuropraxia compressiva isquêmica do **nervo isquiático e nervo obturador**.
- Mesmo após a correção completa do cálcio sérico, a vaca torna-se incapaz de se levantar devido à lesão neuromuscular secundária irreversível!

\`\`\`mermaid
flowchart TD
    Parto[Parto & Início da Síntese de Colostro] --> DrenoCalcio[Dreno Maciço de 30-50g de Cálcio para a Glândula Mamária]
    DrenoCalcio --> HipocalcemiaSevera[Hipocalcemia Aguda: Cálcio Total < 5.0 mg/dL]
    HipocalcemiaSevera --> BloqueioPlaca[Falha de Liberação de Acetilcolina na Placa Motora]
    BloqueioPlaca --> AtoniaMuscular[Perda de Tônus Muscular Liso e Estriado]
    AtoniaMuscular --> DecubitoS[Decúbito Esternal com Flexão em S do Pescoço & Atonia Ruminal]
    DecubitoS --> DecubitoProlongado[Decúbito Prolongado > 6 Horas sobre Piso Rígido]
    DecubitoProlongado --> IsquemiaCompressiva[Compressão Isquêmica de Músculos Semitendíneos e Nervo Isquiático]
    IsquemiaCompressiva --> VacaCaida[Síndrome da Vaca Caída: Necrose Muscular e Rabdomiólise Irreversível]
\`\`\``
      },
      {
        id: 'sec_large_lab4',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Estrela (Holandesa)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo de Febre Vitular e Prevenção da Síndrome da Vaca Caída',
          patient: {
            name: 'Estrela',
            species: 'Bovino',
            breed: 'Holandesa Preto e Branco',
            age: '6 anos (4ª lactação)',
            weightKg: 640.0,
            habitatOrEnvironment: 'Galpão compost barn leiteiro'
          },
          vitals: {
            heartRateBpm: 48,
            respiratoryRateRpm: 18,
            temperatureCelsius: 37.0,
            mucousMembranes: 'Pálidas e frias, orelhas geladas ao toque',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'Vaca pariu um bezerro sadio de 44 kg há 20 horas. Foi encontrada deitada em decúbito esternal com o pescoço curvado em "S" apoiando a cabeça contra o flanco direito. Não há reflexo de micção e há atonia ruminal completa (silêncio auscultatório).',
          exams: [
            {
              category: 'laboratorial',
              title: 'Bioquímica Mineral Sérica',
              findings: 'Painel eletrolítico periparto confirmando hipocalcemia severa.',
              abnormalValues: [
                { parameter: 'Cálcio Total Sérico', value: '4.4 mg/dL (Severamente diminuído)', reference: '8.5 - 10.5 mg/dL', status: 'critical' },
                { parameter: 'Fósforo Sérico', value: '2.0 mg/dL (Hipofosfatemia concomitante)', reference: '4.5 - 7.0 mg/dL', status: 'critical' },
                { parameter: 'Magnésio Sérico', value: '2.1 mg/dL', reference: '1.8 - 2.4 mg/dL', status: 'normal' },
                { parameter: 'Temperatura Corporal', value: '37.0°C (Hipotermia)', reference: '38.0 - 39.0°C', status: 'low' }
              ]
            }
          ],
          challengePrompt: 'Estrela encontra-se no Estágio 2 da Febre Vitular com risco iminente de necrose muscular isquêmica. Qual é o protocolo de infusão de cálcio e os cuidados de monitorização obrigatórios?',
          decisionOptions: [
            {
              id: 'opt_dec_la4_1',
              label: 'Infusão intravenosa lenta de 500 mL de Borogluconato de Cálcio a 23% (aquecido a 38°C) em 15 a 20 minutos sob ausculta cardíaca rigorosa contínua + 500 mL SC para liberação prolongada + Cama profunda de maravalha e mudança periódica de decúbito a cada 2 horas',
              description: 'O cálcio IV restaura imediatamente o potencial de ação neuromuscular, a via SC previne recidivas nas próximas 24h e o manejo físico de cama previne a Síndrome da Vaca Caída.',
              isOptimal: true,
              consequenceText: 'Conduta impecável de medicina de produção leiteira! Durante a infusão, a ausculta revelou fortalecimento das bulhas cardíacas; aos 15 minutos, a vaca eructou espontaneamente, eliminou urina e fezes e se levantou com auxílio 30 minutos depois, sem qualquer lesão compressiva!',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Reposição lenta de borogluconato de cálcio sob ausculta associada a manejo contra lesão isquêmica',
                mechanism: 'Restauração da liberação pré-sináptica de acetilcolina na placa motora e contração muscular',
                effect: 'Recuperação do tônus muscular, aumento da temperatura corporal e elevação espontânea da vaca',
                clinicalMeaning: 'Cura da febre vitular e prevenção da lesão isquêmica por esmagamento'
              }
            },
            {
              id: 'opt_dec_la4_2',
              label: 'Administrar 500 mL de Gluconato de Cálcio a 23% em bolus venoso ultra-rápido em 1 minuto sem auscultar o coração para acelerar o efeito',
              description: 'Infusão venosa rápida de cálcio concentrado.',
              isOptimal: false,
              consequenceText: 'Erro médico instantaneamente letal! A hipercalcemia aguda súbita no coração causa arritmia ventricular grave e parada cardíaca fulminante em sístole tetânica.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Infusão intravenosa rápida em bolus de borogluconato de cálcio concentrado',
                mechanism: 'Efeito inotrópico excessivo fulminante sobre o miocárdio despolarizado',
                effect: 'Assistolia cardíaca em sístole na metade do frasco',
                clinicalMeaning: 'Óbito iatrogênico instantâneo na frente do produtor'
              }
            },
            {
              id: 'opt_dec_la4_3',
              label: 'Deixar a vaca deitada no mesmo decúbito sobre o concreto e aplicar apenas injeção de vitamina B12',
              description: 'Conduta omissa que condena a vaca à síndrome do esmagamento muscular.',
              isOptimal: false,
              consequenceText: 'Desastre clínico! A vaca permanecerá em decúbito prolongado, sofrendo necrose isquêmica dos membros posteriores (vaca caída permanente) e precisará ser sacrificada em 48 horas.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Omissão de cálcio e manutenção sobre piso duro sem rolamento',
                mechanism: 'Necrose isquêmica por esmagamento dos músculos posteriores',
                effect: 'Rabdomiólise com elevação extrema de CPK e paralisia permanente',
                clinicalMeaning: 'Invalidez permanente com indicação de eutanásia'
              }
            }
          ],
          learningTakeaways: [
            'A infusão de gluconato de cálcio a 23% IV DEVE ser lenta (15-20 minutos) e SEMPRE monitorizada por ausculta cardíaca.',
            'O decúbito por mais de 6-12 horas sobre superfícies rígidas causa necrose isquêmica dos músculos semitendíneos, originando a Síndrome da Vaca Caída.',
            'A administração combinada IV (resgate imediato) e SC (depósito para prevenir recidiva) é o protocolo padrão-ouro.'
          ]
        }
      },
      {
        id: 'sec_large_anim_ex4',
        type: 'exercise',
        title: 'Exercício Clínico: Hipocalcemia e Síndrome da Vaca Caída',
        exerciseId: 'ex_large_anim_04'
      }
    ]
  },
  {
    id: 'lesson_large_05_bovine_respiratory_disease',
    moduleId: 'mod_large_animals_clinic',
    title: 'Complexo Doença Respiratória Bovina (BRD) & Pneumonias',
    shortDescription: 'A tríade epidemiológica do confinamento, patogênese da Mannheimia haemolytica (LKT) e estratégias de metafilaxia antibiótica.',
    estimatedMinutes: 16,
    order: 5,
    concepts: ['concept_large_animals_bovine_respiratory_disease'],
    xpReward: 150,
    sections: [
      {
        id: 'sec_large_th5',
        type: 'theory',
        title: 'A Tríade Epidemiológica e a Patogênese da BRD',
        contentMarkdown: `# Aula Universitária: Complexo Doença Respiratória Bovina (BRD)

> 📖 Referência Canônica: Griffin, D. *Economic Impact Associated with Respiratory Disease in Beef Cattle*. Vet Clin North Am Food Anim Pract; Edwards, T. A. *Control Methods for Bovine Respiratory Disease for Feedlot Cattle*.

### A Tríade Epidemiológica Multietiológica

O Complexo Respiratório Bovino (BRD / *Shipping Fever* / Febre dos Transportes) é a síndrome infecciosa de maior impacto econômico e sanitário na pecuária global:
1. **Fator Desencadeante (Estresse e Imunodepressão):**
   - Desmame, transporte rodoviário prolongado, privação de água/alimento, mistura de lotes em leilões e poeira do confinamento.
   - Ocorre pico plasmático prolongado de cortisol endógeno, que deprime a atividade de macrófagos alveolares e neutrófilos.
2. **Infecção Viral Primária:**
   - Vírus Respiratório Sincicial Bovino (BRSV), Herpesvírus Bovino tipo 1 (BHV-1 / IBR), Parainfluenza-3 (PI-3) e BVDV.
   - Provocam lise de células epiteliais ciliadas na traqueia e brônquios, **paralisando o elevador mucociliar** e permitindo o livre acesso de bactérias à porção profunda do pulmão.
3. **Invasão Bacteriana Secundária Aguda:**
   - ***Mannheimia haemolytica* (Sorotipo A1):** Principal patógeno bacteriano. Produz a **Leucotoxina (LKT)**, uma exotoxina RTX que se liga aos receptores CD11a/CD18 dos leucócitos de ruminantes, lisando macrófagos alveolares e neutrófilos. O derramamento das enzimas lisossomais digere o parênquima pulmonar.
   - ***Pasteurella multocida* e *Histophilus somni*:** Causam pleuropneumonia fibrinosa e vasculite necrosante.

---

### Anatomopatologia e Padrão da Pleuropneumonia Fibrinonecrótica

- **Distribuição Cranioventral:** A conformação anatômica lobar dos ruminantes favorece a deposição gravitacional de exsudato nos lobos craniais e médios.
- **Aspecto Marmorizado:** Os septos interlobulares ficam marcadamente distendidos por exsudato gelatinoso amarelo rico em fibrina, contrastando com áreas de consolidação vermelho-escura e necrose cinzenta (**"Pulmão Marmorizado"**).
- **Aderências Pleurais:** Deposição massiva de placas de fibrina espessas unindo a pleura visceral dos pulmões à pleura parietal costal.

\`\`\`mermaid
flowchart TD
    EstresseTransporte[Estresse de Transporte / Desmame / Poeira] --> Imunossupressao[Pico de Cortisol: Depressão da Imunidade Celular]
    Imunossupressao --> InfeccaoViral[Infecção Primária por BRSV, IBR e PI-3]
    InfeccaoViral --> DestruicaoCiliar[Destruição do Epitélio Ciliar & Aparelho Mucociliar]
    DestruicaoCiliar --> DescidaBacteriana[Descida de Mannheimia haemolytica para Alvéolos Cranioventrais]
    DescidaBacteriana --> LeucotoxinaLKT[Secreção de Leucotoxina LKT: Ligação ao CD11a/CD18]
    LeucotoxinaLKT --> LiseNeutrofilos[Lise de Neutrófilos & Liberação de Enzimas Lisossomais]
    LiseNeutrofilos --> Pleuropneumonia[Pleuropneumonia Fibrinonecrótica com Pulmão Marmorizado]
    Pleuropneumonia --> Metafilaxia[Estratégia de Metafilaxia com Macrolídeos de Longa Ação + AINE]
\`\`\``
      },
      {
        id: 'sec_large_lab5',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Lote 14 (Nelore x Angus)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo de Surto de BRD e Estratégia de Metafilaxia em Confinamento',
          patient: {
            name: 'Lote 14 (200 garrotes)',
            species: 'Bovino',
            breed: 'Cruzamento Industrial Nelore x Angus',
            age: '12 meses',
            weightKg: 320.0,
            habitatOrEnvironment: 'Currais de confinamento de engorda intensiva'
          },
          vitals: {
            heartRateBpm: 95,
            respiratoryRateRpm: 52,
            temperatureCelsius: 40.8,
            mucousMembranes: 'Congestas e avermelhadas',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Animais chegaram há 4 dias após transporte rodoviário de 16 horas. O tratador relata que cerca de 15% do lote encontra-se com cabeça baixa, orelhas caídas, secreção nasal serosa a mucopurulenta e tosse seca frequente em salva. Ao termômetro retal, 28 animais apresentam febre > 40.5°C.',
          exams: [
            {
              category: 'physical_exam',
              title: 'Ausculta Torácica e Escore Clínico de Wisconsin',
              findings: 'Avaliação clínica respiratória cranioventral metódica.',
              abnormalValues: [
                { parameter: 'Temperatura Retal Média dos Animais Sintomáticos', value: '40.8°C (Febre alta)', reference: '38.0 - 39.0°C', status: 'critical' },
                { parameter: 'Ausculta Pulmonar Cranioventral', value: 'Estertores crepitantes úmidos bilaterais com atrito pleural inspiratório', reference: 'Murmúrio vesicular limpo sem ruídos adventícios', status: 'critical' },
                { parameter: 'Frequência Respiratória', value: '52 rpm com respiração superficial laboriosa', reference: '15 - 35 rpm', status: 'high' },
                { parameter: 'Escore de Wisconsin BRD', value: 'Grau 8 (Positivo para broncopneumonia bacteriana)', reference: '< 4', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Surto agudo de BRD confirmado por Mannheimia haemolytica em animais recém-confinados de alto risco. Qual é o protocolo padrão-ouro de metafilaxia e analgesia?',
          decisionOptions: [
            {
              id: 'opt_dec_la5_1',
              label: 'Metafilaxia com Tulitromicina (2.5 mg/kg SC em dose única de depósito) para todo o lote de alto risco + AINE antipirético Flunixin Meglumine (2.2 mg/kg IV) nos animais com febre > 40.0°C + Piquete enfermaria com sombra e água de fácil acesso',
              description: 'A tulitromicina atinge níveis terapêuticos nos macrófagos e parênquima pulmonar por 14 dias com dose única, e o AINE reduz a febre e o dano inflamatório fibrinoso pulmonar.',
              isOptimal: true,
              consequenceText: 'Decisão zootécnica e médica padrão-ouro! A metafilaxia precoce aborta o ciclo infeccioso nos animais que já estavam no período de incubação, reduzindo a mortalidade em mais de 80% e evitando o refugo crônico por pulmão fibrótico.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Uso de macrolídeo de longa ação associado a anti-inflamatório pulmonar específico',
                mechanism: 'Inibição da síntese proteica ribossomal bacteriana e bloqueio da síntese de leucotoxina LKT',
                effect: 'Queda da febre para 38.8°C em 24h, desaparecimento da secreção purulenta e ganho de peso restabelecido',
                clinicalMeaning: 'Controle sanitário do lote com redução drástica da mortalidade e custos de refugo'
              }
            },
            {
              id: 'opt_dec_la5_2',
              label: 'Administrar apenas antipirético dipirona oral e esperar o lote criar imunidade natural sem antibióticos',
              description: 'Omissão de antimicrobianos diante de pleuropneumonia bacteriana fibrinonecrótica ativa.',
              isOptimal: false,
              consequenceText: 'Erro desastroso! A leucotoxina da Mannheimia causará necrose pulmonar irreversível e até 30% dos animais morrerão por insuficiência respiratória asfíxica em 72 horas.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Omissão terapêutica antibiótica em surto de Mannheimia haemolytica',
                mechanism: 'Ação desimpedida da leucotoxina LKT lisando o tecido pulmonar',
                effect: 'Consolidação fibrinonecrótica completa com perda da troca gasosa',
                clinicalMeaning: 'Mortalidade em massa e prejuízo zootécnico devastador'
              }
            },
            {
              id: 'opt_dec_la5_3',
              label: 'Tratar todos os animais com antibióticos orais dissolvidos na água de beber sem controle individual de dose',
              description: 'Uso de medicação em água em lote com animais deprimidos e anoréxicos.',
              isOptimal: false,
              consequenceText: 'Conduta ineficaz! Animais com febre alta e pneumonia reduzem dramaticamente o consumo de água, recebendo subdoses de antibiótico que selecionam bactérias multirresistentes sem tratar a doença.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Administração coletiva em água para animais com hipodipsia e anorexia',
                mechanism: 'Subdosagem grave e inconstante nos animais mais doentes',
                effect: 'Falha terapêutica e desenvolvimento de cepas de Mannheimia resistentes',
                clinicalMeaning: 'Agravamento do surto e morte dos garrotes'
              }
            }
          ],
          learningTakeaways: [
            'A Leucotoxina (LKT) da Mannheimia haemolytica lisa especificamente os macrófagos e neutrófilos de ruminantes via receptor CD11a/CD18.',
            'A lesão patognomônica da BRD aguda é a pleuropneumonia fibrinonecrótica cranioventral com aspecto de "pulmão marmorizado".',
            'A metafilaxia com macrolídeos de longa ação (Tulitromicina) trata em massa os animais incubando a bactéria, protegendo o rebanho.'
          ]
        }
      },
      {
        id: 'sec_large_anim_ex5',
        type: 'exercise',
        title: 'Exercício Clínico: Doença Respiratória Bovina e Metafilaxia',
        exerciseId: 'ex_large_anim_05'
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
  },
  {
    id: 'ex_wildlife_02',
    conceptId: 'concept_wildlife_reptile_mbd_potz',
    type: 'multiple_choice',
    prompt: 'Uma Iguana-verde (Iguana iguana) de 2 anos, mantida em cativeiro alimentada exclusivamente com alface americana e maçã, sem acesso a radiação solar direta ou lâmpadas UVB, é atendida com mandíbula flexível ("mandíbula de borracha"), tremores musculares intermitentes e fraturas ósseas patológicas em membros pélvicos. Além disso, necessita de antibioticoterapia. Qual é a fisiopatologia óssea e a via correta de administração do medicamento considerando a anatomia de répteis?',
    options: [
      {
        id: 'opt_wild_2_1',
        text: 'Doença Osteometabólica (MBD) por carência de UVB (bloqueando a síntese cutânea de vitamina D3 ativa) e relação Ca:P invertida na dieta, gerando hiperparatireoidismo nutricional secundário; os fármacos devem ser injetados no terço cranial (membros torácicos) para evitar o sistema porta-renal que depuraria o fármaco precocemente e sobrecarregaria os rins',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! Répteis necessitam de radiação UVB (290-315 nm) para fotoconversão cutânea de 7-desidrocolesterol em pré-vitamina D3. Sem isso e com dieta deficiente em cálcio (alface/maçã possuem Ca:P invertido < 1:1), o PTH é cronicamente estimulado a reabsorver osso, substituindo a matriz mineral por tecido fibroso (osteodistrofia fibrosa). Ademais, répteis possuem sistema porta-renal funcional: injeções aplicadas no terço caudal ou membros pélvicos drenam diretamente para a circulação tubular renal antes do coração, resultando em eliminação precoce de drogas e nefrotoxicidade direta.'
      },
      {
        id: 'opt_wild_2_2',
        text: 'Escorbuto por deficiência de vitamina C com proliferação osteoblástica excessiva; fármacos devem ser administrados na veia coccígea dorsal',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A patologia clássica em répteis privados de UVB e cálcio é a MBD (Doença Osteometabólica / osteodistrofia fibrosa), não escorbuto.'
      },
      {
        id: 'opt_wild_2_3',
        text: 'Hipovitaminose A com metaplasia escamosa tubular renal; injeções devem ser feitas nos membros posteriores para potencializar a ação renal',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Injeções em membros posteriores devem ser evitadas em répteis justamente devido ao sistema porta-renal, que expõe os rins a altas concentrações do fármaco e reduz sua biodisponibilidade sistêmica.'
      },
      {
        id: 'opt_wild_2_4',
        text: 'Raquitismo congênito incurável; o animal deve receber eutanásia imediata pois répteis não recuperam a densidade óssea',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A MBD tem excelente prognóstico se tratada precocemente com suporte de cálcio, radiação UVB adequada, adequação de POTZ e dieta balanceada.'
      }
    ]
  },
  {
    id: 'ex_wildlife_03',
    conceptId: 'concept_wildlife_chemical_restraint_anesthesia',
    type: 'multiple_choice',
    prompt: 'Durante a contenção química por tele-injeção com dardo em uma Onça-pintada (Panthera onca) de 85 kg em recinto de zoológico, utiliza-se a associação de agonista alfa-2 adrenérgico de alta potência (Dexmedetomidina) e anestésico dissociativo (Cetamina). Após a indução em decúbito, o termômetro esofágico aponta 41.2 °C (hipertermia severa por estresse de captura). Quais medidas imediatas devem ser tomadas e qual é o agente reversor específico a ser preparado para o despertar?',
    options: [
      {
        id: 'opt_wild_3_1',
        text: 'Resfriamento ativo imediato (água fria e compressas úmidas em regiões axilares e inguinais, infusão de cristaloides frios) para prevenir miopatia de captura e edema cerebral; preparo de Atipamezol intramuscular (reversor alfa-2 na proporção de 5 mg por cada 1 mg de dexmedetomidina)',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A temperatura de 41.2 °C em grandes felinos é uma emergência crítica associada à miopatia de captura e rabdomiólise com risco de necrose tubular renal por mioglobinúria. O resfriamento físico imediato deve cessar assim que a temperatura atingir 39.0 °C para evitar efeito rebote de hipotermia. O Atipamezol é o antagonista alfa-2 competitivo de escolha para reverter a dexmedetomidina com alta segurança.'
      },
      {
        id: 'opt_wild_3_2',
        text: 'Cobrir o animal com cobertores térmicos para estabilizar a temperatura e aplicar Naloxona para reverter a cetamina',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Cobrir o animal agravaria a hipertermia fatal. Além disso, Naloxona reverte opioides, não cetamina (que não possui reversor farmacológico específico).'
      },
      {
        id: 'opt_wild_3_3',
        text: 'Aplicar sulfato de atropina em alta dose para elevar a frequência cardíaca e induzir sudorese',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Felídeos não transpiram de forma significativa pela pele para termorregulação. A atropina agravaria a taquicardia e o consumo miocárdico de oxigênio sob hipertermia.'
      },
      {
        id: 'opt_wild_3_4',
        text: 'Administrar dipirona endovenosa e aguardar 4 horas sem manipular o felino',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A hipertermia por captura/estresse decorre de hipermetabolismo muscular agudo, e não de elevação do ponto de ajuste hipotalâmico por febre infecciosa; exige resfriamento físico ativo imediato.'
      }
    ]
  },
  {
    id: 'ex_wildlife_04',
    conceptId: 'concept_wildlife_avian_clinical_medicine',
    type: 'multiple_choice',
    prompt: 'Um Papagaio-verdadeiro (Amazona aestiva) de 14 anos é trazido ao hospital com dispneia (cauda oscilante - "tail-bobbing"), letargia profunda e uratos cloacais com coloração verde-esmeralda intensa brilhante. A radiografia revela acentuada hepatomegalia e esplenomegalia. O teste de PCR de swab cloacal confirma Chlamydia psittaci. Qual é o mecanismo da cor verde das fezes e a conduta terapêutica canônica quanto à droga e duração do tratamento?',
    options: [
      {
        id: 'opt_wild_4_1',
        text: 'A cor verde decorre de biliverdinúria maciça gerada pela necrose hepatocelular (aves excretam biliverdina e não bilirrubina); a conduta exige Doxiciclina por 45 dias contínuos devido ao ciclo bifásico da bactéria (corpos elementares extracelulares e corpos reticulares intracelulares)',
        isCorrect: true,
        pedagogicalFeedback: 'Excelente raciocínio clínico! Aves não possuem a enzima biliverdina redutase em quantidades apreciáveis; portanto, seu principal pigmento biliar é a biliverdina verde. Hepatites agudas (como na clamidiose) provocam extravasamento de biliverdina na circulação que é filtrada nos rins e eliminada nos uratos (biliverdinúria verde-esmeralda). O tratamento padrão internacional (CDC e OIE) exige 45 dias de Doxiciclina para cobrir todos os ciclos de replicação dos corpos reticulares e erradicar a infecção latente.'
      },
      {
        id: 'opt_wild_4_2',
        text: 'A cor verde decorre de hemólise intravascular por deficiência de glicose-6-fosfato; exige Sulfametoxazol-Trimetoprima por 5 dias',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A cor verde nos uratos de aves indica doença hepática com liberação de biliverdina, e a Chlamydia psittaci requer doxiciclina prolongada (45 dias).'
      },
      {
        id: 'opt_wild_4_3',
        text: 'A coloração verde é normal em psitacídeos herbívoros; deve-se apenas suplementar vitamina C por 3 dias',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Os uratos normais de aves são brancos como giz. Uratos verdes são sinal patognomônico de lesão hepática grave.'
      },
      {
        id: 'opt_wild_4_4',
        text: 'Trata-se de intoxicação por chumbo; deve-se administrar EDTA de cálcio sem antibióticos',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Embora a intoxicação por chumbo cause biliverdinúria, o caso teve confirmação molecular de Chlamydia psittaci por PCR.'
      }
    ]
  },
  {
    id: 'ex_wildlife_05',
    conceptId: 'concept_wildlife_rehab_conservation_medicine',
    type: 'multiple_choice',
    prompt: 'Em um Centro de Triagem de Animais Silvestres (CETAS), um lote de psitacídeos apreendidos do tráfico ilegal concluiu o período de quarentena sanitária. Antes de autorizar a soltura (reintrodução na natureza), qual conjunto de critérios técnicos e legais deve ser obrigatoriamente cumprido segundo as normas do IBAMA/ICMBio e os preceitos da Medicina da Conservação?',
    options: [
      {
        id: 'opt_wild_5_1',
        text: 'Comprovação de ausência de patógenos zoonóticos e de relevância ecológica (PCR negativo para Bornavírus, Circovírus da PBFD e Chlamydia), teste de aptidão de voo em recinto de aclimatação, avaliação comportamental de desumanização (aversão a humanos / ausência de imprinting), anilhamento oficial (CEMAVE) e soltura branda (soft release) em área de distribuição geográfica original autorizada pelo SISBIO',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! A soltura de fauna silvestre é um processo biológico rigoroso: soltar animais doentes pode dizimar populações nativas com epidemias (ex: PBFD); animais com imprinting humano buscam humanos na natureza e são mortos ou recapturados; o anilhamento oficial permite monitorar a sobrevivência e a aprovação no SISBIO garante a segurança ecológica e genética.'
      },
      {
        id: 'opt_wild_5_2',
        text: 'Soltura imediata no parque urbano mais próximo assim que o animal começar a comer sementes sozinho, sem necessidade de exames',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A soltura de animais sem triagem sanitária e em áreas impróprias configura crime ambiental e risco grave de introdução de epizootias.'
      },
      {
        id: 'opt_wild_5_3',
        text: 'Corte das penas de voo da asa direita para que o animal permaneça no chão durante a primeira semana no mato',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Cortar penas de voo condena a ave à predação imediata e impede a fuga e a busca por alimentos na natureza.'
      },
      {
        id: 'opt_wild_5_4',
        text: 'Manter contato diário carinhoso com os tratadores até a soltura para que o animal seja dócil no meio selvagem',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Animais para soltura devem ter contato humano estritamente minimizado para evitar imprinting e humanização.'
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
    estimatedMinutes: 14,
    order: 1,
    concepts: ['concept_wildlife_handling_anesthesia_zoo'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_wildlife_th1',
        type: 'theory',
        title: 'A Maravilha do Sistema Respiratório Aviário & Desafios Anestésicos',
        contentMarkdown: `# Aula Universitária: Particularidades Anatômicas & Anestesiologia de Aves

> 📖 Referências Canônicas: Fowler, M. E. & Miller, R. E. *Zoo and Wild Animal Medicine*, 8th ed. Elsevier; Mader, D. R. *Reptile and Amphibian Medicine and Surgery*, Saunders; Ritchie, B. W., Harrison, G. J. & Harrison, L. R. *Avian Medicine: Principles and Application*.

### Fisiologia Respiratória Comparada: O Fluxo Unidirecional Mais Eficiente da Natureza

As aves não possuem pulmões elásticos dotados de alvéolos que se expandem como os dos mamíferos:
* **Pulmões Rígidos com Parabrônquios:** Estruturas esponjosas fixas na parede dorsal da cavidade celomática. As trocas gasosas ocorrem em capilares aéreos com fluxo sanguíneo contracorrente cruzado (*cross-current flow*), permitindo extração de oxigênio mesmo sob baixa pressão parcial atmosférica.
* **Sacos Aéreos (Cervicais, Clavicular, Torácicos Cranias/Caudais e Abdominais):** Paredes delgadas, avasculares e sem capacidade de troca gasosa. Funcionam como foles dinâmicos que impulsionam o ar em fluxo contínuo e unidirecional pelos pulmões ao longo de **dois ciclos completos de inspiração e expiração**.

\`\`\`mermaid
flowchart TD
  subgraph Ciclo_1 [Ciclo Respiratório 1]
    A[Inspiração 1: Ar fresco via traqueia] --> B[Sacos Aéreos Caudais]
    B -->|Expiração 1| C[Parabrônquios Pulmonares: Troca Gasosa Contracorrente]
  end
  subgraph Ciclo_2 [Ciclo Respiratório 2]
    C -->|Inspiração 2| D[Sacos Aéreos Craniais]
    D -->|Expiração 2| E[Traqueia & Exteriorização do Ar com CO2]
  end
  style C fill:#dcfce7,stroke:#16a34a,stroke-width:2px
\`\`\`

---

### Os 3 Mandamentos Anatômicos da Cirurgia e Anestesia Aviária

1. **Ausência de Diafragma & Dependência da Quilha:** As aves possuem uma cavidade única (**celoma**). A ventilação pulmonar depende exclusivamente da excursão livre do esterno (quilha) impulsionada pelos músculos intercostais e peitorais. Conter uma ave apertando o tórax impede o movimento da quilha e causa **asfixia mecânica em menos de 60 segundos**.
2. **Anéis Traqueais Completos em 360°:** Diferente de cães e gatos (cujos anéis cartilaginosos traqueais são em forma de C com membrana dorsal flexível), a traqueia aviária é formada por anéis fechados e rígidos. O uso de sondas traqueais com balonete (cuff) inflado é **formalmente contraindicado**, pois a pressão do cuff contra anéis rígidos provoca isquemia da mucosa, necrose cartilaginosa e estenose traqueal pós-operatória obstrutiva irreversível.
3. **Limite de Pressão Inspiratória de Pico ($PIP < 12-15\\text{ cmH}_2\\text{O}$):** Romper um saco aéreo durante a ventilação manual vigorosa gera enfisema subcutâneo agudo maciço e morte imediata por colapso ventilatório.

---

### Termorregulação & Metabolismo Ultrarrápido

* Aves mantêm temperatura corporal basal entre **$41.0^\\circ\\text{C}$ e $42.5^\\circ\\text{C}$**.
* Devido à sua alta relação superfície/volume, perdem calor rapidamente sob anestesia geral por radiação e convecção. O suporte térmico ativo (colchão de ar aquecido ou manta térmica a $39-40^\\circ\\text{C}$) é obrigatório durante todo o procedimento.
* O jejum pré-operatório em pequenos psitacídeos deve ser curto (no máximo **2 a 4 horas**), prevenindo hipoglicemias graves e esvaziando o inglúvio (papo) para evitar broncoaspiração na indução.`
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
            age: 'Jovem adulto (estimado 2 anos)',
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
          anamnesis: 'Tucano resgatado com fratura oblíqua da maxila rostral (bico superior fraturado com sangramento ativo da derme interna ricamente vascularizada). Necessita de anestesia geral inalatória para hemostasia e fixação cirúrgica com pinos ortopédicos finos e resina odontológica autopolimerizável.',
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
  },
  {
    id: 'lesson_wildlife_02_reptile_mbd_potz',
    moduleId: 'mod_wildlife_clinic',
    title: 'Clínica de Silvestres: Ectotermia, POTZ & Doença Osteometabólica em Répteis',
    shortDescription: 'Faixa de Temperatura Ótima Preferida (POTZ), sistema porta-renal, balanço Ca:P e fisiopatologia da osteodistrofia fibrosa (MBD).',
    estimatedMinutes: 15,
    order: 2,
    concepts: ['concept_wildlife_reptile_mbd_potz'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_wildlife_th2',
        type: 'theory',
        title: 'Fisiologia de Répteis & A Patogênese da Doença Osteometabólica (MBD)',
        contentMarkdown: `# Fisiologia de Répteis & Desordens Ósseas Metabólicas

> 📖 Referências Canônicas: Mader, D. R. *Reptile Medicine and Surgery*, 2nd ed. Saunders Elsevier; Divers, S. J. & Stahl, S. J. *Mader's Reptile and Amphibian Medicine and Surgery*, 3rd ed. Elsevier; Wilkinson, S. L. *Reptile Wellness and Nutritional Disorders*. Vet Clin North Am Exot Anim Pract.

### Ectotermia & Zona de Temperatura Ótima Preferida (POTZ)

Os répteis são animais **ectotérmicos e poiquilotérmicos**, dependendo inteiramente de fontes externas de calor para regular sua temperatura corpórea:
* **POTZ (Preferred Optimum Temperature Zone):** Faixa térmica específica de cada espécie (ex: $28^\\circ\\text{C}$ a $34^\\circ\\text{C}$ para iguanas verdes) na qual o sistema imunológico, a motilidade gastrintestinal, as enzimas digestórias e a taxa de cicatrização operam em eficiência máxima.
* **Gradiente Térmico:** O terrário deve obrigatoriamente oferecer um gradiente térmico com um ponto quente (*basking spot* com lâmpada infravermelha ou cerâmica) e uma zona fria, permitindo termorregulação comportamental.
* **Impacto Farmacológico:** A meia-vida e depuração de antimicrobianos (ex: enrofloxacino, ceftazidima) são temperatura-dependentes; manter o réptil abaixo da sua POTZ causa falência terapêutica ou toxicidade acumulativa.

---

### O Sistema Porta-Renal & Vias de Injeção

Répteis e aves possuem um sistema venoso porta-renal funcional:
* O sangue proveniente dos membros pélvicos e da cauda penetra na circulação venosa portal renal antes de retornar ao coração via veia cava caudal.
* Fármacos nefrotóxicos (aminoglicosídeos como amicacina e gentamicina) ou substâncias excretadas por secreção tubular ativa alcançam o tecido renal em altas concentrações se injetados caudalmente, aumentando exponencialmente o risco de necrose tubular aguda ou eliminação prematura sem efeito terapêutico sistêmico.
* **Regra de Ouro:** Todas as injeções intramusculares e subcutâneas em quelônios, lagartos e serpentes devem ser realizadas no **terço cranial do corpo** (músculos da musculatura torácica anterior ou membros anteriores).

---

### Fisiopatologia da Doença Osteometabólica (MBD / Osteodistrofia Fibrosa)

A **MBD (Metabolic Bone Disease)** é a enfermidade nutricional mais prevalente em répteis herbívoros mantidos como pets (especialmente iguanas, dragões-barbudos e jabutis):

\`\`\`mermaid
flowchart TD
  A[Falta de Radiação UVB 290-315 nm] --> B[Bloqueio da conversão de 7-desidrocolesterol em Vitamina D3 ativa]
  C[Dieta com Ca:P Invertido < 1:1 ex: alface, maçã, sementes] --> D[Hipocalcemia Primária]
  B --> D
  D --> E[Estímulo Crônico da Paratireoide: Hiperparatireoidismo Secundário]
  E --> F[Elevação Maciça de Paratormônio PTH]
  F --> G[Reabsorção Osteoclástica Severa de Cálcio dos Ossos]
  G --> H[Substituição da Matriz Óssea Mineral por Tecido Fibroso Conjuntivo]
  H --> I[Osteodistrofia Fibrosa: Mandíbula de Borracha, Fraturas em Galho Verde & Tetania]
  style I fill:#fee2e2,stroke:#ef4444,stroke-width:2px
\`\`\`

1. **A Função da Radiação UVB (290-315 nm):** Répteis herbívoros não absorvem vitamina D3 dietética eficientemente; sintetizam colecalciferol na derme mediante irradiação direta de luz UVB. Janelas de vidro ou placas acrílicas filtram 100% da radiação UVB!
2. **Razão Cálcio:Fósforo (Ca:P):** A dieta adequada requer relação Ca:P entre **2:1 e 3:1**. Alimentos como alface americana, maçã e tenébrios possuem fósforo em excesso e cálcio quase nulo (Ca:P de 1:3 a 1:10), ligando-se ao cálcio no lúmen intestinal e impedindo sua absorção.
3. **Quadro Clínico:** Hipocalcemia iônica aguda desencadeia fasciculações e tremores musculares finos, espasmos nos membros, mandíbula flexível que não apreende alimentos (*rubber jaw*), paresia de membros pélvicos, deformidades da carapaça em quelônios (carapaça em sela) e retenção distócica de ovos em fêmeas.`
      },
      {
        id: 'sec_wildlife_lab2',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Igor (Iguana-verde)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo de Osteodistrofia Fibrosa Grave e Tetania Hipocalcêmica em Iguana iguana',
          patient: {
            name: 'Igor',
            species: 'Reptil (Squamata: Iguanidae)',
            breed: 'Iguana-verde (Iguana iguana)',
            age: '2 anos',
            weightKg: 1.8,
            habitatOrEnvironment: 'Terrário de vidro doméstico, sem lâmpada UVB, sem aquecimento com termostato'
          },
          vitals: {
            heartRateBpm: 42,
            respiratoryRateRpm: 8,
            temperatureCelsius: 24.5,
            mucousMembranes: 'Pálidas e secas',
            capillaryRefillTimeSec: 2.5
          },
          anamnesis: 'Iguana mantida em ambiente frio (24.5°C) alimentada exclusivamente com alface americana, maçã e tomate. Tutor relata que há duas semanas o animal parou de subir nos galhos, arrasta as patas traseiras, apresenta tremores espasmódicos e sua mandíbula inferior amoleceu a ponto de dobrar durante a alimentação.',
          exams: [
            {
              category: 'physical_exam',
              title: 'Exame Clínico e Ortopédico de Répteis',
              findings: 'Espessamento fibroso bilateral de mandíbulas, dor à palpação de ossos longos e tetania muscular generalizada.',
              abnormalValues: [
                { parameter: 'Temperatura Corporal', value: '24.5 °C (Abaixo da POTZ)', reference: '29.0 - 35.0 °C', status: 'critical' },
                { parameter: 'Cálcio Total Sérico', value: '5.2 mg/dL', reference: '9.0 - 13.0 mg/dL', status: 'critical' },
                { parameter: 'Cálcio Iônico', value: '0.62 mmol/L', reference: '1.10 - 1.45 mmol/L', status: 'critical' },
                { parameter: 'Fósforo Sérico', value: '9.8 mg/dL (Hiperfosfatemia)', reference: '3.0 - 5.5 mg/dL', status: 'high' }
              ]
            },
            {
              category: 'imaging',
              title: 'Radiografia de Corpo Inteiro (Projeção Dorsoventral e Laterolateral)',
              findings: 'Grave radiotransparência óssea sistêmica (densidade similar aos tecidos moles). Fraturas patológicas em galho verde bilaterais em fêmures e espessamento proliferativo de tecido conjuntivo periosteal.',
              abnormalValues: [
                { parameter: 'Radiopacidade Cortical Óssea', value: 'Quase nula (cortical difusa)', reference: 'Cortical densa e radiopaca', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Qual é o plano terapêutico emergencial e corretivo de suporte para estabilizar a tetania e reverter o hiperparatireoidismo nutricional?',
          decisionOptions: [
            {
              id: 'opt_dec_rep_1',
              label: 'Adequar gradiente térmico para a POTZ (29-33°C) + Gluconato de Cálcio a 10% (100 mg/kg SC em terço cranial) + Instalar lâmpada UVB 5.0 a 30 cm sem vidro + Suplementação oral de Carbonato de Cálcio',
              description: 'Aquecer para reativar o metabolismo, estancar as convulsões com cálcio injetável em membros anteriores e instituir fotobiogênese de vitamina D3.',
              isOptimal: true,
              consequenceText: 'Excelente conduta médica! Jamais ministre cálcio sem antes atingir a POTZ, pois répteis hipotérmicos não realizam transporte celular de íons. A via cranial protege contra o sistema porta-renal, e a lâmpada UVB direta restabelece a absorção fisiológica de cálcio pelo enterócito.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Restauração da POTZ, infusão de cálcio em terço cranial e ativação de síntese de colecalciferol via UVB',
                mechanism: 'Normalização do cálcio iônico extracelular e inibição da secreção patológica de PTH',
                effect: 'Cessação imediata das tetanias musculares e início da remineralização osteoblástica',
                clinicalMeaning: 'Recuperação progressiva com consolidação das fraturas em 6 a 8 semanas'
              }
            },
            {
              id: 'opt_dec_rep_2',
              label: 'Administrar Vitamina D3 concentrada injetável intramuscular em alta dose e manter na temperatura ambiente de 24°C',
              description: 'Injetar megadose de vitamina D3 comercial para mamíferos.',
              isOptimal: false,
              consequenceText: 'Erro grave com desfecho potencialmente letal! Megadoses parenterais de vitamina D3 em répteis causam toxicidade iatrogênica massiva, resultando em mineralização metastática de grandes vasos e nefrocalcinose renal fatal em poucos dias.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Hipervitaminose D3 exógena iatrogênica em réptil hipotérmico',
                mechanism: 'Hipercalcemia aguda fulminante e precipitação tecidual de fosfato de cálcio',
                effect: 'Calcificação distrófica da aorta, rins e parênquima pulmonar',
                clinicalMeaning: 'Óbito por falência renal e parada cardíaca refratária'
              }
            },
            {
              id: 'opt_dec_rep_3',
              label: 'Colocar o animal sob luz solar através de uma janela de vidro fechada e aplicar antibiótico no membro pélvico',
              description: 'Aproveitar a luz solar filtrada pelo vidro da janela.',
              isOptimal: false,
              consequenceText: 'Inadmissível tecnicamente. O vidro comum filtra 100% dos comprimentos de onda UVB (290-315 nm), impedindo a síntese de vitamina D3 e criando efeito estufa letal. Além disso, injeções em membros pélvicos drenam para o sistema porta-renal.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Ausência de UVB efetiva e administração de drogas em território de circulação porta-renal',
                mechanism: 'Persistência do hiperparatireoidismo e sobrecarga tóxica do parênquima renal',
                effect: 'Piora contínua da desmineralização óssea',
                clinicalMeaning: 'Fraturas irredutíveis e colapso motor definitivo'
              }
            }
          ],
          learningTakeaways: [
            'A POTZ é mandatória: nenhum medicamento ou nutriente atua em répteis fora de sua faixa térmica preferencial.',
            'Injeções devem ser feitas sempre no terço cranial para evitar o sistema porta-renal.',
            'A luz UVB (290-315 nm) não atravessa vidro nem plástico; lâmpadas de terrário devem ter acesso direto ao animal.'
          ]
        }
      },
      {
        id: 'sec_wildlife_ex2',
        type: 'exercise',
        title: 'Exercício Clínico: Ectotermia e Doença Osteometabólica em Répteis',
        exerciseId: 'ex_wildlife_02'
      }
    ]
  },
  {
    id: 'lesson_wildlife_03_chemical_restraint',
    moduleId: 'mod_wildlife_clinic',
    title: 'Medicina de Zoológico: Contenção Química & Anestesia de Grandes Felídeos',
    shortDescription: 'Sistemas de tele-injeção, farmacologia alfa-2 + dissociativos, controle de hipertermia por captura e reversão farmacológica.',
    estimatedMinutes: 15,
    order: 3,
    concepts: ['concept_wildlife_chemical_restraint_anesthesia'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_wildlife_th3',
        type: 'theory',
        title: 'Imobilização Química à Distância & Manejo da Miopatia de Captura',
        contentMarkdown: `# Imobilização Química de Grandes Carnívoros & Prevenção de Acidentes

> 📖 Referências Canônicas: West, G., Heard, D. & Caulkett, N. *Zoo Animal and Wildlife Immobilization and Anesthesia*, 2nd ed. Wiley-Blackwell; Kreeger, T. J. & Arnemo, J. M. *Handbook of Wildlife Chemical Immobilization*, 5th ed.

### Sistemas de Tele-Injeção e Equipamentos de Campo

A contenção química de megafauna e grandes predadores selvagens (onças, pumas, cervídeos, antílopes) exige equipamento balístico de alta precisão:
* **Zarabatanas (Blowpipes):** Ideais para distâncias curtas ($< 5\\text{ m}$) e recintos fechados. Utilizam dardos leves impulsionados pelo sopro, com impacto cinético suave e mínimo trauma tecidual.
* **Rifles e Pistolas de Ar Comprimido / $\\text{CO}_2$:** Indicados para distâncias médias a longas ($5\\text{ a }30\\text{ m}$). Exigem ajuste criterioso da pressão manométrica (pressão excessiva causa fratura óssea ou perfuração visceral; pressão insuficiente gera queda prematura do dardo).
* **Anatomia dos Dardos:** Agulhas com colarinho de retenção (*gelatin collar* ou farpa de trava) que retêm a agulha no músculo até o disparo do gás expansor e liberação completa do anestésico.

\`\`\`mermaid
flowchart LR
  A[Dardo Atinge Glúteo/Ombro] --> B[Gás Injetor Dispara Embolo do Dardo]
  B --> C[Injeção Intramuscular Rápida]
  C --> D[Absorção Sistêmica Alfa-2 + Cetamina]
  D --> E[Decúbito Lateral em 5 a 10 Minutos]
  E --> F[Monitoramento Imediato de FC, FR, Temp e Spo2]
  style E fill:#dcfce7,stroke:#16a34a,stroke-width:2px
\`\`\`

---

### Farmacologia Anestésica para Carnívoros Selvagens

1. **Associação Alfa-2 Adrenérgico de Alta Potência + Dissociativo:**
   * **Dexmedetomidina ($0.02-0.04\\text{ mg/kg}$) + Cetamina ($3-5\\text{ mg/kg}$):** Promove indução rápida, excelente relaxamento muscular, analgesia somática e estabilidade hemodinâmica relativa.
   * **Tiletamina + Zolazepam (Zoletil / Telazol - $2-4\\text{ mg/kg}$):** Associação pronta muito utilizada em felídeos e ursídeos de grande porte devido ao pequeno volume de injeção requerido.
2. **Reversão com Antagonista Alfa-2 Específico:**
   * **Atipamezol:** Reversor competitivo de altíssima afinidade. Dose: **$5\\text{ mg}$ de Atipamezol para cada $1\\text{ mg}$ de Dexmedetomidina** ministrada. Deve ser aplicado por via intramuscular ao término do procedimento, promovendo despertar suave em 5 a 10 minutos.

---

### A Catástrofe da Miopatia de Captura & Hipertermia Maligna

O maior risco em contenções de campo é a **Miopatia de Captura (Síndrome do Estresse de Contenção)**:
* O estresse extremo e a corrida antes da indução disparam liberação maciça de catecolaminas e contrações musculares anaeróbias contínuas.
* Isso gera **hipertermia severa ($T > 40.5-41.5^\\circ\\text{C}$)**, acidose lática sistêmica profunda e rabdomiólise com liberação de mioglobina e potássio na corrente sanguínea.
* A mioglobina precipita nos túbulos renais sob pH ácido, causando **necrose tubular aguda anúrica**, hipercalemia fatal e parada cardíaca tardia (24 a 72 horas pós-soltura).
* **Conduta Imediata:** Resfriamento evaporativo contínuo com água corrente e álcool em virilhas/axilas, fluidoterapia com cristaloides resfriados e infusão de bicarbonato de sódio para alcalinizar a urina se houver acidose documentada.`
      },
      {
        id: 'sec_wildlife_lab3',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Thor (Onça-pintada)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Contenção Química e Manejo de Hipertermia Aguda em Panthera onca',
          patient: {
            name: 'Thor',
            species: 'Grande Felídeo Neotropical',
            breed: 'Onça-pintada (Panthera onca)',
            age: 'Macho adulto (7 anos)',
            weightKg: 85,
            habitatOrEnvironment: 'Recinto de exibição de zoológico municipal'
          },
          vitals: {
            heartRateBpm: 68,
            respiratoryRateRpm: 14,
            temperatureCelsius: 41.4,
            mucousMembranes: 'Congestas e ressecadas',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Animal agitado devido à dor por fratura do canino superior direito com fístula infraorbitária purulenta ativa. Durante a aproximação dos tratadores, o animal correu pelo recinto por 15 minutos antes de ser atingido por tele-injeção de dardo no membro posterior com Dexmedetomidina (3.0 mg) + Cetamina (300 mg). Entrou em decúbito lateral após 7 minutos, mas apresenta respiração ofegante e calor extremo ao toque.',
          exams: [
            {
              category: 'physical_exam',
              title: 'Exame Clínico sob Contenção Química',
              findings: 'Decúbito lateral estável, ausência de reflexo palpebral, pulso femoral amplo.',
              abnormalValues: [
                { parameter: 'Temperatura Retal', value: '41.4 °C (Hipertermia severa de captura)', reference: '38.0 - 39.2 °C', status: 'critical' },
                { parameter: 'Saturação de Oxigênio (SpO2)', value: '88% em ar ambiente', reference: '> 95%', status: 'low' },
                { parameter: 'Glicemia', value: '185 mg/dL (Hiperglicemia por estresse)', reference: '75 - 120 mg/dL', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Com temperatura retal de 41.4 °C e SpO2 de 88%, qual é a conduta emergencial imediata antes de iniciar o procedimento odontológico?',
          decisionOptions: [
            {
              id: 'opt_dec_carn_1',
              label: 'Suplementação de O2 a 100% por sonda nasal + Resfriamento ativo com água corrente/álcool nas axilas e bolsa de gelo na nuca + Fluidoterapia com Ringer Lactato gelado IV até temperatura retal atingir 39.0°C',
              description: 'Combater a hipóxia tecidual e abortar a cascata de hipertermia e miopatia de captura imediatamente.',
              isOptimal: true,
              consequenceText: 'Excelente decisão médica! A hipertermia acima de 41°C induz degeneração neuronal e desnaturação proteica miocárdica. O resfriamento físico imediato resgata o felino do risco iminente de colapso circulatório. A suspensão do resfriamento ao atingir 39.0°C evita a hipotermia rebote.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Oxigenioterapia imediata e resfriamento físico ativo com fluidoterapia intravenosa resfriada',
                mechanism: 'Aumento da entrega tecidual de oxigênio e dissipação do calor muscular acumulado',
                effect: 'Queda progressiva da temperatura para 38.8 °C em 20 minutos e estabilização metabólica',
                clinicalMeaning: 'Prevenção total de mioglobinúria e necrose tubular renal'
              }
            },
            {
              id: 'opt_dec_carn_2',
              label: 'Aplicar imediatamente Atipamezol endovenoso para acordar a onça no meio do recinto',
              description: 'Reverter o anestésico para que ela se levante e dissipe o calor andando.',
              isOptimal: false,
              consequenceText: 'Desastre operacional com risco de morte! Reverter uma onça de 85 kg dentro de um recinto aberto acordará um carnívoro atáxico e agressivo, impedindo qualquer intervenção e levando a equipe a risco extremo de ataque.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Reversão intempestiva de alfa-2 em grande felino hipertermico solto',
                mechanism: 'Ativação simpática aguda e colapso físico descontrolado',
                effect: 'Piora catastrófica da rabdomiólise e perda do controle da contenção',
                clinicalMeaning: 'Miopatia de captura fulminante e acidente gravíssimo de trabalho'
              }
            },
            {
              id: 'opt_dec_carn_3',
              label: 'Prosseguir imediatamente com a extração cirúrgica do dente sem intervir na temperatura',
              description: 'Ignorar a temperatura de 41.4°C para terminar o procedimento odontológico mais rápido.',
              isOptimal: false,
              consequenceText: 'Conduta negligente. A manutenção da temperatura em 41.4°C por mais de 30 minutos resulta em coagulação intravascular disseminada (CIVD), edema pulmonar agudo e parada cardiorrespiratória irreversível.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Inação diante de hipertermia maligna por estresse de captura',
                mechanism: 'Desnaturação enzimática sistêmica e lise de miofibrilas',
                effect: 'Edema cerebral e colapso circulatório transanestésico',
                clinicalMeaning: 'Morte encefálica da onça na mesa de procedimentos'
              }
            }
          ],
          learningTakeaways: [
            'A tele-injeção em animais selvagens exige planejamento balístico e minimização do tempo de estresse de perseguição.',
            'A hipertermia acima de 40.5°C é uma emergência crítica: resfrie ativamente até 39.0°C e suspenda para evitar hipotermia rebote.',
            'O Atipamezol reverte a dexmedetomidina na proporção de 5:1 (mg) por via intramuscular ao final de todo o procedimento.'
          ]
        }
      },
      {
        id: 'sec_wildlife_ex3',
        type: 'exercise',
        title: 'Exercício Clínico: Contenção Química e Hipertermia em Fauna Selvagem',
        exerciseId: 'ex_wildlife_03'
      }
    ]
  },
  {
    id: 'lesson_wildlife_04_avian_medicine',
    moduleId: 'mod_wildlife_clinic',
    title: 'Clínica Médica Aviária: PDD (Bornavírus), Clamidiose & Aspergilose',
    shortDescription: 'Patologia infecciosa em psitacídeos: ganglioneurite por bornavírus, clamidiose zoonótica e aspergilose de sacos aéreos.',
    estimatedMinutes: 15,
    order: 4,
    concepts: ['concept_wildlife_avian_clinical_medicine'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_wildlife_th4',
        type: 'theory',
        title: 'As 3 Grandes Patologias Infecciosas da Rotina de Psitacídeos',
        contentMarkdown: `# Doenças Infecciosas Críticas em Psitacídeos

> 📖 Referências Canônicas: Ritchie, B. W. *Avian Viruses: Function and Control*, Wingers Pub; Greene, C. E. *Infectious Diseases of the Dog and Cat*, 4th ed.; OIE / WOAH *Terrestrial Manual: Avian Chlamydiosis*; Samour, J. *Avian Medicine*, 3rd ed. Elsevier.

### 1. Síndrome da Dilatação Proventricular (PDD / Bornavírus Aviário - PaBV)

A PDD é uma afecção inflamatória e imunomediada devastadora que afeta psitacídeos em todo o mundo:
* **Etiologia:** Bornavírus Aviário (PaBV), que apresenta neurotropismo seletivo para os plexos nervosos mioentéricos autônomos (plexos de Meissner e Auerbach).
* **Fisiopatologia:** Infiltração linfoplasmocítica não purulenta dos gânglios nervosos do trato digestório (especialmente no proventrículo e ventrículo/moela), bloqueando a contratilidade neuromuscular.
* **Manifestações Clínicas:** Proventrículo perde a capacidade motora, acumulando alimentos e dilatando flacidamente de forma maciça. A ave passa a eliminar sementes e grãos inteiros não digeridos nas fezes, sofre regurgitação crônica, perde peso vertiginosamente (atrofia do músculo peitoral - "peito em quilha") e pode apresentar ataxia, tremores e convulsões por encefalite secundária.
* **Diagnóstico e Manejo:** Radiografia contrastada com bário revelando proventrículo aumentado ocupando mais de $80\\%$ da cavidade celomática; biópsia de inglúvio ou PCR em penas e fezes. Tratamento com dietas extrusadas pastosas e inibidores seletivos de COX-2 (Celecoxibe $10-20\\text{ mg/kg}$ a cada 12 horas) para frear a ganglioneurite.

---

### 2. Clamidiose Aviária (*Chlamydia psittaci* / Ornitose / Febre dos Papagaios)

Zoonose bacteriana obrigatória intracelular de notificação compulsória:
* **Ciclo Biológico Bifásico:**
  1. **Corpo Elementar (CE):** Forma extracelular metabolicamente inativa, com parede rígida, altamente resistente no ambiente e responsável pela transmissão por aerossóis de fezes secas ou secreções oculonasais.
  2. **Corpo Reticular (CR):** Forma intracelular metabolicamente ativa que se multiplica por fissão binária dentro dos fagossomos das células do hospedeiro, evadindo a destruição lisossomal.
* **Patogenia & Sinal Patognomônico:** Tropismo pelo sistema reticuloendotelial e epitélios. Causa esplenomegalia marcante e hepatite necrotizante aguda. Aves não possuem biliverdina redutase; portanto, a colestase e necrose hepática liberam **biliverdina** na corrente sanguínea, que é filtrada nos rins e excretada nos uratos, gerando o sinal clássico de **uratos verde-esmeralda brilhantes**.
* **Conduta Terapêutica:** **Doxiciclina por 45 dias contínuos** (via oral ou ração medicada) para atingir os corpos reticulares que emergem de forma assincrônica.

\`\`\`mermaid
flowchart TD
  A[Inalação de Corpos Elementares de Chlamydia psittaci] --> B[Invasão de Macrófagos e Células Epiteliais Celomáticas]
  B --> C[Replicação Intracelular como Corpos Reticulares]
  C --> D[Hepatite Necrotizante Multifocal Aguda]
  D --> E[Liberação Maciça de Pigmento Biliverdina na Circulação]
  E --> F[Filtração Renal & Deposição nos Uratos Cloacais]
  F --> G[Uratos Verde-Esmeralda Patognomônicos + Dispneia e Letargia]
  style G fill:#dcfce7,stroke:#16a34a,stroke-width:2px
\`\`\`

---

### 3. Aspergilose de Sacos Aéreos (*Aspergillus fumigatus*)

* Infecção fúngica granulomatosa oportunista facilitada por hipovitaminose A crônica (dieta exclusiva de sementes de girassol, que destrói o epitélio respiratório por metaplasia escamosa e perda do tapete mucociliar).
* Os esporos colonizam os sacos aéreos caudais e a bifurcação da traqueia/siringe, formando placas caseosas fúngicas e granulomas.
* A ave apresenta alteração do canto (afonia siringeal), respiração bico-aberto e oscilação vertical contínua da cauda durante a respiração (*tail-bobbing*). Tratamento com Voriconazol ($12-18\\text{ mg/kg}$ a cada 12 horas) ou Itraconazol e nebulização com Anfotericina B.`
      },
      {
        id: 'sec_wildlife_lab4',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Frederico (Papagaio-verdadeiro)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Abordagem Diagnóstica e Zoonótica de Clamidiose Aviária em Amazona aestiva',
          patient: {
            name: 'Frederico',
            species: 'Psitacídeo Neotropical',
            breed: 'Papagaio-verdadeiro (Amazona aestiva)',
            age: '14 anos',
            weightKg: 0.38,
            habitatOrEnvironment: 'Viveiro doméstico em quintal, contactante de calopsitas recém-adquiridas'
          },
          vitals: {
            heartRateBpm: 340,
            respiratoryRateRpm: 68,
            temperatureCelsius: 41.8,
            mucousMembranes: 'Mucosa oral ictérico-esverdeada',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Papagaio apresentando sonolência, penas eriçadas, conjuntivite serosa unilateral e diarreia profusa com uratos verde-esmeralda cintilantes há 4 dias. O tutor relata que adquiriu duas calopsitas em feira livre há 3 semanas que faleceram subitamente. Ele próprio apresenta tosse seca e febre nos últimos 2 dias.',
          exams: [
            {
              category: 'physical_exam',
              title: 'Exame Físico e Inspeção Cloacal',
              findings: 'Severo bater de cauda (tail-bobbing), celoma distendido com borda hepática palpável além da quilha.',
              abnormalValues: [
                { parameter: 'Aspecto dos Uratos', value: 'Verde-esmeralda intenso', reference: 'Branco puro (giz)', status: 'critical' },
                { parameter: 'Palpação Hepática', value: 'Hepatomegalia palpável caudalmente à quilha', reference: 'Não palpável além da quilha', status: 'critical' },
                { parameter: 'Frequência Respiratória', value: '68 rpm com cauda oscilante', reference: '25 - 45 rpm', status: 'high' }
              ]
            },
            {
              category: 'laboratory',
              title: 'Painel Molecular e Sorologia',
              findings: 'PCR em tempo real de swab de coana e cloaca.',
              abnormalValues: [
                { parameter: 'PCR Chlamydia psittaci', value: 'POSITIVO (Alta carga de DNA)', reference: 'Negativo', status: 'critical' },
                { parameter: 'Aspartato Aminotransferase (AST)', value: '640 U/L', reference: '100 - 280 U/L', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Confirmada a clamidiose em uma zoonose ativa com risco aos contactantes humanos, qual conduta terapêutica e de biossegurança é mandatória?',
          decisionOptions: [
            {
              id: 'opt_dec_chlam_1',
              label: 'Iniciar Doxiciclina oral (25-40 mg/kg a cada 24h ou 25 mg/kg a cada 12h) por 45 dias contínuos + Isolamento estrito com EPI respiratório (N95) + Notificação ao tutor para investigação de febre por Chlamydia na rede de saúde humana',
              description: 'Cobrir o ciclo completo de replicação celular com tetraciclina de escolha e conter a transmissão zoonótica.',
              isOptimal: true,
              consequenceText: 'Conduta perfeita sob a perspectiva One Health e da clínica de animais exóticos! A doxiciclina atinge excelentes concentrações intracelulares onde a Chlamydia se multiplica. O período ininterrupto de 45 dias é inegociável para evitar recidiva por corpos reticulares quiescentes. O alerta médico ao tutor pode salvar sua vida contra a pneumonia por ornitose.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Instituição de doxiciclina prolongada por 45 dias associada a isolamento de biossegurança',
                mechanism: 'Bloqueio da síntese proteica ribossomal (subunidade 30S) e eliminação progressiva dos corpos elementares e reticulares',
                effect: 'Regressão da hepatite necrotizante, desaparecimento dos uratos verdes e cura clínica definitiva',
                clinicalMeaning: 'Eliminação do risco zoonótico para a família humana e recuperação da ave'
              }
            },
            {
              id: 'opt_dec_chlam_2',
              label: 'Administrar Enrofloxacino injetável por 3 dias e liberar a ave de volta ao contato com a família',
              description: 'Tratamento curto com fluoroquinolona comum.',
              isOptimal: false,
              consequenceText: 'Erro técnico gravíssimo! Três dias de antibiótico não eliminam a Chlamydia psittaci, selecionando cepas resistentes e mantendo o papagaio como carreador assintomático que continuará expelindo bactérias no ar domiciliar, perpetuando o risco de pneumonia grave nos humanos.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Antibioticoterapia de duração insuficiente em infecção bacteriana intracelular bifásica',
                mechanism: 'Falha na erradicação dos corpos reticulares intracelulares',
                effect: 'Recidiva sistêmica fulminante e transmissão aerógena zoonótica contínua',
                clinicalMeaning: 'Hospitalização do tutor com pneumonia atípica grave e morte da ave'
              }
            },
            {
              id: 'opt_dec_chlam_3',
              label: 'Prescrever apenas colírio oftálmico para a conjuntivite e antiparasitário na água de bebida',
              description: 'Tratar apenas o sinal ocular externo.',
              isOptimal: false,
              consequenceText: 'Conduta inaceitável. A conjuntivite é apenas a ponta do iceberg de uma septicemia por Chlamydia com hepatomegalia destrutiva. A ave morrerá em poucos dias por insuficiência hepática aguda.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Ignorar a patologia sistêmica e o sinal de biliverdinúria patognomônico',
                mechanism: 'Necrose hepática fulminante sem cobertura antimicrobiana',
                effect: 'Colapso metabólico e choque endotóxico bacteriano',
                clinicalMeaning: 'Óbito do paciente aviário em 72 horas'
              }
            }
          ],
          learningTakeaways: [
            'Uratos verde-esmeralda em aves não são diarreia alimentar: representam biliverdinúria por lesão hepática severa.',
            'A Clamidiose aviária é uma zoonose grave: o tratamento de escolha é Doxiciclina durante 45 dias contínuos.',
            'A abordagem da clínica de silvestres deve ser sempre orientada pelo paradigma One Health (Saúde Única).'
          ]
        }
      },
      {
        id: 'sec_wildlife_ex4',
        type: 'exercise',
        title: 'Exercício Clínico: Doenças Infecciosas Críticas em Psitacídeos',
        exerciseId: 'ex_wildlife_04'
      }
    ]
  },
  {
    id: 'lesson_wildlife_05_rehab_conservation',
    moduleId: 'mod_wildlife_clinic',
    title: 'Medicina da Conservação: Triagem em CETAS, Quarentena & Legislação SISBIO',
    shortDescription: 'Fluxo de recepção em CETAS/CRAS, protocolos de quarentena, critérios de soltura (soft vs. hard release) e normas do IBAMA.',
    estimatedMinutes: 15,
    order: 5,
    concepts: ['concept_wildlife_rehab_conservation_medicine'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_wildlife_th5',
        type: 'theory',
        title: 'Triagem, Reabilitação de Fauna & o Marco Legal da Conservação',
        contentMarkdown: `# Medicina da Conservação: O Trabalho em Centros de Triagem de Fauna (CETAS)

> 📖 Referências Canônicas: Begon, M. & Townsend, C. R. *Ecologia: De Indivíduos a Ecossistemas*; Fowler, M. E. *Zoo and Wild Animal Medicine*; Instruções Normativas IBAMA nº 07/2015 e nº 10/2011; Lei Federal de Crimes Ambientais nº 9.605/1998; Sistema de Autorização e Informação em Biodiversidade (SISBIO/ICMBio).

### O Papel dos Centros de Triagem e Reabilitação de Animais Silvestres (CETAS / CRAS)

Centros de Triagem recebem milhares de espécimes anualmente, oriundos de apreensões contra o tráfico ilegal, entregas voluntárias e resgates de atropelamento ou queimadas:
1. **Identificação Taxonômica & Triagem Clínica:** Determinação precisa da espécie, idade, sexo e biometria. Implantação imediata de microchip transponder subcutâneo (padrão ISO 11784/11785) ou anilhamento oficial para aves (anilhas CEMAVE/ICMBio).
2. **Quarentena Sanitária Estrita (30 a 60 dias):** Barreira biossegura para evitar que patógenos exóticos ou superbactérias sejam introduzidos nos recintos coletivos ou devolvidos ao ecossistema nativo. Inclui sorologia para herpesvírus, pesquisa de hemoparasitas e exames coproparasitológicos em série.

\`\`\`mermaid
flowchart TD
  A[Apreensão Policial / Resgate] --> B[Triagem no CETAS: Biometria, Microchip & Avaliação Clínica]
  B --> C[Quarentena Sanitária Isolada 30-60 Dias]
  C --> D{Avaliação Tríplice para Soltura}
  D -->|Reprovado| E[Criadouro Científico / Zoológico / Santuário]
  D -->|Aprovado| F[Treinamento em Recinto de Voo/Caça]
  F --> G[Soltura Branda: Soft Release com Monitoramento Radiotelemétrico]
  style G fill:#dcfce7,stroke:#16a34a,stroke-width:2px
  style E fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
\`\`\`

---

### A Avaliação Tríplice de Aptidão para Soltura

Devolver um animal silvestre à natureza requer a satisfação cumulativa de três pilares inegociáveis:
1. **Aptidão Física & Locomotora:** Voo acrobático e sustentado com manobras simétricas em viveiros de treinamento (mínimo de 20 a 30 metros de extensão); integridade total da plumagem de voo (rêmiges e retrizes); capacidade de forrageio e captura ágil de presas vivas sem assistência humana.
2. **Aptidão Comportamental (Desumanização):** Ausência absoluta de *imprinting* humano. Animais mansos que associam a figura humana a alimento correm para perto de estradas, sedes de fazendas ou caçadores, resultando em $100\\%$ de taxa de mortalidade pós-soltura. O animal deve apresentar reações normais de alarme e fuga diante da aproximação humana.
3. **Aptidão Sanitária & Genética:** Livre de patógenos com risco para populações de vida livre (ex.: vírus da PBFD em psitacídeos, Ranavírus em anfíbios). A soltura só pode ocorrer na área de ocorrência biogeográfica original da espécie (*range* natural) para prevenir poluição genética ou competição invasora.

---

### Tipos de Soltura & Marco Regulatório Nacional

* **Hard Release (Soltura Abrupta):** O animal é solto diretamente no ambiente sem fornecimento de abrigo ou alimento suplementar. Aplicável apenas a animais adultos saudáveis resgatados recentemente do mesmo local.
* **Soft Release (Soltura Branda / Monitorada):** O animal permanece em recinto de aclimatação construído na própria reserva florestal de destino por semanas a meses. Após a abertura do recinto, mantém-se comedouros de apoio com retirada gradual de alimento e monitoramento via colares de GPS ou radiotelemetria VHF.
* **Legislação Federal:** Todas as atividades de captura, anilhamento, triagem e reintrodução dependem de autorização formal via **SISBIO (Sistema de Autorização e Informação em Biodiversidade)** e conformidade com a Lei de Crimes Ambientais (Lei 9.605/98). Soltura sem autorização técnica e sanitária constitui infração administrativa grave e crime ambiental.`
      },
      {
        id: 'sec_wildlife_lab5',
        type: 'lab',
        title: 'Prontuário & Simulação Clínica: Lote Guarani (Araras-canindé)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Planejamento de Soltura Monitorada (Soft Release) de Psitacídeos em Área de Cerrado',
          patient: {
            name: 'Lote Guarani (8 espécimes)',
            species: 'Psitacídeo Neotropical',
            breed: 'Arara-canindé (Ara ararauna)',
            age: 'Jovens adultos',
            weightKg: 1.05,
            habitatOrEnvironment: 'Recinto de reabilitação e treinamento de voo no CETAS'
          },
          vitals: {
            heartRateBpm: 240,
            respiratoryRateRpm: 32,
            temperatureCelsius: 41.2,
            mucousMembranes: 'Rosadas',
            capillaryRefillTimeSec: 1.0
          },
          anamnesis: 'Grupo de 8 araras-canindé apreendidas do tráfico ainda filhotes, mantidas por 8 meses em programa de desumanização e condicionamento muscular em túnel de voo de 35 metros. A equipe precisa deliberar sobre a metodologia de soltura e os passos finais para devolução ao bioma de Cerrado.',
          exams: [
            {
              category: 'physical_exam',
              title: 'Avaliação de Voo e Comportamento Social',
              findings: 'Voo vigoroso de alta sustentação, quebra de sementes duras nativas (pequi, baru, buriti) com o bico e vocalização de alerta em grupo quando predadores simulados se aproximam.',
              abnormalValues: [
                { parameter: 'Reação à Presença Humana', value: 'Alerta e fuga para o ponto mais alto do viveiro', reference: 'Fuga e aversão', status: 'normal' },
                { parameter: 'Painel PCR Sanitário (Chlamydia/PBFD/PaBV)', value: '100% Negativo no lote', reference: 'Negativo', status: 'normal' }
              ]
            }
          ],
          challengePrompt: 'Para garantir o sucesso ecológico do Lote Guarani e respeitar as exigências do IBAMA/SISBIO, qual estratégia de soltura deve ser executada?',
          decisionOptions: [
            {
              id: 'opt_dec_cetas_1',
              label: 'Instalação de anilhas metálicas oficiais do CEMAVE + Microchipagem dorsal + Transporte para recinto de aclimatação na reserva de Cerrado + Soft release com comedouros suspensos de apoio temporário e monitoramento por telemetria',
              description: 'Combinar marcação individual rastreável, aclimatação no habitat alvo e retirada progressiva de suporte alimentar.',
              isOptimal: true,
              consequenceText: 'Excelente planejamento ecológico e sanitário! A soltura branda (soft release) em bando permite que os animais aprendam os pontos de água e abrigo na paisagem sem estresse abrupto. A anilha oficial do CEMAVE garante rastreabilidade científica por décadas.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Execução de soft release com anilhamento CEMAVE e suplementação alimentar decrescente',
                mechanism: 'Adaptação comportamental progressiva à fenologia das árvores frutíferas locais',
                effect: 'Fixação estável do grupo na reserva florestal com 87% de sobrevivência no primeiro ano',
                clinicalMeaning: 'Reintrodução conservacionista bem-sucedida fortalecendo a população local'
              }
            },
            {
              id: 'opt_dec_cetas_2',
              label: 'Soltura direta (hard release) na beira da rodovia mais próxima para economizar gastos operacionais',
              description: 'Abrir as gaiolas imediatamente após o desembarque do caminhão.',
              isOptimal: false,
              consequenceText: 'Fracasso completo e crime ambiental! As araras sofrerão dispersão caótica, fadiga por falta de aclimatação e fome, resultando em predação maciça por gaviões e atropelamentos em menos de 48 horas.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Hard release em local impróprio sem aclimatação biológica',
                mechanism: 'Desorientação espacial aguda e incapacidade de encontrar água/alimento',
                effect: 'Dispersão e morte rápida por inanição e predação',
                clinicalMeaning: 'Perda total do investimento de reabilitação e mortalidade de 100% do lote'
              }
            },
            {
              id: 'opt_dec_cetas_3',
              label: 'Realizar a soltura sem anilhamento ou microchipagem para não incomodar a pele das aves',
              description: 'Omitir a identificação oficial para evitar atrito do metal no tarso.',
              isOptimal: false,
              consequenceText: 'Conduta ilegal e anticientífica. As normas do IBAMA e do CEMAVE exigem que todo animal reintroduzido seja identificado com anilha inviolável oficial para fins de monitoramento populacional e combate ao tráfico de re-captura.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Omissão de anilhamento oficial e registro no SISBIO',
                mechanism: 'Impossibilidade de rastrear a sobrevivência e reprodução dos animais no ecossistema',
                effect: 'Infração às instruções normativas do IBAMA',
                clinicalMeaning: 'Invalidade técnico-científica do projeto de soltura'
              }
            }
          ],
          learningTakeaways: [
            'A soltura branda (soft release) é o padrão de excelência para animais reabilitados a partir de apreensões.',
            'O anilhamento com anilhas oficiais do CEMAVE/ICMBio e microchipagem subcutânea são mandatórios.',
            'A medicina da conservação atua na intersecção entre a clínica individual e a integridade de ecossistemas inteiros.'
          ]
        }
      },
      {
        id: 'sec_wildlife_ex5',
        type: 'exercise',
        title: 'Exercício Clínico: Medicina da Conservação e Triagem de Fauna',
        exerciseId: 'ex_wildlife_05'
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
  },
  {
    id: 'ex_biotech_02',
    conceptId: 'concept_biotech_iatf_pharmacology',
    type: 'multiple_choice',
    prompt: 'Na retirada do dispositivo intravaginal de progesterona (D8 ou D9) em um protocolo de IATF para fêmeas zebuínas de corte (Bos indicus), administram-se simultaneamente PGF2α, Cipionato de Estradiol (ECP) e Gonadotrofina Coriônica Equina (eCG). Qual é o papel farmacológico e fisiológico específico de cada um desses três fármacos?',
    options: [
      {
        id: 'opt_bio_2_1',
        text: 'PGF2α promove luteólise do corpo lúteo acessório ou residual; ECP atua como indutor hormonal do pico pré-ovulatório de LH (via feedback positivo hipotalâmico) 40-48h após a aplicação; e eCG atua como gonadotrofina de suporte com ação dupla FSH/LH, estimulando o crescimento folicular final e a vascularização do corpo lúteo futuro em fêmeas em desafio nutricional',
        isCorrect: true,
        pedagogicalFeedback: 'Excelente e completa compreensão farmacológica! O D-cloprostenol (PGF2α) garante o colapso do CL para que a progesterona endógena caia a zero. O Cipionato de Estradiol (ECP), por ser um éster de liberação mais lenta que o benzoato, deflagra o pico de GnRH/LH exatamente 40-48h depois, permitindo que a ovulação ocorra ~70h após o D8 (coincidindo perfeitamente com a IATF em D10-D11). A eCG liga-se aos receptores de FSH e LH das células foliculares, sendo decisiva para vacas paridas em anestro com bezerro ao pé.'
      },
      {
        id: 'opt_bio_2_2',
        text: 'PGF2α estimula a produção de leite; ECP bloqueia as contrações miometriais; eCG causa atresia folicular imediata',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A PGF2α é luteolítica, o ECP induz pico de LH e ovulação, e a eCG estimula o crescimento e maturação folicular, não atresia.'
      },
      {
        id: 'opt_bio_2_3',
        text: 'Todos os três agentes atuam exclusivamente provocando a dilatação mecânica da cérvix no momento da passagem da pipeta de inseminação',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A dilatação cervical é mediada pelo estrogênio pré-ovulatório endógeno, mas a principal função dos hormônios no D8 é o controle ovulatório e luteal sistêmico.'
      },
      {
        id: 'opt_bio_2_4',
        text: 'O ECP atua bloqueando a ovulação para que o sêmen permaneça congelado no útero por 5 dias antes de fecundar',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O ECP é um indutor de ovulação e o sêmen é descongelado no momento exato da inseminação no D10 ou D11.'
      }
    ]
  },
  {
    id: 'ex_biotech_03',
    conceptId: 'concept_biotech_andrology_semen_eval',
    type: 'multiple_choice',
    prompt: 'Durante a realização de um Exame Andrológico oficial segundo as normas do Colégio Brasileiro de Reprodução Animal (CBRA) em um Touro Nelore PO de 36 meses candidato a reprodutor de central, o laudo seminal indica: Perímetro Escrotal 39 cm, Turbilhonamento 4/5, Motilidade Progressiva Individual 75%, Vigor 4/5, e Defeitos Espermáticos Maiores de 8% e Menores de 11%. No teste de CASA (análise computadorizada), apresenta alta Velocidade Curvilínea (VCL) e no teste hiposmótico (HOST) mais de 80% de caudas enroladas. Qual é a classificação andrológica do touro?',
    options: [
      {
        id: 'opt_bio_3_1',
        text: 'Apto à Reprodução (Doador de Sêmen / Classificação Superior), pois apresenta perímetro escrotal compatível com a idade (> 34 cm), motilidade progressiva acima do mínimo exigido (≥ 60%), defeitos maiores < 15% e defeitos totais < 30%, além de alta integridade funcional de membrana plasmática demonstrada pelo teste hiposmótico',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! Conforme o CBRA, touros com mais de 36 meses devem ter PE ≥ 34 cm (o touro tem 39 cm, excelente). A motilidade progressiva é superior a 60% e o vigor ≥ 3. O limite tolerável de patologia espermática é de até 30% de defeitos totais e até 15% de defeitos maiores (o animal tem 8% de maiores e 19% totais). O teste hiposmótico (HOST) avalia a permeabilidade de membrana: espermatozoides viáveis com membrana íntegra absorvem líquido no meio hiposmótico e enrolam a cauda (edema osmótico fisiológico funcional).'
      },
      {
        id: 'opt_bio_3_2',
        text: 'Inapto definitivo à reprodução, pois o teste hiposmótico positivo (caudas enroladas) comprova defeito morfológico irreversível de cauda',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. No teste HOST, o enrolamento da cauda em meio hiposmótico é a prova de que a membrana plasmática está íntegra e funcionalmente viva (reação osmótica positiva). Se a membrana estivesse lesada ou morta, o líquido extravasaria sem enrolar a cauda.'
      },
      {
        id: 'opt_bio_3_3',
        text: 'Apto temporário, devendo repetir o exame após 60 dias porque a motilidade de 75% é insuficiente para centrais de inseminação',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A motilidade de 75% com vigor 4 é excelente (o piso mínimo para congelação é de 60-70%).'
      },
      {
        id: 'opt_bio_3_4',
        text: 'Desclassificado por hipoplasia testicular severa, pois touros zebuínos de 3 anos devem ter perímetro escrotal mínimo de 50 cm',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Perímetro escrotal de 50 cm é excessivo e atípico; o padrão de referência aos 36 meses em zebuínos de corte é ≥ 34-36 cm.'
      }
    ]
  },
  {
    id: 'ex_biotech_04',
    conceptId: 'concept_biotech_parturition_dystocia',
    type: 'multiple_choice',
    prompt: 'Uma novilha Angus primípara de 24 meses está em trabalho de parto há 3 horas com rompimento da bolsa alantoideana, porém sem expulsão fetal. Ao exame obstétrico por palpação vaginal com luva e antissepsia, o veterinário identifica: o feto está vivo, em apresentação longitudinal anterior, posição dorso-sacral, mas apresenta desvio lateral completo da cabeça e pescoço voltados para o flanco do feto, impedindo a progressão pelo canal de parto. Como se classifica tecnicamente essa distocia e qual é a primeira manobra obstétrica de correção?',
    options: [
      {
        id: 'opt_bio_4_1',
        text: 'Distocia fetal por atitude (postura) anormal decorrente de flexão/desvio lateral cefálico; a correção inicial exige a manobra de retropulsão fetal (empurrar o tórax fetal de volta à cavidade abdominal durante o intervalo entre as contrações maternas, com abundante lubrificação) para obter espaço de rotação e extensão da cabeça',
        isCorrect: true,
        pedagogicalFeedback: 'Correto! A classificação obstétrica de Noakes e Senger é precisa: Apresentação (longitudinal anterior), Posição (dorso-sacral) e Atitude/Postura (desvio lateral de cabeça). Jamais tente puxar uma extremidade fletida sem antes realizar a retropulsão! A retropulsão cria espaço na ampla cavidade abdominal para que o obstetra possa guiar a mandíbula fetal com as mãos protegidas, convertendo a atitude fletida em atitude estendida normal.'
      },
      {
        id: 'opt_bio_4_2',
        text: 'Distocia materna de conformação óssea pélvica estreita; deve-se aplicar tração de 1.000 kg com trator imediatamente',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Tração mecânica forçada com cabeça fletida resultará em ruptura catastrófica do útero, laceração da pelve e óbito imediato da novilha e do bezerro.'
      },
      {
        id: 'opt_bio_4_3',
        text: 'Distocia fetal de posição dorso-púbica; deve-se realizar cesariana imediata sem tocar no feto',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A posição descrita é dorso-sacral (normal); a anomalia é estritamente de atitude (cabeça fletida), prontamente corrigível por manobras de mutação.'
      },
      {
        id: 'opt_bio_4_4',
        text: 'Inércia uterina primária; a conduta de escolha é aplicar 100 UI de ocitocina intravenosa rápida',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Ministrar ocitocina em parto distócico obstrutivo por postura fetal incorreta pode induzir tétano miometrial e ruptura uterina violenta.'
      }
    ]
  },
  {
    id: 'ex_biotech_05',
    conceptId: 'concept_biotech_operative_obstetrics_cesarean',
    type: 'multiple_choice',
    prompt: 'Em uma vaca Holandesa de alta produção com torção uterina de 270° irredutível e feto vivo com enfisema tecidual incipiente, opta-se pela realização de cesariana (laparocisariana) em estação no flanco esquerdo sob bloqueio anestésico paravertebral. Qual é a justificativa anatômica para a escolha do flanco esquerdo em ruminantes e qual padrão de sutura deve ser empregado na histerorrafia para prevenir peritonite séptica puerperal?',
    options: [
      {
        id: 'opt_bio_5_1',
        text: 'O flanco esquerdo é protegido anatomicamente pelo saco dorsal e ventral do rúmen, que atua como um biombo natural bloqueando a evisceração espontânea das alças delgadas; a histerorrafia exige sutura invaginante contínua em dois planos (Cushing seguido de Lembert ou técnica de Utrecht) com fio absorvível sintético monofilamentar para garantir selamento hermético',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! No flanco esquerdo do bovino, o rúmen ocupa quase toda a fossa paralombar, impedindo que o jejuno e íleo extravasem pelo corte cirúrgico. Na histerorrafia, as suturas invaginantes (seromuscular sem perfurar a mucosa / técnica de Utrecht ou Cushing + Lembert) promovem a aposição serosa com serosa, liberando fibrina estéril em poucas horas e criando vedação hermética contra vazamento de lóquios e peritonite puerperal.'
      },
      {
        id: 'opt_bio_5_2',
        text: 'O flanco esquerdo é escolhido porque o útero de vacas situa-se exclusivamente no lado esquerdo do abdômen; a histerorrafia deve ser feita com pontos simples separados de fio inabsorvível de aço',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O corno gravídico pode ocupar ambos os lados ou pender para a direita; o flanco esquerdo é preferido pela contenção ruminal das vísceras delgadas. Fio de aço não é indicado para sutura uterina.'
      },
      {
        id: 'opt_bio_5_3',
        text: 'O flanco esquerdo permite incisar o fígado para resfriar a cavidade; deve-se deixar o útero aberto sem sutura para drenagem',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O fígado localiza-se no hipocôndrio direito e deixar o útero aberto causaria peritonite séptica fulminante em poucas horas.'
      },
      {
        id: 'opt_bio_5_4',
        text: 'A cesariana em vacas só pode ser realizada pelo flanco direito deitada em decúbito dorsal sob anestesia geral inalatória com halotano',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A laparocisariana em ruminantes é preferencialmente realizada com a fêmea em estação (em pé) contida no tronco, no flanco esquerdo sob bloqueio anestésico local/regional.'
      }
    ]
  }
];

export const BIOTECH_OBSTETRICS_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_biotech_01_iatf_protocol',
    moduleId: 'mod_biotech_obstetrics',
    title: 'Biotecnologia da Reprodução: Dinâmica Folicular Ovariana & Fundamentos Neuroendócrinos',
    shortDescription: 'Ondas foliculares ovarianas, recrutamento, dominância folicular, controle hipotálamo-hipofisário e dinâmica luteal.',
    estimatedMinutes: 14,
    order: 1,
    concepts: ['concept_biotech_iatf_dystocia_cesarean'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_biotech_th1',
        type: 'theory',
        title: 'Fisiologia Ovariana Comparada & O Fenômeno das Ondas Foliculares',
        contentMarkdown: `# Fisiologia Reprodutiva Universitária: Dinâmica Folicular & Eixo Hipotálamo-Hipófise-Gônadas

> 📖 Referências Canônicas: Senger, P. L. *Pathways to Pregnancy and Parturition*, 3rd ed. Current Conceptions; Hafez, E. S. E. *Reprodução Animal*, 7ª ed. Manole; Baruselli, P. S. et al. *Bovine Reproduction: Follicular Dynamics*, Anim Reprod; Noakes, D. E. *Arthur's Veterinary Reproduction and Obstetrics*, 9th ed. Saunders Elsevier.

### O Modelo das Ondas Foliculares em Ruminantes

O ciclo estral bovino (duração média de **21 dias** em vacas e novilhas) é caracterizado pelo crescimento contínuo de folículos em um padrão de **2 ou 3 ondas foliculares**:

\`\`\`mermaid
flowchart LR
  A[Surto Discreto de FSH Hipofisário] --> B[Recrutamento: Coorte de 20-30 Folículos Antrais 3-4 mm]
  B --> C[Seleção & Desvio Folicular: Folículo Maior Expressa Receptores de LH na Granulosa]
  C --> D[Dominância: Folículo Dominante Secreta Estradiol & Inibina]
  D --> E[Supressão de FSH: Atresia dos Folículos Subordinados]
  E --> F{Status do Corpo Lúteo / Progesterona}
  F -->|P4 Alta / Diestro| G[Bloqueio do Pico de LH: Atresia do Folículo Dominante Anovulatório]
  F -->|Luteólise / P4 Baixa| H[Pico Pré-Ovulatório de LH: Ovulação & Formação do Novo CL]
  style H fill:#dcfce7,stroke:#16a34a,stroke-width:2px
  style G fill:#fee2e2,stroke:#ef4444,stroke-width:2px
\`\`\`

---

### As 4 Fases Clássicas de Cada Onda Folicular

1. **Recrutamento:** Sob estímulo de um pico transitório de **FSH (Hormônio Folículo Estimulante)**, uma coorte de pequenos folículos antrais ($3-4\\text{ mm}$) é recrutada e inicia crescimento acelerado.
2. **Seleção & Desvio Folicular (*FSH-to-LH Shift*):** Quando o folículo maior atinge cerca de **$8.0-8.5\\text{ mm}$**, ocorre uma alteração molecular crucial: suas células da granulosa passam a expressar receptores para **LH (Hormônio Luteinizante)**, tornando-o independente dos níveis decrescentes de FSH.
3. **Dominância:** O folículo selecionado secreta altas concentrações de **Estradiol ($E_2$) e Inibina**, que exercem feedback negativo sobre a hipófise, derrubando o FSH circulante. Sem FSH, todos os folículos menores subordinados entram em **atresia apoptótica**.
4. **Destino da Onda (Ovulação vs. Atresia):**
   * Se houver um **Corpo Lúteo (CL)** ativo secretando **Progesterona ($P_4$)**, o feedback negativo de $P_4$ bloqueia a frequência dos pulsos de GnRH/LH. Sem suporte pulsátil de LH, o folículo dominante senesce e sofre atresia, abrindo caminho para uma nova onda.
   * Se houver **Luteólise** (induzida fisiologicamente pela $PGF_{2\\alpha}$ uterina no D16-D17 do ciclo), a progesterona cai bruscamente ($P_4 < 1\\text{ ng/mL}$), permitindo que o folículo dominante atinja o diâmetro pré-ovulatório ($12-16\\text{ mm}$), secretando estradiol suficiente para disparar o pico pré-ovulatório de LH e culminar na **Ovulação** cerca de 28 a 32 horas após.`
      },
      {
        id: 'sec_biotech_lab1',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Lote Primavera (Vacas Girolando)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Diagnóstico e Conduta em Cisto Ovariano Folicular Persistente em Bovino Leiteiro',
          patient: {
            name: 'Mimosa (Brinco 402)',
            species: 'Bovino Leiteiro',
            breed: 'Girolando 5/8',
            age: '5 anos (3ª lactação, 38 L/dia)',
            weightKg: 580,
            habitatOrEnvironment: 'Sistema de confinamento Compost Barn com alto desafio nutricional'
          },
          vitals: {
            heartRateBpm: 68,
            respiratoryRateRpm: 22,
            temperatureCelsius: 38.8,
            mucousMembranes: 'Normocoradas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Vaca de alta produção com 95 dias em lactação (DEL), sem registro de inseminação ou manifestação de estro nos últimos 60 dias. O produtor suspeita de prenhez silenciosa ou anestro crônico. Apresenta comportamento intermitente de ninfomania (tenta montar em outras vacas, brama e urina frequentemente).',
          exams: [
            {
              category: 'imaging',
              title: 'Ultrassonografia Reprodutiva Transretal B-Mode (Sonda Linear 7.5 MHz)',
              findings: 'Avaliação dos cornos uterinos e ovários direito e esquerdo.',
              abnormalValues: [
                { parameter: 'Estrutura Ovariana Esquerda', value: 'Estrutura anecoica de 28.5 mm de diâmetro com parede fina (< 2 mm), sem corpo lúteo no parênquima', reference: 'Folículo pré-ovulatório < 18 mm', status: 'critical' },
                { parameter: 'Presença de Corpo Lúteo Ativo', value: 'Ausente em ambos os ovários', reference: 'Presente no diestro', status: 'low' },
                { parameter: 'Progesterona Sérica', value: '0.2 ng/mL (Níveis basais)', reference: '> 1.0 ng/mL no diestro', status: 'low' }
              ]
            }
          ],
          challengePrompt: 'Identificada estrutura folicular anovulatória patológica > 25 mm sem corpo lúteo (Cisto Folicular), qual é o protocolo de reversão de eleição?',
          decisionOptions: [
            {
              id: 'opt_dec_cisto_1',
              label: 'Administrar análogo de GnRH (ex: Buserelina 10-20 mcg IM) ou hCG para induzir a luteinização da parede do cisto + Inserir implante de P4 por 7 dias seguido de PGF2α na retirada',
              description: 'Mimetizar o pico de LH ausente para luteinizar o cisto folicular e reiniciar a dinâmica ovariana cíclica normal.',
              isOptimal: true,
              consequenceText: 'Excelente decisão teriogenológica! O cisto folicular decorre da falha do hipotálamo em liberar o pico pré-ovulatório de GnRH/LH no momento da dominância. O GnRH ou hCG exógeno estimula as células da teca/granulosa da parede cística a luteinizar, elevando a progesterona e resetando o eixo neuroendócrino com nova onda de crescimento folicular viável.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Indução farmacológica com GnRH/hCG seguida de exposição a progesterona',
                mechanism: 'Luteinização da parede do cisto e supressão da secreção errática de estradiol',
                effect: 'Restabelecimento do feedback hipofisário e emergência de nova onda folicular fértil',
                clinicalMeaning: 'Eliminação da ninfomania e retorno à ciclicidade regular em 10 dias'
              }
            },
            {
              id: 'opt_dec_cisto_2',
              label: 'Apertar e romper manualmente o cisto ovariano por palpação retal com força bruta',
              description: 'Esmagar a estrutura anecoica para esvaziar o líquido folicular.',
              isOptimal: false,
              consequenceText: 'Conduta proscrita e mutiladora! O esmagamento manual de cistos ovarianos provoca hemorragia intrafolicular maciça, ooforite traumática e adesões fibrinosas severas na bursa ovariana e oviduto, resultando em esterilidade definitiva unilateral ou bilateral.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Ruptura traumática manual forçada de cisto ovariano via transretal',
                mechanism: 'Hemorragia ovariana e liberação de exsudato inflamatório na bursa ovárica',
                effect: 'Formação de aderências peritubáricas extensas e bloqueio da captação do oócito',
                clinicalMeaning: 'Esterilidade reprodutiva irreversível da vaca'
              }
            },
            {
              id: 'opt_dec_cisto_3',
              label: 'Aplicar exclusivamente Prostaglandina PGF2α sem associar GnRH',
              description: 'Injetar D-cloprostenol isoladamente.',
              isOptimal: false,
              consequenceText: 'Fracasso terapêutico! Cistos foliculares possuem parede fina com poucas ou nenhuma célula luteinizada e níveis basais de progesterona ($P_4 < 1\\text{ ng/mL}$). Sem tecido lúteo funcional com receptores para prostaglandina, a PGF2α não tem nenhum alvo biológico e não surte efeito.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Uso de agente luteolítico em estrutura ovariana desprovida de tecido lúteo',
                mechanism: 'Ausência de receptores celulares de PGF2α na parede cística folicular',
                effect: 'Persistência do cisto e dos sintomas de anovulação',
                clinicalMeaning: 'Atraso reprodutivo e aumento nos dias abertos da matriz'
              }
            }
          ],
          learningTakeaways: [
            'O desvio folicular ocorre quando o folículo dominante passa a expressar receptores de LH na granulosa.',
            'A progesterona alta mantém o folículo dominante sob atresia; sua queda permite a ovulação.',
            'Cistos foliculares respondem ao GnRH/hCG para luteinização e reset endócrino; nunca os rompa manualmente.'
          ]
        }
      },
      {
        id: 'sec_biotech_ex1',
        type: 'exercise',
        title: 'Exercício Clínico: Fisiologia Ovariana e Dinâmica Folicular',
        exerciseId: 'ex_biotech_01'
      }
    ]
  },
  {
    id: 'lesson_biotech_02_iatf_pharmacology',
    moduleId: 'mod_biotech_obstetrics',
    title: 'Biotecnologia da Reprodução: Farmacologia Avançada da IATF & Ressincronização',
    shortDescription: 'Mecanismos farmacológicos de Progesterona, Benzoato/Cipionato de Estradiol, PGF2α, eCG e ressincronização precoce Doppler.',
    estimatedMinutes: 15,
    order: 2,
    concepts: ['concept_biotech_iatf_pharmacology'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_biotech_th2',
        type: 'theory',
        title: 'A Farmacodinâmica dos Protocolos de IATF e Doppler Lúteo',
        contentMarkdown: `# Farmacologia Aplicada à IATF & Estratégias de Ressincronização Precoce

> 📖 Referências Canônicas: Baruselli, P. S. et al. *Technologies for Fixed-Time Artificial Insemination (FTAI) in Beef and Dairy Cattle*. Theriogenology; Bó, G. A. et al. *Programs for Synchronizing Estrus and Ovulation in Beef Cattle*; Ginther, O. J. *Ultrasonic Imaging and Animal Reproduction: Color-Doppler Ultrasonography*.

### A Linha do Tempo Farmacológica do Protocolo de 3 Manejos

A IATF visa sincronizar o momento preciso da ovulação em lotes de centenas de vacas, eliminando a falha de detecção visual de cio.

\`\`\`mermaid
gantt
  title Cronograma Farmacológico de IATF em Gado de Corte
  dateFormat  X
  axisFormat D%d
  section Manejos
  D0 : Inserção Implante P4 + 2.0 mg Benzoato Estradiol : 0, 1
  D0 a D8 : Bloqueio de LH & Nova Onda Folicular : 0, 8
  D8 : Retirada P4 + PGF2a + 1.0 mg ECP + 300 UI eCG : 8, 9
  D8 a D10 : Crescimento Folicular Final & Pico de LH : 8, 10
  D10 ou D11 : IATF (48h a 54h pós-retirada de P4) : 10, 11
\`\`\`

---

### Farmacodinâmica das Moléculas Utilizadas

1. **Dispositivos Intravaginais de Progesterona ($P_4$ - $0.5\\text{ a }1.9\\text{ g}$):**
   * Liberam $P_4$ de forma lenta e constante, mimetizando a fase lútea artificial.
   * Evitam a ovulação prematura de folículos durante o protocolo e favorecem a síntese adequada de receptores endometriais.
2. **Benzoato de Estradiol ($BE$ - $2.0\\text{ mg}$ IM no D0):**
   * Éster de estrógeno de curta ação ($t_{1/2} \\approx 24-36\\text{ h}$). Em sinergia com a $P_4$, induz feedback negativo potente no hipotálamo, bloqueando a secreção de FSH e LH, forçando a **atresia do folículo dominante antigo** e permitindo o nascimento síncrono de uma nova onda $3.5\\text{ a }4\\text{ dias}$ depois.
3. **Prostaglandina $PGF_{2\\alpha}$ (D-Cloprostenol $150\\text{ mcg}$ ou Dinoprost $25\\text{ mg}$ no D8):**
   * Promove vasoconstricção da artéria ovariana e lise direta das células luteínicas esteroidogênicas, derrubando a progesterona endógena a níveis basais ($< 0.5\\text{ ng/mL}$).
4. **Cipionato de Estradiol ($ECP$ - $0.5\\text{ a }1.0\\text{ mg}$ IM no D8):**
   * Éster de liberação lenta ($t_{1/2} \\approx 48-72\\text{ h}$). Sua absorção gradual atinge o limiar para o feedback positivo de GnRH/LH exatamente **$40-48\\text{ horas}$ após a aplicação**, assegurando a ovulação síncrona no D10/D11 sem risco de ovulação precoce indesejada.
5. **Gonadotrofina Coriônica Equina ($eCG$ / PMSG - $300\text{ a }400\text{ UI}$ IM no D8):**
   * Glicoproteína extraída do soro de éguas prenhes com ação dupla mimetizando FSH e LH. Possui meia-vida longa no bovino ($> 40\text{ h}$), estimulando o crescimento folicular terminal e a síntese de progesterona pelo futuro corpo lúteo, sendo o divisor de águas da prenhez em **vacas paridas com bezerro ao pé e ECC baixo (ECC ≤ 2.5/5)**.

---

### Ressincronização Precoce com Ultrassonografia Doppler Color (Resync 22-28 Dias)

* Aos **22 a 28 dias após a primeira IATF**, avalia-se o ovário com **Ultrassom Doppler Color**:
* **Corpo Lúteo Vascularizado:** Apresenta área periférica com fluxo sanguíneo intenso em anel (cores vermelha/azul), confirmando CL funcional e gestação em andamento.
* **Corpo Lúteo sem Fluxo (Luteólise Incipiente):** Fêmea não-gestante identificada antes mesmo do retorno clínico ao estro, permitindo reinserir o implante de $P_4$ e iniciar novo protocolo imediatamente, obtendo mais de $80\\%$ de taxa de prenhez acumulada em apenas 45 dias de estação de monta!`
      },
      {
        id: 'sec_biotech_lab2',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Lote Fazenda Pantaneira',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Protocolo de IATF e Ressincronização Superprecoce com Ultrassom Doppler em Nelore',
          patient: {
            name: 'Lote 08 (Primíparas Nelore)',
            species: 'Bovino de Corte',
            breed: 'Nelore (Bos indicus)',
            age: 'Primíparas (3 anos, com bezerro de 35 dias)',
            weightKg: 430,
            habitatOrEnvironment: 'Pasto de Brachiaria decumbens, ECC 2.5 (Seca prolongada)'
          },
          vitals: {
            heartRateBpm: 64,
            respiratoryRateRpm: 18,
            temperatureCelsius: 38.5,
            mucousMembranes: 'Normocoradas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Lote de 150 vacas Nelore de primeira cria em anestro amamentacional pós-parto profundo. O produtor necessita maximizar a taxa de desmama e concentrar a parição, exigindo taxa de prenhez acima de 55% na primeira IATF e diagnóstico precoce para ressincronizar as vazias sem perda de tempo.',
          exams: [
            {
              category: 'imaging',
              title: 'Doppler Color Transretal aos 22 Dias Pós-IATF',
              findings: 'Mapeamento de vascularização e área de parênquima lúteo.',
              abnormalValues: [
                { parameter: 'Área com Sinais de Doppler Color no CL', value: '42% do lote com área de fluxo < 20% (CL em regressão)', reference: '> 45% da área lútea com fluxo sanguíneo', status: 'low' }
              ]
            }
          ],
          challengePrompt: 'Para as matrizes identificadas como vazias precocemente pelo Doppler no D22, qual protocolo de ressincronização é o mais eficiente?',
          decisionOptions: [
            {
              id: 'opt_dec_resync_1',
              label: 'Reinserir imediatamente dispositivo de P4 usado de 2º uso + Benzoato de Estradiol (1.0 mg) no D22 -> Retirar no D30 com PGF2α + ECP (0.5 mg) + eCG (300 UI) e inseminar no D32',
              description: 'Ressincronizar as fêmeas não gestantes em tempo recorde sem esperar o retorno espontâneo de estro.',
              isOptimal: true,
              consequenceText: 'Estratégia de elite na pecuária de precisão! O uso de ultrassonografia Doppler no D22 antecipa o diagnóstico gestacional em mais de uma semana em relação ao ultrassom modo B convencional (que só confirma vesícula embrionária após 28-30 dias). As vacas vazias são reinseminadas em apenas 32 dias após o primeiro serviço!',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Diagnóstico precoce de luteólise via Doppler e reinício de protocolo hormonal de IATF',
                mechanism: 'Sincronização imediata de nova onda folicular nas fêmeas vazias',
                effect: 'Segunda oportunidade reprodutiva em intervalo de 32 dias',
                clinicalMeaning: 'Taxa de prenhez acumulada subindo para 78% no lote em apenas 1 mês'
              }
            },
            {
              id: 'opt_dec_resync_2',
              label: 'Descartar todas as vacas com CL sem Doppler para o abate imediato',
              description: 'Eliminar as matrizes que não emprenharam na primeira rodada.',
              isOptimal: false,
              consequenceText: 'Decisão desastrosa e antieconômica! Primíparas em primeira cria apresentam naturalmente taxa de concepção de primeiro serviço ao redor de 50%. Descartar 50% de vacas jovens no auge de seu potencial produtivo gera prejuízo financeiro colossal.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Descarte prematuro de matrizes jovens zebuínas com bezerro',
                mechanism: 'Perda de matrizes adaptadas sem dar oportunidade de ressincronização',
                effect: 'Depleção do patrimônio genético do rebanho',
                clinicalMeaning: 'Prejuízo financeiro devastador na fazenda'
              }
            },
            {
              id: 'opt_dec_resync_3',
              label: 'Aplicar PGF2α em todas as 150 vacas no D22, inclusive nas que tinham CL com fluxo Doppler exuberante',
              description: 'Injetar prostaglandina em todo o lote sem separar as fêmeas gestantes.',
              isOptimal: false,
              consequenceText: 'Erro criminoso! Aplicar PGF2α em vacas com CL funcional aos 22 dias pós-IATF induz luteólise imediata nas vacas que estavam prenhes, provocando aborto e reabsorção embrionária em 100% dos animais gestantes.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Administração acidental de prostaglandina em fêmeas gestantes precoces',
                mechanism: 'Destruição do corpo lúteo gestacional e queda a zero da progesterona',
                effect: 'Morte embrionária e expulsão de embriões de 22 dias',
                clinicalMeaning: 'Aborto induzido iatrogenicamente em todo o lote prenhe'
              }
            }
          ],
          learningTakeaways: [
            'O Benzoato de Estradiol sincroniza a emergência da nova onda folicular; o Cipionato sincroniza a ovulação.',
            'A eCG é mandatória em vacas de corte com bezerro ao pé e baixa reserva corporal.',
            'O Doppler Color lúteo aos 22 dias permite identificar fêmeas não-gestantes precocemente para ressincronização imediata.'
          ]
        }
      },
      {
        id: 'sec_biotech_ex2',
        type: 'exercise',
        title: 'Exercício Clínico: Farmacologia da IATF e Ressincronização',
        exerciseId: 'ex_biotech_02'
      }
    ]
  },
  {
    id: 'lesson_biotech_03_andrology_semen',
    moduleId: 'mod_biotech_obstetrics',
    title: 'Biotecnologia da Reprodução: Exame Andrológico & Análise Seminal Computadorizada (CASA)',
    shortDescription: 'Padronização CBRA: perímetro escrotal, cinética espermática CASA (VCL, VSL, VAP), morfologia e teste hiposmótico (HOST).',
    estimatedMinutes: 15,
    order: 3,
    concepts: ['concept_biotech_andrology_semen_eval'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_biotech_th3',
        type: 'theory',
        title: 'Critérios CBRA de Avaliação Andrológica & Cinética Computadorizada',
        contentMarkdown: `# Andrologia Veterinária: Exame Físico, Espermograma & Análise Computadorizada (CASA)

> 📖 Referências Canônicas: CBRA (Colégio Brasileiro de Reprodução Animal). *Manual para Exame Andrológico e Avaliação de Sêmen Animal*, 3ª ed.; Chenoweth, P. J. & McPherson, F. J. *Bull Fertility and Breeding Soundness Examination*; Verstegen, J. et al. *Computer-Assisted Semen Analysis (CASA) in Domestic Animals*.

### O Exame Clínico do Macho & Biometria Testicular

O Exame Andrológico deve assegurar que o reprodutor é capaz de produzir sêmen fértil e cobrir as fêmeas sem limitações físicas:
1. **Exame Clínico Geral:** Avaliação do sistema locomotor (aprumos de membros pélvicos, cascos e articulações tarsometatársicas indispensáveis para o salto da monta) e visão (oftalmoscopia para descartar ceratite ou catarata).
2. **Perímetro Escrotal (PE):**
   * Medido na maior circunferência dos dois testículos juntos na bolsa escrotal com fita métrica milimetrada.
   * Apresenta alta herdabilidade ($h^2 \\approx 0.40-0.50$) e correlação genética direta com a **produção espermática diária** do macho e a **precocidade sexual (idade ao primeiro parto)** de suas filhas!
   * *Mínimos CBRA em Zebuínos de Corte:* ≥ 30 cm aos 18 meses, ≥ 32 cm aos 24 meses e ≥ 34 cm aos 36 meses.
3. **Consistência Testicular:** Firme-elástica (similar à eminência tenar da mão contraída). Testículos flácidos indicam degeneração testicular; endurecidos sugerem orquite fibrótica ou hipoplasia.

---

### Cinética Espermática Computadorizada (CASA)

A análise clássica subjetiva em microscópio óptico (motilidade massal 0-5 e progressiva individual em %) vem sendo complementada pelo sistema CASA:

\`\`\`mermaid
flowchart LR
  A[Trajetória Espermática Curvilínea Real] --> B[VCL: Velocidade Curvilínea total em micrometros por segundo]
  A --> C[VSL: Velocidade em Linha Reta entre ponto inicial e final]
  A --> D[VAP: Velocidade Média da Trajetória suavizada]
  C & B --> E[LIN: Linearidade = VSL dividido por VCL]
  D & B --> F[WOB: Oscilação = VAP dividido por VCL]
  style E fill:#dcfce7,stroke:#16a34a,stroke-width:2px
\`\`\`

* **VCL (Curvilinear Velocity):** Velocidade real ponto a ponto percorrida pelo espermatozoide.
* **VSL (Straight-Line Velocity):** Velocidade em linha reta calculada entre o primeiro e o último ponto detectado.
* **LIN (Linearity):** Relação $\text{LIN} = \text{VSL} / \text{VCL}$. Amostras seminais de alta congelabilidade e fertilidade apresentam $\text{LIN} > 50-60%$.

---

### Patologia Espermática & Teste Hiposmótico (HOST)

* **Defeitos Maiores (Impacto Direto na Fertilização):** Gota citoplasmática proximal, defeitos acrossomais (*knobbed acrosome*), cauda fortemente enrolada na cabeça (*dag defect*), cabeças isoladas patológicas. Tolerância máxima CBRA: **$< 15%$**.
* **Defeitos Menores:** Gota citoplasmática distal, cauda dobrada terminal, cauda isolada normal. Tolerância máxima CBRA de **Defeitos Totais: $< 20-30%$**.
* **Teste Hiposmótico de Curvatura de Cauda (HOST - Hypo-Osmotic Swelling Test):**
  * Coloca-se o espermatozoide em solução hiposmótica ($100\text{ mOsm/kg}$).
  * Espermatozoides com **membrana plasmática bioquímica e funcionalmente íntegra** absorvem água por osmose; o influxo hídrico incha a fibra axial e causa **enrolamento fisiológico evidente da cauda** (amostras superiores têm ≥ 70-80% de caudas enroladas no HOST). Membranas lesadas extravasam o meio sem enrolamento.`
      },
      {
        id: 'sec_biotech_lab3',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Imperador (Touro Nelore PO)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Exame Andrológico para Entrada em Central de Inseminação Artificial',
          patient: {
            name: 'Imperador de Uberaba',
            species: 'Bovino de Corte',
            breed: 'Nelore PO (Bos indicus)',
            age: '30 meses',
            weightKg: 780,
            habitatOrEnvironment: 'Piquete de elite com sombreamento e dieta balanceada'
          },
          vitals: {
            heartRateBpm: 58,
            respiratoryRateRpm: 16,
            temperatureCelsius: 38.4,
            mucousMembranes: 'Normocoradas',
            capillaryRefillTimeSec: 1.5
          },
          anamnesis: 'Touro PO contratado por central de sêmen para produção de doses congeladas. Foi submetido a estresse térmico severo durante transporte rodoviário prolongado (36 horas sob calor de 38°C) há 4 semanas. A central exige laudo andrológico completo conforme os padrões CBRA.',
          exams: [
            {
              category: 'physical_exam',
              title: 'Biometria Testicular e Palpação de Órgãos Genitais',
              findings: 'Perímetro escrotal de 38.5 cm, simetria testicular normal, tônus firme-elástico em ambos os testículos.',
              abnormalValues: [
                { parameter: 'Perímetro Escrotal aos 30 meses', value: '38.5 cm (Excelente)', reference: '≥ 33.0 cm', status: 'normal' }
              ]
            },
            {
              category: 'laboratory',
              title: 'Espermograma e Morfologia Espermática (Coloração Rosa-Bengala)',
              findings: 'Avaliação microscópica de 200 células em microscopia de contraste de fase.',
              abnormalValues: [
                { parameter: 'Turbilhonamento Massal', value: '4/5', reference: '≥ 3/5', status: 'normal' },
                { parameter: 'Motilidade Progressiva Individual', value: '70%', reference: '≥ 60%', status: 'normal' },
                { parameter: 'Gotas Citoplasmáticas Proximais', value: '18% (Degeneração testicular pós-estresse)', reference: '< 4%', status: 'high' },
                { parameter: 'Defeitos Espermáticos Maiores Totais', value: '23% (Acima do teto)', reference: '< 15%', status: 'critical' },
                { parameter: 'Defeitos Totais', value: '34%', reference: '< 30%', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Com 23% de defeitos maiores decorrentes de estresse térmico testicular recente, qual é o laudo andrológico conclusivo?',
          decisionOptions: [
            {
              id: 'opt_dec_andro_1',
              label: 'Inapto Temporário à Reprodução: aguardar 60 dias (tempo equivalente a um ciclo completo da espermatogênese e trânsito epididimário ~61 dias) sob dieta antioxidante e repetir o exame',
              description: 'O estresse térmico comprometeu a espermiogênese; como as espermatogônias basais estão preservadas, a qualidade seminal recupera-se em um ciclo espermatogênico.',
              isOptimal: true,
              consequenceText: 'Excelente conduta andrológica! Em touros, a espermatogênese completa dura aproximadamente 61 dias (da diferenciação da espermatogônia à saída pelo epidídimo). A alta porcentagem de gotas proximais reflete falha temporária de maturação no epidídimo por estresse térmico transitório. Reavaliar em 60 dias permite que a nova coorte de espermatozoides sadios emerja.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Laudo de inaptidão temporária e repouso térmico por 60 dias com suplementação de zinco e vitamina E',
                mechanism: 'Renovação completa da linhagem celular germinativa ao longo do ciclo espermatogênico de 61 dias',
                effect: 'Queda das gotas proximais para 2% e normalização dos defeitos maiores para 6%',
                clinicalMeaning: 'Aprovação definitiva do touro na central de sêmen após 60 dias'
              }
            },
            {
              id: 'opt_dec_andro_2',
              label: 'Aprovar o touro imediatamente e congelar 10.000 doses de sêmen no dia seguinte',
              description: 'Ignorar as gotas citoplasmáticas proximais porque a motilidade é de 70%.',
              isOptimal: false,
              consequenceText: 'Grave erro zootécnico! A gota citoplasmática proximal impede a reação acrossomal adequada e causa falha de fecundação ou morte embrionária precoce. As doses de sêmen apresentarão baixíssima fertilidade a campo, gerando processos judiciais contra a central.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Congelamento e comercialização de sêmen com 23% de defeitos maiores',
                mechanism: 'Incapacidade do espermatozoide com gota proximal de ligar-se à zona pelúcida',
                effect: 'Queda brutal da taxa de prenhez das vacas inseminadas para menos de 25%',
                clinicalMeaning: 'Prejuízo financeiro e perda da credibilidade zootécnica da central'
              }
            },
            {
              id: 'opt_dec_andro_3',
              label: 'Declarar o touro Inapto Definitivo e indicar castração bilateral imediata',
              description: 'Considerar a lesão irreversível no primeiro exame.',
              isOptimal: false,
              consequenceText: 'Erro precipitado inaceitável. O estresse térmico agudo causa degeneração testicular temporária na grande maioria dos casos. Castrar um touro PO de alto valor zootécnico sem aguardar os 60 dias para reavaliação é negligência profissional.',
              physiologicalOutcome: 'suboptimal',
              causalChainFeedback: {
                cause: 'Condenação definitiva precipitada de reprodutor de alto valor',
                mechanism: 'Falta de compreensão da cinética celular da espermatogênese bovina',
                effect: 'Perda irreversível de um patrimônio genético bovino',
                clinicalMeaning: 'Dano econômico milionário desnecessário ao criador'
              }
            }
          ],
          learningTakeaways: [
            'O perímetro escrotal reflete diretamente a produção espermática diária e a precocidade sexual das filhas.',
            'A duração da espermatogênese em bovinos é de aproximadamente 60 dias; danos térmicos agudos exigem reavaliação após esse prazo.',
            'O limite máximo de defeitos maiores pelo CBRA é de 15% e defeitos totais de 30%.'
          ]
        }
      },
      {
        id: 'sec_biotech_ex3',
        type: 'exercise',
        title: 'Exercício Clínico: Andrologia e Espermograma CBRA',
        exerciseId: 'ex_biotech_03'
      }
    ]
  },
  {
    id: 'lesson_biotech_04_parturition_dystocia',
    moduleId: 'mod_biotech_obstetrics',
    title: 'Biotecnologia da Reprodução: Fisiologia do Parto & Diagnóstico de Distocias',
    shortDescription: 'Cascata endócrina do cortisol fetal, as 3 fases clínicas do parto e classificação sistemática de distocias maternas e fetais.',
    estimatedMinutes: 15,
    order: 4,
    concepts: ['concept_biotech_parturition_dystocia'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_biotech_th4',
        type: 'theory',
        title: 'A Cascata Neuroendócrina do Parto e a Semiologia Obstétrica',
        contentMarkdown: `# Fisiologia do Parto, Dinâmica Puerperal & Classificação de Distocias

> 📖 Referências Canônicas: Noakes, D. E., Parkinson, T. J. & England, G. C. W. *Arthur's Veterinary Reproduction and Obstetrics*, 9th ed. Saunders Elsevier; Senger, P. L. *Pathways to Pregnancy and Parturition*; Jackson, P. G. G. *Handbook of Veterinary Obstetrics*, 2nd ed.

### O Gatilho Fetal: O Feto Decide Quando Nascer

Ao contrário do que muitos pensam, o parto é deflagrado **ativamente pelo feto**, e não pela mãe:

\`\`\`mermaid
flowchart TD
  A[Estresse Fetal no Final da Gestação: Hipóxia & Restrição de Espaço] --> B[Ativação do Eixo Hipotálamo-Hipófise-Adrenal Fetal]
  B --> C[Secreção de CRH e ACTH Fetal]
  C --> D[Liberação Maciça de CORTISOL Fetal na Circulação Placentária]
  D --> E[Ativação de Enzimas Placentárias: 17a-Hidroxilase & Aromatase]
  E --> F[Conversão Rápida de Progesterona em Estradiol E2]
  F --> G[Síntese Endometrial Maciça de PGF2a & Relaxina]
  G --> H[Luteólise do CL Gestacional + Relaxamento da Cérvix e Pelve]
  F & G --> I[Expressão de Receptores de Ocitocina no Miométrio]
  I --> J[Reflexo de Ferguson: Pressão Fetal na Cérvix Dispara Ocitocina Materna]
  J --> K[Trabalho de Parto Ativo: Contrações Miometriais & Prensa Abdominal]
  style K fill:#dcfce7,stroke:#16a34a,stroke-width:2px
\`\`\`

---

### As 3 Fases Clínicas do Parto em Fêmeas Domésticas

1. **Fase 1 (Dilatação Cervical):** Inquietação, isolamento do rebanho, cauda levantada, cólica leve e relaxamento dos ligamentos sacroisquiáticos. Dura de **2 a 6 horas** em vacas.
2. **Fase 2 (Expulsão Fetal Ativa):** Rompimento da bolsa alantoideana ("bolsa d'água") e aparecimento do âmnio na vulva. Contrações coordenadas do miométrio e da prensa abdominal materna.
   * *Tempo normal:* **30 minutos a 2 horas** em vacas; **15 a 30 minutos** em éguas (em equinos, qualquer atraso $> 30-40\\text{ min}$ resulta em hipóxia e morte fetal encefálica!).
3. **Fase 3 (Expulsão dos Anexos Fetais / Dequitação):** Eliminação da placenta. Em ruminantes, considera-se **Retenção de Placenta** quando não ocorre expulsão em até **12 horas pós-parto**.

---

### Classificação Sistemática das Distocias (Nomenclatura Internacional)

Para intervir com sucesso, o obstetra deve classificar o posicionamento fetal segundo 3 variáveis obrigatórias:
* **1. Apresentação (Relação entre o eixo longitudinal do feto e o da mãe):**
  * *Longitudinal Anterior* (normal - cabeça e membros anteriores entram primeiro).
  * *Longitudinal Posterior* (membros posteriores entram primeiro).
  * *Transversal* (dorsal ou ventral atravessada no canal do parto - patológica).
* **2. Posição (Relação entre o dorso do feto e a pelve materna):**
  * *Dorso-sacral* (normal - dorso do feto voltado para o sacro da mãe).
  * *Dorso-púbica* (feto de barriga para cima - patológica).
  * *Dorso-ilíaca* (feto de lado - esquerda ou direita).
* **3. Atitude / Postura (Disposição das partes móveis do feto: cabeça, pescoço e membros):**
  * *Estendida* (normal).
  * *Fletida / Desviada:* Flexão de carpo, flexão de ombro, flexão de jarrete (curvilhão), ou desvio lateral/ventral do pescoço e cabeça.`
      },
      {
        id: 'sec_biotech_lab4',
        type: 'lab',
        title: 'Prontuário & Simulação Zootécnica: Estrela (Novilha Angus)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Manejo Obstétrico de Distocia Fetal por Flexão Unilateral de Carpo e Desvio Cefálico',
          patient: {
            name: 'Estrela',
            species: 'Bovino de Corte',
            breed: 'Red Angus',
            age: 'Primípara (22 meses)',
            weightKg: 440,
            habitatOrEnvironment: 'Piquete maternidade com monitoramento por câmeras'
          },
          vitals: {
            heartRateBpm: 88,
            respiratoryRateRpm: 34,
            temperatureCelsius: 38.9,
            mucousMembranes: 'Hiperêmicas',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Novilha primípara em trabalho de parto ativo há 2 horas e meia. Apresenta esforço expulsivo abdominal contínuo com apenas um dos membros anteriores exteriorizado pela vulva até o boleto. O outro membro e o focinho do feto não aparecem. O feto move a pata exteriorizada quando pinçada (feto vivo).',
          exams: [
            {
              category: 'physical_exam',
              title: 'Exame Obstétrico por Palpação Vaginal com Antissepsia Rigorosa',
              findings: 'Canal de parto completamente dilatado, presença de muco e resíduos de líquido amniótico.',
              abnormalValues: [
                { parameter: 'Apresentação Fetal', value: 'Longitudinal Anterior', reference: 'Longitudinal Anterior', status: 'normal' },
                { parameter: 'Posição Fetal', value: 'Dorso-sacral', reference: 'Dorso-sacral', status: 'normal' },
                { parameter: 'Atitude do Membro Anterior Esquerdo', value: 'Estendido (exteriorizado)', reference: 'Estendido', status: 'normal' },
                { parameter: 'Atitude do Membro Anterior Direito', value: 'Flexão de carpo no estreito anterior da pelve', reference: 'Estendido', status: 'critical' },
                { parameter: 'Atitude da Cabeça e Pescoço', value: 'Desvio lateral voltado para o flanco direito fetal', reference: 'Estendida sobre membros', status: 'critical' }
              ]
            }
          ],
          challengePrompt: 'Com feto vivo impactado com flexão de carpo e desvio lateral de cabeça, qual é a conduta sequencial correta?',
          decisionOptions: [
            {
              id: 'opt_dec_dist_1',
              label: 'Administrar anestesia epidural caudal (Lidocaína a 2% 4-5 mL) para cessar a prensa abdominal + Infusão intrauterina de lubrificante hidrossolúvel de metilcelulose + Retropulsão do feto -> Retificação da cabeça pela mandíbula -> Retificação do carpo com a mão protegendo o casco',
              description: 'Abolir os esforços expulsivos maternos dolorosos para criar espaço de manobra, lubrificar e corrigir a postura das extremidades antes de tracionar.',
              isOptimal: true,
              consequenceText: 'Manobra obstétrica perfeita e magistral! A anestesia epidural caudal baixa paralisa as contrações violentas da prensa abdominal materna sem afetar os membros posteriores da vaca, permitindo ao veterinário trabalhar confortavelmente. A retropulsão fetal abre espaço na cavidade abdominal ampla para desdobrar o membro e estender o pescoço com total proteção contra perfuração do útero.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Epidural baixa, abundante lubrificação com polímero e mutação com retropulsão prévia',
                mechanism: 'Cessação do espasmo miometrial reflexo e retificação postural das articulações retidas',
                effect: 'Conversão da atitude defeituosa em apresentação, posição e atitude 100% eutócicas',
                clinicalMeaning: 'Parto assistido bem-sucedido com extração de bezerro vigoroso vivo e matriz íntegra'
              }
            },
            {
              id: 'opt_dec_dist_2',
              label: 'Amarrar uma corrente no único membro exteriorizado e tracionar com força máxima com guincho mecânico',
              description: 'Puxar o feto pelo único membro exteriorizado para desentalar.',
              isOptimal: false,
              consequenceText: 'Erro obstétrico atroz! A tração forçada de um feto com a cabeça e membro retidos encunha o corpo fetal contra o anel ósseo da pelve, fraturando o membro anterior, quebrando o pescoço do feto e perfurando a parede uterina e a vagina materna com laceração fatal.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Tração obstétrica cega sobre feto com atitude patológica não corrigida',
                mechanism: 'Impactação violenta da mandíbula e do cotovelo fletido contra a arcada isquiática',
                effect: 'Ruptura uterina hemorrágica maciça e morte por asfixia do feto',
                clinicalMeaning: 'Óbito de mãe e filho por erro técnico grosseiro'
              }
            },
            {
              id: 'opt_dec_dist_3',
              label: 'Aplicar 50 UI de ocitocina intramuscular e esperar que a novilha expulse o bezerro dobrado sozinha',
              description: 'Aumentar a força das contrações uterinas com ocitocina.',
              isOptimal: false,
              consequenceText: 'Contraindicação formal absoluta! Administrar ocitocina diante de distocia mecânica obstrutiva induz espasmo tetânico miometrial, colapsando a circulação placentária (asfixia fetal imediata) e rompendo o corpo uterino pelo excesso de pressão.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Uso de ocitócicos em distocia obstrutiva não resolvida',
                mechanism: 'Tetania miometrial contra canal de parto mecanicamente ocluído',
                effect: 'Isquemia placentária aguda e ruptura traumática do útero',
                clinicalMeaning: 'Morte fetal rápida e choque hipovolêmico materno'
              }
            }
          ],
          learningTakeaways: [
            'O parto é iniciado ativamente pelo cortisol fetal, convertendo progesterona em estrogênio.',
            'Nunca tracione um feto sem antes corrigir sua atitude (postura) de cabeça e membros.',
            'A anestesia epidural caudal baixa (L1-L2 / sacrococcígea) é fundamental para abolir a prensa abdominal e viabilizar a mutação obstétrica.'
          ]
        }
      },
      {
        id: 'sec_biotech_ex4',
        type: 'exercise',
        title: 'Exercício Clínico: Fisiologia do Parto e Abordagem de Distocias',
        exerciseId: 'ex_biotech_04'
      }
    ]
  },
  {
    id: 'lesson_biotech_05_operative_obstetrics',
    moduleId: 'mod_biotech_obstetrics',
    title: 'Biotecnologia da Reprodução: Obstetrícia Operatória, Fetotomia & Cesariana',
    shortDescription: 'Manobras de mutação, princípios de fetotomia percutânea com serra de Liess e laparocisariana no flanco esquerdo em ruminantes.',
    estimatedMinutes: 16,
    order: 5,
    concepts: ['concept_biotech_operative_obstetrics_cesarean'],
    xpReward: 120,
    sections: [
      {
        id: 'sec_biotech_th5',
        type: 'theory',
        title: 'A Arte Cirúrgica Obstétrica: Da Fetotomia à Laparocisariana',
        contentMarkdown: `# Obstetrícia Operatória Veterinária: Mutação, Fetotomia e Laparocisariana

> 📖 Referências Canônicas: Noakes, D. E. *Arthur's Veterinary Reproduction and Obstetrics*, 9th ed.; Jackson, P. G. G. *Handbook of Veterinary Obstetrics*; Fossum, T. W. *Small Animal Surgery*, 5th ed. Elsevier; Radostits, O. M. *Veterinary Medicine*, 10th ed.

### 1. As 5 Manobras Clássicas de Mutação Obstétrica

1. **Retropulsão:** Empurrar o feto de volta para a cavidade abdominal para criar amplitude espacial. Deve ser realizada exclusivamente no intervalo entre as contrações e com lubrificação copiosa (nunca a seco!).
2. **Rotação:** Girar o feto sobre seu próprio eixo longitudinal (ex.: corrigir posição dorso-púbica para dorso-sacral).
3. **Versão:** Transformar uma apresentação transversal em apresentação longitudinal (anterior ou posterior).
4. **Retificação de Extremidades:** Extensão de membros ou cabeça fletidos, cobrindo as unhas/cascos com a concavidade da mão para não dilacerar o endométrio.
5. **Tração Forçada Controlada:** Uso de correntes obstétricas com **dupla alçada** (uma acima e outra abaixo do boleto) para distribuir o estresse mecânico e evitar fraturas de metacarpo/metatarso. A tração deve ser sincronizada com os esforços da mãe e dirigida obliquamente para baixo em direção aos jarretes da vaca.

---

### 2. Fetotomia Percutânea (Técnica de Thygesen com Serra de Liess)

Indicada exclusivamente em **feto morto enfisematoso** onde a resolução por mutação é impossível e a cesariana oferece risco inaceitável de peritonite séptica:
* Utiliza o fetótomo tubular duplo de Thygesen e fio de serra de Liess de corte rápido.
* O corte percutâneo (amputação de cabeça ou membro retido) deve ser realizado mantendo a cabeça do fetótomo firmemente ancorada contra o feto, protegendo a mucosa uterina de qualquer atrito da serra.

---

### 3. Laparocisariana em Ruminantes (Cesariana no Flanco Esquerdo em Estação)

A via de eleição na vasta maioria das distocias irredutíveis em bovinos é a **Cesariana pelo Flanco Esquerdo com a fêmea em estação (em pé)**:

\`\`\`mermaid
flowchart TD
  A[Contenção em Tronco + Bloqueio Paravertebral Proximal T13-L2 com Lidocaína 2%] --> B[Incisão Laparotômica Oblíqua Paralela à Última Costela no Flanco Esquerdo]
  B --> C[Visualização do Rúmen: Anteparo Anatômico que Bloqueia Evisceração Intestinal]
  C --> D[Palpação & Exteriorização do Ápice do Corno Uterino Gravídico]
  D --> E[Histerotomia na Curvatura Maior: Evitando Placentomas e Grandes Vasos]
  E --> F[Extração do Bezerro & Aspiração de Vias Aéreas]
  F --> G[Histerorrafia Invaginante em 2 Planos: Técnica de Utrecht ou Cushing + Lembert]
  G --> H[Lavagem Peritoneal com Solução Salina Morna & Síntese por Camadas da Parede]
  style G fill:#dcfce7,stroke:#16a34a,stroke-width:2px
\`\`\`

* **Por que o Flanco Esquerdo?** O saco dorsal e ventral do rúmen atua como um biombo natural que fecha a incisão peritoneal interna, impedindo completamente que as alças de jejuno e íleo extravasem para o campo cirúrgico (o que ocorre quase que inevitavelmente no flanco direito).
* **Bloqueio Anestésico Regional:** Bloqueio paravertebral proximal (nervos T13, L1 e L2) ou técnica em "L invertido", garantindo analgesia completa da parede abdominal sem alterar a motricidade dos membros posteriores.
* **Histerorrafia de Alta Segurança:** A sutura do útero exige fios absorvíveis monofilamentares sintéticos (Polidioxanona ou Poliglecaprone 25 tamanhos 2 ou 3) em **padrão invaginante contínuo em dois planos (Cushing seguido de Lembert ou sutura de Utrecht)**. A aposição serosa com serosa promove selamento imediato com fibrina, prevenindo contaminação peritoneal puerperal bacteriana.`
      },
      {
        id: 'sec_biotech_lab5',
        type: 'lab',
        title: 'Prontuário & Simulação Cirúrgica: Vitória (Vaca Holandesa)',
        labType: 'clinical_case_lab',
        labConfig: {
          caseTitle: 'Laparocisariana de Emergência no Flanco Esquerdo em Vaca Leiteira com Torção Uterina',
          patient: {
            name: 'Vitória (Brinco 819)',
            species: 'Bovino Leiteiro',
            breed: 'Holandês Preto e Branco (HPB)',
            age: '6 anos (4ª lactação)',
            weightKg: 690,
            habitatOrEnvironment: 'Free-stall com pista de trato automatizada'
          },
          vitals: {
            heartRateBpm: 92,
            respiratoryRateRpm: 30,
            temperatureCelsius: 38.7,
            mucousMembranes: 'Rosadas a congestas',
            capillaryRefillTimeSec: 2.0
          },
          anamnesis: 'Vaca em trabalho de parto há 4 horas com dor abdominal intermitente. O exame transvaginal revela estreitamento em espiral da vagina com dobras direcionadas em sentido horário para a direita (torção uterina de 270°). Foi realizada a manobra de rotação materna externa (manobra de Schaffer com tábua), porém a torção se manteve irredutível. O feto permanece vivo com taquicardia fetal ao ultrassom.',
          exams: [
            {
              category: 'physical_exam',
              title: 'Exame Clínico e Ginecológico Obstétrico',
              findings: 'Estenose vaginal em funil espiralado impedindo a passagem do braço obstétrico além da cérvix.',
              abnormalValues: [
                { parameter: 'Palpação Vaginal', value: 'Estenose espiralada em 270°', reference: 'Luz vaginal e cervical ampla e pérvia', status: 'critical' },
                { parameter: 'Frequência Cardíaca Fetal', value: '160 bpm (Estresse hipóxico inicial)', reference: '110 - 140 bpm', status: 'high' }
              ]
            }
          ],
          challengePrompt: 'Com torção uterina de 270° irredutível e feto vivo sob estresse hipóxico, qual é a conduta cirúrgica resolutiva?',
          decisionOptions: [
            {
              id: 'opt_dec_cesar_1',
              label: 'Realizar Laparocisariana de emergência com a vaca em estação contida no tronco, pelo flanco esquerdo, sob bloqueio paravertebral proximal (T13, L1, L2) com Lidocaína a 2% -> Exteriorização do corno uterino -> Histerotomia -> Extração do feto -> Histerorrafia em 2 planos invaginantes de Utrecht com Polidioxanona',
              description: 'Abordagem padrão ouro: contenção do rúmen bloqueando evisceração, acesso cirúrgico direto e sutura estanque hermética.',
              isOptimal: true,
              consequenceText: 'Execução cirúrgica impecável! A abordagem pelo flanco esquerdo em estação evita o estresse hemodinâmico e respiratório do decúbito dorsal em uma vaca de 690 kg. O rúmen impediu qualquer evasão de alças intestinais, e a histerorrafia invaginante de Utrecht selou o miométrio sem expor nós cirúrgicos para a cavidade peritoneal, prevenindo aderências.',
              physiologicalOutcome: 'stabilized',
              causalChainFeedback: {
                cause: 'Cesariana oportuna pelo flanco esquerdo em estação com anestesia regional e histerorrafia hermética',
                mechanism: 'Alívio imediato da torção vascular do útero e restauração da hematose do bezerro',
                effect: 'Nascimento de bezerro vivo viável e fechamento estéril da cavidade peritoneal',
                clinicalMeaning: 'Recuperação pós-operatória excelente com preservação da fertilidade futura da matriz'
              }
            },
            {
              id: 'opt_dec_cesar_2',
              label: 'Derrubar a vaca e realizar a cirurgia pelo flanco direito sob anestesia geral com xilazina em alta dose em decúbito lateral',
              description: 'Operar pelo lado direito com a fêmea deitada sob sedação profunda.',
              isOptimal: false,
              consequenceText: 'Conduta com alto risco de mortalidade! A xilazina em alta dose causa ataxia, hipotensão severa e contrações uterinas inadequadas. Ao incisar o flanco direito, metros de alças intestinais delgadas eviscerarão imediatamente sobre a palha do chão, gerando contaminação fecal maciça e choque endotóxico.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Laparotomia pelo flanco direito em decúbito sem barreira ruminal',
                mechanism: 'Evisceração descontrolada do jejuno/íleo e hipotensão por xilazina',
                effect: 'Peritonite séptica fecal e colapso circulatório na mesa cirúrgica',
                clinicalMeaning: 'Eutanásia inevitável da vaca no pós-operatório imediato'
              }
            },
            {
              id: 'opt_dec_cesar_3',
              label: 'Realizar histerorrafia com pontos simples separados de fio inabsorvível de algodão sem invaginar a serosa',
              description: 'Suturar o útero com fio de algodão comum aposicional.',
              isOptimal: false,
              consequenceText: 'Grave imperícia cirúrgica! Fios inabsorvíveis multifilamentares (como algodão ou seda) no útero atuam como pavios bacterianos por capilaridade, e suturas não-invaginantes permitem vazamento contínuo de lóquios uterinos sépticos para a cavidade celomática, desencadeando peritonite fulminante em 48 horas.',
              physiologicalOutcome: 'worsened',
              causalChainFeedback: {
                cause: 'Histerorrafia não invaginante com biomaterial inadequado poroso',
                mechanism: 'Vazamento de lóquios e exsudato pós-parto para o peritônio',
                effect: 'Peritonite purulenta aguda generalizada',
                clinicalMeaning: 'Óbito da vaca por sepse puerperal em 2 a 3 dias'
              }
            }
          ],
          learningTakeaways: [
            'A cesariana em bovinos pelo flanco esquerdo em estação aproveita o rúmen como biombo protetor natural contra evisceração.',
            'O bloqueio paravertebral proximal (T13, L1, L2) proporciona anestesia muscular e cutânea sem perda da sustentação motora.',
            'A histerorrafia invaginante em dois planos com fio absorvível monofilamentar é a única técnica aceitável para prevenir peritonite puerperal.'
          ]
        }
      },
      {
        id: 'sec_biotech_ex5',
        type: 'exercise',
        title: 'Exercício Clínico: Obstetrícia Operatória e Cesariana',
        exerciseId: 'ex_biotech_05'
      }
    ]
  }
];
