import React, { useState } from 'react';
import { 
  Atom, Activity, ShieldAlert, Cpu, LineChart, Boxes, Layers, Dna, Network, 
  FileText, Award, CheckCircle, Search, ArrowRight, Calculator, Check, Sparkles 
} from 'lucide-react';
import { ORDERED_SERVICES, ServiceItem } from '../data/servicesData';
import { ConsultationEstimator } from './ConsultationEstimator';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultationModal: (serviceId?: string) => void;
  onOpenWpExport?: () => void;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Atom,
  Activity,
  ShieldAlert,
  Cpu,
  LineChart,
  Boxes,
  Layers,
  Dna,
  Network,
  FileText,
  Award,
  CheckCircle,
  Search,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenConsultationModal,
  onOpenWpExport,
}) => {
  const [filter, setFilter] = useState<'all' | 'in-silico' | 'academic-publishing'>('all');
  const [showEstimator, setShowEstimator] = useState(false);

  const filteredServices = ORDERED_SERVICES.filter((svc) => {
    if (filter === 'all') return true;
    return svc.category === filter;
  });

  return (
    <section id="services" className="font-times">
      {/* Top Lavender Services Block matching Page 2 of Reference PDF */}
      <div className="py-12 sm:py-16 lg:py-20 bg-[#dbeafe] border-b border-blue-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Section Header matching PDF */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight font-times">
              Services
            </h2>
            <p className="font-times italic text-slate-600 mt-2.5 text-sm sm:text-base leading-relaxed">
              Explore our extensive range of computational research programs and publication consulting designed to enhance your scientific capabilities:
            </p>

            {/* Centered Royal Purple Action Buttons */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setFilter('all')}
                className="px-6 py-2 bg-[#1e3a8a] hover:bg-[#1e40af] text-white text-sm font-times rounded-md shadow-xs transition cursor-pointer"
              >
                View all ({ORDERED_SERVICES.length})
              </button>

              <button
                onClick={() => setShowEstimator(!showEstimator)}
                className={`inline-flex items-center justify-center gap-2 px-5 py-2 rounded-md text-sm font-times transition cursor-pointer ${
                  showEstimator
                    ? 'bg-[#1e40af] text-white shadow-xs'
                    : 'bg-white border border-blue-300 text-[#1e3a8a] hover:bg-blue-50'
                }`}
              >
                <Calculator className="w-4 h-4 text-[#1e3a8a] shrink-0" />
                <span>{showEstimator ? 'Hide Cost Estimator' : 'Instant Fee Estimator'}</span>
              </button>
            </div>
          </div>

          {/* Cost & Feasibility Estimator Drawer */}
          {showEstimator && (
            <div className="mb-12 sm:mb-14">
              <ConsultationEstimator
                onBookConsultation={(serviceIds) => {
                  onOpenConsultationModal(serviceIds[0]);
                }}
              />
            </div>
          )}

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10 pb-4 border-b border-blue-200/80">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-times rounded-md transition cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#1e3a8a] text-white font-bold shadow-2xs'
                  : 'bg-white text-slate-700 hover:text-[#1e3a8a] border border-blue-200'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setFilter('in-silico')}
              className={`px-4 py-2 text-xs sm:text-sm font-times rounded-md transition cursor-pointer ${
                filter === 'in-silico'
                  ? 'bg-[#1e3a8a] text-white font-bold shadow-2xs'
                  : 'bg-white text-slate-700 hover:text-[#1e3a8a] border border-blue-200'
              }`}
            >
              In Silico Drug Discovery &amp; Modeling
            </button>
            <button
              onClick={() => setFilter('academic-publishing')}
              className={`px-4 py-2 text-xs sm:text-sm font-times rounded-md transition cursor-pointer ${
                filter === 'academic-publishing'
                  ? 'bg-[#1e3a8a] text-white font-bold shadow-2xs'
                  : 'bg-white text-slate-700 hover:text-[#1e3a8a] border border-blue-200'
              }`}
            >
              Academic &amp; Publication Guidance
            </button>
          </div>

          {/* Services Grid (Responsive 1-col Mobile, 2-col Tablet, 3-col Laptop/Desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredServices.map((svc) => {
              const IconComponent = ICON_MAP[svc.iconName] || Atom;
              const isPublishing = svc.category === 'academic-publishing';

              return (
                <div
                  key={svc.id}
                  className="bg-white rounded-2xl border border-blue-100 hover:border-[#1e3a8a]/50 transition-all duration-200 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between p-5 sm:p-6 h-full font-times"
                >
                  <div>
                    {/* Category subtitle & Icon badge */}
                    <div className="flex items-start justify-between gap-3 mb-3.5">
                      <div className="flex items-start gap-3 min-w-0">
                        <div className="p-2.5 rounded-lg shrink-0 bg-blue-100 text-[#1e3a8a]">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs text-slate-500 font-times">
                            {isPublishing ? 'Academic & Publication Consulting' : 'Computational Biology & Chemistry'}
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug font-times mt-0.5">
                            {svc.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="font-times italic text-xs text-[#1e3a8a] mb-2 line-clamp-1">
                      {svc.tagline}
                    </p>

                    {/* Description in Times New Roman */}
                    <p className="font-times text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 line-clamp-3">
                      {svc.description}
                    </p>

                    {/* Key Metrics / Deliverable */}
                    <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs font-times">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-slate-500 shrink-0">Primary Tool:</span>
                        <span className="font-bold text-slate-800 truncate text-right">{svc.toolsUsed[0]}</span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-slate-500 shrink-0">Key Output:</span>
                        <span className="font-semibold text-[#1e3a8a] truncate max-w-[180px] text-right">
                          {svc.deliverables[0]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2 font-times">
                    <button
                      onClick={() => onSelectService(svc)}
                      className="text-xs sm:text-sm font-semibold text-[#1e3a8a] hover:text-[#1e40af] transition flex items-center gap-1 cursor-pointer font-times"
                    >
                      <span>Inspect Protocol</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenConsultationModal(svc.id)}
                      className="text-xs font-semibold px-3.5 py-1.5 rounded-md bg-[#1e3a8a] hover:bg-[#1e40af] text-white transition cursor-pointer font-times"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Software Mastery & Experimental Scope */}
          <div className="mt-14 sm:mt-16 pt-10 sm:pt-12 border-t border-blue-200/80">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-times">
                Comprehensive Software &amp; Experimental Scope
              </h3>
              <p className="font-times italic text-xs sm:text-sm text-slate-600 mt-1.5">
                Beyond core in silico modeling, our research fellows assist in specialized software execution, spectroscopy, and scientific illustration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 font-times">
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-blue-100 shadow-2xs h-full">
                <h4 className="text-sm font-bold text-[#1e3a8a] uppercase tracking-wider mb-3 font-times">
                  Software Mastery
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li>1. Quantum Espresso &amp; DFT Gaussian</li>
                  <li>2. ORCA, Avogadro, VESTA</li>
                  <li>3. GROMACS, NAMD, Desmond, LAMMPS</li>
                  <li>4. Discovery Studio &amp; PyMOL Render</li>
                  <li>5. ChemDraw, MestReNova, TopSpin</li>
                  <li>6. FullProf, GSAS-II, JANA, OriginPro</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-blue-100 shadow-2xs h-full">
                <h4 className="text-sm font-bold text-[#1e3a8a] uppercase tracking-wider mb-3 font-times">
                  Computational Biology &amp; Chemistry
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li>1. Molecular Docking &amp; Virtual Screening</li>
                  <li>2. Molecular Dynamics Simulations (50-500ns)</li>
                  <li>3. Homology Modeling &amp; AlphaFold Analysis</li>
                  <li>4. In Silico ADMET &amp; Toxicity Risk Assessment</li>
                  <li>5. 2D &amp; 3D QSAR (CoMFA / CoMSIA)</li>
                  <li>6. In Silico Subunit Vaccine Design</li>
                </ul>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-blue-100 shadow-2xs sm:col-span-2 lg:col-span-1 h-full">
                <h4 className="text-sm font-bold text-[#1e3a8a] uppercase tracking-wider mb-3 font-times">
                  Academic &amp; Experimental Guidance
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li>1. Manuscript Technical Preparation for SCI Journals</li>
                  <li>2. Publication Guidance &amp; Reviewer Rebuttal Letters</li>
                  <li>3. Certified Plagiarism Checking (iThenticate/Turnitin)</li>
                  <li>4. Strategic SCI / Scopus Journal Selection</li>
                  <li>5. High-Resolution Graphical Abstract Design</li>
                  <li>6. 1D &amp; 2D NMR, HRMS, LC-MS, XRD Analysis</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom White Prime Membership Section matching Page 2 of Reference PDF */}
      <div className="py-14 sm:py-20 bg-white border-b border-slate-200 font-times">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <div className="text-xs sm:text-sm text-slate-700 font-times">Memberships</div>
            <h3 className="text-3xl sm:text-4xl font-normal text-slate-900 mt-1 font-times">Prime Membership</h3>
            <p className="font-times text-slate-700 text-xs sm:text-sm mt-2">
              Unlock Unlimited Learning &amp; Research Opportunities in 2026 with our Prime Membership!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto items-stretch font-times">
            {/* Left Card: Indian Participants (Navy Blue Card) */}
            <div className="bg-gradient-to-b from-[#1e3a8a] to-[#1e40af] text-white rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white text-[#1e3a8a] flex items-center justify-center shadow-xs shrink-0">
                    <Sparkles className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-100 font-times">Indian Participants</div>
                    <div className="text-xl sm:text-2xl font-bold text-white font-times leading-tight">Prime</div>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-blue-100 mb-1 font-times">70 % Off !!!</div>
                <div className="text-2xl sm:text-3xl text-blue-200/90 line-through font-times">&#8377;75,000</div>
                <div className="text-3xl sm:text-4xl font-normal text-white font-times mt-0.5 mb-5">
                  &#8377;15,900 <span className="text-xs text-blue-100 font-normal">(incl. GST)</span>
                </div>

                <div className="text-xs sm:text-sm font-semibold text-white mb-3 font-times">Includes</div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-white font-times">
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>Access all workshops for 2026</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>Flexible learning schedule</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>On-demand access to recorded sessions</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>Comprehensive study materials</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>E-certificates for every workshop</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>Learn from industry experts</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>24/7 Expert support</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onOpenConsultationModal('membership-inr')}
                className="mt-7 w-full py-2.5 text-center text-xs sm:text-sm font-normal text-white bg-[#1e3a8a] hover:bg-[#1e40af] rounded-md transition cursor-pointer font-times shadow-xs"
              >
                Get Started
              </button>
            </div>

            {/* Right Card: International Participants (Clean White/Light Card matching Page 2 of PDF) */}
            <div className="bg-[#fcfbfd] text-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 text-[#1e3a8a] flex items-center justify-center shadow-2xs shrink-0">
                    <Sparkles className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-times">International Participants</div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 font-times leading-tight">Prime</div>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-slate-600 mb-1 font-times">70 % Off !!!</div>
                <div className="text-2xl sm:text-3xl text-slate-700 line-through font-times">$3000</div>
                <div className="text-3xl sm:text-4xl font-normal text-slate-900 font-times mt-0.5 mb-5">
                  $315 <span className="text-xs text-slate-500 font-normal">(incl. taxes)</span>
                </div>

                <div className="text-xs sm:text-sm font-semibold text-slate-800 mb-3 font-times">Includes</div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-times">
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>Access all workshops for 2026</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>Flexible learning schedule</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>On-demand access to recorded sessions</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>Comprehensive study materials</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>E-certificates for every workshop</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>Learn from industry experts</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>24/7 Expert support</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onOpenConsultationModal('membership-usd')}
                className="mt-7 w-full py-2.5 text-center text-xs sm:text-sm font-normal text-white bg-[#1e3a8a] hover:bg-[#1e40af] rounded-md transition cursor-pointer font-times shadow-xs"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
