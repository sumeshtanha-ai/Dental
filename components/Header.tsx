import React from 'react';

const Header: React.FC = () => {
  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#doctors', label: 'Our Experts' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#reviews', label: 'Reviews' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-surface/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-brand-primary"><path d="M9.34 4.15a2.5 2.5 0 0 1 5.32 0 2.5 2.5 0 0 1 1.93 4.35 2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1-1.93 4.35 2.5 2.5 0 0 1-5.32 0 2.5 2.5 0 0 1-1.93-4.35 2.5 2.5 0 0 1 0-5A2.5 2.5 0 0 1 9.34 4.15Z"/><path d="m6 17 2-3"/><path d="m18 17-2-3"/></svg>
          <h1 className="text-2xl font-bold text-brand-primary">DentaCare</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-brand-text-primary hover:text-brand-primary transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a 
          href="#contact" 
          className="bg-brand-secondary text-white font-bold py-2 px-6 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105"
        >
          Book Now
        </a>
      </div>
    </header>
  );
};

export default Header;