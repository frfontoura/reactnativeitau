import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Card from '~/components/Card';

const Main = props => (
  <View style={styles.container}>
    <Card
      text="saldo em conta corrente"
      actions={[{ text: 'ver extrato', onPress: () => props.navigation.navigate('Extrato') }]}
    >
      <Text>Detalhes</Text>
    </Card>
  </View>
);

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    padding: 10,
  },
});
