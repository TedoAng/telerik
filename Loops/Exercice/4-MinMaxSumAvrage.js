let input = [3, 2, 5, 1];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============

let a = +gets();
let numbers = [];
let sum = 0;

for (let i = 0; i < a; i++) {
  let b = +gets();
  sum += b;
  numbers.push(b);
}
let avg = sum / a;
print(`min=${Math.min(...numbers).toFixed(2)}`);
print(`max=${Math.max(...numbers).toFixed(2)}`);
print(`sum=${sum.toFixed(2)}`);
print(`avg=${avg.toFixed(2)}`);
