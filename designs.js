// Select color input

// Select size input
let height = document.getElementById("input_height");
console.log(height.value);
let width = document.getElementById("input_width");
console.log(width.value);

// When size is submitted by the user, call makeGrid()
let submitType = document.getElementsByTagName("input")[2];
console.log(submitType);
submitType.addEventListener("click", makeGrid);

function makeGrid() {

// Your code goes here!
    console.log("grid");

}
