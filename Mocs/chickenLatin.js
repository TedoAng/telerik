let input = ["He is no spring chicken anymore"];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let arrMain = gets().split(" ");

let result ="";




for (let i = 0; i < arrMain.length; i++) {
   let arrWord = arrMain[i].split("");

   switch (arrWord[0].toLocaleLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            let frstLetter = arrWord.shift();
            arrWord.push(frstLetter);
            arrWord.push("che")           
           break;
   
       default:
           arrWord.push("che")
           break;
   }

   if((arrWord.length-1)%2===0){
       arrWord.push("e")
   }

   result+=arrWord.join("")+' ';
    
}

print(result);

//100pts