import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Thermometer, Flame } from 'lucide-react';
import { soundManager } from '../../../utils/sound';

interface BoneDrillMinigameProps {
  onComplete: (accuracy: number, damage: number, timeTaken: number) => void;
  onVitalsDrain: (damage: number) => void;
}

export const BoneDrillMinigame: React.FC<BoneDrillMinigameProps> = ({ onComplete, onVitalsDrain }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [isDone, setIsDone] = useState(false);
  const [damage, setDamage] = useState(0);
  const [isDrilling, setIsDrilling] = useState(false);
  
  // Game state
  const timeStart = useRef(Date.now());
  const requestRef = useRef<number>(0);
  
  const depth = useRef(0);
  const heat = useRef(0);
  const isNecrosing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    soundManager.playClick(); 

    const render = () => {
      // Logic updates
      if (isDrilling && depth.current < 100 && !isDone) {
        depth.current += 0.2; // 10 seconds to drill 100% if continuous
        heat.current += 0.8;  // Heat rises fast (approx 2.5s to overheat)
      } else {
        // Cooling down
        heat.current = Math.max(0, heat.current - 0.4); 
      }

      // Check thermal necrosis
      if (heat.current >= 100) {
        if (!isNecrosing.current) {
          isNecrosing.current = true;
          soundManager.playError();
        }
        setDamage(prev => prev + 0.5);
        onVitalsDrain(1); // Massive vital drain
        heat.current = 100; // Cap
      } else {
        isNecrosing.current = false;
      }

      // Check completion
      if (depth.current >= 100 && !isDone) {
        setIsDone(true);
        setIsDrilling(false);
        soundManager.playSuccess();
        setTimeout(() => {
          const timeTaken = (Date.now() - timeStart.current) / 1000;
          onComplete(Math.max(0, 1 - (damage / 100)), damage, timeTaken);
        }, 1500);
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
      
      // Bone outer cortex
      ctx.fillStyle = '#f3f4f6';
      ctx.beginPath();
      ctx.roundRect(boneX, boneY, boneWidth, boneHeight, 20);
      ctx.fill();
      
      // Bone marrow/cancellous bone
      ctx.fillStyle = '#fee2e2';
      ctx.beginPath();
      ctx.roundRect(boneX + 20, boneY + 20, boneWidth - 40, boneHeight - 40, 10);
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
        
        // Color depends on heat (yellow -> orange -> red -> dark red/black for necrosis)
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
        // Heat spreads down the hole too
        ctx.arc(drillX, currentDrillTip, heatRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      
      // Draw the hole already drilled
      ctx.fillStyle = '#111827';
      ctx.fillRect(drillX - 10, drillYStart, 20, drillDepthPx);
      
      // Draw the drill bit
      const drillBitY = isDone ? drillYStart - 150 : currentDrillTip - 150;
      
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
      const threadOffset = isDrilling ? (Date.now() % 100) / 10 : 0;
      
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
      // Temperature Bar
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
      ctx.fillRect(depthBarX, barY, barW, depthH); // Fills top to bottom

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
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isDrilling, isDone, onVitalsDrain]);

  const handlePointerDown = () => {
    if (!isDone) setIsDrilling(true);
  };

  const handlePointerUp = () => {
    setIsDrilling(false);
  };

  return (
    <div className="flex flex-col h-full bg-[#050505] rounded-2xl border border-slate-800 overflow-hidden text-slate-200 shadow-2xl relative select-none">
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-10 pointer-events-none">
        <div>
          <h3 className="text-cyan-500 font-bold font-mono flex items-center gap-2 drop-shadow-md">
            PERFURAÇÃO ÓSSEA
          </h3>
          <p className="text-cyan-700 font-mono text-xs mt-1">BROCA ORTOPÉDICA 3.5mm</p>
        </div>
        
        <div className="text-right">
          <div className="bg-slate-900/80 border border-slate-700 px-3 py-1 rounded-md mb-2">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Necrose / Dano</span>
            <span className={`font-mono font-bold ${damage > 30 ? 'text-rose-500 animate-pulse' : 'text-emerald-400'}`}>
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
        className={`w-full h-full object-contain cursor-crosshair ${isDone ? 'opacity-50 grayscale transition-all duration-1000' : ''}`}
        style={{ touchAction: 'none' }}
      />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/80 border border-slate-700 px-6 py-3 rounded-full pointer-events-none backdrop-blur-sm">
        <p className="text-sm font-bold text-slate-300">
          {!isDone ? "SEGURE O CLIQUE para perfurar. CUIDADO COM O AQUECIMENTO!" :
           "Perfuração concluída."}
        </p>
      </div>

      <AnimatePresence>
        {isDone && (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
          >
            <div className="bg-cyan-950/90 border border-cyan-500 p-8 rounded-2xl flex flex-col items-center backdrop-blur-md">
              <CheckCircle2 className="w-16 h-16 text-cyan-400 mb-4" />
              <h2 className="text-2xl font-black text-cyan-400 uppercase tracking-widest">Perfuração Concluída</h2>
              <p className="text-cyan-200 mt-2">Dano Tecidual: {Math.floor(damage)}%</p>
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
