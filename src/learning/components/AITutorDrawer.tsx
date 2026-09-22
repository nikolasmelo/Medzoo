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
  Bot,
  RotateCcw,
  Calculator,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import type {
  TutorContext,
  TutorResponse,
  TutorMode,
  ConversationMessage,
  DeterministicToolExecution
} from '../types/learning';
import { tutorService } from '../ai/tutorService';

interface ChatMessage {
  id: string;
  sender: 'student' | 'tutor';
  text: string;
  timestamp: string;
  suggestedQuestions?: string[];
  mode?: TutorMode;
  provider?: 'openai' | 'local' | 'fallback';
  toolCallsExecuted?: DeterministicToolExecution[];
  citedChunks?: string[];
}

interface AITutorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  context: TutorContext;
  initialQuestion?: string;
}

const INITIAL_WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  sender: 'tutor',
  text: 'Olá! Sou a **Dra. Millena**, sua tutora pedagógica no MedZoo. Estou aqui para guiar seu raciocínio clínico e tirar dúvidas sobre farmacologia, cálculos e segurança dos pacientes com auxílio de IA Generativa e validação de cálculos. Como posso ajudar agora?',
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  suggestedQuestions: [
    'Como calcular o volume na seringa?',
    'Como converter % para mg/mL?',
    'Qual o risco de subdose de antimicrobiano?',
    'Qual a dose de Meloxicam para aves?'
  ]
};

export const AITutorDrawer: React.FC<AITutorDrawerProps> = ({
  isOpen,
  onClose,
  context,
  initialQuestion,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_WELCOME_MESSAGE]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hintLevel, setHintLevel] = useState<1 | 2 | 3>(1);
  const [currentProvider, setCurrentProvider] = useState<'openai' | 'local' | 'fallback'>('openai');
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

  const handleResetChat = () => {
    setMessages([INITIAL_WELCOME_MESSAGE]);
    setInputText('');
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr_${Date.now()}`,
      sender: 'student',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInputText('');
    setIsLoading(true);

    // Converter para histórico de mensagens para a IA
    const historyPayload: ConversationMessage[] = updatedMessages
      .slice(-6)
      .map((m) => ({
        role: m.sender === 'student' ? 'user' : 'assistant',
        content: m.text,
        timestamp: m.timestamp
      }));

    const enrichedContext: TutorContext = {
      ...context,
      history: historyPayload
    };

    try {
      const response: TutorResponse = await tutorService.ask(enrichedContext, query);
      const prov = response.provider || tutorService.getLastProvider();
      setCurrentProvider(prov);

      const tutorMsg: ChatMessage = {
        id: `tut_${Date.now()}`,
        sender: 'tutor',
        text: response.message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedQuestions: response.suggestedQuestions,
        mode: response.mode,
        provider: prov,
        toolCallsExecuted: response.toolCallsExecuted,
        citedChunks: response.citedChunks
      };
      setMessages((prev) => [...prev, tutorMsg]);
    } catch (err) {
      console.error('[AITutorDrawer] Erro ao consultar tutor:', err);
      setCurrentProvider('local');
      const errorMsg: ChatMessage = {
        id: `err_${Date.now()}`,
        sender: 'tutor',
        text: 'Desculpe, ocorreu uma instabilidade na consulta. Lembre-se da regra de ouro: V = (Peso × Dose) ÷ Concentração!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        provider: 'local'
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
      const prov = response.provider || tutorService.getLastProvider();
      setCurrentProvider(prov);

      const tutorMsg: ChatMessage = {
        id: `hint_${Date.now()}`,
        sender: 'tutor',
        text: response.message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        mode: 'hint',
        provider: prov
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
          className="w-full sm:w-[480px] h-full bg-slate-900 border-l border-emerald-500/20 text-slate-100 flex flex-col shadow-2xl"
        >
          {/* TOPO: PERFIL DA DRA. MILLENA */}
          <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold shadow-md shadow-emerald-500/20">
                  <Bot className="w-5 h-5" />
                </div>
                <div className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-slate-900 rounded-full ${
                  currentProvider === 'openai' ? 'bg-emerald-400' : 'bg-amber-400'
                }`} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white">Dra. Millena</h3>
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${
                    currentProvider === 'openai'
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                      : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                  }`}>
                    {currentProvider === 'openai' ? 'IA Generativa Real' : 'Contingência Local'}
                  </span>
                </div>
                <p className="text-xs text-slate-400">Guia Pedagógica e Raciocínio Clínico</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleResetChat}
                title="Reiniciar conversa"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onClose}
                title="Fechar"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* AVISO DO PRINCÍPIO 7: DIÁLOGO NÃO ALTERA DOMÍNIO */}
          <div className="bg-amber-950/40 border-b border-amber-800/40 px-4 py-2 flex items-center gap-2 text-[11px] text-amber-300">
            <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400" />
            <span>
              Perguntas e conversas com a IA não alteram o <strong>domínio (masteryScore)</strong>. Apenas exercícios e avaliações contam.
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
                  className={`max-w-[88%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                    msg.sender === 'student'
                      ? 'bg-emerald-600 text-white rounded-tr-none'
                      : 'bg-slate-800/90 text-slate-200 border border-slate-700/60 rounded-tl-none'
                  }`}
                >
                  {/* BADGES DE FERRAMENTAS EXECUTADAS DETERMINISTICAMENTE */}
                  {msg.toolCallsExecuted && msg.toolCallsExecuted.length > 0 && (
                    <div className="mb-2 space-y-1">
                      {msg.toolCallsExecuted.map((tc, tcIdx) => (
                        <div
                          key={tcIdx}
                          className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-teal-950/80 border border-teal-500/30 text-[10px] text-teal-300 font-mono"
                        >
                          <Calculator className="w-3 h-3 shrink-0 text-teal-400" />
                          <span>Cálculo Verificado ({tc.toolName})</span>
                          <CheckCircle2 className="w-3 h-3 text-teal-400 ml-auto" />
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* CITAS DE CHUNKS CANÔNICOS DE KNOWLEDGE */}
                  {msg.citedChunks && msg.citedChunks.length > 0 && (
                    <div className="mt-2.5 pt-2 border-t border-slate-700/40 flex items-center gap-1.5 text-[10px] text-slate-400">
                      <Cpu className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>Fundamentado na base canônica do MedZoo</span>
                    </div>
                  )}

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

                  <div className="flex items-center justify-between mt-2 text-[9px] text-slate-400/80">
                    <span>{msg.provider === 'openai' ? 'Dra. Millena • IA' : 'Dra. Millena • Base Local'}</span>
                    <span>{msg.timestamp}</span>
                  </div>
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
                <span>Dra. Millena está formulando a orientação com IA...</span>
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
