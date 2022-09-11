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

const Board = ({ cells, onClick }) => {
    return ( <>
            <h1 style={{textAlign: 'center'}}>Tic Tac Toe</h1>
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