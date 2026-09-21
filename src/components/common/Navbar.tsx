import React, { useEffect, useState } from 'react';
import { Compass, Menu, X, PhoneCall, Sparkles, ChevronRight, Globe2 } from 'lucide-react';
import { useI18n } from '../../i18n';

interface NavbarProps {
  currentView: string;
  language: 'en' | 'vi';
  onLanguageChange: (language: 'en' | 'vi') => void;
  onNavigate: (view: string) => void;
  onOpenBookingFast: () => void;
}

const navItems = [
  { id: 'home', labelKey: 'nav.home' },
  { id: 'tours', labelKey: 'nav.tours' },
  { id: 'destinations', labelKey: 'nav.destinations' },
  { id: 'deals', labelKey: 'nav.deals' },
  { id: 'about', labelKey: 'nav.about' },
  { id: 'blog', labelKey: 'nav.blog' },
  { id: 'contact', labelKey: 'nav.contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  language,
  onLanguageChange,
  onNavigate,
  onOpenBookingFast,
}) => {
  const { t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const isOverHero = currentView === 'home' && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'glass-dark py-3 shadow-2xl border-b border-sky-100'
          : isOverHero
            ? 'bg-gradient-to-b from-slate-950/88 via-slate-950/42 to-transparent py-5'
            : 'glass-dark py-3.5 shadow-xl border-b border-sky-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div
            onClick={() => handleItemClick('home')}
            className="cursor-pointer group flex items-center gap-3 transition-transform duration-300 active:scale-95"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gold-400/50 bg-white/85 shadow-gold group-hover:border-ocean-400 transition-colors">
              <Compass className="w-6 h-6 text-ocean-500 group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div>
              <span
                className={`font-display font-bold text-xl sm:text-2xl tracking-[0.14em] block leading-none ${
                  isOverHero ? 'text-white drop-shadow-lg' : 'text-gold-gradient'
                }`}
              >
                GOLDEN TRIP
              </span>
              <span
                className={`text-[9px] tracking-[0.3em] font-sans uppercase block mt-1 font-medium ${
                  isOverHero ? 'text-sky-100 drop-shadow' : 'text-slate-600'
                }`}
              >
                {t('nav.brandSub')}
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-xs xl:text-sm tracking-wide font-semibold transition-all duration-200 relative py-1 group ${
                    isOverHero
                      ? isActive
                        ? 'text-white drop-shadow-md'
                        : 'text-sky-50/90 hover:text-white drop-shadow-md'
                      : isActive
                        ? 'text-ocean-600'
                        : 'text-slate-700 hover:text-ocean-600'
                  }`}
                  title={t(item.labelKey)}
                >
                  {t(item.labelKey)}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-ocean-500 to-gold-400 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => onLanguageChange(language === 'en' ? 'vi' : 'en')}
              className={`flex items-center gap-1.5 text-xs py-1.5 px-3 rounded-full border font-semibold ${
                isOverHero
                  ? 'text-white border-white/25 bg-white/12 backdrop-blur-md'
                  : 'text-slate-700 border-slate-200 bg-white/70 hover:text-ocean-600'
              }`}
              aria-label="Change language"
            >
              <Globe2 className={`w-3.5 h-3.5 ${isOverHero ? 'text-gold-200' : 'text-ocean-500'}`} />
              <span>{language === 'en' ? 'EN' : 'VI'}</span>
              <span className={isOverHero ? 'text-white/55' : 'text-slate-400'}>/</span>
              <span className={language === 'en' ? 'opacity-55' : 'opacity-100'}>
                {language === 'en' ? 'VI' : 'EN'}
              </span>
            </button>
            <a
              href="tel:1900888999"
              className={`flex items-center gap-2 text-xs transition-colors py-1.5 px-3 rounded-full border ${
                isOverHero
                  ? 'text-white border-white/25 hover:border-gold-200 bg-white/12 backdrop-blur-md'
                  : 'text-slate-600 hover:text-ocean-600 border-slate-200 hover:border-ocean-200 bg-white/70'
              }`}
            >
              <PhoneCall className={`w-3.5 h-3.5 ${isOverHero ? 'text-gold-200' : 'text-gold-500'}`} />
              <span>1900 888 999</span>
            </a>

            <button
              onClick={onOpenBookingFast}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full font-medium text-xs tracking-wider uppercase bg-gradient-to-r from-ocean-500 via-sky-400 to-gold-400 text-white font-sans shadow-gold transition-all duration-300 hover:shadow-gold-lg hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                {t('nav.bookTour')}
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenBookingFast}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-ocean-500 to-gold-400 text-white shadow-gold"
            >
              {t('nav.bookShort')}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/85 border border-slate-200 text-slate-800 hover:text-ocean-500 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 z-50 bg-sky-50/98 backdrop-blur-2xl transition-all duration-500 flex flex-col ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-ocean-500" />
            <span className="font-display font-bold text-lg text-gold-gradient tracking-widest">
              GOLDEN TRIP
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-full bg-white border border-slate-200 text-slate-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item, idx) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  style={{ transitionDelay: `${idx * 40}ms` }}
                  className={`flex items-center justify-between py-3 text-lg font-serif tracking-wide border-b border-slate-200 transition-colors ${
                    isActive ? 'text-ocean-600 font-bold pl-2' : 'text-slate-800 hover:text-ocean-600'
                  }`}
                >
                  <span>
                    {t(item.labelKey)}
                    <span className="block text-xs font-sans font-medium text-slate-500 mt-1">
                      {t(item.labelKey)}
                    </span>
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-slate-200 space-y-4">
            <div className="flex items-center gap-3 text-slate-600 text-sm">
              <PhoneCall className="w-4 h-4 text-gold-500" />
              <span>{t('nav.hotline')}</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingFast();
              }}
              className="w-full py-3.5 rounded-xl font-medium tracking-wider uppercase bg-gradient-to-r from-ocean-500 to-gold-400 text-white font-bold shadow-gold text-center"
            >
              {t('nav.privateConsult')}
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange(language === 'en' ? 'vi' : 'en')}
              className="w-full py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold text-xs uppercase tracking-wider"
            >
              Language: {language === 'en' ? 'English' : 'Tiếng Việt'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
