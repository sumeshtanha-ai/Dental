import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-[500px] h-[65vh] flex items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/3845843/pexels-photo-3845843.jpeg)',
        backgroundPosition: '10% center', // Position the image to the right
      }}
    >
      {/* Gradient overlay from left to right */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-background via-brand-background/90 to-transparent z-10"></div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-lg text-left">
          <span className="inline-block bg-brand-primary/10 text-brand-primary text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Welcome to DentaCare
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-text-primary leading-tight tracking-tight">
            Modern Dentistry, <br />
            <span className="text-brand-primary">Gentle Approach.</span>
          </h1>
          <p className="mt-6 text-lg max-w-xl text-brand-text-secondary">
            We're dedicated to providing you with personalized, high-quality dental care in a comfortable and welcoming environment.
          </p>
          <a 
            href="#contact" 
            className="mt-8 inline-block bg-brand-secondary text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity text-lg transform hover:scale-105 duration-300"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;