let input = [4];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============

let token = +gets();
let arr = [1,2,3,4,5,6,7];
let n = 1;
let face ="";

for (let i = 0; i < token; i++) {
    face+=arr[i];
    
    for (let m = i+1; m < token+i; m++) {      
         face+=arr[m] ;       
       
    }
    
    print(face)
    face=""
    
}

