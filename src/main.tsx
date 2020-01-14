import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './main.css'

// interface SquareProps {
//   value: number,
//   onClick: any
// }

function Square(props: any) {
  return (
    <button 
      className="square" 
      onClick= {props.onClick()}>
      {props.value}
    </button>
  );
}

// class Square extends React.Component<SquareProps, {}> {

//   public render(): JSX.Element {
//     return (
//       <button 
//         className="square" 
//         onClick={(): void => {this.props.onClick()}}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

interface BoardState {
  squares: Array<9>
  xIsNext: Boolean
}

class Board extends React.Component<{}, BoardState> {

  constructor(props: any) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  handleClick(i: number) {
    const squares : Array<any> = this.state.squares.slice()
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
  }

  public renderSquare(i: number) {
    return (
      <Square 
        value = { this.state.squares[i] } 
        onClick = { () : void => { this.handleClick(i) } }
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);