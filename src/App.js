import React, { Component } from 'react';
import './App.css';

function Square(props) {
  return <div className="gameSquare" key={props.idx} onClick={props.onClick}>{props.value}</div>
}

function checkWinner(board) {
  console.log(board);
  const winners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 3, 8],
    ];
    for (var i=0; i<winners.length; i++) {
      const [a, b, c] = winners[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return true;
      }
    }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {"board":Array(9).fill(null), "player":'X'};
  }


  squareClick(idx) {
    // copy array
    let curBoard = this.state.board.slice();

    if (curBoard[idx] === null) {
      curBoard[idx] = this.state.player;
      if (checkWinner(curBoard)) {
        this.setState({board:curBoard});
        alert(`winner ${this.state.player}`);
        return;
      }
      let player = this.state.player === 'X' ? 'O' : 'X';
      this.setState({board:curBoard, player:player});
    } else {
      alert("pick an empty square");
    }
  }
  
  render() {
    const board = this.state.board.map( (obj, idx) => { 
      return <Square key={`sq${idx}`} idx={idx} value={obj} onClick={ evt => this.squareClick(idx) } /> ;
    });
    return (
      <div className="App">
      {board}
      </div>
    );
  }
}

export default App;
