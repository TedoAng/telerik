let numbOfWords = 5; //gets
let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var exit = 0;
var temp = 0;
var uppercased = ["root", "expert", "BOOK", "government", "spiridon"];
const inputSima = uppercased.map((name) => name.toLowerCase());

let resultArr = [1];

const getIndex = (word) => {
  const wordArr = word.split("");

  wordArr.forEach((el) => {
    exit += alphabet.indexOf(el, 0) + 1;
  });
};

if (5 <= numbOfWords && numbOfWords <= 500) {
  for (var i = 0; i < numbOfWords; i++) {
    let input = inputSima[i]; //gets

    if (3 <= input.length && input.length <= 20) {
      getIndex(input);

      if (temp > exit || temp == 0) {
        temp = exit;
        resultArr = [];
        resultArr[input] = exit;
      }

      exit = 0;
    }
  }
}

console.log(Object.values(resultArr) + " " + Object.keys(resultArr)); //print

//========================================

// expected output: 0
// expected output: 1
// expected output: 2

// let input = [25, 100];
// let myBalance = 0;

// let message;
// let limit = 0;

// if (limit <= input.length) {
//   for (let i = 0; i < input.length; i++) {
//     let numb = input[i];

//     let due = numb - 25;
//     let income = numb - due;
//     myBalance += income;
//     message = `Yes ${myBalance}`;

//     if (myBalance < due) {
//       limit = i;
//       message = `No ${i + 1}`;
//     }
//   }
//   console.log(message);
// }

//========================================
// let input = 28;

// let big = Math.floor(input / 5);
// let small = Math.abs(big * 5 - input);

// console.log(`small blocks: ${small} and big blocks ${big}`);
