import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import Styles from './styles';

const NewsItem = ({item}) => {
  const newsItem = item.item;

  return (
    <TouchableOpacity
      style={Styles.container}
      onPress={() => console.log('test')}>
      <View>
        <Text>{newsItem.title}</Text>
        <Text>{newsItem.publishedAt}</Text>
        <Image
          style={{width: 200, height: 175, resizeMode: 'cover'}}
          source={{
            uri: newsItem.imageUrl,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NewsItem;
