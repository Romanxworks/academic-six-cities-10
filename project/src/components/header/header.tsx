import HeaderNavigation from '../header-navigation/header-navigation';
import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';

function Header ():JSX.Element{
  const location = useLocation();
  const isLoginPage = location.pathname === AppRoute.Login;
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {!isLoginPage && <HeaderNavigation />}
        </div>
      </div>
    </header>
  );
}

export default Header;
