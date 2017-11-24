/*
    Enum
    - typeof Color: object;
    ====================*/
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 8] = "green";
    Color[Color["yellow"] = 9] = "yellow";
    Color[Color["blue"] = 0] = "blue";
})(Color || (Color = {}));
var colorRedVal = Color.red; // 1
var colorYellowVal = Color.yellow; // 9
var colorName1 = Color[8]; // green
var colorName2 = Color[0]; // blue
