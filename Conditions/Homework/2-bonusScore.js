let input = [-1];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let score = +gets();

if (score >= 0 && score <= 9) {
  if (score >= 1 && score <= 3) {
    score *= 10;
    print(score);
  } else if (score >= 4 && score <= 6) {
    score *= 100;
    print(score);
  } else if (score >= 7 && score <= 9) {
    score *= 1000;
    print(score);
  }
} else {
  print("invalid score");
}
