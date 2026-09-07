import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Zap, X, Move } from 'lucide-react';
import type { CaseData, ComplementaryExam } from '../../types';
import { soundManager } from '../../utils/sound';

interface XRayMinigameProps {
  caseData: CaseData;
  examInfo: ComplementaryExam;
  onComplete: (evidenceId: string, hotspotFound: boolean, exposureQuality: string) => void;
  onClose: () => void;
}

export const XRayMinigame: React.FC<XRayMinigameProps> = ({ caseData, examInfo, onComplete, onClose }) => {
  const [stage, setStage] = useState<'positioning' | 'exposure' | 'inspection'>('positioning');
  const [exposure, setExposure] = useState<number>(50);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  
  const [lensPos, setLensPos] = useState({ x: -200, y: -200 });
  const [isFound, setIsFound] = useState(false);

  // Initialize base image for X-ray
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = examInfo.image || caseData.imageTexture;
    img.onload = () => {
      imageRef.current = img;
    };
  }, [examInfo.image, caseData.imageTexture]);

  const handlePositionClick = () => {
    soundManager.playSuccess();
    setTimeout(() => {
      setStage('exposure');
      soundManager.playXrayCharge();
    }, 600);
  };

  const handleFireXray = () => {
    soundManager.playSuccess();
    setStage('inspection');
  };

  // Render Loop (60fps Canvas 2D)
  useEffect(() => {
    if (stage !== 'inspection') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;

      // 1. Draw original image to get source pixels
      if (imageRef.current) {
        ctx.drawImage(imageRef.current, 0, 0, width, height);
      } else {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, width, height);
      }

      const srcImgData = ctx.getImageData(0, 0, width, height);
      const src = srcImgData.data;
      
      const destImgData = ctx.createImageData(width, height);
      const dest = destImgData.data;

      // Map hotspot from (800x500 normalized coords) to actual canvas dimensions
      const hotspotX = (examInfo.hotspot?.x || 500) / 800 * width;
      const hotspotY = (examInfo.hotspot?.y || 350) / 500 * height;
      const hotspotRadius = (examInfo.hotspot?.radius || 50) * (width / 800);

      const lx = lensPos.x;
      const ly = lensPos.y;
      const lensRadius = 100;
      
      const exposureFactor = exposure / 50.0; // 1.0 is normal

      // Pass 1: Pixel manipulation
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = (y * width + x) * 4;
          
          let sx = x;
          let sy = y;
          
          const dx = x - lx;
          const dy = y - ly;
          const distToLens = Math.hypot(dx, dy);

          // Polynomial Radial Lens Distortion inside the lens
          if (distToLens < lensRadius) {
            const r_norm = distToLens / lensRadius;
            // Chromatic aberration / radial distortion polynomial: r_dist = r * (1 + k * r^2)
            const k = -0.3; // Barrel distortion
            const r_dist = r_norm * (1 + k * r_norm * r_norm);
            
            sx = lx + (dx / r_norm) * r_dist;
            sy = ly + (dy / r_norm) * r_dist;
          }

          // Clamp source coordinates
          sx = Math.max(0, Math.min(width - 1, Math.floor(sx)));
          sy = Math.max(0, Math.min(height - 1, Math.floor(sy)));
          
          const sIdx = (sy * width + sx) * 4;

          // Fetch base colors
          let r = src[sIdx];
          let g = src[sIdx+1];
          let b = src[sIdx+2];

          // Radiographic Contrast Inversion (Negative)
          r = 255 - r;
          g = 255 - g;
          b = 255 - b;

          // Convert to grayscale-ish blue tint (Bone/XRay style)
          const gray = r * 0.3 + g * 0.59 + b * 0.11;
          r = gray * 0.8 * exposureFactor;
          g = gray * 0.95 * exposureFactor;
          b = gray * 1.05 * exposureFactor;

          // Silver Grain Static Noise
          const noise = (Math.random() - 0.5) * 40;
          r += noise;
          g += noise;
          b += noise;

          // Inside Lens Effects
          if (distToLens < lensRadius) {
            // Chromatic aberration simulation (color shifting)
            const caShift = (distToLens / lensRadius) * 20;
            r += caShift;
            b -= caShift;

            // Euclidean Proximity: Detect Lesion Hotspot
            const distToHotspot = Math.hypot(x - hotspotX, y - hotspotY);
            if (distToHotspot < hotspotRadius * 1.5) {
                // Thermal anomaly glow indicating pathology
                const thermal = Math.max(0, 1 - distToHotspot / (hotspotRadius * 1.5));
                r += thermal * 120; // Red/Orange glow
                g += thermal * 60;
                b -= thermal * 50;
            }
          } else {
            // Darken outside lens to focus user attention
            r *= 0.6;
            g *= 0.6;
            b *= 0.6;
          }

          // Clamp output
          dest[idx] = Math.min(255, Math.max(0, r));
          dest[idx+1] = Math.min(255, Math.max(0, g));
          dest[idx+2] = Math.min(255, Math.max(0, b));
          dest[idx+3] = 255;
        }
      }

      ctx.putImageData(destImgData, 0, 0);

      // Draw Lens Reticle
      ctx.strokeStyle = 'rgba(200, 154, 60, 0.6)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(lx, ly, lensRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Crosshair
      ctx.beginPath();
      ctx.moveTo(lx - 10, ly);
      ctx.lineTo(lx + 10, ly);
      ctx.moveTo(lx, ly - 10);
      ctx.lineTo(lx, ly + 10);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [stage, lensPos, exposure, examInfo, isFound]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (stage !== 'inspection' || isFound) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const scaleX = canvasRef.current!.width / rect.width;
    const scaleY = canvasRef.current!.height / rect.height;
    
    setLensPos({
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    });
  }, [stage, isFound]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (stage !== 'inspection' || isFound) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const scaleX = canvasRef.current!.width / rect.width;
    const scaleY = canvasRef.current!.height / rect.height;
    
    const clickX = (e.clientX - rect.left) * scaleX;
    const clickY = (e.clientY - rect.top) * scaleY;

    const width = canvasRef.current!.width;
    const height = canvasRef.current!.height;
    const hotspotX = (examInfo.hotspot?.x || 500) / 800 * width;
    const hotspotY = (examInfo.hotspot?.y || 350) / 500 * height;

    const dist = Math.hypot(clickX - hotspotX, clickY - hotspotY);

    if (dist < (examInfo.hotspot?.radius || 50) * (width / 800) * 1.5) {
      soundManager.playDiscovery();
      setIsFound(true);
      setTimeout(() => {
        const quality = exposure >= 40 && exposure <= 70 ? 'PERFECT' : 'ACCEPTABLE';
        onComplete(examInfo.evidenceId, true, quality);
      }, 2000);
    } else {
      soundManager.playClick();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-40 bg-[#050A19] flex flex-col p-4 rounded-3xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#C89A3C]/30 pb-3">
        <div>
          <h2 className="text-xl font-bold text-[#E8B84A] flex items-center gap-2">
            <Zap className="w-6 h-6 text-[#C89A3C]" />
            Radiografia Digital Procedural (Raio-X)
          </h2>
        </div>
        <button
          onClick={onClose}
          className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:border-[#C89A3C] transition-all"
        >
          <X className="w-5 h-5 text-[#C89A3C]" />
          <span className="font-semibold text-sm">Desligar</span>
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center relative overflow-hidden mt-4">
        {stage === 'positioning' && (
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="relative w-[520px] h-[340px] rounded-2xl border-4 border-dashed border-emerald-500/60 bg-emerald-500/10 flex items-center justify-center overflow-hidden p-4">
              <img
                src={caseData.imageTexture}
                alt={caseData.speciesName}
                className="max-h-full max-w-full object-contain filter opacity-80 contrast-125 grayscale"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePositionClick}
              className="px-6 py-3 rounded-2xl bg-[#1C382B] border border-[#C89A3C] text-slate-100 font-bold text-sm flex items-center gap-2 gold-glow"
            >
              <Move className="w-5 h-5 text-[#E8B84A]" />
              <span>Centralizar Feixe</span>
            </motion.button>
          </div>
        )}

        {stage === 'exposure' && (
          <div className="flex flex-col items-center justify-center space-y-8 w-full max-w-md">
            <div className="w-full bg-slate-900 border border-slate-700 p-6 rounded-3xl text-center space-y-4">
              <label className="text-sm font-semibold text-slate-200 block">Exposição (mAs/kVp): {exposure}%</label>
              <input
                type="range"
                min="0"
                max="100"
                value={exposure}
                onChange={(e) => {
                  setExposure(Number(e.target.value));
                  soundManager.playTone(200 + Number(e.target.value) * 5, 0.05, 0.05);
                }}
                className="w-full accent-[#C89A3C] h-3 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>
            <button
              onClick={handleFireXray}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-amber-600 border border-amber-300 text-white font-extrabold text-lg flex items-center gap-3 shadow-2xl gold-glow hover:scale-105 transition-all"
            >
              <Zap className="w-6 h-6" />
              <span>DISPARAR RAIO-X</span>
            </button>
          </div>
        )}

        {stage === 'inspection' && (
          <div className="relative w-full flex items-center justify-center">
            <canvas
              ref={canvasRef}
              width={800}
              height={500}
              onMouseMove={handleMouseMove}
              onClick={handleCanvasClick}
              className="rounded-2xl border border-[#C89A3C]/40 cursor-crosshair shadow-2xl bg-black"
              style={{ width: '100%', maxWidth: '800px', height: 'auto', aspectRatio: '800/500' }}
            />
            {isFound && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute inset-0 bg-emerald-950/70 backdrop-blur-sm flex flex-col items-center justify-center space-y-4 z-30 rounded-2xl"
              >
                <div className="text-6xl">🎯</div>
                <h3 className="text-2xl font-bold text-[#E8B84A]">ACHADO CLÍNICO CONFIRMADO</h3>
                <p className="text-slate-200">{caseData.evidenceData?.[examInfo.evidenceId]?.text}</p>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};
