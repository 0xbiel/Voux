import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from '../screens/Home';

const Screens = createSwitchNavigator({
  Home
});

export default createAppContainer(Screens);
