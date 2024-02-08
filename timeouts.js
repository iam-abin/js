let a = setInterval(()=>{
    console.log("hi");
}, 1000)

console.log(a);

let b = setTimeout(()=>{
    console.log(" stop ");
    clearInterval(a)
}, 3000)

console.log(b);
