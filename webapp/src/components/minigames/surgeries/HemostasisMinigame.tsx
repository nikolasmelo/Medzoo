import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, AlertTriangle, CheckCircle2, Droplets, Sparkles } from 'lucide-react';
import type { SurgicalMinigameProps } from '../../../types';
import { soundManager } from '../../../utils/sound';

interface BleedingVessel {
  id: number;
  x: number;
  y: number;
  bleedRate: number; // blood spread intensity
  status: 'active' | 'coagulated' | 'necrotic';
  cauterizeTime: number; // accumulated hold time (seconds)
}

interface BloodPool {
  x: number;
  y: number;
  radius: number;
  alpha: number;
}

interface SmokeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

export const HemostasisMinigame: React.FC<SurgicalMinigameProps> = ({
  stepId,
  executionToken,
  onComplete,
  onCancel: _onCancel,
  onVitalsDrain,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Active Tool: 'cautery' (Bipolar Electrocautery) | 'suction' (Gauze & Aspirator)
  const [activeTool, setActiveTool] = useState<'cautery' | 'suction'>('cautery');
  const [bloodVolume, setBloodVolume] = useState(100);
  const [isFiring, setIsFiring] = useState(false);
  const [cauteryHoldTime, setCauteryHoldTime] = useState(0);
  const [targetVesselIndex, setTargetVesselIndex] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  // References for continuous game loop
  const isPlayingRef = useRef(true);
  const bloodVolumeRef = useRef(100);
  const mousePosRef = useRef({ x: 400, y: 250 });
  const isFiringRef = useRef(false);
  const activeToolRef = useRef<'cautery' | 'suction'>('cautery');
  const timeoutIdsRef = useRef<number[]>([]);

  // Callbacks in refs
  const onCompleteRef = useRef(onComplete);
  const onVitalsDrainRef = useRef(onVitalsDrain);
  useEffect(() => {
    onCompleteRef.current = onComplete;
    onVitalsDrainRef.current = onVitalsDrain;
  }, [onComplete, onVitalsDrain]);

  // Vessels state
  const vesselsRef = useRef<BleedingVessel[]>([
    { id: 1, x: 310, y: 210, bleedRate: 1.2, status: 'active', cauterizeTime: 0 },
    { id: 2, x: 480, y: 190, bleedRate: 1.5, status: 'active', cauterizeTime: 0 },
    { id: 3, x: 390, y: 260, bleedRate: 1.8, status: 'active', cauterizeTime: 0 },
    { id: 4, x: 290, y: 310, bleedRate: 1.0, status: 'active', cauterizeTime: 0 },
    { id: 5, x: 510, y: 290, bleedRate: 1.4, status: 'active', cauterizeTime: 0 },
  ]);

  const bloodPoolsRef = useRef<BloodPool[]>([
    { x: 310, y: 210, radius: 25, alpha: 0.8 },
    { x: 480, y: 190, radius: 30, alpha: 0.85 },
    { x: 390, y: 260, radius: 35, alpha: 0.9 },
    { x: 290, y: 310, radius: 20, alpha: 0.75 },
    { x: 510, y: 290, radius: 28, alpha: 0.8 },
  ]);

  const smokeParticlesRef = useRef<SmokeParticle[]>([]);

  // Synchronize state to refs
  useEffect(() => {
    isFiringRef.current = isFiring;
    activeToolRef.current = activeTool;
  }, [isFiring, activeTool]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const render = () => {
      if (!isPlayingRef.current) return;

      const w = canvas.width;
      const h = canvas.height;

      // ── 1. Surgical Drape Frame ──
      ctx.fillStyle = '#050B08';
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = '#0A1A14';
      ctx.beginPath();
      ctx.roundRect(30, 20, w - 60, h - 40, 24);
      ctx.fill();
      ctx.strokeStyle = '#143628';
      ctx.lineWidth = 3;
      ctx.stroke();

      // ── 2. Wound Bed Muscle Cavity ──
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(400, 250, 270, 150, 0, 0, Math.PI * 2);
      const cavityGrad = ctx.createRadialGradient(400, 250, 30, 400, 250, 270);
      cavityGrad.addColorStop(0, '#5C081A');
      cavityGrad.addColorStop(0.7, '#3A0410');
      cavityGrad.addColorStop(1, '#1A0208');
      ctx.fillStyle = cavityGrad;
      ctx.fill();
      ctx.strokeStyle = '#9F1239';
      ctx.lineWidth = 6;
      ctx.stroke();

      // Striations in muscle tissue
      ctx.strokeStyle = 'rgba(251, 113, 133, 0.12)';
      ctx.lineWidth = 2;
      for (let offset = -180; offset <= 180; offset += 30) {
        ctx.beginPath();
        ctx.moveTo(400 + offset, 130);
        ctx.quadraticCurveTo(400 + offset * 0.9, 250, 400 + offset, 370);
        ctx.stroke();
      }
      ctx.restore();

      // ── 3. Blood Accumulation & Pooling Physics ──
      let activeBleeders = 0;
      vesselsRef.current.forEach((v, idx) => {
        if (v.status === 'active') {
          activeBleeders++;
          // Bleed onto associated blood pool
          const pool = bloodPoolsRef.current[idx];
          if (pool && pool.radius < 95) {
            pool.radius += v.bleedRate * 0.05;
            pool.alpha = Math.min(0.95, pool.alpha + 0.002);
          }
        }
      });

      // Systemic blood volume loss
      if (activeBleeders > 0) {
        bloodVolumeRef.current = Math.max(0, bloodVolumeRef.current - activeBleeders * 0.025);
        setBloodVolume(Math.floor(bloodVolumeRef.current));

        // Lose condition: Exsanguination
        if (bloodVolumeRef.current <= 0 && isPlayingRef.current) {
          isPlayingRef.current = false;
          setIsFailed(true);
          soundManager.playError();
          if (onVitalsDrainRef.current) onVitalsDrainRef.current(25);

          const tid = window.setTimeout(() => {
            if (onCompleteRef.current) {
              onCompleteRef.current({
                stepId: stepId || 'step_hemostasis',
                executionToken: executionToken || '',
                result: 'failure',
                accuracy: 0.2,
                damage: 25,
              });
            }
          }, 2000);
          timeoutIdsRef.current.push(tid);
        }
      }

      // Render Blood Pools
      ctx.save();
      bloodPoolsRef.current.forEach((p) => {
        if (p.radius > 5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          const poolGrad = ctx.createRadialGradient(p.x, p.y, 2, p.x, p.y, p.radius);
          poolGrad.addColorStop(0, `rgba(159, 18, 57, ${p.alpha})`);
          poolGrad.addColorStop(0.7, `rgba(136, 19, 55, ${p.alpha * 0.9})`);
          poolGrad.addColorStop(1, 'rgba(76, 5, 25, 0)');
          ctx.fillStyle = poolGrad;
          ctx.fill();
        }
      });
      ctx.restore();

      // ── 4. Render Bleeding Vessels (Points of Origin) ──
      vesselsRef.current.forEach((v) => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(v.x, v.y, 8, 0, Math.PI * 2);

        if (v.status === 'active') {
          // Bright pulsatile red dot with arterial ring
          ctx.fillStyle = '#E11D48';
          ctx.fill();
          ctx.strokeStyle = '#FDA4AF';
          ctx.lineWidth = 2;
          ctx.stroke();

          // Spurt micro-droplets
          const pulse = (Date.now() / 200) % Math.PI;
          ctx.beginPath();
          ctx.arc(v.x, v.y, 10 + Math.sin(pulse) * 4, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(244, 63, 94, 0.4)';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        } else if (v.status === 'coagulated') {
          // Blanched / white-coagulated thrombus
          ctx.fillStyle = '#F1F5F9';
          ctx.fill();
          ctx.strokeStyle = '#94A3B8';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        } else {
          // Necrotic charcoal black
          ctx.fillStyle = '#18181B';
          ctx.fill();
          ctx.strokeStyle = '#71717A';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
        ctx.restore();
      });

      // ── 5. Tool Mechanics Handling ──
      const mx = mousePosRef.current.x;
      const my = mousePosRef.current.y;

      // Suction / Gauze action: Shrink blood pools near cursor
      if (isFiringRef.current && activeToolRef.current === 'suction') {
        bloodPoolsRef.current.forEach((p) => {
          const dist = Math.hypot(p.x - mx, p.y - my);
          if (dist < 75) {
            p.radius = Math.max(8, p.radius - 0.8);
            p.alpha = Math.max(0.2, p.alpha - 0.015);
          }
        });
        soundManager.playTone(280, 0.04, 0.02);
      }

      // Electrocautery action: Apply high-frequency thermal coagulation
      if (isFiringRef.current && activeToolRef.current === 'cautery') {
        // Find closest vessel
        let closestIdx: number | null = null;
        let minDist = 30;

        vesselsRef.current.forEach((v, idx) => {
          const dist = Math.hypot(v.x - mx, v.y - my);
          if (dist < minDist && v.status === 'active') {
            minDist = dist;
            closestIdx = idx;
          }
        });

        if (closestIdx !== null) {
          const v = vesselsRef.current[closestIdx];
          v.cauterizeTime += 0.016;
          setCauteryHoldTime(v.cauterizeTime);
          setTargetVesselIndex(closestIdx);

          soundManager.playTone(700 + v.cauterizeTime * 150, 0.05, 0.04);

          // Emit smoke particles
          smokeParticlesRef.current.push({
            x: v.x + (Math.random() - 0.5) * 6,
            y: v.y + (Math.random() - 0.5) * 6,
            vx: (Math.random() - 0.5) * 20,
            vy: -Math.random() * 30 - 15,
            radius: Math.random() * 4 + 2,
            alpha: 0.6,
          });

          // Check if coagulation sweet spot (0.8s to 1.4s)
          if (v.cauterizeTime >= 0.9 && v.cauterizeTime <= 1.4 && v.status === 'active') {
            v.status = 'coagulated';
            soundManager.playSuccess();

            // Clear associated blood pool
            const pool = bloodPoolsRef.current[closestIdx];
            if (pool) pool.radius = 12;

            // Check if all vessels coagulated
            const remaining = vesselsRef.current.filter((item) => item.status === 'active').length;
            if (remaining === 0 && isPlayingRef.current) {
              isPlayingRef.current = false;
              setIsCompleted(true);
              soundManager.playSuccess();

              const accuracy = Math.min(1.0, bloodVolumeRef.current / 100);
              const emitTid = window.setTimeout(() => {
                if (onCompleteRef.current) {
                  onCompleteRef.current({
                    stepId: stepId || 'step_hemostasis',
                    executionToken: executionToken || '',
                    result: 'success',
                    accuracy,
                    damage: 0,
                  });
                }
              }, 2000);
              timeoutIdsRef.current.push(emitTid);
            }
          } else if (v.cauterizeTime > 1.7 && v.status === 'active') {
            // Over-cauterization necrosis!
            v.status = 'necrotic';
            soundManager.playError();
            if (onVitalsDrainRef.current) onVitalsDrainRef.current(10);
          }
        } else {
          setTargetVesselIndex(null);
          setCauteryHoldTime(0);
        }
      }

      // ── 6. Render Smoke Particles ──
      ctx.save();
      for (let i = smokeParticlesRef.current.length - 1; i >= 0; i--) {
        const sp = smokeParticlesRef.current[i];
        sp.x += sp.vx * 0.016;
        sp.y += sp.vy * 0.016;
        sp.radius += 0.15;
        sp.alpha -= 0.02;

        if (sp.alpha <= 0) {
          smokeParticlesRef.current.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `rgba(226, 232, 240, ${sp.alpha})`;
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // ── 7. Render Active Tool Cursor ──
      ctx.save();
      if (activeToolRef.current === 'suction') {
        // Aspirator cannula / suction ring
        ctx.strokeStyle = '#38BDF8';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(mx, my, 40, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = 'rgba(56, 189, 248, 0.2)';
        ctx.beginPath();
        ctx.arc(mx, my, 8, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Bipolar Cautery Forceps Tips
        ctx.strokeStyle = '#F59E0B';
        ctx.lineWidth = 2.5;

        // Left tip
        ctx.beginPath();
        ctx.moveTo(mx - 8, my - 25);
        ctx.lineTo(mx - 2, my);
        ctx.stroke();

        // Right tip
        ctx.beginPath();
        ctx.moveTo(mx + 8, my - 25);
        ctx.lineTo(mx + 2, my);
        ctx.stroke();

        // Electric spark when firing
        if (isFiringRef.current) {
          ctx.strokeStyle = '#FDE047';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(mx - 2, my);
          ctx.lineTo(mx + (Math.random() - 0.5) * 4, my + (Math.random() - 0.5) * 4);
          ctx.lineTo(mx + 2, my);
          ctx.stroke();
        }
      }
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    // Event listeners
    const updateMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePosRef.current = {
        x: ((e.clientX - rect.left) / rect.width) * canvas.width,
        y: ((e.clientY - rect.top) / rect.height) * canvas.height,
      };
    };

    const handleMouseDown = () => { setIsFiring(true); };
    const handleMouseUp = () => {
      setIsFiring(false);
      setCauteryHoldTime(0);
      setTargetVesselIndex(null);
    };
    const handleMouseLeave = () => {
      setIsFiring(false);
      setCauteryHoldTime(0);
      setTargetVesselIndex(null);
    };

    canvas.addEventListener('mousemove', updateMouse);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      isPlayingRef.current = false;
      cancelAnimationFrame(animId);
      timeoutIdsRef.current.forEach((id) => clearTimeout(id));
      timeoutIdsRef.current = [];
      canvas.removeEventListener('mousemove', updateMouse);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const coagulatedCount = vesselsRef.current.filter((v) => v.status === 'coagulated').length;
  const totalVessels = vesselsRef.current.length;

  return (
    <div className="flex flex-col h-full bg-[#050A08] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative select-none">
      {/* Top HUD Header */}
      <div className="bg-slate-900/90 p-4 flex justify-between items-center border-b border-slate-800 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-950 border border-amber-500/40 rounded-xl">
            <Flame className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="font-extrabold text-white text-sm uppercase tracking-wider">
              Hemostasia e Eletrocauterização Bipolar
            </h3>
            <p className="text-xs text-slate-400">
              Aspire o sangue para visualizar o campo e coagule os vasos rompidos com precisão térmica.
            </p>
          </div>
        </div>

        {/* HUD Badges */}
        <div className="flex gap-6">
          <div className="text-right">
            <div className="text-[10px] text-slate-400 font-mono mb-1">VOLEMIA PACIENTE</div>
            <div className="w-32 h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div
                className={`h-full transition-all ${
                  bloodVolume > 50 ? 'bg-rose-500' : bloodVolume > 25 ? 'bg-amber-500' : 'bg-red-700 animate-pulse'
                }`}
                style={{ width: `${bloodVolume}%` }}
              />
            </div>
          </div>

          <div className="text-right">
            <div className="text-[10px] text-slate-400 font-mono mb-1">VASOS COAGULADOS</div>
            <div className="text-xs font-mono font-bold text-emerald-400">
              {coagulatedCount} / {totalVessels}
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="flex-1 relative cursor-crosshair flex items-center justify-center p-2 bg-[#050A08]">
        <canvas
          ref={canvasRef}
          width={800}
          height={500}
          className="w-full h-full object-contain rounded-xl border border-slate-800 shadow-inner"
        />

        {/* Tool Switcher Dock */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-slate-950/90 backdrop-blur-md border border-slate-800 p-2.5 rounded-2xl shadow-2xl">
          <button
            onClick={() => {
              setActiveTool('suction');
              soundManager.playTone(400, 0.05, 0.05);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
              activeTool === 'suction'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Droplets className="w-4 h-4" />
            1. Gaze e Aspirador
          </button>

          <button
            onClick={() => {
              setActiveTool('cautery');
              soundManager.playTone(600, 0.05, 0.05);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
              activeTool === 'cautery'
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-500/30'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Flame className="w-4 h-4" />
            2. Cautério Bipolar
          </button>
        </div>

        {/* Hold Meter for Cauterization */}
        {isFiring && activeTool === 'cautery' && targetVesselIndex !== null && (
          <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-slate-950/90 backdrop-blur-md border border-amber-500/50 px-5 py-3 rounded-2xl flex flex-col items-center gap-1.5 shadow-2xl">
            <div className="text-[10px] font-mono text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              TEMPO DE DESCARGA TÉRMICA: {cauteryHoldTime.toFixed(2)}s
            </div>
            <div className="w-48 h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700 relative">
              <div
                className={`h-full transition-none ${
                  cauteryHoldTime < 0.8
                    ? 'bg-amber-400'
                    : cauteryHoldTime <= 1.4
                    ? 'bg-emerald-400'
                    : 'bg-rose-500 animate-pulse'
                }`}
                style={{ width: `${Math.min(100, (cauteryHoldTime / 1.7) * 100)}%` }}
              />
            </div>
            <div className="text-[9px] text-slate-400 font-mono">
              ALVO: 0.9s - 1.4s (EVITE &gt;1.7s NECROSE)
            </div>
          </div>
        )}

        {/* Completion Modal */}
        <AnimatePresence>
          {isCompleted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center gap-3 z-30 rounded-xl"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-black text-emerald-400 uppercase tracking-wider">
                Hemostasia Estável Atingida!
              </h3>
              <p className="text-slate-300 text-xs max-w-sm text-center">
                Todos os vasos sangrantes foram termocoagulados sem necrose periférica excessiva. Volemia preservada em {bloodVolume}%.
              </p>
            </motion.div>
          )}

          {isFailed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center gap-3 z-30 rounded-xl"
            >
              <div className="w-16 h-16 rounded-full bg-rose-950/80 border border-rose-500 flex items-center justify-center shadow-[0_0_25px_rgba(244,63,94,0.3)]">
                <AlertTriangle className="w-10 h-10 text-rose-400" />
              </div>
              <h3 className="text-2xl font-black text-rose-400 uppercase tracking-wider">
                Choque Hipovolêmico!
              </h3>
              <p className="text-slate-300 text-xs max-w-sm text-center">
                Perda sanguínea crítica antes da hemostasia adequada. O paciente necessitou de ressuscitação volêmica emergencial.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
