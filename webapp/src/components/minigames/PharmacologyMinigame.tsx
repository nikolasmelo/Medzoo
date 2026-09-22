import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Syringe, BookOpen, AlertCircle, CheckCircle2, FlaskConical, X, Calculator, HelpCircle, FileText } from 'lucide-react';
import { DRUG_BOTTLES, VADEMECUM_ENTRIES, administerDrug } from '../../data/pharmacology';
import type { CaseData } from '../../types';
import { soundManager } from '../../utils/sound';

interface PharmacologyMinigameProps {
  patientWeightKg: number;
  caseData?: CaseData;
  onComplete: (drugId: string, inputMl: number, toxicity: number, therapeuticEffect: number) => void;
  onVitalsTick?: (toxicity: number, therapeuticEffect: number) => void;
  onCancel: () => void;
}

export const PharmacologyMinigame: React.FC<PharmacologyMinigameProps> = ({
  patientWeightKg,
  caseData,
  onComplete,
  onVitalsTick,
  onCancel
}) => {
  const [selectedDrug, setSelectedDrug] = useState<string | null>(null);
  const [inputVolume, setInputVolume] = useState<number>(0);
  const [rawVolumeInput, setRawVolumeInput] = useState<string>('0.00');
  const [isVademecumOpen, setIsVademecumOpen] = useState(false);

  // Precision volume formatter: displays 3 decimal places for fine exotic volumes (e.g. 0.075 mL)
  const formatVolume = (v: number): string => {
    if (Math.abs(v * 100 - Math.round(v * 100)) > 0.001) {
      return v.toFixed(3);
    }
    return v.toFixed(2);
  };

  const updateVolume = (val: number) => {
    const clamped = Math.max(0, Math.round(val * 1000) / 1000);
    setInputVolume(clamped);
    setRawVolumeInput(formatVolume(clamped));
  };
  const [feedback, setFeedback] = useState<{
    status: string;
    toxicity: number;
    correctMl: number;
    calculatedDoseMgKg: number;
    explanation: string;
  } | null>(null);

  // Derive Clinical Prescription based on case context
  const isReptileOrBird = () => {
    const name = (caseData?.speciesName || '').toLowerCase();
    const sci = (caseData?.scientificName || '').toLowerCase();
    return name.includes('sucuri') || name.includes('jacar') || name.includes('jiboia') ||
           name.includes('teiu') || name.includes('teiú') || name.includes('iguana') ||
           name.includes('tartaruga') || name.includes('jabuti') || name.includes('harpia') ||
           name.includes('coruja') || name.includes('arara') || name.includes('tucano') ||
           sci.includes('eunectes') || sci.includes('caiman') || sci.includes('salvator') ||
           sci.includes('harpia') || sci.includes('tyto') || sci.includes('athene');
  };

  // Derive Clinical Prescription based on case context
  const getPrescription = () => {
    const reason = caseData?.arrivalReason || 'Procedimento cirúrgico';
    const text = (reason + ' ' + (caseData?.historyText || '')).toLowerCase();

    if (text.includes('estomatite') || text.includes('purulent') || text.includes('infec') || text.includes('bicheira') || text.includes('miíase') || text.includes('necro')) {
      return {
        title: 'Profilaxia Antimicrobiana de Cobertura Sistêmica',
        instruction: 'Combate bacteriano com Enrofloxacina 5% (10 mg/kg): previne sepse e bacteremia por estomatite ou lesão infecciosa.',
        recommendedDrugId: 'enrofloxacin_05',
        category: 'antibiotic' as const,
        badge: 'Antimicrobiano de Amplo Espectro',
      };
    }

    if (patientWeightKg >= 10 && !isReptileOrBird()) {
      return {
        title: 'Analgesia e Anti-inflamatório (Grande Porte)',
        instruction: 'Controle de dor musculoesquelética aguda com Meloxicam 2% (0.2 mg/kg), seguro para mamíferos pesados.',
        recommendedDrugId: 'meloxicam_20',
        category: 'analgesic' as const,
        badge: 'Analgesia / AINE (2%)',
      };
    }

    return {
      title: 'Analgesia e Anti-inflamatório (Pequeno Porte / Aves / Répteis)',
      instruction: 'Analgesia preventiva com Meloxicam 0.2% (1.0 mg/kg): diluição segura para aves, répteis e pequenos silvestres.',
      recommendedDrugId: 'meloxicam_02',
      category: 'analgesic' as const,
      badge: 'Analgesia / AINE (0.2%)',
    };
  };

  const prescription = getPrescription();

  const activeBottle = selectedDrug ? DRUG_BOTTLES[selectedDrug] : null;
  const activeDoseEntry = selectedDrug ? VADEMECUM_ENTRIES.find(v => v.drugId === selectedDrug) : null;
  const theoreticalMl = (activeBottle && activeDoseEntry) 
    ? (patientWeightKg * activeDoseEntry.doseMgPerKg) / activeBottle.concentrationMgPerMl 
    : 0;

  const handleInject = () => {
    if (!selectedDrug || inputVolume <= 0 || !activeBottle || !activeDoseEntry) return;

    const totalMgAdministered = inputVolume * activeBottle.concentrationMgPerMl;
    const calculatedDoseMgKg = totalMgAdministered / patientWeightKg;

    // Active Clinical Decision Validation: check if the chosen bottle matches the clinical prescription & patient physiology
    const isBottleAppropriate = selectedDrug === prescription.recommendedDrugId;

    if (!isBottleAppropriate) {
      let bottleErrorExplanation = '';
      if ((selectedDrug === 'meloxicam_02' || selectedDrug === 'meloxicam_20') && prescription.category === 'antibiotic') {
        bottleErrorExplanation = `Erro de Classe Farmacológica: Você selecionou Meloxicam (AINE Anti-inflamatório). O quadro infeccioso de estomatite requer cobertura Antimicrobiana bactericida com Enrofloxacina 5% para combater os patógenos e prevenir sepse!`;
      } else if (selectedDrug === 'enrofloxacin_05' && prescription.category === 'analgesic') {
        bottleErrorExplanation = `Erro de Classe Farmacológica: Enrofloxacina é um antimicrobiano fluoroquinolona. Não possui efeito analgésico ou anti-inflamatório. A ordem médica requer analgesia e controle inflamatório (AINE).`;
      } else if (selectedDrug === 'atropine_1' || selectedDrug === 'epinephrine_1') {
        bottleErrorExplanation = `Erro Grave de Indicação: Fármacos cardiovasculares parassimpaticolíticos ou adrenérgicos só devem ser administrados em bradicardia extrema ou parada cardiorrespiratória (PCR). Seu uso eletivo induz fibrilação e colapso!`;
      } else if (selectedDrug === 'meloxicam_20' && (patientWeightKg < 10 || isReptileOrBird())) {
        bottleErrorExplanation = `Contraindicação Absoluta de Concentração: O Meloxicam 2% (20 mg/mL) destina-se exclusivamente a mamíferos de médio/grande porte. Em aves, répteis ou animais pequenos, a elevada concentração causa nefrotoxicidade fulminante e necrose papilar renal. Consulte o Vademecum e use a formulação diluída de 0.2% (2 mg/mL).`;
      } else if (selectedDrug === 'meloxicam_02' && patientWeightKg >= 10 && !isReptileOrBird()) {
        bottleErrorExplanation = `Inadequação de Concentração/Volume: O Meloxicam 0.2% (2 mg/mL) em mamíferos de grande porte (${patientWeightKg.toFixed(2)} kg) exigiria volume excessivo, gerando dor excruciante e miosite por distensão. Em mamíferos pesados, use a formulação concentrada a 2% (20 mg/mL).`;
      } else {
        bottleErrorExplanation = `Fármaco Incompatível: O frasco selecionado não atende à indicação clínica do prontuário para esta espécie. Consulte o Vademecum.`;
      }

      soundManager.playError();
      setFeedback({
        status: 'CONTRAINDICATED',
        toxicity: 45,
        correctMl: theoreticalMl,
        calculatedDoseMgKg,
        explanation: bottleErrorExplanation
      });

      if (onVitalsTick) {
        onVitalsTick(45 / 25, 0);
      }
      return;
    }

    const result = administerDrug(patientWeightKg, selectedDrug, inputVolume);

    let explanation = '';
    if (result.status === 'SUCCESS') {
      soundManager.playSuccess();
      explanation = `Dose posológica exata! ${formatVolume(inputVolume)} mL fornece ${totalMgAdministered.toFixed(3)} mg (${calculatedDoseMgKg.toFixed(3)} mg/kg). Cobertura terapêutica eficaz dentro da margem de segurança clínica.`;
    } else if (result.status === 'SUBDOSE') {
      soundManager.playError();
      explanation = `Subdose terapêutica: ${formatVolume(inputVolume)} mL fornece apenas ${calculatedDoseMgKg.toFixed(3)} mg/kg (dose alvo: ${activeDoseEntry.doseMgPerKg} mg/kg = ${formatVolume(result.correctMl)} mL). Concentração plasmática insuficiente para analgesia ou controle eficaz.`;
    } else {
      soundManager.playError();
      explanation = `Superdosagem / Toxicidade: ${formatVolume(inputVolume)} mL equivale a ${calculatedDoseMgKg.toFixed(3)} mg/kg (dose máxima recomendada: ${activeDoseEntry.doseMgPerKg} mg/kg = ${formatVolume(result.correctMl)} mL). Risco elevado de nefrotoxicidade e sobrecarga sistêmica!`;
    }

    setFeedback({
      status: result.status,
      toxicity: result.toxicity,
      correctMl: result.correctMl,
      calculatedDoseMgKg,
      explanation
    });

    // Real-time physiological effect injection
    let elapsed = 0;
    const interval = setInterval(() => {
       elapsed += 100;
       if (onVitalsTick) {
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
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-400">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#E8B84A] uppercase tracking-wider">Mesa de Preparo Farmacológico</h2>
            <p className="text-xs text-slate-400">Dosagem e aspiração de fármacos cirúrgicos</p>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <div className="px-3 py-1.5 bg-slate-900 rounded-xl border border-slate-700 text-xs font-mono text-cyan-400">
            Peso: <span className="font-bold text-white">{patientWeightKg.toFixed(2)} kg</span>
          </div>

          <button 
            onClick={() => setIsVademecumOpen(!isVademecumOpen)}
            className="flex items-center gap-2 px-3 py-1.5 bg-blue-900/40 hover:bg-blue-900/60 text-blue-300 border border-blue-700/50 rounded-xl text-xs font-bold transition-all"
          >
            <BookOpen className="w-4 h-4" /> Vademecum
          </button>

          {/* ✕ VOLTAR AO PROCEDIMENTO BUTTON */}
          <button
            onClick={onCancel}
            className="flex items-center gap-2 px-3.5 py-1.5 bg-rose-950/60 hover:bg-rose-900 text-rose-200 border border-rose-600/50 rounded-xl text-xs font-bold uppercase tracking-wider transition-all gold-glow"
          >
            <X className="w-4 h-4" />
            <span>Voltar ao Procedimento</span>
          </button>
        </div>
      </div>

      {/* MEDICAL PRESCRIPTION & PATIENT CHART BANNER */}
      <div className="bg-gradient-to-r from-[#14261D] via-[#101F17] to-[#0D1812] border-b border-emerald-800/40 p-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs shadow-inner">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 shrink-0 mt-0.5">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#E8B84A]/20 text-[#E8B84A] border border-[#E8B84A]/40 font-bold uppercase tracking-wider text-[10px]">
                Prontuário & Ordem Médica
              </span>
              <span className="text-slate-300 font-bold">
                {caseData?.speciesName || 'Paciente Silvestre'} ({patientWeightKg.toFixed(2)} kg)
              </span>
              <span className="text-slate-500 text-[11px] font-mono">
                • {caseData?.arrivalReason || 'Intervenção Cirúrgica'}
              </span>
            </div>
            <p className="text-emerald-300 font-bold text-sm mt-1">
              <span className="text-white font-black">{prescription.title}:</span> {prescription.instruction}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
          <span className="px-2.5 py-1 rounded-lg bg-emerald-950/80 border border-emerald-600/50 text-[11px] font-mono text-emerald-300 font-semibold flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#E8B84A]" />
            <span>Consulte o Vademecum para escolha e dosagem</span>
          </span>
        </div>
      </div>

      {/* CLINICAL GUIDANCE BANNER */}
      <div className="bg-[#182820] border-b border-emerald-900/50 px-4 py-2 flex items-center justify-between text-xs text-emerald-300">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong className="text-[#E8B84A]">Instrução Farmacológica:</strong> Analise o quadro clínico, identifique o fármaco e a concentração adequada para a espécie no Vademecum e calcule o volume da seringa.
          </span>
        </div>
        <span className="font-mono text-[10px] bg-emerald-950/80 border border-emerald-700/50 px-2 py-0.5 rounded text-emerald-200">
          V(mL) = [Peso × Dose] / Concentração
        </span>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {/* LEFT COLUMN: Drug Bottles */}
        <div className="w-1/3 border-r border-slate-800 p-4 overflow-y-auto space-y-3 bg-[#0A100D]">
          <h3 className="text-xs uppercase font-bold text-slate-500 mb-4 tracking-widest flex items-center justify-between">
            <span>Frascos Disponíveis</span>
            <span className="text-[10px] text-slate-600">5 opções</span>
          </h3>
          {Object.values(DRUG_BOTTLES).map(bottle => {
            return (
              <button
                key={bottle.drugId}
                onClick={() => {
                  setSelectedDrug(bottle.drugId);
                  setFeedback(null);
                  soundManager.playClick();
                }}
                className={`w-full text-left p-3 rounded-xl border transition-all relative ${
                  selectedDrug === bottle.drugId 
                    ? 'bg-slate-800 border-[#E8B84A] shadow-[0_0_15px_rgba(232,184,74,0.15)]' 
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-11 rounded-full ${bottle.bottleColor} shadow-inner shrink-0`}></div>
                  <div>
                    <h4 className={`font-bold text-sm ${selectedDrug === bottle.drugId ? 'text-[#E8B84A]' : 'text-slate-300'}`}>
                      {bottle.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">{bottle.description}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[10px] font-mono text-cyan-400 font-semibold">
                        {bottle.concentrationMgPerMl} mg/mL
                      </span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                        {bottle.category === 'analgesic' ? 'AINE' : bottle.category === 'antibiotic' ? 'Antibiótico' : 'Emergência'}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT COLUMN: Syringe Prep & Calculator */}
        <div className="w-2/3 p-6 flex flex-col justify-between items-center relative overflow-y-auto">
          
          {/* VADEMECUM OVERLAY */}
          <AnimatePresence>
            {isVademecumOpen && (
              <div className="absolute inset-0 z-20 flex justify-center items-end" style={{ perspective: '1200px' }}>
                <motion.div 
                  initial={{ y: "100%", rotateX: 30, opacity: 0 }}
                  animate={{ y: 0, rotateX: 0, opacity: 1 }}
                  exit={{ y: "100%", rotateX: 30, opacity: 0 }}
                  transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                  className="w-11/12 h-[95%] bg-[#EFECE6] border-2 border-[#8B7355] shadow-[0px_25px_50px_rgba(0,0,0,0.8)] rounded-t-sm flex flex-col relative"
                >
                  {/* Clipboard Clip */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-gradient-to-b from-gray-300 to-gray-500 border border-gray-600 rounded-md shadow-md flex items-center justify-center">
                    <div className="w-12 h-2 bg-gray-600 rounded-full"></div>
                  </div>

                  <div className="pt-8 p-4 border-b-2 border-[#8B7355]/30 flex justify-between items-center bg-[#EFECE6]/80 backdrop-blur-sm">
                    <div>
                      <h3 className="font-black text-2xl text-slate-800 tracking-tighter uppercase font-serif">Vademecum Veterinário</h3>
                      <p className="text-slate-600 text-xs font-mono">Tabela Posológica de Referência — Silvestres & Exóticos</p>
                    </div>
                    <button onClick={() => setIsVademecumOpen(false)} className="text-rose-700 font-bold hover:text-rose-900 px-4 py-2 border-2 border-rose-700/20 rounded-md text-xs uppercase">FECHAR</button>
                  </div>
                  
                  <div className="p-6 overflow-y-auto space-y-6">
                    {VADEMECUM_ENTRIES.map(entry => {
                      const bottle = DRUG_BOTTLES[entry.drugId];
                      const recMl = (patientWeightKg * entry.doseMgPerKg) / bottle.concentrationMgPerMl;
                      return (
                        <div key={entry.drugId} className="p-5 rounded-sm border shadow-sm relative transition-all bg-white border-slate-300">
                          <div className="absolute top-0 left-0 w-2 h-full bg-[#8B7355]"></div>
                          <div className="flex justify-between items-start ml-2 mb-2">
                            <div>
                              <h4 className="font-black text-slate-800 text-xl">{bottle.name}</h4>
                              <p className="text-xs text-slate-600 font-mono mt-0.5">{entry.indication}</p>
                            </div>
                            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded font-mono text-[11px] font-semibold">
                              {bottle.concentrationMgPerMl} mg/mL
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-3 ml-2 text-sm mt-3">
                            <div className="bg-slate-50 p-2.5 border border-slate-200">
                              <span className="text-slate-500 block text-[10px] uppercase font-bold">Posologia Alvo</span>
                              <span className="font-mono text-slate-900 font-bold text-base">{entry.doseMgPerKg} mg/kg</span>
                            </div>
                            <div className="bg-slate-50 p-2.5 border border-slate-200">
                              <span className="text-slate-500 block text-[10px] uppercase font-bold">Via de Aplicação</span>
                              <span className="font-mono text-slate-900 font-bold text-base">{entry.route}</span>
                            </div>
                            <div className="bg-amber-50 p-2.5 border border-amber-300">
                              <span className="text-amber-800 block text-[10px] uppercase font-black">Volume Guia ({patientWeightKg.toFixed(2)} kg)</span>
                              <span className="font-mono text-amber-900 font-extrabold text-base">{formatVolume(recMl)} mL</span>
                            </div>
                          </div>

                          <div className="mt-3 border-t border-dashed border-slate-200 pt-2 ml-2 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-slate-600 font-mono gap-1">
                            <span>Contraindicações: {entry.contraindications.join(', ')}</span>
                            <span className="font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                              Cálculo: ({patientWeightKg}kg × {entry.doseMgPerKg}mg/kg) ÷ {bottle.concentrationMgPerMl}mg/mL = {formatVolume(recMl)} mL
                            </span>
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
            <div className="text-center text-slate-500 flex flex-col items-center justify-center my-auto">
              <Syringe className="w-16 h-16 mb-4 opacity-20" />
              <p className="text-sm font-semibold">Selecione um frasco no painel à esquerda para preparar a seringa.</p>
            </div>
          ) : (
            <motion.div 
              key={selectedDrug}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-lg flex flex-col items-center space-y-4 my-auto"
            >
              {/* SELECTED BOTTLE INFO */}
              <div className="text-center bg-slate-900/80 border border-slate-800 p-4 rounded-2xl w-full">
                <h3 className="text-xl font-black text-white flex items-center justify-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${activeBottle?.bottleColor}`} />
                  {activeBottle?.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1">{activeBottle?.description}</p>

                {/* VETERINARY CALCULATOR HELP CARD */}
                {activeDoseEntry && activeBottle && (
                  <div className="mt-3 pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 text-[11px] text-left">
                    <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                      <span className="text-slate-500 block text-[9px] uppercase font-bold">Dose Terapêutica</span>
                      <span className="font-mono text-cyan-400 font-bold">{activeDoseEntry.doseMgPerKg} mg/kg</span>
                    </div>
                    <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                      <span className="text-slate-500 block text-[9px] uppercase font-bold">Concentração</span>
                      <span className="font-mono text-purple-400 font-bold">{activeBottle.concentrationMgPerMl} mg/mL</span>
                    </div>
                    <div className="col-span-2 bg-emerald-950/40 p-2 rounded-xl border border-emerald-500/30 flex justify-between items-center font-mono text-emerald-300">
                      <span className="flex items-center gap-1 text-[10px]">
                        <Calculator className="w-3.5 h-3.5 text-emerald-400" /> V(mL) = ({patientWeightKg} × {activeDoseEntry.doseMgPerKg}) / {activeBottle.concentrationMgPerMl}
                      </span>
                      <span className="font-extrabold text-xs text-emerald-400">{formatVolume(theoreticalMl)} mL</span>
                    </div>
                  </div>
                )}
              </div>

              {/* FEEDBACK DISPLAY */}
              {feedback ? (
                <div className={`p-5 rounded-2xl w-full text-center border space-y-2 ${
                  feedback.status === 'SUCCESS' ? 'bg-emerald-950/60 border-emerald-500/80 text-emerald-200' :
                  feedback.status === 'SUBDOSE' ? 'bg-amber-950/60 border-amber-500/80 text-amber-200' :
                  'bg-rose-950/60 border-rose-500/80 text-rose-200'
                }`}>
                  <div className="flex items-center justify-center gap-2">
                    {feedback.status === 'SUCCESS' && <CheckCircle2 className="w-8 h-8 text-emerald-400" />}
                    {feedback.status === 'SUBDOSE' && <AlertCircle className="w-8 h-8 text-amber-400" />}
                    {feedback.status === 'OVERDOSE' && <AlertCircle className="w-8 h-8 text-rose-400 animate-pulse" />}
                    
                    <h4 className={`text-lg font-black uppercase tracking-wider ${
                      feedback.status === 'SUCCESS' ? 'text-emerald-400' :
                      feedback.status === 'SUBDOSE' ? 'text-amber-400' :
                      'text-rose-400'
                    }`}>
                      {feedback.status === 'SUCCESS' ? 'Aplicação Correta' : feedback.status === 'SUBDOSE' ? 'Subdosagem' : 'Superdosagem / Toxicidade'}
                    </h4>
                  </div>

                  <p className="text-xs leading-relaxed font-sans">{feedback.explanation}</p>
                </div>
              ) : (
                /* SYRINGE ASPIRATION CONTROL */
                <div className="w-full bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-4">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">
                    Volume a Aspirar na Seringa (mL)
                  </label>
                  
                  {/* PRECISION MICRO-STEPPERS & FREE TYPING INPUT */}
                  <div className="flex items-center justify-center gap-1.5 flex-wrap">
                    <button 
                      onClick={() => updateVolume(inputVolume - 0.05)} 
                      className="px-2 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono font-bold text-xs border border-slate-700 active:scale-95 transition-all"
                      title="Diminuir 0.05 mL"
                    >
                      -0.05
                    </button>
                    <button 
                      onClick={() => updateVolume(inputVolume - 0.01)} 
                      className="px-2 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono font-bold text-xs border border-slate-700 active:scale-95 transition-all"
                      title="Diminuir 0.01 mL"
                    >
                      -0.01
                    </button>
                    <button 
                      onClick={() => updateVolume(inputVolume - 0.005)} 
                      className="px-2 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-amber-300 font-mono font-bold text-xs border border-amber-500/30 active:scale-95 transition-all"
                      title="Micro-ajuste: Diminuir 0.005 mL"
                    >
                      -0.005
                    </button>

                    <input 
                      type="number" 
                      value={rawVolumeInput} 
                      onChange={(e) => {
                        const str = e.target.value;
                        setRawVolumeInput(str);
                        const parsed = parseFloat(str);
                        if (!isNaN(parsed) && parsed >= 0) {
                          setInputVolume(parsed);
                        }
                      }}
                      onBlur={() => {
                        const parsed = parseFloat(rawVolumeInput);
                        if (isNaN(parsed) || parsed < 0) {
                          updateVolume(0);
                        } else {
                          updateVolume(parsed);
                        }
                      }}
                      step="0.001"
                      min="0"
                      max="50"
                      className="w-28 bg-slate-950 border-2 border-slate-700 rounded-xl text-center text-2xl font-mono text-[#E8B84A] focus:border-[#E8B84A] outline-none py-1.5"
                      placeholder="0.000"
                    />

                    <button 
                      onClick={() => updateVolume(inputVolume + 0.005)} 
                      className="px-2 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-amber-300 font-mono font-bold text-xs border border-amber-500/30 active:scale-95 transition-all"
                      title="Micro-ajuste: Aumentar 0.005 mL"
                    >
                      +0.005
                    </button>
                    <button 
                      onClick={() => updateVolume(inputVolume + 0.01)} 
                      className="px-2 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono font-bold text-xs border border-slate-700 active:scale-95 transition-all"
                      title="Aumentar 0.01 mL"
                    >
                      +0.01
                    </button>
                    <button 
                      onClick={() => updateVolume(inputVolume + 0.05)} 
                      className="px-2 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono font-bold text-xs border border-slate-700 active:scale-95 transition-all"
                      title="Aumentar 0.05 mL"
                    >
                      +0.05
                    </button>
                  </div>

                  {/* QUICK DOSING STEPPERS */}
                  <div className="flex justify-center gap-1.5 pt-1">
                    {[0.05, 0.075, 0.1, 0.25, 0.5, 1.0].map((val, idx) => (
                      <button
                        key={idx}
                        onClick={() => updateVolume(val)}
                        className={`px-2 py-1 rounded-lg text-[10px] font-mono border transition-all ${
                          Math.abs(inputVolume - val) < 0.001 
                            ? 'bg-[#E8B84A]/20 border-[#E8B84A] text-[#E8B84A] font-bold' 
                            : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                        }`}
                      >
                        {formatVolume(val)} mL
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button 
                      onClick={onCancel}
                      className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      Cancelar
                    </button>
                    <button 
                      onClick={handleInject}
                      disabled={inputVolume <= 0}
                      className="flex-1 py-3 bg-[#C89A3C] hover:bg-[#E8B84A] disabled:opacity-40 text-slate-950 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex justify-center items-center gap-2 gold-glow"
                    >
                      <Syringe className="w-4 h-4" /> Aplicar Fármaco
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
