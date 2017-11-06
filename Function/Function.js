/*
    Basic
    ====================*/
function add(a, b) {
    return a + b;
}
// let results: number = add(1, 2);
/*====================*/
var addSome = function (a, b) {
    return a + b;
};
// let res = addSome(1, 2);
/*====================*/
var someVariable = 1.5;
function someFunction(a) {
    return a * someVariable;
}
// someFunction(10);
/*====================*/
function getName(firstName, lasname) {
    console.log("My name is " + firstName + " " + lasname);
}
// let names1 = getName("Smith", "Smiths"); // Smith Smiths
// let names2 = getName("Smith", "Smith", "Smith"); // Error: must 2 params
// let names3 = getName("Smith"); // Error: must 2 params
/*====================*/
function getName1(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
// let names2 = getName1("Smith", "Smiths"); // Smith Smiths
// let names3 = getName1("Smith"); // Smith
/*====================*/
function getName2(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smiths"; }
    return firstName + " " + lastName;
}
// getName2("Smith"); // Smith Smiths
// getName2("Smith", "Bobs"); // Smith Bobs
/*====================*/
function getNum3(firstNumber) {
    var lastNumber = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        lastNumber[_i - 1] = arguments[_i];
    }
    var result = firstNumber;
    for (var i = 0; i < lastNumber.length; i++) {
        result += lastNumber[i];
    }
    return result;
}
function plus(x, y) {
    return x + y;
}
function getInfo(val) {
    if (typeof val === "string") {
        /* ... */
    }
    else if (typeof val === "number") {
        /* ... */
    }
    else {
        /* ... */
    }
}
// getInfo("Smith");
// getInfo(10);
/*
    Function Type
    ====================*/
var operation;
operation = function (x, y) {
    return x + y;
};
// operation(10, 20); // 30
operation = function (x, y) {
    return x * y;
};
// operation(10, 20); // 200
/*====================*/
function mathOp(x, y, op) {
    var result = op(x, y);
    return result;
}
var operationFunction;
operationFunction = function (a, b) {
    return a + b;
};
// mathOp(10, 20, operationFunction); // 30
operationFunction = function (a, b) {
    return a * b;
};
// mathOp(10, 20, operationFunction); // 200
