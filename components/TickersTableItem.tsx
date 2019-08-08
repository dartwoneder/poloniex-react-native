import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AnimateNumber from 'react-native-animate-number'

const formatter = (val)=>{
  return parseFloat(val).toFixed(4)
};

function TickersTableItem({item}) {

  const [updatesCount, setUpdatesCount] = useState(0);

  useEffect(() => {
    setUpdatesCount(updatesCount + 1);
  }, [item.hashCode()]);

  return (
    <View style={styles.row}>
      <View style={styles.rowTop}>
        <Text>{item.get('name')}</Text>

      </View>
      <View style={styles.rowTop}>
        <Text>Updates: {updatesCount}</Text>
        <Text>
          <AnimateNumber formatter={formatter}
                         value={item.get('percentChange')}/>
        </Text>
        <Text>
          <AnimateNumber formatter={formatter}
                         value={item.get('baseVolume')}/>
        </Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  row: {
    padding: 10
  },
  rowTop: {
    //backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default TickersTableItem;