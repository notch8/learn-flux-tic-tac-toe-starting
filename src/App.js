import React, { Component } from 'react';
import './App.css';
import Board from './stores/Board'
import Players from './stores/Players'
import {clearBoard, squareClickAction} from './actions/BoardActions'

class App extends Component {
  constructor(){
    super()
    this.handleBoardChange = this.handleBoardChange.bind(this)
    this.state={
      squares: Board.getSquares()
    }
  }

  handleBoardChange(){
    this.setState({
      squares: Board.getSquares(),
      winner: Board.getWinner()
    })
  }

  componentWillMount(){
    Board.on('changed', this.handleBoardChange)
  }

  componentWillUnmount(){
    Board.removeListener('changed', this.handleBoardChange) 
  }

  handleSquareClick(event){
    const target = event.target
    const currentPlayer = Players.currentPlayer()
    squareClickAction(target.dataset.id, currentPlayer)
  }

  handleNewGame(){
    clearBoard() 
  }

  render() {
    const squares = this.state.squares.map(function(square, index){
      return(
        <div 
          key={index} 
          data-id={index}
          onClick={this.handleSquareClick.bind(this)}
          className='square'>
          {square}
        </div>
      ) 
    }.bind(this))
    return (
      <div>
        {this.state.winner &&
          <div className='winner-container'>
            <div className='winner'>
              <h3>And the Winner is: {this.state.winner}</h3>
            </div>
            <button onClick={this.handleNewGame.bind(this)}>New Game?</button>
          </div>
        }
        <div className="board">
          {squares}
        </div>
      </div>
    );
  }
}

export default App;
