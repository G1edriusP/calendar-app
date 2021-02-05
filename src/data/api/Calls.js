import {Alert} from 'react-native';

import Axios from 'axios';

import {holidayApiUrl, newsApiUrl} from './Utilities';

export const getHolidays = async (setHolidays, setLoading) => {
  await Axios.get(holidayApiUrl)
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
