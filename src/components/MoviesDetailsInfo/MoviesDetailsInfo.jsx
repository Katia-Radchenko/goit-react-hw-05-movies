import s from './MoviesDetailsInfo.module.css';
import AdditionalMovieInfo from '../AdditionalMovieInfo/AdditionalMovieInfo';
import { Loader } from '../Loader/Loader';
import noImageFound from '../../img/no-image.jpg';

const MoviesDetailsInfo = ({ movies, onClick }) => {
  const { title, poster_path, vote_average, overview, genres } = movies || {};

  return (
    <>

      <button className={s.button} onClick={onClick}>Go back</button>
      <div className={s.container}>
        {movies !== null ? (
          <>
            <div className={s.imgThumb}>
              <img
                src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : noImageFound}
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
          <Loader />
        )}
      </div>
      <AdditionalMovieInfo />
    </>
  );

};


export default MoviesDetailsInfo;
