import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Activity, Coins, TrendingUp, AlertTriangle } from 'lucide-react';
import type { CaseData, CareerState } from '../types';
import { type VitalsParameters, computeSurgicalScore } from '../utils/physiologyEngine';
import { soundManager } from '../utils/sound';
import { getAssetUrl } from '../utils/assetHelper';

interface ClinicalDischargeReportProps {
  caseData: CaseData;
  vitals: VitalsParameters;
  finalStars: number;
  careerState: CareerState;
  spentBudget?: number;
  remainingCaseBudget?: number;
  onSignDischarge: () => void;
}

export const ClinicalDischargeReport: React.FC<ClinicalDischargeReportProps> = ({
  caseData,
  vitals,
  finalStars,
  spentBudget = 0,
  remainingCaseBudget = caseData.caseBudget,
  onSignDischarge
}) => {
  const score = computeSurgicalScore(
    {
      incisionAccuracy: finalStars / 5,
      stressAccumulated: vitals.stressIntegral,
      iatrogenicDamage: 0,
      timeElapsed: 120,
      proceduresCompleted: []
    },
    120
  );

  const residualProfit = Math.max(0, remainingCaseBudget);
  const isDeficit = remainingCaseBudget < 0;
  const deficitAmount = isDeficit ? Math.abs(remainingCaseBudget) : 0;
  const starBonus = finalStars * 100;
  const netEarnings = Math.max(0, residualProfit + starBonus - deficitAmount);

  const handleSign = () => {
    soundManager.playClick();
    onSignDischarge();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-teal-950/90 backdrop-blur-lg flex items-center justify-center p-6 selection:bg-teal-700/50"
    >
      <motion.div 
        initial={{ y: 50, scale: 0.95, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: 'spring', damping: 20 }}
        className="max-w-4xl w-full max-h-[90vh] flex flex-col bg-[#F8FAF6] rounded-2xl shadow-[0_0_80px_rgba(20,184,166,0.3)] relative overflow-hidden text-slate-800"
      >
        {/* Certificate Header */}
        <div className="bg-teal-900 border-b-[6px] border-teal-500 p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg">
              <ShieldCheck className="w-8 h-8 text-teal-600" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white uppercase tracking-[0.1em] font-serif">Certificado de Alta Médica</h1>
              <p className="text-teal-200 tracking-widest font-mono text-xs mt-0.5 uppercase">Instituto Veterinário MedZoo • Prontuário Finalizado</p>
            </div>
          </div>
          <div className="text-right font-mono text-teal-100">
            <p className="text-[10px] opacity-80 uppercase tracking-widest">Protocolo de Recuperação</p>
            <p className="text-base font-bold">#REC-{caseData.patientCode}</p>
          </div>
        </div>

        <div className="p-8 flex-1 overflow-y-auto flex flex-col md:flex-row gap-8">
          {/* Visual Profile */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="w-full aspect-square rounded-2xl bg-slate-200 shadow-inner overflow-hidden border-4 border-white mb-4 relative group">
              <img 
                src={getAssetUrl(caseData.imageTexture)} 
                alt="Patient Profile" 
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" fill="%231f2937"><path fill="%239ca3af" d="M190 95c-5 0-9-5-9-10s4-10 9-10 9 5 9 10-4 10-9 10zm20 0c-5 0-9-5-9-10s4-10 9-10 9 5 9 10-4 10-9 10zm-35-15c-4 0-7-4-7-8s3-8 7-8 7 4 7 8-3 8-7 8zm50 0c-4 0-7-4-7-8s3-8 7-8 7 4 7 8-3 8-7 8zm-25 35c-12 0-22-10-22-22s10-22 22-22 22 10 22 22-10 22-22 22z"/><text x="50%" y="65%" fill="%239ca3af" font-size="14" text-anchor="middle" font-family="sans-serif">Sem Imagem Clínica</text></svg>';
                }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 bg-gray-800" 
              />
              <div className="absolute top-3 right-3 px-3 py-1 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-black uppercase rounded-full shadow-lg">
                Recuperado
              </div>
            </div>
            
            <div className="w-full text-xs font-medium space-y-2.5">
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wider">Paciente:</span>
                <span className="text-teal-900 font-bold">{caseData.speciesName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wider">Científico:</span>
                <span className="italic text-slate-700">{caseData.scientificName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wider">Conduta Realizada:</span>
                <span className="text-emerald-600 font-bold max-w-[150px] truncate text-right">Intervenção Bem-Sucedida</span>
              </div>
            </div>
          </div>

          {/* Metrics & Itemized Financial Receipt */}
          <div className="w-full md:w-2/3 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Clinical Precision Scores */}
              <div>
                <h2 className="text-xs font-black text-teal-800 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-teal-600" /> Avaliação da Intervenção Cirúrgica
                </h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center items-center">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-0.5">Score Cirúrgico</span>
                    <div className="text-3xl font-black text-emerald-600">{Math.round(score)}<span className="text-lg">%</span></div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center items-center">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-0.5">Avaliação Clínica</span>
                    <div className="flex items-center justify-center space-x-1 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <CheckCircle2
                          key={star}
                          className={`w-5 h-5 ${star <= finalStars ? 'text-teal-600' : 'text-slate-200'}`}
                          fill={star <= finalStars ? '#0D9488' : 'none'}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Itemized Financial & XP Receipt */}
              <div>
                <h2 className="text-xs font-black text-teal-800 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Coins className="w-4 h-4 text-amber-600" /> Extrato Financeiro & Honorários Médicos
                </h2>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  {/* Budget Authorized */}
                  <div className="flex justify-between items-center text-xs font-medium text-slate-600">
                    <span>Orçamento do Paciente Autorizado:</span>
                    <span className="font-mono font-bold text-slate-800">R$ {caseData.caseBudget.toLocaleString('pt-BR')}</span>
                  </div>

                  {/* Expenses */}
                  <div className="flex justify-between items-center text-xs font-medium text-rose-600">
                    <span>Despesas Operacionais (Exames e Insumos):</span>
                    <span className="font-mono font-bold">- R$ {spentBudget.toLocaleString('pt-BR')}</span>
                  </div>

                  {/* Residual Savings / Deficit */}
                  <div className="flex justify-between items-center text-xs font-medium pt-1 border-t border-slate-100">
                    <span className="flex items-center gap-1">
                      {isDeficit ? (
                        <>
                          <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                          <span className="text-rose-600 font-bold">Déficit Orçamentário (Excesso de Exames):</span>
                        </>
                      ) : (
                        <>
                          <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-slate-700">Economia Residual do Orçamento:</span>
                        </>
                      )}
                    </span>
                    <span className={`font-mono font-bold ${isDeficit ? 'text-rose-600' : 'text-emerald-700'}`}>
                      {isDeficit ? `- R$ ${deficitAmount.toLocaleString('pt-BR')}` : `R$ ${residualProfit.toLocaleString('pt-BR')}`}
                    </span>
                  </div>

                  {/* Star Honorarium */}
                  <div className="flex justify-between items-center text-xs font-medium text-amber-700">
                    <span>Honorários por Precisão ({finalStars} Estrela{finalStars > 1 ? 's' : ''}):</span>
                    <span className="font-mono font-bold">+ R$ {starBonus.toLocaleString('pt-BR')}</span>
                  </div>

                  {/* Net Payout Banner */}
                  <div className="flex justify-between items-center pt-3 border-t-2 border-dashed border-slate-200">
                    <div>
                      <span className="text-xs font-black text-slate-800 uppercase tracking-wider block">Total Líquido Creditado:</span>
                      <span className="text-[10px] text-slate-400 font-mono">+ {finalStars * 150} XP Adquirido</span>
                    </div>
                    <span className="text-2xl font-black text-emerald-600 font-mono tracking-tight">
                      + R$ {netEarnings.toLocaleString('pt-BR')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action Button */}
            <div className="mt-6 flex justify-end">
              <button 
                onClick={handleSign}
                className="py-3.5 px-8 rounded-xl bg-gradient-to-r from-teal-700 to-emerald-700 hover:from-teal-600 hover:to-emerald-600 text-white uppercase tracking-widest text-xs font-black transition-all shadow-[0_8px_20px_rgba(13,148,136,0.3)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Assinar Alta Médica & Receber
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
