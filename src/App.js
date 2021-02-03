import React from 'react';
import {View, Text} from 'react-native';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Containers
import Calendar from './ui/containers/calendar';
import Day from './ui/containers/day';

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
