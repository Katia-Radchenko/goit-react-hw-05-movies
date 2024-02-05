import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../api/api-movies';

import ReviewsList from './ReviewsList';
import { Loader } from '../Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const param = useParams();

  useEffect(() => {

    const fetchList = async () => {
      try {
        const { data } = await getReviews(param.movieId);
        setReviews(data.results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchList();
  }, [param.movieId]);


  return <>
    {error && <p>{error}</p>}
    {reviews === null ? (

      <Loader />
    ) : reviews.length === 0 ? (
      <p>...We don't have any reviews for this movie...</p>
    ) : (
      <ReviewsList reviews={reviews} />
    )}
  </>;

};

export default Reviews;
