import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Activity, CheckCircle2, X, Volume2, VolumeX } from 'lucide-react';
import type { CaseData, ComplementaryExam } from '../../types';
import { soundManager } from '../../utils/sound';

// ─────────────────────────────────────────────────────────────────────────────
// § TYPES
// ─────────────────────────────────────────────────────────────────────────────

interface UltrasoundMinigameProps {
  caseData: CaseData;
  examInfo: ComplementaryExam;
  onComplete: (evidenceId: string, anomaliesFound: number) => void;
  onClose: () => void;
}

interface SpeckleConfig {
  readonly intensity: number;     // σ_n — Rayleigh scale (0.3–0.8)
  readonly grainDensity: number;  // λ  — Poisson grain density per px
  readonly temporalJitter: number; // δ_t — frame-to-frame variance factor
}

interface DopplerFlowConfig {
  readonly arterialColor: readonly [number, number, number]; // RGB towards probe
  readonly venousColor: readonly [number, number, number];   // RGB away from probe
  readonly turbulentThreshold: number;                       // velocity aliasing limit
  readonly mosaicNoiseScale: number;                         // turbulence noise amplitude
}

// ─────────────────────────────────────────────────────────────────────────────
// § CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 800;
const CANVAS_H = 500;

const SPECKLE_CFG: SpeckleConfig = {
  intensity: 0.55,
  grainDensity: 0.4,
  temporalJitter: 0.12,
} as const;

const DOPPLER_CFG: DopplerFlowConfig = {
  arterialColor: [235, 60, 60],     // arterial red (towards probe)
  venousColor: [40, 100, 245],      // venous blue (away from probe)
  turbulentThreshold: 0.85,
  mosaicNoiseScale: 0.35,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// § SPECKLE NOISE ENGINE
// Implements multiplicative Rayleigh speckle noise applied to ImageData.
// Formula: I_out(x,y) = I_in(x,y) * N_speckle(x,y)
// Where N_speckle follows Rayleigh distribution with scale σ_n.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Generate a Rayleigh-distributed random variate using Box-Muller transform.
 * Rayleigh(σ) = σ * sqrt(-2 * ln(U)), where U ~ Uniform(0,1).
 */
function rayleighRandom(sigma: number): number {
  const u = Math.random();
  // Clamp u away from 0 to avoid -Infinity from ln(0)
  const uClamped = Math.max(u, 1e-10);
  return sigma * Math.sqrt(-2.0 * Math.log(uClamped));
}

/**
 * Apply multiplicative speckle noise directly on the ImageData buffer.
 * Operates on 4-byte RGBA blocks. Only modifies R, G, B channels;
 * alpha is preserved.
 *
 * I_out[c] = clamp(I_in[c] * rayleigh(σ_n + δ_t * rand), 0, 255)
 */
function applySpeckleNoise(imageData: ImageData, cfg: SpeckleConfig): void {
  const data = imageData.data; // Uint8ClampedArray
  const len = data.length;

  for (let i = 0; i < len; i += 4) {
    // Per-pixel Rayleigh noise with temporal jitter
    const sigma = cfg.intensity + cfg.temporalJitter * (Math.random() - 0.5);
    const noiseFactor = rayleighRandom(Math.max(sigma, 0.05));

    // Multiplicative application to R, G, B
    data[i]     = Math.min(255, Math.max(0, (data[i] * noiseFactor) | 0));      // R
    data[i + 1] = Math.min(255, Math.max(0, (data[i + 1] * noiseFactor) | 0));  // G
    data[i + 2] = Math.min(255, Math.max(0, (data[i + 2] * noiseFactor) | 0));  // B
    // data[i + 3] (alpha) — preserved
  }
}

/**
 * Apply coarse acoustic shadow grain pattern.
 * Simulates the granular artifact structure visible in real ultrasound images.
 */
function applyAcousticGrain(
  imageData: ImageData,
  density: number,
  frameIndex: number
): void {
  const data = imageData.data;
  const w = imageData.width;
  const h = imageData.height;

  // Deterministic seed based on frame index for controlled temporal variation
  const seed = (frameIndex * 16807) % 2147483647;
  let rng = seed;
  const nextRng = (): number => {
    rng = (rng * 16807) % 2147483647;
    return rng / 2147483647;
  };

  const grainCount = Math.floor(w * h * density * 0.002);

  for (let g = 0; g < grainCount; g++) {
    const gx = Math.floor(nextRng() * w);
    const gy = Math.floor(nextRng() * h);
    const gSize = 1 + Math.floor(nextRng() * 3);
    const brightness = 60 + Math.floor(nextRng() * 120);
    const alpha = 0.08 + nextRng() * 0.12;

    for (let dy = 0; dy < gSize; dy++) {
      for (let dx = 0; dx < gSize; dx++) {
        const px = gx + dx;
        const py = gy + dy;
        if (px >= w || py >= h) continue;
        const idx = (py * w + px) * 4;
        // Additive blend
        data[idx]     = Math.min(255, data[idx] + (brightness * alpha) | 0);
        data[idx + 1] = Math.min(255, data[idx + 1] + (brightness * alpha * 0.95) | 0);
        data[idx + 2] = Math.min(255, data[idx + 2] + (brightness * alpha * 0.85) | 0);
      }
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// § COLOR DOPPLER RENDERER
// Renders hemodynamic flow mapping based on radial distance from anomaly.
// Uses the Doppler shift equation: f' = f₀ * (c + v_probe) / (c - v_flow)
// Color encodes flow direction: red = towards probe, blue = away.
// ─────────────────────────────────────────────────────────────────────────────

function renderDopplerOverlay(
  imageData: ImageData,
  anomalyX: number,
  anomalyY: number,
  probeX: number,
  probeY: number,
  radius: number,
  cfg: DopplerFlowConfig,
  time: number
): void {
  const data = imageData.data;
  const w = imageData.width;
  const h = imageData.height;

  const cx = anomalyX;
  const cy = anomalyY;

  // Distance from probe to anomaly center
  const probeDist = Math.hypot(probeX - cx, probeY - cy);
  if (probeDist > radius * 2.5) return; // Too far, no Doppler signal

  const falloffStart = radius * 0.3;
  const falloffEnd = radius;

  for (let y = Math.max(0, Math.floor(cy - radius)); y < Math.min(h, Math.ceil(cy + radius)); y++) {
    for (let x = Math.max(0, Math.floor(cx - radius)); x < Math.min(w, Math.ceil(cx + radius)); x++) {
      const dist = Math.hypot(x - cx, y - cy);
      if (dist > radius) continue;

      // Normalized radial distance [0, 1]
      const normalizedDist = dist / radius;

      // Flow velocity simulation: parabolic profile (Poiseuille flow)
      // v(r) = v_max * (1 - (r/R)²)
      const flowVelocity = 1.0 - normalizedDist * normalizedDist;

      // Flow direction based on angle relative to probe
      const angleToProbe = Math.atan2(probeY - y, probeX - x);
      const flowAngle = Math.atan2(y - cy, x - cx) + time * 2.0; // rotating flow
      const directionality = Math.cos(flowAngle - angleToProbe);

      // Doppler shift intensity
      const dopplerIntensity = flowVelocity * Math.abs(directionality);

      // Check for turbulence (aliasing)
      const isTurbulent = dopplerIntensity > cfg.turbulentThreshold;

      // Alpha falloff
      let alpha: number;
      if (dist < falloffStart) {
        alpha = 0.85;
      } else {
        alpha = 0.85 * (1.0 - (dist - falloffStart) / (falloffEnd - falloffStart));
      }
      alpha *= (1.0 - probeDist / (radius * 2.5)); // fade with probe distance

      if (alpha <= 0) continue;

      let r: number, g: number, b: number;

      if (isTurbulent) {
        // Mosaic pattern for turbulent flow (aliased Doppler)
        const noiseVal = Math.sin(x * 0.3 + time * 5) * Math.cos(y * 0.4 + time * 3);
        const turbMix = 0.5 + noiseVal * cfg.mosaicNoiseScale;
        r = cfg.arterialColor[0] * turbMix + cfg.venousColor[0] * (1 - turbMix);
        g = cfg.arterialColor[1] * turbMix + cfg.venousColor[1] * (1 - turbMix);
        b = cfg.arterialColor[2] * turbMix + cfg.venousColor[2] * (1 - turbMix);
        // Add green mosaic artifacts
        g = Math.min(255, g + 80 * Math.abs(noiseVal));
      } else if (directionality > 0) {
        // Flow towards probe = arterial red
        r = cfg.arterialColor[0];
        g = cfg.arterialColor[1];
        b = cfg.arterialColor[2];
      } else {
        // Flow away from probe = venous blue
        r = cfg.venousColor[0];
        g = cfg.venousColor[1];
        b = cfg.venousColor[2];
      }

      const idx = (y * w + x) * 4;
      const blendAlpha = alpha * dopplerIntensity;
      data[idx]     = Math.min(255, (data[idx] * (1 - blendAlpha) + r * blendAlpha) | 0);
      data[idx + 1] = Math.min(255, (data[idx + 1] * (1 - blendAlpha) + g * blendAlpha) | 0);
      data[idx + 2] = Math.min(255, (data[idx + 2] * (1 - blendAlpha) + b * blendAlpha) | 0);
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// § TISSUE ECHO RENDERER
// Renders the base tissue echo pattern (B-mode grayscale) with anatomical
// depth shading and near-field/far-field gain compensation.
// ─────────────────────────────────────────────────────────────────────────────

function renderBaseEcho(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  sectorOriginX: number,
  sectorOriginY: number
): void {
  // Dark background
  ctx.fillStyle = '#050D0A';
  ctx.fillRect(0, 0, w, h);

  // Time Gain Compensation (TGC) gradient — deeper tissue = brighter
  const tgcGradient = ctx.createLinearGradient(0, sectorOriginY, 0, h);
  tgcGradient.addColorStop(0, 'rgba(20, 35, 28, 0.3)');
  tgcGradient.addColorStop(0.4, 'rgba(30, 50, 40, 0.5)');
  tgcGradient.addColorStop(1, 'rgba(15, 25, 20, 0.6)');
  ctx.fillStyle = tgcGradient;
  ctx.fillRect(0, 0, w, h);

  // Sector beam cone (acoustic window)
  const sectorHalfAngle = 0.45; // radians (~25 degrees)
  const sectorDepth = h * 0.85;

  ctx.save();
  ctx.globalAlpha = 0.15;
  ctx.beginPath();
  ctx.moveTo(sectorOriginX, sectorOriginY);
  ctx.lineTo(
    sectorOriginX - Math.tan(sectorHalfAngle) * sectorDepth,
    sectorOriginY + sectorDepth
  );
  ctx.lineTo(
    sectorOriginX + Math.tan(sectorHalfAngle) * sectorDepth,
    sectorOriginY + sectorDepth
  );
  ctx.closePath();

  const sectorGrad = ctx.createRadialGradient(
    sectorOriginX, sectorOriginY, 10,
    sectorOriginX, sectorOriginY, sectorDepth
  );
  sectorGrad.addColorStop(0, 'rgba(160, 200, 180, 0.4)');
  sectorGrad.addColorStop(0.5, 'rgba(80, 120, 100, 0.15)');
  sectorGrad.addColorStop(1, 'rgba(10, 20, 15, 0.05)');
  ctx.fillStyle = sectorGrad;
  ctx.fill();
  ctx.restore();
}

// ─────────────────────────────────────────────────────────────────────────────
// § COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export const UltrasoundMinigame: React.FC<UltrasoundMinigameProps> = ({
  caseData,
  examInfo,
  onComplete,
  onClose,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number>(0);
  const frameCountRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const lastTimestampRef = useRef<number>(0);

  const [probePos, setProbePos] = useState({ x: CANVAS_W / 2, y: CANVAS_H / 4 });
  const [foundAnomaly, setFoundAnomaly] = useState(false);
  const [dopplerActive, setDopplerActive] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [signalStrength, setSignalStrength] = useState(0);

  // Anomaly position derived from exam hotspot data (normalized to canvas coords)
  const anomalyPos = {
    x: (examInfo.hotspot?.x || 500) * (CANVAS_W / 1000),
    y: (examInfo.hotspot?.y || 350) * (CANVAS_H / 700),
  };
  const anomalyRadius = 70;

  // ── 60fps Render Loop ──

  const renderLoop = useCallback(
    (timestamp: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      // Delta time computation
      if (lastTimestampRef.current === 0) lastTimestampRef.current = timestamp;
      const dt = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;
      timeRef.current += dt;
      frameCountRef.current += 1;

      const t = timeRef.current;
      const frame = frameCountRef.current;
      const w = canvas.width;
      const h = canvas.height;
      const px = probePos.x;
      const py = probePos.y;

      // ── Phase 1: Base echo field ──
      renderBaseEcho(ctx, w, h, px, py);

      // ── Phase 2: Get ImageData for pixel-level processing ──
      const imageData = ctx.getImageData(0, 0, w, h);

      // ── Phase 3: Apply multiplicative speckle noise ──
      applySpeckleNoise(imageData, SPECKLE_CFG);

      // ── Phase 4: Acoustic grain structure ──
      applyAcousticGrain(imageData, SPECKLE_CFG.grainDensity, frame);

      // ── Phase 5: Anomaly echo and Doppler flow ──
      const distToAnomaly = Math.hypot(px - anomalyPos.x, py - anomalyPos.y);
      const currentSignalStrength = Math.max(
        0,
        1.0 - distToAnomaly / (anomalyRadius * 2.5)
      );

      if (distToAnomaly < anomalyRadius * 2.5) {
        // Render hyperechoic/hypoechoic anomaly region
        renderAnomalyEcho(imageData, anomalyPos.x, anomalyPos.y, anomalyRadius, t);

        // Color Doppler overlay if active
        if (dopplerActive) {
          renderDopplerOverlay(
            imageData,
            anomalyPos.x,
            anomalyPos.y,
            px,
            py,
            anomalyRadius,
            DOPPLER_CFG,
            t
          );
        }

        // Audio feedback — frequency proportional to proximity
        if (audioEnabled && frame % 6 === 0) {
          const freq = 300 + currentSignalStrength * 500;
          soundManager.playTone(freq, 0.05, 0.02 * currentSignalStrength);
        }

        // Detection threshold
        if (distToAnomaly < anomalyRadius * 0.6 && !foundAnomaly) {
          setFoundAnomaly(true);
          soundManager.playDiscovery();
        }
      }

      // ── Phase 6: Write processed ImageData back to canvas ──
      ctx.putImageData(imageData, 0, 0);

      // ── Phase 7: Overlay HUD elements (drawn AFTER pixel processing) ──
      renderProbeIndicator(ctx, px, py, currentSignalStrength, t);
      renderDepthScale(ctx, h);
      renderScanlineEffect(ctx, w, h, t);

      // Update signal strength state for UI (throttled)
      if (frame % 10 === 0) {
        setSignalStrength(Math.round(currentSignalStrength * 100));
      }

      animFrameRef.current = requestAnimationFrame(renderLoop);
    },
    [probePos, dopplerActive, foundAnomaly, audioEnabled, anomalyPos.x, anomalyPos.y]
  );

  useEffect(() => {
    animFrameRef.current = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [renderLoop]);

  // ── Mouse/Touch handler ──

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const scaleX = CANVAS_W / rect.width;
    const scaleY = CANVAS_H / rect.height;
    setProbePos({
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    });
  };

  const handleFinish = () => {
    onComplete(examInfo.evidenceId, foundAnomaly ? 1 : 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#08120E]/95 backdrop-blur-xl flex flex-col justify-between p-6 select-none"
    >
      {/* ── Header ── */}
      <div className="flex items-center justify-between border-b border-[#C89A3C]/30 pb-4">
        <div>
          <h2 className="text-xl font-bold text-[#E8B84A] flex items-center gap-2">
            <Activity className="w-6 h-6 text-[#C89A3C]" />
            Ultrassonografia Doppler em Tempo Real
          </h2>
          <p className="text-xs text-slate-400">
            Arraste o transdutor sobre o corpo do paciente. O speckle noise e
            mapeamento Doppler são renderizados em tempo real a 60fps.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          {/* Doppler toggle */}
          <button
            onClick={() => setDopplerActive(!dopplerActive)}
            className={`px-4 py-2 rounded-xl border text-xs font-bold transition-all ${
              dopplerActive
                ? 'bg-rose-950/80 border-rose-500 text-rose-200'
                : 'bg-slate-800 border-slate-700 text-slate-400'
            }`}
          >
            {dopplerActive
              ? 'Color-Doppler ATIVO'
              : 'Modo B (Escala de Cinza)'}
          </button>

          {/* Audio toggle */}
          <button
            onClick={() => setAudioEnabled(!audioEnabled)}
            className="px-3 py-2 rounded-xl border border-slate-700 text-slate-300 hover:border-[#C89A3C] transition-all"
          >
            {audioEnabled ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Close */}
          <button
            onClick={onClose}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:border-[#C89A3C] transition-all"
          >
            <X className="w-5 h-5 text-[#C89A3C]" />
            <span className="font-semibold text-sm">Concluir</span>
          </button>
        </div>
      </div>

      {/* ── Main Canvas Viewport ── */}
      <div className="relative flex-1 my-4 flex items-center justify-center rounded-3xl bg-[#030806] border border-[#C89A3C]/30 overflow-hidden shadow-2xl">
        {/* Patient silhouette (behind canvas) */}
        <div className="absolute w-[800px] h-[500px] pointer-events-none opacity-15 overflow-hidden flex items-center justify-center">
          <img
            src={caseData?.imageTexture}
            alt={caseData?.speciesName}
            className="w-full h-full object-contain filter grayscale contrast-200"
          />
        </div>

        <canvas
          ref={canvasRef}
          width={CANVAS_W}
          height={CANVAS_H}
          onPointerMove={handlePointerMove}
          className="relative z-10 rounded-2xl border border-slate-800 cursor-none shadow-2xl"
          style={{ touchAction: 'none' }}
        />

        {/* Detection badge */}
        {foundAnomaly && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', bounce: 0.5 }}
            className="absolute top-6 right-6 px-5 py-3 rounded-2xl glass-panel border border-emerald-500/50 text-emerald-300 font-bold text-sm shadow-2xl flex items-center gap-3 z-20"
          >
            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            <span>ALTERAÇÃO ECOGÊNICA DETECTADA!</span>
          </motion.div>
        )}

        {/* Signal strength meter */}
        <div className="absolute bottom-6 left-6 bg-[#0B1511]/90 border border-slate-700 rounded-xl px-4 py-2 flex items-center gap-3 z-20">
          <span className="text-[10px] text-slate-400 uppercase font-bold">
            Sinal
          </span>
          <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-150"
              style={{
                width: `${signalStrength}%`,
                background:
                  signalStrength > 70
                    ? '#34d399'
                    : signalStrength > 40
                    ? '#fbbf24'
                    : '#64748b',
              }}
            />
          </div>
          <span className="text-[10px] font-mono text-slate-300">
            {signalStrength}%
          </span>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-4">
        <span>
          Transdutor Convexo 5.0 MHz — Ganho: 75% — Speckle σ={SPECKLE_CFG.intensity.toFixed(2)}
        </span>
        {foundAnomaly && (
          <button
            onClick={handleFinish}
            className="px-6 py-2.5 rounded-xl bg-emerald-600 border border-emerald-300 text-slate-950 font-extrabold text-sm gold-glow hover:scale-105 transition-all"
          >
            Anexar Laudo ao Prontuário
          </button>
        )}
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// § AUXILIARY RENDERERS (canvas overlay functions)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Render a hypoechoic/hyperechoic anomaly mass in the tissue field.
 * Uses concentric ellipses with varying brightness to simulate an
 * ultrasound-visible pathological structure.
 */
function renderAnomalyEcho(
  imageData: ImageData,
  cx: number,
  cy: number,
  radius: number,
  time: number
): void {
  const data = imageData.data;
  const w = imageData.width;
  const h = imageData.height;

  const pulseFactor = 1.0 + 0.05 * Math.sin(time * 4.0); // subtle pulsation

  for (
    let y = Math.max(0, Math.floor(cy - radius));
    y < Math.min(h, Math.ceil(cy + radius));
    y++
  ) {
    for (
      let x = Math.max(0, Math.floor(cx - radius));
      x < Math.min(w, Math.ceil(cx + radius));
      x++
    ) {
      const dist = Math.hypot(x - cx, y - cy) * pulseFactor;
      if (dist > radius) continue;

      const normalizedDist = dist / radius;
      const idx = (y * w + x) * 4;

      // Hypoechoic core (dark center) + hyperechoic rim (bright ring)
      let echoBrightness: number;
      if (normalizedDist < 0.3) {
        // Dark core (fluid-filled / necrotic)
        echoBrightness = 25 + normalizedDist * 40;
      } else if (normalizedDist < 0.6) {
        // Heterogeneous middle zone
        const noise = Math.sin(x * 0.5 + time * 2) * Math.cos(y * 0.7) * 30;
        echoBrightness = 60 + noise;
      } else {
        // Hyperechoic rim (capsule / calcification border)
        echoBrightness = 140 * (1.0 - (normalizedDist - 0.6) / 0.4);
      }

      const alpha = Math.max(0, 1.0 - normalizedDist);
      // Grayscale blend
      const echoVal = Math.max(0, Math.min(255, echoBrightness));
      data[idx]     = Math.min(255, (data[idx] * (1 - alpha * 0.6) + echoVal * alpha * 0.6) | 0);
      data[idx + 1] = Math.min(255, (data[idx + 1] * (1 - alpha * 0.6) + (echoVal * 0.95) * alpha * 0.6) | 0);
      data[idx + 2] = Math.min(255, (data[idx + 2] * (1 - alpha * 0.6) + (echoVal * 0.85) * alpha * 0.6) | 0);
    }
  }
}

/**
 * Render the ultrasound probe position indicator and beam cone outline.
 */
function renderProbeIndicator(
  ctx: CanvasRenderingContext2D,
  px: number,
  py: number,
  signalStrength: number,
  _time: number
): void {
  ctx.save();

  // Beam sector lines
  const sectorHalfAngle = 0.4;
  const beamDepth = 350;

  ctx.strokeStyle = `rgba(200, 154, 60, ${0.3 + signalStrength * 0.3})`;
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 8]);
  ctx.beginPath();
  ctx.moveTo(px, py);
  ctx.lineTo(
    px - Math.tan(sectorHalfAngle) * beamDepth,
    py + beamDepth
  );
  ctx.moveTo(px, py);
  ctx.lineTo(
    px + Math.tan(sectorHalfAngle) * beamDepth,
    py + beamDepth
  );
  ctx.stroke();
  ctx.setLineDash([]);

  // Probe crosshair
  ctx.strokeStyle = `rgba(232, 184, 74, ${0.6 + signalStrength * 0.4})`;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(px, py, 8, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(px - 12, py);
  ctx.lineTo(px + 12, py);
  ctx.moveTo(px, py - 12);
  ctx.lineTo(px, py + 12);
  ctx.stroke();

  ctx.restore();
}

/**
 * Render depth scale ruler on the right edge (typical in clinical ultrasound).
 */
function renderDepthScale(ctx: CanvasRenderingContext2D, canvasHeight: number): void {
  ctx.save();
  ctx.fillStyle = 'rgba(200, 200, 200, 0.4)';
  ctx.font = '9px monospace';

  const tickInterval = canvasHeight / 10;
  for (let i = 0; i <= 10; i++) {
    const y = i * tickInterval;
    const depthCm = (i * 1.5).toFixed(1);

    ctx.fillRect(CANVAS_W - 20, y, 8, 1);
    ctx.fillText(`${depthCm}`, CANVAS_W - 50, y + 3);
  }
  ctx.restore();
}

/**
 * Render subtle CRT-style scanline overlay for authentic US display feel.
 */
function renderScanlineEffect(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  _time: number
): void {
  ctx.save();
  ctx.globalAlpha = 0.04;
  ctx.fillStyle = '#000000';

  for (let y = 0; y < h; y += 3) {
    ctx.fillRect(0, y, w, 1);
  }
  ctx.restore();
}
