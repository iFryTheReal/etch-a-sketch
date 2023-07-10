function makeGrid(size) {
  const canvas = document.getElementById("canvas");

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
}

makeGrid(50);

let penColor = "#000000";
let isDown = false;

const colorPicker = document.getElementById("color");
const cells = document.getElementsByClassName("cell");

window.addEventListener("mousedown", (e) => (isDown = true));
window.addEventListener("mouseup", () => (isDown = false));

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

colorPicker.addEventListener("change", (e) => {
  penColor = e.target.value;
});
