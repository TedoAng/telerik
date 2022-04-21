//let input = [1, 2, 3, 4, 5];
let input = ["June", 24];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============

let month = gets();

let date = +gets();

switch (month) {
  case "January":
    print("Winter");
    break;
  case "February":
    print("Winter");
    break;
  case "March":
    if (date >= 20) {
      print("Spring");
    } else {
      print("Winter");
    }
    break;
  case "April":
    print("Spring");
    break;
  case "May":
    print("Spring");
    break;
  case "June":
    if (date >= 21) {
      print("Summer");
    } else {
      print("Spring");
    }
    break;
  case "July":
    print("Summer");
    break;
  case "August":
    print("Summer");
    break;
  case "September":
    if (date >= 22) {
      print("Autumn");
    } else {
      print("Summer");
    }
    break;
  case "October":
    print("Autumn");
    break;
  case "November":
    print("Autumn");
    break;
  case "December":
    if (date >= 21) {
      print("Winter");
    } else {
      print("Autumn");
    }
    break;

  default:
    break;
}
