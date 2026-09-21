import React, { useState } from 'react';
import { Tour } from '../../types';
import {
  Star,
  Clock,
  MapPin,
  Users,
  Calendar,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowLeft,
  ChevronDown,
  ShieldCheck,
  Send,
  Share2,
} from 'lucide-react';

interface TourDetailProps {
  tour: Tour;
  onBack: () => void;
  onBookNow: (tour: Tour) => void;
  onShare: (tourTitle: string) => void;
}

export const TourDetail: React.FC<TourDetailProps> = ({
  tour,
  onBack,
  onBookNow,
  onShare,
}) => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [adultCount, setAdultCount] = useState<number>(2);
  const [childCount, setChildCount] = useState<number>(0);
  const [selectedPackage, setSelectedPackage] = useState<'Standard' | 'Deluxe' | 'VIP Luxury'>('Deluxe');
  const [bookingDate, setBookingDate] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().split('T')[0];
  });

  // Price computation
  const multiplier = selectedPackage === 'VIP Luxury' ? 1.35 : selectedPackage === 'Deluxe' ? 1.15 : 1.0;
  const calculatedTotal = Math.round(
    (adultCount * tour.price + childCount * (tour.price * 0.7)) * multiplier
  );
  return (
    <div className="pt-24 pb-28 bg-navy-950 min-h-screen text-slate-100">
      {/* Top Back Nav & Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-gold-300 transition-colors py-2 px-3 rounded-full bg-white/5 border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay Lại Danh Sách Tour</span>
          </button>

          <button
            onClick={() => onShare(tour.title)}
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-gold-300 transition-colors py-2 px-3 rounded-full bg-white/5 border border-white/10"
          >
            <Share2 className="w-4 h-4" />
            <span>Chia sẻ</span>
          </button>
        </div>
      </div>

      {/* Hero Visual Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-gold-500/20">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

          {/* Hero Overlay Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-10 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-gold-500 text-navy-950 shadow-gold">
                {tour.tourType}
              </span>
              <span className="image-badge px-3 py-1 rounded-full text-xs font-bold bg-navy-900/85 backdrop-blur-md text-white border border-white/25">
                {tour.destination}
              </span>
              <div className="image-badge flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-900/85 backdrop-blur-md text-white text-xs font-bold border border-white/25">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>{tour.rating} ({tour.reviews} đánh giá)</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-100 leading-tight">
              {tour.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-light">
              {tour.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main Container: 2 Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Itinerary, Highlights, Inclusions (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Quick Specs Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl glass-dark border border-white/10">
              <div className="p-3 text-center sm:text-left">
                <Clock className="w-4 h-4 text-gold-400 mb-1 mx-auto sm:mx-0" />
                <span className="text-[10px] uppercase text-slate-400 block font-medium">Thời lượng</span>
                <span className="text-xs font-bold text-slate-100">{tour.duration}</span>
              </div>
              <div className="p-3 text-center sm:text-left">
                <Users className="w-4 h-4 text-gold-400 mb-1 mx-auto sm:mx-0" />
                <span className="text-[10px] uppercase text-slate-400 block font-medium">Quy mô đoàn</span>
                <span className="text-xs font-bold text-slate-100">{tour.groupSize}</span>
              </div>
              <div className="p-3 text-center sm:text-left">
                <MapPin className="w-4 h-4 text-gold-400 mb-1 mx-auto sm:mx-0" />
                <span className="text-[10px] uppercase text-slate-400 block font-medium">Khởi hành</span>
                <span className="text-xs font-bold text-slate-100 line-clamp-1">{tour.departure}</span>
              </div>
              <div className="p-3 text-center sm:text-left">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1 mx-auto sm:mx-0" />
                <span className="text-[10px] uppercase text-slate-400 block font-medium">Bảo hiểm</span>
                <span className="text-xs font-bold text-slate-100">Hạn mức 100M+</span>
              </div>
            </div>

            {/* Highlights Section */}
            <div className="glass-dark p-6 sm:p-8 rounded-2xl border border-gold-500/20 space-y-4">
              <h3 className="text-xl font-serif font-bold text-slate-100 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold-400" />
                Điểm Nhấn Nổi Bật Của Chuyến Đi
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {tour.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Itinerary Section */}
            <div className="glass-dark p-6 sm:p-8 rounded-2xl border border-gold-500/20 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block">
                    Chi Tiết Lộ Trình
                  </span>
                  <h3 className="text-xl font-serif font-bold text-slate-100">
                    Lịch Trình Chi Tiết Từng Ngày
                  </h3>
                </div>
                <span className="text-xs text-slate-400">
                  Tổng {tour.itinerary.length} ngày khám phá
                </span>
              </div>

              {/* Day Selection Pills */}
              <div className="flex flex-wrap gap-2">
                {tour.itinerary.map((day) => (
                  <button
                    key={day.day}
                    onClick={() => setActiveDay(day.day)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeDay === day.day
                        ? 'bg-gold-500 text-navy-950 shadow-gold'
                        : 'bg-navy-900 border border-white/10 text-slate-300 hover:border-gold-500/40'
                    }`}
                  >
                    Ngày 0{day.day}
                  </button>
                ))}
              </div>

              {/* Itinerary Timeline list */}
              <div className="space-y-6 pt-4">
                {tour.itinerary.map((day) => {
                  const isOpened = activeDay === day.day;
                  return (
                    <div
                      key={day.day}
                      className={`rounded-2xl border transition-all duration-300 ${
                        isOpened
                          ? 'border-gold-500/50 bg-navy-850/70 p-6'
                          : 'border-white/5 bg-navy-900/40 p-4 cursor-pointer hover:border-white/20'
                      }`}
                      onClick={() => !isOpened && setActiveDay(day.day)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-sm ${
                            isOpened
                              ? 'bg-gold-500 text-navy-950 shadow-gold'
                              : 'bg-navy-800 text-slate-400'
                          }`}>
                            0{day.day}
                          </div>
                          <div>
                            <h4 className="text-base font-serif font-bold text-slate-100">
                              {day.title}
                            </h4>
                            <p className="text-xs text-slate-300 mt-0.5">{day.desc}</p>
                          </div>
                        </div>
                      </div>

                      {/* Expanded Day Activities */}
                      {isOpened && (
                        <div className="mt-6 pt-4 border-t border-white/10 space-y-2.5">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400 block mb-2">
                            Hoạt động chi tiết trong ngày:
                          </span>
                          {day.activities.map((act, actIdx) => (
                            <div key={actIdx} className="flex items-start gap-3 text-xs text-slate-200">
                              <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 flex-shrink-0" />
                              <span className="leading-relaxed">{act}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="glass-dark p-6 rounded-2xl border border-emerald-500/20 space-y-4">
                <h4 className="font-serif font-bold text-base text-slate-100 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Dịch Vụ Bao Gồm (Inclusions)
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {tour.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="glass-dark p-6 rounded-2xl border border-rose-500/20 space-y-4">
                <h4 className="font-serif font-bold text-base text-slate-100 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-400" />
                  Không Bao Gồm (Exclusions)
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {tour.excluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking Widget (4 cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="glass-dark p-6 sm:p-7 rounded-3xl border border-gold-500/40 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-gold-500/10 rounded-full blur-xl pointer-events-none" />

              <div className="border-b border-white/10 pb-4 mb-5">
                <span className="text-[11px] uppercase tracking-widest text-gold-400 font-semibold block">
                  Báo Giá Trực Tiếp
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-gold-300">
                    {tour.price.toLocaleString('vi-VN')}
                  </span>
                  <span className="text-xs text-slate-400 font-sans">VNĐ / Khách</span>
                </div>
              </div>

              {/* Form Controls */}
              <div className="space-y-4">
                {/* Date */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    Ngày khởi hành
                  </label>
                  <input
                    type="date"
                    value={bookingDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full bg-navy-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-gold-400"
                  />
                </div>

                {/* Guests */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-navy-900 border border-white/10 p-2.5 rounded-xl text-xs">
                    <span className="text-slate-400 block text-[11px]">Người lớn</span>
                    <div className="flex items-center justify-between mt-1">
                      <button
                        onClick={() => setAdultCount(Math.max(1, adultCount - 1))}
                        className="w-6 h-6 rounded bg-white/10 font-bold hover:bg-gold-500 hover:text-navy-950"
                      >
                        -
                      </button>
                      <span className="font-bold text-gold-300">{adultCount}</span>
                      <button
                        onClick={() => setAdultCount(adultCount + 1)}
                        className="w-6 h-6 rounded bg-white/10 font-bold hover:bg-gold-500 hover:text-navy-950"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="bg-navy-900 border border-white/10 p-2.5 rounded-xl text-xs">
                    <span className="text-slate-400 block text-[11px]">Trẻ em</span>
                    <div className="flex items-center justify-between mt-1">
                      <button
                        onClick={() => setChildCount(Math.max(0, childCount - 1))}
                        className="w-6 h-6 rounded bg-white/10 font-bold hover:bg-gold-500 hover:text-navy-950"
                      >
                        -
                      </button>
                      <span className="font-bold text-gold-300">{childCount}</span>
                      <button
                        onClick={() => setChildCount(childCount + 1)}
                        className="w-6 h-6 rounded bg-white/10 font-bold hover:bg-gold-500 hover:text-navy-950"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Package select */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Hạng dịch vụ
                  </label>
                  <select
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value as any)}
                    className="w-full bg-navy-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-gold-400 cursor-pointer"
                  >
                    <option value="Standard">Tiêu Chuẩn (Khách sạn 4 sao)</option>
                    <option value="Deluxe">Cao Cấp (Resort 5 sao quốc tế)</option>
                    <option value="VIP Luxury">Thượng Lưu (Villa & Limousine riêng)</option>
                  </select>
                </div>

                {/* Total computation */}
                <div className="pt-3 border-t border-white/10 space-y-1">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Tạm tính ({adultCount} lớn{childCount > 0 ? `, ${childCount} trẻ` : ''}):</span>
                    <span className="font-mono text-slate-200">{calculatedTotal.toLocaleString('vi-VN')} đ</span>
                  </div>
                  <div className="flex justify-between text-xs text-emerald-400 font-medium">
                    <span>Bảo hiểm & VAT:</span>
                    <span>Đã bao gồm</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-slate-100 pt-2 border-t border-white/5">
                    <span>Tổng cộng:</span>
                    <span className="text-xl font-serif text-gold-300">{calculatedTotal.toLocaleString('vi-VN')} đ</span>
                  </div>
                </div>

                {/* Book Action Button */}
                <button
                  onClick={() => onBookNow(tour)}
                  className="w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-widest bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-navy-950 shadow-gold hover:shadow-gold-lg hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-navy-950" />
                  <span>Đặt Tour Ngay Bây Giờ</span>
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  Hỗ trợ tư vấn riêng 24/7 qua Hotline <strong className="text-gold-300">1900 888 999</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
