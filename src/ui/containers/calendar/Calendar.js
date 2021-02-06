import React, {useState, useEffect} from 'react';

// Components
import {View, StatusBar} from 'react-native';
import {Calendar} from 'react-native-calendars';

// Custom components
import CalendarHeader from '../../components/calendarHeader';
import PacmanIndicator from '../../components/pacmanIndicator';

// API
import {getData} from '../../../data/api/Calls';
import {holidayApiUrl} from '../../../data/api/Utilities';

// Utilities
import {
  getFullDate,
  formatDates,
  onDayPress,
  checkInternet,
} from '../../../common/Utilities';
import * as Colors from '../../../common/Colors';
import {
  YEAR,
  COUNTRY_CODE,
  errorMessageHolidays,
} from '../../../common/Constants';

// Styles
import Styles from './styles';
import {calendarTheme} from '../../../common/Themes';

const CalendarScreen = ({navigation}) => {
  const dateNow = getFullDate();

  const [holidays, setHolidays] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [isOnline, setStatus] = useState(false);

  const [dates, setDates] = useState({});

  useEffect(() => {
    const unsubscribe = checkInternet(setStatus);

    return () => {
      unsubscribe();
    };
  }, [isOnline]);

  useEffect(() => {
    if (isOnline) {
      getData(
        holidayApiUrl(YEAR, COUNTRY_CODE),
        setHolidays,
        setLoading,
        errorMessageHolidays,
      );
    }
  }, [isOnline]);

  useEffect(() => {
    formatDates(holidays, setDates);
  }, [isLoading]);

  if (isLoading) {
    return <PacmanIndicator color={Colors.YELLOW_CRAYOLA} />;
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
