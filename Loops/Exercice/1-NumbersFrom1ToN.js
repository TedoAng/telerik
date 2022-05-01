let input = [5.5, 4.5];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let numb = +gets();
let arr = [];

for (let i = 1; i <= numb; i++) {
  arr.push(i);
}

print(arr.join(" "));
