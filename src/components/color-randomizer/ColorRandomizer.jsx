/* eslint-disable max-len */
import React, { Component } from 'react';
import ColorDisplay from '../color-picker/ColorDisplay';



class ColorRandomizer extends Component {

state = {
  color: '',
}
  
colorPicker = () => {
  const colors = ['red', 'orange', 'yellow', 'blue', 'violet', 'green'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  this.setState({ color: randomColor });
};

  componentDidMount = () => {
    this.interval = setInterval(() => ({ color: this.colorPicker() }), 1000);
  };
 
  render() {
    const { color } = this.state;
    return (
      <>
        
        <ColorDisplay backgroundColor = { color }/>
      </>
    );
  }
}

export default ColorRandomizer;
