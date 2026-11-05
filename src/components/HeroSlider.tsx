import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { SLIDES } from '../data/siteData';

interface HeroSliderProps {
  onSelectService: (serviceId: string) => void;
  onOpenContact: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onSelectService,
  onOpenContact,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const slide = SLIDES[currentSlide];

  const handleButtonClick = () => {
    if (slide.buttonAction === 'services') {
      const servicesEl = document.getElementById('services');
      if (servicesEl) {
        servicesEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (slide.serviceId) {
      onSelectService(slide.serviceId);
    } else {
      onOpenContact();
    }
  };

  return (
    <section
      id="top"
      className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] xl:min-h-[680px] bg-slate-900 overflow-hidden flex items-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with smooth fade */}
      {SLIDES.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={s.bgImage}
            alt={s.title}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              // Fallback gradient if file missing
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Measured multi-stop dark overlay for crisp typographic legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/40" />
        </div>
      ))}

      {/* Main Slide Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="max-w-2xl lg:max-w-3xl text-left">
          {/* Tagline / Kicker */}
          {slide.tagline && (
            <p className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#17a8e3] mb-3 inline-block">
              {slide.tagline}
            </p>
          )}

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-5 text-balance">
            {slide.title}
          </h1>

          {/* Body Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal">
            {slide.description}
          </p>

          {/* Call to action button */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleButtonClick}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-[#17a8e3] hover:bg-[#1293c9] rounded-md transition-all shadow-lg hover:shadow-cyan-500/25 active:scale-95 cursor-pointer"
            >
              <span>{slide.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-md transition-all backdrop-blur-sm cursor-pointer"
            >
              <span>Free Consultation</span>
            </button>
          </div>
        </div>
      </div>

      {/* Slider Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/30 hover:bg-[#17a8e3] text-white/80 hover:text-white transition-all backdrop-blur-sm focus:outline-none cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/30 hover:bg-[#17a8e3] text-white/80 hover:text-white transition-all backdrop-blur-sm focus:outline-none cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Bottom Indicator Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex items-center justify-center gap-2.5">
        {SLIDES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => goToSlide(idx)}
            className={`transition-all duration-300 rounded-full focus:outline-none cursor-pointer ${
              idx === currentSlide
                ? 'w-8 h-2.5 bg-[#17a8e3]'
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
