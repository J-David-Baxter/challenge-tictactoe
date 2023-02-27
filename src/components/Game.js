import React, { useState, useEffect } from "react";
import { calculateOutcome, findEmptyCells, generateRandomNumber, isArrayEmpty, winningMove, blockingMove } from "../utils";
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
    const [scoreboard, setScoreboard] = useState({
        X: 0,
        O: 0,
        tie: 0,
    })

    useEffect(() => {
        if (winner === "X") {
            setScoreboard({...scoreboard, X: scoreboard.X + 1});
        } else if (winner === "O") {
            setScoreboard({...scoreboard, O: scoreboard.O + 1});
        } else if (winner === "tie") {
            setScoreboard({...scoreboard, tie: scoreboard.tie + 1});
        }
    }, [winner]);

    useEffect(() => {
        setScoreboard({X:0, O:0, tie:0});
    }, [singlePlayer])

    const handleClick = (i) => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
        if (singlePlayer === true && calculateOutcome(boardCopy) === null) {
            setTimeout(() => {
                if (winningMove(boardCopy) || winningMove(boardCopy) === 0) {
                    let winMove = winningMove(boardCopy);
                    boardCopy[winMove] = "O";
                    setBoard(boardCopy);
                    setXIsNext(true);
                } else if(blockingMove(boardCopy) || blockingMove(boardCopy) === 0) {
                    let blockMove = blockingMove(boardCopy);
                    boardCopy[blockMove] = "O";
                    setBoard(boardCopy);
                    setXIsNext(true);
                } else {
                    let emptyCells = findEmptyCells(boardCopy);
                    let randomIndex = generateRandomNumber(0, emptyCells.length-1);
                    boardCopy[emptyCells[randomIndex]] = "O";
                    setBoard(boardCopy);
                    setXIsNext(true);
                }
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
                        winner === "tie" ? "It's a draw!" 
                        :
                        winner ? `${winner} Wins!` : `Current Player: ${xIsNext ? 'X' : 'O'}`
                    }
                </p>
                {
                    singlePlayer ? <p>Player: {scoreboard.X} Computer: {scoreboard.O} Ties: {scoreboard.tie}</p>
                    :
                    <p>X Wins: {scoreboard.X} O Wins: {scoreboard.O} Ties: {scoreboard.tie}</p>
                }
                {resetGame()}
            </div>
        </>
    )
}

export default Game;