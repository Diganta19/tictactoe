import React from 'react';

const Square = ({ val, onClick, isWinningSquare }) => {
  // EQUIVALENT TO (properties)
  return (
    <button
      type="button"
      onClick={onClick}
      className={`square ${isWinningSquare ? 'winning' : ''}`} // DYNAMIC CLASS
    >
      {val}
    </button>
  ); // EQUIVALENT TO    {properties.value}
}; // USAGE OF OBJECT DESTRUCTURING

export default Square;
