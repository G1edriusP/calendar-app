import {Alert} from 'react-native';

import Axios from 'axios';

export const getData = async (baseUrl, setData, setLoading, errorMessage) => {
  await Axios.get(baseUrl)
    .then((value) => {
      setData(value.data);
      setLoading(false);
    })
    .catch(() => {
      Alert.alert('Klaida!', errorMessage);
    });
};
