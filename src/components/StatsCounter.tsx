import React, { useEffect, useState, useRef } from 'react';
import { CheckCircle, Users, Award, Smile } from 'lucide-react';
import { STATS } from '../data/siteData';

export const StatsCounter: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIcon = (id: string) => {
    switch (id) {
      case 'projects':
        return <CheckCircle className="w-8 h-8 text-[#17a8e3]" />;
      case 'clients':
        return <Users className="w-8 h-8 text-[#17a8e3]" />;
      case 'staff':
        return <Award className="w-8 h-8 text-[#17a8e3]" />;
      case 'nps':
        return <Smile className="w-8 h-8 text-[#17a8e3]" />;
      default:
        return <CheckCircle className="w-8 h-8 text-[#17a8e3]" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-[#101e38] text-white relative overflow-hidden"
    >
      {/* Background subtle mesh */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#17a8e3_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center p-4 transition-transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                {getIcon(stat.id)}
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight tabular-nums mb-2">
                {hasAnimated ? stat.value : '0'}
                {stat.decimals ? '' : '+'}
              </div>
              <p className="text-sm sm:text-base font-medium text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
