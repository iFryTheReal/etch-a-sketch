function makeGrid(size) {
  const canvas = document.getElementById("canvas");

  canvas.replaceChildren(); // Remove all children elements (aka clear the grid)

  const rowModel = document.createElement("div");
  rowModel.classList.add("row");

  const cellModel = document.createElement("div");
  cellModel.classList.add("cell");
  cellModel.style.backgroundColor = "#ffffff";
  cellModel.dataset.lastColor = "";

  for (let index = 0; index < size; index++) {
    canvas.append(rowModel.cloneNode());
  }

  rows = document.getElementsByClassName("row");

  for (const row of rows) {
    for (let index = 0; index < size; index++) {
      row.append(cellModel.cloneNode());
    }
  }

  colorEvents();
}

function colorEvents() {
  const cells = document.getElementsByClassName("cell");

  for (const cell of cells) {
    cell.addEventListener("mouseover", (e) => {
      if (!isDown) {
        e.target.dataset.lastColor = `${e.target.style.backgroundColor}`;
        e.target.style.backgroundColor = penColor;
      } else {
        e.target.dataset.lastColor = penColor;
        e.target.style.backgroundColor = penColor;
      }
    });
    cell.addEventListener("mouseout", (e) => {
      e.target.style.backgroundColor = e.target.dataset.lastColor;
    });
    cell.addEventListener("mousedown", (e) => {
      e.preventDefault(); // To prevent cell dragging
      e.target.dataset.lastColor = penColor;
      e.target.style.backgroundColor = penColor;
    });
  }
}

let penColor = "#000000";
let isDown = false;

const colorPicker = document.getElementById("color");
const sizeInput = document.getElementById("grid-size");

window.addEventListener("mousedown", (e) => (isDown = true));
window.addEventListener("mouseup", () => (isDown = false));

// Color choice
colorPicker.addEventListener("change", (e) => {
  penColor = e.target.value;
});

// Grid size
sizeInput.addEventListener("change", (e) => makeGrid(e.target.value));

makeGrid(1);
