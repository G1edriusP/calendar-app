import React, {useState, useEffect} from 'react';

// Components
import {Text, View, Button, FlatList, ScrollView} from 'react-native';
import NewsItem from '../../components/newsItem/NewsItem';

// API
import {getNews} from '../../../data/api/Calls';

// Utilities
import {getMonthNameWithLimb} from '../../../common/Utilities';

import Styles from './styles';

const Day = ({route, navigation}) => {
  const {date, holiday, isHoliday} = route.params;

  const monthIndex = date['month'];
  const monthName = getMonthNameWithLimb(monthIndex - 1);

  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getNews(date['dateString'], setNews, setLoading);
  }, []);

  if (isLoading) {
    // TODO: Activity indicator
    console.log('Laukiu2');
  }

  return (
    <View style={Styles.container}>
      <Text>
        {monthName} {date['day']}, {date['year']}
      </Text>

      {isHoliday ? <Text>{holiday['localName']}</Text> : null}

      <FlatList
        style={{margin: 16}}
        data={news}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <NewsItem item={item} />}
      />
    </View>
  );
};

export default Day;
