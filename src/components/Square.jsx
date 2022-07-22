import React from 'react';

const Square = ({ val, onClick }) => {
  // EQUIVALENT TO (properties)
  return (
    <button type="button" className="square" onClick={onClick}>
      {val}
    </button>
  ); // EQUIVALENT TO    {properties.value}
}; // USAGE OF OBJECT DESTRUCTURING

export default Square;
