let input = [4, 9.99, 19.99, 29.99, 39.99];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let items = +gets();

for (let i = 0; i < items; i++) {
  let item = +gets();
  let total = item - item * 0.65;

  print(total.toFixed(2));
}
