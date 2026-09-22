import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import type { SurgicalMinigameProps } from '../../../types';
import { soundManager } from '../../../utils/sound';

export const WoundDressingMinigame: React.FC<SurgicalMinigameProps> = ({
  stepId,
  executionToken,
  onComplete,
  onCancel: _onCancel,
  onVitalsDrain,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Dressing Steps: 1: 'ointment' (Pomada) -> 2: 'gauze' (Gaze) -> 3: 'bandage' (Bandagem/Tala) -> 4: 'finished'
  const [currentStep, setCurrentStep] = useState<'ointment' | 'gauze' | 'bandage' | 'finished'>('ointment');

  // Ointment coverage progress
  const [ointmentCoverage, setOintmentCoverage] = useState(0);
  const ointmentPointsRef = useRef<{ x: number; y: number }[]>([]);

  // Gauze positioning
  const gauzePosRef = useRef({ x: 280, y: 140 });
  const [, setGauzePos] = useState({ x: 280, y: 140 });
  const isDraggingGauzeRef = useRef(false);
  const [isGauzePlaced, setIsGauzePlaced] = useState(false);

  // Bandage tension and wraps
  const [bandageWraps, setBandageWraps] = useState(0);
  const [bandageTension, setBandageTension] = useState(50);
  const bandageTensionRef = useRef(50);
  const tensionDirRef = useRef(1);
  const [wrapFeedback, setWrapFeedback] = useState<string | null>(null);

  // Safety & lifecycle refs
  const isPlayingRef = useRef(true);
  const timeoutIdsRef = useRef<number[]>([]);
  const onCompleteRef = useRef(onComplete);
  const onVitalsDrainRef = useRef(onVitalsDrain);

  useEffect(() => {
    onCompleteRef.current = onComplete;
    onVitalsDrainRef.current = onVitalsDrain;
  }, [onComplete, onVitalsDrain]);

  const finishDressing = useCallback(() => {
    if (onCompleteRef.current) {
      onCompleteRef.current({
        stepId: stepId || 'step_dressing',
        executionToken: executionToken || '',
        result: 'success',
        accuracy: 1.0,
        damage: 0,
      });
    }
  }, [stepId, executionToken]);

  // Dynamic tension meter for bandage (oscillates continuously when in bandage step)
  useEffect(() => {
    if (currentStep !== 'bandage') return;

    const interval = setInterval(() => {
      setBandageTension((prev) => {
        let next = prev + tensionDirRef.current * 3.5;
        if (next >= 100) {
          next = 100;
          tensionDirRef.current = -1;
        } else if (next <= 10) {
          next = 10;
          tensionDirRef.current = 1;
        }
        bandageTensionRef.current = next;
        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [currentStep]);

  // Main Canvas Rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    isPlayingRef.current = true;
    let animId: number;

    const render = () => {
      if (!isPlayingRef.current) return;
      const w = canvas.width;
      const h = canvas.height;

      // Clean background
      ctx.fillStyle = '#060E0A';
      ctx.fillRect(0, 0, w, h);

      // Sterile Field
      ctx.fillStyle = '#0B1C15';
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(30, 20, w - 60, h - 40, 20);
      } else {
        ctx.rect(30, 20, w - 60, h - 40);
      }
      ctx.fill();
      ctx.strokeStyle = '#183D2F';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Animal Patient Body / Limb contour
      ctx.save();
      ctx.fillStyle = '#D1D5DB';
      ctx.beginPath();
      ctx.ellipse(400, 250, 250, 100, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#9CA3AF';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Incision and Suture Line
      ctx.strokeStyle = '#4B5563';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(250, 250);
      ctx.lineTo(550, 250);
      ctx.stroke();

      // Suture cross knots
      ctx.strokeStyle = '#1E293B';
      ctx.lineWidth = 2.5;
      for (let x = 270; x <= 530; x += 25) {
        ctx.beginPath();
        ctx.moveTo(x, 238);
        ctx.lineTo(x, 262);
        ctx.stroke();

        ctx.fillStyle = '#0F172A';
        ctx.beginPath();
        ctx.arc(x, 238, 3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // ── Layer 1: Ointment / Antimicrobial Gel Layer ──
      ctx.save();
      ointmentPointsRef.current.forEach((pt) => {
        ctx.fillStyle = 'rgba(253, 224, 71, 0.4)';
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 18, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // ── Target Placement Outline for Gauze (Phase 2) ──
      if (currentStep === 'gauze' && !isGauzePlaced) {
        ctx.save();
        ctx.strokeStyle = '#10B981';
        ctx.lineWidth = 2;
        ctx.setLineDash([8, 6]);
        ctx.fillStyle = 'rgba(16, 185, 129, 0.08)';
        ctx.beginPath();
        if (typeof ctx.roundRect === 'function') {
          ctx.roundRect(400 - 120, 250 - 40, 240, 80, 8);
        } else {
          ctx.rect(400 - 120, 250 - 40, 240, 80);
        }
        ctx.fill();
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#34D399';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Posicione a Gaze Aqui', 400, 254);
        ctx.restore();
      }

      // ── Layer 2: Sterile Contact Gauze Pad ──
      if (currentStep !== 'ointment') {
        const curGauze = gauzePosRef.current;
        ctx.save();
        ctx.translate(curGauze.x, curGauze.y);

        // Gauze shadow
        ctx.shadowColor = 'rgba(0, 0, 0, 0.35)';
        ctx.shadowBlur = 12;
        ctx.shadowOffsetY = 4;

        // Gauze texture
        ctx.fillStyle = '#F8FAFC';
        ctx.beginPath();
        if (typeof ctx.roundRect === 'function') {
          ctx.roundRect(-120, -40, 240, 80, 8);
        } else {
          ctx.rect(-120, -40, 240, 80);
        }
        ctx.fill();
        ctx.shadowColor = 'transparent';
        ctx.strokeStyle = '#CBD5E1';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Mesh grid
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
        ctx.lineWidth = 1;
        for (let gx = -110; gx <= 110; gx += 15) {
          ctx.beginPath();
          ctx.moveTo(gx, -35); ctx.lineTo(gx, 35);
          ctx.stroke();
        }
        for (let gy = -30; gy <= 30; gy += 15) {
          ctx.beginPath();
          ctx.moveTo(-115, gy); ctx.lineTo(115, gy);
          ctx.stroke();
        }

        // Label on gauze if dragging
        if (currentStep === 'gauze' && !isGauzePlaced) {
          ctx.fillStyle = '#64748B';
          ctx.font = '10px monospace';
          ctx.textAlign = 'center';
          ctx.fillText('GAZE ESTÉRIL 10x10', 0, 4);
        }

        ctx.restore();
      }

      // ── Layer 3: Bandage Wrap Layers (Robert Jones Compression) ──
      if (currentStep === 'bandage' || currentStep === 'finished') {
        ctx.save();
        const maxWraps = 4;
        const currentCount = Math.min(maxWraps, bandageWraps);

        for (let wrap = 1; wrap <= currentCount; wrap++) {
          const wrapWidth = 260 + wrap * 12;
          const wrapHeight = 85 + wrap * 10;
          ctx.fillStyle = wrap % 2 === 0 ? '#E0E7FF' : '#C7D2FE';
          ctx.beginPath();
          if (typeof ctx.roundRect === 'function') {
            ctx.roundRect(400 - wrapWidth / 2, 250 - wrapHeight / 2, wrapWidth, wrapHeight, 14);
          } else {
            ctx.rect(400 - wrapWidth / 2, 250 - wrapHeight / 2, wrapWidth, wrapHeight);
          }
          ctx.fill();
          ctx.strokeStyle = '#6366F1';
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // When all wraps complete, draw medical tape clips
        if (currentStep === 'finished' || bandageWraps >= 4) {
          ctx.fillStyle = '#FEF08A';
          ctx.strokeStyle = '#CA8A04';
          ctx.lineWidth = 1.5;
          ctx.fillRect(270, 195, 20, 110);
          ctx.strokeRect(270, 195, 20, 110);
          ctx.fillRect(510, 195, 20, 110);
          ctx.strokeRect(510, 195, 20, 110);
        }

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [currentStep, isGauzePlaced, bandageWraps]);

  const applyOintmentAt = (x: number, y: number) => {
    // Check if within suture line bounds (y ~ 250, x between 240 and 560)
    if (Math.abs(y - 250) < 35 && x >= 240 && x <= 560) {
      ointmentPointsRef.current.push({ x, y });
      soundManager.playTone(500, 0.02, 0.01);

      const coverage = Math.min(100, Math.floor((ointmentPointsRef.current.length / 45) * 100));
      setOintmentCoverage(coverage);

      if (coverage >= 100) {
        soundManager.playSuccess();
        const tid = window.setTimeout(() => {
          setCurrentStep('gauze');
        }, 600);
        timeoutIdsRef.current.push(tid);
      }
    }
  };

  // Step 3: Bandage Tension Wrap Action
  const applyBandageWrap = useCallback(() => {
    if (currentStep !== 'bandage') return;

    const tension = bandageTensionRef.current;
    const isIdeal = tension >= 70 && tension <= 90;

    if (isIdeal) {
      soundManager.playSuccess();
      setWrapFeedback('TENSÃO IDEAL!');
    } else if (tension > 90) {
      // Over-tightened tourniquet effect!
      soundManager.playError();
      if (onVitalsDrainRef.current) onVitalsDrainRef.current(10);
      setWrapFeedback('ISQUEMIA! TENSÃO EXCESSIVA');
    } else {
      soundManager.playTone(340, 0.12, 0.06);
      setWrapFeedback('FROUXO! REFORÇANDO COMPRESSÃO');
    }

    const nextWraps = bandageWraps + 1;
    setBandageWraps(nextWraps);

    if (nextWraps >= 4) {
      soundManager.playSuccess();
      const tid = window.setTimeout(() => {
        setCurrentStep('finished');
      }, 400);
      timeoutIdsRef.current.push(tid);

      const emitTid = window.setTimeout(() => {
        finishDressing();
      }, 3000);
      timeoutIdsRef.current.push(emitTid);
    }
  }, [currentStep, bandageWraps, finishDressing]);

  // Spacebar support for wrapping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && currentStep === 'bandage') {
        e.preventDefault();
        applyBandageWrap();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep, applyBandageWrap]);

  // Unified Pointer Handlers for Ointment, Gauze & Bandage
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.setPointerCapture(e.pointerId);

    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((e.clientY - rect.top) / rect.height) * canvas.height;

    if (currentStep === 'ointment') {
      applyOintmentAt(x, y);
    } else if (currentStep === 'gauze' && !isGauzePlaced) {
      if (Math.hypot(x - gauzePosRef.current.x, y - gauzePosRef.current.y) < 100) {
        isDraggingGauzeRef.current = true;
        soundManager.playClick();
      }
    } else if (currentStep === 'bandage') {
      applyBandageWrap();
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((e.clientY - rect.top) / rect.height) * canvas.height;

    if (currentStep === 'ointment' && e.buttons === 1) {
      applyOintmentAt(x, y);
    } else if (currentStep === 'gauze' && isDraggingGauzeRef.current) {
      gauzePosRef.current = { x, y };
      setGauzePos({ x, y });
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas && canvas.hasPointerCapture(e.pointerId)) {
      canvas.releasePointerCapture(e.pointerId);
    }

    if (currentStep === 'gauze' && isDraggingGauzeRef.current) {
      isDraggingGauzeRef.current = false;
      const cur = gauzePosRef.current;
      // Snapping tolerance: within 60px in X and 40px in Y of center (400, 250)
      if (Math.abs(cur.x - 400) < 60 && Math.abs(cur.y - 250) < 40) {
        soundManager.playSuccess();
        gauzePosRef.current = { x: 400, y: 250 };
        setGauzePos({ x: 400, y: 250 });
        setIsGauzePlaced(true);
        const tid = window.setTimeout(() => {
          setCurrentStep('bandage');
        }, 500);
        timeoutIdsRef.current.push(tid);
      }
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#050A08] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative select-none">
      {/* HUD Header */}
      <div className="bg-slate-900/90 p-4 flex justify-between items-center border-b border-slate-800 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-950 border border-indigo-500/40 rounded-xl">
            <ShieldCheck className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <h3 className="font-extrabold text-white text-sm uppercase tracking-wider flex items-center gap-2">
              Curativo Estéril e Imobilização Externa
              <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-500/30">
                Pós-Operatório
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              {currentStep === 'ointment'
                ? 'Aplique pomada antimicrobiana e cicatrizante ao longo de toda a ferida cirúrgica.'
                : currentStep === 'gauze'
                ? 'Arraste e posicione a compressa de gaze estéril sobre a ferida protegida.'
                : 'Enrole a bandagem compressiva aplicando tensão controlada para estabilização sem isquemia.'}
            </p>
          </div>
        </div>

        {/* Step Indicator Badges */}
        <div className="flex gap-4">
          <div className="text-right">
            <div className="text-[10px] text-slate-400 font-mono mb-1">FASE ATUAL</div>
            <div className="text-xs font-mono font-bold text-indigo-400">
              {currentStep === 'ointment'
                ? '1. Pomada (100%)'
                : currentStep === 'gauze'
                ? '2. Gaze Estéril'
                : currentStep === 'bandage'
                ? `3. Bandagem (${bandageWraps}/4)`
                : 'Concluído'}
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Area */}
      <div className="flex-1 relative cursor-crosshair flex items-center justify-center p-2 bg-[#050A08]">
        <canvas
          ref={canvasRef}
          width={800}
          height={500}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          style={{ touchAction: 'none' }}
          className="w-full h-full object-contain rounded-xl border border-slate-800 shadow-inner"
        />

        {/* Phase 1: Ointment Indicator Overlay */}
        {currentStep === 'ointment' && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-950/85 backdrop-blur-md border border-slate-800 px-6 py-2.5 rounded-2xl flex items-center gap-4 shadow-2xl pointer-events-none z-20">
            <span className="text-xs font-bold text-slate-300">
              Clique e arraste sobre os pontos de sutura para cobrir com pomada:
            </span>
            <div className="w-32 h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div
                className="h-full bg-yellow-400 transition-all duration-75"
                style={{ width: `${ointmentCoverage}%` }}
              />
            </div>
            <span className="text-xs font-mono text-yellow-300 font-bold">{ointmentCoverage}%</span>
          </div>
        )}

        {/* Phase 2: Gauze Placement Overlay */}
        {currentStep === 'gauze' && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-950/85 backdrop-blur-md border border-slate-800 px-6 py-2.5 rounded-2xl shadow-2xl pointer-events-none z-20">
            <span className="text-xs font-bold text-slate-300">
              Arraste a compressa de gaze sobre a linha de sutura demarcada até o encaixe.
            </span>
          </div>
        )}

        {/* Phase 3: Bandage Tension & Wrap Overlay */}
        {currentStep === 'bandage' && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 bg-slate-950/95 backdrop-blur-md border border-slate-700/80 px-4 py-2.5 rounded-2xl shadow-2xl w-[92%] max-w-sm z-30 pointer-events-auto">
            <div className="w-full flex justify-between items-center text-xs font-bold">
              <span className="text-slate-200 flex items-center gap-2">
                <span>Tensão da Atadura</span>
                <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-500/30">
                  Volta {bandageWraps + 1} de 4
                </span>
              </span>
              <span
                className={`font-mono font-black text-sm ${
                  bandageTension >= 70 && bandageTension <= 90
                    ? 'text-emerald-400'
                    : bandageTension > 90
                    ? 'text-rose-400'
                    : 'text-amber-400'
                }`}
              >
                {Math.round(bandageTension)}%
              </span>
            </div>

            {/* Dynamic Tension Bar */}
            <div className="w-full h-3.5 bg-slate-900 rounded-full overflow-hidden relative border border-slate-700 shadow-inner">
              <div className="absolute left-0 top-0 bottom-0 w-[70%] bg-amber-500/20" />
              <div className="absolute left-[70%] top-0 bottom-0 w-[20%] bg-emerald-500/50 border-x-2 border-emerald-400" />
              <div className="absolute right-0 top-0 bottom-0 w-[10%] bg-rose-600/50" />
              <div
                className="absolute top-0 bottom-0 w-2.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] rounded-full transition-none"
                style={{ left: `calc(${bandageTension}% - 5px)` }}
              />
            </div>

            <div className="w-full flex justify-between text-[9px] font-mono tracking-tight">
              <span className="text-amber-400/80">FROUXO (&lt;70%)</span>
              <span className="text-emerald-400 font-black">IDEAL (70-90%)</span>
              <span className="text-rose-400 font-bold">ISQUEMIA (&gt;90%)</span>
            </div>

            {/* Feedback notification if recently wrapped */}
            {wrapFeedback && (
              <div
                className={`text-[10px] font-bold text-center -my-0.5 ${
                  wrapFeedback.includes('IDEAL')
                    ? 'text-emerald-400'
                    : wrapFeedback.includes('ISQUEMIA')
                    ? 'text-rose-400'
                    : 'text-amber-400'
                }`}
              >
                {wrapFeedback}
              </div>
            )}

            {/* Wrap Action Button */}
            <button
              type="button"
              onClick={applyBandageWrap}
              className={`w-full py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95 ${
                bandageTension >= 70 && bandageTension <= 90
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/30 ring-2 ring-emerald-400/50 animate-pulse'
                  : bandageTension > 90
                  ? 'bg-rose-700 hover:bg-rose-600 text-white shadow-rose-900/30'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20'
              }`}
            >
              <span>APLICAR VOLTA ({bandageWraps + 1}/4)</span>
              <span className="text-[10px] opacity-80 font-normal normal-case">(Espaço ou Clique)</span>
            </button>
          </div>
        )}

        {/* Completion Modal */}
        <AnimatePresence>
          {currentStep === 'finished' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center gap-3 z-30 rounded-xl pointer-events-auto p-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-black text-emerald-400 uppercase tracking-wider">
                Curativo Concluído!
              </h3>
              <p className="text-slate-300 text-xs max-w-sm text-center">
                Ferida operatória protegida com antissepsia tópica, cobertura estéril e imobilização biomecânica sem garroteamento vascular.
              </p>

              <button
                type="button"
                onClick={finishDressing}
                className="mt-4 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-950/50 cursor-pointer pointer-events-auto transition-all active:scale-95"
              >
                <span>Concluir Procedimento</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
