export interface QuoteParams {
  serviceIds: string[];
  ligandCount: number;
  mdTrajectoryNs?: number;
  isAcademicScholar: boolean;
  currency: 'INR' | 'USD';
}

export interface ServicePriceConfig {
  inr: number;
  usd: number;
  unitType: 'fixed' | 'per_ligand' | 'flexible';
  minCompounds?: number;
  unitLabel: string;
}

export const BASE_SERVICE_PRICES: Record<string, ServicePriceConfig> = {
  'molecular-docking': { inr: 300, usd: 4, unitType: 'per_ligand', minCompounds: 1, unitLabel: 'per compound' },
  'adme-prediction': { inr: 150, usd: 2, unitType: 'per_ligand', minCompounds: 1, unitLabel: 'per compound' },
  'toxicity-prediction': { inr: 150, usd: 2, unitType: 'per_ligand', minCompounds: 1, unitLabel: 'per compound' },
  'md-simulations': { inr: 1800, usd: 22, unitType: 'per_ligand', minCompounds: 1, unitLabel: 'per compound' },
  'qsar-study': { inr: 700, usd: 9, unitType: 'per_ligand', minCompounds: 15, unitLabel: 'per compound (Min. 15)' },
  '3d-qsar': { inr: 700, usd: 9, unitType: 'per_ligand', minCompounds: 15, unitLabel: 'per compound (Min. 15)' },
  'pharmacophore-modeling': { inr: 500, usd: 6, unitType: 'per_ligand', minCompounds: 5, unitLabel: 'per compound (Min. 5)' },
  'network-pharmacology': { inr: 350, usd: 5, unitType: 'per_ligand', minCompounds: 1, unitLabel: 'per compound' },
  'nmr-characterization': { inr: 400, usd: 5, unitType: 'per_ligand', minCompounds: 1, unitLabel: 'per compound' },
  'ftir-characterization': { inr: 300, usd: 4, unitType: 'per_ligand', minCompounds: 1, unitLabel: 'per compound' },
  'lcms-analysis': { inr: 400, usd: 5, unitType: 'per_ligand', minCompounds: 1, unitLabel: 'per compound' },
  'dft-calculation': { inr: 600, usd: 8, unitType: 'per_ligand', minCompounds: 1, unitLabel: 'per compound' },
  'in-silico-vaccine-design': { inr: 12000, usd: 145, unitType: 'fixed', unitLabel: 'per project' },
  'bioinformatics': { inr: 1500, usd: 20, unitType: 'fixed', unitLabel: 'per project' },
  'manuscript-preparation': { inr: 0, usd: 0, unitType: 'flexible', unitLabel: 'Flexible (Variable)' },
  'publication-guidance': { inr: 0, usd: 0, unitType: 'flexible', unitLabel: 'Flexible (Variable)' },
  'plagiarism-checking': { inr: 400, usd: 5, unitType: 'fixed', unitLabel: 'per manuscript' },
  'journal-selection': { inr: 1000, usd: 12, unitType: 'fixed', unitLabel: 'per manuscript' },
};

export function calculateConsultationEstimate(params: QuoteParams): {
  subtotal: number;
  discountAmount: number;
  total: number;
  currency: 'INR' | 'USD';
  estimatedDays: number;
} {
  const { serviceIds, ligandCount, isAcademicScholar, currency } = params;
  let subtotal = 0;
  let estimatedDays = 2;

  for (const id of serviceIds) {
    const config = BASE_SERVICE_PRICES[id];
    if (!config) continue;

    const baseCost = currency === 'INR' ? config.inr : config.usd;

    if (config.unitType === 'per_ligand') {
      const minRequired = config.minCompounds ?? 1;
      const count = Math.max(minRequired, Math.max(1, ligandCount));
      subtotal += baseCost * count;
      estimatedDays += Math.ceil(count / 5);
    } else {
      subtotal += baseCost;
      estimatedDays += 2;
    }
  }

  // Cap turnaround estimation
  estimatedDays = Math.min(estimatedDays, 21);

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
