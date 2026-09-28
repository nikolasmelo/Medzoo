// src/learning/labs/SurgicalCenterBench.tsx
import React, { useState, useEffect, useRef } from 'react';
import {
  Scissors,
  Wind,
  CheckCircle2,
  XCircle,
  Sparkles,
  Info,
  Activity,
  Gauge,
  Droplets,
  AlertTriangle,
  RotateCcw
} from 'lucide-react';
import { soundManager } from '../../utils/sound';

export interface SurgicalCase {
  id: string;
  patientName: string;
  species: 'Canino' | 'Equino' | 'Psitacídeo (Ave Silvestre)';
  weightKg: number;
  procedureTitle: string;
  surgicalField: {
    tissueType: 'linea_alba' | 'intestine' | 'skin';
    tissueName: string;
    tissueDescription: string;
    correctSutureId: string;
    correctNeedleId: string;
    correctPatternId: string;
    pointsNeeded: number;
  };
  anesthesiaField: {
    baselineEtCO2: number;
    baselineInCO2: number;
    initialVaporizerPercent: number;
    initialFgFlowLmin: number;
    initialPeakPressure: number;
    initialProblem: 'rebreathing_soda_lime' | 'shark_fin_bronchospasm' | 'high_peak_pressure_bird' | 'normal';
    problemDescription: string;
    solutionAction: 'replace_soda_lime' | 'bronchodilator_unblock' | 'lower_ippv_pressure';
  };
}

const SURGICAL_CASES: SurgicalCase[] = [
  {
    id: 'case_dog_laparotomy',
    patientName: 'Thor',
    species: 'Canino',
    weightKg: 18.5,
    procedureTitle: 'Enterectomia & Fechamento de Linha Alba',
    surgicalField: {
      tissueType: 'intestine',
      tissueName: 'Alça de Jejuno (Submucosa intestinal)',
      tissueDescription: 'Anastomose intestinal término-terminal após remoção de osso obstrutivo necrótico.',
      correctSutureId: 'pds',
      correctNeedleId: 'taper',
      correctPatternId: 'simple_interrupted',
      pointsNeeded: 4
    },
    anesthesiaField: {
      baselineEtCO2: 52,
      baselineInCO2: 0,
      initialVaporizerPercent: 2.5,
      initialFgFlowLmin: 1.5,
      initialPeakPressure: 14,
      initialProblem: 'shark_fin_bronchospasm',
      problemDescription: 'Curva capnográfica com perda do platô horizontal e subida em rampa ("barbatana de tubarão") com EtCO2 elevado (52 mmHg) por constrição de vias aéreas.',
      solutionAction: 'bronchodilator_unblock'
    }
  },
  {
    id: 'case_horse_colic',
    patientName: 'Trovão',
    species: 'Equino',
    weightKg: 460,
    procedureTitle: 'Laparotomia Exploratória em Cólica por Volvo',
    surgicalField: {
      tissueType: 'linea_alba',
      tissueName: 'Linha Alba (Fáscia Aponeurótica Abdominal)',
      tissueDescription: 'Fechamento de incisão xifopúbica ventral de 35 cm sob decúbito dorsal.',
      correctSutureId: 'pds',
      correctNeedleId: 'taper',
      correctPatternId: 'simple_interrupted',
      pointsNeeded: 5
    },
    anesthesiaField: {
      baselineEtCO2: 44,
      baselineInCO2: 8,
      initialVaporizerPercent: 2.0,
      initialFgFlowLmin: 4.0,
      initialPeakPressure: 18,
      initialProblem: 'rebreathing_soda_lime',
      problemDescription: 'Cal sodada exausta com coloração violeta no canister e InCO2 elevado a 8 mmHg (linha de base não toca o zero por reinalação contínua de CO2).',
      solutionAction: 'replace_soda_lime'
    }
  },
  {
    id: 'case_bird_celiotomy',
    patientName: 'Lupita',
    species: 'Psitacídeo (Ave Silvestre)',
    weightKg: 1.15,
    procedureTitle: 'Celiotomia Aviar para Ovocentese de Ovo Retido',
    surgicalField: {
      tissueType: 'skin',
      tissueName: 'Pele e Derme Celomática Ultrafina',
      tissueDescription: 'Pele avascular com espessura de papel celofane sem tecido adiposo denso.',
      correctSutureId: 'monocryl',
      correctNeedleId: 'taper',
      correctPatternId: 'simple_interrupted',
      pointsNeeded: 3
    },
    anesthesiaField: {
      baselineEtCO2: 30,
      baselineInCO2: 0,
      initialVaporizerPercent: 1.5,
      initialFgFlowLmin: 0.8,
      initialPeakPressure: 24,
      initialProblem: 'high_peak_pressure_bird',
      problemDescription: 'Pressão de pico do ventilador em 24 cmH2O! Risco iminente de barotrauma explosivo e ruptura de sacos aéreos toracoabdominais.',
      solutionAction: 'lower_ippv_pressure'
    }
  }
];

const SUTURE_MATERIALS = [
  { id: 'pds', name: 'Polidioxanona (PDS II)', type: 'Monofilamentar Absorvível', desc: 'Resistência longa (42-60 dias). Baixo atrito, sem capilaridade. Ideal para linha alba e intestino.' },
  { id: 'nylon', name: 'Nylon Cirúrgico', type: 'Monofilamentar Inabsorvível', desc: 'Inerte, resistente, sem capilaridade. Padrão universal para pele externa.' },
  { id: 'vicryl', name: 'Poliglactina 910 (Vicryl)', type: 'Multifilamentar Trançado Absorvível', desc: 'Macio e maleável, mas tem capilaridade bacteriana. Proibido em vísceras ocas infectadas.' },
  { id: 'monocryl', name: 'Poliglecaprona 25 (Monocryl)', type: 'Monofilamentar Absorvível Rápido', desc: 'Excelente elasticidade e passagem atraumática. Padrão para pele de aves e intradérmico.' },
  { id: 'catgut', name: 'Categute Cromado', type: 'Origem Biológica Absorvível Rápido', desc: 'Degradação enzimática imprevisível (7-14 dias). Alta reação inflamatória.' }
];

const NEEDLE_TYPES = [
  { id: 'taper', name: 'Agulha Cilíndrica Atraumática', desc: 'Penetra divulsionando as fibras teciduais sem cortar. Obrigatória em alça intestinal, bexiga e vasos.' },
  { id: 'cutting', name: 'Agulha Triangular Cortante', desc: 'Possui aresta afiada que corta o tecido fibroso denso. Indicada para pele resistente e tendões.' }
];

const SUTURE_PATTERNS = [
  { id: 'simple_interrupted', name: 'Ponto Simples Separado', category: 'Aposicional', desc: 'Versátil, seguro e anatômico. Se um ponto romper, os demais sustentam a ferida.' },
  { id: 'cushing', name: 'Padrão de Cushing Contínuo', category: 'Invaginante', desc: 'Invaginante seromuscular hermético para estômago, bexiga e útero. PROIBIDO NA PELE.' },
  { id: 'lembert', name: 'Padrão de Lembert', category: 'Invaginante', desc: 'Invaginante perpendicular para fechamento de vísceras ocas ou segunda camada.' },
  { id: 'wolff', name: 'Ponto em U Horizontal (Wolff)', category: 'Aposicional / Tensão', desc: 'Excelente para suporte de tensão mecânica moderada em tecidos densos.' },
  { id: 'intradermal', name: 'Sutura Intradérmica Contínua', category: 'Aposicional Dérmico', desc: 'Feita inteiramente na derme sem pontos externos aparentes. Ótimo pós-operatório.' }
];

interface SurgicalCenterBenchProps {
  config?: any;
  onObjectiveAchieved: () => void;
  isCompleted?: boolean;
  onOpenTutor?: (question?: string) => void;
}

export const SurgicalCenterBench: React.FC<SurgicalCenterBenchProps> = ({
  onObjectiveAchieved,
  isCompleted = false,
  onOpenTutor,
}) => {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState<number>(0);
  const [activeConsole, setActiveConsole] = useState<'suture' | 'anesthesia'>('suture');

  // Estado do Console Cirúrgico (Sutura)
  const [selectedSutureId, setSelectedSutureId] = useState<string>('pds');
  const [selectedNeedleId, setSelectedNeedleId] = useState<string>('taper');
  const [selectedPatternId, setSelectedPatternId] = useState<string>('simple_interrupted');
  const [placedPoints, setPlacedPoints] = useState<number>(0);
  const [sutureFeedback, setSutureFeedback] = useState<string | null>(null);
  const [isTissueClosed, setIsTissueClosed] = useState<boolean>(false);

  // Estado do Console Anestésico (Capnografia)
  const [isSodaLimeFresh, setIsSodaLimeFresh] = useState<boolean>(false);
  const [bronchodilatorGiven, setBronchodilatorGiven] = useState<boolean>(false);
  const [ippvPressure, setIppvPressure] = useState<number>(SURGICAL_CASES[0].anesthesiaField.initialPeakPressure);
  const [anesthesiaFeedback, setAnesthesiaFeedback] = useState<string | null>(null);
  const [anesthesiaResolved, setAnesthesiaResolved] = useState<boolean>(false);

  // Controle de sucesso global
  const [casesSuccess, setCasesSuccess] = useState<Record<string, boolean>>({});
  const [hasAchievedSuccess, setHasAchievedSuccess] = useState<boolean>(isCompleted);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const currentCase = SURGICAL_CASES[selectedCaseIdx];

  // Sincronizar estado ao mudar de caso
  useEffect(() => {
    setPlacedPoints(0);
    setIsTissueClosed(false);
    setSutureFeedback(null);
    setIsSodaLimeFresh(currentCase.anesthesiaField.initialProblem !== 'rebreathing_soda_lime');
    setBronchodilatorGiven(currentCase.anesthesiaField.initialProblem !== 'shark_fin_bronchospasm');
    setIppvPressure(currentCase.anesthesiaField.initialPeakPressure);
    setAnesthesiaResolved(false);
    setAnesthesiaFeedback(null);
  }, [selectedCaseIdx]);

  // Animação da curva de capnografia no Canvas
  useEffect(() => {
    let animationFrameId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const renderCapnogram = () => {
      time += 0.05;
      const width = canvas.width;
      const height = canvas.height;

      // Fundo preto hospitalar
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, width, height);

      // Grade milimétrica discreta
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 25) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Linha guia de 40 mmHg
      const y40 = height - (40 / 60) * (height - 30) - 20;
      ctx.strokeStyle = '#334155';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, y40);
      ctx.lineTo(width, y40);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#64748b';
      ctx.font = '10px monospace';
      ctx.fillText('40 mmHg', 5, y40 - 4);

      // Desenhar curva contínua de CO2
      ctx.strokeStyle = '#10b981'; // Verde capnógrafo
      ctx.lineWidth = 2.5;
      ctx.beginPath();

      const inCO2Val = isSodaLimeFresh ? 0 : currentCase.anesthesiaField.baselineInCO2;
      const isSharkFin = !bronchodilatorGiven && currentCase.anesthesiaField.initialProblem === 'shark_fin_bronchospasm';

      for (let x = 0; x < width; x += 2) {
        // Ciclo respiratório em segundos
        const period = 120; // pixels por respiração
        const phaseInCycle = (x + time * 60) % period;
        let co2MmHg = 0;

        if (phaseInCycle < 35) {
          // Fase I: Inspiração (InCO2)
          co2MmHg = inCO2Val;
        } else if (phaseInCycle < 55) {
          // Fase II: Subida rápida expiratória
          const progress = (phaseInCycle - 35) / 20;
          if (isSharkFin) {
            // Subida lenta em rampa sem platô
            co2MmHg = inCO2Val + progress * progress * 48;
          } else {
            co2MmHg = inCO2Val + progress * 36;
          }
        } else if (phaseInCycle < 95) {
          // Fase III: Platô alveolar
          const progress = (phaseInCycle - 55) / 40;
          if (isSharkFin) {
            co2MmHg = inCO2Val + 35 + progress * 17; // Sobe até 52
          } else {
            co2MmHg = inCO2Val + 36 + progress * 4; // Platô suave
          }
        } else {
          // Fase IV: Descida inspiratória
          const progress = (phaseInCycle - 95) / 25;
          co2MmHg = Math.max(inCO2Val, inCO2Val + (40 * (1 - progress)));
        }

        // Mapear mmHg para Y no canvas
        const y = height - (co2MmHg / 60) * (height - 30) - 20;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(renderCapnogram);
    };

    renderCapnogram();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isSodaLimeFresh, bronchodilatorGiven, ippvPressure, currentCase]);

  // Ação de passar ponto na bancada de sutura
  const handlePlacePoint = () => {
    soundManager.playClick();
    const nextPoints = placedPoints + 1;
    setPlacedPoints(nextPoints);

    if (nextPoints >= currentCase.surgicalField.pointsNeeded) {
      validateSutureSynthesis();
    }
  };

  const validateSutureSynthesis = () => {
    const isSutureOk = selectedSutureId === currentCase.surgicalField.correctSutureId;
    const isNeedleOk = selectedNeedleId === currentCase.surgicalField.correctNeedleId;
    const isPatternOk = selectedPatternId === currentCase.surgicalField.correctPatternId;

    if (isSutureOk && isNeedleOk && isPatternOk) {
      soundManager.playSuccess();
      setIsTissueClosed(true);
      setSutureFeedback(`Síntese tecidual impecável! Fio ${SUTURE_MATERIALS.find(s=>s.id===selectedSutureId)?.name} com agulha atraumática e padrão aposicional com tensão uniforme de Halsted.`);
      checkOverallCaseCompletion(true, anesthesiaResolved);
    } else {
      soundManager.playError();
      setIsTissueClosed(false);
      let errorMsg = 'Falha nos princípios de síntese de Halsted: ';
      if (!isSutureOk) errorMsg += 'Biomaterial do fio inadequado para este tecido (risco de deiscência ou infecção); ';
      if (!isNeedleOk) errorMsg += 'Tipo de agulha causa corte iatrogênico nas bordas; ';
      if (!isPatternOk) errorMsg += 'Padrão de sutura incorreto para esta camada anatômica; ';
      setSutureFeedback(errorMsg);
    }
  };

  // Resolução Anestésica
  const handleSolveAnesthesiaProblem = () => {
    soundManager.playSuccess();
    if (currentCase.anesthesiaField.initialProblem === 'rebreathing_soda_lime') {
      setIsSodaLimeFresh(true);
      setAnesthesiaResolved(true);
      setAnesthesiaFeedback('Canister de cal sodada substituído com sucesso! InCO2 retornou a 0 mmHg e a reinalação foi interrompida.');
    } else if (currentCase.anesthesiaField.initialProblem === 'shark_fin_bronchospasm') {
      setBronchodilatorGiven(true);
      setAnesthesiaResolved(true);
      setAnesthesiaFeedback('Broncodilatador administrado e secreção aspirada! Platô alveolar Fase III horizontal restabelecido.');
    } else if (currentCase.anesthesiaField.initialProblem === 'high_peak_pressure_bird') {
      setIppvPressure(12);
      setAnesthesiaResolved(true);
      setAnesthesiaFeedback('Pressão inspiratória de pico reduzida para 12 cmH2O segura! Sacos aéreos protegidos contra barotrauma.');
    }
    checkOverallCaseCompletion(isTissueClosed, true);
  };

  const checkOverallCaseCompletion = (sutureOk: boolean, anesOk: boolean) => {
    if (sutureOk && anesOk) {
      const updatedCases = { ...casesSuccess, [currentCase.id]: true };
      setCasesSuccess(updatedCases);

      const allSolved = SURGICAL_CASES.every(c => updatedCases[c.id]);
      if (allSolved && !hasAchievedSuccess) {
        setHasAchievedSuccess(true);
        onObjectiveAchieved();
      }
    }
  };

  return (
    <div className="w-full bg-slate-950 border border-emerald-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col font-sans text-slate-100">
      {/* BARRA SUPERIOR DO CENTRO CIRÚRGICO */}
      <div className="bg-slate-900/90 border-b border-slate-800 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Scissors className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                Centro Cirúrgico & Anestesiologia Integrada
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                {currentCase.procedureTitle}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {currentCase.patientName} — {currentCase.species} ({currentCase.weightKg} kg)
            </h3>
          </div>
        </div>

        {/* NAVEGAÇÃO ENTRE PACIENTES & TUTOR */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
            {SURGICAL_CASES.map((c, idx) => {
              const isDone = casesSuccess[c.id];
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedCaseIdx(idx);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedCaseIdx === idx
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {c.species.split(' ')[0]}
                  {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />}
                </button>
              );
            })}
          </div>

          {onOpenTutor && (
            <button
              onClick={() => onOpenTutor(`Dra. Millena, no caso cirúrgico de ${currentCase.procedureTitle} em ${currentCase.species}, qual a combinação correta de fio, agulha e padrão de sutura, e como manejar a intercorrência anestésica observada?`)}
              className="px-3 py-2 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/40 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Dra. Millena</span>
            </button>
          )}
        </div>
      </div>

      {/* ABAS DO CONSOLE: CIRURGIÃO vs ANESTESISTA */}
      <div className="bg-slate-900/60 border-b border-slate-800 px-4 sm:px-6 py-2.5 flex items-center justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveConsole('suture')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
              activeConsole === 'suture'
                ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            <Scissors className="w-4 h-4" />
            <span>Console do Cirurgião (Bancada de Suturas)</span>
            {isTissueClosed && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />}
          </button>

          <button
            onClick={() => setActiveConsole('anesthesia')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
              activeConsole === 'anesthesia'
                ? 'bg-cyan-600 text-white border-cyan-400 shadow-md'
                : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            <Wind className="w-4 h-4" />
            <span>Console do Anestesista (Monitor de Capnografia)</span>
            {anesthesiaResolved && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" />}
          </button>
        </div>

        <span className="text-[11px] text-slate-400 hidden sm:inline font-mono">
          {activeConsole === 'suture' ? 'Camada: ' + currentCase.surgicalField.tissueName : 'Circuito Inalatória com Ventilador'}
        </span>
      </div>

      {/* CONTEÚDO PRINCIPAL DO CONSOLE SELECIONADO */}
      <div className="p-4 sm:p-6">
        {activeConsole === 'suture' ? (
          /* CONSOLE DO CIRURGIÃO */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* COLUNA ESQUERDA: INSTRUMENTAL & ESCOLHA DE BIOMATERIAIS */}
            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  Plano Tecidual Alvo
                </span>
                <h4 className="text-sm font-bold text-white">{currentCase.surgicalField.tissueName}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentCase.surgicalField.tissueDescription}
                </p>
              </div>

              {/* SELETOR DE FIOS */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                  1. Escolha o Fio Cirúrgico
                </span>
                <div className="space-y-1.5">
                  {SUTURE_MATERIALS.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSutureId(s.id)}
                      className={`w-full p-2.5 rounded-xl text-left text-xs transition-all cursor-pointer border ${
                        selectedSutureId === s.id
                          ? 'bg-emerald-950/80 border-emerald-500 text-white shadow-xs'
                          : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="font-bold">{s.name}</div>
                      <div className="text-[10px] text-slate-400">{s.type}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* SELETOR DE AGULHAS */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                  2. Geometria da Agulha
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {NEEDLE_TYPES.map((n) => (
                    <button
                      key={n.id}
                      onClick={() => setSelectedNeedleId(n.id)}
                      className={`p-2 rounded-xl text-left text-xs transition-all cursor-pointer border ${
                        selectedNeedleId === n.id
                          ? 'bg-emerald-950/80 border-emerald-500 text-white'
                          : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="font-bold text-[11px]">{n.name.split(' ')[1]}</div>
                      <div className="text-[10px] text-slate-400 line-clamp-1">{n.name}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* COLUNA CENTRAL E DIREITA: CAMPO OPERATÓRIO INTERATIVO & PADRÃO */}
            <div className="lg:col-span-2 space-y-4">
              {/* SELETOR DE PADRÃO DE SUTURA */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                  <span>3. Selecione o Padrão de Síntese de Halsted</span>
                  <span className="text-[10px] text-emerald-400 font-mono">
                    {SUTURE_PATTERNS.find(p=>p.id===selectedPatternId)?.category}
                  </span>
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SUTURE_PATTERNS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPatternId(p.id)}
                      className={`p-2.5 rounded-xl text-left text-xs transition-all cursor-pointer border ${
                        selectedPatternId === p.id
                          ? 'bg-emerald-600 text-white border-emerald-400 shadow-sm'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="font-bold text-[11px] leading-tight">{p.name}</div>
                      <div className="text-[10px] opacity-80 mt-0.5">{p.category}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* SIMULADOR VISUAL DA FERIDA & PONTOS */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col items-center justify-center space-y-6 min-h-[300px] relative overflow-hidden">
                <div className="w-full flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                  <span>Incisão Cirúrgica — {currentCase.surgicalField.tissueName}</span>
                  <span className="font-mono text-emerald-400">
                    Pontos aplicados: {placedPoints} / {currentCase.surgicalField.pointsNeeded}
                  </span>
                </div>

                {/* REPRESENTAÇÃO VISUAL DA FERIDA */}
                <div className="relative w-full max-w-md h-40 bg-rose-950/40 border-2 border-dashed border-rose-800/60 rounded-2xl flex items-center justify-center overflow-hidden shadow-inner">
                  {/* Linha central de incisão */}
                  <div className={`absolute top-0 bottom-0 w-1 transition-all ${
                    isTissueClosed ? 'bg-emerald-400 shadow-md shadow-emerald-400/50' : 'bg-rose-600/80'
                  }`} />

                  {/* Pontos colocados na ferida */}
                  <div className="absolute inset-0 flex flex-col justify-around py-4 items-center">
                    {Array.from({ length: currentCase.surgicalField.pointsNeeded }).map((_, idx) => {
                      const isPlaced = idx < placedPoints;
                      return (
                        <div key={idx} className="w-3/4 flex items-center justify-between relative">
                          <div className={`w-3 h-3 rounded-full border-2 transition-all ${
                            isPlaced ? 'bg-emerald-500 border-white scale-110 shadow-sm' : 'bg-slate-900 border-slate-700'
                          }`} />
                          {isPlaced && (
                            <div className="h-0.5 bg-emerald-400 flex-1 mx-2 relative flex items-center justify-center">
                              <span className="w-2 h-2 rounded-full bg-emerald-300" />
                            </div>
                          )}
                          <div className={`w-3 h-3 rounded-full border-2 transition-all ${
                            isPlaced ? 'bg-emerald-500 border-white scale-110 shadow-sm' : 'bg-slate-900 border-slate-700'
                          }`} />
                        </div>
                      );
                    })}
                  </div>

                  {!isTissueClosed && (
                    <span className="text-xs text-rose-300 font-bold bg-rose-950/80 px-3 py-1 rounded-full border border-rose-700/50 backdrop-blur-xs z-10">
                      Bordas Afastadas • Tensão Aberta
                    </span>
                  )}

                  {isTissueClosed && (
                    <span className="text-xs text-emerald-300 font-bold bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-500/50 backdrop-blur-xs z-10 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Aposição Anatômica Perfeita
                    </span>
                  )}
                </div>

                {/* AÇÕES DE SÍNTESE */}
                <div className="flex flex-wrap items-center justify-center gap-3 w-full">
                  <button
                    onClick={handlePlacePoint}
                    disabled={isTissueClosed}
                    className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                      isTissueClosed
                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                        : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30'
                    }`}
                  >
                    <Scissors className="w-4 h-4" />
                    <span>Passar Ponto Cirúrgico ({placedPoints}/{currentCase.surgicalField.pointsNeeded})</span>
                  </button>

                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setPlacedPoints(0);
                      setIsTissueClosed(false);
                      setSutureFeedback(null);
                    }}
                    className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold text-xs transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reiniciar Sutura</span>
                  </button>
                </div>

                {/* FEEDBACK CROMÁTICO DA SÍNTESE */}
                {sutureFeedback && (
                  <div className={`w-full p-4 rounded-xl border text-xs leading-relaxed ${
                    isTissueClosed
                      ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200'
                      : 'bg-rose-950/80 border-rose-500 text-rose-200'
                  }`}>
                    <p className="font-semibold">{sutureFeedback}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* CONSOLE DO ANESTESISTA (CAPNOGRAFIA) */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* OSCILOSCÓPIO CAPNOGRÁFICO */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <Wind className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Capnógrafo em Tempo Real (Curva de EtCO2 & InCO2)
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">Varredura: 12.5 mm/s</span>
                </div>

                {/* TELA DO OSCILOSCÓPIO */}
                <canvas
                  ref={canvasRef}
                  width={600}
                  height={220}
                  className="w-full h-56 rounded-2xl border border-slate-800 shadow-inner bg-slate-950"
                />

                <div className="grid grid-cols-3 gap-3 pt-1">
                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 block font-bold uppercase">EtCO2 Expiratório</span>
                    <span className="text-xl font-black font-mono text-emerald-400">
                      {isSodaLimeFresh && bronchodilatorGiven ? 38 : currentCase.anesthesiaField.baselineEtCO2} <small className="text-xs text-slate-500">mmHg</small>
                    </span>
                  </div>
                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 block font-bold uppercase">InCO2 (Reinalação)</span>
                    <span className={`text-xl font-black font-mono ${
                      (isSodaLimeFresh ? 0 : currentCase.anesthesiaField.baselineInCO2) > 3 ? 'text-rose-400 animate-pulse' : 'text-emerald-400'
                    }`}>
                      {isSodaLimeFresh ? 0 : currentCase.anesthesiaField.baselineInCO2} <small className="text-xs text-slate-500">mmHg</small>
                    </span>
                  </div>
                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 block font-bold uppercase">Pressão de Pico IPPV</span>
                    <span className={`text-xl font-black font-mono ${
                      ippvPressure > 15 && currentCase.species.includes('Ave') ? 'text-rose-400 animate-pulse' : 'text-cyan-400'
                    }`}>
                      {ippvPressure} <small className="text-xs text-slate-500">cmH2O</small>
                    </span>
                  </div>
                </div>
              </div>

              {/* PAINEL DE CONTROLES DO ANESTESISTA */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                  Ações de Intervenção Anestésica Transoperatória
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => {
                      if (currentCase.anesthesiaField.initialProblem === 'rebreathing_soda_lime') {
                        handleSolveAnesthesiaProblem();
                      } else {
                        soundManager.playError();
                        setAnesthesiaFeedback('A cal sodada não é a causa desta alteração gráfica.');
                      }
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                      isSodaLimeFresh
                        ? 'bg-slate-950 border-slate-800 text-slate-500 cursor-default'
                        : 'bg-purple-950/80 hover:bg-purple-900/90 border-purple-500/50 text-purple-200'
                    }`}
                  >
                    <div className="font-bold text-xs flex items-center gap-1.5">
                      <Droplets className="w-3.5 h-3.5 text-purple-400" />
                      <span>Trocar Cal Sodada</span>
                    </div>
                    <span className="text-[10px] text-slate-400">
                      {isSodaLimeFresh ? 'Canister ativo (Branco)' : 'Canister Exausto (Violeta)'}
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      if (currentCase.anesthesiaField.initialProblem === 'shark_fin_bronchospasm') {
                        handleSolveAnesthesiaProblem();
                      } else {
                        soundManager.playError();
                        setAnesthesiaFeedback('O paciente não apresenta broncoespasmo no momento.');
                      }
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                      bronchodilatorGiven
                        ? 'bg-slate-950 border-slate-800 text-slate-500 cursor-default'
                        : 'bg-amber-950/80 hover:bg-amber-900/90 border-amber-500/50 text-amber-200'
                    }`}
                  >
                    <div className="font-bold text-xs flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-amber-400" />
                      <span>Broncodilatador / Aspirar Tubo</span>
                    </div>
                    <span className="text-[10px] text-slate-400">
                      Reverter formato de barbatana
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      if (currentCase.anesthesiaField.initialProblem === 'high_peak_pressure_bird') {
                        handleSolveAnesthesiaProblem();
                      } else {
                        soundManager.playError();
                        setAnesthesiaFeedback('A pressão de ventilação está adequada para mamíferos.');
                      }
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                      ippvPressure <= 15
                        ? 'bg-slate-950 border-slate-800 text-slate-500 cursor-default'
                        : 'bg-rose-950/80 hover:bg-rose-900/90 border-rose-500/50 text-rose-200'
                    }`}
                  >
                    <div className="font-bold text-xs flex items-center gap-1.5">
                      <Gauge className="w-3.5 h-3.5 text-rose-400" />
                      <span>Limitar IPPV &lt; 15 cmH2O</span>
                    </div>
                    <span className="text-[10px] text-slate-400">
                      Evitar barotrauma em sacos aéreos
                    </span>
                  </button>
                </div>

                {anesthesiaFeedback && (
                  <div className={`p-3.5 rounded-xl border text-xs ${
                    anesthesiaResolved
                      ? 'bg-cyan-950/80 border-cyan-500 text-cyan-200'
                      : 'bg-rose-950/80 border-rose-500 text-rose-200'
                  }`}>
                    {anesthesiaFeedback}
                  </div>
                )}
              </div>
            </div>

            {/* COLUNA DIREITA: DIAGNÓSTICO DO CENÁRIO ANESTÉSICO */}
            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Alerta Anestésico Crítico
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {currentCase.anesthesiaField.problemDescription}
                </p>
                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                  <div>Vaporizador Isoflurano: <strong className="text-slate-200">{currentCase.anesthesiaField.initialVaporizerPercent}%</strong></div>
                  <div>Fluxo de Oxigênio (FGF): <strong className="text-slate-200">{currentCase.anesthesiaField.initialFgFlowLmin} L/min</strong></div>
                  <div>Status do Paciente: <strong className="text-emerald-400">Sob Monitorização Contínua</strong></div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Critérios de Alta Cirúrgica do Caso
                </span>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center gap-2">
                    {isTissueClosed ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <XCircle className="w-4 h-4 text-slate-600" />}
                    <span className={isTissueClosed ? 'text-emerald-300 font-semibold' : 'text-slate-400'}>
                      Síntese Tecidual Concluída
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {anesthesiaResolved ? <CheckCircle2 className="w-4 h-4 text-cyan-400" /> : <XCircle className="w-4 h-4 text-slate-600" />}
                    <span className={anesthesiaResolved ? 'text-cyan-300 font-semibold' : 'text-slate-400'}>
                      Equilíbrio de Capnografia Estabilizado
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
