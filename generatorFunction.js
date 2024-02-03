function* numberGenerator(){
    yield 1
    yield 2
    yield 3
}

const iterator = numberGenerator()

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3


// Generator function allow us to pause and resume its execution while maintaining its internal state.
// When we call generetor fn it return an iterator.
// 'yield' statement pause the execution and return a value.
// 'next()' method is used to resume the execution from where it was paused eg:- iterator.next().
// It receives an object that contains the value yielded by 'yield'. We can access it using '.value'.