import React, { Component } from 'react';
import { ListView, StyleSheet, Text, View } from 'react-native';

import Title from './components/Title/Title';
import Footer from './components/Footer/Footer';
import Input from './components/Input/Input';

const rowData = [
  {id: 0, text: 'Walk Dog'},
  {id: 1, text: 'Clean Kitchen'},
  {id: 2, text: 'Grocery Shopping'},
  {id: 3, text: 'Finish React Native Tutorial'},
  {id: 4, text: 'Schedule Coffee with Jeanette'}
]

const rowHasChanged = (row1, row2) => row1.id !== row2.id
const dataSource = new ListView.DataSource({ rowHasChanged })


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      listData: dataSource.cloneWithRows(rowData)
    }
  }

  renderRow = (data) => {
    return (
      <Text style={ styles.listItems }>
      { data.text }
      </Text>
    )
  }
  render() {
    return (
      <View style={ styles.container }>
        <Title></Title>
        <Input></Input>
        <ListView
          style={ styles.list }
          dataSource={ this.state.listData }
          renderRow={ this.renderRow }/>
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

  list: {
    backgroundColor: 'white',
    padding: 15,
  },

  listItems: {
    color: 'steelblue',
    marginBottom: 15,
  },
});
