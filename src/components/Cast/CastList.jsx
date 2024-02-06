import s from './Cast.module.css';
import noImageFound from '../../img/no-image.jpg';

const CastList = ({ cast }) => {
  return (
    <>
      <ul className={s.list}>
        {cast.map((actor, idx) => (
          <li key={idx}>
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

export default CastList;
