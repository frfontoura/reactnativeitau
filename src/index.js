import React from 'react';
import '~/config/ReactotronConfig';
import { Provider } from 'react-redux';
import store from './store';
import { YellowBox } from 'react-native';

import Header from '~/components/Header';
import Routes from '~/routes';

YellowBox.ignoreWarnings(['ViewPagerAndroid']);

const App = () => (
  <Provider store={store}>
    <Header />
    <Routes />
  </Provider>
);

export default App;
