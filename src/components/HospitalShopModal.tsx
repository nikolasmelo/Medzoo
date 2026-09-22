import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Sparkles,
  Lock,
  CheckCircle2,
  Package,
  Wrench,
  Syringe,
  Scissors,
  ShieldCheck,
  Microscope,
  FileSearch,
  Calculator,
  Crosshair,
  Video,
  Activity,
  Coins,
  Stethoscope,
} from 'lucide-react';
import type { HospitalUpgrade } from '../types';
import { HOSPITAL_UPGRADES } from '../data/upgrades';
import { soundManager } from '../utils/sound';

interface HospitalShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  playerMoney: number;
  playerRank: string;
  unlockedUpgrades: string[];
  onPurchase: (upgradeId: string) => void;
}

const RANK_ORDER: Record<string, number> = {
  'Estagiário': 0,
  'Residente': 1,
  'Especialista': 2,
  'Chefe de Clínica': 3,
};

const CATEGORY_LABELS: Record<string, string> = {
  all: 'Todos os Itens',
  instrument: 'Instrumental',
  surgical: 'Cirúrgico & Síntese',
  diagnostics: 'Diagnóstico & Lab',
  monitoring: 'Monitoramento & UTI',
};

// Map icon string to Lucide component
const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Syringe,
  Scissors,
  ShieldCheck,
  Wrench,
  Sparkles,
  Microscope,
  FileSearch,
  Calculator,
  Crosshair,
  Video,
  Activity,
};

export const HospitalShopModal: React.FC<HospitalShopModalProps> = ({
  isOpen,
  onClose,
  playerMoney,
  playerRank,
  unlockedUpgrades,
  onPurchase,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [justPurchasedId, setJustPurchasedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const playerRankLevel = RANK_ORDER[playerRank] ?? 0;

  const filteredUpgrades = HOSPITAL_UPGRADES.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const handleBuy = (upgrade: HospitalUpgrade) => {
    if (unlockedUpgrades.includes(upgrade.id)) return;

    if (playerMoney < upgrade.cost) {
      soundManager.playInsufficientFunds();
      return;
    }

    soundManager.playEquipmentUnlock();
    setJustPurchasedId(upgrade.id);
    setTimeout(() => setJustPurchasedId(null), 2500);
    onPurchase(upgrade.id);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-5xl h-[88vh] max-h-[88vh] flex flex-col rounded-3xl bg-gradient-to-b from-[#0F241C] via-[#0B1A14] to-[#07120E] border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.15)] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-5 border-b border-emerald-900/40 bg-black/30 shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <Package className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-black tracking-wide text-white uppercase">
                    Almoxarifado & Equipamentos Hospitalares
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-emerald-950 border border-emerald-500/40 text-emerald-400">
                    Nível: {playerRank}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Adquira instrumentais veterinários de alta precisão para aprimorar o desempenho nos procedimentos.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              {/* Live Bank Balance */}
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#091712] border border-amber-500/30 shadow-inner">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                  <Coins className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Saldo Hospitalar
                  </span>
                  <span className="text-base font-black text-amber-300 font-mono tracking-tight">
                    R$ {playerMoney.toLocaleString('pt-BR')}
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  onClose();
                }}
                className="w-10 h-10 rounded-xl bg-slate-800/60 hover:bg-rose-950/60 border border-slate-700/60 hover:border-rose-500/50 flex items-center justify-center text-slate-400 hover:text-rose-300 transition-all cursor-pointer"
                title="Fechar Almoxarifado"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 px-8 py-3 border-b border-emerald-950/60 bg-black/20 overflow-x-auto shrink-0">
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
              const isSelected = selectedCategory === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedCategory(key);
                  }}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)] border border-emerald-400/40'
                      : 'bg-emerald-950/30 text-slate-400 hover:text-slate-200 hover:bg-emerald-950/60 border border-emerald-900/30'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Catalog Grid */}
          <div className="flex-1 min-h-0 overflow-y-auto p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 content-start">
            {filteredUpgrades.map((upgrade) => {
              const isOwned = unlockedUpgrades.includes(upgrade.id);
              const requiredLevel = RANK_ORDER[upgrade.requiredRank] ?? 0;
              const isRankLocked = playerRankLevel < requiredLevel;
              const canAfford = playerMoney >= upgrade.cost;
              const isJustPurchased = justPurchasedId === upgrade.id;

              const IconComponent = ICON_MAP[upgrade.icon] || Stethoscope;

              return (
                <motion.div
                  key={upgrade.id}
                  className={`relative flex flex-col justify-between p-5 rounded-2xl border transition-all duration-300 min-h-[300px] ${
                    isJustPurchased
                      ? 'bg-gradient-to-br from-amber-950/60 via-emerald-950/60 to-[#0B1A14] border-amber-400/80 shadow-[0_0_30px_rgba(234,179,8,0.3)] scale-[1.02]'
                      : isOwned
                      ? 'bg-emerald-950/20 border-emerald-500/40 shadow-sm'
                      : isRankLocked
                      ? 'bg-slate-950/40 border-slate-800/60 opacity-70'
                      : 'bg-[#0E2018] border-emerald-900/60 hover:border-emerald-500/60 hover:shadow-[0_4px_20px_rgba(16,185,129,0.1)]'
                  }`}
                >
                  {/* Golden Sparkle Overlay on purchase */}
                  {isJustPurchased && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5 }}
                      className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-yellow-400/10 to-transparent pointer-events-none"
                    />
                  )}

                  <div className="flex flex-col flex-1">
                    {/* Top Row: Icon + Required Rank Badge */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all shrink-0 ${
                          isOwned
                            ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.25)]'
                            : isRankLocked
                            ? 'bg-slate-900 border-slate-800 text-slate-500'
                            : 'bg-emerald-950/60 border-emerald-700/40 text-emerald-400'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <span
                          className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md border ${
                            isRankLocked
                              ? 'bg-rose-950/60 border-rose-800/40 text-rose-300'
                              : 'bg-slate-900/80 border-slate-800 text-slate-300'
                          }`}
                        >
                          {isRankLocked ? `Requer ${upgrade.requiredRank}` : upgrade.requiredRank}
                        </span>
                        <span className="text-[10px] text-slate-400 uppercase font-semibold">
                          {CATEGORY_LABELS[upgrade.category]}
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-sm font-black text-white leading-snug mb-1.5 flex items-center gap-1.5">
                      {upgrade.title}
                      {isOwned && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 inline-block shrink-0" />
                      )}
                    </h3>
                    <p className="text-xs text-slate-300/90 leading-relaxed mb-3 line-clamp-2">
                      {upgrade.description}
                    </p>

                    {/* Clinical Perk / Benefit Box */}
                    <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-900/40 mb-3 flex items-start gap-2 mt-auto">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <p className="text-[11px] font-medium text-emerald-200/90 leading-snug">
                        {upgrade.perkDescription}
                      </p>
                    </div>
                  </div>

                  {/* Purchase Action Button */}
                  <div className="pt-3 border-t border-emerald-950/60 shrink-0">
                    {isOwned ? (
                      <div className="w-full py-2.5 px-3 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        Equipamento Adquirido
                      </div>
                    ) : isRankLocked ? (
                      <div className="w-full py-2.5 px-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                        <Lock className="w-4 h-4 shrink-0 text-slate-400" />
                        Bloqueado por Cargo
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleBuy(upgrade)}
                        disabled={!canAfford}
                        className={`w-full py-2.5 px-3 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          canAfford
                            ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:scale-[1.02] active:scale-[0.98]'
                            : 'bg-slate-900/60 border border-slate-800 text-slate-500 cursor-not-allowed'
                        }`}
                      >
                        <Coins className="w-4 h-4 shrink-0" />
                        {canAfford ? `Comprar • R$ ${upgrade.cost.toLocaleString('pt-BR')}` : `Saldo Insuficiente (R$ ${upgrade.cost.toLocaleString('pt-BR')})`}
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer status */}
          <div className="px-8 py-3.5 border-t border-emerald-950/60 bg-black/40 flex items-center justify-between text-xs text-slate-400 shrink-0">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Equipamentos adquiridos aplicam bônus ativos e automáticos durante os procedimentos clínicos e cirúrgicos.
            </span>
            <span className="font-bold text-slate-300">
              {unlockedUpgrades.length} de {HOSPITAL_UPGRADES.length} Equipamentos Instalados
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
