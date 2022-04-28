let input = [1, -1, -2];
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
let d = Math.pow(b, 2) - 4 * a * c; //Math.pow(number, na stepen)

let x1 = (-b - Math.sqrt(d)) / (2 * a);
let x2 = (-b + Math.sqrt(d)) / (2 * a);
//D = b2 - 4ac >= 0
//ax2 + bx + c = 0

print(`x1=${x1}; x2=${x2}`);
