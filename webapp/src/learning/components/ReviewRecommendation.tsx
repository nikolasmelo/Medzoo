// src/learning/components/ReviewRecommendation.tsx
import React from 'react';
import { AlertTriangle, CheckCircle2, BookOpen } from 'lucide-react';
import type { LearningConcept, ConceptMastery } from '../types/learning';

interface ReviewRecommendationProps {
  conceptsNeedingReview: string[];
  conceptsMap: Record<string, LearningConcept>;
  masteryMap: Record<string, ConceptMastery>;
  onStartReview: (conceptId: string) => void;
}

export const ReviewRecommendation: React.FC<ReviewRecommendationProps> = ({
  conceptsNeedingReview,
  conceptsMap,
  masteryMap,
  onStartReview,
}) => {
  if (conceptsNeedingReview.length === 0) {
    return (
      <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-4 flex items-center justify-between gap-4 text-emerald-200">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Domínio Clínico em Dia!</h4>
            <p className="text-xs text-emerald-300/80">
              Nenhuma lacuna crítica detectada. Todos os conceitos praticados mantêm índice de proficiência seguro.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-amber-950/50 border border-amber-500/40 rounded-2xl p-5 space-y-4 shadow-md text-amber-200">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            Recomendações de Revisão Adaptativa
            <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">
              {conceptsNeedingReview.length} {conceptsNeedingReview.length === 1 ? 'conceito' : 'conceitos'}
            </span>
          </h4>
          <p className="text-xs text-amber-300/90">
            Com base no seu histórico recente de erros, recomendamos reforçar os seguintes pontos para garantir segurança no atendimento ambulatorial:
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        {conceptsNeedingReview.map((conceptId) => {
          const concept = conceptsMap[conceptId];
          const mastery = masteryMap[conceptId];
          if (!concept) return null;

          return (
            <div
              key={conceptId}
              className="bg-slate-900/90 border border-amber-500/30 rounded-xl p-3.5 flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-white">{concept.title}</span>
                  <span className="font-mono text-amber-400 font-bold">{mastery?.score ?? 0}%</span>
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-2">
                  {concept.description}
                </p>
              </div>

              <button
                onClick={() => onStartReview(conceptId)}
                className="w-full py-1.5 rounded-lg text-xs font-bold bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Reforçar Teoria e Prática
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
