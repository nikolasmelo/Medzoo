import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Activity, AlertOctagon, CheckCircle2 } from 'lucide-react';
import { soundManager } from '../../../utils/sound';

interface OrthopedicPinsMinigameProps {
  onComplete: (accuracy: number, damage: number) => void;
  onVitalsDrain?: (damage: number) => void;
}

const CANVAS_W = 800;
const CANVAS_H = 500;
const TOTAL_DEPTH = 100;
const MAX_SAFE_ANGLE = 5.0; // Degrees
const CORTICAL_DAMAGE_PENALTY = 25; // per hit

export const OrthopedicPinsMinigame: React.FC<OrthopedicPinsMinigameProps> = ({ onComplete, onVitalsDrain }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Physics State Refs
  const stateRef = useRef({
    depth: 0,
    currentAngle: 0,
    targetAngle: 0,
    iatrogenicDamage: 0,
    isHammering: false,
    hammerProgress: 0,
    corticalFractures: [] as {x: number, y: number}[]
  });
  
  const lastTimeRef = useRef<number>(performance.now());
  const isPlayingRef = useRef<boolean>(true);
  
  // UI State
  const [depth, setDepth] = useState(0);
  const [angle, setAngle] = useState(0);
  const [fractureWarning, setFractureWarning] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let animationId: number;
    
    const loop = (time: number) => {
      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = time;
      
      const s = stateRef.current;
      
      if (!isPlayingRef.current) return;
      
      // Interpolate current angle towards target angle
      s.currentAngle += (s.targetAngle - s.currentAngle) * 5 * dt;
      
      // Hammer animation
      if (s.isHammering) {
         s.hammerProgress += 10 * dt;
         if (s.hammerProgress >= 1) {
            s.isHammering = false;
            s.hammerProgress = 0;
         }
      }

      // Check win condition
      if (s.depth >= TOTAL_DEPTH) {
         s.depth = TOTAL_DEPTH;
         if (isPlayingRef.current) {
             isPlayingRef.current = false;
             setCompleted(true);
             setTimeout(() => {
                 onComplete(100, s.iatrogenicDamage);
             }, 1500);
         }
      } 
      
      // Sync UI state
      if (Math.random() > 0.5) {
        setDepth(Math.floor((s.depth / TOTAL_DEPTH) * 100));
        setAngle(s.currentAngle);
      }
      
      // Render Canvas
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (ctx && canvas) {
        ctx.fillStyle = '#0a0f0d';
        ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
        
        // --- DRAW BONE (Canal Medular) ---
        ctx.fillStyle = '#C8B090';
        ctx.fillRect(200, 0, 400, CANVAS_H); // Main bone
        
        // Cortical edges
        ctx.fillStyle = '#E8D0A0';
        ctx.fillRect(200, 0, 30, CANVAS_H);
        ctx.fillRect(570, 0, 30, CANVAS_H);
        
        // Canal Medular (center empty/marrow)
        ctx.fillStyle = '#802020';
        ctx.fillRect(230, 0, 340, CANVAS_H);
        
        // Draw fractures
        s.corticalFractures.forEach(frac => {
            ctx.beginPath();
            ctx.moveTo(frac.x, frac.y);
            ctx.lineTo(frac.x + (Math.random()-0.5)*100, frac.y + (Math.random()-0.5)*100);
            ctx.lineTo(frac.x + (Math.random()-0.5)*150, frac.y + (Math.random()-0.5)*150);
            ctx.strokeStyle = '#400000';
            ctx.lineWidth = 3;
            ctx.stroke();
            
            // Blood
            ctx.fillStyle = '#FF0000';
            ctx.beginPath();
            ctx.arc(frac.x, frac.y, 10 + Math.random()*10, 0, Math.PI*2);
            ctx.fill();
        });

        // --- DRAW PIN ---
        ctx.save();
        // Pivot point at the current depth inside the canal
        // Let's say top is y=0. Pin enters from top.
        const startY = (s.depth / TOTAL_DEPTH) * CANVAS_H;
        ctx.translate(CANVAS_W / 2, startY);
        
        // Convert angle to radians. If angle is 0, it points straight down.
        ctx.rotate(s.currentAngle * Math.PI / 180);
        
        // Draw the pin itself (sticking UP from the pivot point)
        // Length of pin is say 400
        const pinLength = 400;
        ctx.fillStyle = '#D0D0D0';
        ctx.fillRect(-8, -pinLength, 16, pinLength);
        
        // Pin tip (at pivot)
        ctx.beginPath();
        ctx.moveTo(-8, 0);
        ctx.lineTo(8, 0);
        ctx.lineTo(0, 20); // sharp point
        ctx.fill();
        
        // --- DRAW HAMMER ---
        // Hammer moves down when hitting
        const hammerY = -pinLength - 20 + (s.isHammering ? Math.sin(s.hammerProgress * Math.PI) * 40 : 0);
        ctx.fillStyle = '#808080';
        ctx.fillRect(-40, hammerY - 40, 80, 40); // Hammer head
        ctx.fillStyle = '#604020';
        ctx.fillRect(-10, hammerY - 150, 20, 110); // Hammer handle
        
        ctx.restore();
        
        // --- DRAW GUIDES ---
        // Center line
        ctx.strokeStyle = 'rgba(0, 255, 0, 0.3)';
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(CANVAS_W/2, 0);
        ctx.lineTo(CANVAS_W/2, CANVAS_H);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      animationId = requestAnimationFrame(loop);
    };
    
    animationId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationId);
  }, [onComplete, onVitalsDrain]);

  // Handlers
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPlayingRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    
    // Map Y position to angle (-15 to 15 degrees)
    // Canvas H is 500. Center is 250.
    const normalizedY = (y - (CANVAS_H / 2)) / (CANVAS_H / 2); // -1 to 1
    stateRef.current.targetAngle = normalizedY * -20; // Up means positive angle (tilted right), Down means negative (tilted left)
  };

  const handlePointerDown = () => {
    if (!isPlayingRef.current) return;
    const s = stateRef.current;
    
    if (s.isHammering) return; // Prevent spamming
    
    s.isHammering = true;
    s.hammerProgress = 0;
    
    // Calculate hit result
    if (Math.abs(s.currentAngle) <= MAX_SAFE_ANGLE) {
        // Perfect hit
        s.depth += 5; // progress
        soundManager.playClick(); // Todo: Add hammer sound
    } else {
        // Cortical fracture!
        soundManager.playError();
        const dmg = CORTICAL_DAMAGE_PENALTY * (Math.abs(s.currentAngle) / 10);
        s.iatrogenicDamage += dmg;
        if (onVitalsDrain) onVitalsDrain(dmg);
        
        // Add fracture visual
        const side = s.currentAngle > 0 ? 1 : -1;
        const currentY = (s.depth / TOTAL_DEPTH) * CANVAS_H;
        s.corticalFractures.push({
            x: CANVAS_W/2 + side * 150, // Approx cortical wall
            y: currentY + Math.random() * 50
        });
        
        setFractureWarning(true);
        setTimeout(() => setFractureWarning(false), 1500);
    }
  };

  const isDanger = Math.abs(angle) > MAX_SAFE_ANGLE;

  return (
    <div className="flex flex-col w-full h-full bg-[#050A08] rounded-2xl border border-slate-700 overflow-hidden shadow-2xl relative">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800">
         <div>
            <h3 className="text-[#E8B84A] font-bold uppercase tracking-wider text-sm flex items-center gap-2">
               <Target className="w-5 h-5 text-[#C89A3C]"/> Fixação de Pino Intramedular
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-lg">
               Mova o mouse para cima e para baixo para ajustar o eixo do pino. Clique para martelar. Se o ângulo estiver torto, você fraturará o córtex ósseo!
            </p>
         </div>
         <div className="flex gap-4">
            <div className={`px-4 py-2 rounded-xl border transition-colors ${isDanger ? 'bg-rose-950/50 border-rose-500 animate-pulse' : 'bg-[#0a0f0d] border-slate-700'}`}>
               <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Desvio Angular</span>
               <span className={`text-2xl font-mono font-black ${isDanger ? 'text-rose-400' : 'text-emerald-400'}`}>
                 {Math.abs(angle).toFixed(1)}°
               </span>
            </div>
            
            <div className="px-4 py-2 rounded-xl border bg-[#0a0f0d] border-slate-700">
               <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Profundidade</span>
               <span className="text-2xl font-mono font-black text-[#E8B84A]">
                 {depth}%
               </span>
            </div>
         </div>
      </div>
      
      {/* Fracture Overlay */}
      {fractureWarning && (
        <div className="absolute inset-0 bg-red-900/40 z-20 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
            <AlertOctagon className="w-20 h-20 text-red-400 mb-4 animate-bounce" />
            <h2 className="text-3xl font-black text-red-100 uppercase tracking-widest mb-2">Fratura Cortical!</h2>
            <p className="text-red-200">O pino foi martelado fora do eixo e rompeu a parede óssea.</p>
        </div>
      )}

      {/* Rendering Canvas */}
      <div className="flex-1 relative bg-black cursor-crosshair">
         <canvas 
            ref={canvasRef}
            width={CANVAS_W}
            height={CANVAS_H}
            onPointerMove={handlePointerMove}
            onPointerDown={handlePointerDown}
            className="w-full h-full block touch-none"
         />
         
         {/* Instruction */}
         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm border border-slate-700 px-4 py-2 rounded-lg pointer-events-none">
            <p className="text-sm text-slate-300 font-medium">
              <span className="text-[#C89A3C] font-bold">MOVER (Y)</span> ajusta ângulo | <span className="text-[#C89A3C] font-bold">CLIQUE</span> para martelar.
            </p>
         </div>

         {completed && (
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             className="absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center gap-4 z-10"
           >
              <CheckCircle2 className="w-16 h-16 text-emerald-400" />
              <h2 className="text-2xl font-black text-emerald-400 tracking-wider">PINO FIXADO</h2>
              <p className="text-emerald-200 text-sm">O implante atingiu a profundidade alvo.</p>
           </motion.div>
         )}
      </div>
    </div>
  );
};
