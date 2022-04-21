let a = gets().charCodeAt(0);

let b = +gets();

if (a % 2 == 0) {
  if (b % 2 == 0) {
    console.log("dark");
  } else {
    console.log("light");
  }
}
if (a % 2 != 0) {
  if (b % 2 != 0) {
    print("dark");
  } else {
    print("light");
  }
}
