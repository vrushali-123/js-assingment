/*var x=10;
console.log("x vale is",x);
x=12
console.log("x vale is",x)
let y=22;
console.log(y);
y=32;
console.log(y);
const z=44;
console.log(z);
z=45;
console.log(z);
//block levelscope
//var
var x=10;
console.log("x value is",x);
{
    var x=30;
}
console.log("x value is",x);
//let
let y =30;
console.log("y value is",y);
{
    y=35;
}console.log("y value is",y);
//const
const z=99;
console.log("z value is",z);
{
    const z=100;
}
console.log("z value is",z);*/



//conditions
//if else
//factorial
let number = parseInt(prompt("enter the positive number"));
console.log(number);
//check the no
if(number<0){
console.log('error please use any positive number and try again ');
console.log(number);
}
else if(number ===0){
    console.log("the factorial for 0 is 1");
}
else{
    let fact =1;   //local variable
for(var i=1;i<=number;i++){
fact*=i;
}
console.log('the factorialof',number,'is',fact);
}