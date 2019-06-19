import React from 'react';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import Header from '~/components/Header';
import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    <Header />
    <Routes />
  </Provider>
);

export default App;
