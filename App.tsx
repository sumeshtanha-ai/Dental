import React, { useState } from 'react';
import type { Review } from './types';
import { INITIAL_REVIEWS } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Doctors from './components/Doctors';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);

  const addReview = (review: Omit<Review, 'id'>) => {
    const newReview: Review = {
      id: Date.now(),
      ...review,
    };
    setReviews([newReview, ...reviews]);
  };

  return (
    <div className="bg-brand-background text-brand-text-primary font-sans">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Doctors />
        <Services />
        <Gallery />
        <Reviews reviews={reviews} addReview={addReview} />
      </main>
      <Footer />
    </div>
  );
}

export default App;