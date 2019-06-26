import React, { useState } from 'react';
import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MenuRoutes = {
  Tudo: {
    name: 'Tudo',
    screen: () => <View><Text>Tudo</Text></View>,
    navigationOptions: {
      title: 'tudo',
    },
  },
  Entrada: {
    name: 'entrada',
    screen: () => <View><Text>entrada</Text></View>,
    navigationOptions: {
      title: 'entrada',
    },
  },
  Saida: {
    name: 'saida',
    screen: () => <View><Text>saida</Text></View>,
    navigationOptions: {
      title: 'saída',
    },
  },
  Futuro: {
    name: 'futuro',
    screen: () => <View><Text>futuro</Text></View>,
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
  },
};

const Routes = createAppContainer(createMaterialTopTabNavigator(MenuRoutes, MenuConfig));

export default function Extrato() {
  const [showDetail, setShowDetail] = useState(false);

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
