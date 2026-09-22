import React from 'react';
import { BLOG_POSTS_DATA } from '../../data/blogData';
import { BlogPost } from '../../types';
import { Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
  onViewAllPosts: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onSelectPost,
  onViewAllPosts,
}) => {
  return (
    <section className="py-24 bg-gradient-to-b from-navy-950 to-navy-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inspiration & Guides</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-100 leading-tight">
              Travel Stories <br />
              <span className="text-gold-gradient font-display italic font-normal">
                Cẩm Nang & Trải Nghiệm
              </span>
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              Những câu chuyện truyền cảm hứng, kinh nghiệm du ngoạn và bí quyết tận hưởng trọn vẹn những điểm đến quyến rũ nhất.
            </p>
          </div>

          <button
            onClick={onViewAllPosts}
            className="self-start md:self-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-300 hover:text-gold-400 border-b border-gold-400/40 pb-1"
          >
            <span>Xem Tất Cả Bài Viết</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS_DATA.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="group flex flex-col rounded-2xl overflow-hidden glass-card glass-card-hover border border-white/10 hover:border-gold-500/40 cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="image-badge px-3 py-1 rounded-full text-[11px] font-semibold bg-navy-900/90 text-white border border-white/25 backdrop-blur-md">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-slate-100 group-hover:text-gold-300 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-3 mt-2 leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                </div>

                <div className="card-action-row mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Tác giả: {post.author}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-400 group-hover:text-gold-300 inline-flex items-center gap-1">
                    Đọc thêm <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
