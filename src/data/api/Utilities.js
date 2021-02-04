import Axios from 'axios';

const year = new Date().getFullYear();
const countryCode = 'LT';

export const holidayApiUrl = `https://date.nager.at/api/v2/publicholidays/${year}/${countryCode}`;
