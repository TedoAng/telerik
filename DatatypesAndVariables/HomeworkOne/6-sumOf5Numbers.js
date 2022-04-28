//let input = [1, 2, 3, 4, 5];
let input = [10, 10, 10, 10, 10];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============

let a = +gets();
let b = +gets();
let c = +gets();
let d = +gets();
let e = +gets();

print(a + b + c + d + e);
