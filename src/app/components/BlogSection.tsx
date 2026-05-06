import React from 'react';
import Icon from '@/components/ui/AppIcon';

const posts = [
  {
    title: '5 Warning Signs of a Heart Attack You Should Never Ignore',
    excerpt: 'Chest pain is the most well-known symptom, but cardiologists warn about four other critical signs — jaw pain, unusual fatigue, shortness of breath — that are frequently dismissed.',
    category: 'Heart Health',
    readTime: '4 min read',
    date: 'May 2, 2026',
    icon: '❤️',
    color: 'bg-red-50 border-red-100',
    badgeColor: 'bg-red-100 text-red-700',
  },
  {
    title: 'Understanding Angioplasty: What to Expect Before, During, and After',
    excerpt: 'If your cardiologist has recommended angioplasty, understanding the procedure in detail can reduce anxiety and help you prepare for a faster recovery.',
    category: 'Procedures',
    readTime: '6 min read',
    date: 'Apr 18, 2026',
    icon: '🩺',
    color: 'bg-blue-50 border-blue-100',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Cholesterol Myths Debunked by a DM Cardiologist',
    excerpt: 'Not all cholesterol is bad. Dr. Prashant Kashyap explains the difference between HDL and LDL, what your numbers actually mean, and when medication is truly necessary.',
    category: 'Prevention',
    readTime: '5 min read',
    date: 'Apr 5, 2026',
    icon: '🔬',
    color: 'bg-teal-50 border-teal-100',
    badgeColor: 'bg-teal-100 text-teal-700',
  },
  {
    title: 'The Bihar Diet & Heart Disease: What Local Foods Help or Harm',
    excerpt: 'A deep dive into how traditional Bihari cuisine affects cardiovascular health — which dishes are heart-protective and which ones deserve moderation.',
    category: 'Nutrition',
    readTime: '7 min read',
    date: 'Mar 22, 2026',
    icon: '🥗',
    color: 'bg-green-50 border-green-100',
    badgeColor: 'bg-green-100 text-green-700',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="section-pad bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 blob-teal opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <span className="section-label text-accent">Health Tips</span>
            </div>
            <h2 className="reveal delay-100 text-section-xl font-serif text-primary">
              Cardiac Health{' '}
              <span className="teal-gradient-text italic">Insights</span>
            </h2>
          </div>
          <a
            href="#"
            className="reveal delay-200 inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
          >
            View all articles
            <Icon name="ArrowRightIcon" size={16} className="text-accent" />
          </a>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts?.map((post, i) => (
            <article
              key={post?.title}
              className={`reveal delay-${(i + 1) * 100} card-hover group bg-card rounded-2xl border overflow-hidden shadow-card ${post?.color}`}
            >
              <div className="p-6 flex flex-col h-full">
                {/* Icon & badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl">{post?.icon}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${post?.badgeColor}`}>
                    {post?.category}
                  </span>
                </div>

                <h3 className="text-primary font-semibold text-base leading-snug mb-3 group-hover:text-accent transition-colors flex-1">
                  {post?.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
                  {post?.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                  <span className="text-muted-foreground text-xs">{post?.date}</span>
                  <span className="text-accent text-xs font-medium">{post?.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}