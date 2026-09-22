// src/learning/components/AITutorDrawer.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  X,
  Send,
  Lightbulb,
  ShieldAlert,
  Loader2,
  User,
  Bot
} from 'lucide-react';
import type { TutorContext, TutorResponse, TutorMode } from '../types/learning';
import { tutorService } from '../ai/tutorService';

interface ChatMessage {
  id: string;
  sender: 'student' | 'tutor';
  text: string;
  timestamp: string;
  suggestedQuestions?: string[];
  mode?: TutorMode;
}

interface AITutorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  context: TutorContext;
  initialQuestion?: string;
}

export const AITutorDrawer: React.FC<AITutorDrawerProps> = ({
  isOpen,
  onClose,
  context,
  initialQuestion,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'tutor',
      text: 'Olá! Sou a **Dra. Sophia**, sua tutora pedagógica no MedZoo. Estou aqui para guiar seu raciocínio clínico e tirar dúvidas sobre farmacologia, cálculos e segurança dos pacientes. Como posso ajudar agora?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mode: context.mode,
      suggestedQuestions: [
        'Como calcular o volume na seringa?',
        'Como converter % para mg/mL?',
        'Qual o risco de subdose de antimicrobiano?',
      ],
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hintLevel, setHintLevel] = useState<1 | 2 | 3>(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Se receber uma pergunta inicial ao abrir
  useEffect(() => {
    if (initialQuestion && isOpen) {
      handleSendMessage(initialQuestion);
    }
  }, [initialQuestion, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr_${Date.now()}`,
      sender: 'student',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const response: TutorResponse = await tutorService.ask(context, query);
      const tutorMsg: ChatMessage = {
        id: `tut_${Date.now()}`,
        sender: 'tutor',
        text: response.message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedQuestions: response.suggestedQuestions,
        mode: response.mode,
      };
      setMessages((prev) => [...prev, tutorMsg]);
    } catch (err) {
      console.error('[AITutorDrawer] Erro ao consultar tutor:', err);
      const errorMsg: ChatMessage = {
        id: `err_${Date.now()}`,
        sender: 'tutor',
        text: 'Desculpe, ocorreu uma instabilidade na consulta. Lembre-se da regra de ouro: V = (Peso × Dose) ÷ Concentração!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRequestHint = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await tutorService.getHint(context, hintLevel);
      const tutorMsg: ChatMessage = {
        id: `hint_${Date.now()}`,
        sender: 'tutor',
        text: response.message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        mode: 'hint',
      };
      setMessages((prev) => [...prev, tutorMsg]);
      setHintLevel((prev) => (prev < 3 ? ((prev + 1) as 1 | 2 | 3) : 1));
    } catch (err) {
      console.error('[AITutorDrawer] Erro ao pedir dica:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/40 backdrop-blur-xs">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-full sm:w-[460px] h-full bg-slate-900 border-l border-emerald-500/20 text-slate-100 flex flex-col shadow-2xl"
        >
          {/* TOPO: PERFIL DA TUTORA */}
          <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold shadow-md shadow-emerald-500/20">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white">Dra. Sophia</h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Tutora IA
                  </span>
                </div>
                <p className="text-xs text-slate-400">Guia Pedagógica e Raciocínio Clínico</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* AVISO DO PRINCÍPIO 7: DIÁLOGO NÃO ALTERA DOMÍNIO */}
          <div className="bg-amber-950/40 border-b border-amber-800/40 px-4 py-2 flex items-center gap-2 text-[11px] text-amber-300">
            <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400" />
            <span>
              Perguntas e pistas não alteram o <strong>domínio (masteryScore)</strong>. Apenas exercícios e avaliações contam.
            </span>
          </div>

          {/* HISTÓRICO DE MENSAGENS */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'student' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'tutor' && (
                  <div className="w-7 h-7 rounded-full bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-1">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                    msg.sender === 'student'
                      ? 'bg-emerald-600 text-white rounded-tr-none'
                      : 'bg-slate-800/90 text-slate-200 border border-slate-700/60 rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* SUGESTÕES DE PERGUNTAS DA TUTORA */}
                  {msg.suggestedQuestions && msg.suggestedQuestions.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-slate-700/50 space-y-1.5">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                        Perguntas sugeridas:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {msg.suggestedQuestions.map((q, qIdx) => (
                          <button
                            key={qIdx}
                            onClick={() => handleSendMessage(q)}
                            className="text-left text-[11px] bg-slate-900/80 hover:bg-slate-700 text-emerald-300 hover:text-white px-2.5 py-1 rounded-lg border border-emerald-500/20 transition-all cursor-pointer"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <span className="text-[9px] text-slate-400/80 block mt-2 text-right">
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'student' && (
                  <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 shrink-0 mt-1">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/40 p-3 rounded-xl max-w-xs border border-slate-700/40">
                <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
                <span>Dra. Sophia está formulando a orientação...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* BARRA DE DICA RÁPIDA */}
          <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between gap-2 text-xs">
            <button
              onClick={handleRequestHint}
              disabled={isLoading}
              className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              <span>Pedir Pista Gradual (Nível {hintLevel}/3)</span>
            </button>
            <span className="text-[10px] text-slate-500 font-mono">Modo: {context.mode}</span>
          </div>

          {/* INPUT DO CHAT */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Digite sua dúvida clínica ou raciocínio..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              disabled={isLoading}
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 outline-hidden focus:border-emerald-500 transition-colors"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="w-10 h-10 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 flex items-center justify-center text-white transition-all cursor-pointer shadow-md shadow-emerald-600/20"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
