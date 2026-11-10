import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle, 
  Search, 
  ShieldCheck, 
  Send, 
  ArrowRight, 
  Phone, 
  Mail, 
  Calculator, 
  Award,
  AlertCircle
} from 'lucide-react';
import { ServiceItem, ORDERED_SERVICES } from '../data/servicesData';
import {
  sanitizeText,
  sanitizeEmail,
  sanitizePhone,
  checkRateLimit,
  getCsrfToken,
  validateCsrfToken,
  createSecurityJwt,
} from '../utils/security';

interface AcademicPublicationPageProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: (serviceId?: string) => void;
}

export const AcademicPublicationPage: React.FC<AcademicPublicationPageProps> = ({
  onSelectService,
  onOpenConsultation,
}) => {
  // Get the 4 academic services from ORDERED_SERVICES
  const manuscriptService = ORDERED_SERVICES.find(s => s.id === 'manuscript-preparation')!;
  const publicationService = ORDERED_SERVICES.find(s => s.id === 'publication-guidance')!;
  const plagiarismService = ORDERED_SERVICES.find(s => s.id === 'plagiarism-checking')!;
  const journalService = ORDERED_SERVICES.find(s => s.id === 'journal-selection')!;

  // Dedicated Configurator State
  const [selectedPlan, setSelectedPlan] = useState<'manuscript' | 'publication' | 'plagiarism' | 'journal' | 'full-package'>('full-package');
  const [wordCount, setWordCount] = useState<number>(4500);
  const [turnaround, setTurnaround] = useState<'standard' | 'express'>('standard');

  // Consultation Quick Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState<string>('');
  const [csrfToken] = useState<string>(() => getCsrfToken());
  const [formData, setFormData] = useState({
    authorName: '',
    email: '',
    phone: '',
    serviceType: 'Manuscript Preparation Guidance',
    currentStage: 'Drafting in progress',
    manuscriptTitle: '',
    notes: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!validateCsrfToken(csrfToken)) {
      setFormError('Security session token mismatch. Please refresh the page.');
      return;
    }

    const rateCheck = checkRateLimit('publication-inquiry', 4, 60_000);
    if (!rateCheck.allowed) {
      setFormError(`Too many submissions. Please wait ${rateCheck.retryAfterSeconds}s before retrying.`);
      return;
    }

    const cleanName = sanitizeText(formData.authorName, 120);
    const cleanEmail = sanitizeEmail(formData.email);
    const cleanPhone = sanitizePhone(formData.phone);
    const cleanTitle = sanitizeText(formData.manuscriptTitle, 300);
    const cleanNotes = sanitizeText(formData.notes, 1500);

    if (!cleanName || !cleanEmail) {
      setFormError('Please provide a valid Author Name and Academic Email Address.');
      return;
    }

    // Sign submission payload with JWT session integrity
    createSecurityJwt({
      sub: cleanEmail,
      scope: 'publication:inquiry',
      serviceType: formData.serviceType,
    });

    setFormData({
      ...formData,
      authorName: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      manuscriptTitle: cleanTitle,
      notes: cleanNotes,
    });

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        authorName: '',
        email: '',
        phone: '',
        serviceType: 'Manuscript Preparation Guidance',
        currentStage: 'Drafting in progress',
        manuscriptTitle: '',
        notes: '',
      });
    }, 4000);
  };

  const academicJournals = [
    { name: 'Journal of Biomolecular Structure and Dynamics', publisher: 'Taylor & Francis', impact: '4.4', quartile: 'Q1 / Q2' },
    { name: 'Computers in Biology and Medicine', publisher: 'Elsevier', impact: '7.7', quartile: 'Q1' },
    { name: 'Journal of Chemical Information and Modeling', publisher: 'ACS Publications', impact: '5.6', quartile: 'Q1' },
    { name: 'International Journal of Biological Macromolecules', publisher: 'Elsevier', impact: '8.2', quartile: 'Q1' },
    { name: 'Scientific Reports', publisher: 'Nature Portfolio', impact: '4.6', quartile: 'Q1' },
    { name: 'Frontiers in Pharmacology', publisher: 'Frontiers', impact: '4.4', quartile: 'Q1' },
  ];

  return (
    <div className="bg-[#dbeafe] min-h-screen py-8 sm:py-12 font-times">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Academic Page Header */}
        <div className="bg-white rounded-2xl border border-blue-200 p-6 sm:p-10 lg:p-12 mb-10 sm:mb-12 shadow-xs">
          <div className="max-w-3xl">
            <div className="font-times italic text-xs sm:text-sm tracking-wide text-[#1e3a8a] font-semibold mb-2">
              Academic &amp; Publication Consulting &middot; Medsilico Lab
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 tracking-tight font-times mb-4">
              Academic Manuscript Preparation &amp; Publication Consulting
            </h1>
            <p className="font-times italic text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed mb-6">
              Empowering doctoral candidates, postdocs, and research scientists to elevate in silico and biomedical findings into high-impact publications for SCI, SCIE, and Scopus Q1/Q2 indexed journals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-times">
              <div className="flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-3.5 py-2 rounded-lg border border-blue-200">
                <CheckCircle className="w-4 h-4 text-[#1e3a8a] shrink-0" />
                <span>Strictly Ethical COPE Compliance</span>
              </div>
              <div className="flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-3.5 py-2 rounded-lg border border-blue-200">
                <CheckCircle className="w-4 h-4 text-[#1e3a8a] shrink-0" />
                <span>Certified iThenticate / Turnitin Screening</span>
              </div>
              <div className="flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-3.5 py-2 rounded-lg border border-blue-200">
                <CheckCircle className="w-4 h-4 text-[#1e3a8a] shrink-0" />
                <span>300–600 DPI ChemDraw &amp; PyMOL Graphics</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 text-slate-800 px-3.5 py-2 rounded-lg border border-slate-300">
                <Phone className="w-3.5 h-3.5 text-[#1e3a8a] shrink-0" />
                <span>Consultation Desk: <a href="tel:+918310468262" className="font-semibold underline hover:text-[#1e3a8a]">+91 8310468262</a></span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Academic Services Showcase */}
        <div className="mb-14 sm:mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="font-times italic text-xs sm:text-sm text-blue-900 font-semibold mb-1">
              End-to-End Publication Lifecycle
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-times">
              Our Dedicated Academic Consulting Services
            </h2>
            <p className="font-times text-xs sm:text-sm text-slate-600 mt-2">
              From raw trajectory data and binding poses to final journal acceptance and reviewer query support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Service 1: Manuscript Preparation Guidance */}
            <div className="bg-white rounded-xl border border-slate-200 hover:border-blue-700 transition shadow-xs p-5 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="font-times italic text-xs text-blue-900 font-semibold bg-blue-50/80 px-3 py-1 rounded-full border border-cyan-200">
                    Academic Drafting
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-times mb-2">
                  Manuscript Preparation Guidance
                </h3>
                <p className="font-times italic text-xs text-blue-900 mb-3">
                  Scientific drafting, high-resolution visual curation, &amp; formatting for Q1/Q2 journals
                </p>
                <p className="font-times text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                  Expert structural and technical drafting guidance for original research articles, review papers, and book chapters. We assist researchers in presenting complex computational methodologies with reproducibility, scientific precision, and academic elegance.
                </p>

                <div className="space-y-2 mb-6 font-times text-xs text-slate-700">
                  <div className="font-semibold text-slate-900 font-times text-xs uppercase tracking-wider mb-2">
                    Key Protocol Highlights:
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-800 font-bold shrink-0">1.</span>
                    <span>Title, structured abstract, and high-impact keyword optimization for Clarivate/PubMed search discoverability.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-800 font-bold shrink-0">2.</span>
                    <span>Computational methodology writing with precise parameter definitions (OPLS force fields, grid box dimensions, ensemble thermostats).</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-800 font-bold shrink-0">3.</span>
                    <span>High-resolution 300–600 DPI publication figures (PyMOL 3D surfaces, 2D ligand interaction maps, ChemDraw schematics).</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-800 font-bold shrink-0">4.</span>
                    <span>Reference styling in EndNote / Mendeley according to publisher guidelines (Elsevier, Springer, ACS, Wiley).</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectService(manuscriptService)}
                  className="text-xs font-semibold uppercase tracking-wider text-blue-900 hover:text-blue-900 flex items-center gap-1 font-times cursor-pointer"
                >
                  <span>Inspect Full Protocol</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenConsultation('manuscript-preparation')}
                  className="px-4 py-2 bg-blue-900 hover:bg-blue-900 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition font-times cursor-pointer"
                >
                  Enquire Service
                </button>
              </div>
            </div>

            {/* Service 2: Publication Guidance & Peer-Review Mentorship */}
            <div className="bg-white rounded-xl border border-slate-200 hover:border-blue-700 transition shadow-xs p-5 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-indigo-50 text-indigo-800 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="font-times italic text-xs text-indigo-800 font-semibold bg-indigo-50/80 px-3 py-1 rounded-full border border-indigo-200">
                    Peer-Review Support
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-times mb-2">
                  Publication Guidance &amp; Peer-Review Mentorship
                </h3>
                <p className="font-times italic text-xs text-indigo-800 mb-3">
                  End-to-end peer review navigation, reviewer response guidance, &amp; editorial correspondence
                </p>
                <p className="font-times text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                  Comprehensive strategic mentorship navigating international peer-review cycles. Assisting scholars with technical query deconstruction, supplementary simulation evidence, and academic response package structuring.
                </p>

                <div className="space-y-2 mb-6 font-times text-xs text-slate-700">
                  <div className="font-semibold text-slate-900 font-times text-xs uppercase tracking-wider mb-2">
                    Key Protocol Highlights:
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-700 font-bold shrink-0">1.</span>
                    <span>Persuasive Cover Letter structuring highlighting empirical novelty, biological importance, and journal scope alignment.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-700 font-bold shrink-0">2.</span>
                    <span>Deconstruction of Major/Minor revision reviewer queries into structured, evidence-based scientific responses.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-700 font-bold shrink-0">3.</span>
                    <span>Execution of reviewer-requested supplementary simulations (extended MD simulations, MM-GBSA rescoring, control docking).</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-700 font-bold shrink-0">4.</span>
                    <span>Galley proof inspection, author metadata verification, and post-acceptance repository archiving guidance.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectService(publicationService)}
                  className="text-xs font-semibold uppercase tracking-wider text-indigo-800 hover:text-indigo-900 flex items-center gap-1 font-times cursor-pointer"
                >
                  <span>Inspect Full Protocol</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenConsultation('publication-guidance')}
                  className="px-4 py-2 bg-indigo-800 hover:bg-indigo-900 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition font-times cursor-pointer"
                >
                  Enquire Service
                </button>
              </div>
            </div>

            {/* Service 3: Plagiarism & AI Detection Checking & Ethical Paraphrasing */}
            <div className="bg-white rounded-xl border border-slate-200 hover:border-blue-700 transition shadow-xs p-5 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="font-times italic text-xs text-emerald-800 font-semibold bg-emerald-50/80 px-3 py-1 rounded-full border border-emerald-200">
                    Integrity Audit
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-times mb-2">
                  Plagiarism &amp; AI Detection Checking &amp; Paraphrasing
                </h3>
                <p className="font-times italic text-xs text-emerald-800 mb-3">
                  Official iThenticate / Turnitin similarity analysis &amp; Turnitin AI detection audit (0% AI guarantee)
                </p>
                <p className="font-times text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                  Certified academic integrity inspection utilizing official publisher-standard Turnitin and iThenticate algorithms. Includes comprehensive Turnitin AI detection reports and expert scientific paraphrasing to ensure similarity indices strictly below 10% and 0% flagged AI score.
                </p>

                <div className="space-y-2 mb-6 font-times text-xs text-slate-700">
                  <div className="font-semibold text-slate-900 font-times text-xs uppercase tracking-wider mb-2">
                    Key Protocol Highlights:
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold shrink-0">1.</span>
                    <span>Anti-repository scanning (guarantees your draft is never stored in Turnitin/iThenticate institutional databases).</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold shrink-0">2.</span>
                    <span>Official Turnitin AI writing detection report verifying human-written text compliance for strict journal policies.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold shrink-0">3.</span>
                    <span>Line-by-line manual paraphrasing by biological subject matter experts (no robotic synonym replacement).</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold shrink-0">4.</span>
                    <span>Generation of official highlighted PDF similarity &amp; AI audit report with itemized source breakdown.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectService(plagiarismService)}
                  className="text-xs font-semibold uppercase tracking-wider text-emerald-800 hover:text-emerald-900 flex items-center gap-1 font-times cursor-pointer"
                >
                  <span>Inspect Full Protocol</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenConsultation('plagiarism-checking')}
                  className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition font-times cursor-pointer"
                >
                  Enquire Service
                </button>
              </div>
            </div>

            {/* Service 4: Strategic Journal Selection */}
            <div className="bg-white rounded-xl border border-slate-200 hover:border-blue-700 transition shadow-xs p-5 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="font-times italic text-xs text-blue-800 font-semibold bg-blue-50/80 px-3 py-1 rounded-full border border-blue-200">
                    Journal Matching
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-times mb-2">
                  Strategic Journal Selection
                </h3>
                <p className="font-times italic text-xs text-blue-800 mb-3">
                  Strategic matching with SCI, SCIE, Scopus, &amp; PubMed indexed journals
                </p>
                <p className="font-times text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                  Tailored journal identification based on manuscript scope, methodology novelty, target impact factor, publishing turnaround speed, open-access requirements, and APC budget.
                </p>

                <div className="space-y-2 mb-6 font-times text-xs text-slate-700">
                  <div className="font-semibold text-slate-900 font-times text-xs uppercase tracking-wider mb-2">
                    Key Protocol Highlights:
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold shrink-0">1.</span>
                    <span>Analysis of Clarivate Journal Citation Reports (JCR) and Scopus CiteScore metrics to eliminate predatory publications.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold shrink-0">2.</span>
                    <span>Identification of 3 to 5 ranked journals (Primary Target, Solid Backup, and Fast-Track publication option).</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold shrink-0">3.</span>
                    <span>Assessment of Article Processing Charges (APC), waiver eligibility, and zero-fee subscription publishing options.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold shrink-0">4.</span>
                    <span>Turnaround estimation based on recent published papers (time from submission to first decision and final online publication).</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectService(journalService)}
                  className="text-xs font-semibold uppercase tracking-wider text-blue-800 hover:text-blue-900 flex items-center gap-1 font-times cursor-pointer"
                >
                  <span>Inspect Full Protocol</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenConsultation('journal-selection')}
                  className="px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition font-times cursor-pointer"
                >
                  Enquire Service
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Target Journal Showcase */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 mb-14 sm:mb-16 shadow-xs">
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="font-times italic text-xs sm:text-sm text-blue-900 font-semibold mb-1">
              Verified Indexed Outlets
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-times">
              Representative In Silico &amp; Biomedical Target Journals
            </h3>
            <p className="font-times text-xs sm:text-sm text-slate-600 mt-1">
              Sample list of internationally indexed journals where our mentors assist scholars in formatting, submission, and peer-review response support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-times">
            {academicJournals.map((jr, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between h-full">
                <div>
                  <div className="text-xs font-bold text-slate-900 font-times mb-1">
                    {jr.name}
                  </div>
                  <div className="text-[11px] text-slate-500 mb-2">
                    Publisher: {jr.publisher}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs">
                  <span className="font-semibold text-blue-900">Impact Factor: {jr.impact}</span>
                  <span className="bg-blue-100 text-blue-900 px-2 py-0.5 rounded font-mono text-[10px] font-bold">{jr.quartile}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Academic Publication Scope Configurator (Flexible / Variable — No Money Shown) */}
        <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-10 lg:p-12 mb-14 sm:mb-16 shadow-md border border-blue-200 font-times">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-[#1e3a8a] font-times italic text-xs tracking-wider mb-2 font-semibold">
                  <Calculator className="w-4 h-4 text-[#1e3a8a]" />
                  <span>Customized Academic Consultation</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-slate-900 font-times">
                  Configure Your Publication Consulting Scope
                </h3>
                <p className="font-times italic text-xs sm:text-sm text-slate-600 mt-1">
                  Flexible and variable support tailored to your manuscript word count, service package, and delivery turnaround.
                </p>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 font-times">
                  Select Academic Service:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs font-times">
                  {[
                    { id: 'full-package', label: 'Full End-to-End Package' },
                    { id: 'manuscript', label: 'Manuscript Prep Only' },
                    { id: 'publication', label: 'Publication & Peer Review' },
                    { id: 'plagiarism', label: 'Plagiarism & Paraphrase' },
                    { id: 'journal', label: 'Journal Selection Only' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedPlan(item.id as any)}
                      className={`p-2.5 rounded-lg text-left transition cursor-pointer border font-times ${
                        selectedPlan === item.id
                          ? 'bg-[#1e3a8a] border-[#1e3a8a] text-white font-semibold shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-[#1e3a8a] hover:bg-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Word Count Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-times mb-2">
                  <span className="text-slate-600">Manuscript Word Count:</span>
                  <span className="font-bold text-[#1e3a8a] text-sm">{wordCount.toLocaleString()} words</span>
                </div>
                <input
                  type="range"
                  min="1500"
                  max="10000"
                  step="500"
                  value={wordCount}
                  onChange={(e) => setWordCount(parseInt(e.target.value, 10))}
                  className="w-full accent-[#1e3a8a] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-times italic mt-1">
                  <span>1,500 (Short)</span>
                  <span>5,000 (Full Paper)</span>
                  <span>10,000 (Review)</span>
                </div>
              </div>

              {/* Turnaround Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 font-times">
                  Turnaround Speed:
                </label>
                <div className="flex gap-2 text-xs font-times max-w-sm">
                  <button
                    type="button"
                    onClick={() => setTurnaround('standard')}
                    className={`flex-1 py-2.5 px-3 rounded-lg border text-center transition cursor-pointer font-times ${
                      turnaround === 'standard'
                        ? 'bg-[#1e3a8a] border-[#1e3a8a] text-white font-semibold'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    Standard (7-10d)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTurnaround('express')}
                    className={`flex-1 py-2.5 px-3 rounded-lg border text-center transition cursor-pointer font-times ${
                      turnaround === 'express'
                        ? 'bg-[#1e3a8a] border-[#1e3a8a] text-white font-semibold'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    Express (3-5d)
                  </button>
                </div>
              </div>

            </div>

            {/* Flexible / Variable Consultation Card (No Money Shown) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#0f172a] text-white rounded-xl p-6 sm:p-8 border border-blue-900 text-center flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs uppercase font-times italic tracking-wider text-blue-200">
                  Consultation Fee Structure
                </span>
                <div className="text-3xl sm:text-4xl font-normal text-white my-3 font-times">
                  Flexible (Variable)
                </div>
                <div className="text-xs text-blue-100 font-times italic mb-6">
                  {turnaround === 'express' ? 'Includes priority 3–5 day express delivery.' : 'Includes standard 7–10 day comprehensive review.'}
                  <br />Customized based on manuscript scope &amp; target journal.
                </div>

                <div className="text-left text-xs text-blue-100 space-y-2 mb-6 font-times border-t border-blue-400/30 pt-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-200 shrink-0 mt-0.5" />
                    <span>Tracked changes document (.docx) + Clean version</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-200 shrink-0 mt-0.5" />
                    <span>Official Turnitin/iThenticate plagiarism &amp; AI certificate</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-200 shrink-0 mt-0.5" />
                    <span>Reviewer response advisory &amp; data template included</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 font-times">
                <a
                  href={`https://wa.me/918310468262?text=${encodeURIComponent(
                    `Hello Medsilico Lab, I am interested in the ${selectedPlan} service for approximately ${wordCount} words.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition flex items-center justify-center gap-2 font-times shadow-sm"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Instant WhatsApp (+91 8310468262)</span>
                </a>

                <button
                  type="button"
                  onClick={() => onOpenConsultation('manuscript-preparation')}
                  className="w-full py-3 px-4 bg-white hover:bg-blue-50 text-[#1e3a8a] font-semibold text-xs uppercase tracking-wider rounded-lg transition cursor-pointer font-times shadow-sm"
                >
                  Submit Query via Portal
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Fast-Track Consultation Desk Form */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs max-w-3xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <div className="font-times italic text-xs sm:text-sm text-blue-900 font-semibold mb-1">
              Direct Communication Desk
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-times">
              Submit Your Manuscript or Publication Inquiry
            </h3>
            <p className="font-times italic text-xs sm:text-sm text-slate-600 mt-1">
              Connect directly with our editorial mentors. Immediate response within 4 hours.
            </p>
          </div>

          {formError && (
            <div className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2 font-times">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{formError}</span>
            </div>
          )}

          {formSubmitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-300 rounded-xl text-center font-times">
              <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
              <h4 className="text-base font-bold text-emerald-900 font-times">
                Inquiry Successfully Transmitted!
              </h4>
              <p className="text-xs text-emerald-800 mt-1">
                Our academic publication coordinator will review your manuscript scope and contact you via email or WhatsApp (+91 8310468262) shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 font-times text-xs">
              <input type="hidden" name="_csrf" value={csrfToken} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Author Name *</label>
                  <input
                    type="text"
                    required
                    maxLength={120}
                    value={formData.authorName}
                    onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                    placeholder="e.g. Dr. Ramesh Kumar"
                    className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700 bg-slate-50 font-times"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    maxLength={254}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. ramesh.k@univ.edu"
                    className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700 bg-slate-50 font-times"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">WhatsApp / Contact Mobile</label>
                  <input
                    type="tel"
                    maxLength={24}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 8310468262"
                    className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700 bg-slate-50 font-times"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Service Required</label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700 bg-slate-50 font-times"
                  >
                    <option value="Manuscript Preparation Guidance">Manuscript Preparation Guidance</option>
                    <option value="Publication Guidance & Peer-Review Support">Publication Guidance &amp; Peer-Review Support</option>
                    <option value="Plagiarism Checking & Paraphrasing">Plagiarism Checking &amp; Paraphrasing</option>
                    <option value="Strategic Journal Selection">Strategic Journal Selection</option>
                    <option value="Comprehensive Publication Package">Comprehensive Publication Package</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Tentative Manuscript Title / Domain</label>
                <input
                  type="text"
                  maxLength={300}
                  value={formData.manuscriptTitle}
                  onChange={(e) => setFormData({ ...formData, manuscriptTitle: e.target.value })}
                  placeholder="e.g. Molecular Dynamics and QSAR Study of Novel Quinoline Inhibitors..."
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700 bg-slate-50 font-times"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Specific Research Questions or Reviewer Feedback</label>
                <textarea
                  rows={3}
                  maxLength={1500}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention your target journal, current status (first draft vs revision), or reviewer queries..."
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700 bg-slate-50 font-times"
                />
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-blue-900 hover:bg-blue-900 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-xs transition cursor-pointer font-times inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Publication Query</span>
                </button>
              </div>
            </form>
          )}

          {/* Direct Contact Phone & Email strip */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs font-times text-slate-600 gap-3">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-blue-800 shrink-0" />
              <span>Call / WhatsApp: <a href="tel:+918310468262" className="font-bold text-slate-900 underline hover:text-blue-900">+91 8310468262</a></span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-blue-800 shrink-0" />
              <span>Email: <a href="mailto:contact@medsilicolab.com" className="font-bold text-slate-900 underline hover:text-blue-900">contact@medsilicolab.com</a></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
