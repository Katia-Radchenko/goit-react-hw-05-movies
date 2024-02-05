import { NavLink } from 'react-router-dom';

import s from './main-manu.module.css';

const MainMenu = () => {
  return (
    <ul className={s.menu}>
      <li>
        <NavLink className={s.link} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={s.link} to="/movies">Movies</NavLink>
      </li>
    </ul>
  );
};

export default MainMenu;
