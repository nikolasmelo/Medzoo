import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crosshair, CheckCircle2, Video, AlertTriangle } from 'lucide-react';
import { soundManager } from '../../../utils/sound';

interface EndoscopyMinigameProps {
  onComplete: (accuracy: number, damage: number, timeTaken: number) => void;
  onVitalsDrain: (damage: number) => void;
}

export const EndoscopyMinigame: React.FC<EndoscopyMinigameProps> = ({ onComplete, onVitalsDrain }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isFound, setIsFound] = useState(false);
  const [isExtracted, setIsExtracted] = useState(false);
  const [damage, setDamage] = useState(0);
  
  // Game state refs
  const mousePos = useRef({ x: 100, y: 100 });
  const timeStart = useRef(Date.now());
  const extractionProgress = useRef(0);
  const requestRef = useRef<number>(0);
  const isBleeding = useRef(false);
  const bloodSpots = useRef<{x: number, y: number, radius: number, alpha: number}[]>([]);

  // The winding path
  const pathRef = useRef<Path2D | null>(null);
  const TARGET_POS = { x: 650, y: 480 };

  useEffect(() => {
    // Create the winding path for the esophagus/stomach
    const p = new Path2D();
    p.moveTo(100, 100);
    p.bezierCurveTo(400, 50, 200, 400, 400, 300);
    p.bezierCurveTo(600, 200, 500, 500, TARGET_POS.x, TARGET_POS.y);
    pathRef.current = p;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    soundManager.playClick(); 

    const render = () => {
      // 1. Draw the pink mucosa (background)
      ctx.fillStyle = '#b94060'; // Mucosa pink
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw some texture on the mucosa
      ctx.fillStyle = '#9e324e';
      for (let i = 0; i < 200; i++) {
        // static pseudo-random texture based on coordinates
        const x = (Math.sin(i * 12.34) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(i * 45.67) * 0.5 + 0.5) * canvas.height;
        ctx.beginPath();
        ctx.arc(x, y, 10 + (i % 20), 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Check collision with walls using the Path stroke
      let currentlyBleeding = false;
      if (pathRef.current && !isExtracted) {
        ctx.lineWidth = 140; // Corridor width
        const isInside = ctx.isPointInStroke(pathRef.current, mousePos.current.x, mousePos.current.y);
        
        // Start point immunity (don't penalize before they move)
        const distFromStart = Math.hypot(100 - mousePos.current.x, 100 - mousePos.current.y);
        
        if (!isInside && distFromStart > 50) {
          currentlyBleeding = true;
          // Add blood spots for visual feedback
          if (Math.random() > 0.5) {
            bloodSpots.current.push({
              x: mousePos.current.x + (Math.random() - 0.5) * 40,
              y: mousePos.current.y + (Math.random() - 0.5) * 40,
              radius: 5 + Math.random() * 15,
              alpha: 1.0
            });
          }
        }
      }

      if (currentlyBleeding && !isBleeding.current) {
        soundManager.playError(); // play error sound when touching wall
      }
      isBleeding.current = currentlyBleeding;

      if (currentlyBleeding) {
         setDamage(prev => prev + 0.2); // Accumulate local damage
         onVitalsDrain(0.5); // Drain vitals continuously while touching wall
      }

      // 3. Draw the dark corridor (the lumen)
      if (pathRef.current) {
        ctx.strokeStyle = '#2a0a13'; // Dark deep tissue
        ctx.lineWidth = 140;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke(pathRef.current);
        
        // Inner shadow/depth
        ctx.strokeStyle = '#18040a';
        ctx.lineWidth = 100;
        ctx.stroke(pathRef.current);
      }

      // 4. Draw blood spots
      for (let i = bloodSpots.current.length - 1; i >= 0; i--) {
        const spot = bloodSpots.current[i];
        ctx.beginPath();
        ctx.arc(spot.x, spot.y, spot.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(130, 0, 0, ' + spot.alpha + ')';
        ctx.fill();
        spot.alpha -= 0.005; // Fade out slowly
        if (spot.alpha <= 0) {
          bloodSpots.current.splice(i, 1);
        }
      }

      // 5. Draw the target (hook/pellet) if we are close
      const distToTarget = Math.hypot(TARGET_POS.x - mousePos.current.x, TARGET_POS.y - mousePos.current.y);
      if (distToTarget < 160) {
        if (!isFound) setIsFound(true);
        
        ctx.save();
        ctx.translate(TARGET_POS.x, TARGET_POS.y);
        
        // Draw metallic object
        ctx.beginPath();
        ctx.arc(0, 0, 15, 0, Math.PI * 2);
        ctx.fillStyle = '#9ca3af';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#f3f4f6';
        ctx.stroke();

        if (!isExtracted) {
          ctx.beginPath();
          ctx.arc(0, 0, 30, 0, Math.PI * 2);
          ctx.strokeStyle = distToTarget < 40 ? '#10b981' : '#f59e0b';
          ctx.setLineDash([5, 5]);
          ctx.lineWidth = 3;
          ctx.stroke();
        }
        ctx.restore();
      } else {
        if (isFound && !isExtracted) setIsFound(false); // lost it
      }

      // 6. Draw extraction progress bar on target
      if (extractionProgress.current > 0 && !isExtracted) {
        ctx.fillStyle = '#10b981';
        ctx.fillRect(TARGET_POS.x - 25, TARGET_POS.y - 45, (extractionProgress.current / 100) * 50, 8);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.strokeRect(TARGET_POS.x - 25, TARGET_POS.y - 45, 50, 8);
      }

      // 7. Apply the Flashlight Mask (Endoscope view)
      // We draw a giant black rectangle with a transparent hole at mousePos
      const spotlightRadius = 160;
      const maskCanvas = document.createElement('canvas');
      maskCanvas.width = canvas.width;
      maskCanvas.height = canvas.height;
      const mctx = maskCanvas.getContext('2d')!;
      
      // Fill black
      mctx.fillStyle = 'black';
      mctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Cut out circle
      mctx.globalCompositeOperation = 'destination-out';
      
      const gradient = mctx.createRadialGradient(
        mousePos.current.x, mousePos.current.y, 40,
        mousePos.current.x, mousePos.current.y, spotlightRadius
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
      gradient.addColorStop(0.8, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      mctx.fillStyle = gradient;
      mctx.beginPath();
      mctx.arc(mousePos.current.x, mousePos.current.y, spotlightRadius, 0, Math.PI * 2);
      mctx.fill();

      // Draw mask over main canvas
      ctx.globalCompositeOperation = 'source-over';
      ctx.drawImage(maskCanvas, 0, 0);

      // 8. UI overlays on the canvas (dust, static)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      for (let i = 0; i < 30; i++) {
        ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
      }

      requestRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isFound, isExtracted, onVitalsDrain]);

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isExtracted) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    mousePos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handlePointerDown = (_e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isExtracted) return;
    const distToTarget = Math.hypot(TARGET_POS.x - mousePos.current.x, TARGET_POS.y - mousePos.current.y);
    
    if (distToTarget < 40) {
      soundManager.playClick();
      let progress = 0;
      const interval = setInterval(() => {
        progress += 5; // Takes about 2 seconds
        extractionProgress.current = progress;
        if (progress >= 100) {
          clearInterval(interval);
          setIsExtracted(true);
          soundManager.playSuccess();
          setTimeout(() => {
            const timeTaken = (Date.now() - timeStart.current) / 1000;
            onComplete(Math.max(0, 1 - (damage / 100)), damage, timeTaken);
          }, 1500);
        }
      }, 100);
      
      // Clear interval if mouse is released
      const handleUp = () => {
         clearInterval(interval);
         extractionProgress.current = 0;
         document.removeEventListener('pointerup', handleUp);
      };
      document.addEventListener('pointerup', handleUp);

    } else {
      soundManager.playError();
      setDamage(prev => prev + 5);
      onVitalsDrain(5);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#050505] rounded-2xl border border-slate-800 overflow-hidden text-slate-200 shadow-2xl relative">
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-10 pointer-events-none">
        <div>
          <h3 className="text-emerald-500 font-bold font-mono flex items-center gap-2 drop-shadow-md">
            <Video className="w-5 h-5" /> ENDOSCOPIA DIGESTIVA
          </h3>
          <p className="text-emerald-700 font-mono text-xs mt-1">REC • {new Date().toISOString().split('T')[1].substring(0,8)}</p>
        </div>
        
        <div className="text-right">
          <div className="bg-slate-900/80 border border-slate-700 px-3 py-1 rounded-md mb-2">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Sangramento / Lesão</span>
            <span className={`font-mono font-bold ${damage > 30 ? 'text-rose-500 animate-pulse' : 'text-emerald-400'}`}>
              {Math.floor(damage)}%
            </span>
          </div>
          {isFound && !isExtracted && (
            <div className="animate-pulse flex items-center gap-2 text-amber-400 font-bold text-xs bg-amber-950/50 px-2 py-1 rounded border border-amber-500/50">
              <Crosshair className="w-4 h-4" /> ALVO ENCONTRADO
            </div>
          )}
        </div>
      </div>

      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        className={`w-full h-full object-contain cursor-crosshair ${isExtracted ? 'opacity-50 grayscale transition-all duration-1000' : ''}`}
        style={{ touchAction: 'none' }}
      />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/80 border border-slate-700 px-6 py-3 rounded-full pointer-events-none backdrop-blur-sm">
        <p className="text-sm font-bold text-slate-300">
          {!isFound ? "Navegue pelo trato. NÃO TOQUE nas paredes cor-de-rosa!" :
           !isExtracted ? "Alinhe a pinça, CLIQUE E SEGURE para realizar a extração!" :
           "Extração bem-sucedida. Removendo endoscópio..."}
        </p>
      </div>

      <AnimatePresence>
        {isExtracted && (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
          >
            <div className="bg-emerald-950/90 border border-emerald-500 p-8 rounded-2xl flex flex-col items-center backdrop-blur-md">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-4" />
              <h2 className="text-2xl font-black text-emerald-400 uppercase tracking-widest">Extração Concluída</h2>
              <p className="text-emerald-200 mt-2">Dano Mucosal Total: {Math.floor(damage)}%</p>
            </div>
          </motion.div>
        )}
        
        {/* Blood overlay when touching walls */}
        {isBleeding.current && !isExtracted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none z-10 shadow-[inset_0_0_100px_rgba(220,38,38,0.5)] border-4 border-rose-600/50"
          >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-rose-500 flex flex-col items-center">
                <AlertTriangle className="w-12 h-12 mb-2 animate-bounce" />
                <span className="font-bold text-xl uppercase tracking-widest bg-black/50 px-4 py-1 rounded">TRAUMA MUCOSAL!</span>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
