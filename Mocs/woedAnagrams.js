let input = ["anagram",
    6,
    "gramana",
    "aaagrnm",
    "anagra",
    "margana",
    "abc",
    "xy"];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let main = gets();
let mainArr = main.split("").sort();
let n = +gets(); 
let check = true; 

for (let i = 0; i < n; i++) {  
   let word = gets();
   let wordArr = word.split("").sort();

   if(main.length!=word.length){

   
            check = false;
               
        }else{
           if(mainArr[i]==wordArr[i]){
            check =true;
            
           }else{
               check = false;
               
           }
            
        }
        if(check){
            print("Yes");
        }else{
            print("No");
        }
        
      
   }
    

