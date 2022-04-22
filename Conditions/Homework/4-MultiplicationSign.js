let input = [5, 2, 2];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let a = gets();
let b = gets();
let c = gets();

if (a) {
  //todo
}
