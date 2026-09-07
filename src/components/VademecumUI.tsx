import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, X, Info, Activity, AlertTriangle } from 'lucide-react';

interface VademecumUIProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VademecumUI: React.FC<VademecumUIProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm"
          />
          
          {/* Offcanvas Panel */}
          <motion.div
            initial={{ x: '100%', opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0.5 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[450px] bg-[#0E1713] border-l border-emerald-900/50 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] z-[80] flex flex-col overflow-hidden text-slate-300 font-sans"
          >
            {/* Header */}
            <div className="p-6 bg-[#050A08] border-b border-emerald-900/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-900/30 flex items-center justify-center border border-emerald-500/30">
                  <BookOpen className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-sm font-black text-emerald-500 uppercase tracking-widest">Vademecum</h2>
                  <p className="text-[10px] text-slate-500 font-mono tracking-widest">DIRETRIZES DE FISIOLOGIA VETERINÁRIA</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-rose-950/50 text-slate-400 hover:text-rose-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
              
              <div className="bg-emerald-950/20 p-4 rounded-xl border border-emerald-900/30">
                <p className="text-xs text-emerald-300/80 leading-relaxed italic">
                  Este manual contém as diretrizes críticas para sobrevivência dos pacientes na mesa de cirurgia. Conhecer a classe taxonômica do animal é vital para calibrar as intervenções.
                </p>
              </div>

              {/* Aves */}
              <section className="space-y-3">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-sm font-black text-cyan-400 uppercase tracking-widest">Classe: Aves</h3>
                </div>
                <div className="text-xs space-y-2 text-slate-400">
                  <p><strong className="text-slate-200">Metabolismo:</strong> Endotérmico e acelerado.</p>
                  <p><strong className="text-slate-200">Cardiovascular:</strong> Frequência cardíaca basal extremamente alta (geralmente <span className="text-cyan-300">200 a 300 bpm</span>). A frequência respiratória acompanha esse ritmo (40 a 60 rpm).</p>
                  <p className="flex items-start gap-2 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                    <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Risco severo de estresse agudo por contenção. Toleram bem a indução anestésica proporcional, mas a hipotermia durante a cirurgia é um risco rápido devido à perda de penas e superfície corporal.</span>
                  </p>
                </div>
              </section>

              {/* Répteis */}
              <section className="space-y-3">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                  <Activity className="w-4 h-4 text-emerald-500" />
                  <h3 className="text-sm font-black text-emerald-500 uppercase tracking-widest">Classe: Répteis (Ectotérmicos)</h3>
                </div>
                <div className="text-xs space-y-2 text-slate-400">
                  <p><strong className="text-slate-200">Metabolismo:</strong> Lento, estritamente dependente da temperatura ambiente (Ectotermia).</p>
                  <p><strong className="text-slate-200">Cardiovascular:</strong> Frequência cardíaca e respiratória muito baixas (ex: <span className="text-emerald-400">20 a 35 bpm</span> e 4 a 6 rpm).</p>
                  <p className="flex items-start gap-2 bg-rose-950/20 p-3 rounded-lg border border-rose-900/30 text-rose-200/80">
                    <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span><strong>PERIGO ANESTÉSICO:</strong> Devido à fisiologia letárgica, drogas anestésicas causam depressão bulbar profunda. Deprimir a respiração de um réptil significa asfixia sistêmica (Hipóxia Irreversível) quase imediata se não houver ventilação mecânica adequada.</span>
                  </p>
                </div>
              </section>

              {/* Mamíferos e Miopatia */}
              <section className="space-y-3">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                  <Activity className="w-4 h-4 text-amber-500" />
                  <h3 className="text-sm font-black text-amber-500 uppercase tracking-widest">Mamíferos e Miopatia de Captura</h3>
                </div>
                <div className="text-xs space-y-2 text-slate-400">
                  <p><strong className="text-slate-200">Metabolismo:</strong> Endotérmicos padronizados, frequências balanceadas (70-120 bpm).</p>
                  <p className="flex items-start gap-2 bg-amber-950/20 p-3 rounded-lg border border-amber-900/30 text-amber-200/80">
                    <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong>Miopatia de Captura:</strong> Animais silvestres de porte médio e grande (Lobo-guará, Onça-pintada) são suscetíveis a esta síndrome de hipertermia, acidose láctica e morte celular muscular devido ao pânico extremo. O <span className="font-bold text-amber-400">Índice de Estresse</span> da FSM monitora este colapso. Se a barra estourar, o animal entra em choque hiperagudo. Mantenha a dor nula com medicação!</span>
                  </p>
                </div>
              </section>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
