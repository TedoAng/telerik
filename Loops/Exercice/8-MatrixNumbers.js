let input = [3];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============

let givenNum = +gets();
let line = "";

for (let i = 1; i <= givenNum; i++) {
  for (let j = 1; j <= givenNum; j++) {
    let sum = i + j - 1;
    line += sum + " ";
  }
  print(line);
  line = "";
}

// let token = +gets();
// let face = "";

// for (let i = 1; i <= token; i++) {
//   for (let j = i; j <= token; j++) {
//     face += `${j} `;
//   }

//   let counter = face.length / 2 - token;
//   let sstart = token * 2 - 1;

//   if (!counter != token) {
//     for (let k = sstart; k < counter; k--) {
//       face += "o ";
//     }
//   }

//   print(face);

//   face = "";
// }
