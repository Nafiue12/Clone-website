import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface AppointmentBarProps {
  onOpenContact: () => void;
}

export const AppointmentBar: React.FC<AppointmentBarProps> = ({ onOpenContact }) => {
  const [quickEmail, setQuickEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEmail || !quickEmail.includes('@')) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setQuickEmail('');
    }, 4000);
  };

  return (
    <section className="relative z-30 -mt-8 sm:-mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-6 sm:p-8 transition-transform">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Title & sales info */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
              Our dedicated sales team is here to help you find the right IT solution.
            </h2>
            <div className="mt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#17a8e3]/10 flex items-center justify-center text-[#17a8e3]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Sales: </span>
                  <a
                    href={`mailto:${COMPANY_INFO.salesEmail}`}
                    className="text-[#17a8e3] hover:underline font-medium"
                  >
                    {COMPANY_INFO.salesEmail}
                  </a>
                </div>
              </div>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <div className="text-slate-600">
                <span className="font-semibold text-slate-900">Support: </span>
                <a
                  href={`mailto:${COMPANY_INFO.supportEmail}`}
                  className="text-slate-700 hover:text-[#17a8e3] font-medium"
                >
                  {COMPANY_INFO.supportEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Consultation Action */}
          <div className="w-full lg:w-auto flex-shrink-0">
            {submitted ? (
              <div className="flex items-center gap-2 px-5 py-3 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-200 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Thank you! Our sales team will reach out shortly.</span>
              </div>
            ) : (
              <form
                onSubmit={handleQuickSubmit}
                className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto"
              >
                <div className="relative w-full sm:w-64">
                  <input
                    type="email"
                    value={quickEmail}
                    onChange={(e) => setQuickEmail(e.target.value)}
                    placeholder="Enter your business email"
                    required
                    className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#17a8e3] focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#17a8e3] hover:bg-[#1293c9] text-white text-sm font-bold uppercase tracking-wider rounded-md transition-all shadow-sm flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer active:scale-95"
                >
                  <span>Request Callback</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
