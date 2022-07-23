import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './components/helpers';

import './styles/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXnext, setXnext] = useState(false);

  const winner = calculateWinner(board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXnext ? 'X' : 'O'}`;

  const handelOnClick = position => {
    if (board[position] || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((valueXorO, pos) => {
        if (pos === position) {
          return isXnext ? 'X' : 'O';
        }
        return valueXorO;
      });
    });
    setXnext(prev => !prev);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe Game</h1>
      <h2>{message}</h2>
      <Board handelOnClick={handelOnClick} board={board} />
    </div>
  );
};
export default App;
