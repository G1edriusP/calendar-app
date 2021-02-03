import React from 'react';

import {Text} from 'react-native';

// Utilities
import * as Constants from './Constants';

const getMonthName = (monthIndex) => {
  return Constants.monthNames[monthIndex];
};

const checkYear = (year) => {
  return new Date().getYear() === year;
};

export const renderCustomHeader = (date) => {
  const monthName = getMonthName(date.getMonth());
  const renderYear = checkYear(date.getYear());

  return renderYear ? (
    <Text>{monthName}</Text>
  ) : (
    <Text>
      {monthName}, {date.getFullYear()}
    </Text>
  );
};
