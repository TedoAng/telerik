let input = [3, 2.5, 1.25, 3];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let start = +gets();
let sum = 0;

for (let i = 0; i < start; i++) {
  let numb = +gets();

  sum += numb;
}
let result = sum / start;

print(result.toFixed(2));
