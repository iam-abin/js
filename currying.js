// Function currying is
// changing a function having multiple arguments into a sequence of functions with single argument. We can do it using,
// 1. by using closure
// 2. by using bind

// without currying
function one1(a, b) {
	console.log(a * b);
}

one1(2, 4);

// with currying
function one(a) {
	function two(b) {
		console.log(a * b);
	}
	return two;
}

one(2)(4);

const add = (a) => (b) => console.log(a * b);
add(10)(20);
