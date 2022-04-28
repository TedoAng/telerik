let humanYears = 4;
let dogYears;

if (1 <= humanYears <= 15) {
  dogYears = 10;
}
if (dogYears === 10) {
  dogYears += 10 + (humanYears - 2) * 4;
}

console.log(dogYears);
