import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ArrowUp,
  Facebook,
  Linkedin,
  Shield,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/siteData';

interface FooterProps {
  onOpenContact: () => void;
  onOpenAbout: () => void;
  onSelectService: (serviceId: string) => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenContact,
  onOpenAbout,
  onSelectService,
  onOpenPrivacy,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (anchorId: string) => {
    if (anchorId === 'top') {
      scrollToTop();
      return;
    }
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#0b1426] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white/95 rounded-lg p-2.5 inline-block shadow-sm">
              <img
                src="/images/logo.png"
                alt="Global IT Technology"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              Our solutions are designed to increase the efficiency and reliability of your systems so that you can focus on the aspects of your business that really matter to you.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#17a8e3] text-white flex items-center justify-center transition-colors"
                aria-label="Global IT on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#17a8e3] text-white flex items-center justify-center transition-colors"
                aria-label="Global IT on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              Quick links
            </h3>
            <div className="w-8 h-0.5 bg-[#17a8e3]" />
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('top')}
                  className="hover:text-[#17a8e3] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#17a8e3]" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:text-[#17a8e3] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#17a8e3]" />
                  <span>About us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-[#17a8e3] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#17a8e3]" />
                  <span>How we work</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-[#17a8e3] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#17a8e3]" />
                  <span>Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('partners')}
                  className="hover:text-[#17a8e3] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#17a8e3]" />
                  <span>Our Partners</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-[#17a8e3] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#17a8e3]" />
                  <span>Contact us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              Services
            </h3>
            <div className="w-8 h-0.5 bg-[#17a8e3]" />
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectService(s.id)}
                    className="hover:text-[#17a8e3] transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#17a8e3] flex-shrink-0" />
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              Contact info
            </h3>
            <div className="w-8 h-0.5 bg-[#17a8e3]" />
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#17a8e3] flex-shrink-0 mt-1" />
                <span className="text-slate-300">
                  {COMPANY_INFO.addressLine1}
                  <br />
                  {COMPANY_INFO.addressLine2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#17a8e3] flex-shrink-0" />
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="text-slate-300 hover:text-white transition-colors font-medium"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#17a8e3] flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.generalEmail}`}
                  className="text-slate-300 hover:text-[#17a8e3] transition-colors"
                >
                  {COMPANY_INFO.generalEmail}
                </a>
              </li>
              <li className="pt-2 text-xs text-slate-400">
                <span className="text-[#17a8e3] font-semibold">Sales:</span>{' '}
                <a
                  href={`mailto:${COMPANY_INFO.salesEmail}`}
                  className="hover:underline"
                >
                  {COMPANY_INFO.salesEmail}
                </a>
              </li>
              <li className="text-xs text-slate-400">
                <span className="text-[#17a8e3] font-semibold">Support:</span>{' '}
                <a
                  href={`mailto:${COMPANY_INFO.supportEmail}`}
                  className="hover:underline"
                >
                  {COMPANY_INFO.supportEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Global IT Technology. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy (PDF)
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-md bg-slate-800 hover:bg-[#17a8e3] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
