import React from 'react'
import Tile from './components'

const getNumberOfGames = player1Score => player2Score => 0

// <Tile player={0|1|2} onClick={handleClick(tileId)} />
const renderGame = tiles => handleClick => <div className="Game"></div> 

/* 
state = {
    tiles: [[0,0,0], [0,0,0], [0,0,0]], // 0 stands for not set yet, 1 for player 1 (X), 2 for player 2 (O)
    player1Score: 0,
    player2Score: 0
}
*/

// tileId: the id of the tile just clicked (can be passed through handleClick function): it's up to you how to implement it
const main = tileId => (state, _) => state

export {main, renderGame, getNumberOfGames}
