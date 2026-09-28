// src/learning/labs/ParasitologyFecalBench.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Microscope,
  Calculator,
  CheckCircle2,
  XCircle,
  Sparkles,
  Info,
  Bug,
  Eye
} from 'lucide-react';
import { soundManager } from '../../utils/sound';

export interface ParasiteSample {
  id: string;
  hostSpecies: 'Ovino' | 'Equino' | 'Canino';
  animalId: string;
  clinicalContext: string;
  famachaScore?: 1 | 2 | 3 | 4 | 5;
  eggType: string;
  grid1Eggs: number;
  grid2Eggs: number;
  multiplierFactor: number;
  expectedOpg: number;
  pathologySummary: string;
  correctDiagnosisId: string;
  differentialOptions: {
    id: string;
    title: string;
    isCorrect: boolean;
    rationale: string;
  }[];
}

const PARASITE_SAMPLES: ParasiteSample[] = [
  {
    id: 'sample_sheep_haemonchus',
    hostSpecies: 'Ovino',
    animalId: 'Borrego #402 (Santa Inês)',
    clinicalContext: 'Anemia clínica grave, edema submandibular em papo mole e fezes escuras pastosas.',
    famachaScore: 5,
    eggType: 'Ovos de Estrongilídeos (Haemonchus contortus): elípticos, casca fina transparente com mórula multicelular de 16-32 blastômeros.',
    grid1Eggs: 18,
    grid2Eggs: 18,
    multiplierFactor: 50,
    expectedOpg: 1800,
    pathologySummary: 'Contagem massiva de 36 ovos na câmara de McMaster (18 no retículo 1 + 18 no retículo 2). Multiplicado pelo fator de diluição 50 = 1.800 OPG.',
    correctDiagnosisId: 'diag_haemonchosis_critical',
    differentialOptions: [
      {
        id: 'diag_haemonchosis_critical',
        title: 'Hemoncose Crítica (1.800 OPG + FAMACHA Grau 5): Tratar Imediatamente com Droga Testada + Suporte',
        isCorrect: true,
        rationale: 'OPG > 1.000 associado a FAMACHA 5 (mucosa branca como porcelana) exige desverminação seletiva de emergência com princípio ativo não-resistente e ferro injetável.'
      },
      {
        id: 'diag_subclinical',
        title: 'Carga Leve Tolerável (OPG < 200): Manter Animal em Refúgio sem Intervenção',
        isCorrect: false,
        rationale: 'Incorreto. A contagem de 36 ovos nos dois retículos equivale a 1.800 OPG, valor letal que levará o animal a óbito por hipóxia anêmica se não tratado.'
      },
      {
        id: 'diag_coccidiosis_only',
        title: 'Eimeriose / Coccidiose Pura sem Presença de Nematódeos',
        isCorrect: false,
        rationale: 'Incorreto. Os ovos visualizados são grandes, ovais e segmentados em mórula, típicos de nematódeos estrongilídeos (Haemonchus) e não oocistos esféricos diminutos de Eimeria.'
      }
    ]
  },
  {
    id: 'sample_horse_parascaris',
    hostSpecies: 'Equino',
    animalId: 'Potro "Vento Negro" (PSI, 8 meses)',
    clinicalContext: 'Tosse seca, pelo arrepiado opaco, retardo no ganho de peso e fezes amolecidas.',
    famachaScore: undefined,
    eggType: 'Ovos de Parascaris equorum: esféricos ou subesféricos grandes (~90 µm), casca espessa, rugosa, de coloração castanho-dourada.',
    grid1Eggs: 2,
    grid2Eggs: 2,
    multiplierFactor: 50,
    expectedOpg: 200,
    pathologySummary: 'Presença de 4 ovos característicos de ascarídeo nos dois retículos (4 × 50 = 200 OPG).',
    correctDiagnosisId: 'diag_parascaris_moderate',
    differentialOptions: [
      {
        id: 'diag_parascaris_moderate',
        title: 'Ascaridíase Equina por Parascaris equorum em Potro Jovem (200 OPG)',
        isCorrect: true,
        rationale: 'Potros < 1 ano são os hospedeiros primários de Parascaris equorum. Os ovos de casca espessa alveolar confirmam ascaridíase, com risco de cólica obstrutiva intraluminal se houver morte maciça de vermes.'
      },
      {
        id: 'diag_strongyloides',
        title: 'Infecção por Strongyloides westeri com Ovos Larvados Finos',
        isCorrect: false,
        rationale: 'Incorreto. Strongyloides westeri elimina ovos pequenos já larvados com casca delgada; os ovos observados são grandes, rugosos e pigmentados de Parascaris.'
      },
      {
        id: 'diag_tapeworm_anoplocephala',
        title: 'Anoplocefalose Cecocólica por Anoplocephala perfoliata',
        isCorrect: false,
        rationale: 'Incorreto. Anoplocephala produz ovos triangulares ou quadrangulares com aparelho piriforme característico, muito distintos da esfera rugosa de Parascaris.'
      }
    ]
  },
  {
    id: 'sample_dog_ancylostoma',
    hostSpecies: 'Canino',
    animalId: 'Filhote "Pipoca" (SRD, 45 dias)',
    clinicalContext: 'Anemia com mucosas pálidas, fezes pastosas escuras com sangue digerido (melena) e desidratação.',
    famachaScore: undefined,
    eggType: 'Ovos de Ancylostoma caninum: elípticos de extremidades arredondadas, casca lisa e fina com mórula de 4 a 8 blastômeros.',
    grid1Eggs: 12,
    grid2Eggs: 10,
    multiplierFactor: 50,
    expectedOpg: 1100,
    pathologySummary: 'Contagem de 22 ovos em câmara de McMaster (1.100 OPG). Parasita hematófago voraz em filhote canino.',
    correctDiagnosisId: 'diag_ancylostomosis_severe',
    differentialOptions: [
      {
        id: 'diag_ancylostomosis_severe',
        title: 'Ancilostomose Canina Aguda com Melena e Anemia Hemorrágica (1.100 OPG)',
        isCorrect: true,
        rationale: 'Ancylostoma caninum possui cápsula bucal com dentes que laceram a mucosa duodenal. A hematofagia intensa gera melena, anemia ferropriva grave e risco de morte em filhotes jovens.'
      },
      {
        id: 'diag_dipylidium_flea',
        title: 'Dipilidiose com Cápsulas Ovígeras de Tênia de Pulga',
        isCorrect: false,
        rationale: 'Incorreto. Dipylidium caninum elimina proglotes grávidas ativas em formato de semente de pepino contendo pacotes/cápsulas de ovos, e não ovos isolados de estrongilídeos.'
      },
      {
        id: 'diag_giardiasis',
        title: 'Giardíase Cística com Oocistos Tetranucleados',
        isCorrect: false,
        rationale: 'Incorreto. Cistos de Giardia são microscópicos (10-14 µm) e diagnosticados por centrifugo-flutuação com sulfato de zinco, e não ovos grandes de nematódeo de 60 µm.'
      }
    ]
  }
];

interface ParasitologyFecalBenchProps {
  config?: any;
  onObjectiveAchieved: () => void;
  isCompleted?: boolean;
  onOpenTutor?: (question?: string) => void;
}

export const ParasitologyFecalBench: React.FC<ParasitologyFecalBenchProps> = ({
  onObjectiveAchieved,
  isCompleted = false,
  onOpenTutor,
}) => {
  const [selectedSampleIdx, setSelectedSampleIdx] = useState<number>(0);
  const [userOpgInput, setUserOpgInput] = useState<string>('');
  const [isOpgValidated, setIsOpgValidated] = useState<boolean>(false);
  const [diagnoses, setDiagnoses] = useState<Record<string, string>>({});
  const [hasAchievedSuccess, setHasAchievedSuccess] = useState<boolean>(isCompleted);
  const [feedbackText, setFeedbackText] = useState<string | null>(null);

  const currentSample = PARASITE_SAMPLES[selectedSampleIdx];
  const totalEggsCount = currentSample.grid1Eggs + currentSample.grid2Eggs;

  const handleValidateOpg = () => {
    const val = parseInt(userOpgInput.trim(), 10);
    if (val === currentSample.expectedOpg) {
      soundManager.playSuccess();
      setIsOpgValidated(true);
      setFeedbackText(`Cálculo de OPG Correto: ${val} OPG (${totalEggsCount} ovos × 50).`);
    } else {
      soundManager.playError();
      setIsOpgValidated(false);
      setFeedbackText(`Cálculo incorreto. Dica: Some os ovos dos dois retículos (${currentSample.grid1Eggs} + ${currentSample.grid2Eggs} = ${totalEggsCount}) e multiplique pelo fator 50.`);
    }
  };

  const handleDiagnosisSelect = (diagId: string) => {
    const isCorrect = diagId === currentSample.correctDiagnosisId;
    setDiagnoses((prev) => ({
      ...prev,
      [currentSample.id]: diagId
    }));

    if (isCorrect) {
      soundManager.playSuccess();
      setFeedbackText('Diagnóstico parasitológico e conduta homologados com sucesso!');
      checkSuccess({ ...diagnoses, [currentSample.id]: diagId });
    } else {
      soundManager.playError();
      const option = currentSample.differentialOptions.find((o) => o.id === diagId);
      setFeedbackText(option ? option.rationale : 'Diagnóstico incorreto.');
    }
  };

  const checkSuccess = (currentDiags: Record<string, string>) => {
    const allAnswered = PARASITE_SAMPLES.every((s) => currentDiags[s.id] === s.correctDiagnosisId);
    if (allAnswered && !hasAchievedSuccess) {
      setHasAchievedSuccess(true);
      onObjectiveAchieved();
    }
  };

  return (
    <div className="w-full bg-slate-950 border border-emerald-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col font-sans text-slate-100">
      {/* BARRA SUPERIOR DO MICROSCÓPIO */}
      <div className="bg-slate-900/90 border-b border-slate-800 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Microscope className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
              Bancada de Coproparasitologia & McMaster
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {currentSample.animalId} — {currentSample.hostSpecies}
            </h3>
          </div>
        </div>

        {/* SELETOR DE AMOSTRAS FECAL */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
          {PARASITE_SAMPLES.map((s, idx) => {
            const isFinished = diagnoses[s.id] === s.correctDiagnosisId;
            return (
              <button
                key={s.id}
                onClick={() => {
                  soundManager.playClick();
                  setSelectedSampleIdx(idx);
                  setUserOpgInput('');
                  setIsOpgValidated(false);
                  setFeedbackText(null);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedSampleIdx === idx
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {s.hostSpecies}
                {isFinished && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />}
              </button>
            );
          })}

          {onOpenTutor && (
            <button
              onClick={() => onOpenTutor(`Dra. Millena, como interpretar a contagem de ovos na câmara McMaster para o paciente ${currentSample.animalId} (${currentSample.hostSpecies}) e calcular o OPG e a rotação de anti-helmínticos?`)}
              className="ml-2 px-3 py-1.5 rounded-lg bg-amber-950 hover:bg-amber-900 text-amber-300 border border-amber-500/40 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Pedir Ajuda</span>
            </button>
          )}
        </div>
      </div>

      {/* ÁREA CENTRAL: CÂMARA DE MCMASTER & ANÁLISE QUANTITATIVA */}
      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* COLUNA ESQUERDA: QUADRO CLÍNICO & CÁLCULO DE OPG */}
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" />
              Quadro Clínico do Paciente
            </span>
            <p className="text-xs text-slate-300 leading-relaxed italic">
              "{currentSample.clinicalContext}"
            </p>
            {currentSample.famachaScore && (
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Cartão FAMACHA:</span>
                <span className="px-2.5 py-1 rounded-md bg-rose-950 border border-rose-500 text-rose-300 font-bold text-xs uppercase">
                  Grau {currentSample.famachaScore} (Branco Porcelana)
                </span>
              </div>
            )}
          </div>

          {/* CALCULADORA DE OPG */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5" />
              Contagem na Câmara de McMaster
            </span>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                <span className="text-slate-500 block text-[10px]">RETÍCULO 1</span>
                <strong className="text-amber-400 text-base">{currentSample.grid1Eggs} ovos</strong>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                <span className="text-slate-500 block text-[10px]">RETÍCULO 2</span>
                <strong className="text-amber-400 text-base">{currentSample.grid2Eggs} ovos</strong>
              </div>
            </div>

            <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-2 text-xs">
              <div className="text-[11px] text-slate-400">
                Fórmula Canônica: <strong className="text-cyan-300">OPG = (R1 + R2) × 50</strong>
              </div>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Digite o OPG total..."
                  value={userOpgInput}
                  onChange={(e) => setUserOpgInput(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
                <button
                  onClick={handleValidateOpg}
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs cursor-pointer shadow-md"
                >
                  Calcular
                </button>
              </div>
              {isOpgValidated && (
                <div className="text-emerald-400 text-[11px] font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Cálculo de OPG Validado!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* COLUNA CENTRAL & DIREITA: CAMPO DO MICROSCÓPIO & CONDUTA */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Eye className="w-4 h-4" />
                Campo Ocular de 100x — Câmara de McMaster com Grade Volumétrica
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                Solução NaCl d=1.20 g/mL
              </span>
            </div>

            {/* SIMULAÇÃO VISUAL DO OCULAR */}
            <div className="w-full h-48 sm:h-56 bg-slate-950 rounded-2xl border-2 border-slate-800 relative overflow-hidden flex items-center justify-center">
              {/* GRADE DE MCMASTER ESTILIZADA */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none opacity-25">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="border border-cyan-400/40" />
                ))}
              </div>

              {/* RETÍCULO OCULAR */}
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-emerald-500/40 flex items-center justify-center relative shadow-inner">
                <div className="text-center p-3 space-y-1 z-10 bg-slate-950/80 rounded-xl backdrop-blur-xs border border-slate-800">
                  <Bug className="w-6 h-6 text-amber-400 mx-auto animate-pulse" />
                  <span className="text-[11px] font-bold text-white block">
                    {totalEggsCount} Ovos no Campo Total
                  </span>
                  <span className="text-[10px] text-slate-400 block line-clamp-2">
                    {currentSample.eggType}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-300 bg-slate-950/80 p-3 rounded-xl border border-slate-800 leading-relaxed">
              <strong>Morfologia Diagnóstica:</strong> {currentSample.eggType}
            </div>
          </div>

          {/* TOMADA DE DECISÃO TERAPÊUTICA & FAMACHA */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              Conduta Clínica & Manejo Estratégico do Rebanho
            </span>

            <div className="space-y-2.5">
              {currentSample.differentialOptions.map((opt) => {
                const isSelected = diagnoses[currentSample.id] === opt.id;
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
                  feedbackText.includes('homologados') || feedbackText.includes('Correto')
                    ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-200'
                    : 'bg-rose-950/70 border-rose-500/50 text-rose-200'
                }`}
              >
                <strong>Parecer Parasitológico:</strong> {feedbackText}
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
                  🎯 Competência Coproparasitológica Homologada!
                </span>
                <span>
                  Você dominou a câmara de McMaster, o cálculo preciso de OPG, a identificação dos ovos de Haemonchus e Parascaris e a tomada de decisão via FAMACHA.
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
