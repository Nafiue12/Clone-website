import React from 'react';
import { ArrowRight, ShieldCheck, HeartHandshake, Award } from 'lucide-react';

interface AboutSectionProps {
  onOpenAbout: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAbout }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#17a8e3] mb-2">
                Melbourne, Australia
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                About our company
              </h2>
              <div className="w-16 h-1 bg-[#17a8e3] mt-4 rounded-full" />
            </div>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed font-normal">
              <p>
                Global IT Technology is an{' '}
                <strong className="text-slate-900 font-semibold">
                  Australian family-owned business
                </strong>{' '}
                founded in Melbourne.
              </p>
              <p>
                Our founder and director brings to the table{' '}
                <strong className="text-slate-900 font-semibold">
                  20 years' experience working in telecommunications and Technology
                </strong>{' '}
                as a business analyst, project manager and system administrator across different industries.
              </p>
              <p>
                Global IT Technology was founded to follow her dream of establishing an Australia-based company that, different from other IT companies, could offer flexible services and count on a highly skilled team.
              </p>
              <div className="p-4 bg-sky-50/70 border-l-4 border-[#17a8e3] rounded-r-lg">
                <p className="text-slate-800 font-medium italic">
                  &ldquo;Based on her experience of seeing clients under pressure to purchase overpriced items that they do not necessarily need, Global IT Technology's mission is to create a trustworthy relationship with customers.&rdquo;
                </p>
              </div>
            </div>

            {/* Core Values Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-[#17a8e3] flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-800">ACMA Certified</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <HeartHandshake className="w-5 h-5 text-[#17a8e3] flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-800">Zero Pressure</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <Award className="w-5 h-5 text-[#17a8e3] flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-800">100% Australian</span>
              </div>
            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                onClick={onOpenAbout}
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#17a8e3] hover:bg-[#1293c9] rounded-md transition-all shadow-sm hover:shadow-md cursor-pointer active:scale-95"
              >
                <span>Read more</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative background shape */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-sky-100/60 rounded-3xl -z-10 filter blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-100/60 rounded-3xl -z-10 filter blur-xl" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="/images/about-team.jpg"
                  alt="Global IT Technology Team and Infrastructure"
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/11]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-slate-900/90 backdrop-blur-md text-white p-4 sm:p-5 rounded-xl border border-white/10 shadow-lg max-w-[240px]">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#17a8e3]">20+ Years</div>
                  <p className="text-xs text-slate-300 font-medium leading-snug mt-1">
                    Hands-on Telecommunications &amp; Systems Administration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
