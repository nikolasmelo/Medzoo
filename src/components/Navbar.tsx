import React from 'react';
import { Stethoscope, Clock, ShieldCheck, DollarSign, Volume2, VolumeX, ArrowLeft, Award, Settings, Package } from 'lucide-react';
import { soundManager } from '../utils/sound';

interface NavbarProps {
  money: number;
  shiftMinutes: number;
  reliability: number;
  rank: string;
  onBackToMenu: () => void;
  isSoundOn: boolean;
  setIsSoundOn: (on: boolean) => void;
  onOpenSettings?: () => void;
  onOpenShop?: () => void;
  currentCaseCode?: string;
  completedCases?: number;
  casesForNextRank?: number;
  nextRankName?: string;
  currentView?: 'auth' | 'menu' | 'case_select' | 'clinic';
}

export const Navbar: React.FC<NavbarProps> = ({
  money,
  shiftMinutes,
  reliability,
  rank,
  onBackToMenu,
  isSoundOn,
  setIsSoundOn,
  onOpenSettings,
  onOpenShop,
  currentCaseCode,
  completedCases,
  casesForNextRank,
  nextRankName,
  currentView
}) => {
  const toggleSound = () => {
    const next = !isSoundOn;
    setIsSoundOn(next);
    soundManager.setEnabled(next);
    if (next) soundManager.playClick();
  };

  const formatTime = (minutes: number) => {
    const hrs = Math.floor(minutes / 60) + 8;
    const mins = minutes % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  };

  return (
    <header className="w-full bg-[#0E1713]/90 border-b border-[#C89A3C]/30 backdrop-blur-md px-6 py-3 flex items-center justify-between shadow-xl sticky top-0 z-50">
      {/* Brand & Logo */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1A3A2A] to-[#2D5A3F] border border-[#C89A3C]/50 flex items-center justify-center shadow-lg shadow-[#1A3A2A]/40">
          <Stethoscope className="w-6 h-6 text-[#C89A3C]" />
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-extrabold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAF6] via-[#E8B84A] to-[#C89A3C]">
              MEDZOO
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-[#C89A3C]/15 border border-[#C89A3C]/30 text-[#E8B84A]">
              CARFS Wildlife
            </span>
          </div>
          <p className="text-xs text-slate-400 font-medium">Estação de Simulação Clínica Veterinária</p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="hidden md:flex items-center space-x-6 bg-[#14261E]/80 border border-[#C89A3C]/20 rounded-2xl px-5 py-2">
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-[#E8B84A]" />
          <div className="text-xs">
            <span className="text-slate-400 block text-[10px] uppercase">Plantão</span>
            <span className="font-mono font-bold text-slate-100">{formatTime(shiftMinutes)}</span>
          </div>
        </div>

        <div className="h-6 w-px bg-slate-700/50" />

        <div 
          onClick={onOpenShop ? () => { soundManager.playClick(); onOpenShop(); } : undefined}
          className={`flex items-center space-x-2 ${onOpenShop ? 'cursor-pointer hover:bg-emerald-950/60 transition-all px-2 py-1 -my-1 rounded-xl group' : ''}`}
          title={onOpenShop ? "Clique para abrir o Almoxarifado Hospitalar" : undefined}
        >
          <DollarSign className="w-4 h-4 text-emerald-400 group-hover:text-amber-400 transition-colors" />
          <div className="text-xs">
            <span className="text-slate-400 block text-[10px] uppercase group-hover:text-slate-300">Orçamento</span>
            <span className="font-mono font-bold text-emerald-300 group-hover:text-amber-300 transition-colors">
              R$ {money.toLocaleString('pt-BR')}
            </span>
          </div>
        </div>

        <div className="h-6 w-px bg-slate-700/50" />

        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-blue-400" />
          <div className="text-xs">
            <span className="text-slate-400 block text-[10px] uppercase">Confiabilidade</span>
            <span className="font-mono font-bold text-blue-300">{reliability}%</span>
          </div>
        </div>

        <div className="h-6 w-px bg-slate-700/50" />

        <div className="flex items-center space-x-2">
          <Award className="w-4 h-4 text-[#C89A3C]" />
          <div className="text-xs">
            <span className="text-slate-400 block text-[10px] uppercase">Cargo</span>
            <span className="font-semibold text-[#E8B84A]">{rank}</span>
            {casesForNextRank != null && casesForNextRank > 0 && nextRankName && (
              <span className="ml-1.5 text-[9px] text-slate-500 font-mono">
                ({casesForNextRank} caso{casesForNextRank > 1 ? 's' : ''} → {nextRankName})
              </span>
            )}
            {completedCases != null && completedCases > 0 && (
              <span className="ml-1.5 text-[9px] text-emerald-500 font-mono">
                [{completedCases} concluído{completedCases > 1 ? 's' : ''}]
              </span>
            )}
          </div>
        </div>

        {currentCaseCode && (
          <>
            <div className="h-6 w-px bg-slate-700/50" />
            <div className="text-xs">
              <span className="text-slate-400 block text-[10px] uppercase">Prontuário</span>
              <span className="font-mono font-bold text-amber-200">{currentCaseCode}</span>
            </div>
          </>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-3">
        {onOpenShop && (
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenShop();
            }}
            className="flex items-center space-x-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 via-amber-600/15 to-emerald-950/40 border border-amber-500/50 hover:border-amber-400 text-amber-300 hover:text-amber-200 transition-all shadow-md active:scale-95 cursor-pointer group"
            title="Almoxarifado & Equipamentos Hospitalares"
          >
            <Package className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-wider hidden lg:inline">Almoxarifado</span>
          </button>
        )}

        <button
          onClick={toggleSound}
          className="p-2.5 rounded-xl bg-[#14261E] border border-slate-700/60 hover:border-[#C89A3C] text-slate-300 hover:text-white transition-all shadow-md active:scale-95 cursor-pointer"
          title={isSoundOn ? "Silenciar Áudio" : "Ativar Áudio"}
        >
          {isSoundOn ? <Volume2 className="w-5 h-5 text-[#E8B84A]" /> : <VolumeX className="w-5 h-5 text-slate-500" />}
        </button>

        {onOpenSettings && (
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenSettings();
            }}
            className="p-2.5 rounded-xl bg-[#14261E] border border-slate-700/60 hover:border-[#C89A3C] text-slate-300 hover:text-white transition-all shadow-md active:scale-95 cursor-pointer"
            title="Configurações Globais"
          >
            <Settings className="w-5 h-5 text-[#E8B84A]" />
          </button>
        )}

        {currentView !== 'menu' && (
          <button
            onClick={onBackToMenu}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#1A3A2A] to-[#2D5A3F] border border-[#C89A3C]/40 hover:border-[#C89A3C] text-slate-100 font-medium text-sm transition-all shadow-lg active:scale-95 hover:shadow-[#C89A3C]/20 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#C89A3C]" />
            <span>Voltar ao Menu</span>
          </button>
        )}
      </div>
    </header>
  );
};
