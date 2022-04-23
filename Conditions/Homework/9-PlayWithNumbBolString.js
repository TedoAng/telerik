let input = [2, true];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let a = +gets();
let b = gets();

switch (a) {
  case 1:
    ptint(b++);
    break;
  case 2:
    print(!b);
    break;
  case 3:
    print(b+'*');
    break;

  default:
    break;
}