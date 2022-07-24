import React from 'react';

const StatusMessage = ({ winner, current, noMovesLeft }) => {
  // const message = winner
  // ? `Winner is ${winner}`
  // : `Next player is ${current.isXnext ? 'X' : 'O'}`;
  return (
    <div className="status-message">
      {winner && (
        <>
          winner is{' '}
          <span className={`${winner === 'X' ? 'greentext' : 'orangetext'}`}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next player is{' '}
          <span className={`${current.isXnext ? 'greentext' : 'orangetext'}`}>
            {current.isXnext ? 'X' : 'O'}
          </span>
        </>
      )}
      {!winner && noMovesLeft && `DRAW`}
    </div>
  );
};

export default StatusMessage;
