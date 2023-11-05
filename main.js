class Human {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	info() {
		console.log(`Name: ${this.name} \nAge: ${this.age}`);
	}
}

let human1 = new Human('Vasya', 20);
let human2 = new Human('Petya', 15);
let human3 = new Human('Kolya', 25);
let human4 = new Human('Olya', 30);
let human5 = new Human('Masha', 17);

class Car {
	constructor(mark, model, year, number) {
		this.mark = mark;
		this.model = model;
		this.year = year;
		this.number = number;
	}

	info() {
		console.log(`Mark: ${this.mark} \nModel: ${this.model} \nYear: ${this.year} \nNumber: ${this.number} \nOwner: ${this.owner?.name || 'No owner'}`);

		if (this.owner) {
			this.owner.info();
		}
	}

	setOwner(human) {
		if (human.age >= 18) {
			this.owner = human;
		} else {
			console.log(`${human.name}, you are too young to drive! We can't give you ${this.mark} ${this.model}`);
		}
	}
}

let car1 = new Car('BMW', 'X5', 2015, 'AA 1234 AA');
let car2 = new Car('Audi', 'A6', 2010, 'AA 1235 AA');
let car3 = new Car('VW', 'Passat', 2018, 'AA 1236 AA');
let car4 = new Car('Ford', 'Focus', 2005, 'AA 1237 AA');
let car5 = new Car('Opel', 'Astra', 2013, 'AA 1238 AA');

car1.setOwner(human1);
car1.info();

car2.setOwner(human2);
car2.info();

car3.setOwner(human3);
car3.info();

car4.setOwner(human4);
car4.info();

car5.setOwner(human5);
car5.info();




