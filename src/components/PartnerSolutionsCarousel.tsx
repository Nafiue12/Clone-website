import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, BookOpen, Shield, Sparkles } from 'lucide-react';
import { PARTNER_RESOURCES } from '../data/siteData';
import { PartnerResource } from '../types';

interface PartnerSolutionsCarouselProps {
  onOpenResource: (resource: PartnerResource) => void;
}

export const PartnerSolutionsCarousel: React.FC<PartnerSolutionsCarouselProps> = ({
  onOpenResource,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === 0 ? PARTNER_RESOURCES.length - 1 : prevIdx - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx + 1) % PARTNER_RESOURCES.length);
  };

  return (
    <section className="py-16 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#17a8e3] mb-2">
              <Sparkles className="w-4 h-4 text-[#17a8e3]" />
              <span>Featured Solutions &amp; Industry Briefs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Enterprise Cloud &amp; Security Resources
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Explore Cisco Meraki whitepapers, manufacturing executive briefs, and trial deployment guides.
            </p>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={prev}
              className="p-2.5 rounded-lg border border-slate-200 hover:border-[#17a8e3] hover:text-[#17a8e3] text-slate-600 bg-white shadow-sm transition-colors cursor-pointer"
              aria-label="Previous resource"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-2.5 rounded-lg border border-slate-200 hover:border-[#17a8e3] hover:text-[#17a8e3] text-slate-600 bg-white shadow-sm transition-colors cursor-pointer"
              aria-label="Next resource"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop 4-grid / Tablet 2-grid / Mobile Carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNER_RESOURCES.slice(currentIndex, currentIndex + 4).concat(
            currentIndex + 4 > PARTNER_RESOURCES.length
              ? PARTNER_RESOURCES.slice(0, (currentIndex + 4) % PARTNER_RESOURCES.length)
              : []
          ).map((item) => (
            <div
              key={item.id}
              className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-200/70 hover:border-[#17a8e3]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] bg-slate-200 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-semibold text-white bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-base line-clamp-2 group-hover:text-[#17a8e3] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenResource(item)}
                  className="w-full py-2 px-3 text-xs font-bold text-[#17a8e3] bg-white border border-[#17a8e3]/30 hover:bg-[#17a8e3] hover:text-white rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
