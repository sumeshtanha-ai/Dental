import React, { useState } from 'react';

interface StarRatingProps {
  rating: number;
  setRating?: (rating: number) => void;
  isEditable?: boolean;
}

const Star: React.FC<{ filled: boolean; onClick?: () => void; onMouseEnter?: () => void; onMouseLeave?: () => void }> = ({ filled, onClick, onMouseEnter, onMouseLeave }) => (
  <svg
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`w-7 h-7 cursor-pointer transition-colors duration-200 ${filled ? 'text-brand-secondary' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

const StarRating: React.FC<StarRatingProps> = ({ rating, setRating, isEditable = false }) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          filled={isEditable ? (hoverRating || rating) >= star : rating >= star}
          onClick={isEditable ? () => setRating && setRating(star) : undefined}
          onMouseEnter={isEditable ? () => setHoverRating(star) : undefined}
          onMouseLeave={isEditable ? () => setHoverRating(0) : undefined}
        />
      ))}
    </div>
  );
};

export default StarRating;