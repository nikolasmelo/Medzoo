// src/learning/labs/ForageToxicityLab.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wheat,
  Microscope,
  Sparkles,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Eye,
  TestTube,
  ShieldCheck,
  ShieldAlert,
  Info
} from 'lucide-react';
import { soundManager } from '../../utils/sound';

export interface ForageSample {
  id: string;
  name: string;
  scientificName: string;
  family: 'Poaceae (Gramínea)' | 'Fabaceae (Leguminosa)';
  crudeProteinPercent: number; // PB %
  ndfPercent: number;          // FDN % (Fibra em Detergente Neutro)
  adfPercent: number;          // FDA % (Fibra em Detergente Ácido)
  appearance: string;
  microscopeDescription: string;
  chemicalTestResult: {
    testName: string;
    reaction: string;
    isPositiveToxin: boolean;
  };
  toxicPrinciple?: string;
  isDangerous: boolean;
  clinicalRisk: string;
}

const FORAGE_SAMPLES: ForageSample[] = [
  {
    id: 'tifton_85',
    name: 'Feno de Tifton 85',
    scientificName: 'Cynodon dactylon',
    family: 'Poaceae (Gramínea)',
    crudeProteinPercent: 14.5,
    ndfPercent: 64.0,
    adfPercent: 31.0,
    appearance: 'Colmos finos, coloração verde-clara homogênea, sem poeira ou manchas.',
    microscopeDescription: 'Tecido foliar íntegro com estômatos normais e ausência de conídios ou hifas fúngicas.',
    chemicalTestResult: {
      testName: 'Teste de Picrato e Fluorescência UV',
      reaction: 'Negativo para cianeto e ausência de fluorescência sob luz UV de Wood.',
      isPositiveToxin: false,
    },
    isDangerous: false,
    clinicalRisk: 'Forragem nobre segura, com excelente equilíbrio de fibra e digestibilidade para herbívoros silvestres.',
  },
  {
    id: 'brachiaria_pithomyces',
    name: 'Brachiaria decumbens Degradada',
    scientificName: 'Brachiaria decumbens',
    family: 'Poaceae (Gramínea)',
    crudeProteinPercent: 5.2,
    ndfPercent: 74.0,
    adfPercent: 45.0,
    appearance: 'Pastagem senescente com massa de palha úmida na base e colmos amarelados.',
    microscopeDescription: 'Presença massiva de conídios multicelulares em formato de barril do fungo saprófita Pithomyces chartarum.',
    chemicalTestResult: {
      testName: 'Bioensaio de Esporidesmina / Saponinas Litogênicas',
      reaction: 'Positivo para níveis tóxicos de esporidesmina e saponinas esteroidais.',
      isPositiveToxin: true,
    },
    toxicPrinciple: 'Esporidesmina (Pithomyces chartarum) e Saponinas Protodioscinas',
    isDangerous: true,
    clinicalRisk: 'Colangite necrosante, colestase intra-hepática e fotossensibilização hepatógena aguda por acúmulo de filoeritrina!',
  },
  {
    id: 'sorgo_hcn',
    name: 'Broto Jovem de Sorgo Forrageiro',
    scientificName: 'Sorghum bicolor',
    family: 'Poaceae (Gramínea)',
    crudeProteinPercent: 17.0,
    ndfPercent: 52.0,
    adfPercent: 26.0,
    appearance: 'Planta jovem recém-brotada após período de chuva (altura < 40 cm), folhas verde-escuras tenras.',
    microscopeDescription: 'Células epidérmicas ricas em vacúolos de dhurrina com tecido meristemático em proliferação ativa.',
    chemicalTestResult: {
      testName: 'Teste Rápido de Picrato de Sódio (Papel Guignard)',
      reaction: 'Mudança imediata do papel de amarelo para VERMELHO-TIJOLO intenso (HCN livre detectado).',
      isPositiveToxin: true,
    },
    toxicPrinciple: 'Ácido Cianídrico (HCN / Glicosídeo Cianogênico Dhurrina)',
    isDangerous: true,
    clinicalRisk: 'Bloqueio da citocromo c oxidase mitocondrial, asfixia celular histotóxica fulminante e sangue venoso vermelho-vivo.',
  },
  {
    id: 'alfafa_nobre',
    name: 'Feno de Alfafa Premium',
    scientificName: 'Medicago sativa',
    family: 'Fabaceae (Leguminosa)',
    crudeProteinPercent: 21.5,
    ndfPercent: 41.0,
    adfPercent: 28.5,
    appearance: 'Folhas preservadas aderidas aos caules, coloração verde-esmeralda e aroma doce característico.',
    microscopeDescription: 'Folíolos trifoliolados típicos de leguminosas, sem esporos invasores ou ácaros.',
    chemicalTestResult: {
      testName: 'Varredura de Micotoxinas e Alcaloides',
      reaction: 'Negativo para toxinas. Alta concentração de cálcio elementar e proteína digestível.',
      isPositiveToxin: false,
    },
    isDangerous: false,
    clinicalRisk: 'Excelente suplementação para cervídeos e megaherbívoros em fase de crescimento e lactação.',
  },
  {
    id: 'feno_aspergillus',
    name: 'Feno de Gramínea Bolorento',
    scientificName: 'Panicum maximum (armazenado úmido)',
    family: 'Poaceae (Gramínea)',
    crudeProteinPercent: 7.0,
    ndfPercent: 68.0,
    adfPercent: 41.0,
    appearance: 'Coloração esbranquiçada com pós acinzentados, desprendimento de poeira sufocante e cheiro forte de mofo.',
    microscopeDescription: 'Conidióforos radiados com vesículas terminais esféricas diagnósticas do fungo Aspergillus flavus.',
    chemicalTestResult: {
      testName: 'Iluminação UV de Wood (365 nm)',
      reaction: 'Fluorescência esverdeada intensa e teste cromatográfico positivo para Aflatoxina B1.',
      isPositiveToxin: true,
    },
    toxicPrinciple: 'Aflatoxina B1 (Aspergillus flavus)',
    isDangerous: true,
    clinicalRisk: 'Necrose hepática centrolobular, hepatocarcinogênese, hemorragias digestivas e imunossupressão grave.',
  }
];

interface ForageToxicityLabProps {
  config?: {
    targetSpecies?: string;
  };
  onObjectiveAchieved: () => void;
  isCompleted?: boolean;
  onOpenTutor?: (contextPrompt?: string) => void;
}

export const ForageToxicityLab: React.FC<ForageToxicityLabProps> = ({
  config,
  onObjectiveAchieved,
  isCompleted = false,
  onOpenTutor,
}) => {
  const [selectedSampleIndex, setSelectedSampleIndex] = useState<number>(0);
  const [isMicroscopeActive, setIsMicroscopeActive] = useState<boolean>(false);
  const [isChemicalTestActive, setIsChemicalTestActive] = useState<boolean>(false);

  // Registro de decisões tomadas pelo aluno: sampleId -> 'approved' | 'quarantined'
  const [decisions, setDecisions] = useState<Record<string, 'approved' | 'quarantined'>>({});
  const [hasAchievedSuccess, setHasAchievedSuccess] = useState<boolean>(isCompleted);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const currentSample = FORAGE_SAMPLES[selectedSampleIndex];
  const userDecision = decisions[currentSample.id];

  // Verifica se o aluno acertou todas as 5 amostras
  const checkGlobalProgress = (newDecisions: Record<string, 'approved' | 'quarantined'>) => {
    const answeredCount = Object.keys(newDecisions).length;
    if (answeredCount < FORAGE_SAMPLES.length) return;

    let allCorrect = true;
    for (const sample of FORAGE_SAMPLES) {
      const decision = newDecisions[sample.id];
      const expected = sample.isDangerous ? 'quarantined' : 'approved';
      if (decision !== expected) {
        allCorrect = false;
        break;
      }
    }

    if (allCorrect) {
      soundManager.playSuccess();
      setHasAchievedSuccess(true);
      setFeedbackMessage('Parabéns! Todas as amostras de forrageiras foram triadas com precisão científica.');
      onObjectiveAchieved();
    }
  };

  const handleMakeDecision = (decision: 'approved' | 'quarantined') => {
    const expected = currentSample.isDangerous ? 'quarantined' : 'approved';
    const isCorrect = decision === expected;

    if (isCorrect) {
      soundManager.playClick();
      setFeedbackMessage(`Decisão Correta: ${decision === 'quarantined' ? 'Lote interditado por risco biológico' : 'Forragem homologada como segura'}.`);
    } else {
      soundManager.playError();
      if (decision === 'approved') {
        setFeedbackMessage(`ERRO CRÍTICO: Você liberou uma planta letal (${currentSample.name})! ${currentSample.clinicalRisk}`);
      } else {
        setFeedbackMessage(`Desperdício Nutricional: ${currentSample.name} é uma forragem salubre e nutritiva.`);
      }
    }

    const updated = {
      ...decisions,
      [currentSample.id]: decision,
    };
    setDecisions(updated);
    checkGlobalProgress(updated);
  };

  const handleReset = () => {
    soundManager.playClick();
    setDecisions({});
    setHasAchievedSuccess(false);
    setFeedbackMessage(null);
    setIsMicroscopeActive(false);
    setIsChemicalTestActive(false);
  };

  const handleConsultTutor = () => {
    soundManager.playClick();
    const speciesInfo = config?.targetSpecies ? ` Destinado ao plantel de: ${config.targetSpecies}.` : '';
    const prompt = `Dra. Millena, estou inspecionando a amostra de forragem "${currentSample.name}" (${currentSample.scientificName}).${speciesInfo} FDN: ${currentSample.ndfPercent}%, FDA: ${currentSample.adfPercent}%, PB: ${currentSample.crudeProteinPercent}%. No microscópio: "${currentSample.microscopeDescription}". No teste químico: "${currentSample.chemicalTestResult.reaction}". Como avaliar a toxicidade botânica e o risco para herbívoros silvestres?`;
    onOpenTutor?.(prompt);
  };

  const completedCount = Object.keys(decisions).length;

  return (
    <div className="w-full bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-sans text-white">
      {/* CABEÇALHO DA BANCADA */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Wheat className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Bancada de Bromatologia & Toxicologia de Pastagens {config?.targetSpecies ? `• ${config.targetSpecies}` : ''}
            </span>
            <div className="text-[11px] text-slate-400">
              Inspecione as forragens, detecte esporos de fungos e toxinas botânicas antes de liberar para os recintos.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
            Triagem: {completedCount} / {FORAGE_SAMPLES.length}
          </span>
          <button
            onClick={handleConsultTutor}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Dra. Millena
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
            title="Reiniciar Bancada"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* CARROSSEL / SELETOR DE AMOSTRAS */}
      <div className="bg-slate-900/60 border-b border-slate-800/80 p-3 flex gap-2.5 overflow-x-auto scrollbar-thin">
        {FORAGE_SAMPLES.map((sample, idx) => {
          const isSelected = idx === selectedSampleIndex;
          const decision = decisions[sample.id];
          const isCorrect = decision && ((decision === 'quarantined' && sample.isDangerous) || (decision === 'approved' && !sample.isDangerous));

          return (
            <button
              key={sample.id}
              onClick={() => {
                setSelectedSampleIndex(idx);
                setIsMicroscopeActive(false);
                setIsChemicalTestActive(false);
                soundManager.playClick();
              }}
              className={`px-3.5 py-2 rounded-xl text-left transition-all shrink-0 cursor-pointer flex items-center gap-2.5 border ${
                isSelected
                  ? 'bg-emerald-950/70 border-emerald-500 text-white shadow-md'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-850'
              }`}
            >
              <div className="w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-bold font-mono text-emerald-400">
                0{idx + 1}
              </div>
              <div>
                <div className="text-xs font-bold leading-tight">{sample.name}</div>
                <div className="text-[10px] text-slate-400 italic">{sample.scientificName}</div>
              </div>
              {decision && (
                <div className="ml-1">
                  {isCorrect ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-400" />
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* PAINEL CENTRAL DA AMOSTRA SELECIONADA */}
      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* COLUNA ESQUERDA & CENTRAL: INSPEÇÃO VISUAL E BROMATOLOGIA */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                  {currentSample.family}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {currentSample.name} ({currentSample.scientificName})
                </h3>
              </div>

              {userDecision && (
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold border ${
                    userDecision === 'approved'
                      ? 'bg-emerald-950 text-emerald-300 border-emerald-500/40'
                      : 'bg-red-950 text-red-300 border-red-500/40'
                  }`}
                >
                  Decisão: {userDecision === 'approved' ? 'Lote Aprovado' : 'Lote Interditado'}
                </span>
              )}
            </div>

            {/* TABELA BROMATOLÓGICA CANÔNICA */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Proteína Bruta (PB)</div>
                <div className="text-xl font-bold font-mono text-emerald-300 mt-0.5">
                  {currentSample.crudeProteinPercent}%
                </div>
                <div className="text-[10px] text-slate-500">Massa seca</div>
              </div>

              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Fibra Deterg. Neutro (FDN)</div>
                <div className="text-xl font-bold font-mono text-amber-300 mt-0.5">
                  {currentSample.ndfPercent}%
                </div>
                <div className="text-[10px] text-slate-500">Regula saciedade física</div>
              </div>

              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Fibra Deterg. Ácido (FDA)</div>
                <div className="text-xl font-bold font-mono text-cyan-300 mt-0.5">
                  {currentSample.adfPercent}%
                </div>
                <div className="text-[10px] text-slate-500">Fração indigestível</div>
              </div>
            </div>

            {/* DESCRIÇÃO MACROSCÓPICA */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                Aspecto Macroscópico no Recinto:
              </span>
              <p className="text-xs text-slate-200 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 leading-relaxed">
                {currentSample.appearance}
              </p>
            </div>

            {/* INSTRUMENTOS DE BANCADA INTERATIVOS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* BOTÃO DO MICROSCÓPIO */}
              <button
                onClick={() => {
                  soundManager.playClick();
                  setIsMicroscopeActive(!isMicroscopeActive);
                }}
                className={`p-3 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                  isMicroscopeActive
                    ? 'bg-teal-950/80 border-teal-500 text-teal-200'
                    : 'bg-slate-800/70 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="p-2 rounded-lg bg-teal-500/20 text-teal-400">
                  <Microscope className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold">Microscópio Estereoscópico</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {isMicroscopeActive ? 'Visualizando lâmina' : 'Clique para inspecionar esporos fúngicos'}
                  </div>
                </div>
              </button>

              {/* BOTÃO DO TESTE BIOQUÍMICO */}
              <button
                onClick={() => {
                  soundManager.playClick();
                  setIsChemicalTestActive(!isChemicalTestActive);
                }}
                className={`p-3 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                  isChemicalTestActive
                    ? 'bg-amber-950/80 border-amber-500 text-amber-200'
                    : 'bg-slate-800/70 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                  <TestTube className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold">Teste Rápido de Toxinas</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {isChemicalTestActive ? 'Resultado revelado' : 'Clique para aplicar reagente bioquímico'}
                  </div>
                </div>
              </button>
            </div>

            {/* VISOR DO MICROSCÓPIO (EXPANDIDO) */}
            <AnimatePresence>
              {isMicroscopeActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-slate-950 p-4 rounded-xl border border-teal-500/40 text-xs space-y-2"
                >
                  <div className="flex items-center gap-2 text-teal-400 font-bold uppercase tracking-wider text-[11px]">
                    <Eye className="w-4 h-4" />
                    Achado Microscópico (Lente Objetiva 40x):
                  </div>
                  <p className="text-slate-200 leading-relaxed font-mono">
                    {currentSample.microscopeDescription}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* VISOR DO TESTE QUÍMICO (EXPANDIDO) */}
            <AnimatePresence>
              {isChemicalTestActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`p-4 rounded-xl border text-xs space-y-2 ${
                    currentSample.chemicalTestResult.isPositiveToxin
                      ? 'bg-red-950/70 border-red-500/60 text-red-200'
                      : 'bg-emerald-950/70 border-emerald-500/60 text-emerald-200'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[11px]">
                    <TestTube className="w-4 h-4" />
                    {currentSample.chemicalTestResult.testName}
                  </div>
                  <p className="font-mono text-white leading-relaxed">
                    {currentSample.chemicalTestResult.reaction}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* COLUNA DIREITA: CONDUTA CLÍNICA & DECISÃO DE LIBERAÇÃO */}
        <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
              <span className="font-bold uppercase tracking-wider text-slate-400">Julgamento Toxicológico</span>
              <span className="text-slate-400 font-mono text-[11px]">Decisão Mandatória</span>
            </div>

            <div className="text-xs text-slate-300 leading-relaxed">
              Analise os achados macroscópicos, o exame microscópico e os testes de bancada para decidir o destino deste lote de forragem:
            </div>

            {/* BOTÕES DE CONDUTA */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={() => handleMakeDecision('approved')}
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                  userDecision === 'approved'
                    ? 'bg-emerald-600 text-white ring-2 ring-emerald-400'
                    : 'bg-slate-800 hover:bg-emerald-950/80 text-emerald-300 border border-emerald-500/30'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                Aprovar Lote para Consumo
              </button>

              <button
                onClick={() => handleMakeDecision('quarantined')}
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                  userDecision === 'quarantined'
                    ? 'bg-red-600 text-white ring-2 ring-red-400'
                    : 'bg-slate-800 hover:bg-red-950/80 text-red-300 border border-red-500/30'
                }`}
              >
                <ShieldAlert className="w-4 h-4" />
                Interditar Lote por Risco Tóxico
              </button>
            </div>

            {/* FEEDBACK DA DECISÃO */}
            {feedbackMessage && (
              <div
                className={`p-3 rounded-xl border text-xs leading-relaxed ${
                  feedbackMessage.includes('ERRO') || feedbackMessage.includes('Desperdício')
                    ? 'bg-red-950/80 border-red-500/60 text-red-200'
                    : 'bg-emerald-950/80 border-emerald-500/60 text-emerald-200'
                }`}
              >
                <div className="font-bold flex items-center gap-1.5 mb-1">
                  <Info className="w-4 h-4 shrink-0" />
                  Parecer Técnico:
                </div>
                <span>{feedbackMessage}</span>
              </div>
            )}
          </div>

          {/* DICA PEDAGÓGICA */}
          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-[11px] text-slate-400 space-y-1">
            <span className="font-bold text-slate-300 block">Lembrete de Biossegurança:</span>
            <span>
              Herbívoros silvestres em cativeiro não têm a oportunidade de seleção botânica como na natureza. O fornecimento de forragem contaminada gera óbitos coletivos em poucas horas.
            </span>
          </div>
        </div>
      </div>

      {/* FEEDBACK FINAL DE SUCESSO */}
      <AnimatePresence>
        {hasAchievedSuccess && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-emerald-950/90 border-t border-emerald-500/60 p-4 text-emerald-200 flex items-center justify-between gap-4 text-xs"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="font-bold text-white block">
                  🎯 Excelente! Triagem Botânica Concluída com Maestria!
                </span>
                <span>
                  Você identificou com precisão os riscos de esporidesmina, ácido cianídrico e aflatoxinas, salvaguardando a integridade dos recintos de herbívoros silvestres.
                </span>
              </div>
            </div>
            <span className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-[11px] shrink-0">
              Concluído
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
