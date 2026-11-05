import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/siteData';

interface HeaderProps {
  onOpenContact: () => void;
  onOpenAbout: () => void;
  onSelectService: (serviceId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenContact,
  onOpenAbout,
  onSelectService,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (anchorId: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);

    if (anchorId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(anchorId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md py-3'
            : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('top');
                }}
                className="inline-block transition-opacity hover:opacity-90 focus:outline-none"
                title="Global IT Technology"
              >
                <img
                  src="/images/logo.png"
                  alt="Global IT"
                  className="h-10 sm:h-12 w-auto object-contain"
                  onError={(e) => {
                    // Fallback to text lockup if image error
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.logo-fallback')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'logo-fallback font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-1.5';
                      fallback.innerHTML = '<span class="text-[#17a8e3]">GLOBAL</span><span>IT</span><span class="text-xs px-1.5 py-0.5 bg-slate-100 rounded text-slate-600 font-normal">TECHNOLOGY</span>';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <button
                onClick={() => handleNavClick('top')}
                className="px-3 py-2 text-[15px] font-semibold text-[#17a8e3] hover:text-[#1293c9] transition-colors focus:outline-none cursor-pointer"
              >
                Home
              </button>

              {/* About us dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick('about')}
                  className="px-3 py-2 text-[15px] font-semibold text-slate-700 hover:text-[#17a8e3] transition-colors flex items-center gap-1 focus:outline-none cursor-pointer"
                >
                  About us
                  <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                </button>

                {aboutDropdownOpen && (
                  <div className="absolute left-0 mt-0.5 w-48 bg-white rounded-lg shadow-xl border border-slate-100 py-2 animate-fadeIn z-50">
                    <button
                      onClick={() => {
                        setAboutDropdownOpen(false);
                        handleNavClick('about');
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#17a8e3] font-medium transition-colors"
                    >
                      About Our Story
                    </button>
                    <button
                      onClick={() => {
                        setAboutDropdownOpen(false);
                        onOpenAbout();
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#17a8e3] font-medium transition-colors"
                    >
                      How we work
                    </button>
                  </div>
                )}
              </div>

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick('services')}
                  className="px-3 py-2 text-[15px] font-semibold text-slate-700 hover:text-[#17a8e3] transition-colors flex items-center gap-1 focus:outline-none cursor-pointer"
                >
                  Services
                  <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute left-0 mt-0.5 w-60 bg-white rounded-lg shadow-xl border border-slate-100 py-2 animate-fadeIn z-50">
                    {SERVICES.map((srv) => (
                      <button
                        key={srv.id}
                        onClick={() => {
                          setServicesDropdownOpen(false);
                          onSelectService(srv.id);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#17a8e3] font-medium transition-colors flex items-center justify-between"
                      >
                        <span>{srv.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('partners')}
                className="px-3 py-2 text-[15px] font-semibold text-slate-700 hover:text-[#17a8e3] transition-colors focus:outline-none cursor-pointer"
              >
                Our Partners
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="px-3 py-2 text-[15px] font-semibold text-slate-700 hover:text-[#17a8e3] transition-colors focus:outline-none cursor-pointer"
              >
                Contact us
              </button>
            </nav>

            {/* Right Action / Contact CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={COMPANY_INFO.phoneHref}
                className="hidden xl:flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#17a8e3] transition-colors font-medium mr-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#17a8e3]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-white bg-[#17a8e3] hover:bg-[#1293c9] rounded-md transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                Contact us
              </button>
            </div>

            {/* Mobile menu hamburger toggle button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenContact}
                className="sm:hidden px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#17a8e3] rounded-md"
              >
                Contact
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-700 hover:text-[#17a8e3] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#17a8e3]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn shadow-xl">
            <div className="space-y-1">
              <button
                onClick={() => handleNavClick('top')}
                className="block w-full text-left px-3 py-2 text-base font-semibold text-[#17a8e3] rounded-md hover:bg-slate-50"
              >
                Home
              </button>

              {/* Mobile About Accordion */}
              <div>
                <button
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-semibold text-slate-800 rounded-md hover:bg-slate-50"
                >
                  <span>About us</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      aboutDropdownOpen ? 'rotate-180 text-[#17a8e3]' : ''
                    }`}
                  />
                </button>
                {aboutDropdownOpen && (
                  <div className="pl-6 space-y-1 py-1 border-l-2 border-slate-100 ml-3">
                    <button
                      onClick={() => handleNavClick('about')}
                      className="block w-full text-left px-2 py-1.5 text-sm text-slate-600 hover:text-[#17a8e3]"
                    >
                      About Our Story
                    </button>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenAbout();
                      }}
                      className="block w-full text-left px-2 py-1.5 text-sm text-slate-600 hover:text-[#17a8e3]"
                    >
                      How we work
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-semibold text-slate-800 rounded-md hover:bg-slate-50"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      servicesDropdownOpen ? 'rotate-180 text-[#17a8e3]' : ''
                    }`}
                  />
                </button>
                {servicesDropdownOpen && (
                  <div className="pl-6 space-y-1 py-1 border-l-2 border-slate-100 ml-3">
                    {SERVICES.map((srv) => (
                      <button
                        key={srv.id}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onSelectService(srv.id);
                        }}
                        className="block w-full text-left px-2 py-1.5 text-sm text-slate-600 hover:text-[#17a8e3]"
                      >
                        {srv.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('partners')}
                className="block w-full text-left px-3 py-2 text-base font-semibold text-slate-800 rounded-md hover:bg-slate-50"
              >
                Our Partners
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="block w-full text-left px-3 py-2 text-base font-semibold text-slate-800 rounded-md hover:bg-slate-50"
              >
                Contact us
              </button>
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-slate-700 bg-slate-50 rounded-md"
              >
                <Phone className="w-4 h-4 text-[#17a8e3]" />
                <span>Call: {COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.salesEmail}`}
                className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-slate-700 bg-slate-50 rounded-md"
              >
                <Mail className="w-4 h-4 text-[#17a8e3]" />
                <span>Email: {COMPANY_INFO.salesEmail}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full mt-2 py-3 text-center text-sm font-bold uppercase tracking-wider text-white bg-[#17a8e3] hover:bg-[#1293c9] rounded-md transition-colors shadow-sm"
              >
                Request Consultation
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Spacer so page content starts below the fixed header */}
      <div className="h-16 sm:h-20" />
    </>
  );
};
