# Med-Silico Lab | Computational Drug Discovery & Academic Publishing Platform

Med-Silico Lab is an academic research consulting and in silico computational biology platform specializing in Molecular Docking, GPU-accelerated Molecular Dynamics (GROMACS), 2D/3D QSAR, In Silico Vaccine Design, ADMET/Toxicity modeling, and SCI/Scopus Q1/Q2 Manuscript Publication Guidance.

## Key Features

- **Responsive Multi-Device Architecture**: Optimized alignment and layout across Mobile (`320px–639px`), Tablet (`640px–1023px`), Laptop (`1024px–1440px`), and Widescreen Desktop (`1440px+`).
- **OWASP & JWT Security Bootstrap**:
  - Client-side OWASP A03 XSS & injection sanitization (`sanitizeText`, `escapeHtml`, `sanitizeEmail`, `sanitizePhone`, `sanitizeUrl`).
  - Cryptographic CSRF session tokens (`getCsrfToken`, `validateCsrfToken`) and HS256-structured JWT session/request signing (`createSecurityJwt`, `verifySecurityJwt`).
  - Sliding-window rate limiting (`checkRateLimit`) protecting all interactive forms.
  - Hardened HTTP security headers in Vite (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`, `Strict-Transport-Security`).
- **Bun & Node.js Ready**: Pre-configured with `bunfig.toml`, `bun.lock`, and standard `package.json` scripts.

## Getting Started

### Option 1: Using Bun (Recommended)

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Run unit & security tests
bun run test:bun

# Build for production
bun run build
```

### Option 2: Using Node.js & npm

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run unit & security tests
npm test

# Build for production
npm run build
```
