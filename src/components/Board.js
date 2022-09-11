import React from "react";
import Cell from "./Cell";

const style = {
    border: '5px solid lightblue',
    width: '400px',
    height: '400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

const Board = ({cells, onClick}) => {
    return (<>
            <h1 style={{textAlign: 'center'}}>Tic Tac Toe</h1>
            <div style={style}>
                <Cell value={1} onClick={() => onClick()}/>
                <Cell value={2} onClick={() => onClick()}/>
                <Cell value={3} onClick={() => onClick()}/>
                <Cell value={4} onClick={() => onClick()}/>
                <Cell value={5} onClick={() => onClick()}/>
                <Cell value={6} onClick={() => onClick()}/>
                <Cell value={7} onClick={() => onClick()}/>
                <Cell value={8} onClick={() => onClick()}/>
                <Cell value={9} onClick={() => onClick()}/>
            </div>
        </>
    )
}

export default Board;