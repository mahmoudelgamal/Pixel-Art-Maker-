// // Select color input
// // Select size input

// // When size is submitted by the user, call makeGrid()

// function makeGrid() {
//   // Your code goes here!
// }

const sizePicker = document.querySelector('#sizePicker');
const pixelCanvas = document.querySelector('#pixelCanvas');
// const quickFill = document.querySelector('.quick-fill');
// const eraseMode = document.querySelector('.erase-mode');
// const drawMode = document.querySelector('.draw-mode');

function makeGrid() {
  let gridHeight = document.querySelector('#inputHeight').value;
  let gridWidth = document.querySelector('#inputWidth').value;
  // If grid already present, clears any cells that have been filled in
  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
  }
  // Creates rows and cells
  for (let i = 1; i <= gridHeight; i++) {
    let gridRow = document.createElement('tr');
    pixelCanvas.appendChild(gridRow);
    for (let j = 1; j <= gridWidth; j++) {
      let gridCell = document.createElement('td');
      gridRow.appendChild(gridCell);
      // Fills in cell with selected color upon mouse press ('mousedown', unlike 'click', doesn't also require release of mouse button)
      gridCell.addEventListener('mousedown', function () {
        const color = document.querySelector('#colorPicker').value;
        this.style.backgroundColor = color;
      })
    }
  }
}

makeGrid(12, 12);

sizePicker.addEventListener('submit', function (e) {
  console.log('knj')
  e.preventDefault();
  makeGrid();
});

// DRAGGING Enables color dragging with selected color 
let down = false; // Tracks whether or not mouse pointer is pressed

// Listens for mouse pointer press and release on grid. Changes value to true when pressed, but sets it back to false as soon as released
pixelCanvas.addEventListener('mousedown', function (e) {
  down = true;
  pixelCanvas.addEventListener('mouseup', function () {
    down = false;
  });
  // Ensures cells won't be colored if grid is left while pointer is held down
  pixelCanvas.addEventListener('mouseleave', function () {
    down = false;
  });

  pixelCanvas.addEventListener('mouseover', function (e) {
    const color = document.querySelector('#colorPicker').value;
    if (down) {
      if (e.target.tagName === 'TD') {
        e.target.style.backgroundColor = color;
      }
    }
  });
});