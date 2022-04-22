//let input = [1, 2, 3, 4, 5];
let input = [0.9, 1];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============

let price = +gets();
let cash = +gets();

let change = cash - price;
let reminder = 0;

if (change >= 1) {
  let coinsOne = change - (change % 1);
  change = change - coinsOne;
  print(`${coinsOne} x 1 lev`);
  //round change
  change = Math.round(change * 100) / 100;
}
if (change >= 0.5) {
  let coinsFifty = (change - (change % 0.5)) * 2;
  change = change % 0.5;
  print(`${Math.floor(coinsFifty)} x 50 stotinki`);
  change = Math.round(change * 100) / 100;
}
if (change >= 0.2) {
  let coinsTwenty = (change - (change % 0.2)) * 5;
  change = change % 0.2;
  print(`${coinsTwenty} x 20 stotinki`);
  change = Math.round(change * 100) / 100;
}
if (change >= 0.1) {
  let coinsTen = (change - (change % 0.1)) * 10;
  change = change % 0.1;
  print(`${coinsTen} x 10 stotinki`);
  change = Math.round(change * 100) / 100;
}
if (change >= 0.05) {
  let coinsFive = (change - (change % 0.05)) * 20;
  change = change % 0.05;
  print(`${coinsFive} x 5 stotinki`);
  change = Math.round(change * 100) / 100;
}
if (change >= 0.02) {
  let coinsTwo = (change - (change % 0.02)) * 50;
  change = change % 0.02;
  print(`${Math.floor(coinsTwo)} x 2 stotinki`);
  change = Math.round(change * 100) / 100;
}
if (change >= 0.01) {
  let coinsOne = (change - (change % 0.01)) * 100;
  change = change % 0.01;
  print(`${Math.floor(coinsOne)} x 1 stotinki`);
  change = Math.round(change * 100) / 100;
}

//.toFixed() returns string
// zabavi me che polzvah else if vmesto if
