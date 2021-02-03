import React from 'react';
import {View, Text} from 'react-native';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Containers
import Calendar from './ui/containers/calendar';
import Day from './ui/containers/day';

// Utilities
import {LocaleConfig} from 'react-native-calendars';
import * as Constants from './common/Constants';

LocaleConfig.locales['lt'] = {
  monthNames: Constants.monthNames,
  monthNamesShort: Constants.shortMonthNames,
  dayNames: Constants.dayNames,
  dayNamesShort: Constants.shortDayNames,
};

LocaleConfig.defaultLocale = 'lt';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Day" component={Day} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
