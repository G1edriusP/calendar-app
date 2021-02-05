import {Alert} from 'react-native';

import Axios from 'axios';

// Utilities
import {holidayApiUrl, newsApiUrl} from './Utilities';

export const getHolidays = async (setHolidays, setLoading) => {
  const year = new Date().getFullYear();
  const countryCode = 'LT';

  await Axios.get(holidayApiUrl(year, countryCode))
    .then((value) => {
      setHolidays(value.data);
      setLoading(false);
    })
    .catch(() => {
      Alert.alert('Klaida!', 'Nepavyksta gauti duomenų apie šventes.');
    });
};

export const getNews = async (date, setNews, setLoading) => {
  await Axios.get(newsApiUrl(date))
    .then((value) => {
      setNews(value.data);
      setLoading(false);
    })
    .catch(() => {
      Alert.alert('Klaida!', 'Nepavyksta gauti duomenų apie naujienas.');
    });
};
