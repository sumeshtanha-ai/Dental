import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import type { GalleryImage } from '../types';

const GalleryImageCard: React.FC<{ image: GalleryImage; className?: string }> = ({ image, className = '' }) => (
    <div className={`relative rounded-lg overflow-hidden group shadow-lg ${className}`}>
        <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-white text-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {image.caption}
            </p>
        </div>
    </div>
);

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-brand-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Explore Our Clinic</h2>
          <p className="text-lg text-brand-text-secondary mt-2 max-w-2xl mx-auto">A glimpse into our modern, clean, and welcoming environment.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{gridAutoRows: '200px'}}>
          <GalleryImageCard image={GALLERY_IMAGES[0]} className="col-span-2 row-span-2" />
          <GalleryImageCard image={GALLERY_IMAGES[1]} />
          <GalleryImageCard image={GALLERY_IMAGES[2]} />
          <GalleryImageCard image={GALLERY_IMAGES[3]} className="col-span-2 row-span-2" />
          <GalleryImageCard image={GALLERY_IMAGES[4]} />
          <GalleryImageCard image={GALLERY_IMAGES[5]} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;