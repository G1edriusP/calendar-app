import React from 'react';
import {Text, View, Button} from 'react-native';

import Styles from './styles';

const Calendar = ({navigation}) => (
  <View styles={Styles.container}>
    <Text>Calendar</Text>
    <Button title="Diena" onPress={() => navigation.navigate('Day')} />
  </View>
);

export default Calendar;
