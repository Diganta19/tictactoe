import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './components/helpers';

import './styles/root.scss';

const App = () => {
  
 
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXnext: true },
  ]);
  
 
  const [currentMove, setCurrentMove] = useState(0);


  const current = history[currentMove];
  
  const { winner, winningSquare } = calculateWinner(current.board);

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

  const moveTo = move => {
    setCurrentMove(move);
  };

  const noMovesLeft = current.board.every(el => el !== null);

  const newGame = () => {
    setHistory([{ board: Array(9).fill(null), isXnext: true }]);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>
        Tic <span className="greentext">Tac</span> Toe
      </h1>
      <StatusMessage
        winner={winner}
        current={current}
        noMovesLeft={noMovesLeft}
      />
      <Board
        handelOnClick={handelOnClick}
        board={current.board}
        winningSquare={winningSquare}
      />
      <button
        type="button"
        className={`btn-reset ${noMovesLeft || winner ? 'active' : ''}`}
        onClick={newGame}
      >
        Start New Game
      </button>
      <h1>
        Current <span className="greentext">Game</span>{' '}
        <span className="orangetext">History</span>
      </h1>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls" />
    </div>
  );
};
export default App;
