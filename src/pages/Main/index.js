import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    padding: 10,
  },
});

const Main = () => (
  <View style={styles.container}>
    <Text>Inicio</Text>
  </View>
);

export default Main;
