let input = [28, 3, "coffee", "tea", "pineapple"];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============

let alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let points = +gets();
let reps = +gets();

let wordResult = 0;
let totalPoints = 0;

for (let i = 0; i < reps; i++) {
  let original = gets();
  let word = original.split("");

  for (let j = 0; j < word.length; j++) {
    let letter = word[j];

    for (let k = 0; k < alphabet.length; k++) {
      if (letter.toLowerCase() === alphabet[k].toLowerCase()) {
        wordResult += k + 1;
      }
    }
  }

  print(`${original} ${Math.abs(wordResult - points)}`);
  totalPoints += Math.abs(wordResult - points);
  wordResult = 0;
}
let average = totalPoints / reps;
print(average.toFixed(2));
