import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Crosshair, CheckCircle2, Zap, Sparkles } from 'lucide-react';
import type { SurgicalMinigameProps } from '../../../types';
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

const CANVAS_W = 700;
const CANVAS_H = 400;
const GUIDE_START_X = 100;
const GUIDE_END_X = 600;
const GUIDE_Y = 200;
const GUIDE_LENGTH = GUIDE_END_X - GUIDE_START_X; // 500px

// Predefined surgical vessels along the incision path (at ~30% and ~68%)
const VESSEL_LOCATIONS = [250, 440];

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

export const SoftTissueIncisionMinigame: React.FC<SurgicalMinigameProps> = ({
  stepId,
  executionToken,
  onComplete,
  onVitalsDrain,
  unlockedUpgrades = [],
}) => {
  const hasScalpelUpgrade = unlockedUpgrades.includes('scalpel_ergonomic');
  const hasHemostaticUpgrade = unlockedUpgrades.includes('hemostatic_forceps');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [activeTool, setActiveTool] = useState<'scalpel' | 'cautery'>('scalpel');
  const activeToolRef = useRef<'scalpel' | 'cautery'>('scalpel');
  const [incisionProgress, setIncisionProgress] = useState(0); // 0 to 100%
  const [isCutFinished, setIsCutFinished] = useState(false);
  const [hasActiveBleeding, setHasActiveBleeding] = useState(false);

  const stateRef = useRef({
    points: [] as Point[],
    bleeders: [] as Bleeder[],
    isDrawing: false,
    cursorPos: { x: CANVAS_W / 2, y: CANVAS_H / 2 },
    maxCutX: GUIDE_START_X,
    hasStartedCut: false,
    spawnedVessels: new Set<number>(),
    totalLength: 0,
    iatrogenicDamage: 0,
    totalBloodLoss: 0,
    particles: [] as {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      type: 'smoke' | 'spark' | 'blood';
      color?: string;
    }[]
  });

  const startTimeRef = useRef<number>(performance.now());
  const lastTimeRef = useRef<number>(performance.now());
  const bleederIdCounter = useRef(0);
  const onVitalsDrainRef = useRef(onVitalsDrain);
  const lastProgressRef = useRef<number>(0);
  const lastEndedRef = useRef<boolean>(false);
  const lastBleedRef = useRef<boolean>(false);

  useEffect(() => {
    onVitalsDrainRef.current = onVitalsDrain;
  }, [onVitalsDrain]);

  const selectTool = (tool: 'scalpel' | 'cautery') => {
    setActiveTool(tool);
    activeToolRef.current = tool;
  };

  useEffect(() => {
    let animationId: number;

    const loop = (time: number) => {
      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = time;
      const s = stateRef.current;
      const tool = activeToolRef.current;

      let activeBleedingRate = 0;

      // Update Bleeders
      s.bleeders.forEach(b => {
        if (b.active) {
          b.radius = Math.min(38, b.radius + b.rate * dt * 14.0);
          s.totalBloodLoss += b.rate * dt * 0.5;
          activeBleedingRate += b.rate * 0.8;
        }
      });

      // Report active bleeding rate continuously as vitals drain (hemostatic_forceps reduces drain by 30%)
      if (activeBleedingRate > 0 && onVitalsDrainRef.current) {
        const drainFactor = hasHemostaticUpgrade ? 0.7 : 1.0;
        onVitalsDrainRef.current(activeBleedingRate * dt * drainFactor);
      }

      // Cautery logic when held down
      if (tool === 'cautery' && s.isDrawing) {
        let cauterizedAny = false;
        s.bleeders.forEach(b => {
          if (b.active) {
            const dx = b.x - s.cursorPos.x;
            const dy = b.y - s.cursorPos.y;
            const dist = Math.hypot(dx, dy);

            // Generous target radius of 45px for smooth interactive cauterization
            if (dist < 45) {
              b.active = false;
              cauterizedAny = true;
              
              // Spark burst
              for (let i = 0; i < 14; i++) {
                const angle = Math.random() * Math.PI * 2;
                const spd = 35 + Math.random() * 85;
                s.particles.push({
                  x: b.x,
                  y: b.y,
                  vx: Math.cos(angle) * spd,
                  vy: Math.sin(angle) * spd,
                  life: 0.5 + Math.random() * 0.4,
                  maxLife: 0.8,
                  type: 'spark',
                  color: Math.random() > 0.4 ? '#FDE047' : '#38BDF8'
                });
              }

              // Smoke puff
              for (let i = 0; i < 7; i++) {
                s.particles.push({
                  x: b.x + (Math.random() - 0.5) * 10,
                  y: b.y + (Math.random() - 0.5) * 10,
                  vx: (Math.random() - 0.5) * 15,
                  vy: -25 - Math.random() * 25,
                  life: 0.9,
                  maxLife: 0.9,
                  type: 'smoke'
                });
              }
            }
          }
        });
        
        if (cauterizedAny) {
          soundManager.playResinExotherm(60);
          soundManager.playClick();
        }

        // Ambient cautery sparks under tip
        if (Math.random() < 0.3) {
          s.particles.push({
            x: s.cursorPos.x + (Math.random() - 0.5) * 8,
            y: s.cursorPos.y + (Math.random() - 0.5) * 8,
            vx: (Math.random() - 0.5) * 30,
            vy: (Math.random() - 0.5) * 30 - 15,
            life: 0.35,
            maxLife: 0.35,
            type: 'spark',
            color: '#F59E0B'
          });
        }
      }

      // Update particles
      for (let i = s.particles.length - 1; i >= 0; i--) {
        const p = s.particles[i];
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.life -= dt;
        if (p.life <= 0) {
          s.particles.splice(i, 1);
        }
      }

      // Progress calculation
      const progressPct = Math.min(100, Math.max(0, Math.round(((s.maxCutX - GUIDE_START_X) / GUIDE_LENGTH) * 100)));
      const isEnded = s.maxCutX >= GUIDE_END_X - 10;
      const hasBleed = s.bleeders.some(b => b.active);

      if (progressPct !== lastProgressRef.current) {
        lastProgressRef.current = progressPct;
        setIncisionProgress(progressPct);
      }
      if (isEnded !== lastEndedRef.current) {
        lastEndedRef.current = isEnded;
        setIsCutFinished(isEnded);
      }
      if (hasBleed !== lastBleedRef.current) {
        lastBleedRef.current = hasBleed;
        setHasActiveBleeding(hasBleed);
      }

      // Render
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      
      if (ctx && canvas) {
        // 1. Dark elegant surgical field background
        ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
        ctx.fillStyle = '#141E19';
        ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

        // Subtle surgical tissue grid
        ctx.fillStyle = 'rgba(255, 255, 255, 0.015)';
        for (let i = 0; i < CANVAS_W; i += 40) {
          ctx.fillRect(i, 0, 1, CANVAS_H);
        }
        for (let j = 0; j < CANVAS_H; j += 40) {
          ctx.fillRect(0, j, CANVAS_W, 1);
        }
        
        // 2. Anatomical Guide Line (dashed emerald)
        ctx.save();
        ctx.strokeStyle = '#064E3B';
        ctx.lineWidth = 7;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(GUIDE_START_X, GUIDE_Y);
        ctx.lineTo(GUIDE_END_X, GUIDE_Y);
        ctx.stroke();

        ctx.strokeStyle = '#10B981';
        ctx.setLineDash([8, 8]);
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(GUIDE_START_X, GUIDE_Y);
        ctx.lineTo(GUIDE_END_X, GUIDE_Y);
        ctx.stroke();
        ctx.setLineDash([]);

        // Start Node beacon
        const hasStarted = s.hasStartedCut;
        ctx.fillStyle = hasStarted ? '#059669' : '#10B981';
        ctx.beginPath();
        ctx.arc(GUIDE_START_X, GUIDE_Y, hasStarted ? 6 : 9, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = hasStarted ? '#34D399' : '#A7F3D0';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#A7F3D0';
        ctx.font = 'bold 10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('INÍCIO', GUIDE_START_X, GUIDE_Y + 22);

        // Finish Node beacon
        ctx.fillStyle = isEnded ? '#10B981' : '#334155';
        ctx.beginPath();
        ctx.arc(GUIDE_END_X, GUIDE_Y, isEnded ? 9 : 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = isEnded ? '#34D399' : '#64748B';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = isEnded ? '#A7F3D0' : '#94A3B8';
        ctx.font = 'bold 10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('FIM', GUIDE_END_X, GUIDE_Y + 22);
        ctx.restore();

        // 3. Draw Blood Pools (Bleeders)
        s.bleeders.forEach(b => {
          if (b.radius > 0) {
            const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, Math.min(b.radius, 42));
            grad.addColorStop(0, 'rgba(239, 68, 68, 0.95)');
            grad.addColorStop(0.65, 'rgba(185, 28, 28, 0.7)');
            grad.addColorStop(1, 'rgba(127, 29, 29, 0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(b.x, b.y, Math.min(b.radius, 42), 0, Math.PI * 2);
            ctx.fill();
          }

          if (b.active) {
            // Pulsating glowing beacon indicating WHERE TO APPLY CAUTERY
            const pulse = (Math.sin(time / 140) + 1) * 0.5; // 0 to 1
            const beaconR = 15 + pulse * 10;

            ctx.save();
            // Glowing outer alert ring
            ctx.strokeStyle = '#F59E0B';
            ctx.lineWidth = 2.5;
            ctx.shadowColor = '#F59E0B';
            ctx.shadowBlur = 12;
            ctx.beginPath();
            ctx.arc(b.x, b.y, beaconR, 0, Math.PI * 2);
            ctx.stroke();

            // Inner arterial red pulse
            ctx.fillStyle = '#EF4444';
            ctx.beginPath();
            ctx.arc(b.x, b.y, 6, 0, Math.PI * 2);
            ctx.fill();

            // Core white/amber spark dot
            ctx.fillStyle = '#FEF08A';
            ctx.beginPath();
            ctx.arc(b.x, b.y, 2.5, 0, Math.PI * 2);
            ctx.fill();

            // Callout Tag: [ ⚡ CAUTERIZAR ]
            const badgeW = 104;
            const badgeH = 22;
            const badgeX = b.x - badgeW / 2;
            const badgeY = b.y - 42 - pulse * 4;

            ctx.fillStyle = 'rgba(15, 23, 42, 0.94)';
            ctx.strokeStyle = '#F59E0B';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.roundRect(badgeX, badgeY, badgeW, badgeH, 6);
            ctx.fill();
            ctx.stroke();

            // Pointer arrow
            ctx.fillStyle = '#F59E0B';
            ctx.beginPath();
            ctx.moveTo(b.x - 5, badgeY + badgeH);
            ctx.lineTo(b.x + 5, badgeY + badgeH);
            ctx.lineTo(b.x, badgeY + badgeH + 5);
            ctx.closePath();
            ctx.fill();

            // Badge text
            ctx.fillStyle = '#FDE047';
            ctx.font = 'bold 10px monospace';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('⚡ CAUTERIZAR', b.x, badgeY + badgeH / 2);
            ctx.restore();
          } else {
            // Healed/cauterized node
            ctx.save();
            ctx.fillStyle = '#0F172A';
            ctx.beginPath();
            ctx.arc(b.x, b.y, 5, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = '#10B981';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            ctx.fillStyle = '#34D399';
            ctx.font = 'bold 9px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('✓', b.x, b.y - 8);
            ctx.restore();
          }
        });

        // 4. Draw Incision Cut Line (vibrant surgical red cut)
        if (s.points.length > 0) {
          ctx.save();
          ctx.beginPath();
          ctx.strokeStyle = '#DC2626';
          ctx.lineWidth = 5;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.shadowColor = '#DC2626';
          ctx.shadowBlur = 8;
          
          if (s.points.length === 1) {
            ctx.arc(s.points[0].x, s.points[0].y, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#DC2626';
            ctx.fill();
          } else {
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
            
            // Inner lighter highlight of incision line
            ctx.strokeStyle = '#FCA5A5';
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
          ctx.restore();
        }
        
        // 5. Draw Particles (Sparks & Smoke)
        s.particles.forEach(p => {
          ctx.save();
          const alpha = Math.max(0, p.life / p.maxLife);
          if (p.type === 'smoke') {
            ctx.fillStyle = `rgba(203, 213, 225, ${alpha * 0.45})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 6 + (1 - alpha) * 8, 0, Math.PI * 2);
            ctx.fill();
          } else if (p.type === 'spark') {
            ctx.fillStyle = p.color || '#FDE047';
            ctx.shadowColor = p.color || '#FDE047';
            ctx.shadowBlur = 6;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2.5 * alpha, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        });

        // 6. Draw Surgical Tool Cursor
        ctx.save();
        if (tool === 'scalpel') {
          // Scalpel blade reticle
          ctx.beginPath();
          ctx.arc(s.cursorPos.x, s.cursorPos.y, 11, 0, Math.PI * 2);
          ctx.strokeStyle = '#38BDF8';
          ctx.lineWidth = 2;
          ctx.stroke();

          // Crosshair ticks
          ctx.strokeStyle = '#38BDF8';
          ctx.beginPath();
          ctx.moveTo(s.cursorPos.x - 15, s.cursorPos.y);
          ctx.lineTo(s.cursorPos.x + 15, s.cursorPos.y);
          ctx.moveTo(s.cursorPos.x, s.cursorPos.y - 15);
          ctx.lineTo(s.cursorPos.x, s.cursorPos.y + 15);
          ctx.stroke();
        } else {
          // Electrocautery reticle
          const pulse = (Math.sin(time / 100) + 1) * 0.5;
          ctx.beginPath();
          ctx.arc(s.cursorPos.x, s.cursorPos.y, 20 + pulse * 4, 0, Math.PI * 2);
          ctx.strokeStyle = '#F59E0B';
          ctx.lineWidth = 2;
          ctx.setLineDash([4, 4]);
          ctx.stroke();
          ctx.setLineDash([]);

          ctx.fillStyle = s.isDrawing ? 'rgba(245, 158, 11, 0.45)' : 'rgba(245, 158, 11, 0.15)';
          ctx.beginPath();
          ctx.arc(s.cursorPos.x, s.cursorPos.y, 12, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#FEF08A';
          ctx.beginPath();
          ctx.arc(s.cursorPos.x, s.cursorPos.y, 3, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [hasHemostaticUpgrade, hasScalpelUpgrade]);

  const handlePointerDown = (e: React.PointerEvent) => {
    stateRef.current.isDrawing = true;
    updatePointer(e);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    updatePointer(e);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    stateRef.current.isDrawing = false;
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {}
  };

  const updatePointer = (e: React.PointerEvent) => {
    const s = stateRef.current;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const x = (e.clientX - rect.left) * (CANVAS_W / rect.width);
    const y = (e.clientY - rect.top) * (CANVAS_H / rect.height);
    s.cursorPos = { x, y };

    const tool = activeToolRef.current;

    if (s.isDrawing && tool === 'scalpel') {
      const distToLine = Math.abs(y - GUIDE_Y);
      
      // Must cut near the incision line
      if (distToLine < 35 && x >= GUIDE_START_X - 35 && x <= GUIDE_END_X + 35) {
        if (!s.hasStartedCut) {
          // Must initiate cut near the starting marker on the left
          if (x <= GUIDE_START_X + 50) {
            s.hasStartedCut = true;
            s.maxCutX = Math.max(GUIDE_START_X, x);
            s.points.push({ x: GUIDE_START_X, y: GUIDE_Y });
            s.points.push({ x, y });
            soundManager.playSurgicalIncision(0.5);
          }
        } else {
          // Advance the incision cut smoothly along the guide line
          if (x > s.maxCutX && x <= s.maxCutX + 50) {
            s.maxCutX = Math.min(GUIDE_END_X, x);
            s.points.push({ x, y });
            
            if (Math.random() < 0.2) {
              soundManager.playSurgicalIncision(0.35);
            }

            // Trigger predetermined vessels when cut passes through them
            VESSEL_LOCATIONS.forEach(vx => {
              if (s.maxCutX >= vx && !s.spawnedVessels.has(vx)) {
                s.spawnedVessels.add(vx);
                s.bleeders.push({
                  id: bleederIdCounter.current++,
                  x: vx,
                  y: GUIDE_Y,
                  radius: 12,
                  active: true,
                  rate: hasHemostaticUpgrade ? 0.08 : 0.12
                });
                soundManager.playDiscovery();
              }
            });

            // Extra micro-bleeders if cutting erratically away from centerline
            if (distToLine > 22 && Math.random() < (hasScalpelUpgrade ? 0.02 : 0.04)) {
              s.bleeders.push({
                id: bleederIdCounter.current++,
                x,
                y,
                radius: 8,
                active: true,
                rate: 0.07
              });
            }
          } else if (Math.abs(x - s.maxCutX) <= 35) {
            s.points.push({ x, y });
          }
        }
      }
    }
  };

  const handleComplete = () => {
    const s = stateRef.current;
    const timeTaken = (performance.now() - startTimeRef.current) / 1000;
    
    const activeBleederCount = s.bleeders.filter(b => b.active).length;
    const accuracy = Math.max(0.7, 1.0 - (activeBleederCount * 0.1));
    const damage = Math.min(10, activeBleederCount * 3);
    
    soundManager.playSuccess();
    onComplete({
      stepId: stepId || '',
      executionToken: executionToken || '',
      result: accuracy >= 0.7 ? 'success' : 'failure',
      accuracy,
      damage,
      timeTaken: Math.round(timeTaken),
    });
  };

  const canAdvance = isCutFinished && !hasActiveBleeding;

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
             <div className="flex flex-wrap gap-2 mt-2">
               {hasScalpelUpgrade && (
                 <div className="px-2.5 py-0.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-bold flex items-center gap-1 shadow-sm">
                   <Sparkles className="w-3 h-3 text-amber-400" />
                   <span>Bisturi Ergonômico (-38% Lacerações)</span>
                 </div>
               )}
               {hasHemostaticUpgrade && (
                 <div className="px-2.5 py-0.5 rounded-lg bg-teal-500/20 border border-teal-500/40 text-teal-300 text-[10px] font-bold flex items-center gap-1 shadow-sm">
                   <Sparkles className="w-3 h-3 text-teal-400" />
                   <span>Pinças de Titânio (-30% Perda Sanguínea)</span>
                 </div>
               )}
             </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 rounded-xl border bg-[#0a0f0d] border-slate-700 min-w-[150px]">
              <div className="flex justify-between items-center text-[10px] uppercase font-bold text-slate-400 mb-1">
                <span>Incisão</span>
                <span className="text-amber-400 font-mono font-bold">{incisionProgress}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-150"
                  style={{ width: `${incisionProgress}%` }}
                />
              </div>
            </div>

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
              onClick={() => selectTool('scalpel')}
              className={`flex-1 flex flex-col items-center justify-center gap-2 rounded-xl border transition-all ${
                 activeTool === 'scalpel' 
                 ? 'bg-[#1C382B] border-[#E8B84A] text-[#E8B84A] shadow-[0_0_15px_rgba(232,184,74,0.25)]' 
                 : 'bg-[#0E1713] border-slate-800 text-slate-500 hover:border-slate-700'
              }`}
            >
               <Crosshair className="w-8 h-8" />
               <span className="font-bold text-sm uppercase">Bisturi</span>
               <span className="text-[10px] text-slate-400">Incisão na Linha Guia</span>
            </button>
            
            <button
              onClick={() => selectTool('cautery')}
              className={`relative flex-1 flex flex-col items-center justify-center gap-2 rounded-xl border transition-all ${
                 activeTool === 'cautery' 
                 ? 'bg-amber-900/40 border-amber-400 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]' 
                 : hasActiveBleeding
                   ? 'bg-amber-950/40 border-amber-500/80 text-amber-300 animate-pulse'
                   : 'bg-[#0E1713] border-slate-800 text-slate-500 hover:border-slate-700'
              }`}
            >
               {hasActiveBleeding && (
                 <span className="absolute -top-2 -right-2 bg-amber-500 text-black font-black text-[10px] px-2 py-0.5 rounded-full shadow-lg flex items-center gap-1 animate-bounce">
                   ⚡ USAR AGORA
                 </span>
               )}
               <Zap className="w-8 h-8" />
               <span className="font-bold text-sm uppercase">Eletrocautério</span>
               <span className="text-[10px] text-slate-400">Neutralizar Vasos</span>
            </button>
         </div>

         <div className="flex-1 relative rounded-2xl overflow-hidden border border-slate-700 bg-[#1c1917] cursor-crosshair">
            <canvas 
               ref={canvasRef}
               width={CANVAS_W}
               height={CANVAS_H}
               onPointerDown={handlePointerDown}
               onPointerMove={handlePointerMove}
               onPointerUp={handlePointerUp}
               onPointerLeave={handlePointerUp}
               onPointerCancel={handlePointerUp}
               className="w-full h-full block touch-none select-none relative z-10 cursor-crosshair"
               style={{ touchAction: 'none' }}
            />

            {!isCutFinished && (
              <div className="absolute bottom-3 left-4 bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-lg text-[11px] text-slate-300 z-10 flex items-center gap-2 backdrop-blur-sm pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Corte com o bisturi do <strong>INÍCIO</strong> (esquerda) ao <strong>FIM</strong> (direita)</span>
              </div>
            )}

            {canAdvance && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center gap-4 z-20"
              >
                 <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400">
                   <CheckCircle2 className="w-10 h-10" />
                 </div>
                 <div className="text-center">
                   <h2 className="text-2xl font-black text-emerald-400 tracking-wider">INCISÃO CONCLUÍDA</h2>
                   <p className="text-emerald-200/80 text-sm mt-1">100% da linha percorrida & hemostasia assegurada</p>
                 </div>
                 <button 
                   onClick={handleComplete}
                   className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 border border-emerald-300 text-white font-bold transition-all shadow-xl hover:shadow-emerald-500/25 active:scale-95"
                 >
                    Avançar Etapa
                 </button>
              </motion.div>
            )}
            
            {isCutFinished && hasActiveBleeding && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-rose-950/95 border border-rose-500 px-6 py-3 rounded-xl z-20 text-center shadow-2xl flex items-center gap-3 backdrop-blur-md"
              >
                 <Zap className="w-6 h-6 text-amber-400 animate-bounce flex-shrink-0" />
                 <div className="text-left">
                   <span className="text-rose-200 font-bold uppercase block text-xs">Corte concluído, mas há hemorragia ativa!</span>
                   <span className="text-xs text-rose-300">Selecione o <strong>Eletrocautério</strong> e choque os pontos marcados com <strong>[⚡ CAUTERIZAR]</strong>.</span>
                 </div>
              </motion.div>
            )}
         </div>
      </div>
    </div>
  );
};
