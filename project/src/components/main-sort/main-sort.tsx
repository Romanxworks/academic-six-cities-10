import {useState, SyntheticEvent} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {changeOffers, getOffers} from '../../store/action';
import {sortByPriceToLow, sortByPriceToHigh, sortByRating} from '../../utils';

function MainSort ():JSX.Element{
  const dispatch = useAppDispatch();
  const [sortState, setSortState] = useState(false);
  const [sortName, setSortName] = useState('Popular');

  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => (state.offers));

  const getSotrName = ({currentTarget}:SyntheticEvent<HTMLElement>) => {
    setSortName(currentTarget.innerHTML);
    setSortState(!sortState);
    const sortOffers = offers.slice();
    switch (currentTarget.dataset.sort) {
      case 'PriceLow':
        sortOffers.sort(sortByPriceToLow);
        dispatch(changeOffers(sortOffers));
        break;
      case 'PriceHigh':
        sortOffers.sort(sortByPriceToHigh);
        dispatch(changeOffers(sortOffers));
        break;
      case 'Rated':
        sortOffers.sort(sortByRating);
        dispatch(changeOffers(sortOffers));
        break;
      case 'Popular':
        dispatch(getOffers(city));
        break;
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex= {0} onClick = {()=> setSortState(!sortState) }>
        {sortName}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className = {`places__options places__options--custom places__options--${sortState && 'opened'}`} >
        <li className="places__option places__option--active" tabIndex={0} data-sort = 'Popular' onClick = {getSotrName}>Popular</li>
        <li className="places__option" tabIndex={0} data-sort = 'PriceHigh' onClick = {getSotrName}>Price: low to high</li>
        <li className="places__option" tabIndex={0} data-sort = 'PriceLow' onClick = {getSotrName}>Price: high to low</li>
        <li className="places__option" tabIndex={0} data-sort = 'Rated' onClick = {getSotrName}>Top rated first</li>
      </ul>
    </form>
  );
}

export default MainSort;