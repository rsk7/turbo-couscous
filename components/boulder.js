import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Alert,
  View,
  Text
} from 'react-native';

const RANGE = 9;
const buttonTitle = idx => `V ${idx}`;
const accessibilityLabel = idx => `rating v ${idx}`;

const buttonState = Array(RANGE).fill().reduce((memo, _, idx) => {
  memo[idx] = false;
  return memo;
}, {});

export default class BoulderRating extends Component {
  constructor(props) {
    super(props);
    this.state = buttonState;
  }

  render() {
    const buttons = Array(RANGE).fill().map((_, idx) => {
      return (
        <TouchableOpacity key={idx}
          style={buttonCss(idx)}>
          <Text style={styles.text}>{buttonTitle(idx)}</Text>
        </TouchableOpacity>
      );
    });

    return (
      <View style={styles.container}>
        {buttons}
      </View>
    );
  }
}

const buttonCss = (idx) => ({
  borderColor: '#BEBEBE',
  borderWidth: 1,
  justifyContent: 'center',
  alignItems: 'center',
  height: 75,
  width: 75,
  backgroundColor: buttonState[idx] ? '#E4E4E4' : 'black',
  marginLeft: 10,
  marginRight: 10,
  marginTop: 10,
  marginBottom: 10
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: '65%',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 14 
  }
});