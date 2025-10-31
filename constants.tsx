import React from 'react';
import type { Doctor, Service, Review, GalleryImage } from './types';

// Icons as React Components for "Why Choose Us"
export const TechIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-brand-primary"><path d="m12 15-4-4 2-2 4 4 2-2 2 2-4 4Z" /><path d="M12 8V6" /><path d="M15 9h2" /><path d="M12 21v-2" /><path d="M9 15H7" /><path d="M9 9H7" /><path d="m15 15 2 2" /><path d="m9 21-2-2" /><path d="m15 9 2-2" /><path d="m9 9-2-2" /><circle cx="12" cy="12" r="10" /></svg>
);
export const ComfortIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-brand-primary"><path d="M14.5 2.5a2.5 2.5 0 0 0-3 0l-6 6a2.5 2.5 0 0 0 0 3.5l6 6a2.5 2.5 0 0 0 3.5 0l6-6a2.5 2.5 0 0 0 0-3.5Z" /><path d="m12 12 6 6" /><path d="M16 8 8 16" /></svg>
);
export const TeamIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-brand-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);
export const PlanIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-brand-primary"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="m10 16 2 2 4-4" /></svg>
);

// Mock Data
export const DOCTORS: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Evelyn Reed',
    specialty: 'Orthodontist',
    bio: 'Dr. Reed is a board-certified orthodontist with over 15 years of experience in creating beautiful, healthy smiles for patients of all ages.',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Dr. Samuel Chen',
    specialty: 'General & Cosmetic Dentistry',
    bio: 'Dr. Chen combines artistry with science to provide comprehensive dental care, from routine checkups to complete smile makeovers.',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Dr. Maria Garcia',
    specialty: 'Pediatric Dentist',
    bio: 'With a gentle touch and a friendly demeanor, Dr. Garcia specializes in making dental visits a positive experience for children.',
    imageUrl: 'https://images.unsplash.com/photo-1612702229969-9c35b3ba3905?q=80&w=800&auto=format&fit=crop'
  },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    name: 'Teeth Whitening',
    description: 'Brighten your smile with our professional in-office or take-home whitening treatments.',
    price: 299,
    imageUrl: 'https://images.unsplash.com/photo-1600170052347-e2a57d341c2c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Dental Implants',
    description: 'A permanent solution for missing teeth that looks and feels natural.',
    price: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1582845512747-e420042456e3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'General Checkup',
    description: 'Comprehensive oral examination, cleaning, and preventative care.',
    price: 99,
    imageUrl: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=800&auto=format&fit=crop',
  },
    {
    id: 4,
    name: 'Invisalign',
    description: 'Straighten your teeth discreetly with clear, removable aligners.',
    price: 4500,
    imageUrl: 'https://images.unsplash.com/photo-1599056673858-a7a57a06f35b?q=80&w=800&auto=format&fit=crop',
  },
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    title: 'Modern Technology',
    description: 'We use the latest technology for precise and comfortable treatments.',
    icon: <TechIcon />,
  },
  {
    title: 'Patient Comfort',
    description: 'Your comfort is our priority. Relax in our welcoming environment.',
    icon: <ComfortIcon />,
  },
  {
    title: 'Expert Team',
    description: 'Our experienced professionals are dedicated to your oral health.',
    icon: <TeamIcon />,
  },
  {
    title: 'Personalized Plans',
    description: 'We create treatment plans tailored to your specific needs and goals.',
    icon: <PlanIcon />,
  },
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Jessica L.',
    rating: 5,
    comment: 'The best dental experience I have ever had! The staff is friendly, professional, and truly cares about their patients. Highly recommend!',
  },
  {
    id: 2,
    name: 'Mark T.',
    rating: 5,
    comment: 'Dr. Chen is an amazing dentist. He explained everything clearly and made me feel comfortable throughout the entire procedure. The clinic is modern and clean.',
  },
  {
    id: 3,
    name: 'Sarah P.',
    rating: 4,
    comment: 'Great service and very accommodating with scheduling. My teeth have never felt better after the cleaning. Only downside is parking can be a bit tricky.',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=800',
    alt: 'Modern dental clinic reception area',
    caption: 'Comfortable Waiting Area',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800',
    alt: 'State-of-the-art dental treatment room',
    caption: 'Advanced Treatment Rooms',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1616465913392-008355c7a107?q=80&w=800',
    alt: 'Dentist using modern equipment',
    caption: 'Cutting-Edge Technology',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800',
    alt: 'Friendly dental assistant smiling',
    caption: 'Our Caring Team',
  },
   {
    id: 5,
    src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800',
    alt: 'Detailed view of a sterile dental instrument tray',
    caption: 'Sterile & Safe Environment',
  },
   {
    id: 6,
    src: 'https://images.unsplash.com/photo-1606811292084-3b914859c158?q=80&w=800',
    alt: 'A child smiling in the dentist chair',
    caption: 'Pediatric-Friendly Care',
  },
];