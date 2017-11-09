/*
	Basic
	====================*/
class User {
	id: number;
	name: string;
	getInfo(): string {
		return `Name ${this.name} and ID ${this.id}`;
	}
}

// let tom: User = new User();
// tom.id = 1;
// tom.name = "Tom";


/*
	Class with constructor
	====================*/
class Info {
	name: string;
	age: number;
	
	constructor(userName: string, userAge: number) {
		this.name = userName;
		this.age = userAge;
	}
	
	getUserInfo() : string {
		return `User name is: ${this.name}, and age: ${this.age}`;
	}
}

// let user: Info = new Info("Smith", 18);
// user.age = 22;


/*
	Class constructor overloads
	====================*/
class FunctionOverloads {
	id: number;
	name: string;
	
	constructor(someId: number, someName: string);
	constructor(someId: string, someName: string);
	constructor(someId: any, someName: string) {
		
		this.id = someId;
		this.name = someName;
		
	}
	
	getSomeinfo(): string {
		return `${this.id} => ${this.name}`;
	}
}

// let some: FunctionOverloads = new FunctionOverloads(1, "Smith");
// some = new FunctionOverloads("02", "Bob");


/*
	Class static method and variable
	- Статическая функция может вызываться без создания экземпляра класса, в отличие от обычной.
	- Статические методы в классе не доступны по ссылке $this.
	- Статические методы в классе используются для позднего статического связывания.
	====================*/
class StaticMethodVariable {
	static ID: number = 1;
	
	static getId(num: number): number {
		return num * (StaticMethodVariable.ID * 10);
	}
}

// let staticMV_ID = StaticMethodVariable.ID;
// let staticMV_operation= StaticMethodVariable.getId(5);


/*
	Class Inheritance
	====================*/
class UserInfo {
	name: string;
	
	constructor(nameUser: string) {
		this.name = nameUser;
	}
	
	getInfo(): void {
		console.log(`Name is ${this.name}`);
	}
}

class Company extends UserInfo {
	
	company: string;
	getFullInfo(): void {
		console.log(`${this.name} from ${this.company}`);
	}
}

// let smith: Company = new Company("Smith");
// smith.company = "Apple";


/*
	Class Inheritance: Redefinition of base classes
	====================*/
class Animal {
	name: string;
	
	constructor(theName: string) {
		this.name = theName;
	}
	
	move(distanceInMeters: number = 0): void {
		console.log(`${this.name} moved ${distanceInMeters}`);
	}
}
class Snake extends Animal {
	constructor(name: string) {
		super(name);
	}
	
	move(distanceInMeters = 35) {
		console.log(`Snake moved...`);
		super.move(distanceInMeters);
	}
}

class Horse extends Animal {
	constructor(name: string) {
		super(name);
	}
	
	move(distanceInMeters = 55) {
		console.log(`Horse moved...`);
		super.move(distanceInMeters);
	}
}
//
// let Sam = new Snake("Sammy the Snake");
// let tom: Animal = new Horse("Lol, start, go!");
