// src/learning/components/ExerciseRenderer.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Calculator,
  RefreshCw,
  Sparkles,
  Activity,
  Send
} from 'lucide-react';
import type { LearningExercise } from '../types/learning';
import { evaluateExercise, type ExerciseEvaluationResult } from '../engine/learningEngine';
import { soundManager } from '../../utils/sound';

interface ExerciseRendererProps {
  exercise: LearningExercise;
  onExerciseCompleted: (result: ExerciseEvaluationResult, submittedAnswer: string | number) => void;
  onOpenTutor?: (question?: string) => void;
  isCompleted?: boolean;
}

export const ExerciseRenderer: React.FC<ExerciseRendererProps> = ({
  exercise,
  onExerciseCompleted,
  onOpenTutor,
  isCompleted = false,
}) => {
  const [numericInput, setNumericInput] = useState<string>('');
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [evaluation, setEvaluation] = useState<ExerciseEvaluationResult | null>(null);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    let answer: string | number = '';
    if (exercise.type === 'dose_calculation') {
      if (!numericInput.trim()) return;
      answer = parseFloat(numericInput.replace(',', '.'));
    } else {
      if (!selectedOptionId) return;
      answer = selectedOptionId;
    }

    const result = evaluateExercise(exercise, answer);
    setEvaluation(result);

    if (result.isCorrect) {
      soundManager.playSuccess();
      onExerciseCompleted(result, answer);
    } else {
      soundManager.playError();
    }
  };

  const handleReset = () => {
    setNumericInput('');
    setSelectedOptionId(null);
    setEvaluation(null);
  };

  return (
    <div className="space-y-6 w-full mx-auto">
      {/* CABEÇALHO DO EXERCÍCIO */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold shadow-md">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {exercise.type === 'dose_calculation' && 'Cálculo Posológico Determinístico'}
              {exercise.type === 'multiple_choice' && 'Verificação de Conceito Teórico'}
              {exercise.type === 'clinical_case_choice' && 'Raciocínio Clínico e Consequência Fisiopatológica'}
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Exercício de Fixação Ativa
            </h2>
          </div>
        </div>

        {isCompleted && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/40">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Exercício Concluído
          </span>
        )}
      </div>

      {/* CARTÃO DO EXERCÍCIO */}
      <div className="bg-slate-900/90 rounded-2xl p-6 border border-emerald-500/30 shadow-xl space-y-6 text-slate-100">
        {/* CONTEXTO CLÍNICO DO PACIENTE (SE HOUVER) */}
        {exercise.contextData && (
          <div className="bg-slate-950 text-white rounded-xl p-4 border border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {exercise.contextData.patientSpecies && (
              <div>
                <span className="text-slate-400 block">Espécie:</span>
                <span className="font-bold text-emerald-400">{exercise.contextData.patientSpecies}</span>
              </div>
            )}
            {exercise.contextData.patientWeightKg !== undefined && (
              <div>
                <span className="text-slate-400 block">Peso Aferido:</span>
                <span className="font-bold text-emerald-400 font-mono">{exercise.contextData.patientWeightKg} kg</span>
              </div>
            )}
            {exercise.contextData.drugName && (
              <div>
                <span className="text-slate-400 block">Fármaco Disponível:</span>
                <span className="font-bold text-emerald-400">{exercise.contextData.drugName}</span>
              </div>
            )}
            {exercise.contextData.targetDoseMgKg !== undefined && (
              <div>
                <span className="text-slate-400 block">Dose Alvo:</span>
                <span className="font-bold text-emerald-400 font-mono">{exercise.contextData.targetDoseMgKg} mg/kg</span>
              </div>
            )}
          </div>
        )}

        {/* ENUNCIADO */}
        <div className="text-slate-100 font-medium text-base sm:text-lg leading-relaxed">
          {exercise.prompt}
        </div>

        {/* INPUT: CÁLCULO NUMÉRICO */}
        {exercise.type === 'dose_calculation' && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="max-w-md">
              <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                Volume a ser administrado ({exercise.contextData?.unit || 'mL'}):
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  inputMode="decimal"
                  placeholder="Ex: 0.60"
                  value={numericInput}
                  disabled={isCompleted}
                  onChange={(e) => setNumericInput(e.target.value)}
                  className="flex-1 bg-slate-950 border-2 border-slate-700 focus:border-emerald-500 rounded-xl px-4 py-3 text-lg font-mono font-bold text-white outline-hidden transition-all disabled:opacity-60"
                />
                <span className="text-slate-400 font-bold px-2">mL</span>
                <button
                  type="submit"
                  disabled={!numericInput.trim() || isCompleted}
                  className="px-5 py-3 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Verificar
                </button>
              </div>
              <p className="text-[11px] text-slate-400 mt-1.5">
                Utilize ponto ou vírgula decimal. Tolerância de precisão: ±{exercise.numericTolerance ?? 0.02} mL.
              </p>
            </div>
          </form>
        )}

        {/* INPUT: MÚLTIPLA ESCOLHA OU CASO CLÍNICO */}
        {(exercise.type === 'multiple_choice' || exercise.type === 'clinical_case_choice') && exercise.options && (
          <div className="space-y-3">
            {exercise.options.map((option) => {
              const isSelected = selectedOptionId === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  disabled={isCompleted}
                  onClick={() => setSelectedOptionId(option.id)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3 ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-950/60 text-emerald-200 font-medium shadow-sm'
                      : 'border-slate-800 hover:border-slate-700 bg-slate-800/80 text-slate-200'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-600 text-white'
                        : 'border-slate-600'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <span className="text-sm sm:text-base leading-relaxed">{option.text}</span>
                </button>
              );
            })}

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => handleSubmit()}
                disabled={!selectedOptionId || isCompleted}
                className="px-6 py-3 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Verificar Resposta
              </button>
            </div>
          </div>
        )}

        {/* RESULTADO DA AVALIAÇÃO DETERMINÍSTICA */}
        <AnimatePresence>
          {evaluation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`rounded-2xl p-5 border shadow-sm space-y-4 ${
                evaluation.isCorrect
                  ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
                  : 'bg-rose-50/90 border-rose-300 text-rose-950'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    evaluation.isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                  }`}
                >
                  {evaluation.isCorrect ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5" />
                  )}
                </div>

                <div className="space-y-2 flex-1">
                  <div className="font-bold text-base">
                    {evaluation.isCorrect
                      ? 'Excelente raciocínio!'
                      : 'Ops! O raciocínio precisa de ajuste:'}
                  </div>
                  <div className="text-sm leading-relaxed whitespace-pre-line">
                    {evaluation.feedback}
                  </div>

                  {/* EXPLICAÇÃO PEDAGÓGICA */}
                  <div className="bg-white/80 p-3.5 rounded-xl border border-slate-200/80 text-xs sm:text-sm text-slate-800 space-y-1">
                    <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      Fundamentação Didática:
                    </span>
                    <p className="text-slate-600">{exercise.pedagogicalExplanation}</p>
                  </div>

                  {/* CADEIA CAUSAL DO ERRO OU DO ACERTO */}
                  {(evaluation.causalChain || exercise.causalChain) && (
                    <div className="bg-slate-900 text-white p-3.5 rounded-xl border border-slate-800 text-xs space-y-1.5">
                      <span className="font-bold text-amber-400 block flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                        <Activity className="w-3.5 h-3.5" />
                        Cadeia Causal da Resposta:
                      </span>
                      <div className="text-slate-300">
                        {(evaluation.causalChain || exercise.causalChain)?.cause} ➔{' '}
                        <span className="text-amber-300">{(evaluation.causalChain || exercise.causalChain)?.mechanism}</span> ➔{' '}
                        <span className="text-emerald-300">{(evaluation.causalChain || exercise.causalChain)?.effect}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* AÇÃO SE ERROU */}
              {!evaluation.isCorrect && (
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-rose-200">
                  <button
                    type="button"
                    onClick={() => onOpenTutor?.(`Errei este exercício sobre ${exercise.prompt}. Pode me guiar socraticamente sem me dar a resposta pronta?`)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 hover:text-rose-900 underline cursor-pointer"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    Pedir orientação à Tutora Dra. Millena
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-white text-rose-700 hover:bg-rose-100 border border-rose-300 transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Tentar Novamente
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* AJUDA DA TUTORA NO RODAPÉ */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <button
          type="button"
          onClick={() => onOpenTutor?.('Pode me dar uma dica sobre este exercício?')}
          className="inline-flex items-center gap-1.5 font-medium text-emerald-700 hover:text-emerald-900 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-emerald-600" />
          Pedir Pista Socrática à Tutora
        </button>
        <span className="text-[11px] text-slate-400">
          Lembrete: Dicas com a tutora não alteram sua pontuação de domínio.
        </span>
      </div>
    </div>
  );
};
