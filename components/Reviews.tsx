import React, { useState } from 'react';
import type { Review } from '../types';
import StarRating from './StarRating';

interface ReviewsProps {
  reviews: Review[];
  addReview: (review: Omit<Review, 'id'>) => void;
}

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="bg-brand-surface p-6 rounded-lg shadow-md h-full">
    <div className="flex items-center justify-between mb-2">
      <h4 className="font-bold text-lg text-brand-primary">{review.name}</h4>
      <StarRating rating={review.rating} />
    </div>
    <p className="text-brand-text-secondary">"{review.comment}"</p>
  </div>
);

const Reviews: React.FC<ReviewsProps> = ({ reviews, addReview }) => {
  const [newName, setNewName] = useState('');
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || newRating === 0 || !newComment) {
      setError('Please fill out all fields and select a rating.');
      return;
    }
    addReview({ name: newName, rating: newRating, comment: newComment });
    setNewName('');
    setNewRating(0);
    setNewComment('');
    setError('');
  };

  return (
    <section id="reviews" className="py-20 bg-brand-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">What Our Patients Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="bg-brand-surface p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-brand-primary mb-6 text-center">Leave Your Review</h3>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-text-secondary">Your Name</label>
              <input
                type="text"
                id="name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-text-secondary mb-1">Your Rating</label>
              <StarRating rating={newRating} setRating={setNewRating} isEditable={true} />
            </div>
            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-brand-text-secondary">Comment</label>
              <textarea
                id="comment"
                rows={4}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"
              ></textarea>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-brand-secondary text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity transform hover:scale-105"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reviews;