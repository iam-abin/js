// function declaration or function definition
function a(){
    console.log("hi");
}

a()

// function expression
let b = () =>{
    console.log("hi");
}

b()

let c = function(){
    console.log("hi");
}

c()

// named function expression
let d = function e(){
    console.log(e); // fucntion e
    console.log("hi");
    console.log(d); // fucntion e
}

d()