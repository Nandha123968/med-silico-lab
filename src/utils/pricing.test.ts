import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateConsultationEstimate } from './pricing.ts';

test('calculates molecular docking estimate with ligand multiplier (300 per compound)', () => {
  const result = calculateConsultationEstimate({
    serviceIds: ['molecular-docking'],
    ligandCount: 4,
    isAcademicScholar: false,
    currency: 'INR',
  });

  // 300 * 4 = 1200
  assert.equal(result.subtotal, 1200);
  assert.equal(result.discountAmount, 0);
  assert.equal(result.total, 1200);
  assert.equal(result.currency, 'INR');
  assert.ok(result.estimatedDays > 0);
});

test('applies academic scholar discount of 20% and enforces QSAR minimum 15 compounds', () => {
  const result = calculateConsultationEstimate({
    serviceIds: ['molecular-docking', 'qsar-study'],
    ligandCount: 2,
    isAcademicScholar: true,
    currency: 'INR',
  });

  // docking (300 * 2 = 600) + qsar (700 * 15 min = 10500) = 11100
  assert.equal(result.subtotal, 11100);
  // 20% discount of 11100 = 2220
  assert.equal(result.discountAmount, 2220);
  assert.equal(result.total, 8880);
});

test('calculates MD simulation at 1800 per compound and Pharmacophore min 5 compounds', () => {
  const result = calculateConsultationEstimate({
    serviceIds: ['md-simulations', 'pharmacophore-modeling'],
    ligandCount: 2,
    isAcademicScholar: false,
    currency: 'INR',
  });

  // MD (1800 * 2 = 3600) + Pharmacophore (500 * 5 min = 2500) = 6100
  assert.equal(result.subtotal, 6100);
  assert.equal(result.total, 6100);
  assert.equal(result.currency, 'INR');
});

test('calculates DFT at 600 per compound, Vaccine Design at 12000 per project, and Manuscript as flexible', () => {
  const result = calculateConsultationEstimate({
    serviceIds: ['dft-calculation', 'in-silico-vaccine-design', 'manuscript-preparation'],
    ligandCount: 2,
    isAcademicScholar: false,
    currency: 'INR',
  });

  // DFT (600 * 2 = 1200) + Vaccine Design (12000) + Manuscript (0 flexible) = 13200
  assert.equal(result.subtotal, 13200);
  assert.equal(result.total, 13200);
});
