import React from 'react';
import { MapPin, ZoomIn } from 'lucide-react';

interface TravelGalleryProps {
  onOpenImage: (index: number) => void;
}

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const GALLERY_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    location: 'Bãi Khem, Phú Quốc',
    caption: 'Hoàng hôn tím trên bờ cát trắng mịn như kem',
  },
  {
    url: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    location: 'Vịnh Hạ Long',
    caption: 'Du thuyền rẽ sóng qua nghìn đảo ngọc',
  },
  {
    url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    location: 'Núi Phú Sĩ, Nhật Bản',
    caption: 'Sớm mai tuyết phủ bóng hồ Kawaguchiko',
  },
  {
    url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    location: 'Tháp Eiffel, Paris',
    caption: 'Ánh đèn vàng kinh đô ánh sáng lung linh',
  },
  {
    url: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    location: 'Núi Titlis, Thụy Sĩ',
    caption: 'Đỉnh tuyết vĩnh cửu ngút ngàn dãy Alps',
  },
  {
    url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    location: 'Cổng Trời Lempuyang, Bali',
    caption: 'Giao thoa đất trời trên đỉnh mây ngàn',
  },
];

export const TravelGallery: React.FC<TravelGalleryProps> = ({ onOpenImage }) => {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@goldentriptravel</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-100 leading-tight">
              Follow The Journey <br />
              <span className="text-gold-gradient font-display italic font-normal">
                Khoảnh Khắc Du Khách
              </span>
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-300 hover:text-gold-400 border-b border-gold-400/40 pb-1"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Theo Dõi Trên Instagram</span>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              onClick={() => onOpenImage(idx)}
              className="group relative h-56 sm:h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-white/10 hover:border-gold-400/50 transition-all duration-300"
            >
              <img
                src={img.url}
                alt={img.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Dark Overlay & Icons */}
              <div className="absolute inset-0 bg-navy-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-left">
                <div className="flex justify-between items-center">
                  <InstagramIcon className="w-4 h-4 text-gold-400" />
                  <ZoomIn className="w-4 h-4 text-slate-300" />
                </div>

                <div>
                  <div className="flex items-center gap-1 text-[10px] text-gold-300 font-semibold uppercase tracking-wider mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{img.location}</span>
                  </div>
                  <p className="text-xs text-slate-200 line-clamp-2 leading-snug font-serif italic">
                    "{img.caption}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
