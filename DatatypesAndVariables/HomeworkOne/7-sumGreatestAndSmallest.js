let input = [2, 1, 3];

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

let greatest = Math.max(a, b, c);
let smallest = Math.min(a, b, c);

print(greatest + smallest);
