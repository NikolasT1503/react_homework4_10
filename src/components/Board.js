import React from "react";
import { Square } from "./Square";

export class Board extends React.Component {
  rows = [[0,1,2], [3,4,5], [6,7,8]];
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xPlayerMove: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xPlayerMove ? "X" : "O";
    this.setState({ squares: squares, xPlayerMove: !this.state.xPlayerMove });
  }

  renderSquare(i,id) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        key={id}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    console.log(winner);
    let status;
    if (winner) {
      status = "Выиграл " + winner;
    } else {
      status = "Следующий ход: " + (this.state.xPlayerMove ? "X" : "O");
    }
    return (
      <div>
        <div className="status">{status}</div>
        {this.rows.map((row, id) => {
            /* console.log(row) */
            return (
            <div className="board-row" key={id}>
               {row.map((s, jd) => {
                   return this.renderSquare(s, jd)
                })}  
            </div>
            )
        })}
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
