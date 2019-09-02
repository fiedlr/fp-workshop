import React from 'react'
import Tile from './components'

const getNumberOfGames = () => 0 

const renderGame = (tiles, handleClick) => <div className="Game"></div> 

/* 
state = {
    tiles: [[0,0,0], [0,0,0], [0,0,0]], // 0 stands for not set yet, 1 for player 1 (X), 2 for player 2 (O)
    player1Score: 0,
    player2Score: 0
}
*/
const main = (state, _) => state

export {main, renderGame, getNumberOfGames}
