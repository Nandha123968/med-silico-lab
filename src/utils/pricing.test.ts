import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateConsultationEstimate } from './pricing.ts';

test('calculates molecular docking estimate with ligand multiplier', () => {
  const result = calculateConsultationEstimate({
    serviceIds: ['molecular-docking'],
    ligandCount: 4,
    isAcademicScholar: false,
    currency: 'INR',
  });

  // 1500 * 4 = 6000
  assert.equal(result.subtotal, 6000);
  assert.equal(result.discountAmount, 0);
  assert.equal(result.total, 6000);
  assert.equal(result.currency, 'INR');
  assert.ok(result.estimatedDays > 0);
});

test('applies academic scholar discount of 20%', () => {
  const result = calculateConsultationEstimate({
    serviceIds: ['molecular-docking', 'qsar-study'],
    ligandCount: 2,
    isAcademicScholar: true,
    currency: 'INR',
  });

  // docking (1500 * 2 = 3000) + qsar (6500) = 9500
  assert.equal(result.subtotal, 9500);
  // 20% discount of 9500 = 1900
  assert.equal(result.discountAmount, 1900);
  assert.equal(result.total, 7600);
});

test('calculates MD simulation based on trajectory length', () => {
  const result = calculateConsultationEstimate({
    serviceIds: ['md-simulations'],
    ligandCount: 1,
    mdTrajectoryNs: 100,
    isAcademicScholar: false,
    currency: 'USD',
  });

  // 2.5 * 100 = 250
  assert.equal(result.subtotal, 250);
  assert.equal(result.total, 250);
  assert.equal(result.currency, 'USD');
});
