'use client';

import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Ranjit Kumar',
    location: 'Begusarai, Bihar',
    rating: 5,
    quote: 'The entire process at Prashant Heart Hospital was seamless — appointment reminders were timely, and Dr. Kashyap&apos;s consultation was thorough and thoughtful. I felt genuinely cared for, not just treated.',
    procedure: 'Angiography',
    verified: true,
  },
  {
    name: 'Bhupendra Mishra',
    location: 'Patna, Bihar',
    rating: 5,
    quote: 'I got an urgent consultation within hours. Dr. Kashyap prescribed the right medicines and my father recovered quickly. The ICU team was exceptional — attentive around the clock.',
    procedure: 'Cardiac ICU',
    verified: true,
  },
  {
    name: 'Krishnakumar Singh',
    location: 'Samastipur, Bihar',
    rating: 5,
    quote: 'For advanced cardiac care, I was told I&apos;d need to go to Patna or Delhi. Prashant Heart Hospital proved that wrong. World-class Cath Lab, experienced doctors — right here in our region.',
    procedure: 'Angioplasty',
    verified: true,
  },
  {
    name: 'Savita Devi',
    location: 'Darbhanga, Bihar',
    rating: 5,
    quote: 'My husband needed a pacemaker implant. We were nervous about travelling far. Dr. Kashyap performed the procedure here with such precision. We are forever grateful.',
    procedure: 'Pacemaker Implant',
    verified: true,
  },
  {
    name: 'Arun Prasad',
    location: 'Muzaffarpur, Bihar',
    rating: 5,
    quote: 'TMT test and Holter monitoring done in one day. Dr. Kashyap explained every finding patiently. The hospital infrastructure truly matches what you see in big cities.',
    procedure: 'TMT & Holter',
    verified: true,
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const current = testimonials?.[active];

  return (
    <section id="testimonials" className="section-pad bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 blob-teal opacity-25 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <span className="section-label text-accent">Testimonials</span>
          </div>
          <h2 className="reveal delay-100 text-section-xl font-serif text-primary">
            What Our Patients{' '}
            <span className="teal-gradient-text italic">Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main testimonial */}
          <div className="lg:col-span-7 reveal-left">
            <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-card relative overflow-hidden">
              {/* Quote mark */}
              <div className="absolute top-6 right-8 text-8xl font-serif text-accent/10 leading-none select-none pointer-events-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: current?.rating })?.map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-primary text-xl leading-relaxed mb-8 font-serif italic">
                &ldquo;{current?.quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-primary font-semibold text-base">{current?.name}</div>
                  <div className="text-muted-foreground text-sm mt-0.5">{current?.location}</div>
                </div>
                <div className="flex items-center gap-2">
                  {current?.verified && (
                    <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full border border-green-200">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Verified
                    </span>
                  )}
                  <span className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full font-medium">
                    {current?.procedure}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex items-center gap-3 mt-6">
              {testimonials?.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === active ? 'w-8 h-3 bg-accent' : 'w-3 h-3 bg-border hover:bg-accent/40'
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Side list */}
          <div className="lg:col-span-5 reveal-right flex flex-col gap-3">
            {testimonials?.map((t, i) => (
              <button
                key={t?.name}
                onClick={() => setActive(i)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                  i === active
                    ? 'border-accent bg-accent/5 shadow-teal'
                    : 'border-border bg-card hover:border-accent/40 hover:bg-accent/5'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-primary text-sm">{t?.name}</span>
                  <span className="text-accent text-xs font-medium">{t?.procedure}</span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                  {t?.quote?.replace(/&apos;/g, "'")}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}