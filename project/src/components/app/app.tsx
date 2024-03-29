import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import PropertyPage from '../../pages/property-page/property-page';
import ErrorPage from '../../pages/error-page/error-page';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';
import {useAppSelector} from '../../hooks';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import {getAuthorizationStatus} from '../../store/user-process/selectors';


function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus = {authorizationStatus}
            >
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element = {<ErrorPage />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
