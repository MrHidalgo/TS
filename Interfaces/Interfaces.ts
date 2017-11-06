/*
	Simple example
	====================*/
function printLabel1(labelObject: {size: any, label: string}) {
	console.log(`Label value: ${labelObject.label} size value ${labelObject.size}`);
}

let myObject1 = {
	size: 10,
	label: "string name"
};

	// printLabel1(myObject1);


/*
	Create interface
	====================*/
interface labelledValue {
	size?: any,
	label: string
}

function printLabel2(labelObject: labelledValue) {
	console.log(`Label value: ${labelObject.label} size value ${labelObject.size}`);
}

let myObject2 = {
	size: 10,
	label: "string name"
};

	// printLabel2(myObject2);


/*
	Interface optional params
	====================*/
interface squareConfig {
	color?: string,
	width?: number
}

function createSquare(config: squareConfig) : {
	color: string,
	area: number
}
{
	let newSquare = {
		color: "white",
		area: 10
	};
	
	if(config.color) {
		newSquare.color = config.color;
		// newSquare.color = config.collor; // Auto check variable: Did u mean 'color'?
	}
	if(config.width) {
		newSquare.area = config.width * config.width;
	}
	
	return newSquare;
}

	// createSquare({color: "black"}) // {color: "black", area: 10}
	// createSquare({colour: "black", width: 5}) // Error: colour does not exist in 'squareConfig'
	// createSquare({color: "black", width: 5}) // {color: "black", area: 25}


/*
	Interface: Excess Property Checks
	====================*/
// let mySquare = createSquare({ colour: "red", width: 100 }); // Error
let mySquare = createSquare({ width: 100, opacity: 0.5 } as squareConfig);
// OR
interface squareConfig {
	color?: string,
	width?: number,
	[propName : string]: any
}




/*
	Interface: readonly
	====================*/
interface Point {
	readonly x: number,
	readonly y: number
}

let point: Point = {
	x: 1,
	y: 0
};

	// point.x // 1
	// point.y // 0
	// point.x = 5 // Error variable readonly

let arr : number[] = [1, 2, 3, 4, 5];

// console.log(arr); // [1, 2, 3, 4, 5]

let readOnlyArr : ReadonlyArray<number> = arr;

	// readOnlyArr // [1, 2, 3, 4, 5]
	// readOnlyArr[0] = 12 // Error variable readonly
	// readOnlyArr.push(100) // Error variable readonly
	// readOnlyArr.length = 0 // Error variable readonly
	// arr = readOnlyArr // Error variable readonly


/*
	Interface: Function Types
	====================*/
interface SearchFunc {
	(source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

/**
 *
 * @param {string} source
 * @param {string} subString
 * @returns {boolean}
 */
mySearch = function(
	source: string, subString: string
	/* src: string, sub: string */
	/*source, subString*/
)
{
	let result = source.search(subString);
	
	return (result !== -1);
};

// mySearch("Hello,", false); // Error
// mySearch("Hello,", 123); // Error
// mySearch("Hello,", "llo"); // Done


/*
	Interface: Indexable Types
	====================*/
interface StringArray {
	[index: number] : string
}
interface StringObject {
	[index: string] : string
}

let myArray: StringArray = ["Bob arr", "Smith arr", "Fred arr"];
let myObject: StringObject = {0: "Bob obj", 1: "Smith obj", 2: "Fred obj"};

let myStrArrayValue: string = myArray[0]; // Bob arr
let myStrObjectValue: string = myObject[1]; // Smith obj

interface NumberDictionary {
	[index: string] : number,
	length: number,
	// name: string // Error: is not assignable to string index type 'number'
	name: number
	// name: any // Maybe
}


interface ReadonlyStringArray {
	readonly [index: number]: string;
}

let myArr: ReadonlyStringArray = ["Alice", "Bob"];

// myArr[2] = "Mallory"; // Error

