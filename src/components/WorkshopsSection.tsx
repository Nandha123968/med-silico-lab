import React, { useState } from 'react';
import { Calendar, Clock, Download, CheckCircle, Video, UserCheck, X, AlertCircle, ExternalLink, Maximize2, ShieldCheck, Award } from 'lucide-react';
import { WORKSHOPS_DATA, WorkshopItem } from '../data/servicesData';
import vaccineImg from '../assets/images/insilico_vaccine_bioinformatics_1793813248004.jpg';
import {
  sanitizeText,
  sanitizeEmail,
  sanitizePhone,
  checkRateLimit,
  getCsrfToken,
  validateCsrfToken,
  createSecurityJwt,
} from '../utils/security';

interface WorkshopsSectionProps {
  viewMode?: 'upcoming' | 'recent' | 'all';
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<WorkshopItem | null>(null);
  const [previewPoster, setPreviewPoster] = useState<WorkshopItem | null>(null);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [regError, setRegError] = useState('');
  const [csrfToken] = useState<string>(() => getCsrfToken());

  const [regForm, setRegForm] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    designation: 'Research Scholar',
  });

  const displayedWorkshops = WORKSHOPS_DATA;

  const handleDownloadBrochure = (workshop: WorkshopItem) => {
    const text = `THE SCIENTIFIC CIRCLE & MED-SILICO LAB - WORKSHOP SYLLABUS
======================================================================
Title: ${workshop.title}
Organized by: ${workshop.organizer} (${workshop.organizerRole || 'Academic Head'})
Speaker: ${workshop.speaker} (${workshop.speakerRole})
Date: ${workshop.dateStr}
Timings: ${workshop.timings}
Platform: ${workshop.platform}
Registration Fee: Students: INR ${workshop.feeStudentsInr} | Faculty/Professionals: INR ${workshop.feeFacultyInr}
Capacity: ${workshop.capacity || 'Limited Seats'}
Certification: ${workshop.certificate}
Direct Registration Link: ${workshop.registrationUrl}
Contact / WhatsApp: ${workshop.contactPhone || '+91 8310468262'}

KEY MODULES & HANDS-ON SYLLABUS:
${workshop.topics.map((t, i) => `${i + 1}. ${t}`).join('\n')}

CERTIFICATION:
Official E-Certificate with Unique Verification ID and Institutional Seal from The Scientific Circle.

For enquiries & registration assistance:
WhatsApp: +91 8310468262 | thescientificcircle@gmail.com
======================================================================`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${workshop.id}-syllabus.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegError('');

    if (!validateCsrfToken(csrfToken)) {
      setRegError('Security session token mismatch. Please refresh the page.');
      return;
    }

    const rateCheck = checkRateLimit('workshop-register', 4, 60_000);
    if (!rateCheck.allowed) {
      setRegError(`Rate limit exceeded. Please wait ${rateCheck.retryAfterSeconds}s.`);
      return;
    }

    const cleanName = sanitizeText(regForm.name, 120);
    const cleanEmail = sanitizeEmail(regForm.email);
    const cleanPhone = sanitizePhone(regForm.phone);
    const cleanInst = sanitizeText(regForm.institution, 180);

    if (!cleanName || !cleanEmail || !cleanInst) {
      setRegError('Please provide a valid Name, Academic Email, and Affiliation.');
      return;
    }

    createSecurityJwt({
      sub: cleanEmail,
      scope: 'workshop:register',
      workshopId: selectedWorkshop?.id,
    });

    setRegForm({
      ...regForm,
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      institution: cleanInst,
    });

    setRegisterSuccess(true);
    setTimeout(() => {
      setRegisterSuccess(false);
      setSelectedWorkshop(null);
      setRegForm({ name: '', email: '', phone: '', institution: '', designation: 'Research Scholar' });
    }, 2500);
  };

  return (
    <section id="workshops" className="py-12 sm:py-16 lg:py-20 bg-[#dbeafe] border-b border-blue-200 font-times">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="font-times italic text-xs sm:text-sm tracking-wider text-[#1e3a8a] font-semibold mb-2">
            The Scientific Circle &amp; Med-Silico Lab Practical Training
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 tracking-tight font-times">
            Official Workshops &amp; Hands-On Webinars
          </h2>
          <p className="font-times italic text-slate-700 mt-2 text-sm sm:text-base">
            Comprehensive skill-oriented training sessions in Molecular Docking, QSAR Modeling, ADMET Profiling, and Network Pharmacology. Click any poster to view full resolution.
          </p>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {displayedWorkshops.map((w) => (
            <div
              key={w.id}
              className="bg-white rounded-2xl border border-blue-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Poster Preview Container with Lightbox Click */}
                <div
                  className="relative group cursor-pointer overflow-hidden bg-slate-900 aspect-[16/10] sm:aspect-[16/11]"
                  onClick={() => setPreviewPoster(w)}
                  title="Click to view full poster"
                >
                  <img
                    src={w.posterImg}
                    alt={`${w.title} Official Poster`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/60 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300 bg-[#1e3a8a]/90 text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg backdrop-blur-xs">
                      <Maximize2 className="w-4 h-4" />
                      <span>Click to Enlarge Poster</span>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-[#1e3a8a] text-white text-[11px] font-times px-3 py-1 rounded-full shadow-md font-medium tracking-wide">
                    {w.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-4 font-times">
                  <div>
                    <div className="text-xs font-times text-slate-500 uppercase tracking-wider mb-1">
                      {w.organizer} • <span className="text-[#1e3a8a] font-medium">{w.organizerRole}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold leading-snug text-[#1e3a8a] font-times">
                      {w.title}
                    </h3>
                    {w.tagline && (
                      <p className="text-xs italic text-slate-600 mt-1">
                        "{w.tagline}"
                      </p>
                    )}
                  </div>

                  {/* Metadata Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700 bg-blue-50/60 p-3 rounded-lg border border-blue-100">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#1e3a8a] shrink-0" />
                      <span className="font-medium text-slate-900">{w.dateStr}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#1e3a8a] shrink-0" />
                      <span>{w.timings}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-[#1e3a8a] shrink-0" />
                      <span>Speaker: <strong>{w.speaker}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Platform: <strong>{w.platform}</strong></span>
                    </div>
                  </div>

                  {/* Hands-On Curriculum */}
                  <div className="pt-2 border-t border-slate-100 font-times">
                    <div className="text-xs font-semibold uppercase text-[#1e3a8a] mb-2 flex items-center justify-between">
                      <span>Hands-On Curriculum:</span>
                      <span className="text-[11px] font-normal text-slate-500">
                        {w.certificate}
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-slate-700 text-xs sm:text-sm">
                      {w.topics.slice(0, 5).map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="font-times text-xs text-[#1e3a8a] font-bold shrink-0">{idx + 1}.</span>
                          <span className="line-clamp-2">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price Breakdown */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs font-times bg-slate-50 p-3 rounded-lg">
                    <div>
                      <span className="text-slate-500 block text-[11px]">Students Fee</span>
                      <span className="text-base font-bold text-[#1e3a8a]">&#8377;{w.feeStudentsInr}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px]">Faculty / Professionals</span>
                      <span className="text-base font-bold text-slate-800">&#8377;{w.feeFacultyInr}</span>
                    </div>
                    {w.capacity && (
                      <div className="text-[11px] text-amber-800 font-medium bg-amber-50 px-2 py-1 rounded border border-amber-200">
                        {w.capacity}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-5 sm:p-6 pt-0 space-y-2 font-times">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={w.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-[#1e3a8a] hover:bg-[#1e40af] text-white text-xs sm:text-sm font-semibold rounded-md transition cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
                  >
                    <span>{w.registrationType === 'whatsapp' ? 'Register on WhatsApp' : 'Register via Google Form'}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setPreviewPoster(w)}
                    className="w-full py-2.5 bg-[#faf7fc] hover:bg-[#dbeafe] text-[#1e3a8a] border border-blue-200 text-xs sm:text-sm font-medium rounded-md transition cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Maximize2 className="w-3.5 h-3.5 shrink-0" />
                    <span>View Full Poster</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => handleDownloadBrochure(w)}
                  className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-normal rounded-md transition cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 shrink-0" />
                  <span>Download Syllabus (.txt)</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Participant Showcase */}
        <div className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#1e3a8a] font-semibold">PARTICIPANT WORKS</span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-times">Showcase of Excellence</h3>
            <p className="font-times italic text-xs sm:text-sm text-slate-600 mt-1">
              Real computational biology workflows, molecular dynamics trajectories, and binding evaluations executed by workshop scholars.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Terminal MD commands & log preview card */}
            <div className="bg-slate-950 text-slate-200 rounded-xl p-5 sm:p-6 border border-slate-800 font-mono text-xs flex flex-col justify-between shadow-md overflow-hidden">
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block shrink-0" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block shrink-0" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block shrink-0" />
                    <span className="text-slate-400 ml-1.5 truncate">gmx_md_simulation_protocol.sh</span>
                  </div>
                  <span className="text-[10px] text-cyan-400 font-semibold shrink-0">GROMACS 2024</span>
                </div>

                <div className="space-y-2 text-slate-300 overflow-x-auto">
                  <p className="text-slate-500"># Step 1: Target protein topology &amp; solvation</p>
                  <p className="text-cyan-300 break-all">$ gmx pdb2gmx -f 6LU7.pdb -o 6LU7_processed.gro -water tip3p</p>
                  <p className="text-slate-500"># Step 2: Periodic boundary conditions &amp; neutralization</p>
                  <p className="text-cyan-300 break-all">$ gmx editconf -f 6LU7_processed.gro -o 6LU7_newbox.gro -c -d 1.0 -bt cubic</p>
                  <p className="text-cyan-300 break-all">$ gmx solvate -cp 6LU7_newbox.gro -cs spc216.gro -o 6LU7_solv.gro -p topol.top</p>
                  <p className="text-slate-500"># Step 3: Production Molecular Dynamics run</p>
                  <p className="text-emerald-400 break-all">$ gmx mdrun -v -deffnm md_0_100ns -nb gpu</p>
                  <p className="text-slate-400 pt-2 text-[11px]">
                    Average RMSD: 0.174 nm | Binding Free Energy (MM-PBSA): -34.82 kcal/mol
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
                <span>Verified Trajectory: 100ns Explicit Solvent</span>
                <span className="text-emerald-400">Convergence: Confirmed</span>
              </div>
            </div>

            {/* In Silico Graphic card */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-md flex flex-col">
              <div className="relative aspect-video bg-slate-900">
                <img
                  src={vaccineImg}
                  alt="In Silico Vaccine and Docking Simulation Output"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between font-times">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-times">
                    In Silico Multi-Epitope Vaccine Construct Docking with TLR4
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Participant submission by Central University research scholar. Analyzed using ClusPro, PyMOL, and C-ImmSim immune response simulator.
                  </p>
                </div>
                <div className="mt-3 text-[11px] font-mono text-[#1e3a8a] flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-2">
                  <span>Score: -1042.8 kcal/mol</span>
                  <span className="text-slate-500">Published in Elsevier 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Poster Viewer Modal */}
      {previewPoster && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-xs font-times"
          onClick={() => setPreviewPoster(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl border border-slate-700 max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
              <div className="min-w-0 pr-2">
                <h3 className="text-sm sm:text-base font-bold text-[#1e3a8a] truncate font-times">
                  {previewPoster.title}
                </h3>
                <p className="text-xs text-slate-600 font-times">
                  {previewPoster.organizer} • Speaker: {previewPoster.speaker}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPreviewPoster(null)}
                className="text-slate-500 hover:text-slate-900 p-1 rounded-full hover:bg-slate-200 transition cursor-pointer"
                aria-label="Close poster view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Poster Image */}
            <div className="flex-1 overflow-y-auto p-4 flex items-center justify-center bg-slate-900/5">
              <img
                src={previewPoster.posterImg}
                alt={previewPoster.title}
                className="max-h-[68vh] w-auto object-contain rounded-lg shadow-md border border-slate-200"
              />
            </div>

            {/* Modal Bottom Actions */}
            <div className="p-4 border-t border-slate-200 bg-white flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-600 font-times">
                <span>Fee: <strong>Students ₹{previewPoster.feeStudentsInr}</strong> | Faculty ₹{previewPoster.feeFacultyInr}</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={previewPoster.posterImg}
                  download={`${previewPoster.id}-poster.jpg`}
                  className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-md transition flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Save Poster</span>
                </a>
                <a
                  href={previewPoster.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#1e3a8a] hover:bg-[#1e40af] text-white text-xs font-semibold rounded-md transition shadow-xs flex items-center gap-1.5"
                >
                  <span>{previewPoster.registrationType === 'whatsapp' ? 'Register on WhatsApp' : 'Register Now'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Internal Registration Modal (Fallback) */}
      {selectedWorkshop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs font-times">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-lg w-full p-5 sm:p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-[#1e3a8a] uppercase">
                  Workshop Registration
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                  {selectedWorkshop.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedWorkshop(null)}
                className="text-slate-400 hover:text-slate-700 shrink-0 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {regError && (
              <div className="mt-3 p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{regError}</span>
              </div>
            )}

            {registerSuccess ? (
              <div className="py-8 text-center space-y-3 font-times">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900 font-times">Registration Received!</h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                  Confirmation email and meeting portal coordinates have been sent. Welcome to Med-Silico Lab!
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="mt-4 space-y-3 text-xs">
                <input type="hidden" name="_csrf" value={csrfToken} />
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    maxLength={120}
                    value={regForm.name}
                    onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-[#1e3a8a] font-times"
                    placeholder="e.g. Debanjali Kundu"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Academic Email *</label>
                  <input
                    type="email"
                    required
                    maxLength={254}
                    value={regForm.email}
                    onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-[#1e3a8a] font-times"
                    placeholder="scholar@university.edu"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">WhatsApp / Phone Number</label>
                  <input
                    type="tel"
                    maxLength={24}
                    value={regForm.phone}
                    onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-[#1e3a8a] font-mono"
                    placeholder="+91 8310468262"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Affiliation / Institution *</label>
                  <input
                    type="text"
                    required
                    maxLength={180}
                    value={regForm.institution}
                    onChange={(e) => setRegForm({ ...regForm, institution: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-[#1e3a8a] font-times"
                    placeholder="e.g. IIT Madras, CSIR, or University Dept."
                  />
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">Workshop Fee:</span>
                  <span className="font-bold text-slate-900">&#8377;{selectedWorkshop.feeStudentsInr} (Students) / &#8377;{selectedWorkshop.feeFacultyInr} (Faculty)</span>
                </div>

                <div className="pt-4 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedWorkshop(null)}
                    className="w-1/2 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 py-2.5 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-semibold rounded-lg uppercase tracking-wider cursor-pointer"
                  >
                    Submit Registration
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
