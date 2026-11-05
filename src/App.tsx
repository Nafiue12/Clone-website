import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { AppointmentBar } from './components/AppointmentBar';
import { ServicesSection } from './components/ServicesSection';
import { PartnerSolutionsCarousel } from './components/PartnerSolutionsCarousel';
import { StatsCounter } from './components/StatsCounter';
import { AboutSection } from './components/AboutSection';
import { PartnersGrid } from './components/PartnersGrid';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ServiceModal } from './components/ServiceModal';
import { AboutModal } from './components/AboutModal';
import { ResourceModal } from './components/ResourceModal';
import { PrivacyModal } from './components/PrivacyModal';
import { SERVICES, COMPANY_INFO } from './data/siteData';
import { ServiceItem, PartnerResource } from './types';
import { PhoneCall, MessageSquare } from 'lucide-react';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [activeResource, setActiveResource] = useState<PartnerResource | null>(null);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const handleOpenContact = (serviceId: string = '') => {
    setSelectedServiceId(serviceId);
    setContactModalOpen(true);
  };

  const handleSelectService = (serviceId: string) => {
    const srv = SERVICES.find((s) => s.id === serviceId) || null;
    setActiveService(srv);
  };

  const handleOpenResource = (resource: PartnerResource) => {
    setActiveResource(resource);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-[#17a8e3] selection:text-white antialiased">
      {/* 1. Header Navigation Bar */}
      <Header
        onOpenContact={() => handleOpenContact()}
        onOpenAbout={() => setAboutModalOpen(true)}
        onSelectService={handleSelectService}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Slider (banner-one) with 7 slides */}
        <HeroSlider
          onSelectService={handleSelectService}
          onOpenContact={() => handleOpenContact()}
        />

        {/* 3. Sales & Appointment Banner (intech_book_appointment) */}
        <AppointmentBar onOpenContact={() => handleOpenContact()} />

        {/* 4. Full Range of Tech Services (intech_services_v3) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 5. Cisco Meraki Partner Resources & Whitepapers Carousel */}
        <PartnerSolutionsCarousel onOpenResource={handleOpenResource} />

        {/* 6. Facts & Stats Counter Bar (intech_facts_counter) */}
        <StatsCounter />

        {/* 7. About Our Company (intech_about_us_v1) */}
        <AboutSection onOpenAbout={() => setAboutModalOpen(true)} />

        {/* 8. Certified Partners (intech_partners_v1) */}
        <PartnersGrid />

        {/* 9. Contact Now Banner (intech_call_to_action_v1) */}
        <CtaBanner onOpenContact={() => handleOpenContact()} />
      </main>

      {/* 10. Site Footer */}
      <Footer
        onOpenContact={() => handleOpenContact()}
        onOpenAbout={() => setAboutModalOpen(true)}
        onSelectService={handleSelectService}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultService={selectedServiceId}
      />

      <ServiceModal
        service={activeService}
        onClose={() => setActiveService(null)}
        onRequestConsultation={(id) => handleOpenContact(id)}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onOpenContact={() => handleOpenContact()}
      />

      <ResourceModal
        resource={activeResource}
        onClose={() => setActiveResource(null)}
        onRequestTrial={() => handleOpenContact('procurement')}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      {/* Floating Call & Chat Action Button for Fast Reach */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <a
          href={COMPANY_INFO.phoneHref}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-xl border border-slate-700/60 text-xs font-bold transition-all hover:scale-105 active:scale-95"
          title="Direct Phone Call"
        >
          <PhoneCall className="w-4 h-4 text-[#17a8e3]" />
          <span className="hidden sm:inline">03 9070 8103</span>
        </a>
        <button
          onClick={() => handleOpenContact()}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#17a8e3] text-white hover:bg-[#1293c9] shadow-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Get in touch"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Consultation</span>
        </button>
      </div>
    </div>
  );
}
