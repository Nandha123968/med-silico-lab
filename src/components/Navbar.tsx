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
    { id: 'contact', label: 'Contact & Openings', shortLabel: 'Contact' },
  ];

  const handleLinkClick = (id: NavTab) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white/98 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-40 shadow-xs w-full font-times">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-6 h-20 sm:h-22 lg:h-24">

          {/* Zone 1: Brand title & academic shield insignia */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a8a] rounded-lg p-1 cursor-pointer shrink-0 z-10"
            aria-label="Med-Silico Lab Home"
          >
            <img
              src={safeLogoUrl || defaultLogo}
              alt={brandName}
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain shrink-0 drop-shadow-sm transition-transform duration-200 hover:scale-105"
            />
            <div className="shrink-0 min-w-0">
              <div className="text-base sm:text-lg xl:text-xl font-bold tracking-tight text-slate-900 hover:text-[#1e3a8a] transition font-times leading-tight whitespace-nowrap">
                {brandName}
              </div>
              <div className="text-[10px] sm:text-[11px] xl:text-xs font-times italic tracking-tight text-[#1e3a8a] font-medium block leading-tight mt-0.5 whitespace-nowrap">
                Bridging Medicinal Chemistry &amp; Computational Science
              </div>
            </div>
          </button>

          {/* Zone 2: Navigation Links - Enlarged & Crisp Font for Desktop & Laptops */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center justify-center gap-1 xl:gap-2.5 2xl:gap-3.5 text-[14px] xl:text-[15.5px] 2xl:text-[16.5px] text-slate-800 font-times px-2 shrink-0"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 px-2 xl:px-2.5 py-1.5 border-b-[2.5px] cursor-pointer font-times ${activeTab === link.id
                  ? 'border-[#1e3a8a] text-[#1e3a8a] font-bold'
                  : 'border-transparent text-slate-700 hover:text-[#1e3a8a] hover:border-blue-300 font-medium'
                  }`}
              >
                <span>{link.shortLabel || link.label}</span>
              </button>
            ))}
          </nav>

          {/* Zone 3: Consultation Quote Action & Mobile/Tablet Menu Toggle */}
          <div className="flex items-center gap-2 shrink-0 z-10">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 xl:px-4 py-2 text-xs xl:text-sm font-bold text-white bg-[#1e3a8a] hover:bg-[#1e40af] rounded-md shadow-xs transition cursor-pointer whitespace-nowrap shrink-0 font-times"
            >
              <span className="hidden xl:inline">Consultation Quote</span>
              <span className="xl:hidden">Get Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile & Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-800 hover:text-[#1e3a8a] hover:bg-blue-50 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a8a] cursor-pointer"
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
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 pt-3 pb-6 shadow-xl font-times">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 sm:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition cursor-pointer flex items-center justify-between font-times ${activeTab === link.id
                  ? 'bg-[#1e3a8a] text-white shadow-xs'
                  : 'text-slate-800 hover:bg-blue-50 hover:text-[#1e3a8a] border border-transparent'
                  }`}
              >
                <span>{link.label}</span>
                {activeTab === link.id && (
                  <span className="w-2 h-2 rounded-full bg-white shrink-0" />
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
              className="w-full py-3 sm:py-3.5 text-center text-sm sm:text-base font-bold text-white bg-[#1e3a8a] hover:bg-[#1e40af] rounded-lg shadow-xs cursor-pointer flex items-center justify-center gap-1.5 font-times"
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
