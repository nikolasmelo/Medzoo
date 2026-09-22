// src/learning/labs/PharmacologyLabAdapter.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Syringe, CheckCircle2, AlertTriangle, RefreshCw, Calculator, HelpCircle } from 'lucide-react';
import { soundManager } from '../../utils/sound';

interface PharmacologyLabAdapterProps {
  config: {
    patientName: string;
    weightKg: number;
    drugId: string;
    drugName: string;
    concentrationMgMl: number;
    targetDoseMgKg: number;
    targetVolumeMl: number;
    instructions: string;
  };
  onObjectiveAchieved: () => void;
  isCompleted?: boolean;
}

export const PharmacologyLabAdapter: React.FC<PharmacologyLabAdapterProps> = ({
  config,
  onObjectiveAchieved,
  isCompleted = false,
}) => {
  const [aspiratedVolume, setAspiratedVolume] = useState<number>(0.0);
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'subdose' | 'overdose' | null;
    message: string;
    deviationPercent: number;
  }>({ type: null, message: '', deviationPercent: 0 });
  const [showFormulaHelper, setShowFormulaHelper] = useState<boolean>(false);

  const expectedMassaMg = config.weightKg * config.targetDoseMgKg;
  const maxSyringeCapacity = config.targetVolumeMl > 2.0 ? 10.0 : (config.targetVolumeMl > 0.5 ? 2.0 : 0.5);
  const stepSize = maxSyringeCapacity > 2.0 ? 0.1 : 0.01;

  const handleTestDose = () => {
    soundManager.playClick();

    const expected = config.targetVolumeMl;
    const diff = Math.abs(aspiratedVolume - expected);
    const deviationPercent = Math.round((diff / expected) * 100);

    if (diff <= (maxSyringeCapacity > 2.0 ? 0.2 : 0.02) || deviationPercent <= 10) {
      soundManager.playSuccess();
      setFeedback({
        type: 'success',
        message: `🎯 Perfeito! Você aspirou ${aspiratedVolume.toFixed(2)} mL (desvio seguro de ${deviationPercent}%). A dose administrada de ${expectedMassaMg.toFixed(2)} mg atingiu com precisão milimétrica a janela terapêutica sem sobrecarga renal!`,
        deviationPercent,
      });
      onObjectiveAchieved();
    } else if (aspiratedVolume < expected) {
      soundManager.playError();
      setFeedback({
        type: 'subdose',
        message: `⚠️ Subdose identificada! Você aspirou ${aspiratedVolume.toFixed(2)} mL (${deviationPercent}% abaixo do ideal de ${expected.toFixed(2)} mL). O paciente não atingirá concentração plasmática suficiente para conter o processo álgico/infeccioso.`,
        deviationPercent,
      });
    } else {
      soundManager.playError();
      setFeedback({
        type: 'overdose',
        message: `🚨 Sobredose perigosa! Você aspirou ${aspiratedVolume.toFixed(2)} mL (${deviationPercent}% acima do volume seguro de ${expected.toFixed(2)} mL). Em espécies silvestres, essa quantidade excessiva satura o clearance renal e pode induzir falência aguda de órgãos!`,
        deviationPercent,
      });
    }
  };

  const handleReset = () => {
    soundManager.playClick();
    setAspiratedVolume(0.0);
    setFeedback({ type: null, message: '', deviationPercent: 0 });
  };

  return (
    <div className="bg-stone-900/95 border border-emerald-500/40 rounded-2xl p-5 md:p-6 shadow-2xl relative overflow-hidden text-stone-100">
      {/* Badge de Sandbox Isolado */}
      <div className="flex items-center justify-between border-b border-stone-800 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
            <Syringe className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-amber-400">
              Laboratório Didático • Farmacologia Experimental
            </h4>
            <span className="text-[10px] text-slate-400 uppercase font-semibold">
              Ambiente 100% Isolado • Sem Risco Clínico ao Hospital
            </span>
          </div>
        </div>

        {isCompleted && (
          <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-emerald-950 border border-emerald-500/50 text-emerald-300 flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Meta Cumprida
          </span>
        )}
      </div>

      {/* Grid de Informações do Paciente e Fármaco Didático */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <div className="bg-stone-950/70 border border-stone-800 rounded-xl p-3.5 space-y-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
            Paciente Didático
          </span>
          <div className="flex items-center justify-between">
            <span className="text-sm font-extrabold text-white">{config.patientName}</span>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
              {config.weightKg.toFixed(2)} kg
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            Dose prescrita: <strong className="text-amber-300">{config.targetDoseMgKg} mg/kg</strong>
          </p>
        </div>

        <div className="bg-stone-950/70 border border-stone-800 rounded-xl p-3.5 space-y-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
            Frasco Disponível
          </span>
          <div className="flex items-center justify-between">
            <span className="text-sm font-extrabold text-amber-300">{config.drugName}</span>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-950/80 border border-amber-500/40 text-amber-300">
              {config.concentrationMgMl} mg/mL
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            Massa ativa necessária: <strong className="text-white">{expectedMassaMg.toFixed(2)} mg</strong>
          </p>
        </div>
      </div>

      {/* Instruções */}
      <div className="bg-emerald-950/30 border border-emerald-900/40 rounded-xl p-3 mb-5 flex items-start gap-2.5">
        <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        <p className="text-xs text-slate-300 leading-relaxed">
          {config.instructions}
        </p>
      </div>

      {/* Controle Interativo da Seringa */}
      <div className="bg-stone-950/90 border border-stone-800 rounded-xl p-5 mb-5 space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-xs font-extrabold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Syringe className="w-4 h-4 text-emerald-400" />
            Graduação da Seringa (Capacidade: {maxSyringeCapacity} mL)
          </label>
          <div className="flex items-center gap-2">
            <span className="text-xl font-black font-mono text-emerald-400 bg-stone-900 px-3 py-1 rounded-lg border border-emerald-500/40 shadow-inner">
              {aspiratedVolume.toFixed(2)} <span className="text-xs text-slate-400">mL</span>
            </span>
          </div>
        </div>

        {/* Slider de Alta Precisão */}
        <input
          type="range"
          min="0"
          max={maxSyringeCapacity}
          step={stepSize}
          value={aspiratedVolume}
          onChange={(e) => setAspiratedVolume(parseFloat(e.target.value))}
          className="w-full h-3 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
        />

        {/* Marcadores de escala */}
        <div className="flex justify-between text-[10px] font-mono text-slate-500 px-1">
          <span>0.00 mL</span>
          <span>{(maxSyringeCapacity * 0.25).toFixed(2)} mL</span>
          <span>{(maxSyringeCapacity * 0.5).toFixed(2)} mL</span>
          <span>{(maxSyringeCapacity * 0.75).toFixed(2)} mL</span>
          <span>{maxSyringeCapacity.toFixed(2)} mL</span>
        </div>

        {/* Botão de Dica da Fórmula */}
        <div className="pt-1">
          <button
            type="button"
            onClick={() => setShowFormulaHelper(!showFormulaHelper)}
            className="text-[11px] text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Calculator className="w-3.5 h-3.5" />
            {showFormulaHelper ? 'Ocultar dedução matemática' : 'Esqueceu a fórmula? Clique para ver a dedução'}
          </button>

          {showFormulaHelper && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2.5 p-3 rounded-lg bg-stone-900 border border-amber-500/30 text-xs font-mono text-amber-200/90 leading-relaxed"
            >
              V = (P × D) ÷ C  
              V = ({config.weightKg} kg × {config.targetDoseMgKg} mg/kg) ÷ {config.concentrationMgMl} mg/mL  
              V = {expectedMassaMg.toFixed(2)} mg ÷ {config.concentrationMgMl} mg/mL = <strong>{config.targetVolumeMl.toFixed(2)} mL</strong>
            </motion.div>
          )}
        </div>
      </div>

      {/* Painel de Feedback e Resposta Farmacológica */}
      <AnimatePresence>
        {feedback.type && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`p-4 rounded-xl border mb-5 flex items-start gap-3 ${
              feedback.type === 'success'
                ? 'bg-emerald-950/70 border-emerald-500/60 text-emerald-200'
                : feedback.type === 'subdose'
                ? 'bg-amber-950/70 border-amber-500/60 text-amber-200'
                : 'bg-rose-950/70 border-rose-500/60 text-rose-200'
            }`}
          >
            {feedback.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            )}
            <div className="flex-1 text-xs leading-relaxed font-medium">
              {feedback.message}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ações do Laboratório */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleTestDose}
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-900/40 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <Syringe className="w-4 h-4" />
          Testar Injeção Didática
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="py-3 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-slate-300 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
          title="Reiniciar Seringa"
        >
          <RefreshCw className="w-4 h-4" />
          Limpar
        </button>
      </div>
    </div>
  );
};
