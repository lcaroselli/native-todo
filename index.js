import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './App';

const store = configureStore(App);

const ReduxApp = () => (
  <Provider store={ store }>
    <App />
  </Provider>
)

AppRegistry.registerComponent('App', () => App)
