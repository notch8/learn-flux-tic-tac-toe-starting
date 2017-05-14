class Board {
  constructor(){
    this.winner = false
    this.squares = ["","","","","","","","",""]
    this.winningCombos = [
      [0, 1, 2], 
      [3, 4, 5], 
      [6, 7, 8], 
      [0, 3, 6], 
      [1, 4, 7], 
      [2, 5, 8], 
      [0, 4, 8], 
      [2, 4, 6]
    ]
  }

  getSquares(){
    return this.squares
  }

  getWinner(){
    return this.winner
  }

  setSquare(index, player){
    if(this.squares[index] === ""){
      this.squares[index] = player
    }

    this.winner = this.gameIsWon()
  }

  resetBoard(){
    this.squares = ["","","","","","","","",""]
    this.winner = false
  }

  gameIsWon(){
    var winner = false
    this.winningCombos.forEach(function(combo){
      if(this.squares[combo[0]] === this.squares[combo[1]] && this.squares[combo[1]] === this.squares[combo[2]]){
        winner = this.squares[combo[0]]
      }
    }.bind(this))

    return winner
  }
}

let board = new Board()
export default board
