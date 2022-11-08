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

## Advanced Project Plan
1. Set a state called scoreboard that starts as an object with three properties (X, O, tie) all set to 0
2. In the utils folder, modify the calculateOutcome function so that it can return the string "tie"
 - Outside the for loop inside the function, and before the return null statement, write a new if statement
  - Use the isArrayFull function to check if the current array being passed into calculateOutcome is full
  - If it is, return "tie"
3. Back in the game folder, write a useEffect that checks the current value of winner
 - If winner is "X", increase scoreboard.X by 1
 - If winner is "O", increase scoreboard.O by 1
 - If winner is "tie", increase scoreboard.tie by 1
 - Add winner to the context array of the useEffect
4. Add another useEffect that resests the scoreboard whenever the game mode changes
 - In the new useEffect, set the scoreboard so that all properties are equal to 0 again
 - Add singlePlayer to the context array
5. In the JSX, write a ternary operator beneath where the current player is displayed
 - If the current game mode is two player, display the wins for X, O, and show the ties
 - If the current game is single player, display the wins for X, label the O wins as computer wins, and show the ties

(Computer Opponent Overview)
The computer opponent needs to prioritize certain logic in order to be "smart". The order of these priorities is:
First: If there is a winning move, play it
Second: If the human player has a winning move, block it
Third: If the computer cannot win or block, it can play randomly

1. In the utils file, extract the wins array from the calculateOutcome function and put it into the global state of the utils file. This array will be used for our new functions, and we don't want to rewrite it for every function.
2. Write a new function winningMove that takes an array as a parameter
 - The function will loop over the wins array and destructure the three indexes from each inner array into a,b,c (just like in calculateOutcome)
 - For each inner array, check to see if a and b are O and c is null, a is null and b and c are O, or b is null and a and c are O
  - Note: This is checking to see if there are any winning sets of three indexes where one of the indexes is null. The null index is where O can play to win!
 - If an inner array is found, loop through it and check to see if the input array of the function at the index of the inner array is null
  - Something like this: (if inputArray[winningIndexes[i]] === null)
- Return the null index
3. Export the new function and import it into the Games file
4. Inside the setTimeout in the handleClick, add the following:
 - Check to see if winningMove(boardCopy) is truthy
 - If it is, set a variable winMove to the output of winningMove(boardCopy)
 - Set boardCopy at index winMove to "O"
 - Use setBoard() to set the board in state to boardCopy
 - set xIsNext to true
5. Back in utils, write another function blockingMove that take an array as a parameter
 - This function will be identical to winningMove, except it will be checking for X's instead of O's in the conditional
  - Note: This will check for winning moves for X, which the computer whould block
6. Export the function and import it into the Games file
7. Inside the setTimeout in the handleClick, underneath the if statement that checks for winningMove, write a new if else statement
 - If blockingMove(boardCopy) is truthy, set a variable blockMove to the output of blockingMove(boardCopy)
 - Set boardCopy at index blockingMove to "O"
 - Use setBoard() to set the board in state to boardCopy
 - Set xIsNext to true
8. Make sure the original logic for making a random play is still intact, and wrap it in an else statement (it should only run if the computer can't win or block)

## Reflection

My first thought was to implement this with vanilla JavaScript. After planning it, I realized manually making all of the elements combined with lots of conditional logic would make it a very tedious process, and it would be prone to lots of errors. I decided to use React because it made making the page easier and more straightforward. It's probably also faster since the whole page isn't reloading when a single cell is updated. The upside of using React was that the smaller quality of life improvements (delaying the computer's move, conditionally disabling buttons) were much easier to get working once the basic functonality for the game was working. State and props also made the flow of data easier to manage. I was also able to implement styles to individual parts of the page without a CSS sheet by using style variables and passing them ino the JSX elements. 

## Advanced Reflection

I chose to use useEffect for the scoreboard so that I wouldn't have to update the scoreboard conditionally after each play in the handleClick function. The state of scoreboard will change only if there is an actual outcome (a win or a tie). I also used useEffect to reset the scoreboard when the game mode changes. The original calculateOutcome function made writing the new computer game logic pretty straightforward. I just needed to check use the lookup table and look for wins where one cell was null but the other two were the same. If two of the cells are "O", then the computer sees a win and plays in the null cell. If the two cells are "X", the computer will do the same thing but block instead. I can't just check for two identical cells and one null because the computer needs to prioitize wins over blocks. The action it takes is the same whether it's winning or blocking, but it would lose a lot more often if it sometimes ignores its own winning moves just to block.

Possible Improvements and Notes:
1. The best opening move is the center cell. The computer goes second so it usually can't play there. If center cell is open on its first move, it should take it. Otherwise, it should play in one of the corners. The corners are the second-best opening moves since they give you two directions to win from. 
2. The computer could check for winning combinations from the lookup table where there is one "O" and two nulls and play in one of the null cells. This would allow it to progress towards a winning move. This situation actually ends up being rare when it's not going first though. It has to react to the human player, and if the human player is actually trying to win, the computer will always either be blocking or playing a winning move. At the end of the day, the computer can only play at most 4 moves in a single game. It will need to start blocking on its second move, and can't possibly win until its third move. It realistically should never have an opportinity to set itself up for a win two moves in the future.
3. The computer is vulnerable to "forking" (when the human player makes a move that gives them two possible wins). You can win 100% of the time if you know how to exploit this. Since the computer goes second, it can't really avoid defend itself from this tactic. You can sort of control where the computer plays since it will always block when it can't win. You can use that behavior to set up a fork. The easiest way to fix this would be to allow the computer to go first. It would also need to prioritize forking moves itself when it goes first instead of normal progressing moves. For now though, the computer always goes second.
