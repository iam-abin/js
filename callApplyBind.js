// Call
// Call method is used for function borrowing
let name1 ={
    fname: "abin",
    lname: "v",
}

let name2 ={
    fname: "arun",
    lname: "s",
}

function fullName (){
    console.log(this.fname+" "+this.lname);
}

function fullNameWithArgs (state, district){
    console.log(this.fname+" "+this.lname+" "+state+" "+district);
}

fullName.call(name1)
fullName.call(name2)
fullNameWithArgs.call(name1,"kerala","alappuzha")

// Apply
// Similar to call, difference between call and apply is the way we pass the arguments
fullNameWithArgs.apply(name1,["kerala","alappuzha"])

// Bind
// Similar to call, but 'bind method' bind the method with the object and returns us the 
// copy of that as a method, which can be invoked later
let a = fullName.bind(name1)
let b = fullNameWithArgs.bind(name1,"Kerala", "kottayam")
console.log(a);
a()
b()