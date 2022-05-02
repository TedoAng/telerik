let input = [2];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============

let token = +gets();
let n = 1;
let h = 2;

for (let i = 0; i < token; i++) {
  print(i);
  for (let j = 0; j < token; j++) {
    print(j);
  }
}
