import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {inject, observer} from 'mobx-react';
import {Button, Header, ListItem} from 'react-native-elements';

function QuotesScreen({store}) {

  const {tickers} = store;
  const renderItem = ({item}) => (
    <ListItem
      titleStyle={{color: '#000', fontWeight: 'bold'}}
      subtitleStyle={{color: '#000'}}
      title={item.name}
      subtitle={item.baseVolume}
    />
  );

  return (
    <View style={styles.container}>
      <Header centerComponent={{text: 'Tickers', style: {color: '#fff'}}}/>
      {store.isLoading && <Button
        type="clear"
        loading
      />}
      {!store.isLoading && <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={tickers}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{margin: 2, backgroundColor: '#ccc', height: 1}}/>}
      />}
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

export default inject('store')(observer(QuotesScreen));