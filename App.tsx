import React from 'react';
import {Provider} from 'mobx-react';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';

import {AboutScreen, TickersScreen} from './screens';
import store from './store';

const TabNavigator = createBottomTabNavigator({
  Tickers: TickersScreen,
  About: AboutScreen,
});

const AppContainer = createAppContainer(TabNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  )
}