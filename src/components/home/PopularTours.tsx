import React from 'react';
import { Tour } from '../../types';
import { Star, Clock, MapPin, ArrowRight, Flame, Sparkles } from 'lucide-react';

interface PopularToursProps {
  tours: Tour[];
  onSelectTour: (tour: Tour) => void;
  onViewAllTours: () => void;
}

export const PopularTours: React.FC<PopularToursProps> = ({
  tours,
  onSelectTour,
  onViewAllTours,
}) => {
  return (
    <section className="py-24 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden">
      {/* Subtle background graphics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Expeditions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-100 leading-tight">
              Popular Journeys <br />
              <span className="text-gold-gradient font-display italic font-normal">
                Hành Trình Được Yêu Chuộng Nhất
              </span>
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              Những tour du lịch thượng lưu nhận được đánh giá xuất sắc nhất từ khách hàng của Golden Trip Travel trong năm 2024.
            </p>
          </div>

          <button
            onClick={onViewAllTours}
            className="self-start md:self-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-300 hover:text-gold-400 transition-colors border-b border-gold-400/40 pb-1"
          >
            <span>Xem Toàn Bộ Tour Tuyển Chọn</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.slice(0, 6).map((tour) => (
            <div
              key={tour.id}
              onClick={() => onSelectTour(tour)}
              className="group flex flex-col rounded-2xl overflow-hidden glass-card glass-card-hover cursor-pointer transition-all duration-400 transform hover:-translate-y-2"
            >
              {/* Card Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />

                {/* Best Seller Badge */}
                {tour.bestSeller && (
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-gold-500 text-navy-950 shadow-gold animate-pulse-subtle">
                    <Flame className="w-3.5 h-3.5 fill-current" />
                    <span>Best Seller</span>
                  </div>
                )}

                {/* Tour Category */}
                <div className="image-badge absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-[11px] font-bold bg-navy-950/85 backdrop-blur-md text-white border border-white/25">
                  {tour.tourType}
                </div>

                {/* Bottom Bar inside Image */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gold-400" />
                    {tour.destination}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    {tour.duration}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Rating & Reviews */}
                  <div className="flex items-center gap-2 mb-2.5 text-xs">
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="font-bold text-slate-100">{tour.rating}</span>
                    </div>
                    <span className="text-slate-400">({tour.reviews} đánh giá)</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-serif font-bold text-slate-100 line-clamp-2 group-hover:text-gold-300 transition-colors leading-snug">
                    {tour.title}
                  </h3>

                  {/* Subtitle / Teaser */}
                  <p className="text-xs text-slate-400 line-clamp-2 mt-2 leading-relaxed font-light">
                    {tour.subtitle}
                  </p>
                </div>

                {/* Price & Action */}
                <div className="card-action-row mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-medium">
                      Giá từ
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-serif font-bold text-gold-300">
                        {tour.price.toLocaleString('vi-VN')}
                      </span>
                      <span className="text-[11px] text-slate-400 font-sans">VNĐ</span>
                    </div>
                    {tour.originalPrice && (
                      <span className="text-[11px] text-slate-500 line-through">
                        {tour.originalPrice.toLocaleString('vi-VN')} đ
                      </span>
                    )}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectTour(tour);
                    }}
                    className="px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-500/15 text-gold-300 border border-gold-500/30 group-hover:bg-gold-500 group-hover:text-navy-950 group-hover:border-gold-400 transition-all duration-300 flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Khám phá</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
