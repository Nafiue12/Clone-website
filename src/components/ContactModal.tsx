import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, CheckCircle, Send } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/siteData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: defaultService,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-fadeIn">
        {/* Header */}
        <div className="bg-[#101e38] text-white p-6 sm:p-8 flex items-start justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#17a8e3] mb-1">
              Connect With Global IT Technology
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Get in Touch or Request a Consultation
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Speak with our Melbourne IT advisors for tailored guidance with zero sales pressure.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Contact Info Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 bg-slate-50 border-b border-slate-200 text-xs text-slate-700 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          <a
            href={COMPANY_INFO.phoneHref}
            className="p-3.5 flex items-center gap-2 hover:bg-slate-100 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#17a8e3] flex-shrink-0" />
            <div className="truncate">
              <span className="block text-[10px] text-slate-600 uppercase font-semibold">Call Now</span>
              <span className="font-bold text-slate-900">{COMPANY_INFO.phone}</span>
            </div>
          </a>
          <a
            href={`mailto:${COMPANY_INFO.salesEmail}`}
            className="p-3.5 flex items-center gap-2 hover:bg-slate-100 transition-colors"
          >
            <Mail className="w-4 h-4 text-[#17a8e3] flex-shrink-0" />
            <div className="truncate">
              <span className="block text-[10px] text-slate-600 uppercase font-semibold">Sales Email</span>
              <span className="font-bold text-slate-900">{COMPANY_INFO.salesEmail}</span>
            </div>
          </a>
          <div className="p-3.5 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#17a8e3] flex-shrink-0" />
            <div className="truncate">
              <span className="block text-[10px] text-slate-600 uppercase font-semibold">Headquarters</span>
              <span className="font-semibold text-slate-900">Melbourne, VIC</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Inquiry Received Successfully!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you for reaching out to Global IT Technology. One of our senior systems administrators or consultants will review your requirements and respond within one business day.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#17a8e3] hover:bg-[#1293c9] text-white text-sm font-semibold rounded-md shadow-sm cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Smith"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a8e3] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@yourcompany.com.au"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a8e3] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0400 000 000"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a8e3] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a8e3] focus:border-transparent bg-white"
                  >
                    <option value="">General Inquiry / Not Sure</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  How can we help your business? *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your IT setup, challenges, or goals..."
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a8e3] focus:border-transparent resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <p className="text-[11px] text-slate-600">
                  We respect your privacy and will never share your details with third parties.
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-[#17a8e3] hover:bg-[#1293c9] text-white text-sm font-bold uppercase tracking-wider rounded-lg transition-all shadow-sm flex items-center gap-2 cursor-pointer disabled:opacity-50 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
