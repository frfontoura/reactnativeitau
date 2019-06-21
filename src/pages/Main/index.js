import React from 'react';
import {
  View, StyleSheet, Text, Alert,
} from 'react-native';

import Card from '~/components/Card';
import Info from '~/components/Info';

const Main = props => (
  <View style={styles.container}>
    <Info
      text="Crédito pessoal disponível na sua conta. Toque aqui."
      icon="dollar-sign"
      onPress={() => Alert.alert('Mensagem', 'Você tem R$ 100000,00 disponíveis')}
    />
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
