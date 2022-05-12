let input = ["-7231"];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let data = gets().split(/\D/);
let string = "";

data.forEach((el) => {
  string += el;
});

let arr = string.split("").map(Number);
sum = null;
prt = null;

while (prt > 9 || prt === null) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  arr = String(sum).split("").map(Number);
  prt = sum;
  sum = 0;
}

print(prt);
