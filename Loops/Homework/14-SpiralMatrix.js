let input = [4];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let n = +gets();

let spiralMatrix = [];

for (let i = 0; i < n; i++) {
  spiralMatrix[i] = [];
}

let counter = 1;
let startCol = 0;
let endCol = n - 1;
let startRow = 0;
let endRow = n - 1;

while (startCol <= endCol && startRow <= endRow) {
  for (let i = startCol; i <= endCol; i++) {
    spiralMatrix[startRow][i] = counter;
    counter++;
  }

  startRow++;
  for (let i = startRow; i <= endRow; i++) {
    spiralMatrix[i][endCol] = counter;
    counter++;
  }
  endCol--;
  for (let i = endCol; i >= startCol; i--) {
    spiralMatrix[endRow][i] = counter;
    counter++;
  }
  endRow--;
  for (let i = endRow; i >= startRow; i--) {
    spiralMatrix[i][startCol] = counter;
    counter++;
  }
  startCol++;
}

for (let i = 0; i < n; i++) {
  let output = "";
  output += spiralMatrix[i].join(" ");
  print(output);
}
