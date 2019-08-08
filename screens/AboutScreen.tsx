import React from 'react';
import { Text, View } from 'react-native';

export default class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Quotes Poloniex render App!</Text>
      </View>
    );
  }
}