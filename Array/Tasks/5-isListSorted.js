let input = [3, "1,2,3,4,5", "1,2,8,9,9", "1,2,2,3,2"];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let n = +gets();
let bool = true;
let prev = null;

for (let i = 0; i < n; i++) {
  let arr = gets().split(",").map(Number);

  for (let j = 0; j < arr.length; j++) {
    if (prev === null) {
      prev = arr[j];
    }

    if (arr[j] >= prev) {
      bool = true;
      prev = arr[j];
    } else {
      bool = false;
      break;
    }
  }

  if (bool) {
    print(bool);
    prev = null;
  } else {
    print(bool);
    prev = null;
  }
}
