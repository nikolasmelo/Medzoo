import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { MainMenu } from './components/MainMenu';
import { CaseSelect } from './components/CaseSelect';
import { ClinicWorkstation } from './components/ClinicWorkstation';
import { PromotionScreen } from './components/PromotionScreen';
import type { CaseData, CareerState } from './types';
import confetti from 'canvas-confetti';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PerformanceMonitor } from './utils/PerformanceMonitor';
import { soundManager } from './utils/sound';

export function App() {
  const [view, setView] = useState<'menu' | 'case_select' | 'clinic'>('menu');
  const [selectedCase, setSelectedCase] = useState<CaseData | null>(null);
  const [isSoundOn, setIsSoundOn] = useState<boolean>(true);
  const [promotion, setPromotion] = useState<{ oldRank: string; newRank: string } | null>(null);

  const [careerState, setCareerState] = useState<CareerState>(() => {
    const saved = localStorage.getItem('medzoo_career');
    if (saved) {
      try { return JSON.parse(saved); } catch { /* ignore */ }
    }
    return {
      money: 1200,
      reliability: 85,
      shiftMinutes: 0,
      xp: 0,
      rank: 'Estagiário',
      completedCaseIds: []
    };
  });

  // Save career state to localStorage
  useEffect(() => {
    localStorage.setItem('medzoo_career', JSON.stringify(careerState));
  }, [careerState]);

  // Plantão timer ticking
  useEffect(() => {
    const timer = setInterval(() => {
      setCareerState((prev) => ({
        ...prev,
        shiftMinutes: prev.shiftMinutes + 1
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleStartShift = () => {
    setView('case_select');
  };

  const handleSelectCase = (caseData: CaseData) => {
    soundManager.initialize();
    setSelectedCase(caseData);
    setView('clinic');
  };

  const handleFinishCase = (updatedCareer: CareerState, _stars?: number) => {
    const oldRank = careerState.rank;
    const newRank = updatedCareer.rank;

    setCareerState(updatedCareer);
    setSelectedCase(null);

    // Check for rank promotion
    if (newRank !== oldRank) {
      setPromotion({ oldRank, newRank });
      // Epic confetti!
      confetti({ particleCount: 200, spread: 120, origin: { y: 0.5 }, colors: ['#C89A3C', '#E8B84A', '#52C41A', '#FFFFFF'] });
      setTimeout(() => {
        confetti({ particleCount: 100, spread: 90, origin: { y: 0.3, x: 0.3 } });
      }, 500);
      setTimeout(() => {
        confetti({ particleCount: 100, spread: 90, origin: { y: 0.3, x: 0.7 } });
      }, 1000);
    } else {
      setView('case_select');
    }
  };

  const handleDismissPromotion = () => {
    setPromotion(null);
    setView('case_select');
  };

  // XP progress bar data
  const rankThresholds = [
    { rank: 'Estagiário', minCases: 0 },
    { rank: 'Residente', minCases: 5 },
    { rank: 'Especialista', minCases: 12 },
    { rank: 'Chefe de Clínica', minCases: 20 },
  ];
  const currentRankIdx = rankThresholds.findIndex(t => t.rank === careerState.rank);
  const nextRank = rankThresholds[currentRankIdx + 1];
  const casesForNext = nextRank ? nextRank.minCases - careerState.completedCaseIds.length : 0;

  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <div className="min-h-screen bg-[#0B1511] text-[#E2E8F0] flex flex-col font-sans selection:bg-[#C89A3C]/30 selection:text-[#F8FAF6]">
      {/* Top Navigation Bar */}
      <Navbar
        money={careerState.money}
        shiftMinutes={careerState.shiftMinutes}
        reliability={careerState.reliability}
        rank={careerState.rank}
        onBackToMenu={() => setView('menu')}
        isSoundOn={isSoundOn}
        setIsSoundOn={setIsSoundOn}
        currentCaseCode={selectedCase?.patientCode}
        completedCases={careerState.completedCaseIds.length}
        casesForNextRank={casesForNext > 0 ? casesForNext : undefined}
        nextRankName={nextRank?.rank}
      />

      {/* Screen Views */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <AnimatePresence mode="wait">
          {view === 'menu' && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="flex-1 flex"
            >
              <MainMenu careerState={careerState} onStartShift={handleStartShift} />
            </motion.div>
          )}

          {view === 'case_select' && (
            <motion.div
              key="case_select"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="flex-1 flex"
            >
              <CaseSelect
                careerState={careerState}
                onSelectCase={handleSelectCase}
                onBackToMenu={() => setView('menu')}
              />
            </motion.div>
          )}

          {view === 'clinic' && selectedCase && (
            <motion.div
              key="clinic"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="flex-1 flex"
            >
              <ClinicWorkstation
                caseData={selectedCase}
                careerState={careerState}
                onFinishCase={handleFinishCase}
                onBackToCaseSelect={() => setView('case_select')}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Promotion Overlay */}
        <AnimatePresence>
          {promotion && (
            <PromotionScreen
              oldRank={promotion.oldRank}
              newRank={promotion.newRank}
              onDismiss={handleDismissPromotion}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
    </ErrorBoundary>
  );
}

export default App;
