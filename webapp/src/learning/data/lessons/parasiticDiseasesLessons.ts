// src/learning/data/lessons/parasiticDiseasesLessons.ts
import type { LearningLesson, LearningExercise } from '../../types/learning';

export const PARASITIC_DISEASES_EXERCISES: Record<string, LearningExercise> = {
  ex_pardis_01: {
    id: 'ex_pardis_01',
    conceptId: 'concept_parasitic_tpb_pathogenesis',
    type: 'multiple_choice',
    prompt: 'Uma novilha Girolando de 11 meses mantida a pasto em região endêmica de Rhipicephalus microplus é internada em emergência com hipertermia severa (41,6 °C), tremores musculares, sialorreia, ataxia proprioceptiva, pressão da cabeça contra a cerca (head pressing) e episódios de convulsão tônico-clônica com nistagmo horizontal. A urina na micção espontânea apresenta aspecto e coloração âmbar fisiológicos normais, sem qualquer indício de hemoglobinúria. Qual é o agente etiológico mais provável, a base fisiopatológica da síndrome neurológica observada e a razão da ausência de pigmento na urina?',
    options: [
      {
        id: 'opt_1',
        text: 'Babesia bovis. O protozoário altera a membrana eritrocitária, induzindo a expressão de neoantígenos adesivos (protuberâncias "knobs") que interagem com receptores endoteliais vasculares, gerando citoaderência massiva e sequestro capilar cerebral com anóxia isquêmica tecidual e colapso endotelial; a lise é eminentemente focal e capilar, de modo que a hemoglobina liberada é captada e depurada pela haptoglobina plasmática sem saturar o limiar renal, não gerando hemoglobinúria maciça.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! A Babesia bovis expressa proteínas antigênicas na membrana das hemácias parasitadas (como as VESA-1), que causam aprisionamento e aderência aos receptores endoteliais da microvasculatura encefálica. Isso leva à estase sanguínea capilar, trombose microvascular focal, edema vasogênico e anóxia isquêmica cerebral (a chamada "forma nervosa" da TPB), com urina de coloração normal. Em contraste, a Babesia bigemina provoca lise intravascular maciça e abundante hemoglobinúria ("água de café").',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Babesia bigemina, pois seus pares piriformes em ângulo agudo possuem tropismo estrito pelas meninges espinhais e o excesso de hemoglobina é reabsorvido 100% no túbulo proximal.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Babesia bigemina causa hemólise intravascular explosiva sistêmica com saturação precoce da haptoglobina e intensa hemoglobinúria (urina escura). Não realiza citoaderência microvascular cerebral como a Babesia bovis.',
        conceptualErrorCategory: 'babesia_species_differentiation_error'
      },
      {
        id: 'opt_3',
        text: 'Anaplasma marginale na fase aguda, pois as rickettsias secretam uma exotoxina neuroparalisante que desmieliniza o córtex motor sem causar alterações eritrocitárias.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Anaplasma marginale não produz exotoxinas neurotrópicas; sua patogenia reside na hemólise extravascular pura imunomediada no baço com anemia progressiva e icterícia intensa, sem citoaderência encefálica.',
        conceptualErrorCategory: 'anaplasma_pathogenesis_misconception'
      },
      {
        id: 'opt_4',
        text: 'Intoxicação aguda por sal associada a privação hídrica, sem qualquer correlação com carrapatos ou hemoparasitas.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Embora a privação de água cause sinais neurológicos por edema osmótico no córtex, o histórico de campo em pasto com carrapatos e hipertermia fulminante de 41,6 °C indica o quadro clássico de Babesia bovis cerebral.',
        conceptualErrorCategory: 'differential_diagnosis_error'
      }
    ],
    pedagogicalExplanation: 'A Babesia bovis caracteriza-se pela citoaderência de eritrócitos à microcirculação tecidual profunda, com predileção encefálica. Esse fenômeno causa anóxia cerebral isquêmica e sinais neurológicos graves sem cursar com hemoglobinúria massiva, ao contrário da Babesia bigemina.',
    causalChain: {
      cause: 'Infecção por Babesia bovis inoculada por ninfas e adultos de Rhipicephalus microplus',
      mechanism: 'Expressão de proteínas VESA na superfície eritrocitária mediando citoaderência aos capilares cerebrais',
      effect: 'Microtrombose, estase vascular local, extravasamento vasogênico e anóxia isquêmica cortical',
      clinicalMeaning: 'Manifestação da forma nervosa da TPB (ataxia, opistótono, agressividade e head pressing) com urina clara'
    }
  },

  ex_pardis_02: {
    id: 'ex_pardis_02',
    conceptId: 'concept_parasitic_tpb_diagnostics',
    type: 'multiple_choice',
    prompt: 'Durante um surto de mortalidade em um rebanho de vacas leiteiras confinadas, o veterinário examina duas vacas doentes: a Vaca A (apresenta 41,3 °C de febre, mucosas ictéricas e urina escura como borra de café) e a Vaca B (apresenta 39,2 °C, apatia severa, mucosas extremamente ictéricas amarelo-ouro, hematócrito de 10% e urina amarelo-âmbar límpida normal). O médico veterinário colhe sangue por punção venosa jugular da Vaca A e da Vaca B, além de confeccionar esfregaços por punção de ponta de orelha (sangue capilar periférico) de ambas. Qual é a correlação diagnóstica e a conduta terapêutica e farmacológica imediata?',
    options: [
      {
        id: 'opt_1',
        text: 'Vaca A tem Babesiose por Babesia bigemina (lise intravascular com hemoglobinúria); Vaca B tem Anaplasmose por Anaplasma marginale (hemólise extravascular fagocitária esplênica sem hemoglobinúria). O esfregaço capilar da ponta de orelha é o padrão-ouro porque protozoários como Babesia bovis e bigemina concentram-se no leito capilar. Tratamento: Diaceturato de Diminazeno (3,5 mg/kg IM) para Vaca A e Oxitetraciclina LA (20 mg/kg IM) associada a transfusão sanguínea urgente para Vaca B (Ht 10%).',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! A Vaca A apresenta a clássica hemólise intravascular de Babesia bigemina, onde a destruição maciça de eritrócitos satura a haptoglobina levando a hemoglobinúria e resposta ao Diminazeno. A Vaca B exibe o quadro característico de Anaplasma marginale: hemólise extravascular pura realizada pelo sistema macrofágico esplênico, gerando hiperbilirrubinemia/icterícia grave com urina normal. Com Ht de 10%, a Vaca B está em colapso anóxico iminente e requer transfusão de sangue total imediata além de Oxitetraciclina LA.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Ambas as vacas sofrem de intoxicação por cobre cúprico. A conduta é aplicar sulfato de amônio oral e suspender antibióticos e babesicidas.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A epidemiologia de surto em rebanho exposto a carrapatos com febre alta e características hematológicas divergentes aponta indubitavelmente para o complexo TPB (Babesia spp. + Anaplasma marginale).',
        conceptualErrorCategory: 'copper_poisoning_misattribution'
      },
      {
        id: 'opt_3',
        text: 'Vaca A tem Anaplasmose tratada com Diminazeno; Vaca B tem Babesiose tratada com Enrofloxacino oral sem necessidade transfusional.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O Diminazeno é babesicida e não atua de forma confiável contra Anaplasma marginale; além disso, a Vaca B com hematócrito de 10% morrerá de colapso anóxico sem reposição volêmica eritrocitária.',
        conceptualErrorCategory: 'pharmacology_cross_indication_error'
      },
      {
        id: 'opt_4',
        text: 'O esfregaço de ponta de orelha é contraindicado porque capilares periféricos sofrem hemoconcentração artificial que impede a visualização de qualquer corpúsculo.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O sangue capilar de ponta de orelha ou cauda é justamente o local de eleição máxima para esfregaço na TPB, pois a desaceleração do fluxo e a citoaderência favorecem a concentração de eritrócitos parasitados.',
        conceptualErrorCategory: 'diagnostic_technique_misconception'
      }
    ],
    pedagogicalExplanation: 'A diferenciação entre os componentes da TPB exige a interpretação da via de hemólise: intravascular com hemoglobinúria em Babesia bigemina vs extravascular esplênica sem hemoglobinúria em Anaplasma marginale. Casos graves com hematócrito < 12-14% demandam suporte transfusional imediato.',
    causalChain: {
      cause: 'Hemólise intravascular por Babesia bigemina vs destruição extravascular esplênica por Anaplasma marginale',
      mechanism: 'Liberação direta de hemoglobina plasmática saturando haptoglobina vs fagocitose de hemácias opsonizadas',
      effect: 'Filtração glomerular de hemoglobina livre (Vaca A) vs hiperbilirrubinemia não-conjugada pura (Vaca B)',
      clinicalMeaning: 'Urina escura com indicação de Diminazeno (Vaca A) vs anemia crítica descompensada exigindo sangue total e oxitetraciclina (Vaca B)'
    }
  },

  ex_pardis_03: {
    id: 'ex_pardis_03',
    conceptId: 'concept_parasitic_haemonchosis_clinic',
    type: 'multiple_choice',
    prompt: 'Um lote de 40 cordeiros desmamados da raça Dorper mantidos em pastagem irrigada de Tifton 85 apresenta súbita debilidade, intolerância severa ao exercício e retardo no desenvolvimento. Na avaliação clínica, os animais apresentam mucosas conjuntivais brancas (grau 5 na escala FAMACHA), taquicardia com sopro sistólico funcional auscultável sobre a base cardíaca e volumoso edema submandibular frio, indolor e que retém a impressão digital (sinal do cacifo/Godet positivo - "papo mole"). O proteinograma sérico revela albumina de 1,1 g/dL (referência: 2,7 a 3,8 g/dL) e o hematócrito médio é de 10% (referência: 27 a 38%). Qual é a equação fisiopatológica que explica o edema submandibular e a patogenia hemodinâmica desse quadro?',
    options: [
      {
        id: 'opt_1',
        text: 'Haemonchus contortus espolia até 0,05 mL de sangue/parasita/dia no abomaso através de sua lanceta bucal lacerante. A perda contínua de sangue total causa anemia hemorrágica profunda e hipoalbuminemia crítica. De acordo com a Equação das Forças de Starling (Jv = Kf [(Pc - Pi) - σ(πc - πi)]), a queda drástica da pressão oncótica capilar (πc) desbalanceia o equilíbrio hidrostático, favorecendo a transudação de fluido livre para o espaço intersticial frouxo das regiões de declive da cabeça.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! O Haemonchus contortus perfura a submucosa do abomaso para sugar sangue ativamente. Cada nematódeo espolia cerca de 0,05 mL de sangue por dia; uma carga de 4.000 vermes consome 200 mL de sangue/dia em um animal com apenas 1,2 a 1,5 L de volemia! A perda constante de albumina plasmática derruba a pressão coloidosmótica intravascular (πc). Pela lei de Starling, a pressão hidrostática intracapilar prevalece e expulsa líquido para o interstício frouxo submandibular, formando o clássico "papo mole" (bottle jaw). O sopro cardíaco decorre da diminuição da viscosidade sanguínea acelerando o fluxo turbulento nas valvas.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Fasciola hepatica nos ductos biliares bloqueando a síntese de globulinas, gerando hiperaldosteronismo primário e retenção tubular de sódio.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A causa primária do edema de declive em ovinos tropicais jovens a pasto é a hipoalbuminemia decorrente da hematofagia maciça por Haemonchus contortus, e não retenção hormonal primária por fascíolas.',
        conceptualErrorCategory: 'edema_mechanism_confusion'
      },
      {
        id: 'opt_3',
        text: 'Insuficiência cardíaca congestiva direita congênita com aumento da pressão hidrostática capilar por hipertensão venosa portal pura.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O sopro sistólico não é uma cardiopatia congênita estrutural primária, mas sim um sopro funcional anêmico gerado pela viscosidade ultra-reduzida do sangue (hematócrito de 10%).',
        conceptualErrorCategory: 'hemodynamic_murmur_misattribution'
      },
      {
        id: 'opt_4',
        text: 'Picada de vespas ou abelhas na região submandibular gerando angioedema anafilático por liberação maciça de histamina tecidual.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O edema anafilático é agudo, inflamatório e doloroso; o "papo mole" da haemonchose é um transudato frio, crônico e bilateral decorrente de falência da pressão oncótica plasmática.',
        conceptualErrorCategory: 'angioedema_confusion'
      }
    ],
    pedagogicalExplanation: 'A haemonchose aguda/hiperaguda é uma síndrome hemorrágica e hipoproteinêmica espoliadora. A perda massiva de albumina via trato gastrointestinal suprime a pressão oncótica capilar (Starling), produzindo transudação para o tecido subcutâneo em declive.',
    causalChain: {
      cause: 'Parasitismo massivo por milhares de Haemonchus contortus com lanceta lacerando a mucosa abomasal',
      mechanism: 'Espoliação ativa de sangue total levando à anemia hipovolêmica e hipoalbuminemia severa (< 1,5 g/dL)',
      effect: 'Queda drástica da pressão oncótica capilar (πc) que desequilibra as forças transcapilares de Starling',
      clinicalMeaning: 'Edema de declive submandibular ("papo mole"), sopro sistólico de ejeção funcional e risco iminente de óbito por hipóxia anêmica'
    }
  },

  ex_pardis_04: {
    id: 'ex_pardis_04',
    conceptId: 'concept_parasitic_refugia_dynamics',
    type: 'multiple_choice',
    prompt: 'Um criador de ovinos em São Paulo realizou por cinco anos consecutivos o manejo de "vermifugar 100% do rebanho todo mês e transferi-los imediatamente para uma pastagem recém-roçada e descansada" (prática clássica do "drench and shift"). No ano corrente, o veterinário realiza o Teste de Redução de Contagem de Ovos nas Fezes (FECRT), de acordo com os padrões internacionais da WAAVP: a média de OPG pré-tratamento era de 3.200 e, 14 dias após a administração de Ivermectina 1% na dosagem recomendada, a média de OPG permaneceu em 2.950 (redução de apenas 7,8%). Por que a conduta histórica do produtor acelerou o surgimento de super-resistência e qual é a importância biológica da "população em refúgio"?',
    options: [
      {
        id: 'opt_1',
        text: 'A prática do "drench and shift" elimina toda a população em refúgio no hospedeiro e no ambiente: os animais tratados só eliminam na pastagem limpa os raros nematódeos portadores de alelos mutantes resistentes que sobreviveram à droga. Sem a presença de parasitas selvagens suscetíveis para cruzar e diluir os genes de resistência, a geração seguinte torna-se 100% homozigota resistente. O "refúgio" é a fração da população de nematódeos que NÃO entra em contato com o princípio químico antiparasitário, conservando alelos de suscetibilidade e prolongando a vida útil dos anti-helmínticos.',
        isCorrect: true,
        pedagogicalFeedback: 'Exato! Este é um dos conceitos mais fundamentais da parasitologia moderna e das provas de residência/concursos. A população em refúgio (parasitas em animais não tratados, ovos e larvas L3 no pasto) não sofre pressão seletiva. Quando se trata 100% dos animais e os coloca em pasto limpo ("drench and shift"), destrói-se completamente o refúgio: apenas larvas resistentes contaminam o pasto novo, gerando resistência química absoluta em tempo recorde. A WAAVP preconiza eficácia > 95%; um FECRT de 7,8% comprova falência total do princípio ativo.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'A falha decorre da tolerância imunológica desenvolvida pelos ovinos que neutralizam as moléculas de ivermectina por meio de anticorpos IgE humorais antes que atinjam o nematódeo.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A resistência é uma característica genética da população de nematódeos (mutações nos canais de cloreto ativados por glutamato - GluCl e superexpressão de glicoproteína-P) e não decorre de imunidade do hospedeiro ovino contra a droga.',
        conceptualErrorCategory: 'resistance_genetics_misconception'
      },
      {
        id: 'opt_3',
        text: 'O erro foi a via de administração: a ivermectina deveria ter sido administrada exclusivamente por via endovenosa associada a DMSO.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A ivermectina em ruminantes é formulada para uso subcutâneo ou oral; administração intravenosa não é recomendada e causaria choque e colapso cardíaco.',
        conceptualErrorCategory: 'pharmacology_route_error'
      },
      {
        id: 'opt_4',
        text: 'O teste FECRT aos 14 dias foi colhido tarde demais; o correto para todas as classes farmacológicas é avaliar o OPG 30 minutos após a aplicação do vermífugo.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. As diretrizes da WAAVP estabelecem explicitamente o intervalo de 10 a 14 dias para lactonas macrocíclicas e benzimidazóis, permitindo que os vermes mortos sejam eliminados e os sobreviventes retomem a oviposição.',
        conceptualErrorCategory: 'fecrt_guidelines_error'
      }
    ],
    pedagogicalExplanation: 'A preservação de parasitas em refúgio é a principal estratégia biológica para mitigar a evolução de resistência anti-helmíntica. O tratamento seletivo garante que nematódeos sensíveis cruzem com os raros sobreviventes resistentes, mantendo alelos de suscetibilidade no genoma populacional.',
    causalChain: {
      cause: 'Vermifugação supressiva de 100% do lote associada a transferência imediata para piquete limpo',
      mechanism: 'Eliminação radical da população em refúgio e contaminação exclusiva por nematódeos com genes mutantes GluCl',
      effect: 'Cruzamento endogâmico entre parasitas resistentes com fixação alélica de homozigose',
      clinicalMeaning: 'Falência terapêutica completa das lactonas macrocíclicas (FECRT < 10%) e ameaça de inviabilização econômica da ovinocultura'
    }
  },

  ex_pardis_05: {
    id: 'ex_pardis_05',
    conceptId: 'concept_parasitic_famacha_system',
    type: 'multiple_choice',
    prompt: 'Um médico veterinário é contratado para implantar um programa de Manejo Integrado de Parasitoses (MIP) em uma cabanha de ovinos Santa Inês. Durante a inspeção da conjuntiva ocular sob luz natural pelo método padronizado "COVER, PUSH, PULL, POP", o profissional classifica um lote de 80 borregas de acordo com a guia colorimétrica FAMACHA©: 35 animais Grau 1 (vermelho vivo), 25 animais Grau 2 (rosa avermelhado), 12 animais Grau 3 (rosa pálido), 6 animais Grau 4 (rosa quase branco) e 2 animais Grau 5 (branco porcelana). Considerando as boas práticas de conservação de refúgio e salvamento de vidas, qual deve ser a decisão de tratamento e a integração com controle biológico?',
    options: [
      {
        id: 'opt_1',
        text: 'Tratar imediatamente apenas os animais dos Graus 4 e 5 com anti-helmíntico comprovadamente eficaz em teste prévio (com suporte hemoterápico/vitamínico para o Grau 5); nos Graus 1 e 2, NÃO vermifugar (preservação intencional do refúgio); no Grau 3, vermifugar apenas se forem cordeiros jovens desmamados ou fêmeas em lactação crítica; integrar ao manejo o fornecimento na ração de clamidósporos do fungo nematófago Duddingtonia flagrans para capturar e lisar larvas L3 nas fezes depositadas no pasto.',
        isCorrect: true,
        pedagogicalFeedback: 'Perfeito! O método FAMACHA preconiza o tratamento seletivo direcionado (Targeted Selective Treatment - TST): tratar somente os indivíduos que necessitam de intervenção para sobreviver (graus 4 e 5, além de animais vulneráveis grau 3), enquanto os animais saudáveis (graus 1 e 2) continuam liberando ovos de parasitas sensíveis na pastagem para alimentar o refúgio. O fungo Duddingtonia flagrans sobrevive à passagem pelo trato gastrointestinal e emite redes tridimensionais adesivas nas fezes que predam e digerem ativamente as larvas L3, reduzindo a infestação das pastagens em até 80% sem gerar resíduos químicos.',
        conceptualErrorCategory: undefined
      },
      {
        id: 'opt_2',
        text: 'Vermifugar obrigatoriamente 100% dos animais de todos os graus para erradicar definitivamente o Haemonchus da propriedade.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. A tentativa de erradicar 100% dos parasitas através de vermifugação em massa é a receita garantida para induzir resistência múltipla irreversível a curto prazo.',
        conceptualErrorCategory: 'suppressive_treatment_misconception'
      },
      {
        id: 'opt_3',
        text: 'O cartão FAMACHA avalia infecção por coccídeos nas vias biliares; o tratamento correto é usar sulfonamidas injetáveis em todo o rebanho.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. O FAMACHA avalia exclusivamente o grau de anemia clínica decorrente da espoliação hematófaga causada por Haemonchus contortus em pequenos ruminantes.',
        conceptualErrorCategory: 'famacha_indication_error'
      },
      {
        id: 'opt_4',
        text: 'Animais Grau 5 devem ser eutanasiados no ato e os Graus 1 e 2 devem receber o dobro da dose terapêutica como medida profilática.',
        isCorrect: false,
        pedagogicalFeedback: 'Incorreto. Animais Grau 5 podem perfeitamente se recuperar com tratamento anti-helmíntico adequado, ferro injetável e suporte; dobrar doses em animais saudáveis seleciona mutações e gera intoxicação.',
        conceptualErrorCategory: 'clinical_management_error'
      }
    ],
    pedagogicalExplanation: 'O sistema FAMACHA é uma ferramenta semiológica revolucionária de tratamento seletivo (TST). Ao tratar apenas animais em risco de morte (Graus 4 e 5), protege-se a integridade do rebanho enquanto os animais graus 1 e 2 mantêm a população de parasitas sensíveis em refúgio. O controle biológico com Duddingtonia flagrans reduz a carga ambiental de L3 de forma ecológica.',
    causalChain: {
      cause: 'Aplicação metódica da semiologia da mucosa ocular conjuntival pelo Cartão FAMACHA©',
      mechanism: 'Seleção individual dos animais anêmicos (Graus 4 e 5) para terapia química anti-helmíntica orientada',
      effect: 'Preservação de >75% do rebanho sem exposição ao princípio químico sustentando a população em refúgio',
      clinicalMeaning: 'Eliminação da mortalidade por haemonchose, manutenção da eficácia das bases farmacológicas e redução de até 80% de L3 no pasto com Duddingtonia flagrans'
    }
  }
};

export const PARASITIC_DISEASES_LESSONS: LearningLesson[] = [
  {
    id: 'lesson_pardis_tpb_pathogenesis',
    moduleId: 'mod_parasitic_diseases',
    title: 'Complexo Tristeza Parasitária Bovina: Fisiopatologia Comparada',
    subtitle: 'Babesia bovis, B. bigemina e Anaplasma marginale: mecanismos de hemólise intra vs extravascular.',
    estimatedMinutes: 25,
    objectives: [
      'Diferenciar a fisiopatologia da hemólise intravascular explosiva de B. bigemina da hemólise extravascular macrofágica de A. marginale',
      'Compreender os mecanismos moleculares de citoaderência e sequestro microvascular cerebral de Babesia bovis',
      'Correlacionar os achados laboratoriais de hemoglobinúria, hiperbilirrubinemia e anemia com o prognóstico'
    ],
    concepts: ['concept_parasitic_tpb_pathogenesis'],
    sections: [
      {
        id: 'sec_pardis_tpb_01',
        type: 'theory',
        title: 'Mecanismos Patogênicos e Diferenciação do Complexo TPB',
        contentMarkdown: `# Fisiopatologia e Patogênese do Complexo Tristeza Parasitária Bovina (TPB)

> 📖 **Referência Canônica:** Radostits, O. M. et al. *Veterinary Medicine: A textbook of the diseases of cattle, horses, sheep, pigs and goats*, 10th ed. Saunders. Urquhart, G. M. et al. *Parasitologia Veterinária*, 2ª ed. Guanabara Koogan. Taylor, M. A.; Coop, R. L.; Wall, R. L. *Veterinary Parasitology*, 4th ed. Wiley-Blackwell.

O Complexo da **Tristeza Parasitária Bovina (TPB)** é o maior entrave sanitário e econômico da bovinocultura em regiões tropicais e subtropicais. Embora comumente referido como uma única entidade clínica, o complexo é constituído por três agentes etiológicos filogenética e patogenicamente distintos, todos transmitidos pelo carrapato bovino *Rhipicephalus microplus* (e, no caso do *Anaplasma*, também por dípteros hematófagos como *Tabanus* e fômites como agulhas contaminadas):

\`\`\`mermaid
flowchart TD
    A[Picada do Rhipicephalus microplus / Transmissão Vetorial] --> B{Agente Inoculado}
    B -->|Babesia bovis| C[Citoaderência Vascular Cerebral]
    B -->|Babesia bigemina| D[Lise Intravascular Massiva]
    B -->|Anaplasma marginale| E[Fagocitose Extravascular Esplênica]
    C --> F[Anóxia Encefálica / Forma Nervosa / Urina Normal]
    D --> G[Hemoglobinemia / Hemoglobinúria / Urina Escura]
    E --> H[Anemia Extravascular Severa / Icterícia / Urina Clara]
\`\`\`

---

### 1. *Babesia bovis*: O Paradigma da Citoaderência e a Forma Nervosa

A *Babesia bovis* é um protozoário intraeritrocitário pequeno (1,5 a 2,0 µm). Ao contrário de outros hemoparasitas que causam morte apenas por perda volêmica de hemácias, a letalidade de *B. bovis* decorre prioritariamente do **choque hemodinâmico e anóxia isquêmica cerebral**:

1. **Alterações Estruturais na Hemácia:** O trofozoíto intracelular sintetiza proteínas que são exportadas para a membrana da hemácia hospedeira, destacando-se a família de antígenos **VESA-1** (*Variant Erythrocyte Surface Antigen 1*). Essa alteração gera saliências eletrodensas chamadas *knobs*.
2. **Citoaderência Endotelial:** As hemácias parasitadas aderem-se avidamente às células endoteliais dos capilares teciduais profundos (especialmente no córtex cerebral e cerebelo).
3. **Sequestro Microvascular e Sludging:** Ocorre lentidão drástica do fluxo sanguíneo nos leitos capilares, trombose microvascular focal, edema vasogênico e extravasamento de plasma.
4. **Sinais Neurológicos e Urina Clara:** Como o sequestro ocorre nos capilares teciduais, a concentração de eritrócitos parasitados no sangue venoso circulante periférico pode ser inferior a 1%, enquanto nos capilares cerebrais ultrapassa 70%! O animal desenvolve a **forma nervosa da TPB** (ataxia, convulsões, agressividade, opistótono e nistagmo). A lise é primariamente focal, de modo que a haptoglobina sérica consegue depurar a hemoglobina liberada, **mantendo a urina límpida e sem hemoglobinúria**.

---

### 2. *Babesia bigemina*: Lise Intravascular e Nefropatia por Pigmento

A *Babesia bigemina* é um protozoário de grande porte (3,0 a 4,5 µm), tipicamente visualizado aos pares formando um ângulo agudo no interior da hemácia:

- **Hemólise Intravascular Primária:** A replicação binária e a saída física dos merozoítos rompem a membrana eritrocitária diretamente na luz dos grandes e médios vasos.
- **Saturação da Haptoglobina:** A quantidade massiva de hemoglobina livre lançada na circulação excede rapidamente a capacidade de ligação da haptoglobina plasmática (limiar ~100 a 150 mg/dL).
- **Hemoglobinúria ("Urina em Borra de Café"):** A hemoglobina livre dímera ultrapassa a barreira de filtração glomerular e atinge a urina. Nos túbulos coletores renais, a hemoglobina precipita em pH ácido, gerando cilindros hemoglobínicos, necrose tubular aguda (NTA) e falência renal anúrica.

---

### 3. *Anaplasma marginale*: Hemólise Extravascular Imunomediada

O *Anaplasma marginale* não é um protozoário, mas sim uma **bactéria intracelular obrigatória** da ordem *Rickettsiales*:

- **Localização Marginal:** Replica-se em vacúolos na periferia da hemácia bovina (corpúsculos de inclusão basofílicos densos).
- **Opsonização e Remoção Esplênica:** O *A. marginale* não induz perfuração lítica da membrana na circulação. Em vez disso, as hemácias infectadas sofrem opsonização por anticorpos e deposição de complemento, sendo reconhecidas como anômalas pelos macrófagos do Sistema Monocítico Fagocitário (SMF) no **baço e fígado**.
- **Hemólise Extravascular Pura:** Os macrófagos fagocitam as hemácias intactas. Toda a degradação da hemoglobina ocorre no interior do macrófago, liberando grandes quantidades de bilirrubina não-conjugada (indireta).
- **Consequência Clínica:** O animal apresenta **anemia profunda** (hematócritos que caem para 8 a 12%), **icterícia intensa** amarelo-ouro das mucosas, febre moderada e **urina amarelo-âmbar límpida normal**, sem qualquer presença de hemoglobina livre.`
      },
      {
        id: 'sec_pardis_tpb_02',
        type: 'lab',
        title: 'Laboratório de Fisiopatologia: Diferenciação Hemolítica da TPB',
        labType: 'physiology_vital_loop',
        contentMarkdown: `### Laboratório de Diagnóstico Fisiopatológico: Caso Clínico de TPB

\`\`\`
PACIENTE: Novilha Girolando, 12 meses, 280 kg. Fazenda Santa Luzia, Ourinhos - SP.
HISTÓRICO: Piquete de Brachiaria decumbens com alta infestação por Rhipicephalus microplus.
SINAIS VITAIS:
- Temperatura Retal: 41,5 °C (Hipertermia severa)
- Frequência Cardíaca: 120 bpm (Taquicardia de compensação)
- Frequência Respiratória: 52 mpm (Taquipneia)
- Mucosas: Pálidas com leve subicterícia
- Sistema Nervoso: Ataxia, marcha em círculos, pressão da cabeça contra mourão, nistagmo horizontal
- Urina: Amarelo-âmbar claro límpido, densidade 1.025, ausência de hemoglobina na fita reagente
\`\`\`

#### Interpretação Fisiopatológica Guiada:
1. **Ausência de Hemoglobinúria:** Descarta *Babesia bigemina* como causador primário da síndrome aguda.
2. **Sinais Neurológicos Centrais Graves:** Alta especificidade para o fenômeno de **citoaderência e sequestro microvascular capilar** característico de *Babesia bovis*.
3. **Achado no Esfregaço:** O esfregaço de sangue capilar de ponta de orelha revelou merozoítos pequenos pareados em hemácias capilares (parasitemia capilar de 14%), confirmando *Babesia bovis*.`
      }
    ]
  },

  {
    id: 'lesson_pardis_tpb_diagnostics',
    moduleId: 'mod_parasitic_diseases',
    title: 'Diagnóstico Laboratorial & Terapêutica de Emergência na TPB',
    subtitle: 'Esfregaços de ponta de orelha, Giemsa, farmacologia do Diminazeno, Imidocarb e suporte transfusional.',
    estimatedMinutes: 25,
    objectives: [
      'Dominar a técnica de confecção e coloração de esfregaços de ponta de orelha vs sangue venoso periférico',
      'Aplicar o protocolo farmacológico correto com Diaceturato de Diminazeno, Dipropionato de Imidocarb e Oxitetraciclina',
      'Definir os critérios laboratoriais para indicação de transfusão de sangue total em bovinos com anemia crítica'
    ],
    concepts: ['concept_parasitic_tpb_diagnostics'],
    sections: [
      {
        id: 'sec_pardis_diag_01',
        type: 'theory',
        title: 'Técnicas Diagnósticas & Farmacologia Racional',
        contentMarkdown: `# Diagnóstico Citológico e Abordagem Terapêutica da TPB

> 📖 **Referência Canônica:** Radostits, O. M. et al. *Veterinary Medicine*, 10th ed. Saunders. Spinosa, H. S.; Górniak, S. L.; Bernardi, M. M. *Farmacologia Aplicada à Medicina Veterinária*, 6ª ed. Guanabara Koogan. Papich, M. G. *Saunders Handbook of Veterinary Drugs*, 4th ed. Elsevier.

### 1. O Esfregaço de Sangue Capilar de Ponta de Orelha: Regra de Ouro

Um dos maiores erros cometidos na clínica de grandes animais é colher apenas sangue venoso da veia jugular para pesquisa citológica de hemoparasitas:

- **Por que a ponta da orelha?** A *Babesia bovis* realiza citoaderência e sequestro nos capilares periféricos. Um esfregaço colhido da jugular frequentemente apresenta **resultado falso-negativo** (< 0,1% de parasitemia), enquanto o sangue obtido por punção com agulha 25x7 na face dorsal da ponta da orelha (após tricotomia e assepsia) exibe parasitemia concentrada de 5 a 20%!
- **Confecção e Coloração:** A gota de sangue deve ser espalhada em lâmina limpa e desengordurada, mantendo ângulo de 45° para produzir uma cauda fina homogênea. A coloração de referência é o **Giemsa** (ou Panótico Rápido em ambiente de emergência de campo).

\`\`\`mermaid
flowchart LR
    A[Suspeita de TPB] --> B[Punção de Ponta de Orelha]
    B --> C[Esfregaço em Camada Monocelular]
    C --> D[Coloração de Giemsa]
    D --> E{Morfologia ao Microscópio 100x}
    E -->|Pares pequenos em ângulo obtuso central| F[Babesia bovis]
    E -->|Pares grandes em ângulo agudo piriforme| G[Babesia bigemina]
    E -->|Corpúsculo puntiforme basofílico na periferia| H[Anaplasma marginale]
\`\`\`

---

### 2. Terapêutica Específica: Farmacologia e Posologia Canônica

| Princípio Ativo | Indicação Principal | Mecanismo de Ação | Posologia Bovina & Cuidados |
| :--- | :--- | :--- | :--- |
| **Diaceturato de Diminazeno** | *Babesia bovis* e *Babesia bigemina* | Liga-se irreversivelmente ao sulco menor do DNA do protozoário, inibindo a replicação e a glicólise anaeróbica | **3,5 mg/kg IM profunda** (dose única). Não exceder 5,0 mg/kg devido ao risco de lesão tubular renal e necrose hepática. |
| **Dipropionato de Imidocarb** | *Babesia spp.* e *Anaplasma marginale* | Bloqueia a captação de poliaminas e inibe a síntese de DNA | **1,2 mg/kg SC** para babesiose pura; **3,0 mg/kg SC/IM** para ação mista (*Anaplasma*). Possui discreto efeito inibidor da acetilcolinesterase (pode gerar salivação e tremores transitórios). |
| **Oxitetraciclina LA (Longa Ação)** | *Anaplasma marginale* | Liga-se à subunidade 30S do ribossomo bacteriano, inibindo a síntese proteica | **20 mg/kg IM profunda** (veículo de liberação lenta garantindo 72-96h de cobertura). |

---

### 3. Critérios de Transfusão de Sangue Total em Ruminantes

Em quadros graves de *Anaplasma marginale* ou *Babesia bigemina*, a destruição de eritrócitos é vertiginosa. O médico veterinário deve agir antes da falência cardíaca por anóxia:

- **Indicação Laboratorial Absoluta:** **Hematócrito (Ht) < 12%** em bovinos adultos, ou queda rápida de Ht associada a taquipneia severa e decúbito.
- **Cálculo do Volume a Transfundir:**
$$\\text{Volume de Sangue (L)} = \\frac{\\text{Peso (kg)} \\times 0{,}08 \\times (\\text{Ht desejado} - \\text{Ht atual})}{\\text{Ht do doador}}$$
- **Doador Ideal:** Bovino adulto sadio, negativo para hemoparasitas, castrado ou vaca não gestante. Em bovinos, a primeira transfusão sanguínea é extremamente segura mesmo sem teste de compatibilidade cruzada prévio, devido à baixa concentração de aloanticorpos naturais circulantes.`
      },
      {
        id: 'sec_pardis_diag_02',
        type: 'exercise',
        title: 'Exercício Clínico: Diagnóstico e Prescrição na TPB',
        contentMarkdown: `Verifique sua competência resolvendo o caso clínico interativo de diferenciação laboratorial e conduta terapêutica da TPB no exercício do módulo.`
      }
    ]
  },

  {
    id: 'lesson_pardis_haemonchosis_clinic',
    moduleId: 'mod_parasitic_diseases',
    title: 'Haemonchose Ovina, Choque Hipovolêmico & Hipoalbuminemia',
    subtitle: 'Fisiopatologia da espoliação pelo Haemonchus contortus, forças de Starling e o "papo mole".',
    estimatedMinutes: 25,
    objectives: [
      'Calcular a perda volêmica diária de sangue em cordeiros parasitados por Haemonchus contortus',
      'Explicar a fisiopatologia da hipoalbuminemia e formação do edema submandibular pela Equação de Starling',
      'Identificar as alterações hemodinâmicas compensatórias do choque hipovolêmico crônico'
    ],
    concepts: ['concept_parasitic_haemonchosis_clinic'],
    sections: [
      {
        id: 'sec_pardis_haem_01',
        type: 'theory',
        title: 'Cinética da Espoliação e Fisiopatologia de Starling',
        contentMarkdown: `# Haemonchose Ovina: O Colapso Hemodinâmico e a Síndrome do "Papo Mole"

> 📖 **Referência Canônica:** Abbott, K. A.; Taylor, M.; Stubbings, L. *Sustainable Worm Control for Sheep*. Snomis Ltd. Urquhart, G. M. et al. *Parasitologia Veterinária*, Guanabara Koogan. Klein, B. G. *Cunningham: Fisiologia Veterinária*, 5ª ed. Elsevier.

O *Haemonchus contortus* (nematódeo da família *Trichostrongylidae*) é o parasita de maior impacto patogênico e econômico da ovinocultura mundial. A fêmea adulta mede de 18 a 30 mm e apresenta a clássica morfologia de "poste de barbeiro" (*barberpole*), onde os ovidutos repletos de ovos brancos enrolam-se em espiral sobre o intestino preenchido de sangue vermelho:

\`\`\`mermaid
flowchart TD
    A[Ingestão de L3 no Pasto] --> B[Fixação de Adultos no Abomaso]
    B --> C[Lanceta Bucal Lacera Arteríolas Submucosas]
    C --> D[Espoliação: 0,05 mL de Sangue/Verme/Dia]
    D --> E[Anemia Hemorrágica Grave]
    D --> F[Depleção Maciça de Albumina Sérica]
    F --> G[Queda da Pressão Oncótica Intravascular πc]
    G --> H[Transudação Intersticial de Acordo com Starling]
    H --> I[Edema Submandibular em Declive: Papo Mole]
\`\`\`

---

### 1. A Matemática Letal da Hematofagia

Ao atingir o abomaso, o parasita utiliza uma **lanceta bucal quitinosa afiada** para lacerar arteríolas e capilares da mucosa e submucosa, liberando secreções salivares com potentes substâncias anticoagulantes:

- **Taxa de Ingestão Diária:** Cada verme ingere ativamente cerca de **0,05 mL de sangue por dia**.
- **Simulação Quantitativa em um Cordeiro:**
  - Cordeiro jovem de **20 kg** de peso vivo.
  - Volemia normal estimada em 7% do peso corporal = $20 \\times 0{,}07 = 1{,}4\\text{ L}$ (1.400 mL de sangue total).
  - Carga moderada a alta de **4.000 vermes adultos** no abomaso.
  - Perda diária = $4.000 \\times 0{,}05\\text{ mL} = 200\\text{ mL de sangue por dia}$!
  - Isso significa que o cordeiro perde **mais de 14% de seu volume sanguíneo total a cada 24 horas**.

---

### 2. A Fisiopatologia de Starling e a Gênese do Edema Submandibular

A perda contínua de sangue total não debilita apenas os eritrócitos; ela exaure as reservas de proteínas plasmáticas, sobretudo a **albumina**:

A filtração transcapilar de fluidos é regida pela **Equação de Starling**:
$$J_v = K_f \\cdot \\left[ (P_c - P_i) - \\sigma \\cdot (\\pi_c - \\pi_i) \\right]$$

Onde:
- $J_v$ = fluxo líquido de filtração através da parede capilar
- $K_f$ = coeficiente de filtração capilar
- $P_c$ = pressão hidrostática capilar
- $P_i$ = pressão hidrostática intersticial
- $\\sigma$ = coeficiente de reflexão osmótica das proteínas
- $\\pi_c$ = **pressão coloidosmótica (oncótica) do plasma** (mantida pela albumina)
- $\\pi_i$ = pressão oncótica do fluido intersticial

Quando a concentração de albumina sérica cai de valores normais (2,8 a 3,8 g/dL) para **níveis críticos (< 1,5 g/dL)**, a pressão coloidosmótica capilar (\\\\pi_c) despenca. A pressão hidrostática ($P_c$) passa a superar amplamente a pressão oncótica, forçando o extravasamento massivo de transudato pobre em células para o interstício:

- **Por que a mandíbula ("Papo Mole")?** Como o animal passa de 8 a 12 horas por dia com a cabeça abaixada pastejando, a gravidade potencializa a pressão hidrostática capilar nas partes baixas da cabeça. O tecido conjuntivo subcutâneo frouxo do espaço intermandibular distende-se rapidamente, originando o clássico **edema submandibular em declive** (*bottle jaw*). O edema é frio, indolor e retém a marca do dedo à palpação (cacifo positivo).`
      },
      {
        id: 'sec_pardis_haem_02',
        type: 'lab',
        title: 'Laboratório de Anemia e Hipoalbuminemia em Cordeiros',
        labType: 'physiology_vital_loop',
        contentMarkdown: `### Laboratório de Avaliação Hemodinâmica do Cordeiro

\`\`\`
PACIENTE: Cordeiro Dorper, 4 meses, 18 kg.
AVALIAÇÃO LABORATORIAL:
- Hematócrito: 9% (Referência: 27 - 38%) -> Anemia microcítica hipocrômica grave por esgotamento de ferro
- Proteínas Totais: 3,2 g/dL (Referência: 6,0 - 7,9 g/dL)
- Albumina Sérica: 1,0 g/dL (Referência: 2,7 - 3,8 g/dL)
- OPG (Contagem McMaster): 7.200 OPG de estrongilídeos
- Ausculta Cardíaca: Frequência 160 bpm, sopro sistólico de ejeção grau III/VI audível no foco mitral/aórtico
\`\`\`

#### Interpretação Clínica Integrada:
O sopro sistólico não é uma lesão valvular orgânica primária, mas um **sopro funcional hemodinâmico** gerado pela diminuição drástica da viscosidade sanguínea (hematócrito de 9%). Com sangue ultra-diluído, o fluxo torna-se turbulento no anel valvular aórtico. A conduta exige anti-helmíntico de ação rápida, ferro dextrano parenteral e suporte nutricional/transfusional de emergência.`
      }
    ]
  },

  {
    id: 'lesson_pardis_refugia_dynamics',
    moduleId: 'mod_parasitic_diseases',
    title: 'Dinâmica de População em Refúgio & Resistência Anti-helmíntica',
    subtitle: 'Bases genéticas da resistência, o perigo do "drench and shift" e padronização do teste FECRT.',
    estimatedMinutes: 25,
    objectives: [
      'Definir com exatidão o conceito ecológico e genético de "População em Refúgio"',
      'Demonstrar matematicamente por que a vermifugação em massa acelera a seleção de mutantes resistentes',
      'Interpretar o Teste de Redução de Contagem de Ovos nas Fezes (FECRT) conforme as diretrizes da WAAVP'
    ],
    concepts: ['concept_parasitic_refugia_dynamics'],
    sections: [
      {
        id: 'sec_pardis_refug_01',
        type: 'theory',
        title: 'Genética de Populações e Preservação de Refúgio',
        contentMarkdown: `# Genética de Populações Parasitárias e o Sagrado Conceito de Refúgio

> 📖 **Referência Canônica:** Coles, G. C. et al. *World Association for the Advancement of Veterinary Parasitology (WAAVP) methods for the detection of anthelmintic resistance in ruminants*. Vet Parasitol. Van Wyk, J. A. *Refugia—overlooked as perhaps the most potent factor concerning the development of anthelmintic resistance*. Onderstepoort J Vet Res.

A resistência anti-helmíntica é a maior ameaça global à produção sustentável de pequenos ruminantes. A evolução da resistência não é um processo em que a droga causa mutações no parasita; **as mutações de resistência já existem naturalmente em frequências alélicas muito baixas na população selvagem**. O manejo humano inadequado atua como um filtro seletivo impiedoso que elimina os suscetíveis e multiplica os resistentes.

\`\`\`mermaid
flowchart TD
    A[Rebanho com População Mista de Parasitas] --> B{Tipo de Manejo}
    B -->|Vermifugar 100% e Mudar para Pasto Limpo| C[Destruição Total do Refúgio]
    B -->|Tratamento Seletivo FAMACHA| D[Preservação do Refúgio]
    C --> E[Apenas Ovos de Vermes Mutantes Resistentes Vão para o Pasto]
    E --> F[População 100% Homozigota Resistente em Poucas Gerações]
    D --> G[Ovos de Vermes Suscetíveis Cruzam com Mutantes]
    G --> H[Diluição dos Genes de Resistência / Sustentabilidade Longa]
\`\`\`

---

### 1. O Que é "População em Refúgio" (*Refugia*)?

Por definição canônica, **refúgio** é a proporção da população de parasitas que **NÃO é exposta ao agente químico anti-helmíntico** durante um determinado evento de tratamento, ficando assim livre de qualquer pressão seletiva.

O refúgio é constituído por três compartimentos biológicos:
1. **Ovos e larvas de vida livre (L1, L2, L3) presentes na pastagem** no momento da aplicação do vermífugo.
2. **Parasitas adultos e imaturos presentes no trato gastrointestinal dos animais que NÃO foram vermifugados** (animais mantidos sem tratamento no manejo seletivo).
3. **Estágios hipobióticos ou larvas em tecidos** que não são atingidos pela concentração plasmática do fármaco.

---

### 2. A Tragédia do "Drench and Shift" (Vermifugar e Transferir)

Durante décadas, manuais agropecuários antigos recomendaram vermifugar 100% do rebanho e transferi-lo imediatamente para um pasto novo, roçado e limpo (*drench and shift*). Hoje a ciência veterinária comprovou que esta prática é a **forma mais rápida e devastadora de destruir o refúgio**:

- Ao tratar 100% dos animais, **todos os vermes suscetíveis morrem**.
- Apenas uma ínfima minoria de parasitas homozigotos resistentes sobrevive no abomaso.
- Como o pasto de destino é "limpo" (sem larvas selvagens para diluir a infecção), **100% dos ovos que contaminarão esse novo piquete serão originados exclusivamente pelos parasitas mutantes sobreviventes**!
- Em 2 a 3 anos, toda a pastagem da propriedade estará habitada exclusivamente por vermes com genes de super-resistência.

---

### 3. O Padrão-Ouro de Diagnóstico: Teste FECRT (WAAVP)

O **Teste de Redução da Contagem de Ovos nas Fezes (FECRT)** estabelecido pela *World Association for the Advancement of Veterinary Parasitology* (WAAVP) é o protocolo internacional canônico:

$$\\text{FECRT (\\%)} = 100 \\times \\left( 1 - \\frac{\\bar{X}_{\\text{pós}}}{\\bar{X}_{\\text{pré}}} \\right)$$

- **Critérios de Interpretação WAAVP:**
  - **Sensibilidade Preservada:** Redução >= 95% e Limite Inferior do Intervalo de Confiança de 95% >= 90%.
  - **Resistência Estabelecida:** Redução < 95% ou Limite Inferior do IC 95% < 90%.`
      },
      {
        id: 'sec_pardis_refug_02',
        type: 'exercise',
        title: 'Exercício de Avaliação de Eficácia e Resistência Anti-helmíntica',
        contentMarkdown: `Resolva o exercício de cálculo do teste FECRT e dinâmica populacional de refúgio no banco de questões do módulo.`
      }
    ]
  },

  {
    id: 'lesson_pardis_famacha_system',
    moduleId: 'mod_parasitic_diseases',
    title: 'Sistema FAMACHA© & Manejo Integrado de Rebanhos',
    subtitle: 'Inspeção conjuntival da terceira pálpebra, controle biológico com Duddingtonia flagrans e rotação.',
    estimatedMinutes: 25,
    objectives: [
      'Executar o método de inspeção da mucosa ocular "COVER, PUSH, PULL, POP" de acordo com o protocolo FAMACHA',
      'Classificar os 5 graus de coloração e correlacioná-los com faixas de hematócrito e decisão terapêutica',
      'Integrar o controle químico seletivo ao controle biológico fúngico com Duddingtonia flagrans'
    ],
    concepts: ['concept_parasitic_famacha_system'],
    sections: [
      {
        id: 'sec_pardis_fama_01',
        type: 'theory',
        title: 'O Método FAMACHA© e o Manejo Integrado de Parasitoses (MIP)',
        contentMarkdown: `# O Sistema FAMACHA© e o Manejo Integrado de Parasitoses (MIP)

> 📖 **Referência Canônica:** Van Wyk, J. A.; Bath, G. F. *The FAMACHA system for managing haemonchosis in sheep and goats by clinically identifying individual animals for treatment*. Vet Res. Waller, P. J. *Biological control of nematode parasites of small ruminants, international conditions and prospects*. Vet Parasitol.

O sistema **FAMACHA©** (desenvolvido na África do Sul pelo Dr. François Malan e colaboradores) é um dos avanços mais revolucionários e elegantes da medicina veterinária moderna. Ele operacionaliza o conceito de **Tratamento Seletivo Direcionado (TST - *Targeted Selective Treatment*)**:

Em qualquer rebanho ovino ou caprino submetido a pastoreio, a distribuição de parasitas segue a **Lei de Pareto (Regra 80/20)**: aproximadamente **20% dos animais do rebanho abrigam cerca de 80% da carga total de vermes**. O sistema FAMACHA permite identificar exatamente esses 20% de indivíduos doentes que necessitam de medicação, poupando os outros 80% saudáveis para sustentar a população em refúgio!

---

### 1. A Escala Colorimétrica FAMACHA© e Decisão de Manejo

A inspeção deve ser realizada sob **luz natural abundante**, expondo a mucosa conjuntival da terceira pálpebra pelo método canônico:
1. **COVER:** Cubra o olho superior baixando a pálpebra dorsal com o polegar.
2. **PUSH:** Pressione suavemente o globo ocular para dentro através da pálpebra superior.
3. **PULL:** Puxe a pálpebra inferior para baixo com o polegar oposto.
4. **POP:** A mucosa conjuntival interna da terceira pálpebra projeta-se para fora (*pop out*).

| Grau FAMACHA | Cor da Mucosa Conjuntival | Hematócrito Estimado | Decisão Terapêutica |
| :---: | :--- | :---: | :--- |
| **Grau 1** | **Vermelho vivo / Ótimo** | >= 28% | **NÃO TRATAR** (Animal resistente/resiliente; excelente refúgio). |
| **Grau 2** | **Rosa avermelhado / Aceitável** | 23 - 27% | **NÃO TRATAR** (Refúgio preservado). |
| **Grau 3** | **Rosa claro / Duvidoso** | 18 - 22% | **AVALIAR:** Tratar apenas se for cordeiro recém-desmamado, fêmea no periparto ou se > 20% do lote estiver em grau 3. |
| **Grau 4** | **Rosa pálido / Perigoso** | 13 - 17% | **TRATAR IMEDIATAMENTE** com anti-helmíntico eficaz. |
| **Grau 5** | **Branco porcelana / Fatal** | < 12% | **TRATAR DE EMERGÊNCIA** + ferro injetável + suporte intensivo/transfusão. |

\`\`\`mermaid
flowchart TD
    A[Rebanho Ovino sob Pastejo] --> B[Avaliação Ocular Mensal FAMACHA]
    B --> C{Grau de Mucosa}
    C -->|Grau 1 e 2| D[NÃO Tratar: Refúgio Ativo de Genes Suscetíveis]
    C -->|Grau 3| E[Tratar Apenas Vulneráveis / Jovens / Lactantes]
    C -->|Grau 4 e 5| F[TRATAR com Droga Eficaz + Suporte]
    D --> G[Manejo Integrado MIP]
    F --> G
    G --> H[Suplementação com Duddingtonia flagrans na Ração]
    H --> I[Armadilhas Fúngicas Aprisionam L3 nas Fezes]
    I --> J[Queda de até 80% na Contaminação do Pasto sem Resíduo Químico]
\`\`\`

---

### 2. Controle Biológico com o Fungo Nematófago *Duddingtonia flagrans*

O controle biológico é a peça-chave que completa o tripé da sustentabilidade moderna:

- **Mecanismo:** Os clamidósporos de *Duddingtonia flagrans* são incorporados ao sal mineral ou concentrado dos animais. Eles são inertes e atravessam incólumes o trato gastrointestinal dos ruminantes.
- **Formação de Armadilhas Fecais:** Ao serem eliminados nas fezes, os esporos germinam na massa fecal simultaneamente à eclosão dos ovos de *Haemonchus*. O fungo emite hifas especializadas que se anastomosam formando **redes tridimensionais adesivas**.
- **Predação de Larvas L3:** As larvas infectantes móveis ficam presas nas redes adesivas; o fungo penetra a cutícula larval, secreta enzimas líticas e digere o nematódeo por dentro, reduzindo em até 70 a 85% a quantidade de L3 que migraria para a pastagem!`
      },
      {
        id: 'sec_pardis_fama_02',
        type: 'lab',
        title: 'Laboratório Interativo de Triagem de Rebanho via FAMACHA',
        labType: 'agrostology_botany_bench',
        contentMarkdown: `### Laboratório de Triagem Populacional de Rebanho

\`\`\`
LOTE: 100 Ovelhas Santa Inês adultas em lactação. Fazenda Esperança, Ourinhos - SP.
RESULTADO DA TRIAGEM FAMACHA MENSAL:
- Grau 1 (Vermelho): 45 ovelhas (45%) -> Não tratadas
- Grau 2 (Rosa avermelhado): 35 ovelhas (35%) -> Não tratadas
- Grau 3 (Rosa claro): 12 ovelhas (12%) -> Tratadas 4 primíparas de alta produção de leite
- Grau 4 (Rosa pálido): 6 ovelhas (6%) -> Tratadas imediatamente com Levamisol 7,5 mg/kg
- Grau 5 (Branco porcelana): 2 ovelhas (2%) -> Tratadas + ferro dextrano + isolamento em piquete maternidade
\`\`\`

#### Conclusão de Manejo:
Apenas 12 animais de 100 foram medicados quimicamente (12% do plantel). A verminose clínica foi debelada, nenhum animal veio a óbito, o custo com vermífugos caiu 88% e **88% dos animais continuaram alimentando a população em refúgio com nematódeos sensíveis**, blindando a fazenda contra a resistência anti-helmíntica.`
      }
    ]
  }
];
