import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, X, FileSearch, Link2, Search } from 'lucide-react';
import type { HypothesisData, EvidenceData } from '../../types';
import { soundManager } from '../../utils/sound';

interface DiagnosticBoardProps {
  hypotheses: HypothesisData[];
  evidenceData: Record<string, EvidenceData>;
  discoveredEvidences: string[];
  onDiagnose: (hypothesisId: string) => void;
  onClose: () => void;
}

export const DiagnosticBoardMinigame: React.FC<DiagnosticBoardProps> = ({
  hypotheses,
  evidenceData,
  discoveredEvidences,
  onDiagnose,
  onClose,
}) => {
  // mapped as hypothesisId -> array of evidenceIds
  const [links, setLinks] = useState<Record<string, string[]>>({});
  const [selectedEvidence, setSelectedEvidence] = useState<string | null>(null);

  const handleEvidenceClick = (evId: string) => {
    soundManager.playClick();
    setSelectedEvidence(selectedEvidence === evId ? null : evId);
  };

  const handleHypothesisClick = (hypId: string) => {
    if (!selectedEvidence) return;
    
    soundManager.playSuccess();
    setLinks(prev => {
      const currentLinks = prev[hypId] || [];
      if (currentLinks.includes(selectedEvidence)) {
        // unlink
        return { ...prev, [hypId]: currentLinks.filter(id => id !== selectedEvidence) };
      } else {
        // link
        return { ...prev, [hypId]: [...currentLinks, selectedEvidence] };
      }
    });
    setSelectedEvidence(null);
  };
  const handleConfirmDiagnosis = (hypId: string) => {
    soundManager.playSuccess();
    onDiagnose(hypId);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#0B1511]/95 backdrop-blur-xl flex flex-col p-8 select-none"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-black text-[#E8B84A] uppercase tracking-widest flex items-center gap-3">
            <Brain className="w-8 h-8" />
            Quadro de Diagnóstico Diferencial
          </h2>
          <p className="text-slate-400 mt-2">
            Vincule as evidências clínicas aos possíveis diagnósticos. Selecione uma evidência e clique na hipótese para conectá-las.
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:border-slate-500 transition-all"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex flex-1 gap-8 min-h-0">
        {/* Evidences Column */}
        <div className="w-1/3 flex flex-col bg-[#0E1713]/80 border border-slate-700 rounded-2xl p-4 overflow-hidden">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <FileSearch className="w-4 h-4" /> Achados Clínicos
          </h3>
          <div className="flex-1 overflow-y-auto space-y-3 pr-2">
            {discoveredEvidences.length === 0 ? (
              <div className="text-center text-slate-500 py-10 italic">Nenhuma evidência descoberta ainda. Realize exames.</div>
            ) : (
              discoveredEvidences.map(evId => {
                const isSelected = selectedEvidence === evId;
                const data = evidenceData[evId];
                if (!data) return null;
                
                // check if linked to anything to show a small badge
                const linkedTo = Object.keys(links).filter(hypId => links[hypId].includes(evId));

                return (
                  <motion.button
                    key={evId}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleEvidenceClick(evId)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      isSelected 
                        ? 'bg-[#1C382B] border-[#E8B84A] shadow-[0_0_15px_rgba(232,184,74,0.2)]' 
                        : 'bg-slate-900 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        data.category === 'physical' ? 'bg-blue-900/50 text-blue-400' :
                        data.category === 'complementary' ? 'bg-purple-900/50 text-purple-400' :
                        'bg-amber-900/50 text-amber-400'
                      }`}>
                        {data.category}
                      </span>
                      {linkedTo.length > 0 && (
                        <div className="flex items-center gap-1 text-[10px] text-slate-500 font-bold">
                          <Link2 className="w-3 h-3" /> {linkedTo.length}
                        </div>
                      )}
                    </div>
                    <p className={`text-sm ${isSelected ? 'text-[#E8B84A]' : 'text-slate-300'}`}>
                      {data.text}
                    </p>
                  </motion.button>
                );
              })
            )}
          </div>
        </div>

        {/* Hypotheses Column */}
        <div className="w-2/3 flex flex-col bg-[#0A100D]/80 border border-slate-700 rounded-2xl p-6 overflow-hidden">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
            <Search className="w-4 h-4" /> Hipóteses Diagnósticas
          </h3>
          
          <div className="flex-1 overflow-y-auto space-y-6 pr-4">
            {hypotheses.map(hyp => {
              const hypLinks = links[hyp.id] || [];
              return (
                <div 
                  key={hyp.id} 
                  className={`relative p-6 rounded-2xl border-2 transition-all ${
                    selectedEvidence 
                      ? 'border-dashed border-[#E8B84A]/50 bg-[#1C382B]/20 hover:bg-[#1C382B]/40 cursor-pointer' 
                      : 'border-slate-700 bg-slate-900/50'
                  }`}
                  onClick={() => selectedEvidence && handleHypothesisClick(hyp.id)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className={`text-xl font-black text-slate-200`}>{hyp.title}</h4>
                      <p className="text-sm text-slate-400 mt-1">{hyp.description}</p>
                    </div>
                    {hypLinks.length > 0 && (
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleConfirmDiagnosis(hyp.id); }}
                        className="px-6 py-3 rounded-xl bg-slate-700 hover:bg-slate-500 text-slate-300 font-bold uppercase tracking-widest shadow-lg flex items-center gap-2 transition-colors border border-slate-600"
                      >
                        CONFIRMAR DIAGNÓSTICO
                      </button>
                    )}
                  </div>

                  {/* Connected Evidences */}
                  <div className="mt-4 pt-4 border-t border-slate-800/50">
                    <span className="text-[10px] uppercase font-bold text-slate-500 mb-2 block">Evidências Vinculadas</span>
                    {hypLinks.length === 0 ? (
                      <span className="text-xs text-slate-600 italic">Nenhuma evidência vinculada. Selecione e vincule ao menos uma evidência para habilitar a confirmação.</span>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {hypLinks.map(evId => {
                          const data = evidenceData[evId];
                          return (
                            <div key={evId} className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 border border-slate-600 rounded-lg text-xs text-slate-300">
                              <Link2 className="w-3 h-3 text-[#E8B84A]" />
                              {data?.text || evId}
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLinks(prev => ({ ...prev, [hyp.id]: prev[hyp.id].filter(id => id !== evId) }));
                                  soundManager.playClick();
                                }}
                                className="ml-2 text-slate-500 hover:text-rose-400"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* If selecting evidence, show an overlay to drop it */}
                  {selectedEvidence && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#1C382B]/60 rounded-2xl backdrop-blur-sm pointer-events-none">
                      <span className="text-[#E8B84A] font-black uppercase tracking-widest text-xl bg-[#0E1713] px-6 py-2 rounded-xl border border-[#E8B84A]">
                        {hypLinks.includes(selectedEvidence) ? 'Desvincular Evidência' : 'Vincular Evidência'}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

