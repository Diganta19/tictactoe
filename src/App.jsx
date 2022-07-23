import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './components/helpers';

import './styles/root.scss';

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXnext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  const winner = calculateWinner(current.board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isXnext ? 'X' : 'O'}`;

  const handelOnClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((valueXorO, pos) => {
        if (pos === position) {
          return last.isXnext ? 'X' : 'O';
        }
        return valueXorO;
      });
      return prev.concat({ board: newBoard, isXnext: !last.isXnext });
    });
    setCurrentMove(prev => prev + 1);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe Game</h1>
      <h2>{message}</h2>
      <Board handelOnClick={handelOnClick} board={current.board} />
    </div>
  );
};
export default App;
