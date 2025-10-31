import React from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="relative rounded-lg overflow-hidden group h-80 shadow-lg">
    <img src={service.imageUrl} alt={service.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
      <h3 className="text-2xl font-bold">{service.name}</h3>
      <div className="opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-screen transition-all duration-500 ease-in-out">
        <p className="mt-2 text-gray-200">{service.description}</p>
        <p className="text-xl font-bold text-brand-secondary mt-2">${service.price}</p>
        <button className="mt-4 bg-brand-secondary text-white font-semibold py-2 px-4 rounded-full text-sm hover:opacity-90 transition-opacity">
          Learn More
        </button>
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-brand-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Our Comprehensive Services</h2>
          <p className="text-lg text-brand-text-secondary mt-2 max-w-2xl mx-auto">From routine checkups to cosmetic transformations, we've got you covered.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;