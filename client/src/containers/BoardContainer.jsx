import React from 'react'
import Layout from '../components/Layout'
import GameLogic from '../components/GameLogic'

class BoardContainer extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    squares:['','','','','','','','',''],
    player: 'player 1',
    result: ''
  }

  this.gameLogic = new GameLogic()

}

setClickedBox(index){

  this.setState((prevState) => {

    if(prevState.squares[index-1] === ''){

      if (prevState.player === 'player 1'){
        prevState.squares[index - 1] = "x"
        prevState.player = "player 2"
      } else {
        prevState.squares[index - 1] = "o"
        prevState.player = "player 1"
      }
    }

    prevState.result = this.gameLogic.checkForWinner(prevState.squares)
    return prevState
  })

}

clearButtonHandler(){
  this.setState({
    squares:['','','','','','','','',''],
    player: 'player 1',
    result: ''
  })  
  console.log('button clicked')
}


  render(){
    return(
        <div className = 'container'>
        <h1>X & O </h1>
          <Layout squares={this.state.squares} clickHandler={this.setClickedBox.bind(this)}/>
          <button className="clear-button" onClick={this.clearButtonHandler.bind(this)}>Reset Game</button>
          <p className='result'>{this.state.result}</p>
        </div>
      )
  }


}


export default BoardContainer