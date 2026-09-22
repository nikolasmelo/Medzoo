import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { MainMenu } from './components/MainMenu';
import { CaseSelect } from './components/CaseSelect';
import { ClinicWorkstation } from './components/ClinicWorkstation';
import { PromotionScreen } from './components/PromotionScreen';
import { AuthScreen } from './components/AuthScreen';
import { SettingsModal } from './components/SettingsModal';
import { HospitalShopModal } from './components/HospitalShopModal';
import { HOSPITAL_UPGRADES } from './data/upgrades';
import { supabase } from './lib/supabase';
import { fetchCareer, saveCareer } from './lib/db';
import type { CaseData, CareerState } from './types';
import confetti from 'canvas-confetti';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PerformanceMonitor } from './utils/PerformanceMonitor';
import { soundManager } from './utils/sound';

export function App() {
  const [view, setView] = useState<'auth' | 'menu' | 'case_select' | 'clinic'>('auth');
  const [userId, setUserId] = useState<string | null>(null);
  const [selectedCase, setSelectedCase] = useState<CaseData | null>(null);
  const [isSoundOn, setIsSoundOn] = useState<boolean>(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isShopOpen, setIsShopOpen] = useState<boolean>(false);
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
      completedCaseIds: [],
      unlockedUpgrades: []
    };
  });

  // Supabase Auth session validation & real-time monitoring + Save download on login
  useEffect(() => {
    const isRecoveryFlow = () => {
      if (
        window.location.hash.includes('type=recovery') ||
        window.location.search.includes('type=recovery') ||
        sessionStorage.getItem('medzoo_recovering') === 'true'
      ) {
        sessionStorage.setItem('medzoo_recovering', 'true');
        return true;
      }
      return false;
    };

    // Armazena a flag no sessionStorage imediatamente no mount antes que o Supabase remova a hash
    isRecoveryFlow();

    const syncCareerFromCloud = async (uid: string) => {
      setUserId(uid);
      const cloudCareer = await fetchCareer(uid);
      setCareerState(cloudCareer);
      setView('menu');
    };

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user && !isRecoveryFlow()) {
        syncCareerFromCloud(session.user.id);
      } else {
        setUserId(null);
        setView('auth');
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        sessionStorage.setItem('medzoo_recovering', 'true');
        setView('auth');
        setUserId(null);
      } else if (isRecoveryFlow()) {
        setView('auth');
        setUserId(null);
      } else if ((event === 'SIGNED_IN' || event === 'INITIAL_SESSION') && session?.user) {
        if (!isRecoveryFlow()) {
          syncCareerFromCloud(session.user.id);
        } else {
          setView('auth');
          setUserId(null);
        }
      } else if (event === 'SIGNED_OUT' || !session) {
        setUserId(null);
        setView('auth');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Auto-Save Silencioso em background (com debounce)
  useEffect(() => {
    if (!userId) return;

    const timer = setTimeout(() => {
      saveCareer(userId, careerState);
    }, 1000);

    return () => clearTimeout(timer);
  }, [careerState, userId]);

  // Save career state to localStorage (fallback offline)
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

  // Route / View Fallback Guard:
  // If view is 'clinic' but no case is selected, redirect to 'case_select'
  useEffect(() => {
    if (view === 'clinic' && !selectedCase) {
      setView('case_select');
    }
  }, [view, selectedCase]);

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

  // ── Rank Ladder (Alinhada com os 20 casos: 4 Estagiário, 6 Residente, 5 Especialista, 5 Chefe) ──
  const rankThresholds = [
    { rank: 'Estagiário', minCases: 0 },
    { rank: 'Residente', minCases: 4 },
    { rank: 'Especialista', minCases: 10 },
    { rank: 'Chefe de Clínica', minCases: 15 },
  ];

  // Auto-promoção retroativa imediata para jogadores que já concluíram 4 ou mais casos
  useEffect(() => {
    const completedCount = careerState.completedCaseIds.length;
    let targetRank = 'Estagiário';
    if (completedCount >= 15) targetRank = 'Chefe de Clínica';
    else if (completedCount >= 10) targetRank = 'Especialista';
    else if (completedCount >= 4) targetRank = 'Residente';

    if (careerState.rank !== targetRank) {
      const oldRank = careerState.rank;
      const rankOrder: Record<string, number> = {
        'Estagiário': 0,
        'Residente': 1,
        'Especialista': 2,
        'Chefe de Clínica': 3,
      };
      setCareerState(prev => ({ ...prev, rank: targetRank }));

      if ((rankOrder[targetRank] ?? 0) > (rankOrder[oldRank] ?? 0)) {
        setPromotion({ oldRank, newRank: targetRank });
        confetti({ particleCount: 200, spread: 120, origin: { y: 0.5 }, colors: ['#C89A3C', '#E8B84A', '#52C41A', '#FFFFFF'] });
      }
    }
  }, [careerState.completedCaseIds, careerState.rank]);

  const handleBuyUpgrade = (upgradeId: string) => {
    const upgrade = HOSPITAL_UPGRADES.find(u => u.id === upgradeId);
    if (!upgrade) return;
    if (careerState.money < upgrade.cost) return;

    setCareerState(prev => ({
      ...prev,
      money: prev.money - upgrade.cost,
      unlockedUpgrades: [...(prev.unlockedUpgrades || []), upgradeId],
    }));
  };

  const currentRankIdx = rankThresholds.findIndex(t => t.rank === careerState.rank);
  const nextRank = rankThresholds[currentRankIdx + 1];
  const casesForNext = nextRank ? nextRank.minCases - careerState.completedCaseIds.length : 0;

  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <div className="min-h-screen bg-[#0B1511] text-[#E2E8F0] flex flex-col font-sans selection:bg-[#C89A3C]/30 selection:text-[#F8FAF6]">
      {/* Top Navigation Bar - render only when authenticated */}
      {view !== 'auth' && (
        <Navbar
          money={careerState.money}
          shiftMinutes={careerState.shiftMinutes}
          reliability={careerState.reliability}
          rank={careerState.rank}
          onBackToMenu={() => setView('menu')}
          isSoundOn={isSoundOn}
          setIsSoundOn={setIsSoundOn}
          onOpenSettings={() => setIsSettingsOpen(true)}
          onOpenShop={() => setIsShopOpen(true)}
          currentCaseCode={selectedCase?.patientCode}
          completedCases={careerState.completedCaseIds.length}
          casesForNextRank={casesForNext > 0 ? casesForNext : undefined}
          nextRankName={nextRank?.rank}
          currentView={view}
        />
      )}

      {/* Screen Views */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <AnimatePresence mode="wait">
          {view === 'auth' && (
            <motion.div
              key="auth"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="flex-1 flex"
            >
              <AuthScreen onAuthComplete={() => setView('menu')} />
            </motion.div>
          )}

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
                onOpenShop={() => setIsShopOpen(true)}
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

          {/* Catch-all Fallback: If view is invalid or clinic without case, render MainMenu */}
          {(view !== 'auth' && view !== 'menu' && view !== 'case_select' && (view !== 'clinic' || !selectedCase)) && (
            <motion.div
              key="fallback_menu"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="flex-1 flex"
            >
              <MainMenu careerState={careerState} onStartShift={handleStartShift} />
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

        {/* Hospital Supply Shop Modal */}
        <HospitalShopModal
          isOpen={isShopOpen}
          onClose={() => setIsShopOpen(false)}
          playerMoney={careerState.money}
          playerRank={careerState.rank}
          unlockedUpgrades={careerState.unlockedUpgrades || []}
          onPurchase={handleBuyUpgrade}
        />

        {/* Global Settings Modal */}
        {isSettingsOpen && (
          <SettingsModal onClose={() => setIsSettingsOpen(false)} />
        )}
      </main>
    </div>
    </ErrorBoundary>
  );
}

export default App;
