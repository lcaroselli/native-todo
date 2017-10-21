import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Title extends Component {
  render() {
    return (
      <View style={ styles.header }>
        <Text style={ styles.title }>To-Do List</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'steelblue',
    padding: 15
  },

  title: {
    color: 'white',
    textAlign: 'center'
  },
})
