import React, { Component } from 'react';
import ColorDisplay from './ColorDisplay';


export default class ColorPicker extends Component {
    // state = {
    //   selectedColor: 'red',
    // };

    // handleColorChange = (color) => {
    //   this.setState({ selectedColor: color });
    // };
    
    render() {
    //   
    //   const { selectedColor } = this.state;
    
      console.log('hello');
      return (
          
        <>
          <ColorDisplay />
          <div>hello</div>
        </>
      );
    }
}
