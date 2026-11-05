import React from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../data/servicesData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onConsult: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onConsult,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-service-title"
      >
        {/* Modal Header */}
        <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-slate-200 flex items-start justify-between gap-3 bg-slate-50">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-700 uppercase tracking-wider mb-1">
              <span>{service.category === 'in-silico' ? 'In Silico Drug Discovery' : 'Academic & Publication Support'}</span>
            </div>
            <h3 id="modal-service-title" className="text-lg sm:text-xl font-bold text-slate-900 font-sans-modern">
              {service.title}
            </h3>
            <p className="font-times italic text-xs text-slate-600 mt-1">{service.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition shrink-0 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-sm">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
              Computational Overview &amp; Scope
            </h4>
            <p className="font-times text-slate-800 leading-relaxed bg-slate-50 p-3.5 sm:p-4 rounded-lg border border-slate-200 text-[13.5px] sm:text-[14px]">
              {service.description}
            </p>
          </div>

          {/* Sample Metrics / Benchmark */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
              Empirical Output Benchmarks
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {service.sampleMetrics.map((metric, i) => (
                <div key={i} className="p-3 rounded-lg border border-slate-200 bg-white">
                  <div className="text-xs text-slate-500 font-times">{metric.label}</div>
                  <div className="text-sm sm:text-base font-mono font-bold text-cyan-800 mt-1">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Methodology */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
              Step-by-Step In Silico Protocol
            </h4>
            <ul className="space-y-2 font-times text-[13.5px] sm:text-[14px]">
              {service.methodology.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-800 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
              Academic &amp; Publication Deliverables
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-times text-xs">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700 bg-slate-50 p-2.5 rounded border border-slate-100">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Used */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
              Validated Software &amp; Platforms
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.toolsUsed.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-mono text-xs border border-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 font-sans-modern">
          <div className="font-times italic text-xs text-slate-500 text-center sm:text-left">
            Consultation turnaround typically 3&ndash;7 working days
          </div>
          <div className="flex items-center justify-end gap-2.5">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 border border-slate-300 rounded-lg hover:bg-white transition cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onConsult(service.id);
              }}
              className="flex-1 sm:flex-initial px-4 py-2 text-xs font-semibold text-white bg-cyan-800 hover:bg-cyan-900 rounded-lg transition cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Request Project Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
