import React from 'react';

// Components
import {Text, View, Button} from 'react-native';
import {Calendar} from 'react-native-calendars';

// Utilities
import {renderCustomHeader} from '../../../common/Utilities';

// Styles
import Styles from './styles';

const CalendarScreen = ({navigation}) => (
  <View styles={Styles.container}>
    <Calendar
      onDayPress={(date) => {
        console.log(date);
      }}
      renderHeader={(date) => renderCustomHeader(date)}
    />
  </View>
);

export default CalendarScreen;
