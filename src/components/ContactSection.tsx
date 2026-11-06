import React, { useState } from 'react';
import { Mail, Phone, MapPin, Download, CheckCircle, Send, X, AlertCircle } from 'lucide-react';
import { ORDERED_SERVICES } from '../data/servicesData';
import {
  sanitizeText,
  sanitizeEmail,
  sanitizePhone,
  checkRateLimit,
  getCsrfToken,
  validateCsrfToken,
  createSecurityJwt,
} from '../utils/security';

interface ContactSectionProps {
  initialServiceId?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialServiceId,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [facilitatorModalOpen, setFacilitatorModalOpen] = useState(false);
  const [facilitatorSubmitted, setFacilitatorSubmitted] = useState(false);
  const [facilitatorError, setFacilitatorError] = useState('');
  const [csrfToken] = useState<string>(() => getCsrfToken());

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    serviceId: initialServiceId || 'molecular-docking',
    pdbOrTarget: '',
    message: '',
  });

  const [facilData, setFacilData] = useState({
    fullName: '',
    email: '',
    phone: '',
    highestDegree: 'Ph.D.',
    currentAffiliation: '',
    researchSpecialization: 'Molecular Dynamics / Drug Discovery',
    cvUrlOrSummary: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!validateCsrfToken(csrfToken)) {
      setFormError('Security session token mismatch. Please refresh the page.');
      return;
    }

    const rateCheck = checkRateLimit('contact-form', 4, 60_000);
    if (!rateCheck.allowed) {
      setFormError(`Too many requests. Please wait ${rateCheck.retryAfterSeconds}s before submitting again.`);
      return;
    }

    const cleanName = sanitizeText(formData.name, 120);
    const cleanEmail = sanitizeEmail(formData.email);
    const cleanMobile = sanitizePhone(formData.mobile);
    const cleanTarget = sanitizeText(formData.pdbOrTarget, 200);
    const cleanMessage = sanitizeText(formData.message, 2000);

    if (!cleanName || !cleanEmail || !cleanMessage) {
      setFormError('Please provide a valid Name, Email Address, and Project Message.');
      return;
    }

    createSecurityJwt({
      sub: cleanEmail,
      scope: 'consultation:contact',
      serviceId: formData.serviceId,
    });

    setFormData({
      ...formData,
      name: cleanName,
      email: cleanEmail,
      mobile: cleanMobile,
      pdbOrTarget: cleanTarget,
      message: cleanMessage,
    });

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        serviceId: 'molecular-docking',
        pdbOrTarget: '',
        message: '',
      });
    }, 4000);
  };

  const handleFacilitatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFacilitatorError('');

    if (!validateCsrfToken(csrfToken)) {
      setFacilitatorError('Security session token mismatch. Please refresh the page.');
      return;
    }

    const rateCheck = checkRateLimit('facilitator-form', 3, 60_000);
    if (!rateCheck.allowed) {
      setFacilitatorError(`Rate limit reached. Please retry in ${rateCheck.retryAfterSeconds}s.`);
      return;
    }

    const cleanFullName = sanitizeText(facilData.fullName, 120);
    const cleanEmail = sanitizeEmail(facilData.email);
    const cleanPhone = sanitizePhone(facilData.phone);

    if (!cleanFullName || !cleanEmail) {
      setFacilitatorError('Please enter a valid Full Name and Email Address.');
      return;
    }

    createSecurityJwt({
      sub: cleanEmail,
      scope: 'facilitator:apply',
      degree: facilData.highestDegree,
    });

    setFacilData({
      ...facilData,
      fullName: cleanFullName,
      email: cleanEmail,
      phone: cleanPhone,
      currentAffiliation: sanitizeText(facilData.currentAffiliation, 150),
      researchSpecialization: sanitizeText(facilData.researchSpecialization, 200),
      cvUrlOrSummary: sanitizeText(facilData.cvUrlOrSummary, 1000),
    });

    setFacilitatorSubmitted(true);
    setTimeout(() => {
      setFacilitatorSubmitted(false);
      setFacilitatorModalOpen(false);
      setFacilData({
        fullName: '',
        email: '',
        phone: '',
        highestDegree: 'Ph.D.',
        currentAffiliation: '',
        researchSpecialization: 'Molecular Dynamics / Drug Discovery',
        cvUrlOrSummary: '',
      });
    }, 3000);
  };

  const handleDownloadAdvertisement = () => {
    const text = `MED-SILICO LAB - CALL FOR APPLICATIONS
=====================================================
Advertisement No.: MSL/AI/2026/08
Dated: 18-08-2026

INVITATION FOR SCIENTIFIC WORKSHOP FACILITATORS & RESOURCE PERSONS (HYBRID MODE)

Med-Silico Lab invites applications from experienced and skilled educators, postdoctoral fellows, researchers, and industry experts to serve as Resource Persons for conducting Scientific Study Workshops in hybrid mode (both online and offline) across computational domains:
1. Molecular Docking & CADD (AutoDock Vina, Glide, Gold)
2. Molecular Dynamics Simulations (GROMACS, NAMD, AMBER)
3. 2D & 3D QSAR Modeling (PaDEL, CoMFA, CoMSIA)
4. In Silico Vaccine Design & Immunoinformatics
5. Quantum Chemical Calculations (DFT, Gaussian, ORCA)
6. Academic Manuscript Writing for SCI/Scopus Q1 Journals

Review Schedule:
Quarterly cycle: 31 March, 30 June, 30 September, and 31 December.
Honorarium & Perks: Competitive per-session academic honorarium + Certificate of Facilitation.

Send credentials directly to: contact@medsilicolab.com
=====================================================`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Advertisement_Facilitators_MSL_2026_08.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-[#dbeafe] border-b border-blue-200 font-times">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="font-times italic text-xs sm:text-sm tracking-wider text-[#1e3a8a] font-semibold mb-2">
            Get In Touch &amp; Research Career Openings
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 tracking-tight font-times">
            Contact &amp; Academic Openings
          </h2>
          <p className="font-times italic text-slate-700 mt-2 text-sm sm:text-base">
            Whether you need in silico project consultation or wish to facilitate upcoming training programs, our team is ready to assist.
          </p>
        </div>

        {/* Call for Applications Banner */}
        <div className="bg-white rounded-xl border border-blue-200 shadow-xs p-5 sm:p-8 mb-12 sm:mb-16 text-center max-w-4xl mx-auto">
          <div className="inline-block bg-[#dbeafe] text-[#1e3a8a] border border-blue-300 font-bold px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm mb-4 font-times">
            Call for Applications &ndash; Scientific Workshop Facilitators (Hybrid Mode)
          </div>

          <p className="font-times text-slate-700 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Med-Silico Lab invites applications from experienced and skilled educators, researchers, and industry experts to serve as Resource Persons for conducting Scientific Study Workshops in hybrid mode (both online and offline) across multiple research domains.
          </p>

          <div className="text-xs font-times text-slate-500 mt-4 space-y-0.5">
            <div>Advertisement No.: MSL/AI/2026/08</div>
            <div>Dated: 18-08-2026</div>
          </div>

          <p className="font-times italic text-xs text-slate-600 mt-3 max-w-xl mx-auto">
            Last Date for Submission of Applications: Candidates can apply throughout the year. However, applications will be reviewed quarterly, i.e., 31 March, 30 June, 30 September, and 31 December.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mt-6 font-times">
            <button
              type="button"
              onClick={handleDownloadAdvertisement}
              className="px-5 py-2.5 bg-white border border-blue-300 hover:bg-blue-50 text-[#1e3a8a] text-xs sm:text-sm font-semibold rounded-md transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 shrink-0" />
              <span>Download Advertisement</span>
            </button>

            <button
              type="button"
              onClick={() => setFacilitatorModalOpen(true)}
              className="px-6 py-2.5 bg-[#1e3a8a] hover:bg-[#1e40af] text-white text-xs sm:text-sm font-semibold rounded-md transition cursor-pointer"
            >
              Apply as Facilitator
            </button>
          </div>
        </div>

        {/* 3 Contact Info Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="bg-white p-6 rounded-xl border border-blue-100 text-center flex flex-col items-center h-full shadow-2xs">
            <div className="w-10 h-10 rounded-full bg-[#dbeafe] text-[#1e3a8a] flex items-center justify-center mb-3 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-times font-bold uppercase tracking-wider text-slate-400 mb-1">Our Office</h4>
            <p className="font-times text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
              Med-Silico Computational Research Lab,<br />
              Roppa, Pavagada-561202, Tumkur, Karnataka, India.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-blue-100 text-center flex flex-col items-center h-full shadow-2xs">
            <div className="w-10 h-10 rounded-full bg-[#dbeafe] text-[#1e3a8a] flex items-center justify-center mb-3 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-times font-bold uppercase tracking-wider text-slate-400 mb-1">Call &amp; WhatsApp</h4>
            <p className="font-times text-xs sm:text-sm text-slate-700 font-medium">
              <a href="tel:+917827943097" className="hover:text-[#1e3a8a] underline font-semibold">+91 7827943097</a><br />
              <span className="text-slate-500 font-normal font-times text-xs">Mon - Sat: 9:00 AM - 7:00 PM IST</span>
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-blue-100 text-center flex flex-col items-center sm:col-span-2 md:col-span-1 h-full shadow-2xs">
            <div className="w-10 h-10 rounded-full bg-[#dbeafe] text-[#1e3a8a] flex items-center justify-center mb-3 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-times font-bold uppercase tracking-wider text-slate-400 mb-1">Mail Us</h4>
            <p className="font-times text-xs sm:text-sm text-slate-700 font-medium">
              contact@medsilicolab.com<br />
              <span className="text-slate-500 font-normal">medsilicolab@gmail.com</span>
            </p>
          </div>
        </div>

        {/* Join Us Today Consultation Query Form */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 sm:p-10 max-w-3xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans-modern">Join Us Today!</h3>
            <p className="font-times italic text-xs sm:text-sm text-slate-600 mt-1">
              Submit your computational project query or research consulting requirements.
            </p>
          </div>

          {formError && (
            <div className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2 font-sans-modern">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{formError}</span>
            </div>
          )}

          {formSubmitted ? (
            <div className="py-10 text-center space-y-3 font-times">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-lg font-bold text-slate-900 font-sans-modern">Consultation Request Dispatched!</h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.name || 'Scholar'}</strong>. Our computational research lead will review your project parameters and respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <input type="hidden" name="_csrf" value={csrfToken} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-1 font-sans-modern">Your Name *</label>
                  <input
                    type="text"
                    required
                    maxLength={120}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-cyan-700 font-times text-sm"
                    placeholder="e.g. Dr. A. Kumar"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1 font-sans-modern">Email Address *</label>
                  <input
                    type="email"
                    required
                    maxLength={254}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-cyan-700 font-times text-sm"
                    placeholder="scholar@university.edu"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-1 font-sans-modern">Mobile / WhatsApp Number</label>
                  <input
                    type="tel"
                    maxLength={24}
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-cyan-700 font-mono text-sm"
                    placeholder="+91 7827943097"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1 font-sans-modern">Select Required Service</label>
                  <select
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-cyan-700 font-sans-modern text-xs"
                  >
                    {ORDERED_SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1 font-sans-modern">
                  Target Protein PDB ID / Compound Details (Optional)
                </label>
                <input
                  type="text"
                  maxLength={200}
                  value={formData.pdbOrTarget}
                  onChange={(e) => setFormData({ ...formData, pdbOrTarget: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-cyan-700 font-times text-sm"
                  placeholder="e.g. PDB: 6LU7, or SMILES code of ligand series"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1 font-sans-modern">Write your message here... *</label>
                <textarea
                  rows={4}
                  required
                  maxLength={2000}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-cyan-700 font-times text-sm"
                  placeholder="Detail your research scope, deadline, target journal tier, or simulation requirements..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-blue-900 hover:bg-blue-950 text-white font-semibold uppercase tracking-wider rounded-lg transition cursor-pointer flex items-center justify-center gap-2 font-sans-modern"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>

      {/* Facilitator Application Modal */}
      {facilitatorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs font-sans-modern">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-lg w-full p-5 sm:p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono font-bold text-blue-900 uppercase">Advt. MSL/AI/2026/08</span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">Application: Scientific Workshop Facilitator</h3>
              </div>
              <button
                type="button"
                onClick={() => setFacilitatorModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 shrink-0 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {facilitatorError && (
              <div className="mt-3 p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{facilitatorError}</span>
              </div>
            )}

            {facilitatorSubmitted ? (
              <div className="py-8 text-center space-y-3 font-times">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-slate-900 font-sans-modern">Application Registered!</h4>
                <p className="text-xs text-slate-600">
                  Your academic profile will be reviewed by the quarterly advisory committee.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFacilitatorSubmit} className="mt-4 space-y-3 text-xs">
                <input type="hidden" name="_csrf" value={csrfToken} />
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Full Name with Title *</label>
                  <input
                    type="text"
                    required
                    maxLength={120}
                    value={facilData.fullName}
                    onChange={(e) => setFacilData({ ...facilData, fullName: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-blue-900 font-times text-sm"
                    placeholder="e.g. Dr. Rajeshwari S, Ph.D."
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      maxLength={254}
                      value={facilData.email}
                      onChange={(e) => setFacilData({ ...facilData, email: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-blue-900 font-times"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      maxLength={24}
                      value={facilData.phone}
                      onChange={(e) => setFacilData({ ...facilData, phone: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-blue-900 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Highest Qualification</label>
                    <select
                      value={facilData.highestDegree}
                      onChange={(e) => setFacilData({ ...facilData, highestDegree: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-blue-900"
                    >
                      <option value="Ph.D.">Ph.D.</option>
                      <option value="Postdoc">Postdoctoral Fellow</option>
                      <option value="M.Tech/M.Sc">M.Tech / M.Sc / M.Pharm</option>
                      <option value="Industry Scientist">Industry Scientist</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Affiliation / Lab</label>
                    <input
                      type="text"
                      maxLength={150}
                      value={facilData.currentAffiliation}
                      onChange={(e) => setFacilData({ ...facilData, currentAffiliation: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-blue-900 font-times"
                      placeholder="e.g. IISc / IIT / CSIR"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Domain of Workshop Expertise</label>
                  <input
                    type="text"
                    maxLength={200}
                    value={facilData.researchSpecialization}
                    onChange={(e) => setFacilData({ ...facilData, researchSpecialization: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-blue-900 font-times text-sm"
                    placeholder="e.g. GROMACS MD, DFT calculations, QSAR, Vaccine Informatics"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Google Scholar / CV Link or Summary</label>
                  <textarea
                    rows={2}
                    maxLength={1000}
                    value={facilData.cvUrlOrSummary}
                    onChange={(e) => setFacilData({ ...facilData, cvUrlOrSummary: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-blue-900 font-times"
                    placeholder="Provide link to publications, Google Scholar profile, or brief teaching summary..."
                  />
                </div>

                <div className="pt-3 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setFacilitatorModalOpen(false)}
                    className="px-3.5 py-2 border border-slate-300 rounded-lg text-slate-700 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-950 uppercase tracking-wider cursor-pointer"
                  >
                    Submit Application
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
