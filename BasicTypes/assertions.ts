/*
	Assertions
	====================*/
// let stringDefault: any = "Smith";
let stringDefault: any | string = "This is a string";

let strLen: number = (stringDefault as string).length;
// OR: let stringLen_2: number = (<string>stringDefault).length;

console.log(strLen);