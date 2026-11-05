import React from 'react';
import { X, ExternalLink, ShieldCheck, Download } from 'lucide-react';
import { PartnerResource } from '../types';

interface ResourceModalProps {
  resource: PartnerResource | null;
  onClose: () => void;
  onRequestTrial: () => void;
}

export const ResourceModal: React.FC<ResourceModalProps> = ({
  resource,
  onClose,
  onRequestTrial,
}) => {
  if (!resource) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-fadeIn">
        {/* Banner image */}
        <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
          <img
            src={resource.image}
            alt={resource.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white bg-black/40 hover:bg-black/60 rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-[11px] font-semibold text-white bg-[#17a8e3] px-2.5 py-1 rounded-md">
              {resource.tag}
            </span>
            <h2 className="text-xl font-bold text-white mt-1.5 line-clamp-2">
              {resource.title}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            {resource.description}
          </p>

          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-1.5">
            <div className="flex items-center gap-2 font-semibold text-slate-800">
              <ShieldCheck className="w-4 h-4 text-[#17a8e3]" />
              <span>Official Cisco Meraki Partner Resource</span>
            </div>
            <p>
              Global IT Technology is an authorized Cisco and Cisco Meraki partner in Australia. We provide certified proof-of-concept testing, discounted equipment quotes, and complete cloud deployment.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => {
                onClose();
                onRequestTrial();
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#17a8e3] hover:bg-[#1293c9] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-sm cursor-pointer"
            >
              Request Free Cisco Hardware Trial
            </button>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-1.5 text-center"
            >
              <span>Open Online Resource</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
