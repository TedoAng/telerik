let input = [3, "macaroni", "kiufte", "banica"];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let number = +gets();
let result = 0;
let toPtint = "";
let preVo = 0;
let preLength = 0;
let preFood = "";

for (let i = 0; i < number; i++) {
  let food = gets();
  let length = food.length;
  let vowels = 0;

  for (let j = 0; j < food.length; j++) {
    let char = food.charAt(j);

    switch (char) {
      case "a":
        vowels++;
        break;
      case "o":
        vowels++;
        break;
      case "u":
        vowels++;
        break;
      case "e":
        vowels++;
        break;
      case "i":
        vowels++;
        break;
      default:
        break;
    }
  }

  if (vowels / length <= result) {
    toPtint = `${food} ${vowels}/${length}`;
    if (preVo > vowels) {
      toPtint = `${preFood} ${preVo}/${preLength}`;
    }
  } else if (result === 0) {
    result = vowels / length;
    toPtint = `${food} ${vowels}/${length}`;
  }
  if (vowels > preVo) {
    preVo = vowels;
    preLength = length;
    preFood = food;
  }
}
print(toPtint);
