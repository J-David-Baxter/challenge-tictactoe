import React, { useState } from "react";
import { calculateOutcome, findEmptyCells, generateRandomNumber, isArrayEmpty, isArrayFull } from "../utils";
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
    const [singlePlayer, setSinglePlayer] = useState(false);
    const isBoardEmpty = isArrayEmpty(board);

    const handleClick = (i) => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
        if (singlePlayer === true && calculateOutcome(boardCopy) === null) {
            setTimeout(() => {
                let emptyCells = findEmptyCells(boardCopy);
                let randomIndex = generateRandomNumber(0, emptyCells.length-1);
                boardCopy[emptyCells[randomIndex]] = 'O';
                setBoard(boardCopy);
                setXIsNext(true);
            }, 1000);
        }
    }

    const resetGame = () => {
        return <button style={buttonStyle} onClick={() => setBoard(Array(9).fill(null), setXIsNext(true))}>Reset Game</button>
    }

    const selectSinglePlayer = () => {
        setSinglePlayer(true);
    }

    const selectTwoPlayer = () => {
        setSinglePlayer(false);
    }
    
    return (
        <>
            <Board cells={board} onClick={handleClick} 
                singlePlayer={singlePlayer} 
                selectSinglePlayer={selectSinglePlayer} 
                selectTwoPlayer={selectTwoPlayer}
                isBoardEmpty={isBoardEmpty}
            />
            <div style={style}>
                <p style={style}>
                    {
                        isArrayFull(board) && !winner ? "It's a draw!" 
                        :
                        winner ? `${winner} Wins!` : `Current Player: ${xIsNext ? 'X' : 'O'}`
                    }
                </p>
                {resetGame()}
            </div>
        </>
    )
}

export default Game;