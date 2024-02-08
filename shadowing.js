// "shadowing" typically refers to the situation where a variable declared within a certain scope has
//  the same name as a variable declared in a higher scope. This can lead to unexpected behavior,
//  as the inner variable will "shadow" the outer one within its scope.

// shadowing
var a = 20;
{
	var a = 10;
	console.log(a); // 10
}

console.log(a); // 10
// -----------------------------

var b = 20;
{
	let b = 10;
	console.log(b); // 10
}
console.log(b); // 10
// -----------------------------

let c = 20;
{
	let c = 10;
	console.log(c); // 10
}
console.log(c); // 20
// -----------------------------

var d = 20;
{
	const d = 10;
	console.log(d); // 10
}

console.log(d); // 20
// -----------------------------

const e = 20;
{
	const e = 10;
	console.log(e); // 10
}

console.log(e); // 20


// illegal shadowing
const f = 20;  // Cannot redeclare block-scoped variable 'f'
{
	var f = 10; 
	console.log(f);
}

console.log(f);
