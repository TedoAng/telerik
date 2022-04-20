let input = [-2, 0, 3];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============

let firstNumber = Number(gets());
let secondNumber = Number(gets());
let thirdNumber = Number(gets());

let sum = firstNumber + secondNumber + thirdNumber;
print(sum);
