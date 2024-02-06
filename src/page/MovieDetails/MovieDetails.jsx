import MoviesDetailsInfo from '../../components/MoviesDetailsInfo/MoviesDetailsInfo';
import { useEffect, useState } from 'react';
import { getSearchById } from '../../api/api-movies';
import { useLocation, useNavigate, useParams } from 'react-router-dom';


const MovieDetails = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const param = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [fromLocation] = useState(() => {
    return location;
  });

  useEffect(() => {

    const fetchList = async () => {
      try {
        const { data } = await getSearchById(param.movieId);
        setMovies(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchList();
  }, [param.movieId]);

  const returnBack = () => {
    if (fromLocation.state !== null) {
      const { pathname, search } = fromLocation.state.from;
      navigate(pathname + search ?? '/');
    } else {
      navigate('/');
    }
  };

  return (
    <main>
      {error && <p>{error}</p>}
      <MoviesDetailsInfo movies={movies} onClick={returnBack} />
    </main>
  );
};

export default MovieDetails;
