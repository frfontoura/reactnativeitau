import React, { useState } from 'react';
import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { addDays, isAfter } from 'date-fns';

import Timeline from '~/components/Timeline';

const data = [
  {
    id: Math.floor(Math.random() * (1000 - 1)) + 1,
    date: addDays(new Date(), 1),
    values: [
      {
        id: Math.floor(Math.random() * (1000 - 1)) + 1,
        type: 'ENTRADA',
        value: 123.11,
        text: 'futuro',
      },
    ],
  },
  {
    id: Math.floor(Math.random() * (1000 - 1)) + 1,
    date: new Date(2019, 5, 28),
    values: [
      {
        id: Math.floor(Math.random() * (1000 - 1)) + 1,
        type: 'ENTRADA',
        value: 123.11,
        text: 'bla bla bla',
      },
      {
        id: Math.floor(Math.random() * (1000 - 1)) + 1,
        type: 'SAIDA',
        value: 123.11,
        text: 'bla bla bla',
      },
      {
        id: Math.floor(Math.random() * (1000 - 1)) + 1,
        type: 'SAIDA',
        value: 123.11,
        text: 'bla bla bla',
      },
    ],
  },
  {
    id: Math.floor(Math.random() * (1000 - 1)) + 1,
    date: new Date(2019, 5, 27),
    values: [
      {
        id: Math.floor(Math.random() * (1000 - 1)) + 1,
        type: 'ENTRADA',
        value: 123.11,
        text: 'bla bla bla',
      },
      {
        id: Math.floor(Math.random() * (1000 - 1)) + 1,
        type: 'SAIDA',
        value: 123.11,
        text: 'bla bla bla',
      },
      {
        id: Math.floor(Math.random() * (1000 - 1)) + 1,
        type: 'SAIDA',
        value: 123.11,
        text: 'bla bla bla',
      },
    ],
  },
  {
    id: Math.floor(Math.random() * (1000 - 1)) + 1,
    date: new Date(2019, 5, 26),
    values: [
      {
        id: Math.floor(Math.random() * (1000 - 1)) + 1,
        type: 'ENTRADA',
        value: 123.11,
        text: 'bla bla bla',
      },
      {
        id: Math.floor(Math.random() * (1000 - 1)) + 1,
        type: 'SAIDA',
        value: 123.11,
        text: 'bla bla bla',
      },
      {
        id: Math.floor(Math.random() * (1000 - 1)) + 1,
        type: 'SAIDA',
        value: 123.11,
        text: 'bla bla bla',
      },
    ],
  },
];

export default function Extrato() {
  const [showDetail, setShowDetail] = useState(false);

  function filterByType(type) {
    return data.map(d => ({
      ...d, values: d.values.filter(v => v.type === type),
    })).filter(d => d.values.length > 0);
  }

  function filterFuture() {
    return data.filter(d => isAfter(d.date, new Date()));
  }

  const MenuRoutes = {
    Tudo: {
      name: 'Tudo',
      screen: () => <Timeline data={data} />,
      navigationOptions: {
        title: 'tudo',
      },
    },
    Entrada: {
      name: 'entrada',
      screen: () => (
        <Timeline data={filterByType('ENTRADA')} />
      ),
      navigationOptions: {
        title: 'entrada',
      },
    },
    Saida: {
      name: 'saida',
      screen: () => <Timeline data={filterByType('SAIDA')} />,
      navigationOptions: {
        title: 'saída',
      },
    },
    Futuro: {
      name: 'futuro',
      screen: () => <Timeline data={filterFuture()} future />,
      navigationOptions: {
        title: 'futuro',
      },
    },
  };

  const MenuConfig = {
    initialRouteName: 'Tudo',
    tabBarOptions: {
      activeTintColor: '#ff7300',
      inactiveTintColor: '#555',
      style: {
        backgroundColor: '#fff',
      },
      indicatorStyle: {
        backgroundColor: '#ff7300',
      },
    },
  };

  const Routes = createAppContainer(createMaterialTopTabNavigator(MenuRoutes, MenuConfig));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.balanceTitle}>saldo disponível</Text>
        <View style={styles.balance}>
          <Text style={styles.balanceValue}>R$ 123,99</Text>
          <TouchableOpacity onPress={() => setShowDetail(!showDetail)}>
            <Icon name="chevron-down" size={18} color="#ddd" />
          </TouchableOpacity>
        </View>
      </View>

      {showDetail && (
      <View style={styles.detail}>
        <Text>Detalhes...</Text>
      </View>
      )}

      <Routes />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
    borderTopWidth: 0.5,
    borderTopColor: '#ddd',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    padding: 10,
  },
  balance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceTitle: {
    fontWeight: 'bold',
  },
  balanceValue: {
    color: '#080',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  detail: {
    padding: 10,
    backgroundColor: '#fff',
    height: 200,
  },
});
