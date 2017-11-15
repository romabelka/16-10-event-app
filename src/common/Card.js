import React, { Component } from 'react';
import { Platform, View, StyleSheet } from 'react-native';

class Card extends Component {
  static propTypes = {};

  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowRadius: 2,
        shadowOpacity: 0.7,
        backgroundColor: '#FDFDFD',
      },
    }),
  },
});

export default Card;
