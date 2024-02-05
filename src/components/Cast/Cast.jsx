import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast, getSearchById } from '../../api/api-movies';
import CastList from './CastList';
import { Loader } from '../Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const param = useParams();

  useEffect(() => {

    const fetchList = async () => {
      try {
        const { data } = await getCast(param.movieId);
        setCast(data.cast);
      } catch (error) {
        setError(error.message);
      }
      // finally {
      //   setLoading(false);
      // }
    };

    fetchList();
  }, [param.movieId]);


  return <>{error && <p>{error}</p>}{cast === null ? <Loader /> : <CastList cast={cast} />}</>;
};

export default Cast;
