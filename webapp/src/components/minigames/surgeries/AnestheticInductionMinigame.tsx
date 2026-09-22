import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Wind, CheckCircle2, Gauge } from 'lucide-react';
import type { SurgicalMinigameProps } from '../../../types';
import { soundManager } from '../../../utils/sound';

export const AnestheticInductionMinigame: React.FC<SurgicalMinigameProps> = ({
  stepId,
  executionToken,
  onComplete,
  onCancel: _onCancel,
  onVitalsDrain,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Anesthetic Machine Controls
  const [isoflurane, setIsoflurane] = useState(0.5); // % vol (0.0 to 5.0)
  const [oxygenFlow, setOxygenFlow] = useState(1.0); // L/min (0.2 to 3.0)

  // Physiological patient monitor state
  const [heartRate, setHeartRate] = useState(95);
  const [respiratoryRate, setRespiratoryRate] = useState(24);
  const [spO2, setSpO2] = useState(98);

  // Stability progress in ideal zone (requires 8 seconds in target)
  const [stabilitySeconds, setStabilitySeconds] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Safety & animation refs
  const isPlayingRef = useRef(true);
  const isofluraneRef = useRef(0.5);
  const oxygenFlowRef = useRef(1.0);
  const stabilityRef = useRef(0);
  const timeoutIdsRef = useRef<number[]>([]);
  const ecgPointsRef = useRef<number[]>([]);

  // Callbacks in refs
  const onCompleteRef = useRef(onComplete);
  const onVitalsDrainRef = useRef(onVitalsDrain);
  useEffect(() => {
    onCompleteRef.current = onComplete;
    onVitalsDrainRef.current = onVitalsDrain;
  }, [onComplete, onVitalsDrain]);

  useEffect(() => {
    isofluraneRef.current = isoflurane;
    oxygenFlowRef.current = oxygenFlow;
  }, [isoflurane, oxygenFlow]);

  // Main simulation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let lastTick = Date.now();

    const render = () => {
      if (!isPlayingRef.current) return;

      const now = Date.now();
      const dt = (now - lastTick) / 1000;
      lastTick = now;

      // ── 1. Pharmacodynamic Model: Compute Patient Physiology ──
      const iso = isofluraneRef.current;
      const o2 = oxygenFlowRef.current;

      // Target depth is achieved when isoflurane is between 1.6% and 2.6% and O2 >= 0.8 L/min
      let depth: 'superficial' | 'ideal' | 'deep' | 'toxic' = 'superficial';
      if (iso < 1.4) {
        depth = 'superficial';
      } else if (iso <= 2.8 && o2 >= 0.7) {
        depth = 'ideal';
      } else if (iso <= 3.8) {
        depth = 'deep';
      } else {
        depth = 'toxic';
      }

      // Target vitals calculation
      const targetHR = depth === 'superficial' ? 125 : depth === 'ideal' ? 88 : depth === 'deep' ? 52 : 28;
      const targetRR = depth === 'superficial' ? 32 : depth === 'ideal' ? 18 : depth === 'deep' ? 9 : 4;
      const targetSpO2 = o2 < 0.5 ? 86 : depth === 'toxic' ? 88 : 99;

      setHeartRate((prev) => Math.round(prev + (targetHR - prev) * 0.05));
      setRespiratoryRate((prev) => Math.round(prev + (targetRR - prev) * 0.05));
      setSpO2((prev) => Math.round(prev + (targetSpO2 - prev) * 0.05));

      // Stability timer in ideal plane
      if (depth === 'ideal') {
        stabilityRef.current = Math.min(8, stabilityRef.current + dt);
        setStabilitySeconds(Math.floor(stabilityRef.current));

        if (stabilityRef.current >= 8 && isPlayingRef.current) {
          isPlayingRef.current = false;
          setIsCompleted(true);
          soundManager.playSuccess();

          const emitTid = window.setTimeout(() => {
            if (onCompleteRef.current) {
              onCompleteRef.current({
                stepId: stepId || 'step_anesthesia',
                executionToken: executionToken || '',
                result: 'success',
                accuracy: 1.0,
                damage: 0,
              });
            }
          }, 2000);
          timeoutIdsRef.current.push(emitTid);
        }
      } else if (depth === 'toxic') {
        // Toxic overdose causes vitals drain
        if (onVitalsDrainRef.current && Math.random() < 0.02) {
          onVitalsDrainRef.current(8);
          soundManager.playError();
        }
      }

      // ── 2. Render Patient & Anesthetic Monitor Canvas ──
      const w = canvas.width;
      const h = canvas.height;

      // Dark medical cockpit aesthetic
      ctx.fillStyle = '#030806';
      ctx.fillRect(0, 0, w, h);

      // Left Panel: Anesthesia Machine Circuit
      ctx.fillStyle = '#081410';
      ctx.beginPath();
      ctx.roundRect(20, 20, 360, h - 40, 16);
      ctx.fill();
      ctx.strokeStyle = '#153528';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Vaporizer chamber visual
      ctx.fillStyle = '#0F261E';
      ctx.beginPath();
      ctx.roundRect(50, 60, 140, 220, 12);
      ctx.fill();
      ctx.strokeStyle = '#22C55E';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Isoflurane Liquid Level
      ctx.fillStyle = 'rgba(168, 85, 247, 0.4)';
      ctx.fillRect(54, 180, 132, 95);
      ctx.fillStyle = '#C084FC';
      ctx.font = '10px monospace';
      ctx.fillText('ISOFLURANO USP', 65, 85);
      ctx.font = '22px monospace';
      ctx.fillText(`${iso.toFixed(1)}%`, 85, 140);

      // Oxygen Flowmeter visual
      ctx.fillStyle = '#0F261E';
      ctx.beginPath();
      ctx.roundRect(210, 60, 140, 220, 12);
      ctx.fill();
      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Float ball inside flowmeter
      const floatY = 250 - (o2 / 3.0) * 160;
      ctx.fillStyle = '#38BDF8';
      ctx.beginPath();
      ctx.arc(280, floatY, 12, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#38BDF8';
      ctx.font = '10px monospace';
      ctx.fillText('FLUXO DE O₂', 240, 85);
      ctx.font = '22px monospace';
      ctx.fillText(`${o2.toFixed(1)} L`, 245, 140);

      // Right Panel: Multiparameter Vital Signs Monitor
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.roundRect(400, 20, 380, h - 40, 16);
      ctx.fill();
      ctx.strokeStyle = '#1E293B';
      ctx.lineWidth = 3;
      ctx.stroke();

      // ECG Waveform Generation
      ctx.strokeStyle = depth === 'ideal' ? '#10B981' : depth === 'toxic' ? '#EF4444' : '#F59E0B';
      ctx.lineWidth = 2.5;
      ctx.beginPath();

      if (ecgPointsRef.current.length > 180) {
        ecgPointsRef.current.shift();
      }

      // ECG rhythm shape
      const ecgCycle = (Date.now() / (60000 / Math.max(30, heartRate))) % 1;
      let yOffset = 0;
      if (ecgCycle > 0.18 && ecgCycle < 0.22) yOffset = -15; // P wave
      else if (ecgCycle > 0.28 && ecgCycle < 0.3) yOffset = 10; // Q wave
      else if (ecgCycle > 0.3 && ecgCycle < 0.35) yOffset = -50; // R peak
      else if (ecgCycle > 0.35 && ecgCycle < 0.38) yOffset = 18; // S wave
      else if (ecgCycle > 0.45 && ecgCycle < 0.55) yOffset = -22; // T wave

      ecgPointsRef.current.push(yOffset);

      ctx.beginPath();
      const startX = 420;
      const baseY = 130;
      for (let i = 0; i < ecgPointsRef.current.length; i++) {
        const x = startX + i * 1.8;
        const y = baseY + ecgPointsRef.current[i];
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Monitor Metrics Grid
      ctx.font = 'bold 11px monospace';
      ctx.fillStyle = '#94A3B8';
      ctx.fillText('ECG LEAD II - FC (bpm)', 420, 50);
      ctx.font = 'bold 36px monospace';
      ctx.fillStyle = depth === 'ideal' ? '#10B981' : depth === 'toxic' ? '#EF4444' : '#F59E0B';
      ctx.fillText(`${heartRate}`, 420, 90);

      // SpO2 Display
      ctx.font = 'bold 11px monospace';
      ctx.fillStyle = '#94A3B8';
      ctx.fillText('PLETISMOGRAFIA SpO₂ (%)', 620, 50);
      ctx.font = 'bold 36px monospace';
      ctx.fillStyle = '#38BDF8';
      ctx.fillText(`${spO2}%`, 620, 90);

      // Respiratory Rate Display
      ctx.font = 'bold 11px monospace';
      ctx.fillStyle = '#94A3B8';
      ctx.fillText('CAPNOGRAFIA FR (rpm)', 420, 230);
      ctx.font = 'bold 36px monospace';
      ctx.fillStyle = '#FBBF24';
      ctx.fillText(`${respiratoryRate}`, 420, 270);

      // Anesthetic Depth Status Box
      ctx.fillStyle =
        depth === 'ideal'
          ? 'rgba(16, 185, 129, 0.15)'
          : depth === 'toxic'
          ? 'rgba(239, 68, 68, 0.2)'
          : 'rgba(245, 158, 11, 0.15)';
      ctx.beginPath();
      ctx.roundRect(420, 310, 340, 60, 10);
      ctx.fill();

      ctx.fillStyle = depth === 'ideal' ? '#34D399' : depth === 'toxic' ? '#F87171' : '#FCD34D';
      ctx.font = 'bold 13px sans-serif';
      ctx.fillText(
        depth === 'ideal'
          ? 'PLANO III CIRÚRGICO ESTÁVEL'
          : depth === 'superficial'
          ? 'PLANO I/II SUPERFICIAL (RISCO DE ACORDAR)'
          : depth === 'deep'
          ? 'PLANO ANESTÉSICO PROFUNDO'
          : 'SOBREDOSAGEM TÓXICA / APNEIA!',
        435,
        345
      );

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      isPlayingRef.current = false;
      cancelAnimationFrame(animId);
      timeoutIdsRef.current.forEach((id) => clearTimeout(id));
      timeoutIdsRef.current = [];
    };
  }, [heartRate, respiratoryRate, spO2]);

  return (
    <div className="flex flex-col h-full bg-[#030806] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative select-none">
      {/* HUD Header */}
      <div className="bg-slate-900/90 p-4 flex justify-between items-center border-b border-slate-800 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-purple-950 border border-purple-500/40 rounded-xl">
            <Activity className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h3 className="font-extrabold text-white text-sm uppercase tracking-wider flex items-center gap-2">
              Indução e Manutenção Anestésica Inalatória
              <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full border border-purple-500/30">
                Pré-Operatório
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Calibre o vaporizador de Isoflurano e o fluxo de oxigênio para atingir o Plano Cirúrgico III de Guedel.
            </p>
          </div>
        </div>

        {/* Stability Counter */}
        <div className="text-right">
          <div className="text-[10px] text-slate-400 font-mono mb-1">ESTABILIDADE NO ALVO</div>
          <div className="w-36 h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
            <div
              className="h-full bg-emerald-400 transition-all duration-300"
              style={{ width: `${(stabilitySeconds / 8) * 100}%` }}
            />
          </div>
          <div className="text-[10px] text-emerald-400 font-mono mt-1 font-bold">
            {stabilitySeconds} / 8s SEGUROS
          </div>
        </div>
      </div>

      {/* Main Simulation Viewport */}
      <div className="flex-1 relative flex items-center justify-center p-2 bg-[#030806]">
        <canvas
          ref={canvasRef}
          width={800}
          height={500}
          className="w-full h-full object-contain rounded-xl border border-slate-800 shadow-inner"
        />

        {/* Floating Precision Controls Dock */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-8 bg-slate-950/90 backdrop-blur-md border border-slate-800 p-4 rounded-2xl shadow-2xl">
          {/* Isoflurane Dial */}
          <div className="flex flex-col gap-1.5 w-48">
            <div className="flex justify-between text-xs font-bold text-purple-300">
              <span className="flex items-center gap-1">
                <Gauge className="w-3.5 h-3.5" /> Isoflurano
              </span>
              <span className="font-mono">{isoflurane.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min="0.0"
              max="5.0"
              step="0.1"
              value={isoflurane}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setIsoflurane(val);
                soundManager.playTone(300 + val * 100, 0.03, 0.02);
              }}
              className="w-full accent-purple-500 cursor-pointer"
            />
            <div className="flex justify-between text-[9px] text-slate-500 font-mono">
              <span>0%</span>
              <span className="text-emerald-400 font-bold">ALVO: 1.8-2.6%</span>
              <span>5%</span>
            </div>
          </div>

          {/* O2 Flowmeter Dial */}
          <div className="flex flex-col gap-1.5 w-48">
            <div className="flex justify-between text-xs font-bold text-cyan-300">
              <span className="flex items-center gap-1">
                <Wind className="w-3.5 h-3.5" /> Fluxo O₂
              </span>
              <span className="font-mono">{oxygenFlow.toFixed(1)} L/min</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="3.0"
              step="0.1"
              value={oxygenFlow}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setOxygenFlow(val);
                soundManager.playTone(400 + val * 80, 0.03, 0.02);
              }}
              className="w-full accent-cyan-500 cursor-pointer"
            />
            <div className="flex justify-between text-[9px] text-slate-500 font-mono">
              <span>0.2L</span>
              <span className="text-cyan-400 font-bold">≥ 0.8 L/min</span>
              <span>3.0L</span>
            </div>
          </div>
        </div>

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
                Plano Anestésico Consolidado!
              </h3>
              <p className="text-slate-300 text-xs max-w-sm text-center">
                Paciente estabilizado no Plano Cirúrgico III de Guedel com oxigenação ótima ({spO2}%) e FC sob controle ({heartRate} bpm). Campo pronto para a incisão cirúrgica.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
