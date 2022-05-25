let input = [0, 1, 15];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============

let s = +gets();
let b = +gets();
let t = +gets();
let result;

if (b > 0) {
  // pokriva kamion do 9 litra
  if (t <= 9 && t >= 5) {
    //pokriva 9 8 7 6 5
    result = t - 5;

    if (s >= result) {
      print(result);
    } else {
      print(-1);
    }
  } else if (t < 5) {
    //pokriva 4 3 2 1
    if (s >= t) {
      print(t);
    } else {
      print(-1);
    }
  } else {
    let bigLt = b * 5;
    if (bigLt >= t) {
      print(0);
    } else {
      let smallNeed = Math.abs(bigLt - t);
      if (s >= smallNeed) {
        print(smallNeed);
      } else {
        print(-1);
      }
    }
  }
} else {
  if (s >= t) {
    print(t);
  } else if (s < t) {
    print(-1);
  }
}
