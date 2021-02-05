import Axios from 'axios';

const year = new Date().getFullYear();
const countryCode = 'LT';

export const holidayApiUrl = `https://date.nager.at/api/v2/publicholidays/${year}/${countryCode}`;

export const newsApiUrl = (date) =>
  `https://spaceflightnewsapi.net/api/v2/articles?publishedAt_gt=${date}T00:00:00Z&publishedAt_lt=${date}T23:59:59Z&_limit=5000`;
