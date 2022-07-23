import React from 'react';

const StatusMessage = ({ winner,current,noMovesLeft }) => {
  // const message = winner
  // ? `Winner is ${winner}`
  // : `Next player is ${current.isXnext ? 'X' : 'O'}`;
    return <h2>
        {winner && `winner is ${winner}`}
        {!winner && !noMovesLeft && `Next player is ${current.isXnext ? 'X' : 'O'}`}
        {!winner && noMovesLeft && `DRAW`}
    </h2>;
};

export default StatusMessage;
