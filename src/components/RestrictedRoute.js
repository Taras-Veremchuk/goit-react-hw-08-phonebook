import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

// another option:
// import { useSelector } from 'react-redux';
// import { Route, Redirect } from 'react-router-dom';
// import { authSelectors } from '../redux/auth';

// /**
//  * - Если маршрут ограниченный, и юзер залогинен, рендерит редирект на redirectTo
//  * - В противном случае рендерит компонент
//  *
//  */

// export default function PublicRoute({
//   children,
//   restricted = false,
//   redirectTo = '/',
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   const shouldRedirect = isLoggedIn && restricted;
//   return (
//     <Route {...routeProps}>
//       {shouldRedirect ? <Redirect to={redirectTo} /> : children}
//     </Route>
//   );
// }

// ------use:
//  <PublicRoute path="/contacts" restricted=true(якщо передам restricted то він буде true )>
// <Contacts/>
// </PublicRoute>
