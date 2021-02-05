import React from 'react';

import {Text} from 'react-native';

// Utilities
import * as Constants from './Constants';

export const getMonthName = (monthIndex) => {
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

export const getFullDate = () => {
  let dateNow = new Date();

  const yyyy = dateNow.getFullYear();
  const mm = String(dateNow.getMonth() + 1).padStart(2, '0');
  const dd = String(dateNow.getDate()).padStart(2, '0');

  return String(`${yyyy}-${mm}-${dd}`);
};

export const getMonthNameWithLimb = (monthIndex) => {
  return Constants.monthNamesWithLimb[monthIndex];
};
