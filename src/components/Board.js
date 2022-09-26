import React from "react";
import Cell from "./Cell";

const style = {
    border: '2px solid black',
    width: '400px',
    height: '400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

const buttonStyle = {
    padding: '15px',
    margin: '10px',
    borderRadius: '10px'
}

const Board = ({ cells, onClick, singlePlayer, selectSinglePlayer, selectTwoPlayer, isBoardEmpty }) => {
    return ( <>
            <h1 style={{textAlign: 'center'}}>Tic Tac Toe</h1>
            <div style={{textAlign: 'center', margin: '10px'}}>
                <button style={buttonStyle} onClick={selectSinglePlayer} disabled={isBoardEmpty ? false: true}>Single Player</button>
                <button style={buttonStyle} onClick={selectTwoPlayer} disabled={isBoardEmpty ? false: true}>Two-Player</button>
                {singlePlayer === true ? <p>Single Player Mode</p> : <p>Two Player Mode</p>}
            </div>
            <div style={style}>
                {
                cells.map((cell, i) => (
                    <Cell key={i} value={cell} onClick={() => onClick(i)} />
                ))
                }
            </div>
        </>
    )
}

export default Board;