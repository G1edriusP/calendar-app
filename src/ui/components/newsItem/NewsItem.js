import React from 'react';

// Components
import {Text, View, TouchableOpacity, Image} from 'react-native';

// Utilities
import {formatNewsItemDate, openUrl} from '../../../common/Utilities';

// Styles
import Styles from './styles';

const NewsItem = ({item}) => {
  const newsItem = item.item;
  const formatedDate = formatNewsItemDate(newsItem.publishedAt, 0, 10);
  const formatedTime = formatNewsItemDate(newsItem.publishedAt, 11, 16);

  return (
    <TouchableOpacity
      style={Styles.container}
      onPress={() => openUrl(newsItem.url)}>
      <View>
        <Image source={{uri: newsItem.imageUrl}} style={Styles.cardImage} />
      </View>
      <View style={Styles.cardTitleContainer}>
        <View>
          <Text style={Styles.cardTitle}>{newsItem.title}</Text>
        </View>
        <View style={Styles.dateFormat}>
          <View>
            <Text style={Styles.cardSubTitleLabel}>Data:</Text>
            <Text style={Styles.cardSubTitle}>{formatedDate}</Text>
          </View>
          <View>
            <Text style={Styles.cardSubTitleLabel}>Laikas:</Text>
            <Text style={Styles.cardSubTitle}>{formatedTime}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsItem;
