import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class Input extends Component {
  constructor(){
    super()
    this.state = {
      text: 'Enter a List Item'
    }
  }

  render() {
    return (
      <TextInput
      onChangeText={(text) => this.setState({ text })}
      style={ styles.listInput }
      value={ this.state.text }
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
