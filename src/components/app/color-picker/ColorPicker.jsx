import React, { Component } from 'react';
import ColorDisplay from '../color-picker/ColorDisplay';
import ColorRandomizer from '../color-randomizer/ColorRandomizer';

export default class ColorPicker extends Component {
    state = {
        selectedColor: 'red',
    };

    handleColorChange = (color) => {
        this.setState({ selectedColor: color });
    };

    render() {
        const colors = ['red', 'orange', 'yellow', 'blue', 'violet', 'green'];
        const { selectedColor } = this.state;
    }

    return(
        <>
            <ColorDisplay backgroundColor={selectedColor} />
        </>
    );
  
}
