// Error (not use before the variable declaration ): some++;
var some;
var COLOR_RED = "RED";
// Error: COLOR_RED = "Green";
var x = 10;
// let x = 20; // Error: can not override 'x' in one scope
function f1(x) {
    // et x = 100; // Error: intersects with the function parameter
}
function f2(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
// f(false, 0); // 0
// f(true, 0);  // 100
var numLivesForCat = 9;
var kitty = {
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
var input = [1, 2];
var first1 = input[0], second = input[1];
// first === 1
// second === 2
var _a = [1, 2, 3, 4], first2 = _a[0], rest = _a.slice(1);
// first === 1
// rest === [ 2, 3, 4 ]
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, b = o.b;
// let {i} = o; // Error: variable i not declared in Object o
// console.log("a: ", a); // "foo"
// console.log("b: ", b); // 12
// without Object names:
// ({a, b} = {a: "baz", b: 101});
var newName1 = o.a, newName2 = o.b;
// console.log("newName1: ", newName1); // "foo"
// console.log("newName2: ", newName2); // 12
// let {a, b}: {a: string, b: number} = o;
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 134 : _a;
}
function f3(_a) {
    var a = _a.a, b = _a.b;
    // ...
}
function f4(_a) {
    var _b = _a === void 0 ? { a: "", b: 0 } : _a, a = _b.a, b = _b.b;
    // ...
}
f4(); // ok, default {a: "", b: 0}
function f5(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    // ...
}
// f5({a: "yes"}) // ok, default b = 0
// f5() // ok, default {a: ""}, same b = 0
// f5({}) // Error: property 'a' must in 
