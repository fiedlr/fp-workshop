import React from 'react';
import { main, renderGame, getGames } from './logic.js';
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
        {renderGame(this.handleClick)}
        <div className="Stats">
          <p>Player #1: {this.player1Score}</p>
          <p>Player #2: {this.player2Score}</p>
          <p>Games total: {getGames(this.player1Score, this.player2Score)}</p>
        </div>
      </div>
    );
  }
}

export default App;
