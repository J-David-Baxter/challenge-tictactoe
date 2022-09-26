export function calculateOutcome(cells) {
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < wins.length; i++) {
        const [a, b, c] = wins[i];
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return cells[a];
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