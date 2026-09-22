import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Brain, Syringe, Search, AlertTriangle, CheckCircle2, BookOpen, FlaskConical, Coins, RotateCcw } from 'lucide-react';
import type { CaseData, CareerState, ComplementaryExam } from '../types';
import { PalpationMinigame } from './minigames/PalpationMinigame';
import { XRayMinigame } from './minigames/XRayMinigame';
import { UltrasoundMinigame } from './minigames/UltrasoundMinigame';
import { TreatmentMinigame } from './minigames/TreatmentMinigame';
import { DiagnosticBoardMinigame } from './minigames/DiagnosticBoardMinigame';
import { HemogramMinigame } from './minigames/HemogramMinigame';
import { PharmacologyMinigame } from './minigames/PharmacologyMinigame';
import { PostMortemReport } from './PostMortemReport';
import { VademecumUI } from './VademecumUI';
import { ClinicalDischargeReport } from './ClinicalDischargeReport';
import { soundManager } from '../utils/sound';
import { getAssetUrl } from '../utils/assetHelper';
import confetti from 'canvas-confetti';
import {
  type VitalsParameters,
  createInitialVitals,
  updateVitals,
  getSpeciesCoefficients
} from '../utils/physiologyEngine';

interface ClinicWorkstationProps {
  caseData: CaseData;
  careerState: CareerState;
  onFinishCase: (career: CareerState, stars?: number) => void;
  onBackToCaseSelect: () => void;
}

export const ClinicWorkstation: React.FC<ClinicWorkstationProps> = ({
  caseData,
  careerState,
  onFinishCase,
  onBackToCaseSelect: _onBackToCaseSelect,
}) => {
  const sessionKey = `medzoo_session_${caseData.id}`;
  const isCaseAlreadyCompleted = careerState.completedCaseIds.includes(caseData.id);

  const savedSession = (() => {
    // If this case was already concluded, start 100% clean so the player can investigate from scratch
    if (isCaseAlreadyCompleted) {
      try {
        sessionStorage.removeItem(sessionKey);
        sessionStorage.removeItem(`medzoo_steps_${caseData.id}`);
      } catch { /* ignore */ }
      return null;
    }
    try {
      const data = sessionStorage.getItem(sessionKey);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  })();

  const [activeMinigame, setActiveMinigame] = useState<'palpation' | 'xray' | 'ultrasound' | 'treatment' | 'diagnostic_board' | 'hemogram' | 'pharmacology' | null>(null);
  const [selectedExamInfo, setSelectedExamInfo] = useState<ComplementaryExam | null>(savedSession?.selectedExamInfo || null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Clinical Progress State
  const [discoveredEvidences, setDiscoveredEvidences] = useState<string[]>(() => {
    const list = savedSession?.discoveredEvidences ? [...savedSession.discoveredEvidences] : [];
    if (caseData.evidenceData['ev_anamnese'] && !list.includes('ev_anamnese')) {
      list.push('ev_anamnese');
    }
    return list;
  });
  const [performedExams, setPerformedExams] = useState<string[]>(savedSession?.performedExams || []);
  const [administeredDrugs, setAdministeredDrugs] = useState<string[]>(savedSession?.administeredDrugs || []);
  const [selectedHypothesisId, setSelectedHypothesisId] = useState<string | null>(savedSession?.selectedHypothesisId || null);

  // Dynamic Case Budget & Expense Tracking
  const spentBudget = useMemo(() => {
    let total = 0;
    for (const examId of performedExams) {
      if (examId === 'hemogram' || examId.startsWith('hemo')) {
        total += 80;
      } else if (caseData.complementaryExams && caseData.complementaryExams[examId]) {
        total += caseData.complementaryExams[examId].cost;
      } else {
        total += 100;
      }
    }
    total += administeredDrugs.length * 50;
    return total;
  }, [performedExams, administeredDrugs, caseData.complementaryExams]);

  const remainingCaseBudget = caseData.caseBudget - spentBudget;

  const [caseFinished, setCaseFinished] = useState<boolean>(false);
  const [finalStars, setFinalStars] = useState<number>(0);

  // Physiology State
  const [vitals, setVitals] = useState<VitalsParameters | null>(savedSession?.vitals || null);
  const [isHyperacuteShock, setIsHyperacuteShock] = useState(false);
  const [isVademecumOpen, setIsVademecumOpen] = useState(false);
  const ecgCanvasRef = useRef<HTMLCanvasElement>(null);
  const lastTimeRef = useRef<number>(performance.now());
  const ecgPhaseRef = useRef<number>(0);

  // Initialize Vitals if no saved session
  useEffect(() => {
    if (!savedSession?.vitals) {
      const speciesId = caseData.scientificName 
        ? caseData.scientificName.toLowerCase().trim().replace(/\s+/g, '_')
        : (caseData.id || 'hydrochoerus_hydrochaeris');
      
      setVitals(createInitialVitals(speciesId));
    }
    
    // Auto-discover anamnesis evidence since the player reads the history text immediately
    if (caseData.evidenceData['ev_anamnese']) {
      setDiscoveredEvidences(prev => 
        prev.includes('ev_anamnese') ? prev : [...prev, 'ev_anamnese']
      );
    }
  }, [caseData, savedSession]);

  // Persist session to sessionStorage on clinical state changes
  useEffect(() => {
    if (caseFinished) {
      sessionStorage.removeItem(sessionKey);
      return;
    }
    const sessionData = {
      activeMinigame: null,
      selectedExamInfo,
      discoveredEvidences,
      performedExams,
      administeredDrugs,
      selectedHypothesisId,
      vitals,
    };
    sessionStorage.setItem(sessionKey, JSON.stringify(sessionData));
  }, [sessionKey, activeMinigame, selectedExamInfo, discoveredEvidences, performedExams, administeredDrugs, selectedHypothesisId, vitals, caseFinished]);

  const vitalsRef = useRef<VitalsParameters | null>(null);

  // Main Physiology and ECG Render Loop
  useEffect(() => {
    if (!vitals || caseFinished) return;
    vitalsRef.current = vitals; // Keep ref in sync initially
    
    let animationFrameId: number;
    let ecgX = 0;
    let accumulatedDt = 0;
    
    const loop = (time: number) => {
      const dt = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;
      
      accumulatedDt += dt;
      if (accumulatedDt >= 0.25) {
         setVitals(prev => {
           if (!prev) return prev;
           
           // Update vitals with accumulated dt
           const updated = updateVitals(prev, accumulatedDt, { handling: 0.1, painLevel: 0, anesthesiaDepth: 0 });
           vitalsRef.current = updated; // Sync ref for the render loop
           
           // Check for Hyperacute Shock (Capture Myopathy threshold crossed)
           const limit = getSpeciesCoefficients(updated.speciesId).maxStressTolerance;
           if (updated.stressIntegral > limit * 0.9 && !isHyperacuteShock) {
              setIsHyperacuteShock(true);
              soundManager.playError();
           } else if (updated.stressIntegral < limit * 0.8 && isHyperacuteShock) {
              setIsHyperacuteShock(false);
           }
   
           return updated;
         });
         accumulatedDt = 0;
      }

      // Render ECG
      const canvas = ecgCanvasRef.current;
      const currentVitals = vitalsRef.current;
      if (canvas && currentVitals) {
        const ctx = canvas.getContext('2d', { alpha: false });
        if (ctx) {
          const width = canvas.width;
          const height = canvas.height;
          
          // Draw fade trail
          ctx.fillStyle = 'rgba(11, 21, 17, 0.1)';
          ctx.fillRect(0, 0, width, height);
          
          // Draw grid
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.1)'; // emerald-500/10
          ctx.lineWidth = 1;
          ctx.beginPath();
          for(let i=0; i<width; i+=20) { ctx.moveTo(i, 0); ctx.lineTo(i, height); }
          for(let i=0; i<height; i+=20) { ctx.moveTo(0, i); ctx.lineTo(width, i); }
          ctx.stroke();

          // PQRST Waveform Generation
          const hr = currentVitals.heartRate;
          
          if (hr <= 0) {
              soundManager.playAsystole();
          } else {
              soundManager.stopAsystole();
              const bps = hr / 60; // Beats per second
              const period = 1 / bps;
              
              ecgPhaseRef.current += dt;
              if (ecgPhaseRef.current > period) {
                 ecgPhaseRef.current -= period;
                 soundManager.playHeartbeat(hr);
              }
          }

          // t represents the phase (0 to 1) for rendering
          const periodToUse = hr > 0 ? (1 / (hr/60)) : 1;
          const t = (ecgPhaseRef.current % periodToUse) / periodToUse; 
          
          // Synthesize ECG Wave
          let y = 0;
          if (hr > 0) {
              if (t > 0.1 && t < 0.15) y = Math.sin((t-0.1)*Math.PI/0.05) * 0.2; // P wave
              else if (t > 0.25 && t < 0.27) y = -0.3; // Q
              else if (t >= 0.27 && t < 0.30) y = 1.0; // R
              else if (t >= 0.30 && t < 0.33) y = -0.4; // S
              else if (t > 0.45 && t < 0.55) y = Math.sin((t-0.45)*Math.PI/0.1) * 0.3; // T wave
          }
          
          // Hypotension flattening
          if (currentVitals.bloodPressureSystolic < 80) {
             y *= 0.3; // Flatten wave amplitude on hypotension
          }
          
          // Add noise and wandering baseline
          y += (Math.random() - 0.5) * 0.05;
          y += Math.sin(time * 0.001) * 0.1;

          // Fibrillation when in shock
          if (isHyperacuteShock) {
             y += (Math.random() - 0.5) * 1.5; // High frequency random noise
          }
          
          const pixelY = height/2 - (y * height/3);
          
          ctx.strokeStyle = isHyperacuteShock ? '#F43F5E' : '#10B981'; // rose-500 : emerald-500
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(ecgX, pixelY);
          
          ecgX += 3;
          if (ecgX >= width) {
             ecgX = 0;
          }
          
          ctx.lineTo(ecgX, pixelY);
          ctx.stroke();
          
          // Draw scanner bar
          ctx.fillStyle = isHyperacuteShock ? 'rgba(244, 63, 94, 0.8)' : 'rgba(16, 185, 129, 0.8)';
          ctx.fillRect(ecgX, 0, 2, height);
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [vitals?.speciesId, caseFinished, isHyperacuteShock]);

  // --- Callbacks ---
  const handlePalpationComplete = (_region: string, evidenceId: string) => {
    const targetEvidence = evidenceId || (caseData.evidenceData['ev_fisico'] ? 'ev_fisico' : '');
    if (targetEvidence && !discoveredEvidences.includes(targetEvidence)) {
      setDiscoveredEvidences((prev) => [...prev, targetEvidence]);
    }
  };

  const handleExamComplete = (evidenceId: string) => {
    if (evidenceId && !discoveredEvidences.includes(evidenceId)) {
      setDiscoveredEvidences((prev) => [...prev, evidenceId]);
    }
    if (selectedExamInfo && !performedExams.includes(selectedExamInfo.id)) {
      setPerformedExams((prev) => [...prev, selectedExamInfo.id]);
    }
    setActiveMinigame(null);
  };

  const handleTreatmentComplete = (_procedures: string[]) => {
    setActiveMinigame(null);

    // Calculate if the chosen hypothesis and treatments were actually correct
    const correctHypothesis = caseData.hypotheses.find((h) => h.isCorrect);
    const isHypothesisCorrect = selectedHypothesisId === correctHypothesis?.id;

    // Extract surgical score if present (format: "surgical_score:XX.X")
    const surgicalScoreEntry = _procedures.find(p => p.startsWith('surgical_score:'));
    const surgicalScore = surgicalScoreEntry ? parseFloat(surgicalScoreEntry.split(':')[1]) : null;

    // Check if the procedures contain any appropriate treatment for this case
    // (matches treatment option ID, has a passing surgical score >= 50, includes 't_correct', or surgical steps)
    const hasAppropriateTreatment =
      _procedures.some(pId => {
        const t = caseData.treatmentOptions.find(opt => opt.id === pId);
        return t && t.appropriate;
      }) ||
      _procedures.includes('t_correct') ||
      (surgicalScore !== null && surgicalScore >= 50) ||
      (Boolean(caseData.treatmentSequence) && _procedures.some(p => p.startsWith('step_') || p.startsWith('surgical_')));

    if (!isHypothesisCorrect || !hasAppropriateTreatment) {
      const correctHyp = caseData.hypotheses.find((h) => h.isCorrect);
      let errorReason = '';
      if (!isHypothesisCorrect) {
        errorReason = `DIAGNÓSTICO INCORRETO: A hipótese selecionada não corresponde ao quadro clínico real. O diagnóstico correto era "${correctHyp?.title || 'Diagnóstico Primário'}". Revise a anamnese, sinais físicos e exames laboratoriais.`;
      } else {
        errorReason = 'CONDUTA TERAPÊUTICA INADEQUADA: O procedimento cirúrgico executado não tratou a causa primária da afecção.';
      }

      // Lethal Failure (Hardcore Mode)
      setVitals(prev => {
        if (!prev) return prev;
        return {
          ...prev,
          heartRate: 0,
          bloodPressureSystolic: 0,
          bloodPressureDiastolic: 0,
          oxygenSaturation: 0,
          isAlive: false,
          diagnosticFailureReason: errorReason
        };
      });
      vitalsRef.current = { ...vitalsRef.current, isAlive: false, diagnosticFailureReason: errorReason } as VitalsParameters;
      return; 
    }

    // Success Path — Star calculation with surgical score integration
    let stars = 3; // Base: correct diagnosis + correct treatment = 3 stars
    
    // Bonus for collecting evidence (scaled for 4-6 evidences per case)
    const totalEvidences = Object.keys(caseData.evidenceData).length;
    const evidenceRatio = totalEvidences > 0 ? discoveredEvidences.length / totalEvidences : 0;
    if (evidenceRatio >= 0.6) stars += 1; // Found 60%+ of available evidence
    
    // Bonus for surgical precision (if surgical case)
    if (surgicalScore !== null) {
      if (surgicalScore >= 75) stars += 1; // Good surgical score
    } else {
      // Non-surgical case: bonus for thorough investigation
      if (discoveredEvidences.length >= 3) stars += 1;
    }
    
    if (stars > 5) stars = 5;

    setFinalStars(stars);
    setCaseFinished(true);
    soundManager.playSuccess();
    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
  };

  const handleFinalizeProntuario = () => {
    sessionStorage.removeItem(sessionKey);
    sessionStorage.removeItem(`medzoo_steps_${caseData.id}`);

    // Dynamic economic calculation: residual savings + star honorarium - deficit
    const residualProfit = Math.max(0, remainingCaseBudget);
    const isDeficit = remainingCaseBudget < 0;
    const deficitAmount = isDeficit ? Math.abs(remainingCaseBudget) : 0;
    const starBonus = finalStars * 100;
    const netEarnings = Math.max(0, residualProfit + starBonus - deficitAmount);

    const newXp = careerState.xp + finalStars * 150;
    const newCompletedIds = careerState.completedCaseIds.includes(caseData.id)
      ? careerState.completedCaseIds
      : [...careerState.completedCaseIds, caseData.id];
    const completedCount = newCompletedIds.length;

    const rankLadder: Array<{ rank: CareerState['rank']; minCases: number }> = [
      { rank: 'Estagiário', minCases: 0 },
      { rank: 'Residente', minCases: 4 },
      { rank: 'Especialista', minCases: 10 },
      { rank: 'Chefe de Clínica', minCases: 15 },
    ];

    let newRank = careerState.rank;
    for (const tier of rankLadder) {
      if (completedCount >= tier.minCases) {
        newRank = tier.rank;
      }
    }

    const updatedCareer: CareerState = {
      ...careerState,
      money: careerState.money + netEarnings,
      reliability: Math.min(100, Math.max(10, careerState.reliability + (finalStars >= 4 ? 5 : 2) - (isDeficit ? 3 : 0))),
      xp: newXp,
      rank: newRank,
      completedCaseIds: newCompletedIds
    };

    onFinishCase(updatedCareer, finalStars);
  };

  const resetCase = () => {
    sessionStorage.removeItem(sessionKey);
    sessionStorage.removeItem(`medzoo_steps_${caseData.id}`);
    setActiveMinigame(null);
    setSelectedExamInfo(null);
    setDiscoveredEvidences(caseData.evidenceData['ev_anamnese'] ? ['ev_anamnese'] : []);
    setPerformedExams([]);
    setAdministeredDrugs([]);
    setSelectedHypothesisId(null);
    setCaseFinished(false);
    setFinalStars(0);
    setIsHyperacuteShock(false);
    const speciesId = caseData.scientificName 
      ? caseData.scientificName.toLowerCase().trim().replace(/\s+/g, '_')
      : (caseData.id || 'hydrochoerus_hydrochaeris');
    setVitals(createInitialVitals(speciesId));
  };

  return (
    <div className="flex-1 flex flex-col p-4 w-full h-screen bg-[#050A19] overflow-hidden select-none">
      
      {/* 12x6 Grid Layout */}
      <div className="grid grid-cols-12 grid-rows-6 gap-4 w-full h-full">
        
        {/* Header / Info (Row 1, Cols 1-9) */}
        <div className="col-span-9 row-span-1 glass-panel border border-[#C89A3C]/30 rounded-2xl p-4 flex items-center shadow-xl justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={getAssetUrl(caseData.imageTexture)} 
              alt="Patient" 
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" fill="%231f2937"><path fill="%239ca3af" d="M190 95c-5 0-9-5-9-10s4-10 9-10 9 5 9 10-4 10-9 10zm20 0c-5 0-9-5-9-10s4-10 9-10 9 5 9 10-4 10-9 10zm-35-15c-4 0-7-4-7-8s3-8 7-8 7 4 7 8-3 8-7 8zm50 0c-4 0-7-4-7-8s3-8 7-8 7 4 7 8-3 8-7 8zm-25 35c-12 0-22-10-22-22s10-22 22-22 22 10 22 22-10 22-22 22z"/><text x="50%" y="65%" fill="%239ca3af" font-size="14" text-anchor="middle" font-family="sans-serif">Sem Imagem Clínica</text></svg>';
              }}
              className="w-16 h-16 rounded-xl border border-[#C89A3C] object-cover bg-gray-800" 
            />
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-black text-[#E8B84A] tracking-wide">{caseData.patientCode} — {caseData.speciesName}</h1>
                {caseData.isUrgent && (
                  <span className="px-2 py-0.5 rounded bg-rose-950/80 border border-rose-500 text-rose-400 font-bold text-[10px] uppercase animate-pulse">
                    URGÊNCIA
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 font-mono mt-1">Sci: {caseData.scientificName} | Motivo: {caseData.arrivalReason}</p>
            </div>
          </div>
          
          <div className="text-right flex items-center gap-6">
             <div className="text-right">
               <div className="flex items-center justify-end gap-1.5">
                 <Coins className="w-3.5 h-3.5 text-amber-400" />
                 <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                   Orçamento do Paciente
                 </span>
               </div>
               <div className="flex items-baseline justify-end gap-1.5 mt-0.5">
                 <span className={`text-xl font-mono font-black ${remainingCaseBudget < 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                   R$ {remainingCaseBudget.toLocaleString('pt-BR')}
                 </span>
                 <span className="text-xs font-mono text-slate-500">
                   / R$ {caseData.caseBudget.toLocaleString('pt-BR')}
                 </span>
               </div>
               {remainingCaseBudget < 0 && (
                 <span className="text-[9px] text-rose-400 font-bold uppercase tracking-wider block">
                   ⚠️ Déficit Hospitalar
                 </span>
               )}
             </div>
              <button 
                onClick={() => {
                  soundManager.playClick();
                  setShowResetConfirm(true);
                }}
                className="p-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 hover:border-amber-500/50 rounded-xl transition-all shadow-lg text-slate-400 hover:text-amber-400 cursor-pointer"
                title="Reiniciar Atendimento / Limpar Prontuário"
              >
                <RotateCcw className="w-6 h-6" />
              </button>
              <button 
                onClick={() => {
                  soundManager.playClick();
                  setIsVademecumOpen(true);
                }}
                className="p-3 bg-emerald-900/30 hover:bg-emerald-900/50 border border-emerald-500/30 rounded-xl transition-colors shadow-lg"
                title="Abrir Vademecum Veterinário"
              >
                <BookOpen className="w-6 h-6 text-emerald-400" />
              </button>
          </div>
        </div>

        {/* Telemetry Sidebar (Row 1-6, Cols 10-12) */}
        <div className="col-span-3 row-span-6 bg-[#0B1511] border-l-4 border-slate-800 rounded-l-3xl p-4 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          
          {isHyperacuteShock && (
             <div className="absolute inset-0 bg-rose-950/40 pointer-events-none animate-pulse z-0 border-4 border-rose-500/50 rounded-l-3xl" />
          )}

          <div className="z-10 flex items-center gap-2 mb-4">
             <Activity className="w-5 h-5 text-emerald-500" />
             <h2 className="text-emerald-500 font-black tracking-widest uppercase text-sm">Telemetria</h2>
          </div>

          {/* ECG Canvas */}
          <div className="w-full h-32 bg-[#050A08] border border-emerald-900/50 rounded-xl overflow-hidden mb-4 relative z-10 shadow-inner">
             <canvas ref={ecgCanvasRef} width={300} height={128} className="w-full h-full block" />
             <div className="absolute top-2 right-2 text-[10px] font-mono text-emerald-500/50">ECG II</div>
          </div>

          {/* Vitals Digital Displays */}
          <div className="grid grid-cols-2 gap-3 mb-4 z-10">
            <div className={`p-3 rounded-xl border bg-black/50 ${isHyperacuteShock ? 'border-rose-500/50' : 'border-slate-800'}`}>
               <span className="text-[10px] text-slate-500 font-bold uppercase block mb-1">Heart Rate</span>
               <div className={`text-2xl font-mono font-black ${isHyperacuteShock ? 'text-rose-400' : 'text-emerald-400'}`}>
                 {Math.round(vitals?.heartRate || 0)} <span className="text-xs font-normal">bpm</span>
               </div>
            </div>
            
            <div className="p-3 rounded-xl border border-slate-800 bg-black/50">
               <span className="text-[10px] text-slate-500 font-bold uppercase block mb-1">SpO2</span>
               <div className="text-2xl font-mono font-black text-cyan-400">
                 {Math.round(vitals?.oxygenSaturation || 98)} <span className="text-xs font-normal">%</span>
               </div>
            </div>

            <div className="p-3 rounded-xl border border-slate-800 bg-black/50">
               <span className="text-[10px] text-slate-500 font-bold uppercase block mb-1">Temp</span>
               <div className="text-2xl font-mono font-black text-amber-400">
                 {vitals?.bodyTemperature.toFixed(1) || '--'} <span className="text-xs font-normal">°C</span>
               </div>
            </div>

            <div className="p-3 rounded-xl border border-slate-800 bg-black/50">
               <span className="text-[10px] text-slate-500 font-bold uppercase block mb-1">Resp</span>
               <div className="text-2xl font-mono font-black text-indigo-400">
                 {Math.round(vitals?.respiratoryRate || 0)} <span className="text-xs font-normal">rpm</span>
               </div>
            </div>
          </div>

          {/* Capture Myopathy Alert */}
          <div className="flex-1 mt-2 z-10 flex flex-col justify-end">
             {isHyperacuteShock && (
               <div className="p-4 bg-rose-950/80 border border-rose-500 rounded-xl mb-4 flex items-center gap-3 animate-bounce">
                  <AlertTriangle className="w-8 h-8 text-rose-500" />
                  <div>
                    <span className="block text-rose-400 font-black text-sm uppercase">Choque Hiperagudo</span>
                    <span className="block text-rose-300 text-xs font-mono">Miopatia de Captura Ativa</span>
                  </div>
               </div>
             )}
             
             <div className="bg-[#050A08] p-3 rounded-xl border border-slate-800">
               <div className="flex justify-between items-center mb-1">
                 <span className="text-[10px] uppercase font-bold text-slate-500">P_CM(t) Integral</span>
                 <span className="text-[10px] font-mono text-slate-400">{Math.round(vitals?.stressIntegral || 0)} U</span>
               </div>
               <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                 <div 
                   className={`h-full transition-all duration-300 ${isHyperacuteShock ? 'bg-rose-500' : 'bg-[#C89A3C]'}`}
                   style={{ 
                     width: `${Math.min(100, ((vitals?.stressIntegral || 0) / (getSpeciesCoefficients(vitals?.speciesId).maxStressTolerance || 1000)) * 100)}%` 
                   }}
                 />
               </div>
             </div>
          </div>
        </div>

        {/* Central Operations Area (Row 2-4, Cols 1-9) */}
        <div className="col-span-9 row-span-3 grid grid-cols-3 gap-4">
           {/* Anamnesis / History */}
           <div className="col-span-1 glass-panel border border-[#C89A3C]/30 rounded-2xl p-5 shadow-lg overflow-y-auto custom-scrollbar">
              <h3 className="text-sm font-black text-[#E8B84A] uppercase tracking-widest mb-3 border-b border-[#C89A3C]/20 pb-2">Anamnese</h3>
              <p className="text-xs text-slate-300 leading-relaxed italic">{caseData.historyText}</p>
              
              <div className="mt-4 space-y-2">
                <div className="bg-[#0E1713]/80 p-2 rounded-lg border border-slate-700/50 flex justify-between">
                  <span className="text-[10px] font-bold text-[#C89A3C] uppercase">TPC</span>
                  <span className="text-[10px] font-mono text-slate-200">{caseData.vitalSigns.crt}</span>
                </div>
                <div className="bg-[#0E1713]/80 p-2 rounded-lg border border-slate-700/50 flex justify-between">
                  <span className="text-[10px] font-bold text-[#C89A3C] uppercase">Mucosas</span>
                  <span className="text-[10px] text-slate-200">{caseData.vitalSigns.mucosa}</span>
                </div>
              </div>
           </div>

           {/* Actions Dashboard */}
           <div className="col-span-2 glass-panel border border-[#C89A3C]/30 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-black text-[#E8B84A] uppercase tracking-widest mb-4 border-b border-[#C89A3C]/20 pb-2 flex items-center gap-2">
                  <Search className="w-4 h-4" /> Módulos de Investigação
                </h3>
                <div className="grid grid-cols-2 gap-3">
                   <button 
                     onClick={() => { soundManager.playClick(); setActiveMinigame('palpation'); }}
                     className="p-4 rounded-xl bg-[#14261E] border border-emerald-900/50 hover:border-[#C89A3C] transition-colors flex items-center gap-3 group text-left"
                   >
                     <div className="w-10 h-10 rounded-lg bg-[#1C382B] flex items-center justify-center group-hover:bg-[#C89A3C]/20">
                       <Search className="w-5 h-5 text-emerald-400 group-hover:text-[#E8B84A]" />
                     </div>
                     <div>
                       <span className="block text-xs font-bold text-slate-200">Exame Físico</span>
                       <span className="block text-[10px] text-slate-500">Palpação Interativa</span>
                     </div>
                   </button>

                   {/* Lab Test Button — launches Hemogram minigame */}
                   {(caseData.evidenceData['ev_lab'] || caseData.evidenceData['ev_hemo']) && (
                     <button 
                       onClick={() => {
                         soundManager.playClick();
                         setActiveMinigame('hemogram');
                       }}
                       className={`p-4 rounded-xl border transition-colors flex items-center gap-3 group text-left ${
                         performedExams.includes('hemogram') || discoveredEvidences.includes('ev_lab') || discoveredEvidences.includes('ev_hemo')
                           ? 'bg-emerald-900/20 border-emerald-700/50'
                           : 'bg-[#14261E] border-emerald-900/50 hover:border-[#C89A3C]'
                       }`}
                     >
                       <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                         performedExams.includes('hemogram') || discoveredEvidences.includes('ev_lab') || discoveredEvidences.includes('ev_hemo') ? 'bg-emerald-900/30' : 'bg-[#1C382B] group-hover:bg-[#C89A3C]/20'
                       }`}>
                         {performedExams.includes('hemogram') || discoveredEvidences.includes('ev_lab') || discoveredEvidences.includes('ev_hemo') 
                           ? <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                           : <Activity className="w-5 h-5 text-green-400 group-hover:text-[#E8B84A]" />
                         }
                       </div>
                       <div>
                         <span className="block text-xs font-bold text-slate-200">Hemograma</span>
                         <span className="block text-[10px] text-slate-400">
                           {performedExams.includes('hemogram') ? '✅ Realizado (-R$ 80)' : 'Custo: R$ 80 • Análise Celular'}
                         </span>
                       </div>
                     </button>
                   )}
                   
                   {Object.values(caseData.complementaryExams || {}).map((exam) => {
                      const isDone = performedExams.includes(exam.id);
                      return (
                        <button 
                          key={exam.id}
                          onClick={() => {
                            setSelectedExamInfo(exam);
                            soundManager.playClick();
                            setActiveMinigame(exam.type === 'xray' ? 'xray' : 'ultrasound');
                          }}
                          className={`p-4 rounded-xl border transition-colors flex items-center gap-3 group text-left ${
                            isDone
                              ? 'bg-emerald-900/20 border-emerald-700/50'
                              : 'bg-[#14261E] border-emerald-900/50 hover:border-[#C89A3C]'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            isDone ? 'bg-emerald-900/30' : 'bg-[#1C382B] group-hover:bg-[#C89A3C]/20'
                          }`}>
                            {isDone ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            ) : (
                              <Activity className="w-5 h-5 text-emerald-400 group-hover:text-[#E8B84A]" />
                            )}
                          </div>
                          <div>
                            <span className="block text-xs font-bold text-slate-200">{exam.name}</span>
                            <span className="block text-[10px] text-slate-400">
                              {isDone ? `✅ Realizado (-R$ ${exam.cost})` : `Custo: R$ ${exam.cost}`}
                            </span>
                          </div>
                        </button>
                      );
                   })}

                   <button 
                     onClick={() => {
                       soundManager.playClick();
                       setActiveMinigame('pharmacology');
                     }}
                     className={`p-4 rounded-xl border transition-colors flex items-center gap-3 group text-left ${
                       administeredDrugs.length > 0
                         ? 'bg-cyan-950/30 border-cyan-700/50'
                         : 'bg-[#14261E] border-cyan-900/50 hover:border-cyan-400'
                     }`}
                   >
                     <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                       administeredDrugs.length > 0 ? 'bg-cyan-900/40' : 'bg-[#1C382B] group-hover:bg-cyan-950/60'
                     }`}>
                       <FlaskConical className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                     </div>
                     <div>
                       <span className="block text-xs font-bold text-slate-200">Mesa Farmacológica</span>
                       <span className="block text-[10px] text-slate-400">
                         {administeredDrugs.length > 0 ? `✅ ${administeredDrugs.length} fármaco(s) (-R$ ${administeredDrugs.length * 50})` : 'Custo: R$ 50/dose • Cálculo'}
                       </span>
                     </div>
                   </button>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800">
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Achados Clínicos Registrados</h4>
                <div className="flex flex-wrap gap-2">
                   {discoveredEvidences.length === 0 ? (
                      <span className="text-xs text-slate-600 italic">Nenhuma evidência registrada.</span>
                   ) : (
                      discoveredEvidences.map(evId => (
                         <div key={evId} className="px-3 py-1.5 rounded-md bg-[#1C382B] border border-[#C89A3C]/40 text-[10px] font-bold text-[#E8B84A] flex items-center gap-1">
                           <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                           {caseData.evidenceData[evId]?.text || evId}
                         </div>
                      ))
                   )}
                </div>
              </div>
           </div>
        </div>

        {/* Diagnostics & Treatment (Row 5-6, Cols 1-9) */}
        <div className="col-span-9 row-span-2 grid grid-cols-2 gap-4">
           {/* Hypothesis Selection */}
           <div className="glass-panel border border-[#C89A3C]/30 rounded-2xl p-4 shadow-lg overflow-hidden flex flex-col">
              <h3 className="text-sm font-black text-[#E8B84A] uppercase tracking-widest mb-3 flex items-center gap-2">
                <Brain className="w-4 h-4" /> Diagnóstico
              </h3>
              <div className="flex-1 flex flex-col justify-center items-center text-center p-4 bg-[#0E1713]/80 rounded-xl border border-slate-700/50">
                {selectedHypothesisId ? (
                   <>
                     <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-2" />
                     <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-1">Diagnóstico Confirmado</h4>
                     <p className="text-slate-300 text-xs">{caseData.hypotheses.find(h => h.id === selectedHypothesisId)?.title}</p>
                     <button 
                       onClick={() => { setActiveMinigame('diagnostic_board'); soundManager.playClick(); }}
                       className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-[10px] uppercase font-bold text-slate-400 transition-colors"
                     >
                       Revisar Quadro Clínico
                     </button>
                   </>
                ) : (
                   <>
                     <Brain className="w-12 h-12 text-slate-600 mb-4" />
                     <p className="text-slate-400 text-xs mb-4">Reúna evidências dos exames e vincule-as às hipóteses para confirmar o diagnóstico.</p>
                     <button 
                       onClick={() => { setActiveMinigame('diagnostic_board'); soundManager.playClick(); }}
                       className="px-6 py-3 bg-amber-600/20 hover:bg-amber-600/40 border border-amber-500/50 text-amber-400 rounded-xl font-bold uppercase tracking-widest text-xs transition-all shadow-[0_0_15px_rgba(245,158,11,0.15)]"
                     >
                       Abrir Quadro de Detetive
                     </button>
                   </>
                )}
              </div>
           </div>

           {/* Treatment Execution */}
           <div className="glass-panel border border-emerald-500/30 rounded-2xl p-4 shadow-lg flex flex-col justify-between items-center text-center bg-gradient-to-br from-[#0E1713] to-[#14261E]">
              <div className="mt-2">
                <div className="w-16 h-16 rounded-full bg-emerald-900/50 border border-emerald-500/50 flex items-center justify-center mx-auto mb-3 shadow-lg">
                   <Syringe className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-sm font-black text-emerald-400 uppercase tracking-widest">Bloco Operatório</h3>
                <p className="text-xs text-slate-400 mt-2 max-w-xs mx-auto">Após concluir a investigação e definir o diagnóstico, inicie a intervenção terapêutica.</p>
              </div>

              <div className="w-full flex flex-col gap-2">
                <button
                  onClick={() => { soundManager.playClick(); setActiveMinigame('pharmacology'); }}
                  className="w-full py-2 px-4 rounded-xl border border-cyan-700/50 bg-cyan-950/40 hover:bg-cyan-900/50 text-cyan-300 text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <FlaskConical className="w-4 h-4 text-cyan-400" />
                  {administeredDrugs.length > 0 ? `Farmacologia Pronta (${administeredDrugs.length})` : 'Ajustar Medicação & Doses'}
                </button>

                <button
                  disabled={!selectedHypothesisId}
                  onClick={() => { soundManager.playClick(); setActiveMinigame('treatment'); }}
                  className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 ${
                    selectedHypothesisId 
                    ? 'bg-gradient-to-r from-emerald-700 to-teal-600 border border-emerald-400 text-white gold-glow hover:scale-[1.02]' 
                    : 'bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <Syringe className="w-4 h-4" /> {selectedHypothesisId ? 'Iniciar Tratamento Cirúrgico' : 'Defina o Diagnóstico Primeiro'}
                </button>
              </div>
           </div>
        </div>

      </div>

      {/* Inline Minigame Overlays (Diegetic rendering over the grid) */}
      <AnimatePresence>
        {activeMinigame && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 z-50 p-6 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          >
            <div className="w-full h-full max-w-7xl relative">
              {activeMinigame === 'palpation' && (
                <PalpationMinigame caseData={caseData} onComplete={handlePalpationComplete} onClose={() => setActiveMinigame(null)} />
              )}
              {activeMinigame === 'xray' && selectedExamInfo && (
                <XRayMinigame caseData={caseData} examInfo={selectedExamInfo} onComplete={handleExamComplete} onClose={() => setActiveMinigame(null)} />
              )}
              {activeMinigame === 'ultrasound' && selectedExamInfo && (
                <UltrasoundMinigame caseData={caseData} examInfo={selectedExamInfo} onComplete={handleExamComplete} onClose={() => setActiveMinigame(null)} />
              )}
              {activeMinigame === 'treatment' && (
                <TreatmentMinigame
                  caseData={caseData}
                  unlockedUpgrades={careerState.unlockedUpgrades || []}
                  onComplete={handleTreatmentComplete}
                  onClose={() => setActiveMinigame(null)}
                />
              )}
              {activeMinigame === 'diagnostic_board' && (
                <DiagnosticBoardMinigame
                   hypotheses={caseData.hypotheses}
                   evidenceData={caseData.evidenceData}
                   discoveredEvidences={discoveredEvidences}
                   onDiagnose={(hypId) => {
                      setSelectedHypothesisId(hypId);
                      setActiveMinigame(null);
                   }}
                   onClose={() => setActiveMinigame(null)}
                />
              )}
              {activeMinigame === 'hemogram' && (
                <HemogramMinigame
                  caseData={caseData}
                  onComplete={(evidenceId) => {
                    setPerformedExams(prev => prev.includes('hemogram') ? prev : [...prev, 'hemogram']);
                    handleExamComplete(evidenceId);
                  }}
                  onClose={() => setActiveMinigame(null)}
                />
              )}
              {activeMinigame === 'pharmacology' && (
                <PharmacologyMinigame
                  patientWeightKg={caseData.weightKg || 5}
                  caseData={caseData}
                  onComplete={(drugId, _inputMl, toxicity, therapeuticEffect) => {
                    setAdministeredDrugs(prev => prev.includes(drugId) ? prev : [...prev, drugId]);
                    setVitals(prev => {
                      if (!prev) return prev;
                      const newBP = Math.max(15, prev.bloodPressureSystolic - toxicity * 6 + (therapeuticEffect > 0 ? 5 : 0));
                      return {
                        ...prev,
                        bloodPressureSystolic: newBP,
                        heartRate: Math.max(40, Math.min(240, prev.heartRate - (therapeuticEffect > 0 ? 10 : 0) + toxicity * 3)),
                        isAlive: newBP > 15 && toxicity < 60,
                      };
                    });
                    setActiveMinigame(null);
                  }}
                  onVitalsTick={(toxicity) => {
                    setVitals(prev => {
                      if (!prev) return prev;
                      return {
                        ...prev,
                        heartRate: Math.max(30, Math.min(250, prev.heartRate + toxicity * 2)),
                      };
                    });
                  }}
                  onCancel={() => setActiveMinigame(null)}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
         {caseFinished && vitals && (
            <ClinicalDischargeReport
              caseData={caseData}
              vitals={vitals}
              finalStars={finalStars}
              careerState={careerState}
              spentBudget={spentBudget}
              remainingCaseBudget={remainingCaseBudget}
              onSignDischarge={handleFinalizeProntuario}
            />
         )}
      </AnimatePresence>

      {/* Lethal Failure Screen */}
      {vitals && !vitals.isAlive && (
         <PostMortemReport 
           caseData={caseData} 
           vitals={vitals} 
           careerState={careerState} 
           onSignReport={(penalizedCareer) => onFinishCase(penalizedCareer, 0)} 
           onRestartSurgery={resetCase} 
         />
      )}

      {/* Modal de Confirmação de Reinício de Atendimento */}
      <AnimatePresence>
        {showResetConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 pointer-events-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0B1511] border border-amber-500/50 rounded-2xl p-6 max-w-md w-full shadow-2xl shadow-amber-950/40 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mx-auto mb-4 text-amber-400">
                <RotateCcw className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-amber-400 uppercase tracking-wider">
                Reiniciar Atendimento?
              </h3>
              <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                Deseja reiniciar a investigação deste paciente do zero? Todos os exames físicos, laboratoriais, imagens e prescrições deste caso serão reiniciados para que você possa refazer o diagnóstico.
              </p>
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowResetConfirm(false)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={() => {
                    resetCase();
                    setShowResetConfirm(false);
                    soundManager.playSuccess();
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-900/40 cursor-pointer"
                >
                  Confirmar Reinício
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vademecum UI */}
      <VademecumUI isOpen={isVademecumOpen} onClose={() => setIsVademecumOpen(false)} />
    </div>
  );
};
