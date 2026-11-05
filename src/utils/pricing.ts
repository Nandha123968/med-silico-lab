export interface QuoteParams {
  serviceIds: string[];
  ligandCount: number;
  mdTrajectoryNs?: number;
  isAcademicScholar: boolean;
  currency: 'INR' | 'USD';
}

export const BASE_SERVICE_PRICES: Record<string, { inr: number; usd: number; unitType: 'fixed' | 'per_ligand' | 'per_ns' }> = {
  'molecular-docking': { inr: 1500, usd: 25, unitType: 'per_ligand' },
  'adme-prediction': { inr: 800, usd: 15, unitType: 'per_ligand' },
  'toxicity-prediction': { inr: 900, usd: 18, unitType: 'per_ligand' },
  'md-simulations': { inr: 120, usd: 2.5, unitType: 'per_ns' }, // per nanosecond
  'qsar-study': { inr: 6500, usd: 110, unitType: 'fixed' },
  '3d-qsar': { inr: 9500, usd: 160, unitType: 'fixed' },
  'pharmacophore-modeling': { inr: 7500, usd: 125, unitType: 'fixed' },
  'in-silico-vaccine-design': { inr: 12500, usd: 210, unitType: 'fixed' },
  'bioinformatics': { inr: 5000, usd: 85, unitType: 'fixed' },
  'manuscript-preparation': { inr: 8500, usd: 140, unitType: 'fixed' },
  'publication-guidance': { inr: 6000, usd: 100, unitType: 'fixed' },
  'plagiarism-checking': { inr: 1200, usd: 20, unitType: 'fixed' },
  'journal-selection': { inr: 2500, usd: 40, unitType: 'fixed' },
};

export function calculateConsultationEstimate(params: QuoteParams): {
  subtotal: number;
  discountAmount: number;
  total: number;
  currency: 'INR' | 'USD';
  estimatedDays: number;
} {
  const { serviceIds, ligandCount, mdTrajectoryNs = 50, isAcademicScholar, currency } = params;
  let subtotal = 0;
  let estimatedDays = 3;

  for (const id of serviceIds) {
    const config = BASE_SERVICE_PRICES[id];
    if (!config) continue;

    const baseCost = currency === 'INR' ? config.inr : config.usd;

    if (config.unitType === 'per_ligand') {
      const count = Math.max(1, ligandCount);
      subtotal += baseCost * count;
      estimatedDays += Math.ceil(count / 5);
    } else if (config.unitType === 'per_ns') {
      const ns = Math.max(10, mdTrajectoryNs);
      subtotal += baseCost * ns;
      estimatedDays += Math.ceil(ns / 20) + 2;
    } else {
      subtotal += baseCost;
      estimatedDays += 3;
    }
  }

  // Cap turnaround estimation
  estimatedDays = Math.min(estimatedDays, 25);

  // Academic scholar discount: 20%
  const discountRate = isAcademicScholar ? 0.20 : 0.0;
  const discountAmount = Math.round(subtotal * discountRate);
  const total = Math.max(0, subtotal - discountAmount);

  return {
    subtotal,
    discountAmount,
    total,
    currency,
    estimatedDays,
  };
}
