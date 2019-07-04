import React from 'react';
import {
  View, Text, StyleSheet, Alert, ScrollView,
} from 'react-native';

import Info from '~/components/Info';
import IconCard from '~/components/IconCard';
import Banner from '~/components/Banner';

export default function Servicos() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.cardContainer}>
        <Text style={styles.headerText1}>nossos serviços</Text>
        <Text style={styles.headerText2}>disponíveis para você</Text>

        <Info
          text="Crédito pessoal com até 90 dias para começar a pagar."
          icon="dollar-sign"
          onPress={() => Alert.alert('Mensagem', 'Você tem R$ 100000,00 disponíveis')}
        />

        <View style={styles.cardContent}>
          <IconCard text="cartões" icon="credit-card" onPress={() => Alert.alert('Mensagem', 'Cartões')} />
          <IconCard text="meus comprovantes" icon="receipt" onPress={() => Alert.alert('Mensagem', 'meus comprovantes')} />
          <IconCard text="investimentos" icon="signal" onPress={() => Alert.alert('Mensagem', 'investimentos')} />
          <IconCard text="portabilidade de salário" icon="file-invoice-dollar" onPress={() => Alert.alert('Mensagem', 'portabilidade de salário')} />
          <IconCard text="cambio" icon="sync" onPress={() => Alert.alert('Mensagem', 'cambio')} />
          <IconCard text="meu pacote" icon="copy" onPress={() => Alert.alert('Mensagem', 'meu pacote')} />
          <IconCard text="teclado itaú" icon="keyboard" onPress={() => Alert.alert('Mensagem', 'teclado itaú')} />
          <IconCard text="plano de vantagens" icon="star" onPress={() => Alert.alert('Mensagem', 'plano de vantagens')} />
          <IconCard text="segurança" icon="lock" onPress={() => Alert.alert('Mensagem', 'segurança')} />
          <IconCard text="atendimento" icon="comment-dots" onPress={() => Alert.alert('Mensagem', 'atendimento')} />
        </View>

        <Banner image={require('~/assets/images/banner.png')} linkText="saiba mais" onPress={() => Alert.alert('Mensagem', 'mobilidade urbana...')} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    padding: 10,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 5,
  },
  headerText1: {
    color: '#ff7300',
    fontSize: 26,
  },
  headerText2: {
    fontSize: 26,
    marginBottom: 10,
  },
});
