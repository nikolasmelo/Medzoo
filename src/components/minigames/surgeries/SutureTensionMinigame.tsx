import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Scissors, CheckCircle2 } from 'lucide-react';

interface SutureTensionMinigameProps {
  onComplete: (accuracy: number, damage: number, timeTaken: number) => void;
  onVitalsDrain?: (damage: number) => void;
}

const CANVAS_W = 700;
const CANVAS_H = 400;
const REQUIRED_SUTURES = 5;

// Hooke's Law Constants
const K_TISSUE = 0.5; // Elasticity constant of the tissue
const IDEAL_TENSION_MIN = 30;
const IDEAL_TENSION_MAX = 70;
const ISCHEMIA_THRESHOLD = 90;

export const SutureTensionMinigame: React.FC<SutureTensionMinigameProps> = ({
  onComplete,
  onVitalsDrain
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [suturesPlaced, setSuturesPlaced] = useState(0);
  const [currentTensionUI, setCurrentTensionUI] = useState(0);
  
  const stateRef = useRef({
    isDragging: false,
    dragStart: { x: 0, y: 0 },
    currentMouse: { x: 0, y: 0 },
    sutures: [] as { start: {x: number, y: number}, end: {x: number, y: number}, tension: number }[],
    iatrogenicDamage: 0
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
         // Clear
         ctx.fillStyle = '#1e1112'; // tissue base
         ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
         
         // Draw Wound Gap
         ctx.fillStyle = '#0a0505'; // deep tissue
         ctx.beginPath();
         // The wound is an ellipse in the center
         ctx.ellipse(CANVAS_W/2, CANVAS_H/2, 200, 40, 0, 0, Math.PI * 2);
         ctx.fill();
         
         // Draw Placed Sutures
         s.sutures.forEach(sut => {
            // Sutures are drawn as thick black threads
            ctx.strokeStyle = '#111';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(sut.start.x, sut.start.y);
            ctx.lineTo(sut.end.x, sut.end.y);
            ctx.stroke();
            
            // Draw anchor points
            ctx.fillStyle = '#333';
            ctx.beginPath();
            ctx.arc(sut.start.x, sut.start.y, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(sut.end.x, sut.end.y, 4, 0, Math.PI * 2);
            ctx.fill();
            
            // Tension visual feedback (ischemia = pale white/yellow near anchors, dehiscence = red)
            if (sut.tension > ISCHEMIA_THRESHOLD) {
               ctx.fillStyle = 'rgba(255, 255, 200, 0.4)';
               ctx.beginPath();
               ctx.arc(sut.start.x, sut.start.y, 15, 0, Math.PI * 2);
               ctx.arc(sut.end.x, sut.end.y, 15, 0, Math.PI * 2);
               ctx.fill();
            }
         });
         
         // Draw Active Drag
         if (s.isDragging) {
            const dx = s.currentMouse.x - s.dragStart.x;
            const dy = s.currentMouse.y - s.dragStart.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            const currentTension = dist * K_TISSUE;
            
            ctx.strokeStyle = currentTension > ISCHEMIA_THRESHOLD ? '#ef4444' : (currentTension > IDEAL_TENSION_MIN ? '#10b981' : '#64748b');
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(s.dragStart.x, s.dragStart.y);
            ctx.lineTo(s.currentMouse.x, s.currentMouse.y);
            ctx.stroke();
            ctx.setLineDash([]);
            
            // Draw Tension HUD near cursor
            ctx.fillStyle = ctx.strokeStyle;
            ctx.font = '12px monospace';
            ctx.fillText(`Tensão: ${currentTension.toFixed(1)} N`, s.currentMouse.x + 15, s.currentMouse.y + 15);
         }
      }

      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    const s = stateRef.current;
    if (s.sutures.length >= REQUIRED_SUTURES) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (CANVAS_W / rect.width);
    const y = (e.clientY - rect.top) * (CANVAS_H / rect.height);
    
    s.isDragging = true;
    s.dragStart = { x, y };
    s.currentMouse = { x, y };
    
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const s = stateRef.current;
    if (!s.isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (CANVAS_W / rect.width);
    const y = (e.clientY - rect.top) * (CANVAS_H / rect.height);
    s.currentMouse = { x, y };
    
    // Calculate tension for UI
    const dx = x - s.dragStart.x;
    const dy = y - s.dragStart.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    setCurrentTensionUI(dist * K_TISSUE);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const s = stateRef.current;
    if (!s.isDragging) return;
    s.isDragging = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
    
    const dx = s.currentMouse.x - s.dragStart.x;
    const dy = s.currentMouse.y - s.dragStart.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    const tension = dist * K_TISSUE;
    
    if (tension > 5) {
       // Validate tension
       if (tension < IDEAL_TENSION_MIN) {
           // Dehiscence / failure to close
           s.iatrogenicDamage += 20; // Needs to be re-done, tissue slacks
           onVitalsDrain?.(5); // Drain vitals slightly due to dehiscence
       } else if (tension > ISCHEMIA_THRESHOLD) {
           // Ischemic Necrosis
           s.iatrogenicDamage += (tension - ISCHEMIA_THRESHOLD) * 2;
           onVitalsDrain?.(10); // Drain vitals due to necrosis/pain
       }
       
       s.sutures.push({
          start: { ...s.dragStart },
          end: { ...s.currentMouse },
          tension
       });
       
       setSuturesPlaced(s.sutures.length);
       setCurrentTensionUI(0);
    }
  };

  const handleComplete = () => {
    const s = stateRef.current;
    const timeTaken = (performance.now() - startTimeRef.current) / 1000;
    const accuracy = Math.max(0, 1.0 - (s.iatrogenicDamage / 200));
    onComplete(accuracy, s.iatrogenicDamage, timeTaken);
  };

  const isComplete = suturesPlaced >= REQUIRED_SUTURES;
  const isDanger = currentTensionUI > ISCHEMIA_THRESHOLD;
  const isLoose = currentTensionUI > 5 && currentTensionUI < IDEAL_TENSION_MIN;

  return (
    <div className="flex flex-col w-full h-full bg-[#050A08] rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800">
         <div>
            <h3 className="text-[#E8B84A] font-bold uppercase tracking-wider text-sm flex items-center gap-2">
               <Scissors className="w-5 h-5 text-[#C89A3C]"/> Física de Oclusão (Sutura)
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-lg">
               Arraste para transfixar o fio entre as bordas da ferida (Lei de Hooke). Mantenha a tensão vetorial $F = k \cdot x$ entre {IDEAL_TENSION_MIN}N e {IDEAL_TENSION_MAX}N. Tensão excessiva causa Isquemia; insuficiente causa Deiscência.
            </p>
         </div>
         <div className="flex gap-4">
            <div className={`px-4 py-2 rounded-xl border ${isDanger ? 'bg-rose-950/50 border-rose-500 animate-pulse' : (isLoose ? 'bg-amber-950/50 border-amber-500' : 'bg-[#0a0f0d] border-slate-700')}`}>
               <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Tensão Dinâmica</span>
               <span className={`text-2xl font-mono font-black ${isDanger ? 'text-rose-400' : (isLoose ? 'text-amber-400' : 'text-emerald-400')}`}>
                 {currentTensionUI.toFixed(1)} N
               </span>
            </div>
            
            <div className="px-4 py-2 rounded-xl border bg-[#0a0f0d] border-slate-700">
               <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Pontos</span>
               <span className="text-2xl font-mono font-black text-[#E8B84A]">
                 {suturesPlaced}/{REQUIRED_SUTURES}
               </span>
            </div>
         </div>
      </div>
      
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
            {isComplete && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center gap-4 z-10"
              >
                 <CheckCircle2 className="w-16 h-16 text-emerald-400" />
                 <h2 className="text-2xl font-black text-emerald-400 tracking-wider">OCLUSÃO COMPLETA</h2>
                 <p className="text-emerald-300">Tensão residual avaliada</p>
                 <button 
                   onClick={handleComplete}
                   className="px-8 py-3 rounded-xl bg-emerald-600 border border-emerald-300 text-white font-bold"
                 >
                    Finalizar Procedimento
                 </button>
              </motion.div>
            )}
         </div>
      </div>
    </div>
  );
};
