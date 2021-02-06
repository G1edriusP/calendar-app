import React from 'react';

// Components
import {
  Text,
  View,
  TouchableOpacity,
  Linking,
  Alert,
  Image,
} from 'react-native';

// Utilities
import {formatNewsItemDate} from '../../../common/Utilities';

// Styles
import Styles from './styles';

const NewsItem = ({item}) => {
  const newsItem = item.item;
  const formatedDate = formatNewsItemDate(newsItem.publishedAt, 0, 10);
  const formatedTime = formatNewsItemDate(newsItem.publishedAt, 11, 16);

  return (
    <TouchableOpacity
      style={Styles.container}
      // TODO: iskelti
      onPress={async () => {
        const supported = await Linking.canOpenURL(newsItem.url);
        if (supported) {
          await Linking.openURL(newsItem.url);
        } else {
          Alert.alert('Klaida!', 'Negalima atidaryti pasirinkto straipsnio.');
        }
      }}>
      <View>
        <Image source={{uri: newsItem.imageUrl}} style={Styles.cardImage} />
      </View>
      <View style={Styles.cardTitleContainer}>
        <View>
          <Text style={Styles.cardTitle}>{newsItem.title}</Text>
        </View>
        <View style={Styles.dateFormat}>
          <View>
            <Text>Data:</Text>
            <Text style={Styles.cardSubTitle}>{formatedDate}</Text>
          </View>
          <View>
            <Text>Laikas:</Text>
            <Text style={Styles.cardSubTitle}>{formatedTime}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsItem;
