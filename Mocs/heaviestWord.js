let input = [5,
'telerik',
'alpha',
'java',
'Spring',
'nodeJS'];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let n = +gets();
let alphabet = ['#','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let arrPts = [];
let arrWord = [];

for (let i = 0; i < n; i++) {

  let origin = gets();
  let word = origin.toLowerCase().split("");
  let score = 0;

  word.forEach(letter=>
    score+=alphabet.indexOf(letter)
  )
    
  

  arrPts.push(score);
  score = 0;
  arrWord.push(origin);

  
}

let maxPoints = Math.max(...arrPts);
let wordWinner =  arrWord[arrPts.indexOf(maxPoints)];

print(maxPoints+" "+wordWinner);
