/*
    Simple example
    ====================*/
function printLabel1(labelObject) {
    console.log("Label value: " + labelObject.label + " size value " + labelObject.size);
}
var myObject1 = {
    size: 10,
    label: "string name"
};
function printLabel2(labelObject) {
    console.log("Label value: " + labelObject.label + " size value " + labelObject.size);
}
var myObject2 = {
    size: 10,
    label: "string name"
};
function createSquare(config) {
    var newSquare = {
        color: "white",
        area: 10
    };
    if (config.color) {
        newSquare.color = config.color;
        // newSquare.color = config.collor; // Auto check variable: Did u mean 'color'?
    }
    if (config.width) {
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
var mySquare = createSquare({ width: 100, opacity: 0.5 });
var point = {
    x: 1,
    y: 0
};
// point.x // 1
// point.y // 0
// point.x = 5 // Error variable readonly
var arr = [1, 2, 3, 4, 5];
// console.log(arr); // [1, 2, 3, 4, 5]
var readOnlyArr = arr;
var mySearch;
/**
 *
 * @param {string} source
 * @param {string} subString
 * @returns {boolean}
 */
mySearch = function (source, subString
    /* src: string, sub: string */
    /*source, subString*/
) {
    var result = source.search(subString);
    return (result !== -1);
};
var myArray = ["Bob arr", "Smith arr", "Fred arr"];
var myObject = { 0: "Bob obj", 1: "Smith obj", 2: "Fred obj" };
var myStrArrayValue = myArray[0]; // Bob arr
var myStrObjectValue = myObject[1]; // Smith obj
var myArr = ["Alice", "Bob"];
// myArr[2] = "Mallory"; // Error
