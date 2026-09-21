import React from 'react';
import { Award, Compass, ShieldCheck, HeartHandshake, Users, Globe, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutViewProps {
  onExploreTours: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onExploreTours }) => {
  return (
    <div className="pt-28 pb-24 bg-navy-950 min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Heritage & Excellence</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100 leading-tight">
            Về Golden Trip Travel <br />
            <span className="text-gold-gradient font-display italic font-normal">
              Kiến Tạo Hành Trình Thượng Lưu
            </span>
          </h1>
          <p className="text-sm text-slate-300 mt-4 leading-relaxed font-light">
            Hơn 10 năm đồng hành cùng những người yêu xê dịch tinh tế, chúng tôi biến mỗi chuyến đi thành một tác phẩm nghệ thuật đong đầy cảm xúc.
          </p>
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gold-500/30">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                alt="Golden Trip Story"
                className="w-full h-[460px] object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-sm text-slate-300 leading-relaxed font-light">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100">
              Khởi Đầu Từ Niềm Đam Mê Du Lịch Bất Tận
            </h2>
            <p>
              Golden Trip Travel được thành lập với tầm nhìn trở thành thương hiệu lữ hành cao cấp hàng đầu Việt Nam. Chúng tôi tin rằng, du lịch không chỉ là chuyển dời địa lý, mà là cơ hội tái tạo năng lượng, gắn kết gia đình và khám phá những chân trời văn hóa mới.
            </p>
            <p>
              Với tiêu chuẩn khắt khe, chúng tôi hợp tác trực tiếp với các tập đoàn khách sạn 5 sao toàn cầu như Marriott, Accor, Four Seasons, cùng các hãng hàng không danh tiếng để mang tới cho khách hàng trải nghiệm chuẩn mực nhất.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 mt-0.5" />
                <span>100% Tour tuyển chọn chuẩn VIP</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 mt-0.5" />
                <span>Đội ngũ chuyên viên phục vụ 24/7</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 mt-0.5" />
                <span>Bảo hiểm toàn cầu hạn mức cao</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 mt-0.5" />
                <span>Thiết kế hành trình độc bản</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Values */}
        <div className="mb-20">
          <h3 className="text-center font-serif text-3xl font-bold text-slate-100 mb-12">
            Giá Trị Cốt Lõi Của Chúng Tôi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Đẳng Cấp',
                desc: 'Chỉ chọn lọc những dịch vụ nghỉ dưỡng, hàng không và ẩm thực tốt nhất thế giới.',
                icon: Award,
              },
              {
                title: 'Tận Tâm',
                desc: 'Chăm sóc chu đáo từng chi tiết nhỏ nhất trong suốt hành trình của quý khách.',
                icon: HeartHandshake,
              },
              {
                title: 'Minh Bạch',
                desc: 'Chi phí rõ ràng, không phát sinh phụ phí ẩn, tôn trọng quyền lợi của khách hàng.',
                icon: ShieldCheck,
              },
              {
                title: 'Sáng Tạo',
                desc: 'Không ngừng khám phá những cung đường mới lạ, độc đáo và giàu cảm xúc.',
                icon: Compass,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-dark p-6 rounded-2xl border border-white/10 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center text-gold-400 mx-auto">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-slate-100">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <button
            onClick={onExploreTours}
            className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-navy-950 shadow-gold hover:shadow-gold-lg hover:scale-105 active:scale-95 transition-all"
          >
            Khám Phá Các Hành Trình Mới
          </button>
        </div>
      </div>
    </div>
  );
};
