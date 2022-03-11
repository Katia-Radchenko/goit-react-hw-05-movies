import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ol>
      {movies.map(movie => (
        <li key={movie.id} className={s.item}>
          {/* <Link to={`/movies/${movie.id}`} className={s.link}> */}
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={s.link}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ol>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
