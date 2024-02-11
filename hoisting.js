// Js variables and functions can be used before it has been declared. It is called hoisting.
// Only declarations are hoisted, initializations are not hoisted.
// or
// Hoisting is a behavior where variable and function declarations are moved to the top of their
//  containing scope during the compilation phase. 

console.log(a); // undefined
printName() // 'abin'


var a = 10;

function printName(){
    console.log("abin");
}


// let and const variables are hoisted, but they are in temporal dead zone.

console.log(b); // Cannot access 'b' before initialization
console.log(c); // Cannot access 'c' before initialization

let b = 20
const c = 30


console.log(d); // d is not defined