import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Flame, Sparkles, AlertTriangle, RotateCcw, ArrowRight } from 'lucide-react';
import type { SurgicalMinigameProps } from '../../../types';
import { soundManager } from '../../../utils/sound';

export const BoneDrillMinigame: React.FC<SurgicalMinigameProps> = ({
  stepId,
  executionToken,
  onComplete,
  onCancel: _onCancel,
  onVitalsDrain,
  unlockedUpgrades = [],
}) => {
  const hasCoolingUpgrade = unlockedUpgrades.includes('drill_cooling');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [isDone, setIsDone] = useState(false);
  const [passedStatus, setPassedStatus] = useState<boolean | null>(null);
  const [damage, setDamage] = useState(0);
  
  // Game state
  const timeStart = useRef(Date.now());
  const requestRef = useRef<number>(0);
  
  const depth = useRef(0);
  const heat = useRef(0);
  const isNecrosing = useRef(false);

  const isDrillingRef = useRef(false);
  const isDoneRef = useRef(false);
  const damageRef = useRef(0);
  const timeoutIdsRef = useRef<number[]>([]);

  const onCompleteRef = useRef(onComplete);
  const onVitalsDrainRef = useRef(onVitalsDrain);
  useEffect(() => {
    onCompleteRef.current = onComplete;
    onVitalsDrainRef.current = onVitalsDrain;
  }, [onComplete, onVitalsDrain]);

  const finishProcedure = useCallback((success: boolean) => {
    const timeTaken = Math.round((Date.now() - timeStart.current) / 1000);
    const finalDmg = Math.round(damageRef.current);
    const accuracy = Math.max(0, 1 - (finalDmg / 100));
    const cb = onCompleteRef.current as any;
    if (typeof cb === 'function') {
      cb({
        stepId: stepId || '',
        executionToken: executionToken || '',
        result: success ? 'success' : 'failure',
        accuracy,
        damage: finalDmg,
        timeTaken,
      });
    }
  }, [stepId, executionToken]);

  const handleRetry = () => {
    timeoutIdsRef.current.forEach(id => clearTimeout(id));
    timeoutIdsRef.current = [];
    depth.current = 0;
    heat.current = 0;
    damageRef.current = 0;
    setDamage(0);
    isNecrosing.current = false;
    isDrillingRef.current = false;
    isDoneRef.current = false;
    setIsDone(false);
    setPassedStatus(null);
    timeStart.current = Date.now();
    soundManager.playClick();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    soundManager.playClick(); 

    const render = () => {
      // Logic updates (Balanced: requires intermittent drilling to avoid thermal necrosis)
      if (isDrillingRef.current && depth.current < 100 && !isDoneRef.current) {
        depth.current += 0.22; // ~7.5 seconds of active drilling needed
        heat.current += 1.20;  // 25% faster heating: requires pulsed drilling to avoid overheating
      } else {
        // Cooling down between drill passes (irrigation/pause)
        // drill_cooling upgrade cools 35% faster (0.50 * 1.35 = 0.74, without upgrade cools at 0.50)
        heat.current = Math.max(0, heat.current - (hasCoolingUpgrade ? 0.74 : 0.50)); 
      }

      // Check thermal necrosis
      if (heat.current >= 100) {
        if (!isNecrosing.current) {
          isNecrosing.current = true;
          soundManager.playError();
        }
        damageRef.current += 0.5;
        setDamage(damageRef.current);
        if (onVitalsDrainRef.current) {
          onVitalsDrainRef.current(0.5);
        }
        heat.current = 100; // Cap

        // Immediate interruption when necrosis exceeds the 35% biological threshold
        if (damageRef.current > 35 && !isDoneRef.current) {
          isDoneRef.current = true;
          isDrillingRef.current = false;
          setIsDone(true);
          setPassedStatus(false);
          soundManager.playError();
        }
      } else {
        isNecrosing.current = false;
      }

      // Check completion when reaching full depth without exceeding damage threshold
      if (depth.current >= 100 && !isDoneRef.current) {
        isDoneRef.current = true;
        isDrillingRef.current = false;
        const finalDmg = Math.round(damageRef.current);
        const passed = finalDmg <= 35; // Strict osteonecrosis threshold (<= 35%)
        setIsDone(true);
        setPassedStatus(passed);
        
        if (passed) {
          soundManager.playSuccess();
          const tid = window.setTimeout(() => {
            finishProcedure(true);
          }, 3000);
          timeoutIdsRef.current.push(tid);
        } else {
          soundManager.playError();
        }
      }

      // Rendering
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Bone cross-section
      const boneY = 200;
      const boneHeight = 300;
      const boneWidth = 600;
      const boneX = (canvas.width - boneWidth) / 2;
      
function drawRoundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number | number[]) {
  if (typeof ctx.roundRect === 'function') {
    try {
      ctx.roundRect(x, y, w, h, r);
      return;
    } catch { /* fallback */ }
  }
  const radius = typeof r === 'number' ? r : (Array.isArray(r) ? r[0] || 0 : 0);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

      // Bone outer cortex
      ctx.fillStyle = '#f3f4f6';
      drawRoundRect(ctx, boneX, boneY, boneWidth, boneHeight, 20);
      ctx.fill();
      
      // Bone marrow/cancellous bone
      ctx.fillStyle = '#fee2e2';
      drawRoundRect(ctx, boneX + 20, boneY + 20, boneWidth - 40, boneHeight - 40, 10);
      ctx.fill();
      
      // Cancellous bone texture (spongy)
      ctx.fillStyle = '#fca5a5';
      for (let i = 0; i < 300; i++) {
         const x = boneX + 20 + (Math.sin(i * 11) * 0.5 + 0.5) * (boneWidth - 40);
         const y = boneY + 20 + (Math.cos(i * 13) * 0.5 + 0.5) * (boneHeight - 40);
         ctx.beginPath();
         ctx.arc(x, y, 2 + (i%3), 0, Math.PI * 2);
         ctx.fill();
      }

      // Draw Heat map around drill area
      const drillX = canvas.width / 2;
      const drillYStart = boneY;
      const drillDepthPx = (depth.current / 100) * boneHeight;
      const currentDrillTip = drillYStart + drillDepthPx;
      
      if (heat.current > 0) {
        ctx.save();
        ctx.globalCompositeOperation = 'multiply';
        
        let r = 255;
        let g = 255 - (heat.current * 2.55);
        let b = 255 - (heat.current * 2.55);
        if (heat.current >= 100) {
           r = 50; g = 0; b = 0; // Necrosis is dark
        }
        
        const heatRadius = 20 + (heat.current * 1.5);
        const heatGrad = ctx.createRadialGradient(
          drillX, currentDrillTip, 0,
          drillX, currentDrillTip, heatRadius
        );
        heatGrad.addColorStop(0, 'rgba(' + r + ', ' + g + ', ' + b + ', 0.8)');
        heatGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = heatGrad;
        ctx.beginPath();
        ctx.arc(drillX, currentDrillTip, heatRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      
      // Draw the hole already drilled
      ctx.fillStyle = '#111827';
      ctx.fillRect(drillX - 10, drillYStart, 20, drillDepthPx);
      
      // Draw the drill bit
      const drillBitY = isDoneRef.current ? drillYStart - 150 : currentDrillTip - 150;
      
      ctx.fillStyle = '#9ca3af'; // metallic
      ctx.fillRect(drillX - 8, drillBitY, 16, 150); // shaft
      
      // Drill tip (pointy)
      ctx.beginPath();
      ctx.moveTo(drillX - 8, drillBitY + 150);
      ctx.lineTo(drillX + 8, drillBitY + 150);
      ctx.lineTo(drillX, drillBitY + 150 + 15);
      ctx.fill();
      
      // Drill threads (animated if drilling)
      ctx.strokeStyle = '#4b5563';
      ctx.lineWidth = 3;
      const threadOffset = isDrillingRef.current ? (Date.now() % 100) / 10 : 0;
      
      ctx.beginPath();
      for(let i = 0; i < 15; i++) {
         const yPos = drillBitY + (i * 10) + threadOffset;
         if (yPos < drillBitY + 150) {
             ctx.moveTo(drillX - 8, yPos);
             ctx.lineTo(drillX + 8, yPos + 5);
         }
      }
      ctx.stroke();

      // UI HUD on Canvas
      const barX = 50;
      const barY = 100;
      const barW = 30;
      const barH = 400;
      
      ctx.fillStyle = '#334155';
      ctx.fillRect(barX, barY, barW, barH);
      
      const heatH = (heat.current / 100) * barH;
      let heatColor = '#22c55e'; // Green
      if (heat.current > 50) heatColor = '#eab308'; // Yellow
      if (heat.current > 80) heatColor = '#ef4444'; // Red
      
      ctx.fillStyle = heatColor;
      ctx.fillRect(barX, barY + barH - heatH, barW, heatH);
      
      // Depth Bar
      const depthBarX = canvas.width - 50 - barW;
      
      ctx.fillStyle = '#334155';
      ctx.fillRect(depthBarX, barY, barW, barH);
      
      const depthH = (depth.current / 100) * barH;
      ctx.fillStyle = '#3b82f6'; // Blue
      ctx.fillRect(depthBarX, barY, barW, depthH);

      // Labels
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 14px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('TEMP', barX + 15, barY - 10);
      ctx.fillText('PROF', depthBarX + 15, barY - 10);
      
      // Necrosis warning
      if (isNecrosing.current) {
        ctx.fillStyle = 'rgba(220, 38, 38, 0.3)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      requestRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      console.log('[Cleanup] BoneDrillMinigame unmounted, RAF and timeouts cleared');
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      timeoutIdsRef.current.forEach(id => clearTimeout(id));
      timeoutIdsRef.current = [];
    };
  }, [hasCoolingUpgrade, finishProcedure]);

  const handlePointerDown = () => {
    if (!isDoneRef.current) {
      isDrillingRef.current = true;
    }
  };

  const handlePointerUp = () => {
    isDrillingRef.current = false;
  };

  return (
    <div className="flex flex-col h-full bg-[#050505] rounded-2xl border border-slate-800 overflow-hidden text-slate-200 shadow-2xl relative select-none">
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-10 pointer-events-none">
        <div>
          <h3 className="text-cyan-500 font-bold font-mono flex items-center gap-2 drop-shadow-md">
            PERFURAÇÃO ÓSSEA
          </h3>
          <p className="text-cyan-700 font-mono text-xs mt-1">BROCA ORTOPÉDICA 3.5mm</p>
          {hasCoolingUpgrade && (
            <div className="mt-1.5 px-2.5 py-0.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-bold flex items-center gap-1.5 shadow-sm inline-flex">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Motor Refrigerado (+35% Dissipação Térmica)</span>
            </div>
          )}
        </div>
        
        <div className="text-right">
          <div className="bg-slate-900/80 border border-slate-700 px-3 py-1 rounded-md mb-2">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Necrose / Dano (Máx 35%)</span>
            <span className={`font-mono font-bold ${damage > 35 ? 'text-rose-500 animate-pulse' : damage > 20 ? 'text-amber-400' : 'text-emerald-400'}`}>
              {Math.floor(damage)}%
            </span>
          </div>
        </div>
      </div>

      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className={`w-full h-full object-contain cursor-crosshair ${isDone ? 'opacity-50 grayscale transition-all duration-700' : ''}`}
        style={{ touchAction: 'none' }}
      />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/80 border border-slate-700 px-6 py-3 rounded-full pointer-events-none backdrop-blur-sm z-10">
        <p className="text-sm font-bold text-slate-300">
          {!isDone ? "SEGURE O CLIQUE para perfurar. PERFURE EM PULSOS PARA EVITAR ULTRAPASSAR 35% DE DANO!" :
           (passedStatus ? "Perfuração concluída com sucesso." : "Perfuração falhou por osteonecrose térmica.")}
        </p>
      </div>

      <AnimatePresence>
        {isDone && passedStatus === true && (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center z-20 bg-black/60 backdrop-blur-sm p-4 pointer-events-auto"
          >
            <div className="bg-slate-900 border border-emerald-500/60 p-8 rounded-2xl flex flex-col items-center max-w-md w-full text-center shadow-2xl shadow-emerald-950/50">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-4 text-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-black text-emerald-400 uppercase tracking-wider">Perfuração Concluída!</h2>
              <p className="text-slate-300 text-sm mt-2">
                Canal ósseo preparado com precisão e integridade celular preservada.
              </p>
              <div className="mt-4 p-3 rounded-lg bg-slate-950/80 border border-slate-800 w-full flex justify-around items-center">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Dano Tecidual</span>
                  <span className="text-emerald-400 font-bold font-mono text-base">{Math.floor(damage)}%</span>
                </div>
                <div className="w-px h-8 bg-slate-800" />
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Limite Permitido</span>
                  <span className="text-slate-400 font-bold font-mono text-base">≤ 35%</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => finishProcedure(true)}
                className="mt-6 w-full py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40 transition-all cursor-pointer"
              >
                <span>Concluir Etapa</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {isDone && passedStatus === false && (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center z-20 bg-black/75 backdrop-blur-sm p-4 pointer-events-auto"
          >
            <div className="bg-slate-900 border border-rose-500/80 p-8 rounded-2xl flex flex-col items-center max-w-md w-full text-center shadow-2xl shadow-rose-950/60">
              <div className="w-16 h-16 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center mb-4 text-rose-400 animate-pulse">
                <AlertTriangle className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-black text-rose-500 uppercase tracking-wider">Osteonecrose Térmica Severa</h2>
              <p className="text-rose-200 text-sm mt-2">
                O superaquecimento excessivo causou desnaturação proteica e morte celular acima da tolerância biológica de 35%. Os implantes não teriam fixação óssea segura.
              </p>
              <div className="mt-4 p-3 rounded-lg bg-rose-950/40 border border-rose-800/60 w-full flex justify-around items-center">
                <div>
                  <span className="text-[10px] text-rose-300 uppercase tracking-wider block">Dano Térmico</span>
                  <span className="text-rose-400 font-bold font-mono text-base">{Math.floor(damage)}%</span>
                </div>
                <div className="w-px h-8 bg-rose-900/60" />
                <div>
                  <span className="text-[10px] text-rose-300 uppercase tracking-wider block">Tolerância Máx.</span>
                  <span className="text-rose-400 font-bold font-mono text-base">35%</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full">
                <button
                  type="button"
                  onClick={handleRetry}
                  className="flex-1 py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-amber-900/40 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Refazer Perfuração</span>
                </button>
                <button
                  type="button"
                  onClick={() => finishProcedure(false)}
                  className="py-3 px-4 rounded-xl bg-rose-950 hover:bg-rose-900 border border-rose-800 text-rose-300 text-xs font-semibold flex items-center justify-center transition-all cursor-pointer"
                >
                  <span>Aceitar Falha</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {isNecrosing.current && !isDone && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none z-10 shadow-[inset_0_0_100px_rgba(220,38,38,0.5)] border-4 border-rose-600/50 flex items-center justify-center"
          >
             <div className="text-rose-500 flex flex-col items-center bg-black/80 p-6 rounded-2xl border border-rose-500">
                <Flame className="w-16 h-16 mb-2 animate-bounce" />
                <span className="font-black text-3xl uppercase tracking-widest text-center">
                  NECROSE TÉRMICA<br/>
                  <span className="text-sm font-bold text-rose-300">Resfrie a broca imediatamente!</span>
                </span>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
