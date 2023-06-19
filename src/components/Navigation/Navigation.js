import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {isLoggedIn === true ? (
        <>
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
        </>
      ) : (
        <span className={css.span}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
          <p className={css.text}>Welcome to your personal phonebook </p>
        </span>
      )}
    </nav>
  );
};
