var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    Basic
    ====================*/
var User = (function () {
    function User() {
    }
    User.prototype.getInfo = function () {
        return "Name " + this.name + " and ID " + this.id;
    };
    return User;
}());
// let tom: User = new User();
// tom.id = 1;
// tom.name = "Tom";
/*
    Class with constructor
    ====================*/
var Info = (function () {
    function Info(userName, userAge) {
        this.name = userName;
        this.age = userAge;
    }
    Info.prototype.getUserInfo = function () {
        return "User name is: " + this.name + ", and age: " + this.age;
    };
    return Info;
}());
// let user: Info = new Info("Smith", 18);
// user.age = 22;
/*
    Class constructor overloads
    ====================*/
var FunctionOverloads = (function () {
    function FunctionOverloads(someId, someName) {
        this.id = someId;
        this.name = someName;
    }
    FunctionOverloads.prototype.getSomeinfo = function () {
        return this.id + " => " + this.name;
    };
    return FunctionOverloads;
}());
// let some: FunctionOverloads = new FunctionOverloads(1, "Smith");
// some = new FunctionOverloads("02", "Bob");
/*
    Class static method and variable
    - Статическая функция может вызываться без создания экземпляра класса, в отличие от обычной.
    - Статические методы в классе не доступны по ссылке $this.
    - Статические методы в классе используются для позднего статического связывания.
    ====================*/
var StaticMethodVariable = (function () {
    function StaticMethodVariable() {
    }
    StaticMethodVariable.getId = function (num) {
        return num * (StaticMethodVariable.ID * 10);
    };
    StaticMethodVariable.ID = 1;
    return StaticMethodVariable;
}());
// let staticMV_ID = StaticMethodVariable.ID;
// let staticMV_operation= StaticMethodVariable.getId(5);
/*
    Class Inheritance
    ====================*/
var UserInfo = (function () {
    function UserInfo(nameUser) {
        this.name = nameUser;
    }
    UserInfo.prototype.getInfo = function () {
        console.log("Name is " + this.name);
    };
    return UserInfo;
}());
var Company = (function (_super) {
    __extends(Company, _super);
    function Company() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Company.prototype.getFullInfo = function () {
        console.log(this.name + " from " + this.company);
    };
    return Company;
}(UserInfo));
// let smith: Company = new Company("Smith");
// smith.company = "Apple";
/*
    Class Inheritance: Redefinition of base classes
    ====================*/
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters);
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 35; }
        console.log("Snake moved...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 55; }
        console.log("Horse moved...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
//
// let Sam = new Snake("Sammy the Snake");
// let tom: Animal = new Horse("Lol, start, go!");
