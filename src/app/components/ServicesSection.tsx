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
    <section id="services" className="relative py-12 md:py-16 overflow-hidden">
      {/* Background with Cath Lab Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/85 backdrop-blur-sm z-10" />
        <Image
          src="/assets/images/Cath Lab.png"
          alt="Cath Lab Background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="reveal mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1">
            <span className="section-label text-accent">Clinical Excellence</span>
          </div>
          <h2 className="reveal delay-100 font-serif text-3xl md:text-5xl text-white">
            Comprehensive <span className="teal-gradient-text italic">Cardiac Services</span>
          </h2>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Diagnostics Column */}
            <div className="reveal delay-200">
              <h3 className="text-accent font-serif text-2xl mb-8 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-accent rounded-full" />
                Advanced Diagnostics
              </h3>
              <div className="space-y-6">
                {[
                  {
                    name: '2D & Stress Echo',
                    icon: 'HeartIcon',
                    detail: 'High-resolution imaging to assess heart structure, valves, and blood flow patterns.',
                  },
                  {
                    name: 'TMT (Treadmill Test)',
                    icon: 'ChartBarIcon',
                    detail: 'Stress testing to evaluate how your heart handles physical activity and exertion.',
                  },
                  {
                    name: 'Holter Monitoring',
                    icon: 'ClipboardDocumentListIcon',
                    detail: '24-48 hour continuous ECG recording to detect irregular rhythms and silent issues.',
                  },
                  {
                    name: 'ECG & Imaging',
                    icon: 'SignalIcon',
                    detail: 'Rapid electrical activity mapping and specialized imaging for accurate diagnosis.',
                  },
                ].map((svc) => (
                  <div key={svc.name} className="group flex items-start gap-4 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all">
                      <Icon name={svc.icon as 'HeartIcon'} size={20} className="text-accent group-hover:text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base mb-1">{svc.name}</h4>
                      <p className="text-white/60 text-xs leading-relaxed">{svc.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized Care Column */}
            <div className="reveal delay-300">
              <h3 className="text-accent font-serif text-2xl mb-8 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-accent rounded-full" />
                Specialized Interventions
              </h3>
              <div className="space-y-6">
                {[
                  {
                    name: 'Angioplasty & Stents',
                    icon: 'BoltIcon',
                    detail: 'Life-saving procedures to clear blockages and restore blood flow using advanced Philips tech.',
                  },
                  {
                    name: 'Pacemaker & ICD',
                    icon: 'CpuChipIcon',
                    detail: 'Expert implantation of devices to regulate heart rhythm and prevent sudden failure.',
                  },
                  {
                    name: '24/7 Cardiac ICU',
                    icon: 'BuildingOffice2Icon',
                    detail: 'Round-the-clock intensive monitoring with dedicated specialists and rapid response.',
                  },
                  {
                    name: 'Emergency Support',
                    icon: 'ShieldCheckIcon',
                    detail: 'Immediate interventional care for heart attacks and critical cardiac emergencies.',
                  },
                ].map((svc) => (
                  <div key={svc.name} className="group flex items-start gap-4 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all">
                      <Icon name={svc.icon as 'HeartIcon'} size={20} className="text-accent group-hover:text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base mb-1">{svc.name}</h4>
                      <p className="text-white/60 text-xs leading-relaxed">{svc.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-white/50 text-sm italic max-w-md text-center sm:text-left">
              * All procedures are performed in our Philips Advanced Cath Lab by Gold Medalist specialists.
            </p>
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-primary transition-all duration-300 hover:scale-105 hover:shadow-teal active:scale-95"
            >
              Book Consultation
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
