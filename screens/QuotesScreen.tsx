import React from 'react';
import {Button, Text, View} from 'react-native';
import {inject, observer} from 'mobx-react';

function QuotesScreen(props) {
  const property = props.store.property;
  const pressHandler = props.store.setProperty;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>QuotesScreen! {property}</Text>
      <Button onPress={pressHandler} title="Update time"/>
    </View>
  );
}

export default inject('store')(observer(QuotesScreen));