const sizePicker = document.getElementById('sizePicker');
// Select color input
const color = document.getElementById('colorPicker');
// Select size input
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const table = document.getElementById('pixelCanvas');

//function that appends rows and cells based on user input of height and width
function makeGrid() {

    table.innerHTML = '';

    for (let i = 0; i < height.value; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < width.value; j++) {
            let col = row.insertCell(j);
            col.addEventListener('click', function(action) {
                action.target.style.backgroundColor = color.value;
            });
        }
    }

}
sizePicker.addEventListener('submit', function(action) {
  action.preventDefault();
  makeGrid();
});
