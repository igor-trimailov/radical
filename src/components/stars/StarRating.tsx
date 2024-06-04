import React from 'react';
import filledStar from '../../assets/star-filled.png';
import emptyStar from '../../assets/star.png';
import * as styles from './StarRating.module.css'; // CSS file for styling

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className={styles.starRating}>
      {Array.from({ length: 5 }, (_, i) => (
        <img
          key={i}
          src={i < rating ? filledStar : emptyStar}
          alt={i < rating ? 'Filled Star' : 'Empty Star'}
          className={styles.star}
        />
      ))}
    </div>
  );
};

export default StarRating;
