import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ContactSection() {
  return (
    <section id="contact" className="section-pad bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 blob-teal opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="reveal delay-100 bg-white rounded-[2.5rem] overflow-hidden shadow-card border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Contact Info */}
            <div className="p-8 md:p-12 lg:p-14 bg-slate-50/50">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="section-label text-accent">Contact & Location</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">
                Visit <span className="teal-gradient-text italic">Us</span>
              </h2>

              <div className="space-y-8">
                {[
                  {
                    icon: 'MapPinIcon',
                    title: 'Hospital Address',
                    content: 'C/o Dr. Dinesh Singh, Jyoti Kunj, I.M.A. Path, Begusarai, Bihar – 851 101',
                  },
                  {
                    icon: 'PhoneIcon',
                    title: 'Call or WhatsApp',
                    content: '+91 80029 82980 / +91 80843 88876',
                  },
                  {
                    icon: 'EnvelopeIcon',
                    title: 'Email Support',
                    content: 'prashantkashyap2804@gmail.com',
                  },
                  {
                    icon: 'ClockIcon',
                    title: 'Working Hours',
                    content: 'Mon–Sat: 9:00 AM – 7:00 PM | Emergency: 24/7',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                      <Icon name={item.icon as 'PhoneIcon'} size={18} className="text-accent group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <div className="text-primary font-bold text-sm mb-1">{item.title}</div>
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social CTAs */}
              <div className="mt-10 pt-8 border-t border-border flex flex-wrap gap-4">
                <a
                  href="https://www.youtube.com/@DrPrashantKashyap-Cardiologist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white border border-border text-muted-foreground hover:text-red-600 hover:border-red-600/40 hover:bg-red-50/30 transition-all shadow-sm group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-colors group-hover:stroke-red-600"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-wider">YouTube</span>
                </a>
                
                <a
                  href="https://www.instagram.com/dr.prashantkashyapcardiologist?igsh=bnY1NTl6OW02bmMx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white border border-border text-muted-foreground hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/5 transition-all shadow-sm group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-colors group-hover:stroke-[#E4405F]"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-wider">Instagram</span>
                </a>
              </div>
            </div>

            {/* Right: Map */}
            <div className="relative min-h-[400px] lg:min-h-full">
              <iframe
                title="Prashant Heart Hospital Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.0!2d86.1322!3d25.4180!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI1JzA0LjgiTiA4NsKwMDcnNTUuOSJF!5e0!3m2!1sen!2sin!4v1683456789012"
                width="100%"
                height="100%"
                className="absolute inset-0 grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-6 right-6 glass-card-light rounded-2xl px-5 py-3 shadow-card pointer-events-none border border-white/40">
                <div className="text-primary font-bold text-sm">Prashant Heart Hospital</div>
                <div className="text-muted-foreground text-[10px] uppercase tracking-wider mt-0.5 font-medium">
                  Begusarai, Bihar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
