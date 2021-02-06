import React from 'react';

import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const IconComponent = ({name, size, color}) => (
  <Icon name={name} size={moderateScale(size)} color={color} />
);

export default IconComponent;
