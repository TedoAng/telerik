let input = [2];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============

let r = +gets();
let perimeter = 2 * Math.PI * r;
let area = Math.PI * Math.pow(r, 2);

print(`perimeter: ${perimeter.toFixed(2)}, area: ${area.toFixed(2)}`);
