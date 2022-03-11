import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  const setActive = ({ isActive }) =>
    isActive ? `${s.navLink} ${s.activeNavLink}` : s.navLink;

  return (
    <nav className={s.navContainer}>
      <NavLink to="/" className={setActive}>
        Home
      </NavLink>
      <NavLink to="movies" className={setActive}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
