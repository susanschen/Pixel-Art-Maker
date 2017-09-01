let canvas = document.getElementById("pixel_canvas");
let height = document.getElementById("input_height");
let width = document.getElementById("input_width");
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");

color.addEventListener("click", function(){});

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
// alternative code:
// const row = canvas.insertRow(i);
// const cell = row.insertCell(j);

function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}
// alternative code:
// while (table.rows.length > 0) {
//  table.deleteRow(0);
// }

function fillSquare(){
    this.setAttribute("style", `background-color: ${color.value}`);
}
