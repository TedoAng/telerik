let input = ["132", "123"];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let a = gets().split("");
let arr = a.map(Number);
let result = 0;
let toggle = true;

do {
  if (arr[0] + arr[2] == arr[1]) {
    let backToString = `${arr[0]}${arr[1]}${arr[2]}`;
    result += parseInt(backToString);
  } else {
    toggle = false;
  }
  a = gets().split("");
  arr = a.map(Number);
} while (toggle);

print(result);
