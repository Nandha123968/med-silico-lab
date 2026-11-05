import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { ORDERED_SERVICES } from '../data/servicesData';
import { calculateConsultationEstimate } from '../utils/pricing';

interface ConsultationEstimatorProps {
  onBookConsultation: (serviceIds: string[]) => void;
}

export const ConsultationEstimator: React.FC<ConsultationEstimatorProps> = ({
  onBookConsultation,
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(['molecular-docking', 'adme-prediction']);
  const [ligandCount, setLigandCount] = useState<number>(3);
  const [trajectoryNs, setTrajectoryNs] = useState<number>(50);
  const [isAcademic, setIsAcademic] = useState<boolean>(true);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  const toggleService = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const estimate = calculateConsultationEstimate({
    serviceIds: selectedIds,
    ligandCount,
    mdTrajectoryNs: trajectoryNs,
    isAcademicScholar: isAcademic,
    currency,
  });

  const hasDockingOrAdmet = selectedIds.some((id) =>
    ['molecular-docking', 'adme-prediction', 'toxicity-prediction'].includes(id)
  );

  const hasMD = selectedIds.includes('md-simulations');

  return (
    <div className="bg-white rounded-xl border border-slate-300 shadow-sm p-5 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="text-xs font-mono font-semibold text-blue-800 uppercase tracking-wider">
            In Silico Feasibility &amp; Pricing Calculator
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1 font-times">
            Configure Your Research Project
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Select computational modules and parameters for an instant fee estimate.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-lg self-start sm:self-auto shrink-0 font-times">
          <button
            type="button"
            onClick={() => setCurrency('INR')}
            className={`px-3 py-1 text-xs font-semibold rounded cursor-pointer transition ${
              currency === 'INR' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            INR (&#8377;)
          </button>
          <button
            type="button"
            onClick={() => setCurrency('USD')}
            className={`px-3 py-1 text-xs font-semibold rounded cursor-pointer transition ${
              currency === 'USD' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            USD ($)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
        {/* Left Column: Service Selection Matrix */}
        <div className="lg:col-span-2 space-y-4">
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            Select Services Included in Project ({selectedIds.length} chosen)
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto p-1">
            {ORDERED_SERVICES.map((svc) => {
              const isSelected = selectedIds.includes(svc.id);
              return (
                <button
                  key={svc.id}
                  onClick={() => toggleService(svc.id)}
                  type="button"
                  className={`flex items-start gap-2.5 p-3 rounded-lg border text-left transition cursor-pointer text-xs ${
                    isSelected
                      ? 'border-blue-800 bg-blue-50/50 text-slate-900 font-medium'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className={`w-4 h-4 rounded shrink-0 mt-0.5 flex items-center justify-center border ${
                    isSelected ? 'bg-blue-800 border-blue-800 text-white' : 'border-slate-300 bg-white'
                  }`}>
                    {isSelected && <Check className="w-3 h-3" />}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold font-times truncate">{svc.title}</div>
                    <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{svc.tagline}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Parameters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            {hasDockingOrAdmet && (
              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                <label className="flex items-center justify-between text-xs font-medium text-slate-700 mb-1.5">
                  <span>Number of Small Molecules / Ligands:</span>
                  <span className="font-mono font-bold text-blue-900">{ligandCount}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="25"
                  value={ligandCount}
                  onChange={(e) => setLigandCount(parseInt(e.target.value, 10))}
                  className="w-full accent-blue-800 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>1 Ligand</span>
                  <span>10 Ligands</span>
                  <span>25 Ligands</span>
                </div>
              </div>
            )}

            {hasMD && (
              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                <label className="flex items-center justify-between text-xs font-medium text-slate-700 mb-1.5">
                  <span>MD Trajectory Length (GROMACS):</span>
                  <span className="font-mono font-bold text-blue-900">{trajectoryNs} ns</span>
                </label>
                <input
                  type="range"
                  min="20"
                  max="200"
                  step="10"
                  value={trajectoryNs}
                  onChange={(e) => setTrajectoryNs(parseInt(e.target.value, 10))}
                  className="w-full accent-blue-800 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>20 ns</span>
                  <span>100 ns</span>
                  <span>200 ns</span>
                </div>
              </div>
            )}
          </div>

          {/* Academic Discount Checkbox */}
          <div className="flex items-start sm:items-center gap-2.5 pt-2">
            <input
              type="checkbox"
              id="academicDiscount"
              checked={isAcademic}
              onChange={(e) => setIsAcademic(e.target.checked)}
              className="w-4 h-4 mt-0.5 sm:mt-0 text-blue-800 rounded border-slate-300 accent-blue-800 cursor-pointer shrink-0"
            />
            <label htmlFor="academicDiscount" className="text-xs text-slate-700 cursor-pointer font-medium leading-snug">
              Apply Academic &amp; University Scholar Subsidy (20% Off for M.Sc, Ph.D. &amp; Postdoc researchers)
            </label>
          </div>
        </div>

        {/* Right Column: Calculated Cost Card */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-xl flex flex-col justify-between border border-slate-800">
          <div>
            <div className="text-xs font-mono uppercase text-blue-500 font-semibold tracking-wider">
              Preliminary Estimation
            </div>

            <div className="mt-4 space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Computational Subtotal:</span>
                <span className="font-mono text-slate-200">
                  {currency === 'INR' ? `₹${estimate.subtotal.toLocaleString()}` : `$${estimate.subtotal.toLocaleString()}`}
                </span>
              </div>

              {isAcademic && estimate.discountAmount > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Academic Subsidy (20%):</span>
                  <span className="font-mono">
                    -{currency === 'INR' ? `₹${estimate.discountAmount.toLocaleString()}` : `$${estimate.discountAmount.toLocaleString()}`}
                  </span>
                </div>
              )}

              <div className="pt-3 border-t border-slate-800 flex justify-between items-baseline">
                <span className="text-sm font-semibold text-white">Estimated Total:</span>
                <span className="text-2xl font-bold font-mono text-blue-500">
                  {currency === 'INR' ? `₹${estimate.total.toLocaleString()}` : `$${estimate.total.toLocaleString()}`}
                </span>
              </div>
            </div>

            {/* Turnaround Time info */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Estimated Turnaround: <strong className="text-white font-mono">{estimate.estimatedDays} Business Days</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Includes Raw PDB Trajectories &amp; Publication Report</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onBookConsultation(selectedIds)}
            disabled={selectedIds.length === 0}
            className="mt-6 w-full py-3 bg-blue-800 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition cursor-pointer flex items-center justify-center gap-2 font-times"
          >
            <span>Formalize Project Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
