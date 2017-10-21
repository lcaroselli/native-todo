import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Title from './components/Title/Title';
import Footer from './components/Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Title></Title>
        <Footer></Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
