/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 /*import dotenv from 'dotenv';
 dotenv.config({silent: true, path: "./shared/process.env"});
 console.log(process.env.API_BASE);*/

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import App from './app/App';
import store from './app/store';

export default class Counter extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Counter', () => Counter);
