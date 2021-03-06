import PropTypes from 'prop-types';
import s from './CastList.module.css';
import noImageFound from '../../img/no-image.jpg';

const CastList = ({ cast }) => {
  return (
    <>
      <ul className={s.list}>
        {cast.map(actor => (
          <li key={actor.id}>
            <span>Actor: {actor.name}</span>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : noImageFound
              }
              alt="NO FOTO"
              className={s.photo}
            />
            <span>Character: {actor.character}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

CastList.propTypes = {
  cast: PropTypes.array.isRequired,
};

export default CastList;
