let input = [4, -5, -7, -3, -200];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let inpud = +gets();
let max = null;

for (let i = 0; i < inpud; i++) {
  let numb = +gets();

  if (max == null) {
    max = numb;
  }

  if (numb > max) {
    max = numb;
  }
}
print(max);
