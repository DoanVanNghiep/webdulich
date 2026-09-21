import React, { useState, useMemo } from 'react';
import { Tour } from '../../types';
import { Search, Filter, SlidersHorizontal, Star, Clock, MapPin, ArrowRight, RotateCcw, Flame } from 'lucide-react';
import { SelectDropdown, SelectDropdownOption } from '../common/SelectDropdown';

interface TourListingProps {
  tours: Tour[];
  onSelectTour: (tour: Tour) => void;
  initialFilter?: string;
}

export const TourListing: React.FC<TourListingProps> = ({
  tours,
  onSelectTour,
  initialFilter = '',
}) => {
  const [searchTerm, setSearchTerm] = useState(initialFilter);
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(100000000);
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [selectedTourType, setSelectedTourType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const sortOptions: SelectDropdownOption<typeof sortBy>[] = [
    { value: 'featured', label: 'Sắp xếp: Nổi bật nhất' },
    { value: 'price-asc', label: 'Giá: Thấp → Cao' },
    { value: 'price-desc', label: 'Giá: Cao → Thấp' },
    { value: 'rating', label: 'Đánh giá cao nhất' },
  ];

  // Filter and sort logic
  const filteredTours = useMemo(() => {
    return tours
      .filter((tour) => {
        // Search term
        const matchesSearch =
          searchTerm === '' ||
          tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tour.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tour.country.toLowerCase().includes(searchTerm.toLowerCase());

        // Region
        const matchesRegion =
          selectedRegion === 'all' || tour.region === selectedRegion;

        // Price
        const matchesPrice = tour.price <= maxPrice;

        // Duration
        let matchesDuration = true;
        if (selectedDuration === 'short') matchesDuration = tour.days <= 3;
        else if (selectedDuration === 'medium') matchesDuration = tour.days >= 4 && tour.days <= 7;
        else if (selectedDuration === 'long') matchesDuration = tour.days >= 8;

        // Tour type
        const matchesType =
          selectedTourType === 'all' || tour.tourType === selectedTourType;

        return matchesSearch && matchesRegion && matchesPrice && matchesDuration && matchesType;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [tours, searchTerm, selectedRegion, maxPrice, selectedDuration, selectedTourType, sortBy]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedRegion('all');
    setMaxPrice(100000000);
    setSelectedDuration('all');
    setSelectedTourType('all');
    setSortBy('featured');
  };

  return (
    <div className="pt-28 pb-24 bg-navy-950 min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-2">
            Tuyển Tập Hành Trình 5 Sao
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100 leading-tight">
            Khám Phá Các Chuyến Đi <br />
            <span className="text-gold-gradient font-display italic font-normal">
              Đẳng Cấp Thượng Lưu
            </span>
          </h1>
          <p className="text-sm text-slate-300 mt-3 font-light">
            Chọn lựa trong hơn 100+ tour du lịch cao cấp trong nước và quốc tế, thiết kế riêng cho những trải nghiệm khó quên.
          </p>
        </div>

        {/* Mobile Filter Toggle & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm kiếm điểm đến, tên tour (Hạ Long, Phú Quốc, Tokyo, Paris...)"
              className="w-full bg-navy-900 border border-white/10 rounded-full pl-11 pr-4 py-3 text-xs sm:text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 shadow-inner"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <button
              onClick={() => setShowMobileFilter(!showMobileFilter)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 rounded-full bg-navy-900 border border-gold-500/30 text-xs font-semibold text-gold-300"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Bộ lọc ({filteredTours.length})</span>
            </button>

            <SelectDropdown
              value={sortBy}
              options={sortOptions}
              onChange={setSortBy}
              ariaLabel="Sắp xếp tour"
              className="w-full sm:w-56"
            />
          </div>
        </div>

        {/* Main Grid: Sidebar Filters + Tour Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Filter (Desktop + Mobile Collapse) */}
          <aside
            className={`lg:col-span-3 space-y-6 ${
              showMobileFilter ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="glass-dark p-6 rounded-2xl border border-gold-500/20 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-serif font-bold text-base text-slate-100 flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gold-400" />
                  Bộ Lọc Nâng Cao
                </span>
                <button
                  onClick={handleResetFilters}
                  className="text-xs text-gold-400 hover:text-gold-300 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  Đặt lại
                </button>
              </div>

              {/* Filter 1: Khu Vực */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold-300 mb-3">
                  Khu Vực Điểm Đến
                </h4>
                <div className="space-y-2 text-xs">
                  {[
                    { id: 'all', label: 'Tất cả khu vực' },
                    { id: 'Vietnam', label: 'Việt Nam' },
                    { id: 'Asia', label: 'Châu Á (Nhật, Hàn, Bali...)' },
                    { id: 'Europe', label: 'Châu Âu (Pháp, Thụy Sĩ, Ý...)' },
                  ].map((r) => (
                    <label
                      key={r.id}
                      className="flex items-center gap-2.5 cursor-pointer text-slate-300 hover:text-white"
                    >
                      <input
                        type="radio"
                        name="region"
                        checked={selectedRegion === r.id}
                        onChange={() => setSelectedRegion(r.id)}
                        className="accent-gold-500"
                      />
                      <span>{r.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter 2: Khoảng Giá Slider */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-xs mb-2">
                  <h4 className="font-bold uppercase tracking-wider text-gold-300">
                    Khoảng Giá Tối Đa
                  </h4>
                  <span className="font-mono text-gold-300 font-bold">
                    {(maxPrice / 1000000).toFixed(0)} triệu VNĐ
                  </span>
                </div>
                <input
                  type="range"
                  min="3000000"
                  max="100000000"
                  step="2000000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-gold-400 h-1.5 bg-navy-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>3 triệu</span>
                  <span>100 triệu</span>
                </div>
              </div>

              {/* Filter 3: Thời Lượng Chuyến Đi */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold-300 mb-3">
                  Thời Lượng
                </h4>
                <div className="space-y-2 text-xs">
                  {[
                    { id: 'all', label: 'Tất cả thời lượng' },
                    { id: 'short', label: '1 – 3 ngày (Kỳ nghỉ ngắn)' },
                    { id: 'medium', label: '4 – 7 ngày (Kỳ nghỉ tiêu chuẩn)' },
                    { id: 'long', label: '8+ ngày (Hành trình dài hạn)' },
                  ].map((d) => (
                    <label
                      key={d.id}
                      className="flex items-center gap-2.5 cursor-pointer text-slate-300 hover:text-white"
                    >
                      <input
                        type="radio"
                        name="duration"
                        checked={selectedDuration === d.id}
                        onChange={() => setSelectedDuration(d.id)}
                        className="accent-gold-500"
                      />
                      <span>{d.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter 4: Loại Hình Tour */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold-300 mb-3">
                  Loại Hình Tour
                </h4>
                <div className="space-y-2 text-xs">
                  {['all', 'Nghỉ dưỡng', 'Khám phá', 'Gia đình', 'Văn hóa'].map((t) => (
                    <label
                      key={t}
                      className="flex items-center gap-2.5 cursor-pointer text-slate-300 hover:text-white"
                    >
                      <input
                        type="radio"
                        name="tourType"
                        checked={selectedTourType === t}
                        onChange={() => setSelectedTourType(t)}
                        className="accent-gold-500"
                      />
                      <span>{t === 'all' ? 'Tất cả loại hình' : t}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Tour Cards Grid */}
          <main className="lg:col-span-9">
            <div className="mb-4 text-xs text-slate-400 flex items-center justify-between">
              <span>Hiển thị <strong>{filteredTours.length}</strong> hành trình phù hợp</span>
            </div>

            {filteredTours.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTours.map((tour) => (
                  <div
                    key={tour.id}
                    onClick={() => onSelectTour(tour)}
                    className="group flex flex-col rounded-2xl overflow-hidden glass-card glass-card-hover border border-white/10 cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
                  >
                    {/* Image */}
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />

                      {tour.bestSeller && (
                        <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-gold-500 text-navy-950 shadow-gold">
                          <Flame className="w-3 h-3 fill-current" />
                          <span>Best Seller</span>
                        </div>
                      )}

                      <div className="image-badge absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-[11px] font-bold bg-navy-950/85 backdrop-blur-md text-white border border-white/25">
                        {tour.tourType}
                      </div>

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

                    {/* Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2 text-xs">
                          <div className="flex items-center gap-1 text-amber-400">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <span className="font-bold text-slate-100">{tour.rating}</span>
                          </div>
                          <span className="text-slate-400">({tour.reviews} đánh giá)</span>
                        </div>

                        <h3 className="text-lg font-serif font-bold text-slate-100 line-clamp-2 group-hover:text-gold-300 transition-colors leading-snug">
                          {tour.title}
                        </h3>

                        <p className="text-xs text-slate-400 line-clamp-2 mt-2 leading-relaxed font-light">
                          {tour.subtitle}
                        </p>
                      </div>

                      {/* Pricing & CTA */}
                      <div className="card-action-row mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-medium">
                            Giá từ
                          </span>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-xl font-serif font-bold text-gold-300">
                              {tour.price.toLocaleString('vi-VN')}
                            </span>
                            <span className="text-xs text-slate-400 font-sans">VNĐ</span>
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectTour(tour);
                          }}
                          className="px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-500/15 text-gold-300 border border-gold-500/30 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all flex items-center gap-1.5 shadow-sm"
                        >
                          <span>Xem Chi Tiết</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 glass-dark rounded-2xl border border-white/10">
                <p className="text-base text-slate-300 font-serif">
                  Không tìm thấy hành trình phù hợp với tiêu chí lọc hiện tại.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-4 px-6 py-2.5 rounded-full bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-gold"
                >
                  Xóa Bộ Lọc
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
