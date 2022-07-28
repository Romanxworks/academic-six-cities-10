import {Link} from 'react-router-dom';
import Header from '../../components/header/header';
import {AuthorizationStatus, CITIES} from '../../const';
import {Offer} from '../../types/offer';
import {useState} from 'react';
import CitiesCard from '../../components/cities-card/cities-card';


type MainProps = {
    placesCount:number;
    authorizationStatus: AuthorizationStatus;
    offers: Offer[]
}

function MainPage({placesCount, authorizationStatus, offers}:MainProps):JSX.Element{
  const isLogin = authorizationStatus === AuthorizationStatus.Auth;
  const [sortState, setSortState] = useState(false);

  const sortClickHandler = () => {
    setSortState(!sortState);
  };

  return (
    <div className="page page--gray page--main">
      <Header userStatus = {isLogin}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city) => (
                <li className="locations__item" key={`${city}-1`}>
                  <Link className="locations__item-link tabs__item" to ="/">
                    <span>{city}</span>
                  </Link>
                </li>) )}

            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex= {0} onClick={sortClickHandler}>
              Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className={`places__options places__options--custom places__options--${sortState ? 'opened' : ''}`}>
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {offers.map((offer) => (<CitiesCard {...offer} key={offer.id} />))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
