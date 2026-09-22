import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Play } from 'lucide-react';
import type { CareerState } from '../types';
import { soundManager } from '../utils/sound';
import { getAssetUrl } from '../utils/assetHelper';

interface MainMenuProps {
  careerState: CareerState;
  onStartShift: () => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({ careerState, onStartShift }) => {
  const videoUrl = getAssetUrl('/assets/background/menuBackground.mp4');
  const posterUrl = getAssetUrl('/assets/background/menuBackground.jpg');

  return (
    <div className="relative h-screen w-full flex flex-col justify-between items-center overflow-hidden bg-stone-950 p-6 md:p-10 select-none">
      {/* Fundo Cinemático em Loop (Veterinária, Coruja, Tucano e Capivara) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${posterUrl}")` }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={posterUrl}
          className="w-full h-full object-cover object-center"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        {/* Overlays Leves para Preservar Iluminação e Visibilidade da Arte */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-transparent to-stone-950/85 backdrop-blur-[0.3px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-stone-950/15 to-stone-950/70" />
      </div>

      {/* Floating Animated Particles */}
      <div className="absolute inset-0 pointer-events-none z-1">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              left: `${(i * 8.5) % 100}%`,
              top: `${(i * 12) % 100}%`
            }}
            className="absolute w-2 h-2 rounded-full bg-[#C89A3C]/30 blur-sm"
          />
        ))}
      </div>

      {/* TOPO: Título Flutuante Atmosférico (Sem Caixa Preta) */}
      <motion.div 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center pt-2 md:pt-4 space-y-2 flex flex-col items-center"
      >
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#1C382B]/80 via-[#2D5A3F]/80 to-[#1C382B]/80 border border-[#C89A3C]/60 flex items-center justify-center shadow-lg shadow-black/80 backdrop-blur-sm gold-glow mb-1">
          <Stethoscope className="w-7 h-7 text-[#E8B84A] drop-shadow-[0_2px_8px_rgba(200,154,60,0.8)]" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-wider text-amber-400 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          MEDZOO
        </h1>
        
        <p className="text-xs md:text-sm font-bold tracking-widest text-emerald-300 uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          SIMULAÇÃO DE MEDICINA VETERINÁRIA DE FAUNA SILVESTRE
        </p>
      </motion.div>

      {/* CENTRO: Área Desimpedida de Respiro (Exibe a Arte da Veterinária e Fauna) */}
      <div className="flex-1 w-full pointer-events-none" />

      {/* BASE: Dock Inferior de Operações & Ação Principal */}
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 pb-2 md:pb-4 w-full max-w-3xl"
      >
        <div className="backdrop-blur-md bg-stone-950/75 border border-emerald-500/30 rounded-2xl p-5 md:p-6 shadow-2xl shadow-black/90 space-y-5 gold-glow">
          {/* Métricas Rápidas */}
          <div className="grid grid-cols-3 gap-3 bg-stone-950/80 p-3.5 rounded-xl border border-emerald-500/20 text-center text-xs">
            <div className="border-r border-stone-800/80 pr-2">
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider block">Patrimônio</span>
              <span className="font-mono font-bold text-emerald-400 text-sm md:text-base">R$ {careerState.money}</span>
            </div>
            <div className="border-r border-stone-800/80 pr-2">
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider block">Confiabilidade</span>
              <span className="font-mono font-bold text-blue-300 text-sm md:text-base">{careerState.reliability}%</span>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider block">Nível Atual</span>
              <span className="font-bold text-[#E8B84A] text-sm md:text-base">{careerState.rank}</span>
            </div>
          </div>

          {/* Botão Principal de Ação */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              soundManager.playClick();
              onStartShift();
            }}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#1C382B] via-[#2D5A3F] to-[#1C382B] border border-[#C89A3C] text-slate-100 font-extrabold text-lg flex items-center justify-center space-x-3 gold-glow shadow-2xl hover:shadow-[#C89A3C]/40 transition-all cursor-pointer"
          >
            <Play className="w-6 h-6 text-[#E8B84A] fill-[#E8B84A]" />
            <span>INICIAR PLANTÃO CLÍNICO</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
