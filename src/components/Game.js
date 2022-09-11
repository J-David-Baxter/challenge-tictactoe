import React, { useState } from "react";
import { calculateOutcome } from "../utils";
import Board from "./Board";

const style = {
    width: '200px',
    margin: '20px auto',
    textAlign: 'center',
}

const buttonStyle = {
    padding: '30px',
    fontsize: '30px',
    borderRadius: '10px',
    backgroundColor: 'lightblue',
    cursor: 'pointer'
}

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateOutcome(board);

    const handleClick = (i) => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }

    const resetGame = () => {
        return <button style={buttonStyle} onClick={() => setBoard(Array(9).fill(null), setXIsNext(true))}>Reset Game</button>
    }
    
    return (
        <>
            <Board cells={board} onClick={handleClick}/>
            <div style={style}>
                <p style={style}>
                    {
                        winner ? `${winner} Wins!` : `Current Player: ${xIsNext ? 'X' : 'O'}`
                    }
                </p>
                {resetGame()}
            </div>
        </>
    )
}

export default Game;