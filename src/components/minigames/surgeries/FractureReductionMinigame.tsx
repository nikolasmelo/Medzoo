import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, CheckCircle2, RotateCw, RotateCcw } from 'lucide-react';
import type { SurgicalMinigameProps } from '../../../types';
import { soundManager } from '../../../utils/sound';

export const FractureReductionMinigame: React.FC<SurgicalMinigameProps> = ({
  stepId,
  executionToken,
  onComplete,
  onCancel: _onCancel,
  onVitalsDrain,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const startTimeRef = useRef<number>(performance.now());
  const isDraggingRef = useRef(false);
  const dragOffsetRef = useRef({ x: 0, y: 0 });

  // Displaced Fragment State (Target is x: 400, y: 250, angle: 0)
  const TARGET_X = 400;
  const TARGET_Y = 250;
  const TARGET_ANGLE = 0;

  const [fragment, setFragment] = useState(() => {
    // Initial random displacement
    const startX = TARGET_X + (Math.random() > 0.5 ? 90 : -90);
    const startY = TARGET_Y + (Math.random() > 0.5 ? 70 : -70);
    const startAngle = (Math.random() - 0.5) * 40; // -20deg to +20deg
    return { x: startX, y: startY, angle: startAngle };
  });

  const [aligned, setAligned] = useState(false);
  const [axialFit, setAxialFit] = useState(0);
  const [rotationalFit, setRotationalFit] = useState(0);
  const [attempts, setAttempts] = useState(0);

  // ── Render Loop ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;

      // 1. Dark radiograph background
      ctx.fillStyle = '#0a0f12';
      ctx.fillRect(0, 0, w, h);

      // Grid overlay
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

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

      // 2. Draw Target Alignment Zone (Dashed anatomical ghost)
      ctx.save();
      ctx.translate(TARGET_X, TARGET_Y);
      ctx.strokeStyle = aligned ? 'rgba(52, 211, 153, 0.6)' : 'rgba(232, 184, 74, 0.3)';
      ctx.setLineDash([8, 6]);
      ctx.lineWidth = 3;

      // Target outline ghost for Distal Fragment
      drawRoundRect(ctx, -25, 0, 50, 160, 10);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // 3. Draw Fixed Proximal Bone Segment (Top Half)
      ctx.save();
      ctx.translate(TARGET_X, TARGET_Y - 160);

      // Proximal bone gradient
      const proxGrad = ctx.createLinearGradient(-30, 0, 30, 0);
      proxGrad.addColorStop(0, '#64748b');
      proxGrad.addColorStop(0.3, '#f1f5f9');
      proxGrad.addColorStop(0.7, '#cbd5e1');
      proxGrad.addColorStop(1, '#475569');

      ctx.fillStyle = proxGrad;
      drawRoundRect(ctx, -26, 0, 52, 160, 14);
      ctx.fill();
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Bone marrow core
      ctx.fillStyle = '#94a3b8';
      ctx.fillRect(-8, 10, 16, 140);
      ctx.restore();

      // 4. Draw Movable Distal Bone Fragment (Bottom Half)
      ctx.save();
      ctx.translate(fragment.x, fragment.y);
      ctx.rotate((fragment.angle * Math.PI) / 180);

      const distGrad = ctx.createLinearGradient(-30, 0, 30, 0);
      distGrad.addColorStop(0, '#64748b');
      distGrad.addColorStop(0.3, aligned ? '#67e8f9' : '#f1f5f9');
      distGrad.addColorStop(0.7, aligned ? '#a7f3d0' : '#cbd5e1');
      distGrad.addColorStop(1, '#475569');

      ctx.fillStyle = distGrad;
      drawRoundRect(ctx, -26, 0, 52, 160, 14);
      ctx.fill();
      ctx.strokeStyle = aligned ? '#10b981' : '#334155';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Bone marrow core
      ctx.fillStyle = '#94a3b8';
      ctx.fillRect(-8, 10, 16, 140);

      // Reduction forceps grip lines
      ctx.strokeStyle = 'rgba(232, 184, 74, 0.8)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-40, 80);
      ctx.lineTo(-26, 80);
      ctx.moveTo(40, 80);
      ctx.lineTo(26, 80);
      ctx.stroke();

      ctx.restore();

      // 5. Draw Alignment Axis Guidelines
      ctx.strokeStyle = aligned ? 'rgba(52, 211, 153, 0.4)' : 'rgba(245, 158, 11, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(TARGET_X, 20);
      ctx.lineTo(TARGET_X, h - 20);
      ctx.stroke();

    animId = requestAnimationFrame(render);
    };

    render();
    return () => {
      console.log('[Cleanup] FractureReductionMinigame unmounted, RAF cancelled');
      cancelAnimationFrame(animId);
    };
  }, [fragment, aligned]);

  // ── Calculate Alignment Metrics ──
  const updateAlignment = (x: number, y: number, angle: number) => {
    const dist = Math.hypot(x - TARGET_X, y - TARGET_Y);
    const angleDiff = Math.abs(angle - TARGET_ANGLE);

    const posScore = Math.max(0, Math.round(100 - dist * 1.2));
    const rotScore = Math.max(0, Math.round(100 - angleDiff * 3));

    setAxialFit(posScore);
    setRotationalFit(rotScore);

    // Check snap tolerance (within 12px & 4deg)
    if (dist < 12 && angleDiff < 4 && !aligned) {
      setAligned(true);
      setFragment({ x: TARGET_X, y: TARGET_Y, angle: 0 });
      soundManager.playDiscovery();
    }
  };

  // ── Drag & Rotation Event Handlers ──
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (aligned) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const scaleX = canvasRef.current!.width / rect.width;
    const scaleY = canvasRef.current!.height / rect.height;

    const mx = (e.clientX - rect.left) * scaleX;
    const my = (e.clientY - rect.top) * scaleY;

    // Check hit on distal fragment
    const dx = mx - fragment.x;
    const dy = my - fragment.y;
    if (Math.hypot(dx, dy) < 120) {
      isDraggingRef.current = true;
      dragOffsetRef.current = { x: dx, y: dy };
      e.currentTarget.setPointerCapture(e.pointerId);
      soundManager.playClick();
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current || aligned) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const scaleX = canvasRef.current!.width / rect.width;
    const scaleY = canvasRef.current!.height / rect.height;

    const mx = (e.clientX - rect.left) * scaleX;
    const my = (e.clientY - rect.top) * scaleY;

    const newX = Math.max(100, Math.min(700, mx - dragOffsetRef.current.x));
    const newY = Math.max(100, Math.min(350, my - dragOffsetRef.current.y));

    setFragment(prev => {
      const next = { ...prev, x: newX, y: newY };
      updateAlignment(next.x, next.y, next.angle);
      return next;
    });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      e.currentTarget.releasePointerCapture(e.pointerId);
      setAttempts(prev => prev + 1);

      // Minor vitals drain on bad manipulation attempts
      if (!aligned && attempts > 5 && onVitalsDrain) {
        onVitalsDrain(5);
      }
    }
  };

  const rotate = (deltaDeg: number) => {
    if (aligned) return;
    soundManager.playClick();
    setFragment(prev => {
      let nextAngle = prev.angle + deltaDeg;
      if (nextAngle > 180) nextAngle -= 360;
      if (nextAngle < -180) nextAngle += 360;
      const next = { ...prev, angle: nextAngle };
      updateAlignment(next.x, next.y, next.angle);
      return next;
    });
  };

  const handleConfirm = () => {
    soundManager.playSuccess();
    const rawFit = (axialFit + rotationalFit) / 2;
    const accuracy = rawFit / 100;
    const damage = Math.max(0, attempts - 3) * 4;
    const timeTaken = Math.round((performance.now() - startTimeRef.current) / 1000);
    onComplete({
      stepId: stepId || '',
      executionToken: executionToken || '',
      result: accuracy >= 0.7 ? 'success' : 'failure',
      accuracy,
      damage,
      timeTaken,
    });
  };

  return (
    <div className="flex flex-col h-full bg-slate-950 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-slate-900 p-4 flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-500/20 rounded-lg">
            <Wrench className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="font-bold text-[#E8B84A] uppercase tracking-wider text-sm flex items-center gap-2">
              Redução da Fratura com Fórceps
            </h3>
            <p className="text-xs text-slate-400">
              Arraste o fragmento distal e ajuste a rotação para alinhar o eixo ósseo.
            </p>
          </div>
        </div>

        {/* Alignment HUD Meters */}
        <div className="flex gap-6">
          <div className="text-right">
            <span className="text-[10px] text-slate-400 font-mono block mb-0.5">EIXO AXIAL</span>
            <div className="w-28 h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div
                className={`h-full transition-all ${axialFit > 85 ? 'bg-emerald-400' : 'bg-amber-400'}`}
                style={{ width: `${axialFit}%` }}
              />
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-slate-400 font-mono block mb-0.5">ROTAÇÃO</span>
            <div className="w-28 h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div
                className={`h-full transition-all ${rotationalFit > 85 ? 'bg-emerald-400' : 'bg-amber-400'}`}
                style={{ width: `${rotationalFit}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="flex-1 relative cursor-grab active:cursor-grabbing flex items-center justify-center p-4">
        <canvas
          ref={canvasRef}
          width={800}
          height={500}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="w-full h-full object-contain rounded-xl border border-slate-800 bg-[#0a0f12] touch-none"
        />

        {/* Rotation Controls Bar */}
        <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-slate-900/90 border border-slate-700 backdrop-blur-md p-2 rounded-xl shadow-xl">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">Rotação Fórceps:</span>
          <button
            type="button"
            disabled={aligned}
            onClick={() => rotate(-5)}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 transition-colors disabled:opacity-40"
            title="Girar 5° Anti-horário"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
          <span className="font-mono text-sm font-bold text-slate-200 w-12 text-center">
            {Math.round(fragment.angle)}°
          </span>
          <button
            type="button"
            disabled={aligned}
            onClick={() => rotate(5)}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 transition-colors disabled:opacity-40"
            title="Girar 5° Horário"
          >
            <RotateCw className="w-5 h-5" />
          </button>
        </div>

        {/* Completion Modal Overlay */}
        {aligned && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center gap-4 z-30 rounded-xl"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-black text-emerald-400 uppercase tracking-wider">
              Redução Anatômica Concluída!
            </h3>
            <p className="text-slate-300 text-sm max-w-sm text-center">
              Os eixos corticais foram reeditados e estabilizados com sucesso.
            </p>
            <button
              type="button"
              onClick={handleConfirm}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 border border-emerald-400 text-white font-extrabold uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              Confirmar e Fixar Implante
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
