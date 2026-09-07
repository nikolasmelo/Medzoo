import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Syringe, BookOpen, AlertCircle, CheckCircle2, FlaskConical } from 'lucide-react';
import { DRUG_BOTTLES, VADEMECUM_ENTRIES, administerDrug } from '../../data/pharmacology';
import { soundManager } from '../../utils/sound';

interface PharmacologyMinigameProps {
  patientWeightKg: number;
  onComplete: (drugId: string, inputMl: number, toxicity: number, therapeuticEffect: number) => void;
  onVitalsTick?: (toxicity: number, therapeuticEffect: number) => void;
  onCancel: () => void;
}

export const PharmacologyMinigame: React.FC<PharmacologyMinigameProps> = ({
  patientWeightKg,
  onComplete,
  onVitalsTick,
  onCancel
}) => {
  const [selectedDrug, setSelectedDrug] = useState<string | null>(null);
  const [inputVolume, setInputVolume] = useState<number>(0);
  const [isVademecumOpen, setIsVademecumOpen] = useState(false);
  const [feedback, setFeedback] = useState<{ status: string; toxicity: number } | null>(null);

  const handleInject = () => {
    if (!selectedDrug || inputVolume <= 0) return;
    const result = administerDrug(patientWeightKg, selectedDrug, inputVolume);
    setFeedback({ status: result.status, toxicity: result.toxicity });
    
    if (result.status === 'SUCCESS') {
      soundManager.playSuccess();
    } else {
      soundManager.playError();
    }

    // Real-time physiological effect injection
    let elapsed = 0;
    const interval = setInterval(() => {
       elapsed += 100;
       if (onVitalsTick) {
          // Send 1/25th of the effect every 100ms
          onVitalsTick(result.toxicity / 25, result.therapeuticEffect / 25);
       }
       if (elapsed >= 2500) {
          clearInterval(interval);
          onComplete(selectedDrug, inputVolume, result.toxicity, result.therapeuticEffect);
       }
    }, 100);
  };

  return (
    <div className="flex flex-col h-full bg-[#0E1713] rounded-2xl border border-slate-800 overflow-hidden text-slate-200 shadow-2xl">
      {/* HEADER */}
      <div className="bg-[#121F19] p-4 flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center gap-2 text-[#E8B84A]">
          <FlaskConical className="w-6 h-6" />
          <h2 className="text-xl font-bold uppercase tracking-wider">Mesa de Preparo Farmacológico</h2>
        </div>
        <div className="flex gap-4 items-center">
          <div className="px-3 py-1 bg-slate-900 rounded-md border border-slate-700 text-sm font-mono text-cyan-400">
            Peso do Paciente: {patientWeightKg.toFixed(2)} kg
          </div>
          <button 
            onClick={() => setIsVademecumOpen(!isVademecumOpen)}
            className="flex items-center gap-2 px-3 py-1.5 bg-blue-900/40 text-blue-400 hover:bg-blue-900/60 border border-blue-900/50 rounded-lg transition-colors"
          >
            <BookOpen className="w-4 h-4" /> Vademecum
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {/* LEFT COLUMN: Drug Bottles */}
        <div className="w-1/3 border-r border-slate-800 p-4 overflow-y-auto space-y-3 bg-[#0A100D]">
          <h3 className="text-xs uppercase font-bold text-slate-500 mb-4 tracking-widest">Frascos Disponíveis</h3>
          {Object.values(DRUG_BOTTLES).map(bottle => (
            <button
              key={bottle.drugId}
              onClick={() => setSelectedDrug(bottle.drugId)}
              className={`w-full text-left p-3 rounded-xl border transition-all ${
                selectedDrug === bottle.drugId 
                  ? 'bg-slate-800 border-[#E8B84A] shadow-[0_0_15px_rgba(232,184,74,0.15)]' 
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-10 rounded-full ${bottle.bottleColor} shadow-inner`}></div>
                <div>
                  <h4 className={`font-bold ${selectedDrug === bottle.drugId ? 'text-[#E8B84A]' : 'text-slate-300'}`}>
                    {bottle.name}
                  </h4>
                  <p className="text-xs text-slate-500">{bottle.concentrationMgPerMl} mg/mL</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* RIGHT COLUMN: Syringe Prep */}
        <div className="w-2/3 p-8 flex flex-col justify-center items-center relative">
          
          {/* VADEMECUM OVERLAY (DIEGETIC CLIPBOARD) */}
          <AnimatePresence>
            {isVademecumOpen && (
              <div className="absolute inset-0 z-20 flex justify-center items-end" style={{ perspective: '1200px' }}>
                <motion.div 
                  initial={{ y: "100%", rotateX: 30, opacity: 0 }}
                  animate={{ y: 0, rotateX: 0, opacity: 1 }}
                  exit={{ y: "100%", rotateX: 30, opacity: 0 }}
                  transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                  className="w-11/12 h-[95%] bg-[#EFECE6] border-2 border-[#8B7355] shadow-[0px_25px_50px_rgba(0,0,0,0.8)] rounded-t-sm flex flex-col relative"
                  style={{
                    backgroundImage: 'url("/assets/paper-texture.png")', // Assumes a texture, fallback to solid
                    backgroundSize: 'cover'
                  }}
                >
                  {/* Clipboard Clip */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-gradient-to-b from-gray-300 to-gray-500 border border-gray-600 rounded-md shadow-md flex items-center justify-center">
                    <div className="w-12 h-2 bg-gray-600 rounded-full"></div>
                  </div>

                  <div className="pt-8 p-4 border-b-2 border-[#8B7355]/30 flex justify-between items-center bg-[#EFECE6]/80 backdrop-blur-sm">
                    <div>
                      <h3 className="font-black text-2xl text-slate-800 tracking-tighter uppercase font-serif">Vademecum Veterinário</h3>
                      <p className="text-slate-600 text-xs font-mono">Clínica de Silvestres - Consulta Rápida</p>
                    </div>
                    <button onClick={() => setIsVademecumOpen(false)} className="text-rose-700 font-bold hover:text-rose-900 px-4 py-2 border-2 border-rose-700/20 rounded-md">FECHAR</button>
                  </div>
                  
                  <div className="p-6 overflow-y-auto space-y-6">
                    {VADEMECUM_ENTRIES.map(entry => {
                      const bottle = DRUG_BOTTLES[entry.drugId];
                      return (
                        <div key={entry.drugId} className="bg-white p-5 rounded-sm border border-slate-300 shadow-sm relative">
                          <div className="absolute top-0 left-0 w-2 h-full bg-[#8B7355]"></div>
                          <h4 className="font-black text-slate-800 text-xl ml-2">{bottle.name}</h4>
                          <p className="text-xs text-slate-500 ml-2 mb-4 font-mono">{bottle.description}</p>
                          
                          <div className="grid grid-cols-2 gap-4 ml-2 text-sm">
                            <div className="bg-slate-50 p-2 border border-slate-200">
                              <span className="text-slate-500 block text-xs uppercase font-bold">Posologia (Dose)</span>
                              <span className="font-mono text-slate-900 font-bold text-lg">{entry.doseMgPerKg} mg/kg</span>
                            </div>
                            <div className="bg-slate-50 p-2 border border-slate-200">
                              <span className="text-slate-500 block text-xs uppercase font-bold">Via</span>
                              <span className="font-mono text-slate-900 font-bold text-lg">{entry.route}</span>
                            </div>
                            <div className="col-span-2 bg-slate-50 p-2 border border-slate-200">
                              <span className="text-slate-500 block text-xs uppercase font-bold">Concentração do Frasco</span>
                              <span className="font-mono text-slate-900 font-bold text-lg">{bottle.concentrationMgPerMl} mg/mL</span>
                            </div>
                          </div>
                          
                          <div className="mt-4 border-t-2 border-dashed border-slate-200 pt-3 ml-2">
                            <p className="text-xs text-slate-600 font-mono italic">
                              Cálculo: Volume (mL) = [Peso (kg) × Dose (mg/kg)] / Concentração (mg/mL)
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {!selectedDrug ? (
            <div className="text-center text-slate-500 flex flex-col items-center">
              <Syringe className="w-16 h-16 mb-4 opacity-20" />
              <p>Selecione um fármaco para aspirar na seringa.</p>
            </div>
          ) : (
            <motion.div 
              key={selectedDrug}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-md flex flex-col items-center"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-white">{DRUG_BOTTLES[selectedDrug].name}</h3>
                <p className="text-slate-400">{DRUG_BOTTLES[selectedDrug].description}</p>
              </div>

              {feedback ? (
                <div className={`p-6 rounded-2xl w-full text-center border ${
                  feedback.status === 'SUCCESS' ? 'bg-emerald-950/50 border-emerald-500' :
                  feedback.status === 'SUBDOSE' ? 'bg-amber-950/50 border-amber-500' :
                  'bg-rose-950/50 border-rose-500'
                }`}>
                  {feedback.status === 'SUCCESS' && <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />}
                  {feedback.status === 'SUBDOSE' && <AlertCircle className="w-16 h-16 text-amber-500 mx-auto mb-4" />}
                  {feedback.status === 'OVERDOSE' && <AlertCircle className="w-16 h-16 text-rose-500 mx-auto mb-4 animate-pulse" />}
                  
                  <h4 className={`text-xl font-bold uppercase tracking-widest ${
                    feedback.status === 'SUCCESS' ? 'text-emerald-400' :
                    feedback.status === 'SUBDOSE' ? 'text-amber-400' :
                    'text-rose-400'
                  }`}>
                    {feedback.status}
                  </h4>
                  {feedback.toxicity > 0 && (
                    <p className="text-rose-400 mt-2 font-mono">Toxicidade Iatrogênica: {feedback.toxicity.toFixed(2)}</p>
                  )}
                </div>
              ) : (
                <div className="w-full space-y-8">
                  <div className="relative pt-6">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 block text-center">
                      Volume a Aspirar (mL)
                    </label>
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <button onClick={() => setInputVolume(Math.max(0, inputVolume - 0.1))} className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 font-bold">-</button>
                      <input 
                        type="number" 
                        value={inputVolume.toFixed(2)} 
                        onChange={(e) => setInputVolume(Math.max(0, parseFloat(e.target.value) || 0))}
                        step="0.05"
                        className="w-32 bg-slate-900 border-2 border-slate-700 rounded-xl text-center text-3xl font-mono text-[#E8B84A] focus:border-[#E8B84A] outline-none py-2"
                      />
                      <button onClick={() => setInputVolume(inputVolume + 0.1)} className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 font-bold">+</button>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button 
                      onClick={onCancel}
                      className="flex-1 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold uppercase tracking-widest transition-colors"
                    >
                      Cancelar
                    </button>
                    <button 
                      onClick={handleInject}
                      className="flex-1 py-4 bg-[#C89A3C] hover:bg-[#E8B84A] text-black rounded-xl font-black uppercase tracking-widest transition-colors flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(200,154,60,0.3)]"
                    >
                      <Syringe className="w-5 h-5" /> Aplicar
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
