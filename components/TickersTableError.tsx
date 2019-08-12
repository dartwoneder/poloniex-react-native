import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../colors';

function TickersTableError() {
  return (
    <View style={styles.error}>
      <Text style={styles.errorText}>Возникла ошибка</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  error: {
    backgroundColor: colors.red,
    height: 50,
    justifyContent: 'center'
  },
  errorText:{
    color: '#fff',
    padding: 20
  }
});

export default TickersTableError;