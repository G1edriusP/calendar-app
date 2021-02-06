import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {ITEM_HEIGHT, ITEM_WIDTH} from '../../../common/Constants';

import * as Colors from '../../../common/Colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    backgroundColor: Colors.YELLOW_CRAYOLA,
    marginVertical: moderateScale(8),
    marginHorizontal: moderateScale(8),
    borderRadius: moderateScale(24),
  },

  cardTitleContainer: {
    padding: moderateScale(8),
    width: ITEM_WIDTH,
    flex: 1,
    justifyContent: 'space-between',
  },

  cardTitle: {
    color: Colors.JET,
    fontSize: moderateScale(20),
    fontFamily: 'sans-serif',
    margin: moderateScale(15),
  },

  cardSubTitle: {
    color: Colors.JET,
    fontFamily: 'sans-serif-light',
  },

  dateFormat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(16),
  },

  cardImage: {
    resizeMode: 'stretch',
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT * 0.5,
    borderRadius: moderateScale(16),
  },
});

export default Styles;
