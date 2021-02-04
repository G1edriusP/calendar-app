import {Alert} from 'react-native';

import Axios from 'axios';

import {holidayApiUrl} from './Utilities';

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
