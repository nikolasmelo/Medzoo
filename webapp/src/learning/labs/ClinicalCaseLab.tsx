// src/learning/labs/ClinicalCaseLab.tsx
import React, { useState } from 'react';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Award,
  Bot,
  CheckCircle2,
  FileSpreadsheet,
  HeartPulse,
  Info,
  RefreshCw,
  Stethoscope,
  Thermometer,
  XCircle,
} from 'lucide-react';
import type { ClinicalCaseLabConfig } from '../types/learning';

interface ClinicalCaseLabProps {
  config: ClinicalCaseLabConfig;
  onObjectiveAchieved?: () => void;
  isCompleted?: boolean;
  onOpenTutor?: () => void;
}

export const ClinicalCaseLab: React.FC<ClinicalCaseLabProps> = ({
  config,
  onObjectiveAchieved,
  isCompleted = false,
  onOpenTutor,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [activeExamTab, setActiveExamTab] = useState<number>(0);
  const [simulatedVitals, setSimulatedVitals] = useState(config.vitals);
  const [outcomeState, setOutcomeState] = useState<'pending' | 'stabilized' | 'worsened' | 'suboptimal'>('pending');

  const selectedOption = config.decisionOptions.find((opt) => opt.id === selectedOptionId);

  const handleSelectOption = (optionId: string) => {
    setSelectedOptionId(optionId);
    const option = config.decisionOptions.find((opt) => opt.id === optionId);
    if (!option) return;

    if (option.physiologicalOutcome === 'stabilized') {
      setOutcomeState('stabilized');
      // Normalização ou melhora dos sinais vitais
      setSimulatedVitals({
        ...config.vitals,
        mucousMembranes: 'Normocoradas / Rosadas',
        capillaryRefillTimeSec: 1.5,
      });
      if (onObjectiveAchieved) {
        onObjectiveAchieved();
      }
    } else if (option.physiologicalOutcome === 'worsened') {
      setOutcomeState('worsened');
      // Piora dos sinais vitais simulados
      setSimulatedVitals({
        ...config.vitals,
        heartRateBpm: Math.round(config.vitals.heartRateBpm * 1.25),
        capillaryRefillTimeSec: 3.5,
        mucousMembranes: 'Cianóticas / Pálidas',
      });
    } else {
      setOutcomeState('suboptimal');
    }
  };

  const handleReset = () => {
    setSelectedOptionId(null);
    setSimulatedVitals(config.vitals);
    setOutcomeState('pending');
  };

  return (
    <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-4 sm:p-6 shadow-2xl text-slate-100 space-y-6">
      {/* CABEÇALHO DO PRONTUÁRIO */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-500/30">
              Prontuário Clínico & Decisão Terapêutica
            </span>
            {isCompleted && (
              <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/40">
                <CheckCircle2 className="w-3.5 h-3.5" /> Caso Solucionado
              </span>
            )}
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
            <Stethoscope className="w-6 h-6 text-emerald-400" />
            {config.caseTitle}
          </h2>
        </div>

        {onOpenTutor && (
          <button
            onClick={onOpenTutor}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-900/40 hover:bg-purple-900/60 text-purple-200 border border-purple-500/40 text-xs font-semibold transition"
          >
            <Bot className="w-4 h-4 text-purple-400" />
            Consultar Dra. Millena
          </button>
        )}
      </div>

      {/* DADOS DO PACIENTE & SINAIS VITAIS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* IDENTIFICAÇÃO DO PACIENTE */}
        <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Identificação do Paciente</div>
            <div className="text-lg font-bold text-white mb-1">{config.patient.name}</div>
            <div className="text-sm text-slate-300">
              <span className="font-semibold text-emerald-400">{config.patient.species}</span> ({config.patient.breed})
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Idade: <span className="text-slate-200">{config.patient.age}</span> • Peso: <span className="text-slate-200">{config.patient.weightKg} kg</span>
            </div>
            {config.patient.habitatOrEnvironment && (
              <div className="text-xs text-slate-400 mt-1">
                Ambiente/Origem: <span className="text-slate-200">{config.patient.habitatOrEnvironment}</span>
              </div>
            )}
          </div>
        </div>

        {/* MONITOR DE SINAIS VITAIS */}
        <div className="lg:col-span-2 bg-slate-950/80 rounded-xl p-4 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-emerald-400" /> Sinais Vitais no Momento da Admissão
            </span>
            {outcomeState === 'stabilized' && (
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Parâmetros em Normalização
              </span>
            )}
            {outcomeState === 'worsened' && (
              <span className="text-xs font-bold text-red-400 flex items-center gap-1 animate-pulse">
                <AlertTriangle className="w-3.5 h-3.5" /> Descompensação Iatrogênica
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div className="bg-slate-900/90 rounded-lg p-2.5 border border-slate-800 text-center">
              <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400 mb-0.5">
                <HeartPulse className="w-3.5 h-3.5 text-rose-400" /> Freq. Cardíaca
              </div>
              <div className={`text-base sm:text-lg font-black ${outcomeState === 'worsened' ? 'text-red-400' : outcomeState === 'stabilized' ? 'text-emerald-400' : 'text-white'}`}>
                {simulatedVitals.heartRateBpm} <span className="text-xs font-normal text-slate-400">bpm</span>
              </div>
            </div>

            <div className="bg-slate-900/90 rounded-lg p-2.5 border border-slate-800 text-center">
              <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400 mb-0.5">
                <Activity className="w-3.5 h-3.5 text-sky-400" /> Freq. Respiratória
              </div>
              <div className="text-base sm:text-lg font-black text-white">
                {simulatedVitals.respiratoryRateRpm} <span className="text-xs font-normal text-slate-400">mpm</span>
              </div>
            </div>

            <div className="bg-slate-900/90 rounded-lg p-2.5 border border-slate-800 text-center">
              <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400 mb-0.5">
                <Thermometer className="w-3.5 h-3.5 text-amber-400" /> Temp. Retal
              </div>
              <div className="text-base sm:text-lg font-black text-white">
                {simulatedVitals.temperatureCelsius.toFixed(1)} <span className="text-xs font-normal text-slate-400">°C</span>
              </div>
            </div>

            <div className="bg-slate-900/90 rounded-lg p-2.5 border border-slate-800 text-center">
              <div className="text-[11px] text-slate-400 mb-0.5">TPC & Mucosas</div>
              <div className="text-xs font-bold text-white truncate" title={simulatedVitals.mucousMembranes}>
                {simulatedVitals.capillaryRefillTimeSec}s • {simulatedVitals.mucousMembranes.split('/')[0]}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ANAMNESE CLÍNICA */}
      <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800/80">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
          <Info className="w-4 h-4 text-emerald-400" /> Histórico Clínico & Queixa Principal
        </div>
        <p className="text-sm leading-relaxed text-slate-200">{config.anamnesis}</p>
      </div>

      {/* EXAMES COMPLEMENTARES COM ABAS */}
      {config.exams && config.exams.length > 0 && (
        <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800">
          <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2 flex-wrap gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <FileSpreadsheet className="w-4 h-4 text-sky-400" /> Exames Complementares & Achados Diagnósticos
            </span>

            <div className="flex items-center gap-1.5 overflow-x-auto">
              {config.exams.map((exam, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveExamTab(idx)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                    activeExamTab === idx
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {exam.title}
                </button>
              ))}
            </div>
          </div>

          {config.exams[activeExamTab] && (
            <div className="space-y-3">
              <p className="text-sm text-slate-300 leading-relaxed">
                {config.exams[activeExamTab].findings}
              </p>

              {config.exams[activeExamTab].abnormalValues && (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400">
                        <th className="py-1.5 px-2">Parâmetro</th>
                        <th className="py-1.5 px-2">Resultado Encontrado</th>
                        <th className="py-1.5 px-2">Faixa de Referência</th>
                        <th className="py-1.5 px-2 text-right">Interpretação</th>
                      </tr>
                    </thead>
                    <tbody>
                      {config.exams[activeExamTab].abnormalValues.map((item, i) => (
                        <tr key={i} className="border-b border-slate-800/40 hover:bg-slate-900/40">
                          <td className="py-1.5 px-2 font-medium text-slate-200">{item.parameter}</td>
                          <td className="py-1.5 px-2 font-mono font-bold text-white">{item.value}</td>
                          <td className="py-1.5 px-2 text-slate-400 font-mono">{item.reference}</td>
                          <td className="py-1.5 px-2 text-right">
                            {item.status === 'critical' ? (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-950 text-rose-300 border border-rose-500/40">Crítico</span>
                            ) : item.status === 'high' ? (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-500/40">Elevado</span>
                            ) : (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-950 text-blue-300 border border-blue-500/40">Abaixo</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* DESAFIO DE DECISÃO CLÍNICA */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
            <Award className="w-4 h-4" /> {config.challengePrompt}
          </h3>
          {selectedOptionId && (
            <button
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 transition"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Tentar outra conduta
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {config.decisionOptions.map((option) => {
            const isSelected = selectedOptionId === option.id;
            let cardStyle = 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80';

            if (isSelected) {
              if (option.physiologicalOutcome === 'stabilized') {
                cardStyle = 'bg-emerald-950/40 border-emerald-500 shadow-lg shadow-emerald-950/40';
              } else if (option.physiologicalOutcome === 'worsened') {
                cardStyle = 'bg-rose-950/40 border-rose-500 shadow-lg shadow-rose-950/40';
              } else {
                cardStyle = 'bg-amber-950/40 border-amber-500';
              }
            }

            return (
              <button
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                className={`text-left p-4 rounded-xl border transition-all ${cardStyle} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-bold text-white">{option.label}</span>
                    {isSelected && option.physiologicalOutcome === 'stabilized' && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    )}
                    {isSelected && option.physiologicalOutcome === 'worsened' && (
                      <XCircle className="w-4 h-4 text-rose-400" />
                    )}
                    {isSelected && option.physiologicalOutcome === 'suboptimal' && (
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                    )}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{option.description}</p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-end text-[11px] font-semibold text-emerald-400/80">
                  Selecionar Conduta <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* FEEDBACK FISIOPATOLÓGICO & CADEIA CAUSAL */}
      {selectedOption && (
        <div
          className={`p-4 sm:p-5 rounded-xl border transition-all animate-fadeIn ${
            selectedOption.physiologicalOutcome === 'stabilized'
              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-100'
              : selectedOption.physiologicalOutcome === 'worsened'
              ? 'bg-rose-950/40 border-rose-500/40 text-rose-100'
              : 'bg-amber-950/40 border-amber-500/40 text-amber-100'
          }`}
        >
          <div className="flex items-start gap-3">
            {selectedOption.physiologicalOutcome === 'stabilized' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            ) : selectedOption.physiologicalOutcome === 'worsened' ? (
              <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            ) : (
              <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            )}

            <div className="space-y-3 w-full">
              <div>
                <h4 className="text-sm font-bold">
                  {selectedOption.physiologicalOutcome === 'stabilized'
                    ? 'Conduta Terapêutica de Excelência!'
                    : selectedOption.physiologicalOutcome === 'worsened'
                    ? 'Descompensação Iatrogênica Crítica!'
                    : 'Conduta Subótima ou Incompleta'}
                </h4>
                <p className="text-xs mt-1 leading-relaxed">{selectedOption.consequenceText}</p>
              </div>

              {/* MATRIZ DE CADEIA CAUSAL */}
              {selectedOption.causalChainFeedback && (
                <div className="bg-slate-950/80 rounded-lg p-3 border border-slate-800 text-xs space-y-1.5 text-slate-300">
                  <div className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">
                    Cadeia Causal do Mecanismo:
                  </div>
                  <div>
                    <span className="text-amber-400 font-semibold">Causa: </span>
                    {selectedOption.causalChainFeedback.cause}
                  </div>
                  <div>
                    <span className="text-sky-400 font-semibold">Mecanismo: </span>
                    {selectedOption.causalChainFeedback.mechanism}
                  </div>
                  <div>
                    <span className="text-purple-400 font-semibold">Efeito: </span>
                    {selectedOption.causalChainFeedback.effect}
                  </div>
                  <div>
                    <span className="text-emerald-400 font-semibold">Consequência Clínica: </span>
                    {selectedOption.causalChainFeedback.clinicalMeaning}
                  </div>
                </div>
              )}

              {/* APRENDIZADOS-CHAVE */}
              {config.learningTakeaways && config.learningTakeaways.length > 0 && selectedOption.physiologicalOutcome === 'stabilized' && (
                <div className="pt-2 border-t border-emerald-500/20">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 mb-1">
                    Conclusões Pedagógicas Canônicas:
                  </div>
                  <ul className="list-disc list-inside text-xs space-y-1 text-emerald-200">
                    {config.learningTakeaways.map((takeaway, idx) => (
                      <li key={idx}>{takeaway}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
