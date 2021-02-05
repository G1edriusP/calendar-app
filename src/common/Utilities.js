import * as Constants from './Constants';

export const getMonthName = (monthIndex) => {
  return Constants.monthNames[monthIndex];
};

export const checkYear = (year) => {
  return new Date().getYear() === year;
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

export const formatDates = (holidays, setDates) => {
  holidays.map((item) => {
    const newDate = {
      [item['date']]: {selected: true, selectedColor: '#F18077'},
    };
    setDates((oldDates) => ({...oldDates, ...newDate}));
  });
};

export const onDayPress = (date, holidays, navigation) => {
  const holiday = holidays.find((item) => item['date'] === date['dateString']);

  if (holiday != undefined) {
    navigation.navigate('Day', {
      date: date,
      holiday: holiday,
      isHoliday: true,
    });
  } else {
    navigation.navigate('Day', {date: date, isHoliday: false});
  }
};
