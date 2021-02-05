import React, {useState, useEffect} from 'react';

// Components
import {View, Button} from 'react-native';
import {Calendar} from 'react-native-calendars';

// API
import {getHolidays} from '../../../data/api/Calls';

// Utilities
import {renderCustomHeader, getFullDate} from '../../../common/Utilities';

// Styles
import Styles from './styles';

const CalendarScreen = ({navigation}) => {
  const dateNow = getFullDate();

  const [holidays, setHolidays] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [dates, setDates] = useState({});

  useEffect(() => {
    getHolidays(setHolidays, setLoading);
  }, []);

  useEffect(() => {
    holidays.map((item) => {
      const newDate = {
        [item['date']]: {selected: true, selectedColor: 'red'},
      };
      setDates((oldDates) => ({...oldDates, ...newDate}));
    });
  }, [isLoading]);

  if (isLoading) {
    // TODO: Activity indicator
    console.log('Laukiu');
  }

  return (
    <View styles={Styles.container}>
      <Calendar
        hideExtraDays
        markedDates={{
          ...dates,
          [dateNow]: {selected: true, selectedColor: 'green'},
        }}
        onDayPress={(date) => {
          const holiday = holidays.find(
            (item) => item['date'] === date['dateString'],
          );

          if (holiday != undefined) {
            navigation.navigate('Day', {
              date: date,
              holiday: holiday,
              isHoliday: true,
            });
          } else {
            navigation.navigate('Day', {date: date, isHoliday: false});
          }
        }}
        renderHeader={(date) => renderCustomHeader(date)}
      />
      <Button title="test" onPress={() => console.log()} />
    </View>
  );
};
export default CalendarScreen;
