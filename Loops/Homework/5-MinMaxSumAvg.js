let input = [2, -1, 4];
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

let with2Decimals = avg.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];

print(`min=${Math.min(...numbers)}`);
print(`max=${Math.max(...numbers)}`);
print(`sum=${sum}`);
print(`avg=${with2Decimals}`);
