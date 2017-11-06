/*
	Boolean
	====================*/
let isDone: boolean = true;
let isError: boolean = false;


/*
	Number
	====================*/
let decimal: number = 10;
let hex: number = 0x000;


/*
	String
	====================*/
let firstName: string = "Smith";
let age: number = 28;

let sentence: string = `Hello, my name is ${firstName} and I'll be ${age}`;


/*
	Array
	====================*/
let listNum1: number[] = [1, 2, 3, 4, 5];
let listNum2: Array<number> = [1, 2, 3, 4, 5];


/*
	Tuple
	====================*/
let list: [string, number];

list = ["Bob", 10];
// Error: list = [10, "Bob"];

// Res "ob": console.log("list[0]: ", list[0].substr(1));

// Error: console.log("list[1]: ", list[1].substr(1));
// Error (only {string | number} typeof): list[4] = true;


/*
	Enum
	====================*/
enum Color {red = 1, green = 8, yellow, blue = 0}

let colorRed: Color = Color.red; // 1
let colorGreen: Color = Color.green; // 8
let colorYellow: Color = Color.yellow; // 9

let colorName1: string = Color[8]; // green
let colorName2: string = Color[0]; // blue

// Color = {1: "red", 8: "green", 9: "yellow", 0: "blue", red: 1, green: 8, yellow: 9, blue: 0}
// typeof Color: object


/*
	Any
	====================*/
let notSure: any = 4;

// notSure = "String"; // string
// notSure = true; // true
// notSure.toFixed(); // is but if...

let prettySure: Object = 4;

// Number: typeof prettySure
// Error: prettySure.toFixed()

let listArr: Array<any> = [1, "Test", false];


/*
	Void
	- for function without return data;
	- for variable only undefined or null;
	====================*/
let unusable: void = undefined || null;

function warnUser(): void {
	console.log("This is warning message!");
}


/*
	Assertions
	====================*/
// let stringDefault: any = "Smith";
let stringDefault: any | string = 10;

let stringLen_1: number = (stringDefault as string).length;
// OR: let stringLen_2: number = (<string>stringDefault).length; // 4
console.log(stringLen_1);


/*
	Never
	====================*/
// Функция, возвращающая never, должна иметь недостижимую точку окончания функции.
function error(message: string): never {
	throw new Error(message);
}
// Выведенный тип результата never
function fail() {
	return error("Something failed");
}
// Функция, возвращающая never, должна иметь недостижимую точку окончания функции.
function infiniteLoop(): never {
	while (true) {
	}
}


/*
	Union
	====================*/
let names: string[] | number[] | string | number | boolean;
// names = ["Smith", "10"]; // ["Smith", "10"]
// names = "Smith"; // "Smith"


/*
	Type
	====================*/
type stringOrNumberType = string | number;

let sum: stringOrNumberType = "qweqwe";

if(typeof sum === 'number') {
	console.log("Sum: ", sum);
}