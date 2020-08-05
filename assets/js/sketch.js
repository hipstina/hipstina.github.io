// Sketch forked & adapted from https://editor.p5js.org/narrowdesign/sketches/s54BC2Lk
// Rules:
// All dot start at the center of their cell and point to the mouse cursor
// The closer to the cursor a cell is, the closer the grid dot moves toward cursor

function setup() {
  size = Math.min(window.innerWidth, window.innerHeight);
  createCanvas(window.innerWidth, window.innerHeight);

  
  
  
}

function draw() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  
  numCols = 14; // how many columns?
  numRows = 10; // how many rows?
  // colorBase = 30;
  radius = 25;

  cellW = canvas.width / 2 / numCols; // width of each cell
  cellH = canvas.height / 2 / numRows; // height of each cell
  lineW = cellW / 2;
  lineH = cellH / 2;
  for (let col = 0; col < numCols; col++) {
    // do this once for every column
    for (let row = 0; row < numRows; row++) {
      // do this once for every row
      cellX = col * cellW;
      cellY = row * cellH;
      cellCenterX = cellX + lineW / 2;
      cellCenterY = cellY + lineH / 2;
      diffX = cellCenterX - mouseX;
      diffY = cellCenterY - mouseY;
      angle = atan2(diffY, diffX);
      endX = cellCenterX - cos(angle) * lineW;
      endY = cellCenterY - sin(angle) * lineH;

      // the line in the active cell is only as long as the distance to the cursor
      if (Math.abs(diffX) < lineW && Math.abs(diffY) < lineH) {
        endX = cellCenterX - diffX;
        endY = cellCenterY - diffY;
      }

      // 1) draw a box around the cell

      stroke('#EDF67D');
      fill("#EDF67D");
      rect(cellX, cellY, cellW, cellH);

      // 2) draw lines from the center of the cell in the direction of the mouse
      stroke("#bdcb0e");
      strokeWeight(7);
      line(endX, endY, endX, endY);
    }
  }

  //cursor behavior
  noStroke();
  fill("rgb(237, 34, 93)");
  circle(mouseX, mouseY, radius, radius);
}

