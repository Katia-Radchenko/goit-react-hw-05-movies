import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import s from './MoviesDetailsInfo.module.css';
import { getSearchById } from '../../api/api-movies';
import AdditionalMovieInfo from '../AdditionalMovieInfo/AdditionalMovieInfo';
import { Loader } from '../Loader/Loader';

const MoviesDetailsInfo = () => {
  const param = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
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

  const { title, poster_path, vote_average, overview, genres } = movies || {};

  return (
    <>
      {error && <p>{error}</p>}
      <button className={s.button} onClick={returnBack}>Go back</button>
      <div className={s.container}>
        {movies !== null ? (
          <>
            <div className={s.imgThumb}>
              <img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={title}
              />
            </div>

            <div>
              <h2 className={s.title}>{title}</h2>
              <p className={s.score}>{`User Score: ${vote_average * 10 + '%'}`}</p>
              <h3 className={s.overviewTitle}>Overview</h3>
              <p className={s.overviewDescr}>{overview}</p>
              <h3 className={s.genresTitle}>Genres</h3>
              <ul className={s.genresList}>
                {genres && genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <Loader/>
        )}
      </div>
      <AdditionalMovieInfo />
    </>
  );

};


export default MoviesDetailsInfo;
