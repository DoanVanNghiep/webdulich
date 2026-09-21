import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from 'lucide-react';

interface ContactViewProps {
  onSendMessageSuccess: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onSendMessageSuccess }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [openedFaq, setOpenedFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Quy trình đặt tour tại Golden Trip Travel diễn ra như thế nào?',
      a: 'Quý khách có thể đặt tour trực tiếp trên website hoặc gọi qua Hotline 1900 888 999. Chuyên viên tư vấn VIP sẽ liên hệ trong 15 phút để hoàn thiện lịch trình cá nhân hóa, xác nhận dịch vụ và gửi hợp đồng điện tử.',
    },
    {
      q: 'Golden Trip Travel có hỗ trợ làm visa du lịch không?',
      a: 'Có. Chúng tôi sở hữu đội ngũ chuyên viên xử lý hồ sơ visa tỉ lệ đậu lên đến 99% cho các thị trường khó như Châu Âu (Schengen), Nhật Bản, Hàn Quốc, Mỹ, Canada và Úc.',
    },
    {
      q: 'Chính sách hoàn hủy tour của công ty như thế nào?',
      a: 'Chúng tôi áp dụng chính sách hoàn hủy linh hoạt nhất thị trường. Trong các trường hợp bất khả kháng hoặc quý khách đổi kế hoạch trước 15 ngày khởi hành, công ty hỗ trợ bảo lưu 100% chi phí sang tour khác trong vòng 12 tháng.',
    },
    {
      q: 'Tôi có thể yêu cầu thiết kế tour riêng cho gia đình hoặc công ty không?',
      a: 'Hoàn toàn được! Dịch vụ Bespoke Tour là thế mạnh hàng đầu của Golden Trip Travel. Chúng tôi thiết kế từ phương tiện di chuyển Limousine/Private Jet, biệt thự nghỉ dưỡng riêng, đến đầu bếp riêng chuẩn Michelin theo ý quý khách.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Vui lòng nhập tên và số điện thoại');
      return;
    }
    setIsSent(true);
    onSendMessageSuccess();
  };

  return (
    <div className="pt-28 pb-24 bg-navy-950 min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>24/7 VIP Concierge</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100 leading-tight">
            Liên Hệ Với Chúng Tôi <br />
            <span className="text-gold-gradient font-display italic font-normal">
              Đồng Hành Cùng Hành Trình Của Bạn
            </span>
          </h1>
          <p className="text-sm text-slate-300 mt-3 font-light">
            Các chuyên viên tư vấn cao cấp của Golden Trip luôn sẵn sàng lắng nghe và giải đáp mọi mong muốn du lịch của quý khách.
          </p>
        </div>

        {/* 2-Column: Form + Office Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 glass-dark p-8 sm:p-10 rounded-3xl border border-gold-500/30 shadow-2xl">
            <h3 className="text-xl font-serif font-bold text-slate-100 mb-2">
              Gửi Yêu Cầu Tư Vấn Riêng
            </h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Điền thông tin bên dưới, chuyên viên chăm sóc khách hàng VIP sẽ liên hệ lại với quý khách trong thời gian sớm nhất.
            </p>

            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-100 focus:outline-none focus:border-gold-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0912 345 678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-100 focus:outline-none focus:border-gold-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email liên hệ
                    </label>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-100 focus:outline-none focus:border-gold-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Điểm đến quý khách quan tâm
                    </label>
                    <input
                      type="text"
                      placeholder="Châu Âu, Nhật Bản, Hạ Long, Phú Quốc..."
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-100 focus:outline-none focus:border-gold-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Ghi chú chi tiết mong muốn của quý khách
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Số lượng thành viên, ngày khởi hành dự kiến, sở thích đặc biệt..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-100 focus:outline-none focus:border-gold-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-bold text-xs uppercase tracking-widest bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-navy-950 shadow-gold hover:shadow-gold-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-navy-950" />
                  <span>Gửi Yêu Cầu Cho Chuyên Viên</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gold-500/20 border-2 border-gold-400 flex items-center justify-center mx-auto text-gold-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-100">
                  Đã Gửi Thành Công!
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Cảm ơn quý khách {name}. Chuyên viên quản gia du lịch của Golden Trip Travel sẽ kết nối với quý khách qua số {phone} trong vòng 15 phút.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="px-6 py-2 rounded-full bg-navy-800 text-gold-300 border border-gold-500/30 text-xs font-semibold"
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            )}
          </div>

          {/* Right Offices Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-dark p-6 sm:p-8 rounded-3xl border border-gold-500/20 space-y-6">
              <h3 className="text-xl font-serif font-bold text-slate-100 border-b border-white/10 pb-3">
                Hệ Thống Văn Phòng VIP
              </h3>

              <div className="space-y-5 text-xs text-slate-300">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-gold-300 font-bold text-sm">
                    <MapPin className="w-4 h-4 text-gold-400" />
                    <span>Trụ Sở Chính — Hà Nội</span>
                  </div>
                  <p className="pl-6 text-slate-400">Tầng 18, Tòa tháp Golden Tower, 08 Lý Thường Kiệt, Quận Hoàn Kiếm, Hà Nội</p>
                  <p className="pl-6 text-slate-400">Hotline: 024 3999 8888</p>
                </div>

                <div className="space-y-1.5 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-gold-300 font-bold text-sm">
                    <MapPin className="w-4 h-4 text-gold-400" />
                    <span>Chi Nhánh — TP. Hồ Chí Minh</span>
                  </div>
                  <p className="pl-6 text-slate-400">Tầng 12, Tòa nhà Bitexco Financial Tower, Quận 1, TP.HCM</p>
                  <p className="pl-6 text-slate-400">Hotline: 028 3888 9999</p>
                </div>

                <div className="space-y-1.5 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-gold-300 font-bold text-sm">
                    <MapPin className="w-4 h-4 text-gold-400" />
                    <span>Văn Phòng Đại Diện — Đà Nẵng</span>
                  </div>
                  <p className="pl-6 text-slate-400">Số 12 Bạch Đằng, Quận Hải Châu, TP. Đà Nẵng</p>
                  <p className="pl-6 text-slate-400">Hotline: 0236 3777 888</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-slate-300 font-medium">Giờ làm việc: 08:00 – 21:00 (Cả Thứ 7, CN)</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto pt-6">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-1">
              Giải Đáp Thắc Mắc
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100">
              Câu Hỏi Thường Gặp (FAQ)
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpened = openedFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl glass-dark border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenedFaq(isOpened ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-slate-100 hover:text-gold-300 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpened ? (
                      <ChevronUp className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpened && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
