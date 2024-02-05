import { NavLink, useLocation } from 'react-router-dom';
import s from './ListMovies.module.css';


const ListMovies = ({ movies }) => {
  const location = useLocation();

  const elements = movies.map(({ id, title }) => (<li key={id} className={s.item}>
    <NavLink state={{ from: location }} to={`/movies/${id}`}> {title}</NavLink>
  </li>));
  return (
    <>
      <ol>
        {elements}
      </ol>
    </>
  );

};
export default ListMovies;
