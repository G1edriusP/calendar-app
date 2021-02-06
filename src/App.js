import React from 'react';

import SplashScreen from 'react-native-splash-screen';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Containers
import Calendar from './ui/containers/calendar';
import Day from './ui/containers/day';

// Utilities
import {LocaleConfig} from 'react-native-calendars';
import * as Constants from './common/Constants';
import {useEffect} from 'react/cjs/react.development';

LocaleConfig.locales['lt'] = {
  monthNames: Constants.monthNames,
  monthNamesShort: Constants.shortMonthNames,
  dayNames: Constants.dayNames,
  dayNamesShort: Constants.shortDayNames,
};

LocaleConfig.defaultLocale = 'lt';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 50);
  });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Day" component={Day} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
