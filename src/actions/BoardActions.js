import Dispatcher from '../Dispatcher'

export function squareClickAction(index, player){
  Dispatcher.dispatch({
    type: 'SQUARE_SET',
    index: index,
    player: player
  })
}

export function clearBoard(){
  Dispatcher.dispatch({
    type: 'CLEAR_BOARD'
  })
}
