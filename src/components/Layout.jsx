import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import { Copyright } from './Copyright';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      {isLoggedIn && <Copyright sx={{ mt: 5 }} />}
    </div>
  );
};
export default Layout;
