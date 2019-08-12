import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {inject, observer} from 'mobx-react';

import TickersTable from '../components/TickersTable';
import Header from '../components/Header';
import colors from '../colors';


class TickersScreen extends Component<{ store: any, navigation: any }> {
  intervalId: number = -1;
  didBlurSubscription: void;
  didFocusSubscription: void;

  componentDidMount() {
    const {
      props: {
        store,
        navigation
      }
    } = this;

    this.didBlurSubscription = navigation.addListener(
      'didBlur',
      () => cleanup
    );

    this.didFocusSubscription = navigation.addListener(
      'didFocus',
      () => {
        fetchData(true);
      }
    );

    const cleanup = () => {
      clearInterval(this.intervalId);
    };

    const fetchData = (showLoader) => {
      store.fetchTickers(showLoader).then(() => {
        const intervalId = setInterval(() => {
          cleanup();
          fetchData(false);
        }, 5000);
        this.intervalId = intervalId;
      });
    };
  }

  componentWillUnmount(): void {
    clearInterval(this.intervalId);
    this.didBlurSubscription.remove();
    this.didFocusSubscription.remove();
  }

  render() {
    const {
      props: {
        store: {
          isLoading,
          tickers,
          error
        }
      }
    } = this;

    return (
      <View style={styles.container}>
          <Header text={"Tickers"}/>
          <TickersTable isLoading={isLoading}
                        tickers={tickers}
                        error={error}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
    flexDirection: 'column',
    backgroundColor: colors.bgDark
  },
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