import React from 'react';
import {Provider} from 'mobx-react';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';

import {AboutScreen, QuotesScreen} from './screens';
import store from './store';

const TabNavigator = createBottomTabNavigator({
  Quotes: QuotesScreen,
  About: AboutScreen,
});

const AppContainer = createAppContainer(TabNavigator);

export default function () {
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  )
}