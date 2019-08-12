import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'mobx-react';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';

import {AboutScreen, TickersScreen} from './screens';
import store from './store';
import colors from './colors';

const TabNavigator = createBottomTabNavigator({
  About: AboutScreen,
  Tickers: TickersScreen,
}, {
  tabBarOptions: {
    style: {
      borderTopColor: colors.bgDark
    },
    tabStyle: {
      padding: 0,
      justifyContent: 'center',
      backgroundColor: colors.bgDark2
    },
    showLabel: true,
    showIcon: false,
    activeTintColor: '#ccc'
  }
});

const AppContainer = createAppContainer(TabNavigator);

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    </>
  )
}