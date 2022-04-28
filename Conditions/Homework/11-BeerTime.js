let input = ["1:00 AM"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);
//==============

let inputData = gets();

let check = inputData.match(/\d+:\d+\s../);

if (check == inputData) {
  let getInput = inputData.split(/[: ]+/);

  let time = getInput[0] + "" + getInput[1];

  let dayPart = getInput[2];

  if (time >= 100 && time <= 1259 && dayPart === "PM") {
    print("beer time");
  } else if (time >= 100 && time <= 259 && dayPart === "AM") {
    print("beer time");
  } else {
    print("non-beer time");
  }
} else {
  print("incorect data");
}
