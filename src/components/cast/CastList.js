import PropTypes from 'prop-types';
import s from './CastList.module.css';

const CastList = ({ cast }) => {
  return (
    <>
      <ul className={s.list}>
        {cast.map(actor => (
          <li key={actor.id}>
            <span>Actor: {actor.name}</span>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt="NO FOTO"
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
