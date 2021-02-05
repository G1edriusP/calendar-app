import React from 'react';
import {Text, View, Button} from 'react-native';

// Utilities
import {getMonthNameWithLimb} from '../../../common/Utilities';

import Styles from './styles';

const Day = ({route, navigation}) => {
  const {date, holiday, isHoliday} = route.params;

  const monthIndex = date['month'];
  const monthName = getMonthNameWithLimb(monthIndex - 1);

  return (
    <View styles={Styles.container}>
      <Text>
        {monthName} {date['day']}, {date['year']}
      </Text>

      {isHoliday ? <Text>{holiday['localName']}</Text> : null}

      <Button title="Kalendorius" onPress={() => console.log(monthName)} />
    </View>
  );
};

export default Day;
