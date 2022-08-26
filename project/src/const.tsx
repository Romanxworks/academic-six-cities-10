import {City} from './types/map';

export enum AppRoute {
    Login = '/login',
    Favorites = '/favorites',
    Room = '/offer/:id',
    Main = '/',
    Error = '/*'
  }

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }

export enum APIRoute {
    Offers = '/hotels',
    Favorite = '/favorite',
    Comments = '/comments',
    Login = '/login',
    Logout = '/logout',
  }

export const MAX_IMAGES_COUNT = 6;

export const MAX_REVIEWS_COUNT = 10;

export const MAX_REVIEW_LENGTH = 300;

export const MIN_REVIEW_LENGTH = 50;

export const TIMEOUT_SHOW_ERROR = 2000;

export const RATING_ADAPTER = 0.05;

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const URL_MARKER_DEFAULT = '../../img/pin.svg';

export const URL_MARKER_CURRENT = '../../img/pin-active.svg';

export const CITY :City[] = [
  {
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    },
    name: 'Paris'
  },
  {
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    },
    name: 'Cologne'
  },
  {
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    },
    name: 'Brussels'
  },
  {
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    },
    name: 'Amsterdam'
  },
  {
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    },
    name: 'Hamburg'
  },
  {
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    },
    name: 'Dusseldorf'
  },
];
