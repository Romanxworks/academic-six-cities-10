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

export enum NameSpace {
    Data = 'DATA',
    Main = 'MAIN',
    User = 'USER',
  }

export enum NameCities {
  Paris = 'Paris',
  Dusseldorf = 'Dusseldorf',
  Hamburg = 'Hamburg',
  Cologne = 'Cologne',
  Amsterdam = 'Amsterdam',
  Brussels = 'Brussels',
  }

export const MAX_IMAGES_COUNT = 6;

export const MAX_REVIEWS_COUNT = 10;

export const MAX_REVIEW_LENGTH = 300;

export const MIN_REVIEW_LENGTH = 50;

export const RATING_ADAPTER = 0.05;

export const URL_MARKER_DEFAULT = '../../img/pin.svg';

export const URL_MARKER_CURRENT = '../../img/pin-active.svg';

export const CITIES :City[] = [
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

export const BLANK_OFFER = {
  id: 0,
  images: [],
  title: '',
  description: '',
  type: '',
  bedrooms: 0,
  maxAdults: 0,
  goods: [],
  host: {
    id: 0,
    name: '',
    email: '',
    avatarUrl: '',
    isPro: false,
    token: '',
  },
  rating: 0,
  isFavorite: false,
  isPremium: false,
  price: 0,
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0
  },
  reviews: [],
  city: {
    name: '',
    location:{
      latitude: 0,
      longitude: 0,
      zoom: 0
    }
  },
  previewImage: ''
};
