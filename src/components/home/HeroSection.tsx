import React, { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, Compass, Star } from 'lucide-react';
import { useI18n } from '../../i18n';

interface HeroSectionProps {
  onExploreClick: () => void;
  onViewAllTours: () => void;
}

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85',
    title: 'Paradise coast',
    location: 'Phu Quoc, Viet Nam',
  },
  {
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=2000&q=85',
    title: 'Heritage wonder',
    location: 'Ha Long Bay, Viet Nam',
  },
  {
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2000&q=85',
    title: 'Fuji sunrise',
    location: 'Mount Fuji, Japan',
  },
  {
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=2000&q=85',
    title: 'Alpine escape',
    location: 'Swiss Alps',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onViewAllTours,
}) => {
  const { t } = useI18n();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlideIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={`${slide.title} - ${slide.location}`}
            className="w-full h-full object-cover object-center animate-kenburns transform scale-105"
          />
        </div>
      ))}

      <div className="hero-readable-overlay absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-950/10 via-transparent to-slate-950/42" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-hero-content">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark border border-gold-500/30 text-gold-300 text-xs font-medium tracking-widest uppercase mb-6 shadow-gold">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>{t('hero.badge')}</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-100 leading-[1.15] mb-6">
          {t('hero.title')} <br />
          <span className="text-gold-gradient font-display italic font-normal">
            {t('hero.titleAccent')}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-200 font-medium italic leading-relaxed mb-10 text-shadow">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-navy-950 shadow-gold hover:shadow-gold-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>{t('hero.explore')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onViewAllTours}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-xs uppercase tracking-widest text-slate-100 glass-dark border border-white/20 hover:border-gold-400 hover:text-gold-300 hover:bg-white/10 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-gold-400" />
            <span>{t('hero.viewTours')}</span>
          </button>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-slate-200">
              {t('hero.rating')}
            </span>
          </div>

          <div className="hidden sm:block w-1 h-1 rounded-full bg-gold-400" />

          <div className="flex items-center gap-2">
            <span className="text-gold-400 font-bold font-serif text-sm">100+</span>
            <span>{t('hero.selectedJourneys')}</span>
          </div>

          <div className="hidden sm:block w-1 h-1 rounded-full bg-gold-400" />

          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">24/7</span>
            <span>{t('hero.concierge')}</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-8 z-20 hidden md:flex items-center gap-2">
        {heroSlides.map((slide, idx) => (
          <button
            key={slide.image}
            onClick={() => setCurrentSlideIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentSlideIndex
                ? 'w-8 h-2 bg-gold-400'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
