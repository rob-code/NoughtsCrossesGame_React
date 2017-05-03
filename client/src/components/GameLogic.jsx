class GameLogic{

itsOver(result){

    if (result === 'xxx'){
      return "Game over ... crosses won!" 
    } else {
      return "Game over ... noughts won!"
    }
}


checkForWinner(squares){
      var topRow = squares[0] + squares[1] + squares[2];
      if(topRow.match(/xxx|ooo/)){
        return this.itsOver(topRow)     
        }
      var middleRow = squares[3] + squares[4] + squares[5];
      if(middleRow.match(/xxx|ooo/)){
       return this.itsOver(middleRow)
      }
      var bottomRow = squares[6] + squares[7] + squares[8];
      if(bottomRow.match(/xxx|ooo/)){
        return this.itsOver(bottomRow)
      }
      var leftCol = squares[0] + squares[3] + squares[6];
      if(leftCol.match(/xxx|ooo/)){
          return this.itsOver(leftCol)
      }
      var middleCol = squares[1] + squares[4] + squares[7];
      if(middleCol.match(/xxx|ooo/)){
         return this.itsOver(middleCol)
      }
      var rightCol = squares[2] + squares[5] + squares[8];
      if(rightCol.match(/xxx|ooo/)){
          return this.itsOver(rightCol)
      }
      var leftDiag = squares[0] + squares[4] + squares[8];
      if(leftDiag.match(/xxx|ooo/)){
       return this.itsOver(leftDiag)
      }
      var rightDiag = squares[2] + squares[4] + squares[6];
      if(rightDiag.match(/xxx|ooo/)){
         return this.itsOver(rightDiag)
      }
    
    }

  }

  export default GameLogic




 