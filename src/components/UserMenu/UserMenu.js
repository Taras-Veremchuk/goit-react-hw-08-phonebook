import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import defaultAvatar from './default-avatar.png';

export const UserMenu = () => {
  const avatar = defaultAvatar;
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <img src={avatar} alt="" width="32" className={css.avatar} />
      <p className={css.username}>
        Welcome,
        {user.name}
      </p>
      <button type="button" onClick={() => dispatch(authOperations.logout())}>
        {' '}
        Logout
      </button>
    </div>
  );
};
