import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, CheckCircle2, ArrowRight, Filter, Stethoscope, Package } from 'lucide-react';
import type { CaseData, CareerState } from '../types';
import { CASE_REGISTRY } from '../data/cases';
import { soundManager } from '../utils/sound';
import { getAssetUrl } from '../utils/assetHelper';

interface CaseSelectProps {
  careerState: CareerState;
  onSelectCase: (caseData: CaseData) => void;
  onBackToMenu: () => void;
  onOpenShop?: () => void;
}

type FilterType = 'all' | 'urgent' | 'open' | 'completed';

export const CaseSelect: React.FC<CaseSelectProps> = ({ careerState, onSelectCase, onBackToMenu: _onBackToMenu, onOpenShop }) => {
  const [filter, setFilter] = useState<FilterType>('all');

  const rankHierarchy = ['Estagiário', 'Residente', 'Especialista', 'Chefe de Clínica'];
  const userRankIdx = rankHierarchy.indexOf(careerState.rank);

  // Contagens para a barra de filtros
  const totalCount = CASE_REGISTRY.length;
  const completedCount = CASE_REGISTRY.filter(c => careerState.completedCaseIds.includes(c.id)).length;
  const openCount = totalCount - completedCount;
  const pendingUrgentCount = CASE_REGISTRY.filter(c => c.isUrgent && !careerState.completedCaseIds.includes(c.id)).length;

  // Filtragem dos prontuários
  const filteredCases = CASE_REGISTRY.filter(c => {
    const isCompleted = careerState.completedCaseIds.includes(c.id);
    if (filter === 'urgent') return c.isUrgent;
    if (filter === 'completed') return isCompleted;
    if (filter === 'open') return !isCompleted;
    return true;
  });

  return (
    <div className="relative flex-1 flex flex-col select-none min-h-screen">
      {/* Camada 1: Imagem de fundo travada na tela (viewport) */}
      <img 
        src={getAssetUrl('assets/backgrounds/backgroundSelection.jpg')} 
        alt=""
        className="fixed inset-0 w-full h-full object-cover object-center z-0 pointer-events-none" 
      />

      {/* Camada 2: Máscara escura e desfoque travados na tela */}
      <div className="fixed inset-0 bg-stone-950/80 backdrop-blur-[2px] z-[1] pointer-events-none" />

      {/* Conteúdo sobre o fundo */}
      <div className="relative z-10 flex flex-col p-6 max-w-7xl mx-auto w-full space-y-6">

      {/* Header Banner da Triagem */}
      <div className="backdrop-blur-md bg-stone-900/60 p-6 rounded-2xl border border-stone-700/60 flex flex-col md:flex-row md:items-center justify-between shadow-xl gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Stethoscope className="w-4 h-4 text-amber-400" />
            <span className="text-xs uppercase tracking-widest font-bold text-amber-400 block">CARFS • Triagem Clínica de Campo</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-stone-100 mt-1">Prontuários e Admissão de Pacientes</h2>
          <p className="text-xs text-stone-400 mt-1">Selecione uma prancheta clínica em aberto para iniciar a investigação e conduta veterinária.</p>
        </div>

        <div className="flex items-center space-x-3 shrink-0">
          <span className="text-xs font-semibold text-stone-400">Credencial Veterinária:</span>
          <span className="px-3 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-amber-400 font-extrabold text-xs shadow-md backdrop-blur-md">
            {careerState.rank}
          </span>
        </div>
      </div>

      {/* Almoxarifado Hospitalar Banner */}
      {onOpenShop && (
        <div 
          onClick={() => {
            soundManager.playClick();
            onOpenShop();
          }}
          className="backdrop-blur-md bg-gradient-to-r from-emerald-950/70 via-[#10291E]/80 to-amber-950/50 p-4 rounded-2xl border border-amber-500/40 hover:border-amber-400 flex flex-col sm:flex-row sm:items-center justify-between shadow-lg cursor-pointer group transition-all gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center group-hover:scale-105 transition-transform text-amber-400 shrink-0">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-amber-400 uppercase tracking-wider">Almoxarifado Hospitalar</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 font-bold">
                  Equipamentos Clínicos & Cirúrgicos
                </span>
              </div>
              <p className="text-xs text-stone-300 mt-0.5">
                Adquira instrumentais e equipamentos permanentes para ampliar precisão e segurança nos procedimentos.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
            <span className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs uppercase tracking-wider shadow-md group-hover:shadow-amber-500/30 transition-all flex items-center gap-1.5">
              <span>Acessar Loja</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      )}

      {/* 2. Barra de Filtros Rápidos */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-stone-800/80">
        <div className="flex items-center text-xs text-stone-400 pr-2 gap-1.5 font-bold uppercase tracking-wider shrink-0">
          <Filter className="w-3.5 h-3.5 text-amber-400" />
          <span>Filtros:</span>
        </div>

        <button
          onClick={() => { soundManager.playClick(); setFilter('all'); }}
          className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all backdrop-blur-md border cursor-pointer shrink-0 ${
            filter === 'all'
              ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.2)]'
              : 'bg-stone-900/50 border-stone-700 text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
          }`}
        >
          Todos ({totalCount})
        </button>

        <button
          onClick={() => { soundManager.playClick(); setFilter('urgent'); }}
          className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all backdrop-blur-md border cursor-pointer shrink-0 ${
            filter === 'urgent'
              ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.2)]'
              : 'bg-stone-900/50 border-stone-700 text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
          }`}
        >
          🚨 Urgências ({pendingUrgentCount})
        </button>

        <button
          onClick={() => { soundManager.playClick(); setFilter('open'); }}
          className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all backdrop-blur-md border cursor-pointer shrink-0 ${
            filter === 'open'
              ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.2)]'
              : 'bg-stone-900/50 border-stone-700 text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
          }`}
        >
          Em Aberto ({openCount})
        </button>

        <button
          onClick={() => { soundManager.playClick(); setFilter('completed'); }}
          className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all backdrop-blur-md border cursor-pointer shrink-0 ${
            filter === 'completed'
              ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
              : 'bg-stone-900/50 border-stone-700 text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
          }`}
        >
          Concluídos ({completedCount})
        </button>
      </div>

      {/* 3. Cards no Estilo "Prancheta Clínica" */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 pb-12">
        {filteredCases.map((c) => {
          const caseRankIdx = rankHierarchy.indexOf(c.minimumRank);
          const isLocked = caseRankIdx > userRankIdx;
          const isCompleted = careerState.completedCaseIds.includes(c.id);

          return (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: isLocked ? 0 : -4 }}
              className={`relative group flex flex-col justify-between rounded-2xl p-5 backdrop-blur-md transition-all duration-300 shadow-xl ${
                isCompleted
                  ? 'bg-stone-900/40 border border-emerald-500/40 hover:border-emerald-400/70 hover:bg-stone-900/60 shadow-[0_0_15px_rgba(16,185,129,0.08)]'
                  : 'bg-stone-900/60 border border-stone-700/60 hover:border-amber-400/60 hover:bg-stone-900/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)]'
              } ${isLocked ? 'opacity-60 grayscale-[40%]' : ''}`}
            >
              {/* Detalhe visual: Presilha de Prancheta Metálica no topo */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-gradient-to-b from-stone-400 to-stone-600 rounded-t-md border-t border-stone-300 shadow-md flex items-center justify-center z-20">
                <div className="w-8 h-1 bg-stone-800/60 rounded-full" />
              </div>

              {/* Cabeçalho da Ficha: Foto Redonda + Identificação */}
              <div className="flex items-start gap-3.5 pt-1">
                <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden border-2 border-emerald-500/30 bg-stone-950 shadow-inner">
                  <img
                    src={getAssetUrl(c.imageTexture)}
                    alt={c.speciesName}
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      if (c.imageTexture && !img.dataset.triedFallback) {
                        img.dataset.triedFallback = 'true';
                        const fallbackMap: Record<string, string> = {
                          c1: '/assets/animals/c1_coruja_buraqueira.jpg',
                          c2: '/assets/animals/c2_jabuti_piranga.jpg',
                          c3: '/assets/animals/c3_arara_caninde.jpg',
                          c4: '/assets/animals/c4_sucuri_amarela.jpg',
                          c5: '/assets/animals/c5_harpia.jpg',
                          c6: '/assets/animals/c6_onca_pintada.jpg',
                          c7: '/assets/animals/c7_tamandua_bandeira.jpg',
                          c8: '/assets/animals/c8_lobo_guara.jpg',
                          c9: '/assets/animals/c9_tucano_toco.jpg',
                          c10: '/assets/animals/c10_bicho_preguica.jpg',
                          c11: '/assets/animals/c11_jacare_pantanal.jpg',
                          c12: '/assets/animals/c12_jaguatirica.jpg',
                          c13: '/assets/animals/c13_capivara.jpg',
                          c14: '/assets/animals/c14_macaco_prego.jpg',
                          c15: '/assets/animals/c15_iguana.jpg',
                          c16: '/assets/animals/c16_teiu.jpg',
                          c17: '/assets/animals/c17_cachorro_mato.jpg',
                          c18: '/assets/animals/c18_jiboia.jpg',
                          c19: '/assets/animals/c19_sagui.jpg',
                          c20: '/assets/animals/c20_anta.jpg'
                        };
                        if (fallbackMap[c.id]) {
                          img.src = getAssetUrl(fallbackMap[c.id]);
                          return;
                        }
                      }
                      img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="%2314261E"><rect width="100" height="100" fill="%230F172A"/><text x="50" y="55" fill="%2310B981" font-size="28" font-family="sans-serif" text-anchor="middle">🐾</text></svg>';
                    }}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-mono text-xs font-bold text-emerald-400 tracking-wider">
                      {c.patientCode || c.id}
                    </span>
                    {isCompleted ? (
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 flex items-center gap-1 shrink-0 shadow-sm">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>CONCLUÍDO</span>
                      </span>
                    ) : c.isUrgent ? (
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-red-950/80 border border-red-500/50 text-red-300 animate-pulse shrink-0">
                        URGÊNCIA
                      </span>
                    ) : null}
                  </div>
                  <h3 className="font-bold text-stone-100 text-sm md:text-base truncate group-hover:text-amber-300 transition-colors mt-0.5">
                    {c.speciesName}
                  </h3>
                  <p className="italic text-[11px] text-stone-400 truncate">
                    {c.scientificName}
                  </p>
                </div>
              </div>

              {/* Corpo Clínico: Queixa Principal */}
              <div className="my-3 space-y-1.5 p-2.5 rounded-lg bg-stone-950/50 border border-stone-800/80 text-xs">
                <div className="flex items-start gap-1.5 text-stone-300">
                  <span className="text-amber-400 text-sm leading-none font-bold">🩺</span>
                  <div className="min-w-0">
                    <span className="font-semibold text-stone-400 block text-[10px] uppercase">Queixa Principal</span>
                    <span className="truncate block font-medium text-stone-200">{c.arrivalReason}</span>
                  </div>
                </div>
              </div>

              {/* Rodapé da Prancheta: Honorários e Botão de Atendimento */}
              <div className="flex items-center justify-between pt-2 border-t border-stone-800/60 gap-2">
                <div>
                  <span className="text-[10px] text-stone-400 uppercase font-semibold block">Honorários</span>
                  <span className="text-xs font-mono font-bold text-emerald-400">R$ {c.caseBudget}</span>
                </div>

                {isLocked ? (
                  <div className="flex items-center space-x-1 text-rose-400 text-[10px] font-bold bg-rose-950/40 px-2.5 py-1.5 rounded-xl border border-rose-800/60 uppercase tracking-wider">
                    <Lock className="w-3 h-3" />
                    <span>Nível Insuficiente</span>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      if (isCompleted) {
                        try {
                          sessionStorage.removeItem(`medzoo_session_${c.id}`);
                          sessionStorage.removeItem(`medzoo_steps_${c.id}`);
                        } catch { /* ignore */ }
                      }
                      onSelectCase(c);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 ${
                      isCompleted
                        ? 'bg-emerald-900/40 hover:bg-emerald-800/60 border border-emerald-500/50 text-emerald-300 shadow-sm'
                        : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 shadow-md hover:shadow-amber-500/25'
                    }`}
                  >
                    <span>{isCompleted ? 'Revisar Caso' : 'Atender Paciente'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
      </div>{/* end content z-10 wrapper */}
    </div>
  );
};
