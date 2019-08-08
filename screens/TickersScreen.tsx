import React from 'react';
import {StyleSheet, View} from 'react-native';
import {inject, observer} from 'mobx-react';
import {Header} from 'react-native-elements';

import {TickersTable} from '../components';

function TickersScreen({store}) {
  return (
    <View style={styles.container}>
      <Header centerComponent={{text: 'Tickers', style: {color: '#fff'}}}/>
      <TickersTable isLoading={store.isLoading} tickers={store.tickers}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  flatview: {
    alignItems: 'flex-start',
    paddingTop: 30,
    borderRadius: 2,
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row'
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  email: {
    color: 'red'
  }
});

export default inject('store')(observer(TickersScreen));