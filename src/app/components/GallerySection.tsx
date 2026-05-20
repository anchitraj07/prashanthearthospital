'use client';

import React, { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

// Team photos from Team folder
const teamPhotos = [
  {
    src: '/assets/images/Team/2.jpeg',
    alt: 'Hospital team group photo at Prashant Heart Hospital',
    label: 'Medical Team',
    sublabel: 'Expert Cardiology Staff',
  },
  {
    src: '/assets/images/Team/3.jpeg',
    alt: 'Doctors and nurses team at Prashant Heart Hospital',
    label: 'Care Team',
    sublabel: 'Compassionate Healthcare Professionals',
  },
  {
    src: '/assets/images/Team/4.jpeg',
    alt: 'Prashant Heart Hospital staff group photo',
    label: 'Our Staff',
    sublabel: 'Dedicated Medical Team',
  },
];

// Auto-rotating Team Photo Carousel Component
function TeamPhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamPhotos.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full min-h-[20rem] sm:min-h-[28rem] md:min-h-[32rem] lg:min-h-[40rem] relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/30 bg-slate-900">
      <div className="relative h-full">
        {teamPhotos.map((photo, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <AppImage
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-3">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent text-xs font-medium">Team Gallery</span>
              </div>
              <h3 className="text-white font-bold text-3xl sm:text-4xl mb-2">{photo.label}</h3>
              <p className="text-white/70 text-sm sm:text-base">{photo.sublabel}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-y-1/2 left-4 -translate-y-1/2">
        <button
          onClick={() => setCurrentIndex((prev) => (prev === 0 ? teamPhotos.length - 1 : prev - 1))}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Previous photo"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-1/2 right-4 -translate-y-1/2">
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % teamPhotos.length)}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Next photo"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="absolute left-1/2 bottom-6 -translate-x-1/2 flex items-center gap-2">
        {teamPhotos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-10 bg-accent' : 'w-2.5 bg-white/40 hover:bg-white/70'}`}
            aria-label={`View team photo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const facilityItems = [
  {
    src: '/assets/images/Hopsital.png',
    alt: 'Prashant Heart Hospital exterior building front view',
    tag: 'Main Facility',
    title: 'Hospital Exterior',
    subtitle: 'Prashant Heart Hospital, Begusarai',
  },
  {
    src: '/assets/images/Cath Lab.png',
    alt: 'Philips Advanced Cath Lab interior',
    tag: 'Cath Lab',
    title: 'Philips Cath Lab',
    subtitle: 'Advanced Cardiac Intervention Suite',
  },
  {
    src: '/assets/images/Consultation Room.jpeg',
    alt: 'Doctor consultation room',
    tag: 'Consultation',
    title: 'Consultation Room',
    subtitle: 'Private Doctor Consultations',
  },
  {
    src: '/assets/images/Operating Theatre.jpeg',
    alt: 'Operating theatre at Prashant Heart Hospital',
    tag: 'Surgery',
    title: 'Operating Theatre',
    subtitle: 'Sterile Surgical Suite',
  },
  {
    src: '/assets/images/Patient Care Area.jpeg',
    alt: 'Patient care area at Prashant Heart Hospital',
    tag: 'Recovery',
    title: 'Patient Care Area',
    subtitle: 'Comfortable Recovery Rooms',
  },
];

function FacilityCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % facilityItems.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full min-h-[20rem] sm:min-h-[28rem] md:min-h-[32rem] lg:min-h-[40rem]">
      <div className="h-full relative rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-900/20 bg-slate-950">
        <div className="relative h-full">
          {facilityItems.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              <AppImage
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-3">
                  <span className="text-accent text-xs font-medium">{item.tag}</span>
                </div>
                <h3 className="text-white font-bold text-3xl sm:text-4xl mb-2">{item.title}</h3>
                <p className="text-white/70 max-w-2xl text-sm sm:text-base">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-y-1/2 left-4 -translate-y-1/2">
          <button
            onClick={() => setActiveIndex((prev) => (prev === 0 ? facilityItems.length - 1 : prev - 1))}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Previous facility"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-1/2 right-4 -translate-y-1/2">
          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % facilityItems.length)}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Next facility"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="absolute left-1/2 bottom-6 -translate-x-1/2 flex items-center gap-2">
          {facilityItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-10 bg-accent' : 'w-2.5 bg-white/40 hover:bg-white/70'}`}
              aria-label={`View facility ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  return (
    <section id="gallery" className="section-pad bg-muted relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <span className="section-label text-accent">Gallery</span>
          </div>
          <h2 className="text-section-xl font-serif text-primary mb-4">
            Our <span className="teal-gradient-text italic">Facility</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            State-of-the-art infrastructure built to deliver the highest standard of cardiac care.
            Explore our modern facilities and meet our dedicated team.
          </p>
        </div>

        {/* Team and Facility split 50/50 */}
        <div className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <div className="h-full">
            <TeamPhotoCarousel />
          </div>
          <div className="h-full">
            <FacilityCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}