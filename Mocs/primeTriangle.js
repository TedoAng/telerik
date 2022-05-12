let input = [27];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============

let n = +gets();
let primes = [1];
let arr = [];

for (let j = 2; j <= n; j++) {
  count = 0;
  arr.push(j - 1);
  for (i = 1; i <= j; i++) {
    if (j % i == 0) {
      count++;
    }
  }
  if (count == 2) primes.push(j);
}

for (let i = 0; i <= primes.length; i++) {
  let stoper = primes[i];
  let row = "";

  for (let j = 1; j <= stoper; j++) {
    if (primes.includes(j)) {
      row += 1;
    } else {
      row += 0;
    }
  }
  print(row);
}

// print(primes);
// print(arr);
