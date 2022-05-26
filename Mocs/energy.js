let input = ["10"];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let arr = gets().split("").map(Number);
let evens = 0;
let odds = 0;

for (let k = 0; k < arr.length; k++) {
  if (arr[k] % 2 === 0) {
    //even
    evens += arr[k];
  } else {
    //odd
    odds += arr[k];
  }
}

if (evens > odds) {
  print(`${evens} energy drinks`);
} else if (evens < odds) {
  print(`${odds} cups of coffee`);
} else {
  print(`${evens} of both`);
}

//100 pts
