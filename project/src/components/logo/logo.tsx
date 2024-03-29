import {Link} from 'react-router-dom';
import {AppRoute, CITIES} from '../../const';
import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/main-process/main-process';
import {memo} from 'react';

function Logo ():JSX.Element {
  const dispatch = useAppDispatch();
  const handleClickMain = () => {
    dispatch(changeCity(CITIES[0]));
  };
  return (
    <div className="header__left">
      <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}
        onClick = {handleClickMain}
      >
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
      </Link>
    </div>
  );
}

export default memo(Logo);
