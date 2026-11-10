import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Clock, Info } from 'lucide-react';
import { ORDERED_SERVICES } from '../data/servicesData';
import { calculateConsultationEstimate, BASE_SERVICE_PRICES } from '../utils/pricing';

interface ConsultationEstimatorProps {
  onBookConsultation: (serviceIds: string[]) => void;
}

export const ConsultationEstimator: React.FC<ConsultationEstimatorProps> = ({
  onBookConsultation,
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(['molecular-docking']);
  const [ligandCount, setLigandCount] = useState<number>(3);
  const [isAcademic, setIsAcademic] = useState<boolean>(false);
  const [currency, setCurrency] = useState<'INR' | 'NPR' | 'USD'>('INR');

  const currencySymbol = currency === 'INR' ? '₹' : currency === 'NPR' ? 'NPR ' : '$';

  const toggleService = (id: string) => {
    setSelectedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      // Auto-adjust slider if QSAR (min 15) or Pharmacophore (min 5) is newly selected
      if (!prev.includes(id)) {
        const minReq = BASE_SERVICE_PRICES[id]?.minCompounds ?? 1;
        if (ligandCount < minReq) {
          setLigandCount(minReq);
        }
      }
      return next;
    });
  };

  // Determine highest minimum compounds required among selected services
  const minCompoundsRequired = selectedIds.reduce((maxMin, id) => {
    const minC = BASE_SERVICE_PRICES[id]?.minCompounds ?? 1;
    return Math.max(maxMin, minC);
  }, 1);

  const effectiveLigandCount = Math.max(minCompoundsRequired, ligandCount);

  const estimate = calculateConsultationEstimate({
    serviceIds: selectedIds,
    ligandCount: effectiveLigandCount,
    isAcademicScholar: isAcademic,
    currency,
  });

  const hasPerCompoundService = selectedIds.some(
    (id) => BASE_SERVICE_PRICES[id]?.unitType === 'per_ligand'
  );
  const hasFlexibleService = selectedIds.some(
    (id) => BASE_SERVICE_PRICES[id]?.unitType === 'flexible'
  );
  const hasPricedService = selectedIds.some(
    (id) => BASE_SERVICE_PRICES[id] && BASE_SERVICE_PRICES[id].unitType !== 'flexible'
  );

  const hasQsarSelected = selectedIds.some((id) => ['qsar-study', '3d-qsar'].includes(id));
  const hasPharmacophoreSelected = selectedIds.includes('pharmacophore-modeling');

  return (
    <div className="bg-white rounded-xl border border-slate-300 shadow-sm p-5 sm:p-8 font-times">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="text-xs font-mono font-semibold text-blue-800 uppercase tracking-wider">
            In Silico &amp; Publication Pricing Calculator
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1 font-times">
            Configure Your Research Project
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Select computational or academic modules and compound count for an instant fee estimate.
          </p>
        </div>

        {/* Currency Switcher (India INR, Nepal NPR, International USD) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg self-start sm:self-auto shrink-0 font-times">
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
            onClick={() => setCurrency('NPR')}
            className={`px-3 py-1 text-xs font-semibold rounded cursor-pointer transition ${
              currency === 'NPR' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            NPR (&#2352;&#2370;)
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-80 overflow-y-auto p-1">
            {ORDERED_SERVICES.map((svc) => {
              const isSelected = selectedIds.includes(svc.id);
              const priceCfg = BASE_SERVICE_PRICES[svc.id];
              const priceText = priceCfg
                ? priceCfg.unitType === 'flexible'
                  ? priceCfg.unitLabel
                  : currency === 'INR'
                    ? `₹${priceCfg.inr.toLocaleString()} ${priceCfg.unitLabel}`
                    : currency === 'NPR'
                      ? `NPR ${priceCfg.npr.toLocaleString()} ${priceCfg.unitLabel}`
                      : `$${priceCfg.usd} ${priceCfg.unitLabel}`
                : '';

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
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold font-times truncate">{svc.title}</span>
                    </div>
                    {priceText && (
                      <div className="text-[11px] font-bold text-[#1e3a8a] mt-0.5">
                        {priceText}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Compound Count Slider */}
          {hasPerCompoundService && (
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                <label className="flex items-center justify-between text-xs font-medium text-slate-700 mb-1.5">
                  <span>Number of Compounds / Ligands:</span>
                  <span className="font-mono font-bold text-blue-900 text-sm">
                    {effectiveLigandCount} {effectiveLigandCount === 1 ? 'Compound' : 'Compounds'}
                  </span>
                </label>
                <input
                  type="range"
                  min={minCompoundsRequired}
                  max="50"
                  value={effectiveLigandCount}
                  onChange={(e) => setLigandCount(parseInt(e.target.value, 10))}
                  className="w-full accent-blue-800 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>{minCompoundsRequired} Compound{minCompoundsRequired > 1 ? 's (Min)' : ''}</span>
                  <span>25 Compounds</span>
                  <span>50 Compounds</span>
                </div>
              </div>

              {(hasQsarSelected || hasPharmacophoreSelected) && (
                <div className="flex items-start gap-2 text-xs text-blue-900 bg-blue-50/80 border border-blue-200 px-3 py-2 rounded-lg">
                  <Info className="w-4 h-4 text-[#1e3a8a] shrink-0 mt-0.5" />
                  <div>
                    {hasQsarSelected && (
                      <div>
                        <strong>QSAR Modeling:</strong> Minimum 15 compounds needed (
                        {currency === 'INR' ? '₹700' : currency === 'NPR' ? 'NPR 1,120' : '$9'} per compound).
                      </div>
                    )}
                    {hasPharmacophoreSelected && (
                      <div>
                        <strong>Pharmacophore Modeling:</strong> Minimum 5 compounds needed (
                        {currency === 'INR' ? '₹1,000' : currency === 'NPR' ? 'NPR 1,600' : '$12'} per compound).
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

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
              Apply Academic &amp; University Scholar Subsidy (20% Off for M.Pharm, M.Sc, Ph.D. &amp; Postdoc researchers)
            </label>
          </div>
        </div>

        {/* Right Column: Calculated Cost Card */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-xl flex flex-col justify-between border border-slate-800">
          <div>
            <div className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wider">
              Preliminary Estimation
            </div>

            <div className="mt-4 space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal:</span>
                <span className="font-mono text-slate-200">
                  {!hasPricedService && hasFlexibleService
                    ? 'Flexible (Variable)'
                    : `${currencySymbol}${estimate.subtotal.toLocaleString()}${hasFlexibleService ? ' + Flexible' : ''}`}
                </span>
              </div>

              {isAcademic && estimate.discountAmount > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Academic Subsidy (20%):</span>
                  <span className="font-mono">
                    -{currencySymbol}{estimate.discountAmount.toLocaleString()}
                  </span>
                </div>
              )}

              <div className="pt-3 border-t border-slate-800 flex justify-between items-baseline">
                <span className="text-sm font-semibold text-white">Estimated Total:</span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-blue-400 text-right">
                  {!hasPricedService && hasFlexibleService
                    ? 'Flexible'
                    : `${currencySymbol}${estimate.total.toLocaleString()}${hasFlexibleService ? ' + Flexible' : ''}`}
                </span>
              </div>
            </div>

            {/* Turnaround Time info */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Estimated Turnaround: <strong className="text-white font-mono">{estimate.estimatedDays} Business Days</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Includes Raw Data Files &amp; Publication-Ready Report</span>
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
