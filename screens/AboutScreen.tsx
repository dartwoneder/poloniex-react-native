import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from "../colors";

export default class AboutScreen extends Component {
  handleClick = ()=>{
    this.props.navigation.navigate('Tickers')
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Quotes Poloniex render App!</Text>
        <TouchableOpacity style={styles.button} onPress={this.handleClick}>
          <Text>To Tickers</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgDark,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 20
  },
});
