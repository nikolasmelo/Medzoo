import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, Key, UserPlus, LogIn, AlertCircle, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { getAssetUrl } from '../utils/assetHelper';
import { soundManager } from '../utils/sound';

interface AuthScreenProps {
  onAuthComplete: () => void;
}

type AuthMode = 'login' | 'signup' | 'recover' | 'update-password';

export const AuthScreen: React.FC<AuthScreenProps> = ({ onAuthComplete }) => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Helper for detecting recovery params in URL or sessionStorage
  const isRecoveryFlow = () => {
    return (
      window.location.hash.includes('type=recovery') ||
      window.location.search.includes('type=recovery') ||
      sessionStorage.getItem('medzoo_recovering') === 'true'
    );
  };

  // Listen for PASSWORD_RECOVERY event or check recovery URL hash/search/sessionStorage
  useEffect(() => {
    if (isRecoveryFlow()) {
      sessionStorage.setItem('medzoo_recovering', 'true');
      setMode('update-password');
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY' || isRecoveryFlow()) {
        sessionStorage.setItem('medzoo_recovering', 'true');
        setMode('update-password');
        setErrorMsg(null);
        setSuccessMsg(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setLoading(true);
    soundManager.playClick();

    try {
      if (mode === 'update-password') {
        const { error } = await supabase.auth.updateUser({
          password: password,
        });

        if (error) {
          setErrorMsg(error.message);
        } else {
          setSuccessMsg('Senha atualizada com sucesso! Faça login com a sua nova senha.');
          
          // Limpeza da flag de recuperação do sessionStorage
          sessionStorage.removeItem('medzoo_recovering');

          // Limpeza dos parâmetros da URL
          if (window.location.hash || window.location.search) {
            window.history.replaceState(null, '', window.location.pathname);
          }

          // SignOut de segurança para deslogar a sessão temporária de recovery
          await supabase.auth.signOut();

          setTimeout(() => {
            setMode('login');
            setPassword('');
            setEmail('');
          }, 2000);
        }
      } else if (mode === 'signup') {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) {
          setErrorMsg(error.message);
        } else if (data.session) {
          // Sessão direta obtida (ex: confirmação desativada no backend)
          onAuthComplete();
        } else if (data.user) {
          // Conta criada, mas precisa de confirmação de e-mail
          setSuccessMsg(
            'Conta criada com sucesso! Verifique sua caixa de entrada e confirme o e-mail antes de fazer o login.'
          );
          setMode('login');
        }
      } else if (mode === 'recover') {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}`,
        });

        if (error) {
          setErrorMsg(error.message);
        } else {
          setSuccessMsg('Instruções enviadas para o e-mail.');
        }
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          setErrorMsg(error.message);
        } else if (data.session) {
          onAuthComplete();
        }
      }
    } catch (err: any) {
      setErrorMsg(err?.message || 'Erro inesperado na autenticação.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 select-none">
      {/* Background Image */}
      <img
        src={getAssetUrl('assets/backgrounds/backgroundSelection.jpg')}
        alt=""
        className="fixed inset-0 w-full h-full object-cover object-center z-0 pointer-events-none"
      />
      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-stone-950/85 backdrop-blur-md z-[1] pointer-events-none" />

      {/* Auth Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-stone-900/70 backdrop-blur-lg border border-stone-700 shadow-2xl rounded-2xl max-w-md w-full p-8 relative z-10 flex flex-col items-center"
      >
        {/* Header Title & Subtitle */}
        <h1 className="text-amber-400 font-bold text-3xl tracking-widest text-center">
          MEDZOO
        </h1>
        <p className="text-stone-400 text-xs tracking-[0.2em] uppercase mt-1 mb-6 text-center">
          {mode === 'recover'
            ? 'RECUPERAÇÃO DE CREDENCIAL'
            : mode === 'update-password'
            ? 'DEFINIR NOVA SENHA'
            : 'SISTEMA DE TRIAGEM CARFS'}
        </p>

        {/* Tactical Minimalist Tabs (Ocultas no modo 'recover' e 'update-password') */}
        {mode !== 'recover' && mode !== 'update-password' && (
          <div className="w-full flex border-b border-stone-800 mb-6">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setErrorMsg(null);
                setSuccessMsg(null);
              }}
              className={`flex-1 py-2.5 px-4 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border-b-2 text-center ${
                mode === 'login'
                  ? 'border-emerald-500 text-emerald-400'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              Entrar
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('signup');
                setErrorMsg(null);
                setSuccessMsg(null);
              }}
              className={`flex-1 py-2.5 px-4 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border-b-2 text-center ${
                mode === 'signup'
                  ? 'border-emerald-500 text-emerald-400'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              Criar Conta
            </button>
          </div>
        )}

        {/* Error Alert */}
        {errorMsg && (
          <div className="w-full mb-4 p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Success Alert */}
        {successMsg && (
          <div className="w-full mb-4 p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-xs font-medium text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/30">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {/* Campo de E-mail (oculto no modo 'update-password') */}
          {mode !== 'update-password' && (
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-300 mb-1.5">
                E-mail
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-stone-500 absolute left-3 top-3.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="veterinario@medzoo.carfs"
                  className="bg-stone-950 border border-stone-800 text-stone-100 text-sm rounded-lg pl-10 pr-4 py-2.5 w-full focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all outline-none"
                />
              </div>
            </div>
          )}

          {/* Campo de Senha (oculto no modo 'recover') */}
          {mode !== 'recover' && (
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-300">
                  {mode === 'update-password' ? 'NOVA SENHA' : 'Senha'}
                </label>
                {mode === 'login' && (
                  <button
                    type="button"
                    onClick={() => {
                      setMode('recover');
                      setErrorMsg(null);
                      setSuccessMsg(null);
                    }}
                    className="text-xs text-stone-500 hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    Esqueceu a senha?
                  </button>
                )}
              </div>
              <div className="relative">
                <Key className="w-4 h-4 text-stone-500 absolute left-3 top-3.5" />
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-stone-950 border border-stone-800 text-stone-100 text-sm rounded-lg pl-10 pr-4 py-2.5 w-full focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all outline-none"
                />
              </div>
            </div>
          )}

          {/* Botão de Ação Principal */}
          <button
            type="submit"
            disabled={loading}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-lg w-full transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
          >
            {loading ? (
              <span>Processando...</span>
            ) : mode === 'update-password' ? (
              <>
                <Key className="w-4 h-4" />
                <span>ATUALIZAR SENHA</span>
              </>
            ) : mode === 'recover' ? (
              <>
                <Mail className="w-4 h-4" />
                <span>ENVIAR INSTRUÇÕES</span>
              </>
            ) : mode === 'signup' ? (
              <>
                <UserPlus className="w-4 h-4" />
                <span>Cadastrar Conta</span>
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                <span>Acessar Sistema</span>
              </>
            )}
          </button>

          {/* Botão de Acesso Convidado (Modo Offline / Rápido) */}
          {mode === 'login' && (
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                onAuthComplete();
              }}
              className="w-full py-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-300 font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
            >
              <span>Jogar em Modo Convidado (Sem Login)</span>
            </button>
          )}
        </form>

        {/* Link para Voltar ao Acesso no modo 'recover' */}
        {mode === 'recover' && (
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setErrorMsg(null);
                setSuccessMsg(null);
              }}
              className="text-sm text-stone-500 hover:text-stone-300 transition-colors cursor-pointer"
            >
              ← Voltar ao Acesso
            </button>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-stone-800 text-center w-full">
          <p className="text-[10px] text-stone-500 uppercase tracking-widest flex items-center justify-center gap-1">
            <Lock className="w-3 h-3 text-stone-600" />
            Acesso Restrito • Sistema de Triagem CARFS
          </p>
        </div>
      </motion.div>
    </div>
  );
};
