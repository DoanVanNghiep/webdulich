import React from 'react';
import { Compass, Phone, Mail, MapPin, ShieldCheck, Award, HeartHandshake, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative bg-gradient-to-b from-navy-900 to-navy-950 text-slate-300 pt-20 pb-12 border-t border-gold-500/20 overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gold-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gold-400/50 bg-navy-800/80 shadow-gold">
                <Compass className="w-6 h-6 text-gold-400" />
              </div>
              <span className="font-display font-bold text-2xl tracking-[0.16em] text-gold-gradient">
                GOLDEN TRIP
              </span>
            </div>
            <p className="text-sm font-serif italic text-gold-300">
              "Your Journey, Our Story — Khám phá thế giới, kiến tạo hành trình."
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Đơn vị tiên phong cung cấp giải pháp du lịch và nghỉ dưỡng thượng lưu tại Việt Nam. Chúng tôi kiến tạo những trải nghiệm mang đậm tính cá nhân hóa, tiêu chuẩn 5 sao quốc tế và sự chăm sóc ân cần nhất.
            </p>
            
            {/* Certifications badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-[11px] text-slate-300 bg-white/5 py-1.5 px-3 rounded-lg border border-white/5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Giấy phép Lữ Hành QT 01-1428</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-300 bg-white/5 py-1.5 px-3 rounded-lg border border-white/5">
                <Award className="w-4 h-4 text-gold-400" />
                <span>Top 10 Luxury Travel 2024</span>
              </div>
            </div>
          </div>

          {/* Nav Links Col 1: Khám phá */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-100 font-sans mb-4 border-l-2 border-gold-500 pl-3">
              Khám Phá
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-gold-300 transition-colors">
                  Trang chủ
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tours')} className="hover:text-gold-300 transition-colors">
                  Tour du lịch cao cấp
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('destinations')} className="hover:text-gold-300 transition-colors">
                  Điểm đến nổi tiếng
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('deals')} className="hover:text-gold-300 transition-colors">
                  Ưu đãi Golden Deals
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-gold-300 transition-colors">
                  Cẩm nang du lịch
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Links Col 2: Hỗ trợ & Chính sách */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-100 font-sans mb-4 border-l-2 border-gold-500 pl-3">
              Chính Sách & FAQ
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-gold-300 transition-colors">
                  Về Golden Trip
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-gold-300 transition-colors">
                  Câu hỏi thường gặp (FAQ)
                </button>
              </li>
              <li>
                <span className="hover:text-gold-300 cursor-pointer transition-colors">
                  Chính sách bảo mật
                </span>
              </li>
              <li>
                <span className="hover:text-gold-300 cursor-pointer transition-colors">
                  Điều khoản hoàn hủy linh hoạt
                </span>
              </li>
              <li>
                <span className="hover:text-gold-300 cursor-pointer transition-colors">
                  Bảo hiểm du lịch 5 sao
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-100 font-sans mb-4 border-l-2 border-gold-500 pl-3">
              Liên Hệ 24/7
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Tòa tháp Golden Tower, 08 Lý Thường Kiệt, Hoàn Kiếm, Hà Nội</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span className="font-semibold text-slate-200">1900 888 999 - (024) 3999 8888</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>hello@goldentriptravel.vn</span>
              </div>

              {/* Social icons */}
              <div className="pt-2">
                <span className="text-[11px] text-slate-400 block mb-2 font-medium">Mạng Xã Hội</span>
                <div className="flex items-center gap-2.5">
                  {['Facebook', 'Instagram', 'TikTok', 'YouTube'].map((net) => (
                    <a
                      key={net}
                      href={`https://${net.toLowerCase()}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs hover:border-gold-400 hover:text-gold-400 hover:bg-gold-500/10 transition-all duration-200"
                    >
                      {net[0]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-4">
          <p>© {new Date().getFullYear()} Golden Trip Travel. All rights reserved. Designed for Luxury Explorers.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Globe className="w-3.5 h-3.5 text-gold-400" />
              <span>Tiếng Việt (VN)</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <HeartHandshake className="w-3.5 h-3.5 text-gold-400" />
              <span>Dịch vụ tận tâm</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
