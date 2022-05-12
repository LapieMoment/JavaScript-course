function Person(name, age) {
	this.name = name
	this.age = age
}

Person.prototype.showName = function () {
	console.log(`Mam na imie ${this.name}`)
}
Person.prototype.showAge = function () {
	console.log(`Mam ${this.age} lat`)
}

const person1 = new Person('Maciek', 11)
person1.showAge()
person1.showName()

//--------------------------------------------------------------------

class Person2 {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	showName() {
		console.log(`Mam na imie ${this.name}`)
	}
	showAge() {
		console.log(`Mam ${this.age} lat`)
	}
}

const person2 = new Person2('Monia',22)
person2.showAge()
person2.showName()