import React from 'react';
import Icon from '@/components/ui/AppIcon';

/* BENTO GRID AUDIT:
   Array has 8 cards: [CathLab, 2DEcho, Angioplasty, TMT, Holter, Pacemaker, ICU, ECG]
   Desktop grid-cols-4:
   Row 1: [col-1,2: CathLab cs-2 rs-1] [col-3: 2DEcho cs-1] [col-4: Angioplasty cs-1]
   Row 2: [col-1: TMT cs-1] [col-2: Holter cs-1] [col-3,4: Pacemaker cs-2]
   Row 3: [col-1,2: ICU cs-2] [col-3,4: ECG cs-2]
   Placed 8/8 ✓

   Mobile grid-cols-1: all stack, no issue.
   Tablet grid-cols-2: all cards cs-1, stack 4 rows of 2. No empty cells. ✓
*/

const services = [
  {
    id: 'cathlab',
    icon: 'BeakerIcon',
    title: 'Advanced Cath Lab',
    desc: 'Philips state-of-the-art Cath Lab for Angiography, Angioplasty, and complex cardiac interventions with real-time imaging.',
    tag: 'Flagship',
    colSpan: 'lg:col-span-2',
    featured: true,
  },
  {
    id: 'echo',
    icon: 'HeartIcon',
    title: '2D Echo & Stress Echo',
    desc: 'Adult, Paediatric & Foetal echocardiography with advanced ultrasound imaging.',
    tag: 'Diagnostic',
    colSpan: 'lg:col-span-1',
    featured: false,
  },
  {
    id: 'angioplasty',
    icon: 'BoltIcon',
    title: 'Angioplasty',
    desc: 'Minimally invasive balloon angioplasty and stenting to restore coronary blood flow.',
    tag: 'Interventional',
    colSpan: 'lg:col-span-1',
    featured: false,
  },
  {
    id: 'tmt',
    icon: 'ChartBarIcon',
    title: 'TMT – Treadmill Test',
    desc: 'Cardiac stress testing to evaluate heart performance under controlled exercise conditions.',
    tag: 'Diagnostic',
    colSpan: 'lg:col-span-1',
    featured: false,
  },
  {
    id: 'holter',
    icon: 'ClipboardDocumentListIcon',
    title: 'Holter Monitoring',
    desc: '24–48 hour ambulatory ECG monitoring to detect arrhythmias and irregular heartbeats.',
    tag: 'Diagnostic',
    colSpan: 'lg:col-span-1',
    featured: false,
  },
  {
    id: 'pacemaker',
    icon: 'CpuChipIcon',
    title: 'Pacemaker & ICD',
    desc: 'TPI/PPI Pacemaker implantation and ICD/CRT therapy for heart rhythm disorders.',
    tag: 'Interventional',
    colSpan: 'lg:col-span-2',
    featured: false,
  },
  {
    id: 'icu',
    icon: 'BuildingOffice2Icon',
    title: 'Cardiac ICU',
    desc: '24/7 intensive cardiac care unit with continuous monitoring, ventilator support, and rapid emergency response.',
    tag: '24/7',
    colSpan: 'lg:col-span-2',
    featured: false,
  },
  {
    id: 'ecg',
    icon: 'SignalIcon',
    title: 'ECG & Pericardiocentesis',
    desc: 'Resting ECG, RA-Stenting (Renal Artery), and Pericardiocentesis for fluid around the heart.',
    tag: 'Diagnostic',
    colSpan: 'lg:col-span-2',
    featured: false,
  },
];

const tagColors: Record<string, string> = {
  Flagship: 'bg-accent text-primary',
  Diagnostic: 'bg-blue-100 text-blue-700',
  Interventional: 'bg-red-100 text-red-700',
  '24/7': 'bg-green-100 text-green-700',
};

export default function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-muted relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 blob-teal opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <span className="section-label text-accent">Services</span>
            </div>
            <h2 className="reveal delay-100 text-section-xl font-serif text-primary">
              Comprehensive{' '}
              <span className="teal-gradient-text italic">Cardiac Care</span>
            </h2>
          </div>
          <p className="reveal delay-200 text-muted-foreground text-base leading-relaxed max-w-sm md:text-right">
            From routine diagnostics to complex interventional procedures — all under one roof in Begusarai.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            /* STEP 4 JSX comment: card={svc.id} colSpan={svc.colSpan} */
            <div
              key={svc.id}
              className={`reveal delay-${Math.min((i + 1) * 100, 500)} card-hover group relative rounded-2xl overflow-hidden border border-border shadow-card ${svc.colSpan} ${
                svc.featured
                  ? 'service-card-featured text-white' :'bg-card text-primary'
              }`}
            >
              <div className="p-7 h-full flex flex-col">
                {/* Tag */}
                <div className="flex items-start justify-between mb-5">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColors[svc.tag] || 'bg-muted text-muted-foreground'}`}>
                    {svc.tag}
                  </span>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${svc.featured ? 'bg-white/15' : 'bg-accent/10'}`}>
                    <Icon
                      name={svc.icon as 'HeartIcon'}
                      size={22}
                      className={svc.featured ? 'text-accent' : 'text-accent'}
                    />
                  </div>
                </div>

                <h3 className={`font-semibold text-lg mb-3 ${svc.featured ? 'text-white' : 'text-primary'}`}>
                  {svc.title}
                </h3>
                <p className={`text-sm leading-relaxed flex-1 ${svc.featured ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {svc.desc}
                </p>

                {svc.featured && (
                  <div className="mt-6 pt-5 border-t border-white/15">
                    <div className="flex items-center gap-2 text-accent text-sm font-medium">
                      <span>Philips Technology</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {svc.featured && (
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full -translate-y-1/4 translate-x-1/4 pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-12 text-center">
          <a
            href="#appointment"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold text-base hover:shadow-navy hover:scale-105 transition-all duration-300 active:scale-95"
          >
            Book a Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}