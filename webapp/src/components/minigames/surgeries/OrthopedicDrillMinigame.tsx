import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle2, Bone, Activity } from 'lucide-react';
import { soundManager } from '../../../utils/sound';

interface OrthopedicDrillMinigameProps {
  onComplete: (accuracy: number, damage: number, timeTaken: number) => void;
  onVitalsDrain?: (damage: number) => void;
}

const CANVAS_W = 700;
const CANVAS_H = 400;
const TOTAL_DEPTH = 300; // Target depth to drill

const OrthoPhase = {
  REDUCTION: 0,
  DRILLING: 1
} as const;

type OrthoPhaseType = typeof OrthoPhase[keyof typeof OrthoPhase];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  type: 'bone' | 'blood' | 'smoke';
}

export const OrthopedicDrillMinigame: React.FC<OrthopedicDrillMinigameProps> = ({
  onComplete,
  onVitalsDrain
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Game State Refs
  const stateRef = useRef({
    phase: OrthoPhase.REDUCTION as OrthoPhaseType,
    
    // REDUCTION PHASE STATE
    proximalFrag: { x: CANVAS_W / 2, y: 100, angle: 0 },
    distalFrag: { x: CANVAS_W / 2 + 100, y: 250, angle: 0.2 },
    isDragging: false,
    dragStartPos: { x: 0, y: 0 },
    initialDistalPos: { x: 0, y: 0 },
    reductionAccuracy: 0, // 0 to 1
    
    // DRILLING PHASE STATE
    drilledDepth: 0,
    iatrogenicDamage: 0,
    isDrilling: false,
    drillAngle: 0, // radians
    canalAngle: Math.PI / 2, // radians (vertical down)
    pressure: 0,
    thermalNecrosis: 0, // Accumulates heat
    particles: [] as Particle[]
  });
  
  const [uiState, setUiState] = useState({
    phase: OrthoPhase.REDUCTION as OrthoPhaseType,
    depth: 0,
    alignment: 0,
    damage: 0,
    thermalNecrosis: 0,
    reductionAccuracy: 0
  });

  const startTimeRef = useRef<number>(performance.now());
  const lastTimeRef = useRef<number>(performance.now());
  
  useEffect(() => {
    let animationId: number;
    
    const loop = (time: number) => {
      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = time;
      const s = stateRef.current;
      
      // Update Physics & Math
      if (s.phase === OrthoPhase.REDUCTION) {
        // Calculate Euclidean distance between the ideal snap point and current distal frag
        const idealX = s.proximalFrag.x;
        const idealY = s.proximalFrag.y + 150; // assuming length of fragment is ~150
        
        const dx = s.distalFrag.x - idealX;
        const dy = s.distalFrag.y - idealY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const rotDiff = Math.abs(s.distalFrag.angle - s.proximalFrag.angle);
        
        // Map distance (0-200) and rotDiff (0-0.5) to accuracy 0-1
        const distScore = Math.max(0, 1 - (distance / 100));
        const rotScore = Math.max(0, 1 - (rotDiff / 0.5));
        
        s.reductionAccuracy = (distScore * 0.7) + (rotScore * 0.3);
        
        if (s.reductionAccuracy > 0.95 && !s.isDragging) {
           // Snap to place if close enough
           s.distalFrag.x = idealX;
           s.distalFrag.y = idealY;
           s.distalFrag.angle = s.proximalFrag.angle;
           s.reductionAccuracy = 1.0;
        }

      } else if (s.phase === OrthoPhase.DRILLING) {
        const mx = Math.cos(s.canalAngle);
        const my = Math.sin(s.canalAngle);
        const dx = Math.cos(s.drillAngle);
        const dy = Math.sin(s.drillAngle);
        const dotProduct = mx * dx + my * dy; 
        
        if (s.isDrilling && s.drilledDepth < TOTAL_DEPTH) {
          if (dotProduct > 0.8) {
             s.drilledDepth += 20 * dt * dotProduct;
          }
          
          const misalignment = 1.0 - Math.max(0, dotProduct);
          const corticalResistance = 0.2 + (misalignment * 5.0); 
          
          // Thermal necrosis accumulates when drilling continuously
          s.thermalNecrosis += 15 * dt * corticalResistance;
          
          if (Math.random() < 0.1) {
             soundManager.playBoneDrillFriction(s.pressure, corticalResistance);
          }

          if (s.thermalNecrosis > 50) {
             s.iatrogenicDamage += (s.thermalNecrosis - 50) * 0.5 * dt; // Pain damage from necrosis
             // Smoke particles
             if (Math.random() > 0.5) {
                 s.particles.push({
                   x: CANVAS_W / 2 + (Math.random() - 0.5) * 10,
                   y: 50 + s.drilledDepth,
                   vx: (Math.random() - 0.5) * 20,
                   vy: -20 - Math.random() * 40,
                   life: 1.0,
                   type: 'smoke'
                 });
             }
          }

          if (dotProduct < 0.85) {
             s.iatrogenicDamage += (0.85 - dotProduct) * 50 * dt;
             if (Math.random() > 0.5) {
                 s.particles.push({
                    x: CANVAS_W / 2 + (Math.random() - 0.5) * 40,
                    y: 50 + s.drilledDepth,
                    vx: (Math.random() - 0.5) * 100,
                    vy: (Math.random() - 0.5) * 100,
                    life: 1.0,
                    type: 'blood'
                 });
             }
          }
          
          if (Math.random() > 0.3) {
              s.particles.push({
                x: CANVAS_W / 2 + (Math.random() - 0.5) * 20,
                y: 50 + s.drilledDepth,
                vx: (Math.random() - 0.5) * 50,
                vy: -Math.random() * 100,
                life: 1.0,
                type: 'bone'
              });
          }
        } else {
          // Cooling down
          s.thermalNecrosis = Math.max(0, s.thermalNecrosis - 20 * dt);
        }
      }
      
      // Sync UI
      if (Math.random() > 0.7) {
         setUiState({
            phase: s.phase,
            depth: s.drilledDepth,
            alignment: s.phase === OrthoPhase.DRILLING ? (Math.cos(s.canalAngle)*Math.cos(s.drillAngle) + Math.sin(s.canalAngle)*Math.sin(s.drillAngle)) : 0,
            damage: s.iatrogenicDamage,
            thermalNecrosis: s.thermalNecrosis,
            reductionAccuracy: s.reductionAccuracy
         });
         
         // Notify parent of incremental drain if there's damage
         if (onVitalsDrain && s.iatrogenicDamage > 0) {
            onVitalsDrain(s.iatrogenicDamage * 0.1); // Scale it down per frame
         }
      }
      
      // Render Canvas
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (ctx && canvas) {
         ctx.fillStyle = '#0a0f0d';
         ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);
         
         if (s.phase === OrthoPhase.REDUCTION) {
            // Draw Target Outline
            ctx.save();
            ctx.translate(s.proximalFrag.x, s.proximalFrag.y + 150);
            ctx.rotate(s.proximalFrag.angle);
            ctx.strokeStyle = 'rgba(52, 211, 153, 0.3)';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.strokeRect(-40, 0, 80, 150);
            ctx.restore();

            // Draw Proximal Frag (Fixed)
            ctx.save();
            ctx.translate(s.proximalFrag.x, s.proximalFrag.y);
            ctx.rotate(s.proximalFrag.angle);
            ctx.fillStyle = '#e5e5e5';
            ctx.fillRect(-40, 0, 80, 150);
            // Fracture edge jagged
            ctx.beginPath();
            ctx.moveTo(-40, 150);
            ctx.lineTo(-20, 140);
            ctx.lineTo(0, 155);
            ctx.lineTo(20, 135);
            ctx.lineTo(40, 150);
            ctx.strokeStyle = '#000';
            ctx.stroke();
            ctx.restore();
            
            // Draw Distal Frag (Movable)
            ctx.save();
            ctx.translate(s.distalFrag.x, s.distalFrag.y);
            ctx.rotate(s.distalFrag.angle);
            ctx.fillStyle = s.isDragging ? '#ffffff' : '#d4d4d4';
            ctx.fillRect(-40, 0, 80, 150);
            // Fracture edge jagged
            ctx.beginPath();
            ctx.moveTo(-40, 0);
            ctx.lineTo(-20, -10);
            ctx.lineTo(0, 5);
            ctx.lineTo(20, -15);
            ctx.lineTo(40, 0);
            ctx.strokeStyle = '#000';
            ctx.stroke();
            ctx.restore();
            
         } else if (s.phase === OrthoPhase.DRILLING) {
           // Draw Bone Cortex
           ctx.fillStyle = '#2a2622';
           ctx.fillRect(CANVAS_W/2 - 60, 0, 120, CANVAS_H);
           
           // Draw Medullary Canal (Target m)
           ctx.fillStyle = '#1a0a0a';
           ctx.fillRect(CANVAS_W/2 - 20, 0, 40, CANVAS_H);
           
           ctx.strokeStyle = 'rgba(52, 211, 153, 0.3)';
           ctx.setLineDash([5, 5]);
           ctx.beginPath();
           ctx.moveTo(CANVAS_W/2, 0);
           ctx.lineTo(CANVAS_W/2, CANVAS_H);
           ctx.stroke();
           ctx.setLineDash([]);
           
           // Draw Particles
           for (let i = s.particles.length - 1; i >= 0; i--) {
               const p = s.particles[i];
               p.life -= dt;
               p.x += p.vx * dt;
               p.y += p.vy * dt;
               
               if (p.life <= 0) {
                   s.particles.splice(i, 1);
                   continue;
               }
               
               ctx.beginPath();
               ctx.arc(p.x, p.y, p.type === 'blood' ? 3 : p.type === 'smoke' ? 5 : 2, 0, Math.PI * 2);
               
               if (p.type === 'blood') {
                   ctx.fillStyle = `rgba(220, 30, 30, ${p.life})`;
               } else if (p.type === 'smoke') {
                   ctx.fillStyle = `rgba(150, 150, 150, ${p.life * 0.5})`;
               } else {
                   ctx.fillStyle = `rgba(220, 220, 200, ${p.life})`;
               }
               
               ctx.fill();
           }
           
           // Draw Drill
           ctx.save();
           ctx.translate(CANVAS_W/2, 50 + s.drilledDepth);
           ctx.rotate(s.drillAngle - Math.PI/2);
           
           // Drill Bit (redder if hot)
           const heatColor = Math.min(255, s.thermalNecrosis * 2.5);
           ctx.fillStyle = `rgb(${148 + heatColor}, 163, 184)`;
           ctx.fillRect(-5, -200, 10, 200);
           // Tip
           ctx.beginPath();
           ctx.moveTo(-5, 0);
           ctx.lineTo(5, 0);
           ctx.lineTo(0, 10);
           ctx.fill();
           
           ctx.restore();
           
           // Draw HUD Vector Overlay
           const dx = Math.cos(s.drillAngle);
           const dy = Math.sin(s.drillAngle);
           const dot = Math.cos(s.canalAngle)*dx + Math.sin(s.canalAngle)*dy;
           
           const vx = dx * 100;
           const vy = dy * 100;
           ctx.beginPath();
           ctx.moveTo(CANVAS_W/2, 50);
           ctx.lineTo(CANVAS_W/2 + vx, 50 + vy);
           ctx.strokeStyle = dot > 0.95 ? '#10b981' : dot > 0.85 ? '#f59e0b' : '#ef4444';
           ctx.lineWidth = 3;
           ctx.stroke();
         }
      }
      
      animationId = requestAnimationFrame(loop);
    };
    
    animationId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationId);
  }, []);
  
  const handlePointerDown = (e: React.PointerEvent) => {
    const s = stateRef.current;
    if (s.phase === OrthoPhase.REDUCTION) {
      if (s.reductionAccuracy === 1.0) return; // already snapped
      
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Basic bounding box check for distal fragment (width 80, height 150 around origin)
      const dx = x - s.distalFrag.x;
      const dy = y - s.distalFrag.y;
      
      if (Math.abs(dx) < 60 && Math.abs(dy) < 100) {
        s.isDragging = true;
        s.dragStartPos = { x, y };
        s.initialDistalPos = { x: s.distalFrag.x, y: s.distalFrag.y };
        e.currentTarget.setPointerCapture(e.pointerId);
      }
    } else if (s.phase === OrthoPhase.DRILLING) {
      s.isDrilling = true;
      s.pressure = 1.0;
      updateDrillAngle(e);
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };
  
  const handlePointerMove = (e: React.PointerEvent) => {
    const s = stateRef.current;
    if (s.phase === OrthoPhase.REDUCTION) {
      if (s.isDragging) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const deltaX = x - s.dragStartPos.x;
        const deltaY = y - s.dragStartPos.y;
        
        s.distalFrag.x = s.initialDistalPos.x + deltaX;
        s.distalFrag.y = s.initialDistalPos.y + deltaY;
        
        // Slightly rotate as we drag to simulate handling physics
        s.distalFrag.angle = s.distalFrag.angle * 0.95 + (deltaX * 0.001); 
      }
    } else if (s.phase === OrthoPhase.DRILLING) {
      if (s.isDrilling) {
          updateDrillAngle(e);
      }
    }
  };
  
  const handlePointerUp = (e: React.PointerEvent) => {
    const s = stateRef.current;
    if (s.phase === OrthoPhase.REDUCTION) {
      s.isDragging = false;
    } else if (s.phase === OrthoPhase.DRILLING) {
      s.isDrilling = false;
      s.pressure = 0.0;
    }
    e.currentTarget.releasePointerCapture(e.pointerId);
  };
  
  const updateDrillAngle = (e: React.PointerEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const originX = rect.width / 2;
    const originY = 50 + stateRef.current.drilledDepth;
    
    const dX = x - originX;
    const dY = y - originY;
    
    let angle = Math.atan2(dY, dX);
    if (angle < 0) angle = 0;
    if (angle > Math.PI) angle = Math.PI;
    
    stateRef.current.drillAngle = angle;
  };

  const advancePhase = () => {
    if (stateRef.current.phase === OrthoPhase.REDUCTION && stateRef.current.reductionAccuracy === 1.0) {
        stateRef.current.phase = OrthoPhase.DRILLING;
        soundManager.playSuccess();
    }
  };
  
  const handleComplete = () => {
    const s = stateRef.current;
    const timeTaken = (performance.now() - startTimeRef.current) / 1000;
    const accuracy = Math.max(0, 1.0 - (s.iatrogenicDamage / 500));
    onComplete(accuracy, s.iatrogenicDamage, timeTaken);
  };

  const isDanger = uiState.alignment < 0.85 && stateRef.current.isDrilling;
  const isOverheating = uiState.thermalNecrosis > 50;

  return (
    <div className="flex flex-col w-full h-full bg-[#050A08] rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800">
         <div>
            <h3 className="text-[#E8B84A] font-bold uppercase tracking-wider text-sm flex items-center gap-2">
              <Bone className="w-5 h-5" /> 
              {uiState.phase === OrthoPhase.REDUCTION ? 'Fase 1: Redução Óssea' : 'Fase 2: Perfuração e Fixação'}
            </h3>
            <p className="text-slate-400 text-xs mt-1">
              {uiState.phase === OrthoPhase.REDUCTION ? 'Tracione os fragmentos para alinhamento anatômico.' : 'Mantenha o ângulo alinhado ao canal medular. Evite superaquecimento.'}
            </p>
         </div>
         
         {uiState.phase === OrthoPhase.DRILLING && (
           <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Alinhamento</span>
                <span className={`font-mono text-lg font-bold ${uiState.alignment > 0.95 ? 'text-emerald-400' : uiState.alignment > 0.85 ? 'text-amber-400' : 'text-rose-500 animate-pulse'}`}>
                   {(uiState.alignment * 100).toFixed(1)}%
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Temperatura</span>
                <span className={`font-mono text-lg font-bold ${isOverheating ? 'text-rose-500 animate-pulse' : 'text-amber-400'}`}>
                   {Math.min(100, (uiState.thermalNecrosis / 100) * 100).toFixed(1)}%
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Profundidade</span>
                <span className="font-mono text-lg text-emerald-400 font-bold">
                   {Math.min(100, (uiState.depth / TOTAL_DEPTH) * 100).toFixed(1)}%
                </span>
              </div>
           </div>
         )}

         {uiState.phase === OrthoPhase.REDUCTION && (
           <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Precisão da Redução</span>
                <span className={`font-mono text-lg font-bold ${uiState.reductionAccuracy === 1 ? 'text-emerald-400' : 'text-amber-400'}`}>
                   {(uiState.reductionAccuracy * 100).toFixed(1)}%
                </span>
              </div>
           </div>
         )}
      </div>
      
      {/* Canvas Area */}
      <div className="relative flex-1 bg-black overflow-hidden flex items-center justify-center">
         <canvas
            ref={canvasRef}
            width={CANVAS_W}
            height={CANVAS_H}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className="w-full h-full cursor-crosshair touch-none"
         />
         
         {/* Warnings */}
         <AnimatePresence>
            {isDanger && (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }} 
                 animate={{ opacity: 1, scale: 1 }} 
                 exit={{ opacity: 0 }}
                 className="absolute top-1/4 bg-rose-950/80 border border-rose-500 text-rose-400 px-6 py-3 rounded-2xl flex items-center gap-3 backdrop-blur-sm pointer-events-none"
               >
                  <AlertTriangle className="w-8 h-8 animate-pulse" />
                  <div>
                    <div className="font-bold uppercase tracking-widest text-sm">Desvio Crítico</div>
                    <div className="text-xs">Risco de perfuração cortical lateral</div>
                  </div>
               </motion.div>
            )}
            
            {isOverheating && (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }} 
                 animate={{ opacity: 1, scale: 1 }} 
                 exit={{ opacity: 0 }}
                 className="absolute bottom-1/4 bg-rose-950/80 border border-rose-500 text-rose-400 px-6 py-3 rounded-2xl flex items-center gap-3 backdrop-blur-sm pointer-events-none"
               >
                  <Activity className="w-8 h-8 animate-pulse" />
                  <div>
                    <div className="font-bold uppercase tracking-widest text-sm">Necrose Térmica</div>
                    <div className="text-xs">Pare a perfuração para resfriar a broca</div>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
         
         {uiState.phase === OrthoPhase.REDUCTION && uiState.reductionAccuracy === 1.0 && (
            <motion.button
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               onClick={advancePhase}
               className="absolute bottom-8 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all flex items-center gap-2"
            >
               <CheckCircle2 className="w-5 h-5" /> Iniciar Osteossíntese
            </motion.button>
         )}

         {uiState.phase === OrthoPhase.DRILLING && uiState.depth >= TOTAL_DEPTH && (
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="absolute inset-0 bg-emerald-950/90 backdrop-blur-md flex flex-col items-center justify-center pointer-events-none"
            >
               <CheckCircle2 className="w-24 h-24 text-emerald-400 mb-6 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
               <h2 className="text-3xl font-black text-white tracking-widest uppercase mb-2">Fixação Concluída</h2>
               <p className="text-emerald-200 mb-8 max-w-md text-center">Parafuso cortical inserido com sucesso ao longo do eixo anatômico.</p>
               
               <button 
                  onClick={handleComplete}
                  className="pointer-events-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold uppercase tracking-widest transition-colors shadow-lg"
               >
                  Finalizar Procedimento
               </button>
            </motion.div>
         )}
      </div>
    </div>
  );
};
