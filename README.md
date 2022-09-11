# Kenzie Academy Challenge: Tic-Tac-Toe

Follow the instructions provided on my.kenzie.academy for this challenge. The `code.js` file is a placeholder. Feel free to rename it add additional files to the project.

Customize this README.md however you want to turn it into documentation for your project (including deleting these opening paragraphs). The only required sections are the **Project Plan** and **Reflection** below. Be sure to use proper Markdown syntax in this file (here's a [cheatsheet PDF](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) of the basic syntax).

## Project Plan

1. The game will be created using React
2. Create three components: Board, Game, and Cell
3. The Game component will hold the entire game, the Board component will keep track of the board, and the Cell component will keep track of each individual cell on the board
4. The Cell component renders a button with a value and an onClick function
 - The value and onClick function are both props
 - The value will be the contents of the Cell, the onClick function will place either an X or an O into the Cell when it's clicked on
5. The Board renders 9 Cell components and passes each one the value and onClick props
 - The Board component has two props, an array of Cells and an onClick function from the Game component
 - The Board needs to style the 9 Cells into a 3x3 grid using CSS grid or flex-box
 - Additional styling is whatever you want
6. Create a calculateOutcome function in a separate file called utils
 - The function uses a 2-D array to hold 8 arrays of 3 cells in a row (all 8 of the possible winning moves in tic-tac-toe)
 - The funcion then loops through this array and checks to see if the current state of the board has any winning moves that match one of the winning move arrays
 - If a winning move is found, the winning character (X or O) is returned, otherwise we return null since nobody has won yet
7. The Game component houses the value and onClick props being passed down to Board and Cell, as well as the state of the Board and Cells
 - Make three states: a board set to an initial state of an array of nine values all set to null,
                      an xIsNext set to an intial state of true to keep track of whose turn it is,
                      a winner variable that passes the current board state to the calculateOutcome function
 - Make a handleClick function that checks for a current winner in state or if the currently clicked cell has a value
  - If it does, the function should do nothing
  - Otherwise, check the current player turn in state and fill the cell with that player's character (X or O)
  - Set the new board state and set the player turn to the opposite of whatever it currently is to switch turns
 - Make a resetGame function that return a button
  - The button should reset the game board in state to all null values and set the current player to X
8. Add JSX to the Game component that displays the winner if there is one, or the current player if there's no current winner in state
9. Render the resetGame function in the JSX to render the reset button to the page
## Reflection

What different approaches or techniques did you consider when planning your implementation? What were the advantages and disadvantages of those alternatives?

_(Put your reflection answer here.)_