import test from 'node:test';
import assert from 'node:assert/strict';
import {
  escapeHtml,
  sanitizeText,
  sanitizeEmail,
  sanitizePhone,
  sanitizeUrl,
  createSecurityJwt,
  verifySecurityJwt,
  getCsrfToken,
  validateCsrfToken,
  checkRateLimit,
  resetRateLimits,
  initSecurityBootstrap,
} from './security.ts';
import { generatePdfBytes } from './pdfGenerator.ts';

test('OWASP XSS sanitization strips scripts and dangerous attributes', () => {
  const dirty = '<script>alert("xss")</script><img src=x onerror=alert(1)>Dr. Shivakumar';
  const clean = sanitizeText(dirty);
  assert.equal(clean, 'Dr. Shivakumar');
  assert.ok(!clean.includes('<script>'));
  assert.ok(!clean.includes('onerror'));
});

test('escapeHtml encodes special HTML characters safely', () => {
  assert.equal(escapeHtml('<div class="x">A & B</div>'), '&lt;div class=&quot;x&quot;&gt;A &amp; B&lt;&#x2F;div&gt;');
});

test('sanitizeEmail and sanitizePhone validate and clean user inputs', () => {
  assert.equal(sanitizeEmail('  Scholar@University.EDU '), 'scholar@university.edu');
  assert.equal(sanitizeEmail('not-an-email'), '');
  assert.equal(sanitizePhone('+91 78279-43097 <script>'), '+91 78279-43097');
});

test('sanitizeUrl blocks javascript: and data: URIs while allowing https://', () => {
  assert.equal(sanitizeUrl('javascript:alert(1)'), '');
  assert.equal(sanitizeUrl('data:text/html,<script>alert(1)</script>'), '');
  assert.equal(sanitizeUrl('https://medsilicolab.com/logo.png'), 'https://medsilicolab.com/logo.png');
  assert.equal(sanitizeUrl('/assets/logo.png'), '/assets/logo.png');
});

test('JWT creation and verification validates signature and expiration', () => {
  const token = createSecurityJwt({ sub: 'scholar-1', scope: 'consultation:submit' }, 3600);
  assert.equal(token.split('.').length, 3);

  const verified = verifySecurityJwt(token);
  assert.equal(verified.valid, true);
  assert.equal(verified.payload?.sub, 'scholar-1');
  assert.equal(verified.payload?.scope, 'consultation:submit');

  // Tamper with token signature
  const tampered = token.slice(0, -3) + 'xyz';
  assert.equal(verifySecurityJwt(tampered).valid, false);
  assert.equal(verifySecurityJwt(tampered).reason, 'invalid_signature');

  // Expired token check
  const expired = createSecurityJwt({ sub: 'scholar-1' }, -10);
  assert.equal(verifySecurityJwt(expired).valid, false);
  assert.equal(verifySecurityJwt(expired).reason, 'token_expired');
});

test('CSRF token generation and validation', () => {
  const token = getCsrfToken();
  assert.ok(token.length >= 16);
  assert.equal(validateCsrfToken(token), true);
  assert.equal(validateCsrfToken('invalid-csrf-token'), false);
});

test('Sliding-window rate limiter enforces maxAttempts threshold', () => {
  resetRateLimits();
  assert.equal(checkRateLimit('test-form', 2, 60000).allowed, true);
  assert.equal(checkRateLimit('test-form', 2, 60000).allowed, true);
  const blocked = checkRateLimit('test-form', 2, 60000);
  assert.equal(blocked.allowed, false);
  assert.ok(blocked.retryAfterSeconds > 0);
});

test('initSecurityBootstrap initializes OWASP, CSRF, and JWT status', () => {
  const status = initSecurityBootstrap();
  assert.equal(status.initialized, true);
  assert.equal(status.owaspHardened, true);
  assert.equal(status.csrfProtected, true);
  assert.equal(status.jwtActive, true);
});

test('generatePdfBytes generates valid PDF 1.4 binary with safe string escaping', () => {
  const bytes = generatePdfBytes({
    title: 'CALL FOR APPLICATIONS – SCIENTIFIC WORKSHOP FACILITATORS (HYBRID MODE)',
    subtitle: 'Advertisement No.: MSL/AI/2026/08 | Dated: 18-08-2026',
    referenceCode: 'Ref: MSL/AI/2026/08',
    sections: [
      {
        heading: '1. INVITATION OVERVIEW',
        lines: [
          'Med-Silico Lab invites applications from experienced educators (online & offline) — ₹300/compound.',
        ],
      },
    ],
  });

  const text = new TextDecoder('ascii').decode(bytes);
  assert.ok(text.startsWith('%PDF-1.4\n'));
  assert.ok(text.includes('/Type /Catalog'));
  assert.ok(text.includes('xref\n'));
  assert.ok(text.trimEnd().endsWith('%%EOF'));
  assert.ok(text.includes('CALL FOR APPLICATIONS - SCIENTIFIC WORKSHOP FACILITATORS'));
  assert.ok(text.includes('\\(HYBRID MODE\\)'));
  assert.ok(text.includes('INR 300/compound'));
});
