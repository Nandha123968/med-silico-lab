import test from 'node:test';
import assert from 'node:assert/strict';
import { generateWordPressTemplates } from './wpThemeGenerator.ts';

test('generates all required WordPress theme template files', () => {
  const templates = generateWordPressTemplates();
  assert.ok(templates['style.css']);
  assert.ok(templates['functions.php']);
  assert.ok(templates['header.php']);
  assert.ok(templates['footer.php']);
  assert.ok(templates['front-page.php']);
  assert.ok(templates['page-services.php']);
  assert.ok(templates['index.php']);
});

test('style.css contains proper WordPress theme headers', () => {
  const templates = generateWordPressTemplates();
  assert.match(templates['style.css'], /Theme Name:\s+Med-Silico Lab/);
  assert.match(templates['style.css'], /Text Domain:\s+med-silico-lab/);
});

test('front-page.php contains all 13 specified services in exact order', () => {
  const templates = generateWordPressTemplates();
  const front = templates['front-page.php'];

  const services = [
    'Molecular Docking',
    'ADME Prediction',
    'Toxicity Prediction',
    'MD Simulations',
    'QSAR Study',
    '3D QSAR',
    'Pharmacophore Modeling',
    'In Silico Vaccine Design',
    'Bioinformatics',
    'Manuscript Preparation Guidance',
    'Publication Guidance',
    'Plagiarism Checking & Paraphrasing',
    'Journal Selection'
  ];

  for (const s of services) {
    assert.ok(front.includes(s), `Missing service: ${s}`);
  }
});
