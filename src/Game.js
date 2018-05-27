import React, { Component } from 'react';
import Broad from './Broad';
import './game.css';
class Game extends Component {
  render() {
    return(
      <div className="game">
        <div className="game-board">
          <Broad />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}
export default Game;