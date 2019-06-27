import React, { useState } from 'react';
import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Timeline from '~/components/Timeline';

export default function Extrato() {
  const [showDetail, setShowDetail] = useState(false);

  const MenuRoutes = {
    Tudo: {
      name: 'Tudo',
      screen: () => <Timeline />,
      navigationOptions: {
        title: 'tudo',
      },
    },
    Entrada: {
      name: 'entrada',
      screen: () => <Timeline />,
      navigationOptions: {
        title: 'entrada',
      },
    },
    Saida: {
      name: 'saida',
      screen: () => <Timeline />,
      navigationOptions: {
        title: 'saída',
      },
    },
    Futuro: {
      name: 'futuro',
      screen: () => <Timeline />,
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
