import React, { useState, useEffect, useRef } from 'react';
import { Award, Compass, Play, CheckCircle2, ArrowRight } from 'lucide-react';

interface StorytellingAboutProps {
  onLearnMore: () => void;
}

export const StorytellingAbout: React.FC<StorytellingAboutProps> = ({ onLearnMore }) => {
  const [hasCounted, setHasCounted] = useState(false);
  const [counts, setCounts] = useState({ years: 0, customers: 0, destinations: 0, satisfaction: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          setHasCounted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [hasCounted]);

  useEffect(() => {
    if (!hasCounted) return;

    const duration = 2000;
    const steps = 50;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        years: Math.min(10, Math.floor(progress * 10)),
        customers: Math.min(50, Math.floor(progress * 50)),
        destinations: Math.min(100, Math.floor(progress * 100)),
        satisfaction: Math.min(98, Math.floor(progress * 98)),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [hasCounted]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Media & Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gold-500/30">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
                alt="Golden Trip Story"
                className="w-full h-[450px] sm:h-[520px] object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

              {/* Floating Testimonial/Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-dark border border-gold-500/30 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-400 font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gold-300">
                      Biểu Tượng Của Đẳng Cấp
                    </h4>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      Top 1 Đơn vị Lữ hành Thượng lưu được yêu thích nhất 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent floating box top right */}
            <div className="hidden sm:flex absolute -top-6 -right-6 items-center gap-3 px-5 py-3 rounded-2xl bg-navy-850/90 border border-gold-400/40 shadow-gold backdrop-blur-md">
              <Compass className="w-5 h-5 text-gold-400 animate-spin-slow" />
              <div className="text-left">
                <span className="text-[10px] text-slate-400 block uppercase font-medium">Phong cách</span>
                <span className="text-xs font-serif font-bold text-slate-100">Bespoke Expeditions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Storytelling & Dynamic Counters */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-widest">
              <span>Our Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-100 leading-tight">
              More Than A Trip <br />
              <span className="text-gold-gradient font-display italic font-normal">
                Hơn Cả Một Chuyến Đi
              </span>
            </h2>

            <div className="space-y-4 text-sm text-slate-300 font-light leading-relaxed">
              <blockquote className="p-4 rounded-xl border-l-2 border-gold-400 bg-white/5 italic font-serif text-slate-200 text-base">
                "Golden Trip Travel không chỉ đưa bạn đến một địa điểm. Chúng tôi tạo nên những hành trình để bạn khám phá, trải nghiệm và lưu giữ những khoảnh khắc đáng nhớ suốt cuộc đời."
              </blockquote>

              <p>
                Được thành lập bởi những chuyên gia đam mê dịch chuyển và thấu hiểu chuẩn mực dịch vụ cao cấp nhất, Golden Trip Travel mang sứ mệnh kiến tạo những chuyến hải trình và tour khám phá tinh tế, nơi mỗi vị khách đều được đối đãi như một thượng khách đặc biệt.
              </p>
            </div>

            {/* Statistics Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div className="text-center sm:text-left">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-300 block">
                  {counts.years}+
                </span>
                <span className="text-xs text-slate-400 mt-1 block">Năm kinh nghiệm</span>
              </div>

              <div className="text-center sm:text-left">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-300 block">
                  {counts.customers}K+
                </span>
                <span className="text-xs text-slate-400 mt-1 block">Khách hàng VIP</span>
              </div>

              <div className="text-center sm:text-left">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-300 block">
                  {counts.destinations}+
                </span>
                <span className="text-xs text-slate-400 mt-1 block">Điểm đến toàn cầu</span>
              </div>

              <div className="text-center sm:text-left">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-300 block">
                  {counts.satisfaction}%
                </span>
                <span className="text-xs text-slate-400 mt-1 block">Hài lòng tuyệt đối</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-gold-500/20 text-gold-300 border border-gold-500/40 hover:bg-gold-500 hover:text-navy-950 transition-all duration-300"
              >
                <span>Tìm Hiểu Về Chúng Tôi</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
