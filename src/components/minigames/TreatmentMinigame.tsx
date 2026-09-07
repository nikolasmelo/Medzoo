import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Syringe,
  Bandage,
  Pill,
  CheckCircle2,
  X,
  AlertTriangle,
  Activity,
  Target,
  Scissors,
  Wrench,
  FlaskConical,
} from 'lucide-react';
import type { CaseData, TreatmentOption } from '../../types';
import { soundManager } from '../../utils/sound';
import {
  type SurgicalPhase,
  type SurgicalInstrument,
  type Point2D,
  type PrecisionMetrics,
  type VitalsParameters,
  createInitialVitals,
  updateVitals,
  computeSurgicalScore,
  generateSplinePath,
} from '../../utils/physiologyEngine';import { BoneDrillMinigame } from './surgeries/BoneDrillMinigame';
import { EndoscopyMinigame } from './surgeries/EndoscopyMinigame';
import { SoftTissueIncisionMinigame } from './surgeries/SoftTissueIncisionMinigame';
import { SutureTensionMinigame } from './surgeries/SutureTensionMinigame';
import { EpoxyResinMinigame } from './surgeries/EpoxyResinMinigame';
import { SyringeIrrigationMinigame } from './surgeries/SyringeIrrigationMinigame';
import { OrthopedicPinsMinigame } from './surgeries/OrthopedicPinsMinigame';
import { PharmacologyMinigame } from './PharmacologyMinigame';
// ─────────────────────────────────────────────────────────────────────────────
// § TYPES
// ─────────────────────────────────────────────────────────────────────────────

interface TreatmentMinigameProps {
  caseData: CaseData;
  onComplete: (appliedProcedures: string[]) => void;
  onClose: () => void;
}

interface IncisionPath {
  id: string;
  rawPoints: Point2D[];
  smoothPath: Point2D[];
  isComplete: boolean;
  accuracy: number;
}

interface FSMTransition {
  from: SurgicalPhase;
  to: SurgicalPhase;
  label: string;
  requiredInstrument?: SurgicalInstrument;
  requiredAction?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// § CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────

const PHASE_CONFIG: Record<
  SurgicalPhase,
  {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    bgGradient: string;
  }
> = {
  PRE_OP_ASSESSMENT: {
    title: 'Avaliação Pré-Operatória',
    description: 'Avalie sinais vitais e confirme a conduta cirúrgica.',
    icon: <Activity className="w-5 h-5" />,
    color: 'text-blue-400',
    bgGradient: 'from-blue-950/40 to-slate-900/60',
  },
  ANESTHESIA_INDUCTION: {
    title: 'Indução Anestésica',
    description:
      'Administre anestesia geral com monitoração contínua dos sinais vitais.',
    icon: <Syringe className="w-5 h-5" />,
    color: 'text-purple-400',
    bgGradient: 'from-purple-950/40 to-slate-900/60',
  },
  SURGICAL_INCISION: {
    title: 'Incisão Cirúrgica',
    description:
      'Realize a incisão seguindo o traçado anatômico. Mantenha a linha contínua e precisa.',
    icon: <Scissors className="w-5 h-5" />,
    color: 'text-rose-400',
    bgGradient: 'from-rose-950/40 to-slate-900/60',
  },
  FRACTURE_REDUCTION: {
    title: 'Redução da Fratura',
    description:
      'Alinhe os fragmentos ósseos utilizando fórceps e tração controlada.',
    icon: <Wrench className="w-5 h-5" />,
    color: 'text-amber-400',
    bgGradient: 'from-amber-950/40 to-slate-900/60',
  },
  OSTEOSYNTHESIS: {
    title: 'Osteossíntese',
    description:
      'Fixe a fratura com o implante ortopédico adequado (pino, placa LCP ou cerclagem).',
    icon: <Target className="w-5 h-5" />,
    color: 'text-cyan-400',
    bgGradient: 'from-cyan-950/40 to-slate-900/60',
  },
  WOUND_CLOSURE: {
    title: 'Síntese Tecidual',
    description:
      'Realize a sutura cirúrgica seguindo o traçado indicado. Pontos equidistantes.',
    icon: <Bandage className="w-5 h-5" />,
    color: 'text-teal-400',
    bgGradient: 'from-teal-950/40 to-slate-900/60',
  },
  ENDOSCOPY: {
    title: 'Endoscopia Intervencionista',
    description:
      'Utilize o endoscópio para localizar e extrair corpos estranhos ou inspecionar cavidades internas.',
    icon: <Target className="w-5 h-5" />,
    color: 'text-indigo-400',
    bgGradient: 'from-indigo-950/40 to-slate-900/60',
  },
  POST_OP_RECOVERY: {
    title: 'Recuperação Pós-Operatória',
    description:
      'Monitorize a recuperação anestésica e prescreva a terapia pós-operatória.',
    icon: <Pill className="w-5 h-5" />,
    color: 'text-emerald-400',
    bgGradient: 'from-emerald-950/40 to-slate-900/60',
  },
};

const FSM_TRANSITIONS: FSMTransition[] = [
  { from: 'PRE_OP_ASSESSMENT', to: 'ANESTHESIA_INDUCTION', label: 'Iniciar Anestesia' },
  { from: 'ANESTHESIA_INDUCTION', to: 'SURGICAL_INCISION', label: 'Iniciar Procedimento Cirúrgico', requiredInstrument: 'scalpel' },
  { from: 'SURGICAL_INCISION', to: 'FRACTURE_REDUCTION', label: 'Reduzir Fratura', requiredInstrument: 'forceps' },
  { from: 'FRACTURE_REDUCTION', to: 'OSTEOSYNTHESIS', label: 'Fixar Implante' },
  { from: 'OSTEOSYNTHESIS', to: 'WOUND_CLOSURE', label: 'Suturar', requiredInstrument: 'suture_needle' },
  { from: 'WOUND_CLOSURE', to: 'POST_OP_RECOVERY', label: 'Finalizar Cirurgia' },
];

const INSTRUMENT_INFO: Record<SurgicalInstrument, { label: string; icon: React.ReactNode }> = {
  scalpel: { label: 'Bisturi nº 4', icon: <Scissors className="w-4 h-4" /> },
  forceps: { label: 'Fórceps de Redução', icon: <Wrench className="w-4 h-4" /> },
  bone_drill: { label: 'Perfurador Ósseo', icon: <Target className="w-4 h-4" /> },
  suture_needle: { label: 'Porta-agulha Mayo-Hegar', icon: <Bandage className="w-4 h-4" /> },
  irrigation_syringe: { label: 'Seringa de Irrigação', icon: <Syringe className="w-4 h-4" /> },
  epoxy_applicator: { label: 'Aplicador de Resina Epóxi', icon: <Target className="w-4 h-4" /> },
  steinmann_pin: { label: 'Pino de Steinmann', icon: <Target className="w-4 h-4" /> },
  lcp_plate: { label: 'Placa LCP', icon: <Wrench className="w-4 h-4" /> },
  cerclage_wire: { label: 'Fio de Cerclagem', icon: <Wrench className="w-4 h-4" /> },
  endoscope: { label: 'Endoscópio Rígido', icon: <Target className="w-4 h-4" /> },
};

// ─────────────────────────────────────────────────────────────────────────────
// § IATROGENIC DAMAGE CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────

const IATROGENIC_DAMAGE_WRONG_TOOL = 15;  // Damage dealt when using wrong instrument
const IATROGENIC_STRESS_WRONG_TOOL = 12;  // Stress added when using wrong instrument
const IATROGENIC_BP_DROP = 8;             // Blood pressure drop per wrong tool use

const INCISION_CANVAS_W = 700;
const INCISION_CANVAS_H = 400;

// ─────────────────────────────────────────────────────────────────────────────
// § INCISION ACCURACY CALCULATOR
// Computes RMSE between player's incision path and the target guideline.
// ─────────────────────────────────────────────────────────────────────────────

function computeIncisionAccuracy(
  playerPath: Point2D[],
  targetPath: Point2D[]
): number {
  if (playerPath.length < 2 || targetPath.length < 2) return 0;

  let sumSquaredDist = 0;
  let count = 0;

  for (const pp of playerPath) {
    // Find nearest point on target path
    let minDist = Infinity;
    for (const tp of targetPath) {
      const d = Math.hypot(pp.x - tp.x, pp.y - tp.y);
      if (d < minDist) minDist = d;
    }
    sumSquaredDist += minDist * minDist;
    count++;
  }

  const rmse = Math.sqrt(sumSquaredDist / count);
  // Normalize: 0px deviation = 1.0 accuracy, 50px+ deviation = 0.0
  return Math.max(0, Math.min(1, 1.0 - rmse / 50));
}

/**
 * Generate a target incision guideline path for a given canvas area.
 * The path follows a gentle S-curve that a surgeon would trace.
 */
function generateTargetIncisionPath(): Point2D[] {
  const controlPoints: Point2D[] = [
    { x: 120, y: 200 },
    { x: 220, y: 160 },
    { x: 350, y: 220 },
    { x: 480, y: 180 },
    { x: 580, y: 200 },
  ];
  return generateSplinePath(controlPoints, 20);
}

/**
 * Generate a target suture path (more zig-zag to simulate stitches).
 */
function generateTargetSuturePath(): Point2D[] {
  const controlPoints: Point2D[] = [
    { x: 140, y: 200 },
    { x: 200, y: 170 },
    { x: 260, y: 230 },
    { x: 320, y: 170 },
    { x: 380, y: 230 },
    { x: 440, y: 170 },
    { x: 500, y: 230 },
    { x: 560, y: 200 },
  ];
  return generateSplinePath(controlPoints, 15);
}

// ─────────────────────────────────────────────────────────────────────────────
// § COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export const TreatmentMinigame: React.FC<TreatmentMinigameProps> = ({
  caseData,
  onComplete,
  onClose,
}) => {
  // ── FSM State ──
  const [currentPhase, setCurrentPhase] = useState<SurgicalPhase>('PRE_OP_ASSESSMENT');
  const [phaseHistory, setPhaseHistory] = useState<SurgicalPhase[]>(['PRE_OP_ASSESSMENT']);
  const [activeInstrument, setActiveInstrument] = useState<SurgicalInstrument | null>(null);
  
  // ── Instrument Sequence Tracking ──
  // Tracks which index the player is at in the requiredInstruments sequence
  const [instrumentStepIndex, setInstrumentStepIndex] = useState(0);
  const [iatrogenicWarning, setIatrogenicWarning] = useState<string | null>(null);
  
  // Specialized Minigame State
  const [activeSpecializedMinigame, setActiveSpecializedMinigame] = useState<'resin' | 'drill' | 'incision' | 'suture' | 'pharmacology' | 'endoscopy' | 'irrigation' | 'pins' | null>(null);
  
  // Real-time bleeding link
  const bleedingRateRef = useRef<number>(0);


  // ── Vitals & Physiology ──
  const speciesId = (caseData.scientificName.toLowerCase().replace(' ', '_') || 'hydrochoerus_hydrochaeris');
  const [vitals, setVitals] = useState<VitalsParameters>(() =>
    createInitialVitals(speciesId as any)
  );
  const [anesthesiaDepth, setAnesthesiaDepth] = useState(0);
  const [stressLevel, setStressLevel] = useState(0);
  const lastVitalsUpdateRef = useRef<number>(Date.now());

  // ── Incision Canvas State ──
  const incisionCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentIncision, setCurrentIncision] = useState<IncisionPath | null>(null);
  const [completedIncisions, setCompletedIncisions] = useState<IncisionPath[]>([]);
  const rawPointsRef = useRef<Point2D[]>([]);

  // ── Metrics ──
  const [metrics, setMetrics] = useState<PrecisionMetrics>({
    incisionAccuracy: 0,
    stressAccumulated: 0,
    timeElapsed: 0,
    iatrogenicDamage: 0,
    proceduresCompleted: [],
  });
  const startTimeRef = useRef<number>(Date.now());

  // ── Classic treatment options (fallback for non-surgical cases) ──
  const [appliedProcedures, setAppliedProcedures] = useState<string[]>([]);
  const [activeTool, setActiveTool] = useState<TreatmentOption | null>(null);

  // ── Target paths ──
  const [targetIncisionPath] = useState<Point2D[]>(() => generateTargetIncisionPath());
  const [targetSuturePath] = useState<Point2D[]>(() => generateTargetSuturePath());

  const treatments = caseData.treatmentOptions || [];

  // Determine if this case supports the full surgical FSM
  // (only surgical cases with specific treatment types)
  const isSurgicalCase = caseData.treatmentSequence && caseData.treatmentSequence.length > 0;
  const [hasStartedSurgery, setHasStartedSurgery] = useState(false);

  // ── Vitals Simulation Loop (runs every 500ms) ──
  useEffect(() => {
    if (!hasStartedSurgery) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const dt = (now - lastVitalsUpdateRef.current) / 1000;
      lastVitalsUpdateRef.current = now;

      setVitals((prev) => {
        const handling =
          currentPhase === 'SURGICAL_INCISION' || currentPhase === 'FRACTURE_REDUCTION'
            ? 0.7
            : currentPhase === 'OSTEOSYNTHESIS'
            ? 0.5
            : 0.2;
        const pain =
          currentPhase === 'SURGICAL_INCISION'
            ? 0.6 * (1 - anesthesiaDepth)
            : currentPhase === 'FRACTURE_REDUCTION'
            ? 0.8 * (1 - anesthesiaDepth)
            : 0.1;

        const newVitals = updateVitals(prev, dt, {
          handling,
          painLevel: pain,
          anesthesiaDepth,
          activeHemorrhage: bleedingRateRef.current
        });

        // If fatal, we stop the simulation
        if (!newVitals.isAlive) {
           clearInterval(interval);
        }
        return newVitals;
      });

      setStressLevel((prev) => Math.min(100, prev + 0.3));
      setMetrics((prev) => ({
        ...prev,
        timeElapsed: (Date.now() - startTimeRef.current) / 1000,
        stressAccumulated: prev.stressAccumulated + 0.1,
      }));
    }, 500);

    return () => clearInterval(interval);
  }, [currentPhase, anesthesiaDepth, isSurgicalCase]);

  // ── FSM Phase Transition ──
  const transitionPhase = useCallback(
    (targetPhase: SurgicalPhase) => {
      const transition = FSM_TRANSITIONS.find(
        (t) => t.from === currentPhase && t.to === targetPhase
      );
      if (!transition) return;

      // Validate required instrument from static FSM
      if (transition.requiredInstrument && activeInstrument !== transition.requiredInstrument) {
        soundManager.playError();
        return;
      }

      soundManager.playSuccess();
      setCurrentPhase(targetPhase);
      setPhaseHistory((prev) => [...prev, targetPhase]);
      setMetrics((prev) => ({
        ...prev,
        proceduresCompleted: [...prev.proceduresCompleted, targetPhase],
      }));

      // Phase-specific initialization
      if (targetPhase === 'ANESTHESIA_INDUCTION') {
        setAnesthesiaDepth(0.3);
      }
    },
    [currentPhase, activeInstrument]
  );

  // ── Iatrogenic Instrument Validation ──
  // When the player selects an instrument, check if it matches the next
  // required instrument in the case's sequence. Wrong choice = damage.
  const handleInstrumentSelect = useCallback(
    (inst: SurgicalInstrument) => {
      const sequence = caseData.treatmentSequence;
      
      // If no sequence defined, allow free selection (legacy behavior)
      if (!sequence || sequence.length === 0) {
        setActiveInstrument(inst);
        setIatrogenicWarning(null);
        soundManager.playClick();
        return;
      }

      // If player already completed the sequence, allow free selection
      if (instrumentStepIndex >= sequence.length) {
        setActiveInstrument(inst);
        setIatrogenicWarning(null);
        soundManager.playClick();
        return;
      }

      const expectedStep = sequence[instrumentStepIndex];

      if (inst === expectedStep.tool) {
        // ✓ Correct instrument in sequence
        setActiveInstrument(inst);
        setIatrogenicWarning(null);
        soundManager.playSuccess();
        
        // Trigger the assigned minigame
        if (expectedStep.minigame === 'BoneDrillMinigame') setActiveSpecializedMinigame('drill');
        else if (expectedStep.minigame === 'EndoscopyMinigame') setActiveSpecializedMinigame('endoscopy');
        else if (expectedStep.minigame === 'IncisionMinigame') setActiveSpecializedMinigame('incision');
        else if (expectedStep.minigame === 'SutureMinigame') setActiveSpecializedMinigame('suture');
        else if (expectedStep.minigame === 'EpoxyResinMinigame') setActiveSpecializedMinigame('resin');
        else if (expectedStep.minigame === 'SyringeIrrigationMinigame') setActiveSpecializedMinigame('irrigation');
        else if (expectedStep.minigame === 'OrthopedicPinsMinigame') setActiveSpecializedMinigame('pins');
        
        // Only increment the index if it's not a minigame, otherwise the minigame complete handler will increment it
        if (expectedStep.minigame === 'None') {
            setInstrumentStepIndex((prev) => prev + 1);
        }

      } else {
        // ✗ WRONG INSTRUMENT — Apply iatrogenic damage!
        soundManager.playError();
        
        const warningMsg = `DANO IATROGÊNICO! ${INSTRUMENT_INFO[inst]?.label || inst} é inadequado nesta etapa. O paciente sofreu lesão.`;
        setIatrogenicWarning(warningMsg);
        
        // Apply damage to metrics
        setMetrics((prev) => ({
          ...prev,
          iatrogenicDamage: prev.iatrogenicDamage + IATROGENIC_DAMAGE_WRONG_TOOL,
        }));
        
        // Apply damage to vitals
        setVitals((prev) => ({
          ...prev,
          bloodPressureSystolic: Math.max(0, prev.bloodPressureSystolic - IATROGENIC_BP_DROP),
          stressIntegral: prev.stressIntegral + IATROGENIC_STRESS_WRONG_TOOL,
          heartRate: Math.min(350, prev.heartRate + 15),
        }));
        
        setStressLevel((prev) => Math.min(100, prev + IATROGENIC_STRESS_WRONG_TOOL));
        
        // Do NOT set the instrument as active — force player to pick again
        setActiveInstrument(null);
        
        // Clear warning after 3 seconds
        setTimeout(() => setIatrogenicWarning(null), 3000);
      }
    },
    [caseData.treatmentSequence, instrumentStepIndex]
  );

  // ── Incision Canvas Rendering ──
  useEffect(() => {
    if (
      currentPhase !== 'SURGICAL_INCISION' &&
      currentPhase !== 'WOUND_CLOSURE'
    )
      return;

    const canvas = incisionCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const targetPath =
      currentPhase === 'SURGICAL_INCISION'
        ? targetIncisionPath
        : targetSuturePath;

    // Clear
    ctx.fillStyle = '#0a0f0d';
    ctx.fillRect(0, 0, INCISION_CANVAS_W, INCISION_CANVAS_H);

    // Draw tissue background gradient
    const tissueGrad = ctx.createLinearGradient(
      0, 0,
      INCISION_CANVAS_W, INCISION_CANVAS_H
    );
    tissueGrad.addColorStop(0, '#1a0a0a');
    tissueGrad.addColorStop(0.5, '#2a1515');
    tissueGrad.addColorStop(1, '#1a0a0a');
    ctx.fillStyle = tissueGrad;
    ctx.fillRect(0, 0, INCISION_CANVAS_W, INCISION_CANVAS_H);

    // Draw target guideline path (dashed green)
    if (targetPath.length > 1) {
      ctx.save();
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.35)';
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 6]);
      ctx.beginPath();
      ctx.moveTo(targetPath[0].x, targetPath[0].y);
      for (let i = 1; i < targetPath.length; i++) {
        ctx.lineTo(targetPath[i].x, targetPath[i].y);
      }
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Draw waypoint dots
      for (let i = 0; i < targetPath.length; i += 10) {
        ctx.beginPath();
        ctx.arc(targetPath[i].x, targetPath[i].y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(52, 211, 153, 0.5)';
        ctx.fill();
      }
    }

    // Draw completed incisions
    for (const incision of completedIncisions) {
      if (incision.smoothPath.length < 2) continue;
      ctx.save();
      ctx.strokeStyle = currentPhase === 'WOUND_CLOSURE'
        ? 'rgba(56, 189, 248, 0.7)'
        : 'rgba(239, 68, 68, 0.7)';
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(incision.smoothPath[0].x, incision.smoothPath[0].y);
      for (let i = 1; i < incision.smoothPath.length; i++) {
        ctx.lineTo(incision.smoothPath[i].x, incision.smoothPath[i].y);
      }
      ctx.stroke();
      ctx.restore();
    }

    // Draw current incision in progress
    if (currentIncision && currentIncision.smoothPath.length > 1) {
      ctx.save();
      ctx.strokeStyle = currentPhase === 'WOUND_CLOSURE'
        ? 'rgba(56, 189, 248, 0.9)'
        : 'rgba(239, 68, 68, 0.9)';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowColor = currentPhase === 'WOUND_CLOSURE' ? '#38bdf8' : '#ef4444';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(currentIncision.smoothPath[0].x, currentIncision.smoothPath[0].y);
      for (let i = 1; i < currentIncision.smoothPath.length; i++) {
        ctx.lineTo(currentIncision.smoothPath[i].x, currentIncision.smoothPath[i].y);
      }
      ctx.stroke();
      ctx.restore();
    }
  }, [currentPhase, currentIncision, completedIncisions, targetIncisionPath, targetSuturePath]);

  // ── Incision Drawing Handlers ──

  const handleIncisionPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (
      currentPhase !== 'SURGICAL_INCISION' &&
      currentPhase !== 'WOUND_CLOSURE'
    )
      return;

    const rect = e.currentTarget.getBoundingClientRect();
    const scaleX = INCISION_CANVAS_W / rect.width;
    const scaleY = INCISION_CANVAS_H / rect.height;
    const point: Point2D = {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };

    rawPointsRef.current = [point];
    setIsDrawing(true);
    setCurrentIncision({
      id: `incision_${Date.now()}`,
      rawPoints: [point],
      smoothPath: [point],
      isComplete: false,
      accuracy: 0,
    });

    soundManager.playSurgicalIncision(0.2);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handleIncisionPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const scaleX = INCISION_CANVAS_W / rect.width;
    const scaleY = INCISION_CANVAS_H / rect.height;
    const point: Point2D = {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };

    rawPointsRef.current.push(point);

    // Generate smooth path via Catmull-Rom spline every few points
    const rawPts = rawPointsRef.current;
    let smoothPath: Point2D[];
    if (rawPts.length >= 4) {
      // Downsample for spline control points
      const step = Math.max(1, Math.floor(rawPts.length / 30));
      const controlPts: Point2D[] = [];
      for (let i = 0; i < rawPts.length; i += step) {
        controlPts.push(rawPts[i]);
      }
      if (controlPts.length >= 4) {
        smoothPath = generateSplinePath(controlPts, 8);
      } else {
        smoothPath = [...rawPts];
      }
    } else {
      smoothPath = [...rawPts];
    }

    setCurrentIncision((prev) =>
      prev
        ? {
            ...prev,
            rawPoints: [...rawPts],
            smoothPath,
          }
        : null
    );

    // Depth-proportional audio feedback
    const depth = 0.3 + (rawPts.length / 200) * 0.7;
    if (rawPts.length % 8 === 0) {
      soundManager.playSurgicalIncision(Math.min(1, depth));
    }
  };

  const handleIncisionPointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !currentIncision) return;
    setIsDrawing(false);
    e.currentTarget.releasePointerCapture(e.pointerId);

    const targetPath =
      currentPhase === 'SURGICAL_INCISION'
        ? targetIncisionPath
        : targetSuturePath;

    const accuracy = computeIncisionAccuracy(
      currentIncision.smoothPath,
      targetPath
    );

    const completedIncision: IncisionPath = {
      ...currentIncision,
      isComplete: true,
      accuracy,
    };

    setCompletedIncisions((prev) => [...prev, completedIncision]);
    setCurrentIncision(null);
    rawPointsRef.current = [];

    // Update metrics
    setMetrics((prev) => ({
      ...prev,
      incisionAccuracy:
        (prev.incisionAccuracy * prev.proceduresCompleted.length + accuracy) /
        (prev.proceduresCompleted.length + 1),
      iatrogenicDamage:
        prev.iatrogenicDamage + (1 - accuracy) * 10,
    }));

    if (accuracy > 0.7) {
      soundManager.playSuccess();
    } else if (accuracy > 0.4) {
      soundManager.playClick();
    } else {
      soundManager.playError();
    }
  };

  // ── Classic Treatment Handlers (for non-surgical cases) ──

  const handleApplyTreatment = (treatment: TreatmentOption) => {
    if (appliedProcedures.includes(treatment.id)) return;
    
    const isSurgicalProcedure = treatment.type === 'surgery' || treatment.title.toLowerCase().includes('resina') || treatment.title.toLowerCase().includes('cirurg') || treatment.title.toLowerCase().includes('osteo') || treatment.title.toLowerCase().includes('imobil') || treatment.title.toLowerCase().includes('sutura');

    if (isSurgicalCase && isSurgicalProcedure) {
      if (!treatment.appropriate) {
        soundManager.playError();
        setVitals(prev => ({
           ...prev,
           bloodPressureSystolic: prev.bloodPressureSystolic - 15,
           stressIntegral: prev.stressIntegral + 20
        }));
        setAppliedProcedures((prev) => [...prev, treatment.id]);
        setActiveTool(null);
        return;
      }
      soundManager.playClick();
      setHasStartedSurgery(true);
      setAppliedProcedures((prev) => [...prev, treatment.id]);
      setActiveTool(null);
    } else {
      soundManager.playSuccess();
      setAppliedProcedures((prev) => [...prev, treatment.id]);
      setActiveTool(null);
    }
  };

  // ── Specialized Minigame Handlers ──
  const handleSpecializedMinigameComplete = (accuracy: number, damage: number) => {
    setActiveSpecializedMinigame(null);
    setInstrumentStepIndex((prev) => prev + 1);
    
    if (activeInstrument) {
        setMetrics((prev) => ({
           ...prev,
           proceduresCompleted: [...prev.proceduresCompleted, activeInstrument],
           incisionAccuracy: (prev.incisionAccuracy + accuracy) / 2, // Blend accuracy
           iatrogenicDamage: prev.iatrogenicDamage + damage
        }));
    }
    
    // Convert iatrogenic damage to systemic stress and pain
    setStressLevel(prev => Math.min(100, prev + (damage / 10)));
    setVitals(prev => ({
        ...prev,
        bloodPressureSystolic: prev.bloodPressureSystolic - (damage / 5),
        stressIntegral: prev.stressIntegral + (damage / 10)
    }));
    soundManager.playSuccess();
  };

  // ── Finish Handler ──

  const handleFinish = () => {
    if (isSurgicalCase) {
      const finalScore = computeSurgicalScore(
        metrics,
        (Date.now() - startTimeRef.current) / 1000
      );

      // Add all treatment IDs that were appropriate
      const appliedIds = treatments
        .filter((t) => t.appropriate)
        .map((t) => t.id);

      soundManager.playSuccess();
      onComplete([...appliedIds, `surgical_score:${finalScore.toFixed(1)}`]);
    } else {
      soundManager.playSuccess();
      onComplete(appliedProcedures);
    }
  };

  // ── Available transitions from current phase ──
  const availableTransitions = FSM_TRANSITIONS.filter(
    (t) => t.from === currentPhase
  );
  const phaseConfig = PHASE_CONFIG[currentPhase];
  const isPostOp = currentPhase === 'POST_OP_RECOVERY';

  // ── Surgical FSM Render ──
  if (hasStartedSurgery) {
    if (activeSpecializedMinigame === 'resin') {
       return (
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-[#0B1511]/95 backdrop-blur-xl flex items-center justify-center p-6">
            <div className="w-full max-w-4xl h-[600px]">
               <EpoxyResinMinigame 
                  onComplete={handleSpecializedMinigameComplete} 
                  onVitalsDrain={(dmg) => {
                     setVitals(prev => ({
                        ...prev,
                        bloodPressureSystolic: Math.max(0, prev.bloodPressureSystolic - dmg),
                        heartRate: Math.min(250, prev.heartRate + dmg * 2)
                     }));
                  }}
               />
            </div>
         </motion.div>
       );
    }
    
    if (activeSpecializedMinigame === 'irrigation') {
       return (
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-[#0B1511]/95 backdrop-blur-xl flex items-center justify-center p-6">
            <div className="w-full max-w-4xl h-[600px]">
               <SyringeIrrigationMinigame 
                  onComplete={handleSpecializedMinigameComplete} 
                  onVitalsDrain={(dmg) => {
                     setVitals(prev => ({
                        ...prev,
                        bloodPressureSystolic: Math.max(0, prev.bloodPressureSystolic - dmg),
                        heartRate: Math.min(250, prev.heartRate + dmg * 2)
                     }));
                  }}
               />
            </div>
         </motion.div>
       );
    }

    if (activeSpecializedMinigame === 'pins') {
       return (
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-[#0B1511]/95 backdrop-blur-xl flex items-center justify-center p-6">
            <div className="w-full max-w-4xl h-[600px]">
               <OrthopedicPinsMinigame 
                  onComplete={handleSpecializedMinigameComplete} 
                  onVitalsDrain={(dmg) => {
                     setVitals(prev => ({
                        ...prev,
                        bloodPressureSystolic: Math.max(0, prev.bloodPressureSystolic - dmg),
                        heartRate: Math.min(250, prev.heartRate + dmg * 2)
                     }));
                  }}
               />
            </div>
         </motion.div>
       );
    }
    
    if (activeSpecializedMinigame === 'drill') {
       return (
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-[#0B1511]/95 backdrop-blur-xl flex items-center justify-center p-6">
            <div className="w-full max-w-4xl h-[600px]">
               <BoneDrillMinigame 
                  onComplete={handleSpecializedMinigameComplete} 
                  onVitalsDrain={(dmg) => {
                     setVitals(prev => ({
                        ...prev,
                        bloodPressureSystolic: Math.max(0, prev.bloodPressureSystolic - dmg),
                        heartRate: Math.min(250, prev.heartRate + dmg * 2)
                     }));
                  }}
               />
            </div>
         </motion.div>
       );
    }
    
    if (activeSpecializedMinigame === 'endoscopy') {
       return (
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-[#0B1511]/95 backdrop-blur-xl flex items-center justify-center p-6">
            <div className="w-full max-w-4xl h-[600px]">
               <EndoscopyMinigame 
                  onComplete={handleSpecializedMinigameComplete} 
                  onVitalsDrain={(dmg) => {
                     setVitals(prev => ({
                        ...prev,
                        bloodPressureSystolic: Math.max(0, prev.bloodPressureSystolic - dmg),
                        heartRate: Math.min(250, prev.heartRate + dmg * 2)
                     }));
                  }}
               />
            </div>
         </motion.div>
       );
    }
    
    if (activeSpecializedMinigame === 'incision') {
       return (
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-[#0B1511]/95 backdrop-blur-xl flex items-center justify-center p-6">
            <div className="w-full max-w-4xl h-[600px]">
               <SoftTissueIncisionMinigame 
                 onComplete={handleSpecializedMinigameComplete} 
                 onBleedingUpdate={(rate) => { bleedingRateRef.current = rate; }}
               />
            </div>
         </motion.div>
       );
    }
    
    if (activeSpecializedMinigame === 'suture') {
       return (
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-[#0B1511]/95 backdrop-blur-xl flex items-center justify-center p-6">
            <div className="w-full max-w-4xl h-[600px]">
               <SutureTensionMinigame 
                  onComplete={handleSpecializedMinigameComplete} 
                  onVitalsDrain={(dmg) => {
                     setVitals(prev => ({
                        ...prev,
                        bloodPressureSystolic: Math.max(0, prev.bloodPressureSystolic - dmg),
                        heartRate: Math.min(250, prev.heartRate + dmg * 2)
                     }));
                  }}
               />
            </div>
         </motion.div>
       );
    }

    if (activeSpecializedMinigame === 'pharmacology') {
       return (
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-[#0B1511]/95 backdrop-blur-xl flex items-center justify-center p-6">
            <div className="w-full max-w-5xl h-[650px]">
               <PharmacologyMinigame 
                  patientWeightKg={caseData.weightKg || 5} 
                  onComplete={() => {
                      soundManager.playSuccess();
                      setActiveSpecializedMinigame(null);
                  }} 
                  onVitalsTick={(tox, eff) => {
                      setVitals(prev => ({
                          ...prev,
                          bloodPressureSystolic: prev.bloodPressureSystolic + (eff * 20) - (tox * 10),
                          heartRate: prev.heartRate - (eff * 10) + (tox * 20),
                          stressIntegral: Math.max(0, prev.stressIntegral - eff + tox)
                      }));
                  }}
                  onCancel={() => setActiveSpecializedMinigame(null)}
               />
            </div>
         </motion.div>
       );
    }

    if (!vitals.isAlive) {
       return (
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-rose-950/95 flex flex-col items-center justify-center p-6 text-center">
            <AlertTriangle className="w-24 h-24 text-rose-500 mb-6" />
            <h1 className="text-4xl font-black text-rose-500 uppercase tracking-widest mb-4">Óbito na Mesa Cirúrgica</h1>
            <p className="text-rose-200 text-lg max-w-2xl mb-8">
               O paciente entrou em falência múltipla de órgãos e choque hipovolêmico sistêmico. A cirurgia falhou catastroficamente devido a danos iatrogênicos não mitigados.
            </p>
            <button onClick={() => window.location.reload()} className="px-8 py-3 rounded-xl bg-rose-900 border border-rose-500 text-white font-bold uppercase tracking-wider hover:bg-rose-800 transition-colors">
               Retornar à Clínica
            </button>
         </motion.div>
       );
    }

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#0B1511]/95 backdrop-blur-xl flex flex-col p-6 select-none overflow-hidden"
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between border-b border-[#C89A3C]/30 pb-3 shrink-0">
          <div>
            <h2 className="text-lg font-bold text-[#E8B84A] flex items-center gap-2">
              <Syringe className="w-5 h-5 text-[#C89A3C]" />
              Procedimento Cirúrgico — FSM Operacional
            </h2>
            <p className="text-xs text-slate-400">
              Máquina de estados finitos controlando a progressão cirúrgica.
              Siga os passos operatórios na sequência correta.
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:border-[#C89A3C] transition-all"
          >
            <X className="w-5 h-5 text-[#C89A3C]" />
            <span className="font-semibold text-sm">Abortar</span>
          </button>
        </div>

        {/* ── Main surgical stage area ── */}
        <div className="flex-1 grid grid-cols-12 gap-4 my-3 min-h-0 overflow-hidden">
          {/* Left Column: Phase Info + Instruments */}
          <div className="col-span-3 flex flex-col gap-3 overflow-y-auto">
            {/* Current Phase Card */}
            <div
              className={`p-4 rounded-2xl border border-slate-700 bg-gradient-to-br ${phaseConfig.bgGradient}`}
            >
              <div className={`flex items-center gap-2 ${phaseConfig.color} mb-2`}>
                {phaseConfig.icon}
                <span className="text-sm font-bold">{phaseConfig.title}</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {phaseConfig.description}
              </p>
            </div>

            {/* Phase Progress Timeline */}
            <div className="bg-[#0E1713]/80 border border-slate-800 rounded-2xl p-3 space-y-1.5">
              <span className="text-[10px] text-slate-400 uppercase font-bold block mb-2">
                Progresso Cirúrgico
              </span>
              {(Object.keys(PHASE_CONFIG) as SurgicalPhase[]).map((phase) => {
                const completed = phaseHistory.includes(phase);
                const isCurrent = phase === currentPhase;
                return (
                  <div
                    key={phase}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[10px] transition-all ${
                      isCurrent
                        ? 'bg-[#C89A3C]/20 border border-[#C89A3C]/50 text-[#E8B84A] font-bold'
                        : completed
                        ? 'text-emerald-400 opacity-70'
                        : 'text-slate-600'
                    }`}
                  >
                    {completed && !isCurrent ? (
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                    ) : isCurrent ? (
                      <div className="w-3 h-3 rounded-full bg-[#C89A3C] animate-pulse shrink-0" />
                    ) : (
                      <div className="w-3 h-3 rounded-full border border-slate-700 shrink-0" />
                    )}
                    <span className="truncate">{PHASE_CONFIG[phase].title}</span>
                  </div>
                );
              })}
            </div>

            {/* Instrument Selector */}
            <div className="bg-[#0E1713]/80 border border-slate-800 rounded-2xl p-3 space-y-2">
              <span className="text-[10px] text-slate-400 uppercase font-bold block">
                Instrumentos
              </span>
              {(
                [
                  'scalpel',
                  'forceps',
                  'bone_drill',
                  'suture_needle',
                  'irrigation_syringe',
                  'epoxy_applicator',
                  'endoscope',
                ] as SurgicalInstrument[]
              ).map((inst) => {
                const info = INSTRUMENT_INFO[inst];
                const isActive = activeInstrument === inst;
                return (
                  <button
                    key={inst}
                    onClick={() => {
                      if (isActive) {
                        setActiveInstrument(null);
                        soundManager.playClick();
                      } else {
                        handleInstrumentSelect(inst);
                      }
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl text-[11px] font-semibold transition-all ${
                      isActive
                        ? 'bg-[#C89A3C]/20 border border-[#C89A3C] text-[#E8B84A]'
                        : 'bg-slate-900/50 border border-slate-800 text-slate-400 hover:border-slate-600'
                    }`}
                  >
                    {info.icon}
                    <span>{info.label}</span>
                  </button>
                );
              })}
              
              {/* Iatrogenic Warning Banner */}
              {iatrogenicWarning && (
                <div className="mt-2 p-2 rounded-xl bg-rose-900/60 border border-rose-500/50 text-rose-300 text-[10px] font-bold flex items-center gap-2 animate-pulse">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{iatrogenicWarning}</span>
                </div>
              )}
              
              {/* Instrument Sequence Progress */}
              {caseData.treatmentSequence && caseData.treatmentSequence.length > 0 && (
                <div className="mt-2 p-2 rounded-xl bg-slate-900/60 border border-slate-700 text-[10px]">
                  <span className="text-slate-500 uppercase font-bold block mb-1">Sequência Cirúrgica</span>
                  <div className="flex flex-wrap gap-1">
                    {caseData.treatmentSequence.map((step, idx) => {
                      const completed = idx < instrumentStepIndex;
                      const isCurrent = idx === instrumentStepIndex;
                      return (
                        <span
                          key={`${step.tool}-${idx}`}
                          className={`px-1.5 py-0.5 rounded text-[9px] font-mono ${
                            completed
                              ? 'bg-emerald-900/40 text-emerald-400 line-through'
                              : isCurrent
                              ? 'bg-[#C89A3C]/20 text-[#E8B84A] border border-[#C89A3C]/50'
                              : 'bg-slate-800 text-slate-600'
                          }`}
                        >
                          {INSTRUMENT_INFO[step.tool as SurgicalInstrument]?.label || step.tool}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
              
              <div className="pt-2 border-t border-slate-800">
                <button
                  onClick={() => {
                    setActiveSpecializedMinigame('pharmacology');
                    soundManager.playClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-purple-900/40 text-purple-400 hover:bg-purple-900/60 border border-purple-900/50 transition-all font-bold text-[11px] uppercase tracking-widest"
                >
                  <FlaskConical className="w-4 h-4" /> Farmacologia
                </button>
              </div>
            </div>
          </div>

          {/* Center: Surgical Canvas / Action Area */}
          <div className="col-span-6 flex flex-col gap-3 min-h-0">
            {/* Canvas for incision/suture phases */}
            {(currentPhase === 'SURGICAL_INCISION' ||
              currentPhase === 'WOUND_CLOSURE') && (
              <div className="flex-1 relative rounded-2xl overflow-hidden border border-slate-700 bg-[#0a0f0d]">
                <canvas
                  ref={incisionCanvasRef}
                  width={INCISION_CANVAS_W}
                  height={INCISION_CANVAS_H}
                  onPointerDown={handleIncisionPointerDown}
                  onPointerMove={handleIncisionPointerMove}
                  onPointerUp={handleIncisionPointerUp}
                  className="w-full h-full cursor-crosshair"
                  style={{ touchAction: 'none' }}
                />
                {/* Accuracy overlay */}
                {completedIncisions.length > 0 && (
                  <div className="absolute top-3 right-3 bg-slate-900/90 border border-slate-700 rounded-xl px-3 py-2 text-[11px]">
                    <span className="text-slate-400">Precisão: </span>
                    <span
                      className={`font-bold font-mono ${
                        completedIncisions[completedIncisions.length - 1]
                          .accuracy > 0.7
                          ? 'text-emerald-400'
                          : completedIncisions[completedIncisions.length - 1]
                              .accuracy > 0.4
                          ? 'text-amber-400'
                          : 'text-rose-400'
                      }`}
                    >
                      {(
                        completedIncisions[completedIncisions.length - 1]
                          .accuracy * 100
                      ).toFixed(1)}
                      %
                    </span>
                  </div>
                )}
                <div className="absolute bottom-3 left-3 text-[10px] text-slate-500">
                  Catmull-Rom Centripetal Spline — Interpolação em tempo real
                </div>
              </div>
            )}

            {/* Non-canvas phases: action panel */}
            {currentPhase !== 'SURGICAL_INCISION' &&
              currentPhase !== 'WOUND_CLOSURE' && (
                <div className="flex-1 flex flex-col items-center justify-center rounded-2xl border border-slate-700 bg-gradient-to-br from-[#0E1713] to-[#14261E] p-8">
                  <div className={`text-4xl mb-4 ${phaseConfig.color}`}>
                    {phaseConfig.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#E8B84A] mb-2">
                    {phaseConfig.title}
                  </h3>
                  <p className="text-sm text-slate-300 text-center max-w-md mb-6">
                    {phaseConfig.description}
                  </p>

                  {/* Anesthesia depth slider */}
                  {currentPhase === 'ANESTHESIA_INDUCTION' && (
                    <div className="w-full max-w-sm space-y-3">
                      <label className="text-xs text-slate-300 font-semibold block">
                        Profundidade Anestésica:{' '}
                        {(anesthesiaDepth * 100).toFixed(0)}%
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={anesthesiaDepth * 100}
                        onChange={(e) => {
                          const depth = Number(e.target.value) / 100;
                          setAnesthesiaDepth(depth);
                          soundManager.playAnesthesiaMonitor(
                            vitals.heartRate,
                            depth > 0.3 && depth < 0.8
                          );
                        }}
                        className="w-full accent-purple-500 h-2 bg-slate-800 rounded-lg"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span>Vigília</span>
                        <span
                          className={
                            anesthesiaDepth > 0.3 && anesthesiaDepth < 0.8
                              ? 'text-emerald-400 font-bold'
                              : 'text-rose-400 font-bold'
                          }
                        >
                          {anesthesiaDepth < 0.3
                            ? 'Superficial'
                            : anesthesiaDepth < 0.8
                            ? 'Plano Cirúrgico Ideal'
                            : 'SOBREDOSE!'}
                        </span>
                        <span>Overdose</span>
                      </div>
                    </div>
                  )}

                  {/* Osteosynthesis: instrument selection + apply */}
                  {currentPhase === 'OSTEOSYNTHESIS' && (
                    <div className="space-y-3 text-center">
                      <p className="text-xs text-slate-400">
                        Selecione o implante no painel de instrumentos e confirme.
                      </p>
                      {activeInstrument &&
                        (activeInstrument === 'steinmann_pin' ||
                          activeInstrument === 'lcp_plate' ||
                          activeInstrument === 'cerclage_wire' ||
                          activeInstrument === 'epoxy_applicator' ||
                          activeInstrument === 'scalpel' ||
                          activeInstrument === 'suture_needle' ||
                          activeInstrument === 'bone_drill') && (
                          <button
                            onClick={() => {
                              // Trigger Minigames Based on active instrument and phase context
                              const sequence = caseData.treatmentSequence;
                              if (sequence) {
                                  const step = sequence.find(s => s.tool === activeInstrument);
                                  if (step && step.minigame !== 'None') {
                                      if (step.minigame === 'BoneDrillMinigame') setActiveSpecializedMinigame('drill');
                                      else if (step.minigame === 'EndoscopyMinigame') setActiveSpecializedMinigame('endoscopy');
                                      else if (step.minigame === 'IncisionMinigame') setActiveSpecializedMinigame('incision');
                                      else if (step.minigame === 'SutureMinigame') setActiveSpecializedMinigame('suture');
                                      else if (step.minigame === 'EpoxyResinMinigame') setActiveSpecializedMinigame('resin');
                                      else if (step.minigame === 'SyringeIrrigationMinigame') setActiveSpecializedMinigame('irrigation');
                                      else if (step.minigame === 'OrthopedicPinsMinigame') setActiveSpecializedMinigame('pins');
                                      return;
                                  }
                              }
                              
                              // Fallback classic behavior
                              soundManager.playBoneDrillFriction(0.6, 0.8);
                              setMetrics((prev) => ({
                                ...prev,
                                proceduresCompleted: [
                                  ...prev.proceduresCompleted,
                                  activeInstrument,
                                ],
                              }));
                            }}
                            className="px-6 py-3 rounded-xl bg-cyan-600 border border-cyan-300 text-white font-bold text-sm"
                          >
                            Aplicar{' '}
                            {INSTRUMENT_INFO[activeInstrument].label}
                          </button>
                        )}
                    </div>
                  )}

                  {/* Fracture Reduction */}
                  {currentPhase === 'FRACTURE_REDUCTION' && (
                    <div className="text-center space-y-3">
                      <p className="text-xs text-slate-400">
                        Selecione o fórceps e confirme a redução.
                      </p>
                      {activeInstrument === 'forceps' && (
                        <button
                          onClick={() => {
                            soundManager.playClick();
                            setMetrics((prev) => ({
                              ...prev,
                              proceduresCompleted: [
                                ...prev.proceduresCompleted,
                                'fracture_reduction',
                              ],
                            }));
                          }}
                          className="px-6 py-3 rounded-xl bg-amber-600 border border-amber-300 text-white font-bold text-sm"
                        >
                          Executar Redução Fechada
                        </button>
                      )}
                    </div>
                  )}

                  {/* Post-op */}
                  {isPostOp && (
                    <div className="space-y-4 text-center w-full max-w-sm">
                      <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-4 space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Score Cirúrgico:</span>
                          <span className="font-mono font-bold text-[#E8B84A]">
                            {computeSurgicalScore(
                              metrics,
                              (Date.now() - startTimeRef.current) / 1000
                            ).toFixed(1)}
                            /100
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Precisão Incisão:</span>
                          <span className="font-mono font-bold text-emerald-400">
                            {(metrics.incisionAccuracy * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Dano Iatrogênico:</span>
                          <span className="font-mono font-bold text-rose-400">
                            {metrics.iatrogenicDamage.toFixed(1)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Tempo Total:</span>
                          <span className="font-mono font-bold text-slate-200">
                            {Math.floor(
                              (Date.now() - startTimeRef.current) / 60000
                            )}
                            m{' '}
                            {Math.floor(
                              ((Date.now() - startTimeRef.current) / 1000) % 60
                            )}
                            s
                          </span>
                        </div>
                      </div>

                      {(!caseData.treatmentSequence || instrumentStepIndex >= caseData.treatmentSequence.length) ? (
                        <button
                          onClick={handleFinish}
                          className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 border border-emerald-300 text-white font-extrabold text-sm gold-glow"
                        >
                          FINALIZAR PROCEDIMENTO CIRÚRGICO
                        </button>
                      ) : (
                        <div className="w-full px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-500 font-extrabold text-sm uppercase">
                          Cumpra todas as etapas cirúrgicas ({instrumentStepIndex}/{caseData.treatmentSequence.length})
                        </div>
                      )}
                    </div>
                  )}

                  {/* Phase transition buttons */}
                  {!isPostOp && (
                    <div className="flex gap-3 mt-6">
                      {availableTransitions.map((trans) => (
                        <button
                          key={trans.to}
                          onClick={() => transitionPhase(trans.to)}
                          className="px-5 py-2.5 rounded-xl bg-[#1C382B] border border-[#C89A3C] text-[#E8B84A] font-bold text-sm hover:scale-105 transition-all gold-glow"
                        >
                          {trans.label} →
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

            {/* Phase transition buttons for canvas phases */}
            {(currentPhase === 'SURGICAL_INCISION' ||
              currentPhase === 'WOUND_CLOSURE') &&
              completedIncisions.length > 0 && (
                <div className="flex justify-end gap-3">
                  {availableTransitions.map((trans) => (
                    <button
                      key={trans.to}
                      onClick={() => transitionPhase(trans.to)}
                      className="px-5 py-2.5 rounded-xl bg-[#1C382B] border border-[#C89A3C] text-[#E8B84A] font-bold text-sm hover:scale-105 transition-all gold-glow"
                    >
                      {trans.label} →
                    </button>
                  ))}
                </div>
              )}
          </div>

          {/* Right Column: Vitals Monitor */}
          <div className="col-span-3 flex flex-col gap-3 overflow-y-auto">
            {/* Vitals Panel */}
            <div className="bg-[#0E1713]/90 border border-slate-800 rounded-2xl p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] text-slate-400 uppercase font-bold">
                  Monitor de Sinais Vitais
                </span>
              </div>

              <VitalRow
                label="FC"
                value={`${Math.round(vitals.heartRate)} bpm`}
                color={
                  vitals.heartRate > 50 || vitals.heartRate < 20
                    ? 'text-rose-400'
                    : 'text-emerald-400'
                }
              />
              <VitalRow
                label="FR"
                value={`${Math.round(vitals.respiratoryRate)} rpm`}
                color="text-blue-400"
              />
              <VitalRow
                label="Temp"
                value={`${vitals.bodyTemperature.toFixed(1)} °C`}
                color={
                  vitals.bodyTemperature > 40
                    ? 'text-rose-400'
                    : 'text-amber-400'
                }
              />
              <VitalRow
                label="SpO₂"
                value={`${vitals.oxygenSaturation.toFixed(0)}%`}
                color={
                  vitals.oxygenSaturation < 90
                    ? 'text-rose-400'
                    : 'text-emerald-400'
                }
              />
              <VitalRow
                label="PA"
                value={`${Math.round(vitals.bloodPressureSystolic)}/${Math.round(vitals.bloodPressureDiastolic)}`}
                color="text-purple-400"
              />

              {/* Stress meter */}
              <div className="pt-2 border-t border-slate-800">
                <div className="flex items-center justify-between text-[10px] mb-1">
                  <span className="text-slate-400">P_CM(t) Estresse</span>
                  <span className="font-mono text-amber-400">
                    {vitals.stressIntegral.toFixed(2)}
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${Math.min(100, stressLevel)}%`,
                      background:
                        stressLevel > 70
                          ? '#ef4444'
                          : stressLevel > 40
                          ? '#f59e0b'
                          : '#34d399',
                    }}
                  />
                </div>
              </div>

              {/* Capture myopathy warning */}
              {vitals.stressIntegral > 5 && (
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-rose-950/50 border border-rose-600/50 text-[10px] text-rose-300">
                  <AlertTriangle className="w-3 h-3 shrink-0" />
                  <span>
                    Risco de Miopatia de Captura elevado!
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // § CLASSIC TREATMENT MODE (for non-surgical cases)
  // ──────────────────────────────────────────────────────────────────────────

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#0B1511]/95 backdrop-blur-xl flex flex-col justify-between p-6 select-none"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#C89A3C]/30 pb-4">
        <div>
          <h2 className="text-xl font-bold text-[#E8B84A] flex items-center gap-2">
            <Syringe className="w-6 h-6 text-[#C89A3C]" />
            Procedimentos Terapêuticos & Intervenção Clínica
          </h2>
          <p className="text-xs text-slate-400">
            Selecione as condutas adequadas para o paciente e execute a
            aplicação prática.
          </p>
        </div>

        <button
          onClick={onClose}
          className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:border-[#C89A3C] transition-all"
        >
          <X className="w-5 h-5 text-[#C89A3C]" />
          <span className="font-semibold text-sm">Cancelar / Sair</span>
        </button>
      </div>

      {/* Main Treatment Stage */}
      <div className="relative flex-1 my-4 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
        {/* Left Options Column */}
        <div className="bg-[#14261E]/80 border border-[#C89A3C]/30 p-5 rounded-3xl flex flex-col space-y-4 overflow-y-auto">
          <h3 className="text-sm font-bold text-[#E8B84A] uppercase tracking-wider">
            Condutas Disponíveis
          </h3>

          {treatments.map((t) => {
            const isApplied = appliedProcedures.includes(t.id);
            const isSelected = activeTool?.id === t.id;

            return (
              <motion.div
                key={t.id}
                whileHover={{ scale: isApplied ? 1 : 1.02 }}
                onClick={() => {
                  if (!isApplied) {
                    setActiveTool(t);
                    soundManager.playClick();
                  }
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer shadow-lg ${
                  isApplied
                    ? 'bg-slate-900/60 border-emerald-500/50 text-slate-400'
                    : isSelected
                    ? 'bg-[#1C382B] border-[#C89A3C] gold-glow text-white'
                    : 'bg-[#0E1B15] border-[#C89A3C]/30 text-slate-200 hover:border-[#E8B84A]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#E8B84A] flex items-center gap-2">
                    {t.type === 'injection' && (
                      <Syringe className="w-4 h-4 text-emerald-400" />
                    )}
                    {t.type === 'bandaging' && (
                      <Bandage className="w-4 h-4 text-amber-400" />
                    )}
                    {t.type === 'oral' && (
                      <Pill className="w-4 h-4 text-blue-400" />
                    )}
                    {t.title}
                  </span>
                  {isApplied && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  )}
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {t.description}
                </p>
                <span className="text-[11px] font-mono text-emerald-400 mt-2 block font-semibold">
                  Custo: R$ {t.cost}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Center & Right Target Canvas Area */}
        <div className="md:col-span-2 relative rounded-3xl bg-[#07100D] border border-[#C89A3C]/30 overflow-hidden flex items-center justify-center p-6 shadow-2xl">
          <img
            src={caseData.imageTexture}
            alt={caseData.speciesName}
            className="max-h-[480px] w-auto object-contain rounded-2xl filter brightness-90 contrast-105 shadow-2xl"
          />

          <AnimatePresence>
            {activeTool && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="absolute inset-0 bg-[#0B1511]/80 backdrop-blur-md flex flex-col items-center justify-center space-y-6"
              >
                <div className="text-center space-y-2 max-w-md">
                  <h4 className="text-xl font-bold text-[#E8B84A]">
                    {activeTool.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeTool.description}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleApplyTreatment(activeTool)}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 border border-emerald-300 text-slate-950 font-extrabold text-lg flex items-center gap-3 gold-glow shadow-2xl"
                >
                  <CheckCircle2 className="w-6 h-6" />
                  <span>EXECUTAR PROCEDIMENTO CLÍNICO</span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {appliedProcedures.length > 0 && !activeTool && (
            <div className="absolute bottom-6 right-6">
              <button
                onClick={handleFinish}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#C89A3C] to-[#E8B84A] text-slate-950 font-extrabold text-base shadow-2xl gold-glow hover:scale-105 transition-all"
              >
                CONCLUIR TRATAMENTO & FINALIZAR
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// § HELPER COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function VitalRow({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[10px] text-slate-400 uppercase">{label}</span>
      <span className={`text-xs font-mono font-bold ${color}`}>{value}</span>
    </div>
  );
}
