  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// creates array of cells from the HTML file with the tag 'td'
let cellArray = document.getElementsByTagName('td')
// These are just here to have a max and min for the random number I'll be using.
let firstCell = 0
let lastCell = cellArray.length - 1
//Random number generator shamelessly stolen from Javascript cafe
function getRandomNum (min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
  return Math.floor(Math.random() * (max-min + 1)) + min;
}
// Gets random cell from the cellArray
let randomCell = cellArray[getRandomNum(firstCell, lastCell)]

// creates a new <img> element in the HTML with id='mole and src='./mole.png'
let mole = document.createElement('img')
mole.src = "./mole.PNG"
mole.id = "mole"

// attaches the above properties to the randomCell
randomCell.appendChild(mole)
//creates an onclick event attached to mole(so the image of the mole in the randomCell)
// that calls the function whatDaMole
mole.onclick = whackDaMole

// Changes what cell is being assigned with randomCell, and moves the mole variable
function whackDaMole (){
  randomCell = cellArray[getRandomNum(firstCell, lastCell)]
  randomCell.appendChild(mole)
// plays the whack audio file
  var audio = new Audio('./whack-audio.wav');
audio.play();
console.log('MOLE')
}

//HELPING MEI WITH HER CODE :D

// let table = document.getElementById('table')
// let cellsArray = []
// for (let i = 0; i < table.rows.length; i++) {
//   for(let j = 0; j < table.rows[i].cells.length; j++){
//     cellsArray.push(table.rows[i].cells[j])
//   }
// }

// function toGetRandomNum(){
//   let randomNumber = Math.floor(Math.random()*100);
//   while (randomNumber > 25) {
//     randomNumber = Math.floor(Math.random()*100);
//   } 
//   return randomNumber
// }
// let randomIndex = toGetRandomNum()
// let randomCell = cellsArray[randomIndex]

// console.log(randomCell)
// console.log()
// console.log("Whack-a-Mole!")

