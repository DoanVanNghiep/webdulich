import React, { useState } from 'react';
import { DESTINATIONS_DATA } from '../../data/destinationsData';
import { Destination } from '../../types';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';

interface FeaturedDestinationsProps {
  onSelectDestination: (destinationName: string) => void;
  onViewAllDestinations: () => void;
}

export const FeaturedDestinations: React.FC<FeaturedDestinationsProps> = ({
  onSelectDestination,
  onViewAllDestinations,
}) => {
  const [filterRegion, setFilterRegion] = useState<'all' | 'Vietnam' | 'Asia' | 'Europe'>('all');

  const filtered = filterRegion === 'all'
    ? DESTINATIONS_DATA.slice(0, 6)
    : DESTINATIONS_DATA.filter((d) => d.region === filterRegion);

  return (
    <section className="py-24 relative overflow-hidden bg-navy-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-ocean-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore The World</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-100 leading-tight">
              Những Điểm Đến <br />
              <span className="text-gold-gradient font-display italic font-normal">
                Được Yêu Thích Nhất
              </span>
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              Từ những vịnh biển ngọc bích của Việt Nam đến kinh đô ánh sáng châu Âu, mỗi điểm đến là một kiệt tác tự nhiên và văn hóa đang chờ bạn khám phá.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'Tất cả' },
              { id: 'Vietnam', label: 'Việt Nam' },
              { id: 'Asia', label: 'Châu Á' },
              { id: 'Europe', label: 'Châu Âu' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterRegion(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider transition-all duration-300 ${
                  filterRegion === tab.id
                    ? 'bg-gold-500 text-navy-950 font-bold shadow-gold'
                    : 'bg-navy-900 text-slate-300 hover:text-white border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest.name)}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-white/10 hover:border-gold-400/50 transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Image with 1.08x hover zoom */}
              <img
                src={dest.image}
                alt={dest.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 via-transparent to-navy-950/90" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="image-badge px-3 py-1 rounded-full text-[11px] font-semibold bg-navy-900/85 backdrop-blur-md text-white border border-white/25 shadow-md">
                  {dest.country}
                </span>
              </div>

              {/* Top Right Arrow */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-gold-500 group-hover:text-navy-950 group-hover:border-gold-400 transition-all duration-300 transform group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Bottom Content with Slide-up Animation */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform transition-transform duration-300 group-hover:-translate-y-1">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-gold-200 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1 font-light leading-relaxed group-hover:text-slate-200">
                  {dest.description}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-gold-400 font-medium pt-2 border-t border-white/10">
                  <span className="flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    {dest.toursCount} hành trình khám phá
                  </span>
                  <span className="text-slate-300 group-hover:text-gold-300 transition-colors">
                    Chi tiết →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onViewAllDestinations}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass-dark border border-gold-500/30 text-gold-300 text-xs font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 shadow-gold"
          >
            <span>Xem Tất Cả Điểm Đến Trên Thế Giới</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
