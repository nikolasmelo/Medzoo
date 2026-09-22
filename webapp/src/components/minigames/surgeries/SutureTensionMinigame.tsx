import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, CheckCircle2, Sparkles, AlertTriangle, RotateCcw, Undo2 } from 'lucide-react';
import type { SurgicalMinigameProps } from '../../../types';
import { soundManager } from '../../../utils/sound';

const CANVAS_W = 700;
const CANVAS_H = 400;
const REQUIRED_SUTURES = 5;

// Hooke's Law Constants calibrated to anatomical wound margin opening (~80px distance)
const K_TISSUE = 0.5; // Elasticity constant: 80px distance = 40N
const BASE_IDEAL_MIN = 36;
const BASE_IDEAL_MAX = 46;
const BASE_ISCHEMIA = 48;
const BASE_SNAP = 56;

interface SutureRecord {
  start: { x: number; y: number };
  end: { x: number; y: number };
  tension: number;
  status: 'ideal' | 'loose' | 'ischemic';
}

function drawRoundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  if (typeof ctx.roundRect === 'function') {
    try {
      ctx.roundRect(x, y, w, h, r);
      return;
    } catch { /* fallback */ }
  }
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export const SutureTensionMinigame: React.FC<SurgicalMinigameProps> = ({
  stepId,
  executionToken,
  onComplete,
  onCancel: _onCancel,
  onVitalsDrain,
  unlockedUpgrades = [],
}) => {
  const hasSutureUpgrade = unlockedUpgrades.includes('suture_pds');

  // Dynamic values based on Fio Monofilamentar PDS equipment
  const idealMin = hasSutureUpgrade ? 30 : BASE_IDEAL_MIN;
  const idealMax = hasSutureUpgrade ? 52 : BASE_IDEAL_MAX;
  const ischemiaThreshold = hasSutureUpgrade ? 54 : BASE_ISCHEMIA;
  const snapThreshold = hasSutureUpgrade ? 68 : BASE_SNAP;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [suturesPlaced, setSuturesPlaced] = useState(0);
  const [currentTensionUI, setCurrentTensionUI] = useState(0);
  const [tissueIntegrity, setTissueIntegrity] = useState(100);
  const [statusFeedback, setStatusFeedback] = useState<string | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationData, setEvaluationData] = useState<{
    idealCount: number;
    looseCount: number;
    ischemicCount: number;
    accuracy: number;
    damage: number;
    timeTaken: number;
    passed: boolean;
  } | null>(null);

  const stateRef = useRef({
    isDragging: false,
    dragStart: { x: 0, y: 0 },
    currentMouse: { x: 0, y: 0 },
    sutures: [] as SutureRecord[],
    iatrogenicDamage: 0,
  });

  const startTimeRef = useRef<number>(performance.now());
  const lastTimeRef = useRef<number>(performance.now());

  useEffect(() => {
    let animationId: number;

    const loop = (time: number) => {
      lastTimeRef.current = time;
      const s = stateRef.current;
      
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      
      if (ctx && canvas) {
        // Clear Canvas
        ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

        // 1. Surgical Drape (Dark Emerald/Slate Sterile Cloth)
        ctx.fillStyle = '#060B08';
        ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

        const drapeMargin = 20;
        const drapeW = CANVAS_W - drapeMargin * 2;
        const drapeH = CANVAS_H - drapeMargin * 2;

        ctx.save();
        ctx.fillStyle = '#0B1A14';
        drawRoundRect(ctx, drapeMargin, drapeMargin, drapeW, drapeH, 20);
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#16382C';
        ctx.stroke();

        // Sterile fabric texture grid
        ctx.strokeStyle = 'rgba(22, 56, 44, 0.25)';
        ctx.lineWidth = 1;
        for (let x = drapeMargin + 25; x < drapeMargin + drapeW; x += 30) {
          ctx.beginPath();
          ctx.moveTo(x, drapeMargin);
          ctx.lineTo(x, drapeMargin + drapeH);
          ctx.stroke();
        }
        for (let y = drapeMargin + 25; y < drapeMargin + drapeH; y += 30) {
          ctx.beginPath();
          ctx.moveTo(drapeMargin, y);
          ctx.lineTo(drapeMargin + drapeW, y);
          ctx.stroke();
        }
        ctx.restore();

        // 2. Anatomical Wound Bed
        const centerX = CANVAS_W / 2;
        const centerY = CANVAS_H / 2;
        const woundRx = 210;
        const woundRy = 55;

        ctx.save();
        // Subcutaneous Fat / Epidermal Margin (Outer Lip)
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, woundRx + 12, woundRy + 12, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#9f1239';
        ctx.fill();
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#be123c';
        ctx.stroke();

        // Deep Muscle & Fascia Cavity
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, woundRx, woundRy, 0, 0, Math.PI * 2);
        const cavityGrad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, woundRx);
        cavityGrad.addColorStop(0, '#3b0712');
        cavityGrad.addColorStop(0.5, '#701a2b');
        cavityGrad.addColorStop(1, '#9f1239');
        ctx.fillStyle = cavityGrad;
        ctx.fill();

        // Muscle striations
        ctx.strokeStyle = 'rgba(244, 63, 94, 0.18)';
        ctx.lineWidth = 2;
        for (let i = -woundRx + 20; i <= woundRx - 20; i += 25) {
          ctx.beginPath();
          ctx.moveTo(centerX + i, centerY - woundRy * 0.7);
          ctx.quadraticCurveTo(centerX + i * 0.9, centerY, centerX + i, centerY + woundRy * 0.7);
          ctx.stroke();
        }

        // Guide marks on opposite banks showing anatomical alignment
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, woundRx * 0.9, woundRy * 0.75, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
        
        // 3. Draw Placed Sutures
        s.sutures.forEach((sut) => {
          ctx.save();
          ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
          ctx.shadowBlur = 6;
          ctx.shadowOffsetY = 3;

          // Color coded based on tension quality
          const threadColor = sut.status === 'ideal' 
            ? '#10b981' 
            : sut.status === 'ischemic' 
            ? '#f43f5e' 
            : '#38bdf8';

          ctx.strokeStyle = sut.status === 'ideal' ? '#047857' : threadColor;
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(sut.start.x, sut.start.y);
          const midX = (sut.start.x + sut.end.x) / 2;
          const midY = (sut.start.y + sut.end.y) / 2;
          ctx.quadraticCurveTo(midX, midY + (sut.status === 'loose' ? 7 : 1), sut.end.x, sut.end.y);
          ctx.stroke();

          // Suture Sheen
          ctx.shadowColor = 'transparent';
          ctx.strokeStyle = sut.status === 'ideal' ? '#34d399' : '#e2e8f0';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(sut.start.x, sut.start.y);
          ctx.quadraticCurveTo(midX, midY + (sut.status === 'loose' ? 7 : 1), sut.end.x, sut.end.y);
          ctx.stroke();

          // Puncture anchors & knots
          [sut.start, sut.end].forEach((pt) => {
            ctx.fillStyle = '#4c0519';
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 4.5, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = threadColor;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(pt.x - 1, pt.y - 1, 1.2, 0, Math.PI * 2);
            ctx.fill();
          });
          
          // Ischemia halo (>48N)
          if (sut.status === 'ischemic') {
            ctx.fillStyle = 'rgba(244, 63, 94, 0.35)';
            ctx.beginPath();
            ctx.arc(sut.start.x, sut.start.y, 12, 0, Math.PI * 2);
            ctx.arc(sut.end.x, sut.end.y, 12, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        });
        
        // 4. Draw Active Drag
        if (s.isDragging) {
          const dx = s.currentMouse.x - s.dragStart.x;
          const dy = s.currentMouse.y - s.dragStart.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const currentTension = dist * K_TISSUE;
          
          const isDangerZone = currentTension > ischemiaThreshold;
          const isIdealZone = currentTension >= idealMin && currentTension <= idealMax;
          const isOverstretch = currentTension > idealMax && currentTension <= ischemiaThreshold;

          const tensionColor = isDangerZone
            ? '#f43f5e'
            : isIdealZone
            ? '#10b981'
            : isOverstretch
            ? '#f59e0b'
            : '#38bdf8';

          ctx.save();
          // Dashed thread
          ctx.strokeStyle = tensionColor;
          ctx.lineWidth = isIdealZone ? 3.5 : 2.5;
          ctx.setLineDash(isIdealZone ? [] : [6, 4]);
          ctx.beginPath();
          ctx.moveTo(s.dragStart.x, s.dragStart.y);
          ctx.lineTo(s.currentMouse.x, s.currentMouse.y);
          ctx.stroke();
          ctx.setLineDash([]);

          // Entry puncture
          ctx.fillStyle = '#4c0519';
          ctx.beginPath();
          ctx.arc(s.dragStart.x, s.dragStart.y, 5, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = tensionColor;
          ctx.beginPath();
          ctx.arc(s.dragStart.x, s.dragStart.y, 2.5, 0, Math.PI * 2);
          ctx.fill();

          // CURVED SURGICAL NEEDLE (3/8 Circle)
          const mx = s.currentMouse.x;
          const my = s.currentMouse.y;
          const angle = Math.atan2(dy, dx);

          ctx.translate(mx, my);
          ctx.rotate(angle);

          ctx.lineWidth = 2.5;
          ctx.strokeStyle = '#e2e8f0';
          ctx.beginPath();
          ctx.arc(0, 0, 16, -Math.PI * 0.65, Math.PI * 0.65);
          ctx.stroke();

          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(16 * Math.cos(Math.PI * 0.65), 16 * Math.sin(Math.PI * 0.65), 1.8, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#475569';
          ctx.beginPath();
          ctx.arc(16 * Math.cos(-Math.PI * 0.65), 16 * Math.sin(-Math.PI * 0.65), 1.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();

          // Floating Tension Tag
          ctx.save();
          ctx.fillStyle = 'rgba(15, 23, 42, 0.92)';
          ctx.fillRect(s.currentMouse.x + 16, s.currentMouse.y - 12, 110, 26);
          ctx.strokeStyle = tensionColor;
          ctx.lineWidth = 1.5;
          ctx.strokeRect(s.currentMouse.x + 16, s.currentMouse.y - 12, 110, 26);
          ctx.fillStyle = tensionColor;
          ctx.font = 'bold 12px monospace';
          ctx.fillText(`${currentTension.toFixed(1)} N`, s.currentMouse.x + 22, s.currentMouse.y + 5);
          ctx.restore();
        }
      }

      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [idealMin, idealMax, ischemiaThreshold]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (isEvaluating) return;
    const s = stateRef.current;
    if (s.sutures.length >= REQUIRED_SUTURES) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (CANVAS_W / rect.width);
    const y = (e.clientY - rect.top) * (CANVAS_H / rect.height);
    
    s.isDragging = true;
    s.dragStart = { x, y };
    s.currentMouse = { x, y };
    
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const s = stateRef.current;
    if (!s.isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    let x = (e.clientX - rect.left) * (CANVAS_W / rect.width);
    let y = (e.clientY - rect.top) * (CANVAS_H / rect.height);

    // Micro-snap magnetic guide with Fio PDS upgrade when approaching opposite margin
    if (hasSutureUpgrade) {
      const dx = x - s.dragStart.x;
      const dy = y - s.dragStart.y;
      const currentDist = Math.hypot(dx, dy);
      const currentT = currentDist * K_TISSUE;

      // If near ideal target zone (~36-44N)
      if (currentT >= 32 && currentT <= 48) {
        const idealY = s.dragStart.y + Math.sign(dy || 1) * (41 / K_TISSUE);
        if (Math.abs(y - idealY) < 16) {
          y = idealY + (y - idealY) * 0.3; // Gentle magnetic stabilization
        }
      }
    }

    s.currentMouse = { x, y };
    
    const dx = x - s.dragStart.x;
    const dy = y - s.dragStart.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const tension = dist * K_TISSUE;
    setCurrentTensionUI(tension);

    // 💥 Instant Rupture Check (> snapThreshold)
    if (tension > snapThreshold) {
      s.isDragging = false;
      try {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
      } catch {}

      soundManager.playError();
      if (!hasSutureUpgrade) onVitalsDrain?.(5);
      s.iatrogenicDamage += 10;
      setTissueIntegrity((prev) => Math.max(0, prev - 10));
      setStatusFeedback(`💥 Fio Rompido! Tração excessiva ultrapassou ${snapThreshold} N`);
      setCurrentTensionUI(0);
      setTimeout(() => setStatusFeedback(null), 2500);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const s = stateRef.current;
    if (!s.isDragging) return;
    s.isDragging = false;
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {}
    
    const dx = s.currentMouse.x - s.dragStart.x;
    const dy = s.currentMouse.y - s.dragStart.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const tension = dist * K_TISSUE;
    
    if (tension > 5 && tension <= snapThreshold) {
      let status: 'ideal' | 'loose' | 'ischemic' = 'ideal';

      if (tension < idealMin) {
        // Dehiscence / Slack
        status = 'loose';
        const dmg = hasSutureUpgrade ? 4 : 10;
        s.iatrogenicDamage += dmg;
        setTissueIntegrity((prev) => Math.max(0, prev - dmg));
        soundManager.playTone(280, 0.1, 0.05);
        if (!hasSutureUpgrade) onVitalsDrain?.(3);
        setStatusFeedback('⚠ Ponto Frouxo (Risco de Deiscência)');
      } else if (tension > ischemiaThreshold) {
        // Ischemic necrosis
        status = 'ischemic';
        const dmg = Math.round((tension - ischemiaThreshold) * 2.2);
        s.iatrogenicDamage += dmg;
        setTissueIntegrity((prev) => Math.max(0, prev - dmg));
        soundManager.playError();
        if (!hasSutureUpgrade) onVitalsDrain?.(5);
        setStatusFeedback('⚠ Isquemia Tecidual por Tensão Excessiva');
      } else {
        // Ideal tension
        soundManager.playTone(720, 0.08, 0.06);
        setStatusFeedback('✓ Coaptação Anatômica Perfeita');
      }

      setTimeout(() => setStatusFeedback(null), 2000);
      
      s.sutures.push({
        start: { ...s.dragStart },
        end: { ...s.currentMouse },
        tension,
        status,
      });
      
      setSuturesPlaced(s.sutures.length);

      if (s.sutures.length >= REQUIRED_SUTURES) {
        triggerEvaluation();
      }
    }
    
    s.isDragging = false;
    setCurrentTensionUI(0);
  };

  const triggerEvaluation = () => {
    const s = stateRef.current;
    const timeTaken = Math.round((performance.now() - startTimeRef.current) / 1000);
    const idealCount = s.sutures.filter((st) => st.status === 'ideal').length;
    const looseCount = s.sutures.filter((st) => st.status === 'loose').length;
    const ischemicCount = s.sutures.filter((st) => st.status === 'ischemic').length;
    
    const accuracy = Math.max(0, Math.min(1.0, 1 - (s.iatrogenicDamage / 100)));
    const passed = accuracy >= 0.60 && idealCount >= 3;

    setEvaluationData({
      idealCount,
      looseCount,
      ischemicCount,
      accuracy,
      damage: Math.round(s.iatrogenicDamage),
      timeTaken,
      passed,
    });
    setIsEvaluating(true);

    if (passed) {
      soundManager.playSuccess();
    } else {
      soundManager.playError();
    }
  };

  const handleConfirmFinish = () => {
    if (!evaluationData) return;
    onComplete({
      stepId: stepId || '',
      executionToken: executionToken || '',
      result: 'success',
      accuracy: evaluationData.accuracy,
      damage: evaluationData.damage,
      timeTaken: evaluationData.timeTaken,
    });
  };

  const handleResetSutures = () => {
    const s = stateRef.current;
    s.sutures = [];
    s.iatrogenicDamage = 0;
    setSuturesPlaced(0);
    setTissueIntegrity(100);
    setIsEvaluating(false);
    setEvaluationData(null);
    startTimeRef.current = performance.now();
    soundManager.playTone(440, 0.1, 0.05);
  };

  const handleUndoLast = () => {
    if (isEvaluating) return;
    const s = stateRef.current;
    if (s.sutures.length === 0) return;
    const removed = s.sutures.pop();
    setSuturesPlaced(s.sutures.length);
    if (removed && removed.status !== 'ideal') {
      s.iatrogenicDamage = Math.max(0, s.iatrogenicDamage - 8);
      setTissueIntegrity((prev) => Math.min(100, prev + 8));
    }
    soundManager.playClick();
  };

  const isDanger = currentTensionUI > ischemiaThreshold;
  const isLoose = currentTensionUI > 5 && currentTensionUI < idealMin;

  return (
    <div className="flex flex-col w-full h-full bg-[#050A08] rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-900 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <Scissors className="w-5 h-5 text-[#C89A3C]" />
            <h3 className="text-[#E8B84A] font-bold uppercase tracking-wider text-sm">
              Física de Oclusão e Coaptação (Sutura Cirúrgica)
            </h3>
            {hasSutureUpgrade && (
              <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Fio PDS Ativo (Zona 30N–52N • Snap Magnético • Ruptura 68N)
              </span>
            )}
          </div>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl">
            Aproxime a agulha até a borda oposta da incisão. Zona anatômica ideal:{' '}
            <strong className="text-emerald-400 font-mono">{idealMin} N a {idealMax} N</strong>. 
            Soltar curto (&lt;{idealMin} N) causa deiscência; ultrapassar a margem (&gt;{ischemiaThreshold} N) gera isquemia. Tração brusca (&gt;{snapThreshold} N) arrebenta o fio!
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {/* Tissue Integrity Gauge */}
          <div className="px-3.5 py-2 rounded-xl border bg-[#0a0f0d] border-slate-700 min-w-[120px]">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Integridade Tecidual</span>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-300 ${
                    tissueIntegrity > 70 ? 'bg-emerald-500' : tissueIntegrity > 40 ? 'bg-amber-500' : 'bg-rose-500'
                  }`}
                  style={{ width: `${tissueIntegrity}%` }}
                />
              </div>
              <span className="text-xs font-mono font-bold text-slate-200">{tissueIntegrity}%</span>
            </div>
          </div>

          {/* Real-time Tension Gauge */}
          <div className={`px-4 py-2 rounded-xl border flex flex-col justify-center min-w-[125px] ${
            isDanger 
              ? 'bg-rose-950/70 border-rose-500 animate-pulse' 
              : isLoose 
              ? 'bg-amber-950/60 border-amber-500' 
              : currentTensionUI >= idealMin && currentTensionUI <= idealMax
              ? 'bg-emerald-950/70 border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.25)]'
              : 'bg-[#0a0f0d] border-slate-700'
          }`}>
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Tensão Vetorial</span>
            <span className={`text-2xl font-mono font-black ${
              isDanger ? 'text-rose-400' : isLoose ? 'text-amber-400' : currentTensionUI >= idealMin ? 'text-emerald-400' : 'text-slate-400'
            }`}>
              {currentTensionUI.toFixed(1)} N
            </span>
            <span className="text-[9px] font-bold uppercase tracking-wider mt-0.5 text-slate-400">
              {isDanger ? '⚠ Isquemia' : isLoose ? 'Frouxa (Deiscência)' : currentTensionUI >= idealMin ? '✓ Coaptação Ótima' : 'Repouso'}
            </span>
          </div>
          
          {/* Stitches Counter & Undo */}
          <div className="flex items-center gap-2">
            <div className="px-3.5 py-2 rounded-xl border bg-[#0a0f0d] border-slate-700 min-w-[75px] text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Pontos</span>
              <span className="text-2xl font-mono font-black text-[#E8B84A]">
                {suturesPlaced}/{REQUIRED_SUTURES}
              </span>
            </div>

            {suturesPlaced > 0 && !isEvaluating && (
              <button
                type="button"
                onClick={handleUndoLast}
                title="Desfazer último ponto"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                <Undo2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Canvas Area */}
      <div className="flex-1 p-4 relative">
        <div className="w-full h-full relative rounded-2xl overflow-hidden border border-slate-700 bg-black cursor-crosshair">
          <canvas 
            ref={canvasRef}
            width={CANVAS_W}
            height={CANVAS_H}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className="w-full h-full block touch-none"
          />

          {/* Immediate Status Toast */}
          <AnimatePresence>
            {statusFeedback && (
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-slate-950/90 border border-slate-700 backdrop-blur-md text-xs font-black tracking-wide shadow-2xl text-white flex items-center gap-2 z-10"
              >
                {statusFeedback}
              </motion.div>
            )}
          </AnimatePresence>

          {/* End-of-Procedure Comprehensive Evaluation Modal */}
          <AnimatePresence>
            {isEvaluating && evaluationData && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-6 z-20"
              >
                <div className="max-w-md w-full rounded-2xl bg-[#0C1B15] border border-emerald-500/40 p-6 shadow-2xl flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 border ${
                    evaluationData.passed 
                      ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                      : 'bg-rose-500/20 border-rose-500/50 text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.3)]'
                  }`}>
                    {evaluationData.passed ? (
                      <CheckCircle2 className="w-8 h-8" />
                    ) : (
                      <AlertTriangle className="w-8 h-8" />
                    )}
                  </div>

                  <h2 className="text-xl font-black uppercase text-white tracking-wide mb-1">
                    {evaluationData.passed ? 'Síntese Tecidual Aprovada' : 'Síntese Comprometida'}
                  </h2>
                  <p className="text-xs text-slate-300 mb-5">
                    {evaluationData.passed 
                      ? 'As bordas foram coaptadas com tensão elástica fisiológica ideal, garantindo cicatrização de primeira intenção sem deiscência.' 
                      : 'A tensão dos nós comprometeu a viabilidade da sutura (risco elevado de deiscência ou necrose isquêmica). Refaça a síntese para garantir a segurança do paciente.'}
                  </p>

                  {/* Diagnostic Breakdown */}
                  <div className="w-full grid grid-cols-3 gap-2.5 mb-6">
                    <div className="p-3 rounded-xl bg-black/50 border border-emerald-900/40">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Pontos Ideais</span>
                      <span className="text-lg font-mono font-black text-emerald-400">
                        {evaluationData.idealCount}/{REQUIRED_SUTURES}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-black/50 border border-emerald-900/40">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Precisão</span>
                      <span className="text-lg font-mono font-black text-amber-300">
                        {Math.round(evaluationData.accuracy * 100)}%
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-black/50 border border-emerald-900/40">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Irregulares</span>
                      <span className="text-lg font-mono font-black text-rose-400">
                        {evaluationData.looseCount + evaluationData.ischemicCount}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 w-full">
                    {evaluationData.passed ? (
                      <button 
                        type="button"
                        onClick={handleConfirmFinish}
                        className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
                      >
                        Concluir e Selar Ferida
                      </button>
                    ) : (
                      <button 
                        type="button"
                        onClick={handleResetSutures}
                        className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-500 hover:to-rose-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                      >
                        <RotateCcw className="w-4 h-4" />
                        Remover Pontos e Refazer Síntese
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
