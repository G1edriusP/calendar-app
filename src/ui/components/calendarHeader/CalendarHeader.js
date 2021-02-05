import React from 'react';

// Components
import {Text} from 'react-native';

// Utilities
import {getMonthName, checkYear} from '../../../common/Utilities';

// Styles
import Styles from './styles';

const CalendarHeader = ({date}) => {
  const monthName = getMonthName(date.getMonth());
  const renderYear = checkYear(date.getYear());

  return renderYear ? (
    <Text style={Styles.headerText}>{monthName}</Text>
  ) : (
    <Text style={Styles.headerText}>
      {monthName}, {date.getFullYear()}
    </Text>
  );
};

export default CalendarHeader;
