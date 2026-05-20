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
    <section id="blog" className="relative overflow-hidden bg-background py-10 md:py-12 lg:py-14">
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 blob-teal opacity-15" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <div className="reveal mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1">
            <span className="section-label text-accent">Health Tips</span>
          </div>
          <h2 className="reveal delay-100 font-serif text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl">
            Cardiac Health <span className="teal-gradient-text italic">Insights</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, i) => (
            <article key={post.title} className={`reveal delay-${(i + 1) * 100}`}>
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read article: ${post.title}`}
                className={`card-hover group flex h-full min-h-[176px] flex-col rounded-lg border p-4 shadow-card transition-colors hover:border-accent/40 hover:bg-white ${post.color}`}
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${post.iconColor}`}
                  >
                    <Icon name={post.icon} size={19} />
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide ${post.badgeColor}`}
                  >
                    {post.category}
                  </span>
                </div>

                <h3 className="mb-2 text-[0.98rem] font-bold leading-snug text-primary transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mb-4 text-[0.82rem] leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-3">
                  <span className="text-xs font-semibold text-accent">{post.readTime}</span>
                  <Icon
                    name="ArrowUpRightIcon"
                    size={17}
                    className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
