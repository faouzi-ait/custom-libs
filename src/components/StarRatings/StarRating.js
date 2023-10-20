import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles.module.scss';

/**
 * StarRating component displays a star rating interface allowing users to select a rating.
 *
 * @component
 * @example
 * <StarRating rating={initialRating} setRating={handleRatingChange} />
 *
 * @param {object} props - The properties of the component.
 * @param {number} props.rating - The current rating value.
 * @param {function} props.setRating - A function to update the rating value.
 * @returns {JSX.Element} StarRating component.
 */
const StarRating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(0);

  return (
    <section>
      {[...Array(5)].map((_, index) => {
        index = index + 1;

        return (
          <button
            data-testid="stars"
            type="button"
            key={index}
            className={index <= (hover || rating) ? styles.on : styles.off}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span>&#9733;</span>
          </button>
        );
      })}
    </section>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
};

StarRating.defaultProps = {
  rating: 0,
  setRating: () => {},
};

export default StarRating;
