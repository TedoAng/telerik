let input = [5, 2, 2, 3, 4];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//==============
let a = gets();
let b = gets();
let c = gets();
let d = gets();
let e = gets();

if(a>b&&a>c&&a>d&&a>e){
    print(a);
}
if(b>a&&b>c&&b>d&&b>e){
    print(b);
}
if(c>a&&c>b&&c>d&&c>e){
    print(c);
}
if(d>a&&d>b&&d>c&&d>e){
    print(d);
}
if(e>a&&e>b&&e>c&&e>d){
    print(e);
}