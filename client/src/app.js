import React from 'react';
import ReactDOM from 'react-dom';
import BoardContainer from './containers/BoardContainer.jsx'

window.onload = function(){
  ReactDOM.render(
    <BoardContainer/>,
    document.getElementById('app')
  );
}
