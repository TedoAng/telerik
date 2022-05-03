let input = [1000];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let get = +gets();
let result = "";

while (get > 1) {
  if (get % 2 === 0) {
    result = "2";
    print(result);
    get /= 2;
  } else if (get % 3 === 0) {
    result = "3";
    print(result);
    get /= 3;
  } else if (get % 5 === 0) {
    result = "5";
    print(result);
    get /= 5;
  }
}
