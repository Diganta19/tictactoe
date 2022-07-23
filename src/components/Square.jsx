import React from 'react';

const Square = ({ val, onClick, isWinningSquare }) => {
  // EQUIVALENT TO (properties)
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
    >
      {val}
    </button>
  ); // EQUIVALENT TO    {properties.value}
}; // USAGE OF OBJECT DESTRUCTURING

export default Square;
