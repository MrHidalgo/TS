// Error (not use before the variable declaration ): some++;
let some: any;


const COLOR_RED: string = "RED";
// Error: COLOR_RED = "Green";


let x = 10;
// let x = 20; // Error: can not override 'x' in one scope


function f1(x) {
	// et x = 100; // Error: intersects with the function parameter
}


function f2(condition, x) {
	if (condition) {
		let x = 100;
		return x;
	}
	
	return x;
}

// f(false, 0); // 0
// f(true, 0);  // 100


const numLivesForCat = 9;
const kitty = {
	name: "Aurora",
	numLives: numLivesForCat,
};

// Error
/*kitty = {
	name: "Danielle",
	numLives: numLivesForCat
};*/

// Good
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;


let input = [1, 2];
let [first1, second] = input;
// first === 1
// second === 2


let [first2, ...rest] = [1, 2, 3, 4];
// first === 1
// rest === [ 2, 3, 4 ]


let o = {
	a: "foo",
	b: 12,
	c: "bar"
};
let {a, b} = o;
// let {i} = o; // Error: variable i not declared in Object o
// console.log("a: ", a); // "foo"
// console.log("b: ", b); // 12

// without Object names:
// ({a, b} = {a: "baz", b: 101});

let {a: newName1, b: newName2} = o;

// console.log("newName1: ", newName1); // "foo"
// console.log("newName2: ", newName2); // 12

// let {a, b}: {a: string, b: number} = o;


function keepWholeObject(wholeObject: {a: string, b?: number}) {
	let {a, b = 134} = wholeObject;
}

// console.log("keepWholeObject: ", keepWholeObject({a: "First name", b: 500})); // First Name, 500
// console.log("keepWholeObject: ", keepWholeObject({a: "First name"})); // First name, 134


type C = {a: string, b?: number}
function f3({a, b}: C): void {
	// ...
}

function f4({a, b} = {a: "", b: 0}): void {
	// ...
}
f4(); // ok, default {a: "", b: 0}

function f5({a, b = 0} = {a: ""}): void {
	// ...
}
// f5({a: "yes"}) // ok, default b = 0
// f5() // ok, default {a: ""}, same b = 0
// f5({}) // Error: property 'a' must in