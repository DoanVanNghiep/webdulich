import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface NewsletterSectionProps {
  onSubscribe: (email: string) => void;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      alert('Vui lòng nhập địa chỉ email hợp lệ');
      return;
    }
    setIsSubmitted(true);
    onSubscribe(email);
  };

  return (
    <section className="py-20 bg-navy-950 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-dark p-8 sm:p-14 rounded-3xl border border-gold-500/30 shadow-2xl relative overflow-hidden text-center">
          {/* Decorative ambient background glows */}
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-ocean-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Golden Trip Privileges Club</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">
              Don't Miss Your Next Adventure
            </h2>

            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Đăng ký để trở thành thành viên danh dự, nhận ngay voucher ưu đãi <strong className="text-gold-300">1.000.000 VNĐ</strong> và những bản tin du lịch thượng lưu độc quyền hàng tuần.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto">
                <div className="relative w-full">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập địa chỉ email của bạn..."
                    className="w-full bg-navy-900/90 border border-white/10 rounded-full pl-11 pr-4 py-3.5 text-xs sm:text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 transition-colors shadow-inner"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto flex-shrink-0 px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-navy-950 shadow-gold hover:shadow-gold-lg hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Đăng Ký
                </button>
              </form>
            ) : (
              <div className="mt-8 p-4 rounded-2xl bg-gold-500/15 border border-gold-500/40 flex items-center justify-center gap-3 text-sm text-gold-300 font-medium animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-gold-400" />
                <span>Cảm ơn bạn! Mã ưu đãi VIP đã được gửi tới hộp thư {email}.</span>
              </div>
            )}

            <p className="text-[11px] text-slate-500 mt-3">
              Cam kết bảo mật thông tin tuyệt đối. Bạn có thể hủy nhận tin bất kỳ lúc nào.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
