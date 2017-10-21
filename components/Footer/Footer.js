import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default class Footer extends Component {
  removeItem = () => {
    console.log('Remove item')
  }

  render() {
    return (
      <View style={ styles.footer }>
        <Button
          onPress={ this.removeItem }
          title='Remove Completed Items'
          color='red'
          style={ styles.title }
          accessibilityLabel='Remove completed items button'
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'white',
    padding: 15
  },

  title: {
    textAlign: 'center'
  },
})
