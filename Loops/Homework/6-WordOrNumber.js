let input = ["good", "TA", 32, 42.5, -1];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============

for (let index = 0; index < input.length; index++) {
  
  

let check = gets();
let output = "";

switch (typeof check) {
  case "string":
    for (let i = check.length; i >= 0; i--) {
      output += check.charAt(i);
    }
    print( output);
    break;
  case "number":
    let numb = check;
    numb++;
    output= +numb;
    if(numb % 1){
      print( numb+"0");
      break;
    }
    print( output);
    break;
  default:
    break;
}

}

