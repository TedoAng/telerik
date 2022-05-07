let input = ["good", "TA", 32, 42.5, -1];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============

// do{
// let check = gets();
// let output = "";

// switch (typeof check) {
//   case "string":
//     for (let i = check.length; i >= 0; i--) {
//       output += check.charAt(i);
//     }
//     break;
//   case "number":
//     let numb = parseInt(check);
//     numb++;
//     output= numb;
//     break;
//   default:
//     break;
// }
// print(output);
// }while(gets())

let test = gets();
 test = gets();

print(test);