/**
 * Pure TypeScript PDF 1.4 Document Generator for Med-Silico Lab
 * Generates valid, printable A4 PDF files with institutional Navy header,
 * Times-Roman / Times-Bold typography, automatic word wrapping, and exact xref table.
 */

export interface PdfDocumentSection {
  heading?: string;
  lines: string[];
}

export interface PdfDocumentOptions {
  title: string;
  subtitle: string;
  referenceNo?: string;
  sections: PdfDocumentSection[];
  footerNote?: string;
}

function escapePdfString(input: string): string {
  // Replace non-ASCII characters (like ₹, •, –) with safe ASCII equivalents for Type1 standard fonts
  return input
    .replace(/₹/g, 'INR ')
    .replace(/[–—]/g, '-')
    .replace(/[•·]/g, '*')
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/²/g, '2')
    .replace(/[^\x20-\x7E]/g, '')
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');
}

function wrapText(text: string, maxChars: number = 82): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    if (!current) {
      current = word;
    } else if ((current + ' ' + word).length <= maxChars) {
      current += ' ' + word;
    } else {
      lines.push(current);
      current = word;
    }
  }
  if (current) {
    lines.push(current);
  }
  return lines.length > 0 ? lines : [''];
}

export function generatePdfBytes(options: PdfDocumentOptions): Uint8Array {
  const streamOps: string[] = [];

  // 1. Top Navy Institutional Header Banner (A4: 595 x 842 pt)
  streamOps.push('0.118 0.227 0.541 rg');
  streamOps.push('40 748 515 60 re f');

  // Header Organization Title
  streamOps.push('BT 1 1 1 rg /F2 15 Tf 54 784 Td (MEDSILICO LAB  |  THE SCIENTIFIC CIRCLE) Tj ET');
  streamOps.push(
    `BT 0.85 0.92 1 rg /F1 10 Tf 54 764 Td (${escapePdfString(options.subtitle)}) Tj ET`
  );

  let y = 720;

  // Document Title
  const wrappedTitle = wrapText(options.title, 62);
  for (const tLine of wrappedTitle) {
    streamOps.push(
      `BT 0.118 0.227 0.541 rg /F2 13 Tf 45 ${y} Td (${escapePdfString(tLine)}) Tj ET`
    );
    y -= 18;
  }

  if (options.referenceNo) {
    streamOps.push(
      `BT 0.35 0.4 0.5 rg /F1 9.5 Tf 45 ${y} Td (${escapePdfString(options.referenceNo)}) Tj ET`
    );
    y -= 14;
  }

  // Divider line
  streamOps.push('0.75 0.82 0.92 RG 0.8 w');
  streamOps.push(`45 ${y} m 550 ${y} l S`);
  y -= 20;

  // Render Sections
  for (const section of options.sections) {
    if (y < 85) break;

    if (section.heading) {
      streamOps.push(
        `BT 0.118 0.227 0.541 rg /F2 11 Tf 45 ${y} Td (${escapePdfString(section.heading)}) Tj ET`
      );
      y -= 16;
    }

    for (const rawLine of section.lines) {
      const wrapped = wrapText(rawLine, 84);
      for (const wLine of wrapped) {
        if (y < 75) break;
        streamOps.push(
          `BT 0.12 0.16 0.23 rg /F1 10 Tf 48 ${y} Td (${escapePdfString(wLine)}) Tj ET`
        );
        y -= 14;
      }
    }

    y -= 8;
  }

  // Bottom Footer Divider & Contact Info
  streamOps.push('0.75 0.82 0.92 RG 0.8 w');
  streamOps.push('45 58 m 550 58 l S');

  const footerText =
    options.footerNote ||
    'Official Document  |  Medsilico Lab  |  contact@medsilicolab.com';
  streamOps.push(
    `BT 0.35 0.4 0.5 rg /F1 8.5 Tf 45 42 Td (${escapePdfString(footerText)}) Tj ET`
  );

  const contentStream = streamOps.join('\n');

  const objects: string[] = [
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>\nendobj\n',
    '4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman >>\nendobj\n',
    '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Times-Bold >>\nendobj\n',
    `6 0 obj\n<< /Length ${contentStream.length} >>\nstream\n${contentStream}\nendstream\nendobj\n`,
  ];

  let pdf = '%PDF-1.4\n';
  const offsets: number[] = [0];

  for (const obj of objects) {
    offsets.push(pdf.length);
    pdf += obj;
  }

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += '0000000000 65535 f \n';
  for (let i = 1; i <= objects.length; i++) {
    pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return new TextEncoder().encode(pdf);
}

export function downloadPdfDocument(filename: string, options: PdfDocumentOptions): void {
  const bytes = generatePdfBytes(options);
  const blob = new Blob([bytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename.endsWith('.pdf') ? filename : `${filename}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

