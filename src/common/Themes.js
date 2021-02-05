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
      paddingLeft: 10,
      paddingRight: 10,
      marginVertical: 24,
      alignItems: 'center',
    },
    headerContainer: {
      flexDirection: 'row',
    },
    arrowImage: {
      tintColor: Colors.SNOW,
    },
    dayHeader: {
      marginBottom: 8,
      width: 32,
      textAlign: 'center',
      fontSize: 14,
      fontWeight: '100',
      color: Colors.SNOW,
    },
  },
  'stylesheet.day.basic': {
    base: {
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 12,
      paddingHorizontal: 5,
      borderColor: Colors.JET,
      borderBottomWidth: 0.3,
      borderRadius: 16,
      height: 48,
      width: 48,
    },
    text: {
      fontSize: 16,
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
