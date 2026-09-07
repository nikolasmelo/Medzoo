import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle2, Flame, RefreshCcw } from 'lucide-react';
import { soundManager } from '../../../utils/sound';

interface EpoxyResinMinigameProps {
  onComplete: (accuracy: number, damage: number) => void;
  onVitalsDrain?: (damage: number) => void;
}

const CANVAS_W = 700;
const CANVAS_H = 400;
const T_AMBIENT = 37.0; 
const MAX_SAFE_TEMP = 45.0;

export const EpoxyResinMinigame: React.FC<EpoxyResinMinigameProps> = ({ onComplete, onVitalsDrain }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Physics State Refs
  const stateRef = useRef({
    temperature: T_AMBIENT,
    mixProgress: 0,
    iatrogenicDamage: 0,
    isMixing: false,
    cursorPos: { x: CANVAS_W / 2, y: CANVAS_H / 2 },
    lastAngle: 0,
    particles: [] as { x: number, y: number, life: number, maxLife: number, type: 'resin' | 'heat' }[]
  });
  
  const lastTimeRef = useRef<number>(performance.now());
  const isPlayingRef = useRef<boolean>(true);
  
  // UI State
  const [mixLevel, setMixLevel] = useState(0);
  const [temperature, setTemperature] = useState(T_AMBIENT);
  const [failed, setFailed] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let animationId: number;
    
    const loop = (time: number) => {
      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = time;
      
      const s = stateRef.current;
      
      if (!isPlayingRef.current) return;
      
      // Auto-heating (Exothermic reaction builds up over time)
      const baseHeatingRate = 0.5; // slow ambient heating
      let dT = baseHeatingRate;
      
      // If mixing, generate mix progress and some heat
      if (s.isMixing) {
         // Calculate angular movement
         const dx = s.cursorPos.x - CANVAS_W / 2;
         const dy = s.cursorPos.y - CANVAS_H / 2;
         const currentAngle = Math.atan2(dy, dx);
         
         let angleDiff = currentAngle - s.lastAngle;
         // Normalize angle diff
         while (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
         while (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;
         
         if (Math.abs(angleDiff) > 0.05 && Math.abs(angleDiff) < 0.5) {
            // Valid mixing movement
            s.mixProgress += Math.abs(angleDiff) * 3; // mix factor
            dT += 2.0; // Mixing generates friction/exothermic heat
            
            // Spawn mix particles
            if (Math.random() > 0.5) {
               s.particles.push({
                 x: s.cursorPos.x + (Math.random() - 0.5) * 30,
                 y: s.cursorPos.y + (Math.random() - 0.5) * 30,
                 life: 1.0,
                 maxLife: 1.0,
                 type: 'resin'
               });
            }
         }
         
         s.lastAngle = currentAngle;
      }
      
      s.temperature += dT * dt;
      
      // Heat particles if hot
      if (s.temperature > 40 && Math.random() > 0.8) {
         s.particles.push({
            x: CANVAS_W/2 + (Math.random() - 0.5) * 150,
            y: CANVAS_H/2 + (Math.random() - 0.5) * 150,
            life: 1.0,
            maxLife: 1.0,
            type: 'heat'
         });
      }
      
      // Win/Loss conditions
      if (s.mixProgress >= 100) {
         s.mixProgress = 100;
         if (isPlayingRef.current) {
             isPlayingRef.current = false;
             setCompleted(true);
             setTimeout(() => {
                 onComplete(100, s.iatrogenicDamage);
             }, 1500);
         }
      } else if (s.temperature >= MAX_SAFE_TEMP) {
         if (isPlayingRef.current) {
             isPlayingRef.current = false;
             setFailed(true);
             const burnDamage = 30; 
             s.iatrogenicDamage += burnDamage;
             if (onVitalsDrain) onVitalsDrain(burnDamage);
             soundManager.playError();
             
             // Reset after a delay to force player to try again
             setTimeout(() => {
                 s.temperature = T_AMBIENT;
                 s.mixProgress = 0;
                 s.particles = [];
                 setFailed(false);
                 isPlayingRef.current = true;
             }, 3000);
         }
      }
      
      // Sync UI state
      if (Math.random() > 0.8) {
        setMixLevel(Math.min(100, Math.floor(s.mixProgress)));
        setTemperature(s.temperature);
      }
      
      // Render Canvas
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (ctx && canvas) {
        ctx.fillStyle = '#0a0f0d';
        ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
        
        // Draw Mixing Bowl
        ctx.beginPath();
        ctx.arc(CANVAS_W/2, CANVAS_H/2, 120, 0, Math.PI*2);
        ctx.strokeStyle = '#2A3A35';
        ctx.lineWidth = 10;
        ctx.stroke();
        
        // Draw Resin Base (Yellow/White depending on mix)
        const mixRatio = s.mixProgress / 100;
        ctx.beginPath();
        ctx.arc(CANVAS_W/2, CANVAS_H/2, 115, 0, Math.PI*2);
        // Base is yellow, catalyst is white, mixes to solid light gray
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

        // Heatmap overlay
        if (s.temperature > 39) {
            const heatRatio = Math.max(0, Math.min(1, (s.temperature - 39) / (MAX_SAFE_TEMP - 39)));
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
    return () => cancelAnimationFrame(animationId);
  }, [onComplete, onVitalsDrain]);

  // Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!isPlayingRef.current) return;
    stateRef.current.isMixing = true;
    const rect = e.currentTarget.getBoundingClientRect();
    stateRef.current.cursorPos = {
      x: (e.clientX - rect.left) * (CANVAS_W / rect.width),
      y: (e.clientY - rect.top) * (CANVAS_H / rect.height)
    };
    
    const dx = stateRef.current.cursorPos.x - CANVAS_W / 2;
    const dy = stateRef.current.cursorPos.y - CANVAS_H / 2;
    stateRef.current.lastAngle = Math.atan2(dy, dx);
    
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
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const isDanger = temperature > 42.0;

  return (
    <div className="flex flex-col w-full h-full bg-[#050A08] rounded-2xl border border-slate-700 overflow-hidden shadow-2xl relative">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800">
         <div>
            <h3 className="text-[#E8B84A] font-bold uppercase tracking-wider text-sm flex items-center gap-2">
               <RefreshCcw className="w-5 h-5 text-[#C89A3C]"/> Preparo de Resina Epóxi
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-lg">
               Misture a base e o catalisador em movimentos circulares. Seja rápido antes que a cura exotérmica queime o tecido!
            </p>
         </div>
         <div className="flex gap-4">
            <div className={`px-4 py-2 rounded-xl border transition-colors ${isDanger ? 'bg-rose-950/50 border-rose-500 animate-pulse' : 'bg-[#0a0f0d] border-slate-700'}`}>
               <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Temperatura</span>
               <span className={`text-2xl font-mono font-black ${isDanger ? 'text-rose-400' : 'text-emerald-400'}`}>
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
            <p className="text-red-200">A resina superaqueceu e causou necrose no tecido adjacente. O paciente sofreu dano severo!</p>
            <p className="text-red-300 text-sm mt-4 font-mono">Reiniciando preparo...</p>
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
         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm border border-slate-700 px-4 py-2 rounded-lg pointer-events-none">
            <p className="text-sm text-slate-300 font-medium">
              <span className="text-[#C89A3C] font-bold">SEGURE E GIRE</span> o mouse em círculos rápidos para misturar.
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
              <p className="text-emerald-200 text-sm">Resina pronta para aplicação segura.</p>
           </motion.div>
         )}
      </div>
    </div>
  );
};
