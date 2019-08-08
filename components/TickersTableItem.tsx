import React from 'react';
import {ListItem} from 'react-native-elements';

function TickersTableItem({item}) {
  return (
    <ListItem
      titleStyle={{color: '#000', fontWeight: 'bold'}}
      subtitleStyle={{color: '#000'}}
      title={item.name}
      subtitle={item.last}
    />
  )
}

export default TickersTableItem;