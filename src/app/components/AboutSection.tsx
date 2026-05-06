import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const staff = [
{
  name: 'Dr. Prashant Kashyap',
  role: 'Senior Cardiologist & Founder',
  quals: 'MBBS, MD (Medicine), DM – Cardiology',
  badge: 'Gold Medalist',
  exp: '10+ Years',
  patients: '3,000+',
  rating: '4.7★',
  photo: 'https://i.ibb.co/Kx9bpXr7/dr1.jpg',
  alt: 'Dr. Prashant Kashyap senior cardiologist founder of Prashant Heart Hospital in professional white coat',
  featured: true
},
{
  name: 'Dr. Seep Sethi',
  role: 'Gynecologist',
  quals: 'MBBS (MAMC), MS OBGYN (Mumbai), FMAS, DMAS',
  badge: '',
  exp: '5+ Years',
  patients: '2,000+',
  rating: '4.9★',
  photo: "https://img.rocket.new/generatedImages/rocket_gen_img_1411181b3-1772154572406.png",
  alt: 'Dr. Seep Sethi gynecologist in medical professional attire',
  featured: false
},
{
  name: 'Dr. Dinesh Singh',
  role: 'Senior Physician',
  quals: 'MBBS, MD (Medicine)',
  badge: '',
  exp: '12+ Years',
  patients: '7,000+',
  rating: '4.8★',
  photo: "https://img.rocket.new/generatedImages/rocket_gen_img_18c498552-1775081961745.png",
  alt: 'Dr. Dinesh Singh senior physician in professional medical setting',
  featured: false
}];


export default function AboutSection() {
  return (
    <section id="about" className="section-pad bg-background relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 blob-teal opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 blob-navy opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <span className="section-label text-accent">About Us</span>
          </div>
          <h2 className="reveal delay-100 text-section-xl font-serif text-primary mb-5">
            Bihar&apos;s Most Trusted{' '}
            <span className="teal-gradient-text italic">Cardiac Centre</span>
          </h2>
          <p className="reveal delay-200 text-muted-foreground text-lg leading-relaxed">
            Founded with a mission to bring world-class interventional cardiology to Bihar, Prashant Heart Hospital
            combines a Philips Advanced Cath Lab with a team of Gold Medalist specialists — delivering outcomes
            previously only available in metropolitan centres.
          </p>
        </div>

        {/* Hospital highlights — asymmetric split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Left: Image */}
          <div className="lg:col-span-5 reveal-left">
            <div className="relative rounded-3xl overflow-hidden shadow-navy aspect-[4/3]">
              <AppImage
                src="https://drprashantkashyap.com/static/media/cathlab.53ea011a82b97ad525e0.jpeg"
                alt="Prashant Heart Hospital Philips Advanced Cath Lab room with state-of-the-art cardiac intervention equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                unoptimized />
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card rounded-2xl px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.414 2.798H4.212c-1.444 0-2.414-1.798-1.414-2.798L4.2 15.3" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">Philips Advanced Cath Lab</div>
                      <div className="text-white/60 text-xs">Most Advanced in the Region</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
              {
                icon: 'ShieldCheckIcon',
                title: 'ISO Certified Facility',
                desc: 'ISO 27001 certified for data security and clinical process standards.'
              },
              {
                icon: 'AcademicCapIcon',
                title: 'Gold Medalist Specialist',
                desc: 'Dr. Prashant Kashyap — DM Cardiology Gold Medalist with 10+ years of interventional expertise.'
              },
              {
                icon: 'HeartIcon',
                title: 'Full-Spectrum Cardiology',
                desc: 'From ECG and 2D Echo to Angioplasty, Pacemaker implantation and CRT — all under one roof.'
              },
              {
                icon: 'ClockIcon',
                title: '24/7 Emergency ICU',
                desc: 'Round-the-clock cardiac emergency care with dedicated ICU and rapid response team.'
              }].
              map((item, i) =>
              <div
                key={item.title}
                className={`reveal delay-${(i + 1) * 100} card-hover bg-card rounded-2xl p-6 border border-border shadow-card`}>
                
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={item.icon as 'HeartIcon'} size={22} className="text-accent" />
                  </div>
                  <h3 className="text-primary font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              )}
            </div>

            {/* Stats strip */}
            <div className="reveal delay-500 grid grid-cols-3 gap-4 bg-primary rounded-2xl p-6">
              {[
              { val: '50,000+', label: 'Patients Served' },
              { val: '98%', label: 'Satisfaction Rate' },
              { val: '12+', label: 'Years of Service' }].
              map((s) =>
              <div key={s.label} className="text-center">
                  <div className="text-accent font-bold text-2xl stat-number font-serif">{s.val}</div>
                  <div className="text-white/60 text-xs mt-1">{s.label}</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-4">
          <div className="reveal flex items-center justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-3">
                <span className="section-label text-accent">Our Team</span>
              </div>
              <h2 className="text-section-xl font-serif text-primary">
                Meet the Doctors
              </h2>
            </div>
          </div>

          {/* BENTO GRID AUDIT:
                Array has 3 doctors: [DrPrashant cs-1, DrSeep cs-1, DrDinesh cs-1]
                Row 1: [col-1: DrPrashant cs-1] [col-2: DrSeep cs-1] [col-3: DrDinesh cs-1]
                Placed 3/3 ✓
             */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {staff.map((doc, i) =>
            <div
              key={doc.name}
              className={`reveal delay-${(i + 1) * 100} card-hover group relative rounded-3xl overflow-hidden border border-border shadow-card bg-card`}>
              
                {/* Photo */}
                <div className="relative h-64 overflow-hidden">
                  <AppImage
                  src={doc.photo}
                  alt={doc.alt}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                  {doc.badge &&
                <div className="absolute top-4 right-4 bg-yellow-400 text-primary text-xs font-bold px-3 py-1 rounded-full">
                      🏅 {doc.badge}
                    </div>
                }
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-primary font-semibold text-lg mb-1">{doc.name}</h3>
                  <p className="text-accent text-sm font-medium mb-2">{doc.role}</p>
                  <p className="text-muted-foreground text-xs mb-4 leading-relaxed">{doc.quals}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">{doc.exp}</span>
                    <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">{doc.patients} Patients</span>
                    <span className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full font-semibold">{doc.rating}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}