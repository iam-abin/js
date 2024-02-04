// shallow copy

// A new object or array is created, but it copies only the reference to the original array or object
// ie, both points to the same memory locations

let a = [10,20,30];
let b = a;

b.push(50);

console.log(a); // [ 10, 20, 30, 50 ]
console.log(b); // [ 10, 20, 30, 50 ]

let aa = {name: "abi", age: 21}
let bb = aa

bb.name = "js"

console.log(aa); // { name: 'js', age: 21 }
console.log(bb); // { name: 'js', age: 21 }

// ------------------------------------------------------------------------------------------

// deep copy

// Instead of copying reference, it copies elements to the new object or array.
// ie, both points to the different memory locations

let c = [10,20,30]
let d = [...c];

c.push(50)

console.log(c); // [ 10, 20, 30, 50 ]
console.log(d); // [ 10, 20, 30 ]


let cc = {name: "abi", age: 21}
let dd = {...cc}

dd.name = "js"

console.log(cc); // { name: 'abi', age: 21 }
console.log(dd); // { name: 'js', age: 21 }