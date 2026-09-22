import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crosshair, CheckCircle2, Video, AlertTriangle, RotateCcw, ArrowRight, Sparkles } from 'lucide-react';
import type { SurgicalMinigameProps } from '../../../types';
import { soundManager } from '../../../utils/sound';

export const EndoscopyMinigame: React.FC<SurgicalMinigameProps> = ({
  stepId,
  executionToken,
  onComplete,
  onCancel: _onCancel,
  onVitalsDrain,
  unlockedUpgrades = [],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isFound, setIsFound] = useState(false);
  const [isExtracted, setIsExtracted] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [isTrauma, setIsTrauma] = useState(false);
  const [damage, setDamage] = useState(0);

  const hasXenonUpgrade = unlockedUpgrades.includes('upg_endoscope_xenon');

  const damageRef = useRef(0);
  const isFoundRef = useRef(false);
  const isExtractedRef = useRef(false);
  const isFailedRef = useRef(false);
  const intervalIdsRef = useRef<number[]>([]);
  const timeoutIdsRef = useRef<number[]>([]);
  const activeHandleUpRef = useRef<(() => void) | null>(null);

  const onCompleteRef = useRef(onComplete);
  const onVitalsDrainRef = useRef(onVitalsDrain);
  useEffect(() => {
    onCompleteRef.current = onComplete;
    onVitalsDrainRef.current = onVitalsDrain;
  }, [onComplete, onVitalsDrain]);

  // Game state refs
  const mousePos = useRef({ x: 100, y: 100 });
  const timeStart = useRef(Date.now());
  const extractionProgress = useRef(0);
  const requestRef = useRef<number>(0);
  const isBleedingRef = useRef(false);
  const bloodSpots = useRef<{ x: number; y: number; radius: number; alpha: number }[]>([]);

  // The winding path
  const pathRef = useRef<Path2D | null>(null);
  const TARGET_POS = { x: 650, y: 480 };

  useEffect(() => {
    // Create the winding path for the esophagus/stomach
    const p = new Path2D();
    p.moveTo(100, 100);
    p.bezierCurveTo(400, 50, 200, 400, 400, 300);
    p.bezierCurveTo(600, 200, 500, 500, TARGET_POS.x, TARGET_POS.y);
    pathRef.current = p;
  }, []);

  const finishProcedure = useCallback(() => {
    const timeTaken = Math.round((Date.now() - timeStart.current) / 1000);
    const finalDmg = Math.round(damageRef.current);
    const accuracy = Math.max(0.65, 1 - finalDmg / 100);
    const cb = onCompleteRef.current as any;
    if (typeof cb === 'function') {
      cb({
        stepId: stepId || '',
        executionToken: executionToken || '',
        result: finalDmg <= 35 ? 'success' : 'failure',
        accuracy,
        damage: finalDmg,
        timeTaken,
      });
    }
  }, [stepId, executionToken]);

  const handleRetry = useCallback(() => {
    soundManager.playClick();
    damageRef.current = 0;
    setDamage(0);
    isFailedRef.current = false;
    setIsFailed(false);
    isFoundRef.current = false;
    setIsFound(false);
    isExtractedRef.current = false;
    setIsExtracted(false);
    setIsTrauma(false);
    isBleedingRef.current = false;
    mousePos.current = { x: 100, y: 100 };
    extractionProgress.current = 0;
    bloodSpots.current = [];
    timeStart.current = Date.now();
  }, []);

  // Update mouse position with precise canvas-to-client scale mapping
  const updatePointerPos = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || isExtractedRef.current || isFailedRef.current) return;
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const rawX = (e.clientX - rect.left) * (canvas.width / rect.width);
    const rawY = (e.clientY - rect.top) * (canvas.height / rect.height);

    mousePos.current = {
      x: Math.max(15, Math.min(canvas.width - 15, rawX)),
      y: Math.max(15, Math.min(canvas.height - 15, rawY)),
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    soundManager.playClick();

    // Reuse mask canvas to avoid allocation inside 60FPS render loop
    const maskCanvas = document.createElement('canvas');
    maskCanvas.width = canvas.width;
    maskCanvas.height = canvas.height;
    const mctx = maskCanvas.getContext('2d');

    const render = () => {
      if (isFailedRef.current) {
        requestRef.current = requestAnimationFrame(render);
        return;
      }

      // 1. Draw the pink mucosa (background)
      ctx.fillStyle = '#b94060';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw texture on the mucosa
      ctx.fillStyle = '#9e324e';
      for (let i = 0; i < 200; i++) {
        const x = (Math.sin(i * 12.34) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(i * 45.67) * 0.5 + 0.5) * canvas.height;
        ctx.beginPath();
        ctx.arc(x, y, 10 + (i % 20), 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Check collision with walls using the Path stroke
      let currentlyBleeding = false;
      const captureRadius = hasXenonUpgrade ? 55 : 40;

      if (pathRef.current && !isExtractedRef.current) {
        ctx.lineWidth = 140; // Corridor width
        const isInside = ctx.isPointInStroke(pathRef.current, mousePos.current.x, mousePos.current.y);

        // Start point immunity
        const distFromStart = Math.hypot(100 - mousePos.current.x, 100 - mousePos.current.y);

        if (!isInside && distFromStart > 50) {
          currentlyBleeding = true;
          if (Math.random() > 0.4) {
            bloodSpots.current.push({
              x: mousePos.current.x + (Math.random() - 0.5) * 35,
              y: mousePos.current.y + (Math.random() - 0.5) * 35,
              radius: 6 + Math.random() * 14,
              alpha: 0.95,
            });
          }
        }
      }

      // Sound & trauma feedback on state change
      if (currentlyBleeding && !isBleedingRef.current) {
        soundManager.playError();
        setIsTrauma(true);
      } else if (!currentlyBleeding && isBleedingRef.current) {
        setIsTrauma(false);
      }
      isBleedingRef.current = currentlyBleeding;

      // Real-time damage accumulation (~10% per second at 60 FPS)
      if (currentlyBleeding && !isFailedRef.current) {
        const rate = hasXenonUpgrade ? 0.12 : 0.17;
        damageRef.current += rate;
        if (onVitalsDrainRef.current) onVitalsDrainRef.current(0.25);

        // Periodically update React state for smooth HUD rendering
        if (Math.floor(damageRef.current * 2) !== Math.floor((damageRef.current - rate) * 2)) {
          setDamage(Math.min(100, Math.floor(damageRef.current)));
        }

        // Instant failure check: Perforation at > 35%
        if (damageRef.current > 35) {
          damageRef.current = Math.max(36, Math.floor(damageRef.current));
          setDamage(damageRef.current);
          isFailedRef.current = true;
          setIsFailed(true);
          soundManager.playError();
          if (onVitalsDrainRef.current) onVitalsDrainRef.current(15);
          if (activeHandleUpRef.current) {
            activeHandleUpRef.current();
          }
        }
      }

      // 3. Draw the dark corridor (the lumen)
      if (pathRef.current) {
        ctx.strokeStyle = '#2a0a13';
        ctx.lineWidth = 140;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke(pathRef.current);

        ctx.strokeStyle = '#18040a';
        ctx.lineWidth = 100;
        ctx.stroke(pathRef.current);
      }

      // 4. Draw blood spots
      for (let i = bloodSpots.current.length - 1; i >= 0; i--) {
        const spot = bloodSpots.current[i];
        ctx.beginPath();
        ctx.arc(spot.x, spot.y, spot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(140, 0, 10, ${spot.alpha})`;
        ctx.fill();
        spot.alpha -= 0.006;
        if (spot.alpha <= 0) {
          bloodSpots.current.splice(i, 1);
        }
      }

      // 5. Draw the target if close
      const distToTarget = Math.hypot(TARGET_POS.x - mousePos.current.x, TARGET_POS.y - mousePos.current.y);
      if (distToTarget < 170) {
        if (!isFoundRef.current) {
          isFoundRef.current = true;
          setIsFound(true);
        }

        ctx.save();
        ctx.translate(TARGET_POS.x, TARGET_POS.y);

        ctx.beginPath();
        ctx.arc(0, 0, 16, 0, Math.PI * 2);
        ctx.fillStyle = '#9ca3af';
        ctx.fill();
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = '#f3f4f6';
        ctx.stroke();

        if (!isExtractedRef.current) {
          ctx.beginPath();
          ctx.arc(0, 0, 32, 0, Math.PI * 2);
          ctx.strokeStyle = distToTarget < captureRadius ? '#10b981' : '#f59e0b';
          ctx.setLineDash([6, 6]);
          ctx.lineWidth = 3;
          ctx.stroke();
        }
        ctx.restore();
      } else {
        if (isFoundRef.current && !isExtractedRef.current) {
          isFoundRef.current = false;
          setIsFound(false);
        }
      }

      // 6. Draw extraction progress bar on target
      if (extractionProgress.current > 0 && !isExtractedRef.current) {
        ctx.fillStyle = '#10b981';
        ctx.fillRect(TARGET_POS.x - 25, TARGET_POS.y - 48, (extractionProgress.current / 100) * 50, 8);
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1;
        ctx.strokeRect(TARGET_POS.x - 25, TARGET_POS.y - 48, 50, 8);
      }

      // 7. Apply Spotlight Mask
      if (mctx) {
        const spotlightRadius = hasXenonUpgrade ? 210 : 160;
        mctx.fillStyle = 'black';
        mctx.fillRect(0, 0, canvas.width, canvas.height);

        mctx.globalCompositeOperation = 'destination-out';

        const gradient = mctx.createRadialGradient(
          mousePos.current.x,
          mousePos.current.y,
          40,
          mousePos.current.x,
          mousePos.current.y,
          spotlightRadius
        );
        gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
        gradient.addColorStop(0.8, 'rgba(0, 0, 0, 0.85)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        mctx.fillStyle = gradient;
        mctx.beginPath();
        mctx.arc(mousePos.current.x, mousePos.current.y, spotlightRadius, 0, Math.PI * 2);
        mctx.fill();

        mctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(maskCanvas, 0, 0);
      }

      // 8. Visual Reticle on Camera Center
      if (!isExtractedRef.current && !isFailedRef.current) {
        ctx.save();
        const mx = mousePos.current.x;
        const my = mousePos.current.y;
        const isAligned = distToTarget < captureRadius;

        // Reticle optic circle
        ctx.strokeStyle = currentlyBleeding ? '#f43f5e' : isAligned ? '#10b981' : 'rgba(16, 185, 129, 0.7)';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.arc(mx, my, isAligned ? 22 : 18, 0, Math.PI * 2);
        ctx.stroke();

        // Cross-ticks
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(mx - 26, my); ctx.lineTo(mx - 10, my);
        ctx.moveTo(mx + 10, my); ctx.lineTo(mx + 26, my);
        ctx.moveTo(mx, my - 26); ctx.lineTo(mx, my - 10);
        ctx.moveTo(mx, my + 10); ctx.lineTo(mx, my + 26);
        ctx.stroke();

        // Center dot
        ctx.fillStyle = currentlyBleeding ? '#f43f5e' : isAligned ? '#10b981' : '#34d399';
        ctx.beginPath();
        ctx.arc(mx, my, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Animated Forceps during extraction
        if (extractionProgress.current > 0) {
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2.5;
          const pinch = Math.min(14, (extractionProgress.current / 100) * 14);
          ctx.beginPath();
          ctx.moveTo(mx - 16 + pinch, my - 14); ctx.lineTo(mx, my);
          ctx.moveTo(mx + 16 - pinch, my - 14); ctx.lineTo(mx, my);
          ctx.stroke();
        }

        // Target locked text label
        if (isAligned) {
          ctx.fillStyle = '#10b981';
          ctx.font = 'bold 11px monospace';
          ctx.textAlign = 'center';
          ctx.fillText('PINÇA ALINHADA', mx, my + 36);
        }

        ctx.restore();
      }

      // 9. UI dust / noise
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      for (let i = 0; i < 25; i++) {
        ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
      }

      requestRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      intervalIdsRef.current.forEach((id) => clearInterval(id));
      intervalIdsRef.current = [];
      timeoutIdsRef.current.forEach((id) => clearTimeout(id));
      timeoutIdsRef.current = [];
      if (activeHandleUpRef.current) {
        document.removeEventListener('pointerup', activeHandleUpRef.current);
        activeHandleUpRef.current = null;
      }
    };
  }, [hasXenonUpgrade]);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isExtractedRef.current || isFailedRef.current) return;
    updatePointerPos(e);

    const captureRadius = hasXenonUpgrade ? 55 : 40;
    const distToTarget = Math.hypot(TARGET_POS.x - mousePos.current.x, TARGET_POS.y - mousePos.current.y);

    if (distToTarget < captureRadius) {
      soundManager.playClick();
      let progress = 0;
      const interval = window.setInterval(() => {
        progress += 5; // Takes about 2 seconds
        extractionProgress.current = progress;
        if (progress >= 100) {
          clearInterval(interval);
          isExtractedRef.current = true;
          setIsExtracted(true);
          soundManager.playSuccess();
          const tid = window.setTimeout(() => {
            finishProcedure();
          }, 1800);
          timeoutIdsRef.current.push(tid);
        }
      }, 100);
      intervalIdsRef.current.push(interval);

      const handleUp = () => {
        clearInterval(interval);
        extractionProgress.current = 0;
        if (activeHandleUpRef.current) {
          document.removeEventListener('pointerup', activeHandleUpRef.current);
          activeHandleUpRef.current = null;
        }
      };
      activeHandleUpRef.current = handleUp;
      document.addEventListener('pointerup', handleUp);
    } else {
      soundManager.playError();
      damageRef.current += 5;
      const newDmg = Math.min(100, Math.floor(damageRef.current));
      setDamage(newDmg);
      if (onVitalsDrainRef.current) onVitalsDrainRef.current(5);

      if (damageRef.current > 35) {
        isFailedRef.current = true;
        setIsFailed(true);
        soundManager.playError();
        if (onVitalsDrainRef.current) onVitalsDrainRef.current(15);
        if (activeHandleUpRef.current) activeHandleUpRef.current();
      }
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#050505] rounded-2xl border border-slate-800 overflow-hidden text-slate-200 shadow-2xl relative select-none">
      {/* Top HUD */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-10 pointer-events-none">
        <div>
          <h3 className="text-emerald-500 font-bold font-mono flex items-center gap-2 drop-shadow-md">
            <Video className="w-5 h-5" /> ENDOSCOPIA DIGESTIVA
          </h3>
          <div className="flex items-center gap-3 mt-1">
            <p className="text-emerald-700 font-mono text-xs">
              REC • {new Date().toISOString().split('T')[1].substring(0, 8)}
            </p>
            {hasXenonUpgrade && (
              <span className="text-[10px] font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/40 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" /> Óptica Xenon HD Ativa
              </span>
            )}
          </div>
        </div>

        <div className="text-right">
          {/* Bleeding / Lesion Meter */}
          <div className="bg-slate-900/90 border border-slate-700 px-3 py-1.5 rounded-xl mb-2 shadow-lg">
            <div className="flex justify-between items-center gap-3">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">
                Sangramento / Lesão
              </span>
              <span className="text-[9px] text-slate-500 font-mono">LIMITE 35%</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-28 h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                <div
                  className={`h-full transition-all duration-100 ${
                    damage > 25 ? 'bg-rose-500 animate-pulse' : damage > 15 ? 'bg-amber-400' : 'bg-emerald-400'
                  }`}
                  style={{ width: `${Math.min(100, (damage / 35) * 100)}%` }}
                />
              </div>
              <span
                className={`font-mono font-black text-xs ${
                  damage > 25 ? 'text-rose-400 animate-pulse' : damage > 15 ? 'text-amber-400' : 'text-emerald-400'
                }`}
              >
                {Math.floor(damage)}%
              </span>
            </div>
          </div>

          {isFound && !isExtracted && !isFailed && (
            <div className="animate-pulse flex items-center gap-2 text-amber-400 font-bold text-xs bg-amber-950/50 px-2.5 py-1 rounded-lg border border-amber-500/50">
              <Crosshair className="w-4 h-4" /> ALVO ENCONTRADO
            </div>
          )}
        </div>
      </div>

      {/* Main Canvas with 1:1 Scaled Pointer Events */}
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onPointerMove={updatePointerPos}
        onPointerDown={handlePointerDown}
        className={`w-full h-full object-contain cursor-crosshair ${
          isExtracted ? 'opacity-50 grayscale transition-all duration-1000' : ''
        }`}
        style={{ touchAction: 'none' }}
      />

      {/* Bottom Hint Bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/80 border border-slate-700 px-6 py-2.5 rounded-full pointer-events-none backdrop-blur-sm shadow-xl">
        <p className="text-xs font-bold text-slate-300">
          {isFailed
            ? 'Perfuração gástrica detectada! Clique em Refazer Endoscopia.'
            : !isFound
            ? 'Navegue pelo trato. NÃO TOQUE nas paredes cor-de-rosa!'
            : !isExtracted
            ? 'Alinhe a pinça cirúrgica, CLIQUE E SEGURE para realizar a extração!'
            : 'Extração bem-sucedida. Removendo endoscópio...'}
        </p>
      </div>

      {/* Overlays & Modals */}
      <AnimatePresence>
        {/* Mucosal Trauma Warning Border */}
        {isTrauma && !isExtracted && !isFailed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none z-20 shadow-[inset_0_0_90px_rgba(225,29,72,0.6)] border-4 border-rose-600/70"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-rose-500 flex flex-col items-center">
              <AlertTriangle className="w-12 h-12 mb-2 animate-bounce" />
              <span className="font-black text-xl uppercase tracking-widest bg-black/60 px-4 py-1.5 rounded-xl border border-rose-500/50">
                TRAUMA MUCOSAL!
              </span>
            </div>
          </motion.div>
        )}

        {/* Success Modal */}
        {isExtracted && !isFailed && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-30"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500 flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-black text-emerald-400 uppercase tracking-wider mb-1">
              Extração Concluída!
            </h2>
            <p className="text-xs text-emerald-300 font-mono mb-2">
              Sangramento Mucosal Controlado: {Math.floor(damage)}%
            </p>
            <p className="text-xs text-slate-300 max-w-sm mb-6">
              Corpo estranho apreendido e extraído com sucesso através de pinçamento endoscópico atraumático.
            </p>
            <button
              type="button"
              onClick={finishProcedure}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-950/50 cursor-pointer pointer-events-auto transition-all active:scale-95"
            >
              <span>Concluir Procedimento</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* Failure Modal: Gastric Perforation */}
        {isFailed && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-30"
          >
            <div className="w-16 h-16 rounded-full bg-rose-950/80 border border-rose-500 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(225,29,72,0.4)]">
              <AlertTriangle className="w-9 h-9 text-rose-400 animate-pulse" />
            </div>
            <h2 className="text-2xl font-black text-rose-500 uppercase tracking-wider mb-1">
              Perfuração Gástrica & Hemorragia
            </h2>
            <p className="text-xs text-rose-300 font-mono mb-2">
              Sangramento Mucosal Crítico: {Math.floor(damage)}% (Limite Seguro: 35%)
            </p>
            <p className="text-xs text-slate-300 max-w-sm mb-6">
              O atrito contínuo com a parede causou laceração grave da mucosa gástrica e hemorragia. O procedimento foi
              interrompido para prevenir choque hipovolêmico.
            </p>
            <button
              type="button"
              onClick={handleRetry}
              className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-rose-950/50 cursor-pointer pointer-events-auto transition-all active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Refazer Endoscopia</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
