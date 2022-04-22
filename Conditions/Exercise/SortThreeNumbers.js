//let input = [1, 2, 3, 4, 5];
let input = [0, 0, 0];
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

let one = 0;
let two = 0;
let three = 0;

if (a > b && a > c) {
  //A
  one = a;
  if (b < c) {
    two = c;
    three = b;
  } else {
    two = b;
    three = c;
  }
} else if (b > a && b > c) {
  //B
  one = b;
  if (a < c) {
    two = c;
    three = a;
  } else {
    two = a;
    three = c;
  }
} else {
  //C
  one = c;
  if (a < b) {
    two = b;
    three = a;
  } else {
    two = a;
    three = b;
  }
}

print(`${one} ${two} ${three}`);
