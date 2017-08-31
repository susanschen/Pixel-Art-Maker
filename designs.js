// Select color input
let color = document.getElementById("colorPicker");
console.log(color.value);

// Select size input
let height = document.getElementById("input_height");
console.log(height.value);
let width = document.getElementById("input_width");
console.log(width.value);

// When size is submitted by the user, call makeGrid()
let sizePicker = document.getElementById("sizePicker");
console.log(sizePicker);

// Submit form using javascript
// http://mycodingtricks.com/javascript/submit-form-using-javascript-ajax/
sizePicker.onsubmit = function(event){
    event.preventDefault();
    console.log("submit");
    makeGrid();
}

function makeGrid() {
    console.log("grid");
}
