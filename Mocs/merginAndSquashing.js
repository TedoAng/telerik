let input = [11,
    44,
    69,
    46,
    63,
    83,
    13,
    62,
    14,
    31,
    68,
    87];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let n = +gets();
let prev = null;
let merg = [];
let squa = [];

for (let i = 0; i < n; i++) {
    let numb = +gets();
    let data = String(numb).split("");
    

    if(prev===null){
        prev = numb;
        continue;
    }
    let data2 = String(prev).split("");

    merg.push(data2[data2.length-1]+data[0]);

    let middle = +data2[data2.length-1]+Number(data[0]);

    if(middle>9){
        let middlearray = String(middle).split("");
        middle = middlearray[1];

    }
    squa.push(data2[0]+middle+data[data.length-1])
    prev = numb;



}

let print1 = "";
let print2 = "";

merg.forEach(token => {
    print1+= token+' ';
})
squa.forEach(token => {
    print2+= token+' ';
})
print(print1);
print(print2);


// Your output (clipped)
// 46 94 66 38 31 36 21 43 16 88 
// 4109 6136 4123 6113 843 192 634 1