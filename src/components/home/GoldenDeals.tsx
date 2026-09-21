import React, { useEffect, useState } from 'react';
import { Flame, Sparkles, ArrowRight, Tag, Gift } from 'lucide-react';
import { useI18n } from '../../i18n';

interface GoldenDealsProps {
  onClaimDeal: () => void;
}

export const GoldenDeals: React.FC<GoldenDealsProps> = ({ onClaimDeal }) => {
  const { t } = useI18n();
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 34,
    seconds: 21,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (n: number) => n.toString().padStart(2, '0');

  const countdown = [
    { value: timeLeft.days, label: t('time.days') },
    { value: timeLeft.hours, label: t('time.hours') },
    { value: timeLeft.minutes, label: t('time.minutes') },
    { value: timeLeft.seconds, label: t('time.seconds') },
  ];

  return (
    <section className="deals-section relative py-28 overflow-hidden bg-navy-950">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2000&q=85"
          alt="Golden Deals Background"
          className="w-full h-full object-cover object-center filter brightness-[0.3] scale-105 transition-transform duration-1000 ease-out hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold-500/20 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="deals-copy lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-widest shadow-gold">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>{t('deals.badge')}</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-100 leading-tight">
              {t('deals.title')} <br />
              <span className="text-gold-gradient font-display italic font-normal">
                {t('deals.titleAccent')}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-xl">
              {t('deals.desc')}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-gold-400" />
                <span>{t('deals.save')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-gold-400" />
                <span>{t('deals.gift')}</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>{t('deals.limited')}</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onClaimDeal}
                className="px-9 py-4 rounded-full font-bold text-xs uppercase tracking-widest bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-navy-950 shadow-gold hover:shadow-gold-lg hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center gap-2.5 gold-glow"
              >
                <span>{t('deals.cta')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="deals-countdown glass-dark p-8 sm:p-10 rounded-3xl border border-gold-500/40 shadow-2xl shadow-navy-950 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl pointer-events-none" />

              <div className="text-center mb-8">
                <span className="text-xs uppercase tracking-widest text-gold-300 font-semibold block">
                  {t('deals.countdown')}
                </span>
                <p className="text-xs text-slate-400 mt-1">{t('deals.countdownSub')}</p>
              </div>

              <div className="grid grid-cols-4 gap-3 text-center">
                {countdown.map((item) => (
                  <div key={item.label} className="flex flex-col items-center">
                    <div className="w-full py-4 px-2 rounded-2xl bg-navy-900/90 border border-gold-500/30 shadow-inner flex items-center justify-center">
                      <span className="font-mono text-2xl sm:text-3xl md:text-4xl font-extrabold text-gold-300">
                        {formatNumber(item.value)}
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 mt-2 font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400">{t('deals.code')}</span>
                <span className="font-mono font-bold text-gold-300 bg-gold-500/15 border border-gold-500/30 px-3 py-1 rounded-lg">
                  GOLDENFALL30
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
