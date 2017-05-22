import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import Button from 'react-native-button';
import ColorPicker from './colorpicker';

const RANGE = 12;
const buttonTitle = idx => `V ${idx}`;
const accessibilityLabel = idx => `rating v ${idx}`;

const buttonState = Array(RANGE).fill().reduce((memo, _, idx) => {
  memo[idx] = false;
  return memo;
}, {});

const toggleButton = (idx) => () => {
  buttonState[idx] = !buttonState[idx];
};

const test = () => {
  console.log('test');
};

export default class BoulderRating extends Component {
  constructor(props) {
    super(props);
    this.state = buttonState;
  }

  update(action) {
    return () => {
      action();
      this.setState(buttonState);
    };
  }

  textClick() {
    console.log('text clicked');
  }

  render() {
    const buttons = Array(RANGE).fill().map((_, idx) => {
      return (
        <Button
          key={idx}
          containerStyle={styles.button}
          style={{color: 'gainsboro'}}
          onPress={this.textClick}>
          V{idx}
        </Button>
      );
    });

    return (
      // <View style={styles.container}>
      <View style={{height: 300}}>
        <ColorPicker rating="V1">
        </ColorPicker>
        <ScrollView contentContainerStyle={styles.container} style={{height: 200}}>
          {buttons}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 300
  },
  button: {
    width: 75,
    height: 75,
    borderColor: '#e7e7e7',
    borderRadius: 4,
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  }
});