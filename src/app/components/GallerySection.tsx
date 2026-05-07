import React from 'react';
import AppImage from '@/components/ui/AppImage';

/* BENTO GRID AUDIT:
   Array has 6 items: [Exterior, CathLab, OT, PatientCare, Consultation, Team]
   Desktop grid-cols-3:
   Row 1: [col-1,2: Exterior cs-2 rs-1] [col-3: CathLab cs-1]
   Row 2: [col-1: OT cs-1] [col-2: PatientCare cs-1] [col-3: Consultation cs-1]
   Row 3 (last card spans full): [col-1,2,3: Team cs-3]
   Wait — 6 cards: exterior(cs-2) + cathlab(cs-1) + OT + PatientCare + Consultation + Team(cs-3)
   Row 1: [col-1,2: Exterior cs-2] [col-3: CathLab cs-1]  → 3 cols filled ✓
   Row 2: [col-1: OT cs-1] [col-2: PatientCare cs-1] [col-3: Consultation cs-1] → 3 cols filled ✓
   Row 3: [col-1,2,3: Team cs-3] → 3 cols filled ✓
   Placed 6/6 ✓
*/

const galleryItems = [
{
  id: 'exterior',
  src: '/assets/images/Hopsital.png',
  alt: 'Prashant Heart Hospital exterior building front view in Begusarai Bihar, modern medical facility with signage',
  label: 'Hospital Exterior',
  sublabel: 'Prashant Heart Hospital, Begusarai',
  colSpan: 'lg:col-span-2',
  tall: true
},
{
  id: 'cathlab',
  src: 'https://drprashantkashyap.com/static/media/cathlab.53ea011a82b97ad525e0.jpeg',
  alt: 'Philips Advanced Cath Lab interior with cardiac imaging equipment and intervention suite at Prashant Heart Hospital',
  label: 'Philips Cath Lab',
  sublabel: 'Advanced Cardiac Intervention Suite',
  colSpan: 'lg:col-span-1',
  tall: true
},
{
  id: 'ot',
  src: 'https://drprashantkashyap.com/static/media/ot.47c72e114d12661306d0.jpeg',
  alt: 'Operating theatre at Prashant Heart Hospital with sterile environment and surgical equipment ready for cardiac procedures',
  label: 'Operating Theatre',
  sublabel: 'Sterile Surgical Suite',
  colSpan: 'lg:col-span-1',
  tall: false
},
{
  id: 'patientcare',
  src: 'https://drprashantkashyap.com/static/media/pcare.78f8c84dc9bd7ad3d896.jpeg',
  alt: 'Patient care area at Prashant Heart Hospital showing comfortable recovery room with attentive nursing staff',
  label: 'Patient Care Area',
  sublabel: 'Comfortable Recovery Rooms',
  colSpan: 'lg:col-span-1',
  tall: false
},
{
  id: 'consultation',
  src: 'https://drprashantkashyap.com/static/media/dr1.356911a88123efcc9ccb.jpeg',
  alt: 'Doctor consultation room at Prashant Heart Hospital with Dr. Prashant Kashyap reviewing patient records in well-equipped office',
  label: 'Consultation Room',
  sublabel: 'Private Doctor Consultation',
  colSpan: 'lg:col-span-1',
  tall: false
},
{
  id: 'team',
  src: 'https://i.ibb.co/Kx9bpXr7/dr1.jpg',
  alt: 'Medical team at Prashant Heart Hospital — doctors and staff in professional setting, group photo in hospital corridor',
  label: '[ PLACEHOLDER — Hospital Team Photo ]',
  sublabel: 'Add a group photo of your medical team here',
  colSpan: 'lg:col-span-3',
  tall: false,
  placeholder: true
}];


export default function GallerySection() {
  return (
    <section id="gallery" className="section-pad bg-muted relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <span className="section-label text-accent">Gallery</span>
            </div>
            <h2 className="reveal delay-100 text-section-xl font-serif text-primary">
              Our{' '}
              <span className="teal-gradient-text italic">Facility</span>
            </h2>
          </div>
          <p className="reveal delay-200 text-muted-foreground text-base max-w-xs md:text-right leading-relaxed">
            State-of-the-art infrastructure built to deliver the highest standard of cardiac care.
          </p>
        </div>

        {/* Bento gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems?.map((item, i) => (
          /* STEP 4 JSX comment: card={item.id} colSpan={item.colSpan} */
          <div
            key={item?.id}
            className={`reveal delay-${Math.min((i + 1) * 100, 400)} group relative rounded-2xl overflow-hidden cursor-pointer ${item?.colSpan} ${
            item?.tall ? 'h-72 lg:h-80' : 'h-56'}`
            }>
            
              <AppImage
              src={item?.src}
              alt={item?.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              unoptimized />
            
              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/15 to-transparent" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                {item?.placeholder &&
              <div className="mb-2 inline-flex items-center gap-1.5 bg-yellow-400/90 text-primary text-xs font-bold px-3 py-1 rounded-full">
                    📸 Placeholder
                  </div>
              }
                <div className="text-white font-semibold text-base">{item?.label}</div>
                <div className="text-white/60 text-xs mt-0.5">{item?.sublabel}</div>
              </div>
            </div>)
          )}
        </div>
      </div>
    </section>);

}