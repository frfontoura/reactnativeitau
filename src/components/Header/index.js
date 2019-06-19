import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountInfo: {
    flexDirection: 'row',
    width: 140,
    justifyContent: 'space-between',
  },
  others: {
    flexDirection: 'row',
    padding: 10,
    width: 70,
    justifyContent: 'space-between',
  },
  main: {
    flex: 1,
    padding: 10,
  },
  imgContainer: {
    padding: 10,
  },
  img: {
    backgroundColor: '#eee',
    color: '#ff7300',
    borderRadius: 15,
    width: 30,
    height: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  greeting: {
    color: '#ff7300',
  },
});

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Text style={styles.img}>FF</Text>
      </View>

      <View style={styles.main}>
        <View>
          <Text style={styles.greeting}>olá, Fernando</Text>
        </View>
        <View style={styles.accountInfo}>
          <Text>ag 1234</Text>
          <Text>c/c 56789-0</Text>
        </View>
      </View>

      <View style={styles.others}>
        <Icon name="bell" size={18} color="#ff7300" />
        <Icon name="search" size={18} color="#ff7300" />
      </View>
    </View>
  );
}
