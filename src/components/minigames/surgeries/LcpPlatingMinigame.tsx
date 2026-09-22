import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, AlertTriangle, CheckCircle2, Activity } from 'lucide-react';
import type { SurgicalMinigameProps } from '../../../types';
import { soundManager } from '../../../utils/sound';

interface ScrewState {
  id: number;
  x: number;
  y: number;
  drilled: boolean;
  tightened: boolean;
  torque: number; // 0-100
  quality: 'under' | 'perfect' | 'stripped' | 'pending';
}

export const LcpPlatingMinigame: React.FC<SurgicalMinigameProps> = ({
  stepId,
  executionToken,
  onComplete,
  onCancel: _onCancel,
  onVitalsDrain,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Phases: 'align' | 'screw' | 'stability' | 'finished'
  const [phase, setPhase] = useState<'align' | 'screw' | 'stability' | 'finished'>('align');
  const [platePos, setPlatePos] = useState({ x: 340, y: 190 });
  const [plateAngle, setPlateAngle] = useState(-12);
  const [isDraggingPlate, setIsDraggingPlate] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Screwing state
  const [activeScrewIndex, setActiveScrewIndex] = useState(0);
  const [isTorquing, setIsTorquing] = useState(false);
  const [currentTorque, setCurrentTorque] = useState(50);
  const torqueDirectionRef = useRef(1);
  const [screws, setScrews] = useState<ScrewState[]>([
    { id: 1, x: 260, y: 250, drilled: false, tightened: false, torque: 0, quality: 'pending' },
    { id: 2, x: 330, y: 250, drilled: false, tightened: false, torque: 0, quality: 'pending' },
    { id: 3, x: 470, y: 250, drilled: false, tightened: false, torque: 0, quality: 'pending' },
    { id: 4, x: 540, y: 250, drilled: false, tightened: false, torque: 0, quality: 'pending' },
  ]);

  // Stability test state
  const [stabilityProgress, setStabilityProgress] = useState(0);
  const [isTestingStability, setIsTestingStability] = useState(false);
  const [stabilityScore, setStabilityScore] = useState(0);

  // Safety & lifecycle refs
  const isPlayingRef = useRef(true);
  const timeoutIdsRef = useRef<number[]>([]);
  const onCompleteRef = useRef(onComplete);
  const onVitalsDrainRef = useRef(onVitalsDrain);

  useEffect(() => {
    onCompleteRef.current = onComplete;
    onVitalsDrainRef.current = onVitalsDrain;
  }, [onComplete, onVitalsDrain]);

  // Target alignment coordinates
  const targetX = 400;
  const targetY = 250;
  const targetAngle = 0;

  const isAlignmentClose =
    Math.abs(platePos.x - targetX) < 25 &&
    Math.abs(platePos.y - targetY) < 20 &&
    Math.abs(plateAngle - targetAngle) < 5;

  // Torque meter oscillation effect
  useEffect(() => {
    if (phase !== 'screw' || !isTorquing) return;

    const interval = setInterval(() => {
      setCurrentTorque((prev) => {
        let next = prev + torqueDirectionRef.current * 4.5;
        if (next >= 100) {
          next = 100;
          torqueDirectionRef.current = -1;
        } else if (next <= 10) {
          next = 10;
          torqueDirectionRef.current = 1;
        }
        return next;
      });
      soundManager.playTone(200 + currentTorque * 3, 0.04, 0.02);
    }, 30);

    return () => clearInterval(interval);
  }, [phase, isTorquing, currentTorque]);

  // Canvas rendering of bone and anatomical structures
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ── Layer 1: Surgical drape & wound background ──
      ctx.fillStyle = '#060F0C';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Sterile Drape Frame
      ctx.fillStyle = '#0A1C16';
      ctx.beginPath();
      ctx.roundRect(30, 20, canvas.width - 60, canvas.height - 40, 20);
      ctx.fill();
      ctx.strokeStyle = '#153E32';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Deep surgical opening
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(400, 250, 280, 120, 0, 0, Math.PI * 2);
      const deepGrad = ctx.createRadialGradient(400, 250, 30, 400, 250, 280);
      deepGrad.addColorStop(0, '#4A0515');
      deepGrad.addColorStop(0.6, '#6B0F24');
      deepGrad.addColorStop(1, '#1A0409');
      ctx.fillStyle = deepGrad;
      ctx.fill();
      ctx.strokeStyle = '#881337';
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.restore();

      // ── Layer 2: Fractured Bone Segments (Proximal & Distal) ──
      ctx.save();

      // Proximal bone fragment (Left)
      ctx.fillStyle = '#E5E7EB';
      ctx.beginPath();
      ctx.roundRect(160, 220, 230, 60, [14, 0, 0, 14]);
      ctx.fill();
      ctx.strokeStyle = '#9CA3AF';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Cortical texture lines
      ctx.strokeStyle = 'rgba(156, 163, 175, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(180, 235); ctx.lineTo(380, 235);
      ctx.moveTo(180, 265); ctx.lineTo(380, 265);
      ctx.stroke();

      // Distal bone fragment (Right)
      ctx.fillStyle = '#E5E7EB';
      ctx.beginPath();
      ctx.roundRect(410, 220, 230, 60, [0, 14, 14, 0]);
      ctx.fill();
      ctx.strokeStyle = '#9CA3AF';
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.strokeStyle = 'rgba(156, 163, 175, 0.4)';
      ctx.beginPath();
      ctx.moveTo(420, 235); ctx.lineTo(620, 235);
      ctx.moveTo(420, 265); ctx.lineTo(620, 265);
      ctx.stroke();

      // Fracture line (Center gap)
      ctx.fillStyle = '#5A0818';
      ctx.beginPath();
      ctx.moveTo(390, 218);
      ctx.lineTo(396, 240);
      ctx.lineTo(392, 260);
      ctx.lineTo(410, 282);
      ctx.lineTo(402, 282);
      ctx.lineTo(386, 255);
      ctx.lineTo(392, 235);
      ctx.lineTo(384, 218);
      ctx.closePath();
      ctx.fill();

      // Target plate ghost silhouette (in align phase)
      if (phase === 'align') {
        ctx.save();
        ctx.strokeStyle = isAlignmentClose ? '#10B981' : 'rgba(56, 189, 248, 0.4)';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 6]);
        ctx.beginPath();
        ctx.roundRect(240, 232, 320, 36, 18);
        ctx.stroke();
        ctx.restore();
      }

      ctx.restore();

      // ── Layer 3: Titanium LCP Plate (Placed or Dragged) ──
      ctx.save();
      ctx.translate(platePos.x, platePos.y);
      ctx.rotate((plateAngle * Math.PI) / 180);

      // Plate Body (Titanium alloy metallic gradient)
      const plateGrad = ctx.createLinearGradient(-160, -18, 160, 18);
      plateGrad.addColorStop(0, '#94A3B8');
      plateGrad.addColorStop(0.5, '#CBD5E1');
      plateGrad.addColorStop(1, '#64748B');

      ctx.fillStyle = plateGrad;
      ctx.beginPath();
      ctx.roundRect(-160, -18, 320, 36, 18);
      ctx.fill();
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Plate Bevel Highlight
      ctx.strokeStyle = 'rgba(255,255,255,0.6)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(-158, -16, 316, 32, 16);
      ctx.stroke();

      // 4 Locking Compression Holes
      const holeOffsets = [-120, -50, 50, 120];
      holeOffsets.forEach((hX, idx) => {
        const s = screws[idx];
        ctx.save();
        ctx.beginPath();
        ctx.arc(hX, 0, 9, 0, Math.PI * 2);

        if (s && s.tightened) {
          // Tightened screw head
          if (s.quality === 'perfect') ctx.fillStyle = '#059669';
          else if (s.quality === 'under') ctx.fillStyle = '#D97706';
          else ctx.fillStyle = '#DC2626';
          ctx.fill();

          // Hexagonal/Torx drive head
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(hX, 0, 5, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          // Open hole with thread ridges
          ctx.fillStyle = '#1E293B';
          ctx.fill();
          ctx.strokeStyle = idx === activeScrewIndex && phase === 'screw' ? '#38BDF8' : '#64748B';
          ctx.lineWidth = idx === activeScrewIndex && phase === 'screw' ? 2.5 : 1.5;
          ctx.stroke();
        }
        ctx.restore();
      });

      ctx.restore();

      // ── Layer 4: Stability Test Vibration Overlay ──
      if (phase === 'stability' && isTestingStability) {
        ctx.save();
        ctx.fillStyle = 'rgba(56, 189, 248, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Stress force arrows
        ctx.strokeStyle = '#38BDF8';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(395, 170); ctx.lineTo(395, 210);
        ctx.moveTo(390, 200); ctx.lineTo(395, 210); ctx.lineTo(400, 200);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(405, 330); ctx.lineTo(405, 290);
        ctx.moveTo(400, 300); ctx.lineTo(405, 290); ctx.lineTo(410, 300);
        ctx.stroke();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [phase, platePos, plateAngle, isAlignmentClose, screws, activeScrewIndex, isTestingStability]);

  // Handlers for Plate Alignment (Phase 1)
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (phase !== 'align') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * canvas.width;
    const mouseY = ((e.clientY - rect.top) / rect.height) * canvas.height;

    // Check if clicked near plate
    const dist = Math.hypot(mouseX - platePos.x, mouseY - platePos.y);
    if (dist < 100) {
      setIsDraggingPlate(true);
      setDragOffset({ x: mouseX - platePos.x, y: mouseY - platePos.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (phase !== 'align' || !isDraggingPlate) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * canvas.width;
    const mouseY = ((e.clientY - rect.top) / rect.height) * canvas.height;

    setPlatePos({
      x: Math.max(200, Math.min(600, mouseX - dragOffset.x)),
      y: Math.max(150, Math.min(350, mouseY - dragOffset.y)),
    });
  };

  const handleMouseUp = () => {
    if (isDraggingPlate) {
      setIsDraggingPlate(false);
      if (isAlignmentClose) {
        soundManager.playTone(600, 0.1, 0.08);
      }
    }
  };

  const confirmAlignment = () => {
    if (!isAlignmentClose) return;
    soundManager.playSuccess();
    setPlatePos({ x: targetX, y: targetY });
    setPlateAngle(targetAngle);
    setPhase('screw');
  };

  // Handlers for Screwing & Torque (Phase 2)
  const startTorquing = () => {
    if (phase !== 'screw' || isTorquing) return;
    setIsTorquing(true);
  };

  const lockTorque = () => {
    if (!isTorquing) return;
    setIsTorquing(false);

    let quality: 'under' | 'perfect' | 'stripped' = 'under';
    if (currentTorque >= 78 && currentTorque <= 93) {
      quality = 'perfect';
      soundManager.playTone(880, 0.15, 0.1);
    } else if (currentTorque > 93) {
      quality = 'stripped';
      soundManager.playError();
      if (onVitalsDrainRef.current) onVitalsDrainRef.current(10);
    } else {
      quality = 'under';
      soundManager.playTone(300, 0.2, 0.08);
    }

    const updatedScrews = [...screws];
    updatedScrews[activeScrewIndex] = {
      ...updatedScrews[activeScrewIndex],
      drilled: true,
      tightened: true,
      torque: currentTorque,
      quality,
    };
    setScrews(updatedScrews);

    // Proceed to next screw or stability test
    if (activeScrewIndex < screws.length - 1) {
      setActiveScrewIndex((prev) => prev + 1);
    } else {
      const tid = window.setTimeout(() => {
        setPhase('stability');
      }, 700);
      timeoutIdsRef.current.push(tid);
    }
  };

  // Stability Test under Mechanical Load (Phase 3)
  const runStabilityTest = () => {
    setIsTestingStability(true);
    let prog = 0;
    const interval = window.setInterval(() => {
      prog += 5;
      setStabilityProgress(prog);
      soundManager.playTone(150 + prog * 4, 0.05, 0.03);

      if (prog >= 100) {
        clearInterval(interval);
        setIsTestingStability(false);

        // Calculate score
        const perfectCount = screws.filter((s) => s.quality === 'perfect').length;
        const underCount = screws.filter((s) => s.quality === 'under').length;
        const strippedCount = screws.filter((s) => s.quality === 'stripped').length;

        const calculatedStability = Math.round(
          (perfectCount * 25 + underCount * 12 - strippedCount * 10) * 1
        );
        const finalStability = Math.max(20, Math.min(100, calculatedStability));
        setStabilityScore(finalStability);
        setPhase('finished');

        const isSuccess = finalStability >= 70;
        if (isSuccess) soundManager.playSuccess();
        else soundManager.playError();

        const accuracy = finalStability / 100;
        const damage = strippedCount * 10;

        const emitTid = window.setTimeout(() => {
          if (onCompleteRef.current) {
            onCompleteRef.current({
              stepId: stepId || 'step_lcp_plating',
              executionToken: executionToken || '',
              result: isSuccess ? 'success' : 'failure',
              accuracy,
              damage,
            });
          }
        }, 2200);
        timeoutIdsRef.current.push(emitTid);
      }
    }, 80);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isPlayingRef.current = false;
      timeoutIdsRef.current.forEach((id) => clearTimeout(id));
      timeoutIdsRef.current = [];
    };
  }, []);

  return (
    <div className="flex flex-col h-full bg-[#050A08] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative select-none">
      {/* Top HUD Header */}
      <div className="bg-slate-900/90 p-4 flex justify-between items-center border-b border-slate-800 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-950 border border-blue-500/40 rounded-xl">
            <Wrench className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="font-extrabold text-white text-sm uppercase tracking-wider flex items-center gap-2">
              Osteossíntese Rígida: Placa LCP Bloqueada
              <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full border border-blue-500/30">
                Fase {phase === 'align' ? '1: Alinhamento' : phase === 'screw' ? '2: Fixação de Parafusos' : '3: Estabilidade'}
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Estabilização bicortical com parafusos de bloqueio sobre traço de fratura cominutiva.
            </p>
          </div>
        </div>

        {/* HUD Info Badges */}
        <div className="flex gap-6">
          <div className="text-right">
            <div className="text-[10px] text-slate-400 font-mono mb-1">PARAFUSOS CORTICAIS</div>
            <div className="flex gap-1.5">
              {screws.map((s, idx) => (
                <div
                  key={s.id}
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold border transition-all ${
                    s.tightened
                      ? s.quality === 'perfect'
                        ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                        : s.quality === 'under'
                        ? 'bg-amber-950 border-amber-500 text-amber-300'
                        : 'bg-rose-950 border-rose-500 text-rose-300'
                      : idx === activeScrewIndex && phase === 'screw'
                      ? 'bg-blue-950 border-blue-400 text-blue-300 animate-pulse'
                      : 'bg-slate-800 border-slate-700 text-slate-500'
                  }`}
                >
                  {idx + 1}
                </div>
              ))}
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
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className="w-full h-full object-contain rounded-xl border border-slate-800 shadow-inner"
        />

        {/* Phase 1: Alignment Controls Overlay */}
        {phase === 'align' && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 bg-slate-950/85 backdrop-blur-md border border-slate-800 p-4 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-4">
              <span className="text-xs text-slate-300 font-semibold">
                Arraste a placa de titânio sobre o traço de fratura:
              </span>
              <button
                onClick={() => setPlateAngle((prev) => (prev <= -30 ? 30 : prev - 6))}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-lg border border-slate-600 transition-colors"
              >
                Girar (-6°)
              </button>
              <button
                onClick={() => setPlateAngle((prev) => (prev >= 30 ? -30 : prev + 6))}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-lg border border-slate-600 transition-colors"
              >
                Girar (+6°)
              </button>
            </div>
            <button
              onClick={confirmAlignment}
              disabled={!isAlignmentClose}
              className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-lg ${
                isAlignmentClose
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer shadow-emerald-500/30'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
              }`}
            >
              {isAlignmentClose ? 'Fixar Posição da Placa' : 'Alinhe nos Guias Pontilhados'}
            </button>
          </div>
        )}

        {/* Phase 2: Screwing & Torque Control Overlay */}
        {phase === 'screw' && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 bg-slate-950/90 backdrop-blur-md border border-slate-800 p-4 rounded-2xl shadow-2xl w-96">
            <div className="w-full flex justify-between items-center text-xs font-bold">
              <span className="text-slate-300">Torque do Parafuso #{activeScrewIndex + 1}</span>
              <span
                className={`font-mono ${
                  currentTorque >= 78 && currentTorque <= 93
                    ? 'text-emerald-400'
                    : currentTorque > 93
                    ? 'text-rose-400'
                    : 'text-amber-400'
                }`}
              >
                {Math.round(currentTorque)} N·cm
              </span>
            </div>

            {/* Dynamic Torque Gauge */}
            <div className="w-full h-5 bg-slate-800 rounded-full overflow-hidden relative border border-slate-700">
              {/* Under-torque zone (yellow) */}
              <div className="absolute left-0 top-0 bottom-0 w-[78%] bg-amber-500/20" />
              {/* Perfect torque zone (green) */}
              <div className="absolute left-[78%] top-0 bottom-0 w-[15%] bg-emerald-500/50 border-x border-emerald-400" />
              {/* Over-torque zone (red) */}
              <div className="absolute right-0 top-0 bottom-0 w-[7%] bg-rose-600/50" />

              {/* Indicator Needle */}
              <div
                className="absolute top-0 bottom-0 w-2 bg-white shadow-md transition-none rounded-full"
                style={{ left: `calc(${currentTorque}% - 4px)` }}
              />
            </div>

            <div className="w-full flex justify-between text-[10px] text-slate-400 font-mono">
              <span>SUB-TORQUE</span>
              <span className="text-emerald-400 font-bold">ZONA IDEAL (78-93%)</span>
              <span className="text-rose-400">ESPANAÇÃO</span>
            </div>

            <div className="flex gap-3 w-full">
              <button
                onClick={startTorquing}
                disabled={isTorquing}
                className={`flex-1 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  !isTorquing
                    ? 'bg-blue-600 hover:bg-blue-500 text-white cursor-pointer shadow-blue-500/20'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                Acionar Chave
              </button>
              <button
                onClick={lockTorque}
                disabled={!isTorquing}
                className={`flex-1 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  isTorquing
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer shadow-emerald-500/30 animate-pulse'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                Travar Torque
              </button>
            </div>
          </div>
        )}

        {/* Phase 3: Stability Test Load Overlay */}
        {phase === 'stability' && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 bg-slate-950/90 backdrop-blur-md border border-slate-800 p-5 rounded-2xl shadow-2xl w-96 text-center">
            <div className="flex items-center gap-2 text-sm font-black text-cyan-400 uppercase tracking-wider">
              <Activity className="w-5 h-5 text-cyan-400" />
              Teste de Carga Biomecânica
            </div>
            <p className="text-xs text-slate-400">
              Aplique estresse dinâmico para testar a estabilidade rígida da osteossíntese antes da síntese.
            </p>

            {isTestingStability ? (
              <div className="w-full">
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                  <div
                    className="h-full bg-cyan-400 transition-all duration-75"
                    style={{ width: `${stabilityProgress}%` }}
                  />
                </div>
                <div className="text-[10px] text-cyan-300 font-mono mt-2">
                  MEDINDO DEFLEXÃO CORTICAL: {stabilityProgress}%
                </div>
              </div>
            ) : (
              <button
                onClick={runStabilityTest}
                className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-cyan-500/30"
              >
                Iniciar Teste de Estabilidade
              </button>
            )}
          </div>
        )}

        {/* Completion Modal */}
        <AnimatePresence>
          {phase === 'finished' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center gap-3 z-30 rounded-xl"
            >
              <div
                className={`w-16 h-16 rounded-full border flex items-center justify-center shadow-2xl ${
                  stabilityScore >= 70
                    ? 'bg-emerald-950/80 border-emerald-500 shadow-emerald-500/30 text-emerald-400'
                    : 'bg-rose-950/80 border-rose-500 shadow-rose-500/30 text-rose-400'
                }`}
              >
                {stabilityScore >= 70 ? (
                  <CheckCircle2 className="w-10 h-10" />
                ) : (
                  <AlertTriangle className="w-10 h-10" />
                )}
              </div>
              <h3
                className={`text-2xl font-black uppercase tracking-wider ${
                  stabilityScore >= 70 ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {stabilityScore >= 70 ? 'Osteossíntese Concluída!' : 'Instabilidade da Fixação!'}
              </h3>
              <p className="text-slate-300 text-xs max-w-sm text-center">
                {stabilityScore >= 70
                  ? `Estabilidade biomecânica de ${stabilityScore}%. A placa LCP e os parafusos atingiram fixação bicortical rígida adequada.`
                  : `Estabilidade insuficiente (${stabilityScore}%). Parafusos frouxos ou espanamento de córtex comprometeram a consolidação óssea.`}
              </p>

              <div className="flex gap-4 mt-2 font-mono text-xs">
                <div className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300">
                  ESTABILIDADE: <span className="font-bold text-cyan-400">{stabilityScore}%</span>
                </div>
                <div className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300">
                  PARAFUSOS CORRETOS: <span className="font-bold text-emerald-400">{screws.filter(s => s.quality === 'perfect').length}/4</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
