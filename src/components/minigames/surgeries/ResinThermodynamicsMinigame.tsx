import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Droplets, CheckCircle2 } from 'lucide-react';
import { soundManager } from '../../../utils/sound';

interface ResinThermodynamicsMinigameProps {
  onComplete: (accuracy: number, damage: number, timeTaken: number) => void;
}

const CANVAS_W = 700;
const CANVAS_H = 400;
const TARGET_RESIN = 100;
const T_AMBIENT = 37.0; // Base body temp / room temp
const MAX_SAFE_TEMP = 42.0;

export const ResinThermodynamicsMinigame: React.FC<ResinThermodynamicsMinigameProps> = ({
  onComplete
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Game State
  const [activeTool, setActiveTool] = useState<'resin' | 'saline'>('resin');
  const [, setIsApplying] = useState(false);
  const [resinApplied, setResinApplied] = useState(0);
  
  // Physics State Refs (to avoid re-renders on every frame)
  const stateRef = useRef({
    temperature: T_AMBIENT,
    resinAmount: 0,
    iatrogenicDamage: 0,
    isApplyingResin: false,
    isApplyingSaline: false,
    cursorPos: { x: CANVAS_W / 2, y: CANVAS_H / 2 },
    particles: [] as { x: number, y: number, life: number, maxLife: number, type: 'heat' | 'cool' }[]
  });
  
  const startTimeRef = useRef<number>(performance.now());
  const lastTimeRef = useRef<number>(performance.now());
  const audioTimerRef = useRef<number>(0);

  // Math simulation loop
  useEffect(() => {
    let animationId: number;
    
    const loop = (time: number) => {
      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = time;
      
      const s = stateRef.current;
      
      // Constants for differential equation
      const k_heat = 15.0;  // Heating rate per second when applying resin
      const k_cool = 25.0;  // Cooling rate per second when applying saline
      const k_ambient = 0.8; // Natural dissipation
      
      // Derivative dT/dt
      let dT = -k_ambient * (s.temperature - T_AMBIENT);
      
      if (s.isApplyingResin) {
        dT += k_heat;
        s.resinAmount += 5 * dt; // Fill rate
        if (s.resinAmount >= TARGET_RESIN) {
            s.resinAmount = TARGET_RESIN;
        }
        
        // Spawn heat particles
        if (Math.random() > 0.5) {
           s.particles.push({
             x: s.cursorPos.x + (Math.random() - 0.5) * 40,
             y: s.cursorPos.y + (Math.random() - 0.5) * 40,
             life: 1.0,
             maxLife: 1.0,
             type: 'heat'
           });
        }
      }
      
      if (s.isApplyingSaline) {
        dT -= k_cool;
        // Spawn cool particles
        if (Math.random() > 0.2) {
           s.particles.push({
             x: s.cursorPos.x + (Math.random() - 0.5) * 60,
             y: s.cursorPos.y + (Math.random() - 0.5) * 60,
             life: 0.5,
             maxLife: 0.5,
             type: 'cool'
           });
        }
      }
      
      // Update temperature
      s.temperature += dT * dt;
      if (s.temperature < T_AMBIENT - 5) s.temperature = T_AMBIENT - 5; // Don't freeze
      
      // Damage Calculation
      if (s.temperature > MAX_SAFE_TEMP) {
        s.iatrogenicDamage += (s.temperature - MAX_SAFE_TEMP) * 2 * dt; // Accumulate damage
      }
      
      // Audio trigger
      audioTimerRef.current += dt;
      if (audioTimerRef.current > 0.15) {
         audioTimerRef.current = 0;
         if (s.temperature > 39.0) {
            soundManager.playResinExotherm(s.temperature);
         }
      }

      // Sync React state for UI (throttle slightly)
      if (Math.random() > 0.8) {
        setResinApplied(s.resinAmount);
      }
      
      // Render Canvas
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (ctx && canvas) {
        // Clear
        ctx.fillStyle = '#0a0f0d';
        ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
        
        // Draw defect area (target)
        ctx.strokeStyle = 'rgba(200, 154, 60, 0.3)';
        ctx.lineWidth = 4;
        ctx.setLineDash([10, 10]);
        ctx.beginPath();
        ctx.ellipse(CANVAS_W/2, CANVAS_H/2, 120, 80, 0, 0, Math.PI*2);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Draw filled resin
        const fillRatio = s.resinAmount / TARGET_RESIN;
        ctx.fillStyle = `rgba(220, 220, 200, ${0.4 + fillRatio * 0.4})`;
        ctx.beginPath();
        ctx.ellipse(CANVAS_W/2, CANVAS_H/2, 120 * fillRatio, 80 * fillRatio, 0, 0, Math.PI*2);
        ctx.fill();
        
        // Render Heatmap overlay (Thermography)
        const heatRatio = Math.max(0, Math.min(1, (s.temperature - T_AMBIENT) / (50.0 - T_AMBIENT)));
        const r = Math.floor(heatRatio * 255);
        const b = Math.floor((1 - heatRatio) * 150);
        
        const grad = ctx.createRadialGradient(
           CANVAS_W/2, CANVAS_H/2, 0,
           CANVAS_W/2, CANVAS_H/2, 150
        );
        grad.addColorStop(0, `rgba(${r}, 50, ${b}, 0.5)`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

        // Update and draw particles
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
             : `rgba(100, 200, 255, ${p.life / p.maxLife})`;
           ctx.fill();
           
           if (p.type === 'heat') p.y -= 20 * dt;
           if (p.type === 'cool') p.y += 30 * dt;
        }

        // Draw cursor tool
        if (s.isApplyingResin || s.isApplyingSaline) {
           ctx.beginPath();
           ctx.arc(s.cursorPos.x, s.cursorPos.y, s.isApplyingResin ? 15 : 25, 0, Math.PI*2);
           ctx.strokeStyle = s.isApplyingResin ? 'rgba(255, 200, 100, 0.8)' : 'rgba(100, 200, 255, 0.8)';
           ctx.lineWidth = 3;
           ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(loop);
    };
    
    animationId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsApplying(true);
    const rect = e.currentTarget.getBoundingClientRect();
    stateRef.current.cursorPos = {
      x: (e.clientX - rect.left) * (CANVAS_W / rect.width),
      y: (e.clientY - rect.top) * (CANVAS_H / rect.height)
    };
    if (activeTool === 'resin') stateRef.current.isApplyingResin = true;
    if (activeTool === 'saline') stateRef.current.isApplyingSaline = true;
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  
  const handlePointerMove = (e: React.PointerEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    stateRef.current.cursorPos = {
      x: (e.clientX - rect.left) * (CANVAS_W / rect.width),
      y: (e.clientY - rect.top) * (CANVAS_H / rect.height)
    };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsApplying(false);
    stateRef.current.isApplyingResin = false;
    stateRef.current.isApplyingSaline = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const handleComplete = () => {
     const s = stateRef.current;
     const timeTaken = (performance.now() - startTimeRef.current) / 1000;
     const accuracy = s.resinAmount >= TARGET_RESIN * 0.95 ? 1.0 : (s.resinAmount / TARGET_RESIN);
     onComplete(accuracy, s.iatrogenicDamage, timeTaken);
  };

  const currentTemp = stateRef.current.temperature;
  const isDanger = currentTemp > MAX_SAFE_TEMP;

  return (
    <div className="flex flex-col w-full h-full bg-[#050A08] rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800">
         <div>
            <h3 className="text-[#E8B84A] font-bold uppercase tracking-wider text-sm flex items-center gap-2">
               <Target className="w-5 h-5 text-[#C89A3C]"/> Reconstrução Epóxi Termodinâmica
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-lg">
               Aplique a resina acrílica para preencher a falha. Cuidado com o aquecimento exotérmico $T(t)$! Alterne para a irrigação salina para resfriar a área e evitar necrose tecidual ({MAX_SAFE_TEMP}°C).
            </p>
         </div>
         <div className="flex gap-4">
            <div className={`px-4 py-2 rounded-xl border ${isDanger ? 'bg-rose-950/50 border-rose-500 animate-pulse' : 'bg-[#0a0f0d] border-slate-700'}`}>
               <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Temperatura Termográfica</span>
               <span className={`text-2xl font-mono font-black ${isDanger ? 'text-rose-400' : 'text-emerald-400'}`}>
                 {currentTemp.toFixed(1)}°C
               </span>
            </div>
            
            <div className="px-4 py-2 rounded-xl border bg-[#0a0f0d] border-slate-700">
               <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Preenchimento</span>
               <span className="text-2xl font-mono font-black text-[#E8B84A]">
                 {Math.min(100, Math.round((resinApplied/TARGET_RESIN)*100))}%
               </span>
            </div>
         </div>
      </div>
      
      {/* Tools & Canvas */}
      <div className="flex-1 flex gap-4 p-4">
         {/* Sidebar Tools */}
         <div className="w-48 flex flex-col gap-3">
            <button
              onClick={() => setActiveTool('resin')}
              className={`flex-1 flex flex-col items-center justify-center gap-2 rounded-xl border transition-all ${
                 activeTool === 'resin' 
                 ? 'bg-[#1C382B] border-[#E8B84A] text-[#E8B84A] gold-glow' 
                 : 'bg-[#0E1713] border-slate-800 text-slate-500'
              }`}
            >
               <Target className="w-8 h-8" />
               <span className="font-bold text-sm uppercase">Resina Epóxi</span>
               <span className="text-[10px]">Ação Exotérmica</span>
            </button>
            
            <button
              onClick={() => setActiveTool('saline')}
              className={`flex-1 flex flex-col items-center justify-center gap-2 rounded-xl border transition-all ${
                 activeTool === 'saline' 
                 ? 'bg-blue-900/40 border-blue-400 text-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.4)]' 
                 : 'bg-[#0E1713] border-slate-800 text-slate-500'
              }`}
            >
               <Droplets className="w-8 h-8" />
               <span className="font-bold text-sm uppercase">Solução Salina</span>
               <span className="text-[10px]">Resfriamento (Endo)</span>
            </button>
         </div>

         {/* Rendering Canvas */}
         <div className="flex-1 relative rounded-2xl overflow-hidden border border-slate-700 bg-black cursor-crosshair">
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
            {resinApplied >= TARGET_RESIN && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center gap-4 z-10"
              >
                 <CheckCircle2 className="w-16 h-16 text-emerald-400" />
                 <h2 className="text-2xl font-black text-emerald-400 tracking-wider">MOLDE PREENCHIDO</h2>
                 <button 
                   onClick={handleComplete}
                   className="px-8 py-3 rounded-xl bg-emerald-600 border border-emerald-300 text-white font-bold"
                 >
                    Continuar Cirurgia
                 </button>
              </motion.div>
            )}
         </div>
      </div>
    </div>
  );
};
