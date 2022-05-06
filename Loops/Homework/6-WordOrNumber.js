let input = ["8"];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============

let check = gets();
let output = "";

switch (typeof check) {
  case "string":
    for (let i = check.length; i >= 0; i--) {
      output += check.charAt(i);
    }
    break;
  case "number":
    let numb = parseInt(check);
    print(numb++);
    break;
  default:
    break;
}
print(output);
