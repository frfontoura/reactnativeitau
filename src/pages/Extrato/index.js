import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Extrato() {
  return (
    <View style={styles.container}>
      <Text>Extrato</Text>
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
