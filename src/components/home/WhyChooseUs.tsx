import React from 'react';
import { Compass, ShieldCheck, UserCheck, HeartHandshake, Headphones, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      num: '01',
      title: 'Hành trình tuyển chọn kỹ lưỡng',
      desc: 'Mỗi lộ trình được các chuyên gia lữ hành trực tiếp khảo sát và chọn lọc tỉ mỉ từ khách sạn, nhà hàng đến từng điểm dừng chân.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'Minh bạch chi phí 100%',
      desc: 'Cam kết không phát sinh bất kỳ khoản phụ phí ẩn nào. Tất cả dịch vụ cao cấp, vé tham quan và bảo hiểm đều được công khai rõ ràng.',
      icon: ShieldCheck,
    },
    {
      num: '03',
      title: 'Đội ngũ chuyên nghiệp đẳng cấp',
      desc: 'Hướng dẫn viên giàu kinh nghiệm, kiến thức văn hóa sâu sắc và phong cách phục vụ chuẩn mực 5 sao quốc tế.',
      icon: UserCheck,
    },
    {
      num: '04',
      title: 'An tâm trên mọi hành trình',
      desc: 'Hợp tác cùng các chuỗi resort danh tiếng toàn cầu và các hãng hàng không 5 sao, bảo hiểm du lịch quốc tế hạn mức cao.',
      icon: HeartHandshake,
    },
    {
      num: '05',
      title: 'Quản gia hỗ trợ 24/7',
      desc: 'Đội ngũ chăm sóc khách hàng túc trực 24/7 sẵn sàng giải đáp và xử lý mọi yêu cầu phát sinh của quý khách ngay lập tức.',
      icon: Headphones,
    },
    {
      num: '06',
      title: 'Trải nghiệm cá nhân hóa tối đa',
      desc: 'Thiết kế hành trình riêng biệt theo phong cách sống, sở thích ẩm thực và lịch trình riêng của từng gia đình và doanh nghiệp.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Glow decorations */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Golden Trip Distinction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-100 leading-tight">
            Why Choose <br />
            <span className="text-gold-gradient font-display italic font-normal">
              Golden Trip Travel?
            </span>
          </h2>
          <p className="text-sm text-slate-300 mt-3 leading-relaxed">
            Chúng tôi định nghĩa lại khái niệm du lịch thượng lưu bằng sự tỉ mỉ, thấu hiểu và cam kết đem lại trải nghiệm hoàn mỹ nhất cho quý khách.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.num}
                className="group relative p-8 rounded-2xl glass-card glass-card-hover border border-white/10 hover:border-gold-500/40 transition-all duration-300 transform hover:-translate-y-1.5"
              >
                {/* Number & Icon header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-navy-800/80 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-gold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-3xl font-bold text-white/20 group-hover:text-gold-400/40 transition-colors">
                    {feat.num}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-serif font-bold text-slate-100 mb-2 group-hover:text-gold-200 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {feat.desc}
                </p>

                {/* Bottom decorative accent line */}
                <div className="mt-6 w-10 h-[2px] bg-white/10 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-gold-400 group-hover:to-transparent transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
