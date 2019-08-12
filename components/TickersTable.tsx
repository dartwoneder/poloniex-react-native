import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';

import TickersTableItem, {styles as tickersTableItemStyles} from '../components/TickersTableItem';
import TickersTableError from '../components/TickersTableError';
import colors from '../colors';

const getKeyName = (prefix, item) => `${prefix}-${item.name}`

function TickersTable(props: { tickers: any, isLoading: boolean, error: object }) {
  const {tickers = [], isLoading, error} = props;
  return (
    <>
      {isLoading && <Button
        type="clear"
        loading
      />}
      {!isLoading && <View style={styles.wrap}>
        {error && <TickersTableError/>}
        <FlatList
          numColumns={4}
          ListHeaderComponent={() => {
            return (
              <View style={styles.row}>
                <View style={[tickersTableItemStyles.cell, tickersTableItemStyles.cellFirst, styles.cell]}>
                  <Text style={tickersTableItemStyles.text}>Name</Text>
                </View>
                <View style={[tickersTableItemStyles.cell, styles.cell]}>
                  <Text style={tickersTableItemStyles.text}>Last</Text>
                </View>
                <View style={[tickersTableItemStyles.cell, styles.cell]}>
                  <Text style={tickersTableItemStyles.text}>HighestBid</Text>
                </View>
                <View style={[tickersTableItemStyles.cell, styles.cell]}>
                  <Text style={tickersTableItemStyles.text}>%Change</Text>
                </View>
              </View>
            )
          }}
          data={tickers.reduce((acc, item) => {
            const newVal = [
              {
                key: getKeyName('name', item),
                value: item.name
              },
              {
                key: getKeyName('last', item),
                value: item.last
              },
              {
                key: getKeyName('highestBid', item),
                value: item.highestBid
              },
              {
                key: getKeyName('percentChange', item),
                value: item.percentChange
              }
            ];
            return [
              ...acc,
              ...newVal
            ]
          }, [])}
          disableVirtualization
          renderItem={({item}) => <TickersTableItem value={item.value}/>}
          ItemSeparatorComponent={() => <View style={styles.separator}/>}
        />
      </View>}
    </>
  )
}

const styles = StyleSheet.create({
  cell:{
    backgroundColor: colors.bgDark2
  },
  wrap: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    borderColor: colors.bgDark2,
    borderBottomWidth: 1,
  },
  separator: {
    backgroundColor: colors.bgDark2,
    height: 1
  }
});

export default TickersTable;