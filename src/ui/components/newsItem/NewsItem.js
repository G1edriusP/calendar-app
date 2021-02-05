import React from 'react';

// Components
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

// Styles
import Styles from './styles';

const NewsItem = ({item}) => {
  const newsItem = item.item;

  return (
    <TouchableOpacity
      style={Styles.container}
      onPress={async () => {
        const supported = await Linking.canOpenURL(newsItem.url);
        if (supported) {
          await Linking.openURL(newsItem.url);
        } else {
          Alert.alert('Klaida!', 'Negalima atidaryti pasirinkto straipsnio.');
        }
      }}>
      <View>
        <Text>{newsItem.title}</Text>
        <Text>{newsItem.publishedAt}</Text>
        <Image
          style={{width: 250, height: 150, resizeMode: 'cover'}}
          source={{
            uri: newsItem.imageUrl,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NewsItem;
