'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef?.current) return;
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / 800, 1);
      const blur = progress * 18;
      const brightness = 1 - progress * 0.55;
      const scale = 1 + progress * 0.05;
      bgRef.current.style.filter = `blur(${blur}px) brightness(${brightness})`;
      bgRef.current.style.transform = `scale(${scale})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-end overflow-hidden"
      style={{ minHeight: '85svh' }}
    >
      {/* Cinematic background */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full will-change-transform">
        <AppImage
          src="/assets/images/Hopsital.png"
          alt="Prashant Heart Hospital building exterior, modern medical facility in Begusarai Bihar with clean architecture and welcoming entrance"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          unoptimized
        />
      </div>
      {/* Scrim overlay */}
      <div className="hero-scrim absolute inset-0 z-10" />
      {/* Atmospheric teal glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 blob-teal z-10 pointer-events-none" />
      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-12 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          {/* Left: Hero text */}
          <div>
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6"
              style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}
            >
              <span className="pulse-dot w-2 h-2 rounded-full bg-accent" />
              <span className="text-accent section-label">Begusarai, Bihar</span>
            </div>

            {/* Headline */}
            <h1
              className="text-hero-xl font-serif text-white mb-6 leading-tight"
              style={{ animation: 'slideInBlur 1s ease-out 0.4s both' }}
            >
              World-Class
              <br />
              <span className="teal-gradient-text">Heart Care</span>
              <br />
              <span className="opacity-80 font-normal italic">in Bihar.</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-white/75 text-lg leading-relaxed max-w-lg mb-10"
              style={{ animation: 'fadeInUp 0.8s ease-out 0.7s both' }}
            >
              Led by Dr. Prashant Kashyap — DM Cardiology, Gold Medalist — Prashant Heart Hospital
              brings Philips Cath Lab precision and interventional cardiology expertise to your
              doorstep.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4"
              style={{ animation: 'fadeInScale 0.8s ease-out 0.9s both' }}
            >
              <Link
                href="#appointment"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-primary font-semibold text-base transition-all duration-300 hover:shadow-teal hover:scale-105 active:scale-95"
              >
                Book Appointment
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/25 text-white font-medium text-base backdrop-blur-sm bg-white/5 hover:bg-white/15 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>

            {/* Trust strip */}
            <div
              className="flex flex-wrap items-center gap-4 sm:gap-6 mt-10 pt-8 border-t border-white/15"
              style={{ animation: 'fadeInUp 0.6s ease-out 1.1s both' }}
            >
              {[
                { val: '50K+', label: 'Patients Treated' },
                { val: '4.9★', label: 'Avg. Rating' },
                { val: '24/7', label: 'Emergency Care' },
              ]?.map((s) => (
                <div key={s?.label} className="text-center">
                  <div className="text-accent font-bold text-xl stat-number">{s?.val}</div>
                  <div className="text-white/55 text-xs mt-0.5">{s?.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Floating glass card */}
          <div className="hidden lg:block" style={{ animation: 'fadeInScale 1s ease-out 1s both' }}>
            <div className="glass-card rounded-3xl p-8 animate-float">
              {/* ECG SVG */}
              <div className="mb-6">
                <svg viewBox="0 0 320 60" className="w-full h-12" fill="none">
                  <polyline
                    points="0,30 40,30 55,30 65,8 72,50 80,30 110,30 120,30 130,30 140,10 148,48 156,30 200,30 210,30 220,14 228,46 236,30 280,30 320,30"
                    stroke="#40C1B9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ecg-line"
                  />
                </svg>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-accent/40 bg-white/90">
                  <AppImage
                    src="/assets/images/Doctors/Dr.Prashant Kashyap.jpeg"
                    alt="Dr. Prashant Kashyap cardiologist in white coat, professional medical portrait"
                    fill
                    className="object-contain object-[center_42%] scale-110"
                    sizes="64px"
                    unoptimized
                  />
                </div>
                <div>
                  <div className="text-white font-semibold text-base">Dr. Prashant Kashyap</div>
                  <div className="text-accent text-sm">DM Cardiology • Gold Medalist</div>
                  <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5]?.map((i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-white/60 text-xs ml-1">4.7 (2500+ reviews)</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '🫀', label: 'Cath Lab', sub: 'Philips Advanced' },
                  { icon: '📋', label: 'Experience', sub: '10+ Years' },
                  { icon: '👥', label: 'Patients', sub: '3,000+ Treated' },
                  { icon: '🏥', label: 'Emergency', sub: '24/7 ICU Care' },
                ]?.map((item) => (
                  <div
                    key={item?.label}
                    className="bg-white/8 rounded-xl p-3 border border-white/10"
                  >
                    <div className="text-xl mb-1">{item?.icon}</div>
                    <div className="text-white text-xs font-semibold">{item?.label}</div>
                    <div className="text-white/55 text-xs">{item?.sub}</div>
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
