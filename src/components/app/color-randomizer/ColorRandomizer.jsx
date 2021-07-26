import React from 'react';
import PropTypes from 'prop-types';

const ColorRandomizer = ({ colors, onColorChange }) => {
  return (
    <>
      {colors[Math.floor(Math.random() * colors.length)]}
      
    </>
  );
};

ColorRandomizer.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onColorChange: PropTypes.func.isRequired,
};

export default ColorRandomizer;
