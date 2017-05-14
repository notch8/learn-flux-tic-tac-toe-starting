import React, { Component } from 'react';
import './App.css';
import Board from './stores/Board'

class App extends Component {
  constructor(){
    super()
    this.state={
      squares: Board.getSquares()
    }
  }

  render() {
    const squares = this.state.squares.map(function(square, index){
      return(
        <div 
          key={index} 
          data-id={index}
          className='square'>
          {square}
        </div>
      ) 
    })
    return (
      <div>
        <div className="board">
          {squares}
        </div>
      </div>
    );
  }
}

export default App;
