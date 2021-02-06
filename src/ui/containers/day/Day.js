import React, {useState, useEffect} from 'react';

// Components
import {Text, View, StatusBar} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

// Custom components
import NewsItem from '../../components/newsItem/NewsItem';
import PacmanIndicator from '../../components/pacmanIndicator';
import SadIcon from '../../components/icon';

// API
import {getData} from '../../../data/api/Calls';
import {newsApiUrl} from '../../../data/api/Utilities';

// Utilities
import {getMonthNameWithLimb} from '../../../common/Utilities';
import {
  SLIDER_WIDTH,
  ITEM_WIDTH,
  errorMessageNews,
} from '../../../common/Constants';
import * as Colors from '../../../common/Colors';

// Styles
import Styles from './styles';

const Day = ({route}) => {
  const {date, holiday, isHoliday} = route.params;

  const monthIndex = date['month'];
  const monthName = getMonthNameWithLimb(monthIndex - 1);

  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    getData(
      newsApiUrl(date['dateString']),
      setNews,
      setLoading,
      errorMessageNews,
    );
  }, []);

  return (
    <View style={Styles.container}>
      <StatusBar hidden />

      <View style={Styles.textContainer}>
        <Text style={Styles.title}>
          {monthName} {date['day']}, {date['year']}
        </Text>

        {isHoliday ? (
          <Text style={Styles.subtitle}>{holiday['localName']}</Text>
        ) : null}
      </View>

      {isLoading ? (
        <PacmanIndicator color={Colors.SNOW} />
      ) : news.length === 0 ? (
        <View style={Styles.iconContainer}>
          <SadIcon name="emoticon-sad" size={100} color={Colors.SNOW} />
          <Text style={Styles.iconText}>Naujienų nėra.</Text>
        </View>
      ) : (
        <Carousel
          data={news}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <NewsItem item={item} />}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          lockScrollWhileSnapping
          shouldOptimizeUpdates
          onSnapToItem={(index) => setActiveSlideIndex(index)}
        />
      )}

      <Pagination
        dotsLength={news.length}
        activeDotIndex={activeSlideIndex}
        dotStyle={Styles.dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default Day;
