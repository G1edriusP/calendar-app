import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

import * as Colors from '../../../common/Colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.JET,
  },

  textContainer: {
    marginVertical: moderateScale(64),
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'sans-serif',
    fontSize: moderateScale(36),
    color: Colors.SNOW,
  },

  subtitle: {
    fontFamily: 'sans-serif',
    fontSize: moderateScale(18),
    color: Colors.SNOW,
    textAlign: 'center',
  },

  dotStyle: {
    width: scale(5),
    height: verticalScale(5),
    borderRadius: 45,
    backgroundColor: Colors.SNOW,
  },

  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: moderateScale(250),
  },

  iconText: {
    color: Colors.SNOW,
    fontSize: moderateScale(18),
    fontFamily: 'sans-serif',
  },
});

export default Styles;
