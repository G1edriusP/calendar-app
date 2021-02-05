import React, {useState, useEffect} from 'react';

// Components
import {View, StatusBar, FlatList, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';

// Custom components
import CalendarHeader from '../../components/calendarHeader';

// API
import {getHolidays} from '../../../data/api/Calls';

// Utilities
import {getFullDate, formatDates, onDayPress} from '../../../common/Utilities';
import * as Colors from '../../../common/Colors';

// Styles
import Styles from './styles';
import {calendarTheme} from '../../../common/Themes';

const CalendarScreen = ({navigation}) => {
  const dateNow = getFullDate();

  const [holidays, setHolidays] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [dates, setDates] = useState({});

  useEffect(() => {
    //getHolidays(setHolidays, setLoading);
  }, []);

  useEffect(() => {
    formatDates(holidays, setDates);
  }, [isLoading]);

  if (isLoading) {
    // TODO: Activity indicator
    console.log('Laukiu');
  }

  return (
    <View style={Styles.container}>
      <StatusBar hidden />
      <Calendar
        theme={calendarTheme}
        firstDay={1}
        hideExtraDays
        onDayPress={(date) => {
          onDayPress(date, holidays, navigation);
        }}
        markedDates={{
          ...dates,
          [dateNow]: {selected: true, selectedColor: Colors.OCEAN_GREEN},
        }}
        renderHeader={(date) => <CalendarHeader date={date} />}
      />
    </View>
  );
};
export default CalendarScreen;
