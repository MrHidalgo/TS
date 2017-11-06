/*
    Boolean
    ====================*/
var isDone = true;
var isError = false;
/*
    Number
    ====================*/
var decimal = 10;
var hex = 0x000;
/*
    String
    ====================*/
var firstName = "Smith";
var age = 28;
var sentence = "Hello, my name is " + firstName + " and I'll be " + age;
/*
    Array
    ====================*/
var listNum1 = [1, 2, 3, 4, 5];
var listNum2 = [1, 2, 3, 4, 5];
/*
    Tuple
    ====================*/
var list;
list = ["Bob", 10];
// Error: list = [10, "Bob"];
// Res "ob": console.log("list[0]: ", list[0].substr(1));
// Error: console.log("list[1]: ", list[1].substr(1));
// Error (only {string | number} typeof): list[4] = true;
/*
    Enum
    ====================*/
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 8] = "green";
    Color[Color["yellow"] = 9] = "yellow";
    Color[Color["blue"] = 0] = "blue";
})(Color || (Color = {}));
var colorRed = Color.red; // 1
var colorGreen = Color.green; // 8
var colorYellow = Color.yellow; // 9
var colorName1 = Color[8]; // green
var colorName2 = Color[0]; // blue
// Color = {1: "red", 8: "green", 9: "yellow", 0: "blue", red: 1, green: 8, yellow: 9, blue: 0}
// typeof Color: object
/*
    Any
    ====================*/
var notSure = 4;
// notSure = "String"; // string
// notSure = true; // true
// notSure.toFixed(); // is but if...
var prettySure = 4;
// Number: typeof prettySure
// Error: prettySure.toFixed()
var listArr = [1, "Test", false];
/*
    Void
    - for function without return data;
    - for variable only undefined or null;
    ====================*/
var unusable = undefined || null;
function warnUser() {
    console.log("This is warning message!");
}
/*
    Assertions
    ====================*/
// let stringDefault: any = "Smith";
var stringDefault = 10;
var stringLen_1 = stringDefault.length;
// OR: let stringLen_2: number = (<string>stringDefault).length; // 4
console.log(stringLen_1);
/*
    Never
    ====================*/
// Функция, возвращающая never, должна иметь недостижимую точку окончания функции.
function error(message) {
    throw new Error(message);
}
// Выведенный тип результата never
function fail() {
    return error("Something failed");
}
// Функция, возвращающая never, должна иметь недостижимую точку окончания функции.
function infiniteLoop() {
    while (true) {
    }
}
/*
    Union
    ====================*/
var names;
var sum = "qweqwe";
if (typeof sum === 'number') {
    console.log("Sum: ", sum);
}
