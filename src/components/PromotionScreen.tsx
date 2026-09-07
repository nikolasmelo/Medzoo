import React from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronRight, Sparkles, Star } from 'lucide-react';
import { soundManager } from '../utils/sound';

interface PromotionScreenProps {
  oldRank: string;
  newRank: string;
  onDismiss: () => void;
}

const RANK_INFO: Record<string, { emoji: string; title: string; description: string; color: string; borderColor: string }> = {
  'Estagiário': {
    emoji: '🩺',
    title: 'Estagiário',
    description: 'Iniciante na clínica veterinária de fauna silvestre.',
    color: 'from-slate-600 to-slate-800',
    borderColor: 'border-slate-500',
  },
  'Residente': {
    emoji: '🔬',
    title: 'Residente',
    description: 'Veterinário residente com autonomia para casos de média complexidade.',
    color: 'from-blue-600 to-indigo-800',
    borderColor: 'border-blue-400',
  },
  'Especialista': {
    emoji: '🏅',
    title: 'Especialista',
    description: 'Especialista em fauna silvestre com acesso a procedimentos avançados.',
    color: 'from-amber-600 to-orange-800',
    borderColor: 'border-amber-400',
  },
  'Chefe de Clínica': {
    emoji: '👨‍⚕️',
    title: 'Chefe de Clínica',
    description: 'Líder da equipe veterinária com acesso total a todos os casos e procedimentos.',
    color: 'from-emerald-500 to-teal-800',
    borderColor: 'border-emerald-400',
  },
};

export const PromotionScreen: React.FC<PromotionScreenProps> = ({ oldRank, newRank, onDismiss }) => {
  const newInfo = RANK_INFO[newRank] || RANK_INFO['Residente'];

  React.useEffect(() => {
    soundManager.playSuccess();
    // Play a special fanfare sound
    setTimeout(() => {
      soundManager.playTone(523, 0.3, 0.15); // C5
    }, 200);
    setTimeout(() => {
      soundManager.playTone(659, 0.3, 0.15); // E5
    }, 400);
    setTimeout(() => {
      soundManager.playTone(784, 0.5, 0.2); // G5
    }, 600);
    setTimeout(() => {
      soundManager.playTone(1047, 0.8, 0.3); // C6
    }, 900);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-xl flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onDismiss();
      }}
    >
      <motion.div
        initial={{ scale: 0.3, opacity: 0, rotateY: 180 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ type: 'spring', bounce: 0.4, duration: 0.8 }}
        className="relative max-w-lg w-full mx-4"
      >
        {/* Background glow */}
        <div className={`absolute -inset-4 bg-gradient-to-br ${newInfo.color} rounded-[2rem] blur-2xl opacity-40 animate-pulse`} />

        <div className={`relative bg-gradient-to-br from-[#0E1B15] to-[#14261E] rounded-3xl border-2 ${newInfo.borderColor} p-8 text-center space-y-6 shadow-2xl`}>
          {/* Sparkle decorations */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-6 -right-6"
          >
            <Sparkles className="w-12 h-12 text-[#E8B84A] opacity-70" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-4 -left-4"
          >
            <Sparkles className="w-10 h-10 text-[#C89A3C] opacity-50" />
          </motion.div>

          {/* Header */}
          <div className="space-y-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', bounce: 0.6 }}
            >
              <Award className="w-20 h-20 text-[#E8B84A] mx-auto drop-shadow-[0_0_30px_rgba(232,184,74,0.5)]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84A] via-[#F5D76E] to-[#C89A3C] tracking-tight"
            >
              PROMOÇÃO!
            </motion.h2>
          </div>

          {/* Rank transition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-600 text-slate-400 font-semibold text-sm">
              {RANK_INFO[oldRank]?.emoji} {oldRank}
            </div>

            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ChevronRight className="w-6 h-6 text-[#E8B84A]" />
            </motion.div>

            <div className={`px-5 py-2.5 rounded-xl bg-gradient-to-r ${newInfo.color} border ${newInfo.borderColor} text-white font-extrabold text-sm shadow-lg`}>
              {newInfo.emoji} {newRank}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-slate-300 text-sm leading-relaxed max-w-sm mx-auto"
          >
            {newInfo.description}
          </motion.p>

          {/* Stars decorative */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center gap-2"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.2 + i * 0.1, type: 'spring', bounce: 0.6 }}
              >
                <Star className="w-5 h-5 text-[#E8B84A] fill-[#E8B84A]" />
              </motion.div>
            ))}
          </motion.div>

          {/* New permissions info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="bg-slate-900/60 rounded-xl border border-slate-700 p-4 text-left space-y-2"
          >
            <span className="text-xs font-bold text-[#E8B84A] uppercase tracking-wider">Novos Privilégios Desbloqueados:</span>
            <ul className="text-xs text-slate-300 space-y-1">
              {newRank === 'Residente' && (
                <>
                  <li>✅ Acesso a casos de complexidade média</li>
                  <li>✅ Novos pacientes: Tamanduá, Jacaré, Arara, Sucuri</li>
                  <li>✅ Exames complementares avançados</li>
                </>
              )}
              {newRank === 'Especialista' && (
                <>
                  <li>✅ Acesso a casos de alta complexidade</li>
                  <li>✅ Novos pacientes: Lobo-guará, Golfinho, Jaguatirica</li>
                  <li>✅ Procedimentos cirúrgicos especializados</li>
                </>
              )}
              {newRank === 'Chefe de Clínica' && (
                <>
                  <li>✅ Acesso total a todos os casos</li>
                  <li>✅ Novo paciente: Harpia / Gavião-real</li>
                  <li>✅ Certificação completa em fauna silvestre</li>
                </>
              )}
            </ul>
          </motion.div>

          {/* Continue button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            onClick={onDismiss}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-2xl bg-gradient-to-r from-[#1C382B] to-[#2D5A3F] border border-[#C89A3C] text-slate-100 font-extrabold text-sm gold-glow hover:shadow-xl transition-all"
          >
            Continuar Atendendo →
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};
