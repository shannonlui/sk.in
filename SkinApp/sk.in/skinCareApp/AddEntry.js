import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AddEntry extends Component {
  static get defaultProps() {
    return {
      title: 'AddEntry'
    };
  }

  render() {
    return (
      <View>
        <Text>This is the add entry scene.</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({

});
