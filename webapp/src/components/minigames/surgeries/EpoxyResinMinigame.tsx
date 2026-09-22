import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Flame, RefreshCcw, Sparkles } from 'lucide-react';
import type { SurgicalMinigameProps } from '../../../types';
import { soundManager } from '../../../utils/sound';

const CANVAS_W = 700;
const CANVAS_H = 400;
const T_AMBIENT = 28.0; // Initial ambient temperature (°C)
const MAX_SAFE_TEMP = 42.0; // Critical thermal threshold for tissue/epoxy damage (°C)
const COOLING_RATE = 2.2; // Passive cooling rate (°C/second towards T_AMBIENT during pauses)

export const EpoxyResinMinigame: React.FC<SurgicalMinigameProps> = ({
  stepId,
  executionToken,
  onComplete,
  onVitalsDrain,
  unlockedUpgrades = [],
}) => {
  const hasEpoxyUpgrade = unlockedUpgrades.includes('epoxy_quick_cure');
  const effectiveMaxSafeTemp = MAX_SAFE_TEMP + (hasEpoxyUpgrade ? 3.0 : 0.0);
  const effectiveCoolingRate = COOLING_RATE * (hasEpoxyUpgrade ? 1.35 : 1.0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const startTimeRef = useRef<number>(performance.now());
  
  // Physics State Refs
  const stateRef = useRef({
    temperature: T_AMBIENT,
    mixProgress: 0,
    iatrogenicDamage: 0,
    isMixing: false,
    cursorPos: { x: CANVAS_W / 2, y: CANVAS_H / 2 },
    lastAngle: 0,
    hasInitialAngle: false,
    smoothOmega: 0,
    particles: [] as { x: number, y: number, life: number, maxLife: number, type: 'resin' | 'heat' }[]
  });
  
  const lastTimeRef = useRef<number>(performance.now());
  const isPlayingRef = useRef<boolean>(true);
  
  // UI State
  const [mixLevel, setMixLevel] = useState(0);
  const [temperature, setTemperature] = useState(T_AMBIENT);
  const [failed, setFailed] = useState(false);
  const [completed, setCompleted] = useState(false);

  const onCompleteRef = useRef(onComplete);
  const onVitalsDrainRef = useRef(onVitalsDrain);
  useEffect(() => {
    onCompleteRef.current = onComplete;
    onVitalsDrainRef.current = onVitalsDrain;
  }, [onComplete, onVitalsDrain]);

  const timeoutIdsRef = useRef<number[]>([]);

  useEffect(() => {
    let animationId: number;
    
    const loop = (time: number) => {
      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = time;
      
      const s = stateRef.current;
      
      if (!isPlayingRef.current) return;
      
      // 1. Passive Thermal Dissipation (resfria suavemente quando em pausa ou sem mexer)
      if ((!s.isMixing || s.smoothOmega < 0.8) && s.temperature > T_AMBIENT) {
        s.temperature = Math.max(T_AMBIENT, s.temperature - effectiveCoolingRate * dt);
      }
      
      // 2. Active Mixing & Exothermic Reaction
      if (s.isMixing) {
         const dx = s.cursorPos.x - CANVAS_W / 2;
         const dy = s.cursorPos.y - CANVAS_H / 2;
         const distFromCenter = Math.hypot(dx, dy);

         // Mix anywhere comfortably inside or along the mixing bowl (10px to 145px)
         if (distFromCenter > 10 && distFromCenter < 145) {
            const currentAngle = Math.atan2(dy, dx);
            
            if (!s.hasInitialAngle) {
               s.lastAngle = currentAngle;
               s.hasInitialAngle = true;
            } else {
               let angleDiff = currentAngle - s.lastAngle;
               while (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
               while (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;
               
               const absAngle = Math.abs(angleDiff);

               // Discard sudden jumps/teleports across center (> 1.2 rad in a single frame)
               if (absAngle >= 0.005 && absAngle <= 1.2) {
                  const instantOmega = dt > 0 ? absAngle / dt : 0;
                  s.smoothOmega = s.smoothOmega * 0.75 + Math.min(25, instantOmega) * 0.25;

                  // Progress: ~10 to 12 full turns (11 turns = 100% homogenization)
                  s.mixProgress += absAngle * (100 / (11 * 2 * Math.PI));

                  // Natural exothermic heating: +1.2°C per full 2π rotation
                  s.temperature += absAngle * (1.2 / (2 * Math.PI));

                  // Thermal surge: triggers if user whips furiously without pausing (smoothOmega > 10.5 rad/s)
                  if (s.smoothOmega > 10.5) {
                     const excessSpeed = s.smoothOmega - 10.5;
                     const surge = Math.min(4.0, excessSpeed * 0.5) * dt;
                     s.temperature += surge;
                  }

                  // Spawn resin swirl particles
                  if (Math.random() > 0.35) {
                     s.particles.push({
                       x: s.cursorPos.x + (Math.random() - 0.5) * 25,
                       y: s.cursorPos.y + (Math.random() - 0.5) * 25,
                       life: 0.8,
                       maxLife: 0.8,
                       type: 'resin'
                     });
                  }
               }
               s.lastAngle = currentAngle;
            }
         }
      } else {
         s.hasInitialAngle = false;
         s.smoothOmega = Math.max(0, s.smoothOmega - 12 * dt);
      }
      
      // Heat particles if temp > 38.5 °C
      if (s.temperature > 38.5 && Math.random() > 0.5) {
         s.particles.push({
            x: CANVAS_W/2 + (Math.random() - 0.5) * 160,
            y: CANVAS_H/2 + (Math.random() - 0.5) * 160,
            life: 0.8,
            maxLife: 0.8,
            type: 'heat'
         });
      }
      
      // Win/Loss conditions
      if (s.mixProgress >= 100) {
         s.mixProgress = 100;
         if (isPlayingRef.current) {
             isPlayingRef.current = false;
             setCompleted(true);
             soundManager.playSuccess();
             const tid = window.setTimeout(() => {
                 const timeTaken = Math.round((performance.now() - startTimeRef.current) / 1000);
                 const accuracy = Math.max(0.6, 1.0 - (s.iatrogenicDamage / 100));
                 const cb = onCompleteRef.current as any;
                 if (typeof cb === 'function') {
                   cb({
                     stepId: stepId || '',
                     executionToken: executionToken || '',
                     result: accuracy >= 0.6 ? 'success' : 'failure',
                     accuracy,
                     damage: Math.round(s.iatrogenicDamage),
                     timeTaken,
                   });
                 }
             }, 1500);
             timeoutIdsRef.current.push(tid);
         }
      } else if (s.temperature >= effectiveMaxSafeTemp) {
         if (isPlayingRef.current) {
             isPlayingRef.current = false;
             setFailed(true);
             const burnDamage = 25; 
             s.iatrogenicDamage += burnDamage;
             if (onVitalsDrainRef.current) onVitalsDrainRef.current(burnDamage);
             soundManager.playError();
             
             // Reset after delay to allow student to try again with proper cadence
             const tid = window.setTimeout(() => {
                 s.temperature = T_AMBIENT;
                 s.mixProgress = 0;
                 s.particles = [];
                 s.smoothOmega = 0;
                 s.hasInitialAngle = false;
                 setFailed(false);
                 isPlayingRef.current = true;
             }, 2500);
             timeoutIdsRef.current.push(tid);
         }
      }
      
      // Sync UI state periodically
      setMixLevel(Math.min(100, Math.floor(s.mixProgress)));
      setTemperature(s.temperature);
      
      // Render Canvas
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (ctx && canvas) {
        ctx.fillStyle = '#0a0f0d';
        ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
        
        // Draw Mixing Bowl Boundary
        ctx.beginPath();
        ctx.arc(CANVAS_W/2, CANVAS_H/2, 120, 0, Math.PI*2);
        ctx.strokeStyle = '#2A3A35';
        ctx.lineWidth = 10;
        ctx.stroke();
        
        // Draw Resin Base (Yellow/White mixing to light cyan-gray)
        const mixRatio = s.mixProgress / 100;
        ctx.beginPath();
        ctx.arc(CANVAS_W/2, CANVAS_H/2, 115, 0, Math.PI*2);
        const r = Math.floor(200 - mixRatio * 50);
        const g = Math.floor(180 + mixRatio * 20);
        const b = Math.floor(50 + mixRatio * 150);
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fill();
        
        // Draw Unmixed Swirls
        ctx.save();
        ctx.translate(CANVAS_W/2, CANVAS_H/2);
        ctx.rotate(s.lastAngle);
        ctx.beginPath();
        ctx.arc(0, 0, 80, 0, Math.PI * (1 - mixRatio));
        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - mixRatio})`;
        ctx.lineWidth = 20;
        ctx.stroke();
        ctx.restore();

        // Heatmap overlay (> 40°C)
        if (s.temperature > 40.0) {
            const heatRatio = Math.max(0, Math.min(1, (s.temperature - 40.0) / (MAX_SAFE_TEMP - 40.0)));
            const grad = ctx.createRadialGradient(
               CANVAS_W/2, CANVAS_H/2, 0,
               CANVAS_W/2, CANVAS_H/2, 150
            );
            grad.addColorStop(0, `rgba(255, 50, 0, ${heatRatio * 0.6})`);
            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
        }

        // Draw particles
        for (let i = s.particles.length - 1; i >= 0; i--) {
           const p = s.particles[i];
           p.life -= dt;
           if (p.life <= 0) {
              s.particles.splice(i, 1);
              continue;
           }
           
           ctx.beginPath();
           ctx.arc(p.x, p.y, p.type === 'heat' ? 4 : 3, 0, Math.PI*2);
           ctx.fillStyle = p.type === 'heat' 
             ? `rgba(255, 100, 0, ${p.life / p.maxLife})`
             : `rgba(200, 200, 200, ${p.life / p.maxLife})`;
           ctx.fill();
           
           if (p.type === 'heat') p.y -= 30 * dt;
        }

        // Draw mixing stick
        if (s.isMixing) {
           ctx.beginPath();
           ctx.arc(s.cursorPos.x, s.cursorPos.y, 12, 0, Math.PI*2);
           ctx.fillStyle = '#C89A3C';
           ctx.fill();
           
           // Stick handle
           ctx.beginPath();
           ctx.moveTo(s.cursorPos.x, s.cursorPos.y);
           ctx.lineTo(s.cursorPos.x + 40, s.cursorPos.y - 100);
           ctx.strokeStyle = '#A87A1C';
           ctx.lineWidth = 8;
           ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);
    return () => {
      console.log('[Cleanup] EpoxyResinMinigame unmounted, RAF and timeouts cleared');
      cancelAnimationFrame(animationId);
      timeoutIdsRef.current.forEach(id => clearTimeout(id));
      timeoutIdsRef.current = [];
    };
  }, []);

  // Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!isPlayingRef.current) return;
    stateRef.current.isMixing = true;
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = (e.clientX - rect.left) * (CANVAS_W / rect.width);
    const cy = (e.clientY - rect.top) * (CANVAS_H / rect.height);
    stateRef.current.cursorPos = { x: cx, y: cy };
    stateRef.current.lastAngle = Math.atan2(cy - CANVAS_H / 2, cx - CANVAS_W / 2);
    stateRef.current.hasInitialAngle = true;
    stateRef.current.smoothOmega = 0;
    
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPlayingRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    stateRef.current.cursorPos = {
      x: (e.clientX - rect.left) * (CANVAS_W / rect.width),
      y: (e.clientY - rect.top) * (CANVAS_H / rect.height)
    };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    stateRef.current.isMixing = false;
    stateRef.current.hasInitialAngle = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  // Color thresholds for temperature display
  const isAmber = temperature >= 37.0 && temperature < 40.0;
  const isDanger = temperature >= 40.0;

  const tempBadgeBg = isDanger 
    ? 'bg-rose-950/60 border-rose-500 animate-pulse shadow-[0_0_15px_rgba(244,63,94,0.3)]' 
    : isAmber 
    ? 'bg-amber-950/60 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]' 
    : 'bg-[#0a0f0d] border-slate-700';

  const tempTextColor = isDanger 
    ? 'text-rose-400' 
    : isAmber 
    ? 'text-amber-400' 
    : 'text-emerald-400';

  return (
    <div className="flex flex-col w-full h-full bg-[#050A08] rounded-2xl border border-slate-700 overflow-hidden shadow-2xl relative">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800">
         <div>
             <h3 className="text-[#E8B84A] font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                <RefreshCcw className="w-5 h-5 text-[#C89A3C]"/> Preparo de Resina Epóxi
             </h3>
             <p className="text-xs text-slate-400 mt-1 max-w-lg">
                Homogeneização cadenciada: gire com ritmo fluido (~10 a 12 voltas). Movimentos frenéticos causam surto exotérmico (&gt; 40°C). Pause para esfriar se aquecer!
             </p>
             {hasEpoxyUpgrade && (
               <div className="mt-1.5 px-2.5 py-0.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-bold flex items-center gap-1.5 shadow-sm inline-flex">
                 <Sparkles className="w-3 h-3 text-amber-400" />
                 <span>Resina Acrílica Especializada (Tolerância Térmica Ampliada ±3°C)</span>
               </div>
             )}
          </div>
         <div className="flex gap-4">
            {/* Dynamic Color Temperature Badge */}
            <div className={`px-4 py-2 rounded-xl border transition-all ${tempBadgeBg}`}>
               <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Temperatura</span>
               <span className={`text-2xl font-mono font-black ${tempTextColor}`}>
                 {temperature.toFixed(1)}°C
               </span>
            </div>
            
            <div className="px-4 py-2 rounded-xl border bg-[#0a0f0d] border-slate-700">
               <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Mistura</span>
               <span className="text-2xl font-mono font-black text-[#E8B84A]">
                 {mixLevel}%
               </span>
            </div>
         </div>
      </div>
      
      {/* Failure Overlay */}
      {failed && (
        <div className="absolute inset-0 bg-red-900/90 z-20 flex flex-col items-center justify-center p-6 text-center">
            <Flame className="w-20 h-20 text-red-400 mb-4 animate-bounce" />
            <h2 className="text-3xl font-black text-red-100 uppercase tracking-widest mb-2">Queimadura Térmica!</h2>
            <p className="text-red-200 text-sm max-w-md">A reação exotérmica excedeu 42,0 °C, desnaturando a resina e causando necrose tecidual. Misture com calma (~10 a 12 voltas) e pause se aquecer!</p>
            <p className="text-red-300 text-xs mt-4 font-mono">Reiniciando preparo...</p>
        </div>
      )}

      {/* Rendering Canvas */}
      <div className="flex-1 relative bg-black cursor-crosshair">
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
         
         {/* Instruction */}
         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md border border-slate-700 px-4 py-2 rounded-xl pointer-events-none text-center">
            <p className="text-xs text-slate-300 font-medium">
              <span className="text-[#C89A3C] font-bold">MISTURA CADENCIADA (~10 a 12 voltas)</span>: gire em ritmo natural (1 volta/s). Pause para resfriar se aquecer!
            </p>
         </div>

         {completed && (
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             className="absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center gap-4 z-10"
           >
              <CheckCircle2 className="w-16 h-16 text-emerald-400" />
              <h2 className="text-2xl font-black text-emerald-400 tracking-wider">MISTURA HOMOGÊNEA</h2>
              <p className="text-emerald-200 text-sm">Resina estabilizada e pronta para aplicação cirúrgica.</p>
           </motion.div>
         )}
      </div>
    </div>
  );
};
