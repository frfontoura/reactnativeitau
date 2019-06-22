import React from 'react';
import {
  View, StyleSheet, Text, Alert, ScrollView,
} from 'react-native';

import Card from '~/components/Card';
import Info from '~/components/Info';
import Shortcut from '~/components/ShortcutCard';

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

    <Text style={styles.shortcutText}>Atalhos</Text>

    <View style={styles.shortcutsWrapper}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.shortcuts}>
        <Shortcut text="pagar conta" icon="barcode" onPress={() => Alert.alert('Mensagem', 'Pagar Conta')} />
        <Shortcut text="fazer transferências" icon="exchange-alt" onPress={() => Alert.alert('Mensagem', 'Fazer Transferências')} />
        <Shortcut text="meus comprovantes" icon="receipt" onPress={() => Alert.alert('Mensagem', 'Meus Comprovantes')} />
        <Shortcut text="investimentos" icon="dollar-sign" onPress={() => Alert.alert('Mensagem', 'Investimentos')} />
        <Shortcut text="personalizar" icon="plus" onPress={() => Alert.alert('Mensagem', 'Personalizar')} />
      </ScrollView>
    </View>

  </View>
);

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    padding: 10,
  },
  shortcutsWrapper: {
    height: 90,
    marginTop: 5,
  },
  shortcuts: {
    marginTop: 5,
    marginBottom: 5,
  },
  shortcutText: {
    marginTop: 5,
    fontWeight: 'bold',
    color: '#555',
  },
});
