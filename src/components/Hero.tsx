import React from 'react';
import { ArrowRight, Microscope, Database, FileCheck, ShieldCheck } from 'lucide-react';
import heroImg from '../assets/images/hero_biomolecular_docking_1793813246445.jpg';

const CLOUDINARY_HERO_VIDEO_URL =
  import.meta.env.VITE_CLOUDINARY_VIDEO_URL ||
  'https://res.cloudinary.com/zcvc3fdh/video/upload/v1793949446/justmed_video_no_gemini_logo.mp4';

interface HeroProps {
  onExploreServices: () => void;
  onOpenConsultation: () => void;
  onViewWorkshops: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreServices,
  onOpenConsultation,
  onViewWorkshops,
}) => {
  return (
    <div className="relative bg-[#020617] text-white overflow-hidden border-b border-blue-950/60 min-h-[calc(100vh-5.5rem)] sm:min-h-[calc(100vh-6.5rem)] lg:min-h-[calc(100vh-7rem)] flex items-center font-times">
      {/* Dynamic Cloudinary background animation video full screen with 85% opacity */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroImg}
          preload="auto"
          className="w-full h-full object-cover object-[center_28%] opacity-85 scale-[1.08] origin-top"
        >
          <source src={CLOUDINARY_HERO_VIDEO_URL} type="video/mp4" />
          <img
            src={heroImg}
            alt="Biomolecular docking background"
            className="w-full h-full object-cover object-[center_28%] opacity-40 scale-[1.08] origin-top"
          />
        </video>
        {/* Soft gradient vignette letting 85% video vibrancy shine across the screen */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/85 via-[#020617]/40 to-transparent pointer-events-none" />
        {/* Bottom gradient fade ensuring bottom video date is completely masked under all aspect ratios */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content - Clean balanced layout matching reference screenshot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Main Headline in Times New Roman matching PDF */}
          <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-bold italic tracking-tight text-white mb-5 sm:mb-6 leading-[1.2] sm:leading-[1.18] font-times drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Transform Your Scientific Career with Hands-On In Silico Techniques &amp; Publication Consulting
          </h1>

          {/* Subtitle / Body Copy in Times New Roman */}
          <p className="font-times text-sm sm:text-base lg:text-lg text-blue-50 leading-relaxed mb-7 sm:mb-8 max-w-2xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
            Gain hands-on computational expertise in Molecular Docking, MD Simulations, QSAR, and ADME/Toxicity modeling with expert-led training, flexible scheduling, and verified SCI publication mentorship for career excellence.
          </p>

          {/* Action CTAs - Royal Purple button matching reference PDF */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 font-times">
            <button
              onClick={onExploreServices}
              className="px-7 py-3 bg-[#1d4ed8] hover:bg-[#1e3a8a] text-white font-semibold text-sm sm:text-base rounded-md shadow-md transition flex items-center justify-center gap-2 cursor-pointer border border-blue-400/30 font-times"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-blue-300/40 font-semibold text-sm sm:text-base rounded-md transition cursor-pointer text-center font-times"
            >
              Estimate Consultation Quote
            </button>

            <button
              onClick={onViewWorkshops}
              className="px-4 py-2.5 text-blue-200 hover:text-white text-sm sm:text-base font-medium transition cursor-pointer underline-offset-4 hover:underline text-center font-times"
            >
              Register for Workshops &rarr;
            </button>
          </div>

          {/* Academic Trust Badges - Uniformly aligned on Mobile, Tablet, and Laptop */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-blue-800/50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm text-blue-100 font-times">
            <div className="flex items-center gap-2.5 bg-blue-950/50 border border-blue-800/60 rounded-lg px-3.5 py-2.5">
              <Microscope className="w-4 h-4 text-blue-300 shrink-0" />
              <span className="truncate">In Silico Drug Discovery</span>
            </div>
            <div className="flex items-center gap-2.5 bg-blue-950/50 border border-blue-800/60 rounded-lg px-3.5 py-2.5">
              <Database className="w-4 h-4 text-blue-300 shrink-0" />
              <span className="truncate">GROMACS &amp; Vina HPC</span>
            </div>
            <div className="flex items-center gap-2.5 bg-blue-950/50 border border-blue-800/60 rounded-lg px-3.5 py-2.5">
              <FileCheck className="w-4 h-4 text-blue-300 shrink-0" />
              <span className="truncate">Q1/Q2 Manuscript Prep</span>
            </div>
            <div className="flex items-center gap-2.5 bg-blue-950/50 border border-blue-800/60 rounded-lg px-3.5 py-2.5">
              <ShieldCheck className="w-4 h-4 text-blue-300 shrink-0" />
              <span className="truncate">Verified Scholar Proof</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
