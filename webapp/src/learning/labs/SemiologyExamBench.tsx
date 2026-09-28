// src/learning/labs/SemiologyExamBench.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Stethoscope,
  Thermometer,
  Eye,
  Hand,
  Activity,
  CheckCircle2,
  XCircle,
  Sparkles,
  Info,
  ShieldAlert
} from 'lucide-react';
import { soundManager } from '../../utils/sound';

export interface SemiologyCase {
  id: string;
  species: 'Canino' | 'Bovino' | 'Equino';
  patientName: string;
  breed: string;
  age: string;
  chiefComplaint: string;
  vitals: {
    hr: number;
    rr: number;
    temp: number;
    crt: number;
    mucosa: 'rósea' | 'pálida' | 'ictérica' | 'cianótica' | 'congesta com linha tóxica';
  };
  examSpots: {
    id: string;
    name: string;
    toolRequired: 'stethoscope' | 'thermometer' | 'flashlight' | 'palpation';
    locationDescription: string;
    findingAudioTitle?: string;
    findingDescription: string;
    isKeyFinding: boolean;
  }[];
  correctDiagnosisId: string;
  differentialOptions: {
    id: string;
    title: string;
    isCorrect: boolean;
    rationale: string;
  }[];
}

const SEMIOLOGY_CASES: SemiologyCase[] = [
  {
    id: 'case_dog_mitral',
    species: 'Canino',
    patientName: 'Thor',
    breed: 'Poodle / SRD',
    age: '11 anos',
    chiefComplaint: 'Tosse seca engasgada noturna após caminhadas curtas e cansaço fácil.',
    vitals: {
      hr: 135,
      rr: 32,
      temp: 38.6,
      crt: 1.5,
      mucosa: 'rósea'
    },
    examSpots: [
      {
        id: 'spot_mitral',
        name: 'Foco Valvar Mitral (5º EIC esquerdo ventral)',
        toolRequired: 'stethoscope',
        locationDescription: 'Ápice cardíaco esquerdo na altura do cotovelo',
        findingDescription: 'Sopro sistólico áspero holossistólico de regurgitação Grau IV/VI irradiando para hemitórax direito, mascarando B1.',
        isKeyFinding: true
      },
      {
        id: 'spot_lungs',
        name: 'Campos Pulmonares Dorsais Bilaterais',
        toolRequired: 'stethoscope',
        locationDescription: 'Terço médio e dorsal de ambos os hemitórax',
        findingDescription: 'Murmúrio vesicular audível e limpo, sem estertores crepitantes úmidos no momento.',
        isKeyFinding: false
      },
      {
        id: 'spot_mucosa',
        name: 'Mucosa Oral e Gengival',
        toolRequired: 'flashlight',
        locationDescription: 'Gengiva marginal e mucosa jugal',
        findingDescription: 'Coloração rósea normocorada, umidade adequada e TPC de 1,5 segundos.',
        isKeyFinding: false
      },
      {
        id: 'spot_lymphnodes',
        name: 'Palpação de Linfonodos Periféricos',
        toolRequired: 'palpation',
        locationDescription: 'Linfonodos submandibulares, pré-escapulares e poplíteos',
        findingDescription: 'Linfonodos normotróficos, simétricos, móveis, consistência elástica e indolores.',
        isKeyFinding: false
      },
      {
        id: 'spot_temp',
        name: 'Termometria Retal Clínica',
        toolRequired: 'thermometer',
        locationDescription: 'Ampola retal',
        findingDescription: 'Temperatura corpórea central em 38,6 °C (normotermia para a espécie canina).',
        isKeyFinding: false
      }
    ],
    correctDiagnosisId: 'diag_mitral_regurg',
    differentialOptions: [
      {
        id: 'diag_mitral_regurg',
        title: 'Endocardiose de Valva Mitral (Insuficiência Mitral Crônica)',
        isCorrect: true,
        rationale: 'O sopro holossistólico IV/VI no 5º EIC esquerdo em cão idoso com tosse noturna é patognomônico de refluxo mitral por degeneração mixomatosa valvar.'
      },
      {
        id: 'diag_kennel_cough',
        title: 'Traqueobronquite Infecciosa Canina ("Tosse dos Canis")',
        isCorrect: false,
        rationale: 'Incorreto. A tosse dos canis cursa com reflexo traqueal hiper-reativo agudo e ausência de sopro cardíaco sistólico de grau IV.'
      },
      {
        id: 'diag_pulmonary_edema',
        title: 'Edema Pulmonar Fulminante com Estertores Úmidos em Maré Montante',
        isCorrect: false,
        rationale: 'Incorreto. A ausculta pulmonar foi limpa sem estertores crepitantes úmidos no momento do exame.'
      }
    ]
  },
  {
    id: 'case_cow_rpt',
    species: 'Bovino',
    patientName: 'Mimosa',
    breed: 'Girolando',
    age: '5 anos',
    chiefComplaint: 'Queda súbita de 60% na produção de leite, febre, postura em cifose (dorso arqueado) e relutância ao caminhar.',
    vitals: {
      hr: 98,
      rr: 42,
      temp: 39.8,
      crt: 2.5,
      mucosa: 'congesta com linha tóxica'
    },
    examSpots: [
      {
        id: 'spot_rpt_pinch',
        name: 'Prova do Beliscamento Dorsal (Reflexo de Withers)',
        toolRequired: 'palpation',
        locationDescription: 'Pinçamento da cernelha torácica para induzir extensão e flexão de coluna',
        findingDescription: 'A vaca recusa-se a afundar a coluna e emite gemido expiratório doloroso audível com fonendoscópio na traqueia.',
        isKeyFinding: true
      },
      {
        id: 'spot_rpt_heart',
        name: 'Ausculta Cardíaca na Base Esquerda',
        toolRequired: 'stethoscope',
        locationDescription: '3º e 4º EIC ventral esquerdo',
        findingDescription: 'Bulhas cardíacas hipofonéticas (abafadas) com ruído de atrito pericárdico e som de chapinhação de líquido.',
        isKeyFinding: true
      },
      {
        id: 'spot_rpt_jugular',
        name: 'Inspeção do Sulco Jugular',
        toolRequired: 'flashlight',
        locationDescription: 'Veias jugulares bilaterais no terço médio e superior do pescoço',
        findingDescription: 'Ingurgitamento jugular bilateral evidente com pulso venoso retrógrado positivo até o ângulo da mandíbula.',
        isKeyFinding: true
      },
      {
        id: 'spot_rpt_rumen',
        name: 'Ausculta da Fossa Paralombarda Esquerda (Rúmen)',
        toolRequired: 'stethoscope',
        locationDescription: 'Flanco esquerdo dorsal e ventral',
        findingDescription: 'Hipomotilidade ruminal grave com apenas 1 movimento fraco a cada 3 minutos (atonia ruminal reflexa).',
        isKeyFinding: false
      }
    ],
    correctDiagnosisId: 'diag_rpt',
    differentialOptions: [
      {
        id: 'diag_rpt',
        title: 'Reticulopericardite Traumática (RPT / "Doença do Arame")',
        isCorrect: true,
        rationale: 'A perfuração do retículo por corpo estranho metálico atinge o saco pericárdico, gerando pericardite exsudativa fibrinosa, bulhas abafadas, estase jugular e dor à flexão dorsal.'
      },
      {
        id: 'diag_displaced_abomasum',
        title: 'Deslocamento de Abomaso à Esquerda com Som de Ping Metálico',
        isCorrect: false,
        rationale: 'Incorreto. O deslocamento de abomaso cursa com som metálico de "ping" à percussão auscultatória no flanco esquerdo, e não abafamento de bulhas com pulso jugular positivo.'
      },
      {
        id: 'diag_mastitis',
        title: 'Mastite Tóxica Aguda por Coliformes Isolada',
        isCorrect: false,
        rationale: 'Incorreto. Embora cause endotoxemia, a mastite tóxica tem glândula mamária inchada e quente e não produz atrito pericárdico com bulhas abafadas.'
      }
    ]
  },
  {
    id: 'case_horse_colic',
    species: 'Equino',
    patientName: 'Trovão',
    breed: 'Quarto de Milha',
    age: '8 anos',
    chiefComplaint: 'Dor em cólica: cavando o chão com as mãos, deitando e rolando, sudorese profusa e ausência de fezes há 14 horas.',
    vitals: {
      hr: 66,
      rr: 38,
      temp: 38.3,
      crt: 3.5,
      mucosa: 'congesta com linha tóxica'
    },
    examSpots: [
      {
        id: 'spot_colic_gut',
        name: 'Ausculta dos 4 Quadrantes Abdominais',
        toolRequired: 'stethoscope',
        locationDescription: 'Fossas paralombares direita e esquerda (superior e inferior)',
        findingDescription: 'Silêncio abdominal total (íleo paralítico completo / 0 borborigmos audíveis nos 4 quadrantes).',
        isKeyFinding: true
      },
      {
        id: 'spot_colic_mucosa',
        name: 'Inspeção de Mucosa Oral e Linha Tóxica',
        toolRequired: 'flashlight',
        locationDescription: 'Gengiva superior e lábio evertido',
        findingDescription: 'Mucosa congesta cor de tijolo com anel cianótico arroxeado nos dentes incisivos ("linha tóxica") e TPC = 3,5s.',
        isKeyFinding: true
      },
      {
        id: 'spot_colic_tube',
        name: 'Sondagem Nasogástrica Propedêutica',
        toolRequired: 'palpation',
        locationDescription: 'Passagem de sonda plástica pelo meato nasal ventral até o estômago',
        findingDescription: 'Refluxo imediato de 8 litros de líquido gastrintestinal alaranjado fétido sob pressão, gerando alívio transitório da dor.',
        isKeyFinding: true
      },
      {
        id: 'spot_colic_pulse',
        name: 'Palpação de Pulso da Artéria Facial',
        toolRequired: 'palpation',
        locationDescription: 'Borda incisural ventral da mandíbula',
        findingDescription: 'Pulso arterial filiforme, rápido (66 bpm) e de baixa amplitude / pressão de pulso reduzida.',
        isKeyFinding: false
      }
    ],
    correctDiagnosisId: 'diag_obstructive_colic',
    differentialOptions: [
      {
        id: 'diag_obstructive_colic',
        title: 'Síndrome Cólica Obstrutiva com Íleo Paralítico e Endotoxemia Sistêmica',
        isCorrect: true,
        rationale: 'O refluxo nasogástrico volumoso espontâneo, a atonia dos 4 quadrantes e a presença de linha tóxica com TPC de 3.5s confirmam emergência obstrutiva grave com choque endotoxêmico iminente.'
      },
      {
        id: 'diag_spasmodic_colic',
        title: 'Cólica Espasmódica Simples com Hipermotilidade Intestinal',
        isCorrect: false,
        rationale: 'Incorreto. A cólica espasmódica cursa com borborigmos hipercinéticos audíveis à ausculta e ausência de refluxo gástrico ou linha tóxica.'
      },
      {
        id: 'diag_laminitis',
        title: 'Laminite Aguda Bilateral das Mãos sem Envolvimento Abdominal',
        isCorrect: false,
        rationale: 'Incorreto. A laminite cursa com pulso digital aumentado no boleto e apoio sobre os talões, e não refluxo nasogástrico de 8 litros com atonia abdominal.'
      }
    ]
  }
];

interface SemiologyExamBenchProps {
  config?: any;
  onObjectiveAchieved: () => void;
  isCompleted?: boolean;
  onOpenTutor?: (question?: string) => void;
}

export const SemiologyExamBench: React.FC<SemiologyExamBenchProps> = ({
  onObjectiveAchieved,
  isCompleted = false,
  onOpenTutor,
}) => {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState<number>(0);
  const [activeTool, setActiveTool] = useState<'stethoscope' | 'thermometer' | 'flashlight' | 'palpation'>('stethoscope');
  const [exploredSpots, setExploredSpots] = useState<Record<string, boolean>>({});
  const [diagnoses, setDiagnoses] = useState<Record<string, string>>({});
  const [selectedSpotId, setSelectedSpotId] = useState<string | null>(null);
  const [hasAchievedSuccess, setHasAchievedSuccess] = useState<boolean>(isCompleted);
  const [feedbackText, setFeedbackText] = useState<string | null>(null);

  const currentCase = SEMIOLOGY_CASES[selectedCaseIdx];

  const handleSpotClick = (spotId: string) => {
    soundManager.playClick();
    setSelectedSpotId(spotId);
    setExploredSpots((prev) => ({
      ...prev,
      [`${currentCase.id}_${spotId}`]: true
    }));
  };

  const handleDiagnosisSelect = (diagId: string) => {
    const isCorrect = diagId === currentCase.correctDiagnosisId;
    setDiagnoses((prev) => ({
      ...prev,
      [currentCase.id]: diagId
    }));

    if (isCorrect) {
      soundManager.playSuccess();
      setFeedbackText('Diagnóstico semiológico confirmado com rigor propedêutico!');
      checkSuccess({ ...diagnoses, [currentCase.id]: diagId });
    } else {
      soundManager.playError();
      const option = currentCase.differentialOptions.find((o) => o.id === diagId);
      setFeedbackText(option ? option.rationale : 'Diagnóstico incorreto.');
    }
  };

  const checkSuccess = (currentDiags: Record<string, string>) => {
    const allAnswered = SEMIOLOGY_CASES.every((c) => currentDiags[c.id] === c.correctDiagnosisId);
    if (allAnswered && !hasAchievedSuccess) {
      setHasAchievedSuccess(true);
      onObjectiveAchieved();
    }
  };

  const selectedSpot = currentCase.examSpots.find((s) => s.id === selectedSpotId);

  return (
    <div className="w-full bg-slate-950 border border-emerald-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col font-sans text-slate-100">
      {/* BARRA SUPERIOR DO SIMULADOR */}
      <div className="bg-slate-900/90 border-b border-slate-800 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Stethoscope className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
              Bancada Semiológica Interativa
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {currentCase.patientName} — {currentCase.species} ({currentCase.breed})
            </h3>
          </div>
        </div>

        {/* SELETOR DE PACIENTES */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
          {SEMIOLOGY_CASES.map((c, idx) => {
            const isFinished = diagnoses[c.id] === c.correctDiagnosisId;
            return (
              <button
                key={c.id}
                onClick={() => {
                  soundManager.playClick();
                  setSelectedCaseIdx(idx);
                  setSelectedSpotId(null);
                  setFeedbackText(null);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedCaseIdx === idx
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {c.species}
                {isFinished && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />}
              </button>
            );
          })}

          {onOpenTutor && (
            <button
              onClick={() => onOpenTutor(`Dra. Millena, como correlacionar os achados semiológicos de ausculta e constantes vitais de ${currentCase.patientName} (${currentCase.species}) para formular o diagnóstico definitivo?`)}
              className="ml-2 px-3 py-1.5 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/40 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Pedir Ajuda</span>
            </button>
          )}
        </div>
      </div>

      {/* ÁREA CENTRAL: ANAMNESE E INSTRUMENTAÇÃO */}
      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* COLUNA ESQUERDA: ANAMNESE & SINAIS VITAIS */}
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" />
              Anamnese & Queixa Principal
            </span>
            <p className="text-xs text-slate-300 italic leading-relaxed">
              "{currentCase.chiefComplaint}"
            </p>
            <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-800">
              <span className="text-slate-400">Idade: <strong className="text-slate-200">{currentCase.age}</strong></span>
              <span className="text-slate-400">Espécie: <strong className="text-slate-200">{currentCase.species}</strong></span>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5" />
              Constantes Fisiológicas Básicas
            </span>
            <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
              <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                <span className="text-slate-500 block text-[10px]">FREQ. CARDÍACA</span>
                <strong className="text-white text-sm">{currentCase.vitals.hr} bpm</strong>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                <span className="text-slate-500 block text-[10px]">FREQ. RESPIRATÓRIA</span>
                <strong className="text-white text-sm">{currentCase.vitals.rr} mpm</strong>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                <span className="text-slate-500 block text-[10px]">TEMP. RETAL</span>
                <strong className="text-white text-sm">{currentCase.vitals.temp} °C</strong>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                <span className="text-slate-500 block text-[10px]">T.P.C.</span>
                <strong className="text-white text-sm">{currentCase.vitals.crt} s</strong>
              </div>
            </div>
            <div className="text-[11px] bg-slate-950/80 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">Coloração Mucosa:</span>
              <span className="font-bold text-amber-300 uppercase">{currentCase.vitals.mucosa}</span>
            </div>
          </div>

          {/* PALETA DE FERRAMENTAS PROPEDÊUTICAS */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Ferramenta Propedêutica em Mãos
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => { soundManager.playClick(); setActiveTool('stethoscope'); }}
                className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTool === 'stethoscope'
                    ? 'bg-emerald-600 text-white font-bold shadow-md shadow-emerald-600/30'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Stethoscope className="w-4 h-4" />
                Estetoscópio
              </button>
              <button
                onClick={() => { soundManager.playClick(); setActiveTool('flashlight'); }}
                className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTool === 'flashlight'
                    ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Eye className="w-4 h-4" />
                Lanterna Clínica
              </button>
              <button
                onClick={() => { soundManager.playClick(); setActiveTool('palpation'); }}
                className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTool === 'palpation'
                    ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-600/30'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Hand className="w-4 h-4" />
                Palpação Manual
              </button>
              <button
                onClick={() => { soundManager.playClick(); setActiveTool('thermometer'); }}
                className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTool === 'thermometer'
                    ? 'bg-rose-600 text-white font-bold shadow-md shadow-rose-600/30'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Thermometer className="w-4 h-4" />
                Termômetro
              </button>
            </div>
          </div>
        </div>

        {/* COLUNA CENTRAL & DIREITA: MAPA ANATÔMICO E ACHADOS PROPEDÊUTICOS */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Regiões Anatômicas de Propedêutica no {currentCase.species}
              </span>
              <span className="text-[11px] text-slate-400">
                Clique nos pontos para examinar
              </span>
            </div>

            {/* PONTOS DE EXAME ANATÔMICO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentCase.examSpots.map((spot) => {
                const isExplored = Boolean(exploredSpots[`${currentCase.id}_${spot.id}`]);
                const isSelected = selectedSpotId === spot.id;

                return (
                  <button
                    key={spot.id}
                    onClick={() => handleSpotClick(spot.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                      isSelected
                        ? 'bg-emerald-950/80 border-emerald-500 shadow-md shadow-emerald-500/10'
                        : isExplored
                        ? 'bg-slate-950/90 border-slate-700 hover:border-slate-600 text-slate-200'
                        : 'bg-slate-950/40 border-slate-800 hover:border-emerald-500/40 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-bold text-xs text-white flex items-center gap-1.5">
                        {spot.toolRequired === 'stethoscope' && <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />}
                        {spot.toolRequired === 'flashlight' && <Eye className="w-3.5 h-3.5 text-amber-400" />}
                        {spot.toolRequired === 'palpation' && <Hand className="w-3.5 h-3.5 text-purple-400" />}
                        {spot.toolRequired === 'thermometer' && <Thermometer className="w-3.5 h-3.5 text-rose-400" />}
                        {spot.name}
                      </span>
                      {isExplored && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                    </div>
                    <span className="text-[11px] text-slate-400 line-clamp-1">
                      {spot.locationDescription}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* DETALHE DO ACHADO PROPEDÊUTICO */}
            {selectedSpot && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-950 border border-emerald-500/40 rounded-2xl p-4 space-y-2 mt-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    Achado do Exame Clínico Direto:
                  </span>
                  {selectedSpot.isKeyFinding && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold">
                      Achado Crítico Decisivo
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                  {selectedSpot.findingDescription}
                </p>
              </motion.div>
            )}
          </div>

          {/* HIPÓTESE DIAGNÓSTICA FINAL */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" />
              Conclusão Propedêutica: Qual é a Causa Primária dos Achados?
            </span>

            <div className="space-y-2.5">
              {currentCase.differentialOptions.map((opt) => {
                const isSelected = diagnoses[currentCase.id] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleDiagnosisSelect(opt.id)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between text-xs sm:text-sm ${
                      isSelected
                        ? opt.isCorrect
                          ? 'bg-emerald-950/90 border-emerald-500 text-emerald-100 font-bold'
                          : 'bg-rose-950/90 border-rose-500 text-rose-100 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <span>{opt.title}</span>
                    {isSelected && (
                      opt.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                      )
                    )}
                  </button>
                );
              })}
            </div>

            {feedbackText && (
              <div
                className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
                  feedbackText.includes('confirmado')
                    ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-200'
                    : 'bg-rose-950/70 border-rose-500/50 text-rose-200'
                }`}
              >
                <strong>Parecer do Clínico:</strong> {feedbackText}
              </div>
            )}
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
                  🎯 Propedêutica Clínica Homologada!
                </span>
                <span>
                  Você identificou com precisão a endocardiose mitral em canino, a reticulopericardite traumática bovina e a cólica obstrutiva equina com endotoxemia.
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
