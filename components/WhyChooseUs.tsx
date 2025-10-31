import React from 'react';
import { WHY_CHOOSE_US_ITEMS } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-brand-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Why Choose DentaCare?</h2>
          <p className="text-lg text-brand-text-secondary mt-2 max-w-2xl mx-auto">Discover the difference in our approach to dental health.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => (
            <div key={index} className="text-center p-6 bg-brand-surface rounded-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-primary/10 mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">{item.title}</h3>
              <p className="text-brand-text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
