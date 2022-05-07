let input = [5, -4];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============

let n = +gets();
let x = +gets();
let fact = 1;
let count = 1;
// S = 1 + 1!/x + 2!/x2 + … + N!/xN
let final = 0;

while (n > 0) {
  fact *= count;
  final += fact / Math.pow(x, count);
  count++;

  n--;
}

final += 1;
print(final.toFixed(5));
