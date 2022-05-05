let input = ["pizza", "macaroni", "kiufte", "banica", "END"];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let size = "";

while (true) {
  let food = gets();

  if (food === "END") {
    break;
  }

  if (food.length >= size.length) {
    size = food;
  }
}
print(size);
