import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Skull, FileSignature, RotateCcw, AlertTriangle } from 'lucide-react';
import type { CaseData, CareerState } from '../types';
import { SPECIES_COEFFICIENTS, type VitalsParameters } from '../utils/physiologyEngine';
import { soundManager } from '../utils/sound';

interface PostMortemReportProps {
  caseData: CaseData;
  vitals: VitalsParameters;
  careerState: CareerState;
  onSignReport: (penalizedCareer: CareerState) => void;
  onRestartSurgery: () => void;
}

export const PostMortemReport: React.FC<PostMortemReportProps> = ({
  caseData,
  vitals,
  careerState,
  onSignReport,
  onRestartSurgery
}) => {
  // Determine Causa Mortis
  const { causaMortis, advice } = useMemo(() => {
    const limit = SPECIES_COEFFICIENTS[vitals.speciesId]?.maxStressTolerance || 1000;
    
    if (vitals.activeCrisis === 'HYPOVOLEMIC_SHOCK' || vitals.bloodPressureSystolic < 40) {
      return {
        causaMortis: 'CHOQUE HIPOVOLÊMICO SEVERO (HEMORRAGIA MASSIVA)',
        advice: 'Monitore o volume de sangue perdido. Aplique Epinefrina IMEDIATAMENTE para restaurar a pressão sistólica em caso de choque hemorrágico, e utilize pinças hemostáticas.'
      };
    }
    if (vitals.activeCrisis === 'BRADYCARDIA_CRITICAL' || (vitals.heartRate <= 0 && vitals.oxygenSaturation >= 50)) {
      return {
        causaMortis: 'PARADA CARDIORRESPIRATÓRIA (SUPERDOSE ANESTÉSICA / VAGAL)',
        advice: 'Você aprofundou demais o plano anestésico. Aplique Atropina ao primeiro sinal de bradicardia severa e reduza a dosagem anestésica para evitar depressão bulbar.'
      };
    }
    if (vitals.stressIntegral > limit) {
      return {
        causaMortis: 'MIOPATIA DE CAPTURA (FALÊNCIA MÚLTIPLA POR ESTRESSE/DOR)',
        advice: 'O paciente sofreu dor excruciante ou hipertermia prolongada. Mantenha a analgesia em dia e controle a temperatura, especialmente em mamíferos hiperativos e aves.'
      };
    }
    if (vitals.oxygenSaturation < 50) {
      return {
        causaMortis: 'HIPÓXIA IRREVERSÍVEL (ASFIXIA TECIDUAL)',
        advice: 'A ventilação parou. Se a frequência respiratória cair drasticamente sob anestesia, o paciente sufocará. Fique atento à oximetria de pulso (SpO2).'
      };
    }
    
    return {
      causaMortis: 'FALÊNCIA MÚLTIPLA DE ÓRGÃOS (ERRO CIRÚRGICO CRASSO)',
      advice: 'Os parâmetros vitais colapsaram devido a má condução clínica. Revise todo o seu protocolo de indução e estabilização.'
    };
  }, [vitals]);

  const handleSign = () => {
    soundManager.playClick();
    const penalizedCareer: CareerState = {
      ...careerState,
      xp: Math.max(0, careerState.xp - 500),
      reliability: Math.max(0, careerState.reliability - 15)
    };
    onSignReport(penalizedCareer);
  };

  const handleRestart = () => {
    soundManager.playClick();
    onRestartSurgery();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="fixed inset-0 z-[100] bg-[#050A08]/95 backdrop-blur-md flex items-center justify-center p-6 selection:bg-rose-900/50"
    >
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', damping: 20 }}
        className="max-w-3xl w-full bg-[#111] border-2 border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden font-mono text-slate-300"
      >
        {/* Top Header - Forensic Style */}
        <div className="bg-slate-900 border-b-2 border-slate-800 p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Skull className="w-8 h-8 text-rose-600" />
            <div>
              <h1 className="text-xl font-black text-rose-600 tracking-[0.2em] uppercase">Laudo de Óbito</h1>
              <p className="text-[10px] text-slate-500 tracking-widest">DEPARTAMENTO DE PATOLOGIA VETERINÁRIA</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-500 uppercase">Registro Óbito</p>
            <p className="font-black text-slate-400">#DTH-{caseData.patientCode}</p>
          </div>
        </div>

        <div className="p-8 grid grid-cols-12 gap-8">
          
          {/* Patient Photo & Base Info */}
          <div className="col-span-4 flex flex-col items-center">
            <div className="w-full aspect-square bg-slate-900 border-4 border-slate-800 mb-4 overflow-hidden relative">
              <img 
                src={caseData.imageTexture} 
                alt="Patient Profile" 
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" fill="%231f2937"><path fill="%239ca3af" d="M190 95c-5 0-9-5-9-10s4-10 9-10 9 5 9 10-4 10-9 10zm20 0c-5 0-9-5-9-10s4-10 9-10 9 5 9 10-4 10-9 10zm-35-15c-4 0-7-4-7-8s3-8 7-8 7 4 7 8-3 8-7 8zm50 0c-4 0-7-4-7-8s3-8 7-8 7 4 7 8-3 8-7 8zm-25 35c-12 0-22-10-22-22s10-22 22-22 22 10 22 22-10 22-22 22z"/><text x="50%" y="65%" fill="%239ca3af" font-size="14" text-anchor="middle" font-family="sans-serif">Sem Imagem Clínica</text></svg>';
                }}
                className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity bg-gray-800" 
              />
              <div className="absolute inset-0 bg-rose-900/20 mix-blend-overlay"></div>
              <div className="absolute top-2 right-2 px-2 py-0.5 bg-rose-600 text-white text-[10px] font-black uppercase transform rotate-12">Deceased</div>
            </div>
            
            <div className="w-full text-xs space-y-2 border-t border-slate-800 pt-4">
              <div className="flex justify-between border-b border-slate-800/50 pb-1">
                <span className="text-slate-500">Espécie:</span>
                <span className="font-bold">{caseData.speciesName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800/50 pb-1">
                <span className="text-slate-500">Nome Científico:</span>
                <span className="italic">{caseData.scientificName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800/50 pb-1">
                <span className="text-slate-500">Motivo Admissão:</span>
                <span className="text-right truncate w-24" title={caseData.arrivalReason}>{caseData.arrivalReason}</span>
              </div>
            </div>
          </div>

          {/* Clinical Forensics Data */}
          <div className="col-span-8 flex flex-col justify-between">
            <div>
              <div className="mb-6 p-4 border border-rose-900/50 bg-rose-950/20 rounded-lg">
                <h2 className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> Causa Mortis Diagnosticada
                </h2>
                <p className="text-lg font-black text-rose-400 leading-tight">
                  {causaMortis}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-1">Últimos Parâmetros Vitais Registrados</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-between bg-slate-900/50 p-2 border border-slate-800">
                     <span className="text-xs text-slate-500">Frequência Cardíaca:</span>
                     <span className="text-xs font-bold text-rose-400">{Math.round(vitals.heartRate)} bpm</span>
                  </div>
                  <div className="flex justify-between bg-slate-900/50 p-2 border border-slate-800">
                     <span className="text-xs text-slate-500">Pressão Sistólica:</span>
                     <span className="text-xs font-bold text-rose-400">{Math.round(vitals.bloodPressureSystolic)} mmHg</span>
                  </div>
                  <div className="flex justify-between bg-slate-900/50 p-2 border border-slate-800">
                     <span className="text-xs text-slate-500">Saturação (SpO2):</span>
                     <span className="text-xs font-bold text-cyan-500">{Math.round(vitals.oxygenSaturation)}%</span>
                  </div>
                  <div className="flex justify-between bg-slate-900/50 p-2 border border-slate-800">
                     <span className="text-xs text-slate-500">Índice de Estresse:</span>
                     <span className="text-xs font-bold text-amber-500">{Math.round(vitals.stressIntegral)} U</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-slate-900 border-l-4 border-amber-600 text-sm italic text-slate-400">
                <span className="block text-[10px] uppercase font-bold text-amber-600 mb-1 not-italic tracking-widest">Conselho do Diretor Clínico:</span>
                "{advice}"
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="mt-8 flex gap-4">
              <button 
                onClick={handleRestart}
                className="flex-1 py-3 px-4 border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 uppercase tracking-widest text-xs font-bold transition-colors flex items-center justify-center gap-2 group"
              >
                <RotateCcw className="w-4 h-4 text-slate-400 group-hover:text-slate-200" /> Reiniciar Cirurgia
              </button>

              <button 
                onClick={handleSign}
                className="flex-1 py-3 px-4 border border-rose-700 bg-rose-900/40 hover:bg-rose-900 hover:text-rose-100 text-rose-400 uppercase tracking-widest text-xs font-black transition-colors flex items-center justify-center gap-2 group"
              >
                <FileSignature className="w-4 h-4" /> Assinar Laudo
              </button>
            </div>

          </div>
        </div>
        
        {/* Penalty Warning Footer */}
        <div className="bg-slate-950 p-3 text-center border-t border-slate-900">
          <p className="text-[10px] text-rose-600 font-bold uppercase tracking-widest">
             ATENÇÃO: Assinar o laudo confirmará a perda de 500 XP e 15 pontos de Reputação.
          </p>
        </div>

      </motion.div>
    </motion.div>
  );
};
