import React from 'react';
import { X, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY_INFO } from '../data/siteData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestConsultation: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onRequestConsultation,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-fadeIn">
        {/* Banner with image backdrop */}
        <div className="relative h-44 bg-slate-900 overflow-hidden flex items-end p-6 sm:p-8">
          <img
            src={service.bgImage}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          <div className="relative z-10 w-full flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#17a8e3] mb-1">
                Global IT Technology Service
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {service.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Service Overview</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3">Key Capabilities &amp; Deliverables</h3>
            <div className="space-y-2.5">
              {service.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#17a8e3] flex-shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Phone className="w-4 h-4 text-[#17a8e3]" />
              <span>Questions? Call us directly at <strong className="text-slate-900">{COMPANY_INFO.phone}</strong></span>
            </div>
            <button
              onClick={() => {
                onClose();
                onRequestConsultation(service.id);
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#17a8e3] hover:bg-[#1293c9] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
            >
              <span>Request Quote / Info</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
