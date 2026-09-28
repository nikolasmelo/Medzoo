// src/learning/data/lessons/agrostologyLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const AGROSTOLOGY_EXERCISES: Record<string, LearningExercise> = {
  ex_agro_01: {
    id: 'ex_agro_01',
    conceptId: 'concept_forage_botany',
    type: 'multiple_choice',
    prompt: 'Uma Anta brasileira (Tapirus terrestris, 220 kg — herbívoro fermentador pós-gástrico cecocólico) teve sua dieta alterada abruptamente: o feno fibroso de Tifton (FDN 65%) foi substituído por forragem verde tenra muito jovem (FDN 35%, rica em carboidratos solúveis). O animal desenvolveu timpanismo agudo, dor em cólica e fezes pastosas fétidas. Qual é a causa fisiopatológica desse distúrbio?',
    options: [
      {
        id: 'opt_1',
        text: 'Fermentação cecal hiperaguda dos carboidratos solúveis com queda rápida do pH cecocólico, disbiose e acúmulo excessivo de gás.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A FDN (Fibra em Detergente Neutro) é a guardiã do trânsito digestivo em herbívoros monogástricos. Forragens muito tenras com baixo FDN e excesso de amido/açúcares solúveis chegam ao ceco em grande quantidade, provocando fermentação bacteriana explosiva, acidose cecal láctica e timpanismo por sobrecarga de gases.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Obstrução mecânica do esôfago causada pelo comprimento excessivo das folhas.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Folhas tenras jovens são macias e facilmente mastigadas; a patologia é fermentativa cecocólica e não mecânica esofágica.',
        conceptualErrorCategory: 'mechanical_misattribution'
      },
      {
        id: 'opt_3',
        text: 'Deficiência primária de cálcio que paralisou a motilidade do estômago pré-cecal.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A hipocalcemia aguda causa atonia generalizada, mas a apresentação clássica pós-mudança para forragem jovem é a disbiose fermentativa cecal.',
        conceptualErrorCategory: 'mineral_confusion'
      },
      {
        id: 'opt_4',
        text: 'Intoxicação aguda por taninos condensados presentes na gramínea jovem.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Gramíneas tenras de pastagem cultivada não contêm teores letais de taninos condensados; o fator desencadeante foi a deficiência de fibra estrutural efetiva (FDN).',
        conceptualErrorCategory: 'toxic_misattribution'
      }
    ],
    pedagogicalExplanation: 'A Fibra em Detergente Neutro (FDN) regula o enchimento físico e a taxa de passagem digestiva. Herbívoros silvestres requerem um mínimo de fibra estrutural para manter o epitélio e a microbiota cecocólica saudáveis.',
    causalChain: {
      cause: 'Fornecimento de forragem tenra com FDN excessivamente baixo e carboidratos não-estruturais elevados',
      mechanism: 'Aporte massivo de substrato fermentável ao ceco ultrapassando a capacidade tampão fisiológica',
      effect: 'Proliferação de bactérias amilolíticas produtoras de D-lactato com queda do pH cecal e lise da flora gram-negativa',
      clinicalMeaning: 'Timpanismo cecocólico, cólica dolorosa, translocação de endotoxinas e risco iminente de choque séptico'
    }
  },

  ex_agro_02: {
    id: 'ex_agro_02',
    conceptId: 'concept_pasture_toxicology',
    type: 'multiple_choice',
    prompt: 'Um Veado-catingueiro (Subulo gouazoubira) mantido em piquete com pastagem madura de Brachiaria decumbens com acúmulo de palha úmida apresenta apatia profunda, icterícia nas mucosas conjuntivais, edema facial e lesões ulceradas com necrose na pele despigmentada das orelhas e focinho ao se expor ao sol. Qual a sequência patogênica que culminou nesta dermatite necrótica?',
    options: [
      {
        id: 'opt_1',
        text: 'Esporidesmina do fungo Pithomyces chartarum causa colangioepatite tóxica; o fígado lesado não secreta filoeritrina, que se acumula no sangue e reage com raios solares na pele.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! Esta é a clássica Fotossensibilização Hepatógena Secundária. A filoeritrina é um produto normal da degradação da clorofila pelos microrganismos digestivos, normalmente excretada pela bile. A toxina fúngica esporidesmina lesa os ductos biliares (colangite), a filoeritrina cai na circulação e, nas áreas claras da pele expostas ao sol UV, libera radicais livres citotóxicos.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Contato dérmico direto com os espinhos microscópicos da folha da Brachiaria provocando queimadura química.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A lesão não é provocada por contato externo direto; a filoeritrina circula sistemicamente e gera necrose fotodinâmica apenas sob luz solar.',
        conceptualErrorCategory: 'external_contact_error'
      },
      {
        id: 'opt_3',
        text: 'Ataque de ectoparasitas (carrapatos e pulgas) que inocularam toxinas dermonecróticas no pavilhão auricular.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A icterícia marcante nas mucosas conjuntivais aponta inequivocamente para lesão hepatobiliar sistêmica prévia.',
        conceptualErrorCategory: 'parasitic_misattribution'
      },
      {
        id: 'opt_4',
        text: 'Déficit nutricional agudo de zinco associado a queimadura solar simples de primeiro grau.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Embora a deficiência de zinco altere a pele, ela não provoca icterícia hemolítica/colestática com lesão periocular fulminante em pastos de Brachiaria.',
        conceptualErrorCategory: 'deficiency_misattribution'
      }
    ],
    pedagogicalExplanation: 'A fotossensibilização hepatógena exige três elementos: clorofila na dieta + lesão hepática colestática (esporidesmina/saponinas) + exposição aos raios solares ultravioleta.',
    causalChain: {
      cause: 'Ingestão de conídios do fungo saprófita Pithomyces chartarum presentes na palhada de Brachiaria',
      mechanism: 'A esporidesmina causa necrose do epitélio dos ductos biliares com colestase intra-hepática severa',
      effect: 'Retenção plasmática de filoeritrina fotossensibilizante que se deposita nos capilares dérmicos da pele despigmentada',
      clinicalMeaning: 'Dermatite fotodinâmica com necrose de ponta de orelha, cegueira por edema de córnea, icterícia e óbito por falência hepática'
    }
  },

  ex_agro_03: {
    id: 'ex_agro_03',
    conceptId: 'concept_pasture_toxicology',
    type: 'multiple_choice',
    prompt: 'Durante um período de seca seguido por chuva intensa, um lote de capivaras teve acesso acidental a brotos novos de Sorgo Forrageiro (Sorghum bicolor < 30 cm). Trinta minutos depois, dois animais apresentam dispneia paroxística, tremores musculares, convulsões e decúbito. Na venopunção de emergência, o sangue venoso apresenta coloração VERMELHO-CEREJA VIVO. Qual o diagnóstico e mecanismo de ação tóxica?',
    options: [
      {
        id: 'opt_1',
        text: 'Intoxicação por Ácido Cianídrico (HCN / Dhurrina): o cianeto inibe a citocromo c oxidase mitocondrial, impedindo as células de usar o O2 que permanece preso à hemoglobina venosa.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O broto jovem de sorgo contém altas concentrações de dhurrina. Na mastigação e fermentação, libera HCN livre, um potente inibidor do ferro heme da citocromo oxidase na cadeia respiratória mitocondrial. As células asfixiam na presença de oxigênio abundante no sangue, deixando o sangue venoso oxigenado e vermelho-vivo!',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Intoxicação por Nitratos e Nitritos: o sangue fica vermelho-cereja devido ao excesso de oxigênio nos tecidos.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A intoxicação por nitritos oxida a hemoglobina a meta-hemoglobina (Fe3+), gerando sangue marrom escuro cor de chocolate, e não vermelho-cereja brilhante!',
        conceptualErrorCategory: 'opposite_toxic_blood_color'
      },
      {
        id: 'opt_3',
        text: 'Anafilaxia alimentar induzida por pólen com vasodilatação periférica extrema.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Plantas jovens ainda não floresceram e o quadro convulsivo hiperagudo com sangue venoso superoxigenado é a marca registrada do cianeto.',
        conceptualErrorCategory: 'allergic_confusion'
      },
      {
        id: 'opt_4',
        text: 'Botulismo tipo C adquirido por ingestão de esporos na raiz do sorgo.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O botulismo causa paralisia flácida simétrica ascendente com sangue venoso de coloração normal escura, e não convulsões com sangue arterializado.',
        conceptualErrorCategory: 'botulism_confusion'
      }
    ],
    pedagogicalExplanation: 'O cianeto bloqueia a respiração celular no nível da mitocôndria. O antídoto veterinário emergencial é a associação de Nitrito de Sódio (que forma meta-hemoglobina para sequestrar o cianeto) e Tiossulfato de Sódio (que converte cianeto em tiocianato excretável).',
    causalChain: {
      cause: 'Ingestão de brotos jovens de sorgo (< 40 cm) ricos no glicosídeo cianogênico dhurrina',
      mechanism: 'Liberação de HCN que se liga com altíssima afinidade ao Fe3+ da citocromo c oxidase mitocondrial',
      effect: 'Interrupção imediata da fosforilação oxidativa mitocondrial com colapso da síntese de ATP',
      clinicalMeaning: 'Asfixia celular histotóxica fulminante, sangue venoso vermelho-cereja, colapso convulsivo e morte por parada respiratória em minutos'
    }
  }
};

export const AGROSTOLOGY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_agrostology_bromatology',
    moduleId: 'mod_agrostology',
    title: 'Bromatologia Forrageira & Dinâmica de Fibras (FDN/FDA)',
    subtitle: 'A ciência das frações fibrosas: por que herbívoros silvestres entram em acidose e timpanismo sem FDN adequado.',
    estimatedMinutes: 12,
    objectives: [
      'Diferenciar Gramíneas (Poaceae) de Leguminosas (Fabaceae) em termos bromatológicos',
      'Compreender o papel da Fibra em Detergente Neutro (FDN) na saciedade e motilidade cecocólica',
      'Prevenir timpanismo e acidose fermentativa por manejo incorreto de pastagens'
    ],
    concepts: ['concept_forage_botany'],
    sections: [
      {
        id: 'sec_agro_brom_01',
        type: 'theory',
        title: 'As Frações Bromatológicas Canônicas da Forragem',
        contentMarkdown: `### O que é Forragem para um Herbívoro Silvestre?
        
Na natureza, herbívoros silvestres dividem-se em duas grandes estratégias digestivas:
1. **Fermentadores Pré-Gástricos (Ruminantes Silvestres):** Veado-catingueiro, Cervo-do-pantanal, Girafas. Fermentação no rúmen/retículo.
2. **Fermentadores Pós-Gástricos Cecocólicos:** Anta (*Tapirus terrestris*), Capivara, Roedores e Equídeos. Fermentação no ceco e cólon dilatado.

Em ambos os sistemas, o nutriente regulador não é a proteína, mas a **Fibra Dietética**.

---

### O Sistema Van Soest de Análise de Fibras

\`\`\`mermaid
flowchart TD
    A["Massa Seca da Forrageira"] --> B["Conteúdo Celular (Açúcares, Amido, Proteína Solúvel - Digestão Rápida)"]
    A --> C["Parede Celular: FDN (Fibra em Detergente Neutro)"]
    C --> D["Hemicelulose (Fermentável por bactérias celulolíticas)"]
    C --> E["FDA (Fibra em Detergente Ácido)"]
    E --> F["Celulose (Parcialmente Digestível)"]
    E --> G["Lignina (Totalmente Indigestível / Barreira Química)"]
\`\`\`

> [!IMPORTANT]
> **A Regra Canônica do FDN e FDA:**
> - **FDN Alto (> 70%):** O capim é muito fibroso, "pesado" e de digestão lenta. Preenche o ceco/rúmen rapidamente e limita o consumo voluntário por saciedade física (o animal para de comer antes de atingir a energia necessária).
> - **FDN Baixo (< 40% com açúcares altos):** O capim passa rápido demais para o ceco, onde as bactérias fermentam de forma explosiva, liberando ácido láctico e gerando **timpanismo gasoso e cólica fatal**.
> - **Janela Ideal para Feno de Herbívoros:** FDN entre **55% e 65%** com FDA entre **30% e 35%**.
        `,
        causalChain: {
          cause: 'Transição alimentar abrupta de feno fibroso estruturado para forragem jovem hiper-suculenta de baixo FDN',
          mechanism: 'Queda do pH no ceco por acúmulo de D-lactato bacteriano associada à produção excessiva de gás',
          effect: 'Atonia cecal, dor espasmódica aguda e compressão diafragmática pelo ceco distendido',
          clinicalMeaning: 'Timpanismo cecocólico agudo em antas e capivaras, desconforto respiratório e choque distributivo'
        }
      },
      {
        id: 'sec_agro_brom_02',
        type: 'exercise',
        title: 'Desafio Clínico: O Timpanismo Cecal da Anta',
        exerciseId: 'ex_agro_01'
      }
    ]
  },

  {
    id: 'lesson_agrostology_toxicology',
    moduleId: 'mod_agrostology',
    title: 'Toxicologia de Pastagens & Fotossensibilização Hepatógena',
    subtitle: 'A tríade mortal: Brachiaria, esporidesmina fúngica e fotossensibilização por retenção de filoeritrina.',
    estimatedMinutes: 14,
    objectives: [
      'Entender a cascata fisiopatológica da Fotossensibilização Hepatógena Secundária',
      'Identificar o fungo Pithomyces chartarum e o papel das saponinas litogênicas da Brachiaria',
      'Diferenciar asfixia histotóxica por cianeto (HCN) de meta-hemoglobinemia por nitratos'
    ],
    concepts: ['concept_pasture_toxicology', 'concept_forage_botany'],
    sections: [
      {
        id: 'sec_agro_tox_01',
        type: 'theory',
        title: 'A Cascata da Fotossensibilização Hepatógena',
        contentMarkdown: `### Por que o Sol Queima a Pele do Herbívoro Intoxicado?

A fotossensibilização é um dos quadros mais dramáticos da medicina veterinária silvestre. Ela ocorre quando substâncias fluorescentes fotoativas acumulam-se nos capilares da pele e são ativadas pelos raios solares UV.

\`\`\`mermaid
flowchart TD
    A["Digestão Normal da Clorofila da Pastagem"] --> B["Produção de Filoeritrina pelos Microrganismos Digestivos"]
    B --> C["Absorção Intestinal da Filoeritrina para a Circulação Porta"]
    D["Ingestão de Brachiaria com Esporidesmina (Pithomyces chartarum)"] --> E["Colangite Necrosante e Bloqueio Biliar Intra-Hepático"]
    E --> F["Fígado Incapaz de Excretar a Filoeritrina na Bile"]
    C --> G["Filoeritrina Transborda para a Circulação Sanguínea Geral"]
    F --> G
    G --> H["Depósito nos Vasos da Pele Despigmentada (Orelhas, Focinho, Pálpebras)"]
    I["Exposição à Luz Solar Ultravioleta (UV)"] --> J["Ativação Fotodinâmica: Liberação Massiva de Radicais Livres"]
    H --> J
    J --> K["Necrose Cutânea Fulminante, Desprendimento de Tecido e Choque Séptico"]
\`\`\`

> [!WARNING]
> **Diferenciação Visual Crucial de Sangue Toxicológico:**
> - **Cianeto (HCN em brotos de Sorgo):** O sangue venoso é **VERMELHO-CEREJA VIVO** (as mitocôndrias não conseguem extrair o oxigênio da hemoglobina).
> - **Nitratos/Nitritos (Pastagens adubadas ou pós-seca):** O sangue venoso é **MARROM-ESCURO COR DE CHOCOLATE** (o nitrito oxida o $Fe^{2+}$ a $Fe^{3+}$, gerando meta-hemoglobina incapaz de transportar $O_2$).
        `,
        causalChain: {
          cause: 'Pastejo contínuo em Brachiaria decumbens degradada com acúmulo de palha úmida rica em Pithomyces',
          mechanism: 'A esporidesmina induz estenose inflamatória dos ductos biliares impedindo o clearence da filoeritrina',
          effect: 'A filoeritrina acumulada na derme fotossensibiliza a pele em presença de radiação solar UV',
          clinicalMeaning: 'Dermatite solar necrosante, prurido incontrolável, automutilação, ceratoconjuntivite e óbito por sepse'
        }
      },
      {
        id: 'sec_agro_tox_02',
        type: 'exercise',
        title: 'Desafio Clínico: O Veado-catingueiro com Casca nas Orelhas',
        exerciseId: 'ex_agro_02'
      },
      {
        id: 'sec_agro_tox_03',
        type: 'exercise',
        title: 'Desafio Clínico: Sangue Vermelho-Cereja e o Mistério do Sorgo',
        exerciseId: 'ex_agro_03'
      }
    ]
  },

  {
    id: 'lesson_agrostology_inspection_lab',
    moduleId: 'mod_agrostology',
    title: 'Inspeção Botânica de Pastagens & Bancada Laboratorial',
    subtitle: 'Triagem na prática: operando o microscópio estereoscópico e testes químicos para barrar lotes mortais.',
    estimatedMinutes: 15,
    objectives: [
      'Reconhecer morfologicamente conídios de fungos saprófitas em lâmina microscópica',
      'Executar testes de bancada de fita de picrato e fluorescência UV para aflatoxinas',
      'Aprovar forragens nobres e interditar lotes contaminados na bancada interativa'
    ],
    concepts: ['concept_grazing_management', 'concept_pasture_toxicology'],
    sections: [
      {
        id: 'sec_agro_lab_01',
        type: 'theory',
        title: 'Princípios da Inspeção de Forragem e Feno em Zoológicos',
        contentMarkdown: `### A Linha de Defesa da Fauna Silvestre

Em criadouros conservacionistas e hospitais zoológicos, o lote de feno entregue pelo produtor agrícola **nunca deve ir direto para o cocho dos animais**.

**Checklist de Quarentena Botânica:**
1. **Umidade Máxima do Feno:** Deve ser inferior a **15%**. Fenos enfardados com umidade superior a 18% iniciam fermentação fúngica por *Aspergillus flavus*, produtor de **Aflatoxina B1** (altamente hepatotóxica e cumulativa).
2. **Inspeção Microscópica:** Lâminas com raspado de colmo evidenciam conídios de *Pithomyces chartarum* (em formato de barril com septos longitudinais e transversais escuros).
3. **Teste de Picrato de Sódio (Papel de Guignard):** Tiras de papel de filtro embebidas em picrato de sódio colocadas na boca do tubo de ensaio com a forragem macerada mudam de amarelo para **vermelho-tijolo** em menos de 10 minutos se houver Ácido Cianídrico (HCN) volátil.
        `,
        causalChain: {
          cause: 'Recebimento e fornecimento de feno com umidade > 18% armazenado em galpão sem ventilação',
          mechanism: 'Proliferação micelial de Aspergillus flavus e síntese de aflatoxina B1 termoestável',
          effect: 'Alquilação do DNA dos hepatócitos com inibição da síntese proteica hepática',
          clinicalMeaning: 'Insuficiência hepática subaguda, coagulopatia grave, icterícia e morte silenciosa em herbívoros do plantel'
        }
      },
      {
        id: 'sec_agro_lab_02',
        type: 'lab',
        title: 'Laboratório Interativo: Bancada de Bromatologia & Toxicologia de Pastagens',
        description: 'Assuma a bancada de análise forrageira. Inspecione amostras de Tifton, Brachiaria, Sorgo, Alfafa e Feno Mofado utilizando o microscópio e os testes bioquímicos. Interdite os lotes perigosos e aprove as forragens salubres para salvar o plantel.',
        labType: 'agrostology_botany_bench',
        labConfig: {
          targetSpecies: 'Herbívoros Silvestres Neotropicais'
        }
      }
    ]
  }
];
