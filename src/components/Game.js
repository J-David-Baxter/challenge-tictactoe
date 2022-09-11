import React, { useState } from "react";
import { calculateOutcome } from "../utils";
import Board from "./Board";

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateOutcome(board);

    const handleClick = () => {

    }

    const render = () => {

    }
    
    return (
        <div>
            <Board cells={board} onClick={handleClick}/>
        </div>
    )
}

export default Game;