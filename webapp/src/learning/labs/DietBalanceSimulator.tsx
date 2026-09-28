// src/learning/labs/DietBalanceSimulator.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Scale,
  Sparkles,
  CheckCircle2,
  RefreshCw,
  Plus,
  Minus,
  Info
} from 'lucide-react';
import { soundManager } from '../../utils/sound';

interface Ingredient {
  id: string;
  name: string;
  category: 'folha' | 'semente' | 'racao' | 'fruta' | 'suplemento' | 'inseto';
  caPer100g: number; // mg de cálcio por 100g
  pPer100g: number;  // mg de fósforo por 100g
  kcalPer100g: number;
  description: string;
}

const INGREDIENTS: Ingredient[] = [
  {
    id: 'couve',
    name: 'Couve Manteiga Picada',
    category: 'folha',
    caPer100g: 135,
    pPer100g: 40,
    kcalPer100g: 32,
    description: 'Excelente fonte vegetal de cálcio com baixa taxa de oxalato (relação Ca:P favorável ~3,4:1).'
  },
  {
    id: 'girassol',
    name: 'Semente de Girassol com Casca',
    category: 'semente',
    caPer100g: 70,
    pPer100g: 660,
    kcalPer100g: 580,
    description: 'Perigosamente rica em fósforo e gordura. Relação Ca:P invertida catastrófica (~1:9,4)!'
  },
  {
    id: 'extrusada',
    name: 'Ração Extrusada Canônica',
    category: 'racao',
    caPer100g: 800,
    pPer100g: 500,
    kcalPer100g: 360,
    description: 'Fórmula hospitalar balanceada com relação mineral milimétrica de 1,6:1.'
  },
  {
    id: 'frutas',
    name: 'Frutas Tropicais (Mamão/Maçã)',
    category: 'fruta',
    caPer100g: 22,
    pPer100g: 14,
    kcalPer100g: 45,
    description: 'Aporte de água e fibras solúveis, mas teor mineral absoluto muito baixo.'
  },
  {
    id: 'calcio_po',
    name: 'Carbonato de Cálcio em Pó (Puro)',
    category: 'suplemento',
    caPer100g: 40000, // 40% de cálcio elementar
    pPer100g: 0,
    kcalPer100g: 0,
    description: 'Suplemento mineral sem fósforo para correção rápida de hipocalcemia (usar em pitadas).'
  },
  {
    id: 'tenebrio',
    name: 'Larvas de Tenébrio Vivo',
    category: 'inseto',
    caPer100g: 45,
    pPer100g: 300,
    kcalPer100g: 210,
    description: 'Rico em proteína, mas altamente desbalanceado em cálcio (relação Ca:P ~1:6,7).'
  }
];

interface DietBalanceSimulatorProps {
  config: {
    patientSpecies: string;
    patientWeightKg: number;
    targetDailyCaloriesKcal?: number;
    minSafeRatio?: number;
    maxSafeRatio?: number;
  };
  onObjectiveAchieved: () => void;
  isCompleted?: boolean;
  onOpenTutor?: (contextPrompt?: string) => void;
}

export const DietBalanceSimulator: React.FC<DietBalanceSimulatorProps> = ({
  config,
  onObjectiveAchieved,
  isCompleted = false,
  onOpenTutor,
}) => {
  // Quantidade em gramas de cada ingrediente na dieta atual
  const [dietPortions, setDietPortions] = useState<Record<string, number>>({
    couve: 0,
    girassol: 30, // Começa desbalanceado com girassol
    extrusada: 0,
    frutas: 20,
    calcio_po: 0,
    tenebrio: 0
  });

  const [hasAchievedSuccess, setHasAchievedSuccess] = useState<boolean>(isCompleted);

  // Limites seguros de relação Ca:P
  const minSafeRatio = config.minSafeRatio ?? 1.5;
  const maxSafeRatio = config.maxSafeRatio ?? 2.2;

  // Cálculos de totais de minerais e calorias
  let totalCalciumMg = 0;
  let totalPhosphorusMg = 0;
  let totalCaloriesKcal = 0;
  let totalWeightGrams = 0;

  for (const ing of INGREDIENTS) {
    const grams = dietPortions[ing.id] || 0;
    if (grams > 0) {
      totalCalciumMg += (ing.caPer100g * grams) / 100;
      totalPhosphorusMg += (ing.pPer100g * grams) / 100;
      totalCaloriesKcal += (ing.kcalPer100g * grams) / 100;
      totalWeightGrams += grams;
    }
  }

  const rawRatio = totalPhosphorusMg > 0 ? totalCalciumMg / totalPhosphorusMg : totalCalciumMg > 0 ? 99 : 0;
  const displayRatio = Number(rawRatio.toFixed(2));

  // Classificação do estado da dieta
  const isTooLow = displayRatio < 1.0;
  const isSuboptimal = displayRatio >= 1.0 && displayRatio < minSafeRatio;
  const isBalanced = displayRatio >= minSafeRatio && displayRatio <= maxSafeRatio && totalWeightGrams >= 20;
  const isExcessCalcium = displayRatio > maxSafeRatio;

  const handleAdjustPortion = (id: string, delta: number) => {
    soundManager.playClick();
    setDietPortions((prev) => {
      const current = prev[id] || 0;
      const step = id === 'calcio_po' ? 0.5 : 10;
      const updated = Math.max(0, +(current + delta * step).toFixed(1));
      return { ...prev, [id]: updated };
    });
  };

  const handleCheckDiet = () => {
    if (isBalanced) {
      soundManager.playSuccess();
      setHasAchievedSuccess(true);
      onObjectiveAchieved();
    } else {
      soundManager.playError();
    }
  };

  const handleAskTutor = () => {
    soundManager.playClick();
    const prompt = `Dra. Millena, estou montando a dieta para um(a) ${config.patientSpecies} (${config.patientWeightKg} kg). No prato atual tenho: ${Object.entries(
      dietPortions
    )
      .filter(([_, g]) => g > 0)
      .map(([id, g]) => `${g}g de ${INGREDIENTS.find((i) => i.id === id)?.name}`)
      .join(', ')}. A relação Ca:P está em ${displayRatio}:1. Como posso corrigir para a janela segura de 1,5:1 a 2:1?`;
    onOpenTutor?.(prompt);
  };

  const handleReset = () => {
    soundManager.playClick();
    setDietPortions({
      couve: 0,
      girassol: 30,
      extrusada: 0,
      frutas: 20,
      calcio_po: 0,
      tenebrio: 0
    });
    setHasAchievedSuccess(false);
  };

  return (
    <div className="w-full bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-sans text-white">
      {/* CABEÇALHO DO SIMULADOR */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Balança Nutricional Ca:P — {config.patientSpecies} ({config.patientWeightKg} kg)
            </span>
            <div className="text-[11px] text-slate-400">
              Objetivo: Equilibrar a relação Cálcio:Fósforo entre 1,5:1 e 2,0:1 para prevenir MBD.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleAskTutor}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Consultar Dra. Millena
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
            title="Reiniciar Dieta"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* PAINEL CENTRAL DA BALANÇA & MEDIDOR */}
      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* COLUNA ESQUERDA: LISTA DE ALIMENTOS E PORÇÕES */}
        <div className="lg:col-span-2 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Selecione e Ajuste os Ingredientes do Prato (em gramas):
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {INGREDIENTS.map((ing) => {
              const currentGrams = dietPortions[ing.id] || 0;
              const isSelected = currentGrams > 0;

              return (
                <div
                  key={ing.id}
                  className={`p-3 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-slate-900 border-emerald-500/50 shadow-md'
                      : 'bg-slate-900/50 border-slate-800 opacity-80'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-xs font-bold text-slate-200">{ing.name}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{ing.description}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-800/80">
                    <div className="text-[11px] font-mono text-slate-300">
                      <span className="font-bold text-white">{currentGrams}</span> g
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleAdjustPortion(ing.id, -1)}
                        disabled={currentGrams <= 0}
                        className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => handleAdjustPortion(ing.id, 1)}
                        className="w-7 h-7 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* COLUNA DIREITA: BALANÇA E PONTEIRO DA RAZÃO CA:P */}
        <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
              <span className="font-bold uppercase tracking-wider text-slate-400">Relação Cálcio : Fósforo</span>
              <span className="text-slate-400 font-mono text-[11px]">Meta: 1,5 : 1 a 2,0 : 1</span>
            </div>

            {/* PONTEIRO / DISPLAY DESTAQUE */}
            <div
              className={`p-5 rounded-2xl border text-center transition-all ${
                isBalanced
                  ? 'bg-emerald-950/70 border-emerald-500 text-emerald-300 shadow-lg shadow-emerald-900/20'
                  : isTooLow
                  ? 'bg-red-950/60 border-red-500/80 text-red-300 animate-pulse'
                  : 'bg-amber-950/60 border-amber-500/80 text-amber-300'
              }`}
            >
              <div className="text-[11px] font-bold uppercase tracking-wider mb-1">
                {isBalanced
                  ? '✅ Razão Ca:P Balanceada'
                  : isTooLow
                  ? '🚨 Alerta: Risco Crítico de MBD!'
                  : isExcessCalcium
                  ? '⚠️ Excesso de Cálcio'
                  : isSuboptimal
                  ? '⚠️ Relação Sub-ótima'
                  : '⚠️ Dieta Incompleta'}
              </div>

              <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight my-1">
                {displayRatio} : 1
              </div>

              <div className="text-[11px] text-slate-300 mt-2">
                {isBalanced
                  ? 'Janela fisiológica ideal para mineralização esquelética sem sobrecarga renal.'
                  : isTooLow
                  ? 'Dieta com excesso de fósforo! Estimula PTH e reabsorção mineral do casco.'
                  : 'Ajuste as proporções para atingir a zona verde de segurança.'}
              </div>
            </div>

            {/* TOTAIS MINERAIS DETALHADOS */}
            <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-2 text-xs font-mono">
              <div className="flex justify-between items-center text-slate-300">
                <span>Cálcio Total (Ca):</span>
                <span className="font-bold text-white">{totalCalciumMg.toFixed(1)} mg</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Fósforo Total (P):</span>
                <span className="font-bold text-white">{totalPhosphorusMg.toFixed(1)} mg</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Energia Calculada:</span>
                <span className="font-bold text-amber-400">{totalCaloriesKcal.toFixed(0)} kcal</span>
              </div>
              <div className="flex justify-between items-center text-slate-400 border-t border-slate-800 pt-2 text-[11px]">
                <span>Peso Total da Dieta:</span>
                <span>{totalWeightGrams.toFixed(0)} g</span>
              </div>
            </div>
          </div>

          {/* BOTÃO DE CONFIRMAR DIETA */}
          <button
            onClick={handleCheckDiet}
            className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
              isBalanced
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
            }`}
          >
            {isBalanced ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                Validar Dieta Equilibrada
              </>
            ) : (
              <>
                <Info className="w-4 h-4 text-amber-400" />
                Equilibre na Zona Verde
              </>
            )}
          </button>
        </div>
      </div>

      {/* FEEDBACK DE CONQUISTA DO OBJETIVO */}
      <AnimatePresence>
        {hasAchievedSuccess && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-emerald-950/90 border-t border-emerald-500/60 p-4 text-emerald-200 flex items-center justify-between gap-4 text-xs"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="font-bold text-white block">
                  🎯 Parabéns! Dieta Homologada com Sucesso!
                </span>
                <span>
                  Você atingiu a relação Ca:P de {displayRatio}:1. O paciente está protegido da osteodistrofia fibrosa e receberá o aporte de energia ideal.
                </span>
              </div>
            </div>
            <span className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-[11px] shrink-0">
              Concluído
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
