let input = ["dusck", 6, "udsck", "Duskc", "anagra", "ducsk", "abc", "xy"];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let main = gets();
let n = +gets();

for (let i = 0; i < n; i++) {
  let word = gets();
  let explode = word.split("");
  let container = word;
  let check = true;

  if (main.length !== word.length) {
    check = false;
  } else {
    for (let k = 0; k < explode.length; k++) {
      container = container.replace(explode[k], "");
    }

    if (container.length !== 0) {
      check = false;
    }
  }
  if (check) {
    print("Yes");
  } else {
    print("No");
  }
}
