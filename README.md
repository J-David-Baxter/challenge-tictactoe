# Kenzie Academy Challenge: Tic-Tac-Toe

Follow the instructions provided on my.kenzie.academy for this challenge. The `code.js` file is a placeholder. Feel free to rename it add additional files to the project.

Customize this README.md however you want to turn it into documentation for your project (including deleting these opening paragraphs). The only required sections are the **Project Plan** and **Reflection** below. Be sure to use proper Markdown syntax in this file (here's a [cheatsheet PDF](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) of the basic syntax).

## Project Plan

Two Player Mode
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

Single Player Mode
1. Create two buttons in the Board component, single player and two player
2. Create a new state in the Game component called singlePlayer with a setSinglePlayer function and set it to false (or true if you want the default game mode to be single player)
3. Create two new functions in the Game component, selectSinglePlayer and selectTwoPlayer
 - selectSinglePlayer should set the state of singlePlayer to true
 - selectTwoPlayer shoyld set the state of singlePlayer to false
4. Prop drill the state of singlePlayer, as well as the selectSinglelayer and selectTwoPlayer into the Board component
5. Give the single player button an onClick of selectSinglePlayer, and give the two player button an onClick of selectTwoPlayer
6. Make a new paragraph element below the two buttons and display the currently selected game mode using the singlePlayer state (single player if singlePlayer is true, two player if singlePlayer is false)
 - This is NOT an optional style, the user will have no way of knowing which game mode is currently selected if this is not done
7. Make two new functions in the utils folder, findEmptyCells and generateRandomNumber
 - findEmptyCells takes an array as an argument and returns an array of all indexes that equal null in that array. Follow these steps: 
  - Create a new array of the input array indexes using Object.keys()
  - Use filter to create a new array of indexes where the input array at the given indexes is null
  - Return the new filtered array of indexes
- generateRandomNumber should take two arguments, a lower and upper bound
 - Return this result: Math.floor(Math.random() * (upper + 1 - lower) + lower). This will generate a random number from lower to upper inclusive
8. Import both new functions into the Game component
8. At the end of the handleClick function in the Game component, add the following:
 - Add an if statement that checks if singlePlayer is true and the outcome of calling calculateOutcome on the current state of board is null
 - Inside the if statement, make a new variable emptyCells that equals the outcome of calling findEmptyCells on the current boardCopy
 - Make another new variable randomIndex that equals the outcome of calling generateRandomNumber with 0 and emptyCells.length-1 as arguments
 - Set boardCopy at the randomIndex index of the emptyCells array to O
 - Set board to the current boardCopy
 - Set xIsNext to true (the computer will always play as O and the human player will always play as X)
 - Note: Make sure the if condition is checking calculateOutcome(boardCopy) and not winner === null. Using winner === null will cause the computer to play an extra move after a win!
9. As an optional (but recommended) QOL improvement, you can wrap the new functionality inside the if statement in a setTimeout with a delay of 1000ms. This will give the appearance of the computer taking some time to "think" about its move for 1 second. The human player's move and the computer's move will happen simultaneously if you don't do this.
10. Another optional QOL is to disable game mode buttons if the board isn't empty
 - Create a new function in utils isArrayEmpty that takes an array as an argument
  - Check each index of the array and return false if any index is not null, otherwise return true
- Import the isArrayEmpty into the Game component
- Create a new variable inside the Game component called isBoardEmpty and set it equal to IsArrayEmpty with board as the argument
- Pass isBoardEmpty as a prop to the Board component
- In the game mode buttons, set the disabled property to true if isBoardEmpty is false
11. (I forgot to handle ties) Handling ties:
 - Create a new function in utils isArrayFull
  - Check each index, if any are null return false, otherwise return true
 - Import the new function into the Game component
 - In the existing ternary in the JSX of the Game component, make another ternary that displays "It's a draw!" if isArrayFull(board) is true and there is no current winner, otherwise display the existing ternary expression (displays the winner or the current player's turn)
## Reflection

My first thought was to implment this with vanilla JavaScript. After planning it, I realized manually making all of the elements combined with lots of conditional logic would make it a very tedious process, and it would be prone to lots of errors. I decided to use React because it made making the page easier and more straightforward. It's probably also faster since the whole page isn't reloading when a single cell is updated. The upside of using React was that the smaller quality of life improvements (delaying the computer's move, conditionally disabling buttons) were much easier to get working once the basic functonality for the game was working. State and props also made the flow of data easier to manage. I was also able to implement styles to individual parts of the page without a CSS sheet by using style variables and passing them ino the JSX elements. 

_(Put your reflection answer here.)_