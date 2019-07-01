import React from 'react';
import {
  View, Text, StyleSheet, Alert, ScrollView,
} from 'react-native';
import { format } from 'date-fns';
import locale from 'date-fns/locale/pt';

import Info from '~/components/Info';
import IconCard from '~/components/IconCard';
import Card from '~/components/Card';

export default function Transacoes() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.cardContainer}>
        <Text style={styles.dateText}>{format(new Date(), '[hoje, dia] DD', { locale })}</Text>
        <Text style={styles.headerText}>o que deseja fazer?</Text>

        <Info
          text="Crédito pessoal com até 90 dias para começar a pagar."
          icon="dollar-sign"
          onPress={() => Alert.alert('Mensagem', 'Você tem R$ 100000,00 disponíveis')}
        />


        <View style={styles.cardContent}>
          <IconCard text="pagar conta" icon="barcode" onPress={() => Alert.alert('Mensagem', 'Pagar Conta')} />
          <IconCard text="fazer transferência" icon="exchange-alt" onPress={() => Alert.alert('Mensagem', 'fazer transferência')} />
          <IconCard text="recarregar celular" icon="mobile-alt" onPress={() => Alert.alert('Mensagem', 'recarregar celular')} />
          <IconCard text="DDA - boleto eletrônico" icon="file-invoice-dollar" onPress={() => Alert.alert('Mensagem', 'DDA - boleto eletrônico')} />
          <IconCard text="detran.sp" icon="car" onPress={() => Alert.alert('Mensagem', 'detran.sp')} />
          <IconCard text="pagamentos automáticos" icon="hand-holding-usd" onPress={() => Alert.alert('Mensagem', 'pagamentos automáticos')} />
        </View>

        <Card
          text="próximas transações"
          actions={[{ text: 'ver todas', onPress: () => Alert.alert('Mensagem', 'Próximas transações') }]}
        >
          <Text>próximas transações...</Text>
        </Card>
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
  dateText: {
    color: '#ff7300',
    fontSize: 26,
  },
  headerText: {
    fontSize: 26,
    marginBottom: 10,
  },
});
