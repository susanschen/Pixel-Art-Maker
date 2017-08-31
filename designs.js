// Select inputs
let canvas = document.getElementById("pixel_canvas");
console.log(canvas);
let height = document.getElementById("input_height");
console.log(height.value);
let width = document.getElementById("input_width");
console.log(width.value);
let sizePicker = document.getElementById("sizePicker");
console.log(sizePicker);
let color = document.getElementById("colorPicker");
console.log(color.value);

color.addEventListener("click", function(){console.log("color clicked");});

// When size is submitted by the user, call makeGrid()
// http://mycodingtricks.com/javascript/submit-form-using-javascript-ajax/
sizePicker.onsubmit = function(event){
    event.preventDefault();
    console.log("submit");
    clearGrid();
    makeGrid();
}

function makeGrid() {
    console.log("grid");
    for (let r=0; r<height.value; r++){
        // create tr
        let tr = document.createElement("tr");
        console.log (tr);
        // append to canvas
        canvas.appendChild(tr);
        for (let c=0; c<width.value; c++){
            console.log(`row ${r} column ${c}`);
            // create td
            let td = document.createElement("td");
            console.log(td);
            // append to tr
            tr.appendChild(td);
            // Add eventlistener to each td
            td.addEventListener("click", fillSquare);
        }
    }
}

// https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}

// Fill a square with the selected color
function fillSquare(){
    console.log(`filling square with ${color.value}`);
    // Set background color
    this.setAttribute("style", `background-color: ${color.value}`);
    // Append to td
}
