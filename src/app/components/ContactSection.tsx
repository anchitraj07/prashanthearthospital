import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ContactSection() {
  return (
    <section id="contact" className="section-pad bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 blob-teal opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-xl mb-12">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <span className="section-label text-accent">Contact & Location</span>
          </div>
          <h2 className="reveal delay-100 text-section-xl font-serif text-primary">
            Find <span className="teal-gradient-text italic">Us</span>
          </h2>
          <p className="reveal delay-200 text-muted-foreground text-base leading-relaxed mt-4">
            Conveniently located in the heart of Begusarai, Bihar — easily accessible from Patna,
            Darbhanga, and Muzaffarpur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left: Contact cards */}
          <div className="lg:col-span-6 flex flex-col gap-6 reveal-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: 'MapPinIcon',
                  title: 'Hospital Address',
                  lines: [
                    'C/o Dr. Dinesh Singh, Jyoti Kunj',
                    'I.M.A. Path, Near T.V. Tower',
                    'Begusarai – 851 101, Bihar',
                  ],
                  fullWidth: true,
                },
                {
                  icon: 'PhoneIcon',
                  title: 'Phone',
                  lines: ['+91 80029 82980'],
                },
                {
                  icon: 'ChatBubbleLeftEllipsisIcon',
                  title: 'WhatsApp',
                  lines: ['+91 80843 88876'],
                },
                {
                  icon: 'EnvelopeIcon',
                  title: 'Email',
                  lines: ['prashantkashyap2804@gmail.com'],
                  fullWidth: true,
                },
                {
                  icon: 'ClockIcon',
                  title: 'Hours',
                  lines: ['Mon–Sat: 9:00 AM – 7:00 PM', 'Emergency: 24/7'],
                  fullWidth: true,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`card-hover flex items-start gap-4 p-5 bg-card rounded-2xl border border-border shadow-card ${item.fullWidth ? 'sm:col-span-2' : ''}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as 'PhoneIcon'} size={18} className="text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-primary font-semibold text-sm mb-1">{item.title}</div>
                    {item.lines.map((line, i) => (
                      <div key={i} className="text-muted-foreground text-xs sm:text-sm break-words leading-relaxed">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.youtube.com/@DrPrashantKashyap-Cardiologist"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-muted-foreground hover:text-red-600 hover:border-red-600/40 transition-all shadow-sm"
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
                <span className="text-sm font-medium">YouTube Channel</span>
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div className="lg:col-span-6 reveal-right flex flex-col h-full min-h-[400px]">
            <div className="rounded-3xl overflow-hidden border border-border shadow-card flex-grow relative group">
              <iframe
                title="Prashant Heart Hospital Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.0!2d86.1322!3d25.4180!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI1JzA0LjgiTiA4NsKwMDcnNTUuOSJF!5e0!3m2!1sen!2sin!4v1683456789012"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[400px] pointer-events-auto"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Map overlay label */}
              <div className="absolute top-4 right-4 glass-card-light rounded-xl px-4 py-2.5 shadow-card pointer-events-none opacity-90 transition-opacity group-hover:opacity-100">
                <div className="text-primary font-semibold text-sm">Prashant Heart Hospital</div>
                <div className="text-muted-foreground text-xs mt-0.5">
                  IMA Path, Begusarai, Bihar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
