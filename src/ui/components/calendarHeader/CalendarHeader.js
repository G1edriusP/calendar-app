import React from 'react';

// Components
import {Text} from 'react-native';
import {useEffect} from 'react/cjs/react.development';

// Api
import {getData} from '../../../data/api/Calls';

// Utilities
import {getMonthName, checkYear} from '../../../common/Utilities';
import {errorMessageHolidays, YEAR} from '../../../common/Constants';

// Styles
import Styles from './styles';

const CalendarHeader = ({
  date,
  years,
  setYears,
  setHolidays,
  setLoading,
  baseHolidaysUrl,
}) => {
  const monthName = getMonthName(date.getMonth());
  const renderYear = checkYear(date.getFullYear());

  const checkedYear = years.find((item) => item === date.getFullYear());

  useEffect(() => {
    if (date.getFullYear() != YEAR && checkedYear === undefined) {
      getData(baseHolidaysUrl, setHolidays, setLoading, errorMessageHolidays);
      setYears((oldYears) => [...oldYears, date.getFullYear()]);
    }
  }, [date]);

  return renderYear ? (
    <Text style={Styles.headerText}>
      {monthName}, {date.getFullYear()}
    </Text>
  ) : (
    <Text style={Styles.headerText}>{monthName}</Text>
  );
};

export default CalendarHeader;
