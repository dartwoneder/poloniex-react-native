import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AnimateNumber from 'react-native-animate-number';
import {Icon} from 'react-native-elements';
import {AnimatedBackgroundColorView} from 'react-native-animated-background-color-view';

import colors from '../colors';

const formatter = (val) => parseFloat(val).toFixed(8);
const timing = (interval, progress) => interval * (1 - Math.sin(Math.PI * progress)) * 10;

class TickersTableItem extends Component<{ value: any }> {
  intervalId: number = null;
  state = {
    higlight: false,
    diffDirection: null,
  };

  componentDidUpdate(prevProps: Readonly<{ value: any }>, prevState: Readonly<{}>, snapshot?: any): void {
    if (prevProps.value !== this.props.value) {
      this.setState({
        higlight: true
      });
      if (this.intervalId) {
        clearTimeout(this.intervalId);
      }
      this.intervalId = setTimeout(() => {
        this.setState({
          higlight: false
        })
      }, 1500);

      let diffDirection;
      if (this.props.value > prevProps.value) {
        diffDirection = 'up';
      } else if (this.props.value < prevProps.value) {
        diffDirection = 'down'
      }

      this.setState({
        diffDirection
      })
    }
  }

  render() {
    let {
      props: {value},
      state: {higlight, diffDirection}
    } = this;

    const isNumber = typeof value === 'number';
    let color = '#fff';
    if (diffDirection) {
      color = diffDirection === 'up' ? colors.green : colors.red;
    }

    return (
      <AnimatedBackgroundColorView
        timing={(interval, progress) => interval * (1 - Math.sin(Math.PI * progress)) * 10}
        color={higlight ? colors.bgDark2 : colors.bgDark}
        duration={1000}
        style={{
          ...styles.cell,
          ...(!isNumber && styles.cellFirst)
        }}
      >
        <Text style={{
          ...styles.text,
          color: color
        }}>
          {isNumber && <AnimateNumber value={value} formatter={formatter} timing={timing}/>}
          {!isNumber && value}
        </Text>

        {diffDirection && <View style={{
          ...styles.icon,
          ...(diffDirection === 'up' ? styles.iconUp : styles.iconDown)
        }}>
          {diffDirection === 'up' && <Icon
            name="sort-up"
            type="font-awesome"
            color={color}
            size={10}
          />}
          {diffDirection === 'down' && <Icon
            name="sort-down"
            type="font-awesome"
            color={color}
            size={10}
          />}
        </View>}
      </AnimatedBackgroundColorView>
    );
  }
}

export const styles = StyleSheet.create({
  cell: {
    height: 50,
    flex: 1 / 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: colors.bgDark
  },
  cellFirst: {
    justifyContent: 'flex-start'
  },
  text: {
    fontSize: 12,
    color: '#fff'
  },
  icon: {
    position: 'relative',
    marginLeft: 2
  },
  iconUp: {
    top: 2,
  },
  iconDown: {
    top: -2,
  }
});

export default TickersTableItem;