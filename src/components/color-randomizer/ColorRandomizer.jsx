/* eslint-disable max-len */
import React, { Component } from 'react';
import ColorDisplay from '../color-picker/ColorDisplay';


const colors = ['red', 'orange', 'yellow', 'blue', 'violet', 'green'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

const timer() {
  
}
class ColorRandomizer extends Component {

state = {
  time: '',
  color: randomColor,
}

  componentDidMount = () => {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.interval());
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
