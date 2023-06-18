import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import defaultAvatar from './default-avatar.png';

export const UserMenu = () => {
  const avatar = defaultAvatar;
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <img src={avatar} alt="" width="32" className={css.avatar} />
      <p className={css.welcome}>
        Welcome <span className={css.username}>{user.name}</span>
      </p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(authOperations.logout())}
      >
        {' '}
        Logout
      </button>
    </div>
  );
};
