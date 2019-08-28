import React from 'react';
import { main, renderGame, getNumberOfGames } from './logic.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [[0,0,0], [0,0,0], [0,0,0]],
      player1Score: 0,
      player2Score: 0
    };
    this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(main);
  }

  render() {
    return (
      <div className="App">
        {renderGame(this.state.tiles, this.handleClick)}
        <div className="Stats">
          <p>Player #1: {this.state.player1Score}</p>
          <p>Player #2: {this.state.player2Score}</p>
          <p>Games total: {getNumberOfGames(this.state.player1Score, this.state.player2Score)}</p>
        </div>
      </div>
    );
  }
}

export default App;
