import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Play } from 'lucide-react';
import type { CareerState } from '../types';
import { soundManager } from '../utils/sound';

interface MainMenuProps {
  careerState: CareerState;
  onStartShift: () => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({ careerState, onStartShift }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#14261E] via-[#0E1713] to-[#0B1511] opacity-90" />

      {/* Floating Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
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

      {/* Hero Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 0.5 }}
        className="relative z-10 glass-panel p-10 md:p-14 rounded-3xl border border-[#C89A3C]/40 max-w-2xl w-full text-center space-y-8 shadow-2xl gold-glow"
      >
        {/* Emblem Badge */}
        <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-[#1C382B] via-[#2D5A3F] to-[#1C382B] border-2 border-[#C89A3C] flex items-center justify-center shadow-2xl shadow-[#1C382B]/60 gold-glow">
          <Stethoscope className="w-12 h-12 text-[#E8B84A]" />
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-[#E8B84A] to-[#C89A3C]">
            MEDZOO
          </h1>
          <p className="text-xs uppercase font-extrabold tracking-widest text-[#C89A3C]">
            Simulação de Medicina Veterinária de Fauna Silvestre
          </p>
          <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed pt-2">
            Inspirado no rigor de diagnósticos clínicos e gestão de prontuários. Atenda espécies nativas do Cerrado, Pantanal e Mata Atlântica.
          </p>
        </div>

        {/* Career Stats Bar */}
        <div className="grid grid-cols-3 gap-4 bg-[#0E1713]/80 p-4 rounded-2xl border border-slate-800 text-xs">
          <div>
            <span className="text-slate-400 text-[10px] uppercase block">Patrimônio</span>
            <span className="font-mono font-bold text-emerald-400">R$ {careerState.money}</span>
          </div>
          <div>
            <span className="text-slate-400 text-[10px] uppercase block">Confiabilidade</span>
            <span className="font-mono font-bold text-blue-300">{careerState.reliability}%</span>
          </div>
          <div>
            <span className="text-slate-400 text-[10px] uppercase block">Nível Atual</span>
            <span className="font-bold text-[#E8B84A]">{careerState.rank}</span>
          </div>
        </div>

        {/* Primary Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            soundManager.playClick();
            onStartShift();
          }}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#1C382B] via-[#2D5A3F] to-[#1C382B] border border-[#C89A3C] text-slate-100 font-extrabold text-lg flex items-center justify-center space-x-3 gold-glow shadow-2xl hover:shadow-[#C89A3C]/40 transition-all"
        >
          <Play className="w-6 h-6 text-[#E8B84A] fill-[#E8B84A]" />
          <span>INICIAR PLANTÃO CLÍNICO</span>
        </motion.button>
      </motion.div>
    </div>
  );
};
