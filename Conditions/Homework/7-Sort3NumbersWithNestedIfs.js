let input = [0, -2.5, 5];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let a = +gets();
let b = +gets();
let c = +gets();

let result = '';

if(a>b&&a>c){
    result+=String(a);
    if(b>c){
        result+=b;
        result+=c;
    }else{
        result+=c;
        result+=b;
    }
}
else if(b>a&&b>c){
    result+=String(b);
    if(a>c){
        result+=a;
        result+=c;
    }else{
        result+=c;
        result+=a;
    }

}else{
    result+=String(c);
    if(a>b){
        result+=a;
        result+=b;
    }else{
        result+=b;
        result+=a;
    }
}
print(result);