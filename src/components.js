import React from 'react';

export default function Tile(props) {
    const cName = "Tile p" + props.player;

    let playerString = "";
    if (props.player) {
        playerString = props.player === 1 ? 'X' : 'O';
    }

    return <div className={cName} onClick={props.onClick}>{playerString}</div>;
}
