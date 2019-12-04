import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import App from './navigation/App';

export default class VouxApp extends Component {
  render() {
    return (
        <>
          <StatusBar backgroundColor="black" barStyle="light-content"/>
          <App/>
        </>
    )
  }
}
