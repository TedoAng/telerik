let input = [111];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let data = String(+gets()).split("");
let a = +data[0];
let b = +data[1];
let c = +data[2];

let first = a+b*c;
let sec = a*b+c;
let third = a+b+c;
let forth = a*b*c;
let gr1 =Math.max(first, sec)
let gr2 =Math.max(third, forth)

print(Math.max(gr1, gr2));


