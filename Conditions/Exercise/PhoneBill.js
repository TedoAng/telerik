//let input = [1, 2, 3, 4, 5];
let input = [25, 60];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============

let sms = +gets();
let voice = +gets();
let basePrice = 12;
let freeMin = 60;
let freeSms = 20;
let addMin = voice - freeMin; //-16
let addSms = sms - freeSms;
let minCost = 0;
let smsCost = 0;

if (addMin > 0) {
  minCost = addMin * 0.1;
}
if (addSms > 0) {
  smsCost = addSms * 0.06;
}

let taxes = (minCost + smsCost) * 0.2;
let total = basePrice + minCost + smsCost + taxes;

print(
  `${addSms < 0 ? 0 : addSms} additional messages for ${smsCost.toFixed(
    2
  )} levas`
);
print(
  `${addMin < 0 ? 0 : addMin} additional minutes for ${minCost.toFixed(
    2
  )} levas`
);

print(`${taxes.toFixed(2)} additional taxes`);
print(`${total.toFixed(2)} total bill`);
