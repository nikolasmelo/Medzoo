import { cases } from './src/data/cases';
import { 
  createInitialVitals, 
  updateVitals, 
  SPECIES_COEFFICIENTS,
  VitalsParameters 
} from './src/utils/physiologyEngine';

// Simulating the Global Game State and XP logic from ClinicWorkstation & App
interface CareerState {
  money: number;
  reliability: number;
  shiftMinutes: number;
  xp: number;
  rank: string;
  completedCaseIds: string[];
}

let careerState: CareerState = {
  money: 1200,
  reliability: 85,
  shiftMinutes: 0,
  xp: 0,
  rank: 'Estagiário',
  completedCaseIds: []
};

const rankLadder = [
  { rank: 'Estagiário', minCases: 0 },
  { rank: 'Residente', minCases: 5 },
  { rank: 'Especialista', minCases: 12 },
  { rank: 'Chefe de Clínica', minCases: 20 },
];

function updateRank(currentCareer: CareerState): CareerState {
  let newRank = currentCareer.rank;
  for (const tier of rankLadder) {
    if (currentCareer.completedCaseIds.length >= tier.minCases) {
      newRank = tier.rank;
    }
  }
  return { ...currentCareer, rank: newRank };
}

console.log('=============================================');
console.log('MEDZOO V2.0 - HEADLESS QA AUDIT & SIMULATION');
console.log('=============================================\n');

let totalCases = cases.length;
console.log(`Loaded ${totalCases} patients from cases.ts`);

let bugsFound = 0;

for (let i = 0; i < cases.length; i++) {
  const caseData = cases[i];
  console.log(`\n--- SIMULATING CASE ${i + 1}: ${caseData.patientCode} (${caseData.speciesName}) ---`);

  // Initialize Vitals
  const speciesId = caseData.scientificName.toLowerCase().replace(' ', '_') as any;
  const safeSpeciesId = SPECIES_COEFFICIENTS[speciesId] ? speciesId : 'hydrochoerus_hydrochaeris';
  
  if (!SPECIES_COEFFICIENTS[speciesId]) {
    console.warn(`[WARNING] Species ID '${speciesId}' not found in SPECIES_COEFFICIENTS. Fallback used.`);
    bugsFound++;
  }

  let vitals = createInitialVitals(safeSpeciesId);
  const coeffs = SPECIES_COEFFICIENTS[safeSpeciesId];
  console.log(`Initial Vitals: HR ${vitals.heartRate} bpm, SpO2 ${vitals.oxygenSaturation}%, Alive: ${vitals.isAlive}`);

  // Intentionally fail every 5th case to test the lethal penalty and death state
  const isIntentionalFailure = (i + 1) % 5 === 0;

  if (isIntentionalFailure) {
    console.log(`[ACTION] Intentionally causing lethal surgical failure via onVitalsDrain (hemorrhage)`);
    // Simulate massive vitals drain
    let timeElapsed = 0;
    while (vitals.isAlive && timeElapsed < 120) {
      // massive hemorrhage
      vitals = updateVitals(vitals, 1, { handling: 1, painLevel: 1, anesthesiaDepth: 0.5, activeHemorrhage: 15.0 });
      timeElapsed++;
    }

    if (vitals.isAlive) {
      console.error(`[BUG] Patient survived massive hemorrhage after 120s! Math imbalance in PhysiologyEngine.`);
      bugsFound++;
    } else {
      console.log(`Patient died at T+${timeElapsed}s. Vitals: HR ${vitals.heartRate}, SpO2 ${vitals.oxygenSaturation}.`);
    }

    // Apply Penalties as done in ClinicWorkstation.tsx
    const oldXp = careerState.xp;
    const oldRep = careerState.reliability;
    careerState.xp = Math.max(0, careerState.xp - 500);
    careerState.reliability = Math.max(0, careerState.reliability - 15);
    
    console.log(`[PENALTY] XP: ${oldXp} -> ${careerState.xp} | REP: ${oldRep} -> ${careerState.reliability}`);
    
    if (careerState.xp < 0 || careerState.reliability < 0) {
      console.error(`[BUG] Math.max clamp failed. Negative progression detected.`);
      bugsFound++;
    }
  } else {
    // Perfect Playthrough
    console.log(`[ACTION] Simulating perfect diagnosis and treatment...`);
    const correctHypothesis = caseData.hypotheses.find(h => h.isCorrect);
    const appropriateTreatment = caseData.treatmentOptions.find(t => t.appropriate);

    if (!correctHypothesis) {
      console.error(`[BUG] Case ${caseData.id} is missing a correct hypothesis!`);
      bugsFound++;
    }
    if (!appropriateTreatment) {
      console.error(`[BUG] Case ${caseData.id} is missing an appropriate treatment option!`);
      bugsFound++;
    }

    // Success math (5 stars max: 3 base + 1 correct hyp + 1 (assuming 2+ evidences found))
    const finalStars = 5; 
    careerState.xp += finalStars * 150; // 750 XP
    careerState.money += caseData.caseBudget;
    careerState.reliability = Math.min(100, careerState.reliability + 5);
    
    if (!careerState.completedCaseIds.includes(caseData.id)) {
      careerState.completedCaseIds.push(caseData.id);
    }

    careerState = updateRank(careerState);
    console.log(`[SUCCESS] XP: ${careerState.xp} | Rank: ${careerState.rank} | Money: R$${careerState.money}`);
  }
}

console.log('\n=============================================');
console.log('AUDIT COMPLETE');
console.log(`Total Bugs/Imbalances Found: ${bugsFound}`);
console.log(`Final Career State: Rank: ${careerState.rank} | XP: ${careerState.xp} | Completed: ${careerState.completedCaseIds.length}/20`);
console.log('=============================================');

if (bugsFound > 0) {
  process.exit(1);
}
