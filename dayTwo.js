let input = ["2346"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============

let days = gets().split("");

let sum = 0;

for (let i = 0; i < days.length; i++) {
  sum += +days[i];
}
print(sum);
