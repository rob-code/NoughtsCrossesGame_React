import React from 'react'
import Square from './Square'

class Layout extends React.Component {

  render(){

    const squareNodes = this.props.squares.map((square,index)=>{

      const sqNumber = index + 1

      return(
        <Square value={square} key={index} squareNumber={sqNumber} onClick={this.props.clickHandler}/> 

          )
    }) 

    return(
      <div className="board-wrapper">
      <div className='layout' >
      {squareNodes} 
      </div>
      </div>
      )

  }

}


export default Layout