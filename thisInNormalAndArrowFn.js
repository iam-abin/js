// Scope of a function depends on where that function is defined

// 'this' referes to the current object or
// 'this' referes to the object that is currently calling the function or
// Value of 'this' keyword in normal js function is determined by how a function is called(runtime binding),
// not where the function is defined.

// var age = 23
// console.log(this);  // 'this' refers to the window object here

// function displayAge(){
//     console.log(this.age);
//     console.log(age);
//     console.log(this); // 'this' refers to the window object here
// }
// window.displayAge()
// displayAge()

// console.log("---------------------------------");
// -------------------------------------------------------------------------------------------------------------

// var person = {
// 	age: 28,
// 	greet1: function () {
// 		console.log("Greet 1", this.age);
// 		console.log("Greet 1", this);
// 	},
// };

// person.greet1();

var person = {
	age: 28,
	greet1: function () {
		console.log("Greet 1", this.age);
		console.log("Greet 1", this);

		function greet2() {
			console.log("Greet 2", this.age);
			console.log("Greet 2", this);
		}

		// here 'window' is the current object of greet2() or the object which calls greet2().
		// Because we are not calling greet2 as person.greet2()
		greet2();
	},
};

person.greet1() // here person is the current object of greet1() or the object which calls greet1()

// ----------------------------------------------------------------------------------------------------------------------------------

// // but "this" keywords value in arrow function is determined by the scope where it is defined

// var person2 = {
//     age: 28,
//     greet1: ()=>{
//         console.log("Greet 1", this.age);
//         console.log("Greet 1", this);
//     }
// }

// person2.greet1() //  here person2 is the current object of greet1() or the object which calls greet1()

// var person = {
//     age: 28,
//     greet1: function(){
//         console.log("Greet 1", this.age);
//         console.log("Greet 1", this);

//         const greet2 = () =>{
//             console.log("Greet 2", this.age);
//             console.log("Greet 2", this);
//         }

//         greet2()  // here person is the current scope of greet2()
//     }
// }

// const greet2 = () =>{
//     console.log("Greet 2", this.age);
//     console.log("Greet 2", this);
// }

// greet2()  // here window is the current scope of greet2()

// person.greet1() // here person is the current object of greet1() or the object which calls greet1()
