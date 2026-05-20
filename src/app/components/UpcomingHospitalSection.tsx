import React from 'react';
import Image from 'next/image';

export default function UpcomingHospitalSection() {
  return (
    <section id="upcoming-hospital" className="section-pad relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="section-label text-accent">Future Vision</span>
            </div>
            <h2 className="reveal delay-100 text-section-xl font-serif text-primary mb-6">
              Our <span className="teal-gradient-text italic">Upcoming</span> Facility
            </h2>
            <p className="reveal delay-200 text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              We are expanding our commitment to world-class cardiac care. Our new, state-of-the-art
              hospital is currently under construction and will feature advanced medical technology, 
              expanded bed capacity, and a patient-centric environment designed for healing and comfort.
            </p>
            
            <div className="reveal delay-300 grid grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
                <div className="text-3xl font-serif text-accent mb-2">2027</div>
                <div className="text-sm font-medium text-primary">Expected Completion</div>
                <div className="text-xs text-muted-foreground mt-1">Bringing advanced care sooner</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
                <div className="text-3xl font-serif text-accent mb-2">150+</div>
                <div className="text-sm font-medium text-primary">New Beds Capacity</div>
                <div className="text-xs text-muted-foreground mt-1">Serving more patients</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 lg:col-span-7 reveal-right">
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] group border border-slate-100">
              <div className="aspect-video w-full relative bg-slate-100">
                <Image
                  src="/assets/images/New%20Hospital/Prashant_Heart_Hospital_16by9.jpg"
                  alt="3D Visualization of the Upcoming Prashant Heart Hospital"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Overlay badge */}
                <div className="absolute bottom-6 left-6 glass-card-light rounded-xl px-5 py-3 shadow-lg pointer-events-none border border-white/40">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                    </span>
                    <span className="text-primary font-semibold text-sm">Under Construction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
