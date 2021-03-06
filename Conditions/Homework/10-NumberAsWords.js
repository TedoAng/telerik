let input = ["259"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);
//==============
let stringInput = gets();
let resultString = "";

if (stringInput.length === 3) {
  const firstDigitUnique = +stringInput[0];
  const secondDigit = +stringInput[1];
  const thirdDigit = +stringInput[2];

  switch (firstDigitUnique) {
    case 1:
      resultString += "one hundred";
      break;
    case 2:
      resultString += "two hundred";
      break;
    case 3:
      resultString += "three hundred";
      break;
    case 4:
      resultString += "four hundred";
      break;
    case 5:
      resultString += "five hundred";
      break;
    case 6:
      resultString += "six hundred";
      break;
    case 7:
      resultString += "seven hundred";
      break;
    case 8:
      resultString += "eight hundred";
      break;
    case 9:
      resultString += "nine hundred";
      break;
  }

  if (secondDigit === 0 && thirdDigit === 0) {
    stringInput = "";
  } else {
    resultString += " and";
    stringInput = secondDigit + "" + thirdDigit;
  }
}

if (stringInput.length === 2) {
  const number = +stringInput;
  if (number < 20) {
    switch (number) {
      case 1:
        resultString += " one";
        break;
      case 2:
        resultString += " two";
        break;
      case 3:
        resultString += " three";
        break;
      case 4:
        resultString += " four";
        break;
      case 5:
        resultString += " five";
        break;
      case 6:
        resultString += " six";
        break;
      case 7:
        resultString += " seven";
        break;
      case 8:
        resultString += " eight";
        break;
      case 9:
        resultString += " nine";
        break;
      case 10:
        resultString += " ten";
        break;
      case 11:
        resultString += " eleven";
        break;
      case 12:
        resultString += " twelve";
        break;
      case 13:
        resultString += " thirteen";
        break;
      case 14:
        resultString += " fourteen";
        break;
      case 15:
        resultString += " fifteen";
        break;
      case 16:
        resultString += " sixteen";
        break;
      case 17:
        resultString += " seventeen";
        break;
      case 18:
        resultString += " eighteen";
        break;
      case 19:
        resultString += " nineteen";
        break;
    }
  } else {
    const firstDigit = +stringInput[0];
    const secondDigit = +stringInput[1];

    switch (firstDigit) {
      case 2:
        resultString += " twenty";
        break;
      case 3:
        resultString += " thirty";
        break;
      case 4:
        resultString += " fourty";
        break;
      case 5:
        resultString += " fifty";
        break;
      case 6:
        resultString += " sixty";
        break;
      case 7:
        resultString += " seventy";
        break;
      case 8:
        resultString += " eighty";
        break;
      case 9:
        resultString += " ninety";
        break;
    }

    if (secondDigit === 0) {
      stringInput = "";
    } else {
      stringInput = "" + secondDigit;
    }
  }
}
if (stringInput.length === 1) {
  const number = +stringInput;
  switch (number) {
    case 0:
      resultString += " zero";
      break;
    case 1:
      resultString += " one";
      break;
    case 2:
      resultString += " two";
      break;
    case 3:
      resultString += " three";
      break;
    case 4:
      resultString += " four";
      break;
    case 5:
      resultString += " five";
      break;
    case 6:
      resultString += " six";
      break;
    case 7:
      resultString += " seven";
      break;
    case 8:
      resultString += " eight";
      break;
    case 9:
      resultString += " nine";
      break;
  }
}

resultString = resultString.trim();
const firstLetter = resultString.charAt(0).toUpperCase();
resultString = firstLetter + resultString.substring(1);

print(resultString);
