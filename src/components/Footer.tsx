import React from 'react';
import { NavTab } from './Navbar';
import { Mail, Phone, MapPin, ArrowUp, Code2, ShieldCheck, GraduationCap, Youtube } from 'lucide-react';
import { sanitizeUrl } from '../utils/security';
import defaultLogo from '../assets/images/medsilico_logo.png';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
  brandName?: string;
  logoUrl?: string;
  onOpenWpExport?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  brandName = 'Medsilico Lab',
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
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs inline-flex flex-col items-center text-center max-w-[300px] w-full">
              <img
                src={safeLogoUrl || defaultLogo}
                alt={brandName}
                className="h-28 sm:h-32 w-auto object-contain mb-3 drop-shadow-xs transition-transform duration-200 hover:scale-105"
              />
              <div className="text-base font-bold text-[#1e3a5f] tracking-wide uppercase font-times">
                {brandName}
              </div>
              <div className="text-[11px] text-slate-600 font-times mt-0.5">
                EST. 2026 &bull; Computational Drug Discovery &bull; Pharmaceutical Research &bull; Scientific Education
              </div>
            </div>

            {/* Social / Quick Contact Icons under Emblem */}
            <div className="flex items-center gap-2.5 pl-1">
              <a
                href="https://youtube.com/@medsilico?si=Tup8-4mNuXcJJ9eA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                title="Watch on YouTube (@medsilico)"
                className="w-8 h-8 rounded-full bg-[#FF0000] hover:bg-[#D90000] text-white flex items-center justify-center transition shadow-2xs hover:scale-105 cursor-pointer"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://wa.me/918310468262"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
                className="w-8 h-8 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center transition shadow-2xs hover:scale-105 cursor-pointer"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
              <a
                href="mailto:contact@medsilicolab.com"
                aria-label="Email"
                title="Email Us"
                className="w-8 h-8 rounded-full bg-[#0f172a] hover:bg-[#1e3a8a] text-white flex items-center justify-center transition shadow-2xs hover:scale-105 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <p className="font-times text-slate-700 text-xs sm:text-sm leading-relaxed max-w-md">
              Medsilico Lab is an academic research consulting platform specializing in Molecular Docking, GPU Molecular Dynamics Simulations (GROMACS), 2D/3D QSAR, In Silico Vaccine Design, and Q1/Q2 SCI Manuscript Publication Guidance.
            </p>
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
                  onClick={() => handleTabSelect('recent-workshops')}
                  className="text-slate-700 hover:text-[#1e3a8a] transition cursor-pointer font-times"
                >
                  Workshops
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
                  onClick={() => handleTabSelect('contact')}
                  className="text-slate-700 hover:text-[#1e3a8a] transition cursor-pointer font-times"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Registered Offices & Contact */}
          <div className="sm:col-span-1 lg:col-span-4 font-times">
            <h4 className="text-sm font-times font-normal text-slate-900 mb-4">
              Registered Offices &amp; Contact
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 font-times">
              {/* 1. Head Office */}
              <div className="space-y-1.5">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#1e3a8a] shrink-0 mt-0.5" />
                  <div className="font-times text-slate-700 leading-relaxed text-xs">
                    <span className="font-bold text-[#1e3a8a] block text-[11px] uppercase tracking-wider">Head Office:</span>
                    Pahalamanpur-10, Ghodaghodi Municipality, Kailali, Nepal.
                  </div>
                </div>
                <div className="flex items-center gap-2.5 pl-0.5">
                  <Mail className="w-4 h-4 text-[#1e3a8a] shrink-0" />
                  <a href="mailto:contact@medsilicolab.com" className="font-times text-xs text-slate-700 hover:text-[#1e3a8a] transition">
                    contact@medsilicolab.com
                  </a>
                </div>
              </div>

              {/* 2. Contact Office (India) */}
              <div className="space-y-1.5 pt-2 border-t border-slate-200/60">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#1e3a8a] shrink-0 mt-0.5" />
                  <div className="font-times text-slate-700 leading-relaxed text-xs">
                    <span className="font-bold text-[#1e3a8a] block text-[11px] uppercase tracking-wider">Contact Office (India):</span>
                    Veerabhadreshwara Nagar Main Rd, Herohalli, Sunkadakatte, Bengaluru, Karnataka 560091, India.
                  </div>
                </div>
                <div className="flex items-center gap-2.5 pl-0.5">
                  <Mail className="w-4 h-4 text-[#1e3a8a] shrink-0" />
                  <a href="mailto:contact@medsilicolab.com" className="font-times text-xs text-slate-700 hover:text-[#1e3a8a] transition">
                    contact@medsilicolab.com
                  </a>
                </div>
              </div>

              {/* 3. Contact Office (US) */}
              <div className="space-y-1.5 pt-2 border-t border-slate-200/60">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#1e3a8a] shrink-0 mt-0.5" />
                  <div className="font-times text-slate-700 leading-relaxed text-xs">
                    <span className="font-bold text-[#1e3a8a] block text-[11px] uppercase tracking-wider">Contact Office (US):</span>
                    Los Angeles, California, US.
                  </div>
                </div>
                <div className="flex items-center gap-2.5 pl-0.5">
                  <Mail className="w-4 h-4 text-[#1e3a8a] shrink-0" />
                  <a href="mailto:contact@medsilicolab.com" className="font-times text-xs text-slate-700 hover:text-[#1e3a8a] transition">
                    contact@medsilicolab.com
                  </a>
                </div>
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
