// src/learning/components/RichLessonContent.tsx
import React from 'react';
import {
  BookOpen,
  Lightbulb,
  AlertTriangle,
  Microscope,
  ArrowRight,
  GitBranch,
  Layers,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface RichLessonContentProps {
  content?: string;
  className?: string;
}

/**
 * Normaliza e limpa o texto inline:
 * - Corrige o bug do \t + o ($	o$) gerado por escapes em template strings
 * - Converte símbolos químicos e iônicos comuns
 * - Converte notação LaTeX simples de setas
 */
export const sanitizeMathAndArrows = (raw: string): string => {
  return raw
    // Corrige tabulação acidental seguida de 'o' ou '$  o$'
    .replace(/\$\s*o\$/g, '→')
    .replace(/\$\s*\\?to\s*\$/g, '→')
    .replace(/\\to\b/g, '→')
    .replace(/-->/g, '→')
    .replace(/\$\s*-->\s*\$/g, '→')
    // Íons e fórmulas químicas comuns em veterinária
    .replace(/\$Na\^\+\/K\^\+\$/g, 'Na⁺/K⁺')
    .replace(/Na\^\+\/K\^\+/g, 'Na⁺/K⁺')
    .replace(/\$Ca\^\{?2\+\}?\$?/g, 'Ca²⁺')
    .replace(/Ca\^\{?2\+\}?/g, 'Ca²⁺')
    .replace(/\$H\^\+\$/g, 'H⁺')
    .replace(/\$K\^\+\$/g, 'K⁺')
    .replace(/\$Cl\^-\$/g, 'Cl⁻')
    .replace(/\\text\{([^}]+)\}/g, '$1');
};

/**
 * Renderiza formatação inline rica: **negrito**, *itálico*, `código`, fórmulas e setas.
 */
export const renderInlineFormattedText = (rawText: string): React.ReactNode => {
  const sanitized = sanitizeMathAndArrows(rawText);

  // Divide por tokens de negrito (**...**), itálico (*...*), código (`...`), ou setas (→)
  const parts = sanitized.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|→)/g);

  return parts.map((part, index) => {
    if (!part) return null;

    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-bold text-white tracking-wide">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={index} className="italic text-emerald-200/90 font-serif">
          {part.slice(1, -1)}
        </em>
      );
    }

    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={index}
          className="px-1.5 py-0.5 rounded-md bg-slate-950/80 text-emerald-300 font-mono text-xs border border-emerald-900/50 shadow-inner"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    if (part === '→') {
      return (
        <span
          key={index}
          className="inline-flex items-center justify-center px-1 text-emerald-400 font-bold select-none text-base"
        >
          →
        </span>
      );
    }

    return <span key={index}>{part}</span>;
  });
};

interface FlowNode {
  id: string;
  label: string;
}

interface FlowEdge {
  from: string;
  to: string;
}

/**
 * Renderizador de fluxogramas e cascatas fisiopatológicas
 * Transforma sintaxe Mermaid (flowchart TD / LR) em cartões visuais conectados e responsivos
 */
const MermaidFlowRenderer: React.FC<{ code: string }> = ({ code }) => {
  const lines = code.split('\n').map((l) => l.trim()).filter((l) => l.length > 0);

  const nodesMap = new Map<string, FlowNode>();
  const edges: FlowEdge[] = [];

  const nodeRegex = /([A-Za-z0-9_]+)\["([^"]+)"\]|([A-Za-z0-9_]+)\[([^\]]+)\]/;
  const edgeRegex = /([A-Za-z0-9_]+)\s*-->\s*([A-Za-z0-9_]+)/;

  lines.forEach((line) => {
    // Procura nós na linha
    const matches = line.matchAll(new RegExp(nodeRegex, 'g'));
    for (const match of matches) {
      const id = match[1] || match[3];
      const label = match[2] || match[4];
      if (id && label && !nodesMap.has(id)) {
        nodesMap.set(id, { id, label });
      }
    }

    // Procura conexões A --> B
    const edgeMatch = line.match(edgeRegex);
    if (edgeMatch) {
      edges.push({ from: edgeMatch[1], to: edgeMatch[2] });
    }
  });

  // Se não foi possível extrair a estrutura, renderiza bloco de código limpo
  if (nodesMap.size === 0) {
    return (
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono text-slate-300">
        <pre>{code}</pre>
      </div>
    );
  }

  // Agrupa os nós por profundidade/fluxo ou nós de raiz vs folhas
  const nodes = Array.from(nodesMap.values());
  const fromSet = new Set(edges.map((e) => e.from));
  const toSet = new Set(edges.map((e) => e.to));

  const rootNodes = nodes.filter((n) => !toSet.has(n.id));
  const intermediateNodes = nodes.filter((n) => toSet.has(n.id) && fromSet.has(n.id));
  const leafNodes = nodes.filter((n) => toSet.has(n.id) && !fromSet.has(n.id));

  return (
    <div className="bg-slate-950/90 rounded-2xl p-5 border border-emerald-500/30 shadow-xl space-y-4 my-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
          <GitBranch className="w-4 h-4 text-emerald-400" />
          Mapa de Cascata Fisiopatológica & Causal
        </div>
        <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
          <Layers className="w-3.5 h-3.5" />
          {nodes.length} etapas no circuito
        </span>
      </div>

      {/* Renderização sequencial ou em ramificação */}
      <div className="space-y-3 pt-1">
        {/* Raiz / Início */}
        {rootNodes.map((node) => (
          <div key={node.id} className="relative">
            <div className="bg-gradient-to-r from-red-950/50 to-slate-900 border border-red-500/40 rounded-xl p-3.5 flex items-start gap-3 shadow-md">
              <span className="w-6 h-6 rounded-lg bg-red-500/20 text-red-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-red-500/40">
                1
              </span>
              <div className="flex-1">
                <div className="text-[11px] uppercase tracking-wider text-red-400 font-bold mb-0.5">
                  Estímulo Primário / Lesão Inicial
                </div>
                <div className="text-sm font-semibold text-white">
                  {renderInlineFormattedText(node.label)}
                </div>
              </div>
            </div>
            <div className="flex justify-center my-1.5 text-emerald-400">
              <ChevronRight className="w-5 h-5 rotate-90" />
            </div>
          </div>
        ))}

        {/* Níveis Intermediários */}
        {intermediateNodes.map((node, idx) => (
          <div key={node.id} className="relative">
            <div className="bg-slate-900/90 border border-amber-500/40 rounded-xl p-3.5 flex items-start gap-3 shadow-md">
              <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-amber-500/40">
                {rootNodes.length + idx + 1}
              </span>
              <div className="flex-1">
                <div className="text-[11px] uppercase tracking-wider text-amber-400 font-bold mb-0.5">
                  Reação Celular & Efeito Metabólico
                </div>
                <div className="text-sm font-medium text-slate-100">
                  {renderInlineFormattedText(node.label)}
                </div>
              </div>
            </div>
            <div className="flex justify-center my-1.5 text-emerald-400">
              <ChevronRight className="w-5 h-5 rotate-90" />
            </div>
          </div>
        ))}

        {/* Nós Finais / Desfechos / Necrose / Ramificações */}
        {leafNodes.length > 0 && (
          <div className="space-y-2 pt-1">
            <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5 px-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              Desfecho Patológico & Manifestações Finais
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {leafNodes.map((node) => (
                <div
                  key={node.id}
                  className="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-3.5 flex items-start gap-2.5 shadow-md"
                >
                  <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm font-semibold text-emerald-100">
                    {renderInlineFormattedText(node.label)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Renderizador de Tabelas Markdown (| col 1 | col 2 |)
 */
const MarkdownTableRenderer: React.FC<{ rawTable: string }> = ({ rawTable }) => {
  const lines = rawTable.trim().split('\n').map((l) => l.trim()).filter((l) => l.length > 0);
  if (lines.length < 2) return null;

  const parseRow = (line: string) => {
    return line
      .replace(/^\|/, '')
      .replace(/\|$/, '')
      .split('|')
      .map((cell) => cell.trim());
  };

  const headerCells = parseRow(lines[0]);
  const bodyRows = lines.slice(2).map(parseRow);

  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-slate-700/70 shadow-2xl bg-slate-950/80">
      <div className="overflow-x-auto max-w-full">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-slate-800/90 border-b border-slate-700 text-emerald-400 uppercase tracking-wider text-[11px] font-bold">
              {headerCells.map((header, idx) => (
                <th key={idx} className="py-3 px-4 sm:px-5 font-bold">
                  {renderInlineFormattedText(header)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80">
            {bodyRows.map((row, rIdx) => (
              <tr
                key={rIdx}
                className={rIdx % 2 === 0 ? 'bg-slate-900/50 hover:bg-slate-800/50 transition-colors' : 'bg-slate-900/20 hover:bg-slate-800/50 transition-colors'}
              >
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="py-3.5 px-4 sm:px-5 text-slate-200 leading-normal align-top">
                    {renderInlineFormattedText(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const RichLessonContent: React.FC<RichLessonContentProps> = ({ content, className = '' }) => {
  if (!content) return null;

  // Sanitiza no nível geral para evitar tabulações quebradas
  const sanitizedContent = sanitizeMathAndArrows(content);

  // Divide o texto em blocos sem quebrar blocos fechados de código ```...```
  const rawBlocks = sanitizedContent.split(/\n\s*\n/);

  return (
    <div className={`space-y-5 text-slate-200 leading-relaxed font-sans ${className}`}>
      {rawBlocks.map((block, idx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // 1. DIVISOR HORIZONTAL (--- ou ***)
        if (trimmed === '---' || trimmed === '***') {
          return <hr key={idx} className="my-6 border-slate-800 border-t-2" />;
        }

        // 2. TÍTULOS (H1, H2, H3, H4)
        if (trimmed.startsWith('# ')) {
          return (
            <h1
              key={idx}
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-4 pb-2 border-b border-slate-800 flex items-center gap-3"
            >
              <span className="w-2.5 h-7 rounded-full bg-emerald-500 inline-block" />
              {renderInlineFormattedText(trimmed.replace(/^#\s+/, ''))}
            </h1>
          );
        }

        if (trimmed.startsWith('## ')) {
          return (
            <h2
              key={idx}
              className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-3 pb-1 border-b border-slate-800/80 flex items-center gap-2.5 text-emerald-400"
            >
              <span className="w-2 h-5 rounded-full bg-emerald-400 inline-block" />
              {renderInlineFormattedText(trimmed.replace(/^##\s+/, ''))}
            </h2>
          );
        }

        if (trimmed.startsWith('### ')) {
          return (
            <h3
              key={idx}
              className="text-lg sm:text-xl font-bold text-white tracking-tight pt-2 flex items-center gap-2"
            >
              <span className="w-1.5 h-4 rounded-full bg-emerald-500 inline-block" />
              {renderInlineFormattedText(trimmed.replace(/^###\s+/, ''))}
            </h3>
          );
        }

        if (trimmed.startsWith('#### ')) {
          return (
            <h4 key={idx} className="text-base sm:text-lg font-bold text-emerald-300 pt-1">
              {renderInlineFormattedText(trimmed.replace(/^####\s+/, ''))}
            </h4>
          );
        }

        // 3. FLUXOGRAMAS E DIAGRAMAS (```mermaid ... ```)
        if (trimmed.includes('```mermaid') || trimmed.startsWith('flowchart TD') || trimmed.startsWith('flowchart LR')) {
          const cleanCode = trimmed.replace(/```mermaid\n?|```/g, '').trim();
          return <MermaidFlowRenderer key={idx} code={cleanCode} />;
        }

        // 4. TABELAS MARKDOWN (| ... |)
        if (trimmed.startsWith('|') && trimmed.includes('|') && trimmed.split('\n').length >= 3) {
          return <MarkdownTableRenderer key={idx} rawTable={trimmed} />;
        }

        // 5. BOXES UNIVERSITÁRIOS / BLOCKQUOTES (> ...)
        if (trimmed.startsWith('>')) {
          const quoteText = trimmed.replace(/^>\s*/gm, '');

          // A. Box de Referência Canônica Universitária
          if (quoteText.includes('📖 Referência') || quoteText.includes('📖 Bibliografia') || quoteText.includes('Fonte Canônica')) {
            return (
              <div
                key={idx}
                className="bg-cyan-950/30 border-l-4 border-cyan-400 p-4 sm:p-5 rounded-r-2xl my-4 text-cyan-200 border border-cyan-900/40 shadow-lg relative overflow-hidden"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  Literatura Canônica & Base Universitária
                </div>
                <div className="text-xs sm:text-sm font-medium leading-relaxed text-cyan-100/90">
                  {renderInlineFormattedText(quoteText.replace(/^📖\s*(Referência Canônica|Bibliografia|Fonte Canônica):?\s*/i, ''))}
                </div>
              </div>
            );
          }

          // B. Box de Pérola Clínica / Prova de Residência
          if (quoteText.includes('💡 Pérola') || quoteText.includes('💡 Dica') || quoteText.includes('Residência')) {
            return (
              <div
                key={idx}
                className="bg-amber-950/30 border-l-4 border-amber-400 p-4 sm:p-5 rounded-r-2xl my-4 text-amber-200 border border-amber-900/40 shadow-lg"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  Pérola Clínica & Destaque de Residência
                </div>
                <div className="text-xs sm:text-sm font-medium leading-relaxed text-amber-100/90">
                  {renderInlineFormattedText(quoteText.replace(/^💡\s*(Pérola Clínica|Dica de Ouro|Residência):?\s*/i, ''))}
                </div>
              </div>
            );
          }

          // C. Box de Alerta Crítico / Emergência Fatal
          if (quoteText.includes('⚠️ Alerta') || quoteText.includes('⚠️ Atenção') || quoteText.includes('Risco Fatal')) {
            return (
              <div
                key={idx}
                className="bg-rose-950/30 border-l-4 border-rose-500 p-4 sm:p-5 rounded-r-2xl my-4 text-rose-200 border border-rose-900/40 shadow-lg"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  Alerta Crítico & Erro Fisiopatológico Fatal
                </div>
                <div className="text-xs sm:text-sm font-medium leading-relaxed text-rose-100/90">
                  {renderInlineFormattedText(quoteText.replace(/^⚠️\s*(Alerta Crítico|Atenção|Risco Fatal):?\s*/i, ''))}
                </div>
              </div>
            );
          }

          // D. Box de Histopatologia / Microscopia
          if (quoteText.includes('🔬 Histopatologia') || quoteText.includes('🔬 Microscopia') || quoteText.includes('Macroscopia')) {
            return (
              <div
                key={idx}
                className="bg-indigo-950/30 border-l-4 border-indigo-400 p-4 sm:p-5 rounded-r-2xl my-4 text-indigo-200 border border-indigo-900/40 shadow-lg"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
                  <Microscope className="w-4 h-4 text-indigo-400" />
                  Achados de Microscopia & Lâmina Histopatológica
                </div>
                <div className="text-xs sm:text-sm font-medium leading-relaxed text-indigo-100/90">
                  {renderInlineFormattedText(quoteText.replace(/^🔬\s*(Histopatologia|Microscopia|Macroscopia):?\s*/i, ''))}
                </div>
              </div>
            );
          }

          // E. Box de Citação Geral
          return (
            <div
              key={idx}
              className="bg-emerald-950/40 border-l-4 border-emerald-500 p-4 rounded-r-xl my-3 text-emerald-200 border border-emerald-900/30 shadow-xs"
            >
              <div className="font-medium text-sm sm:text-base leading-relaxed">
                {renderInlineFormattedText(quoteText)}
              </div>
            </div>
          );
        }

        // 6. FÓRMULAS DESTACADAS ($$ ... $$)
        if (trimmed.startsWith('$$') && trimmed.endsWith('$$')) {
          const formula = trimmed.replace(/\$\$/g, '').trim();
          return (
            <div
              key={idx}
              className="bg-slate-950 text-emerald-400 p-4 sm:p-5 rounded-2xl text-center font-mono text-base sm:text-lg my-4 shadow-inner tracking-wider border border-emerald-900/40"
            >
              {renderInlineFormattedText(formula)}
            </div>
          );
        }

        // 7. LISTAS NUMERADAS OU TÓPICOS COM TRAÇO (1. ... / - ...)
        const lines = trimmed.split('\n');
        const isOrderedList = lines.every((l) => /^\d+\.\s+/.test(l.trim()));
        const isBulletList = lines.every((l) => /^[-*]\s+/.test(l.trim()));

        if (isOrderedList) {
          return (
            <div key={idx} className="space-y-2.5 my-3">
              {lines.map((item, i) => {
                const itemMatch = item.trim().match(/^(\d+)\.\s+(.*)/);
                if (!itemMatch) return null;
                const num = itemMatch[1];
                const text = itemMatch[2];
                return (
                  <div
                    key={i}
                    className="bg-slate-800/80 border border-slate-700/60 p-3.5 sm:p-4 rounded-xl shadow-xs text-slate-200 flex items-start gap-3.5 hover:border-slate-600 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-emerald-500/30">
                      {num}
                    </span>
                    <div className="text-sm sm:text-base leading-relaxed flex-1">
                      {renderInlineFormattedText(text)}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }

        if (isBulletList) {
          return (
            <div key={idx} className="space-y-2 my-3">
              {lines.map((item, i) => {
                const cleanText = item.trim().replace(/^[-*]\s+/, '');
                return (
                  <div
                    key={i}
                    className="bg-slate-800/50 border border-slate-700/40 p-3 rounded-xl text-slate-200 flex items-start gap-3 hover:border-slate-600 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <div className="text-sm sm:text-base leading-relaxed flex-1">
                      {renderInlineFormattedText(cleanText)}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }

        // 8. PARÁGRAFO PADRÃO COM FORMATAÇÃO INLINE
        return (
          <p key={idx} className="text-sm sm:text-base leading-relaxed text-slate-200">
            {renderInlineFormattedText(trimmed)}
          </p>
        );
      })}
    </div>
  );
};
