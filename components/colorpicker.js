import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Button from 'react-native-button';

const colorState = (state = {}, action) => {
  const colors = ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'black', 'white']
    .map(c => ({ name: c, selected: false }));
  return { colors };
};

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = colorState();
  }

  selectColor() {

  }

  render() {
    const buttons = this.state.colors.map(c => {
      return (
        <Button
          key={c.name}
          containerStyle={colorButtonStyle(c.name)}
          style={{color: c.name, borderColor: 'white', borderWidth: 1}}
          onPress={this.selectColor}>
        </Button>
      );
    });

    return (
      <View style={{flexWrap: 'wrap', flexDirection: 'row', alignItems: 'flex-start'}}>
        <View style={styles.container}>
          {buttons}
        </View>
        <Button containerStyle={styles.button} style={{color: 'white', fontSize: 20, textShadowColor: 'black', textShadowOffset: { height: 1, width: 1}, textShadowRadius: 4}}>
          {this.props.rating}
        </Button>
      </View>
    );
  }
}

const colorButtonStyle = (color) => {
  const borderColor = color === 'black' ? 'white' : color;
  return {
    width: 35,
    height: 35,
    margin: 5,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: color,
    borderWidth: 2,
    borderColor: 'white'
  };
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 12,
    width: 200
  },
  button: {
    width: 75,
    height: 75,
    borderColor: 'white',
    borderRadius: 4,
    borderWidth: 4,
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8 
  }
});
