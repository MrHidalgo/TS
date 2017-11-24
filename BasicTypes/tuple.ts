/*
	Tuple
	====================*/
let list: [string, number];

list = ["Bob", 10];

/*
Error:
	list = [10, "Bob"];
	console.log("list[1]: ", list[1].substr(1));
	list[4] = true;
*/

/*
Res => "ob":
	console.log("list[0]: ", list[0].substr(1));
*/
