import React, { useState, useEffect } from 'react';
import { Settings, X, Volume2, VolumeX, LogOut, Trash2, User } from 'lucide-react';
import { soundManager } from '../utils/sound';
import { supabase } from '../lib/supabase';

interface SettingsModalProps {
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ onClose }) => {
  const [volume, setVolume] = useState<number>(() => Math.round(soundManager.getVolume() * 100));
  const [loadingLogoff, setLoadingLogoff] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (isMounted && user?.email) {
          setUserEmail(user.email);
        }
      } catch (err) {
        console.error('Erro ao buscar usuário:', err);
      }
    };
    fetchUser();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleVolumeChange = (val: number) => {
    setVolume(val);
    soundManager.setVolume(val / 100);
    if (val === 0) {
      soundManager.setEnabled(false);
    } else {
      soundManager.setEnabled(true);
    }
  };

  const handleLogoff = async () => {
    try {
      setLoadingLogoff(true);
      soundManager.playClick();
      await supabase.auth.signOut();
      onClose();
    } catch (err) {
      console.error('Erro ao encerrar sessão:', err);
    } finally {
      setLoadingLogoff(false);
    }
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      'Tem certeza de que deseja excluir sua conta e todo o seu progresso no Medzoo? Esta ação é irreversível.'
    );

    if (!confirmed) return;

    try {
      setLoadingDelete(true);
      soundManager.playClick();
      const { error } = await supabase.rpc('delete_user');
      if (error) {
        console.error('Erro no RPC delete_user:', error);
      }
      await supabase.auth.signOut();
      onClose();
    } catch (err) {
      console.error('Erro ao excluir conta:', err);
      await supabase.auth.signOut();
      onClose();
    } finally {
      setLoadingDelete(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 select-none">
      <div className="bg-stone-900/90 border border-stone-700 rounded-xl p-6 w-full max-w-sm relative shadow-2xl flex flex-col space-y-5 text-stone-100">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-stone-800 pb-3">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-amber-400" />
            <h2 className="text-base font-bold uppercase tracking-wider text-amber-400">
              Configurações Globais
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors cursor-pointer"
            title="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Identification Block */}
        <div className="bg-stone-950/60 border border-stone-800 rounded-lg p-3 flex items-center justify-between gap-2">
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
              VETERINÁRIO LOGADO
            </span>
            <span className="text-xs font-mono font-medium text-amber-400 truncate">
              {userEmail || 'Carregando...'}
            </span>
          </div>
          <User className="w-4 h-4 text-stone-500 shrink-0" />
        </div>

        {/* Volume Control Section */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-300">
            <span className="flex items-center gap-1.5">
              {volume > 0 ? (
                <Volume2 className="w-4 h-4 text-emerald-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-stone-500" />
              )}
              Volume do Áudio
            </span>
            <span className="font-mono text-amber-400">{volume}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => handleVolumeChange(Number(e.target.value))}
            className="w-full accent-emerald-500 bg-stone-950 rounded-lg cursor-pointer h-2"
          />
        </div>

        {/* Actions Divider */}
        <div className="border-t border-stone-800 pt-4 space-y-3">
          {/* Logoff Button */}
          <button
            type="button"
            disabled={loadingLogoff || loadingDelete}
            onClick={handleLogoff}
            className="border border-amber-500/50 text-amber-500 hover:bg-amber-500/10 font-bold py-2.5 px-4 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer w-full text-sm uppercase tracking-wider disabled:opacity-50"
          >
            <LogOut className="w-4 h-4" />
            <span>{loadingLogoff ? 'Encerrando...' : 'Encerrar Sessão (Logoff)'}</span>
          </button>

          {/* Delete Account Button */}
          <button
            type="button"
            disabled={loadingLogoff || loadingDelete}
            onClick={handleDeleteAccount}
            className="border border-red-500/40 text-red-500 hover:bg-red-500/10 font-bold py-2.5 px-4 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer w-full text-sm uppercase tracking-wider disabled:opacity-50"
          >
            <Trash2 className="w-4 h-4" />
            <span>{loadingDelete ? 'Excluindo...' : 'Excluir Conta'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

