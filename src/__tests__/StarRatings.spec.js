import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { toHaveClass } from '@testing-library/jest-dom/matchers';
import { StarRatings } from '../components';

import styles from '../styles/App.module.scss';

expect.extend({ toHaveClass });

describe('StarRating component', () => {
  test('renders 5 stars', () => {
    const { getAllByRole } = render(
      <StarRatings rating={5} setRating={() => {}} />,
    );

    const stars = getAllByRole('button');
    expect(stars).toHaveLength(5);
  });

  test('clicking a star calls setRating with the correct value', () => {
    const setRatingMock = jest.fn();
    const { getAllByRole } = render(
      <StarRatings rating={3} setRating={setRatingMock} />,
    );
    const stars = getAllByRole('button');

    fireEvent.click(stars[2]);
    expect(setRatingMock).toHaveBeenCalledWith(3);
  });

  test('hovering over a star changes the style', () => {
    const { getAllByRole } = render(
      <StarRatings rating={3} setRating={() => {}} />,
    );

    const stars = getAllByRole('button');
    fireEvent.mouseEnter(stars[2]);

    expect(stars[2]).toHaveClass(styles.on);
    expect(stars[3]).toHaveClass(styles.off);
  });
});
