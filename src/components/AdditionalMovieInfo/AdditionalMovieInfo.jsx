import { Link, Outlet } from 'react-router-dom';
import s from './AdditionalMovieInfo.module.css';

const AdditionalMovieInfo = () => {
  return (
    <>
      <h3 className={s.title}>Additional Information</h3>
      <ul className={s.list}>
        <li>
          <Link to="cast" replace="true" className={s.link}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" replace="true" className={s.link}>
            Reviews
          </Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
};

export default AdditionalMovieInfo;
