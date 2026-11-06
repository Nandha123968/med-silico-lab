import React from 'react';
import {
  Target,
  Compass,
  CheckCircle2,
  Award,
  Cpu,
  BookOpen,
  Clock,
  Video,
  Sparkles,
  FlaskConical,
  Binary,
  Dna,
  Microscope,
  Atom,
  FileText,
  Lightbulb,
  Layers,
  Activity,
  Check,
  GraduationCap,
  ShieldCheck,
  Network
} from 'lucide-react';
import labImg from '../assets/images/computational_lab_workstation_1793813247708.jpg';

interface AboutSectionProps {
  onJoinTeam: () => void;
  onExploreWorkshops: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onJoinTeam,
  onExploreWorkshops,
}) => {
  const objectives = [
    {
      num: '01',
      title: 'Practical Training',
      desc: 'Provide practical training in molecular docking, QSAR, pharmacophore modelling, and molecular dynamics simulations.',
      icon: Cpu,
    },
    {
      num: '02',
      title: 'Cheminformatics & AI',
      desc: 'Promote the use of cheminformatics, bioinformatics, and artificial intelligence in drug discovery.',
      icon: Binary,
    },
    {
      num: '03',
      title: 'Tutorials & Manuals',
      desc: 'Develop educational resources and step-by-step software tutorials for reproducible workflows.',
      icon: BookOpen,
    },
    {
      num: '04',
      title: 'Methodology Development',
      desc: 'Support students and researchers in computational methodology development and data interpretation.',
      icon: Lightbulb,
    },
    {
      num: '05',
      title: 'Scientific Writing & Publishing',
      desc: 'Encourage scientific writing, research communication, and publication-oriented learning for Q1/Q2 journals.',
      icon: FileText,
    },
    {
      num: '06',
      title: 'Experimental Validation',
      desc: 'Promote responsible use of computational predictions with appropriate experimental validation.',
      icon: ShieldCheck,
    },
  ];

  const researchAreas = [
    { title: 'Natural product-based drug discovery', icon: FlaskConical },
    { title: 'Synthetic compound & computational approach', icon: Atom },
    { title: 'Structure-based drug design (SBDD)', icon: Layers },
    { title: 'Ligand-based drug discovery (LBDD)', icon: Dna },
    { title: 'Network pharmacology & systems biology', icon: Network },
    { title: 'Molecular interaction & binding-energy analysis', icon: Activity },
    { title: 'QSAR and predictive modelling', icon: Binary },
    { title: 'Pharmacophore modelling & virtual screening', icon: Microscope },
    { title: 'Molecular dynamic simulation & Energy calculation (MMGBSA/MMPBSA)', icon: Cpu },
    { title: 'AI-driven molecular discovery', icon: Sparkles },
    { title: 'Computational toxicology & ADMET prediction', icon: ShieldCheck },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200 font-times">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1e3a8a] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <span>MED-SILICO LAB</span>
            <span>&bull;</span>
            <span>EST. 2026</span>
          </div>
          
          <div className="text-xs sm:text-sm text-slate-600 font-times tracking-wide uppercase font-semibold mb-2">
            Computational Drug Discovery | Pharmaceutical Research | Scientific Education
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight font-times leading-tight mb-3">
            About Med-Silico Lab
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl font-times italic text-[#1e3a8a] font-medium leading-snug">
            &ldquo;Transforming Pharmaceutical Research Through Computational Innovation.&rdquo;
          </p>

          <p className="font-times text-slate-600 mt-2 text-sm sm:text-base italic">
            Bridging Medicinal Chemistry and Computational Science.
          </p>
          <div className="w-20 h-0.5 bg-[#1e3a8a] mx-auto mt-4" />
        </div>

        {/* Who We Are & Laboratory Infrastructure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <div className="text-xs font-times font-semibold uppercase text-[#1e3a8a] tracking-wider mb-2">
              Empirical Foundations &amp; Platform Overview
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5 sm:mb-6 font-times">
              Who We Are
            </h2>
            <div className="space-y-4 font-times text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>Med-Silico Lab</strong> is a scientific and educational platform dedicated to advancing pharmaceutical research through computational approaches, medicinal chemistry, and modern drug discovery technologies.
              </p>
              <p>
                We aim to bridge the gap between conventional pharmaceutical sciences and emerging computational technologies by providing practical research guidance, scientific training, and computational drug discovery resources.
              </p>
              <p>
                Our platform supports students, research scholars, academicians, and pharmaceutical researchers in understanding and applying computational methods to real-world drug discovery challenges.
              </p>
            </div>

            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 font-times">
              <button
                onClick={onExploreWorkshops}
                className="px-6 py-2.5 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-medium text-sm rounded-md transition cursor-pointer text-center shadow-xs"
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

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 gap-3 mt-4 font-times">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center">
                <div className="text-xl font-bold text-[#1e3a8a]">100ns+</div>
                <div className="text-[11px] text-slate-600">GPU Trajectories</div>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center">
                <div className="text-xl font-bold text-[#1e3a8a]">Q1 / Q2</div>
                <div className="text-[11px] text-slate-600">Journal Mentorship</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision, Aim, and Mission Trinity Grid */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-times">
              Vision, Aim &amp; Mission
            </h3>
            <p className="font-times italic text-slate-600 text-xs sm:text-sm mt-1">
              Guiding our research excellence, educational initiatives, and global scientific community
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Left: Vision & Aim */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              {/* Vision Card */}
              <div className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#1e40af] text-white rounded-2xl p-6 sm:p-8 border border-blue-900 shadow-md relative overflow-hidden flex-1">
                <div className="w-12 h-12 rounded-lg bg-white/15 text-blue-200 flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 font-times">Our Vision</h4>
                <p className="font-times text-blue-100 text-sm sm:text-base leading-relaxed">
                  To become a recognized scientific platform for computational pharmaceutical research and education, empowering the next generation of researchers to integrate medicinal chemistry, computational science, and artificial intelligence into innovative drug discovery.
                </p>
              </div>

              {/* Aim Card */}
              <div className="bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#0f172a] text-white rounded-2xl p-6 sm:p-8 border border-blue-900 shadow-md relative overflow-hidden flex-1">
                <div className="w-12 h-12 rounded-lg bg-white/15 text-blue-200 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 font-times">Our Aim</h4>
                <p className="font-times text-blue-100 text-sm sm:text-base leading-relaxed">
                  To empower the pharmaceutical research community with the knowledge, skills, and computational resources necessary to explore, design, and evaluate potential drug molecules using modern in-silico approaches.
                </p>
              </div>
            </div>

            {/* Right: Mission Card */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#1e3a8a] flex items-center justify-center mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 font-times">Our Mission</h4>
                <p className="font-times italic text-slate-700 text-sm sm:text-base mb-5">
                  To make computational drug discovery accessible, practical, and scientifically meaningful by:
                </p>

                <ul className="space-y-3.5 text-sm sm:text-base text-slate-700 font-times">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] shrink-0 mt-0.5" />
                    <span>Delivering quality education in molecular modelling and computational drug discovery.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] shrink-0 mt-0.5" />
                    <span>Promoting reproducible and scientifically sound research methodologies.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] shrink-0 mt-0.5" />
                    <span>Supporting researchers in applying computational tools to pharmaceutical research.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] shrink-0 mt-0.5" />
                    <span>Encouraging interdisciplinary collaboration between medicinal chemistry, pharmaceutical sciences, bioinformatics, and computational chemistry.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] shrink-0 mt-0.5" />
                    <span>Bridging theoretical knowledge and practical research applications.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 font-times italic">
                Methodological rigor &bull; Open science &bull; Verified publication ethics
              </div>
            </div>
          </div>
        </div>

        {/* Objectives Section (1-6) */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="text-xs font-times font-semibold uppercase text-[#1e3a8a] tracking-wider mb-1">
              Core Milestones
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-times">Objectives</h3>
            <p className="font-times italic text-slate-600 text-xs sm:text-sm mt-1">
              Structured initiatives driving our computational education and scientific support
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 font-times">
            {objectives.map((obj) => {
              const IconComp = obj.icon;
              return (
                <div
                  key={obj.num}
                  className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#1e3a8a] transition-all duration-200 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1e3a8a] flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-[#1e3a8a] bg-blue-50 px-2.5 py-0.5 rounded-full font-times">
                        {obj.num}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-2 font-times">{obj.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-times">
                      {obj.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Research and Scientific Exploration (11 Key Research Areas) */}
        <div className="mb-16 sm:mb-20 bg-gradient-to-b from-[#fafafa] to-white p-6 sm:p-10 rounded-2xl border border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="text-xs font-times font-semibold uppercase text-[#1e3a8a] tracking-wider mb-1">
              Scientific Specializations
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-times">
              Research &amp; Scientific Exploration
            </h3>
            <p className="font-times italic text-slate-700 text-sm sm:text-base mt-2 leading-relaxed">
              Our research interests focus on integrating computational and pharmaceutical sciences to investigate molecular mechanisms and explore potential bioactive compounds.
            </p>
            <div className="w-16 h-0.5 bg-[#1e3a8a] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4 font-times">
            {researchAreas.map((area, idx) => {
              const IconComp = area.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-[#1e3a8a] transition-all duration-150 flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-md bg-blue-50 text-[#1e3a8a] flex items-center justify-center shrink-0 mt-0.5">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-bold block mb-0.5">Area {idx + 1}</span>
                    <span className="text-xs sm:text-sm text-slate-800 font-semibold leading-tight block">
                      {area.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us Grid */}
        <div className="mb-16 sm:mb-20 bg-[#f8f9fa] p-6 sm:p-10 rounded-2xl border border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-times">Why Us</h3>
            <p className="font-times italic text-slate-600 text-xs sm:text-sm mt-1">
              Our fundamental commitments to research quality and scholar success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 font-times">
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-100 shadow-2xs h-full">
              <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#1e3a8a] flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-times">Cutting-Edge Resources</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-times">
                Stay ahead with access to state-of-the-art computational tools, force fields, and GPU cluster workflows tailored to current scientific advancements.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-100 shadow-2xs h-full">
              <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#1e3a8a] flex items-center justify-center mb-4">
                <Video className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-times">Session Recordings</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-times">
                Access full recorded sessions anytime, allowing you to revisit trajectory setups, command syntaxes, and reinforce your understanding at your own pace.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-100 shadow-2xs h-full">
              <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#1e3a8a] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-times">Flexible Scheduling</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-times">
                Benefit from evening and weekend timings designed to accommodate busy university curricula, research duties, and international time zones.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-100 shadow-2xs h-full">
              <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#1e3a8a] flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-times">Expert Instructors</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-times">
                Learn directly from Ph.D. holders, postdocs, and seasoned research scientists with extensive practical publications in international journals.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-100 shadow-2xs h-full">
              <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#1e3a8a] flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-times">Comprehensive Curriculum</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-times">
                Our programs cover both theoretical thermodynamic principles and practical step-by-step in silico protocols applied to real therapeutic targets.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-100 shadow-2xs h-full">
              <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#1e3a8a] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-times">Practical Training</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-times">
                Our hands-on training ensures you gain independent simulation competence to analyze trajectories, troubleshoot errors, and publish with pride.
              </p>
            </div>
          </div>
        </div>

        {/* Team Members & Facilitators Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-times">Team Members</h3>
            <p className="font-times italic text-slate-600 text-xs sm:text-sm mt-1">
              Guided by computational chemists, pharmacology researchers, and academic educators
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto font-times">
            {/* 1. Shankar Thapa */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center flex flex-col items-center h-full shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 border-2 border-[#1e3a8a]/30 mb-4 overflow-hidden flex items-center justify-center text-[#1e3a8a] font-times text-2xl font-bold shrink-0 shadow-2xs">
                ST
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-times">Shankar Thapa</h4>
              <p className="text-xs text-[#1e3a8a] font-bold mt-0.5">Founder, @ Med-Silico Lab</p>
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
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-times">Sadik Shaik</h4>
              <p className="text-xs text-[#1e3a8a] font-bold mt-0.5">Supervisor &amp; Consultant, Pharmacology Research</p>
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
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-times">Mahalakshmi Suresha Biradar</h4>
              <p className="text-xs text-[#1e3a8a] font-bold mt-0.5">Expert CADD Research and Publication</p>
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
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-times">Dr. R. Shivakumar</h4>
              <p className="text-xs text-[#1e3a8a] font-bold mt-0.5">Senior Scientific Advisor &amp; Research Mentor</p>
              <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1 text-center w-full">
                <div><strong>Qualification:</strong> Ph.D. in Chemistry (NIT Karnataka)</div>
                <div><strong>Postdoc:</strong> POSTECH, South Korea</div>
                <div><strong>Expertise:</strong> DFT, Molecular Docking, MD Simulations</div>
              </div>
            </div>

            {/* 5. Mrs. Lalitha Bai */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center flex flex-col items-center h-full shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#dbeafe] border-2 border-[#1e3a8a]/30 mb-4 overflow-hidden flex items-center justify-center text-[#1e3a8a] font-times text-2xl font-bold shrink-0">
                LB
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-times">Mrs. Lalitha Bai</h4>
              <p className="text-xs text-[#1e3a8a] font-bold mt-0.5">Director &amp; Chief Financial Officer (CFO)</p>
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
                <h4 className="text-base sm:text-lg font-bold text-slate-900 font-times">It May Be You!</h4>
                <p className="text-xs text-[#1e3a8a] font-bold mt-1">Join Us !</p>
                <p className="text-xs text-slate-600 mt-2 font-times italic">
                  Inviting Ph.D. researchers and industry computational chemists for hybrid workshop sessions.
                </p>
              </div>
              <button
                onClick={onJoinTeam}
                className="mt-6 w-full py-2.5 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-medium text-xs sm:text-sm rounded-md transition cursor-pointer font-times shadow-xs"
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
