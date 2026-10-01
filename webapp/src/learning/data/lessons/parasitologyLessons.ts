// src/learning/data/lessons/parasitologyLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const PARASITOLOGY_EXERCISES: Record<string, LearningExercise> = {
  ex_para_01: {
    id: 'ex_para_01',
    conceptId: 'concept_parasite_morphology_life_cycles',
    type: 'multiple_choice',
    prompt: 'Em um rebanho de ovinos Santa Inês no semiárido, vários cordeiros desmamados apresentam apatia profunda, mucosas conjuntivais brancas como porcelana (FAMACHA grau 5), edema gravitacional submandibular ("papo mole") e retardo no crescimento. Na necrópsia do abomaso de um animal recém-morto, observam-se milhares de pequenos vermes filiformes (1,5 a 3 cm) fixados à mucosa, cujas fêmeas exibem faixas espirais brancas (útero com ovos) entrelaçadas sobre o trato digestivo vermelho repleto de sangue (aspecto clássico de "poste de barbeiro"). Qual a identificação e patogenia desse helminto?',
    options: [
      {
        id: 'opt_1',
        text: 'Haemonchus contortus: nematódeo trichostrongilídeo com dente lanceta no abomaso. Cada parasita ingere até 0,05 mL de sangue por dia, provocando anemia hemorrágica espoliadora hipoalbuminêmica severa com queda na pressão oncótica e edema submandibular.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Haemonchus contortus é o parasita mais patogênico e letal da ovinocultura tropical. O formato de "poste de barbeiro" (barberpole worm) nas fêmeas adultas é inconfundível. Eles laceram a mucosa do abomaso com sua lanceta bucal para sugar sangue ativamente, levando à perda massiva de hemácias e proteínas plasmáticas (albumina), gerando edema de declive ("papo mole") e óbito por hipóxia anêmica.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Toxocara canis provocando ascaridíase obstrutiva mecânica no lúmen do abomaso.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Toxocara canis é nematódeo ascarídeo de cães (não de ovinos), não possui aspecto de poste de barbeiro e habita o intestino delgado, não o abomaso.',
        conceptualErrorCategory: 'species_host_confusion'
      },
      {
        id: 'opt_3',
        text: 'Fasciola hepatica: trematódeo achatado em forma de folha fixado aos canalículos biliares hepáticos.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A Fasciola hepatica é um trematódeo foliáceo que parasita o fígado e ductos biliares (provocando colangite crônica), e não nematódeo filiforme no abomaso.',
        conceptualErrorCategory: 'trematode_morphology_confusion'
      },
      {
        id: 'opt_4',
        text: 'Moniezia expansa: cestódeo em fita segmentado por proglotes que causa anemia hipercrômica pura.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Moniezia é uma tênia (cestódeo) longa e achatada que habita o intestino delgado e raramente causa anemia letal com papo mole.',
        conceptualErrorCategory: 'cestode_confusion'
      }
    ],
    pedagogicalExplanation: 'Haemonchus contortus possui boca armada com lanceta cortante e tropismo estrito pelo abomaso de ruminantes. A hematofagia voraz é a causa primária da anemia severa e hipoproteinemia.',
    causalChain: {
      cause: 'Ingestão de larvas infectantes (L3) de Haemonchus contortus nas pastagens úmidas',
      mechanism: 'Fixação de milhares de adultos na mucosa abomasal com lanceta bucal lacerando vasos submucosos',
      effect: 'Espoliação crônica massiva de eritrócitos e albumina sérica com queda da pressão oncótica plasmática',
      clinicalMeaning: 'Anemia grave (mucosa porcelana), edema submandibular em "papo mole" e óbito por hipóxia anóxica'
    }
  },

  ex_para_02: {
    id: 'ex_para_02',
    conceptId: 'concept_parasitology_cestodes_trematodes',
    type: 'multiple_choice',
    prompt: 'Durante a inspeção sanitária post-mortem de fígados de bovinos procedentes de uma região de várzea úmida no Vale do Paraíba (SP), o médico veterinário observa fígados aumentados, cápsula espessada e ductos biliares salientes, endurecidos e esbranquiçados na superfície visceral (aspecto de "canos de cachimbo"), com calcificação periductal e presença de múltiplos parasitas achatados em folha medindo 2 a 3 cm no interior da bile escura. No pasto da fazenda, há abundante presença de caramujos do gênero Lymnaea. Qual o diagnóstico e o ciclo biológico desse agente?',
    options: [
      {
        id: 'opt_1',
        text: 'Fasciolose Hepática por Fasciola hepatica: trematódeo digenético heteroxeno cujo miracídio penetra no caramujo Lymnaea, desenvolve esporocistos, rédias e cercárias que encistam em metacercárias nas plantas aquáticas consumidas pelos bovinos.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! Fasciola hepatica é o clássico trematódeo foliáceo. Os bovinos infectam-se ingerindo metacercárias encistadas na vegetação de áreas alagadiças. As formas jovens perfuram a cápsula de Glisson, migram pelo parênquima hepático causando hemorragia traumática e alojam-se nos ductos biliares, onde a colangite crônica estimula fibrose e deposição de sais de cálcio ("canos de cachimbo").',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Echinococcus granulosus gerando cistos hidáticos uniloculares estéreis nas veias supra-hepáticas.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A hidatidose por Echinococcus forma cistos volumosos repletos de líquido ("areia hidática") no parênquima e não trematódeos adultos livres nos ductos biliares.',
        conceptualErrorCategory: 'echinococcus_confusion'
      },
      {
        id: 'opt_3',
        text: 'Toxocara canis em fase de migração larva migrans visceral pulmonar.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Toxocara canis é um nematódeo de canídeos; os vermes foliáceos calcificados em ductos biliares bovinos são trematódeos de Fasciola.',
        conceptualErrorCategory: 'ascarid_misattribution'
      },
      {
        id: 'opt_4',
        text: 'Intoxicação por cobre gerando cirrose micronodular sem qualquer participação parasitária.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A presença física dos vermes foliáceos macroscópicos nos ductos biliares e caramujos Lymnaea no ambiente confirmam inequivocamente fasciolose.',
        conceptualErrorCategory: 'copper_toxicity_confusion'
      }
    ],
    pedagogicalExplanation: 'A Fasciola hepatica requer caramujos Lymnaea como hospedeiros intermediários obrigatórios. A ingestão de metacercárias na vegetação úmida fecha o ciclo epidemiológico.',
    causalChain: {
      cause: 'Ingestão de metacercárias encistadas em pastagens de várzea alagadas com caramujos Lymnaea',
      mechanism: 'Migração mecânica de fascíolas jovens pelo parênquima hepático e fixação nos ductos biliares',
      effect: 'Colangite crônica hiperplásica, fibrose periductal severa e mineralização ("canos de cachimbo")',
      clinicalMeaning: 'Condenação de fígados no abate, anemia hipocrômica, caquexia e queda drástica na produção de leite'
    }
  },

  ex_para_03: {
    id: 'ex_para_03',
    conceptId: 'concept_coproparasitology_diagnostics',
    type: 'multiple_choice',
    prompt: 'Para avaliar a carga parasitária de um rebanho caprino, o veterinário realiza a técnica de Gordon & Whitlock em Câmara de McMaster: pesa 2 gramas de fezes e dilui em 58 mL de solução hipersaturada de cloreto de sódio (densidade 1,20 g/mL). Ao examinar os dois retículos quadriculados da câmara sob objetiva de 10x no microscópio, conta um total de 36 ovos típicos de estrongilídeos (elípticos, casca lisa e fina com mórula interna). Qual é o resultado do OPG (Ovos por Grama de Fezes) e sua interpretação clínica?',
    options: [
      {
        id: 'opt_1',
        text: 'OPG = 1.800 (Cálculo: 36 ovos × fator 50). Representa carga parasitária alta e crítica (> 1.000 OPG em caprinos), indicativa de verminose clínica com alto risco de descompensação e contaminação extrema da pastagem.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! No protocolo canônico de McMaster com 2 g de fezes em 58 mL (volume total 60 mL) e dois retículos de 0,15 mL cada (volume total lido = 0,3 mL): Fator multiplicador = 60 / (2 × 0,3) = 50. Portanto: 36 × 50 = 1.800 OPG. Em pequenos ruminantes tropicais, contagens > 1.000 OPG indicam infecção clínica de alto risco exigindo intervenção estratégica imediata.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'OPG = 360 (Cálculo: 36 ovos × fator 10). Carga parasitária baixa e fisiológica sem risco para o rebanho.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O fator multiplicador padrão para 2g / 60mL em dois retículos é 50, e não 10; subestimar a contagem para 360 retardaria o tratamento de um rebanho criticamente infestado.',
        conceptualErrorCategory: 'calculation_factor_error'
      },
      {
        id: 'opt_3',
        text: 'OPG = 3.600 (Cálculo: 36 ovos × fator 100). Erro por contagem de apenas um retículo da câmara.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O fator 100 seria utilizado caso tivesse sido lido apenas um dos retículos da câmara; com a leitura de ambos os retículos somados, o fator é 50.',
        conceptualErrorCategory: 'grid_count_confusion'
      },
      {
        id: 'opt_4',
        text: 'OPG = 36 (Contagem direta sem necessidade de multiplicar pelo volume de diluição da câmara).',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O número de ovos vistos nos retículos representa uma alíquota microscópica de 0,3 mL e deve ser corrigido para a massa de 1 grama de fezes.',
        conceptualErrorCategory: 'raw_count_misattribution'
      }
    ],
    pedagogicalExplanation: 'A técnica de McMaster baseia-se na flutuação de ovos leves em solução densa e na contagem sob grade volumétrica padronizada. O cálculo de OPG = (ovos contados nos dois retículos) × 50.',
    causalChain: {
      cause: 'Presença de alta carga de fêmeas adultas férteis de nematódeos no trato digestivo de caprinos',
      mechanism: 'Eliminação fecal de milhares de ovos embrionados em mórula flutuantes em solução hipersaturada',
      effect: 'Contagem de 36 ovos na câmara de McMaster correspondendo a 1.800 OPG de fezes',
      clinicalMeaning: 'Infestação parasitária severa com alta contaminação do piquete e necessidade de vermifugação seletiva'
    }
  },

  ex_para_04: {
    id: 'ex_para_04',
    conceptId: 'concept_parasitology_hoffman_baermann',
    type: 'multiple_choice',
    prompt: 'Um bezerro com tosse paroxística e taquipneia a pasto tem suspeita de bronquite verminótica por Dictyocaulus viviparus. Simultaneamente, vacas do mesmo lote apresentam fezes pastosas com suspeita de Fasciola hepatica. O estagiário realizou a técnica de flutuação simples de Willis (salmoura de NaCl, densidade 1,20 g/mL) e o resultado foi 100% negativo para ambas as enfermidades. Por que esse exame falhou e quais são as duas técnicas laboratoriais canônicas corretas para diagnosticar esses agentes nas fezes?',
    options: [
      {
        id: 'opt_1',
        text: 'A salmoura não funciona porque ovos de Fasciola são pesados (> 1,30 g/mL) e D. viviparus elimina larvas L1 vivas (não ovos). Conduta: Sedimentação Natural de Hoffman, Pons & Janer para ovos de Fasciola e Técnica de Baermann (hidrotermotropismo) para larvas L1 de Dictyocaulus.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Ovos de trematódeos (Fasciola) são operculados e muito densos (> 1,30 g/mL), sedimentando na salmoura em vez de flutuar. Já o Dictyocaulus viviparus realiza eclosão intraluminal: as fezes não contêm ovos, mas sim larvas L1 móveis que migram para a água morna por termohidrotropismo no funil de Baermann.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'O estagiário errou o tempo de espera: bastava deixar o tubo de Willis descansando por 48 horas em estufa aquecida a 60 °C.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Deixar amostras fecais a 60 °C lise as formas parasitárias e cristaliza o sal, destruindo o exame.',
        conceptualErrorCategory: 'incubation_misconception'
      },
      {
        id: 'opt_3',
        text: 'Dictyocaulus é diagnosticado exclusivamente por biópsia da cauda do animal e Fasciola por punção esplênica.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto e absurdo. Dictyocaulus é parasita pulmonar diagnosticado por larvas fecais no Baermann; Fasciola é diagnosticada por ovos nas fezes via Hoffman.',
        conceptualErrorCategory: 'invasive_test_confusion'
      },
      {
        id: 'opt_4',
        text: 'O exame falhou porque ambos os parasitas só liberam antígenos na saliva durante o período da noite.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A falha decorre da densidade física do ovo de Fasciola e da biologia larval do Dictyocaulus, que requerem técnicas coprológicas específicas.',
        conceptualErrorCategory: 'circadian_confusion'
      }
    ],
    pedagogicalExplanation: 'A técnica de Hoffman, Pons & Janer utiliza sedimentação espontânea em água para concentrar ovos pesados operculados. A técnica de Baermann utiliza funil com água morna para atrair larvas L1 termohidrotópicas de parasitas pulmonares.',
    causalChain: {
      cause: 'Uso inadequado de solução de flutuação leve (densidade 1,20) para pesquisar ovos pesados de trematódeos e larvas pulmonares',
      mechanism: 'Ovos operculados densos precipitam no fundo do frasco e larvas L1 móveis não são concentradas no menisco',
      effect: 'Falso-negativo laboratorial completo com omissão do diagnóstico de fasciolose e pneumonia verminótica',
      clinicalMeaning: 'Evolução silenciosa do rebanho para enfisema pulmonar fatal e cirrose biliar calcificada crônica'
    }
  },

  ex_para_05: {
    id: 'ex_para_05',
    conceptId: 'concept_anthelmintic_resistance_management',
    type: 'multiple_choice',
    prompt: 'Em uma fazenda de ovinos com histórico de uso contínuo de Ivermectina 1% a cada 30 dias em 100% dos animais durante 5 anos seguidos, o rebanho continuou apresentando mortes por anemia. O veterinário realizou o Teste de Redução da Contagem de OPG Fecal (FECRT): a média pré-tratamento era de 2.200 OPG e, 14 dias após a aplicação de Ivermectina, a média foi de 1.950 OPG (redução de apenas 11,3%). Qual o diagnóstico epidemiológico e a conduta racional imediata?',
    options: [
      {
        id: 'opt_1',
        text: 'Resistência anti-helmíntica severa às lactonas macrocíclicas pela erradicação da população de refúgio. Conduta: suspender imediatamente a ivermectina, realizar teste com outras classes químicas (Levamisol ou Monepantel), adotar tratamento seletivo pelo método FAMACHA e rotação de piquetes.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! De acordo com a WAAVP, considera-se resistência anti-helmíntica quando a redução do OPG fecal (FECRT) aos 14 dias pós-tratamento for inferior a 95%. Vermifugar 100% do rebanho repetidamente destrói a "população em refúgio" (parasitas sensíveis que não foram expostos à droga), selecionando mutantes resistentes homozygous. A salvação do rebanho exige troca de princípio ativo testado e tratamento seletivo via FAMACHA (tratar apenas graus 4 e 5).',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Subdosagem acidental: a conduta correta é dobrar a dose de Ivermectina para 400 mcg/kg semanalmente.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Aumentar a dose de uma droga com eficácia comprovada de apenas 11% não reverte a resistência genética estabelecida e gera toxicidade desnecessária nos animais.',
        conceptualErrorCategory: 'escalation_misconception'
      },
      {
        id: 'opt_3',
        text: 'Reinfecção imediata em menos de 48 horas no pasto com larvas que já produziram ovos adultos no dia seguinte.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O período pré-patente (tempo da ingestão da L3 até a postura de ovos por fêmeas adultas) de Haemonchus é de aproximadamente 18 a 21 dias; ovos presentes aos 14 dias comprovam sobrevivência dos vermes ao tratamento.',
        conceptualErrorCategory: 'prepatent_period_confusion'
      },
      {
        id: 'opt_4',
        text: 'Falso-positivo causado por coprofagia natural de fezes de aves contendo coccídeos.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Ovos de estrongilídeos têm morfologia típica e o teste FECRT comprovou a ineficácia terapêutica das lactonas macrocíclicas na população de nematódeos do rebanho.',
        conceptualErrorCategory: 'coccidia_confusion'
      }
    ],
    pedagogicalExplanation: 'A resistência anti-helmíntica é um dos maiores desafios mundiais da medicina veterinária. O teste FECRT (< 95% de redução) diagnostica a falência da droga e o método FAMACHA preserva o refúgio genético de cepas sensíveis.',
    causalChain: {
      cause: 'Vermifugação indiscriminada supressiva de 100% do plantel com a mesma base farmacológica por anos',
      mechanism: 'Eliminação seletiva de vermes suscetíveis e eliminação total da população em refúgio',
      effect: 'Sobrevivência exclusiva de nematódeos com mutações genéticas de canais de cloro resistentes a avermectinas',
      clinicalMeaning: 'Eficácia do vermífugo cai para 11%, perpetuação de mortalidade no rebanho e necessidade de manejo integrado'
    }
  }
};

export const PARASITOLOGY_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_parasitology_morphology',
    moduleId: 'mod_parasitology',
    title: 'Helmintos Gastrintestinais: Nematódeos & Ciclos Biológicos',
    subtitle: 'Morfologia diagnóstica, hematofagia do Haemonchus contortus e nematódeos veterinários.',
    estimatedMinutes: 20,
    objectives: [
      'Diferenciar morfologicamente os principais nematódeos de interesse veterinário (trichostrongilídeos, ancilóstomos, ascarídeos)',
      'Compreender a fisiopatologia da hematofagia voraz do Haemonchus contortus no abomaso de ruminantes',
      'Analisar a cinética da hipobiose larval (L4 em dormência) e surtos sazonais de verminose'
    ],
    concepts: ['concept_parasite_morphology_life_cycles'],
    sections: [
      {
        id: 'sec_para_morph_01',
        type: 'theory',
        title: 'Morfologia, Tropismo de Órgãos e Patogenia dos Nematódeos',
        contentMarkdown: `# Aula Universitária: Nematódeos Gastrintestinais & Fisiopatologia Parasitária

> 📖 Referência Canônica: Taylor, M. A.; Coop, R. L.; Wall, R. L. *Veterinary Parasitology*, 4th ed. Wiley-Blackwell. Bowman, D. D. *Georgis' Parasitology for Veterinarians*, 11th ed. Elsevier. Urquhart, G. M. et al. *Parasitologia Veterinária*, Guanabara Koogan.

Os nematódeos gastrintestinais constituem a principal causa de mortalidade em cordeiros e bezerros em regiões tropicais e subtropicais do planeta:

### 1. O Campeão da Letalidade: *Haemonchus contortus*
- **Localização:** Mucosa do abomaso de ovinos, caprinos e bovinos.
- **Dimorfismo e Morfologia:** Fêmeas adultas medem de 2 a 3 cm e apresentam o clássico padrão de **"poste de barbeiro" (*barberpole worm*)**: o útero em espiral branca repleto de ovos enrola-se ao redor do intestino vermelho túrgido de sangue fresco digerido. Os machos possuem bolsa copuladora bilobada espiculada.
- **Ação Espoliadora Hematófaga:** O verme possui uma **lanceta bucal dorsal cortante**. Ele lacera os capilares da mucosa e injeta saliva com substâncias anticoagulantes. Cada verme adulto consome cerca de **0,05 mL de sangue ao dia**. Uma carga de 2.000 vermes espolia **100 mL de sangue diariamente** de um cordeiro de 20 kg!
- **Hipobiose (Parada de Desenvolvimento Larval):** Durante o inverno ou seca prolongada, as larvas L4 invadem as glândulas gástricas e entram em estado de latência metabólica (hipobiose), emergindo sincronizadamente nas chuvas do periparto, causando a "onda de primavera" (*spring rise*).

\`\`\`mermaid
flowchart TD
    A["Ovos Eliminados nas Fezes na Pastagem"] --> B["Eclosão de Larvas L1 -> L2 no Bolo Fecal"]
    B --> C["Desenvolvimento da Larva Infectante com Bainha Dupla (L3)"]
    C --> D["Migração Hidrotópica no Orvalho Matutino para o Ápice das Folhas"]
    D --> E["Ingestão da L3 pelo Ovino Durante o Pastejo"]
    E --> F["Desembainhamento no Rúmen e Colonização do Abomaso"]
    F --> G["Laceracao de Mucosa pela Lanceta Bucal -> Hematofagia Voraz"]
    G --> H["Anemia Microcítica Hipocrômica + Hipoalbuminemia Severa"]
    H --> I["Queda da Pressão Coloidosmótica Oncótica Plasmática"]
    I --> J["Edema Gravitacional Submandibular ('Papo Mole') e Choque Anêmico"]
\`\`\`

---

### 2. Principais Nematódeos Veterinários Comparados

| Parasita | Espécie Acometida | Órgão Alvo | Patogenia Principal | Lesão Clássica |
|---|---|---|---|---|
| ***Haemonchus contortus*** | Ovinos, caprinos, bovinos | Abomaso | Hematofagia ativa com lanceta bucal | Anemia profunda, "papo mole", abomasite |
| ***Ostertagia ostertagi*** | Bovinos | Abomaso | Destruição de glândulas gástricas pelas L4 | Mucosa em "couro marroquino", pH ruminal neutro |
| ***Trichostrongylus axei*** | Ruminantes e equinos | Abomaso / Estômago | Erosão de mucosa, enterite catarral | Diarreia aquosa crônica, caquexia |
| ***Ancylostoma caninum*** | Cães e carnívoros silvestres | Intestino delgado | Hematófago voraz com dentes cortantes | Melena, anemia normocítica/microcítica em filhotes |
| ***Strongylus vulgaris*** | Equinos | Artéria mesentérica cranial | Tromboembolismo parasitário das L4 | Cólica tromboembólica, infarto isquêmico intestinal |
| ***Toxocara canis*** | Cães (zoonose humana) | Intestino delgado (adulto) | Migração traqueal e somática larval | Síndrome de Larva Migrans Visceral e Ocular |`,
        causalChain: {
          cause: 'Ingestão contínua de larvas L3 de Haemonchus contortus em pastagem contaminada',
          mechanism: 'Laceracao mecânica da vascularização abomasal por lanceta bucal de milhares de nematódeos',
          effect: 'Perda maciça de eritrócitos e albumina plasmática na luz do tubo digestivo',
          clinicalMeaning: 'Anemia extrema, queda na pressão coloidosmótica, edema submandibular em papo mole e morte'
        }
      },
      {
        id: 'sec_para_morph_02',
        type: 'exercise',
        title: 'Caso Clínico: O Poste de Barbeiro e o Papo Mole do Cordeiro',
        exerciseId: 'ex_para_01'
      }
    ]
  },

  {
    id: 'lesson_parasitology_cestodes_trematodes',
    moduleId: 'mod_parasitology',
    title: 'Platelmintos: Biologia & Patogenia de Cestódeos e Trematódeos',
    subtitle: 'Fasciola hepatica, ciclos com caramujos Lymnaea, Moniezia em ruminantes e Dipylidium caninum.',
    estimatedMinutes: 22,
    objectives: [
      'Diferenciar os filos Nemathelminthes de Platyhelminthes (Cestódeos vs Trematódeos)',
      'Descrever detalhadamente o ciclo biológico de Fasciola hepatica e sua ação colestática no fígado',
      'Compreender os ciclos indiretos heteroxenos de Moniezia (ácaros de pasto) e Dipylidium (pulgas)'
    ],
    concepts: ['concept_parasitology_cestodes_trematodes', 'concept_parasite_morphology_life_cycles'],
    sections: [
      {
        id: 'sec_para_plat_01',
        type: 'theory',
        title: 'Morfologia e Ciclos Biológicos dos Platelmintos Veterinários',
        contentMarkdown: `# Aula Universitária: Platelmintos — Trematódeos Digenéticos e Cestódeos

> 📖 Referência Canônica: Taylor, M. A. et al. *Veterinary Parasitology*, 4th ed. Bowman, D. D. *Georgis' Parasitology for Veterinarians*. Radostits, O. M. et al. *Clínica Veterinária*.

Ao contrário dos nematódeos cilíndricos, os platelmintos são vermes achatados dorsoventralmente, acelomados e desprovidos de trato digestivo completo (em cestódeos, o alimento é absorvido diretamente pelo tegumento sincicial):

### 1. *Fasciola hepatica*: O Grande Trematódeo dos Canais Biliares
- **Morfologia:** Verme hermafrodita foliáceo de 2 a 3 cm de comprimento com duas ventosas (oral e ventral/acetábulo) e projeção cefálica cônica característica.
- **O Ciclo Biológico Heteroxeno Canônico:**
  1. Ovos pesados operculados amarelos-dourados são eliminados nas fezes dos ruminantes e alcançam a água doce.
  2. Na água, o ovo embriona e libera o **Miracídio** ciliado livre-natante.
  3. O miracídio penetra ativamente no caramujo aquático hospedeiro intermediário (*Lymnaea colubella* / *Lymnaea viatrix*).
  4. No caramujo, ocorre multiplicação assexuada poliembriônica: Esporocisto $\rightarrow$ Rédias $\rightarrow$ **Cercárias**.
  5. As cercárias nadam para fora do caramujo e encistam em vegetações aquáticas de margem de brejo como **Metacercárias**.
  6. O bovino/ovino ingere a pastagem com metacercárias. No duodeno, as formas jovens desencistam, perfuram a parede intestinal e a cápsula de Glisson hepática, migrando por 6 a 8 semanas pelo parênquima antes de se fixarem nos ductos biliares adultos.

\`\`\`mermaid
flowchart LR
    A["Ovo Operculado nas Fezes"] --> B["Miracídio Ciliado na Água"]
    B --> C["Caramujo Lymnaea (Multiplicação Assexuada)"]
    C --> D["Cercárias Livres"]
    D --> E["Metacercárias Encistadas em Plantas de Várzea"]
    E --> F["Ingestão por Ruminantes -> Perfusão Hepática e Colangite"]
\`\`\`

---

### 2. Cestódeos Veterinários: Escólex, Estróbilo e Proglotes

| Cestódeo | Hospedeiro Definitivo | Hospedeiro Intermediário | Forma Larval e Localização | Importância Clínica |
|---|---|---|---|---|
| ***Dipylidium caninum*** | Cão, gato, humano | Pulga (*Ctenocephalides*) e Piolho | Cisticercoide no celoma do inseto | Prurido anal ("sinal do trenó"), proglotes móveis em fezes |
| ***Moniezia expansa*** | Ovinos e caprinos | Ácaros oribatídeos do pasto | Cisticercoide na cavidade do ácaro | Competição nutricional, diarreia e obstrução intestinal em filhotes |
| ***Taenia hydatigena*** | Cães e canídeos silvestres | Ruminantes e suínos | *Cysticercus tenuicollis* no mesentério/peritônio | Condenação de carcaças e vísceras em abatedouros |
| ***Echinococcus granulosus*** | Cães carnívoros | Herbívoros e Ser Humano | Cisto Hidático unilocular no fígado/pulmão | Zoonose grave: hidatidose cística com choque anafilático se romper |`,
        causalChain: {
          cause: 'Pastoreio de bovinos em áreas úmidas de várzea com presença de caramujos Lymnaea',
          mechanism: 'Migração de fascíolas jovens e fixação nos ductos biliares provocando colangite proliferativa crônica',
          effect: 'Hipertrofia fibrosa dos ductos com calcificação distrófica parietal ("canos de cachimbo")',
          clinicalMeaning: 'Hepatite crônica esclerosante, emagrecimento progressivo, condenação em frigorífico e anemia'
        }
      },
      {
        id: 'sec_para_plat_02',
        type: 'exercise',
        title: 'Verificação Sanitária: Fígados em Cano de Cachimbo e Caramujos Lymnaea',
        exerciseId: 'ex_para_02'
      }
    ]
  },

  {
    id: 'lesson_parasitology_copro',
    moduleId: 'mod_parasitology',
    title: 'Diagnóstico Coproparasitológico Quantitativo (Câmara de McMaster)',
    subtitle: 'Flutuação hipersaturada, o método Gordon & Whitlock e o cálculo fidedigno de OPG.',
    estimatedMinutes: 24,
    objectives: [
      'Dominar o princípio físico da flutuação de ovos por diferença de densidade relativa',
      'Executar o cálculo de OPG (Ovos por Grama de Fezes) na Câmara de McMaster dupla',
      'Interpretar clinicamente faixas de OPG para tomada de decisão terapêutica seletiva'
    ],
    concepts: ['concept_coproparasitology_diagnostics'],
    sections: [
      {
        id: 'sec_para_copro_01',
        type: 'theory',
        title: 'Fundamentos Físico-Químicos e Metodologia da Câmara de McMaster',
        contentMarkdown: `# Aula Universitária: Coproparasitologia Quantitativa & Câmara de McMaster

> 📖 Referência Canônica: Coles, G. C. et al. *World Association for the Advancement of Veterinary Parasitology (WAAVP) methods for the detection of anthelmintic resistance in ruminants*. Vet Parasitol. Hendrix, C. M.; Robinson, E. *Diagnostic Parasitology for Veterinary Technicians*, 5th ed. Elsevier.

O exame coproparasitológico quantitativo substitui o achado puramente qualitativo ("positivo ou negativo") por uma estimativa numérica rigorosa da intensidade parasitária do hospedeiro:

### 1. O Princípio Físico da Densidade de Flutuação
- **Ovos de Estrongilídeos (*Haemonchus*, *Trichostrongylus*, *Oesophagostomum*) e Ancilostomídeos:** Possuem casca fina lisa e densidade média de **1,05 a 1,15 g/mL**.
- **Solução Hipersaturada de Cloreto de Sódio (NaCl):** Preparada dissolvendo sal em água aquecida até saturação (cerca de 350-400 g/L), atingindo **densidade de 1,20 g/mL**. Como a solução é mais densa que os ovos, estes flutuam rapidamente para o menisco superior sob a lamínula.

---

### 2. O Protocolo Padronizado de Gordon & Whitlock (1939)

\`\`\`mermaid
flowchart TD
    A["Pesar 2,0 g de Fezes Frescas"] --> B["Adicionar 58 mL de Solução Hipersaturada de NaCl (densidade 1,20)"]
    B --> C["Volume Total da Suspensão Homogeneizada = 60 mL"]
    C --> D["Filtragem Rápida em Peneira / Gaze Dupla para Reter Fibras Grosseiras"]
    D --> E["Homogeneizar com Pipeta Pasteur e Preencher os 2 Retículos da Câmara"]
    E --> F["Volume sob cada retículo de 10x10 mm = 0,15 mL (Total Lido = 0,3 mL)"]
    F --> G["Contar Todos os Ovos Dentro das Faixas Quadriculadas nos 2 Retículos"]
    G --> H["Fórmula: OPG = (Total de Ovos Contados) × 50"]
\`\`\`

> [!IMPORTANT]
> **Dedução Matemática do Fator Multiplicador 50:**
> - Volume total da suspensão preparada: $60\text{ mL}$.
> - Quantidade de fezes pesada: $2\text{ g}$ (concentração: $2\text{ g} / 60\text{ mL} = 1\text{ g em } 30\text{ mL}$).
> - Volume total lido nos dois retículos: $0,15\text{ mL} + 0,15\text{ mL} = 0,30\text{ mL}$.
> - Fração de grama de fezes inspecionada sob o microscópio:
>   $$\text{Massa Lida} = \frac{0,30\text{ mL}}{30\text{ mL/g}} = 0,01\text{ g de fezes}$$
> - Para converter o número de ovos encontrados em 0,01 g para **1,0 g de fezes**:
>   $$\text{Fator} = \frac{1}{0,01} = 50$$
> - Se você contar 36 ovos nos dois retículos: $\text{OPG} = 36 \times 50 = 1.800 OPG$.`,
        causalChain: {
          cause: 'Eliminação fecal diária contínua de ovos embrionados por fêmeas férteis de estrongilídeos',
          mechanism: 'Flutuação seletiva na solução saturada de densidade 1,20 g/mL sob a câmara milimetrada',
          effect: 'Contagem representativa do número de ovos por grama de fezes excretada',
          clinicalMeaning: 'Quantificação da carga biológica do rebanho orientando a intervenção antiparasitária seletiva'
        }
      },
      {
        id: 'sec_para_copro_02',
        type: 'exercise',
        title: 'Desafio Matemático: Cálculo de OPG e Interpretação Sanitária',
        exerciseId: 'ex_para_03'
      }
    ]
  },

  {
    id: 'lesson_parasitology_special_diagnostics',
    moduleId: 'mod_parasitology',
    title: 'Diagnósticos Coprológicos Especiais: Hoffman & Baermann',
    subtitle: 'Sedimentação para ovos pesados de Fasciola e isolamento de larvas pulmonares por hidrotermotropismo.',
    estimatedMinutes: 22,
    objectives: [
      'Explicar por que ovos pesados de trematódeos falham na flutuação e exigem sedimentação espontânea',
      'Executar a técnica de Hoffman, Pons & Janer (HPJ) para detecção de Fasciola hepatica',
      'Dominar a técnica de Baermann para pesquisa de larvas L1 de Dictyocaulus viviparus e Aelurostrongylus'
    ],
    concepts: ['concept_parasitology_hoffman_baermann', 'concept_coproparasitology_diagnostics'],
    sections: [
      {
        id: 'sec_para_spec_01',
        type: 'theory',
        title: 'Técnicas Coprológicas para Ovos Pesados e Larvas Vivas',
        contentMarkdown: `# Aula Universitária: Técnicas de Sedimentação e Larvoscopia

> 📖 Referência Canônica: Zajac, A. M.; Conboy, G. A. *Veterinary Clinical Parasitology*, 8th ed. Wiley-Blackwell. Deplazes, P. et al. *Parasitology in Veterinary Medicine*, Wageningen Academic Publishers.

Nem todos os parasitas eliminam ovos leves flutuantes em salmoura. O domínio da coprologia veterinária exige metodologias direcionadas às propriedades biológicas de cada agente:

### 1. Técnica de Sedimentação Espontânea de Hoffman, Pons & Janer (HPJ)
- **Princípio:** Indicada para ovos operculados densos ($> 1,30\text{ g/mL}$), como os de ***Fasciola hepatica*** e *Paramphistomum*.
- **Passo a Passo:**
  1. Homogeneizar 2 a 5 g de fezes em cálice cônico de vidro com 100 mL de água corrente filtrada.
  2. Filtrar em gaze ou tamis para remover fragmentos vegetais grosseiros.
  3. Deixar a suspensão em repouso absoluto por **30 a 60 minutos** para sedimentação por gravidade.
  4. Desprezar o sobrenadante por aspiração ou decantação lenta sem agitar o sedimento.
  5. Ressuspender em água limpa e repetir o processo até o sobrenadante ficar límpido.
  6. Colher uma gota do sedimento no fundo do cálice com pipeta longa, colocar em lâmina com lamínula e corar com uma gota de Lugol fraco.
  7. **Morfologia do Ovo de Fasciola:** Ovo volumoso ($130-150 \times 60-90 µm$), elíptico, casca lisa amarelo-dourada translúcida, contendo um opérculo nítido em um dos polos e massa celular embrionária compacta.

---

### 2. Técnica de Baermann (Larvoscopia por Hidrotermotropismo)
- **Princípio:** Indicada para nematódeos cujas fêmeas são vivíparas ou cujos ovos eclodem no trato respiratório/digestivo, sendo eliminados nas fezes como **larvas L1 vivas** (ex.: ***Dictyocaulus viviparus*** em bovinos, *Dictyocaulus arnfieldi* em asininos, *Aelurostrongylus abstrusus* em felinos).
- **Mecanismo Fisiológico:** As larvas de nematódeos possuem **termotropismo positivo** (migram em direção ao calor) e **hidrotropismo positivo** (movem-se em direção à água líquida). Como são incapazes de nadar contra a gravidade em líquidos calmos, elas caem lentamente pelo funil.

\`\`\`mermaid
flowchart TD
    A["Envolver 10 a 20 g de Fezes Frescas em Gaze / Papel Toalha"] --> B["Suspender a Trouxa em Funil de Vidro Preenchido com Água Morna (37 a 40 °C)"]
    B --> C["O Fundo do Funil Conecta-se a Tubo de Borracha com Pinça de Mohr Fechada"]
    C --> D["Larvas Sentem o Calor da Água, Migram para Fora das Fezes e Afundam por Gravidade"]
    D --> E["Após 12 a 24 Horas de Repouso, Abre-se a Pinça e Coletam-se os Primeiros 5-10 mL"]
    E --> F["Centrifugação ou Sedimentação Direta e Leitura Microscópica de Larvas L1 Vivas"]
\`\`\``,
        causalChain: {
          cause: 'Uso de técnica de Baermann com água morna em amostra de fezes de bezerro com tosse',
          mechanism: 'Estímulo termohidrotópico induz a migração ativa das larvas L1 de Dictyocaulus para o fundo do funil',
          effect: 'Concentração microscópica de larvas pulmonares móveis no sedimento recolhido',
          clinicalMeaning: 'Diagnóstico confirmatório de bronquite verminótica orientando tratamento com anti-helmíntico sistêmico'
        }
      },
      {
        id: 'sec_para_spec_02',
        type: 'exercise',
        title: 'Desafio Metodológico: O Falso-Negativo na Salmoura e o Resgate por Baermann/Hoffman',
        exerciseId: 'ex_para_04'
      }
    ]
  },

  {
    id: 'lesson_parasitology_fecal_bench',
    moduleId: 'mod_parasitology',
    title: 'Manejo Antiparasitário Estratégico & Bancada Coproparasitológica',
    subtitle: 'Teste FECRT da WAAVP, método FAMACHA, refúgio genético e laboratório de microscopia virtual.',
    estimatedMinutes: 25,
    objectives: [
      'Executar o Teste de Redução de OPG Fecal (FECRT) e interpretar resistência segundo a WAAVP',
      'Aplicar o escore FAMACHA (graus 1 a 5) para tratamento seletivo direcionado em pequenos ruminantes',
      'Operar o microscópio virtual focando ovos na câmara de McMaster e salvando o plantel da resistência'
    ],
    concepts: ['concept_anthelmintic_resistance_management', 'concept_coproparasitology_diagnostics'],
    sections: [
      {
        id: 'sec_para_bench_01',
        type: 'theory',
        title: 'A Crise Global da Resistência Anti-helmíntica e o Manejo de Refúgio',
        contentMarkdown: `# Aula Universitária: Teste FECRT, Método FAMACHA & Dinâmica de Refúgio

> 📖 Referência Canônica: Coles, G. C. et al. *WAAVP guidelines for the evaluation of anthelmintic resistance in ruminants*. Van Wyk, J. A.; Bath, G. F. *The FAMACHA system for managing haemonchosis in sheep and goats by clinically identifying individual animals for treatment*. Vet Res.

A administração indiscriminada de vermífugos em calendário fechado (ex.: tratar todo o rebanho mensalmente) selecionou mutações nos canais de cloro dependentes de glutamato e receptores de tubulina, exterminando a eficácia da maioria dos princípios ativos comerciais:

### 1. O Teste de Redução da Contagem de Ovos Fecais (FECRT)
- O teste padrão-ouro preconizado pela **WAAVP** avalia a resposta terapêutica em um lote de animais com contagem inicial $>= 200\text{ OPG}$.
- Realiza-se a contagem pré-tratamento (Dia 0) e uma nova contagem **14 dias após a vermifugação**.
- **Fórmula de Eficácia:**
  $$\text{FECRT (%)} = ( 1 - \frac{\text{Média OPG Pós-Tratamento}}{\text{Média OPG Pré-Tratamento}} ) \times 100$$
- **Critério de Resistência:** Resistência anti-helmíntica é confirmada se a porcentagem de redução for **inferior a 95%** ou se o limite inferior do intervalo de confiança de 95% for inferior a 90%.

---

### 2. O Conceito Fundamental de Refúgio Genético
- A **população em refúgio** é a parcela da comunidade parasitária que **NÃO foi exposta ao medicamento** (larvas nas pastagens + vermes presentes em animais que não foram tratados).
- Como essa população não sofreu pressão seletiva, ela preserva os genes normais de suscetibilidade aos anti-helmínticos. Quando esses parasitas sensíveis cruzam com os raros mutantes resistentes sobreviventes, diluem os alelos de resistência, perpetuando a eficácia da droga por décadas!

---

### 3. O Método FAMACHA©
Desenvolvido na África do Sul pelo Dr. Francois Malan, avalia clinicamente o grau de anemia induzida por *Haemonchus contortus* através da eversão da mucosa conjuntival ocular inferior em pequenos ruminantes:

\`\`\`mermaid
flowchart TD
    A["Avaliação da Mucosa Conjuntival Ocular Sob Luz Natural Direta"] --> B["Comparação com o Cartão Padronizado FAMACHA (1 a 5)"]
    B --> C["Grau 1: Vermelho-Vivo Ótimo (Ht > 28%) -> NÃO TRATAR"]
    B --> D["Grau 2: Róseo-Vermelho Normal (Ht 23-27%) -> NÃO TRATAR"]
    B --> E["Grau 3: Róseo Pálido Limítrofe (Ht 18-22%) -> Apenas Observar Cordeiros Jovens"]
    B --> F["Grau 4: Pálido Anêmico (Ht 13-17%) -> TRATAR COM ANTI-HELMÍNTICO EFICAZ"]
    B --> G["Grau 5: Branco Porcelana Crítico (Ht < 12%) -> TRATAR IMEDIATAMENTE + SUPORTE INTENSIVO"]
\`\`\``,
        causalChain: {
          cause: 'Adoção sistemática do tratamento seletivo pelo método FAMACHA graus 4 e 5',
          mechanism: 'Preservação da maioria dos vermes sensíveis nos animais resilientes graus 1 e 2 sem exposição química',
          effect: 'Manutenção de alta proporção de larvas suscetíveis em refúgio no ecossistema da pastagem',
          clinicalMeaning: 'Prevenção sustentável da resistência anti-helmíntica e sobrevida prolongada dos fármacos'
        }
      },
      {
        id: 'sec_para_bench_02',
        type: 'exercise',
        title: 'Avaliação Epidemiológica: O Fracasso da Ivermectina e o Refúgio Genético',
        exerciseId: 'ex_para_05'
      },
      {
        id: 'sec_para_bench_03',
        type: 'lab',
        title: 'Laboratório Interativo: Bancada de Microscopia Coproparasitológica & OPG (Parasitology Bench)',
        description: 'Assuma o microscópio coproparasitológico. Navegue pelos campos da Câmara de McMaster, foque nos ovos de Haemonchus, Toxocara e Ancylostoma, conte os ovos nos retículos para deduzir o OPG e defina o tratamento seletivo com base no cartão FAMACHA!',
        labType: 'parasitology_fecal_bench',
        labConfig: {
          chamberType: 'McMaster Dupla (0.15 mL + 0.15 mL)'
        }
      }
    ]
  }
];
