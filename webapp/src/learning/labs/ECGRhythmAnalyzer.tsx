// src/learning/labs/ECGRhythmAnalyzer.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HeartPulse,
  Activity,
  Sparkles,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Info,
  Ruler
} from 'lucide-react';
import { soundManager } from '../../utils/sound';

export interface ECGCase {
  id: string;
  patientSpecies: string;
  patientName: string;
  patientWeightKg: number;
  taxa: 'Mamífero Neotropical' | 'Ave Silvestre' | 'Grande Carnívoro' | 'Primata';
  bpm: number;
  rhythmType: 'sinus' | 'avian_normal' | 'afib' | 'bav2' | 'vtach';
  rhythmTitle: string;
  lead: 'DII (Derivação II)';
  prIntervalSec: number;
  qrsDurationSec: number;
  pathologySummary: string;
  clinicalSigns: string;
  correctDiagnosisId: string;
  differentialOptions: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

const ECG_CASES: ECGCase[] = [
  {
    id: 'case_lobo_sinus',
    patientSpecies: 'Lobo-guará (Chrysocyon brachyurus)',
    patientName: 'Guará "Cerradinho"',
    patientWeightKg: 24.5,
    taxa: 'Mamífero Neotropical',
    bpm: 88,
    rhythmType: 'sinus',
    rhythmTitle: 'Ritmo Sinusal Fisiológico',
    lead: 'DII (Derivação II)',
    prIntervalSec: 0.11,
    qrsDurationSec: 0.05,
    pathologySummary: 'Onda P positiva precedente a todo complexo QRS, intervalos R-R uniformes e morfologia ventricular estreita normal.',
    clinicalSigns: 'Exame de rotina pré-soltura. Ausculta cardíaca limpa, bulhas normofonéticas e sem sopros.',
    correctDiagnosisId: 'diag_sinus',
    differentialOptions: [
      {
        id: 'diag_sinus',
        text: 'Ritmo Sinusal Normal (Condução fisiológica íntegra)',
        isCorrect: true,
        explanation: 'Perfeito! Cada onda P é seguida de um QRS idêntico com intervalo PR constante e frequência compatível com a espécie.'
      },
      {
        id: 'diag_afib',
        text: 'Fibrilação Atrial com Bloqueio de Ramo',
        isCorrect: false,
        explanation: 'Incorreto. Na fibrilação atrial não há ondas P distintas e os intervalos R-R seriam caóticos e irregulares.'
      },
      {
        id: 'diag_bav3',
        text: 'Bloqueio Atrioventricular de 3º Grau (Dissociação AV)',
        isCorrect: false,
        explanation: 'Incorreto. Há relação estrita 1:1 entre as ondas P e os complexos QRS; no BAV total átrios e ventrículos batem independentes.'
      }
    ]
  },
  {
    id: 'case_arara_avian',
    patientSpecies: 'Arara-canindé (Ara ararauna)',
    patientName: 'Arara "Lupita"',
    patientWeightKg: 1.15,
    taxa: 'Ave Silvestre',
    bpm: 310,
    rhythmType: 'avian_normal',
    rhythmTitle: 'ECG Aviário Normal (Padrão rS em DII)',
    lead: 'DII (Derivação II)',
    prIntervalSec: 0.04,
    qrsDurationSec: 0.025,
    pathologySummary: 'Complexo ventricular predominantemente NEGATIVO e profundo (onda rS). Em mamíferos indicaria infarto ou sobrecarga, mas em aves é o padrão anatômico normal devido à despolarização transmural profunda que viaja do endocárdio para o epicárdio em direção à base cranial.',
    clinicalSigns: 'Avaliação cardiológica de rotina. Paciente alerta, plumagem brilhante e boa capacidade de voo.',
    correctDiagnosisId: 'diag_avian_normal',
    differentialOptions: [
      {
        id: 'diag_avian_normal',
        text: 'ECG Aviário Normal com Onda rS Profunda Fisiológica em DII',
        isCorrect: true,
        explanation: 'Exato! Em aves, a onda S é fisiologicamente muito profunda e negativa em DII por conta da anatomia do sistema Purkinje transmural de despolarização rápida da base.'
      },
      {
        id: 'diag_infarct',
        text: 'Infarto Agudo do Miocárdio de Parede Inferior',
        isCorrect: false,
        explanation: 'Incorreto. Extrapolar critérios eletrocardiográficos caninos/humanos para aves é um erro grave. A onda negativa em DII é a anatomia padrão da classe Aves.'
      },
      {
        id: 'diag_vtach',
        text: 'Taquicardia Ventricular Monomórfica Aguda',
        isCorrect: false,
        explanation: 'Incorreto. A frequência de 310 bpm é perfeitamente normal para uma arara, e os complexos são precedidos de ondas P proporcionais.'
      }
    ]
  },
  {
    id: 'case_onca_afib',
    patientSpecies: 'Onça-pintada (Panthera onca)',
    patientName: 'Onça "Tupã"',
    patientWeightKg: 82.0,
    taxa: 'Grande Carnívoro',
    bpm: 178,
    rhythmType: 'afib',
    rhythmTitle: 'Fibrilação Atrial com Resposta Rápida',
    lead: 'DII (Derivação II)',
    prIntervalSec: 0,
    qrsDurationSec: 0.06,
    pathologySummary: 'Ausência completa de ondas P sinusais (substituídas por linha de base serrilhada com ondas f fibrilatórias desorganizadas), intervalos R-R marcadamente desiguais e taquicardia descompensada para um grande felino (FC > 160 bpm).',
    clinicalSigns: 'Intolerância ao esforço no recinto, tosse seca noturna, mucosas congestas e sopro holossistólico em foco mitral (grau IV/VI).',
    correctDiagnosisId: 'diag_afib_onca',
    differentialOptions: [
      {
        id: 'diag_afib_onca',
        text: 'Fibrilação Atrial com Ritmo Ventricular Caótico e Perda da Onda P',
        isCorrect: true,
        explanation: 'Correto! A ausência de ondas P e os intervalos R-R totalmente irregulares caracterizam a Fibrilação Atrial, comum em quadros avançados de cardiomiopatia dilatada.'
      },
      {
        id: 'diag_sinus_tachy',
        text: 'Taquicardia Sinusal por Estresse Simpático',
        isCorrect: false,
        explanation: 'Incorreto. Na taquicardia sinusal os intervalos R-R são rigorosamente regulares e as ondas P estão sempre presentes antes do QRS.'
      },
      {
        id: 'diag_hyperkalemia',
        text: 'Hipercalemia Grave por Falência Renal Oligúrica',
        isCorrect: false,
        explanation: 'Incorreto. A hipercalemia causa bradicardia com ondas T apiculadas em "tenda" e alargamento do QRS, e não ritmo fibrilatório taquicárdico caótico.'
      }
    ]
  },
  {
    id: 'case_tamandua_bav2',
    patientSpecies: 'Tamanduá-bandeira (Myrmecophaga tridactyla)',
    patientName: 'Tamanduá "Juca"',
    patientWeightKg: 36.0,
    taxa: 'Mamífero Neotropical',
    bpm: 42,
    rhythmType: 'bav2',
    rhythmTitle: 'Bloqueio Atrioventricular de 2º Grau (Mobitz II)',
    lead: 'DII (Derivação II)',
    prIntervalSec: 0.14,
    qrsDurationSec: 0.06,
    pathologySummary: 'Bradicardia severa. Ondas P normais ocorrem em ritmo regular, mas subitamente uma ou mais ondas P NÃO são conduzidas aos ventrículos (onda P bloqueada sem QRS subsequente), sem aumento progressivo do intervalo PR.',
    clinicalSigns: 'Episódios recorrentes de síncope (desmaio) durante a alimentação, fraqueza de membros pélvicos e tempo de preenchimento capilar lentificado (3 segundos).',
    correctDiagnosisId: 'diag_bav2',
    differentialOptions: [
      {
        id: 'diag_bav2',
        text: 'Bloqueio Atrioventricular de 2º Grau (Mobitz Tipo II com Ondas P Bloqueadas)',
        isCorrect: true,
        explanation: 'Perfeito! Há ondas P isoladas que não conseguem atravessar o nó atrioventricular, provocando pausas ventriculares críticas e síncope.'
      },
      {
        id: 'diag_sinus_arrest',
        text: 'Parada Sinusal Pura com Pausa Atrial',
        isCorrect: false,
        explanation: 'Incorreto. Na parada sinusal, o nó sinoatrial silencia e nenhuma onda P é gerada; aqui as ondas P continuam marchando pontualmente.'
      },
      {
        id: 'diag_bav1',
        text: 'Bloqueio Atrioventricular de 1º Grau Simples',
        isCorrect: false,
        explanation: 'Incorreto. No BAV de 1º grau todas as ondas P conduzem (nenhum QRS é perdido), havendo apenas prolongamento fixo do intervalo PR.'
      }
    ]
  },
  {
    id: 'case_macaco_vtach',
    patientSpecies: 'Macaco-prego (Sapajus libidinosus)',
    patientName: 'Primate "Chico"',
    patientWeightKg: 3.4,
    taxa: 'Primata',
    bpm: 245,
    rhythmType: 'vtach',
    rhythmTitle: 'Taquicardia Ventricular Monomórfica (TV)',
    lead: 'DII (Derivação II)',
    prIntervalSec: 0,
    qrsDurationSec: 0.09,
    pathologySummary: 'Salvas consecutivas de complexos ventriculares largos, bizarros e entalhados com polaridade invertida e ausência de correlação com o ritmo atrial. Urgência hemodinâmica com risco iminente de degeneração para Fibrilação Ventricular (FV) e óbito.',
    clinicalSigns: 'Colapso circulatório agudo, pulso femoral filiforme, cianose de mucosas orais e pupilas midriáticas reativas.',
    correctDiagnosisId: 'diag_vtach_mono',
    differentialOptions: [
      {
        id: 'diag_vtach_mono',
        text: 'Taquicardia Ventricular (TV) Monomórfica de Alta Frequência',
        isCorrect: true,
        explanation: 'Exato! A sequência rápida de complexos QRS aberrantes e alargados com origem ectópica no miocárdio ventricular configura TV, uma emergência com risco de colapso.'
      },
      {
        id: 'diag_bundle_branch',
        text: 'Ritmo Sinusal com Bloqueio de Ramo Direito Isolado',
        isCorrect: false,
        explanation: 'Incorreto. A frequência extrema de 245 bpm sem ondas P e colapso de pulso confirma taquiarritmia ventricular maligna e não mero atraso de condução sinusal.'
      },
      {
        id: 'diag_hypothermia_j',
        text: 'Hipotermia Aguda com Onda de Osborn (J)',
        isCorrect: false,
        explanation: 'Incorreto. A onda J de Osborn cursa com bradicardia profunda e elevação do ponto J, e não taquicardia ventricular rápida ectópica.'
      }
    ]
  }
];

interface ECGRhythmAnalyzerProps {
  config?: {
    initialSpecies?: string;
  };
  onObjectiveAchieved: () => void;
  isCompleted?: boolean;
  onOpenTutor?: (question?: string) => void;
}

export const ECGRhythmAnalyzer: React.FC<ECGRhythmAnalyzerProps> = ({
  config,
  onObjectiveAchieved,
  isCompleted = false,
  onOpenTutor,
}) => {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number>(0);
  const [speedMmSec, setSpeedMmSec] = useState<25 | 50>(50);
  const [voltageGain, setVoltageGain] = useState<1 | 2>(1); // 1N (10 mm/mV) ou 2N (20 mm/mV)
  const [isCaliperActive, setIsCaliperActive] = useState<boolean>(false);
  const [caliperMs, setCaliperMs] = useState<number>(120); // 120 ms padrão

  // Registro de diagnósticos submetidos pelo aluno: caseId -> diagnosisId
  const [diagnoses, setDiagnoses] = useState<Record<string, string>>({});
  const [hasAchievedSuccess, setHasAchievedSuccess] = useState<boolean>(isCompleted);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  useEffect(() => {
    if (config?.initialSpecies) {
      const idx = ECG_CASES.findIndex(c =>
        c.patientSpecies.toLowerCase().includes(config.initialSpecies!.toLowerCase())
      );
      if (idx !== -1) setSelectedCaseIndex(idx);
    }
  }, [config]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const offsetRef = useRef<number>(0);

  const currentCase = ECG_CASES[selectedCaseIndex];
  const userDiagnosisId = diagnoses[currentCase.id];

  // Helper para checar se todas as 5 análises estão corretas
  const checkOverallProgress = (newDiagnoses: Record<string, string>) => {
    const answeredCount = Object.keys(newDiagnoses).length;
    if (answeredCount < ECG_CASES.length) return;

    let allCorrect = true;
    for (const c of ECG_CASES) {
      if (newDiagnoses[c.id] !== c.correctDiagnosisId) {
        allCorrect = false;
        break;
      }
    }

    if (allCorrect) {
      soundManager.playSuccess();
      setHasAchievedSuccess(true);
      setFeedbackMessage('Excelente! Todas as arritmias e traçados comparados foram interpretados corretamente.');
      onObjectiveAchieved();
    }
  };

  const handleSelectDiagnosis = (diagId: string) => {
    const isCorrect = diagId === currentCase.correctDiagnosisId;
    if (isCorrect) {
      soundManager.playClick();
      setFeedbackMessage('Diagnóstico Eletrocardiográfico Correto!');
    } else {
      soundManager.playError();
      const option = currentCase.differentialOptions.find((o) => o.id === diagId);
      setFeedbackMessage(`Diagnóstico Incorreto: ${option?.explanation || 'Revise a morfologia e intervalos da tira.'}`);
    }

    const updated = {
      ...diagnoses,
      [currentCase.id]: diagId,
    };
    setDiagnoses(updated);
    checkOverallProgress(updated);
  };

  const handleConsultTutor = () => {
    soundManager.playClick();
    const prompt = `Dra. Millena, estou analisando o ECG em DII do paciente "${currentCase.patientName}" (${currentCase.patientSpecies}, ${currentCase.patientWeightKg} kg). A FC está em ${currentCase.bpm} bpm. Velocidade de papel: ${speedMmSec} mm/s. O traçado mostra: "${currentCase.pathologySummary}". Como interpretar esse padrão e quais os riscos hemodinâmicos?`;
    onOpenTutor?.(prompt);
  };

  const handleReset = () => {
    soundManager.playClick();
    setDiagnoses({});
    setHasAchievedSuccess(false);
    setFeedbackMessage(null);
  };

  // Renderizador do traçado contínuo no Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isRunning = true;

    const render = () => {
      if (!isRunning) return;

      const width = canvas.width;
      const height = canvas.height;
      const midY = height / 2;

      // Limpar fundo escuro de osciloscópio / papel milimetrado
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, width, height);

      // Desenhar grid milimetrado clássico (5 mm menor, 25 mm maior)
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = '#1e293b';

      const gridSize = 10;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Linhas principais do grid a cada 50 px
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#334155';
      for (let x = 0; x < width; x += gridSize * 5) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize * 5) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Desenhar linha de base e traçado dinâmico de ECG
      ctx.strokeStyle = '#10b981'; // Verde monitor
      ctx.lineWidth = 2.2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      offsetRef.current += speedMmSec === 50 ? 2.5 : 1.3;

      ctx.beginPath();
      const wavePeriod = (60 / currentCase.bpm) * (speedMmSec === 50 ? 120 : 60);

      for (let x = 0; x < width; x++) {
        const localX = (x + offsetRef.current) % wavePeriod;
        const phase = localX / wavePeriod; // 0 a 1 em cada ciclo
        let yOffset = 0;

        const gainMult = voltageGain;

        if (currentCase.rhythmType === 'sinus') {
          // Onda P
          if (phase > 0.1 && phase < 0.22) {
            yOffset = -Math.sin(((phase - 0.1) / 0.12) * Math.PI) * 12 * gainMult;
          }
          // Segmento PR = plano
          // Complexo QRS estreito (Q pequeno, R alto, S pequeno)
          else if (phase >= 0.28 && phase < 0.30) {
            yOffset = 4 * gainMult; // Q
          } else if (phase >= 0.30 && phase < 0.33) {
            yOffset = -55 * gainMult; // R
          } else if (phase >= 0.33 && phase < 0.36) {
            yOffset = 14 * gainMult; // S
          }
          // Onda T positiva suave
          else if (phase > 0.45 && phase < 0.65) {
            yOffset = -Math.sin(((phase - 0.45) / 0.2) * Math.PI) * 16 * gainMult;
          }
        } else if (currentCase.rhythmType === 'avian_normal') {
          // ECG Aviário: onda r pequena, onda S PROFUNDA e invertida
          if (phase > 0.12 && phase < 0.24) {
            yOffset = -Math.sin(((phase - 0.12) / 0.12) * Math.PI) * 8 * gainMult; // P
          } else if (phase >= 0.28 && phase < 0.31) {
            yOffset = -10 * gainMult; // r pequena
          } else if (phase >= 0.31 && phase < 0.37) {
            yOffset = 48 * gainMult; // S profunda invertida em DII!
          } else if (phase > 0.45 && phase < 0.62) {
            yOffset = -Math.sin(((phase - 0.45) / 0.17) * Math.PI) * 12 * gainMult; // T
          }
        } else if (currentCase.rhythmType === 'afib') {
          // Fibrilação atrial: linha de base oscilante rápida caótica e R-R irregular
          const baselineNoise = Math.sin(localX * 0.4) * 4 + Math.cos(localX * 0.9) * 3;
          yOffset = baselineNoise;

          // Espículas QRS ocorrem em intervalos pseudo-aleatórios
          const pseudoCycle = (localX + Math.sin(x * 0.05) * 20) % (wavePeriod * 0.85);
          if (pseudoCycle > wavePeriod * 0.4 && pseudoCycle < wavePeriod * 0.43) {
            yOffset = -50 * gainMult + baselineNoise;
          } else if (pseudoCycle >= wavePeriod * 0.43 && pseudoCycle < wavePeriod * 0.46) {
            yOffset = 18 * gainMult + baselineNoise;
          }
        } else if (currentCase.rhythmType === 'bav2') {
          // BAV 2º grau: algumas ondas P não conduzem
          const cycleCount = Math.floor((x + offsetRef.current) / wavePeriod);
          const isBlocked = cycleCount % 3 === 2; // bloqueia a 3ª onda P

          if (phase > 0.12 && phase < 0.24) {
            yOffset = -Math.sin(((phase - 0.12) / 0.12) * Math.PI) * 14 * gainMult; // Onda P presente sempre!
          } else if (!isBlocked) {
            // Conduz normalmente
            if (phase >= 0.32 && phase < 0.34) {
              yOffset = 4 * gainMult;
            } else if (phase >= 0.34 && phase < 0.37) {
              yOffset = -50 * gainMult;
            } else if (phase >= 0.37 && phase < 0.40) {
              yOffset = 12 * gainMult;
            } else if (phase > 0.48 && phase < 0.68) {
              yOffset = -Math.sin(((phase - 0.48) / 0.2) * Math.PI) * 14 * gainMult;
            }
          }
          // Se bloqueado: linha reta após a P! Nenhuma espícula QRS
        } else if (currentCase.rhythmType === 'vtach') {
          // Taquicardia Ventricular: ondas largas, bizarras, sem P
          const vtPhase = (localX % (wavePeriod * 0.6)) / (wavePeriod * 0.6);
          if (vtPhase < 0.4) {
            yOffset = -Math.sin((vtPhase / 0.4) * Math.PI) * 45 * gainMult;
          } else {
            yOffset = Math.sin(((vtPhase - 0.4) / 0.6) * Math.PI) * 35 * gainMult;
          }
        }

        const y = midY + yOffset;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();

      // Desenhar régua de calibração se ativa
      if (isCaliperActive) {
        const calX1 = 80;
        const calWidthPx = (caliperMs / 1000) * (speedMmSec === 50 ? 200 : 100);
        const calX2 = calX1 + calWidthPx;

        ctx.strokeStyle = '#f59e0b'; // Âmbar régua
        ctx.lineWidth = 1.5;

        // Linha horizontal
        ctx.beginPath();
        ctx.moveTo(calX1, midY - 60);
        ctx.lineTo(calX2, midY - 60);
        ctx.stroke();

        // Hastes verticais
        ctx.beginPath();
        ctx.moveTo(calX1, midY - 75);
        ctx.lineTo(calX1, midY - 45);
        ctx.moveTo(calX2, midY - 75);
        ctx.lineTo(calX2, midY - 45);
        ctx.stroke();

        // Texto de intervalo medido
        ctx.fillStyle = '#f59e0b';
        ctx.font = 'bold 11px monospace';
        ctx.fillText(`Intervalo Caliper: ${caliperMs} ms (${(caliperMs / 1000).toFixed(3)} s)`, calX1, midY - 82);
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      isRunning = false;
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [selectedCaseIndex, speedMmSec, voltageGain, isCaliperActive, caliperMs]);

  const completedCount = Object.keys(diagnoses).length;

  return (
    <div className="w-full bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-sans text-white">
      {/* CABEÇALHO DO OSCILOSCÓPIO / ANALISADOR DE ECG */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
            <HeartPulse className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Eletrocardiografia Comparada & Análise de Arritmias
            </span>
            <div className="text-[11px] text-slate-400">
              Derivação Bipolar II (DII) • Calibração milimétrica e interpretação morfológica da fauna silvestre.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
            Casos Triados: {completedCount} / {ECG_CASES.length}
          </span>
          <button
            onClick={handleConsultTutor}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-300 bg-rose-950/60 hover:bg-rose-900/80 border border-rose-500/40 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            Dra. Millena
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
            title="Reiniciar Análises"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* SELETOR DE CASOS CLÍNICOS */}
      <div className="bg-slate-900/60 border-b border-slate-800/80 p-3 flex gap-2.5 overflow-x-auto scrollbar-thin">
        {ECG_CASES.map((item, idx) => {
          const isSelected = idx === selectedCaseIndex;
          const userDiag = diagnoses[item.id];
          const isCorrect = userDiag === item.correctDiagnosisId;

          return (
            <button
              key={item.id}
              onClick={() => {
                setSelectedCaseIndex(idx);
                soundManager.playClick();
              }}
              className={`px-3.5 py-2 rounded-xl text-left transition-all shrink-0 cursor-pointer flex items-center gap-2.5 border ${
                isSelected
                  ? 'bg-rose-950/70 border-rose-500 text-white shadow-md'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-850'
              }`}
            >
              <div className="w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-bold font-mono text-rose-400">
                0{idx + 1}
              </div>
              <div>
                <div className="text-xs font-bold leading-tight">{item.patientName}</div>
                <div className="text-[10px] text-slate-400 truncate max-w-[140px]">{item.patientSpecies}</div>
              </div>
              {userDiag && (
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

      {/* CONTROLES DE CALIBRAÇÃO E TIRA DO ECG */}
      <div className="p-4 sm:p-6 space-y-5">
        {/* BARRA DE FERRAMENTAS DO OSCILOSCÓPIO */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 p-3.5 rounded-xl border border-slate-800">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
              <Activity className="w-4 h-4" />
              Traçado Contínuo DII
            </span>
            <span className="text-xs font-mono font-bold text-white bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700">
              {currentCase.bpm} BPM
            </span>
            <span className="text-[11px] text-slate-400 hidden sm:inline">
              {currentCase.taxa} • {currentCase.patientWeightKg} kg
            </span>
          </div>

          {/* AJUSTES DE VELOCIDADE, GANHO E RÉGUA VIRTUAL */}
          <div className="flex items-center gap-2 text-xs">
            {/* VELOCIDADE */}
            <div className="flex items-center bg-slate-950 rounded-lg p-0.5 border border-slate-800">
              <button
                onClick={() => setSpeedMmSec(25)}
                className={`px-2 py-1 rounded text-[11px] font-mono cursor-pointer transition-colors ${
                  speedMmSec === 25 ? 'bg-rose-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                25 mm/s
              </button>
              <button
                onClick={() => setSpeedMmSec(50)}
                className={`px-2 py-1 rounded text-[11px] font-mono cursor-pointer transition-colors ${
                  speedMmSec === 50 ? 'bg-rose-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                50 mm/s
              </button>
            </div>

            {/* GANHO DE VOLTAGEM */}
            <div className="flex items-center bg-slate-950 rounded-lg p-0.5 border border-slate-800">
              <button
                onClick={() => setVoltageGain(1)}
                className={`px-2 py-1 rounded text-[11px] font-mono cursor-pointer transition-colors ${
                  voltageGain === 1 ? 'bg-rose-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                1N (10 mm/mV)
              </button>
              <button
                onClick={() => setVoltageGain(2)}
                className={`px-2 py-1 rounded text-[11px] font-mono cursor-pointer transition-colors ${
                  voltageGain === 2 ? 'bg-rose-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                2N (20 mm/mV)
              </button>
            </div>

            {/* BOTÃO RÉGUA CALIPER */}
            <button
              onClick={() => {
                soundManager.playClick();
                setIsCaliperActive(!isCaliperActive);
              }}
              className={`px-2.5 py-1 rounded-lg border font-mono flex items-center gap-1.5 transition-colors cursor-pointer ${
                isCaliperActive
                  ? 'bg-amber-950/80 border-amber-500 text-amber-200'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
              }`}
            >
              <Ruler className="w-3.5 h-3.5" />
              Caliper
            </button>
          </div>
        </div>

        {/* CONTROLE DESLIZANTE DO CALIPER (SE ATIVO) */}
        <AnimatePresence>
          {isCaliperActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-amber-950/40 border border-amber-500/40 p-3 rounded-xl flex flex-wrap items-center justify-between gap-4 text-xs"
            >
              <div className="flex items-center gap-2 text-amber-300">
                <Ruler className="w-4 h-4" />
                <span>Régua Milimétrica Virtual: ajuste a abertura do compasso para aferir o intervalo:</span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <input
                  type="range"
                  min="40"
                  max="400"
                  step="10"
                  value={caliperMs}
                  onChange={(e) => setCaliperMs(parseInt(e.target.value, 10))}
                  className="w-48 accent-amber-500 cursor-pointer"
                />
                <span className="font-mono font-bold text-white bg-slate-900 px-2 py-1 rounded border border-amber-500/30">
                  {caliperMs} ms
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TELA DE CANVAS DO OSCILOSCÓPIO */}
        <div className="w-full bg-slate-950 rounded-2xl border-2 border-slate-800 shadow-inner overflow-hidden relative">
          <canvas
            ref={canvasRef}
            width={860}
            height={220}
            className="w-full h-56 block bg-slate-950"
          />

          <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-slate-800 text-[11px] font-mono text-emerald-400">
            DII • 50 mm/s • 10 mm/mV
          </div>
          <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-slate-800 text-[11px] font-mono text-rose-400">
            FC: {currentCase.bpm} bpm
          </div>
        </div>

        {/* DETALHES CLÍNICOS E PAINEL DE HIPÓTESES DIAGNÓSTICAS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
          {/* COLUNA ESQUERDA: QUADRO CLÍNICO DO PACIENTE */}
          <div className="lg:col-span-1 bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-wider text-rose-400 block border-b border-slate-800 pb-2">
              Anamnese & Semiologia Cardiovascular
            </span>

            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-400 font-medium">Paciente:</span>
                <div className="text-white font-bold">{currentCase.patientName} ({currentCase.patientSpecies})</div>
              </div>

              <div>
                <span className="text-slate-400 font-medium">Sinais Clínicos Observados:</span>
                <p className="text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800 mt-1 leading-relaxed">
                  {currentCase.clinicalSigns}
                </p>
              </div>

              <div>
                <span className="text-slate-400 font-medium">Particularidade da Espécie:</span>
                <p className="text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800 mt-1 leading-relaxed">
                  {currentCase.pathologySummary}
                </p>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: HIPÓTESES E JULGAMENTO */}
          <div className="lg:col-span-2 bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Selecione o Laudo Eletrocardiográfico Correto:
              </span>
              <span className="text-[11px] text-slate-400 font-mono">Derivação II</span>
            </div>

            <div className="space-y-3">
              {currentCase.differentialOptions.map((opt) => {
                const isSelected = userDiagnosisId === opt.id;
                const isCorrect = opt.isCorrect;

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectDiagnosis(opt.id)}
                    className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer flex items-start gap-3 ${
                      isSelected
                        ? isCorrect
                          ? 'bg-emerald-950/80 border-emerald-500 text-white ring-1 ring-emerald-400'
                          : 'bg-red-950/80 border-red-500 text-white ring-1 ring-red-400'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white'
                    }`}
                  >
                    <div className="mt-0.5">
                      {isSelected ? (
                        isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                        )
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-slate-600 shrink-0" />
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-bold leading-snug">{opt.text}</div>
                      {isSelected && (
                        <div
                          className={`text-[11px] mt-2 pt-2 border-t font-sans leading-relaxed ${
                            isCorrect ? 'text-emerald-300 border-emerald-800/60' : 'text-red-300 border-red-800/60'
                          }`}
                        >
                          {opt.explanation}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {feedbackMessage && (
              <div
                className={`p-3 rounded-xl border text-xs leading-relaxed ${
                  feedbackMessage.includes('Incorreto')
                    ? 'bg-red-950/70 border-red-500/50 text-red-200'
                    : 'bg-emerald-950/70 border-emerald-500/50 text-emerald-200'
                }`}
              >
                <div className="font-bold flex items-center gap-1.5 mb-0.5">
                  <Info className="w-4 h-4" />
                  Parecer Cardiológico:
                </div>
                <span>{feedbackMessage}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FEEDBACK DE FINALIZAÇÃO */}
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
                  🎯 Maestria Cardiológica Comprovada!
                </span>
                <span>
                  Você identificou com precisão o traçado fisiológico aviário com onda rS, a fibrilação atrial em grande carnívoro, o BAV Mobitz II e a taquicardia ventricular maligna.
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
