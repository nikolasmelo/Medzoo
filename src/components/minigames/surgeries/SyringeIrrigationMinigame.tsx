import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Droplets, AlertTriangle, CheckCircle2, RefreshCcw, Sparkles } from 'lucide-react';
import type { SurgicalMinigameProps } from '../../../types';
import { soundManager } from '../../../utils/sound';
interface Particle {
  x: number;
  y: number;
  radius: number;
  cleaned: boolean;
  type: 'exudate' | 'crust';
  health: number;
  maxHealth: number;
  color: string;
}

interface SprayParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  life: number;
}

const JET_RADIUS = 38;

function drawRoundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number | number[]) {
  if (typeof ctx.roundRect === 'function') {
    try {
      ctx.roundRect(x, y, w, h, r);
      return;
    } catch { /* fallback */ }
  }
  const radius = typeof r === 'number' ? r : (Array.isArray(r) ? r[0] || 0 : 0);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

export const SyringeIrrigationMinigame: React.FC<SurgicalMinigameProps> = ({
  stepId,
  executionToken,
  onComplete,
  onCancel: _onCancel,
  onVitalsDrain,
  unlockedUpgrades = [],
}) => {
  const hasSyringeUpgrade = unlockedUpgrades.includes('syringe_precision');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Game State Refs
  const isPlayingRef = useRef(true);
  const isSprayingRef = useRef(false);
  const mousePosRef = useRef({ x: 400, y: 250 });
  const lastMousePosRef = useRef({ x: 400, y: 250 });
  const isSweepingRef = useRef(false);
  const waterRemainingRef = useRef(100);
  const particlesRef = useRef<Particle[]>([]);
  const sprayParticlesRef = useRef<SprayParticle[]>([]);
  const totalParticlesRef = useRef(0);
  const trailRef = useRef<{ x: number; y: number; alpha: number }[]>([]);

  // UI State
  const [waterLevel, setWaterLevel] = useState(100);
  const [cleanliness, setCleanliness] = useState(0);
  const [isFailed, setIsFailed] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isStagnantWarning, setIsStagnantWarning] = useState(false);

  // State update throttling refs
  const lastWaterLevelRef = useRef(100);
  const lastCleanlinessRef = useRef(0);
  const lastSoundTimeRef = useRef(0);
  const lastStagnantRef = useRef(false);

  // Callbacks in refs to ensure unmount safety
  const onCompleteRef = useRef(onComplete);
  const onVitalsDrainRef = useRef(onVitalsDrain);
  useEffect(() => {
    onCompleteRef.current = onComplete;
    onVitalsDrainRef.current = onVitalsDrain;
  }, [onComplete, onVitalsDrain]);

  const timeoutIdsRef = useRef<number[]>([]);

  // Helper to initialize particles
  const initParticles = useCallback((w: number, h: number) => {
    const centerX = w / 2;
    const centerY = h / 2;
    const particles: Particle[] = [];
    const numParticles = 90;

    for (let i = 0; i < numParticles; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.pow(Math.random(), 0.82) * 145;
      const isCrust = Math.random() < 0.38; // 38% adherent crust, 62% superficial exudate

      particles.push({
        x: centerX + Math.cos(angle) * r,
        y: centerY + Math.sin(angle) * (r * 0.74),
        radius: isCrust ? Math.random() * 3 + 4 : Math.random() * 2 + 2.5,
        cleaned: false,
        type: isCrust ? 'crust' : 'exudate',
        health: isCrust ? 1.6 : 1.0, // Crusts require 2-3 firm sweeping passes
        maxHealth: isCrust ? 1.6 : 1.0,
        color: isCrust ? '#292524' : '#84cc16',
      });
    }
    particlesRef.current = particles;
    totalParticlesRef.current = numParticles;
  }, []);

  const handleRestartIrrigation = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      initParticles(canvas.width, canvas.height);
    }
    waterRemainingRef.current = 100;
    lastWaterLevelRef.current = 100;
    lastCleanlinessRef.current = 0;
    setWaterLevel(100);
    setCleanliness(0);
    setIsFailed(false);
    setIsCompleted(false);
    isPlayingRef.current = true;
    soundManager.playTone(440, 0.1, 0.05);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    initParticles(canvas.width, canvas.height);

    let animationFrameId: number;

    const render = () => {
      if (!isPlayingRef.current) return;

      const w = canvas.width;
      const h = canvas.height;
      const centerX = w / 2;
      const centerY = h / 2;

      // ── Layer A: Sterile Surgical Drape Framing ──
      ctx.fillStyle = '#050A09';
      ctx.fillRect(0, 0, w, h);

      // Surgical Drape (Dark Emerald/Slate sterile fabric)
      ctx.fillStyle = '#0B1A14';
      drawRoundRect(ctx, 40, 30, w - 80, h - 60, 24);
      ctx.fill();

      ctx.strokeStyle = '#16382C';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Drape Texture Grid Lines
      ctx.save();
      ctx.strokeStyle = 'rgba(22, 56, 44, 0.4)';
      ctx.lineWidth = 1;
      for (let x = 60; x < w - 60; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 40);
        ctx.lineTo(x, h - 40);
        ctx.stroke();
      }
      ctx.restore();

      // ── Layer B: Anatomical Wound Bed ──
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 210, 150, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#9f1239'; // Epidermal margin
      ctx.fill();
      ctx.lineWidth = 8;
      ctx.strokeStyle = '#be123c';
      ctx.stroke();

      // Deep Muscle / Fascia Tissue Bed
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 195, 135, 0, 0, Math.PI * 2);
      const tissueGrad = ctx.createRadialGradient(
        centerX, centerY, 10,
        centerX, centerY, 200
      );
      tissueGrad.addColorStop(0, '#4c0519');
      tissueGrad.addColorStop(0.6, '#881337');
      tissueGrad.addColorStop(1, '#9f1239');
      ctx.fillStyle = tissueGrad;
      ctx.fill();

      // Muscle Fiber Striations
      ctx.strokeStyle = 'rgba(244, 63, 94, 0.15)';
      ctx.lineWidth = 2;
      for (let i = -140; i <= 140; i += 20) {
        ctx.beginPath();
        ctx.moveTo(centerX + i, centerY - 100);
        ctx.quadraticCurveTo(centerX + i * 0.8, centerY, centerX + i, centerY + 100);
        ctx.stroke();
      }
      ctx.restore();

      // ── Layer C: Fluid Mechanics & Shear Velocity ──
      const mx = mousePosRef.current.x;
      const my = mousePosRef.current.y;
      const dxM = mx - lastMousePosRef.current.x;
      const dyM = my - lastMousePosRef.current.y;
      const mouseSpeed = Math.hypot(dxM, dyM);
      lastMousePosRef.current = { x: mx, y: my };

      const sweeping = mouseSpeed > 1.0;
      isSweepingRef.current = sweeping;

      const isStagnant = isSprayingRef.current && !sweeping && waterRemainingRef.current > 0;
      if (isStagnant !== lastStagnantRef.current) {
        lastStagnantRef.current = isStagnant;
        setIsStagnantWarning(isStagnant);
      }

      if (isSprayingRef.current && waterRemainingRef.current > 0) {
        // Balanced water drain:
        // Sweeping: ~11s without item; ~15s with -25% syringe upgrade
        // Stagnant: wastes saline 3x faster (~4s)
        const drain = (sweeping ? 0.15 : 0.42) * (hasSyringeUpgrade ? 0.75 : 1.0);
        waterRemainingRef.current = Math.max(0, waterRemainingRef.current - drain);
        const currentWater = Math.floor(waterRemainingRef.current);
        if (currentWater !== lastWaterLevelRef.current) {
          lastWaterLevelRef.current = currentWater;
          setWaterLevel(currentWater);
        }

        const now = performance.now();
        if (now - lastSoundTimeRef.current >= 120) {
          lastSoundTimeRef.current = now;
          soundManager.playTone(sweeping ? 360 : 280, 0.08, 0.04);
        }

        // Push fluid trail (reduced to focused 32px jet)
        trailRef.current.push({
          x: mx,
          y: my,
          alpha: sweeping ? 0.55 : 0.35,
        });

        // Spawn spray droplets
        for (let s = 0; s < 3; s++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 25 + 15;
          sprayParticlesRef.current.push({
            x: mx,
            y: my,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            radius: Math.random() * 2 + 1,
            life: 0.35,
          });
        }
      }

      // Draw Fluid Splash Trail (32px precision nozzle)
      ctx.save();
      for (let i = trailRef.current.length - 1; i >= 0; i--) {
        const t = trailRef.current[i];
        ctx.beginPath();
        ctx.arc(t.x, t.y, JET_RADIUS, 0, Math.PI * 2);
        const fluidGrad = ctx.createRadialGradient(t.x, t.y, 4, t.x, t.y, JET_RADIUS);
        fluidGrad.addColorStop(0, `rgba(56, 189, 248, ${t.alpha * 0.45})`);
        fluidGrad.addColorStop(0.7, `rgba(14, 165, 233, ${t.alpha * 0.25})`);
        fluidGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
        ctx.fillStyle = fluidGrad;
        ctx.fill();

        t.alpha -= 0.045;
        if (t.alpha <= 0) trailRef.current.splice(i, 1);
      }
      ctx.restore();

      // Render Spray Droplets
      ctx.save();
      for (let i = sprayParticlesRef.current.length - 1; i >= 0; i--) {
        const sp = sprayParticlesRef.current[i];
        sp.x += sp.vx * 0.016;
        sp.y += sp.vy * 0.016;
        sp.life -= 0.035;

        if (sp.life <= 0) {
          sprayParticlesRef.current.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `rgba(186, 230, 253, ${sp.life / 0.35})`;
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // ── Helper: emit completion payload ──
      const emitDone = (acc: number, dmg: number) => {
        const cb = onCompleteRef.current;
        if (typeof cb === 'function') {
          cb({
            stepId: stepId || '',
            executionToken: executionToken || '',
            result: acc >= 0.75 ? 'success' : 'failure',
            accuracy: acc,
            damage: dmg,
          });
        }
      };

      // ── Layer D: Cleaning Mechanics with Particle Types & Sweeping ──
      if (isSprayingRef.current && waterRemainingRef.current > 0) {
        let cleanedCount = 0;
        particlesRef.current.forEach((p) => {
          if (p.cleaned) {
            cleanedCount++;
            return;
          }
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.hypot(dx, dy);

          if (dist < JET_RADIUS) {
            // Mechanical shearing power: active movement dislodges faster than static spraying
            const damageRate = p.type === 'exudate'
              ? (sweeping ? 0.6 : 0.12) // Exudate washes in 2 frames of sweeping
              : (sweeping ? 0.22 : 0.04); // Crust detaches in 2-3 firm sweeps
            
            p.health -= damageRate;

            if (p.health <= 0) {
              p.cleaned = true;
              cleanedCount++;
            }
          } else if (dist < JET_RADIUS + 25) {
            // Hydrodynamic displacement pushes peripheral debris
            p.x += (dx / dist) * 0.6;
            p.y += (dy / dist) * 0.6;
          }
        });

        const currentCleanliness = Math.floor((cleanedCount / totalParticlesRef.current) * 100);
        if (currentCleanliness !== lastCleanlinessRef.current) {
          lastCleanlinessRef.current = currentCleanliness;
          setCleanliness(currentCleanliness);
        }

        // Conclui estritamente quando TODOS os detritos forem eliminados (100%)
        if (cleanedCount >= totalParticlesRef.current && isPlayingRef.current) {
          isPlayingRef.current = false;
          setIsCompleted(true);
          soundManager.playSuccess();
          const tid = window.setTimeout(() => emitDone(1.0, 0), 1200);
          timeoutIdsRef.current.push(tid);
        }
      }

      // Lose Condition: Out of saline before 100% decontamination
      if (waterRemainingRef.current <= 0 && isPlayingRef.current) {
        isPlayingRef.current = false;
        const cleanedCount = particlesRef.current.filter((p) => p.cleaned).length;

        if (cleanedCount < totalParticlesRef.current) {
          setIsFailed(true);
          soundManager.playError();
          const damage = 15;
          if (onVitalsDrainRef.current) onVitalsDrainRef.current(damage);
        } else {
          setIsCompleted(true);
          soundManager.playSuccess();
          const tid = window.setTimeout(() => emitDone(1.0, 0), 1200);
          timeoutIdsRef.current.push(tid);
        }
      }

      // ── Layer E: Draw Contaminant Particles ──
      particlesRef.current.forEach((p) => {
        if (!p.cleaned) {
          ctx.save();
          if (p.type === 'crust') {
            // Necrotic plaque / adherent fibrin
            const healthPct = Math.max(0, p.health / p.maxHealth);
            ctx.fillStyle = healthPct > 0.5 ? p.color : '#52525b';
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();

            // Adherent fibrin golden ring
            ctx.strokeStyle = healthPct > 0.5 ? 'rgba(202, 138, 4, 0.6)' : 'rgba(161, 161, 170, 0.4)';
            ctx.lineWidth = 1.5;
            ctx.stroke();
          } else {
            // Superficial Purulent Exudate
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = 'rgba(255,255,255,0.3)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
          ctx.restore();
        }
      });

      // ── Layer F: Irrigation Focused 32px Decontamination Cone & Reticle ──
      ctx.save();

      if (isSprayingRef.current && waterRemainingRef.current > 0) {
        // Dynamic color: Cyan when sweeping, Amber warning when stagnant
        const isStagnant = !sweeping;
        const mainColor = isStagnant ? 'rgba(245, 158, 11, ' : 'rgba(56, 189, 248, ';

        const sprayGlow = ctx.createRadialGradient(mx, my, 4, mx, my, JET_RADIUS);
        sprayGlow.addColorStop(0, `${mainColor}0.5)`);
        sprayGlow.addColorStop(0.7, `${mainColor}0.25)`);
        sprayGlow.addColorStop(1, `${mainColor}0.02)`);
        ctx.fillStyle = sprayGlow;
        ctx.beginPath();
        ctx.arc(mx, my, JET_RADIUS, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = isStagnant ? 'rgba(245, 158, 11, 0.9)' : 'rgba(56, 189, 248, 0.9)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(mx, my, JET_RADIUS, 0, Math.PI * 2);
        ctx.stroke();

        // Pulsating inner hydro-ring
        const pulseR = 10 + ((performance.now() / 15) % 20);
        ctx.strokeStyle = isStagnant ? 'rgba(254, 215, 170, 0.6)' : 'rgba(186, 230, 253, 0.6)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(mx, my, pulseR, 0, Math.PI * 2);
        ctx.stroke();
      } else {
        // Aiming Range Indicator (32px dashed guide)
        ctx.setLineDash([3, 3]);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(mx, my, JET_RADIUS, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Center Aiming Reticle
      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(mx, my, 8, 0, Math.PI * 2);
      ctx.stroke();

      // Crosshair tick marks
      ctx.beginPath();
      ctx.moveTo(mx - 14, my);
      ctx.lineTo(mx - 9, my);
      ctx.moveTo(mx + 9, my);
      ctx.lineTo(mx + 14, my);
      ctx.moveTo(mx, my - 14);
      ctx.lineTo(mx, my - 9);
      ctx.moveTo(mx, my + 9);
      ctx.lineTo(mx, my + 14);
      ctx.stroke();

      ctx.fillStyle = '#38BDF8';
      ctx.beginPath();
      ctx.arc(mx, my, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Event Listeners with Pointer Support (prevents mouse lock/lost drag)
    const updatePointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      mousePosRef.current = {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    };

    const handlePointerDown = (e: PointerEvent) => {
      updatePointer(e);
      isSprayingRef.current = true;
    };

    const handlePointerUp = () => {
      isSprayingRef.current = false;
    };

    canvas.addEventListener('pointermove', updatePointer);
    canvas.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    return () => {
      console.log('[Cleanup] SyringeIrrigationMinigame unmounted, RAF and timeouts cleared');
      cancelAnimationFrame(animationFrameId);
      timeoutIdsRef.current.forEach((id) => clearTimeout(id));
      timeoutIdsRef.current = [];
      canvas.removeEventListener('pointermove', updatePointer);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, []);

  return (
    <div className="flex flex-col h-full bg-[#050A08] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative select-none">
      {/* Header */}
      <div className="bg-slate-900/90 p-4 flex justify-between items-center border-b border-slate-800 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-950 border border-cyan-500/40 rounded-xl">
            <Droplets className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="font-extrabold text-white text-sm uppercase tracking-wider">
              Irrigação e Descontaminação de Ferida
            </h3>
            <p className="text-xs text-slate-400">
              Jato de precisão: realize varredura mecânica contínua. Elimine 100% dos detritos para evitar sepse.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {hasSyringeUpgrade && (
            <div className="px-3 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold flex items-center gap-1.5 shadow-[0_0_12px_rgba(245,158,11,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Seringa de Precisão (-25% Consumo)</span>
            </div>
          )}
          <div className="text-right">
            <div className="text-[10px] text-slate-400 font-mono mb-1">SORO SALINO 0.9%</div>
            <div className="w-32 h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div
                className={`h-full transition-all ${waterLevel > 30 ? 'bg-cyan-400' : 'bg-rose-500'}`}
                style={{ width: `${waterLevel}%` }}
              />
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-slate-400 font-mono mb-1">LIMPEZA DO CAMPO ({cleanliness}%)</div>
            <div className="w-32 h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div
                className={`h-full transition-all ${cleanliness >= 100 ? 'bg-emerald-400' : 'bg-cyan-400'}`}
                style={{ width: `${cleanliness}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 relative cursor-crosshair flex items-center justify-center p-2 bg-[#050A08]">
        <canvas
          ref={canvasRef}
          width={800}
          height={500}
          style={{ touchAction: 'none' }}
          className="w-full h-full object-contain rounded-xl border border-slate-800 shadow-inner touch-none select-none"
        />

        {/* Instructions overlay */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-950/85 backdrop-blur-md border border-slate-800 px-6 py-2.5 rounded-full pointer-events-none text-center shadow-lg">
          {isStagnantWarning ? (
            <p className="text-xs text-amber-400 font-bold animate-pulse flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
              <span>Jato parado! Movimente a agulha continuamente para desbridamento mecânico e evitar desperdício de soro.</span>
            </p>
          ) : (
            <p className="text-xs text-slate-300 font-medium">
              <span className="text-cyan-400 font-black uppercase">Segure e mova o jato</span> em varredura ativa. Jato estagnado perde eficácia e desperdiça soro 3x mais rápido.
            </p>
          )}
        </div>

        {/* Sepsis Failure Modal */}
        {isFailed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 bg-slate-950/92 backdrop-blur-md flex flex-col items-center justify-center gap-4 z-40 rounded-xl p-6 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-rose-950/90 border-2 border-rose-500 flex items-center justify-center shadow-[0_0_30px_rgba(244,63,94,0.4)] animate-bounce">
              <AlertTriangle className="w-10 h-10 text-rose-400" />
            </div>
            <h3 className="text-2xl font-black text-rose-400 uppercase tracking-wider">
              Sepse Cirúrgica: Campo Incompleto!
            </h3>
            <p className="text-slate-300 text-sm max-w-md">
              O soro salino esgotou-se antes da descontaminação adequada (Limpeza: <span className="text-rose-400 font-bold">{cleanliness}%</span> de 100% exigidos). Fechar o leito cirúrgico com exsudato ou crostas bacterianas causaria choque séptico fatal.
            </p>
            <button
              onClick={handleRestartIrrigation}
              className="mt-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-black text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <RefreshCcw className="w-4 h-4" /> Reiniciar Irrigação do Início
            </button>
          </motion.div>
        )}

        {/* Completion Modal */}
        {isCompleted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center gap-3 z-30 rounded-xl"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-black text-emerald-400 uppercase tracking-wider">
              Descontaminação Concluída!
            </h3>
            <p className="text-slate-300 text-sm max-w-sm text-center">
              Campo cirúrgico limpo e irrigado com sucesso. Tecido preparado para a síntese.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
