import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import ServicesSection from '@/app/components/ServicesSection';
import AchievementsSection from '@/app/components/AchievementsSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import GallerySection from '@/app/components/GallerySection';
import BlogSection from '@/app/components/BlogSection';
import AppointmentSection from '@/app/components/AppointmentSection';
import ContactSection from '@/app/components/ContactSection';
import UpcomingHospitalSection from '@/app/components/UpcomingHospitalSection';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

export default function HomePage() {
  return (
    <>
      <ScrollRevealInit />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AchievementsSection />
        <section className="section-pad bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 blob-teal opacity-25 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
              <TestimonialsSection />
              <BlogSection />
            </div>
          </div>
        </section>
        <GallerySection />
        <AppointmentSection />
        <UpcomingHospitalSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
