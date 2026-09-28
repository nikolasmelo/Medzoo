// src/learning/labs/VitalMonitorSimulator.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Heart,
  Wind,
  Thermometer,
  AlertTriangle,
  CheckCircle2,
  Volume2,
  VolumeX,
  Sparkles,
  RefreshCw,
  Flame,
  Syringe
} from 'lucide-react';
import { soundManager } from '../../utils/sound';

interface VitalMonitorConfig {
  patientSpecies: string;
  patientWeightKg: number;
  baselineHR: number;
  baselineSpO2: number;
  baselineRR: number;
  baselineTemp: number;
  initialIsoflurane?: number;
  scenarioCrisis?: 'severe_bradycardia_apnea' | 'capture_shock' | 'general_anesthesia';
}

interface VitalMonitorSimulatorProps {
  config: VitalMonitorConfig;
  onObjectiveAchieved: () => void;
  isCompleted?: boolean;
  onOpenTutor?: (contextPrompt?: string) => void;
}

export const VitalMonitorSimulator: React.FC<VitalMonitorSimulatorProps> = ({
  config,
  onObjectiveAchieved,
  isCompleted = false,
  onOpenTutor,
}) => {
  // Estado dos parâmetros vitais em tempo real
  const [hr, setHr] = useState<number>(config.baselineHR);
  const [spo2, setSpo2] = useState<number>(config.baselineSpO2);
  const [rr, setRr] = useState<number>(config.baselineRR);
  const [temp, setTemp] = useState<number>(config.baselineTemp);
  const [isoflurane, setIsoflurane] = useState<number>(config.initialIsoflurane ?? 3.0);
  const [isHeatingOn, setIsHeatingOn] = useState<boolean>(false);
  const [alarmMuted, setAlarmMuted] = useState<boolean>(false);
  const [lastAction, setLastAction] = useState<string>('Monitor ligado. Aguardando estabilização clínica.');
  const [hasAchievedSuccess, setHasAchievedSuccess] = useState<boolean>(isCompleted);
  const [selectedDrug, setSelectedDrug] = useState<'atropina' | 'epinefrina' | 'doxapram'>('atropina');

  // Determinar limites críticos com base na espécie
  const isBird = config.patientSpecies.toLowerCase().includes('arara') || config.patientSpecies.toLowerCase().includes('tucano');
  const isReptile = config.patientSpecies.toLowerCase().includes('jabuti') || config.patientSpecies.toLowerCase().includes('jiboia');

  const minSafeHR = isBird ? 220 : isReptile ? 18 : 65;
  const maxSafeHR = isBird ? 420 : isReptile ? 45 : 130;
  const minSafeSpO2 = isReptile ? 84 : 91;

  // Status de alarme
  const isApnea = rr === 0;
  const isBradycardia = hr < minSafeHR;
  const isTachycardia = hr > maxSafeHR;
  const isHypoxia = spo2 < minSafeSpO2;
  const isEmergency = isApnea || isBradycardia || isTachycardia || isHypoxia;

  // Canvas de formas de onda (ECG e Oximetria)
  const ecgCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const plethCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Loop de simulação fisiológica a cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      // 1. Efeito do Isoflurano na Respiração e Coração
      setRr((prevRr) => {
        if (isoflurane >= 2.5) {
          // Isoflurano alto deprime o bulbo até apneia completa
          return Math.max(0, prevRr - 3);
        } else if (isoflurane === 0) {
          // Isoflurano desligado restaura drive aos poucos se oxigenado
          return Math.min(config.baselineRR, prevRr + 2);
        } else {
          return Math.min(config.baselineRR - 4, Math.max(4, prevRr + 1));
        }
      });

      // 2. Oximetria de pulso (SpO2) decai se apneia persistir
      setSpo2((prevSpo2) => {
        if (rr === 0) {
          return Math.max(68, prevSpo2 - 2);
        } else if (rr > 10 && isoflurane < 2.0) {
          return Math.min(config.baselineSpO2, prevSpo2 + 1);
        }
        return prevSpo2;
      });

      // 3. Frequência Cardíaca acompanha hipóxia e depressão anestésica
      setHr((prevHr) => {
        if (isoflurane >= 3.0 || spo2 < 80) {
          return Math.max(isBird ? 90 : 10, prevHr - 6);
        } else if (isoflurane <= 1.0 && spo2 > 90) {
          return Math.min(config.baselineHR, prevHr + 4);
        }
        return prevHr;
      });

      // 4. Efeito do aquecimento na temperatura
      setTemp((prevTemp) => {
        if (isHeatingOn) {
          return Math.min(config.baselineTemp, +(prevTemp + 0.05).toFixed(1));
        } else {
          return Math.max(34.0, +(prevTemp - 0.02).toFixed(1));
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isoflurane, rr, spo2, isHeatingOn, config.baselineHR, config.baselineRR, config.baselineSpO2, config.baselineTemp, isBird]);

  // Verificar condição de estabilização do paciente
  useEffect(() => {
    if (
      !hasAchievedSuccess &&
      hr >= minSafeHR &&
      spo2 >= minSafeSpO2 &&
      rr >= (isReptile ? 5 : 16) &&
      isoflurane <= 1.5
    ) {
      setHasAchievedSuccess(true);
      soundManager.playSuccess();
      onObjectiveAchieved();
    }
  }, [hr, spo2, rr, isoflurane, minSafeHR, minSafeSpO2, isReptile, hasAchievedSuccess, onObjectiveAchieved]);

  // Animação de traçados gráficos (ECG em verde, Pleth em ciano)
  useEffect(() => {
    let t = 0;
    const render = () => {
      t += 0.08;

      // Desenhar ECG
      if (ecgCanvasRef.current) {
        const canvas = ecgCanvasRef.current;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#020617';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // Grade de monitor médico
          ctx.strokeStyle = '#0f172a';
          ctx.lineWidth = 1;
          for (let x = 0; x < canvas.width; x += 15) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
          }
          for (let y = 0; y < canvas.height; y += 15) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
          }

          // Traçado de ECG
          ctx.strokeStyle = isEmergency ? '#ef4444' : '#10b981';
          ctx.lineWidth = 2;
          ctx.beginPath();

          const pulseFactor = Math.max(0.5, hr / 100);
          for (let x = 0; x < canvas.width; x++) {
            const phase = (x * 0.05 * pulseFactor - t) % (Math.PI * 2);
            let y = canvas.height / 2;

            // Simulação de complexo QRS
            if (phase > 2.0 && phase < 2.2) {
              y -= 25; // R peak
            } else if (phase > 2.2 && phase < 2.3) {
              y += 10; // S wave
            } else if (phase > 1.8 && phase < 2.0) {
              y -= 4; // P wave
            } else if (phase > 2.5 && phase < 2.8) {
              y -= 7; // T wave
            }

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      }

      // Desenhar Pleth / SpO2
      if (plethCanvasRef.current) {
        const canvas = plethCanvasRef.current;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#020617';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          ctx.strokeStyle = isHypoxia ? '#f59e0b' : '#06b6d4';
          ctx.lineWidth = 2;
          ctx.beginPath();

          const amp = (spo2 / 100) * 16;
          for (let x = 0; x < canvas.width; x++) {
            const y = canvas.height / 2 + Math.sin(x * 0.06 - t * 0.8) * amp;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [hr, spo2, isEmergency, isHypoxia]);

  // Ações de emergência
  const handleCutIsoflurane = () => {
    soundManager.playClick();
    setIsoflurane(0);
    setLastAction('🚨 Vaporizador cortado para 0% (Oxigênio puro a 100% ativado)!');
  };

  const handleVentilateIPPV = () => {
    soundManager.playClick();
    setRr((prev) => Math.min(config.baselineRR, prev + 6));
    setSpo2((prev) => Math.min(100, prev + 4));
    setLastAction('💨 Ventilação manual assistida (IPPV) executada! Pressão de pico respeitada.');
  };

  const handleAdministerDrug = () => {
    soundManager.playClick();
    if (selectedDrug === 'atropina') {
      setHr((prev) => Math.min(config.baselineHR, prev + 65));
      setLastAction('💉 Sulfato de Atropina administrado! Bloqueio muscarínico elevando FC.');
    } else if (selectedDrug === 'epinefrina') {
      setHr((prev) => Math.min(config.baselineHR + 40, prev + 110));
      setSpo2((prev) => Math.min(100, prev + 3));
      setLastAction('⚡ Epinefrina 1:10.000 administrada! Estímulo inotrópico e cronotrópico agudo.');
    } else if (selectedDrug === 'doxapram') {
      setRr((prev) => Math.min(config.baselineRR, prev + 12));
      setLastAction('🫁 Doxapram administrado! Estimulação quimiorreceptora bulbar reativando respiração.');
    }
  };

  const handleAskTutorHelp = () => {
    soundManager.playClick();
    const prompt = `Dra. Millena, estou no simulador com um(a) ${config.patientSpecies} (${config.patientWeightKg} kg). Parâmetros atuais: FC = ${hr} bpm, SpO2 = ${spo2}%, FR = ${rr} mpm, Isoflurano = ${isoflurane.toFixed(1)}%. O que devo priorizar para reverter este quadro?`;
    onOpenTutor?.(prompt);
  };

  const handleResetSimulator = () => {
    soundManager.playClick();
    setHr(config.baselineHR);
    setSpo2(config.baselineSpO2);
    setRr(config.baselineRR);
    setTemp(config.baselineTemp);
    setIsoflurane(config.initialIsoflurane ?? 3.0);
    setIsHeatingOn(false);
    setLastAction('Monitor reiniciado para o ponto de partida do caso clínico.');
    setHasAchievedSuccess(false);
  };

  return (
    <div className="w-full bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-sans text-white">
      {/* BARRA SUPERIOR DO MONITOR CIRÚRGICO */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Monitor Anestésico Multiparamétrico — {config.patientSpecies} ({config.patientWeightKg} kg)
            </span>
            <div className="text-[11px] text-slate-400">
              Módulo: Fisiologia & Intercorrências Anestésicas de Fauna Silvestre
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setAlarmMuted(!alarmMuted)}
            className={`p-2 rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer border ${
              alarmMuted
                ? 'bg-amber-950/60 border-amber-600/40 text-amber-300'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
            }`}
            title="Silenciar alarmes sonoros"
          >
            {alarmMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span>{alarmMuted ? 'Alarme Silenciado' : 'Áudio Ativo'}</span>
          </button>

          <button
            onClick={handleResetSimulator}
            className="p-2 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
            title="Reiniciar Simulação"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* BANNER DE ALARME DE CRISE */}
      {isEmergency && (
        <div className="bg-red-950/80 border-b border-red-700 px-4 py-2 flex items-center justify-between text-xs text-red-200 animate-pulse">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
            <span className="font-bold">
              ALARME CRÍTICO:{' '}
              {isApnea ? 'APNEIA DETECTADA! ' : ''}
              {isBradycardia ? `BRADICARDIA CRÍTICA (< ${minSafeHR} bpm)! ` : ''}
              {isHypoxia ? `HIPOXEMIA GRAVE (SpO2 < ${minSafeSpO2}%)! ` : ''}
            </span>
          </div>
          <span className="text-[11px] font-mono text-red-300">INTERVENHA IMEDIATAMENTE</span>
        </div>
      )}

      {/* PAINEL CENTRAL DO MONITOR: TRAÇADOS E LEITURAS DIGITAIS */}
      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* COLUNA ESQUERDA: FORMAS DE ONDA GRÁFICAS */}
        <div className="lg:col-span-2 space-y-4">
          {/* TRAÇADO ECG */}
          <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 shadow-inner">
            <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 mb-1">
              <span className="flex items-center gap-1.5 font-bold">
                <Heart className="w-3.5 h-3.5" /> ECG DERIVAÇÃO II (50 mm/s)
              </span>
              <span>1 mV/cm</span>
            </div>
            <canvas ref={ecgCanvasRef} width={500} height={90} className="w-full rounded-lg" />
          </div>

          {/* TRAÇADO SPO2 / PLETH */}
          <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 shadow-inner">
            <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 mb-1">
              <span className="flex items-center gap-1.5 font-bold">
                <Activity className="w-3.5 h-3.5" /> PLETISMOGRAFIA ÓPTICA (SpO2)
              </span>
              <span>Onda de Pulso Periférico</span>
            </div>
            <canvas ref={plethCanvasRef} width={500} height={70} className="w-full rounded-lg" />
          </div>

          {/* LOG DE AÇÕES EXECUTADAS */}
          <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
            <span className="text-emerald-400 font-bold">LOG:</span>
            <span className="truncate">{lastAction}</span>
          </div>
        </div>

        {/* COLUNA DIREITA: LEITURAS DIGITAIS (DIGITAL DISPLAY) */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
          {/* FC / HEART RATE */}
          <div
            className={`p-4 rounded-xl border transition-all ${
              isBradycardia
                ? 'bg-red-950/40 border-red-500/60 text-red-400 animate-pulse'
                : 'bg-slate-900/80 border-slate-800 text-emerald-400'
            }`}
          >
            <div className="flex items-center justify-between text-xs uppercase font-bold text-slate-400">
              <span className="flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 text-emerald-400" /> FC / HR
              </span>
              <span className="text-[10px] font-mono text-slate-500">bpm</span>
            </div>
            <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight mt-1">{hr}</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Seguro: &gt; {minSafeHR} bpm</div>
          </div>

          {/* SPO2 / OXIMETRIA */}
          <div
            className={`p-4 rounded-xl border transition-all ${
              isHypoxia
                ? 'bg-amber-950/40 border-amber-500/60 text-amber-400 animate-pulse'
                : 'bg-slate-900/80 border-slate-800 text-cyan-400'
            }`}
          >
            <div className="flex items-center justify-between text-xs uppercase font-bold text-slate-400">
              <span className="flex items-center gap-1">
                <Activity className="w-3.5 h-3.5 text-cyan-400" /> SpO2
              </span>
              <span className="text-[10px] font-mono text-slate-500">%</span>
            </div>
            <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight mt-1">{spo2}%</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Alvo: &ge; {minSafeSpO2}%</div>
          </div>

          {/* FR / RESPIRAÇÃO */}
          <div
            className={`p-4 rounded-xl border transition-all ${
              isApnea
                ? 'bg-red-950/40 border-red-500/60 text-red-400 animate-pulse'
                : 'bg-slate-900/80 border-slate-800 text-yellow-400'
            }`}
          >
            <div className="flex items-center justify-between text-xs uppercase font-bold text-slate-400">
              <span className="flex items-center gap-1">
                <Wind className="w-3.5 h-3.5 text-yellow-400" /> FR / RR
              </span>
              <span className="text-[10px] font-mono text-slate-500">mpm</span>
            </div>
            <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight mt-1">
              {rr === 0 ? 'APNEIA' : rr}
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">Normal: {config.baselineRR} mpm</div>
          </div>

          {/* TEMPERATURA */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-orange-300">
            <div className="flex items-center justify-between text-xs uppercase font-bold text-slate-400">
              <span className="flex items-center gap-1">
                <Thermometer className="w-3.5 h-3.5 text-orange-400" /> TEMP
              </span>
              <span className="text-[10px] font-mono text-slate-500">°C</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono tracking-tight mt-1">{temp.toFixed(1)}°C</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Alvo: {config.baselineTemp.toFixed(1)}°C</div>
          </div>
        </div>
      </div>

      {/* PAINEL DE CONTROLE DE INTERVENÇÃO CLÍNICA DE EMERGÊNCIA */}
      <div className="bg-slate-900 border-t border-slate-800 p-4 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400" /> Painel de Intervenção e Reanimação
          </span>
          <button
            onClick={handleAskTutorHelp}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Pedir Socorro à Dra. Millena
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* CONTROLE 1: VAPORIZADOR ISOFLURANO */}
          <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-300 font-semibold">Vaporizador de Isoflurano:</span>
              <span className="font-mono text-amber-300 font-bold">{isoflurane.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="5.0"
              step="0.5"
              value={isoflurane}
              onChange={(e) => setIsoflurane(parseFloat(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <button
              onClick={handleCutIsoflurane}
              className="w-full py-1.5 px-3 rounded-lg text-xs font-bold bg-red-600 hover:bg-red-500 text-white shadow-xs transition-colors cursor-pointer"
            >
              CORTAR PARA 0% (O2 Puro a 100%)
            </button>
          </div>

          {/* CONTROLE 2: VENTILAÇÃO MANUAL IPPV */}
          <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-2 flex flex-col justify-between">
            <div>
              <span className="text-xs text-slate-300 font-semibold">Ventilação Manual (IPPV):</span>
              <p className="text-[11px] text-slate-400 mt-1">
                Pressione o balão a cada 3-5s para reverter a hipóxia sem romper sacos aéreos.
              </p>
            </div>
            <button
              onClick={handleVentilateIPPV}
              className="w-full py-2 px-3 rounded-lg text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white shadow-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Wind className="w-3.5 h-3.5" />
              Pulsar Balão Respiratório (IPPV)
            </button>
          </div>

          {/* CONTROLE 3: FARMÁCIA DE EMERGÊNCIA & AQUECIMENTO */}
          <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-semibold">Farmácia de Resgate:</span>
              <button
                onClick={() => setIsHeatingOn(!isHeatingOn)}
                className={`px-2 py-0.5 rounded text-[10px] font-semibold flex items-center gap-1 cursor-pointer ${
                  isHeatingOn ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Flame className="w-3 h-3" />
                {isHeatingOn ? 'Colchão Térmico: LIGADO' : 'Ligar Colchão Térmico'}
              </button>
            </div>

            <div className="flex gap-1.5">
              <select
                value={selectedDrug}
                onChange={(e) => setSelectedDrug(e.target.value as any)}
                className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-2 py-1.5 text-xs text-slate-200"
              >
                <option value="atropina">Atropina (Bradicardia sinusal)</option>
                <option value="epinefrina">Epinefrina 1:10.000 (PCR)</option>
                <option value="doxapram">Doxapram (Drive respiratório)</option>
              </select>
              <button
                onClick={handleAdministerDrug}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer flex items-center gap-1"
              >
                <Syringe className="w-3.5 h-3.5" /> Aplicar
              </button>
            </div>
          </div>
        </div>

        {/* FEEDBACK DE SUCESSO QUANDO ESTABILIZADO */}
        <AnimatePresence>
          {hasAchievedSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-950/80 border border-emerald-500/60 p-4 rounded-xl flex items-center justify-between gap-4 text-emerald-200"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-bold text-sm text-white">
                    🎯 Paciente Estabilizado com Sucesso Clínico!
                  </div>
                  <div className="text-xs text-emerald-300">
                    Você cortou a sobredose anestésica, restabeleceu a ventilação alveolar com IPPV e recuperou a SpO2 acima de {minSafeSpO2}%. O objetivo da simulação foi alcançado!
                  </div>
                </div>
              </div>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold shadow-md shrink-0">
                Objetivo Concluído
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
