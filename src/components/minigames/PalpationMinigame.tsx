import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CheckCircle2, X } from 'lucide-react';
import type { CaseData } from '../../types';
import { soundManager } from '../../utils/sound';

interface PalpationMinigameProps {
  caseData: CaseData;
  onComplete: (regionName: string, evidenceId: string, stressAdded: number, timeSpent: number, quality: string) => void;
  onClose: () => void;
}

export const PalpationMinigame: React.FC<PalpationMinigameProps> = ({ caseData, onComplete, onClose }) => {
  const [examinedRegions, setExaminedRegions] = useState<string[]>([]);
  const [pressingRegion, setPressingRegion] = useState<string | null>(null);
  const [pressDuration, setPressDuration] = useState<number>(0);
  const [feedback, setFeedback] = useState<{ text: string; color: string; detail?: string } | null>(null);
  const pressTimerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const imgContainerRef = useRef<HTMLDivElement>(null);

  const regions = Object.keys(caseData.physicalExamResults || {});

  const handleMouseDown = (regionName: string) => {
    if (examinedRegions.includes(regionName)) return;
    setPressingRegion(regionName);
    setPressDuration(0);
    startTimeRef.current = Date.now();
    soundManager.playClick();

    pressTimerRef.current = window.setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      setPressDuration(elapsed);
    }, 50);
  };

  const handleBackgroundClick = (_e: React.MouseEvent) => {
    // Inject stress penalty for random clicks
    soundManager.playClick();
    setFeedback({
      text: '⚠️ Região sem achados clínicos.',
      color: '#EF4444',
      detail: 'Palpação aleatória e desnecessária causou estresse ao paciente.'
    });
    // Send a penalty payload to the physiology engine (via onComplete)
    onComplete('Inspeção Incorreta', '', 15, 2, 'Palpação Desnecessária');
    setTimeout(() => setFeedback(null), 3500);
  };

  const handleMouseUp = (regionName: string) => {
    if (!pressingRegion || pressingRegion !== regionName) return;
    if (pressTimerRef.current) clearInterval(pressTimerRef.current);

    const elapsed = (Date.now() - startTimeRef.current) / 1000;
    setPressingRegion(null);

    let stressAdded = 3;
    let timeAdded = 5;
    let quality = 'Inspeção Leve';

    if (elapsed >= 0.3 && elapsed <= 1.2) {
      stressAdded = 6;
      timeAdded = 10;
      quality = 'Palpação Ideal e Precisa';
    } else if (elapsed > 1.2 && elapsed <= 2.5) {
      stressAdded = 14;
      timeAdded = 15;
      quality = 'Manipulação Prolongada';
    } else if (elapsed > 2.5) {
      stressAdded = 25;
      timeAdded = 22;
      quality = 'Manipulação Excessiva (Reação de Dor)';
    }

    const examResult = caseData.physicalExamResults[regionName];
    const evidenceId = examResult?.evidenceId || '';
    const hasEvidence = Boolean(evidenceId);

    if (hasEvidence) {
      soundManager.playDiscovery();
      setFeedback({
        text: `✨ Evidência Encontrada em ${regionName}!`,
        color: '#E8B84A',
        detail: examResult?.text || ''
      });
    } else {
      soundManager.playClick();
      setFeedback({ text: `Sem alterações clínicas em ${regionName}.`, color: '#94A3B8' });
    }

    setExaminedRegions((prev) => [...prev, regionName]);
    onComplete(regionName, evidenceId, stressAdded, timeAdded, quality);

    setTimeout(() => setFeedback(null), 3500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 z-50 bg-[#0B1511]/95 backdrop-blur-xl flex flex-col justify-between p-6 select-none"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-[#C89A3C]/30 pb-4">
        <div>
          <h2 className="text-xl font-bold text-[#E8B84A] flex items-center gap-2">
            <Search className="w-6 h-6 text-[#C89A3C]" />
            Exame Físico Interativo (Palpação & Inspeção)
          </h2>
          <p className="text-xs text-slate-400">
            Mantenha o clique pressionado sobre as regiões anatômicas marcadas <strong className="text-[#C89A3C]">na foto do animal</strong>. Pressionar de 0.3s a 1.2s garante precisão.
          </p>
        </div>

        <button
          onClick={onClose}
          className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#1C382B] border border-[#C89A3C]/40 text-slate-200 hover:border-[#C89A3C] transition-all hover:shadow-lg hover:shadow-[#C89A3C]/20"
        >
          <X className="w-5 h-5 text-[#C89A3C]" />
          <span className="font-semibold text-sm">Concluir Exame</span>
        </button>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative flex-1 my-4 flex items-center justify-center rounded-3xl bg-[#14261E]/60 border border-[#C89A3C]/20 overflow-hidden shadow-2xl">
        {/* Image Container: pins are positioned relative to THIS div */}
        <div ref={imgContainerRef} className="relative inline-block max-h-[550px]">
          {/* Patient Photo */}
          <img
            src={caseData.imageTexture}
            alt={caseData.speciesName}
            onClick={handleBackgroundClick}
            className="max-h-[550px] w-auto object-contain rounded-2xl filter brightness-90 contrast-105 shadow-2xl cursor-crosshair"
            draggable={false}
          />

          {/* Anatomical Touch Zones — positioned ON TOP of the image */}
          {regions.map((region) => {
            const isExamined = examinedRegions.includes(region);
            const isPressing = pressingRegion === region;
            const examInfo = caseData.physicalExamResults[region];
            const pin = examInfo?.pinPos || { x: 50, y: 50 };

            return (
              <React.Fragment key={region}>
                {/* Pulsing ring indicator on the animal body */}
                {!isExamined && (
                  <div
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
                  >
                    <span className="block w-10 h-10 rounded-full border-2 border-[#C89A3C]/70 animate-ping" />
                  </div>
                )}

                {/* Clickable pin button */}
                <motion.button
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(region); }}
                  onMouseUp={(e) => { e.stopPropagation(); handleMouseUp(region); }}
                  onTouchStart={(e) => { e.stopPropagation(); handleMouseDown(region); }}
                  onTouchEnd={(e) => { e.stopPropagation(); handleMouseUp(region); }}
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: isExamined ? 1 : 1.12 }}
                  disabled={isExamined}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 px-3 py-2 rounded-xl font-bold text-[11px] transition-all flex items-center space-x-1.5 border shadow-2xl backdrop-blur-md whitespace-nowrap ${
                    isExamined
                      ? 'bg-emerald-950/80 border-emerald-600/50 text-emerald-300 opacity-80 cursor-default z-20'
                      : isPressing
                      ? 'bg-[#C89A3C] border-white text-slate-950 scale-110 z-30'
                      : 'bg-[#1C382B]/95 border-[#C89A3C] text-slate-100 hover:border-[#E8B84A] hover:bg-[#2D5A3F] z-20 gold-glow cursor-pointer'
                  }`}
                >
                  {isExamined ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Search className="w-3.5 h-3.5 text-[#C89A3C]" />}
                  <span>{region}</span>
                </motion.button>
              </React.Fragment>
            );
          })}
        </div>

        {/* Pressure Gauge Arc when pressing */}
        {pressingRegion && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-40">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#0B1511]/90 border border-[#C89A3C] backdrop-blur-md px-6 py-3 rounded-2xl text-center shadow-2xl flex items-center gap-3"
            >
              <div
                className={`w-4 h-4 rounded-full animate-ping ${
                  pressDuration >= 0.3 && pressDuration <= 1.2
                    ? 'bg-emerald-400'
                    : pressDuration > 1.2 && pressDuration <= 2.5
                    ? 'bg-amber-400'
                    : pressDuration > 2.5
                    ? 'bg-rose-500'
                    : 'bg-slate-400'
                }`}
              />
              <span className="font-mono text-sm font-bold text-slate-100">
                {pressDuration < 0.3
                  ? 'Inspeção Leve...'
                  : pressDuration <= 1.2
                  ? '✨ Palpação Ideal!'
                  : pressDuration <= 2.5
                  ? '⚠️ Prolongado'
                  : '🚨 Excessivo! (Reação de Dor)'}
              </span>
            </motion.div>
          </div>
        )}

        {/* Toast Feedback — with exam result text */}
        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-lg px-6 py-4 rounded-2xl glass-panel border border-[#C89A3C]/40 text-[#F8FAF6] shadow-2xl z-50"
            >
              <div className="flex items-center gap-3 mb-1">
                <CheckCircle2 className="w-5 h-5 text-[#E8B84A] shrink-0" />
                <span className="font-semibold text-sm">{feedback.text}</span>
              </div>
              {feedback.detail && (
                <p className="text-xs text-slate-300 ml-8 leading-relaxed italic">
                  {feedback.detail}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Status */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-4">
        <span>Regiões examinadas: {examinedRegions.length} / {regions.length}</span>
        <span className="text-[#C89A3C]">Clique em "Concluir Exame" quando terminar</span>
      </div>
    </motion.div>
  );
};
