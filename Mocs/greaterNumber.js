let input = ["4,1,2", "1,3,4,2"];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let a = gets().split(",").map(Number);
let b = gets().split(",").map(Number);

let result = "";

for (let i = 0; i < a.length; i++) {
  let token = a[i];
  let subject = b.indexOf(token); //imam indeksa na clta
  let nextSub = subject;
  let n2loop = b.length - subject;
  let greaters = ""; // value of  po-golemi chisla

  if (n2loop > 1) {
    for (let m = subject + 1; m < b.length; m++) {
      if (b[m] > token) {
        greaters = b[m];
        break;
      } else {
        continue;
      }

      nextSub++;
    }
    if (greaters) {
      result += greaters + ",";
      greaters = "";
    } else {
      result += -1 + ",";
    }
  } else if (n2loop == 1) {
    if (b[subject + 1] > token) {
      result += b[subject + 1] + ",";
    } else {
      result += -1 + ",";
    }
  }
}
print(result.substring(0, result.length - 1));
