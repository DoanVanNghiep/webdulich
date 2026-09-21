import React, { useState } from 'react';
import { MapPin, Calendar, Users, DollarSign, Search } from 'lucide-react';
import { SearchFilterParams } from '../../types';
import { useI18n } from '../../i18n';

interface SearchBoxProps {
  onSearch: (params: SearchFilterParams) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const { t } = useI18n();
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [budgetRange, setBudgetRange] = useState(100000000);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ destination, date, adults, children, budgetRange });
  };

  return (
    <div className="search-dock relative z-20 -mt-32 sm:-mt-44 px-4 sm:px-6 lg:px-8 pt-0 pb-16">
      <div className="max-w-6xl mx-auto glass-dark rounded-2xl md:rounded-3xl p-4 sm:p-6 shadow-2xl border border-gold-500/30 backdrop-blur-2xl transition-all duration-300 hover:border-gold-500/50">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="travel-field relative p-3 rounded-xl bg-navy-900/60 border border-white/10 hover:border-gold-500/40 focus-within:border-gold-400 transition-all">
              <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{t('search.destinationLabel')}</span>
              </div>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder={t('search.destinationPlaceholder')}
                className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-400 focus:outline-none font-medium"
              />
            </div>

            <div className="travel-field relative p-3 rounded-xl bg-navy-900/60 border border-white/10 hover:border-gold-500/40 focus-within:border-gold-400 transition-all">
              <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{t('search.dateLabel')}</span>
              </div>
              <input
                type="date"
                value={date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-400 focus:outline-none font-medium"
              />
            </div>

            <div className="travel-field relative p-3 rounded-xl bg-navy-900/60 border border-white/10 hover:border-gold-500/40 focus-within:border-gold-400 transition-all">
              <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <Users className="w-3.5 h-3.5" />
                <span>{t('search.guestsLabel')}</span>
              </div>
              <button
                type="button"
                onClick={() => setShowGuestDropdown(!showGuestDropdown)}
                className="w-full text-left text-sm text-slate-100 font-medium truncate"
              >
                {adults} {t('search.adults')}
                {children > 0 ? `, ${children} ${t('search.children')}` : ''}
              </button>

              {showGuestDropdown && (
                <div className="travel-dropdown absolute top-full left-0 right-0 mt-2 z-30 p-4 rounded-xl bg-navy-900 border border-gold-500/30 shadow-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-200">{t('search.adults')}</div>
                      <div className="text-[10px] text-slate-400">{t('search.adultsAge')}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button type="button" onClick={() => setAdults(Math.max(1, adults - 1))} className="travel-stepper w-7 h-7 rounded bg-white/10 text-slate-200 font-bold hover:bg-gold-500 hover:text-navy-950">-</button>
                      <span className="travel-stepper-value text-xs font-bold text-gold-300 w-5 text-center">{adults}</span>
                      <button type="button" onClick={() => setAdults(adults + 1)} className="travel-stepper w-7 h-7 rounded bg-white/10 text-slate-200 font-bold hover:bg-gold-500 hover:text-navy-950">+</button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <div>
                      <div className="text-xs font-bold text-slate-200">{t('search.children')}</div>
                      <div className="text-[10px] text-slate-400">{t('search.childrenAge')}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button type="button" onClick={() => setChildren(Math.max(0, children - 1))} className="travel-stepper w-7 h-7 rounded bg-white/10 text-slate-200 font-bold hover:bg-gold-500 hover:text-navy-950">-</button>
                      <span className="travel-stepper-value text-xs font-bold text-gold-300 w-5 text-center">{children}</span>
                      <button type="button" onClick={() => setChildren(children + 1)} className="travel-stepper w-7 h-7 rounded bg-white/10 text-slate-200 font-bold hover:bg-gold-500 hover:text-navy-950">+</button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowGuestDropdown(false)}
                    className="travel-dropdown-confirm w-full py-2 rounded-lg bg-gold-500 text-navy-950 text-xs font-bold uppercase"
                  >
                    {t('search.confirm')}
                  </button>
                </div>
              )}
            </div>

            <div className="travel-field relative p-3 rounded-xl bg-navy-900/60 border border-white/10 hover:border-gold-500/40 focus-within:border-gold-400 transition-all flex flex-col justify-center">
              <div className="flex items-center justify-between text-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <span className="flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5" />
                  <span>{t('search.budgetLabel')}</span>
                </span>
                <span className="text-slate-200 font-serif text-xs lowercase font-normal">
                  ≤ {(budgetRange / 1000000).toFixed(0)} {t('search.million')}
                </span>
              </div>
              <input
                type="range"
                min="5000000"
                max="100000000"
                step="5000000"
                value={budgetRange}
                onChange={(e) => setBudgetRange(Number(e.target.value))}
                className="w-full accent-gold-400 cursor-pointer h-1.5 bg-navy-800 rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="text-gold-400/80 font-medium">{t('search.quickHint')}</span>
              {['Ha Long', 'Phu Quoc', 'Japan', 'Europe', 'Bali'].map((tag) => (
                <button
                  type="button"
                  key={tag}
                  onClick={() => setDestination(tag)}
                  className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-gold-500/20 hover:text-gold-300 border border-white/5 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-navy-950 shadow-gold hover:shadow-gold-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4 text-navy-950" />
              <span>{t('search.submit')}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
