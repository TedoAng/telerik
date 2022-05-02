let input = [4];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let sign = +gets();

if (sign >= 2 && sign <= 10) {
  for (let i = 2; i <= +sign; i++) {
    print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
  }
}
//Jack
else if (sign.toLowerCase() === "Jack") {
  for (let i = 2; i <= 10; i++) {
    print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
  }
  print(`J of spades, J of clubs, J of hearts, J of diamonds`);
}
//Queen
else if (sign.toLowerCase() === "Queen") {
  for (let i = 2; i <= 10; i++) {
    print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
  }
  print(`J of spades, J of clubs, J of hearts, J of diamonds`);
  prin(`Q of spades, Q of clubs, Q of hearts, Q of diamonds`);
}
//King
else if (sign.toLowerCase() === "King") {
  for (let i = 2; i <= 10; i++) {
    print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
  }
  print(`J of spades, J of clubs, J of hearts, J of diamonds`);
  print(`Q of spades, Q of clubs, Q of hearts, Q of diamonds`);
  print(`K of spades, K of clubs, K of hearts, K of diamonds`);
}
//ACE
else {
  for (let i = 2; i <= 10; i++) {
    print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
  }
  print(`J of spades, J of clubs, J of hearts, J of diamonds`);
  print(`Q of spades, Q of clubs, Q of hearts, Q of diamonds`);
  print(`K of spades, K of clubs, K of hearts, K of diamonds`);
  print(`A of spades, A of clubs, A of hearts, A of diamonds`);
}
