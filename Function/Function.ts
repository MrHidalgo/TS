/*
	Basic
	====================*/
function add(a: number, b: number): number {
	return a + b;
}
// let results: number = add(1, 2);


/*====================*/
let addSome = function(a:number, b:number):number {
	return a + b;
};
// let res = addSome(1, 2);


/*====================*/
let someVariable: number = 1.5;
function someFunction(a: number): number {
	return a * someVariable;
}
// someFunction(10);


/*====================*/
function getName(firstName: string, lasname: string): void {
	console.log(`My name is ${firstName} ${lasname}`);
}
// let names1 = getName("Smith", "Smiths"); // Smith Smiths
// let names2 = getName("Smith", "Smith", "Smith"); // Error: must 2 params
// let names3 = getName("Smith"); // Error: must 2 params


/*====================*/
function getName1(firstName: string, lastName?: string) {
	if(lastName) {
		return `${firstName} ${lastName}`;
	} else {
		return firstName;
	}
}
// let names2 = getName1("Smith", "Smiths"); // Smith Smiths
// let names3 = getName1("Smith"); // Smith


/*====================*/
function getName2(firstName: string, lastName: string = "Smiths") {
	return `${firstName} ${lastName}`;
}
// getName2("Smith"); // Smith Smiths
// getName2("Smith", "Bobs"); // Smith Bobs


/*====================*/
function getNum3(firstNumber: number, ...lastNumber: number[]): number {
	let result = firstNumber;
	
	for(let i = 0; i < lastNumber.length; i++) {
		result += lastNumber[i];
	}
	
	return result;
}
// getNum3(1, 2, 3, 4, 5); // 1 + [2, 3, 4, 5]


/*====================*/
function plus(x: string, y: string): string;
function plus(x: number, y: number): number;
function plus(x: number | boolean, y: number | boolean): number;
function plus(x: any, y: any): any {
	return x + y;
}
// plus(1, 2); // 3
// plus("1", "2"); // 12
// console.log(plus(false, true)); // 1


/*====================*/
function getInfo(name: string): string;
function getInfo(age: number): number;
function getInfo(val: string | number): any {
	if(typeof val === "string") {
		/* ... */
	} else if(typeof val === "number") {
		/* ... */
	} else {
		/* ... */
	}
}
// getInfo("Smith");
// getInfo(10);


/*
	Function Type
	====================*/
let operation: (x: number, y: number) => number;

operation = function(x: number, y: number): number {
	return x + y;
};
// operation(10, 20); // 30
operation = function(x: number, y: number): number {
	return x * y;
};
// operation(10, 20); // 200


/*====================*/
function mathOp(x: number, y: number, op: (a: number, b: number) => number) : number {
	let result = op(x, y);
	
	return result;
}
let operationFunction: (x: number, y: number) => number;

operationFunction = function(a: number, b: number): number {
	return a + b;
};
// mathOp(10, 20, operationFunction); // 30
operationFunction = function(a: number, b: number): number {
	return a * b;
};
// mathOp(10, 20, operationFunction); // 200

