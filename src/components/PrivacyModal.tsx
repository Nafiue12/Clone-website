import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-fadeIn">
        {/* Header */}
        <div className="bg-[#101e38] text-white p-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/10 text-[#17a8e3]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white">
                Privacy Policy
              </h2>
              <p className="text-xs text-slate-300">
                Global IT Technology — Commitment to Australian Privacy Principles (APPs)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-4 max-h-[70vh] overflow-y-auto text-sm text-slate-600 leading-relaxed">
          <p>
            Global IT Technology (ABN registered, Melbourne, Victoria) is committed to protecting your personal information and complying with the Australian Privacy Act 1988 (Cth) and Australian Privacy Principles (APPs).
          </p>

          <h3 className="text-base font-bold text-slate-900 pt-2">1. Collection of Information</h3>
          <p>
            We collect personal information that you provide directly to us through consultation requests, sales inquiries, and support correspondence, including your full name, email address, telephone number, company name, and service preferences.
          </p>

          <h3 className="text-base font-bold text-slate-900 pt-2">2. Use of Information</h3>
          <p>
            We only use your contact information to deliver IT managed services, respond to service inquiries, supply hardware and software quotes, and provide relevant technical support. We never sell, lease, or monetize your information.
          </p>

          <h3 className="text-base font-bold text-slate-900 pt-2">3. Data Security</h3>
          <p>
            All client information is safeguarded using multi-layer cybersecurity defenses, encrypted transmissions, and strict access controls matching Australian industry standards.
          </p>

          <h3 className="text-base font-bold text-slate-900 pt-2">4. Contacting Our Privacy Officer</h3>
          <p>
            If you have questions regarding this privacy policy or your personal data, contact us at:
            <br />
            <strong className="text-slate-800">Email:</strong> {COMPANY_INFO.generalEmail}
            <br />
            <strong className="text-slate-800">Postal:</strong> {COMPANY_INFO.address}
          </p>

          <div className="pt-4 border-t border-slate-200 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#17a8e3] hover:bg-[#1293c9] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
