import {Dimensions} from 'react-native';

export const monthNames = [
  'Sausis',
  'Vasaris',
  'Kovas',
  'Balandis',
  'Gegužė',
  'Birželis',
  'Liepa',
  'Rugpjūtis',
  'Rugsėjis',
  'Spalis',
  'Lapkritis',
  'Gruodis',
];

export const monthNamesWithLimb = [
  'Sausio',
  'Vasario',
  'Kovo',
  'Balandžio',
  'Gegužės',
  'Birželio',
  'Liepos',
  'Rugpjūčio',
  'Rugsėjo',
  'Spalio',
  'Lapkričio',
  'Gruodžio',
];

export const dayNames = [
  'Sekmadienis',
  'Pirmadienis',
  'Antradienis',
  'Trečiadienis',
  'Ketvirtadienis',
  'Penktadienis',
  'Šeštadienis',
];
export const shortMonthNames = [
  'sau',
  'vas',
  'kov',
  'bal',
  'geg',
  'bir',
  'lie',
  'rugp',
  'rugs',
  'spa',
  'lap',
  'gru',
];
export const shortDayNames = ['S', 'P', 'A', 'T', 'K', 'Pn', 'Š'];

// Dimensions
export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
export const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 6) / 4);

// Holidays info
export const YEAR = new Date().getFullYear();
export const COUNTRY_CODE = 'LT';

// Error messages
export const errorMessageHolidays = 'Nepavyksta gauti duomenų apie šventes.';
export const errorMessageNews = 'Nepavyksta gauti duomenų apie naujienas.';
