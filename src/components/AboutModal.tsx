import React from 'react';
import { X, CheckCircle, Shield, Award, Users, HeartHandshake } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-fadeIn">
        {/* Header */}
        <div className="bg-[#101e38] text-white p-6 sm:p-8 flex items-start justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#17a8e3] mb-1">
              About Global IT Technology
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              How We Work &amp; Our Commitment
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Australian family-owned IT service provider founded and operating in Melbourne.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Founder Quote */}
          <div className="p-5 bg-sky-50 rounded-xl border border-sky-100">
            <h3 className="text-base font-bold text-slate-900 mb-2">Our Founding Philosophy</h3>
            <p className="text-sm text-slate-700 leading-relaxed italic">
              &ldquo;Based on seeing clients under constant pressure to purchase overpriced items that they do not necessarily need, Global IT Technology was founded with a single mission: to create genuine, trustworthy relationships with our customers. We only recommend technology that actually solves your problems and provides measurable business value.&rdquo;
            </p>
            <p className="text-xs font-semibold text-[#17a8e3] mt-2">
              — Founder &amp; Director, Global IT Technology (20+ Years in Telecommunications &amp; Technology)
            </p>
          </div>

          {/* Pillars of How We Work */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">How We Work</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <HeartHandshake className="w-5 h-5 text-[#17a8e3]" />
                  <span>Transparent &amp; Flexible</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No predatory lock-in contracts or surprise billing. We agree on fixed, predictable pricing before starting any work.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Shield className="w-5 h-5 text-[#17a8e3]" />
                  <span>ACMA Registered Cablers</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our telecommunications and network cabling technicians are fully certified by the Australian Communications and Media Authority.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Award className="w-5 h-5 text-[#17a8e3]" />
                  <span>Tier-1 Hardware Alliances</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We partner directly with Cisco, Microsoft, Meraki, Dicker Data, and Leader to source commercial hardware at true wholesale prices.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Users className="w-5 h-5 text-[#17a8e3]" />
                  <span>Local Melbourne Team</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  When you need support, you speak directly with experienced technicians and engineers based right here in Australia.
                </p>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
            <span className="text-xs text-slate-600">
              Postal: {COMPANY_INFO.address}
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#17a8e3] hover:bg-[#1293c9] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-sm cursor-pointer"
            >
              Contact Our Melbourne Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
