import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Crosshair, CheckCircle2, Zap } from 'lucide-react';
import { soundManager } from '../../../utils/sound';

interface Point {
  x: number;
  y: number;
}

interface Bleeder extends Point {
  id: number;
  radius: number; // blood pool radius
  active: boolean;
  rate: number; // how fast it bleeds
}

interface SoftTissueIncisionMinigameProps {
  onComplete: (accuracy: number, damage: number, timeTaken: number) => void;
  onBleedingUpdate: (hemorrhageVolume: number) => void;
}

const CANVAS_W = 700;
const CANVAS_H = 400;
const TARGET_LENGTH = 300; // required pixel length of incision

// Catmull-Rom interpolation function
function getCatmullRomPosition(t: number, p0: Point, p1: Point, p2: Point, p3: Point): Point {
  const t2 = t * t;
  const t3 = t2 * t;

  const f0 = -0.5 * t3 + t2 - 0.5 * t;
  const f1 = 1.5 * t3 - 2.5 * t2 + 1.0;
  const f2 = -1.5 * t3 + 2.0 * t2 + 0.5 * t;
  const f3 = 0.5 * t3 - 0.5 * t2;

  return {
    x: p0.x * f0 + p1.x * f1 + p2.x * f2 + p3.x * f3,
    y: p0.y * f0 + p1.y * f1 + p2.y * f2 + p3.y * f3
  };
}

export const SoftTissueIncisionMinigame: React.FC<SoftTissueIncisionMinigameProps> = ({
  onComplete,
  onBleedingUpdate
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [activeTool, setActiveTool] = useState<'scalpel' | 'cautery'>('scalpel');
  const [incisionProgress, setIncisionProgress] = useState(0);

  const stateRef = useRef({
    points: [] as Point[],
    bleeders: [] as Bleeder[],
    isDrawing: false,
    cursorPos: { x: CANVAS_W / 2, y: CANVAS_H / 2 },
    totalLength: 0,
    iatrogenicDamage: 0,
    totalBloodLoss: 0,
    particles: [] as { x: number, y: number, life: number, type: 'smoke' | 'blood' }[]
  });

  const startTimeRef = useRef<number>(performance.now());
  const lastTimeRef = useRef<number>(performance.now());
  const bleederIdCounter = useRef(0);

  useEffect(() => {
    let animationId: number;

    const loop = (time: number) => {
      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = time;
      const s = stateRef.current;

      let activeBleedingRate = 0;

      // Update Bleeders
      s.bleeders.forEach(b => {
        if (b.active) {
          b.radius += b.rate * dt * 20; // Pool expands
          s.totalBloodLoss += b.rate * dt;
          activeBleedingRate += b.rate;
        }
      });

      // Report active bleeding rate continuously
      onBleedingUpdate(activeBleedingRate);

      // Cautery logic
      if (activeTool === 'cautery' && s.isDrawing) {
         let cauterizedAny = false;
         s.bleeders.forEach(b => {
            if (b.active) {
               const dx = b.x - s.cursorPos.x;
               const dy = b.y - s.cursorPos.y;
               const dist = Math.sqrt(dx * dx + dy * dy);
               if (dist < 20) {
                  b.active = false;
                  cauterizedAny = true;
                  // Spawn smoke
                  for (let i = 0; i < 5; i++) {
                     s.particles.push({
                        x: b.x + (Math.random() - 0.5) * 10,
                        y: b.y + (Math.random() - 0.5) * 10,
                        life: 1.0,
                        type: 'smoke'
                     });
                  }
               }
            }
         });
         
         if (cauterizedAny && Math.random() > 0.8) {
             // We can use a generic success or static noise for cautery. 
             // In absence of specific cautery sound, we just rely on visual.
             soundManager.playResinExotherm(45); // hacky reuse for 'burning' sound
         }
      }

      // Update particles
      for (let i = s.particles.length - 1; i >= 0; i--) {
         const p = s.particles[i];
         p.life -= dt * 2;
         if (p.life <= 0) {
            s.particles.splice(i, 1);
            continue;
         }
      }

      // UI Sync
      if (Math.random() > 0.8) {
         setIncisionProgress(s.totalLength);
      }

      // Render
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      
      if (ctx && canvas) {
        // Clear background (Tissue base)
        ctx.fillStyle = '#1e1112'; // dark flesh
        ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
        
        // Draw Guide line
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.setLineDash([10, 10]);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(100, CANVAS_H/2);
        ctx.lineTo(CANVAS_W - 100, CANVAS_H/2);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw Blood Pools (Bleeders)
        s.bleeders.forEach(b => {
           if (b.radius > 0) {
              const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
              grad.addColorStop(0, 'rgba(150, 10, 10, 0.9)');
              grad.addColorStop(1, 'rgba(150, 10, 10, 0)');
              ctx.fillStyle = grad;
              ctx.beginPath();
              ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
              ctx.fill();
              
              if (b.active) {
                 // Active bleeder bright center
                 ctx.fillStyle = '#ff2222';
                 ctx.beginPath();
                 ctx.arc(b.x, b.y, 2, 0, Math.PI * 2);
                 ctx.fill();
              } else {
                 // Cauterized mark
                 ctx.fillStyle = '#000000';
                 ctx.beginPath();
                 ctx.arc(b.x, b.y, 3, 0, Math.PI * 2);
                 ctx.fill();
              }
           }
        });

        // Draw Spline Incision
        if (s.points.length > 0) {
           ctx.beginPath();
           ctx.strokeStyle = '#050202'; // deep wound color
           ctx.lineWidth = 4;
           ctx.lineCap = 'round';
           ctx.lineJoin = 'round';
           
           // We need at least 4 points for a full Catmull-Rom segment, but we pad endpoints
           const padded = [s.points[0], ...s.points, s.points[s.points.length - 1]];
           
           ctx.moveTo(padded[1].x, padded[1].y);
           
           for (let i = 1; i < padded.length - 2; i++) {
              const p0 = padded[i - 1];
              const p1 = padded[i];
              const p2 = padded[i + 1];
              const p3 = padded[i + 2];
              
              for (let t = 0; t <= 1; t += 0.1) {
                 const pt = getCatmullRomPosition(t, p0, p1, p2, p3);
                 ctx.lineTo(pt.x, pt.y);
              }
           }
           ctx.stroke();
           
           // Highlight inner tissue
           ctx.strokeStyle = '#8b0000';
           ctx.lineWidth = 1;
           ctx.stroke();
        }
        
        // Draw Particles
        s.particles.forEach(p => {
           ctx.fillStyle = p.type === 'smoke' ? `rgba(150, 150, 150, ${p.life})` : `rgba(200, 20, 20, ${p.life})`;
           ctx.beginPath();
           ctx.arc(p.x, p.y, p.type === 'smoke' ? 6 : 2, 0, Math.PI * 2);
           ctx.fill();
        });

        // Draw Cursor/Tool
        ctx.beginPath();
        ctx.arc(s.cursorPos.x, s.cursorPos.y, 10, 0, Math.PI * 2);
        ctx.strokeStyle = activeTool === 'scalpel' ? '#a1a1aa' : '#f59e0b';
        ctx.lineWidth = 2;
        ctx.stroke();
        if (s.isDrawing && activeTool === 'cautery') {
           ctx.fillStyle = 'rgba(245, 158, 11, 0.4)';
           ctx.fill();
        }
      }

      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationId);
  }, [activeTool, onBleedingUpdate]);

  const handlePointerDown = (e: React.PointerEvent) => {
    stateRef.current.isDrawing = true;
    updatePointer(e);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    updatePointer(e);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    stateRef.current.isDrawing = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const updatePointer = (e: React.PointerEvent) => {
    const s = stateRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (CANVAS_W / rect.width);
    const y = (e.clientY - rect.top) * (CANVAS_H / rect.height);
    s.cursorPos = { x, y };

    if (s.isDrawing && activeTool === 'scalpel' && s.totalLength < TARGET_LENGTH) {
        if (s.points.length === 0) {
           s.points.push({ x, y });
        } else {
           const lastP = s.points[s.points.length - 1];
           const dx = x - lastP.x;
           const dy = y - lastP.y;
           const dist = Math.sqrt(dx * dx + dy * dy);
           
           if (dist > 5) {
              s.points.push({ x, y });
              s.totalLength += dist;
              
              // Chance to spawn a bleeder based on distance/speed
              if (Math.random() < 0.15) {
                 s.bleeders.push({
                    x, y,
                    id: bleederIdCounter.current++,
                    radius: 2,
                    active: true,
                    rate: 0.5 + Math.random() * 2.0 // severity
                 });
              }
           }
        }
    }
  };

  const handleComplete = () => {
    const s = stateRef.current;
    const timeTaken = (performance.now() - startTimeRef.current) / 1000;
    
    // Penalize if there are still active bleeders when finishing
    const activeBleederCount = s.bleeders.filter(b => b.active).length;
    const accuracy = Math.max(0, 1.0 - (activeBleederCount * 0.1) - (s.totalBloodLoss / 500));
    
    onBleedingUpdate(0); // Clear active bleed on exit
    onComplete(accuracy, s.totalBloodLoss, timeTaken);
  };

  const isComplete = incisionProgress >= TARGET_LENGTH;
  const hasActiveBleeding = stateRef.current.bleeders.some(b => b.active);

  return (
    <div className="flex flex-col w-full h-full bg-[#050A08] rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800">
         <div>
            <h3 className="text-[#E8B84A] font-bold uppercase tracking-wider text-sm flex items-center gap-2">
               <Crosshair className="w-5 h-5 text-[#C89A3C]"/> Incisão e Hemostasia
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-lg">
               Faça a incisão ao longo da linha guia. O tecido irá sangrar organicamente. Alterna para o Eletrocautério para neutralizar os nós hemorrágicos antes do Choque Hipovolêmico.
            </p>
         </div>
         <div className="flex gap-4">
            <div className={`px-4 py-2 rounded-xl border ${hasActiveBleeding ? 'bg-rose-950/50 border-rose-500 animate-pulse' : 'bg-[#0a0f0d] border-slate-700'}`}>
               <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Status Hemorrágico</span>
               <span className={`text-xl font-mono font-black ${hasActiveBleeding ? 'text-rose-400' : 'text-emerald-400'}`}>
                 {hasActiveBleeding ? 'SANGRAMENTO ATIVO' : 'ESTÁVEL'}
               </span>
            </div>
         </div>
      </div>
      
      <div className="flex-1 flex gap-4 p-4 relative">
         <div className="w-48 flex flex-col gap-3">
            <button
              onClick={() => setActiveTool('scalpel')}
              className={`flex-1 flex flex-col items-center justify-center gap-2 rounded-xl border transition-all ${
                 activeTool === 'scalpel' 
                 ? 'bg-[#1C382B] border-[#E8B84A] text-[#E8B84A]' 
                 : 'bg-[#0E1713] border-slate-800 text-slate-500'
              }`}
            >
               <Crosshair className="w-8 h-8" />
               <span className="font-bold text-sm uppercase">Bisturi</span>
               <span className="text-[10px]">Incisão Catmull-Rom</span>
            </button>
            
            <button
              onClick={() => setActiveTool('cautery')}
              className={`flex-1 flex flex-col items-center justify-center gap-2 rounded-xl border transition-all ${
                 activeTool === 'cautery' 
                 ? 'bg-amber-900/40 border-amber-400 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]' 
                 : 'bg-[#0E1713] border-slate-800 text-slate-500'
              }`}
            >
               <Zap className="w-8 h-8" />
               <span className="font-bold text-sm uppercase">Eletrocautério</span>
               <span className="text-[10px]">Coagulação Térmica</span>
            </button>
         </div>

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
            {isComplete && !hasActiveBleeding && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center gap-4 z-10"
              >
                 <CheckCircle2 className="w-16 h-16 text-emerald-400" />
                 <h2 className="text-2xl font-black text-emerald-400 tracking-wider">INCISÃO CONCLUÍDA</h2>
                 <p className="text-emerald-300">Hemostasia Garantida</p>
                 <button 
                   onClick={handleComplete}
                   className="px-8 py-3 rounded-xl bg-emerald-600 border border-emerald-300 text-white font-bold"
                 >
                    Avançar Etapa
                 </button>
              </motion.div>
            )}
            
            {isComplete && hasActiveBleeding && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-rose-950/90 border border-rose-500 px-6 py-2 rounded-xl z-10 text-center"
              >
                 <span className="text-rose-400 font-bold uppercase block text-sm">Controle a hemorragia antes de prosseguir!</span>
              </motion.div>
            )}
         </div>
      </div>
    </div>
  );
};
