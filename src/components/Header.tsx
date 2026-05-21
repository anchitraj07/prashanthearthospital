'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        scrolled || menuOpen
          ? 'bg-slate-950 shadow-[0_25px_70px_rgba(0,0,0,0.45)] py-3'
          : 'bg-slate-950/85 backdrop-blur-xl py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-4 group"
          aria-label="Prashant Heart Hospital Home"
        >
          <div className="relative">
            {/* Outer ring */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-accent to-teal-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
            
            {/* Logo Container */}
            <div className="relative flex items-center justify-center rounded-2xl bg-slate-900/80 backdrop-blur-md p-2.5 shadow-xl border border-white/10 group-hover:border-accent/30 transition-all duration-500">
              <AppLogo 
                src="/assets/images/Logo.png" 
                size={42} 
                className="rounded-xl"
              />
            </div>
          </div>
          
          <div className="flex flex-col">
            <span className="text-white font-serif text-lg md:text-xl leading-none tracking-tight group-hover:text-accent transition-colors duration-300">
              Prashant <span className="text-accent">Heart</span>
            </span>
            <span className="text-teal-200/60 text-[10px] uppercase tracking-[0.3em] mt-1 font-medium">
              Hospital
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
          {navLinks?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              className="text-white/75 text-sm font-medium hover:text-white transition-colors duration-200 relative group"
            >
              {link?.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+918002982980"
            className="inline-flex items-center gap-2 text-white/75 text-sm hover:text-white transition-colors"
          >
            <svg
              className="w-4 h-4 text-accent"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"
              />
            </svg>
            +91 80029 82980
          </a>
          <a
            href="#appointment"
            className="px-5 py-2.5 rounded-full bg-accent text-primary font-semibold text-sm hover:shadow-teal hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="relative z-[1100] lg:hidden flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full border border-white/25 bg-slate-950 text-white shadow-[0_10px_30px_rgba(0,0,0,0.55)] transition-colors hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>
      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[1050] text-white shadow-2xl transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{
          background: 'linear-gradient(180deg, #020817 0%, #071426 46%, #0b1e3d 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative flex h-full flex-col px-6 pb-10 pt-6">
          {/* Mobile header */}
          <div className="flex items-center justify-between mb-10">
            <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                <Image
                  src="/assets/images/Logo.png"
                  alt="Prashant Heart Hospital Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-white font-semibold">Prashant Heart Hospital</span>
            </Link>
            <button
              onClick={closeMenu}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile nav links */}
          <nav className="flex-1 flex flex-col gap-3">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                onClick={closeMenu}
                className="rounded-lg border border-white/15 bg-slate-900 px-5 py-3.5 text-xl font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-colors hover:border-accent/60 hover:bg-slate-800 hover:text-accent"
              >
                {link?.label}
              </a>
            ))}
          </nav>

          {/* Mobile CTAs */}
          <div className="mt-8 space-y-3">
            <a
              href="#appointment"
              onClick={closeMenu}
              className="block w-full text-center py-4 rounded-full bg-accent text-primary font-bold text-base hover:shadow-teal transition-all"
            >
              Book Appointment
            </a>
            <a
              href="https://wa.me/918084388876"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Booking
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
