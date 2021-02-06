import React from 'react';

// Components
import {View, StatusBar} from 'react-native';
import {PacmanIndicator} from 'react-native-indicators';
import {moderateScale} from 'react-native-size-matters';

// Styles
import Styles from './styles';

const Indicator = ({color}) => (
  <View style={Styles.container}>
    <StatusBar hidden />
    <PacmanIndicator color={color} size={moderateScale(100)} />
  </View>
);

export default Indicator;
