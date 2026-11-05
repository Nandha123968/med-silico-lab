import React, { useState } from 'react';
import { Star, MessageSquarePlus, CheckCircle, Building2, X, AlertCircle } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/servicesData';
import {
  sanitizeText,
  checkRateLimit,
  getCsrfToken,
  validateCsrfToken,
  createSecurityJwt,
} from '../utils/security';

interface Testimonial {
  name: string;
  role: string;
  institution: string;
  rating: number;
  service: string;
  feedback: string;
}

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS_DATA);
  const [filter, setFilter] = useState<string>('all');
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reviewError, setReviewError] = useState('');
  const [csrfToken] = useState<string>(() => getCsrfToken());

  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    institution: '',
    service: 'Molecular Docking & MD',
    rating: 5,
    feedback: '',
  });

  const filteredList = testimonials.filter((t) => {
    if (filter === 'all') return true;
    return t.service.toLowerCase().includes(filter.toLowerCase());
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviewError('');

    if (!validateCsrfToken(csrfToken)) {
      setReviewError('Security session token mismatch. Please refresh the page.');
      return;
    }

    const rateCheck = checkRateLimit('testimonial-submit', 3, 60_000);
    if (!rateCheck.allowed) {
      setReviewError(`Rate limit reached. Please wait ${rateCheck.retryAfterSeconds}s.`);
      return;
    }

    const cleanName = sanitizeText(newReview.name, 100);
    const cleanRole = sanitizeText(newReview.role, 100);
    const cleanInst = sanitizeText(newReview.institution, 150);
    const cleanFeedback = sanitizeText(newReview.feedback, 1200);

    if (!cleanName || !cleanRole || !cleanInst || !cleanFeedback) {
      setReviewError('Please complete all required fields cleanly.');
      return;
    }

    createSecurityJwt({
      sub: cleanName,
      scope: 'testimonial:submit',
    });

    setTestimonials([
      {
        name: cleanName,
        role: cleanRole,
        institution: cleanInst,
        service: newReview.service,
        rating: 5,
        feedback: cleanFeedback,
      },
      ...testimonials,
    ]);

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowSubmitModal(false);
      setNewReview({
        name: '',
        role: '',
        institution: '',
        service: 'Molecular Docking & MD',
        rating: 5,
        feedback: '',
      });
    }, 2000);
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-[#dbeafe] border-b border-blue-200 font-times">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="font-times italic text-xs sm:text-sm tracking-wider text-[#1e3a8a] font-semibold mb-2">
              Scholarly Endorsements &amp; Feedback
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 tracking-tight font-times">
              Here is What Our Wonderful Scholars Say About Us!
            </h2>
            <p className="font-times italic text-slate-700 mt-2 text-sm sm:text-base max-w-2xl leading-relaxed">
              Authentic feedback from researchers, doctoral scholars, and faculty members from IITs, NITs, CSIR, DRDO, and global institutions.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowSubmitModal(true)}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1e3a8a] hover:bg-[#1e40af] text-white text-xs sm:text-sm rounded-md transition cursor-pointer self-stretch sm:self-start md:self-auto shrink-0 font-times shadow-xs"
          >
            <MessageSquarePlus className="w-4 h-4 text-blue-200 shrink-0" />
            <span>Submit Scholar Feedback</span>
          </button>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10 pb-4 border-b border-blue-200 text-xs sm:text-sm font-times">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-md transition cursor-pointer ${
              filter === 'all'
                ? 'bg-[#1e3a8a] text-white font-semibold'
                : 'bg-white text-slate-700 hover:bg-blue-50 border border-blue-200'
            }`}
          >
            All Reviews ({testimonials.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('Docking')}
            className={`px-3.5 py-1.5 rounded-md transition cursor-pointer ${
              filter === 'Docking'
                ? 'bg-[#1e3a8a] text-white font-semibold'
                : 'bg-white text-slate-700 hover:bg-blue-50 border border-blue-200'
            }`}
          >
            Molecular Docking
          </button>
          <button
            type="button"
            onClick={() => setFilter('MD')}
            className={`px-3.5 py-1.5 rounded-md transition cursor-pointer ${
              filter === 'MD'
                ? 'bg-[#1e3a8a] text-white font-semibold'
                : 'bg-white text-slate-700 hover:bg-blue-50 border border-blue-200'
            }`}
          >
            MD Simulations (GROMACS)
          </button>
          <button
            type="button"
            onClick={() => setFilter('Vaccine')}
            className={`px-3.5 py-1.5 rounded-md transition cursor-pointer ${
              filter === 'Vaccine'
                ? 'bg-[#1e3a8a] text-white font-semibold'
                : 'bg-white text-slate-700 hover:bg-blue-50 border border-blue-200'
            }`}
          >
            In Silico Vaccine Design
          </button>
          <button
            type="button"
            onClick={() => setFilter('Publication')}
            className={`px-3.5 py-1.5 rounded-md transition cursor-pointer ${
              filter === 'Publication'
                ? 'bg-[#1e3a8a] text-white font-semibold'
                : 'bg-white text-slate-700 hover:bg-blue-50 border border-blue-200'
            }`}
          >
            Publication Guidance
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 font-times">
          {filteredList.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-blue-100 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#1e3a8a] transition shadow-xs h-full"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-3 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Feedback quote in Times New Roman */}
                <p className="text-sm text-slate-800 leading-relaxed italic mb-6">
                  &ldquo;{item.feedback}&rdquo;
                </p>
              </div>

              {/* Scholar Signature block */}
              <div className="pt-4 border-t border-slate-100 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#dbeafe] text-[#1e3a8a] font-times text-xs font-bold flex items-center justify-center shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-times truncate">&ndash; {item.name}</h4>
                  <p className="text-xs text-[#1e3a8a] font-medium font-times truncate">{item.role}</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3 h-3 shrink-0" />
                    <span className="truncate">{item.institution}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Submitting Feedback */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs font-sans-modern">
            <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-md w-full p-5 sm:p-6 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h3 className="text-base font-bold text-slate-900">Submit Your Scholar Feedback</h3>
                <button
                  type="button"
                  onClick={() => setShowSubmitModal(false)}
                  className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {reviewError && (
                <div className="mt-3 p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{reviewError}</span>
                </div>
              )}

              {submitted ? (
                <div className="py-8 text-center space-y-3 font-times">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900 font-sans-modern">Thank You!</h4>
                  <p className="text-xs text-slate-600">Your feedback has been verified and added to our wall.</p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="mt-4 space-y-3 text-xs">
                  <input type="hidden" name="_csrf" value={csrfToken} />
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-cyan-700 font-times"
                      placeholder="e.g. Dr. Rajesh Kumar"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Role / Designation *</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={newReview.role}
                      onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-cyan-700 font-times"
                      placeholder="e.g. Ph.D. Research Scholar"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Institution / University *</label>
                    <input
                      type="text"
                      required
                      maxLength={150}
                      value={newReview.institution}
                      onChange={(e) => setNewReview({ ...newReview, institution: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-cyan-700 font-times"
                      placeholder="e.g. IIT Bombay / AIIMS"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Service / Workshop Attended</label>
                    <select
                      value={newReview.service}
                      onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-cyan-700 font-sans-modern"
                    >
                      <option value="Molecular Docking & MD">Molecular Docking &amp; MD</option>
                      <option value="In Silico Vaccine Design">In Silico Vaccine Design</option>
                      <option value="QSAR & ADMET">QSAR &amp; ADMET Modeling</option>
                      <option value="Publication Guidance">Manuscript &amp; Publication Guidance</option>
                      <option value="DFT Calculations">DFT &amp; Quantum Chemistry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Your Review &amp; Comments *</label>
                    <textarea
                      rows={3}
                      required
                      maxLength={1200}
                      value={newReview.feedback}
                      onChange={(e) => setNewReview({ ...newReview, feedback: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-cyan-700 font-times"
                      placeholder="Share your experience regarding the training, teaching quality, and data analysis support..."
                    />
                  </div>

                  <div className="pt-3 flex justify-end gap-2 font-sans-modern">
                    <button
                      type="button"
                      onClick={() => setShowSubmitModal(false)}
                      className="px-3.5 py-2 border border-slate-300 rounded-lg text-slate-700 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#1e3a8a] text-white font-semibold rounded-md hover:bg-[#1e40af] cursor-pointer"
                    >
                      Publish Feedback
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
