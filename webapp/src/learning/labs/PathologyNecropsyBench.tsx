// src/learning/labs/PathologyNecropsyBench.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Scissors,
  Microscope,
  Eye,
  CheckCircle2,
  XCircle,
  Sparkles,
  FileText,
  AlertTriangle
} from 'lucide-react';
import { soundManager } from '../../utils/sound';

export interface NecropsyCase {
  id: string;
  animalSpecies: string;
  organName: string;
  historySummary: string;
  macroExternalView: {
    title: string;
    description: string;
    color: string;
  };
  cutSurfaceView: {
    title: string;
    description: string;
    pathognomonicPattern: string;
  };
  histopathologyView: {
    title: string;
    description: string;
    cellularKeyFeature: string;
  };
  correctDiagnosisId: string;
  differentialOptions: {
    id: string;
    title: string;
    isCorrect: boolean;
    rationale: string;
  }[];
}

const NECROPSY_CASES: NecropsyCase[] = [
  {
    id: 'case_liver_nutmeg',
    animalSpecies: 'Canino (Boxer, 9 anos)',
    organName: 'Fígado (Hepatopatia Congestiva)',
    historySummary: 'Paciente cardiopata crônico com ascite volumosa e insuficiência cardíaca congestiva direita.',
    macroExternalView: {
      title: 'Inspeção Externa do Fígado',
      description: 'Hepatomegalia acentuada, consistência túrgida e firme, bordas arredondadas e cápsula de Glisson distendida com coloração arroxeada escura difusa.',
      color: 'bg-red-950/80 border-red-800'
    },
    cutSurfaceView: {
      title: 'Superfície de Corte com Bisturi',
      description: 'Ao corte transversal, drena sangue escuro venoso e revela arquitetura mosqueada característica: pontilhado vermelho-escuro deprimido (congestão centrolobular) contrastando com zonas marrom-claras salientes (esteatose periportal).',
      pathognomonicPattern: 'Aspecto canônico de Fígado em "Noz-Moscada"'
    },
    histopathologyView: {
      title: 'Lâmina Histopatológica (H&E, 400x)',
      description: 'Sinusoides e veias da zona 3 centrolobular amplamente dilatados e repletos de hemácias, com necrose e atrofia dos hepatócitos centrais. Os hepatócitos periportais da zona 1 exibem múltiplos vacúolos lipídicos óptico-vazios (degeneração gordurosa / esteatose).',
      cellularKeyFeature: 'Necrose centrolobular associada a esteatose periportal zonal'
    },
    correctDiagnosisId: 'diag_nutmeg_liver',
    differentialOptions: [
      {
        id: 'diag_nutmeg_liver',
        title: 'Congestão Passiva Crônica Hepática ("Fígado em Noz-Moscada")',
        isCorrect: true,
        rationale: 'O padrão mosqueado reticulado alternando estase venosa na zona 3 e esteatose na zona 1 é a assinatura anatomopatológica inequívoca da falência cardíaca direita.'
      },
      {
        id: 'diag_acute_hepatitis',
        title: 'Hepatite Infecciosa Canina Aguda com Necrose em Ponte',
        isCorrect: false,
        rationale: 'Incorreto. A hepatite viral aguda cursa com corpúsculos de inclusão intranucleares, necrose randômica difusa e ausência da estase centrolobular crônica em noz-moscada.'
      },
      {
        id: 'diag_hepatic_carcinoma',
        title: 'Carcinoma Hepatocelular Multicêntrico Infiltrativo',
        isCorrect: false,
        rationale: 'Incorreto. Neoplasias primárias formam massas nodulares expansivas ou infiltrativas assimétricas com anaplasia tecidual, e não padrão reticulado lobular regular.'
      }
    ]
  },
  {
    id: 'case_kidney_infarct',
    animalSpecies: 'Felino (SRD, 6 anos)',
    organName: 'Rim Esquerdo (Lesão Isquêmica)',
    historySummary: 'Paciente com cardiomiopatia hipertrófica felina (CMH), paralisia súbita de membros pélvicos e azotemia prerenal.',
    macroExternalView: {
      title: 'Inspeção Externa do Rim',
      description: 'Na cortical do polo cranial, observa-se área discretamente deprimida, pálida, branco-acinzentada, delimitada por estreita linha periférica avermelhada hiperêmica.',
      color: 'bg-amber-950/80 border-amber-800'
    },
    cutSurfaceView: {
      title: 'Corte Sagital com Bisturi',
      description: 'O corte revela uma lesão em formato de cunha (cuneiforme): a base do triângulo está voltada para a cápsula renal externa e o vértice aponta para a junção corticomedular em direção a uma artéria arqueada ocluída por êmbolo fibrinoso.',
      pathognomonicPattern: 'Lesão cuneiforme pálida com halo hiperêmico'
    },
    histopathologyView: {
      title: 'Lâmina Histopatológica (H&E, 400x)',
      description: 'Necrose de coagulação clássica: a arquitetura básica dos túbulos contorcidos e glomérulos é reconhecível como "células fantasmas", mas todos os núcleos celulares sofreram cariólise e picnose. O citoplasma está intensamente eosinofílico.',
      cellularKeyFeature: 'Necrose de coagulação com contornos celulares preservados sem núcleos'
    },
    correctDiagnosisId: 'diag_kidney_infarct',
    differentialOptions: [
      {
        id: 'diag_kidney_infarct',
        title: 'Infarto Renal Anêmico (Branco) por Tromboembolismo Aórtico',
        isCorrect: true,
        rationale: 'O rim possui circulação arterial terminal única. A oclusão de artéria arqueada por tromboembolismo gera infarto anêmico cuneiforme com necrose de coagulação típica.'
      },
      {
        id: 'diag_pyelonephritis',
        title: 'Pielonefrite Bacteriana Supurativa Ascendente',
        isCorrect: false,
        rationale: 'Incorreto. A pielonefrite é caracterizada por estrias purulentas na medula e na pelve renal com necrose de liquefação rica em neutrófilos, e não área pálida seca cuneiforme.'
      },
      {
        id: 'diag_polycystic_kidney',
        title: 'Doença Renal Policística Familiar (PKD)',
        isCorrect: false,
        rationale: 'Incorreto. A PKD gera cistos arredondados múltiplos com conteúdo líquido translúcido, e não infarto cuneiforme sólido de coagulação.'
      }
    ]
  },
  {
    id: 'case_lymph_caseous',
    animalSpecies: 'Ovino (Santa Inês, 4 anos)',
    organName: 'Linfonodo Pré-Escapular',
    historySummary: 'Ovino com emagrecimento progressivo e aumento nodular de 9 cm na região pré-escapular esquerda após tosquia manual.',
    macroExternalView: {
      title: 'Inspeção Externa do Linfonodo',
      description: 'Linfonodo colossalmente hipertrofiado (tamanho de uma laranja), consistência muito firme, aderido a planos profundos, com cápsula fibrosa espessa de 4 mm.',
      color: 'bg-emerald-950/80 border-emerald-800'
    },
    cutSurfaceView: {
      title: 'Secção Transversal do Linfonodo',
      description: 'O bisturi encontra resistência firme na cápsula e revela massa seca, friável, branco-amarelada, laminada em camadas concêntricas idênticas à casca de cebola.',
      pathognomonicPattern: 'Massa seca laminada concêntrica ("casca de cebola / queijo curado")'
    },
    histopathologyView: {
      title: 'Lâmina Histopatológica (H&E, 400x)',
      description: 'Área central de necrose caseosa acelular granular eosinofílica e amorfa com calcificação distrófica puntiforme, circundada por células gigantes de Langhans, macrófagos e espessa cápsula de tecido conjuntivo fibroso.',
      cellularKeyFeature: 'Granuloma caseoso com células gigantes de Langhans e cápsula concêntrica'
    },
    correctDiagnosisId: 'diag_caseous_lymphadenitis',
    differentialOptions: [
      {
        id: 'diag_caseous_lymphadenitis',
        title: 'Linfadenite Caseosa ("Mal do Caroço") por Corynebacterium pseudotuberculosis',
        isCorrect: true,
        rationale: 'O aspecto em casca de cebola (lâminas concêntricas secas de necrose caseosa) com cápsula fibrosa espessa em ovino é o padrão patognomônico da Linfadenite Caseosa.'
      },
      {
        id: 'diag_lymphoma',
        title: 'Linfoma Linfoblástico Multicêntrico Encefaloide',
        isCorrect: false,
        rationale: 'Incorreto. O linfoma produz massa homogênea, esbranquiçada e carnosa (aspecto de carne de peixe) sem necrose caseosa concêntrica calcificada.'
      },
      {
        id: 'diag_acute_abscess',
        title: 'Abscesso Agudo Liquefativo por Streptococcus zooepidemicus',
        isCorrect: false,
        rationale: 'Incorreto. Abscessos agudos contêm pus fluido amarelo-esverdeado (necrose liquefativa), enquanto a lesão descrita é seca, dura e laminada (necrose caseosa).'
      }
    ]
  }
];

interface PathologyNecropsyBenchProps {
  config?: any;
  onObjectiveAchieved: () => void;
  isCompleted?: boolean;
  onOpenTutor?: (question?: string) => void;
}

export const PathologyNecropsyBench: React.FC<PathologyNecropsyBenchProps> = ({
  onObjectiveAchieved,
  isCompleted = false,
  onOpenTutor,
}) => {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState<number>(0);
  const [activeStep, setActiveStep] = useState<'macro' | 'cut' | 'micro'>('macro');
  const [diagnoses, setDiagnoses] = useState<Record<string, string>>({});
  const [hasAchievedSuccess, setHasAchievedSuccess] = useState<boolean>(isCompleted);
  const [feedbackText, setFeedbackText] = useState<string | null>(null);

  const currentCase = NECROPSY_CASES[selectedCaseIdx];

  const handleDiagnosisSelect = (diagId: string) => {
    const isCorrect = diagId === currentCase.correctDiagnosisId;
    setDiagnoses((prev) => ({
      ...prev,
      [currentCase.id]: diagId
    }));

    if (isCorrect) {
      soundManager.playSuccess();
      setFeedbackText('Laudo anatomopatológico confirmado com precisão patognomônica!');
      checkSuccess({ ...diagnoses, [currentCase.id]: diagId });
    } else {
      soundManager.playError();
      const option = currentCase.differentialOptions.find((o) => o.id === diagId);
      setFeedbackText(option ? option.rationale : 'Diagnóstico incorreto.');
    }
  };

  const checkSuccess = (currentDiags: Record<string, string>) => {
    const allAnswered = NECROPSY_CASES.every((c) => currentDiags[c.id] === c.correctDiagnosisId);
    if (allAnswered && !hasAchievedSuccess) {
      setHasAchievedSuccess(true);
      onObjectiveAchieved();
    }
  };

  return (
    <div className="w-full bg-slate-950 border border-emerald-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col font-sans text-slate-100">
      {/* BARRA SUPERIOR DA MESA DE NECRÓPSIA */}
      <div className="bg-slate-900/90 border-b border-slate-800 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
            <Scissors className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
              Mesa de Necrópsia & Patologia Cadavérica
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {currentCase.organName} — {currentCase.animalSpecies}
            </h3>
          </div>
        </div>

        {/* SELETOR DE CASOS DE NECRÓPSIA */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
          {NECROPSY_CASES.map((c, idx) => {
            const isFinished = diagnoses[c.id] === c.correctDiagnosisId;
            return (
              <button
                key={c.id}
                onClick={() => {
                  soundManager.playClick();
                  setSelectedCaseIdx(idx);
                  setActiveStep('macro');
                  setFeedbackText(null);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedCaseIdx === idx
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Caso {idx + 1}
                {isFinished && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />}
              </button>
            );
          })}

          {onOpenTutor && (
            <button
              onClick={() => onOpenTutor(`Dra. Millena, como correlacionar os achados de necrópsia do órgão ${currentCase.organName} em ${currentCase.animalSpecies} com os padrões de necrose e lesão tecidual?`)}
              className="ml-2 px-3 py-1.5 rounded-lg bg-rose-950 hover:bg-rose-900 text-rose-300 border border-rose-500/40 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span className="hidden sm:inline">Pedir Ajuda</span>
            </button>
          )}
        </div>
      </div>

      {/* ÁREA CENTRAL: PROCEDIMENTO CADAVÉRICO EM 3 ETAPAS */}
      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* COLUNA ESQUERDA: HISTÓRICO & NAVEGADOR DE ETAPAS */}
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              Histórico Cadavérico / Anamnese
            </span>
            <p className="text-xs text-slate-300 leading-relaxed italic">
              "{currentCase.historySummary}"
            </p>
          </div>

          {/* SELETOR DAS 3 ETAPAS DE ANÁLISE */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
              Etapas da Necrópsia
            </span>

            <button
              onClick={() => { soundManager.playClick(); setActiveStep('macro'); }}
              className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer flex items-center gap-2.5 ${
                activeStep === 'macro'
                  ? 'bg-rose-950/90 border-rose-500 text-white shadow-md'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="w-4 h-4 text-amber-400" />
              1. Inspeção Macroscópica Externa
            </button>

            <button
              onClick={() => { soundManager.playClick(); setActiveStep('cut'); }}
              className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer flex items-center gap-2.5 ${
                activeStep === 'cut'
                  ? 'bg-rose-950/90 border-rose-500 text-white shadow-md'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Scissors className="w-4 h-4 text-cyan-400" />
              2. Corte com Bisturi & Superfície
            </button>

            <button
              onClick={() => { soundManager.playClick(); setActiveStep('micro'); }}
              className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer flex items-center gap-2.5 ${
                activeStep === 'micro'
                  ? 'bg-rose-950/90 border-rose-500 text-white shadow-md'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Microscope className="w-4 h-4 text-emerald-400" />
              3. Lâmina Histopatológica (400x)
            </button>
          </div>
        </div>

        {/* COLUNA CENTRAL & DIREITA: VISUALIZADOR DA PEÇA E LAUDO */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 min-h-[220px]">
            {activeStep === 'macro' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Eye className="w-4 h-4" />
                  {currentCase.macroExternalView.title}
                </span>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                    {currentCase.macroExternalView.description}
                  </p>
                </div>
              </motion.div>
            )}

            {activeStep === 'cut' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Scissors className="w-4 h-4" />
                  {currentCase.cutSurfaceView.title}
                </span>
                <div className="bg-slate-950 p-4 rounded-xl border border-cyan-500/30 space-y-2">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-cyan-950 border border-cyan-500/50 text-cyan-300 text-xs font-bold">
                    🔍 {currentCase.cutSurfaceView.pathognomonicPattern}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                    {currentCase.cutSurfaceView.description}
                  </p>
                </div>
              </motion.div>
            )}

            {activeStep === 'micro' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Microscope className="w-4 h-4" />
                  {currentCase.histopathologyView.title}
                </span>
                <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30 space-y-2">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-950 border border-emerald-500/50 text-emerald-300 text-xs font-bold">
                    🔬 {currentCase.histopathologyView.cellularKeyFeature}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                    {currentCase.histopathologyView.description}
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* SUBMISSÃO DO LAUDO ANATOMOPATOLÓGICO */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              Laudo Anatomopatológico Definitivo (Causa Mortis)
            </span>

            <div className="space-y-2.5">
              {currentCase.differentialOptions.map((opt) => {
                const isSelected = diagnoses[currentCase.id] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleDiagnosisSelect(opt.id)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between text-xs sm:text-sm ${
                      isSelected
                        ? opt.isCorrect
                          ? 'bg-emerald-950/90 border-emerald-500 text-emerald-100 font-bold'
                          : 'bg-rose-950/90 border-rose-500 text-rose-100 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <span>{opt.title}</span>
                    {isSelected && (
                      opt.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                      )
                    )}
                  </button>
                );
              })}
            </div>

            {feedbackText && (
              <div
                className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
                  feedbackText.includes('confirmado')
                    ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-200'
                    : 'bg-rose-950/70 border-rose-500/50 text-rose-200'
                }`}
              >
                <strong>Parecer Anatomopatológico:</strong> {feedbackText}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FEEDBACK FINAL DE SUCESSO */}
      <AnimatePresence>
        {hasAchievedSuccess && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-emerald-950/90 border-t border-emerald-500/60 p-4 text-emerald-200 flex items-center justify-between gap-4 text-xs"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="font-bold text-white block">
                  🎯 Competência em Necrópsia e Patologia Homologada!
                </span>
                <span>
                  Você identificou com rigor anatomopatológico a congestão em noz-moscada, o infarto renal anêmico de coagulação e a necrose caseosa em casca de cebola.
                </span>
              </div>
            </div>
            <span className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-[11px] shrink-0">
              Concluído
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
