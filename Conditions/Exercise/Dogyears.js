let input = +gets();

let output = 0;
if (input <= 2) {
  input--;
  output += 10;
  if (input == 1) {
    output += 10;
  }
} else {
  let rest = input - 2;
  let addDiff = rest * 4;
  output = 20 + addDiff;
}

print(output);
