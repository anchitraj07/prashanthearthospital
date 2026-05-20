'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const services = [
  'General Cardiac Consultation',
  'Angiography',
  'Angioplasty',
  '2D Echo / Stress Echo',
  'TMT – Treadmill Test',
  'Holter Monitoring',
  'ECG',
  'Pacemaker Consultation',
  'ICD / CRT Consultation',
  'Paediatric / Foetal Echo',
  'Other',
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  time: '',
  message: '',
};

export default function AppointmentSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      // Create WhatsApp message
      const message = `Hello Prashant Heart Hospital, I would like to book an appointment:
- Name: ${form.name}
- Phone: ${form.phone}
- Email: ${form.email || 'N/A'}
- Service: ${form.service}
- Date: ${form.date}
- Time: ${form.time || 'N/A'}
- Message: ${form.message || 'N/A'}`;

      const whatsappUrl = `https://wa.me/918084388876?text=${encodeURIComponent(message)}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      setStatus('success');
      setForm(initialForm);
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or call us directly.');
    }
  };

  return (
    <section id="appointment" className="section-pad bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Info */}
          <div className="lg:col-span-5 reveal-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/25 mb-5">
              <span className="section-label text-accent">Book Now</span>
            </div>
            <h2 className="text-section-xl font-serif text-white mb-5">
              Book Your <span className="teal-gradient-text italic">Appointment</span>
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-10">
              Schedule a consultation with Dr. Prashant Kashyap or one of our specialists. Our team
              will confirm your appointment within 2 hours.
            </p>

            {/* Info cards */}
            <div className="space-y-4">
              {[
                {
                  icon: 'PhoneIcon',
                  label: 'Call Us',
                  value: '+91 80029 82980',
                  sub: 'Mon–Sat, 9am–7pm',
                },
                {
                  icon: 'ChatBubbleLeftEllipsisIcon',
                  label: 'WhatsApp Booking',
                  value: '+91 80843 88876',
                  sub: 'Quick response guaranteed',
                },
                {
                  icon: 'EnvelopeIcon',
                  label: 'Email',
                  value: 'prashantkashyap2804@gmail.com',
                  sub: 'We reply within 24 hours',
                },
                {
                  icon: 'MapPinIcon',
                  label: 'Address',
                  value: 'IMA Path, Near TV Tower, Begusarai – 851 101',
                  sub: 'Bihar, India',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={item.icon as 'PhoneIcon'} size={18} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs section-label mb-0.5">{item.label}</div>
                    <div className="text-white font-medium text-sm">{item.value}</div>
                    <div className="text-white/40 text-xs mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/918084388876"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ background: '#25D366' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book via WhatsApp
            </a>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7 reveal-right">
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-navy">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                    <Icon name="CheckCircleIcon" size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-primary font-semibold text-xl mb-3 font-serif">
                    Appointment Booked!
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">
                    Thank you! Your appointment request has been received and saved. Our team will
                    call you within 2 hours to confirm your slot.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-3 rounded-full bg-primary text-white font-medium text-sm hover:shadow-navy transition-all"
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-primary font-semibold text-xl mb-1 font-serif">
                    Request an Appointment
                  </h3>
                  <p className="text-muted-foreground text-sm mb-7">
                    Fill in your details and we&apos;ll confirm within 2 hours.
                  </p>

                  {status === 'error' && (
                    <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                      {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-primary text-sm font-medium mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-primary text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-primary text-sm font-medium mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-primary text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-primary text-sm font-medium mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com (optional)"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-primary text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-primary text-sm font-medium mb-1.5">
                        Service Required *
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-primary text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-primary text-sm font-medium mb-1.5">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-primary text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-primary text-sm font-medium mb-1.5">
                          Preferred Time
                        </label>
                        <select
                          name="time"
                          value={form.time}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-primary text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                        >
                          <option value="">Any time</option>
                          <option>9:00 AM – 11:00 AM</option>
                          <option>11:00 AM – 1:00 PM</option>
                          <option>2:00 PM – 4:00 PM</option>
                          <option>4:00 PM – 6:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-primary text-sm font-medium mb-1.5">
                        Additional Notes
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Describe your symptoms or any relevant medical history..."
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-primary text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 rounded-xl bg-primary text-white font-semibold text-base hover:shadow-navy hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Confirm Appointment Request
                          <Icon name="ArrowRightIcon" size={18} className="text-white" />
                        </>
                      )}
                    </button>

                    <p className="text-muted-foreground text-xs text-center mt-2">
                      🔒 Your information is secure and confidential. We will never share your
                      details.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
