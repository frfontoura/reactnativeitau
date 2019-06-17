import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Main from '~/pages/Main';
import Extrato from '~/pages/Extrato';
import Transacoes from '~/pages/Transacoes';
import Servicos from '~/pages/Servicos';
import Ajuda from '~/pages/Ajuda';

const MenuRoutes = {
  Main: {
    name: 'Inicio',
    screen: Main,
    navigationOptions: {
      title: 'início',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={18} color={tintColor} />,
    },
  },
  Extrato: {
    name: 'Extrato',
    screen: Extrato,
    navigationOptions: {
      title: 'extrato',
      tabBarIcon: ({ tintColor }) => <Icon name="bars" size={18} color={tintColor} />,
    },
  },
  Transacoes: {
    name: 'Transacoes',
    screen: Transacoes,
    navigationOptions: {
      title: 'transações',
      tabBarIcon: ({ tintColor }) => <Icon name="dollar-sign" size={18} color={tintColor} />,
    },
  },
  Servicos: {
    name: 'Servicos',
    screen: Servicos,
    navigationOptions: {
      title: 'servicos',
      tabBarIcon: ({ tintColor }) => <Icon name="buromobelexperte" size={18} color={tintColor} />,
    },
  },
  Ajuda: {
    name: 'Ajuda',
    screen: Ajuda,
    navigationOptions: {
      title: 'ajuda',
      tabBarIcon: ({ tintColor }) => <Icon name="question-circle" size={18} color={tintColor} />,
    },
  },
};

const MenuConfig = {
  initialRouteName: 'Main',
  tabBarOptions: {
    showLabel: true,
    activeBackgroundColor: '#fff',
    inactiveBackgroundColor: '#ff7300',
    activeTintColor: '#ff7300',
    inactiveTintColor: '#fff',
  },
};

const Routes = createAppContainer(createBottomTabNavigator(MenuRoutes, MenuConfig));

export default Routes;
