import React, { useState } from 'react';
import { ExternalLink, Search, X, BookOpen } from 'lucide-react';
import resourcesBanner from '../assets/images/resources_hero_banner.jpg';
import {
  FULL_SOFTWARE_CATALOG,
  FULL_DATABASES_LIST,
  FULL_STUDY_MANUALS,
  StudyManualItem
} from '../data/resourcesCatalog';
import { sanitizeText } from '../utils/security';

export const ResourcesSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGuide, setSelectedGuide] = useState<StudyManualItem | null>(null);

  const safeQuery = sanitizeText(searchQuery, 80).toLowerCase().trim();

  const filteredSoftware = FULL_SOFTWARE_CATALOG.filter(
    (s) => !safeQuery || s.name.toLowerCase().includes(safeQuery)
  );

  return (
    <section id="resources" className="bg-white font-times text-slate-900 border-b border-slate-200">
      
      {/* 1. Resources Top Hero Banner matching PDF */}
      <div className="relative w-full overflow-hidden bg-[#0d0518] min-h-[180px] sm:min-h-[220px] md:min-h-[260px] flex items-center justify-center">
        <img
          src={resourcesBanner}
          alt="Resources Background Banner"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-transparent to-[#020617]/70" />
        <div className="relative z-10 text-center px-4 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-wide font-times drop-shadow-md">
            Resources
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        {/* 2. SOFTWARE SECTION */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal uppercase text-[#1e3a8a] tracking-wider font-times">
              SOFTWARE
            </h2>
            <div className="w-16 h-0.5 bg-[#1e3a8a] mx-auto mt-2" />
          </div>

          {/* Quick Filter Bar */}
          <div className="mb-8 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
            <span className="text-xs sm:text-sm font-times italic text-slate-500">
              Showing <span className="font-bold text-[#1e3a8a]">{filteredSoftware.length}</span> computational biology &amp; chemistry packages
            </span>
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                maxLength={80}
                placeholder="Search software (e.g. GROMACS, PyMOL, Vina)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-[#1e3a8a] font-times"
              />
            </div>
          </div>

          {/* Software Grid matching the 6-7 column PDF layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-4">
            {filteredSoftware.map((tool) => (
              <a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit official ${tool.name} website`}
                className="bg-white rounded-lg border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#1e3a8a] transition-all duration-200 p-3 sm:p-4 flex flex-col items-center justify-between text-center group cursor-pointer h-full min-h-[130px] sm:min-h-[145px]"
              >
                <div className="w-full flex-1 flex items-center justify-center p-1">
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    className="max-h-12 sm:max-h-14 max-w-[110px] w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="w-full pt-2 border-t border-slate-100 mt-2">
                  <span className="text-xs sm:text-[13px] font-times text-slate-800 font-medium leading-tight group-hover:text-[#1e3a8a] transition-colors line-clamp-1 block">
                    {tool.name}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {filteredSoftware.length === 0 && (
            <div className="text-center py-12 text-slate-500 font-times italic">
              No software found matching &ldquo;{searchQuery}&rdquo;. Try another name.
            </div>
          )}
        </div>

        {/* 3. DATABASES SECTION */}
        <div className="mb-16 sm:mb-20 pt-10 border-t border-slate-200">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal uppercase text-[#1e3a8a] tracking-wider font-times">
              DATABASES
            </h2>
            <div className="w-16 h-0.5 bg-[#1e3a8a] mx-auto mt-2" />
          </div>

          {/* Database Pills in 2 uniform rows matching Page 2 of PDF */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-5xl mx-auto">
            {FULL_DATABASES_LIST.map((db) => (
              <a
                key={db.id}
                href={db.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Access ${db.fullName}`}
                className="bg-white border border-slate-300 rounded-md px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-times text-slate-800 font-semibold shadow-2xs hover:shadow-xs hover:border-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition-all duration-150 cursor-pointer flex items-center gap-1.5"
              >
                <span>{db.name}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            ))}
          </div>
        </div>

        {/* 4. STUDY MATERIALS & MANUALS SECTION */}
        <div className="pt-10 border-t border-slate-200">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal uppercase text-[#1e3a8a] tracking-wider font-times">
              STUDY MATERIALS &amp; MANUALS
            </h2>
            <div className="w-16 h-0.5 bg-[#1e3a8a] mx-auto mt-2" />
          </div>

          {/* 2x2 Grid matching Page 2 of PDF */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {FULL_STUDY_MANUALS.map((manual) => (
              <div
                key={manual.id}
                className="bg-white rounded-lg border border-slate-200 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Visual Header Image */}
                  <div className="w-full h-48 sm:h-56 bg-slate-100 overflow-hidden border-b border-slate-200">
                    <img
                      src={manual.image}
                      alt={manual.titleStrip}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>

                  {/* Gold/Yellow Title Strip matching PDF */}
                  <div className="bg-[#f59e0b] px-4 py-2.5 text-slate-900 font-times font-bold text-xs sm:text-sm uppercase tracking-wide border-b border-amber-600/30">
                    {manual.titleStrip}
                  </div>

                  {/* Body Text */}
                  <div className="p-5 font-times">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {manual.summary}
                    </p>
                  </div>
                </div>

                {/* Footer with Read More -> */}
                <div className="px-5 pb-5 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedGuide(manual)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1e3a8a] hover:text-[#1e40af] transition cursor-pointer font-times hover:underline"
                  >
                    <span>Read More &rarr;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 5. Interactive Study Guide Modal */}
      {selectedGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs font-times">
          <div className="bg-white rounded-2xl shadow-2xl border border-blue-200 max-w-2xl w-full p-5 sm:p-7 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1e3a8a] flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1e3a8a]">
                    {selectedGuide.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 font-times">
                    {selectedGuide.fullGuideTitle}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedGuide(null)}
                className="text-slate-400 hover:text-[#1e3a8a] p-1 shrink-0 cursor-pointer transition"
                aria-label="Close guide"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-4 text-xs font-times">
              <p className="text-slate-700 bg-blue-50/70 p-4 rounded-xl border border-blue-200 leading-relaxed text-sm">
                {selectedGuide.summary}
              </p>

              <div>
                <h4 className="font-semibold uppercase text-[#1e3a8a] mb-3 text-xs tracking-wider">
                  Protocol Execution Steps
                </h4>
                <ol className="space-y-2.5">
                  {selectedGuide.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="w-6 h-6 rounded-full bg-[#1e3a8a] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <code className="text-slate-800 text-xs break-all font-mono leading-relaxed">
                        {step}
                      </code>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedGuide(null)}
                className="px-5 py-2.5 bg-[#1e3a8a] text-white text-xs font-semibold rounded-xl hover:bg-[#1e40af] cursor-pointer transition font-times"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
