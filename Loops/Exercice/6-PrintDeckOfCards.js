let input = ["4"];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let sign = gets();

if (sign >= 2 && sign <= 10) {
  for (let i = 2; i <= +sign; i++) {
    print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
  }
}
//JACK
else if (sign.toLowerCase() === "jack") {
  for (let i = 2; i <= 10; i++) {
    print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
  }
  print(`JACK of spades, JACK of clubs, JACK of hearts, JACK of diamonds`);
}
//QUEEN
else if (sign.toLowerCase() === "queen") {
  for (let i = 2; i <= 10; i++) {
    print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
  }
  print(`JACK of spades, JACK of clubs, JACK of hearts, JACK of diamonds`);
  print(`QUEEN of spades, QUEEN of clubs, QUEEN of hearts, QUEEN of diamonds`);
}
//KING
else if (sign.toLowerCase() === "king") {
  for (let i = 2; i <= 10; i++) {
    print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
  }
  print(`JACK of spades, JACK of clubs, JACK of hearts, JACK of diamonds`);
  print(`QUEEN of spades, QUEEN of clubs, QUEEN of hearts, QUEEN of diamonds`);
  print(`KING of spades, KING of clubs, KING of hearts, KING of diamonds`);
}
//ACE
else {
  for (let i = 2; i <= 10; i++) {
    print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
  }
  print(`JACK of spades, JACK of clubs, JACK of hearts, JACK of diamonds`);
  print(`QUEEN of spades, QUEEN of clubs, QUEEN of hearts, QUEEN of diamonds`);
  print(`KING of spades, KING of clubs, KING of hearts, KING of diamonds`);
  print(`ACE of spades, ACE of clubs, ACE of hearts, ACE of diamonds`);
}
