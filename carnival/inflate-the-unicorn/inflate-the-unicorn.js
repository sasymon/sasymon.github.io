  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //


// Gets an array of all the images the class 'inflate-an-image'
let unicornArray = document.getElementsByClassName('inflate-an-image')

// I tried to set the default images to unicorn-0, but It never seemed to work on its own.
// for (let i=0; i < unicornArray,length; i++){
//   unicornArray[i].src = '../images/unicorn-0.png'
// }

// This loop attaches the onclick event to each object in the array with the 
// array index/interation cycle in the inflateTheUnicorn parameter i.e 0, 1, 2.
for (let i=0; i < unicornArray.length; i++) {
  unicornArray[i].onclick = function () {inflateTheUnicorn(i)} 
}
// this does the same as above, except for the deflateTheUnicorn function
// and right clicking aka contextmenu
for (let i=0; i < unicornArray.length; i++) {
  unicornArray[i].oncontextmenu = function () {deflateTheUnicorn(i)} 
}
// An array keeping track of what image is being displayed. The index correlates with 
// the unicornArray index, I'd like to directly link them.
 let unicornImg = [0, 0, 0]


// When each image is clicked this function is run with that images index number 
// from unicornArray. That index number is the same index number in unicornImg
// to track what image its on.
function inflateTheUnicorn(num){
  if (unicornImg[num] != 3){
    unicornImg[num]++
    unicornArray[num].src = `./images/unicorn-${unicornImg[num]}.png`  
  }
  else {
    return alert (`You did it! Unicorn ${num + 1} thanks you!`)
  }
}
// still get context menu, don't know where to put preventDefault.
function deflateTheUnicorn(num){
  if (unicornImg[num] > 0){
    unicornImg[num]--
    unicornArray[num].src = `./images/unicorn-${unicornImg[num]}.png`
  }
  else {
    return alert (`Stop! Stoooop! They've nothing left to give!'`)
  }
}  
console.log("Inflate The Unicorn!")


