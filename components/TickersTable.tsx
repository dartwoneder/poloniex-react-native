import React from 'react';
import {FlatList, View} from 'react-native';
import {Button} from 'react-native-elements';

import {TickersTableItem} from '../components';

function TickersTable({tickers, isLoading}) {
  return (
    <>
      {isLoading && <Button
        type="clear"
        loading
      />}
      {!isLoading && <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={tickers}
        renderItem={TickersTableItem}
        ItemSeparatorComponent={() => <View style={{margin: 2, backgroundColor: '#ccc', height: 1}}/>}
      />}
    </>
  )
}

export default TickersTable;