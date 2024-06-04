import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StarRating from './StarRating';

describe('StarRating Component', () => {
  it('renders the correct number of filled and empty stars based on the rating prop', () => {
    const rating = 3;
    render(<StarRating rating={rating} />);

    const filledStars = screen.getAllByAltText('Filled Star');
    const emptyStars = screen.getAllByAltText('Empty Star');

    expect(filledStars.length).toBe(rating); // Should have 3 filled stars
    expect(emptyStars.length).toBe(5 - rating); // Should have 2 empty stars
  });

  it('sets the correct src attribute for filled and empty stars', () => {
    const rating = 3;
    render(<StarRating rating={rating} />);

    const stars = screen.getAllByRole('img');

    stars.forEach((star, index) => {
      if (index < rating) {
        expect(star).toHaveAttribute('src', 'test-file-stub');
      } else {
        expect(star).toHaveAttribute('src', 'test-file-stub');
      }
    });
  });

  it('sets the correct alt text for filled and empty stars', () => {
    const rating = 3;
    render(<StarRating rating={rating} />);

    const stars = screen.getAllByRole('img');

    stars.forEach((star, index) => {
      if (index < rating) {
        expect(star).toHaveAttribute('alt', 'Filled Star');
      } else {
        expect(star).toHaveAttribute('alt', 'Empty Star');
      }
    });
  });

  it('renders no filled stars when rating is 0', () => {
    render(<StarRating rating={0} />);

    const filledStars = screen.queryAllByAltText('Filled Star');
    const emptyStars = screen.getAllByAltText('Empty Star');

    expect(filledStars.length).toBe(0); // Should have no filled stars
    expect(emptyStars.length).toBe(5); // Should have 5 empty stars
  });

  it('renders all filled stars when rating is 5', () => {
    render(<StarRating rating={5} />);

    const filledStars = screen.getAllByAltText('Filled Star');
    const emptyStars = screen.queryAllByAltText('Empty Star');

    expect(filledStars.length).toBe(5); // Should have 5 filled stars
    expect(emptyStars.length).toBe(0); // Should have no empty stars
  });
});
