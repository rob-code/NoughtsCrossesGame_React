import React from 'react'

class Square extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      index: props.squareNumber
    }
  }

  squareClickHandler(){
    this.props.onClick(this.state.index)
  }
  
  render(){
    return(
      <div className ='square' onClick={this.squareClickHandler.bind(this)} >
        {this.props.value} 
        <div className='square-content'>
        
          </div>

      </div>
      )
  }

  
}

export default Square