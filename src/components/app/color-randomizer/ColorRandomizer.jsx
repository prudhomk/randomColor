import React, { Component } from 'react';

export default class ColorRandomizer extends Component {
    

    render() {
        const colors = ['red', 'yellow', 'blue'];
        const randColor = colors[Math.floor(Math.random() * colors.length)];
        return (
        
        );
    }
}