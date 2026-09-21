import React, { useState } from 'react';
import { Tour } from '../../types';
import { X, Calendar, Users, ShieldCheck, Car, Check, Sparkles, Phone, Mail, User, Info } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  tour: Tour | null;
  onClose: () => void;
  onSuccess: (bookingDetails: any) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  tour,
  onClose,
  onSuccess,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [departureDate, setDepartureDate] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().split('T')[0];
  });
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [packageType, setPackageType] = useState<'Standard' | 'Deluxe' | 'VIP Luxury'>('Deluxe');
  const [includeInsurance, setIncludeInsurance] = useState<boolean>(true);
  const [includeAirportTransfer, setIncludeAirportTransfer] = useState<boolean>(true);

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen || !tour) return null;

  // Pricing formula
  const basePrice = tour.price;
  const packageMultiplier = packageType === 'VIP Luxury' ? 1.35 : packageType === 'Deluxe' ? 1.15 : 1.0;
  const adultSubtotal = adults * basePrice * packageMultiplier;
  const childSubtotal = children * (basePrice * 0.7) * packageMultiplier;
  const insurancePrice = includeInsurance ? (adults + children) * 350000 : 0;
  const transferPrice = includeAirportTransfer ? 850000 : 0;
  const grandTotal = Math.round(adultSubtotal + childSubtotal + insurancePrice + transferPrice);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) {
      alert('Vui lòng nhập họ tên và số điện thoại liên hệ');
      return;
    }

    const ref = 'GT-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setStep('success');

    onSuccess({
      tourTitle: tour.title,
      departureDate,
      adults,
      children,
      packageType,
      grandTotal,
      customerName,
      bookingRef: ref,
    });
  };

  const handleResetAndClose = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-gradient-to-b from-navy-900 to-navy-950 border border-gold-500/30 rounded-2xl shadow-2xl shadow-navy-950/90 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold-500/20 bg-navy-850/80">
          <div>
            <span className="text-[11px] font-sans uppercase tracking-widest text-gold-400 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Dịch Vụ Đặt Tour Thượng Lưu
            </span>
            <h3 className="text-xl font-serif text-slate-100 font-bold mt-0.5">{tour.title}</h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Tour Mini Summary */}
            <div className="flex items-center gap-4 p-3.5 rounded-xl bg-navy-800/40 border border-white/5">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-20 h-16 object-cover rounded-lg border border-gold-500/20"
              />
              <div className="flex-1">
                <div className="text-xs text-gold-400 font-medium">{tour.destination} • {tour.duration}</div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">
                  Giá từ: <span className="text-gold-300 font-serif font-bold text-base">{tour.price.toLocaleString('vi-VN')} đ</span> / khách
                </div>
              </div>
            </div>

            {/* Step 1: Chọn ngày & hành khách */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gold-400" />
                  Ngày khởi hành dự kiến
                </label>
                <input
                  type="date"
                  value={departureDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="w-full bg-navy-800/80 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-gold-400 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-gold-400" />
                  Số lượng hành khách
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center justify-between bg-navy-800/80 border border-white/10 rounded-xl px-3 py-2 text-xs">
                    <span className="text-slate-300">Người lớn:</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-6 h-6 rounded bg-white/10 flex items-center justify-center font-bold text-slate-200 hover:bg-gold-500 hover:text-navy-950"
                      >
                        -
                      </button>
                      <span className="font-bold text-gold-300 text-sm">{adults}</span>
                      <button
                        type="button"
                        onClick={() => setAdults(adults + 1)}
                        className="w-6 h-6 rounded bg-white/10 flex items-center justify-center font-bold text-slate-200 hover:bg-gold-500 hover:text-navy-950"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-navy-800/80 border border-white/10 rounded-xl px-3 py-2 text-xs">
                    <span className="text-slate-300">Trẻ em:</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-6 h-6 rounded bg-white/10 flex items-center justify-center font-bold text-slate-200 hover:bg-gold-500 hover:text-navy-950"
                      >
                        -
                      </button>
                      <span className="font-bold text-gold-300 text-sm">{children}</span>
                      <button
                        type="button"
                        onClick={() => setChildren(children + 1)}
                        className="w-6 h-6 rounded bg-white/10 flex items-center justify-center font-bold text-slate-200 hover:bg-gold-500 hover:text-navy-950"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Chọn gói dịch vụ */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                Hạng dịch vụ mong muốn
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'Standard',
                    name: 'Tiêu Chuẩn',
                    desc: 'Khách sạn 4 sao, bữa ăn trọn gói, xe du lịch đời mới',
                  },
                  {
                    id: 'Deluxe',
                    name: 'Cao Cấp (Khuyên dùng)',
                    desc: 'Khách sạn 5 sao trung tâm, view biển/thành phố, tiệc đặc sản',
                  },
                  {
                    id: 'VIP Luxury',
                    name: 'Thượng Lưu Toàn Năng',
                    desc: 'Villa/Suite cao cấp, xe Limousine riêng, quà tặng rượu vang',
                  },
                ].map((pkg) => {
                  const isSelected = packageType === pkg.id;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setPackageType(pkg.id as any)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'border-gold-400 bg-gold-500/10 shadow-gold'
                          : 'border-white/10 bg-navy-800/40 hover:border-gold-500/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold ${isSelected ? 'text-gold-300' : 'text-slate-200'}`}>
                          {pkg.name}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-gold-400" />}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 leading-snug">{pkg.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Dịch vụ cộng thêm */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                Đặc quyền bổ sung (Tùy chọn)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    includeInsurance
                      ? 'border-gold-500/40 bg-navy-800/70'
                      : 'border-white/10 bg-navy-800/30'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={includeInsurance}
                    onChange={(e) => setIncludeInsurance(e.target.checked)}
                    className="rounded accent-gold-500 w-4 h-4"
                  />
                  <div className="flex-1 text-xs">
                    <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Bảo hiểm VIP toàn cầu
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Hạn mức bồi thường 1 tỷ VNĐ/người</div>
                  </div>
                </label>

                <label
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    includeAirportTransfer
                      ? 'border-gold-500/40 bg-navy-800/70'
                      : 'border-white/10 bg-navy-800/30'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={includeAirportTransfer}
                    onChange={(e) => setIncludeAirportTransfer(e.target.checked)}
                    className="rounded accent-gold-500 w-4 h-4"
                  />
                  <div className="flex-1 text-xs">
                    <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5 text-gold-400" />
                      Đón tiễn Limousine riêng sân bay
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Xe riêng chuẩn VIP đưa tận nơi</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Step 4: Thông tin khách hàng */}
            <div className="border-t border-white/10 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-3">
                Thông tin người đặt tour
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Họ và tên *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-navy-800/80 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-gold-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Số điện thoại *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="0912 345 678"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-navy-800/80 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-gold-400"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] text-slate-400 mb-1">Email nhận xác nhận</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="quykhach@gmail.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full bg-navy-800/80 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-gold-400"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] text-slate-400 mb-1">Ghi chú hoặc yêu cầu cá nhân</label>
                  <textarea
                    rows={2}
                    placeholder="Ví dụ: Ăn chay, phòng tầng cao, tổ chức kỷ niệm ngày cưới..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full bg-navy-800/80 border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>
            </div>

            {/* Total Pricing & Action */}
            <div className="p-4 rounded-xl bg-navy-850/90 border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400">Tổng chi phí dự tính ({adults} lớn{children > 0 ? `, ${children} trẻ` : ''}):</span>
                <div className="text-2xl font-serif font-bold text-gold-300">
                  {grandTotal.toLocaleString('vi-VN')} <span className="text-sm font-sans text-slate-300">VNĐ</span>
                </div>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                  <Info className="w-3 h-3" /> Đã bao gồm thuế & bảo hiểm cao cấp
                </span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-navy-950 shadow-gold hover:shadow-gold-lg hover:scale-105 active:scale-95 transition-all"
              >
                Xác Nhận Giữ Chỗ VIP
              </button>
            </div>
          </form>
        ) : (
          /* Success Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-gold-500/20 border-2 border-gold-400 flex items-center justify-center mx-auto shadow-gold animate-bounce">
              <Check className="w-8 h-8 text-gold-400" />
            </div>

            <div>
              <span className="text-xs text-gold-400 font-semibold tracking-widest uppercase">
                Đặt Tour Thành Công
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-100 mt-1">
                Cảm Ơn Quý Khách, {customerName}!
              </h3>
              <p className="text-xs text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                Yêu cầu đặt chỗ của quý khách đã được chuyển tới chuyên viên tư vấn riêng của Golden Trip Travel. Chúng tôi sẽ liên hệ lại qua số điện thoại <strong className="text-gold-300">{customerPhone}</strong> trong vòng 15 phút.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="max-w-md mx-auto p-4 rounded-xl bg-navy-800/80 border border-gold-500/30 text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400">Mã đặt chỗ:</span>
                <span className="font-mono font-bold text-gold-300">{bookingRef}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400">Hành trình:</span>
                <span className="font-semibold text-slate-200 text-right">{tour.title}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400">Khởi hành:</span>
                <span className="font-semibold text-slate-200">{departureDate}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400">Hạng dịch vụ:</span>
                <span className="font-semibold text-gold-300">{packageType}</span>
              </div>
              <div className="flex justify-between pt-1 text-sm font-bold">
                <span className="text-slate-200">Tổng thanh toán:</span>
                <span className="text-gold-300 font-serif text-base">{grandTotal.toLocaleString('vi-VN')} đ</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 pt-2">
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-full bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-400 shadow-gold"
              >
                Hoàn Tất & Khám Phá Tiếp
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
