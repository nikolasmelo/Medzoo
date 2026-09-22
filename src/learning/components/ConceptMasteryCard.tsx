// src/learning/components/ConceptMasteryCard.tsx
import React from 'react';
import { AlertCircle, TrendingUp, BookOpen } from 'lucide-react';
import type { LearningConcept, ConceptMastery } from '../types/learning';

interface ConceptMasteryCardProps {
  concept: LearningConcept;
  mastery?: ConceptMastery;
  onReviewConcept?: (conceptId: string) => void;
}

export const ConceptMasteryCard: React.FC<ConceptMasteryCardProps> = ({
  concept,
  mastery,
  onReviewConcept,
}) => {
  const score = mastery?.score ?? 0;
  const attempts = mastery?.attempts ?? 0;
  const correct = mastery?.correctAttempts ?? 0;
  const commonMistakes = mastery?.commonMistakes ?? [];

  const getTier = (s: number) => {
    if (s >= 90) return { label: 'Mestre', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' };
    if (s >= 70) return { label: 'Proficiente', color: 'text-teal-400 bg-teal-500/10 border-teal-500/30' };
    if (s >= 40) return { label: 'Em Aprendizado', color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' };
    return { label: 'Iniciante', color: 'text-slate-400 bg-slate-500/10 border-slate-500/30' };
  };

  const tier = getTier(score);

  return (
    <div className="bg-slate-900 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-5 shadow-md transition-all flex flex-col justify-between space-y-4">
      <div>
        {/* CABEÇALHO DO CONCEITO */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 block mb-1">
              {concept.category.toUpperCase()} • {concept.difficulty.toUpperCase()}
            </span>
            <h4 className="text-base font-bold text-white leading-snug">
              {concept.title}
            </h4>
          </div>

          <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${tier.color}`}>
            {tier.label}
          </span>
        </div>

        <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
          {concept.description}
        </p>
      </div>

      {/* BARRA DE PROGRESSO DE MAESTRIA */}
      <div className="space-y-2 pt-2 border-t border-slate-800">
        <div className="flex justify-between items-center text-xs">
          <span className="text-slate-400 flex items-center gap-1.5 font-medium">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            Índice de Domínio
          </span>
          <span className="font-mono font-bold text-emerald-300">{score}%</span>
        </div>

        <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              score >= 90
                ? 'bg-linear-to-r from-emerald-500 to-teal-400'
                : score >= 70
                ? 'bg-emerald-500'
                : score >= 40
                ? 'bg-amber-500'
                : 'bg-slate-600'
            }`}
            style={{ width: `${Math.max(5, score)}%` }}
          />
        </div>

        <div className="flex justify-between text-[11px] text-slate-500 pt-1">
          <span>{attempts} tentativas</span>
          <span>{correct} acertos</span>
        </div>
      </div>

      {/* ERROS CONCEITUAIS FREQUENTES */}
      {commonMistakes.length > 0 && (
        <div className="bg-rose-950/30 border border-rose-900/40 rounded-xl p-3 text-xs space-y-1.5">
          <span className="text-rose-400 font-bold flex items-center gap-1 text-[11px]">
            <AlertCircle className="w-3 h-3" />
            Ajustes Recentes Identificados:
          </span>
          <div className="flex flex-wrap gap-1">
            {commonMistakes.slice(0, 2).map((m, idx) => (
              <span
                key={idx}
                className="bg-rose-900/50 text-rose-200 px-2 py-0.5 rounded-md text-[10px] border border-rose-800/40"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* AÇÃO DE REVISÃO */}
      {onReviewConcept && (
        <button
          onClick={() => onReviewConcept(concept.id)}
          className="w-full py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
          Revisar Conceito
        </button>
      )}
    </div>
  );
};
