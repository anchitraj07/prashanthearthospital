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
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="text-center md:text-left">
            <div className="reveal mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1">
              <span className="section-label text-accent">Services</span>
            </div>
            <h2 className="reveal delay-100 font-serif text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl">
              Cardiac <span className="teal-gradient-text italic">Services</span>
            </h2>
          </div>
          <p className="reveal delay-200 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground text-center md:text-right">
            Diagnostics, interventions, rhythm care, and emergency support in one easy-to-scan care
            menu.
          </p>
        </div>

        <div className="reveal delay-100 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-card border border-border relative overflow-hidden group">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full -ml-24 -mb-24 transition-transform duration-1000 group-hover:scale-110" />

          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Featured Service */}
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-primary text-[10px] font-bold uppercase tracking-wider mb-6">
                  Flagship Service
                </div>
                <h3 className="text-primary font-serif text-3xl md:text-4xl mb-6 leading-tight">
                  Advanced <span className="teal-gradient-text italic">Cath Lab</span>
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                  Our state-of-the-art Philips Cath Lab brings metropolitan-standard cardiac interventions to Bihar, enabling life-saving procedures with extreme precision.
                </p>
                <div className="space-y-4">
                  {['High-precision Angiography', 'Complex Angioplasty', 'Cardiac Intervention Support'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-primary font-medium text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Other Services Grid */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Diagnostics',
                      items: [
                        { name: '2D & Stress Echo', icon: 'HeartIcon' },
                        { name: 'TMT (Treadmill Test)', icon: 'ChartBarIcon' },
                        { name: 'Holter Monitoring', icon: 'ClipboardDocumentListIcon' },
                        { name: 'ECG & Imaging', icon: 'SignalIcon' },
                      ],
                    },
                    {
                      title: 'Specialized Care',
                      items: [
                        { name: 'Angioplasty & Stents', icon: 'BoltIcon' },
                        { name: 'Pacemaker & ICD', icon: 'CpuChipIcon' },
                        { name: '24/7 Cardiac ICU', icon: 'BuildingOffice2Icon' },
                        { name: 'Emergency Support', icon: 'ShieldCheckIcon' },
                      ],
                    },
                  ].map((cat) => (
                    <div key={cat.title}>
                      <h4 className="text-primary font-serif text-xl mb-5 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-accent rounded-full" />
                        {cat.title}
                      </h4>
                      <div className="space-y-3">
                        {cat.items.map((svc) => (
                          <div
                            key={svc.name}
                            className="flex items-center gap-3 p-3 rounded-2xl bg-muted/50 border border-border/50 transition-all hover:bg-white hover:shadow-sm hover:border-accent/30 group/item"
                          >
                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center transition-colors group-hover/item:bg-accent/10">
                              <Icon name={svc.icon as 'HeartIcon'} size={16} className="text-accent" />
                            </div>
                            <span className="text-primary text-xs font-semibold">{svc.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
