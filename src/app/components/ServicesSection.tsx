import React from 'react';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    id: 'cathlab',
    icon: 'BeakerIcon',
    title: 'Advanced Cath Lab',
    desc: 'High-precision angiography, angioplasty, and complex cardiac intervention support.',
    tag: 'Flagship',
    tone: 'featured',
  },
  {
    id: 'echo',
    icon: 'HeartIcon',
    title: '2D Echo & Stress Echo',
    desc: 'Adult, paediatric, and foetal echocardiography with stress imaging.',
    tag: 'Diagnostic',
    tone: 'diagnostic',
  },
  {
    id: 'angioplasty',
    icon: 'BoltIcon',
    title: 'Angioplasty',
    desc: 'Balloon angioplasty and stenting to restore coronary blood flow.',
    tag: 'Interventional',
    tone: 'interventional',
  },
  {
    id: 'tmt',
    icon: 'ChartBarIcon',
    title: 'TMT - Treadmill Test',
    desc: 'Controlled stress testing to evaluate heart performance during exercise.',
    tag: 'Diagnostic',
    tone: 'diagnostic',
  },
  {
    id: 'holter',
    icon: 'ClipboardDocumentListIcon',
    title: 'Holter Monitoring',
    desc: '24-48 hour ECG monitoring for rhythm changes and irregular heartbeat.',
    tag: 'Diagnostic',
    tone: 'diagnostic',
  },
  {
    id: 'pacemaker',
    icon: 'CpuChipIcon',
    title: 'Pacemaker & ICD',
    desc: 'Pacemaker implantation, ICD, and CRT therapy for rhythm disorders.',
    tag: 'Interventional',
    tone: 'interventional',
  },
  {
    id: 'icu',
    icon: 'BuildingOffice2Icon',
    title: 'Cardiac ICU',
    desc: 'Round-the-clock cardiac monitoring, ventilator support, and emergency care.',
    tag: '24/7',
    tone: 'emergency',
  },
  {
    id: 'ecg',
    icon: 'SignalIcon',
    title: 'ECG & Pericardiocentesis',
    desc: 'ECG, renal artery stenting support, and fluid drainage around the heart.',
    tag: 'Diagnostic',
    tone: 'diagnostic',
  },
];

const tagColors: Record<string, string> = {
  Flagship: 'bg-accent text-primary',
  Diagnostic: 'bg-blue-100 text-blue-700',
  Interventional: 'bg-red-100 text-red-700',
  '24/7': 'bg-green-100 text-green-700',
};

const cardTones: Record<string, string> = {
  featured: 'border-primary/20 bg-primary text-white shadow-navy',
  diagnostic: 'border-blue-100 bg-white text-primary shadow-[0_12px_36px_rgba(37,99,235,0.07)]',
  interventional: 'border-red-100 bg-white text-primary shadow-[0_12px_36px_rgba(220,38,38,0.07)]',
  emergency: 'border-green-100 bg-white text-primary shadow-[0_12px_36px_rgba(22,163,74,0.07)]',
};

const accentBars: Record<string, string> = {
  featured: 'bg-accent',
  diagnostic: 'bg-blue-500',
  interventional: 'bg-red-500',
  emergency: 'bg-green-500',
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-muted py-10 md:py-12 lg:py-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="blob-teal absolute left-10 top-10 h-56 w-56 opacity-20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="reveal mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1">
              <span className="section-label text-accent">Services</span>
            </div>
            <h2 className="reveal delay-100 font-serif text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl">
              Cardiac <span className="teal-gradient-text italic">Services</span>
            </h2>
          </div>
          <p className="reveal delay-200 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-right">
            Diagnostics, interventions, rhythm care, and emergency support in one easy-to-scan care
            menu.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              className={`reveal delay-${Math.min((i + 1) * 100, 500)} card-hover group relative overflow-hidden rounded-lg border ${cardTones[svc.tone]}`}
            >
              <div className={`absolute inset-x-0 top-0 h-1 ${accentBars[svc.tone]}`} />
              <div className="flex h-full flex-col p-4">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                      svc.tone === 'featured' ? 'bg-white/15' : 'bg-accent/10'
                    }`}
                  >
                    <Icon
                      name={svc.icon as 'HeartIcon'}
                      size={19}
                      className={svc.tone === 'featured' ? 'text-accent' : 'text-accent'}
                    />
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wide ${
                      tagColors[svc.tag] || 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {svc.tag}
                  </span>
                </div>

                <h3
                  className={`mb-1.5 text-[0.98rem] font-bold leading-snug ${
                    svc.tone === 'featured' ? 'text-white' : 'text-primary'
                  }`}
                >
                  {svc.title}
                </h3>
                <p
                  className={`text-[0.82rem] leading-relaxed ${
                    svc.tone === 'featured' ? 'text-white/75' : 'text-muted-foreground'
                  }`}
                >
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-8 text-center">
          <a
            href="#appointment"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-navy active:scale-95"
          >
            Book a Consultation
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
