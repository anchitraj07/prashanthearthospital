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
        <TestimonialsSection />
        <GallerySection />
        <BlogSection />
        <AppointmentSection />
        <UpcomingHospitalSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
