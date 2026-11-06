import React from 'react';
import { Target, Compass, CheckCircle2, Award, Cpu, BookOpen, Clock, Video } from 'lucide-react';
import labImg from '../assets/images/computational_lab_workstation_1793813247708.jpg';

interface AboutSectionProps {
  onJoinTeam: () => void;
  onExploreWorkshops: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onJoinTeam,
  onExploreWorkshops,
}) => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200 font-times">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="font-times italic text-xs sm:text-sm tracking-wider text-[#1e3a8a] font-semibold mb-2">
            Academic Background &amp; Mission
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 tracking-tight font-times">
            About Med-Silico Lab
          </h2>
          <p className="font-times italic text-slate-700 mt-3 text-sm sm:text-base leading-relaxed">
            Bridging the gap between theoretical computational biophysics and international academic publishing through hands-on experimental rigor.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-16">
          {/* Mission */}
          <div className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#1e40af] text-white rounded-2xl p-6 sm:p-10 border border-blue-900 shadow-sm relative overflow-hidden h-full">
            <div className="w-12 h-12 rounded-lg bg-white/20 text-blue-200 flex items-center justify-center mb-5 sm:mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-times">Our Mission</h3>
            <p className="font-times text-blue-100 text-sm sm:text-base leading-relaxed">
              To provide accessible, high-standard computational chemistry and biophysics training. We equip research scholars with hands-on simulation skills, reproducible calculation protocols, and dedicated mentoring to independently publish in peer-reviewed Q1/Q2 indexed journals.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-[#1e40af] via-[#1e3a8a] to-[#0f172a] text-white rounded-2xl p-6 sm:p-10 border border-blue-800 shadow-sm relative overflow-hidden h-full">
            <div className="w-12 h-12 rounded-lg bg-white/20 text-white flex items-center justify-center mb-5 sm:mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-times">Our Vision</h3>
            <p className="font-times text-blue-100 text-sm sm:text-base leading-relaxed">
              To serve as a trusted academic center for computer-aided drug design, molecular dynamics, and research publication mentorship, preparing capable researchers who approach scientific challenges with methodological rigor and academic integrity.
            </p>
          </div>
        </div>

        {/* Who We Are & Laboratory Infrastructure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <div className="text-xs font-times font-semibold uppercase text-[#1e3a8a] tracking-wider mb-2">
              Empirical Foundations
            </div>
            <h3 className="text-xl sm:text-3xl font-normal text-slate-900 mb-5 sm:mb-6 font-times">
              Who We Are &amp; What Drives Our Research?
            </h3>
            <div className="space-y-4 font-times text-slate-700 text-sm sm:text-[15px] leading-relaxed">
              <p>
                <strong>Med-Silico Lab</strong> is a scientific research consulting and training initiative founded by Dr. R. Shivakumar (Ph.D. NIT Karnataka, Postdoc POSTECH S. Korea). We specialize in practical computational drug design, biomolecular modeling, and academic publishing support.
              </p>
              <p>
                We work directly with graduate students, Ph.D. scholars, and university faculty, offering structured hands-on workshops, one-on-one project guidance, and simulation workflow assistance to help researchers independently conduct and defend their computational findings.
              </p>
              <p>
                Our computational infrastructure features dedicated GPU clusters running industry-standard molecular modeling platforms including <strong>GROMACS 2024, AutoDock Vina, Gaussian, Discovery Studio, and PyMOL</strong>.
              </p>
            </div>

            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 font-times">
              <button
                onClick={onExploreWorkshops}
                className="px-6 py-2.5 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-medium text-sm rounded-md transition cursor-pointer text-center"
              >
                View Upcoming Workshops
              </button>
              <button
                onClick={onJoinTeam}
                className="px-6 py-2.5 bg-[#dbeafe] hover:bg-blue-200 text-[#1e3a8a] font-medium text-sm rounded-md transition cursor-pointer text-center"
              >
                Join As Workshop Facilitator
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
              <img
                src={labImg}
                alt="Med-Silico Lab Computational Workstation"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-3.5 sm:p-4 bg-[#faf7fc] border-t border-blue-100 text-xs text-slate-700 flex flex-wrap items-center justify-between gap-2 font-times">
                <span>GPU Molecular Dynamics Workstation</span>
                <span className="text-[#1e3a8a] font-semibold">GROMACS / PyMOL Cluster</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Grid */}
        <div className="mb-16 sm:mb-20 bg-[#f8f9fa] p-6 sm:p-10 rounded-2xl border border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 font-times">Why Us</h3>
            <p className="font-times italic text-slate-600 text-xs sm:text-sm mt-1">Our fundamental commitments to research quality and scholar success</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 font-times">
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-100 shadow-2xs h-full">
              <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#1e3a8a] flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-normal text-slate-900 mb-2 font-times">Cutting-Edge Resources</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Stay ahead with access to state-of-the-art computational tools, force fields, and GPU cluster workflows tailored to current scientific advancements.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-100 shadow-2xs h-full">
              <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#1e3a8a] flex items-center justify-center mb-4">
                <Video className="w-5 h-5" />
              </div>
              <h4 className="text-base font-normal text-slate-900 mb-2 font-times">Session Recordings</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Access full recorded sessions anytime, allowing you to revisit trajectory setups, command syntaxes, and reinforce your understanding at your own pace.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-100 shadow-2xs h-full">
              <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#1e3a8a] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-normal text-slate-900 mb-2 font-times">Flexible Scheduling</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Benefit from evening and weekend timings designed to accommodate busy university curricula, research duties, and international time zones.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-100 shadow-2xs h-full">
              <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#1e3a8a] flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-normal text-slate-900 mb-2 font-times">Expert Instructors</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Learn directly from Ph.D. holders, postdocs, and seasoned research scientists with extensive practical publications in international journals.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-100 shadow-2xs h-full">
              <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#1e3a8a] flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="text-base font-normal text-slate-900 mb-2 font-times">Comprehensive Curriculum</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our programs cover both theoretical thermodynamic principles and practical step-by-step in silico protocols applied to real therapeutic targets.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-100 shadow-2xs h-full">
              <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#1e3a8a] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-normal text-slate-900 mb-2 font-times">Practical Training</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our hands-on training ensures you gain independent simulation competence to analyze trajectories, troubleshoot errors, and publish with pride.
              </p>
            </div>
          </div>
        </div>

        {/* Team Members & Facilitators Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 font-times">Team Members</h3>
            <p className="font-times italic text-slate-600 text-xs sm:text-sm mt-1">Guided by computational chemists, pharmacology researchers, and academic educators</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto font-times">
            {/* 1. Shankar Thapa */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center flex flex-col items-center h-full shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 border-2 border-[#1e3a8a]/30 mb-4 overflow-hidden flex items-center justify-center text-[#1e3a8a] font-times text-2xl font-bold shrink-0 shadow-2xs">
                ST
              </div>
              <h4 className="text-base sm:text-lg font-normal text-slate-900 font-times">Shankar Thapa</h4>
              <p className="text-xs text-[#1e3a8a] font-semibold mt-0.5">Founder, @ Med-Silico Lab</p>
              <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1 text-center w-full">
                <div><strong>Qualification:</strong> M.Pharm (Medicinal Chemistry)</div>
                <div><strong>Specialization:</strong> In Silico Drug Design &amp; Molecular Modeling</div>
              </div>
            </div>

            {/* 2. Sadik Shaik */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center flex flex-col items-center h-full shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 border-2 border-[#1e3a8a]/30 mb-4 overflow-hidden flex items-center justify-center text-[#1e3a8a] font-times text-2xl font-bold shrink-0 shadow-2xs">
                SS
              </div>
              <h4 className="text-base sm:text-lg font-normal text-slate-900 font-times">Sadik Shaik</h4>
              <p className="text-xs text-[#1e3a8a] font-semibold mt-0.5">Supervisor &amp; Consultant, Pharmacology Research</p>
              <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1 text-center w-full">
                <div><strong>Qualification:</strong> PhD (Pharmacology)</div>
                <div><strong>Specialization:</strong> Pharmacological Screening &amp; In Vivo/In Silico Correlation</div>
              </div>
            </div>

            {/* 3. Mahalakshmi Suresha Biradar */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center flex flex-col items-center h-full shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 border-2 border-[#1e3a8a]/30 mb-4 overflow-hidden flex items-center justify-center text-[#1e3a8a] font-times text-2xl font-bold shrink-0 shadow-2xs">
                MB
              </div>
              <h4 className="text-base sm:text-lg font-normal text-slate-900 font-times">Mahalakshmi Suresha Biradar</h4>
              <p className="text-xs text-[#1e3a8a] font-semibold mt-0.5">Expert CADD Research and Publication</p>
              <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1 text-center w-full">
                <div><strong>Qualification:</strong> M.Pharm (Medicinal/Pharmaceutical Chemistry)</div>
                <div><strong>Specialization:</strong> CADD Workflows, Q1/Q2 Manuscript Publication Mentorship</div>
              </div>
            </div>

            {/* 4. Dr. Shivakumar */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center flex flex-col items-center h-full shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#dbeafe] border-2 border-[#1e3a8a]/30 mb-4 overflow-hidden flex items-center justify-center text-[#1e3a8a] font-times text-2xl font-bold shrink-0">
                RS
              </div>
              <h4 className="text-base sm:text-lg font-normal text-slate-900 font-times">Dr. R. Shivakumar</h4>
              <p className="text-xs text-[#1e3a8a] font-medium mt-0.5">Senior Scientific Advisor &amp; Research Mentor</p>
              <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1 text-center w-full">
                <div><strong>Qualification:</strong> Ph.D. in Chemistry (NIT Karnataka)</div>
                <div><strong>Postdoc:</strong> POSTECH, South Korea</div>
                <div><strong>Expertise:</strong> DFT, Molecular Docking, MD Simulations</div>
              </div>
            </div>

            {/* 5. CFO / Operations Profile */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center flex flex-col items-center h-full shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#dbeafe] border-2 border-[#1e3a8a]/30 mb-4 overflow-hidden flex items-center justify-center text-[#1e3a8a] font-times text-2xl font-bold shrink-0">
                LB
              </div>
              <h4 className="text-base sm:text-lg font-normal text-slate-900 font-times">Mrs. Lalitha Bai</h4>
              <p className="text-xs text-[#1e3a8a] font-medium mt-0.5">Director &amp; Chief Financial Officer (CFO)</p>
              <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1 text-center w-full">
                <div><strong>Qualification:</strong> BBM</div>
                <div><strong>Focus:</strong> Research Grants, Workshop Coordination, Institutional Partnerships</div>
              </div>
            </div>

            {/* 6. "It May Be You" Recruitment Card */}
            <div className="bg-[#dbeafe] text-slate-900 rounded-xl p-6 text-center flex flex-col items-center justify-between border border-blue-200 h-full shadow-2xs hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-dashed border-[#1e3a8a]/40 mb-3 flex items-center justify-center text-[#1e3a8a] font-times text-3xl font-light">
                  +
                </div>
                <h4 className="text-base sm:text-lg font-normal text-slate-900 font-times">It May Be You!</h4>
                <p className="text-xs text-[#1e3a8a] font-medium mt-1">Join Us !</p>
                <p className="text-xs text-slate-600 mt-2 font-times italic">
                  Inviting Ph.D. researchers and industry computational chemists for hybrid workshop sessions.
                </p>
              </div>
              <button
                onClick={onJoinTeam}
                className="mt-6 w-full py-2.5 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-normal text-xs sm:text-sm rounded-md transition cursor-pointer font-times"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
