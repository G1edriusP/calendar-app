import React from 'react';
import {Text, View, Button} from 'react-native';

import Styles from './styles';

const Day = ({navigation}) => (
  <View styles={Styles.container}>
    <Text>Day</Text>
    <Button
      title="Kalendorius"
      onPress={() => navigation.navigate('Calendar')}
    />
  </View>
);

export default Day;
