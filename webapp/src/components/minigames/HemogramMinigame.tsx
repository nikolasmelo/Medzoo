import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, Microscope, Eye, Sliders, RefreshCw } from 'lucide-react';
import type { CaseData } from '../../types';
import { soundManager } from '../../utils/sound';

const TARGET_COUNT = 8;

interface HemogramMinigameProps {
  caseData: CaseData;
  onComplete: (evidenceId: string) => void;
  onClose: () => void;
}

interface CellSpec {
  id: string;
  x: number; // 0-100% canvas relative
  y: number; // 0-100% canvas relative
  type: 'rbc' | 'leukocyte' | 'platelet' | 'target';
  subtype?: 'heterophil' | 'lymphocyte' | 'eosinophil' | 'monocyte';
  size: number;
  counted?: boolean;
}

export const HemogramMinigame: React.FC<HemogramMinigameProps> = ({
  caseData,
  onComplete,
  onClose,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  // Microscope controls state
  const [focus, setFocus] = useState(30); // 0-100, sharp at 75
  const [light, setLight] = useState(80); // 0-100
  const [stageX, setStageX] = useState(0); // -50 to +50
  const [stageY, setStageY] = useState(0); // -50 to +50
  const [cells, setCells] = useState<CellSpec[]>([]);
  const [countedCount, setCountedCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Check species class for cell morphology (nucleated RBCs for reptiles/birds vs anucleated for mammals)
  const isNucleatedRbc = [
    'Athene cunicularia', 'Chelonoidis carbonarius', 'Ara ararauna',
    'Eunectes notaeus', 'Harpia harpyja', 'Ramphastos toco',
    'Caiman yacare', 'Iguana iguana', 'Salvator merianae', 'Boa constrictor'
  ].includes(caseData.scientificName);

  // Initialize random blood smear cells
  useEffect(() => {
    const generated: CellSpec[] = [];
    
    // Background RBCs
    for (let i = 0; i < 45; i++) {
      generated.push({
        id: `rbc-${i}`,
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 80,
        type: 'rbc',
        size: 14 + Math.random() * 6,
      });
    }

    // Platelets / Thrombocytes
    for (let i = 0; i < 15; i++) {
      generated.push({
        id: `plt-${i}`,
        x: 15 + Math.random() * 70,
        y: 15 + Math.random() * 70,
        type: 'platelet',
        size: 5 + Math.random() * 3,
      });
    }

    // Target Leukocytes to count (8 target cells for balanced difficulty)
    const subtypes: ('heterophil' | 'lymphocyte' | 'eosinophil' | 'monocyte')[] = [
      'heterophil', 'lymphocyte', 'heterophil', 'eosinophil', 'monocyte', 'heterophil', 'lymphocyte', 'eosinophil'
    ];

    for (let i = 0; i < 8; i++) {
      generated.push({
        id: `target-${i}`,
        x: 18 + Math.random() * 64,
        y: 18 + Math.random() * 64,
        type: 'target',
        subtype: subtypes[i],
        size: 24 + Math.random() * 4,
        counted: false,
      });
    }

    setCells(generated);
  }, [caseData.scientificName]);

  // Render microscope viewport
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear background (microscope light field)
    const lightFactor = light / 100;
    ctx.fillStyle = `rgb(${Math.floor(235 * lightFactor)}, ${Math.floor(242 * lightFactor)}, ${Math.floor(238 * lightFactor)})`;
    ctx.fillRect(0, 0, width, height);

    // Apply focus blur emulation (tightened focus curve)
    const focusBlur = Math.abs(focus - 75) * 0.35; // 0 blur at focus=75
    ctx.filter = focusBlur > 1.5 ? `blur(${focusBlur}px)` : 'none';

    // Apply stage position offset
    ctx.save();
    ctx.translate(stageX * 3, stageY * 3);

    // Draw grid graticule
    ctx.strokeStyle = 'rgba(180, 190, 185, 0.25)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw blood cells
    cells.forEach((cell) => {
      const cx = (cell.x / 100) * width;
      const cy = (cell.y / 100) * height;

      if (cell.type === 'rbc') {
        // Red Blood Cells (Erythrocytes)
        ctx.fillStyle = '#E57373';
        ctx.strokeStyle = '#C62828';
        ctx.lineWidth = 1.5;

        if (isNucleatedRbc) {
          // Oval nucleated RBC for birds/reptiles
          ctx.beginPath();
          ctx.ellipse(cx, cy, cell.size, cell.size * 0.65, Math.PI / 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Dark purple oval nucleus
          ctx.fillStyle = '#4A148C';
          ctx.beginPath();
          ctx.ellipse(cx, cy, cell.size * 0.35, cell.size * 0.25, Math.PI / 4, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Biconcave disc for mammals
          ctx.beginPath();
          ctx.arc(cx, cy, cell.size / 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Pale center
          ctx.fillStyle = '#FFCDD2';
          ctx.beginPath();
          ctx.arc(cx, cy, cell.size / 4, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (cell.type === 'platelet') {
        // Platelets / Thrombocytes
        ctx.fillStyle = '#AB47BC';
        ctx.beginPath();
        ctx.arc(cx, cy, cell.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (cell.type === 'target') {
        // Leukocytes (WBCs)
        ctx.fillStyle = '#9C27B0'; // Giemsa stain purple
        ctx.strokeStyle = '#4A148C';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(cx, cy, cell.size / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Lobed Nucleus
        ctx.fillStyle = '#311B92';
        ctx.beginPath();
        ctx.arc(cx - cell.size * 0.15, cy - cell.size * 0.1, cell.size * 0.22, 0, Math.PI * 2);
        ctx.arc(cx + cell.size * 0.15, cy + cell.size * 0.1, cell.size * 0.22, 0, Math.PI * 2);
        ctx.fill();

        // If counted, draw check ring
        if (cell.counted) {
          ctx.strokeStyle = '#00E676';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(cx, cy, cell.size * 0.8, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    });

    ctx.restore();
    ctx.filter = 'none';

    // Scale bar in bottom right
    ctx.fillStyle = '#374151';
    ctx.fillRect(width - 90, height - 25, 60, 4);
    ctx.fillStyle = '#1F2937';
    ctx.font = '10px monospace';
    ctx.fillText('10 µm', width - 80, height - 10);
  }, [cells, focus, light, stageX, stageY, isNucleatedRbc]);

  // Click on cell to count or uncount (toggle)
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isCompleted) return;

    // Must be in sharp micrometric focus to count cells (±6% sweet spot around 75%)
    if (Math.abs(focus - 75) > 6) {
      soundManager.playError();
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * canvas.width - stageX * 3;
    const clickY = ((e.clientY - rect.top) / rect.height) * canvas.height - stageY * 3;

    // Find nearest target cell within click range
    let clickedCellId: string | null = null;
    let isAlreadyCounted = false;

    for (const cell of cells) {
      if (cell.type === 'target') {
        const cx = (cell.x / 100) * canvas.width;
        const cy = (cell.y / 100) * canvas.height;
        const dist = Math.hypot(clickX - cx, clickY - cy);

        if (dist <= cell.size * 1.3) {
          clickedCellId = cell.id;
          isAlreadyCounted = Boolean(cell.counted);
          break;
        }
      }
    }

    if (!clickedCellId) {
      soundManager.playClick();
      return;
    }

    // Toggle OFF an already counted cell
    if (isAlreadyCounted) {
      soundManager.playClick();
      setCells(prev => prev.map(c => c.id === clickedCellId ? { ...c, counted: false } : c));
      setCountedCount(prev => Math.max(0, prev - 1));
      return;
    }

    // Strict CLAMP: Cannot count more than TARGET_COUNT
    if (countedCount >= TARGET_COUNT) {
      soundManager.playError();
      return;
    }

    // Toggle ON an uncounted cell
    soundManager.playSuccess();
    setCells(prev => prev.map(c => c.id === clickedCellId ? { ...c, counted: true } : c));
    const nextCount = countedCount + 1;
    setCountedCount(nextCount);

    if (nextCount === TARGET_COUNT) {
      soundManager.playDiscovery();
      setIsCompleted(true);
    }
  };

  const labEvidenceKey = caseData.evidenceData['ev_hemo'] ? 'ev_hemo' : (caseData.evidenceData['ev_lab'] ? 'ev_lab' : 'ev_lab');
  const evLabData = caseData.evidenceData[labEvidenceKey] || caseData.evidenceData['ev_lab'] || caseData.evidenceData['ev_hemo'];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 z-50 bg-[#0B1511]/95 backdrop-blur-xl flex flex-col p-6 select-none overflow-hidden"
    >
      {/* ── Header Bar ── */}
      <div className="flex items-center justify-between border-b border-[#C89A3C]/30 pb-3 shrink-0">
        <div>
          <h2 className="text-lg font-bold text-[#E8B84A] flex items-center gap-2">
            <Microscope className="w-5 h-5 text-[#C89A3C]" />
            Hematologia Microscópica — Contagem Diferencial
          </h2>
          <p className="text-xs text-slate-400">
            Ajuste o foco micrométrico (tolerância ±6%), examine o esfregaço sanguíneo e identifique {TARGET_COUNT} leucócitos/células-alvo (clique para contar ou desmarcar).
          </p>
        </div>
        <button
          onClick={onClose}
          className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:border-[#C89A3C] transition-all"
        >
          <X className="w-5 h-5 text-[#C89A3C]" />
          <span className="font-semibold text-sm">Fechar</span>
        </button>
      </div>

      {/* ── Main Viewport Grid ── */}
      <div className="flex-1 grid grid-cols-12 gap-6 my-4 min-h-0">
        {/* Left: Microscope Controls */}
        <div className="col-span-4 glass-panel border border-[#C89A3C]/30 rounded-2xl p-5 flex flex-col justify-between space-y-4">
          <div>
            <span className="text-xs font-bold text-[#E8B84A] uppercase tracking-widest block mb-1">
              Controles do Microscópio
            </span>
            <p className="text-[11px] text-slate-400 mb-4 leading-relaxed">
              Regule a nitidez no botão de foco para identificar as estruturas celulares.
            </p>

            {/* Focus Dial */}
            <div className="space-y-2 bg-[#0E1713] p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between items-center text-xs font-bold text-slate-200">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-[#E8B84A]" /> Foco Micrométrico
                </span>
                <span className={`font-mono ${Math.abs(focus - 75) <= 6 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {Math.abs(focus - 75) <= 6 ? 'Nítido' : 'Desfocado'} ({focus}%)
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={focus}
                onChange={(e) => setFocus(Number(e.target.value))}
                className="w-full accent-[#C89A3C] cursor-pointer"
              />
            </div>

            {/* Light Intensity Slider */}
            <div className="space-y-2 bg-[#0E1713] p-4 rounded-xl border border-slate-800 mt-3">
              <div className="flex justify-between items-center text-xs font-bold text-slate-200">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-emerald-400" /> Iluminação da Lâmina
                </span>
                <span className="font-mono text-slate-400">{light}%</span>
              </div>
              <input
                type="range"
                min="30"
                max="100"
                value={light}
                onChange={(e) => setLight(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            {/* Stage Pan Controls */}
            <div className="bg-[#0E1713] p-4 rounded-xl border border-slate-800 mt-3 space-y-2">
              <span className="text-xs font-bold text-slate-300 block mb-2">Deslocamento da Platina (X/Y)</span>
              <div className="grid grid-cols-3 gap-2 w-36 mx-auto text-center">
                <div></div>
                <button
                  onClick={() => setStageY((prev) => Math.max(-40, prev - 10))}
                  className="p-2 rounded bg-slate-800 border border-slate-700 hover:border-[#C89A3C] text-xs font-bold text-slate-200"
                >
                  ▲
                </button>
                <div></div>
                <button
                  onClick={() => setStageX((prev) => Math.max(-40, prev - 10))}
                  className="p-2 rounded bg-slate-800 border border-slate-700 hover:border-[#C89A3C] text-xs font-bold text-slate-200"
                >
                  ◀
                </button>
                <button
                  onClick={() => { setStageX(0); setStageY(0); }}
                  className="p-2 rounded bg-slate-800 border border-slate-700 text-xs font-bold text-[#E8B84A]"
                >
                  <RefreshCw className="w-3.5 h-3.5 mx-auto" />
                </button>
                <button
                  onClick={() => setStageX((prev) => Math.min(40, prev + 10))}
                  className="p-2 rounded bg-slate-800 border border-slate-700 hover:border-[#C89A3C] text-xs font-bold text-slate-200"
                >
                  ▶
                </button>
                <div></div>
                <button
                  onClick={() => setStageY((prev) => Math.min(40, prev + 10))}
                  className="p-2 rounded bg-slate-800 border border-slate-700 hover:border-[#C89A3C] text-xs font-bold text-slate-200"
                >
                  ▼
                </button>
                <div></div>
              </div>
            </div>
          </div>

          {/* Cell Counter Tracker */}
          <div className="bg-[#14261E] border border-emerald-500/30 p-4 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest">
                Contagem Leucocitária
              </span>
              <span className="text-xs font-mono font-bold text-[#E8B84A]">
                {countedCount} / {TARGET_COUNT} Células
              </span>
            </div>
            <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-300"
                style={{ width: `${Math.min(100, (countedCount / TARGET_COUNT) * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Center/Right: Optical Microscope Lens Viewport */}
        <div className="col-span-8 flex flex-col items-center justify-center relative bg-slate-950 rounded-2xl border border-[#C89A3C]/30 p-4 shadow-2xl overflow-hidden">
          {/* Microscope Optical Housing Ring */}
          <div className="relative w-[520px] h-[520px] rounded-full border-[16px] border-slate-900 shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden flex items-center justify-center bg-black">
            <canvas
              ref={canvasRef}
              width={520}
              height={520}
              onClick={handleCanvasClick}
              className="w-full h-full cursor-crosshair"
            />
            {/* Vignette Lens Overlay */}
            <div className="absolute inset-0 pointer-events-none rounded-full shadow-[inset_0_0_60px_rgba(0,0,0,0.85)] border-4 border-slate-800/40" />
          </div>

          {/* Lab Report Overlay when completed */}
          <AnimatePresence>
            {isCompleted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute inset-x-6 bottom-6 bg-[#0E1B15]/95 border-2 border-emerald-500/80 rounded-2xl p-6 shadow-2xl backdrop-blur-xl flex items-center justify-between z-30"
              >
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-bold block">
                    LAUDO HEMATOLÓGICO CONCLUÍDO
                  </span>
                  <h3 className="text-lg font-black text-slate-100">
                    {evLabData?.text || 'Hemograma sem alterações agudas'}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Morfologia: {isNucleatedRbc ? 'Eritrócitos Elípticos Nucleados' : 'Eritrócitos Anucleados Bicôncavos'} | Contagem de Leucócitos Concluída
                  </p>
                </div>

                <button
                  onClick={() => {
                    onComplete(labEvidenceKey);
                    onClose();
                  }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 border border-emerald-400 text-slate-950 font-extrabold text-sm gold-glow hover:scale-105 transition-all flex items-center gap-2 shrink-0"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>CONFIRMAR LAUDO & ADICIONAR EVIDÊNCIA</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
