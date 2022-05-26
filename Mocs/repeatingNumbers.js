let input = [5, 1, 2, 3, 1, 2];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============

let n = +gets();
let arr = [];

for (let i = 0; i < n; i++) {
  let numb = +gets();

  if (!arr[numb]) {
    arr[numb] = 1;
  } else {
    arr[numb]++;
  }
}

for (let i = 0; i < arr.length; i++) {
  if (isNaN(arr[i])) {
    arr[i] = 0;
  }
}

let maxVal = Math.max(...arr);

//print(arr);
//print(maxVal);
print(arr.indexOf(maxVal));

//100 pts
