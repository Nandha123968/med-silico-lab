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
              <div className="mt-2 px-3 py-1 bg-[#1e3a8a] text-white text-[10px] font-bold uppercase tracking-wider rounded-xs font-times">
                Transforming Pharmaceutical Research Through Computational Innovation
              </div>
            </div>

            {/* Social / Quick Contact Icons under Emblem matching Page 3 of PDF */}
            <div className="flex items-center gap-3 pl-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-7 h-7 rounded bg-slate-900 text-white hover:bg-[#1e3a8a] flex items-center justify-center text-xs font-bold transition font-times"
              >
                in
              </a>
              <a
                href="https://www.youtube.com/watch?v=TQJgJB1-6ms&t=9s"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                title="Watch on YouTube"
                className="w-7 h-7 rounded-full bg-[#FF0000] text-white hover:bg-red-700 flex items-center justify-center transition shadow-2xs cursor-pointer"
              >
                <Youtube className="w-3.5 h-3.5 fill-current" />
              </a>
              <a
                href="https://wa.me/917827943097"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="Chat on WhatsApp (+91 7827943097)"
                className="w-7 h-7 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] flex items-center justify-center transition shadow-2xs cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:contact@medsilicolab.com"
                aria-label="Email"
                title="Email Us"
                className="w-7 h-7 rounded-full border border-slate-900 text-slate-900 hover:bg-[#1e3a8a] hover:text-white hover:border-[#1e3a8a] flex items-center justify-center transition"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="font-times text-slate-700 text-xs sm:text-sm leading-relaxed max-w-md">
              Med-Silico Lab is an academic research consulting platform specializing in Molecular Docking, GPU Molecular Dynamics Simulations (GROMACS), 2D/3D QSAR, In Silico Vaccine Design, and Q1/Q2 SCI Manuscript Publication Guidance.
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
