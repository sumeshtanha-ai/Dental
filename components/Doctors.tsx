import React from 'react';
import { DOCTORS } from '../constants';
import type { Doctor } from '../types';

const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => (
  <div className="bg-brand-surface rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img src={doctor.imageUrl} alt={`Dr. ${doctor.name}`} className="w-full h-64 object-cover object-center" />
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold text-brand-primary">{doctor.name}</h3>
      <p className="text-md font-semibold text-brand-secondary">{doctor.specialty}</p>
      <p className="mt-4 text-brand-text-secondary">{doctor.bio}</p>
    </div>
  </div>
);

const Doctors: React.FC = () => {
  return (
    <section id="doctors" className="py-20 bg-brand-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Meet Our Experts</h2>
          <p className="text-lg text-brand-text-secondary mt-2 max-w-2xl mx-auto">Our team of dedicated professionals is here to provide you with the best dental care possible.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {DOCTORS.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;