// A function bind together with its lexical environment

function x(){
    let a = 10;
    function y(){
        console.log(a);
    }
    return y
}
console.log(x()); // calling x() returns function y. y includes its lexical environment also. ie, a is not garbage collected

x()() // 10