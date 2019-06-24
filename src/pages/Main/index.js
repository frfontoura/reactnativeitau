import React from 'react';
import {
  View, StyleSheet, Text, Alert, ScrollView,
} from 'react-native';

import Card from '~/components/Card';
import CreditCard from '~/components/CreditCard';
import Info from '~/components/Info';
import Shortcut from '~/components/ShortcutCard';

const Main = props => (
  <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
    <View style={styles.content}>
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

      <CreditCard
        text="Itaucard Multiplo 2.0 Mast..."
        final="1234"
        type="cc-mastercard"
        actions={[{ text: 'ver detalhes', onPress: () => Alert.alert('Mensagem', 'Mais detalhes sobre o cartão de crédito') }]}
      >
        <Text>Pagar...</Text>
      </CreditCard>

      <Card
        text="crédito"
        actions={[{ text: 'ver mais', onPress: () => Alert.alert('Mensagem', 'Mais detalhes sobre o crédito') }]}
      >
        <Text>Crédito...</Text>
      </Card>

      <Card
        text="meus investimentos"
        actions={[{ text: 'ver detalhes', onPress: () => Alert.alert('Mensagem', 'Mais detalhes sobre meus investimentos') }]}
      >
        <Text>Meus investimentos...</Text>
      </Card>
    </View>
  </ScrollView>
);

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    padding: 10,
  },
  content: {
    flex: 1,
    paddingBottom: 20,
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
