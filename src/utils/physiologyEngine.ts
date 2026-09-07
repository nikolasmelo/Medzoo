export type SpeciesTaxonomy = 
  | 'chelonoidis_carbonarius'    // Jabuti-piranga
  | 'myrmecophaga_tridactyla'    // Tamanduá-bandeira
  | 'chrysocyon_brachyurus'      // Lobo-guará
  | 'harpia_harpyja'             // Harpia
  | 'caiman_yacare'              // Jacaré-do-pantanal
  | 'inia_geoffrensis'           // Boto-cor-de-rosa
  | 'anodorhynchus_hyacinthinus' // Arara-azul-grande
  | 'hydrochoerus_hydrochaeris'  // Capivara
  | 'leopardus_pardalis'         // Jaguatirica
  | 'eunectes_notaeus'           // Sucuri-amarela
  | 'athene_cunicularia'         // Coruja-buraqueira
  | 'leontopithecus_rosalia'     // Mico-leão-dourado
  | 'ramphastos_toco'            // Tucano-toco
  | 'panthera_onca';             // Onça-pintada

export interface VitalsParameters {
  readonly speciesId: SpeciesTaxonomy;
  heartRate: number;         // bpm
  respiratoryRate: number;   // rpm
  bodyTemperature: number;   // °C
  acidosisLevel: number;     // ΔpH (deviation from normal 7.4)
  stressIntegral: number;    // Accumulated P_CM(t)
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
  oxygenSaturation: number;  // SpO2 %
  isAlive: boolean;
  activeCrisis?: 'NONE' | 'BRADYCARDIA_CRITICAL' | 'HYPOVOLEMIC_SHOCK';
}

export function calculateMetabolicRateMultiplier(currentTemp: number, optimalTemp: number, isEctothermic: boolean): number {
  if (!isEctothermic) return 1.0; 
  const Q10 = 2.5; 
  return Math.pow(Q10, (currentTemp - optimalTemp) / 10.0);
}

export interface SpeciesCoefficients {
  alpha: number;  // Temperature susceptibility
  beta: number;   // Heart rate susceptibility
  gamma: number;  // Acidosis susceptibility
  tempThreshold: number;  // °C threshold for damage
  baseHeartRate: number;  // Normal resting HR
  baseRespRate: number;
  baseTemp: number;
  maxStressTolerance: number; // P_CM threshold for clinical failure
  isEctothermic: boolean;
}

export type SurgicalPhase = 
  | 'PRE_OP_ASSESSMENT' 
  | 'ANESTHESIA_INDUCTION' 
  | 'SURGICAL_INCISION' 
  | 'FRACTURE_REDUCTION' 
  | 'OSTEOSYNTHESIS'
  | 'WOUND_CLOSURE' 
  | 'ENDOSCOPY'
  | 'POST_OP_RECOVERY';

export type SurgicalInstrument = 
  | 'scalpel'
  | 'forceps'
  | 'bone_drill'
  | 'suture_needle'
  | 'irrigation_syringe'
  | 'epoxy_applicator'
  | 'steinmann_pin'
  | 'lcp_plate'
  | 'cerclage_wire'
  | 'endoscope';

export interface PrecisionMetrics {
  incisionAccuracy: number;    // 0-1 RMSE-based
  stressAccumulated: number;   // Total E_stress
  iatrogenicDamage: number;    // Total D_iatro
  timeElapsed: number;         // seconds
  proceduresCompleted: string[];
}

export interface ClinicalState {
  currentPhase: SurgicalPhase;
  patient: VitalsParameters;
  activeInstrument: SurgicalInstrument | null;
  scoreMetrics: PrecisionMetrics;
  isCapturMyopathyTriggered: boolean;
  phaseHistory: SurgicalPhase[];
}

export interface Point2D {
  x: number;
  y: number;
}

export interface CatmullRomSpline {
  id: string;
  controlPoints: Point2D[];
  tension: number;
  depthProfile: Float32Array;
  isSutured: boolean;
}

export const SPECIES_COEFFICIENTS: Record<SpeciesTaxonomy, SpeciesCoefficients> = {
  'chelonoidis_carbonarius': { // Jabuti-piranga (Tortoise) - Ectotherm
    alpha: 0.1, beta: 0.05, gamma: 0.2, tempThreshold: 35.0, 
    baseHeartRate: 30, baseRespRate: 5, baseTemp: 28.0, 
    maxStressTolerance: 500, isEctothermic: true
  },
  'caiman_yacare': { // Jacaré-do-pantanal (Caiman) - Ectotherm
    alpha: 0.15, beta: 0.1, gamma: 0.4, tempThreshold: 38.0, 
    baseHeartRate: 25, baseRespRate: 4, baseTemp: 30.0, 
    maxStressTolerance: 600, isEctothermic: true
  },
  'eunectes_notaeus': { // Sucuri-amarela (Anaconda) - Ectotherm
    alpha: 0.08, beta: 0.05, gamma: 0.1, tempThreshold: 30.0,
    baseHeartRate: 35, baseRespRate: 5, baseTemp: 28.0, maxStressTolerance: 300, isEctothermic: true
  },
  'harpia_harpyja': { // Harpia (Harpy Eagle) - Bird
    alpha: 0.18, beta: 0.25, gamma: 0.2, tempThreshold: 41.0,
    baseHeartRate: 200, baseRespRate: 35, baseTemp: 40.5, maxStressTolerance: 180, isEctothermic: false
  },
  'anodorhynchus_hyacinthinus': { // Arara-azul-grande (Hyacinth Macaw) - Bird
    alpha: 1.8, beta: 2.5, gamma: 1.6, tempThreshold: 43.0, 
    baseHeartRate: 300, baseRespRate: 50, baseTemp: 41.0, 
    maxStressTolerance: 250, isEctothermic: false
  },
  'athene_cunicularia': { // Coruja-buraqueira (Burrowing Owl) - Bird
    alpha: 0.15, beta: 0.20, gamma: 0.2, tempThreshold: 38.5, 
    baseHeartRate: 220, baseRespRate: 60, baseTemp: 39.0, maxStressTolerance: 200, isEctothermic: false
  },
  'ramphastos_toco': { // Tucano-toco (Toco Toucan) - Bird
    alpha: 0.2, beta: 0.3, gamma: 0.15, tempThreshold: 41.5,
    baseHeartRate: 260, baseRespRate: 50, baseTemp: 41.0, maxStressTolerance: 150, isEctothermic: false
  },
  'myrmecophaga_tridactyla': { // Tamanduá-bandeira (Giant Anteater) - Mammal
    alpha: 1.2, beta: 1.5, gamma: 1.0, tempThreshold: 36.5, 
    baseHeartRate: 70, baseRespRate: 15, baseTemp: 34.0, 
    maxStressTolerance: 400, isEctothermic: false
  },
  'chrysocyon_brachyurus': { // Lobo-guará (Maned Wolf) - Mammal (High Susceptibility / Artiodactyl-like response)
    alpha: 2.5, beta: 3.0, gamma: 2.5, tempThreshold: 40.0, 
    baseHeartRate: 90, baseRespRate: 20, baseTemp: 38.5, 
    maxStressTolerance: 200, isEctothermic: false
  },
  'hydrochoerus_hydrochaeris': { // Capivara (Capybara) - Mammal
    alpha: 1.0, beta: 1.2, gamma: 0.8, tempThreshold: 39.5, 
    baseHeartRate: 80, baseRespRate: 18, baseTemp: 37.5, 
    maxStressTolerance: 450, isEctothermic: false
  },
  'leopardus_pardalis': { // Jaguatirica (Ocelot) - Mammal
    alpha: 1.5, beta: 1.8, gamma: 1.2, tempThreshold: 40.5, 
    baseHeartRate: 110, baseRespRate: 25, baseTemp: 38.0, 
    maxStressTolerance: 350, isEctothermic: false
  },
  'inia_geoffrensis': { // Boto-cor-de-rosa (Amazon River Dolphin) - Marine Mammal
    alpha: 2.0, beta: 2.5, gamma: 2.0, tempThreshold: 38.5, 
    baseHeartRate: 100, baseRespRate: 12, baseTemp: 36.5, 
    maxStressTolerance: 250, isEctothermic: false
  },
  'leontopithecus_rosalia': { // Mico-leão-dourado (Golden Lion Tamarin) - Mammal
    alpha: 2.0, beta: 2.5, gamma: 1.8, tempThreshold: 40.0, 
    baseHeartRate: 280, baseRespRate: 55, baseTemp: 38.9, 
    maxStressTolerance: 300, isEctothermic: false
  },
  'panthera_onca': { // Onça-pintada (Jaguar) - Large Mammal
    alpha: 0.1, beta: 0.1, gamma: 0.1, tempThreshold: 39.5,
    baseHeartRate: 75, baseRespRate: 25, baseTemp: 38.5, maxStressTolerance: 250, isEctothermic: false
  }
};

export function createInitialVitals(speciesId: SpeciesTaxonomy): VitalsParameters {
  const coeffs = SPECIES_COEFFICIENTS[speciesId];
  return {
    speciesId,
    heartRate: coeffs.baseHeartRate,
    respiratoryRate: coeffs.baseRespRate,
    bodyTemperature: coeffs.baseTemp,
    acidosisLevel: 0.0,
    stressIntegral: 0.0,
    bloodPressureSystolic: 120, // default baseline across mammals, birds somewhat higher but normalized here
    bloodPressureDiastolic: 80,
    oxygenSaturation: 98,
    isAlive: true,
    activeCrisis: 'NONE'
  };
}

export function computeCapturMyopathyIntegral(vitals: VitalsParameters, deltaTimeSeconds: number): number {
  const coeffs = SPECIES_COEFFICIENTS[vitals.speciesId];
  const tempExcess = Math.max(0, vitals.bodyTemperature - coeffs.tempThreshold);
  
  // Heart rate deviation penalty
  const hrDeviation = (vitals.heartRate - coeffs.baseHeartRate) / coeffs.baseHeartRate;
  const hrPenalty = hrDeviation > 0 ? Math.pow(hrDeviation, 2) : 0;
  
  // Instantaneous stress
  const instantaneousStress = 
    (coeffs.alpha * tempExcess) + 
    (coeffs.beta * hrPenalty) + 
    (coeffs.gamma * vitals.acidosisLevel);

  return vitals.stressIntegral + (instantaneousStress * deltaTimeSeconds);
}

export function updateVitals(
  vitals: VitalsParameters, 
  deltaTimeSeconds: number, 
  stressFactors: { handling: number; painLevel: number; anesthesiaDepth: number; activeHemorrhage?: number; drugsAdministered?: { atropine?: number; epinephrine?: number } }
): VitalsParameters {
  if (!vitals.isAlive) return vitals;

  const coeffs = SPECIES_COEFFICIENTS[vitals.speciesId];
  
  let newHr = vitals.heartRate;
  let newRr = vitals.respiratoryRate;
  let newTemp = vitals.bodyTemperature;
  let newSpo2 = vitals.oxygenSaturation;
  let newAcidosis = vitals.acidosisLevel;
  let newBpSystolic = vitals.bloodPressureSystolic;
  let newBpDiastolic = vitals.bloodPressureDiastolic;
  let newCrisis = vitals.activeCrisis || 'NONE';

  const metabolism = calculateMetabolicRateMultiplier(newTemp, coeffs.baseTemp, coeffs.isEctothermic);

  // 1. Handling Effects
  if (stressFactors.handling > 0.5) {
    newHr += (2.0 * stressFactors.handling) * deltaTimeSeconds;
    // Ectotherms struggle differently with temperature, but handling often increases body heat from exertion
    newTemp += (0.01 * stressFactors.handling) * deltaTimeSeconds;
  }

  // 2. Pain Effects
  if (stressFactors.painLevel > 0.3) {
    newHr += (5.0 * stressFactors.painLevel) * deltaTimeSeconds;
    newRr += (2.0 * stressFactors.painLevel) * deltaTimeSeconds;
  }

  // 3. Anesthesia Effects
  if (stressFactors.anesthesiaDepth > 0) {
    // Deep anesthesia depresses cardiovascular and respiratory systems, scaled by metabolism (Q10)
    newHr -= (coeffs.baseHeartRate * 0.05 * stressFactors.anesthesiaDepth * metabolism) * deltaTimeSeconds;
    newRr -= (coeffs.baseRespRate * 0.05 * stressFactors.anesthesiaDepth * metabolism) * deltaTimeSeconds;
    
    // Decrease SpO2 slightly with deep anesthesia if resp rate drops too low
    if (newRr < coeffs.baseRespRate * 0.5) {
      newSpo2 -= 0.5 * stressFactors.anesthesiaDepth * metabolism * deltaTimeSeconds;
      newAcidosis += 0.05 * stressFactors.anesthesiaDepth * deltaTimeSeconds; // Respiratory acidosis
    } else {
      // Natural recovery of SpO2 if ventilation is okay
      newSpo2 += 0.5 * deltaTimeSeconds;
      newAcidosis = Math.max(0, newAcidosis - 0.01 * deltaTimeSeconds);
    }
    
    // Slight temperature drop under anesthesia (vasodilation + loss of thermoregulation)
    newTemp -= (0.005 * stressFactors.anesthesiaDepth) * deltaTimeSeconds;

    // Stochastic Anesthetic Crisis (Vagal reflex causing severe bradycardia)
    // 0.5% chance per second under deep anesthesia
    if (newCrisis === 'NONE' && stressFactors.anesthesiaDepth > 0.8 && Math.random() < 0.005 * deltaTimeSeconds) {
      newCrisis = 'BRADYCARDIA_CRITICAL';
    }
  }

  // Handle active crises
  if (newCrisis === 'BRADYCARDIA_CRITICAL') {
    newHr -= 30 * deltaTimeSeconds; // Rapidly drops
    newBpSystolic -= 5 * deltaTimeSeconds;
    newSpo2 -= 2 * deltaTimeSeconds;
  }

  // 3.5 Active Hemorrhage (Hypovolemic Shock)
  if (stressFactors.activeHemorrhage && stressFactors.activeHemorrhage > 0) {
     const bloodLossRate = stressFactors.activeHemorrhage * deltaTimeSeconds;
     
     // Blood pressure drops rapidly
     newBpSystolic -= bloodLossRate * 5;
     newBpDiastolic -= bloodLossRate * 3;
     
     // Compensatory tachycardia (HR spikes), then crashes if BP is too low
     if (newBpSystolic > 60) {
        newHr += bloodLossRate * 10;
     } else {
        newHr -= bloodLossRate * 15; // Ischemic bradycardia
     }
     
     // Prevent negative HR mid-calculation
     newHr = Math.max(0, newHr);
     
     // Tissue hypoxia leading to acidosis and SpO2 drop
     newSpo2 -= bloodLossRate * 2;
     newAcidosis += bloodLossRate * 0.1;
     
     if (newCrisis === 'NONE' && stressFactors.activeHemorrhage > 5.0 && Math.random() < 0.02 * deltaTimeSeconds) {
       newCrisis = 'HYPOVOLEMIC_SHOCK';
     }
  }

  // Handle active crises
  if (newCrisis === 'HYPOVOLEMIC_SHOCK') {
    newBpSystolic -= 10 * deltaTimeSeconds; // Crash
  }

  // 3.8 Drug Effects
  if (stressFactors.drugsAdministered?.atropine) {
    // Atropine reverses vagal bradycardia
    newHr += (25.0 * stressFactors.drugsAdministered.atropine) * deltaTimeSeconds;
    if (newCrisis === 'BRADYCARDIA_CRITICAL' && newHr > coeffs.baseHeartRate * 0.6) {
      newCrisis = 'NONE'; // Resolved
    }
  }

  if (stressFactors.drugsAdministered?.epinephrine) {
    newHr += (50.0 * stressFactors.drugsAdministered.epinephrine) * deltaTimeSeconds;
    newBpSystolic += (20.0 * stressFactors.drugsAdministered.epinephrine) * deltaTimeSeconds;
    if (newCrisis === 'HYPOVOLEMIC_SHOCK' && newBpSystolic > 90) {
      newCrisis = 'NONE'; // Temporarily resolved shock
    }
  }

  // 4. Clamping values to physiologic limits (avoid infinite growth/negative values)
  newHr = Math.max(0, Math.min(coeffs.baseHeartRate * 3.5, newHr));
  newRr = Math.max(0, Math.min(coeffs.baseRespRate * 4.0, newRr));
  newTemp = Math.max(coeffs.baseTemp - 10, Math.min(coeffs.baseTemp + 8, newTemp));
  newSpo2 = Math.max(0, Math.min(100, newSpo2));
  newAcidosis = Math.max(0, Math.min(2.0, newAcidosis)); // Delta pH limit (death usually occurs before this anyway)
  newBpSystolic = Math.max(0, newBpSystolic);
  newBpDiastolic = Math.max(0, newBpDiastolic);

  // 5. Compute new stress integral (Capture Myopathy)
  const tempVitals = {
    ...vitals,
    heartRate: newHr,
    respiratoryRate: newRr,
    bodyTemperature: newTemp,
    acidosisLevel: newAcidosis,
    oxygenSaturation: newSpo2,
    bloodPressureSystolic: newBpSystolic,
    bloodPressureDiastolic: newBpDiastolic,
    activeCrisis: newCrisis
  };
  
  const newStressIntegral = computeCapturMyopathyIntegral(tempVitals, deltaTimeSeconds);

  // 6. Check Life/Death conditions
  // Death by myopathy, severe hypoxia, hypovolemia, or cardiac arrest
  const isAlive = 
    newStressIntegral <= coeffs.maxStressTolerance && 
    newSpo2 >= 50.0 && 
    newHr > 0 &&
    newBpSystolic >= 40.0;

  return {
    ...tempVitals,
    stressIntegral: newStressIntegral,
    isAlive
  };
}

export function computeSurgicalScore(metrics: PrecisionMetrics, operationDuration: number): number {
  const W_p = 1.0;
  const W_e = 0.3;
  const W_d = 0.5;

  // Assuming incisionAccuracy is normalized 0-100 internally for score math, or if it is 0-1 we map it
  const basePrecisionScore = metrics.incisionAccuracy <= 1.0 ? metrics.incisionAccuracy * 100 : metrics.incisionAccuracy;

  const rawScore = (basePrecisionScore * W_p) - (metrics.stressAccumulated * W_e) - (metrics.iatrogenicDamage * W_d);
  
  // Time decay factor: Φ(T_op) = exp(-0.001 * T_op)
  const timeDecayFactor = Math.exp(-0.001 * operationDuration);
  
  const finalScore = rawScore * timeDecayFactor;

  return Math.max(0, Math.min(100, finalScore));
}

export function evaluateCatmullRomPoint(p0: Point2D, p1: Point2D, p2: Point2D, p3: Point2D, t: number): Point2D {
  const t2 = t * t;
  const t3 = t2 * t;

  const x = 0.5 * (
    (2.0 * p1.x) +
    (-p0.x + p2.x) * t +
    (2.0 * p0.x - 5.0 * p1.x + 4.0 * p2.x - p3.x) * t2 +
    (-p0.x + 3.0 * p1.x - 3.0 * p2.x + p3.x) * t3
  );

  const y = 0.5 * (
    (2.0 * p1.y) +
    (-p0.y + p2.y) * t +
    (2.0 * p0.y - 5.0 * p1.y + 4.0 * p2.y - p3.y) * t2 +
    (-p0.y + 3.0 * p1.y - 3.0 * p2.y + p3.y) * t3
  );

  return { x, y };
}

export function generateSplinePath(controlPoints: Point2D[], segments: number): Point2D[] {
  if (controlPoints.length < 2) {
    return [...controlPoints];
  }

  // To interpolate over all intervals between control points using Catmull-Rom,
  // we pad the control points by duplicating the first and last points.
  const pts: Point2D[] = [
    controlPoints[0],
    ...controlPoints,
    controlPoints[controlPoints.length - 1]
  ];

  const result: Point2D[] = [];

  for (let i = 1; i < pts.length - 2; i++) {
    const p0 = pts[i - 1];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2];

    for (let s = 0; s < segments; s++) {
      const t = s / segments;
      result.push(evaluateCatmullRomPoint(p0, p1, p2, p3, t));
    }
  }

  // Push the exact final point to ensure no gaps at the end
  result.push(controlPoints[controlPoints.length - 1]);

  return result;
}

export function createClinicalState(speciesId: SpeciesTaxonomy): ClinicalState {
  return {
    currentPhase: 'PRE_OP_ASSESSMENT',
    patient: createInitialVitals(speciesId),
    activeInstrument: null,
    scoreMetrics: {
      incisionAccuracy: 1.0, // Start with 100% (1.0)
      stressAccumulated: 0,
      iatrogenicDamage: 0,
      timeElapsed: 0,
      proceduresCompleted: []
    },
    isCapturMyopathyTriggered: false,
    phaseHistory: ['PRE_OP_ASSESSMENT']
  };
}
