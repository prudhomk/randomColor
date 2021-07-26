import React, { Component } from 'react';
import { colorRandomizer } from '../color-randomizer/ColorRandomizer.jsx';

export default function App() {
  

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval());
  }
}
