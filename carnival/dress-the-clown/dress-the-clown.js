  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//Arrow key events
document.addEventListener('keydown', pressed => {
  pressed.preventDefault()
  if (pressed.key === 'ArrowRight')
    increaseClothing(document.getElementById(bodySection[sectionIndex]))
  else if (pressed.key === 'ArrowLeft')  
    decreaseClothing(document.getElementById(bodySection[sectionIndex]))
  else if (pressed.key === 'ArrowUp'){
    changeSectionUp()
    // highlightSection()
  } 
  else if (pressed.key === 'ArrowDown')
    changeSectionDown()
})

// 
let clothingArrayIndex = {
  shoes:[0, 1, 2, 3, 4, 5],
  body:[0, 1, 2, 3, 4, 5],
  head:[0, 1, 2, 3, 4, 5]}
let bodySection = ['shoes', 'body', 'head'];
let sectionIndex = (bodySection.length - 1);
let currentItem = [0, 0, 0] // [shoes, body, head]



// Cycle upwards through clothing items
function increaseClothing(bodyPart){
  if (currentItem[sectionIndex] === (clothingArrayIndex[bodySection[sectionIndex]].length - 1)){
    currentItem[sectionIndex] = 0
    bodyPart.src=`./images/${bodySection[sectionIndex]}${currentItem[sectionIndex]}.png`
  } else {
    currentItem[sectionIndex]++;
   bodyPart.src=`./images/${bodySection[sectionIndex]}${currentItem[sectionIndex]}.png`
  }
}


// Cycle downwards through clothing items
function decreaseClothing(bodyPart){
  if (currentItem[sectionIndex] === 0){
    currentItem[sectionIndex] = (clothingArrayIndex[bodySection[sectionIndex]].length - 1)
    bodyPart.src=`./images/${bodySection[sectionIndex]}${currentItem[sectionIndex]}.png`
  } else {
    currentItem[sectionIndex]--;
   bodyPart.src=`./images/${bodySection[sectionIndex]}${currentItem[sectionIndex]}.png`
  }
}

// Cycle upwards through clothing sections
function changeSectionUp(){
  if (sectionIndex === bodySection.length - 1){
    sectionIndex = 0
  }else {
    sectionIndex++
  }
}

// Cycline downwards through clothing sections

function changeSectionDown(){
  if (sectionIndex === 0) {
    sectionIndex = (bodySection.length - 1)
  }else {
    sectionIndex--
  }
}

// console.log("Dress The Clown!")

