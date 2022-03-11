import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../../services/movieAPI';

import ReviewsList from './ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const param = useParams();

  useEffect(() => {
    apiService
      .getMovieReviews(param.movieID)
      .then(resp => setReviews(resp.results))
      .catch(error => console.error(error));
  }, [param.movieID]);

  return (
    <>
      {reviews === null ? (
        <p>...Loading</p>
      ) : reviews.length === 0 ? (
        <p>...We don't have any reviews for this movie...</p>
      ) : (
        <ReviewsList reviews={reviews} />
      )}
    </>
  );
};

export default Reviews;
