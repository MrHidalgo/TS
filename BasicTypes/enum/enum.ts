/*
	Enum
	- typeof Color: object;
	====================*/
enum Color {
	red = 1,
	green = 8,
	yellow,
	blue = 0
}

let colorRedVal: Color = Color.red; // 1
let colorYellowVal: Color = Color.yellow; // 9

let colorName1: string = Color[8]; // green
let colorName2: string = Color[0]; // blue