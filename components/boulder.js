import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import Button from 'react-native-button';
import ColorPicker from './colorpicker';
import { ratingButtons, selectButton } from './boulder-sp';

export default class BoulderRating extends Component {
  constructor(props) {
    super(props);
    this.state = ratingButtons();
  }

  select(button) {
    this.setState(selectButton(button.rating));
  }

  render() {
    const selected = this.state.buttons.find(b => b.selected);
    const colorPicker = !selected ? null
      : <ColorPicker rating={selected.name}></ColorPicker>

    const buttons = this.state.buttons.map(b => {
      return (
        <Button
          key={b.rating}
          containerStyle={styles.button}
          style={{color: 'gainsboro'}}
          onPress={() => this.select(b)}>
          {b.name}
        </Button>
      );
    });

    return (
      <View style={{height: 300}}>
        {colorPicker}
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