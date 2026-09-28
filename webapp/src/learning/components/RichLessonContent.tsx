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
  ChevronRight,
  Quote
} from 'lucide-react';

export interface RichLessonContentProps {
  content?: string;
  className?: string;
}

/**
 * Normaliza e limpa o texto inline:
 * - Corrige o bug do \t + o ($	o$) gerado por escapes em template strings JS/TS
 * - Converte comandos LaTeX comuns para símbolos Unicode legíveis
 * - Converte símbolos químicos, íons e potências comuns em veterinária
 * - Remove delimitadores $ desnecessários em variáveis simples
 */
export const sanitizeMathAndArrows = (raw: string): string => {
  return raw
    // 1. Escapes acidentais de tabulação em template strings (\to -> \t + o, \text -> \t + ext, \times -> \t + imes)
    .replace(/\$\s*(\t|\\t)?o\s*\$/g, '→')
    .replace(/\$\s*(\\to|→)\s*\$/g, '→')
    .replace(/(\t|\\t)o\b/g, '→')
    .replace(/\\to\b/g, '→')
    .replace(/-->/g, '→')
    .replace(/\$\s*-->\s*\$/g, '→')
    .replace(/(\t|\\t)imes\b|\\times\b/g, '×')
    .replace(/(\t|\\t)ext\{([^}]+)\}|\\text\{([^}]+)\}/g, '$2$3')
    .replace(/\\mathbf\{([^}]+)\}/g, '$1')
    .replace(/\\mathrm\{([^}]+)\}/g, '$1')
    // 2. Setas e relações matemáticas LaTeX
    .replace(/\\longrightarrow/g, '→')
    .replace(/\\longleftrightarrow/g, '⇄')
    .replace(/\\approx\b/g, '≈')
    .replace(/\\le\b|\\leq\b/g, '≤')
    .replace(/\\ge\b|\\geq\b/g, '≥')
    .replace(/\\pm\b/g, '±')
    .replace(/\\Delta\b/g, 'Δ')
    .replace(/\\alpha\b/g, 'α')
    .replace(/\\beta\b/g, 'β')
    .replace(/\\mu\b/g, 'μ')
    // 3. Fórmulas químicas, gases e íons frequentes
    .replace(/\$Na\^\+\/K\^\+\$/g, 'Na⁺/K⁺')
    .replace(/Na\^\+\/K\^\+/g, 'Na⁺/K⁺')
    .replace(/\$Ca\^\{?2\+\}?\$?/g, 'Ca²⁺')
    .replace(/Ca\^\{?2\+\}?/g, 'Ca²⁺')
    .replace(/\$H\^\+\$/g, 'H⁺')
    .replace(/\$K\^\+\$/g, 'K⁺')
    .replace(/\$Cl\^-\$/g, 'Cl⁻')
    .replace(/\$Fe\^\{?2\+\}?\$?/g, 'Fe²⁺')
    .replace(/\$Fe\^\{?3\+\}?\$?/g, 'Fe³⁺')
    .replace(/\$FeS\$/g, 'FeS')
    .replace(/\$H_2S\$/g, 'H₂S')
    .replace(/\$CO_2\$/g, 'CO₂')
    .replace(/CO_2\b/g, 'CO₂')
    .replace(/\$O_2\$/g, 'O₂')
    .replace(/O_2\b/g, 'O₂')
    .replace(/\$EtCO_2\$/g, 'EtCO₂')
    .replace(/EtCO_2\b/g, 'EtCO₂')
    .replace(/\$InCO_2\$/g, 'InCO₂')
    .replace(/InCO_2\b/g, 'InCO₂')
    .replace(/\$PGF_\{?2\\alpha\}?\$?/g, 'PGF₂α')
    // 4. Potências e sobrescritos/subscritos
    .replace(/\^\{0,75\}|\^0,75|\^\{0\.75\}|\^0\.75/g, '⁰·⁷⁵')
    .replace(/\^2\b|\^\{2\}/g, '²')
    .replace(/\^3\b|\^\{3\}/g, '³')
    .replace(/\$10\^\{?10\}?\$?/g, '10¹⁰')
    .replace(/\$10\^\{?6\}?\$?/g, '10⁶')
    // 5. Limpeza de delimitadores $ em variáveis simples ($P$ -> P, $BMR$ -> BMR)
    .replace(/\$([A-Za-zΔαβμ0-9_]+)\$/g, '$1');
};

/**
 * Renderiza formatação inline: **negrito**, *itálico*, `código`, fórmulas e setas.
 */
export const renderInlineFormattedText = (rawText: string): React.ReactNode => {
  const sanitized = sanitizeMathAndArrows(rawText);

  // Divide por tokens de negrito (**...**), itálico (*...*), código (`...`), ou setas (→)
  const parts = sanitized.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|→|⇄)/g);

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

    if (part === '⇄') {
      return (
        <span
          key={index}
          className="inline-flex items-center justify-center px-1 text-teal-400 font-bold select-none text-base"
        >
          ⇄
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
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto">
        <pre>{code}</pre>
      </div>
    );
  }

  const nodes = Array.from(nodesMap.values());
  const fromSet = new Set(edges.map((e) => e.from));
  const toSet = new Set(edges.map((e) => e.to));

  const rootNodes = nodes.filter((n) => !toSet.has(n.id));
  const intermediateNodes = nodes.filter((n) => toSet.has(n.id) && fromSet.has(n.id));
  const leafNodes = nodes.filter((n) => toSet.has(n.id) && !fromSet.has(n.id));

  return (
    <div className="bg-slate-950/90 rounded-2xl p-4 sm:p-5 border border-emerald-500/30 shadow-xl space-y-4 my-5">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
          <GitBranch className="w-4 h-4 text-emerald-400 shrink-0" />
          Mapa de Cascata Fisiopatológica & Causal
        </div>
        <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
          <Layers className="w-3.5 h-3.5" />
          {nodes.length} etapas no circuito
        </span>
      </div>

      <div className="space-y-3 pt-1">
        {/* Raiz / Início */}
        {rootNodes.map((node) => (
          <div key={node.id} className="relative">
            <div className="bg-gradient-to-r from-red-950/50 to-slate-900 border border-red-500/40 rounded-xl p-3.5 flex items-start gap-3 shadow-md">
              <span className="w-6 h-6 rounded-lg bg-red-500/20 text-red-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-red-500/40">
                1
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] uppercase tracking-wider text-red-400 font-bold mb-0.5">
                  Estímulo Primário / Lesão Inicial
                </div>
                <div className="text-sm font-semibold text-white break-words">
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
              <div className="flex-1 min-w-0">
                <div className="text-[11px] uppercase tracking-wider text-amber-400 font-bold mb-0.5">
                  Reação Celular & Efeito Metabólico
                </div>
                <div className="text-sm font-medium text-slate-100 break-words">
                  {renderInlineFormattedText(node.label)}
                </div>
              </div>
            </div>
            <div className="flex justify-center my-1.5 text-emerald-400">
              <ChevronRight className="w-5 h-5 rotate-90" />
            </div>
          </div>
        ))}

        {/* Nós Finais / Desfechos */}
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
                  <div className="text-xs sm:text-sm font-semibold text-emerald-100 break-words">
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
const MarkdownTableRenderer: React.FC<{ headers: string[]; rows: string[][] }> = ({ headers, rows }) => {
  if (headers.length === 0 && rows.length === 0) return null;

  return (
    <div className="my-5 rounded-2xl overflow-hidden border border-slate-700/70 shadow-2xl bg-slate-950/90">
      <div className="overflow-x-auto max-w-full scrollbar-thin scrollbar-thumb-slate-700">
        <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[320px]">
          <thead>
            <tr className="bg-slate-800/95 border-b border-slate-700 text-emerald-400 uppercase tracking-wider text-[11px] font-bold">
              {headers.map((header, idx) => (
                <th key={idx} className="py-3 px-3.5 sm:px-4 font-bold min-w-[120px]">
                  {renderInlineFormattedText(header)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80">
            {rows.map((row, rIdx) => (
              <tr
                key={rIdx}
                className={
                  rIdx % 2 === 0
                    ? 'bg-slate-900/50 hover:bg-slate-800/60 transition-colors'
                    : 'bg-slate-900/20 hover:bg-slate-800/60 transition-colors'
                }
              >
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="py-3 px-3.5 sm:px-4 text-slate-200 leading-normal align-top">
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

export type ParsedBlock =
  | { type: 'heading'; level: number; text: string }
  | { type: 'mermaid'; code: string }
  | { type: 'code'; lang: string; code: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'callout'; kind: 'reference' | 'pearl' | 'alert' | 'histopathology' | 'quote'; text: string }
  | { type: 'formula'; formula: string }
  | { type: 'ordered_list'; items: string[] }
  | { type: 'bullet_list'; items: string[] }
  | { type: 'hr' }
  | { type: 'paragraph'; text: string };

/**
 * Tokenizador robusto por máquina de estados linha por linha.
 * Isola blocos mesmo quando gerados por LLMs sem quebras duplas de linha (\n\n).
 */
export function parseMarkdownBlocks(rawContent: string): ParsedBlock[] {
  const sanitized = sanitizeMathAndArrows(rawContent);
  const lines = sanitized.split('\n');
  const blocks: ParsedBlock[] = [];
  let i = 0;

  const isTableSeparator = (l: string) =>
    /^\|?\s*(:?-+:?\s*\|)+\s*(:?-+:?\s*)?\|?\s*$/.test(l.trim());
  const isTableRow = (l: string) =>
    l.trim().startsWith('|') && l.trim().includes('|') && l.trim().length > 1;

  const parseCells = (rowStr: string): string[] =>
    rowStr
      .trim()
      .replace(/^\|/, '')
      .replace(/\|$/, '')
      .split('|')
      .map((c) => c.trim());

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    // 1. Cercas de Código (```...```)
    if (trimmed.startsWith('```')) {
      const lang = trimmed.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // consome o fechamento ```
      const code = codeLines.join('\n');
      if (lang === 'mermaid' || code.includes('flowchart TD') || code.includes('flowchart LR')) {
        blocks.push({ type: 'mermaid', code });
      } else {
        blocks.push({ type: 'code', lang, code });
      }
      continue;
    }

    // 2. Fluxograma Mermaid direto sem cercas
    if (trimmed.startsWith('flowchart TD') || trimmed.startsWith('flowchart LR')) {
      const codeLines = [trimmed];
      i++;
      while (
        i < lines.length &&
        lines[i].trim() &&
        !lines[i].trim().startsWith('#') &&
        !lines[i].trim().startsWith('>')
      ) {
        codeLines.push(lines[i]);
        i++;
      }
      blocks.push({ type: 'mermaid', code: codeLines.join('\n') });
      continue;
    }

    // 3. Títulos Markdown (# ... ####)
    const headingMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      blocks.push({
        type: 'heading',
        level: headingMatch[1].length,
        text: headingMatch[2].trim()
      });
      i++;
      continue;
    }

    // 4. Divisores horizontais (--- ou *** ou ___)
    if (/^(\*{3,}|-{3,}|_{3,})$/.test(trimmed)) {
      blocks.push({ type: 'hr' });
      i++;
      continue;
    }

    // 5. Blocos de Citação / Caixas Acadêmicas (> ...)
    if (trimmed.startsWith('>')) {
      const quoteLines: string[] = [];
      while (
        i < lines.length &&
        (lines[i].trim().startsWith('>') ||
          (lines[i].trim() === '' &&
            quoteLines.length > 0 &&
            i + 1 < lines.length &&
            lines[i + 1].trim().startsWith('>')))
      ) {
        if (lines[i].trim().startsWith('>')) {
          quoteLines.push(lines[i].trim().replace(/^>\s*/, ''));
        }
        i++;
      }
      const fullText = quoteLines.join('\n');
      let kind: 'reference' | 'pearl' | 'alert' | 'histopathology' | 'quote' = 'quote';
      if (/📖\s*(Referência|Bibliografia|Fonte)/i.test(fullText) || /Literatura Canônica/i.test(fullText) || /\[!NOTE\]/i.test(fullText)) {
        kind = 'reference';
      } else if (/💡\s*(Pérola|Dica|Residência)/i.test(fullText) || /\[!TIP\]/i.test(fullText)) {
        kind = 'pearl';
      } else if (/⚠️\s*(Alerta|Atenção|Risco Fatal)/i.test(fullText) || /\[!(WARNING|CAUTION|IMPORTANT)\]/i.test(fullText)) {
        kind = 'alert';
      } else if (/🔬\s*(Histopatologia|Microscopia|Macroscopia)/i.test(fullText)) {
        kind = 'histopathology';
      }

      blocks.push({ type: 'callout', kind, text: fullText });
      continue;
    }

    // 6. Fórmulas Matemáticas em Bloco ($$...$$)
    if (trimmed.startsWith('$$')) {
      if (trimmed.endsWith('$$') && trimmed.length > 4) {
        blocks.push({ type: 'formula', formula: trimmed.slice(2, -2).trim() });
        i++;
        continue;
      } else {
        const formulaLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].trim().endsWith('$$')) {
          formulaLines.push(lines[i]);
          i++;
        }
        i++; // consome fechamento $$
        blocks.push({
          type: 'formula',
          formula: formulaLines.join('\n').replace(/\$\$/g, '').trim()
        });
        continue;
      }
    }

    // 7. Tabelas Markdown (| Col 1 | Col 2 |)
    if (isTableRow(line) && i + 1 < lines.length && isTableSeparator(lines[i + 1])) {
      const headers = parseCells(line);
      i += 2; // pula o cabeçalho e a linha de separadores
      const rows: string[][] = [];
      while (i < lines.length && isTableRow(lines[i])) {
        rows.push(parseCells(lines[i]));
        i++;
      }
      blocks.push({ type: 'table', headers, rows });
      continue;
    }

    // 8. Listas Numeradas (1. ..., 2. ...)
    if (/^\d+[\.)]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+[\.)]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+[\.)]\s+/, ''));
        i++;
      }
      blocks.push({ type: 'ordered_list', items });
      continue;
    }

    // 9. Listas com Marcadores (- ..., * ..., • ...)
    if (/^[-*•]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*•]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*•]\s+/, ''));
        i++;
      }
      blocks.push({ type: 'bullet_list', items });
      continue;
    }

    // 10. Parágrafo Normal
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith('#') &&
      !lines[i].trim().startsWith('>') &&
      !lines[i].trim().startsWith('```') &&
      !lines[i].trim().startsWith('$$') &&
      !(isTableRow(lines[i]) && i + 1 < lines.length && isTableSeparator(lines[i + 1])) &&
      !/^\d+[\.)]\s+/.test(lines[i].trim()) &&
      !/^[-*•]\s+/.test(lines[i].trim()) &&
      !/^(\*{3,}|-{3,}|_{3,})$/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }
    if (paraLines.length > 0) {
      blocks.push({ type: 'paragraph', text: paraLines.join(' ') });
    }
  }

  return blocks;
}

export const RichLessonContent: React.FC<RichLessonContentProps> = ({
  content,
  className = ''
}) => {
  if (!content) return null;

  const blocks = parseMarkdownBlocks(content);

  return (
    <div className={`space-y-4 text-slate-200 leading-relaxed font-sans ${className}`}>
      {blocks.map((block, idx) => {
        // 1. DIVISOR HORIZONTAL
        if (block.type === 'hr') {
          return <hr key={idx} className="my-5 border-slate-800 border-t-2" />;
        }

        // 2. TÍTULOS
        if (block.type === 'heading') {
          if (block.level === 1) {
            return (
              <h1
                key={idx}
                className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-3 pb-1 border-b border-slate-800 flex items-center gap-3"
              >
                <span className="w-2.5 h-7 rounded-full bg-emerald-500 inline-block shrink-0" />
                <span>{renderInlineFormattedText(block.text)}</span>
              </h1>
            );
          }
          if (block.level === 2) {
            return (
              <h2
                key={idx}
                className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-2.5 pb-1 border-b border-slate-800/80 flex items-center gap-2.5 text-emerald-400"
              >
                <span className="w-2 h-5 rounded-full bg-emerald-400 inline-block shrink-0" />
                <span>{renderInlineFormattedText(block.text)}</span>
              </h2>
            );
          }
          if (block.level === 3) {
            return (
              <h3
                key={idx}
                className="text-base sm:text-lg font-bold text-white tracking-tight pt-2 flex items-center gap-2"
              >
                <span className="w-1.5 h-4 rounded-full bg-emerald-500 inline-block shrink-0" />
                <span>{renderInlineFormattedText(block.text)}</span>
              </h3>
            );
          }
          return (
            <h4 key={idx} className="text-sm sm:text-base font-bold text-emerald-300 pt-1">
              {renderInlineFormattedText(block.text)}
            </h4>
          );
        }

        // 3. FLUXOGRAMAS MERMAID
        if (block.type === 'mermaid') {
          return <MermaidFlowRenderer key={idx} code={block.code} />;
        }

        // 4. BLOCO DE CÓDIGO
        if (block.type === 'code') {
          return (
            <div
              key={idx}
              className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono text-emerald-300 overflow-x-auto shadow-inner my-3"
            >
              <pre>{block.code}</pre>
            </div>
          );
        }

        // 5. TABELAS MARKDOWN
        if (block.type === 'table') {
          return <MarkdownTableRenderer key={idx} headers={block.headers} rows={block.rows} />;
        }

        // 6. CAIXAS UNIVERSITÁRIAS / CALLOUTS
        if (block.type === 'callout') {
          if (block.kind === 'reference') {
            return (
              <div
                key={idx}
                className="bg-cyan-950/30 border-l-4 border-cyan-400 p-4 sm:p-5 rounded-r-2xl my-3 text-cyan-200 border border-cyan-900/40 shadow-lg relative overflow-hidden"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1.5">
                  <BookOpen className="w-4 h-4 text-cyan-400 shrink-0" />
                  Literatura Canônica & Base Universitária
                </div>
                <div className="text-xs sm:text-sm font-medium leading-relaxed text-cyan-100/90">
                  {renderInlineFormattedText(
                    block.text.replace(/^📖\s*(Referência Canônica|Bibliografia|Fonte Canônica):?\s*/i, '')
                  )}
                </div>
              </div>
            );
          }

          if (block.kind === 'pearl') {
            return (
              <div
                key={idx}
                className="bg-amber-950/30 border-l-4 border-amber-400 p-4 sm:p-5 rounded-r-2xl my-3 text-amber-200 border border-amber-900/40 shadow-lg"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
                  Pérola Clínica & Destaque de Residência
                </div>
                <div className="text-xs sm:text-sm font-medium leading-relaxed text-amber-100/90">
                  {renderInlineFormattedText(
                    block.text
                      .replace(/^\[!(TIP|NOTE)\]\s*/i, '')
                      .replace(/^💡\s*(Pérola Clínica|Dica de Ouro|Residência):?\s*/i, '')
                  )}
                </div>
              </div>
            );
          }

          if (block.kind === 'alert') {
            return (
              <div
                key={idx}
                className="bg-rose-950/30 border-l-4 border-rose-500 p-4 sm:p-5 rounded-r-2xl my-3 text-rose-200 border border-rose-900/40 shadow-lg"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                  Alerta Crítico & Erro Fisiopatológico Fatal
                </div>
                <div className="text-xs sm:text-sm font-medium leading-relaxed text-rose-100/90">
                  {renderInlineFormattedText(
                    block.text
                      .replace(/^\[!(IMPORTANT|WARNING|CAUTION)\]\s*/i, '')
                      .replace(/^⚠️\s*(Alerta Crítico|Atenção|Risco Fatal):?\s*/i, '')
                  )}
                </div>
              </div>
            );
          }

          if (block.kind === 'histopathology') {
            return (
              <div
                key={idx}
                className="bg-indigo-950/30 border-l-4 border-indigo-400 p-4 sm:p-5 rounded-r-2xl my-3 text-indigo-200 border border-indigo-900/40 shadow-lg"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1.5">
                  <Microscope className="w-4 h-4 text-indigo-400 shrink-0" />
                  Achados de Microscopia & Lâmina Histopatológica
                </div>
                <div className="text-xs sm:text-sm font-medium leading-relaxed text-indigo-100/90">
                  {renderInlineFormattedText(
                    block.text.replace(/^🔬\s*(Histopatologia|Microscopia|Macroscopia):?\s*/i, '')
                  )}
                </div>
              </div>
            );
          }

          return (
            <div
              key={idx}
              className="bg-emerald-950/40 border-l-4 border-emerald-500 p-3.5 sm:p-4 rounded-r-xl my-3 text-emerald-200 border border-emerald-900/30 shadow-xs flex items-start gap-2.5"
            >
              <Quote className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="font-medium text-xs sm:text-sm leading-relaxed">
                {renderInlineFormattedText(block.text)}
              </div>
            </div>
          );
        }

        // 7. FÓRMULAS DESTACADAS ($$ ... $$)
        if (block.type === 'formula') {
          return (
            <div
              key={idx}
              className="bg-slate-950 text-emerald-400 p-3.5 sm:p-4 rounded-xl text-center font-mono text-sm sm:text-base my-3 shadow-inner tracking-wider border border-emerald-900/40"
            >
              {renderInlineFormattedText(block.formula)}
            </div>
          );
        }

        // 8. LISTAS NUMERADAS
        if (block.type === 'ordered_list') {
          return (
            <div key={idx} className="space-y-2 my-3">
              {block.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-800/80 border border-slate-700/60 p-3 sm:p-3.5 rounded-xl shadow-xs text-slate-200 flex items-start gap-3 hover:border-slate-600 transition-colors"
                >
                  <span className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-emerald-500/30">
                    {i + 1}
                  </span>
                  <div className="text-xs sm:text-sm leading-relaxed flex-1">
                    {renderInlineFormattedText(item)}
                  </div>
                </div>
              ))}
            </div>
          );
        }

        // 9. LISTAS COM MARCADORES
        if (block.type === 'bullet_list') {
          return (
            <div key={idx} className="space-y-1.5 my-3">
              {block.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-800/50 border border-slate-700/40 p-2.5 sm:p-3 rounded-xl text-slate-200 flex items-start gap-2.5 hover:border-slate-600 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <div className="text-xs sm:text-sm leading-relaxed flex-1">
                    {renderInlineFormattedText(item)}
                  </div>
                </div>
              ))}
            </div>
          );
        }

        // 10. PARÁGRAFO PADRÃO
        return (
          <p key={idx} className="text-xs sm:text-sm leading-relaxed text-slate-200">
            {renderInlineFormattedText(block.text)}
          </p>
        );
      })}
    </div>
  );
};
