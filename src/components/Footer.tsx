import React from 'react';
import { NavTab } from './Navbar';
import { Mail, Phone, MapPin, ArrowUp, Code2, ShieldCheck, GraduationCap } from 'lucide-react';
import { sanitizeUrl } from '../utils/security';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
  brandName?: string;
  logoUrl?: string;
  onOpenWpExport?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  brandName = 'Med-Silico Lab',
  logoUrl,
  onOpenWpExport,
}) => {
  const safeLogoUrl = sanitizeUrl(logoUrl || '');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabSelect = (tab: NavTab) => {
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#fafafa] text-slate-900 border-t border-slate-200 font-times">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Column 1: Academic Emblem & Brand Info matching Page 3 of Reference PDF */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-4 font-times">
            <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-2xs inline-flex flex-col items-center text-center max-w-[260px] w-full">
              {safeLogoUrl ? (
                <img src={safeLogoUrl} alt={brandName} className="h-16 w-auto object-contain mb-2" />
              ) : (
                <div className="w-14 h-14 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center mb-2 shadow-xs border-2 border-amber-400">
                  <GraduationCap className="w-7 h-7" />
                </div>
              )}
              <div className="text-base font-bold text-[#1e3a5f] tracking-wide uppercase font-times">
                {brandName}
              </div>
              <div className="text-[11px] text-slate-600 font-times mt-0.5">
                EST. &bull; 2024
              </div>
              <div className="mt-2 px-3 py-0.5 bg-rose-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-xs font-times">
                Your Research Companion
              </div>
            </div>

            {/* Social / Quick Contact Icons under Emblem matching Page 3 of PDF */}
            <div className="flex items-center gap-3 pl-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-7 h-7 rounded bg-slate-900 text-white hover:bg-[#1e3a8a] flex items-center justify-center text-xs font-bold transition font-times"
              >
                in
              </a>
              <a
                href="https://wa.me/917827943097"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-7 h-7 rounded-full border border-slate-900 text-slate-900 hover:bg-[#1e3a8a] hover:text-white hover:border-[#1e3a8a] flex items-center justify-center transition"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:contact@medsilicolab.com"
                aria-label="Email"
                className="w-7 h-7 rounded-full border border-slate-900 text-slate-900 hover:bg-[#1e3a8a] hover:text-white hover:border-[#1e3a8a] flex items-center justify-center transition"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="font-times text-slate-700 text-xs sm:text-sm leading-relaxed max-w-md">
              Med-Silico Lab is an academic research consulting platform specializing in Molecular Docking, GPU Molecular Dynamics Simulations (GROMACS), 2D/3D QSAR, In Silico Vaccine Design, and Q1/Q2 SCI Manuscript Publication Guidance.
            </p>

            {onOpenWpExport && (
              <div className="pt-1">
                <button
                  type="button"
                  onClick={onOpenWpExport}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-white border border-slate-300 hover:border-[#1e3a8a] text-slate-800 hover:text-[#1e3a8a] text-xs font-times transition cursor-pointer shadow-2xs"
                >
                  <Code2 className="w-3.5 h-3.5 text-[#1e3a8a] shrink-0" />
                  <span>Export WordPress Theme Files (.zip)</span>
                </button>
              </div>
            )}
          </div>

          {/* Column 2: Quick Links matching Page 3 of Reference PDF */}
          <div className="sm:col-span-1 lg:col-span-3 font-times">
            <h4 className="text-sm font-times font-normal text-slate-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-times">
              <li>
                <button
                  type="button"
                  onClick={() => handleTabSelect('home')}
                  className="text-slate-700 hover:text-[#1e3a8a] transition cursor-pointer font-times"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleTabSelect('about')}
                  className="text-slate-700 hover:text-[#1e3a8a] transition cursor-pointer font-times"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleTabSelect('services')}
                  className="text-slate-700 hover:text-[#1e3a8a] transition cursor-pointer font-times"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleTabSelect('publication-consulting')}
                  className="text-slate-700 hover:text-[#1e3a8a] transition cursor-pointer font-times"
                >
                  Publication Consulting
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleTabSelect('upcoming-workshops')}
                  className="text-slate-700 hover:text-[#1e3a8a] transition cursor-pointer font-times"
                >
                  Upcoming Workshops
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleTabSelect('recent-workshops')}
                  className="text-slate-700 hover:text-[#1e3a8a] transition cursor-pointer font-times"
                >
                  Recent Workshops
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleTabSelect('resources')}
                  className="text-slate-700 hover:text-[#1e3a8a] transition cursor-pointer font-times"
                >
                  Resources
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleTabSelect('testimonials')}
                  className="text-slate-700 hover:text-[#1e3a8a] transition cursor-pointer font-times"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleTabSelect('contact')}
                  className="text-slate-700 hover:text-[#1e3a8a] transition cursor-pointer font-times"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Registered Office & Contact */}
          <div className="sm:col-span-1 lg:col-span-4 font-times">
            <h4 className="text-sm font-times font-normal text-slate-900 mb-4">
              Registered Office
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 font-times">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1e3a8a] shrink-0 mt-0.5" />
                <span className="font-times text-slate-700 leading-relaxed">
                  Med-Silico Lab, 261, Roppa, Pavagada-561202, Tumkur, Karnataka, India.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1e3a8a] shrink-0" />
                <a href="tel:+917827943097" className="font-times text-slate-700 hover:text-[#1e3a8a] transition underline">+91 7827943097</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1e3a8a] shrink-0" />
                <span className="font-times text-slate-700">contact@medsilicolab.com</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 font-times">
              <button
                type="button"
                onClick={scrollToTop}
                className="flex items-center gap-1.5 text-xs sm:text-sm text-[#1e3a8a] hover:text-[#1e40af] transition cursor-pointer font-times"
              >
                <ArrowUp className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Centered Copyright & Security Compliance Line matching Page 3 of PDF */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-200/80 text-xs text-slate-600 flex flex-col items-center justify-center gap-2 font-times text-center">
          <div className="font-times text-slate-700">
            &copy; 2026 Copyright {brandName}. Your Research Companion.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 font-times text-[11px] sm:text-xs text-slate-500">
            <span className="inline-flex items-center gap-1 text-[#1e3a8a] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1e3a8a] shrink-0" />
              <span>OWASP &amp; JWT Secured</span>
            </span>
            <span>&middot;</span>
            <span>Research Confidentiality (NDA)</span>
            <span>&middot;</span>
            <span>Academic Integrity Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
