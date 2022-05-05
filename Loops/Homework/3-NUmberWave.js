let input = [6];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let number = +gets();

for (let i = 1; i <= number; i++) {
  print(i);
}
for (let k = number - 1; k > 0; k--) {
  print(k);
}
