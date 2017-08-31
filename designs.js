// Select inputs
let canvas = document.getElementById("pixel_canvas");
let height = document.getElementById("input_height");
let width = document.getElementById("input_width");
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");

color.addEventListener("click", function(){console.log("color clicked");});

// When size is submitted by the user, call makeGrid()
// http://mycodingtricks.com/javascript/submit-form-using-javascript-ajax/
sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};

function makeGrid() {
    for (let r=0; r<height.value; r++){
        let tr = document.createElement("tr");
        canvas.appendChild(tr);
        for (let c=0; c<width.value; c++){
            let td = document.createElement("td");
            tr.appendChild(td);
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

// Fill a square with the current color
function fillSquare(){
    this.setAttribute("style", `background-color: ${color.value}`);
}
