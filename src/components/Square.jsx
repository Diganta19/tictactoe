import React from 'react';

const Square = ({ val }) => {
  // EQUIVALENT TO (properties)
  return (
    <button type="button" className="square">
      {val}
    </button>
  ); // EQUIVALENT TO    {properties.value}
}; // USAGE OF OBJECT DESTRUCTURING

export default Square;
