function makeGrid(size) {
  const canvas = document.getElementById("canvas");

  const rowModel = document.createElement("div");
  rowModel.classList.add("row");

  const cellModel = document.createElement("div");
  cellModel.classList.add("cell");

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

makeGrid(5);
