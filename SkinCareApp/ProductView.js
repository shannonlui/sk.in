import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry, TouchableOpacity } from 'react-native';

export default class ProductView extends Component {
  static get defaultProps() {
    return {
      title: 'Product View'
    };
  }

  render() {
    var expiryString;
    if (this.props.product.expirydate == null) {
      expiryString = 'none';
    } else {
      var newDate = new Date(Date.parse(this.props.product.expirydate.slice(0, 19).replace(' ', 'T')));
      expiryString = newDate.toUTCString().slice(0, 16);
    }
    return (
      <View style={styles.container}>
        <Text style={styles.brand}>{this.props.product.brand}</Text>
        <Text style={styles.name}>{this.props.product.name}</Text>
        <Text style={styles.text}>Expiry Date: {expiryString}</Text>

        <TouchableOpacity style={{flex: 1}}
          onPress={this.props.changeRoute.bind(this,2)}>
          <Text style={styles.ret}>Return to Products </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f2f2f2',
    padding: 20,
  },
  brand: {
    fontSize: 22,
    color: '#222',
  },
  name: {
    fontSize: 19,
    color: '#222',
    marginBottom: 10
  },
  text: {
    color: '#555'
  },
  ret: {
    bottom: 15,
    position: 'absolute'
  }
});