import React from 'react';
import {
  Server,
  Cloud,
  Wrench,
  ShoppingCart,
  Briefcase,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { SERVICES } from '../data/siteData';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'server':
        return <Server className="w-8 h-8 text-[#17a8e3]" />;
      case 'cloud':
        return <Cloud className="w-8 h-8 text-[#17a8e3]" />;
      case 'wrench':
        return <Wrench className="w-8 h-8 text-[#17a8e3]" />;
      case 'shopping-cart':
        return <ShoppingCart className="w-8 h-8 text-[#17a8e3]" />;
      case 'briefcase':
        return <Briefcase className="w-8 h-8 text-[#17a8e3]" />;
      case 'shield-check':
        return <ShieldCheck className="w-8 h-8 text-[#17a8e3]" />;
      default:
        return <Server className="w-8 h-8 text-[#17a8e3]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold uppercase tracking-wider text-[#17a8e3] mb-2">
            Tailored IT Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            A full range of tech services to support your business growth
          </h2>
          <div className="w-16 h-1 bg-[#17a8e3] mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#17a8e3]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon box */}
                <div className="w-16 h-16 rounded-xl bg-sky-50 flex items-center justify-center mb-6 group-hover:bg-[#17a8e3] transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300 [&>svg]:group-hover:text-white">
                    {getIcon(service.icon)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#17a8e3] transition-colors">
                  {service.title}
                </h3>

                {/* Text excerpt */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
              </div>

              {/* Learn more button */}
              <div>
                <button
                  onClick={() => onSelectService(service.id)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#17a8e3] hover:text-[#1293c9] transition-colors group/btn cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
