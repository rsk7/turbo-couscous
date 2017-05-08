/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

import BoulderRating from './components/boulder';

export default class climber extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
         backgroundColor="black"
         barStyle="light-content"/>
        <BoulderRating/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

AppRegistry.registerComponent('climber', () => climber);
