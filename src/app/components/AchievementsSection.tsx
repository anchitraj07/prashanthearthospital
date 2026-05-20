'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const stats = [
  { value: 50000, suffix: '+', label: 'Happy Patients', icon: 'UsersIcon' },
  { value: 4.9, suffix: '★', label: 'Average Rating', icon: 'StarIcon', isFloat: true },
  { value: 2500, suffix: '+', label: 'Patient Reviews', icon: 'ChatBubbleLeftEllipsisIcon' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate', icon: 'HandThumbUpIcon' },
  { value: 100, suffix: '+', label: 'Expert Doctors', icon: 'AcademicCapIcon' },
  { value: 10, suffix: '+', label: 'Years of Excellence', icon: 'TrophyIcon' },
];

const awards = [
  {
    title: 'DM Cardiology Gold Medalist',
    org: 'Academic Excellence Award',
    year: '2014',
    icon: '🏅',
  },
  {
    title: 'Best Cardiac Centre — Bihar',
    org: 'Healthcare Excellence Awards',
    year: '2023',
    icon: '🏆',
  },
  {
    title: 'ISO 27001 Certified',
    org: 'International Standards Organisation',
    year: '2022',
    icon: '🛡️',
  },
  { title: 'Philips Cath Lab Partner', org: 'Philips Healthcare India', year: '2021', icon: '⭐' },
];

function useCountUp(target: number, isFloat: boolean, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = isFloat ? parseFloat((ease * target).toFixed(1)) : Math.floor(ease * target);
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration, isFloat]);
  return count;
}

function StatCard({ stat, animate }: { stat: (typeof stats)[0]; animate: boolean }) {
  const count = useCountUp(stat.value, stat.isFloat ?? false, 2000, animate);
  return (
    <div className="card-hover bg-card rounded-2xl p-6 border border-border shadow-card text-center group">
      <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
        <Icon name={stat.icon as 'StarIcon'} size={22} className="text-accent" />
      </div>
      <div className="text-3xl font-bold font-serif text-primary stat-number mb-1">
        {count}
        {stat.suffix}
      </div>
      <div className="text-muted-foreground text-sm">{stat.label}</div>
    </div>
  );
}

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="achievements"
      className="py-12 bg-primary relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Stats Strip */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
                {stats.map((stat, i) => {
                  const count = useCountUp(stat.value, stat.isFloat ?? false, 2000, animate);
                  return (
                    <div key={stat.label} className={`reveal delay-${Math.min((i + 1) * 100, 500)}`}>
                      <div className="text-2xl md:text-3xl font-bold font-serif text-accent mb-1">
                        {count}{stat.suffix}
                      </div>
                      <div className="text-white/60 text-[10px] md:text-xs uppercase tracking-wider font-medium">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Awards Strip */}
            <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-10">
              <h3 className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
                Clinical Excellence & Awards
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {awards.map((award, i) => (
                  <div key={award.title} className={`reveal delay-${(i + 1) * 100} flex items-center gap-3`}>
                    <span className="text-2xl">{award.icon}</span>
                    <div>
                      <div className="text-white font-semibold text-[11px] leading-tight mb-0.5">{award.title}</div>
                      <div className="text-white/40 text-[9px] uppercase">{award.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
