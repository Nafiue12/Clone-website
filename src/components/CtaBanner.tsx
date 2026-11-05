import React, { useState } from 'react';
import { Phone, Copy, Check, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface CtaBannerProps {
  onOpenContact: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenContact }) => {
  const [copied, setCopied] = useState(false);

  const copyPhone = () => {
    navigator.clipboard.writeText(COMPANY_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-[#17a8e3] to-[#0f8ec4] text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-white/10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
          Contact our team now:
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 my-6">
          <a
            href={COMPANY_INFO.phoneHref}
            className="inline-flex items-center gap-3 text-3xl sm:text-4xl md:text-5xl font-black text-white hover:text-white/90 transition-transform hover:scale-105 tracking-tight group"
          >
            <div className="p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
              <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <span>{COMPANY_INFO.phone}</span>
          </a>

          <button
            onClick={copyPhone}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white/15 hover:bg-white/25 rounded-md transition-colors text-white cursor-pointer"
            title="Copy phone number"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto mb-8 font-normal">
          Speak directly with our Melbourne-based IT specialists. We are ready to answer your questions and design a custom technology plan.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#17a8e3]" />
            <span>Book a Free IT Consultation</span>
          </button>
        </div>
      </div>
    </section>
  );
};
