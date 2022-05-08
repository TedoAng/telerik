let input = [6, 1, "go", 1, 1, "there", "IT"];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let n = +gets();
let string = "";
let numb = 0;
let prev = null;

for (let i = 0; i <= n; i++) {
  let data = gets();

  if (prev === null) {
    prev = data;
  }

  switch (typeof data) {
    case "string":
      print(numb);
      string += data + "-";
      prev = data;
      numb = 0;
      break;
    case "number":
      print(string);
      prev = data;
      if (typeof prev === "number") {
        print(numb + prev);
        prev = data;
        numb = 0;
      }
      break;

    default:
      break;
  }
}
