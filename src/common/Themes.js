import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

import * as Colors from './Colors';

export const calendarTheme = {
  'stylesheet.calendar.main': {
    container: {
      backgroundColor: Colors.JET,
      height: '100%',
    },
    monthView: {
      backgroundColor: Colors.YELLOW_CRAYOLA,
      flex: 1,
    },
  },
  'stylesheet.calendar.header': {
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: moderateScale(10),
      marginVertical: moderateScale(24),
      alignItems: 'center',
    },
    headerContainer: {
      flexDirection: 'row',
      fontFamily: 'sans-serif-light',
    },
    arrowImage: {
      tintColor: Colors.SNOW,
      width: scale(30),
    },
    dayHeader: {
      fontFamily: 'sans-serif',
      marginBottom: moderateScale(8),
      width: scale(32),
      textAlign: 'center',
      fontSize: moderateScale(14),
      fontWeight: '100',
      color: Colors.SNOW,
    },
  },
  'stylesheet.day.basic': {
    base: {
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: moderateScale(12),
      paddingHorizontal: moderateScale(5),
      borderColor: Colors.JET,
      borderBottomWidth: scale(0.3),
      borderRadius: 16,
      height: verticalScale(48),
      width: scale(48),
    },
    text: {
      fontFamily: 'sans-serif-light',
      fontSize: moderateScale(16),
      fontWeight: '100',
      color: Colors.JET,
    },
    selected: {
      borderRadius: 45,
      borderWidth: 0,
      borderColor: Colors.YELLOW_CRAYOLA,
    },
  },
};
