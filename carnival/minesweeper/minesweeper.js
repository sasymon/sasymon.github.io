document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
//Generate a new board
 
var board = {}

function createBoard() {  
  let num = 6
  let newBoard = {
    cells: []}
  for (i = 0; i < num; i++) {
    for (j = 0; j < num; j++){
      addCell = {
        row: i,
        col: j,
        isMine: Math.floor(Math.random() * 1.4),
        hidden: true
        }
        newBoard.cells.push(addCell)  
    }  
  }  
  board = newBoard  
}

// Add button to reset the board
let resetButton = document.createElement('button')
let resetText = document.createTextNode('Reset')
resetButton.appendChild(resetText)
document.body.appendChild(resetButton)
resetButton.id = 'reset'
resetButton.style.textAlign = 'left'
console.log(resetButton)

// Add different sizes for the board


function startGame () {
  createBoard()
  // Don't remove this function call: it makes the game work!
  for (let i = 0; i < board.cells.length; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
  lib.initBoard()
  
  document.getElementById('reset').addEventListener('click', reset => {window.location.reload()})
  document.addEventListener('contextmenu', checkForWin)
  document.addEventListener('click', checkForWin)
}


// // Define this function to look for a win condition:
// //
// // 1. Are all of the cells that are NOT mines visible?
// // 2. Are all of the mines marked?

function checkForWin () {
  let cellTotal = 0
  board.cells.forEach(cell => {
    if (cell.isMarked == true && cell.isMine == true) {
    cellTotal++
    } 
   else if (cell.hidden ==!true && cell.isMine == !true){
    cellTotal++
    }
   if (cellTotal == board.cells.length){
   return lib.displayMessage('You win!')    
    }
  })
}
  
  


//   // You can use this function call to declare a winner (once you've
//   // detected that they've won, that is!)

// lib.displayMessage('You win!')


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
// var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
    for (let i = 0; i < surrounding.length; i++){
      if (surrounding[i].isMine == true){
      count++;
      }
    }
  return count;
}