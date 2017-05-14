import {EventEmitter} from 'events'
import Dispatcher from '../Dispatcher'

class Players extends EventEmitter{
  constructor(){
    super()
    this.players = ["X", "O"]
    this.currentPlayerIndex = 0
  }

  currentPlayer(){
    return this.players[this.currentPlayerIndex]
  }

  changePlayer(){
    //trueOrFalsePart ?  trueValue : false/value
    this.currentPlayerIndex = this.currentPlayerIndex === 0 ? 1 : 0
  }

  handleAction(action){
    switch(action.type){
      case('SQUARE_SET'):{
        this.changePlayer()
        break;
      }
      default: {}
    }
  }
}

const players = new Players()
Dispatcher.register(players.handleAction.bind(players))
export default players
