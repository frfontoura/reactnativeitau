import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Ajuda() {
  return (
    <View style={styles.container}>
      <Text>Ajuda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    padding: 10,
  },
});
