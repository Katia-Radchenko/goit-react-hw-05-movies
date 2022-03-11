import PropTypes from 'prop-types';
import s from './MovieInfoDetails.module.css';

const MovieInfoDetails = ({ movie }) => {
  const { title, poster_path, vote_average, overview, genres } = movie;

  return (
    <div className={s.container}>
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
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MovieInfoDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieInfoDetails;
