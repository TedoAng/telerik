let input = [5, 4, 3, 2, 5, 2];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============

let inpud = +gets();
let odds = 0;
let even = 0;

for (let i = 1; i <= inpud; i++) {
  let token = +gets();

  if (i % 2 === 0) {
    if (even == 0) {
      even = token;
    } else {
      even *= token;
    }
  } else {
    if (odds == 0) {
      odds = token;
    } else {
      odds *= token;
    }
  }
}

if (odds === even) {
  print(`yes ${even}`);
} else {
  print(`no ${odds} ${even}`);
}
