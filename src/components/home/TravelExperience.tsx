import React, { useState } from 'react';
import { Compass, Map, Sparkles, Camera, ArrowRight } from 'lucide-react';

export const TravelExperience: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Discover',
      subtitle: 'Khám Phá Điểm Đến Mơ Ước',
      desc: 'Cùng chuyên gia du lịch lắng nghe mong muốn, tìm kiếm những vùng đất di sản, resort biệt lập và nguồn cảm hứng bất tận cho kỳ nghỉ sắp tới.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      icon: Compass,
      tag: 'Tư Vấn Chuyên Sâu'
    },
    {
      num: '02',
      title: 'Plan',
      subtitle: 'Kiến Tạo Lộ Trình Riêng',
      desc: 'Thiết kế hành trình chuẩn xác đến từng chi tiết: từ vé máy bay khoang thương gia, villa hướng biển riêng tư đến đặt bàn nhà hàng Michelin.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      icon: Map,
      tag: 'Cá Nhân Hóa 100%'
    },
    {
      num: '03',
      title: 'Experience',
      subtitle: 'Tận Hưởng Từng Khoảnh Khắc',
      desc: 'Quý khách hoàn toàn thảnh thơi trải nghiệm. Đội ngũ hướng dẫn viên 5 sao và quản gia riêng túc trực hỗ trợ chu đáo trong suốt kỳ nghỉ.',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
      icon: Sparkles,
      tag: 'Dịch Vụ 5 Sao Đồng Hành'
    },
    {
      num: '04',
      title: 'Remember',
      subtitle: 'Lưu Giữ Kỷ Niệm Vô Giá',
      desc: 'Những bức hình tuyệt đẹp từ nhiếp ảnh gia riêng, quà tặng lưu niệm thủ công độc bản và ký ức tươi đẹp trường tồn cùng thời gian.',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      icon: Camera,
      tag: 'Ký Ức Đáng Nhớ'
    }
  ];

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Seamless Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-100 leading-tight">
            Travel Experience <br />
            <span className="text-gold-gradient font-display italic font-normal">
              4 Bước Kiến Tạo Hành Trình Hoàn Hảo
            </span>
          </h2>
          <p className="text-sm text-slate-300 mt-3 leading-relaxed">
            Quy trình phục vụ chuẩn mực mang đến sự thư thái tuyệt đối cho quý khách từ giây phút nhen nhóm ý tưởng đến khi trở về nhà.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {steps.map((step, idx) => {
            const isCurrent = activeStep === idx;
            const StepIcon = step.icon;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                  isCurrent
                    ? 'glass-dark border-gold-400 shadow-gold'
                    : 'bg-navy-900/40 border-white/5 hover:border-white/20'
                }`}
              >
                {/* Progress bar at the top of active step */}
                {isCurrent && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-amber-300 animate-pulse" />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className={`font-serif text-2xl font-bold ${isCurrent ? 'text-gold-300' : 'text-slate-300'}`}>
                    {step.num}
                  </span>
                  <StepIcon className={`w-5 h-5 ${isCurrent ? 'text-gold-400' : 'text-slate-300'}`} />
                </div>
                <div className={`text-sm font-bold uppercase tracking-wider ${isCurrent ? 'text-slate-100' : 'text-slate-300'}`}>
                  {step.title}
                </div>
                <div className="text-[11px] text-slate-300 truncate mt-0.5">{step.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Box with Image & Details */}
        <div className="glass-dark rounded-3xl p-6 sm:p-10 border border-gold-500/30 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
                <span>{steps[activeStep].tag}</span>
              </div>

              <div className="space-y-1">
                <span className="font-serif text-4xl sm:text-5xl font-extrabold text-gold-400/40 block">
                  {steps[activeStep].num} — {steps[activeStep].title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100">
                  {steps[activeStep].subtitle}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                {steps[activeStep].desc}
              </p>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-gold flex items-center gap-2"
                >
                  <span>Bước kế tiếp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-6">
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-gold-500/20 shadow-2xl">
                <img
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover filter brightness-90 transition-all duration-700 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
