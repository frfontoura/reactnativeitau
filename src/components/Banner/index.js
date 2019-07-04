import React, { useState } from 'react';
import {
  View, Text, Dimensions, StyleSheet, Image, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Banner({ image, linkText, onPress }) {
  const [isVisible, setVisible] = useState(true);

  return isVisible ? (
    <View style={styles.container}>
      <TouchableOpacity style={styles.close} onPress={() => setVisible(false)}>
        <Icon name="times" size={12} color="#ff7300" />
      </TouchableOpacity>
      <Image source={image} resizeMode="contain" style={styles.image} />
      <TouchableOpacity style={styles.link} onPress={onPress}>
        <Text style={styles.linkText}>{linkText}</Text>
        <Icon name="chevron-right" size={12} color="#59f" />
      </TouchableOpacity>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: Dimensions.get('window').width * 0.75,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
  },
  link: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
  },
  linkText: {
    color: '#59f',
    fontWeight: 'bold',
    marginRight: 5,
  },
  close: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
});
