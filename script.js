var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
  for(var i = 0; i < modeButton.length; i++){
  modeButton[i].addEventListener("click" , function() {
    modeButton[0].classList.remove("selected");
    modeButton[1].classList.remove("selected");
    this.classList.add("selected");
    
    this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    //if(this.textContent === "Easy") {
    //  numSquares = 3;
    //} else {
    //  numSquares = 6;
    //}
    
    reset();
    // figure out how many squares to show
    // pick new colors
    // pick a new pickedColor
    // update page to reflect changes
  });
}
  
  for(var i = 0; i < squares.length; i++) {
  
  // add click listeners to squares
    squares[i].addEventListener("click" , function() {
    
    // grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    
    // compare color to pickedColor
    if(clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      }
    else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  });
 }
 reset();
}




function reset() {
  // generate all new colors
  colors = generateRandomColors(numSquares);
  
  // pick a new random color from Array
  pickedColor = pickColor();
  
  // change color display to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  
  // change colors of squares
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else {
      squares[i].style.display = "none";
    }
    
    
  }
  h1.style.backgroundColor = "steelblue";
  
  messageDisplay.textContent = "";
}


//easyBtn.addEventListener("click" , function() {
//  hardBtn.classList.remove("selected");
//  easyBtn.classList.add("selected");
//  numSquares = 3;
//  colors = generateRandomColors(numSquares);
//  pickedColor = pickColor();
//  colorDisplay.textContent = pickedColor;
//  for(var i = 0; i < squares.length; i++) {
//    if(colors[i]){
//      squares[i].style.backgroundColor = colors[i];
//    } else {
//      squares[i].style.display = "none";
//    }
//  }
//});

//hardBtn.addEventListener("click" , function() {
//  hardBtn.classList.add("selected");
//  easyBtn.classList.remove("selected");
//  numSquares = 6;
//  colors = generateRandomColors(numSquares);
//  pickedColor = pickColor();
///  colorDisplay.textContent = pickedColor;
//  for(var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//      squares[i].style.display = "block";
//    }
//});


resetButton.addEventListener("click" , reset);


              
function changeColors(color) {
  
  // loop through all squares
  for(var i = 0; i < squares.length ; i++) {
    // change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}


function generateRandomColors(num) {
  // make an Array
  var arr = [];
  
  // add num random colors to Array
  for (var i = 0 ; i < num; i++){
    
    // get random color and push it into array.
    arr.push(randomColor());
    
  } 
  // return that array
  return arr;
  
}


function randomColor() {
  // pick a red from 0 to 255
  var r = Math.floor(Math.random() * 256);
  
  // green
  var g = Math.floor(Math.random() * 256);
  
  // blue
  var b = Math.floor(Math.random() * 256);
  
  return "rgb(" + r + ", " + g + ", " + b + ")";
}