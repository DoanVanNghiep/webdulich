import React, { useState, useEffect } from 'react';
import { REVIEWS_DATA } from '../../data/reviewsData';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const currentReview = REVIEWS_DATA[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Customer Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-100 leading-tight">
            Stories From <br />
            <span className="text-gold-gradient font-display italic font-normal">
              Our Travelers
            </span>
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Lắng nghe những cảm nhận chân thực từ các vị khách quý sau mỗi chuyến hải trình cùng Golden Trip.
          </p>
        </div>

        {/* Carousel Card with Pause on Hover */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative glass-dark p-8 sm:p-12 rounded-3xl border border-gold-500/30 shadow-2xl transition-all duration-300"
        >
          {/* Giant decorative quotation mark */}
          <div className="absolute top-6 right-8 text-gold-500/10 pointer-events-none">
            <Quote className="w-24 h-24" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            {/* Avatar & Role */}
            <div className="flex flex-col items-center text-center flex-shrink-0">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 border-2 border-gold-400 shadow-gold">
                <img
                  src={currentReview.userAvatar}
                  alt={currentReview.userName}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-serif font-bold text-slate-100 text-lg mt-3">
                {currentReview.userName}
              </h3>
              <span className="text-xs text-gold-400 font-medium mt-0.5">{currentReview.userRole}</span>
              <span className="text-[11px] text-slate-400 mt-1">{currentReview.date}</span>
            </div>

            {/* Quote & Details */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              {/* Star Rating */}
              <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Joined Tour Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-navy-800/80 border border-gold-500/20 text-xs text-gold-300 font-medium">
                Tour: {currentReview.tourName}
              </div>

              {/* Review Text */}
              <blockquote className="font-serif italic text-slate-200 text-lg sm:text-xl leading-relaxed">
                "{currentReview.comment}"
              </blockquote>
            </div>
          </div>

          {/* Carousel Arrows & Dots */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {REVIEWS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentIndex
                      ? 'w-7 h-2 bg-gold-400'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Đánh giá ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-navy-800/80 border border-white/10 hover:border-gold-400 hover:text-gold-300 text-slate-300 flex items-center justify-center transition-colors"
                aria-label="Đánh giá trước"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-navy-800/80 border border-white/10 hover:border-gold-400 hover:text-gold-300 text-slate-300 flex items-center justify-center transition-colors"
                aria-label="Đánh giá kế tiếp"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
