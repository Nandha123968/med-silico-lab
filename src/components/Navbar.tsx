import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { sanitizeUrl } from '../utils/security';
import defaultLogo from '../assets/images/medsilico_logo.png';

export type NavTab =
  | 'home'
  | 'about'
  | 'services'
  | 'publication-consulting'
  | 'recent-workshops'
  | 'upcoming-workshops'
  | 'resources'
  | 'testimonials'
  | 'contact';

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  brandName?: string;
  logoUrl?: string;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  brandName = 'Med-Silico Lab',
  logoUrl,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const safeLogoUrl = sanitizeUrl(logoUrl || '');

  const navLinks: { id: NavTab; label: string; shortLabel?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us', shortLabel: 'About' },
    { id: 'services', label: 'Our Services', shortLabel: 'Services' },
    { id: 'publication-consulting', label: 'Publication Consulting', shortLabel: 'Publication' },
    { id: 'upcoming-workshops', label: 'Upcoming Workshops', shortLabel: 'Upcoming' },
    { id: 'recent-workshops', label: 'Recent Workshops', shortLabel: 'Recent' },
    { id: 'resources', label: 'Resources' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact & Openings', shortLabel: 'Contact' },
  ];

  const handleLinkClick = (id: NavTab) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white/98 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-40 shadow-xs w-full font-times">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 h-22 sm:h-26 lg:h-28">

          {/* Zone 1: Brand title & academic shield insignia */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 sm:gap-3.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a8a] rounded-lg p-1 cursor-pointer shrink-0"
            aria-label="Med-Silico Lab Home"
          >
            <img
              src={safeLogoUrl || defaultLogo}
              alt={brandName}
              className="h-14 sm:h-18 lg:h-[76px] w-auto object-contain shrink-0 drop-shadow-sm transition-transform duration-200 hover:scale-105"
            />
            <div className="min-w-0">
              <div className="text-lg sm:text-xl xl:text-2xl font-bold tracking-tight text-slate-900 hover:text-[#1e3a8a] transition font-times leading-tight truncate">
                {brandName}
              </div>
              <div className="text-[11px] sm:text-xs xl:text-[13px] font-times italic tracking-tight text-[#1e3a8a] font-medium block leading-tight mt-0.5 truncate max-w-[210px] xl:max-w-none">
                Bridging Medicinal Chemistry &amp; Computational Science
              </div>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center justify-center flex-1 min-w-0 gap-0.5 xl:gap-1.5 2xl:gap-3 text-xs xl:text-[13px] 2xl:text-[14.5px] text-slate-800 font-times px-1"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 px-1.5 xl:px-2 py-1.5 border-b-2 cursor-pointer font-times ${activeTab === link.id
                  ? 'border-[#1e3a8a] text-[#1e3a8a] font-bold'
                  : 'border-transparent hover:text-[#1e3a8a] hover:border-blue-200'
                  }`}
              >
                <span className="hidden 2xl:inline">{link.label}</span>
                <span className="2xl:hidden">{link.shortLabel || link.label}</span>
              </button>
            ))}
          </nav>

          {/* Zone 3: Consultation Quote Action & Mobile/Tablet Menu Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold text-white bg-[#1e3a8a] hover:bg-[#1e40af] rounded-md shadow-xs transition cursor-pointer whitespace-nowrap shrink-0 font-times"
            >
              <span className="hidden xl:inline">Consultation Quote</span>
              <span className="xl:hidden">Get Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile & Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-[#1e3a8a] hover:bg-blue-50 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a8a] cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Responsive Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 sm:px-6 pt-3 pb-6 shadow-lg font-times">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition cursor-pointer flex items-center justify-between font-times ${activeTab === link.id
                  ? 'bg-[#dbeafe] text-[#1e3a8a] font-bold border border-blue-200'
                  : 'text-slate-700 hover:bg-slate-50 border border-transparent'
                  }`}
              >
                <span>{link.label}</span>
                {activeTab === link.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] shrink-0" />
                )}
              </button>
            ))}
          </div>
          <div className="pt-4 mt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-[#1e3a8a] hover:bg-[#1e40af] rounded-lg shadow-xs cursor-pointer flex items-center justify-center gap-1.5 font-times"
            >
              <span>Get Consultation Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
