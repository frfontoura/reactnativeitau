import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    padding: 10,
  },
});

export default function Servicos() {
  return (
    <View style={styles.container}>
      <Text>Serviços</Text>
    </View>
  );
}
