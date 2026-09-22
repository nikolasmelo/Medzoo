// src/learning/components/SectionRenderer.tsx
import React, { useState } from 'react';
import { BookOpen, Sparkles, CheckCircle2, ArrowRight, HelpCircle, Activity, FlaskConical } from 'lucide-react';
import type { LessonSection } from '../types/learning';
import { PharmacologyLabAdapter } from '../labs/PharmacologyLabAdapter';

interface SectionRendererProps {
  section: LessonSection;
  onComplete: () => void;
  isCompleted: boolean;
  onOpenTutor?: (question?: string) => void;
}

export const SectionRenderer: React.FC<SectionRendererProps> = ({
  section,
  onComplete,
  isCompleted,
  onOpenTutor,
}) => {
  // Estado local para o simulador interativo de fórmula (demo)
  const [demoWeight, setDemoWeight] = useState<number>(2.5);
  const [demoDose, setDemoDose] = useState<number>(1.0);
  const [demoConc, setDemoConc] = useState<number>(2.0);

  const demoVolume = (demoWeight * demoDose) / demoConc;

  // Helper para renderizar formatação básica de markdown
  const renderFormattedMarkdown = (text?: string) => {
    if (!text) return null;

    // Processa linhas simples: títulos, listas e blocos de destaque
    const paragraphs = text.split('\n\n');
    return (
      <div className="space-y-4 text-emerald-950/90 leading-relaxed font-sans">
        {paragraphs.map((para, idx) => {
          if (para.startsWith('> ')) {
            return (
              <div
                key={idx}
                className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl my-3 text-emerald-900 shadow-xs"
              >
                <p className="whitespace-pre-line font-medium text-sm sm:text-base">
                  {para.replace(/^>\s*/gm, '')}
                </p>
              </div>
            );
          }

          if (para.startsWith('$$')) {
            const formula = para.replace(/\$\$/g, '').trim();
            return (
              <div
                key={idx}
                className="bg-slate-900 text-emerald-400 p-4 rounded-xl text-center font-mono text-base sm:text-lg my-3 shadow-inner tracking-wide"
              >
                {formula}
              </div>
            );
          }

          if (para.startsWith('1. ') || para.startsWith('- ')) {
            return (
              <div key={idx} className="bg-white/80 border border-emerald-100 p-4 rounded-xl shadow-xs">
                <p className="whitespace-pre-line text-sm sm:text-base font-normal">
                  {para}
                </p>
              </div>
            );
          }

          return (
            <p key={idx} className="whitespace-pre-line text-sm sm:text-base">
              {para}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* CABEÇALHO DA SEÇÃO */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
            {section.type === 'theory' && <BookOpen className="w-5 h-5" />}
            {section.type === 'interactive_demo' && <Activity className="w-5 h-5" />}
            {section.type === 'lab' && <FlaskConical className="w-5 h-5" />}
            {section.type === 'reflection' && <Sparkles className="w-5 h-5" />}
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              {section.type === 'theory' && 'Fundamentação Teórica'}
              {section.type === 'interactive_demo' && 'Demonstração Interativa'}
              {section.type === 'lab' && 'Didactic Sandbox Isolado'}
              {section.type === 'reflection' && 'Síntese & Reflexão'}
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-800">
              {section.title}
            </h2>
          </div>
        </div>

        {isCompleted && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Concluído
          </span>
        )}
      </div>

      {/* CONTEÚDO PRINCIPAL DA SEÇÃO */}
      <div className="bg-white/95 rounded-2xl p-6 border border-emerald-100 shadow-sm space-y-6">
        {section.contentMarkdown && renderFormattedMarkdown(section.contentMarkdown)}

        {/* DEMO INTERATIVA DE PARÂMETROS */}
        {section.type === 'interactive_demo' && (
          <div className="bg-slate-900 rounded-2xl p-6 text-white space-y-5 shadow-lg border border-slate-800">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Activity className="w-4 h-4" />
                Simulador Dinâmico da Fórmula Universal
              </span>
              <span className="text-xs text-slate-400 font-mono">V = (P × D) ÷ C</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* PESO */}
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60 space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Peso (P)</span>
                  <span className="font-mono text-emerald-300 font-bold">{demoWeight.toFixed(2)} kg</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="10"
                  step="0.1"
                  value={demoWeight}
                  onChange={(e) => setDemoWeight(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <p className="text-[11px] text-slate-400">Variação de aves a médios mamíferos</p>
              </div>

              {/* DOSE */}
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60 space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Dose (D)</span>
                  <span className="font-mono text-emerald-300 font-bold">{demoDose.toFixed(1)} mg/kg</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="5.0"
                  step="0.1"
                  value={demoDose}
                  onChange={(e) => setDemoDose(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <p className="text-[11px] text-slate-400">Prescrição conforme protocolo de espécie</p>
              </div>

              {/* CONCENTRAÇÃO */}
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60 space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Frasco / Conc (C)</span>
                  <span className="font-mono text-emerald-300 font-bold">{demoConc.toFixed(1)} mg/mL</span>
                </div>
                <select
                  value={demoConc}
                  onChange={(e) => setDemoConc(parseFloat(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs text-emerald-300 font-mono outline-hidden focus:border-emerald-500"
                >
                  <option value={2.0}>Meloxicam 0,2% (2 mg/mL)</option>
                  <option value={10.0}>Atropina 1,0% (10 mg/mL)</option>
                  <option value={20.0}>Meloxicam 2,0% (20 mg/mL)</option>
                  <option value={50.0}>Enrofloxacina 5,0% (50 mg/mL)</option>
                </select>
                <p className="text-[11px] text-slate-400">Rótulo comercial do medicamento</p>
              </div>
            </div>

            {/* RESULTADO EM TEMPO REAL */}
            <div className="bg-emerald-950/70 border border-emerald-500/40 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-emerald-300 font-medium">Massa Total a Administrar:</div>
                <div className="text-lg font-bold font-mono text-white">
                  {(demoWeight * demoDose).toFixed(2)} mg
                </div>
              </div>
              <div className="sm:border-l sm:border-emerald-800/60 sm:pl-6 text-center sm:text-right">
                <div className="text-xs text-emerald-300 font-medium">Volume Líquido a Aspirar na Seringa:</div>
                <div className="text-2xl font-black font-mono text-emerald-400">
                  {demoVolume.toFixed(3)} mL
                </div>
              </div>
            </div>
          </div>
        )}

        {/* LABORATÓRIO SANDBOX EMBUTIDO */}
        {section.type === 'lab' && section.labConfig && (
          <div className="pt-2">
            <PharmacologyLabAdapter
              config={section.labConfig as any}
              onObjectiveAchieved={onComplete}
              isCompleted={isCompleted}
            />
          </div>
        )}

        {/* CARD FORMAL DE CADEIA CAUSAL (QUANDO DISPONÍVEL) */}
        {section.causalChain && (
          <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-md space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 border-b border-slate-800 pb-2">
              <Activity className="w-4 h-4" />
              Cadeia Causal Obrigatória (Causa → Mecanismo → Efeito → Clínica)
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="bg-slate-800/80 p-3 rounded-xl border border-red-500/30">
                <div className="text-red-400 font-bold uppercase mb-1">1. Causa Inicial</div>
                <div className="text-slate-200">{section.causalChain.cause}</div>
              </div>

              <div className="bg-slate-800/80 p-3 rounded-xl border border-amber-500/30">
                <div className="text-amber-400 font-bold uppercase mb-1">2. Mecanismo Fisiológico</div>
                <div className="text-slate-200">{section.causalChain.mechanism}</div>
              </div>

              <div className="bg-slate-800/80 p-3 rounded-xl border border-blue-500/30">
                <div className="text-blue-400 font-bold uppercase mb-1">3. Efeito Biológico</div>
                <div className="text-slate-200">{section.causalChain.effect}</div>
              </div>

              <div className="bg-slate-800/80 p-3 rounded-xl border border-emerald-500/30">
                <div className="text-emerald-400 font-bold uppercase mb-1">4. Consequência Clínica</div>
                <div className="text-slate-200">{section.causalChain.clinicalMeaning}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* AÇÕES DE RODAPÉ DA SEÇÃO */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <button
          onClick={() => onOpenTutor?.(`Tenho uma dúvida sobre a seção: ${section.title}`)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer"
        >
          <HelpCircle className="w-4 h-4 text-emerald-600" />
          Tirar Dúvida com a Tutora
        </button>

        {section.type !== 'lab' && (
          <button
            onClick={onComplete}
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer ${
              isCompleted
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-200 hover:bg-emerald-200'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                Seção Concluída • Avançar
              </>
            ) : (
              <>
                Compreendi o Conceito
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};
