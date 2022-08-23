import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {Review} from '../types/review';
import {AuthorizationStatus, AppRoute} from '../const';

export const changeCity = createAction('main/changeCity', (cityName) => ({
  payload: cityName,
}) );

export const getOffersByCity = createAction('main/getOffersByCity', (cityName) => ({
  payload: cityName,
}));

export const changeOffers = createAction('main/changeOffers', (newOffers) => ({
  payload: newOffers,
}));

export const changeSelectedOffer = createAction('main/changeSelectedOffer', (newOffer) => ({
  payload: newOffer,
}));

export const getFavoriteCount = createAction('property/getFavoriteCount');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const loadOffer = createAction<Offer>('data/loadOffer');

export const loadOffersNearby = createAction<Offer[]>('data/loadOffersNearby');

export const loadReveiws = createAction<Review[]>('data/loadReveiws');

export const loadFavorites = createAction<Offer[]>('data/loadFavorites');

export const setIdOffer = createAction<number>('property/setIdOffer');

export const setUserEmail = createAction<string>('login/setUserEmail');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('main/setError');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');
