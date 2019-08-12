import React from 'react';
import {StyleSheet} from 'react-native';
import {Header as RNHeader} from 'react-native-elements';
import colors from '../colors';

function Header(props: { text: string }) {
  const {text} = props;
  return (
    <RNHeader
      containerStyle={styles.header}
      centerComponent={{text: text, style: styles.headerText}}/>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.bgDark2,
    borderBottomColor: colors.bgDark2
  },
  headerText: {
    color: '#fff'
  }
});

export default Header;