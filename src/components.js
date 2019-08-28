import React from 'react';

export default function Tile(props) {
    const cName = "Tile " + props.player;
    return <div className={cName} onClick={props.handleClick}></div>;
}
