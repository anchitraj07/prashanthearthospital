'use client';

import React, { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface DoctorDetails {
  education?: string[];
  experience?: string[];
  services?: string[];
  address?: string;
  phones?: string[];
}

interface Doctor {
  name: string;
  role: string;
  quals: string;
  photo: string;
  alt: string;
  details?: DoctorDetails;
}

interface DoctorModalProps {
  doctor: Doctor | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function DoctorModal({ doctor, isOpen, onClose }: DoctorModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !doctor) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-2 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden animate-modal-in max-h-[92vh] flex flex-col">
        {/* Close Button - More accessible on mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[2010] p-2 rounded-full bg-slate-100/80 backdrop-blur-sm text-primary hover:bg-accent hover:text-white transition-all shadow-sm"
          aria-label="Close modal"
        >
          <Icon name="XMarkIcon" size={20} />
        </button>

        <div className="flex-grow overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* Left Column: Photo & Basic Info */}
            <div className="md:col-span-5 bg-slate-50 p-6 sm:p-8 flex flex-col">
              <div className="relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg mb-6 max-w-[280px] mx-auto md:max-w-none w-full">
                <AppImage
                  src={doctor.photo}
                  alt={doctor.alt}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-serif text-primary mb-1">{doctor.name}</h2>
                <p className="text-accent font-semibold text-base md:text-lg mb-4">{doctor.role}</p>
              </div>
              
              <div className="space-y-4 mt-4 md:mt-auto">
                {doctor.details?.address && (
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPinIcon" size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Address</p>
                      <p className="text-xs md:text-sm text-primary leading-tight">{doctor.details.address}</p>
                    </div>
                  </div>
                )}
                
                {doctor.details?.phones && (
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="PhoneIcon" size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Phone</p>
                      <p className="text-xs md:text-sm text-primary leading-tight">
                        {doctor.details.phones.join(', ')}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Detailed Info */}
            <div className="md:col-span-7 p-6 sm:p-8 md:p-10">
              <div className="space-y-6 md:space-y-8">
                {/* Qualifications */}
                <div>
                  <h3 className="text-lg md:text-xl font-serif text-primary mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <Icon name="AcademicCapIcon" size={18} className="text-primary" />
                    </span>
                    Qualifications & Education
                  </h3>
                  <div className="grid grid-cols-1 gap-2.5">
                    {doctor.details?.education?.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-xs md:text-sm text-primary">{item}</span>
                      </div>
                    )) || <p className="text-xs md:text-sm text-muted-foreground">{doctor.quals}</p>}
                  </div>
                </div>

                {/* Experience */}
                {doctor.details?.experience && (
                  <div>
                    <h3 className="text-lg md:text-xl font-serif text-primary mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                        <Icon name="BriefcaseIcon" size={18} className="text-primary" />
                      </span>
                      Professional Experience
                    </h3>
                    <div className="space-y-2.5">
                      {doctor.details.experience.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon name="CheckIcon" size={10} className="text-primary" />
                          </div>
                          <span className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Services */}
                {doctor.details?.services && (
                  <div>
                    <h3 className="text-lg md:text-xl font-serif text-primary mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                        <Icon name="HeartIcon" size={18} className="text-primary" />
                      </span>
                      Specialized Services
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {doctor.details.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <div className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                          <span className="text-[11px] md:text-xs text-muted-foreground">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
