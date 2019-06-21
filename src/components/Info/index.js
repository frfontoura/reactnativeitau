import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Info({ text, onPress, icon }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.icon}>
        <Icon name={icon} size={18} color="#fff" />
      </View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ff7300',
    height: 60,
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    alignItems: 'center',
  },
  text: {
    flex: 1,
    marginLeft: 10,
    color: '#fff',
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },
  icon: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 14,
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
