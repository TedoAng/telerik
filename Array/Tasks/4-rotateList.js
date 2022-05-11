let input = ["5,3,2,1", 2];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============

let arr = gets().split(",");
let n = +gets();
let rev = arr.reverse();

for (let i = 0; i < n; i++) {
  let el = rev.pop();
  rev.unshift(el);
}

print(rev.reverse());
