import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Activity, Award } from 'lucide-react';
import type { CaseData, CareerState } from '../types';
import { VitalsParameters, computeSurgicalScore } from '../utils/physiologyEngine';
import { soundManager } from '../utils/sound';

interface ClinicalDischargeReportProps {
  caseData: CaseData;
  vitals: VitalsParameters;
  finalStars: number;
  careerState: CareerState;
  onSignDischarge: () => void;
}

export const ClinicalDischargeReport: React.FC<ClinicalDischargeReportProps> = ({
  caseData,
  vitals,
  finalStars,
  onSignDischarge
}) => {
  // Approximate the surgical score using the logic from physiologyEngine
  // Given we may not have full telemetry tracking over the entire surgery length in ClinicWorkstation yet,
  // we estimate precision based on stars and final stress.
  const score = computeSurgicalScore(
    {
      incisionAccuracy: finalStars / 5, // 0.6 to 1.0
      stressAccumulated: vitals.stressIntegral,
      iatrogenicDamage: 0,
      timeElapsed: 120, // Estimated 2 minutes
      proceduresCompleted: []
    },
    120
  );

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
        className="max-w-4xl w-full bg-[#F8FAF6] rounded-xl shadow-[0_0_80px_rgba(20,184,166,0.3)] relative overflow-hidden text-slate-800"
      >
        {/* Certificate Header */}
        <div className="bg-teal-900 border-b-[6px] border-teal-500 p-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
              <ShieldCheck className="w-8 h-8 text-teal-600" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-white uppercase tracking-[0.1em] font-serif">Certificado de Alta Médica</h1>
              <p className="text-teal-200 tracking-widest font-mono text-xs mt-1 uppercase">Instituto Veterinário MedZoo</p>
            </div>
          </div>
          <div className="text-right font-mono text-teal-100">
            <p className="text-xs opacity-80 uppercase tracking-widest">Protocolo de Recuperação</p>
            <p className="text-lg font-bold">#REC-{caseData.patientCode}</p>
          </div>
        </div>

        <div className="p-10 flex gap-10">
          
          {/* Visual Profile */}
          <div className="w-1/3 flex flex-col items-center">
            <div className="w-full aspect-square rounded-2xl bg-slate-200 shadow-inner overflow-hidden border-4 border-white mb-6 relative group">
              <img 
                src={caseData.imageTexture} 
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
            
            <div className="w-full text-sm font-medium space-y-3">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-bold uppercase text-[10px] tracking-wider">Paciente:</span>
                <span className="text-teal-900 font-bold">{caseData.speciesName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-bold uppercase text-[10px] tracking-wider">Científico:</span>
                <span className="italic text-slate-700">{caseData.scientificName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-bold uppercase text-[10px] tracking-wider">Conduta Realizada:</span>
                <span className="text-emerald-600 font-bold max-w-[150px] truncate text-right">Intervenção Bem-Sucedida</span>
              </div>
            </div>
          </div>

          {/* Metrics & Rewards */}
          <div className="w-2/3 flex flex-col justify-between">
            <div>
              <h2 className="text-sm font-black text-teal-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-teal-500" /> Avaliação da Intervenção
              </h2>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center items-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Score Cirúrgico (Precisão)</span>
                  <div className="text-4xl font-black text-emerald-500">{Math.round(score)}<span className="text-xl">%</span></div>
                </div>
                
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center items-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Avaliação Geral</span>
                  <div className="flex items-center justify-center space-x-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <CheckCircle2
                        key={star}
                        className={`w-6 h-6 ${star <= finalStars ? 'text-teal-500' : 'text-slate-200'}`}
                        fill={star <= finalStars ? '#14B8A6' : 'none'}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <h2 className="text-sm font-black text-teal-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" /> Remuneração & Experiência
              </h2>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-slate-600">Recompensa Orçamentária Autorizada:</span>
                  <span className="text-xl font-black text-emerald-600 font-mono">+ R$ {caseData.caseBudget.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center border-t border-slate-200 pt-3">
                  <span className="text-sm font-bold text-slate-600">Experiência Adquirida (XP):</span>
                  <span className="text-xl font-black text-amber-500 font-mono">+ {finalStars * 150} XP</span>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="mt-8 flex justify-end">
              <button 
                onClick={handleSign}
                className="py-4 px-10 rounded-xl bg-teal-600 hover:bg-teal-500 text-white uppercase tracking-widest text-sm font-black transition-all shadow-[0_10px_20px_rgba(13,148,136,0.3)] hover:-translate-y-1 active:translate-y-0"
              >
                Assinar Alta e Retornar
              </button>
            </div>

          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};
