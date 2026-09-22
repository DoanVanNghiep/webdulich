import React, { useState } from 'react';
import { BLOG_POSTS_DATA } from '../../data/blogData';
import { BlogPost } from '../../types';
import { Calendar, Clock, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

export const BlogView: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'Travel Guide', 'Kinh Nghiệm', 'Cảm Hứng'];

  const filteredPosts = activeCategory === 'all'
    ? BLOG_POSTS_DATA
    : BLOG_POSTS_DATA.filter((p) => p.category === activeCategory);

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closePost = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedPost) {
    return (
      <div className="pt-28 pb-24 bg-navy-950 min-h-screen text-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={closePost}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-100 transition-all hover:-translate-x-1 hover:border-gold-400/50 hover:bg-gold-500 hover:text-navy-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Quay lại Blog
          </button>

          <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-navy-950/40 animate-fade-in">
            <div className="relative min-h-[320px] sm:min-h-[440px]">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/65 to-navy-950/10" />
              <div className="relative z-10 flex min-h-[320px] flex-col justify-end px-6 pb-8 pt-24 sm:min-h-[440px] sm:px-10 sm:pb-10">
                <span className="image-badge mb-4 w-fit rounded-full border border-white/25 bg-navy-950/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  {selectedPost.category}
                </span>
                <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-5xl">
                  {selectedPost.title}
                </h1>
              </div>
            </div>

            <div className="space-y-6 bg-slate-50 px-6 py-8 text-slate-800 sm:px-10 sm:py-10">
              <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-600">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-sky-600" />
                  {selectedPost.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-sky-600" />
                  {selectedPost.readTime}
                </span>
                <span>Tác giả: {selectedPost.author}</span>
              </div>

              <p className="rounded-2xl border-l-4 border-gold-500 bg-white px-5 py-4 text-base italic leading-relaxed text-slate-700 shadow-sm">
                {selectedPost.excerpt}
              </p>

              <div className="space-y-5 text-base leading-8 text-slate-700">
                <p>{selectedPost.content}</p>
                <p>
                  Khi lựa chọn đồng hành cùng Golden Trip Travel, bạn không chỉ nhận được lịch trình tour chuẩn xác, mà còn được chăm sóc tỉ mỉ bởi đội ngũ chuyên gia tư vấn giàu kinh nghiệm, sẵn sàng đáp ứng mọi yêu cầu riêng biệt của quý khách.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 bg-navy-950 min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Stories & Inspirations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-100 leading-tight">
            Cẩm Nang & Câu Chuyện <br />
            <span className="text-gold-gradient italic font-normal">
              Du Lịch Thượng Lưu
            </span>
          </h1>
          <p className="text-sm text-slate-300 mt-3 font-light">
            Cập nhật những xu hướng du lịch mới nhất, kinh nghiệm xin visa và những địa điểm nghỉ dưỡng đẳng cấp bậc nhất.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-gold-500 text-navy-950 font-bold shadow-gold'
                  : 'bg-navy-900 text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              {cat === 'all' ? 'Tất cả bài viết' : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => openPost(post)}
              className="group flex flex-col rounded-2xl overflow-hidden glass-card glass-card-hover border border-white/10 hover:border-gold-500/40 cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute top-4 left-4">
                  <span className="image-badge px-3 py-1 rounded-full text-xs font-semibold bg-navy-900/90 text-white border border-white/25 backdrop-blur-md">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-gold-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-3 mt-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="card-action-row mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Tác giả: {post.author}</span>
                  <span className="text-gold-400 font-bold uppercase tracking-wider group-hover:text-gold-300 inline-flex items-center gap-1">
                    Đọc tiếp <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
