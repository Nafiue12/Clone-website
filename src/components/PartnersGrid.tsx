import React, { useState } from 'react';
import { PARTNERS } from '../data/siteData';

export const PartnersGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Networking',
    'Cloud & Software',
    'Hardware & Distribution',
    'Cybersecurity',
    'Telecommunications',
  ];

  const filteredPartners =
    selectedCategory === 'All'
      ? PARTNERS
      : PARTNERS.filter((p) => p.category === selectedCategory);

  return (
    <section id="partners" className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-bold uppercase tracking-wider text-[#17a8e3] mb-2">
            Certified Industry Alliances
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Partners
          </h2>
          <div className="w-16 h-1 bg-[#17a8e3] mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base mt-4">
            We partner with the world’s leading technology innovators and certified Australian distributors to deliver reliable, enterprise-grade hardware and software.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#17a8e3] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 12 Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-[#17a8e3]/50 transition-all duration-300 flex flex-col items-center justify-center text-center group h-36"
              title={partner.description}
            >
              <div className="h-16 w-full flex items-center justify-center p-2">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to text if missing
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('.partner-text-fallback')) {
                      const txt = document.createElement('span');
                      txt.className = 'partner-text-fallback text-xs font-bold text-slate-800';
                      txt.innerText = partner.name;
                      parent.appendChild(txt);
                    }
                  }}
                />
              </div>
              <span className="text-[11px] font-medium text-slate-500 group-hover:text-slate-800 mt-2 truncate w-full transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
