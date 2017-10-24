import React, { Component } from 'react';
import { Keyboard, TextInput, StyleSheet } from 'react-native';

export default class Input extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <TextInput
      onChangeText={(text) => this.setState({ text })}
      style={ styles.listInput }
      value={ this.state.text }
      placeholder='Enter a List Item'
      />
    )
  }
}

const styles = StyleSheet.create({
  listInput: {
    borderColor: 'lightgray',
    borderWidth: 2,
    color: 'gray',
    height: 40
  },
})
