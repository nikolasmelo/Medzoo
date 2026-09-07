import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, AlertTriangle, Droplets } from 'lucide-react';

interface SyringeIrrigationMinigameProps {
  onComplete: (accuracy: number, damage: number) => void;
  onVitalsDrain?: (damage: number) => void;
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  cleaned: boolean;
  color: string;
}

export const SyringeIrrigationMinigame: React.FC<SyringeIrrigationMinigameProps> = ({ onComplete, onVitalsDrain }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Game State Refs
  const isPlayingRef = useRef(true);
  const isSprayingRef = useRef(false);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const waterRemainingRef = useRef(100);
  const particlesRef = useRef<Particle[]>([]);
  const totalParticlesRef = useRef(0);
  const trailRef = useRef<{x: number, y: number, alpha: number}[]>([]);
  
  // UI State
  const [waterLevel, setWaterLevel] = useState(100);
  const [cleanliness, setCleanliness] = useState(0);
  const [sepsisWarning, setSepsisWarning] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize dirt particles clustered in the center
    const particles: Particle[] = [];
    const numParticles = 400;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    for (let i = 0; i < numParticles; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * 150; // max radius from center
      const isPurulent = Math.random() > 0.5; // 50% green, 50% black
      
      particles.push({
        x: centerX + Math.cos(angle) * r,
        y: centerY + Math.sin(angle) * r,
        radius: Math.random() * 4 + 2,
        cleaned: false,
        color: isPurulent ? 'rgba(133, 204, 22, 0.9)' : '#000000'
      });
    }
    particlesRef.current = particles;
    totalParticlesRef.current = numParticles;

    let animationFrameId: number;

    const render = () => {
      if (!isPlayingRef.current) return;

      // 1. Draw healthy tissue background
      ctx.fillStyle = '#be123c'; // Vibrant healthy red/pink
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw subtle dotted border marking the wound bed
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 180, 180, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0,0,0,0.3)';
      ctx.setLineDash([5, 10]);
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      // 2. Handle spraying logic, water trail, and cleaning
      if (isSprayingRef.current && waterRemainingRef.current > 0) {
        // Drastically reduced water consumption
        waterRemainingRef.current = Math.max(0, waterRemainingRef.current - 0.05); 
        setWaterLevel(Math.floor(waterRemainingRef.current));
        
        // Push trail dot
        trailRef.current.push({ x: mousePosRef.current.x, y: mousePosRef.current.y, alpha: 0.5 });
      }

      // Draw and fade water trail
      ctx.save();
      for (let i = trailRef.current.length - 1; i >= 0; i--) {
        const t = trailRef.current[i];
        ctx.beginPath();
        // Drawing the spray splash size
        ctx.arc(t.x, t.y, 60, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${t.alpha})`;
        ctx.fill();
        t.alpha -= 0.02; // Fade out quickly
        if (t.alpha <= 0) {
            trailRef.current.splice(i, 1);
        }
      }
      ctx.restore();

      // Clean dirt mechanics
      if (isSprayingRef.current && waterRemainingRef.current > 0) {
        let cleanedCount = 0;
        particlesRef.current.forEach(p => {
          if (p.cleaned) {
             cleanedCount++;
             return;
          }
          const dx = p.x - mousePosRef.current.x;
          const dy = p.y - mousePosRef.current.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          // 3x bigger hitbox (from 50 to 150)
          if (dist < 150) {
            p.cleaned = true;
            cleanedCount++;
          }
        });
        
        const currentCleanliness = Math.floor((cleanedCount / totalParticlesRef.current) * 100);
        setCleanliness(currentCleanliness);
        
        // Check win condition
        if (currentCleanliness >= 95) {
            isPlayingRef.current = false;
            setTimeout(() => onComplete(100, 0), 1000);
        }
      }

      // Check lose condition (run out of water but not clean)
      if (waterRemainingRef.current <= 0 && isPlayingRef.current) {
         isPlayingRef.current = false;
         const finalClean = Math.floor((particlesRef.current.filter(p => p.cleaned).length / totalParticlesRef.current) * 100);
         
         if (finalClean < 95) {
             setSepsisWarning(true);
             const sepsisDamage = 40; // Massive damage
             if (onVitalsDrain) onVitalsDrain(sepsisDamage);
             setTimeout(() => onComplete(finalClean, sepsisDamage), 2500);
         } else {
             setTimeout(() => onComplete(finalClean, 0), 1000);
         }
      }

      // 3. Draw dirt particles
      particlesRef.current.forEach(p => {
        if (!p.cleaned) {
          ctx.fillStyle = p.color; // Purulent green or black
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      
      // 4. Draw crosshair
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(mousePosRef.current.x, mousePosRef.current.y, 8, 0, Math.PI * 2);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Event Listeners
    const updateMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      mousePosRef.current = {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
      };
    };

    const handleMouseDown = () => { isSprayingRef.current = true; };
    const handleMouseUp = () => { isSprayingRef.current = false; };
    const handleMouseLeave = () => { isSprayingRef.current = false; };

    canvas.addEventListener('mousemove', updateMouse);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', updateMouse);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [onComplete, onVitalsDrain]);

  return (
    <div className="flex flex-col h-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative">
      {/* Header */}
      <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Droplets className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="font-bold text-white">Irrigação da Ferida</h3>
            <p className="text-xs text-slate-400">Limpe o tecido necrótico/contaminado.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
             <div className="text-[10px] text-slate-400 font-mono mb-1">SORO FISIOLÓGICO</div>
             <div className="w-32 h-3 bg-slate-700 rounded-full overflow-hidden border border-slate-600">
               <div 
                 className={`h-full transition-all ${waterLevel > 30 ? 'bg-blue-400' : 'bg-red-500'}`} 
                 style={{ width: `${waterLevel}%` }}
               />
             </div>
          </div>
          <div className="text-right">
             <div className="text-[10px] text-slate-400 font-mono mb-1">LIMPEZA</div>
             <div className="w-32 h-3 bg-slate-700 rounded-full overflow-hidden border border-slate-600">
               <div 
                 className={`h-full transition-all ${cleanliness >= 95 ? 'bg-emerald-400' : 'bg-[#C89A3C]'}`} 
                 style={{ width: `${cleanliness}%` }}
               />
             </div>
          </div>
        </div>
      </div>

      {/* Sepsis Warning Alert */}
      {sepsisWarning && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-red-900/90 border border-red-500 text-red-100 px-6 py-3 rounded-xl flex items-center gap-3 z-50 animate-pulse">
          <AlertTriangle className="w-6 h-6 text-red-400" />
          <div>
            <div className="font-bold text-sm">RISCO DE SEPSE!</div>
            <div className="text-xs">O soro acabou antes da descontaminação. Choque séptico iminente!</div>
          </div>
        </div>
      )}

      {/* Canvas Area */}
      <div className="flex-1 relative cursor-crosshair">
        <canvas
          ref={canvasRef}
          width={800}
          height={500}
          className="w-full h-full object-cover"
        />
        
        {/* Instructions overlay */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm border border-slate-700 px-4 py-2 rounded-lg pointer-events-none">
          <p className="text-sm text-slate-300 font-medium">
            <span className="text-blue-400 font-bold">SEGURE O CLIQUE</span> para jorrar soro e limpar as partículas.
          </p>
        </div>
      </div>
    </div>
  );
};
