import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Button from 'react-native-button';
import { ratingColorButtons, selectedRatingColorButtons } from './colorpicker-sp';

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = ratingColorButtons() ;
  }

  selectColor(colorName) {
    this.setState(selectedRatingColorButtons(colorName));
  }

  render() {
    const selectedColor = this.state.colors.find(c => c.selected).name;
    const buttons = this.state.colors.map(c => {
      return (
        <Button
          key={c.name}
          containerStyle={colorButtonStyle(c.name, selectedColor)}
          style={{
            color: c.name,
            borderColor: 'white',
            borderWidth: 1}}
          onPress={() => this.selectColor(c.name)}>
        </Button>
      );
    });

    return (
      <View style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'flex-start'}}>
        <View style={styles.container}>
          {buttons}
        </View>
        <Button containerStyle={selectedButtonStyle(selectedColor)} style={{
          color: 'white',
          fontSize: 20,
          textShadowColor: 'black',
          textShadowOffset: { height: 1, width: 1},
          textShadowRadius: 4}}>
          {this.props.rating}
        </Button>
      </View>
    );
  }
}

const colorButtonStyle = (color, selectedColor) => {
  return {
    width: 35,
    height: 35,
    margin: 5,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: color,
    borderWidth: color === selectedColor ? 2 : 0.5,
    borderColor: 'white'
  };
};

const selectedButtonStyle = (backgroundColor) => {
  return {
    width: 75,
    height: 75,
    borderColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    display: 'flex',
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8 
  };
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 12,
    width: 200
  }
});
