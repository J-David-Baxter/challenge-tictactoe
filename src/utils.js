export const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

export function calculateOutcome(cells) {
    for (let i = 0; i < wins.length; i++) {
        const [a, b, c] = wins[i];
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return cells[a];
        }
    }
    if (isArrayFull(cells)) {
        return "tie";
    }
    return null;
}

export function winningMove(cells) {
    for (let i = 0; i < wins.length; i++) {
        const [a, b, c] = wins[i];
        if ((cells[a] === "O" && cells[b] === "O" && cells[c] === null) || (cells[b] === "O" && cells[c] === "O" && cells[a] === null) || 
        (cells[a] === "O" && cells[b] === null && cells[c] === "O")) {
            let winningCells = wins[i];
            for (let i = 0; i < winningCells.length; i++) {
                if (cells[winningCells[i]] === null) {
                    return winningCells[i];
                }
                    
                }
        }
    }
    return null;
}

export function blockingMove(cells) {
    for (let i = 0; i < wins.length; i++) {
        const [a, b, c] = wins[i];
        if ((cells[a] === "X" && cells[b] === "X" && cells[c] === null) || (cells[b] === "X" && cells[c] === "X" && cells[a] === null) || 
        (cells[a] === "X" && cells[b] === null && cells[c] === "X")) {
            let blockingCells = wins[i];
            for (let i = 0; i < blockingCells.length; i++) {
                if (cells[blockingCells[i]] === null) {
                    return blockingCells[i];
                }
                    
                }
        }
    }
    return null;
}

export function findEmptyCells(arr) {
    const arrIndexes = Object.keys(arr);
    const emptyIndexes = arrIndexes.filter(index => arr[index] === null);
    return emptyIndexes;
}

export function generateRandomNumber(lower, upper) {
    return Math.floor(Math.random() * (upper + 1 - lower) + lower);
}

export function isArrayEmpty(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== null) {
            return false;
        }
    }
    return true;
}

export function isArrayFull(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === null) {
            return false;
        }
    }
    return true;
}