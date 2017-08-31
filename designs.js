// Select color input
let color = document.getElementById("colorPicker");
console.log(color.value);

// Select size input
let height = document.getElementById("input_height");
console.log(height.value);
let width = document.getElementById("input_width");
console.log(width.value);

// Select canvas
let canvas = document.getElementById("pixel_canvas");
console.log(canvas);

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
    for (let r=0; r<height.value; r++){
        // create tr
        let tr = document.createElement("tr");
        console.log (tr);
        for (let c=0; c<width.value; c++){
            console.log(`row ${r} column ${c}`);
            // create td
            let td = document.createElement("td");
            console.log(td);
            // append to document
        }
    }
}
