/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { AboutSection } from './components/AboutSection';
import { WorkshopsSection } from './components/WorkshopsSection';
import { ResourcesSection } from './components/ResourcesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { WordPressExportModal } from './components/WordPressExportModal';
import { AcademicPublicationPage } from './components/AcademicPublicationPage';
import { Footer } from './components/Footer';
import { ServiceItem, TESTIMONIALS_DATA } from './data/servicesData';
import { DEFAULT_WP_CONFIG, WordPressThemeConfig } from './utils/wpThemeGenerator';
import { sanitizeUrl } from './utils/security';
import { ArrowRight, Star, Archive, Disc, Calendar, CheckCircle2, BarChart3, Puzzle, User } from 'lucide-react';
import labImg from './assets/images/computational_lab_workstation_1793813247708.jpg';
import medsilicoLogo from './assets/images/medsilico_logo.png';
import shankarThapaImg from './assets/images/team/shankar_thapa.jpg';
import sadikShaikImg from './assets/images/team/sadik_shaik.jpg';
import mahalakshmiBiradarImg from './assets/images/team/mahalakshmi_biradar.jpg';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isWpModalOpen, setIsWpModalOpen] = useState(false);
  const [wpConfig, setWpConfig] = useState<WordPressThemeConfig>(DEFAULT_WP_CONFIG);
  const [customLogoUrl, setCustomLogoUrl] = useState<string>(medsilicoLogo);
  const [consultationServiceId, setConsultationServiceId] = useState<string>('molecular-docking');

  const handleOpenConsultation = (serviceId?: string) => {
    if (serviceId) {
      setConsultationServiceId(serviceId);
    }
    setActiveTab('contact');
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };

  const handleSafeLogoChange = (url: string) => {
    setCustomLogoUrl(sanitizeUrl(url));
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-slate-900 selection:bg-[#1e3a8a] selection:text-white overflow-x-hidden font-times">
      {/* 1. Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        brandName="Med-Silico Lab"
        logoUrl={customLogoUrl}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* 2. Main Content Views */}
      <main className="flex-1 w-full">
        {/* VIEW: HOME */}
        {activeTab === 'home' && (
          <div>
            <Hero
              onExploreServices={() => setActiveTab('services')}
              onOpenConsultation={() => handleOpenConsultation()}
              onViewWorkshops={() => setActiveTab('upcoming-workshops')}
            />

            {/* About Us, Why Us & Team Members Section (Matching Page 1 & 2 of Reference PDF) */}
            <section className="py-12 sm:py-16 bg-white border-b border-slate-100 font-times">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2 font-times">
                      About Med-Silico Lab
                    </h2>
                    <p className="font-times italic text-[#1e3a8a] text-base sm:text-lg mb-4 font-medium">
                      &ldquo;Transforming Pharmaceutical Research Through Computational Innovation.&rdquo;
                    </p>
                    <p className="font-times text-slate-800 text-sm sm:text-[15.5px] leading-relaxed mb-6">
                      Med-Silico Lab is a scientific and educational platform dedicated to advancing pharmaceutical research through computational approaches, medicinal chemistry, and modern drug discovery technologies. We aim to bridge the gap between conventional pharmaceutical sciences and emerging computational technologies by providing practical research guidance, scientific training, and computational drug discovery resources to students, research scholars, academicians, and pharmaceutical researchers worldwide.
                    </p>
                    <button
                      onClick={() => {
                        setActiveTab('about');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-2.5 bg-[#1e3a8a] hover:bg-[#1e40af] text-white text-sm font-times rounded-md transition cursor-pointer inline-flex items-center justify-center gap-2 shadow-2xs"
                    >
                      <span>Explore Vision, Mission &amp; Research</span>
                    </button>
                  </div>

                  {/* Quick Highlight Stats Card in Times New Roman */}
                  <div className="lg:col-span-4 grid grid-cols-2 gap-3 sm:gap-4 font-times">
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#faf7fc] border border-[#e5d5ee] text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] font-times">100ns+</div>
                      <div className="text-xs sm:text-sm text-slate-700 font-times mt-1">GROMACS GPU Trajectories</div>
                    </div>
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#faf7fc] border border-[#e5d5ee] text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] font-times">Q1 / Q2</div>
                      <div className="text-xs sm:text-sm text-slate-700 font-times mt-1">SCI / Scopus Mentorship</div>
                    </div>
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#faf7fc] border border-[#e5d5ee] text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] font-times">&lt;10%</div>
                      <div className="text-xs sm:text-sm text-slate-700 font-times mt-1">Turnitin Similarity Audit</div>
                    </div>
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#faf7fc] border border-[#e5d5ee] text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] font-times">600 DPI</div>
                      <div className="text-xs sm:text-sm text-slate-700 font-times mt-1">PyMOL &amp; ChemDraw Figures</div>
                    </div>
                  </div>
                </div>

                {/* Why Us 6 Feature Grid matching Page 1 of Reference PDF */}
                <div className="mt-14 sm:mt-18">
                  <div className="bg-[#f8f9fa] rounded-2xl p-6 sm:p-10 border border-slate-100">
                    <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 mb-8 text-center font-times">
                      Why Us
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 font-times">
                      <div className="p-6 bg-white rounded-lg border border-slate-100 shadow-2xs h-full">
                        <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#1e3a8a] flex items-center justify-center mb-4">
                          <Archive className="w-5 h-5" />
                        </div>
                        <div className="font-normal text-base text-slate-900 mb-2 font-times">Cutting-Edge Resources</div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-times">
                          Stay ahead with access to state-of-the-art tools, techniques, and resources tailored to current scientific advancements.
                        </p>
                      </div>

                      <div className="p-6 bg-white rounded-lg border border-slate-100 shadow-2xs h-full">
                        <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#1e3a8a] flex items-center justify-center mb-4">
                          <Disc className="w-5 h-5" />
                        </div>
                        <div className="font-normal text-base text-slate-900 mb-2 font-times">Session Recordings</div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-times">
                          Access recorded sessions anytime, allowing you to revisit content and reinforce your understanding at your own pace.
                        </p>
                      </div>

                      <div className="p-6 bg-white rounded-lg border border-slate-100 shadow-2xs h-full">
                        <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#1e3a8a] flex items-center justify-center mb-4">
                          <Calendar className="w-5 h-5" />
                        </div>
                        <div className="font-normal text-base text-slate-900 mb-2 font-times">Flexible Scheduling</div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-times">
                          Benefit from flexible timings designed to accommodate your busy schedule, making learning accessible and convenient.
                        </p>
                      </div>

                      <div className="p-6 bg-white rounded-lg border border-slate-100 shadow-2xs h-full">
                        <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#1e3a8a] flex items-center justify-center mb-4">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div className="font-normal text-base text-slate-900 mb-2 font-times">Expert Instructors</div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-times">
                          Learn from subject experts and industry professionals with extensive knowledge and experience in various scientific disciplines.
                        </p>
                      </div>

                      <div className="p-6 bg-white rounded-lg border border-slate-100 shadow-2xs h-full">
                        <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#1e3a8a] flex items-center justify-center mb-4">
                          <BarChart3 className="w-5 h-5" />
                        </div>
                        <div className="font-normal text-base text-slate-900 mb-2 font-times">Comprehensive Curriculum</div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-times">
                          Our extensive range of programs covers both theoretical concepts and practical applications in modern science.
                        </p>
                      </div>

                      <div className="p-6 bg-white rounded-lg border border-slate-100 shadow-2xs h-full">
                        <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#1e3a8a] flex items-center justify-center mb-4">
                          <Puzzle className="w-5 h-5" />
                        </div>
                        <div className="font-normal text-base text-slate-900 mb-2 font-times">Practical Training</div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-times">
                          Our hands-on training approach ensures that you gain real-world experience to excel in your field.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Members Section matching Page 1 & 2 of Reference PDF */}
                <div className="mt-14 sm:mt-16 pt-4">
                  <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-times">
                      Team Members
                    </h3>
                    <p className="font-times italic text-slate-600 text-xs sm:text-sm mt-1">
                      Guided by computational chemists, pharmacology researchers, and academic educators
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto text-center font-times">
                    {/* Member 1: Shankar Thapa */}
                    <div className="bg-white border border-slate-200/90 rounded-xl p-6 text-center flex flex-col items-center justify-between h-full shadow-2xs hover:shadow-md transition-shadow">
                      <div className="flex flex-col items-center w-full">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#1e3a8a]/40 mb-4 overflow-hidden flex items-center justify-center shrink-0 shadow-xs bg-slate-100">
                          <img
                            src={shankarThapaImg}
                            alt="Shankar Thapa, M.Pharm"
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 font-times">Shankar Thapa</h4>
                        <p className="text-xs text-[#1e3a8a] font-bold mt-0.5">Founder, @ Med-Silico Lab</p>
                        <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1 text-center w-full">
                          <div><strong>Qualification:</strong> M.Pharm (Medicinal Chemistry)</div>
                          <div><strong>Specialization:</strong> In Silico Drug Design &amp; Molecular Modeling</div>
                        </div>
                      </div>
                    </div>

                    {/* Member 2: Sadik Shaik */}
                    <div className="bg-white border border-slate-200/90 rounded-xl p-6 text-center flex flex-col items-center justify-between h-full shadow-2xs hover:shadow-md transition-shadow">
                      <div className="flex flex-col items-center w-full">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#1e3a8a]/40 mb-4 overflow-hidden flex items-center justify-center shrink-0 shadow-xs bg-slate-100">
                          <img
                            src={sadikShaikImg}
                            alt="Sadik Shaik, PhD"
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 font-times">Sadik Shaik</h4>
                        <p className="text-xs text-[#1e3a8a] font-bold mt-0.5">Supervisor &amp; Consultant, Pharmacology Research</p>
                        <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1 text-center w-full">
                          <div><strong>Qualification:</strong> PhD (Pharmacology)</div>
                          <div><strong>Specialization:</strong> Pharmacological Screening &amp; In Vivo/In Silico Correlation</div>
                        </div>
                      </div>
                    </div>

                    {/* Member 3: Mahalakshmi Suresha Biradar */}
                    <div className="bg-white border border-slate-200/90 rounded-xl p-6 text-center flex flex-col items-center justify-between h-full shadow-2xs hover:shadow-md transition-shadow">
                      <div className="flex flex-col items-center w-full">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#1e3a8a]/40 mb-4 overflow-hidden flex items-center justify-center shrink-0 shadow-xs bg-slate-100">
                          <img
                            src={mahalakshmiBiradarImg}
                            alt="Mahalakshmi Suresha Biradar, M.Pharm"
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 font-times">Mahalakshmi Suresha Biradar</h4>
                        <p className="text-xs text-[#1e3a8a] font-bold mt-0.5">Expert CADD Research and Publication</p>
                        <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1 text-center w-full">
                          <div><strong>Qualification:</strong> M.Pharm (Medicinal/Pharmaceutical Chemistry)</div>
                          <div><strong>Specialization:</strong> CADD Workflows, Q1/Q2 Manuscript Publication Mentorship</div>
                        </div>
                      </div>
                    </div>

                    {/* Member 4: It may be You */}
                    <div
                      onClick={() => {
                        setActiveTab('contact');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="bg-[#dbeafe] text-slate-900 rounded-xl p-6 text-center flex flex-col items-center justify-between border border-blue-200 h-full shadow-2xs hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-dashed border-[#1e3a8a]/40 mb-3 flex items-center justify-center text-[#1e3a8a] font-times text-3xl font-light">
                          +
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 font-times">
                          It May Be You!
                        </h4>
                        <p className="text-xs text-[#1e3a8a] font-bold mt-1">
                          Join Us !
                        </p>
                        <p className="text-xs text-slate-600 mt-2 font-times italic">
                          Inviting Ph.D. researchers and industry computational chemists for hybrid workshop sessions.
                        </p>
                      </div>
                      <span className="mt-5 inline-block py-2 px-5 bg-[#1e3a8a] text-white text-xs sm:text-sm font-medium rounded-md font-times">
                        Apply Now
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Services & Prime Membership Section on Home */}
            <ServicesSection
              onSelectService={(svc) => setSelectedService(svc)}
              onOpenConsultationModal={(svcId) => handleOpenConsultation(svcId)}
              onOpenWpExport={() => setIsWpModalOpen(true)}
            />

            {/* Dedicated Academic & Publication Consulting Callout Strip (Light Lavender Theme) */}
            <section className="py-12 sm:py-14 bg-[#dbeafe] text-slate-900 border-b border-blue-200/80 font-times">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white border border-blue-200/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
                  <div className="max-w-3xl">
                    <div className="font-times italic text-xs sm:text-sm tracking-wide text-[#1e3a8a] font-semibold mb-2">
                      Dedicated Academic Consulting Wing &middot; Med-Silico Lab
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 font-times mb-3">
                      Need Dedicated Manuscript Preparation &amp; Publication Guidance?
                    </h3>
                    <p className="font-times text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                      Visit our dedicated page covering Manuscript Preparation, Publication Mentorship, Certified Plagiarism Checking (iThenticate/Turnitin under 10% similarity), and Strategic SCI / Scopus Q1 Journal Selection.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-times text-slate-800">
                      <span className="flex items-center gap-1.5"><span className="text-[#1e3a8a] font-bold">1.</span> Manuscript Preparation</span>
                      <span className="hidden lg:inline text-blue-400">&bull;</span>
                      <span className="flex items-center gap-1.5"><span className="text-[#1e3a8a] font-bold">2.</span> Publication Guidance</span>
                      <span className="hidden lg:inline text-blue-400">&bull;</span>
                      <span className="flex items-center gap-1.5"><span className="text-[#1e3a8a] font-bold">3.</span> Plagiarism Checking</span>
                      <span className="hidden lg:inline text-blue-400">&bull;</span>
                      <span className="flex items-center gap-1.5"><span className="text-[#1e3a8a] font-bold">4.</span> Journal Selection</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 font-times">
                    <button
                      onClick={() => {
                        setActiveTab('publication-consulting');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-md transition flex items-center justify-center gap-2 cursor-pointer shadow-xs font-times"
                    >
                      <span>Explore Publication Consulting</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </button>
                    <a
                      href="tel:+917827943097"
                      className="px-6 py-2.5 bg-[#faf7fc] hover:bg-[#dbeafe] text-[#1e3a8a] border border-blue-300 font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-md transition text-center flex items-center justify-center gap-2 font-times"
                    >
                      <span>Call Desk: +91 7827943097</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials Snippet on Home (Matching Page 3 of Reference PDF) */}
            <section className="py-14 sm:py-20 bg-[#dbeafe] font-times">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 font-times">
                  Here is what our wonderful scholars say about us!
                </h3>
                <div className="mt-4 mb-8 sm:mb-10">
                  <button
                    onClick={() => {
                      setActiveTab('testimonials');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-5 py-2 bg-[#1e3a8a] hover:bg-[#1e40af] text-white text-sm font-times rounded-md shadow-xs cursor-pointer transition"
                  >
                    View All
                  </button>
                </div>

                {/* Featured Quote Banner matching Page 3 of Reference PDF */}
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-xs border border-blue-100 max-w-3xl mx-auto mb-8 text-center">
                  <p className="text-sm sm:text-base text-slate-900 font-times leading-relaxed">
                    &ldquo;It was a very good workshop on molecular dynamic simulation. Worth participation.&rdquo;
                  </p>
                  <div className="mt-3 text-xs sm:text-sm font-bold text-slate-900 font-times">
                    &ndash; Dr. Manjunatha D. H.
                  </div>
                </div>

                {/* Additional Scholar Reviews Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 font-times text-left">
                  {TESTIMONIALS_DATA.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="p-5 rounded-lg border border-blue-100 bg-white shadow-2xs flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center gap-1 text-amber-500 mb-2">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed mb-4 font-times">
                          &ldquo;{item.feedback}&rdquo;
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-100 text-xs font-times">
                        <div className="font-bold text-slate-900">&ndash; {item.name}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{item.institution}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Us Split Banner matching Page 3 of Reference PDF */}
            <section className="w-full grid grid-cols-1 lg:grid-cols-2 font-times">
              {/* Left Column: Workspace / Computational Lab Image */}
              <div className="relative min-h-[260px] sm:min-h-[340px] bg-slate-200 overflow-hidden">
                <img
                  src={labImg}
                  alt="Research Workspace"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Column: Magenta-to-Deep-Purple Gradient Banner */}
              <div className="bg-gradient-to-r from-[#f5009b] via-[#a30082] to-[#4c0075] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl font-normal text-white font-times mb-4">
                    Contact Us
                  </h3>
                  <p className="font-times text-sm sm:text-base text-white/95 leading-relaxed mb-8">
                    Join a community of forward-thinking researchers and professionals, and take your scientific career to the next level with Med-Silico Lab!
                  </p>
                  <div className="text-center sm:text-left">
                    <button
                      onClick={() => {
                        setActiveTab('contact');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-2 bg-[#3d0949] hover:bg-[#270430] text-white text-sm font-times rounded-md transition cursor-pointer shadow-sm"
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* VIEW: ABOUT US */}
        {activeTab === 'about' && (
          <AboutSection
            onJoinTeam={() => {
              setActiveTab('contact');
              window.scrollTo({ top: 300, behavior: 'smooth' });
            }}
            onExploreWorkshops={() => setActiveTab('upcoming-workshops')}
          />
        )}

        {/* VIEW: OUR SERVICES */}
        {activeTab === 'services' && (
          <ServicesSection
            onSelectService={(svc) => setSelectedService(svc)}
            onOpenConsultationModal={(svcId) => handleOpenConsultation(svcId)}
            onOpenWpExport={() => setIsWpModalOpen(true)}
          />
        )}

        {/* VIEW: PUBLICATION & MANUSCRIPT CONSULTING (DEDICATED PAGE) */}
        {activeTab === 'publication-consulting' && (
          <AcademicPublicationPage
            onSelectService={(svc) => setSelectedService(svc)}
            onOpenConsultation={(svcId) => handleOpenConsultation(svcId)}
          />
        )}

        {/* VIEW: RECENT WORKSHOPS */}
        {activeTab === 'recent-workshops' && (
          <WorkshopsSection viewMode="recent" />
        )}

        {/* VIEW: UPCOMING WORKSHOPS */}
        {activeTab === 'upcoming-workshops' && (
          <WorkshopsSection viewMode="upcoming" />
        )}

        {/* VIEW: RESOURCES */}
        {activeTab === 'resources' && (
          <ResourcesSection />
        )}

        {/* VIEW: TESTIMONIALS */}
        {activeTab === 'testimonials' && (
          <TestimonialsSection />
        )}

        {/* VIEW: CONTACT & OPENINGS */}
        {activeTab === 'contact' && (
          <ContactSection initialServiceId={consultationServiceId} />
        )}
      </main>

      {/* 3. Footer */}
      <Footer
        onSelectTab={setActiveTab}
        brandName="Med-Silico Lab"
        logoUrl={customLogoUrl}
        onOpenWpExport={() => setIsWpModalOpen(true)}
      />

      {/* 4. Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onConsult={(serviceId) => handleOpenConsultation(serviceId)}
      />

      {/* 5. WordPress Theme Exporter & Customizer Modal */}
      <WordPressExportModal
        isOpen={isWpModalOpen}
        onClose={() => setIsWpModalOpen(false)}
        config={wpConfig}
        onUpdateConfig={setWpConfig}
        logoUrl={customLogoUrl}
        onLogoChange={handleSafeLogoChange}
      />

      {/* 6. Floating WhatsApp Instant Connect Widget */}
      <a
        href="https://wa.me/917827943097?text=Hello%20Med-Silico%20Lab%2C%20I%20am%20interested%20in%20your%20computational%20research%20services"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp (+91 7827943097)"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group cursor-pointer hover:scale-105"
      >
        <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
        <span className="hidden sm:inline font-times text-xs font-bold tracking-wide pr-1">WhatsApp Us</span>
      </a>
    </div>
  );
}
