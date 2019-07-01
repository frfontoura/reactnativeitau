import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet, View, Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function IconCard({ text, icon, onPress }) {
  return (

    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={icon} size={32} color="#ff7300" />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  container: {
    width: (Dimensions.get('window').width * 0.5) - 15,
    borderRadius: 4,
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 15,
    height: 140,
    padding: 20,
  },
  text: {
    color: '#ff7300',
    fontSize: 16,
    textAlign: 'center',
  },
});
