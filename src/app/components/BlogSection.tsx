import React from 'react';
import Icon from '@/components/ui/AppIcon';

const posts = [
  {
    title: '5 Warning Signs of a Heart Attack',
    excerpt: 'Chest pressure, jaw or arm pain, breathlessness, sweating, and unusual fatigue.',
    category: 'Heart Health',
    readTime: '4 min read',
    href: 'https://www.heart.org/en/health-topics/heart-attack/warning-signs-of-a-heart-attack',
    icon: 'HeartIcon',
    color: 'border-red-100 bg-red-50/80',
    badgeColor: 'bg-red-100 text-red-700',
    iconColor: 'bg-red-100 text-red-600',
  },
  {
    title: 'Angioplasty: What to Expect',
    excerpt:
      'A simple guide to preparation, the procedure, recovery, and warning signs after care.',
    category: 'Procedures',
    readTime: '6 min read',
    href: 'https://my.clevelandclinic.org/health/treatments/22060-angioplasty',
    icon: 'BoltIcon',
    color: 'border-blue-100 bg-blue-50/80',
    badgeColor: 'bg-blue-100 text-blue-700',
    iconColor: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Cholesterol: Myths and Facts',
    excerpt: 'Understand LDL, HDL, screening, and why cholesterol numbers should not be ignored.',
    category: 'Prevention',
    readTime: '5 min read',
    href: 'https://www.cdc.gov/cholesterol/about/myths.html',
    icon: 'BeakerIcon',
    color: 'border-teal-100 bg-teal-50/80',
    badgeColor: 'bg-teal-100 text-teal-700',
    iconColor: 'bg-teal-100 text-teal-600',
  },
  {
    title: 'Heart-Smart Indian Eating',
    excerpt:
      'Practical swaps for Indian meals, with more plants, better fats, and less excess salt.',
    category: 'Nutrition',
    readTime: '7 min read',
    href: 'https://www.health.harvard.edu/heart-health/an-indian-adaptation-of-the-mediterranean-diet',
    icon: 'SparklesIcon',
    color: 'border-green-100 bg-green-50/80',
    badgeColor: 'bg-green-100 text-green-700',
    iconColor: 'bg-green-100 text-green-600',
  },
];

export default function BlogSection() {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-8">
        <div className="reveal mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1">
          <span className="section-label text-accent">Health Tips</span>
        </div>
        <h2 className="reveal delay-100 font-serif text-3xl leading-tight text-primary">
          Cardiac Health <span className="teal-gradient-text italic">Insights</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
        {posts.map((post, i) => (
          <article key={post.title} className={`reveal delay-${(i + 1) * 100} h-full`}>
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read article: ${post.title}`}
              className={`group flex h-full flex-col rounded-3xl border p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-accent/40 bg-white relative overflow-hidden`}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${post.iconColor} shadow-sm transition-transform duration-500 group-hover:scale-110`}
                  >
                    <Icon name={post.icon} size={20} />
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wider ${post.badgeColor}`}
                  >
                    {post.category}
                  </span>
                </div>

                <h3 className="mb-2 text-base font-bold leading-snug text-primary transition-colors group-hover:text-accent line-clamp-2">
                  {post.title}
                </h3>
                <p className="mb-4 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-[10px] font-bold text-accent/70 uppercase tracking-widest">{post.readTime}</span>
                  <div className="flex items-center gap-1 text-accent font-semibold text-xs group/link">
                    <span>Read More</span>
                    <Icon
                      name="ArrowUpRightIcon"
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
