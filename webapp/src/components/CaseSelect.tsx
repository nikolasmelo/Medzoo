import React from 'react';
import { motion } from 'framer-motion';
import { Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import type { CaseData, CareerState } from '../types';
import { CASE_REGISTRY } from '../data/cases';
import { soundManager } from '../utils/sound';

interface CaseSelectProps {
  careerState: CareerState;
  onSelectCase: (caseData: CaseData) => void;
  onBackToMenu: () => void;
}

export const CaseSelect: React.FC<CaseSelectProps> = ({ careerState, onSelectCase, onBackToMenu: _onBackToMenu }) => {

  const rankHierarchy = ['Estagiário', 'Residente', 'Especialista', 'Chefe de Clínica'];
  const userRankIdx = rankHierarchy.indexOf(careerState.rank);

  return (
    <div className="flex-1 flex flex-col p-6 max-w-7xl mx-auto w-full space-y-6">
      {/* Header Banner */}
      <div className="glass-panel p-6 rounded-3xl border border-[#C89A3C]/30 flex items-center justify-between shadow-2xl">
        <div>
          <span className="text-xs uppercase tracking-widest font-bold text-[#E8B84A] block">Triagem de Casos Clínicos</span>
          <h2 className="text-2xl font-black text-slate-100 mt-1">Triagem de Pacientes de Fauna Silvestre</h2>
          <p className="text-xs text-slate-400 mt-1">Selecione um prontuário em aberto para iniciar a jornada de investigação clínica.</p>
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-xs font-semibold text-slate-300">Status do Veterinário:</span>
          <span className="px-3 py-1.5 rounded-xl bg-[#1C382B] border border-[#C89A3C] text-[#E8B84A] font-extrabold text-xs">
            {careerState.rank}
          </span>
        </div>
      </div>

      {/* Case Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CASE_REGISTRY.map((c) => {
          const caseRankIdx = rankHierarchy.indexOf(c.minimumRank);
          const isLocked = caseRankIdx > userRankIdx;
          const isCompleted = careerState.completedCaseIds.includes(c.id);

          return (
            <motion.div
              key={c.id}
              whileHover={{ y: isLocked ? 0 : -6 }}
              className={`glass-panel rounded-3xl overflow-hidden border flex flex-col justify-between transition-all shadow-xl ${
                isLocked
                  ? 'border-slate-800 opacity-60 bg-slate-950/80'
                  : isCompleted
                  ? 'border-emerald-500/50 bg-[#0E1B15]'
                  : 'border-[#C89A3C]/40 bg-[#14261E]/80 hover:border-[#C89A3C] gold-glow'
              }`}
            >
              {/* Card Media Header */}
              <div className="relative h-48 shrink-0 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                <img
                  src={c.imageTexture}
                  alt={c.speciesName}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" fill="%231f2937"><path fill="%239ca3af" d="M190 95c-5 0-9-5-9-10s4-10 9-10 9 5 9 10-4 10-9 10zm20 0c-5 0-9-5-9-10s4-10 9-10 9 5 9 10-4 10-9 10zm-35-15c-4 0-7-4-7-8s3-8 7-8 7 4 7 8-3 8-7 8zm50 0c-4 0-7-4-7-8s3-8 7-8 7 4 7 8-3 8-7 8zm-25 35c-12 0-22-10-22-22s10-22 22-22 22 10 22 22-10 22-22 22z"/><text x="50%" y="65%" fill="%239ca3af" font-size="14" text-anchor="middle" font-family="sans-serif">Sem Imagem Clínica</text></svg>';
                  }}
                  className="w-full h-48 object-cover rounded-t-xl bg-gray-800 filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14261E] via-transparent to-transparent pointer-events-none" />

                {/* Urgency Badge */}
                {c.isUrgent && (
                  <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-rose-950/90 border border-rose-500 text-rose-300 font-extrabold text-[10px] uppercase tracking-wider shadow-lg backdrop-blur-md">
                    URGÊNCIA CLÍNICA
                  </span>
                )}

                {/* Completed Badge */}
                {isCompleted && (
                  <span className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-500 text-emerald-300 font-extrabold text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-lg backdrop-blur-md">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    CONCLUÍDO
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3 relative z-10">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#C89A3C] block">{c.patientCode}</span>
                  <h3 className="text-lg font-extrabold text-slate-100 mt-0.5 leading-snug">{c.speciesName}</h3>
                  <span className="text-xs italic text-slate-400 block">{c.scientificName}</span>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">{c.arrivalReason}</p>
                </div>

                {/* Footer Info & Action */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="text-slate-400 block text-[10px] uppercase">Recompensa</span>
                    <span className="font-mono font-bold text-emerald-400">R$ {c.caseBudget}</span>
                  </div>

                  {isLocked ? (
                    <div className="flex items-center space-x-1.5 text-rose-400 text-[10px] font-bold bg-rose-950/40 px-3 py-1.5 rounded-xl border border-rose-800 uppercase tracking-widest">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Acesso Negado: Nível de Credencial Insuficiente</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        soundManager.playClick();
                        onSelectCase(c);
                      }}
                      className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#1C382B] to-[#2D5A3F] border border-[#C89A3C] text-slate-100 font-bold text-xs gold-glow hover:scale-105 transition-all"
                    >
                      <span>Atender Paciente</span>
                      <ArrowRight className="w-4 h-4 text-[#C89A3C]" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
