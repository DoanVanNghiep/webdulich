import React, { useState, useMemo } from 'react';
import { DESTINATIONS_DATA } from '../../data/destinationsData';
import { Destination } from '../../types';
import { Search, Compass, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';

interface DestinationViewProps {
  onSelectDestination: (destName: string) => void;
}

export const DestinationView: React.FC<DestinationViewProps> = ({ onSelectDestination }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<'all' | 'Vietnam' | 'Asia' | 'Europe' | 'Americas' | 'Australia'>('all');

  const filtered = useMemo(() => {
    return DESTINATIONS_DATA.filter((dest) => {
      const matchSearch =
        searchTerm === '' ||
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.country.toLowerCase().includes(searchTerm.toLowerCase());
      const matchRegion = selectedRegion === 'all' || dest.region === selectedRegion;
      return matchSearch && matchRegion;
    });
  }, [searchTerm, selectedRegion]);

  return (
    <div className="pt-28 pb-24 bg-navy-950 min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>World Class Destinations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100 leading-tight">
            Khám Phá Các Điểm Đến <br />
            <span className="text-gold-gradient font-display italic font-normal">
              Quyến Rũ Nhất Thế Giới
            </span>
          </h1>
          <p className="text-sm text-slate-300 mt-3 font-light">
            Mỗi điểm đến là một thiên đường nghỉ dưỡng và khám phá được Golden Trip tuyển chọn với tiêu chuẩn khắt khe nhất.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Region Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'Tất cả' },
              { id: 'Vietnam', label: 'Việt Nam' },
              { id: 'Asia', label: 'Châu Á' },
              { id: 'Europe', label: 'Châu Âu' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedRegion(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider transition-all ${
                  selectedRegion === tab.id
                    ? 'bg-gold-500 text-navy-950 font-bold shadow-gold'
                    : 'bg-navy-900 text-slate-300 hover:text-white border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm điểm đến..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-navy-900 border border-white/10 rounded-full pl-10 pr-4 py-2 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest.name)}
              className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl border border-white/10 hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <img
                src={dest.image}
                alt={dest.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-4 left-4 z-10">
                <span className="image-badge px-3 py-1 rounded-full text-xs font-semibold bg-navy-900/85 backdrop-blur-md text-white border border-white/25">
                  {dest.country}
                </span>
              </div>

              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-gold-500 group-hover:text-navy-950 group-hover:border-gold-400 transition-all duration-300 transform group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                <h3 className="text-3xl font-serif font-bold text-white group-hover:text-gold-200 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-light">
                  {dest.description}
                </p>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-gold-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Compass className="w-4 h-4" />
                    {dest.toursCount} tour đang mở bán
                  </span>
                  <span className="text-slate-300 group-hover:text-gold-300">
                    Xem tour →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
